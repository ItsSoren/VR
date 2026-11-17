(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,su=1,mf=2;var ru=1,gf=2,gi=3,ti=0,rn=1,Ye=2,Li=0,gs=1,jo=2,ou=3,au=4,xf=5,Wi=100,_f=101,yf=102,vf=103,Mf=104,bf=200,Sf=201,wf=202,Tf=203,al=204,ll=205,Ef=206,Af=207,Cf=208,Rf=209,Pf=210,If=211,Lf=212,Df=213,Uf=214,Ol=0,Bl=1,zl=2,xs=3,kl=4,Vl=5,Gl=6,Hl=7,Wl=0,Nf=1,Ff=2,Di=0,Of=1,Bf=2,zf=3,kf=4,Vf=5,Gf=6,Hf=7;var lu=300,As=301,Cs=302,Rr=303,Xl=304,Ko=306,Gn=1e3,Hi=1001,cl=1002,wn=1003,Wf=1004;var $o=1005;var sn=1006,ql=1007;var En=1008;var ii=1009,cu=1010,hu=1011,Pr=1012,Yl=1013,Ji=1014,si=1015,Ir=1016,Zl=1017,Jl=1018,Lr=1020,uu=35902,du=35899,fu=1021,pu=1022,An=1023,hr=1026,Dr=1027,jl=1028,Kl=1029,mu=1030,$l=1031;var Ql=1033,Qo=33776,ta=33777,ea=33778,na=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,yc=37820,vc=37821,Mc=36492,bc=36494,Sc=36495,wc=36283,Tc=36284,Ec=36285,Ac=36286;var _o=2300,hl=2301,rl=2302,qh=2400,Yh=2401,Zh=2402;var Xf=3200,qf=3201;var Cc=0,Yf=1,Ui="",me="srgb",_s="srgb-linear",yo="linear",ye="srgb";var ms=7680;var Jh=519,Zf=512,Jf=513,jf=514,gu=515,Kf=516,$f=517,Qf=518,tp=519,ul=35044,ia=35048;var xu="300 es",Qn=2e3,vo=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=1234567,po=Math.PI/180,ur=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function _u(n,t){return(n%t+t)%t}function Fg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Og(n,t,e){return n!==t?(e-n)/(t-n):0}function mo(n,t,e){return(1-e)*n+e*t}function Bg(n,t,e,i){return mo(n,t,1-Math.exp(-e*i))}function zg(n,t=1){return t-Math.abs(_u(n,t*2)-t)}function kg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Vg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Gg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Hg(n,t){return n+Math.random()*(t-n)}function Wg(n){return n*(.5-Math.random())}function Xg(n){n!==void 0&&(Ld=n);let t=Ld+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qg(n){return n*po}function Yg(n){return n*ur}function Zg(n){return(n&n-1)===0&&n!==0}function Jg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kg(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vt={DEG2RAD:po,RAD2DEG:ur,generateUUID:hi,clamp:jt,euclideanModulo:_u,mapLinear:Fg,inverseLerp:Og,lerp:mo,damp:Bg,pingpong:zg,smoothstep:kg,smootherstep:Vg,randInt:Gg,randFloat:Hg,randFloatSpread:Wg,seededRandom:Xg,degToRad:qg,radToDeg:Yg,isPowerOfTwo:Zg,ceilPowerOfTwo:Jg,floorPowerOfTwo:jg,setQuaternionFromProperEuler:Kg,normalize:_e,denormalize:$n},ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),E=Math.atan2(C,p*v);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_h=new S,Dd=new ue,Kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],M=s[4],y=s[7],C=s[2],E=s[5],P=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*g+a*M+l*E,r[6]=o*p+a*y+l*P,r[1]=c*_+h*v+u*C,r[4]=c*g+h*M+u*E,r[7]=c*p+h*y+u*P,r[2]=d*_+f*v+m*C,r[5]=d*g+f*M+m*E,r[8]=d*p+f*y+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yh.makeScale(t,e)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,e){return this.premultiply(yh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yh=new Kt;function yu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){let n=dr("canvas");return n.style.display="block",n}var Ud={};function fr(n){n in Ud||(Ud[n]=!0,console.warn(n))}function np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Nd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){let n={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_s]:{primaries:t,whitePoint:i,transfer:yo,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:me}}}),n}var le=$g();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,dl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hs===void 0&&(Hs=dr("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qg=0,pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vh(s[o].image)):r.push(vh(s[o]))}else r=vh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var t0=0,Mh=new S,dn=class n extends ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Hi,s=Hi,r=sn,o=En,a=An,l=ii,c=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=hi(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gn:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gn:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=lu;dn.DEFAULT_ANISOTROPY=1;var ze=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,y=(f+1)/2,C=(p+1)/2,E=(h+d)/4,P=(u+_)/4,L=(m+g)/4;return M>y&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=P/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=L/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=L/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends ui{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends fl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Mo=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Ia.subVectors(this.max,no),Ws.subVectors(t.a,no),Xs.subVectors(t.b,no),qs.subVectors(t.c,no),Oi.subVectors(Xs,Ws),Bi.subVectors(qs,Xs),us.subVectors(Ws,qs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-us.z,us.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,us.z,0,-us.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-us.y,us.x,0];return!bh(e,Ws,Xs,qs,Ia)||(e=[1,0,0,0,1,0,0,0,1],!bh(e,Ws,Xs,qs,Ia))?!1:(La.crossVectors(Oi,Bi),e=[La.x,La.y,La.z],bh(e,Ws,Xs,qs,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new S,new S,new S,new S,new S,new S,new S,new S],Jn=new S,Pa=new Ze,Ws=new S,Xs=new S,qs=new S,Oi=new S,Bi=new S,us=new S,no=new S,Ia=new S,La=new S,ds=new S;function bh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ds.fromArray(n,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=i.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var e0=new Ze,io=new S,Sh=new S,Hn=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):e0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);let e=io.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(io,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Sh)),this.expandByPoint(io.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wi=new S,wh=new S,Da=new S,zi=new S,Th=new S,Ua=new S,Eh=new S,Xi=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wh.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(wh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Da),a=zi.dot(this.direction),l=-zi.dot(Da),c=zi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wh).addScaledVector(Da,d),f}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){Th.subVectors(e,t),Ua.subVectors(i,t),Eh.crossVectors(Th,Ua);let o=this.direction.dot(Eh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let l=a*this.direction.dot(Ua.crossVectors(zi,Ua));if(l<0)return null;let c=a*this.direction.dot(Th.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(Eh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(n0,t,i0)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ki.crossVectors(i,Dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ki.crossVectors(i,Dn)),ki.normalize(),Na.crossVectors(Dn,ki),s[0]=ki.x,s[4]=Na.x,s[8]=Dn.x,s[1]=ki.y,s[5]=Na.y,s[9]=Dn.y,s[2]=ki.z,s[6]=Na.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],M=i[7],y=i[11],C=i[15],E=s[0],P=s[4],L=s[8],w=s[12],b=s[1],I=s[5],F=s[9],V=s[13],W=s[2],G=s[6],H=s[10],tt=s[14],X=s[3],it=s[7],mt=s[11],$=s[15];return r[0]=o*E+a*b+l*W+c*X,r[4]=o*P+a*I+l*G+c*it,r[8]=o*L+a*F+l*H+c*mt,r[12]=o*w+a*V+l*tt+c*$,r[1]=h*E+u*b+d*W+f*X,r[5]=h*P+u*I+d*G+f*it,r[9]=h*L+u*F+d*H+f*mt,r[13]=h*w+u*V+d*tt+f*$,r[2]=m*E+_*b+g*W+p*X,r[6]=m*P+_*I+g*G+p*it,r[10]=m*L+_*F+g*H+p*mt,r[14]=m*w+_*V+g*tt+p*$,r[3]=v*E+M*b+y*W+C*X,r[7]=v*P+M*I+y*G+C*it,r[11]=v*L+M*F+y*H+C*mt,r[15]=v*w+M*V+y*tt+C*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,M=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,C=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,E=e*v+i*M+s*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return t[0]=v*P,t[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*p-i*d*p)*P,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*P,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=y*P,t[9]=(m*u*r-h*_*r-m*i*f+e*_*f+h*i*p-e*u*p)*P,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=C*P,t[13]=(h*_*s-m*u*s+m*i*d-e*_*d-h*i*g+e*u*g)*P,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=l*c,M=l*h,y=l*u,C=i.x,E=i.y,P=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+y)*C,s[2]=(m-M)*C,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+M)*P,s[9]=(g-v)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);let c=1/r,h=1/o,u=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,e.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Qn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===vo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Qn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===vo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ys=new S,jn=new ae,n0=new S(0,0,0),i0=new S(1,1,1),ki=new S,Na=new S,Dn=new S,Od=new ae,Bd=new ue,qe=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Od,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},s0=0,zd=new S,Zs=new ue,Ti=new ae,Fa=new S,so=new S,r0=new S,o0=new ue,kd=new S(1,0,0),Vd=new S(0,1,0),Gd=new S(0,0,1),Hd={type:"added"},a0={type:"removed"},Js={type:"childadded",child:null},Ah={type:"childremoved",child:null},Ce=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new S,e=new qe,i=new ue,s=new S(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(kd,t)}rotateY(t){return this.rotateOnAxis(Vd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kd,t)}translateY(t){return this.translateOnAxis(Vd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fa.copy(t):Fa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(so,Fa,this.up):Ti.lookAt(Fa,so,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a0),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,r0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,o0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new S(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new S,Ei=new S,Ch=new S,Ai=new S,js=new S,Ks=new S,Wd=new S,Rh=new S,Ph=new S,Ih=new S,Lh=new ze,Dh=new ze,Uh=new ze,Sn=class n{constructor(t=new S,e=new S,i=new S){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),Ei.subVectors(i,e),Ch.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Ei),l=Kn.dot(Ch),c=Ei.dot(Ei),h=Ei.dot(Ch),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Lh.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),Lh.fromBufferAttribute(t,e),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lh,r.x),o.addScaledVector(Dh,r.y),o.addScaledVector(Uh,r.z),o}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),Ei.subVectors(t,e),Kn.cross(Ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),Ks.subVectors(r,i),Rh.subVectors(t,i);let l=js.dot(Rh),c=Ks.dot(Rh);if(l<=0&&c<=0)return e.copy(i);Ph.subVectors(t,s);let h=js.dot(Ph),u=Ks.dot(Ph);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(js,o);Ih.subVectors(t,r);let f=js.dot(Ih),m=Ks.dot(Ih);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ks,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Wd.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Wd,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Nh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=_u(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Nh(o,r,t+1/3),this.g=Nh(o,r,t),this.b=Nh(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let i=ip[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return le.workingToColorSpace(cn.copy(this),t),Math.round(jt(cn.r*255,0,255))*65536+Math.round(jt(cn.g*255,0,255))*256+Math.round(jt(cn.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(cn.copy(this),e);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=me){le.workingToColorSpace(cn.copy(this),t);let e=cn.r,i=cn.g,s=cn.b;return t!==me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Oa);let i=mo(Vi.h,Oa.h,e),s=mo(Vi.s,Oa.s,e),r=mo(Vi.l,Oa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new kt;kt.NAMES=ip;var l0=0,ei=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=gs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new S,Ba=new ct,c0=0,ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ul,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}};var bo=class extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var So=class extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ot=class extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},h0=0,Vn=new ae,Fh=new Ce,$s=new S,Un=new Ze,ro=new Ze,$e=new S,se=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?So:bo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Un.min,ro.min),Un.expandByPoint($e),$e.addVectors(Un.max,ro.max),Un.expandByPoint($e)):(Un.expandByPoint(ro.min),Un.expandByPoint(ro.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),$e.add($s)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new S,l[L]=new S;let c=new S,h=new S,u=new S,d=new ct,f=new ct,m=new ct,_=new S,g=new S;function p(L,w,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[L].add(_),a[w].add(_),a[b].add(_),l[L].add(g),l[w].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,w=v.length;L<w;++L){let b=v[L],I=b.start,F=b.count;for(let V=I,W=I+F;V<W;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let M=new S,y=new S,C=new S,E=new S;function P(L){C.fromBufferAttribute(s,L),E.copy(C);let w=a[L];M.copy(w),M.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,I)}for(let L=0,w=v.length;L<w;++L){let b=v[L],I=b.start,F=b.count;for(let V=I,W=I+F;V<W;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xd=new ae,fs=new Xi,za=new Hn,qd=new S,ka=new S,Va=new S,Ga=new S,Oh=new S,Ha=new S,Yd=new S,Wa=new S,ht=class extends Ce{constructor(t=new se,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Oh.fromBufferAttribute(u,t),o?Ha.addScaledVector(Oh,h):Ha.addScaledVector(Oh.sub(e),h))}e.add(Ha)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(za.containsPoint(fs.origin)===!1&&(fs.intersectSphere(za,qd)===null||fs.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let E=a.getX(y),P=a.getX(y+1),L=a.getX(y+2);s=Xa(this,p,t,i,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Xa(this,o,t,i,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let E=y,P=y+1,L=y+2;s=Xa(this,p,t,i,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,M=g+1,y=g+2;s=Xa(this,o,t,i,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function u0(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wa);return c<e.near||c>e.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ka),n.getVertexPosition(l,Va),n.getVertexPosition(c,Ga);let h=u0(n,t,e,i,ka,Va,Ga,Yd);if(h){let u=new S;Sn.getBarycoord(Yd,ka,Va,Ga,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new S,materialIndex:0};Sn.getNormal(ka,Va,Ga,d.normal),h.face=d,h.barycoord=u}return h}var qt=class n extends se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function m(_,g,p,v,M,y,C,E,P,L,w){let b=y/P,I=C/L,F=y/2,V=C/2,W=E/2,G=P+1,H=L+1,tt=0,X=0,it=new S;for(let mt=0;mt<H;mt++){let $=mt*I-V;for(let U=0;U<G;U++){let q=U*b-F;it[_]=q*v,it[g]=$*M,it[p]=W,c.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[p]=E>0?1:-1,h.push(it.x,it.y,it.z),u.push(U/P),u.push(1-mt/L),tt+=1}}for(let mt=0;mt<L;mt++)for(let $=0;$<P;$++){let U=d+$+G*mt,q=d+$+G*(mt+1),dt=d+($+1)+G*(mt+1),gt=d+($+1)+G*mt;l.push(U,q,gt),l.push(q,dt,gt),X+=6}a.addGroup(f,X,w),f+=X,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function mn(n){let t={};for(let e=0;e<n.length;e++){let i=Rs(n[e]);for(let s in i)t[s]=i[s]}return t}function d0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var sp={clone:Rs,merge:mn},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=d0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},wo=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new S,Zd=new ct,Jd=new ct,hn=class extends wo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,Jd),e.subVectors(Jd,Zd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,tr=1,ml=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Qs,tr,t,e);s.layers=this.layers,this.add(s);let r=new hn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let o=new hn(Qs,tr,t,e);o.layers=this.layers,this.add(o);let a=new hn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let l=new hn(Qs,tr,t,e);l.layers=this.layers,this.add(l);let c=new hn(Qs,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},To=class extends dn{constructor(t=[],e=As,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new To(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Li});r.uniforms.tEquirect.value=e;let o=new ht(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=sn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Qe=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Eo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ul,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new S,_r=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yr=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,oo=new S,nr=new S,ir=new S,sr=new ct,ao=new ct,rp=new ae,qa=new S,lo=new S,Ya=new S,jd=new ct,Bh=new ct,Kd=new ct,Co=class extends Ce{constructor(t=new yr){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ao(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new _r(i,3,0,!1)),er.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Za(qa.set(-.5,-.5,0),ir,o,nr,s,r),Za(lo.set(.5,-.5,0),ir,o,nr,s,r),Za(Ya.set(.5,.5,0),ir,o,nr,s,r),jd.set(0,0),Bh.set(1,0),Kd.set(1,1);let a=t.ray.intersectTriangle(qa,lo,Ya,!1,oo);if(a===null&&(Za(lo.set(-.5,.5,0),ir,o,nr,s,r),Bh.set(0,1),a=t.ray.intersectTriangle(qa,Ya,lo,!1,oo),a===null))return;let l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:Sn.getInterpolation(oo,qa,lo,Ya,jd,Bh,Kd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Za(n,t,e,i,s,r){sr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ao.x=r*sr.x-s*sr.y,ao.y=s*sr.x+r*sr.y):ao.copy(sr),n.copy(t),n.x+=ao.x,n.y+=ao.y,n.applyMatrix4(rp)}var fi=class extends dn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new ae,$d=new ae,Ja=[],Qd=new Ze,g0=new ae,co=new ht,ho=new Hn,Ro=class extends ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,g0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),Qd.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(Qd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),ho.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ho)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),t.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),$d.multiplyMatrices(i,rr),co.matrixWorld=$d,co.raycast(t,Ja);for(let o=0,a=Ja.length;o<a;o++){let l=Ja[o];l.instanceId=r,l.object=this,e.push(l)}Ja.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,jl,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zh=new S,x0=new S,_0=new Kt,un=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zh.subVectors(i,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||_0.getNormalMatrix(t),s=this.coplanarPoint(zh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new Hn,y0=new ct(.5,.5),ja=new S,Mr=class{constructor(t=new un,e=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],M=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,p-m,C-v).normalize(),s[1].setComponents(c+o,f+h,p+m,C+v).normalize(),s[2].setComponents(c+a,f+u,p+_,C+M).normalize(),s[3].setComponents(c-a,f-u,p-_,C-M).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,C-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,C-y).normalize(),e===Qn)s[5].setComponents(c+l,f+d,p+g,C+y).normalize();else if(e===vo)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=y0.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ja.x=s.normal.x>0?t.max.x:t.min.x,ja.y=s.normal.y>0?t.max.y:t.min.y,ja.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xl=new S,_l=new S,tf=new ae,uo=new Xi,Ka=new Hn,kh=new S,ef=new S,Tn=class extends Ce{constructor(t=new se,e=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)xl.fromBufferAttribute(e,s-1),_l.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xl.distanceTo(_l);t.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,t.ray.intersectsSphere(Ka)===!1)return;tf.copy(s).invert(),uo.copy(t.ray).applyMatrix4(tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),v=h.getX(_+1),M=$a(this,t,uo,l,p,v,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=$a(this,t,uo,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=$a(this,t,uo,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=$a(this,t,uo,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $a(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(xl.fromBufferAttribute(a,s),_l.fromBufferAttribute(a,r),e.distanceSqToSegment(xl,_l,kh,ef)>i)return;kh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(kh);if(!(c<t.near||c>t.far))return{distance:c,point:ef.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var nf=new S,sf=new S,Po=class extends Tn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)nf.fromBufferAttribute(e,s),sf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+nf.distanceTo(sf);t.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Io=class extends Tn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var mi=class extends dn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Lo=class extends dn{constructor(t,e,i=Ji,s,r,o,a=wn,l=wn,c,h=hr,u=1){if(h!==hr&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Do=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ys=class n extends se{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=i*2+r,_=s+1,g=new S,p=new S;for(let v=0;v<=m;v++){let M=0,y=0,C=0,E=0;if(v<=i){let w=v/i,b=w*Math.PI/2;y=-h-t*Math.cos(b),C=t*Math.sin(b),E=-t*Math.cos(b),M=w*u}else if(v<=i+r){let w=(v-i)/r;y=-h+w*e,C=t,E=0,M=u+w*d}else{let w=(v-i-r)/i,b=w*Math.PI/2;y=h+t*Math.sin(b),C=t*Math.cos(b),E=t*Math.sin(b),M=u+d+w*u}let P=Math.max(0,Math.min(1,M/f)),L=0;v===0?L=.5/s:v===m&&(L=-.5/s);for(let w=0;w<=s;w++){let b=w/s,I=b*Math.PI*2,F=Math.sin(I),V=Math.cos(I);p.x=-C*V,p.y=y,p.z=C*F,a.push(p.x,p.y,p.z),g.set(-C*V,E,C*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+L,P)}if(v>0){let w=(v-1)*_;for(let b=0;b<s;b++){let I=w+b,F=w+b+1,V=v*_+b,W=v*_+b+1;o.push(I,F,V),o.push(F,W,V)}}}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},tn=class n extends se{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new S,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class n extends se{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=i/2,p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function v(){let y=new S,C=new S,E=0,P=(e-t)/i;for(let L=0;L<=r;L++){let w=[],b=L/r,I=b*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,W=V*l+a,G=Math.sin(W),H=Math.cos(W);C.x=I*G,C.y=-b*i+g,C.z=I*H,u.push(C.x,C.y,C.z),y.set(G,P,H).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-b),w.push(m++)}_.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let b=_[w][L],I=_[w+1][L],F=_[w+1][L+1],V=_[w][L+1];(t>0||w!==0)&&(h.push(b,I,V),E+=3),(e>0||w!==r-1)&&(h.push(I,F,V),E+=3)}c.addGroup(p,E,0),p+=E}function M(y){let C=m,E=new ct,P=new S,L=0,w=y===!0?t:e,b=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let I=m;for(let F=0;F<=s;F++){let W=F/s*l+a,G=Math.cos(W),H=Math.sin(W);P.x=w*H,P.y=g*b,P.z=w*G,u.push(P.x,P.y,P.z),d.push(0,b,0),E.x=G*.5+.5,E.y=H*.5*b+.5,f.push(E.x,E.y),m++}for(let F=0;F<s;F++){let V=C+F,W=I+F;y===!0?h.push(W,W+1,V):h.push(W+1,W,V),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ri=class n extends fe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class n extends se{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new S,y=new S,C=new S;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],y),f(e[E+2],C),l(M,y,C,v)}function l(v,M,y,C){let E=C+1,P=[];for(let L=0;L<=E;L++){P[L]=[];let w=v.clone().lerp(y,L/E),b=M.clone().lerp(y,L/E),I=E-L;for(let F=0;F<=I;F++)F===0&&L===E?P[L][F]=w:P[L][F]=w.clone().lerp(b,F/I)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){let b=Math.floor(w/2);w%2===0?(d(P[L][b+1]),d(P[L+1][b]),d(P[L][b])):(d(P[L][b+1]),d(P[L+1][b+1]),d(P[L+1][b]))}}function c(v){let M=new S;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new S;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],C=o[v+4],E=Math.max(M,y,C),P=Math.min(M,y,C);E>.9&&P<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){let v=new S,M=new S,y=new S,C=new S,E=new ct,P=new ct,L=new ct;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),C.copy(v).add(M).add(y).divideScalar(3);let I=g(C);_(E,b+0,v,I),_(P,b+2,M,I),_(L,b+4,y,I)}}function _(v,M,y,C){C<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new S,s=[],r=[],o=[],a=new S,l=new ae;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends Sr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Qa=new S,Vh=new Mu,Gh=new Mu,Hh=new Mu,vl=class extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new S){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qa.subVectors(s[0],s[1]).add(s[0]),c=Qa);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Vh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),Gh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),Hh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Vh.calc(l),Gh.calc(l),Hh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function v0(n,t){let e=1-n;return e*e*t}function M0(n,t){return 2*(1-n)*n*t}function b0(n,t){return n*n*t}function go(n,t,e,i){return v0(n,t)+M0(n,e)+b0(n,i)}function S0(n,t){let e=1-n;return e*e*e*t}function w0(n,t){let e=1-n;return 3*e*e*n*t}function T0(n,t){return 3*(1-n)*n*n*t}function E0(n,t){return n*n*n*t}function xo(n,t,e,i,s){return S0(n,t)+w0(n,e)+T0(n,i)+E0(n,s)}var Uo=class extends Nn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends Nn{constructor(t=new S,e=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new S){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends Nn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Nn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Nn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends Nn{constructor(t=new S,e=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new S){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(rf(a,l.x,c.x,h.x,u.x),rf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},jh=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:vl,CubicBezierCurve:Uo,CubicBezierCurve3:Ml,EllipseCurve:Sr,LineCurve:No,LineCurve3:bl,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:Sl,SplineCurve:Oo}),wl=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new jh[s.type]().fromJSON(s))}return this}},Bo=class extends wl{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new No(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Fo(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Uo(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Oo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Sr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pi=class extends Bo{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Bo().fromJSON(s))}return this}};function A0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=op(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=L0(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=n[d],m=n[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return zo(r,o,e,a,l,c,0),o}function op(n,t,e,i,s){let r;if(s===H0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=of(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=of(o/i|0,n[o],n[o+1],r);return r&&wr(r,r.next)&&(Vo(r),r=r.next),r}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(wr(e,e.next)||Be(e.prev,e,e.next)===0)){if(Vo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&O0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?R0(n,i,s,r):C0(n)){t.push(l.i,n.i,c.i),Vo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=P0(vs(n),t),zo(n,t,e,i,s,r,2)):o===2&&I0(n,t,e,i,s,r):zo(vs(n),t,e,i,s,r,1);break}}}function C0(n){let t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&fo(s,a,r,l,o,c,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function R0(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),p=Kh(f,m,t,e,i),v=Kh(_,g,t,e,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=p&&y&&y.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&fo(a,h,l,u,c,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&fo(a,h,l,u,c,d,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&fo(a,h,l,u,c,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&fo(a,h,l,u,c,d,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function P0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!wr(i,s)&&lp(i,e,e.next,s)&&ko(i,s)&&ko(s,i)&&(t.push(i.i,e.i,s.i),Vo(e),Vo(e.next),e=n=s),e=e.next}while(e!==n);return vs(e)}function I0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k0(o,a)){let l=cp(o,a);o=vs(o,o.next),l=vs(l,l.next),zo(o,t,e,i,s,r,0),zo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function L0(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=op(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(z0(c))}s.sort(D0);for(let r=0;r<s.length;r++)e=U0(s[r],e);return e}function D0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function U0(n,t){let e=N0(n,t);if(!e)return t;let i=cp(e,n);return vs(i,i.next),vs(e,e.next)}function N0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(wr(n,e))return e;do{if(wr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&ap(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);ko(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&F0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function F0(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function O0(n,t,e,i){let s=n;do s.z===0&&(s.z=Kh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Kh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function z0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ap(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function fo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&ap(n,t,e,i,s,r,o,a)}function k0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!V0(n,t)&&(ko(n,t)&&ko(t,n)&&G0(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||wr(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function wr(n,t){return n.x===t.x&&n.y===t.y}function lp(n,t,e,i){let s=el(Be(n,t,e)),r=el(Be(n,t,i)),o=el(Be(e,i,n)),a=el(Be(e,i,t));return!!(s!==r&&o!==a||s===0&&tl(n,e,t)||r===0&&tl(n,i,t)||o===0&&tl(e,n,i)||a===0&&tl(e,t,i))}function tl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function el(n){return n>0?1:n<0?-1:0}function V0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&lp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ko(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function G0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function cp(n,t){let e=$h(n.i,n.x,n.y),i=$h(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function of(n,t,e,i){let s=$h(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $h(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Qh=class{static triangulate(t,e,i=2){return A0(t,e,i)}},ci=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];af(t),lf(i,t);let o=t.length;e.forEach(af);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,lf(i,e[l]);let a=Qh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function af(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function lf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ms=class n extends se{constructor(t=new Pi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:W0,M,y=!1,C,E,P,L;p&&(M=p.getSpacedPoints(h),y=!0,d=!1,C=p.computeFrenetFrames(h,!1),E=new S,P=new S,L=new S),d||(g=0,f=0,m=0,_=0);let w=a.extractPoints(c),b=w.shape,I=w.holes;if(!ci.isClockWise(b)){b=b.reverse();for(let at=0,rt=I.length;at<rt;at++){let et=I[at];ci.isClockWise(et)&&(I[at]=et.reverse())}}function V(at){let et=10000000000000001e-36,nt=at[0];for(let xt=1;xt<=at.length;xt++){let ut=xt%at.length,Et=at[ut],Yt=Et.x-nt.x,Xt=Et.y-nt.y,A=Yt*Yt+Xt*Xt,x=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(nt.x),Math.abs(nt.y)),R=et*x*x;if(A<=R){at.splice(ut,1),xt--;continue}nt=Et}}V(b),I.forEach(V);let W=I.length,G=b;for(let at=0;at<W;at++){let rt=I[at];b=b.concat(rt)}function H(at,rt,et){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(rt,et)}let tt=b.length;function X(at,rt,et){let nt,xt,ut,Et=at.x-rt.x,Yt=at.y-rt.y,Xt=et.x-at.x,A=et.y-at.y,x=Et*Et+Yt*Yt,R=Et*A-Yt*Xt;if(Math.abs(R)>Number.EPSILON){let O=Math.sqrt(x),K=Math.sqrt(Xt*Xt+A*A),k=rt.x-Yt/O,_t=rt.y+Et/O,ot=et.x-A/K,pt=et.y+Xt/K,ft=((ot-k)*A-(pt-_t)*Xt)/(Et*A-Yt*Xt);nt=k+Et*ft-at.x,xt=_t+Yt*ft-at.y;let Q=nt*nt+xt*xt;if(Q<=2)return new ct(nt,xt);ut=Math.sqrt(Q/2)}else{let O=!1;Et>Number.EPSILON?Xt>Number.EPSILON&&(O=!0):Et<-Number.EPSILON?Xt<-Number.EPSILON&&(O=!0):Math.sign(Yt)===Math.sign(A)&&(O=!0),O?(nt=-Yt,xt=Et,ut=Math.sqrt(x)):(nt=Et,xt=Yt,ut=Math.sqrt(x/2))}return new ct(nt/ut,xt/ut)}let it=[];for(let at=0,rt=G.length,et=rt-1,nt=at+1;at<rt;at++,et++,nt++)et===rt&&(et=0),nt===rt&&(nt=0),it[at]=X(G[at],G[et],G[nt]);let mt=[],$,U=it.concat();for(let at=0,rt=W;at<rt;at++){let et=I[at];$=[];for(let nt=0,xt=et.length,ut=xt-1,Et=nt+1;nt<xt;nt++,ut++,Et++)ut===xt&&(ut=0),Et===xt&&(Et=0),$[nt]=X(et[nt],et[ut],et[Et]);mt.push($),U=U.concat($)}let q;if(g===0)q=ci.triangulateShape(G,I);else{let at=[],rt=[];for(let et=0;et<g;et++){let nt=et/g,xt=f*Math.cos(nt*Math.PI/2),ut=m*Math.sin(nt*Math.PI/2)+_;for(let Et=0,Yt=G.length;Et<Yt;Et++){let Xt=H(G[Et],it[Et],ut);Lt(Xt.x,Xt.y,-xt),nt===0&&at.push(Xt)}for(let Et=0,Yt=W;Et<Yt;Et++){let Xt=I[Et];$=mt[Et];let A=[];for(let x=0,R=Xt.length;x<R;x++){let O=H(Xt[x],$[x],ut);Lt(O.x,O.y,-xt),nt===0&&A.push(O)}nt===0&&rt.push(A)}}q=ci.triangulateShape(at,rt)}let dt=q.length,gt=m+_;for(let at=0;at<tt;at++){let rt=d?H(b[at],U[at],gt):b[at];y?(P.copy(C.normals[0]).multiplyScalar(rt.x),E.copy(C.binormals[0]).multiplyScalar(rt.y),L.copy(M[0]).add(P).add(E),Lt(L.x,L.y,L.z)):Lt(rt.x,rt.y,0)}for(let at=1;at<=h;at++)for(let rt=0;rt<tt;rt++){let et=d?H(b[rt],U[rt],gt):b[rt];y?(P.copy(C.normals[at]).multiplyScalar(et.x),E.copy(C.binormals[at]).multiplyScalar(et.y),L.copy(M[at]).add(P).add(E),Lt(L.x,L.y,L.z)):Lt(et.x,et.y,u/h*at)}for(let at=g-1;at>=0;at--){let rt=at/g,et=f*Math.cos(rt*Math.PI/2),nt=m*Math.sin(rt*Math.PI/2)+_;for(let xt=0,ut=G.length;xt<ut;xt++){let Et=H(G[xt],it[xt],nt);Lt(Et.x,Et.y,u+et)}for(let xt=0,ut=I.length;xt<ut;xt++){let Et=I[xt];$=mt[xt];for(let Yt=0,Xt=Et.length;Yt<Xt;Yt++){let A=H(Et[Yt],$[Yt],nt);y?Lt(A.x,A.y+M[h-1].y,M[h-1].x+et):Lt(A.x,A.y,u+et)}}}Z(),st();function Z(){let at=s.length/3;if(d){let rt=0,et=tt*rt;for(let nt=0;nt<dt;nt++){let xt=q[nt];Pt(xt[2]+et,xt[1]+et,xt[0]+et)}rt=h+g*2,et=tt*rt;for(let nt=0;nt<dt;nt++){let xt=q[nt];Pt(xt[0]+et,xt[1]+et,xt[2]+et)}}else{for(let rt=0;rt<dt;rt++){let et=q[rt];Pt(et[2],et[1],et[0])}for(let rt=0;rt<dt;rt++){let et=q[rt];Pt(et[0]+tt*h,et[1]+tt*h,et[2]+tt*h)}}i.addGroup(at,s.length/3-at,0)}function st(){let at=s.length/3,rt=0;Ct(G,rt),rt+=G.length;for(let et=0,nt=I.length;et<nt;et++){let xt=I[et];Ct(xt,rt),rt+=xt.length}i.addGroup(at,s.length/3-at,1)}function Ct(at,rt){let et=at.length;for(;--et>=0;){let nt=et,xt=et-1;xt<0&&(xt=at.length-1);for(let ut=0,Et=h+g*2;ut<Et;ut++){let Yt=tt*ut,Xt=tt*(ut+1),A=rt+nt+Yt,x=rt+xt+Yt,R=rt+xt+Xt,O=rt+nt+Xt;Ht(A,x,R,O)}}}function Lt(at,rt,et){l.push(at),l.push(rt),l.push(et)}function Pt(at,rt,et){ee(at),ee(rt),ee(et);let nt=s.length/3,xt=v.generateTopUV(i,s,nt-3,nt-2,nt-1);D(xt[0]),D(xt[1]),D(xt[2])}function Ht(at,rt,et,nt){ee(at),ee(rt),ee(nt),ee(rt),ee(et),ee(nt);let xt=s.length/3,ut=v.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);D(ut[0]),D(ut[1]),D(ut[3]),D(ut[1]),D(ut[2]),D(ut[3])}function ee(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function D(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return X0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jh[s.type]().fromJSON(s)),new n(i,t.options)}},W0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-m),new ct(_,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-m),new ct(g,1-p)]}};function X0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fn=class n extends br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Go=class n extends se{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new S,d=new ct,f=new S,m=new S,_=new S,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){let M=i+v*h*s,y=Math.sin(M),C=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*C,o.push(u.x,u.y,u.z),d.x=v/e,d.y=E/(t.length-1),a.push(d.x,d.y);let P=l[3*E+0]*y,L=l[3*E+1],w=l[3*E+0]*C;c.push(P,L,w)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let y=M+v*t.length,C=y,E=y+t.length,P=y+t.length+1,L=y+1;r.push(C,E,L),r.push(P,L,E)}this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("uv",new Ot(a,2)),this.setAttribute("normal",new Ot(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Wn=class n extends br{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},fn=class n extends se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,y=v+c*(p+1),C=v+1+c*(p+1),E=v+1+c*p;f.push(M,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Tr=class n extends se{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new S,m=new ct;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let p=0;p<i;p++){let v=p+g,M=v,y=v+i+1,C=v+i+2,E=v+1;a.push(M,y,E),a.push(y,C,E)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ho=class n extends se{constructor(t=new Pi([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(r,3)),this.setAttribute("uv",new Ot(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];ci.isClockWise(v)===!0&&(m[g]=v.reverse())}let _=ci.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){let v=_[g],M=v[0]+u,y=v[1]+u,C=v[2]+u;i.push(M,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return q0(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function q0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var On=class n extends se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new S,d=new S,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let v=[],M=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+y,1-M),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let M=h[p][v+1],y=h[p][v],C=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(M,y,E),(p!==i-1||l<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Wo=class n extends br{constructor(t=1,e=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Mn=class n extends se{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var en=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pn=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tl=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nl(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Y0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var bs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends bs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,a=2*e-i;break;case Zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,l=2*i-e;break;case Zh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+v*o[c+C]+M*o[l+C]+y*o[u+C];return r}},Cl=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Rl=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nl(e,this.TimeBufferType),this.values=nl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nl(t.times,Array),values:nl(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Y0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=hl;var qi=class extends Bn{constructor(t,e,i){super(t,e,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=_o;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="color";var Il=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="number";var Ll=class extends bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ue.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xo=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Bn{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=_o;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="vector";var ol={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ul=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hp=new Ul,Er=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=new WeakMap,Nl=class extends Er{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ol.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=or.get(o);u===void 0&&(u=[],or.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=dr("img");function l(){h(),e&&e(this);let u=or.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}or.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),ol.remove(`image:${t}`);let d=or.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}or.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ol.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ii=class extends Er{constructor(t){super(t)}load(t,e,i,s){let r=new dn,o=new Nl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},qo=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ss=class extends qo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wh=new ae,cf=new S,hf=new S,tu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),Wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yo=class extends wo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eu=class extends tu{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fl=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bu="\\[\\]\\.:\\/",Z0=new RegExp("["+bu+"]","g"),Su="[^"+bu+"]",J0="[^"+bu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Su),K0=/(WCOD+)?/.source.replace("WCOD",J0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),Q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),tx=new RegExp("^"+j0+K0+$0+Q0+"$"),ex=["material","materials","bones","map"],nu=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(t){let e=tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=nu;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eS=new Float32Array(1);var uf=new ae,Ts=class{constructor(t,e,i=0,s=1/0){this.ray=new Xi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(t,e=!0,i=[]){return iu(t,this,i,e),i.sort(df),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)iu(t[s],this,i,e);return i.sort(df),i}};function df(n,t){return n.distance-t.distance}function iu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)iu(r[o],t,e,!0)}}var Ar=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ff=new S,il=new S,ar=new S,lr=new S,Xh=new S,nx=new S,ix=new S,Zo=class{constructor(t=new S,e=new S){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ff.subVectors(t,this.start),il.subVectors(this.end,this.start);let i=il.dot(il),r=il.dot(ff)/i;return e&&(r=jt(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=nx,i=ix){let s=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;ar.subVectors(c,a),lr.subVectors(h,l),Xh.subVectors(a,l);let u=ar.dot(ar),d=lr.dot(lr),f=lr.dot(Xh);if(u<=s&&d<=s)return e.copy(a),i.copy(l),e.sub(i),e.dot(e);if(u<=s)r=0,o=f/d,o=jt(o,0,1);else{let m=ar.dot(Xh);if(d<=s)o=0,r=jt(-m/u,0,1);else{let _=ar.dot(lr),g=u*d-_*_;g!==0?r=jt((_*f-m*d)/g,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=jt(-m/u,0,1)):o>1&&(o=1,r=jt((_-m)/u,0,1))}}return e.copy(a).add(ar.multiplyScalar(r)),i.copy(l).add(lr.multiplyScalar(o)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Jo=class extends Po{constructor(t=10,e=10,i=4473924,s=8947848){i=new kt(i),s=new kt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new se;h.setAttribute("position",new Ot(l,3)),h.setAttribute("color",new Ot(c,3));let u=new pi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var sl=new Ze,Cr=class extends Po{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new se;r.setIndex(new ve(i,1)),r.setAttribute("position",new ve(s,3)),super(r,new pi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&sl.setFromObject(this.object),sl.isEmpty())return;let t=sl.min,e=sl.max,i=this.geometry.attributes.position,s=i.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Es=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function wu(n,t,e,i){let s=sx(i);switch(e){case fu:return n*t;case jl:return n*t/s.components*s.byteLength;case Kl:return n*t/s.components*s.byteLength;case mu:return n*t*2/s.components*s.byteLength;case $l:return n*t*2/s.components*s.byteLength;case pu:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Ql:return n*t*4/s.components*s.byteLength;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(n,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(n,8)*Math.max(t,8)/2;case sc:case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Mc:case bc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ec:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sx(n){switch(n){case ii:case cu:return{byteLength:1,components:1};case Pr:case hu:case Ir:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case Ji:case Yl:case si:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Up(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cx(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dx=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nx=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
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
#endif`,l_=`struct PhysicalMaterial {
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
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
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
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
}`,gy=`#if DEPTH_PACKING == 3200
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
}`,xy=`#define DISTANCE
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
}`,_y=`#define DISTANCE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
}`,by=`uniform vec3 diffuse;
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
}`,Sy=`#include <common>
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,Ay=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Py=`#define NORMAL
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
}`,Iy=`#define PHONG
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
}`,Ly=`#define PHONG
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
}`,Dy=`#define STANDARD
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
}`,Uy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,Fy=`#define TOON
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
}`,Oy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,ky=`uniform vec3 color;
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
}`,Vy=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:hx,alphahash_pars_fragment:ux,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:xx,batching_pars_vertex:_x,batching_vertex:yx,begin_vertex:vx,beginnormal_vertex:Mx,bsdfs:bx,iridescence_fragment:Sx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Cx,color_fragment:Rx,color_pars_fragment:Px,color_pars_vertex:Ix,color_vertex:Lx,common:Dx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:Bx,emissivemap_pars_fragment:zx,colorspace_fragment:kx,colorspace_pars_fragment:Vx,envmap_fragment:Gx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:n_,envmap_vertex:qx,fog_vertex:Yx,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:jx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:$x,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:t_,lights_pars_begin:e_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:o_,lights_physical_fragment:a_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:__,map_particle_pars_fragment:y_,metalnessmap_fragment:v_,metalnessmap_pars_fragment:M_,morphinstance_vertex:b_,morphcolor_vertex:S_,morphnormal_vertex:w_,morphtarget_pars_vertex:T_,morphtarget_vertex:E_,normal_fragment_begin:A_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:F_,opaque_fragment:O_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:k_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:J_,skinning_pars_vertex:j_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:Q_,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:dy,cube_vert:fy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:xy,distanceRGBA_frag:_y,equirect_vert:yy,equirect_frag:vy,linedashed_vert:My,linedashed_frag:by,meshbasic_vert:Sy,meshbasic_frag:wy,meshlambert_vert:Ty,meshlambert_frag:Ey,meshmatcap_vert:Ay,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Py,meshphong_vert:Iy,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Uy,meshtoon_vert:Ny,meshtoon_frag:Fy,points_vert:Oy,points_frag:By,shadow_vert:zy,shadow_frag:ky,sprite_vert:Vy,sprite_frag:Gy},Rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},xi={basic:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:mn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:mn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:mn([Rt.points,Rt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:mn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:mn([Rt.common,Rt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:mn([Rt.sprite,Rt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:mn([Rt.common,Rt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:mn([Rt.lights,Rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};xi.physical={uniforms:mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Rc={r:0,b:0,g:0},Ps=new qe,Hy=new ae;function Wy(n,t,e,i,s,r,o){let a=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1,C=m(M);C===null?p(a,l):C&&C.isColor&&(p(C,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let C=m(y);C&&(C.isCubeTexture||C.mapping===Ko)?(h===void 0&&(h=new ht(new qt(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Rs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(y.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(Ps)),h.material.toneMapped=le.getTransfer(C.colorSpace)!==ye,(u!==C||d!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ht(new fn(2,2),new ni({name:"BackgroundMaterial",uniforms:Rs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(C.colorSpace)!==ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Rc,vu(n)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g,dispose:v}}function Xy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(b,I,F,V,W){let G=!1,H=u(V,F,I);r!==H&&(r=H,c(r.object)),G=f(b,V,F,W),G&&m(b,V,F,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(b,I,F,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,I,F){let V=F.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let G=W[I.id];G===void 0&&(G={},W[I.id]=G);let H=G[V];return H===void 0&&(H=d(l()),G[V]=H),H}function d(b){let I=[],F=[],V=[];for(let W=0;W<e;W++)I[W]=0,F[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,I,F,V){let W=r.attributes,G=I.attributes,H=0,tt=F.getAttributes();for(let X in tt)if(tt[X].location>=0){let mt=W[X],$=G[X];if($===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),mt===void 0||mt.attribute!==$||$&&mt.data!==$.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function m(b,I,F,V){let W={},G=I.attributes,H=0,tt=F.getAttributes();for(let X in tt)if(tt[X].location>=0){let mt=G[X];mt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));let $={};$.attribute=mt,mt&&mt.data&&($.data=mt.data),W[X]=$,H++}r.attributes=W,r.attributesNum=H,r.index=V}function _(){let b=r.newAttributes;for(let I=0,F=b.length;I<F;I++)b[I]=0}function g(b){p(b,0)}function p(b,I){let F=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;F[b]=1,V[b]===0&&(n.enableVertexAttribArray(b),V[b]=1),W[b]!==I&&(n.vertexAttribDivisor(b,I),W[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==b[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function M(b,I,F,V,W,G,H){H===!0?n.vertexAttribIPointer(b,I,F,W,G):n.vertexAttribPointer(b,I,F,V,W,G)}function y(b,I,F,V){_();let W=V.attributes,G=F.getAttributes(),H=I.defaultAttributeValues;for(let tt in G){let X=G[tt];if(X.location>=0){let it=W[tt];if(it===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),it!==void 0){let mt=it.normalized,$=it.itemSize,U=t.get(it);if(U===void 0)continue;let q=U.buffer,dt=U.type,gt=U.bytesPerElement,Z=dt===n.INT||dt===n.UNSIGNED_INT||it.gpuType===Yl;if(it.isInterleavedBufferAttribute){let st=it.data,Ct=st.stride,Lt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Pt=0;Pt<X.locationSize;Pt++)p(X.location+Pt,st.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Pt=0;Pt<X.locationSize;Pt++)g(X.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Pt=0;Pt<X.locationSize;Pt++)M(X.location+Pt,$/X.locationSize,dt,mt,Ct*gt,(Lt+$/X.locationSize*Pt)*gt,Z)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)p(X.location+st,it.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<X.locationSize;st++)g(X.location+st);n.bindBuffer(n.ARRAY_BUFFER,q);for(let st=0;st<X.locationSize;st++)M(X.location+st,$/X.locationSize,dt,mt,$*gt,$/X.locationSize*st*gt,Z)}}else if(H!==void 0){let mt=H[tt];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(X.location,mt);break;case 3:n.vertexAttrib3fv(X.location,mt);break;case 4:n.vertexAttrib4fv(X.location,mt);break;default:n.vertexAttrib1fv(X.location,mt)}}}}v()}function C(){L();for(let b in i){let I=i[b];for(let F in I){let V=I[F];for(let W in V)h(V[W].object),delete V[W];delete I[F]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let F in I){let V=I[F];for(let W in V)h(V[W].object),delete V[W];delete I[F]}delete i[b.id]}function P(b){for(let I in i){let F=i[I];if(F[b.id]===void 0)continue;let V=F[b.id];for(let W in V)h(V[W].object),delete V[W];delete F[b.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function qy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ii&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==si&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function Zy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new un,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,M=v*4,y=p.clippingState||null;l.value=y,y=h(m,d,M,f);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=f;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Jy(n){let t=new WeakMap;function e(o,a){return a===Rr?o.mapping=As:a===Xl&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rr||a===Xl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nr=4,up=[.125,.215,.35,.446,.526,.582],Ds=20,Tu=new Yo,dp=new kt,Eu=null,Au=0,Cu=0,Ru=!1,Ls=(1+Math.sqrt(5))/2,Ur=1/Ls,fp=[new S(-Ls,Ur,0),new S(Ls,Ur,0),new S(-Ur,0,Ls),new S(Ur,0,Ls),new S(0,Ls,-Ur),new S(0,Ls,Ur),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],jy=new S,Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=jy}=r;Eu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Eu,Au,Cu),this._renderer.xr.enabled=Ru,t.scissorTest=!1,Pc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ir,format:An,colorSpace:_s,depthBuffer:!1},s=pp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ky(r)),this._blurMaterial=$y(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,Tu)}_sceneToCubeUV(t,e,i,s,r){let l=new hn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dp),u.toneMapping=Di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new We({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new ht(new qt,_),p=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(dp),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let C=this._cubeSize;Pc(s,y*C,M>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===As||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Pc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Tu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fp[(s-r-1)%fp.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let p=[],v=0;for(let P=0;P<Ds;++P){let L=P/_,w=Math.exp(-L*L/2);p.push(w),P===0?v+=w:P<g&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;let y=this._sizeLods[s],C=3*y*(s>M-Nr?s-M+Nr:0),E=4*(this._cubeSize-y);Pc(e,C,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Tu)}};function Ky(n){let t=[],e=[],i=[],s=n,r=n-Nr+1+up.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Nr?l=up[o-n+Nr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),M=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let P=E%3*2/3-1,L=E>2?0:-1,w=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];v.set(w,_*m*E),M.set(d,g*m*E);let b=[E,E,E,E,E,E];y.set(b,p*m*E)}let C=new se;C.setAttribute("position",new ve(v,_)),C.setAttribute("uv",new ve(M,g)),C.setAttribute("faceIndex",new ve(y,p)),t.push(C),s>Nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function pp(n,t,e){let i=new di(n,t,e);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $y(n,t,e){let i=new Float32Array(Ds),s=new S(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function mp(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gp(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function Qy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rr||l===Xl,h=l===As||l===Cs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Or(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Or(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ev(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let M=0,y=v.length;M<y;M+=3){let C=v[M+0],E=v[M+1],P=v[M+2];d.push(C,E,E,P,P,C)}}else if(m!==void 0){let v=m.array;_=m.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let C=M+0,E=M+1,P=M+2;d.push(C,E,E,P,P,C)}}else return;let g=new(yu(d)?So:bo)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sv(n,t,e){let i=new WeakMap,s=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*u),P=new Mo(E,y,C,u);P.type=si,P.needsUpdate=!0;let L=M*4;for(let b=0;b<u;b++){let I=g[b],F=p[b],V=v[b],W=y*C*4*b;for(let G=0;G<I.count;G++){let H=G*L;f===!0&&(s.fromBufferAttribute(I,G),E[W+H+0]=s.x,E[W+H+1]=s.y,E[W+H+2]=s.z,E[W+H+3]=0),m===!0&&(s.fromBufferAttribute(F,G),E[W+H+4]=s.x,E[W+H+5]=s.y,E[W+H+6]=s.z,E[W+H+7]=0),_===!0&&(s.fromBufferAttribute(V,G),E[W+H+8]=s.x,E[W+H+9]=s.y,E[W+H+10]=s.z,E[W+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ct(y,C)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function rv(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Np=new dn,xp=new Lo(1,1),Fp=new Mo,Op=new pl,Bp=new To,_p=[],yp=[],vp=new Float32Array(16),Mp=new Float32Array(9),bp=new Float32Array(4);function Br(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dc(n,t){let e=yp[t];e===void 0&&(e=new Int32Array(t),yp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ov(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function lv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function hv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;bp.set(i),n.uniformMatrix2fv(this.addr,!1,bp),je(e,i)}}function uv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;Mp.set(i),n.uniformMatrix3fv(this.addr,!1,Mp),je(e,i)}}function dv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;vp.set(i),n.uniformMatrix4fv(this.addr,!1,vp),je(e,i)}}function fv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function xv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function yv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Mv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xp.compareFunction=gu,r=xp):r=Np,e.setTexture2D(t||r,s)}function bv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Op,s)}function Sv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bp,s)}function wv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Fp,s)}function Tv(n){switch(n){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return _v;case 36295:return yv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return wv}}function Ev(n,t){n.uniform1fv(this.addr,t)}function Av(n,t){let e=Br(t,this.size,2);n.uniform2fv(this.addr,e)}function Cv(n,t){let e=Br(t,this.size,3);n.uniform3fv(this.addr,e)}function Rv(n,t){let e=Br(t,this.size,4);n.uniform4fv(this.addr,e)}function Pv(n,t){let e=Br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Iv(n,t){let e=Br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lv(n,t){let e=Br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dv(n,t){n.uniform1iv(this.addr,t)}function Uv(n,t){n.uniform2iv(this.addr,t)}function Nv(n,t){n.uniform3iv(this.addr,t)}function Fv(n,t){n.uniform4iv(this.addr,t)}function Ov(n,t){n.uniform1uiv(this.addr,t)}function Bv(n,t){n.uniform2uiv(this.addr,t)}function zv(n,t){n.uniform3uiv(this.addr,t)}function kv(n,t){n.uniform4uiv(this.addr,t)}function Vv(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Np,r[o])}function Gv(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Op,r[o])}function Hv(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bp,r[o])}function Wv(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fp,r[o])}function Xv(n){switch(n){case 5126:return Ev;case 35664:return Av;case 35665:return Cv;case 35666:return Rv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Bv;case 36295:return zv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Wv}}var Iu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tv(e.type)}},Lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xv(e.type)}},Du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Pu=/(\w+)(\])?(\[|\.)?/g;function Sp(n,t){n.seq.push(t),n.map[t.id]=t}function qv(n,t,e){let i=n.name,s=i.length;for(Pu.lastIndex=0;;){let r=Pu.exec(i),o=Pu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sp(e,c===void 0?new Iu(a,n,t):new Lu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Du(a),Sp(e,u)),e=u}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qv(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function wp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Yv=37297,Zv=0;function Jv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Tp=new Kt;function jv(n){le._getMatrix(Tp,le.workingColorSpace,n);let t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case yo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ep(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jv(n.getShaderSource(t),a)}else return r}function Kv(n,t){let e=jv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $v(n,t){let e;switch(t){case Of:e="Linear";break;case Bf:e="Reinhard";break;case zf:e="Cineon";break;case kf:e="ACESFilmic";break;case Gf:e="AgX";break;case Hf:e="Neutral";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ic=new S;function Qv(){le.getLuminanceCoefficients(Ic);let n=Ic.x.toFixed(4),t=Ic.y.toFixed(4),e=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function eM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function sa(n){return n!==""}function Ap(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(n){return n.replace(iM,rM)}var sM=new Map;function rM(n,t){let e=ne[t];if(e===void 0){let i=sM.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uu(e)}var oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(n){return n.replace(oM,aM)}function aM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pp(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function cM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function uM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wl:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Ff:t="ENVMAP_BLENDING_ADD";break}return t}function dM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function fM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lM(e),c=cM(e),h=hM(e),u=uM(e),d=dM(e),f=tM(e),m=eM(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(g=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?ne.tonemapping_pars_fragment:"",e.toneMapping!==Di?$v("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Kv("linearToOutputTexel",e.outputColorSpace),Qv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),o=Uu(o),o=Ap(o,e),o=Cp(o,e),a=Uu(a),a=Ap(a,e),a=Cp(a,e),o=Rp(o),a=Rp(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,y=v+p+a,C=wp(s,s.VERTEX_SHADER,M),E=wp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(E)||"",G=F.trim(),H=V.trim(),tt=W.trim(),X=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,E);else{let mt=Ep(s,C,"vertex"),$=Ep(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+mt+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||tt==="")&&(it=!1);it&&(I.diagnostics={runnable:X,programLog:G,vertexShader:{log:H,prefix:g},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(C),s.deleteShader(E),L=new Fr(s,_),w=nM(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Yv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var pM=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fu(t),e.set(t,i)),i}},Fu=class{constructor(t){this.id=pM++,this.code=t,this.usedTimes=0}};function mM(n,t,e,i,s,r,o){let a=new mr,l=new Nu,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,I,F,V){let W=F.fog,G=V.geometry,H=w.isMeshStandardMaterial?F.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),X=tt&&tt.mapping===Ko?tt.image.height:null,it=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$=mt!==void 0?mt.length:0,U=0;G.morphAttributes.position!==void 0&&(U=1),G.morphAttributes.normal!==void 0&&(U=2),G.morphAttributes.color!==void 0&&(U=3);let q,dt,gt,Z;if(it){let pe=xi[it];q=pe.vertexShader,dt=pe.fragmentShader}else q=w.vertexShader,dt=w.fragmentShader,l.update(w),gt=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);let st=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Lt=V.isInstancedMesh===!0,Pt=V.isBatchedMesh===!0,Ht=!!w.map,ee=!!w.matcap,D=!!tt,at=!!w.aoMap,rt=!!w.lightMap,et=!!w.bumpMap,nt=!!w.normalMap,xt=!!w.displacementMap,ut=!!w.emissiveMap,Et=!!w.metalnessMap,Yt=!!w.roughnessMap,Xt=w.anisotropy>0,A=w.clearcoat>0,x=w.dispersion>0,R=w.iridescence>0,O=w.sheen>0,K=w.transmission>0,k=Xt&&!!w.anisotropyMap,_t=A&&!!w.clearcoatMap,ot=A&&!!w.clearcoatNormalMap,pt=A&&!!w.clearcoatRoughnessMap,ft=R&&!!w.iridescenceMap,Q=R&&!!w.iridescenceThicknessMap,bt=O&&!!w.sheenColorMap,Nt=O&&!!w.sheenRoughnessMap,yt=!!w.specularMap,St=!!w.specularColorMap,zt=!!w.specularIntensityMap,N=K&&!!w.transmissionMap,Mt=K&&!!w.thicknessMap,At=!!w.gradientMap,Dt=!!w.alphaMap,vt=w.alphaTest>0,lt=!!w.alphaHash,Bt=!!w.extensions,$t=Di;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&($t=n.toneMapping);let Ae={shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:q,fragmentShader:dt,defines:w.defines,customVertexShaderID:gt,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&V._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&V.instanceColor!==null,instancingMorph:Lt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:ee,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:rt,bumpMap:et,normalMap:nt,displacementMap:d&&xt,emissiveMap:ut,normalMapObjectSpace:nt&&w.normalMapType===Yf,normalMapTangentSpace:nt&&w.normalMapType===Cc,metalnessMap:Et,roughnessMap:Yt,anisotropy:Xt,anisotropyMap:k,clearcoat:A,clearcoatMap:_t,clearcoatNormalMap:ot,clearcoatRoughnessMap:pt,dispersion:x,iridescence:R,iridescenceMap:ft,iridescenceThicknessMap:Q,sheen:O,sheenColorMap:bt,sheenRoughnessMap:Nt,specularMap:yt,specularColorMap:St,specularIntensityMap:zt,transmission:K,transmissionMap:N,thicknessMap:Mt,gradientMap:At,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:Dt,alphaTest:vt,alphaHash:lt,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:at&&_(w.aoMap.channel),lightMapUv:rt&&_(w.lightMap.channel),bumpMapUv:et&&_(w.bumpMap.channel),normalMapUv:nt&&_(w.normalMap.channel),displacementMapUv:xt&&_(w.displacementMap.channel),emissiveMapUv:ut&&_(w.emissiveMap.channel),metalnessMapUv:Et&&_(w.metalnessMap.channel),roughnessMapUv:Yt&&_(w.roughnessMap.channel),anisotropyMapUv:k&&_(w.anisotropyMap.channel),clearcoatMapUv:_t&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(w.sheenRoughnessMap.channel),specularMapUv:yt&&_(w.specularMap.channel),specularColorMapUv:St&&_(w.specularColorMap.channel),specularIntensityMapUv:zt&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:Mt&&_(w.thicknessMap.channel),alphaMapUv:Dt&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(nt||Xt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ht||Dt),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:U,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:ut&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(b,w),M(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let b=m[w.type],I;if(b){let F=xi[b];I=sp.clone(F.uniforms)}else I=w.uniforms;return I}function C(w,b){let I;for(let F=0,V=h.length;F<V;F++){let W=h[F];if(W.cacheKey===b){I=W,++I.usedTimes;break}}return I===void 0&&(I=new fM(n,b,w,r),h.push(I)),I}function E(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:L}}function gM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ip(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||xM),i.length>1&&i.sort(d||Ip),s.length>1&&s.sort(d||Ip)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function _M(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Lp,n.set(i,[o])):s>=r.length?(o=new Lp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function yM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new kt};break;case"SpotLight":e={position:new S,direction:new S,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new S,halfWidth:new S,halfHeight:new S};break}return n[t.id]=e,e}}}function vM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var MM=0;function bM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function SM(n){let t=new yM,e=vM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let s=new S,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,M=0,y=0,C=0,E=0,P=0;c.sort(bM);for(let w=0,b=c.length;w<b;w++){let I=c[w],F=I.color,V=I.intensity,W=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*V,u+=F.g*V,d+=F.b*V;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],V);P++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=I.shadow.matrix,v++}i.directional[f]=H,f++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=W,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;let tt=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,tt.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[_]=tt.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=G,y++}_++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=H,g++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(V),H.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=P,i.version=MM++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Dp(n){let t=new SM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Dp(n),t.set(s,[a])):r>=o.length?(a=new Dp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`;function AM(n,t,e){let i=new Mr,s=new ct,r=new ct,o=new ze,a=new Tl({depthPacking:qf}),l=new El,c={},h=e.maxTextureSize,u={[ti]:rn,[rn]:ti,[Ye]:Ye},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:TM,fragmentShader:EM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new se;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ht(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(E,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Li),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==gi&&this.type===gi,W=p===gi&&this.type!==gi;for(let G=0,H=E.length;G<H;G++){let tt=E[G],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let it=X.getFrameExtents();if(s.multiply(it),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,X.mapSize.y=r.y)),X.map===null||V===!0||W===!0){let $=this.type!==gi?{minFilter:wn,magFilter:wn}:{};X.map!==null&&X.map.dispose(),X.map=new di(s.x,s.y,$),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let mt=X.getViewportCount();for(let $=0;$<mt;$++){let U=X.getViewport($);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),F.viewport(o),X.updateMatrices(tt,$),i=X.getFrustum(),y(P,L,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&v(X,L),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,b,I)};function v(E,P){let L=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,L,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,L,f,_,null)}function M(E,P,L,w){let b=null,I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=b.uuid,V=P.uuid,W=c[F];W===void 0&&(W={},c[F]=W);let G=W[V];G===void 0&&(G=b.clone(),W[V]=G,P.addEventListener("dispose",C)),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,w===gi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=n.properties.get(b);F.light=L}return b}function y(E,P,L,w,b){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let V=t.update(E),W=E.material;if(Array.isArray(W)){let G=V.groups;for(let H=0,tt=G.length;H<tt;H++){let X=G[H],it=W[X.materialIndex];if(it&&it.visible){let mt=M(E,it,w,b);E.onBeforeShadow(n,E,P,L,V,mt,X),n.renderBufferDirect(L,null,V,mt,E,X),E.onAfterShadow(n,E,P,L,V,mt,X)}}}else if(W.visible){let G=M(E,W,w,b);E.onBeforeShadow(n,E,P,L,V,G,null),n.renderBufferDirect(L,null,V,G,E,null),E.onAfterShadow(n,E,P,L,V,G,null)}}let F=E.children;for(let V=0,W=F.length;V<W;V++)y(F[V],P,L,w,b)}function C(E){E.target.removeEventListener("dispose",C);for(let L in c){let w=c[L],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var CM={[Ol]:Bl,[zl]:Gl,[kl]:Hl,[xs]:Vl,[Bl]:Ol,[Gl]:zl,[Hl]:kl,[Vl]:xs};function RM(n,t){function e(){let N=!1,Mt=new ze,At=null,Dt=new ze(0,0,0,0);return{setMask:function(vt){At!==vt&&!N&&(n.colorMask(vt,vt,vt,vt),At=vt)},setLocked:function(vt){N=vt},setClear:function(vt,lt,Bt,$t,Ae){Ae===!0&&(vt*=$t,lt*=$t,Bt*=$t),Mt.set(vt,lt,Bt,$t),Dt.equals(Mt)===!1&&(n.clearColor(vt,lt,Bt,$t),Dt.copy(Mt))},reset:function(){N=!1,At=null,Dt.set(-1,0,0,0)}}}function i(){let N=!1,Mt=!1,At=null,Dt=null,vt=null;return{setReversed:function(lt){if(Mt!==lt){let Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;let $t=vt;vt=null,this.setClear($t)}},getReversed:function(){return Mt},setTest:function(lt){lt?st(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(lt){At!==lt&&!N&&(n.depthMask(lt),At=lt)},setFunc:function(lt){if(Mt&&(lt=CM[lt]),Dt!==lt){switch(lt){case Ol:n.depthFunc(n.NEVER);break;case Bl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case xs:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Dt=lt}},setLocked:function(lt){N=lt},setClear:function(lt){vt!==lt&&(Mt&&(lt=1-lt),n.clearDepth(lt),vt=lt)},reset:function(){N=!1,At=null,Dt=null,vt=null,Mt=!1}}}function s(){let N=!1,Mt=null,At=null,Dt=null,vt=null,lt=null,Bt=null,$t=null,Ae=null;return{setTest:function(pe){N||(pe?st(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(pe){Mt!==pe&&!N&&(n.stencilMask(pe),Mt=pe)},setFunc:function(pe,bi,li){(At!==pe||Dt!==bi||vt!==li)&&(n.stencilFunc(pe,bi,li),At=pe,Dt=bi,vt=li)},setOp:function(pe,bi,li){(lt!==pe||Bt!==bi||$t!==li)&&(n.stencilOp(pe,bi,li),lt=pe,Bt=bi,$t=li)},setLocked:function(pe){N=pe},setClear:function(pe){Ae!==pe&&(n.clearStencil(pe),Ae=pe)},reset:function(){N=!1,Mt=null,At=null,Dt=null,vt=null,lt=null,Bt=null,$t=null,Ae=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,C=null,E=null,P=new kt(0,0,0),L=0,w=!1,b=null,I=null,F=null,V=null,W=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=tt>=2);let it=null,mt={},$=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),q=new ze().fromArray($),dt=new ze().fromArray(U);function gt(N,Mt,At,Dt){let vt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<At;Bt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(Mt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return lt}let Z={};Z[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(xs),et(!1),nt(su),st(n.CULL_FACE),at(Li);function st(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Lt(N,Mt){return u[N]!==Mt?(n.bindFramebuffer(N,Mt),u[N]=Mt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Pt(N,Mt){let At=f,Dt=!1;if(N){At=d.get(Mt),At===void 0&&(At=[],d.set(Mt,At));let vt=N.textures;if(At.length!==vt.length||At[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Bt=vt.length;lt<Bt;lt++)At[lt]=n.COLOR_ATTACHMENT0+lt;At.length=vt.length,Dt=!0}}else At[0]!==n.BACK&&(At[0]=n.BACK,Dt=!0);Dt&&n.drawBuffers(At)}function Ht(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let ee={[Wi]:n.FUNC_ADD,[_f]:n.FUNC_SUBTRACT,[yf]:n.FUNC_REVERSE_SUBTRACT};ee[vf]=n.MIN,ee[Mf]=n.MAX;let D={[bf]:n.ZERO,[Sf]:n.ONE,[wf]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Pf]:n.SRC_ALPHA_SATURATE,[Cf]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[Tf]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[Af]:n.ONE_MINUS_DST_ALPHA,[If]:n.CONSTANT_COLOR,[Lf]:n.ONE_MINUS_CONSTANT_COLOR,[Df]:n.CONSTANT_ALPHA,[Uf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(N,Mt,At,Dt,vt,lt,Bt,$t,Ae,pe){if(N===Li){_===!0&&(Ct(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),N!==xf){if(N!==g||pe!==w){if((p!==Wi||y!==Wi)&&(n.blendEquation(n.FUNC_ADD),p=Wi,y=Wi),pe)switch(N){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ou:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,C=null,E=null,P.set(0,0,0),L=0,g=N,w=pe}return}vt=vt||Mt,lt=lt||At,Bt=Bt||Dt,(Mt!==p||vt!==y)&&(n.blendEquationSeparate(ee[Mt],ee[vt]),p=Mt,y=vt),(At!==v||Dt!==M||lt!==C||Bt!==E)&&(n.blendFuncSeparate(D[At],D[Dt],D[lt],D[Bt]),v=At,M=Dt,C=lt,E=Bt),($t.equals(P)===!1||Ae!==L)&&(n.blendColor($t.r,$t.g,$t.b,Ae),P.copy($t),L=Ae),g=N,w=!1}function rt(N,Mt){N.side===Ye?Ct(n.CULL_FACE):st(n.CULL_FACE);let At=N.side===rn;Mt&&(At=!At),et(At),N.blending===gs&&N.transparent===!1?at(Li):at(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Dt=N.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function nt(N){N!==pf?(st(n.CULL_FACE),N!==I&&(N===su?n.cullFace(n.BACK):N===mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),I=N}function xt(N){N!==F&&(H&&n.lineWidth(N),F=N)}function ut(N,Mt,At){N?(st(n.POLYGON_OFFSET_FILL),(V!==Mt||W!==At)&&(n.polygonOffset(Mt,At),V=Mt,W=At)):Ct(n.POLYGON_OFFSET_FILL)}function Et(N){N?st(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function Yt(N){N===void 0&&(N=n.TEXTURE0+G-1),it!==N&&(n.activeTexture(N),it=N)}function Xt(N,Mt,At){At===void 0&&(it===null?At=n.TEXTURE0+G-1:At=it);let Dt=mt[At];Dt===void 0&&(Dt={type:void 0,texture:void 0},mt[At]=Dt),(Dt.type!==N||Dt.texture!==Mt)&&(it!==At&&(n.activeTexture(At),it=At),n.bindTexture(N,Mt||Z[N]),Dt.type=N,Dt.texture=Mt)}function A(){let N=mt[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(N){q.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function Nt(N){dt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),dt.copy(N))}function yt(N,Mt){let At=c.get(Mt);At===void 0&&(At=new WeakMap,c.set(Mt,At));let Dt=At.get(N);Dt===void 0&&(Dt=n.getUniformBlockIndex(Mt,N.name),At.set(N,Dt))}function St(N,Mt){let Dt=c.get(Mt).get(N);l.get(Mt)!==Dt&&(n.uniformBlockBinding(Mt,Dt,N.__bindingPointIndex),l.set(Mt,Dt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,mt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,C=null,E=null,P=new kt(0,0,0),L=0,w=!1,b=null,I=null,F=null,V=null,W=null,q.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Ct,bindFramebuffer:Lt,drawBuffers:Pt,useProgram:Ht,setBlending:at,setMaterial:rt,setFlipSided:et,setCullFace:nt,setLineWidth:xt,setPolygonOffset:ut,setScissorTest:Et,activeTexture:Yt,bindTexture:Xt,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:ft,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:St,texStorage2D:ot,texStorage3D:pt,texSubImage2D:O,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:_t,scissor:bt,viewport:Nt,reset:zt}}function PM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return f?new OffscreenCanvas(A,x):dr("canvas")}function _(A,x,R){let O=1,K=Xt(A);if((K.width>R||K.height>R)&&(O=R/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let k=Math.floor(O*K.width),_t=Math.floor(O*K.height);u===void 0&&(u=m(k,_t));let ot=x?m(k,_t):u;return ot.width=k,ot.height=_t,ot.getContext("2d").drawImage(A,0,0,k,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+_t+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,x,R,O,K=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let k=x;if(x===n.RED&&(R===n.FLOAT&&(k=n.R32F),R===n.HALF_FLOAT&&(k=n.R16F),R===n.UNSIGNED_BYTE&&(k=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.R8UI),R===n.UNSIGNED_SHORT&&(k=n.R16UI),R===n.UNSIGNED_INT&&(k=n.R32UI),R===n.BYTE&&(k=n.R8I),R===n.SHORT&&(k=n.R16I),R===n.INT&&(k=n.R32I)),x===n.RG&&(R===n.FLOAT&&(k=n.RG32F),R===n.HALF_FLOAT&&(k=n.RG16F),R===n.UNSIGNED_BYTE&&(k=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RG8UI),R===n.UNSIGNED_SHORT&&(k=n.RG16UI),R===n.UNSIGNED_INT&&(k=n.RG32UI),R===n.BYTE&&(k=n.RG8I),R===n.SHORT&&(k=n.RG16I),R===n.INT&&(k=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGB8UI),R===n.UNSIGNED_SHORT&&(k=n.RGB16UI),R===n.UNSIGNED_INT&&(k=n.RGB32UI),R===n.BYTE&&(k=n.RGB8I),R===n.SHORT&&(k=n.RGB16I),R===n.INT&&(k=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),R===n.UNSIGNED_INT&&(k=n.RGBA32UI),R===n.BYTE&&(k=n.RGBA8I),R===n.SHORT&&(k=n.RGBA16I),R===n.INT&&(k=n.RGBA32I)),x===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),x===n.RGBA){let _t=K?yo:le.getTransfer(O);R===n.FLOAT&&(k=n.RGBA32F),R===n.HALF_FLOAT&&(k=n.RGBA16F),R===n.UNSIGNED_BYTE&&(k=_t===ye?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function y(A,x){let R;return A?x===null||x===Ji||x===Lr?R=n.DEPTH24_STENCIL8:x===si?R=n.DEPTH32F_STENCIL8:x===Pr&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ji||x===Lr?R=n.DEPTH_COMPONENT24:x===si?R=n.DEPTH_COMPONENT32F:x===Pr&&(R=n.DEPTH_COMPONENT16),R}function C(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){let x=A.target;x.removeEventListener("dispose",E),L(x),x.isVideoTexture&&h.delete(x)}function P(A){let x=A.target;x.removeEventListener("dispose",P),b(x)}function L(A){let x=i.get(A);if(x.__webglInit===void 0)return;let R=A.source,O=d.get(R);if(O){let K=O[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(A),Object.keys(O).length===0&&d.delete(R)}i.remove(A)}function w(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let R=A.source,O=d.get(R);delete O[x.__cacheKey],o.memory.textures--}function b(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let K=0;K<x.__webglFramebuffer[O].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[O][K]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let R=A.textures;for(let O=0,K=R.length;O<K;O++){let k=i.get(R[O]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(R[O])}i.remove(A)}let I=0;function F(){I=0}function V(){let A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function W(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function G(A,x){let R=i.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&R.__version!==A.version){let O=A.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(R,A,x);return}}else A.isExternalTexture&&(R.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function H(A,x){let R=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){Z(R,A,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function tt(A,x){let R=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){Z(R,A,x);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function X(A,x){let R=i.get(A);if(A.version>0&&R.__version!==A.version){st(R,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}let it={[Gn]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},mt={[wn]:n.NEAREST,[Wf]:n.NEAREST_MIPMAP_NEAREST,[$o]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[ql]:n.LINEAR_MIPMAP_NEAREST,[En]:n.LINEAR_MIPMAP_LINEAR},$={[Zf]:n.NEVER,[tp]:n.ALWAYS,[Jf]:n.LESS,[gu]:n.LEQUAL,[jf]:n.EQUAL,[Qf]:n.GEQUAL,[Kf]:n.GREATER,[$f]:n.NOTEQUAL};function U(A,x){if(x.type===si&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===ql||x.magFilter===$o||x.magFilter===En||x.minFilter===sn||x.minFilter===ql||x.minFilter===$o||x.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,it[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,it[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,it[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,$[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==$o&&x.minFilter!==En||x.type===si&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function q(A,x){let R=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",E));let O=x.source,K=d.get(O);K===void 0&&(K={},d.set(O,K));let k=W(x);if(k!==A.__cacheKey){K[k]===void 0&&(K[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),K[k].usedTimes++;let _t=K[A.__cacheKey];_t!==void 0&&(K[A.__cacheKey].usedTimes--,_t.usedTimes===0&&w(x)),A.__cacheKey=k,A.__webglTexture=K[k].texture}return R}function dt(A,x,R){return Math.floor(Math.floor(A/R)/x)}function gt(A,x,R,O){let k=A.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,R,O,x.data);else{k.sort((Q,bt)=>Q.start-bt.start);let _t=0;for(let Q=1;Q<k.length;Q++){let bt=k[_t],Nt=k[Q],yt=bt.start+bt.count,St=dt(Nt.start,x.width,4),zt=dt(bt.start,x.width,4);Nt.start<=yt+1&&St===zt&&dt(Nt.start+Nt.count-1,x.width,4)===St?bt.count=Math.max(bt.count,Nt.start+Nt.count-bt.start):(++_t,k[_t]=Nt)}k.length=_t+1;let ot=n.getParameter(n.UNPACK_ROW_LENGTH),pt=n.getParameter(n.UNPACK_SKIP_PIXELS),ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,bt=k.length;Q<bt;Q++){let Nt=k[Q],yt=Math.floor(Nt.start/4),St=Math.ceil(Nt.count/4),zt=yt%x.width,N=Math.floor(yt/x.width),Mt=St,At=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,zt,N,Mt,At,R,O,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,ft)}}function Z(A,x,R){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);let K=q(A,x),k=x.source;e.bindTexture(O,A.__webglTexture,n.TEXTURE0+R);let _t=i.get(k);if(k.version!==_t.__version||K===!0){e.activeTexture(n.TEXTURE0+R);let ot=le.getPrimaries(le.workingColorSpace),pt=x.colorSpace===Ui?null:le.getPrimaries(x.colorSpace),ft=x.colorSpace===Ui||ot===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Q=_(x.image,!1,s.maxTextureSize);Q=Yt(x,Q);let bt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),yt=M(x.internalFormat,bt,Nt,x.colorSpace,x.isVideoTexture);U(O,x);let St,zt=x.mipmaps,N=x.isVideoTexture!==!0,Mt=_t.__version===void 0||K===!0,At=k.dataReady,Dt=C(x,Q);if(x.isDepthTexture)yt=y(x.format===Dr,x.type),Mt&&(N?e.texStorage2D(n.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,bt,Nt,null));else if(x.isDataTexture)if(zt.length>0){N&&Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,yt,zt[0].width,zt[0].height);for(let vt=0,lt=zt.length;vt<lt;vt++)St=zt[vt],N?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,bt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,vt,yt,St.width,St.height,0,bt,Nt,St.data);x.generateMipmaps=!1}else N?(Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,yt,Q.width,Q.height),At&&gt(x,Q,bt,Nt)):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,bt,Nt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,yt,zt[0].width,zt[0].height,Q.depth);for(let vt=0,lt=zt.length;vt<lt;vt++)if(St=zt[vt],x.format!==An)if(bt!==null)if(N){if(At)if(x.layerUpdates.size>0){let Bt=wu(St.width,St.height,x.format,x.type);for(let $t of x.layerUpdates){let Ae=St.data.subarray($t*Bt/St.data.BYTES_PER_ELEMENT,($t+1)*Bt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,$t,St.width,St.height,1,bt,Ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,Q.depth,bt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,yt,St.width,St.height,Q.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?At&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,Q.depth,bt,Nt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,yt,St.width,St.height,Q.depth,0,bt,Nt,St.data)}else{N&&Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,yt,zt[0].width,zt[0].height);for(let vt=0,lt=zt.length;vt<lt;vt++)St=zt[vt],x.format!==An?bt!==null?N?At&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,yt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,bt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,vt,yt,St.width,St.height,0,bt,Nt,St.data)}else if(x.isDataArrayTexture)if(N){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,yt,Q.width,Q.height,Q.depth),At)if(x.layerUpdates.size>0){let vt=wu(Q.width,Q.height,x.format,x.type);for(let lt of x.layerUpdates){let Bt=Q.data.subarray(lt*vt/Q.data.BYTES_PER_ELEMENT,(lt+1)*vt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,Q.width,Q.height,1,bt,Nt,Bt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,bt,Nt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,bt,Nt,Q.data);else if(x.isData3DTexture)N?(Mt&&e.texStorage3D(n.TEXTURE_3D,Dt,yt,Q.width,Q.height,Q.depth),At&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,bt,Nt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,bt,Nt,Q.data);else if(x.isFramebufferTexture){if(Mt)if(N)e.texStorage2D(n.TEXTURE_2D,Dt,yt,Q.width,Q.height);else{let vt=Q.width,lt=Q.height;for(let Bt=0;Bt<Dt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,yt,vt,lt,0,bt,Nt,null),vt>>=1,lt>>=1}}else if(zt.length>0){if(N&&Mt){let vt=Xt(zt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,yt,vt.width,vt.height)}for(let vt=0,lt=zt.length;vt<lt;vt++)St=zt[vt],N?At&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,bt,Nt,St):e.texImage2D(n.TEXTURE_2D,vt,yt,bt,Nt,St);x.generateMipmaps=!1}else if(N){if(Mt){let vt=Xt(Q);e.texStorage2D(n.TEXTURE_2D,Dt,yt,vt.width,vt.height)}At&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Nt,Q)}else e.texImage2D(n.TEXTURE_2D,0,yt,bt,Nt,Q);g(x)&&p(O),_t.__version=k.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,R){if(x.image.length!==6)return;let O=q(A,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+R);let k=i.get(K);if(K.version!==k.__version||O===!0){e.activeTexture(n.TEXTURE0+R);let _t=le.getPrimaries(le.workingColorSpace),ot=x.colorSpace===Ui?null:le.getPrimaries(x.colorSpace),pt=x.colorSpace===Ui||_t===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!ft&&!Q?bt[lt]=_(x.image[lt],!0,s.maxCubemapSize):bt[lt]=Q?x.image[lt].image:x.image[lt],bt[lt]=Yt(x,bt[lt]);let Nt=bt[0],yt=r.convert(x.format,x.colorSpace),St=r.convert(x.type),zt=M(x.internalFormat,yt,St,x.colorSpace),N=x.isVideoTexture!==!0,Mt=k.__version===void 0||O===!0,At=K.dataReady,Dt=C(x,Nt);U(n.TEXTURE_CUBE_MAP,x);let vt;if(ft){N&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,zt,Nt.width,Nt.height);for(let lt=0;lt<6;lt++){vt=bt[lt].mipmaps;for(let Bt=0;Bt<vt.length;Bt++){let $t=vt[Bt];x.format!==An?yt!==null?N?At&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,$t.width,$t.height,yt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,zt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,$t.width,$t.height,yt,St,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,zt,$t.width,$t.height,0,yt,St,$t.data)}}}else{if(vt=x.mipmaps,N&&Mt){vt.length>0&&Dt++;let lt=Xt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,zt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Q){N?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,yt,St,bt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,zt,bt[lt].width,bt[lt].height,0,yt,St,bt[lt].data);for(let Bt=0;Bt<vt.length;Bt++){let Ae=vt[Bt].image[lt].image;N?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Ae.width,Ae.height,yt,St,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,zt,Ae.width,Ae.height,0,yt,St,Ae.data)}}else{N?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt,St,bt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,zt,yt,St,bt[lt]);for(let Bt=0;Bt<vt.length;Bt++){let $t=vt[Bt];N?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,yt,St,$t.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,zt,yt,St,$t.image[lt])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),k.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ct(A,x,R,O,K,k){let _t=r.convert(R.format,R.colorSpace),ot=r.convert(R.type),pt=M(R.internalFormat,_t,ot,R.colorSpace),ft=i.get(x),Q=i.get(R);if(Q.__renderTarget=x,!ft.__hasExternalTextures){let bt=Math.max(1,x.width>>k),Nt=Math.max(1,x.height>>k);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,k,pt,bt,Nt,x.depth,0,_t,ot,null):e.texImage2D(K,k,pt,bt,Nt,0,_t,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,K,Q.__webglTexture,0,xt(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,K,Q.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(A,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let O=x.depthTexture,K=O&&O.isDepthTexture?O.type:null,k=y(x.stencilBuffer,K),_t=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=xt(x);ut(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,k,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,k,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,k,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,A)}else{let O=x.textures;for(let K=0;K<O.length;K++){let k=O[K],_t=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),pt=M(k.internalFormat,_t,ot,k.colorSpace),ft=xt(x);R&&ut(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,pt,x.width,x.height):ut(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,pt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let K=O.__webglTexture,k=xt(x);if(x.depthTexture.format===hr)ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Dr)ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ht(A){let x=i.get(A),R=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=O}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let O=A.texture.mipmaps;O&&O.length>0?Pt(x.__webglFramebuffer[0],A):Pt(x.__webglFramebuffer,A)}else if(R){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[O],A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}else{let O=A.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,x,R){let O=i.get(A);x!==void 0&&Ct(O.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ht(A)}function D(A){let x=A.texture,R=i.get(A),O=i.get(x);A.addEventListener("dispose",P);let K=A.textures,k=A.isWebGLCubeRenderTarget===!0,_t=K.length>1;if(_t||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[ot]=[];for(let pt=0;pt<x.mipmaps.length;pt++)R.__webglFramebuffer[ot][pt]=n.createFramebuffer()}else R.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)R.__webglFramebuffer[ot]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ot=0,pt=K.length;ot<pt;ot++){let ft=i.get(K[ot]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ut(A)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let pt=K[ot];R.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ot]);let ft=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),bt=M(pt.internalFormat,ft,Q,pt.colorSpace,A.isXRRenderTarget===!0),Nt=xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,bt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,R.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(R.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),U(n.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)Ct(R.__webglFramebuffer[ot][pt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else Ct(R.__webglFramebuffer[ot],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,pt=K.length;ot<pt;ot++){let ft=K[ot],Q=i.get(ft),bt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(bt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Q.__webglTexture),U(bt,ft),Ct(R.__webglFramebuffer,A,ft,n.COLOR_ATTACHMENT0+ot,bt,0),g(ft)&&p(bt)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),U(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)Ct(R.__webglFramebuffer[pt],A,x,n.COLOR_ATTACHMENT0,ot,pt);else Ct(R.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,ot,0);g(x)&&p(ot),e.unbindTexture()}A.depthBuffer&&Ht(A)}function at(A){let x=A.textures;for(let R=0,O=x.length;R<O;R++){let K=x[R];if(g(K)){let k=v(A),_t=i.get(K).__webglTexture;e.bindTexture(k,_t),p(k),e.unbindTexture()}}}let rt=[],et=[];function nt(A){if(A.samples>0){if(ut(A)===!1){let x=A.textures,R=A.width,O=A.height,K=n.COLOR_BUFFER_BIT,k=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(A),ot=x.length>1;if(ot)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let pt=A.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let Q=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,R,O,0,0,R,O,K,n.NEAREST),l===!0&&(rt.length=0,et.length=0,rt.push(n.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(k),et.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let Q=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function ut(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Yt(A,x){let R=A.colorSpace,O=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||R!==_s&&R!==Ui&&(le.getTransfer(R)===ye?(O!==An||K!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function Xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ut}function IM(n,t){function e(i,s=Ui){let r,o=le.getTransfer(s);if(i===ii)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cu)return n.BYTE;if(i===hu)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Yl)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Ir)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===pu)return n.RGB;if(i===An)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===mu)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===Qo||i===ta||i===ea||i===na)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ac)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===bc||i===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Mc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wc||i===Tc||i===Ec||i===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`,Ou=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Do(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ni({vertexShader:LM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Ou,p={},v=e.getContextAttributes(),M=null,y=null,C=[],E=[],P=new ct,L=null,w=new hn;w.viewport=new ze;let b=new hn;b.viewport=new ze;let I=[w,b],F=new Fl,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=C[Z];return st===void 0&&(st=new gr,C[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=C[Z];return st===void 0&&(st=new gr,C[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=C[Z];return st===void 0&&(st=new gr,C[Z]=st),st.getHandSpace()};function G(Z){let st=E.indexOf(Z.inputSource);if(st===-1)return;let Ct=C[st];Ct!==void 0&&(Ct.update(Z.inputSource,Z.frame,c||o),Ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<C.length;Z++){let st=E[Z];st!==null&&(E[Z]=null,C[Z].disconnect(st))}V=null,W=null,g.reset();for(let Z in p)delete p[Z];t.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Lt=null,Pt=null;v.depth&&(Pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=v.stencil?Dr:hr,Lt=v.stencil?Lr:Ji);let Ht={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new di(d.textureWidth,d.textureHeight,{format:An,type:ii,depthTexture:new Lo(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new di(f.framebufferWidth,f.framebufferHeight,{format:An,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(Z){for(let st=0;st<Z.removed.length;st++){let Ct=Z.removed[st],Lt=E.indexOf(Ct);Lt>=0&&(E[Lt]=null,C[Lt].disconnect(Ct))}for(let st=0;st<Z.added.length;st++){let Ct=Z.added[st],Lt=E.indexOf(Ct);if(Lt===-1){for(let Ht=0;Ht<C.length;Ht++)if(Ht>=E.length){E.push(Ct),Lt=Ht;break}else if(E[Ht]===null){E[Ht]=Ct,Lt=Ht;break}if(Lt===-1)break}let Pt=C[Lt];Pt&&Pt.connect(Ct)}}let X=new S,it=new S;function mt(Z,st,Ct){X.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);let Lt=X.distanceTo(it),Pt=st.projectionMatrix.elements,Ht=Ct.projectionMatrix.elements,ee=Pt[14]/(Pt[10]-1),D=Pt[14]/(Pt[10]+1),at=(Pt[9]+1)/Pt[5],rt=(Pt[9]-1)/Pt[5],et=(Pt[8]-1)/Pt[0],nt=(Ht[8]+1)/Ht[0],xt=ee*et,ut=ee*nt,Et=Lt/(-et+nt),Yt=Et*-et;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Yt),Z.translateZ(Et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Xt=ee+Et,A=D+Et,x=xt-Yt,R=ut+(Lt-Yt),O=at*D/A*Xt,K=rt*D/A*Xt;Z.projectionMatrix.makePerspective(x,R,O,K,Xt,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let st=Z.near,Ct=Z.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),F.near=b.near=w.near=st,F.far=b.far=w.far=Ct,(V!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,W=F.far),F.layers.mask=Z.layers.mask|6,w.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Lt=Z.parent,Pt=F.cameras;$(F,Lt);for(let Ht=0;Ht<Pt.length;Ht++)$(Pt[Ht],Lt);Pt.length===2?mt(F,w,b):F.projectionMatrix.copy(w.projectionMatrix),U(Z,F,Lt)};function U(Z,st,Ct){Ct===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(Ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let q=null;function dt(Z,st){if(h=st.getViewerPose(c||o),m=st,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Lt=!1;Ct.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let D=0;D<Ct.length;D++){let at=Ct[D],rt=null;if(f!==null)rt=f.getViewport(at);else{let nt=u.getViewSubImage(d,at);rt=nt.viewport,D===0&&(t.setRenderTargetTextures(y,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(y))}let et=I[D];et===void 0&&(et=new hn,et.layers.enable(D),et.viewport=new ze,I[D]=et),et.matrix.fromArray(at.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(at.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(rt.x,rt.y,rt.width,rt.height),D===0&&(F.matrix.copy(et.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(et)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let D=u.getDepthInformation(Ct[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Pt&&Pt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Ct.length;D++){let at=Ct[D].camera;if(at){let rt=p[at];rt||(rt=new Do,p[at]=rt);let et=u.getCameraImage(at);rt.sourceTexture=et}}}}for(let Ct=0;Ct<C.length;Ct++){let Lt=E[Ct],Pt=C[Ct];Lt!==null&&Pt!==void 0&&Pt.update(Lt,st,c||o)}q&&q(Z,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),m=null}let gt=new Up;gt.setAnimationLoop(dt),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}},Is=new qe,UM=new ae;function NM(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,vu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,Is.copy(y),Is.x*=-1,Is.y*=-1,Is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Is)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;i.uniformBlockBinding(v,y)}function c(v,M){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let C=M.program;i.updateUBOMapping(v,C);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let y=n.createBuffer(),C=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,P=y.length;E<P;E++){let L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,b=L.length;w<b;w++){let I=L[w];if(f(I,E,w,C)===!0){let F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],W=0;for(let G=0;G<V.length;G++){let H=V[G],tt=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+W,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,y,C){let E=v.value,P=M+"_"+y;if(C[P]===void 0)return typeof E=="number"||typeof E=="boolean"?C[P]=E:C[P]=E.clone(),!0;{let L=C[P];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return C[P]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(v){let M=v.uniforms,y=0,C=16;for(let P=0,L=M.length;P<L;P++){let w=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,I=w.length;b<I;b++){let F=w[b],V=Array.isArray(F.value)?F.value:[F.value];for(let W=0,G=V.length;W<G;W++){let H=V[W],tt=_(H),X=y%C,it=X%tt.boundary,mt=X+it;y+=it,mt!==0&&C-mt<tt.storage&&(y+=C-mt),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=tt.storage}}}let E=y%C;return E>0&&(y+=C-E),v.__size=y,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Lc=class{constructor(t={}){let{canvas:e=ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=me;let E=0,P=0,L=null,w=-1,b=null,I=new ze,F=new ze,V=null,W=new kt(0),G=0,H=e.width,tt=e.height,X=1,it=null,mt=null,$=new ze(0,0,H,tt),U=new ze(0,0,H,tt),q=!1,dt=new Mr,gt=!1,Z=!1,st=new ae,Ct=new S,Lt=new ze,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ee(){return L===null?X:1}let D=i;function at(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),D===null){let B="webgl2";if(D=at(B,T),D===null)throw at(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let rt,et,nt,xt,ut,Et,Yt,Xt,A,x,R,O,K,k,_t,ot,pt,ft,Q,bt,Nt,yt,St,zt;function N(){rt=new tv(D),rt.init(),yt=new IM(D,rt),et=new Yy(D,rt,t,yt),nt=new RM(D,rt),et.reversedDepthBuffer&&d&&nt.buffers.depth.setReversed(!0),xt=new iv(D),ut=new gM,Et=new PM(D,rt,nt,ut,et,yt,xt),Yt=new Jy(y),Xt=new Qy(y),A=new cx(D),St=new Xy(D,A),x=new ev(D,A,xt,St),R=new rv(D,x,A,xt),Q=new sv(D,et,Et),ot=new Zy(ut),O=new mM(y,Yt,Xt,rt,et,St,ot),K=new NM(y,ut),k=new _M,_t=new wM(rt),ft=new Wy(y,Yt,Xt,nt,R,f,l),pt=new AM(y,R,et),zt=new FM(D,xt,et,nt),bt=new qy(D,rt,xt),Nt=new nv(D,rt,xt),xt.programs=O.programs,y.capabilities=et,y.extensions=rt,y.properties=ut,y.renderLists=k,y.shadowMap=pt,y.state=nt,y.info=xt}N();let Mt=new Bu(y,D);this.xr=Mt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(H,tt,!1))},this.getSize=function(T){return T.set(H,tt)},this.setSize=function(T,B,J=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,tt=B,e.width=Math.floor(T*X),e.height=Math.floor(B*X),J===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*X,tt*X).floor()},this.setDrawingBufferSize=function(T,B,J){H=T,tt=B,X=J,e.width=Math.floor(T*J),e.height=Math.floor(B*J),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,B,J,j){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,B,J,j),nt.viewport(I.copy($).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,B,J,j){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,B,J,j),nt.scissor(F.copy(U).multiplyScalar(X).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){nt.setScissorTest(q=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,J=!0){let j=0;if(T){let z=!1;if(L!==null){let wt=L.texture.format;z=wt===Ql||wt===$l||wt===Kl}if(z){let wt=L.texture.type,It=wt===ii||wt===Ji||wt===Pr||wt===Lr||wt===Zl||wt===Jl,Ft=ft.getClearColor(),Ut=ft.getClearAlpha(),Zt=Ft.r,Jt=Ft.g,Gt=Ft.b;It?(m[0]=Zt,m[1]=Jt,m[2]=Gt,m[3]=Ut,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Zt,_[1]=Jt,_[2]=Gt,_[3]=Ut,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}B&&(j|=D.DEPTH_BUFFER_BIT),J&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ft.dispose(),k.dispose(),_t.dispose(),ut.dispose(),Yt.dispose(),Xt.dispose(),R.dispose(),St.dispose(),zt.dispose(),O.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",li),Mt.removeEventListener("sessionend",Ed),cs.stop()};function At(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=xt.autoReset,B=pt.enabled,J=pt.autoUpdate,j=pt.needsUpdate,z=pt.type;N(),xt.autoReset=T,pt.enabled=B,pt.autoUpdate=J,pt.needsUpdate=j,pt.type=z}function vt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){let B=T.target;B.removeEventListener("dispose",lt),Bt(B)}function Bt(T){$t(T),ut.remove(T)}function $t(T){let B=ut.get(T).programs;B!==void 0&&(B.forEach(function(J){O.releaseProgram(J)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,J,j,z,wt){B===null&&(B=Pt);let It=z.isMesh&&z.matrixWorld.determinant()<0,Ft=Pg(T,B,J,j,z);nt.setMaterial(j,It);let Ut=J.index,Zt=1;if(j.wireframe===!0){if(Ut=x.getWireframeAttribute(J),Ut===void 0)return;Zt=2}let Jt=J.drawRange,Gt=J.attributes.position,oe=Jt.start*Zt,be=(Jt.start+Jt.count)*Zt;wt!==null&&(oe=Math.max(oe,wt.start*Zt),be=Math.min(be,(wt.start+wt.count)*Zt)),Ut!==null?(oe=Math.max(oe,0),be=Math.min(be,Ut.count)):Gt!=null&&(oe=Math.max(oe,0),be=Math.min(be,Gt.count));let Ge=be-oe;if(Ge<0||Ge===1/0)return;St.setup(z,j,Ft,J,Ut);let Re,we=bt;if(Ut!==null&&(Re=A.get(Ut),we=Nt,we.setIndex(Re)),z.isMesh)j.wireframe===!0?(nt.setLineWidth(j.wireframeLinewidth*ee()),we.setMode(D.LINES)):we.setMode(D.TRIANGLES);else if(z.isLine){let Wt=j.linewidth;Wt===void 0&&(Wt=1),nt.setLineWidth(Wt*ee()),z.isLineSegments?we.setMode(D.LINES):z.isLineLoop?we.setMode(D.LINE_LOOP):we.setMode(D.LINE_STRIP)}else z.isPoints?we.setMode(D.POINTS):z.isSprite&&we.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))we.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Wt=z._multiDrawStarts,Fe=z._multiDrawCounts,he=z._multiDrawCount,In=Ut?A.get(Ut).bytesPerElement:1,Gs=ut.get(j).currentProgram.getUniforms();for(let Ln=0;Ln<he;Ln++)Gs.setValue(D,"_gl_DrawID",Ln),we.render(Wt[Ln]/In,Fe[Ln])}else if(z.isInstancedMesh)we.renderInstances(oe,Ge,z.count);else if(J.isInstancedBufferGeometry){let Wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fe=Math.min(J.instanceCount,Wt);we.renderInstances(oe,Ge,Fe)}else we.render(oe,Ge)};function Ae(T,B,J){T.transparent===!0&&T.side===Ye&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ra(T,B,J),T.side=ti,T.needsUpdate=!0,Ra(T,B,J),T.side=Ye):Ra(T,B,J)}this.compile=function(T,B,J=null){J===null&&(J=T),p=_t.get(J),p.init(B),M.push(p),J.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==J&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let j=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let wt=z.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){let Ft=wt[It];Ae(Ft,J,z),j.add(Ft)}else Ae(wt,J,z),j.add(wt)}),p=M.pop(),j},this.compileAsync=function(T,B,J=null){let j=this.compile(T,B,J);return new Promise(z=>{function wt(){if(j.forEach(function(It){ut.get(It).currentProgram.isReady()&&j.delete(It)}),j.size===0){z(T);return}setTimeout(wt,10)}rt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let pe=null;function bi(T){pe&&pe(T)}function li(){cs.stop()}function Ed(){cs.start()}let cs=new Up;cs.setAnimationLoop(bi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(T){pe=T,Mt.setAnimationLoop(T),T===null?cs.stop():cs.start()},Mt.addEventListener("sessionstart",li),Mt.addEventListener("sessionend",Ed),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(B),B=Mt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,L),p=_t.get(T,M.length),p.init(B),M.push(p),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),dt.setFromProjectionMatrix(st,Qn,B.reversedDepth),Z=this.localClippingEnabled,gt=ot.init(this.clippingPlanes,Z),g=k.get(T,v.length),g.init(),v.push(g),Mt.enabled===!0&&Mt.isPresenting===!0){let wt=y.xr.getDepthSensingMesh();wt!==null&&gh(wt,B,-1/0,y.sortObjects)}gh(T,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(it,mt),Ht=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Ht&&ft.addToRenderList(g,T),this.info.render.frame++,gt===!0&&ot.beginShadows();let J=p.state.shadowsArray;pt.render(J,T,B),gt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let wt=B.cameras;if(z.length>0)for(let It=0,Ft=wt.length;It<Ft;It++){let Ut=wt[It];Cd(j,z,T,Ut)}Ht&&ft.render(T);for(let It=0,Ft=wt.length;It<Ft;It++){let Ut=wt[It];Ad(g,T,Ut,Ut.viewport)}}else z.length>0&&Cd(j,z,T,B),Ht&&ft.render(T),Ad(g,T,B);L!==null&&P===0&&(Et.updateMultisampleRenderTarget(L),Et.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,B),St.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],gt===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function gh(T,B,J,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||dt.intersectsSprite(T)){j&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(st);let It=R.update(T),Ft=T.material;Ft.visible&&g.push(T,It,Ft,J,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||dt.intersectsObject(T))){let It=R.update(T),Ft=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Lt.copy(It.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(st)),Array.isArray(Ft)){let Ut=It.groups;for(let Zt=0,Jt=Ut.length;Zt<Jt;Zt++){let Gt=Ut[Zt],oe=Ft[Gt.materialIndex];oe&&oe.visible&&g.push(T,It,oe,J,Lt.z,Gt)}}else Ft.visible&&g.push(T,It,Ft,J,Lt.z,null)}}let wt=T.children;for(let It=0,Ft=wt.length;It<Ft;It++)gh(wt[It],B,J,j)}function Ad(T,B,J,j){let z=T.opaque,wt=T.transmissive,It=T.transparent;p.setupLightsView(J),gt===!0&&ot.setGlobalState(y.clippingPlanes,J),j&&nt.viewport(I.copy(j)),z.length>0&&Ca(z,B,J),wt.length>0&&Ca(wt,B,J),It.length>0&&Ca(It,B,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Cd(T,B,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new di(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ir:ii,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let wt=p.state.transmissionRenderTarget[j.id],It=j.viewport||I;wt.setSize(It.z*y.transmissionResolutionScale,It.w*y.transmissionResolutionScale);let Ft=y.getRenderTarget(),Ut=y.getActiveCubeFace(),Zt=y.getActiveMipmapLevel();y.setRenderTarget(wt),y.getClearColor(W),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&ft.render(J);let Jt=y.toneMapping;y.toneMapping=Di;let Gt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),gt===!0&&ot.setGlobalState(y.clippingPlanes,j),Ca(T,J,j),Et.updateMultisampleRenderTarget(wt),Et.updateRenderTargetMipmap(wt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let be=0,Ge=B.length;be<Ge;be++){let Re=B[be],we=Re.object,Wt=Re.geometry,Fe=Re.material,he=Re.group;if(Fe.side===Ye&&we.layers.test(j.layers)){let In=Fe.side;Fe.side=rn,Fe.needsUpdate=!0,Rd(we,J,j,Wt,Fe,he),Fe.side=In,Fe.needsUpdate=!0,oe=!0}}oe===!0&&(Et.updateMultisampleRenderTarget(wt),Et.updateRenderTargetMipmap(wt))}y.setRenderTarget(Ft,Ut,Zt),y.setClearColor(W,G),Gt!==void 0&&(j.viewport=Gt),y.toneMapping=Jt}function Ca(T,B,J){let j=B.isScene===!0?B.overrideMaterial:null;for(let z=0,wt=T.length;z<wt;z++){let It=T[z],Ft=It.object,Ut=It.geometry,Zt=It.group,Jt=It.material;Jt.allowOverride===!0&&j!==null&&(Jt=j),Ft.layers.test(J.layers)&&Rd(Ft,B,J,Ut,Jt,Zt)}}function Rd(T,B,J,j,z,wt){T.onBeforeRender(y,B,J,j,z,wt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,B,J,j,T,wt),z.transparent===!0&&z.side===Ye&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,y.renderBufferDirect(J,B,j,z,T,wt),z.side=ti,z.needsUpdate=!0,y.renderBufferDirect(J,B,j,z,T,wt),z.side=Ye):y.renderBufferDirect(J,B,j,z,T,wt),T.onAfterRender(y,B,J,j,z,wt)}function Ra(T,B,J){B.isScene!==!0&&(B=Pt);let j=ut.get(T),z=p.state.lights,wt=p.state.shadowsArray,It=z.state.version,Ft=O.getParameters(T,z.state,wt,B,J),Ut=O.getProgramCacheKey(Ft),Zt=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?Xt:Yt).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",lt),Zt=new Map,j.programs=Zt);let Jt=Zt.get(Ut);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===It)return Id(T,Ft),Jt}else Ft.uniforms=O.getUniforms(T),T.onBeforeCompile(Ft,y),Jt=O.acquireProgram(Ft,Ut),Zt.set(Ut,Jt),j.uniforms=Ft.uniforms;let Gt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=ot.uniform),Id(T,Ft),j.needsLights=Lg(T),j.lightsStateVersion=It,j.needsLights&&(Gt.ambientLightColor.value=z.state.ambient,Gt.lightProbe.value=z.state.probe,Gt.directionalLights.value=z.state.directional,Gt.directionalLightShadows.value=z.state.directionalShadow,Gt.spotLights.value=z.state.spot,Gt.spotLightShadows.value=z.state.spotShadow,Gt.rectAreaLights.value=z.state.rectArea,Gt.ltc_1.value=z.state.rectAreaLTC1,Gt.ltc_2.value=z.state.rectAreaLTC2,Gt.pointLights.value=z.state.point,Gt.pointLightShadows.value=z.state.pointShadow,Gt.hemisphereLights.value=z.state.hemi,Gt.directionalShadowMap.value=z.state.directionalShadowMap,Gt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Gt.spotShadowMap.value=z.state.spotShadowMap,Gt.spotLightMatrix.value=z.state.spotLightMatrix,Gt.spotLightMap.value=z.state.spotLightMap,Gt.pointShadowMap.value=z.state.pointShadowMap,Gt.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function Pd(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Fr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Id(T,B){let J=ut.get(T);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Pg(T,B,J,j,z){B.isScene!==!0&&(B=Pt),Et.resetTextureUnits();let wt=B.fog,It=j.isMeshStandardMaterial?B.environment:null,Ft=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_s,Ut=(j.isMeshStandardMaterial?Xt:Yt).get(j.envMap||It),Zt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!J.morphAttributes.position,oe=!!J.morphAttributes.normal,be=!!J.morphAttributes.color,Ge=Di;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ge=y.toneMapping);let Re=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=Re!==void 0?Re.length:0,Wt=ut.get(j),Fe=p.state.lights;if(gt===!0&&(Z===!0||T!==b)){let yn=T===b&&j.id===w;ot.setState(j,T,yn)}let he=!1;j.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Fe.state.version||Wt.outputColorSpace!==Ft||z.isBatchedMesh&&Wt.batching===!1||!z.isBatchedMesh&&Wt.batching===!0||z.isBatchedMesh&&Wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Wt.instancing===!1||!z.isInstancedMesh&&Wt.instancing===!0||z.isSkinnedMesh&&Wt.skinning===!1||!z.isSkinnedMesh&&Wt.skinning===!0||z.isInstancedMesh&&Wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Wt.instancingMorph===!1&&z.morphTexture!==null||Wt.envMap!==Ut||j.fog===!0&&Wt.fog!==wt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==ot.numPlanes||Wt.numIntersection!==ot.numIntersection)||Wt.vertexAlphas!==Zt||Wt.vertexTangents!==Jt||Wt.morphTargets!==Gt||Wt.morphNormals!==oe||Wt.morphColors!==be||Wt.toneMapping!==Ge||Wt.morphTargetsCount!==we)&&(he=!0):(he=!0,Wt.__version=j.version);let In=Wt.currentProgram;he===!0&&(In=Ra(j,B,z));let Gs=!1,Ln=!1,eo=!1,Oe=In.getUniforms(),zn=Wt.uniforms;if(nt.useProgram(In.program)&&(Gs=!0,Ln=!0,eo=!0),j.id!==w&&(w=j.id,Ln=!0),Gs||b!==T){nt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(D,"projectionMatrix",T.projectionMatrix),Oe.setValue(D,"viewMatrix",T.matrixWorldInverse);let bn=Oe.map.cameraPosition;bn!==void 0&&bn.setValue(D,Ct.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ln=!0,eo=!0)}if(z.isSkinnedMesh){Oe.setOptional(D,z,"bindMatrix"),Oe.setOptional(D,z,"bindMatrixInverse");let yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(D,"boneTexture",yn.boneTexture,Et))}z.isBatchedMesh&&(Oe.setOptional(D,z,"batchingTexture"),Oe.setValue(D,"batchingTexture",z._matricesTexture,Et),Oe.setOptional(D,z,"batchingIdTexture"),Oe.setValue(D,"batchingIdTexture",z._indirectTexture,Et),Oe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Oe.setValue(D,"batchingColorTexture",z._colorsTexture,Et));let kn=J.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Q.update(z,J,In),(Ln||Wt.receiveShadow!==z.receiveShadow)&&(Wt.receiveShadow=z.receiveShadow,Oe.setValue(D,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zn.envMap.value=Ut,zn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(zn.envMapIntensity.value=B.environmentIntensity),Ln&&(Oe.setValue(D,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Ig(zn,eo),wt&&j.fog===!0&&K.refreshFogUniforms(zn,wt),K.refreshMaterialUniforms(zn,j,X,tt,p.state.transmissionRenderTarget[T.id]),Fr.upload(D,Pd(Wt),zn,Et)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fr.upload(D,Pd(Wt),zn,Et),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Oe.setValue(D,"center",z.center),Oe.setValue(D,"modelViewMatrix",z.modelViewMatrix),Oe.setValue(D,"normalMatrix",z.normalMatrix),Oe.setValue(D,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let yn=j.uniformsGroups;for(let bn=0,xh=yn.length;bn<xh;bn++){let hs=yn[bn];zt.update(hs,In),zt.bind(hs,In)}}return In}function Ig(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Lg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,J){let j=ut.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ut.get(T.texture).__webglTexture=B,ut.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let J=ut.get(T);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0};let Dg=D.createFramebuffer();this.setRenderTarget=function(T,B=0,J=0){L=T,E=B,P=J;let j=!0,z=null,wt=!1,It=!1;if(T){let Ut=ut.get(T);if(Ut.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)Et.setupRenderTarget(T);else if(Ut.__hasExternalTextures)Et.rebindTextures(T,ut.get(T.texture).__webglTexture,ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Gt=T.depthTexture;if(Ut.__boundDepthTexture!==Gt){if(Gt!==null&&ut.has(Gt)&&(T.width!==Gt.image.width||T.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(T)}}let Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);let Jt=ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[B])?z=Jt[B][J]:z=Jt[B],wt=!0):T.samples>0&&Et.useMultisampledRTT(T)===!1?z=ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?z=Jt[J]:z=Jt,I.copy(T.viewport),F.copy(T.scissor),V=T.scissorTest}else I.copy($).multiplyScalar(X).floor(),F.copy(U).multiplyScalar(X).floor(),V=q;if(J!==0&&(z=Dg),nt.bindFramebuffer(D.FRAMEBUFFER,z)&&j&&nt.drawBuffers(T,z),nt.viewport(I),nt.scissor(F),nt.setScissorTest(V),wt){let Ut=ut.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,J)}else if(It){let Ut=B;for(let Zt=0;Zt<T.textures.length;Zt++){let Jt=ut.get(T.textures[Zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,J,Ut)}}else if(T!==null&&J!==0){let Ut=ut.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(T,B,J,j,z,wt,It,Ft=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){nt.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Zt=T.textures[Ft],Jt=Zt.format,Gt=Zt.type;if(!et.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&J>=0&&J<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(B,J,j,z,yt.convert(Jt),yt.convert(Gt),wt))}finally{let Zt=L!==null?ut.get(L).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(T,B,J,j,z,wt,It,Ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(B>=0&&B<=T.width-j&&J>=0&&J<=T.height-z){nt.bindFramebuffer(D.FRAMEBUFFER,Ut);let Zt=T.textures[Ft],Jt=Zt.format,Gt=Zt.type;if(!et.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.bufferData(D.PIXEL_PACK_BUFFER,wt.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ft),D.readPixels(B,J,j,z,yt.convert(Jt),yt.convert(Gt),0);let be=L!==null?ut.get(L).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,be);let Ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await np(D,Ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,wt),D.deleteBuffer(oe),D.deleteSync(Ge),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,J=0){let j=Math.pow(2,-J),z=Math.floor(T.image.width*j),wt=Math.floor(T.image.height*j),It=B!==null?B.x:0,Ft=B!==null?B.y:0;Et.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,It,Ft,z,wt),nt.unbindTexture()};let Ug=D.createFramebuffer(),Ng=D.createFramebuffer();this.copyTextureToTexture=function(T,B,J=null,j=null,z=0,wt=null){wt===null&&(z!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=z,z=0):wt=0);let It,Ft,Ut,Zt,Jt,Gt,oe,be,Ge,Re=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(J!==null)It=J.max.x-J.min.x,Ft=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Zt=J.min.x,Jt=J.min.y,Gt=J.isBox3?J.min.z:0;else{let kn=Math.pow(2,-z);It=Math.floor(Re.width*kn),Ft=Math.floor(Re.height*kn),T.isDataArrayTexture?Ut=Re.depth:T.isData3DTexture?Ut=Math.floor(Re.depth*kn):Ut=1,Zt=0,Jt=0,Gt=0}j!==null?(oe=j.x,be=j.y,Ge=j.z):(oe=0,be=0,Ge=0);let we=yt.convert(B.format),Wt=yt.convert(B.type),Fe;B.isData3DTexture?(Et.setTexture3D(B,0),Fe=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Et.setTexture2DArray(B,0),Fe=D.TEXTURE_2D_ARRAY):(Et.setTexture2D(B,0),Fe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let he=D.getParameter(D.UNPACK_ROW_LENGTH),In=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gs=D.getParameter(D.UNPACK_SKIP_PIXELS),Ln=D.getParameter(D.UNPACK_SKIP_ROWS),eo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let Oe=T.isDataArrayTexture||T.isData3DTexture,zn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let kn=ut.get(T),yn=ut.get(B),bn=ut.get(kn.__renderTarget),xh=ut.get(yn.__renderTarget);nt.bindFramebuffer(D.READ_FRAMEBUFFER,bn.__webglFramebuffer),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,xh.__webglFramebuffer);for(let hs=0;hs<Ut;hs++)Oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(T).__webglTexture,z,Gt+hs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.get(B).__webglTexture,wt,Ge+hs)),D.blitFramebuffer(Zt,Jt,It,Ft,oe,be,It,Ft,D.DEPTH_BUFFER_BIT,D.NEAREST);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||ut.has(T)){let kn=ut.get(T),yn=ut.get(B);nt.bindFramebuffer(D.READ_FRAMEBUFFER,Ug),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ng);for(let bn=0;bn<Ut;bn++)Oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kn.__webglTexture,z,Gt+bn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kn.__webglTexture,z),zn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,wt,Ge+bn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,wt),z!==0?D.blitFramebuffer(Zt,Jt,It,Ft,oe,be,It,Ft,D.COLOR_BUFFER_BIT,D.NEAREST):zn?D.copyTexSubImage3D(Fe,wt,oe,be,Ge+bn,Zt,Jt,It,Ft):D.copyTexSubImage2D(Fe,wt,oe,be,Zt,Jt,It,Ft);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Fe,wt,oe,be,Ge,It,Ft,Ut,we,Wt,Re.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,wt,oe,be,Ge,It,Ft,Ut,we,Re.data):D.texSubImage3D(Fe,wt,oe,be,Ge,It,Ft,Ut,we,Wt,Re):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,wt,oe,be,It,Ft,we,Wt,Re.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,wt,oe,be,Re.width,Re.height,we,Re.data):D.texSubImage2D(D.TEXTURE_2D,wt,oe,be,It,Ft,we,Wt,Re);D.pixelStorei(D.UNPACK_ROW_LENGTH,he),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,In),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,eo),wt===0&&B.generateMipmaps&&D.generateMipmap(Fe),nt.unbindTexture()},this.initRenderTarget=function(T){ut.get(T).__webglFramebuffer===void 0&&Et.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Et.setTextureCube(T,0):T.isData3DTexture?Et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Et.setTexture2DArray(T,0):Et.setTexture2D(T,0),nt.unbindTexture()},this.resetState=function(){E=0,P=0,L=null,nt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var ku=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var Cw=ku.length-1,zp=Math.min(...ku.map(n=>n[1])),kp=Math.max(...ku.map(n=>n[1])),Rw=new S(0,0,(zp+kp)/2),Vp=new S(.047,.027,(kp-zp)/2);var Lw=new ue,Dw=new S,Uw=new S,Nw=new ae;var Fw=new S,Ow=new S;var Bw=new S;var zw=new S,kw=new S,Vw=new S,Gw=new Sn,Hw=new S;function ra(n,t=0){let e=n.attributes.position,i=[],s=[],r=new Set;for(let m=0;m<e.count;m++){let _=new S().fromBufferAttribute(e,m),g=_.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(_))}for(let m=0;m<(n.index?.count??e.count);m+=3){let _=y=>new S().fromBufferAttribute(e,n.index?n.index.getX(y):y),g=_(m),p=_(m+1),v=_(m+2),M=new Sn(g,p,v).getNormal(new S);M.lengthSq()>.1&&s.push({a:g,b:p,c:v,n:M})}let o=t||Math.max(...i.map(m=>m.length())),{x:a,y:l,z:c}=new Ze().setFromPoints(i).getSize(new S),h=Math.max(1e-4,t**2*.4),u=t?new S().setScalar(1/h):new S(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=t?2*t:Math.min(a,l,c),f=m=>{let _=[];for(let g of m)g.lengthSq()>.5&&!_.some(p=>Math.abs(p.dot(g))>.9999)&&_.push(g);return _};return{vertices:i,faces:s,sphereRadius:t,radius:o,inverseInertia:u,thickness:d,normals:t?[]:f(s.map(m=>m.n)),edges:t?[]:f(s.flatMap(m=>[new S().subVectors(m.b,m.a).normalize(),new S().subVectors(m.c,m.b).normalize(),new S().subVectors(m.a,m.c).normalize()]))}}var Ww=new S,Xw=new S,qw=new S,Yw=new S,Zw=new S;function zr(n){return ra(new qt(n.x*2,n.y*2,n.z*2))}var Jw=new S;var Gp=ra(new Wn(1,0).scale(...Vp)),jw={mesh:{position:new S,quaternion:new ue},shape:Gp,radius:Gp.radius,precise:!0};var Kw=new S,$w=new S,Qw=new S,tT=new ue,eT=new ue,nT=new ue;var iT=new S,sT=new S,rT=new S,oT=new S;var aT=new S;var lT=new S,cT=new S,hT=new S,uT=new S,dT=new S,fT=new S,pT=new S;var mT={mesh:{position:null,quaternion:new ue},shape:{sphereRadius:0,normals:[],edges:[]}};function Uc(n,t,e){let i=new qt(n,t,e),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?e:n,h=l?e:t;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Hp(n,t){let e=n.attributes.uv;if(!e)return n;let i=1/(t.uvScale??1),s=(t.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=t.uvOffsetX??0,l=t.uvOffsetY??0;for(let c=0;c<e.count;c++){let h=e.getX(c)*i,u=e.getY(c)*i;e.setXY(c,h*r-u*o+a,h*o+u*r+l)}return e.needsUpdate=!0,n}function Wp(n){switch(n){case"sphere":return new On(.5,24,16);case"cylinder":return new fe(.5,.5,1,24);case"cone":return new Ri(.5,1,24);case"torus":return new Mn(.34,.14,12,32);case"capsule":return new ys(.32,.36,8,16);default:return new qt(1,1,1)}}function oa(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}var ji=(n,t,e)=>n+(t-n)*e,kr=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Nc(n,t){let e=Math.floor(n),i=Math.floor(t),s=kr(0,1,n-e),r=kr(0,1,t-i);return ji(ji(oa(e,i),oa(e+1,i),s),ji(oa(e,i+1),oa(e+1,i+1),s),r)}function Xp(n,t){return Nc(n,t)*.54+Nc(n*2.07+3.4,t*2.07-6.1)*.26+Nc(n*4.2+9,t*4.2)*.13+Nc(n*8.6,t*8.6-13)*.07}function qp(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((m,_)=>ji(m,o[_],d));for(let m=0;m<1024;m++){let _=4*(m+l*1024),g=0,p=0,v=0;if(c>.025)if(n){let y=oa(m+792,l+677);y>.9988&&(v=(y-.9988)*49e3*kr(.09,.3,c))}else{let[y,C]=s[m],E=2.8*h/(c+.16),P=y*E+3.6,L=C*E-8.1,w=Xp(P,L),b=Xp(P-.12,L-.09);g=kr(.49,.66,w)*kr(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-b)*5+(w-.54)*.8))}let M=n?1:ji(.94,1,kr(.05,.34,c));i[_]=ji(f[0],(139+115*p)*M,g)+v,i[_+1]=ji(f[1],(154+100*p)*M,g)+v*.94,i[_+2]=ji(f[2],(178+77*p)*M,g)+v*.86,i[_+3]=255}}let a=new fi(i,1024,512,An);return a.colorSpace=me,a.wrapS=Gn,a.magFilter=sn,a.minFilter=En,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Yp(){return{day:qp(!1),night:qp(!0)}}var ke=(n,t,e,i)=>({xMin:n,xMax:t,zMin:e,zMax:i}),Zp=ke(-24,24,-51,7),Jp=34521,jp={x:0,y:0,z:3},Fc={x:.05,y:1.16,z:5.9},Vr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:ke(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:ke(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:ke(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:ke(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:ke(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:ke(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:ke(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:ke(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:ke(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:ke(9,23,-48,-37),sign:[16,-38.2]}},yT=[ke(-9,-6,-51,7),ke(6,9,-51,7),ke(-24,24,-8,-5),ke(-24,24,-27,-23),ke(9,23,-37,-34)],Kp=[{name:"Glace",bounds:Vr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Vr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:ke(-9,9,-51,7)},{name:"Sol ouest",bounds:ke(-23,-9,-51,-23)},{name:"Sol ouest",bounds:ke(-23,-9,-8,7)},{name:"Bordure ouest",bounds:ke(-24,-23,-51,7)},{name:"Sol est",bounds:ke(9,23,-51,-48)},{name:"Sol est",bounds:ke(9,23,-37,7)},{name:"Bordure est",bounds:ke(23,24,-51,7)}],Gr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Hr=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],$p=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(t=>({x:t,z:n}))),Vu={x:16,z:-31},Gu={x:16,y:1.52,z:-21},Oc={x:-19.4,y:.68,z:-3.25},Qp=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),tm={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Gu.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,t)=>{let e=.3+t*.265;return["Palier "+(t+1),-3.75,e*.5,-29.65-t*1.7,2.1,e,1.35,t%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,t)=>[["Paroi ouest "+(t+1),1.35,2.15+t*.32,-33.4-t*3.55,.45,4.3+t*.64,2.7,2],["Paroi est "+(t+1),4.78,2.36+t*.3,-34.2-t*3.55,.45,4.72+t*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Bc(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new mi(i);return s.colorSpace=me,s}function em(n,t){let{day:e,night:i}=Yp(),s=new ht(new On(180,40,20),new We({map:e,side:rn,fog:!1,toneMapped:!1}));n.add(s);let r=Bc(128,128,(x,R)=>{let O=x.createRadialGradient(R/2,R/2,0,R/2,R/2,R/2);O.addColorStop(0,"#fff8df"),O.addColorStop(.12,"#fff3bd"),O.addColorStop(.18,"rgba(255,225,144,.40)"),O.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=O,x.fillRect(0,0,R,R)}),o=new Co(new yr({map:r,blending:jo,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=e.clone();a.mapping=Rr,a.needsUpdate=!0;let l=new Or(t);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Ss("#daeaff","#88724c",2.25),h=new ws("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(c,h,h.target);let u=new S,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function m(x){f=d[x]?x:0;let R=d[f];c.color.set(R.fill),c.groundColor.set(R.ground),c.intensity=R.hemi,h.color.set(R.sun),h.intensity=R.power,u.set(...R.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(R.sun),o.material.opacity=R.glow,s.material.map=f===2?i:e,s.material.color.set(R.sky),n.fog.color.set(R.fog),n.background.set(R.fog),n.environmentIntensity=g*[1,.56,.09][f]}function _(x){if(!h.castShadow)return;let R=h.target.position,O=Math.round(x.x/4)*4,K=Math.round(x.y/4)*4,k=Math.round(x.z/4)*4;R.x===O&&R.y===K&&R.z===k||(R.set(O,K,k),h.position.copy(R).add(u))}let g=0;n.background=new kt(d[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function v(x,R,O){let[,K,k]=p[R],_t=512;x.save(),x.scale(O/512,O/512),x.fillStyle=K,x.fillRect(0,0,_t,_t);let ot=R+19;function pt(){return ot=Math.imul(ot,1664525)+1013904223>>>0,ot/4294967296}if(x.fillStyle=k,R===16){for(let ft=0;ft<16;ft++)for(let Q=0;Q<16;Q++)(Q+ft)%2===0&&x.fillRect(Q*32,ft*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(R)){let ft=R===15?32:64;x.globalAlpha=.48;for(let Q=0;Q<_t;Q+=ft){x.fillRect(0,Q,_t,R===8?3:2);for(let bt=-ft;bt<_t;bt+=ft)x.fillRect(bt+Q/ft%2*(R===2?ft/2:0),Q,2,ft)}}else if([4,5,6,7,10,11,12].includes(R)){let ft=R===5?38:R===7?64:18;for(let Q=0;Q<ft;Q++){x.strokeStyle=k,x.globalAlpha=.08+pt()*.22,x.lineWidth=R===5?1+pt()*8:1+pt()*4;let bt=pt()*_t,Nt=R===5?.018:.009;x.beginPath();for(let yt=0;yt<=_t;yt+=8){let St=bt+Math.sin(yt*Nt+Q)*(R===6||R===7?4:12+Q%5*3)+(R===4?yt*.28:0);yt===0?x.moveTo(yt,St):x.lineTo(yt,St)}x.stroke()}}else{x.globalAlpha=.27;for(let ft=0;ft<120;ft++){let Q=pt()*_t,bt=pt()*_t,Nt=2+pt()*6;x.beginPath(),x.arc(Q,bt,Nt,0,Math.PI*2),x.fill()}}if(R!==16)for(let ft=0;ft<4400;ft++)x.globalAlpha=.05+pt()*.1,x.fillStyle=pt()>.5?k:"#222324",x.fillRect(pt()*_t,pt()*_t,1+pt()*4,1+pt()*3);x.restore()}let M=new Set([0,2,4,5,8,15,16]),y=p.map(([x,R,O,K,k,_t],ot)=>{let pt=M.has(ot)?512:256,ft=Bc(pt,pt,bt=>v(bt,ot,pt));ft.wrapS=ft.wrapT=Gn;let Q=new en({map:ft,roughness:K,metalness:k,flatShading:!0,opacity:_t,transparent:_t<1,depthWrite:_t===1});return Q.name=x,Q}),C=y.map(x=>x.map.image),E=512,P=y.map(x=>new pn({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),L={value:0},w={value:.24},b={value:null},I={value:0};function F(){b.value?.dispose(),b.value=Bc(512,512,(x,R)=>{x.fillStyle="#ffffff",x.fillRect(0,0,R,R);let O=R/52,K=R/64;for(let k of V){if(!k.position||!k.half||k.position.y+k.half.y<.22)continue;let _t=(k.position.x+26)*O,ot=(k.position.z+54)*K,pt=Math.min(55,k.half.x*O+5),ft=Math.min(72,k.half.z*K+6);x.save(),x.translate(_t+k.half.y*O*.2,ot+k.half.y*K*.24),x.scale(pt,ft);let Q=x.createRadialGradient(0,0,.15,0,0,1);Q.addColorStop(0,"rgba(22,37,65,.54)"),Q.addColorStop(.58,"rgba(36,54,76,.29)"),Q.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=Q,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[...y,...P])x.onBeforeCompile=R=>{R.uniforms.uFocusAmount=L,R.uniforms.uFocusRadius=w,R.uniforms.uLabLightmap=b,R.uniforms.uLabBakedStrength=I,R.vertexShader=`varying vec3 vLabPosition;
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),R.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <map_fragment>",`
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let V=[],W=[];function G(x,R,O,K,k,_t,ot,pt=0,ft=0,Q=1,bt=1,Nt=!1){let yt=new ht(Nt?new qt(k,_t,ot):Uc(k,_t,ot),y[pt]);yt.position.set(R,O,K),yt.rotation.x=ft,yt.receiveShadow=!0,yt.castShadow=!0,n.add(yt);let St=new S(k/2,_t/2,ot/2),zt={mesh:yt,position:yt.position,quaternion:yt.quaternion,half:St,min:St.clone().negate(),friction:Q,gravity:bt,name:x,type:pt,shape:zr(St)};return V.push(zt),zt}let H=Kp.map(({name:x,bounds:R,type:O=0,friction:K=.78,gravity:k=1})=>{let{xMin:_t,xMax:ot,zMin:pt,zMax:ft}=R;return G(x,(_t+ot)/2,-.33,(pt+ft)/2,ot-_t,.66,ft-pt,O,0,K,k)});for(let x of Object.values(tm))for(let R of x)G(...R);let{xMin:tt,xMax:X,zMin:it,zMax:mt}=Zp;G("But\xE9e arri\xE8re",0,1.35,it+.4,X-tt,2.7,.6,2),G("But\xE9e ouest",tt+.3,1.05,(it+mt)/2,.6,2.1,mt-it,2),G("But\xE9e est",X-.3,1.05,(it+mt)/2,.6,2.1,mt-it,2);let{xMin:$,xMax:U,zMin:q,zMax:dt}=Vr.hills.bounds,gt=U-$,Z=dt-q,st=16,Ct=64,Lt=new fn(gt,Z,st,Ct).rotateX(-Math.PI/2).translate($+gt/2,0,q+Z/2),Pt=Lt.attributes.uv;for(let x=0;x<Pt.count;x++)Pt.setXY(x,Pt.getX(x)*gt/2.6,Pt.getY(x)*Z/2.6);let Ht=Lt.attributes.position,ee;function D(x){if(ee===x)return;ee=x;let R=ee*.017;for(let O=0;O<Ht.count;O++){let K=Ht.getX(O),k=Ht.getZ(O),_t=Math.sin(Math.PI*Vt.clamp((K-$)/gt,0,1)),ot=Math.min(1,(k-q)*.48,(dt-k)*.48),pt=.93+.56*Math.sin(k*.36+R)+.32*Math.cos(K*.67+k*.26+R*1.4)+.19*Math.sin(k*.81+R*.67);Ht.setY(O,Math.max(0,_t*ot*pt))}Ht.needsUpdate=!0,Lt.computeVertexNormals(),Lt.computeBoundingSphere()}D(Jp);let at=new ht(Lt,y[3]);at.receiveShadow=at.castShadow=!0,n.add(at);let rt=(x,R)=>{let O=Vt.clamp((x-$)/gt*st,0,st-1e-6),K=Vt.clamp((R-q)/Z*Ct,0,Ct-1e-6),k=Math.floor(O),_t=Math.floor(K),ot=O-k,pt=K-_t,ft=st+1,Q=_t*ft+k,bt=Ht.getY(Q),Nt=Ht.getY(Q+1),yt=Ht.getY(Q+ft),St=Ht.getY(Q+ft+1);return ot+pt<=1?bt+(Nt-bt)*ot+(yt-bt)*pt:St+(yt-St)*(1-ot)+(Nt-St)*(1-pt)};V.push({heightfield:!0,mesh:at,height:rt,...Vr.hills.bounds,friction:.81,gravity:1});function et(x,R,O,K,k=1.45){let _t=Bc(384,72,(pt,ft,Q)=>{pt.fillStyle="#202a32",pt.fillRect(0,0,ft,Q),pt.fillStyle=K,pt.font="bold 31px system-ui",pt.textAlign="center",pt.fillText(x,ft/2,48,ft-20)}),ot=new ht(new fn(3.2,.6),new We({map:_t,side:Ye}));ot.position.set(R,k,O),n.add(ot),W.push(ot)}for(let x of Object.values(Vr)){et(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:R,xMax:O,zMin:K,zMax:k}=x.bounds,_t=new Io(new se().setFromPoints([new S(R,.025,K),new S(O,.025,K),new S(O,.025,k),new S(R,.025,k)]),new pi({color:x.color,transparent:!0,opacity:.72}));n.add(_t),W.push(_t)}et("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),et("MURS HAUTS",3,-31,"#e8d2ff"),et("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let nt=new en({color:"#c8e6ed",metalness:1,roughness:.16}),xt=new ht(new Fn(.54,2),nt);xt.position.set(Oc.x,Oc.y,Oc.z),xt.castShadow=!0,n.add(xt);let ut=p.map((x,R)=>{let{x:O,z:K}=Qp(R);return G("\xC9chantillon "+p[R][0],O,.325,K,.65,.65,.65,R,0,1,1,!0).mesh}),Et=new tn(1,12).rotateX(-Math.PI/2),Yt=new We({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Xt(x){let R=new ht(Et,Yt);return R.scale.setScalar(x),n.add(R),R}function A(x,R,O,K,k,_t,ot,pt){let ft=R>=3;t.shadowMap.enabled=ft,h.castShadow=ft,Yt.opacity=R===2?.17:.11,I.value=pt?.38+O*.04:0;let Q=R>=9?2048:R>=6?1024:R>=4?512:256;h.shadow.intensity=.45+R*.055,h.shadow.radius=.65+R*.12;let bt=13+R*1.2;Object.assign(h.shadow.camera,{left:-bt,right:bt,top:bt,bottom:-bt}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==Q&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(Q,Q)),o.visible=k,ot!==E&&(E=ot,y.forEach((yt,St)=>{let zt=yt.userData.texture??yt.map,N=M.has(St)?ot:Math.min(256,ot);if(zt.image.width===N)return;let Mt=document.createElement("canvas");Mt.width=Mt.height=N;let At=Mt.getContext("2d");N>512?v(At,St,N):At.drawImage(C[St],0,0,N,N);let Dt=new mi(Mt);Dt.colorSpace=zt.colorSpace,Dt.wrapS=zt.wrapS,Dt.wrapT=zt.wrapT,Dt.repeat.copy(zt.repeat);for(let vt of[yt,P[St]])vt.userData.texture=Dt,vt.map=Dt,vt.needsUpdate=!0;zt.dispose()}));let Nt=x>=4;for(let yt of V)yt.mesh?.isMesh&&!yt.zone&&(yt.mesh.material=Nt?y[yt.type]:P[yt.type]);at.material=Nt?y[3]:P[3];for(let yt=0;yt<ut.length;yt++)ut[yt].material=Nt?y[yt]:P[yt];y.forEach((yt,St)=>{for(let zt of[yt,P[St]])zt.userData.texture||(zt.userData.texture=zt.map),zt.map=_t?zt.userData.texture:null,zt.color.set(_t?"#ffffff":p[St][1]),zt.needsUpdate=!0}),g=K?.21+O*.067:0,nt.metalness=K?.95:.1,nt.roughness=K?.13:.46,s.visible=x>=2,m(f)}return{boxes:V,floors:H,probe:xt,display:ut,visual:A,shadow:Xt,setTimeOfDay:m,centerShadows:_,get hillSeed(){return ee},setHillSeed:D,bakeLightmap:F,mapMaterial:(x,R)=>R>=4?y[x]:P[x],builtObjects:[...V.map(x=>x.mesh).filter(x=>x?.isObject3D),xt,...W],materials:[...y,...P],focus(x,R,O){L.value=x?R*.75:0,w.value=.07+O*.058}}}function nm(n,t,e){let i=new pn({color:16777215,vertexColors:!0,flatShading:!0}),s=new fe(.16,.25,3.15,9,12),r=s.attributes.position,o=new kt,a=[];for(let $=0;$<r.count;$++){let U=Math.round((r.getY($)+1.575)/3.15*12),q=Math.floor((Math.atan2(r.getX($),r.getZ($))+Math.PI)*1.43);o.setHSL(.084+U*.002,.35,.35+U%3*.032+q%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Ot(a,3));let l=new Qe;l.position.set(Vu.x,0,Vu.z),l.rotation.z=-.14,n.add(l);let c=new ht(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function h($,U,q=.85){let dt=$.getWorldPosition(new S),gt=$.getWorldQuaternion(new ue);t.push({half:U,min:U.clone().negate(),position:dt,quaternion:gt,mesh:{position:dt,quaternion:gt},shape:zr(U),friction:q,gravity:1})}for(let $=0;$<4;$++){let U=new Ce;U.position.y=($+.5)*3.15/4,l.add(U);let q=.237-$*.022;h(U,new S(q,.398,q))}let u=[],d=[],f=3.14;function m($,U,q,dt){u.push(...$,...U,...q),o.setHSL(.25+dt*.043,.54,.28+dt*.17);for(let gt=0;gt<3;gt++)d.push(o.r,o.g,o.b)}for(let $=0;$<10;$++){let dt=function(gt,Z){let st=gt*q;return[Math.cos(U)*st-Math.sin(U)*Z,f+Math.sin(gt*Math.PI)*.38-gt*gt*.54+$%3*.055,Math.sin(U)*st+Math.cos(U)*Z]},U=$*2.39996,q=1.35+$%4*.2;for(let gt=0;gt<7;gt++){let Z=gt/7,st=(gt+1)/7,Ct=.285*Math.sin(Math.PI*Z)**.7,Lt=.285*Math.sin(Math.PI*st)**.7;for(let Pt of[-1,1]){let Ht=dt(Z,Ct*Pt),ee=dt(st,Lt*Pt);Ht[1]-=.065,ee[1]-=.065,m(dt(Z,0),Ht,ee,.31+gt%4*.14),m(dt(Z,0),ee,dt(st,0),.47+$%3*.16)}}}let _=new se;_.setAttribute("position",new Ot(u,3)),_.setAttribute("color",new Ot(d,3)),_.computeVertexNormals();let g=new ht(_,new pn({vertexColors:!0,side:Ye,flatShading:!0}));g.castShadow=!0,l.add(g);let p=new en({color:"#956238",roughness:.92,flatShading:!0}),v=[];for(let $=0;$<5;$++){let U=$*Math.PI*2/5,q=new ht(new Fn(.124,1),p);q.position.set(Math.cos(U)*(.25+$%2*.1),2.88+$%3*.06,Math.sin(U)*(.25+$%2*.1)),q.scale.set(.91,1.16,.91),q.castShadow=!0,l.add(q),v.push(q)}l.updateMatrixWorld(!0);let M=[],y=[],C=new pn({color:"#485d5d",flatShading:!0});function E([$,U],q,dt){let gt=new ht(new qt(.095,.68,.11),C);gt.position.set($,.34,U+.46),gt.castShadow=gt.receiveShadow=!0,n.add(gt),h(gt,new S(.0475,.34,.055));let Z=new Qe;Z.position.set($,.85,U+.4),Z.rotation.x=-.35,n.add(Z);let st=new ht(new qt(.64,.36,.055),new pn({color:"#182831"}));Z.add(st);let Ct=document.createElement("canvas");Ct.width=512,Ct.height=96;let Lt=Ct.getContext("2d"),Pt=new mi(Ct);Pt.colorSpace=me;let Ht=new ht(new fn(.61,.095),new We({map:Pt}));Ht.position.set(0,.116,.03),Z.add(Ht);let ee=.592/dt.length,D=dt.map(([rt,et],nt)=>{let xt=new ht(new qt(ee-.012,.155,.04),new pn({color:"#478086"}));xt.position.set(-.296+ee*(nt+.5),-.045,.046),Z.add(xt),M.push(xt),xt.userData.touchWidth=ee-.012;let ut=document.createElement("canvas");ut.width=208,ut.height=172;let Et=new mi(ut);Et.colorSpace=me;let Yt=new ht(new fn(ee-.017,.139),new We({map:Et}));Yt.position.z=.0205,xt.add(Yt);let Xt=-1/0;return xt.userData.action=()=>{let A=performance.now();A-Xt<250||(Xt=A,et(),P(),xt.position.z=.036,setTimeout(()=>{xt.position.z=.046},115))},{label:rt,context:ut.getContext("2d"),texture:Et}});function at(){Lt.fillStyle="#182831",Lt.fillRect(0,0,512,96),Lt.fillStyle="#ffe1a0",Lt.font="bold 38px system-ui",Lt.fillText(q,17,62,478);for(let rt of D){let et=rt.context;et.fillStyle="#386269",et.fillRect(0,0,208,172),et.fillStyle="#fff2d5",et.textAlign="center",et.font="bold 27px system-ui";let nt=(typeof rt.label=="function"?rt.label():rt.label).split("|");nt.forEach((xt,ut)=>et.fillText(xt,104,(nt.length>1?68:97)+ut*37,188)),rt.texture.needsUpdate=!0}Pt.needsUpdate=!0}y.push(at)}function P(){for(let $ of y)$()}E(Gr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>e.spawn(0,Hr[0])],["Boule",()=>e.spawn(1,Hr[0])],["T\xE9tra\xE8dre",()=>e.spawn(2,Hr[0])],["Vider",e.clear]]),E(Gr.largeObjects,"GROS OBJETS",[["Rectangle",()=>e.spawn(4,Hr[1])],["Sph\xE8re",()=>e.spawn(5,Hr[1])]]),E(Gr.rendering,"RENDU",[[()=>"Qualit\xE9|"+e.quality(),e.qualityNext],[()=>"R\xE9solution XR|"+e.resolution(),e.resolutionNext],[()=>"Textures|"+e.textureSize(),e.textureNext]]),E(Gr.course,"PARCOURS",[["Retour|d\xE9part",e.resetPlayer],["Remettre|objets",e.resetObjects],["Hitboxes|Low / High",e.hitbox],["Appuis|On / Off",e.movement]]),E(Gr.coconuts,"COCOTIER",[["Remettre|les cocos",e.resetTree],["Vider|les objets",e.clear]]),P();let L=new Qe,{x:w,y:b,z:I}=Gu;L.position.set(w,b,I),n.add(L);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let $=0;$<3;$++){let U=[.9,.58,.27][$],q=new ht(new tn(U,20),new pn({color:F[$],side:Ye}));q.position.z=$*.012,L.add(q)}let V=new ht(new qt(.14,1.5,.14),C);V.position.set(0,.75-b,-.11),L.add(V);let W=0,G=document.createElement("canvas");G.width=256,G.height=64;let H=G.getContext("2d"),tt=new mi(G);tt.colorSpace=me;let X=new ht(new fn(1.4,.35),new We({map:tt,side:Ye}));X.position.set(0,2.64-b,.02),L.add(X);function it(){H.fillStyle="#182831",H.fillRect(0,0,256,64),H.textAlign="center",H.font="bold 28px system-ui",H.fillStyle="#fff0ce",H.fillText("CIBLE  \xB7  "+W,128,42),tt.needsUpdate=!0}function mt($){for(let U of $){if(!U.beforePhysics||U.owner||U.frozen||!U.mesh.visible)continue;let q=U.beforePhysics,dt=U.mesh.position;if(q.z<=I||dt.z>I||U.velocity.z>=-1)continue;let gt=(q.z-I)/(q.z-dt.z),Z=Math.hypot(Vt.lerp(q.x,dt.x,gt)-w,Vt.lerp(q.y,dt.y,gt)-b);Z<=.9+U.radius*.45&&(W+=Z<.27?3:Z<.58?2:1,it())}}return it(),{targets:M,coconuts:v,redraw:P,updateTarget:mt,score:()=>W,setScore($){W=$,it()}}}function zc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new se,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=im(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=im(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function im(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Vc=0,OM=1,BM=new S,sm=new Zo,Hu=new un,rm=new S,kc=new Sn,Gc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Hc,this.unassigned=new Hc,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.vertices.push(new Wu(t[e]));this._compute()}return this}setFromObject(t){let e=[];return t.updateMatrixWorld(!0),t.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new S;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){let e=this.faces;for(let i=0,s=e.length;i<s;i++)if(e[i].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,BM)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}_removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){let e=t.outside,i=t.outside;for(;i.next!==null&&i.next.face===t;)i=i.next;return this.assigned.removeSubList(e,i),e.prev=i.next=null,t.outside=null,e}}_deleteFaceVertices(t,e){let i=this._removeAllVerticesFromFace(t);if(i!==void 0)if(e===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;e.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{let i=e.next,s=this.tolerance,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.mark===Vc){let l=a.distanceToPoint(e.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(e,r),e=i}while(e!==null)}return this}_computeExtremes(){let t=new S,e=new S,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:i,max:s}}_computeInitialHull(){let t=this.vertices,e=this._computeExtremes(),i=e.min,s=e.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,sm.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l){sm.closestPointToPoint(m.point,!0,rm);let _=rm.distanceToSquared(m.point);_>r&&(r=_,c=m)}}r=-1,Hu.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c){let _=Math.abs(Hu.distanceToPoint(m.point));_>r&&(r=_,h=m)}}let u=[];if(Hu.distanceToPoint(h.point)<0){u.push(ri.create(a,l,c),ri.create(h,l,a),ri.create(h,c,l),ri.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(ri.create(a,c,l),ri.create(h,a,l),ri.create(h,l,c),ri.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=t.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let _=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,_=this.faces[g])}_!==null&&this._addVertexToFace(m,_)}}return this}_reindexFaces(){let t=[];for(let e=0;e<this.faces.length;e++){let i=this.faces[e];i.mark===Vc&&t.push(i)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===i);return t}}_computeHorizon(t,e,i,s){this._deleteFaceVertices(i),i.mark=OM;let r;e===null?r=e=i.getEdge(0):r=e.next;do{let o=r.twin,a=o.face;a.mark===Vc&&(a.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,o,a,s):s.push(r)),r=r.next}while(r!==e);return this}_addAdjoiningFace(t,e){let i=ri.create(t,e.tail(),e.head());return this.faces.push(i),i.getEdge(-1).setTwin(e.twin),i.getEdge(0)}_addNewFaces(t,e){this.newFaces=[];let i=null,s=null;for(let r=0;r<e.length;r++){let o=e[r],a=this._addAdjoiningFace(t,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(t){let e=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,e),this._addNewFaces(t,e),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}},ri=class n{constructor(){this.normal=new S,this.midpoint=new S,this.area=0,this.constant=0,this.outside=null,this.mark=Vc,this.edge=null}static create(t,e,i){let s=new n,r=new aa(t,s),o=new aa(e,s),a=new aa(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){let t=this.edge.tail(),e=this.edge.head(),i=this.edge.next.head();return kc.set(t.point,e.point,i.point),kc.getNormal(this.normal),kc.getMidpoint(this.midpoint),this.area=kc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}},aa=class{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}},Wu=class{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}},Hc=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}};var Us=class extends se{constructor(t=[]){super();let e=[],i=[],r=new Gc().setFromPoints(t).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;e.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ot(e,3)),this.setAttribute("normal",new Ot(i,3))}};var Cn=Math.PI*2,Wc=.84,Ni=128;function Qi(n){let t=new Uint8Array(Ni*Ni*4);for(let i=0;i<Ni;i++)for(let s=0;s<Ni;s++){let r=(s+.5)/Ni,o=(i+.5)/Ni,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Wc,1),Math.min(o/Wc,1),s,i),l=(s+i*Ni)*4;for(let c=0;c<3;c++)t[l+c]=Vt.clamp(Math.round(a[c]),0,255);t[l+3]=255}let e=new fi(t,Ni,Ni);return e.colorSpace=me,e.generateMipmaps=!0,e.minFilter=En,e.magFilter=sn,e.needsUpdate=!0,e}function Ns(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Qt(n,t,e=!1){let i=n.index?n.toNonIndexed():n,s=new kt(t),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),e?r.setXY(l,r.getX(l)*Wc,r.getY(l)*Wc):r.setXY(l,.95,.95);return i.setAttribute("color",new ve(a,3)),i}function ts(n,t,e,i,s,r,o,a=0){return{id:n,name:t,collisionGeo:i,mass:e,geo:zc(s),material:new en({vertexColors:!0,map:r,roughness:o,metalness:a})}}function om(n,t,e){let i=n/2,s=t/2,r=new Pi;return r.moveTo(-i+e,-s),r.lineTo(i-e,-s),r.quadraticCurveTo(i,-s,i,-s+e),r.lineTo(i,s-e),r.quadraticCurveTo(i,s,i-e,s),r.lineTo(-i+e,s),r.quadraticCurveTo(-i,s,-i,s-e),r.lineTo(-i,-s+e),r.quadraticCurveTo(-i,-s,-i+e,-s),r}function Ki(n,t,e,i,s){return new Ms(om(n,t,i),{depth:e,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-e/2)}function $i(n,t,e=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=t;f++){let m=Cn*f/t,_=e(u,d,m,h);if(i.push(_*Math.sin(m),d,_*Math.cos(m)),s.push(f/t,h/(n.length-1)),h===n.length-1||f===t)continue;let g=h*(t+1)+f,p=g+t+1;u>0&&r.push(g,g+1,p),n[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new se;o.setAttribute("position",new Ot(i,3)),o.setAttribute("uv",new Ot(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new S,c=new S;for(let h=0;h<n.length;h++){let u=h*(t+1),d=u+t;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function la(n,t){let e=[];for(let[i,s]of n){if(i===0){e.push(new S(0,s,0));continue}for(let r=0;r<t;r++){let o=Cn*r/t;e.push(new S(i*Math.sin(o),s,i*Math.cos(o)))}}return new Us(e)}function zM(){let e=new Ho(om(.098,.185,.008),3).translate(0,-.001,.0116),i=e.attributes.position;for(let l=0;l<i.count;l++){let c=Vt.clamp(i.getX(l)/.098+.5,0,1),h=Vt.clamp((i.getY(l)+.001)/.185+.5,0,1);e.attributes.uv.setXY(l,c,h)}let s=Qi((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Cn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[Qt(Ki(.106,.207,.013,.011,.0019),8425890),Qt(Ki(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),Qt(Ki(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),Qt(e,16777215,!0),Qt(Ki(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),Qt(new qt(.0036,.024,.004).translate(.055,.029,0),11714250),Qt(new qt(.0036,.015,.004).translate(-.055,.032,0),11385285),Qt(new qt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(Qt(new fe(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(Qt(new tn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(Qt(new tn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Us([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new S(c,h,l))));return ts("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function kM(){let t=[-.165,-.055,.055,.165],e=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=$i(e,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...t.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Qi((a,l,c,h)=>{let u=Cn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...t.map(v=>Math.exp(-(((d-v+.035*Math.cos(u))/.009)**2)))),_=f**3*m,g=Ns(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*_+p,76+24*f+70*_+p,24+11*f+52*_+p*.8]}),o=la([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return ts("bread","Baguette de pain",.27,o,[Qt(s,16777215,!0)],r,.9)}function VM(){let n=Qi((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*Ns(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),t=$i([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),e=$i([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[Qt(t,16777215,!0),Qt(e,11056059),Qt(new fe(.067,.067,.124,10).rotateX(Math.PI/2),9346214),Qt(new fe(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(Qt(new qt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=la([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return ts("wheel","Roue",1.8,s,i,n,.64,.23)}function GM(){let n=Qi((r,o,a,l)=>{let c=Ns(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),t=$i([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),e=new Mn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new S(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new S(.166,-.027,.01),new S(.166,.053,-.01));let s=new Us(i);return ts("cup","Tasse",.39,s,[Qt(t,16777215,!0),Qt(e,15785922)],n,.37)}function HM(){let n=$i([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),t=Qi((s,r,o,a)=>{let l=9*Ns(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Cn*4);return[h,h*1.13,h*1.24]}),e=[Qt(n,16777215,!0),Qt(new Tr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),Qt(new tn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),Qt(new tn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),Qt(new fe(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),Qt(new tn(.008,12).translate(0,.035,.0336),15633202)],i=la([[.033,-.143],[.054,.133]],6);return ts("flashlight","Lampe torche",.31,i,e,t,.46,.28)}function WM(){let n=$i([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),t=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],e=Qi((r,o,a,l)=>{let c=10*Ns(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Cn*r*2));if(t[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Cn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),i=[Qt(n,16777215,!0),Qt(new tn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),Qt(new Tr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),Qt(new tn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=la([[.069,-.112],[.069,.109]],6);return ts("soda","Canette de soda",.35,s,i,e,.42,.27)}function XM(){let n=$i([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),t=Qi((s,r,o,a)=>{let l=15*Ns(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),e=[Qt(n,16777215,!0),Qt(Ki(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),Qt(new tn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=la([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return ts("cone","C\xF4ne de chantier",.58,i,e,t,.78)}function qM(){let n=Qi((s,r,o,a)=>{let l=8*Ns(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),t=$i([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),e=[Qt(Ki(.138,.22,.061,.016,.004),14788675),Qt(Ki(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),Qt(new fn(.106,.174).translate(0,-.004,.0395),16777215,!0),Qt(t,2502456),Qt(new fe(.014,.017,.016,10).translate(.04,.117,.001),2503482),Qt(new qt(.008,.047,.027).translate(-.072,.014,-.002),3028798),Qt(new qt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),Qt(new tn(.004,8).translate(.04,.066,.0397),15817792),Qt(new tn(.004,8).translate(-.04,.066,.0397),7903100),Qt(Ki(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new S(s,l,o),new S(r,l,o),new S(r,l,a),new S(s,l,a)]);return ts("radio","Talkie-walkie",.43,new Us(i),e,n,.61,.08)}function am(){return[zM(),kM(),VM(),GM(),HM(),WM(),XM(),qM()]}var YM=[0,1,2,3,4,5,7,8,9,10];function lm(n){$p.forEach(({x:t,z:e},i)=>n(YM[i],new S(t,.8,e)))}function cm(){let n=[["Cube",new qt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Fn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Wo(.29),"#d8ae53",0,1],["Brique",new qt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new qt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Fn(.6,4),"#dbab58",.6,3.7],["Coco",new Fn(.124,1),"#956238",.124,.44]].map(([t,e,i,s,r])=>({name:t,geo:e,mass:r,shape:ra(e,s),material:new en({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:zr(e.computeBoundingBox()??e.boundingBox.getSize(new S).multiplyScalar(.5))}));for(let{collisionGeo:t,sphere:e=0,...i}of am()){let s=ra(t??i.geo,e);n.push({...i,shape:s,lowShape:s})}return n}var hm=48,um=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),ZM=(n,t,e)=>Math.max(t,Math.min(e,n)),JM=()=>structuredClone(um.shield),ca=(n,t,e,i)=>Number.isFinite(n)?ZM(n,e,i):t;function qc(n){let t=n?.mode==="lathe"?um.bottle:JM(),e=n?.mode==="lathe"?"lathe":"extrude",i=e==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=hm?n.points.map(o=>[ca(o?.[0],0,-1.5,1.5),ca(o?.[1],0,-1.5,1.5)]):structuredClone(t.points);return e==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:e,symmetric:i,points:s,depth:ca(n?.depth,t.depth,.025,1.5),bevel:ca(n?.bevel,t.bevel,0,.15),segments:Math.round(ca(n?.segments,32,8,64))}}function dm(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let t=n.points.map(([i,s])=>[-Math.abs(i),s]),e=t.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...t,...e]}function Xc(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function jM(n,t,e,i){let s=Xc(n,t,e),r=Xc(n,t,i),o=Xc(e,i,n),a=Xc(e,i,t);return s*r<-1e-8&&o*a<-1e-8}function KM(n){let t=qc(n),e=t.mode==="lathe"?t.points:dm(t);if(e.length<3||e.length>hm*2)return"Il faut au moins trois points.";for(let i=1;i<e.length;i++)if(Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1])<.008)return"Certains points sont trop proches.";if(t.mode==="lathe"){if(t.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...e.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<e.length;s++){let r=e[s],o=e[(s+1)%e.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<e.length;a++)if(!(s===0&&a===e.length-1)&&jM(r,o,e[a],e[(a+1)%e.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function fm(n){let t=qc(n),e=KM(t);if(e)throw new Error(e);let i;if(t.mode==="lathe"){let s=t.points.map(([r,o])=>new ct(Math.max(0,r),o));i=new Go(s,t.segments)}else{let s=dm(t),r=new Pi;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(t.bevel,t.depth*.42);i=new Ms(r,{depth:t.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new ve(new Float32Array(s*2),2))}return i}var $M="gorilla-lab-models-v1",ha=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),QM=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,tb=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre"}),mm=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),eb=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),nb=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,ib=/^#[a-f\d]{6}$/i;function pm(n,t){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||t}function Xu(n,t,e,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Vt.clamp(n[s],e,i):t)}function da(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ha.models||JSON.stringify(n).length>ha.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let t=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!nb.test(i.id)||t.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ha.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return t.add(i.id),{id:i.id,name:pm(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(eb).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:pm(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(tb,s?.shape)?s.shape:"box",...s?.shape==="custom"?{profile:qc(s?.profile)}:{},position:Xu(s?.position,0,-3,3),rotation:Xu(s?.rotation,0,-360,360),scale:Xu(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&ib.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(mm,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=ha.textureBytes&&QM.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&t.has(n.avatarId)?n.avatarId:null}}function gm(n){try{let t=(n??globalThis.localStorage)?.getItem($M);if(t&&t.length<=ha.fileBytes)return da(JSON.parse(t))}catch{}return{version:1,models:[],avatarId:null}}function sb(n){switch(n){case"sphere":return new On(.5,20,12);case"cylinder":return new fe(.5,.5,1,20);case"cone":return new Ri(.5,1,20);case"torus":return new Mn(.365,.135,8,24);case"capsule":return new ys(.28,.44,6,16);case"diamond":return new Wn(.5);default:return new qt(1,1,1)}}var xm=Object.keys(mm),Wr=64,ua=4,_m=2,_i;function rb(n,t,e){let i=Math.sin(t*127.1+e*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return t%16<2||e%16<2?135:255;case"stripes":return(t+e)%16<6?155:255;case"wood":return 204+24*Math.sin(e*.75+Math.sin(t*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function ym(){if(_i)return _i;let n=Wr*ua,t=Wr*_m,e=new Uint8Array(n*t*4);for(let i=0;i<t;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Wr)*ua+Math.floor(s/Wr),o=rb(xm[r],s%Wr,i%Wr),a=(i*n+s)*4;e[a]=e[a+1]=e[a+2]=o,e[a+3]=255}return _i=new fi(e,n,t),_i.colorSpace=me,_i.magFilter=sn,_i.minFilter=En,_i.generateMipmaps=!0,_i.needsUpdate=!0,_i}function vm(n){let t=n.shape==="custom"?fm(n.profile):sb(n.shape),e=t.index?t.toNonIndexed():t;e!==t&&t.dispose();let i=n.rotation.map(Vt.degToRad);e.scale(...n.scale),e.rotateX(i[0]),e.rotateY(i[1]),e.rotateZ(i[2]),e.translate(...n.position);let s=new kt(n.color),r=e.attributes.position.count,o=new Float32Array(r*3),a=e.attributes.uv,l=xm.indexOf(n.surface),c=l%ua,h=Math.floor(l/ua);for(let u=0;u<r;u++)s.toArray(o,u*3),n.texture||a.setXY(u,(c+.05+a.getX(u)*.9)/ua,(h+.05+a.getY(u)*.9)/_m);return e.setAttribute("color",new ve(o,3)),e}function ob(n){if(!n?.texture)return new en({vertexColors:!0,map:ym(),roughness:.68});let t=new Ii().load(n.texture);return t.colorSpace=me,t.wrapS=t.wrapT=Gn,new en({vertexColors:!0,map:t,roughness:.68})}function Yc(n){return n?.parts?.some(t=>t.texture)?n.parts.map(ob):new en({vertexColors:!0,map:ym(),roughness:.68})}function Zc(n){for(let t of Array.isArray(n)?n:[n]){if(!t)return;t.map&&t.map!==_i&&t.map.dispose(),t.dispose()}}function ab(n){let t=n.map(vm),e=zc(t,n.some(i=>i.texture));return t.forEach(i=>i.dispose()),e.center(),e.computeBoundingBox(),e}function Jc(n){let t=ab(n.parts),e=t.boundingBox.getSize(new S);return t.scale(1/Math.max(e.x,1e-5),1/Math.max(e.y,1e-5),1/Math.max(e.z,1e-5)),t.computeBoundingBox(),t}function Mm(n){let t=new Ze;for(let e of n.parts){let i=vm(e);i.computeBoundingBox(),t.union(i.boundingBox),i.dispose()}return t.getSize(new S)}var wm=Object.freeze([8,16,32,48,64,96,128]),Tm=16,Kc=24,bm=new WeakMap,es=Vt.clamp,Fs=Vt.lerp,qu=n=>n*n*(3-2*n);function Yn(n,t,e,i){return Number.isFinite(n)?es(n,t,e):i}function Sm(n){if(!n)return null;let t=da({version:1,models:[n]});return t.models[0]?.parts.length?t.models[0]:null}var lb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Xr(n={}){let t=wm.includes(n?.detail)?n.detail:Tm,e=n?.heights;return{detail:t,seed:Math.round(Yn(n?.seed,0,2147483647,1)),amplitude:Yn(n?.amplitude,0,12,0),frequency:Yn(n?.frequency,.015,2,.12),octaves:Math.round(Yn(n?.octaves,1,5,3)),roughness:Yn(n?.roughness,.15,.95,.42),ridge:Yn(n?.ridge,0,1,0),edgeFade:Yn(n?.edgeFade,0,1,0),grass:Yn(n?.grass,0,1,0),shrub:Yn(n?.shrub,0,1,0),grassSize:Yn(n?.grassSize,.1,5,1),shrubSize:Yn(n?.shrubSize,.1,5,1),grassModel:Sm(n?.grassModel),shrubModel:Sm(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&lb.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(e)&&e.length===(t+1)**2?Array.from(e,i=>Yn(i,-Kc,Kc,0)):null}}function Em(n,t,e,i){let s=es(e,0,t),r=es(i,0,t),o=Math.min(t-1,Math.floor(s)),a=Math.min(t-1,Math.floor(r)),l=s-o,c=r-a,h=t+1,u=a*h+o,d=n[u],f=n[u+1],m=n[u+h],_=n[u+h+1];return l+c<=1?d+(f-d)*l+(m-d)*c:_+(m-_)*(1-l)+(f-_)*(1-c)}function Am(n,t){let e=wm.includes(t)?t:Tm;if(e===n.detail)return n;if(!n.heights)return{...n,detail:e,heights:null};let i=e+1,s=n.detail/e,r=Array.from({length:i**2},(o,a)=>Em(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:e,heights:r}}function Fi(n,t,e){let i=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function jc(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=qu(n-i),o=qu(t-s),a=Fs(Fi(i,s,e),Fi(i+1,s,e),r),l=Fs(Fi(i,s+1,e),Fi(i+1,s+1,e),r);return 2*Fs(a,l,o)-1}function Yu(n){let{w:t,d:e,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d}=i,f=bm.get(n),m=f&&f.w===t&&f.d===e&&f.detail===s&&f.seed===r&&f.amplitude===o&&f.frequency===a&&f.octaves===l&&f.roughness===c&&f.ridge===h&&f.edgeFade===u;if(m&&f.heights===d)return f;let _=s+1,g=m?f.procedural:new Float64Array(_**2);if(!m&&o)for(let M=0;M<=s;M++)for(let y=0;y<=s;y++){let C=(y/s-.5)*t*a,E=(M/s-.5)*e*a,P=0,L=1,w=0;for(let F=0;F<l;F++){let V=jc(C*2**F,E*2**F,r+F*13);P+=L*Fs(V,1-2*Math.abs(V),h),w+=L,L*=c}let b=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(y/s-.5))*2,(.5-Math.abs(M/s-.5))*2)),u*2):1,I=l===3&&c===.42&&h===0&&u===0;g[M*_+y]=I?o*(.62*jc(C,E,r)+.26*jc(C*2.03,E*2.03,r+13)+.12*jc(C*4.13,E*4.13,r+37)):o*P/w*b}let p=d?g.map((M,y)=>M+d[y]):g,v={w:t,d:e,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d,procedural:g,surface:p};return bm.set(n,v),v}function Cm(n,t,e){let{detail:i,w:s,d:r,surface:o}=n;return Em(o,i,(t/s+.5)*i,(e/r+.5)*i)}function cb(n,t,e){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,t-1),a=Math.min(i,t+1),l=Math.max(0,e-1),c=Math.min(i,e+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===t&&d===e||(h+=s[d*r+f],u++);return h/u}function Rm(n,t,e,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![t,e,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Yu(n),{detail:l,w:c,d:h,surface:u,procedural:d}=a,f=t-n.x,m=e-n.z,_=es(f,-c/2,c/2),g=es(m,-h/2,h/2);if((f-_)**2+(m-g)**2>=s**2)return!1;let p=(f/c+.5)*l,v=(m/h+.5)*l,M=c/l,y=h/l,C=Math.max(0,Math.ceil(p-s/M)),E=Math.min(l,Math.floor(p+s/M)),P=Math.max(0,Math.ceil(v-s/y)),L=Math.min(l,Math.floor(v+s/y)),w=Number.isFinite(o)?o-n.y:Cm(a,f,m),b=l+1,I=a.heights?.slice()??new Array(b**2).fill(0),F=!1,V=!1;function W(G,H,tt){F=!0;let X=H*b+G,it=I[X],mt;if(i==="raise"||i==="lower")mt=it+(i==="raise"?1:-1)*r*tt;else{let $=i==="flatten"?w:cb(a,G,H);mt=Fs(u[X],$,Math.min(1,r)*tt)-d[X]}mt=es(mt,-Kc,Kc),!(Math.abs(mt-it)<1e-7)&&(I[X]=mt,V=!0)}for(let G=P;G<=L;G++)for(let H=C;H<=E;H++){let tt=Math.hypot((H-p)*M,(G-v)*y)/s;tt<1&&W(H,G,qu(1-tt))}if(!F){let G=es(p,0,l),H=es(v,0,l),tt=Math.min(l-1,Math.floor(G)),X=Math.min(l-1,Math.floor(H)),it=G-tt,mt=H-X,$=it+mt<=1,U=$?1-it-mt:it+mt-1,q=$?it:1-mt,dt=$?mt:1-it;if(U>=Math.max(q,dt)){let gt=+!$;W(tt+gt,X+gt,1)}else q>=dt?W(tt+1,X,1):W(tt,X+1,1)}return V&&(n.terrain.heights=I),V}function Zu(n){let{w:t,d:e,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let d=0;d<=s;d++){let f=u*r+d;o[3*f]=(d/s-.5)*t,o[3*f+2]=(u/s-.5)*e,a[2*f]=d/s*t/2.6,a[2*f+1]=(1-u/s)*e/2.6,u<s&&d<s&&(l.set([f,f+r,f+1,f+r+1,f+1,f+r],c),c+=6)}let h=new se;return h.setAttribute("position",new ve(o,3).setUsage(ia)),h.setAttribute("uv",new ve(a,2)),h.setIndex(new ve(l,1)),hb(h,n),h}function hb(n,t){let{surface:e}=Yu(t),{position:i}=n.attributes;for(let s=0;s<e.length;s++)i.setY(s,e[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function ub(){let n=[];for(let e=0;e<5;e++){let i=e*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+e%3*.07,a+r*.16)}let t=new se;return t.setAttribute("position",new Ot(n,3)),t.setAttribute("uv",new Ot(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),t.computeVertexNormals(),t}function db(){return new Fn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var fb=[{name:"grass",geometry:ub,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:db,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Pm(n){let t=new Qe;for(let{name:e,geometry:i,perMetre:s,max:r,salt:o,color:a}of fb){let l=n.terrain[e];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,n.w*n.d*s)*l)),h=n.terrain[e+"Model"],u=n.terrain[e+"Size"]??1,d,f;if(h){let g=e==="grass"?.42:.85;d=Jc(h),d.scale(g*u,g*u,g*u),d.translate(0,g*u/2,0),f=Yc(h)}else if(d=i(),d.scale(u,u,u),f=new pn({color:a,side:e==="grass"?Ye:ti,flatShading:!0}),e==="grass"&&n.terrain.grassTexture){let g=new Ii().load(n.terrain.grassTexture);g.colorSpace=me,f.map=g,f.color.set("#ffffff"),f.userData.ownTexture=!0}let m=new Ro(d,f,c);m.name=e,m.instanceMatrix.setUsage(ia),m.userData.salt=o,m.receiveShadow=!0;let _=new kt;for(let g=0;g<c;g++){let p=Fs(.68,1.2,Fi(g,o,n.terrain.seed+4));m.setColorAt(g,_.setRGB(p,p,p))}t.add(m)}return pb(t,n),t}function pb(n,t){let e=Yu(t),i=new Ce;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=t.terrain;for(let a=0;a<s.count;a++){let l=(Fi(a,r,o)-.5)*.96*t.w,c=(Fi(a,r,o+1)-.5)*.96*t.d;i.position.set(l,Cm(e,l,c),c),i.rotation.y=Fi(a,r,o+2)*2*Math.PI,i.scale.setScalar(Fs(.58,1.34,Fi(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Im(n){if(n){for(let t of n.children)t.geometry.dispose(),t.material?.userData?.ownTexture&&t.material.map?.dispose(),Zc(t.material),t.dispose();n.clear(),n.removeFromParent()}}var Ju=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Lm=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Dm(n,t=Lm[n]){n=Math.max(0,Math.min(Ju.length-1,n|0));let e=document.createElement("canvas");e.width=e.height=512;let i=e.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(t)?t:Lm[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])i.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return e}var Um=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Nm=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Om=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",fa=(n,t,e)=>Math.min(e,Math.max(t,n)),mb=(n,t)=>{n.toBlob(e=>{if(!e)return;let i=document.createElement("a"),s=URL.createObjectURL(e);i.href=s,i.download=t+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},ju=(n,t)=>{for(let e of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(e,i),t(n),n.restore()};function gb(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0)/2**32}function Fm(n,{pattern:t="grain",base:e="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Om(e),r.fillRect(0,0,o,o);let a=gb(s),l=fa(64/i,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(t)){let h=t==="wood"?1400:t==="grass"?3700:t==="rock"?1900:4300;for(let u=0;u<h;u++){let d=a()*o,f=a()*o,m=t==="wood"?a()*45+5:t==="grass"?a()*2+1:t==="rock"?a()*20+2:a()*7+1,_=t==="grass"?a()*29+7:t==="wood"?a()*2+1:t==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(t==="soil"?.07+a()*.22:.05+a()*.19)),ju(r,g=>g.fillRect(d,f,m,_))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(t)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(t==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)ju(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,fa(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(t==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(t==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=t==="brick"&&Math.floor(u/l)%2?l/2:0;t!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(t==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var xb=`
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
`;function _b(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=xb,document.head.append(n)}async function yb(n,t){if(!n)return;let e=new Image;e.decoding="async",await new Promise((s,r)=>{e.onload=s,e.onerror=r,e.src=n});let i=t.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(e,0,0,512,512)}function Ku({initial:n=null,tint:t="#687a86",name:e="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){_b();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=U=>o.querySelector(U),l=a(".texture-canvas"),c=a(".texture-tile"),h=Nm(),u=Nm(),d={pattern:Um.some(([U])=>U===i)?i:"grain",base:Om(t),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d"),m=h.getContext("2d"),_=u.getContext("2d"),g=[],p=[],v=!1,M=!1,y=null,C="paint",E=null;a("#studio-title").textContent=e+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...Um.map(([U,q])=>new Option(q,U))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let U of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+U+"]").addEventListener("input",q=>{d[U]=["scale","size","opacity","hardness"].includes(U)?Number(q.target.value):q.target.value});let P=U=>{a("[data-status]").textContent=U},L=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let U=c.getContext("2d");U.clearRect(0,0,256,128);for(let q=0;q<2;q++)for(let dt=0;dt<4;dt++)U.drawImage(l,dt*64,q*64,64,64)},w=()=>({base:m.getImageData(0,0,512,512),top:_.getImageData(0,0,512,512)}),b=U=>{m.putImageData(U.base,0,0),_.putImageData(U.top,0,0),L()},I=()=>{g.push(w()),g.length>16&&g.shift(),p.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},F=(U,q)=>{U.length&&(q.push(w()),b(U.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,v=!0)},V=()=>{v&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(I(),Fm(h,d),_.clearRect(0,0,512,512),L(),P("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},W=U=>{let q=l.getBoundingClientRect();return{x:(U.clientX-q.left)/q.width*512,y:(U.clientY-q.top)/q.height*512}},G=U=>{let q=d.size/2,dt=d.opacity;ju(_,gt=>{gt.save(),C==="erase"&&(gt.globalCompositeOperation="destination-out"),gt.globalAlpha=dt;let Z=fa(d.hardness,.05,1);if(C==="stamp")gt.fillStyle=d.ink,gt.translate(U.x,U.y),gt.rotate(Math.PI/4),gt.fillRect(-q*.8,-q*.8,q*1.6,q*1.6);else{let st=gt.createRadialGradient(U.x,U.y,q*Z*.85,U.x,U.y,q);if(C==="erase")st.addColorStop(0,"rgba(0,0,0,1)"),st.addColorStop(1,"rgba(0,0,0,0)");else{let Ct=d.ink.match(/[\da-f]{2}/gi).map(Lt=>parseInt(Lt,16)).join(",");st.addColorStop(0,"rgba("+Ct+",1)"),st.addColorStop(1,"rgba("+Ct+",0)")}gt.fillStyle=st,gt.beginPath(),gt.arc(U.x,U.y,q,0,2*Math.PI),gt.fill()}gt.restore()})},H=(U,q)=>{let dt=Math.hypot(q.x-U.x,q.y-U.y),gt=Math.max(1,Math.ceil(dt/Math.max(2,d.size*.18)));for(let Z=1;Z<=gt;Z++)G({x:U.x+(q.x-U.x)*Z/gt,y:U.y+(q.y-U.y)*Z/gt})},tt=U=>{let q=f.getImageData(Math.floor(fa(U.x,0,511)),Math.floor(fa(U.y,0,511)),1,1).data;d.ink="#"+[...q].slice(0,3).map(dt=>dt.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,P("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",U=>{if(U.button!==0||M)return;let q=W(U);if(C==="pick"){tt(q);return}U.preventDefault(),I(),M=!0,y=U.pointerId,E=q,l.setPointerCapture(U.pointerId),G(q),L()}),l.addEventListener("pointermove",U=>{if(!M||U.pointerId!==y)return;U.preventDefault();let q=W(U);C==="stamp"?G(q):H(E,q),E=q,L()});let X=U=>{U.pointerId===y&&(M=!1,y=null,E=null,l.hasPointerCapture(U.pointerId)&&l.releasePointerCapture(U.pointerId))};l.addEventListener("pointerup",X),l.addEventListener("pointercancel",X);for(let U of o.querySelectorAll("[data-tool]"))U.onclick=()=>{C=U.dataset.tool,o.querySelectorAll("[data-tool]").forEach(q=>q.setAttribute("aria-pressed",String(q===U)))};a("[data-cmd=generate]").onclick=V,a("[data-cmd=undo]").onclick=()=>F(g,p),a("[data-cmd=redo]").onclick=()=>F(p,g),a("[data-cmd=export]").onclick=()=>mb(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async U=>{let q=U.target.files?.[0];if(U.target.value="",!!q)try{if(!["image/png","image/jpeg","image/webp"].includes(q.type))throw Error("Image PNG / JPG / WebP uniquement.");if(q.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let dt=await createImageBitmap(q);I(),m.clearRect(0,0,512,512),m.drawImage(dt,0,0,512,512),dt.close(),_.clearRect(0,0,512,512),L(),P("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(dt){P(dt.message)}});let it=U=>{!U&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",mt,!0),o.remove())},mt=U=>{if(U.key==="Escape"){U.preventDefault(),it(!1);return}(U.ctrlKey||U.metaKey)&&!U.target.closest("input,select")&&U.key.toLowerCase()==="z"&&(U.preventDefault(),U.stopImmediatePropagation(),U.shiftKey?F(p,g):F(g,p))};window.addEventListener("keydown",mt,!0),a("[data-cmd=close]").onclick=()=>it(!1),a("[data-cmd=cancel]").onclick=()=>it(!1);let $=()=>{for(let U of[512,384,256,192]){let q=document.createElement("canvas");q.width=q.height=U,q.getContext("2d").drawImage(l,0,0,U,U);for(let dt of[.85,.72,.58]){let gt=q.toDataURL("image/webp",dt);if(gt.length<=s)return gt}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let U=a("[data-cmd=apply]");U.disabled=!0;try{let q=$();await r(q),v=!1,it(!0)}catch(q){P(q.message||"Impossible d\u2019appliquer la texture.")}finally{U.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Fm(h,d),L(),n&&yb(n,h).then(L).catch(()=>P("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>it(!1)}}var Os=new Ts,gn=new S,ns=new S,Ne=new ue,Bm={X:new S(1,0,0),Y:new S(0,1,0),Z:new S(0,0,1)},$u={type:"change"},zm={type:"mouseDown",mode:null},km={type:"mouseUp",mode:null},Vm={type:"objectChange"},nh=class extends Es{constructor(t,e=null){super(void 0,e);let i=new td(this);this._root=i;let s=new ed;this._gizmo=s,i.add(s);let r=new nd;this._plane=r,i.add(r);let o=this;function a(M,y){let C=y;Object.defineProperty(o,M,{get:function(){return C!==void 0?C:y},set:function(E){C!==E&&(C=E,r[M]=E,s[M]=E,o.dispatchEvent({type:M+"-changed",value:E}),o.dispatchEvent($u))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new S,c=new S,h=new ue,u=new ue,d=new S,f=new ue,m=new S,_=new S,g=new S,p=0,v=new S;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",v),this._offset=new S,this._startNorm=new S,this._endNorm=new S,this._cameraScale=new S,this._parentPosition=new S,this._parentQuaternion=new ue,this._parentQuaternionInv=new ue,this._parentScale=new S,this._worldScaleStart=new S,this._worldQuaternionInv=new ue,this._worldScale=new S,this._positionStart=new S,this._quaternionStart=new ue,this._scaleStart=new S,this._getPointer=vb.bind(this),this._onPointerDown=bb.bind(this),this._onPointerHover=Mb.bind(this),this._onPointerMove=Sb.bind(this),this._onPointerUp=wb.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Os.setFromCamera(t,this.camera);let e=Qu(this._gizmo.picker[this.mode],Os);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Os.setFromCamera(t,this.camera);let e=Qu(this._plane,Os,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,zm.mode=this.mode,this.dispatchEvent(zm)}}pointerMove(t){let e=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Os.setFromCamera(t,this.camera);let o=Qu(this._plane,Os,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ne.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ns.set(a,a,a)}else gn.copy(this.pointStart),ns.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),ns.applyQuaternion(this._worldQuaternionInv),ns.divide(gn),e.search("X")===-1&&(ns.x=1),e.search("Y")===-1&&(ns.y=1),e.search("Z")===-1&&(ns.z=1);s.scale.copy(this._scaleStart).multiply(ns),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Bm[e]),gn.copy(Bm[e]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ne.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ne.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent($u),this.dispatchEvent(Vm)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(km.mode=this.mode,this.dispatchEvent(km)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent($u),this.dispatchEvent(Vm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Os}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function vb(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function Mb(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function bb(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function Sb(n){this.enabled&&this.pointerMove(this._getPointer(n))}function wb(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Qu(n,t,e){let i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}var $c=new qe,Te=new S(0,1,0),Gm=new S(0,0,0),Hm=new ae,Qc=new ue,eh=new ue,yi=new S,Wm=new ae,ga=new S(1,0,0),Bs=new S(0,1,0),xa=new S(0,0,1),th=new S,pa=new S,ma=new S,td=class extends Ce{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},ed=class extends Ce{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new We({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new pi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let u=t.clone();u.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25;let f=t.clone();f.color.setHex(16776960);let m=t.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let _=new fe(0,.04,.1,12);_.translate(0,.05,0);let g=new qt(.08,.08,.08);g.translate(0,.04,0);let p=new se;p.setAttribute("position",new Ot([0,0,0,1,0,0],3));let v=new fe(.0075,.0075,.5,3);v.translate(0,.25,0);function M(G,H){let tt=new Mn(G,.0075,3,64,H*Math.PI*2);return tt.rotateY(Math.PI/2),tt.rotateX(Math.PI/2),tt}function y(){let G=new se;return G.setAttribute("position",new Ot([0,0,0,1,1,1],3)),G}let C={X:[[new ht(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ht(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ht(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ht(_,o),[0,.5,0]],[new ht(_,o),[0,-.5,0],[Math.PI,0,0]],[new ht(v,o)]],Z:[[new ht(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ht(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ht(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ht(new Wn(.1,0),u),[0,0,0]]],XY:[[new ht(new qt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ht(new qt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new ht(new fe(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new fe(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new fe(.2,0,.6,4),i),[0,.3,0]],[new ht(new fe(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new fe(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ht(new fe(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ht(new Wn(.2,0),i)]],XY:[[new ht(new qt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ht(new qt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new ht(new Wn(.01,2),s),null,null,null,"helper"]],END:[[new ht(new Wn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Tn(y(),s),null,null,null,"helper"]],X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new ht(M(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new ht(M(.5,.5),r)]],Y:[[new ht(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ht(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ht(M(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new ht(new On(.25,10,8),i)]],X:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ht(new Mn(.75,.1,2,24),i)]]},I={X:[[new ht(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new ht(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ht(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ht(g,o),[0,.5,0]],[new ht(v,o)],[new ht(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ht(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ht(v,a),[0,0,0],[Math.PI/2,0,0]],[new ht(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ht(new qt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ht(new qt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qt(.1,.1,.1),u)]]},F={X:[[new ht(new fe(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new fe(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new fe(.2,0,.6,4),i),[0,.3,0]],[new ht(new fe(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new fe(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ht(new fe(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ht(new qt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ht(new qt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qt(.2,.2,.2),i),[0,0,0]]]},V={X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(G){let H=new Ce;for(let tt in G)for(let X=G[tt].length;X--;){let it=G[tt][X][0].clone(),mt=G[tt][X][1],$=G[tt][X][2],U=G[tt][X][3],q=G[tt][X][4];it.name=tt,it.tag=q,mt&&it.position.set(mt[0],mt[1],mt[2]),$&&it.rotation.set($[0],$[1],$[2]),U&&it.scale.set(U[0],U[1],U[2]),it.updateMatrix();let dt=it.geometry.clone();dt.applyMatrix4(it.matrix),it.geometry=dt,it.renderOrder=1/0,it.position.set(0,0,0),it.rotation.set(0,0,0),it.scale.set(1,1,1),H.add(it)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(C)),this.add(this.gizmo.rotate=W(L)),this.add(this.gizmo.scale=W(I)),this.add(this.picker.translate=W(E)),this.add(this.picker.rotate=W(b)),this.add(this.picker.scale=W(F)),this.add(this.helper.translate=W(P)),this.add(this.helper.rotate=W(w)),this.add(this.helper.scale=W(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:eh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ne.setFromEuler($c.set(0,0,0)),o.quaternion.copy(i).multiply(Ne),Math.abs(Te.copy(ga).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ne.setFromEuler($c.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Ne),Math.abs(Te.copy(Bs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ne.setFromEuler($c.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Ne),Math.abs(Te.copy(xa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ne.setFromEuler($c.set(0,Math.PI/2,0)),Te.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Hm.lookAt(Gm,Te,Bs)),o.quaternion.multiply(Ne),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Te.copy(ga).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Te.copy(Bs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Te.copy(xa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Te.copy(xa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Te.copy(ga).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Te.copy(Bs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Qc.copy(i),Te.copy(this.eye).applyQuaternion(Ne.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Hm.lookAt(this.eye,Gm,Bs)),o.name==="X"&&(Ne.setFromAxisAngle(ga,Math.atan2(-Te.y,Te.z)),Ne.multiplyQuaternions(Qc,Ne),o.quaternion.copy(Ne)),o.name==="Y"&&(Ne.setFromAxisAngle(Bs,Math.atan2(Te.x,Te.z)),Ne.multiplyQuaternions(Qc,Ne),o.quaternion.copy(Ne)),o.name==="Z"&&(Ne.setFromAxisAngle(xa,Math.atan2(Te.y,Te.x)),Ne.multiplyQuaternions(Qc,Ne),o.quaternion.copy(Ne))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},nd=class extends ht{constructor(){super(new fn(1e5,1e5,2,2),new We({visible:!1,wireframe:!0,side:Ye,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),th.copy(ga).applyQuaternion(e==="local"?this.worldQuaternion:eh),pa.copy(Bs).applyQuaternion(e==="local"?this.worldQuaternion:eh),ma.copy(xa).applyQuaternion(e==="local"?this.worldQuaternion:eh),Te.copy(pa),this.mode){case"translate":case"scale":switch(this.axis){case"X":Te.copy(this.eye).cross(th),yi.copy(th).cross(Te);break;case"Y":Te.copy(this.eye).cross(pa),yi.copy(pa).cross(Te);break;case"Z":Te.copy(this.eye).cross(ma),yi.copy(ma).cross(Te);break;case"XY":yi.copy(ma);break;case"YZ":yi.copy(th);break;case"XZ":Te.copy(ma),yi.copy(pa);break;case"XYZ":case"E":yi.set(0,0,0);break}break;case"rotate":default:yi.set(0,0,0)}yi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Wm.lookAt(gn.set(0,0,0),yi,Te),this.quaternion.setFromRotationMatrix(Wm)),super.updateMatrixWorld(t)}};function Xm(n,t,e=!1){if(e)return{x:n.x,y:n.y,z:n.z};let i=new S((t.w-n.w)/2,n.terrain?0:(t.h-n.h)/2,(t.d-n.d)/2);return i.applyEuler(new qe(Vt.degToRad(n.pitch),Vt.degToRad(n.yaw),Vt.degToRad(n.roll??0),"YXZ")),{x:n.x+i.x,y:n.y+i.y,z:n.z+i.z}}var qm={type:"change"},sd={type:"start"},Zm={type:"end"},ih=new Xi,Ym=new un,Tb=Math.cos(70*Vt.DEG2RAD),Ke=new S,Rn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6,sh=class extends Es{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new ue,this._lastTargetPosition=new S,this._quat=new ue().setFromUnitVectors(t.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ar,this._sphericalDelta=new Ar,this._scale=1,this._panOffset=new S,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new S,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ab.bind(this),this._onPointerDown=Eb.bind(this),this._onPointerUp=Cb.bind(this),this._onContextMenu=Nb.bind(this),this._onMouseWheel=Ib.bind(this),this._onKeyDown=Lb.bind(this),this._onTouchStart=Db.bind(this),this._onTouchMove=Ub.bind(this),this._onMouseDown=Rb.bind(this),this._onMouseMove=Pb.bind(this),this._interceptControlDown=Fb.bind(this),this._interceptControlUp=Ob.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qm),this.update(),this.state=Se.NONE}update(t=null){let e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ke.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new S(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ih.origin.copy(this.object.position),ih.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ih.direction))<Tb?this.object.lookAt(this.target):(Ym.setFromNormalAndCoplanarPoint(this.object.up,this.target),ih.intersectPlane(Ym,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(qm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Eb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ab(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zm),this.state=Se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Rb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Se.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(sd)}function Pb(n){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ib(n){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(n.preventDefault(),this.dispatchEvent(sd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zm))}function Lb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Db(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Se.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Se.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(sd)}function Ub(n){switch(this._trackPointer(n),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Se.NONE}}function Nb(n){this.enabled!==!1&&n.preventDefault()}function Fb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ob(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var jm=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],rd=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],_a={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Bb=8e6,ya=512,vi=1024,zs=512,He=(n,t,e,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(t,Math.min(e,n)):i,Jm=(n,t,e)=>typeof n=="string"&&n.trim()?n.trim().slice(0,t):e;function on(n){if(typeof n=="string"){if(n.length>Bb)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>ya)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+ya+" pi\xE8ces.");let t=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:Jm(n.name,56,"Ma map"),worldSize:He(n.worldSize,24,2048,240),spawn:{x:He(t.x,-vi,vi,0),y:He(t.y,-256,256,.06),z:He(t.z,-vi,vi,3),yaw:He(t.yaw,-360,360,0)},pieces:n.pieces.map((e,i)=>{if(!e||typeof e!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=e.terrain&&typeof e.terrain=="object"?Xr(e.terrain):null,r=e.model?da({version:1,models:[e.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Jm(e.name,36,"Pi\xE8ce "+(i+1)),x:He(e.x,-vi,vi,0),y:He(e.y,-256,256,0),z:He(e.z,-vi,vi,0),w:He(e.w,.05,zs,3),h:He(e.h,.05,256,.5),d:He(e.d,.05,zs,3),pitch:s?0:He(e.pitch,-180,180,0),yaw:s?0:He(e.yaw,-360,360,0),roll:s?0:He(e.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(e.primitive)?e.primitive:"box",uvScale:He(e.uvScale,.05,100,1),uvOffsetX:He(e.uvOffsetX,-100,100,0),uvOffsetY:He(e.uvOffsetY,-100,100,0),uvRotation:He(e.uvRotation,-360,360,0),material:Math.round(He(e.material,0,16,0)),color:typeof e.color=="string"&&/^#[a-f0-9]{6}$/i.test(e.color)?e.color:"#ffffff",grip:He(e.grip,0,1.5,.8),gravity:He(e.gravity,.05,2.5,1),bounce:He(e.bounce,0,1.65,1),solid:e.solid!==!1,texture:typeof e.texture=="string"&&e.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(e.texture)?e.texture:null}})}}function Km(n){return on({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...jp,yaw:0},pieces:n.filter(t=>t.half&&t.mesh?.isObject3D).map(t=>({name:t.name,x:t.position.x,y:t.position.y,z:t.position.z,w:t.half.x*2,h:t.half.y*2,d:t.half.z*2,pitch:t.mesh.rotation.x*180/Math.PI,material:t.type,grip:t.friction,gravity:t.gravity}))})}function $m(){let n=(t,e,i,s,r,o,a,l,c={})=>({name:t,x:e,y:i,z:s,w:r,h:o,d:a,material:l,...c});return on({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,_a.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,_a.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,_a.rubber)]})}function is(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Qm(n,t,e,i=.25){if(!n||!t||!Number.isFinite(i)||i<=0)return null;let s=t,r=new qe(-e.pitch*Math.PI/180,-e.yaw*Math.PI/180,-(e.roll??0)*Math.PI/180,"ZXY"),o=new S(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*e.w+Math.abs(o.y)*e.h+Math.abs(o.z)*e.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>vi||Math.abs(u)>vi||h<-256||h>256?null:{...e,x:c,y:h,z:u}}var tg="gorilla-lab-custom-map-v1";function eg(n){let t=new Blob([JSON.stringify(on(n),null,2)],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(e),1200)}var Y=n=>document.getElementById(n),ag=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],lg=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],ch=[...document.querySelectorAll(".tool")],cg="gorilla-lab-editor-draft",zb=gm(localStorage),Mi=zb.models.filter(n=>n.parts.length);Y("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Mi.map(n=>new Option(n.name+(n.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),n.id)));var hh=new URLSearchParams(location.search).get("model");Mi.some(n=>n.id===hh)?Y("model-library").value=hh:Mi.length===1&&(Y("model-library").value=Mi[0].id);Y("place-model").disabled=!Mi.length;function Ma(){return Mi.find(n=>n.id===Y("model-library").value)}function kb(){let n=Ma();if(!n)return null;let t=Mm(n);return is({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,t.y/2),z:0,w:Vt.clamp(t.x,.2,64),h:Vt.clamp(t.y,.12,36),d:Vt.clamp(t.z,.2,64),color:"#ffffff",solid:n.properties.collidable!==!1})}Y("model-library").addEventListener("change",()=>{ie==="model"&&ls(null)});var od={block:is(),ramp:is({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:is({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Xr({amplitude:.7,grass:.34})}),wall:is({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},fd={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"Clique sur une surface pour placer le d\xE9part du joueur.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},Tt,De=-1,ie="move",de=null,xn=null,ss=[],an=Y("preview"),re=Y("plan"),te=re.getContext("2d");function Vb(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[t,e,i,s]=n[Y("shape-preset").value]??n.slab;return is({name:t,w:e,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(Y("shape-preset").value)?Y("shape-preset").value:"box"})}var Gb=Y("editor-views");function Ea(){Gb.dataset.layout=Y("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",Y("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",Y("sidebar-width").value+"px"),requestAnimationFrame(()=>{_d(),yd()})}for(let n of["layout-mode","view-split","sidebar-width"])Y(n).addEventListener("input",Ea);Y("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Ea()};Y("workspace-fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.querySelector("main").requestFullscreen?.()};Y("focus-3d").onclick=()=>{Y("layout-mode").value="only-3d",Ea()};Y("focus-plan").onclick=()=>{Y("layout-mode").value="only-plan",Ea()};var Hb=[["","G\xE9om\xE9trie simple (d\xE9faut)"],...Mi.map(n=>[n.id,n.name])];for(let n of["terrain-grassModel","terrain-shrubModel"])Y(n).replaceChildren(...Hb.map(([t,e])=>new Option(e,t)));function Wb(){let n=document.querySelector("main"),t=n.querySelector("aside.panel");t.id="scene-sidebar";let e=(U,q,dt)=>{let gt=document.createElement(U);return q&&(gt.className=q),dt!==void 0&&(gt.textContent=dt),gt},i=e("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let U of ch){let q=U.dataset.tool,dt=U.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[q]){let gt=e("div","rail-divider");gt.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[q]],i.append(gt)}U.classList.add("rail-tool"),U.title=dt+" \xB7 "+(fd[q]??""),U.setAttribute("aria-label",dt),U.replaceChildren(e("span","rail-glyph",s[q]??"\u25A1"),e("span","rail-caption",dt==="Redimensionner"?"\xC9chelle":dt==="S\xE9lectionner"?"S\xE9lect.":dt==="D\xE9placer"?"D\xE9placer":dt==="Atelier"?"Mod\xE8le":dt)),i.append(U)}let o=e("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=e("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=Y("shape-preset").closest("label"),h=Y("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');o.append(c,h);let d=e("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d),u&&o.append(u);let f=e("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(f);let m=e("p","model-count-hint","");o.append(m),n.append(o);let _=document.querySelector(".command-bar .command-row");l.remove(),_.querySelector(".actions").classList.add("viewport-actions");let p=Y("layout-mode").closest("label");p.classList.add("viewport-layout"),_.prepend(p);let v=e("span","active-selection","Aucune s\xE9lection");v.id="active-selection",p.after(v);let M=e("details","precision-menu");M.id="precision-menu",M.append(e("summary","","Accrochage \u25BE"));let y=e("div","precision-options"),C=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let U of C){let q=Y(U);q&&y.append(q.closest("label"))}M.append(y),_.append(M);let E=U=>{if(U==="close"){o.hidden=!0;return}let q=U==="model";o.hidden=!1,o.dataset.mode=U,a.textContent=q?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!q,c.hidden=q,d.hidden=!q,u&&(u.hidden=!q),f.textContent=q?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",m.hidden=!q,m.textContent=q?Mi.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let dt=Ma();d.disabled=!dt,d.textContent=dt?"\u2B21 Placer \xAB "+dt.name+" \xBB":"Aucun mod\xE8le \xE0 placer",Y(q?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{Ma()&&(as("model"),E("close"),an.focus({preventScroll:!0}),xe("Clique dans la sc\xE8ne pour placer \xAB "+Ma().name+" \xBB."))},Y("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&E("model")});for(let U of["model","preset"])ch.find(dt=>dt.dataset.tool===U)?.addEventListener("click",()=>E(U));window.addEventListener("pointerdown",U=>{!o.hidden&&!o.contains(U.target)&&!U.target.closest(".rail-tool")&&E("close")}),window.addEventListener("keydown",U=>{U.key==="Escape"&&E("close")});let P=e("section","outliner");P.id="scene-outline";let L=e("header","side-section-head");L.append(e("strong","","Hi\xE9rarchie de la sc\xE8ne")),L.append(e("span","outline-meta","Objets")),P.append(L);let w=t.querySelector("#pieces").closest(".inspector-section");w.id="outline-content",P.append(w);let b=e("section","property-pane"),I=e("nav","inspector-tabs");I.setAttribute("aria-label","Propri\xE9t\xE9s");let F=[["object","Objet"],["terrain","Terrain"],["material","Mat\xE9riaux"],["scene","Sc\xE8ne"]];for(let[U,q]of F){let dt=e("button","inspector-tab",q);dt.type="button",dt.dataset.tab=U,dt.setAttribute("aria-pressed",String(U==="object")),I.append(dt)}let V=e("div","property-content");V.id="property-content";let W=Y("piece-inspector").closest(".inspector-section");W.id="object-section";let G=Y("surface").closest("details");G.id="surface-controls",V.append(W);let H=e("section","scene-options");H.id="scene-options",H.append(e("h2","","Param\xE8tres de carte"));let tt=Y("map-name").closest("label"),X=Y("map-world-size").closest(".fields"),it=Y("draft-status");H.append(tt,X,it);let mt=[...t.children].filter(U=>U.tagName==="DETAILS");for(let U of mt)H.append(U);V.append(H),b.append(I,V),t.replaceChildren(P,b);let $=U=>{let q=Tt?.pieces?.[De];U==="terrain"&&!q?.terrain&&(U="object"),U==="material"&&!q&&(U="object"),t.dataset.tab=U;for(let dt of I.querySelectorAll("button"))dt.setAttribute("aria-pressed",String(dt.dataset.tab===U)),dt.disabled=dt.dataset.tab==="terrain"&&!q?.terrain;U==="terrain"&&(Y("terrain-controls").open=!0),U==="material"&&(G.open=!0),V.scrollTop=0};for(let U of I.querySelectorAll("button"))U.addEventListener("click",()=>$(U.dataset.tab));window.setInspectorTab=$,$("object")}Wb();var Me={scale:10,cx:0,cz:-6,width:30,height:40},Aa=new Lc({canvas:an,antialias:!0});Aa.setPixelRatio(Math.min(devicePixelRatio,1.5));var Ve=new hn(52,1,.1,640);Ve.position.set(16,15,19);var Ie=new sh(Ve,an);Ie.target.set(0,0,-5);Ie.mouseButtons.LEFT=null;Ie.mouseButtons.RIGHT=Xn.ROTATE;Ie.mouseButtons.MIDDLE=Xn.PAN;Ie.maxDistance=580;Ie.maxPolarAngle=Math.PI/2-.035;var _n=new xr;_n.background=new kt("#8fb6c6");var hg=new Ss("#f0f5ff","#8e775c",2.6);_n.add(hg);var pd=new ws("#fff1d2",1.8);pd.position.set(-9,18,6);_n.add(pd);var os=new xr;os.fog=new Eo("#a6d4ea",55,135);var to=em(os,Aa),ug=()=>Km(to.boxes);Tt=ug();nm(os,to.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"});var Xb=cm();lm((n,t)=>{let{geo:e,material:i}=Xb[n],s=new ht(e,i);e.computeBoundingBox(),s.position.set(t.x,-e.boundingBox.min.y,t.z),os.add(s)});var dg=new ht(new qt(1.8,2.03,.1),new en({color:"#8daebc",metalness:.9,roughness:.12}));dg.position.set(Fc.x,Fc.y,Fc.z);os.add(dg);var qb=to.boxes.filter(n=>n.half&&n.mesh?.isObject3D);qb.forEach(n=>n.mesh.removeFromParent());var md=new Qe;md.add(...os.children);_n.add(md);var cd=to.boxes.find(n=>n.heightfield).mesh;to.visual(7,0,7,!0,!0,!0,512,!1);var $r=new Jo(60,60,"#d7e2e5","#5e7b8a");$r.material.transparent=!0;$r.material.opacity=.35;_n.add($r);var Le=new Qe;_n.add(Le);var ge=new nh(Ve,an);ge.setSize(.9);ge.setRotationSnap(Vt.degToRad(5));ge.enabled=!1;_n.add(ge.getHelper());var gd=new Set(["translate","rotate","scale"]),qr=null,Pn=null,xd=!1,Yr=null,va=!1,fg=()=>Number(Y("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let t=localStorage.getItem("gorilla-lab-"+n);[...Y(n).options].some(e=>e.value===t)&&(Y(n).value=t)}catch{}Y(n).onchange=()=>{Pn=null;try{localStorage.setItem("gorilla-lab-"+n,Y(n).value)}catch{}}}var ks=new Map;try{Y("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}Y("magnet").onchange=()=>{Pn=null,ks.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",Y("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,t=>{xd=t.altKey});window.addEventListener("blur",()=>{xd=!1,Pn=null});function pg(n,t,e,i){let s={...t};if(!i)for(let m of e)s[m]=Math.round(t[m]/wa())*wa();if(i||!Y("magnet").checked||!n.solid||n.terrain)return Pn=null,s;let r=fg(),o=Y("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let _=new qe(...[m.pitch,m.yaw,m.roll??0].map(Vt.degToRad),"YXZ"),g=new ae().makeRotationFromEuler(_).elements;return Object.fromEntries(["x","y","z"].map((p,v)=>[p,(Math.abs(g[v])*m.w+Math.abs(g[4+v])*m.h+Math.abs(g[8+v])*m.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let m of Tt.pieces){if(m===n)continue;let _=l(m);if(_)for(let g of e){let p=Object.keys(a).filter(y=>y!==g),v=y=>Math.abs(s[y]-m[y])<c[y]+_[y]-.001,M=p.flatMap(y=>e.includes(y)&&v(p.find(C=>C!==y))?[-1,1].flatMap(C=>[-1,1].map(E=>{let P=m[y]+C*_[y]-E*c[y];return{key:y,value:P,distance:Math.abs(t[y]-P)}})):[]).sort((y,C)=>y.distance-C.distance)[0];if(!(o?!M||M.distance>r*1.8:!p.every(v)))for(let y of[-1,1]){let C=m[g]+y*(c[g]+_[g]),E=Tt.pieces.indexOf(m)+":"+g+":"+y;h.push({key:E,axis:g,value:C,edge:o?M:null,distance:Math.max(Math.abs(C-t[g]),o?M.distance:0)})}}}let u=h.find(m=>m.key===Pn),d=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Pn&&(ks.set(Pn,(ks.get(Pn)??0)+1),Pn=null);let f=h.filter(m=>m.distance<=r&&(ks.get(m.key)??0)<3).sort((m,_)=>m.distance-_.distance)[0];if(f)d(f),Pn=f.key;else for(let m of h)m.distance<=r&&(ks.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=t[m.axis]);return s}var ah=new qt(1,1,1),Yb=new Ii,fh=new ht(new Ri(.32,.75,5),new We({color:"#ffcd63"}));_n.add(fh);var Zr=new ht(ah,new We({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Jr=new ht(new On(.055,10,8),new We({color:"#ffc85a",depthTest:!1}));Jr.visible=!1;Jr.renderOrder=20;_n.add(Jr);var ba=new ht(fh.geometry,new We({color:"#ffe084",opacity:.65,transparent:!0,depthWrite:!1}));Zr.visible=ba.visible=!1;_n.add(Zr,ba);var rs=new Ts,ph=new S(0,1,0),ng=new un(ph,0),Zb=new Kt,oi=null,ad=!1;function nn(){ad||(ad=!0,requestAnimationFrame(()=>{ad=!1,Aa.render(_n,Ve),Cg()}))}function _d(){let n=an.clientWidth||1,t=an.clientHeight||1;Aa.setSize(n,t,!1),Ve.aspect=n/t,Ve.updateProjectionMatrix(),nn()}function yd(){let n=Math.max(1,re.clientWidth),t=Math.max(1,re.clientHeight);n===re.width&&t===re.height||(re.width=n,re.height=t,vd(),ai())}new ResizeObserver(_d).observe(an);new ResizeObserver(yd).observe(re);Ie.addEventListener("change",nn);Ie.addEventListener("start",()=>ls(null));function vd(){Me.scale=Math.min(re.width/Me.width,re.height/Me.height)}function uh(n,t){return[re.width/2+(n-Me.cx)*Me.scale,re.height/2+(t-Me.cz)*Me.scale]}function hd(n){let t=re.getBoundingClientRect();return{x:((n.clientX-t.left)*re.width/t.width-re.width/2)/Me.scale+Me.cx,z:((n.clientY-t.top)*re.height/t.height-re.height/2)/Me.scale+Me.cz}}function ig(n,t,e,i,s){let[r,o]=uh(n.x,n.z),a=Vt.degToRad(n.pitch),l=Vt.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);te.save(),te.translate(r,o),te.rotate(-Vt.degToRad(n.yaw));let u=c*Me.scale,d=h*Me.scale;te.globalAlpha=s,te.fillStyle=t,te.fillRect(-u/2,-d/2,u,d),te.globalAlpha=1,te.strokeStyle=e,te.lineWidth=i,te.strokeRect(-u/2,-d/2,u,d),te.restore()}function sg(n,t){let[e,i]=uh(n.x,n.z);te.save(),te.translate(e,i),te.rotate(Vt.degToRad(-n.yaw)),te.fillStyle=t?"#fff0bb":"#ffd16e",te.strokeStyle="#263740",te.lineWidth=1.5,te.beginPath(),te.moveTo(0,-8),te.lineTo(6,5),te.lineTo(0,3),te.lineTo(-6,5),te.closePath(),te.fill(),te.stroke(),te.restore()}function ai(){te.fillStyle="#192e3a",te.fillRect(0,0,re.width,re.height),te.strokeStyle="#37505f",te.lineWidth=1;let n=Me.scale<1?25:Me.scale<4?10:Me.scale<12?5:1,t=(Tt.worldSize??240)/2;for(let r=-Math.ceil(t/n)*n;r<=t;r+=n){let[o,a]=uh(r,r);o>=0&&o<=re.width&&(te.beginPath(),te.moveTo(o,0),te.lineTo(o,re.height),te.stroke()),a>=0&&a<=re.height&&(te.beginPath(),te.moveTo(0,a),te.lineTo(re.width,a),te.stroke())}let[e,i]=uh(-t,-t);te.strokeStyle="#ffda9077",te.lineWidth=2,te.strokeRect(e,i,t*2*Me.scale,t*2*Me.scale);let s=Tt.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?rd[r.material]:r.color);ig(r,a,o===De?"#ffe095":"#a4bac7",o===De?2:1,r.solid?.86:.38)}sg(Tt.spawn,!1),xn&&(ie==="spawn"?sg(xn,!0):ig(xn,"#8ee7fc","#afefff",2,.45))}function dh(n,t){n.position.set(t.x,t.y,t.z),t.terrain&&n!==Zr?n.scale.setScalar(1):n.scale.set(t.w,t.h,t.d),n.rotation.set(Vt.degToRad(t.pitch),Vt.degToRad(t.yaw),Vt.degToRad(t.roll??0),"YXZ"),n.updateMatrixWorld()}function mg(){oi&&(_n.remove(oi),oi.geometry.dispose(),oi.material.dispose());let n=Le.children[De];oi=n?new Cr(n,"#ffdf88"):null,oi&&_n.add(oi),ud()}function ud(){let n=Le.children[De],t=ce()?.terrain,e=gd.has(ie)&&!!n&&!(t&&ie==="rotate");if(ge.enabled=e,!e){ge.detach(),t&&ie==="rotate"&&(Y("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}ge.setMode(ie),ge.setSpace(ie==="translate"?"world":"local"),ge.setTranslationSnap(null),ge.showX=ge.showZ=!0,ge.showY=!(t&&ie==="scale"),ge.attach(n),Y("tool-help").textContent=fd[ie]}var jr=!1;function gg(){if(ie!=="scale")return;let n=ce(),t=qr?.map.pieces[De],e=ge.object;if(!n||!t||!e)return;let i=Xm(t,n,jr),s=(Tt.worldSize??240)/2;n.x=Vt.clamp(i.x,-s,s),n.y=Vt.clamp(i.y,-256,256),n.z=Vt.clamp(i.z,-s,s),e.position.set(n.x,n.y,n.z),oi?.update();for(let r of["x","y","z"])Y("p-"+r).value=n[r].toFixed(2);ai(),nn()}function xg(n){let t=jr;jr=n.ctrlKey,t!==jr&&ge.dragging&&gg()}for(let n of["keydown","keyup"])window.addEventListener(n,xg);an.addEventListener("pointermove",xg,{capture:!0});ge.addEventListener("change",nn);ge.addEventListener("mouseDown",()=>{let n=ce();Pn=null,n&&(qr={map:structuredClone(Tt),selected:De}),jr=!!(jr||window.event?.ctrlKey)});ge.addEventListener("objectChange",()=>{let n=ce(),t=ge.object,e=qr?.map.pieces[De];if(!n||!t||!e)return;let i=Vt.clamp;if(ie==="translate"){let s=["x","y","z"].filter(a=>(ge.axis??"XYZ").includes(a.toUpperCase())),r=pg(n,{x:t.position.x,y:t.position.y,z:t.position.z},s,xd),o=(Tt.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),t.position.set(n.x,n.y,n.z)}else ie==="rotate"?(n.pitch=Vt.radToDeg(t.rotation.x),n.yaw=Vt.radToDeg(t.rotation.y),n.roll=Vt.radToDeg(t.rotation.z)):(n.w=i(t.scale.x*(n.terrain?e.w:1),.05,zs),n.d=i(t.scale.z*(n.terrain?e.d:1),.05,zs),n.terrain||(n.h=i(t.scale.y,.05,256)),t.scale.set(n.terrain?n.w/e.w:n.w,n.terrain?1:n.h,n.terrain?n.d/e.d:n.d),gg());t.updateMatrixWorld(!0),oi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])Y("p-"+s).value=Number(n[s]??0).toFixed(2);ai(),nn()});ge.addEventListener("dragging-changed",({value:n})=>{if(Ie.enabled=!n,n||!qr)return;let t=qr;qr=null,JSON.stringify(t.map.pieces[De])!==JSON.stringify(ce())&&(ss.length>=35&&ss.shift(),ss.push(t),Tt=on(Tt),Ee(),xe("Transformation appliqu\xE9e."))});an.addEventListener("pointerup",()=>{ge.dragging||(Ie.enabled=!0)});an.addEventListener("pointercancel",()=>{ge.dragging&&ge.pointerUp(null),Ie.enabled=!0});function Jb(){ge.detach();for(let n of[...Le.children])Le.remove(n),n.geometry!==ah&&n.geometry.dispose(),n.userData.vegetation&&Im(n.userData.vegetation),n.userData.ownsTexture&&n.material.map?.dispose(),Zc(n.material);md.visible=!!Tt.arenaBase,pd.visible=hg.visible=!Tt.arenaBase,_n.fog=Tt.arenaBase?os.fog:null,_n.environment=Tt.arenaBase?os.environment:null;for(let n of Tt.pieces){if(n.model){let r=new ht(Jc(n.model),Yc(n.model));r.castShadow=r.receiveShadow=!0,Le.add(r),dh(r,n);continue}let t=[10,11,12].includes(n.material),e=new pn({color:new kt(rd[n.material]).multiply(new kt(n.color)),transparent:!n.solid||t,opacity:n.solid?t?.55:1:.4});if(Tt.arenaBase&&!n.texture){let r=to.mapMaterial(n.material,7);e.color.set(n.color),e.map=r.map,e.opacity=n.solid?r.opacity:.4,e.transparent=!n.solid||r.transparent}n.texture&&(e.map=Yb.load(n.texture,nn),e.map.colorSpace=me,e.map.wrapS=e.map.wrapT=Gn,e.color.set(n.color));let i=n.terrain?Zu(n):n.primitive&&n.primitive!=="box"?Wp(n.primitive):n.texture||Tt.arenaBase?Uc(n.w,n.h,n.d).scale(1/n.w,1/n.h,1/n.d):ah;i!==ah&&Hp(i,n);let s=new ht(i,e);if(s.userData.ownsTexture=!!n.texture,n.terrain){let r=Pm(n);r&&(s.add(r),s.userData.vegetation=r)}Le.add(s),dh(s,n)}fh.position.set(Tt.spawn.x,Tt.spawn.y+.38,Tt.spawn.z),Rg(),mg()}function ce(){return Tt.pieces[De]}function xe(n){Y("editor-note").textContent=n}function Ue(){ss.length>=35&&ss.shift(),ss.push({map:structuredClone(Tt),selected:De}),Y("undo").disabled=!1}function _g(){try{localStorage.setItem(cg,JSON.stringify(Tt)),Y("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"}catch{Y("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."}}var rg=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function yg(){let n=rg(Y("piece-search").value.trim()),t=[];Tt.pieces.forEach((e,i)=>{rg(e.name).includes(n)&&t.push(new Option(e.name,i,!1,i===De))}),Y("pieces").replaceChildren(...t),Y("pieces").value=String(De),t.length||Y("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),t.length||(Y("pieces").options[0].disabled=!0),Y("count").textContent=n?t.length+" sur "+Tt.pieces.length:Tt.pieces.length+" / "+ya}function vg(){yg();let n=ce();Y("piece-inspector").hidden=!n,Y("selection-help").hidden=!!n,Y("focus-piece").disabled=!n,Y("selection-title").textContent=n?n.name:"Aucune pi\xE8ce s\xE9lectionn\xE9e";for(let e of ag){let i=Y("p-"+e);i.disabled=!n,e==="solid"?i.checked=n?.solid??!1:i.value=n?.[e]??(e==="color"?"#ffffff":"")}for(let e of["rotate","duplicate","texture-file","surface","spawn-here"])Y(e).disabled=!n;Y("delete").disabled=!n||Tt.pieces.length===1,Y("texture-clear").disabled=!n?.texture,Y("texture-paint").disabled=!n||!!n.model;let t=n?.terrain;Y("terrain-grassTexture-paint").disabled=!t;for(let e of lg){let i=Y("p-"+e);i.disabled=!n||!!n?.model,i.value=n?.[e]??(e==="uvScale"?1:0)}if(Y("uv-reset").disabled=!n||!!n?.model,Y("terrain-controls").hidden=!t,t){for(let e of Eg)Y("terrain-"+e).value=t[e];for(let e of["grass","shrub"]){let i=Y("terrain-"+e+"Model"),s=t[e+"Model"]?.id??"";s&&![...i.options].some(r=>r.value===s)&&i.add(new Option(t[e+"Model"].name+" (carte)",s)),i.value=s}Y("terrain-cell-size").textContent=(n.w/t.detail).toFixed(2)+" \xD7 "+(n.d/t.detail).toFixed(2)+" m",Y("p-pitch").disabled=Y("p-yaw").disabled=Y("p-roll").disabled=!0}Y("rotate").disabled=!n||!!t,Y("texture-create").disabled=!n,Y("surface").value="",Y("undo").disabled=ss.length===0,Y("active-selection").textContent=n?n.name:"Aucune s\xE9lection",document.querySelector("#scene-sidebar").dataset.tab==="terrain"&&!t&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="terrain"]').disabled=!t}function Ee(){Y("map-name").value=Tt.name,Y("map-world-size").value=Tt.worldSize??240,vg();for(let n of["x","y","z","yaw"])Y("spawn-"+n).value=Tt.spawn[n];Jb(),ai(),nn(),_g()}function Sa(n){De!==n&&(De=n,Pn=null,ks.clear(),vg(),mg(),ai(),nn())}function Mg(n){if(Tt.pieces.length>=ya)return xe("Limite de pi\xE8ces atteinte.");Ue(),Tt.pieces.push(n),De=Tt.pieces.length-1,Ee(),xe(n.name+" ajout\xE9 \xE0 la map.")}function Md(){if(!ce()||Tt.pieces.length===1)return;let n=ce().name;Ue(),Tt.pieces.splice(De,1),De=Math.min(De,Tt.pieces.length-1),Ee(),xe(n+" retir\xE9 de la map.")}function bd(){let n=ce();if(!n)return;let t=Vt.clamp(n.x+n.w+wa(),-120,120);Mg({...n,name:(n.name+" bis").slice(0,36),x:t})}function jb(){let n=ce();!n||n.terrain||(Ue(),n.yaw=(n.yaw+45)%360,Ee())}function bg(){let n=ss.pop();n&&(Tt=n.map,De=n.selected,ls(null),Ee(),xe("Derni\xE8re modification annul\xE9e."))}function as(n){ie=n,Ie.mouseButtons.LEFT=ie==="view"?Xn.ROTATE:null,ud(),nn();for(let t of ch)t.setAttribute("aria-pressed",String(t.dataset.tool===ie));for(let t of[an,re])t.dataset.tool=ie,t.removeAttribute("data-hit");Y("tool-help").textContent=fd[ie],ud(),nn(),ls(null)}function Vs(){let n=new Ze().setFromObject(Le);n.expandByPoint(fh.position);let t=n.getCenter(new S),e=n.getSize(new S);Me={cx:t.x,cz:t.z,width:Math.max(e.x+5,Math.min(Tt.worldSize??240,500)),height:Math.max(e.z+5,Math.min(Tt.worldSize??240,500))},vd();let i=Math.max(1,Math.ceil(Math.max(e.x,e.z)/40));$r.scale.setScalar(i),$r.position.set(Math.round(t.x/i)*i,-.035,Math.round(t.z/i)*i);let s=Ve.position.clone().sub(Ie.target).normalize(),r=new S().crossVectors(ph,s).normalize(),o=new S().crossVectors(s,r),a=Math.tan(Vt.degToRad(Ve.fov/2))*.87,l=a*Ve.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new S(h,u,d).sub(t),m=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,m+f.dot(s))}c=Math.min(c,Ie.maxDistance),Ie.target.copy(t),Ve.position.copy(t).addScaledVector(s,c),Ie.update(),Ve.updateMatrixWorld(),ai(),nn()}function Sd(n,t){Ue(),Tt=n,Pn=null,ks.clear(),De=-1,Y("piece-search").value="",as("move"),Ee(),Vs(),xe(t)}function wa(){return Number(Y("snap").value)}function rh(n){let t=wa(),e=(Tt.worldSize??240)/2;return Vt.clamp(Math.round(n/t)*t,-e,e)}function wd(n,t){if(n===re){let e=hd(t);rs.set(new S(e.x,80,e.z),new S(0,-1,0))}else{let e=an.getBoundingClientRect();Ve.updateMatrixWorld(),rs.setFromCamera({x:(t.clientX-e.left)/e.width*2-1,y:1-(t.clientY-e.top)/e.height*2},Ve)}}function dd(n){return ng.constant=-n,rs.ray.intersectPlane(ng,new S)}function Qr(n,t){return wd(n,t),rs.intersectObjects(Tt.arenaBase?[...Le.children,cd]:Le.children,!1)[0]}function Sg(n,t,e,i=null){rs.set(new S(n,80,t),new S(0,-1,0));let s=i?rs.intersectObject(i,!1)[0]:rs.intersectObjects(Tt.arenaBase?[...Le.children,cd]:Le.children,!1).find(r=>r.object===cd||Tt.pieces[Le.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:t,yaw:e}}function wg(n,t){Yr=null,va=!1;let e=Qr(n,t);if(ie==="spawn"){if(!e)return null;let h=rh(e.point.x),u=rh(e.point.z);return Sg(h,u,Tt.spawn.yaw)}if(ie==="terrain"){let h=e?.point??dd(0);return h?{...od.terrain,terrain:Xr(od.terrain.terrain),x:rh(h.x),y:h.y,z:rh(h.z)}:null}if(ie==="sculpt"||ie==="model"&&!Ma())return null;let i=e?.point??dd(0);if(!i)return null;let s=e?e.face.normal.clone().applyNormalMatrix(Zb.getNormalMatrix(e.object.matrixWorld)):ph,r=e&&Kb(e),o=fg();r&&r.distance<=o*2&&(Yr=r.point,va=Y("magnet").checked&&!t.altKey&&Y("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=va||t.altKey?1e-6:wa(),l=ie==="model"?kb():ie==="preset"?Vb():od[ie],c=Qm(va?Yr:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=Tt.worldSize/2?c:null}function Kb(n){let t=n.object,e=Tt.pieces[Le.children.indexOf(t)];if(!e||e.terrain)return null;let i=t.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=t.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:t.localToWorld(c)})}return o}function ls(n){if(!n&&!xn)return;xn=n;let t=Y("placement-measures");if(t.hidden=!xn||ie==="spawn",!t.hidden){let e=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);t.textContent=[xn.w,xn.h,xn.d].map(e).join(" \xD7 ")+" m (L \xD7 H \xD7 P)"+(Yr?va?" \xB7 Milieu accroch\xE9":" \xB7 Rep\xE8re : milieu de l\u2019ar\xEAte":"")}Jr.visible=!!(xn&&Yr),Jr.visible&&Jr.position.copy(Yr),ba.visible=!!(xn&&ie==="spawn"),Zr.visible=!!(xn&&ie!=="spawn"),ba.visible&&ba.position.set(xn.x,xn.y+.38,xn.z),Zr.visible&&dh(Zr,xn),ai(),nn()}function $b(n,t){let e=wg(n,t);if(!e){xe(ie==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}ie==="spawn"?(Ue(),Tt.spawn=e,as("move"),Ee(),xe("Point de d\xE9part d\xE9plac\xE9.")):(ls(null),Mg(e))}function Qb(n,t){if(ie==="view"||t.button!==0||!t.isPrimary||de||ge.dragging)return;if(gd.has(ie)){if(n===an&&ge.enabled){let o=an.getBoundingClientRect();if(ge.pointerHover({x:(t.clientX-o.left)/o.width*2-1,y:1-(t.clientY-o.top)/o.height*2,button:0}),ge.axis){Ie.enabled=!1;return}}t.stopImmediatePropagation();let r=Qr(n,t);Sa(r?Le.children.indexOf(r.object):-1);return}t.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(t.pointerId);let e={canvas:n,id:t.pointerId,clientX:t.clientX,clientY:t.clientY,tool:ie};if(de=e,Pn=null,ie==="sculpt"){Ag(n,t);return}if(ie!=="move")return;let i=Qr(n,t);Sa(i?Le.children.indexOf(i.object):-1);let s=ce();!i||!s||(e.height=i.point.y,e.dx=i.point.x-s.x,e.dz=i.point.z-s.z)}function tS(n,t){if(ie==="view"||gd.has(ie))return;if(!de){ie==="move"?n.toggleAttribute("data-hit",!!Qr(n,t)):ls(wg(n,t));return}if(ie==="sculpt"&&de.id===t.pointerId&&de.canvas===n){Math.hypot(t.clientX-de.clientX,t.clientY-de.clientY)>=7&&(Ag(n,t),de.clientX=t.clientX,de.clientY=t.clientY);return}if(de.id!==t.pointerId||de.canvas!==n||de.height===void 0||!ce()||Math.hypot(t.clientX-de.clientX,t.clientY-de.clientY)<4&&!de.recorded)return;wd(n,t);let i=dd(de.height);if(!i)return;let s=ce(),r=pg(s,{x:i.x-de.dx,y:s.y,z:i.z-de.dz},["x","z"],t.altKey),o=(Tt.worldSize??240)/2,a=Vt.clamp(r.x,-o,o),l=Vt.clamp(r.z,-o,o);a===s.x&&l===s.z||(de.recorded||(Ue(),de.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,dh(Le.children[De],s),oi?.update(),Y("p-x").value=a,Y("p-z").value=l,ai(),nn())}function ld(n,t,e){if(!de||de.canvas!==n||de.id!==t.pointerId)return;let i=de;if(de=null,n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Ee(),xe("Relief modifi\xE9."));return}i.recorded&&(_g(),xe(ce().name+" d\xE9plac\xE9.")),e&&ie===i.tool&&ie!=="move"&&Math.hypot(t.clientX-i.clientX,t.clientY-i.clientY)<6&&$b(n,t)}var Zn=null,mh=!1,oh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(mh=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(mh=!1)});window.addEventListener("blur",()=>{Zn=null,mh=!1});re.addEventListener("pointerdown",n=>{n.button!==1&&!(mh&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Zn={id:n.pointerId,x:n.clientX,y:n.clientY},re.setPointerCapture(n.pointerId),re.style.cursor="grabbing")},{capture:!0});re.addEventListener("pointermove",n=>{!Zn||Zn.id!==n.pointerId||(n.stopImmediatePropagation(),Me.cx-=(n.clientX-Zn.x)/Me.scale,Me.cz-=(n.clientY-Zn.y)/Me.scale,Zn.x=n.clientX,Zn.y=n.clientY,ai())},{capture:!0});function Tg(n){!Zn||Zn.id!==n.pointerId||(Zn=null,re.style.cursor="",re.hasPointerCapture(n.pointerId)&&re.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}re.addEventListener("pointerup",Tg,{capture:!0});re.addEventListener("pointercancel",Tg,{capture:!0});function Td(n,t){let e=re.getBoundingClientRect(),i=t?.clientX??e.left+e.width/2,s=t?.clientY??e.top+e.height/2,r=hd({clientX:i,clientY:s}),o=Vt.clamp(Me.width/n,.75,4096),a=o/Me.width;Me.width=o,Me.height*=a,vd();let l=hd({clientX:i,clientY:s});Me.cx+=r.x-l.x,Me.cz+=r.z-l.z,ai()}re.addEventListener("wheel",n=>{n.preventDefault(),Td(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});Y("plan-zoom-in").onclick=()=>Td(1.25);Y("plan-zoom-out").onclick=()=>Td(.8);Y("plan-fit").onclick=Vs;var Kr=Y("context-actions");function Ta(){Kr.hidden=!0}for(let n of[an,re])n.addEventListener("pointerdown",t=>{t.button===2?oh={canvas:n,x:t.clientX,y:t.clientY}:Ta()}),n.addEventListener("contextmenu",t=>{if(t.preventDefault(),oh?.canvas!==n||Math.hypot(t.clientX-oh.x,t.clientY-oh.y)>6)return;let e=Qr(n,t),i=e?Le.children.indexOf(e.object):-1;if(i<0){Ta();return}Sa(i),Y("context-title").textContent=ce()?.name??"Pi\xE8ce",Kr.hidden=!1;let s=195,r=285;Kr.style.left=Math.max(4,Math.min(t.clientX,innerWidth-s-6))+"px",Kr.style.top=Math.max(4,Math.min(t.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Kr.contains(n.target)||Ta()});document.addEventListener("keydown",n=>{n.key==="Escape"&&Ta()});for(let n of Kr.querySelectorAll("[data-context-action]"))n.onclick=()=>{let t=n.dataset.contextAction;Ta(),t==="duplicate"?bd():t==="delete"?Md():t==="focus"?Y("focus-piece").click():as(t==="select"?"move":t)};for(let n of[an,re])n.addEventListener("pointerdown",t=>Qb(n,t),{capture:!0}),n.addEventListener("pointermove",t=>tS(n,t)),n.addEventListener("pointerup",t=>ld(n,t,!0)),n.addEventListener("pointercancel",t=>ld(n,t,!1)),n.addEventListener("lostpointercapture",t=>{n.hasPointerCapture(t.pointerId)||ld(n,t,!1)}),n.addEventListener("pointerleave",()=>{de||ls(null)});Y("p-material").append(...jm.map((n,t)=>new Option(n,t)));for(let n of lg)Y("p-"+n).addEventListener("change",t=>{let e=ce();!e||e.model||(Ue(),e[n]=Number(t.target.value),Tt=on(Tt),Ee())});Y("uv-reset").onclick=()=>{let n=ce();!n||n.model||(Ue(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),Tt=on(Tt),Ee())};for(let n of ag)Y("p-"+n).addEventListener("change",t=>{let e=ce();if(!e)return;Ue();let i=t.target;n==="solid"?e[n]=i.checked:e[n]=["name","color"].includes(n)?i.value:Number(i.value),Tt=on(Tt),Ee()});Y("map-world-size").onchange=n=>{Ue(),Tt.worldSize=Vt.clamp(Number(n.target.value)||240,24,2048),Tt=on(Tt),Ee(),Vs(),xe("Zone de construction : "+Tt.worldSize+" \xD7 "+Tt.worldSize+" m.")};Y("map-name").onchange=n=>{Ue(),Tt.name=n.target.value,Tt=on(Tt),Ee()};Y("piece-search").addEventListener("input",yg);Y("pieces").onchange=n=>{n.target.value!==""&&Sa(Number(n.target.value))};Y("focus-piece").onclick=()=>{let n=Le.children[De];if(!n)return;let t=new Ze().setFromObject(n).getBoundingSphere(new Hn),e=Ve.position.clone().sub(Ie.target).normalize(),i=Math.atan(Math.tan(Vt.degToRad(Ve.fov/2))*Math.min(Ve.aspect,1)),s=Math.max(1.5,t.radius/Math.sin(i)*1.15);Ie.target.copy(t.center),Ve.position.copy(t.center).addScaledVector(e,s),Ie.update(),nn()};for(let n of["x","y","z","yaw"])Y("spawn-"+n).onchange=t=>{Ue(),Tt.spawn[n]=Number(t.target.value),Tt=on(Tt),Ee()};Y("spawn-here").onclick=()=>{let n=ce();if(!n)return;let t=n.solid&&Sg(n.x,n.z,n.yaw,Le.children[De]);if(!t)return xe("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Ue(),Tt.spawn=t,Ee(),xe("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of ch)n.onclick=()=>as(n.dataset.tool);Y("duplicate").onclick=bd;Y("delete").onclick=Md;Y("rotate").onclick=jb;Y("undo").onclick=bg;Y("zoom-fit").onclick=Vs;Y("snap").onchange=()=>ls(null);Y("new-example").onclick=()=>Sd(ug(),"Ar\xE8ne de d\xE9part ouverte.");Y("blank-map").onclick=()=>{let n=Vt.clamp(Number(Y("map-world-size").value)||240,24,2048);Sd({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[is({name:"Sol",y:-.25,w:Math.min(n,zs),d:Math.min(n,zs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};Y("surface").onchange=n=>{let t=_a[n.target.value],e=ce();!t||!e||(Ue(),Object.assign(e,t),Ee())};Y("texture-file").onchange=async n=>{let t=n.target.files[0],e=ce();if(!(!t||!e))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!Tt.pieces.includes(e))return xe("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Ue(),e.texture=o,Ee(),xe("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){xe(i.message)}finally{n.target.value=""}};Y("texture-paint").onclick=()=>{let n=ce();if(!n||n.model)return xe("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Ku({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async t=>{if(!Tt.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Ue(),n.texture=t,Tt=on(Tt),Ee(),xe("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};Y("terrain-grassTexture-paint").onclick=()=>{let n=ce();n?.terrain&&Ku({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async t=>{if(!Tt.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Ue(),n.terrain.grassTexture=t,Tt=on(Tt),Ee(),xe("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};Y("texture-clear").onclick=()=>{ce()?.texture&&(Ue(),ce().texture=null,Ee())};Y("import-map").onchange=async n=>{let t=n.target.files[0];if(t)try{Sd(on(await t.text()),"Map charg\xE9e.")}catch(e){xe(e.message)}finally{n.target.value=""}};Y("export-map").onclick=()=>{try{eg(Tt),xe("Map JSON export\xE9e.")}catch(n){xe(n.message)}};Y("test-map").onclick=()=>{try{localStorage.setItem(tg,JSON.stringify(on(Tt))),location.href="./?custom=1"}catch{xe("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Eg=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","grass","shrub","grassSize","shrubSize"];for(let n of["grass","shrub"])Y("terrain-"+n+"Model").addEventListener("change",t=>{let e=ce();if(!e?.terrain)return;let i=Mi.find(s=>s.id===t.target.value)??(e.terrain[n+"Model"]?.id===t.target.value?e.terrain[n+"Model"]:null);Ue(),e.terrain[n+"Model"]=i?structuredClone(i):null,Tt=on(Tt),Ee(),xe("V\xE9g\xE9tation personnalis\xE9e mise \xE0 jour.")});Y("terrain-grassTexture-file").onchange=async n=>{let t=n.target.files?.[0],e=ce();if(n.target.value="",!(!t||!e?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!Tt.pieces.includes(e))return;Ue(),e.terrain.grassTexture=o,Ee(),xe("Texture d\u2019herbe import\xE9e.")}catch(i){xe(i.message)}};Y("terrain-grassTexture-clear").onclick=()=>{ce()?.terrain&&(Ue(),ce().terrain.grassTexture=null,Ee())};for(let n of Eg)Y("terrain-"+n).onchange=t=>{let e=ce();e?.terrain&&(Ue(),e.terrain=n==="detail"?Am(e.terrain,Number(t.target.value)):Xr({...e.terrain,[n]:Number(t.target.value)}),Ee())};Y("terrain-reset").onclick=()=>{ce()?.terrain&&(Ue(),ce().terrain.heights=null,Ee())};function Ag(n,t){wd(n,t);let e=rs.intersectObjects(Le.children,!1).find(a=>Tt.pieces[Le.children.indexOf(a.object)]?.terrain),i=e?Le.children.indexOf(e.object):-1,s=Tt.pieces[i];if(!s?.terrain||(de.recorded||(Ue(),de.recorded=!0,de.flattenY=e.point.y,Sa(i),Y("terrain-controls").open=!0),i!==De))return;let r={mode:Y("terrain-brush").value,radius:Number(Y("brush-radius").value),strength:Number(Y("brush-strength").value),target:de.flattenY};if(!Rm(s,e.point.x,e.point.z,r))return;let o=Le.children[i];o.geometry.dispose(),o.geometry=Zu(s),oi?.update(),ai(),nn()}Y("texture-style").replaceChildren(...Ju.map((n,t)=>new Option(n,t)));Y("texture-create").onclick=()=>{let n=ce();if(!n)return;let t=Dm(Number(Y("texture-style").value),Y("texture-tint").value);Ue(),n.texture=t.toDataURL("image/webp",.85),Ee(),xe("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};Y("view-top").onclick=()=>{let n=Ie.target,t=Math.max(10,Ve.position.distanceTo(n));Ve.position.copy(n).add(new S(0,t,.001)),Ie.update(),nn()};Y("view-perspective").onclick=()=>{Ve.position.copy(Ie.target).add(new S(16,15,24)),Vs()};Y("view-spawn").onclick=()=>{let{x:n,y:t,z:e,yaw:i}=Tt.spawn,s=new S(0,0,-1).applyAxisAngle(ph,Vt.degToRad(i));Ve.position.set(n,t+.87,e),Ie.target.copy(Ve.position).addScaledVector(s,5),Ve.lookAt(Ie.target),nn()};var og={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||de||ge.dragging)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(t==="z")bg();else if(t==="d")bd();else return;else{if(n.altKey)return;if(og[t])as(og[t]);else if(t==="f")Vs();else if(t==="delete")Md();else return}n.preventDefault()});var lh=new Qe;_n.add(lh);function Cg(){if(!Y("debug-stats"))return;let n=Aa.info.render.triangles,t=Tt?.pieces?.length??0;Y("debug-stats").textContent=t+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(Tt?.worldSize??240)+" m"}function Rg(){for(let n of[...lh.children])lh.remove(n),n.geometry.dispose(),n.material.dispose();$r.visible=Y("debug-grid").checked;for(let n of Le.children){if(n.material)for(let t of Array.isArray(n.material)?n.material:[n.material])t.wireframe=Y("debug-wire").checked;Y("debug-hitboxes").checked&&lh.add(new Cr(n,"#fa9945"))}nn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])Y(n).onchange=Rg;Y("debug-coords").onchange=()=>{Y("debug-coords").checked||Cg()};for(let n of[an,re])n.addEventListener("pointermove",t=>{if(!Y("debug-coords").checked||de||Zn)return;let e=Qr(n,t);if(!e)return;let i=e.point;Y("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+Tt.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(cg);if(n){let t=on(n);JSON.stringify(t)!==JSON.stringify($m())&&(Tt=t)}}catch{}as("move");Ee();_d();yd();Vs();Ea();if(hh){let n=Mi.find(t=>t.id===hh);n?(Y("place-model").click(),xe("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):xe("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}})();
