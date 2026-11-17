(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var fg=0,gf=1,pg=2;var $a=1,mg=2,bi=3,ai=0,dn=1,qt=2,qi=0,Hr=1,$n=2,xf=3,yf=4,gg=5,mr=100,xg=101,yg=102,vg=103,_g=104,Mg=200,bg=201,Sg=202,wg=203,Mc=204,bc=205,Tg=206,Ag=207,Eg=208,Cg=209,Rg=210,Pg=211,Ig=212,Lg=213,Dg=214,Kc=0,Qc=1,eu=2,Wr=3,tu=4,nu=5,iu=6,ru=7,su=0,Ug=1,Fg=2,Xi=0,Ng=1,Bg=2,Og=3,ou=4,zg=5,Vg=6,kg=7;var vf=300,es=301,ts=302,ho=303,au=304,Ka=306,Yn=1e3,pr=1001,Sc=1002,cn=1003,Gg=1004;var Qa=1005;var un=1006,lu=1007;var Pn=1008;var Gn=1009,_f=1010,Mf=1011,fo=1012,cu=1013,yr=1014,hi=1015,Si=1016,uu=1017,hu=1018,po=1020,bf=35902,Sf=35899,wf=1021,Tf=1022,In=1023,Ys=1026,mo=1027,du=1028,fu=1029,Af=1030,pu=1031;var mu=1033,el=33776,tl=33777,nl=33778,il=33779,gu=35840,xu=35841,yu=35842,vu=35843,_u=36196,Mu=37492,bu=37496,Su=37808,wu=37809,Tu=37810,Au=37811,Eu=37812,Cu=37813,Ru=37814,Pu=37815,Iu=37816,Lu=37817,Du=37818,Uu=37819,Fu=37820,Nu=37821,Bu=36492,Ou=36494,zu=36495,Vu=36283,ku=36284,Gu=36285,Hu=36286;var xa=2300,wc=2301,vc=2302,nf=2400,rf=2401,sf=2402;var Hg=3200,Wg=3201;var Wu=0,qg=1,Yi="",ft="srgb",qr="srgb-linear",ya="linear",Mt="srgb";var Gr=7680;var of=519,Xg=512,Yg=513,Zg=514,Ef=515,jg=516,Jg=517,$g=518,Kg=519,Tc=35044,Sn=35048;var Cf="300 es",oi=2e3,va=2001;var Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cm=1234567,fa=Math.PI/180,Zs=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Rf(n,e){return(n%e+e)%e}function o_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function a_(n,e,t){return n!==e?(t-n)/(e-n):0}function pa(n,e,t){return(1-t)*n+t*e}function l_(n,e,t,i){return pa(n,e,1-Math.exp(-t*i))}function c_(n,e=1){return e-Math.abs(Rf(n,e*2)-e)}function u_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function h_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function f_(n,e){return n+Math.random()*(e-n)}function p_(n){return n*(.5-Math.random())}function m_(n){n!==void 0&&(Cm=n);let e=Cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g_(n){return n*fa}function x_(n){return n*Zs}function y_(n){return(n&n-1)===0&&n!==0}function v_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function __(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M_(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:fa,RAD2DEG:Zs,generateUUID:vi,clamp:Ke,euclideanModulo:Rf,mapLinear:o_,inverseLerp:a_,lerp:pa,damp:l_,pingpong:c_,smoothstep:u_,smootherstep:h_,randInt:d_,randFloat:f_,randFloatSpread:p_,seededRandom:m_,degToRad:g_,radToDeg:x_,isPowerOfTwo:y_,ceilPowerOfTwo:v_,floorPowerOfTwo:__,setQuaternionFromProperEuler:M_,normalize:_t,denormalize:si},Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let m=1-a,g=l*f+c*h+u*p+d*x,b=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let E=Math.sqrt(w),T=Math.atan2(E,g*b);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}let v=a*b;if(l=l*m+f*v,c=c*m+h*v,u=u*m+p*v,d=d*m+x*v,m===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ed=new M,Rm=new qe,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],m=r[3],g=r[6],b=r[1],w=r[4],v=r[7],E=r[2],T=r[5],L=r[8];return s[0]=o*x+a*b+l*E,s[3]=o*m+a*w+l*T,s[6]=o*g+a*v+l*L,s[1]=c*x+u*b+d*E,s[4]=c*m+u*w+d*T,s[7]=c*g+u*v+d*L,s[2]=f*x+h*b+p*E,s[5]=f*m+h*w+p*T,s[8]=f*g+h*v+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cd.makeScale(e,t)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cd=new nt;function Pf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qg(){let n=js("canvas");return n.style.display="block",n}var Pm={};function Js(n){n in Pm||(Pm[n]=!0,console.warn(n))}function e0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Im=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b_(){let n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?ya:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Im,fromXYZ:Lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),n}var ut=b_();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var As,Ac=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=js("canvas")),As.width=e.width,As.height=e.height;let r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},S_=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rd(r[o].image)):s.push(Rd(r[o]))}else s=Rd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w_=0,Pd=new M,gn=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pr,r=pr,s=un,o=Pn,a=In,l=Gn,c=n.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=vi(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=vf;gn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(h+1)/2,E=(g+1)/2,T=(u+f)/4,L=(d+x)/4,U=(p+m)/4;return w>v&&w>E?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=L/i):v>E?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=U/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=L/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Wl.subVectors(this.max,ta),Es.subVectors(e.a,ta),Cs.subVectors(e.b,ta),Rs.subVectors(e.c,ta),lr.subVectors(Cs,Es),cr.subVectors(Rs,Cs),Or.subVectors(Es,Rs);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Or.z,Or.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Or.z,0,-Or.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Or.y,Or.x,0];return!Id(t,Es,Cs,Rs,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,Es,Cs,Rs,Wl))?!1:(ql.crossVectors(lr,cr),t=[ql.x,ql.y,ql.z],Id(t,Es,Cs,Rs,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new M,new M,new M,new M,new M,new M,new M,new M],ni=new M,Hl=new Qt,Es=new M,Cs=new M,Rs=new M,lr=new M,cr=new M,Or=new M,ta=new M,Wl=new M,ql=new M,zr=new M;function Id(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zr.fromArray(n,s);let a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var T_=new Qt,na=new M,Ld=new M,Zn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):T_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ld)),this.expandByPoint(na.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fi=new M,Dd=new M,Xl=new M,ur=new M,Ud=new M,Yl=new M,Fd=new M,Xr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dd.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(Dd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xl),a=ur.dot(this.direction),l=-ur.dot(Xl),c=ur.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dd).addScaledVector(Xl,f),h}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Ud.subVectors(t,e),Yl.subVectors(i,e),Fd.crossVectors(Ud,Yl);let o=this.direction.dot(Fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);let l=a*this.direction.dot(Yl.crossVectors(ur,Yl));if(l<0)return null;let c=a*this.direction.dot(Ud.cross(ur));if(c<0||l+c>o)return null;let u=-a*ur.dot(Fd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,E_)}lookAt(e,t,i){let r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hr.crossVectors(i,Bn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hr.crossVectors(i,Bn)),hr.normalize(),Zl.crossVectors(Bn,hr),r[0]=hr.x,r[4]=Zl.x,r[8]=Bn.x,r[1]=hr.y,r[5]=Zl.y,r[9]=Bn.y,r[2]=hr.z,r[6]=Zl.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],m=i[10],g=i[14],b=i[3],w=i[7],v=i[11],E=i[15],T=r[0],L=r[4],U=r[8],S=r[12],_=r[1],A=r[5],F=r[9],N=r[13],G=r[2],W=r[6],k=r[10],J=r[14],B=r[3],oe=r[7],ce=r[11],ie=r[15];return s[0]=o*T+a*_+l*G+c*B,s[4]=o*L+a*A+l*W+c*oe,s[8]=o*U+a*F+l*k+c*ce,s[12]=o*S+a*N+l*J+c*ie,s[1]=u*T+d*_+f*G+h*B,s[5]=u*L+d*A+f*W+h*oe,s[9]=u*U+d*F+f*k+h*ce,s[13]=u*S+d*N+f*J+h*ie,s[2]=p*T+x*_+m*G+g*B,s[6]=p*L+x*A+m*W+g*oe,s[10]=p*U+x*F+m*k+g*ce,s[14]=p*S+x*N+m*J+g*ie,s[3]=b*T+w*_+v*G+E*B,s[7]=b*L+w*A+v*W+E*oe,s[11]=b*U+w*F+v*k+E*ce,s[15]=b*S+w*N+v*J+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],m=e[14],g=e[15],b=d*m*c-x*f*c+x*l*h-a*m*h-d*l*g+a*f*g,w=p*f*c-u*m*c-p*l*h+o*m*h+u*l*g-o*f*g,v=u*x*c-p*d*c+p*a*h-o*x*h-u*a*g+o*d*g,E=p*d*l-u*x*l-p*a*f+o*x*f+u*a*m-o*d*m,T=t*b+i*w+r*v+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=b*L,e[1]=(x*f*s-d*m*s-x*r*h+i*m*h+d*r*g-i*f*g)*L,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*g+i*l*g)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*L,e[4]=w*L,e[5]=(u*m*s-p*f*s+p*r*h-t*m*h-u*r*g+t*f*g)*L,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*L,e[8]=v*L,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*g-t*d*g)*L,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*g+t*a*g)*L,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*L,e[12]=E*L,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*m+t*d*m)*L,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,m=o*d,g=a*d,b=l*c,w=l*u,v=l*d,E=i.x,T=i.y,L=i.z;return r[0]=(1-(x+g))*E,r[1]=(h+v)*E,r[2]=(p-w)*E,r[3]=0,r[4]=(h-v)*T,r[5]=(1-(f+g))*T,r[6]=(m+b)*T,r[7]=0,r[8]=(p+w)*L,r[9]=(m-b)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ps.set(r[0],r[1],r[2]).length(),o=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let c=1/s,u=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===oi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===va)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===oi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===va)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ps=new M,ii=new at,A_=new M(0,0,0),E_=new M(1,1,1),hr=new M,Zl=new M,Bn=new M,Dm=new at,Um=new qe,rn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},C_=0,Fm=new M,Is=new qe,Ni=new at,jl=new M,ia=new M,R_=new M,P_=new qe,Nm=new M(1,0,0),Bm=new M(0,1,0),Om=new M(0,0,1),zm={type:"added"},I_={type:"removed"},Ls={type:"childadded",child:null},Nd={type:"childremoved",child:null},Lt=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new rn,i=new qe,r=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jl.copy(e):jl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ia,jl,this.up):Ni.lookAt(jl,ia,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Ni),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,R_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Lt.DEFAULT_UP=new M(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new M,Bi=new M,Bd=new M,Oi=new M,Ds=new M,Us=new M,Vm=new M,Od=new M,zd=new M,Vd=new M,kd=new lt,Gd=new lt,Hd=new lt,Cn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Bi.subVectors(i,t),Bd.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(Bi),l=ri.dot(Bd),c=Bi.dot(Bi),u=Bi.dot(Bd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return kd.setScalar(0),Gd.setScalar(0),Hd.setScalar(0),kd.fromBufferAttribute(e,t),Gd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kd,s.x),o.addScaledVector(Gd,s.y),o.addScaledVector(Hd,s.z),o}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Bi.subVectors(e,t),ri.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ds.subVectors(r,i),Us.subVectors(s,i),Od.subVectors(e,i);let l=Ds.dot(Od),c=Us.dot(Od);if(l<=0&&c<=0)return t.copy(i);zd.subVectors(e,r);let u=Ds.dot(zd),d=Us.dot(zd);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ds,o);Vd.subVectors(e,s);let h=Ds.dot(Vd),p=Us.dot(Vd);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Us,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return Vm.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(Vm,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Rf(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wd(o,s,e+1/3),this.g=Wd(o,s,e),this.b=Wd(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let i=t0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ut.workingToColorSpace(mn.copy(this),e),Math.round(Ke(mn.r*255,0,255))*65536+Math.round(Ke(mn.g*255,0,255))*256+Math.round(Ke(mn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ft){ut.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Jl);let i=pa(dr.h,Jl.h,t),r=pa(dr.s,Jl.s,t),s=pa(dr.l,Jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new De;De.NAMES=t0;var L_=0,jn=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Hr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mc&&(i.blendSrc=this.blendSrc),this.blendDst!==bc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new M,$l=new Se,D_=0,ht=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}};var Yr=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ma=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ve=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},U_=0,Xn=new at,qd=new Lt,Fs=new M,On=new Qt,ra=new Qt,ln=new M,$e=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Ma:Yr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(On.min,ra.min),On.expandByPoint(ln),ln.addVectors(On.max,ra.max),On.expandByPoint(ln)):(On.expandByPoint(ra.min),On.expandByPoint(ra.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),ln.add(Fs)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new M,l[U]=new M;let c=new M,u=new M,d=new M,f=new Se,h=new Se,p=new Se,x=new M,m=new M;function g(U,S,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,U),h.fromBufferAttribute(s,S),p.fromBufferAttribute(s,_),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let A=1/(h.x*p.y-p.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(A),a[U].add(x),a[S].add(x),a[_].add(x),l[U].add(m),l[S].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){let _=b[U],A=_.start,F=_.count;for(let N=A,G=A+F;N<G;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new M,v=new M,E=new M,T=new M;function L(U){E.fromBufferAttribute(r,U),T.copy(E);let S=a[U];w.copy(S),w.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(T,S);let A=v.dot(l[U])<0?-1:1;o.setXYZW(U,w.x,w.y,w.z,A)}for(let U=0,S=b.length;U<S;++U){let _=b[U],A=_.start,F=_.count;for(let N=A,G=A+F;N<G;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new M,s=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new ht(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},km=new at,Vr=new Xr,Kl=new Zn,Gm=new M,Ql=new M,ec=new M,tc=new M,Xd=new M,nc=new M,Hm=new M,ic=new M,Be=class extends Lt{constructor(e=new $e,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Xd.fromBufferAttribute(d,e),o?nc.addScaledVector(Xd,u):nc.addScaledVector(Xd.sub(t),u))}t.add(nc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Kl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Kl,Gm)===null||Vr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(km.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(km),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,E=w;v<E;v+=3){let T=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);r=rc(this,g,e,i,c,u,d,T,L,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);r=rc(this,o,e,i,c,u,d,b,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,E=w;v<E;v+=3){let T=v,L=v+1,U=v+2;r=rc(this,g,e,i,c,u,d,T,L,U),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let b=m,w=m+1,v=m+2;r=rc(this,o,e,i,c,u,d,b,w,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function F_(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;ic.copy(a),ic.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:n}}function rc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ql),n.getVertexPosition(l,ec),n.getVertexPosition(c,tc);let u=F_(n,e,t,i,Ql,ec,tc,Hm);if(u){let d=new M;Cn.getBarycoord(Hm,Ql,ec,tc,d),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,d,new Se)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,d,new Se)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Cn.getNormal(Ql,ec,tc,f.normal),u.face=f,u.barycoord=d}return u}var et=class n extends $e{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(d,2));function p(x,m,g,b,w,v,E,T,L,U,S){let _=v/L,A=E/U,F=v/2,N=E/2,G=T/2,W=L+1,k=U+1,J=0,B=0,oe=new M;for(let ce=0;ce<k;ce++){let ie=ce*A-N;for(let se=0;se<W;se++){let we=se*_-F;oe[x]=we*b,oe[m]=ie*w,oe[g]=G,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[g]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(se/L),d.push(1-ce/U),J+=1}}for(let ce=0;ce<U;ce++)for(let ie=0;ie<L;ie++){let se=f+ie+W*ce,we=f+ie+W*(ce+1),me=f+(ie+1)+W*(ce+1),fe=f+(ie+1)+W*ce;l.push(se,we,fe),l.push(we,me,fe),B+=6}a.addGroup(h,B,S),h+=B,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=ns(n[t]);for(let r in i)e[r]=i[r]}return e}function N_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function If(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var qu={clone:ns,merge:xn},B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ba=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fr=new M,Wm=new Se,qm=new Se,Wt=class extends ba{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,qm),t.subVectors(qm,Wm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Bs=1,Rc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wt(Ns,Bs,e,t);r.layers=this.layers,this.add(r);let s=new Wt(Ns,Bs,e,t);s.layers=this.layers,this.add(s);let o=new Wt(Ns,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Wt(Ns,Bs,e,t);a.layers=this.layers,this.add(a);let l=new Wt(Ns,Bs,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Ns,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Sa=class extends gn{constructor(e=[],t=es,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:qi});s.uniforms.tEquirect.value=t;let o=new Be(r,s),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=un),new Rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},yt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},z_={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var wa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zr=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new M,eo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},to=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,sa=new M,zs=new M,Vs=new M,ks=new Se,oa=new Se,n0=new at,sc=new M,aa=new M,oc=new M,Xm=new Se,Yd=new Se,Ym=new Se,Aa=class extends Lt{constructor(e=new to){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ta(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new eo(i,3,0,!1)),Os.setAttribute("uv",new eo(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),n0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Vs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;ac(sc.set(-.5,-.5,0),Vs,o,zs,r,s),ac(aa.set(.5,-.5,0),Vs,o,zs,r,s),ac(oc.set(.5,.5,0),Vs,o,zs,r,s),Xm.set(0,0),Yd.set(1,0),Ym.set(1,1);let a=e.ray.intersectTriangle(sc,aa,oc,!1,sa);if(a===null&&(ac(aa.set(-.5,.5,0),Vs,o,zs,r,s),Yd.set(0,1),a=e.ray.intersectTriangle(sc,oc,aa,!1,sa),a===null))return;let l=e.ray.origin.distanceTo(sa);l<e.near||l>e.far||t.push({distance:l,point:sa.clone(),uv:Cn.getInterpolation(sa,sc,aa,oc,Xm,Yd,Ym,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ac(n,e,t,i,r,s){ks.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(oa.x=s*ks.x-r*ks.y,oa.y=r*ks.x+s*ks.y):oa.copy(ks),n.copy(e),n.x+=oa.x,n.y+=oa.y,n.applyMatrix4(n0)}var _i=class extends gn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=cn,u=cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=class extends ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new at,Zm=new at,lc=[],jm=new Qt,V_=new at,la=new Be,ca=new Zn,Ea=class extends Be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,V_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),jm.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(jm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),ca.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gs),Zm.multiplyMatrices(i,Gs),la.matrixWorld=Zm,la.raycast(e,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=s,l.object=this,t.push(l)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,du,hi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zd=new M,k_=new M,G_=new nt,En=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zd.subVectors(i,t).cross(k_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||G_.getNormalMatrix(e),r=this.coplanarPoint(Zd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},kr=new Zn,H_=new Se(.5,.5),cc=new M,io=class{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],m=s[10],g=s[11],b=s[12],w=s[13],v=s[14],E=s[15];if(r[0].setComponents(c-o,h-u,g-p,E-b).normalize(),r[1].setComponents(c+o,h+u,g+p,E+b).normalize(),r[2].setComponents(c+a,h+d,g+x,E+w).normalize(),r[3].setComponents(c-a,h-d,g-x,E-w).normalize(),i)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,h-f,g-m,E-v).normalize();else if(r[4].setComponents(c-l,h-f,g-m,E-v).normalize(),t===oi)r[5].setComponents(c+l,h+f,g+m,E+v).normalize();else if(t===va)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);let t=H_.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(cc.x=r.normal.x>0?e.max.x:e.min.x,cc.y=r.normal.y>0?e.max.y:e.min.y,cc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ic=new M,Lc=new M,Jm=new at,ua=new Xr,uc=new Zn,jd=new M,$m=new M,Ca=class extends Lt{constructor(e=new $e,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ic.fromBufferAttribute(t,r-1),Lc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ic.distanceTo(Lc);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(r),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;Jm.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Jm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=u.getX(x),b=u.getX(x+1),w=hc(this,e,ua,l,g,b,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(h),g=hc(this,e,ua,l,x,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=hc(this,e,ua,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=hc(this,e,ua,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function hc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Ic.fromBufferAttribute(a,r),Lc.fromBufferAttribute(a,s),t.distanceSqToSegment(Ic,Lc,jd,$m)>i)return;jd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(jd);if(!(c<e.near||c>e.far))return{distance:c,point:$m.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Km=new M,Qm=new M,jr=class extends Ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Km.fromBufferAttribute(t,r),Qm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Km.distanceTo(Qm);e.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ra=class extends Ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ro=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eg=new at,af=new Xr,dc=new Zn,fc=new M,Pa=class extends Lt{constructor(e=new $e,t=new ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(r),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;eg.copy(r).invert(),af.copy(e.ray).applyMatrix4(eg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let m=c.getX(p);fc.fromBufferAttribute(d,m),tg(fc,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)fc.fromBufferAttribute(d,p),tg(fc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function tg(n,e,t,i,r,s,o){let a=af.distanceSqToPoint(n);if(a<t){let l=new M;af.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Jn=class extends gn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ia=class extends gn{constructor(e,t,i=yr,r,s,o,a=cn,l=cn,c,u=Ys,d=1){if(u!==Ys&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},La=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jr=class n extends $e{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,m=new M,g=new M;for(let b=0;b<=p;b++){let w=0,v=0,E=0,T=0;if(b<=i){let S=b/i,_=S*Math.PI/2;v=-u-e*Math.cos(_),E=e*Math.sin(_),T=-e*Math.cos(_),w=S*d}else if(b<=i+s){let S=(b-i)/s;v=-u+S*t,E=e,T=0,w=d+S*f}else{let S=(b-i-s)/i,_=S*Math.PI/2;v=u+e*Math.sin(_),E=e*Math.cos(_),T=e*Math.sin(_),w=d+f+S*d}let L=Math.max(0,Math.min(1,w/h)),U=0;b===0?U=.5/r:b===p&&(U=-.5/r);for(let S=0;S<=r;S++){let _=S/r,A=_*Math.PI*2,F=Math.sin(A),N=Math.cos(A);g.x=-E*N,g.y=v,g.z=E*F,a.push(g.x,g.y,g.z),m.set(-E*N,T,E*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(_+U,L)}if(b>0){let S=(b-1)*x;for(let _=0;_<r;_++){let A=S+_,F=S+_+1,N=b*x+_,G=b*x+_+1;o.push(A,F,N),o.push(F,G,N)}}}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},en=class n extends $e{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new M,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class n extends $e{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],m=i/2,g=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ve(d,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(h,2));function b(){let v=new M,E=new M,T=0,L=(t-e)/i;for(let U=0;U<=s;U++){let S=[],_=U/s,A=_*(t-e)+e;for(let F=0;F<=r;F++){let N=F/r,G=N*l+a,W=Math.sin(G),k=Math.cos(G);E.x=A*W,E.y=-_*i+m,E.z=A*k,d.push(E.x,E.y,E.z),v.set(W,L,k).normalize(),f.push(v.x,v.y,v.z),h.push(N,1-_),S.push(p++)}x.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){let _=x[S][U],A=x[S+1][U],F=x[S+1][U+1],N=x[S][U+1];(e>0||S!==0)&&(u.push(_,A,N),T+=3),(t>0||S!==s-1)&&(u.push(A,F,N),T+=3)}c.addGroup(g,T,0),g+=T}function w(v){let E=p,T=new Se,L=new M,U=0,S=v===!0?e:t,_=v===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*_,0),f.push(0,_,0),h.push(.5,.5),p++;let A=p;for(let F=0;F<=r;F++){let G=F/r*l+a,W=Math.cos(G),k=Math.sin(G);L.x=S*k,L.y=m*_,L.z=S*W,d.push(L.x,L.y,L.z),f.push(0,_,0),T.x=W*.5+.5,T.y=k*.5*_+.5,h.push(T.x,T.y),p++}for(let F=0;F<r;F++){let N=E+F,G=A+F;v===!0?u.push(G,G+1,N):u.push(G+1,G,N),U+=3}c.addGroup(g,U,v===!0?1:2),g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ki=class n extends Ft{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},so=class n extends $e{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(s.slice(),3)),this.setAttribute("uv",new Ve(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new M,v=new M,E=new M;for(let T=0;T<t.length;T+=3)h(t[T+0],w),h(t[T+1],v),h(t[T+2],E),l(w,v,E,b)}function l(b,w,v,E){let T=E+1,L=[];for(let U=0;U<=T;U++){L[U]=[];let S=b.clone().lerp(v,U/T),_=w.clone().lerp(v,U/T),A=T-U;for(let F=0;F<=A;F++)F===0&&U===T?L[U][F]=S:L[U][F]=S.clone().lerp(_,F/A)}for(let U=0;U<T;U++)for(let S=0;S<2*(T-U)-1;S++){let _=Math.floor(S/2);S%2===0?(f(L[U][_+1]),f(L[U+1][_]),f(L[U][_])):(f(L[U][_+1]),f(L[U+1][_+1]),f(L[U+1][_]))}}function c(b){let w=new M;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(b),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function u(){let b=new M;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];let v=m(b)/2/Math.PI+.5,E=g(b)/Math.PI+.5;o.push(v,1-E)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],E=o[b+4],T=Math.max(w,v,E),L=Math.min(w,v,E);T>.9&&L<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function h(b,w){let v=b*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let b=new M,w=new M,v=new M,E=new M,T=new Se,L=new Se,U=new Se;for(let S=0,_=0;S<s.length;S+=9,_+=6){b.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),T.set(o[_+0],o[_+1]),L.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),E.copy(b).add(w).add(v).divideScalar(3);let A=m(E);x(T,_+0,b,A),x(L,_+2,w,A),x(U,_+4,v,A)}}function x(b,w,v,E){E<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Se:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,r=[],s=[],o=[],a=new M,l=new at;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new M)}s[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},oo=class extends zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends oo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var pc=new M,Jd=new Lf,$d=new Lf,Kd=new Lf,Uc=class extends zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new M){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(pc.subVectors(r[0],r[1]).add(r[0]),c=pc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(pc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=pc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Jd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,m),$d.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,m),Kd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Jd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),$d.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Kd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Jd.calc(l),$d.calc(l),Kd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ng(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function W_(n,e){let t=1-n;return t*t*e}function q_(n,e){return 2*(1-n)*n*e}function X_(n,e){return n*n*e}function ma(n,e,t,i){return W_(n,e)+q_(n,t)+X_(n,i)}function Y_(n,e){let t=1-n;return t*t*t*e}function Z_(n,e){let t=1-n;return 3*t*t*n*e}function j_(n,e){return 3*(1-n)*n*n*e}function J_(n,e){return n*n*n*e}function ga(n,e,t,i,r){return Y_(n,e)+Z_(n,t)+j_(n,i)+J_(n,r)}var Da=class extends zn{constructor(e=new Se,t=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Se){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,r.x,s.x,o.x,a.x),ga(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends zn{constructor(e=new M,t=new M,i=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,r.x,s.x,o.x,a.x),ga(e,r.y,s.y,o.y,a.y),ga(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends zn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends zn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends zn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ma(e,r.x,s.x,o.x),ma(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends zn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ma(e,r.x,s.x,o.x),ma(e,r.y,s.y,o.y),ma(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(ng(a,l.x,c.x,u.x,d.x),ng(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Se().fromArray(r))}return this}},lf=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Uc,CubicBezierCurve:Da,CubicBezierCurve3:Fc,EllipseCurve:oo,LineCurve:Ua,LineCurve3:Nc,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Bc,SplineCurve:Na}),Oc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new lf[r.type]().fromJSON(r))}return this}},Ba=class extends Oc{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ua(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Fa(this.currentPoint.clone(),new Se(e,t),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Da(this.currentPoint.clone(),new Se(e,t),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Na(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new oo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},li=class extends Ba{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ba().fromJSON(r))}return this}};function $_(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=i0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=nM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Oa(s,o,t,a,l,c,0),o}function i0(n,e,t,i,r){let s;if(r===fM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ig(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ig(o/i|0,n[o],n[o+1],s);return s&&ao(s,s.next)&&(Va(s),s=s.next),s}function $r(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ao(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Oa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&aM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Q_(n,i,r,s):K_(n)){e.push(l.i,n.i,c.i),Va(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=eM($r(n),e),Oa(n,e,t,i,r,s,2)):o===2&&tM(n,e,t,i,r,s):Oa($r(n),e,t,i,r,s,1);break}}}function K_(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&da(r,a,s,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Q_(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Vt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),m=Math.max(u,d,f),g=cf(h,p,e,t,i),b=cf(x,m,e,t,i),w=n.prevZ,v=n.nextZ;for(;w&&w.z>=g&&v&&v.z<=b;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&da(a,u,l,d,c,f,w.x,w.y)&&Vt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&da(a,u,l,d,c,f,v.x,v.y)&&Vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&da(a,u,l,d,c,f,w.x,w.y)&&Vt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&da(a,u,l,d,c,f,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function eM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!ao(i,r)&&s0(i,t,t.next,r)&&za(i,r)&&za(r,i)&&(e.push(i.i,t.i,r.i),Va(t),Va(t.next),t=n=r),t=t.next}while(t!==n);return $r(t)}function tM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uM(o,a)){let l=o0(o,a);o=$r(o,o.next),l=$r(l,l.next),Oa(o,e,t,i,r,s,0),Oa(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function nM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=i0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(cM(c))}r.sort(iM);for(let s=0;s<r.length;s++)t=rM(r[s],t);return t}function iM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function rM(n,e){let t=sM(n,e);if(!t)return e;let i=o0(t,n);return $r(i,i.next),$r(t,t.next)}function sM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(ao(n,t))return t;do{if(ao(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&r0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);za(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&oM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function oM(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function aM(n,e,t,i){let r=n;do r.z===0&&(r.z=cf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,lM(r)}function lM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function cf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function cM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function r0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function da(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&r0(n,e,t,i,r,s,o,a)}function uM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!hM(n,e)&&(za(n,e)&&za(e,n)&&dM(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||ao(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ao(n,e){return n.x===e.x&&n.y===e.y}function s0(n,e,t,i){let r=gc(Vt(n,e,t)),s=gc(Vt(n,e,i)),o=gc(Vt(t,i,n)),a=gc(Vt(t,i,e));return!!(r!==s&&o!==a||r===0&&mc(n,t,e)||s===0&&mc(n,i,e)||o===0&&mc(t,n,i)||a===0&&mc(t,e,i))}function mc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function gc(n){return n>0?1:n<0?-1:0}function hM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&s0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function za(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function dM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function o0(n,e){let t=uf(n.i,n.x,n.y),i=uf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ig(n,e,t,i){let r=uf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var hf=class{static triangulate(e,t,i=2){return $_(e,t,i)}},yi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];rg(e),sg(i,e);let o=e.length;t.forEach(rg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,sg(i,t[l]);let a=hf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function rg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Gi=class n extends $e{constructor(e=new li([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ve(r,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:pM,w,v=!1,E,T,L,U;g&&(w=g.getSpacedPoints(u),v=!0,f=!1,E=g.computeFrenetFrames(u,!1),T=new M,L=new M,U=new M),f||(m=0,h=0,p=0,x=0);let S=a.extractPoints(c),_=S.shape,A=S.holes;if(!yi.isClockWise(_)){_=_.reverse();for(let Y=0,te=A.length;Y<te;Y++){let Z=A[Y];yi.isClockWise(Z)&&(A[Y]=Z.reverse())}}function N(Y){let Z=10000000000000001e-36,D=Y[0];for(let X=1;X<=Y.length;X++){let O=X%Y.length,ee=Y[O],le=ee.x-D.x,de=ee.y-D.y,R=le*le+de*de,y=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(D.x),Math.abs(D.y)),I=Z*y*y;if(R<=I){Y.splice(O,1),X--;continue}D=ee}}N(_),A.forEach(N);let G=A.length,W=_;for(let Y=0;Y<G;Y++){let te=A[Y];_=_.concat(te)}function k(Y,te,Z){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(te,Z)}let J=_.length;function B(Y,te,Z){let D,X,O,ee=Y.x-te.x,le=Y.y-te.y,de=Z.x-Y.x,R=Z.y-Y.y,y=ee*ee+le*le,I=ee*R-le*de;if(Math.abs(I)>Number.EPSILON){let H=Math.sqrt(y),re=Math.sqrt(de*de+R*R),j=te.x-le/H,ye=te.y+ee/H,pe=Z.x-R/re,be=Z.y+de/re,_e=((pe-j)*R-(be-ye)*de)/(ee*R-le*de);D=j+ee*_e-Y.x,X=ye+le*_e-Y.y;let he=D*D+X*X;if(he<=2)return new Se(D,X);O=Math.sqrt(he/2)}else{let H=!1;ee>Number.EPSILON?de>Number.EPSILON&&(H=!0):ee<-Number.EPSILON?de<-Number.EPSILON&&(H=!0):Math.sign(le)===Math.sign(R)&&(H=!0),H?(D=-le,X=ee,O=Math.sqrt(y)):(D=ee,X=le,O=Math.sqrt(y/2))}return new Se(D/O,X/O)}let oe=[];for(let Y=0,te=W.length,Z=te-1,D=Y+1;Y<te;Y++,Z++,D++)Z===te&&(Z=0),D===te&&(D=0),oe[Y]=B(W[Y],W[Z],W[D]);let ce=[],ie,se=oe.concat();for(let Y=0,te=G;Y<te;Y++){let Z=A[Y];ie=[];for(let D=0,X=Z.length,O=X-1,ee=D+1;D<X;D++,O++,ee++)O===X&&(O=0),ee===X&&(ee=0),ie[D]=B(Z[D],Z[O],Z[ee]);ce.push(ie),se=se.concat(ie)}let we;if(m===0)we=yi.triangulateShape(W,A);else{let Y=[],te=[];for(let Z=0;Z<m;Z++){let D=Z/m,X=h*Math.cos(D*Math.PI/2),O=p*Math.sin(D*Math.PI/2)+x;for(let ee=0,le=W.length;ee<le;ee++){let de=k(W[ee],oe[ee],O);Pe(de.x,de.y,-X),D===0&&Y.push(de)}for(let ee=0,le=G;ee<le;ee++){let de=A[ee];ie=ce[ee];let R=[];for(let y=0,I=de.length;y<I;y++){let H=k(de[y],ie[y],O);Pe(H.x,H.y,-X),D===0&&R.push(H)}D===0&&te.push(R)}}we=yi.triangulateShape(Y,te)}let me=we.length,fe=p+x;for(let Y=0;Y<J;Y++){let te=f?k(_[Y],se[Y],fe):_[Y];v?(L.copy(E.normals[0]).multiplyScalar(te.x),T.copy(E.binormals[0]).multiplyScalar(te.y),U.copy(w[0]).add(L).add(T),Pe(U.x,U.y,U.z)):Pe(te.x,te.y,0)}for(let Y=1;Y<=u;Y++)for(let te=0;te<J;te++){let Z=f?k(_[te],se[te],fe):_[te];v?(L.copy(E.normals[Y]).multiplyScalar(Z.x),T.copy(E.binormals[Y]).multiplyScalar(Z.y),U.copy(w[Y]).add(L).add(T),Pe(U.x,U.y,U.z)):Pe(Z.x,Z.y,d/u*Y)}for(let Y=m-1;Y>=0;Y--){let te=Y/m,Z=h*Math.cos(te*Math.PI/2),D=p*Math.sin(te*Math.PI/2)+x;for(let X=0,O=W.length;X<O;X++){let ee=k(W[X],oe[X],D);Pe(ee.x,ee.y,d+Z)}for(let X=0,O=A.length;X<O;X++){let ee=A[X];ie=ce[X];for(let le=0,de=ee.length;le<de;le++){let R=k(ee[le],ie[le],D);v?Pe(R.x,R.y+w[u-1].y,w[u-1].x+Z):Pe(R.x,R.y,d+Z)}}}Q(),ne();function Q(){let Y=r.length/3;if(f){let te=0,Z=J*te;for(let D=0;D<me;D++){let X=we[D];V(X[2]+Z,X[1]+Z,X[0]+Z)}te=u+m*2,Z=J*te;for(let D=0;D<me;D++){let X=we[D];V(X[0]+Z,X[1]+Z,X[2]+Z)}}else{for(let te=0;te<me;te++){let Z=we[te];V(Z[2],Z[1],Z[0])}for(let te=0;te<me;te++){let Z=we[te];V(Z[0]+J*u,Z[1]+J*u,Z[2]+J*u)}}i.addGroup(Y,r.length/3-Y,0)}function ne(){let Y=r.length/3,te=0;xe(W,te),te+=W.length;for(let Z=0,D=A.length;Z<D;Z++){let X=A[Z];xe(X,te),te+=X.length}i.addGroup(Y,r.length/3-Y,1)}function xe(Y,te){let Z=Y.length;for(;--Z>=0;){let D=Z,X=Z-1;X<0&&(X=Y.length-1);for(let O=0,ee=u+m*2;O<ee;O++){let le=J*O,de=J*(O+1),R=te+D+le,y=te+X+le,I=te+X+de,H=te+D+de;ge(R,y,I,H)}}}function Pe(Y,te,Z){l.push(Y),l.push(te),l.push(Z)}function V(Y,te,Z){Me(Y),Me(te),Me(Z);let D=r.length/3,X=b.generateTopUV(i,r,D-3,D-2,D-1);C(X[0]),C(X[1]),C(X[2])}function ge(Y,te,Z,D){Me(Y),Me(te),Me(D),Me(te),Me(Z),Me(D);let X=r.length/3,O=b.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);C(O[0]),C(O[1]),C(O[3]),C(O[1]),C(O[2]),C(O[3])}function Me(Y){r.push(l[Y*3+0]),r.push(l[Y*3+1]),r.push(l[Y*3+2])}function C(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return mM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new lf[r.type]().fromJSON(r)),new n(i,e.options)}},pM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(s,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(f,1-p),new Se(x,1-g)]:[new Se(a,1-l),new Se(u,1-d),new Se(h,1-p),new Se(m,1-g)]}};function mM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dt=class n extends so{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ka=class n extends $e{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ke(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new M,f=new Se,h=new M,p=new M,x=new M,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let b=0;b<=t;b++){let w=i+b*u*r,v=Math.sin(w),E=Math.cos(w);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*v,d.y=e[T].y,d.z=e[T].x*E,o.push(d.x,d.y,d.z),f.x=b/t,f.y=T/(e.length-1),a.push(f.x,f.y);let L=l[3*T+0]*v,U=l[3*T+1],S=l[3*T+0]*E;c.push(L,U,S)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let v=w+b*e.length,E=v,T=v+e.length,L=v+e.length+1,U=v+1;s.push(E,T,U),s.push(L,U,T)}this.setIndex(s),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ci=class n extends so{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$t=class n extends $e{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let b=g*f-o;for(let w=0;w<c;w++){let v=w*d-s;p.push(v,-b,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let w=b+c*g,v=b+c*(g+1),E=b+1+c*(g+1),T=b+1+c*g;h.push(w,v,T),h.push(v,E,T)}this.setIndex(h),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(x,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},lo=class n extends $e{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new M,p=new Se;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let g=s+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let g=0;g<i;g++){let b=g+m,w=b,v=b+i+1,E=b+i+2,T=b+1;a.push(w,v,T),a.push(v,E,T)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ga=class n extends $e{constructor(e=new li([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(s,3)),this.setAttribute("uv",new Ve(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;yi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];yi.isClockWise(b)===!0&&(p[m]=b.reverse())}let x=yi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];h=h.concat(b)}for(let m=0,g=h.length;m<g;m++){let b=h[m];r.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=x.length;m<g;m++){let b=x[m],w=b[0]+d,v=b[1]+d,E=b[2]+d;i.push(w,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return gM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function gM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Vn=class n extends $e{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let b=[],w=g/i,v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let T=E/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(T+v,1-w),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let w=u[g][b+1],v=u[g][b],E=u[g+1][b],T=u[g+1][b+1];(g!==0||o>0)&&h.push(w,v,T),(g!==i-1||l<Math.PI)&&h.push(v,E,T)}this.setIndex(h),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(x,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ha=class n extends so{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ui=class n extends $e{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,m=(r+1)*(h-1)+p-1,g=(r+1)*(h-1)+p,b=(r+1)*h+p;o.push(x,m,b),o.push(m,g,b)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Kr=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new M,s=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,b),og(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),og(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function og(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var gt=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wa=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tn=class extends jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zc=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends Qr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nf,endingEnd:nf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rf:s=e,a=2*t-i;break;case sf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rf:o=e,l=2*i-t;break;case sf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*m+(1.5+h)*x+.5*p,v=h*m-h*x;for(let E=0;E!==a;++E)s[E]=g*o[u+E]+b*o[c+E]+w*o[l+E]+v*o[d+E];return s}},Gc=class extends Qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Hc=class extends Qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case wc:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&xM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=wc;var gr=class extends kn{constructor(e,t,i){super(e,t,i)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=xa;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};Wc.prototype.ValueTypeName="color";var qc=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};qc.prototype.ValueTypeName="number";var Xc=class extends Qr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},qa=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends kn{constructor(e,t,i){super(e,t,i)}};xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=xa;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};Yc.prototype.ValueTypeName="vector";var _c={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Zc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},a0=new Zc,co=class{constructor(e){this.manager=e!==void 0?e:a0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=new WeakMap,jc=class extends co{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=_c.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Hs.get(o);d===void 0&&(d=[],Hs.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=js("img");function l(){u(),t&&t(this);let d=Hs.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Hs.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),_c.remove(`image:${e}`);let f=Hs.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Hs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_c.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Hi=class extends co{constructor(e){super(e)}load(e,t,i,r){let s=new gn,o=new jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},uo=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Xa=class extends uo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qd=new at,ag=new M,lg=new M,Jc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ag.setFromMatrixPosition(e.matrixWorld),t.position.copy(ag),lg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lg),t.updateMatrixWorld(),Qd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cg=new at,ha=new M,ef=new M,df=class extends Jc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),ef.copy(i.position),ef.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ef),i.updateMatrixWorld(),r.makeTranslation(-ha.x,-ha.y,-ha.z),cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cg,i.coordinateSystem,i.reversedDepth)}},Ya=class extends uo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Za=class extends ba{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ff=class extends Jc{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ff}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $c=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Df="\\[\\]\\.:\\/",yM=new RegExp("["+Df+"]","g"),Uf="[^"+Df+"]",vM="[^"+Df.replace("\\.","")+"]",_M=/((?:WC+[\/:])*)/.source.replace("WC",Uf),MM=/(WCOD+)?/.source.replace("WCOD",vM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uf),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uf),wM=new RegExp("^"+_M+MM+bM+SM+"$"),TM=["material","materials","bones","map"],pf=class{constructor(e,t,i){let r=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yM,"")}static parseTrackName(e){let t=wM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);TM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=pf;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GE=new Float32Array(1);var ug=new at,Wi=class{constructor(e,t,i=0,r=1/0){this.ray=new Xr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ug),this}intersectObject(e,t=!0,i=[]){return mf(e,this,i,t),i.sort(hg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mf(e[r],this,i,t);return i.sort(hg),i}};function hg(n,e){return n.distance-e.distance}function mf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)mf(s[o],e,t,!0)}}var dg=new M,yc=new M,Ws=new M,qs=new M,tf=new M,AM=new M,EM=new M,Ja=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dg.subVectors(e,this.start),yc.subVectors(this.end,this.start);let i=yc.dot(yc),s=yc.dot(dg)/i;return t&&(s=Ke(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=AM,i=EM){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Ws.subVectors(c,a),qs.subVectors(u,l),tf.subVectors(a,l);let d=Ws.dot(Ws),f=qs.dot(qs),h=qs.dot(tf);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=Ke(o,0,1);else{let p=Ws.dot(tf);if(f<=r)o=0,s=Ke(-p/d,0,1);else{let x=Ws.dot(qs),m=d*f-x*x;m!==0?s=Ke((x*h-p*f)/m,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=Ke(-p/d,0,1)):o>1&&(o=1,s=Ke((x-p)/d,0,1))}}return t.copy(a).add(Ws.multiplyScalar(s)),i.copy(l).add(qs.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ff(n,e,t,i){let r=CM(i);switch(t){case wf:return n*e;case du:return n*e/r.components*r.byteLength;case fu:return n*e/r.components*r.byteLength;case Af:return n*e*2/r.components*r.byteLength;case pu:return n*e*2/r.components*r.byteLength;case Tf:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case mu:return n*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xu:case vu:return Math.max(n,16)*Math.max(e,8)/4;case gu:case yu:return Math.max(n,8)*Math.max(e,8)/2;case _u:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bu:case Ou:case zu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vu:case ku:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gu:case Hu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CM(n){switch(n){case Gn:case _f:return{byteLength:1,components:1};case fo:case Mf:case Si:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case yr:case cu:case hi:return{byteLength:4,components:1};case bf:case Sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function DM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM=`#ifdef USE_BATCHING
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
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ib=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
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
#endif`,Lb=`struct PhysicalMaterial {
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
}`,Db=`
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
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
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,V1=`#if DEPTH_PACKING == 3200
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
}`,k1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,Z1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define MATCAP
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
}`,K1=`#define MATCAP
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
}`,Q1=`#define NORMAL
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
}`,eS=`#define NORMAL
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
}`,tS=`#define PHONG
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
}`,nS=`#define PHONG
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
}`,iS=`#define STANDARD
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
}`,rS=`#define STANDARD
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
}`,sS=`#define TOON
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
}`,oS=`#define TOON
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
}`,aS=`uniform float size;
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#include <common>
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
}`,uS=`uniform vec3 color;
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
}`,hS=`uniform float rotation;
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
}`,dS=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:UM,alphahash_pars_fragment:FM,alphamap_fragment:NM,alphamap_pars_fragment:BM,alphatest_fragment:OM,alphatest_pars_fragment:zM,aomap_fragment:VM,aomap_pars_fragment:kM,batching_pars_vertex:GM,batching_vertex:HM,begin_vertex:WM,beginnormal_vertex:qM,bsdfs:XM,iridescence_fragment:YM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:KM,color_fragment:QM,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:hb,envmap_fragment:db,envmap_common_pars_fragment:fb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:xb,fog_pars_vertex:yb,fog_fragment:vb,fog_pars_fragment:_b,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:bb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:wb,lights_pars_begin:Tb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Cb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Lb,lights_fragment_begin:Db,lights_fragment_maps:Ub,lights_fragment_end:Fb,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:zb,map_fragment:Vb,map_pars_fragment:kb,map_particle_fragment:Gb,map_particle_pars_fragment:Hb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Xb,morphcolor_vertex:Yb,morphnormal_vertex:Zb,morphtarget_pars_vertex:jb,morphtarget_vertex:Jb,normal_fragment_begin:$b,normal_fragment_maps:Kb,normal_pars_fragment:Qb,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:o1,opaque_fragment:a1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:x1,shadowmask_pars_fragment:y1,skinbase_vertex:v1,skinning_pars_vertex:_1,skinning_vertex:M1,skinnormal_vertex:b1,specularmap_fragment:S1,specularmap_pars_fragment:w1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:E1,transmission_pars_fragment:C1,uv_pars_fragment:R1,uv_pars_vertex:P1,uv_vertex:I1,worldpos_vertex:L1,background_vert:D1,background_frag:U1,backgroundCube_vert:F1,backgroundCube_frag:N1,cube_vert:B1,cube_frag:O1,depth_vert:z1,depth_frag:V1,distanceRGBA_vert:k1,distanceRGBA_frag:G1,equirect_vert:H1,equirect_frag:W1,linedashed_vert:q1,linedashed_frag:X1,meshbasic_vert:Y1,meshbasic_frag:Z1,meshlambert_vert:j1,meshlambert_frag:J1,meshmatcap_vert:$1,meshmatcap_frag:K1,meshnormal_vert:Q1,meshnormal_frag:eS,meshphong_vert:tS,meshphong_frag:nS,meshphysical_vert:iS,meshphysical_frag:rS,meshtoon_vert:sS,meshtoon_frag:oS,points_vert:aS,points_frag:lS,shadow_vert:cS,shadow_frag:uS,sprite_vert:hS,sprite_frag:dS},Ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},wi={basic:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Ue.points,Ue.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Ue.common,Ue.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Ue.sprite,Ue.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Ue.common,Ue.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Ue.lights,Ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};wi.physical={uniforms:xn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Xu={r:0,b:0,g:0},is=new rn,fS=new at;function pS(n,e,t,i,r,s,o){let a=new De(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,E=p(w);E===null?g(a,l):E&&E.isColor&&(g(E,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,v){let E=p(v);E&&(E.isCubeTexture||E.mapping===Ka)?(u===void 0&&(u=new Be(new et(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ns(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),is.copy(v.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fS.makeRotationFromEuler(is)),u.material.toneMapped=ut.getTransfer(E.colorSpace)!==Mt,(d!==E||f!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Be(new $t(2,2),new hn({name:"BackgroundMaterial",uniforms:ns(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,v){w.getRGB(Xu,If(n)),i.buffers.color.setClear(Xu.r,Xu.g,Xu.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:x,addToRenderList:m,dispose:b}}function mS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(_,A,F,N,G){let W=!1,k=d(N,F,A);s!==k&&(s=k,c(s.object)),W=h(_,N,F,G),W&&p(_,N,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(_,A,F,N),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,A,F){let N=F.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let W=G[A.id];W===void 0&&(W={},G[A.id]=W);let k=W[N];return k===void 0&&(k=f(l()),W[N]=k),k}function f(_){let A=[],F=[],N=[];for(let G=0;G<t;G++)A[G]=0,F[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:N,object:_,attributes:{},index:null}}function h(_,A,F,N){let G=s.attributes,W=A.attributes,k=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let ce=G[B],ie=W[B];if(ie===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),ce===void 0||ce.attribute!==ie||ie&&ce.data!==ie.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function p(_,A,F,N){let G={},W=A.attributes,k=0,J=F.getAttributes();for(let B in J)if(J[B].location>=0){let ce=W[B];ce===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor));let ie={};ie.attribute=ce,ce&&ce.data&&(ie.data=ce.data),G[B]=ie,k++}s.attributes=G,s.attributesNum=k,s.index=N}function x(){let _=s.newAttributes;for(let A=0,F=_.length;A<F;A++)_[A]=0}function m(_){g(_,0)}function g(_,A){let F=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;F[_]=1,N[_]===0&&(n.enableVertexAttribArray(_),N[_]=1),G[_]!==A&&(n.vertexAttribDivisor(_,A),G[_]=A)}function b(){let _=s.newAttributes,A=s.enabledAttributes;for(let F=0,N=A.length;F<N;F++)A[F]!==_[F]&&(n.disableVertexAttribArray(F),A[F]=0)}function w(_,A,F,N,G,W,k){k===!0?n.vertexAttribIPointer(_,A,F,G,W):n.vertexAttribPointer(_,A,F,N,G,W)}function v(_,A,F,N){x();let G=N.attributes,W=F.getAttributes(),k=A.defaultAttributeValues;for(let J in W){let B=W[J];if(B.location>=0){let oe=G[J];if(oe===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),oe!==void 0){let ce=oe.normalized,ie=oe.itemSize,se=e.get(oe);if(se===void 0)continue;let we=se.buffer,me=se.type,fe=se.bytesPerElement,Q=me===n.INT||me===n.UNSIGNED_INT||oe.gpuType===cu;if(oe.isInterleavedBufferAttribute){let ne=oe.data,xe=ne.stride,Pe=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let V=0;V<B.locationSize;V++)g(B.location+V,ne.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let V=0;V<B.locationSize;V++)m(B.location+V);n.bindBuffer(n.ARRAY_BUFFER,we);for(let V=0;V<B.locationSize;V++)w(B.location+V,ie/B.locationSize,me,ce,xe*fe,(Pe+ie/B.locationSize*V)*fe,Q)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)g(B.location+ne,oe.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,ie/B.locationSize,me,ce,ie*fe,ie/B.locationSize*ne*fe,Q)}}else if(k!==void 0){let ce=k[J];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(B.location,ce);break;case 3:n.vertexAttrib3fv(B.location,ce);break;case 4:n.vertexAttrib4fv(B.location,ce);break;default:n.vertexAttrib1fv(B.location,ce)}}}}b()}function E(){U();for(let _ in i){let A=i[_];for(let F in A){let N=A[F];for(let G in N)u(N[G].object),delete N[G];delete A[F]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let F in A){let N=A[F];for(let G in N)u(N[G].object),delete N[G];delete A[F]}delete i[_.id]}function L(_){for(let A in i){let F=i[A];if(F[_.id]===void 0)continue;let N=F[_.id];for(let G in N)u(N[G].object),delete N[G];delete F[_.id]}}function U(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function gS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==In&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Gn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function yS(n){let e=this,t=null,i=0,r=!1,s=!1,o=new En,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,w=b*4,v=g.clippingState||null;l.value=v,v=u(p,f,w,h);for(let E=0;E!==w;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=h;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vS(n){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=es:a===au&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ho||a===au)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var xo=4,l0=[.125,.215,.35,.446,.526,.582],os=20,Nf=new Za,c0=new De,Bf=null,Of=0,zf=0,Vf=!1,ss=(1+Math.sqrt(5))/2,go=1/ss,u0=[new M(-ss,go,0),new M(ss,go,0),new M(-go,0,ss),new M(go,0,ss),new M(0,ss,-go),new M(0,ss,go),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],_S=new M,vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=_S}=s;Bf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,Of,zf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Si,format:In,colorSpace:qr,depthBuffer:!1},r=h0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MS(s)),this._blurMaterial=bS(s,e,t)}return r}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Nf)}_sceneToCubeUV(e,t,i,r,s){let l=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(c0),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new vt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new Be(new et,x),g=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,g=!0):(x.color.copy(c0),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let E=this._cubeSize;Yu(r,v*E,w>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Yu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=u0[(r-s-1)%u0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Be(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*os-1),x=s/p,m=isFinite(s)?1+Math.floor(u*x):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let g=[],b=0;for(let L=0;L<os;++L){let U=L/x,S=Math.exp(-U*U/2);g.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<g.length;L++)g[L]=g[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let v=this._sizeLods[r],E=3*v*(r>w-xo?r-w+xo:0),T=4*(this._cubeSize-v);Yu(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(d,Nf)}};function MS(n){let e=[],t=[],i=[],r=n,s=n-xo+1+l0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xo?l=l0[o-n+xo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,m=2,g=1,b=new Float32Array(x*p*h),w=new Float32Array(m*p*h),v=new Float32Array(g*p*h);for(let T=0;T<h;T++){let L=T%3*2/3-1,U=T>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(S,x*p*T),w.set(f,m*p*T);let _=[T,T,T,T,T,T];v.set(_,g*p*T)}let E=new $e;E.setAttribute("position",new ht(b,x)),E.setAttribute("uv",new ht(w,m)),E.setAttribute("faceIndex",new ht(v,g)),e.push(E),r>xo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function h0(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bS(n,e,t){let i=new Float32Array(os),r=new M(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function d0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function f0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jf(){return`

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
	`}function SS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ho||l===au,u=l===es||l===ts;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new vo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new vo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TS(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let b=h.array;x=h.version;for(let w=0,v=b.length;w<v;w+=3){let E=b[w+0],T=b[w+1],L=b[w+2];f.push(E,T,T,L,L,E)}}else if(p!==void 0){let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let E=w+0,T=w+1,L=w+2;f.push(E,T,T,L,L,E)}}else return;let m=new(Pf(f)?Ma:Yr)(f,1);m.version=x;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function AS(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function d(f,h,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let g=0;for(let b=0;b<p;b++)g+=h[b]*x[b];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ES(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CS(n,e,t){let i=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*d),L=new _a(T,v,E,d);L.type=hi,L.needsUpdate=!0;let U=w*4;for(let _=0;_<d;_++){let A=m[_],F=g[_],N=b[_],G=v*E*4*_;for(let W=0;W<A.count;W++){let k=W*U;h===!0&&(r.fromBufferAttribute(A,W),T[G+k+0]=r.x,T[G+k+1]=r.y,T[G+k+2]=r.z,T[G+k+3]=0),p===!0&&(r.fromBufferAttribute(F,W),T[G+k+4]=r.x,T[G+k+5]=r.y,T[G+k+6]=r.z,T[G+k+7]=0),x===!0&&(r.fromBufferAttribute(N,W),T[G+k+8]=r.x,T[G+k+9]=r.y,T[G+k+10]=r.z,T[G+k+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Se(v,E)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function RS(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var L0=new gn,p0=new Ia(1,1),D0=new _a,U0=new Cc,F0=new Sa,m0=[],g0=[],x0=new Float32Array(16),y0=new Float32Array(9),v0=new Float32Array(4);function _o(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=m0[r];if(s===void 0&&(s=new Float32Array(r),m0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ju(n,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function LS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function DS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function US(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;v0.set(i),n.uniformMatrix2fv(this.addr,!1,v0),on(t,i)}}function FS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;y0.set(i),n.uniformMatrix3fv(this.addr,!1,y0),on(t,i)}}function NS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;x0.set(i),n.uniformMatrix4fv(this.addr,!1,x0),on(t,i)}}function BS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function OS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function zS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function VS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function kS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function HS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function WS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function qS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(p0.compareFunction=Ef,s=p0):s=L0,t.setTexture2D(e||s,r)}function XS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||U0,r)}function YS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||F0,r)}function ZS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||D0,r)}function jS(n){switch(n){case 5126:return PS;case 35664:return IS;case 35665:return LS;case 35666:return DS;case 35674:return US;case 35675:return FS;case 35676:return NS;case 5124:case 35670:return BS;case 35667:case 35671:return OS;case 35668:case 35672:return zS;case 35669:case 35673:return VS;case 5125:return kS;case 36294:return GS;case 36295:return HS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return ZS}}function JS(n,e){n.uniform1fv(this.addr,e)}function $S(n,e){let t=_o(e,this.size,2);n.uniform2fv(this.addr,t)}function KS(n,e){let t=_o(e,this.size,3);n.uniform3fv(this.addr,t)}function QS(n,e){let t=_o(e,this.size,4);n.uniform4fv(this.addr,t)}function ew(n,e){let t=_o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tw(n,e){let t=_o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nw(n,e){let t=_o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iw(n,e){n.uniform1iv(this.addr,e)}function rw(n,e){n.uniform2iv(this.addr,e)}function sw(n,e){n.uniform3iv(this.addr,e)}function ow(n,e){n.uniform4iv(this.addr,e)}function aw(n,e){n.uniform1uiv(this.addr,e)}function lw(n,e){n.uniform2uiv(this.addr,e)}function cw(n,e){n.uniform3uiv(this.addr,e)}function uw(n,e){n.uniform4uiv(this.addr,e)}function hw(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||L0,s[o])}function dw(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||U0,s[o])}function fw(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||F0,s[o])}function pw(n,e,t){let i=this.cache,r=e.length,s=Ju(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||D0,s[o])}function mw(n){switch(n){case 5126:return JS;case 35664:return $S;case 35665:return KS;case 35666:return QS;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return pw}}var Gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jS(t.type)}},Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mw(t.type)}},Wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},kf=/(\w+)(\])?(\[|\.)?/g;function _0(n,e){n.seq.push(e),n.map[e.id]=e}function gw(n,e,t){let i=n.name,r=i.length;for(kf.lastIndex=0;;){let s=kf.exec(i),o=kf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_0(t,c===void 0?new Gf(a,n,e):new Hf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Wf(a),_0(t,d)),t=d}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gw(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function M0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xw=37297,yw=0;function vw(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var b0=new nt;function _w(n){ut._getMatrix(b0,ut.workingColorSpace,n);let e=`mat3( ${b0.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function S0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+vw(n.getShaderSource(e),a)}else return s}function Mw(n,e){let t=_w(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bw(n,e){let t;switch(e){case Ng:t="Linear";break;case Bg:t="Reinhard";break;case Og:t="Cineon";break;case ou:t="ACESFilmic";break;case Vg:t="AgX";break;case kg:t="Neutral";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zu=new M;function Sw(){ut.getLuminanceCoefficients(Zu);let n=Zu.x.toFixed(4),e=Zu.y.toFixed(4),t=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function Tw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Aw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rl(n){return n!==""}function w0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(n){return n.replace(Ew,Rw)}var Cw=new Map;function Rw(n,e){let t=st[e];if(t===void 0){let i=Cw.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qf(t)}var Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(n){return n.replace(Pw,Iw)}function Iw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function E0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Lw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$a?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Fw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case Ug:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function Nw(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bw(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Lw(t),c=Dw(t),u=Uw(t),d=Fw(t),f=Nw(t),h=ww(t),p=Tw(s),x=r.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rl).join(`
`),g.length>0&&(g+=`
`)):(m=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),g=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?st.tonemapping_pars_fragment:"",t.toneMapping!==Xi?bw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Mw("linearToOutputTexel",t.outputColorSpace),Sw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=qf(o),o=w0(o,t),o=T0(o,t),a=qf(a),a=w0(a,t),a=T0(a,t),o=A0(o),a=A0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=b+m+o,v=b+g+a,E=M0(r,r.VERTEX_SHADER,w),T=M0(r,r.FRAGMENT_SHADER,v);r.attachShader(x,E),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(E)||"",G=r.getShaderInfoLog(T)||"",W=F.trim(),k=N.trim(),J=G.trim(),B=!0,oe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,T);else{let ce=S0(r,E,"vertex"),ie=S0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+ce+`
`+ie)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||J==="")&&(oe=!1);oe&&(A.diagnostics={runnable:B,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:g}})}r.deleteShader(E),r.deleteShader(T),U=new yo(r,x),S=Aw(r,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,xw)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var Ow=0,Xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yf(e),t.set(e,i)),i}},Yf=class{constructor(e){this.id=Ow++,this.code=e,this.usedTimes=0}};function zw(n,e,t,i,r,s,o){let a=new Ks,l=new Xf,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,A,F,N){let G=F.fog,W=N.geometry,k=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),B=J&&J.mapping===Ka?J.image.height:null,oe=p[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=ce!==void 0?ce.length:0,se=0;W.morphAttributes.position!==void 0&&(se=1),W.morphAttributes.normal!==void 0&&(se=2),W.morphAttributes.color!==void 0&&(se=3);let we,me,fe,Q;if(oe){let xt=wi[oe];we=xt.vertexShader,me=xt.fragmentShader}else we=S.vertexShader,me=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);let ne=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,V=N.isBatchedMesh===!0,ge=!!S.map,Me=!!S.matcap,C=!!J,Y=!!S.aoMap,te=!!S.lightMap,Z=!!S.bumpMap,D=!!S.normalMap,X=!!S.displacementMap,O=!!S.emissiveMap,ee=!!S.metalnessMap,le=!!S.roughnessMap,de=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,I=S.iridescence>0,H=S.sheen>0,re=S.transmission>0,j=de&&!!S.anisotropyMap,ye=R&&!!S.clearcoatMap,pe=R&&!!S.clearcoatNormalMap,be=R&&!!S.clearcoatRoughnessMap,_e=I&&!!S.iridescenceMap,he=I&&!!S.iridescenceThicknessMap,Te=H&&!!S.sheenColorMap,ze=H&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Re=!!S.specularColorMap,We=!!S.specularIntensityMap,q=re&&!!S.transmissionMap,Ce=re&&!!S.thicknessMap,Le=!!S.gradientMap,Ne=!!S.alphaMap,Ee=S.alphaTest>0,ve=!!S.alphaHash,He=!!S.extensions,tt=Xi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Ct={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:we,fragmentShader:me,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:V,batchingColor:V&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:qr,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:Me,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:te,bumpMap:Z,normalMap:D,displacementMap:f&&X,emissiveMap:O,normalMapObjectSpace:D&&S.normalMapType===qg,normalMapTangentSpace:D&&S.normalMapType===Wu,metalnessMap:ee,roughnessMap:le,anisotropy:de,anisotropyMap:j,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:be,dispersion:y,iridescence:I,iridescenceMap:_e,iridescenceThicknessMap:he,sheen:H,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Ae,specularColorMap:Re,specularIntensityMap:We,transmission:re,transmissionMap:q,thicknessMap:Ce,gradientMap:Le,opaque:S.transparent===!1&&S.blending===Hr&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ee,alphaHash:ve,combine:S.combine,mapUv:ge&&x(S.map.channel),aoMapUv:Y&&x(S.aoMap.channel),lightMapUv:te&&x(S.lightMap.channel),bumpMapUv:Z&&x(S.bumpMap.channel),normalMapUv:D&&x(S.normalMap.channel),displacementMapUv:X&&x(S.displacementMap.channel),emissiveMapUv:O&&x(S.emissiveMap.channel),metalnessMapUv:ee&&x(S.metalnessMap.channel),roughnessMapUv:le&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Ae&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:q&&x(S.transmissionMap.channel),thicknessMapUv:Ce&&x(S.thicknessMap.channel),alphaMapUv:Ne&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ge||Ne),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:O&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||V)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)_.push(A),_.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(b(_,S),w(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function b(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function w(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let _=p[S.type],A;if(_){let F=wi[_];A=qu.clone(F.uniforms)}else A=S.uniforms;return A}function E(S,_){let A;for(let F=0,N=u.length;F<N;F++){let G=u[F];if(G.cacheKey===_){A=G,++A.usedTimes;break}}return A===void 0&&(A=new Bw(n,_,S,s),u.push(A)),A}function T(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:U}}function Vw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function C0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function R0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.push(g):h.transparent===!0?r.push(g):t.push(g)}function l(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||kw),i.length>1&&i.sort(f||C0),r.length>1&&r.sort(f||C0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Gw(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new R0,n.set(i,[o])):r>=s.length?(o=new R0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new De};break;case"SpotLight":t={position:new M,direction:new M,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function Ww(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qw=0;function Xw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yw(n){let e=new Hw,t=Ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let r=new M,s=new at,o=new at;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,p=0,x=0,m=0,g=0,b=0,w=0,v=0,E=0,T=0,L=0;c.sort(Xw);for(let S=0,_=c.length;S<_;S++){let A=c[S],F=A.color,N=A.intensity,G=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],N);L++}else if(A.isDirectionalLight){let k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,B=t.get(A);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=A.shadow.matrix,b++}i.directional[h]=k,h++}else if(A.isSpotLight){let k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=G,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[x]=k;let J=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,J.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[x]=J.matrix,A.castShadow){let B=t.get(A);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=W,v++}x++}else if(A.isRectAreaLight){let k=e.get(A);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=k,m++}else if(A.isPointLight){let k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let J=A.shadow,B=t.get(A);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=A.shadow.matrix,w++}i.point[p]=k,p++}else if(A.isHemisphereLight){let k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(N),k.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[g]=k,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==g||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==v||U.numSpotMaps!==E||U.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=g,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=v,U.numSpotMaps=E,U.numLightProbes=L,i.version=qw++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let w=c[g];if(w.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(w.isSpotLight){let v=i.spot[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function P0(n){let e=new Yw(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zw(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new P0(n),e.set(r,[a])):s>=o.length?(a=new P0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jw=`uniform sampler2D shadow_pass;
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
}`;function $w(n,e,t){let i=new io,r=new Se,s=new Se,o=new lt,a=new zc({depthPacking:Wg}),l=new Vc,c={},u=t.maxTextureSize,d={[ai]:dn,[dn]:ai,[qt]:qt},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:jw,fragmentShader:Jw}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let g=this.type;this.render=function(T,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=g!==bi&&this.type===bi,G=g===bi&&this.type!==bi;for(let W=0,k=T.length;W<k;W++){let J=T[W],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let oe=B.getFrameExtents();if(r.multiply(oe),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,B.mapSize.y=s.y)),B.map===null||N===!0||G===!0){let ie=this.type!==bi?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(r.x,r.y,ie),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ce=B.getViewportCount();for(let ie=0;ie<ce;ie++){let se=B.getViewport(ie);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(o),B.updateMatrices(J,ie),i=B.getFrustum(),v(L,U,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===bi&&b(B,U),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,A)};function b(T,L){let U=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,U,h,x,null)}function w(T,L,U,S){let _=null,A=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)_=A;else if(_=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=_.uuid,N=L.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let W=G[N];W===void 0&&(W=_.clone(),G[N]=W,L.addEventListener("dispose",E)),_=W}if(_.visible=L.visible,_.wireframe=L.wireframe,S===bi?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:d[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let F=n.properties.get(_);F.light=U}return _}function v(T,L,U,S,_){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let N=e.update(T),G=T.material;if(Array.isArray(G)){let W=N.groups;for(let k=0,J=W.length;k<J;k++){let B=W[k],oe=G[B.materialIndex];if(oe&&oe.visible){let ce=w(T,oe,S,_);T.onBeforeShadow(n,T,L,U,N,ce,B),n.renderBufferDirect(U,null,N,ce,T,B),T.onAfterShadow(n,T,L,U,N,ce,B)}}}else if(G.visible){let W=w(T,G,S,_);T.onBeforeShadow(n,T,L,U,N,W,null),n.renderBufferDirect(U,null,N,W,T,null),T.onAfterShadow(n,T,L,U,N,W,null)}}let F=T.children;for(let N=0,G=F.length;N<G;N++)v(F[N],L,U,S,_)}function E(T){T.target.removeEventListener("dispose",E);for(let U in c){let S=c[U],_=T.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Kw={[Kc]:Qc,[eu]:iu,[tu]:ru,[Wr]:nu,[Qc]:Kc,[iu]:eu,[ru]:tu,[nu]:Wr};function Qw(n,e){function t(){let q=!1,Ce=new lt,Le=null,Ne=new lt(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!q&&(n.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,ve,He,tt,Ct){Ct===!0&&(Ee*=tt,ve*=tt,He*=tt),Ce.set(Ee,ve,He,tt),Ne.equals(Ce)===!1&&(n.clearColor(Ee,ve,He,tt),Ne.copy(Ce))},reset:function(){q=!1,Le=null,Ne.set(-1,0,0,0)}}}function i(){let q=!1,Ce=!1,Le=null,Ne=null,Ee=null;return{setReversed:function(ve){if(Ce!==ve){let He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=ve;let tt=Ee;Ee=null,this.setClear(tt)}},getReversed:function(){return Ce},setTest:function(ve){ve?ne(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ve){Le!==ve&&!q&&(n.depthMask(ve),Le=ve)},setFunc:function(ve){if(Ce&&(ve=Kw[ve]),Ne!==ve){switch(ve){case Kc:n.depthFunc(n.NEVER);break;case Qc:n.depthFunc(n.ALWAYS);break;case eu:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case nu:n.depthFunc(n.GEQUAL);break;case iu:n.depthFunc(n.GREATER);break;case ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=ve}},setLocked:function(ve){q=ve},setClear:function(ve){Ee!==ve&&(Ce&&(ve=1-ve),n.clearDepth(ve),Ee=ve)},reset:function(){q=!1,Le=null,Ne=null,Ee=null,Ce=!1}}}function r(){let q=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,He=null,tt=null,Ct=null;return{setTest:function(xt){q||(xt?ne(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!q&&(n.stencilMask(xt),Ce=xt)},setFunc:function(xt,Di,xi){(Le!==xt||Ne!==Di||Ee!==xi)&&(n.stencilFunc(xt,Di,xi),Le=xt,Ne=Di,Ee=xi)},setOp:function(xt,Di,xi){(ve!==xt||He!==Di||tt!==xi)&&(n.stencilOp(xt,Di,xi),ve=xt,He=Di,tt=xi)},setLocked:function(xt){q=xt},setClear:function(xt){Ct!==xt&&(n.clearStencil(xt),Ct=xt)},reset:function(){q=!1,Ce=null,Le=null,Ne=null,Ee=null,ve=null,He=null,tt=null,Ct=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,b=null,w=null,v=null,E=null,T=null,L=new De(0,0,0),U=0,S=!1,_=null,A=null,F=null,N=null,G=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=J>=2);let oe=null,ce={},ie=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),we=new lt().fromArray(ie),me=new lt().fromArray(se);function fe(q,Ce,Le,Ne){let Ee=new Uint8Array(4),ve=n.createTexture();n.bindTexture(q,ve),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Le;He++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ce+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ve}let Q={};Q[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Wr),Z(!1),D(gf),ne(n.CULL_FACE),Y(qi);function ne(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function xe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Pe(q,Ce){return d[q]!==Ce?(n.bindFramebuffer(q,Ce),d[q]=Ce,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function V(q,Ce){let Le=h,Ne=!1;if(q){Le=f.get(Ce),Le===void 0&&(Le=[],f.set(Ce,Le));let Ee=q.textures;if(Le.length!==Ee.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)Le[ve]=n.COLOR_ATTACHMENT0+ve;Le.length=Ee.length,Ne=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Le)}function ge(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let Me={[mr]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[yg]:n.FUNC_REVERSE_SUBTRACT};Me[vg]=n.MIN,Me[_g]=n.MAX;let C={[Mg]:n.ZERO,[bg]:n.ONE,[Sg]:n.SRC_COLOR,[Mc]:n.SRC_ALPHA,[Rg]:n.SRC_ALPHA_SATURATE,[Eg]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[wg]:n.ONE_MINUS_SRC_COLOR,[bc]:n.ONE_MINUS_SRC_ALPHA,[Cg]:n.ONE_MINUS_DST_COLOR,[Ag]:n.ONE_MINUS_DST_ALPHA,[Pg]:n.CONSTANT_COLOR,[Ig]:n.ONE_MINUS_CONSTANT_COLOR,[Lg]:n.CONSTANT_ALPHA,[Dg]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(q,Ce,Le,Ne,Ee,ve,He,tt,Ct,xt){if(q===qi){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),q!==gg){if(q!==m||xt!==S){if((g!==mr||v!==mr)&&(n.blendEquation(n.FUNC_ADD),g=mr,v=mr),xt)switch(q){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,w=null,E=null,T=null,L.set(0,0,0),U=0,m=q,S=xt}return}Ee=Ee||Ce,ve=ve||Le,He=He||Ne,(Ce!==g||Ee!==v)&&(n.blendEquationSeparate(Me[Ce],Me[Ee]),g=Ce,v=Ee),(Le!==b||Ne!==w||ve!==E||He!==T)&&(n.blendFuncSeparate(C[Le],C[Ne],C[ve],C[He]),b=Le,w=Ne,E=ve,T=He),(tt.equals(L)===!1||Ct!==U)&&(n.blendColor(tt.r,tt.g,tt.b,Ct),L.copy(tt),U=Ct),m=q,S=!1}function te(q,Ce){q.side===qt?xe(n.CULL_FACE):ne(n.CULL_FACE);let Le=q.side===dn;Ce&&(Le=!Le),Z(Le),q.blending===Hr&&q.transparent===!1?Y(qi):Y(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Ne=q.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),O(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(q){_!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),_=q)}function D(q){q!==fg?(ne(n.CULL_FACE),q!==A&&(q===gf?n.cullFace(n.BACK):q===pg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),A=q}function X(q){q!==F&&(k&&n.lineWidth(q),F=q)}function O(q,Ce,Le){q?(ne(n.POLYGON_OFFSET_FILL),(N!==Ce||G!==Le)&&(n.polygonOffset(Ce,Le),N=Ce,G=Le)):xe(n.POLYGON_OFFSET_FILL)}function ee(q){q?ne(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function le(q){q===void 0&&(q=n.TEXTURE0+W-1),oe!==q&&(n.activeTexture(q),oe=q)}function de(q,Ce,Le){Le===void 0&&(oe===null?Le=n.TEXTURE0+W-1:Le=oe);let Ne=ce[Le];Ne===void 0&&(Ne={type:void 0,texture:void 0},ce[Le]=Ne),(Ne.type!==q||Ne.texture!==Ce)&&(oe!==Le&&(n.activeTexture(Le),oe=Le),n.bindTexture(q,Ce||Q[q]),Ne.type=q,Ne.texture=Ce)}function R(){let q=ce[oe];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function re(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(q){we.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),we.copy(q))}function ze(q){me.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),me.copy(q))}function Ae(q,Ce){let Le=c.get(Ce);Le===void 0&&(Le=new WeakMap,c.set(Ce,Le));let Ne=Le.get(q);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ce,q.name),Le.set(q,Ne))}function Re(q,Ce){let Ne=c.get(Ce).get(q);l.get(Ce)!==Ne&&(n.uniformBlockBinding(Ce,Ne,q.__bindingPointIndex),l.set(Ce,Ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,ce={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,b=null,w=null,v=null,E=null,T=null,L=new De(0,0,0),U=0,S=!1,_=null,A=null,F=null,N=null,G=null,we.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:xe,bindFramebuffer:Pe,drawBuffers:V,useProgram:ge,setBlending:Y,setMaterial:te,setFlipSided:Z,setCullFace:D,setLineWidth:X,setPolygonOffset:O,setScissorTest:ee,activeTexture:le,bindTexture:de,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:_e,texImage3D:he,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:pe,texStorage3D:be,texSubImage2D:H,texSubImage3D:re,compressedTexSubImage2D:j,compressedTexSubImage3D:ye,scissor:Te,viewport:ze,reset:We}}function eT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,y){return h?new OffscreenCanvas(R,y):js("canvas")}function x(R,y,I){let H=1,re=de(R);if((re.width>I||re.height>I)&&(H=I/Math.max(re.width,re.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(H*re.width),ye=Math.floor(H*re.height);d===void 0&&(d=p(j,ye));let pe=y?p(j,ye):d;return pe.width=j,pe.height=ye,pe.getContext("2d").drawImage(R,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+j+"x"+ye+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,I,H,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(I===n.FLOAT&&(j=n.R32F),I===n.HALF_FLOAT&&(j=n.R16F),I===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.R8UI),I===n.UNSIGNED_SHORT&&(j=n.R16UI),I===n.UNSIGNED_INT&&(j=n.R32UI),I===n.BYTE&&(j=n.R8I),I===n.SHORT&&(j=n.R16I),I===n.INT&&(j=n.R32I)),y===n.RG&&(I===n.FLOAT&&(j=n.RG32F),I===n.HALF_FLOAT&&(j=n.RG16F),I===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RG8UI),I===n.UNSIGNED_SHORT&&(j=n.RG16UI),I===n.UNSIGNED_INT&&(j=n.RG32UI),I===n.BYTE&&(j=n.RG8I),I===n.SHORT&&(j=n.RG16I),I===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGB8UI),I===n.UNSIGNED_SHORT&&(j=n.RGB16UI),I===n.UNSIGNED_INT&&(j=n.RGB32UI),I===n.BYTE&&(j=n.RGB8I),I===n.SHORT&&(j=n.RGB16I),I===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),I===n.UNSIGNED_INT&&(j=n.RGBA32UI),I===n.BYTE&&(j=n.RGBA8I),I===n.SHORT&&(j=n.RGBA16I),I===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){let ye=re?ya:ut.getTransfer(H);I===n.FLOAT&&(j=n.RGBA32F),I===n.HALF_FLOAT&&(j=n.RGBA16F),I===n.UNSIGNED_BYTE&&(j=ye===Mt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(R,y){let I;return R?y===null||y===yr||y===po?I=n.DEPTH24_STENCIL8:y===hi?I=n.DEPTH32F_STENCIL8:y===fo&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yr||y===po?I=n.DEPTH_COMPONENT24:y===hi?I=n.DEPTH_COMPONENT32F:y===fo&&(I=n.DEPTH_COMPONENT16),I}function E(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){let y=R.target;y.removeEventListener("dispose",T),U(y),y.isVideoTexture&&u.delete(y)}function L(R){let y=R.target;y.removeEventListener("dispose",L),_(y)}function U(R){let y=i.get(R);if(y.__webglInit===void 0)return;let I=R.source,H=f.get(I);if(H){let re=H[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(H).length===0&&f.delete(I)}i.remove(R)}function S(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let I=R.source,H=f.get(I);delete H[y.__cacheKey],o.memory.textures--}function _(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let re=0;re<y.__webglFramebuffer[H].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[H][re]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let I=R.textures;for(let H=0,re=I.length;H<re;H++){let j=i.get(I[H]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(R)}let A=0;function F(){A=0}function N(){let R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function G(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){let I=i.get(R);if(R.isVideoTexture&&ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let H=R.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+y)}function k(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){Q(I,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+y)}function J(R,y){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){Q(I,R,y);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+y)}function B(R,y){let I=i.get(R);if(R.version>0&&I.__version!==R.version){ne(I,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+y)}let oe={[Yn]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Sc]:n.MIRRORED_REPEAT},ce={[cn]:n.NEAREST,[Gg]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[lu]:n.LINEAR_MIPMAP_NEAREST,[Pn]:n.LINEAR_MIPMAP_LINEAR},ie={[Xg]:n.NEVER,[Kg]:n.ALWAYS,[Yg]:n.LESS,[Ef]:n.LEQUAL,[Zg]:n.EQUAL,[$g]:n.GEQUAL,[jg]:n.GREATER,[Jg]:n.NOTEQUAL};function se(R,y){if(y.type===hi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===lu||y.magFilter===Qa||y.magFilter===Pn||y.minFilter===un||y.minFilter===lu||y.minFilter===Qa||y.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ce[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===cn||y.minFilter!==Qa&&y.minFilter!==Pn||y.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function we(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));let H=y.source,re=f.get(H);re===void 0&&(re={},f.set(H,re));let j=G(y);if(j!==R.__cacheKey){re[j]===void 0&&(re[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),re[j].usedTimes++;let ye=re[R.__cacheKey];ye!==void 0&&(re[R.__cacheKey].usedTimes--,ye.usedTimes===0&&S(y)),R.__cacheKey=j,R.__webglTexture=re[j].texture}return I}function me(R,y,I){return Math.floor(Math.floor(R/I)/y)}function fe(R,y,I,H){let j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,I,H,y.data);else{j.sort((he,Te)=>he.start-Te.start);let ye=0;for(let he=1;he<j.length;he++){let Te=j[ye],ze=j[he],Ae=Te.start+Te.count,Re=me(ze.start,y.width,4),We=me(Te.start,y.width,4);ze.start<=Ae+1&&Re===We&&me(ze.start+ze.count-1,y.width,4)===Re?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++ye,j[ye]=ze)}j.length=ye+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let he=0,Te=j.length;he<Te;he++){let ze=j[he],Ae=Math.floor(ze.start/4),Re=Math.ceil(ze.count/4),We=Ae%y.width,q=Math.floor(Ae/y.width),Ce=Re,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,We,q,Ce,Le,I,H,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Q(R,y,I){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);let re=we(R,y),j=y.source;t.bindTexture(H,R.__webglTexture,n.TEXTURE0+I);let ye=i.get(j);if(j.version!==ye.__version||re===!0){t.activeTexture(n.TEXTURE0+I);let pe=ut.getPrimaries(ut.workingColorSpace),be=y.colorSpace===Yi?null:ut.getPrimaries(y.colorSpace),_e=y.colorSpace===Yi||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let he=x(y.image,!1,r.maxTextureSize);he=le(y,he);let Te=s.convert(y.format,y.colorSpace),ze=s.convert(y.type),Ae=w(y.internalFormat,Te,ze,y.colorSpace,y.isVideoTexture);se(H,y);let Re,We=y.mipmaps,q=y.isVideoTexture!==!0,Ce=ye.__version===void 0||re===!0,Le=j.dataReady,Ne=E(y,he);if(y.isDepthTexture)Ae=v(y.format===mo,y.type),Ce&&(q?t.texStorage2D(n.TEXTURE_2D,1,Ae,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,Te,ze,null));else if(y.isDataTexture)if(We.length>0){q&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ae,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,Te,ze,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Re.width,Re.height,0,Te,ze,Re.data);y.generateMipmaps=!1}else q?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ae,he.width,he.height),Le&&fe(y,he,Te,ze)):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,Te,ze,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){q&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ae,We[0].width,We[0].height,he.depth);for(let Ee=0,ve=We.length;Ee<ve;Ee++)if(Re=We[Ee],y.format!==In)if(Te!==null)if(q){if(Le)if(y.layerUpdates.size>0){let He=Ff(Re.width,Re.height,y.format,y.type);for(let tt of y.layerUpdates){let Ct=Re.data.subarray(tt*He/Re.data.BYTES_PER_ELEMENT,(tt+1)*He/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,tt,Re.width,Re.height,1,Te,Ct)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,Te,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Re.width,Re.height,he.depth,Te,ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,Re.width,Re.height,he.depth,0,Te,ze,Re.data)}else{q&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,Ae,We[0].width,We[0].height);for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],y.format!==In?Te!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,Ae,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Re.width,Re.height,Te,ze,Re.data):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Re.width,Re.height,0,Te,ze,Re.data)}else if(y.isDataArrayTexture)if(q){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Ae,he.width,he.height,he.depth),Le)if(y.layerUpdates.size>0){let Ee=Ff(he.width,he.height,y.format,y.type);for(let ve of y.layerUpdates){let He=he.data.subarray(ve*Ee/he.data.BYTES_PER_ELEMENT,(ve+1)*Ee/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,he.width,he.height,1,Te,ze,He)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,ze,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,he.width,he.height,he.depth,0,Te,ze,he.data);else if(y.isData3DTexture)q?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ne,Ae,he.width,he.height,he.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,ze,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,he.width,he.height,he.depth,0,Te,ze,he.data);else if(y.isFramebufferTexture){if(Ce)if(q)t.texStorage2D(n.TEXTURE_2D,Ne,Ae,he.width,he.height);else{let Ee=he.width,ve=he.height;for(let He=0;He<Ne;He++)t.texImage2D(n.TEXTURE_2D,He,Ae,Ee,ve,0,Te,ze,null),Ee>>=1,ve>>=1}}else if(We.length>0){if(q&&Ce){let Ee=de(We[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Ae,Ee.width,Ee.height)}for(let Ee=0,ve=We.length;Ee<ve;Ee++)Re=We[Ee],q?Le&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Te,ze,Re):t.texImage2D(n.TEXTURE_2D,Ee,Ae,Te,ze,Re);y.generateMipmaps=!1}else if(q){if(Ce){let Ee=de(he);t.texStorage2D(n.TEXTURE_2D,Ne,Ae,Ee.width,Ee.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,ze,he)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Te,ze,he);m(y)&&g(H),ye.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ne(R,y,I){if(y.image.length!==6)return;let H=we(R,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);let j=i.get(re);if(re.version!==j.__version||H===!0){t.activeTexture(n.TEXTURE0+I);let ye=ut.getPrimaries(ut.workingColorSpace),pe=y.colorSpace===Yi?null:ut.getPrimaries(y.colorSpace),be=y.colorSpace===Yi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!_e&&!he?Te[ve]=x(y.image[ve],!0,r.maxCubemapSize):Te[ve]=he?y.image[ve].image:y.image[ve],Te[ve]=le(y,Te[ve]);let ze=Te[0],Ae=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),We=w(y.internalFormat,Ae,Re,y.colorSpace),q=y.isVideoTexture!==!0,Ce=j.__version===void 0||H===!0,Le=re.dataReady,Ne=E(y,ze);se(n.TEXTURE_CUBE_MAP,y);let Ee;if(_e){q&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,ze.width,ze.height);for(let ve=0;ve<6;ve++){Ee=Te[ve].mipmaps;for(let He=0;He<Ee.length;He++){let tt=Ee[He];y.format!==In?Ae!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Ae,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,tt.width,tt.height,Ae,Re,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,We,tt.width,tt.height,0,Ae,Re,tt.data)}}}else{if(Ee=y.mipmaps,q&&Ce){Ee.length>0&&Ne++;let ve=de(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,We,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(he){q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Ae,Re,Te[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Te[ve].width,Te[ve].height,0,Ae,Re,Te[ve].data);for(let He=0;He<Ee.length;He++){let Ct=Ee[He].image[ve].image;q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ct.width,Ct.height,Ae,Re,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,Ct.width,Ct.height,0,Ae,Re,Ct.data)}}else{q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae,Re,Te[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,We,Ae,Re,Te[ve]);for(let He=0;He<Ee.length;He++){let tt=Ee[He];q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ae,Re,tt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,We,Ae,Re,tt.image[ve])}}}m(y)&&g(n.TEXTURE_CUBE_MAP),j.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,I,H,re,j){let ye=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),be=w(I.internalFormat,ye,pe,I.colorSpace),_e=i.get(y),he=i.get(I);if(he.__renderTarget=y,!_e.__hasExternalTextures){let Te=Math.max(1,y.width>>j),ze=Math.max(1,y.height>>j);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,j,be,Te,ze,y.depth,0,ye,pe,null):t.texImage2D(re,j,be,Te,ze,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,re,he.__webglTexture,0,X(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,re,he.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,y,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let H=y.depthTexture,re=H&&H.isDepthTexture?H.type:null,j=v(y.stencilBuffer,re),ye=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=X(y);O(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,j,y.width,y.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,R)}else{let H=y.textures;for(let re=0;re<H.length;re++){let j=H[re],ye=s.convert(j.format,j.colorSpace),pe=s.convert(j.type),be=w(j.internalFormat,ye,pe,j.colorSpace),_e=X(y);I&&O(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,be,y.width,y.height):O(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,be,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,be,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let re=H.__webglTexture,j=X(y);if(y.depthTexture.format===Ys)O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===mo)O(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ge(R){let y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",re)};H.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=H}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let H=R.texture.mipmaps;H&&H.length>0?V(y.__webglFramebuffer[0],R):V(y.__webglFramebuffer,R)}else if(I){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),Pe(y.__webglDepthbuffer[H],R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Pe(y.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(R,y,I){let H=i.get(R);y!==void 0&&xe(H.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ge(R)}function C(R){let y=R.texture,I=i.get(R),H=i.get(y);R.addEventListener("dispose",L);let re=R.textures,j=R.isWebGLCubeRenderTarget===!0,ye=re.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let be=0;be<y.mipmaps.length;be++)I.__webglFramebuffer[pe][be]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,be=re.length;pe<be;pe++){let _e=i.get(re[pe]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&O(R)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){let be=re[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);let _e=s.convert(be.format,be.colorSpace),he=s.convert(be.type),Te=w(be.internalFormat,_e,he,be.colorSpace,R.isXRRenderTarget===!0),ze=X(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),se(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(I.__webglFramebuffer[pe][be],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else xe(I.__webglFramebuffer[pe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(y)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,be=re.length;pe<be;pe++){let _e=re[pe],he=i.get(_e),Te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),se(Te,_e),xe(I.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+pe,Te,0),m(_e)&&g(Te)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,H.__webglTexture),se(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(I.__webglFramebuffer[be],R,y,n.COLOR_ATTACHMENT0,pe,be);else xe(I.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,pe,0);m(y)&&g(pe),t.unbindTexture()}R.depthBuffer&&ge(R)}function Y(R){let y=R.textures;for(let I=0,H=y.length;I<H;I++){let re=y[I];if(m(re)){let j=b(R),ye=i.get(re).__webglTexture;t.bindTexture(j,ye),g(j),t.unbindTexture()}}}let te=[],Z=[];function D(R){if(R.samples>0){if(O(R)===!1){let y=R.textures,I=R.width,H=R.height,re=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),pe=y.length>1;if(pe)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let he=i.get(y[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,re,n.NEAREST),l===!0&&(te.length=0,Z.length=0,te.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(j),Z.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);let he=i.get(y[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function X(R){return Math.min(r.maxSamples,R.samples)}function O(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function le(R,y){let I=R.colorSpace,H=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==qr&&I!==Yi&&(ut.getTransfer(I)===Mt?(H!==In||re!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function de(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Me,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=O}function tT(n,e){function t(i,r=Yi){let s,o=ut.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_f)return n.BYTE;if(i===Mf)return n.SHORT;if(i===fo)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===yr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===wf)return n.ALPHA;if(i===Tf)return n.RGB;if(i===In)return n.RGBA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===mo)return n.DEPTH_STENCIL;if(i===du)return n.RED;if(i===fu)return n.RED_INTEGER;if(i===Af)return n.RG;if(i===pu)return n.RG_INTEGER;if(i===mu)return n.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gu||i===xu||i===yu||i===vu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_u||i===Mu||i===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_u||i===Mu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Su||i===wu||i===Tu||i===Au||i===Eu||i===Cu||i===Ru||i===Pu||i===Iu||i===Lu||i===Du||i===Uu||i===Fu||i===Nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Su)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Au)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ru)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Du)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bu||i===Ou||i===zu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bu)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===ku||i===Gu||i===Hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iT=`
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

}`,Zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:nT,fragmentShader:iT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jf=class extends Vi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",m=new Zf,g={},b=t.getContextAttributes(),w=null,v=null,E=[],T=[],L=new Se,U=null,S=new Wt;S.viewport=new lt;let _=new Wt;_.viewport=new lt;let A=[S,_],F=new $c,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=E[Q];return ne===void 0&&(ne=new Qs,E[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=E[Q];return ne===void 0&&(ne=new Qs,E[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=E[Q];return ne===void 0&&(ne=new Qs,E[Q]=ne),ne.getHandSpace()};function W(Q){let ne=T.indexOf(Q.inputSource);if(ne===-1)return;let xe=E[ne];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||o),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<E.length;Q++){let ne=T[Q];ne!==null&&(T[Q]=null,E[Q].disconnect(ne))}N=null,G=null,m.reset();for(let Q in g)delete g[Q];e.setRenderTarget(w),h=null,f=null,d=null,r=null,v=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",k),r.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,V=null;b.depth&&(V=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?mo:Ys,Pe=b.stencil?po:yr);let ge={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Rn(f.textureWidth,f.textureHeight,{format:In,type:Gn,depthTexture:new Ia(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Rn(h.framebufferWidth,h.framebufferHeight,{format:In,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Q){for(let ne=0;ne<Q.removed.length;ne++){let xe=Q.removed[ne],Pe=T.indexOf(xe);Pe>=0&&(T[Pe]=null,E[Pe].disconnect(xe))}for(let ne=0;ne<Q.added.length;ne++){let xe=Q.added[ne],Pe=T.indexOf(xe);if(Pe===-1){for(let ge=0;ge<E.length;ge++)if(ge>=T.length){T.push(xe),Pe=ge;break}else if(T[ge]===null){T[ge]=xe,Pe=ge;break}if(Pe===-1)break}let V=E[Pe];V&&V.connect(xe)}}let B=new M,oe=new M;function ce(Q,ne,xe){B.setFromMatrixPosition(ne.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let Pe=B.distanceTo(oe),V=ne.projectionMatrix.elements,ge=xe.projectionMatrix.elements,Me=V[14]/(V[10]-1),C=V[14]/(V[10]+1),Y=(V[9]+1)/V[5],te=(V[9]-1)/V[5],Z=(V[8]-1)/V[0],D=(ge[8]+1)/ge[0],X=Me*Z,O=Me*D,ee=Pe/(-Z+D),le=ee*-Z;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(le),Q.translateZ(ee),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),V[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let de=Me+ee,R=C+ee,y=X-le,I=O+(Pe-le),H=Y*C/R*de,re=te*C/R*de;Q.projectionMatrix.makePerspective(y,I,H,re,de,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ie(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,xe=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),F.near=_.near=S.near=ne,F.far=_.far=S.far=xe,(N!==F.near||G!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=Q.layers.mask|6,S.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;let Pe=Q.parent,V=F.cameras;ie(F,Pe);for(let ge=0;ge<V.length;ge++)ie(V[ge],Pe);V.length===2?ce(F,S,_):F.projectionMatrix.copy(S.projectionMatrix),se(Q,F,Pe)};function se(Q,ne,xe){xe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Zs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return g[Q]};let we=null;function me(Q,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Pe=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let C=0;C<xe.length;C++){let Y=xe[C],te=null;if(h!==null)te=h.getViewport(Y);else{let D=d.getViewSubImage(f,Y);te=D.viewport,C===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let Z=A[C];Z===void 0&&(Z=new Wt,Z.layers.enable(C),Z.viewport=new lt,A[C]=Z),Z.matrix.fromArray(Y.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Y.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(te.x,te.y,te.width,te.height),C===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Z)}let V=r.enabledFeatures;if(V&&V.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let C=d.getDepthInformation(xe[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(V&&V.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let C=0;C<xe.length;C++){let Y=xe[C].camera;if(Y){let te=g[Y];te||(te=new La,g[Y]=te);let Z=d.getCameraImage(Y);te.sourceTexture=Z}}}}for(let xe=0;xe<E.length;xe++){let Pe=T[xe],V=E[xe];Pe!==null&&V!==void 0&&V.update(Pe,ne,c||o)}we&&we(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let fe=new I0;fe.setAnimationLoop(me),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}},rs=new rn,rT=new at;function sT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,If(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,b,w,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,rs.copy(v),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(rs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oT(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let v=w.program;i.uniformBlockBinding(b,v)}function c(b,w){let v=r[b.id];v===void 0&&(p(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));let E=w.program;i.updateUBOMapping(b,E);let T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function u(b){let w=d();b.__bindingPointIndex=w;let v=n.createBuffer(),E=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=r[b.id],v=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,L=v.length;T<L;T++){let U=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,_=U.length;S<_;S++){let A=U[S];if(h(A,T,S,E)===!0){let F=A.__offset,N=Array.isArray(A.value)?A.value:[A.value],G=0;for(let W=0;W<N.length;W++){let k=N[W],J=x(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,F+G,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,v,E){let T=b.value,L=w+"_"+v;if(E[L]===void 0)return typeof T=="number"||typeof T=="boolean"?E[L]=T:E[L]=T.clone(),!0;{let U=E[L];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return E[L]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function p(b){let w=b.uniforms,v=0,E=16;for(let L=0,U=w.length;L<U;L++){let S=Array.isArray(w[L])?w[L]:[w[L]];for(let _=0,A=S.length;_<A;_++){let F=S[_],N=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=N.length;G<W;G++){let k=N[G],J=x(k),B=v%E,oe=B%J.boundary,ce=B+oe;v+=oe,ce!==0&&E-ce<J.storage&&(v+=E-ce),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=J.storage}}}let T=v%E;return T>0&&(v+=E-T),b.__size=v,b.__cache={},this}function x(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var ju=class{constructor(e={}){let{canvas:t=Qg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=ft;let T=0,L=0,U=null,S=-1,_=null,A=new lt,F=new lt,N=null,G=new De(0),W=0,k=t.width,J=t.height,B=1,oe=null,ce=null,ie=new lt(0,0,k,J),se=new lt(0,0,k,J),we=!1,me=new io,fe=!1,Q=!1,ne=new at,xe=new M,Pe=new lt,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function Me(){return U===null?B:1}let C=i;function Y(P,$){return t.getContext(P,$)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),C===null){let $="webgl2";if(C=Y($,P),C===null)throw Y($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,Z,D,X,O,ee,le,de,R,y,I,H,re,j,ye,pe,be,_e,he,Te,ze,Ae,Re,We;function q(){te=new wS(C),te.init(),Ae=new tT(C,te),Z=new xS(C,te,e,Ae),D=new Qw(C,te),Z.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),X=new ES(C),O=new Vw,ee=new eT(C,te,D,O,Z,Ae,X),le=new vS(v),de=new SS(v),R=new DM(C),Re=new mS(C,R),y=new TS(C,R,X,Re),I=new RS(C,y,R,X),he=new CS(C,Z,ee),pe=new yS(O),H=new zw(v,le,de,te,Z,Re,pe),re=new sT(v,O),j=new Gw,ye=new Zw(te),_e=new pS(v,le,de,D,I,h,l),be=new $w(v,I,Z),We=new oT(C,X,Z,D),Te=new gS(C,te,X),ze=new AS(C,te,X),X.programs=H.programs,v.capabilities=Z,v.extensions=te,v.properties=O,v.renderLists=j,v.shadowMap=be,v.state=D,v.info=X}q();let Ce=new jf(v,C);this.xr=Ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(k,J,!1))},this.getSize=function(P){return P.set(k,J)},this.setSize=function(P,$,ae=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,J=$,t.width=Math.floor(P*B),t.height=Math.floor($*B),ae===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(k*B,J*B).floor()},this.setDrawingBufferSize=function(P,$,ae){k=P,J=$,B=ae,t.width=Math.floor(P*ae),t.height=Math.floor($*ae),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ie)},this.setViewport=function(P,$,ae,ue){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,$,ae,ue),D.viewport(A.copy(ie).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(se)},this.setScissor=function(P,$,ae,ue){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,$,ae,ue),D.scissor(F.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){D.setScissorTest(we=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,ae=!0){let ue=0;if(P){let K=!1;if(U!==null){let Ie=U.texture.format;K=Ie===mu||Ie===pu||Ie===fu}if(K){let Ie=U.texture.type,Fe=Ie===Gn||Ie===yr||Ie===fo||Ie===po||Ie===uu||Ie===hu,Ge=_e.getClearColor(),ke=_e.getClearAlpha(),je=Ge.r,Je=Ge.g,Xe=Ge.b;Fe?(p[0]=je,p[1]=Je,p[2]=Xe,p[3]=ke,C.clearBufferuiv(C.COLOR,0,p)):(x[0]=je,x[1]=Je,x[2]=Xe,x[3]=ke,C.clearBufferiv(C.COLOR,0,x))}else ue|=C.COLOR_BUFFER_BIT}$&&(ue|=C.DEPTH_BUFFER_BIT),ae&&(ue|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),j.dispose(),ye.dispose(),O.dispose(),le.dispose(),de.dispose(),I.dispose(),Re.dispose(),We.dispose(),H.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",xi),Ce.removeEventListener("sessionend",bm),Nr.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=X.autoReset,$=be.enabled,ae=be.autoUpdate,ue=be.needsUpdate,K=be.type;q(),X.autoReset=P,be.enabled=$,be.autoUpdate=ae,be.needsUpdate=ue,be.type=K}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ve(P){let $=P.target;$.removeEventListener("dispose",ve),He($)}function He(P){tt(P),O.remove(P)}function tt(P){let $=O.get(P).programs;$!==void 0&&($.forEach(function(ae){H.releaseProgram(ae)}),P.isShaderMaterial&&H.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ae,ue,K,Ie){$===null&&($=V);let Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ge=e_(P,$,ae,ue,K);D.setMaterial(ue,Fe);let ke=ae.index,je=1;if(ue.wireframe===!0){if(ke=y.getWireframeAttribute(ae),ke===void 0)return;je=2}let Je=ae.drawRange,Xe=ae.attributes.position,ot=Je.start*je,wt=(Je.start+Je.count)*je;Ie!==null&&(ot=Math.max(ot,Ie.start*je),wt=Math.min(wt,(Ie.start+Ie.count)*je)),ke!==null?(ot=Math.max(ot,0),wt=Math.min(wt,ke.count)):Xe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,Xe.count));let Ht=wt-ot;if(Ht<0||Ht===1/0)return;Re.setup(K,ue,Ge,ae,ke);let Pt,Et=Te;if(ke!==null&&(Pt=R.get(ke),Et=ze,Et.setIndex(Pt)),K.isMesh)ue.wireframe===!0?(D.setLineWidth(ue.wireframeLinewidth*Me()),Et.setMode(C.LINES)):Et.setMode(C.TRIANGLES);else if(K.isLine){let Ze=ue.linewidth;Ze===void 0&&(Ze=1),D.setLineWidth(Ze*Me()),K.isLineSegments?Et.setMode(C.LINES):K.isLineLoop?Et.setMode(C.LINE_LOOP):Et.setMode(C.LINE_STRIP)}else K.isPoints?Et.setMode(C.POINTS):K.isSprite&&Et.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ze=K._multiDrawStarts,Ot=K._multiDrawCounts,dt=K._multiDrawCount,Fn=ke?R.get(ke).bytesPerElement:1,Ts=O.get(ue).currentProgram.getUniforms();for(let Nn=0;Nn<dt;Nn++)Ts.setValue(C,"_gl_DrawID",Nn),Et.render(Ze[Nn]/Fn,Ot[Nn])}else if(K.isInstancedMesh)Et.renderInstances(ot,Ht,K.count);else if(ae.isInstancedBufferGeometry){let Ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ot=Math.min(ae.instanceCount,Ze);Et.renderInstances(ot,Ht,Ot)}else Et.render(ot,Ht)};function Ct(P,$,ae){P.transparent===!0&&P.side===qt&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,Gl(P,$,ae),P.side=ai,P.needsUpdate=!0,Gl(P,$,ae),P.side=qt):Gl(P,$,ae)}this.compile=function(P,$,ae=null){ae===null&&(ae=P),g=ye.get(ae),g.init($),w.push(g),ae.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),P!==ae&&P.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();let ue=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ie=K.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let Ge=Ie[Fe];Ct(Ge,ae,K),ue.add(Ge)}else Ct(Ie,ae,K),ue.add(Ie)}),g=w.pop(),ue},this.compileAsync=function(P,$,ae=null){let ue=this.compile(P,$,ae);return new Promise(K=>{function Ie(){if(ue.forEach(function(Fe){O.get(Fe).currentProgram.isReady()&&ue.delete(Fe)}),ue.size===0){K(P);return}setTimeout(Ie,10)}te.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let xt=null;function Di(P){xt&&xt(P)}function xi(){Nr.stop()}function bm(){Nr.start()}let Nr=new I0;Nr.setAnimationLoop(Di),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(P){xt=P,Ce.setAnimationLoop(P),P===null?Nr.stop():Nr.start()},Ce.addEventListener("sessionstart",xi),Ce.addEventListener("sessionend",bm),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera($),$=Ce.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,$,U),g=ye.get(P,w.length),g.init($),w.push(g),ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),me.setFromProjectionMatrix(ne,oi,$.reversedDepth),Q=this.localClippingEnabled,fe=pe.init(this.clippingPlanes,Q),m=j.get(P,b.length),m.init(),b.push(m),Ce.enabled===!0&&Ce.isPresenting===!0){let Ie=v.xr.getDepthSensingMesh();Ie!==null&&Td(Ie,$,-1/0,v.sortObjects)}Td(P,$,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,ce),ge=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ge&&_e.addToRenderList(m,P),this.info.render.frame++,fe===!0&&pe.beginShadows();let ae=g.state.shadowsArray;be.render(ae,P,$),fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=m.opaque,K=m.transmissive;if(g.setupLights(),$.isArrayCamera){let Ie=$.cameras;if(K.length>0)for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++){let ke=Ie[Fe];wm(ue,K,P,ke)}ge&&_e.render(P);for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++){let ke=Ie[Fe];Sm(m,P,ke,ke.viewport)}}else K.length>0&&wm(ue,K,P,$),ge&&_e.render(P),Sm(m,P,$);U!==null&&L===0&&(ee.updateMultisampleRenderTarget(U),ee.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(v,P,$),Re.resetDefaultState(),S=-1,_=null,w.pop(),w.length>0?(g=w[w.length-1],fe===!0&&pe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Td(P,$,ae,ue){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||me.intersectsSprite(P)){ue&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ne);let Fe=I.update(P),Ge=P.material;Ge.visible&&m.push(P,Fe,Ge,ae,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||me.intersectsObject(P))){let Fe=I.update(P),Ge=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(ne)),Array.isArray(Ge)){let ke=Fe.groups;for(let je=0,Je=ke.length;je<Je;je++){let Xe=ke[je],ot=Ge[Xe.materialIndex];ot&&ot.visible&&m.push(P,Fe,ot,ae,Pe.z,Xe)}}else Ge.visible&&m.push(P,Fe,Ge,ae,Pe.z,null)}}let Ie=P.children;for(let Fe=0,Ge=Ie.length;Fe<Ge;Fe++)Td(Ie[Fe],$,ae,ue)}function Sm(P,$,ae,ue){let K=P.opaque,Ie=P.transmissive,Fe=P.transparent;g.setupLightsView(ae),fe===!0&&pe.setGlobalState(v.clippingPlanes,ae),ue&&D.viewport(A.copy(ue)),K.length>0&&kl(K,$,ae),Ie.length>0&&kl(Ie,$,ae),Fe.length>0&&kl(Fe,$,ae),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function wm(P,$,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new Rn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Si:Gn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Ie=g.state.transmissionRenderTarget[ue.id],Fe=ue.viewport||A;Ie.setSize(Fe.z*v.transmissionResolutionScale,Fe.w*v.transmissionResolutionScale);let Ge=v.getRenderTarget(),ke=v.getActiveCubeFace(),je=v.getActiveMipmapLevel();v.setRenderTarget(Ie),v.getClearColor(G),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),ge&&_e.render(ae);let Je=v.toneMapping;v.toneMapping=Xi;let Xe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),fe===!0&&pe.setGlobalState(v.clippingPlanes,ue),kl(P,ae,ue),ee.updateMultisampleRenderTarget(Ie),ee.updateRenderTargetMipmap(Ie),te.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let wt=0,Ht=$.length;wt<Ht;wt++){let Pt=$[wt],Et=Pt.object,Ze=Pt.geometry,Ot=Pt.material,dt=Pt.group;if(Ot.side===qt&&Et.layers.test(ue.layers)){let Fn=Ot.side;Ot.side=dn,Ot.needsUpdate=!0,Tm(Et,ae,ue,Ze,Ot,dt),Ot.side=Fn,Ot.needsUpdate=!0,ot=!0}}ot===!0&&(ee.updateMultisampleRenderTarget(Ie),ee.updateRenderTargetMipmap(Ie))}v.setRenderTarget(Ge,ke,je),v.setClearColor(G,W),Xe!==void 0&&(ue.viewport=Xe),v.toneMapping=Je}function kl(P,$,ae){let ue=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ie=P.length;K<Ie;K++){let Fe=P[K],Ge=Fe.object,ke=Fe.geometry,je=Fe.group,Je=Fe.material;Je.allowOverride===!0&&ue!==null&&(Je=ue),Ge.layers.test(ae.layers)&&Tm(Ge,$,ae,ke,Je,je)}}function Tm(P,$,ae,ue,K,Ie){P.onBeforeRender(v,$,ae,ue,K,Ie),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(v,$,ae,ue,P,Ie),K.transparent===!0&&K.side===qt&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,v.renderBufferDirect(ae,$,ue,K,P,Ie),K.side=ai,K.needsUpdate=!0,v.renderBufferDirect(ae,$,ue,K,P,Ie),K.side=qt):v.renderBufferDirect(ae,$,ue,K,P,Ie),P.onAfterRender(v,$,ae,ue,K,Ie)}function Gl(P,$,ae){$.isScene!==!0&&($=V);let ue=O.get(P),K=g.state.lights,Ie=g.state.shadowsArray,Fe=K.state.version,Ge=H.getParameters(P,K.state,Ie,$,ae),ke=H.getProgramCacheKey(Ge),je=ue.programs;ue.environment=P.isMeshStandardMaterial?$.environment:null,ue.fog=$.fog,ue.envMap=(P.isMeshStandardMaterial?de:le).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,je===void 0&&(P.addEventListener("dispose",ve),je=new Map,ue.programs=je);let Je=je.get(ke);if(Je!==void 0){if(ue.currentProgram===Je&&ue.lightsStateVersion===Fe)return Em(P,Ge),Je}else Ge.uniforms=H.getUniforms(P),P.onBeforeCompile(Ge,v),Je=H.acquireProgram(Ge,ke),je.set(ke,Je),ue.uniforms=Ge.uniforms;let Xe=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),Em(P,Ge),ue.needsLights=n_(P),ue.lightsStateVersion=Fe,ue.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ue.currentProgram=Je,ue.uniformsList=null,Je}function Am(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=yo.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Em(P,$){let ae=O.get(P);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function e_(P,$,ae,ue,K){$.isScene!==!0&&($=V),ee.resetTextureUnits();let Ie=$.fog,Fe=ue.isMeshStandardMaterial?$.environment:null,Ge=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qr,ke=(ue.isMeshStandardMaterial?de:le).get(ue.envMap||Fe),je=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Je=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Xe=!!ae.morphAttributes.position,ot=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color,Ht=Xi;ue.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ht=v.toneMapping);let Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,Ze=O.get(ue),Ot=g.state.lights;if(fe===!0&&(Q===!0||P!==_)){let Mn=P===_&&ue.id===S;pe.setState(ue,P,Mn)}let dt=!1;ue.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ot.state.version||Ze.outputColorSpace!==Ge||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==ke||ue.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==Je||Ze.morphTargets!==Xe||Ze.morphNormals!==ot||Ze.morphColors!==wt||Ze.toneMapping!==Ht||Ze.morphTargetsCount!==Et)&&(dt=!0):(dt=!0,Ze.__version=ue.version);let Fn=Ze.currentProgram;dt===!0&&(Fn=Gl(ue,$,K));let Ts=!1,Nn=!1,ea=!1,zt=Fn.getUniforms(),Wn=Ze.uniforms;if(D.useProgram(Fn.program)&&(Ts=!0,Nn=!0,ea=!0),ue.id!==S&&(S=ue.id,Nn=!0),Ts||_!==P){D.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),zt.setValue(C,"projectionMatrix",P.projectionMatrix),zt.setValue(C,"viewMatrix",P.matrixWorldInverse);let An=zt.map.cameraPosition;An!==void 0&&An.setValue(C,xe.setFromMatrixPosition(P.matrixWorld)),Z.logarithmicDepthBuffer&&zt.setValue(C,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&zt.setValue(C,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Nn=!0,ea=!0)}if(K.isSkinnedMesh){zt.setOptional(C,K,"bindMatrix"),zt.setOptional(C,K,"bindMatrixInverse");let Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),zt.setValue(C,"boneTexture",Mn.boneTexture,ee))}K.isBatchedMesh&&(zt.setOptional(C,K,"batchingTexture"),zt.setValue(C,"batchingTexture",K._matricesTexture,ee),zt.setOptional(C,K,"batchingIdTexture"),zt.setValue(C,"batchingIdTexture",K._indirectTexture,ee),zt.setOptional(C,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(C,"batchingColorTexture",K._colorsTexture,ee));let qn=ae.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&he.update(K,ae,Fn),(Nn||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,zt.setValue(C,"receiveShadow",K.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Wn.envMap.value=ke,Wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&$.environment!==null&&(Wn.envMapIntensity.value=$.environmentIntensity),Nn&&(zt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&t_(Wn,ea),Ie&&ue.fog===!0&&re.refreshFogUniforms(Wn,Ie),re.refreshMaterialUniforms(Wn,ue,B,J,g.state.transmissionRenderTarget[P.id]),yo.upload(C,Am(Ze),Wn,ee)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(yo.upload(C,Am(Ze),Wn,ee),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&zt.setValue(C,"center",K.center),zt.setValue(C,"modelViewMatrix",K.modelViewMatrix),zt.setValue(C,"normalMatrix",K.normalMatrix),zt.setValue(C,"modelMatrix",K.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let Mn=ue.uniformsGroups;for(let An=0,Ad=Mn.length;An<Ad;An++){let Br=Mn[An];We.update(Br,Fn),We.bind(Br,Fn)}}return Fn}function t_(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function n_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,$,ae){let ue=O.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),O.get(P.texture).__webglTexture=$,O.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ae,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){let ae=O.get(P);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0};let i_=C.createFramebuffer();this.setRenderTarget=function(P,$=0,ae=0){U=P,T=$,L=ae;let ue=!0,K=null,Ie=!1,Fe=!1;if(P){let ke=O.get(P);if(ke.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(C.FRAMEBUFFER,null),ue=!1;else if(ke.__webglFramebuffer===void 0)ee.setupRenderTarget(P);else if(ke.__hasExternalTextures)ee.rebindTextures(P,O.get(P.texture).__webglTexture,O.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&O.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(P)}}let je=P.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);let Je=O.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[$])?K=Je[$][ae]:K=Je[$],Ie=!0):P.samples>0&&ee.useMultisampledRTT(P)===!1?K=O.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[ae]:K=Je,A.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else A.copy(ie).multiplyScalar(B).floor(),F.copy(se).multiplyScalar(B).floor(),N=we;if(ae!==0&&(K=i_),D.bindFramebuffer(C.FRAMEBUFFER,K)&&ue&&D.drawBuffers(P,K),D.viewport(A),D.scissor(F),D.setScissorTest(N),Ie){let ke=O.get(P.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,ae)}else if(Fe){let ke=$;for(let je=0;je<P.textures.length;je++){let Je=O.get(P.textures[je]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+je,Je.__webglTexture,ae,ke)}}else if(P!==null&&ae!==0){let ke=O.get(P.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ke.__webglTexture,ae)}S=-1},this.readRenderTargetPixels=function(P,$,ae,ue,K,Ie,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=O.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){D.bindFramebuffer(C.FRAMEBUFFER,ke);try{let je=P.textures[Ge],Je=je.format,Xe=je.type;if(!Z.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ue&&ae>=0&&ae<=P.height-K&&(P.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ge),C.readPixels($,ae,ue,K,Ae.convert(Je),Ae.convert(Xe),Ie))}finally{let je=U!==null?O.get(U).__webglFramebuffer:null;D.bindFramebuffer(C.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,$,ae,ue,K,Ie,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=O.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke)if($>=0&&$<=P.width-ue&&ae>=0&&ae<=P.height-K){D.bindFramebuffer(C.FRAMEBUFFER,ke);let je=P.textures[Ge],Je=je.format,Xe=je.type;if(!Z.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.bufferData(C.PIXEL_PACK_BUFFER,Ie.byteLength,C.STREAM_READ),P.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ge),C.readPixels($,ae,ue,K,Ae.convert(Je),Ae.convert(Xe),0);let wt=U!==null?O.get(U).__webglFramebuffer:null;D.bindFramebuffer(C.FRAMEBUFFER,wt);let Ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await e0(C,Ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ie),C.deleteBuffer(ot),C.deleteSync(Ht),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,ae=0){let ue=Math.pow(2,-ae),K=Math.floor(P.image.width*ue),Ie=Math.floor(P.image.height*ue),Fe=$!==null?$.x:0,Ge=$!==null?$.y:0;ee.setTexture2D(P,0),C.copyTexSubImage2D(C.TEXTURE_2D,ae,0,0,Fe,Ge,K,Ie),D.unbindTexture()};let r_=C.createFramebuffer(),s_=C.createFramebuffer();this.copyTextureToTexture=function(P,$,ae=null,ue=null,K=0,Ie=null){Ie===null&&(K!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=K,K=0):Ie=0);let Fe,Ge,ke,je,Je,Xe,ot,wt,Ht,Pt=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,ke=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,Je=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{let qn=Math.pow(2,-K);Fe=Math.floor(Pt.width*qn),Ge=Math.floor(Pt.height*qn),P.isDataArrayTexture?ke=Pt.depth:P.isData3DTexture?ke=Math.floor(Pt.depth*qn):ke=1,je=0,Je=0,Xe=0}ue!==null?(ot=ue.x,wt=ue.y,Ht=ue.z):(ot=0,wt=0,Ht=0);let Et=Ae.convert($.format),Ze=Ae.convert($.type),Ot;$.isData3DTexture?(ee.setTexture3D($,0),Ot=C.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ee.setTexture2DArray($,0),Ot=C.TEXTURE_2D_ARRAY):(ee.setTexture2D($,0),Ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,$.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,$.unpackAlignment);let dt=C.getParameter(C.UNPACK_ROW_LENGTH),Fn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ts=C.getParameter(C.UNPACK_SKIP_PIXELS),Nn=C.getParameter(C.UNPACK_SKIP_ROWS),ea=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xe);let zt=P.isDataArrayTexture||P.isData3DTexture,Wn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){let qn=O.get(P),Mn=O.get($),An=O.get(qn.__renderTarget),Ad=O.get(Mn.__renderTarget);D.bindFramebuffer(C.READ_FRAMEBUFFER,An.__webglFramebuffer),D.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ad.__webglFramebuffer);for(let Br=0;Br<ke;Br++)zt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,O.get(P).__webglTexture,K,Xe+Br),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,O.get($).__webglTexture,Ie,Ht+Br)),C.blitFramebuffer(je,Je,Fe,Ge,ot,wt,Fe,Ge,C.DEPTH_BUFFER_BIT,C.NEAREST);D.bindFramebuffer(C.READ_FRAMEBUFFER,null),D.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||O.has(P)){let qn=O.get(P),Mn=O.get($);D.bindFramebuffer(C.READ_FRAMEBUFFER,r_),D.bindFramebuffer(C.DRAW_FRAMEBUFFER,s_);for(let An=0;An<ke;An++)zt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qn.__webglTexture,K,Xe+An):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qn.__webglTexture,K),Wn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mn.__webglTexture,Ie,Ht+An):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mn.__webglTexture,Ie),K!==0?C.blitFramebuffer(je,Je,Fe,Ge,ot,wt,Fe,Ge,C.COLOR_BUFFER_BIT,C.NEAREST):Wn?C.copyTexSubImage3D(Ot,Ie,ot,wt,Ht+An,je,Je,Fe,Ge):C.copyTexSubImage2D(Ot,Ie,ot,wt,je,Je,Fe,Ge);D.bindFramebuffer(C.READ_FRAMEBUFFER,null),D.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Wn?P.isDataTexture||P.isData3DTexture?C.texSubImage3D(Ot,Ie,ot,wt,Ht,Fe,Ge,ke,Et,Ze,Pt.data):$.isCompressedArrayTexture?C.compressedTexSubImage3D(Ot,Ie,ot,wt,Ht,Fe,Ge,ke,Et,Pt.data):C.texSubImage3D(Ot,Ie,ot,wt,Ht,Fe,Ge,ke,Et,Ze,Pt):P.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ie,ot,wt,Fe,Ge,Et,Ze,Pt.data):P.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ie,ot,wt,Pt.width,Pt.height,Et,Pt.data):C.texSubImage2D(C.TEXTURE_2D,Ie,ot,wt,Fe,Ge,Et,Ze,Pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Fn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ts),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ea),Ie===0&&$.generateMipmaps&&C.generateMipmap(Ot),D.unbindTexture()},this.initRenderTarget=function(P){O.get(P).__webglFramebuffer===void 0&&ee.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ee.setTextureCube(P,0):P.isData3DTexture?ee.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ee.setTexture2DArray(P,0):ee.setTexture2D(P,0),D.unbindTexture()},this.resetState=function(){T=0,L=0,U=null,D.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var sl=class n extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Wt;let i=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new En,d=new M,f=new M,h=new M,p=new at,x=new M(0,0,-1),m=new lt,g=new M,b=new M,w=new lt,v=new at,E=this.camera,T=new Rn(s,o,{samples:c,type:Si}),L=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:qu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=T.texture,L.uniforms.color.value=r,L.uniforms.textureMatrix.value=v,this.material=L,this.onBeforeRender=function(U,S,_){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(_.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(f,h),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(f),p.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),b.subVectors(f,x),b.reflect(d).negate(),b.add(f),E.position.copy(g),E.up.set(0,1,0),E.up.applyMatrix4(p),E.up.reflect(d),E.lookAt(b),E.far=_.far,E.updateMatrixWorld(),E.projectionMatrix.copy(_.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(E.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=E.projectionMatrix;w.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],w.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],w.z=-1,w.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(w)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,i.visible=!1;let N=U.getRenderTarget(),G=U.xr.enabled,W=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(T),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,E),U.xr.enabled=G,U.shadowMap.autoUpdate=W,U.setRenderTarget(N);let k=_.viewport;k!==void 0&&U.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),i.material.dispose()}}};sl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var $u=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function B0(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function yn(n,e,t,i=0,r=0){return B0(n,new Dt(1,i),e,t,r)}function $f(n,e,t,i=0){return B0(n,new ci(1),e,t,i)}function aT(n,e){let t=new $e;return t.setAttribute("position",new Ve(e.flat(),3)),{tone:n,geometry:t}}function N0(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return aT(n,i)}function lT(){let n=[yn("fur",[0,.012,.011],[.154,.161,.132],1),yn("fur",[0,-.065,.008],[.128,.079,.108]),yn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),yn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),N0("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),yn("skin",[0,-.061,-.133],[.102,.066,.065],1),yn("skinShade",[0,-.097,-.14],[.076,.031,.047]),yn("skin",[0,.015,-.15],[.041,.056,.038]),yn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(yn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),yn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),$f("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),yn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),yn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),yn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),yn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),yn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),yn("ink",[e*.047,.031,-.183],[.011,.012,.006]),$f("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),$f("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(N0("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function cT(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new $e;return r.setAttribute("position",new ht(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var uT=cT(lT());function Ku(n=0){let e=new tn({flatShading:!0}),t=new tn({flatShading:!0}),i=new tn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g:m,b:g}=s[f];for(let b=h;b<p;b++)u.setXYZ(b,x,m,g)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<$u.length?u:0;if(d===o)return;o=d;let f=$u[o];for(let[h,p]of Object.entries(f))(s[h]??=new De).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new ht(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new Be(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new yt;return u.add(c(uT)),u}}}var as=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],hT=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],dT=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],O0=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Qu=as.length-1,z0=Math.min(...as.map(n=>n[1])),V0=Math.max(...as.map(n=>n[1])),Zi=new M(0,0,(z0+V0)/2),eh=new M(.047,.027,(V0-z0)/2),fT=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],pT=[-.57,.57,1,.61,-.61,-1],mT=[1,1,-.04,-.91,-.91,-.04];function th(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(S=0,_=0,A=0){let F=s.length/3;return s.push(S*r,_,A),F}function c(S,_,A){i?o.push(S,A,_):o.push(S,_,A)}function u(S,_,A,F){c(S,_,A),c(S,A,F)}function d(S,_){for(let A=0;A<S.length;A++){let F=(A+1)%S.length;u(S[F],S[A],_[A],_[F])}}function f(S,_){for(let A=0;A<S.length;A++)c(_,S[(A+1)%S.length],S[A])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=as.map(([S,_,A,F],N)=>{let G=N===0||N===Qu,W=S*.67,k=-.024+(_+.024)*.69;return{top:l(S,A,_),middle:l(S*1.08,(A+F)/2,G?_:-.025+(_+.025)*1.04),bottom:l(S,F,_),innerTop:l(W,hT[N],k),innerBottom:l(W,dT[N],k)}});function m(S){let _=x[S],A=x[(S+1)%x.length];return[_.top,A.top,A.middle,A.bottom,_.bottom,_.middle]}let g=new Set(O0.map(({edge:S})=>S));g.add(Qu);for(let S=0;S<x.length;S++){let _=x[S],A=x[(S+1)%x.length];c(h,_.innerTop,A.innerTop),c(p,A.innerBottom,_.innerBottom),u(_.innerTop,_.top,A.top,A.innerTop),u(A.innerBottom,A.bottom,_.bottom,_.innerBottom),g.has(S)||(u(A.top,_.top,_.middle,A.middle),u(A.middle,_.middle,_.bottom,A.bottom))}let b=m(Qu);t||f(b,l(0,0,as[Qu][1]));let w=i?[b[1],b[0],b[5],b[4],b[3],b[2]]:b;for(let{edge:S,length:_,splay:A}of O0){let[F,N,G,W]=as[S],[k,J,B,oe]=as[S+1],ce=k-F,ie=J-N,se=-ie+ce*A,we=ce+ie*A,me=Math.hypot(se,we),fe=Math.hypot(ce,ie)/2,Q=(G+B-W-oe)/4,ne=[],xe=m(S);for(let[V,ge,Me]of fT){let C=[l(),l(),l(),l(),l(),l()];d(xe,C),ne.push({ring:C,distance:V*_,width:ge*fe,height:Me*Q}),xe=C}let Pe=l();f(xe,Pe),a.push({x:(F+k)/2,y:(G+B+W+oe)/4,z:(N+J)/2,forwardX:se/me,forwardZ:we/me,rows:ne,tip:Pe,length:_,pressure:-1})}let v=new $e,E=new Ve(s,3).setUsage(Sn);v.setAttribute("position",E),v.setIndex(o),v.boundingSphere=new Zn(new M(0,-.018,-.052),.12),v.boundingBox=new Qt(new M(-.1,-.082,-.17),new M(.1,.038,.025));let T=!0;function L(S,_=!0){let A=!1;for(let F=0;F<a.length;F++){let N=a[F],G=S?.[F],W=Number.isFinite(G)?Oe.clamp(G,0,1):0;if(W===N.pressure)continue;N.pressure=W,A=!0;let{forwardX:k,forwardZ:J,length:B,rows:oe,tip:ce}=N,ie=N.x,se=N.z,we=N.y,me=0,fe=0;for(let{ring:xe,distance:Pe,width:V,height:ge}of oe){let Me=Pe/B,C=Oe.smoothstep(Me,0,.57),Y=Oe.smoothstep(Me,.38,1),te=(.17+W*.83)*C+(.14+W*.76)*Y,Z=(te+me)/2,D=Pe-fe,X=Math.cos(Z)*D;ie+=k*X,we-=Math.sin(Z)*D,se+=J*X;for(let O=0;O<xe.length;O++){let ee=pT[O]*V,le=mT[O]*ge,de=le*Math.sin(te);E.setXYZ(xe[O],r*(ie+J*ee+k*de),we+le*Math.cos(te),se-k*ee+J*de)}me=te,fe=Pe}let Q=B-fe,ne=Q*Math.cos(me);E.setXYZ(ce,r*(ie+k*ne),we-Q*Math.sin(me),se+J*ne)}A&&(E.needsUpdate=!0,T=!0),_&&T&&(v.computeVertexNormals(),T=!1)}L(),v.getAttribute("normal").setUsage(Sn);let U=new Be(v,e);return U.castShadow=!0,{mesh:U,pose:L,wristIndices:w}}var vr=12,Kf=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],gT=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],k0=Kf.flatMap(([n,e,t])=>Array.from({length:vr},(i,r)=>{let s=(r-.5)*Math.PI*2/vr;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function nh(n,e){let t=k0.length,i=[],r=(J,B,oe,ce,ie)=>J.push(B,oe,ce,B,ce,ie);function s(J,B,oe=!1){for(let ce=1;ce<B.length-1;ce++)oe?J.push(B[0],B[ce+1],B[ce]):J.push(B[0],B[ce],B[ce+1])}let o=(J,B)=>J*vr+(B+vr)%vr;for(let J=0;J<Kf.length-1;J++)for(let B=0;B<vr;B++)(J===2||J===3)&&(B===0||B===6)||r(i,o(J,B),o(J+1,B),o(J+1,B+1),o(J,B+1));s(i,Array.from({length:vr},(J,B)=>o(0,B))),s(i,Array.from({length:vr},(J,B)=>o(Kf.length-1,B)),!0);let a=t,l=e.map(({geometry:J,wristIndices:B},oe)=>{let ce=oe===0?6:0,ie=[o(4,ce),o(4,ce+1),o(3,ce+1),o(2,ce+1),o(2,ce),o(3,ce)],se=[ie,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],we=se.at(-1),me=new Array(J.attributes.position.count);B.forEach((ne,xe)=>{me[ne]=we[xe]});for(let ne=0;ne<me.length;ne++)me[ne]??=a++;let fe=[];for(let ne=0;ne<J.index.count;ne++)fe.push(me[J.index.getX(ne)]);for(let ne=0;ne<se.length-1;ne++)for(let xe=0;xe<6;xe++){let Pe=(xe+1)%6;r(i,se[ne][xe],se[ne][Pe],se[ne+1][Pe],se[ne+1][xe])}let Q=[];return s(Q,we),{socket:ie,rings:se,wrist:we,wristIndices:B,remap:me,skin:fe,cap:Q,sign:oe===0?-1:1}}),c=new $e,u=new Ve(a*3,3).setUsage(Sn);c.setAttribute("position",u);let d=new Be(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(J,B)=>new Yr([...i,...l.flatMap((oe,ce)=>B&1<<ce?oe.skin:oe.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,m=new M,g=new M,b=new M,w=new M,v=new M,E=new M,T=new qe,L=new qe,U=new qe,S=new M(0,0,-1),_=new qe().setFromEuler(new rn(-1.42,0,0)),A=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,G=0,W=!0;function k(J,B,oe,ce,ie){let se=!!(J[0]||J[1]);if(!se&&!W&&N===oe&&G===ce)return;N=oe,G=ce,W=se;for(let me=0;me<t;me++){let[fe,Q,ne]=k0[me];u.setXYZ(me,fe*oe,Q*ce,ne*oe)}let we=0;for(let me=0;me<l.length;me++){let fe=l[me],Q=J[me],ne=e[me].geometry.attributes.position,xe=!!Q,Pe=fe.wristIndices;xe&&ie&&(we|=1<<me),p.set(0,0,0);for(let V of fe.socket)p.add(h.fromBufferAttribute(u,V));p.multiplyScalar(1/6),m.set(0,0,0);for(let V of Pe)m.add(h.fromBufferAttribute(ne,V));m.multiplyScalar(1/6).applyQuaternion(Q?.quaternion??_),xe?m.add(Q.position):m.add(h.set(p.x+fe.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),b.copy(g).normalize(),w.set(fe.sign*.38,-1,.27).addScaledVector(b,-b.dot(h.set(fe.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(g,.49),xe&&x.addScaledVector(w,Math.sqrt(Math.max(.007,B**2-g.lengthSq()*.25))*.72),T.setFromUnitVectors(S,b.subVectors(x,p).normalize()),L.copy(Q?.quaternion??_);for(let V=0;V<4;V++){let ge=V===3;E.lerpVectors(ge?x:p,ge?m:x,A[V]),U.copy(T).slerp(L,ge?.79:V*.19);for(let Me=0;Me<6;Me++){let C=gT[Me],Y=F[V];v.set(C[0]*Y,C[1]*Y*.84,0).applyQuaternion(U).add(E),u.setXYZ(fe.rings[V+1][Me],v.x,v.y,v.z)}}for(let V=0;V<fe.remap.length;V++)v.fromBufferAttribute(ne,V).applyQuaternion(L),xe?v.add(Q.position):v.add(h.set(p.x+fe.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(fe.remap[V],v.x,v.y,v.z)}c.index!==f[we]&&c.setIndex(f[we]),u.needsUpdate=!0,c.computeVertexNormals()}return k([null,null],.42,1,1,!1),{mesh:d,pose:k}}function Mo(n,e){let t=new li;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Gi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var G0=.1,xT=45,H0=55,ol=128,Qf=96,yT=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],vT=new M(0,0,-1);function ep(){let n=new yt,e=new gt({color:"#596974",roughness:.38,metalness:.6}),t=new gt({color:"#29323e",roughness:.68}),i=new vt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new Be(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new gt({color:"#7f4231",roughness:.46,metalness:.34});return r(Mo([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(Mo([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Ft(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new et(.054,.014,.073),s,.035,.045,-.099),r(new et(.018,.008,.023),i,.035,.063,-.131),n}function W0(n,{impact:e,onShot:t}){let i=ep(),r=new Be(new Dt(.045,0),new vt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new $e,o=new Ve(ol*18,3).setUsage(Sn),a=new Ve(ol*18,3);for(let N=0;N<ol;N++)for(let G=0;G<6;G++){let W=yT[Math.floor(G/2)];a.setXYZ(N*6+G,W.r,W.g,W.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new jr(s,new Mi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Ve(Qf*3,3).setUsage(Sn),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Pa(u,new ro({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:$n}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:ol},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Qf},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,m=new M,g=0,b=0,w=0,v=0,E=0,T=!1;function L(N,G,W,k){for(let J=0;J<W;J++){let B=h[b++%Qf];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(k).addScaledVector(G,.55),B.life=.12+Math.random()*.21}}function U(N,G,W){let k=f[g++%ol];return k.p.copy(N),k.d.copy(vT).applyQuaternion(G),k.distance=0,k.active=!0,k.authoritative=W,k}function S(N){let G=U(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),L(p,G.d,4,2.2),E=.055,w++,t?.(N.position,N.quaternion)}function _(N,G,W){let k=U(N,G,W);L(k.p,k.d,4,2.2),l.visible=!0}function A({dt:N,aim:G,firing:W}){if(!G&&!i.visible&&!l.visible&&!d.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!G,G&&(i.position.copy(G.modelPosition??G.position),i.quaternion.copy(G.quaternion)),G&&W){if(T)for(v-=N;v<=0;)S(G),v+=G0;else S(G),v=G0;T=!0}else v=0,T=!1;E=Math.max(0,E-N),r.visible=!!G&&E>0,r.material.opacity=E/.055;let k=0;for(let B of f){if(!B.active)continue;let oe=Math.min(xT*N,H0-B.distance),ce=oe>0?e?.(B.p,B.d,oe,B.authoritative):null,ie=ce==null?oe:Math.max(0,Math.min(oe,ce));B.p.addScaledVector(B.d,ie),B.distance+=ie,ce!=null&&(m.copy(B.d).negate(),L(B.p,m,8,4.2)),B.active=ce==null&&B.distance<H0;let se=Math.min(.82,B.distance);for(let we=0;we<3;we++)for(let me=0;me<2;me++){let fe=(we+me)/3;x.copy(B.p).addScaledVector(B.d,-se*fe),o.setXYZ(k++,x.x,x.y,x.z)}}l.visible=k>0,k>0&&(o.needsUpdate=!0),s.setDrawRange(0,k);let J=0;for(let B of h)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(J++,B.p.x,B.p.y,B.p.z));d.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function F(){for(let N of f)N.active=!1;for(let N of h)N.life=0;v=E=0,T=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:A,reset:F,replay:_,get shotsFired(){return w}}}var q0=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],_T=new M(0,1,0);function ih(n){let e=new yt,t=new gt({color:"#2c4750",roughness:.43,metalness:.47}),i=new gt({color:"#899fa3",roughness:.46,metalness:.57}),r=new vt({toneMapped:!1});function s(h,p,x,m,g,b=0){let w=new Be(h,p);return w.position.set(x,m,g),w.rotation.x=b,e.add(w),w}s(Mo([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(Mo([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Ft(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Ft(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new et(.044,.009,.038),r,.038,.069,-.023);let o=new Be(new Ft(.002,.003,1,5,1,!0),new vt({transparent:!0,opacity:.52,depthWrite:!1,blending:$n,toneMapped:!1})),a=new Be(new Dt(.012,0),new vt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:m}){if(!h||!p||!x||!m){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(q0[h-1]??q0[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(_T,c.normalize()),a.position.copy(m)}return d(),{mesh:e,hide:d,update:f}}var MT="wss://clouddata.turbowarp.org",bT="itssoren.github.io/VR/gorilla-lab/",oh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},bo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),Z0="\u2601 GorillaHost",al=["ARENE1","ARENE2","ARENE3"],ST=new Map([[Z0,"vr"],[oh.vr,"vr"],[oh.pc,"pc"],...bo.map(n=>[n,"player"])]),np=53,rh=4400,j0=64e3,wT=100,TT=200,AT=450,J0=6,Bt=(n,e)=>Math.round(n).toString().padStart(e,"0");function ll(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function ls(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function ET({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Bt(e,7)+a.map(c=>Bt(c*100+2e4,5)).join("")+Bt(Math.round(l*10)%3600,4)+Bt(o,6)}function CT(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function $0({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,m="",g=-1/0,b=null,w=0,v=0,E=1/0,T=0,L="offline",U=!1,S=-1,_=0,A=[],F=1/0,N=350,G=1/0,W=0,k=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(C,Y){L=C,n(Y)}function oe(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ce(){return[...c.values()].map(C=>C.pose).filter(Boolean)}function ie(){let C=ce().filter(D=>h==="vr"?D.role!=="vr":D.role==="vr"),Y=D=>Number(D.ready)*2+ +(D.role==="pc"),te=C.find(D=>D.id===b?.id)??null,Z=C.reduce((D,X)=>!D||Y(X)>Y(D)?X:D,te);Z!==b&&(b=Z,e(b))}function se(C){for(let Y of c.values())Y.pose&&t(null,Y.pose),Y.pose=Y.candidate=null;C&&c.clear(),ie()}function we(){let C=f;if(f=null,C){C.onopen=C.onmessage=C.onerror=C.onclose=null;try{C.close()}catch{}}}function me(){we(),h=null,p="",E=1/0,U=!1,S=-1,A=[],k=[],se(!0),B("offline","Hors ligne")}function fe(C){let Y=Math.min(3e4,1500*2**Math.min(T++,5));E=a()+Y,B("retry","TurboWarp d\xE9connect\xE9 ("+C+") \xB7 reconnexion automatique au salon "+p)}function Q(C){let Y=!1;for(let[te,Z]of c)Z.pose&&C-Z.pose.arrival>rh&&(t(null,Z.pose),Z.pose=null,Y=!0),Z.candidate&&C-Z.candidate.arrival>rh&&(Z.candidate=null),C-Z.lastArrival>6e4&&c.delete(te);Y&&ie()}function ne(C,Y,te,Z){let D=BT(te.value,null);if(!D||D.id===x)return;let X=c.get(D.id);if(!X){if(c.size>=64)return;X={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:Z,pose:null,candidate:null},c.set(D.id,X)}if(D.time<=X.lastTime)return;let O=X.pose??X.candidate;if(O&&D.time-O.time>rh+Z-O.arrival){if(X.pose)return;X.candidate=null}X.lastTime=D.time,X.lastArrival=Z;let ee={...D,ready:D.ready??!0,protocol:D.protocol??(D.ready===void 0?3:4),role:C,channel:Y,received:o(),arrival:Z},le=X.candidate;if(!X.pose&&(!le||le.channel!==Y||le.map!==ee.map||Z-le.arrival>rh)&&(D.ready!==void 0||Math.abs(D.time-ee.received)>25e3)){X.candidate=ee;return}if(X.candidate=null,!X.pose&&le?.objects&&le.ready&&le.map===ee.map&&!ee.objects&&(ee.objects=le.objects),X.pose=ee,h==="vr"&&C==="vr"&&ee.ready)if(G===1/0||le?.arrival<G||D.id<x)h="player",m=bo[x%bo.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=te.value.length,t(ee),ie(),!(!U||!ee.ready||ee.map!==S)){Z-X.shotWindow>=1e3&&(X.shotWindow=Z,X.shotCount=0);for(let{seq:de,position:R,quaternion:y}of ee.shots??[])de<=X.lastShot||(X.lastShot=de,!(X.shotCount>=14||(R.x-ee.x)**2+(R.y-ee.y)**2+(R.z-ee.z)**2>7**2)&&(X.shotCount++,r({position:R,quaternion:y},ee)));if(!(h!=="vr"||C!=="player"||D.actionTarget!==x))for(let{seq:de,action:R}of D.actions)de<=X.lastAction||(X.lastAction=de,i(R,ee))}}function xe(){let C;try{C=new s(MT)}catch{return!1}return f=C,v=a(),g=-1/0,G=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),C.onopen=()=>{f===C&&(w=a(),C.send(JSON.stringify({method:"handshake",project_id:bT+p,user:"player"+x})+`
`),B("open",oe()))},C.onmessage=Y=>{if(f!==C||typeof Y.data!="string"||Y.data.length>105e4)return;let te=a();Q(te);for(let Z of Y.data.split(`
`)){if(!Z.trim())continue;let D;try{D=JSON.parse(Z)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",Z.slice(0,200));continue}let X=ST.get(D?.name);D?.method!=="set"||!X||ne(X,D.name,D,te)}},C.onerror=()=>{f===C&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},C.onclose=Y=>{if(f!==C)return;let te=Y.code;if(we(),se(!1),A=[],k=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(te)){fe(te);return}h=null,p="";let Z={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[te];B("error","TurboWarp d\xE9connect\xE9 ("+te+")"+(Z?" \xB7 "+Z:Y.reason?" \xB7 "+Y.reason.slice(0,100):""))},!0}function Pe(C,Y){let te=ll(C);return!/^[A-Z0-9]{5,12}$/.test(te)||!["vr","pc","player"].includes(Y)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===Y&&p===te?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(se(!0),x=Math.floor(1e6+l()*8999999),h=Y,p=te,m=oh[h]??bo[x%bo.length],N=350,h==="vr"&&al.includes(p)&&(m=x%2===0?oh.vr:Z0,N=750+x%150),_=W=0,k=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},T=0,E=F=1/0,xe()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function V(C,Y){let te=C.hand||C.type==="world"?5:4;if(h!=="player"||L!=="open"||!b?.ready||b.protocol<te||b.map!==Y||!ip(C)||_>=99999999)return!1;let Z=a();return A=A.filter(D=>D.expires>=Z&&D.target===b.id&&D.map===Y),A.length>=8?!1:(A.push({action:{...C},seq:++_,expires:Z+1800,target:b.id,map:Y}),!0)}function ge(C,Y,te){if(!h||h==="pc"||L!=="open"||W>=99999999)return;let Z=To(C),D=Ao(Y);if(!Z||!D)return;let X=a();k=k.filter(O=>O.expires>=X&&O.map===te).slice(-(J0-1)),k.push({record:Bt(++W,8)+Z+D,expires:X+AT,map:te})}function Me(C){let Y=a();U=!!C&&C.ready!==!1,S=C?.map??-1,Q(Y),h&&!f&&Y>=E&&(E=1/0,xe()||fe(1006)),f&&f.readyState===0&&Y-v>1e4&&(we(),fe(1006)),J.bufferedBytes=f?.bufferedAmount??0;let te=h==="pc"?TT:wT;if(!C||!h||f?.readyState!==1||J.bufferedBytes>4096||Y-w<(h==="vr"?N:350)||Y-g<te)return!1;if(h==="player"){let le=ce().filter(R=>R.role==="player"),de=le.find(R=>R.channel===m);if(de?F=Math.min(Y,F):F=1/0,de&&(de.id<x||Y-F>=800)){let R=bo.find(y=>!le.some(I=>I.channel===y));if(!R)return L!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=R,F=1/0}}(T||L==="capacity")&&(T=0,B("open",oe()));let Z=Math.round(d+Y-u),D=ET({...C,time:Z,id:x});if(!D)return!1;A=A.filter(le=>le.expires>=Y&&le.target===b?.id&&le.map===C.map),k=k.filter(le=>le.expires>=Y&&le.map===C.map);let X=J.bufferedBytes===0?C.objectFeed?.(Y):null,O=typeof C.avatar=="function"?C.avatar():C.avatar,ee=NT(D,O,X,{version:5,ready:C.ready!==!1,actions:A,actionTarget:A[0]?.target??0,shots:k,score:C.score});return g=Y,h==="vr"&&(G=Math.min(G,Y)),f.send(JSON.stringify({method:"set",name:m,value:ee})+`
`),J.sent++,J.bytesSent+=ee.length,!0}return{join:Pe,leave:me,tick:Me,sendAction:V,queueShot:ge,get stats(){return{...J}},get role(){return h},get code(){return p},get state(){return L},get remote(){return b},get peers(){return ce()}}}var RT=15,PT=12,K0=44,sh=15,tp=35,To=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Bt(e*100+2e4,5)).join(""):null;function So(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Ao=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Bt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function wo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function IT(n){let e=To(n.mesh.position),t=Ao(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>np)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Bt(i,5)+Bt(r,2)+s+o+Bt(a,8)+e+t}function LT(n){return Bt(n,5)+"99"+"0".repeat(K0-7)}function DT(n){if(!n)return null;let e=Ao(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&To(l.position),u=l&&Ao(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(RT+PT)}),r=Bt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Bt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+Bt(n.coconuts??31,2)+Bt(n.color??0,2)+a}function ip(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=np?"10"+Bt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Bt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Bt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Bt(i,5):null}function UT(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),ip(s)===n?s:null}function FT(n){let e=To(n?.position),t=Ao(n?.quaternion),i=To(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function NT(n,e,t,i=null){let r=DT(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Bt(p,8)+ip(x)).join(""),a=i.version===5,l=a&&To(e?.gun?.position),c=a&&Ao(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Bt(d.length,1)+d.map(p=>p.record).join("")+Bt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+FT(r?e.tool:null)+Bt(i.actionTarget??0,7)+Bt(o.length/sh,1)+o+f;return h.length+1+s.length>j0&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function X0(n,e,t){let i=wo(n,e);if(!i)return null;let r=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:So(n,a+1),quaternion:wo(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(r.some(a=>a&&(!a.position||!a.quaternion)))return null;let s=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return s>2||o>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function BT(n,e){if(typeof n!="string"||n.length>j0||!/^[0-9]+$/.test(n))return null;let t=CT(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:K0,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=X0(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=So(n,a+2),f=wo(n,a+17),h=So(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*sh+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=sh){let u=Number(n.slice(a,a+8)),d=UT(n.slice(a+8,a+sh));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=So(n,a+1),h=wo(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>J0||n.length<a+u*tp+7)return null;t.shots=[];let d=0;for(let f=a+u*tp;a<f;a+=tp){let h=Number(n.slice(a,a+8)),p=So(n,a+8),x=wo(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=X0(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=So(n,c+10),m=wo(n,c+25);if(d>np||f>7||h>4||p>16777215||!x||!m)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:m})}t.objects={full:o==="2",records:a}}return t}var OT=.45,Y0=2.5;function Q0(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=OT&&!d.frozen&&(d.velocity.lengthSq()>=Y0**2||d.angular.lengthSq()*d.radius**2>=Y0**2);if(!l&&!p&&!h?.fast)continue;let x=IT(d);if(!x)continue;c?.add(f);let m=x!==h?.record;m&&e.set(f,{record:x,until:s+420}),(a||!l&&m)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:LT(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var ex=Lt.DEFAULT_UP,zT=15,tx=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function VT(){let n=new yt,e=new Be(new Dt(.155,1),new gt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Be(new ui(.23,.018,5,20),new vt({color:"#84e6ff",transparent:!0,opacity:.85,blending:$n,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Be(new ki(.11,.28,9,1,!0),new vt({color:"#55c7ff",transparent:!0,opacity:.45,side:qt,blending:$n,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function kT(){let n=new yt,e=new yt,t=Ku(0),i=t.createHead(),r=["left","right"].map(g=>({skin:th(g,t.hand,{openWrist:!0}),position:new M,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=nh(t.fur,r.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=ih(e),l=null,c=new M,u=[null,null],d=new M,f=new qe,h=new qe,p=new qe,x={mode:0,position:new M,quaternion:new qe,end:new M};function m(g,b,w){let v=g.avatar,E=1-Math.exp(-w*32);if(!v){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(v.head).premultiply(f),i.quaternion.slerp(p,E),d.set(0,0,-1).applyQuaternion(i.quaternion);let T=Oe.smoothstep(-d.y,.28,.94),L=Math.max(.38,v.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*L,.24*T),o.rotation.x=-.5*T,h.copy(o.quaternion).invert(),t.setColor(v.color??0);for(let _=0;_<r.length;_++){let A=r[_],F=v.hands[_];if(u[_]=F?A:null,!F){A.tracked=!1;continue}c.copy(F.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(F.quaternion).premultiply(f).premultiply(h),A.tracked?(A.position.lerp(c,E),A.quaternion.slerp(p,E)):(A.position.copy(c),A.quaternion.copy(p)),A.tracked=!0;for(let N=0;N<3;N++)A.pressure[N]+=((F.pressure?.[N]??0)-A.pressure[N])*E;A.skin.pose(A.pressure,!1)}if(s.pose(u,v.armSpan*.5,.97,L,!0),v.gun){l||(l=ep(),l.visible=!1,e.add(l));let _=l.visible?E:1;l.position.lerp(v.gun.position,_),l.quaternion.slerp(p.copy(v.gun.quaternion),_),l.visible=!0}else l&&(l.visible=!1);let U=v.tool;if(!U){a.hide(),x.mode=0;return}let S=x.mode?E:1;x.mode=U.mode,x.position.lerp(U.position,S),x.quaternion.slerp(p.copy(U.quaternion),S),x.end.lerp(U.end,S),a.update(x)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of r)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function nx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function ix({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,applyCoconuts:s,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,d=new Map,f=Q0(),h=0,p=-1,x=-1,m=-1,g="",b=0,w=-1;function v(){let D=e();return D!==g&&(g=D,b=ls(D)),b}function E(D){return!!D?.ready&&D.map===v()}function T(D){let X=d.get(D);X&&(n.remove(X.mesh),X.mesh.material?.dispose(),d.delete(D))}function L(){for(let D of d.keys())T(D);h=0,p=-1,x!==-1&&(x=-1,r?.(null)),m!==-1&&(m=-1,s?.(null)),w!==-1&&(w=-1,o?.(0))}function U(D,X){if(D.color===X.color&&D.style===X.style)return;D.color=X.color,D.style=X.style;let O=D.mesh.material;if(O?.color){if(O.color.setHex(X.color),X.style===0){Object.assign(O,D.baseMaterial),D.baseEmissive&&O.emissive.copy(D.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][X.style],O.metalness=[.1,0,.87,.12,0][X.style],O.opacity=X.style===3?.4:1,O.transparent=X.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=X.style===4?1.65:0,O.needsUpdate=!0}}function S(D){if(!E(D)){L();return}if((h!==D.id||p!==D.map)&&(L(),h=D.id,p=D.map),D.avatar&&D.avatar.light!==x&&(x=D.avatar.light,r?.(x)),D.avatar&&D.avatar.coconuts!==m&&(m=D.avatar.coconuts,s?.(m)),D.score!==void 0&&D.score!==w&&(w=D.score,o?.(w)),!D.objects)return;let X=D.objects.full?new Set:null;for(let O of D.objects.records){if(O.removed){T(O.id);continue}X?.add(O.id);let ee=d.get(O.id);if(ee&&ee.type!==O.type&&(T(O.id),ee=null),!ee){let de=i?.(O.type);if(!de)continue;let{roughness:R,metalness:y,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j}=de.material??{},ye={roughness:R,metalness:y,transparent:I,depthWrite:H,opacity:re,emissiveIntensity:j};de.userData.netId=O.id,de.userData.netType=O.type,ee={mesh:de,baseMaterial:ye,baseEmissive:de.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new qe().copy(O.rotation),velocity:new M,time:D.time},de.position.copy(ee.target),de.quaternion.copy(ee.quaternion),d.set(O.id,ee),n.add(de)}let le=(D.time-ee.time)/1e3;le>.06&&le<.65&&!(O.flags&6)?ee.velocity.copy(O.position).sub(ee.target).multiplyScalar(1/le).clampLength(0,23):ee.velocity.set(0,0,0),ee.target.copy(O.position),ee.quaternion.copy(O.rotation),ee.time=D.time,ee.flags=O.flags,ee.frequent=le>.06&&le<.16,ee.received=D.arrival,ee.mesh.userData.netFlags=O.flags,ee.mesh.userData.held=!!(O.flags&1),U(ee,O)}if(X)for(let O of d.keys())X.has(O)||T(O)}let _=new M;function A(D,X,O){let ee=1-Math.exp(-D*22),le=1-Math.exp(-D*32);for(let de of d.values()){if(de.mesh.visible=X,!X)continue;let R=de.frequent?le:ee,y=de.flags&6?0:Math.min(de.frequent?.1:.12,Math.max(0,(O-de.received)/1e3));_.copy(de.target).addScaledVector(de.velocity,y),de.mesh.position.distanceToSquared(_)>16||de.flags&6&&de.mesh.position.distanceToSquared(de.target)<1e-4?de.mesh.position.copy(_):de.mesh.position.lerp(_,R),de.mesh.quaternion.slerp(de.quaternion,R),de.flags&6&&de.mesh.quaternion.angleTo(de.quaternion)<.008&&de.mesh.quaternion.copy(de.quaternion),de.mesh.updateMatrixWorld(!0)}}let F=D=>document.querySelector(D),N=F("#cloud-status"),G=F("#cloud-room"),W=F("#cloud-camera"),k=-1/0,J=0,B="Hors ligne",oe=0;function ce(D){J=D,W.textContent="Cam\xE9ra : "+tx[D]}function ie(){ce((J+1)%tx.length)}W.onclick=ie;let se=$0({onStatus(D){B=D,N.textContent=D,c?.()},onPose(D){se.role!=="vr"&&S(D)},onPeer(D,X){if(!D){let le=u.get(X.id);le?.art&&(nx(le.art.model),nx(le.art.toolRoot),le.art.dispose?.()),u.delete(X.id);return}let O=u.get(D.id);O||(O={art:null,motion:new M,handMotion:[new M,new M]},u.set(D.id,O));let ee=O.pose;O.motion.set(0,0,0);for(let le of O.handMotion)le.set(0,0,0);if(ee&&ee.map===D.map){let le=(D.time-ee.time)/1e3;if(le>=.055&&le<=.65){O.motion.set(D.x-ee.x,D.y-ee.y,D.z-ee.z).multiplyScalar(1/le),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0);for(let de=0;de<2;de++){let R=ee.avatar?.hands[de],y=D.avatar?.hands[de];R&&y&&O.handMotion[de].copy(y.position).sub(R.position).multiplyScalar(1/le).clampLength(0,23)}}}O.pose=D},onAction:a,onShot:l}),we=ll(new URLSearchParams(location.search).get("room")??"");function me(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),D=>(D%36).toString(36)).join("").toUpperCase()}G.value=/^[A-Z0-9]{5,12}$/.test(we)?we:me();function fe(D,X=G.value){let O=ll(X);if(!(se.role===D&&se.code===O)){if(!/^[A-Z0-9]{5,12}$/.test(O)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}se.role&&se.leave(),se.join(O,D)&&(G.value=O,D!=="vr"&&F("#game").focus(),f.reset(),ce(0),t(ls(O)),g="")}}F("#cloud-vr").onclick=()=>fe("vr"),F("#cloud-new").onclick=()=>fe("vr",me());for(let[D,X]of al.entries())F(`#public-join-${D}`).onclick=()=>fe("player",X),F(`#public-host-${D}`).onclick=()=>fe("vr",X);F("#cloud-pc").onclick=()=>fe("pc");let Q=F("#cloud-player");Q&&(Q.onclick=()=>fe("player")),F("#cloud-leave").onclick=()=>{oe=0,se.leave()},F("#cloud-copy").onclick=async()=>{let D=new URL(location.href);D.searchParams.set("room",se.code||ll(G.value));try{await navigator.clipboard.writeText(D.href),N.textContent="Lien copi\xE9."}catch{N.textContent=D.href}oe=performance.now()+2500},addEventListener("pagehide",()=>se.leave());let ne=new M,xe=new M,Pe=new M,V=new M,ge=0;function Me({dt:D,position:X,yaw:O,pitch:ee,camera:le,rig:de,keys:R,flat:y}){let I=y?.movement,H=Number(R.has("KeyD"))-Number(R.has("KeyQ")||R.has("KeyA"))+(I?.x??0),re=Number(R.has("KeyS"))-Number(R.has("KeyZ")||R.has("KeyW"))+(I?.z??0);y?.consumeJump?.()&&(ge=.26),ge=Math.max(0,ge-D);let j=Number(R.has("Space")||ge>0)-Number(R.has("ShiftLeft")||R.has("ShiftRight")),ye=R.has("ControlLeft")||R.has("ControlRight")?11:3.2;V.set(H,j,re).clampLength(0,1).applyAxisAngle(ex,O),de.position.addScaledVector(V,D*ye).clampScalar(-175,175),de.rotation.set(0,O,0),le.position.set(0,0,0),le.rotation.set(ee,0,0,"YXZ"),de.updateMatrixWorld(!0),X.copy(de.position)}function C(D,X,O,ee){for(let le of u.values()){let de=le.pose;if(!(D&&E(de))){le.art&&(le.art.model.visible=!1,le.art.toolRoot&&(le.art.toolRoot.visible=!1));continue}le.art||(le.art=de.role==="pc"?VT():kT(),n.add(le.art.model),le.art.model.visible=!1,le.art.toolRoot&&n.add(le.art.toolRoot));let{model:y,toolRoot:I}=le.art,H=Math.min(.12,Math.max(0,(ee-de.arrival)/1e3+.025));ne.copy(de).addScaledVector(le.motion,H),!y.visible||y.position.distanceToSquared(ne)>64?y.position.copy(ne):y.position.lerp(ne,1-Math.exp(-O*34)),y.rotation.y=de.yaw,y.visible=!0,I&&(I.visible=!0),le.art.draw(de,X,O)}}function Y(D,X){if(X<oe)return;let O=se.remote,ee=B;if(se.state==="open"){let le="Salon "+se.code+" \xB7 ",de=se.peers.filter(R=>R.ready);if(!D)ee=le+"quitte la session VR pour utiliser le mode spectateur";else if(se.role!=="vr"&&O&&O.map!==v())ee=le+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(se.role!=="vr"&&O&&!O.ready)ee=le+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(se.role==="player"&&O&&O.protocol<5)ee=le+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(se.role!=="vr"&&E(O))ee=le+"h\xF4te connect\xE9";else if(se.role==="vr"){let R=de.filter(E),y=R.filter(H=>H.role==="player").length,I=R.some(H=>H.role==="pc");ee=le+"tu h\xE9berges \xB7 "+(y+1)+" joueur"+(y?"s":""),I&&(ee+=" \xB7 spectateur connect\xE9"),!y&&de.some(H=>!E(H))&&(ee+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==ee&&(N.textContent=ee,c?.())}function te(D){let{inVR:X,time:O,dt:ee,position:le,yaw:de,camera:R,rig:y,keys:I,avatar:H,bodies:re,score:j}=D;if(!se.role){L();return}let ye=se.role!=="pc"||!X,pe=performance.now(),be=v(),_e=se.role!=="vr"?se.remote:null,he=ye&&E(_e);if(!he&&p!==-1&&L(),A(ee,he,pe),C(ye,O,ee,pe),se.role==="pc"&&!X){(D.actions??I).delete("KeyC")&&ie();let Te=J===3&&he?[...d.values()].find(Ae=>Ae.type===zT)?.mesh:null,ze=he?u.get(_e.id)?.art?.model:null;Te?(Pe.set(0,0,-.23).applyQuaternion(Te.quaternion),y.position.copy(Te.position).add(Pe),y.rotation.set(0,0,0),R.position.set(0,0,0),R.quaternion.copy(Te.quaternion),y.updateMatrixWorld(!0),le.copy(y.position)):ze&&(J===1||J===2)?(Pe.set(0,.72,J===1?-2.7:2.7).applyAxisAngle(ex,ze.rotation.y),xe.copy(ze.position).add(Pe),y.position.lerp(xe,1-Math.exp(-ee*11)),R.position.set(0,0,0),y.updateMatrixWorld(!0),R.lookAt(ze.position),R.updateWorldMatrix(!0,!1),le.copy(y.position)):Me(D)}se.tick({x:le.x,y:le.y,z:le.z,yaw:de,map:be,ready:ye,avatar:ye&&se.role!=="pc"?H:null,score:j,objectFeed:ye&&se.role==="vr"&&re?Te=>f.capture(Te,re):null}),pe-k>=150&&(k=pe,Y(ye,pe))}function Z(D){let X=u.get(D)?.pose;return E(X)?X:null}return{update:te,getPeer:Z,connect:fe,leave:()=>se.leave(),get caption(){return N.textContent},handMotion(D,X){return u.get(D)?.handMotion[X]},sendAction(D){return se.sendAction(D,v())},sendShot(D,X){se.queueShot(D,X,v())},get stats(){return se.stats},get role(){return se.role},get connected(){return E(se.remote)},get remoteSpectator(){return se.peers.find(D=>D.role==="pc"&&E(D))??null},get remoteLight(){return x===-1?null:x},get replicaCount(){return d.size},forEachReplica(D){for(let X of d.values())X.mesh.visible&&D(X.mesh)}}}function ah(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=rx(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=rx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function rx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ht(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var sx=48,ox=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),GT=(n,e,t)=>Math.max(e,Math.min(t,n)),HT=()=>structuredClone(ox.shield),cl=(n,e,t,i)=>Number.isFinite(n)?GT(n,t,i):e;function ch(n){let e=n?.mode==="lathe"?ox.bottle:HT(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=sx?n.points.map(o=>[cl(o?.[0],0,-1.5,1.5),cl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:cl(n?.depth,e.depth,.025,1.5),bevel:cl(n?.bevel,e.bevel,0,.15),segments:Math.round(cl(n?.segments,32,8,64))}}function ax(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function lh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function WT(n,e,t,i){let r=lh(n,e,t),s=lh(n,e,i),o=lh(t,i,n),a=lh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function qT(n){let e=ch(n),t=e.mode==="lathe"?e.points:ax(e);if(t.length<3||t.length>sx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&WT(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function lx(n){let e=ch(n),t=qT(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([s,o])=>new Se(Math.max(0,s),o));i=new ka(r,e.segments)}else{let r=ax(e),s=new li;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Gi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ht(new Float32Array(r*2),2))}return i}var rp="gorilla-lab-models-v1",ji=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),XT=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,YT=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre"}),ux=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),ZT=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),jT=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,JT=/^#[a-f\d]{6}$/i;function cx(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function ul(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Oe.clamp(n[r],t,i):e)}function cs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>ji.models||JSON.stringify(n).length>ji.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!jT.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>ji.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:cx(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(ZT).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:i?.hitbox?.mode==="box"?{mode:"box",center:ul(i.hitbox.center,0,-6,6),size:ul(i.hitbox.size,.5,.025,12)}:{mode:"auto"},parts:i.parts.map((r,s)=>({name:cx(r?.name,`Pi\xE8ce ${s+1}`),shape:Object.hasOwn(YT,r?.shape)?r.shape:"box",...r?.shape==="custom"?{profile:ch(r?.profile)}:{},position:ul(r?.position,0,-3,3),rotation:ul(r?.rotation,0,-360,360),scale:ul(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&JT.test(r.color)?r.color:"#51bdd2",surface:Object.hasOwn(ux,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=ji.textureBytes&&XT.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function sp(n){try{let e=(n??globalThis.localStorage)?.getItem(rp);if(e&&e.length<=ji.fileBytes)return cs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function $T(n){switch(n){case"sphere":return new Vn(.5,20,12);case"cylinder":return new Ft(.5,.5,1,20);case"cone":return new ki(.5,1,20);case"torus":return new ui(.365,.135,8,24);case"capsule":return new Jr(.28,.44,6,16);case"diamond":return new ci(.5);default:return new et(1,1,1)}}var hx=Object.keys(ux),Eo=64,hl=4,dx=2,Ti;function KT(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function fx(){if(Ti)return Ti;let n=Eo*hl,e=Eo*dx,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/Eo)*hl+Math.floor(r/Eo),o=KT(hx[s],r%Eo,i%Eo),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ti=new _i(t,n,e),Ti.colorSpace=ft,Ti.magFilter=un,Ti.minFilter=Pn,Ti.generateMipmaps=!0,Ti.needsUpdate=!0,Ti}function px(n){let e=n.shape==="custom"?lx(n.profile):$T(n.shape),t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();let i=n.rotation.map(Oe.degToRad);t.scale(...n.scale),t.rotateX(i[0]),t.rotateY(i[1]),t.rotateZ(i[2]),t.translate(...n.position);let r=new De(n.color),s=t.attributes.position.count,o=new Float32Array(s*3),a=t.attributes.uv,l=hx.indexOf(n.surface),c=l%hl,u=Math.floor(l/hl);for(let d=0;d<s;d++)r.toArray(o,d*3),n.texture||a.setXY(d,(c+.05+a.getX(d)*.9)/hl,(u+.05+a.getY(d)*.9)/dx);return t.setAttribute("color",new ht(o,3)),t}function QT(n){if(!n?.texture)return new gt({vertexColors:!0,map:fx(),roughness:.68});let e=new Hi().load(n.texture);return e.colorSpace=ft,e.wrapS=e.wrapT=Yn,new gt({vertexColors:!0,map:e,roughness:.68})}function _r(n){return n?.parts?.some(e=>e.texture)?n.parts.map(QT):new gt({vertexColors:!0,map:fx(),roughness:.68})}function uh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ti&&e.map.dispose(),e.dispose()}}function op(n){let e=n.map(px),t=ah(e,n.some(i=>i.texture));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Co(n){let e=op(n.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function eA(n){let e=new Qt;for(let t of n.parts??[]){let i=px(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function ap(n){let e=eA(n),t=e.getCenter(new M),i=e.getSize(new M);return n.hitbox?.mode==="box"?{mode:"box",center:new M(...n.hitbox.center),size:new M(...n.hitbox.size),boundsCenter:t,boundsSize:i}:{mode:"auto",center:t,size:i,boundsCenter:t,boundsSize:i}}function lp(n,e=null){let t=ap(n),i=t.center.clone().sub(t.boundsCenter),r=t.size.clone();if(e){let s=new M(e.x,e.y,e.z).divide(t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)));i.multiply(s),r.multiply(s)}return new et(r.x,r.y,r.z).translate(i.x,i.y,i.z)}function mx(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=op(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:_r(e),collisionGeo:lp(e),mass:Oe.clamp(i.x*i.y*i.z*9,.18,12)}})}function gx(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=op(e.parts),i=t.boundingBox.getSize(new M),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new Be(t,_r(e));s.castShadow=!0;let o=new yt;return o.add(s),o}var vx=Object.freeze([8,16,32,48,64,96,128]),_x=16,dh=24,xx=new WeakMap,Ai=Oe.clamp,us=Oe.lerp,cp=n=>n*n*(3-2*n);function Kn(n,e,t,i){return Number.isFinite(n)?Ai(n,e,t):i}function yx(n){if(!n)return null;let e=cs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var tA=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Ro(n={}){let e=vx.includes(n?.detail)?n.detail:_x,t=n?.heights;return{detail:e,seed:Math.round(Kn(n?.seed,0,2147483647,1)),amplitude:Kn(n?.amplitude,0,12,0),frequency:Kn(n?.frequency,.015,2,.12),octaves:Math.round(Kn(n?.octaves,1,5,3)),roughness:Kn(n?.roughness,.15,.95,.42),ridge:Kn(n?.ridge,0,1,0),edgeFade:Kn(n?.edgeFade,0,1,0),grass:Kn(n?.grass,0,1,0),shrub:Kn(n?.shrub,0,1,0),grassSize:Kn(n?.grassSize,.1,5,1),shrubSize:Kn(n?.shrubSize,.1,5,1),grassModel:yx(n?.grassModel),shrubModel:yx(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&tA.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Kn(i,-dh,dh,0)):null}}function Mx(n,e,t,i){let r=Ai(t,0,e),s=Ai(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function bx(n,e){let t=vx.includes(e)?e:_x;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Mx(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function Ji(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function hh(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=cp(n-i),o=cp(e-r),a=us(Ji(i,r,t),Ji(i+1,r,t),s),l=us(Ji(i,r+1,t),Ji(i+1,r+1,t),s);return 2*us(a,l,o)-1}function dl(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=xx.get(n),p=h&&h.w===e&&h.d===t&&h.detail===r&&h.seed===s&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let x=r+1,m=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let w=0;w<=r;w++)for(let v=0;v<=r;v++){let E=(v/r-.5)*e*a,T=(w/r-.5)*t*a,L=0,U=1,S=0;for(let F=0;F<l;F++){let N=hh(E*2**F,T*2**F,s+F*13);L+=U*us(N,1-2*Math.abs(N),u),S+=U,U*=c}let _=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(v/r-.5))*2,(.5-Math.abs(w/r-.5))*2)),d*2):1,A=l===3&&c===.42&&u===0&&d===0;m[w*x+v]=A?o*(.62*hh(E,T,s)+.26*hh(E*2.03,T*2.03,s+13)+.12*hh(E*4.13,T*4.13,s+37)):o*L/S*_}let g=f?m.map((w,v)=>w+f[v]):m,b={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:m,surface:g};return xx.set(n,b),b}function up(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Mx(o,i,(e/r+.5)*i,(t/s+.5)*i)}function nA(n,e,t){return n.y+up(dl(n),e-n.x,t-n.z)}function iA(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function Sx(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=dl(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=Ai(h,-c/2,c/2),m=Ai(p,-u/2,u/2);if((h-x)**2+(p-m)**2>=r**2)return!1;let g=(h/c+.5)*l,b=(p/u+.5)*l,w=c/l,v=u/l,E=Math.max(0,Math.ceil(g-r/w)),T=Math.min(l,Math.floor(g+r/w)),L=Math.max(0,Math.ceil(b-r/v)),U=Math.min(l,Math.floor(b+r/v)),S=Number.isFinite(o)?o-n.y:up(a,h,p),_=l+1,A=a.heights?.slice()??new Array(_**2).fill(0),F=!1,N=!1;function G(W,k,J){F=!0;let B=k*_+W,oe=A[B],ce;if(i==="raise"||i==="lower")ce=oe+(i==="raise"?1:-1)*s*J;else{let ie=i==="flatten"?S:iA(a,W,k);ce=us(d[B],ie,Math.min(1,s)*J)-f[B]}ce=Ai(ce,-dh,dh),!(Math.abs(ce-oe)<1e-7)&&(A[B]=ce,N=!0)}for(let W=L;W<=U;W++)for(let k=E;k<=T;k++){let J=Math.hypot((k-g)*w,(W-b)*v)/r;J<1&&G(k,W,cp(1-J))}if(!F){let W=Ai(g,0,l),k=Ai(b,0,l),J=Math.min(l-1,Math.floor(W)),B=Math.min(l-1,Math.floor(k)),oe=W-J,ce=k-B,ie=oe+ce<=1,se=ie?1-oe-ce:oe+ce-1,we=ie?oe:1-ce,me=ie?ce:1-oe;if(se>=Math.max(we,me)){let fe=+!ie;G(J+fe,B+fe,1)}else we>=me?G(J+1,B,1):G(J,B+1,1)}return N&&(n.terrain.heights=A),N}function wx(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=new Uint16Array(r**2*6),c=0;for(let d=0;d<=r;d++)for(let f=0;f<=r;f++){let h=d*s+f;o[3*h]=(f/r-.5)*e,o[3*h+2]=(d/r-.5)*t,a[2*h]=f/r*e/2.6,a[2*h+1]=(1-d/r)*t/2.6,d<r&&f<r&&(l.set([h,h+s,h+1,h+s+1,h+1,h+s],c),c+=6)}let u=new $e;return u.setAttribute("position",new ht(o,3).setUsage(Sn)),u.setAttribute("uv",new ht(a,2)),u.setIndex(new ht(l,1)),rA(u,n),u}function rA(n,e){let{surface:t}=dl(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function sA(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=dl(n),l=Ai(((e-n.x)/s+.5)*r,0,r),c=Ai(((t-n.z)/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],m=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-m*r/o).normalize()}function Tx(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>nA(n,t,i),normalAt:(t,i,r)=>sA(n,t,i,r),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function oA(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new $e;return e.setAttribute("position",new Ve(n,3)),e.setAttribute("uv",new Ve(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function aA(){return new Dt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var lA=[{name:"grass",geometry:oA,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:aA,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Ax(n){let e=new yt;for(let{name:t,geometry:i,perMetre:r,max:s,salt:o,color:a}of lA){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(s,n.w*n.d*r)*l)),u=n.terrain[t+"Model"],d=n.terrain[t+"Size"]??1,f,h;if(u){let m=t==="grass"?.42:.85;f=Co(u),f.scale(m*d,m*d,m*d),f.translate(0,m*d/2,0),h=_r(u)}else if(f=i(),f.scale(d,d,d),h=new tn({color:a,side:t==="grass"?qt:ai,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let m=new Hi().load(n.terrain.grassTexture);m.colorSpace=ft,h.map=m,h.color.set("#ffffff"),h.userData.ownTexture=!0}let p=new Ea(f,h,c);p.name=t,p.instanceMatrix.setUsage(Sn),p.userData.salt=o,p.receiveShadow=!0;let x=new De;for(let m=0;m<c;m++){let g=us(.68,1.2,Ji(m,o,n.terrain.seed+4));p.setColorAt(m,x.setRGB(g,g,g))}e.add(p)}return cA(e,n),e}function cA(n,e){let t=dl(e),i=new Lt;for(let r of n.children){let{salt:s}=r.userData,{seed:o}=e.terrain;for(let a=0;a<r.count;a++){let l=(Ji(a,s,o)-.5)*.96*e.w,c=(Ji(a,s,o+1)-.5)*.96*e.d;i.position.set(l,up(t,l,c),c),i.rotation.y=Ji(a,s,o+2)*2*Math.PI,i.scale.setScalar(us(.58,1.34,Ji(a,s,o+3))),i.updateMatrix(),r.setMatrixAt(a,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Ex(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),uh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var fh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Cx=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Rx(n,e=Cx[n]){n=Math.max(0,Math.min(fh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Cx[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Px({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var uA=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function Ix(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){uA.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Lx(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var Dx=.065,hA=.08,ph=.035,hp=.003,mh=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(Zi).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(hp,r*t*t);let b=this.sweep(u,this.from,this.to);if(m){let S=this.correction.subVectors(x,d.anchor),_=S.dot(f)<=ph&&d.anchor.distanceToSquared(e)<=(c+ph)**2&&S.lengthSq()<=Math.max(.12,c*.5)**2;_&&(!b||b===p&&this.hitNormal.dot(f)>.7)?(b=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!_&&b===p&&S.dot(f)>ph&&(b=null),!b&&u.tracked&&(u.released=p,this.released=!0)}if(!b)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let w=b.friction??.8,v=Math.min(1,Math.max(0,w*(.75+s.grip*.09))),E=Math.max(0,1-Math.abs(f.y)/.28),T=Math.min(.97,Math.max(0,1-v+E*.24+(s.slide-3)*.035)),L=this.correction.subVectors(d.anchor,x);if(L.addScaledVector(f,-L.dot(f)),this.slideTarget.copy(L).multiplyScalar(-T),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*T*Math.max(E,Math.max(0,1-2*v)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,hp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-hp*2.5),this.supportBoxes[0]=b,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(T>.5&&L.lengthSq()>ph**2)continue}L.subVectors(d.anchor,x),m&&L.dot(f)<0&&L.addScaledVector(f,-L.dot(f)),l.add(L);let U=b.objectBody;if(U){let S=u.inverseRotation.copy(U.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(U.mesh.position).applyQuaternion(S),u.localNormal.copy(f).applyQuaternion(S)}if(d.surface=b,d.groundContact=f.y>.55,this.contacts++,u.tracked){let S=this.handMotion.subVectors(u.previousTarget,x),_=S.dot(f);S.multiplyScalar(1-T).addScaledVector(f,Math.max(0,_)-_*(1-T)),this.intent.add(S)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),x.copy(m).add(g),p.surface&&(x.copy(p.anchor).add(g),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=Dx;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/Dx),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(x);g<0&&this.average.addScaledVector(x,-g)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=hA,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function Ux(n,e,t){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-t);let i=!!(n.valid&&n.groundContact),r=i&&!n.hapticGrounded;if(n.hapticGrounded=i,!e||!r||n.hapticCooldown>0)return;let s=n.gamepad,o=s?.hapticActuators?.[0];try{let a;if(typeof o?.pulse=="function")a=o.pulse(.16,26);else if(typeof s?.vibrationActuator?.playEffect=="function")a=s.vibrationActuator.playEffect("dual-rumble",{duration:26,strongMagnitude:0,weakMagnitude:.16});else return;n.hapticCooldown=.08,a?.catch?.(()=>{})}catch{}}function Fx({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new M(0,1,0),a=new qe,l=0,c=new Wi,u=[],d=new Map,f=W0(n,{onShot:(g,b)=>s.sendShot(g,b),impact(g,b,w,v){c.set(g,b),c.far=w;let E=c.intersectObjects(u,!1)[0];if(!E)return null;let T=d.get(E.object);return v&&T&&!T.owner&&!T.frozen&&T.velocity.addScaledVector(b,Math.min(4,2.6/T.mass)),E.distance}}),h={position:new M,quaternion:new qe,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function m({frame:g,space:b,inVR:w,enabled:v,remoteWorld:E,dt:T,yaw:L,drop:U,rightHand:S,flatFiring:_}){let A=null,F=!1;if(v)if(w){let N=[...g.session.inputSources].find(W=>W.handedness==="right"),G=N&&g.getPose(N.targetRaySpace,b);if(G){let{position:W,orientation:k}=G.transform;A=h,A.position.set(W.x,W.y-U,W.z).applyAxisAngle(o,L).add(e.position),A.modelPosition.copy(S.valid?S.mesh.position:A.position),A.quaternion.set(k.x,k.y,k.z,k.w).premultiply(a.setFromAxisAngle(o,L)),F=!!N.gamepad?.buttons[0]?.pressed}}else A=h,t.getWorldPosition(A.position),t.getWorldQuaternion(A.quaternion),A.modelPosition.set(.16,-.17,-.43).applyQuaternion(A.quaternion).add(A.position),F=_;if(x=A?p:null,u.length=0,d.clear(),A||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(E)s.forEachReplica(N=>u.push(N));else for(let N of r)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),d.set(N.mesh,N))}f.update({dt:T,aim:A,firing:F}),F?l=1.3:l=Math.max(0,l-T)}return{update:m,receiveShot({position:g,quaternion:b},w){f.replay(g,new qe().copy(b),w),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function Nx(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Bx(n){return{stepHaptics:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var hs=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],gh=["Naturel","Cellulo","Affiche","R\xE9tro"],xh={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var vh=0,dA=1,fA=new M,Ox=new Ja,dp=new En,zx=new M,yh=new Cn,_h=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Mh,this.unassigned=new Mh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new fp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new M;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,fA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===vh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,Ox.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Ox.closestPointToPoint(p.point,!0,zx);let x=zx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,dp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(dp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(dp.distanceToPoint(u.point)<0){d.push(di.create(a,l,c),di.create(u,l,a),di.create(u,c,l),di.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(di.create(a,c,l),di.create(u,a,l),di.create(u,l,c),di.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>s&&(s=g,x=this.faces[m])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===vh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=dA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===vh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=di.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},di=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=vh,this.edge=null}static create(e,t,i){let r=new n,s=new fl(e,r),o=new fl(t,r),a=new fl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return yh.set(e.point,t.point,i.point),yh.getNormal(this.normal),yh.getMidpoint(this.midpoint),this.area=yh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},fl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},fp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Mh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ds=class extends $e{constructor(e=[]){super();let t=[],i=[],s=new _h().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ve(t,3)),this.setAttribute("normal",new Ve(i,3))}};var Ln=Math.PI*2,bh=.84,$i=128;function Sr(n){let e=new Uint8Array($i*$i*4);for(let i=0;i<$i;i++)for(let r=0;r<$i;r++){let s=(r+.5)/$i,o=(i+.5)/$i,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/bh,1),Math.min(o/bh,1),r,i),l=(r+i*$i)*4;for(let c=0;c<3;c++)e[l+c]=Oe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new _i(e,$i,$i);return t.colorSpace=ft,t.generateMipmaps=!0,t.minFilter=Pn,t.magFilter=un,t.needsUpdate=!0,t}function fs(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new De(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*bh,s.getY(l)*bh):s.setXY(l,.95,.95);return i.setAttribute("color",new ht(a,3)),i}function wr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:ah(r),material:new gt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Vx(n,e,t){let i=n/2,r=e/2,s=new li;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Mr(n,e,t,i,r){return new Gi(Vx(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function br(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Ln*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;d>0&&s.push(m,m+1,g),n[u+1][0]>0&&s.push(m+1,g+1,g)}}let o=new $e;o.setAttribute("position",new Ve(i,3)),o.setAttribute("uv",new Ve(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function pl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new M(0,r,0));continue}for(let s=0;s<e;s++){let o=Ln*s/e;t.push(new M(i*Math.sin(o),r,i*Math.cos(o)))}}return new ds(t)}function pA(){let t=new Ga(Vx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Oe.clamp(i.getX(l)/.098+.5,0,1),u=Oe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Sr((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Ln),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[it(Mr(.106,.207,.013,.011,.0019),8425890),it(Mr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Mr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Mr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new Ft(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new en(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new en(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ds([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return wr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function mA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=br(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Sr((a,l,c,u)=>{let d=Ln*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(b=>Math.exp(-(((f-b+.035*Math.cos(d))/.009)**2)))),x=h**3*p,m=fs(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*x+g,76+24*h+70*x+g,24+11*h+52*x+g*.8]}),o=pl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return wr("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function gA(){let n=Sr((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*fs(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=br([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=br([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Ft(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Ft(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Ln*s/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=pl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return wr("wheel","Roue",1.8,r,i,n,.64,.23)}function xA(){let n=Sr((s,o,a,l)=>{let c=fs(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Ln*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=br([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new ui(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Ln*l/5;return new M(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let r=new ds(i);return wr("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function yA(){let n=br([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Sr((r,s,o,a)=>{let l=9*fs(o,a),c=11*Math.cos(r*Ln*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Ln*48+r*Ln*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Ln*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new lo(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new en(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new en(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Ft(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new en(.008,12).translate(0,.035,.0336),15633202)],i=pl([[.033,-.143],[.054,.133]],6);return wr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function vA(){let n=br([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Sr((s,o,a,l)=>{let c=10*fs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Ln*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Ln*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new en(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new lo(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new en(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=pl([[.069,-.112],[.069,.109]],6);return wr("soda","Canette de soda",.35,r,i,t,.42,.27)}function _A(){let n=br([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Sr((r,s,o,a)=>{let l=15*fs(o,a),c=8*Math.cos(r*Ln*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Mr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new en(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=pl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return wr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function MA(){let n=Sr((r,s,o,a)=>{let l=8*fs(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=br([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Mr(.138,.22,.061,.016,.004),14788675),it(Mr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new $t(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Ft(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new en(.004,8).translate(.04,.066,.0397),15817792),it(new en(.004,8).translate(-.04,.066,.0397),7903100),it(Mr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new M(r,l,o),new M(s,l,o),new M(s,l,a),new M(r,l,a)]);return wr("radio","Talkie-walkie",.43,new ds(i),t,n,.61,.08)}function kx(){return[pA(),mA(),gA(),xA(),yA(),vA(),_A(),MA()]}var Dn=new qe,kt=new M,Ph=new M,bA=new at,Gx=new WeakMap;function Uh(n){if(n.heightfield||n.objectBody)return null;let e=Gx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=bA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Gx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function jx(n,e,t){let i=Uh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Ih(n,e,t,i){if(t.heightfield)return UA(n,e,t,i);if(t.objectBody)return sy(n,e,t.objectBody,i);if(!jx(n,e,t))return 0;Dn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Dn);let r=t.half;Ph.copy(kt).clamp(t.min,r),i.subVectors(kt,Ph);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(kt.x),a=r.y-Math.abs(kt.y),l=r.z-Math.abs(kt.z);return o<=a&&o<=l?i.set(Math.sign(kt.x)||1,0,0):a<=l?i.set(0,Math.sign(kt.y)||1,0):i.set(0,0,Math.sign(kt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,Ki=new M;function Sp(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Ih(n,e,u,rt);if(!d||(n.addScaledVector(rt,d+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let f=i.dot(rt);f<0&&i.addScaledVector(rt,-f*(Math.abs(f)<.55?1:1+r)),Ki.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(Ki,-Math.min(.95,s*u.friction*o))}return l}var pp=new M,Do=[];function Fo(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Do.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=Uh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Do.push(h)}for(let h=1;h<=o;h++){pp.copy(n).lerp(e,h/o);for(let p of Do){let x=Ih(pp,t,p,rt);if(x)return r.copy(pp).addScaledVector(rt,x+.001),s.copy(rt),p}}return null}var xl=new M,vl=new M,Uo=new M,Jx=new Cn,yl=new M;function Ar(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),m=x.toArray().map(g=>g.toFixed(5)).join(",");s.has(m)||(s.add(m),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=v=>new M().fromBufferAttribute(t,n.index?n.index.getX(v):v),m=x(p),g=x(p+1),b=x(p+2),w=new Cn(m,g,b).getNormal(new M);w.lengthSq()>.1&&r.push({a:m,b:g,c:b,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new Qt().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let m of p)m.lengthSq()>.5&&!x.some(g=>Math.abs(g.dot(m))>.9999)&&x.push(m);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Fh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Dn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Dn),i.faces.every(s=>s.n.dot(xl.subVectors(kt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)Jx.set(s,o,a).closestPointToPoint(kt,yl),r=Math.min(r,kt.distanceToSquared(yl));return Math.sqrt(r)}function SA(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Ih(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Dn.copy(e.quaternion).invert(),kt.copy(r.position).sub(e.position).applyQuaternion(Dn),Ph.copy(kt).clamp(e.min,e.half),kt.distanceToSquared(Ph)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){xl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Ih(xl,.007,e,Uo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(xl),t.copy(Uo)):Math.abs(c-o)<.003&&Uo.dot(t)>.98&&(i.lerp(xl,1/++a),o=Math.max(o,c)))}return o}var Sh=new M,wA=new M,wh=new M,TA=new M,AA=new M;function fi(n){return Ar(new et(n.x*2,n.y*2,n.z*2))}function Nh(n,e,t){let i=TA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=AA.copy(o).negate(),c=gs(n,l)+gs(e,o)-a,u=gs(n,o)+gs(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<r&&(r=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Sh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Sh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){wh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Sh.copy(a).applyQuaternion(e.mesh.quaternion).cross(wh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(wA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Dn.copy(a.mesh.quaternion).invert(),kt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Dn);for(let{a:c,b:u,c:d}of a.shape.faces){Jx.set(c,u,d).closestPointToPoint(kt,yl);let f=kt.distanceToSquared(yl);f<l&&(l=f,wh.copy(yl))}if(!s(Sh.subVectors(kt,wh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var EA=new M;function CA(n,e,t){Dn.copy(e.quaternion).invert(),kt.copy(n.mesh.position).sub(e.position).applyQuaternion(Dn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(kt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=kt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+gs(n,EA.copy(t).negate())-r,a=s+gs(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function wp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return SA(n,e,t,i??vl);let r=CA(n,e,t)??Nh(n,e,t);return r>0&&i&&Qx(n,e,t,i),r}var _p=Ar(new ci(1,0).scale(...eh)),Th={mesh:{position:new M,quaternion:new qe},shape:_p,radius:_p.radius,precise:!0};function $x(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=_p.radius;Do.length=0;for(let c of i){let u=Uh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Do.push(c)}Th.mesh.quaternion.copy(t);let l=Th.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Do){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Nh(Th,d,rt):wp(Th,u,rt);if(f>0)return r.copy(l).addScaledVector(rt,f+5e-4),s.copy(rt),u}}return null}function _l(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!jx(n.mesh.position,n.radius,r))continue;let s=wp(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var mp=new M,ml=new M,Ah=new M,gp=new qe,Tr=new qe,Hx=new qe;function Wx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Kx(n,e,t,i,r){let{mesh:s,shape:o}=n;mp.copy(s.position),gp.copy(s.quaternion),ml.subVectors(e,mp);let a=Wx(gp,t,Tr),l=ml.length()+a*o.radius,c=iy(o),u=Math.max(1,Math.min(ny,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Ah.set(Tr.x,Tr.y,Tr.z).normalize(),Hx.setFromAxisAngle(Ah,f),ml.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(ml),s.quaternion.premultiply(Hx).normalize(),_l(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(ml.subVectors(s.position,mp).divideScalar(h).clampLength(0,23),.52);let p=Wx(gp,s.quaternion,Tr);Ah.set(Tr.x,Tr.y,Tr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Ah,.52)}function gs(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Dn.copy(n.mesh.quaternion).invert(),Uo.copy(e).applyQuaternion(Dn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Uo));return t}var Lo=new M,Lh=new M,RA=new M,xp=new M,Po={},Io={};function qx(n,e,t,i){let{mesh:r,shape:s}=n,o=gs(n,RA.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Lo),i.minV=i.maxV=r.position.dot(Lh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Uo)<o-.0015)continue;xp.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=xp.dot(Lo),c=xp.dot(Lh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Qx(n,e,t,i){Math.abs(t.y)<.8?Lo.set(-t.z,0,t.x).normalize():Lo.set(t.y,-t.x,0).normalize(),Lh.crossVectors(t,Lo),qx(n,t,-1,Po),qx(e,t,1,Io);let r=(Math.max(Po.minU,Io.minU)+Math.min(Po.maxU,Io.maxU))*.5,s=(Math.max(Po.minV,Io.minV)+Math.min(Po.maxV,Io.maxV))*.5;i.copy(t).multiplyScalar((Po.plane+Io.plane)*.5).addScaledVector(Lo,r).addScaledVector(Lh,s)}var Xx=new M;function Dh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Xx.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Xx)}}function PA(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function ey(n){return!n.owner&&!n.frozen}var ps=new M,ms=new M,gl=new M,Yx=new M,Mp=new M,bp=new M,IA=new M;function Eh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function ty(n,e,t,i){let{mesh:r,shape:s}=n.body;return Dn.copy(r.quaternion).invert(),Mp.crossVectors(e,t),i.copy(Mp).applyQuaternion(Dn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Ch(n,e,t){return n?.inverseMass?(ty(n,e,t,bp),n.inverseMass+Mp.dot(bp)):0}function Rh(n,e,t,i){n?.inverseMass&&(n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(ty(n,e,t,bp),i))}function yp(n){return n.friction??n.spec?.friction??.78}function Zx(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(yp(s)*yp(o)):Math.min(yp(s),t.friction??.78);ps.subVectors(vl,s.mesh.position),o&&ms.subVectors(vl,o.mesh.position),Eh(n,ps,gl).sub(Eh(e,ms,Yx));let l=gl.dot(rt),c=!1;if(l<-1e-5){let d=l<-.8?Oe.clamp(r*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(Ch(n,ps,rt)+Ch(e,ms,rt));Rh(n,ps,rt,f),Rh(e,ms,rt,-f),Eh(n,ps,gl).sub(Eh(e,ms,Yx)),Ki.copy(gl).addScaledVector(rt,-gl.dot(rt));let h=Ki.length();if(h>1e-5&&a>0){Ki.divideScalar(h);let p=Math.min(f*a,h/(Ch(n,ps,Ki)+Ch(e,ms,Ki)));Rh(n,ps,Ki,-p),Rh(e,ms,Ki,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/d),Dh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/d),Dh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function LA(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var ny=96,DA=5;function iy(n){return Math.max(.008,n.thickness*.35)}function ry(n,e,t,i,r,s){if(!Number.isFinite(t)||t<0)return;let o=[],a=e.map(u=>({box:u,bounds:Uh(u)})),l=Math.max(1,Math.ceil(t/.006));for(let u of n){if(u.mesh.visible===!1||u.collidable===!1)continue;let d=ey(u);if(d){let h=Math.min(u.angular.length(),30),p=u.velocity.length()+h*u.shape.radius+Math.abs(i)*t;l=Math.max(l,Math.ceil(p*t/iy(u.shape)))}let f={body:u,inverseMass:d?1/u.mass:0,held:u.owner&&!u.frozen,bounds:new Qt,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Dh(f),o.push(f)}l=Math.min(ny,l);let c=t/l;for(let u=0;u<l;u++){for(let d of o){if(!d.inverseMass)continue;let{body:f}=d,{mesh:h,velocity:p,angular:x}=f;d.groundFriction=0,d.groundY=0,p.y-=i*c*(s?.(h.position)?.gravity??1),h.position.addScaledVector(p,c);let m=x.length();m>1e-5&&h.rotateOnWorldAxis(IA.copy(x).divideScalar(m),Math.min(m,30)*c),Dh(d)}for(let d=0;d<DA;d++){let f=!1;for(let h of o)if(h.inverseMass)for(let{box:p,bounds:x}of a){if(!PA(h.bounds,p,x))continue;let m=wp(h.body,p,rt,vl);m>0&&(f=Zx(h,null,p,m,r)||f)}for(let h of o)h.sweepStart=h.bounds.min.x,h.sweepEnd=h.bounds.max.x;o.sort((h,p)=>h.sweepStart-p.sweepStart);for(let h=0;h<o.length;h++){let p=o[h];for(let x=h+1;x<o.length;x++){let m=o[x];if(m.sweepStart>p.sweepEnd)break;if(!p.inverseMass&&!m.inverseMass||!p.bounds.intersectsBox(m.bounds))continue;let g=Nh(p.body,m.body,rt);g<=0||(Qx(p.body,m.body,rt,vl),f=Zx(p,m,null,g,r)||f)}}if(!f)break}for(let d of o)d.inverseMass&&LA(d,c)}}function UA(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var vp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function sy(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(vp.mesh.position=n,vp.shape.sphereRadius=e,Nh(vp,t,i))}function oy(n,e,t,i,r){let s=sy(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&ey(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Gt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),ay=Gt(-24,24,-51,7),ly=34521,Bo={x:0,y:0,z:3},Bh={x:.05,y:1.16,z:5.9},No={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Gt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Gt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Gt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Gt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Gt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Gt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Gt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Gt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Gt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Gt(9,23,-48,-37),sign:[16,-38.2]}},a3=[Gt(-9,-6,-51,7),Gt(6,9,-51,7),Gt(-24,24,-8,-5),Gt(-24,24,-27,-23),Gt(9,23,-37,-34)],cy=[{name:"Glace",bounds:No.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:No.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Gt(-9,9,-51,7)},{name:"Sol ouest",bounds:Gt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Gt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Gt(-24,-23,-51,7)},{name:"Sol est",bounds:Gt(9,23,-51,-48)},{name:"Sol est",bounds:Gt(9,23,-37,7)},{name:"Bordure est",bounds:Gt(23,24,-51,7)}],Oo={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},zo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],uy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Tp={x:16,z:-31},Ap={x:16,y:1.52,z:-21},Oh={x:-19.4,y:.68,z:-3.25},hy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),dy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Ap.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var FA=[0,1,2,3,4,5,7,8,9,10];function fy(n){uy.forEach(({x:e,z:t},i)=>n(FA[i],new M(e,.8,t)))}function py(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Dt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ha(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Dt(.6,4),"#dbab58",.6,3.7],["Coco",new Dt(.124,1),"#956238",.124,.44]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:Ar(t,r),material:new gt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:fi(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of kx()){let r=Ar(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var my=new WeakMap;function Ep(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,my.set(n,e),n}function Ml(n){if(Array.isArray(n))return n.map(Ml);let e=n.clone(),t=my.get(n);return t?Ep(e,t):e}function NA(n){let t=new Vn(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Dt(.225,0),r=new Wa({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Ep(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
      uniform float uPropTime;
      varying vec3 vSlimeDirection;
    `+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <beginnormal_vertex>",`
      #include <beginnormal_vertex>
      vec3 slimeDirection = normalize(position);
      vec3 slimeWaveA = vec3(3.8, 2.7, 1.6);
      vec3 slimeWaveB = vec3(-1.7, 3.5, 4.1);
      float slimePhaseA = dot(slimeDirection, slimeWaveA) - uPropTime * 1.55;
      float slimePhaseB = dot(slimeDirection, slimeWaveB) + uPropTime * 1.13;
      float slimeRadius = 1.0 + .055 * sin(slimePhaseA) + .026 * sin(slimePhaseB);
      float slimePulse = sin(uPropTime * 2.2);
      vec3 slimeScale = vec3(1.0 + .045 * slimePulse, 1.0 - .068 * slimePulse, 1.0 + .02 * slimePulse);
      // Remove the radial part of the gradient to get the slope along the surface.
      vec3 slimeGradient = .055 * cos(slimePhaseA) * slimeWaveA + .026 * cos(slimePhaseB) * slimeWaveB;
      slimeGradient -= slimeDirection * dot(slimeGradient, slimeDirection);
      objectNormal = normalize((slimeRadius * slimeDirection - slimeGradient) / slimeScale);
      vSlimeDirection = slimeDirection;
    `).replace("#include <begin_vertex>",`
      #include <begin_vertex>
      transformed *= slimeRadius * slimeScale;
    `),o.fragmentShader=`
      uniform float uPropTime;
      varying vec3 vSlimeDirection;
    `+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 slimeDirection = normalize(vSlimeDirection);
      float slimeMarble = sin(dot(slimeDirection, vec3(4.2, 6.4, 2.4))
        + 2.1 * sin(dot(slimeDirection, vec3(-4.0, 2.5, 3.2)) - uPropTime * 1.25)
        + uPropTime * 1.65);
      float slimeVein = smoothstep(.18, .97, slimeMarble);
      diffuseColor.rgb *= mix(vec3(.50, .27, .64), vec3(1., .61, .78), slimeVein);
    `).replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * (.13 + .27 * slimeVein);
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function BA(n){let e=new et(.37,.37,.37),t=new gt({color:16777215,roughness:.4});return Ep(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;
    `+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <project_vertex>",`
      #include <project_vertex>
      // BoxGeometry's UV axes on each face, rotated to the current eye's view space.
      vec3 abyssTangent = abs(normal.x) > .5 ? vec3(0., 0., -normal.x)
        : vec3(abs(normal.y) > .5 ? 1. : normal.z, 0., 0.);
      vec3 abyssBitangent = cross(normal, abyssTangent);
      vec3 abyssEye = -mvPosition.xyz;
      vAbyssEye = vec3(
        dot(abyssEye, normalize(normalMatrix * abyssTangent)),
        dot(abyssEye, normalize(normalMatrix * abyssBitangent)),
        dot(abyssEye, normalize(normalMatrix * normal))
      );
      vAbyssUV = uv;
      vAbyssFace = dot(normal, vec3(13.1, 21.7, 35.3));
    `),r.fragmentShader=`
      uniform float uPropTime;
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;

      vec3 abyssHash(vec2 cell) {
        vec3 h = fract(cell.xyx * vec3(.1031, .1030, .0973));
        h += dot(h, h.yxz + 33.33);
        return fract((h.xxy + h.yzz) * h.zyx);
      }

      float abyssStars(vec2 plane, float seed) {
        vec2 cell = floor(plane);
        vec3 h = abyssHash(cell + seed);
        vec2 point = .23 + .54 * h.xy;
        vec2 delta = fract(plane) - point;
        float radius = mix(.055, .17, h.z);
        float pixel = min(.24, .55 * length(fwidth(plane)));
        float core = 1. - smoothstep(max(0., radius - pixel), radius + pixel, length(delta));
        float halo = 1. - smoothstep(radius * .7, radius * 2.1 + pixel, length(delta));
        float flicker = .75 + .25 * sin(uPropTime * (1.4 + h.y) + h.x * 21.);
        return step(.68, h.z) * (core + .17 * halo) * flicker * (1. - smoothstep(.19, .48, length(fwidth(plane))));
      }
    `+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      vec3 abyssTint = diffuseColor.rgb;
      vec2 abyssRay = vAbyssEye.xy / max(vAbyssEye.z, .31 * length(vAbyssEye));
      vec2 abyssUV = vAbyssUV - .5;
      vec2 abyssDrift = vec2(uPropTime * .039, -uPropTime * .018);
      vec2 abyssDeep = abyssUV - abyssRay * .58;
      float abyssMist = .5 + .5 * sin(12. * abyssDeep.x + 7. * abyssDeep.y
        + 2. * sin(7. * abyssDeep.y - uPropTime * .38));
      vec3 abyssLight = vec3(.0015, .004, .015) + vec3(.011, .019, .053) * abyssMist * abyssMist;
      abyssLight += vec3(.12, .20, .62) * abyssStars((abyssUV - abyssRay * .62) * 24. + abyssDrift, vAbyssFace + 97.);
      abyssLight += vec3(.30, .17, .66) * abyssStars((abyssUV - abyssRay * .41) * 16. - abyssDrift * .82, vAbyssFace + 51.);
      abyssLight += vec3(.04, .58, .63) * abyssStars((abyssUV - abyssRay * .23) * 11. + abyssDrift * .62, vAbyssFace + 23.);
      abyssLight += vec3(.55, .98, .91) * abyssStars((abyssUV - abyssRay * .08) * 8. - abyssDrift * .43, vAbyssFace);
      float abyssEdge = .5 - max(abs(abyssUV.x), abs(abyssUV.y));
      float abyssInside = smoothstep(.012, .042, abyssEdge);
      float abyssRim = smoothstep(0., .008, abyssEdge) * (1. - smoothstep(.008, .023, abyssEdge));
      diffuseColor.rgb *= mix(vec3(.028, .052, .07), vec3(.004, .005, .012), abyssInside);
    `).replace("#include <emissivemap_fragment>",`
      #include <emissivemap_fragment>
      totalEmissiveRadiance += abyssTint * (abyssLight * abyssInside + vec3(.015, .11, .12) * abyssRim);
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function gy(){let n={value:0};return{props:[NA(n),BA(n)],animate(e){n.value=e}}}var xy=new M(0,1,0),yy=new M(0,0,1),OA={left:new qe().setFromAxisAngle(yy,Math.PI/2),right:new qe().setFromAxisAngle(yy,-Math.PI/2)},zA=new qe,VA=new M;function vy(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(xy,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(zA.setFromAxisAngle(xy,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(OA[n.side]),n.target.copy(n.gripPosition).sub(VA.copy(Zi).applyQuaternion(n.mesh.quaternion))}function _y(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let b=0;b<g.length;b++)g[b]=(Math.random()*2-1)*(1-b/g.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),m=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(Oe.clamp(f,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(m).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:m,volume:g,enabled:b}){if(h){p.forEach((w,v)=>{a[v]=Math.max(0,a[v]-f);let E=w.valid&&w.groundContact;E&&!o[v]&&!a[v]&&b&&(c(g),a[v]=.11),o[v]=E});return}r=Math.max(0,r-f),t=x?t+m:0,x&&b&&r===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function My(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new $e;r.setAttribute("position",new ht(t,3).setUsage(Sn)),r.setAttribute("color",new ht(i,3).setUsage(Sn));let s=new jr(r,new Mi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Kr(new Vn(1,12,8)).attributes.position,a=new Kr(new ci(1).scale(...eh)).attributes.position,l=new WeakMap,c=new M(1,1,1),u=new qe,d=new M,f=new M,h=new M,p=new M,x=new M,m=new M,g=new M,b=new M(0,1,0),w={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},v=0;function E(_,A,F){v+2>1e5||(_.toArray(t,v*3),F.toArray(i,v++*3),A.toArray(t,v*3),F.toArray(i,v++*3))}function T(_,A,F,N,G){for(let W=0;W<_.count;W+=2)d.fromBufferAttribute(_,W).multiply(N).applyQuaternion(F).add(A),f.fromBufferAttribute(_,W+1).multiply(N).applyQuaternion(F).add(A),E(d,f,G)}function L(_,A,F,N){if(_.sphereRadius){T(o,A,F,p.setScalar(_.sphereRadius),N);return}for(let{a:G,b:W,c:k}of _.faces)d.copy(G).applyQuaternion(F).add(A),f.copy(W).applyQuaternion(F).add(A),h.copy(k).applyQuaternion(F).add(A),E(d,f,N),E(f,h,N),E(h,d,N)}function U(_,A,F,N){if(A.lengthSq()<1e-8)return;x.copy(_).addScaledVector(A,F),m.copy(A).normalize(),g.crossVectors(m,b),g.lengthSq()<1e-8?g.set(1,0,0):g.normalize();let G=Math.min(.09,_.distanceTo(x)*.3);p.copy(x).addScaledVector(m,-G),E(_,x,N),E(x,d.copy(p).addScaledVector(g,G*.5),N),E(x,f.copy(p).addScaledVector(g,-G*.5),N)}function S({settings:_,boxes:A,bodies:F,hands:N,locomotion:G,velocity:W,head:k,body:J,neck:B,proxies:oe,gravity:ce,appliedMove:ie,playerActive:se,inVR:we}){if(v=0,s.visible=_.debugPalm||_.debugHitboxes||_.debugInvisible||_.debugForces||_.debugBody,!!s.visible){if(_.debugHitboxes||_.debugInvisible){for(let me of A){let fe=me.mesh?.isObject3D&&me.mesh.visible;if(!(fe?!_.debugHitboxes:!_.debugInvisible)){if(me.shape)L(me.shape,me.position,me.quaternion,fe?w.solid:w.proxy);else if(me.heightfield&&me.mesh?.geometry){let Q=me.mesh.geometry,ne=l.get(Q),xe=Q.attributes.position.version;ne?.version!==xe&&(ne?.edges.dispose(),ne={version:xe,edges:new Kr(Q)},l.set(Q,ne)),T(ne.edges.attributes.position,me.mesh.position,me.mesh.quaternion,c,w.solid)}}}if(_.debugHitboxes)for(let me of F)me.blocksPlayer&&me.mesh.visible&&L(me.shape,me.mesh.position,me.mesh.quaternion,w.solid)}if(se){if(_.debugBody){if(_.collisions)for(let{position:me,radius:fe}of oe)T(o,me,u,p.setScalar(fe),w.rig);E(k,B,w.rig),E(B,J,w.rig)}if(_.debugForces&&(U(k,W,.13,w.velocity),U(k,b,-ce*.038,w.force),U(k,ie,5,w.movement)),we&&(_.debugPalm||_.debugForces))for(let me of G.hands){let{hand:fe,normal:Q,offset:ne}=me;if(fe.valid){if(_.debugPalm){T(o,fe.gripPosition,u,p.setScalar(.014),w.grip);for(let xe=0;xe<3;xe++)m.set(0,0,0).setComponent(xe,.075).applyQuaternion(fe.controllerRotation),U(fe.gripPosition,m,1,w.grip);x.copy(fe.mesh.position).add(ne),T(a,x,fe.mesh.quaternion,c,w.palm),E(fe.gripPosition,x,w.grip),fe.hasSupport&&(x.copy(Zi).applyQuaternion(fe.mesh.quaternion).add(fe.mesh.position),T(a,x,fe.mesh.quaternion,c,w.grip))}_.debugForces&&fe.surface&&U(fe.anchor,Q,.25,w.normal)}}}r.setDrawRange(0,v);for(let me of["position","color"]){let fe=r.attributes[me];fe.clearUpdateRanges(),v&&fe.addUpdateRange(0,v*3),fe.needsUpdate=!!v}}}return{update:S}}function zh(n,e,t){let i=new et(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function by(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function Sy(n){switch(n){case"sphere":return new Vn(.5,24,16);case"cylinder":return new Ft(.5,.5,1,24);case"cone":return new ki(.5,1,24);case"torus":return new ui(.34,.14,12,32);case"capsule":return new Jr(.32,.36,8,16);default:return new et(1,1,1)}}var Cp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Ay=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Rp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Vh=8e6,bl=512,Ei=1024,wy=512,Xt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Ty=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Sl(n){if(typeof n=="string"){if(n.length>Vh)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>bl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+bl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},name:Ty(n.name,56,"Ma map"),worldSize:Xt(n.worldSize,24,2048,240),spawn:{x:Xt(e.x,-Ei,Ei,0),y:Xt(e.y,-256,256,.06),z:Xt(e.z,-Ei,Ei,3),yaw:Xt(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let r=t.terrain&&typeof t.terrain=="object"?Ro(t.terrain):null,s=t.model?cs({version:1,models:[t.model]}).models[0]:null;if(s&&!s.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Ty(t.name,36,"Pi\xE8ce "+(i+1)),x:Xt(t.x,-Ei,Ei,0),y:Xt(t.y,-256,256,0),z:Xt(t.z,-Ei,Ei,0),w:Xt(t.w,.05,wy,3),h:Xt(t.h,.05,256,.5),d:Xt(t.d,.05,wy,3),pitch:r?0:Xt(t.pitch,-180,180,0),yaw:r?0:Xt(t.yaw,-360,360,0),roll:r?0:Xt(t.roll,-180,180,0),...r?{terrain:r}:{},...s?{model:s}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(t.primitive)?t.primitive:"box",uvScale:Xt(t.uvScale,.05,100,1),uvOffsetX:Xt(t.uvOffsetX,-100,100,0),uvOffsetY:Xt(t.uvOffsetY,-100,100,0),uvRotation:Xt(t.uvRotation,-360,360,0),material:Math.round(Xt(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:Xt(t.grip,0,1.5,.8),gravity:Xt(t.gravity,.05,2.5,1),bounce:Xt(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function Ey(n){return Sl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Bo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function kh(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Cy(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new rn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ei||Math.abs(d)>Ei||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var wl="gorilla-lab-custom-map-v1";function Ry(n){let e=new Blob([JSON.stringify(Sl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function Py({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(V=>V.half&&V.mesh?.isObject3D).map(V=>V.mesh)),c=new yt;n.add(c);let u=[],d=[],f=new Hi,h=new Map,p=0,x=null,m="",g=-1,b=-1,w="",v="",E=new et(1,1,1),T=new Be(E,new vt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));T.visible=!1,n.add(T);let L=new Wi,U=new M,S=new M,_=document.querySelector("#map-note");function A(V){w=V,_.textContent=V}function F(){d.length>=20&&d.shift(),d.push(JSON.stringify(x))}function N(V,ge){let Me=h.get(V);if(!Me){Me={materials:new Set,texture:null,failed:!1},h.set(V,Me);let C=te=>{if(!(h.get(V)!==Me||Me.failed)){Me.failed=!0;for(let Z of Me.materials)Z.map=null,Z.needsUpdate=!0;Me.texture?.dispose(),te&&A(te)}},Y=f.load(V,te=>{(te.image.width>2048||te.image.height>2048)&&C("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>C());Me.texture=Y,Y.colorSpace=ft,Y.wrapS=Y.wrapT=Yn}return Me.materials.add(ge),ge.map=Me.failed?null:Me.texture,Me}function G(){for(let[V,ge]of h)ge.materials.size||(h.delete(V),ge.failed||ge.texture.dispose())}function W(V){let ge=e.mapMaterial(V.material,s());if(!V.texture&&V.color==="#ffffff")return{material:ge,custom:!1};let Me=ge.clone();return Me.onBeforeCompile=ge.onBeforeCompile,Me.customProgramCacheKey=ge.customProgramCacheKey,Me.color.multiply(new De(V.color)),{material:Me,custom:!0,ownTexture:V.texture?N(V.texture,Me):null}}function k(V){c.remove(V.mesh),V.mesh.geometry.dispose(),V.vegetation&&Ex(V.vegetation),V.custom&&(V.ownTexture?.materials.delete(V.mesh.material),V.model?uh(V.mesh.material):V.mesh.material.dispose())}function J(V,ge){if(V.model){let ee=Co(V.model);ee.scale(V.w,V.h,V.d);let le=_r(V.model),de=new Be(ee,le);de.position.set(V.x,V.y,V.z),de.rotation.set(Oe.degToRad(V.pitch),Oe.degToRad(V.yaw),Oe.degToRad(V.roll??0),"YXZ"),de.castShadow=de.receiveShadow=!0,de.userData.mapIndex=ge,V.model.kind==="prop"&&(de.visible=!1),c.add(de);let R=ap(V.model),I=new M(V.w,V.h,V.d).clone().divide(R.boundsSize.clone().max(new M(1e-5,1e-5,1e-5))),H=R.size.clone().multiply(I).multiplyScalar(.5),re=R.center.clone().sub(R.boundsCenter).multiply(I).applyQuaternion(de.quaternion),j=de.position.clone().add(re),ye={mesh:de,position:j,quaternion:de.quaternion,half:H,min:H.clone().negate(),shape:fi(H),friction:V.grip,gravity:V.gravity,bounce:V.bounce,zone:!0,type:V.material};return{mesh:de,collider:ye,custom:!0,model:!0}}let{material:Me,custom:C,ownTexture:Y}=W(V),te=V.terrain?wx(V):V.primitive&&V.primitive!=="box"?Sy(V.primitive).scale(V.w,V.h,V.d):zh(V.w,V.h,V.d),Z=new Be(by(te,V),Me);Z.position.set(V.x,V.y,V.z),Z.rotation.set(Oe.degToRad(V.pitch),Oe.degToRad(V.yaw),Oe.degToRad(V.roll??0),"YXZ"),Z.castShadow=Z.receiveShadow=!0,Z.userData.mapIndex=ge,c.add(Z);let D=new M(V.w/2,V.h/2,V.d/2),X={mesh:Z,position:Z.position,quaternion:Z.quaternion,half:D,min:D.clone().negate(),shape:fi(D),friction:V.grip,gravity:V.gravity,bounce:V.bounce,zone:!0,type:V.material};if(!V.terrain)return{mesh:Z,collider:X,custom:C,ownTexture:Y};let O=Ax(V);return O&&Z.add(O),{mesh:Z,collider:Tx(V,Z),custom:C,ownTexture:Y,vegetation:O}}function B(){for(let V of u){let ge=x?.pieces[V.mesh.userData.mapIndex];if(!ge||V.ownTexture||V.model)continue;let Me=e.mapMaterial(ge.material,s());V.custom?V.mesh.material.map!==Me.map&&(V.mesh.material.map=Me.map,V.mesh.material.needsUpdate=!0):V.mesh.material=Me}}function oe(){for(let ge of u)k(ge);u.length=0;let V=x?.pieces??[];m=x?"custom-"+ls(JSON.stringify(x)):"",o.forEach(ge=>ge.visible=!x||x.arenaBase&&!l.has(ge));for(let ge=0;ge<V.length;ge++)u.push(J(V[ge],ge));if(G(),x){let ge=x.arenaBase?a.filter(Me=>!l.has(Me.mesh)):[];e.boxes.splice(0,e.boxes.length,...ge,...u.filter((Me,C)=>V[C].solid&&V[C].model?.kind!=="prop").map(Me=>Me.collider))}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),x)try{localStorage.setItem(wl,JSON.stringify(x))}catch{}else try{localStorage.removeItem(wl)}catch{}}function ce(V){let ge=Sl(V);p++,d.length=0,x=ge,g=b=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),oe(),i(x.spawn.yaw),A("Map : "+x.name+" \xB7 "+x.pieces.length+" pi\xE8ces")}function ie(){p++,x=null,d.length=0,g=b=-1,t.set(0,0,3),oe(),i(0),A("Ar\xE8ne int\xE9gr\xE9e")}function se(){ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[kh({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function we(){if(!d.length)return A("Rien \xE0 annuler.");x=Sl(d.pop()),g=b=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),oe(),A("Derni\xE8re modification annul\xE9e.")}function me(){x?Ry(x):A("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function fe(V,ge,Me,C){x&&(F(),x.spawn={x:V,y:ge,z:Me,yaw:Oe.radToDeg(C)},t.set(V,ge,Me),oe(),A("Point de d\xE9part m\xE9moris\xE9."))}function Q(V,ge,Me,{mode:C,piece:Y,head:te,feet:Z}){L.set(V,ge),L.far=12;let D=u.map(I=>I.mesh);C===1&&x?.arenaBase&&D.push(...a.filter(I=>I.heightfield).map(I=>I.mesh));let X=L.intersectObjects(D,!1),O=C>=5?X.find(I=>x?.pieces[I.object.userData.mapIndex]?.terrain):X[0];if(T.visible=!1,!x)return;if(C>=5){let I=O?.object.userData.mapIndex,H=x.pieces[I];if(!H?.terrain||!Me)return;if(F(),C===9){let re=Y.terrain?.detail??H.terrain.detail,j=bx(H.terrain,re);H.terrain=Ro({...j,...Y.terrain,heights:j.heights})}else{let re={mode:["raise","lower","smooth","flatten"][C-5],radius:Y.brushRadius,strength:Y.brushStrength,target:H.y};Sx(H,O.point.x,O.point.z,re)}oe(),A("Relief modifi\xE9.");return}if(C===2||C===3||C===4){if(!O)return;let I=O.object.userData.mapIndex,H=x.pieces[I];if(Me&&C===2&&(g=I,b=I,A("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Me&&C===3){if(x.pieces.length===1)return A("Garde au moins une pi\xE8ce dans la map.");F(),x.pieces.splice(I,1),g=b=-1,oe(),A("Pi\xE8ce supprim\xE9e.")}Me&&C===4&&(F(),Object.assign(x.pieces[I],{material:Y.material,grip:Y.grip,gravity:Y.gravity,bounce:Y.bounce,solid:Y.solid,texture:Y.texture}),oe(),A("Surface modifi\xE9e.")),O&&(T.position.copy(O.object.position),T.rotation.copy(O.object.rotation),T.scale.set(H.w,H.h,H.d).multiplyScalar(1.006),T.visible=!0,T.material.color.set(C===3?"#ff8271":"#ffe2a2"));return}if(!O)return;let ee=b>=0?x.pieces[b]:Y;if(O.object.userData.mapIndex===b)return;U.copy(O.face.normal).transformDirection(O.object.matrixWorld);let le=ee.terrain?{...ee,x:Math.round(O.point.x*2)/2,y:O.point.y,z:Math.round(O.point.z*2)/2,pitch:0,yaw:0}:Cy(O.point,U,ee);if(!le)return;T.position.set(le.x,le.y,le.z),T.rotation.set(Oe.degToRad(le.pitch),Oe.degToRad(le.yaw),Oe.degToRad(le.roll??0),"YXZ"),T.scale.set(le.w,le.h,le.d),T.updateMatrixWorld(!0),T.visible=!0;let de=new Qt().setFromObject(T),R=new Qt(new M(te.x-.26,Z+.01,te.z-.26),new M(te.x+.26,te.y+.19,te.z+.26)),y=le.solid&&de.intersectsBox(R);if(T.material.color.set(y?"#fd7763":"#8be4b9"),Me){if(y)return A("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(b<0&&x.pieces.length>=bl)return A("Limite de "+bl+" pi\xE8ces atteinte.");F(),b>=0?(x.pieces[b]=le,b=-1):x.pieces.push(le),oe(),A("Pi\xE8ce pos\xE9e \xB7 "+x.pieces.length+" pi\xE8ces")}}let ne=document.querySelector("#map-file"),xe=document.querySelector("#map-url");ne.onchange=async()=>{let V=ne.files[0];if(!V)return;let ge=++p;ne.value="";try{if(V.size>Vh)throw Error("Map trop lourde.");let Me=await V.text();ge===p&&ce(Me)}catch(Me){ge===p&&A(Me.message)}};async function Pe(V){let ge=++p;try{let Me=new URL(V,location.href);if(!["http:","https:"].includes(Me.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let C=await fetch(Me,{credentials:"omit"});if(ge!==p)return;if(!C.ok)throw Error("URL de map inaccessible ("+C.status+").");if(Number(C.headers.get("content-length"))>Vh)throw Error("Map trop lourde.");let te=await C.text();ge===p&&ce(te)}catch(Me){ge===p&&A(Me.message)}}return document.querySelector("#map-load-url").onclick=()=>Pe(xe.value),document.querySelector("#map-export").onclick=me,document.querySelector("#map-reset").onclick=ie,{placedModels:()=>x?.pieces.filter(V=>V.model?.kind==="prop")??[],modelPieces:()=>x?.pieces.filter(V=>!V.terrain&&V.name!=="Sol")??[],refreshMaterials:B,load:ce,loadURL:Pe,reset:ie,blank:se,undo:we,save:me,edit:Q,recenter:fe,inform:A,clearGhost(){T.visible=!1},get active(){return!!x},get builtIn(){return!x||x.arenaBase===!0},get status(){return w},get yaw(){return x?.spawn.yaw??0},get nodes(){return x?.pieces.length??0},get name(){return x?.name??null},get signature(){return m}}}var Pp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Iy(){let n=new Be(new $t(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+Pp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Ly(n){let e=new Zr,t=new Wt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new Se(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+Pp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new Be(new $t(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(b=>!b.viewport?.z||!b.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let b=0;b<l.length;b++){let w=l[b],v=Math.max(32,Math.round(w.viewport.z)),E=Math.max(32,Math.round(w.viewport.w)),T=a[b];T?(T.width!==v||T.height!==E)&&T.setSize(v,E):T=a[b]=new Rn(v,E,{type:o?Si:Gn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=b===0&&m,n.setRenderTarget(T),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Dy(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Uy(n,e,t){let i=new tn({color:16777215,vertexColors:!0,flatShading:!0}),r=new Ft(.16,.25,3.15,9,12),s=r.attributes.position,o=new De,a=[];for(let ie=0;ie<s.count;ie++){let se=Math.round((s.getY(ie)+1.575)/3.15*12),we=Math.floor((Math.atan2(s.getX(ie),s.getZ(ie))+Math.PI)*1.43);o.setHSL(.084+se*.002,.35,.35+se%3*.032+we%3*.018),a.push(o.r,o.g,o.b)}r.setAttribute("color",new Ve(a,3));let l=new yt;l.position.set(Tp.x,0,Tp.z),l.rotation.z=-.14,n.add(l);let c=new Be(r,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(ie,se,we=.85){let me=ie.getWorldPosition(new M),fe=ie.getWorldQuaternion(new qe);e.push({half:se,min:se.clone().negate(),position:me,quaternion:fe,mesh:{position:me,quaternion:fe},shape:fi(se),friction:we,gravity:1})}for(let ie=0;ie<4;ie++){let se=new Lt;se.position.y=(ie+.5)*3.15/4,l.add(se);let we=.237-ie*.022;u(se,new M(we,.398,we))}let d=[],f=[],h=3.14;function p(ie,se,we,me){d.push(...ie,...se,...we),o.setHSL(.25+me*.043,.54,.28+me*.17);for(let fe=0;fe<3;fe++)f.push(o.r,o.g,o.b)}for(let ie=0;ie<10;ie++){let me=function(fe,Q){let ne=fe*we;return[Math.cos(se)*ne-Math.sin(se)*Q,h+Math.sin(fe*Math.PI)*.38-fe*fe*.54+ie%3*.055,Math.sin(se)*ne+Math.cos(se)*Q]},se=ie*2.39996,we=1.35+ie%4*.2;for(let fe=0;fe<7;fe++){let Q=fe/7,ne=(fe+1)/7,xe=.285*Math.sin(Math.PI*Q)**.7,Pe=.285*Math.sin(Math.PI*ne)**.7;for(let V of[-1,1]){let ge=me(Q,xe*V),Me=me(ne,Pe*V);ge[1]-=.065,Me[1]-=.065,p(me(Q,0),ge,Me,.31+fe%4*.14),p(me(Q,0),Me,me(ne,0),.47+ie%3*.16)}}}let x=new $e;x.setAttribute("position",new Ve(d,3)),x.setAttribute("color",new Ve(f,3)),x.computeVertexNormals();let m=new Be(x,new tn({vertexColors:!0,side:qt,flatShading:!0}));m.castShadow=!0,l.add(m);let g=new gt({color:"#956238",roughness:.92,flatShading:!0}),b=[];for(let ie=0;ie<5;ie++){let se=ie*Math.PI*2/5,we=new Be(new Dt(.124,1),g);we.position.set(Math.cos(se)*(.25+ie%2*.1),2.88+ie%3*.06,Math.sin(se)*(.25+ie%2*.1)),we.scale.set(.91,1.16,.91),we.castShadow=!0,l.add(we),b.push(we)}l.updateMatrixWorld(!0);let w=[],v=[],E=new tn({color:"#485d5d",flatShading:!0});function T([ie,se],we,me){let fe=new Be(new et(.095,.68,.11),E);fe.position.set(ie,.34,se+.46),fe.castShadow=fe.receiveShadow=!0,n.add(fe),u(fe,new M(.0475,.34,.055));let Q=new yt;Q.position.set(ie,.85,se+.4),Q.rotation.x=-.35,n.add(Q);let ne=new Be(new et(.64,.36,.055),new tn({color:"#182831"}));Q.add(ne);let xe=document.createElement("canvas");xe.width=512,xe.height=96;let Pe=xe.getContext("2d"),V=new Jn(xe);V.colorSpace=ft;let ge=new Be(new $t(.61,.095),new vt({map:V}));ge.position.set(0,.116,.03),Q.add(ge);let Me=.592/me.length,C=me.map(([te,Z],D)=>{let X=new Be(new et(Me-.012,.155,.04),new tn({color:"#478086"}));X.position.set(-.296+Me*(D+.5),-.045,.046),Q.add(X),w.push(X),X.userData.touchWidth=Me-.012;let O=document.createElement("canvas");O.width=208,O.height=172;let ee=new Jn(O);ee.colorSpace=ft;let le=new Be(new $t(Me-.017,.139),new vt({map:ee}));le.position.z=.0205,X.add(le);let de=-1/0;return X.userData.action=()=>{let R=performance.now();R-de<250||(de=R,Z(),L(),X.position.z=.036,setTimeout(()=>{X.position.z=.046},115))},{label:te,context:O.getContext("2d"),texture:ee}});function Y(){Pe.fillStyle="#182831",Pe.fillRect(0,0,512,96),Pe.fillStyle="#ffe1a0",Pe.font="bold 38px system-ui",Pe.fillText(we,17,62,478);for(let te of C){let Z=te.context;Z.fillStyle="#386269",Z.fillRect(0,0,208,172),Z.fillStyle="#fff2d5",Z.textAlign="center",Z.font="bold 27px system-ui";let D=(typeof te.label=="function"?te.label():te.label).split("|");D.forEach((X,O)=>Z.fillText(X,104,(D.length>1?68:97)+O*37,188)),te.texture.needsUpdate=!0}V.needsUpdate=!0}v.push(Y)}function L(){for(let ie of v)ie()}T(Oo.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,zo[0])],["Boule",()=>t.spawn(1,zo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,zo[0])],["Vider",t.clear]]),T(Oo.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,zo[1])],["Sph\xE8re",()=>t.spawn(5,zo[1])]]),T(Oo.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),T(Oo.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),T(Oo.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),L();let U=new yt,{x:S,y:_,z:A}=Ap;U.position.set(S,_,A),n.add(U);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let ie=0;ie<3;ie++){let se=[.9,.58,.27][ie],we=new Be(new en(se,20),new tn({color:F[ie],side:qt}));we.position.z=ie*.012,U.add(we)}let N=new Be(new et(.14,1.5,.14),E);N.position.set(0,.75-_,-.11),U.add(N);let G=0,W=document.createElement("canvas");W.width=256,W.height=64;let k=W.getContext("2d"),J=new Jn(W);J.colorSpace=ft;let B=new Be(new $t(1.4,.35),new vt({map:J,side:qt}));B.position.set(0,2.64-_,.02),U.add(B);function oe(){k.fillStyle="#182831",k.fillRect(0,0,256,64),k.textAlign="center",k.font="bold 28px system-ui",k.fillStyle="#fff0ce",k.fillText("CIBLE  \xB7  "+G,128,42),J.needsUpdate=!0}function ce(ie){for(let se of ie){if(!se.beforePhysics||se.owner||se.frozen||!se.mesh.visible)continue;let we=se.beforePhysics,me=se.mesh.position;if(we.z<=A||me.z>A||se.velocity.z>=-1)continue;let fe=(we.z-A)/(we.z-me.z),Q=Math.hypot(Oe.lerp(we.x,me.x,fe)-S,Oe.lerp(we.y,me.y,fe)-_);Q<=.9+se.radius*.45&&(G+=Q<.27?3:Q<.58?2:1,oe())}}return oe(),{targets:w,coconuts:b,redraw:L,updateTarget:ce,score:()=>G,setScore(ie){G=ie,oe()}}}function Tl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Er=(n,e,t)=>n+(e-n)*t,Vo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function Gh(n,e){let t=Math.floor(n),i=Math.floor(e),r=Vo(0,1,n-t),s=Vo(0,1,e-i);return Er(Er(Tl(t,i),Tl(t+1,i),r),Er(Tl(t,i+1),Tl(t+1,i+1),r),s)}function Fy(n,e){return Gh(n,e)*.54+Gh(n*2.07+3.4,e*2.07-6.1)*.26+Gh(n*4.2+9,e*4.2)*.13+Gh(n*8.6,e*8.6-13)*.07}function Ny(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Er(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),m=0,g=0,b=0;if(c>.025)if(n){let v=Tl(p+792,l+677);v>.9988&&(b=(v-.9988)*49e3*Vo(.09,.3,c))}else{let[v,E]=r[p],T=2.8*u/(c+.16),L=v*T+3.6,U=E*T-8.1,S=Fy(L,U),_=Fy(L-.12,U-.09);m=Vo(.49,.66,S)*Vo(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(S-_)*5+(S-.54)*.8))}let w=n?1:Er(.94,1,Vo(.05,.34,c));i[x]=Er(h[0],(139+115*g)*w,m)+b,i[x+1]=Er(h[1],(154+100*g)*w,m)+b*.94,i[x+2]=Er(h[2],(178+77*g)*w,m)+b*.86,i[x+3]=255}}let a=new _i(i,1024,512,In);return a.colorSpace=ft,a.wrapS=Yn,a.magFilter=un,a.minFilter=Pn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function By(){return{day:Ny(!1),night:Ny(!0)}}function Hh(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new Jn(i);return r.colorSpace=ft,r}function Oy(n,e){let{day:t,night:i}=By(),r=new Be(new Vn(180,40,20),new vt({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(r);let s=Hh(128,128,(y,I)=>{let H=y.createRadialGradient(I/2,I/2,0,I/2,I/2,I/2);H.addColorStop(0,"#fff8df"),H.addColorStop(.12,"#fff3bd"),H.addColorStop(.18,"rgba(255,225,144,.40)"),H.addColorStop(1,"rgba(255,220,144,0)"),y.fillStyle=H,y.fillRect(0,0,I,I)}),o=new Aa(new to({map:s,blending:$n,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=ho,a.needsUpdate=!0;let l=new vo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Xa("#daeaff","#88724c",2.25),u=new ja("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(y){h=f[y]?y:0;let I=f[h];c.color.set(I.fill),c.groundColor.set(I.ground),c.intensity=I.hemi,u.color.set(I.sun),u.intensity=I.power,d.set(...I.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(I.sun),o.material.opacity=I.glow,r.material.map=h===2?i:t,r.material.color.set(I.sky),n.fog.color.set(I.fog),n.background.set(I.fog),n.environmentIntensity=m*[1,.56,.09][h]}function x(y){if(!u.castShadow)return;let I=u.target.position,H=Math.round(y.x/4)*4,re=Math.round(y.y/4)*4,j=Math.round(y.z/4)*4;I.x===H&&I.y===re&&I.z===j||(I.set(H,re,j),u.position.copy(I).add(d))}let m=0;n.background=new De(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function b(y,I,H){let[,re,j]=g[I],ye=512;y.save(),y.scale(H/512,H/512),y.fillStyle=re,y.fillRect(0,0,ye,ye);let pe=I+19;function be(){return pe=Math.imul(pe,1664525)+1013904223>>>0,pe/4294967296}if(y.fillStyle=j,I===16){for(let _e=0;_e<16;_e++)for(let he=0;he<16;he++)(he+_e)%2===0&&y.fillRect(he*32,_e*32,32,32);y.fillStyle="#ff3957",y.fillRect(253,0,6,512),y.fillRect(0,253,512,6)}else if([0,2,8,15].includes(I)){let _e=I===15?32:64;y.globalAlpha=.48;for(let he=0;he<ye;he+=_e){y.fillRect(0,he,ye,I===8?3:2);for(let Te=-_e;Te<ye;Te+=_e)y.fillRect(Te+he/_e%2*(I===2?_e/2:0),he,2,_e)}}else if([4,5,6,7,10,11,12].includes(I)){let _e=I===5?38:I===7?64:18;for(let he=0;he<_e;he++){y.strokeStyle=j,y.globalAlpha=.08+be()*.22,y.lineWidth=I===5?1+be()*8:1+be()*4;let Te=be()*ye,ze=I===5?.018:.009;y.beginPath();for(let Ae=0;Ae<=ye;Ae+=8){let Re=Te+Math.sin(Ae*ze+he)*(I===6||I===7?4:12+he%5*3)+(I===4?Ae*.28:0);Ae===0?y.moveTo(Ae,Re):y.lineTo(Ae,Re)}y.stroke()}}else{y.globalAlpha=.27;for(let _e=0;_e<120;_e++){let he=be()*ye,Te=be()*ye,ze=2+be()*6;y.beginPath(),y.arc(he,Te,ze,0,Math.PI*2),y.fill()}}if(I!==16)for(let _e=0;_e<4400;_e++)y.globalAlpha=.05+be()*.1,y.fillStyle=be()>.5?j:"#222324",y.fillRect(be()*ye,be()*ye,1+be()*4,1+be()*3);y.restore()}let w=new Set([0,2,4,5,8,15,16]),v=g.map(([y,I,H,re,j,ye],pe)=>{let be=w.has(pe)?512:256,_e=Hh(be,be,Te=>b(Te,pe,be));_e.wrapS=_e.wrapT=Yn;let he=new gt({map:_e,roughness:re,metalness:j,flatShading:!0,opacity:ye,transparent:ye<1,depthWrite:ye===1});return he.name=y,he}),E=v.map(y=>y.map.image),T=512,L=v.map(y=>new tn({map:y.map,flatShading:!0,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite})),U={value:0},S={value:.24},_={value:null},A={value:0};function F(){_.value?.dispose(),_.value=Hh(512,512,(y,I)=>{y.fillStyle="#ffffff",y.fillRect(0,0,I,I);let H=I/52,re=I/64;for(let j of N){if(!j.position||!j.half||j.position.y+j.half.y<.22)continue;let ye=(j.position.x+26)*H,pe=(j.position.z+54)*re,be=Math.min(55,j.half.x*H+5),_e=Math.min(72,j.half.z*re+6);y.save(),y.translate(ye+j.half.y*H*.2,pe+j.half.y*re*.24),y.scale(be,_e);let he=y.createRadialGradient(0,0,.15,0,0,1);he.addColorStop(0,"rgba(22,37,65,.54)"),he.addColorStop(.58,"rgba(36,54,76,.29)"),he.addColorStop(1,"rgba(38,48,57,0)"),y.fillStyle=he,y.fillRect(-1,-1,2,2),y.restore()}})}for(let y of[...v,...L])y.onBeforeCompile=I=>{I.uniforms.uFocusAmount=U,I.uniforms.uFocusRadius=S,I.uniforms.uLabLightmap=_,I.uniforms.uLabBakedStrength=A,I.vertexShader=`varying vec3 vLabPosition;
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
      `)},y.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],G=[];function W(y,I,H,re,j,ye,pe,be=0,_e=0,he=1,Te=1,ze=!1){let Ae=new Be(ze?new et(j,ye,pe):zh(j,ye,pe),v[be]);Ae.position.set(I,H,re),Ae.rotation.x=_e,Ae.receiveShadow=!0,Ae.castShadow=!0,n.add(Ae);let Re=new M(j/2,ye/2,pe/2),We={mesh:Ae,position:Ae.position,quaternion:Ae.quaternion,half:Re,min:Re.clone().negate(),friction:he,gravity:Te,name:y,type:be,shape:fi(Re)};return N.push(We),We}let k=cy.map(({name:y,bounds:I,type:H=0,friction:re=.78,gravity:j=1})=>{let{xMin:ye,xMax:pe,zMin:be,zMax:_e}=I;return W(y,(ye+pe)/2,-.33,(be+_e)/2,pe-ye,.66,_e-be,H,0,re,j)});for(let y of Object.values(dy))for(let I of y)W(...I);let{xMin:J,xMax:B,zMin:oe,zMax:ce}=ay;W("But\xE9e arri\xE8re",0,1.35,oe+.4,B-J,2.7,.6,2),W("But\xE9e ouest",J+.3,1.05,(oe+ce)/2,.6,2.1,ce-oe,2),W("But\xE9e est",B-.3,1.05,(oe+ce)/2,.6,2.1,ce-oe,2);let{xMin:ie,xMax:se,zMin:we,zMax:me}=No.hills.bounds,fe=se-ie,Q=me-we,ne=16,xe=64,Pe=new $t(fe,Q,ne,xe).rotateX(-Math.PI/2).translate(ie+fe/2,0,we+Q/2),V=Pe.attributes.uv;for(let y=0;y<V.count;y++)V.setXY(y,V.getX(y)*fe/2.6,V.getY(y)*Q/2.6);let ge=Pe.attributes.position,Me;function C(y){if(Me===y)return;Me=y;let I=Me*.017;for(let H=0;H<ge.count;H++){let re=ge.getX(H),j=ge.getZ(H),ye=Math.sin(Math.PI*Oe.clamp((re-ie)/fe,0,1)),pe=Math.min(1,(j-we)*.48,(me-j)*.48),be=.93+.56*Math.sin(j*.36+I)+.32*Math.cos(re*.67+j*.26+I*1.4)+.19*Math.sin(j*.81+I*.67);ge.setY(H,Math.max(0,ye*pe*be))}ge.needsUpdate=!0,Pe.computeVertexNormals(),Pe.computeBoundingSphere()}C(ly);let Y=new Be(Pe,v[3]);Y.receiveShadow=Y.castShadow=!0,n.add(Y);let te=(y,I)=>{let H=Oe.clamp((y-ie)/fe*ne,0,ne-1e-6),re=Oe.clamp((I-we)/Q*xe,0,xe-1e-6),j=Math.floor(H),ye=Math.floor(re),pe=H-j,be=re-ye,_e=ne+1,he=ye*_e+j,Te=ge.getY(he),ze=ge.getY(he+1),Ae=ge.getY(he+_e),Re=ge.getY(he+_e+1);return pe+be<=1?Te+(ze-Te)*pe+(Ae-Te)*be:Re+(Ae-Re)*(1-pe)+(ze-Re)*(1-be)};N.push({heightfield:!0,mesh:Y,height:te,...No.hills.bounds,friction:.81,gravity:1});function Z(y,I,H,re,j=1.45){let ye=Hh(384,72,(be,_e,he)=>{be.fillStyle="#202a32",be.fillRect(0,0,_e,he),be.fillStyle=re,be.font="bold 31px system-ui",be.textAlign="center",be.fillText(y,_e/2,48,_e-20)}),pe=new Be(new $t(3.2,.6),new vt({map:ye,side:qt}));pe.position.set(I,j,H),n.add(pe),G.push(pe)}for(let y of Object.values(No)){Z(y.name.toLocaleUpperCase("fr"),...y.sign,y.color);let{xMin:I,xMax:H,zMin:re,zMax:j}=y.bounds,ye=new Ra(new $e().setFromPoints([new M(I,.025,re),new M(H,.025,re),new M(H,.025,j),new M(I,.025,j)]),new Mi({color:y.color,transparent:!0,opacity:.72}));n.add(ye),G.push(ye)}Z("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Z("MURS HAUTS",3,-31,"#e8d2ff"),Z("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let D=new gt({color:"#c8e6ed",metalness:1,roughness:.16}),X=new Be(new Dt(.54,2),D);X.position.set(Oh.x,Oh.y,Oh.z),X.castShadow=!0,n.add(X);let O=g.map((y,I)=>{let{x:H,z:re}=hy(I);return W("\xC9chantillon "+g[I][0],H,.325,re,.65,.65,.65,I,0,1,1,!0).mesh}),ee=new en(1,12).rotateX(-Math.PI/2),le=new vt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function de(y){let I=new Be(ee,le);return I.scale.setScalar(y),n.add(I),I}function R(y,I,H,re,j,ye,pe,be){let _e=I>=3;e.shadowMap.enabled=_e,u.castShadow=_e,le.opacity=I===2?.17:.11,A.value=be?.38+H*.04:0;let he=I>=9?2048:I>=6?1024:I>=4?512:256;u.shadow.intensity=.45+I*.055,u.shadow.radius=.65+I*.12;let Te=13+I*1.2;Object.assign(u.shadow.camera,{left:-Te,right:Te,top:Te,bottom:-Te}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==he&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(he,he)),o.visible=j,pe!==T&&(T=pe,v.forEach((Ae,Re)=>{let We=Ae.userData.texture??Ae.map,q=w.has(Re)?pe:Math.min(256,pe);if(We.image.width===q)return;let Ce=document.createElement("canvas");Ce.width=Ce.height=q;let Le=Ce.getContext("2d");q>512?b(Le,Re,q):Le.drawImage(E[Re],0,0,q,q);let Ne=new Jn(Ce);Ne.colorSpace=We.colorSpace,Ne.wrapS=We.wrapS,Ne.wrapT=We.wrapT,Ne.repeat.copy(We.repeat);for(let Ee of[Ae,L[Re]])Ee.userData.texture=Ne,Ee.map=Ne,Ee.needsUpdate=!0;We.dispose()}));let ze=y>=4;for(let Ae of N)Ae.mesh?.isMesh&&!Ae.zone&&(Ae.mesh.material=ze?v[Ae.type]:L[Ae.type]);Y.material=ze?v[3]:L[3];for(let Ae=0;Ae<O.length;Ae++)O[Ae].material=ze?v[Ae]:L[Ae];v.forEach((Ae,Re)=>{for(let We of[Ae,L[Re]])We.userData.texture||(We.userData.texture=We.map),We.map=ye?We.userData.texture:null,We.color.set(ye?"#ffffff":g[Re][1]),We.needsUpdate=!0}),m=re?.21+H*.067:0,D.metalness=re?.95:.1,D.roughness=re?.13:.46,r.visible=y>=2,p(h)}return{boxes:N,floors:k,probe:X,display:O,visual:R,shadow:de,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Me},setHillSeed:C,bakeLightmap:F,mapMaterial:(y,I)=>I>=4?v[y]:L[y],builtObjects:[...N.map(y=>y.mesh).filter(y=>y?.isObject3D),X,...G],materials:[...v,...L],focus(y,I,H){U.value=y?I*.75:0,S.value=.07+H*.058}}}var pv="R37",Pr=document.getElementById("game");Pr instanceof HTMLCanvasElement||(Pr=document.createElement("canvas"),Pr.id="game",Pr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Pr));var _s=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Qe;try{Qe=new ju({canvas:Pr,antialias:!_s,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Qe.xr.enabled=!0;Qe.xr.setReferenceSpaceType("local-floor");Qe.shadowMap.type=$a;Qe.shadowMap.autoUpdate=!1;var zy=-1/0;Qe.toneMapping=ou;Qe.toneMappingExposure=1.15;var At=new Zr;At.fog=new wa("#a6d4ea",55,135);var pt=new yt,ld=new yt,Jt=new Wt(70,1,.035,210);pt.add(ld);ld.add(Jt);At.add(pt);var St=Oy(At,Qe),kA=Ly(Qe),$h=Iy();At.add($h);var GA=Dy(St.probe),z=Bx(_s),HA={...z};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(z.stepVolume=n)}catch{}var Ur=_y();for(let n of["pointerdown","keydown"])addEventListener(n,Ur.unlock,{passive:!0});var WA=My(At),xs={normal:new M,surface:null},Kh=[.18,.17,.105].map(n=>({radius:n,position:new M})),jp=new M(Bo.x,Bo.y,Bo.z);pt.position.copy(jp);var an=new M,ko=new M,Rt=new M,Vy=new M,Qn=new M,vn=new M,ky=new M,Yo=new M,Cr=new M,Gy=new M,Rr=new M,Hy=new M,Wh=new M,qA=.105,qh=new M,Qh=!1,Ci=!1,Jp=0,$p=null,Rl=[],Kp=100,Yt=new M(0,1,0),sr=new qe,bt=0,ir=0,Ms=0,mi=0,Zo=NaN,ed=!1,Ip=0,ys=0,Lp=0,Xh=0,Wo=0,qo=0,Xo=0,nn=z.quality,Pl=72,Zt=!1,mv="left",ct=new URLSearchParams(location.search).has("room")?5:0,Qp=0,em=0,tm=0,jt=!0,Wy=0,XA=[],Yh=[],or=St.boxes,YA=new Dt(1,0),gv=1+Math.floor(Math.random()*($u.length-1)),xv=Ku(gv),{hand:ZA,fur:jA}=xv;function JA(n,e,t,i,r,s,o,a){let l=new Be(YA,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var cd=sp(localStorage),$A=cd.models.length?"|atelier-"+ls(JSON.stringify(cd)):"",tr=gx(cd)??xv.createHead();tr.visible=!1;At.add(tr);var Ho=new M,td=new qe,qy=new M,KA=new M,Xy=new rn(0,0,0,"YXZ"),Vp=new M,Dp=new M,er=new Se,Yy=new qe,kp=9.81,yv=null,Up=new qe,Zy=[null,null];function ud(){return .24+z.arms*.036}function QA(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Oe.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Oe.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Oe.lerp(s[2],i,r),n.skin.pose(s,!z.body)}var Ut=["left","right"].map(n=>{let e=th(n,ZA,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new qe},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Dr=new mh(M,Ut,$x),vv=nh(jA,Ut.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ut){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Pi=vv.mesh;At.add(Pi);function eE(n,e){if(z.body){Up.copy(Pi.quaternion).invert();for(let t=0;t<Ut.length;t++){let i=Ut[t];Zy[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Pi.position).applyQuaternion(Up),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Up))}vv.pose(Zy,ud(),n,e,z.hands)}}var wn=py(),_v=[0,1,2,3,4,5],Mv=[7,8,9,10,11,12,13,14],Bl=15,jy=fi(new M(.13,.088,.115)),tE=new et(.26,.176,.23),nE=new gt({color:"#536771",roughness:.36,metalness:.28});wn[Bl]={name:"Cam\xE9ra du spectateur",geo:tE,material:nE,shape:jy,lowShape:jy,mass:1.2};var{props:iE,animate:rE}=gy(),sE=mx(cd).slice(0,36),nm=[],Ll=[];function bv(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=Ar(t??r.geo,i);e.push(wn.length),wn.push({...r,shape:s,lowShape:s})}}bv(iE,nm);bv(sE,Ll);var Sv=[..._v,...Mv,...nm,...Ll];wn[8].properties={supportWhileHeld:!0};wn[11].properties={supportWhileHeld:!0};function oE(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of wn)n.supportAxis=oE(n);function aE(n){let e=new Be(new Ft(.058,.074,.1,12).rotateX(Math.PI/2),new gt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Be(new en(.048,12),new vt({color:"#7bd7ed",side:qt}));t.position.z=-.203,n.add(t);let i=new Be(new et(.045,.013,.012),new vt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function wv(n,e=!1){let t=wn[n];if(!t)return null;let i=new Be(t.geo,e?Ml(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Bl&&aE(i),i}var Tt=[],Jy=[],Fr={held:null},Jo=new Map,nr=0,lE=1,Al=new qe,Dl=new qe,El=new M,hd=new M,Ir=new M,Gp=new M,Hp=new M;function cE(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){hd.set(0,0,-1).applyAxisAngle(Yt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(El.copy(n).addScaledVector(hd,s),El.y+=.15,!Fo(n,El,Math.min(.2,t*.5),or,Gp,Hp)&&!Tt.some(o=>o.mesh.position.distanceToSquared(El)<(t+o.radius+.07)**2))return El}}return null}function ws(n,e,t,i=!1){let r=wn[n];if(!r)return null;if(!e&&(t?Ir.set(t.x,t.y,t.z):Qe.xr.isPresenting?Ir.copy(Rt):Jt.getWorldPosition(Ir),e=cE(Ir,t?.yaw??ir,r.shape.radius),!e))return i||pi("Aucun espace libre pour cet objet."),null;let s=wv(n);s.position.copy(e),At.add(s);let o=z.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:lE++,netType:n,beforePhysics:s.position.clone(),blocksPlayer:r.properties?.collidable!==!1,precise:z.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new qe,shadow:St.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Bl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),Tt.push(a),_l(a,St.boxes),a}function Tv(){for(let n of Ut)gi(n,!1);gi(Fr,!1);for(let n of Jo.values())gi(n,!1)}function _d(){Tv();for(let n of Tt)if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();Tt.length=0,Jo.clear()}function Av(){fy((n,e)=>ws(n,e))}Av();function gi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+z.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Ol(){Tv();for(let n of Tt)n.mesh.position.copy(n.start),n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!!n.spec.properties?.frozen}function ar(){Md.reset(),pt.position.copy(jp),bt=Oe.degToRad(mt.yaw),Ms=0,pt.rotation.y=bt,an.set(0,0,0),ed=!1,Ci=!1,xs.normal.set(0,0,0),xs.surface=null,Qh=!1,Dr.reset(),Ur.reset(),er.set(0,0);for(let n of Ut)n.valid=!1,n.hapticGrounded=!1,n.hapticCooldown=0,n.gamepad=null,gi(n,!1)}Ol();function Ev(){return z.auto||_s&&!Qe.xr.isPresenting}function dd(){return Ev()?Math.min(z.shadowQuality,nn):z.shadowQuality}function Ul(){return Ev()?Math.min(z.lightQuality,nn):z.lightQuality}function Li(){let n=z.texturePower;St.visual(nn,z.shadows?dd():0,Ul(),z.reflections,z.bloom,z.textures,2**(n-1),z.lightmap),mt.refreshMaterials?.(),Qe.shadowMap.needsUpdate=!0,St.setTimeOfDay(Ye.remoteLight??z.timeOfDay-1),Wp=md.slice(0,Ul()>=8?3:Ul()>=4?2:1),Mm.value=z.shaderMode-1;let e=Qe.xr.isPresenting&&Qe.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(z.focus&&!e,z.focusStrength,z.focusSize),Qe.toneMappingExposure=.58+z.exposure*.114,$v.value=.55+z.contrast*.09,Kv.value=z.saturation*.2,Qv.value=(z.warmth-5)*.022,Qe.xr.setFoveation(z.focus?Oe.clamp((z.focusStrength+1)*.105+(5-z.focusSize)*.028+(z.auto?(7-nn)*.045:0),0,1):0),Qe.xr.isPresenting||zl(),jt=!0,Tn.redraw()}var $y=0,Ky=0,Qy=0;function zl(){if(Qe.xr.isPresenting)return;let n=Math.max(1,Pr.clientWidth||innerWidth),e=Math.max(1,Pr.clientHeight||innerHeight),t=Lx(nn,devicePixelRatio,_s);t!==Qy&&(Qe.setPixelRatio(t),Qy=t),(n!==$y||e!==Ky)&&(Qe.setSize(n,e,!1),$y=n,Ky=e),Jt.aspect=n/e,Jt.fov=z.viewFov,Jt.updateProjectionMatrix()}addEventListener("resize",zl);globalThis.visualViewport?.addEventListener("resize",zl);function uE(n){Object.assign(z,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},xh[n]),nn=z.quality,qo=Xo=Wo=0,Li()}var bs=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Retour au d\xE9part",ar]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",xm]]],["Rendu",[]]],im=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function rm(){return ct===2?im[Qp][1]:ct===3?Pv[em][1]:ct===4?cm[tm][1]:bs[ct][1]}function Cv(n){ct=n,jt=!0}var fd=null,sm=[],nd=0,id=0,om=null,pd=!1,am=0,lm=0,Rv={},md=Array.from({length:3},()=>{let n=new Ya("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),Wp=md,gd=new M;function ev(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(gd);if(t>34**2)return;let i=Wp[0];for(let r of Wp)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function hE(n){n?Jt.getWorldPosition(gd):gd.copy(Rt);for(let t of md)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(ev);else if(z.objects)for(let t of Tt)t.materialStyle===3&&ev(t.mesh);let e=20+Ul()*.75;for(let{light:t,mesh:i}of md)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function Vl(){let n=sm.slice().sort((t,i)=>t-i),e=t=>n.length?Number(n[Math.min(n.length-1,Math.floor((n.length-1)*t))].toFixed(2)):null;fd={game:"Gorilla Lab",version:pv.toLowerCase(),time:new Date().toISOString(),mode:pd?"VR":"PC",settings:{...z},qualityActive:nn,debug:yv,audio:{volume:z.stepVolume,enabled:z.stepAudio,clipsPlayed:Ur.count,state:Ur.state},performance:{fps:ys,frames:n.length,frameMs:{median:e(.5),p95:e(.95),max:e(1)}},xr:om,renderer:Rv,terrainSeed:St.hillSeed,map:mt.active?{name:mt.name,pieces:mt.nodes}:null,objects:{total:Tt.length,held:Tt.filter(t=>t.owner).length,frozen:Tt.filter(t=>t.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:Tn.score(),locomotion:{trackedFrames:lm,contactFrames:am,launchCount:Jp,lastLaunch:$p,standingHeight:Number.isFinite(Zo)?Zo:null,viewOffset:mi}},document.querySelector("#download-report").disabled=!1,jt=!0}function dE(){fd||Vl();let n=URL.createObjectURL(new Blob([JSON.stringify(fd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport.json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=dE;document.querySelector("#capture-report").onclick=Vl;bs[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Vl]);var fE=Array.from({length:Math.ceil(Ll.length/8)},(n,e)=>["Atelier"+(Ll.length>8?" "+(e+1):""),Ll.slice(e*8,e*8+8)]),Pv=[["Basiques",_v],["D\xE9taill\xE9s",Mv],["Anim\xE9s",nm],...fE].map(([n,e])=>[n,[...e.map(t=>[wn[t].name,()=>ym(t)]),["Tout retirer",bd]]]);bs.push(["Spawn",[]]);var cm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{mt.blank(),z.mapEdit=!0}],["Annuler placement",()=>mt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>mt.recenter(Rt.x,pt.position.y,Rt.z,ir)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{mt.reset(),z.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>rv(!1)],["Utiliser comme t\xEAte",()=>rv(!0)]]]];bs.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["\xC9couter un pas",Iv],["Capturer un rapport",Vl]]]);function Iv(){Ur.unlock().then(()=>Ur.play(z.stepVolume))}function Lv(){try{localStorage.setItem("gorilla-lab-step-volume",String(z.stepVolume))}catch{}}var pE=document.querySelector("#section"),Zh=document.querySelector("#settings"),mE=document.querySelector("#readings"),um=[1,.75,.5,.25];function _n(n,e){if(n==="debugSpeed"){z.debugSpeed=Oe.clamp(z.debugSpeed+e,1,um.length),Dr.reset(),jt=!0;return}if(n==="stepVolume"){z.stepVolume=Oe.clamp(z.stepVolume+e,1,10),Lv(),jt=!0;return}if(n==="viewFov"){z.viewFov=Oe.clamp(z.viewFov+5*e,50,105),zl(),jt=!0;return}if(n==="vrFov"){z.vrFov=Oe.clamp(z.vrFov+5*e,55,100),jt=!0;return}if(n==="shaderMode"){z.shaderMode=(z.shaderMode-1+e+gh.length)%gh.length+1,Mm.value=z.shaderMode-1,jt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??z.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else z.timeOfDay=(z.timeOfDay-1+e+3)%3+1;Li();return}let t={mapMode:9,mapShape:5,mapMaterial:Cp.length,mapSurface:4,mapTurn:8,mapTexture:fh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];z[n]=(z[n]-1+e+i)%i+1,jt=!0;return}if(n==="mapEdit"&&!z.mapEdit&&!mt.active&&mt.load(Ey(St.boxes)),n==="toolMode"){z.toolMode=(z.toolMode-1+e+hs.length)%hs.length+1,Qe.xr.isPresenting||pi("Outil \xB7 "+hs[z.toolMode-1]),jt=!0;return}if(n==="preset"){let i=Object.keys(xh);z.preset=(z.preset-1+e+i.length)%i.length+1,uE(i[z.preset-1]);return}if(typeof z[n]=="boolean"?z[n]=!z[n]:z[n]=Oe.clamp(z[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ut)i.valid=!1,i.surface=null;if(n==="quality"&&(z.auto=!1,nn=z.quality),n==="auto"&&!z.auto&&(nn=z.quality),n==="movement"||n==="collisions")for(let i of Ut)i.surface=null;if(n==="objects"&&!z.objects&&Ol(),n==="blasterActive"&&z.blasterActive&&(z.toolActive=!1),n==="toolActive"&&z.toolActive&&(z.blasterActive=!1),!z.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ut)i.held?.toolHold&&gi(i,!1);mm(!1)}n==="preciseHitboxes"&&Dv(),Li()}function Dv(){for(let n of Tt)n.precise=z.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||_l(n,St.boxes)}function Uv(){let n=(ct===2?im:ct===4?cm:null)?.flatMap(e=>e[1])??rm();for(let[,e]of n)typeof e=="string"&&(z[e]=HA[e]);ct===6&&(Lv(),Dr.reset()),ct===0&&ar(),ct===1&&(Dv(),Ol()),ct===3&&bd(),ct===2&&(nn=z.quality),Li()}function Cl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),Ko(),jt=!0},t}function Fv(n){return n==="preciseHitboxes"?z[n]?"High":"Low":z[n]?"Actif":"Coup\xE9"}function hm(n){if(n==="debugSpeed")return Ye.role?"\xD71 en ligne":"\xD7"+um[z.debugSpeed-1];if(n==="stepVolume")return z.stepVolume+"/10";if(n==="viewFov")return z.viewFov+"\xB0";if(n==="vrFov")return z.vrFov===100?"Natif":z.vrFov+" %";if(n==="mapTexture")return z[n]===1?"Aucune":fh[z[n]-2];if(n==="terrainResolution")return[8,16,32,48][z[n]-1]+"\xB2";if(n==="shaderMode")return gh[z.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=z[n],t=n==="shadowQuality"?dd():Ul();return t===e?e+"/10":e+"/10 \xB7 "+t+(z.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??z.timeOfDay-1]:n==="mapMode"?kv[z.mapMode-1]:n==="mapShape"?ME[z.mapShape-1]:n==="mapSurface"?bE[z.mapSurface-1]:n==="mapMaterial"?Cp[z.mapMaterial-1]:n==="mapTurn"?(z.mapTurn-1)*45+"\xB0":n==="toolMode"?hs[z.toolMode-1]:n==="preset"?Object.keys(xh)[z.preset-1]:n==="texturePower"?[2**(z[n]-1),2**(z[n]-1)].join("\xD7"):z[n]}function qp(){return ct===2?im:ct===3?Pv:cm}function Nv(){return ct===2?Qp:ct===3?em:tm}function Bv(n){ct===2?Qp=n:ct===3?em=n:tm=n}function Ov(n){return n===Vl?"Capturer":n===Iv?"\xC9couter":n===_d||n===bd?"Vider":n===ar||n===xm?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function Ko(){if(pE.textContent=bs[ct][0],zv.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),Zh.replaceChildren(),gE.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),qp().forEach(([e],t)=>{let i=Cl(e,()=>Bv(t));i.setAttribute("aria-pressed",String(Nv()===t)),n.append(i)}),Zh.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",Zh.append(n)}for(let[n,e]of rm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Cl(Ov(e),e)):typeof z[e]=="boolean"?i.append(Cl(Fv(e),()=>_n(e,1))):i.append(Cl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+hm(e)+" "),Cl("+",()=>_n(e,1))),t.append(i),Zh.append(t)}}}var zv=document.querySelectorAll("[data-page]"),gE=document.querySelector("#cloud-access");zv.forEach((n,e)=>n.onclick=()=>{Cv(e),Ko()});document.querySelector("#restore").onclick=()=>{Uv(),Ko()};Ko();function Vv(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new Jn(s);a.colorSpace=ft;let l=new Be(new $t(t,i),new vt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=Vv(640,652,.84,.86,At);fn.mesh.visible=!1;var ei=Vv(416,84,.32,.065,At);ei.mesh.visible=!1;var Go=new Wt(75,1,.07,140),ti=new sl(new $t(1.7,1.95),{color:16054015,textureWidth:_s?128:256,textureHeight:_s?128:256,clipBias:.004,multisample:0}),xE=new M(0,0,-1),jh=new M,tv=new M;ti.position.set(Bh.x,Bh.y,Bh.z);ti.rotation.y=Math.PI;At.add(ti);var dm=new Be(new et(1.8,2.03,.1),new tn({color:"#344650"}));dm.position.copy(ti.position).z+=.064;At.add(dm);var yE=ti.onBeforeRender.bind(ti);ti.onBeforeRender=()=>{};ti.visible=!1;var Fp=-1/0;function vE(n,e){if(Go.position.copy(Rt),e){let i=e.transform.orientation;Go.quaternion.set(i.x,i.y,i.z,i.w).premultiply(td.setFromAxisAngle(Yt,bt))}else Jt.getWorldQuaternion(Go.quaternion);tv.set(0,0,-1).applyQuaternion(Go.quaternion),jh.subVectors(ti.position,Rt);let t=jh.length();if(ti.visible=mt.builtIn&&z.reflections&&t<4&&jh.dot(xE)<-.15&&jh.multiplyScalar(1/Math.max(.001,t)).dot(tv)>.66,!ti.visible){Fp=-1/0;return}if(!(n-Fp<(_s&&!Qe.xr.isPresenting?110:45))){Fp=n,Go.updateMatrixWorld(!0),ti.updateMatrixWorld(!0),tr.visible=z.body;try{yE(Qe,At,Go)}finally{tr.visible=!1}}}var Ii=new Wi,Hn=new M,Un=new M,$o=new M,Jh=new M,nv=new M,Il=null,rd=null,sd=null,_E=new Set(At.children),Tn=Uy(At,St.boxes,{spawn:ym,clear:bd,resetPlayer:ar,resetObjects:xm,resetTree:()=>gm(2,Hv),quality:()=>nn+"/10",resolution:()=>z.resolution+"/10 \xB7 relancer VR",textureSize:()=>hm("texturePower"),qualityNext:()=>{z.quality>=10&&(z.quality=0),_n("quality",1)},resolutionNext:()=>{z.resolution>=10&&(z.resolution=0),_n("resolution",1)},textureNext:()=>{z.texturePower>=12&&(z.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),kv=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],ME=["Bloc","Rampe","Mur","Dalle","Terrain"],bE=["Normale","Glace","Caoutchouc","Lune"],iv=new Map;function SE(){for(let n of mt.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=iv.get(e);if(t===void 0){let r=Co(n.model);r.scale(n.w,n.h,n.d);let s=lp(n.model,new M(n.w,n.h,n.d)),o=Ar(s);s.dispose(),t=wn.length,wn.push({id:n.model.id,name:n.model.name,geo:r,material:_r(n.model),shape:o,lowShape:o,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Oe.clamp(n.w*n.h*n.d*9,.18,12)}),iv.set(e,t)}let i=ws(t,new M(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Oe.degToRad(n.pitch),Oe.degToRad(n.yaw),Oe.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position))}}var mt=Py({scene:At,arena:St,boot:jp,onReset:n=>{_d(),ar(),bt=Oe.degToRad(n),mt.builtIn&&Av(),SE()},onVisual:Li,getLevel:()=>nn,defaultObjects:[...St.builtObjects,...At.children.filter(n=>!_E.has(n)),dm]}),Ye=ix({scene:At,currentMap:()=>(mt.signature||"arena-r25-"+St.hillSeed)+$A,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=wv(n,!0);return e&&Qo(e.material),e},onAction:RE,onStatus:()=>{ct===5&&(jt=!0)},onShot:n=>Md.receiveShot(n,Ye.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??z.timeOfDay-1),jt=!0,Qe.xr.isPresenting||Ko()},applyScore:n=>Tn.setScore(n),applyCoconuts:n=>Tn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function rv(n){let e=mt.modelPieces();if(!e.length||e.length>ji.parts){pi("Compose un mod\xE8le de 1 \xE0 "+ji.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=sp(localStorage);if(t.models.length>=ji.models){pi("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),r=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:z.modelGrab,frozen:z.modelFrozen,collidable:z.modelCollidable,supportWhileHeld:z.modelSupport},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Ay[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(rp,JSON.stringify(cs(t))),pi("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{pi("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var Np=new Map;function wE(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][z.mapShape-1],e=Ro({detail:[8,16,32,48][z.terrainResolution-1],amplitude:(z.terrainAmplitude-1)*.34,frequency:.05+z.terrainFrequency*.025,seed:z.terrainSeed,grass:(z.terrainGrass-1)/9,shrub:(z.terrainShrub-1)/9}),t=z.mapTexture-2;return t>=0&&!Np.has(t)&&Np.set(t,Rx(t).toDataURL("image/webp",.83)),kh({...n,material:z.mapMaterial-1,yaw:z.mapShape===5?0:(z.mapTurn-1)*45,...Rp[Object.keys(Rp)[z.mapSurface-1]],texture:Np.get(t)??null,terrain:z.mapShape===5||z.mapMode===9?e:null,brushRadius:.5+z.brushRadius*.5,brushStrength:z.brushStrength*.15})}function TE(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Hn.set(s.x,s.y-mi,s.z).applyAxisAngle(Yt,bt).add(pt.position),sr.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Yt,bt),mt.edit(Hn,Un,i,{mode:z.mapMode,piece:wE(),head:Rt,feet:pt.position.y}),i&&(jt=!0)}function AE(n){if(!mt.builtIn||!n.valid||n.held||n.remoteHeld||Zt)return;let e=null;for(let t of Tn.targets)if(t.getWorldPosition(nv),!(n.mesh.position.distanceToSquared(nv)>.11**2)&&(t.worldToLocal(Jh.copy(n.mesh.position)),Math.abs(Jh.x)<t.userData.touchWidth*.5+.025&&Math.abs(Jh.y)<.095&&Math.abs(Jh.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function fm(n,e=null){n.getWorldPosition($o),n.visible=!1,z.objects||(z.objects=!0);let t=ws(6,$o);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function Xp(n,e,t){if(!mt.builtIn)return;Ii.set(n,e),Ii.far=5.5;let i=Ii.intersectObjects([...Tn.targets,...Tn.coconuts.filter(s=>s.visible)],!1);Ii.far=1/0;let r=i[0];r&&(Ss.visible=!0,Ss.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action?r.object.userData.action(r.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:Tn.coconuts.indexOf(r.object)}):fm(r.object,e),Ko()))}var sv=new M,Gv=new qe,pm=ih(At),Md=Fx({scene:At,rig:pt,camera:Jt,arena:St,objects:Tt,spectator:Ye}),MP=pm.mesh,od=new M,rr=new qe,xd=new M,jo={mode:0,position:xd,quaternion:rr,end:od},ov=new M,EE=new M,av=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var yd=new M,CE={position:xd,quaternion:rr,pressure:[.1,.66,.08]},Bp=new M,vd=new qe;function mm(n){Fr.held&&gi(Fr,n)}function gm(n,e){if(Ye.role==="pc"){pi("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||pi("Attends la connexion \xE0 l\u2019h\xF4te.")}function bd(){gm(0,_d)}function xm(){gm(1,Ol)}function Hv(){for(let n of Tn.coconuts)n.visible=!0}function ym(n,e=null){if(z.objects=!0,Ye.role==="pc"){pi("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||pi("Attends la connexion \xE0 l\u2019h\xF4te."):ws(n,e)}function RE(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)z.timeOfDay=n.typeId+1,Li();else if(n.mode===3)[_d,Ol,Hv][n.typeId]();else if(mt.builtIn){let u=Tn.coconuts[n.typeId];u?.visible&&u.getWorldPosition($o).distanceToSquared(e)<=5.8**2&&!Fo(Ir.copy(e),$o,.01,or,Gp,Hp)&&fm(u)}return}if(n.type==="spawn"){Sv.includes(n.typeId)&&(z.objects=!0,ws(n.typeId,null,e));return}let t=Tt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=Jo.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},Jo.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),gi(o,!0)}return}if(!z.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ir.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Fh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Fo(l,t.mesh.position,.01,or,Gp,Hp))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}vm(t,s,o,Oe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Dl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Dl))}}function PE(n){if(Qe.xr.isPresenting)for(let t of Ut)t.valid&&t.held&&Op(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Jo){let r=Ye.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){gi(i,!1),Jo.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ir.copy(s?.position??r.avatar?.tool?.position??r),hd.set(0,0,-1).applyQuaternion(i.controllerRotation),Op(o,Ir,hd,i.controllerRotation,n)}let e=Fr.held;e&&(Jt.getWorldPosition(yd),Jt.getWorldDirection(sv),Jt.getWorldQuaternion(rr),Op(e,yd,sv,rr,n))}function Op(n,e,t,i,r){n.toolHold?Bp.copy(e).addScaledVector(t,n.toolDistance):Bp.copy(n.offset).applyQuaternion(i).add(e),vd.multiplyQuaternions(i,n.relativeRotation),Kx(n,Bp,vd,or,r)}function Wv(n){return n.customMaterial||(n.mesh.material=Ml(n.mesh.material),n.customMaterial=!0,Qo(n.mesh.material)),n.mesh.material}function IE(n){let e=Wv(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function qv(n,e,t){Ii.set(n,e),Ii.far=9;let i=Ii.intersectObjects(t,!1)[0];return Ii.far=1/0,od.copy(n).addScaledVector(e,i?.distance??9),Fo(n,od,.006,or,ov,EE)?(od.copy(ov),null):i}function vm(n,e,t,i){if(e===1){if(t?.held){t===Fr?mm(!0):gi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??rr;n.relativeRotation.multiplyQuaternions(Gv.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();Tt.splice(Tt.indexOf(n),1)}else if(e===4&&!n.protected){yd.copy(n.mesh.position).addScaledVector(Yt,n.radius*2+.08);let r=ws(n.netType,yd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Ml(n.mesh.material),r.customMaterial=!0,Qo(r.mesh.material)),_l(r,St.boxes))}else if(e===5){let r=Wv(n),s=av[n.paint++%av.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,IE(n));jt=!0}}var Lr=[];function Xv(n,e,t,i){if(!z.objects)return;let r=Ye.role==="player";if(Lr.length=0,r)Ye.forEachReplica(a=>Lr.push(a));else for(let a of Tt)!a.owner&&a.mesh.visible&&Lr.push(a.mesh);let s=qv(n,e,Lr);if(jo.mode=z.toolMode,i?(xd.copy(i.mesh.position),rr.copy(i.controllerRotation)):(Jt.getWorldQuaternion(rr),xd.set(.16,-.17,-.43).applyQuaternion(rr).add(n)),pm.update(jo),!t)return;if(r){if(z.toolMode===1&&nr)Ye.sendAction({type:"release",objectId:nr}),nr=0;else if(s){let a=s.object.userData.netId;Ye.sendAction({type:"tool",mode:z.toolMode,objectId:a})&&z.toolMode===1&&(nr=a)}return}let o=s&&Tt.find(a=>a.mesh===s.object);vm(o,z.toolMode,i??Fr,s?Oe.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function LE(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;Hn.set(o.x,o.y-mi,o.z).applyAxisAngle(Yt,bt).add(pt.position),sr.set(a.x,a.y,a.z,a.w),Un.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Yt,bt),Xv(Hn,Un,r,i)}function DE(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Hn.set(s.x,s.y-mi,s.z).applyAxisAngle(Yt,bt).add(pt.position),sr.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Yt,bt),Xp(Hn,Un,i)}var Ss=JA(At,new vt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Ss.visible=!1;var Yp=[],vs=null;function lv(){let n=fn.ctx;Yp=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+pv,25,42),n.font="20px system-ui",n.fillText(ys+" FPS   \xB7   Q "+nn+"/10   \xB7   "+(z.auto?"AUTO":"MANUEL"),390,40);function e(r,s,o,a,l,c,u="#344b59"){n.fillStyle=u,n.fillRect(r,s,o,a),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(l,r+o/2,s+a/2+7,o-8),n.textAlign="left",Yp.push({x:r,y:s,w:o,h:a,action:c,label:l})}let t=Math.floor(587/bs.length);if(bs.forEach(([r],s)=>e(25+s*t,61,t-4,44,r,()=>Cv(s),ct===s?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),al.forEach((r,s)=>{let o=204+s*48;n.fillText("Ar\xE8ne "+(s+1),25,o+29),e(200,o,190,40,"Rejoindre",()=>Ye.connect("player",r)),e(406,o,206,40,"H\xE9berger",()=>Ye.connect("vr",r))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>Zt=!1),fn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&qp().forEach(([r],s)=>{let o=Nv()===s,a=Math.min(144,Math.floor(586/qp().length)-4);e(25+s*(a+4),114,a,38,r,()=>Bv(s),o?"#546947":"#263d49")}),rm().forEach(([r,s],o)=>{let a=(i?166:113)+o*40;o%2===0&&(n.fillStyle="#20323e",n.fillRect(25,a,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(r,37,a+26),typeof s=="function"?e(406,a,206,36,Ov(s),s):typeof z[s]=="boolean"?e(406,a,206,36,Fv(s),()=>_n(s,1),z[s]?"#415c4c":"#344b59"):(e(359,a,44,36,"\u2212",()=>_n(s,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(hm(s)),508,a+25,156),n.textAlign="left",e(568,a,44,36,"+",()=>_n(s,1)))}),e(25,579,286,44,"R\xE9glages par d\xE9faut",Uv),e(325,579,287,44,"Fermer",()=>Zt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(_m||(ct===6?"Cyan : prise \xB7 Vert : paume \xB7 Rose : collisions invisibles":ct===4&&mt.status?mt.status.slice(0,64):fd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645),fn.texture.needsUpdate=!0}function UE(n){Zt=!Zt,Zt&&(mv=n,qy.set(0,0,-1).applyAxisAngle(Yt,ir),fn.mesh.position.copy(Rt).addScaledVector(qy,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(Rt),fn.mesh.updateMatrixWorld(!0)),jt=!0}function FE(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Hn.set(s.x,s.y-mi,s.z).applyAxisAngle(Yt,bt).add(pt.position),sr.set(o.x,o.y,o.z,o.w),Un.set(0,0,-1).applyQuaternion(sr).applyAxisAngle(Yt,bt),Ii.set(Hn,Un);let a=Ii.intersectObject(fn.mesh)[0];if(a&&(Ss.visible=!0,Ss.position.copy(a.point).addScaledVector(Un,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;Yp.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),jt=!0}}var Sd=Ix(),{held:Ri,pressed:Qi}=Sd,Yv=Nx(Qe.domElement,document.querySelector("#touch-fire")),cv=document.querySelector("#game-settings"),Zv=document.querySelector("#open-settings"),Zp=document.querySelector("#game-hint"),ad=0;function pi(n){Zp.textContent=n,Zp.hidden=!1,ad=performance.now()+2400,_m=n,jt=!0}var _m="";function wd(n){let e=n??!cv.hidden;cv.hidden=e,Zv.hidden=!e,e&&Qe.domElement.focus()}Zv.onclick=()=>wd(!1);document.querySelector("#close-settings").onclick=()=>wd(!0);var Fl=Px({canvas:Qe.domElement,enabled:()=>!Qe.xr.isPresenting,onLook:(n,e,t)=>{bt-=n*t,Ms=Oe.clamp(Ms-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&Qi.add(e)},onMenu:()=>wd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Qe.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||wd();return}n.code==="Space"&&n.preventDefault(),Sd.down(n.code,n.repeat),n.code==="KeyR"&&ar()}});addEventListener("keyup",n=>Sd.up(n.code));addEventListener("blur",()=>{Sd.clear(),Fl.clear(),Yv.clear()});function NE(n,e){if(!z.objects)return!1;let t=Ye.role==="player";if(t&&nr)return Ye.sendAction({type:"release",objectId:nr}),nr=0,!0;if(Fr.held)return mm(!0),!0;if(Lr.length=0,t)Ye.forEachReplica(r=>Lr.push(r));else for(let r of Tt)!r.owner&&r.mesh.visible&&Lr.push(r.mesh);let i=qv(n,e,Lr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:r})&&(nr=r)}else Jt.getWorldQuaternion(rr),vm(Tt.find(r=>r.mesh===i.object),1,Fr,Math.max(.75,i.distance));return!0}var zp=[];function jv(){return zp.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!wn[e]||wn[e].properties?.collidable===!1||n.userData.held)return;let t=wn[e],i=z.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=z.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},zp.push(r)}),zp}function BE(){Ye.role!=="vr"||!Ye.remoteSpectator||Tt.some(n=>n.netType===Bl)||ws(Bl,null,null,!0)}var Nl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Nl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Nl.onclick=async()=>{let n;Ur.unlock();try{Nl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Qe.xr.setFramebufferScaleFactor(.45+z.resolution*.055),await Qe.xr.setSession(n),Li(),Pl=n.frameRate||72,Rl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Rl.includes(120)?120:Rl.find(t=>t>=100)??Rl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Pl=n.frameRate||Pl,Kp=Math.min(100,Pl),z.auto&&(nn=Math.min(nn,4),Wo=qo=Xo=0),sm=[],nd=0,id=0,am=lm=Jp=0,$p=null,pd=!0,om=null,Zo=NaN,mi=0,ar(),Li(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Nl.disabled=!1,document.querySelector("#status").textContent=e.message}};Qe.xr.addEventListener("sessionend",()=>{Nl.disabled=!1,Zt=!1,fn.mesh.visible=!1,ei.mesh.visible=!1,document.body.classList.remove("immersive"),ar(),zl()});function Jv(n){if(!mt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(mt.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function uv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Zt||!e||n.grip||!z.objects)return;let i=null,r=.15;if(Ye.forEachReplica(s=>{if(s.userData.held)return;let o=wn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Fh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;Ye.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}else if(mt.builtIn){let s=Tn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition($o).distanceToSquared(n.target)<.06760000000000001);s>=0&&Ye.sendAction({type:"world",mode:2,typeId:s})}}function OE(n,e,t){let i=[...n.session.inputSources];for(let r of Ut){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&z.hands&&!z.body,!o){Ye.role==="player"&&uv(r,!1),r.valid=!1,r.surface=null,gi(r,!1);continue}vy(r,o.transform,mi,bt,pt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Al.copy(r.controllerRotation),QA(r,s.gamepad?.buttons??[],t),Ye.role==="player")uv(r,a);else if(!Zt&&a&&!r.grip&&z.objects&&!r.held){let h=null,p=.15,x=Tn.coconuts.find(m=>m.visible&&m.getWorldPosition($o).distanceToSquared(r.target)<.26**2);x&&(h=fm(x));for(let m of Tt){if(m.owner||!m.grabbable||m.mesh.position.distanceToSquared(r.target)>(m.radius+.18)**2)continue;let g=Fh(r.target,m);!x&&g<p&&(p=g,h=m)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Dl.copy(Al).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Dl),h.relativeRotation.multiplyQuaternions(Dl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&gi(r,!Zt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){vd.multiplyQuaternions(Al,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(vd),Yo.copy(l.offset).applyQuaternion(Al);let h=r.supportOffset.dot(Yo);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(Yo),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(Gv.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Yt,bt):r.aimDirection.set(0,0,-1).applyQuaternion(Al)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&UE(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!Zt&&_n("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&z.toolActive&&!Zt&&_n("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if(Zt){let h=f&&!r.trigger;(h||!vs||!vs.click&&r.side!==mv)&&(vs={source:s,click:h})}else!Zt&&r.side==="right"&&z.mapEdit?sd={source:s,click:f&&!r.trigger}:!Zt&&r.side==="right"&&z.toolActive?rd={source:s,hand:r,click:f&&!r.trigger}:!Zt&&!z.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(Il={source:s,click:f&&!r.trigger});r.trigger=f}}function hv(n,e){let t=n?-Ho.y:Math.max(0,-Math.sin(Ms)),i=0,r=0,s=0;if(n){Yy.setFromAxisAngle(Yt,-ir);for(let u of Ut)u.valid&&(Dp.copy(u.gripPosition).sub(Rt).applyQuaternion(Yy),i+=Dp.x-(u.side==="left"?-.2:.2),r+=Dp.z+.24,s++)}let o=s?Oe.clamp(-r/s,-.35,.45):0,a=s?Oe.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=-.31*Oe.smoothstep(t,.2,.92)-o*.45;er.x=Oe.lerp(er.x,c,l),er.y=Oe.lerp(er.y,-a*.62,l),Xy.set(er.x,ir,er.y,"YXZ"),Pi.quaternion.setFromEuler(Xy)}function zE(n,e,t,i,r=i){let s=!!t,o=.43+z.size*.088;if(s){let f=t.transform.position;Number.isFinite(Zo)||(Zo=f.y),mi=Oe.clamp(Zo-o,-.65,1.7),ld.position.y=-mi,Qn.set(f.x,f.y-mi,f.z);let p=[...n.session.inputSources].find(x=>x.handedness==="right")?.gamepad?.axes[2]??0;Math.abs(p)<.3&&(ed=!1),Math.abs(p)>.67&&!ed&&!Zt&&(ed=!0,vn.copy(Qn).applyAxisAngle(Yt,bt),bt-=Math.sign(p)*Math.PI/4,Vy.copy(Qn).applyAxisAngle(Yt,bt),pt.position.add(vn.sub(Vy)),Dr.reset(),Qh=!1)}else ld.position.y=0,Qn.set(0,o,0),Jt.position.copy(Qn),Jt.rotation.set(Ms,0,0,"YXZ");if(Rt.copy(Qn).applyAxisAngle(Yt,bt).add(pt.position),s){let f=t.transform.orientation;td.set(f.x,f.y,f.z,f.w),Ho.set(0,0,-1).applyQuaternion(td),Ho.x**2+Ho.z**2>.018&&(ir=bt+Math.atan2(-Ho.x,-Ho.z))}else ir=bt;let a=Jv(Rt),l=9.81*(z.gravity/5)*(a?.gravity??1);kp=l,Gy.copy(pt.position);let c=Ye.role==="player"?jv():Tt;if(s){OE(n,e,r),hv(!0,r),Ut.some(f=>f.valid)&&lm++,Yh.length=0;for(let f of or)Yh.push(f);if(z.collisions&&z.objects)for(let f of c)f.handCollider&&!f.owner&&Yh.push(f.handCollider);Dr.move({head:Rt,dt:i,inputDt:r,gravity:l,settings:z,boxes:Yh,velocity:an,movement:ko,reach:ud()*2+.16});for(let f of Ut)Ux(f,z.stepHaptics,r)}else{hv(!1,r),an.y-=l*i;let f=Number(Ri.has("KeyD"))-Number(Ri.has("KeyA")||Ri.has("KeyQ"))+Fl.movement.x,h=Number(Ri.has("KeyS"))-Number(Ri.has("KeyW")||Ri.has("KeyZ"))+Fl.movement.z,p=Ri.has("ShiftLeft")||Ri.has("ShiftRight");Cr.set(f,0,h).clampLength(0,1).applyAxisAngle(Yt,bt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Ci?13:4));an.x=Oe.lerp(an.x,Cr.x,x),an.z=Oe.lerp(an.z,Cr.z,x);let g=(Fl.consumeJump()||Qi.delete("Space"))&&Ci,b=xs.normal,w=!g&&Ci&&b.y>=.62&&(xs.surface?.friction??0)>=.45;g?an.y=3.1+z.jump*.18:w&&(an.y=-(an.x*b.x+an.z*b.z)/b.y),ko.copy(an).multiplyScalar(i),w&&ko.addScaledVector(b,-l*i*i)}if(z.collisions&&Qh&&(Yo.copy(Rt).add(ko),Fo(Hy,Yo,qA,or,vn,Wh)&&Cr.subVectors(Yo,vn).dot(Wh)<0&&ko.copy(vn).sub(Rt)),pt.position.add(ko),Rt.copy(Qn).applyAxisAngle(Yt,bt).add(pt.position),Ci=!1,xs.normal.set(0,0,0),xs.surface=null,z.collisions){qh.set(0,-1,0).applyQuaternion(Pi.quaternion),qh.y=0,qh.addScaledVector(KA.set(0,0,1).applyAxisAngle(Yt,ir),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,Qn.y*.57):Qn.y,{radius:p}=Kh[f];if(vn.set(Rt.x,pt.position.y+h,Rt.z),f<2&&vn.addScaledVector(qh,Math.max(0,Qn.y-h)),ky.copy(vn),Ci=Sp(vn,p,St.boxes,an,0,3+z.grip,i,f===0?xs:null)||Ci,z.objects)for(let x of c)x.blocksPlayer&&!x.owner&&oy(vn,p,x,an,Wh)&&Wh.y>.6&&(Ci=!0);Sp(vn,p,St.boxes,an,0,3+z.grip,i),Cr.subVectors(vn,ky),pt.position.add(Cr),Rt.add(Cr);for(let x=0;x<f;x++)Kh[x].position.add(Cr);Kh[f].position.copy(vn)}}if(Rr.subVectors(pt.position,Gy),Ur.update({dt:r,inVR:s,hands:Ut,grounded:Ci,travel:Math.hypot(Rr.x,Rr.z),volume:z.stepVolume,enabled:z.stepAudio}),s){let f=Dr.finish(Rr,an);f.contacts&&am++,f.launched&&(Jp++,$p={handSpeed:f.launchSpeed,velocity:an.toArray(),t:performance.now()})}(mt.active?pt.position.y<-24||Math.abs(pt.position.x)>155||Math.abs(pt.position.z)>155:pt.position.y<-9||Math.abs(pt.position.x)>33||pt.position.z<-57||pt.position.z>13)&&(ar(),Rt.copy(Qn).applyAxisAngle(Yt,bt).add(pt.position)),Hy.copy(Rt),Qh=!0,pt.rotation.y=bt,s&&Jt.position.set(0,0,0);for(let f of Ut)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Rr,f.surface?0:1),f.gripPosition.add(Rr)),s||(f.mesh.visible=!1);let u=.72+z.size*.05,d=ud()*2*(2/3)/.82;Pi.visible=z.body,tr.position.copy(Rt),s?tr.quaternion.copy(td).premultiply(sr.setFromAxisAngle(Yt,bt)):tr.quaternion.setFromEuler(new rn(Ms,bt,0,"YXZ")),Vp.set(0,-.145,.045).applyQuaternion(tr.quaternion).add(Rt),Pi.position.set(0,.46*d,.04*u).applyQuaternion(Pi.quaternion).negate().add(Vp),eE(u,d),pt.updateMatrixWorld(!0),Jt.updateWorldMatrix(!0,!1)}function VE(n,e){if(Xh+=n,Lp++,Wo+=n,Xh<1||(ys=Math.round(Lp/Xh),Lp=0,Xh=0,jt=!0,mE.textContent=ys+" FPS \xB7 qualit\xE9 "+nn+"/10 \xB7 "+(z.auto?"auto":"manuel"),!z.auto||Wo<5))return;Wo=0;let t=e?Math.min(100,Qe.xr.getSession()?.frameRate||Pl):60;e&&(Kp=t),qo=ys<t-4?qo+1:0,Xo=ys>=t-1?Xo+1:0;let i=Oe.clamp(nn+(qo>=1?-1:Xo>=2?1:0),1,10);i!==nn&&(nn=i,Wo=qo=Xo=0,Li())}St.bakeLightmap();var $v={value:1},Kv={value:1},Qv={value:0},Mm={value:0},dv=new WeakSet;function Qo(n){if(Array.isArray(n)){for(let i of n)Qo(i);return}if(!n||dv.has(n))return;dv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:$v,uPhotoSaturation:Kv,uPhotoWarmth:Qv,uLabShader:Mm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <colorspace_fragment>",`
      #include <colorspace_fragment>
      vec3 photo=gl_FragColor.rgb;
      photo=mix(vec3(dot(photo,vec3(.2126,.7152,.0722))),photo,uPhotoSaturation);
      photo=(photo-.5)*uPhotoContrast+.5;
      photo=clamp(photo+uPhotoWarmth*vec3(1.,.16,-1.),0.,1.);
      float luma=dot(photo,vec3(.2126,.7152,.0722));
      if(uLabShader==1){
        float band=floor(luma*6.+.5)/6.;
        photo*=.35+.65*(band/max(.035,luma));
      }else if(uLabShader==2){
        vec3 ink=mix(vec3(.071,.13,.24),vec3(.99,.83,.54),smoothstep(.10,.92,luma));
        photo=mix(ink,photo,.28);
      }else if(uLabShader==3){
        vec2 tile=mod(floor(gl_FragCoord.xy),2.);
        float threshold=mod(2.*tile.x+3.*tile.y,4.)*.25;
        photo=floor(photo*7.+threshold)/7.;
      }
      gl_FragColor.rgb=clamp(photo,0.,1.);
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)Qo(n);At.traverse(n=>{n.isMesh&&![fn.mesh,ei.mesh,Ss].includes(n)&&Qo(n.material)});Li();var fv=new URLSearchParams(location.search);if(fv.has("map"))mt.loadURL(fv.get("map"));else try{let n=localStorage.getItem(wl);n&&mt.load(n)}catch(n){mt.inform(n.message)}function kE(){let n=Qe.xr.isPresenting;return{head:tr.quaternion,hands:n?Ut.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,jo.mode?CE:null],height:Qn.y,armSpan:ud()*2,light:z.timeOfDay-1,color:gv,coconuts:Tn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:jo.mode?jo:null,gun:Md.gun}}Qe.setAnimationLoop((n,e)=>{let t=Ip?Math.max(0,(n-Ip)/1e3):.014;Ip=n;let i=Math.max(1e-4,Math.min(.035,t)),r=Ye.role?1:um[z.debugSpeed-1],s=i*r,o=Qe.xr.isPresenting,a=Qe.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(rE(n*.001),ad&&n>ad&&(Zp.hidden=!0,ad=0,_m=""),Ss.visible=!1,pm.hide(),jo.mode=0,or=z.collisions?St.boxes:XA,vs=null,Il=null,rd=null,sd=null,mt.clearGhost(),fn.mesh.visible=!1,!o&&Ye.role==="pc"){Pi.visible=!1;for(let m of Ut)m.mesh.visible=!1}else zE(e,a,l,s,i);let c=!o&&Ye.role==="pc",u=c||Ye.role==="player";if(Ye.role!=="player"){nr=0;for(let m of Ut)m.remoteHeld=0}u||(PE(s),BE());for(let m of Tt){m.mesh.visible=z.objects&&!u;let{x:g,y:b,z:w}=m.mesh.position;if((mt.active?b<-24||Math.abs(g)>155||Math.abs(w)>155:b<-8||Math.abs(g)>28||w<-57||w>13)&&(m.owner||(m.mesh.position.copy(m.start),m.velocity.set(0,0,0),m.angular.set(0,0,0))),m.shadow.visible=!u&&z.shadows&&dd()<3&&z.objects&&m.mesh.position.y<2,m.shadow.visible){let{x:E,z:T}=m.mesh.position,L=St.boxes.find(S=>S.heightfield&&E>=S.xMin&&E<=S.xMax&&T>=S.zMin&&T<=S.zMax),U=L?L.height(E,T):0;m.shadow.position.set(E,U+.006,T)}}if(!u&&z.objects){for(let m of Tt)m.beforePhysics.copy(m.mesh.position);ry(Tt,St.boxes,s,9.81*z.gravity/5,.12+z.bounce*.064,Jv),mt.builtIn&&Tn.updateTarget(Tt)}if(o&&!Zt&&Ye.role!=="pc")for(let m of Ut)AE(m);if(St.probe.rotation.y+=s*.29,VE(Math.min(.3,t),o),fn.mesh.visible=o&&Zt,fn.mesh.visible&&jt&&lv(),fn.mesh.visible&&vs)FE(e,a,vs.source,vs.click);else if(o&&sd)TE(e,a,sd);else if(o&&rd)LE(e,a,rd);else if(o&&Il)DE(e,a,Il.source,Il.click);else if(!o&&!c){Jt.getWorldPosition(Hn),Jt.getWorldDirection(Un),Qi.delete("KeyX")&&_n("blasterActive",1),Qi.delete("KeyG")&&(_n("toolActive",1),z.toolActive&&pi("Outil \xB7 "+hs[z.toolMode-1])),Qi.delete("KeyT")&&_n("toolMode",1);let m=Qi.delete("KeyE");z.toolActive?Xv(Hn,Un,m,null):m&&!NE(Hn,Un)?Xp(Hn,Un,!0):!m&&!u&&Xp(Hn,Un,!1),Qi.delete("KeyF")&&(z.objects=!0,ym(Sv[0]))}let d=ei.mesh.visible;if(ei.mesh.visible=o&&!Zt&&Ut[0].valid,ei.mesh.visible&&(ei.mesh.position.copy(Ut[0].mesh.position).y+=.12,ei.mesh.lookAt(Rt)),(jt||n-Wy>1100||ei.mesh.visible&&!d)&&(jt=!1,Wy=n,Zt&&lv(),ei.mesh.visible)){let m=ei.ctx;m.clearRect(0,0,416,84),m.fillStyle="#182632",m.fillRect(0,0,416,84),m.fillStyle="#fff0cf",m.font="bold 25px system-ui",m.fillText(ys+" FPS     Q "+nn+"/10",17,32),m.font="20px system-ui",m.fillText(z.mapEdit?"\xC9dition : "+kv[z.mapMode-1]:z.blasterActive?"Pistolet : maintenir la g\xE2chette":z.toolActive?"Tool Gun : "+hs[z.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ei.texture.needsUpdate=!0}Md.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:bt,drop:mi,rightHand:Ut[1],enabled:z.blasterActive&&!c&&!Zt&&!z.mapEdit,flatFiring:Yv.held||Ri.has("KeyJ")}),Ye.update({inVR:o,time:n,dt:i,position:Rt,yaw:c?bt:ir,pitch:Ms,camera:Jt,rig:pt,keys:Ri,actions:Qi,flat:Fl,avatar:kE,bodies:z.objects?Tt:Jy,score:Tn.score()}),Qi.clear(),WA.update({settings:z,boxes:or,bodies:u?z.debugHitboxes?jv():Jy:Tt,hands:Ut,locomotion:Dr,velocity:an,head:Rt,neck:Vp,body:Pi.position,proxies:Kh,gravity:kp,appliedMove:Rr,playerActive:!c,inVR:o}),!c&&(o||!pd)&&n-id>350&&(yv={simulationScale:r,gravity:kp,velocity:an.toArray(),grounded:Ci,torsoDegrees:[er.x,er.y].map(Oe.radToDeg),hands:o?Dr.hands.map(({hand:m,normal:g,offset:b})=>m.valid?{side:m.side,gripPosition:m.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Zi).applyQuaternion(m.mesh.quaternion).add(m.target).add(Rr).distanceTo(m.gripPosition),palmCenter:vn.copy(Zi).applyQuaternion(m.mesh.quaternion).add(m.mesh.position).toArray(),contactCenter:vn.copy(m.mesh.position).add(b).toArray(),normal:m.surface?g.toArray():null,surface:m.surface?.name??m.surface?.objectBody?.spec?.name??null}:null):[]}),hE(u),St.centerShadows(gd);let f=25+(10-dd())*(o?7:4);Qe.shadowMap.enabled&&n-zy>=f&&(Qe.shadowMap.needsUpdate=!0,zy=n),vE(n,l);let h=o&&z.post,p=o&&z.rayTrace;GA(p,Tt);let x=z.vrFov/100;if(!h||!kA.render(At,Jt,{bloom:z.bloom,visibleField:x})){$h.material.uniforms.visibleField.value=x,$h.visible=o&&x<1;try{Qe.render(At,Jt)}finally{$h.visible=!1}}if((o||!pd)&&(sm[nd]=t*1e3,nd=(nd+1)%720,n-id>350)){id=n;let{calls:m,triangles:g,lines:b,points:w}=Qe.info.render;Rv={calls:m,triangles:g,lines:b,points:w,textures:Qe.info.memory.textures},o&&(om={refreshHz:Qe.xr.getSession()?.frameRate??null,targetFps:Kp,supportedHz:Rl.slice(),foveation:Qe.xr.getFoveation()??null,visualEffects:{post:h,bloom:h&&z.bloom,rayTrace:p},eyeViewports:Qe.xr.getCamera().cameras.map(v=>({width:v.viewport?.z??null,height:v.viewport?.w??null}))})}});})();
