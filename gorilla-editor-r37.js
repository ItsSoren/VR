(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_f=0,ou=1,yf=2;var au=1,vf=2,xi=3,ti=0,on=1,Yt=2,Di=0,xs=1,Qo=2,lu=3,cu=4,Mf=5,Yi=100,bf=101,Sf=102,wf=103,Tf=104,Ef=200,Af=201,Cf=202,Rf=203,cl=204,hl=205,Pf=206,If=207,Lf=208,Df=209,Uf=210,Nf=211,Ff=212,Of=213,Bf=214,zl=0,kl=1,Vl=2,_s=3,Gl=4,Hl=5,Wl=6,Xl=7,ql=0,zf=1,kf=2,Ui=0,Vf=1,Gf=2,Hf=3,Wf=4,Xf=5,qf=6,Yf=7;var hu=300,Cs=301,Rs=302,Lr=303,Yl=304,ea=306,Gn=1e3,qi=1001,ul=1002,Sn=1003,Zf=1004;var ta=1005;var rn=1006,Zl=1007;var Tn=1008;var si=1009,uu=1010,du=1011,Dr=1012,jl=1013,$i=1014,ri=1015,Ur=1016,Jl=1017,Kl=1018,Nr=1020,fu=35902,pu=35899,mu=1021,gu=1022,En=1023,fr=1026,Fr=1027,$l=1028,Ql=1029,xu=1030,ec=1031;var tc=1033,na=33776,ia=33777,sa=33778,ra=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,_c=37817,yc=37818,vc=37819,Mc=37820,bc=37821,Sc=36492,wc=36494,Tc=36495,Ec=36283,Ac=36284,Cc=36285,Rc=36286;var Mo=2300,dl=2301,al=2302,Zh=2400,jh=2401,Jh=2402;var jf=3200,Jf=3201;var Pc=0,Kf=1,Ni="",gt="srgb",ys="srgb-linear",bo="linear",yt="srgb";var gs=7680;var Kh=519,$f=512,Qf=513,ep=514,_u=515,tp=516,np=517,ip=518,sp=519,fl=35044,oa=35048;var yu="300 es",ei=2e3,So=2001;var di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=1234567,xo=Math.PI/180,pr=180/Math.PI;function ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function vu(n,e){return(n%e+e)%e}function Gg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hg(n,e,t){return n!==e?(t-n)/(e-n):0}function _o(n,e,t){return(1-t)*n+t*e}function Wg(n,e,t,i){return _o(n,e,1-Math.exp(-t*i))}function Xg(n,e=1){return e-Math.abs(vu(n,e*2)-e)}function qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jg(n,e){return n+Math.random()*(e-n)}function Jg(n){return n*(.5-Math.random())}function Kg(n){n!==void 0&&(Fd=n);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $g(n){return n*xo}function Qg(n){return n*pr}function e0(n){return(n&n-1)===0&&n!==0}function t0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ve={DEG2RAD:xo,RAD2DEG:pr,generateUUID:ui,clamp:Je,euclideanModulo:vu,mapLinear:Gg,inverseLerp:Hg,lerp:_o,damp:Wg,pingpong:Xg,smoothstep:qg,smootherstep:Yg,randInt:Zg,randFloat:jg,randFloatSpread:Jg,seededRandom:Kg,degToRad:$g,radToDeg:Qg,isPowerOfTwo:e0,ceilPowerOfTwo:t0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:_t,denormalize:Qn},ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=1-a,p=l*f+c*d+h*m+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,p*v);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let y=a*v;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vh=new S,Od=new ut,Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],M=s[4],y=s[7],A=s[2],E=s[5],P=s[8];return r[0]=o*_+a*v+l*A,r[3]=o*g+a*M+l*E,r[6]=o*p+a*y+l*P,r[1]=c*_+h*v+u*A,r[4]=c*g+h*M+u*E,r[7]=c*p+h*y+u*P,r[2]=f*_+d*v+m*A,r[5]=f*g+d*M+m*E,r[8]=f*p+d*y+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mh=new Ke;function Mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rp(){let n=mr("canvas");return n.style.display="block",n}var Bd={};function gr(n){n in Bd||(Bd[n]=!0,console.warn(n))}function op(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var zd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){let n={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ys]:{primaries:e,whitePoint:i,transfer:bo,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),n}var ct=s0();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=mr("canvas")),qs.width=e.width,qs.height=e.height;let s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bh(s[o].image)):r.push(bh(s[o]))}else r=bh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,Sh=new S,dn=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=qi,s=qi,r=rn,o=Tn,a=En,l=si,c=n.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ui(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=hu;dn.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,A=(p+1)/2,E=(h+f)/4,P=(u+_)/4,L=(m+g)/4;return M>y&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=P/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=L/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends ml{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Da.subVectors(this.max,ro),Ys.subVectors(e.a,ro),Zs.subVectors(e.b,ro),js.subVectors(e.c,ro),ki.subVectors(Zs,Ys),Vi.subVectors(js,Zs),ds.subVectors(Ys,js);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-ds.z,ds.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,ds.z,0,-ds.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-ds.y,ds.x,0];return!wh(t,Ys,Zs,js,Da)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,Ys,Zs,js,Da))?!1:(Ua.crossVectors(ki,Vi),t=[Ua.x,Ua.y,Ua.z],wh(t,Ys,Zs,js,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new S,new S,new S,new S,new S,new S,new S,new S],Jn=new S,La=new Zt,Ys=new S,Zs=new S,js=new S,ki=new S,Vi=new S,ds=new S,ro=new S,Da=new S,Ua=new S,fs=new S;function wh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var a0=new Zt,oo=new S,Th=new S,Hn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):a0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(oo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Th)),this.expandByPoint(oo.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new S,Eh=new S,Na=new S,Gi=new S,Ah=new S,Fa=new S,Ch=new S,Zi=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Eh.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Eh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=Gi.dot(this.direction),l=-Gi.dot(Na),c=Gi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eh).addScaledVector(Na,f),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,s,r){Ah.subVectors(t,e),Fa.subVectors(i,e),Ch.crossVectors(Ah,Fa);let o=this.direction.dot(Ch),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let l=a*this.direction.dot(Fa.crossVectors(Gi,Fa));if(l<0)return null;let c=a*this.direction.dot(Ah.cross(Gi));if(c<0||l+c>o)return null;let h=-a*Gi.dot(Ch);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,m,_,g)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Hi.crossVectors(i,Dn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Hi.crossVectors(i,Dn)),Hi.normalize(),Oa.crossVectors(Dn,Hi),s[0]=Hi.x,s[4]=Oa.x,s[8]=Dn.x,s[1]=Hi.y,s[5]=Oa.y,s[9]=Dn.y,s[2]=Hi.z,s[6]=Oa.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],M=i[7],y=i[11],A=i[15],E=s[0],P=s[4],L=s[8],w=s[12],b=s[1],I=s[5],N=s[9],H=s[13],W=s[2],G=s[6],q=s[10],$=s[14],Y=s[3],se=s[7],ge=s[11],ee=s[15];return r[0]=o*E+a*b+l*W+c*Y,r[4]=o*P+a*I+l*G+c*se,r[8]=o*L+a*N+l*q+c*ge,r[12]=o*w+a*H+l*$+c*ee,r[1]=h*E+u*b+f*W+d*Y,r[5]=h*P+u*I+f*G+d*se,r[9]=h*L+u*N+f*q+d*ge,r[13]=h*w+u*H+f*$+d*ee,r[2]=m*E+_*b+g*W+p*Y,r[6]=m*P+_*I+g*G+p*se,r[10]=m*L+_*N+g*q+p*ge,r[14]=m*w+_*H+g*$+p*ee,r[3]=v*E+M*b+y*W+A*Y,r[7]=v*P+M*I+y*G+A*se,r[11]=v*L+M*N+y*q+A*ge,r[15]=v*w+M*H+y*$+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,M=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,y=h*_*c-m*u*c+m*a*d-o*_*d-h*a*p+o*u*p,A=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,E=t*v+i*M+s*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=v*P,e[1]=(_*f*r-u*g*r-_*s*d+i*g*d+u*s*p-i*f*p)*P,e[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=M*P,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*P,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(m*u*r-h*_*r-m*i*d+t*_*d+h*i*p-t*u*p)*P,e[10]=(o*_*r-m*a*r+m*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*P,e[12]=A*P,e[13]=(h*_*s-m*u*s+m*i*f-t*_*f-h*i*g+t*u*g)*P,e[14]=(m*a*s-o*_*s-m*i*l+t*_*l+o*i*g-t*a*g)*P,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=l*c,M=l*h,y=l*u,A=i.x,E=i.y,P=i.z;return s[0]=(1-(_+p))*A,s[1]=(d+y)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+M)*P,s[9]=(g-v)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Js.set(s[0],s[1],s[2]).length(),o=Js.set(s[4],s[5],s[6]).length(),a=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let c=1/r,h=1/o,u=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===ei)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===So)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===ei)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===So)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new S,Kn=new at,l0=new S(0,0,0),c0=new S(1,1,1),Hi=new S,Oa=new S,Dn=new S,Vd=new at,Gd=new ut,qt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h0=0,Hd=new S,Ks=new ut,Ei=new at,Ba=new S,ao=new S,u0=new S,d0=new ut,Wd=new S(1,0,0),Xd=new S(0,1,0),qd=new S(0,0,1),Yd={type:"added"},f0={type:"removed"},$s={type:"childadded",child:null},Rh={type:"childremoved",child:null},Ct=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new qt,i=new ut,s=new S(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ao,Ba,this.up):Ei.lookAt(Ba,ao,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new S(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new S,Ai=new S,Ph=new S,Ci=new S,Qs=new S,er=new S,Zd=new S,Ih=new S,Lh=new S,Dh=new S,Uh=new zt,Nh=new zt,Fh=new zt,bn=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Ai.subVectors(i,t),Ph.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(Ph),c=Ai.dot(Ai),h=Ai.dot(Ph),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Uh.setScalar(0),Nh.setScalar(0),Fh.setScalar(0),Uh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uh,r.x),o.addScaledVector(Nh,r.y),o.addScaledVector(Fh,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Ai.subVectors(e,t),$n.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,i),er.subVectors(r,i),Ih.subVectors(e,i);let l=Qs.dot(Ih),c=er.dot(Ih);if(l<=0&&c<=0)return t.copy(i);Lh.subVectors(e,s);let h=Qs.dot(Lh),u=er.dot(Lh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Qs,o);Dh.subVectors(e,r);let d=Qs.dot(Dh),m=er.dot(Dh);if(m>=0&&d<=m)return t.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(er,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Zd.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Zd,a);let p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},za={h:0,s:0,l:0};function Oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=vu(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oh(o,r,e+1/3),this.g=Oh(o,r,e),this.b=Oh(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ct.workingToColorSpace(cn.copy(this),e),Math.round(Je(cn.r*255,0,255))*65536+Math.round(Je(cn.g*255,0,255))*256+Math.round(Je(cn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=gt){ct.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(za);let i=_o(Wi.h,za.h,t),s=_o(Wi.s,za.s,t),r=_o(Wi.l,za.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ke;ke.NAMES=ap;var p0=0,ni=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=xs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wt=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new S,ka=new ue,m0=0,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}};var To=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Eo=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},g0=0,Vn=new at,Bh=new Ct,tr=new S,Un=new Zt,lo=new Zt,Qt=new S,rt=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Eo:To)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Un.min,lo.min),Un.expandByPoint(Qt),Qt.addVectors(Un.max,lo.max),Un.expandByPoint(Qt)):(Un.expandByPoint(lo.min),Un.expandByPoint(lo.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),Qt.add(tr)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new S,l[L]=new S;let c=new S,h=new S,u=new S,f=new ue,d=new ue,m=new ue,_=new S,g=new S;function p(L,w,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[L].add(_),a[w].add(_),a[b].add(_),l[L].add(g),l[w].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,w=v.length;L<w;++L){let b=v[L],I=b.start,N=b.count;for(let H=I,W=I+N;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new S,y=new S,A=new S,E=new S;function P(L){A.fromBufferAttribute(s,L),E.copy(A);let w=a[L];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,I)}for(let L=0,w=v.length;L<w;++L){let b=v[L],I=b.start,N=b.count;for(let H=I,W=I+N;H<W;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jd=new at,ps=new Zi,Va=new Hn,Jd=new S,Ga=new S,Ha=new S,Wa=new S,zh=new S,Xa=new S,Kd=new S,qa=new S,de=class extends Ct{constructor(e=new rt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zh.fromBufferAttribute(u,e),o?Xa.addScaledVector(zh,h):Xa.addScaledVector(zh.sub(t),h))}t.add(Xa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Va.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Va,Jd)===null||ps.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(jd.copy(r).invert(),ps.copy(e.ray).applyMatrix4(jd),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=M;y<A;y+=3){let E=a.getX(y),P=a.getX(y+1),L=a.getX(y+2);s=Ya(this,p,e,i,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Ya(this,o,e,i,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=M;y<A;y+=3){let E=y,P=y+1,L=y+2;s=Ya(this,p,e,i,c,h,u,E,P,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let v=g,M=g+1,y=g+2;s=Ya(this,o,e,i,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function x0(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ti,a),l===null)return null;qa.copy(a),qa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:n}}function Ya(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ga),n.getVertexPosition(l,Ha),n.getVertexPosition(c,Wa);let h=x0(n,e,t,i,Ga,Ha,Wa,Kd);if(h){let u=new S;bn.getBarycoord(Kd,Ga,Ha,Wa,u),s&&(h.uv=bn.getInterpolatedAttribute(s,a,l,c,u,new ue)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,l,c,u,new ue)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,l,c,u,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new S,materialIndex:0};bn.getNormal(Ga,Ha,Wa,f.normal),h.face=f,h.barycoord=u}return h}var qe=class n extends rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function m(_,g,p,v,M,y,A,E,P,L,w){let b=y/P,I=A/L,N=y/2,H=A/2,W=E/2,G=P+1,q=L+1,$=0,Y=0,se=new S;for(let ge=0;ge<q;ge++){let ee=ge*I-H;for(let B=0;B<G;B++){let F=B*b-N;se[_]=F*v,se[g]=ee*M,se[p]=W,c.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(B/P),u.push(1-ge/L),$+=1}}for(let ge=0;ge<L;ge++)for(let ee=0;ee<P;ee++){let B=f+ee+G*ge,F=f+ee+G*(ge+1),le=f+(ee+1)+G*(ge+1),ne=f+(ee+1)+G*ge;l.push(B,F,ne),l.push(F,le,ne),Y+=6}a.addGroup(d,Y,w),d+=Y,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Ps(n[t]);for(let s in i)e[s]=i[s]}return e}function _0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var lp={clone:Ps,merge:mn},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ao=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new S,$d=new ue,Qd=new ue,hn=class extends Ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Qd),t.subVectors(Qd,$d)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nr=-90,ir=1,xl=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new hn(nr,ir,e,t);r.layers=this.layers,this.add(r);let o=new hn(nr,ir,e,t);o.layers=this.layers,this.add(o);let a=new hn(nr,ir,e,t);a.layers=this.layers,this.add(a);let l=new hn(nr,ir,e,t);l.layers=this.layers,this.add(l);let c=new hn(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Co=class extends dn{constructor(e=[],t=Cs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_l=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Co(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Di});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=rn),new xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},en=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},M0={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new en;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ro=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new S,Mr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,co=new S,rr=new S,or=new S,ar=new ue,ho=new ue,cp=new at,Za=new S,uo=new S,ja=new S,ef=new ue,kh=new ue,tf=new ue,Io=class extends Ct{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Po(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Mr(i,3,0,!1)),sr.setAttribute("uv",new Mr(i,2,3,!1))}this.geometry=sr,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ja(Za.set(-.5,-.5,0),or,o,rr,s,r),Ja(uo.set(.5,-.5,0),or,o,rr,s,r),Ja(ja.set(.5,.5,0),or,o,rr,s,r),ef.set(0,0),kh.set(1,0),tf.set(1,1);let a=e.ray.intersectTriangle(Za,uo,ja,!1,co);if(a===null&&(Ja(uo.set(-.5,.5,0),or,o,rr,s,r),kh.set(0,1),a=e.ray.intersectTriangle(Za,ja,uo,!1,co),a===null))return;let l=e.ray.origin.distanceTo(co);l<e.near||l>e.far||t.push({distance:l,point:co.clone(),uv:bn.getInterpolation(co,Za,uo,ja,ef,kh,tf,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ja(n,e,t,i,s,r){ar.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ho.x=r*ar.x-s*ar.y,ho.y=s*ar.x+r*ar.y):ho.copy(ar),n.copy(e),n.x+=ho.x,n.y+=ho.y,n.applyMatrix4(cp)}var pi=class extends dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Sn,h=Sn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new at,nf=new at,Ka=[],sf=new Zt,b0=new at,fo=new de,po=new Hn,Lo=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),sf.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),po.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),nf.multiplyMatrices(i,lr),fo.matrixWorld=nf,fo.raycast(e,Ka);for(let o=0,a=Ka.length;o<a;o++){let l=Ka[o];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(s*this.count),s,this.count,$l,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vh=new S,S0=new S,w0=new Ke,un=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vh.subVectors(i,t).cross(S0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||w0.getNormalMatrix(e),s=this.coplanarPoint(Vh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new Hn,T0=new ue(.5,.5),$a=new S,wr=class{constructor(e=new un,t=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],M=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,p-m,A-v).normalize(),s[1].setComponents(c+o,d+h,p+m,A+v).normalize(),s[2].setComponents(c+a,d+u,p+_,A+M).normalize(),s[3].setComponents(c-a,d-u,p-_,A-M).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,d-f,p-g,A-y).normalize();else if(s[4].setComponents(c-l,d-f,p-g,A-y).normalize(),t===ei)s[5].setComponents(c+l,d+f,p+g,A+y).normalize();else if(t===So)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=T0.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mi=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yl=new S,vl=new S,rf=new at,mo=new Zi,Qa=new Hn,Gh=new S,of=new S,wn=class extends Ct{constructor(e=new rt,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)yl.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=yl.distanceTo(vl);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;rf.copy(s).invert(),mo.copy(e.ray).applyMatrix4(rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=h.getX(_),v=h.getX(_+1),M=el(this,e,mo,l,p,v,_);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=el(this,e,mo,l,_,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=el(this,e,mo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=el(this,e,mo,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function el(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(yl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),t.distanceSqToSegment(yl,vl,Gh,of)>i)return;Gh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gh);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var af=new S,lf=new S,Do=class extends wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)af.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+af.distanceTo(lf);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Uo=class extends wn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var gi=class extends dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},No=class extends dn{constructor(e,t,i=$i,s,r,o,a=Sn,l=Sn,c,h=fr,u=1){if(h!==fr&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fo=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vs=class n extends rt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=i*2+r,_=s+1,g=new S,p=new S;for(let v=0;v<=m;v++){let M=0,y=0,A=0,E=0;if(v<=i){let w=v/i,b=w*Math.PI/2;y=-h-e*Math.cos(b),A=e*Math.sin(b),E=-e*Math.cos(b),M=w*u}else if(v<=i+r){let w=(v-i)/r;y=-h+w*t,A=e,E=0,M=u+w*f}else{let w=(v-i-r)/i,b=w*Math.PI/2;y=h+e*Math.sin(b),A=e*Math.cos(b),E=e*Math.sin(b),M=u+f+w*u}let P=Math.max(0,Math.min(1,M/d)),L=0;v===0?L=.5/s:v===m&&(L=-.5/s);for(let w=0;w<=s;w++){let b=w/s,I=b*Math.PI*2,N=Math.sin(I),H=Math.cos(I);p.x=-A*H,p.y=y,p.z=A*N,a.push(p.x,p.y,p.z),g.set(-A*H,E,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+L,P)}if(v>0){let w=(v-1)*_;for(let b=0;b<s;b++){let I=w+b,N=w+b+1,H=v*_+b,W=v*_+b+1;o.push(I,N,H),o.push(N,W,H)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},tn=class n extends rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pt=class n extends rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],g=i/2,p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(d,2));function v(){let y=new S,A=new S,E=0,P=(t-e)/i;for(let L=0;L<=r;L++){let w=[],b=L/r,I=b*(t-e)+e;for(let N=0;N<=s;N++){let H=N/s,W=H*l+a,G=Math.sin(W),q=Math.cos(W);A.x=I*G,A.y=-b*i+g,A.z=I*q,u.push(A.x,A.y,A.z),y.set(G,P,q).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-b),w.push(m++)}_.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let b=_[w][L],I=_[w+1][L],N=_[w+1][L+1],H=_[w][L+1];(e>0||w!==0)&&(h.push(b,I,H),E+=3),(t>0||w!==r-1)&&(h.push(I,N,H),E+=3)}c.addGroup(p,E,0),p+=E}function M(y){let A=m,E=new ue,P=new S,L=0,w=y===!0?e:t,b=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let W=N/s*l+a,G=Math.cos(W),q=Math.sin(W);P.x=w*q,P.y=g*b,P.z=w*G,u.push(P.x,P.y,P.z),f.push(0,b,0),E.x=G*.5+.5,E.y=q*.5*b+.5,d.push(E.x,E.y),m++}for(let N=0;N<s;N++){let H=A+N,W=I+N;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pi=class n extends pt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tr=class n extends rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new S,y=new S,A=new S;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],y),d(t[E+2],A),l(M,y,A,v)}function l(v,M,y,A){let E=A+1,P=[];for(let L=0;L<=E;L++){P[L]=[];let w=v.clone().lerp(y,L/E),b=M.clone().lerp(y,L/E),I=E-L;for(let N=0;N<=I;N++)N===0&&L===E?P[L][N]=w:P[L][N]=w.clone().lerp(b,N/I)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){let b=Math.floor(w/2);w%2===0?(f(P[L][b+1]),f(P[L+1][b]),f(P[L][b])):(f(P[L][b+1]),f(P[L+1][b+1]),f(P[L+1][b]))}}function c(v){let M=new S;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let v=new S;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let y=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(y,1-A)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],A=o[v+4],E=Math.max(M,y,A),P=Math.min(M,y,A);E>.9&&P<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function m(){let v=new S,M=new S,y=new S,A=new S,E=new ue,P=new ue,L=new ue;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),A.copy(v).add(M).add(y).divideScalar(3);let I=g(A);_(E,b+0,v,I),_(P,b+2,M,I),_(L,b+4,y,I)}}function _(v,M,y,A){A<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new S,s=[],r=[],o=[],a=new S,l=new at;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Je(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends Nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends Er{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Su(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var tl=new S,Hh=new Su,Wh=new Su,Xh=new Su,bl=class extends Nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new S){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(tl.subVectors(s[0],s[1]).add(s[0]),c=tl);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(tl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Hh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),Wh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),Xh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Hh.calc(l),Wh.calc(l),Xh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function E0(n,e){let t=1-n;return t*t*e}function A0(n,e){return 2*(1-n)*n*e}function C0(n,e){return n*n*e}function yo(n,e,t,i){return E0(n,e)+A0(n,t)+C0(n,i)}function R0(n,e){let t=1-n;return t*t*t*e}function P0(n,e){let t=1-n;return 3*t*t*n*e}function I0(n,e){return 3*(1-n)*n*n*e}function L0(n,e){return n*n*n*e}function vo(n,e,t,i,s){return R0(n,e)+P0(n,t)+I0(n,i)+L0(n,s)}var Oo=class extends Nn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends Nn{constructor(e=new S,t=new S,i=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y),vo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends Nn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends Nn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Nn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Nn{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y),yo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(cf(a,l.x,c.x,h.x,u.x),cf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},$h=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:bl,CubicBezierCurve:Oo,CubicBezierCurve3:Sl,EllipseCurve:Er,LineCurve:Bo,LineCurve3:wl,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Tl,SplineCurve:ko}),El=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new $h[s.type]().fromJSON(s))}return this}},Vo=class extends El{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Bo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new zo(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Oo(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Er(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ii=class extends Vo{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Vo().fromJSON(s))}return this}};function D0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=hp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=B0(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],m=n[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Go(r,o,t,a,l,c,0),o}function hp(n,e,t,i,s){let r;if(s===j0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=hf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=hf(o/i|0,n[o],n[o+1],r);return r&&Ar(r,r.next)&&(Wo(r),r=r.next),r}function Ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ar(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Wo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Go(n,e,t,i,s,r,o){if(!n)return;!o&&r&&H0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?N0(n,i,s,r):U0(n)){e.push(l.i,n.i,c.i),Wo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=F0(Ms(n),e),Go(n,e,t,i,s,r,2)):o===2&&O0(n,e,t,i,s,r):Go(Ms(n),e,t,i,s,r,1);break}}}function U0(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&go(s,a,r,l,o,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function N0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),_=Math.max(a,l,c),g=Math.max(h,u,f),p=Qh(d,m,e,t,i),v=Qh(_,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=p&&y&&y.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&go(a,h,l,u,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&go(a,h,l,u,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&go(a,h,l,u,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&go(a,h,l,u,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function F0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ar(i,s)&&dp(i,t,t.next,s)&&Ho(i,s)&&Ho(s,i)&&(e.push(i.i,t.i,s.i),Wo(t),Wo(t.next),t=n=s),t=t.next}while(t!==n);return Ms(t)}function O0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q0(o,a)){let l=fp(o,a);o=Ms(o,o.next),l=Ms(l,l.next),Go(o,e,t,i,s,r,0),Go(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function B0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=hp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(X0(c))}s.sort(z0);for(let r=0;r<s.length;r++)t=k0(s[r],t);return t}function z0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function k0(n,e){let t=V0(n,e);if(!t)return e;let i=fp(t,n);return Ms(i,i.next),Ms(t,t.next)}function V0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ar(n,t))return t;do{if(Ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&up(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ho(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&G0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function G0(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function H0(n,e,t,i){let s=n;do s.z===0&&(s.z=Qh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Qh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function X0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function up(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function go(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&up(n,e,t,i,s,r,o,a)}function q0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Y0(n,e)&&(Ho(n,e)&&Ho(e,n)&&Z0(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||Ar(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ar(n,e){return n.x===e.x&&n.y===e.y}function dp(n,e,t,i){let s=il(Bt(n,e,t)),r=il(Bt(n,e,i)),o=il(Bt(t,i,n)),a=il(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&nl(n,t,e)||r===0&&nl(n,i,e)||o===0&&nl(t,n,i)||a===0&&nl(t,e,i))}function nl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function il(n){return n>0?1:n<0?-1:0}function Y0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ho(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function Z0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function fp(n,e){let t=eu(n.i,n.x,n.y),i=eu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hf(n,e,t,i){let s=eu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function j0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var tu=class{static triangulate(e,t,i=2){return D0(e,t,i)}},hi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];uf(e),df(i,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,df(i,t[l]);let a=tu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function df(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var bs=class n extends rt{constructor(e=new Ii([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(s,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:J0,M,y=!1,A,E,P,L;p&&(M=p.getSpacedPoints(h),y=!0,f=!1,A=p.computeFrenetFrames(h,!1),E=new S,P=new S,L=new S),f||(g=0,d=0,m=0,_=0);let w=a.extractPoints(c),b=w.shape,I=w.holes;if(!hi.isClockWise(b)){b=b.reverse();for(let ce=0,oe=I.length;ce<oe;ce++){let te=I[ce];hi.isClockWise(te)&&(I[ce]=te.reverse())}}function H(ce){let te=10000000000000001e-36,ie=ce[0];for(let xe=1;xe<=ce.length;xe++){let fe=xe%ce.length,Ee=ce[fe],Ye=Ee.x-ie.x,Xe=Ee.y-ie.y,C=Ye*Ye+Xe*Xe,x=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ie.x),Math.abs(ie.y)),R=te*x*x;if(C<=R){ce.splice(fe,1),xe--;continue}ie=Ee}}H(b),I.forEach(H);let W=I.length,G=b;for(let ce=0;ce<W;ce++){let oe=I[ce];b=b.concat(oe)}function q(ce,oe,te){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(oe,te)}let $=b.length;function Y(ce,oe,te){let ie,xe,fe,Ee=ce.x-oe.x,Ye=ce.y-oe.y,Xe=te.x-ce.x,C=te.y-ce.y,x=Ee*Ee+Ye*Ye,R=Ee*C-Ye*Xe;if(Math.abs(R)>Number.EPSILON){let O=Math.sqrt(x),K=Math.sqrt(Xe*Xe+C*C),V=oe.x-Ye/O,_e=oe.y+Ee/O,ae=te.x-C/K,me=te.y+Xe/K,pe=((ae-V)*C-(me-_e)*Xe)/(Ee*C-Ye*Xe);ie=V+Ee*pe-ce.x,xe=_e+Ye*pe-ce.y;let Q=ie*ie+xe*xe;if(Q<=2)return new ue(ie,xe);fe=Math.sqrt(Q/2)}else{let O=!1;Ee>Number.EPSILON?Xe>Number.EPSILON&&(O=!0):Ee<-Number.EPSILON?Xe<-Number.EPSILON&&(O=!0):Math.sign(Ye)===Math.sign(C)&&(O=!0),O?(ie=-Ye,xe=Ee,fe=Math.sqrt(x)):(ie=Ee,xe=Ye,fe=Math.sqrt(x/2))}return new ue(ie/fe,xe/fe)}let se=[];for(let ce=0,oe=G.length,te=oe-1,ie=ce+1;ce<oe;ce++,te++,ie++)te===oe&&(te=0),ie===oe&&(ie=0),se[ce]=Y(G[ce],G[te],G[ie]);let ge=[],ee,B=se.concat();for(let ce=0,oe=W;ce<oe;ce++){let te=I[ce];ee=[];for(let ie=0,xe=te.length,fe=xe-1,Ee=ie+1;ie<xe;ie++,fe++,Ee++)fe===xe&&(fe=0),Ee===xe&&(Ee=0),ee[ie]=Y(te[ie],te[fe],te[Ee]);ge.push(ee),B=B.concat(ee)}let F;if(g===0)F=hi.triangulateShape(G,I);else{let ce=[],oe=[];for(let te=0;te<g;te++){let ie=te/g,xe=d*Math.cos(ie*Math.PI/2),fe=m*Math.sin(ie*Math.PI/2)+_;for(let Ee=0,Ye=G.length;Ee<Ye;Ee++){let Xe=q(G[Ee],se[Ee],fe);Le(Xe.x,Xe.y,-xe),ie===0&&ce.push(Xe)}for(let Ee=0,Ye=W;Ee<Ye;Ee++){let Xe=I[Ee];ee=ge[Ee];let C=[];for(let x=0,R=Xe.length;x<R;x++){let O=q(Xe[x],ee[x],fe);Le(O.x,O.y,-xe),ie===0&&C.push(O)}ie===0&&oe.push(C)}}F=hi.triangulateShape(ce,oe)}let le=F.length,ne=m+_;for(let ce=0;ce<$;ce++){let oe=f?q(b[ce],B[ce],ne):b[ce];y?(P.copy(A.normals[0]).multiplyScalar(oe.x),E.copy(A.binormals[0]).multiplyScalar(oe.y),L.copy(M[0]).add(P).add(E),Le(L.x,L.y,L.z)):Le(oe.x,oe.y,0)}for(let ce=1;ce<=h;ce++)for(let oe=0;oe<$;oe++){let te=f?q(b[oe],B[oe],ne):b[oe];y?(P.copy(A.normals[ce]).multiplyScalar(te.x),E.copy(A.binormals[ce]).multiplyScalar(te.y),L.copy(M[ce]).add(P).add(E),Le(L.x,L.y,L.z)):Le(te.x,te.y,u/h*ce)}for(let ce=g-1;ce>=0;ce--){let oe=ce/g,te=d*Math.cos(oe*Math.PI/2),ie=m*Math.sin(oe*Math.PI/2)+_;for(let xe=0,fe=G.length;xe<fe;xe++){let Ee=q(G[xe],se[xe],ie);Le(Ee.x,Ee.y,u+te)}for(let xe=0,fe=I.length;xe<fe;xe++){let Ee=I[xe];ee=ge[xe];for(let Ye=0,Xe=Ee.length;Ye<Xe;Ye++){let C=q(Ee[Ye],ee[Ye],ie);y?Le(C.x,C.y+M[h-1].y,M[h-1].x+te):Le(C.x,C.y,u+te)}}}Z(),re();function Z(){let ce=s.length/3;if(f){let oe=0,te=$*oe;for(let ie=0;ie<le;ie++){let xe=F[ie];Pe(xe[2]+te,xe[1]+te,xe[0]+te)}oe=h+g*2,te=$*oe;for(let ie=0;ie<le;ie++){let xe=F[ie];Pe(xe[0]+te,xe[1]+te,xe[2]+te)}}else{for(let oe=0;oe<le;oe++){let te=F[oe];Pe(te[2],te[1],te[0])}for(let oe=0;oe<le;oe++){let te=F[oe];Pe(te[0]+$*h,te[1]+$*h,te[2]+$*h)}}i.addGroup(ce,s.length/3-ce,0)}function re(){let ce=s.length/3,oe=0;Ce(G,oe),oe+=G.length;for(let te=0,ie=I.length;te<ie;te++){let xe=I[te];Ce(xe,oe),oe+=xe.length}i.addGroup(ce,s.length/3-ce,1)}function Ce(ce,oe){let te=ce.length;for(;--te>=0;){let ie=te,xe=te-1;xe<0&&(xe=ce.length-1);for(let fe=0,Ee=h+g*2;fe<Ee;fe++){let Ye=$*fe,Xe=$*(fe+1),C=oe+ie+Ye,x=oe+xe+Ye,R=oe+xe+Xe,O=oe+ie+Xe;He(C,x,R,O)}}}function Le(ce,oe,te){l.push(ce),l.push(oe),l.push(te)}function Pe(ce,oe,te){it(ce),it(oe),it(te);let ie=s.length/3,xe=v.generateTopUV(i,s,ie-3,ie-2,ie-1);D(xe[0]),D(xe[1]),D(xe[2])}function He(ce,oe,te,ie){it(ce),it(oe),it(ie),it(oe),it(te),it(ie);let xe=s.length/3,fe=v.generateSideWallUV(i,s,xe-6,xe-3,xe-2,xe-1);D(fe[0]),D(fe[1]),D(fe[3]),D(fe[1]),D(fe[2]),D(fe[3])}function it(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function D(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return K0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $h[s.type]().fromJSON(s)),new n(i,e.options)}},J0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,l),new ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-u),new ue(f,1-m),new ue(_,1-p)]:[new ue(a,1-l),new ue(h,1-u),new ue(d,1-m),new ue(g,1-p)]}};function K0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fn=class n extends Tr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xo=class n extends rt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new S,f=new ue,d=new S,m=new S,_=new S,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let v=0;v<=t;v++){let M=i+v*h*s,y=Math.sin(M),A=Math.cos(M);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*A,o.push(u.x,u.y,u.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);let P=l[3*E+0]*y,L=l[3*E+1],w=l[3*E+0]*A;c.push(P,L,w)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,A=y,E=y+e.length,P=y+e.length+1,L=y+1;r.push(A,E,L),r.push(P,L,E)}this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Wn=class n extends Tr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fn=class n extends rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let v=p*f-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,y=v+c*(p+1),A=v+1+c*(p+1),E=v+1+c*p;d.push(M,y,E),d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Cr=class n extends rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new S,m=new ue;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){let g=_*(i+1);for(let p=0;p<i;p++){let v=p+g,M=v,y=v+i+1,A=v+i+2,E=v+1;a.push(M,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qo=class n extends rt{constructor(e=new Ii([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(r,3)),this.setAttribute("uv",new Oe(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,m=f.holes;hi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];hi.isClockWise(v)===!0&&(m[g]=v.reverse())}let _=hi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){let v=d[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){let v=_[g],M=v[0]+u,y=v[1]+u,A=v[2]+u;i.push(M,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return $0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function $0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var On=class n extends rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new S,f=new S,d=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let v=[],M=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+y,1-M),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let M=h[p][v+1],y=h[p][v],A=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&d.push(M,y,E),(p!==i-1||l<Math.PI)&&d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Yo=class n extends Tr{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},vn=class n extends rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new S,u=new S,f=new S;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){let _=m/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){let _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,v=(s+1)*d+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var nn=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var pn=class extends ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Al=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Q0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ss=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends Ss{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:r=e,a=2*t-i;break;case Jh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=e,l=2*i-t;break;case Jh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+v*o[c+A]+M*o[l+A]+y*o[u+A];return r}},Pl=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Il=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sl(t,this.TimeBufferType),this.values=sl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sl(e.times,Array),values:sl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case dl:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return dl;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Q0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=dl;var ji=class extends Bn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Mo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Ll.prototype.ValueTypeName="color";var Dl=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Dl.prototype.ValueTypeName="number";var Ul=class extends Ss{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ut.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zo=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Bn{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Mo;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};Nl.prototype.ValueTypeName="vector";var ll={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Fl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},pp=new Fl,Rr=class{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=new WeakMap,Ol=class extends Rr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ll.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=cr.get(o);u===void 0&&(u=[],cr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=mr("img");function l(){h(),t&&t(this);let u=cr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}cr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ll.remove(`image:${e}`);let f=cr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ll.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Li=class extends Rr{constructor(e){super(e)}load(e,t,i,s){let r=new dn,o=new Ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},jo=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ws=class extends jo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qh=new at,ff=new S,pf=new S,nu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Jo=class extends Ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},iu=class extends nu{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wu="\\[\\]\\.:\\/",ex=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",tx="[^"+wu.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",Tu),ix=/(WCOD+)?/.source.replace("WCOD",tx),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),ox=new RegExp("^"+nx+ix+sx+rx+"$"),ax=["material","materials","bones","map"],su=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ex,"")}static parseTrackName(e){let t=ox.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ax.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=su;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var mf=new at,Es=class{constructor(e,t,i=0,s=1/0){this.ray=new Zi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,i=[]){return ru(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,i,t);return i.sort(gf),i}};function gf(n,e){return n.distance-e.distance}function ru(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ru(r[o],e,t,!0)}}var Pr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xf=new S,rl=new S,hr=new S,ur=new S,Yh=new S,lx=new S,cx=new S,Ko=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xf.subVectors(e,this.start),rl.subVectors(this.end,this.start);let i=rl.dot(rl),r=rl.dot(xf)/i;return t&&(r=Je(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=lx,i=cx){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;hr.subVectors(c,a),ur.subVectors(h,l),Yh.subVectors(a,l);let u=hr.dot(hr),f=ur.dot(ur),d=ur.dot(Yh);if(u<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=d/f,o=Je(o,0,1);else{let m=hr.dot(Yh);if(f<=s)o=0,r=Je(-m/u,0,1);else{let _=hr.dot(ur),g=u*f-_*_;g!==0?r=Je((_*d-m*f)/g,0,1):r=0,o=(_*r+d)/f,o<0?(o=0,r=Je(-m/u,0,1)):o>1&&(o=1,r=Je((_-m)/u,0,1))}}return t.copy(a).add(hr.multiplyScalar(r)),i.copy(l).add(ur.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var $o=class extends Do{constructor(e=10,t=10,i=4473924,s=8947848){i=new ke(i),s=new ke(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}let h=new rt;h.setAttribute("position",new Oe(l,3)),h.setAttribute("color",new Oe(c,3));let u=new mi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ol=new Zt,Ir=class extends Do{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new rt;r.setIndex(new vt(i,1)),r.setAttribute("position",new vt(s,3)),super(r,new mi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ol.setFromObject(this.object),ol.isEmpty())return;let e=ol.min,t=ol.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var As=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Eu(n,e,t,i){let s=hx(i);switch(t){case mu:return n*e;case $l:return n*e/s.components*s.byteLength;case Ql:return n*e/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case ec:return n*e*2/s.components*s.byteLength;case gu:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case tc:return n*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sc:case wc:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ec:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(n){switch(n){case si:case uu:return{byteLength:1,components:1};case Dr:case du:case Ur:return{byteLength:2,components:1};case Jl:case Kl:return{byteLength:2,components:4};case $i:case jl:case ri:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mx(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
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
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
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
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
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
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Oy=`#define PHONG
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
}`,zy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:gx,alphahash_pars_fragment:xx,alphamap_fragment:_x,alphamap_pars_fragment:yx,alphatest_fragment:vx,alphatest_pars_fragment:Mx,aomap_fragment:bx,aomap_pars_fragment:Sx,batching_pars_vertex:wx,batching_vertex:Tx,begin_vertex:Ex,beginnormal_vertex:Ax,bsdfs:Cx,iridescence_fragment:Rx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Ux,color_fragment:Nx,color_pars_fragment:Fx,color_pars_vertex:Ox,color_vertex:Bx,common:zx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Hx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:qx,colorspace_pars_fragment:Yx,envmap_fragment:Zx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Jx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:l_,envmap_vertex:$x,fog_vertex:Qx,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:h_,lights_phong_fragment:u_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:x_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:S_,map_particle_fragment:w_,map_particle_pars_fragment:T_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:A_,morphinstance_vertex:C_,morphcolor_vertex:R_,morphnormal_vertex:P_,morphtarget_pars_vertex:I_,morphtarget_vertex:L_,normal_fragment_begin:D_,normal_fragment_maps:U_,normal_pars_fragment:N_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:G_,opaque_fragment:H_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:$_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:dy,uv_vertex:fy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:xy,backgroundCube_frag:_y,cube_vert:yy,cube_frag:vy,depth_vert:My,depth_frag:by,distanceRGBA_vert:Sy,distanceRGBA_frag:wy,equirect_vert:Ty,equirect_frag:Ey,linedashed_vert:Ay,linedashed_frag:Cy,meshbasic_vert:Ry,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Uy,meshnormal_vert:Ny,meshnormal_frag:Fy,meshphong_vert:Oy,meshphong_frag:By,meshphysical_vert:zy,meshphysical_frag:ky,meshtoon_vert:Vy,meshtoon_frag:Gy,points_vert:Hy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:Zy},Re={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},_i={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ic={r:0,b:0,g:0},Is=new qt,jy=new at;function Jy(n,e,t,i,s,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1,A=m(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let A=m(y);A&&(A.isCubeTexture||A.mapping===ea)?(h===void 0&&(h=new de(new qe(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ps(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(y.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(Is)),h.material.toneMapped=ct.getTransfer(A.colorSpace)!==yt,(u!==A||f!==A.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new de(new fn(2,2),new ii({name:"BackgroundMaterial",uniforms:Ps(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Ic,bu(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g,dispose:v}}function Ky(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,I,N,H,W){let G=!1,q=u(H,N,I);r!==q&&(r=q,c(r.object)),G=d(b,H,N,W),G&&m(b,H,N,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(b,I,N,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,I,N){let H=N.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let G=W[I.id];G===void 0&&(G={},W[I.id]=G);let q=G[H];return q===void 0&&(q=f(l()),G[H]=q),q}function f(b){let I=[],N=[],H=[];for(let W=0;W<t;W++)I[W]=0,N[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:H,object:b,attributes:{},index:null}}function d(b,I,N,H){let W=r.attributes,G=I.attributes,q=0,$=N.getAttributes();for(let Y in $)if($[Y].location>=0){let ge=W[Y],ee=G[Y];if(ee===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ge===void 0||ge.attribute!==ee||ee&&ge.data!==ee.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function m(b,I,N,H){let W={},G=I.attributes,q=0,$=N.getAttributes();for(let Y in $)if($[Y].location>=0){let ge=G[Y];ge===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));let ee={};ee.attribute=ge,ge&&ge.data&&(ee.data=ge.data),W[Y]=ee,q++}r.attributes=W,r.attributesNum=q,r.index=H}function _(){let b=r.newAttributes;for(let I=0,N=b.length;I<N;I++)b[I]=0}function g(b){p(b,0)}function p(b,I){let N=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;N[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),W[b]!==I&&(n.vertexAttribDivisor(b,I),W[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let N=0,H=I.length;N<H;N++)I[N]!==b[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function M(b,I,N,H,W,G,q){q===!0?n.vertexAttribIPointer(b,I,N,W,G):n.vertexAttribPointer(b,I,N,H,W,G)}function y(b,I,N,H){_();let W=H.attributes,G=N.getAttributes(),q=I.defaultAttributeValues;for(let $ in G){let Y=G[$];if(Y.location>=0){let se=W[$];if(se===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let ge=se.normalized,ee=se.itemSize,B=e.get(se);if(B===void 0)continue;let F=B.buffer,le=B.type,ne=B.bytesPerElement,Z=le===n.INT||le===n.UNSIGNED_INT||se.gpuType===jl;if(se.isInterleavedBufferAttribute){let re=se.data,Ce=re.stride,Le=se.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)p(Y.location+Pe,re.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)g(Y.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,F);for(let Pe=0;Pe<Y.locationSize;Pe++)M(Y.location+Pe,ee/Y.locationSize,le,ge,Ce*ne,(Le+ee/Y.locationSize*Pe)*ne,Z)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,se.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<Y.locationSize;re++)g(Y.location+re);n.bindBuffer(n.ARRAY_BUFFER,F);for(let re=0;re<Y.locationSize;re++)M(Y.location+re,ee/Y.locationSize,le,ge,ee*ne,ee/Y.locationSize*re*ne,Z)}}else if(q!==void 0){let ge=q[$];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Y.location,ge);break;case 3:n.vertexAttrib3fv(Y.location,ge);break;case 4:n.vertexAttrib4fv(Y.location,ge);break;default:n.vertexAttrib1fv(Y.location,ge)}}}}v()}function A(){L();for(let b in i){let I=i[b];for(let N in I){let H=I[N];for(let W in H)h(H[W].object),delete H[W];delete I[N]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let N in I){let H=I[N];for(let W in H)h(H[W].object),delete H[W];delete I[N]}delete i[b.id]}function P(b){for(let I in i){let N=i[I];if(N[b.id]===void 0)continue;let H=N[b.id];for(let W in H)h(H[W].object),delete H[W];delete N[b.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function $y(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==si&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function ev(n){let e=this,t=null,i=0,s=!1,r=!1,o=new un,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,M=v*4,y=p.clippingState||null;l.value=y,y=h(m,f,M,d);for(let A=0;A!==M;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function tv(n){let e=new WeakMap;function t(o,a){return a===Lr?o.mapping=Cs:a===Yl&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lr||a===Yl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _l(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Br=4,mp=[.125,.215,.35,.446,.526,.582],Us=20,Au=new Jo,gp=new ke,Cu=null,Ru=0,Pu=0,Iu=!1,Ds=(1+Math.sqrt(5))/2,Or=1/Ds,xp=[new S(-Ds,Or,0),new S(Ds,Or,0),new S(-Or,0,Ds),new S(Or,0,Ds),new S(0,Ds,-Or),new S(0,Ds,Or),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],nv=new S,kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=nv}=r;Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Ru,Pu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ur,format:En,colorSpace:ys,depthBuffer:!1},s=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Au)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(gp),u.toneMapping=Ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Wt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new de(new qe,_),p=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(gp),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let A=this._cubeSize;Lc(s,y*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Cs||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Lc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Au)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xp[(s-r-1)%xp.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Us;g>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);let p=[],v=0;for(let P=0;P<Us;++P){let L=P/_,w=Math.exp(-L*L/2);p.push(w),P===0?v+=w:P<g&&(v+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;let y=this._sizeLods[s],A=3*y*(s>M-Br?s-M+Br:0),E=4*(this._cubeSize-y);Lc(t,A,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Au)}};function iv(n){let e=[],t=[],i=[],s=n,r=n-Br+1+mp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Br?l=mp[o-n+Br-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*d),M=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){let P=E%3*2/3-1,L=E>2?0:-1,w=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];v.set(w,_*m*E),M.set(f,g*m*E);let b=[E,E,E,E,E,E];y.set(b,p*m*E)}let A=new rt;A.setAttribute("position",new vt(v,_)),A.setAttribute("uv",new vt(M,g)),A.setAttribute("faceIndex",new vt(y,p)),e.push(A),s>Br&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _p(n,e,t){let i=new fi(n,e,t);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sv(n,e,t){let i=new Float32Array(Us),s=new S(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yp(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vp(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function rv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Lr||l===Yl,h=l===Cs||l===Rs;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new kr(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ov(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function av(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let M=0,y=v.length;M<y;M+=3){let A=v[M+0],E=v[M+1],P=v[M+2];f.push(A,E,E,P,P,A)}}else if(m!==void 0){let v=m.array;_=m.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let A=M+0,E=M+1,P=M+2;f.push(A,E,E,P,P,A)}}else return;let g=new(Mu(f)?Eo:To)(f,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),t.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function u(f,d,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v]*_[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hv(n,e,t){let i=new WeakMap,s=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*u),P=new wo(E,y,A,u);P.type=ri,P.needsUpdate=!0;let L=M*4;for(let b=0;b<u;b++){let I=g[b],N=p[b],H=v[b],W=y*A*4*b;for(let G=0;G<I.count;G++){let q=G*L;d===!0&&(s.fromBufferAttribute(I,G),E[W+q+0]=s.x,E[W+q+1]=s.y,E[W+q+2]=s.z,E[W+q+3]=0),m===!0&&(s.fromBufferAttribute(N,G),E[W+q+4]=s.x,E[W+q+5]=s.y,E[W+q+6]=s.z,E[W+q+7]=0),_===!0&&(s.fromBufferAttribute(H,G),E[W+q+8]=s.x,E[W+q+9]=s.y,E[W+q+10]=s.z,E[W+q+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ue(y,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function uv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var zp=new dn,Mp=new No(1,1),kp=new wo,Vp=new gl,Gp=new Co,bp=[],Sp=[],wp=new Float32Array(16),Tp=new Float32Array(9),Ep=new Float32Array(4);function Vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Ep.set(i),n.uniformMatrix2fv(this.addr,!1,Ep),Jt(t,i)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),Jt(t,i)}}function _v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;wp.set(i),n.uniformMatrix4fv(this.addr,!1,wp),Jt(t,i)}}function yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mp.compareFunction=_u,r=Mp):r=zp,t.setTexture2D(e||r,s)}function Cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vp,s)}function Rv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gp,s)}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kp,s)}function Iv(n){switch(n){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return vv;case 35668:case 35672:return Mv;case 35669:case 35673:return bv;case 5125:return Sv;case 36294:return wv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(n,e){n.uniform1fv(this.addr,e)}function Dv(n,e){let t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function Uv(n,e){let t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nv(n,e){let t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function Fv(n,e){let t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){let t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bv(n,e){let t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Vv(n,e){n.uniform3iv(this.addr,e)}function Gv(n,e){n.uniform4iv(this.addr,e)}function Hv(n,e){n.uniform1uiv(this.addr,e)}function Wv(n,e){n.uniform2uiv(this.addr,e)}function Xv(n,e){n.uniform3uiv(this.addr,e)}function qv(n,e){n.uniform4uiv(this.addr,e)}function Yv(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zp,r[o])}function Zv(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vp,r[o])}function jv(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gp,r[o])}function Jv(n,e,t){let i=this.cache,s=e.length,r=Nc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kp,r[o])}function Kv(n){switch(n){case 5126:return Lv;case 35664:return Dv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Jv}}var Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}},Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Ap(n,e){n.seq.push(e),n.map[e.id]=e}function $v(n,e,t){let i=n.name,s=i.length;for(Lu.lastIndex=0;;){let r=Lu.exec(i),o=Lu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ap(t,c===void 0?new Du(a,n,e):new Uu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Nu(a),Ap(t,u)),t=u}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$v(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Qv=37297,eM=0;function tM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Rp=new Ke;function nM(n){ct._getMatrix(Rp,ct.workingColorSpace,n);let e=`mat3( ${Rp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case bo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tM(n.getShaderSource(e),a)}else return r}function iM(n,e){let t=nM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sM(n,e){let t;switch(e){case Vf:t="Linear";break;case Gf:t="Reinhard";break;case Hf:t="Cineon";break;case Wf:t="ACESFilmic";break;case qf:t="AgX";break;case Yf:t="Neutral";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new S;function rM(){ct.getLuminanceCoefficients(Dc);let n=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function aM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function aa(n){return n!==""}function Ip(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(n){return n.replace(cM,uM)}var hM=new Map;function uM(n,e){let t=st[e];if(t===void 0){let i=hM.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}var dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(dM,fM)}function fM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===au?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function xM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case zf:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function _M(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pM(t),c=mM(t),h=gM(t),u=xM(t),f=_M(t),d=oM(t),m=aM(r),_=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(g=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?st.tonemapping_pars_fragment:"",t.toneMapping!==Ui?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,iM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Fu(o),o=Ip(o,t),o=Lp(o,t),a=Fu(a),a=Ip(a,t),a=Lp(a,t),o=Dp(o),a=Dp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,y=v+p+a,A=Cp(s,s.VERTEX_SHADER,M),E=Cp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(E)||"",G=N.trim(),q=H.trim(),$=W.trim(),Y=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,E);else{let ge=Pp(s,A,"vertex"),ee=Pp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ge+`
`+ee)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(q===""||$==="")&&(se=!1);se&&(I.diagnostics={runnable:Y,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(A),s.deleteShader(E),L=new zr(s,_),w=lM(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Qv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var vM=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bu(e),t.set(e,i)),i}},Bu=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};function MM(n,e,t,i,s,r,o){let a=new _r,l=new Ou,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,I,N,H){let W=N.fog,G=H.geometry,q=w.isMeshStandardMaterial?N.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),Y=$&&$.mapping===ea?$.image.height:null,se=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=ge!==void 0?ge.length:0,B=0;G.morphAttributes.position!==void 0&&(B=1),G.morphAttributes.normal!==void 0&&(B=2),G.morphAttributes.color!==void 0&&(B=3);let F,le,ne,Z;if(se){let mt=_i[se];F=mt.vertexShader,le=mt.fragmentShader}else F=w.vertexShader,le=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);let re=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,He=!!w.map,it=!!w.matcap,D=!!$,ce=!!w.aoMap,oe=!!w.lightMap,te=!!w.bumpMap,ie=!!w.normalMap,xe=!!w.displacementMap,fe=!!w.emissiveMap,Ee=!!w.metalnessMap,Ye=!!w.roughnessMap,Xe=w.anisotropy>0,C=w.clearcoat>0,x=w.dispersion>0,R=w.iridescence>0,O=w.sheen>0,K=w.transmission>0,V=Xe&&!!w.anisotropyMap,_e=C&&!!w.clearcoatMap,ae=C&&!!w.clearcoatNormalMap,me=C&&!!w.clearcoatRoughnessMap,pe=R&&!!w.iridescenceMap,Q=R&&!!w.iridescenceThicknessMap,be=O&&!!w.sheenColorMap,Ne=O&&!!w.sheenRoughnessMap,ye=!!w.specularMap,Se=!!w.specularColorMap,ze=!!w.specularIntensityMap,U=K&&!!w.transmissionMap,Me=K&&!!w.thicknessMap,Ae=!!w.gradientMap,De=!!w.alphaMap,ve=w.alphaTest>0,he=!!w.alphaHash,Be=!!w.extensions,$e=Ui;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&($e=n.toneMapping);let At={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:F,fragmentShader:le,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ys,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:it,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:oe,bumpMap:te,normalMap:ie,displacementMap:f&&xe,emissiveMap:fe,normalMapObjectSpace:ie&&w.normalMapType===Kf,normalMapTangentSpace:ie&&w.normalMapType===Pc,metalnessMap:Ee,roughnessMap:Ye,anisotropy:Xe,anisotropyMap:V,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:me,dispersion:x,iridescence:R,iridescenceMap:pe,iridescenceThicknessMap:Q,sheen:O,sheenColorMap:be,sheenRoughnessMap:Ne,specularMap:ye,specularColorMap:Se,specularIntensityMap:ze,transmission:K,transmissionMap:U,thicknessMap:Me,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:he,combine:w.combine,mapUv:He&&_(w.map.channel),aoMapUv:ce&&_(w.aoMap.channel),lightMapUv:oe&&_(w.lightMap.channel),bumpMapUv:te&&_(w.bumpMap.channel),normalMapUv:ie&&_(w.normalMap.channel),displacementMapUv:xe&&_(w.displacementMap.channel),emissiveMapUv:fe&&_(w.emissiveMap.channel),metalnessMapUv:Ee&&_(w.metalnessMap.channel),roughnessMapUv:Ye&&_(w.roughnessMap.channel),anisotropyMapUv:V&&_(w.anisotropyMap.channel),clearcoatMapUv:_e&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(w.sheenRoughnessMap.channel),specularMapUv:ye&&_(w.specularMap.channel),specularColorMapUv:Se&&_(w.specularColorMap.channel),specularIntensityMapUv:ze&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:Me&&_(w.thicknessMap.channel),alphaMapUv:De&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(He||De),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:B,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&ct.getTransfer(w.map.colorSpace)===yt,decodeVideoTextureEmissive:fe&&w.emissiveMap.isVideoTexture===!0&&ct.getTransfer(w.emissiveMap.colorSpace)===yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Yt,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(b,w),M(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let b=m[w.type],I;if(b){let N=_i[b];I=lp.clone(N.uniforms)}else I=w.uniforms;return I}function A(w,b){let I;for(let N=0,H=h.length;N<H;N++){let W=h[N];if(W.cacheKey===b){I=W,++I.usedTimes;break}}return I===void 0&&(I=new yM(n,b,w,r),h.push(I)),I}function E(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:L}}function bM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,m,_,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||SM),i.length>1&&i.sort(f||Np),s.length>1&&s.sort(f||Np)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Fp,n.set(i,[o])):s>=r.length?(o=new Fp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ke};break;case"SpotLight":t={position:new S,direction:new S,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function EM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var AM=0;function CM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RM(n){let e=new TM,t=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new S);let s=new S,r=new at,o=new at;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,M=0,y=0,A=0,E=0,P=0;c.sort(CM);for(let w=0,b=c.length;w<b;w++){let I=c[w],N=I.color,H=I.intensity,W=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*H,u+=N.g*H,f+=N.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);P++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=I.shadow.matrix,v++}i.directional[d]=q,d++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(H),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;let $=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=G,y++}_++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(N).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let $=I.shadow,Y=t.get(I);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=q,m++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=P,i.version=AM++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Op(n){let e=new RM(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function PM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Op(n),e.set(s,[a])):r>=o.length?(a=new Op(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var IM=`void main() {
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
}`;function DM(n,e,t){let i=new wr,s=new ue,r=new ue,o=new zt,a=new Al({depthPacking:Jf}),l=new Cl,c={},h=t.maxTextureSize,u={[ti]:on,[on]:ti,[Yt]:Yt},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:IM,fragmentShader:LM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(E,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==xi&&this.type===xi,W=p===xi&&this.type!==xi;for(let G=0,q=E.length;G<q;G++){let $=E[G],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let se=Y.getFrameExtents();if(s.multiply(se),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||W===!0){let ee=this.type!==xi?{minFilter:Sn,magFilter:Sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new fi(s.x,s.y,ee),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let ge=Y.getViewportCount();for(let ee=0;ee<ge;ee++){let B=Y.getViewport(ee);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(o),Y.updateMatrices($,ee),i=Y.getFrustum(),y(P,L,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===xi&&v(Y,L),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,b,I)};function v(E,P){let L=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,L,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,L,d,_,null)}function M(E,P,L,w){let b=null,I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=b.uuid,H=P.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let G=W[H];G===void 0&&(G=b.clone(),W[H]=G,P.addEventListener("dispose",A)),b=G}if(b.visible=P.visible,b.wireframe=P.wireframe,w===xi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=n.properties.get(b);N.light=L}return b}function y(E,P,L,w,b){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===xi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let H=e.update(E),W=E.material;if(Array.isArray(W)){let G=H.groups;for(let q=0,$=G.length;q<$;q++){let Y=G[q],se=W[Y.materialIndex];if(se&&se.visible){let ge=M(E,se,w,b);E.onBeforeShadow(n,E,P,L,H,ge,Y),n.renderBufferDirect(L,null,H,ge,E,Y),E.onAfterShadow(n,E,P,L,H,ge,Y)}}}else if(W.visible){let G=M(E,W,w,b);E.onBeforeShadow(n,E,P,L,H,G,null),n.renderBufferDirect(L,null,H,G,E,null),E.onAfterShadow(n,E,P,L,H,G,null)}}let N=E.children;for(let H=0,W=N.length;H<W;H++)y(N[H],P,L,w,b)}function A(E){E.target.removeEventListener("dispose",A);for(let L in c){let w=c[L],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var UM={[zl]:kl,[Vl]:Wl,[Gl]:Xl,[_s]:Hl,[kl]:zl,[Wl]:Vl,[Xl]:Gl,[Hl]:_s};function NM(n,e){function t(){let U=!1,Me=new zt,Ae=null,De=new zt(0,0,0,0);return{setMask:function(ve){Ae!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),Ae=ve)},setLocked:function(ve){U=ve},setClear:function(ve,he,Be,$e,At){At===!0&&(ve*=$e,he*=$e,Be*=$e),Me.set(ve,he,Be,$e),De.equals(Me)===!1&&(n.clearColor(ve,he,Be,$e),De.copy(Me))},reset:function(){U=!1,Ae=null,De.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,Ae=null,De=null,ve=null;return{setReversed:function(he){if(Me!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Me=he;let $e=ve;ve=null,this.setClear($e)}},getReversed:function(){return Me},setTest:function(he){he?re(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(he){Ae!==he&&!U&&(n.depthMask(he),Ae=he)},setFunc:function(he){if(Me&&(he=UM[he]),De!==he){switch(he){case zl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Hl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=he}},setLocked:function(he){U=he},setClear:function(he){ve!==he&&(Me&&(he=1-he),n.clearDepth(he),ve=he)},reset:function(){U=!1,Ae=null,De=null,ve=null,Me=!1}}}function s(){let U=!1,Me=null,Ae=null,De=null,ve=null,he=null,Be=null,$e=null,At=null;return{setTest:function(mt){U||(mt?re(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(mt){Me!==mt&&!U&&(n.stencilMask(mt),Me=mt)},setFunc:function(mt,Si,ci){(Ae!==mt||De!==Si||ve!==ci)&&(n.stencilFunc(mt,Si,ci),Ae=mt,De=Si,ve=ci)},setOp:function(mt,Si,ci){(he!==mt||Be!==Si||$e!==ci)&&(n.stencilOp(mt,Si,ci),he=mt,Be=Si,$e=ci)},setLocked:function(mt){U=mt},setClear:function(mt){At!==mt&&(n.clearStencil(mt),At=mt)},reset:function(){U=!1,Me=null,Ae=null,De=null,ve=null,he=null,Be=null,$e=null,At=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,A=null,E=null,P=new ke(0,0,0),L=0,w=!1,b=null,I=null,N=null,H=null,W=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=$>=2);let se=null,ge={},ee=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),F=new zt().fromArray(ee),le=new zt().fromArray(B);function ne(U,Me,Ae,De){let ve=new Uint8Array(4),he=n.createTexture();n.bindTexture(U,he),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Ae;Be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Me+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return he}let Z={};Z[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(_s),te(!1),ie(ou),re(n.CULL_FACE),ce(Di);function re(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ce(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Le(U,Me){return u[U]!==Me?(n.bindFramebuffer(U,Me),u[U]=Me,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Pe(U,Me){let Ae=d,De=!1;if(U){Ae=f.get(Me),Ae===void 0&&(Ae=[],f.set(Me,Ae));let ve=U.textures;if(Ae.length!==ve.length||Ae[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Be=ve.length;he<Be;he++)Ae[he]=n.COLOR_ATTACHMENT0+he;Ae.length=ve.length,De=!0}}else Ae[0]!==n.BACK&&(Ae[0]=n.BACK,De=!0);De&&n.drawBuffers(Ae)}function He(U){return m!==U?(n.useProgram(U),m=U,!0):!1}let it={[Yi]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[Sf]:n.FUNC_REVERSE_SUBTRACT};it[wf]=n.MIN,it[Tf]=n.MAX;let D={[Ef]:n.ZERO,[Af]:n.ONE,[Cf]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Lf]:n.DST_COLOR,[Pf]:n.DST_ALPHA,[Rf]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[Df]:n.ONE_MINUS_DST_COLOR,[If]:n.ONE_MINUS_DST_ALPHA,[Nf]:n.CONSTANT_COLOR,[Ff]:n.ONE_MINUS_CONSTANT_COLOR,[Of]:n.CONSTANT_ALPHA,[Bf]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(U,Me,Ae,De,ve,he,Be,$e,At,mt){if(U===Di){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),U!==Mf){if(U!==g||mt!==w){if((p!==Yi||y!==Yi)&&(n.blendEquation(n.FUNC_ADD),p=Yi,y=Yi),mt)switch(U){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,M=null,A=null,E=null,P.set(0,0,0),L=0,g=U,w=mt}return}ve=ve||Me,he=he||Ae,Be=Be||De,(Me!==p||ve!==y)&&(n.blendEquationSeparate(it[Me],it[ve]),p=Me,y=ve),(Ae!==v||De!==M||he!==A||Be!==E)&&(n.blendFuncSeparate(D[Ae],D[De],D[he],D[Be]),v=Ae,M=De,A=he,E=Be),($e.equals(P)===!1||At!==L)&&(n.blendColor($e.r,$e.g,$e.b,At),P.copy($e),L=At),g=U,w=!1}function oe(U,Me){U.side===Yt?Ce(n.CULL_FACE):re(n.CULL_FACE);let Ae=U.side===on;Me&&(Ae=!Ae),te(Ae),U.blending===xs&&U.transparent===!1?ce(Di):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function ie(U){U!==_f?(re(n.CULL_FACE),U!==I&&(U===ou?n.cullFace(n.BACK):U===yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=U}function xe(U){U!==N&&(q&&n.lineWidth(U),N=U)}function fe(U,Me,Ae){U?(re(n.POLYGON_OFFSET_FILL),(H!==Me||W!==Ae)&&(n.polygonOffset(Me,Ae),H=Me,W=Ae)):Ce(n.POLYGON_OFFSET_FILL)}function Ee(U){U?re(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ye(U){U===void 0&&(U=n.TEXTURE0+G-1),se!==U&&(n.activeTexture(U),se=U)}function Xe(U,Me,Ae){Ae===void 0&&(se===null?Ae=n.TEXTURE0+G-1:Ae=se);let De=ge[Ae];De===void 0&&(De={type:void 0,texture:void 0},ge[Ae]=De),(De.type!==U||De.texture!==Me)&&(se!==Ae&&(n.activeTexture(Ae),se=Ae),n.bindTexture(U,Me||Z[U]),De.type=U,De.texture=Me)}function C(){let U=ge[se];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){F.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),F.copy(U))}function Ne(U){le.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function ye(U,Me){let Ae=c.get(Me);Ae===void 0&&(Ae=new WeakMap,c.set(Me,Ae));let De=Ae.get(U);De===void 0&&(De=n.getUniformBlockIndex(Me,U.name),Ae.set(U,De))}function Se(U,Me){let De=c.get(Me).get(U);l.get(Me)!==De&&(n.uniformBlockBinding(Me,De,U.__bindingPointIndex),l.set(Me,De))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,ge={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,M=null,y=null,A=null,E=null,P=new ke(0,0,0),L=0,w=!1,b=null,I=null,N=null,H=null,W=null,F.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ce,bindFramebuffer:Le,drawBuffers:Pe,useProgram:He,setBlending:ce,setMaterial:oe,setFlipSided:te,setCullFace:ie,setLineWidth:xe,setPolygonOffset:fe,setScissorTest:Ee,activeTexture:Ye,bindTexture:Xe,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:pe,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:Se,texStorage2D:ae,texStorage3D:me,texSubImage2D:O,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:_e,scissor:be,viewport:Ne,reset:ze}}function FM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,x){return d?new OffscreenCanvas(C,x):mr("canvas")}function _(C,x,R){let O=1,K=Xe(C);if((K.width>R||K.height>R)&&(O=R/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let V=Math.floor(O*K.width),_e=Math.floor(O*K.height);u===void 0&&(u=m(V,_e));let ae=x?m(V,_e):u;return ae.width=V,ae.height=_e,ae.getContext("2d").drawImage(C,0,0,V,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+_e+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,x,R,O,K=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=x;if(x===n.RED&&(R===n.FLOAT&&(V=n.R32F),R===n.HALF_FLOAT&&(V=n.R16F),R===n.UNSIGNED_BYTE&&(V=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.R8UI),R===n.UNSIGNED_SHORT&&(V=n.R16UI),R===n.UNSIGNED_INT&&(V=n.R32UI),R===n.BYTE&&(V=n.R8I),R===n.SHORT&&(V=n.R16I),R===n.INT&&(V=n.R32I)),x===n.RG&&(R===n.FLOAT&&(V=n.RG32F),R===n.HALF_FLOAT&&(V=n.RG16F),R===n.UNSIGNED_BYTE&&(V=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RG8UI),R===n.UNSIGNED_SHORT&&(V=n.RG16UI),R===n.UNSIGNED_INT&&(V=n.RG32UI),R===n.BYTE&&(V=n.RG8I),R===n.SHORT&&(V=n.RG16I),R===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGB8UI),R===n.UNSIGNED_SHORT&&(V=n.RGB16UI),R===n.UNSIGNED_INT&&(V=n.RGB32UI),R===n.BYTE&&(V=n.RGB8I),R===n.SHORT&&(V=n.RGB16I),R===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),R===n.UNSIGNED_INT&&(V=n.RGBA32UI),R===n.BYTE&&(V=n.RGBA8I),R===n.SHORT&&(V=n.RGBA16I),R===n.INT&&(V=n.RGBA32I)),x===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),x===n.RGBA){let _e=K?bo:ct.getTransfer(O);R===n.FLOAT&&(V=n.RGBA32F),R===n.HALF_FLOAT&&(V=n.RGBA16F),R===n.UNSIGNED_BYTE&&(V=_e===yt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(C,x){let R;return C?x===null||x===$i||x===Nr?R=n.DEPTH24_STENCIL8:x===ri?R=n.DEPTH32F_STENCIL8:x===Dr&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$i||x===Nr?R=n.DEPTH_COMPONENT24:x===ri?R=n.DEPTH_COMPONENT32F:x===Dr&&(R=n.DEPTH_COMPONENT16),R}function A(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){let x=C.target;x.removeEventListener("dispose",E),L(x),x.isVideoTexture&&h.delete(x)}function P(C){let x=C.target;x.removeEventListener("dispose",P),b(x)}function L(C){let x=i.get(C);if(x.__webglInit===void 0)return;let R=C.source,O=f.get(R);if(O){let K=O[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(C),Object.keys(O).length===0&&f.delete(R)}i.remove(C)}function w(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let R=C.source,O=f.get(R);delete O[x.__cacheKey],o.memory.textures--}function b(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let K=0;K<x.__webglFramebuffer[O].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[O][K]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let R=C.textures;for(let O=0,K=R.length;O<K;O++){let V=i.get(R[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(R[O])}i.remove(C)}let I=0;function N(){I=0}function H(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function W(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function G(C,x){let R=i.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&R.__version!==C.version){let O=C.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(R,C,x);return}}else C.isExternalTexture&&(R.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function q(C,x){let R=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){Z(R,C,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function $(C,x){let R=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){Z(R,C,x);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function Y(C,x){let R=i.get(C);if(C.version>0&&R.__version!==C.version){re(R,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}let se={[Gn]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},ge={[Sn]:n.NEAREST,[Zf]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},ee={[$f]:n.NEVER,[sp]:n.ALWAYS,[Qf]:n.LESS,[_u]:n.LEQUAL,[ep]:n.EQUAL,[ip]:n.GEQUAL,[tp]:n.GREATER,[np]:n.NOTEQUAL};function B(C,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===Zl||x.magFilter===ta||x.magFilter===Tn||x.minFilter===rn||x.minFilter===Zl||x.minFilter===ta||x.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,se[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,se[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,se[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ge[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Sn||x.minFilter!==ta&&x.minFilter!==Tn||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function F(C,x){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",E));let O=x.source,K=f.get(O);K===void 0&&(K={},f.set(O,K));let V=W(x);if(V!==C.__cacheKey){K[V]===void 0&&(K[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),K[V].usedTimes++;let _e=K[C.__cacheKey];_e!==void 0&&(K[C.__cacheKey].usedTimes--,_e.usedTimes===0&&w(x)),C.__cacheKey=V,C.__webglTexture=K[V].texture}return R}function le(C,x,R){return Math.floor(Math.floor(C/R)/x)}function ne(C,x,R,O){let V=C.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,R,O,x.data);else{V.sort((Q,be)=>Q.start-be.start);let _e=0;for(let Q=1;Q<V.length;Q++){let be=V[_e],Ne=V[Q],ye=be.start+be.count,Se=le(Ne.start,x.width,4),ze=le(be.start,x.width,4);Ne.start<=ye+1&&Se===ze&&le(Ne.start+Ne.count-1,x.width,4)===Se?be.count=Math.max(be.count,Ne.start+Ne.count-be.start):(++_e,V[_e]=Ne)}V.length=_e+1;let ae=n.getParameter(n.UNPACK_ROW_LENGTH),me=n.getParameter(n.UNPACK_SKIP_PIXELS),pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,be=V.length;Q<be;Q++){let Ne=V[Q],ye=Math.floor(Ne.start/4),Se=Math.ceil(Ne.count/4),ze=ye%x.width,U=Math.floor(ye/x.width),Me=Se,Ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ze,U,Me,Ae,R,O,x.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,me),n.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Z(C,x,R){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);let K=F(C,x),V=x.source;t.bindTexture(O,C.__webglTexture,n.TEXTURE0+R);let _e=i.get(V);if(V.version!==_e.__version||K===!0){t.activeTexture(n.TEXTURE0+R);let ae=ct.getPrimaries(ct.workingColorSpace),me=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),pe=x.colorSpace===Ni||ae===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Q=_(x.image,!1,s.maxTextureSize);Q=Ye(x,Q);let be=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),ye=M(x.internalFormat,be,Ne,x.colorSpace,x.isVideoTexture);B(O,x);let Se,ze=x.mipmaps,U=x.isVideoTexture!==!0,Me=_e.__version===void 0||K===!0,Ae=V.dataReady,De=A(x,Q);if(x.isDepthTexture)ye=y(x.format===Fr,x.type),Me&&(U?t.texStorage2D(n.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,be,Ne,null));else if(x.isDataTexture)if(ze.length>0){U&&Me&&t.texStorage2D(n.TEXTURE_2D,De,ye,ze[0].width,ze[0].height);for(let ve=0,he=ze.length;ve<he;ve++)Se=ze[ve],U?Ae&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ve,ye,Se.width,Se.height,0,be,Ne,Se.data);x.generateMipmaps=!1}else U?(Me&&t.texStorage2D(n.TEXTURE_2D,De,ye,Q.width,Q.height),Ae&&ne(x,Q,be,Ne)):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,be,Ne,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ye,ze[0].width,ze[0].height,Q.depth);for(let ve=0,he=ze.length;ve<he;ve++)if(Se=ze[ve],x.format!==En)if(be!==null)if(U){if(Ae)if(x.layerUpdates.size>0){let Be=Eu(Se.width,Se.height,x.format,x.type);for(let $e of x.layerUpdates){let At=Se.data.subarray($e*Be/Se.data.BYTES_PER_ELEMENT,($e+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,$e,Se.width,Se.height,1,be,At)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,Q.depth,be,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ye,Se.width,Se.height,Q.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,Q.depth,be,Ne,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ye,Se.width,Se.height,Q.depth,0,be,Ne,Se.data)}else{U&&Me&&t.texStorage2D(n.TEXTURE_2D,De,ye,ze[0].width,ze[0].height);for(let ve=0,he=ze.length;ve<he;ve++)Se=ze[ve],x.format!==En?be!==null?U?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Ae&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se.width,Se.height,be,Ne,Se.data):t.texImage2D(n.TEXTURE_2D,ve,ye,Se.width,Se.height,0,be,Ne,Se.data)}else if(x.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ye,Q.width,Q.height,Q.depth),Ae)if(x.layerUpdates.size>0){let ve=Eu(Q.width,Q.height,x.format,x.type);for(let he of x.layerUpdates){let Be=Q.data.subarray(he*ve/Q.data.BYTES_PER_ELEMENT,(he+1)*ve/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Q.width,Q.height,1,be,Ne,Be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,be,Ne,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,be,Ne,Q.data);else if(x.isData3DTexture)U?(Me&&t.texStorage3D(n.TEXTURE_3D,De,ye,Q.width,Q.height,Q.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,be,Ne,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,be,Ne,Q.data);else if(x.isFramebufferTexture){if(Me)if(U)t.texStorage2D(n.TEXTURE_2D,De,ye,Q.width,Q.height);else{let ve=Q.width,he=Q.height;for(let Be=0;Be<De;Be++)t.texImage2D(n.TEXTURE_2D,Be,ye,ve,he,0,be,Ne,null),ve>>=1,he>>=1}}else if(ze.length>0){if(U&&Me){let ve=Xe(ze[0]);t.texStorage2D(n.TEXTURE_2D,De,ye,ve.width,ve.height)}for(let ve=0,he=ze.length;ve<he;ve++)Se=ze[ve],U?Ae&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,be,Ne,Se):t.texImage2D(n.TEXTURE_2D,ve,ye,be,Ne,Se);x.generateMipmaps=!1}else if(U){if(Me){let ve=Xe(Q);t.texStorage2D(n.TEXTURE_2D,De,ye,ve.width,ve.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ne,Q)}else t.texImage2D(n.TEXTURE_2D,0,ye,be,Ne,Q);g(x)&&p(O),_e.__version=V.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,R){if(x.image.length!==6)return;let O=F(C,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+R);let V=i.get(K);if(K.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+R);let _e=ct.getPrimaries(ct.workingColorSpace),ae=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),me=x.colorSpace===Ni||_e===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,be=[];for(let he=0;he<6;he++)!pe&&!Q?be[he]=_(x.image[he],!0,s.maxCubemapSize):be[he]=Q?x.image[he].image:x.image[he],be[he]=Ye(x,be[he]);let Ne=be[0],ye=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),ze=M(x.internalFormat,ye,Se,x.colorSpace),U=x.isVideoTexture!==!0,Me=V.__version===void 0||O===!0,Ae=K.dataReady,De=A(x,Ne);B(n.TEXTURE_CUBE_MAP,x);let ve;if(pe){U&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ze,Ne.width,Ne.height);for(let he=0;he<6;he++){ve=be[he].mipmaps;for(let Be=0;Be<ve.length;Be++){let $e=ve[Be];x.format!==En?ye!==null?U?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,$e.width,$e.height,ye,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,ze,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,$e.width,$e.height,ye,Se,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,ze,$e.width,$e.height,0,ye,Se,$e.data)}}}else{if(ve=x.mipmaps,U&&Me){ve.length>0&&De++;let he=Xe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ze,he.width,he.height)}for(let he=0;he<6;he++)if(Q){U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,be[he].width,be[he].height,ye,Se,be[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ze,be[he].width,be[he].height,0,ye,Se,be[he].data);for(let Be=0;Be<ve.length;Be++){let At=ve[Be].image[he].image;U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,At.width,At.height,ye,Se,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,ze,At.width,At.height,0,ye,Se,At.data)}}else{U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ye,Se,be[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ze,ye,Se,be[he]);for(let Be=0;Be<ve.length;Be++){let $e=ve[Be];U?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,ye,Se,$e.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,ze,ye,Se,$e.image[he])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),V.__version=K.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ce(C,x,R,O,K,V){let _e=r.convert(R.format,R.colorSpace),ae=r.convert(R.type),me=M(R.internalFormat,_e,ae,R.colorSpace),pe=i.get(x),Q=i.get(R);if(Q.__renderTarget=x,!pe.__hasExternalTextures){let be=Math.max(1,x.width>>V),Ne=Math.max(1,x.height>>V);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,V,me,be,Ne,x.depth,0,_e,ae,null):t.texImage2D(K,V,me,be,Ne,0,_e,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,K,Q.__webglTexture,0,xe(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,K,Q.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(C,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){let O=x.depthTexture,K=O&&O.isDepthTexture?O.type:null,V=y(x.stencilBuffer,K),_e=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=xe(x);fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,V,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,C)}else{let O=x.textures;for(let K=0;K<O.length;K++){let V=O[K],_e=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),me=M(V.internalFormat,_e,ae,V.colorSpace),pe=xe(x);R&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,me,x.width,x.height):fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,me,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let K=O.__webglTexture,V=xe(x);if(x.depthTexture.format===fr)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Fr)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(C){let x=i.get(C),R=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let O=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=O}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let O=C.texture.mipmaps;O&&O.length>0?Pe(x.__webglFramebuffer[0],C):Pe(x.__webglFramebuffer,C)}else if(R){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),Le(x.__webglDepthbuffer[O],C,!1);else{let K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}else{let O=C.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Le(x.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(C,x,R){let O=i.get(C);x!==void 0&&Ce(O.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&He(C)}function D(C){let x=C.texture,R=i.get(C),O=i.get(x);C.addEventListener("dispose",P);let K=C.textures,V=C.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,o.memory.textures++),V){R.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[ae]=[];for(let me=0;me<x.mipmaps.length;me++)R.__webglFramebuffer[ae][me]=n.createFramebuffer()}else R.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)R.__webglFramebuffer[ae]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ae=0,me=K.length;ae<me;ae++){let pe=i.get(K[ae]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&fe(C)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){let me=K[ae];R.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ae]);let pe=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),be=M(me.internalFormat,pe,Q,me.colorSpace,C.isXRRenderTarget===!0),Ne=xe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,R.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(R.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),B(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ce(R.__webglFramebuffer[ae][me],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else Ce(R.__webglFramebuffer[ae],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,me=K.length;ae<me;ae++){let pe=K[ae],Q=i.get(pe),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),B(be,pe),Ce(R.__webglFramebuffer,C,pe,n.COLOR_ATTACHMENT0+ae,be,0),g(pe)&&p(be)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,O.__webglTexture),B(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Ce(R.__webglFramebuffer[me],C,x,n.COLOR_ATTACHMENT0,ae,me);else Ce(R.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,ae,0);g(x)&&p(ae),t.unbindTexture()}C.depthBuffer&&He(C)}function ce(C){let x=C.textures;for(let R=0,O=x.length;R<O;R++){let K=x[R];if(g(K)){let V=v(C),_e=i.get(K).__webglTexture;t.bindTexture(V,_e),p(V),t.unbindTexture()}}}let oe=[],te=[];function ie(C){if(C.samples>0){if(fe(C)===!1){let x=C.textures,R=C.width,O=C.height,K=n.COLOR_BUFFER_BIT,V=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(C),ae=x.length>1;if(ae)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let me=C.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let Q=i.get(x[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,R,O,0,0,R,O,K,n.NEAREST),l===!0&&(oe.length=0,te.length=0,oe.push(n.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(V),te.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let Q=i.get(x[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(C){return Math.min(s.maxSamples,C.samples)}function fe(C){let x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(C){let x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Ye(C,x){let R=C.colorSpace,O=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==ys&&R!==Ni&&(ct.getTransfer(R)===yt?(O!==En||K!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function Xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=it,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=fe}function OM(n,e){function t(i,s=Ni){let r,o=ct.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uu)return n.BYTE;if(i===du)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===jl)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Ur)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===En)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===Fr)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===Ql)return n.RED_INTEGER;if(i===xu)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===Mc||i===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===wc||i===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ec||i===Ac||i===Cc||i===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var BM=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ii({vertexShader:BM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ku=class extends di{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new zu,p={},v=t.getContextAttributes(),M=null,y=null,A=[],E=[],P=new ue,L=null,w=new hn;w.viewport=new zt;let b=new hn;b.viewport=new zt;let I=[w,b],N=new Bl,H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=A[Z];return re===void 0&&(re=new yr,A[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=A[Z];return re===void 0&&(re=new yr,A[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=A[Z];return re===void 0&&(re=new yr,A[Z]=re),re.getHandSpace()};function G(Z){let re=E.indexOf(Z.inputSource);if(re===-1)return;let Ce=A[re];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,c||o),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<A.length;Z++){let re=E[Z];re!==null&&(E[Z]=null,A[Z].disconnect(re))}H=null,W=null,g.reset();for(let Z in p)delete p[Z];e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Le=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=v.stencil?Fr:fr,Le=v.stencil?Nr:$i);let He={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new fi(f.textureWidth,f.textureHeight,{format:En,type:si,depthTexture:new No(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new fi(d.framebufferWidth,d.framebufferHeight,{format:En,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Z){for(let re=0;re<Z.removed.length;re++){let Ce=Z.removed[re],Le=E.indexOf(Ce);Le>=0&&(E[Le]=null,A[Le].disconnect(Ce))}for(let re=0;re<Z.added.length;re++){let Ce=Z.added[re],Le=E.indexOf(Ce);if(Le===-1){for(let He=0;He<A.length;He++)if(He>=E.length){E.push(Ce),Le=He;break}else if(E[He]===null){E[He]=Ce,Le=He;break}if(Le===-1)break}let Pe=A[Le];Pe&&Pe.connect(Ce)}}let Y=new S,se=new S;function ge(Z,re,Ce){Y.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(Ce.matrixWorld);let Le=Y.distanceTo(se),Pe=re.projectionMatrix.elements,He=Ce.projectionMatrix.elements,it=Pe[14]/(Pe[10]-1),D=Pe[14]/(Pe[10]+1),ce=(Pe[9]+1)/Pe[5],oe=(Pe[9]-1)/Pe[5],te=(Pe[8]-1)/Pe[0],ie=(He[8]+1)/He[0],xe=it*te,fe=it*ie,Ee=Le/(-te+ie),Ye=Ee*-te;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(Ee),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Xe=it+Ee,C=D+Ee,x=xe-Ye,R=fe+(Le-Ye),O=ce*D/C*Xe,K=oe*D/C*Xe;Z.projectionMatrix.makePerspective(x,R,O,K,Xe,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ee(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,Ce=Z.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(Ce=g.depthFar)),N.near=b.near=w.near=re,N.far=b.far=w.far=Ce,(H!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,W=N.far),N.layers.mask=Z.layers.mask|6,w.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let Le=Z.parent,Pe=N.cameras;ee(N,Le);for(let He=0;He<Pe.length;He++)ee(Pe[He],Le);Pe.length===2?ge(N,w,b):N.projectionMatrix.copy(w.projectionMatrix),B(Z,N,Le)};function B(Z,re,Ce){Ce===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let F=null;function le(Z,re){if(h=re.getViewerPose(c||o),m=re,h!==null){let Ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Le=!1;Ce.length!==N.cameras.length&&(N.cameras.length=0,Le=!0);for(let D=0;D<Ce.length;D++){let ce=Ce[D],oe=null;if(d!==null)oe=d.getViewport(ce);else{let ie=u.getViewSubImage(f,ce);oe=ie.viewport,D===0&&(e.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(y))}let te=I[D];te===void 0&&(te=new hn,te.layers.enable(D),te.viewport=new zt,I[D]=te),te.matrix.fromArray(ce.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ce.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(oe.x,oe.y,oe.width,oe.height),D===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Le===!0&&N.cameras.push(te)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let D=u.getDepthInformation(Ce[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Ce.length;D++){let ce=Ce[D].camera;if(ce){let oe=p[ce];oe||(oe=new Fo,p[ce]=oe);let te=u.getCameraImage(ce);oe.sourceTexture=te}}}}for(let Ce=0;Ce<A.length;Ce++){let Le=E[Ce],Pe=A[Ce];Le!==null&&Pe!==void 0&&Pe.update(Le,re,c||o)}F&&F(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}let ne=new Bp;ne.setAnimationLoop(le),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}},Ls=new qt,kM=new at;function VM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,bu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,Ls.copy(y),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),g.envMapRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Ls)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;i.uniformBlockBinding(v,y)}function c(v,M){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));let A=M.program;i.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let y=n.createBuffer(),A=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,P=y.length;E<P;E++){let L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,b=L.length;w<b;w++){let I=L[w];if(d(I,E,w,A)===!0){let N=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],W=0;for(let G=0;G<H.length;G++){let q=H[G],$=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+W,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,y,A){let E=v.value,P=M+"_"+y;if(A[P]===void 0)return typeof E=="number"||typeof E=="boolean"?A[P]=E:A[P]=E.clone(),!0;{let L=A[P];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[P]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(v){let M=v.uniforms,y=0,A=16;for(let P=0,L=M.length;P<L;P++){let w=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,I=w.length;b<I;b++){let N=w[b],H=Array.isArray(N.value)?N.value:[N.value];for(let W=0,G=H.length;W<G;W++){let q=H[W],$=_(q),Y=y%A,se=Y%$.boundary,ge=Y+se;y+=se,ge!==0&&A-ge<$.storage&&(y+=A-ge),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=$.storage}}}let E=y%A;return E>0&&(y+=A-E),v.__size=y,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Uc=class{constructor(e={}){let{canvas:t=rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=gt;let E=0,P=0,L=null,w=-1,b=null,I=new zt,N=new zt,H=null,W=new ke(0),G=0,q=t.width,$=t.height,Y=1,se=null,ge=null,ee=new zt(0,0,q,$),B=new zt(0,0,q,$),F=!1,le=new wr,ne=!1,Z=!1,re=new at,Ce=new S,Le=new zt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function it(){return L===null?Y:1}let D=i;function ce(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let z="webgl2";if(D=ce(z,T),D===null)throw ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,te,ie,xe,fe,Ee,Ye,Xe,C,x,R,O,K,V,_e,ae,me,pe,Q,be,Ne,ye,Se,ze;function U(){oe=new ov(D),oe.init(),ye=new OM(D,oe),te=new Qy(D,oe,e,ye),ie=new NM(D,oe),te.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),xe=new cv(D),fe=new bM,Ee=new FM(D,oe,ie,fe,te,ye,xe),Ye=new tv(y),Xe=new rv(y),C=new mx(D),Se=new Ky(D,C),x=new av(D,C,xe,Se),R=new uv(D,x,C,xe),Q=new hv(D,te,Ee),ae=new ev(fe),O=new MM(y,Ye,Xe,oe,te,Se,ae),K=new VM(y,fe),V=new wM,_e=new PM(oe),pe=new Jy(y,Ye,Xe,ie,R,d,l),me=new DM(y,R,te),ze=new GM(D,xe,te,ie),be=new $y(D,oe,xe),Ne=new lv(D,oe,xe),xe.programs=O.programs,y.capabilities=te,y.extensions=oe,y.properties=fe,y.renderLists=V,y.shadowMap=me,y.state=ie,y.info=xe}U();let Me=new ku(y,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(q,$,!1))},this.getSize=function(T){return T.set(q,$)},this.setSize=function(T,z,j=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,$=z,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(q*Y,$*Y).floor()},this.setDrawingBufferSize=function(T,z,j){q=T,$=z,Y=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ee)},this.setViewport=function(T,z,j,J){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,z,j,J),ie.viewport(I.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,z,j,J){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,z,j,J),ie.scissor(N.copy(B).multiplyScalar(Y).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){ie.setScissorTest(F=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let J=0;if(T){let k=!1;if(L!==null){let we=L.texture.format;k=we===tc||we===ec||we===Ql}if(k){let we=L.texture.type,Ie=we===si||we===$i||we===Dr||we===Nr||we===Jl||we===Kl,Fe=pe.getClearColor(),Ue=pe.getClearAlpha(),Ze=Fe.r,je=Fe.g,Ge=Fe.b;Ie?(m[0]=Ze,m[1]=je,m[2]=Ge,m[3]=Ue,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ze,_[1]=je,_[2]=Ge,_[3]=Ue,D.clearBufferiv(D.COLOR,0,_))}else J|=D.COLOR_BUFFER_BIT}z&&(J|=D.DEPTH_BUFFER_BIT),j&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),pe.dispose(),V.dispose(),_e.dispose(),fe.dispose(),Ye.dispose(),Xe.dispose(),R.dispose(),Se.dispose(),ze.dispose(),O.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ci),Me.removeEventListener("sessionend",Pd),hs.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=xe.autoReset,z=me.enabled,j=me.autoUpdate,J=me.needsUpdate,k=me.type;U(),xe.autoReset=T,me.enabled=z,me.autoUpdate=j,me.needsUpdate=J,me.type=k}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){let z=T.target;z.removeEventListener("dispose",he),Be(z)}function Be(T){$e(T),fe.remove(T)}function $e(T){let z=fe.get(T).programs;z!==void 0&&(z.forEach(function(j){O.releaseProgram(j)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,J,k,we){z===null&&(z=Pe);let Ie=k.isMesh&&k.matrixWorld.determinant()<0,Fe=Fg(T,z,j,J,k);ie.setMaterial(J,Ie);let Ue=j.index,Ze=1;if(J.wireframe===!0){if(Ue=x.getWireframeAttribute(j),Ue===void 0)return;Ze=2}let je=j.drawRange,Ge=j.attributes.position,ot=je.start*Ze,bt=(je.start+je.count)*Ze;we!==null&&(ot=Math.max(ot,we.start*Ze),bt=Math.min(bt,(we.start+we.count)*Ze)),Ue!==null?(ot=Math.max(ot,0),bt=Math.min(bt,Ue.count)):Ge!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,Ge.count));let Gt=bt-ot;if(Gt<0||Gt===1/0)return;Se.setup(k,J,Fe,j,Ue);let Rt,wt=be;if(Ue!==null&&(Rt=C.get(Ue),wt=Ne,wt.setIndex(Rt)),k.isMesh)J.wireframe===!0?(ie.setLineWidth(J.wireframeLinewidth*it()),wt.setMode(D.LINES)):wt.setMode(D.TRIANGLES);else if(k.isLine){let We=J.linewidth;We===void 0&&(We=1),ie.setLineWidth(We*it()),k.isLineSegments?wt.setMode(D.LINES):k.isLineLoop?wt.setMode(D.LINE_LOOP):wt.setMode(D.LINE_STRIP)}else k.isPoints?wt.setMode(D.POINTS):k.isSprite&&wt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let We=k._multiDrawStarts,Ft=k._multiDrawCounts,ht=k._multiDrawCount,In=Ue?C.get(Ue).bytesPerElement:1,Xs=fe.get(J).currentProgram.getUniforms();for(let Ln=0;Ln<ht;Ln++)Xs.setValue(D,"_gl_DrawID",Ln),wt.render(We[Ln]/In,Ft[Ln])}else if(k.isInstancedMesh)wt.renderInstances(ot,Gt,k.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ft=Math.min(j.instanceCount,We);wt.renderInstances(ot,Gt,Ft)}else wt.render(ot,Gt)};function At(T,z,j){T.transparent===!0&&T.side===Yt&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Ia(T,z,j),T.side=ti,T.needsUpdate=!0,Ia(T,z,j),T.side=Yt):Ia(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),p=_e.get(j),p.init(z),M.push(p),j.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==j&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let we=k.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){let Fe=we[Ie];At(Fe,j,k),J.add(Fe)}else At(we,j,k),J.add(we)}),p=M.pop(),J},this.compileAsync=function(T,z,j=null){let J=this.compile(T,z,j);return new Promise(k=>{function we(){if(J.forEach(function(Ie){fe.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){k(T);return}setTimeout(we,10)}oe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let mt=null;function Si(T){mt&&mt(T)}function ci(){hs.stop()}function Pd(){hs.start()}let hs=new Bp;hs.setAnimationLoop(Si),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(T){mt=T,Me.setAnimationLoop(T),T===null?hs.stop():hs.start()},Me.addEventListener("sessionstart",ci),Me.addEventListener("sessionend",Pd),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,L),p=_e.get(T,M.length),p.init(z),M.push(p),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),le.setFromProjectionMatrix(re,ei,z.reversedDepth),Z=this.localClippingEnabled,ne=ae.init(this.clippingPlanes,Z),g=V.get(T,v.length),g.init(),v.push(g),Me.enabled===!0&&Me.isPresenting===!0){let we=y.xr.getDepthSensingMesh();we!==null&&_h(we,z,-1/0,y.sortObjects)}_h(T,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(se,ge),He=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,He&&pe.addToRenderList(g,T),this.info.render.frame++,ne===!0&&ae.beginShadows();let j=p.state.shadowsArray;me.render(j,T,z),ne===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,k=g.transmissive;if(p.setupLights(),z.isArrayCamera){let we=z.cameras;if(k.length>0)for(let Ie=0,Fe=we.length;Ie<Fe;Ie++){let Ue=we[Ie];Ld(J,k,T,Ue)}He&&pe.render(T);for(let Ie=0,Fe=we.length;Ie<Fe;Ie++){let Ue=we[Ie];Id(g,T,Ue,Ue.viewport)}}else k.length>0&&Ld(J,k,T,z),He&&pe.render(T),Id(g,T,z);L!==null&&P===0&&(Ee.updateMultisampleRenderTarget(L),Ee.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(y,T,z),Se.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function _h(T,z,j,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){J&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);let Ie=R.update(T),Fe=T.material;Fe.visible&&g.push(T,Ie,Fe,j,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){let Ie=R.update(T),Fe=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Le.copy(Ie.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(Fe)){let Ue=Ie.groups;for(let Ze=0,je=Ue.length;Ze<je;Ze++){let Ge=Ue[Ze],ot=Fe[Ge.materialIndex];ot&&ot.visible&&g.push(T,Ie,ot,j,Le.z,Ge)}}else Fe.visible&&g.push(T,Ie,Fe,j,Le.z,null)}}let we=T.children;for(let Ie=0,Fe=we.length;Ie<Fe;Ie++)_h(we[Ie],z,j,J)}function Id(T,z,j,J){let k=T.opaque,we=T.transmissive,Ie=T.transparent;p.setupLightsView(j),ne===!0&&ae.setGlobalState(y.clippingPlanes,j),J&&ie.viewport(I.copy(J)),k.length>0&&Pa(k,z,j),we.length>0&&Pa(we,z,j),Ie.length>0&&Pa(Ie,z,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ld(T,z,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new fi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Ur:si,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let we=p.state.transmissionRenderTarget[J.id],Ie=J.viewport||I;we.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);let Fe=y.getRenderTarget(),Ue=y.getActiveCubeFace(),Ze=y.getActiveMipmapLevel();y.setRenderTarget(we),y.getClearColor(W),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),He&&pe.render(j);let je=y.toneMapping;y.toneMapping=Ui;let Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ne===!0&&ae.setGlobalState(y.clippingPlanes,J),Pa(T,j,J),Ee.updateMultisampleRenderTarget(we),Ee.updateRenderTargetMipmap(we),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let bt=0,Gt=z.length;bt<Gt;bt++){let Rt=z[bt],wt=Rt.object,We=Rt.geometry,Ft=Rt.material,ht=Rt.group;if(Ft.side===Yt&&wt.layers.test(J.layers)){let In=Ft.side;Ft.side=on,Ft.needsUpdate=!0,Dd(wt,j,J,We,Ft,ht),Ft.side=In,Ft.needsUpdate=!0,ot=!0}}ot===!0&&(Ee.updateMultisampleRenderTarget(we),Ee.updateRenderTargetMipmap(we))}y.setRenderTarget(Fe,Ue,Ze),y.setClearColor(W,G),Ge!==void 0&&(J.viewport=Ge),y.toneMapping=je}function Pa(T,z,j){let J=z.isScene===!0?z.overrideMaterial:null;for(let k=0,we=T.length;k<we;k++){let Ie=T[k],Fe=Ie.object,Ue=Ie.geometry,Ze=Ie.group,je=Ie.material;je.allowOverride===!0&&J!==null&&(je=J),Fe.layers.test(j.layers)&&Dd(Fe,z,j,Ue,je,Ze)}}function Dd(T,z,j,J,k,we){T.onBeforeRender(y,z,j,J,k,we),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,z,j,J,T,we),k.transparent===!0&&k.side===Yt&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,y.renderBufferDirect(j,z,J,k,T,we),k.side=ti,k.needsUpdate=!0,y.renderBufferDirect(j,z,J,k,T,we),k.side=Yt):y.renderBufferDirect(j,z,J,k,T,we),T.onAfterRender(y,z,j,J,k,we)}function Ia(T,z,j){z.isScene!==!0&&(z=Pe);let J=fe.get(T),k=p.state.lights,we=p.state.shadowsArray,Ie=k.state.version,Fe=O.getParameters(T,k.state,we,z,j),Ue=O.getProgramCacheKey(Fe),Ze=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?Xe:Ye).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",he),Ze=new Map,J.programs=Ze);let je=Ze.get(Ue);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Ie)return Nd(T,Fe),je}else Fe.uniforms=O.getUniforms(T),T.onBeforeCompile(Fe,y),je=O.acquireProgram(Fe,Ue),Ze.set(Ue,je),J.uniforms=Fe.uniforms;let Ge=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=ae.uniform),Nd(T,Fe),J.needsLights=Bg(T),J.lightsStateVersion=Ie,J.needsLights&&(Ge.ambientLightColor.value=k.state.ambient,Ge.lightProbe.value=k.state.probe,Ge.directionalLights.value=k.state.directional,Ge.directionalLightShadows.value=k.state.directionalShadow,Ge.spotLights.value=k.state.spot,Ge.spotLightShadows.value=k.state.spotShadow,Ge.rectAreaLights.value=k.state.rectArea,Ge.ltc_1.value=k.state.rectAreaLTC1,Ge.ltc_2.value=k.state.rectAreaLTC2,Ge.pointLights.value=k.state.point,Ge.pointLightShadows.value=k.state.pointShadow,Ge.hemisphereLights.value=k.state.hemi,Ge.directionalShadowMap.value=k.state.directionalShadowMap,Ge.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ge.spotShadowMap.value=k.state.spotShadowMap,Ge.spotLightMatrix.value=k.state.spotLightMatrix,Ge.spotLightMap.value=k.state.spotLightMap,Ge.pointShadowMap.value=k.state.pointShadowMap,Ge.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function Ud(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=zr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Nd(T,z){let j=fe.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Fg(T,z,j,J,k){z.isScene!==!0&&(z=Pe),Ee.resetTextureUnits();let we=z.fog,Ie=J.isMeshStandardMaterial?z.environment:null,Fe=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ys,Ue=(J.isMeshStandardMaterial?Xe:Ye).get(J.envMap||Ie),Ze=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,bt=!!j.morphAttributes.color,Gt=Ui;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,We=fe.get(J),Ft=p.state.lights;if(ne===!0&&(Z===!0||T!==b)){let _n=T===b&&J.id===w;ae.setState(J,T,_n)}let ht=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ft.state.version||We.outputColorSpace!==Fe||k.isBatchedMesh&&We.batching===!1||!k.isBatchedMesh&&We.batching===!0||k.isBatchedMesh&&We.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&We.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&We.instancing===!1||!k.isInstancedMesh&&We.instancing===!0||k.isSkinnedMesh&&We.skinning===!1||!k.isSkinnedMesh&&We.skinning===!0||k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&We.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&We.instancingMorph===!1&&k.morphTexture!==null||We.envMap!==Ue||J.fog===!0&&We.fog!==we||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ae.numPlanes||We.numIntersection!==ae.numIntersection)||We.vertexAlphas!==Ze||We.vertexTangents!==je||We.morphTargets!==Ge||We.morphNormals!==ot||We.morphColors!==bt||We.toneMapping!==Gt||We.morphTargetsCount!==wt)&&(ht=!0):(ht=!0,We.__version=J.version);let In=We.currentProgram;ht===!0&&(In=Ia(J,z,k));let Xs=!1,Ln=!1,so=!1,Ot=In.getUniforms(),zn=We.uniforms;if(ie.useProgram(In.program)&&(Xs=!0,Ln=!0,so=!0),J.id!==w&&(w=J.id,Ln=!0),Xs||b!==T){ie.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(D,"projectionMatrix",T.projectionMatrix),Ot.setValue(D,"viewMatrix",T.matrixWorldInverse);let Mn=Ot.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Ce.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ln=!0,so=!0)}if(k.isSkinnedMesh){Ot.setOptional(D,k,"bindMatrix"),Ot.setOptional(D,k,"bindMatrixInverse");let _n=k.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ot.setValue(D,"boneTexture",_n.boneTexture,Ee))}k.isBatchedMesh&&(Ot.setOptional(D,k,"batchingTexture"),Ot.setValue(D,"batchingTexture",k._matricesTexture,Ee),Ot.setOptional(D,k,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",k._indirectTexture,Ee),Ot.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",k._colorsTexture,Ee));let kn=j.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Q.update(k,j,In),(Ln||We.receiveShadow!==k.receiveShadow)&&(We.receiveShadow=k.receiveShadow,Ot.setValue(D,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(zn.envMap.value=Ue,zn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(zn.envMapIntensity.value=z.environmentIntensity),Ln&&(Ot.setValue(D,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Og(zn,so),we&&J.fog===!0&&K.refreshFogUniforms(zn,we),K.refreshMaterialUniforms(zn,J,Y,$,p.state.transmissionRenderTarget[T.id]),zr.upload(D,Ud(We),zn,Ee)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zr.upload(D,Ud(We),zn,Ee),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(D,"center",k.center),Ot.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ot.setValue(D,"normalMatrix",k.normalMatrix),Ot.setValue(D,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let _n=J.uniformsGroups;for(let Mn=0,yh=_n.length;Mn<yh;Mn++){let us=_n[Mn];ze.update(us,In),ze.bind(us,In)}}return In}function Og(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Bg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,z,j){let J=fe.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),fe.get(T.texture).__webglTexture=z,fe.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let j=fe.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};let zg=D.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){L=T,E=z,P=j;let J=!0,k=null,we=!1,Ie=!1;if(T){let Ue=fe.get(T);if(Ue.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Ue.__webglFramebuffer===void 0)Ee.setupRenderTarget(T);else if(Ue.__hasExternalTextures)Ee.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(Ue.__boundDepthTexture!==Ge){if(Ge!==null&&fe.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(T)}}let Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);let je=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[z])?k=je[z][j]:k=je[z],we=!0):T.samples>0&&Ee.useMultisampledRTT(T)===!1?k=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?k=je[j]:k=je,I.copy(T.viewport),N.copy(T.scissor),H=T.scissorTest}else I.copy(ee).multiplyScalar(Y).floor(),N.copy(B).multiplyScalar(Y).floor(),H=F;if(j!==0&&(k=zg),ie.bindFramebuffer(D.FRAMEBUFFER,k)&&J&&ie.drawBuffers(T,k),ie.viewport(I),ie.scissor(N),ie.setScissorTest(H),we){let Ue=fe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,j)}else if(Ie){let Ue=z;for(let Ze=0;Ze<T.textures.length;Ze++){let je=fe.get(T.textures[Ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ze,je.__webglTexture,j,Ue)}}else if(T!==null&&j!==0){let Ue=fe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,j)}w=-1},this.readRenderTargetPixels=function(T,z,j,J,k,we,Ie,Fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){ie.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let Ze=T.textures[Fe],je=Ze.format,Ge=Ze.type;if(!te.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&j>=0&&j<=T.height-k&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(z,j,J,k,ye.convert(je),ye.convert(Ge),we))}finally{let Ze=L!==null?fe.get(L).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,J,k,we,Ie,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(z>=0&&z<=T.width-J&&j>=0&&j<=T.height-k){ie.bindFramebuffer(D.FRAMEBUFFER,Ue);let Ze=T.textures[Fe],je=Ze.format,Ge=Ze.type;if(!te.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ot),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Fe),D.readPixels(z,j,J,k,ye.convert(je),ye.convert(Ge),0);let bt=L!==null?fe.get(L).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,bt);let Gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await op(D,Gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ot),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(ot),D.deleteSync(Gt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){let J=Math.pow(2,-j),k=Math.floor(T.image.width*J),we=Math.floor(T.image.height*J),Ie=z!==null?z.x:0,Fe=z!==null?z.y:0;Ee.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Ie,Fe,k,we),ie.unbindTexture()};let kg=D.createFramebuffer(),Vg=D.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,J=null,k=0,we=null){we===null&&(k!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=k,k=0):we=0);let Ie,Fe,Ue,Ze,je,Ge,ot,bt,Gt,Rt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(j!==null)Ie=j.max.x-j.min.x,Fe=j.max.y-j.min.y,Ue=j.isBox3?j.max.z-j.min.z:1,Ze=j.min.x,je=j.min.y,Ge=j.isBox3?j.min.z:0;else{let kn=Math.pow(2,-k);Ie=Math.floor(Rt.width*kn),Fe=Math.floor(Rt.height*kn),T.isDataArrayTexture?Ue=Rt.depth:T.isData3DTexture?Ue=Math.floor(Rt.depth*kn):Ue=1,Ze=0,je=0,Ge=0}J!==null?(ot=J.x,bt=J.y,Gt=J.z):(ot=0,bt=0,Gt=0);let wt=ye.convert(z.format),We=ye.convert(z.type),Ft;z.isData3DTexture?(Ee.setTexture3D(z,0),Ft=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ee.setTexture2DArray(z,0),Ft=D.TEXTURE_2D_ARRAY):(Ee.setTexture2D(z,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let ht=D.getParameter(D.UNPACK_ROW_LENGTH),In=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xs=D.getParameter(D.UNPACK_SKIP_PIXELS),Ln=D.getParameter(D.UNPACK_SKIP_ROWS),so=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let Ot=T.isDataArrayTexture||T.isData3DTexture,zn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let kn=fe.get(T),_n=fe.get(z),Mn=fe.get(kn.__renderTarget),yh=fe.get(_n.__renderTarget);ie.bindFramebuffer(D.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,yh.__webglFramebuffer);for(let us=0;us<Ue;us++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,k,Ge+us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(z).__webglTexture,we,Gt+us)),D.blitFramebuffer(Ze,je,Ie,Fe,ot,bt,Ie,Fe,D.DEPTH_BUFFER_BIT,D.NEAREST);ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||fe.has(T)){let kn=fe.get(T),_n=fe.get(z);ie.bindFramebuffer(D.READ_FRAMEBUFFER,kg),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vg);for(let Mn=0;Mn<Ue;Mn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kn.__webglTexture,k,Ge+Mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kn.__webglTexture,k),zn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,we,Gt+Mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,we),k!==0?D.blitFramebuffer(Ze,je,Ie,Fe,ot,bt,Ie,Fe,D.COLOR_BUFFER_BIT,D.NEAREST):zn?D.copyTexSubImage3D(Ft,we,ot,bt,Gt+Mn,Ze,je,Ie,Fe):D.copyTexSubImage2D(Ft,we,ot,bt,Ze,je,Ie,Fe);ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ft,we,ot,bt,Gt,Ie,Fe,Ue,wt,We,Rt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,we,ot,bt,Gt,Ie,Fe,Ue,wt,Rt.data):D.texSubImage3D(Ft,we,ot,bt,Gt,Ie,Fe,Ue,wt,We,Rt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,ot,bt,Ie,Fe,wt,We,Rt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,ot,bt,Rt.width,Rt.height,wt,Rt.data):D.texSubImage2D(D.TEXTURE_2D,we,ot,bt,Ie,Fe,wt,We,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,In),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,so),we===0&&z.generateMipmaps&&D.generateMipmap(Ft),ie.unbindTexture()},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&Ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ee.setTextureCube(T,0):T.isData3DTexture?Ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ee.setTexture2DArray(T,0):Ee.setTexture2D(T,0),ie.unbindTexture()},this.resetState=function(){E=0,P=0,L=null,ie.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Gu=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var Iw=Gu.length-1,Hp=Math.min(...Gu.map(n=>n[1])),Wp=Math.max(...Gu.map(n=>n[1])),Lw=new S(0,0,(Hp+Wp)/2),Xp=new S(.047,.027,(Wp-Hp)/2);var Nw=new ut,Fw=new S,Ow=new S,Bw=new at;var zw=new S,kw=new S;var Vw=new S;var Gw=new S,Hw=new S,Ww=new S,Xw=new bn,qw=new S;function la(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let m=0;m<t.count;m++){let _=new S().fromBufferAttribute(t,m),g=_.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(_))}for(let m=0;m<(n.index?.count??t.count);m+=3){let _=y=>new S().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=_(m),p=_(m+1),v=_(m+2),M=new bn(g,p,v).getNormal(new S);M.lengthSq()>.1&&s.push({a:g,b:p,c:v,n:M})}let o=e||Math.max(...i.map(m=>m.length())),{x:a,y:l,z:c}=new Zt().setFromPoints(i).getSize(new S),h=Math.max(1e-4,e**2*.4),u=e?new S().setScalar(1/h):new S(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),d=m=>{let _=[];for(let g of m)g.lengthSq()>.5&&!_.some(p=>Math.abs(p.dot(g))>.9999)&&_.push(g);return _};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:u,thickness:f,normals:e?[]:d(s.map(m=>m.n)),edges:e?[]:d(s.flatMap(m=>[new S().subVectors(m.b,m.a).normalize(),new S().subVectors(m.c,m.b).normalize(),new S().subVectors(m.a,m.c).normalize()]))}}var Yw=new S,Zw=new S,jw=new S,Jw=new S,Kw=new S;function Gr(n){return la(new qe(n.x*2,n.y*2,n.z*2))}var $w=new S;var qp=la(new Wn(1,0).scale(...Xp)),Qw={mesh:{position:new S,quaternion:new ut},shape:qp,radius:qp.radius,precise:!0};var eT=new S,tT=new S,nT=new S,iT=new ut,sT=new ut,rT=new ut;var oT=new S,aT=new S,lT=new S,cT=new S;var hT=new S;var uT=new S,dT=new S,fT=new S,pT=new S,mT=new S,gT=new S,xT=new S;var _T={mesh:{position:null,quaternion:new ut},shape:{sphereRadius:0,normals:[],edges:[]}};function Fc(n,e,t){let i=new qe(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,h=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Yp(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let h=t.getX(c)*i,u=t.getY(c)*i;t.setXY(c,h*r-u*o+a,h*o+u*r+l)}return t.needsUpdate=!0,n}function Zp(n){switch(n){case"sphere":return new On(.5,24,16);case"cylinder":return new pt(.5,.5,1,24);case"cone":return new Pi(.5,1,24);case"torus":return new vn(.34,.14,12,32);case"capsule":return new vs(.32,.36,8,16);default:return new qe(1,1,1)}}function ca(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Qi=(n,e,t)=>n+(e-n)*t,Hr=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Oc(n,e){let t=Math.floor(n),i=Math.floor(e),s=Hr(0,1,n-t),r=Hr(0,1,e-i);return Qi(Qi(ca(t,i),ca(t+1,i),s),Qi(ca(t,i+1),ca(t+1,i+1),s),r)}function jp(n,e){return Oc(n,e)*.54+Oc(n*2.07+3.4,e*2.07-6.1)*.26+Oc(n*4.2+9,e*4.2)*.13+Oc(n*8.6,e*8.6-13)*.07}function Jp(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),f=u**.54,d=r.map((m,_)=>Qi(m,o[_],f));for(let m=0;m<1024;m++){let _=4*(m+l*1024),g=0,p=0,v=0;if(c>.025)if(n){let y=ca(m+792,l+677);y>.9988&&(v=(y-.9988)*49e3*Hr(.09,.3,c))}else{let[y,A]=s[m],E=2.8*h/(c+.16),P=y*E+3.6,L=A*E-8.1,w=jp(P,L),b=jp(P-.12,L-.09);g=Hr(.49,.66,w)*Hr(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-b)*5+(w-.54)*.8))}let M=n?1:Qi(.94,1,Hr(.05,.34,c));i[_]=Qi(d[0],(139+115*p)*M,g)+v,i[_+1]=Qi(d[1],(154+100*p)*M,g)+v*.94,i[_+2]=Qi(d[2],(178+77*p)*M,g)+v*.86,i[_+3]=255}}let a=new pi(i,1024,512,En);return a.colorSpace=gt,a.wrapS=Gn,a.magFilter=rn,a.minFilter=Tn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Kp(){return{day:Jp(!1),night:Jp(!0)}}var kt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),$p=kt(-24,24,-51,7),Qp=34521,em={x:0,y:0,z:3},Bc={x:.05,y:1.16,z:5.9},Wr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:kt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:kt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:kt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:kt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:kt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:kt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:kt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:kt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:kt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:kt(9,23,-48,-37),sign:[16,-38.2]}},bT=[kt(-9,-6,-51,7),kt(6,9,-51,7),kt(-24,24,-8,-5),kt(-24,24,-27,-23),kt(9,23,-37,-34)],tm=[{name:"Glace",bounds:Wr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Wr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:kt(-9,9,-51,7)},{name:"Sol ouest",bounds:kt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:kt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:kt(-24,-23,-51,7)},{name:"Sol est",bounds:kt(9,23,-51,-48)},{name:"Sol est",bounds:kt(9,23,-37,7)},{name:"Bordure est",bounds:kt(23,24,-51,7)}],Xr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},qr=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],nm=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Hu={x:16,z:-31},Wu={x:16,y:1.52,z:-21},zc={x:-19.4,y:.68,z:-3.25},im=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),sm={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Wu.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function kc(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new gi(i);return s.colorSpace=gt,s}function rm(n,e){let{day:t,night:i}=Kp(),s=new de(new On(180,40,20),new Wt({map:t,side:on,fog:!1,toneMapped:!1}));n.add(s);let r=kc(128,128,(x,R)=>{let O=x.createRadialGradient(R/2,R/2,0,R/2,R/2,R/2);O.addColorStop(0,"#fff8df"),O.addColorStop(.12,"#fff3bd"),O.addColorStop(.18,"rgba(255,225,144,.40)"),O.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=O,x.fillRect(0,0,R,R)}),o=new Io(new br({map:r,blending:Qo,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=Lr,a.needsUpdate=!0;let l=new kr(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ws("#daeaff","#88724c",2.25),h=new Ts("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(c,h,h.target);let u=new S,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],d=0;function m(x){d=f[x]?x:0;let R=f[d];c.color.set(R.fill),c.groundColor.set(R.ground),c.intensity=R.hemi,h.color.set(R.sun),h.intensity=R.power,u.set(...R.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(R.sun),o.material.opacity=R.glow,s.material.map=d===2?i:t,s.material.color.set(R.sky),n.fog.color.set(R.fog),n.background.set(R.fog),n.environmentIntensity=g*[1,.56,.09][d]}function _(x){if(!h.castShadow)return;let R=h.target.position,O=Math.round(x.x/4)*4,K=Math.round(x.y/4)*4,V=Math.round(x.z/4)*4;R.x===O&&R.y===K&&R.z===V||(R.set(O,K,V),h.position.copy(R).add(u))}let g=0;n.background=new ke(f[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function v(x,R,O){let[,K,V]=p[R],_e=512;x.save(),x.scale(O/512,O/512),x.fillStyle=K,x.fillRect(0,0,_e,_e);let ae=R+19;function me(){return ae=Math.imul(ae,1664525)+1013904223>>>0,ae/4294967296}if(x.fillStyle=V,R===16){for(let pe=0;pe<16;pe++)for(let Q=0;Q<16;Q++)(Q+pe)%2===0&&x.fillRect(Q*32,pe*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(R)){let pe=R===15?32:64;x.globalAlpha=.48;for(let Q=0;Q<_e;Q+=pe){x.fillRect(0,Q,_e,R===8?3:2);for(let be=-pe;be<_e;be+=pe)x.fillRect(be+Q/pe%2*(R===2?pe/2:0),Q,2,pe)}}else if([4,5,6,7,10,11,12].includes(R)){let pe=R===5?38:R===7?64:18;for(let Q=0;Q<pe;Q++){x.strokeStyle=V,x.globalAlpha=.08+me()*.22,x.lineWidth=R===5?1+me()*8:1+me()*4;let be=me()*_e,Ne=R===5?.018:.009;x.beginPath();for(let ye=0;ye<=_e;ye+=8){let Se=be+Math.sin(ye*Ne+Q)*(R===6||R===7?4:12+Q%5*3)+(R===4?ye*.28:0);ye===0?x.moveTo(ye,Se):x.lineTo(ye,Se)}x.stroke()}}else{x.globalAlpha=.27;for(let pe=0;pe<120;pe++){let Q=me()*_e,be=me()*_e,Ne=2+me()*6;x.beginPath(),x.arc(Q,be,Ne,0,Math.PI*2),x.fill()}}if(R!==16)for(let pe=0;pe<4400;pe++)x.globalAlpha=.05+me()*.1,x.fillStyle=me()>.5?V:"#222324",x.fillRect(me()*_e,me()*_e,1+me()*4,1+me()*3);x.restore()}let M=new Set([0,2,4,5,8,15,16]),y=p.map(([x,R,O,K,V,_e],ae)=>{let me=M.has(ae)?512:256,pe=kc(me,me,be=>v(be,ae,me));pe.wrapS=pe.wrapT=Gn;let Q=new nn({map:pe,roughness:K,metalness:V,flatShading:!0,opacity:_e,transparent:_e<1,depthWrite:_e===1});return Q.name=x,Q}),A=y.map(x=>x.map.image),E=512,P=y.map(x=>new pn({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),L={value:0},w={value:.24},b={value:null},I={value:0};function N(){b.value?.dispose(),b.value=kc(512,512,(x,R)=>{x.fillStyle="#ffffff",x.fillRect(0,0,R,R);let O=R/52,K=R/64;for(let V of H){if(!V.position||!V.half||V.position.y+V.half.y<.22)continue;let _e=(V.position.x+26)*O,ae=(V.position.z+54)*K,me=Math.min(55,V.half.x*O+5),pe=Math.min(72,V.half.z*K+6);x.save(),x.translate(_e+V.half.y*O*.2,ae+V.half.y*K*.24),x.scale(me,pe);let Q=x.createRadialGradient(0,0,.15,0,0,1);Q.addColorStop(0,"rgba(22,37,65,.54)"),Q.addColorStop(.58,"rgba(36,54,76,.29)"),Q.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=Q,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[...y,...P])x.onBeforeCompile=R=>{R.uniforms.uFocusAmount=L,R.uniforms.uFocusRadius=w,R.uniforms.uLabLightmap=b,R.uniforms.uLabBakedStrength=I,R.vertexShader=`varying vec3 vLabPosition;
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let H=[],W=[];function G(x,R,O,K,V,_e,ae,me=0,pe=0,Q=1,be=1,Ne=!1){let ye=new de(Ne?new qe(V,_e,ae):Fc(V,_e,ae),y[me]);ye.position.set(R,O,K),ye.rotation.x=pe,ye.receiveShadow=!0,ye.castShadow=!0,n.add(ye);let Se=new S(V/2,_e/2,ae/2),ze={mesh:ye,position:ye.position,quaternion:ye.quaternion,half:Se,min:Se.clone().negate(),friction:Q,gravity:be,name:x,type:me,shape:Gr(Se)};return H.push(ze),ze}let q=tm.map(({name:x,bounds:R,type:O=0,friction:K=.78,gravity:V=1})=>{let{xMin:_e,xMax:ae,zMin:me,zMax:pe}=R;return G(x,(_e+ae)/2,-.33,(me+pe)/2,ae-_e,.66,pe-me,O,0,K,V)});for(let x of Object.values(sm))for(let R of x)G(...R);let{xMin:$,xMax:Y,zMin:se,zMax:ge}=$p;G("But\xE9e arri\xE8re",0,1.35,se+.4,Y-$,2.7,.6,2),G("But\xE9e ouest",$+.3,1.05,(se+ge)/2,.6,2.1,ge-se,2),G("But\xE9e est",Y-.3,1.05,(se+ge)/2,.6,2.1,ge-se,2);let{xMin:ee,xMax:B,zMin:F,zMax:le}=Wr.hills.bounds,ne=B-ee,Z=le-F,re=16,Ce=64,Le=new fn(ne,Z,re,Ce).rotateX(-Math.PI/2).translate(ee+ne/2,0,F+Z/2),Pe=Le.attributes.uv;for(let x=0;x<Pe.count;x++)Pe.setXY(x,Pe.getX(x)*ne/2.6,Pe.getY(x)*Z/2.6);let He=Le.attributes.position,it;function D(x){if(it===x)return;it=x;let R=it*.017;for(let O=0;O<He.count;O++){let K=He.getX(O),V=He.getZ(O),_e=Math.sin(Math.PI*Ve.clamp((K-ee)/ne,0,1)),ae=Math.min(1,(V-F)*.48,(le-V)*.48),me=.93+.56*Math.sin(V*.36+R)+.32*Math.cos(K*.67+V*.26+R*1.4)+.19*Math.sin(V*.81+R*.67);He.setY(O,Math.max(0,_e*ae*me))}He.needsUpdate=!0,Le.computeVertexNormals(),Le.computeBoundingSphere()}D(Qp);let ce=new de(Le,y[3]);ce.receiveShadow=ce.castShadow=!0,n.add(ce);let oe=(x,R)=>{let O=Ve.clamp((x-ee)/ne*re,0,re-1e-6),K=Ve.clamp((R-F)/Z*Ce,0,Ce-1e-6),V=Math.floor(O),_e=Math.floor(K),ae=O-V,me=K-_e,pe=re+1,Q=_e*pe+V,be=He.getY(Q),Ne=He.getY(Q+1),ye=He.getY(Q+pe),Se=He.getY(Q+pe+1);return ae+me<=1?be+(Ne-be)*ae+(ye-be)*me:Se+(ye-Se)*(1-ae)+(Ne-Se)*(1-me)};H.push({heightfield:!0,mesh:ce,height:oe,...Wr.hills.bounds,friction:.81,gravity:1});function te(x,R,O,K,V=1.45){let _e=kc(384,72,(me,pe,Q)=>{me.fillStyle="#202a32",me.fillRect(0,0,pe,Q),me.fillStyle=K,me.font="bold 31px system-ui",me.textAlign="center",me.fillText(x,pe/2,48,pe-20)}),ae=new de(new fn(3.2,.6),new Wt({map:_e,side:Yt}));ae.position.set(R,V,O),n.add(ae),W.push(ae)}for(let x of Object.values(Wr)){te(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:R,xMax:O,zMin:K,zMax:V}=x.bounds,_e=new Uo(new rt().setFromPoints([new S(R,.025,K),new S(O,.025,K),new S(O,.025,V),new S(R,.025,V)]),new mi({color:x.color,transparent:!0,opacity:.72}));n.add(_e),W.push(_e)}te("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),te("MURS HAUTS",3,-31,"#e8d2ff"),te("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ie=new nn({color:"#c8e6ed",metalness:1,roughness:.16}),xe=new de(new Fn(.54,2),ie);xe.position.set(zc.x,zc.y,zc.z),xe.castShadow=!0,n.add(xe);let fe=p.map((x,R)=>{let{x:O,z:K}=im(R);return G("\xC9chantillon "+p[R][0],O,.325,K,.65,.65,.65,R,0,1,1,!0).mesh}),Ee=new tn(1,12).rotateX(-Math.PI/2),Ye=new Wt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Xe(x){let R=new de(Ee,Ye);return R.scale.setScalar(x),n.add(R),R}function C(x,R,O,K,V,_e,ae,me){let pe=R>=3;e.shadowMap.enabled=pe,h.castShadow=pe,Ye.opacity=R===2?.17:.11,I.value=me?.38+O*.04:0;let Q=R>=9?2048:R>=6?1024:R>=4?512:256;h.shadow.intensity=.45+R*.055,h.shadow.radius=.65+R*.12;let be=13+R*1.2;Object.assign(h.shadow.camera,{left:-be,right:be,top:be,bottom:-be}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==Q&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(Q,Q)),o.visible=V,ae!==E&&(E=ae,y.forEach((ye,Se)=>{let ze=ye.userData.texture??ye.map,U=M.has(Se)?ae:Math.min(256,ae);if(ze.image.width===U)return;let Me=document.createElement("canvas");Me.width=Me.height=U;let Ae=Me.getContext("2d");U>512?v(Ae,Se,U):Ae.drawImage(A[Se],0,0,U,U);let De=new gi(Me);De.colorSpace=ze.colorSpace,De.wrapS=ze.wrapS,De.wrapT=ze.wrapT,De.repeat.copy(ze.repeat);for(let ve of[ye,P[Se]])ve.userData.texture=De,ve.map=De,ve.needsUpdate=!0;ze.dispose()}));let Ne=x>=4;for(let ye of H)ye.mesh?.isMesh&&!ye.zone&&(ye.mesh.material=Ne?y[ye.type]:P[ye.type]);ce.material=Ne?y[3]:P[3];for(let ye=0;ye<fe.length;ye++)fe[ye].material=Ne?y[ye]:P[ye];y.forEach((ye,Se)=>{for(let ze of[ye,P[Se]])ze.userData.texture||(ze.userData.texture=ze.map),ze.map=_e?ze.userData.texture:null,ze.color.set(_e?"#ffffff":p[Se][1]),ze.needsUpdate=!0}),g=K?.21+O*.067:0,ie.metalness=K?.95:.1,ie.roughness=K?.13:.46,s.visible=x>=2,m(d)}return{boxes:H,floors:q,probe:xe,display:fe,visual:C,shadow:Xe,setTimeOfDay:m,centerShadows:_,get hillSeed(){return it},setHillSeed:D,bakeLightmap:N,mapMaterial:(x,R)=>R>=4?y[x]:P[x],builtObjects:[...H.map(x=>x.mesh).filter(x=>x?.isObject3D),xe,...W],materials:[...y,...P],focus(x,R,O){L.value=x?R*.75:0,w.value=.07+O*.058}}}function om(n,e,t){let i=new pn({color:16777215,vertexColors:!0,flatShading:!0}),s=new pt(.16,.25,3.15,9,12),r=s.attributes.position,o=new ke,a=[];for(let ee=0;ee<r.count;ee++){let B=Math.round((r.getY(ee)+1.575)/3.15*12),F=Math.floor((Math.atan2(r.getX(ee),r.getZ(ee))+Math.PI)*1.43);o.setHSL(.084+B*.002,.35,.35+B%3*.032+F%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Oe(a,3));let l=new en;l.position.set(Hu.x,0,Hu.z),l.rotation.z=-.14,n.add(l);let c=new de(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function h(ee,B,F=.85){let le=ee.getWorldPosition(new S),ne=ee.getWorldQuaternion(new ut);e.push({half:B,min:B.clone().negate(),position:le,quaternion:ne,mesh:{position:le,quaternion:ne},shape:Gr(B),friction:F,gravity:1})}for(let ee=0;ee<4;ee++){let B=new Ct;B.position.y=(ee+.5)*3.15/4,l.add(B);let F=.237-ee*.022;h(B,new S(F,.398,F))}let u=[],f=[],d=3.14;function m(ee,B,F,le){u.push(...ee,...B,...F),o.setHSL(.25+le*.043,.54,.28+le*.17);for(let ne=0;ne<3;ne++)f.push(o.r,o.g,o.b)}for(let ee=0;ee<10;ee++){let le=function(ne,Z){let re=ne*F;return[Math.cos(B)*re-Math.sin(B)*Z,d+Math.sin(ne*Math.PI)*.38-ne*ne*.54+ee%3*.055,Math.sin(B)*re+Math.cos(B)*Z]},B=ee*2.39996,F=1.35+ee%4*.2;for(let ne=0;ne<7;ne++){let Z=ne/7,re=(ne+1)/7,Ce=.285*Math.sin(Math.PI*Z)**.7,Le=.285*Math.sin(Math.PI*re)**.7;for(let Pe of[-1,1]){let He=le(Z,Ce*Pe),it=le(re,Le*Pe);He[1]-=.065,it[1]-=.065,m(le(Z,0),He,it,.31+ne%4*.14),m(le(Z,0),it,le(re,0),.47+ee%3*.16)}}}let _=new rt;_.setAttribute("position",new Oe(u,3)),_.setAttribute("color",new Oe(f,3)),_.computeVertexNormals();let g=new de(_,new pn({vertexColors:!0,side:Yt,flatShading:!0}));g.castShadow=!0,l.add(g);let p=new nn({color:"#956238",roughness:.92,flatShading:!0}),v=[];for(let ee=0;ee<5;ee++){let B=ee*Math.PI*2/5,F=new de(new Fn(.124,1),p);F.position.set(Math.cos(B)*(.25+ee%2*.1),2.88+ee%3*.06,Math.sin(B)*(.25+ee%2*.1)),F.scale.set(.91,1.16,.91),F.castShadow=!0,l.add(F),v.push(F)}l.updateMatrixWorld(!0);let M=[],y=[],A=new pn({color:"#485d5d",flatShading:!0});function E([ee,B],F,le){let ne=new de(new qe(.095,.68,.11),A);ne.position.set(ee,.34,B+.46),ne.castShadow=ne.receiveShadow=!0,n.add(ne),h(ne,new S(.0475,.34,.055));let Z=new en;Z.position.set(ee,.85,B+.4),Z.rotation.x=-.35,n.add(Z);let re=new de(new qe(.64,.36,.055),new pn({color:"#182831"}));Z.add(re);let Ce=document.createElement("canvas");Ce.width=512,Ce.height=96;let Le=Ce.getContext("2d"),Pe=new gi(Ce);Pe.colorSpace=gt;let He=new de(new fn(.61,.095),new Wt({map:Pe}));He.position.set(0,.116,.03),Z.add(He);let it=.592/le.length,D=le.map(([oe,te],ie)=>{let xe=new de(new qe(it-.012,.155,.04),new pn({color:"#478086"}));xe.position.set(-.296+it*(ie+.5),-.045,.046),Z.add(xe),M.push(xe),xe.userData.touchWidth=it-.012;let fe=document.createElement("canvas");fe.width=208,fe.height=172;let Ee=new gi(fe);Ee.colorSpace=gt;let Ye=new de(new fn(it-.017,.139),new Wt({map:Ee}));Ye.position.z=.0205,xe.add(Ye);let Xe=-1/0;return xe.userData.action=()=>{let C=performance.now();C-Xe<250||(Xe=C,te(),P(),xe.position.z=.036,setTimeout(()=>{xe.position.z=.046},115))},{label:oe,context:fe.getContext("2d"),texture:Ee}});function ce(){Le.fillStyle="#182831",Le.fillRect(0,0,512,96),Le.fillStyle="#ffe1a0",Le.font="bold 38px system-ui",Le.fillText(F,17,62,478);for(let oe of D){let te=oe.context;te.fillStyle="#386269",te.fillRect(0,0,208,172),te.fillStyle="#fff2d5",te.textAlign="center",te.font="bold 27px system-ui";let ie=(typeof oe.label=="function"?oe.label():oe.label).split("|");ie.forEach((xe,fe)=>te.fillText(xe,104,(ie.length>1?68:97)+fe*37,188)),oe.texture.needsUpdate=!0}Pe.needsUpdate=!0}y.push(ce)}function P(){for(let ee of y)ee()}E(Xr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,qr[0])],["Boule",()=>t.spawn(1,qr[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,qr[0])],["Vider",t.clear]]),E(Xr.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,qr[1])],["Sph\xE8re",()=>t.spawn(5,qr[1])]]),E(Xr.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),E(Xr.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),E(Xr.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),P();let L=new en,{x:w,y:b,z:I}=Wu;L.position.set(w,b,I),n.add(L);let N=["#e2ad5c","#ca664b","#f5e5bd"];for(let ee=0;ee<3;ee++){let B=[.9,.58,.27][ee],F=new de(new tn(B,20),new pn({color:N[ee],side:Yt}));F.position.z=ee*.012,L.add(F)}let H=new de(new qe(.14,1.5,.14),A);H.position.set(0,.75-b,-.11),L.add(H);let W=0,G=document.createElement("canvas");G.width=256,G.height=64;let q=G.getContext("2d"),$=new gi(G);$.colorSpace=gt;let Y=new de(new fn(1.4,.35),new Wt({map:$,side:Yt}));Y.position.set(0,2.64-b,.02),L.add(Y);function se(){q.fillStyle="#182831",q.fillRect(0,0,256,64),q.textAlign="center",q.font="bold 28px system-ui",q.fillStyle="#fff0ce",q.fillText("CIBLE  \xB7  "+W,128,42),$.needsUpdate=!0}function ge(ee){for(let B of ee){if(!B.beforePhysics||B.owner||B.frozen||!B.mesh.visible)continue;let F=B.beforePhysics,le=B.mesh.position;if(F.z<=I||le.z>I||B.velocity.z>=-1)continue;let ne=(F.z-I)/(F.z-le.z),Z=Math.hypot(Ve.lerp(F.x,le.x,ne)-w,Ve.lerp(F.y,le.y,ne)-b);Z<=.9+B.radius*.45&&(W+=Z<.27?3:Z<.58?2:1,se())}}return se(),{targets:M,coconuts:v,redraw:P,updateTarget:ge,score:()=>W,setScore(ee){W=ee,se()}}}function Vc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new rt,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=am(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let m=am(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function am(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new vt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Hc=0,HM=1,WM=new S,lm=new Ko,Xu=new un,cm=new S,Gc=new bn,Wc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Xc,this.unassigned=new Xc,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new qu(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new S;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),h=l.normal.dot(e.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,WM)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Hc){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new S,t=new S,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let d=s[f].point.getComponent(f)-i[f].point.getComponent(f);d>r&&(r=d,o=f)}let a=i[o],l=s[o],c,h;r=0,lm.set(a.point,l.point);for(let f=0,d=this.vertices.length;f<d;f++){let m=e[f];if(m!==a&&m!==l){lm.closestPointToPoint(m.point,!0,cm);let _=cm.distanceToSquared(m.point);_>r&&(r=_,c=m)}}r=-1,Xu.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,d=this.vertices.length;f<d;f++){let m=e[f];if(m!==a&&m!==l&&m!==c){let _=Math.abs(Xu.distanceToPoint(m.point));_>r&&(r=_,h=m)}}let u=[];if(Xu.distanceToPoint(h.point)<0){u.push(oi.create(a,l,c),oi.create(h,l,a),oi.create(h,c,l),oi.create(h,a,c));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge(d)),u[f+1].getEdge(1).setTwin(u[d+1].getEdge(0))}}else{u.push(oi.create(a,c,l),oi.create(h,a,l),oi.create(h,l,c),oi.create(h,c,a));for(let f=0;f<3;f++){let d=(f+1)%3;u[f+1].getEdge(2).setTwin(u[0].getEdge((3-f)%3)),u[f+1].getEdge(0).setTwin(u[d+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(u[f]);for(let f=0,d=e.length;f<d;f++){let m=e[f];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let _=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,_=this.faces[g])}_!==null&&this._addVertexToFace(m,_)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Hc&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=HM;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===Hc&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=oi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},oi=class n{constructor(){this.normal=new S,this.midpoint=new S,this.area=0,this.constant=0,this.outside=null,this.mark=Hc,this.edge=null}static create(e,t,i){let s=new n,r=new ha(e,s),o=new ha(t,s),a=new ha(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Gc.set(e.point,t.point,i.point),Gc.getNormal(this.normal),Gc.getMidpoint(this.midpoint),this.area=Gc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},ha=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},qu=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Xc=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Ns=class extends rt{constructor(e=[]){super();let t=[],i=[],r=new Wc().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var An=Math.PI*2,qc=.84,Fi=128;function ns(n){let e=new Uint8Array(Fi*Fi*4);for(let i=0;i<Fi;i++)for(let s=0;s<Fi;s++){let r=(s+.5)/Fi,o=(i+.5)/Fi,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/qc,1),Math.min(o/qc,1),s,i),l=(s+i*Fi)*4;for(let c=0;c<3;c++)e[l+c]=Ve.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new pi(e,Fi,Fi);return t.colorSpace=gt,t.generateMipmaps=!0,t.minFilter=Tn,t.magFilter=rn,t.needsUpdate=!0,t}function Fs(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Qe(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new ke(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*qc,r.getY(l)*qc):r.setXY(l,.95,.95);return i.setAttribute("color",new vt(a,3)),i}function is(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Vc(s),material:new nn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function hm(n,e,t){let i=n/2,s=e/2,r=new Ii;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function es(n,e,t,i,s){return new bs(hm(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function ts(n,e,t=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,f]=n[h];for(let d=0;d<=e;d++){let m=An*d/e,_=t(u,f,m,h);if(i.push(_*Math.sin(m),f,_*Math.cos(m)),s.push(d/e,h/(n.length-1)),h===n.length-1||d===e)continue;let g=h*(e+1)+d,p=g+e+1;u>0&&r.push(g,g+1,p),n[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new rt;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new S,c=new S;for(let h=0;h<n.length;h++){let u=h*(e+1),f=u+e;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function ua(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new S(0,s,0));continue}for(let r=0;r<e;r++){let o=An*r/e;t.push(new S(i*Math.sin(o),s,i*Math.cos(o)))}}return new Ns(t)}function XM(){let t=new qo(hm(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ve.clamp(i.getX(l)/.098+.5,0,1),h=Ve.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,h)}let s=ns((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*An),f=c>.033&&c<.05&&l>.3&&l<.7,d=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return d?[18,27,42]:f||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[Qe(es(.106,.207,.013,.011,.0019),8425890),Qe(es(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),Qe(es(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),Qe(t,16777215,!0),Qe(es(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),Qe(new qe(.0036,.024,.004).translate(.055,.029,0),11714250),Qe(new qe(.0036,.015,.004).translate(-.055,.032,0),11385285),Qe(new qe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(Qe(new pt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(Qe(new tn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(Qe(new tn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ns([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new S(c,h,l))));return is("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function qM(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ts(t,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),f=Math.max(...e.map(d=>Math.exp(-(((l-d+u)/.014)**2))));return a*(1-.14*h**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=ns((a,l,c,h)=>{let u=An*a,f=(l*2-1)*.275,d=Math.max(0,-Math.sin(u)),m=Math.max(...e.map(v=>Math.exp(-(((f-v+.035*Math.cos(u))/.009)**2)))),_=d**3*m,g=Fs(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*d+58*_+p,76+24*d+70*_+p,24+11*d+52*_+p*.8]}),o=ua([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return is("bread","Baguette de pain",.27,o,[Qe(s,16777215,!0)],r,.9)}function YM(){let n=ns((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,f=Math.abs(o-.5)<.013,m=46+12*Fs(a,l)-(c&&(u||f)?35:0);return[m*.94,m,m*1.04]}),e=ts([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=ts([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[Qe(e,16777215,!0),Qe(t,11056059),Qe(new pt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),Qe(new pt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=An*r/5;i.push(Qe(new qe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=ua([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return is("wheel","Roue",1.8,s,i,n,.64,.23)}function ZM(){let n=ns((r,o,a,l)=>{let c=Fs(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(An*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),e=ts([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new vn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+An*l/5;return new S(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new S(.166,-.027,.01),new S(.166,.053,-.01));let s=new Ns(i);return is("cup","Tasse",.39,s,[Qe(e,16777215,!0),Qe(t,15785922)],n,.37)}function jM(){let n=ts([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=ns((s,r,o,a)=>{let l=9*Fs(o,a),c=11*Math.cos(s*An*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*An*48+s*An*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*An*4);return[h,h*1.13,h*1.24]}),t=[Qe(n,16777215,!0),Qe(new Cr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),Qe(new tn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),Qe(new tn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),Qe(new pt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),Qe(new tn(.008,12).translate(0,.035,.0336),15633202)],i=ua([[.033,-.143],[.054,.133]],6);return is("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function JM(){let n=ts([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=ns((r,o,a,l)=>{let c=10*Fs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),f=Math.floor((.61-o)*43),d=o-(.375+.055*Math.cos(An*r*2));if(e[f]?.[u]==="1"||Math.abs(d)<.018||Math.abs(d+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(An*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),i=[Qe(n,16777215,!0),Qe(new tn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),Qe(new Cr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),Qe(new tn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=ua([[.069,-.112],[.069,.109]],6);return is("soda","Canette de soda",.35,s,i,t,.42,.27)}function KM(){let n=ts([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=ns((s,r,o,a)=>{let l=15*Fs(o,a),c=8*Math.cos(s*An*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),t=[Qe(n,16777215,!0),Qe(es(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),Qe(new tn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=ua([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return is("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function $M(){let n=ns((s,r,o,a)=>{let l=8*Fs(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,d=r>.793&&r<.813&&s>.22&&s<.41;return f||d?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=ts([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[Qe(es(.138,.22,.061,.016,.004),14788675),Qe(es(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),Qe(new fn(.106,.174).translate(0,-.004,.0395),16777215,!0),Qe(e,2502456),Qe(new pt(.014,.017,.016,10).translate(.04,.117,.001),2503482),Qe(new qe(.008,.047,.027).translate(-.072,.014,-.002),3028798),Qe(new qe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),Qe(new tn(.004,8).translate(.04,.066,.0397),15817792),Qe(new tn(.004,8).translate(-.04,.066,.0397),7903100),Qe(es(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new S(s,l,o),new S(r,l,o),new S(r,l,a),new S(s,l,a)]);return is("radio","Talkie-walkie",.43,new Ns(i),t,n,.61,.08)}function um(){return[XM(),qM(),YM(),ZM(),jM(),JM(),KM(),$M()]}var QM=[0,1,2,3,4,5,7,8,9,10];function dm(n){nm.forEach(({x:e,z:t},i)=>n(QM[i],new S(e,.8,t)))}function fm(){let n=[["Cube",new qe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Fn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Yo(.29),"#d8ae53",0,1],["Brique",new qe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new qe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Fn(.6,4),"#dbab58",.6,3.7],["Coco",new Fn(.124,1),"#956238",.124,.44]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:la(t,s),material:new nn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Gr(t.computeBoundingBox()??t.boundingBox.getSize(new S).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of um()){let s=la(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var pm=48,mm=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),eb=(n,e,t)=>Math.max(e,Math.min(t,n)),tb=()=>structuredClone(mm.shield),da=(n,e,t,i)=>Number.isFinite(n)?eb(n,t,i):e;function Zc(n){let e=n?.mode==="lathe"?mm.bottle:tb(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=pm?n.points.map(o=>[da(o?.[0],0,-1.5,1.5),da(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:da(n?.depth,e.depth,.025,1.5),bevel:da(n?.bevel,e.bevel,0,.15),segments:Math.round(da(n?.segments,32,8,64))}}function gm(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Yc(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function nb(n,e,t,i){let s=Yc(n,e,t),r=Yc(n,e,i),o=Yc(t,i,n),a=Yc(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function ib(n){let e=Zc(n),t=e.mode==="lathe"?e.points:gm(e);if(t.length<3||t.length>pm*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&nb(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function xm(n){let e=Zc(n),t=ib(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([r,o])=>new ue(Math.max(0,r),o));i=new Xo(s,e.segments)}else{let s=gm(e),r=new Ii;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new bs(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new vt(new Float32Array(s*2),2))}return i}var Yu="gorilla-lab-models-v1",pa=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),sb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,rb=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre"}),ym=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),ob=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),ab=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,lb=/^#[a-f\d]{6}$/i;function _m(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function fa(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ve.clamp(n[s],t,i):e)}function Os(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>pa.models||JSON.stringify(n).length>pa.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!ab.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>pa.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:_m(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(ob).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:i?.hitbox?.mode==="box"?{mode:"box",center:fa(i.hitbox.center,0,-6,6),size:fa(i.hitbox.size,.5,.025,12)}:{mode:"auto"},parts:i.parts.map((s,r)=>({name:_m(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(rb,s?.shape)?s.shape:"box",...s?.shape==="custom"?{profile:Zc(s?.profile)}:{},position:fa(s?.position,0,-3,3),rotation:fa(s?.rotation,0,-360,360),scale:fa(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&lb.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(ym,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=pa.textureBytes&&sb.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function vm(n){try{let e=(n??globalThis.localStorage)?.getItem(Yu);if(e&&e.length<=pa.fileBytes)return Os(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function cb(n){switch(n){case"sphere":return new On(.5,20,12);case"cylinder":return new pt(.5,.5,1,20);case"cone":return new Pi(.5,1,20);case"torus":return new vn(.365,.135,8,24);case"capsule":return new vs(.28,.44,6,16);case"diamond":return new Wn(.5);default:return new qe(1,1,1)}}var Mm=Object.keys(ym),Yr=64,ma=4,bm=2,yi;function hb(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function Sm(){if(yi)return yi;let n=Yr*ma,e=Yr*bm,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Yr)*ma+Math.floor(s/Yr),o=hb(Mm[r],s%Yr,i%Yr),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return yi=new pi(t,n,e),yi.colorSpace=gt,yi.magFilter=rn,yi.minFilter=Tn,yi.generateMipmaps=!0,yi.needsUpdate=!0,yi}function wm(n){let e=n.shape==="custom"?xm(n.profile):cb(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(Ve.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let s=new ke(n.color),r=t.attributes.position.count,o=new Float32Array(r*3),a=t.attributes.uv,l=Mm.indexOf(n.surface),c=l%ma,h=Math.floor(l/ma);for(let u=0;u<r;u++)s.toArray(o,u*3),n.texture||a.setXY(u,(c+.05+a.getX(u)*.9)/ma,(h+.05+a.getY(u)*.9)/bm);return t.setAttribute("color",new vt(o,3)),t}function ub(n){if(!n?.texture)return new nn({vertexColors:!0,map:Sm(),roughness:.68});let e=new Li().load(n.texture);return e.colorSpace=gt,e.wrapS=e.wrapT=Gn,new nn({vertexColors:!0,map:e,roughness:.68})}function jc(n){return n?.parts?.some(e=>e.texture)?n.parts.map(ub):new nn({vertexColors:!0,map:Sm(),roughness:.68})}function Jc(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==yi&&e.map.dispose(),e.dispose()}}function db(n){let e=n.map(wm),t=Vc(e,n.some(i=>i.texture));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Kc(n){let e=db(n.parts),t=e.boundingBox.getSize(new S);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function fb(n){let e=new Zt;for(let t of n.parts??[]){let i=wm(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new S,new S(1,1,1)),e}function Tm(n){return fb(n).getSize(new S)}var Cm=Object.freeze([8,16,32,48,64,96,128]),Rm=16,Qc=24,Em=new WeakMap,ss=Ve.clamp,Bs=Ve.lerp,Zu=n=>n*n*(3-2*n);function Yn(n,e,t,i){return Number.isFinite(n)?ss(n,e,t):i}function Am(n){if(!n)return null;let e=Os({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var pb=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Zr(n={}){let e=Cm.includes(n?.detail)?n.detail:Rm,t=n?.heights;return{detail:e,seed:Math.round(Yn(n?.seed,0,2147483647,1)),amplitude:Yn(n?.amplitude,0,12,0),frequency:Yn(n?.frequency,.015,2,.12),octaves:Math.round(Yn(n?.octaves,1,5,3)),roughness:Yn(n?.roughness,.15,.95,.42),ridge:Yn(n?.ridge,0,1,0),edgeFade:Yn(n?.edgeFade,0,1,0),grass:Yn(n?.grass,0,1,0),shrub:Yn(n?.shrub,0,1,0),grassSize:Yn(n?.grassSize,.1,5,1),shrubSize:Yn(n?.shrubSize,.1,5,1),grassModel:Am(n?.grassModel),shrubModel:Am(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&pb.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Yn(i,-Qc,Qc,0)):null}}function Pm(n,e,t,i){let s=ss(t,0,e),r=ss(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,h=e+1,u=a*h+o,f=n[u],d=n[u+1],m=n[u+h],_=n[u+h+1];return l+c<=1?f+(d-f)*l+(m-f)*c:_+(m-_)*(1-l)+(d-_)*(1-c)}function Im(n,e){let t=Cm.includes(e)?e:Rm;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>Pm(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function Oi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function $c(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Zu(n-i),o=Zu(e-s),a=Bs(Oi(i,s,t),Oi(i+1,s,t),r),l=Bs(Oi(i,s+1,t),Oi(i+1,s+1,t),r);return 2*Bs(a,l,o)-1}function ju(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:f}=i,d=Em.get(n),m=d&&d.w===e&&d.d===t&&d.detail===s&&d.seed===r&&d.amplitude===o&&d.frequency===a&&d.octaves===l&&d.roughness===c&&d.ridge===h&&d.edgeFade===u;if(m&&d.heights===f)return d;let _=s+1,g=m?d.procedural:new Float64Array(_**2);if(!m&&o)for(let M=0;M<=s;M++)for(let y=0;y<=s;y++){let A=(y/s-.5)*e*a,E=(M/s-.5)*t*a,P=0,L=1,w=0;for(let N=0;N<l;N++){let H=$c(A*2**N,E*2**N,r+N*13);P+=L*Bs(H,1-2*Math.abs(H),h),w+=L,L*=c}let b=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(y/s-.5))*2,(.5-Math.abs(M/s-.5))*2)),u*2):1,I=l===3&&c===.42&&h===0&&u===0;g[M*_+y]=I?o*(.62*$c(A,E,r)+.26*$c(A*2.03,E*2.03,r+13)+.12*$c(A*4.13,E*4.13,r+37)):o*P/w*b}let p=f?g.map((M,y)=>M+f[y]):g,v={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:f,procedural:g,surface:p};return Em.set(n,v),v}function Lm(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return Pm(o,i,(e/s+.5)*i,(t/r+.5)*i)}function mb(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),h=0,u=0;for(let f=l;f<=c;f++)for(let d=o;d<=a;d++)d===e&&f===t||(h+=s[f*r+d],u++);return h/u}function Dm(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=ju(n),{detail:l,w:c,d:h,surface:u,procedural:f}=a,d=e-n.x,m=t-n.z,_=ss(d,-c/2,c/2),g=ss(m,-h/2,h/2);if((d-_)**2+(m-g)**2>=s**2)return!1;let p=(d/c+.5)*l,v=(m/h+.5)*l,M=c/l,y=h/l,A=Math.max(0,Math.ceil(p-s/M)),E=Math.min(l,Math.floor(p+s/M)),P=Math.max(0,Math.ceil(v-s/y)),L=Math.min(l,Math.floor(v+s/y)),w=Number.isFinite(o)?o-n.y:Lm(a,d,m),b=l+1,I=a.heights?.slice()??new Array(b**2).fill(0),N=!1,H=!1;function W(G,q,$){N=!0;let Y=q*b+G,se=I[Y],ge;if(i==="raise"||i==="lower")ge=se+(i==="raise"?1:-1)*r*$;else{let ee=i==="flatten"?w:mb(a,G,q);ge=Bs(u[Y],ee,Math.min(1,r)*$)-f[Y]}ge=ss(ge,-Qc,Qc),!(Math.abs(ge-se)<1e-7)&&(I[Y]=ge,H=!0)}for(let G=P;G<=L;G++)for(let q=A;q<=E;q++){let $=Math.hypot((q-p)*M,(G-v)*y)/s;$<1&&W(q,G,Zu(1-$))}if(!N){let G=ss(p,0,l),q=ss(v,0,l),$=Math.min(l-1,Math.floor(G)),Y=Math.min(l-1,Math.floor(q)),se=G-$,ge=q-Y,ee=se+ge<=1,B=ee?1-se-ge:se+ge-1,F=ee?se:1-ge,le=ee?ge:1-se;if(B>=Math.max(F,le)){let ne=+!ee;W($+ne,Y+ne,1)}else F>=le?W($+1,Y,1):W($,Y+1,1)}return H&&(n.terrain.heights=I),H}function Ju(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let f=0;f<=s;f++){let d=u*r+f;o[3*d]=(f/s-.5)*e,o[3*d+2]=(u/s-.5)*t,a[2*d]=f/s*e/2.6,a[2*d+1]=(1-u/s)*t/2.6,u<s&&f<s&&(l.set([d,d+r,d+1,d+r+1,d+1,d+r],c),c+=6)}let h=new rt;return h.setAttribute("position",new vt(o,3).setUsage(oa)),h.setAttribute("uv",new vt(a,2)),h.setIndex(new vt(l,1)),gb(h,n),h}function gb(n,e){let{surface:t}=ju(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function xb(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new rt;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function _b(){return new Fn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var yb=[{name:"grass",geometry:xb,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:_b,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Um(n){let e=new en;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of yb){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,n.w*n.d*s)*l)),h=n.terrain[t+"Model"],u=n.terrain[t+"Size"]??1,f,d;if(h){let g=t==="grass"?.42:.85;f=Kc(h),f.scale(g*u,g*u,g*u),f.translate(0,g*u/2,0),d=jc(h)}else if(f=i(),f.scale(u,u,u),d=new pn({color:a,side:t==="grass"?Yt:ti,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let g=new Li().load(n.terrain.grassTexture);g.colorSpace=gt,d.map=g,d.color.set("#ffffff"),d.userData.ownTexture=!0}let m=new Lo(f,d,c);m.name=t,m.instanceMatrix.setUsage(oa),m.userData.salt=o,m.receiveShadow=!0;let _=new ke;for(let g=0;g<c;g++){let p=Bs(.68,1.2,Oi(g,o,n.terrain.seed+4));m.setColorAt(g,_.setRGB(p,p,p))}e.add(m)}return vb(e,n),e}function vb(n,e){let t=ju(e),i=new Ct;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(Oi(a,r,o)-.5)*.96*e.w,c=(Oi(a,r,o+1)-.5)*.96*e.d;i.position.set(l,Lm(t,l,c),c),i.rotation.y=Oi(a,r,o+2)*2*Math.PI,i.scale.setScalar(Bs(.58,1.34,Oi(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Nm(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Jc(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Ku=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Fm=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Om(n,e=Fm[n]){n=Math.max(0,Math.min(Ku.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Fm[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let f of[0,-512])i.fillRect(a+u,l+f,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}var Bm=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],zm=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Vm=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",ga=(n,e,t)=>Math.min(t,Math.max(e,n)),Mb=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},$u=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function bb(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function km(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Vm(t),r.fillRect(0,0,o,o);let a=bb(s),l=ga(64/i,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(e)){let h=e==="wood"?1400:e==="grass"?3700:e==="rock"?1900:4300;for(let u=0;u<h;u++){let f=a()*o,d=a()*o,m=e==="wood"?a()*45+5:e==="grass"?a()*2+1:e==="rock"?a()*20+2:a()*7+1,_=e==="grass"?a()*29+7:e==="wood"?a()*2+1:e==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(e==="soil"?.07+a()*.22:.05+a()*.19)),$u(r,g=>g.fillRect(f,d,m,_))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(e==="dots"){c(.36);for(let u=0;u<h;u++)for(let f=0;f<h;f++)$u(r,d=>{d.beginPath(),d.arc(f*l+l/2,u*l+l/2,ga(l*.11,2,13),0,Math.PI*2),d.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let f=0;f<=o;f+=l){let d=e==="brick"&&Math.floor(u/l)%2?l/2:0;e!=="brick"&&u>0||(r.beginPath(),r.moveTo(f+d,u),r.lineTo(f+d,u+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var Sb=`
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
`;function wb(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=Sb,document.head.append(n)}async function Tb(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function Qu({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){wb();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=B=>o.querySelector(B),l=a(".texture-canvas"),c=a(".texture-tile"),h=zm(),u=zm(),f={pattern:Bm.some(([B])=>B===i)?i:"grain",base:Vm(e),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},d=l.getContext("2d"),m=h.getContext("2d"),_=u.getContext("2d"),g=[],p=[],v=!1,M=!1,y=null,A="paint",E=null;a("#studio-title").textContent=t+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...Bm.map(([B,F])=>new Option(F,B))),a("[data-field=base]").value=f.base,a("[data-field=pattern]").value=f.pattern;for(let B of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+B+"]").addEventListener("input",F=>{f[B]=["scale","size","opacity","hardness"].includes(B)?Number(F.target.value):F.target.value});let P=B=>{a("[data-status]").textContent=B},L=()=>{d.clearRect(0,0,512,512),d.drawImage(h,0,0),d.drawImage(u,0,0);let B=c.getContext("2d");B.clearRect(0,0,256,128);for(let F=0;F<2;F++)for(let le=0;le<4;le++)B.drawImage(l,le*64,F*64,64,64)},w=()=>({base:m.getImageData(0,0,512,512),top:_.getImageData(0,0,512,512)}),b=B=>{m.putImageData(B.base,0,0),_.putImageData(B.top,0,0),L()},I=()=>{g.push(w()),g.length>16&&g.shift(),p.length=0,v=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},N=(B,F)=>{B.length&&(F.push(w()),b(B.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,v=!0)},H=()=>{v&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(I(),km(h,f),_.clearRect(0,0,512,512),L(),P("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},W=B=>{let F=l.getBoundingClientRect();return{x:(B.clientX-F.left)/F.width*512,y:(B.clientY-F.top)/F.height*512}},G=B=>{let F=f.size/2,le=f.opacity;$u(_,ne=>{ne.save(),A==="erase"&&(ne.globalCompositeOperation="destination-out"),ne.globalAlpha=le;let Z=ga(f.hardness,.05,1);if(A==="stamp")ne.fillStyle=f.ink,ne.translate(B.x,B.y),ne.rotate(Math.PI/4),ne.fillRect(-F*.8,-F*.8,F*1.6,F*1.6);else{let re=ne.createRadialGradient(B.x,B.y,F*Z*.85,B.x,B.y,F);if(A==="erase")re.addColorStop(0,"rgba(0,0,0,1)"),re.addColorStop(1,"rgba(0,0,0,0)");else{let Ce=f.ink.match(/[\da-f]{2}/gi).map(Le=>parseInt(Le,16)).join(",");re.addColorStop(0,"rgba("+Ce+",1)"),re.addColorStop(1,"rgba("+Ce+",0)")}ne.fillStyle=re,ne.beginPath(),ne.arc(B.x,B.y,F,0,2*Math.PI),ne.fill()}ne.restore()})},q=(B,F)=>{let le=Math.hypot(F.x-B.x,F.y-B.y),ne=Math.max(1,Math.ceil(le/Math.max(2,f.size*.18)));for(let Z=1;Z<=ne;Z++)G({x:B.x+(F.x-B.x)*Z/ne,y:B.y+(F.y-B.y)*Z/ne})},$=B=>{let F=d.getImageData(Math.floor(ga(B.x,0,511)),Math.floor(ga(B.y,0,511)),1,1).data;f.ink="#"+[...F].slice(0,3).map(le=>le.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=f.ink,P("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",B=>{if(B.button!==0||M)return;let F=W(B);if(A==="pick"){$(F);return}B.preventDefault(),I(),M=!0,y=B.pointerId,E=F,l.setPointerCapture(B.pointerId),G(F),L()}),l.addEventListener("pointermove",B=>{if(!M||B.pointerId!==y)return;B.preventDefault();let F=W(B);A==="stamp"?G(F):q(E,F),E=F,L()});let Y=B=>{B.pointerId===y&&(M=!1,y=null,E=null,l.hasPointerCapture(B.pointerId)&&l.releasePointerCapture(B.pointerId))};l.addEventListener("pointerup",Y),l.addEventListener("pointercancel",Y);for(let B of o.querySelectorAll("[data-tool]"))B.onclick=()=>{A=B.dataset.tool,o.querySelectorAll("[data-tool]").forEach(F=>F.setAttribute("aria-pressed",String(F===B)))};a("[data-cmd=generate]").onclick=H,a("[data-cmd=undo]").onclick=()=>N(g,p),a("[data-cmd=redo]").onclick=()=>N(p,g),a("[data-cmd=export]").onclick=()=>Mb(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async B=>{let F=B.target.files?.[0];if(B.target.value="",!!F)try{if(!["image/png","image/jpeg","image/webp"].includes(F.type))throw Error("Image PNG / JPG / WebP uniquement.");if(F.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let le=await createImageBitmap(F);I(),m.clearRect(0,0,512,512),m.drawImage(le,0,0,512,512),le.close(),_.clearRect(0,0,512,512),L(),P("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(le){P(le.message)}});let se=B=>{!B&&v&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ge,!0),o.remove())},ge=B=>{if(B.key==="Escape"){B.preventDefault(),se(!1);return}(B.ctrlKey||B.metaKey)&&!B.target.closest("input,select")&&B.key.toLowerCase()==="z"&&(B.preventDefault(),B.stopImmediatePropagation(),B.shiftKey?N(p,g):N(g,p))};window.addEventListener("keydown",ge,!0),a("[data-cmd=close]").onclick=()=>se(!1),a("[data-cmd=cancel]").onclick=()=>se(!1);let ee=()=>{for(let B of[512,384,256,192]){let F=document.createElement("canvas");F.width=F.height=B,F.getContext("2d").drawImage(l,0,0,B,B);for(let le of[.85,.72,.58]){let ne=F.toDataURL("image/webp",le);if(ne.length<=s)return ne}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let B=a("[data-cmd=apply]");B.disabled=!0;try{let F=ee();await r(F),v=!1,se(!0)}catch(F){P(F.message||"Impossible d\u2019appliquer la texture.")}finally{B.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,km(h,f),L(),n&&Tb(n,h).then(L).catch(()=>P("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>se(!1)}}var zs=new Es,gn=new S,rs=new S,Nt=new ut,Gm={X:new S(1,0,0),Y:new S(0,1,0),Z:new S(0,0,1)},ed={type:"change"},Hm={type:"mouseDown",mode:null},Wm={type:"mouseUp",mode:null},Xm={type:"objectChange"},sh=class extends As{constructor(e,t=null){super(void 0,t);let i=new nd(this);this._root=i;let s=new id;this._gizmo=s,i.add(s);let r=new sd;this._plane=r,i.add(r);let o=this;function a(M,y){let A=y;Object.defineProperty(o,M,{get:function(){return A!==void 0?A:y},set:function(E){A!==E&&(A=E,r[M]=E,s[M]=E,o.dispatchEvent({type:M+"-changed",value:E}),o.dispatchEvent(ed))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new S,c=new S,h=new ut,u=new ut,f=new S,d=new ut,m=new S,_=new S,g=new S,p=0,v=new S;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",f),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",v),this._offset=new S,this._startNorm=new S,this._endNorm=new S,this._cameraScale=new S,this._parentPosition=new S,this._parentQuaternion=new ut,this._parentQuaternionInv=new ut,this._parentScale=new S,this._worldScaleStart=new S,this._worldQuaternionInv=new ut,this._worldScale=new S,this._positionStart=new S,this._quaternionStart=new ut,this._scaleStart=new S,this._getPointer=Eb.bind(this),this._onPointerDown=Cb.bind(this),this._onPointerHover=Ab.bind(this),this._onPointerMove=Rb.bind(this),this._onPointerUp=Pb.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&zs.setFromCamera(e,this.camera);let t=td(this._gizmo.picker[this.mode],zs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&zs.setFromCamera(e,this.camera);let t=td(this._plane,zs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Hm.mode=this.mode,this.dispatchEvent(Hm)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&zs.setFromCamera(e,this.camera);let o=td(this._plane,zs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Nt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(gn.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(gn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),rs.set(a,a,a)}else gn.copy(this.pointStart),rs.copy(this.pointEnd),gn.applyQuaternion(this._worldQuaternionInv),rs.applyQuaternion(this._worldQuaternionInv),rs.divide(gn),t.search("X")===-1&&(rs.x=1),t.search("Y")===-1&&(rs.y=1),t.search("Z")===-1&&(rs.z=1);s.scale.copy(this._scaleStart).multiply(rs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(gn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(gn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Gm[t]),gn.copy(Gm[t]),r==="local"&&gn.applyQuaternion(this.worldQuaternion),gn.cross(this.eye),gn.length()===0?l=!0:this.rotationAngle=this._offset.dot(gn.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Nt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ed),this.dispatchEvent(Xm)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Wm.mode=this.mode,this.dispatchEvent(Wm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ed),this.dispatchEvent(Xm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return zs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function Eb(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function Ab(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function Cb(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function Rb(n){this.enabled&&this.pointerMove(this._getPointer(n))}function Pb(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function td(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var eh=new qt,Tt=new S(0,1,0),qm=new S(0,0,0),Ym=new at,th=new ut,ih=new ut,vi=new S,Zm=new at,ya=new S(1,0,0),ks=new S(0,1,0),va=new S(0,0,1),nh=new S,xa=new S,_a=new S,nd=class extends Ct{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},id=class extends Ct{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Wt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new mi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let u=e.clone();u.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let d=e.clone();d.color.setHex(16776960);let m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};let _=new pt(0,.04,.1,12);_.translate(0,.05,0);let g=new qe(.08,.08,.08);g.translate(0,.04,0);let p=new rt;p.setAttribute("position",new Oe([0,0,0,1,0,0],3));let v=new pt(.0075,.0075,.5,3);v.translate(0,.25,0);function M(G,q){let $=new vn(G,.0075,3,64,q*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function y(){let G=new rt;return G.setAttribute("position",new Oe([0,0,0,1,1,1],3)),G}let A={X:[[new de(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new de(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(_,o),[0,.5,0]],[new de(_,o),[0,-.5,0],[Math.PI,0,0]],[new de(v,o)]],Z:[[new de(_,a),[0,0,.5],[Math.PI/2,0,0]],[new de(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new de(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Wn(.1,0),u),[0,0,0]]],XY:[[new de(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new de(new pt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new pt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new pt(.2,0,.6,4),i),[0,.3,0]],[new de(new pt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new pt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new pt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Wn(.2,0),i)]],XY:[[new de(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new de(new Wn(.01,2),s),null,null,null,"helper"]],END:[[new de(new Wn(.01,2),s),null,null,null,"helper"]],DELTA:[[new wn(y(),s),null,null,null,"helper"]],X:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new de(M(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new de(M(.5,.5),r)]],Y:[[new de(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new de(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new de(M(.75,1),f),null,[0,Math.PI/2,0]]]},w={AXIS:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new de(new On(.25,10,8),i)]],X:[[new de(new vn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new vn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new vn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new vn(.75,.1,2,24),i)]]},I={X:[[new de(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new de(v,r),[0,0,0],[0,0,-Math.PI/2]],[new de(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(g,o),[0,.5,0]],[new de(v,o)],[new de(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(g,a),[0,0,.5],[Math.PI/2,0,0]],[new de(v,a),[0,0,0],[Math.PI/2,0,0]],[new de(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new qe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new qe(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new qe(.1,.1,.1),u)]]},N={X:[[new de(new pt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new de(new pt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new pt(.2,0,.6,4),i),[0,.3,0]],[new de(new pt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new pt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new de(new pt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new qe(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new de(new qe(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new qe(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new qe(.2,.2,.2),i),[0,0,0]]]},H={X:[[new wn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new wn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new wn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(G){let q=new Ct;for(let $ in G)for(let Y=G[$].length;Y--;){let se=G[$][Y][0].clone(),ge=G[$][Y][1],ee=G[$][Y][2],B=G[$][Y][3],F=G[$][Y][4];se.name=$,se.tag=F,ge&&se.position.set(ge[0],ge[1],ge[2]),ee&&se.rotation.set(ee[0],ee[1],ee[2]),B&&se.scale.set(B[0],B[1],B[2]),se.updateMatrix();let le=se.geometry.clone();le.applyMatrix4(se.matrix),se.geometry=le,se.renderOrder=1/0,se.position.set(0,0,0),se.rotation.set(0,0,0),se.scale.set(1,1,1),q.add(se)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(A)),this.add(this.gizmo.rotate=W(L)),this.add(this.gizmo.scale=W(I)),this.add(this.picker.translate=W(E)),this.add(this.picker.rotate=W(b)),this.add(this.picker.scale=W(N)),this.add(this.helper.translate=W(P)),this.add(this.helper.rotate=W(w)),this.add(this.helper.scale=W(H)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ih;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Nt.setFromEuler(eh.set(0,0,0)),o.quaternion.copy(i).multiply(Nt),Math.abs(Tt.copy(ya).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Nt.setFromEuler(eh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Nt),Math.abs(Tt.copy(ks).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Nt.setFromEuler(eh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Nt),Math.abs(Tt.copy(va).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Nt.setFromEuler(eh.set(0,Math.PI/2,0)),Tt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Ym.lookAt(qm,Tt,ks)),o.quaternion.multiply(Nt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(gn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Tt.copy(ya).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Tt.copy(ks).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Tt.copy(va).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Tt.copy(va).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Tt.copy(ya).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Tt.copy(ks).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(th.copy(i),Tt.copy(this.eye).applyQuaternion(Nt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Ym.lookAt(this.eye,qm,ks)),o.name==="X"&&(Nt.setFromAxisAngle(ya,Math.atan2(-Tt.y,Tt.z)),Nt.multiplyQuaternions(th,Nt),o.quaternion.copy(Nt)),o.name==="Y"&&(Nt.setFromAxisAngle(ks,Math.atan2(Tt.x,Tt.z)),Nt.multiplyQuaternions(th,Nt),o.quaternion.copy(Nt)),o.name==="Z"&&(Nt.setFromAxisAngle(va,Math.atan2(Tt.y,Tt.x)),Nt.multiplyQuaternions(th,Nt),o.quaternion.copy(Nt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},sd=class extends de{constructor(){super(new fn(1e5,1e5,2,2),new Wt({visible:!1,wireframe:!0,side:Yt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),nh.copy(ya).applyQuaternion(t==="local"?this.worldQuaternion:ih),xa.copy(ks).applyQuaternion(t==="local"?this.worldQuaternion:ih),_a.copy(va).applyQuaternion(t==="local"?this.worldQuaternion:ih),Tt.copy(xa),this.mode){case"translate":case"scale":switch(this.axis){case"X":Tt.copy(this.eye).cross(nh),vi.copy(nh).cross(Tt);break;case"Y":Tt.copy(this.eye).cross(xa),vi.copy(xa).cross(Tt);break;case"Z":Tt.copy(this.eye).cross(_a),vi.copy(_a).cross(Tt);break;case"XY":vi.copy(_a);break;case"YZ":vi.copy(nh);break;case"XZ":Tt.copy(_a),vi.copy(xa);break;case"XYZ":case"E":vi.set(0,0,0);break}break;case"rotate":default:vi.set(0,0,0)}vi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zm.lookAt(gn.set(0,0,0),vi,Tt),this.quaternion.setFromRotationMatrix(Zm)),super.updateMatrixWorld(e)}};function jm(n,e,t=!1){if(t)return{x:n.x,y:n.y,z:n.z};let i=new S((e.w-n.w)/2,n.terrain?0:(e.h-n.h)/2,(e.d-n.d)/2);return i.applyEuler(new qt(Ve.degToRad(n.pitch),Ve.degToRad(n.yaw),Ve.degToRad(n.roll??0),"YXZ")),{x:n.x+i.x,y:n.y+i.y,z:n.z+i.z}}var Jm={type:"change"},od={type:"start"},$m={type:"end"},rh=new Zi,Km=new un,Ib=Math.cos(70*Ve.DEG2RAD),Kt=new S,Cn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6,oh=class extends As{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new ut,this._lastTargetPosition=new S,this._quat=new ut().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pr,this._sphericalDelta=new Pr,this._scale=1,this._panOffset=new S,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new S,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Db.bind(this),this._onPointerDown=Lb.bind(this),this._onPointerUp=Ub.bind(this),this._onContextMenu=Vb.bind(this),this._onMouseWheel=Ob.bind(this),this._onKeyDown=Bb.bind(this),this._onTouchStart=zb.bind(this),this._onTouchMove=kb.bind(this),this._onMouseDown=Nb.bind(this),this._onMouseMove=Fb.bind(this),this._interceptControlDown=Gb.bind(this),this._interceptControlUp=Hb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jm),this.update(),this.state=St.NONE}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Kt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new S(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rh.origin.copy(this.object.position),rh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rh.direction))<Ib?this.object.lookAt(this.target):(Km.setFromNormalAndCoplanarPoint(this.object.up,this.target),rh.intersectPlane(Km,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(Jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Lb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Db(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ub(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($m),this.state=St.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Nb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(od)}function Fb(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ob(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(od),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($m))}function Bb(n){this.enabled!==!1&&this._handleKeyDown(n)}function zb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(od)}function kb(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function Vb(n){this.enabled!==!1&&n.preventDefault()}function Gb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var eg=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],ad=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Ma={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Wb=8e6,ba=512,Mi=1024,Vs=512,Ht=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Qm=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function an(n){if(typeof n=="string"){if(n.length>Wb)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>ba)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+ba+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:Qm(n.name,56,"Ma map"),worldSize:Ht(n.worldSize,24,2048,240),spawn:{x:Ht(e.x,-Mi,Mi,0),y:Ht(e.y,-256,256,.06),z:Ht(e.z,-Mi,Mi,3),yaw:Ht(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?Zr(t.terrain):null,r=t.model?Os({version:1,models:[t.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Qm(t.name,36,"Pi\xE8ce "+(i+1)),x:Ht(t.x,-Mi,Mi,0),y:Ht(t.y,-256,256,0),z:Ht(t.z,-Mi,Mi,0),w:Ht(t.w,.05,Vs,3),h:Ht(t.h,.05,256,.5),d:Ht(t.d,.05,Vs,3),pitch:s?0:Ht(t.pitch,-180,180,0),yaw:s?0:Ht(t.yaw,-360,360,0),roll:s?0:Ht(t.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(t.primitive)?t.primitive:"box",uvScale:Ht(t.uvScale,.05,100,1),uvOffsetX:Ht(t.uvOffsetX,-100,100,0),uvOffsetY:Ht(t.uvOffsetY,-100,100,0),uvRotation:Ht(t.uvRotation,-360,360,0),material:Math.round(Ht(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:Ht(t.grip,0,1.5,.8),gravity:Ht(t.gravity,.05,2.5,1),bounce:Ht(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function tg(n){return an({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...em,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function ng(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return an({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,Ma.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Ma.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Ma.rubber)]})}function os(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function ig(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new qt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new S(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=d=>Math.round(d/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*f,h+=s.y*f,u+=s.z*f,![c,h,u].every(Number.isFinite)||Math.abs(c)>Mi||Math.abs(u)>Mi||h<-256||h>256?null:{...t,x:c,y:h,z:u}}var sg="gorilla-lab-custom-map-v1";function rg(n){let e=new Blob([JSON.stringify(an(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var X=n=>document.getElementById(n),ug=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],dg=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],dh=[...document.querySelectorAll(".tool")],fg="gorilla-lab-editor-draft",jr=vm(localStorage),Rn=jr.models.filter(n=>n.parts.length);function pg(n){let e=n??X("model-library").value;X("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Rn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Rn.some(t=>t.id===e)?X("model-library").value=e:Rn.length===1&&(X("model-library").value=Rn[0].id),X("place-model").disabled=!Rn.length;for(let t of["terrain-grassModel","terrain-shrubModel"]){let i=X(t),s=i.value;i.replaceChildren(new Option("G\xE9om\xE9trie simple (d\xE9faut)",""),...Rn.map(r=>new Option(r.name,r.id))),Rn.some(r=>r.id===s)&&(i.value=s)}}var ud=new URLSearchParams(location.search).get("model");pg(ud);function Gs(){return Rn.find(n=>n.id===X("model-library").value)}function mg(){let n=Gs();if(!n)return null;let e=Tm(n);return os({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Ve.clamp(e.x,.2,64),h:Ve.clamp(e.y,.12,36),d:Ve.clamp(e.z,.2,64),color:"#ffffff",solid:n.properties.collidable!==!1})}X("model-library").addEventListener("change",()=>{tt==="model"&&zi(null),Ed()});var ld={block:os(),ramp:os({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:os({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Zr({amplitude:.7,grass:.34})}),wall:os({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},gd={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"Clique sur une surface pour placer le d\xE9part du joueur.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},Te,Dt=-1,tt="move",dt=null,Zn=null,as=[],$t=X("preview"),nt=X("plan"),et=nt.getContext("2d");function Xb(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[X("shape-preset").value]??n.slab;return os({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(X("shape-preset").value)?X("shape-preset").value:"box"})}var qb=X("editor-views");function Ca(){qb.dataset.layout=X("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",X("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",X("sidebar-width").value+"px"),requestAnimationFrame(()=>{Md(),bd()})}for(let n of["layout-mode","view-split","sidebar-width"])X(n).addEventListener("input",Ca);X("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Ca()};X("workspace-fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.querySelector("main").requestFullscreen?.()};X("focus-3d").onclick=()=>{X("layout-mode").value="only-3d",Ca()};X("focus-plan").onclick=()=>{X("layout-mode").value="only-plan",Ca()};function Yb(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(F,le,ne)=>{let Z=document.createElement(F);return le&&(Z.className=le),ne!==void 0&&(Z.textContent=ne),Z},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let F of dh){let le=F.dataset.tool,ne=F.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[le]){let Z=t("div","rail-divider");Z.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[le]],i.append(Z)}F.classList.add("rail-tool"),F.title=ne+" \xB7 "+(gd[le]??""),F.setAttribute("aria-label",ne),F.replaceChildren(t("span","rail-glyph",s[le]??"\u25A1"),t("span","rail-caption",ne==="Redimensionner"?"\xC9chelle":ne==="S\xE9lectionner"?"S\xE9lect.":ne==="D\xE9placer"?"D\xE9placer":ne==="Atelier"?"Mod\xE8le":ne)),i.append(F)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=X("shape-preset").closest("label"),h=X("model-library").closest(".inspector-section"),u=l.querySelector('a[href*="model-editor"]');u&&(u.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,h);let f=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");f.id="model-place-action",f.type="button",o.append(f);let d=t("button","delete-library-model","Supprimer de la biblioth\xE8que");d.type="button",d.id="delete-library-model",d.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(d),u&&o.append(u);let m=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(m);let _=t("p","model-count-hint","");o.append(_),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let v=X("layout-mode").closest("label");v.classList.add("viewport-layout"),g.prepend(v);let M=t("span","active-selection","Aucune s\xE9lection");M.id="active-selection",v.after(M);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let A=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let F of E){let le=X(F);le&&A.append(le.closest("label"))}y.append(A),g.append(y);let P=F=>{if(F==="close"){o.hidden=!0;return}let le=F==="model";o.hidden=!1,o.dataset.mode=F,a.textContent=le?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",h.hidden=!le,c.hidden=le,f.hidden=!le,d.hidden=!le,u&&(u.hidden=!le),m.textContent=le?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",_.hidden=!le,_.textContent=le?Rn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let ne=Gs();f.disabled=!ne,f.textContent=ne?"\u2B21 Placer \xAB "+ne.name+" \xBB":"Aucun mod\xE8le \xE0 placer",d.disabled=!ne,u&&(u.href="./model-editor.html"+(ne?"?model="+encodeURIComponent(ne.id):"")),X(le?"model-library":"shape-preset").focus({preventScroll:!0})};f.onclick=()=>{Gs()&&(Bi("model"),P("close"),$t.focus({preventScroll:!0}),ft("Clique dans la sc\xE8ne pour placer \xAB "+Gs().name+" \xBB."))},d.onclick=()=>{let F=Gs();if(F&&confirm("Supprimer d\xE9finitivement \xAB "+F.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let le=Os({...jr,models:jr.models.filter(Z=>Z.id!==F.id),avatarId:jr.avatarId===F.id?null:jr.avatarId});localStorage.setItem(Yu,JSON.stringify(le)),Object.assign(jr,le);let ne=Rn.findIndex(Z=>Z.id===F.id);ne>=0&&Rn.splice(ne,1),pg(),tt==="model"&&!Rn.length&&Bi("move"),zi(null),Ed(),P("model"),ft("\xAB "+F.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(le){ft("Suppression impossible : "+(le.message||"stockage local indisponible"))}},X("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&P("model")});for(let F of["model","preset"])dh.find(ne=>ne.dataset.tool===F)?.addEventListener("click",()=>P(F));window.addEventListener("pointerdown",F=>{!o.hidden&&!o.contains(F.target)&&!F.target.closest(".rail-tool")&&P("close")}),window.addEventListener("keydown",F=>{F.key==="Escape"&&P("close")});let L=t("section","outliner");L.id="scene-outline";let w=t("header","side-section-head");w.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),w.append(t("span","outline-meta","Objets")),L.append(w);let b=e.querySelector("#pieces").closest(".inspector-section");b.id="outline-content",L.append(b);let I=t("section","property-pane"),N=t("nav","inspector-tabs");N.setAttribute("aria-label","Propri\xE9t\xE9s");let H=[["object","Objet"],["terrain","Terrain"],["material","Mat\xE9riaux"],["scene","Sc\xE8ne"]];for(let[F,le]of H){let ne=t("button","inspector-tab",le);ne.type="button",ne.dataset.tab=F,ne.setAttribute("aria-pressed",String(F==="object")),N.append(ne)}let W=t("div","property-content");W.id="property-content";let G=X("piece-inspector").closest(".inspector-section");G.id="object-section";let q=X("surface").closest("details");q.id="surface-controls",W.append(G);let $=t("section","scene-options");$.id="scene-options",$.append(t("h2","","Param\xE8tres de carte"));let Y=X("map-name").closest("label"),se=X("map-world-size").closest(".fields"),ge=X("draft-status");$.append(Y,se,ge);let ee=[...e.children].filter(F=>F.tagName==="DETAILS");for(let F of ee)$.append(F);W.append($),I.append(N,W),e.replaceChildren(L,I);let B=F=>{let le=Te?.pieces?.[Dt];F==="terrain"&&!le?.terrain&&(F="object"),F==="material"&&!le&&(F="object"),e.dataset.tab=F;for(let ne of N.querySelectorAll("button"))ne.setAttribute("aria-pressed",String(ne.dataset.tab===F)),ne.disabled=ne.dataset.tab==="terrain"&&!le?.terrain;F==="terrain"&&(X("terrain-controls").open=!0),F==="material"&&(q.open=!0),W.scrollTop=0};for(let F of N.querySelectorAll("button"))F.addEventListener("click",()=>B(F.dataset.tab));window.setInspectorTab=B,B("object")}Yb();var Mt={scale:10,cx:0,cz:-6,width:30,height:40},Ra=new Uc({canvas:$t,antialias:!0});Ra.setPixelRatio(Math.min(devicePixelRatio,1.5));var Vt=new hn(52,1,.1,640);Vt.position.set(16,15,19);var It=new oh(Vt,$t);It.target.set(0,0,-5);It.mouseButtons.LEFT=null;It.mouseButtons.RIGHT=Xn.ROTATE;It.mouseButtons.MIDDLE=Xn.PAN;It.maxDistance=580;It.maxPolarAngle=Math.PI/2-.035;var xn=new vr;xn.background=new ke("#8fb6c6");var gg=new ws("#f0f5ff","#8e775c",2.6);xn.add(gg);var xd=new Ts("#fff1d2",1.8);xd.position.set(-9,18,6);xn.add(xd);var cs=new vr;cs.fog=new Ro("#a6d4ea",55,135);var io=rm(cs,Ra),xg=()=>tg(io.boxes);Te=xg();om(cs,io.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"});var Zb=fm();dm((n,e)=>{let{geo:t,material:i}=Zb[n],s=new de(t,i);t.computeBoundingBox(),s.position.set(e.x,-t.boundingBox.min.y,e.z),cs.add(s)});var _g=new de(new qe(1.8,2.03,.1),new nn({color:"#8daebc",metalness:.9,roughness:.12}));_g.position.set(Bc.x,Bc.y,Bc.z);cs.add(_g);var jb=io.boxes.filter(n=>n.half&&n.mesh?.isObject3D);jb.forEach(n=>n.mesh.removeFromParent());var _d=new en;_d.add(...cs.children);xn.add(_d);var dd=io.boxes.find(n=>n.heightfield).mesh;io.visual(7,0,7,!0,!0,!0,512,!1);var eo=new $o(60,60,"#d7e2e5","#5e7b8a");eo.material.transparent=!0;eo.material.opacity=.35;xn.add(eo);var Lt=new en;xn.add(Lt);var xt=new sh(Vt,$t);xt.setSize(.9);xt.setRotationSnap(Ve.degToRad(5));xt.enabled=!1;xn.add(xt.getHelper());var yd=new Set(["translate","rotate","scale"]),Jr=null,Pn=null,vd=!1,Sa=null,ah=!1,yg=()=>Number(X("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...X(n).options].some(t=>t.value===e)&&(X(n).value=e)}catch{}X(n).onchange=()=>{Pn=null;try{localStorage.setItem("gorilla-lab-"+n,X(n).value)}catch{}}}var Hs=new Map;try{X("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}X("magnet").onchange=()=>{Pn=null,Hs.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",X("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{vd=e.altKey});window.addEventListener("blur",()=>{vd=!1,Pn=null});function vg(n,e,t,i){let s={...e};if(!i)for(let m of t)s[m]=Math.round(e[m]/Ea())*Ea();if(i||!X("magnet").checked||!n.solid||n.terrain)return Pn=null,s;let r=yg(),o=X("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let _=new qt(...[m.pitch,m.yaw,m.roll??0].map(Ve.degToRad),"YXZ"),g=new at().makeRotationFromEuler(_).elements;return Object.fromEntries(["x","y","z"].map((p,v)=>[p,(Math.abs(g[v])*m.w+Math.abs(g[4+v])*m.h+Math.abs(g[8+v])*m.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let m of Te.pieces){if(m===n)continue;let _=l(m);if(_)for(let g of t){let p=Object.keys(a).filter(y=>y!==g),v=y=>Math.abs(s[y]-m[y])<c[y]+_[y]-.001,M=p.flatMap(y=>t.includes(y)&&v(p.find(A=>A!==y))?[-1,1].flatMap(A=>[-1,1].map(E=>{let P=m[y]+A*_[y]-E*c[y];return{key:y,value:P,distance:Math.abs(e[y]-P)}})):[]).sort((y,A)=>y.distance-A.distance)[0];if(!(o?!M||M.distance>r*1.8:!p.every(v)))for(let y of[-1,1]){let A=m[g]+y*(c[g]+_[g]),E=Te.pieces.indexOf(m)+":"+g+":"+y;h.push({key:E,axis:g,value:A,edge:o?M:null,distance:Math.max(Math.abs(A-e[g]),o?M.distance:0)})}}}let u=h.find(m=>m.key===Pn),f=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return f(u),s;Pn&&(Hs.set(Pn,(Hs.get(Pn)??0)+1),Pn=null);let d=h.filter(m=>m.distance<=r&&(Hs.get(m.key)??0)<3).sort((m,_)=>m.distance-_.distance)[0];if(d)f(d),Pn=d.key;else for(let m of h)m.distance<=r&&(Hs.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=e[m.axis]);return s}var hh=new qe(1,1,1),Jb=new Li,mh=new de(new Pi(.32,.75,5),new Wt({color:"#ffcd63"}));xn.add(mh);var Kr=new de(hh,new Wt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),$r=new de(new On(.055,10,8),new Wt({color:"#ffc85a",depthTest:!1}));$r.visible=!1;$r.renderOrder=20;xn.add($r);var wa=new de(mh.geometry,new Wt({color:"#ffe084",opacity:.65,transparent:!0,depthWrite:!1}));Kr.visible=wa.visible=!1;xn.add(Kr,wa);var ls=new Es,gh=new S(0,1,0),og=new un(gh,0),Kb=new Ke,ai=null,cd=!1;function sn(){cd||(cd=!0,requestAnimationFrame(()=>{cd=!1,Ra.render(xn,Vt),Ug()}))}function Md(){let n=$t.clientWidth||1,e=$t.clientHeight||1;Ra.setSize(n,e,!1),Vt.aspect=n/e,Vt.updateProjectionMatrix(),sn()}function bd(){let n=Math.max(1,nt.clientWidth),e=Math.max(1,nt.clientHeight);n===nt.width&&e===nt.height||(nt.width=n,nt.height=e,Sd(),li())}new ResizeObserver(Md).observe($t);new ResizeObserver(bd).observe(nt);It.addEventListener("change",sn);It.addEventListener("start",()=>zi(null));function Sd(){Mt.scale=Math.min(nt.width/Mt.width,nt.height/Mt.height)}function fh(n,e){return[nt.width/2+(n-Mt.cx)*Mt.scale,nt.height/2+(e-Mt.cz)*Mt.scale]}function fd(n){let e=nt.getBoundingClientRect();return{x:((n.clientX-e.left)*nt.width/e.width-nt.width/2)/Mt.scale+Mt.cx,z:((n.clientY-e.top)*nt.height/e.height-nt.height/2)/Mt.scale+Mt.cz}}function ag(n,e,t,i,s){let[r,o]=fh(n.x,n.z),a=Ve.degToRad(n.pitch),l=Ve.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);et.save(),et.translate(r,o),et.rotate(-Ve.degToRad(n.yaw));let u=c*Mt.scale,f=h*Mt.scale;et.globalAlpha=s,et.fillStyle=e,et.fillRect(-u/2,-f/2,u,f),et.globalAlpha=1,et.strokeStyle=t,et.lineWidth=i,et.strokeRect(-u/2,-f/2,u,f),et.restore()}function lg(n,e){let[t,i]=fh(n.x,n.z);et.save(),et.translate(t,i),et.rotate(Ve.degToRad(-n.yaw)),et.fillStyle=e?"#fff0bb":"#ffd16e",et.strokeStyle="#263740",et.lineWidth=1.5,et.beginPath(),et.moveTo(0,-8),et.lineTo(6,5),et.lineTo(0,3),et.lineTo(-6,5),et.closePath(),et.fill(),et.stroke(),et.restore()}function li(){et.fillStyle="#192e3a",et.fillRect(0,0,nt.width,nt.height),et.strokeStyle="#37505f",et.lineWidth=1;let n=Mt.scale<1?25:Mt.scale<4?10:Mt.scale<12?5:1,e=(Te.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=fh(r,r);o>=0&&o<=nt.width&&(et.beginPath(),et.moveTo(o,0),et.lineTo(o,nt.height),et.stroke()),a>=0&&a<=nt.height&&(et.beginPath(),et.moveTo(0,a),et.lineTo(nt.width,a),et.stroke())}let[t,i]=fh(-e,-e);et.strokeStyle="#ffda9077",et.lineWidth=2,et.strokeRect(t,i,e*2*Mt.scale,e*2*Mt.scale);let s=Te.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?ad[r.material]:r.color);ag(r,a,o===Dt?"#ffe095":"#a4bac7",o===Dt?2:1,r.solid?.86:.38)}lg(Te.spawn,!1),Zn&&(tt==="spawn"?lg(Zn,!0):ag(Zn,"#8ee7fc","#afefff",2,.45))}function ph(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==Kr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Ve.degToRad(e.pitch),Ve.degToRad(e.yaw),Ve.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function Mg(){ai&&(xn.remove(ai),ai.geometry.dispose(),ai.material.dispose());let n=Lt.children[Dt];ai=n?new Ir(n,"#ffdf88"):null,ai&&xn.add(ai),pd()}function pd(){let n=Lt.children[Dt],e=lt()?.terrain,t=yd.has(tt)&&!!n&&!(e&&tt==="rotate");if(xt.enabled=t,!t){xt.detach(),e&&tt==="rotate"&&(X("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}xt.setMode(tt),xt.setSpace(tt==="translate"?"world":"local"),xt.setTranslationSnap(null),xt.showX=xt.showZ=!0,xt.showY=!(e&&tt==="scale"),xt.attach(n),X("tool-help").textContent=gd[tt]}var Qr=!1;function bg(){if(tt!=="scale")return;let n=lt(),e=Jr?.map.pieces[Dt],t=xt.object;if(!n||!e||!t)return;let i=jm(e,n,Qr),s=(Te.worldSize??240)/2;n.x=Ve.clamp(i.x,-s,s),n.y=Ve.clamp(i.y,-256,256),n.z=Ve.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),ai?.update();for(let r of["x","y","z"])X("p-"+r).value=n[r].toFixed(2);li(),sn()}function Sg(n){let e=Qr;Qr=n.ctrlKey,e!==Qr&&xt.dragging&&bg()}for(let n of["keydown","keyup"])window.addEventListener(n,Sg);$t.addEventListener("pointermove",Sg,{capture:!0});xt.addEventListener("change",sn);xt.addEventListener("mouseDown",()=>{let n=lt();Pn=null,n&&(Jr={map:structuredClone(Te),selected:Dt}),Qr=!!(Qr||window.event?.ctrlKey)});xt.addEventListener("objectChange",()=>{let n=lt(),e=xt.object,t=Jr?.map.pieces[Dt];if(!n||!e||!t)return;let i=Ve.clamp;if(tt==="translate"){let s=["x","y","z"].filter(a=>(xt.axis??"XYZ").includes(a.toUpperCase())),r=vg(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,vd),o=(Te.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else tt==="rotate"?(n.pitch=Ve.radToDeg(e.rotation.x),n.yaw=Ve.radToDeg(e.rotation.y),n.roll=Ve.radToDeg(e.rotation.z)):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,Vs),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,Vs),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),bg());e.updateMatrixWorld(!0),ai?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])X("p-"+s).value=Number(n[s]??0).toFixed(2);li(),sn()});xt.addEventListener("dragging-changed",({value:n})=>{if(It.enabled=!n,n||!Jr)return;let e=Jr;Jr=null,JSON.stringify(e.map.pieces[Dt])!==JSON.stringify(lt())&&(as.length>=35&&as.shift(),as.push(e),Te=an(Te),Et(),ft("Transformation appliqu\xE9e."))});$t.addEventListener("pointerup",()=>{xt.dragging||(It.enabled=!0)});$t.addEventListener("pointercancel",()=>{xt.dragging&&xt.pointerUp(null),It.enabled=!0});function $b(){xt.detach();for(let n of[...Lt.children])Lt.remove(n),n.geometry!==hh&&n.geometry.dispose(),n.userData.vegetation&&Nm(n.userData.vegetation),n.userData.ownsTexture&&n.material.map?.dispose(),Jc(n.material);_d.visible=!!Te.arenaBase,xd.visible=gg.visible=!Te.arenaBase,xn.fog=Te.arenaBase?cs.fog:null,xn.environment=Te.arenaBase?cs.environment:null;for(let n of Te.pieces){if(n.model){let r=new de(Kc(n.model),jc(n.model));r.castShadow=r.receiveShadow=!0,Lt.add(r),ph(r,n);continue}let e=[10,11,12].includes(n.material),t=new pn({color:new ke(ad[n.material]).multiply(new ke(n.color)),transparent:!n.solid||e,opacity:n.solid?e?.55:1:.4});if(Te.arenaBase&&!n.texture){let r=io.mapMaterial(n.material,7);t.color.set(n.color),t.map=r.map,t.opacity=n.solid?r.opacity:.4,t.transparent=!n.solid||r.transparent}n.texture&&(t.map=Jb.load(n.texture,sn),t.map.colorSpace=gt,t.map.wrapS=t.map.wrapT=Gn,t.color.set(n.color));let i=n.terrain?Ju(n):n.primitive&&n.primitive!=="box"?Zp(n.primitive):n.texture||Te.arenaBase?Fc(n.w,n.h,n.d).scale(1/n.w,1/n.h,1/n.d):hh;i!==hh&&Yp(i,n);let s=new de(i,t);if(s.userData.ownsTexture=!!n.texture,n.terrain){let r=Um(n);r&&(s.add(r),s.userData.vegetation=r)}Lt.add(s),ph(s,n)}mh.position.set(Te.spawn.x,Te.spawn.y+.38,Te.spawn.z),Ng(),Mg()}function lt(){return Te.pieces[Dt]}function ft(n){X("editor-note").textContent=n}function Ut(){as.length>=35&&as.shift(),as.push({map:structuredClone(Te),selected:Dt}),X("undo").disabled=!1}function wg(){try{localStorage.setItem(fg,JSON.stringify(Te)),X("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"}catch{X("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."}}var cg=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Tg(){let n=cg(X("piece-search").value.trim()),e=[];Te.pieces.forEach((t,i)=>{cg(t.name).includes(n)&&e.push(new Option(t.name,i,!1,i===Dt))}),X("pieces").replaceChildren(...e),X("pieces").value=String(Dt),e.length||X("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(X("pieces").options[0].disabled=!0),X("count").textContent=n?e.length+" sur "+Te.pieces.length:Te.pieces.length+" / "+ba}function Eg(){Tg();let n=lt();X("piece-inspector").hidden=!n,X("selection-help").hidden=!!n,X("focus-piece").disabled=!n,X("selection-title").textContent=n?n.name:"Aucune pi\xE8ce s\xE9lectionn\xE9e";for(let t of ug){let i=X("p-"+t);i.disabled=!n,t==="solid"?i.checked=n?.solid??!1:i.value=n?.[t]??(t==="color"?"#ffffff":"")}for(let t of["rotate","duplicate","texture-file","surface","spawn-here"])X(t).disabled=!n;X("delete").disabled=!n||Te.pieces.length===1,X("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",X("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",X("texture-clear").disabled=!n?.texture,X("texture-paint").disabled=!n||!!n.model;let e=n?.terrain;X("terrain-grassTexture-paint").disabled=!e;for(let t of dg){let i=X("p-"+t);i.disabled=!n||!!n?.model,i.value=n?.[t]??(t==="uvScale"?1:0)}if(X("uv-reset").disabled=!n||!!n?.model,X("terrain-controls").hidden=!e,e){for(let t of Lg)X("terrain-"+t).value=e[t];for(let t of["grass","shrub"]){let i=X("terrain-"+t+"Model"),s=e[t+"Model"]?.id??"";s&&![...i.options].some(r=>r.value===s)&&i.add(new Option(e[t+"Model"].name+" (carte)",s)),i.value=s}X("terrain-cell-size").textContent=(n.w/e.detail).toFixed(2)+" \xD7 "+(n.d/e.detail).toFixed(2)+" m",X("p-pitch").disabled=X("p-yaw").disabled=X("p-roll").disabled=!0}X("rotate").disabled=!n||!!e,X("texture-create").disabled=!n,X("surface").value="",X("undo").disabled=as.length===0,X("active-selection").textContent=n?n.name:"Aucune s\xE9lection",document.querySelector("#scene-sidebar").dataset.tab==="terrain"&&!e&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="terrain"]').disabled=!e}function Et(){X("map-name").value=Te.name,X("map-world-size").value=Te.worldSize??240,Eg();for(let n of["x","y","z","yaw"])X("spawn-"+n).value=Te.spawn[n];$b(),li(),sn(),wg()}function Ta(n){Dt!==n&&(Dt=n,Pn=null,Hs.clear(),Eg(),Mg(),li(),sn())}function Ag(n){if(Te.pieces.length>=ba)return ft("Limite de pi\xE8ces atteinte.");Ut(),Te.pieces.push(n),Dt=Te.pieces.length-1,Et(),ft(n.name+" ajout\xE9 \xE0 la map.")}function wd(){if(!lt()||Te.pieces.length===1)return;let n=lt().name;Ut(),Te.pieces.splice(Dt,1),Dt=Math.min(Dt,Te.pieces.length-1),Et(),ft(n+" retir\xE9 de la map.")}function Td(){let n=lt();if(!n)return;let e=Ve.clamp(n.x+n.w+Ea(),-120,120);Ag({...n,name:(n.name+" bis").slice(0,36),x:e})}function Qb(){let n=lt();!n||n.terrain||(Ut(),n.yaw=(n.yaw+45)%360,Et())}function Cg(){let n=as.pop();n&&(Te=n.map,Dt=n.selected,zi(null),Et(),ft("Derni\xE8re modification annul\xE9e."))}function Ed(){let n=gd[tt]??"";if(tt!=="model"||!Gs()){X("tool-help").textContent=n;return}let e=mg(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);X("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Bi(n){tt=n,It.mouseButtons.LEFT=tt==="view"?Xn.ROTATE:null,pd(),sn();for(let e of dh)e.setAttribute("aria-pressed",String(e.dataset.tool===tt));for(let e of[$t,nt])e.dataset.tool=tt,e.removeAttribute("data-hit");Ed(),pd(),sn(),zi(null)}function Ws(){let n=new Zt().setFromObject(Lt);n.expandByPoint(mh.position);let e=n.getCenter(new S),t=n.getSize(new S);Mt={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(Te.worldSize??240,500)),height:Math.max(t.z+5,Math.min(Te.worldSize??240,500))},Sd();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));eo.scale.setScalar(i),eo.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Vt.position.clone().sub(It.target).normalize(),r=new S().crossVectors(gh,s).normalize(),o=new S().crossVectors(s,r),a=Math.tan(Ve.degToRad(Vt.fov/2))*.87,l=a*Vt.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let f of[n.min.z,n.max.z]){let d=new S(h,u,f).sub(e),m=Math.max(Math.abs(d.dot(r))/l,Math.abs(d.dot(o))/a);c=Math.max(c,m+d.dot(s))}c=Math.min(c,It.maxDistance),It.target.copy(e),Vt.position.copy(e).addScaledVector(s,c),It.update(),Vt.updateMatrixWorld(),li(),sn()}function Ad(n,e){Ut(),Te=n,Pn=null,Hs.clear(),Dt=-1,X("piece-search").value="",Bi("move"),Et(),Ws(),ft(e)}function Ea(){return Number(X("snap").value)}function lh(n){let e=Ea(),t=(Te.worldSize??240)/2;return Ve.clamp(Math.round(n/e)*e,-t,t)}function Cd(n,e){if(n===nt){let t=fd(e);ls.set(new S(t.x,80,t.z),new S(0,-1,0))}else{let t=$t.getBoundingClientRect();Vt.updateMatrixWorld(),ls.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Vt)}}function md(n){return og.constant=-n,ls.ray.intersectPlane(og,new S)}function to(n,e){return Cd(n,e),ls.intersectObjects(Te.arenaBase?[...Lt.children,dd]:Lt.children,!1)[0]}function Rg(n,e,t,i=null){ls.set(new S(n,80,e),new S(0,-1,0));let s=i?ls.intersectObject(i,!1)[0]:ls.intersectObjects(Te.arenaBase?[...Lt.children,dd]:Lt.children,!1).find(r=>r.object===dd||Te.pieces[Lt.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:e,yaw:t}}function Pg(n,e){Sa=null,ah=!1;let t=to(n,e);if(tt==="spawn"){if(!t)return null;let h=lh(t.point.x),u=lh(t.point.z);return Rg(h,u,Te.spawn.yaw)}if(tt==="terrain"){let h=t?.point??md(0);return h?{...ld.terrain,terrain:Zr(ld.terrain.terrain),x:lh(h.x),y:h.y,z:lh(h.z)}:null}if(tt==="sculpt"||tt==="model"&&!Gs())return null;let i=t?.point??md(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix(Kb.getNormalMatrix(t.object.matrixWorld)):gh,r=t&&eS(t),o=yg();r&&r.distance<=o*2&&(Sa=r.point,ah=X("magnet").checked&&!e.altKey&&X("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=ah||e.altKey?1e-6:Ea(),l=tt==="model"?mg():tt==="preset"?Xb():ld[tt],c=ig(ah?Sa:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=Te.worldSize/2?c:null}function eS(n){let e=n.object,t=Te.pieces[Lt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:e.localToWorld(c)})}return o}function zi(n){!n&&!Zn||(Zn=n,$r.visible=!!(Zn&&Sa),$r.visible&&$r.position.copy(Sa),wa.visible=!!(Zn&&tt==="spawn"),Kr.visible=!!(Zn&&tt!=="spawn"),wa.visible&&wa.position.set(Zn.x,Zn.y+.38,Zn.z),Kr.visible&&ph(Kr,Zn),li(),sn())}function tS(n,e){let t=Pg(n,e);if(!t){ft(tt==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}tt==="spawn"?(Ut(),Te.spawn=t,Bi("move"),Et(),ft("Point de d\xE9part d\xE9plac\xE9.")):(zi(null),Ag(t))}function nS(n,e){if(tt==="view"||e.button!==0||!e.isPrimary||dt||xt.dragging)return;if(yd.has(tt)){if(n===$t&&xt.enabled){let o=$t.getBoundingClientRect();if(xt.pointerHover({x:(e.clientX-o.left)/o.width*2-1,y:1-(e.clientY-o.top)/o.height*2,button:0}),xt.axis){It.enabled=!1;return}}e.stopImmediatePropagation();let r=to(n,e);Ta(r?Lt.children.indexOf(r.object):-1);return}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:tt};if(dt=t,Pn=null,tt==="sculpt"){Dg(n,e);return}if(tt!=="move")return;let i=to(n,e);Ta(i?Lt.children.indexOf(i.object):-1);let s=lt();!i||!s||(t.height=i.point.y,t.dx=i.point.x-s.x,t.dz=i.point.z-s.z)}function iS(n,e){if(tt==="view"||yd.has(tt))return;if(!dt){tt==="move"?n.toggleAttribute("data-hit",!!to(n,e)):zi(Pg(n,e));return}if(tt==="sculpt"&&dt.id===e.pointerId&&dt.canvas===n){Math.hypot(e.clientX-dt.clientX,e.clientY-dt.clientY)>=7&&(Dg(n,e),dt.clientX=e.clientX,dt.clientY=e.clientY);return}if(dt.id!==e.pointerId||dt.canvas!==n||dt.height===void 0||!lt()||Math.hypot(e.clientX-dt.clientX,e.clientY-dt.clientY)<4&&!dt.recorded)return;Cd(n,e);let i=md(dt.height);if(!i)return;let s=lt(),r=vg(s,{x:i.x-dt.dx,y:s.y,z:i.z-dt.dz},["x","z"],e.altKey),o=(Te.worldSize??240)/2,a=Ve.clamp(r.x,-o,o),l=Ve.clamp(r.z,-o,o);a===s.x&&l===s.z||(dt.recorded||(Ut(),dt.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,ph(Lt.children[Dt],s),ai?.update(),X("p-x").value=a,X("p-z").value=l,li(),sn())}function hd(n,e,t){if(!dt||dt.canvas!==n||dt.id!==e.pointerId)return;let i=dt;if(dt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Et(),ft("Relief modifi\xE9."));return}i.recorded&&(wg(),ft(lt().name+" d\xE9plac\xE9.")),t&&tt===i.tool&&tt!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&tS(n,e)}var jn=null,xh=!1,ch=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(xh=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(xh=!1)});window.addEventListener("blur",()=>{jn=null,xh=!1});nt.addEventListener("pointerdown",n=>{n.button!==1&&!(xh&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),jn={id:n.pointerId,x:n.clientX,y:n.clientY},nt.setPointerCapture(n.pointerId),nt.style.cursor="grabbing")},{capture:!0});nt.addEventListener("pointermove",n=>{!jn||jn.id!==n.pointerId||(n.stopImmediatePropagation(),Mt.cx-=(n.clientX-jn.x)/Mt.scale,Mt.cz-=(n.clientY-jn.y)/Mt.scale,jn.x=n.clientX,jn.y=n.clientY,li())},{capture:!0});function Ig(n){!jn||jn.id!==n.pointerId||(jn=null,nt.style.cursor="",nt.hasPointerCapture(n.pointerId)&&nt.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}nt.addEventListener("pointerup",Ig,{capture:!0});nt.addEventListener("pointercancel",Ig,{capture:!0});function Rd(n,e){let t=nt.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=fd({clientX:i,clientY:s}),o=Ve.clamp(Mt.width/n,.75,4096),a=o/Mt.width;Mt.width=o,Mt.height*=a,Sd();let l=fd({clientX:i,clientY:s});Mt.cx+=r.x-l.x,Mt.cz+=r.z-l.z,li()}nt.addEventListener("wheel",n=>{n.preventDefault(),Rd(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});X("plan-zoom-in").onclick=()=>Rd(1.25);X("plan-zoom-out").onclick=()=>Rd(.8);X("plan-fit").onclick=Ws;var bi=X("context-actions"),Aa=!1;function no(){bi.hidden=!0}for(let n of[$t,nt])n.addEventListener("pointerdown",e=>{e.button===2?ch={canvas:n,x:e.clientX,y:e.clientY}:no()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Aa){Aa=!1;return}if(ch?.canvas!==n||Math.hypot(e.clientX-ch.x,e.clientY-ch.y)>6)return;let t=to(n,e),i=t?Lt.children.indexOf(t.object):-1;if(i<0){no();return}Ta(i),X("context-title").textContent=lt()?.name??"Pi\xE8ce",bi.querySelector('[data-context-action="delete"]').textContent=lt()?.model?"Retirer de la carte":"Supprimer",bi.hidden=!1;let s=195,r=285;bi.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",bi.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{bi.hidden||bi.contains(n.target)||(Aa=n.button===2,no())},{capture:!0});document.addEventListener("contextmenu",n=>{Aa&&n.target!==$t&&n.target!==nt&&(Aa=!1,n.preventDefault()),!bi.hidden&&!bi.contains(n.target)&&n.target!==$t&&n.target!==nt&&no()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&no()});for(let n of bi.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;no(),e==="duplicate"?Td():e==="delete"?wd():e==="focus"?X("focus-piece").click():Bi(e==="select"?"move":e)};for(let n of[$t,nt])n.addEventListener("pointerdown",e=>nS(n,e),{capture:!0}),n.addEventListener("pointermove",e=>iS(n,e)),n.addEventListener("pointerup",e=>hd(n,e,!0)),n.addEventListener("pointercancel",e=>hd(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||hd(n,e,!1)}),n.addEventListener("pointerleave",()=>{dt||zi(null)});X("p-material").append(...eg.map((n,e)=>new Option(n,e)));for(let n of dg)X("p-"+n).addEventListener("change",e=>{let t=lt();!t||t.model||(Ut(),t[n]=Number(e.target.value),Te=an(Te),Et())});X("uv-reset").onclick=()=>{let n=lt();!n||n.model||(Ut(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),Te=an(Te),Et())};for(let n of ug)X("p-"+n).addEventListener("change",e=>{let t=lt();if(!t)return;Ut();let i=e.target;n==="solid"?t[n]=i.checked:t[n]=["name","color"].includes(n)?i.value:Number(i.value),Te=an(Te),Et()});X("map-world-size").onchange=n=>{Ut(),Te.worldSize=Ve.clamp(Number(n.target.value)||240,24,2048),Te=an(Te),Et(),Ws(),ft("Zone de construction : "+Te.worldSize+" \xD7 "+Te.worldSize+" m.")};X("map-name").onchange=n=>{Ut(),Te.name=n.target.value,Te=an(Te),Et()};X("piece-search").addEventListener("input",Tg);X("pieces").onchange=n=>{n.target.value!==""&&Ta(Number(n.target.value))};X("focus-piece").onclick=()=>{let n=Lt.children[Dt];if(!n)return;let e=new Zt().setFromObject(n).getBoundingSphere(new Hn),t=Vt.position.clone().sub(It.target).normalize(),i=Math.atan(Math.tan(Ve.degToRad(Vt.fov/2))*Math.min(Vt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);It.target.copy(e.center),Vt.position.copy(e.center).addScaledVector(t,s),It.update(),sn()};for(let n of["x","y","z","yaw"])X("spawn-"+n).onchange=e=>{Ut(),Te.spawn[n]=Number(e.target.value),Te=an(Te),Et()};X("spawn-here").onclick=()=>{let n=lt();if(!n)return;let e=n.solid&&Rg(n.x,n.z,n.yaw,Lt.children[Dt]);if(!e)return ft("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Ut(),Te.spawn=e,Et(),ft("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of dh)n.onclick=()=>Bi(n.dataset.tool);X("duplicate").onclick=Td;X("delete").onclick=wd;X("rotate").onclick=Qb;X("undo").onclick=Cg;X("zoom-fit").onclick=Ws;X("snap").onchange=()=>zi(null);X("new-example").onclick=()=>Ad(xg(),"Ar\xE8ne de d\xE9part ouverte.");X("blank-map").onclick=()=>{let n=Ve.clamp(Number(X("map-world-size").value)||240,24,2048);Ad({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[os({name:"Sol",y:-.25,w:Math.min(n,Vs),d:Math.min(n,Vs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};X("surface").onchange=n=>{let e=Ma[n.target.value],t=lt();!e||!t||(Ut(),Object.assign(t,e),Et())};X("texture-file").onchange=async n=>{let e=n.target.files[0],t=lt();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!Te.pieces.includes(t))return ft("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Ut(),t.texture=o,Et(),ft("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){ft(i.message)}finally{n.target.value=""}};X("texture-paint").onclick=()=>{let n=lt();if(!n||n.model)return ft("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Qu({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!Te.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Ut(),n.texture=e,Te=an(Te),Et(),ft("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};X("terrain-grassTexture-paint").onclick=()=>{let n=lt();n?.terrain&&Qu({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!Te.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Ut(),n.terrain.grassTexture=e,Te=an(Te),Et(),ft("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};X("texture-clear").onclick=()=>{lt()?.texture&&(Ut(),lt().texture=null,Et())};X("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{Ad(an(await e.text()),"Map charg\xE9e.")}catch(t){ft(t.message)}finally{n.target.value=""}};X("export-map").onclick=()=>{try{rg(Te),ft("Map JSON export\xE9e.")}catch(n){ft(n.message)}};X("test-map").onclick=()=>{try{localStorage.setItem(sg,JSON.stringify(an(Te))),location.href="./?custom=1"}catch{ft("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Lg=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","grass","shrub","grassSize","shrubSize"];for(let n of["grass","shrub"])X("terrain-"+n+"Model").addEventListener("change",e=>{let t=lt();if(!t?.terrain)return;let i=Rn.find(s=>s.id===e.target.value)??(t.terrain[n+"Model"]?.id===e.target.value?t.terrain[n+"Model"]:null);Ut(),t.terrain[n+"Model"]=i?structuredClone(i):null,Te=an(Te),Et(),ft("V\xE9g\xE9tation personnalis\xE9e mise \xE0 jour.")});X("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=lt();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!Te.pieces.includes(t))return;Ut(),t.terrain.grassTexture=o,Et(),ft("Texture d\u2019herbe import\xE9e.")}catch(i){ft(i.message)}};X("terrain-grassTexture-clear").onclick=()=>{lt()?.terrain&&(Ut(),lt().terrain.grassTexture=null,Et())};for(let n of Lg)X("terrain-"+n).onchange=e=>{let t=lt();t?.terrain&&(Ut(),t.terrain=n==="detail"?Im(t.terrain,Number(e.target.value)):Zr({...t.terrain,[n]:Number(e.target.value)}),Et())};X("terrain-reset").onclick=()=>{lt()?.terrain&&(Ut(),lt().terrain.heights=null,Et())};function Dg(n,e){Cd(n,e);let t=ls.intersectObjects(Lt.children,!1).find(a=>Te.pieces[Lt.children.indexOf(a.object)]?.terrain),i=t?Lt.children.indexOf(t.object):-1,s=Te.pieces[i];if(!s?.terrain||(dt.recorded||(Ut(),dt.recorded=!0,dt.flattenY=t.point.y,Ta(i),X("terrain-controls").open=!0),i!==Dt))return;let r={mode:X("terrain-brush").value,radius:Number(X("brush-radius").value),strength:Number(X("brush-strength").value),target:dt.flattenY};if(!Dm(s,t.point.x,t.point.z,r))return;let o=Lt.children[i];o.geometry.dispose(),o.geometry=Ju(s),ai?.update(),li(),sn()}X("texture-style").replaceChildren(...Ku.map((n,e)=>new Option(n,e)));X("texture-create").onclick=()=>{let n=lt();if(!n)return;let e=Om(Number(X("texture-style").value),X("texture-tint").value);Ut(),n.texture=e.toDataURL("image/webp",.85),Et(),ft("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};X("view-top").onclick=()=>{let n=It.target,e=Math.max(10,Vt.position.distanceTo(n));Vt.position.copy(n).add(new S(0,e,.001)),It.update(),sn()};X("view-perspective").onclick=()=>{Vt.position.copy(It.target).add(new S(16,15,24)),Ws()};X("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=Te.spawn,s=new S(0,0,-1).applyAxisAngle(gh,Ve.degToRad(i));Vt.position.set(n,e+.87,t),It.target.copy(Vt.position).addScaledVector(s,5),Vt.lookAt(It.target),sn()};var hg={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||dt||xt.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")Cg();else if(e==="d")Td();else return;else{if(n.altKey)return;if(hg[e])Bi(hg[e]);else if(e==="f")Ws();else if(e==="delete")wd();else return}n.preventDefault()});var uh=new en;xn.add(uh);function Ug(){if(!X("debug-stats"))return;let n=Ra.info.render.triangles,e=Te?.pieces?.length??0;X("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(Te?.worldSize??240)+" m"}function Ng(){for(let n of[...uh.children])uh.remove(n),n.geometry.dispose(),n.material.dispose();eo.visible=X("debug-grid").checked;for(let n of Lt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=X("debug-wire").checked;X("debug-hitboxes").checked&&uh.add(new Ir(n,"#fa9945"))}sn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])X(n).onchange=Ng;X("debug-coords").onchange=()=>{X("debug-coords").checked||Ug()};for(let n of[$t,nt])n.addEventListener("pointermove",e=>{if(!X("debug-coords").checked||dt||jn)return;let t=to(n,e);if(!t)return;let i=t.point;X("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+Te.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(fg);if(n){let e=an(n);JSON.stringify(e)!==JSON.stringify(ng())&&(Te=e)}}catch{}Bi("move");Et();Md();bd();Ws();Ca();if(ud){let n=Rn.find(e=>e.id===ud);n?(X("place-model").click(),ft("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):ft("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}})();
