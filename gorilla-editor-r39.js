(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,jd=1,km=2;var Jd=1,Vm=2,ji=3,ri=0,Xn=1,cn=2,us=0,or=1,cl=2,$d=3,Kd=4,Gm=5,As=100,Hm=101,Wm=102,Xm=103,qm=104,Ym=200,Zm=201,jm=202,Jm=203,Lc=204,Uc=205,$m=206,Km=207,Qm=208,eg=209,tg=210,ng=211,ig=212,sg=213,rg=214,ou=0,au=1,lu=2,ar=3,cu=4,uu=5,hu=6,du=7,fu=0,og=1,ag=2,hs=0,pu=1,mu=2,gu=3,xu=4,yu=5,_u=6,vu=7;var Qd=300,br=301,Sr=302,Li=303,Mu=304,ul=306,In=1e3,Es=1001,Fc=1002,Jn=1003,lg=1004;var hl=1005;var ln=1006,bu=1007;var zn=1008;var Ui=1009,ef=1010,tf=1011,Fo=1012,Su=1013,Us=1014,Fi=1015,wi=1016,wu=1017,Tu=1018,No=1020,nf=35902,sf=35899,rf=1021,of=1022,qn=1023,mo=1026,zo=1027,Eu=1028,Au=1029,af=1030,Cu=1031;var Ru=1033,dl=33776,fl=33777,pl=33778,ml=33779,Pu=35840,Iu=35841,Du=35842,Lu=35843,Uu=36196,Fu=37492,Nu=37496,zu=37808,Bu=37809,Ou=37810,ku=37811,Vu=37812,Gu=37813,Hu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,Zu=37819,ju=37820,Ju=37821,$u=36492,Ku=36494,Qu=36495,eh=36283,th=36284,nh=36285,ih=36286;var La=2300,Nc=2301,Ic=2302,zd=2400,Bd=2401,Od=2402;var cg=3200,ug=3201;var sh=0,hg=1,ds="",bt="srgb",lr="srgb-linear",Ua="linear",Lt="srgb";var rr=7680;var kd=519,dg=512,fg=513,pg=514,lf=515,mg=516,gg=517,xg=518,yg=519,zc=35044,wr=35048;var cf="300 es",Pi=2e3,Fa=2001;var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],im=1234567,fo=Math.PI/180,go=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function uf(n,e){return(n%e+e)%e}function qy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yy(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function Zy(n,e,t,i){return Pa(n,e,1-Math.exp(-t*i))}function jy(n,e=1){return e-Math.abs(uf(n,e*2)-e)}function Jy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $y(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ky(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qy(n,e){return n+Math.random()*(e-n)}function e_(n){return n*(.5-Math.random())}function t_(n){n!==void 0&&(im=n);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n_(n){return n*fo}function i_(n){return n*go}function s_(n){return(n&n-1)===0&&n!==0}function r_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function o_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ee={DEG2RAD:fo,RAD2DEG:go,generateUUID:Yi,clamp:it,euclideanModulo:uf,mapLinear:qy,inverseLerp:Yy,lerp:Pa,damp:Zy,pingpong:jy,smoothstep:Jy,smootherstep:$y,randInt:Ky,randFloat:Qy,randFloatSpread:e_,seededRandom:t_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:Nt,denormalize:Ri},ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),E=Math.atan2(w,m*_);g=Math.sin(g*E)/w,a=Math.sin(a*E)/w}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,u=u*g+p*y,h=h*g+x*y,g===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ld=new M,sm=new wt,ht=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],_=s[1],v=s[4],y=s[7],w=s[2],E=s[5],R=s[8];return r[0]=o*x+a*_+l*w,r[3]=o*g+a*v+l*E,r[6]=o*m+a*y+l*R,r[1]=c*x+u*_+h*w,r[4]=c*g+u*v+h*E,r[7]=c*m+u*y+h*R,r[2]=d*x+f*_+p*w,r[5]=d*g+f*v+p*E,r[8]=d*m+f*y+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cd.makeScale(e,t)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cd=new ht;function hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _g(){let n=xo("canvas");return n.style.display="block",n}var rm={};function yo(n){n in rm||(rm[n]=!0,console.warn(n))}function vg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var om=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){let n={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lr]:{primaries:e,whitePoint:i,transfer:Ua,toXYZ:om,fromXYZ:am,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:om,fromXYZ:am,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),n}var Ct=l_();function as(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qr,Bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=xo("canvas")),qr.width=e.width,qr.height=e.height;let s=qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(as(t[i]/255)*255):t[i]=as(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c_=0,_o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ud(s[o].image)):r.push(ud(s[o]))}else r=ud(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ud(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var u_=0,hd=new M,Dn=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Es,s=Es,r=ln,o=zn,a=qn,l=Ui,c=n.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Yi(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Qd;Dn.DEFAULT_ANISOTROPY=1;var jt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,w=(m+1)/2,E=(u+d)/4,R=(h+x)/4,C=(p+g)/4;return v>y&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=C/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=C/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Dn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _o(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Na=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),ec.subVectors(this.max,_a),Yr.subVectors(e.a,_a),Zr.subVectors(e.b,_a),jr.subVectors(e.c,_a),vs.subVectors(Zr,Yr),Ms.subVectors(jr,Zr),tr.subVectors(Yr,jr);let t=[0,-vs.z,vs.y,0,-Ms.z,Ms.y,0,-tr.z,tr.y,vs.z,0,-vs.x,Ms.z,0,-Ms.x,tr.z,0,-tr.x,-vs.y,vs.x,0,-Ms.y,Ms.x,0,-tr.y,tr.x,0];return!dd(t,Yr,Zr,jr,ec)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,Yr,Zr,jr,ec))?!1:(tc.crossVectors(vs,Ms),t=[tc.x,tc.y,tc.z],dd(t,Yr,Zr,jr,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new M,new M,new M,new M,new M,new M,new M,new M],Ei=new M,Ql=new dn,Yr=new M,Zr=new M,jr=new M,vs=new M,Ms=new M,tr=new M,_a=new M,ec=new M,tc=new M,nr=new M;function dd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){nr.fromArray(n,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var h_=new dn,va=new M,fd=new M,yi=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):h_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);let t=va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(fd)),this.expandByPoint(va.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},is=new M,pd=new M,nc=new M,bs=new M,md=new M,ic=new M,gd=new M,Cs=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pd.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(pd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nc),a=bs.dot(this.direction),l=-bs.dot(nc),c=bs.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pd).addScaledVector(nc,d),f}intersectSphere(e,t){is.subVectors(e.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,i,s,r){md.subVectors(t,e),ic.subVectors(i,e),gd.crossVectors(md,ic);let o=this.direction.dot(gd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,e);let l=a*this.direction.dot(ic.crossVectors(bs,ic));if(l<0)return null;let c=a*this.direction.dot(md.cross(bs));if(c<0||l+c>o)return null;let u=-a*bs.dot(gd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Jr.setFromMatrixColumn(e,0).length(),r=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,f_)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ss.crossVectors(i,ii),Ss.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ss.crossVectors(i,ii)),Ss.normalize(),sc.crossVectors(ii,Ss),s[0]=Ss.x,s[4]=sc.x,s[8]=ii.x,s[1]=Ss.y,s[5]=sc.y,s[9]=ii.y,s[2]=Ss.z,s[6]=sc.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],v=i[7],y=i[11],w=i[15],E=s[0],R=s[4],C=s[8],b=s[12],S=s[1],A=s[5],I=s[9],z=s[13],N=s[2],k=s[6],O=s[10],J=s[14],U=s[3],V=s[7],$=s[11],re=s[15];return r[0]=o*E+a*S+l*N+c*U,r[4]=o*R+a*A+l*k+c*V,r[8]=o*C+a*I+l*O+c*$,r[12]=o*b+a*z+l*J+c*re,r[1]=u*E+h*S+d*N+f*U,r[5]=u*R+h*A+d*k+f*V,r[9]=u*C+h*I+d*O+f*$,r[13]=u*b+h*z+d*J+f*re,r[2]=p*E+x*S+g*N+m*U,r[6]=p*R+x*A+g*k+m*V,r[10]=p*C+x*I+g*O+m*$,r[14]=p*b+x*z+g*J+m*re,r[3]=_*E+v*S+y*N+w*U,r[7]=_*R+v*A+y*k+w*V,r[11]=_*C+v*I+y*O+w*$,r[15]=_*b+v*z+y*J+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,v=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,y=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,w=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,E=t*_+i*v+s*y+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=_*R,e[1]=(x*d*r-h*g*r-x*s*f+i*g*f+h*s*m-i*d*m)*R,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=v*R,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*R,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(p*h*r-u*x*r-p*i*f+t*x*f+u*i*m-t*h*m)*R,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*R,e[12]=w*R,e[13]=(u*x*s-p*h*s+p*i*d-t*x*d-u*i*g+t*h*g)*R,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,g=o*h,m=a*h,_=l*c,v=l*u,y=l*h,w=i.x,E=i.y,R=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+y)*w,s[2]=(p-v)*w,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(g+_)*E,s[7]=0,s[8]=(p+v)*R,s[9]=(g-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Jr.set(s[0],s[1],s[2]).length(),o=Jr.set(s[4],s[5],s[6]).length(),a=Jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ai.copy(this);let c=1/r,u=1/o,h=1/a;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Pi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Fa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pi,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Pi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Fa)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Jr=new M,Ai=new St,d_=new M(0,0,0),f_=new M(1,1,1),Ss=new M,sc=new M,ii=new M,lm=new St,cm=new wt,nn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p_=0,um=new M,$r=new wt,ss=new St,rc=new M,Ma=new M,m_=new M,g_=new wt,hm=new M(1,0,0),dm=new M(0,1,0),fm=new M(0,0,1),pm={type:"added"},x_={type:"removed"},Kr={type:"childadded",child:null},xd={type:"childremoved",child:null},Wt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new nn,i=new wt,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new ht}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,t){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rc.copy(e):rc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(Ma,rc,this.up):ss.lookAt(rc,Ma,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(ss),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new M(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new M,rs=new M,yd=new M,os=new M,Qr=new M,eo=new M,mm=new M,_d=new M,vd=new M,Md=new M,bd=new jt,Sd=new jt,wd=new jt,Hn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ci.subVectors(e,t),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ci.subVectors(s,t),rs.subVectors(i,t),yd.subVectors(e,t);let o=Ci.dot(Ci),a=Ci.dot(rs),l=Ci.dot(yd),c=rs.dot(rs),u=rs.dot(yd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(o,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return bd.setScalar(0),Sd.setScalar(0),wd.setScalar(0),bd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bd,r.x),o.addScaledVector(Sd,r.y),o.addScaledVector(wd,r.z),o}static isFrontFacing(e,t,i,s){return Ci.subVectors(i,t),rs.subVectors(e,t),Ci.cross(rs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Ci.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qr.subVectors(s,i),eo.subVectors(r,i),_d.subVectors(e,i);let l=Qr.dot(_d),c=eo.dot(_d);if(l<=0&&c<=0)return t.copy(i);vd.subVectors(e,s);let u=Qr.dot(vd),h=eo.dot(vd);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qr,o);Md.subVectors(e,r);let f=Qr.dot(Md),p=eo.dot(Md);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(eo,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return mm.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(mm,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Qr,o).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Td(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=uf(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Td(o,r,e+1/3),this.g=Td(o,r,e),this.b=Td(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=Mg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Ct.workingToColorSpace(Cn.copy(this),e),Math.round(it(Cn.r*255,0,255))*65536+Math.round(it(Cn.g*255,0,255))*256+Math.round(it(Cn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=bt){Ct.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(oc);let i=Pa(ws.h,oc.h,t),s=Pa(ws.s,oc.s,t),r=Pa(ws.l,oc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new He;He.NAMES=Mg;var y_=0,Ii=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=or,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Uc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new M,ac=new ce,__=0,zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}};var za=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ba=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},v_=0,xi=new St,Ed=new Wt,to=new M,si=new dn,ba=new dn,bn=new M,ct=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?Ba:za)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(si.min,ba.min),si.expandByPoint(bn),bn.addVectors(si.max,ba.max),si.expandByPoint(bn)):(si.expandByPoint(ba.min),si.expandByPoint(ba.max))}si.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(e,c),bn.add(to)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new M,l[C]=new M;let c=new M,u=new M,h=new M,d=new ce,f=new ce,p=new ce,x=new M,g=new M;function m(C,b,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[C].add(x),a[b].add(x),a[S].add(x),l[C].add(g),l[b].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,b=_.length;C<b;++C){let S=_[C],A=S.start,I=S.count;for(let z=A,N=A+I;z<N;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new M,y=new M,w=new M,E=new M;function R(C){w.fromBufferAttribute(s,C),E.copy(w);let b=a[C];v.copy(b),v.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(E,b);let A=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,b=_.length;C<b;++C){let S=_[C],A=S.start,I=S.count;for(let z=A,N=A+I;z<N;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gm=new St,ir=new Cs,lc=new yi,xm=new M,cc=new M,uc=new M,hc=new M,Ad=new M,dc=new M,ym=new M,fc=new M,pe=class extends Wt{constructor(e=new ct,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ad.fromBufferAttribute(h,e),o?dc.addScaledVector(Ad,u):dc.addScaledVector(Ad.sub(t),u))}t.add(dc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(lc.containsPoint(ir.origin)===!1&&(ir.intersectSphere(lc,xm)===null||ir.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(gm.copy(r).invert(),ir.copy(e.ray).applyMatrix4(gm),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let E=a.getX(y),R=a.getX(y+1),C=a.getX(y+2);s=pc(this,m,e,i,c,u,h,E,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);s=pc(this,o,e,i,c,u,h,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=v;y<w;y+=3){let E=y,R=y+1,C=y+2;s=pc(this,m,e,i,c,u,h,E,R,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,y=g+2;s=pc(this,o,e,i,c,u,h,_,v,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function M_(n,e,t,i,s,r,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;fc.copy(a),fc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:n}}function pc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,cc),n.getVertexPosition(l,uc),n.getVertexPosition(c,hc);let u=M_(n,e,t,i,cc,uc,hc,ym);if(u){let h=new M;Hn.getBarycoord(ym,cc,uc,hc,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};Hn.getNormal(cc,uc,hc,d.normal),u.face=d,u.barycoord=h}return u}var Ye=class n extends ct{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(h,2));function p(x,g,m,_,v,y,w,E,R,C,b){let S=y/R,A=w/C,I=y/2,z=w/2,N=E/2,k=R+1,O=C+1,J=0,U=0,V=new M;for(let $=0;$<O;$++){let re=$*A-z;for(let de=0;de<k;de++){let Te=de*S-I;V[x]=Te*_,V[g]=re*v,V[m]=N,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[m]=E>0?1:-1,u.push(V.x,V.y,V.z),h.push(de/R),h.push(1-$/C),J+=1}}for(let $=0;$<C;$++)for(let re=0;re<R;re++){let de=d+re+k*$,Te=d+re+k*($+1),Re=d+(re+1)+k*($+1),Ue=d+(re+1)+k*$;l.push(de,Te,Ue),l.push(Te,Re,Ue),U+=6}a.addGroup(f,U,b),f+=U,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bn(n){let e={};for(let t=0;t<n.length;t++){let i=Tr(n[t]);for(let s in i)e[s]=i[s]}return e}function b_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function df(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Er={clone:Tr,merge:Bn},S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ts=new M,_m=new ce,vm=new ce,Rn=class extends Oa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,_m,vm),t.subVectors(vm,_m)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},no=-90,io=1,Vc=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(no,io,e,t);s.layers=this.layers,this.add(s);let r=new Rn(no,io,e,t);r.layers=this.layers,this.add(r);let o=new Rn(no,io,e,t);o.layers=this.layers,this.add(o);let a=new Rn(no,io,e,t);a.layers=this.layers,this.add(a);let l=new Rn(no,io,e,t);l.layers=this.layers,this.add(l);let c=new Rn(no,io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ka=class extends Dn{constructor(e=[],t=br,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gc=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ka(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:us});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=ln),new Vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Jt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var cr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bo=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new M,So=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wo=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},so,Sa=new M,ro=new M,oo=new M,ao=new ce,wa=new ce,bg=new St,mc=new M,Ta=new M,gc=new M,Mm=new ce,Cd=new ce,bm=new ce,Ga=class extends Wt{constructor(e=new wo){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Va(t,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new So(i,3,0,!1)),so.setAttribute("uv",new So(i,2,3,!1))}this.geometry=so,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),bg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-oo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;xc(mc.set(-.5,-.5,0),oo,o,ro,s,r),xc(Ta.set(.5,-.5,0),oo,o,ro,s,r),xc(gc.set(.5,.5,0),oo,o,ro,s,r),Mm.set(0,0),Cd.set(1,0),bm.set(1,1);let a=e.ray.intersectTriangle(mc,Ta,gc,!1,Sa);if(a===null&&(xc(Ta.set(-.5,.5,0),oo,o,ro,s,r),Cd.set(0,1),a=e.ray.intersectTriangle(mc,gc,Ta,!1,Sa),a===null))return;let l=e.ray.origin.distanceTo(Sa);l<e.near||l>e.far||t.push({distance:l,point:Sa.clone(),uv:Hn.getInterpolation(Sa,mc,Ta,gc,Mm,Cd,bm,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xc(n,e,t,i,s,r){ao.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(wa.x=r*ao.x-s*ao.y,wa.y=s*ao.x+r*ao.y):wa.copy(ao),n.copy(e),n.x+=wa.x,n.y+=wa.y,n.applyMatrix4(bg)}var oi=class extends Dn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Jn,u=Jn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var To=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lo=new St,Sm=new St,yc=[],wm=new dn,E_=new St,Ea=new pe,Aa=new yi,ur=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),wm.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(wm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),Aa.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lo),Sm.multiplyMatrices(i,lo),Ea.matrixWorld=Sm,Ea.raycast(e,yc);for(let o=0,a=yc.length;o<a;o++){let l=yc[o];l.instanceId=r,l.object=this,t.push(l)}yc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(s*this.count),s,this.count,Eu,Fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rd=new M,A_=new M,C_=new ht,Pn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rd.subVectors(i,t).cross(A_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||C_.getNormalMatrix(e),s=this.coplanarPoint(Rd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new yi,R_=new ce(.5,.5),_c=new M,Eo=class{constructor(e=new Pn,t=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],v=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,m-p,w-_).normalize(),s[1].setComponents(c+o,f+u,m+p,w+_).normalize(),s[2].setComponents(c+a,f+h,m+x,w+v).normalize(),s[3].setComponents(c-a,f-h,m-x,w-v).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,w-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,w-y).normalize(),t===Pi)s[5].setComponents(c+l,f+d,m+g,w+y).normalize();else if(t===Fa)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=R_.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_c.x=s.normal.x>0?e.max.x:e.min.x,_c.y=s.normal.y>0?e.max.y:e.min.y,_c.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Un=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Hc=new M,Wc=new M,Tm=new St,Ca=new Cs,vc=new yi,Pd=new M,Em=new M,Fn=class extends Wt{constructor(e=new ct,t=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Hc.fromBufferAttribute(t,s-1),Wc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Hc.distanceTo(Wc);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;Tm.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(Tm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),_=u.getX(x+1),v=Mc(this,e,Ca,l,m,_,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=Mc(this,e,Ca,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Mc(this,e,Ca,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Mc(this,e,Ca,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Hc.fromBufferAttribute(a,s),Wc.fromBufferAttribute(a,r),t.distanceSqToSegment(Hc,Wc,Pd,Em)>i)return;Pd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Pd);if(!(c<e.near||c>e.far))return{distance:c,point:Em.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Am=new M,Cm=new M,ls=class extends Fn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Am.fromBufferAttribute(t,s),Cm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Am.distanceTo(Cm);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends Fn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Di=class extends Dn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wa=class extends Dn{constructor(e,t,i=Us,s,r,o,a=Jn,l=Jn,c,u=mo,h=1){if(u!==mo&&u!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rs=class n extends ct{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=i*2+r,x=s+1,g=new M,m=new M;for(let _=0;_<=p;_++){let v=0,y=0,w=0,E=0;if(_<=i){let b=_/i,S=b*Math.PI/2;y=-u-e*Math.cos(S),w=e*Math.sin(S),E=-e*Math.cos(S),v=b*h}else if(_<=i+r){let b=(_-i)/r;y=-u+b*t,w=e,E=0,v=h+b*d}else{let b=(_-i-r)/i,S=b*Math.PI/2;y=u+e*Math.sin(S),w=e*Math.cos(S),E=e*Math.sin(S),v=h+d+b*h}let R=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/s:_===p&&(C=-.5/s);for(let b=0;b<=s;b++){let S=b/s,A=S*Math.PI*2,I=Math.sin(A),z=Math.cos(A);m.x=-w*z,m.y=y,m.z=w*I,a.push(m.x,m.y,m.z),g.set(-w*z,E,w*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(S+C,R)}if(_>0){let b=(_-1)*x;for(let S=0;S<s;S++){let A=b+S,I=b+S+1,z=_*x+S,N=_*x+S+1;o.push(A,I,z),o.push(I,N,z)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Nn=class n extends ct{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends ct{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ne(h,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(f,2));function _(){let y=new M,w=new M,E=0,R=(t-e)/i;for(let C=0;C<=r;C++){let b=[],S=C/r,A=S*(t-e)+e;for(let I=0;I<=s;I++){let z=I/s,N=z*l+a,k=Math.sin(N),O=Math.cos(N);w.x=A*k,w.y=-S*i+g,w.z=A*O,h.push(w.x,w.y,w.z),y.set(k,R,O).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-S),b.push(p++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let S=x[b][C],A=x[b+1][C],I=x[b+1][C+1],z=x[b][C+1];(e>0||b!==0)&&(u.push(S,A,z),E+=3),(t>0||b!==r-1)&&(u.push(A,I,z),E+=3)}c.addGroup(m,E,0),m+=E}function v(y){let w=p,E=new ce,R=new M,C=0,b=y===!0?e:t,S=y===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;let A=p;for(let I=0;I<=s;I++){let N=I/s*l+a,k=Math.cos(N),O=Math.sin(N);R.x=b*O,R.y=g*S,R.z=b*k,h.push(R.x,R.y,R.z),d.push(0,S,0),E.x=k*.5+.5,E.y=O*.5*S+.5,f.push(E.x,E.y),p++}for(let I=0;I<s;I++){let z=w+I,N=A+I;y===!0?u.push(N,N+1,z):u.push(N+1,N,z),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hr=class n extends Bt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class n extends ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new M,y=new M,w=new M;for(let E=0;E<t.length;E+=3)f(t[E+0],v),f(t[E+1],y),f(t[E+2],w),l(v,y,w,_)}function l(_,v,y,w){let E=w+1,R=[];for(let C=0;C<=E;C++){R[C]=[];let b=_.clone().lerp(y,C/E),S=v.clone().lerp(y,C/E),A=E-C;for(let I=0;I<=A;I++)I===0&&C===E?R[C][I]=b:R[C][I]=b.clone().lerp(S,I/A)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){let S=Math.floor(b/2);b%2===0?(d(R[C][S+1]),d(R[C+1][S]),d(R[C][S])):(d(R[C][S+1]),d(R[C+1][S+1]),d(R[C+1][S]))}}function c(_){let v=new M;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){let _=new M;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(y,1-w)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],w=o[_+4],E=Math.max(v,y,w),R=Math.min(v,y,w);E>.9&&R<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function p(){let _=new M,v=new M,y=new M,w=new M,E=new ce,R=new ce,C=new ce;for(let b=0,S=0;b<r.length;b+=9,S+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),w.copy(_).add(v).add(y).divideScalar(3);let A=g(w);x(E,S+0,_,A),x(R,S+2,v,A),x(C,S+4,y,A)}}function x(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var bc=new M,Sc=new M,Id=new M,wc=new Hn,qa=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(fo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=wc;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),wc.getNormal(Id),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){let v=(_+1)%3,y=h[_],w=h[v],E=wc[u[_]],R=wc[u[v]],C=`${y}_${w}`,b=`${w}_${y}`;b in d&&d[b]?(Id.dot(d[b].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[b]=null):C in d||(d[C]={index0:c[_],index1:c[v],normal:Id.clone()})}}for(let p in d)if(d[p]){let{index0:x,index1:g}=d[p];bc.fromBufferAttribute(a,x),Sc.fromBufferAttribute(a,g),f.push(bc.x,bc.y,bc.z),f.push(Sc.x,Sc.y,Sc.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new St;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Co=class extends ai{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xc=class extends Co{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ff(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Tc=new M,Dd=new ff,Ld=new ff,Ud=new ff,Ro=class extends ai{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Tc.subVectors(s[0],s[1]).add(s[0]),c=Tc);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Tc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Dd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),Ld.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),Ud.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Dd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ld.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ud.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Dd.calc(l),Ld.calc(l),Ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function P_(n,e){let t=1-n;return t*t*e}function I_(n,e){return 2*(1-n)*n*e}function D_(n,e){return n*n*e}function Ia(n,e,t,i){return P_(n,e)+I_(n,t)+D_(n,i)}function L_(n,e){let t=1-n;return t*t*t*e}function U_(n,e){let t=1-n;return 3*t*t*n*e}function F_(n,e){return 3*(1-n)*n*n*e}function N_(n,e){return n*n*n*e}function Da(n,e,t,i,s){return L_(n,e)+U_(n,t)+F_(n,i)+N_(n,s)}var Ya=class extends ai{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,s.x,r.x,o.x,a.x),Da(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends ai{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,s.x,r.x,o.x,a.x),Da(e,s.y,r.y,o.y,a.y),Da(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends ai{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends ai{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends ai{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ia(e,s.x,r.x,o.x),Ia(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends ai{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ia(e,s.x,r.x,o.x),Ia(e,s.y,r.y,o.y),Ia(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Rm(a,l.x,c.x,u.x,h.x),Rm(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Vd=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Ro,CubicBezierCurve:Ya,CubicBezierCurve3:qc,EllipseCurve:Co,LineCurve:Za,LineCurve3:Po,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Yc,SplineCurve:Ja}),Io=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Vd[s.type]().fromJSON(s))}return this}},$a=class extends Io{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Za(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ja(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ya(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ja(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Co(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cs=class extends $a{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $a().fromJSON(s))}return this}};function z_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Sg(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=G_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ka(r,o,t,a,l,c,0),o}function Sg(n,e,t,i,s){let r;if(s===Q_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Pm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Pm(o/i|0,n[o],n[o+1],r);return r&&Do(r,r.next)&&(el(r),r=r.next),r}function dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Do(t,t.next)||tn(t.prev,t,t.next)===0)){if(el(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ka(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Y_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?O_(n,i,s,r):B_(n)){e.push(l.i,n.i,c.i),el(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=k_(dr(n),e),Ka(n,e,t,i,s,r,2)):o===2&&V_(n,e,t,i,s,r):Ka(dr(n),e,t,i,s,r,1);break}}}function B_(n){let e=n.prev,t=n,i=n.next;if(tn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ra(s,a,r,l,o,c,p.x,p.y)&&tn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function O_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),g=Math.max(u,h,d),m=Gd(f,p,e,t,i),_=Gd(x,g,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Ra(a,u,l,h,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ra(a,u,l,h,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Ra(a,u,l,h,c,d,v.x,v.y)&&tn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ra(a,u,l,h,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Do(i,s)&&Tg(i,t,t.next,s)&&Qa(i,s)&&Qa(s,i)&&(e.push(i.i,t.i,s.i),el(t),el(t.next),t=n=s),t=t.next}while(t!==n);return dr(t)}function V_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&J_(o,a)){let l=Eg(o,a);o=dr(o,o.next),l=dr(l,l.next),Ka(o,e,t,i,s,r,0),Ka(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function G_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Sg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(j_(c))}s.sort(H_);for(let r=0;r<s.length;r++)t=W_(s[r],t);return t}function H_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function W_(n,e){let t=X_(n,e);if(!t)return e;let i=Eg(t,n);return dr(i,i.next),dr(t,t.next)}function X_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Do(n,t))return t;do{if(Do(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&wg(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);Qa(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&q_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function q_(n,e){return tn(n.prev,n,e.prev)<0&&tn(e.next,n,n.next)<0}function Y_(n,e,t,i){let s=n;do s.z===0&&(s.z=Gd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Z_(s)}function Z_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Gd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function j_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ra(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wg(n,e,t,i,s,r,o,a)}function J_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$_(n,e)&&(Qa(n,e)&&Qa(e,n)&&K_(n,e)&&(tn(n.prev,n,e.prev)||tn(n,e.prev,e))||Do(n,e)&&tn(n.prev,n,n.next)>0&&tn(e.prev,e,e.next)>0)}function tn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Do(n,e){return n.x===e.x&&n.y===e.y}function Tg(n,e,t,i){let s=Ac(tn(n,e,t)),r=Ac(tn(n,e,i)),o=Ac(tn(t,i,n)),a=Ac(tn(t,i,e));return!!(s!==r&&o!==a||s===0&&Ec(n,t,e)||r===0&&Ec(n,i,e)||o===0&&Ec(t,n,i)||a===0&&Ec(t,e,i))}function Ec(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ac(n){return n>0?1:n<0?-1:0}function $_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qa(n,e){return tn(n.prev,n,n.next)<0?tn(n,e,n.next)>=0&&tn(n,n.prev,e)>=0:tn(n,e,n.prev)<0||tn(n,n.next,e)<0}function K_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Eg(n,e){let t=Hd(n.i,n.x,n.y),i=Hd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pm(n,e,t,i){let s=Hd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function el(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Hd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Wd=class{static triangulate(e,t,i=2){return z_(e,t,i)}},qi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Im(e),Dm(i,e);let o=e.length;t.forEach(Im);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Dm(i,t[l]);let a=Wd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Im(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Dm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var fr=class n extends ct{constructor(e=new cs([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:ev,v,y=!1,w,E,R,C;m&&(v=m.getSpacedPoints(u),y=!0,d=!1,w=m.computeFrenetFrames(u,!1),E=new M,R=new M,C=new M),d||(g=0,f=0,p=0,x=0);let b=a.extractPoints(c),S=b.shape,A=b.holes;if(!qi.isClockWise(S)){S=S.reverse();for(let ue=0,te=A.length;ue<te;ue++){let Q=A[ue];qi.isClockWise(Q)&&(A[ue]=Q.reverse())}}function z(ue){let Q=10000000000000001e-36,ne=ue[0];for(let Me=1;Me<=ue.length;Me++){let xe=Me%ue.length,Ae=ue[xe],Je=Ae.x-ne.x,Ze=Ae.y-ne.y,D=Je*Je+Ze*Ze,T=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ne.x),Math.abs(ne.y)),Y=Q*T*T;if(D<=Y){ue.splice(xe,1),Me--;continue}ne=Ae}}z(S),A.forEach(z);let N=A.length,k=S;for(let ue=0;ue<N;ue++){let te=A[ue];S=S.concat(te)}function O(ue,te,Q){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(te,Q)}let J=S.length;function U(ue,te,Q){let ne,Me,xe,Ae=ue.x-te.x,Je=ue.y-te.y,Ze=Q.x-ue.x,D=Q.y-ue.y,T=Ae*Ae+Je*Je,Y=Ae*D-Je*Ze;if(Math.abs(Y)>Number.EPSILON){let ae=Math.sqrt(T),fe=Math.sqrt(Ze*Ze+D*D),le=te.x-Je/ae,Ve=te.y+Ae/ae,we=Q.x-D/fe,ze=Q.y+Ze/fe,Be=((we-le)*D-(ze-Ve)*Ze)/(Ae*D-Je*Ze);ne=le+Ae*Be-ue.x,Me=Ve+Je*Be-ue.y;let me=ne*ne+Me*Me;if(me<=2)return new ce(ne,Me);xe=Math.sqrt(me/2)}else{let ae=!1;Ae>Number.EPSILON?Ze>Number.EPSILON&&(ae=!0):Ae<-Number.EPSILON?Ze<-Number.EPSILON&&(ae=!0):Math.sign(Je)===Math.sign(D)&&(ae=!0),ae?(ne=-Je,Me=Ae,xe=Math.sqrt(T)):(ne=Ae,Me=Je,xe=Math.sqrt(T/2))}return new ce(ne/xe,Me/xe)}let V=[];for(let ue=0,te=k.length,Q=te-1,ne=ue+1;ue<te;ue++,Q++,ne++)Q===te&&(Q=0),ne===te&&(ne=0),V[ue]=U(k[ue],k[Q],k[ne]);let $=[],re,de=V.concat();for(let ue=0,te=N;ue<te;ue++){let Q=A[ue];re=[];for(let ne=0,Me=Q.length,xe=Me-1,Ae=ne+1;ne<Me;ne++,xe++,Ae++)xe===Me&&(xe=0),Ae===Me&&(Ae=0),re[ne]=U(Q[ne],Q[xe],Q[Ae]);$.push(re),de=de.concat(re)}let Te;if(g===0)Te=qi.triangulateShape(k,A);else{let ue=[],te=[];for(let Q=0;Q<g;Q++){let ne=Q/g,Me=f*Math.cos(ne*Math.PI/2),xe=p*Math.sin(ne*Math.PI/2)+x;for(let Ae=0,Je=k.length;Ae<Je;Ae++){let Ze=O(k[Ae],V[Ae],xe);oe(Ze.x,Ze.y,-Me),ne===0&&ue.push(Ze)}for(let Ae=0,Je=N;Ae<Je;Ae++){let Ze=A[Ae];re=$[Ae];let D=[];for(let T=0,Y=Ze.length;T<Y;T++){let ae=O(Ze[T],re[T],xe);oe(ae.x,ae.y,-Me),ne===0&&D.push(ae)}ne===0&&te.push(D)}}Te=qi.triangulateShape(ue,te)}let Re=Te.length,Ue=p+x;for(let ue=0;ue<J;ue++){let te=d?O(S[ue],de[ue],Ue):S[ue];y?(R.copy(w.normals[0]).multiplyScalar(te.x),E.copy(w.binormals[0]).multiplyScalar(te.y),C.copy(v[0]).add(R).add(E),oe(C.x,C.y,C.z)):oe(te.x,te.y,0)}for(let ue=1;ue<=u;ue++)for(let te=0;te<J;te++){let Q=d?O(S[te],de[te],Ue):S[te];y?(R.copy(w.normals[ue]).multiplyScalar(Q.x),E.copy(w.binormals[ue]).multiplyScalar(Q.y),C.copy(v[ue]).add(R).add(E),oe(C.x,C.y,C.z)):oe(Q.x,Q.y,h/u*ue)}for(let ue=g-1;ue>=0;ue--){let te=ue/g,Q=f*Math.cos(te*Math.PI/2),ne=p*Math.sin(te*Math.PI/2)+x;for(let Me=0,xe=k.length;Me<xe;Me++){let Ae=O(k[Me],V[Me],ne);oe(Ae.x,Ae.y,h+Q)}for(let Me=0,xe=A.length;Me<xe;Me++){let Ae=A[Me];re=$[Me];for(let Je=0,Ze=Ae.length;Je<Ze;Je++){let D=O(Ae[Je],re[Je],ne);y?oe(D.x,D.y+v[u-1].y,v[u-1].x+Q):oe(D.x,D.y,h+Q)}}}H(),K();function H(){let ue=s.length/3;if(d){let te=0,Q=J*te;for(let ne=0;ne<Re;ne++){let Me=Te[ne];F(Me[2]+Q,Me[1]+Q,Me[0]+Q)}te=u+g*2,Q=J*te;for(let ne=0;ne<Re;ne++){let Me=Te[ne];F(Me[0]+Q,Me[1]+Q,Me[2]+Q)}}else{for(let te=0;te<Re;te++){let Q=Te[te];F(Q[2],Q[1],Q[0])}for(let te=0;te<Re;te++){let Q=Te[te];F(Q[0]+J*u,Q[1]+J*u,Q[2]+J*u)}}i.addGroup(ue,s.length/3-ue,0)}function K(){let ue=s.length/3,te=0;be(k,te),te+=k.length;for(let Q=0,ne=A.length;Q<ne;Q++){let Me=A[Q];be(Me,te),te+=Me.length}i.addGroup(ue,s.length/3-ue,1)}function be(ue,te){let Q=ue.length;for(;--Q>=0;){let ne=Q,Me=Q-1;Me<0&&(Me=ue.length-1);for(let xe=0,Ae=u+g*2;xe<Ae;xe++){let Je=J*xe,Ze=J*(xe+1),D=te+ne+Je,T=te+Me+Je,Y=te+Me+Ze,ae=te+ne+Ze;Z(D,T,Y,ae)}}}function oe(ue,te,Q){l.push(ue),l.push(te),l.push(Q)}function F(ue,te,Q){ye(ue),ye(te),ye(Q);let ne=s.length/3,Me=_.generateTopUV(i,s,ne-3,ne-2,ne-1);L(Me[0]),L(Me[1]),L(Me[2])}function Z(ue,te,Q,ne){ye(ue),ye(te),ye(ne),ye(te),ye(Q),ye(ne);let Me=s.length/3,xe=_.generateSideWallUV(i,s,Me-6,Me-3,Me-2,Me-1);L(xe[0]),L(xe[1]),L(xe[3]),L(xe[1]),L(xe[2]),L(xe[3])}function ye(ue){s.push(l[ue*3+0]),s.push(l[ue*3+1]),s.push(l[ue*3+2])}function L(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return tv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vd[s.type]().fromJSON(s)),new n(i,e.options)}},ev={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-p),new ce(x,1-m)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-p),new ce(g,1-m)]}};function tv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _i=class n extends Ao{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tl=class n extends ct{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new M,d=new ce,f=new M,p=new M,x=new M,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let v=i+_*u*s,y=Math.sin(v),w=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*w,o.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);let R=l[3*E+0]*y,C=l[3*E+1],b=l[3*E+0]*w;c.push(R,C,b)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,w=y,E=y+e.length,R=y+e.length+1,C=y+1;r.push(w,E,C),r.push(R,C,E)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},vi=class n extends Ao{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Tn=class n extends ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let _=m*d-o;for(let v=0;v<c;v++){let y=v*h-r;p.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),E=_+1+c*m;f.push(v,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ps=class n extends ct{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new M,p=new ce;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,v=_,y=_+i+1,w=_+i+2,E=_+1;a.push(v,y,E),a.push(y,w,E)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nl=class n extends ct{constructor(e=new cs([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;qi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];qi.isClockWise(_)===!0&&(p[g]=_.reverse())}let x=qi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){let _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){let _=x[g],v=_[0]+h,y=_[1]+h,w=_[2]+h;i.push(v,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return nv(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function nv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Mi=class n extends ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new M,d=new M,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],v=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let E=w/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(E+y,1-v),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let v=u[m][_+1],y=u[m][_],w=u[m+1][_],E=u[m+1][_+1];(m!==0||o>0)&&f.push(v,y,E),(m!==i-1||l<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},pr=class n extends Ao{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wn=class n extends ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,h=new M,d=new M;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var il=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let p=d,x=d+f;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),_=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,_),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Lm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var sl=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var li=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zc=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jc=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var mr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends mr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bd:r=e,a=2*t-i;break;case Od:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bd:o=e,l=2*i-t;break;case Od:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let w=0;w!==a;++w)r[w]=m*o[u+w]+_*o[c+w]+v*o[l+w]+y*o[h+w];return r}},$c=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Kc=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Nc:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Nc;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&iv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Nc;var Is=class extends ci{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=La;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};Qc.prototype.ValueTypeName="color";var eu=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};eu.prototype.ValueTypeName="number";var tu=class extends mr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)wt.slerpFlat(r,0,o,c-a,o,c,l);return r}},rl=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends ci{constructor(e,t,i){super(e,t,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=La;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var nu=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};nu.prototype.ValueTypeName="vector";var Dc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},iu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ag=new iu,Lo=class{constructor(e){this.manager=e!==void 0?e:Ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=new WeakMap,su=class extends Lo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Dc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=co.get(o);h===void 0&&(h=[],co.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=xo("img");function l(){u(),t&&t(this);let h=co.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}co.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Dc.remove(`image:${e}`);let d=co.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}co.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Dc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var bi=class extends Lo{constructor(e){super(e)}load(e,t,i,s){let r=new Dn,o=new su(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ol=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},gr=class extends ol{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fd=new St,Um=new M,Fm=new M,Xd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),Fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xr=class extends Oa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qd=class extends Xd{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ru=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var pf="\\[\\]\\.:\\/",sv=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",rv="[^"+pf.replace("\\.","")+"]",ov=/((?:WC+[\/:])*)/.source.replace("WC",mf),av=/(WCOD+)?/.source.replace("WCOD",rv),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),uv=new RegExp("^"+ov+av+lv+cv+"$"),hv=["material","materials","bones","map"],Yd=class{constructor(e,t,i){let s=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(e){let t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Yd;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pE=new Float32Array(1);var Nm=new St,_r=class{constructor(e,t,i=0,s=1/0){this.ray=new Cs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(e,t=!0,i=[]){return Zd(e,this,i,t),i.sort(zm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zd(e[s],this,i,t);return i.sort(zm),i}};function zm(n,e){return n.distance-e.distance}function Zd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Zd(r[o],e,t,!0)}}var Uo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bm=new M,Rc=new M,uo=new M,ho=new M,Nd=new M,dv=new M,fv=new M,al=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bm.subVectors(e,this.start),Rc.subVectors(this.end,this.start);let i=Rc.dot(Rc),r=Rc.dot(Bm)/i;return t&&(r=it(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=dv,i=fv){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;uo.subVectors(c,a),ho.subVectors(u,l),Nd.subVectors(a,l);let h=uo.dot(uo),d=ho.dot(ho),f=ho.dot(Nd);if(h<=s&&d<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(h<=s)r=0,o=f/d,o=it(o,0,1);else{let p=uo.dot(Nd);if(d<=s)o=0,r=it(-p/h,0,1);else{let x=uo.dot(ho),g=h*d-x*x;g!==0?r=it((x*f-p*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=it(-p/h,0,1)):o>1&&(o=1,r=it((x-p)/h,0,1))}}return t.copy(a).add(uo.multiplyScalar(r)),i.copy(l).add(ho.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ll=class extends ls{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let u=new ct;u.setAttribute("position",new Ne(l,3)),u.setAttribute("color",new Ne(c,3));let h=new Un({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Pc=new dn,vr=class extends ls{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ct;r.setIndex(new zt(i,1)),r.setAttribute("position",new zt(s,3)),super(r,new Un({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Pc.setFromObject(this.object),Pc.isEmpty())return;let e=Pc.min,t=Pc.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Mr=class extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gf(n,e,t,i){let s=pv(i);switch(t){case rf:return n*e;case Eu:return n*e/s.components*s.byteLength;case Au:return n*e/s.components*s.byteLength;case af:return n*e*2/s.components*s.byteLength;case Cu:return n*e*2/s.components*s.byteLength;case of:return n*e*3/s.components*s.byteLength;case qn:return n*e*4/s.components*s.byteLength;case Ru:return n*e*4/s.components*s.byteLength;case dl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Lu:return Math.max(n,16)*Math.max(e,8)/4;case Pu:case Du:return Math.max(n,8)*Math.max(e,8)/2;case Uu:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $u:case Ku:case Qu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(n){switch(n){case Ui:case ef:return{byteLength:1,components:1};case Fo:case tf:case wi:return{byteLength:2,components:1};case wu:case Tu:return{byteLength:2,components:4};case Us:case Su:case Fi:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $g(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _v(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
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
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
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
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
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
#endif`,Uv=`#ifdef USE_BUMPMAP
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",$v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,_M=`
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sb=`float getShadowMask() {
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
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#ifdef USE_TRANSMISSION
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,Eb=`#if DEPTH_PACKING == 3200
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
}`,Ab=`#define DISTANCE
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
}`,Cb=`#define DISTANCE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Fb=`#define LAMBERT
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
}`,Nb=`#define LAMBERT
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
}`,zb=`#define MATCAP
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
}`,Bb=`#define MATCAP
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
}`,Ob=`#define NORMAL
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
}`,kb=`#define NORMAL
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
}`,Vb=`#define PHONG
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
}`,Gb=`#define PHONG
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
}`,Hb=`#define STANDARD
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
}`,Wb=`#define STANDARD
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
}`,Xb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Jb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:vv,alphahash_pars_fragment:Mv,alphamap_fragment:bv,alphamap_pars_fragment:Sv,alphatest_fragment:wv,alphatest_pars_fragment:Tv,aomap_fragment:Ev,aomap_pars_fragment:Av,batching_pars_vertex:Cv,batching_vertex:Rv,begin_vertex:Pv,beginnormal_vertex:Iv,bsdfs:Dv,iridescence_fragment:Lv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Bv,color_fragment:Ov,color_pars_fragment:kv,color_pars_vertex:Vv,color_vertex:Gv,common:Hv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:qv,displacementmap_vertex:Yv,emissivemap_fragment:Zv,emissivemap_pars_fragment:jv,colorspace_fragment:Jv,colorspace_pars_fragment:$v,envmap_fragment:Kv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:dM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:sM,fog_fragment:rM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:hM,lights_toon_fragment:fM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:MM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:TM,map_fragment:EM,map_pars_fragment:AM,map_particle_fragment:CM,map_particle_pars_fragment:RM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:IM,morphinstance_vertex:DM,morphcolor_vertex:LM,morphnormal_vertex:UM,morphtarget_pars_vertex:FM,morphtarget_vertex:NM,normal_fragment_begin:zM,normal_fragment_maps:BM,normal_pars_fragment:OM,normal_pars_vertex:kM,normal_vertex:VM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:qM,opaque_fragment:YM,packing:ZM,premultiplied_alpha_fragment:jM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:KM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:ab,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:hb,tonemapping_pars_fragment:db,transmission_fragment:fb,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:xb,worldpos_vertex:yb,background_vert:_b,background_frag:vb,backgroundCube_vert:Mb,backgroundCube_frag:bb,cube_vert:Sb,cube_frag:wb,depth_vert:Tb,depth_frag:Eb,distanceRGBA_vert:Ab,distanceRGBA_frag:Cb,equirect_vert:Rb,equirect_frag:Pb,linedashed_vert:Ib,linedashed_frag:Db,meshbasic_vert:Lb,meshbasic_frag:Ub,meshlambert_vert:Fb,meshlambert_frag:Nb,meshmatcap_vert:zb,meshmatcap_frag:Bb,meshnormal_vert:Ob,meshnormal_frag:kb,meshphong_vert:Vb,meshphong_frag:Gb,meshphysical_vert:Hb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Yb,points_frag:Zb,shadow_vert:jb,shadow_frag:Jb,sprite_vert:$b,sprite_frag:Kb},De={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ji={basic:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Bn([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Bn([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Bn([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Bn([De.common,De.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Bn([De.lights,De.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ji.physical={uniforms:Bn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var rh={r:0,b:0,g:0},Ar=new nn,Qb=new St;function e1(n,e,t,i,s,r,o){let a=new He(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,w=p(v);w===null?m(a,l):w&&w.isColor&&(m(w,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,y){let w=p(y);w&&(w.isCubeTexture||w.mapping===ul)?(u===void 0&&(u=new pe(new Ye(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Tr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(Ar)),u.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Lt,(h!==w||d!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new pe(new Tn(2,2),new wn({name:"BackgroundMaterial",uniforms:Tr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(rh,df(n)),i.buffers.color.setClear(rh.r,rh.g,rh.b,y,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:_}}function t1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(S,A,I,z,N){let k=!1,O=h(z,I,A);r!==O&&(r=O,c(r.object)),k=f(S,z,I,N),k&&p(S,z,I,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(S,A,I,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,I){let z=I.wireframe===!0,N=i[S.id];N===void 0&&(N={},i[S.id]=N);let k=N[A.id];k===void 0&&(k={},N[A.id]=k);let O=k[z];return O===void 0&&(O=d(l()),k[z]=O),O}function d(S){let A=[],I=[],z=[];for(let N=0;N<t;N++)A[N]=0,I[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,A,I,z){let N=r.attributes,k=A.attributes,O=0,J=I.getAttributes();for(let U in J)if(J[U].location>=0){let $=N[U],re=k[U];if(re===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function p(S,A,I,z){let N={},k=A.attributes,O=0,J=I.getAttributes();for(let U in J)if(J[U].location>=0){let $=k[U];$===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&($=S.instanceColor));let re={};re.attribute=$,$&&$.data&&(re.data=$.data),N[U]=re,O++}r.attributes=N,r.attributesNum=O,r.index=z}function x(){let S=r.newAttributes;for(let A=0,I=S.length;A<I;A++)S[A]=0}function g(S){m(S,0)}function m(S,A){let I=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;I[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),N[S]!==A&&(n.vertexAttribDivisor(S,A),N[S]=A)}function _(){let S=r.newAttributes,A=r.enabledAttributes;for(let I=0,z=A.length;I<z;I++)A[I]!==S[I]&&(n.disableVertexAttribArray(I),A[I]=0)}function v(S,A,I,z,N,k,O){O===!0?n.vertexAttribIPointer(S,A,I,N,k):n.vertexAttribPointer(S,A,I,z,N,k)}function y(S,A,I,z){x();let N=z.attributes,k=I.getAttributes(),O=A.defaultAttributeValues;for(let J in k){let U=k[J];if(U.location>=0){let V=N[J];if(V===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){let $=V.normalized,re=V.itemSize,de=e.get(V);if(de===void 0)continue;let Te=de.buffer,Re=de.type,Ue=de.bytesPerElement,H=Re===n.INT||Re===n.UNSIGNED_INT||V.gpuType===Su;if(V.isInterleavedBufferAttribute){let K=V.data,be=K.stride,oe=V.offset;if(K.isInstancedInterleavedBuffer){for(let F=0;F<U.locationSize;F++)m(U.location+F,K.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let F=0;F<U.locationSize;F++)g(U.location+F);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let F=0;F<U.locationSize;F++)v(U.location+F,re/U.locationSize,Re,$,be*Ue,(oe+re/U.locationSize*F)*Ue,H)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<U.locationSize;K++)m(U.location+K,V.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<U.locationSize;K++)g(U.location+K);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let K=0;K<U.locationSize;K++)v(U.location+K,re/U.locationSize,Re,$,re*Ue,re/U.locationSize*K*Ue,H)}}else if(O!==void 0){let $=O[J];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(U.location,$);break;case 3:n.vertexAttrib3fv(U.location,$);break;case 4:n.vertexAttrib4fv(U.location,$);break;default:n.vertexAttrib1fv(U.location,$)}}}}_()}function w(){C();for(let S in i){let A=i[S];for(let I in A){let z=A[I];for(let N in z)u(z[N].object),delete z[N];delete A[I]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let I in A){let z=A[I];for(let N in z)u(z[N].object),delete z[N];delete A[I]}delete i[S.id]}function R(S){for(let A in i){let I=i[A];if(I[S.id]===void 0)continue;let z=I[S.id];for(let N in z)u(z[N].object),delete z[N];delete I[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function n1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ui&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fi&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:E}}function s1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Pn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:i,v=_*4,y=m.clippingState||null;l.value=y,y=u(p,d,v,f);for(let w=0;w!==v;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function r1(n){let e=new WeakMap;function t(o,a){return a===Li?o.mapping=br:a===Mu&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Li||a===Mu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Oo=4,Cg=[.125,.215,.35,.446,.526,.582],Pr=20,xf=new xr,Rg=new He,yf=null,_f=0,vf=0,Mf=!1,Rr=(1+Math.sqrt(5))/2,Bo=1/Rr,Pg=[new M(-Rr,Bo,0),new M(Rr,Bo,0),new M(-Bo,0,Rr),new M(Bo,0,Rr),new M(0,Rr,-Bo),new M(0,Rr,Bo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],o1=new M,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=o1}=r;yf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,_f,vf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,oh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:wi,format:qn,colorSpace:lr,depthBuffer:!1},s=Ig(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a1(r)),this._blurMaterial=l1(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,xf)}_sceneToCubeUV(e,t,i,s,r){let l=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rg),h.toneMapping=hs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new Xt({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new pe(new Ye,x),m=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,m=!0):(x.color.copy(Rg),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let w=this._cubeSize;oh(s,y*w,v>2?w:0,w,w),h.setRenderTarget(s),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===br||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;oh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pg[(s-r-1)%Pg.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pr-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Pr;g>Pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);let m=[],_=0;for(let R=0;R<Pr;++R){let C=R/x,b=Math.exp(-C*C/2);m.push(b),R===0?_+=b:R<g&&(_+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let y=this._sizeLods[s],w=3*y*(s>v-Oo?s-v+Oo:0),E=4*(this._cubeSize-y);oh(t,w,E,3*y,2*y),l.setRenderTarget(t),l.render(h,xf)}};function a1(n){let e=[],t=[],i=[],s=n,r=n-Oo+1+Cg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Oo?l=Cg[o-n+Oo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,C=E>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(b,x*p*E),v.set(d,g*p*E);let S=[E,E,E,E,E,E];y.set(S,m*p*E)}let w=new ct;w.setAttribute("position",new zt(_,x)),w.setAttribute("uv",new zt(v,g)),w.setAttribute("faceIndex",new zt(y,m)),e.push(w),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ig(n,e,t){let i=new Ln(n,e,t);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function l1(n,e,t){let i=new Float32Array(Pr),s=new M(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:If(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Dg(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Lg(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}function c1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Li||l===Mu,u=l===br||l===Sr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vo(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Vo(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function u1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h1(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let w=_[v+0],E=_[v+1],R=_[v+2];d.push(w,E,E,R,R,w)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let w=v+0,E=v+1,R=v+2;d.push(w,E,E,R,R,w)}}else return;let g=new(hf(d)?Ba:za)(d,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function d1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function h(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function f1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function p1(n,e,t){let i=new WeakMap,s=new jt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*h),R=new Na(E,y,w,h);R.type=Fi,R.needsUpdate=!0;let C=v*4;for(let S=0;S<h;S++){let A=g[S],I=m[S],z=_[S],N=y*w*4*S;for(let k=0;k<A.count;k++){let O=k*C;f===!0&&(s.fromBufferAttribute(A,k),E[N+O+0]=s.x,E[N+O+1]=s.y,E[N+O+2]=s.z,E[N+O+3]=0),p===!0&&(s.fromBufferAttribute(I,k),E[N+O+4]=s.x,E[N+O+5]=s.y,E[N+O+6]=s.z,E[N+O+7]=0),x===!0&&(s.fromBufferAttribute(z,k),E[N+O+8]=s.x,E[N+O+9]=s.y,E[N+O+10]=s.z,E[N+O+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ce(y,w)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function m1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Kg=new Dn,Ug=new Wa(1,1),Qg=new Na,e0=new kc,t0=new ka,Fg=[],Ng=[],zg=new Float32Array(16),Bg=new Float32Array(9),Og=new Float32Array(4);function Go(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fg[s];if(r===void 0&&(r=new Float32Array(s),Fg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ch(n,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function v1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;Og.set(i),n.uniformMatrix2fv(this.addr,!1,Og),yn(t,i)}}function M1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;Bg.set(i),n.uniformMatrix3fv(this.addr,!1,Bg),yn(t,i)}}function b1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;zg.set(i),n.uniformMatrix4fv(this.addr,!1,zg),yn(t,i)}}function S1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function R1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function I1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ug.compareFunction=lf,r=Ug):r=Kg,t.setTexture2D(e||r,s)}function D1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||e0,s)}function L1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||t0,s)}function U1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qg,s)}function F1(n){switch(n){case 5126:return g1;case 35664:return x1;case 35665:return y1;case 35666:return _1;case 35674:return v1;case 35675:return M1;case 35676:return b1;case 5124:case 35670:return S1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return E1;case 5125:return A1;case 36294:return C1;case 36295:return R1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return U1}}function N1(n,e){n.uniform1fv(this.addr,e)}function z1(n,e){let t=Go(e,this.size,2);n.uniform2fv(this.addr,t)}function B1(n,e){let t=Go(e,this.size,3);n.uniform3fv(this.addr,t)}function O1(n,e){let t=Go(e,this.size,4);n.uniform4fv(this.addr,t)}function k1(n,e){let t=Go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V1(n,e){let t=Go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G1(n,e){let t=Go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H1(n,e){n.uniform1iv(this.addr,e)}function W1(n,e){n.uniform2iv(this.addr,e)}function X1(n,e){n.uniform3iv(this.addr,e)}function q1(n,e){n.uniform4iv(this.addr,e)}function Y1(n,e){n.uniform1uiv(this.addr,e)}function Z1(n,e){n.uniform2uiv(this.addr,e)}function j1(n,e){n.uniform3uiv(this.addr,e)}function J1(n,e){n.uniform4uiv(this.addr,e)}function $1(n,e,t){let i=this.cache,s=e.length,r=ch(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kg,r[o])}function K1(n,e,t){let i=this.cache,s=e.length,r=ch(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||e0,r[o])}function Q1(n,e,t){let i=this.cache,s=e.length,r=ch(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||t0,r[o])}function eS(n,e,t){let i=this.cache,s=e.length,r=ch(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qg,r[o])}function tS(n){switch(n){case 5126:return N1;case 35664:return z1;case 35665:return B1;case 35666:return O1;case 35674:return k1;case 35675:return V1;case 35676:return G1;case 5124:case 35670:return H1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return Z1;case 36295:return j1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return eS}}var Sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F1(t.type)}},wf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}},Tf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bf=/(\w+)(\])?(\[|\.)?/g;function kg(n,e){n.seq.push(e),n.map[e.id]=e}function nS(n,e,t){let i=n.name,s=i.length;for(bf.lastIndex=0;;){let r=bf.exec(i),o=bf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kg(t,c===void 0?new Sf(a,n,e):new wf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Tf(a),kg(t,h)),t=h}}}var ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nS(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iS=37297,sS=0;function rS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gg=new ht;function oS(n){Ct._getMatrix(Gg,Ct.workingColorSpace,n);let e=`mat3( ${Gg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Ua:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rS(n.getShaderSource(e),a)}else return r}function aS(n,e){let t=oS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lS(n,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="Cineon";break;case xu:t="ACESFilmic";break;case _u:t="AgX";break;case vu:t="Neutral";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ah=new M;function cS(){Ct.getLuminanceCoefficients(ah);let n=ah.x.toFixed(4),e=ah.y.toFixed(4),t=ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function hS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gl(n){return n!==""}function Wg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(n){return n.replace(fS,mS)}var pS=new Map;function mS(n,e){let t=dt[e];if(t===void 0){let i=pS.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ef(t)}var gS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(n){return n.replace(gS,xS)}function xS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function yS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function _S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function MS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case og:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function bS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=yS(t),c=_S(t),u=vS(t),h=MS(t),d=bS(t),f=uS(t),p=hS(r),x=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),m.length>0&&(m+=`
`)):(g=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),m=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hs?"#define TONE_MAPPING":"",t.toneMapping!==hs?dt.tonemapping_pars_fragment:"",t.toneMapping!==hs?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,aS("linearToOutputTexel",t.outputColorSpace),cS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),o=Ef(o),o=Wg(o,t),o=Xg(o,t),a=Ef(a),a=Wg(a,t),a=Xg(a,t),o=qg(o),a=qg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,y=_+m+a,w=Vg(s,s.VERTEX_SHADER,v),E=Vg(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(E)||"",k=I.trim(),O=z.trim(),J=N.trim(),U=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,E);else{let $=Hg(s,w,"vertex"),re=Hg(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+$+`
`+re)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||J==="")&&(V=!1);V&&(A.diagnostics={runnable:U,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:J,prefix:m}})}s.deleteShader(w),s.deleteShader(E),C=new ko(s,x),b=dS(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,iS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var wS=0,Af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Cf(e),t.set(e,i)),i}},Cf=class{constructor(e){this.id=wS++,this.code=e,this.usedTimes=0}};function TS(n,e,t,i,s,r,o){let a=new vo,l=new Af,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,A,I,z){let N=I.fog,k=z.geometry,O=b.isMeshStandardMaterial?I.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),U=J&&J.mapping===ul?J.image.height:null,V=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=$!==void 0?$.length:0,de=0;k.morphAttributes.position!==void 0&&(de=1),k.morphAttributes.normal!==void 0&&(de=2),k.morphAttributes.color!==void 0&&(de=3);let Te,Re,Ue,H;if(V){let ge=Ji[V];Te=ge.vertexShader,Re=ge.fragmentShader}else Te=b.vertexShader,Re=b.fragmentShader,l.update(b),Ue=l.getVertexShaderID(b),H=l.getFragmentShaderID(b);let K=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),oe=z.isInstancedMesh===!0,F=z.isBatchedMesh===!0,Z=!!b.map,ye=!!b.matcap,L=!!J,ue=!!b.aoMap,te=!!b.lightMap,Q=!!b.bumpMap,ne=!!b.normalMap,Me=!!b.displacementMap,xe=!!b.emissiveMap,Ae=!!b.metalnessMap,Je=!!b.roughnessMap,Ze=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,Y=b.iridescence>0,ae=b.sheen>0,fe=b.transmission>0,le=Ze&&!!b.anisotropyMap,Ve=D&&!!b.clearcoatMap,we=D&&!!b.clearcoatNormalMap,ze=D&&!!b.clearcoatRoughnessMap,Be=Y&&!!b.iridescenceMap,me=Y&&!!b.iridescenceThicknessMap,Pe=ae&&!!b.sheenColorMap,$e=ae&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Ie=!!b.specularColorMap,rt=!!b.specularIntensityMap,G=fe&&!!b.transmissionMap,_e=fe&&!!b.thicknessMap,Ce=!!b.gradientMap,Oe=!!b.alphaMap,ve=b.alphaTest>0,he=!!b.alphaHash,We=!!b.extensions,W=hs;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(W=n.toneMapping);let j={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:Re,defines:b.defines,customVertexShaderID:Ue,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:F,batchingColor:F&&z._colorsTexture!==null,instancing:oe,instancingColor:oe&&z.instanceColor!==null,instancingMorph:oe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lr,alphaToCoverage:!!b.alphaToCoverage,map:Z,matcap:ye,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:U,aoMap:ue,lightMap:te,bumpMap:Q,normalMap:ne,displacementMap:d&&Me,emissiveMap:xe,normalMapObjectSpace:ne&&b.normalMapType===hg,normalMapTangentSpace:ne&&b.normalMapType===sh,metalnessMap:Ae,roughnessMap:Je,anisotropy:Ze,anisotropyMap:le,clearcoat:D,clearcoatMap:Ve,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:T,iridescence:Y,iridescenceMap:Be,iridescenceThicknessMap:me,sheen:ae,sheenColorMap:Pe,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:rt,transmission:fe,transmissionMap:G,thicknessMap:_e,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===or&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ve,alphaHash:he,combine:b.combine,mapUv:Z&&x(b.map.channel),aoMapUv:ue&&x(b.aoMap.channel),lightMapUv:te&&x(b.lightMap.channel),bumpMapUv:Q&&x(b.bumpMap.channel),normalMapUv:ne&&x(b.normalMap.channel),displacementMapUv:Me&&x(b.displacementMap.channel),emissiveMapUv:xe&&x(b.emissiveMap.channel),metalnessMapUv:Ae&&x(b.metalnessMap.channel),roughnessMapUv:Je&&x(b.roughnessMap.channel),anisotropyMapUv:le&&x(b.anisotropyMap.channel),clearcoatMapUv:Ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(b.sheenRoughnessMap.channel),specularMapUv:Ge&&x(b.specularMap.channel),specularColorMapUv:Ie&&x(b.specularColorMap.channel),specularIntensityMapUv:rt&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:_e&&x(b.thicknessMap.channel),alphaMapUv:Oe&&x(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ne||Ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Z||Oe),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:W,decodeVideoTexture:Z&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||F)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=p[b.type],A;if(S){let I=Ji[S];A=Er.clone(I.uniforms)}else A=b.uniforms;return A}function w(b,S){let A;for(let I=0,z=u.length;I<z;I++){let N=u[I];if(N.cacheKey===S){A=N,++A.usedTimes;break}}return A===void 0&&(A=new SS(n,S,b,r),u.push(A)),A}function E(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:C}}function ES(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function AS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||AS),i.length>1&&i.sort(d||Zg),s.length>1&&s.sort(d||Zg)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function CS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new jg,n.set(i,[o])):s>=r.length?(o=new jg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new He};break;case"SpotLight":t={position:new M,direction:new M,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function PS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var IS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LS(n){let e=new RS,t=PS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new St,o=new St;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,v=0,y=0,w=0,E=0,R=0;c.sort(DS);for(let b=0,S=c.length;b<S;b++){let A=c[b],I=A.color,z=A.intensity,N=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*z,h+=I.g*z,d+=I.b*z;else if(A.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(A.sh.coefficients[O],z);R++}else if(A.isDirectionalLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,U=t.get(A);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.directionalShadow[f]=U,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=A.shadow.matrix,_++}i.directional[f]=O,f++}else if(A.isSpotLight){let O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(I).multiplyScalar(z),O.distance=N,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,i.spot[x]=O;let J=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,J.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[x]=J.matrix,A.castShadow){let U=t.get(A);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=k,y++}x++}else if(A.isRectAreaLight){let O=e.get(A);O.color.copy(I).multiplyScalar(z),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=O,g++}else if(A.isPointLight){let O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let J=A.shadow,U=t.get(A);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=A.shadow.matrix,v++}i.point[p]=O,p++}else if(A.isHemisphereLight){let O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(z),O.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[m]=O,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,C.directionalLength=f,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=R,i.version=IS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Jg(n){let e=new LS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function US(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jg(n),e.set(s,[a])):r>=o.length?(a=new Jg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
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
}`;function zS(n,e,t){let i=new Eo,s=new ce,r=new ce,o=new jt,a=new Zc({depthPacking:ug}),l=new jc,c={},u=t.maxTextureSize,h={[ri]:Xn,[Xn]:ri,[cn]:cn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:FS,fragmentShader:NS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ct;p.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jd;let m=this.type;this.render=function(E,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(us),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=m!==ji&&this.type===ji,N=m===ji&&this.type!==ji;for(let k=0,O=E.length;k<O;k++){let J=E[k],U=J.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let V=U.getFrameExtents();if(s.multiply(V),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||z===!0||N===!0){let re=this.type!==ji?{minFilter:Jn,magFilter:Jn}:{};U.map!==null&&U.map.dispose(),U.map=new Ln(s.x,s.y,re),U.map.texture.name=J.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let $=U.getViewportCount();for(let re=0;re<$;re++){let de=U.getViewport(re);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),I.viewport(o),U.updateMatrices(J,re),i=U.getFrustum(),y(R,C,U.camera,J,this.type)}U.isPointLightShadow!==!0&&this.type===ji&&_(U,C),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,A)};function _(E,R){let C=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ln(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,C,f,x,null)}function v(E,R,C,b){let S=null,A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)S=A;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=S.uuid,z=R.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let k=N[z];k===void 0&&(k=S.clone(),N[z]=k,R.addEventListener("dispose",w)),S=k}if(S.visible=R.visible,S.wireframe=R.wireframe,b===ji?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=n.properties.get(S);I.light=C}return S}function y(E,R,C,b,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ji)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let z=e.update(E),N=E.material;if(Array.isArray(N)){let k=z.groups;for(let O=0,J=k.length;O<J;O++){let U=k[O],V=N[U.materialIndex];if(V&&V.visible){let $=v(E,V,b,S);E.onBeforeShadow(n,E,R,C,z,$,U),n.renderBufferDirect(C,null,z,$,E,U),E.onAfterShadow(n,E,R,C,z,$,U)}}}else if(N.visible){let k=v(E,N,b,S);E.onBeforeShadow(n,E,R,C,z,k,null),n.renderBufferDirect(C,null,z,k,E,null),E.onAfterShadow(n,E,R,C,z,k,null)}}let I=E.children;for(let z=0,N=I.length;z<N;z++)y(I[z],R,C,b,S)}function w(E){E.target.removeEventListener("dispose",w);for(let C in c){let b=c[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var BS={[ou]:au,[lu]:hu,[cu]:du,[ar]:uu,[au]:ou,[hu]:lu,[du]:cu,[uu]:ar};function OS(n,e){function t(){let G=!1,_e=new jt,Ce=null,Oe=new jt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!G&&(n.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){G=ve},setClear:function(ve,he,We,W,j){j===!0&&(ve*=W,he*=W,We*=W),_e.set(ve,he,We,W),Oe.equals(_e)===!1&&(n.clearColor(ve,he,We,W),Oe.copy(_e))},reset:function(){G=!1,Ce=null,Oe.set(-1,0,0,0)}}}function i(){let G=!1,_e=!1,Ce=null,Oe=null,ve=null;return{setReversed:function(he){if(_e!==he){let We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),_e=he;let W=ve;ve=null,this.setClear(W)}},getReversed:function(){return _e},setTest:function(he){he?K(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(he){Ce!==he&&!G&&(n.depthMask(he),Ce=he)},setFunc:function(he){if(_e&&(he=BS[he]),Oe!==he){switch(he){case ou:n.depthFunc(n.NEVER);break;case au:n.depthFunc(n.ALWAYS);break;case lu:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case cu:n.depthFunc(n.EQUAL);break;case uu:n.depthFunc(n.GEQUAL);break;case hu:n.depthFunc(n.GREATER);break;case du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=he}},setLocked:function(he){G=he},setClear:function(he){ve!==he&&(_e&&(he=1-he),n.clearDepth(he),ve=he)},reset:function(){G=!1,Ce=null,Oe=null,ve=null,_e=!1}}}function s(){let G=!1,_e=null,Ce=null,Oe=null,ve=null,he=null,We=null,W=null,j=null;return{setTest:function(ge){G||(ge?K(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ge){_e!==ge&&!G&&(n.stencilMask(ge),_e=ge)},setFunc:function(ge,Xe,Fe){(Ce!==ge||Oe!==Xe||ve!==Fe)&&(n.stencilFunc(ge,Xe,Fe),Ce=ge,Oe=Xe,ve=Fe)},setOp:function(ge,Xe,Fe){(he!==ge||We!==Xe||W!==Fe)&&(n.stencilOp(ge,Xe,Fe),he=ge,We=Xe,W=Fe)},setLocked:function(ge){G=ge},setClear:function(ge){j!==ge&&(n.clearStencil(ge),j=ge)},reset:function(){G=!1,_e=null,Ce=null,Oe=null,ve=null,he=null,We=null,W=null,j=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,w=null,E=null,R=new He(0,0,0),C=0,b=!1,S=null,A=null,I=null,z=null,N=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=J>=1):U.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=J>=2);let V=null,$={},re=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Te=new jt().fromArray(re),Re=new jt().fromArray(de);function Ue(G,_e,Ce,Oe){let ve=new Uint8Array(4),he=n.createTexture();n.bindTexture(G,he),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<Ce;We++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(_e+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return he}let H={};H[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(ar),Q(!1),ne(jd),K(n.CULL_FACE),ue(us);function K(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function be(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function oe(G,_e){return h[G]!==_e?(n.bindFramebuffer(G,_e),h[G]=_e,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_e),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function F(G,_e){let Ce=f,Oe=!1;if(G){Ce=d.get(_e),Ce===void 0&&(Ce=[],d.set(_e,Ce));let ve=G.textures;if(Ce.length!==ve.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let he=0,We=ve.length;he<We;he++)Ce[he]=n.COLOR_ATTACHMENT0+he;Ce.length=ve.length,Oe=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Ce)}function Z(G){return p!==G?(n.useProgram(G),p=G,!0):!1}let ye={[As]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};ye[Xm]=n.MIN,ye[qm]=n.MAX;let L={[Ym]:n.ZERO,[Zm]:n.ONE,[jm]:n.SRC_COLOR,[Lc]:n.SRC_ALPHA,[tg]:n.SRC_ALPHA_SATURATE,[Qm]:n.DST_COLOR,[$m]:n.DST_ALPHA,[Jm]:n.ONE_MINUS_SRC_COLOR,[Uc]:n.ONE_MINUS_SRC_ALPHA,[eg]:n.ONE_MINUS_DST_COLOR,[Km]:n.ONE_MINUS_DST_ALPHA,[ng]:n.CONSTANT_COLOR,[ig]:n.ONE_MINUS_CONSTANT_COLOR,[sg]:n.CONSTANT_ALPHA,[rg]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(G,_e,Ce,Oe,ve,he,We,W,j,ge){if(G===us){x===!0&&(be(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),G!==Gm){if(G!==g||ge!==b){if((m!==As||y!==As)&&(n.blendEquation(n.FUNC_ADD),m=As,y=As),ge)switch(G){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case $d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $d:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,v=null,w=null,E=null,R.set(0,0,0),C=0,g=G,b=ge}return}ve=ve||_e,he=he||Ce,We=We||Oe,(_e!==m||ve!==y)&&(n.blendEquationSeparate(ye[_e],ye[ve]),m=_e,y=ve),(Ce!==_||Oe!==v||he!==w||We!==E)&&(n.blendFuncSeparate(L[Ce],L[Oe],L[he],L[We]),_=Ce,v=Oe,w=he,E=We),(W.equals(R)===!1||j!==C)&&(n.blendColor(W.r,W.g,W.b,j),R.copy(W),C=j),g=G,b=!1}function te(G,_e){G.side===cn?be(n.CULL_FACE):K(n.CULL_FACE);let Ce=G.side===Xn;_e&&(Ce=!Ce),Q(Ce),G.blending===or&&G.transparent===!1?ue(us):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Oe=G.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function ne(G){G!==Om?(K(n.CULL_FACE),G!==A&&(G===jd?n.cullFace(n.BACK):G===km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),A=G}function Me(G){G!==I&&(O&&n.lineWidth(G),I=G)}function xe(G,_e,Ce){G?(K(n.POLYGON_OFFSET_FILL),(z!==_e||N!==Ce)&&(n.polygonOffset(_e,Ce),z=_e,N=Ce)):be(n.POLYGON_OFFSET_FILL)}function Ae(G){G?K(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Je(G){G===void 0&&(G=n.TEXTURE0+k-1),V!==G&&(n.activeTexture(G),V=G)}function Ze(G,_e,Ce){Ce===void 0&&(V===null?Ce=n.TEXTURE0+k-1:Ce=V);let Oe=$[Ce];Oe===void 0&&(Oe={type:void 0,texture:void 0},$[Ce]=Oe),(Oe.type!==G||Oe.texture!==_e)&&(V!==Ce&&(n.activeTexture(Ce),V=Ce),n.bindTexture(G,_e||H[G]),Oe.type=G,Oe.texture=_e)}function D(){let G=$[V];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){Te.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Te.copy(G))}function $e(G){Re.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Re.copy(G))}function Ge(G,_e){let Ce=c.get(_e);Ce===void 0&&(Ce=new WeakMap,c.set(_e,Ce));let Oe=Ce.get(G);Oe===void 0&&(Oe=n.getUniformBlockIndex(_e,G.name),Ce.set(G,Oe))}function Ie(G,_e){let Oe=c.get(_e).get(G);l.get(_e)!==Oe&&(n.uniformBlockBinding(_e,Oe,G.__bindingPointIndex),l.set(_e,Oe))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},V=null,$={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,w=null,E=null,R=new He(0,0,0),C=0,b=!1,S=null,A=null,I=null,z=null,N=null,Te.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:be,bindFramebuffer:oe,drawBuffers:F,useProgram:Z,setBlending:ue,setMaterial:te,setFlipSided:Q,setCullFace:ne,setLineWidth:Me,setPolygonOffset:xe,setScissorTest:Ae,activeTexture:Je,bindTexture:Ze,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:Be,texImage3D:me,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:we,texStorage3D:ze,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:Ve,scissor:Pe,viewport:$e,reset:rt}}function kS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,T){return f?new OffscreenCanvas(D,T):xo("canvas")}function x(D,T,Y){let ae=1,fe=Ze(D);if((fe.width>Y||fe.height>Y)&&(ae=Y/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let le=Math.floor(ae*fe.width),Ve=Math.floor(ae*fe.height);h===void 0&&(h=p(le,Ve));let we=T?p(le,Ve):h;return we.width=le,we.height=Ve,we.getContext("2d").drawImage(D,0,0,le,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Ve+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(D,T,Y,ae,fe=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=T;if(T===n.RED&&(Y===n.FLOAT&&(le=n.R32F),Y===n.HALF_FLOAT&&(le=n.R16F),Y===n.UNSIGNED_BYTE&&(le=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.R8UI),Y===n.UNSIGNED_SHORT&&(le=n.R16UI),Y===n.UNSIGNED_INT&&(le=n.R32UI),Y===n.BYTE&&(le=n.R8I),Y===n.SHORT&&(le=n.R16I),Y===n.INT&&(le=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(le=n.RG32F),Y===n.HALF_FLOAT&&(le=n.RG16F),Y===n.UNSIGNED_BYTE&&(le=n.RG8)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RG8UI),Y===n.UNSIGNED_SHORT&&(le=n.RG16UI),Y===n.UNSIGNED_INT&&(le=n.RG32UI),Y===n.BYTE&&(le=n.RG8I),Y===n.SHORT&&(le=n.RG16I),Y===n.INT&&(le=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(le=n.RGB16UI),Y===n.UNSIGNED_INT&&(le=n.RGB32UI),Y===n.BYTE&&(le=n.RGB8I),Y===n.SHORT&&(le=n.RGB16I),Y===n.INT&&(le=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),Y===n.UNSIGNED_INT&&(le=n.RGBA32UI),Y===n.BYTE&&(le=n.RGBA8I),Y===n.SHORT&&(le=n.RGBA16I),Y===n.INT&&(le=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),T===n.RGBA){let Ve=fe?Ua:Ct.getTransfer(ae);Y===n.FLOAT&&(le=n.RGBA32F),Y===n.HALF_FLOAT&&(le=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(le=Ve===Lt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(D,T){let Y;return D?T===null||T===Us||T===No?Y=n.DEPTH24_STENCIL8:T===Fi?Y=n.DEPTH32F_STENCIL8:T===Fo&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===No?Y=n.DEPTH_COMPONENT24:T===Fi?Y=n.DEPTH_COMPONENT32F:T===Fo&&(Y=n.DEPTH_COMPONENT16),Y}function w(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Jn&&D.minFilter!==ln?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){let T=D.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&u.delete(T)}function R(D){let T=D.target;T.removeEventListener("dispose",R),S(T)}function C(D){let T=i.get(D);if(T.__webglInit===void 0)return;let Y=D.source,ae=d.get(Y);if(ae){let fe=ae[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(D),Object.keys(ae).length===0&&d.delete(Y)}i.remove(D)}function b(D){let T=i.get(D);n.deleteTexture(T.__webglTexture);let Y=D.source,ae=d.get(Y);delete ae[T.__cacheKey],o.memory.textures--}function S(D){let T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let fe=0;fe<T.__webglFramebuffer[ae].length;fe++)n.deleteFramebuffer(T.__webglFramebuffer[ae][fe]);else n.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)n.deleteFramebuffer(T.__webglFramebuffer[ae]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Y=D.textures;for(let ae=0,fe=Y.length;ae<fe;ae++){let le=i.get(Y[ae]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(Y[ae])}i.remove(D)}let A=0;function I(){A=0}function z(){let D=A;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),A+=1,D}function N(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function k(D,T){let Y=i.get(D);if(D.isVideoTexture&&Ae(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){let ae=D.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(Y,D,T);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function O(D,T){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){H(Y,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function J(D,T){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){H(Y,D,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function U(D,T){let Y=i.get(D);if(D.version>0&&Y.__version!==D.version){K(Y,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}let V={[In]:n.REPEAT,[Es]:n.CLAMP_TO_EDGE,[Fc]:n.MIRRORED_REPEAT},$={[Jn]:n.NEAREST,[lg]:n.NEAREST_MIPMAP_NEAREST,[hl]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[bu]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},re={[dg]:n.NEVER,[yg]:n.ALWAYS,[fg]:n.LESS,[lf]:n.LEQUAL,[pg]:n.EQUAL,[xg]:n.GEQUAL,[mg]:n.GREATER,[gg]:n.NOTEQUAL};function de(D,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ln||T.magFilter===bu||T.magFilter===hl||T.magFilter===zn||T.minFilter===ln||T.minFilter===bu||T.minFilter===hl||T.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,V[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,V[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,V[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Jn||T.minFilter!==hl&&T.minFilter!==zn||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Te(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));let ae=T.source,fe=d.get(ae);fe===void 0&&(fe={},d.set(ae,fe));let le=N(T);if(le!==D.__cacheKey){fe[le]===void 0&&(fe[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),fe[le].usedTimes++;let Ve=fe[D.__cacheKey];Ve!==void 0&&(fe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(T)),D.__cacheKey=le,D.__webglTexture=fe[le].texture}return Y}function Re(D,T,Y){return Math.floor(Math.floor(D/Y)/T)}function Ue(D,T,Y,ae){let le=D.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,ae,T.data);else{le.sort((me,Pe)=>me.start-Pe.start);let Ve=0;for(let me=1;me<le.length;me++){let Pe=le[Ve],$e=le[me],Ge=Pe.start+Pe.count,Ie=Re($e.start,T.width,4),rt=Re(Pe.start,T.width,4);$e.start<=Ge+1&&Ie===rt&&Re($e.start+$e.count-1,T.width,4)===Ie?Pe.count=Math.max(Pe.count,$e.start+$e.count-Pe.start):(++Ve,le[Ve]=$e)}le.length=Ve+1;let we=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let me=0,Pe=le.length;me<Pe;me++){let $e=le[me],Ge=Math.floor($e.start/4),Ie=Math.ceil($e.count/4),rt=Ge%T.width,G=Math.floor(Ge/T.width),_e=Ie,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,rt,G,_e,Ce,Y,ae,T.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,we),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function H(D,T,Y){let ae=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=n.TEXTURE_3D);let fe=Te(D,T),le=T.source;t.bindTexture(ae,D.__webglTexture,n.TEXTURE0+Y);let Ve=i.get(le);if(le.version!==Ve.__version||fe===!0){t.activeTexture(n.TEXTURE0+Y);let we=Ct.getPrimaries(Ct.workingColorSpace),ze=T.colorSpace===ds?null:Ct.getPrimaries(T.colorSpace),Be=T.colorSpace===ds||we===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=x(T.image,!1,s.maxTextureSize);me=Je(T,me);let Pe=r.convert(T.format,T.colorSpace),$e=r.convert(T.type),Ge=v(T.internalFormat,Pe,$e,T.colorSpace,T.isVideoTexture);de(ae,T);let Ie,rt=T.mipmaps,G=T.isVideoTexture!==!0,_e=Ve.__version===void 0||fe===!0,Ce=le.dataReady,Oe=w(T,me);if(T.isDepthTexture)Ge=y(T.format===zo,T.type),_e&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ge,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ge,me.width,me.height,0,Pe,$e,null));else if(T.isDataTexture)if(rt.length>0){G&&_e&&t.texStorage2D(n.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let ve=0,he=rt.length;ve<he;ve++)Ie=rt[ve],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,$e,Ie.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Pe,$e,Ie.data);T.generateMipmaps=!1}else G?(_e&&t.texStorage2D(n.TEXTURE_2D,Oe,Ge,me.width,me.height),Ce&&Ue(T,me,Pe,$e)):t.texImage2D(n.TEXTURE_2D,0,Ge,me.width,me.height,0,Pe,$e,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ge,rt[0].width,rt[0].height,me.depth);for(let ve=0,he=rt.length;ve<he;ve++)if(Ie=rt[ve],T.format!==qn)if(Pe!==null)if(G){if(Ce)if(T.layerUpdates.size>0){let We=gf(Ie.width,Ie.height,T.format,T.type);for(let W of T.layerUpdates){let j=Ie.data.subarray(W*We/Ie.data.BYTES_PER_ELEMENT,(W+1)*We/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,W,Ie.width,Ie.height,1,Pe,j)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,me.depth,Pe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,me.depth,Pe,$e,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,Ie.width,Ie.height,me.depth,0,Pe,$e,Ie.data)}else{G&&_e&&t.texStorage2D(n.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let ve=0,he=rt.length;ve<he;ve++)Ie=rt[ve],T.format!==qn?Pe!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Pe,$e,Ie.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,Ie.width,Ie.height,0,Pe,$e,Ie.data)}else if(T.isDataArrayTexture)if(G){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ge,me.width,me.height,me.depth),Ce)if(T.layerUpdates.size>0){let ve=gf(me.width,me.height,T.format,T.type);for(let he of T.layerUpdates){let We=me.data.subarray(he*ve/me.data.BYTES_PER_ELEMENT,(he+1)*ve/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,me.width,me.height,1,Pe,$e,We)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,$e,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,me.width,me.height,me.depth,0,Pe,$e,me.data);else if(T.isData3DTexture)G?(_e&&t.texStorage3D(n.TEXTURE_3D,Oe,Ge,me.width,me.height,me.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,$e,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,me.width,me.height,me.depth,0,Pe,$e,me.data);else if(T.isFramebufferTexture){if(_e)if(G)t.texStorage2D(n.TEXTURE_2D,Oe,Ge,me.width,me.height);else{let ve=me.width,he=me.height;for(let We=0;We<Oe;We++)t.texImage2D(n.TEXTURE_2D,We,Ge,ve,he,0,Pe,$e,null),ve>>=1,he>>=1}}else if(rt.length>0){if(G&&_e){let ve=Ze(rt[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ge,ve.width,ve.height)}for(let ve=0,he=rt.length;ve<he;ve++)Ie=rt[ve],G?Ce&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe,$e,Ie):t.texImage2D(n.TEXTURE_2D,ve,Ge,Pe,$e,Ie);T.generateMipmaps=!1}else if(G){if(_e){let ve=Ze(me);t.texStorage2D(n.TEXTURE_2D,Oe,Ge,ve.width,ve.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,$e,me)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Pe,$e,me);g(T)&&m(ae),Ve.__version=le.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function K(D,T,Y){if(T.image.length!==6)return;let ae=Te(D,T),fe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);let le=i.get(fe);if(fe.version!==le.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);let Ve=Ct.getPrimaries(Ct.workingColorSpace),we=T.colorSpace===ds?null:Ct.getPrimaries(T.colorSpace),ze=T.colorSpace===ds||Ve===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Be=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!Be&&!me?Pe[he]=x(T.image[he],!0,s.maxCubemapSize):Pe[he]=me?T.image[he].image:T.image[he],Pe[he]=Je(T,Pe[he]);let $e=Pe[0],Ge=r.convert(T.format,T.colorSpace),Ie=r.convert(T.type),rt=v(T.internalFormat,Ge,Ie,T.colorSpace),G=T.isVideoTexture!==!0,_e=le.__version===void 0||ae===!0,Ce=fe.dataReady,Oe=w(T,$e);de(n.TEXTURE_CUBE_MAP,T);let ve;if(Be){G&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,rt,$e.width,$e.height);for(let he=0;he<6;he++){ve=Pe[he].mipmaps;for(let We=0;We<ve.length;We++){let W=ve[We];T.format!==qn?Ge!==null?G?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,W.width,W.height,Ge,W.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,rt,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,W.width,W.height,Ge,Ie,W.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,rt,W.width,W.height,0,Ge,Ie,W.data)}}}else{if(ve=T.mipmaps,G&&_e){ve.length>0&&Oe++;let he=Ze(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,rt,he.width,he.height)}for(let he=0;he<6;he++)if(me){G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,Ge,Ie,Pe[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Pe[he].width,Pe[he].height,0,Ge,Ie,Pe[he].data);for(let We=0;We<ve.length;We++){let j=ve[We].image[he].image;G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,j.width,j.height,Ge,Ie,j.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,rt,j.width,j.height,0,Ge,Ie,j.data)}}else{G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge,Ie,Pe[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Ge,Ie,Pe[he]);for(let We=0;We<ve.length;We++){let W=ve[We];G?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Ge,Ie,W.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,rt,Ge,Ie,W.image[he])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),le.__version=fe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function be(D,T,Y,ae,fe,le){let Ve=r.convert(Y.format,Y.colorSpace),we=r.convert(Y.type),ze=v(Y.internalFormat,Ve,we,Y.colorSpace),Be=i.get(T),me=i.get(Y);if(me.__renderTarget=T,!Be.__hasExternalTextures){let Pe=Math.max(1,T.width>>le),$e=Math.max(1,T.height>>le);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,ze,Pe,$e,T.depth,0,Ve,we,null):t.texImage2D(fe,le,ze,Pe,$e,0,Ve,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,fe,me.__webglTexture,0,Me(T)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,fe,me.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(D,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){let ae=T.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,le=y(T.stencilBuffer,fe),Ve=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=Me(T);xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,le,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,le,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,le,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,D)}else{let ae=T.textures;for(let fe=0;fe<ae.length;fe++){let le=ae[fe],Ve=r.convert(le.format,le.colorSpace),we=r.convert(le.type),ze=v(le.internalFormat,Ve,we,le.colorSpace),Be=Me(T);Y&&xe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ze,T.width,T.height):xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,ze,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ze,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=i.get(T.depthTexture);ae.__renderTarget=T,(!ae.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);let fe=ae.__webglTexture,le=Me(T);if(T.depthTexture.format===mo)xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(T.depthTexture.format===zo)xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Z(D){let T=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let ae=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){let fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=ae}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ae=D.texture.mipmaps;ae&&ae.length>0?F(T.__webglFramebuffer[0],D):F(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=n.createRenderbuffer(),oe(T.__webglDepthbuffer[ae],D,!1);else{let fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,le)}}else{let ae=D.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),oe(T.__webglDepthbuffer,D,!1);else{let fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(D,T,Y){let ae=i.get(D);T!==void 0&&be(ae.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Z(D)}function L(D){let T=D.texture,Y=i.get(D),ae=i.get(T);D.addEventListener("dispose",R);let fe=D.textures,le=D.isWebGLCubeRenderTarget===!0,Ve=fe.length>1;if(Ve||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=T.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let ze=0;ze<T.mipmaps.length;ze++)Y.__webglFramebuffer[we][ze]=n.createFramebuffer()}else Y.__webglFramebuffer[we]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)Y.__webglFramebuffer[we]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let we=0,ze=fe.length;we<ze;we++){let Be=i.get(fe[we]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&xe(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<fe.length;we++){let ze=fe[we];Y.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);let Be=r.convert(ze.format,ze.colorSpace),me=r.convert(ze.type),Pe=v(ze.internalFormat,Be,me,ze.colorSpace,D.isXRRenderTarget===!0),$e=Me(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),de(n.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)be(Y.__webglFramebuffer[we][ze],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else be(Y.__webglFramebuffer[we],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let we=0,ze=fe.length;we<ze;we++){let Be=fe[we],me=i.get(Be),Pe=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),de(Pe,Be),be(Y.__webglFramebuffer,D,Be,n.COLOR_ATTACHMENT0+we,Pe,0),g(Be)&&m(Pe)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ae.__webglTexture),de(we,T),T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)be(Y.__webglFramebuffer[ze],D,T,n.COLOR_ATTACHMENT0,we,ze);else be(Y.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,we,0);g(T)&&m(we),t.unbindTexture()}D.depthBuffer&&Z(D)}function ue(D){let T=D.textures;for(let Y=0,ae=T.length;Y<ae;Y++){let fe=T[Y];if(g(fe)){let le=_(D),Ve=i.get(fe).__webglTexture;t.bindTexture(le,Ve),m(le),t.unbindTexture()}}}let te=[],Q=[];function ne(D){if(D.samples>0){if(xe(D)===!1){let T=D.textures,Y=D.width,ae=D.height,fe=n.COLOR_BUFFER_BIT,le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(D),we=T.length>1;if(we)for(let Be=0;Be<T.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);let ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);let me=i.get(T[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,fe,n.NEAREST),l===!0&&(te.length=0,Q.length=0,te.push(n.COLOR_ATTACHMENT0+Be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(te.push(le),Q.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Be=0;Be<T.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);let me=i.get(T[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Me(D){return Math.min(s.maxSamples,D.samples)}function xe(D){let T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(D){let T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Je(D,T){let Y=D.colorSpace,ae=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==lr&&Y!==ds&&(Ct.getTransfer(Y)===Lt?(ae!==qn||fe!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=U,this.rebindTextures=ye,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function VS(n,e){function t(i,s=ds){let r,o=Ct.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===wu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ef)return n.BYTE;if(i===tf)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===Su)return n.INT;if(i===Us)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===of)return n.RGB;if(i===qn)return n.RGBA;if(i===mo)return n.DEPTH_COMPONENT;if(i===zo)return n.DEPTH_STENCIL;if(i===Eu)return n.RED;if(i===Au)return n.RED_INTEGER;if(i===af)return n.RG;if(i===Cu)return n.RG_INTEGER;if(i===Ru)return n.RGBA_INTEGER;if(i===dl||i===fl||i===pl||i===ml)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pu||i===Iu||i===Du||i===Lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uu||i===Fu||i===Nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uu||i===Fu)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zu||i===Bu||i===Ou||i===ku||i===Vu||i===Gu||i===Hu||i===Wu||i===Xu||i===qu||i===Yu||i===Zu||i===ju||i===Ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$u||i===Ku||i===Qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$u)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===No?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var GS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HS=`
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

}`,Rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:GS,fragmentShader:HS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends Zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Rf,m={},_=t.getContextAttributes(),v=null,y=null,w=[],E=[],R=new ce,C=null,b=new Rn;b.viewport=new jt;let S=new Rn;S.viewport=new jt;let A=[b,S],I=new ru,z=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=w[H];return K===void 0&&(K=new Mo,w[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=w[H];return K===void 0&&(K=new Mo,w[H]=K),K.getGripSpace()},this.getHand=function(H){let K=w[H];return K===void 0&&(K=new Mo,w[H]=K),K.getHandSpace()};function k(H){let K=E.indexOf(H.inputSource);if(K===-1)return;let be=w[K];be!==void 0&&(be.update(H.inputSource,H.frame,c||o),be.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",J);for(let H=0;H<w.length;H++){let K=E[H];K!==null&&(E[H]=null,w[H].disconnect(K))}z=null,N=null,g.reset();for(let H in m)delete m[H];e.setRenderTarget(v),f=null,d=null,h=null,s=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,oe=null,F=null;_.depth&&(F=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?zo:mo,oe=_.stencil?No:Us);let Z={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ln(d.textureWidth,d.textureHeight,{format:qn,type:Ui,depthTexture:new Wa(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ln(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(H){for(let K=0;K<H.removed.length;K++){let be=H.removed[K],oe=E.indexOf(be);oe>=0&&(E[oe]=null,w[oe].disconnect(be))}for(let K=0;K<H.added.length;K++){let be=H.added[K],oe=E.indexOf(be);if(oe===-1){for(let Z=0;Z<w.length;Z++)if(Z>=E.length){E.push(be),oe=Z;break}else if(E[Z]===null){E[Z]=be,oe=Z;break}if(oe===-1)break}let F=w[oe];F&&F.connect(be)}}let U=new M,V=new M;function $(H,K,be){U.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(be.matrixWorld);let oe=U.distanceTo(V),F=K.projectionMatrix.elements,Z=be.projectionMatrix.elements,ye=F[14]/(F[10]-1),L=F[14]/(F[10]+1),ue=(F[9]+1)/F[5],te=(F[9]-1)/F[5],Q=(F[8]-1)/F[0],ne=(Z[8]+1)/Z[0],Me=ye*Q,xe=ye*ne,Ae=oe/(-Q+ne),Je=Ae*-Q;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Je),H.translateZ(Ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),F[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ze=ye+Ae,D=L+Ae,T=Me-Je,Y=xe+(oe-Je),ae=ue*L/D*Ze,fe=te*L/D*Ze;H.projectionMatrix.makePerspective(T,Y,ae,fe,Ze,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function re(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,be=H.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(be=g.depthFar)),I.near=S.near=b.near=K,I.far=S.far=b.far=be,(z!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,N=I.far),I.layers.mask=H.layers.mask|6,b.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let oe=H.parent,F=I.cameras;re(I,oe);for(let Z=0;Z<F.length;Z++)re(F[Z],oe);F.length===2?$(I,b,S):I.projectionMatrix.copy(b.projectionMatrix),de(H,I,oe)};function de(H,K,be){be===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(be.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=go*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(H){return m[H]};let Te=null;function Re(H,K){if(u=K.getViewerPose(c||o),p=K,u!==null){let be=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;be.length!==I.cameras.length&&(I.cameras.length=0,oe=!0);for(let L=0;L<be.length;L++){let ue=be[L],te=null;if(f!==null)te=f.getViewport(ue);else{let ne=h.getViewSubImage(d,ue);te=ne.viewport,L===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let Q=A[L];Q===void 0&&(Q=new Rn,Q.layers.enable(L),Q.viewport=new jt,A[L]=Q),Q.matrix.fromArray(ue.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ue.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),L===0&&(I.matrix.copy(Q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),oe===!0&&I.cameras.push(Q)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let L=h.getDepthInformation(be[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(F&&F.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<be.length;L++){let ue=be[L].camera;if(ue){let te=m[ue];te||(te=new Xa,m[ue]=te);let Q=h.getCameraImage(ue);te.sourceTexture=Q}}}}for(let be=0;be<w.length;be++){let oe=E[be],F=w[be];oe!==null&&F!==void 0&&F.update(oe,K,c||o)}Te&&Te(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}let Ue=new $g;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(H){Te=H},this.dispose=function(){}}},Cr=new nn,WS=new St;function XS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,df(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Cr.copy(y),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Cr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qS(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(p(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",g));let w=v.program;i.updateUBOMapping(_,w);let E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function u(_){let v=h();_.__bindingPointIndex=v;let y=n.createBuffer(),w=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,R=y.length;E<R;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,S=C.length;b<S;b++){let A=C[b];if(f(A,E,b,w)===!0){let I=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],N=0;for(let k=0;k<z.length;k++){let O=z[k],J=x(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,I+N,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,y,w){let E=_.value,R=v+"_"+y;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{let C=w[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function p(_){let v=_.uniforms,y=0,w=16;for(let R=0,C=v.length;R<C;R++){let b=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,A=b.length;S<A;S++){let I=b[S],z=Array.isArray(I.value)?I.value:[I.value];for(let N=0,k=z.length;N<k;N++){let O=z[N],J=x(O),U=y%w,V=U%J.boundary,$=U+V;y+=V,$!==0&&w-$<J.storage&&(y+=w-$),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=J.storage}}}let E=y%w;return E>0&&(y+=w-E),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var lh=class{constructor(e={}){let{canvas:t=_g(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=bt;let E=0,R=0,C=null,b=-1,S=null,A=new jt,I=new jt,z=null,N=new He(0),k=0,O=t.width,J=t.height,U=1,V=null,$=null,re=new jt(0,0,O,J),de=new jt(0,0,O,J),Te=!1,Re=new Eo,Ue=!1,H=!1,K=new St,be=new M,oe=new jt,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ye(){return C===null?U:1}let L=i;function ue(P,X){return t.getContext(P,X)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){let X="webgl2";if(L=ue(X,P),L===null)throw ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,Q,ne,Me,xe,Ae,Je,Ze,D,T,Y,ae,fe,le,Ve,we,ze,Be,me,Pe,$e,Ge,Ie,rt;function G(){te=new u1(L),te.init(),Ge=new VS(L,te),Q=new i1(L,te,e,Ge),ne=new OS(L,te),Q.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Me=new f1(L),xe=new ES,Ae=new kS(L,te,ne,xe,Q,Ge,Me),Je=new r1(y),Ze=new c1(y),D=new _v(L),Ie=new t1(L,D),T=new h1(L,D,Me,Ie),Y=new m1(L,T,D,Me),me=new p1(L,Q,Ae),we=new s1(xe),ae=new TS(y,Je,Ze,te,Q,Ie,we),fe=new XS(y,xe),le=new CS,Ve=new US(te),Be=new e1(y,Je,Ze,ne,Y,f,l),ze=new zS(y,Y,Q),rt=new qS(L,Me,Q,ne),Pe=new n1(L,te,Me),$e=new d1(L,te,Me),Me.programs=ae.programs,y.capabilities=Q,y.extensions=te,y.properties=xe,y.renderLists=le,y.shadowMap=ze,y.state=ne,y.info=Me}G();let _e=new Pf(y,L);this.xr=_e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(O,J,!1))},this.getSize=function(P){return P.set(O,J)},this.setSize=function(P,X,ee=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,J=X,t.width=Math.floor(P*U),t.height=Math.floor(X*U),ee===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(O*U,J*U).floor()},this.setDrawingBufferSize=function(P,X,ee){O=P,J=X,U=ee,t.width=Math.floor(P*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,X,ee,ie){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,X,ee,ie),ne.viewport(A.copy(re).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(de)},this.setScissor=function(P,X,ee,ie){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,X,ee,ie),ne.scissor(I.copy(de).multiplyScalar(U).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(P){ne.setScissorTest(Te=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,ee=!0){let ie=0;if(P){let q=!1;if(C!==null){let Se=C.texture.format;q=Se===Ru||Se===Cu||Se===Au}if(q){let Se=C.texture.type,Le=Se===Ui||Se===Us||Se===Fo||Se===No||Se===wu||Se===Tu,qe=Be.getClearColor(),ke=Be.getClearAlpha(),Qe=qe.r,nt=qe.g,je=qe.b;Le?(p[0]=Qe,p[1]=nt,p[2]=je,p[3]=ke,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Qe,x[1]=nt,x[2]=je,x[3]=ke,L.clearBufferiv(L.COLOR,0,x))}else ie|=L.COLOR_BUFFER_BIT}X&&(ie|=L.DEPTH_BUFFER_BIT),ee&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Be.dispose(),le.dispose(),Ve.dispose(),xe.dispose(),Je.dispose(),Ze.dispose(),Y.dispose(),Ie.dispose(),rt.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Fe),_e.removeEventListener("sessionend",ot),At.stop()};function Ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=Me.autoReset,X=ze.enabled,ee=ze.autoUpdate,ie=ze.needsUpdate,q=ze.type;G(),Me.autoReset=P,ze.enabled=X,ze.autoUpdate=ee,ze.needsUpdate=ie,ze.type=q}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function he(P){let X=P.target;X.removeEventListener("dispose",he),We(X)}function We(P){W(P),xe.remove(P)}function W(P){let X=xe.get(P).programs;X!==void 0&&(X.forEach(function(ee){ae.releaseProgram(ee)}),P.isShaderMaterial&&ae.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ee,ie,q,Se){X===null&&(X=F);let Le=q.isMesh&&q.matrixWorld.determinant()<0,qe=Kl(P,X,ee,ie,q);ne.setMaterial(ie,Le);let ke=ee.index,Qe=1;if(ie.wireframe===!0){if(ke=T.getWireframeAttribute(ee),ke===void 0)return;Qe=2}let nt=ee.drawRange,je=ee.attributes.position,Mt=nt.start*Qe,kt=(nt.start+nt.count)*Qe;Se!==null&&(Mt=Math.max(Mt,Se.start*Qe),kt=Math.min(kt,(Se.start+Se.count)*Qe)),ke!==null?(Mt=Math.max(Mt,0),kt=Math.min(kt,ke.count)):je!=null&&(Mt=Math.max(Mt,0),kt=Math.min(kt,je.count));let on=kt-Mt;if(on<0||on===1/0)return;Ie.setup(q,ie,qe,ee,ke);let Yt,Gt=Pe;if(ke!==null&&(Yt=D.get(ke),Gt=$e,Gt.setIndex(Yt)),q.isMesh)ie.wireframe===!0?(ne.setLineWidth(ie.wireframeLinewidth*ye()),Gt.setMode(L.LINES)):Gt.setMode(L.TRIANGLES);else if(q.isLine){let Ke=ie.linewidth;Ke===void 0&&(Ke=1),ne.setLineWidth(Ke*ye()),q.isLineSegments?Gt.setMode(L.LINES):q.isLineLoop?Gt.setMode(L.LINE_LOOP):Gt.setMode(L.LINE_STRIP)}else q.isPoints?Gt.setMode(L.POINTS):q.isSprite&&Gt.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ke=q._multiDrawStarts,Qt=q._multiDrawCounts,It=q._multiDrawCount,ti=ke?D.get(ke).bytesPerElement:1,Xr=xe.get(ie).currentProgram.getUniforms();for(let ni=0;ni<It;ni++)Xr.setValue(L,"_gl_DrawID",ni),Gt.render(Ke[ni]/ti,Qt[ni])}else if(q.isInstancedMesh)Gt.renderInstances(Mt,on,q.count);else if(ee.isInstancedBufferGeometry){let Ke=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Qt=Math.min(ee.instanceCount,Ke);Gt.renderInstances(Mt,on,Qt)}else Gt.render(Mt,on)};function j(P,X,ee){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Xn,P.needsUpdate=!0,gt(P,X,ee),P.side=ri,P.needsUpdate=!0,gt(P,X,ee),P.side=cn):gt(P,X,ee)}this.compile=function(P,X,ee=null){ee===null&&(ee=P),m=Ve.get(ee),m.init(X),v.push(m),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),P!==ee&&P.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();let ie=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Se=q.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){let qe=Se[Le];j(qe,ee,q),ie.add(qe)}else j(Se,ee,q),ie.add(Se)}),m=v.pop(),ie},this.compileAsync=function(P,X,ee=null){let ie=this.compile(P,X,ee);return new Promise(q=>{function Se(){if(ie.forEach(function(Le){xe.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){q(P);return}setTimeout(Se,10)}te.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ge=null;function Xe(P){ge&&ge(P)}function Fe(){At.stop()}function ot(){At.start()}let At=new $g;At.setAnimationLoop(Xe),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(P){ge=P,_e.setAnimationLoop(P),P===null?At.stop():At.start()},_e.addEventListener("sessionstart",Fe),_e.addEventListener("sessionend",ot),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,X,C),m=Ve.get(P,v.length),m.init(X),v.push(m),K.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Re.setFromProjectionMatrix(K,Pi,X.reversedDepth),H=this.localClippingEnabled,Ue=we.init(this.clippingPlanes,H),g=le.get(P,_.length),g.init(),_.push(g),_e.enabled===!0&&_e.isPresenting===!0){let Se=y.xr.getDepthSensingMesh();Se!==null&&at(Se,X,-1/0,y.sortObjects)}at(P,X,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,$),Z=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Z&&Be.addToRenderList(g,P),this.info.render.frame++,Ue===!0&&we.beginShadows();let ee=m.state.shadowsArray;ze.render(ee,P,X),Ue===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=g.opaque,q=g.transmissive;if(m.setupLights(),X.isArrayCamera){let Se=X.cameras;if(q.length>0)for(let Le=0,qe=Se.length;Le<qe;Le++){let ke=Se[Le];pt(ie,q,P,ke)}Z&&Be.render(P);for(let Le=0,qe=Se.length;Le<qe;Le++){let ke=Se[Le];lt(g,P,ke,ke.viewport)}}else q.length>0&&pt(ie,q,P,X),Z&&Be.render(P),lt(g,P,X);C!==null&&R===0&&(Ae.updateMultisampleRenderTarget(C),Ae.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,X),Ie.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],Ue===!0&&we.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function at(P,X,ee,ie){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ee=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Re.intersectsSprite(P)){ie&&oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);let Le=Y.update(P),qe=P.material;qe.visible&&g.push(P,Le,qe,ee,oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Re.intersectsObject(P))){let Le=Y.update(P),qe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),oe.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),oe.copy(Le.boundingSphere.center)),oe.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(qe)){let ke=Le.groups;for(let Qe=0,nt=ke.length;Qe<nt;Qe++){let je=ke[Qe],Mt=qe[je.materialIndex];Mt&&Mt.visible&&g.push(P,Le,Mt,ee,oe.z,je)}}else qe.visible&&g.push(P,Le,qe,ee,oe.z,null)}}let Se=P.children;for(let Le=0,qe=Se.length;Le<qe;Le++)at(Se[Le],X,ee,ie)}function lt(P,X,ee,ie){let q=P.opaque,Se=P.transmissive,Le=P.transparent;m.setupLightsView(ee),Ue===!0&&we.setGlobalState(y.clippingPlanes,ee),ie&&ne.viewport(A.copy(ie)),q.length>0&&xt(q,X,ee),Se.length>0&&xt(Se,X,ee),Le.length>0&&xt(Le,X,ee),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function pt(P,X,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new Ln(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?wi:Ui,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));let Se=m.state.transmissionRenderTarget[ie.id],Le=ie.viewport||A;Se.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);let qe=y.getRenderTarget(),ke=y.getActiveCubeFace(),Qe=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(N),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Z&&Be.render(ee);let nt=y.toneMapping;y.toneMapping=hs;let je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),Ue===!0&&we.setGlobalState(y.clippingPlanes,ie),xt(P,ee,ie),Ae.updateMultisampleRenderTarget(Se),Ae.updateRenderTargetMipmap(Se),te.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let kt=0,on=X.length;kt<on;kt++){let Yt=X[kt],Gt=Yt.object,Ke=Yt.geometry,Qt=Yt.material,It=Yt.group;if(Qt.side===cn&&Gt.layers.test(ie.layers)){let ti=Qt.side;Qt.side=Xn,Qt.needsUpdate=!0,mn(Gt,ee,ie,Ke,Qt,It),Qt.side=ti,Qt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ae.updateMultisampleRenderTarget(Se),Ae.updateRenderTargetMipmap(Se))}y.setRenderTarget(qe,ke,Qe),y.setClearColor(N,k),je!==void 0&&(ie.viewport=je),y.toneMapping=nt}function xt(P,X,ee){let ie=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Se=P.length;q<Se;q++){let Le=P[q],qe=Le.object,ke=Le.geometry,Qe=Le.group,nt=Le.material;nt.allowOverride===!0&&ie!==null&&(nt=ie),qe.layers.test(ee.layers)&&mn(qe,X,ee,ke,nt,Qe)}}function mn(P,X,ee,ie,q,Se){P.onBeforeRender(y,X,ee,ie,q,Se),P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(y,X,ee,ie,P,Se),q.transparent===!0&&q.side===cn&&q.forceSinglePass===!1?(q.side=Xn,q.needsUpdate=!0,y.renderBufferDirect(ee,X,ie,q,P,Se),q.side=ri,q.needsUpdate=!0,y.renderBufferDirect(ee,X,ie,q,P,Se),q.side=cn):y.renderBufferDirect(ee,X,ie,q,P,Se),P.onAfterRender(y,X,ee,ie,q,Se)}function gt(P,X,ee){X.isScene!==!0&&(X=F);let ie=xe.get(P),q=m.state.lights,Se=m.state.shadowsArray,Le=q.state.version,qe=ae.getParameters(P,q.state,Se,X,ee),ke=ae.getProgramCacheKey(qe),Qe=ie.programs;ie.environment=P.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(P.isMeshStandardMaterial?Ze:Je).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Qe===void 0&&(P.addEventListener("dispose",he),Qe=new Map,ie.programs=Qe);let nt=Qe.get(ke);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Le)return Xi(P,qe),nt}else qe.uniforms=ae.getUniforms(P),P.onBeforeCompile(qe,y),nt=ae.acquireProgram(qe,ke),Qe.set(ke,nt),ie.uniforms=qe.uniforms;let je=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=we.uniform),Xi(P,qe),ie.needsLights=xa(P),ie.lightsStateVersion=Le,ie.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function un(P){if(P.uniformsList===null){let X=P.currentProgram.getUniforms();P.uniformsList=ko.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Xi(P,X){let ee=xe.get(P);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Kl(P,X,ee,ie,q){X.isScene!==!0&&(X=F),Ae.resetTextureUnits();let Se=X.fog,Le=ie.isMeshStandardMaterial?X.environment:null,qe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:lr,ke=(ie.isMeshStandardMaterial?Ze:Je).get(ie.envMap||Le),Qe=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ee.morphAttributes.position,Mt=!!ee.morphAttributes.normal,kt=!!ee.morphAttributes.color,on=hs;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(on=y.toneMapping);let Yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Gt=Yt!==void 0?Yt.length:0,Ke=xe.get(ie),Qt=m.state.lights;if(Ue===!0&&(H===!0||P!==S)){let Vn=P===S&&ie.id===b;we.setState(ie,P,Vn)}let It=!1;ie.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Qt.state.version||Ke.outputColorSpace!==qe||q.isBatchedMesh&&Ke.batching===!1||!q.isBatchedMesh&&Ke.batching===!0||q.isBatchedMesh&&Ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ke.instancing===!1||!q.isInstancedMesh&&Ke.instancing===!0||q.isSkinnedMesh&&Ke.skinning===!1||!q.isSkinnedMesh&&Ke.skinning===!0||q.isInstancedMesh&&Ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ke.instancingMorph===!1&&q.morphTexture!==null||Ke.envMap!==ke||ie.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==nt||Ke.morphTargets!==je||Ke.morphNormals!==Mt||Ke.morphColors!==kt||Ke.toneMapping!==on||Ke.morphTargetsCount!==Gt)&&(It=!0):(It=!0,Ke.__version=ie.version);let ti=Ke.currentProgram;It===!0&&(ti=gt(ie,X,q));let Xr=!1,ni=!1,ya=!1,en=ti.getUniforms(),mi=Ke.uniforms;if(ne.useProgram(ti.program)&&(Xr=!0,ni=!0,ya=!0),ie.id!==b&&(b=ie.id,ni=!0),Xr||S!==P){ne.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),en.setValue(L,"projectionMatrix",P.projectionMatrix),en.setValue(L,"viewMatrix",P.matrixWorldInverse);let jn=en.map.cameraPosition;jn!==void 0&&jn.setValue(L,be.setFromMatrixPosition(P.matrixWorld)),Q.logarithmicDepthBuffer&&en.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&en.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,ni=!0,ya=!0)}if(q.isSkinnedMesh){en.setOptional(L,q,"bindMatrix"),en.setOptional(L,q,"bindMatrixInverse");let Vn=q.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),en.setValue(L,"boneTexture",Vn.boneTexture,Ae))}q.isBatchedMesh&&(en.setOptional(L,q,"batchingTexture"),en.setValue(L,"batchingTexture",q._matricesTexture,Ae),en.setOptional(L,q,"batchingIdTexture"),en.setValue(L,"batchingIdTexture",q._indirectTexture,Ae),en.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&en.setValue(L,"batchingColorTexture",q._colorsTexture,Ae));let gi=ee.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&me.update(q,ee,ti),(ni||Ke.receiveShadow!==q.receiveShadow)&&(Ke.receiveShadow=q.receiveShadow,en.setValue(L,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(mi.envMap.value=ke,mi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(mi.envMapIntensity.value=X.environmentIntensity),ni&&(en.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&_s(mi,ya),Se&&ie.fog===!0&&fe.refreshFogUniforms(mi,Se),fe.refreshMaterialUniforms(mi,ie,U,J,m.state.transmissionRenderTarget[P.id]),ko.upload(L,un(Ke),mi,Ae)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ko.upload(L,un(Ke),mi,Ae),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&en.setValue(L,"center",q.center),en.setValue(L,"modelViewMatrix",q.modelViewMatrix),en.setValue(L,"normalMatrix",q.normalMatrix),en.setValue(L,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Vn=ie.uniformsGroups;for(let jn=0,ad=Vn.length;jn<ad;jn++){let er=Vn[jn];rt.update(er,ti),rt.bind(er,ti)}}return ti}function _s(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function xa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,X,ee){let ie=xe.get(P);ie.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),xe.get(P.texture).__webglTexture=X,xe.get(P.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){let ee=xe.get(P);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};let Hy=L.createFramebuffer();this.setRenderTarget=function(P,X=0,ee=0){C=P,E=X,R=ee;let ie=!0,q=null,Se=!1,Le=!1;if(P){let ke=xe.get(P);if(ke.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if(ke.__webglFramebuffer===void 0)Ae.setupRenderTarget(P);else if(ke.__hasExternalTextures)Ae.rebindTextures(P,xe.get(P.texture).__webglTexture,xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let je=P.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&xe.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(P)}}let Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Le=!0);let nt=xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?q=nt[X][ee]:q=nt[X],Se=!0):P.samples>0&&Ae.useMultisampledRTT(P)===!1?q=xe.get(P).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[ee]:q=nt,A.copy(P.viewport),I.copy(P.scissor),z=P.scissorTest}else A.copy(re).multiplyScalar(U).floor(),I.copy(de).multiplyScalar(U).floor(),z=Te;if(ee!==0&&(q=Hy),ne.bindFramebuffer(L.FRAMEBUFFER,q)&&ie&&ne.drawBuffers(P,q),ne.viewport(A),ne.scissor(I),ne.setScissorTest(z),Se){let ke=xe.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,ee)}else if(Le){let ke=X;for(let Qe=0;Qe<P.textures.length;Qe++){let nt=xe.get(P.textures[Qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,ee,ke)}}else if(P!==null&&ee!==0){let ke=xe.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(P,X,ee,ie,q,Se,Le,qe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){ne.bindFramebuffer(L.FRAMEBUFFER,ke);try{let Qe=P.textures[qe],nt=Qe.format,je=Qe.type;if(!Q.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-ie&&ee>=0&&ee<=P.height-q&&(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+qe),L.readPixels(X,ee,ie,q,Ge.convert(nt),Ge.convert(je),Se))}finally{let Qe=C!==null?xe.get(C).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(P,X,ee,ie,q,Se,Le,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(X>=0&&X<=P.width-ie&&ee>=0&&ee<=P.height-q){ne.bindFramebuffer(L.FRAMEBUFFER,ke);let Qe=P.textures[qe],nt=Qe.format,je=Qe.type;if(!Q.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+qe),L.readPixels(X,ee,ie,q,Ge.convert(nt),Ge.convert(je),0);let kt=C!==null?xe.get(C).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,kt);let on=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vg(L,on,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.deleteBuffer(Mt),L.deleteSync(on),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,ee=0){let ie=Math.pow(2,-ee),q=Math.floor(P.image.width*ie),Se=Math.floor(P.image.height*ie),Le=X!==null?X.x:0,qe=X!==null?X.y:0;Ae.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,ee,0,0,Le,qe,q,Se),ne.unbindTexture()};let Wy=L.createFramebuffer(),Xy=L.createFramebuffer();this.copyTextureToTexture=function(P,X,ee=null,ie=null,q=0,Se=null){Se===null&&(q!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=q,q=0):Se=0);let Le,qe,ke,Qe,nt,je,Mt,kt,on,Yt=P.isCompressedTexture?P.mipmaps[Se]:P.image;if(ee!==null)Le=ee.max.x-ee.min.x,qe=ee.max.y-ee.min.y,ke=ee.isBox3?ee.max.z-ee.min.z:1,Qe=ee.min.x,nt=ee.min.y,je=ee.isBox3?ee.min.z:0;else{let gi=Math.pow(2,-q);Le=Math.floor(Yt.width*gi),qe=Math.floor(Yt.height*gi),P.isDataArrayTexture?ke=Yt.depth:P.isData3DTexture?ke=Math.floor(Yt.depth*gi):ke=1,Qe=0,nt=0,je=0}ie!==null?(Mt=ie.x,kt=ie.y,on=ie.z):(Mt=0,kt=0,on=0);let Gt=Ge.convert(X.format),Ke=Ge.convert(X.type),Qt;X.isData3DTexture?(Ae.setTexture3D(X,0),Qt=L.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ae.setTexture2DArray(X,0),Qt=L.TEXTURE_2D_ARRAY):(Ae.setTexture2D(X,0),Qt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment);let It=L.getParameter(L.UNPACK_ROW_LENGTH),ti=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xr=L.getParameter(L.UNPACK_SKIP_PIXELS),ni=L.getParameter(L.UNPACK_SKIP_ROWS),ya=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,je);let en=P.isDataArrayTexture||P.isData3DTexture,mi=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){let gi=xe.get(P),Vn=xe.get(X),jn=xe.get(gi.__renderTarget),ad=xe.get(Vn.__renderTarget);ne.bindFramebuffer(L.READ_FRAMEBUFFER,jn.__webglFramebuffer),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,ad.__webglFramebuffer);for(let er=0;er<ke;er++)en&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(P).__webglTexture,q,je+er),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(X).__webglTexture,Se,on+er)),L.blitFramebuffer(Qe,nt,Le,qe,Mt,kt,Le,qe,L.DEPTH_BUFFER_BIT,L.NEAREST);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||xe.has(P)){let gi=xe.get(P),Vn=xe.get(X);ne.bindFramebuffer(L.READ_FRAMEBUFFER,Wy),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xy);for(let jn=0;jn<ke;jn++)en?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gi.__webglTexture,q,je+jn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gi.__webglTexture,q),mi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vn.__webglTexture,Se,on+jn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vn.__webglTexture,Se),q!==0?L.blitFramebuffer(Qe,nt,Le,qe,Mt,kt,Le,qe,L.COLOR_BUFFER_BIT,L.NEAREST):mi?L.copyTexSubImage3D(Qt,Se,Mt,kt,on+jn,Qe,nt,Le,qe):L.copyTexSubImage2D(Qt,Se,Mt,kt,Qe,nt,Le,qe);ne.bindFramebuffer(L.READ_FRAMEBUFFER,null),ne.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mi?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Qt,Se,Mt,kt,on,Le,qe,ke,Gt,Ke,Yt.data):X.isCompressedArrayTexture?L.compressedTexSubImage3D(Qt,Se,Mt,kt,on,Le,qe,ke,Gt,Yt.data):L.texSubImage3D(Qt,Se,Mt,kt,on,Le,qe,ke,Gt,Ke,Yt):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Mt,kt,Le,qe,Gt,Ke,Yt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Mt,kt,Yt.width,Yt.height,Gt,Yt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Mt,kt,Le,qe,Gt,Ke,Yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ti),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xr),L.pixelStorei(L.UNPACK_SKIP_ROWS,ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ya),Se===0&&X.generateMipmaps&&L.generateMipmap(Qt),ne.unbindTexture()},this.initRenderTarget=function(P){xe.get(P).__webglFramebuffer===void 0&&Ae.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ae.setTextureCube(P,0):P.isData3DTexture?Ae.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ae.setTexture2DArray(P,0):Ae.setTexture2D(P,0),ne.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,ne.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var Ho=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YS=new xr(-1,1,1,-1,0,1),Df=class extends ct{constructor(){super(),this.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ne([0,2,0,0,2,0],2))}},ZS=new Df,Wo=class{constructor(e){this._mesh=new pe(ZS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var uh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var n0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xo=class n extends Ho{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(r,o,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Ln(r,o,{type:wi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Ln(r,o,{type:wi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=n0;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Er.clone(uh.uniforms),this.blendMaterial=new wn({uniforms:this.copyUniforms,vertexShader:uh.vertexShader,fragmentShader:uh.fragmentShader,blending:cl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Xt,this._fsQuad=new Wo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new wn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xo.BlurDirectionX=new ce(1,0);Xo.BlurDirectionY=new ce(0,1);var xl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hh=class extends Ho{constructor(){super(),this.uniforms=Er.clone(xl.uniforms),this.material=new sl({name:xl.name,uniforms:this.uniforms,vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader}),this._fsQuad=new Wo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function jS(n){let e=n.extensions.has("EXT_color_buffer_float"),t,i=0,s=0;function r(a,l){if(!e||!(l?.strength>0))return;let c=Math.max(32,Math.ceil(a.width*l.resolution)),u=Math.max(32,Math.ceil(a.height*l.resolution));t||(t=new Xo(new ce(c,u))),(c!==i||u!==s)&&(t.setSize(c,u),i=c,s=u),t.strength=l.strength,t.radius=l.radius,t.threshold=l.threshold,t.highPassUniforms.smoothWidth.value=l.softness,t.render(n,null,a,0,!1)}function o(){t?.dispose(),t=null,i=s=0}return{supported:e,apply:r,dispose:o}}function i0(n){let e=jS(n),t=new ce,i,s;function r(o,a,l){if(!e.supported||!(l?.strength>0)||(n.getDrawingBufferSize(t),t.x<32||t.y<32))return!1;i?(i.width!==t.x||i.height!==t.y)&&i.setSize(t.x,t.y):(i=new Ln(t.x,t.y,{type:wi,samples:2}),i.texture.name="Gorilla Lab HDR scene",s=new hh,s.renderToScreen=!0);let c=n.getRenderTarget(),u=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.setRenderTarget(i),n.render(o,a),e.apply(i,l),s.render(n,null,i)}finally{n.setRenderTarget(c),n.info.autoReset=u}return!0}return{render:r}}var s0=["Jour","Coucher de soleil","Nuit"],dh={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,sunDiameter:3.3,sunHalo:1,sunRadiance:7.5,shadowRange:0,bloomRadius:.43,bloomThreshold:1.25,bloomSoftness:.01,bloomResolution:.64,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},JS=[dh,{...dh,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,sunRadiance:9,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...dh,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,sunRadiance:1,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function Ni(n){return{...JS[n]??dh}}var fh=5e6,$S=4*Math.ceil(fh/3)+23,qo=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,En=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function ph(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(En(n.preset,0,2,0)),t=Ni(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=$S?n.skyImage.match(/^data:image\/(?:png|jpeg|webp);base64,([A-Za-z0-9+/]+)(={0,2})$/):null,s=i&&(i[1].length+i[2].length)%4===0&&Math.floor(i[1].length*3/4)<=fh?n.skyImage:null,r=En(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&s?n.sky:"preset",rotation:En(n.rotation,-360,360,0),skyTint:qo(n.skyTint,"#ffffff"),skyColor:qo(n.skyColor,t.skyColor),skyImage:s,fog:n.fog!==!1,fogColor:qo(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,En(n.fogFar,1,4096,t.fogFar)),azimuth:En(n.azimuth,-360,360,t.azimuth),elevation:En(n.elevation,-89,89,t.elevation),sunColor:qo(n.sunColor,t.sunColor),sunPower:En(n.sunPower,0,12,t.sunPower),sunDiameter:En(n.sunDiameter,.1,12,t.sunDiameter),sunHalo:En(n.sunHalo,0,4,t.sunHalo),sunRadiance:En(n.sunRadiance,.1,100,Math.max(1,En(n.sunPower,0,12,t.sunPower)*2.5)),bloomRadius:En(n.bloomRadius,0,1,t.bloomRadius),bloomThreshold:En(n.bloomThreshold,.01,12,t.bloomThreshold),bloomSoftness:En(n.bloomSoftness,.001,2,t.bloomSoftness),bloomResolution:En(n.bloomResolution,.25,1,t.bloomResolution),shadowRange:En(n.shadowRange,0,160,t.shadowRange),ambientColor:qo(n.ambientColor,t.ambientColor),groundColor:qo(n.groundColor,t.groundColor),ambientPower:En(n.ambientPower,0,12,t.ambientPower)}}var Lf;function KS(){return Lf??=new Promise((n,e)=>{let t=indexedDB.open("gorilla-lab-maps",1);t.onupgradeneeded=()=>t.result.createObjectStore("maps"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}).catch(n=>{throw Lf=null,n}),Lf}async function r0(n,e,t){let i=await KS();return new Promise((s,r)=>{let o=i.transaction("maps",e),a=t(o.objectStore("maps"),n);o.oncomplete=()=>s(a.result),o.onabort=()=>r(o.error)})}async function o0(n){return await r0(n,"readonly",(t,i)=>t.get(i)).catch(()=>{})??localStorage.getItem(n)}async function Uf(n,e){await r0(n,"readwrite",(t,i)=>t.put(e,i))}var Ff=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var sC=Ff.length-1,a0=Math.min(...Ff.map(n=>n[1])),l0=Math.max(...Ff.map(n=>n[1])),rC=new M(0,0,(a0+l0)/2),c0=new M(.047,.027,(l0-a0)/2);var lC=new wt,cC=new M,uC=new M,hC=new St;var dC=new M,fC=new M;var pC=new M;var mC=new M,gC=new M,xC=new M,yC=new Hn,_C=new M,vC=new M,MC=new M,bC=new M,SC=new M;function yl(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new M().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),_=x(p+2),v=new Hn(g,m,_).getNormal(new M);v.lengthSq()>.1&&s.push({a:g,b:m,c:_,n:v})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new dn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),h=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),f=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:h,thickness:d,normals:e?[]:f(s.map(p=>p.n)),edges:e?[]:f(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}var wC=new M,TC=new M,EC=new M,AC=new M,CC=new wt,RC=new wt,PC=new M;function Yo(n){return yl(new Ye(n.x*2,n.y*2,n.z*2))}var IC=new M;var Nf=yl(new vi(1,0).scale(...c0)),DC={mesh:{position:new M,quaternion:new wt},shape:Nf,radius:Nf.radius,precise:!0},LC=new M,UC=new M,FC=new M,NC=new M,zC=new M,BC=new M,OC=new M,kC=Nf.vertices.map(()=>new M);var VC=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)];var GC=new M,HC=new M,WC=new M,XC=new wt,qC=new wt,YC=new wt;var ZC=new M,jC=new M,JC=new M,$C=new M;var KC=new M;var QC=new M,eR=new M,tR=new M,nR=new M,iR=new M,sR=new M,rR=new M;var oR={mesh:{position:null,quaternion:new wt},shape:{sphereRadius:0,normals:[],edges:[]}};function mh(n,e,t){let i=new Ye(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}function u0(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,h=t.getY(c)*i;t.setXY(c,u*r-h*o+a,u*o+h*r+l)}return t.needsUpdate=!0,n}function h0(n){switch(n){case"sphere":return new Mi(.5,24,16);case"cylinder":return new Bt(.5,.5,1,24);case"cone":return new hr(.5,1,24);case"torus":return new Wn(.34,.14,12,32);case"capsule":return new Rs(.32,.36,8,16);default:return new Ye(1,1,1)}}function zf(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new M(...a)),s=[],r=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],u=l[1].clone().sub(c).normalize(),h=l.at(-1).clone().sub(c);h.addScaledVector(u,-h.dot(u)).normalize();for(let d=1;d<l.length-1;d++)for(let f of[c,l[d],l[d+1]]){s.push(...f);let p=f.clone().sub(c);r.push(p.dot(u)/2.6,p.dot(h)/2.6)}}let o=new ct;return o.setAttribute("position",new Ne(s,3)),o.setAttribute("uv",new Ne(r,2)),o.computeVertexNormals(),o}function _l(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Fs=(n,e,t)=>n+(e-n)*t,Zo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function gh(n,e){let t=Math.floor(n),i=Math.floor(e),s=Zo(0,1,n-t),r=Zo(0,1,e-i);return Fs(Fs(_l(t,i),_l(t+1,i),s),Fs(_l(t,i+1),_l(t+1,i+1),s),r)}function d0(n,e){return gh(n,e)*.54+gh(n*2.07+3.4,e*2.07-6.1)*.26+gh(n*4.2+9,e*4.2)*.13+gh(n*8.6,e*8.6-13)*.07}function f0(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),h=Math.max(0,c),d=h**.54,f=r.map((p,x)=>Fs(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,_=0;if(c>.025)if(n){let y=_l(p+792,l+677);y>.9988&&(_=(y-.9988)*49e3*Zo(.09,.3,c))}else{let[y,w]=s[p],E=2.8*u/(c+.16),R=y*E+3.6,C=w*E-8.1,b=d0(R,C),S=d0(R-.12,C-.09);g=Zo(.49,.66,b)*Zo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(b-S)*5+(b-.54)*.8))}let v=n?1:Fs(.94,1,Zo(.05,.34,c));i[x]=Fs(f[0],(139+115*m)*v,g)+_,i[x+1]=Fs(f[1],(154+100*m)*v,g)+_*.94,i[x+2]=Fs(f[2],(178+77*m)*v,g)+_*.86,i[x+3]=255}}let a=new oi(i,1024,512,qn);return a.colorSpace=bt,a.wrapS=In,a.magFilter=ln,a.minFilter=zn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function p0(){let n=f0(!1),e=f0(!0),t=n.image.data.slice();for(let s=0;s<t.length;s+=4)t[s]*=.89,t[s+1]*=.61,t[s+2]*=.53;let i=new oi(t,n.image.width,n.image.height,qn);i.colorSpace=bt;for(let s of[n,i,e])s.mapping=Li,s.magFilter=ln,s.minFilter=ln,s.needsUpdate=!0;return{day:n,sunset:i,night:e}}var sn=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),m0=sn(-24,24,-51,7),g0=34521,x0={x:0,y:0,z:3},Ns={x:.05,y:1.16,z:5.9},jo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:sn(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:sn(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:sn(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:sn(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:sn(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:sn(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:sn(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:sn(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:sn(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:sn(9,23,-48,-37),sign:[16,-38.2]}},uR=[sn(-9,-6,-51,7),sn(6,9,-51,7),sn(-24,24,-8,-5),sn(-24,24,-27,-23),sn(9,23,-37,-34)],y0=[{name:"Glace",bounds:jo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:jo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:sn(-9,9,-51,7)},{name:"Sol ouest",bounds:sn(-23,-9,-51,-23)},{name:"Sol ouest",bounds:sn(-23,-9,-8,7)},{name:"Bordure ouest",bounds:sn(-24,-23,-51,7)},{name:"Sol est",bounds:sn(9,23,-51,-48)},{name:"Sol est",bounds:sn(9,23,-37,7)},{name:"Bordure est",bounds:sn(23,24,-51,7)}],vl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Jo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],_0=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),zs={x:-19.4,y:.68,z:-3.25},v0=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),M0={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function xh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Di(i);return s.colorSpace=bt,s}function b0(n,e){let{day:t,sunset:i,night:s}=p0(),r=[t,i,s],o=new He,a=new cr("#a6d4ea",55,135),l=xh(64,64,(W,j)=>{let ge=W.createRadialGradient(j/2,j/2,j*.22,j/2,j/2,j*.5);ge.addColorStop(0,"#fff"),ge.addColorStop(.65,"#fff"),ge.addColorStop(.88,"rgba(255,255,255,.72)"),ge.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=ge,W.fillRect(0,0,j,j)}),c=new Ga(new wo({map:l,alphaTest:.15,depthWrite:!1,fog:!1}));n.add(c);let u=t.clone();u.mapping=Li,u.needsUpdate=!0;let h=new Vo(e);n.environment=h.fromEquirectangular(u).texture,h.dispose();let d=new gr("#daeaff","#88724c",2.25),f=new yr("#fff0d0",3);f.position.set(-14,25,-16),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),Object.assign(f.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),f.shadow.bias=-25e-5,f.shadow.normalBias=.025,n.add(d,f,f.target);let p=new M,x=0,g=null,m=!0,_=null,v=null,y=!1,w=0,E=0,R=new M,C=null,b=null,S=null,A=null,I=null,z=!1,N=0;function k(W,j){if(j==="#ffffff")return W;if(W===b&&j===S)return C;let ge=W.image,Xe=document.createElement("canvas");Xe.width=ge.width,Xe.height=ge.height;let Fe=Xe.getContext("2d");return W.isDataTexture?Fe.putImageData(new ImageData(new Uint8ClampedArray(ge.data),ge.width,ge.height),0,0):Fe.drawImage(ge,0,0),Fe.globalCompositeOperation="multiply",Fe.fillStyle=j,Fe.fillRect(0,0,Xe.width,Xe.height),C?.dispose(),C=new Di(Xe),C.mapping=Li,C.colorSpace=bt,C.flipY=W.flipY,b=W,S=j,C}function O(W){if(I===W)return A;A?.dispose();let j=document.createElement("canvas"),ge=document.createElement("canvas");j.width=384,j.height=192,ge.width=1536,ge.height=768,j.getContext("2d").drawImage(W.image,0,0,j.width,j.height);let Xe=ge.getContext("2d");return Xe.imageSmoothingEnabled=!1,Xe.drawImage(j,0,0,ge.width,ge.height),A=new Di(ge),A.mapping=Li,A.colorSpace=bt,A.flipY=W.flipY,I=W,A}function J(W){let j=W.shadowRange?Math.max(13,W.shadowRange):13+N*1.2,ge=Math.max(33,j*1.4);p.copy(R).multiplyScalar(ge),Object.assign(f.shadow.camera,{left:-j,right:j,top:j,bottom:-j,far:Math.max(72,ge+j*1.5)}),f.shadow.camera.updateProjectionMatrix()}function U(W){x=[0,1,2].includes(W)?W:0;let j=g??Ni(x),ge=Ee.degToRad(j.azimuth),Xe=Ee.degToRad(j.elevation);R.set(Math.cos(ge)*Math.cos(Xe),Math.sin(Xe),Math.sin(ge)*Math.cos(Xe)),J(j),d.color.set(j.ambientColor),d.groundColor.set(j.groundColor),d.intensity=j.ambientPower,f.color.set(j.sunColor),f.intensity=j.sunPower,f.position.copy(f.target.position).add(p),c.material.color.set(j.sunColor).multiplyScalar(j.sunRadiance??Math.max(1,j.sunPower*2.5)),c.visible=j.sunPower>0;let Fe=j.sky==="image"&&v?v:r[j.preset],ot=k(Fe,j.skyTint);n.background=j.sky==="color"||!m?o.set(j.skyColor):z&&!ot.isDataTexture?O(ot):ot,n.backgroundRotation.y=Ee.degToRad(j.rotation),a.color.set(j.fogColor),a.near=j.fogNear,a.far=j.fogFar,n.fog=j.fog?a:null,n.environmentIntensity=w*[1,.56,.09][j.preset]}function V(W,j=()=>{}){g=W;let ge=W?.sky==="image"?W.skyImage:null;if(_!==ge){_=ge;let Xe=++E;v?.dispose(),v=null,y=!!ge,ge&&new bi().load(ge,Fe=>{if(E!==Xe){Fe.dispose();return}Fe.colorSpace=bt,Fe.mapping=Li,v=Fe,y=!1,U(x),j()},void 0,()=>{Xe===E&&(y=!1,j())})}U(x)}function $(W,j=210){let ge=g??Ni(x),Xe=j*.96,Fe=2*Xe*Math.tan(Ee.degToRad(ge.sunDiameter/2));c.position.copy(W).addScaledVector(R,Xe),c.scale.setScalar(Fe)}function re(W){if(!f.castShadow)return;let j=f.target.position,ge=Math.round(W.x/4)*4,Xe=Math.round(W.y/4)*4,Fe=Math.round(W.z/4)*4;j.x===ge&&j.y===Xe&&j.z===Fe||(j.set(ge,Xe,Fe),f.position.copy(j).add(p))}U(0);let de=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function Te(W,j,ge){let[,Xe,Fe]=de[j],ot=512;W.save(),W.scale(ge/512,ge/512),W.fillStyle=Xe,W.fillRect(0,0,ot,ot);let At=j+19;function at(){return At=Math.imul(At,1664525)+1013904223>>>0,At/4294967296}if(W.fillStyle=Fe,j===16){for(let lt=0;lt<16;lt++)for(let pt=0;pt<16;pt++)(pt+lt)%2===0&&W.fillRect(pt*32,lt*32,32,32);W.fillStyle="#ff3957",W.fillRect(253,0,6,512),W.fillRect(0,253,512,6)}else if([0,2,8,15].includes(j)){let lt=j===15?32:64;W.globalAlpha=.48;for(let pt=0;pt<ot;pt+=lt){W.fillRect(0,pt,ot,j===8?3:2);for(let xt=-lt;xt<ot;xt+=lt)W.fillRect(xt+pt/lt%2*(j===2?lt/2:0),pt,2,lt)}}else if([4,5,6,7,10,11,12].includes(j)){let lt=j===5?38:j===7?64:18;for(let pt=0;pt<lt;pt++){W.strokeStyle=Fe,W.globalAlpha=.08+at()*.22,W.lineWidth=j===5?1+at()*8:1+at()*4;let xt=at()*ot,mn=j===5?.018:.009;W.beginPath();for(let gt=0;gt<=ot;gt+=8){let un=xt+Math.sin(gt*mn+pt)*(j===6||j===7?4:12+pt%5*3)+(j===4?gt*.28:0);gt===0?W.moveTo(gt,un):W.lineTo(gt,un)}W.stroke()}}else{W.globalAlpha=.27;for(let lt=0;lt<120;lt++){let pt=at()*ot,xt=at()*ot,mn=2+at()*6;W.beginPath(),W.arc(pt,xt,mn,0,Math.PI*2),W.fill()}}if(j!==16)for(let lt=0;lt<4400;lt++)W.globalAlpha=.05+at()*.1,W.fillStyle=at()>.5?Fe:"#222324",W.fillRect(at()*ot,at()*ot,1+at()*4,1+at()*3);W.restore()}let Re=new Set([0,2,4,5,8,15,16]),Ue=dt.shadowmap_pars_fragment.replace("return mix( 1.0, shadow, shadowIntensity );","vec2 edge = min(shadowCoord.xy, 1.0 - shadowCoord.xy); return mix(1.0, shadow, shadowIntensity * smoothstep(0.0, 0.14, min(edge.x, edge.y)));"),H=de.map(([W,j,ge,Xe,Fe,ot],At)=>{let at=Re.has(At)?512:256,lt=xh(at,at,xt=>Te(xt,At,at));lt.wrapS=lt.wrapT=In;let pt=new gn({map:lt,roughness:Xe,metalness:Fe,flatShading:!0,opacity:ot,transparent:ot<1,depthWrite:ot===1});return pt.name=W,pt}),K=H.map(W=>W.map.image),be=512,oe=H.map(W=>new li({map:W.map,flatShading:!0,opacity:W.opacity,transparent:W.transparent,depthWrite:W.depthWrite})),F={value:0},Z={value:.24},ye={value:null},L={value:0};function ue(){ye.value?.dispose(),ye.value=xh(512,512,(W,j)=>{W.fillStyle="#ffffff",W.fillRect(0,0,j,j);let ge=j/52,Xe=j/64;for(let Fe of te){if(!Fe.position||!Fe.half||Fe.position.y+Fe.half.y<.22)continue;let ot=(Fe.position.x+26)*ge,At=(Fe.position.z+54)*Xe,at=Math.min(55,Fe.half.x*ge+5),lt=Math.min(72,Fe.half.z*Xe+6);W.save(),W.translate(ot+Fe.half.y*ge*.2,At+Fe.half.y*Xe*.24),W.scale(at,lt);let pt=W.createRadialGradient(0,0,.15,0,0,1);pt.addColorStop(0,"rgba(22,37,65,.54)"),pt.addColorStop(.58,"rgba(36,54,76,.29)"),pt.addColorStop(1,"rgba(38,48,57,0)"),W.fillStyle=pt,W.fillRect(-1,-1,2,2),W.restore()}})}for(let W of[...H,...oe])W.onBeforeCompile=j=>{j.fragmentShader=j.fragmentShader.replace("#include <shadowmap_pars_fragment>",Ue),j.uniforms.uFocusAmount=F,j.uniforms.uFocusRadius=Z,j.uniforms.uLabLightmap=ye,j.uniforms.uLabBakedStrength=L,j.vertexShader=`varying vec3 vLabPosition;
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
      `)},W.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v3";let te=[],Q=[];function ne(W,j,ge,Xe,Fe,ot,At,at=0,lt=0,pt=1,xt=1,mn=!1){let gt=new pe(mn?new Ye(Fe,ot,At):mh(Fe,ot,At),H[at]);gt.position.set(j,ge,Xe),gt.rotation.x=lt,gt.receiveShadow=!0,gt.castShadow=!0,n.add(gt);let un=new M(Fe/2,ot/2,At/2),Xi={mesh:gt,position:gt.position,quaternion:gt.quaternion,half:un,min:un.clone().negate(),friction:pt,gravity:xt,name:W,type:at,shape:Yo(un)};return te.push(Xi),Xi}let Me=y0.map(({name:W,bounds:j,type:ge=0,friction:Xe=.78,gravity:Fe=1})=>{let{xMin:ot,xMax:At,zMin:at,zMax:lt}=j;return ne(W,(ot+At)/2,-.33,(at+lt)/2,At-ot,.66,lt-at,ge,0,Xe,Fe)});for(let W of Object.values(M0))for(let j of W)ne(...j);let{xMin:xe,xMax:Ae,zMin:Je,zMax:Ze}=m0;ne("But\xE9e arri\xE8re",0,1.35,Je+.4,Ae-xe,2.7,.6,2),ne("But\xE9e ouest",xe+.3,1.05,(Je+Ze)/2,.6,2.1,Ze-Je,2),ne("But\xE9e est",Ae-.3,1.05,(Je+Ze)/2,.6,2.1,Ze-Je,2);let{xMin:D,xMax:T,zMin:Y,zMax:ae}=jo.hills.bounds,fe=T-D,le=ae-Y,Ve=16,we=64,ze=new Tn(fe,le,Ve,we).rotateX(-Math.PI/2).translate(D+fe/2,0,Y+le/2),Be=ze.attributes.uv;for(let W=0;W<Be.count;W++)Be.setXY(W,Be.getX(W)*fe/2.6,Be.getY(W)*le/2.6);let me=ze.attributes.position,Pe;function $e(W){if(Pe===W)return;Pe=W;let j=Pe*.017;for(let ge=0;ge<me.count;ge++){let Xe=me.getX(ge),Fe=me.getZ(ge),ot=Math.sin(Math.PI*Ee.clamp((Xe-D)/fe,0,1)),At=Math.min(1,(Fe-Y)*.48,(ae-Fe)*.48),at=.93+.56*Math.sin(Fe*.36+j)+.32*Math.cos(Xe*.67+Fe*.26+j*1.4)+.19*Math.sin(Fe*.81+j*.67);me.setY(ge,Math.max(0,ot*At*at))}me.needsUpdate=!0,ze.computeVertexNormals(),ze.computeBoundingSphere()}$e(g0);let Ge=new pe(ze,H[3]);Ge.userData.editorAssetId="lab-hill",Ge.receiveShadow=Ge.castShadow=!0,n.add(Ge);let Ie=(W,j)=>{let ge=Ee.clamp((W-D)/fe*Ve,0,Ve-1e-6),Xe=Ee.clamp((j-Y)/le*we,0,we-1e-6),Fe=Math.floor(ge),ot=Math.floor(Xe),At=ge-Fe,at=Xe-ot,lt=Ve+1,pt=ot*lt+Fe,xt=me.getY(pt),mn=me.getY(pt+1),gt=me.getY(pt+lt),un=me.getY(pt+lt+1);return At+at<=1?xt+(mn-xt)*At+(gt-xt)*at:un+(gt-un)*(1-At)+(mn-un)*(1-at)};te.push({heightfield:!0,mesh:Ge,editorAssetId:"lab-hill",height:Ie,...jo.hills.bounds,friction:.81,gravity:1});function rt(W,j,ge,Xe,Fe=1.45){let ot=xh(384,72,(at,lt,pt)=>{at.fillStyle="#202a32",at.fillRect(0,0,lt,pt),at.fillStyle=Xe,at.font="bold 31px system-ui",at.textAlign="center",at.fillText(W,lt/2,48,lt-20)}),At=new pe(new Tn(3.2,.6),new Xt({map:ot,side:cn}));At.position.set(j,Fe,ge),n.add(At),Q.push(At)}for(let W of Object.values(jo)){rt(W.name.toLocaleUpperCase("fr"),...W.sign,W.color);let{xMin:j,xMax:ge,zMin:Xe,zMax:Fe}=W.bounds,ot=new Ha(new ct().setFromPoints([new M(j,.025,Xe),new M(ge,.025,Xe),new M(ge,.025,Fe),new M(j,.025,Fe)]),new Un({color:W.color,transparent:!0,opacity:.72}));n.add(ot),Q.push(ot)}rt("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),rt("MURS HAUTS",3,-31,"#e8d2ff"),rt("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let G=new gn({color:"#c8e6ed",metalness:1,roughness:.16}),_e=new pe(new _i(.54,2),G);_e.userData.editorAssetId="chrome-sphere",_e.position.set(zs.x,zs.y,zs.z),_e.castShadow=!0,n.add(_e);let Ce=de.map((W,j)=>{let{x:ge,z:Xe}=v0(j);return ne("\xC9chantillon "+de[j][0],ge,.325,Xe,.65,.65,.65,j,0,1,1,!0).mesh}),Oe=new Nn(1,12).rotateX(-Math.PI/2),ve=new Xt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function he(W){let j=new pe(Oe,ve);return j.scale.setScalar(W),n.add(j),j}function We(W,j,ge,Xe,Fe,ot,At){let at=j>=3;e.shadowMap.enabled=at,f.castShadow=at,ve.opacity=j===2?.17:.11,L.value=At?.38+ge*.04:0;let lt=j>=9?2048:j>=6?1024:j>=4?512:256;f.shadow.intensity=.45+j*.055,f.shadow.radius=.65+j*.12,N=j,f.shadow.mapSize.x!==lt&&(f.shadow.map?.dispose(),f.shadow.map=null,f.shadow.mapSize.set(lt,lt)),ot!==be&&(be=ot,H.forEach((xt,mn)=>{let gt=xt.userData.texture??xt.map,un=Re.has(mn)?ot:Math.min(256,ot);if(gt.image.width===un)return;let Xi=document.createElement("canvas");Xi.width=Xi.height=un;let Kl=Xi.getContext("2d");un>512?Te(Kl,mn,un):Kl.drawImage(K[mn],0,0,un,un);let _s=new Di(Xi);_s.colorSpace=gt.colorSpace,_s.wrapS=gt.wrapS,_s.wrapT=gt.wrapT,_s.repeat.copy(gt.repeat);for(let xa of[xt,oe[mn]])xa.userData.texture=_s,xa.map=_s,xa.needsUpdate=!0;gt.dispose()}));let pt=W>=4;for(let xt of te)xt.mesh?.isMesh&&!xt.zone&&(xt.mesh.material=pt?H[xt.type]:oe[xt.type]);Ge.material=pt?H[3]:oe[3];for(let xt=0;xt<Ce.length;xt++)Ce[xt].material=pt?H[xt]:oe[xt];H.forEach((xt,mn)=>{for(let gt of[xt,oe[mn]])gt.userData.texture||(gt.userData.texture=gt.map),gt.map=Fe?gt.userData.texture:null,gt.color.set(Fe?"#ffffff":de[mn][1]),gt.needsUpdate=!0}),w=Xe?.21+ge*.067:0,G.metalness=Xe?.95:.1,G.roughness=Xe?.13:.46,m=W>=2,U(x)}return{boxes:te,floors:Me,probe:_e,display:Ce,visual:We,shadow:he,setTimeOfDay:U,setEnvironment:V,centerSky:$,setRetroSky(W){z!==W&&(z=W,U(x))},sunDirection:()=>R.clone(),centerShadows:re,lighting:[d,f,f.target,c],sunDisk:c,get bloomProfile(){let W=g??Ni(x);return{strength:W.sunHalo*.19,radius:W.bloomRadius,threshold:W.bloomThreshold,softness:W.bloomSoftness,resolution:W.bloomResolution}},get skyLoading(){return y},get hillSeed(){return Pe},setHillSeed:$e,bakeLightmap:ue,mapMaterial:(W,j)=>j>=4?H[W]:oe[W],builtObjects:[...te.map(W=>W.mesh).filter(W=>W?.isObject3D),_e,...Q],materials:[...H,...oe],focus(W,j,ge){F.value=W?j*.75:0,Z.value=.07+ge*.058}}}function S0(n,e,t){function i(c,u,h=.85){let d=c.getWorldPosition(new M),f=c.getWorldQuaternion(new wt);e.push({half:u,min:u.clone().negate(),position:d,quaternion:f,mesh:{position:d,quaternion:f},shape:Yo(u),friction:h,gravity:1})}let s=[],r=[],o=new li({color:"#485d5d",flatShading:!0});function a([c,u],h,d){let f=new pe(new Ye(.095,.68,.11),o);f.position.set(c,.34,u+.46),f.castShadow=f.receiveShadow=!0,n.add(f),i(f,new M(.0475,.34,.055));let p=new Jt;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new pe(new Ye(.64,.36,.055),new li({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),_=new Di(g);_.colorSpace=bt;let v=new pe(new Tn(.61,.095),new Xt({map:_}));v.position.set(0,.116,.03),p.add(v);let y=.592/d.length,w=d.map(([R,C],b)=>{let S=new pe(new Ye(y-.012,.155,.04),new li({color:"#478086"}));S.position.set(-.296+y*(b+.5),-.045,.046),p.add(S),s.push(S),S.userData.touchWidth=y-.012;let A=document.createElement("canvas");A.width=208,A.height=172;let I=new Di(A);I.colorSpace=bt;let z=new pe(new Tn(y-.017,.139),new Xt({map:I}));z.position.z=.0205,S.add(z);let N=-1/0;return S.userData.action=()=>{let k=performance.now();k-N<250||(N=k,C(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:R,context:A.getContext("2d"),texture:I}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(h,17,62,478);for(let R of w){let C=R.context;C.fillStyle="#386269",C.fillRect(0,0,208,172),C.fillStyle="#fff2d5",C.textAlign="center",C.font="bold 27px system-ui";let b=(typeof R.label=="function"?R.label():R.label).split("|");b.forEach((S,A)=>C.fillText(S,104,(b.length>1?68:97)+A*37,188)),R.texture.needsUpdate=!0}_.needsUpdate=!0}r.push(E)}function l(){for(let c of r)c()}return a(vl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Jo[0])],["Boule",()=>t.spawn(1,Jo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Jo[0])],["Vider",t.clear]]),a(vl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Jo[1])],["Sph\xE8re",()=>t.spawn(5,Jo[1])]]),a(vl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(vl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:s,redraw:l}}function yh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ct,c=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=w0(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=w0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function w0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new zt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var vh=0,QS=1,ew=new M,T0=new al,Bf=new Pn,E0=new M,_h=new Hn,Mh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new bh,this.unassigned=new bh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Of(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):s=Math.max(h,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,ew)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===vh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-i[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=i[o],l=s[o],c,u;r=0,T0.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l){T0.closestPointToPoint(p.point,!0,E0);let x=E0.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,Bf.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Bf.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let h=[];if(Bf.distanceToPoint(u.point)<0){h.push(zi.create(a,l,c),zi.create(u,l,a),zi.create(u,c,l),zi.create(u,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(zi.create(a,c,l),zi.create(u,a,l),zi.create(u,l,c),zi.create(u,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===vh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=QS;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===vh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=zi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},zi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=vh,this.edge=null}static create(e,t,i){let s=new n,r=new Ml(e,s),o=new Ml(t,s),a=new Ml(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return _h.set(e.point,t.point,i.point),_h.getNormal(this.normal),_h.getMidpoint(this.midpoint),this.area=_h.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Ml=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Of=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},bh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var fs=class extends ct{constructor(e=[]){super();let t=[],i=[],r=new Mh().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var $n=Math.PI*2,Sh=.84,ps=128;function ks(n){let e=new Uint8Array(ps*ps*4);for(let i=0;i<ps;i++)for(let s=0;s<ps;s++){let r=(s+.5)/ps,o=(i+.5)/ps,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Sh,1),Math.min(o/Sh,1),s,i),l=(s+i*ps)*4;for(let c=0;c<3;c++)e[l+c]=Ee.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new oi(e,ps,ps);return t.colorSpace=bt,t.generateMipmaps=!0,t.minFilter=zn,t.magFilter=ln,t.needsUpdate=!0,t}function Ir(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ft(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new He(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Sh,r.getY(l)*Sh):r.setXY(l,.95,.95);return i.setAttribute("color",new zt(a,3)),i}function Vs(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:yh(s),material:new gn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function A0(n,e,t){let i=n/2,s=e/2,r=new cs;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Bs(n,e,t,i,s){return new fr(A0(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Os(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[h,d]=n[u];for(let f=0;f<=e;f++){let p=$n*f/e,x=t(h,d,p,u);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),s.push(f/e,u/(n.length-1)),u===n.length-1||f===e)continue;let g=u*(e+1)+f,m=g+e+1;h>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new ct;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let h=u*(e+1),d=h+e;l.fromBufferAttribute(a,h).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(h,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function bl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=$n*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new fs(t)}function tw(){let t=new nl(A0(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ee.clamp(i.getX(l)/.098+.5,0,1),u=Ee.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=ks((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),h=.5+.5*Math.sin((c*1.5+l*.6)*$n),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||p?[222,239,247]:[15+58*u+27*h,27+98*u+54*h,59+108*u+47*h]}),r=[ft(Bs(.106,.207,.013,.011,.0019),8425890),ft(Bs(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),ft(Bs(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),ft(t,16777215,!0),ft(Bs(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),ft(new Ye(.0036,.024,.004).translate(.055,.029,0),11714250),ft(new Ye(.0036,.015,.004).translate(-.055,.032,0),11385285),ft(new Ye(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(ft(new Bt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(ft(new Nn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(ft(new Nn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new fs([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return Vs("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function nw(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Os(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),h=.035*Math.cos(c),d=Math.max(...e.map(f=>Math.exp(-(((l-f+h)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=ks((a,l,c,u)=>{let h=$n*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(h)),p=Math.max(...e.map(_=>Math.exp(-(((d-_+.035*Math.cos(h))/.009)**2)))),x=f**3*p,g=Ir(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+m,76+24*f+70*x+m,24+11*f+52*x+m*.8]}),o=bl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Vs("bread","Baguette de pain",.27,o,[ft(s,16777215,!0)],r,.9)}function iw(){let n=ks((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,h=(r*28+u)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*Ir(a,l)-(c&&(h||d)?35:0);return[p*.94,p,p*1.04]}),e=Os([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Os([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[ft(e,16777215,!0),ft(t,11056059),ft(new Bt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),ft(new Bt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=$n*r/5;i.push(ft(new Ye(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=bl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Vs("wheel","Roue",1.8,s,i,n,.64,.23)}function sw(){let n=ks((r,o,a,l)=>{let c=Ir(a,l),u=o>.26&&o<.34||o>.455&&o<.475,h=c>.98?-44:19*(c-.5)+5*Math.cos($n*r*4);return u?[46+h,94+h,117+h]:[240+h,223+h,194+h]}),e=Os([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Wn(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+$n*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new fs(i);return Vs("cup","Tasse",.39,s,[ft(e,16777215,!0),ft(t,15785922)],n,.37)}function rw(){let n=Os([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=ks((s,r,o,a)=>{let l=9*Ir(o,a),c=11*Math.cos(s*$n*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let h=40+.6*c+8*Math.cos(r*$n*48+s*$n*13)+l;return[h,h*1.08,h*1.13]}let u=63+c+l+14*Math.cos(s*$n*4);return[u,u*1.13,u*1.24]}),t=[ft(n,16777215,!0),ft(new Ps(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),ft(new Nn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),ft(new Nn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),ft(new Bt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),ft(new Nn(.008,12).translate(0,.035,.0336),15633202)],i=bl([[.033,-.143],[.054,.133]],6);return Vs("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function ow(){let n=Os([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=ks((r,o,a,l)=>{let c=10*Ir(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,h=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos($n*r*2));if(e[d]?.[h]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos($n*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[ft(n,16777215,!0),ft(new Nn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),ft(new Ps(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),ft(new Nn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=bl([[.069,-.112],[.069,.109]],6);return Vs("soda","Canette de soda",.35,s,i,t,.42,.27)}function aw(){let n=Os([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=ks((s,r,o,a)=>{let l=15*Ir(o,a),c=8*Math.cos(s*$n*4);if(r>.321&&r<.435||r>.536&&r<.635){let h=o%4===0||(o+2*a)%7===0?14:0;return[240+l-h,236+l-h,216+l-h]}return[206+l+c,67+l+c,16+l*.7]}),t=[ft(n,16777215,!0),ft(Bs(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),ft(new Nn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=bl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Vs("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function lw(){let n=ks((s,r,o,a)=>{let l=8*Ir(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Os([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[ft(Bs(.138,.22,.061,.016,.004),14788675),ft(Bs(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),ft(new Tn(.106,.174).translate(0,-.004,.0395),16777215,!0),ft(e,2502456),ft(new Bt(.014,.017,.016,10).translate(.04,.117,.001),2503482),ft(new Ye(.008,.047,.027).translate(-.072,.014,-.002),3028798),ft(new Ye(.006,.02,.019).translate(-.072,-.043,-.002),3950414),ft(new Nn(.004,8).translate(.04,.066,.0397),15817792),ft(new Nn(.004,8).translate(-.04,.066,.0397),7903100),ft(Bs(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return Vs("radio","Talkie-walkie",.43,new fs(i),t,n,.61,.08)}function C0(){return[tw(),nw(),iw(),sw(),rw(),ow(),aw(),lw()]}var cw=[0,1,2,3,4,5,7,8,9,10];function R0(n){_0.forEach(({x:e,z:t},i)=>n(cw[i],new M(e,.8,t)))}function P0(){let n=[["Cube",new Ye(.33,.33,.33),"#b76b50",0,1.35],["Boule",new _i(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new pr(.29),"#d8ae53",0,1],["Brique",new Ye(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ye(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new _i(.6,2),"#dbab58",.6,3.7]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:yl(t,s),material:new gn({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Yo(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of C0()){let s=yl(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var $o={regolith:"R\xE9golithe sec",asphalt:"Asphalte rugueux",concrete:"B\xE9ton plein",steel:"T\xF4le d\u2019acier",grating:"Grille m\xE9tallique",glass:"Verre \xE9pais",ceramic:"Plaques c\xE9ramiques",rubber:"Caoutchouc",gravel:"Gravillons",panel:"Panneau composite"},Ko={district:"Ventilation urbaine",reactor:"R\xE9acteurs et relais",traffic:"Circulation urbaine"},wh=12,kf=6e5,uw=48,I0=/^audio-[a-z0-9-]{1,64}$/i,hw=/^data:audio\/(?:wav|wave|x-wav|mpeg|mp3|ogg|webm|mp4|aac|flac|x-flac);base64,[a-z0-9+/]+={0,2}$/i,Sn=(n,e,t,i)=>Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,D0=(n,e)=>typeof n=="string"&&n.trim()?n.trim().slice(0,42):e;function dw(n){return Object.hasOwn($o,n)||Object.hasOwn(Ko,n)||typeof n=="string"&&I0.test(n)}function L0(n){return!n||!dw(n.clip)?null:{clip:n.clip,volume:Sn(n.volume,0,1,.62),volumeVariation:Sn(n.volumeVariation,0,.8,.16),rate:Sn(n.rate,.4,2.5,1),rateVariation:Sn(n.rateVariation,0,.7,.1),pitch:Sn(n.pitch,-1200,1200,0),pitchVariation:Sn(n.pitchVariation,0,800,135)}}function Sl(n){let e=L0(n);return e?{...e,cooldown:Sn(n.cooldown,.03,2,.14),minImpact:Sn(n.minImpact,.1,12,.65),range:Sn(n.range,2,80,22)}:null}function wl(n){return Array.isArray(n)?n.slice(0,uw).flatMap((e,t)=>{let i=L0(e);return i?[{name:D0(e.name,"Zone "+(t+1)),x:Sn(e.x,-1024,1024,0),y:Sn(e.y,-2e4,2e4,1.5),z:Sn(e.z,-1024,1024,0),w:Sn(e.w,.1,1024,12),h:Sn(e.h,.1,256,5),d:Sn(e.d,.1,1024,12),...i,fadeDistance:Sn(e.fadeDistance,.05,100,2.5),fadeIn:Sn(e.fadeIn,.02,12,1.2),fadeOut:Sn(e.fadeOut,.02,12,1.8),mode:e.mode==="enter"?"enter":"loop"}]:[]}):[]}function Th(n){if(!Array.isArray(n))return[];let e=new Set;return n.slice(0,wh).filter(t=>!t||typeof t.id!="string"||!I0.test(t.id)||e.has(t.id)||typeof t.data!="string"||t.data.length>kf||!hw.test(t.data)?!1:(e.add(t.id),!0)).map(t=>({id:t.id,name:D0(t.name,"Son import\xE9"),data:t.data}))}function U0(n,e){let t=n.w/2-Math.abs(e.x-n.x),i=n.h/2-Math.abs(e.y-n.y),s=n.d/2-Math.abs(e.z-n.z);if(Math.min(t,i,s)<=0)return 0;let r=Math.min(1,t/Math.min(n.fadeDistance,n.w/2),i/Math.min(n.fadeDistance,n.h/2),s/Math.min(n.fadeDistance,n.d/2));return r*r*(3-2*r)}var fw=Math.ceil((16e6+Math.ceil(16e4)+1024)*4/3),NR=Math.ceil(fw/3900);var BR=new M(0,1,0),Tl=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,t,i):e;function F0(n){if(!Array.isArray(n?.pivot)||n.pivot.length!==3)return null;let e=n.mode==="slide"||n.mode==="screw"?n.mode:null,t=n.axis==="x"||n.axis==="z"?n.axis:null;return{...e?{mode:e,travel:Tl(n.travel,1,-16,16)}:{},...t?{axis:t}:{},pivot:n.pivot.map(i=>Tl(i,0,-6,6)),closed:Tl(n.closed,0,-180,180),open:Tl(n.open,95,-180,180),seconds:Tl(n.seconds,.7,.1,6)}}var OR=new M;var Eh=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",s=n+"Forearm",r=n+"Hand";Eh.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[s,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[r,n==="left"?"Main gauche":"Main droite",s,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Eh.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),r,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Vf=Object.freeze(Object.fromEntries(Eh.map(([n,e,t,i,s])=>[n,{label:e,parent:t,pivot:i,limit:s}]))),N0=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,e,t):i;function pw(n,e){let t=Vf[n];return{pivot:t.pivot.map((i,s)=>N0(e?.pivot?.[s],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:N0(e?.limit,0,150,t.limit)}}function z0(n){return Object.fromEntries(Eh.map(([e])=>[e,pw(e,n?.[e])]))}function B0(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}var mw={deform:{label:"D\xE9formation",max:.32,defaultSpeed:1.8,defaultScale:9},tint:{label:"Couleur anim\xE9e",max:1,defaultSpeed:.75,defaultScale:15},glow:{label:"\xC9mission lumineuse",max:2,defaultSpeed:.6,defaultScale:19}},gw=new WeakMap,xw={value:0},O0=["sine","triangle","pulse","stars"],Gf=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function k0(n){if(!n||typeof n!="object")return null;let e={};for(let[t,i]of Object.entries(mw)){let s=n[t];e[t]={strength:Gf(s?.strength,0,i.max,0),speed:Gf(s?.speed,0,8,i.defaultSpeed),scale:Gf(s?.scale,0,48,i.defaultScale),signal:O0.includes(s?.signal)&&(t!=="deform"||s.signal!=="stars")?s.signal:"sine",...t==="deform"?{}:{color:/^#[0-9a-f]{6}$/i.test(s?.color??"")?s.color:"#ffffff"}}}return e}function V0(n,e){if(!e||!Object.values(e).some(r=>r.strength>0))return n;let t=r=>{let o=e[r];return new jt(o.strength,o.speed,o.scale,O0.indexOf(o.signal))},i={uFoundryTime:xw,uFoundryDeform:{value:t("deform")},uFoundryTint:{value:t("tint")},uFoundryGlow:{value:t("glow")},uFoundryTintColor:{value:new He(e.tint.color)},uFoundryGlowColor:{value:new He(e.glow.color)}},s=`
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
        totalEmissiveRadiance+=uFoundryGlowColor*uFoundryGlow.x*foundrySurface(uFoundryGlow,vFoundryPosition);`)},n.customProgramCacheKey=()=>"foundry-effect-v1",gw.set(n,e),n}var G0=48,yw=3,_w=128,H0=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),vw=(n,e,t)=>Math.max(e,Math.min(t,n)),Mw=()=>structuredClone(H0.shield),El=(n,e,t,i)=>Number.isFinite(n)?vw(n,t,i):e;function Ch(n){let e=n?.mode==="lathe"?H0.bottle:Mw(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=G0?n.points.map(o=>[El(o?.[0],0,-1.5,1.5),El(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:El(n?.depth,e.depth,.025,1.5),bevel:El(n?.bevel,e.bevel,0,.15),segments:Math.round(El(n?.segments,32,yw,_w))}}function W0(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Ah(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function bw(n,e,t,i){let s=Ah(n,e,t),r=Ah(n,e,i),o=Ah(t,i,n),a=Ah(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function Sw(n){let e=Ch(n),t=e.mode==="lathe"?e.points:W0(e);if(t.length<3||t.length>G0*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&bw(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function X0(n){let e=Ch(n),t=Sw(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([d,f])=>new ce(Math.max(0,d),f));s[0].y>s.at(-1).y&&s.reverse(),s[0].x>0&&s.unshift(new ce(0,s[0].y)),s.at(-1).x>0&&s.push(new ce(0,s.at(-1).y)),i=new tl(s,e.segments);let r=[],o=i.attributes.position,a=new M,l=new M,c=new M,u=new M,h=i.index.array;for(let d=0;d<h.length;d+=3)a.fromBufferAttribute(o,h[d]),l.fromBufferAttribute(o,h[d+1]),c.fromBufferAttribute(o,h[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&r.push(h[d],h[d+1],h[d+2]);i.setIndex(r)}else{let s=W0(e),r=new cs;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new fr(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new zt(new Float32Array(s*2),2))}return i}var Hf=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Al=null,ww=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Dr(n){return typeof n=="string"&&ww.has(n.replace(/^custom-model-game-/,""))}function Qo(n){let e=n?.parts;return Dr(n?.id)||Dr(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Dr(t?.assetId))}function Y0(){if(Al)return Al;let n=P0(),e=Hf;return Al=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Al.set("chrome-sphere",{geometry:new _i(.54,2),material:new gn({color:"#c8e6ed",metalness:1,roughness:.16})}),Al}function Rh(n){return typeof n=="string"&&Y0().has(n)}function Wf(n){return Y0().get(n)??null}function Tw(n,e,t=[0,0,0],i=[1,1,1],s=[0,0,0]){return{name:n,shape:"asset",assetId:e,position:t,scale:i,rotation:s,color:"#ffffff",surface:"plain"}}function q0(n,e,t="prop",i={}){return{id:"custom-model-game-"+n,name:e,assetId:n,kind:t,inGame:!1,properties:{grabbable:t==="prop",frozen:!1,collidable:!0,supportWhileHeld:!1,...i},hitbox:{mode:"auto",shape:"convex",precision:48},parts:[Tw(e,n)]}}function Xf(){return[...[["spawn-cube","Cube"],["spawn-ball","Boule"],["spawn-tetrahedron","T\xE9tra\xE8dre"],["spawn-brick","Brique"],["spawn-large-rectangle","Grand rectangle"],["spawn-large-sphere","Grande sph\xE8re"],["spawn-phone","T\xE9l\xE9phone"],["spawn-bread","Baguette de pain"],["spawn-wheel","Roue"],["spawn-cup","Tasse"],["spawn-flashlight","Lampe torche"],["spawn-soda","Canette de soda"],["spawn-cone","C\xF4ne de chantier"],["spawn-radio","Talkie-walkie"]].map(([e,t])=>q0(e,t)),q0("chrome-sphere","Sph\xE8re chrome","prop",{frozen:!0})]}var Zf=/^[a-z0-9-]{1,40}$/i,Ew={chime:"Carillon",alert:"Alerte",click:"D\xE9clic"};function Aw(n,e){if(!n)return null;let t=e==="trigger"?n.phase==="exit"?"exit":"enter":n.phase==="use"?"use":null;if(!t)return null;let i=typeof n.door=="string"&&Zf.test(n.door)?n.door:null,s=typeof n.light=="string"&&Zf.test(n.light)?n.light:null,r=Object.hasOwn(Ew,n.sound)?n.sound:null,o=t==="use"&&K0.test(n.receiver??"")?n.receiver:null;return i||s||r||o?{phase:t,...o?{receiver:o}:{},...i?{door:i,doorState:["open","close","toggle"].includes(n.doorState)||e==="trigger"&&n.doorState==="hold"?n.doorState:"open"}:{},...i&&e==="trigger"&&n.doorState==="hold"?{doorDelay:Lr(n.doorDelay,.25,10,1.25)}:{},...s?{light:s,lightState:["on","off","toggle"].includes(n.lightState)?n.lightState:"on",lightColor:Q0.test(n.lightColor??"")?n.lightColor:"#ffbd54"}:{},...r?{sound:r,soundVolume:Lr(n.soundVolume,0,1,.6)}:{}}:null}var Kf="gorilla-lab-models-v1",ea=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),Cw=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,Rw=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),J0=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",windows:"Fa\xE7ade \xE9clair\xE9e",concrete:"B\xE9ton stri\xE9",ceramic:"Plaques c\xE9ramiques",speckle:"Min\xE9ral"}),jf=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),Pw=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Lr=(n,e,t,i)=>Number.isFinite(n)?Ee.clamp(n,e,t):i;function Qf(n){return{gravity:Lr(n?.physics?.gravity,0,2.5,1),bounce:Lr(n?.physics?.bounce,0,1.65,1)}}function $0(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Lr(n?.uv?.repeat,.01,100,1),angle:Lr(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Lr(n?.uv?.offset?.[t],-100,100,0))}}var Iw=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),K0=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,Q0=/^#[a-f\d]{6}$/i;function qf(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Gs(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ee.clamp(n[s],t,i):e)}function Z0(n){if(n==="arena")return n;if(typeof n!="string"||n.length>700)return null;try{let e=new URL(n);return e.protocol==="https:"&&!e.username&&!e.password?e.href:null}catch{return null}}var Jf=new Set(["box","sphere","capsule","convex"]);function Dw(n){if(n?.mode==="box")return{mode:"box",center:Gs(n.center,0,-6,6),size:Gs(n.size,.5,.025,12)};let e=Math.round(Ee.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Jf.has(n.shape)?n.shape:"box",center:Gs(n.center,0,-6,6),size:Gs(n.size,.5,.025,12),rotation:Gs(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Jf.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function ms(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ea.models||JSON.stringify(n).length>ea.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!Qo(i)).map(i=>{if(typeof i?.id!="string"||!K0.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ea.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");e.add(i.id);let s=new Set;return{id:i.id,name:qf(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:z0(i.avatarRig)}:{},...Rh(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:{...Object.fromEntries(Object.entries(Iw).map(([r,o])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:o])),...i.kind!=="structure"&&i.kind!=="avatar"&&i.properties?.drivable===!0?{drivable:!0}:{}},hitbox:Dw(i?.hitbox),...i.physics?{physics:Qf(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Dr(r?.assetId)).map((r,o)=>{let a=k0(r?.effect),l=typeof r?.actionId=="string"&&Zf.test(r.actionId)&&!s.has(r.actionId)?r.actionId:null;l&&s.add(l);let c=i.kind==="structure"?Aw(r?.reaction,r?.zone):null,u=i.kind==="structure"&&r?.zone!=="trigger"?F0(r?.hinge):null;return{name:qf(r?.name,`Pi\xE8ce ${o+1}`),...u?{hinge:u}:{},...a?{effect:a}:{},...l?{actionId:l}:{},...c?{reaction:c}:{},...Object.hasOwn(Vf,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=ea.parts?{group:r.group}:{},shape:r?.shape==="asset"&&Rh(r?.assetId)?"asset":Object.hasOwn(Rw,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Rh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Ch(r?.profile)}:{},position:Gs(r?.position,0,-3,3),rotation:Gs(r?.rotation,0,-360,360),scale:Gs(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&Q0.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(Pw,r?.zone)?{zone:r.zone}:{},...r?.zone==="trigger"&&typeof r?.notice?.text=="string"&&r.notice.text.trim()?{notice:{text:qf(r.notice.text,"Message"),phase:r.notice.phase==="exit"?"exit":"enter"}}:{},...Object.hasOwn(jf,r?.finish)?{finish:r.finish}:{},...r?.zone==="trigger"&&Z0(r.portal)?{portal:Z0(r.portal)}:{},...r?.uv?{uv:$0(r)}:{},surface:Object.hasOwn(J0,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=ea.textureBytes&&Cw.test(r.texture)?r.texture:null}})}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&B0(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function ex(n){try{let e=(n??globalThis.localStorage)?.getItem(Kf);if(e&&e.length<=ea.fileBytes)return ms(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function Lw(n){switch(n){case"tetrahedron":return new pr(Math.sqrt(3)/2);case"sphere":return new Mi(.5,20,12);case"cylinder":return new Bt(.5,.5,1,20);case"cone":return new hr(.5,1,20);case"torus":return new Wn(.365,.135,8,24);case"capsule":return new Rs(.28,.44,6,16);case"diamond":return new vi(.5);default:return new Ye(1,1,1)}}var tx=Object.keys(J0),_n=64,Cl=4,nx=2,$i;function ix(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"windows":return e%8<2||t%8<4||t%8===7?100+19*s:158+32*s;case"concrete":return 170+36*s+(e%8===0?-16:9);case"ceramic":return e%16===0||t%16===0?145:197+33*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function sx(){if($i)return $i;let n=_n*Cl,e=_n*nx,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/_n)*Cl+Math.floor(s/_n),o=ix(tx[r],s%_n,i%_n),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return $i=new oi(t,n,e),$i.colorSpace=bt,$i.magFilter=ln,$i.minFilter=zn,$i.generateMipmaps=!0,$i.needsUpdate=!0,$i}var Yf=new Map,Bi;function Uw(){if(Bi)return Bi;let n=new Uint8Array(_n**2*4);for(let e=0;e<_n;e++)for(let t=0;t<_n;t++){let i=t>>3,s=e>>3,r=(i*13+s*17+i*s*7)%37,o=r>13&&t%8>=2&&t%8<=6&&e%8>=4&&e%8<=6;n.set(o?r%5<3?[184,129,60,255]:[97,158,182,255]:[0,0,0,255],(e*_n+t)*4)}return Bi=new oi(n,_n,_n),Bi.colorSpace=bt,Bi.wrapS=Bi.wrapT=In,Bi.magFilter=ln,Bi.minFilter=zn,Bi.generateMipmaps=!0,Bi.needsUpdate=!0,Bi}function j0(n){if(Yf.has(n))return Yf.get(n);let e=new Uint8Array(_n*_n*4);for(let i=0;i<_n;i++)for(let s=0;s<_n;s++){let r=ix(n,s,i),o=(i*_n+s)*4;e.set([r,r,r,255],o)}let t=new oi(e,_n,_n);return t.colorSpace=bt,t.wrapS=t.wrapT=In,t.magFilter=ln,t.minFilter=zn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Yf.set(n,t),t}function rx(n){return!!(n?.effect||n?.texture||n?.uv||n?.surface==="windows"||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function Fw(n,e,t){let{projection:i,repeat:s,angle:r,offset:o}=$0(e),a=Ee.degToRad(r),l=Math.cos(a),c=Math.sin(a),{position:u,normal:h,uv:d}=n.attributes,f=new M,p=new M;for(let x=0;x<u.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){f.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(h,x);let _=Math.abs(p.x),v=Math.abs(p.y),y=Math.abs(p.z);_>=v&&_>=y?(g=f.z,m=f.y):v>=y?(g=f.x,m=f.z):(g=f.x,m=f.y)}d.setXY(x,(g*l-m*c)*s+o[0],(g*c+m*l)*s+o[1])}}function Ph(n,e=new M(...n.scale)){let t=n.shape==="asset"?Wf(n.assetId):null,i=n.shape==="custom"?X0(n.profile):t?.geometry?.clone()??Lw(n.shape),s=i.index?i.toNonIndexed():i;s!==i&&i.dispose(),s.attributes.uv||s.setAttribute("uv",new Ne(new Float32Array(s.attributes.position.count*2),2)),n.uv&&Fw(s,n,e);let r=n.rotation.map(Ee.degToRad);s.scale(...n.scale),s.rotateX(r[0]),s.rotateY(r[1]),s.rotateZ(r[2]),s.translate(...n.position);let o=new He(n.color),a=s.attributes.position.count,l=new Float32Array(a*3),c=s.attributes.uv,u=tx.indexOf(n.surface),h=u%Cl,d=Math.floor(u/Cl),f=s.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&f?(l[p*3]=f.getX(p)*o.r,l[p*3+1]=f.getY(p)*o.g,l[p*3+2]=f.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&n.surface!=="windows"&&c.setXY(p,(h+.05+c.getX(p)*.9)/Cl,(d+.05+c.getY(p)*.9)/nx);return s.setAttribute("color",new zt(l,3)),s}function Nw(n){return V0(zw(n),n?.effect)}function zw(n){let e=n?.shape==="asset"?Wf(n.assetId):null,t=jf[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new bi().load(n.texture);a.colorSpace=bt,a.wrapS=a.wrapT=In,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=In),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new He(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:s}=t??jf.original;if(n?.surface==="windows"&&!n.texture)return new gn({vertexColors:!0,map:j0("windows"),emissive:"#ffffff",emissiveMap:Uw(),emissiveIntensity:1.3,roughness:i,metalness:s});if(!n?.texture)return new gn({vertexColors:!0,map:n?.uv?j0(n.surface):sx(),roughness:i,metalness:s});let r=new bi().load(n.texture);return r.colorSpace=bt,r.wrapS=r.wrapT=In,new gn({vertexColors:!0,map:r,roughness:i,metalness:s})}function ta(n){return n?.parts?.some(rx)?n.parts.map(Nw):new gn({vertexColors:!0,map:sx(),roughness:.68})}function na(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==$i&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function $f(n,e=null){let t=n.map(s=>{if(!e||s.uv?.projection!=="metric")return Ph(s);let r=new nn(...s.rotation.map(Ee.degToRad),"ZYX"),o=new M(...s.scale).multiply(new M(...[0,1,2].map(a=>new M().setComponent(a,1).applyEuler(r).multiply(e).length())));return Ph(s,o)}),i=yh(t,n.some(rx));return t.forEach(s=>s.dispose()),i.center(),i.computeBoundingBox(),i}function ia(n,e=null){let t=$f(n.parts),i=t.boundingBox.getSize(new M).max(new M(1e-5,1e-5,1e-5));return e&&n.parts.some(s=>s.uv?.projection==="metric")&&(t.dispose(),t=$f(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function Rl(n){let e=new dn;for(let t of n.parts??[]){let i=Ph(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function sa(n){return Rl(n).getSize(new M)}function ox(n){let e=Rl(n),t=e.getCenter(new M),i=e.getSize(new M),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Jf.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ee.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):i,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function Bw(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),u=c.toArray().map(h=>h.toFixed(4)).join(",");s.has(u)||(s.add(u),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),r.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return r}function Ow(n,e=null){let t=ox(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let s=(e??t.size).clone().max(new M(1e-5,1e-5,1e-5)),r=s.toArray(),o=Math.max(...r),a=r.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...r.filter((h,d)=>d!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new Rs(l,c,Math.max(2,Math.round(i/8)),i):new Mi(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/s.x,1/s.y,1/s.z),u}if(t.shape==="convex"&&n.parts?.length){let s=$f(n.parts),r=Bw(s,t.precision);if(s.dispose(),r.length>=4)try{let o=new fs(r),a=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new Ye(1,1,1)}function ax(n,e=null){let t=ox(n),i=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):i.clone(),r=t.size.clone().multiply(s).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(s).divide(i),a=Ow(n,r);return a.scale(r.x,r.y,r.z),a.rotateX(Ee.degToRad(t.rotation.x)),a.rotateY(Ee.degToRad(t.rotation.y)),a.rotateZ(Ee.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function lx(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=Rl(n),i=t.getCenter(new M),s=t.getSize(new M).max(new M(1e-5,1e-5,1e-5)),r=e?e.clone().divide(s):new M(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Ph(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,notice:o.notice,portal:o.portal,center:l.getCenter(new M).sub(i).multiply(r),size:l.getSize(new M).multiply(r).max(new M(.01,.01,.01))};return a.dispose(),[c]})}var ep=12,tp=72,np=40,ui=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function Ih(n){return Array.isArray(n)?n.slice(0,ep).flatMap(e=>{let t=[];for(let r of Array.isArray(e?.points)?e.points.slice(0,np):[]){if(!Array.isArray(r)||r.length!==3||!r.every(Number.isFinite))continue;let o=[ui(r[0],-1024,1024,0),ui(r[1],-256,512,0),ui(r[2],-1024,1024,0)],a=t.at(-1);(!a||Math.hypot(...o.map((l,c)=>l-a[c]))>.15)&&t.push(o)}let i=t.at(-1);if(t.length>2&&Math.hypot(...t[0].map((r,o)=>r-i[o]))<=.15&&t.pop(),t.length<3)return[];let s=[];for(let r of Array.isArray(e.models)?e.models.slice(0,2):[]){let o=r?.model;if(!(!o||Qo(o)||!Array.isArray(o.parts)||!o.parts.length))try{let[a]=ms({version:1,models:[o]}).models;a?.parts.length&&s.push({model:a,w:ui(r.w,.08,30,2),h:ui(r.h,.08,20,1.5),d:ui(r.d,.08,50,4)})}catch{}}return s.length?[{name:typeof e.name=="string"&&e.name.trim()?e.name.trim().slice(0,42):"Flux de circulation",points:t,models:s,count:Math.round(ui(e.count,1,tp,8)),speed:ui(e.speed,.5,160,10),pause:ui(e.pause,0,25,0),interval:ui(e.interval,3,180,20),phase:ui(e.phase,0,359,0),brightness:ui(e.brightness,.25,6,1),spread:ui(e.spread,.25,1,1),smooth:e.smooth===!0,visible:e.visible!==!1}]:[]}):[]}var dx=512,sp=1/2.6**2,Uh=1e4,Il=20,kw=1e6,rp=1e4,Vw=1e4,op=10,ap=10,Gw=1e4,Hw=16,ra=1e4,cx=new WeakMap,Oi=Ee.clamp,ki=Ee.lerp,Dl=n=>n*n*(3-2*n);function Dt(n,e,t,i){return Number.isFinite(n)?Oi(n,e,t):i}function fx(n){if(!n)return null;let e=ms({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var Ww=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function px(n,e=Hw){return Math.round(Dt(n,1,dx,e))}function Xw(n,e,t,i,s){if(Number.isFinite(n[e+"Density"]))return Dt(n[e+"Density"],0,Il,0);let r=Dt(n[e],0,1,0);if(!r)return 0;let o=Math.max(1,Math.round(Math.min(s,t*i)*r));return Dt(o/t,0,Il,0)}var qw=["grass","shrub","model"],Yw=["keep","fit","stretch"],Zw=/^#[a-f\d]{6}$/i,jw=20;function Jw(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(Dt(n.minHeight,-300,300,-300),Dt(n.maxHeight,-300,300,300)),[s,r]=e(Dt(n.minX,0,100,0),Dt(n.maxX,0,100,100)),[o,a]=e(Dt(n.minZ,0,100,0),Dt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:s,maxX:r,minZ:o,maxZ:a,maxSlope:Dt(n.maxSlope,0,90,90),yaw:Dt(n.yaw,-360,360,0),yawVariation:Dt(n.yawVariation,0,360,360)}}function $w(n){return n?{x:Dt(n.x,-256,256,0),z:Dt(n.z,-256,256,0),radius:Dt(n.radius,.1,512,5),blend:Dt(n.blend,0,1,.5)}:null}function Ll(n={}){let e=fx(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",s=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,op).map(r=>Zw.test(r)?r:i);for(;s.length<2;)s.push(s.at(-1)??i);return{kind:t,model:e,density:Dt(n.density,0,Il,1),colors:s,seed:Math.round(Dt(n.seed,0,2147483647,1)),size:Dt(n.size,.05,rp,1),fit:Yw.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:Dt(n.variation,0,ap,0),...n.scatter?{scatter:Jw(n.scatter)}:{}}}function Kw(n,e){return Array.isArray(n.rules)?n.rules.slice(0,Uh).filter(t=>t&&typeof t=="object"&&qw.includes(t.kind)).filter(t=>t.kind!=="model"||fx(t.model)).map(Ll):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,s,r])=>{let o=Xw(n,t,e,i,s),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ll({kind:t,model:a,density:o,seed:n.seed,size:Dt(n[t+"Size"],.1,5,1)*(a?r:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function gs(n={},e=1){let t=px(n?.detail),i=n?.heights;return{detail:t,...["varied","irregular","staggered"].includes(n?.triangulation)?{triangulation:n.triangulation}:{},...n?.thickness>0?{thickness:Dt(n.thickness,0,100,0)}:{},seed:Math.round(Dt(n?.seed,0,2147483647,1)),amplitude:Dt(n?.amplitude,0,1e4,0),frequency:Dt(n?.frequency,1e-5,100,.12),octaves:Math.round(Dt(n?.octaves,1,jw,3)),roughness:Dt(n?.roughness,0,1,.42),ridge:Dt(n?.ridge,0,1,0),edgeFade:Dt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:$w(n.reliefArea)}:{},rules:Kw(n??{},e),...["triplanar","regolith"].includes(n?.projection)?{projection:n.projection}:{},textureDensity:Dt(n?.textureDensity,1e-4,Gw,sp),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&Ww.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,s=>Dt(s,-ra,ra,0)):null}}function lp(n,e,t){return t!==void 0&&Yn(n,e,t)>.5}function ip(n,e=n.detail){let{triangulation:t,seed:i}=n;if(t!=="irregular"&&t!=="staggered")return null;let s=e+1,r=s**2,o=new Float32Array(r),a=new Float32Array(r);for(let l=0;l<=e;l++)for(let c=0;c<=e;c++){let u=l*s+c,h=l>0&&l<e&&c>0&&c<e,d=h&&t==="irregular";o[u]=c+(d?(2*Yn(c,l,i)-1)*.2:h?.25*(l%2?1:-1):0),a[u]=l+(d?(2*Yn(c,l,i+417)-1)*.2:0)}return{x:o,z:a,staggered:t==="staggered"}}function mx(n,e,t,i){return i?.staggered?e%2===1:lp(n,e,t)}var Hs={a:0,b:0,c:0,u:0,v:0};function Dh(n,e,t,i,s,r){let o=n-t.x[i],a=e-t.z[i],l=t.x[s]-t.x[i],c=t.z[s]-t.z[i],u=t.x[r]-t.x[i],h=t.z[r]-t.z[i],d=1/(l*h-c*u),f=(o*h-a*u)*d,p=(l*a-c*o)*d;return f<-1e-6||p<-1e-6||f+p>1+1e-6?!1:(Hs.a=i,Hs.b=s,Hs.c=r,Hs.u=f,Hs.v=p,!0)}function ux(n,e,t,i,s,r,o){let a=r*i+s,l=a+1,c=a+i,u=c+1;return mx(s,r,o,t)?Dh(n,e,t,a,c,u)||Dh(n,e,t,a,u,l):Dh(n,e,t,a,c,l)||Dh(n,e,t,u,l,c)}function cp(n,e,t,i,s){let r=t+1,o=Math.min(t-1,Math.floor(n)),a=Math.min(t-1,Math.floor(e));if(ux(n,e,s,r,o,a,i))return!0;for(let l=Math.max(0,a-1);l<=Math.min(t-1,a+1);l++)for(let c=Math.max(0,o-1);c<=Math.min(t-1,o+1);c++)if((c!==o||l!==a)&&ux(n,e,s,r,c,l,i))return!0;return!1}function gx(n,e,t,i,s,r){let o=Oi(t,0,e),a=Oi(i,0,e);if(r&&cp(o,a,e,s,r)){let{a:_,b:v,c:y,u:w,v:E}=Hs;return n[_]+(n[v]-n[_])*w+(n[y]-n[_])*E}let l=Math.min(e-1,Math.floor(o)),c=Math.min(e-1,Math.floor(a)),u=o-l,h=a-c,d=e+1,f=c*d+l,p=n[f],x=n[f+1],g=n[f+d],m=n[f+d+1];return lp(l,c,s)?u>=h?p+(x-p)*u+(m-x)*h:p+(m-g)*u+(g-p)*h:u+h<=1?p+(x-p)*u+(g-p)*h:m+(g-m)*(1-u)+(x-m)*(1-h)}function up(n,e){let t=px(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=ip(n),o=ip(n,t),a=n.triangulation?n.seed:void 0,l=Array.from({length:i**2},(c,u)=>gx(n.heights,n.detail,(o?.x[u]??u%i)*s,(o?.z[u]??Math.floor(u/i))*s,a,r));return{...n,detail:t,heights:l}}function Yn(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Lh(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Dl(n-i),o=Dl(e-s),a=ki(Yn(i,s,t),Yn(i+1,s,t),r),l=ki(Yn(i,s+1,t),Yn(i+1,s+1,t),r);return 2*ki(a,l,o)-1}function Ur(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:h,reliefArea:d,heights:f}=i,p=cx.get(n),x=p&&p.w===e&&p.d===t&&p.detail===s&&p.triangulation===i.triangulation&&p.seed===r&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===h&&p.reliefArea===d;if(x&&p.heights===f)return p;let g=s+1,m=x?p.layout:ip(i),_=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let w=0;w<=s;w++)for(let E=0;E<=s;E++){let R=w*g+E,C=((m?.x[R]??E)/s-.5)*e,b=((m?.z[R]??w)/s-.5)*t,S=1;if(d){let U=Math.hypot(C-d.x,b-d.z);if(U>=d.radius)continue;d.blend&&(S=Dl(Math.min(1,(d.radius-U)/(d.radius*d.blend))))}let A=C*a,I=b*a,z=0,N=1,k=0;for(let U=0;U<l;U++){let V=Lh(A*2**U,I*2**U,r+U*13);z+=N*ki(V,1-2*Math.abs(V),u),k+=N,N*=c}let O=h?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(E/s-.5))*2,(.5-Math.abs(w/s-.5))*2)),h*2):1,J=l===3&&c===.42&&u===0&&h===0;_[w*g+E]=S*(J?o*(.62*Lh(A,I,r)+.26*Lh(A*2.03,I*2.03,r+13)+.12*Lh(A*4.13,I*4.13,r+37)):o*z/k*O)}let v=f?_.map((w,E)=>w+f[E]):_,y={w:e,d:t,detail:s,seed:r,layout:m,triangulation:i.triangulation,diagonalSeed:i.triangulation?r:void 0,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:h,reliefArea:d,heights:f,procedural:_,surface:v};return cx.set(n,y),y}function Fh(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return gx(o,i,(e/s+.5)*i,(t/r+.5)*i,n.diagonalSeed,n.layout)}function oa(n=0){return(Math.round(n/90)%4+4)%4*90}function xx(n){let e=oa(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function yx(n,e,t){let{cos:i,sin:s}=xx(n),r=e-n.x,o=t-n.z;return[i*r-s*o,s*r+i*o]}function Pl(n){return oa(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function hx(n,e,t){return n.y+Fh(Ur(n),...yx(n,e,t))}var Qw=.25;function hp(n,e){if(!n?.terrain||!e?.terrain||n===e)return null;let t=null,i=Pl(n),s=Pl(e);for(let[r,o,a,l]of[["x","z","w","d"],["z","x","d","w"]]){let c=Math.max(n[o]-i[l]/2,e[o]-s[l]/2),u=Math.min(n[o]+i[l]/2,e[o]+s[l]/2);if(!(u-c<.05))for(let h of[-1,1]){let d=e[r]-h*s[a]/2,f=d-(n[r]+h*i[a]/2);Math.abs(f)<=Qw&&(!t||Math.abs(f)<Math.abs(t.delta))&&(t={axis:r,along:o,length:a,span:l,lo:c,hi:u,side:h,edge:d,delta:f})}}return t}function _x(n,e,t=1.5){let i=hp(n,e);if(!i)return null;let{axis:s,along:r,length:o,span:a,lo:l,hi:c,side:u,edge:h,delta:d}=i,f=n.terrain;if(Math.abs(Pl(n)[a]-Pl(e)[a])<1e-6&&Math.abs(n[r]-e[r])<1e-6){let b=e.terrain.detail,S=Math.ceil(f.detail/b)*b;S<=dx&&(f=up(f,S))}let p={...n,[s]:n[s]+d,terrain:f},{detail:x,procedural:g,heights:m,surface:_,layout:v}=Ur(p),y=m?.slice()??Array((x+1)**2).fill(0),w=Math.max(t,Pl(p)[o]/x),{cos:E,sin:R}=xx(p),C=!1;for(let b=0;b<=x;b++)for(let S=0;S<=x;S++){let A=b*(x+1)+S,I=((v?.x[A]??S)/x-.5)*p.w,z=((v?.z[A]??b)/x-.5)*p.d,N=p.x+E*I+R*z,k=p.z-R*I+E*z,O=r==="x"?N:k;if(O<l-1e-6||O>c+1e-6)continue;let J=Math.max(0,u*(h-(s==="x"?N:k)));if(J>w)continue;let U=s==="x"?hx(e,h,k):hx(e,N,h),V=ki(_[A],U-p.y,Dl(1-J/w))-g[A];y[A]=Oi(V,-ra,ra),C||=y[A]!==V}return{piece:{...p,terrain:{...f,heights:y}},clipped:C}}function eT(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,h=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===e&&d===t||(u+=s[d*r+f],h++);return u/h}function vx(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Ur(n),{detail:l,w:c,d:u,surface:h,procedural:d,layout:f}=a,[p,x]=yx(n,e,t),g=Oi(p,-c/2,c/2),m=Oi(x,-u/2,u/2);if((p-g)**2+(x-m)**2>=s**2)return!1;let _=(p/c+.5)*l,v=(x/u+.5)*l,y=c/l,w=u/l,E=Math.max(0,Math.ceil(_-s/y-(f?.25:0))),R=Math.min(l,Math.floor(_+s/y+(f?.25:0))),C=Math.max(0,Math.ceil(v-s/w-(f?.25:0))),b=Math.min(l,Math.floor(v+s/w+(f?.25:0))),S=Number.isFinite(o)?o-n.y:Fh(a,p,x),A=l+1,I=a.heights?.slice()??new Array(A**2).fill(0),z=!1,N=!1;function k(O,J,U){z=!0;let V=J*A+O,$=I[V],re;if(i==="raise"||i==="lower")re=$+(i==="raise"?1:-1)*r*U;else{let de=i==="flatten"?S:eT(a,O,J);re=ki(h[V],de,Math.min(1,r)*U)-d[V]}re=Oi(re,-ra,ra),!(Math.abs(re-$)<1e-7)&&(I[V]=re,N=!0)}for(let O=C;O<=b;O++)for(let J=E;J<=R;J++){let U=O*A+J,V=Math.hypot(((f?.x[U]??J)-_)*y,((f?.z[U]??O)-v)*w)/s;V<1&&k(J,O,Dl(1-V))}if(!z){let O=Oi(_,0,l),J=Oi(v,0,l),U=Math.min(l-1,Math.floor(O)),V=Math.min(l-1,Math.floor(J)),$=O-U,re=J-V;if(f&&cp(O,J,l,a.diagonalSeed,f)){let{a:de,b:Te,c:Re,u:Ue,v:H}=Hs,K=1-Ue-H>=Math.max(Ue,H)?de:Ue>=H?Te:Re;k(K%A,Math.floor(K/A),1)}else{let de=$+re<=1,Te=de?1-$-re:$+re-1,Re=de?$:1-re,Ue=de?re:1-$;if(Te>=Math.max(Re,Ue)){let H=+!de;k(U+H,V+H,1)}else Re>=Ue?k(U+1,V,1):k(U,V+1,1)}}return N&&(n.terrain.heights=I),N}function Mx(n,e){let t=e.terrain?.projection==="regolith";if(!t&&e.terrain?.projection!=="triplanar")return;let i=n.onBeforeCompile,s=n.customProgramCacheKey(),r=Ee.degToRad(e.uvRotation??0),o=Math.sqrt(e.terrain.textureDensity??sp)/(e.uvScale??1);n.onBeforeCompile=function(a,l){Object.assign(a.uniforms,{terrainRepeat:{value:o},terrainUvBasis:{value:new ce(Math.cos(r),Math.sin(r))},terrainUvOffset:{value:new ce(e.uvOffsetX??0,e.uvOffsetY??0)},terrainHalfSize:{value:new ce(e.w/2,e.d/2)}});let c=`varying vec3 terrainPoint; varying vec3 terrainNormal;
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
    `),i.call(this,a,l)},n.customProgramCacheKey=()=>s+(t?"|terrain-regolith":"|terrain-triplanar")}function bx(n){let{w:e,d:t,terrain:i}=n,{detail:s,layout:r,diagonalSeed:o}=Ur(n),a=s+1,l=a**2,c=i.thickness??0,u=c?4*s:0,h=l*(c?2:1)+4*u,d=new Float32Array(h*3),f=new Float32Array(h*2),p=h>65536?Uint32Array:Uint16Array,x=s**2*6,g=new p(x*(c?2:1)+u*6),m=Math.sqrt(i.textureDensity??sp),_=0;for(let w=0;w<=s;w++)for(let E=0;E<=s;E++){let R=w*a+E,C=(r?.x[R]??E)/s,b=(r?.z[R]??w)/s;if(d[3*R]=(C-.5)*e,d[3*R+2]=(b-.5)*t,f[2*R]=C*e*m,f[2*R+1]=(1-b)*t*m,w>=s||E>=s)continue;let S=R+1,A=R+a,I=A+1;mx(E,w,o,r)?(g[_++]=R,g[_++]=A,g[_++]=I,g[_++]=R,g[_++]=I,g[_++]=S):(g[_++]=R,g[_++]=A,g[_++]=S,g[_++]=I,g[_++]=S,g[_++]=A)}let v=[];if(c){d.copyWithin(l*3,0,l*3),f.copyWithin(l*2,0,l*2);for(let E=0;E<x;E+=3)g[_++]=l+g[E],g[_++]=l+g[E+2],g[_++]=l+g[E+1];let w=(E,R)=>{for(let C=0;C<s;C++){let b=E+C*R,S=b+R,A=l*2+v.length*4;v.push([b,S]);for(let I=0;I<4;I++){let z=I%2?S:b;d[3*(A+I)]=d[3*z],d[3*(A+I)+2]=d[3*z+2];let N=Math.abs(R)===1?e:t;f[2*(A+I)]=(C+I%2)/s*N*m,f[2*(A+I)+1]=I<2?c*m:0}g.set([A,A+1,A+2,A+1,A+3,A+2],_),_+=6}};w(0,1),w(s,a),w(l-1,-1),w(l-a,-a)}let y=new ct;return y.setAttribute("position",new zt(d,3).setUsage(wr)),y.setAttribute("uv",new zt(f,2)),y.setIndex(new zt(g,1)),y.userData.terrainSides=v,dp(y,n),y}function dp(n,e){let{surface:t}=Ur(e),{position:i}=n.attributes,s=e.terrain.thickness??0,r=t.length;for(let o=0;o<r;o++)i.setY(o,t[o]),s&&i.setY(r+o,t[o]-s);n.userData.terrainSides.forEach(([o,a],l)=>{let c=r*2+l*4;i.setY(c,t[o]),i.setY(c+1,t[a]),i.setY(c+2,t[o]-s),i.setY(c+3,t[a]-s)}),i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function tT(n,e,t,i){let{detail:s,w:r,d:o,surface:a,layout:l}=n,c=Oi((e/r+.5)*s,0,s),u=Oi((t/o+.5)*s,0,s);if(l&&cp(c,u,s,n.diagonalSeed,l)){let{a:_,b:v,c:y}=Hs,w=(l.x[v]-l.x[_])*r/s,E=(l.z[v]-l.z[_])*o/s,R=a[v]-a[_],C=(l.x[y]-l.x[_])*r/s,b=(l.z[y]-l.z[_])*o/s,S=a[y]-a[_];return i.set(R*b-E*S,E*C-w*b,w*S-R*C).normalize()}let h=Math.min(s-1,Math.floor(c)),d=Math.min(s-1,Math.floor(u)),f=s+1,p=d*f+h;if(lp(h,d,n.diagonalSeed)){let _=c-h>=u-d,v=_?a[p+1]-a[p]:a[p+f+1]-a[p+f],y=_?a[p+f+1]-a[p+1]:a[p+f]-a[p];return i.set(-v*s/r,1,-y*s/o).normalize()}let x=c-h+u-d<=1,g=x?a[p+1]-a[p]:a[p+f+1]-a[p+f],m=x?a[p+f]-a[p]:a[p+f+1]-a[p+1];return i.set(-g*s/r,1,-m*s/o).normalize()}function nT(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new ct;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function iT(){return new _i(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function sT(n,e,t){if(e==="stretch")return new M().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function rT(n,e,t,i){let s=e.scatter;if(!s)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(s.minX/100-.5)*n.w,o=(s.maxX/100-.5)*n.w,a=(s.minZ/100-.5)*n.d,l=(s.maxZ/100-.5)*n.d,c=(o-r)*(l-a),u=[],h=new M;if(!c||!e.density)return{requested:0,positions:u,area:c};let d=Math.cos(Ee.degToRad(s.maxSlope)),f=s.maxSlope<90,p=s.minHeight>-300||s.maxHeight<300,x=(y,w)=>{if(p){let E=n.y+Fh(t,y,w);if(E<s.minHeight||E>s.maxHeight)return!1}return!f||tT(t,y,w,h).y>=d-1e-7},g=1;if(f||p){let y=0,w=32;for(let E=0;E<w;E++)for(let R=0;R<w;R++)x(ki(r,o,(R+.5)/w),ki(a,l,(E+.5)/w))&&y++;g=y/w**2}let m=Math.round(c*g*e.density),_=Math.min(m,i),v=f||p?Math.min(i*4,Math.ceil(_/Math.max(g,.001))*3):_;for(let y=0;y<v&&u.length<_;y++){let w=ki(r,o,Yn(y,27,e.seed)),E=ki(a,l,Yn(y,27,e.seed+1));x(w,E)&&u.push([w,E])}return{requested:m,positions:u,area:c*g}}function Sx(n){let e=new Jt,t=Ur(n);e.userData.distribution=[];let i=kw,s=Vw;for(let[r,o]of(n.terrain.rules??[]).entries()){let{requested:a,positions:l,area:c}=rT(n,o,t,i),u=l?l.length:Math.min(a,i),h=o.collidable?Math.min(u,s):0;if(i-=u,s-=h,e.userData.distribution[r]={requested:a,count:u,area:c,collisions:h},!u)continue;let d=o.kind==="grass",f=o.model?sT(sa(o.model),o.fit,o.size):null,p=o.model?ia(o.model,f):d?nT():iT();f?p.scale(...f):p.scale(o.size,o.size,o.size),p.computeBoundingBox(),p.translate(0,-p.boundingBox.min.y,0),p.computeBoundingBox();let x=o.model?ta(o.model):new li({color:"#ffffff",side:d?cn:ri,flatShading:!0});if(d&&n.terrain.grassTexture){let v=new bi().load(n.terrain.grassTexture);v.colorSpace=bt,x.map=v,x.userData.ownTexture=!0}let g=new ur(p,x,u);g.name=o.kind,g.userData={ruleIndex:r,seed:o.seed,variation:o.variation,collidable:o.collidable,collisionCount:h,requestedCount:a,positions:l,scatter:o.scatter},g.instanceMatrix.setUsage(wr),g.receiveShadow=!0;let m=o.colors.map(v=>new He(v)),_=new He;for(let v=0;v<u;v++){let y=Yn(v,41,o.seed)*(m.length-1),w=Math.floor(y);g.setColorAt(v,_.copy(m[w]).lerp(m[w+1],y-w))}e.add(g)}return oT(e,n),e}function oT(n,e){let t=Ur(e),i=new Wt;for(let s of n.children){let{seed:r,variation:o,positions:a,scatter:l}=s.userData;for(let c=0;c<s.count;c++){let u=a?.[c][0]??(Yn(c,27,r)-.5)*.96*e.w,h=a?.[c][1]??(Yn(c,27,r+1)-.5)*.96*e.d;i.position.set(u,Fh(t,u,h),h),i.rotation.y=l?Ee.degToRad(l.yaw+Yn(c,27,r+2)*l.yawVariation):Yn(c,27,r+2)*Math.PI*2,i.scale.setScalar(ki(Math.max(.05,1-o),1+o,Yn(c,27,r+3))),i.updateMatrix(),s.setMatrixAt(c,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function wx(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),na(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Ex=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],fp=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Ul={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},lT=16e6,aa=512,Ki=1024,hi=2e4,Ws=512,Nh=1024,Ft=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Tx=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function cT(n){return!n||!Number.isFinite(n.seconds)||!(n.x>0||n.z>0)?null:{x:Ft(n.x,0,640,0),z:Ft(n.z,0,640,0),seconds:Ft(n.seconds,10,900,90),phase:Ft(n.phase,-360,360,0),rise:Ft(n.rise,0,100,0)}}function vn(n){if(typeof n=="string"){if(new TextEncoder().encode(n).length>lT)throw Error("Cette map d\xE9passe 16 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length>aa)throw Error("Choisis une map Gorilla Lab v1 avec 0 \xE0 "+aa+" pi\xE8ces.");let e=n.spawn??{},t=n.boundary,i=ph(n.environment),s=wl(n.soundZones),r=Th(n.soundAssets),o=Ih(n.traffic),a=n.pieces.filter(l=>!Dr(l?.sceneryId)&&!Qo(l?.model));return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Tx(n.name,56,"Ma map"),worldSize:Ft(n.worldSize,24,2048,240),...n.exercise==="boules"?{exercise:"boules"}:{},...i?{environment:i}:{},...o.length?{traffic:o}:{},...s.length?{soundZones:s}:{},...r.length?{soundAssets:r}:{},...t?.diameter>0?{boundary:{diameter:Ft(t.diameter,12,2048,650),ceiling:Ft(t.ceiling,3,256,128)}}:{},spawn:{x:Ft(e.x,-Ki,Ki,0),y:Ft(e.y,-hi,hi,.06),z:Ft(e.z,-Ki,Ki,3),yaw:Ft(e.yaw,-360,360,0)},pieces:a.map((l,c)=>{if(!l||typeof l!="object")throw Error("Pi\xE8ce invalide : "+(c+1));let u=l.terrain?Nh:Ws,h=Ft(l.w,.01,u,3),d=Ft(l.d,.01,u,3),f=l.solid===!1?cT(l.flight):null,p=Sl(l.surfaceSound),x=l.terrain&&typeof l.terrain=="object"?gs(l.terrain,h*d):null,g=l.model?ms({version:1,models:[l.model]}).models[0]:null;if(g&&!g.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Tx(l.name,36,"Pi\xE8ce "+(c+1)),...typeof l.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(l.sceneryId)?{sceneryId:l.sceneryId}:{},x:Ft(l.x,-Ki,Ki,0),y:Ft(l.y,-hi,hi,0),z:Ft(l.z,-Ki,Ki,0),w:h,h:Ft(l.h,.01,256,.5),d,pitch:x?0:Ft(l.pitch,-180,180,0),yaw:x?oa(Ft(l.yaw,-360,360,0)):Ft(l.yaw,-360,360,0),roll:x?0:Ft(l.roll,-180,180,0),...x?{terrain:x}:{},...f?{flight:f}:{},...p?{surfaceSound:p}:{},...g?{model:g}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(l.primitive)?l.primitive:"box",uvScale:Ft(l.uvScale,.05,100,1),uvOffsetX:Ft(l.uvOffsetX,-100,100,0),uvOffsetY:Ft(l.uvOffsetY,-100,100,0),uvRotation:Ft(l.uvRotation,-360,360,0),material:Math.round(Ft(l.material,0,16,0)),color:typeof l.color=="string"&&/^#[a-f0-9]{6}$/i.test(l.color)?l.color:"#ffffff",grip:Ft(l.grip,0,1.5,.8),gravity:Ft(l.gravity,.05,2.5,1),bounce:Ft(l.bounce,0,1.65,1),solid:l.solid!==!1,texture:typeof l.texture=="string"&&l.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(l.texture)?l.texture:null}})}}function Ax(n){return vn({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...x0,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new nn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Cx(){let n=(e,t,i,s,r,o,a,l,c={})=>({name:e,x:t,y:i,z:s,w:r,h:o,d:a,material:l,...c});return vn({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[n("Placette",0,-.24,1,13,.48,12,0),n("Piste de glace",-5,-.24,-10,5,.48,11,12,Ul.ice),n("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Ul.moon),n("Couloir central",0,-.24,-12,5,.48,14,9),n("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),n("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),n("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),n("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Ul.rubber)]})}function di(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Rx(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new nn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=f=>Math.round(f/i)*i,c=l(n.x+s.x*a),u=l(n.y+s.y*a),h=l(n.z+s.z*a),d=a-(c-n.x)*s.x-(u-n.y)*s.y-(h-n.z)*s.z;return c+=s.x*d,u+=s.y*d,h+=s.z*d,![c,u,h].every(Number.isFinite)||Math.abs(c)>Ki||Math.abs(h)>Ki||Math.abs(u)>hi?null:{...t,x:c,y:u,z:h}}var Px="gorilla-lab-custom-map-v1";function Ix(n){let e=new Blob([JSON.stringify(vn(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var uT=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function pp(){return di({name:"Miroir",sceneryId:"lab-mirror",x:Ns.x,y:Ns.y,z:Ns.z+.064,w:1.8,h:2.03,d:.1,yaw:180,material:7})}function Dx(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&uT.has(e)):!1:!0}var Lx=[["solid","Uni"],["grain","Grain fin"],["rock","Pierre"],["soil","Terre"],["sand","Sable"],["grass","Herbe"],["wood","Bois"],["tiles","Carreaux"],["brick","Briques"],["grid","Grille"],["woven","Tissu"],["stripes","Rayures"],["dots","Points"]],mp=()=>{let n=document.createElement("canvas");return n.width=512,n.height=512,n},Nx=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",la=(n,e,t)=>Math.min(t,Math.max(e,n)),hT=(n,e)=>{n.toBlob(t=>{if(!t)return;let i=document.createElement("a"),s=URL.createObjectURL(t);i.href=s,i.download=e+".png",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1500)},"image/png")},zh=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function zx(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}var Bx="gorilla-lab-texture-shelf-v1";function dT(){try{let n=JSON.parse(localStorage.getItem(Bx)??"[]");return Array.isArray(n)?n:[]}catch{return[]}}function Ux(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:s=23}={}){let r=n.getContext("2d"),o=512;r.clearRect(0,0,o,o),r.fillStyle=Nx(t),r.fillRect(0,0,o,o);let a=zx(s),l=o/Math.max(4,2*Math.round(4*i)),c=u=>{r.fillStyle=u>0?"#f6f4dc":"#18232b",r.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(i),h={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let d=0;d<h;d++){let f=a()*o,p=a()*o,x=a(),g=a(),m=a();zh(r,_=>{if(e==="rock"){let v=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),_.beginPath();for(let y=0;y<6;y++){let w=y*Math.PI/3+g,E=v*(.63+.3*Math.cos(w*2+g)+.25);_.lineTo(f+Math.cos(w)*E,p+Math.sin(w)*E*.72)}_.closePath(),_.fill(),_.globalAlpha=.3,_.strokeStyle="#232633",_.lineWidth=1.4,_.stroke()}else if(e==="soil"){let v=(1+x*x*12)*u,y=_.createRadialGradient(f,p,0,f,p,v);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),_.globalAlpha=.6,_.fillStyle=y,_.fillRect(f-v,p-v,v*2,v*2)}else if(e==="grass"||e==="wood"){let v=e==="grass",y=(v?5+x*25:7+x*110)*u;_.strokeStyle=v?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",_.globalAlpha=.08+g*.28,_.lineWidth=(.75+x*1.7)*u,_.beginPath(),_.moveTo(f,p),v?_.quadraticCurveTo(f+y*(g-.5)*.55,p-y*.58,f+y*(g-.6),p-y):_.quadraticCurveTo(f+y*.5,p+10*(g-.5),f+y,p+4*(m-.5)),_.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let v=(e==="sand"?.6+x*1.6:1+x*5)*u;_.fillRect(f,p,v,v*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){r.globalAlpha=.5,r.lineWidth=Math.max(1,3/i);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let h=0;h<u;h++)for(let d=0;d<u;d++)zh(r,f=>{f.beginPath(),f.arc(d*l+l/2,h*l+l/2,la(l*.11,2,13),0,Math.PI*2),f.fill()})}else if(e==="stripes"){r.fillStyle="#17242b",r.globalAlpha=.3;for(let h=0;h<o;h+=l/2)r.fillRect(h,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#f4f3e8":"#14212a",r.globalAlpha=.14,r.fillRect(0,h,o,Math.max(1,l/13));for(let h=0;h<o;h+=l/5)r.fillStyle=h%(l*2)<l?"#14212a":"#f4f3e8",r.globalAlpha=.13,r.fillRect(h,0,Math.max(1,l/13),o)}else{r.strokeStyle="#12212a",r.globalAlpha=.48;for(let h=0;h<=o;h+=l)r.beginPath(),r.moveTo(0,h),r.lineTo(o,h),r.stroke();for(let h=0;h<o;h+=l)for(let d=0;d<=o;d+=l){let f=e==="brick"&&Math.floor(h/l)%2?l/2:0;e!=="brick"&&h>0||(r.beginPath(),r.moveTo(d+f,h),r.lineTo(d+f,h+l),r.stroke())}if(e==="grid"){r.strokeStyle="#f7ebc9",r.globalAlpha=.1;for(let h=l/2;h<o;h+=l)r.beginPath(),r.moveTo(h,0),r.lineTo(h,o),r.stroke()}}}r.globalAlpha=1}var fT=`
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
`;function pT(){if(document.getElementById("texture-studio-styles"))return;let n=document.createElement("style");n.id="texture-studio-styles",n.textContent=fT,document.head.append(n)}async function Fx(n,e){if(!n)return;let t=new Image;t.decoding="async",await new Promise((s,r)=>{t.onload=s,t.onerror=r,t.src=n});let i=e.getContext("2d");i.clearRect(0,0,512,512),i.drawImage(t,0,0,512,512)}function gp({initial:n=null,tint:e="#687a86",name:t="Texture",pattern:i="solid",maxDataBytes:s=75e4,onApply:r=()=>{}}={}){pT();let o=document.createElement("div");o.className="texture-backdrop",o.innerHTML=`
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
  </section>`,document.body.append(o);let a=F=>o.querySelector(F),l=a(".texture-canvas"),c=a(".texture-tile"),u=mp(),h=mp(),d={pattern:Lx.some(([F])=>F===i)?i:"grain",base:Nx(e),scale:1,seed:23,resolution:512,ink:"#e1ad78",size:22,opacity:.85,hardness:.7},f=l.getContext("2d",{willReadFrequently:!0}),p=u.getContext("2d",{willReadFrequently:!0}),x=h.getContext("2d",{willReadFrequently:!0}),g=[],m=[],_=!1,v=!1,y=null,w="paint",E=null,R=null;a("#studio-title").textContent=t+" / SURFACE LAB";let C=[],b=-1;a("[data-field=base]").value=d.base;for(let F of["base","seed","resolution","ink","size","opacity","hardness"])a("[data-field="+F+"]").addEventListener("input",Z=>{let ye=Z.target.value;d[F]=F==="seed"?Math.trunc(la(Number(ye)||0,0,2147483647)):["scale","resolution","size","opacity","hardness"].includes(F)?Number(ye):ye});let S=F=>{a("[data-status]").textContent=F},A=()=>{f.clearRect(0,0,512,512),f.drawImage(u,0,0),f.drawImage(h,0,0);let F=c.getContext("2d");F.clearRect(0,0,256,128);for(let Z=0;Z<2;Z++)for(let ye=0;ye<4;ye++)F.drawImage(l,ye*64,Z*64,64,64)},I=()=>({base:p.getImageData(0,0,512,512),top:x.getImageData(0,0,512,512),shapes:C,editingShape:b}),z=F=>{p.putImageData(F.base,0,0),x.putImageData(F.top,0,0),C=F.shapes,b=F.editingShape,O(),A()},N=()=>{R=null,g.push(I()),g.length>16&&g.shift(),m.length=0,_=!0,a("[data-cmd=undo]").disabled=!1,a("[data-cmd=redo]").disabled=!0},k=(F,Z)=>{F.length&&(R=null,Z.push(I()),z(F.pop()),a("[data-cmd=undo]").disabled=!g.length,a("[data-cmd=redo]").disabled=!m.length,_=!0)},O=()=>{a("[data-shape-count]").textContent=C.length+" forme"+(C.length>1?"s":""),a("[data-cmd=add-shape]").textContent=b<0?"+ Ajouter le dessin comme forme":"Enregistrer la forme "+(b+1),a("[data-shape-list]").replaceChildren(...C.map((F,Z)=>{let ye=document.createElement("div");ye.className="texture-setting-row";let L=document.createElement("canvas");L.width=48,L.height=32;let ue=Math.min(48/F.width,32/F.height);L.getContext("2d").drawImage(F,0,0,F.width*ue,F.height*ue);let te=document.createElement("button"),Q=document.createElement("button");return te.textContent="Modifier "+(Z+1),Q.textContent="Supprimer "+(Z+1),te.onclick=()=>{N(),b=Z,x.clearRect(0,0,512,512),x.drawImage(F,(512-F.width)/2,(512-F.height)/2),O(),A()},Q.onclick=()=>{N(),C=C.filter((ne,Me)=>Me!==Z),b===Z?(b=-1,x.clearRect(0,0,512,512)):b>Z&&b--,O(),A()},ye.append(L,te,Q),ye}))};a("[data-cmd=add-shape]").onclick=()=>{let F=x.getImageData(0,0,512,512).data,Z=512,ye=512,L=-1,ue=-1;for(let Q=0;Q<512;Q++)for(let ne=0;ne<512;ne++)F[4*(Q*512+ne)+3]&&(Z=Math.min(Z,ne),ye=Math.min(ye,Q),L=Math.max(L,ne),ue=Math.max(ue,Q));if(L<0){S("Dessine une forme au pinceau avant de l\u2019ajouter.");return}let te=document.createElement("canvas");te.width=L-Z+1,te.height=ue-ye+1,te.getContext("2d").drawImage(h,Z,ye,te.width,te.height,0,0,te.width,te.height),N(),C=b<0?[...C,te]:C.map((Q,ne)=>ne===b?te:Q),b=-1,x.clearRect(0,0,512,512),O(),A(),S("Forme ajout\xE9e. Dessine la suivante ou g\xE9n\xE8re ton motif.")};let J=()=>{let F=(ne,Me,xe)=>la(Number(a("[data-field="+ne+"]").value)||0,Me,xe),Z=Math.round(F("density",1,1e3)),ye=F("minScale",1,200)/100,L=Math.max(ye,F("maxScale",1,200)/100),ue=F("rotation",0,360)*Math.PI/180,te=a("[data-field=mirror]").checked,Q=zx(d.seed);N(),d.pattern="solid",Ux(u,d);for(let ne=0;ne<Z&&C.length;ne++){let Me=C[Math.floor(Q()*C.length)],xe=Q()*512,Ae=Q()*512,Je=Q()*ue,Ze=512*(ye+Q()*(L-ye))/Math.max(Me.width,Me.height),D=te&&Q()<.5?-1:1;zh(p,T=>{T.translate(xe,Ae),T.rotate(Je),T.scale(D*Ze,Ze),T.drawImage(Me,-Me.width/2,-Me.height/2)})}A(),S(C.length?"Motif g\xE9n\xE9r\xE9 \xE0 partir de tes formes.":"Fond uni. Dessine et ajoute une forme pour la r\xE9p\xE9ter.")},U=F=>{let Z=l.getBoundingClientRect();return{x:(F.clientX-Z.left)/Z.width*512,y:(F.clientY-Z.top)/Z.height*512}},V=F=>{let Z=d.size/2,ye=d.opacity;zh(x,L=>{L.save(),w==="erase"&&(L.globalCompositeOperation="destination-out"),L.globalAlpha=ye;let ue=la(d.hardness,.05,1);if(w==="stamp")L.fillStyle=d.ink,L.translate(F.x,F.y),L.rotate(Math.PI/4),L.fillRect(-Z*.8,-Z*.8,Z*1.6,Z*1.6);else{let te=L.createRadialGradient(F.x,F.y,Z*ue*.85,F.x,F.y,Z);if(w==="erase")te.addColorStop(0,"rgba(0,0,0,1)"),te.addColorStop(1,"rgba(0,0,0,0)");else{let Q=d.ink.match(/[\da-f]{2}/gi).map(ne=>parseInt(ne,16)).join(",");te.addColorStop(0,"rgba("+Q+",1)"),te.addColorStop(1,"rgba("+Q+",0)")}L.fillStyle=te,L.beginPath(),L.arc(F.x,F.y,Z,0,2*Math.PI),L.fill()}L.restore()})},$=(F,Z)=>{let ye=Math.hypot(Z.x-F.x,Z.y-F.y),L=Math.max(1,Math.ceil(ye/Math.max(2,d.size*.18)));for(let ue=1;ue<=L;ue++)V({x:F.x+(Z.x-F.x)*ue/L,y:F.y+(Z.y-F.y)*ue/L})},re=F=>{let Z=f.getImageData(Math.floor(la(F.x,0,511)),Math.floor(la(F.y,0,511)),1,1).data;d.ink="#"+[...Z].slice(0,3).map(ye=>ye.toString(16).padStart(2,"0")).join(""),a("[data-field=ink]").value=d.ink,S("Couleur pr\xE9lev\xE9e sur la texture.")};l.addEventListener("pointerdown",F=>{if(F.button!==0||v)return;let Z=U(F);if(w==="pick"){re(Z);return}F.preventDefault(),N(),v=!0,y=F.pointerId,E=Z,l.setPointerCapture(F.pointerId),V(Z),A()}),l.addEventListener("pointermove",F=>{if(!v||F.pointerId!==y)return;F.preventDefault();let Z=U(F);w==="stamp"?V(Z):$(E,Z),E=Z,A()});let de=F=>{F.pointerId===y&&(v=!1,y=null,E=null,l.hasPointerCapture(F.pointerId)&&l.releasePointerCapture(F.pointerId))};l.addEventListener("pointerup",de),l.addEventListener("pointercancel",de);for(let F of o.querySelectorAll("[data-tool]"))F.onclick=()=>{w=F.dataset.tool,o.querySelectorAll("[data-tool]").forEach(Z=>Z.setAttribute("aria-pressed",String(Z===F)))};a("[data-cmd=generate]").onclick=J,a("[data-cmd=undo]").onclick=()=>k(g,m),a("[data-cmd=redo]").onclick=()=>k(m,g),a("[data-cmd=export]").onclick=()=>hT(l,"gorilla-texture"),a("[data-cmd=import]").onclick=()=>a("[data-field=file]").click(),a("[data-field=file]").addEventListener("change",async F=>{let Z=F.target.files?.[0];if(F.target.value="",!!Z)try{if(!["image/png","image/jpeg","image/webp"].includes(Z.type))throw Error("Image PNG / JPG / WebP uniquement.");if(Z.size>5e6)throw Error("Image trop volumineuse (5 Mo max).");let ye=await createImageBitmap(Z);N(),p.clearRect(0,0,512,512),p.drawImage(ye,0,0,512,512),ye.close(),x.clearRect(0,0,512,512),A(),S("Image import\xE9e, pr\xEAte \xE0 \xEAtre peinte.")}catch(ye){S(ye.message)}});let Te=F=>{!F&&_&&!confirm("Fermer sans appliquer les retouches ?")||(window.removeEventListener("keydown",Re,!0),o.remove())},Re=F=>{if(F.key==="Escape"){F.preventDefault(),Te(!1);return}(F.ctrlKey||F.metaKey)&&!F.target.closest("input,select")&&F.key.toLowerCase()==="z"&&(F.preventDefault(),F.stopImmediatePropagation(),F.shiftKey?k(m,g):k(g,m))};window.addEventListener("keydown",Re,!0),a("[data-cmd=close]").onclick=()=>Te(!1),a("[data-cmd=cancel]").onclick=()=>Te(!1);let Ue=()=>{if(R?.recipe.resolution===d.resolution&&R.data.length<=s)return R.data;for(let F of[d.resolution,256,128].filter((Z,ye,L)=>Z<=d.resolution&&L.indexOf(Z)===ye)){let Z=document.createElement("canvas");Z.width=Z.height=F,Z.getContext("2d").drawImage(l,0,0,F,F);for(let ye of[.85,.72,.58]){let L=Z.toDataURL("image/webp",ye);if(L.length<=s)return L}}throw Error("Texture trop complexe. R\xE9duis les d\xE9tails ou utilise une image plus simple.")},H=dT(),K=a("[data-field=shelf]");function be(F=""){K.replaceChildren(new Option("Choisir une texture",""),...H.map(ye=>new Option(ye.name,ye.id))),K.value=F;let Z=!!K.value;a("[data-cmd=shelf-load]").disabled=!Z,a("[data-cmd=shelf-remove]").disabled=!Z}function oe(F,Z){try{localStorage.setItem(Bx,JSON.stringify(F))}catch{return S("La biblioth\xE8que est pleine. Retire une texture ou r\xE9duis la r\xE9solution."),!1}return H.splice(0,H.length,...F),be(Z),!0}return K.onchange=()=>be(K.value),a("[data-cmd=shelf-save]").onclick=()=>{let F=Lx.find(([ye])=>ye===d.pattern)?.[1]??"Texture",Z=prompt("Nom de la texture",F)?.trim().slice(0,50);if(Z)try{let ye={id:crypto.randomUUID(),name:Z,data:Ue()},{pattern:L,base:ue,scale:te,seed:Q,resolution:ne}=d;ye.recipe={pattern:L,base:ue,scale:te,seed:Q,resolution:ne},oe([...H,ye],ye.id)&&S("Texture disponible dans les deux ateliers.")}catch(ye){S(ye.message)}},a("[data-cmd=shelf-load]").onclick=async()=>{let F=H.find(Z=>Z.id===K.value);if(!(!F||_&&!confirm("Remplacer l\u2019aper\xE7u et les retouches actuelles ?")))try{let Z=mp();await Fx(F.data,Z),N(),p.clearRect(0,0,512,512),p.drawImage(Z,0,0),x.clearRect(0,0,512,512),Object.assign(d,F.recipe),R=F;for(let ye of["base","seed","resolution"])a("[data-field="+ye+"]").value=d[ye];A(),S("Texture charg\xE9e. Applique-la \xE0 l\u2019objet s\xE9lectionn\xE9.")}catch(Z){S(Z.message)}},a("[data-cmd=shelf-remove]").onclick=()=>{oe(H.filter(F=>F.id!==K.value),"")&&S("Texture retir\xE9e de la biblioth\xE8que.")},be(),a("[data-cmd=apply]").onclick=async()=>{let F=a("[data-cmd=apply]");F.disabled=!0;try{let Z=Ue();await r(Z),_=!1,Te(!0)}catch(Z){S(Z.message||"Impossible d\u2019appliquer la texture.")}finally{F.disabled=!1}},a("[data-cmd=undo]").disabled=!0,a("[data-cmd=redo]").disabled=!0,Ux(u,d),A(),n&&Fx(n,u).then(A).catch(()=>S("Image introuvable : motif g\xE9n\xE9r\xE9 disponible.")),a("[data-field=base]").focus({preventScroll:!0}),{close:()=>Te(!1)}}function mT(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function Ox(n){let e=[];for(let t of n){for(;e.length>1&&mT(e.at(-2),e.at(-1),t)<=0;)e.pop();e.push(t)}return e.pop(),e}function kx(n){let e=0;for(let t=0;t<n.length;t++){let[i,s]=n[t],[r,o]=n[(t+1)%n.length];e+=i*o-s*r}return Math.abs(e)*.5}function gT(n,e,t,i){let s=[];for(let r=0;r<n.length;r++){let o=n[r],a=n[(r+1)%n.length],l=(o[e]-t)*i>=0,c=(a[e]-t)*i>=0;if(l&&s.push(o),l!==c){let u=(t-o[e])/(a[e]-o[e]);s.push([o[0]+(a[0]-o[0])*u,o[1]+(a[1]-o[1])*u])}}return s}function Vx(n,{left:e,top:t,right:i,bottom:s}){if(n.length<3)return!1;let r=n.slice().sort((c,u)=>c[0]-u[0]||c[1]-u[1]),o=[...Ox(r),...Ox(r.reverse())],a=kx(o);if(a<=1e-6)return!1;let l=[[0,e,1],[0,i,-1],[1,t,1],[1,s,-1]].reduce((c,u)=>gT(c,...u),o);return kx(l)>a*.5}function xp(n){let e=n.points.map(i=>new M(...i));if(n.smooth){let i=new Ro(e,!0,"centripetal");return i.arcLengthDivisions=Math.min(1200,e.length*30),i}let t=new Io;return e.forEach((i,s)=>t.add(new Po(i,e[(s+1)%e.length]))),t}function Gx(n){let e=[],t=new Jt,i=new Wt,s=new M,r=new M;t.name="Circulation",n.add(t);function o(l=[]){for(let{mesh:c}of e.flatMap(u=>u.batches))c.dispose(),c.geometry.dispose(),na(c.material);t.clear(),e=l.filter(c=>c.visible).map(c=>{let u=c.models.map(({model:f,w:p,h:x,d:g},m)=>{let _=new M(p,x,g),v=ia(f,_);v.scale(p,x,g);let y=Math.floor((c.count+c.models.length-1-m)/c.models.length);if(!y)return v.dispose(),null;let w=ta(f);if(Array.isArray(w)&&c.brightness!==1)for(let R of w){let C=R.onBeforeCompile;R.onBeforeCompile=function(b,S){C.call(this,b,S),b.uniforms.uFoundryGlow&&(b.uniforms.uFoundryGlow.value.x*=c.brightness)}}let E=new ur(v,w,y);return E.frustumCulled=!1,E.instanceMatrix.setUsage(wr),t.add(E),{mesh:E,offset:m,h:x}}).filter(Boolean),h=xp(c),d=h.getLength();return{route:c,path:h,length:d,batches:u}}),a(0)}function a(l){for(let{route:c,path:u,length:h,batches:d}of e){let f=c.interval+c.pause,p=Math.floor(l/f),x=l-p*f,g=Math.min(1,x/c.interval),m=.13,_=g<m?g*g/(2*m):g>1-m?1-m-(1-g)**2/(2*m):g-m/2,y=(c.pause?p*c.interval+_*c.interval/(1-m):l)*c.speed/h+c.phase/360,w=E=>E-Math.floor(E);for(let{mesh:E,offset:R,h:C}of d){for(let b=0;b<E.count;b++){let S=b*c.models.length+R,A=w(y-S*c.spread/c.count);u.getPointAt(A,s),u.getPointAt(w(A+Math.min(.003,.9/h)),r);let I=r.sub(s);i.position.copy(s),i.position.y+=C/2,i.rotation.set(Math.atan2(I.y,Math.hypot(I.x,I.z)),Math.atan2(-I.x,-I.z),0,"YXZ"),i.updateMatrix(),E.setMatrixAt(b,i.matrix)}E.instanceMatrix.needsUpdate=!0}}}return{set:o,update:a,get count(){return e.reduce((l,{route:c})=>l+c.count,0)}}}function Vi(n,e){let t=document.createElement(n);return e&&(t.textContent=e),t}function Fl(n,e){let t=Vi("label",n);return t.append(e),t}function Xs(n,e){let t=Vi("button",n);return t.type="button",t.onclick=e,t}function Hx({container:n,scene:e,getMap:t,getPiece:i,getCenter:s,remember:r,save:o,render:a}){let l=new Jt;e.add(l);let c=new Jt;e.add(c);let u=Gx(c),h=new Un({color:6681817}),d=0,f=!1,p=!1,x=Vi("p");x.setAttribute("role","status");let g=()=>t().traffic?.[d];function m(){for(let E of[...l.children])l.remove(E),E.geometry.dispose();let w=g();if(f&&w){let R=xp(w).getSpacedPoints(Math.max(48,w.points.length*7));l.add(new Fn(new ct().setFromPoints(R),h))}a()}function _(){p=!1,u.set(),a()}function v(w){let[E]=Ih([w]);if(!E)return x.textContent="Indique au moins trois points distincts et un mod\xE8le.",!1;let R=t();return r(),R.traffic??=[],R.traffic[d]=E,o(),_(),m(),x.textContent="",!0}function y(){if(!f)return;let w=t(),E=w.traffic??[];d=Math.min(d,Math.max(0,E.length-1));let R=g();n.replaceChildren(Vi("h3","Flux de circulation"));let C=Xs("Nouveau flux depuis la pi\xE8ce s\xE9lectionn\xE9e",()=>{let V=i();if(!V?.model){x.textContent="S\xE9lectionne un mod\xE8le dans la hi\xE9rarchie.";return}if(E.length>=ep){x.textContent="Limite de flux atteinte.";return}d=E.length;let{x:$,y:re,z:de,w:Te,h:Re,d:Ue,model:H}=V;v({name:V.name,points:[[$,re-Re/2,de],[$,re-Re/2,de-20],[$+12,re-Re/2,de-14],[$+12,re-Re/2,de]],models:[{w:Te,h:Re,d:Ue,model:H}],count:4,speed:8}),y()});if(n.append(C,x),!R){m();return}let b=Vi("select");E.forEach((V,$)=>b.add(new Option(V.name,$))),b.value=d,b.onchange=()=>{d=Number(b.value),_(),y()};let S=Vi("input");S.value=R.name,S.maxLength=42,S.onchange=()=>{v({...g(),name:S.value}),y()};let A=Vi("textarea");A.rows=6,A.spellcheck=!1,A.value=R.points.map(V=>V.join(" ")).join(`
`);let I=()=>A.value.trim().split(/\n+/).filter(V=>V.trim()).map(V=>V.trim().split(/[\s,;]+/).map(Number)),z=()=>{let V=I();return V.length>np||V.some($=>$.length!==3||!$.every(Number.isFinite))?(x.textContent="Entre un point X Y Z par ligne (en m\xE8tres).",!1):v({...g(),points:V})};A.onchange=z;let N=Xs("Ajouter le point vis\xE9",()=>{let[V,$,re]=s();A.value+=`
`+[V,$,re].map(de=>Math.round(de*100)/100).join(" "),z()&&y()}),k=Vi("div");k.className="fields";for(let[V,$,re,de,Te]of[["count","V\xE9hicules",1,tp,1],["speed","Vitesse (m/s)",.5,160,.1],["brightness","\xC9mission lumineuse",.25,6,.05],["pause","Arr\xEAt (s)",0,25,.1],["interval","Entre les arr\xEAts (s)",3,180,.1],["phase","D\xE9calage du convoi (\xB0)",0,359,1],["spread","R\xE9partition sur le circuit",.25,1,.01]]){let Re=Vi("input");Object.assign(Re,{type:"number",min:re,max:de,step:Te,value:R[V]}),Re.onchange=()=>{v({...g(),[V]:Re.valueAsNumber}),Re.value=g()[V]},k.append(Fl($,Re))}for(let[V,$]of[["smooth","Courbe liss\xE9e"],["visible","Actif en jeu"]]){let re=Vi("input");re.type="checkbox",re.checked=R[V],re.onchange=()=>v({...g(),[V]:re.checked}),k.append(Fl($,re))}let O=Vi("p",R.models.map(V=>V.model.name).join(" / "));function J(V){let $=i();if(!$?.model){x.textContent="S\xE9lectionne une pi\xE8ce qui contient un mod\xE8le.";return}let re=g().models.slice(),{model:de,w:Te,h:Re,d:Ue}=$;V===null?re.splice(1):re[V]={model:de,w:Te,h:Re,d:Ue},v({...g(),models:re}),y()}let U=Xs("Supprimer ce flux",()=>{r(),w.traffic=E.filter((V,$)=>$!==d),o(),_(),y()});n.append(Fl("Flux s\xE9lectionn\xE9",b),Fl("Nom",S),Fl("Points X Y Z \xB7 boucle ferm\xE9e",A),N,k,O,Xs("Utiliser la pi\xE8ce s\xE9lectionn\xE9e comme mod\xE8le 1",()=>J(0)),Xs("Utiliser la pi\xE8ce s\xE9lectionn\xE9e comme mod\xE8le 2",()=>J(1)),Xs("Retirer le mod\xE8le 2",()=>{g().models.length>1&&(v({...g(),models:[g().models[0]]}),y())}),Xs("Animer dans l\u2019atelier",()=>{p=!0,u.set([{...g(),visible:!0}]),a()}),Xs("Arr\xEAter l\u2019aper\xE7u",_),U),n.append(x),m()}return{refresh:y,setVisible(w){f!==w&&(f=w,w?y():(_(),m()))},update(w){return p?(u.update(w*.001),!0):!1}}}var Fr=Math.PI*2,xT={regolith:[.21,.13,[82,152],.87,.73,7],asphalt:[.16,.12,[112,241],.74,.55,9],concrete:[.19,.37,[174,472],.52,.16,11],steel:[.58,.3,[314,626,1039,1597],.25,.08,4.6],grating:[.32,.66,[228,907,1480,1809],.43,.6,7],glass:[.47,.8,[458,1397,2226],.17,.09,5.5],ceramic:[.28,.41,[259,573,1018],.37,.19,7],rubber:[.16,.07,[56,99],.58,.48,10],gravel:[.36,.37,[125,314],.78,.98,6.2],panel:[.31,.25,[122,294,735],.46,.36,7.5]};function Wx(n){return()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/2147483648-1)}function yT(n,e,t){let[i,s,r,o,a,l]=xT[e],c=22050,u=Wx(3087+t*5323+e.length*123),h=Math.round(i*c*(1+u()*.13)),d=n.createBuffer(1,h,c),f=d.getChannelData(0),p=1+u()*.055,x=0,g=0;for(let m=0;m<h;m++){let _=m/c,v=m/h,y=u();x+=(y-x)*s,g+=(y-g)*.012;let w=1+Math.sin((v*21+t*.21)*Fr+g*64)*a*.64,E=0;for(let[C,b]of r.entries())E+=Math.sin(_*Fr*b*p)*Math.exp(-v*C*1.58)/(1+C*.62);let R=Math.min(1,m/48)*Math.exp(-v*l)*Math.min(1,(1-v)*7);f[m]=(o*x*w+(1-o)*E*.59+y*.085)*R*.89}return d}function _T(n,e,t){let s=e==="district"?13:17,r=n.createBuffer(2,s*22050,22050),o=e==="district";for(let a=0;a<2;a++){let l=r.getChannelData(a),c=Wx(2064+t*1993+a*2113+(o?0:145)),u=0,h=0,d=t*.79+a*.57;for(let f=0;f<l.length;f++){let p=f/22050,x=c();u+=(x-u)*.012,h+=(x-h)*.081;let g=.68+.2*Math.sin(p*.84+d)+.11*Math.sin(p*2.43+d*1.31),m=Math.sin(p*(o?.88:1.42)+d)**6,_=Math.sin(p*Fr*(o?53:47)+Math.sin(p*.22+d)*.35)*.103+Math.sin(p*Fr*(o?106.5:71.7)+Math.sin(p*.17+d*1.43)*.38)*.057,v=Math.sin(p*Fr*(o?201:143)+Math.sin(p*1.4+d)*1.3)*m*.054,y=(p+(a?1.7:.3)+t*.89)%4.2-.1,w=Math.exp(-((y-2.05)**2)*2.1),E=Math.sin(Fr*(155*p+22*Math.sin(p*.47+d)))+.32*Math.sin(Fr*(331*p+16*Math.sin(p*.58))),R=u*.95+h*.19+w*(E*.11+h*.6);l[f]=(e==="traffic"?R:_*(o?.66:1)+u*1.3+h*(o?.27:.13)+v)*g*Math.min(1,f/180,(l.length-f)/180)}}return r}function Xx(n,e){return Object.hasOwn($o,e)?Array.from({length:3},(t,i)=>yT(n,e,i)):Object.hasOwn(Ko,e)?Array.from({length:3},(t,i)=>_T(n,e,i)):null}var Bh=Object.freeze([]),yp=(n,e)=>n+(Math.random()*2-1)*e,Nl=(n,e,t)=>Math.min(t,Math.max(e,n));function qx(n){let e=new Map,t=new Map,i=new WeakMap,s=Bh,r=Bh,o=new Map,a=[],l,c,u=0,h={x:0,y:0,z:0,yaw:0},d=0,f=0;function p(A){return l||(l=A.createDynamicsCompressor(),l.threshold.value=-16,l.ratio.value=6,l.connect(A.destination)),l}function x(A=Bh){if(s===A)return;let I=new Map(A.map(z=>[z.id,z.data]));for(let[z,N]of o)I.get(z)!==N&&(e.delete(z),t.delete(z));o=I,s=A}function g(A=Bh){if(r===A)return;let I=n();for(let z of a){if(!z.gain)continue;let N=I.currentTime+.13;z.gain.gain.setTargetAtTime(0,I.currentTime,.035);for(let O of z.sources)O.stop(N);let k=()=>{z.sources.size||z.gain?.disconnect()};for(let O of z.sources)O.addEventListener("ended",k,{once:!0});k()}r=A,a=A.map(z=>({zone:z,gain:null,levels:null,loading:!1,ready:!1,entered:!1,oneShot:!1,next:0,active:0,weight:0,sources:new Set}))}function m(){g(),x()}async function _(A,I){if(e.has(I))return e.get(I);let z=o.get(I),N=z?(async()=>{let k=z.slice(z.indexOf(",")+1),O=Uint8Array.from(atob(k),U=>U.charCodeAt(0)),J=await A.decodeAudioData(O.buffer);return o.get(I)===z&&J.duration<=180?[J]:null})().catch(()=>null):Xx(A,I);return e.set(I,N),N}function v(A,I){let z=t.get(A)??-1,N=Math.floor(Math.random()*I.length);return N===z&&I.length>1&&(N=(N+1)%I.length),t.set(A,N),I[N]}function y(A,I,z,N,k,O,J=0,U=1/0){let V=A.createBufferSource(),$=A.createGain();V.buffer=v(I.clip,z);let re=Nl(yp(I.rate,I.rateVariation),.25,3.2),de=yp(I.pitch,I.pitchVariation);V.playbackRate.value=re,V.detune.value=de;let Te=Math.min(U,V.buffer.duration/(re*2**(de/1200))),Re=Math.min(J,Te*.25),Ue=Nl(yp(1,I.volumeVariation)*k,0,1);return Re?($.gain.setValueAtTime(0,N),$.gain.linearRampToValueAtTime(Ue,N+Re),$.gain.setValueAtTime(Ue,N+Te-Re),$.gain.linearRampToValueAtTime(0,N+Te)):$.gain.setValueAtTime(Ue,N),V.connect($).connect(O),V.onended=()=>{V.disconnect(),$.disconnect()},V.start(N),V.stop(N+Te),{source:V,duration:Te,edge:Re}}function w(A,I,z=1){let N=n();if(N?.state!=="running"||!A||!I||A.volume<=0||z<=0)return!1;let k=I.x-h.x,O=I.y-h.y,J=I.z-h.z,U=Math.hypot(k,O,J);if(U>=A.range)return!1;let V=Nl((k*Math.cos(h.yaw)-J*Math.sin(h.yaw))/Math.max(.1,Math.hypot(k,J)),-1,1),$=(1-U/A.range)**1.45/(1+U*.12),re=N.currentTime,de=Nl(A.volume*z*$,0,1),Te=()=>{if(N.state!=="running"||N.currentTime-re>.3)return null;let H=N.createStereoPanner?.();return H&&(H.pan.value=V,H.connect(p(N))),H??p(N)},Re=H=>{if(!H?.length)return;let K=Te();if(!K)return;let{source:be}=y(N,A,H,N.currentTime,de,K);K!==l&&be.addEventListener("ended",()=>K.disconnect(),{once:!0}),d++},Ue=e.get(A.clip);return Array.isArray(Ue)?Re(Ue):_(N,A.clip).then(Re),!0}function E(A,I,z,N){let k=n();if(k?.state!=="running"||N<I.minImpact)return!1;let O=k.currentTime;return O<(i.get(A)??-1/0)||!w(I,z,Math.min(1.3,.22+.23*Math.sqrt(N)))?!1:(i.set(A,O+I.cooldown),!0)}function R(A,I,z){let{zone:N}=I,k=y(A,N,I.levels,z,1,I.gain,N.mode==="loop"?.8:.035);I.sources.add(k.source),k.source.addEventListener("ended",()=>I.sources.delete(k.source),{once:!0}),I.next=z+k.duration-k.edge,f++}function C(A,I,z,N=1){Object.assign(h,{x:I.x,y:I.y,z:I.z,yaw:z});let k=n();if(k?.state==="running")for(let O of a){let{zone:J}=O,U=U0(J,I),V=U*J.volume*N,$=V>O.active?J.fadeIn:J.fadeOut,re=Math.max(0,A)/$;if(O.active+=Nl(V-O.active,-re,re),U||(O.entered=!1),!V&&O.active<1e-4){if(O.gain){for(let Te of O.sources)Te.stop();O.sources.clear(),O.next=0,O.gain.disconnect(),O.gain=null}continue}if(!O.ready&&!O.loading&&(O.loading=!0,_(k,J.clip).then(Te=>{O.levels=Te,O.ready=!0})),!O.levels?.length)continue;let de=k.currentTime;O.gain||(O.gain=k.createGain(),O.gain.gain.value=0,O.gain.connect(p(k))),O.gain.gain.setTargetAtTime(O.active,de,.035),J.mode==="enter"?U>=.03&&!O.entered&&(O.entered=!0,R(k,O,de)):O.active>0&&de>=O.next&&R(k,O,de)}}async function b(A){let I=n();if(I?.state!=="running"||!A)return!1;S();let z=u,N=await _(I,A.clip);return z!==u||!N?.length?!1:(c=y(I,A,N,I.currentTime,A.volume,p(I),.035,4).source,!0)}function S(){u++,c&&(c.stop(),c=null)}return{setAssets:x,setZones:g,clear:m,update:C,impact:E,playSurface:w,preview:b,stopPreview:S,get diagnostics(){return{surfacesPlayed:d,ambientStarted:f,activeZones:a.filter(A=>A.active>.01).length,gains:a.map(A=>A.active)}}}}var jx=[["volume","Volume",0,1,.01],["volumeVariation","Variation de volume",0,.8,.01],["rate","Vitesse",.4,2.5,.01],["rateVariation","Variation de vitesse",0,.7,.01],["pitch","Hauteur (cents)",-1200,1200,10],["pitchVariation","Variation de hauteur (cents)",0,800,10]],vT=[...jx,["cooldown","D\xE9lai entre impacts (s)",.03,2,.01],["minImpact","Impact minimal (m/s)",.1,12,.1],["range","Port\xE9e (m)",2,80,.1]],MT=[["x","Centre X (m)",null,null,.1],["y","Centre Y (m)",null,null,.1],["z","Centre Z (m)",null,null,.1],["w","Largeur X (m)",.1,null,.1],["h","Hauteur Y (m)",.1,null,.1],["d","Profondeur Z (m)",.1,null,.1],...jx,["fadeDistance","Fondu au bord (m)",.05,100,.05],["fadeIn","Fondu d\u2019entr\xE9e (s)",.02,12,.01],["fadeOut","Fondu de sortie (s)",.02,12,.01]],bT={...Ko,...$o},an=(n,e)=>Object.assign(document.createElement(n),e?{textContent:e}:{});function Nr(n,e){let t=an("label");return e.setAttribute("aria-label",n),t.append(an("span",n),e),t}function zl(n,e){return Object.assign(an("button",n),{type:"button",onclick:e})}function _p(...n){let e=an("div");return e.className="piece-actions",e.append(...n),e}function Yx(n,e,t){let i=an("div");i.className="fields";for(let[s,r,o,a,l]of e){let c=Object.assign(an("input"),{type:"number",step:l,value:n[s]??""});o!==null&&(c.min=o),a!==null&&(c.max=a),c.onchange=()=>{Number.isFinite(c.valueAsNumber)?c.value=t(s,c.valueAsNumber)??n[s]:c.value=n[s]},i.append(Nr(r,c))}return i}function Zx(n){return n instanceof Map?[...n]:Object.entries(n)}function Jx({container:n,scene:e,getMap:t,getPiece:i,getCenter:s,remember:r,save:o,render:a}){let l=an("section"),c=an("section"),u=an("section"),h=an("p");h.setAttribute("role","status"),n.append(l,c,u,h);let d=new Jt;d.name="audio-zone-preview",d.visible=!1,e.add(d);let f=new Ye,p=new qa(f),x=[.09,.23].map(U=>new Xt({color:4247503,opacity:U,transparent:!0,depthWrite:!1})),g=[4247503,16047250].map(U=>new Un({color:U,transparent:!0,opacity:.85})),m=0,_="",v=!1,y=null,w=0,E=qx(()=>y),R=U=>{h.textContent=U};function C(){w++,E.stopPreview(),R("")}function b(){if(d.clear(),v)for(let[U,V]of(t()?.soundZones??[]).entries()){let $=+(U===m),re=new pe(f,x[$]);re.add(new ls(p,g[$])),re.position.set(V.x,V.y,V.z),re.scale.set(V.w,V.h,V.d),d.add(re)}a()}async function S(U){if(!U?.clip)return;C();let V=w;try{let $=globalThis.AudioContext??globalThis.webkitAudioContext;if(y??=new $,await y.resume(),V!==w)return;E.setAssets(t().soundAssets??[]),!await E.preview(U)&&V===w&&R("Impossible de lire ce son.")}catch{V===w&&R("Impossible de lire ce son.")}}function A(U){return _p(zl("\xC9couter",()=>S(U())),zl("Arr\xEAter",C))}function I(U,V,$,re){let de=an("select");re&&de.add(new Option(re,""));let Te=(t().soundAssets??[]).map(Re=>[Re.id,Re.name]);for(let[Re,Ue]of[...Zx(U),...Te])de.add(new Option(Ue,Re));return de.value=V??"",de.onchange=()=>$(de.value),Nr("Son",de)}function z(){let U=i();if(l.replaceChildren(an("h3","Sons de surface")),!U){l.append(an("p","S\xE9lectionnez une pi\xE8ce pour lui attribuer un son d\u2019impact."));return}let V=($,re)=>{let de=Sl({...U.surfaceSound,[$]:re});return r(),de?U.surfaceSound=de:delete U.surfaceSound,o(),de?.[$]};l.append(an("p",U.name),I($o,U.surfaceSound?.clip,$=>{C(),V("clip",$),z(),k()},"Son de surface du jeu")),U.surfaceSound&&l.append(Yx(U.surfaceSound,vT,V),A(()=>U.surfaceSound))}function N(){let U=t(),V=U.soundZones??[];m=Math.min(m,Math.max(0,V.length-1));let $=V[m];c.replaceChildren(an("h3","Zones d\u2019ambiance"));let re=zl("Ajouter une zone",()=>{let[K,be,oe]=s(),F=wl([...V,{name:`Zone ${V.length+1}`,x:K,y:be,z:oe,w:8,h:5,d:8,clip:Zx(Ko)[0]?.[0],mode:"loop"}]);if(F.length===V.length){R("Limite de zones atteinte.");return}r(),U.soundZones=F,m=F.length-1,N(),b(),o()});if(!$){c.append(_p(re));return}let de=zl("Supprimer la zone",()=>{r(),U.soundZones=V.filter((K,be)=>be!==m),C(),N(),b(),k(),o()}),Te=an("select");V.forEach((K,be)=>Te.add(new Option(K.name,be))),Te.value=m,Te.onchange=()=>{m=Number(Te.value),C(),N(),b()};function Re(K,be){let[oe]=wl([{...$,[K]:be}]);return oe&&(r(),Object.assign($,oe),b(),o()),$[K]}let Ue=Object.assign(an("input"),{value:$.name,maxLength:42});Ue.onchange=()=>{Ue.value=Re("name",Ue.value),Te.options[m].text=$.name};let H=an("select");H.add(new Option("En boucle","loop")),H.add(new Option("\xC0 l\u2019entr\xE9e","enter")),H.value=$.mode,H.onchange=()=>{H.value=Re("mode",H.value)},c.append(_p(re,de),Nr("Zone s\xE9lectionn\xE9e",Te),Nr("Nom",Ue),I(bT,$.clip,K=>{C(),Re("clip",K),k()}),Nr("D\xE9clenchement",H),Yx($,MT,Re),A(()=>$))}function k(){let U=t();u.replaceChildren(an("h3","Sons import\xE9s"));let V=U.soundAssets??[],$=Object.assign(an("input"),{type:"file",accept:"audio/*"});if($.disabled=V.length>=wh,$.onchange=()=>{let H=$.files[0];if(!H)return;if(!H.type.startsWith("audio/")||H.size>45e4){R("Choisissez un fichier audio de moins de 450 ko.");return}let K=new FileReader;K.onload=()=>{if(t()!==U)return;let be=K.result,oe=H.name.replace(/\.[^.]+$/,""),F={id:`audio-${crypto.randomUUID()}`,name:oe,data:be},Z=U.soundAssets??[],ye=Th([...Z,F]);if(be.length>kf||!ye.some(L=>L.id===F.id)){R(`Import impossible. V\xE9rifiez la taille, le format ou la limite de ${wh} sons.`);return}r(),U.soundAssets=ye,_=F.id,o(),O(),R("Son ajout\xE9 aux menus de s\xE9lection.")},K.onerror=()=>R("Impossible de lire ce fichier."),K.readAsDataURL(H)},u.append(Nr("Importer un fichier audio (450 ko maximum)",$)),!V.length)return;let re=an("select");for(let{id:H,name:K}of V)re.add(new Option(K,H));V.some(H=>H.id===_)&&(re.value=_);let de=zl("Supprimer le son",()=>{r(),U.soundAssets=V.filter(H=>H.id!==re.value),C(),o(),O()}),Te=an("p");function Re(){_=re.value;let H=U.pieces.filter(oe=>oe.surfaceSound?.clip===_).length,K=(U.soundZones??[]).filter(oe=>oe.clip===_).length;de.disabled=!!(H||K);let be=[H&&`${H} ${H===1?"pi\xE8ce":"pi\xE8ces"}`,K&&`${K} ${K===1?"zone":"zones"}`];Te.textContent=de.disabled?`Son utilis\xE9 par ${be.filter(Boolean).join(" et ")}. Changez leur son avant de le supprimer.`:"",Te.hidden=!de.disabled}re.onchange=Re,Re();let Ue=A(()=>Sl({clip:re.value,volume:.8,volumeVariation:0,rateVariation:0,pitchVariation:0}));Ue.append(de),u.append(Nr("Son import\xE9",re),Ue,Te)}function O(){!v||!t()||(z(),N(),k(),b())}function J(U){v!==U&&(v=U,d.visible=U,v?O():(C(),b()))}return{refresh:O,setVisible:J}}var zr=new _r,On=new M,qs=new M,$t=new wt,$x={X:new M(1,0,0),Y:new M(0,1,0),Z:new M(0,0,1)},vp={type:"change"},Kx={type:"mouseDown",mode:null},Qx={type:"mouseUp",mode:null},ey={type:"objectChange"},Hh=class extends Mr{constructor(e,t=null){super(void 0,t);let i=new bp(this);this._root=i;let s=new Sp;this._gizmo=s,i.add(s);let r=new wp;this._plane=r,i.add(r);let o=this;function a(v,y){let w=y;Object.defineProperty(o,v,{get:function(){return w!==void 0?w:y},set:function(E){w!==E&&(w=E,r[v]=E,s[v]=E,o.dispatchEvent({type:v+"-changed",value:E}),o.dispatchEvent(vp))}}),o[v]=y,r[v]=y,s[v]=y}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);let l=new M,c=new M,u=new wt,h=new wt,d=new M,f=new wt,p=new M,x=new M,g=new M,m=0,_=new M;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",x),a("rotationAxis",g),a("rotationAngle",m),a("eye",_),this._offset=new M,this._startNorm=new M,this._endNorm=new M,this._cameraScale=new M,this._parentPosition=new M,this._parentQuaternion=new wt,this._parentQuaternionInv=new wt,this._parentScale=new M,this._worldScaleStart=new M,this._worldQuaternionInv=new wt,this._worldScale=new M,this._positionStart=new M,this._quaternionStart=new wt,this._scaleStart=new M,this._getPointer=ST.bind(this),this._onPointerDown=TT.bind(this),this._onPointerHover=wT.bind(this),this._onPointerMove=ET.bind(this),this._onPointerUp=AT.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&zr.setFromCamera(e,this.camera);let t=Mp(this._gizmo.picker[this.mode],zr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&zr.setFromCamera(e,this.camera);let t=Mp(this._plane,zr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Kx.mode=this.mode,this.dispatchEvent(Kx)}}pointerMove(e){let t=this.axis,i=this.mode,s=this.object,r=this.space;if(i==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&zr.setFromCamera(e,this.camera);let o=Mp(this._plane,zr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion($t.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(On.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(On.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),qs.set(a,a,a)}else On.copy(this.pointStart),qs.copy(this.pointEnd),On.applyQuaternion(this._worldQuaternionInv),qs.applyQuaternion(this._worldQuaternionInv),qs.divide(On),t.search("X")===-1&&(qs.x=1),t.search("Y")===-1&&(qs.y=1),t.search("Z")===-1&&(qs.z=1);s.scale.copy(this._scaleStart).multiply(qs),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(On.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(On.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy($x[t]),On.copy($x[t]),r==="local"&&On.applyQuaternion(this.worldQuaternion),On.cross(this.eye),On.length()===0?l=!0:this.rotationAngle=this._offset.dot(On.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply($t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy($t.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(vp),this.dispatchEvent(ey)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Qx.mode=this.mode,this.dispatchEvent(Qx)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(vp),this.dispatchEvent(ey),this.pointStart.copy(this.pointEnd))}getRaycaster(){return zr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,s){let r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(i),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(i),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(i),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(i),r.activeTransparent._color&&r.activeTransparent._color.set(s)}};function ST(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{let e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function wT(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function TT(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function ET(n){this.enabled&&this.pointerMove(this._getPointer(n))}function AT(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Mp(n,e,t){let i=e.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||t)return i[s];return!1}var Oh=new nn,Ht=new M(0,1,0),ty=new M(0,0,0),ny=new St,kh=new wt,Gh=new wt,Qi=new M,iy=new St,kl=new M(1,0,0),Br=new M(0,1,0),Vl=new M(0,0,1),Vh=new M,Bl=new M,Ol=new M,bp=class extends Wt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Sp=class extends Wt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new Xt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Un({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;let s=t.clone();s.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let h=e.clone();h.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};let x=new Bt(0,.04,.1,12);x.translate(0,.05,0);let g=new Ye(.08,.08,.08);g.translate(0,.04,0);let m=new ct;m.setAttribute("position",new Ne([0,0,0,1,0,0],3));let _=new Bt(.0075,.0075,.5,3);_.translate(0,.25,0);function v(k,O){let J=new Wn(k,.0075,3,64,O*Math.PI*2);return J.rotateY(Math.PI/2),J.rotateX(Math.PI/2),J}function y(){let k=new ct;return k.setAttribute("position",new Ne([0,0,0,1,1,1],3)),k}let w={X:[[new pe(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(x,o),[0,.5,0]],[new pe(x,o),[0,-.5,0],[Math.PI,0,0]],[new pe(_,o)]],Z:[[new pe(x,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new vi(.1,0),h),[0,0,0]]],XY:[[new pe(new Ye(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new Ye(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new pe(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Bt(.2,0,.6,4),i),[0,.3,0]],[new pe(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new vi(.2,0),i)]],XY:[[new pe(new Ye(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ye(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new pe(new vi(.01,2),s),null,null,null,"helper"]],END:[[new pe(new vi(.01,2),s),null,null,null,"helper"]],DELTA:[[new Fn(y(),s),null,null,null,"helper"]],X:[[new Fn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new pe(v(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new pe(v(.5,.5),r)]],Y:[[new pe(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pe(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pe(v(.75,1),d),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Fn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new pe(new Mi(.25,10,8),i)]],X:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new Wn(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new Wn(.75,.1,2,24),i)]]},A={X:[[new pe(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new pe(_,r),[0,0,0],[0,0,-Math.PI/2]],[new pe(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(g,o),[0,.5,0]],[new pe(_,o)],[new pe(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(g,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(_,a),[0,0,0],[Math.PI/2,0,0]],[new pe(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new Ye(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new Ye(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ye(.1,.1,.1),h)]]},I={X:[[new pe(new Bt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Bt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Bt(.2,0,.6,4),i),[0,.3,0]],[new pe(new Bt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Bt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Bt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new Ye(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new pe(new Ye(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Ye(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Ye(.2,.2,.2),i),[0,0,0]]]},z={X:[[new Fn(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Fn(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Fn(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(k){let O=new Wt;for(let J in k)for(let U=k[J].length;U--;){let V=k[J][U][0].clone(),$=k[J][U][1],re=k[J][U][2],de=k[J][U][3],Te=k[J][U][4];V.name=J,V.tag=Te,$&&V.position.set($[0],$[1],$[2]),re&&V.rotation.set(re[0],re[1],re[2]),de&&V.scale.set(de[0],de[1],de[2]),V.updateMatrix();let Re=V.geometry.clone();Re.applyMatrix4(V.matrix),V.geometry=Re,V.renderOrder=1/0,V.position.set(0,0,0),V.rotation.set(0,0,0),V.scale.set(1,1,1),O.add(V)}return O}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(w)),this.add(this.gizmo.rotate=N(C)),this.add(this.gizmo.scale=N(A)),this.add(this.picker.translate=N(E)),this.add(this.picker.rotate=N(S)),this.add(this.picker.scale=N(I)),this.add(this.helper.translate=N(R)),this.add(this.helper.rotate=N(b)),this.add(this.helper.scale=N(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Gh;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){let o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&($t.setFromEuler(Oh.set(0,0,0)),o.quaternion.copy(i).multiply($t),Math.abs(Ht.copy(kl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&($t.setFromEuler(Oh.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply($t),Math.abs(Ht.copy(Br).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&($t.setFromEuler(Oh.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply($t),Math.abs(Ht.copy(Vl).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&($t.setFromEuler(Oh.set(0,Math.PI/2,0)),Ht.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ny.lookAt(ty,Ht,Br)),o.quaternion.multiply($t),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),On.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),On.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(On),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ht.copy(kl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ht.copy(Br).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ht.copy(Vl).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ht.copy(Vl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ht.copy(kl).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ht.copy(Br).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(kh.copy(i),Ht.copy(this.eye).applyQuaternion($t.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ny.lookAt(this.eye,ty,Br)),o.name==="X"&&($t.setFromAxisAngle(kl,Math.atan2(-Ht.y,Ht.z)),$t.multiplyQuaternions(kh,$t),o.quaternion.copy($t)),o.name==="Y"&&($t.setFromAxisAngle(Br,Math.atan2(Ht.x,Ht.z)),$t.multiplyQuaternions(kh,$t),o.quaternion.copy($t)),o.name==="Z"&&($t.setFromAxisAngle(Vl,Math.atan2(Ht.y,Ht.x)),$t.multiplyQuaternions(kh,$t),o.quaternion.copy($t))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}},wp=class extends pe{constructor(){super(new Tn(1e5,1e5,2,2),new Xt({visible:!1,wireframe:!0,side:cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Vh.copy(kl).applyQuaternion(t==="local"?this.worldQuaternion:Gh),Bl.copy(Br).applyQuaternion(t==="local"?this.worldQuaternion:Gh),Ol.copy(Vl).applyQuaternion(t==="local"?this.worldQuaternion:Gh),Ht.copy(Bl),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ht.copy(this.eye).cross(Vh),Qi.copy(Vh).cross(Ht);break;case"Y":Ht.copy(this.eye).cross(Bl),Qi.copy(Bl).cross(Ht);break;case"Z":Ht.copy(this.eye).cross(Ol),Qi.copy(Ol).cross(Ht);break;case"XY":Qi.copy(Ol);break;case"YZ":Qi.copy(Vh);break;case"XZ":Ht.copy(Ol),Qi.copy(Bl);break;case"XYZ":case"E":Qi.set(0,0,0);break}break;case"rotate":default:Qi.set(0,0,0)}Qi.length()===0?this.quaternion.copy(this.cameraQuaternion):(iy.lookAt(On.set(0,0,0),Qi,Ht),this.quaternion.setFromRotationMatrix(iy)),super.updateMatrixWorld(e)}};function sy(n,e,t){let i=e.clone().applyQuaternion(t.clone().invert());return["x","y","z"].map(s=>n?.includes(s.toUpperCase())&&i[s]<-1e-6?-1:1)}function ry(n,e,t=!1,i=[1,1,1]){if(t)return{x:n.x,y:n.y,z:n.z};let s=new M(i[0]*(e.w-n.w)/2,n.terrain?0:i[1]*(e.h-n.h)/2,i[2]*(e.d-n.d)/2);return s.applyEuler(new nn(Ee.degToRad(n.pitch),Ee.degToRad(n.yaw),Ee.degToRad(n.roll??0),"YXZ")),{x:n.x+s.x,y:n.y+s.y,z:n.z+s.z}}var oy={type:"change"},Ep={type:"start"},ly={type:"end"},Wh=new Cs,ay=new Pn,CT=Math.cos(70*Ee.DEG2RAD),Mn=new M,Kn=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tp=1e-6,Xh=class extends Mr{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new wt,this._lastTargetPosition=new M,this._quat=new wt().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uo,this._sphericalDelta=new Uo,this._scale=1,this._panOffset=new M,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new M,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PT.bind(this),this._onPointerDown=RT.bind(this),this._onPointerUp=IT.bind(this),this._onContextMenu=BT.bind(this),this._onMouseWheel=UT.bind(this),this._onKeyDown=FT.bind(this),this._onTouchStart=NT.bind(this),this._onTouchMove=zT.bind(this),this._onMouseDown=DT.bind(this),this._onMouseMove=LT.bind(this),this._interceptControlDown=OT.bind(this),this._interceptControlUp=kT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oy),this.update(),this.state=Vt.NONE}update(e=null){let t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kn:i>Math.PI&&(i-=Kn),s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Mn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new M(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wh.origin.copy(this.object.position),Wh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wh.direction))<CT?this.object.lookAt(this.target):(ay.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wh.intersectPlane(ay,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tp||this._lastTargetPosition.distanceToSquared(this.target)>Tp?(this.dispatchEvent(oy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Mn.copy(s).sub(this.target);let r=Mn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function RT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function PT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function IT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ly),this.state=Vt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Vt.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Vt.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Ep)}function LT(n){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function UT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(n.preventDefault(),this.dispatchEvent(Ep),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ly))}function FT(n){this.enabled!==!1&&this._handleKeyDown(n)}function NT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Vt.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Vt.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Ep)}function zT(n){switch(this._trackPointer(n),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Vt.NONE}}function BT(n){this.enabled!==!1&&n.preventDefault()}function OT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var B=n=>document.getElementById(n),xy=["name","x","y","z","w","h","d","pitch","yaw","roll","material","color","grip","gravity","bounce","solid"],yy=["uvScale","uvRotation","uvOffsetX","uvOffsetY"],Jh=[...document.querySelectorAll(".tool")],_y="gorilla-lab-editor-draft",xs=ex(localStorage),VT=Xf(),Zn=[...new Map([...VT,...xs.models.filter(n=>n.kind!=="avatar")].map(n=>[n.id,n])).values()].filter(n=>n.parts.length);function vy(n){let e=n??B("model-library").value;B("model-library").replaceChildren(new Option("S\xE9lectionner un mod\xE8le\u2026",""),...Zn.map(t=>new Option(t.name+(t.kind==="structure"?" \xB7 D\xE9cor":" \xB7 Objet"),t.id))),Zn.some(t=>t.id===e)?B("model-library").value=e:Zn.length===1&&(B("model-library").value=Zn[0].id),B("place-model").disabled=!Zn.length}var My=new URLSearchParams(location.search),Ip=My.get("model"),Dp="gorilla-lab-edit-map-model";vy(Ip);function kr(){return Zn.find(n=>n.id===B("model-library").value)}function by(){let n=kr();if(!n)return null;let e=sa(n);return di({name:n.name.slice(0,36),model:structuredClone(n),x:0,y:Math.max(.15,e.y/2),z:0,w:Ee.clamp(e.x,.2,64),h:Ee.clamp(e.y,.12,36),d:Ee.clamp(e.z,.2,64),...Qf(n),color:"#ffffff",solid:n.properties.collidable!==!1})}B("model-library").addEventListener("change",()=>{tt==="model"&&ys(null),Qp()});var Ap={block:di({w:1,h:1,d:1}),ramp:di({name:"Rampe",w:3,h:1.15,d:4,primitive:"ramp",material:5}),terrain:di({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:gs({amplitude:.7,grassDensity:1.7})}),wall:di({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Vp={move:"Clique ou touche une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",translate:"S\xE9lectionne une pi\xE8ce et tire une fl\xE8che pour la d\xE9placer sur un axe. La grille fixe le pas.",rotate:"S\xE9lectionne une pi\xE8ce puis tire un anneau color\xE9 pour la tourner par crans de 5\xB0.",scale:"Tire une poign\xE9e pour agrandir depuis une face. Maintiens Ctrl pendant le geste pour redimensionner sym\xE9triquement autour du centre.",view:"Glisse dans la vue 3D pour tourner. Utilise la molette ou pince \xE0 deux doigts pour zoomer.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",preset:"Choisis une forme rapide et clique o\xF9 la placer. Tu peux ensuite la modifier ou la remplacer par un mod\xE8le.",spawn:"D\xE9place l\u2019anneau avec les fl\xE8ches ou clique sur une surface pour placer le d\xE9part.",model:"Choisis un mod\xE8le dans la biblioth\xE8que, puis clique dans la vue 3D ou sur le plan pour le poser."},se,_t=-1,tt="move",Pt=null,fi=null,Gp,ed,Hl=[],Zs=null,jh=[];function Hi(n,e={},t="info"){let i={time:new Date().toISOString(),event:n,tool:tt,selected:_t,...e};jh.push(i),jh.length>100&&jh.shift(),console[t]("[Gorilla Lab \xE9diteur] "+n,i)}window.gorillaEditorDiagnostics=()=>{let n=st(),e=Hr.info.render;return{version:"R54",map:{name:se.name,pieces:se.pieces.length},tool:tt,selected:_t,piece:n?{name:n.name,terrain:!!n.terrain,yaw:n.yaw,w:n.w,h:n.h,d:n.d}:null,rules:n?.terrain?.rules.map(({kind:t,density:i,fit:s,colors:r,collidable:o})=>({kind:t,density:i,fit:s,teintes:r.length,collidable:o})),viewport:[rn.width,rn.height],render:{...e},events:[...jh]}};window.addEventListener("error",n=>{n.message&&Hi("erreur JavaScript",{message:n.message,stack:n.error?.stack},"error")});window.addEventListener("unhandledrejection",n=>Hi("promesse rejet\xE9e",{message:String(n.reason),stack:n.reason?.stack},"error"));var Js=[],rn=B("preview"),ut=B("plan"),vt=ut.getContext("2d");function GT(){let n={slab:["Dalle",3,.12,3],column:["Colonne",.6,3,.6],beam:["Poutre",4,.4,.45],platform:["Plateforme",7,.4,5],fence:["Barri\xE8re",4,1.3,.18],stair:["Marche",1.7,.25,.8],tiny:["Petit d\xE9cor",.35,.35,.35],sphere:["Sph\xE8re",1,1,1],cylinder:["Cylindre",1,2,1],cone:["C\xF4ne",1.6,2,1.6],torus:["Anneau",2,.65,2],capsule:["Capsule",1,2,1]},[e,t,i,s]=n[B("shape-preset").value]??n.slab;return di({name:e,w:t,h:i,d:s,y:i/2,primitive:["sphere","cylinder","cone","torus","capsule"].includes(B("shape-preset").value)?B("shape-preset").value:"box"})}var HT=B("editor-views");function $l(){HT.dataset.layout=B("layout-mode").value,document.documentElement.style.setProperty("--view-fraction",B("view-split").value+"%"),document.documentElement.style.setProperty("--side-width",B("sidebar-width").value+"px"),requestAnimationFrame(()=>{nd(),id()})}for(let n of["layout-mode","view-split","sidebar-width"])B(n).addEventListener("input",$l);B("sidebar-toggle").onclick=()=>{document.body.classList.toggle("inspector-hidden"),$l()};var Lp=B("workspace-fullscreen");Lp.onclick=async()=>{try{document.fullscreenElement===document.documentElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{mt("Plein \xE9cran indisponible dans ce navigateur.")}};document.addEventListener("fullscreenchange",()=>{let n=document.fullscreenElement===document.documentElement;Lp.setAttribute("aria-pressed",String(n)),Lp.textContent=n?"Quitter le plein \xE9cran":"Plein \xE9cran",requestAnimationFrame(()=>{nd(),id()})});B("focus-3d").onclick=()=>{B("layout-mode").value="only-3d",$l()};B("focus-plan").onclick=()=>{B("layout-mode").value="only-plan",$l()};function WT(){let n=document.querySelector("main"),e=n.querySelector("aside.panel");e.id="scene-sidebar";let t=(oe,F,Z)=>{let ye=document.createElement(oe);return F&&(ye.className=F),Z!==void 0&&(ye.textContent=Z),ye},i=t("nav","tool-rail");i.id="tool-rail",i.setAttribute("aria-label","Outils de l\u2019atelier"),n.prepend(i);let s={move:"\u2316",translate:"\u2723",rotate:"\u21BB",scale:"\u2922",view:"\u25C9",block:"\u25A3",ramp:"\u25E9",wall:"\u25A5",terrain:"\u25A6",sculpt:"\u3030",model:"\u2B21",preset:"\u229E",spawn:"\u2295"},r={translate:"transforms",block:"build",terrain:"terrain",model:"library",spawn:"spawn"};for(let oe of Jh){let F=oe.dataset.tool,Z=oe.textContent.trim().replace(/\s+[VG RSC1234]$/,"").trim();if(r[F]){let ye=t("div","rail-divider");ye.title={transforms:"Transformations",build:"Construction",terrain:"Terrain",library:"Biblioth\xE8que",spawn:"D\xE9part"}[r[F]],i.append(ye)}oe.classList.add("rail-tool"),oe.title=Z+" \xB7 "+(Vp[F]??""),oe.setAttribute("aria-label",Z),oe.replaceChildren(t("span","rail-glyph",s[F]??"\u25A1"),t("span","rail-caption",Z==="Redimensionner"?"\xC9chelle":Z==="S\xE9lectionner"?"S\xE9lect.":Z==="D\xE9placer"?"D\xE9placer":Z==="Atelier"?"Mod\xE8le":Z)),i.append(oe)}let o=t("div","insert-palette");o.id="insert-palette",o.hidden=!0;let a=t("h2","","Ajouter un \xE9l\xE9ment");o.append(a);let l=document.querySelector(".command-bar .tools"),c=B("shape-preset").closest("label"),u=B("model-library").closest(".inspector-section"),h=l.querySelector('a[href*="model-editor"]');h&&(h.textContent="\u270E Modifier dans l\u2019atelier des mod\xE8les"),o.append(c,u);let d=t("button","model-place-action","\u2B21 Placer ce mod\xE8le dans la sc\xE8ne");d.id="model-place-action",d.type="button",o.append(d);let f=t("button","delete-library-model","Supprimer de la biblioth\xE8que");f.type="button",f.id="delete-library-model",f.title="Effacer cette cr\xE9ation de la biblioth\xE8que locale, sans retirer les exemplaires d\xE9j\xE0 pos\xE9s sur la carte",o.append(f),h&&o.append(h);let p=t("p","palette-help","Choisis une forme, puis clique dans la sc\xE8ne.");o.append(p);let x=t("p","model-count-hint","");o.append(x),n.append(o);let g=document.querySelector(".command-bar .command-row");l.remove(),g.querySelector(".actions").classList.add("viewport-actions");let _=B("layout-mode").closest("label");_.classList.add("viewport-layout"),g.prepend(_);let v=t("span","active-selection","Aucune s\xE9lection");v.id="active-selection",_.after(v);let y=t("details","precision-menu");y.id="precision-menu",y.append(t("summary","","Accrochage \u25BE"));let w=t("div","precision-options"),E=["snap","magnet","magnet-mode","magnet-distance","view-split"];for(let oe of E){let F=B(oe);F&&w.append(F.closest("label"))}y.append(w),g.append(y);let R=oe=>{if(oe==="close"){o.hidden=!0;return}let F=oe==="model";o.hidden=!1,o.dataset.mode=oe,a.textContent=F?"Mes mod\xE8les / biblioth\xE8que":"Ajouter une forme",u.hidden=!F,c.hidden=F,d.hidden=!F,f.hidden=!F,h&&(h.hidden=!F),p.textContent=F?"S\xE9lectionne un mod\xE8le, puis clique sur le terrain ou le plan pour le placer. Il sera int\xE9gr\xE9 \xE0 la carte.":"Choisis une forme puis clique dans la vue 3D ou sur le plan pour la poser.",x.hidden=!F,x.textContent=F?Zn.length+" mod\xE8le(s) enregistr\xE9(s) dans ce navigateur":"";let Z=kr();d.disabled=!Z,d.textContent=Z?"\u2B21 Placer \xAB "+Z.name+" \xBB":"Aucun mod\xE8le \xE0 placer",f.disabled=!Z||!xs.models.some(L=>L.id===Z.id),h&&(h.href="./model-editor.html"+(Z?Z.assetId&&Z.id==="custom-model-game-"+Z.assetId?"?asset="+encodeURIComponent(Z.assetId):"?model="+encodeURIComponent(Z.id):"")),B(F?"model-library":"shape-preset").focus({preventScroll:!0})};d.onclick=()=>{kr()&&(Wi("model"),R("close"),rn.focus({preventScroll:!0}),mt("Clique dans la sc\xE8ne pour placer \xAB "+kr().name+" \xBB."))},f.onclick=()=>{let oe=kr();if(!(!oe||!xs.models.some(F=>F.id===oe.id))&&confirm("Supprimer d\xE9finitivement \xAB "+oe.name+" \xBB de la biblioth\xE8que de ce navigateur ?\\n\\nLes exemplaires d\xE9j\xE0 plac\xE9s dans cette carte resteront en place."))try{let F=ms({...xs,models:xs.models.filter(ye=>ye.id!==oe.id),avatarId:xs.avatarId===oe.id?null:xs.avatarId});localStorage.setItem(Kf,JSON.stringify(F)),Object.assign(xs,F);let Z=Zn.findIndex(ye=>ye.id===oe.id);Z>=0&&Zn.splice(Z,1),vy(),tt==="model"&&!Zn.length&&Wi("move"),ys(null),Qp(),R("model"),mt("\xAB "+oe.name+" \xBB supprim\xE9 de la biblioth\xE8que. Les exemplaires de la carte sont conserv\xE9s.")}catch(F){mt("Suppression impossible : "+(F.message||"stockage local indisponible"))}},B("model-library").addEventListener("change",()=>{o.dataset.mode==="model"&&!o.hidden&&R("model")});for(let oe of["model","preset"])Jh.find(Z=>Z.dataset.tool===oe)?.addEventListener("click",()=>R(oe));window.addEventListener("pointerdown",oe=>{!o.hidden&&!o.contains(oe.target)&&!oe.target.closest(".rail-tool")&&R("close")}),window.addEventListener("keydown",oe=>{oe.key==="Escape"&&R("close")});let C=t("section","outliner");C.id="scene-outline";let b=t("header","side-section-head");b.append(t("strong","","Hi\xE9rarchie de la sc\xE8ne")),b.append(t("span","outline-meta","Objets")),C.append(b);let S=e.querySelector("#pieces").closest(".inspector-section");S.id="outline-content",C.append(S);let A=t("section","property-pane"),I=t("nav","inspector-tabs");I.setAttribute("aria-label","Propri\xE9t\xE9s");let z=[["object","Mod\xE9liser"],["terrain","Terrain"],["material","Texturer"],["props","Props"],["collision","Collisions"],["behavior","Physique"],["audio","Audio"],["traffic","Circulation"],["scene","Sc\xE8ne"],["publish","Jouer / Exporter"]];for(let[oe,F]of z){let Z=t("button","inspector-tab",F);Z.type="button",Z.dataset.tab=oe,Z.setAttribute("aria-pressed",String(oe==="object")),I.append(Z)}let N=t("div","property-content");N.id="property-content";let k=B("piece-inspector").closest(".inspector-section");k.id="object-section";let O=k.querySelector("#surface").closest("details");O.id="surface-controls";let J=t("section");J.id="collision-options",J.append(t("h3","","Collisions de la pi\xE8ce")),J.append(k.querySelector("#p-solid").closest("label"),B("debug-controls"));let U=t("section");U.id="behavior-options";let V=t("div","fields");for(let oe of["surface","p-grip","p-gravity","p-bounce"])V.append(O.querySelector("#"+oe).closest("label"));U.append(t("h3","","Propri\xE9t\xE9s physiques")),U.append(V,k.querySelector("#model-object-controls"));let $=t("section");$.id="publish-options";for(let[oe,F,Z]of[["test-map","Jouer cette map","Tester la carte"],["export-map","Exporter JSON","Exporter la carte"]]){let ye=t("div","piece-actions"),L=t("button","",F);L.type="button",L.addEventListener("click",()=>B(oe).click()),ye.append(L),$.append(t("h3","",Z),ye)}let re=t("section");re.id="audio-options";let de=t("section");de.id="traffic-options",N.append(k,J,U,re,de,$);let Te=t("section","scene-options");Te.id="scene-options",Te.append(t("h2","","Param\xE8tres de carte"));let Re=B("map-name").closest("label"),Ue=B("map-world-size").closest(".fields"),H=B("draft-status");Te.append(Re,Ue,H);let K=[...e.children].filter(oe=>oe.tagName==="DETAILS");for(let oe of K)Te.append(oe);N.append(Te),A.append(I,N),e.replaceChildren(C,A);let be=oe=>{let F=se?.pieces?.[_t];["terrain","props"].includes(oe)&&!F?.terrain&&(oe="object"),["material","behavior"].includes(oe)&&!F&&(oe="object"),e.dataset.tab=oe;for(let Z of I.querySelectorAll("button"))Z.setAttribute("aria-pressed",String(Z.dataset.tab===oe)),Z.disabled=["terrain","props"].includes(Z.dataset.tab)&&!F?.terrain;oe==="terrain"&&(B("terrain-controls").open=!0),oe==="material"&&(O.open=!0),Gp?.setVisible(oe==="audio"),ed?.setVisible(oe==="traffic"),N.scrollTop=0};for(let oe of I.querySelectorAll("button"))oe.addEventListener("click",()=>be(oe.dataset.tab));window.setInspectorTab=be,be("object")}WT();var Ot={scale:10,cx:0,cz:-6,width:30,height:40},Hr=new lh({canvas:rn,antialias:!0});Hr.setPixelRatio(Math.min(devicePixelRatio,1.5));rn.addEventListener("webglcontextlost",()=>Hi("contexte WebGL perdu",{},"warn"));var Tt=new Rn(52,1,.1,640);Tt.position.set(16,15,19);var Ut=new Xh(Tt,rn);Ut.target.set(0,0,-5);Ut.mouseButtons.LEFT=null;Ut.mouseButtons.RIGHT=Si.ROTATE;Ut.mouseButtons.MIDDLE=Si.PAN;Ut.maxDistance=580;Ut.maxPolarAngle=Math.PI-.035;var Kt=new bo;Gp=Jx({container:B("audio-options"),scene:Kt,getMap:()=>se,getPiece:st,getCenter:()=>Ut.target.toArray(),remember:Et,save:Qs,render:qt});ed=Hx({container:B("traffic-options"),scene:Kt,getMap:()=>se,getPiece:st,getCenter:()=>Ut.target.toArray(),remember:Et,save:Qs,render:qt});var Sy=new He("#8fb6c6");Kt.background=Sy;var wy=new gr("#f0f5ff","#8e775c",2.6);Kt.add(wy);var Hp=new yr("#fff1d2",1.8);Hp.position.set(-9,18,6);Kt.add(Hp);var es=new bo;es.fog=new cr("#a6d4ea",55,135);var kn=b0(es,Hr),XT=i0(Hr);kn.probe.userData.editorAssetId="chrome-sphere";var aP=S0(es,kn.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"}),qT=new Map(Xf().map(n=>[n.assetId,n]));function cy(n,e,t=null,i=null){let s=structuredClone(t??qT.get(n));if(!s)throw new Error("Asset int\xE9gr\xE9 introuvable : "+n);let r=Rl(s),o=r.getSize(new M),a=r.getCenter(new M);return di({name:(i??s.name).slice(0,36),model:s,x:e.x+a.x,y:e.y+a.y,z:e.z+a.z,w:Math.max(.05,o.x),h:Math.max(.05,o.y),d:Math.max(.05,o.z),color:"#ffffff",solid:s.properties?.collidable!==!1})}var Wp=()=>{let n=Ax(kn.boxes),e=kn.boxes.find(t=>t.heightfield);if(e){let{xMin:t,xMax:i,zMin:s,zMax:r}=e,o=32,a=i-t,l=r-s,c=Array.from({length:(o+1)**2},(u,h)=>{let d=t+h%(o+1)/o*a,f=s+Math.floor(h/(o+1))/o*l;return e.height(d,f)});n.pieces.push(di({name:"Relief principal",sceneryId:"lab-hill",x:(t+i)/2,y:0,z:(s+r)/2,w:a,h:2,d:l,material:3,grip:.81,solid:!0,terrain:gs({detail:o,seed:1,amplitude:0,heights:c})}))}return n.assetLayer=!0,n.editableArena=!0,n.pieces.push(pp()),R0((t,i)=>{let s=Hf[t];s&&n.pieces.push(cy(s,i))}),n.pieces.push(cy("chrome-sphere",new M(zs.x,zs.y,zs.z))),vn(n)};se=Wp();var Xp=new pe(new Ye(1.8,2.03,.1),new gn({color:"#8daebc",metalness:.9,roughness:.12}));Xp.position.set(Ns.x,Ns.y,Ns.z);Xp.userData.editorAssetId="lab-mirror";es.add(Xp);var YT=kn.boxes.filter(n=>n.half&&n.mesh?.isObject3D);YT.forEach(n=>n.mesh.removeFromParent());var $h=new Jt;$h.add(...es.children);Kt.add($h,...kn.lighting);var js=kn.boxes.find(n=>n.heightfield).mesh;js.userData.editorAssetId="lab-hill";kn.visual(7,0,7,!0,!0,512,!1);var qp=[...document.querySelectorAll("[data-env]")],ca=B("environment-status"),fa=new ll(60,60,"#d7e2e5","#5e7b8a");fa.material.transparent=!0;fa.material.opacity=.35;Kt.add(fa);var yt=new Jt;Kt.add(yt);var et=new Hh(Tt,rn);et.setSize(.9);et.setRotationSnap(Ee.degToRad(5));et.enabled=!1;Kt.add(et.getHelper());var Yp=new Set(["translate","rotate","scale"]),$s=null,Qn=null,Zp=!1,Wl=null,qh=!1,Ty=()=>Number(B("magnet-distance").value);for(let n of["magnet-mode","magnet-distance"]){try{let e=localStorage.getItem("gorilla-lab-"+n);[...B(n).options].some(t=>t.value===e)&&(B(n).value=e)}catch{}B(n).onchange=()=>{Qn=null;try{localStorage.setItem("gorilla-lab-"+n,B(n).value)}catch{}}}var Vr=new Map;try{B("magnet").checked=localStorage.getItem("gorilla-lab-editor-magnet")!=="off"}catch{}B("magnet").onchange=()=>{Qn=null,Vr.clear();try{localStorage.setItem("gorilla-lab-editor-magnet",B("magnet").checked?"on":"off")}catch{}};for(let n of["keydown","keyup"])window.addEventListener(n,e=>{Zp=e.altKey});window.addEventListener("blur",()=>{Zp=!1,Qn=null});function Ey(n,e,t,i){let s={...e};if(!i)for(let p of t)s[p]=Math.round(e[p]/jl())*jl();if(i||!B("magnet").checked||!n.solid||n.terrain)return Qn=null,s;let r=Ty(),o=B("magnet-mode").value==="edge",a={x:"w",y:"h",z:"d"},l=p=>{if(p.terrain||!p.solid||[p.pitch,p.yaw,p.roll??0].some(m=>Math.abs(m/90-Math.round(m/90))>1e-6))return null;let x=new nn(...[p.pitch,p.yaw,p.roll??0].map(Ee.degToRad),"YXZ"),g=new St().makeRotationFromEuler(x).elements;return Object.fromEntries(["x","y","z"].map((m,_)=>[m,(Math.abs(g[_])*p.w+Math.abs(g[4+_])*p.h+Math.abs(g[8+_])*p.d)/2]))},c=l(n);if(!c)return s;let u=[];for(let p of se.pieces){if(p===n)continue;let x=l(p);if(x)for(let g of t){let m=Object.keys(a).filter(y=>y!==g),_=y=>Math.abs(s[y]-p[y])<c[y]+x[y]-.001,v=m.flatMap(y=>t.includes(y)&&_(m.find(w=>w!==y))?[-1,1].flatMap(w=>[-1,1].map(E=>{let R=p[y]+w*x[y]-E*c[y];return{key:y,value:R,distance:Math.abs(e[y]-R)}})):[]).sort((y,w)=>y.distance-w.distance)[0];if(!(o?!v||v.distance>r*1.8:!m.every(_)))for(let y of[-1,1]){let w=p[g]+y*(c[g]+x[g]),E=se.pieces.indexOf(p)+":"+g+":"+y;u.push({key:E,axis:g,value:w,edge:o?v:null,distance:Math.max(Math.abs(w-e[g]),o?v.distance:0)})}}}let h=u.find(p=>p.key===Qn),d=p=>{s[p.axis]=p.value,p.edge&&(s[p.edge.key]=p.edge.value)};if(h&&h.distance<=r*1.8)return d(h),s;Qn&&(Vr.set(Qn,(Vr.get(Qn)??0)+1),Qn=null);let f=u.filter(p=>p.distance<=r&&(Vr.get(p.key)??0)<3).sort((p,x)=>p.distance-x.distance)[0];if(f)d(f),Qn=f.key;else for(let p of u)p.distance<=r&&(Vr.get(p.key)??0)>=3&&Math.abs(s[p.axis]-p.value)<.001&&(s[p.axis]=e[p.axis]);return s}var Xl=new Ye(1,1,1),ZT=zf(),jT=new bi,Kh=.025,JT=new Ps(.24,.36,40).rotateX(-Math.PI/2),Ay=new Xt({color:"#ffcd63",side:cn}),ei=new pe(JT,Ay),Cy=new pe(new Tn(.12,.2).rotateX(-Math.PI/2),Ay);Cy.position.set(0,0,-.39);ei.add(Cy);Kt.add(ei);var Gr=new pe(Xl,new Xt({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),ua=new pe(new Mi(.055,10,8),new Xt({color:"#ffc85a",depthTest:!1}));ua.visible=!1;ua.renderOrder=20;Kt.add(ua);var ql=new pe(ei.geometry,new Xt({color:"#ffe084",side:cn,opacity:.65,transparent:!0,depthWrite:!1}));Gr.visible=ql.visible=!1;Kt.add(Gr,ql);var Ks=new _r,td=new M(0,1,0),uy=new Pn(td,0),$T=new ht,pn=new Set,Up=[],Ys=null,Gi=null,Cp=!1,Gl=60,hy=-1/0;function qt(){Cp||(Cp=!0,requestAnimationFrame(n=>{Cp=!1;let e=ed.update(n),t=n-hy;hy=n,t<125&&(Gl=Ee.lerp(Gl,1e3/Math.max(10,t),.17));let i=Tt.position.distanceTo(Ut.target),s=Math.max(640,se.worldSize*2,i+se.worldSize*2),r=Math.max(140,i+se.worldSize*.35),o=B("adaptive-editor-view").checked?Ee.smoothstep(Gl,24,50):1,a=Ee.lerp(r,s,o);Tt.far=Math.max(r,Ee.lerp(Tt.far,a,.2)),Tt.updateProjectionMatrix(),kn.centerSky(Tt.position,Tt.far);let l=performance.now();XT.render(Kt,Tt,B("environment-bloom-preview").checked&&kn.sunDisk.visible?kn.bloomProfile:null)||Hr.render(Kt,Tt);let c=performance.now()-l;c>25&&(Gl=Math.min(Gl,1e3/c)),(e||Math.abs(Tt.far-a)>3)&&qt(),Vy()}))}function nd(){let n=rn.clientWidth||1,e=rn.clientHeight||1;Hr.setSize(n,e,!1),Tt.aspect=n/e,Tt.updateProjectionMatrix(),qt()}function id(){let n=Math.max(1,ut.clientWidth),e=Math.max(1,ut.clientHeight);n===ut.width&&e===ut.height||(ut.width=n,ut.height=e,jp(),pi())}new ResizeObserver(nd).observe(rn);new ResizeObserver(id).observe(ut);Ut.addEventListener("change",qt);Ut.addEventListener("start",()=>ys(null));function jp(){Ot.scale=Math.min(ut.width/Ot.width,ut.height/Ot.height)}function Yl(n,e){return[ut.width/2+(n-Ot.cx)*Ot.scale,ut.height/2+(e-Ot.cz)*Ot.scale]}function Fp(n){let e=ut.getBoundingClientRect();return{x:((n.clientX-e.left)*ut.width/e.width-ut.width/2)/Ot.scale+Ot.cx,z:((n.clientY-e.top)*ut.height/e.height-ut.height/2)/Ot.scale+Ot.cz}}function dy(n,e,t,i,s){let[r,o]=Yl(n.x,n.z),a=Ee.degToRad(n.pitch),l=Ee.degToRad(n.roll??0),c=Math.abs(Math.cos(l))*n.w+Math.abs(Math.sin(l))*n.h,u=Math.abs(Math.cos(a))*n.d+Math.abs(Math.sin(a))*(Math.abs(Math.sin(l))*n.w+Math.abs(Math.cos(l))*n.h);vt.save(),vt.translate(r,o),vt.rotate(-Ee.degToRad(n.yaw));let h=c*Ot.scale,d=u*Ot.scale;vt.globalAlpha=s,vt.fillStyle=e,vt.fillRect(-h/2,-d/2,h,d),vt.globalAlpha=1,vt.strokeStyle=t,vt.lineWidth=i,vt.strokeRect(-h/2,-d/2,h,d),vt.restore()}function fy(n,e){let[t,i]=Yl(n.x,n.z);vt.save(),vt.translate(t,i),vt.rotate(Ee.degToRad(-n.yaw)),vt.strokeStyle=e?"#fff0bb":"#ffd16e",vt.lineWidth=2,vt.beginPath(),vt.arc(0,0,6,0,Math.PI*2),vt.moveTo(0,-6),vt.lineTo(0,-11),vt.stroke(),vt.restore()}function pi(){vt.fillStyle="#192e3a",vt.fillRect(0,0,ut.width,ut.height),vt.strokeStyle="#37505f",vt.lineWidth=1;let n=Ot.scale<1?25:Ot.scale<4?10:Ot.scale<12?5:1,e=(se.worldSize??240)/2;for(let r=-Math.ceil(e/n)*n;r<=e;r+=n){let[o,a]=Yl(r,r);o>=0&&o<=ut.width&&(vt.beginPath(),vt.moveTo(o,0),vt.lineTo(o,ut.height),vt.stroke()),a>=0&&a<=ut.height&&(vt.beginPath(),vt.moveTo(0,a),vt.lineTo(ut.width,a),vt.stroke())}let[t,i]=Yl(-e,-e);vt.strokeStyle="#ffda9077",vt.lineWidth=2,vt.strokeRect(t,i,e*2*Ot.scale,e*2*Ot.scale);let s=se.pieces.map((r,o)=>({piece:r,index:o})).sort((r,o)=>r.piece.y-o.piece.y);for(let{piece:r,index:o}of s){let a=r.model?.parts[0]?.color??(r.color==="#ffffff"?fp[r.material]:r.color);dy(r,a,o===_t||pn.has(o)?"#ffe095":"#a4bac7",o===_t||pn.has(o)?2:1,r.solid?.86:.38)}fy(se.spawn,!1),fi&&(tt==="spawn"?fy(fi,!0):dy(fi,"#8ee7fc","#afefff",2,.45))}function Zl(n,e){n.position.set(e.x,e.y,e.z),e.terrain&&n!==Gr?n.scale.setScalar(1):n.scale.set(e.w,e.h,e.d),n.rotation.set(Ee.degToRad(e.pitch),Ee.degToRad(e.yaw),Ee.degToRad(e.roll??0),"YXZ"),n.updateMatrixWorld()}function sd(){for(let e of Up.splice(0))Kt.remove(e),e.geometry.dispose(),e.material.dispose();for(let e of pn){if(e===_t||!yt.children[e])continue;let t=new vr(yt.children[e],"#ffdf88");Up.push(t),Kt.add(t)}Gi&&(Kt.remove(Gi),Gi.geometry.dispose(),Gi.material.dispose());let n=yt.children[_t];Gi=n?new vr(n,"#ffdf88"):null,Gi&&Kt.add(Gi),Np()}function Np(){if(tt==="spawn"){et.enabled=!0,et.setMode("translate"),et.setSpace("world"),et.setTranslationSnap(null),et.setRotationSnap(null),et.showX=et.showY=et.showZ=!0,et.attach(ei);return}let n=yt.children[_t],e=st()?.terrain,t=Yp.has(tt)&&!!n;if(et.enabled=t,!t){et.detach();return}et.setMode(tt),et.setSpace(tt==="translate"?"world":"local"),et.setTranslationSnap(null);let i=!!(e&&tt==="rotate");et.setRotationSnap(i?Math.PI/2:null),et.showX=et.showZ=!i,et.showY=!(e&&tt==="scale"),et.attach(n),B("tool-help").textContent=i?"Tourne le terrain \xE0 plat par pas de 90\xB0 avec l\u2019anneau vert.":Vp[tt]}var ha=!1;function Ry(){if(tt!=="scale")return;let n=st(),e=$s?.map.pieces[_t],t=et.object;if(!n||!e||!t)return;let i=ry(e,n,ha,$s?.scaleSides),s=(se.worldSize??240)/2;n.x=Ee.clamp(i.x,-s,s),n.y=Ee.clamp(i.y,-hi,hi),n.z=Ee.clamp(i.z,-s,s),t.position.set(n.x,n.y,n.z),Gi?.update();for(let r of["x","y","z"])B("p-"+r).value=n[r].toFixed(2);pi(),qt()}function Py(n){let e=ha;ha=n.ctrlKey,e!==ha&&et.dragging&&Ry()}for(let n of["keydown","keyup"])window.addEventListener(n,Py);rn.addEventListener("pointermove",Py,{capture:!0});et.addEventListener("change",qt);et.addEventListener("mouseDown",()=>{let n=st();if(Qn=null,n||et.object===ei){let e=tt==="scale"?sy(et.axis,et.pointStart,et.worldQuaternionStart):void 0;$s={map:structuredClone(se),selected:_t,scaleSides:e},Hi("transformation d\xE9marr\xE9e",{name:n?.name??"D\xE9part",axis:et.axis,scaleSides:e,terrain:!!n?.terrain})}ha=!!(ha||window.event?.ctrlKey)});et.addEventListener("objectChange",()=>{let n=st(),e=et.object,t=$s?.map.pieces[_t];if(e===ei&&$s){let s=(se.worldSize??240)/2,r=Ee.clamp;se.spawn.x=r(ei.position.x,-s,s),se.spawn.y=r(ei.position.y-Kh,-hi,hi),se.spawn.z=r(ei.position.z,-s,s),ei.position.set(se.spawn.x,se.spawn.y+Kh,se.spawn.z);for(let o of["x","y","z"])B("spawn-"+o).value=se.spawn[o].toFixed(2);pi();return}if(!n||!e||!t)return;let i=Ee.clamp;if(tt==="translate"){let s=["x","y","z"].filter(a=>(et.axis??"XYZ").includes(a.toUpperCase())),r=Ey(n,{x:e.position.x,y:e.position.y,z:e.position.z},s,Zp),o=(se.worldSize??240)/2;n.x=i(r.x,-o,o),n.y=i(r.y,-hi,hi),n.z=i(r.z,-o,o),e.position.set(n.x,n.y,n.z)}else tt==="rotate"?(n.pitch=Ee.radToDeg(e.rotation.x),n.yaw=Ee.radToDeg(e.rotation.y),n.roll=Ee.radToDeg(e.rotation.z),n.terrain&&(n.pitch=n.roll=0,n.yaw=oa(n.yaw),e.rotation.set(0,Ee.degToRad(n.yaw),0,"YXZ"))):(n.w=i(e.scale.x*(n.terrain?t.w:1),.05,n.terrain?Nh:Ws),n.d=i(e.scale.z*(n.terrain?t.d:1),.05,n.terrain?Nh:Ws),n.terrain||(n.h=i(e.scale.y,.05,256)),e.scale.set(n.terrain?n.w/t.w:n.w,n.terrain?1:n.h,n.terrain?n.d/t.d:n.d),Ry());e.updateMatrixWorld(!0),Gi?.update();for(let s of["x","y","z","pitch","yaw","roll","w","h","d"])B("p-"+s).value=Number(n[s]??0).toFixed(2);pi(),qt()});et.addEventListener("dragging-changed",({value:n})=>{if(Ut.enabled=!n,n||!$s)return;let e=$s;$s=null;let t=et.object===ei,i=t?e.map.spawn:e.map.pieces[_t],s=t?se.spawn:st();if(JSON.stringify(i)===JSON.stringify(s)){Hi("transformation sans changement",{name:s?.name,axis:et.axis});return}let r=o=>o&&Object.fromEntries(["x","y","z","w","h","d","pitch","yaw","roll"].filter(a=>a in o).map(a=>[a,o[a]]));Hi("transformation appliqu\xE9e",{name:s?.name??"D\xE9part",avant:r(i),apr\u00E8s:r(s),scaleSides:e.scaleSides}),Js.length>=35&&Js.shift(),Js.push(e),se=vn(se),Rt(),mt("Transformation appliqu\xE9e.")});rn.addEventListener("pointerup",()=>{et.dragging||(Ut.enabled=!0)});rn.addEventListener("pointercancel",()=>{et.dragging&&et.pointerUp(null),Ut.enabled=!0});function KT(){et.detach();for(let t of[...yt.children])yt.remove(t),t.geometry!==Xl&&t.geometry.dispose(),t.userData.pickProxy&&(t.userData.pickProxy.geometry.dispose(),t.userData.pickProxy.material.dispose()),t.userData.vegetation&&wx(t.userData.vegetation),t.userData.ownsTexture&&t.material.map?.dispose(),na(t.material);$h.visible=!!se.arenaBase;let n=new Set(se.pieces.map(t=>t.model?.assetId).filter(Boolean)),e=new Set(se.pieces.map(t=>t.sceneryId).filter(Boolean));$h.traverse(t=>{let i=t.userData.editorAssetId;i&&(t.visible=Dx(se,i,n,e))}),Dy();for(let t of se.pieces){if(t.model){let l=new pe(ia(t.model,new M(t.w,t.h,t.d)),ta(t.model));l.castShadow=l.receiveShadow=!0;let c=new pe(new Ye(1,1,1),new Xt({colorWrite:!1,depthWrite:!1,side:cn}));c.name="model-selection-volume",l.add(c),l.userData.pickProxy=c,l.userData.mapIndex=yt.children.length,yt.add(l),Zl(l,t);continue}let i=[10,11,12].includes(t.material),s=new li({color:new He(fp[t.material]).multiply(new He(t.color)),side:t.terrain?cn:ri,transparent:!t.solid||i,opacity:t.solid?i?.55:1:.4});if(se.arenaBase&&!t.texture){let l=kn.mapMaterial(t.material,7);s.color.set(t.color),s.map=l.map,s.opacity=t.solid?l.opacity:.4,s.transparent=!t.solid||l.transparent}t.texture&&(s.map=jT.load(t.texture,qt),s.map.colorSpace=bt,s.map.wrapS=s.map.wrapT=In,s.color.set(t.color)),t.terrain&&(t.terrain.projection==="regolith"&&(s.flatShading=!1),Mx(s,t));let r=t.terrain?performance.now():0,o=t.terrain?bx(t):t.primitive==="ramp"?zf(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):t.primitive&&t.primitive!=="box"?h0(t.primitive):t.texture||se.arenaBase?mh(t.w,t.h,t.d).scale(1/t.w,1/t.h,1/t.d):Xl;o!==Xl&&u0(o,t);let a=new pe(o,s);if(a.userData.ownsTexture=!!t.texture,t.terrain){a.userData.generationMs=performance.now()-r;let l=Sx(t);l&&(a.add(l),a.userData.vegetation=l)}yt.add(a),Zl(a,t)}dE(),ei.position.set(se.spawn.x,se.spawn.y+Kh,se.spawn.z),ei.rotation.y=Ee.degToRad(se.spawn.yaw),Gy(),sd()}function st(){return se.pieces[_t]}function mt(n){B("editor-note").textContent=n}function Et(){Js.length>=35&&Js.shift(),Js.push({map:structuredClone(se),selected:_t}),B("undo").disabled=!1}var Rp=0;async function Qs(){let n=++Rp;try{return await Uf(_y,JSON.stringify(se)),n===Rp&&(B("draft-status").textContent="Brouillon sauvegard\xE9 sur cet appareil"),!0}catch{return n===Rp&&(B("draft-status").textContent="Sauvegarde locale indisponible. Exporte le JSON pour garder la carte."),!1}}B("model-asset-edit-link").onclick=async n=>{n.preventDefault();let e=n.currentTarget.href,t=st(),i=_t;if(!(!t?.model||!await Qs()))try{sessionStorage.setItem(Dp,JSON.stringify({index:i,piece:t})),location.href=e}catch{n.preventDefault(),mt("Impossible de pr\xE9parer le retour \xE0 la carte.")}};function QT(){let n=My.get("applyModel");if(!n)return;history.replaceState(null,"",location.pathname);let e;try{e=JSON.parse(sessionStorage.getItem(Dp)),sessionStorage.removeItem(Dp)}catch{return}let t=se.pieces[e?.index],i=xs.models.find(h=>h.id===n&&h.parts.length),s=t?.model;if(!(i&&s&&(i.id===s.id||s.id==="custom-model-game-"+s.assetId&&i.assetId===s.assetId))||JSON.stringify(t)!==JSON.stringify(e.piece)){mt("La pi\xE8ce ou le mod\xE8le a chang\xE9 avant le retour \xE0 la carte.");return}_t=e.index;let o=sa(t.model),a=sa(i),l=(h,d,f,p)=>Ee.clamp(h*f/Math.max(d,.001),.05,p),c={w:l(t.w,o.x,a.x,Ws),h:l(t.h,o.y,a.y,256),d:l(t.d,o.z,a.z,Ws)},u=di({...t,...c,model:{...t.model,id:i.id,parts:i.parts,hitbox:i.hitbox,partCollisions:i.partCollisions===!0}});JSON.stringify(u)!==JSON.stringify(t)&&(Et(),se.pieces[_t]=u),mt("G\xE9om\xE9trie appliqu\xE9e \xE0 \xAB "+t.name+" \xBB. Ctrl Z pour annuler.")}var py=n=>n.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();function Iy(){let n=py(B("piece-search").value.trim()),e=[];se.pieces.forEach((t,i)=>{let s=t.model?t.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":"";py(t.name+" "+s).includes(n)&&e.push(new Option(t.name+s,i,!1,i===_t))}),B("pieces").replaceChildren(...e),B("pieces").value=String(_t),e.length||B("pieces").append(new Option("Aucune pi\xE8ce trouv\xE9e","",!1,!1)),e.length||(B("pieces").options[0].disabled=!0),B("count").textContent=n?e.length+" sur "+se.pieces.length:se.pieces.length+" / "+aa}function rd(){Iy();let n=st();B("piece-inspector").hidden=!n,B("selection-help").hidden=!!n,B("focus-piece").disabled=!n,B("selection-title").textContent=n?n.name+(n.model?n.model.kind==="prop"?" \xB7 Objet saisissable":" \xB7 Structure":""):"Aucune pi\xE8ce s\xE9lectionn\xE9e";let e=n?.model?.kind==="prop";B("model-object-controls").hidden=!e,B("model-structure-note").hidden=!n?.model||n.model.kind!=="structure";let t=B("model-asset-edit-link"),i=n?.model&&Zn.some(l=>l.id===n.model.id);if(t.hidden=!i,i){let l=n.model.assetId,c=l&&n.model.id==="custom-model-game-"+l,u=new URLSearchParams(c?{asset:l}:{model:n.model.id});u.set("from","cards"),t.href="./model-editor.html?"+u}e&&(B("model-grabbable").checked=n.model.properties?.grabbable!==!1,B("model-frozen").checked=n.model.properties?.frozen===!0,B("model-collidable").checked=n.model.properties?.collidable!==!1,B("model-support-held").checked=n.model.properties?.supportWhileHeld===!0);for(let l of xy){let c=B("p-"+l);c.disabled=!n,l==="solid"?c.checked=n?.solid??!1:c.value=n?.[l]??(l==="color"?"#ffffff":"")}for(let l of["rotate","duplicate","texture-file","surface","spawn-here"])B(l).disabled=!n;B("delete").disabled=!n,B("delete").title=n?.model?"Retirer cet exemplaire de la carte (le mod\xE8le restera dans la biblioth\xE8que)":"Supprimer cette pi\xE8ce de la carte",B("delete").firstChild.textContent=n?.model?"Retirer ":"Supprimer ",B("texture-clear").disabled=!n?.texture,B("texture-paint").disabled=!n||!!n.model,B("flight-controls").hidden=!n||n.solid||!!n.terrain||n.model?.kind==="prop";for(let[l,c]of Object.entries(Op))B("flight-"+l).value=n?.flight?.[l]??c;let s=Hl[_t],r=B("selection-mesh-stats");r.hidden=!s,s&&(r.textContent=kp(s));let o=n?.terrain;B("terrain-grassTexture-paint").disabled=!o;for(let l of yy){let c=B("p-"+l);c.disabled=!n||!!n?.model,c.value=n?.[l]??(l==="uvScale"?1:0)}if(B("uv-reset").disabled=!n||!!n?.model,B("terrain-controls").hidden=B("terrain-props").hidden=B("terrain-texture-density-fields").hidden=!o,B("texture-scale-label").hidden=!!o,o){B("terrain-triangulation").value=o.triangulation??"regular",B("terrain-projection").value=o.projection??"flat";for(let m of zy)B("terrain-"+m).value=o[m]??0;let l=o.reliefArea??By(n);B("terrain-relief-local").checked=!!o.reliefArea,B("terrain-relief-fields").hidden=!o.reliefArea;for(let m of["x","z","radius","blend"])B("terrain-relief-"+m).value=l[m];let c=yt.children[_t]?.userData.generationMs;B("terrain-generation-stats").textContent=Number.isFinite(c)?"Calcul du relief \xB7 "+c.toFixed(1)+" ms \xB7 "+((o.detail+1)**2).toLocaleString("fr-FR")+" sommets. Collision par champ de hauteur.":"";let u=n.w*n.d,h=2*o.detail**2,d=yt.children[_t]?.geometry.index.count/3||h,f=new Intl.NumberFormat("fr-FR",{maximumSignificantDigits:6});B("terrain-cell-size").textContent=f.format(n.w/o.detail)+" \xD7 "+f.format(n.d/o.detail)+" m de pas moyen \xB7 "+f.format(d)+" triangles au total \xB7 "+f.format(h/u)+" triangles/m\xB2 au sol",B("terrain-texture-effective").textContent=f.format(o.textureDensity/(n.uvScale??1)**2)+" motifs/m\xB2 \xE0 l\u2019\xE9cran avec l\u2019\xE9chelle enregistr\xE9e",uE(n);let p=B("terrain-neighbor"),x=p.value,g=se.pieces.flatMap((m,_)=>hp(n,m)?[new Option(m.name,String(_))]:[]);p.replaceChildren(...g.length?g:[new Option("Aucun bord \xE0 moins de 25 cm","")]),g.some(m=>m.value===x)&&(p.value=x),p.disabled=B("terrain-stitch").disabled=!g.length,B("p-pitch").disabled=B("p-roll").disabled=!0}B("rotate").disabled=!n,B("rotate").textContent=o?"Tourner +90\xB0":"Tourner +45\xB0",B("p-yaw").step=o?"90":"1",B("surface").value="",B("undo").disabled=Js.length===0,B("active-selection").textContent=n?n.name:"Aucune s\xE9lection";let a=document.querySelector("#scene-sidebar").dataset.tab;(["terrain","props"].includes(a)&&!o||["behavior","material"].includes(a)&&!n)&&window.setInspectorTab("object"),document.querySelector('.inspector-tab[data-tab="behavior"]').disabled=!n;for(let l of["terrain","props"])document.querySelector('.inspector-tab[data-tab="'+l+'"]').disabled=!o;Gp.refresh(),ed.refresh()}function zp(){let n=!!(se.arenaBase||se.environment);Hp.visible=wy.visible=!n;for(let t of kn.lighting)t.visible=n;let{sunDisk:e}=kn;e.visible=n&&(se.environment?.sunPower??3)>0,Kt.background=n?es.background:Sy,Kt.backgroundRotation.copy(es.backgroundRotation),Kt.fog=n&&B("environment-fog-preview").checked?es.fog:null,Kt.environment=n?es.environment:null,Kt.environmentIntensity=es.environmentIntensity,qt()}function Dy(){let n=se.environment??null,e=n??Ni(0);for(let t of qp){let i=e[t.dataset.env];t.dataset.env==="skyTint"&&(t.disabled=e.sky==="color"),t.dataset.env==="skyColor"&&(t.disabled=e.sky!=="color"),t.type==="checkbox"?t.checked=i:t.value=i}ca.textContent=n?n.skyImage?"Panorama int\xE9gr\xE9 au JSON de la carte.":"Ambiance enregistr\xE9e dans la carte.":"La carte utilise les r\xE9glages d\u2019ambiance du jeu.",kn.setEnvironment(n,zp),zp()}function Qh(n){let e=ph(n);Et(),e?se.environment=e:delete se.environment,Dy(),Qs()}var eE=qp.find(n=>n.dataset.env==="preset");eE.replaceChildren(...s0.map((n,e)=>new Option(n,e)));for(let n of qp)n.onchange=()=>{let e=n.dataset.env;if(e==="preset"){Qh(Ni(Number(n.value)));return}let t=se.environment??Ni(0);if(e==="sky"&&n.value==="image"&&!t.skyImage){n.value=t.sky,ca.textContent="Importe d\u2019abord une image panoramique 360\xB0.";return}let i=n.type==="checkbox"?n.checked:n.type==="number"?n.valueAsNumber:n.value;Qh({...t,[e]:i})};B("environment-reset").onclick=()=>Qh(null);B("environment-aim-sun").onclick=()=>{if(!(se.environment??Ni(0)).sunPower){ca.textContent="Augmente l\u2019intensit\xE9 du soleil pour le voir.";return}let e=kn.sunDirection();Ut.target.copy(Tt.position).addScaledVector(e,8),Ut.update(),qt()};B("environment-fog-preview").onchange=zp;B("environment-bloom-preview").onchange=qt;B("environment-image").onchange=n=>{let e=n.currentTarget,t=e.files[0],i=se;if(e.value="",!t)return;if(t.size>fh){ca.textContent="Image trop lourde. Choisis un panorama WebP, JPG ou PNG de 5 Mo maximum.";return}let s=new FileReader;s.onload=()=>{if(se!==i)return;let r=new Image;r.onload=()=>{if(se===i){if(r.width!==r.height*2){ca.textContent="Choisis une image 360\xB0 au format 2:1, par exemple 2048 \xD7 1024.";return}Qh({...se.environment??Ni(0),sky:"image",skyImage:s.result})}},r.onerror=()=>{se===i&&(ca.textContent="L\u2019image ne peut pas \xEAtre lue.")},r.src=s.result},s.readAsDataURL(t)};function Rt(){B("map-name").value=se.name,B("map-world-size").value=se.worldSize??240,B("map-boundary").value=se.boundary?.diameter??0,B("map-ceiling").value=se.boundary?.ceiling??128,Tt.far=Math.max(640,se.worldSize*2),Tt.updateProjectionMatrix(),Ut.maxDistance=Math.max(580,se.worldSize*1.6);for(let n of["x","y","z","yaw"])B("spawn-"+n).value=se.spawn[n];KT(),rd(),pi(),qt(),Qs()}function pa(n){_t===n&&!pn.size||(pn.clear(),_t=n,Hi("s\xE9lection",{name:st()?.name,terrain:!!st()?.terrain}),Qn=null,Vr.clear(),rd(),sd(),pi(),qt())}function Jp(n){if(se.pieces.length>=aa)return mt("Limite de pi\xE8ces atteinte.");Et(),se.pieces.push(n),pn.clear(),_t=se.pieces.length-1,Rt(),mt(n.name+" ajout\xE9 \xE0 la map.")}function $p(){if(!st())return;let n=pn.size||1,e=st().name;Et(),pn.size?se.pieces=se.pieces.filter((t,i)=>!pn.has(i)):se.pieces.splice(_t,1),pn.clear(),_t=Math.min(_t,se.pieces.length-1),Rt(),mt(n>1?n+" pi\xE8ces retir\xE9es.":e+" retir\xE9 de la map.")}function Kp(){let n=st();if(!n)return;let e=Ee.clamp(n.x+n.w+jl(),-120,120);Jp({...structuredClone(n),name:(n.name+" bis").slice(0,36),x:e})}function tE(){let n=st();if(!n)return;Et();let e=n.yaw;n.yaw=(e+(n.terrain?90:45))%360,Hi("rotation via le panneau",{name:n.name,avant:e,apr\u00E8s:n.yaw}),Rt()}function Ly(){let n=Js.pop();n&&(se=n.map,pn.clear(),_t=n.selected,ys(null),Rt(),mt("Derni\xE8re modification annul\xE9e."))}function Qp(){let n=Vp[tt]??"";if(tt!=="model"||!kr()){B("tool-help").textContent=n;return}let e=by(),t=i=>new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(i);B("tool-help").textContent="Dimensions initiales : "+[e.w,e.h,e.d].map(t).join(" \xD7 ")+" m (largeur \xD7 hauteur \xD7 profondeur). "+n}function Wi(n){tt!==n&&Hi("changement d\u2019outil",{ancien:tt,nouveau:n,name:st()?.name}),tt=n,Ut.mouseButtons.LEFT=tt==="view"?Si.ROTATE:null,Np(),qt();for(let e of Jh)e.setAttribute("aria-pressed",String(e.dataset.tool===tt));for(let e of[rn,ut])e.dataset.tool=tt,e.removeAttribute("data-hit");Qp(),Np(),qt(),ys(null)}function Wr(){let n=new dn().setFromObject(yt);n.expandByPoint(ei.position);let e=n.getCenter(new M),t=n.getSize(new M);Ot={cx:e.x,cz:e.z,width:Math.max(t.x+5,Math.min(se.worldSize??240,500)),height:Math.max(t.z+5,Math.min(se.worldSize??240,500))},jp();let i=Math.max(1,Math.ceil(Math.max(t.x,t.z)/40));fa.scale.setScalar(i),fa.position.set(Math.round(e.x/i)*i,-.035,Math.round(e.z/i)*i);let s=Tt.position.clone().sub(Ut.target).normalize(),r=new M().crossVectors(td,s).normalize(),o=new M().crossVectors(s,r),a=Math.tan(Ee.degToRad(Tt.fov/2))*.87,l=a*Tt.aspect,c=6;for(let u of[n.min.x,n.max.x])for(let h of[n.min.y,n.max.y])for(let d of[n.min.z,n.max.z]){let f=new M(u,h,d).sub(e),p=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,p+f.dot(s))}c=Math.min(c,Ut.maxDistance),Ut.target.copy(e),Tt.position.copy(e).addScaledVector(s,c),Ut.update(),Tt.updateMatrixWorld(),pi(),qt()}function em(n,e){Et(),se=n,Qn=null,Vr.clear(),pn.clear(),_t=-1,B("piece-search").value="",Wi("move"),Rt(),Wr(),mt(e)}function jl(){return Number(B("snap").value)}function Yh(n){let e=jl(),t=(se.worldSize??240)/2;return Ee.clamp(Math.round(n/e)*e,-t,t)}function tm(n,e){if(n===ut){let t=Fp(e);Ks.set(new M(t.x,80,t.z),new M(0,-1,0))}else{let t=rn.getBoundingClientRect();Tt.updateMatrixWorld(),Ks.setFromCamera({x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2},Tt)}}function Bp(n){return uy.constant=-n,Ks.ray.intersectPlane(uy,new M)}function nE(n){let e=n;for(;e&&e.parent!==yt;)e=e.parent;return e?.parent===yt?e:null}function ma(n,e){tm(n,e);let t=js.visible&&se.arenaBase?[...yt.children,js]:yt.children,i=Ks.intersectObjects(t,!0);for(let s of i){if(s.object===js)return s;let r=nE(s.object);if(r)return{...s,object:r}}return null}function Uy(n,e,t,i=null){let s=i?[i]:yt.children,r=0;for(let a of s){a.geometry.boundingBox||a.geometry.computeBoundingBox();let l=new dn().copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld).max.y;r=Math.max(r,l)}js.visible&&se.arenaBase&&(r=Math.max(r,80)),Ks.set(new M(n,r+1,e),new M(0,-1,0));let o=i?Ks.intersectObject(i,!1)[0]:Ks.intersectObjects(js.visible&&se.arenaBase?[...yt.children,js]:yt.children,!1).find(a=>a.object===js||se.pieces[yt.children.indexOf(a.object)]?.solid);return!o||Math.abs(o.point.y+.08)>hi?null:{x:n,y:o.point.y+.08,z:e,yaw:t}}function Fy(n,e){Wl=null,qh=!1;let t=ma(n,e);if(tt==="spawn"){if(!t)return null;let u=Yh(t.point.x),h=Yh(t.point.z);return Uy(u,h,se.spawn.yaw)}if(tt==="terrain"){let u=t?.point??Bp(0);return u?{...Ap.terrain,terrain:gs(Ap.terrain.terrain),x:Yh(u.x),y:u.y,z:Yh(u.z)}:null}if(tt==="sculpt"||tt==="model"&&!kr())return null;let i=t?.point??Bp(0);if(!i)return null;let s=t?t.face.normal.clone().applyNormalMatrix($T.getNormalMatrix(t.object.matrixWorld)):td,r=t&&iE(t),o=Ty();r&&r.distance<=o*2&&(Wl=r.point,qh=B("magnet").checked&&!e.altKey&&B("magnet-mode").value==="edge"&&r.point.distanceTo(i)<=o);let a=qh||e.altKey?1e-6:jl(),l=tt==="model"?by():tt==="preset"?GT():Ap[tt],c=Rx(qh?Wl:i,s,l,a);return c&&Math.max(Math.abs(c.x),Math.abs(c.z))<=se.worldSize/2?c:null}function iE(n){let e=n.object,t=se.pieces[yt.children.indexOf(e)];if(!t||t.terrain)return null;let i=e.worldToLocal(n.point.clone()),s=["x","y","z"],r=s.filter(a=>Math.abs(n.face.normal[a])<.5);if(r.length!==2)return null;let o=null;for(let a of r)for(let l of[-.5,.5]){let c=i.clone();c[a]=l;let u=e.localToWorld(c.clone()).distanceTo(n.point);c[r.find(h=>h!==a)]=0,(!o||u<o.distance)&&(o={distance:u,point:e.localToWorld(c)})}return o}function ys(n){!n&&!fi||(fi=n,ua.visible=!!(fi&&Wl),ua.visible&&ua.position.copy(Wl),ql.visible=!!(fi&&tt==="spawn"),Gr.visible=!!(fi&&tt!=="spawn"),ql.visible&&ql.position.set(fi.x,fi.y+Kh,fi.z),Gr.visible&&(Gr.geometry=fi.primitive==="ramp"?ZT:Xl,Zl(Gr,fi)),pi(),qt())}function sE(n,e){let t=Fy(n,e);if(!t){mt(tt==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}if(tt==="spawn")Et(),se.spawn=t,Wi("move"),Rt(),mt("Point de d\xE9part d\xE9plac\xE9.");else{let i=tt==="model";ys(null),Jp(t),i&&(Wi("move"),mt(t.name+" plac\xE9 \xB7 s\xE9lectionn\xE9. Tu peux maintenant le d\xE9placer ou le modifier."))}}function rE(n,e){if(tt==="view"||e.button!==0||!e.isPrimary||Pt||et.dragging)return;if(tt==="spawn"||Yp.has(tt)){if(n===rn&&et.enabled){let o=rn.getBoundingClientRect();if(et.pointerHover({x:(e.clientX-o.left)/o.width*2-1,y:1-(e.clientY-o.top)/o.height*2,button:0}),et.axis){Ut.enabled=!1;return}}if(tt!=="spawn"){e.stopImmediatePropagation();let o=ma(n,e);pa(o?yt.children.indexOf(o.object):-1);return}}e.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(e.pointerId);let t={canvas:n,id:e.pointerId,clientX:e.clientX,clientY:e.clientY,tool:tt};if(Pt=t,Qn=null,tt==="sculpt"){ky(n,e);return}if(tt!=="move")return;let i=ma(n,e),s=i?yt.children.indexOf(i.object):-1;pn.has(s)?(_t=s,rd(),sd()):pa(s);let r=st();!i||!r||(t.height=i.point.y,t.dx=i.point.x-r.x,t.dz=i.point.z-r.z)}function oE(n,e){if(tt==="view"||Yp.has(tt)||et.dragging)return;if(!Pt){tt==="move"?n.toggleAttribute("data-hit",!!ma(n,e)):ys(Fy(n,e));return}if(tt==="sculpt"&&Pt.id===e.pointerId&&Pt.canvas===n){Math.hypot(e.clientX-Pt.clientX,e.clientY-Pt.clientY)>=7&&(ky(n,e),Pt.clientX=e.clientX,Pt.clientY=e.clientY);return}if(Pt.id!==e.pointerId||Pt.canvas!==n||Pt.height===void 0||!st()||Math.hypot(e.clientX-Pt.clientX,e.clientY-Pt.clientY)<4&&!Pt.recorded)return;tm(n,e);let i=Bp(Pt.height);if(!i)return;let s=st(),r=Ey(s,{x:i.x-Pt.dx,y:s.y,z:i.z-Pt.dz},["x","z"],e.altKey),o=(se.worldSize??240)/2,a=Ee.clamp(r.x,-o,o),l=Ee.clamp(r.z,-o,o);if(!(a===s.x&&l===s.z)){if(Pt.recorded||(Et(),Pt.recorded=!0,n.toggleAttribute("data-dragging",!0)),pn.size>1){let c=-1/0,u=1/0,h=-1/0,d=1/0;for(let x of pn){let g=se.pieces[x];c=Math.max(c,-o-g.x),u=Math.min(u,o-g.x),h=Math.max(h,-o-g.z),d=Math.min(d,o-g.z)}let f=c<=u?Ee.clamp(a-s.x,c,u):0,p=h<=d?Ee.clamp(l-s.z,h,d):0;for(let x of pn){let g=se.pieces[x];g.x+=f,g.z+=p,Zl(yt.children[x],g)}for(let x of Up)x.update()}else s.x=a,s.z=l;Zl(yt.children[_t],s),Gi?.update(),B("p-x").value=s.x,B("p-z").value=s.z,pi(),qt()}}function Pp(n,e,t){if(!Pt||Pt.canvas!==n||Pt.id!==e.pointerId)return;let i=Pt;if(Pt=null,n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),n.removeAttribute("data-dragging"),i.tool==="sculpt"){i.recorded&&(Rt(),mt("Relief modifi\xE9."));return}i.recorded&&(Qs(),mt(pn.size>1?pn.size+" pi\xE8ces d\xE9plac\xE9es.":st().name+" d\xE9plac\xE9.")),t&&tt===i.tool&&tt!=="move"&&Math.hypot(e.clientX-i.clientX,e.clientY-i.clientY)<6&&sE(n,e)}var Ti=null,od=!1,Zh=null;document.addEventListener("keydown",n=>{n.code==="Space"&&!n.target.closest?.("input,select,textarea,button")&&(od=!0)});document.addEventListener("keyup",n=>{n.code==="Space"&&(od=!1)});window.addEventListener("blur",()=>{Ti=null,od=!1});ut.addEventListener("pointerdown",n=>{n.button!==1&&!(od&&n.button===0)||(n.preventDefault(),n.stopImmediatePropagation(),Ti={id:n.pointerId,x:n.clientX,y:n.clientY},ut.setPointerCapture(n.pointerId),ut.style.cursor="grabbing")},{capture:!0});ut.addEventListener("pointermove",n=>{!Ti||Ti.id!==n.pointerId||(n.stopImmediatePropagation(),Ot.cx-=(n.clientX-Ti.x)/Ot.scale,Ot.cz-=(n.clientY-Ti.y)/Ot.scale,Ti.x=n.clientX,Ti.y=n.clientY,pi())},{capture:!0});function Ny(n){!Ti||Ti.id!==n.pointerId||(Ti=null,ut.style.cursor="",ut.hasPointerCapture(n.pointerId)&&ut.releasePointerCapture(n.pointerId),n.stopImmediatePropagation())}ut.addEventListener("pointerup",Ny,{capture:!0});ut.addEventListener("pointercancel",Ny,{capture:!0});function nm(n,e){let t=ut.getBoundingClientRect(),i=e?.clientX??t.left+t.width/2,s=e?.clientY??t.top+t.height/2,r=Fp({clientX:i,clientY:s}),o=Ee.clamp(Ot.width/n,.75,4096),a=o/Ot.width;Ot.width=o,Ot.height*=a,jp();let l=Fp({clientX:i,clientY:s});Ot.cx+=r.x-l.x,Ot.cz+=r.z-l.z,pi()}ut.addEventListener("wheel",n=>{n.preventDefault(),nm(Math.exp(-Math.sign(n.deltaY)*.18),n)},{passive:!1});B("plan-zoom-in").onclick=()=>nm(1.25);B("plan-zoom-out").onclick=()=>nm(.8);B("plan-fit").onclick=Wr;var ts=B("context-actions"),Jl=!1;function ga(){ts.hidden=!0}for(let n of[rn,ut])n.addEventListener("pointerdown",e=>{e.button===2?Zh={canvas:n,x:e.clientX,y:e.clientY}:ga()}),n.addEventListener("contextmenu",e=>{if(e.preventDefault(),Jl){Jl=!1;return}if(Zh?.canvas!==n||Math.hypot(e.clientX-Zh.x,e.clientY-Zh.y)>6)return;let t=ma(n,e),i=t?yt.children.indexOf(t.object):-1;if(i<0){ga();return}pa(i),B("context-title").textContent=st()?.name??"Pi\xE8ce",ts.querySelector('[data-context-action="delete"]').textContent=st()?.model?"Retirer de la carte":"Supprimer",ts.hidden=!1;let s=195,r=285;ts.style.left=Math.max(4,Math.min(e.clientX,innerWidth-s-6))+"px",ts.style.top=Math.max(4,Math.min(e.clientY,innerHeight-r-6))+"px"});document.addEventListener("pointerdown",n=>{ts.hidden||ts.contains(n.target)||(Jl=n.button===2,ga())},{capture:!0});document.addEventListener("contextmenu",n=>{Jl&&n.target!==rn&&n.target!==ut&&(Jl=!1,n.preventDefault()),!ts.hidden&&!ts.contains(n.target)&&n.target!==rn&&n.target!==ut&&ga()},{capture:!0});document.addEventListener("keydown",n=>{n.key==="Escape"&&ga()});for(let n of ts.querySelectorAll("[data-context-action]"))n.onclick=()=>{let e=n.dataset.contextAction;ga(),e==="duplicate"?Kp():e==="delete"?$p():e==="focus"?B("focus-piece").click():Wi(e==="select"?"move":e)};var da=document.createElement("div");Object.assign(da.style,{position:"fixed",pointerEvents:"none",zIndex:100,border:"1px solid #a6efff",background:"#60bfe633"});da.hidden=!0;document.body.append(da);function my(n,e){return{left:Math.min(n.x,e.x),top:Math.min(n.y,e.y),right:Math.max(n.x,e.x),bottom:Math.max(n.y,e.y)}}function aE(n,e,t){let i=n.geometry;i.boundingBox||i.computeBoundingBox();let{min:s,max:r}=i.boundingBox,o=[];for(let a of[s.x,r.x])for(let l of[s.y,r.y])for(let c of[s.z,r.z]){let u=new M(a,l,c).applyMatrix4(n.matrixWorld);if(e===ut){let[h,d]=Yl(u.x,u.z);o.push([t.left+h*t.width/ut.width,t.top+d*t.height/ut.height])}else u.project(Tt),u.z>-1&&u.z<=1&&Number.isFinite(u.x)&&Number.isFinite(u.y)&&o.push([t.left+(u.x+1)*t.width/2,t.top+(1-u.y)*t.height/2])}return o}for(let n of[rn,ut]){n.addEventListener("pointerdown",t=>{!t.shiftKey||t.button!==0||!t.isPrimary||Pt||et.dragging||(t.preventDefault(),t.stopImmediatePropagation(),n.focus({preventScroll:!0}),n.setPointerCapture(t.pointerId),Ys={canvas:n,id:t.pointerId,x:t.clientX,y:t.clientY})},{capture:!0}),n.addEventListener("pointermove",t=>{if(Ys?.id!==t.pointerId||Ys.canvas!==n)return;t.stopImmediatePropagation();let i=my(Ys,{x:t.clientX,y:t.clientY});Object.assign(da.style,{left:i.left+"px",top:i.top+"px",width:i.right-i.left+"px",height:i.bottom-i.top+"px"}),da.hidden=!1},{capture:!0});let e=(t,i)=>{if(Ys?.id!==t.pointerId||Ys.canvas!==n)return;t.stopImmediatePropagation();let s=my(Ys,{x:t.clientX,y:t.clientY});if(Ys=null,da.hidden=!0,n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),!i||s.right-s.left<4||s.bottom-s.top<4)return;let r=n.getBoundingClientRect(),o=[];Tt.updateMatrixWorld(),yt.children.forEach((a,l)=>{a.visible&&Vx(aE(a,n,r),s)&&o.push(l)}),pn.clear(),o.forEach(a=>pn.add(a)),_t=o.at(-1)??-1,rd(),sd(),pi(),qt(),mt(o.length+" pi\xE8ce"+(o.length===1?" s\xE9lectionn\xE9e.":"s s\xE9lectionn\xE9es."))};n.addEventListener("pointerup",t=>e(t,!0),{capture:!0}),n.addEventListener("pointercancel",t=>e(t,!1),{capture:!0}),n.addEventListener("lostpointercapture",t=>e(t,!1),{capture:!0})}for(let n of[rn,ut])n.addEventListener("pointerdown",e=>rE(n,e),{capture:!0}),n.addEventListener("pointermove",e=>oE(n,e)),n.addEventListener("pointerup",e=>Pp(n,e,!0)),n.addEventListener("pointercancel",e=>Pp(n,e,!1)),n.addEventListener("lostpointercapture",e=>{n.hasPointerCapture(e.pointerId)||Pp(n,e,!1)}),n.addEventListener("pointerleave",()=>{Pt||ys(null)});B("p-material").append(...Ex.map((n,e)=>new Option(n,e)));for(let n of yy)B("p-"+n).addEventListener("change",e=>{let t=st();!t||t.model||(Et(),t[n]=Number(e.target.value),se=vn(se),Rt())});B("uv-reset").onclick=()=>{let n=st();!n||n.model||(Et(),Object.assign(n,{uvScale:1,uvRotation:0,uvOffsetX:0,uvOffsetY:0}),se=vn(se),Rt())};var lE={grabbable:"model-grabbable",frozen:"model-frozen",collidable:"model-collidable",supportWhileHeld:"model-support-held"};for(let[n,e]of Object.entries(lE))B(e).addEventListener("change",t=>{let i=st();if(!i?.model||i.model.kind!=="prop")return;Et(),i.model.properties[n]=t.target.checked,n==="collidable"&&(i.solid=t.target.checked),se=vn(se),Rt();let s={grabbable:t.target.checked?"Objet saisissable par le joueur.":"Prise en main d\xE9sactiv\xE9e.",frozen:t.target.checked?"Objet fig\xE9 au d\xE9part.":"Objet libre au d\xE9part.",collidable:t.target.checked?"Collision de l\u2019objet activ\xE9e.":"Collision de l\u2019objet d\xE9sactiv\xE9e.",supportWhileHeld:t.target.checked?"L\u2019objet peut servir d\u2019appui pendant la prise.":"Appui pendant la prise d\xE9sactiv\xE9."};mt(s[n])});for(let n of xy)B("p-"+n).addEventListener("change",e=>{let t=st();if(!t)return;Et();let i=e.target;n==="solid"?(t[n]=i.checked,t.model&&(t.model.properties.collidable=i.checked)):t[n]=["name","color"].includes(n)?i.value:Number(i.value),se=vn(se),Rt()});var Op={x:0,z:0,seconds:90,phase:0,rise:0};for(let n of Object.keys(Op))B("flight-"+n).onchange=()=>{let e=st();if(!e||e.solid)return;Et();let t=Object.fromEntries(Object.entries(Op).map(([i,s])=>{let r=B("flight-"+i);return[i,Ee.clamp(Number.isFinite(r.valueAsNumber)?r.valueAsNumber:s,Number(r.min),Number(r.max))]}));t.x||t.z?e.flight=t:delete e.flight,Rt(),Qs()};B("map-boundary").onchange=B("map-ceiling").onchange=()=>{Et();let n=B("map-boundary").valueAsNumber;n>0?se.boundary={diameter:Ee.clamp(n,12,2048),ceiling:Ee.clamp(B("map-ceiling").valueAsNumber||128,3,256)}:delete se.boundary,Rt(),Qs()};B("map-world-size").onchange=n=>{Et(),se.worldSize=Ee.clamp(Number(n.target.value)||240,24,2048),se=vn(se),Rt(),Wr(),mt("Zone de construction : "+se.worldSize+" \xD7 "+se.worldSize+" m.")};B("map-name").onchange=n=>{Et(),se.name=n.target.value,se=vn(se),Rt()};B("piece-search").addEventListener("input",Iy);B("pieces").onchange=n=>{n.target.value!==""&&pa(Number(n.target.value))};B("focus-piece").onclick=()=>{let n=yt.children[_t];if(!n)return;let e=new dn().setFromObject(n).getBoundingSphere(new yi),t=Tt.position.clone().sub(Ut.target).normalize(),i=Math.atan(Math.tan(Ee.degToRad(Tt.fov/2))*Math.min(Tt.aspect,1)),s=Math.max(1.5,e.radius/Math.sin(i)*1.15);Ut.target.copy(e.center),Tt.position.copy(e.center).addScaledVector(t,s),Ut.update(),qt()};for(let n of["x","y","z","yaw"])B("spawn-"+n).onchange=e=>{Et(),se.spawn[n]=Number(e.target.value),se=vn(se),Rt()};B("spawn-here").onclick=()=>{let n=st();if(!n)return;let e=n.solid&&Uy(n.x,n.z,n.yaw,yt.children[_t]);if(!e)return mt("Choisis une pi\xE8ce solide pour placer le d\xE9part.");Et(),se.spawn=e,Rt(),mt("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let n of Jh)n.onclick=()=>Wi(n.dataset.tool);B("duplicate").onclick=Kp;B("add-mirror").onclick=()=>Jp(pp());B("delete").onclick=$p;B("rotate").onclick=tE;B("undo").onclick=Ly;B("zoom-fit").onclick=Wr;B("snap").onchange=()=>ys(null);B("new-example").onclick=()=>em(Wp(),"Ar\xE8ne de d\xE9part ouverte.");B("blank-map").onclick=()=>{let n=Ee.clamp(Number(B("map-world-size").value)||240,24,2048);em({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",worldSize:n,spawn:{x:0,y:.025,z:3,yaw:0},pieces:[di({name:"Sol",y:-.25,w:Math.min(n,Ws),d:Math.min(n,Ws)})]},"Nouvelle carte : "+n+" \xD7 "+n+" m. Tu peux s\xE9lectionner et modeler le sol.")};B("surface").onchange=n=>{let e=Ul[n.target.value],t=st();!e||!t||(Et(),Object.assign(t,e),Rt())};B("texture-file").onchange=async n=>{let e=n.target.files[0],t=st();if(!(!e||!t))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Choisis un PNG, JPG ou WebP.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(i.width,i.height));s.width=Math.max(1,Math.round(i.width*r)),s.height=Math.max(1,Math.round(i.height*r)),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!se.pieces.includes(t))return mt("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");Et(),t.texture=o,Rt(),mt("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(i){mt(i.message)}finally{n.target.value=""}};B("texture-paint").onclick=()=>{let n=st();if(!n||n.model)return mt("Peins les pi\xE8ces d\u2019un mod\xE8le depuis GORILLA / FOUNDRY.");gp({name:n.name||"\xC9l\xE9ment du d\xE9cor",initial:n.texture,tint:n.color&&n.color!=="#ffffff"?n.color:"#75838a",maxDataBytes:85e4,onApply:async e=>{if(!se.pieces.includes(n))throw Error("La pi\xE8ce s\xE9lectionn\xE9e a chang\xE9 ou \xE9t\xE9 supprim\xE9e.");Et(),n.texture=e,se=vn(se),Rt(),mt("Texture peinte appliqu\xE9e. Export JSON pour la conserver dans la carte.")}})};B("terrain-grassTexture-paint").onclick=()=>{let n=st();n?.terrain&&gp({name:"Herbe / "+n.name,initial:n.terrain.grassTexture,tint:"#63814e",maxDataBytes:45e4,onApply:async e=>{if(!se.pieces.includes(n))throw Error("Terrain supprim\xE9 avant application.");Et(),n.terrain.grassTexture=e,se=vn(se),Rt(),mt("Texture d\u2019herbe peinte et appliqu\xE9e.")}})};B("texture-clear").onclick=()=>{st()?.texture&&(Et(),st().texture=null,Rt())};B("import-map").onchange=async n=>{let e=n.target.files[0];if(e)try{em(vn(await e.text()),"Map charg\xE9e.")}catch(t){mt(t.message)}finally{n.target.value=""}};B("export-map").onclick=()=>{try{Ix(se),mt("Map JSON export\xE9e.")}catch(n){mt(n.message)}};B("test-map").onclick=async()=>{try{await Uf(Px,JSON.stringify(vn(se))),location.href="./?custom=1"}catch{mt("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var zy=["detail","thickness","seed","amplitude","frequency","octaves","roughness","ridge","edgeFade","textureDensity"],cE=new Intl.NumberFormat("fr-FR");function uE(n){let e=n.terrain.rules,t=yt.children[_t]?.userData.vegetation?.userData.distribution??[];B("terrain-add-rule").disabled=e.length>=Uh,B("terrain-grass-texture").hidden=!e.some(i=>i.kind==="grass"),B("terrain-rules").replaceChildren(...e.map((i,s)=>{let r=document.createElement("tr"),o=(C,b,S=!1)=>{let A=document.createElement("td");S&&(A.dataset.wide="");let I=document.createElement("span");return I.textContent=C,A.append(I,b),r.append(A),b.matches("input,select")&&b.setAttribute("aria-label",C+" \xB7 r\xE8gle "+(s+1)),A},a=C=>{Et(),e[s]=Ll({...i,...C}),Hi("r\xE8gle de props modifi\xE9e",{name:n.name,r\u00E8gle:s+1,champs:Object.keys(C)}),Rt()},l=(C,b,S)=>{let A=document.createElement("select");return A.replaceChildren(...C.map(([I,z])=>new Option(I,z))),A.value=b,A.onchange=()=>S(A.value),A},c=(C,b,S,A)=>{let I=document.createElement("input");return I.type="number",I.value=i[C],I.min=b,I.max=S,I.step=A,I.onchange=()=>{Number.isFinite(I.valueAsNumber)?a({[C]:I.valueAsNumber}):I.value=i[C]},I},u=Zn.some(C=>C.id===i.model?.id)||!i.model?Zn:[...Zn,i.model];o("Genre",l([["Herbe","grass"],["Buisson","shrub"],...u.length?[["Mod\xE8le","model"]]:[]],i.kind,C=>{let b=C==="grass"?"#527a34":C==="shrub"?"#36583c":"#ffffff";a({kind:C,model:C==="model"?u[0]:null,colors:i.colors.map(()=>b),fit:"keep",size:1})})),i.kind==="model"&&o("Mod\xE8le",l(u.map(C=>[C.name,C.id]),i.model.id,C=>a({model:u.find(b=>b.id===C)})));let h=document.createElement("div");h.className="terrain-palette",h.style.setProperty("--swatches",Math.min(i.colors.length,5));let d=l(Array.from({length:op-1},(C,b)=>[String(b+2),String(b+2)]),String(i.colors.length),C=>{let b=i.colors.slice(0,Number(C));for(;b.length<Number(C);)b.push(b.at(-1));a({colors:b})});d.setAttribute("aria-label","Nombre de teintes \xB7 r\xE8gle "+(s+1)),h.append(d);let f=document.createElement("div");f.className="terrain-swatches";for(let[C,b]of i.colors.entries()){let S=document.createElement("input");S.type="color",S.value=b,S.setAttribute("aria-label","Teinte "+(C+1)+" \xB7 r\xE8gle "+(s+1)),S.onchange=()=>a({colors:i.colors.map((A,I)=>I===C?S.value:A)}),f.append(S)}h.append(f),o("Palette de teintes",h,!0),o("Instances / m\xB2",c("density",0,Il,"any")),o("Graine",c("seed",0,2147483647,1)),i.model&&o("Mode de taille",l([["Conserver les proportions","keep"],["R\xE9duire pour tenir dans un cube","fit"],["D\xE9former en cube","stretch"]],i.fit,C=>a({fit:C})),!0),o(i.fit==="keep"?"Taille \xB7 facteur \xD7":"Taille \xB7 cube (m)",c("size",.05,rp,.05)),o("Variation de taille",c("variation",0,ap,.05));let p=document.createElement("input");p.type="checkbox",p.checked=i.collidable,p.onchange=()=>a({collidable:p.checked}),o("Collision \xB7 bo\xEEte",p);let x=document.createElement("details"),g=document.createElement("summary");g.textContent="Zone, pente, altitude et rotation";let m=document.createElement("div");m.className="terrain-filter-fields";let _={minX:0,maxX:100,minZ:0,maxZ:100,minHeight:-300,maxHeight:300,maxSlope:90,yaw:0,yawVariation:360};x.open=!!i.scatter,x.append(g,m);for(let[C,b,S,A]of[["minX","X min (%)",0,100],["maxX","X max (%)",0,100],["minZ","Z min (%)",0,100],["maxZ","Z max (%)",0,100],["minHeight","Altitude min (m)",-300,300],["maxHeight","Altitude max (m)",-300,300],["maxSlope","Pente max (\xB0)",0,90],["yaw","Orientation (\xB0)",-360,360],["yawVariation","Variation d\u2019angle (\xB0)",0,360]]){let I=document.createElement("label"),z=document.createElement("input");I.textContent=b,z.type="number",z.min=S,z.max=A,z.step="any",z.value=i.scatter?.[C]??_[C],z.onchange=()=>{Number.isFinite(z.valueAsNumber)&&a({scatter:{...i.scatter,[C]:z.valueAsNumber}})},I.append(z),m.append(I)}if(i.scatter){let C=document.createElement("button");C.type="button",C.textContent="R\xE9initialiser la zone",C.onclick=()=>a({scatter:null}),x.append(C)}let v=document.createElement("td");v.dataset.wide="",v.append(x),r.append(v);let y=document.createElement("output"),w=t[s]??{count:0,requested:0,area:0};y.textContent=w.count+" / "+w.requested+" \xB7 "+w.area.toFixed(1)+" m\xB2",w.requested>w.count&&(y.textContent+=" \xB7 r\xE9partition limit\xE9e"),i.collidable&&(y.textContent+=" \xB7 "+cE.format(w.collisions??0)+" collisions");let E=o("Affich\xE9es / demand\xE9es",y,!0),R=document.createElement("button");return R.type="button",R.textContent="Retirer la ligne",R.onclick=()=>{Et(),e.splice(s,1),Rt()},E.append(R),r}))}B("terrain-add-rule").onclick=()=>{let n=st();!n?.terrain||n.terrain.rules.length>=Uh||(Et(),n.terrain.rules.push(Ll({seed:n.terrain.seed+n.terrain.rules.length})),Rt(),B("terrain-rules").lastElementChild?.scrollIntoView({block:"nearest"}))};B("terrain-stitch").onclick=()=>{let n=st(),e=se.pieces[Number(B("terrain-neighbor").value)],t=Ee.clamp(Number(B("terrain-seam-width").value)||1.5,.1,25),i=_x(n,e,t);if(!i)return mt("Rapproche les bords \xE0 moins de 25 cm.");Et(),se.pieces[_t]=i.piece,Rt(),mt(i.clipped?"Raccord appliqu\xE9. La limite de sculpture a \xE9t\xE9 atteinte.":"Bords raccord\xE9s. Ctrl Z pour annuler.")};B("terrain-grassTexture-file").onchange=async n=>{let e=n.target.files?.[0],t=st();if(n.target.value="",!(!e||!t?.terrain))try{if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("Format PNG, JPG ou WebP uniquement.");let i=await createImageBitmap(e),s=document.createElement("canvas"),r=Math.min(1,512/Math.max(i.width,i.height));s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height),i.close();let o=s.toDataURL("image/webp",.76);if(o.length>=5e5)throw Error("Texture de v\xE9g\xE9tation trop volumineuse (maximum 500 Ko).");if(!se.pieces.includes(t))return;Et(),t.terrain.grassTexture=o,Rt(),mt("Texture d\u2019herbe import\xE9e.")}catch(i){mt(i.message)}};B("terrain-grassTexture-clear").onclick=()=>{st()?.terrain&&(Et(),st().terrain.grassTexture=null,Rt())};for(let n of["triangulation","projection"])B("terrain-"+n).onchange=e=>{let t=st();t?.terrain&&(Et(),t.terrain=gs({...t.terrain,[n]:e.target.value},t.w*t.d),Rt())};B("adaptive-editor-view").onchange=qt;B("spawn-gizmo").onclick=()=>{Wi("spawn"),mt("Tire la fl\xE8che verte Y pour monter le point de d\xE9part.")};for(let n of zy)B("terrain-"+n).onchange=e=>{let t=st();t?.terrain&&(Et(),t.terrain=n==="detail"?up(t.terrain,Number(e.target.value)):gs({...t.terrain,[n]:Number(e.target.value)},t.w*t.d),Rt())};function By(n){return{x:0,z:0,radius:Math.min(n.w,n.d)/4,blend:.5}}function Oy(n){let e=st();e?.terrain&&(Et(),e.terrain=gs({...e.terrain,reliefArea:n},e.w*e.d),Rt())}B("terrain-relief-local").onchange=n=>{let e=st();e?.terrain&&Oy(n.target.checked?By(e):null)};for(let n of["x","z","radius","blend"])B("terrain-relief-"+n).onchange=e=>{let t=st(),i=e.target.valueAsNumber;t?.terrain?.reliefArea&&Number.isFinite(i)&&Oy({...t.terrain.reliefArea,[n]:i})};B("terrain-reset").onclick=()=>{st()?.terrain&&(Et(),st().terrain.heights=null,Rt())};function ky(n,e){tm(n,e);let t=Ks.intersectObjects(yt.children,!1).find(a=>se.pieces[yt.children.indexOf(a.object)]?.terrain),i=t?yt.children.indexOf(t.object):-1,s=se.pieces[i];if(!s?.terrain||(Pt.recorded||(Et(),Pt.recorded=!0,Pt.flattenY=t.point.y,pa(i),B("terrain-controls").open=!0),i!==_t))return;let r={mode:B("terrain-brush").value,radius:Number(B("brush-radius").value),strength:Number(B("brush-strength").value),target:Pt.flattenY};if(!vx(s,t.point.x,t.point.z,r))return;let o=yt.children[i];dp(o.geometry,s),Gi?.update(),pi(),qt()}B("view-top").onclick=()=>{let n=Ut.target,e=Math.max(10,Tt.position.distanceTo(n));Tt.position.copy(n).add(new M(0,e,.001)),Ut.update(),qt()};B("view-perspective").onclick=()=>{Tt.position.copy(Ut.target).add(new M(16,15,24)),Wr()};B("view-spawn").onclick=()=>{let{x:n,y:e,z:t,yaw:i}=se.spawn,s=new M(0,0,-1).applyAxisAngle(td,Ee.degToRad(i));Tt.position.set(n,e+.87,t),Ut.target.copy(Tt.position).addScaledVector(s,5),Tt.lookAt(Ut.target),qt()};var gy={v:"move",c:"view",g:"translate",r:"rotate",s:"scale",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",n=>{if(n.target.closest?.("input, select, textarea, [contenteditable]")||Pt||et.dragging)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey)if(e==="z")Ly();else if(e==="d")Kp();else return;else{if(n.altKey)return;if(gy[e])Wi(gy[e]);else if(e==="f")Wr();else if(e==="delete"||e==="backspace")$p();else return}n.preventDefault()});var Or=new Jt;Kt.add(Or);function hE(n){let e=0,t=0,i=0;return n.traverse(s=>{if(!s.isMesh||!s.visible||s.name==="model-selection-volume"||!s.geometry?.attributes.position)return;let r=s.geometry,o=s.isInstancedMesh?s.count:1;t+=r.attributes.position.count,e+=(r.index?.count??r.attributes.position.count)/3*o,s.isInstancedMesh&&(i+=o)}),{triangles:e,vertices:t,instances:i}}function kp(n){let e=t=>Math.round(t).toLocaleString("fr-FR");return e(n.triangles)+" triangles (2 par case) \xB7 "+e(n.vertices)+" sommets stock\xE9s"+(n.instances?" \xB7 "+e(n.instances)+" instances":"")}function dE(){Hl=yt.children.map(hE),Zs={triangles:0,vertices:0,instances:0,heavy:-1};for(let[e,t]of Hl.entries()){for(let i of["triangles","vertices","instances"])Zs[i]+=t[i];(Zs.heavy<0||t.triangles>Hl[Zs.heavy].triangles)&&(Zs.heavy=e)}B("scene-mesh-stats").textContent="Objets de la carte \xB7 "+kp(Zs);let n=Zs.heavy;B("scene-heavy-mesh").textContent=n<0?"":"Plus d\xE9taill\xE9 \xB7 "+se.pieces[n].name+" \xB7 "+kp(Hl[n]),B("scene-select-heavy").disabled=n<0}B("scene-select-heavy").onclick=()=>{let n=Zs?.heavy??-1;n<0||(pa(n),window.setInspectorTab("object"),B("focus-piece").click())};function Vy(){if(!B("debug-stats"))return;let n=Hr.info.render.triangles,e=se?.pieces?.length??0;B("debug-stats").textContent=e+" \xE9l\xE9ments \xB7 "+n.toLocaleString("fr-FR")+" triangles au rendu \xB7 espace "+(se?.worldSize??240)+" m"}function Gy(){for(let n of[...Or.children])Or.remove(n),n.geometry.dispose(),n.material.dispose();fa.visible=B("debug-grid").checked;for(let n of yt.children){if(n.material)for(let e of Array.isArray(n.material)?n.material:[n.material])e.wireframe=B("debug-wire").checked;if(B("debug-hitboxes").checked){let e=yt.children.indexOf(n),t=se.pieces[e];if(t?.model){let i=new M(t.w,t.h,t.d),s=lx(t.model,i);if(s)for(let r of s){let o=new Ye(...r.size),a=new pe(o,new Xt({color:r.mode==="trigger"?"#64dbf0":"#fa9945",wireframe:!0}));a.position.copy(r.center).applyQuaternion(n.quaternion).add(n.position),a.quaternion.copy(n.quaternion),Or.add(a)}else{let r=ax(t.model,i),o=new pe(r,new Xt({color:"#fa9945",wireframe:!0,transparent:!0,opacity:.95}));o.position.copy(n.position),o.rotation.copy(n.rotation),Or.add(o)}}else if(t?.primitive==="ramp"){let i=new ls(new il(n.geometry),new Un({color:"#fa9945"}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),i.scale.copy(n.scale),Or.add(i)}else Or.add(new vr(n,"#fa9945"))}}qt()}for(let n of["debug-grid","debug-wire","debug-hitboxes"])B(n).onchange=Gy;B("debug-coords").onchange=()=>{B("debug-coords").checked||Vy()};for(let n of[rn,ut])n.addEventListener("pointermove",e=>{if(!B("debug-coords").checked||Pt||Ti)return;let t=ma(n,e);if(!t)return;let i=t.point;B("debug-stats").textContent="X "+i.x.toFixed(2)+" \xB7 Y "+i.y.toFixed(2)+" \xB7 Z "+i.z.toFixed(2)+" m \xB7 "+se.pieces.length+" \xE9l\xE9ments"});async function fE(){try{let n=await o0(_y);if(n){let e=vn(n);if(JSON.stringify(e)!==JSON.stringify(Cx()))if(e.arenaBase&&!e.editableArena){let t=Wp(),i=new Set(e.pieces.map(o=>o.model?.assetId).filter(Boolean)),s=new Set(e.pieces.map(o=>o.sceneryId).filter(Boolean)),r=t.pieces.filter(o=>o.model?.assetId&&!i.has(o.model.assetId)||o.sceneryId&&!s.has(o.sceneryId));r.length&&e.pieces.length+r.length<=aa?(e.pieces.push(...r),e.assetLayer=!0,e.editableArena=!0,se=vn(e),mt("Carte mise \xE0 niveau : relief, objets et \xE9l\xE9ments du Spawn d\xE9sormais \xE9ditables.")):se=e}else se=e}}catch{}if(QT(),Wi("move"),Rt(),nd(),id(),Wr(),$l(),Ip){let n=Zn.find(e=>e.id===Ip);n?(B("place-model").click(),mt("\xAB "+n.name+" \xBB est pr\xEAt \xE0 \xEAtre plac\xE9. Clique dans la vue 3D ou sur le plan.")):mt("Mod\xE8le introuvable dans ce navigateur. Enregistre-le dans l\u2019atelier des mod\xE8les, puis r\xE9essaie.")}Hi("d\xE9marrage termin\xE9",{version:"R54",name:se.name,pi\u00E8ces:se.pieces.length})}fE();})();
