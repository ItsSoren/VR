(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,$h=1,cf=2;var Qh=1,hf=2,gi=3,Qn=0,rn=1,Ye=2,Pi=0,fs=1,Jo=2,tu=3,eu=4,uf=5,Gi=100,df=101,ff=102,pf=103,mf=104,gf=200,xf=201,_f=202,yf=203,sl=204,rl=205,vf=206,Mf=207,bf=208,Sf=209,wf=210,Tf=211,Ef=212,Af=213,Cf=214,Ul=0,Nl=1,Fl=2,ps=3,Ol=4,Bl=5,zl=6,kl=7,Vl=0,Rf=1,Pf=2,Ii=0,If=1,Lf=2,Df=3,Uf=4,Nf=5,Ff=6,Of=7;var nu=300,ws=301,Ts=302,Ar=303,Gl=304,jo=306,Gn=1e3,Vi=1001,ol=1002,wn=1003,Bf=1004;var Ko=1005;var sn=1006,Hl=1007;var En=1008;var ni=1009,iu=1010,su=1011,Cr=1012,Wl=1013,Yi=1014,ii=1015,Rr=1016,Xl=1017,ql=1018,Pr=1020,ru=35902,ou=35899,au=1021,lu=1022,An=1023,lr=1026,Ir=1027,Yl=1028,Zl=1029,cu=1030,Jl=1031;var jl=1033,$o=33776,Qo=33777,ta=33778,ea=33779,Kl=35840,$l=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,yc=36494,vc=36495,Mc=36283,bc=36284,Sc=36285,wc=36286;var xo=2300,al=2301,nl=2302,kh=2400,Vh=2401,Gh=2402;var zf=3200,kf=3201;var Tc=0,Vf=1,Li="",me="srgb",ms="srgb-linear",_o="linear",_e="srgb";var ds=7680;var Hh=519,Gf=512,Hf=513,Wf=514,hu=515,Xf=516,qf=517,Yf=518,Zf=519,ll=35044,na=35048;var uu="300 es",$n=2e3,yo=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,fo=Math.PI/180,cr=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function du(n,t){return(n%t+t)%t}function Cg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Rg(n,t,e){return n!==t?(e-n)/(t-n):0}function po(n,t,e){return(1-e)*n+e*t}function Pg(n,t,e,i){return po(n,t,1-Math.exp(-e*i))}function Ig(n,t=1){return t-Math.abs(du(n,t*2)-t)}function Lg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Dg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ug(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ng(n,t){return n+Math.random()*(t-n)}function Fg(n){return n*(.5-Math.random())}function Og(n){n!==void 0&&(Ed=n);let t=Ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bg(n){return n*fo}function zg(n){return n*cr}function kg(n){return(n&n-1)===0&&n!==0}function Vg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hg(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vt={DEG2RAD:fo,RAD2DEG:cr,generateUUID:hi,clamp:jt,euclideanModulo:du,mapLinear:Cg,inverseLerp:Rg,lerp:po,damp:Pg,pingpong:Ig,smoothstep:Lg,smootherstep:Dg,randInt:Ug,randFloat:Ng,randFloatSpread:Fg,seededRandom:Og,degToRad:Bg,radToDeg:zg,isPowerOfTwo:kg,ceilPowerOfTwo:Vg,floorPowerOfTwo:Gg,setQuaternionFromProperEuler:Hg,normalize:xe,denormalize:Kn},ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),A=Math.atan2(C,p*S);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}let y=a*S;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ad.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new b,Ad=new ue,Kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],S=s[1],M=s[4],y=s[7],C=s[2],A=s[5],P=s[8];return r[0]=o*_+a*S+l*C,r[3]=o*g+a*M+l*A,r[6]=o*p+a*y+l*P,r[1]=c*_+h*S+u*C,r[4]=c*g+h*M+u*A,r[7]=c*p+h*y+u*P,r[2]=d*_+f*S+m*C,r[5]=d*g+f*M+m*A,r[8]=d*p+f*y+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fh.makeScale(t,e)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,e){return this.premultiply(fh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fh=new Kt;function fu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jf(){let n=hr("canvas");return n.style.display="block",n}var Cd={};function ur(n){n in Cd||(Cd[n]=!0,console.warn(n))}function jf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Rd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:_o,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:me}}}),n}var le=Wg();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vs,cl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vs===void 0&&(Vs=hr("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Vs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xg=0,dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ph(s[o].image)):r.push(ph(s[o]))}else r=ph(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qg=0,mh=new b,un=class n extends ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Vi,s=Vi,r=sn,o=En,a=An,l=ni,c=n.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=hi(),this.name="",this.source=new dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=nu;un.DEFAULT_ANISOTROPY=1;var ze=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,y=(f+1)/2,C=(p+1)/2,A=(h+d)/4,P=(u+_)/4,D=(m+g)/4;return M>y&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=P/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=D/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends ui{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new un(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new dr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends hl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vo=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),Ca.subVectors(this.max,eo),Gs.subVectors(t.a,eo),Hs.subVectors(t.b,eo),Ws.subVectors(t.c,eo),Ni.subVectors(Hs,Gs),Fi.subVectors(Ws,Hs),ls.subVectors(Gs,Ws);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!gh(e,Gs,Hs,Ws,Ca)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,Gs,Hs,Ws,Ca))?!1:(Ra.crossVectors(Ni,Fi),e=[Ra.x,Ra.y,Ra.z],gh(e,Gs,Hs,Ws,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bi=[new b,new b,new b,new b,new b,new b,new b,new b],Zn=new b,Aa=new Ze,Gs=new b,Hs=new b,Ws=new b,Ni=new b,Fi=new b,ls=new b,eo=new b,Ca=new b,Ra=new b,cs=new b;function gh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cs.fromArray(n,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yg=new Ze,no=new b,xh=new b,Hn=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Yg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(xh)),this.expandByPoint(no.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Si=new b,_h=new b,Pa=new b,Oi=new b,yh=new b,Ia=new b,vh=new b,Hi=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_h.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(_h);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=Oi.dot(this.direction),l=-Oi.dot(Pa),c=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_h).addScaledVector(Pa,d),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){yh.subVectors(e,t),Ia.subVectors(i,t),vh.crossVectors(yh,Ia);let o=this.direction.dot(vh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(Ia.crossVectors(Oi,Ia));if(l<0)return null;let c=a*this.direction.dot(yh.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(vh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zg,t,Jg)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Bi.crossVectors(i,Dn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Bi.crossVectors(i,Dn)),Bi.normalize(),La.crossVectors(Dn,Bi),s[0]=Bi.x,s[4]=La.x,s[8]=Dn.x,s[1]=Bi.y,s[5]=La.y,s[9]=Dn.y,s[2]=Bi.z,s[6]=La.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],S=i[3],M=i[7],y=i[11],C=i[15],A=s[0],P=s[4],D=s[8],w=s[12],v=s[1],I=s[5],N=s[9],V=s[13],X=s[2],G=s[6],q=s[10],tt=s[14],W=s[3],H=s[7],ot=s[11],Z=s[15];return r[0]=o*A+a*v+l*X+c*W,r[4]=o*P+a*I+l*G+c*H,r[8]=o*D+a*N+l*q+c*ot,r[12]=o*w+a*V+l*tt+c*Z,r[1]=h*A+u*v+d*X+f*W,r[5]=h*P+u*I+d*G+f*H,r[9]=h*D+u*N+d*q+f*ot,r[13]=h*w+u*V+d*tt+f*Z,r[2]=m*A+_*v+g*X+p*W,r[6]=m*P+_*I+g*G+p*H,r[10]=m*D+_*N+g*q+p*ot,r[14]=m*w+_*V+g*tt+p*Z,r[3]=S*A+M*v+y*X+C*W,r[7]=S*P+M*I+y*G+C*H,r[11]=S*D+M*N+y*q+C*ot,r[15]=S*w+M*V+y*tt+C*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,M=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,C=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,A=e*S+i*M+s*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=S*P,t[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*p-i*d*p)*P,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*P,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=y*P,t[9]=(m*u*r-h*_*r-m*i*f+e*_*f+h*i*p-e*u*p)*P,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*P,t[12]=C*P,t[13]=(h*_*s-m*u*s+m*i*d-e*_*d-h*i*g+e*u*g)*P,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*P,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,S=l*c,M=l*h,y=l*u,C=i.x,A=i.y,P=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+y)*C,s[2]=(m-M)*C,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(m+M)*P,s[9]=(g-S)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,h=1/o,u=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===$n)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===yo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=$n,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===$n)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===yo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Xs=new b,Jn=new ae,Zg=new b(0,0,0),Jg=new b(1,1,1),Bi=new b,La=new b,Dn=new b,Id=new ae,Ld=new ue,qe=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Id,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jg=0,Dd=new b,qs=new ue,wi=new ae,Da=new b,io=new b,Kg=new b,$g=new ue,Ud=new b(1,0,0),Nd=new b(0,1,0),Fd=new b(0,0,1),Od={type:"added"},Qg={type:"removed"},Ys={type:"childadded",child:null},Mh={type:"childremoved",child:null},Ce=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new b,e=new qe,i=new ue,s=new b(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Nd,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Nd,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Da.copy(t):Da.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(io,Da,this.up):wi.lookAt(Da,io,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(wi),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qg),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,Kg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,$g,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new b(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new b,Ti=new b,bh=new b,Ei=new b,Zs=new b,Js=new b,Bd=new b,Sh=new b,wh=new b,Th=new b,Eh=new ze,Ah=new ze,Ch=new ze,Sn=class n{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){jn.subVectors(s,e),Ti.subVectors(i,e),bh.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ti),l=jn.dot(bh),c=Ti.dot(Ti),h=Ti.dot(bh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Eh.setScalar(0),Ah.setScalar(0),Ch.setScalar(0),Eh.fromBufferAttribute(t,e),Ah.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Eh,r.x),o.addScaledVector(Ah,r.y),o.addScaledVector(Ch,r.z),o}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ti.subVectors(t,e),jn.cross(Ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),Js.subVectors(r,i),Sh.subVectors(t,i);let l=Zs.dot(Sh),c=Js.dot(Sh);if(l<=0&&c<=0)return e.copy(i);wh.subVectors(t,s);let h=Zs.dot(wh),u=Js.dot(wh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Zs,o);Th.subVectors(t,r);let f=Zs.dot(Th),m=Js.dot(Th);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Js,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Bd.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Bd,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Rh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=du(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Rh(o,r,t+1/3),this.g=Rh(o,r,t),this.b=Rh(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let i=Kf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return le.workingToColorSpace(ln.copy(this),t),Math.round(jt(ln.r*255,0,255))*65536+Math.round(jt(ln.g*255,0,255))*256+Math.round(jt(ln.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ln.copy(this),e);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=me){le.workingToColorSpace(ln.copy(this),t);let e=ln.r,i=ln.g,s=ln.b;return t!==me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Ua);let i=po(zi.h,Ua.h,e),s=po(zi.s,Ua.s,e),r=po(zi.l,Ua.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new kt;kt.NAMES=Kf;var t0=0,ti=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=fs,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},We=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new b,Na=new ft,e0=0,Se=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ll&&(t.usage=this.usage),t}};var Mo=class extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var bo=class extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var zt=class extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}},n0=0,Vn=new ae,Ph=new Ce,js=new b,Un=new Ze,so=new Ze,$e=new b,re=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?bo:Mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Un.min,so.min),Un.expandByPoint($e),$e.addVectors(Un.max,so.max),Un.expandByPoint($e)):(Un.expandByPoint(so.min),Un.expandByPoint(so.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(t,c),$e.add(js)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new b,l[D]=new b;let c=new b,h=new b,u=new b,d=new ft,f=new ft,m=new ft,_=new b,g=new b;function p(D,w,v){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[D].add(_),a[w].add(_),a[v].add(_),l[D].add(g),l[w].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,w=S.length;D<w;++D){let v=S[D],I=v.start,N=v.count;for(let V=I,X=I+N;V<X;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let M=new b,y=new b,C=new b,A=new b;function P(D){C.fromBufferAttribute(s,D),A.copy(C);let w=a[D];M.copy(w),M.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);let I=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,I)}for(let D=0,w=S.length;D<w;++D){let v=S[D],I=v.start,N=v.count;for(let V=I,X=I+N;V<X;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new ae,hs=new Hi,Fa=new Hn,kd=new b,Oa=new b,Ba=new b,za=new b,Ih=new b,ka=new b,Vd=new b,Va=new b,ht=class extends Ce{constructor(t=new re,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ih.fromBufferAttribute(u,t),o?ka.addScaledVector(Ih,h):ka.addScaledVector(Ih.sub(e),h))}e.add(ka)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(Fa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Fa,kd)===null||hs.origin.distanceToSquared(kd)>(t.far-t.near)**2))&&(zd.copy(r).invert(),hs.copy(t.ray).applyMatrix4(zd),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,C=M;y<C;y+=3){let A=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=Ga(this,p,t,i,c,h,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let S=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Ga(this,o,t,i,c,h,u,S,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,C=M;y<C;y+=3){let A=y,P=y+1,D=y+2;s=Ga(this,p,t,i,c,h,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let S=g,M=g+1,y=g+2;s=Ga(this,o,t,i,c,h,u,S,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function i0(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;Va.copy(a),Va.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:n}}function Ga(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Oa),n.getVertexPosition(l,Ba),n.getVertexPosition(c,za);let h=i0(n,t,e,i,Oa,Ba,za,Vd);if(h){let u=new b;Sn.getBarycoord(Vd,Oa,Ba,za,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new ft)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new ft)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new b,materialIndex:0};Sn.getNormal(Oa,Ba,za,d.normal),h.face=d,h.barycoord=u}return h}var qt=class n extends re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function m(_,g,p,S,M,y,C,A,P,D,w){let v=y/P,I=C/D,N=y/2,V=C/2,X=A/2,G=P+1,q=D+1,tt=0,W=0,H=new b;for(let ot=0;ot<q;ot++){let Z=ot*I-V;for(let F=0;F<G;F++){let et=F*v-N;H[_]=et*S,H[g]=Z*M,H[p]=X,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[p]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(F/P),u.push(1-ot/D),tt+=1}}for(let ot=0;ot<D;ot++)for(let Z=0;Z<P;Z++){let F=d+Z+G*ot,et=d+Z+G*(ot+1),Ct=d+(Z+1)+G*(ot+1),St=d+(Z+1)+G*ot;l.push(F,et,St),l.push(et,Ct,St),W+=6}a.addGroup(f,W,w),f+=W,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=Es(n[e]);for(let s in i)t[s]=i[s]}return t}function s0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var $f={clone:Es,merge:pn},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},So=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new b,Gd=new ft,Hd=new ft,cn=class extends So{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Gd,Hd),e.subVectors(Hd,Gd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ks=-90,$s=1,dl=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Ks,$s,t,e);s.layers=this.layers,this.add(s);let r=new cn(Ks,$s,t,e);r.layers=this.layers,this.add(r);let o=new cn(Ks,$s,t,e);o.layers=this.layers,this.add(o);let a=new cn(Ks,$s,t,e);a.layers=this.layers,this.add(a);let l=new cn(Ks,$s,t,e);l.layers=this.layers,this.add(l);let c=new cn(Ks,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},wo=class extends un{constructor(t=[],e=ws,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fl=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Pi});r.uniforms.tEquirect.value=e;let o=new ht(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=sn),new dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Qe=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var To=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new b,gr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xr=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,ro=new b,tr=new b,er=new b,nr=new ft,oo=new ft,Qf=new ae,Ha=new b,ao=new b,Wa=new b,Wd=new ft,Lh=new ft,Xd=new ft,Ao=class extends Ce{constructor(t=new xr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Eo(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new gr(i,3,0,!1)),Qs.setAttribute("uv",new gr(i,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Xa(Ha.set(-.5,-.5,0),er,o,tr,s,r),Xa(ao.set(.5,-.5,0),er,o,tr,s,r),Xa(Wa.set(.5,.5,0),er,o,tr,s,r),Wd.set(0,0),Lh.set(1,0),Xd.set(1,1);let a=t.ray.intersectTriangle(Ha,ao,Wa,!1,ro);if(a===null&&(Xa(ao.set(-.5,.5,0),er,o,tr,s,r),Lh.set(0,1),a=t.ray.intersectTriangle(Ha,Wa,ao,!1,ro),a===null))return;let l=t.ray.origin.distanceTo(ro);l<t.near||l>t.far||e.push({distance:l,point:ro.clone(),uv:Sn.getInterpolation(ro,Ha,ao,Wa,Wd,Lh,Xd,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xa(n,t,e,i,s,r){nr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(oo.x=r*nr.x-s*nr.y,oo.y=s*nr.x+r*nr.y):oo.copy(nr),n.copy(t),n.x+=oo.x,n.y+=oo.y,n.applyMatrix4(Qf)}var fi=class extends un{constructor(t=null,e=1,i=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends Se{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new ae,qd=new ae,qa=[],Yd=new Ze,l0=new ae,lo=new ht,co=new Hn,Co=class extends ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,l0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),Yd.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),co.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(co)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),t.ray.intersectsSphere(co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),qd.multiplyMatrices(i,ir),lo.matrixWorld=qd,lo.raycast(t,qa);for(let o=0,a=qa.length;o<a;o++){let l=qa[o];l.instanceId=r,l.object=this,e.push(l)}qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,Yl,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dh=new b,c0=new b,h0=new Kt,hn=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Dh.subVectors(i,e).cross(c0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Dh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||h0.getNormalMatrix(t),s=this.coplanarPoint(Dh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Hn,u0=new ft(.5,.5),Ya=new b,yr=class{constructor(t=new hn,e=new hn,i=new hn,s=new hn,r=new hn,o=new hn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],S=r[12],M=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,p-m,C-S).normalize(),s[1].setComponents(c+o,f+h,p+m,C+S).normalize(),s[2].setComponents(c+a,f+u,p+_,C+M).normalize(),s[3].setComponents(c-a,f-u,p-_,C-M).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,C-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,C-y).normalize(),e===$n)s[5].setComponents(c+l,f+d,p+g,C+y).normalize();else if(e===yo)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=u0.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ya.x=s.normal.x>0?t.max.x:t.min.x,Ya.y=s.normal.y>0?t.max.y:t.min.y,Ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pl=new b,ml=new b,Zd=new ae,ho=new Hi,Za=new Hn,Uh=new b,Jd=new b,Tn=class extends Ce{constructor(t=new re,e=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)pl.fromBufferAttribute(e,s-1),ml.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,t.ray.intersectsSphere(Za)===!1)return;Zd.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),S=h.getX(_+1),M=Ja(this,t,ho,l,p,S,_);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Ja(this,t,ho,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=Ja(this,t,ho,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Ja(this,t,ho,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ja(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(pl.fromBufferAttribute(a,s),ml.fromBufferAttribute(a,r),e.distanceSqToSegment(pl,ml,Uh,Jd)>i)return;Uh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uh);if(!(c<t.near||c>t.far))return{distance:c,point:Jd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var jd=new b,Kd=new b,Ro=class extends Tn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)jd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jd.distanceTo(Kd);t.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends Tn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var mi=class extends un{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Io=class extends un{constructor(t,e,i=Yi,s,r,o,a=wn,l=wn,c,h=lr,u=1){if(h!==lr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lo=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},gs=class n extends re{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=i*2+r,_=s+1,g=new b,p=new b;for(let S=0;S<=m;S++){let M=0,y=0,C=0,A=0;if(S<=i){let w=S/i,v=w*Math.PI/2;y=-h-t*Math.cos(v),C=t*Math.sin(v),A=-t*Math.cos(v),M=w*u}else if(S<=i+r){let w=(S-i)/r;y=-h+w*e,C=t,A=0,M=u+w*d}else{let w=(S-i-r)/i,v=w*Math.PI/2;y=h+t*Math.sin(v),C=t*Math.cos(v),A=t*Math.sin(v),M=u+d+w*u}let P=Math.max(0,Math.min(1,M/f)),D=0;S===0?D=.5/s:S===m&&(D=-.5/s);for(let w=0;w<=s;w++){let v=w/s,I=v*Math.PI*2,N=Math.sin(I),V=Math.cos(I);p.x=-C*V,p.y=y,p.z=C*N,a.push(p.x,p.y,p.z),g.set(-C*V,A,C*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(v+D,P)}if(S>0){let w=(S-1)*_;for(let v=0;v<s;v++){let I=w+v,N=w+v+1,V=S*_+v,X=S*_+v+1;o.push(I,N,V),o.push(N,X,V)}}}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},tn=class n extends re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new b,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class n extends re{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=i/2,p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function S(){let y=new b,C=new b,A=0,P=(e-t)/i;for(let D=0;D<=r;D++){let w=[],v=D/r,I=v*(e-t)+t;for(let N=0;N<=s;N++){let V=N/s,X=V*l+a,G=Math.sin(X),q=Math.cos(X);C.x=I*G,C.y=-v*i+g,C.z=I*q,u.push(C.x,C.y,C.z),y.set(G,P,q).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-v),w.push(m++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){let v=_[w][D],I=_[w+1][D],N=_[w+1][D+1],V=_[w][D+1];(t>0||w!==0)&&(h.push(v,I,V),A+=3),(e>0||w!==r-1)&&(h.push(I,N,V),A+=3)}c.addGroup(p,A,0),p+=A}function M(y){let C=m,A=new ft,P=new b,D=0,w=y===!0?t:e,v=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let X=N/s*l+a,G=Math.cos(X),q=Math.sin(X);P.x=w*q,P.y=g*v,P.z=w*G,u.push(P.x,P.y,P.z),d.push(0,v,0),A.x=G*.5+.5,A.y=q*.5*v+.5,f.push(A.x,A.y),m++}for(let N=0;N<s;N++){let V=C+N,X=I+N;y===!0?h.push(X,X+1,V):h.push(X+1,X,V),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ci=class n extends fe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class n extends re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let M=new b,y=new b,C=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],y),f(e[A+2],C),l(M,y,C,S)}function l(S,M,y,C){let A=C+1,P=[];for(let D=0;D<=A;D++){P[D]=[];let w=S.clone().lerp(y,D/A),v=M.clone().lerp(y,D/A),I=A-D;for(let N=0;N<=I;N++)N===0&&D===A?P[D][N]=w:P[D][N]=w.clone().lerp(v,N/I)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){let v=Math.floor(w/2);w%2===0?(d(P[D][v+1]),d(P[D+1][v]),d(P[D][v])):(d(P[D][v+1]),d(P[D+1][v+1]),d(P[D+1][v]))}}function c(S){let M=new b;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(S),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let S=new b;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let y=g(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let M=o[S+0],y=o[S+2],C=o[S+4],A=Math.max(M,y,C),P=Math.min(M,y,C);A>.9&&P<.1&&(M<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){let y=S*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function m(){let S=new b,M=new b,y=new b,C=new b,A=new ft,P=new ft,D=new ft;for(let w=0,v=0;w<r.length;w+=9,v+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(o[v+0],o[v+1]),P.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),C.copy(S).add(M).add(y).divideScalar(3);let I=g(C);_(A,v+0,S,I),_(P,v+2,M,I),_(D,v+4,y,I)}}function _(S,M,y,C){C<0&&S.x===1&&(o[M]=S.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new b,s=[],r=[],o=[],a=new b,l=new ae;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends Nn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gl=class extends Mr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ja=new b,Nh=new mu,Fh=new mu,Oh=new mu,xl=class extends Nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new b){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ja.subVectors(s[0],s[1]).add(s[0]),c=ja);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ja.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ja),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Nh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),Fh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),Oh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Nh.calc(l),Fh.calc(l),Oh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $d(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function d0(n,t){let e=1-n;return e*e*t}function f0(n,t){return 2*(1-n)*n*t}function p0(n,t){return n*n*t}function mo(n,t,e,i){return d0(n,t)+f0(n,e)+p0(n,i)}function m0(n,t){let e=1-n;return e*e*e*t}function g0(n,t){let e=1-n;return 3*e*e*n*t}function x0(n,t){return 3*(1-n)*n*n*t}function _0(n,t){return n*n*n*t}function go(n,t,e,i,s){return m0(n,t)+g0(n,e)+x0(n,i)+_0(n,s)}var Do=class extends Nn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_l=class extends Nn{constructor(t=new b,e=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new b){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y),go(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uo=class extends Nn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends Nn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Nn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends Nn{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y),mo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set($d(a,l.x,c.x,h.x,u.x),$d(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Wh=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:xl,CubicBezierCurve:Do,CubicBezierCurve3:_l,EllipseCurve:Mr,LineCurve:Uo,LineCurve3:yl,QuadraticBezierCurve:No,QuadraticBezierCurve3:vl,SplineCurve:Fo}),Ml=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Wh[s.type]().fromJSON(s))}return this}},Oo=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Uo(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new No(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Do(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Fo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Mr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xs=class extends Oo{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Oo().fromJSON(s))}return this}};function y0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=tp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=w0(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=n[d],m=n[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Bo(r,o,e,a,l,c,0),o}function tp(n,t,e,i,s){let r;if(s===N0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Qd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Qd(o/i|0,n[o],n[o+1],r);return r&&br(r,r.next)&&(ko(r),r=r.next),r}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(br(e,e.next)||Be(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&R0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?M0(n,i,s,r):v0(n)){t.push(l.i,n.i,c.i),ko(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=b0(_s(n),t),Bo(n,t,e,i,s,r,2)):o===2&&S0(n,t,e,i,s,r):Bo(_s(n),t,e,i,s,r,1);break}}}function v0(n){let t=n.prev,e=n,i=n.next;if(Be(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&uo(s,a,r,l,o,c,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function M0(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),p=Xh(f,m,t,e,i),S=Xh(_,g,t,e,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=p&&y&&y.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&uo(a,h,l,u,c,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&uo(a,h,l,u,c,d,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&uo(a,h,l,u,c,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&uo(a,h,l,u,c,d,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function b0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!br(i,s)&&np(i,e,e.next,s)&&zo(i,s)&&zo(s,i)&&(t.push(i.i,e.i,s.i),ko(e),ko(e.next),e=n=s),e=e.next}while(e!==n);return _s(e)}function S0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L0(o,a)){let l=ip(o,a);o=_s(o,o.next),l=_s(l,l.next),Bo(o,t,e,i,s,r,0),Bo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function w0(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=tp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(I0(c))}s.sort(T0);for(let r=0;r<s.length;r++)e=E0(s[r],e);return e}function T0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function E0(n,t){let e=A0(n,t);if(!e)return t;let i=ip(e,n);return _s(i,i.next),_s(e,e.next)}function A0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(br(n,e))return e;do{if(br(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&ep(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);zo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&C0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function C0(n,t){return Be(n.prev,n,t.prev)<0&&Be(t.next,n,n.next)<0}function R0(n,t,e,i){let s=n;do s.z===0&&(s.z=Xh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,P0(s)}function P0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Xh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function I0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ep(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function uo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&ep(n,t,e,i,s,r,o,a)}function L0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!D0(n,t)&&(zo(n,t)&&zo(t,n)&&U0(n,t)&&(Be(n.prev,n,t.prev)||Be(n,t.prev,t))||br(n,t)&&Be(n.prev,n,n.next)>0&&Be(t.prev,t,t.next)>0)}function Be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function br(n,t){return n.x===t.x&&n.y===t.y}function np(n,t,e,i){let s=$a(Be(n,t,e)),r=$a(Be(n,t,i)),o=$a(Be(e,i,n)),a=$a(Be(e,i,t));return!!(s!==r&&o!==a||s===0&&Ka(n,e,t)||r===0&&Ka(n,i,t)||o===0&&Ka(e,n,i)||a===0&&Ka(e,t,i))}function Ka(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $a(n){return n>0?1:n<0?-1:0}function D0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&np(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function zo(n,t){return Be(n.prev,n,n.next)<0?Be(n,t,n.next)>=0&&Be(n,n.prev,t)>=0:Be(n,t,n.prev)<0||Be(n,n.next,t)<0}function U0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ip(n,t){let e=qh(n.i,n.x,n.y),i=qh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Qd(n,t,e,i){let s=qh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ko(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Yh=class{static triangulate(t,e,i=2){return y0(t,e,i)}},ci=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];tf(t),ef(i,t);let o=t.length;e.forEach(tf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ef(i,e[l]);let a=Yh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function tf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ef(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Vo=class n extends re{constructor(t=new xs([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new zt(s,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:F0,M,y=!1,C,A,P,D;p&&(M=p.getSpacedPoints(h),y=!0,d=!1,C=p.computeFrenetFrames(h,!1),A=new b,P=new b,D=new b),d||(g=0,f=0,m=0,_=0);let w=a.extractPoints(c),v=w.shape,I=w.holes;if(!ci.isClockWise(v)){v=v.reverse();for(let lt=0,rt=I.length;lt<rt;lt++){let nt=I[lt];ci.isClockWise(nt)&&(I[lt]=nt.reverse())}}function V(lt){let nt=10000000000000001e-36,it=lt[0];for(let mt=1;mt<=lt.length;mt++){let ut=mt%lt.length,Tt=lt[ut],Yt=Tt.x-it.x,Xt=Tt.y-it.y,E=Yt*Yt+Xt*Xt,x=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(it.x),Math.abs(it.y)),R=nt*x*x;if(E<=R){lt.splice(ut,1),mt--;continue}it=Tt}}V(v),I.forEach(V);let X=I.length,G=v;for(let lt=0;lt<X;lt++){let rt=I[lt];v=v.concat(rt)}function q(lt,rt,nt){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(rt,nt)}let tt=v.length;function W(lt,rt,nt){let it,mt,ut,Tt=lt.x-rt.x,Yt=lt.y-rt.y,Xt=nt.x-lt.x,E=nt.y-lt.y,x=Tt*Tt+Yt*Yt,R=Tt*E-Yt*Xt;if(Math.abs(R)>Number.EPSILON){let O=Math.sqrt(x),$=Math.sqrt(Xt*Xt+E*E),k=rt.x-Yt/O,gt=rt.y+Tt/O,at=nt.x-E/$,pt=nt.y+Xt/$,dt=((at-k)*E-(pt-gt)*Xt)/(Tt*E-Yt*Xt);it=k+Tt*dt-lt.x,mt=gt+Yt*dt-lt.y;let Q=it*it+mt*mt;if(Q<=2)return new ft(it,mt);ut=Math.sqrt(Q/2)}else{let O=!1;Tt>Number.EPSILON?Xt>Number.EPSILON&&(O=!0):Tt<-Number.EPSILON?Xt<-Number.EPSILON&&(O=!0):Math.sign(Yt)===Math.sign(E)&&(O=!0),O?(it=-Yt,mt=Tt,ut=Math.sqrt(x)):(it=Tt,mt=Yt,ut=Math.sqrt(x/2))}return new ft(it/ut,mt/ut)}let H=[];for(let lt=0,rt=G.length,nt=rt-1,it=lt+1;lt<rt;lt++,nt++,it++)nt===rt&&(nt=0),it===rt&&(it=0),H[lt]=W(G[lt],G[nt],G[it]);let ot=[],Z,F=H.concat();for(let lt=0,rt=X;lt<rt;lt++){let nt=I[lt];Z=[];for(let it=0,mt=nt.length,ut=mt-1,Tt=it+1;it<mt;it++,ut++,Tt++)ut===mt&&(ut=0),Tt===mt&&(Tt=0),Z[it]=W(nt[it],nt[ut],nt[Tt]);ot.push(Z),F=F.concat(Z)}let et;if(g===0)et=ci.triangulateShape(G,I);else{let lt=[],rt=[];for(let nt=0;nt<g;nt++){let it=nt/g,mt=f*Math.cos(it*Math.PI/2),ut=m*Math.sin(it*Math.PI/2)+_;for(let Tt=0,Yt=G.length;Tt<Yt;Tt++){let Xt=q(G[Tt],H[Tt],ut);Lt(Xt.x,Xt.y,-mt),it===0&&lt.push(Xt)}for(let Tt=0,Yt=X;Tt<Yt;Tt++){let Xt=I[Tt];Z=ot[Tt];let E=[];for(let x=0,R=Xt.length;x<R;x++){let O=q(Xt[x],Z[x],ut);Lt(O.x,O.y,-mt),it===0&&E.push(O)}it===0&&rt.push(E)}}et=ci.triangulateShape(lt,rt)}let Ct=et.length,St=m+_;for(let lt=0;lt<tt;lt++){let rt=d?q(v[lt],F[lt],St):v[lt];y?(P.copy(C.normals[0]).multiplyScalar(rt.x),A.copy(C.binormals[0]).multiplyScalar(rt.y),D.copy(M[0]).add(P).add(A),Lt(D.x,D.y,D.z)):Lt(rt.x,rt.y,0)}for(let lt=1;lt<=h;lt++)for(let rt=0;rt<tt;rt++){let nt=d?q(v[rt],F[rt],St):v[rt];y?(P.copy(C.normals[lt]).multiplyScalar(nt.x),A.copy(C.binormals[lt]).multiplyScalar(nt.y),D.copy(M[lt]).add(P).add(A),Lt(D.x,D.y,D.z)):Lt(nt.x,nt.y,u/h*lt)}for(let lt=g-1;lt>=0;lt--){let rt=lt/g,nt=f*Math.cos(rt*Math.PI/2),it=m*Math.sin(rt*Math.PI/2)+_;for(let mt=0,ut=G.length;mt<ut;mt++){let Tt=q(G[mt],H[mt],it);Lt(Tt.x,Tt.y,u+nt)}for(let mt=0,ut=I.length;mt<ut;mt++){let Tt=I[mt];Z=ot[mt];for(let Yt=0,Xt=Tt.length;Yt<Xt;Yt++){let E=q(Tt[Yt],Z[Yt],it);y?Lt(E.x,E.y+M[h-1].y,M[h-1].x+nt):Lt(E.x,E.y,u+nt)}}}J(),st();function J(){let lt=s.length/3;if(d){let rt=0,nt=tt*rt;for(let it=0;it<Ct;it++){let mt=et[it];Pt(mt[2]+nt,mt[1]+nt,mt[0]+nt)}rt=h+g*2,nt=tt*rt;for(let it=0;it<Ct;it++){let mt=et[it];Pt(mt[0]+nt,mt[1]+nt,mt[2]+nt)}}else{for(let rt=0;rt<Ct;rt++){let nt=et[rt];Pt(nt[2],nt[1],nt[0])}for(let rt=0;rt<Ct;rt++){let nt=et[rt];Pt(nt[0]+tt*h,nt[1]+tt*h,nt[2]+tt*h)}}i.addGroup(lt,s.length/3-lt,0)}function st(){let lt=s.length/3,rt=0;At(G,rt),rt+=G.length;for(let nt=0,it=I.length;nt<it;nt++){let mt=I[nt];At(mt,rt),rt+=mt.length}i.addGroup(lt,s.length/3-lt,1)}function At(lt,rt){let nt=lt.length;for(;--nt>=0;){let it=nt,mt=nt-1;mt<0&&(mt=lt.length-1);for(let ut=0,Tt=h+g*2;ut<Tt;ut++){let Yt=tt*ut,Xt=tt*(ut+1),E=rt+it+Yt,x=rt+mt+Yt,R=rt+mt+Xt,O=rt+it+Xt;Ht(E,x,R,O)}}}function Lt(lt,rt,nt){l.push(lt),l.push(rt),l.push(nt)}function Pt(lt,rt,nt){ee(lt),ee(rt),ee(nt);let it=s.length/3,mt=S.generateTopUV(i,s,it-3,it-2,it-1);L(mt[0]),L(mt[1]),L(mt[2])}function Ht(lt,rt,nt,it){ee(lt),ee(rt),ee(it),ee(rt),ee(nt),ee(it);let mt=s.length/3,ut=S.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);L(ut[0]),L(ut[1]),L(ut[3]),L(ut[1]),L(ut[2]),L(ut[3])}function ee(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function L(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return O0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wh[s.type]().fromJSON(s)),new n(i,t.options)}},F0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-u),new ft(d,1-m),new ft(_,1-p)]:[new ft(a,1-l),new ft(h,1-u),new ft(f,1-m),new ft(g,1-p)]}};function O0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fn=class n extends vr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Wn=class n extends vr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},dn=class n extends re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let S=p*d-o;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-S,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,y=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;f.push(M,y,A),f.push(y,C,A)}this.setIndex(f),this.setAttribute("position",new zt(m,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Sr=class n extends re{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new b,m=new ft;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let p=0;p<i;p++){let S=p+g,M=S,y=S+i+1,C=S+i+2,A=S+1;a.push(M,y,A),a.push(y,C,A)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Go=class n extends re{constructor(t=new xs([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;ci.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let S=m[g];ci.isClockWise(S)===!0&&(m[g]=S.reverse())}let _=ci.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){let S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,p=_.length;g<p;g++){let S=_[g],M=S[0]+u,y=S[1]+u,C=S[2]+u;i.push(M,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return B0(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function B0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var On=class n extends re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new b,d=new b,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let S=[],M=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(A+y,1-M),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let M=h[p][S+1],y=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(M,y,A),(p!==i-1||l<Math.PI)&&f.push(y,C,A)}this.setIndex(f),this.setAttribute("position",new zt(m,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ho=class n extends vr{constructor(t=1,e=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Mn=class n extends re{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;o.push(_,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var en=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var fn=class extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bl=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sl=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qa(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function z0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,a=2*e-i;break;case Gh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=t,l=2*i-e;break;case Gh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,S=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+S*o[c+C]+M*o[l+C]+y*o[u+C];return r}},Tl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},El=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qa(e,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qa(t.times,Array),values:Qa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case al:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&z0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=al;var Wi=class extends Bn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=xo;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Al.prototype.ValueTypeName="color";var Cl=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Cl.prototype.ValueTypeName="number";var Rl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ue.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wo=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Bn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=xo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="vector";var il={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Il=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},sp=new Il,wr=class{constructor(t){this.manager=t!==void 0?t:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=new WeakMap,Ll=class extends wr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=il.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=sr.get(o);u===void 0&&(u=[],sr.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=hr("img");function l(){h(),e&&e(this);let u=sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}sr.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),il.remove(`image:${t}`);let d=sr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}sr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),il.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ri=class extends wr{constructor(t){super(t)}load(t,e,i,s){let r=new un,o=new Ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Xo=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vs=class extends Xo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bh=new ae,nf=new b,sf=new b,Zh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(nf),sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sf),e.updateMatrixWorld(),Bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qo=class extends So{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jh=class extends Zh{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Dl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gu="\\[\\]\\.:\\/",k0=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",V0="[^"+gu.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",xu),H0=/(WCOD+)?/.source.replace("WCOD",V0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),q0=new RegExp("^"+G0+H0+W0+X0+"$"),Y0=["material","materials","bones","map"],jh=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(k0,"")}static parseTrackName(t){let e=q0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Y0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=jh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hb=new Float32Array(1);var rf=new ae,bs=class{constructor(t,e,i=0,s=1/0){this.ray=new Hi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(t,e=!0,i=[]){return Kh(t,this,i,e),i.sort(of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kh(t[s],this,i,e);return i.sort(of),i}};function of(n,t){return n.distance-t.distance}function Kh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Kh(r[o],t,e,!0)}}var Tr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var af=new b,tl=new b,rr=new b,or=new b,zh=new b,Z0=new b,J0=new b,Yo=class{constructor(t=new b,e=new b){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){af.subVectors(t,this.start),tl.subVectors(this.end,this.start);let i=tl.dot(tl),r=tl.dot(af)/i;return e&&(r=jt(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Z0,i=J0){let s=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;rr.subVectors(c,a),or.subVectors(h,l),zh.subVectors(a,l);let u=rr.dot(rr),d=or.dot(or),f=or.dot(zh);if(u<=s&&d<=s)return e.copy(a),i.copy(l),e.sub(i),e.dot(e);if(u<=s)r=0,o=f/d,o=jt(o,0,1);else{let m=rr.dot(zh);if(d<=s)o=0,r=jt(-m/u,0,1);else{let _=rr.dot(or),g=u*d-_*_;g!==0?r=jt((_*f-m*d)/g,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=jt(-m/u,0,1)):o>1&&(o=1,r=jt((_-m)/u,0,1))}}return e.copy(a).add(rr.multiplyScalar(r)),i.copy(l).add(or.multiplyScalar(o)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Zo=class extends Ro{constructor(t=10,e=10,i=4473924,s=8947848){i=new kt(i),s=new kt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new re;h.setAttribute("position",new zt(l,3)),h.setAttribute("color",new zt(c,3));let u=new pi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var el=new Ze,Er=class extends Ro{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new re;r.setIndex(new Se(i,1)),r.setAttribute("position",new Se(s,3)),super(r,new pi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&el.setFromObject(this.object),el.isEmpty())return;let t=el.min,e=el.max,i=this.geometry.attributes.position,s=i.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ss=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _u(n,t,e,i){let s=j0(i);switch(e){case au:return n*t;case Yl:return n*t/s.components*s.byteLength;case Zl:return n*t/s.components*s.byteLength;case cu:return n*t*2/s.components*s.byteLength;case Jl:return n*t*2/s.components*s.byteLength;case lu:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case jl:return n*t*4/s.components*s.byteLength;case $o:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:case tc:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case Ql:return Math.max(n,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _c:case yc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mc:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j0(n){switch(n){case ni:case iu:return{byteLength:1,components:1};case Cr:case su:case Rr:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Yi:case Wl:case ii:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ex(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
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
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ax=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,t_=`struct PhysicalMaterial {
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
}`,e_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,cy=`#define DISTANCE
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
}`,hy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,vy=`#define MATCAP
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
}`,My=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,wy=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:sx,alphamap_pars_fragment:rx,alphatest_fragment:ox,alphatest_pars_fragment:ax,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:hx,batching_vertex:ux,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:xx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:yx,clipping_planes_vertex:vx,color_fragment:Mx,color_pars_fragment:bx,color_pars_vertex:Sx,color_vertex:wx,common:Tx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:Px,emissivemap_pars_fragment:Ix,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Fx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:Zx,envmap_vertex:Bx,fog_vertex:zx,fog_pars_vertex:kx,fog_fragment:Vx,fog_pars_fragment:Gx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:qx,lights_pars_begin:Yx,lights_toon_fragment:Jx,lights_toon_pars_fragment:jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:$x,lights_physical_fragment:Qx,lights_physical_pars_fragment:t_,lights_fragment_begin:e_,lights_fragment_maps:n_,lights_fragment_end:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:x_,morphtarget_vertex:__,normal_fragment_begin:y_,normal_fragment_maps:v_,normal_pars_fragment:M_,normal_pars_vertex:b_,normal_vertex:S_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:E_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:C_,opaque_fragment:R_,packing:P_,premultiplied_alpha_fragment:I_,project_vertex:L_,dithering_fragment:D_,dithering_pars_fragment:U_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:k_,skinbase_vertex:V_,skinning_pars_vertex:G_,skinning_vertex:H_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:Y_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:j_,uv_pars_fragment:K_,uv_pars_vertex:$_,uv_vertex:Q_,worldpos_vertex:ty,background_vert:ey,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:sy,cube_vert:ry,cube_frag:oy,depth_vert:ay,depth_frag:ly,distanceRGBA_vert:cy,distanceRGBA_frag:hy,equirect_vert:uy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:xy,meshlambert_frag:_y,meshmatcap_vert:yy,meshmatcap_frag:vy,meshnormal_vert:My,meshnormal_frag:by,meshphong_vert:Sy,meshphong_frag:wy,meshphysical_vert:Ty,meshphysical_frag:Ey,meshtoon_vert:Ay,meshtoon_frag:Cy,points_vert:Ry,points_frag:Py,shadow_vert:Iy,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:Uy},Rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},xi={basic:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:pn([Rt.points,Rt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:pn([Rt.common,Rt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:pn([Rt.sprite,Rt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:pn([Rt.lights,Rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};xi.physical={uniforms:pn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Ec={r:0,b:0,g:0},As=new qe,Ny=new ae;function Fy(n,t,e,i,s,r,o){let a=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1,C=m(M);C===null?p(a,l):C&&C.isColor&&(p(C,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let C=m(y);C&&(C.isCubeTexture||C.mapping===jo)?(h===void 0&&(h=new ht(new qt(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Es(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(As)),h.material.toneMapped=le.getTransfer(C.colorSpace)!==_e,(u!==C||d!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ht(new dn(2,2),new ei({name:"BackgroundMaterial",uniforms:Es(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(C.colorSpace)!==_e,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Ec,pu(n)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,y,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g,dispose:S}}function Oy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,I,N,V,X){let G=!1,q=u(V,N,I);r!==q&&(r=q,c(r.object)),G=f(v,V,N,X),G&&m(v,V,N,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(v,I,N,V),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,I,N){let V=N.wireframe===!0,X=i[v.id];X===void 0&&(X={},i[v.id]=X);let G=X[I.id];G===void 0&&(G={},X[I.id]=G);let q=G[V];return q===void 0&&(q=d(l()),G[V]=q),q}function d(v){let I=[],N=[],V=[];for(let X=0;X<e;X++)I[X]=0,N[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,I,N,V){let X=r.attributes,G=I.attributes,q=0,tt=N.getAttributes();for(let W in tt)if(tt[W].location>=0){let ot=X[W],Z=G[W];if(Z===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),ot===void 0||ot.attribute!==Z||Z&&ot.data!==Z.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function m(v,I,N,V){let X={},G=I.attributes,q=0,tt=N.getAttributes();for(let W in tt)if(tt[W].location>=0){let ot=G[W];ot===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor));let Z={};Z.attribute=ot,ot&&ot.data&&(Z.data=ot.data),X[W]=Z,q++}r.attributes=X,r.attributesNum=q,r.index=V}function _(){let v=r.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function g(v){p(v,0)}function p(v,I){let N=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;N[v]=1,V[v]===0&&(n.enableVertexAttribArray(v),V[v]=1),X[v]!==I&&(n.vertexAttribDivisor(v,I),X[v]=I)}function S(){let v=r.newAttributes,I=r.enabledAttributes;for(let N=0,V=I.length;N<V;N++)I[N]!==v[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function M(v,I,N,V,X,G,q){q===!0?n.vertexAttribIPointer(v,I,N,X,G):n.vertexAttribPointer(v,I,N,V,X,G)}function y(v,I,N,V){_();let X=V.attributes,G=N.getAttributes(),q=I.defaultAttributeValues;for(let tt in G){let W=G[tt];if(W.location>=0){let H=X[tt];if(H===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(H=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(H=v.instanceColor)),H!==void 0){let ot=H.normalized,Z=H.itemSize,F=t.get(H);if(F===void 0)continue;let et=F.buffer,Ct=F.type,St=F.bytesPerElement,J=Ct===n.INT||Ct===n.UNSIGNED_INT||H.gpuType===Wl;if(H.isInterleavedBufferAttribute){let st=H.data,At=st.stride,Lt=H.offset;if(st.isInstancedInterleavedBuffer){for(let Pt=0;Pt<W.locationSize;Pt++)p(W.location+Pt,st.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)g(W.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Pt=0;Pt<W.locationSize;Pt++)M(W.location+Pt,Z/W.locationSize,Ct,ot,At*St,(Lt+Z/W.locationSize*Pt)*St,J)}else{if(H.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)p(W.location+st,H.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let st=0;st<W.locationSize;st++)g(W.location+st);n.bindBuffer(n.ARRAY_BUFFER,et);for(let st=0;st<W.locationSize;st++)M(W.location+st,Z/W.locationSize,Ct,ot,Z*St,Z/W.locationSize*st*St,J)}}else if(q!==void 0){let ot=q[tt];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(W.location,ot);break;case 3:n.vertexAttrib3fv(W.location,ot);break;case 4:n.vertexAttrib4fv(W.location,ot);break;default:n.vertexAttrib1fv(W.location,ot)}}}}S()}function C(){D();for(let v in i){let I=i[v];for(let N in I){let V=I[N];for(let X in V)h(V[X].object),delete V[X];delete I[N]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let I=i[v.id];for(let N in I){let V=I[N];for(let X in V)h(V[X].object),delete V[X];delete I[N]}delete i[v.id]}function P(v){for(let I in i){let N=i[I];if(N[v.id]===void 0)continue;let V=N[v.id];for(let X in V)h(V[X].object),delete V[X];delete N[v.id]}}function D(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function By(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===Rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ni&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ii&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function ky(n){let t=this,e=null,i=0,s=!1,r=!1,o=new hn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:i,M=S*4,y=p.clippingState||null;l.value=y,y=h(m,d,M,f);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=f;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Vy(n){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=ws:a===Gl&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ar||a===Gl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Dr=4,rp=[.125,.215,.35,.446,.526,.582],Ps=20,yu=new qo,op=new kt,vu=null,Mu=0,bu=0,Su=!1,Rs=(1+Math.sqrt(5))/2,Lr=1/Rs,ap=[new b(-Rs,Lr,0),new b(Rs,Lr,0),new b(-Lr,0,Rs),new b(Lr,0,Rs),new b(0,Rs,-Lr),new b(0,Rs,Lr),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Gy=new b,Nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Gy}=r;vu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,Mu,bu),this._renderer.xr.enabled=Su,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Rr,format:An,colorSpace:ms,depthBuffer:!1},s=lp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(r)),this._blurMaterial=Wy(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,yu)}_sceneToCubeUV(t,e,i,s,r){let l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(op),u.toneMapping=Ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new We({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new ht(new qt,_),p=!1,S=t.background;S?S.isColor&&(_.color.copy(S),t.background=null,p=!0):(_.color.copy(op),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let C=this._cubeSize;Ac(s,y*C,M>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ws||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ac(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ap[(s-r-1)%ap.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);let p=[],S=0;for(let P=0;P<Ps;++P){let D=P/_,w=Math.exp(-D*D/2);p.push(w),P===0?S+=w:P<g&&(S+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;let y=this._sizeLods[s],C=3*y*(s>M-Dr?s-M+Dr:0),A=4*(this._cubeSize-y);Ac(e,C,A,3*y,2*y),l.setRenderTarget(e),l.render(u,yu)}};function Hy(n){let t=[],e=[],i=[],s=n,r=n-Dr+1+rp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Dr?l=rp[o-n+Dr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*f),M=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,D=A>2?0:-1,w=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(w,_*m*A),M.set(d,g*m*A);let v=[A,A,A,A,A,A];y.set(v,p*m*A)}let C=new re;C.setAttribute("position",new Se(S,_)),C.setAttribute("uv",new Se(M,g)),C.setAttribute("faceIndex",new Se(y,p)),t.push(C),s>Dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lp(n,t,e){let i=new di(n,t,e);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ac(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wy(n,t,e){let i=new Float32Array(Ps),s=new b(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function cp(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function hp(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}function Xy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ar||l===Gl,h=l===ws||l===Ts;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Nr(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Nr(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yy(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let M=0,y=S.length;M<y;M+=3){let C=S[M+0],A=S[M+1],P=S[M+2];d.push(C,A,A,P,P,C)}}else if(m!==void 0){let S=m.array;_=m.version;for(let M=0,y=S.length/3-1;M<y;M+=3){let C=M+0,A=M+1,P=M+2;d.push(C,A,A,P,P,C)}}else return;let g=new(fu(d)?bo:Mo)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zy(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jy(n,t,e){let i=new WeakMap,s=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let w=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*C*4*u),P=new vo(A,y,C,u);P.type=ii,P.needsUpdate=!0;let D=M*4;for(let v=0;v<u;v++){let I=g[v],N=p[v],V=S[v],X=y*C*4*v;for(let G=0;G<I.count;G++){let q=G*D;f===!0&&(s.fromBufferAttribute(I,G),A[X+q+0]=s.x,A[X+q+1]=s.y,A[X+q+2]=s.z,A[X+q+3]=0),m===!0&&(s.fromBufferAttribute(N,G),A[X+q+4]=s.x,A[X+q+5]=s.y,A[X+q+6]=s.z,A[X+q+7]=0),_===!0&&(s.fromBufferAttribute(V,G),A[X+q+8]=s.x,A[X+q+9]=s.y,A[X+q+10]=s.z,A[X+q+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ft(y,C)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ky(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Rp=new un,up=new Io(1,1),Pp=new vo,Ip=new ul,Lp=new wo,dp=[],fp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function Fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=dp[s];if(r===void 0&&(r=new Float32Array(s),dp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pc(n,t){let e=fp[t];e===void 0&&(e=new Int32Array(t),fp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $y(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function nv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;gp.set(i),n.uniformMatrix2fv(this.addr,!1,gp),je(e,i)}}function iv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;mp.set(i),n.uniformMatrix3fv(this.addr,!1,mp),je(e,i)}}function sv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;pp.set(i),n.uniformMatrix4fv(this.addr,!1,pp),je(e,i)}}function rv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function lv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function cv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function uv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function dv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function fv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(up.compareFunction=hu,r=up):r=Rp,e.setTexture2D(t||r,s)}function pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ip,s)}function mv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lp,s)}function gv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pp,s)}function xv(n){switch(n){case 5126:return $y;case 35664:return Qy;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function _v(n,t){n.uniform1fv(this.addr,t)}function yv(n,t){let e=Fr(t,this.size,2);n.uniform2fv(this.addr,e)}function vv(n,t){let e=Fr(t,this.size,3);n.uniform3fv(this.addr,e)}function Mv(n,t){let e=Fr(t,this.size,4);n.uniform4fv(this.addr,e)}function bv(n,t){let e=Fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sv(n,t){let e=Fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function wv(n,t){let e=Fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tv(n,t){n.uniform1iv(this.addr,t)}function Ev(n,t){n.uniform2iv(this.addr,t)}function Av(n,t){n.uniform3iv(this.addr,t)}function Cv(n,t){n.uniform4iv(this.addr,t)}function Rv(n,t){n.uniform1uiv(this.addr,t)}function Pv(n,t){n.uniform2uiv(this.addr,t)}function Iv(n,t){n.uniform3uiv(this.addr,t)}function Lv(n,t){n.uniform4uiv(this.addr,t)}function Dv(n,t,e){let i=this.cache,s=t.length,r=Pc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rp,r[o])}function Uv(n,t,e){let i=this.cache,s=t.length,r=Pc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ip,r[o])}function Nv(n,t,e){let i=this.cache,s=t.length,r=Pc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lp,r[o])}function Fv(n,t,e){let i=this.cache,s=t.length,r=Pc(e,s);Je(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pp,r[o])}function Ov(n){switch(n){case 5126:return _v;case 35664:return yv;case 35665:return vv;case 35666:return Mv;case 35674:return bv;case 35675:return Sv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Iv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}var Tu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xv(e.type)}},Eu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ov(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},wu=/(\w+)(\])?(\[|\.)?/g;function xp(n,t){n.seq.push(t),n.map[t.id]=t}function Bv(n,t,e){let i=n.name,s=i.length;for(wu.lastIndex=0;;){let r=wu.exec(i),o=wu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xp(e,c===void 0?new Tu(a,n,t):new Eu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Au(a),xp(e,u)),e=u}}}var Ur=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bv(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function _p(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var zv=37297,kv=0;function Vv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var yp=new Kt;function Gv(n){le._getMatrix(yp,le.workingColorSpace,n);let t=`mat3( ${yp.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case _o:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vv(n.getShaderSource(t),a)}else return r}function Hv(n,t){let e=Gv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wv(n,t){let e;switch(t){case If:e="Linear";break;case Lf:e="Reinhard";break;case Df:e="Cineon";break;case Uf:e="ACESFilmic";break;case Ff:e="AgX";break;case Of:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cc=new b;function Xv(){le.getLuminanceCoefficients(Cc);let n=Cc.x.toFixed(4),t=Cc.y.toFixed(4),e=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Yv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ia(n){return n!==""}function Mp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(n){return n.replace(Jv,Kv)}var jv=new Map;function Kv(n,t){let e=ne[t];if(e===void 0){let i=jv.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cu(e)}var $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(n){return n.replace($v,Qv)}function Qv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function tM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function eM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Ts:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function iM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function sM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function rM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=tM(e),c=eM(e),h=nM(e),u=iM(e),d=sM(e),f=qv(e),m=Yv(r),_=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ia).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(g=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ii?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Hv("linearToOutputTexel",e.outputColorSpace),Xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),o=Cu(o),o=Mp(o,e),o=bp(o,e),a=Cu(a),a=Mp(a,e),a=bp(a,e),o=Sp(o),a=Sp(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+g+o,y=S+p+a,C=_p(s,s.VERTEX_SHADER,M),A=_p(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(A)||"",G=N.trim(),q=V.trim(),tt=X.trim(),W=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{let ot=vp(s,C,"vertex"),Z=vp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ot+`
`+Z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(q===""||tt==="")&&(H=!1);H&&(I.diagnostics={runnable:W,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(C),s.deleteShader(A),D=new Ur(s,_),w=Zv(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,zv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}var oM=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Pu(t),e.set(t,i)),i}},Pu=class{constructor(t){this.id=oM++,this.code=t,this.usedTimes=0}};function aM(n,t,e,i,s,r,o){let a=new fr,l=new Ru,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,v,I,N,V){let X=N.fog,G=V.geometry,q=w.isMeshStandardMaterial?N.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),W=tt&&tt.mapping===jo?tt.image.height:null,H=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Z=ot!==void 0?ot.length:0,F=0;G.morphAttributes.position!==void 0&&(F=1),G.morphAttributes.normal!==void 0&&(F=2),G.morphAttributes.color!==void 0&&(F=3);let et,Ct,St,J;if(H){let pe=xi[H];et=pe.vertexShader,Ct=pe.fragmentShader}else et=w.vertexShader,Ct=w.fragmentShader,l.update(w),St=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let st=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Lt=V.isInstancedMesh===!0,Pt=V.isBatchedMesh===!0,Ht=!!w.map,ee=!!w.matcap,L=!!tt,lt=!!w.aoMap,rt=!!w.lightMap,nt=!!w.bumpMap,it=!!w.normalMap,mt=!!w.displacementMap,ut=!!w.emissiveMap,Tt=!!w.metalnessMap,Yt=!!w.roughnessMap,Xt=w.anisotropy>0,E=w.clearcoat>0,x=w.dispersion>0,R=w.iridescence>0,O=w.sheen>0,$=w.transmission>0,k=Xt&&!!w.anisotropyMap,gt=E&&!!w.clearcoatMap,at=E&&!!w.clearcoatNormalMap,pt=E&&!!w.clearcoatRoughnessMap,dt=R&&!!w.iridescenceMap,Q=R&&!!w.iridescenceThicknessMap,vt=O&&!!w.sheenColorMap,Nt=O&&!!w.sheenRoughnessMap,xt=!!w.specularMap,Mt=!!w.specularColorMap,Bt=!!w.specularIntensityMap,U=$&&!!w.transmissionMap,yt=$&&!!w.thicknessMap,Et=!!w.gradientMap,Dt=!!w.alphaMap,_t=w.alphaTest>0,ct=!!w.alphaHash,Ot=!!w.extensions,$t=Ii;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&($t=n.toneMapping);let Ae={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:Ct,defines:w.defines,customVertexShaderID:St,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&V._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&V.instanceColor!==null,instancingMorph:Lt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ms,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:ee,envMap:L,envMapMode:L&&tt.mapping,envMapCubeUVHeight:W,aoMap:lt,lightMap:rt,bumpMap:nt,normalMap:it,displacementMap:d&&mt,emissiveMap:ut,normalMapObjectSpace:it&&w.normalMapType===Vf,normalMapTangentSpace:it&&w.normalMapType===Tc,metalnessMap:Tt,roughnessMap:Yt,anisotropy:Xt,anisotropyMap:k,clearcoat:E,clearcoatMap:gt,clearcoatNormalMap:at,clearcoatRoughnessMap:pt,dispersion:x,iridescence:R,iridescenceMap:dt,iridescenceThicknessMap:Q,sheen:O,sheenColorMap:vt,sheenRoughnessMap:Nt,specularMap:xt,specularColorMap:Mt,specularIntensityMap:Bt,transmission:$,transmissionMap:U,thicknessMap:yt,gradientMap:Et,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:Dt,alphaTest:_t,alphaHash:ct,combine:w.combine,mapUv:Ht&&_(w.map.channel),aoMapUv:lt&&_(w.aoMap.channel),lightMapUv:rt&&_(w.lightMap.channel),bumpMapUv:nt&&_(w.bumpMap.channel),normalMapUv:it&&_(w.normalMap.channel),displacementMapUv:mt&&_(w.displacementMap.channel),emissiveMapUv:ut&&_(w.emissiveMap.channel),metalnessMapUv:Tt&&_(w.metalnessMap.channel),roughnessMapUv:Yt&&_(w.roughnessMap.channel),anisotropyMapUv:k&&_(w.anisotropyMap.channel),clearcoatMapUv:gt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(w.sheenRoughnessMap.channel),specularMapUv:xt&&_(w.specularMap.channel),specularColorMapUv:Mt&&_(w.specularColorMap.channel),specularIntensityMapUv:Bt&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:yt&&_(w.thicknessMap.channel),alphaMapUv:Dt&&_(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(it||Xt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ht||Dt),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:At,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:F,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===_e,decodeVideoTextureEmissive:ut&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===_e,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(w){let v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)v.push(I),v.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(S(v,w),M(v,w),v.push(n.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function S(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let v=m[w.type],I;if(v){let N=xi[v];I=$f.clone(N.uniforms)}else I=w.uniforms;return I}function C(w,v){let I;for(let N=0,V=h.length;N<V;N++){let X=h[N];if(X.cacheKey===v){I=X,++I.usedTimes;break}}return I===void 0&&(I=new rM(n,v,w,r),h.push(I)),I}function A(w){if(--w.usedTimes===0){let v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:D}}function lM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ep(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||cM),i.length>1&&i.sort(d||Tp),s.length>1&&s.sort(d||Tp)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function hM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ep,n.set(i,[o])):s>=r.length?(o=new Ep,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function uM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new kt};break;case"SpotLight":e={position:new b,direction:new b,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[t.id]=e,e}}}function dM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fM=0;function pM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mM(n){let t=new uM,e=dM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let s=new b,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,S=0,M=0,y=0,C=0,A=0,P=0;c.sort(pM);for(let w=0,v=c.length;w<v;w++){let I=c[w],N=I.color,V=I.intensity,X=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*V,u+=N.g*V,d+=N.b*V;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],V);P++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,W=e.get(I);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=I.shadow.matrix,S++}i.directional[f]=q,f++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(N).multiplyScalar(V),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;let tt=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,tt.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=tt.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,y++}_++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let tt=I.shadow,W=e.get(I);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(V),q.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,D.directionalLength=f,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=P,i.version=fM++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ap(n){let t=new mM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ap(n),t.set(s,[a])):r>=o.length?(a=new Ap(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`;function yM(n,t,e){let i=new yr,s=new ft,r=new ft,o=new ze,a=new bl({depthPacking:kf}),l=new Sl,c={},h=e.maxTextureSize,u={[Qn]:rn,[rn]:Qn,[Ye]:Ye},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:xM,fragmentShader:_M}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new re;m.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ht(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(A,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),v=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Pi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=p!==gi&&this.type===gi,X=p===gi&&this.type!==gi;for(let G=0,q=A.length;G<q;G++){let tt=A[G],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let H=W.getFrameExtents();if(s.multiply(H),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,W.mapSize.y=r.y)),W.map===null||V===!0||X===!0){let Z=this.type!==gi?{minFilter:wn,magFilter:wn}:{};W.map!==null&&W.map.dispose(),W.map=new di(s.x,s.y,Z),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let ot=W.getViewportCount();for(let Z=0;Z<ot;Z++){let F=W.getViewport(Z);o.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),N.viewport(o),W.updateMatrices(tt,Z),i=W.getFrustum(),y(P,D,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&S(W,D),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,v,I)};function S(A,P){let D=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,D,f,_,null)}function M(A,P,D,w){let v=null,I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let N=v.uuid,V=P.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let G=X[V];G===void 0&&(G=v.clone(),X[V]=G,P.addEventListener("dispose",C)),v=G}if(v.visible=P.visible,v.wireframe=P.wireframe,w===gi?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=n.properties.get(v);N.light=D}return v}function y(A,P,D,w,v){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let V=t.update(A),X=A.material;if(Array.isArray(X)){let G=V.groups;for(let q=0,tt=G.length;q<tt;q++){let W=G[q],H=X[W.materialIndex];if(H&&H.visible){let ot=M(A,H,w,v);A.onBeforeShadow(n,A,P,D,V,ot,W),n.renderBufferDirect(D,null,V,ot,A,W),A.onAfterShadow(n,A,P,D,V,ot,W)}}}else if(X.visible){let G=M(A,X,w,v);A.onBeforeShadow(n,A,P,D,V,G,null),n.renderBufferDirect(D,null,V,G,A,null),A.onAfterShadow(n,A,P,D,V,G,null)}}let N=A.children;for(let V=0,X=N.length;V<X;V++)y(N[V],P,D,w,v)}function C(A){A.target.removeEventListener("dispose",C);for(let D in c){let w=c[D],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}var vM={[Ul]:Nl,[Fl]:zl,[Ol]:kl,[ps]:Bl,[Nl]:Ul,[zl]:Fl,[kl]:Ol,[Bl]:ps};function MM(n,t){function e(){let U=!1,yt=new ze,Et=null,Dt=new ze(0,0,0,0);return{setMask:function(_t){Et!==_t&&!U&&(n.colorMask(_t,_t,_t,_t),Et=_t)},setLocked:function(_t){U=_t},setClear:function(_t,ct,Ot,$t,Ae){Ae===!0&&(_t*=$t,ct*=$t,Ot*=$t),yt.set(_t,ct,Ot,$t),Dt.equals(yt)===!1&&(n.clearColor(_t,ct,Ot,$t),Dt.copy(yt))},reset:function(){U=!1,Et=null,Dt.set(-1,0,0,0)}}}function i(){let U=!1,yt=!1,Et=null,Dt=null,_t=null;return{setReversed:function(ct){if(yt!==ct){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),yt=ct;let $t=_t;_t=null,this.setClear($t)}},getReversed:function(){return yt},setTest:function(ct){ct?st(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ct){Et!==ct&&!U&&(n.depthMask(ct),Et=ct)},setFunc:function(ct){if(yt&&(ct=vM[ct]),Dt!==ct){switch(ct){case Ul:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Dt=ct}},setLocked:function(ct){U=ct},setClear:function(ct){_t!==ct&&(yt&&(ct=1-ct),n.clearDepth(ct),_t=ct)},reset:function(){U=!1,Et=null,Dt=null,_t=null,yt=!1}}}function s(){let U=!1,yt=null,Et=null,Dt=null,_t=null,ct=null,Ot=null,$t=null,Ae=null;return{setTest:function(pe){U||(pe?st(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(pe){yt!==pe&&!U&&(n.stencilMask(pe),yt=pe)},setFunc:function(pe,Mi,li){(Et!==pe||Dt!==Mi||_t!==li)&&(n.stencilFunc(pe,Mi,li),Et=pe,Dt=Mi,_t=li)},setOp:function(pe,Mi,li){(ct!==pe||Ot!==Mi||$t!==li)&&(n.stencilOp(pe,Mi,li),ct=pe,Ot=Mi,$t=li)},setLocked:function(pe){U=pe},setClear:function(pe){Ae!==pe&&(n.clearStencil(pe),Ae=pe)},reset:function(){U=!1,yt=null,Et=null,Dt=null,_t=null,ct=null,Ot=null,$t=null,Ae=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,M=null,y=null,C=null,A=null,P=new kt(0,0,0),D=0,w=!1,v=null,I=null,N=null,V=null,X=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,tt=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=tt>=2);let H=null,ot={},Z=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),et=new ze().fromArray(Z),Ct=new ze().fromArray(F);function St(U,yt,Et,Dt){let _t=new Uint8Array(4),ct=n.createTexture();n.bindTexture(U,ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<Et;Ot++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(yt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return ct}let J={};J[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(ps),nt(!1),it($h),st(n.CULL_FACE),lt(Pi);function st(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Lt(U,yt){return u[U]!==yt?(n.bindFramebuffer(U,yt),u[U]=yt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Pt(U,yt){let Et=f,Dt=!1;if(U){Et=d.get(yt),Et===void 0&&(Et=[],d.set(yt,Et));let _t=U.textures;if(Et.length!==_t.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Ot=_t.length;ct<Ot;ct++)Et[ct]=n.COLOR_ATTACHMENT0+ct;Et.length=_t.length,Dt=!0}}else Et[0]!==n.BACK&&(Et[0]=n.BACK,Dt=!0);Dt&&n.drawBuffers(Et)}function Ht(U){return m!==U?(n.useProgram(U),m=U,!0):!1}let ee={[Gi]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[ff]:n.FUNC_REVERSE_SUBTRACT};ee[pf]=n.MIN,ee[mf]=n.MAX;let L={[gf]:n.ZERO,[xf]:n.ONE,[_f]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[wf]:n.SRC_ALPHA_SATURATE,[bf]:n.DST_COLOR,[vf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[Sf]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[Tf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[Af]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(U,yt,Et,Dt,_t,ct,Ot,$t,Ae,pe){if(U===Pi){_===!0&&(At(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),U!==uf){if(U!==g||pe!==w){if((p!==Gi||y!==Gi)&&(n.blendEquation(n.FUNC_ADD),p=Gi,y=Gi),pe)switch(U){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,M=null,C=null,A=null,P.set(0,0,0),D=0,g=U,w=pe}return}_t=_t||yt,ct=ct||Et,Ot=Ot||Dt,(yt!==p||_t!==y)&&(n.blendEquationSeparate(ee[yt],ee[_t]),p=yt,y=_t),(Et!==S||Dt!==M||ct!==C||Ot!==A)&&(n.blendFuncSeparate(L[Et],L[Dt],L[ct],L[Ot]),S=Et,M=Dt,C=ct,A=Ot),($t.equals(P)===!1||Ae!==D)&&(n.blendColor($t.r,$t.g,$t.b,Ae),P.copy($t),D=Ae),g=U,w=!1}function rt(U,yt){U.side===Ye?At(n.CULL_FACE):st(n.CULL_FACE);let Et=U.side===rn;yt&&(Et=!Et),nt(Et),U.blending===fs&&U.transparent===!1?lt(Pi):lt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Dt=U.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){v!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),v=U)}function it(U){U!==lf?(st(n.CULL_FACE),U!==I&&(U===$h?n.cullFace(n.BACK):U===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),I=U}function mt(U){U!==N&&(q&&n.lineWidth(U),N=U)}function ut(U,yt,Et){U?(st(n.POLYGON_OFFSET_FILL),(V!==yt||X!==Et)&&(n.polygonOffset(yt,Et),V=yt,X=Et)):At(n.POLYGON_OFFSET_FILL)}function Tt(U){U?st(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function Yt(U){U===void 0&&(U=n.TEXTURE0+G-1),H!==U&&(n.activeTexture(U),H=U)}function Xt(U,yt,Et){Et===void 0&&(H===null?Et=n.TEXTURE0+G-1:Et=H);let Dt=ot[Et];Dt===void 0&&(Dt={type:void 0,texture:void 0},ot[Et]=Dt),(Dt.type!==U||Dt.texture!==yt)&&(H!==Et&&(n.activeTexture(Et),H=Et),n.bindTexture(U,yt||J[U]),Dt.type=U,Dt.texture=yt)}function E(){let U=ot[H];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(U){et.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Nt(U){Ct.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ct.copy(U))}function xt(U,yt){let Et=c.get(yt);Et===void 0&&(Et=new WeakMap,c.set(yt,Et));let Dt=Et.get(U);Dt===void 0&&(Dt=n.getUniformBlockIndex(yt,U.name),Et.set(U,Dt))}function Mt(U,yt){let Dt=c.get(yt).get(U);l.get(yt)!==Dt&&(n.uniformBlockBinding(yt,Dt,U.__bindingPointIndex),l.set(yt,Dt))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},H=null,ot={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,M=null,y=null,C=null,A=null,P=new kt(0,0,0),D=0,w=!1,v=null,I=null,N=null,V=null,X=null,et.set(0,0,n.canvas.width,n.canvas.height),Ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:At,bindFramebuffer:Lt,drawBuffers:Pt,useProgram:Ht,setBlending:lt,setMaterial:rt,setFlipSided:nt,setCullFace:it,setLineWidth:mt,setPolygonOffset:ut,setScissorTest:Tt,activeTexture:Yt,bindTexture:Xt,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:dt,texImage3D:Q,updateUBOMapping:xt,uniformBlockBinding:Mt,texStorage2D:at,texStorage3D:pt,texSubImage2D:O,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:gt,scissor:vt,viewport:Nt,reset:Bt}}function bM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,x){return f?new OffscreenCanvas(E,x):hr("canvas")}function _(E,x,R){let O=1,$=Xt(E);if(($.width>R||$.height>R)&&(O=R/Math.max($.width,$.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let k=Math.floor(O*$.width),gt=Math.floor(O*$.height);u===void 0&&(u=m(k,gt));let at=x?m(k,gt):u;return at.width=k,at.height=gt,at.getContext("2d").drawImage(E,0,0,k,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+gt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,x,R,O,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=x;if(x===n.RED&&(R===n.FLOAT&&(k=n.R32F),R===n.HALF_FLOAT&&(k=n.R16F),R===n.UNSIGNED_BYTE&&(k=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.R8UI),R===n.UNSIGNED_SHORT&&(k=n.R16UI),R===n.UNSIGNED_INT&&(k=n.R32UI),R===n.BYTE&&(k=n.R8I),R===n.SHORT&&(k=n.R16I),R===n.INT&&(k=n.R32I)),x===n.RG&&(R===n.FLOAT&&(k=n.RG32F),R===n.HALF_FLOAT&&(k=n.RG16F),R===n.UNSIGNED_BYTE&&(k=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RG8UI),R===n.UNSIGNED_SHORT&&(k=n.RG16UI),R===n.UNSIGNED_INT&&(k=n.RG32UI),R===n.BYTE&&(k=n.RG8I),R===n.SHORT&&(k=n.RG16I),R===n.INT&&(k=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGB8UI),R===n.UNSIGNED_SHORT&&(k=n.RGB16UI),R===n.UNSIGNED_INT&&(k=n.RGB32UI),R===n.BYTE&&(k=n.RGB8I),R===n.SHORT&&(k=n.RGB16I),R===n.INT&&(k=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),R===n.UNSIGNED_INT&&(k=n.RGBA32UI),R===n.BYTE&&(k=n.RGBA8I),R===n.SHORT&&(k=n.RGBA16I),R===n.INT&&(k=n.RGBA32I)),x===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),x===n.RGBA){let gt=$?_o:le.getTransfer(O);R===n.FLOAT&&(k=n.RGBA32F),R===n.HALF_FLOAT&&(k=n.RGBA16F),R===n.UNSIGNED_BYTE&&(k=gt===_e?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function y(E,x){let R;return E?x===null||x===Yi||x===Pr?R=n.DEPTH24_STENCIL8:x===ii?R=n.DEPTH32F_STENCIL8:x===Cr&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yi||x===Pr?R=n.DEPTH_COMPONENT24:x===ii?R=n.DEPTH_COMPONENT32F:x===Cr&&(R=n.DEPTH_COMPONENT16),R}function C(E,x){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==wn&&E.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function A(E){let x=E.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&h.delete(x)}function P(E){let x=E.target;x.removeEventListener("dispose",P),v(x)}function D(E){let x=i.get(E);if(x.__webglInit===void 0)return;let R=E.source,O=d.get(R);if(O){let $=O[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(E),Object.keys(O).length===0&&d.delete(R)}i.remove(E)}function w(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let R=E.source,O=d.get(R);delete O[x.__cacheKey],o.memory.textures--}function v(E){let x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let $=0;$<x.__webglFramebuffer[O].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[O][$]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let R=E.textures;for(let O=0,$=R.length;O<$;O++){let k=i.get(R[O]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(R[O])}i.remove(E)}let I=0;function N(){I=0}function V(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function X(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function G(E,x){let R=i.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&R.__version!==E.version){let O=E.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(R,E,x);return}}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function q(E,x){let R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){J(R,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function tt(E,x){let R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){J(R,E,x);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function W(E,x){let R=i.get(E);if(E.version>0&&R.__version!==E.version){st(R,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}let H={[Gn]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},ot={[wn]:n.NEAREST,[Bf]:n.NEAREST_MIPMAP_NEAREST,[Ko]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[En]:n.LINEAR_MIPMAP_LINEAR},Z={[Gf]:n.NEVER,[Zf]:n.ALWAYS,[Hf]:n.LESS,[hu]:n.LEQUAL,[Wf]:n.EQUAL,[Yf]:n.GEQUAL,[Xf]:n.GREATER,[qf]:n.NOTEQUAL};function F(E,x){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===Hl||x.magFilter===Ko||x.magFilter===En||x.minFilter===sn||x.minFilter===Hl||x.minFilter===Ko||x.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,H[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,H[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,H[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ot[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Z[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==Ko&&x.minFilter!==En||x.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function et(E,x){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",A));let O=x.source,$=d.get(O);$===void 0&&($={},d.set(O,$));let k=X(x);if(k!==E.__cacheKey){$[k]===void 0&&($[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),$[k].usedTimes++;let gt=$[E.__cacheKey];gt!==void 0&&($[E.__cacheKey].usedTimes--,gt.usedTimes===0&&w(x)),E.__cacheKey=k,E.__webglTexture=$[k].texture}return R}function Ct(E,x,R){return Math.floor(Math.floor(E/R)/x)}function St(E,x,R,O){let k=E.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,R,O,x.data);else{k.sort((Q,vt)=>Q.start-vt.start);let gt=0;for(let Q=1;Q<k.length;Q++){let vt=k[gt],Nt=k[Q],xt=vt.start+vt.count,Mt=Ct(Nt.start,x.width,4),Bt=Ct(vt.start,x.width,4);Nt.start<=xt+1&&Mt===Bt&&Ct(Nt.start+Nt.count-1,x.width,4)===Mt?vt.count=Math.max(vt.count,Nt.start+Nt.count-vt.start):(++gt,k[gt]=Nt)}k.length=gt+1;let at=n.getParameter(n.UNPACK_ROW_LENGTH),pt=n.getParameter(n.UNPACK_SKIP_PIXELS),dt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,vt=k.length;Q<vt;Q++){let Nt=k[Q],xt=Math.floor(Nt.start/4),Mt=Math.ceil(Nt.count/4),Bt=xt%x.width,U=Math.floor(xt/x.width),yt=Mt,Et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Bt,U,yt,Et,R,O,x.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,at),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function J(E,x,R){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);let $=et(E,x),k=x.source;e.bindTexture(O,E.__webglTexture,n.TEXTURE0+R);let gt=i.get(k);if(k.version!==gt.__version||$===!0){e.activeTexture(n.TEXTURE0+R);let at=le.getPrimaries(le.workingColorSpace),pt=x.colorSpace===Li?null:le.getPrimaries(x.colorSpace),dt=x.colorSpace===Li||at===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Q=_(x.image,!1,s.maxTextureSize);Q=Yt(x,Q);let vt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),xt=M(x.internalFormat,vt,Nt,x.colorSpace,x.isVideoTexture);F(O,x);let Mt,Bt=x.mipmaps,U=x.isVideoTexture!==!0,yt=gt.__version===void 0||$===!0,Et=k.dataReady,Dt=C(x,Q);if(x.isDepthTexture)xt=y(x.format===Ir,x.type),yt&&(U?e.texStorage2D(n.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,vt,Nt,null));else if(x.isDataTexture)if(Bt.length>0){U&&yt&&e.texStorage2D(n.TEXTURE_2D,Dt,xt,Bt[0].width,Bt[0].height);for(let _t=0,ct=Bt.length;_t<ct;_t++)Mt=Bt[_t],U?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Mt.width,Mt.height,vt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,_t,xt,Mt.width,Mt.height,0,vt,Nt,Mt.data);x.generateMipmaps=!1}else U?(yt&&e.texStorage2D(n.TEXTURE_2D,Dt,xt,Q.width,Q.height),Et&&St(x,Q,vt,Nt)):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,vt,Nt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,xt,Bt[0].width,Bt[0].height,Q.depth);for(let _t=0,ct=Bt.length;_t<ct;_t++)if(Mt=Bt[_t],x.format!==An)if(vt!==null)if(U){if(Et)if(x.layerUpdates.size>0){let Ot=_u(Mt.width,Mt.height,x.format,x.type);for(let $t of x.layerUpdates){let Ae=Mt.data.subarray($t*Ot/Mt.data.BYTES_PER_ELEMENT,($t+1)*Ot/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,$t,Mt.width,Mt.height,1,vt,Ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Mt.width,Mt.height,Q.depth,vt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,xt,Mt.width,Mt.height,Q.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Mt.width,Mt.height,Q.depth,vt,Nt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,xt,Mt.width,Mt.height,Q.depth,0,vt,Nt,Mt.data)}else{U&&yt&&e.texStorage2D(n.TEXTURE_2D,Dt,xt,Bt[0].width,Bt[0].height);for(let _t=0,ct=Bt.length;_t<ct;_t++)Mt=Bt[_t],x.format!==An?vt!==null?U?Et&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,xt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Mt.width,Mt.height,vt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,_t,xt,Mt.width,Mt.height,0,vt,Nt,Mt.data)}else if(x.isDataArrayTexture)if(U){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,xt,Q.width,Q.height,Q.depth),Et)if(x.layerUpdates.size>0){let _t=_u(Q.width,Q.height,x.format,x.type);for(let ct of x.layerUpdates){let Ot=Q.data.subarray(ct*_t/Q.data.BYTES_PER_ELEMENT,(ct+1)*_t/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,vt,Nt,Ot)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,vt,Nt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,vt,Nt,Q.data);else if(x.isData3DTexture)U?(yt&&e.texStorage3D(n.TEXTURE_3D,Dt,xt,Q.width,Q.height,Q.depth),Et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,vt,Nt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,vt,Nt,Q.data);else if(x.isFramebufferTexture){if(yt)if(U)e.texStorage2D(n.TEXTURE_2D,Dt,xt,Q.width,Q.height);else{let _t=Q.width,ct=Q.height;for(let Ot=0;Ot<Dt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,xt,_t,ct,0,vt,Nt,null),_t>>=1,ct>>=1}}else if(Bt.length>0){if(U&&yt){let _t=Xt(Bt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,xt,_t.width,_t.height)}for(let _t=0,ct=Bt.length;_t<ct;_t++)Mt=Bt[_t],U?Et&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,vt,Nt,Mt):e.texImage2D(n.TEXTURE_2D,_t,xt,vt,Nt,Mt);x.generateMipmaps=!1}else if(U){if(yt){let _t=Xt(Q);e.texStorage2D(n.TEXTURE_2D,Dt,xt,_t.width,_t.height)}Et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Nt,Q)}else e.texImage2D(n.TEXTURE_2D,0,xt,vt,Nt,Q);g(x)&&p(O),gt.__version=k.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function st(E,x,R){if(x.image.length!==6)return;let O=et(E,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+R);let k=i.get($);if($.version!==k.__version||O===!0){e.activeTexture(n.TEXTURE0+R);let gt=le.getPrimaries(le.workingColorSpace),at=x.colorSpace===Li?null:le.getPrimaries(x.colorSpace),pt=x.colorSpace===Li||gt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!dt&&!Q?vt[ct]=_(x.image[ct],!0,s.maxCubemapSize):vt[ct]=Q?x.image[ct].image:x.image[ct],vt[ct]=Yt(x,vt[ct]);let Nt=vt[0],xt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Bt=M(x.internalFormat,xt,Mt,x.colorSpace),U=x.isVideoTexture!==!0,yt=k.__version===void 0||O===!0,Et=$.dataReady,Dt=C(x,Nt);F(n.TEXTURE_CUBE_MAP,x);let _t;if(dt){U&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Bt,Nt.width,Nt.height);for(let ct=0;ct<6;ct++){_t=vt[ct].mipmaps;for(let Ot=0;Ot<_t.length;Ot++){let $t=_t[Ot];x.format!==An?xt!==null?U?Et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,$t.width,$t.height,xt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Bt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,$t.width,$t.height,xt,Mt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Bt,$t.width,$t.height,0,xt,Mt,$t.data)}}}else{if(_t=x.mipmaps,U&&yt){_t.length>0&&Dt++;let ct=Xt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Bt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Q){U?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,xt,Mt,vt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Bt,vt[ct].width,vt[ct].height,0,xt,Mt,vt[ct].data);for(let Ot=0;Ot<_t.length;Ot++){let Ae=_t[Ot].image[ct].image;U?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,Ae.width,Ae.height,xt,Mt,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Bt,Ae.width,Ae.height,0,xt,Mt,Ae.data)}}else{U?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,xt,Mt,vt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Bt,xt,Mt,vt[ct]);for(let Ot=0;Ot<_t.length;Ot++){let $t=_t[Ot];U?Et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,xt,Mt,$t.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Bt,xt,Mt,$t.image[ct])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),k.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function At(E,x,R,O,$,k){let gt=r.convert(R.format,R.colorSpace),at=r.convert(R.type),pt=M(R.internalFormat,gt,at,R.colorSpace),dt=i.get(x),Q=i.get(R);if(Q.__renderTarget=x,!dt.__hasExternalTextures){let vt=Math.max(1,x.width>>k),Nt=Math.max(1,x.height>>k);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,k,pt,vt,Nt,x.depth,0,gt,at,null):e.texImage2D($,k,pt,vt,Nt,0,gt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,$,Q.__webglTexture,0,mt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,$,Q.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(E,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let O=x.depthTexture,$=O&&O.isDepthTexture?O.type:null,k=y(x.stencilBuffer,$),gt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=mt(x);ut(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,k,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,k,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,k,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,E)}else{let O=x.textures;for(let $=0;$<O.length;$++){let k=O[$],gt=r.convert(k.format,k.colorSpace),at=r.convert(k.type),pt=M(k.internalFormat,gt,at,k.colorSpace),dt=mt(x);R&&ut(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,pt,x.width,x.height):ut(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,pt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let $=O.__webglTexture,k=mt(x);if(x.depthTexture.format===lr)ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===Ir)ut(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ht(E){let x=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let O=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",$)};O.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=O}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let O=E.texture.mipmaps;O&&O.length>0?Pt(x.__webglFramebuffer[0],E):Pt(x.__webglFramebuffer,E)}else if(R){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[O],E,!1);else{let $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}else{let O=E.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(E,x,R){let O=i.get(E);x!==void 0&&At(O.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ht(E)}function L(E){let x=E.texture,R=i.get(E),O=i.get(x);E.addEventListener("dispose",P);let $=E.textures,k=E.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,o.memory.textures++),k){R.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[at]=[];for(let pt=0;pt<x.mipmaps.length;pt++)R.__webglFramebuffer[at][pt]=n.createFramebuffer()}else R.__webglFramebuffer[at]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)R.__webglFramebuffer[at]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(gt)for(let at=0,pt=$.length;at<pt;at++){let dt=i.get($[at]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ut(E)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){let pt=$[at];R.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[at]);let dt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),vt=M(pt.internalFormat,dt,Q,pt.colorSpace,E.isXRRenderTarget===!0),Nt=mt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,vt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,R.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(R.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),F(n.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)At(R.__webglFramebuffer[at][pt],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else At(R.__webglFramebuffer[at],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,pt=$.length;at<pt;at++){let dt=$[at],Q=i.get(dt),vt=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(vt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Q.__webglTexture),F(vt,dt),At(R.__webglFramebuffer,E,dt,n.COLOR_ATTACHMENT0+at,vt,0),g(dt)&&p(vt)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,O.__webglTexture),F(at,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)At(R.__webglFramebuffer[pt],E,x,n.COLOR_ATTACHMENT0,at,pt);else At(R.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,at,0);g(x)&&p(at),e.unbindTexture()}E.depthBuffer&&Ht(E)}function lt(E){let x=E.textures;for(let R=0,O=x.length;R<O;R++){let $=x[R];if(g($)){let k=S(E),gt=i.get($).__webglTexture;e.bindTexture(k,gt),p(k),e.unbindTexture()}}}let rt=[],nt=[];function it(E){if(E.samples>0){if(ut(E)===!1){let x=E.textures,R=E.width,O=E.height,$=n.COLOR_BUFFER_BIT,k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(E),at=x.length>1;if(at)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let pt=E.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let Q=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,R,O,0,0,R,O,$,n.NEAREST),l===!0&&(rt.length=0,nt.length=0,rt.push(n.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(k),nt.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);let Q=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function mt(E){return Math.min(s.maxSamples,E.samples)}function ut(E){let x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Yt(E,x){let R=E.colorSpace,O=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||R!==ms&&R!==Li&&(le.getTransfer(R)===_e?(O!==An||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function Xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=W,this.rebindTextures=ee,this.setupRenderTarget=L,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ut}function SM(n,t){function e(i,s=Li){let r,o=le.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===iu)return n.BYTE;if(i===su)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===Rr)return n.HALF_FLOAT;if(i===au)return n.ALPHA;if(i===lu)return n.RGB;if(i===An)return n.RGBA;if(i===lr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===cu)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===$o||i===Qo||i===ta||i===ea)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===$l||i===Ql||i===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===nc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_c||i===yc||i===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_c)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===bc||i===Sc||i===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Lo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ei({vertexShader:wM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Iu,p={},S=e.getContextAttributes(),M=null,y=null,C=[],A=[],P=new ft,D=null,w=new cn;w.viewport=new ze;let v=new cn;v.viewport=new ze;let I=[w,v],N=new Dl,V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=C[J];return st===void 0&&(st=new pr,C[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=C[J];return st===void 0&&(st=new pr,C[J]=st),st.getGripSpace()},this.getHand=function(J){let st=C[J];return st===void 0&&(st=new pr,C[J]=st),st.getHandSpace()};function G(J){let st=A.indexOf(J.inputSource);if(st===-1)return;let At=C[st];At!==void 0&&(At.update(J.inputSource,J.frame,c||o),At.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",tt);for(let J=0;J<C.length;J++){let st=A[J];st!==null&&(A[J]=null,C[J].disconnect(st))}V=null,X=null,g.reset();for(let J in p)delete p[J];t.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Lt=null,Pt=null;S.depth&&(Pt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=S.stencil?Ir:lr,Lt=S.stencil?Pr:Yi);let Ht={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new di(d.textureWidth,d.textureHeight,{format:An,type:ni,depthTexture:new Io(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new di(f.framebufferWidth,f.framebufferHeight,{format:An,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(J){for(let st=0;st<J.removed.length;st++){let At=J.removed[st],Lt=A.indexOf(At);Lt>=0&&(A[Lt]=null,C[Lt].disconnect(At))}for(let st=0;st<J.added.length;st++){let At=J.added[st],Lt=A.indexOf(At);if(Lt===-1){for(let Ht=0;Ht<C.length;Ht++)if(Ht>=A.length){A.push(At),Lt=Ht;break}else if(A[Ht]===null){A[Ht]=At,Lt=Ht;break}if(Lt===-1)break}let Pt=C[Lt];Pt&&Pt.connect(At)}}let W=new b,H=new b;function ot(J,st,At){W.setFromMatrixPosition(st.matrixWorld),H.setFromMatrixPosition(At.matrixWorld);let Lt=W.distanceTo(H),Pt=st.projectionMatrix.elements,Ht=At.projectionMatrix.elements,ee=Pt[14]/(Pt[10]-1),L=Pt[14]/(Pt[10]+1),lt=(Pt[9]+1)/Pt[5],rt=(Pt[9]-1)/Pt[5],nt=(Pt[8]-1)/Pt[0],it=(Ht[8]+1)/Ht[0],mt=ee*nt,ut=ee*it,Tt=Lt/(-nt+it),Yt=Tt*-nt;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Yt),J.translateZ(Tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Xt=ee+Tt,E=L+Tt,x=mt-Yt,R=ut+(Lt-Yt),O=lt*L/E*Xt,$=rt*L/E*Xt;J.projectionMatrix.makePerspective(x,R,O,$,Xt,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,At=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(At=g.depthFar)),N.near=v.near=w.near=st,N.far=v.far=w.far=At,(V!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,X=N.far),N.layers.mask=J.layers.mask|6,w.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;let Lt=J.parent,Pt=N.cameras;Z(N,Lt);for(let Ht=0;Ht<Pt.length;Ht++)Z(Pt[Ht],Lt);Pt.length===2?ot(N,w,v):N.projectionMatrix.copy(w.projectionMatrix),F(J,N,Lt)};function F(J,st,At){At===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=cr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let et=null;function Ct(J,st){if(h=st.getViewerPose(c||o),m=st,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Lt=!1;At.length!==N.cameras.length&&(N.cameras.length=0,Lt=!0);for(let L=0;L<At.length;L++){let lt=At[L],rt=null;if(f!==null)rt=f.getViewport(lt);else{let it=u.getViewSubImage(d,lt);rt=it.viewport,L===0&&(t.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(y))}let nt=I[L];nt===void 0&&(nt=new cn,nt.layers.enable(L),nt.viewport=new ze,I[L]=nt),nt.matrix.fromArray(lt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(lt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),L===0&&(N.matrix.copy(nt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Lt===!0&&N.cameras.push(nt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let L=u.getDepthInformation(At[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(Pt&&Pt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let L=0;L<At.length;L++){let lt=At[L].camera;if(lt){let rt=p[lt];rt||(rt=new Lo,p[lt]=rt);let nt=u.getCameraImage(lt);rt.sourceTexture=nt}}}}for(let At=0;At<C.length;At++){let Lt=A[At],Pt=C[At];Lt!==null&&Pt!==void 0&&Pt.update(Lt,st,c||o)}et&&et(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),m=null}let St=new Cp;St.setAnimationLoop(Ct),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}},Cs=new qe,EM=new ae;function AM(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,pu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),M=S.envMap,y=S.envMapRotation;M&&(g.envMap.value=M,Cs.copy(y),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Cs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function CM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let y=M.program;i.uniformBlockBinding(S,y)}function c(S,M){let y=s[S.id];y===void 0&&(m(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",g));let C=M.program;i.updateUBOMapping(S,C);let A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){let M=u();S.__bindingPointIndex=M;let y=n.createBuffer(),C=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let M=s[S.id],y=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,P=y.length;A<P;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,v=D.length;w<v;w++){let I=D[w];if(f(I,A,w,C)===!0){let N=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],X=0;for(let G=0;G<V.length;G++){let q=V[G],tt=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,y,C){let A=S.value,P=M+"_"+y;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{let D=C[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(S){let M=S.uniforms,y=0,C=16;for(let P=0,D=M.length;P<D;P++){let w=Array.isArray(M[P])?M[P]:[M[P]];for(let v=0,I=w.length;v<I;v++){let N=w[v],V=Array.isArray(N.value)?N.value:[N.value];for(let X=0,G=V.length;X<G;X++){let q=V[X],tt=_(q),W=y%C,H=W%tt.boundary,ot=W+H;y+=H,ot!==0&&C-ot<tt.storage&&(y+=C-ot),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=tt.storage}}}let A=y%C;return A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function _(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){let M=S.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Rc=class{constructor(t={}){let{canvas:e=Jf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=me;let A=0,P=0,D=null,w=-1,v=null,I=new ze,N=new ze,V=null,X=new kt(0),G=0,q=e.width,tt=e.height,W=1,H=null,ot=null,Z=new ze(0,0,q,tt),F=new ze(0,0,q,tt),et=!1,Ct=new yr,St=!1,J=!1,st=new ae,At=new b,Lt=new ze,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ee(){return D===null?W:1}let L=i;function lt(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),L===null){let B="webgl2";if(L=lt(B,T),L===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let rt,nt,it,mt,ut,Tt,Yt,Xt,E,x,R,O,$,k,gt,at,pt,dt,Q,vt,Nt,xt,Mt,Bt;function U(){rt=new qy(L),rt.init(),xt=new SM(L,rt),nt=new zy(L,rt,t,xt),it=new MM(L,rt),nt.reversedDepthBuffer&&d&&it.buffers.depth.setReversed(!0),mt=new Jy(L),ut=new lM,Tt=new bM(L,rt,it,ut,nt,xt,mt),Yt=new Vy(y),Xt=new Xy(y),E=new ex(L),Mt=new Oy(L,E),x=new Yy(L,E,mt,Mt),R=new Ky(L,x,E,mt),Q=new jy(L,nt,Tt),at=new ky(ut),O=new aM(y,Yt,Xt,rt,nt,Mt,at),$=new AM(y,ut),k=new hM,gt=new gM(rt),dt=new Fy(y,Yt,Xt,it,R,f,l),pt=new yM(y,R,nt),Bt=new CM(L,mt,nt,it),vt=new By(L,rt,mt),Nt=new Zy(L,rt,mt),mt.programs=O.programs,y.capabilities=nt,y.extensions=rt,y.properties=ut,y.renderLists=k,y.shadowMap=pt,y.state=it,y.info=mt}U();let yt=new Lu(y,L);this.xr=yt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,tt,!1))},this.getSize=function(T){return T.set(q,tt)},this.setSize=function(T,B,j=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,tt=B,e.width=Math.floor(T*W),e.height=Math.floor(B*W),j===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(q*W,tt*W).floor()},this.setDrawingBufferSize=function(T,B,j){q=T,tt=B,W=j,e.width=Math.floor(T*j),e.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,j,K){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,j,K),it.viewport(I.copy(Z).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,B,j,K){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,B,j,K),it.scissor(N.copy(F).multiplyScalar(W).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){it.setScissorTest(et=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,j=!0){let K=0;if(T){let z=!1;if(D!==null){let bt=D.texture.format;z=bt===jl||bt===Jl||bt===Zl}if(z){let bt=D.texture.type,It=bt===ni||bt===Yi||bt===Cr||bt===Pr||bt===Xl||bt===ql,Ft=dt.getClearColor(),Ut=dt.getClearAlpha(),Zt=Ft.r,Jt=Ft.g,Gt=Ft.b;It?(m[0]=Zt,m[1]=Jt,m[2]=Gt,m[3]=Ut,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Zt,_[1]=Jt,_[2]=Gt,_[3]=Ut,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}B&&(K|=L.DEPTH_BUFFER_BIT),j&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),dt.dispose(),k.dispose(),gt.dispose(),ut.dispose(),Yt.dispose(),Xt.dispose(),R.dispose(),Mt.dispose(),Bt.dispose(),O.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",li),yt.removeEventListener("sessionend",vd),os.stop()};function Et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=mt.autoReset,B=pt.enabled,j=pt.autoUpdate,K=pt.needsUpdate,z=pt.type;U(),mt.autoReset=T,pt.enabled=B,pt.autoUpdate=j,pt.needsUpdate=K,pt.type=z}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){let B=T.target;B.removeEventListener("dispose",ct),Ot(B)}function Ot(T){$t(T),ut.remove(T)}function $t(T){let B=ut.get(T).programs;B!==void 0&&(B.forEach(function(j){O.releaseProgram(j)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,K,z,bt){B===null&&(B=Pt);let It=z.isMesh&&z.matrixWorld.determinant()<0,Ft=bg(T,B,j,K,z);it.setMaterial(K,It);let Ut=j.index,Zt=1;if(K.wireframe===!0){if(Ut=x.getWireframeAttribute(j),Ut===void 0)return;Zt=2}let Jt=j.drawRange,Gt=j.attributes.position,oe=Jt.start*Zt,ve=(Jt.start+Jt.count)*Zt;bt!==null&&(oe=Math.max(oe,bt.start*Zt),ve=Math.min(ve,(bt.start+bt.count)*Zt)),Ut!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Ut.count)):Gt!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,Gt.count));let Ge=ve-oe;if(Ge<0||Ge===1/0)return;Mt.setup(z,K,Ft,j,Ut);let Re,be=vt;if(Ut!==null&&(Re=E.get(Ut),be=Nt,be.setIndex(Re)),z.isMesh)K.wireframe===!0?(it.setLineWidth(K.wireframeLinewidth*ee()),be.setMode(L.LINES)):be.setMode(L.TRIANGLES);else if(z.isLine){let Wt=K.linewidth;Wt===void 0&&(Wt=1),it.setLineWidth(Wt*ee()),z.isLineSegments?be.setMode(L.LINES):z.isLineLoop?be.setMode(L.LINE_LOOP):be.setMode(L.LINE_STRIP)}else z.isPoints?be.setMode(L.POINTS):z.isSprite&&be.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))be.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Wt=z._multiDrawStarts,Fe=z._multiDrawCounts,he=z._multiDrawCount,In=Ut?E.get(Ut).bytesPerElement:1,ks=ut.get(K).currentProgram.getUniforms();for(let Ln=0;Ln<he;Ln++)ks.setValue(L,"_gl_DrawID",Ln),be.render(Wt[Ln]/In,Fe[Ln])}else if(z.isInstancedMesh)be.renderInstances(oe,Ge,z.count);else if(j.isInstancedBufferGeometry){let Wt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Fe=Math.min(j.instanceCount,Wt);be.renderInstances(oe,Ge,Fe)}else be.render(oe,Ge)};function Ae(T,B,j){T.transparent===!0&&T.side===Ye&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ea(T,B,j),T.side=Qn,T.needsUpdate=!0,Ea(T,B,j),T.side=Ye):Ea(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=gt.get(j),p.init(B),M.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==j&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let K=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let bt=z.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Ft=bt[It];Ae(Ft,j,z),K.add(Ft)}else Ae(bt,j,z),K.add(bt)}),p=M.pop(),K},this.compileAsync=function(T,B,j=null){let K=this.compile(T,B,j);return new Promise(z=>{function bt(){if(K.forEach(function(It){ut.get(It).currentProgram.isReady()&&K.delete(It)}),K.size===0){z(T);return}setTimeout(bt,10)}rt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let pe=null;function Mi(T){pe&&pe(T)}function li(){os.stop()}function vd(){os.start()}let os=new Cp;os.setAnimationLoop(Mi),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(T){pe=T,yt.setAnimationLoop(T),T===null?os.stop():os.start()},yt.addEventListener("sessionstart",li),yt.addEventListener("sessionend",vd),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(B),B=yt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,D),p=gt.get(T,M.length),p.init(B),M.push(p),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ct.setFromProjectionMatrix(st,$n,B.reversedDepth),J=this.localClippingEnabled,St=at.init(this.clippingPlanes,J),g=k.get(T,S.length),g.init(),S.push(g),yt.enabled===!0&&yt.isPresenting===!0){let bt=y.xr.getDepthSensingMesh();bt!==null&&hh(bt,B,-1/0,y.sortObjects)}hh(T,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(H,ot),Ht=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ht&&dt.addToRenderList(g,T),this.info.render.frame++,St===!0&&at.beginShadows();let j=p.state.shadowsArray;pt.render(j,T,B),St===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let bt=B.cameras;if(z.length>0)for(let It=0,Ft=bt.length;It<Ft;It++){let Ut=bt[It];bd(K,z,T,Ut)}Ht&&dt.render(T);for(let It=0,Ft=bt.length;It<Ft;It++){let Ut=bt[It];Md(g,T,Ut,Ut.viewport)}}else z.length>0&&bd(K,z,T,B),Ht&&dt.render(T),Md(g,T,B);D!==null&&P===0&&(Tt.updateMultisampleRenderTarget(D),Tt.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,B),Mt.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],St===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function hh(T,B,j,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ct.intersectsSprite(T)){K&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(st);let It=R.update(T),Ft=T.material;Ft.visible&&g.push(T,It,Ft,j,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ct.intersectsObject(T))){let It=R.update(T),Ft=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Lt.copy(It.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(st)),Array.isArray(Ft)){let Ut=It.groups;for(let Zt=0,Jt=Ut.length;Zt<Jt;Zt++){let Gt=Ut[Zt],oe=Ft[Gt.materialIndex];oe&&oe.visible&&g.push(T,It,oe,j,Lt.z,Gt)}}else Ft.visible&&g.push(T,It,Ft,j,Lt.z,null)}}let bt=T.children;for(let It=0,Ft=bt.length;It<Ft;It++)hh(bt[It],B,j,K)}function Md(T,B,j,K){let z=T.opaque,bt=T.transmissive,It=T.transparent;p.setupLightsView(j),St===!0&&at.setGlobalState(y.clippingPlanes,j),K&&it.viewport(I.copy(K)),z.length>0&&Ta(z,B,j),bt.length>0&&Ta(bt,B,j),It.length>0&&Ta(It,B,j),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function bd(T,B,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new di(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Rr:ni,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let bt=p.state.transmissionRenderTarget[K.id],It=K.viewport||I;bt.setSize(It.z*y.transmissionResolutionScale,It.w*y.transmissionResolutionScale);let Ft=y.getRenderTarget(),Ut=y.getActiveCubeFace(),Zt=y.getActiveMipmapLevel();y.setRenderTarget(bt),y.getClearColor(X),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&dt.render(j);let Jt=y.toneMapping;y.toneMapping=Ii;let Gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),St===!0&&at.setGlobalState(y.clippingPlanes,K),Ta(T,j,K),Tt.updateMultisampleRenderTarget(bt),Tt.updateRenderTargetMipmap(bt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let ve=0,Ge=B.length;ve<Ge;ve++){let Re=B[ve],be=Re.object,Wt=Re.geometry,Fe=Re.material,he=Re.group;if(Fe.side===Ye&&be.layers.test(K.layers)){let In=Fe.side;Fe.side=rn,Fe.needsUpdate=!0,Sd(be,j,K,Wt,Fe,he),Fe.side=In,Fe.needsUpdate=!0,oe=!0}}oe===!0&&(Tt.updateMultisampleRenderTarget(bt),Tt.updateRenderTargetMipmap(bt))}y.setRenderTarget(Ft,Ut,Zt),y.setClearColor(X,G),Gt!==void 0&&(K.viewport=Gt),y.toneMapping=Jt}function Ta(T,B,j){let K=B.isScene===!0?B.overrideMaterial:null;for(let z=0,bt=T.length;z<bt;z++){let It=T[z],Ft=It.object,Ut=It.geometry,Zt=It.group,Jt=It.material;Jt.allowOverride===!0&&K!==null&&(Jt=K),Ft.layers.test(j.layers)&&Sd(Ft,B,j,Ut,Jt,Zt)}}function Sd(T,B,j,K,z,bt){T.onBeforeRender(y,B,j,K,z,bt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,B,j,K,T,bt),z.transparent===!0&&z.side===Ye&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,y.renderBufferDirect(j,B,K,z,T,bt),z.side=Qn,z.needsUpdate=!0,y.renderBufferDirect(j,B,K,z,T,bt),z.side=Ye):y.renderBufferDirect(j,B,K,z,T,bt),T.onAfterRender(y,B,j,K,z,bt)}function Ea(T,B,j){B.isScene!==!0&&(B=Pt);let K=ut.get(T),z=p.state.lights,bt=p.state.shadowsArray,It=z.state.version,Ft=O.getParameters(T,z.state,bt,B,j),Ut=O.getProgramCacheKey(Ft),Zt=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?Xt:Yt).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",ct),Zt=new Map,K.programs=Zt);let Jt=Zt.get(Ut);if(Jt!==void 0){if(K.currentProgram===Jt&&K.lightsStateVersion===It)return Td(T,Ft),Jt}else Ft.uniforms=O.getUniforms(T),T.onBeforeCompile(Ft,y),Jt=O.acquireProgram(Ft,Ut),Zt.set(Ut,Jt),K.uniforms=Ft.uniforms;let Gt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Gt.clippingPlanes=at.uniform),Td(T,Ft),K.needsLights=wg(T),K.lightsStateVersion=It,K.needsLights&&(Gt.ambientLightColor.value=z.state.ambient,Gt.lightProbe.value=z.state.probe,Gt.directionalLights.value=z.state.directional,Gt.directionalLightShadows.value=z.state.directionalShadow,Gt.spotLights.value=z.state.spot,Gt.spotLightShadows.value=z.state.spotShadow,Gt.rectAreaLights.value=z.state.rectArea,Gt.ltc_1.value=z.state.rectAreaLTC1,Gt.ltc_2.value=z.state.rectAreaLTC2,Gt.pointLights.value=z.state.point,Gt.pointLightShadows.value=z.state.pointShadow,Gt.hemisphereLights.value=z.state.hemi,Gt.directionalShadowMap.value=z.state.directionalShadowMap,Gt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Gt.spotShadowMap.value=z.state.spotShadowMap,Gt.spotLightMatrix.value=z.state.spotLightMatrix,Gt.spotLightMap.value=z.state.spotLightMap,Gt.pointShadowMap.value=z.state.pointShadowMap,Gt.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Jt,K.uniformsList=null,Jt}function wd(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Ur.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Td(T,B){let j=ut.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function bg(T,B,j,K,z){B.isScene!==!0&&(B=Pt),Tt.resetTextureUnits();let bt=B.fog,It=K.isMeshStandardMaterial?B.environment:null,Ft=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ms,Ut=(K.isMeshStandardMaterial?Xt:Yt).get(K.envMap||It),Zt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Jt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Gt=!!j.morphAttributes.position,oe=!!j.morphAttributes.normal,ve=!!j.morphAttributes.color,Ge=Ii;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ge=y.toneMapping);let Re=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,be=Re!==void 0?Re.length:0,Wt=ut.get(K),Fe=p.state.lights;if(St===!0&&(J===!0||T!==v)){let yn=T===v&&K.id===w;at.setState(K,T,yn)}let he=!1;K.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Fe.state.version||Wt.outputColorSpace!==Ft||z.isBatchedMesh&&Wt.batching===!1||!z.isBatchedMesh&&Wt.batching===!0||z.isBatchedMesh&&Wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Wt.instancing===!1||!z.isInstancedMesh&&Wt.instancing===!0||z.isSkinnedMesh&&Wt.skinning===!1||!z.isSkinnedMesh&&Wt.skinning===!0||z.isInstancedMesh&&Wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Wt.instancingMorph===!1&&z.morphTexture!==null||Wt.envMap!==Ut||K.fog===!0&&Wt.fog!==bt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==at.numPlanes||Wt.numIntersection!==at.numIntersection)||Wt.vertexAlphas!==Zt||Wt.vertexTangents!==Jt||Wt.morphTargets!==Gt||Wt.morphNormals!==oe||Wt.morphColors!==ve||Wt.toneMapping!==Ge||Wt.morphTargetsCount!==be)&&(he=!0):(he=!0,Wt.__version=K.version);let In=Wt.currentProgram;he===!0&&(In=Ea(K,B,z));let ks=!1,Ln=!1,to=!1,Oe=In.getUniforms(),zn=Wt.uniforms;if(it.useProgram(In.program)&&(ks=!0,Ln=!0,to=!0),K.id!==w&&(w=K.id,Ln=!0),ks||v!==T){it.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(L,"projectionMatrix",T.projectionMatrix),Oe.setValue(L,"viewMatrix",T.matrixWorldInverse);let bn=Oe.map.cameraPosition;bn!==void 0&&bn.setValue(L,At.setFromMatrixPosition(T.matrixWorld)),nt.logarithmicDepthBuffer&&Oe.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Oe.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Ln=!0,to=!0)}if(z.isSkinnedMesh){Oe.setOptional(L,z,"bindMatrix"),Oe.setOptional(L,z,"bindMatrixInverse");let yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(L,"boneTexture",yn.boneTexture,Tt))}z.isBatchedMesh&&(Oe.setOptional(L,z,"batchingTexture"),Oe.setValue(L,"batchingTexture",z._matricesTexture,Tt),Oe.setOptional(L,z,"batchingIdTexture"),Oe.setValue(L,"batchingIdTexture",z._indirectTexture,Tt),Oe.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Oe.setValue(L,"batchingColorTexture",z._colorsTexture,Tt));let kn=j.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Q.update(z,j,In),(Ln||Wt.receiveShadow!==z.receiveShadow)&&(Wt.receiveShadow=z.receiveShadow,Oe.setValue(L,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(zn.envMap.value=Ut,zn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(zn.envMapIntensity.value=B.environmentIntensity),Ln&&(Oe.setValue(L,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Sg(zn,to),bt&&K.fog===!0&&$.refreshFogUniforms(zn,bt),$.refreshMaterialUniforms(zn,K,W,tt,p.state.transmissionRenderTarget[T.id]),Ur.upload(L,wd(Wt),zn,Tt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ur.upload(L,wd(Wt),zn,Tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Oe.setValue(L,"center",z.center),Oe.setValue(L,"modelViewMatrix",z.modelViewMatrix),Oe.setValue(L,"normalMatrix",z.normalMatrix),Oe.setValue(L,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let yn=K.uniformsGroups;for(let bn=0,uh=yn.length;bn<uh;bn++){let as=yn[bn];Bt.update(as,In),Bt.bind(as,In)}}return In}function Sg(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function wg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,j){let K=ut.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ut.get(T.texture).__webglTexture=B,ut.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let j=ut.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};let Tg=L.createFramebuffer();this.setRenderTarget=function(T,B=0,j=0){D=T,A=B,P=j;let K=!0,z=null,bt=!1,It=!1;if(T){let Ut=ut.get(T);if(Ut.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Ut.__webglFramebuffer===void 0)Tt.setupRenderTarget(T);else if(Ut.__hasExternalTextures)Tt.rebindTextures(T,ut.get(T.texture).__webglTexture,ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Gt=T.depthTexture;if(Ut.__boundDepthTexture!==Gt){if(Gt!==null&&ut.has(Gt)&&(T.width!==Gt.image.width||T.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(T)}}let Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);let Jt=ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Jt[B])?z=Jt[B][j]:z=Jt[B],bt=!0):T.samples>0&&Tt.useMultisampledRTT(T)===!1?z=ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Jt)?z=Jt[j]:z=Jt,I.copy(T.viewport),N.copy(T.scissor),V=T.scissorTest}else I.copy(Z).multiplyScalar(W).floor(),N.copy(F).multiplyScalar(W).floor(),V=et;if(j!==0&&(z=Tg),it.bindFramebuffer(L.FRAMEBUFFER,z)&&K&&it.drawBuffers(T,z),it.viewport(I),it.scissor(N),it.setScissorTest(V),bt){let Ut=ut.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,j)}else if(It){let Ut=B;for(let Zt=0;Zt<T.textures.length;Zt++){let Jt=ut.get(T.textures[Zt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,j,Ut)}}else if(T!==null&&j!==0){let Ut=ut.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,j)}w=-1},this.readRenderTargetPixels=function(T,B,j,K,z,bt,It,Ft=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){it.bindFramebuffer(L.FRAMEBUFFER,Ut);try{let Zt=T.textures[Ft],Jt=Zt.format,Gt=Zt.type;if(!nt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&j>=0&&j<=T.height-z&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft),L.readPixels(B,j,K,z,xt.convert(Jt),xt.convert(Gt),bt))}finally{let Zt=D!==null?ut.get(D).__webglFramebuffer:null;it.bindFramebuffer(L.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,K,z,bt,It,Ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(B>=0&&B<=T.width-K&&j>=0&&j<=T.height-z){it.bindFramebuffer(L.FRAMEBUFFER,Ut);let Zt=T.textures[Ft],Jt=Zt.format,Gt=Zt.type;if(!nt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft),L.readPixels(B,j,K,z,xt.convert(Jt),xt.convert(Gt),0);let ve=D!==null?ut.get(D).__webglFramebuffer:null;it.bindFramebuffer(L.FRAMEBUFFER,ve);let Ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jf(L,Ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.deleteBuffer(oe),L.deleteSync(Ge),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,j=0){let K=Math.pow(2,-j),z=Math.floor(T.image.width*K),bt=Math.floor(T.image.height*K),It=B!==null?B.x:0,Ft=B!==null?B.y:0;Tt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,It,Ft,z,bt),it.unbindTexture()};let Eg=L.createFramebuffer(),Ag=L.createFramebuffer();this.copyTextureToTexture=function(T,B,j=null,K=null,z=0,bt=null){bt===null&&(z!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=z,z=0):bt=0);let It,Ft,Ut,Zt,Jt,Gt,oe,ve,Ge,Re=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(j!==null)It=j.max.x-j.min.x,Ft=j.max.y-j.min.y,Ut=j.isBox3?j.max.z-j.min.z:1,Zt=j.min.x,Jt=j.min.y,Gt=j.isBox3?j.min.z:0;else{let kn=Math.pow(2,-z);It=Math.floor(Re.width*kn),Ft=Math.floor(Re.height*kn),T.isDataArrayTexture?Ut=Re.depth:T.isData3DTexture?Ut=Math.floor(Re.depth*kn):Ut=1,Zt=0,Jt=0,Gt=0}K!==null?(oe=K.x,ve=K.y,Ge=K.z):(oe=0,ve=0,Ge=0);let be=xt.convert(B.format),Wt=xt.convert(B.type),Fe;B.isData3DTexture?(Tt.setTexture3D(B,0),Fe=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Tt.setTexture2DArray(B,0),Fe=L.TEXTURE_2D_ARRAY):(Tt.setTexture2D(B,0),Fe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let he=L.getParameter(L.UNPACK_ROW_LENGTH),In=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ks=L.getParameter(L.UNPACK_SKIP_PIXELS),Ln=L.getParameter(L.UNPACK_SKIP_ROWS),to=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let Oe=T.isDataArrayTexture||T.isData3DTexture,zn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let kn=ut.get(T),yn=ut.get(B),bn=ut.get(kn.__renderTarget),uh=ut.get(yn.__renderTarget);it.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),it.bindFramebuffer(L.DRAW_FRAMEBUFFER,uh.__webglFramebuffer);for(let as=0;as<Ut;as++)Oe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(T).__webglTexture,z,Gt+as),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.get(B).__webglTexture,bt,Ge+as)),L.blitFramebuffer(Zt,Jt,It,Ft,oe,ve,It,Ft,L.DEPTH_BUFFER_BIT,L.NEAREST);it.bindFramebuffer(L.READ_FRAMEBUFFER,null),it.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||ut.has(T)){let kn=ut.get(T),yn=ut.get(B);it.bindFramebuffer(L.READ_FRAMEBUFFER,Eg),it.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ag);for(let bn=0;bn<Ut;bn++)Oe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kn.__webglTexture,z,Gt+bn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kn.__webglTexture,z),zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,bt,Ge+bn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,bt),z!==0?L.blitFramebuffer(Zt,Jt,It,Ft,oe,ve,It,Ft,L.COLOR_BUFFER_BIT,L.NEAREST):zn?L.copyTexSubImage3D(Fe,bt,oe,ve,Ge+bn,Zt,Jt,It,Ft):L.copyTexSubImage2D(Fe,bt,oe,ve,Zt,Jt,It,Ft);it.bindFramebuffer(L.READ_FRAMEBUFFER,null),it.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Fe,bt,oe,ve,Ge,It,Ft,Ut,be,Wt,Re.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,bt,oe,ve,Ge,It,Ft,Ut,be,Re.data):L.texSubImage3D(Fe,bt,oe,ve,Ge,It,Ft,Ut,be,Wt,Re):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,oe,ve,It,Ft,be,Wt,Re.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,oe,ve,Re.width,Re.height,be,Re.data):L.texSubImage2D(L.TEXTURE_2D,bt,oe,ve,It,Ft,be,Wt,Re);L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,In),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ks),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,to),bt===0&&B.generateMipmaps&&L.generateMipmap(Fe),it.unbindTexture()},this.initRenderTarget=function(T){ut.get(T).__webglFramebuffer===void 0&&Tt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Tt.setTextureCube(T,0):T.isData3DTexture?Tt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Tt.setTexture2DArray(T,0):Tt.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,it.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Uu=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var xw=Uu.length-1,Dp=Math.min(...Uu.map(n=>n[1])),Up=Math.max(...Uu.map(n=>n[1])),_w=new b(0,0,(Dp+Up)/2),Np=new b(.047,.027,(Up-Dp)/2);var Mw=new ue,bw=new b,Sw=new b,ww=new ae;var Tw=new b,Ew=new b;var Aw=new b;var Cw=new b,Rw=new b,Pw=new b,Iw=new Sn,Lw=new b;function sa(n,t=0){let e=n.attributes.position,i=[],s=[],r=new Set;for(let m=0;m<e.count;m++){let _=new b().fromBufferAttribute(e,m),g=_.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(_))}for(let m=0;m<(n.index?.count??e.count);m+=3){let _=y=>new b().fromBufferAttribute(e,n.index?n.index.getX(y):y),g=_(m),p=_(m+1),S=_(m+2),M=new Sn(g,p,S).getNormal(new b);M.lengthSq()>.1&&s.push({a:g,b:p,c:S,n:M})}let o=t||Math.max(...i.map(m=>m.length())),{x:a,y:l,z:c}=new Ze().setFromPoints(i).getSize(new b),h=Math.max(1e-4,t**2*.4),u=t?new b().setScalar(1/h):new b(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=t?2*t:Math.min(a,l,c),f=m=>{let _=[];for(let g of m)g.lengthSq()>.5&&!_.some(p=>Math.abs(p.dot(g))>.9999)&&_.push(g);return _};return{vertices:i,faces:s,sphereRadius:t,radius:o,inverseInertia:u,thickness:d,normals:t?[]:f(s.map(m=>m.n)),edges:t?[]:f(s.flatMap(m=>[new b().subVectors(m.b,m.a).normalize(),new b().subVectors(m.c,m.b).normalize(),new b().subVectors(m.a,m.c).normalize()]))}}var Dw=new b,Uw=new b,Nw=new b,Fw=new b,Ow=new b;function Or(n){return sa(new qt(n.x*2,n.y*2,n.z*2))}var Bw=new b;var Fp=sa(new Wn(1,0).scale(...Np)),zw={mesh:{position:new b,quaternion:new ue},shape:Fp,radius:Fp.radius,precise:!0};var kw=new b,Vw=new b,Gw=new b,Hw=new ue,Ww=new ue,Xw=new ue;var qw=new b,Yw=new b,Zw=new b,Jw=new b;var jw=new b;var Kw=new b,$w=new b,Qw=new b,tT=new b,eT=new b,nT=new b,iT=new b;var sT={mesh:{position:null,quaternion:new ue},shape:{sphereRadius:0,normals:[],edges:[]}};function Ic(n,t,e){let i=new qt(n,t,e),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?e:n,h=l?e:t;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return i}function Op(n,t){let e=n.attributes.uv;if(!e)return n;let i=1/(t.uvScale??1),s=(t.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=t.uvOffsetX??0,l=t.uvOffsetY??0;for(let c=0;c<e.count;c++){let h=e.getX(c)*i,u=e.getY(c)*i;e.setXY(c,h*r-u*o+a,h*o+u*r+l)}return e.needsUpdate=!0,n}function Bp(n){switch(n){case"sphere":return new On(.5,24,16);case"cylinder":return new fe(.5,.5,1,24);case"cone":return new Ci(.5,1,24);case"torus":return new Mn(.34,.14,12,32);case"capsule":return new gs(.32,.36,8,16);default:return new qt(1,1,1)}}function ra(n,t){let e=Math.imul(n,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}var Zi=(n,t,e)=>n+(t-n)*e,Br=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Lc(n,t){let e=Math.floor(n),i=Math.floor(t),s=Br(0,1,n-e),r=Br(0,1,t-i);return Zi(Zi(ra(e,i),ra(e+1,i),s),Zi(ra(e,i+1),ra(e+1,i+1),s),r)}function zp(n,t){return Lc(n,t)*.54+Lc(n*2.07+3.4,t*2.07-6.1)*.26+Lc(n*4.2+9,t*4.2)*.13+Lc(n*8.6,t*8.6-13)*.07}function kp(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((m,_)=>Zi(m,o[_],d));for(let m=0;m<1024;m++){let _=4*(m+l*1024),g=0,p=0,S=0;if(c>.025)if(n){let y=ra(m+792,l+677);y>.9988&&(S=(y-.9988)*49e3*Br(.09,.3,c))}else{let[y,C]=s[m],A=2.8*h/(c+.16),P=y*A+3.6,D=C*A-8.1,w=zp(P,D),v=zp(P-.12,D-.09);g=Br(.49,.66,w)*Br(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(w-v)*5+(w-.54)*.8))}let M=n?1:Zi(.94,1,Br(.05,.34,c));i[_]=Zi(f[0],(139+115*p)*M,g)+S,i[_+1]=Zi(f[1],(154+100*p)*M,g)+S*.94,i[_+2]=Zi(f[2],(178+77*p)*M,g)+S*.86,i[_+3]=255}}let a=new fi(i,1024,512,An);return a.colorSpace=me,a.wrapS=Gn,a.magFilter=sn,a.minFilter=En,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Vp(){return{day:kp(!1),night:kp(!0)}}var ke=(n,t,e,i)=>({xMin:n,xMax:t,zMin:e,zMax:i}),Gp=ke(-24,24,-51,7),Hp=34521,Wp={x:0,y:0,z:3},Dc={x:.05,y:1.16,z:5.9},zr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:ke(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:ke(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:ke(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:ke(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:ke(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:ke(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:ke(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:ke(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:ke(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:ke(9,23,-48,-37),sign:[16,-38.2]}},lT=[ke(-9,-6,-51,7),ke(6,9,-51,7),ke(-24,24,-8,-5),ke(-24,24,-27,-23),ke(9,23,-37,-34)],Xp=[{name:"Glace",bounds:zr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:zr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:ke(-9,9,-51,7)},{name:"Sol ouest",bounds:ke(-23,-9,-51,-23)},{name:"Sol ouest",bounds:ke(-23,-9,-8,7)},{name:"Bordure ouest",bounds:ke(-24,-23,-51,7)},{name:"Sol est",bounds:ke(9,23,-51,-48)},{name:"Sol est",bounds:ke(9,23,-37,7)},{name:"Bordure est",bounds:ke(23,24,-51,7)}],kr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Vr=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],qp=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(t=>({x:t,z:n}))),Nu={x:16,z:-31},Fu={x:16,y:1.52,z:-21},Uc={x:-19.4,y:.68,z:-3.25},Yp=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Zp={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Fu.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,t)=>{let e=.3+t*.265;return["Palier "+(t+1),-3.75,e*.5,-29.65-t*1.7,2.1,e,1.35,t%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,t)=>[["Paroi ouest "+(t+1),1.35,2.15+t*.32,-33.4-t*3.55,.45,4.3+t*.64,2.7,2],["Paroi est "+(t+1),4.78,2.36+t*.3,-34.2-t*3.55,.45,4.72+t*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Nc(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new mi(i);return s.colorSpace=me,s}function Jp(n,t){let{day:e,night:i}=Vp(),s=new ht(new On(180,40,20),new We({map:e,side:rn,fog:!1,toneMapped:!1}));n.add(s);let r=Nc(128,128,(x,R)=>{let O=x.createRadialGradient(R/2,R/2,0,R/2,R/2,R/2);O.addColorStop(0,"#fff8df"),O.addColorStop(.12,"#fff3bd"),O.addColorStop(.18,"rgba(255,225,144,.40)"),O.addColorStop(1,"rgba(255,220,144,0)"),x.fillStyle=O,x.fillRect(0,0,R,R)}),o=new Ao(new xr({map:r,blending:Jo,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=e.clone();a.mapping=Ar,a.needsUpdate=!0;let l=new Nr(t);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new vs("#daeaff","#88724c",2.25),h=new Ms("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(c,h,h.target);let u=new b,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function m(x){f=d[x]?x:0;let R=d[f];c.color.set(R.fill),c.groundColor.set(R.ground),c.intensity=R.hemi,h.color.set(R.sun),h.intensity=R.power,u.set(...R.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(R.sun),o.material.opacity=R.glow,s.material.map=f===2?i:e,s.material.color.set(R.sky),n.fog.color.set(R.fog),n.background.set(R.fog),n.environmentIntensity=g*[1,.56,.09][f]}function _(x){if(!h.castShadow)return;let R=h.target.position,O=Math.round(x.x/4)*4,$=Math.round(x.y/4)*4,k=Math.round(x.z/4)*4;R.x===O&&R.y===$&&R.z===k||(R.set(O,$,k),h.position.copy(R).add(u))}let g=0;n.background=new kt(d[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function S(x,R,O){let[,$,k]=p[R],gt=512;x.save(),x.scale(O/512,O/512),x.fillStyle=$,x.fillRect(0,0,gt,gt);let at=R+19;function pt(){return at=Math.imul(at,1664525)+1013904223>>>0,at/4294967296}if(x.fillStyle=k,R===16){for(let dt=0;dt<16;dt++)for(let Q=0;Q<16;Q++)(Q+dt)%2===0&&x.fillRect(Q*32,dt*32,32,32);x.fillStyle="#ff3957",x.fillRect(253,0,6,512),x.fillRect(0,253,512,6)}else if([0,2,8,15].includes(R)){let dt=R===15?32:64;x.globalAlpha=.48;for(let Q=0;Q<gt;Q+=dt){x.fillRect(0,Q,gt,R===8?3:2);for(let vt=-dt;vt<gt;vt+=dt)x.fillRect(vt+Q/dt%2*(R===2?dt/2:0),Q,2,dt)}}else if([4,5,6,7,10,11,12].includes(R)){let dt=R===5?38:R===7?64:18;for(let Q=0;Q<dt;Q++){x.strokeStyle=k,x.globalAlpha=.08+pt()*.22,x.lineWidth=R===5?1+pt()*8:1+pt()*4;let vt=pt()*gt,Nt=R===5?.018:.009;x.beginPath();for(let xt=0;xt<=gt;xt+=8){let Mt=vt+Math.sin(xt*Nt+Q)*(R===6||R===7?4:12+Q%5*3)+(R===4?xt*.28:0);xt===0?x.moveTo(xt,Mt):x.lineTo(xt,Mt)}x.stroke()}}else{x.globalAlpha=.27;for(let dt=0;dt<120;dt++){let Q=pt()*gt,vt=pt()*gt,Nt=2+pt()*6;x.beginPath(),x.arc(Q,vt,Nt,0,Math.PI*2),x.fill()}}if(R!==16)for(let dt=0;dt<4400;dt++)x.globalAlpha=.05+pt()*.1,x.fillStyle=pt()>.5?k:"#222324",x.fillRect(pt()*gt,pt()*gt,1+pt()*4,1+pt()*3);x.restore()}let M=new Set([0,2,4,5,8,15,16]),y=p.map(([x,R,O,$,k,gt],at)=>{let pt=M.has(at)?512:256,dt=Nc(pt,pt,vt=>S(vt,at,pt));dt.wrapS=dt.wrapT=Gn;let Q=new en({map:dt,roughness:$,metalness:k,flatShading:!0,opacity:gt,transparent:gt<1,depthWrite:gt===1});return Q.name=x,Q}),C=y.map(x=>x.map.image),A=512,P=y.map(x=>new fn({map:x.map,flatShading:!0,opacity:x.opacity,transparent:x.transparent,depthWrite:x.depthWrite})),D={value:0},w={value:.24},v={value:null},I={value:0};function N(){v.value?.dispose(),v.value=Nc(512,512,(x,R)=>{x.fillStyle="#ffffff",x.fillRect(0,0,R,R);let O=R/52,$=R/64;for(let k of V){if(!k.position||!k.half||k.position.y+k.half.y<.22)continue;let gt=(k.position.x+26)*O,at=(k.position.z+54)*$,pt=Math.min(55,k.half.x*O+5),dt=Math.min(72,k.half.z*$+6);x.save(),x.translate(gt+k.half.y*O*.2,at+k.half.y*$*.24),x.scale(pt,dt);let Q=x.createRadialGradient(0,0,.15,0,0,1);Q.addColorStop(0,"rgba(22,37,65,.54)"),Q.addColorStop(.58,"rgba(36,54,76,.29)"),Q.addColorStop(1,"rgba(38,48,57,0)"),x.fillStyle=Q,x.fillRect(-1,-1,2,2),x.restore()}})}for(let x of[...y,...P])x.onBeforeCompile=R=>{R.uniforms.uFocusAmount=D,R.uniforms.uFocusRadius=w,R.uniforms.uLabLightmap=v,R.uniforms.uLabBakedStrength=I,R.vertexShader=`varying vec3 vLabPosition;
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
      `)},x.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let V=[],X=[];function G(x,R,O,$,k,gt,at,pt=0,dt=0,Q=1,vt=1,Nt=!1){let xt=new ht(Nt?new qt(k,gt,at):Ic(k,gt,at),y[pt]);xt.position.set(R,O,$),xt.rotation.x=dt,xt.receiveShadow=!0,xt.castShadow=!0,n.add(xt);let Mt=new b(k/2,gt/2,at/2),Bt={mesh:xt,position:xt.position,quaternion:xt.quaternion,half:Mt,min:Mt.clone().negate(),friction:Q,gravity:vt,name:x,type:pt,shape:Or(Mt)};return V.push(Bt),Bt}let q=Xp.map(({name:x,bounds:R,type:O=0,friction:$=.78,gravity:k=1})=>{let{xMin:gt,xMax:at,zMin:pt,zMax:dt}=R;return G(x,(gt+at)/2,-.33,(pt+dt)/2,at-gt,.66,dt-pt,O,0,$,k)});for(let x of Object.values(Zp))for(let R of x)G(...R);let{xMin:tt,xMax:W,zMin:H,zMax:ot}=Gp;G("But\xE9e arri\xE8re",0,1.35,H+.4,W-tt,2.7,.6,2),G("But\xE9e ouest",tt+.3,1.05,(H+ot)/2,.6,2.1,ot-H,2),G("But\xE9e est",W-.3,1.05,(H+ot)/2,.6,2.1,ot-H,2);let{xMin:Z,xMax:F,zMin:et,zMax:Ct}=zr.hills.bounds,St=F-Z,J=Ct-et,st=16,At=64,Lt=new dn(St,J,st,At).rotateX(-Math.PI/2).translate(Z+St/2,0,et+J/2),Pt=Lt.attributes.uv;for(let x=0;x<Pt.count;x++)Pt.setXY(x,Pt.getX(x)*St/2.6,Pt.getY(x)*J/2.6);let Ht=Lt.attributes.position,ee;function L(x){if(ee===x)return;ee=x;let R=ee*.017;for(let O=0;O<Ht.count;O++){let $=Ht.getX(O),k=Ht.getZ(O),gt=Math.sin(Math.PI*Vt.clamp(($-Z)/St,0,1)),at=Math.min(1,(k-et)*.48,(Ct-k)*.48),pt=.93+.56*Math.sin(k*.36+R)+.32*Math.cos($*.67+k*.26+R*1.4)+.19*Math.sin(k*.81+R*.67);Ht.setY(O,Math.max(0,gt*at*pt))}Ht.needsUpdate=!0,Lt.computeVertexNormals(),Lt.computeBoundingSphere()}L(Hp);let lt=new ht(Lt,y[3]);lt.receiveShadow=lt.castShadow=!0,n.add(lt);let rt=(x,R)=>{let O=Vt.clamp((x-Z)/St*st,0,st-1e-6),$=Vt.clamp((R-et)/J*At,0,At-1e-6),k=Math.floor(O),gt=Math.floor($),at=O-k,pt=$-gt,dt=st+1,Q=gt*dt+k,vt=Ht.getY(Q),Nt=Ht.getY(Q+1),xt=Ht.getY(Q+dt),Mt=Ht.getY(Q+dt+1);return at+pt<=1?vt+(Nt-vt)*at+(xt-vt)*pt:Mt+(xt-Mt)*(1-at)+(Nt-Mt)*(1-pt)};V.push({heightfield:!0,mesh:lt,height:rt,...zr.hills.bounds,friction:.81,gravity:1});function nt(x,R,O,$,k=1.45){let gt=Nc(384,72,(pt,dt,Q)=>{pt.fillStyle="#202a32",pt.fillRect(0,0,dt,Q),pt.fillStyle=$,pt.font="bold 31px system-ui",pt.textAlign="center",pt.fillText(x,dt/2,48,dt-20)}),at=new ht(new dn(3.2,.6),new We({map:gt,side:Ye}));at.position.set(R,k,O),n.add(at),X.push(at)}for(let x of Object.values(zr)){nt(x.name.toLocaleUpperCase("fr"),...x.sign,x.color);let{xMin:R,xMax:O,zMin:$,zMax:k}=x.bounds,gt=new Po(new re().setFromPoints([new b(R,.025,$),new b(O,.025,$),new b(O,.025,k),new b(R,.025,k)]),new pi({color:x.color,transparent:!0,opacity:.72}));n.add(gt),X.push(gt)}nt("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),nt("MURS HAUTS",3,-31,"#e8d2ff"),nt("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let it=new en({color:"#c8e6ed",metalness:1,roughness:.16}),mt=new ht(new Fn(.54,2),it);mt.position.set(Uc.x,Uc.y,Uc.z),mt.castShadow=!0,n.add(mt);let ut=p.map((x,R)=>{let{x:O,z:$}=Yp(R);return G("\xC9chantillon "+p[R][0],O,.325,$,.65,.65,.65,R,0,1,1,!0).mesh}),Tt=new tn(1,12).rotateX(-Math.PI/2),Yt=new We({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Xt(x){let R=new ht(Tt,Yt);return R.scale.setScalar(x),n.add(R),R}function E(x,R,O,$,k,gt,at,pt){let dt=R>=3;t.shadowMap.enabled=dt,h.castShadow=dt,Yt.opacity=R===2?.17:.11,I.value=pt?.38+O*.04:0;let Q=R>=9?2048:R>=6?1024:R>=4?512:256;h.shadow.intensity=.45+R*.055,h.shadow.radius=.65+R*.12;let vt=13+R*1.2;Object.assign(h.shadow.camera,{left:-vt,right:vt,top:vt,bottom:-vt}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==Q&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(Q,Q)),o.visible=k,at!==A&&(A=at,y.forEach((xt,Mt)=>{let Bt=xt.userData.texture??xt.map,U=M.has(Mt)?at:Math.min(256,at);if(Bt.image.width===U)return;let yt=document.createElement("canvas");yt.width=yt.height=U;let Et=yt.getContext("2d");U>512?S(Et,Mt,U):Et.drawImage(C[Mt],0,0,U,U);let Dt=new mi(yt);Dt.colorSpace=Bt.colorSpace,Dt.wrapS=Bt.wrapS,Dt.wrapT=Bt.wrapT,Dt.repeat.copy(Bt.repeat);for(let _t of[xt,P[Mt]])_t.userData.texture=Dt,_t.map=Dt,_t.needsUpdate=!0;Bt.dispose()}));let Nt=x>=4;for(let xt of V)xt.mesh?.isMesh&&!xt.zone&&(xt.mesh.material=Nt?y[xt.type]:P[xt.type]);lt.material=Nt?y[3]:P[3];for(let xt=0;xt<ut.length;xt++)ut[xt].material=Nt?y[xt]:P[xt];y.forEach((xt,Mt)=>{for(let Bt of[xt,P[Mt]])Bt.userData.texture||(Bt.userData.texture=Bt.map),Bt.map=gt?Bt.userData.texture:null,Bt.color.set(gt?"#ffffff":p[Mt][1]),Bt.needsUpdate=!0}),g=$?.21+O*.067:0,it.metalness=$?.95:.1,it.roughness=$?.13:.46,s.visible=x>=2,m(f)}return{boxes:V,floors:q,probe:mt,display:ut,visual:E,shadow:Xt,setTimeOfDay:m,centerShadows:_,get hillSeed(){return ee},setHillSeed:L,bakeLightmap:N,mapMaterial:(x,R)=>R>=4?y[x]:P[x],builtObjects:[...V.map(x=>x.mesh).filter(x=>x?.isObject3D),mt,...X],materials:[...y,...P],focus(x,R,O){D.value=x?R*.75:0,w.value=.07+O*.058}}}function jp(n,t,e){let i=new fn({color:16777215,vertexColors:!0,flatShading:!0}),s=new fe(.16,.25,3.15,9,12),r=s.attributes.position,o=new kt,a=[];for(let Z=0;Z<r.count;Z++){let F=Math.round((r.getY(Z)+1.575)/3.15*12),et=Math.floor((Math.atan2(r.getX(Z),r.getZ(Z))+Math.PI)*1.43);o.setHSL(.084+F*.002,.35,.35+F%3*.032+et%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new zt(a,3));let l=new Qe;l.position.set(Nu.x,0,Nu.z),l.rotation.z=-.14,n.add(l);let c=new ht(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function h(Z,F,et=.85){let Ct=Z.getWorldPosition(new b),St=Z.getWorldQuaternion(new ue);t.push({half:F,min:F.clone().negate(),position:Ct,quaternion:St,mesh:{position:Ct,quaternion:St},shape:Or(F),friction:et,gravity:1})}for(let Z=0;Z<4;Z++){let F=new Ce;F.position.y=(Z+.5)*3.15/4,l.add(F);let et=.237-Z*.022;h(F,new b(et,.398,et))}let u=[],d=[],f=3.14;function m(Z,F,et,Ct){u.push(...Z,...F,...et),o.setHSL(.25+Ct*.043,.54,.28+Ct*.17);for(let St=0;St<3;St++)d.push(o.r,o.g,o.b)}for(let Z=0;Z<10;Z++){let Ct=function(St,J){let st=St*et;return[Math.cos(F)*st-Math.sin(F)*J,f+Math.sin(St*Math.PI)*.38-St*St*.54+Z%3*.055,Math.sin(F)*st+Math.cos(F)*J]},F=Z*2.39996,et=1.35+Z%4*.2;for(let St=0;St<7;St++){let J=St/7,st=(St+1)/7,At=.285*Math.sin(Math.PI*J)**.7,Lt=.285*Math.sin(Math.PI*st)**.7;for(let Pt of[-1,1]){let Ht=Ct(J,At*Pt),ee=Ct(st,Lt*Pt);Ht[1]-=.065,ee[1]-=.065,m(Ct(J,0),Ht,ee,.31+St%4*.14),m(Ct(J,0),ee,Ct(st,0),.47+Z%3*.16)}}}let _=new re;_.setAttribute("position",new zt(u,3)),_.setAttribute("color",new zt(d,3)),_.computeVertexNormals();let g=new ht(_,new fn({vertexColors:!0,side:Ye,flatShading:!0}));g.castShadow=!0,l.add(g);let p=new en({color:"#956238",roughness:.92,flatShading:!0}),S=[];for(let Z=0;Z<5;Z++){let F=Z*Math.PI*2/5,et=new ht(new Fn(.124,1),p);et.position.set(Math.cos(F)*(.25+Z%2*.1),2.88+Z%3*.06,Math.sin(F)*(.25+Z%2*.1)),et.scale.set(.91,1.16,.91),et.castShadow=!0,l.add(et),S.push(et)}l.updateMatrixWorld(!0);let M=[],y=[],C=new fn({color:"#485d5d",flatShading:!0});function A([Z,F],et,Ct){let St=new ht(new qt(.095,.68,.11),C);St.position.set(Z,.34,F+.46),St.castShadow=St.receiveShadow=!0,n.add(St),h(St,new b(.0475,.34,.055));let J=new Qe;J.position.set(Z,.85,F+.4),J.rotation.x=-.35,n.add(J);let st=new ht(new qt(.64,.36,.055),new fn({color:"#182831"}));J.add(st);let At=document.createElement("canvas");At.width=512,At.height=96;let Lt=At.getContext("2d"),Pt=new mi(At);Pt.colorSpace=me;let Ht=new ht(new dn(.61,.095),new We({map:Pt}));Ht.position.set(0,.116,.03),J.add(Ht);let ee=.592/Ct.length,L=Ct.map(([rt,nt],it)=>{let mt=new ht(new qt(ee-.012,.155,.04),new fn({color:"#478086"}));mt.position.set(-.296+ee*(it+.5),-.045,.046),J.add(mt),M.push(mt),mt.userData.touchWidth=ee-.012;let ut=document.createElement("canvas");ut.width=208,ut.height=172;let Tt=new mi(ut);Tt.colorSpace=me;let Yt=new ht(new dn(ee-.017,.139),new We({map:Tt}));Yt.position.z=.0205,mt.add(Yt);let Xt=-1/0;return mt.userData.action=()=>{let E=performance.now();E-Xt<250||(Xt=E,nt(),P(),mt.position.z=.036,setTimeout(()=>{mt.position.z=.046},115))},{label:rt,context:ut.getContext("2d"),texture:Tt}});function lt(){Lt.fillStyle="#182831",Lt.fillRect(0,0,512,96),Lt.fillStyle="#ffe1a0",Lt.font="bold 38px system-ui",Lt.fillText(et,17,62,478);for(let rt of L){let nt=rt.context;nt.fillStyle="#386269",nt.fillRect(0,0,208,172),nt.fillStyle="#fff2d5",nt.textAlign="center",nt.font="bold 27px system-ui";let it=(typeof rt.label=="function"?rt.label():rt.label).split("|");it.forEach((mt,ut)=>nt.fillText(mt,104,(it.length>1?68:97)+ut*37,188)),rt.texture.needsUpdate=!0}Pt.needsUpdate=!0}y.push(lt)}function P(){for(let Z of y)Z()}A(kr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>e.spawn(0,Vr[0])],["Boule",()=>e.spawn(1,Vr[0])],["T\xE9tra\xE8dre",()=>e.spawn(2,Vr[0])],["Vider",e.clear]]),A(kr.largeObjects,"GROS OBJETS",[["Rectangle",()=>e.spawn(4,Vr[1])],["Sph\xE8re",()=>e.spawn(5,Vr[1])]]),A(kr.rendering,"RENDU",[[()=>"Qualit\xE9|"+e.quality(),e.qualityNext],[()=>"R\xE9solution XR|"+e.resolution(),e.resolutionNext],[()=>"Textures|"+e.textureSize(),e.textureNext]]),A(kr.course,"PARCOURS",[["Retour|d\xE9part",e.resetPlayer],["Remettre|objets",e.resetObjects],["Hitboxes|Low / High",e.hitbox],["Appuis|On / Off",e.movement]]),A(kr.coconuts,"COCOTIER",[["Remettre|les cocos",e.resetTree],["Vider|les objets",e.clear]]),P();let D=new Qe,{x:w,y:v,z:I}=Fu;D.position.set(w,v,I),n.add(D);let N=["#e2ad5c","#ca664b","#f5e5bd"];for(let Z=0;Z<3;Z++){let F=[.9,.58,.27][Z],et=new ht(new tn(F,20),new fn({color:N[Z],side:Ye}));et.position.z=Z*.012,D.add(et)}let V=new ht(new qt(.14,1.5,.14),C);V.position.set(0,.75-v,-.11),D.add(V);let X=0,G=document.createElement("canvas");G.width=256,G.height=64;let q=G.getContext("2d"),tt=new mi(G);tt.colorSpace=me;let W=new ht(new dn(1.4,.35),new We({map:tt,side:Ye}));W.position.set(0,2.64-v,.02),D.add(W);function H(){q.fillStyle="#182831",q.fillRect(0,0,256,64),q.textAlign="center",q.font="bold 28px system-ui",q.fillStyle="#fff0ce",q.fillText("CIBLE  \xB7  "+X,128,42),tt.needsUpdate=!0}function ot(Z){for(let F of Z){if(!F.beforePhysics||F.owner||F.frozen||!F.mesh.visible)continue;let et=F.beforePhysics,Ct=F.mesh.position;if(et.z<=I||Ct.z>I||F.velocity.z>=-1)continue;let St=(et.z-I)/(et.z-Ct.z),J=Math.hypot(Vt.lerp(et.x,Ct.x,St)-w,Vt.lerp(et.y,Ct.y,St)-v);J<=.9+F.radius*.45&&(X+=J<.27?3:J<.58?2:1,H())}}return H(),{targets:M,coconuts:S,redraw:P,updateTarget:ot,score:()=>X,setScore(Z){X=Z,H()}}}function Fc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new re,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Kp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=Kp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Kp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Bc=0,RM=1,PM=new b,$p=new Yo,Ou=new hn,Qp=new b,Oc=new Sn,zc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new kc,this.unassigned=new kc,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.vertices.push(new Bu(t[e]));this._compute()}return this}setFromObject(t){let e=[];return t.updateMatrixWorld(!0),t.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new b;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){let e=this.faces;for(let i=0,s=e.length;i<s;i++)if(e[i].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,PM)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}_removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){let e=t.outside,i=t.outside;for(;i.next!==null&&i.next.face===t;)i=i.next;return this.assigned.removeSubList(e,i),e.prev=i.next=null,t.outside=null,e}}_deleteFaceVertices(t,e){let i=this._removeAllVerticesFromFace(t);if(i!==void 0)if(e===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;e.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{let i=e.next,s=this.tolerance,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.mark===Bc){let l=a.distanceToPoint(e.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(e,r),e=i}while(e!==null)}return this}_computeExtremes(){let t=new b,e=new b,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:i,max:s}}_computeInitialHull(){let t=this.vertices,e=this._computeExtremes(),i=e.min,s=e.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,h;r=0,$p.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l){$p.closestPointToPoint(m.point,!0,Qp);let _=Qp.distanceToSquared(m.point);_>r&&(r=_,c=m)}}r=-1,Ou.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c){let _=Math.abs(Ou.distanceToPoint(m.point));_>r&&(r=_,h=m)}}let u=[];if(Ou.distanceToPoint(h.point)<0){u.push(ri.create(a,l,c),ri.create(h,l,a),ri.create(h,c,l),ri.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(ri.create(a,c,l),ri.create(h,a,l),ri.create(h,l,c),ri.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=t.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let _=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,_=this.faces[g])}_!==null&&this._addVertexToFace(m,_)}}return this}_reindexFaces(){let t=[];for(let e=0;e<this.faces.length;e++){let i=this.faces[e];i.mark===Bc&&t.push(i)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===i);return t}}_computeHorizon(t,e,i,s){this._deleteFaceVertices(i),i.mark=RM;let r;e===null?r=e=i.getEdge(0):r=e.next;do{let o=r.twin,a=o.face;a.mark===Bc&&(a.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,o,a,s):s.push(r)),r=r.next}while(r!==e);return this}_addAdjoiningFace(t,e){let i=ri.create(t,e.tail(),e.head());return this.faces.push(i),i.getEdge(-1).setTwin(e.twin),i.getEdge(0)}_addNewFaces(t,e){this.newFaces=[];let i=null,s=null;for(let r=0;r<e.length;r++){let o=e[r],a=this._addAdjoiningFace(t,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(t){let e=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,e),this._addNewFaces(t,e),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}},ri=class n{constructor(){this.normal=new b,this.midpoint=new b,this.area=0,this.constant=0,this.outside=null,this.mark=Bc,this.edge=null}static create(t,e,i){let s=new n,r=new oa(t,s),o=new oa(e,s),a=new oa(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){let t=this.edge.tail(),e=this.edge.head(),i=this.edge.next.head();return Oc.set(t.point,e.point,i.point),Oc.getNormal(this.normal),Oc.getMidpoint(this.midpoint),this.area=Oc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}},oa=class{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}},Bu=class{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}},kc=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}};var Is=class extends re{constructor(t=[]){super();let e=[],i=[],r=new zc().setFromPoints(t).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;e.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new zt(e,3)),this.setAttribute("normal",new zt(i,3))}};var Cn=Math.PI*2,Vc=.84,Di=128;function Ki(n){let t=new Uint8Array(Di*Di*4);for(let i=0;i<Di;i++)for(let s=0;s<Di;s++){let r=(s+.5)/Di,o=(i+.5)/Di,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Vc,1),Math.min(o/Vc,1),s,i),l=(s+i*Di)*4;for(let c=0;c<3;c++)t[l+c]=Vt.clamp(Math.round(a[c]),0,255);t[l+3]=255}let e=new fi(t,Di,Di);return e.colorSpace=me,e.generateMipmaps=!0,e.minFilter=En,e.magFilter=sn,e.needsUpdate=!0,e}function Ls(n,t){let e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Qt(n,t,e=!1){let i=n.index?n.toNonIndexed():n,s=new kt(t),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),e?r.setXY(l,r.getX(l)*Vc,r.getY(l)*Vc):r.setXY(l,.95,.95);return i.setAttribute("color",new Se(a,3)),i}function $i(n,t,e,i,s,r,o,a=0){return{id:n,name:t,collisionGeo:i,mass:e,geo:Fc(s),material:new en({vertexColors:!0,map:r,roughness:o,metalness:a})}}function tm(n,t,e){let i=n/2,s=t/2,r=new xs;return r.moveTo(-i+e,-s),r.lineTo(i-e,-s),r.quadraticCurveTo(i,-s,i,-s+e),r.lineTo(i,s-e),r.quadraticCurveTo(i,s,i-e,s),r.lineTo(-i+e,s),r.quadraticCurveTo(-i,s,-i,s-e),r.lineTo(-i,-s+e),r.quadraticCurveTo(-i,-s,-i+e,-s),r}function Ji(n,t,e,i,s){return new Vo(tm(n,t,i),{depth:e,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-e/2)}function ji(n,t,e=i=>i){let i=[],s=[],r=[];for(let h=0;h<n.length;h++){let[u,d]=n[h];for(let f=0;f<=t;f++){let m=Cn*f/t,_=e(u,d,m,h);if(i.push(_*Math.sin(m),d,_*Math.cos(m)),s.push(f/t,h/(n.length-1)),h===n.length-1||f===t)continue;let g=h*(t+1)+f,p=g+t+1;u>0&&r.push(g,g+1,p),n[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new re;o.setAttribute("position",new zt(i,3)),o.setAttribute("uv",new zt(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new b,c=new b;for(let h=0;h<n.length;h++){let u=h*(t+1),d=u+t;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function aa(n,t){let e=[];for(let[i,s]of n){if(i===0){e.push(new b(0,s,0));continue}for(let r=0;r<t;r++){let o=Cn*r/t;e.push(new b(i*Math.sin(o),s,i*Math.cos(o)))}}return new Is(e)}function IM(){let e=new Go(tm(.098,.185,.008),3).translate(0,-.001,.0116),i=e.attributes.position;for(let l=0;l<i.count;l++){let c=Vt.clamp(i.getX(l)/.098+.5,0,1),h=Vt.clamp((i.getY(l)+.001)/.185+.5,0,1);e.attributes.uv.setXY(l,c,h)}let s=Ki((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*Cn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[Qt(Ji(.106,.207,.013,.011,.0019),8425890),Qt(Ji(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),Qt(Ji(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),Qt(e,16777215,!0),Qt(Ji(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),Qt(new qt(.0036,.024,.004).translate(.055,.029,0),11714250),Qt(new qt(.0036,.015,.004).translate(-.055,.032,0),11385285),Qt(new qt(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(Qt(new fe(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(Qt(new tn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(Qt(new tn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Is([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new b(c,h,l))));return $i("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function LM(){let t=[-.165,-.055,.055,.165],e=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=ji(e,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...t.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Ki((a,l,c,h)=>{let u=Cn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...t.map(S=>Math.exp(-(((d-S+.035*Math.cos(u))/.009)**2)))),_=f**3*m,g=Ls(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*_+p,76+24*f+70*_+p,24+11*f+52*_+p*.8]}),o=aa([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return $i("bread","Baguette de pain",.27,o,[Qt(s,16777215,!0)],r,.9)}function DM(){let n=Ki((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*Ls(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),t=ji([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),e=ji([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[Qt(t,16777215,!0),Qt(e,11056059),Qt(new fe(.067,.067,.124,10).rotateX(Math.PI/2),9346214),Qt(new fe(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Cn*r/5;i.push(Qt(new qt(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=aa([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return $i("wheel","Roue",1.8,s,i,n,.64,.23)}function UM(){let n=Ki((r,o,a,l)=>{let c=Ls(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(Cn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),t=ji([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),e=new Mn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Cn*l/5;return new b(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new b(.166,-.027,.01),new b(.166,.053,-.01));let s=new Is(i);return $i("cup","Tasse",.39,s,[Qt(t,16777215,!0),Qt(e,15785922)],n,.37)}function NM(){let n=ji([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),t=Ki((s,r,o,a)=>{let l=9*Ls(o,a),c=11*Math.cos(s*Cn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*Cn*48+s*Cn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*Cn*4);return[h,h*1.13,h*1.24]}),e=[Qt(n,16777215,!0),Qt(new Sr(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),Qt(new tn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),Qt(new tn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),Qt(new fe(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),Qt(new tn(.008,12).translate(0,.035,.0336),15633202)],i=aa([[.033,-.143],[.054,.133]],6);return $i("flashlight","Lampe torche",.31,i,e,t,.46,.28)}function FM(){let n=ji([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),t=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],e=Ki((r,o,a,l)=>{let c=10*Ls(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(Cn*r*2));if(t[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(Cn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),i=[Qt(n,16777215,!0),Qt(new tn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),Qt(new Sr(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),Qt(new tn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=aa([[.069,-.112],[.069,.109]],6);return $i("soda","Canette de soda",.35,s,i,e,.42,.27)}function OM(){let n=ji([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),t=Ki((s,r,o,a)=>{let l=15*Ls(o,a),c=8*Math.cos(s*Cn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),e=[Qt(n,16777215,!0),Qt(Ji(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),Qt(new tn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=aa([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return $i("cone","C\xF4ne de chantier",.58,i,e,t,.78)}function BM(){let n=Ki((s,r,o,a)=>{let l=8*Ls(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),t=ji([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),e=[Qt(Ji(.138,.22,.061,.016,.004),14788675),Qt(Ji(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),Qt(new dn(.106,.174).translate(0,-.004,.0395),16777215,!0),Qt(t,2502456),Qt(new fe(.014,.017,.016,10).translate(.04,.117,.001),2503482),Qt(new qt(.008,.047,.027).translate(-.072,.014,-.002),3028798),Qt(new qt(.006,.02,.019).translate(-.072,-.043,-.002),3950414),Qt(new tn(.004,8).translate(.04,.066,.0397),15817792),Qt(new tn(.004,8).translate(-.04,.066,.0397),7903100),Qt(Ji(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new b(s,l,o),new b(r,l,o),new b(r,l,a),new b(s,l,a)]);return $i("radio","Talkie-walkie",.43,new Is(i),e,n,.61,.08)}function em(){return[IM(),LM(),DM(),UM(),NM(),FM(),OM(),BM()]}var zM=[0,1,2,3,4,5,7,8,9,10];function nm(n){qp.forEach(({x:t,z:e},i)=>n(zM[i],new b(t,.8,e)))}function im(){let n=[["Cube",new qt(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Fn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ho(.29),"#d8ae53",0,1],["Brique",new qt(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new qt(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Fn(.6,4),"#dbab58",.6,3.7],["Coco",new Fn(.124,1),"#956238",.124,.44]].map(([t,e,i,s,r])=>({name:t,geo:e,mass:r,shape:sa(e,s),material:new en({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Or(e.computeBoundingBox()??e.boundingBox.getSize(new b).multiplyScalar(.5))}));for(let{collisionGeo:t,sphere:e=0,...i}of em()){let s=sa(t??i.geo,e);n.push({...i,shape:s,lowShape:s})}return n}var kM="gorilla-lab-models-v1",la=Object.freeze({models:12,parts:64,fileBytes:25e5,textureBytes:16e4}),VM=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,GM=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant"}),rm=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),HM=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),WM=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,XM=/^#[a-f\d]{6}$/i;function sm(n,t){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||t}function zu(n,t,e,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Vt.clamp(n[s],e,i):t)}function ha(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>la.models||JSON.stringify(n).length>la.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let t=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!WM.test(i.id)||t.has(i.id)||!Array.isArray(i.parts)||i.parts.length>la.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return t.add(i.id),{id:i.id,name:sm(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(HM).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),parts:i.parts.map((s,r)=>({name:sm(s?.name,`Pi\xE8ce ${r+1}`),shape:Object.hasOwn(GM,s?.shape)?s.shape:"box",position:zu(s?.position,0,-3,3),rotation:zu(s?.rotation,0,-360,360),scale:zu(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&XM.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(rm,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=la.textureBytes&&VM.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&t.has(n.avatarId)?n.avatarId:null}}function om(n){try{let t=(n??globalThis.localStorage)?.getItem(kM);if(t&&t.length<=la.fileBytes)return ha(JSON.parse(t))}catch{}return{version:1,models:[],avatarId:null}}function qM(n){switch(n){case"sphere":return new On(.5,20,12);case"cylinder":return new fe(.5,.5,1,20);case"cone":return new Ci(.5,1,20);case"torus":return new Mn(.365,.135,8,24);case"capsule":return new gs(.28,.44,6,16);case"diamond":return new Wn(.5);default:return new qt(1,1,1)}}var am=Object.keys(rm),Gr=64,ca=4,lm=2,_i;function YM(n,t,e){let i=Math.sin(t*127.1+e*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return t%16<2||e%16<2?135:255;case"stripes":return(t+e)%16<6?155:255;case"wood":return 204+24*Math.sin(e*.75+Math.sin(t*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function cm(){if(_i)return _i;let n=Gr*ca,t=Gr*lm,e=new Uint8Array(n*t*4);for(let i=0;i<t;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Gr)*ca+Math.floor(s/Gr),o=YM(am[r],s%Gr,i%Gr),a=(i*n+s)*4;e[a]=e[a+1]=e[a+2]=o,e[a+3]=255}return _i=new fi(e,n,t),_i.colorSpace=me,_i.magFilter=sn,_i.minFilter=En,_i.generateMipmaps=!0,_i.needsUpdate=!0,_i}function hm(n){let t=qM(n.shape),e=t.index?t.toNonIndexed():t;e!==t&&t.dispose();let i=n.rotation.map(Vt.degToRad);e.scale(...n.scale),e.rotateX(i[0]),e.rotateY(i[1]),e.rotateZ(i[2]),e.translate(...n.position);let s=new kt(n.color),r=e.attributes.position.count,o=new Float32Array(r*3),a=e.attributes.uv,l=am.indexOf(n.surface),c=l%ca,h=Math.floor(l/ca);for(let u=0;u<r;u++)s.toArray(o,u*3),n.texture||a.setXY(u,(c+.05+a.getX(u)*.9)/ca,(h+.05+a.getY(u)*.9)/lm);return e.setAttribute("color",new Se(o,3)),e}function ZM(n){if(!n?.texture)return new en({vertexColors:!0,map:cm(),roughness:.68});let t=new Ri().load(n.texture);return t.colorSpace=me,t.wrapS=t.wrapT=Gn,new en({vertexColors:!0,map:t,roughness:.68})}function Gc(n){return n?.parts?.some(t=>t.texture)?n.parts.map(ZM):new en({vertexColors:!0,map:cm(),roughness:.68})}function Hc(n){for(let t of Array.isArray(n)?n:[n]){if(!t)return;t.map&&t.map!==_i&&t.map.dispose(),t.dispose()}}function JM(n){let t=n.map(hm),e=Fc(t,n.some(i=>i.texture));return t.forEach(i=>i.dispose()),e.center(),e.computeBoundingBox(),e}function Wc(n){let t=JM(n.parts),e=t.boundingBox.getSize(new b);return t.scale(1/Math.max(e.x,1e-5),1/Math.max(e.y,1e-5),1/Math.max(e.z,1e-5)),t.computeBoundingBox(),t}function um(n){let t=new Ze;for(let e of n.parts){let i=hm(e);i.computeBoundingBox(),t.union(i.boundingBox),i.dispose()}return t.getSize(new b)}var pm=Object.freeze([8,16,32,48,64,96,128]),mm=16,qc=24,dm=new WeakMap,Qi=Vt.clamp,Ds=Vt.lerp,ku=n=>n*n*(3-2*n);function qn(n,t,e,i){return Number.isFinite(n)?Qi(n,t,e):i}function fm(n){if(!n)return null;let t=ha({version:1,models:[n]});return t.models[0]?.parts.length?t.models[0]:null}var jM=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Hr(n={}){let t=pm.includes(n?.detail)?n.detail:mm,e=n?.heights;return{detail:t,seed:Math.round(qn(n?.seed,0,2147483647,1)),amplitude:qn(n?.amplitude,0,12,0),frequency:qn(n?.frequency,.015,2,.12),octaves:Math.round(qn(n?.octaves,1,5,3)),roughness:qn(n?.roughness,.15,.95,.42),ridge:qn(n?.ridge,0,1,0),edgeFade:qn(n?.edgeFade,0,1,0),grass:qn(n?.grass,0,1,0),shrub:qn(n?.shrub,0,1,0),grassSize:qn(n?.grassSize,.1,5,1),shrubSize:qn(n?.shrubSize,.1,5,1),grassModel:fm(n?.grassModel),shrubModel:fm(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&jM.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(e)&&e.length===(t+1)**2?Array.from(e,i=>qn(i,-qc,qc,0)):null}}function gm(n,t,e,i){let s=Qi(e,0,t),r=Qi(i,0,t),o=Math.min(t-1,Math.floor(s)),a=Math.min(t-1,Math.floor(r)),l=s-o,c=r-a,h=t+1,u=a*h+o,d=n[u],f=n[u+1],m=n[u+h],_=n[u+h+1];return l+c<=1?d+(f-d)*l+(m-d)*c:_+(m-_)*(1-l)+(f-_)*(1-c)}function xm(n,t){let e=pm.includes(t)?t:mm;if(e===n.detail)return n;if(!n.heights)return{...n,detail:e,heights:null};let i=e+1,s=n.detail/e,r=Array.from({length:i**2},(o,a)=>gm(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:e,heights:r}}function Ui(n,t,e){let i=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Xc(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=ku(n-i),o=ku(t-s),a=Ds(Ui(i,s,e),Ui(i+1,s,e),r),l=Ds(Ui(i,s+1,e),Ui(i+1,s+1,e),r);return 2*Ds(a,l,o)-1}function Vu(n){let{w:t,d:e,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d}=i,f=dm.get(n),m=f&&f.w===t&&f.d===e&&f.detail===s&&f.seed===r&&f.amplitude===o&&f.frequency===a&&f.octaves===l&&f.roughness===c&&f.ridge===h&&f.edgeFade===u;if(m&&f.heights===d)return f;let _=s+1,g=m?f.procedural:new Float64Array(_**2);if(!m&&o)for(let M=0;M<=s;M++)for(let y=0;y<=s;y++){let C=(y/s-.5)*t*a,A=(M/s-.5)*e*a,P=0,D=1,w=0;for(let N=0;N<l;N++){let V=Xc(C*2**N,A*2**N,r+N*13);P+=D*Ds(V,1-2*Math.abs(V),h),w+=D,D*=c}let v=u?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(y/s-.5))*2,(.5-Math.abs(M/s-.5))*2)),u*2):1,I=l===3&&c===.42&&h===0&&u===0;g[M*_+y]=I?o*(.62*Xc(C,A,r)+.26*Xc(C*2.03,A*2.03,r+13)+.12*Xc(C*4.13,A*4.13,r+37)):o*P/w*v}let p=d?g.map((M,y)=>M+d[y]):g,S={w:t,d:e,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:h,edgeFade:u,heights:d,procedural:g,surface:p};return dm.set(n,S),S}function _m(n,t,e){let{detail:i,w:s,d:r,surface:o}=n;return gm(o,i,(t/s+.5)*i,(e/r+.5)*i)}function KM(n,t,e){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,t-1),a=Math.min(i,t+1),l=Math.max(0,e-1),c=Math.min(i,e+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===t&&d===e||(h+=s[d*r+f],u++);return h/u}function ym(n,t,e,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![t,e,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Vu(n),{detail:l,w:c,d:h,surface:u,procedural:d}=a,f=t-n.x,m=e-n.z,_=Qi(f,-c/2,c/2),g=Qi(m,-h/2,h/2);if((f-_)**2+(m-g)**2>=s**2)return!1;let p=(f/c+.5)*l,S=(m/h+.5)*l,M=c/l,y=h/l,C=Math.max(0,Math.ceil(p-s/M)),A=Math.min(l,Math.floor(p+s/M)),P=Math.max(0,Math.ceil(S-s/y)),D=Math.min(l,Math.floor(S+s/y)),w=Number.isFinite(o)?o-n.y:_m(a,f,m),v=l+1,I=a.heights?.slice()??new Array(v**2).fill(0),N=!1,V=!1;function X(G,q,tt){N=!0;let W=q*v+G,H=I[W],ot;if(i==="raise"||i==="lower")ot=H+(i==="raise"?1:-1)*r*tt;else{let Z=i==="flatten"?w:KM(a,G,q);ot=Ds(u[W],Z,Math.min(1,r)*tt)-d[W]}ot=Qi(ot,-qc,qc),!(Math.abs(ot-H)<1e-7)&&(I[W]=ot,V=!0)}for(let G=P;G<=D;G++)for(let q=C;q<=A;q++){let tt=Math.hypot((q-p)*M,(G-S)*y)/s;tt<1&&X(q,G,ku(1-tt))}if(!N){let G=Qi(p,0,l),q=Qi(S,0,l),tt=Math.min(l-1,Math.floor(G)),W=Math.min(l-1,Math.floor(q)),H=G-tt,ot=q-W,Z=H+ot<=1,F=Z?1-H-ot:H+ot-1,et=Z?H:1-ot,Ct=Z?ot:1-H;if(F>=Math.max(et,Ct)){let St=+!Z;X(tt+St,W+St,1)}else et>=Ct?X(tt+1,W,1):X(tt,W+1,1)}return V&&(n.terrain.heights=I),V}function Gu(n){let{w:t,d:e,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let d=0;d<=s;d++){let f=u*r+d;o[3*f]=(d/s-.5)*t,o[3*f+2]=(u/s-.5)*e,a[2*f]=d/s*t/2.6,a[2*f+1]=(1-u/s)*e/2.6,u<s&&d<s&&(l.set([f,f+r,f+1,f+r+1,f+1,f+r],c),c+=6)}let h=new re;return h.setAttribute("position",new Se(o,3).setUsage(na)),h.setAttribute("uv",new Se(a,2)),h.setIndex(new Se(l,1)),$M(h,n),h}function $M(n,t){let{surface:e}=Vu(t),{position:i}=n.attributes;for(let s=0;s<e.length;s++)i.setY(s,e[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function QM(){let n=[];for(let e=0;e<5;e++){let i=e*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+e%3*.07,a+r*.16)}let t=new re;return t.setAttribute("position",new zt(n,3)),t.setAttribute("uv",new zt(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),t.computeVertexNormals(),t}function tb(){return new Fn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var eb=[{name:"grass",geometry:QM,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:tb,perMetre:.17,max:48,salt:47,color:"#36583c"}];function vm(n){let t=new Qe;for(let{name:e,geometry:i,perMetre:s,max:r,salt:o,color:a}of eb){let l=n.terrain[e];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,n.w*n.d*s)*l)),h=n.terrain[e+"Model"],u=n.terrain[e+"Size"]??1,d,f;if(h){let g=e==="grass"?.42:.85;d=Wc(h),d.scale(g*u,g*u,g*u),d.translate(0,g*u/2,0),f=Gc(h)}else if(d=i(),d.scale(u,u,u),f=new fn({color:a,side:e==="grass"?Ye:Qn,flatShading:!0}),e==="grass"&&n.terrain.grassTexture){let g=new Ri().load(n.terrain.grassTexture);g.colorSpace=me,f.map=g,f.color.set("#ffffff"),f.userData.ownTexture=!0}let m=new Co(d,f,c);m.name=e,m.instanceMatrix.setUsage(na),m.userData.salt=o,m.receiveShadow=!0;let _=new kt;for(let g=0;g<c;g++){let p=Ds(.68,1.2,Ui(g,o,n.terrain.seed+4));m.setColorAt(g,_.setRGB(p,p,p))}t.add(m)}return nb(t,n),t}function nb(n,t){let e=Vu(t),i=new Ce;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=t.terrain;for(let a=0;a<s.count;a++){let l=(Ui(a,r,o)-.5)*.96*t.w,c=(Ui(a,r,o+1)-.5)*.96*t.d;i.position.set(l,_m(e,l,c),c),i.rotation.y=Ui(a,r,o+2)*2*Math.PI,i.scale.setScalar(Ds(.58,1.34,Ui(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Mm(n){if(n){for(let t of n.children)t.geometry.dispose(),t.material?.userData?.ownTexture&&t.material.map?.dispose(),Hc(t.material),t.dispose();n.clear(),n.removeFromParent()}}var Hu=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],bm=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Sm(n,t=bm[n]){n=Math.max(0,Math.min(Hu.length-1,n|0));let e=document.createElement("canvas");e.width=e.height=512;let i=e.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(t)?t:bm[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])i.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return e}var wm=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["grass","Fibres v\xE9g\xE9tales"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],Tm=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Am=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",ua=(n,t,e)=>Math.min(e,Math.max(t,n)),ib=(n,t)=>{n.toBlob(e=>{if(!e)return;let i=document.createElement("a"),s=URL.createObjectURL(e);i.href=s,i.download=t+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},Wu=(n,t)=>{for(let e of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(e,i),t(n),n.restore()};function sb(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0)/2**32}function Em(n,{pattern:t="grain",base:e="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Am(e),r.fillRect(0,0,o,o);let a=sb(s),l=ua(64/i,12,192),c=h=>{r.fillStyle=h>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(h)};if(["grain","soil","rock","grass","wood"].includes(t)){let h=t==="wood"?1400:t==="grass"?3700:t==="rock"?1900:4300;for(let u=0;u<h;u++){let d=a()*o,f=a()*o,m=t==="wood"?a()*45+5:t==="grass"?a()*2+1:t==="rock"?a()*20+2:a()*7+1,_=t==="grass"?a()*29+7:t==="wood"?a()*2+1:t==="rock"?a()*9+1:a()*5+1;c((a()>.47?1:-1)*(t==="soil"?.07+a()*.22:.05+a()*.19)),Wu(r,g=>g.fillRect(d,f,m,_))}}if(["tiles","brick","grid","woven","stripes","dots"].includes(t)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let h=Math.ceil(o/l);if(t==="dots"){c(.36);for(let u=0;u<h;u++)for(let d=0;d<h;d++)Wu(r,f=>{f.beginPath(),f.arc(d*l+l/2,u*l+l/2,ua(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(t==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let u=0;u<o;u+=l/2)r.fillRect(u,0,Math.max(2,l/10),o)}else if(t==="woven"){for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,u,o,Math.max(1,l/13));for(let u=0;u<o;u+=l/5)r.fillStyle=u%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(u,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let u=0;u<=o;u+=l)r.beginPath(),r.moveTo(0,u),r.lineTo(o,u),r.stroke();for(let u=0;u<o;u+=l)for(let d=0;d<=o;d+=l){let f=t==="brick"&&Math.floor(u/l)%2?l/2:0;t!=="brick"&&u>0||(r.beginPath(),r.moveTo(d+f,u),r.lineTo(d+f,u+l),r.stroke())}if(t==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let u=l/2;u<o;u+=l)r.beginPath(),r.moveTo(u,0),r.lineTo(u,o),r.stroke()}}}r.globalAlpha=1}var rb=`
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
`;function ob(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=rb,document.head.append(n)}async function ab(n,t){if(!n)return;let e=new Image;e.decoding="async",await new Promise((s,r)=>{e.onload=s,e.onerror=r,e.src=n});let i=t.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(e,0,0,512,512)}function Xu({initial:n=null,tint:t="#687a86",name:e="Texture",pattern:i="grain",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){ob();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=F=>o.querySelector(F),l=a(".texture-canvas"),c=a(".texture-tile"),h=Tm(),u=Tm(),d={pattern:wm.some(([F])=>F===i)?i:"grain",base:Am(t),scale:1,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d"),m=h.getContext("2d"),_=u.getContext("2d"),g=[],p=[],S=!1,M=!1,y=null,C="paint",A=null;a("#studio-title").textContent=e+" / SURFACE LAB",a("[data-field=pattern]").replaceChildren(...wm.map(([F,et])=>new Option(et,F))),a("[data-field=base]").value=d.base,a("[data-field=pattern]").value=d.pattern;for(let F of["pattern","base","scale","ink","size","opacity","hardness"])a("[data-field="+F+"]").addEventListener("input",et=>{d[F]=["scale","size","opacity","hardness"].includes(F)?Number(et.target.value):et.target.value});let P=F=>{a("[data-status]").textContent=F},D=()=>{f.clearRect(0,0,512,512),f.drawImage(h,0,0),f.drawImage(u,0,0);let F=c.getContext("2d");F.clearRect(0,0,256,128);for(let et=0;et<2;et++)for(let Ct=0;Ct<4;Ct++)F.drawImage(l,Ct*64,et*64,64,64)},w=()=>({base:m.getImageData(0,0,512,512),top:_.getImageData(0,0,512,512)}),v=F=>{m.putImageData(F.base,0,0),_.putImageData(F.top,0,0),D()},I=()=>{g.push(w()),g.length>16&&g.shift(),p.length=0,S=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},N=(F,et)=>{F.length&&(et.push(w()),v(F.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!p.length,S=!0)},V=()=>{S&&!confirm("Remplacer le motif et les coups de pinceau actuels ?")||(I(),Em(h,d),_.clearRect(0,0,512,512),D(),P("Motif r\xE9g\xE9n\xE9r\xE9. Ajoute des marques avec le pinceau."))},X=F=>{let et=l.getBoundingClientRect();return{x:(F.clientX-et.left)/et.width*512,y:(F.clientY-et.top)/et.height*512}},G=F=>{let et=d.size/2,Ct=d.opacity;Wu(_,St=>{St.save(),C==="erase"&&(St.globalCompositeOperation="destination-out"),St.globalAlpha=Ct;let J=ua(d.hardness,.05,1);if(C==="stamp")St.fillStyle=d.ink,St.translate(F.x,F.y),St.rotate(Math.PI/4),St.fillRect(-et*.8,-et*.8,et*1.6,et*1.6);else{let st=St.createRadialGradient(F.x,F.y,et*J*.85,F.x,F.y,et);if(C==="erase")st.addColorStop(0,"rgba(0,0,0,1)"),st.addColorStop(1,"rgba(0,0,0,0)");else{let At=d.ink.match(/[\da-f]{2}/gi).map(Lt=>parseInt(Lt,16)).join(",");st.addColorStop(0,"rgba("+At+",1)"),st.addColorStop(1,"rgba("+At+",0)")}St.fillStyle=st,St.beginPath(),St.arc(F.x,F.y,et,0,2*Math.PI),St.fill()}St.restore()})},q=(F,et)=>{let Ct=Math.hypot(et.x-F.x,et.y-F.y),St=Math.max(1,Math.ceil(Ct/Math.max(2,d.size*.18)));for(let J=1;J<=St;J++)G({x:F.x+(et.x-F.x)*J/St,y:F.y+(et.y-F.y)*J/St})},tt=F=>{let et=f.getImageData(Math.floor(ua(F.x,0,511)),Math.floor(ua(F.y,0,511)),1,1).data;d.ink="#"+[...et].slice(0,3).map(Ct=>Ct.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,P("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",F=>{if(F.button!==0||M)return;let et=X(F);if(C==="pick"){tt(et);return}F.preventDefault(),I(),M=!0,y=F.pointerId,A=et,l.setPointerCapture(F.pointerId),G(et),D()}),l.addEventListener("pointermove",F=>{if(!M||F.pointerId!==y)return;F.preventDefault();let et=X(F);C==="stamp"?G(et):q(A,et),A=et,D()});let W=F=>{F.pointerId===y&&(M=!1,y=null,A=null,l.hasPointerCapture(F.pointerId)&&l.releasePointerCapture(F.pointerId))};l.addEventListener("pointerup",W),l.addEventListener("pointercancel",W);for(let F of o.querySelectorAll("[data-tool]"))F.onclick=()=>{C=F.dataset.tool,o.querySelectorAll("[data-tool]").forEach(et=>et.setAttribute("aria-pressed",String(et===F)))};a("[data-cmd=generate]").onclick=V,a("[data-cmd=undo]").onclick=()=>N(g,p),a("[data-cmd=redo]").onclick=()=>N(p,g),a("[data-cmd=export]").onclick=()=>ib(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async F=>{let et=F.target.files?.[0];if(F.target.value="",!!et)try{if(!["image/png","image/jpeg","image/webp"].includes(et.type))throw Error("Image PNG / JPG / WebP uniquement.");if(et.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let Ct=await createImageBitmap(et);I(),m.clearRect(0,0,512,512),m.drawImage(Ct,0,0,512,512),Ct.close(),_.clearRect(0,0,512,512),D(),P("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(Ct){P(Ct.message)}});let H=F=>{!F&&S&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",ot,!0),o.remove())},ot=F=>{if(F.key==="Escape"){F.preventDefault(),H(!1);return}(F.ctrlKey||F.metaKey)&&!F.target.closest("input,select")&&F.key.toLowerCase()==="z"&&(F.preventDefault(),F.stopImmediatePropagation(),F.shiftKey?N(p,g):N(g,p))};window.addEventListener("keydown",ot,!0),a("[data-cmd=close]").onclick=()=>H(!1),a("[data-cmd=cancel]").onclick=()=>H(!1);let Z=()=>{for(let F of[512,384,256,192]){let et=document.createElement("canvas");et.width=et.height=F,et.getContext("2d").drawImage(l,0,0,F,F);for(let Ct of[.85,.72,.58]){let St=et.toDataURL("image/webp",Ct);if(St.length<=s)return St}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")};return a("[data-cmd=apply]").onclick=async()=>{let F=a("[data-cmd=apply]");F.disabled=!0;try{let et=Z();await r(et),S=!1,H(!0)}catch(et){P(et.message||"Impossible d\u2019appliquer la texture.")}finally{F.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Em(h,d),D(),n&&ab(n,h).then(D).catch(()=>P("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=pattern]").focus({preventScroll:!0}),{close:()=>H(!1)}}var Us=new bs,mn=new b,ts=new b,Ne=new ue,Cm={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},qu={type:"change"},Rm={type:"mouseDown",mode:null},Pm={type:"mouseUp",mode:null},Im={type:"objectChange"},Kc=class extends Ss{constructor(t,e=null){super(void 0,e);let i=new Zu(this);this._root=i;let s=new Ju;this._gizmo=s,i.add(s);let r=new ju;this._plane=r,i.add(r);let o=this;function a(M,y){let C=y;Object.defineProperty(o,M,{get:function(){return C!==void 0?C:y},set:function(A){C!==A&&(C=A,r[M]=A,s[M]=A,o.dispatchEvent({type:M+"-changed",value:A}),o.dispatchEvent(qu))}}),o[M]=y,r[M]=y,s[M]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new b,c=new b,h=new ue,u=new ue,d=new b,f=new ue,m=new b,_=new b,g=new b,p=0,S=new b;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",S),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new ue,this._parentQuaternionInv=new ue,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new ue,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new ue,this._scaleStart=new b,this._getPointer=lb.bind(this),this._onPointerDown=hb.bind(this),this._onPointerHover=cb.bind(this),this._onPointerMove=ub.bind(this),this._onPointerUp=db.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Us.setFromCamera(t,this.camera);let e=Yu(this._gizmo.picker[this.mode],Us);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Us.setFromCamera(t,this.camera);let e=Yu(this._plane,Us,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Rm.mode=this.mode,this.dispatchEvent(Rm)}}pointerMove(t){let e=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Us.setFromCamera(t,this.camera);let o=Yu(this._plane,Us,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Ne.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(mn.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(mn.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ts.set(a,a,a)}else mn.copy(this.pointStart),ts.copy(this.pointEnd),mn.applyQuaternion(this._worldQuaternionInv),ts.applyQuaternion(this._worldQuaternionInv),ts.divide(mn),e.search("X")===-1&&(ts.x=1),e.search("Y")===-1&&(ts.y=1),e.search("Z")===-1&&(ts.z=1);s.scale.copy(this._scaleStart).multiply(ts),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(mn.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(mn.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Cm[e]),mn.copy(Cm[e]),r==="local"&&mn.applyQuaternion(this.worldQuaternion),mn.cross(this.eye),mn.length()===0?l=!0:this.rotationAngle=this._offset.dot(mn.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Ne.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Ne.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(qu),this.dispatchEvent(Im)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Pm.mode=this.mode,this.dispatchEvent(Pm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(qu),this.dispatchEvent(Im),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Us}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function lb(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function cb(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function hb(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function ub(n){this.enabled&&this.pointerMove(this._getPointer(n))}function db(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Yu(n,t,e){let i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}var Yc=new qe,we=new b(0,1,0),Lm=new b(0,0,0),Dm=new ae,Zc=new ue,jc=new ue,yi=new b,Um=new ae,pa=new b(1,0,0),Ns=new b(0,1,0),ma=new b(0,0,1),Jc=new b,da=new b,fa=new b,Zu=class extends Ce{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){let e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}},Ju=class extends Ce{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let t=new We({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new pi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;let s=e.clone();s.opacity=.5;let r=t.clone();r.color.setHex(16711680);let o=t.clone();o.color.setHex(65280);let a=t.clone();a.color.setHex(255);let l=t.clone();l.color.setHex(16711680),l.opacity=.5;let c=t.clone();c.color.setHex(65280),c.opacity=.5;let h=t.clone();h.color.setHex(255),h.opacity=.5;let u=t.clone();u.opacity=.25;let d=t.clone();d.color.setHex(16776960),d.opacity=.25;let f=t.clone();f.color.setHex(16776960);let m=t.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};let _=new fe(0,.04,.1,12);_.translate(0,.05,0);let g=new qt(.08,.08,.08);g.translate(0,.04,0);let p=new re;p.setAttribute("position",new zt([0,0,0,1,0,0],3));let S=new fe(.0075,.0075,.5,3);S.translate(0,.25,0);function M(G,q){let tt=new Mn(G,.0075,3,64,q*Math.PI*2);return tt.rotateY(Math.PI/2),tt.rotateX(Math.PI/2),tt}function y(){let G=new re;return G.setAttribute("position",new zt([0,0,0,1,1,1],3)),G}let C={X:[[new ht(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ht(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ht(S,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ht(_,o),[0,.5,0]],[new ht(_,o),[0,-.5,0],[Math.PI,0,0]],[new ht(S,o)]],Z:[[new ht(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ht(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ht(S,a),null,[Math.PI/2,0,0]]],XYZ:[[new ht(new Wn(.1,0),u),[0,0,0]]],XY:[[new ht(new qt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ht(new qt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ht(new fe(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new fe(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new fe(.2,0,.6,4),i),[0,.3,0]],[new ht(new fe(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new fe(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ht(new fe(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ht(new Wn(.2,0),i)]],XY:[[new ht(new qt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ht(new qt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new ht(new Wn(.01,2),s),null,null,null,"helper"]],END:[[new ht(new Wn(.01,2),s),null,null,null,"helper"]],DELTA:[[new Tn(y(),s),null,null,null,"helper"]],X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new ht(M(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new ht(M(.5,.5),r)]],Y:[[new ht(M(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ht(M(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ht(M(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},v={XYZE:[[new ht(new On(.25,10,8),i)]],X:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ht(new Mn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ht(new Mn(.75,.1,2,24),i)]]},I={X:[[new ht(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new ht(S,r),[0,0,0],[0,0,-Math.PI/2]],[new ht(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ht(g,o),[0,.5,0]],[new ht(S,o)],[new ht(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ht(g,a),[0,0,.5],[Math.PI/2,0,0]],[new ht(S,a),[0,0,0],[Math.PI/2,0,0]],[new ht(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ht(new qt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ht(new qt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qt(.1,.1,.1),u)]]},N={X:[[new ht(new fe(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new fe(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new fe(.2,0,.6,4),i),[0,.3,0]],[new ht(new fe(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new fe(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ht(new fe(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ht(new qt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ht(new qt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new qt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new qt(.2,.2,.2),i),[0,0,0]]]},V={X:[[new Tn(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Tn(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Tn(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function X(G){let q=new Ce;for(let tt in G)for(let W=G[tt].length;W--;){let H=G[tt][W][0].clone(),ot=G[tt][W][1],Z=G[tt][W][2],F=G[tt][W][3],et=G[tt][W][4];H.name=tt,H.tag=et,ot&&H.position.set(ot[0],ot[1],ot[2]),Z&&H.rotation.set(Z[0],Z[1],Z[2]),F&&H.scale.set(F[0],F[1],F[2]),H.updateMatrix();let Ct=H.geometry.clone();Ct.applyMatrix4(H.matrix),H.geometry=Ct,H.renderOrder=1/0,H.position.set(0,0,0),H.rotation.set(0,0,0),H.scale.set(1,1,1),q.add(H)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=X(C)),this.add(this.gizmo.rotate=X(D)),this.add(this.gizmo.scale=X(I)),this.add(this.picker.translate=X(A)),this.add(this.picker.rotate=X(v)),this.add(this.picker.scale=X(N)),this.add(this.helper.translate=X(P)),this.add(this.helper.rotate=X(w)),this.add(this.helper.scale=X(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:jc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ne.setFromEuler(Yc.set(0,0,0)),o.quaternion.copy(i).multiply(Ne),Math.abs(we.copy(pa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ne.setFromEuler(Yc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Ne),Math.abs(we.copy(Ns).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ne.setFromEuler(Yc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Ne),Math.abs(we.copy(ma).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ne.setFromEuler(Yc.set(0,Math.PI/2,0)),we.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Dm.lookAt(Lm,we,Ns)),o.quaternion.multiply(Ne),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),mn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),mn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(mn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(we.copy(pa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(we.copy(Ns).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(we.copy(ma).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(we.copy(ma).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(we.copy(pa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(we.copy(Ns).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Zc.copy(i),we.copy(this.eye).applyQuaternion(Ne.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Dm.lookAt(this.eye,Lm,Ns)),o.name==="X"&&(Ne.setFromAxisAngle(pa,Math.atan2(-we.y,we.z)),Ne.multiplyQuaternions(Zc,Ne),o.quaternion.copy(Ne)),o.name==="Y"&&(Ne.setFromAxisAngle(Ns,Math.atan2(we.x,we.z)),Ne.multiplyQuaternions(Zc,Ne),o.quaternion.copy(Ne)),o.name==="Z"&&(Ne.setFromAxisAngle(ma,Math.atan2(we.y,we.x)),Ne.multiplyQuaternions(Zc,Ne),o.quaternion.copy(Ne))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}},ju=class extends ht{constructor(){super(new dn(1e5,1e5,2,2),new We({visible:!1,wireframe:!0,side:Ye,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Jc.copy(pa).applyQuaternion(e==="local"?this.worldQuaternion:jc),da.copy(Ns).applyQuaternion(e==="local"?this.worldQuaternion:jc),fa.copy(ma).applyQuaternion(e==="local"?this.worldQuaternion:jc),we.copy(da),this.mode){case"translate":case"scale":switch(this.axis){case"X":we.copy(this.eye).cross(Jc),yi.copy(Jc).cross(we);break;case"Y":we.copy(this.eye).cross(da),yi.copy(da).cross(we);break;case"Z":we.copy(this.eye).cross(fa),yi.copy(fa).cross(we);break;case"XY":yi.copy(fa);break;case"YZ":yi.copy(Jc);break;case"XZ":we.copy(fa),yi.copy(da);break;case"XYZ":case"E":yi.set(0,0,0);break}break;case"rotate":default:yi.set(0,0,0)}yi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Um.lookAt(mn.set(0,0,0),yi,we),this.quaternion.setFromRotationMatrix(Um)),super.updateMatrixWorld(t)}};function Nm(n,t,e=!1){if(e)return{x:n.x,y:n.y,z:n.z};let i=new b((t.w-n.w)/2,n.terrain?0:(t.h-n.h)/2,(t.d-n.d)/2);return i.applyEuler(new qe(Vt.degToRad(n.pitch),Vt.degToRad(n.yaw),Vt.degToRad(n.roll??0),"YXZ")),{x:n.x+i.x,y:n.y+i.y,z:n.z+i.z}}var Fm={type:"change"},$u={type:"start"},Bm={type:"end"},$c=new Hi,Om=new hn,fb=Math.cos(70*Vt.DEG2RAD),Ke=new b,Rn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ku=1e-6,Qc=class extends Ss{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new ue,this._lastTargetPosition=new b,this._quat=new ue().setFromUnitVectors(t.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tr,this._sphericalDelta=new Tr,this._scale=1,this._panOffset=new b,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new b,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mb.bind(this),this._onPointerDown=pb.bind(this),this._onPointerUp=gb.bind(this),this._onContextMenu=Sb.bind(this),this._onMouseWheel=yb.bind(this),this._onKeyDown=vb.bind(this),this._onTouchStart=Mb.bind(this),this._onTouchMove=bb.bind(this),this._onMouseDown=xb.bind(this),this._onMouseMove=_b.bind(this),this._interceptControlDown=wb.bind(this),this._interceptControlUp=Tb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fm),this.update(),this.state=Me.NONE}update(t=null){let e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ke.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<fb?this.object.lookAt(this.target):(Om.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(Om,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ku||this._lastTargetPosition.distanceToSquared(this.target)>Ku?(this.dispatchEvent(Fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bm),this.state=Me.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Me.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent($u)}function _b(n){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(n.preventDefault(),this.dispatchEvent($u),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bm))}function vb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Mb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Me.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Me.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent($u)}function bb(n){switch(this._trackPointer(n),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Me.NONE}}function Sb(n){this.enabled!==!1&&n.preventDefault()}function wb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var km=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Qu=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],ga={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Eb=8e6,xa=512,vi=1024,Fs=512,He=(n,t,e,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(t,Math.min(e,n)):i,zm=(n,t,e)=>typeof n=="string"&&n.trim()?n.trim().slice(0,t):e;function on(n){if(typeof n=="string"){if(n.length>Eb)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>xa)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+xa+" pi\xE8ces.");let t=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:zm(n.name,56,"Ma map"),worldSize:He(n.worldSize,24,2048,240),spawn:{x:He(t.x,-vi,vi,0),y:He(t.y,-256,256,.06),z:He(t.z,-vi,vi,3),yaw:He(t.yaw,-360,360,0)},pieces:n.pieces.map((e,i)=>{if(!e||typeof e!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=e.terrain&&typeof e.terrain=="object"?Hr(e.terrain):null,r=e.model?ha({version:1,models:[e.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:zm(e.name,36,"Pi\xE8ce "+(i+1)),x:He(e.x,-vi,vi,0),y:He(e.y,-256,256,0),z:He(e.z,-vi,vi,0),w:He(e.w,.05,Fs,3),h:He(e.h,.05,256,.5),d:He(e.d,.05,Fs,3),pitch:s?0:He(e.pitch,-180,180,0),yaw:s?0:He(e.yaw,-360,360,0),roll:s?0:He(e.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(e.primitive)?e.primitive:"box",uvScale:He(e.uvScale,.05,100,1),uvOffsetX:He(e.uvOffsetX,-100,100,0),uvOffsetY:He(e.uvOffsetY,-100,100,0),uvRotation:He(e.uvRotation,-360,360,0),material:Math.round(He(e.material,0,16,0)),color:typeof e.color=="string"&&/^#[a-f0-9]{6}$/i.test(e.color)?e.color:"#ffffff",grip:He(e.grip,0,1.5,.8),gravity:He(e.gravity,.05,2.5,1),bounce:He(e.bounce,0,1.65,1),solid:e.solid!==!1,texture:typeof e.texture=="string"&&e.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(e.texture)?e.texture:null}})}}function Vm(n){return on({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Wp,yaw:0},pieces:n.filter(t=>t.half&&t.mesh?.isObject3D).map(t=>({name:t.name,x:t.position.x,y:t.position.y,z:t.position.z,w:t.half.x*2,h:t.half.y*2,d:t.half.z*2,pitch:t.mesh.rotation.x*180/Math.PI,material:t.type,grip:t.friction,gravity:t.gravity}))})}function Gm(){let n=(t,e,i,s,r,o,a,l,c={})=>({name:t,x:e,y:i,z:s,w:r,h:o,d:a,material:l,...c});return on({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,ga.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,ga.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,ga.rubber)]})}function es(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Hm(n,t,e,i=.25){if(!n||!t||!Number.isFinite(i)||i<=0)return null;let s=t,r=new qe(-e.pitch*Math.PI/180,-e.yaw*Math.PI/180,-(e.roll??0)*Math.PI/180,"ZXY"),o=new b(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*e.w+Math.abs(o.y)*e.h+Math.abs(o.z)*e.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),h=l(n.y+s.y*a),u=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(h-n.y)*s.y-(u-n.z)*s.z;return c+=s.x*d,h+=s.y*d,u+=s.z*d,![c,h,u].every(Number.isFinite)||Math.abs(c)>vi||Math.abs(u)>vi||h<-256||h>256?null:{...e,x:c,y:h,z:u}}var Wm="gorilla-lab-custom-map-v1";function Xm(n){let t=new Blob([JSON.stringify(on(n),null,2)],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(e),1200)}var Y=n=>document.getElementById(n),$m=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],Qm=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],sh=[...document.querySelectorAll(".tool")],tg="gorilla-lab-editor-draft",Ab=om(localStorage),$r=Ab.models.filter(n=>n.parts.length);Y("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...$r.map(n=>new Option(n.name+(n.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),n.id)));var qm=new URLSearchParams(location.search).get("model");$r.some(n=>n.id===qm)&&(Y("model-library").value=qm);Y("place-model").disabled=!$r.length;function eg(){return $r.find(n=>n.id===Y("model-library").value)}function Cb(){let n=eg();if(!n)return null;let t=um(n);return es({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,t.y/2),z:0,w:Vt.clamp(t.x,.2,64),h:Vt.clamp(t.y,.12,36),d:Vt.clamp(t.z,.2,64),color:"#ffffff",solid:n.properties.collidable!==!1})}Y("model-library").addEventListener("change",()=>{ie==="model"&&rs(null)});var td={block:es(),ramp:es({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:es({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:Hr({amplitude:.7,grass:.34})}),wall:es({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},ad={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"Clique sur une surface pour placer le d\xE9part du joueur.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},wt,De=-1,ie="move",de=null,gn=null,ns=[],xn=Y("preview"),se=Y("plan"),te=se.getContext("2d");function Rb(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[t,e,i,s]=n[Y("shape-preset").value]??n.slab;return es({name:t,w:e,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(Y("shape-preset").value)?Y("shape-preset").value:"box"})}var Pb=Y("editor-views");function Sa(){Pb.dataset.layout=Y("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",Y("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",Y("sidebar-width").value+"px"),requestAnimationFrame(()=>{dd(),fd()})}for(let n of["layout-mode","view-split","sidebar-width"])Y(n).addEventListener("input",Sa);Y("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),Sa()};Y("workspace-fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.querySelector("main").requestFullscreen?.()};Y("focus-3d").onclick=()=>{Y("layout-mode").value="only-3d",Sa()};Y("focus-plan").onclick=()=>{Y("layout-mode").value="only-plan",Sa()};var Ib=[["","G\xE9om\xE9trie simple (d\xE9faut)"],...$r.map(n=>[n.id,n.name])];for(let n of["terrain-grassModel","terrain-shrubModel"])Y(n).replaceChildren(...Ib.map(([t,e])=>new Option(e,t)));function Lb(){let n=document.querySelector("main"),t=n.querySelector("aside.panel");t.id="scene-sidebar";let e=(H,ot,Z)=>{let F=document.createElement(H);return ot&&(F.className=ot),Z!==void 0&&(F.textContent=Z),F},i=e("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let H of sh){let ot=H.dataset.tool,Z=H.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[ot]){let F=e("div","rail-divider");F.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[ot]],i.append(F)}H.classList.add("rail-tool"),H.title=Z+" \xB7 "+(ad[ot]??""),H.setAttribute("aria-label",Z),H.replaceChildren(e("span","rail-glyph",s[ot]??"\u25A1"),e("span","rail-caption",Z==="Redimensionner"?"\xC9chelle":Z==="S\xE9lectionner"?"S\xE9lect.":Z==="D\xE9placer"?"D\xE9placer":Z==="Atelier"?"Mod\xE8le":Z)),i.append(H)}let o=e("div","insert-palette");o.id="insert-palette",o.hidden=!0,o.append(e("h2","","Ajouter un \xE9l\xE9ment"));let a=document.querySelector(".command-bar .tools"),l=Y("shape-preset").closest("label"),c=Y("model-library").closest(".inspector-section"),h=a.querySelector('a[href*="model-editor"]');o.append(l,c),h&&o.append(h);let u=e("p","palette-help","Choisis une forme puis l\u2019outil \u229E, ou s\xE9lectionne un mod\xE8le puis \u2B21. Clique ensuite dans la sc\xE8ne.");o.append(u),n.append(o);let d=document.querySelector(".command-bar .command-row");a.remove(),d.querySelector(".actions").classList.add("viewport-actions");let m=Y("layout-mode").closest("label");m.classList.add("viewport-layout"),d.prepend(m);let _=e("span","active-selection","Aucune s\xE9lection");_.id="active-selection",m.after(_);let g=e("details","precision-menu");g.id="precision-menu",g.append(e("summary","","Accrochage \u25BE"));let p=e("div","precision-options"),S=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let H of S){let ot=Y(H);ot&&p.append(ot.closest("label"))}g.append(p),d.append(g);let M=H=>{if(H==="close"){o.hidden=!0;return}o.hidden=!1,Y(H==="model"?"model-library":"shape-preset").focus({preventScroll:!0})};for(let H of["model","preset"])sh.find(Z=>Z.dataset.tool===H)?.addEventListener("click",()=>M(H));window.addEventListener("pointerdown",H=>{!o.hidden&&!o.contains(H.target)&&!H.target.closest(".rail-tool")&&M("close")}),window.addEventListener("keydown",H=>{H.key==="Escape"&&M("close")});let y=e("section","outliner");y.id="scene-outline";let C=e("header","side-section-head");C.append(e("strong","","Hi\xE9rarchie de la sc\xE8ne")),C.append(e("span","outline-meta","Objets")),y.append(C);let A=t.querySelector("#pieces").closest(".inspector-section");A.id="outline-content",y.append(A);let P=e("section","property-pane"),D=e("nav","inspector-tabs");D.setAttribute("aria-label","Propri\xE9t\xE9s");let w=[["object","Objet"],["terrain","Terrain"],["material","Mat\xE9riaux"],["scene","Sc\xE8ne"]];for(let[H,ot]of w){let Z=e("button","inspector-tab",ot);Z.type="button",Z.dataset.tab=H,Z.setAttribute("aria-pressed",String(H==="object")),D.append(Z)}let v=e("div","property-content");v.id="property-content";let I=Y("piece-inspector").closest(".inspector-section");I.id="object-section";let N=Y("surface").closest("details");N.id="surface-controls",v.append(I);let V=e("section","scene-options");V.id="scene-options",V.append(e("h2","","Param\xE8tres de carte"));let X=Y("map-name").closest("label"),G=Y("map-world-size").closest(".fields"),q=Y("draft-status");V.append(X,G,q);let tt=[...t.children].filter(H=>H.tagName==="DETAILS");for(let H of tt)V.append(H);v.append(V),P.append(D,v),t.replaceChildren(y,P);let W=H=>{let ot=wt?.pieces?.[De];H==="terrain"&&!ot?.terrain&&(H="object"),H==="material"&&!ot&&(H="object"),t.dataset.tab=H;for(let Z of D.querySelectorAll("button"))Z.setAttribute("aria-pressed",String(Z.dataset.tab===H)),Z.disabled=Z.dataset.tab==="terrain"&&!ot?.terrain;H==="terrain"&&(Y("terrain-controls").open=!0),H==="material"&&(N.open=!0),v.scrollTop=0};for(let H of D.querySelectorAll("button"))H.addEventListener("click",()=>W(H.dataset.tab));window.setInspectorTab=W,W("object")}Lb();var ye={scale:10,cx:0,cz:-6,width:30,height:40},wa=new Rc({canvas:xn,antialias:!0});wa.setPixelRatio(Math.min(devicePixelRatio,1.5));var Ve=new cn(52,1,.1,640);Ve.position.set(16,15,19);var Ie=new Qc(Ve,xn);Ie.target.set(0,0,-5);Ie.mouseButtons.LEFT=null;Ie.mouseButtons.RIGHT=Xn.ROTATE;Ie.mouseButtons.MIDDLE=Xn.PAN;Ie.maxDistance=580;Ie.maxPolarAngle=Math.PI/2-.035;var _n=new mr;_n.background=new kt("#8fb6c6");var ng=new vs("#f0f5ff","#8e775c",2.6);_n.add(ng);var ld=new Ms("#fff1d2",1.8);ld.position.set(-9,18,6);_n.add(ld);var ss=new mr;ss.fog=new To("#a6d4ea",55,135);var Qr=Jp(ss,wa),ig=()=>Vm(Qr.boxes);wt=ig();jp(ss,Qr.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"});var Db=im();nm((n,t)=>{let{geo:e,material:i}=Db[n],s=new ht(e,i);e.computeBoundingBox(),s.position.set(t.x,-e.boundingBox.min.y,t.z),ss.add(s)});var sg=new ht(new qt(1.8,2.03,.1),new en({color:"#8daebc",metalness:.9,roughness:.12}));sg.position.set(Dc.x,Dc.y,Dc.z);ss.add(sg);var Ub=Qr.boxes.filter(n=>n.half&&n.mesh?.isObject3D);Ub.forEach(n=>n.mesh.removeFromParent());var cd=new Qe;cd.add(...ss.children);_n.add(cd);var id=Qr.boxes.find(n=>n.heightfield).mesh;Qr.visual(7,0,7,!0,!0,!0,512,!1);var jr=new Zo(60,60,"#d7e2e5","#5e7b8a");jr.material.transparent=!0;jr.material.opacity=.35;_n.add(jr);var Le=new Qe;_n.add(Le);var ge=new Kc(Ve,xn);ge.setSize(.9);ge.setRotationSnap(Vt.degToRad(5));ge.enabled=!1;_n.add(ge.getHelper());var hd=new Set(["translate","rotate","scale"]),Wr=null,Pn=null,ud=!1,Xr=null,_a=!1,rg=()=>Number(Y("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let t=localStorage.getItem("gorilla-lab-"+n);[...Y(n).options].some(e=>e.value===t)&&(Y(n).value=t)}catch{}Y(n).onchange=()=>{Pn=null;try{localStorage.setItem("gorilla-lab-"+n,Y(n).value)}catch{}}}var Os=new Map;try{Y("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}Y("magnet").onchange=()=>{Pn=null,Os.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",Y("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,t=>{ud=t.altKey});window.addEventListener("blur",()=>{ud=!1,Pn=null});function og(n,t,e,i){let s={...t};if(!i)for(let m of e)s[m]=Math.round(t[m]/Ma())*Ma();if(i||!Y("magnet").checked||!n.solid||n.terrain)return Pn=null,s;let r=rg(),o=Y("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=m=>{if(m.terrain||!m.solid||[m.pitch,m.yaw,m.roll??0].some(p=>Math.abs(p/90-Math.round(p/90))>1e-6))return null;let _=new qe(...[m.pitch,m.yaw,m.roll??0].map(Vt.degToRad),"YXZ"),g=new ae().makeRotationFromEuler(_).elements;return Object.fromEntries(["x","y","z"].map((p,S)=>[p,(Math.abs(g[S])*m.w+Math.abs(g[4+S])*m.h+Math.abs(g[8+S])*m.d)/2]))},c=l(n);if(!c)return s;let h=[];for(let m of wt.pieces){if(m===n)continue;let _=l(m);if(_)for(let g of e){let p=Object.keys(a).filter(y=>y!==g),S=y=>Math.abs(s[y]-m[y])<c[y]+_[y]-.001,M=p.flatMap(y=>e.includes(y)&&S(p.find(C=>C!==y))?[-1,1].flatMap(C=>[-1,1].map(A=>{let P=m[y]+C*_[y]-A*c[y];return{key:y,value:P,distance:Math.abs(t[y]-P)}})):[]).sort((y,C)=>y.distance-C.distance)[0];if(!(o?!M||M.distance>r*1.8:!p.every(S)))for(let y of[-1,1]){let C=m[g]+y*(c[g]+_[g]),A=wt.pieces.indexOf(m)+":"+g+":"+y;h.push({key:A,axis:g,value:C,edge:o?M:null,distance:Math.max(Math.abs(C-t[g]),o?M.distance:0)})}}}let u=h.find(m=>m.key===Pn),d=m=>{s[m.axis]=m.value,m.edge&&(s[m.edge.key]=m.edge.value)};if(u&&u.distance<=r*1.8)return d(u),s;Pn&&(Os.set(Pn,(Os.get(Pn)??0)+1),Pn=null);let f=h.filter(m=>m.distance<=r&&(Os.get(m.key)??0)<3).sort((m,_)=>m.distance-_.distance)[0];if(f)d(f),Pn=f.key;else for(let m of h)m.distance<=r&&(Os.get(m.key)??0)>=3&&Math.abs(s[m.axis]-m.value)<.001&&(s[m.axis]=t[m.axis]);return s}var nh=new qt(1,1,1),Nb=new Ri,ah=new ht(new Ci(.32,.75,5),new We({color:"#ffcd63"}));_n.add(ah);var qr=new ht(nh,new We({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),Yr=new ht(new On(.055,10,8),new We({color:"#ffc85a",depthTest:!1}));Yr.visible=!1;Yr.renderOrder=20;_n.add(Yr);var ya=new ht(ah.geometry,new We({color:"#ffe084",opacity:.65,transparent:!0,depthWrite:!1}));qr.visible=ya.visible=!1;_n.add(qr,ya);var is=new bs,lh=new b(0,1,0),Ym=new hn(lh,0),Fb=new Kt,oi=null,ed=!1;function nn(){ed||(ed=!0,requestAnimationFrame(()=>{ed=!1,wa.render(_n,Ve),vg()}))}function dd(){let n=xn.clientWidth||1,t=xn.clientHeight||1;wa.setSize(n,t,!1),Ve.aspect=n/t,Ve.updateProjectionMatrix(),nn()}function fd(){let n=Math.max(1,se.clientWidth),t=Math.max(1,se.clientHeight);n===se.width&&t===se.height||(se.width=n,se.height=t,pd(),ai())}new ResizeObserver(dd).observe(xn);new ResizeObserver(fd).observe(se);Ie.addEventListener("change",nn);Ie.addEventListener("start",()=>rs(null));function pd(){ye.scale=Math.min(se.width/ye.width,se.height/ye.height)}function rh(n,t){return[se.width/2+(n-ye.cx)*ye.scale,se.height/2+(t-ye.cz)*ye.scale]}function sd(n){let t=se.getBoundingClientRect();return{x:((n.clientX-t.left)*se.width/t.width-se.width/2)/ye.scale+ye.cx,z:((n.clientY-t.top)*se.height/t.height-se.height/2)/ye.scale+ye.cz}}function Zm(n,t,e,i,s){let[r,o]=rh(n.x,n.z),a=Vt.degToRad(n.pitch),l=Vt.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,h=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);te.save(),te.translate(r,o),te.rotate(-Vt.degToRad(n.yaw));let u=c*ye.scale,d=h*ye.scale;te.globalAlpha=s,te.fillStyle=t,te.fillRect(-u/2,-d/2,u,d),te.globalAlpha=1,te.strokeStyle=e,te.lineWidth=i,te.strokeRect(-u/2,-d/2,u,d),te.restore()}function Jm(n,t){let[e,i]=rh(n.x,n.z);te.save(),te.translate(e,i),te.rotate(Vt.degToRad(-n.yaw)),te.fillStyle=t?"#fff0bb":"#ffd16e",te.strokeStyle="#263740",te.lineWidth=1.5,te.beginPath(),te.moveTo(0,-8),te.lineTo(6,5),te.lineTo(0,3),te.lineTo(-6,5),te.closePath(),te.fill(),te.stroke(),te.restore()}function ai(){te.fillStyle="#192e3a",te.fillRect(0,0,se.width,se.height),te.strokeStyle="#37505f",te.lineWidth=1;let n=ye.scale<1?25:ye.scale<4?10:ye.scale<12?5:1,t=(wt.worldSize??240)/2;for(let r=-Math.ceil(t/n)*n;r<=t;r+=n){let[o,a]=rh(r,r);o>=0&&o<=se.width&&(te.beginPath(),te.moveTo(o,0),te.lineTo(o,se.height),te.stroke()),a>=0&&a<=se.height&&(te.beginPath(),te.moveTo(0,a),te.lineTo(se.width,a),te.stroke())}let[e,i]=rh(-t,-t);te.strokeStyle="#ffda9077",te.lineWidth=2,te.strokeRect(e,i,t*2*ye.scale,t*2*ye.scale);let s=wt.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?Qu[r.material]:r.color);Zm(r,a,o===De?"#ffe095":"#a4bac7",o===De?2:1,r.solid?.86:.38)}Jm(wt.spawn,!1),gn&&(ie==="spawn"?Jm(gn,!0):Zm(gn,"#8ee7fc","#afefff",2,.45))}function oh(n,t){n.position.set(t.x,t.y,t.z),t.terrain&&n!==qr?n.scale.setScalar(1):n.scale.set(t.w,t.h,t.d),n.rotation.set(Vt.degToRad(t.pitch),Vt.degToRad(t.yaw),Vt.degToRad(t.roll??0),"YXZ"),n.updateMatrixWorld()}function ag(){oi&&(_n.remove(oi),oi.geometry.dispose(),oi.material.dispose());let n=Le.children[De];oi=n?new Er(n,"#ffdf88"):null,oi&&_n.add(oi),rd()}function rd(){let n=Le.children[De],t=ce()?.terrain,e=hd.has(ie)&&!!n&&!(t&&ie==="rotate");if(ge.enabled=e,!e){ge.detach(),t&&ie==="rotate"&&(Y("tool-help").textContent="Le terrain reste horizontal. Utilise Sculpter pour fa\xE7onner sa pente.");return}ge.setMode(ie),ge.setSpace(ie==="translate"?"world":"local"),ge.setTranslationSnap(null),ge.showX=ge.showZ=!0,ge.showY=!(t&&ie==="scale"),ge.attach(n),Y("tool-help").textContent=ad[ie]}var Zr=!1;function lg(){if(ie!=="scale")return;let n=ce(),t=Wr?.map.pieces[De],e=ge.object;if(!n||!t||!e)return;let i=Nm(t,n,Zr),s=(wt.worldSize??240)/2;n.x=Vt.clamp(i.x,-s,s),n.y=Vt.clamp(i.y,-256,256),n.z=Vt.clamp(i.z,-s,s),e.position.set(n.x,n.y,n.z),oi?.update();for(let r of["x","y","z"])Y("p-"+r).value=n[r].toFixed(2);ai(),nn()}function cg(n){let t=Zr;Zr=n.ctrlKey,t!==Zr&&ge.dragging&&lg()}for(let n of["keydown","keyup"])window.addEventListener(n,cg);xn.addEventListener("pointermove",cg,{capture:!0});ge.addEventListener("change",nn);ge.addEventListener("mouseDown",()=>{let n=ce();Pn=null,n&&(Wr={map:structuredClone(wt),selected:De}),Zr=!!(Zr||window.event?.ctrlKey)});ge.addEventListener("objectChange",()=>{let n=ce(),t=ge.object,e=Wr?.map.pieces[De];if(!n||!t||!e)return;let i=Vt.clamp;if(ie==="translate"){let s=["x","y","z"].filter(a=>(ge.axis??"XYZ").includes(a.toUpperCase())),r=og(n,{x:t.position.x,y:t.position.y,z:t.position.z},s,ud),o=(wt.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-256,256),n.z=i(r.z,-o,o),t.position.set(n.x,n.y,n.z)}else ie==="rotate"?(n.pitch=Vt.radToDeg(t.rotation.x),n.yaw=Vt.radToDeg(t.rotation.y),n.roll=Vt.radToDeg(t.rotation.z)):(n.w=i(t.scale.x*(n.terrain?e.w:1),.05,Fs),n.d=i(t.scale.z*(n.terrain?e.d:1),.05,Fs),n.terrain||(n.h=i(t.scale.y,.05,256)),t.scale.set(n.terrain?n.w/e.w:n.w,n.terrain?1:n.h,n.terrain?n.d/e.d:n.d),lg());t.updateMatrixWorld(!0),oi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])Y("p-"+s).value=Number(n[s]??0).toFixed(2);ai(),nn()});ge.addEventListener("dragging-changed",({value:n})=>{if(Ie.enabled=!n,n||!Wr)return;let t=Wr;Wr=null,JSON.stringify(t.map.pieces[De])!==JSON.stringify(ce())&&(ns.length>=35&&ns.shift(),ns.push(t),wt=on(wt),Ee(),Te("Transformation appliqu\xE9e."))});xn.addEventListener("pointerup",()=>{ge.dragging||(Ie.enabled=!0)});xn.addEventListener("pointercancel",()=>{ge.dragging&&ge.pointerUp(null),Ie.enabled=!0});function Ob(){ge.detach();for(let n of[...Le.children])Le.remove(n),n.geometry!==nh&&n.geometry.dispose(),n.userData.vegetation&&Mm(n.userData.vegetation),n.userData.ownsTexture&&n.material.map?.dispose(),Hc(n.material);cd.visible=!!wt.arenaBase,ld.visible=ng.visible=!wt.arenaBase,_n.fog=wt.arenaBase?ss.fog:null,_n.environment=wt.arenaBase?ss.environment:null;for(let n of wt.pieces){if(n.model){let r=new ht(Wc(n.model),Gc(n.model));r.castShadow=r.receiveShadow=!0,Le.add(r),oh(r,n);continue}let t=[10,11,12].includes(n.material),e=new fn({color:new kt(Qu[n.material]).multiply(new kt(n.color)),transparent:!n.solid||t,opacity:n.solid?t?.55:1:.4});if(wt.arenaBase&&!n.texture){let r=Qr.mapMaterial(n.material,7);e.color.set(n.color),e.map=r.map,e.opacity=n.solid?r.opacity:.4,e.transparent=!n.solid||r.transparent}n.texture&&(e.map=Nb.load(n.texture,nn),e.map.colorSpace=me,e.map.wrapS=e.map.wrapT=Gn,e.color.set(n.color));let i=n.terrain?Gu(n):n.primitive&&n.primitive!=="box"?Bp(n.primitive):n.texture||wt.arenaBase?Ic(n.w,n.h,n.d).scale(1/n.w,1/n.h,1/n.d):nh;i!==nh&&Op(i,n);let s=new ht(i,e);if(s.userData.ownsTexture=!!n.texture,n.terrain){let r=vm(n);r&&(s.add(r),s.userData.vegetation=r)}Le.add(s),oh(s,n)}ah.position.set(wt.spawn.x,wt.spawn.y+.38,wt.spawn.z),Mg(),ag()}function ce(){return wt.pieces[De]}function Te(n){Y("editor-note").textContent=n}function Ue(){ns.length>=35&&ns.shift(),ns.push({map:structuredClone(wt),selected:De}),Y("undo").disabled=!1}function hg(){try{localStorage.setItem(tg,JSON.stringify(wt)),Y("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"}catch{Y("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."}}var jm=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function ug(){let n=jm(Y("piece-search").value.trim()),t=[];wt.pieces.forEach((e,i)=>{jm(e.name).includes(n)&&t.push(new Option(e.name,i,!1,i===De))}),Y("pieces").replaceChildren(...t),Y("pieces").value=String(De),t.length||Y("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),t.length||(Y("pieces").options[0].disabled=!0),Y("count").textContent=n?t.length+" sur "+wt.pieces.length:wt.pieces.length+" / "+xa}function dg(){ug();let n=ce();Y("piece-inspector").hidden=!n,Y("selection-help").hidden=!!n,Y("focus-piece").disabled=!n,Y("selection-title").textContent=n?n.name:"Aucune pi\xE8ce s\xE9lectionn\xE9e";for(let e of $m){let i=Y("p-"+e);i.disabled=!n,e==="solid"?i.checked=n?.solid??!1:i.value=n?.[e]??(e==="color"?"#ffffff":"")}for(let e of["rotate","duplicate","texture-file","surface","spawn-here"])Y(e).disabled=!n;Y("delete").disabled=!n||wt.pieces.length===1,Y("texture-clear").disabled=!n?.texture,Y("texture-paint").disabled=!n||!!n.model;let t=n?.terrain;Y("terrain-grassTexture-paint").disabled=!t;for(let e of Qm){let i=Y("p-"+e);i.disabled=!n||!!n?.model,i.value=n?.[e]??(e==="uvScale"?1:0)}if(Y("uv-reset").disabled=!n||!!n?.model,Y("terrain-controls").hidden=!t,t){for(let e of _g)Y("terrain-"+e).value=t[e];for(let e of["grass","shrub"]){let i=Y("terrain-"+e+"Model"),s=t[e+"Model"]?.id??"";s&&![...i.options].some(r=>r.value===s)&&i.add(new Option(t[e+"Model"].name+" (carte)",s)),i.value=s}Y("terrain-cell-size").textContent=(n.w/t.detail).toFixed(2)+" \xD7 "+(n.d/t.detail).toFixed(2)+" m",Y("p-pitch").disabled=Y("p-yaw").disabled=Y("p-roll").disabled=!0}Y("rotate").disabled=!n||!!t,Y("texture-create").disabled=!n,Y("surface").value="",Y("undo").disabled=ns.length===0,Y("active-selection").textContent=n?n.name:"Aucune s\xE9lection",document.querySelector("#scene-sidebar").dataset.tab==="terrain"&&!t&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="terrain"]').disabled=!t}function Ee(){Y("map-name").value=wt.name,Y("map-world-size").value=wt.worldSize??240,dg();for(let n of["x","y","z","yaw"])Y("spawn-"+n).value=wt.spawn[n];Ob(),ai(),nn(),hg()}function va(n){De!==n&&(De=n,Pn=null,Os.clear(),dg(),ag(),ai(),nn())}function fg(n){if(wt.pieces.length>=xa)return Te("Limite de pi\xE8ces atteinte.");Ue(),wt.pieces.push(n),De=wt.pieces.length-1,Ee(),Te(n.name+" ajout\xE9 \xE0 la map.")}function md(){if(!ce()||wt.pieces.length===1)return;let n=ce().name;Ue(),wt.pieces.splice(De,1),De=Math.min(De,wt.pieces.length-1),Ee(),Te(n+" retir\xE9 de la map.")}function gd(){let n=ce();if(!n)return;let t=Vt.clamp(n.x+n.w+Ma(),-120,120);fg({...n,name:(n.name+" bis").slice(0,36),x:t})}function Bb(){let n=ce();!n||n.terrain||(Ue(),n.yaw=(n.yaw+45)%360,Ee())}function pg(){let n=ns.pop();n&&(wt=n.map,De=n.selected,rs(null),Ee(),Te("Derni\xE8re modification annul\xE9e."))}function Bs(n){ie=n,Ie.mouseButtons.LEFT=ie==="view"?Xn.ROTATE:null,rd(),nn();for(let t of sh)t.setAttribute("aria-pressed",String(t.dataset.tool===ie));for(let t of[xn,se])t.dataset.tool=ie,t.removeAttribute("data-hit");Y("tool-help").textContent=ad[ie],rd(),nn(),rs(null)}function zs(){let n=new Ze().setFromObject(Le);n.expandByPoint(ah.position);let t=n.getCenter(new b),e=n.getSize(new b);ye={cx:t.x,cz:t.z,width:Math.max(e.x+5,Math.min(wt.worldSize??240,500)),height:Math.max(e.z+5,Math.min(wt.worldSize??240,500))},pd();let i=Math.max(1,Math.ceil(Math.max(e.x,e.z)/40));jr.scale.setScalar(i),jr.position.set(Math.round(t.x/i)*i,-.035,Math.round(t.z/i)*i);let s=Ve.position.clone().sub(Ie.target).normalize(),r=new b().crossVectors(lh,s).normalize(),o=new b().crossVectors(s,r),a=Math.tan(Vt.degToRad(Ve.fov/2))*.87,l=a*Ve.aspect,c=6;for(let h of[n.min.x,n.max.x])for(let u of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new b(h,u,d).sub(t),m=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,m+f.dot(s))}c=Math.min(c,Ie.maxDistance),Ie.target.copy(t),Ve.position.copy(t).addScaledVector(s,c),Ie.update(),Ve.updateMatrixWorld(),ai(),nn()}function xd(n,t){Ue(),wt=n,Pn=null,Os.clear(),De=-1,Y("piece-search").value="",Bs("move"),Ee(),zs(),Te(t)}function Ma(){return Number(Y("snap").value)}function th(n){let t=Ma(),e=(wt.worldSize??240)/2;return Vt.clamp(Math.round(n/t)*t,-e,e)}function _d(n,t){if(n===se){let e=sd(t);is.set(new b(e.x,80,e.z),new b(0,-1,0))}else{let e=xn.getBoundingClientRect();Ve.updateMatrixWorld(),is.setFromCamera({x:(t.clientX-e.left)/e.width*2-1,y:1-(t.clientY-e.top)/e.height*2},Ve)}}function od(n){return Ym.constant=-n,is.ray.intersectPlane(Ym,new b)}function Kr(n,t){return _d(n,t),is.intersectObjects(wt.arenaBase?[...Le.children,id]:Le.children,!1)[0]}function mg(n,t,e,i=null){is.set(new b(n,80,t),new b(0,-1,0));let s=i?is.intersectObject(i,!1)[0]:is.intersectObjects(wt.arenaBase?[...Le.children,id]:Le.children,!1).find(r=>r.object===id||wt.pieces[Le.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:n,y:Math.max(-10,s.point.y+.08),z:t,yaw:e}}function gg(n,t){Xr=null,_a=!1;let e=Kr(n,t);if(ie==="spawn"){if(!e)return null;let h=th(e.point.x),u=th(e.point.z);return mg(h,u,wt.spawn.yaw)}if(ie==="terrain"){let h=e?.point??od(0);return h?{...td.terrain,terrain:Hr(td.terrain.terrain),x:th(h.x),y:h.y,z:th(h.z)}:null}if(ie==="sculpt"||ie==="model"&&!eg())return null;let i=e?.point??od(0);if(!i)return null;let s=e?e.face.normal.clone().applyNormalMatrix(Fb.getNormalMatrix(e.object.matrixWorld)):lh,r=e&&zb(e),o=rg();r&&r.distance<=o*2&&(Xr=r.point,_a=Y("magnet").checked&&!t.altKey&&Y("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=_a||t.altKey?1e-6:Ma(),l=ie==="model"?Cb():ie==="preset"?Rb():td[ie],c=Hm(_a?Xr:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=wt.worldSize/2?c:null}function zb(n){let t=n.object,e=wt.pieces[Le.children.indexOf(t)];if(!e||e.terrain)return null;let i=t.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let h=t.localToWorld(c.clone()).distanceTo(n.point);c[r.find(u=>u!==a)]=0,(!o||h<o.distance)&&(o={distance:h,point:t.localToWorld(c)})}return o}function rs(n){if(!n&&!gn)return;gn=n;let t=Y("placement-measures");if(t.hidden=!gn||ie==="spawn",!t.hidden){let e=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);t.textContent=[gn.w,gn.h,gn.d].map(e).join(" \xD7 ")+" m (L \xD7 H \xD7 P)"+(Xr?_a?" \xB7 Milieu accroch\xE9":" \xB7 Rep\xE8re : milieu de l\u2019ar\xEAte":"")}Yr.visible=!!(gn&&Xr),Yr.visible&&Yr.position.copy(Xr),ya.visible=!!(gn&&ie==="spawn"),qr.visible=!!(gn&&ie!=="spawn"),ya.visible&&ya.position.set(gn.x,gn.y+.38,gn.z),qr.visible&&oh(qr,gn),ai(),nn()}function kb(n,t){let e=gg(n,t);if(!e){Te(ie==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}ie==="spawn"?(Ue(),wt.spawn=e,Bs("move"),Ee(),Te("Point de d\xE9part d\xE9plac\xE9.")):(rs(null),fg(e))}function Vb(n,t){if(ie==="view"||t.button!==0||!t.isPrimary||de||ge.dragging)return;if(hd.has(ie)){if(n===xn&&ge.enabled){let o=xn.getBoundingClientRect();if(ge.pointerHover({x:(t.clientX-o.left)/o.width*2-1,y:1-(t.clientY-o.top)/o.height*2,button:0}),ge.axis){Ie.enabled=!1;return}}t.stopImmediatePropagation();let r=Kr(n,t);va(r?Le.children.indexOf(r.object):-1);return}t.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(t.pointerId);let e={canvas:n,id:t.pointerId,clientX:t.clientX,clientY:t.clientY,tool:ie};if(de=e,Pn=null,ie==="sculpt"){yg(n,t);return}if(ie!=="move")return;let i=Kr(n,t);va(i?Le.children.indexOf(i.object):-1);let s=ce();!i||!s||(e.height=i.point.y,e.dx=i.point.x-s.x,e.dz=i.point.z-s.z)}function Gb(n,t){if(ie==="view"||hd.has(ie))return;if(!de){ie==="move"?n.toggleAttribute("data-hit",!!Kr(n,t)):rs(gg(n,t));return}if(ie==="sculpt"&&de.id===t.pointerId&&de.canvas===n){Math.hypot(t.clientX-de.clientX,t.clientY-de.clientY)>=7&&(yg(n,t),de.clientX=t.clientX,de.clientY=t.clientY);return}if(de.id!==t.pointerId||de.canvas!==n||de.height===void 0||!ce()||Math.hypot(t.clientX-de.clientX,t.clientY-de.clientY)<4&&!de.recorded)return;_d(n,t);let i=od(de.height);if(!i)return;let s=ce(),r=og(s,{x:i.x-de.dx,y:s.y,z:i.z-de.dz},["x","z"],t.altKey),o=(wt.worldSize??240)/2,a=Vt.clamp(r.x,-o,o),l=Vt.clamp(r.z,-o,o);a===s.x&&l===s.z||(de.recorded||(Ue(),de.recorded=!0,n.toggleAttribute("data-dragging",!0)),s.x=a,s.z=l,oh(Le.children[De],s),oi?.update(),Y("p-x").value=a,Y("p-z").value=l,ai(),nn())}function nd(n,t,e){if(!de||de.canvas!==n||de.id!==t.pointerId)return;let i=de;if(de=null,n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Ee(),Te("Relief modifi\xE9."));return}i.recorded&&(hg(),Te(ce().name+" d\xE9plac\xE9.")),e&&ie===i.tool&&ie!=="move"&&Math.hypot(t.clientX-i.clientX,t.clientY-i.clientY)<6&&kb(n,t)}var Yn=null,ch=!1,eh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(ch=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(ch=!1)});window.addEventListener("blur",()=>{Yn=null,ch=!1});se.addEventListener("pointerdown",n=>{n.button!==1&&!(ch&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Yn={id:n.pointerId,x:n.clientX,y:n.clientY},se.setPointerCapture(n.pointerId),se.style.cursor="grabbing")},{capture:!0});se.addEventListener("pointermove",n=>{!Yn||Yn.id!==n.pointerId||(n.stopImmediatePropagation(),ye.cx-=(n.clientX-Yn.x)/ye.scale,ye.cz-=(n.clientY-Yn.y)/ye.scale,Yn.x=n.clientX,Yn.y=n.clientY,ai())},{capture:!0});function xg(n){!Yn||Yn.id!==n.pointerId||(Yn=null,se.style.cursor="",se.hasPointerCapture(n.pointerId)&&se.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}se.addEventListener("pointerup",xg,{capture:!0});se.addEventListener("pointercancel",xg,{capture:!0});function yd(n,t){let e=se.getBoundingClientRect(),i=t?.clientX??e.left+e.width/2,s=t?.clientY??e.top+e.height/2,r=sd({clientX:i,clientY:s}),o=Vt.clamp(ye.width/n,.75,4096),a=o/ye.width;ye.width=o,ye.height*=a,pd();let l=sd({clientX:i,clientY:s});ye.cx+=r.x-l.x,ye.cz+=r.z-l.z,ai()}se.addEventListener("wheel",n=>{n.preventDefault(),yd(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});Y("plan-zoom-in").onclick=()=>yd(1.25);Y("plan-zoom-out").onclick=()=>yd(.8);Y("plan-fit").onclick=zs;var Jr=Y("context-actions");function ba(){Jr.hidden=!0}for(let n of[xn,se])n.addEventListener("pointerdown",t=>{t.button===2?eh={canvas:n,x:t.clientX,y:t.clientY}:ba()}),n.addEventListener("contextmenu",t=>{if(t.preventDefault(),eh?.canvas!==n||Math.hypot(t.clientX-eh.x,t.clientY-eh.y)>6)return;let e=Kr(n,t),i=e?Le.children.indexOf(e.object):-1;if(i<0){ba();return}va(i),Y("context-title").textContent=ce()?.name??"Pi\xE8ce",Jr.hidden=!1;let s=195,r=285;Jr.style.left=Math.max(4,Math.min(t.clientX,innerWidth-s-6))+"px",Jr.style.top=Math.max(4,Math.min(t.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{Jr.contains(n.target)||ba()});document.addEventListener("keydown",n=>{n.key==="Escape"&&ba()});for(let n of Jr.querySelectorAll("[data-context-action]"))n.onclick=()=>{let t=n.dataset.contextAction;ba(),t==="duplicate"?gd():t==="delete"?md():t==="focus"?Y("focus-piece").click():Bs(t==="select"?"move":t)};for(let n of[xn,se])n.addEventListener("pointerdown",t=>Vb(n,t),{capture:!0}),n.addEventListener("pointermove",t=>Gb(n,t)),n.addEventListener("pointerup",t=>nd(n,t,!0)),n.addEventListener("pointercancel",t=>nd(n,t,!1)),n.addEventListener("lostpointercapture",t=>{n.hasPointerCapture(t.pointerId)||nd(n,t,!1)}),n.addEventListener("pointerleave",()=>{de||rs(null)});Y("p-material").append(...km.map((n,t)=>new Option(n,t)));for(let n of Qm)Y("p-"+n).addEventListener("change",t=>{let e=ce();!e||e.model||(Ue(),e[n]=Number(t.target.value),wt=on(wt),Ee())});Y("uv-reset").onclick=()=>{let n=ce();!n||n.model||(Ue(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),wt=on(wt),Ee())};for(let n of $m)Y("p-"+n).addEventListener("change",t=>{let e=ce();if(!e)return;Ue();let i=t.target;n==="solid"?e[n]=i.checked:e[n]=["name","color"].includes(n)?i.value:Number(i.value),wt=on(wt),Ee()});Y("map-world-size").onchange=n=>{Ue(),wt.worldSize=Vt.clamp(Number(n.target.value)||240,24,2048),wt=on(wt),Ee(),zs(),Te("Zone de construction : "+wt.worldSize+" \xD7 "+wt.worldSize+" m.")};Y("map-name").onchange=n=>{Ue(),wt.name=n.target.value,wt=on(wt),Ee()};Y("piece-search").addEventListener("input",ug);Y("pieces").onchange=n=>{n.target.value!==""&&va(Number(n.target.value))};Y("focus-piece").onclick=()=>{let n=Le.children[De];if(!n)return;let t=new Ze().setFromObject(n).getBoundingSphere(new Hn),e=Ve.position.clone().sub(Ie.target).normalize(),i=Math.atan(Math.tan(Vt.degToRad(Ve.fov/2))*Math.min(Ve.aspect,1)),s=Math.max(1.5,t.radius/Math.sin(i)*1.15);Ie.target.copy(t.center),Ve.position.copy(t.center).addScaledVector(e,s),Ie.update(),nn()};for(let n of["x","y","z","yaw"])Y("spawn-"+n).onchange=t=>{Ue(),wt.spawn[n]=Number(t.target.value),wt=on(wt),Ee()};Y("spawn-here").onclick=()=>{let n=ce();if(!n)return;let t=n.solid&&mg(n.x,n.z,n.yaw,Le.children[De]);if(!t)return Te("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Ue(),wt.spawn=t,Ee(),Te("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of sh)n.onclick=()=>Bs(n.dataset.tool);Y("duplicate").onclick=gd;Y("delete").onclick=md;Y("rotate").onclick=Bb;Y("undo").onclick=pg;Y("zoom-fit").onclick=zs;Y("snap").onchange=()=>rs(null);Y("new-example").onclick=()=>xd(ig(),"Ar\xE8ne de d\xE9part ouverte.");Y("blank-map").onclick=()=>{let n=Vt.clamp(Number(Y("map-world-size").value)||240,24,2048);xd({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[es({name:"Sol",y:-.25,w:Math.min(n,Fs),d:Math.min(n,Fs)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};Y("surface").onchange=n=>{let t=ga[n.target.value],e=ce();!t||!e||(Ue(),Object.assign(e,t),Ee())};Y("texture-file").onchange=async n=>{let t=n.target.files[0],e=ce();if(!(!t||!e))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!wt.pieces.includes(e))return Te("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Ue(),e.texture=o,Ee(),Te("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){Te(i.message)}finally{n.target.value=""}};Y("texture-paint").onclick=()=>{let n=ce();if(!n||n.model)return Te("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");Xu({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async t=>{if(!wt.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Ue(),n.texture=t,wt=on(wt),Ee(),Te("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};Y("terrain-grassTexture-paint").onclick=()=>{let n=ce();n?.terrain&&Xu({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async t=>{if(!wt.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Ue(),n.terrain.grassTexture=t,wt=on(wt),Ee(),Te("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};Y("texture-clear").onclick=()=>{ce()?.texture&&(Ue(),ce().texture=null,Ee())};Y("import-map").onchange=async n=>{let t=n.target.files[0];if(t)try{xd(on(await t.text()),"Map charg\xE9e.")}catch(e){Te(e.message)}finally{n.target.value=""}};Y("export-map").onclick=()=>{try{Xm(wt),Te("Map JSON export\xE9e.")}catch(n){Te(n.message)}};Y("test-map").onclick=()=>{try{localStorage.setItem(Wm,JSON.stringify(on(wt))),location.href="./?custom=1"}catch{Te("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var _g=["detail","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","grass","shrub","grassSize","shrubSize"];for(let n of["grass","shrub"])Y("terrain-"+n+"Model").addEventListener("change",t=>{let e=ce();if(!e?.terrain)return;let i=$r.find(s=>s.id===t.target.value)??(e.terrain[n+"Model"]?.id===t.target.value?e.terrain[n+"Model"]:null);Ue(),e.terrain[n+"Model"]=i?structuredClone(i):null,wt=on(wt),Ee(),Te("V\xE9g\xE9tation personnalis\xE9e mise \xE0 jour.")});Y("terrain-grassTexture-file").onchange=async n=>{let t=n.target.files?.[0],e=ce();if(n.target.value="",!(!t||!e?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!wt.pieces.includes(e))return;Ue(),e.terrain.grassTexture=o,Ee(),Te("Texture d\u2019herbe import\xE9e.")}catch(i){Te(i.message)}};Y("terrain-grassTexture-clear").onclick=()=>{ce()?.terrain&&(Ue(),ce().terrain.grassTexture=null,Ee())};for(let n of _g)Y("terrain-"+n).onchange=t=>{let e=ce();e?.terrain&&(Ue(),e.terrain=n==="detail"?xm(e.terrain,Number(t.target.value)):Hr({...e.terrain,[n]:Number(t.target.value)}),Ee())};Y("terrain-reset").onclick=()=>{ce()?.terrain&&(Ue(),ce().terrain.heights=null,Ee())};function yg(n,t){_d(n,t);let e=is.intersectObjects(Le.children,!1).find(a=>wt.pieces[Le.children.indexOf(a.object)]?.terrain),i=e?Le.children.indexOf(e.object):-1,s=wt.pieces[i];if(!s?.terrain||(de.recorded||(Ue(),de.recorded=!0,de.flattenY=e.point.y,va(i),Y("terrain-controls").open=!0),i!==De))return;let r={mode:Y("terrain-brush").value,radius:Number(Y("brush-radius").value),strength:Number(Y("brush-strength").value),target:de.flattenY};if(!ym(s,e.point.x,e.point.z,r))return;let o=Le.children[i];o.geometry.dispose(),o.geometry=Gu(s),oi?.update(),ai(),nn()}Y("texture-style").replaceChildren(...Hu.map((n,t)=>new Option(n,t)));Y("texture-create").onclick=()=>{let n=ce();if(!n)return;let t=Sm(Number(Y("texture-style").value),Y("texture-tint").value);Ue(),n.texture=t.toDataURL("image/webp",.85),Ee(),Te("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};Y("view-top").onclick=()=>{let n=Ie.target,t=Math.max(10,Ve.position.distanceTo(n));Ve.position.copy(n).add(new b(0,t,.001)),Ie.update(),nn()};Y("view-perspective").onclick=()=>{Ve.position.copy(Ie.target).add(new b(16,15,24)),zs()};Y("view-spawn").onclick=()=>{let{x:n,y:t,z:e,yaw:i}=wt.spawn,s=new b(0,0,-1).applyAxisAngle(lh,Vt.degToRad(i));Ve.position.set(n,t+.87,e),Ie.target.copy(Ve.position).addScaledVector(s,5),Ve.lookAt(Ie.target),nn()};var Km={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||de||ge.dragging)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(t==="z")pg();else if(t==="d")gd();else return;else{if(n.altKey)return;if(Km[t])Bs(Km[t]);else if(t==="f")zs();else if(t==="delete")md();else return}n.preventDefault()});var ih=new Qe;_n.add(ih);function vg(){if(!Y("debug-stats"))return;let n=wa.info.render.triangles,t=wt?.pieces?.length??0;Y("debug-stats").textContent=t+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(wt?.worldSize??240)+" m"}function Mg(){for(let n of[...ih.children])ih.remove(n),n.geometry.dispose(),n.material.dispose();jr.visible=Y("debug-grid").checked;for(let n of Le.children){if(n.material)for(let t of Array.isArray(n.material)?n.material:[n.material])t.wireframe=Y("debug-wire").checked;Y("debug-hitboxes").checked&&ih.add(new Er(n,"#fa9945"))}nn()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])Y(n).onchange=Mg;Y("debug-coords").onchange=()=>{Y("debug-coords").checked||vg()};for(let n of[xn,se])n.addEventListener("pointermove",t=>{if(!Y("debug-coords").checked||de||Yn)return;let e=Kr(n,t);if(!e)return;let i=e.point;Y("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+wt.pieces.length+" \xE9l\xE9ments"});try{let n=localStorage.getItem(tg);if(n){let t=on(n);JSON.stringify(t)!==JSON.stringify(Gm())&&(wt=t)}}catch{}Bs("move");Ee();dd();fd();zs();Sa();})();
