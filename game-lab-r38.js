(()=>{function jm(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function Jm(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function Qm(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function Xd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function $m(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function Km(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function eg(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function tg(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function ng(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Gg=0,Nf=1,Hg=2;var nl=1,Wg=2,Ai=3,ui=0,fn=1,cn=2,Ki=0,Qr=1,Kn=2,Bf=3,Of=4,qg=5,Mr=100,Xg=101,Yg=102,Zg=103,jg=104,Jg=200,Qg=201,$g=202,Kg=203,Oc=204,zc=205,e0=206,t0=207,n0=208,i0=209,r0=210,s0=211,o0=212,a0=213,l0=214,mu=0,gu=1,xu=2,$r=3,yu=4,vu=5,_u=6,Mu=7,bu=0,c0=1,u0=2,er=0,h0=1,d0=2,f0=3,Su=4,p0=5,m0=6,g0=7;var zf=300,os=301,as=302,xo=303,wu=304,il=306,wn=1e3,_r=1001,Vc=1002,un=1003,x0=1004;var rl=1005;var an=1006,Tu=1007;var Tn=1008;var Wn=1009,Vf=1010,kf=1011,yo=1012,Au=1013,Ar=1014,gi=1015,Ei=1016,Eu=1017,Cu=1018,vo=1020,Gf=35902,Hf=35899,Wf=1021,qf=1022,Un=1023,$s=1026,_o=1027,Ru=1028,Pu=1029,Xf=1030,Iu=1031;var Du=1033,sl=33776,ol=33777,al=33778,ll=33779,Lu=35840,Uu=35841,Fu=35842,Nu=35843,Bu=36196,Ou=37492,zu=37496,Vu=37808,ku=37809,Gu=37810,Hu=37811,Wu=37812,qu=37813,Xu=37814,Yu=37815,Zu=37816,ju=37817,Ju=37818,Qu=37819,$u=37820,Ku=37821,eh=36492,th=36494,nh=36495,ih=36283,rh=36284,sh=36285,oh=36286;var Sa=2300,kc=2301,Nc=2302,Sf=2400,wf=2401,Tf=2402;var y0=3200,v0=3201;var ah=0,_0=1,tr="",dt="srgb",Kr="srgb-linear",wa="linear",_t="srgb";var Jr=7680;var Af=519,M0=512,b0=513,S0=514,Yf=515,w0=516,T0=517,A0=518,E0=519,Gc=35044,An=35048;var Zf="300 es",ci=2e3,Ta=2001;var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ig=1234567,va=Math.PI/180,Ks=180/Math.PI;function Si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function jf(n,e){return(n%e+e)%e}function uM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hM(n,e,t){return n!==e?(t-n)/(e-n):0}function _a(n,e,t){return(1-t)*n+t*e}function dM(n,e,t,i){return _a(n,e,1-Math.exp(-t*i))}function fM(n,e=1){return e-Math.abs(jf(n,e*2)-e)}function pM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function mM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xM(n,e){return n+Math.random()*(e-n)}function yM(n){return n*(.5-Math.random())}function vM(n){n!==void 0&&(ig=n);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _M(n){return n*va}function MM(n){return n*Ks}function bM(n){return(n&n-1)===0&&n!==0}function SM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var De={DEG2RAD:va,RAD2DEG:Ks,generateUUID:Si,clamp:Ke,euclideanModulo:jf,mapLinear:uM,inverseLerp:hM,lerp:_a,damp:dM,pingpong:fM,smoothstep:pM,smootherstep:mM,randInt:gM,randFloat:xM,randFloatSpread:yM,seededRandom:vM,degToRad:_M,radToDeg:MM,isPowerOfTwo:bM,ceilPowerOfTwo:SM,floorPowerOfTwo:wM,setQuaternionFromProperEuler:TM,normalize:vt,denormalize:li},xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(f!==x||l!==d||c!==h||u!==p){let g=1-a,m=l*d+c*h+u*p+f*x,y=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let A=Math.sqrt(w),C=Math.atan2(A,m*y);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let M=a*y;if(l=l*g+d*M,c=c*g+h*M,u=u*g+p*M,f=f*g+x*M,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-a*h,e[t+2]=c*p+u*h+a*d-l*f,e[t+3]=u*p-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yd=new _,rg=new We,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],p=i[8],x=r[0],g=r[3],m=r[6],y=r[1],w=r[4],M=r[7],A=r[2],C=r[5],D=r[8];return s[0]=o*x+a*y+l*A,s[3]=o*g+a*w+l*C,s[6]=o*m+a*M+l*D,s[1]=c*x+u*y+f*A,s[4]=c*g+u*w+f*C,s[7]=c*m+u*M+f*D,s[2]=d*x+h*y+p*A,s[5]=d*g+h*w+p*C,s[8]=d*m+h*M+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,p=t*f+i*d+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zd=new nt;function Jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function C0(){let n=eo("canvas");return n.style.display="block",n}var sg={};function to(n){n in sg||(sg[n]=!0,console.warn(n))}function R0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var og=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),n}var ht=AM();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Is,Hc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=eo("canvas")),Is.width=e.width,Is.height=e.height;let r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},EM=0,no=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jd(r[o].image)):s.push(jd(r[o]))}else s=jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var CM=0,Jd=new _,xn=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_r,r=_r,s=an,o=Tn,a=Un,l=Wn,c=n.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Si(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jd).x}get height(){return this.source.getSize(Jd).y}get depth(){return this.source.getSize(Jd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=zf;xn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(h+1)/2,A=(m+1)/2,C=(u+d)/4,D=(f+x)/4,L=(p+g)/4;return w>M&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=D/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=D/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new xn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new no(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Wc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Aa=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qc=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),ac.subVectors(this.max,aa),Ds.subVectors(e.a,aa),Ls.subVectors(e.b,aa),Us.subVectors(e.c,aa),pr.subVectors(Ls,Ds),mr.subVectors(Us,Ls),Xr.subVectors(Ds,Us);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!Qd(t,Ds,Ls,Us,ac)||(t=[1,0,0,0,1,0,0,0,1],!Qd(t,Ds,Ls,Us,ac))?!1:(lc.crossVectors(pr,mr),t=[lc.x,lc.y,lc.z],Qd(t,Ds,Ls,Us,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new _,new _,new _,new _,new _,new _,new _,new _],si=new _,oc=new jt,Ds=new _,Ls=new _,Us=new _,pr=new _,mr=new _,Xr=new _,aa=new _,ac=new _,lc=new _,Yr=new _;function Qd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yr.fromArray(n,s);let a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),u=i.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var RM=new jt,la=new _,$d=new _,Qn=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):RM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add($d)),this.expandByPoint(la.copy(e.center).sub($d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hi=new _,Kd=new _,cc=new _,gr=new _,ef=new _,uc=new _,tf=new _,ji=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kd.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Kd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(cc),a=gr.dot(this.direction),l=-gr.dot(cc),c=gr.lengthSq(),u=Math.abs(1-o*o),f,d,h,p;if(u>0)if(f=o*l-a,d=o*a-l,p=s*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kd).addScaledVector(cc,d),h}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){ef.subVectors(t,e),uc.subVectors(i,e),tf.crossVectors(ef,uc);let o=this.direction.dot(tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gr.subVectors(this.origin,e);let l=a*this.direction.dot(uc.crossVectors(gr,uc));if(l<0)return null;let c=a*this.direction.dot(ef.cross(gr));if(c<0||l+c>o)return null;let u=-a*gr.dot(tf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,g)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,IM)}lookAt(e,t,i){let r=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),xr.crossVectors(i,Vn),xr.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),xr.crossVectors(i,Vn)),xr.normalize(),hc.crossVectors(Vn,xr),r[0]=xr.x,r[4]=hc.x,r[8]=Vn.x,r[1]=xr.y,r[5]=hc.y,r[9]=Vn.y,r[2]=xr.z,r[6]=hc.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],w=i[7],M=i[11],A=i[15],C=r[0],D=r[4],L=r[8],T=r[12],b=r[1],E=r[5],O=r[9],B=r[13],X=r[2],N=r[6],k=r[10],j=r[14],F=r[3],ie=r[7],ne=r[11],de=r[15];return s[0]=o*C+a*b+l*X+c*F,s[4]=o*D+a*E+l*N+c*ie,s[8]=o*L+a*O+l*k+c*ne,s[12]=o*T+a*B+l*j+c*de,s[1]=u*C+f*b+d*X+h*F,s[5]=u*D+f*E+d*N+h*ie,s[9]=u*L+f*O+d*k+h*ne,s[13]=u*T+f*B+d*j+h*de,s[2]=p*C+x*b+g*X+m*F,s[6]=p*D+x*E+g*N+m*ie,s[10]=p*L+x*O+g*k+m*ne,s[14]=p*T+x*B+g*j+m*de,s[3]=y*C+w*b+M*X+A*F,s[7]=y*D+w*E+M*N+A*ie,s[11]=y*L+w*O+M*k+A*ne,s[15]=y*T+w*B+M*j+A*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+x*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+g*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+m*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=f*g*c-x*d*c+x*l*h-a*g*h-f*l*m+a*d*m,w=p*d*c-u*g*c-p*l*h+o*g*h+u*l*m-o*d*m,M=u*x*c-p*f*c+p*a*h-o*x*h-u*a*m+o*f*m,A=p*f*l-u*x*l-p*a*d+o*x*d+u*a*g-o*f*g,C=t*y+i*w+r*M+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=y*D,e[1]=(x*d*s-f*g*s-x*r*h+i*g*h+f*r*m-i*d*m)*D,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*m+i*l*m)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=w*D,e[5]=(u*g*s-p*d*s+p*r*h-t*g*h-u*r*m+t*d*m)*D,e[6]=(p*l*s-o*g*s-p*r*c+t*g*c+o*r*m-t*l*m)*D,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*D,e[8]=M*D,e[9]=(p*f*s-u*x*s-p*i*h+t*x*h+u*i*m-t*f*m)*D,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*D,e[12]=A*D,e[13]=(u*x*r-p*f*r+p*i*d-t*x*d-u*i*g+t*f*g)*D,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,p=s*f,x=o*u,g=o*f,m=a*f,y=l*c,w=l*u,M=l*f,A=i.x,C=i.y,D=i.z;return r[0]=(1-(x+m))*A,r[1]=(h+M)*A,r[2]=(p-w)*A,r[3]=0,r[4]=(h-M)*C,r[5]=(1-(d+m))*C,r[6]=(g+y)*C,r[7]=0,r[8]=(p+w)*D,r[9]=(g-y)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Fs.set(r[0],r[1],r[2]).length(),o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);let c=1/s,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ci,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===ci)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ta)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ci,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===ci)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ta)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fs=new _,oi=new ot,PM=new _(0,0,0),IM=new _(1,1,1),xr=new _,hc=new _,Vn=new _,lg=new ot,cg=new We,Jt=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},DM=0,ug=new _,Ns=new We,Wi=new ot,dc=new _,ca=new _,LM=new _,UM=new We,hg=new _(1,0,0),dg=new _(0,1,0),fg=new _(0,0,1),pg={type:"added"},FM={type:"removed"},Bs={type:"childadded",child:null},nf={type:"childremoved",child:null},Vt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new _,t=new Jt,i=new We,r=new _(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new nt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dc.copy(e):dc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ca,dc,this.up):Wi.lookAt(dc,ca,this.up),this.quaternion.setFromRotationMatrix(Wi),r&&(Wi.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FM),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Vt.DEFAULT_UP=new _(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new _,qi=new _,rf=new _,Xi=new _,Os=new _,zs=new _,mg=new _,sf=new _,of=new _,af=new _,lf=new lt,cf=new lt,uf=new lt,In=class n{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ai.subVectors(r,t),qi.subVectors(i,t),rf.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(qi),l=ai.dot(rf),c=qi.dot(qi),u=qi.dot(rf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return lf.setScalar(0),cf.setScalar(0),uf.setScalar(0),lf.fromBufferAttribute(e,t),cf.fromBufferAttribute(e,i),uf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lf,s.x),o.addScaledVector(cf,s.y),o.addScaledVector(uf,s.z),o}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),qi.subVectors(e,t),ai.cross(qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ai.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Os.subVectors(r,i),zs.subVectors(s,i),sf.subVectors(e,i);let l=Os.dot(sf),c=zs.dot(sf);if(l<=0&&c<=0)return t.copy(i);of.subVectors(e,r);let u=Os.dot(of),f=zs.dot(of);if(u>=0&&f<=u)return t.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Os,o);af.subVectors(e,s);let h=Os.dot(af),p=zs.dot(af);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(zs,a);let g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return mg.subVectors(s,r),a=(f-u)/(f-u+(h-p)),t.copy(r).addScaledVector(mg,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Os,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=jf(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=P0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ht.workingToColorSpace(gn.copy(this),e),Math.round(Ke(gn.r*255,0,255))*65536+Math.round(Ke(gn.g*255,0,255))*256+Math.round(Ke(gn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(gn.copy(this),t);let i=gn.r,r=gn.g,s=gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=dt){ht.workingToColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,r=gn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(fc);let i=_a(yr.h,fc.h,t),r=_a(yr.s,fc.s,t),s=_a(yr.l,fc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ie;Ie.NAMES=P0;var NM=0,$n=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Qr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=zc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==zc&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new _,pc=new xe,BM=0,ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}};var es=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ea=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},OM=0,Jn=new ot,df=new Vt,Vs=new _,kn=new jt,ua=new jt,on=new _,$e=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?Ea:es)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(kn.min,ua.min),kn.expandByPoint(on),on.addVectors(kn.max,ua.max),kn.expandByPoint(on)):(kn.expandByPoint(ua.min),kn.expandByPoint(ua.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),on.add(Vs)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new _,l[L]=new _;let c=new _,u=new _,f=new _,d=new xe,h=new xe,p=new xe,x=new _,g=new _;function m(L,T,b){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,L),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),u.sub(c),f.sub(c),h.sub(d),p.sub(d);let E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(E),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(E),a[L].add(x),a[T].add(x),a[b].add(x),l[L].add(g),l[T].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,T=y.length;L<T;++L){let b=y[L],E=b.start,O=b.count;for(let B=E,X=E+O;B<X;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new _,M=new _,A=new _,C=new _;function D(L){A.fromBufferAttribute(r,L),C.copy(A);let T=a[L];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(C,T);let E=M.dot(l[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,E)}for(let L=0,T=y.length;L<T;++L){let b=y[L],E=b.start,O=b.count;for(let B=E,X=E+O;B<X;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new _,s=new _,o=new _,a=new _,l=new _,c=new _,u=new _,f=new _;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[h++]}return new ft(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gg=new ot,Zr=new ji,mc=new Qn,xg=new _,gc=new _,xc=new _,yc=new _,ff=new _,vc=new _,yg=new _,_c=new _,ke=class extends Vt{constructor(e=new $e,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){vc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(ff.fromBufferAttribute(f,e),o?vc.addScaledVector(ff,u):vc.addScaledVector(ff.sub(t),u))}t.add(vc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(mc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(mc,xg)===null||Zr.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(gg.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),w=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let M=y,A=w;M<A;M+=3){let C=a.getX(M),D=a.getX(M+1),L=a.getX(M+2);r=Mc(this,m,e,i,c,u,f,C,D,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),w=a.getX(g+1),M=a.getX(g+2);r=Mc(this,o,e,i,c,u,f,y,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let M=y,A=w;M<A;M+=3){let C=M,D=M+1,L=M+2;r=Mc(this,m,e,i,c,u,f,C,D,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=g,w=g+1,M=g+2;r=Mc(this,o,e,i,c,u,f,y,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function zM(n,e,t,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;_c.copy(a),_c.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_c);return c<t.near||c>t.far?null:{distance:c,point:_c.clone(),object:n}}function Mc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,gc),n.getVertexPosition(l,xc),n.getVertexPosition(c,yc);let u=zM(n,e,t,i,gc,xc,yc,yg);if(u){let f=new _;In.getBarycoord(yg,gc,xc,yc,f),r&&(u.uv=In.getInterpolatedAttribute(r,a,l,c,f,new xe)),s&&(u.uv1=In.getInterpolatedAttribute(s,a,l,c,f,new xe)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,f,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new _,materialIndex:0};In.getNormal(gc,xc,yc,d.normal),u.face=d,u.barycoord=f}return u}var et=class n extends $e{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(f,2));function p(x,g,m,y,w,M,A,C,D,L,T){let b=M/D,E=A/L,O=M/2,B=A/2,X=C/2,N=D+1,k=L+1,j=0,F=0,ie=new _;for(let ne=0;ne<k;ne++){let de=ne*E-B;for(let Te=0;Te<N;Te++){let we=Te*b-O;ie[x]=we*y,ie[g]=de*w,ie[m]=X,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[g]=0,ie[m]=C>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(Te/D),f.push(1-ne/L),j+=1}}for(let ne=0;ne<L;ne++)for(let de=0;de<D;de++){let Te=d+de+N*ne,we=d+de+N*(ne+1),Pe=d+(de+1)+N*(ne+1),Ce=d+(de+1)+N*ne;l.push(Te,we,Ce),l.push(we,Pe,Ce),F+=6}a.addGroup(h,F,T),h+=F,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=ls(n[t]);for(let r in i)e[r]=i[r]}return e}function VM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var lh={clone:ls,merge:yn},kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ca=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vr=new _,vg=new xe,_g=new xe,Zt=class extends Ca{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,_g),t.subVectors(_g,vg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Gs=1,Xc=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(ks,Gs,e,t);r.layers=this.layers,this.add(r);let s=new Zt(ks,Gs,e,t);s.layers=this.layers,this.add(s);let o=new Zt(ks,Gs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(ks,Gs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(ks,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(ks,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ra=class extends xn{constructor(e=[],t=os,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yc=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ki});s.uniforms.tEquirect.value=t;let o=new ke(r,s),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=an),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},At=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},HM={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Pa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ts=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ia=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new _,so=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oo=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,ha=new _,Ws=new _,qs=new _,Xs=new xe,da=new xe,I0=new ot,bc=new _,fa=new _,Sc=new _,Mg=new xe,pf=new xe,bg=new xe,Da=class extends Vt{constructor(e=new oo){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ia(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new so(i,3,0,!1)),Hs.setAttribute("uv",new so(i,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),I0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-qs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;wc(bc.set(-.5,-.5,0),qs,o,Ws,r,s),wc(fa.set(.5,-.5,0),qs,o,Ws,r,s),wc(Sc.set(.5,.5,0),qs,o,Ws,r,s),Mg.set(0,0),pf.set(1,0),bg.set(1,1);let a=e.ray.intersectTriangle(bc,fa,Sc,!1,ha);if(a===null&&(wc(fa.set(-.5,.5,0),qs,o,Ws,r,s),pf.set(0,1),a=e.ray.intersectTriangle(bc,Sc,fa,!1,ha),a===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:In.getInterpolation(ha,bc,fa,Sc,Mg,pf,bg,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wc(n,e,t,i,r,s){Xs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(da.x=s*Xs.x-r*Xs.y,da.y=r*Xs.x+s*Xs.y):da.copy(Xs),n.copy(e),n.x+=da.x,n.y+=da.y,n.applyMatrix4(I0)}var hi=class extends xn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=un,u=un,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new ot,Sg=new ot,Tc=[],wg=new jt,WM=new ot,pa=new ke,ma=new Qn,La=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,WM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),wg.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(wg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),ma.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ys),Sg.multiplyMatrices(i,Ys),pa.matrixWorld=Sg,pa.raycast(e,Tc);for(let o=0,a=Tc.length;o<a;o++){let l=Tc[o];l.instanceId=s,l.object=this,t.push(l)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(r*this.count),r,this.count,Ru,gi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mf=new _,qM=new _,XM=new nt,Pn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=mf.subVectors(i,t).cross(qM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||XM.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jr=new Qn,YM=new xe(.5,.5),Ac=new _,lo=class{constructor(e=new Pn,t=new Pn,i=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],p=s[8],x=s[9],g=s[10],m=s[11],y=s[12],w=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,m-p,A-y).normalize(),r[1].setComponents(c+o,h+u,m+p,A+y).normalize(),r[2].setComponents(c+a,h+f,m+x,A+w).normalize(),r[3].setComponents(c-a,h-f,m-x,A-w).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,h-d,m-g,A-M).normalize();else if(r[4].setComponents(c-l,h-d,m-g,A-M).normalize(),t===ci)r[5].setComponents(c+l,h+d,m+g,A+M).normalize();else if(t===Ta)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);let t=YM.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ac.x=r.normal.x>0?e.max.x:e.min.x,Ac.y=r.normal.y>0?e.max.y:e.min.y,Ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wi=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zc=new _,jc=new _,Tg=new ot,ga=new ji,Ec=new Qn,gf=new _,Ag=new _,Ua=class extends Vt{constructor(e=new $e,t=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Zc.fromBufferAttribute(t,r-1),jc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Zc.distanceTo(jc);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;Tg.copy(r).invert(),ga.copy(e.ray).applyMatrix4(Tg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),w=Cc(this,e,ga,l,m,y,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Cc(this,e,ga,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Cc(this,e,ga,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Cc(this,e,ga,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Cc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Zc.fromBufferAttribute(a,r),jc.fromBufferAttribute(a,s),t.distanceSqToSegment(Zc,jc,gf,Ag)>i)return;gf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(gf);if(!(c<e.near||c>e.far))return{distance:c,point:Ag.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Eg=new _,Cg=new _,ns=class extends Ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Eg.fromBufferAttribute(t,r),Cg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(Cg);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends Ua{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},co=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rg=new ot,Ef=new ji,Rc=new Qn,Pc=new _,Na=class extends Vt{constructor(e=new $e,t=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;Rg.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(Rg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=d,x=h;p<x;p++){let g=c.getX(p);Pc.fromBufferAttribute(f,g),Pg(Pc,g,l,r,e,t,this)}}else{let d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let p=d,x=h;p<x;p++)Pc.fromBufferAttribute(f,p),Pg(Pc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Pg(n,e,t,i,r,s,o){let a=Ef.distanceSqToPoint(n);if(a<t){let l=new _;Ef.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var di=class extends xn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ba=class extends xn{constructor(e,t,i=Ar,r,s,o,a=un,l=un,c,u=$s,f=1){if(u!==$s&&u!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Oa=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},br=class n extends $e{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,d=t,h=2*f+d,p=i*2+s,x=r+1,g=new _,m=new _;for(let y=0;y<=p;y++){let w=0,M=0,A=0,C=0;if(y<=i){let T=y/i,b=T*Math.PI/2;M=-u-e*Math.cos(b),A=e*Math.sin(b),C=-e*Math.cos(b),w=T*f}else if(y<=i+s){let T=(y-i)/s;M=-u+T*t,A=e,C=0,w=f+T*d}else{let T=(y-i-s)/i,b=T*Math.PI/2;M=u+e*Math.sin(b),A=e*Math.cos(b),C=e*Math.sin(b),w=f+d+T*f}let D=Math.max(0,Math.min(1,w/h)),L=0;y===0?L=.5/r:y===p&&(L=-.5/r);for(let T=0;T<=r;T++){let b=T/r,E=b*Math.PI*2,O=Math.sin(E),B=Math.cos(E);m.x=-A*B,m.y=M,m.z=A*O,a.push(m.x,m.y,m.z),g.set(-A*B,C,A*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+L,D)}if(y>0){let T=(y-1)*x;for(let b=0;b<r;b++){let E=T+b,O=T+b+1,B=y*x+b,X=y*x+b+1;o.push(E,O,B),o.push(O,X,B)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ln=class n extends $e{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let h=i+f/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qt=class n extends $e{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],d=[],h=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(h,2));function y(){let M=new _,A=new _,C=0,D=(t-e)/i;for(let L=0;L<=s;L++){let T=[],b=L/s,E=b*(t-e)+e;for(let O=0;O<=r;O++){let B=O/r,X=B*l+a,N=Math.sin(X),k=Math.cos(X);A.x=E*N,A.y=-b*i+g,A.z=E*k,f.push(A.x,A.y,A.z),M.set(N,D,k).normalize(),d.push(M.x,M.y,M.z),h.push(B,1-b),T.push(p++)}x.push(T)}for(let L=0;L<r;L++)for(let T=0;T<s;T++){let b=x[T][L],E=x[T+1][L],O=x[T+1][L+1],B=x[T][L+1];(e>0||T!==0)&&(u.push(b,E,B),C+=3),(t>0||T!==s-1)&&(u.push(E,O,B),C+=3)}c.addGroup(m,C,0),m+=C}function w(M){let A=p,C=new xe,D=new _,L=0,T=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,g*b,0),d.push(0,b,0),h.push(.5,.5),p++;let E=p;for(let O=0;O<=r;O++){let X=O/r*l+a,N=Math.cos(X),k=Math.sin(X);D.x=T*k,D.y=g*b,D.z=T*N,f.push(D.x,D.y,D.z),d.push(0,b,0),C.x=N*.5+.5,C.y=k*.5*b+.5,h.push(C.x,C.y),p++}for(let O=0;O<r;O++){let B=A+O,X=E+O;M===!0?u.push(X,X+1,B):u.push(X+1,X,B),L+=3}c.addGroup(m,L,M===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ji=class n extends Qt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uo=class n extends $e{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new _,M=new _,A=new _;for(let C=0;C<t.length;C+=3)h(t[C+0],w),h(t[C+1],M),h(t[C+2],A),l(w,M,A,y)}function l(y,w,M,A){let C=A+1,D=[];for(let L=0;L<=C;L++){D[L]=[];let T=y.clone().lerp(M,L/C),b=w.clone().lerp(M,L/C),E=C-L;for(let O=0;O<=E;O++)O===0&&L===C?D[L][O]=T:D[L][O]=T.clone().lerp(b,O/E)}for(let L=0;L<C;L++)for(let T=0;T<2*(C-L)-1;T++){let b=Math.floor(T/2);T%2===0?(d(D[L][b+1]),d(D[L+1][b]),d(D[L][b])):(d(D[L][b+1]),d(D[L+1][b+1]),d(D[L+1][b]))}}function c(y){let w=new _;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(y),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function u(){let y=new _;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];let M=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(M,1-A)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let w=o[y+0],M=o[y+2],A=o[y+4],C=Math.max(w,M,A),D=Math.min(w,M,A);C>.9&&D<.1&&(w<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function p(){let y=new _,w=new _,M=new _,A=new _,C=new xe,D=new xe,L=new xe;for(let T=0,b=0;T<s.length;T+=9,b+=6){y.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),C.set(o[b+0],o[b+1]),D.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),A.copy(y).add(w).add(M).divideScalar(3);let E=g(A);x(C,b+0,y,E),x(D,b+2,w,E),x(L,b+4,M,E)}}function x(y,w,M,A){A<0&&y.x===1&&(o[w]=y.x-1),M.x===0&&M.z===0&&(o[w]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new _,r=[],s=[],o=[],a=new _,l=new ot;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ho=class extends Gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jc=class extends ho{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $f(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Ic=new _,xf=new $f,yf=new $f,vf=new $f,Qc=class extends Gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ic.subVectors(r[0],r[1]).add(r[0]),c=Ic);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ic.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),xf.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,p,x,g),yf.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,p,x,g),vf.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(xf.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),yf.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),vf.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(xf.calc(l),yf.calc(l),vf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ig(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function ZM(n,e){let t=1-n;return t*t*e}function jM(n,e){return 2*(1-n)*n*e}function JM(n,e){return n*n*e}function Ma(n,e,t,i){return ZM(n,e)+jM(n,t)+JM(n,i)}function QM(n,e){let t=1-n;return t*t*t*e}function $M(n,e){let t=1-n;return 3*t*t*n*e}function KM(n,e){return 3*(1-n)*n*n*e}function eb(n,e){return n*n*n*e}function ba(n,e,t,i,r){return QM(n,e)+$M(n,t)+KM(n,i)+eb(n,r)}var za=class extends Gn{constructor(e=new xe,t=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new xe){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$c=class extends Gn{constructor(e=new _,t=new _,i=new _,r=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y),ba(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Gn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Gn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Gn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eu=class extends Gn{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ma(e,r.x,s.x,o.x),Ma(e,r.y,s.y,o.y),Ma(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Ig(a,l.x,c.x,u.x,f.x),Ig(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new xe().fromArray(r))}return this}},Cf=Object.freeze({__proto__:null,ArcCurve:Jc,CatmullRomCurve3:Qc,CubicBezierCurve:za,CubicBezierCurve3:$c,EllipseCurve:ho,LineCurve:Va,LineCurve3:Kc,QuadraticBezierCurve:ka,QuadraticBezierCurve3:eu,SplineCurve:Ga}),tu=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Cf[r.type]().fromJSON(r))}return this}},Ha=class extends tu{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Va(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new ka(this.currentPoint.clone(),new xe(e,t),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new za(this.currentPoint.clone(),new xe(e,t),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ga(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new ho(e,t,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class extends Ha{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ha().fromJSON(r))}return this}};function tb(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=D0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=ob(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let d=t;d<r;d+=t){let h=n[d],p=n[d+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Wa(s,o,t,a,l,c,0),o}function D0(n,e,t,i,r){let s;if(r===xb(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Dg(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Dg(o/i|0,n[o],n[o+1],s);return s&&fo(s,s.next)&&(Xa(s),s=s.next),s}function is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fo(t,t.next)||zt(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&hb(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?ib(n,i,r,s):nb(n)){e.push(l.i,n.i,c.i),Xa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=rb(is(n),e),Wa(n,e,t,i,r,s,2)):o===2&&sb(n,e,t,i,r,s):Wa(is(n),e,t,i,r,s,1);break}}}function nb(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&ya(r,a,s,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ib(n,e,t,i){let r=n.prev,s=n,o=n.next;if(zt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,h=Math.min(a,l,c),p=Math.min(u,f,d),x=Math.max(a,l,c),g=Math.max(u,f,d),m=Rf(h,p,e,t,i),y=Rf(x,g,e,t,i),w=n.prevZ,M=n.nextZ;for(;w&&w.z>=m&&M&&M.z<=y;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==r&&w!==o&&ya(a,u,l,f,c,d,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&ya(a,u,l,f,c,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=m;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==r&&w!==o&&ya(a,u,l,f,c,d,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&ya(a,u,l,f,c,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rb(n,e){let t=n;do{let i=t.prev,r=t.next.next;!fo(i,r)&&U0(i,t,t.next,r)&&qa(i,r)&&qa(r,i)&&(e.push(i.i,t.i,r.i),Xa(t),Xa(t.next),t=n=r),t=t.next}while(t!==n);return is(t)}function sb(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pb(o,a)){let l=F0(o,a);o=is(o,o.next),l=is(l,l.next),Wa(o,e,t,i,r,s,0),Wa(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ob(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=D0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(fb(c))}r.sort(ab);for(let s=0;s<r.length;s++)t=lb(r[s],t);return t}function ab(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function lb(n,e){let t=cb(n,e);if(!t)return e;let i=F0(t,n);return is(i,i.next),is(t,t.next)}function cb(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(fo(n,t))return t;do{if(fo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&L0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let f=Math.abs(r-t.y)/(i-t.x);qa(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&ub(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function ub(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function hb(n,e,t,i){let r=n;do r.z===0&&(r.z=Rf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,db(r)}function db(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Rf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function fb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function L0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ya(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&L0(n,e,t,i,r,s,o,a)}function pb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!mb(n,e)&&(qa(n,e)&&qa(e,n)&&gb(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||fo(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fo(n,e){return n.x===e.x&&n.y===e.y}function U0(n,e,t,i){let r=Lc(zt(n,e,t)),s=Lc(zt(n,e,i)),o=Lc(zt(t,i,n)),a=Lc(zt(t,i,e));return!!(r!==s&&o!==a||r===0&&Dc(n,t,e)||s===0&&Dc(n,i,e)||o===0&&Dc(t,n,i)||a===0&&Dc(t,e,i))}function Dc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lc(n){return n>0?1:n<0?-1:0}function mb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&U0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qa(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function gb(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function F0(n,e){let t=Pf(n.i,n.x,n.y),i=Pf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Dg(n,e,t,i){let r=Pf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var If=class{static triangulate(e,t,i=2){return tb(e,t,i)}},bi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Lg(e),Ug(i,e);let o=e.length;t.forEach(Lg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ug(i,t[l]);let a=If.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Lg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ug(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Qi=class n extends $e{constructor(e=new fi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(r,3)),this.setAttribute("uv",new Ne(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:yb,w,M=!1,A,C,D,L;m&&(w=m.getSpacedPoints(u),M=!0,d=!1,A=m.computeFrenetFrames(u,!1),C=new _,D=new _,L=new _),d||(g=0,h=0,p=0,x=0);let T=a.extractPoints(c),b=T.shape,E=T.holes;if(!bi.isClockWise(b)){b=b.reverse();for(let V=0,z=E.length;V<z;V++){let H=E[V];bi.isClockWise(H)&&(E[V]=H.reverse())}}function B(V){let H=10000000000000001e-36,W=V[0];for(let R=1;R<=V.length;R++){let Y=R%V.length,Z=V[Y],le=Z.x-W.x,fe=Z.y-W.y,P=le*le+fe*fe,v=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(W.x),Math.abs(W.y)),U=H*v*v;if(P<=U){V.splice(Y,1),R--;continue}W=Z}}B(b),E.forEach(B);let X=E.length,N=b;for(let V=0;V<X;V++){let z=E[V];b=b.concat(z)}function k(V,z,H){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(z,H)}let j=b.length;function F(V,z,H){let W,R,Y,Z=V.x-z.x,le=V.y-z.y,fe=H.x-V.x,P=H.y-V.y,v=Z*Z+le*le,U=Z*P-le*fe;if(Math.abs(U)>Number.EPSILON){let Q=Math.sqrt(v),ee=Math.sqrt(fe*fe+P*P),J=z.x-le/Q,ue=z.y+Z/Q,ce=H.x-P/ee,he=H.y+fe/ee,me=((ce-J)*P-(he-ue)*fe)/(Z*P-le*fe);W=J+Z*me-V.x,R=ue+le*me-V.y;let te=W*W+R*R;if(te<=2)return new xe(W,R);Y=Math.sqrt(te/2)}else{let Q=!1;Z>Number.EPSILON?fe>Number.EPSILON&&(Q=!0):Z<-Number.EPSILON?fe<-Number.EPSILON&&(Q=!0):Math.sign(le)===Math.sign(P)&&(Q=!0),Q?(W=-le,R=Z,Y=Math.sqrt(v)):(W=Z,R=le,Y=Math.sqrt(v/2))}return new xe(W/Y,R/Y)}let ie=[];for(let V=0,z=N.length,H=z-1,W=V+1;V<z;V++,H++,W++)H===z&&(H=0),W===z&&(W=0),ie[V]=F(N[V],N[H],N[W]);let ne=[],de,Te=ie.concat();for(let V=0,z=X;V<z;V++){let H=E[V];de=[];for(let W=0,R=H.length,Y=R-1,Z=W+1;W<R;W++,Y++,Z++)Y===R&&(Y=0),Z===R&&(Z=0),de[W]=F(H[W],H[Y],H[Z]);ne.push(de),Te=Te.concat(de)}let we;if(g===0)we=bi.triangulateShape(N,E);else{let V=[],z=[];for(let H=0;H<g;H++){let W=H/g,R=h*Math.cos(W*Math.PI/2),Y=p*Math.sin(W*Math.PI/2)+x;for(let Z=0,le=N.length;Z<le;Z++){let fe=k(N[Z],ie[Z],Y);Re(fe.x,fe.y,-R),W===0&&V.push(fe)}for(let Z=0,le=X;Z<le;Z++){let fe=E[Z];de=ne[Z];let P=[];for(let v=0,U=fe.length;v<U;v++){let Q=k(fe[v],de[v],Y);Re(Q.x,Q.y,-R),W===0&&P.push(Q)}W===0&&z.push(P)}}we=bi.triangulateShape(V,z)}let Pe=we.length,Ce=p+x;for(let V=0;V<j;V++){let z=d?k(b[V],Te[V],Ce):b[V];M?(D.copy(A.normals[0]).multiplyScalar(z.x),C.copy(A.binormals[0]).multiplyScalar(z.y),L.copy(w[0]).add(D).add(C),Re(L.x,L.y,L.z)):Re(z.x,z.y,0)}for(let V=1;V<=u;V++)for(let z=0;z<j;z++){let H=d?k(b[z],Te[z],Ce):b[z];M?(D.copy(A.normals[V]).multiplyScalar(H.x),C.copy(A.binormals[V]).multiplyScalar(H.y),L.copy(w[V]).add(D).add(C),Re(L.x,L.y,L.z)):Re(H.x,H.y,f/u*V)}for(let V=g-1;V>=0;V--){let z=V/g,H=h*Math.cos(z*Math.PI/2),W=p*Math.sin(z*Math.PI/2)+x;for(let R=0,Y=N.length;R<Y;R++){let Z=k(N[R],ie[R],W);Re(Z.x,Z.y,f+H)}for(let R=0,Y=E.length;R<Y;R++){let Z=E[R];de=ne[R];for(let le=0,fe=Z.length;le<fe;le++){let P=k(Z[le],de[le],W);M?Re(P.x,P.y+w[u-1].y,w[u-1].x+H):Re(P.x,P.y,f+H)}}}re(),se();function re(){let V=r.length/3;if(d){let z=0,H=j*z;for(let W=0;W<Pe;W++){let R=we[W];be(R[2]+H,R[1]+H,R[0]+H)}z=u+g*2,H=j*z;for(let W=0;W<Pe;W++){let R=we[W];be(R[0]+H,R[1]+H,R[2]+H)}}else{for(let z=0;z<Pe;z++){let H=we[z];be(H[2],H[1],H[0])}for(let z=0;z<Pe;z++){let H=we[z];be(H[0]+j*u,H[1]+j*u,H[2]+j*u)}}i.addGroup(V,r.length/3-V,0)}function se(){let V=r.length/3,z=0;_e(N,z),z+=N.length;for(let H=0,W=E.length;H<W;H++){let R=E[H];_e(R,z),z+=R.length}i.addGroup(V,r.length/3-V,1)}function _e(V,z){let H=V.length;for(;--H>=0;){let W=H,R=H-1;R<0&&(R=V.length-1);for(let Y=0,Z=u+g*2;Y<Z;Y++){let le=j*Y,fe=j*(Y+1),P=z+W+le,v=z+R+le,U=z+R+fe,Q=z+W+fe;Oe(P,v,U,Q)}}}function Re(V,z,H){l.push(V),l.push(z),l.push(H)}function be(V,z,H){ze(V),ze(z),ze(H);let W=r.length/3,R=y.generateTopUV(i,r,W-3,W-2,W-1);S(R[0]),S(R[1]),S(R[2])}function Oe(V,z,H,W){ze(V),ze(z),ze(W),ze(z),ze(H),ze(W);let R=r.length/3,Y=y.generateSideWallUV(i,r,R-6,R-3,R-2,R-1);S(Y[0]),S(Y[1]),S(Y[3]),S(Y[1]),S(Y[2]),S(Y[3])}function ze(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function S(V){s.push(V.x),s.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vb(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Cf[r.type]().fromJSON(r)),new n(i,e.options)}},yb={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new xe(s,o),new xe(a,l),new xe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-f),new xe(d,1-p),new xe(x,1-m)]:[new xe(a,1-l),new xe(u,1-f),new xe(h,1-p),new xe(g,1-m)]}};function vb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nt=class n extends uo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ya=class n extends $e{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ke(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,f=new _,d=new xe,h=new _,p=new _,x=new _,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let w=i+y*u*r,M=Math.sin(w),A=Math.cos(w);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*M,f.y=e[C].y,f.z=e[C].x*A,o.push(f.x,f.y,f.z),d.x=y/t,d.y=C/(e.length-1),a.push(d.x,d.y);let D=l[3*C+0]*M,L=l[3*C+1],T=l[3*C+0]*A;c.push(D,L,T)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let M=w+y*e.length,A=M,C=M+e.length,D=M+e.length+1,L=M+1;s.push(A,C,L),s.push(D,L,C)}this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},pi=class n extends uo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tn=class n extends $e{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*d-o;for(let w=0;w<c;w++){let M=w*f-s;p.push(M,-y,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let w=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),C=y+1+c*m;h.push(w,M,C),h.push(M,A,C)}this.setIndex(h),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},po=class n extends $e{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=e,d=(t-e)/r,h=new _,p=new xe;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}f+=d}for(let x=0;x<r;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,w=y,M=y+i+1,A=y+i+2,C=y+1;a.push(w,M,C),a.push(M,A,C)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Za=class n extends $e{constructor(e=new fi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(s,3)),this.setAttribute("uv",new Ne(o,2));function c(u){let f=r.length/3,d=u.extractPoints(t),h=d.shape,p=d.holes;bi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];bi.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=bi.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];h=h.concat(y)}for(let g=0,m=h.length;g<m;g++){let y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],w=y[0]+f,M=y[1]+f,A=y[2]+f;i.push(w,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _b(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function _b(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Ln=class n extends $e{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new _,d=new _,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],w=m/i,M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let C=A/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+w*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(C+M,1-w),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let w=u[m][y+1],M=u[m][y],A=u[m+1][y],C=u[m+1][y+1];(m!==0||o>0)&&h.push(w,M,C),(m!==i-1||l<Math.PI)&&h.push(M,A,C)}this.setIndex(h),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},rs=class n extends uo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mi=class n extends $e{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new _,f=new _,d=new _;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,g=h/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,g=(r+1)*(h-1)+p-1,m=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sr=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new _,s=new _;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let f=l[c],d=f.start,h=f.count;for(let p=d,x=d+h;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,y),Fg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Fg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var gt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ja=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var dn=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nu=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},iu=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Uc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Mb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ss=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ru=class extends ss{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sf,endingEnd:Sf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wf:s=e,a=2*t-i;break;case Tf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wf:o=e,l=2*i-t;break;case Tf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-h)*g+(1.5+h)*x+.5*p,M=h*g-h*x;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+y*o[c+A]+w*o[l+A]+M*o[f+A];return s}},su=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},ou=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uc(t,this.TimeBufferType),this.values=Uc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Uc(e.times,Array),values:Uc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ru(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case kc:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return kc;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Mb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Nc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,h=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=kc;var wr=class extends Hn{constructor(e,t,i){super(e,t,i)}};wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Sa;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};au.prototype.ValueTypeName="color";var lu=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};lu.prototype.ValueTypeName="number";var cu=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)We.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ja=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Sa;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};uu.prototype.ValueTypeName="vector";var Bc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},hu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},N0=new hu,mo=class{constructor(e){this.manager=e!==void 0?e:N0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=new WeakMap,du=class extends mo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Bc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Zs.get(o);f===void 0&&(f=[],Zs.set(o,f)),f.push({onLoad:t,onError:r})}return o}let a=eo("img");function l(){u(),t&&t(this);let f=Zs.get(this)||[];for(let d=0;d<f.length;d++){let h=f[d];h.onLoad&&h.onLoad(this)}Zs.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Bc.remove(`image:${e}`);let d=Zs.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onError&&p.onError(f)}Zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Ti=class extends mo{constructor(e){super(e)}load(e,t,i,r){let s=new xn,o=new du(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},go=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qa=class extends go{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_f=new ot,Ng=new _,Bg=new _,fu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ng),Bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bg),t.updateMatrixWorld(),_f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Og=new ot,xa=new _,Mf=new _,Df=class extends fu{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(xa),Mf.copy(i.position),Mf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-xa.x,-xa.y,-xa.z),Og.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Og,i.coordinateSystem,i.reversedDepth)}},$a=class extends go{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ka=class extends Ca{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lf=class extends fu{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Lf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pu=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Kf="\\[\\]\\.:\\/",bb=new RegExp("["+Kf+"]","g"),ep="[^"+Kf+"]",Sb="[^"+Kf.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",ep),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),Ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),Eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),Cb=new RegExp("^"+wb+Tb+Ab+Eb+"$"),Rb=["material","materials","bones","map"],Uf=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bb,"")}static parseTrackName(e){let t=Cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Rb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Uf;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bC=new Float32Array(1);var zg=new ot,$i=class{constructor(e,t,i=0,r=1/0){this.ray=new ji(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(e,t=!0,i=[]){return Ff(e,this,i,t),i.sort(Vg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ff(e[r],this,i,t);return i.sort(Vg),i}};function Vg(n,e){return n.distance-e.distance}function Ff(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Ff(s[o],e,t,!0)}}var kg=new _,Fc=new _,js=new _,Js=new _,bf=new _,Pb=new _,Ib=new _,tl=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){kg.subVectors(e,this.start),Fc.subVectors(this.end,this.start);let i=Fc.dot(Fc),s=Fc.dot(kg)/i;return t&&(s=Ke(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Pb,i=Ib){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;js.subVectors(c,a),Js.subVectors(u,l),bf.subVectors(a,l);let f=js.dot(js),d=Js.dot(Js),h=Js.dot(bf);if(f<=r&&d<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,o=h/d,o=Ke(o,0,1);else{let p=js.dot(bf);if(d<=r)o=0,s=Ke(-p/f,0,1);else{let x=js.dot(Js),g=f*d-x*x;g!==0?s=Ke((x*h-p*d)/g,0,1):s=0,o=(x*s+h)/d,o<0?(o=0,s=Ke(-p/f,0,1)):o>1&&(o=1,s=Ke((x-p)/f,0,1))}}return t.copy(a).add(js.multiplyScalar(s)),i.copy(l).add(Js.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function tp(n,e,t,i){let r=Db(i);switch(t){case Wf:return n*e;case Ru:return n*e/r.components*r.byteLength;case Pu:return n*e/r.components*r.byteLength;case Xf:return n*e*2/r.components*r.byteLength;case Iu:return n*e*2/r.components*r.byteLength;case qf:return n*e*3/r.components*r.byteLength;case Un:return n*e*4/r.components*r.byteLength;case Du:return n*e*4/r.components*r.byteLength;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Nu:return Math.max(n,16)*Math.max(e,8)/4;case Lu:case Fu:return Math.max(n,8)*Math.max(e,8)/2;case Bu:case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ih:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Db(n){switch(n){case Wn:case Vf:return{byteLength:1,components:1};case yo:case kf:case Ei:return{byteLength:2,components:1};case Eu:case Cu:return{byteLength:2,components:4};case Ar:case Au:case gi:return{byteLength:4,components:1};case Gf:case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
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
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c1=`vec3 transformedNormal = objectNormal;
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
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
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
}`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R1=`uniform bool receiveShadow;
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
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,N1=`struct PhysicalMaterial {
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
}`,B1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
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
}`,WS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,XS=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
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
}`,JS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,$S=`uniform vec3 diffuse;
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
}`,KS=`#define LAMBERT
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define MATCAP
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
}`,nw=`#define MATCAP
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
}`,iw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,sw=`#define PHONG
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
}`,ow=`#define PHONG
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
}`,aw=`#define STANDARD
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
}`,lw=`#define STANDARD
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
}`,cw=`#define TOON
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
}`,uw=`#define TOON
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
}`,hw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,fw=`#include <common>
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
}`,pw=`uniform vec3 color;
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
}`,mw=`uniform float rotation;
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
}`,gw=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Ob,alphahash_pars_fragment:zb,alphamap_fragment:Vb,alphamap_pars_fragment:kb,alphatest_fragment:Gb,alphatest_pars_fragment:Hb,aomap_fragment:Wb,aomap_pars_fragment:qb,batching_pars_vertex:Xb,batching_vertex:Yb,begin_vertex:Zb,beginnormal_vertex:jb,bsdfs:Jb,iridescence_fragment:Qb,bumpmap_pars_fragment:$b,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:e1,clipping_planes_pars_vertex:t1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:r1,color_pars_vertex:s1,color_vertex:o1,common:a1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:c1,displacementmap_pars_vertex:u1,displacementmap_vertex:h1,emissivemap_fragment:d1,emissivemap_pars_fragment:f1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:P1,envmap_vertex:_1,fog_vertex:M1,fog_pars_vertex:b1,fog_fragment:S1,fog_pars_fragment:w1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:A1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:C1,lights_pars_begin:R1,lights_toon_fragment:I1,lights_toon_pars_fragment:D1,lights_phong_fragment:L1,lights_phong_pars_fragment:U1,lights_physical_fragment:F1,lights_physical_pars_fragment:N1,lights_fragment_begin:B1,lights_fragment_maps:O1,lights_fragment_end:z1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:H1,map_fragment:W1,map_pars_fragment:q1,map_particle_fragment:X1,map_particle_pars_fragment:Y1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:j1,morphinstance_vertex:J1,morphcolor_vertex:Q1,morphnormal_vertex:$1,morphtarget_pars_vertex:K1,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:hS,packing:dS,premultiplied_alpha_fragment:fS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:vS,shadowmap_pars_vertex:_S,shadowmap_vertex:MS,shadowmask_pars_fragment:bS,skinbase_vertex:SS,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:ES,specularmap_pars_fragment:CS,tonemapping_fragment:RS,tonemapping_pars_fragment:PS,transmission_fragment:IS,transmission_pars_fragment:DS,uv_pars_fragment:LS,uv_pars_vertex:US,uv_vertex:FS,worldpos_vertex:NS,background_vert:BS,background_frag:OS,backgroundCube_vert:zS,backgroundCube_frag:VS,cube_vert:kS,cube_frag:GS,depth_vert:HS,depth_frag:WS,distanceRGBA_vert:qS,distanceRGBA_frag:XS,equirect_vert:YS,equirect_frag:ZS,linedashed_vert:jS,linedashed_frag:JS,meshbasic_vert:QS,meshbasic_frag:$S,meshlambert_vert:KS,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:hw,points_frag:dw,shadow_vert:fw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},Le={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ci={basic:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ie(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([Le.points,Le.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([Le.common,Le.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([Le.sprite,Le.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:yn([Le.common,Le.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:yn([Le.lights,Le.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ci.physical={uniforms:yn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ch={r:0,b:0,g:0},cs=new Jt,xw=new ot;function yw(n,e,t,i,r,s,o){let a=new Ie(0),l=s===!0?0:1,c,u,f=null,d=0,h=null;function p(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1,A=p(w);A===null?m(a,l):A&&A.isColor&&(m(A,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,M){let A=p(M);A&&(A.isCubeTexture||A.mapping===il)?(u===void 0&&(u=new ke(new et(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ls(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(M.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xw.makeRotationFromEuler(cs)),u.material.toneMapped=ht.getTransfer(A.colorSpace)!==_t,(f!==A||d!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ke(new tn(2,2),new hn({name:"BackgroundMaterial",uniforms:ls(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,M){w.getRGB(ch,Qf(n)),i.buffers.color.setClear(ch.r,ch.g,ch.b,M,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g,dispose:y}}function vw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(b,E,O,B,X){let N=!1,k=f(B,O,E);s!==k&&(s=k,c(s.object)),N=h(b,B,O,X),N&&p(b,B,O,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(b,E,O,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,E,O){let B=O.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let N=X[E.id];N===void 0&&(N={},X[E.id]=N);let k=N[B];return k===void 0&&(k=d(l()),N[B]=k),k}function d(b){let E=[],O=[],B=[];for(let X=0;X<t;X++)E[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:B,object:b,attributes:{},index:null}}function h(b,E,O,B){let X=s.attributes,N=E.attributes,k=0,j=O.getAttributes();for(let F in j)if(j[F].location>=0){let ne=X[F],de=N[F];if(de===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function p(b,E,O,B){let X={},N=E.attributes,k=0,j=O.getAttributes();for(let F in j)if(j[F].location>=0){let ne=N[F];ne===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),X[F]=de,k++}s.attributes=X,s.attributesNum=k,s.index=B}function x(){let b=s.newAttributes;for(let E=0,O=b.length;E<O;E++)b[E]=0}function g(b){m(b,0)}function m(b,E){let O=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;O[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),X[b]!==E&&(n.vertexAttribDivisor(b,E),X[b]=E)}function y(){let b=s.newAttributes,E=s.enabledAttributes;for(let O=0,B=E.length;O<B;O++)E[O]!==b[O]&&(n.disableVertexAttribArray(O),E[O]=0)}function w(b,E,O,B,X,N,k){k===!0?n.vertexAttribIPointer(b,E,O,X,N):n.vertexAttribPointer(b,E,O,B,X,N)}function M(b,E,O,B){x();let X=B.attributes,N=O.getAttributes(),k=E.defaultAttributeValues;for(let j in N){let F=N[j];if(F.location>=0){let ie=X[j];if(ie===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let ne=ie.normalized,de=ie.itemSize,Te=e.get(ie);if(Te===void 0)continue;let we=Te.buffer,Pe=Te.type,Ce=Te.bytesPerElement,re=Pe===n.INT||Pe===n.UNSIGNED_INT||ie.gpuType===Au;if(ie.isInterleavedBufferAttribute){let se=ie.data,_e=se.stride,Re=ie.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)m(F.location+be,se.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<F.locationSize;be++)g(F.location+be);n.bindBuffer(n.ARRAY_BUFFER,we);for(let be=0;be<F.locationSize;be++)w(F.location+be,de/F.locationSize,Pe,ne,_e*Ce,(Re+de/F.locationSize*be)*Ce,re)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)m(F.location+se,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<F.locationSize;se++)g(F.location+se);n.bindBuffer(n.ARRAY_BUFFER,we);for(let se=0;se<F.locationSize;se++)w(F.location+se,de/F.locationSize,Pe,ne,de*Ce,de/F.locationSize*se*Ce,re)}}else if(k!==void 0){let ne=k[j];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(F.location,ne);break;case 3:n.vertexAttrib3fv(F.location,ne);break;case 4:n.vertexAttrib4fv(F.location,ne);break;default:n.vertexAttrib1fv(F.location,ne)}}}}y()}function A(){L();for(let b in i){let E=i[b];for(let O in E){let B=E[O];for(let X in B)u(B[X].object),delete B[X];delete E[O]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let E=i[b.id];for(let O in E){let B=E[O];for(let X in B)u(B[X].object),delete B[X];delete E[O]}delete i[b.id]}function D(b){for(let E in i){let O=i[E];if(O[b.id]===void 0)continue;let B=O[b.id];for(let X in B)u(B[X].object),delete B[X];delete O[b.id]}}function L(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function _w(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let p=0;p<f;p++)h+=u[p];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Un&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Wn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==gi&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:A,maxSamples:C}}function bw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Pn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let y=s?0:i,w=y*4,M=m.clippingState||null;l.value=M,M=u(p,d,w,h);for(let A=0;A!==w;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,M=h;w!==x;++w,M+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Sw(n){let e=new WeakMap;function t(o,a){return a===xo?o.mapping=os:a===wu&&(o.mapping=as),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xo||a===wu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var bo=4,B0=[.125,.215,.35,.446,.526,.582],ds=20,np=new Ka,O0=new Ie,ip=null,rp=0,sp=0,op=!1,hs=(1+Math.sqrt(5))/2,Mo=1/hs,z0=[new _(-hs,Mo,0),new _(hs,Mo,0),new _(-Mo,0,hs),new _(Mo,0,hs),new _(0,hs,-Mo),new _(0,hs,Mo),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],ww=new _,wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=ww}=s;ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,uh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ei,format:Un,colorSpace:Kr,depthBuffer:!1},r=V0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tw(s)),this._blurMaterial=Aw(s,e,t)}return r}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,np)}_sceneToCubeUV(e,t,i,r,s){let l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(O0),f.toneMapping=er,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));let x=new Mt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new ke(new et,x),m=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,m=!0):(x.color.copy(O0),m=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let A=this._cubeSize;uh(r,M*A,w>2?A:0,A,A),f.setRenderTarget(r),m&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===os||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;uh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,np)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=z0[(r-s-1)%z0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ke(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ds-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):ds;g>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);let m=[],y=0;for(let D=0;D<ds;++D){let L=D/x,T=Math.exp(-L*L/2);m.push(T),D===0?y+=T:D<g&&(y+=2*T)}for(let D=0;D<m.length;D++)m[D]=m[D]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let M=this._sizeLods[r],A=3*M*(r>w-bo?r-w+bo:0),C=4*(this._cubeSize-M);uh(t,A,C,3*M,2*M),l.setRenderTarget(t),l.render(f,np)}};function Tw(n){let e=[],t=[],i=[],r=n,s=n-bo+1+B0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-bo?l=B0[o-n+bo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*h),w=new Float32Array(g*p*h),M=new Float32Array(m*p*h);for(let C=0;C<h;C++){let D=C%3*2/3-1,L=C>2?0:-1,T=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];y.set(T,x*p*C),w.set(d,g*p*C);let b=[C,C,C,C,C,C];M.set(b,m*p*C)}let A=new $e;A.setAttribute("position",new ft(y,x)),A.setAttribute("uv",new ft(w,g)),A.setAttribute("faceIndex",new ft(M,m)),e.push(A),r>bo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function V0(n,e,t){let i=new Dn(n,e,t);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Aw(n,e,t){let i=new Float32Array(ds),r=new _(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gp(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function k0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function G0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gp(){return`

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
	`}function Ew(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===xo||l===wu,u=l===os||l===as;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wo(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new wo(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&to("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rw(n,e,t,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,p=f.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let w=0,M=y.length;w<M;w+=3){let A=y[w+0],C=y[w+1],D=y[w+2];d.push(A,C,C,D,D,A)}}else if(p!==void 0){let y=p.array;x=p.version;for(let w=0,M=y.length/3-1;w<M;w+=3){let A=w+0,C=w+1,D=w+2;d.push(A,C,C,D,D,A)}}else return;let g=new(Jf(d)?Ea:es)(d,1);g.version=x;let m=s.get(f);m&&e.remove(m),s.set(f,g)}function u(f){let d=s.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Pw(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function f(d,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*x[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Iw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Dw(n,e,t){let i=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*A*4*f),D=new Aa(C,M,A,f);D.type=gi,D.needsUpdate=!0;let L=w*4;for(let b=0;b<f;b++){let E=g[b],O=m[b],B=y[b],X=M*A*4*b;for(let N=0;N<E.count;N++){let k=N*L;h===!0&&(r.fromBufferAttribute(E,N),C[X+k+0]=r.x,C[X+k+1]=r.y,C[X+k+2]=r.z,C[X+k+3]=0),p===!0&&(r.fromBufferAttribute(O,N),C[X+k+4]=r.x,C[X+k+5]=r.y,C[X+k+6]=r.z,C[X+k+7]=0),x===!0&&(r.fromBufferAttribute(B,N),C[X+k+8]=r.x,C[X+k+9]=r.y,C[X+k+10]=r.z,C[X+k+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new xe(M,A)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Lw(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ax=new xn,H0=new Ba(1,1),lx=new Aa,cx=new qc,ux=new Ra,W0=[],q0=[],X0=new Float32Array(16),Y0=new Float32Array(9),Z0=new Float32Array(4);function To(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=W0[r];if(s===void 0&&(s=new Float32Array(r),W0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fh(n,e){let t=q0[e];t===void 0&&(t=new Int32Array(e),q0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function Nw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function Bw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function Ow(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Z0.set(i),n.uniformMatrix2fv(this.addr,!1,Z0),sn(t,i)}}function zw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Y0.set(i),n.uniformMatrix3fv(this.addr,!1,Y0),sn(t,i)}}function Vw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;X0.set(i),n.uniformMatrix4fv(this.addr,!1,X0),sn(t,i)}}function kw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function Hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function Ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function qw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function Yw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function jw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(H0.compareFunction=Yf,s=H0):s=ax,t.setTexture2D(e||s,r)}function Jw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cx,r)}function Qw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ux,r)}function $w(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lx,r)}function Kw(n){switch(n){case 5126:return Uw;case 35664:return Fw;case 35665:return Nw;case 35666:return Bw;case 35674:return Ow;case 35675:return zw;case 35676:return Vw;case 5124:case 35670:return kw;case 35667:case 35671:return Gw;case 35668:case 35672:return Hw;case 35669:case 35673:return Ww;case 5125:return qw;case 36294:return Xw;case 36295:return Yw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return $w}}function eT(n,e){n.uniform1fv(this.addr,e)}function tT(n,e){let t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function nT(n,e){let t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function iT(n,e){let t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function rT(n,e){let t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sT(n,e){let t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oT(n,e){let t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aT(n,e){n.uniform1iv(this.addr,e)}function lT(n,e){n.uniform2iv(this.addr,e)}function cT(n,e){n.uniform3iv(this.addr,e)}function uT(n,e){n.uniform4iv(this.addr,e)}function hT(n,e){n.uniform1uiv(this.addr,e)}function dT(n,e){n.uniform2uiv(this.addr,e)}function fT(n,e){n.uniform3uiv(this.addr,e)}function pT(n,e){n.uniform4uiv(this.addr,e)}function mT(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ax,s[o])}function gT(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cx,s[o])}function xT(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ux,s[o])}function yT(n,e,t){let i=this.cache,r=e.length,s=fh(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lx,s[o])}function vT(n){switch(n){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return hT;case 36294:return dT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}var lp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kw(t.type)}},cp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vT(t.type)}},up=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ap=/(\w+)(\])?(\[|\.)?/g;function j0(n,e){n.seq.push(e),n.map[e.id]=e}function _T(n,e,t){let i=n.name,r=i.length;for(ap.lastIndex=0;;){let s=ap.exec(i),o=ap.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){j0(t,c===void 0?new lp(a,n,e):new cp(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new up(a),j0(t,f)),t=f}}}var So=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_T(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function J0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MT=37297,bT=0;function ST(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Q0=new nt;function wT(n){ht._getMatrix(Q0,ht.workingColorSpace,n);let e=`mat3( ${Q0.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ST(n.getShaderSource(e),a)}else return s}function TT(n,e){let t=wT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function AT(n,e){let t;switch(e){case h0:t="Linear";break;case d0:t="Reinhard";break;case f0:t="Cineon";break;case Su:t="ACESFilmic";break;case m0:t="AgX";break;case g0:t="Neutral";break;case p0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hh=new _;function ET(){ht.getLuminanceCoefficients(hh);let n=hh.x.toFixed(4),e=hh.y.toFixed(4),t=hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function RT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cl(n){return n!==""}function K0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(n){return n.replace(IT,LT)}var DT=new Map;function LT(n,e){let t=st[e];if(t===void 0){let i=DT.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hp(t)}var UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(n){return n.replace(UT,FT)}function FT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function NT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function BT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case as:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function zT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bu:e="ENVMAP_BLENDING_MULTIPLY";break;case c0:e="ENVMAP_BLENDING_MIX";break;case u0:e="ENVMAP_BLENDING_ADD";break}return e}function VT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=NT(t),c=BT(t),u=OT(t),f=zT(t),d=VT(t),h=CT(t),p=RT(s),x=r.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cl).join(`
`),m.length>0&&(m+=`
`)):(g=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),m=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?st.tonemapping_pars_fragment:"",t.toneMapping!==er?AT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,TT("linearToOutputTexel",t.outputColorSpace),ET(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),o=hp(o),o=K0(o,t),o=ex(o,t),a=hp(a),a=K0(a,t),a=ex(a,t),o=tx(o),a=tx(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+g+o,M=y+m+a,A=J0(r,r.VERTEX_SHADER,w),C=J0(r,r.FRAGMENT_SHADER,M);r.attachShader(x,A),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(E){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(C)||"",N=O.trim(),k=B.trim(),j=X.trim(),F=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,C);else{let ne=$0(r,A,"vertex"),de=$0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+ne+`
`+de)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||j==="")&&(ie=!1);ie&&(E.diagnostics={runnable:F,programLog:N,vertexShader:{log:k,prefix:g},fragmentShader:{log:j,prefix:m}})}r.deleteShader(A),r.deleteShader(C),L=new So(r,x),T=PT(r,x)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,MT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}var GT=0,dp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fp(e),t.set(e,i)),i}},fp=class{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}};function HT(n,e,t,i,r,s,o){let a=new io,l=new dp,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,b,E,O,B){let X=O.fog,N=B.geometry,k=T.isMeshStandardMaterial?O.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||k),F=j&&j.mapping===il?j.image.height:null,ie=p[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));let ne=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=ne!==void 0?ne.length:0,Te=0;N.morphAttributes.position!==void 0&&(Te=1),N.morphAttributes.normal!==void 0&&(Te=2),N.morphAttributes.color!==void 0&&(Te=3);let we,Pe,Ce,re;if(ie){let yt=Ci[ie];we=yt.vertexShader,Pe=yt.fragmentShader}else we=T.vertexShader,Pe=T.fragmentShader,l.update(T),Ce=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);let se=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,be=B.isBatchedMesh===!0,Oe=!!T.map,ze=!!T.matcap,S=!!j,V=!!T.aoMap,z=!!T.lightMap,H=!!T.bumpMap,W=!!T.normalMap,R=!!T.displacementMap,Y=!!T.emissiveMap,Z=!!T.metalnessMap,le=!!T.roughnessMap,fe=T.anisotropy>0,P=T.clearcoat>0,v=T.dispersion>0,U=T.iridescence>0,Q=T.sheen>0,ee=T.transmission>0,J=fe&&!!T.anisotropyMap,ue=P&&!!T.clearcoatMap,ce=P&&!!T.clearcoatNormalMap,he=P&&!!T.clearcoatRoughnessMap,me=U&&!!T.iridescenceMap,te=U&&!!T.iridescenceThicknessMap,pe=Q&&!!T.sheenColorMap,Be=Q&&!!T.sheenRoughnessMap,ye=!!T.specularMap,Se=!!T.specularColorMap,Ge=!!T.specularIntensityMap,q=ee&&!!T.transmissionMap,ve=ee&&!!T.thicknessMap,Ee=!!T.gradientMap,Ue=!!T.alphaMap,Me=T.alphaTest>0,ge=!!T.alphaHash,qe=!!T.extensions,tt=er;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(tt=n.toneMapping);let It={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:Pe,defines:T.defines,customVertexShaderID:Ce,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:be,batchingColor:be&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Kr,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:ze,envMap:S,envMapMode:S&&j.mapping,envMapCubeUVHeight:F,aoMap:V,lightMap:z,bumpMap:H,normalMap:W,displacementMap:d&&R,emissiveMap:Y,normalMapObjectSpace:W&&T.normalMapType===_0,normalMapTangentSpace:W&&T.normalMapType===ah,metalnessMap:Z,roughnessMap:le,anisotropy:fe,anisotropyMap:J,clearcoat:P,clearcoatMap:ue,clearcoatNormalMap:ce,clearcoatRoughnessMap:he,dispersion:v,iridescence:U,iridescenceMap:me,iridescenceThicknessMap:te,sheen:Q,sheenColorMap:pe,sheenRoughnessMap:Be,specularMap:ye,specularColorMap:Se,specularIntensityMap:Ge,transmission:ee,transmissionMap:q,thicknessMap:ve,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:ge,combine:T.combine,mapUv:Oe&&x(T.map.channel),aoMapUv:V&&x(T.aoMap.channel),lightMapUv:z&&x(T.lightMap.channel),bumpMapUv:H&&x(T.bumpMap.channel),normalMapUv:W&&x(T.normalMap.channel),displacementMapUv:R&&x(T.displacementMap.channel),emissiveMapUv:Y&&x(T.emissiveMap.channel),metalnessMapUv:Z&&x(T.metalnessMap.channel),roughnessMapUv:le&&x(T.roughnessMap.channel),anisotropyMapUv:J&&x(T.anisotropyMap.channel),clearcoatMapUv:ue&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(T.sheenRoughnessMap.channel),specularMapUv:ye&&x(T.specularMap.channel),specularColorMapUv:Se&&x(T.specularColorMap.channel),specularIntensityMapUv:Ge&&x(T.specularIntensityMap.channel),transmissionMapUv:q&&x(T.transmissionMap.channel),thicknessMapUv:ve&&x(T.thicknessMap.channel),alphaMapUv:Ue&&x(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(W||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Oe||Ue),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&ht.getTransfer(T.map.colorSpace)===_t,decodeVideoTextureEmissive:Y&&T.emissiveMap.isVideoTexture===!0&&ht.getTransfer(T.emissiveMap.colorSpace)===_t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let E in T.defines)b.push(E),b.push(T.defines[E]);return T.isRawShaderMaterial===!1&&(y(b,T),w(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function w(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let b=p[T.type],E;if(b){let O=Ci[b];E=lh.clone(O.uniforms)}else E=T.uniforms;return E}function A(T,b){let E;for(let O=0,B=u.length;O<B;O++){let X=u[O];if(X.cacheKey===b){E=X,++E.usedTimes;break}}return E===void 0&&(E=new kT(n,b,T,s),u.push(E)),E}function C(T){if(--T.usedTimes===0){let b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function D(T){l.remove(T)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:L}}function WT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function qT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,p,x,g){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:x,group:g},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=x,m.group=g),e++,m}function a(f,d,h,p,x,g){let m=o(f,d,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,p,x,g){let m=o(f,d,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||qT),i.length>1&&i.sort(d||ix),r.length>1&&r.sort(d||ix)}function u(){for(let f=e,d=n.length;f<d;f++){let h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new rx,n.set(i,[o])):r>=s.length?(o=new rx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Ie};break;case"SpotLight":t={position:new _,direction:new _,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function ZT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jT=0;function JT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QT(n){let e=new YT,t=ZT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let r=new _,s=new ot,o=new ot;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,y=0,w=0,M=0,A=0,C=0,D=0;c.sort(JT);for(let T=0,b=c.length;T<b;T++){let E=c[T],O=E.color,B=E.intensity,X=E.distance,N=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=O.r*B,f+=O.g*B,d+=O.b*B;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],B);D++}else if(E.isDirectionalLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let j=E.shadow,F=t.get(E);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=E.shadow.matrix,y++}i.directional[h]=k,h++}else if(E.isSpotLight){let k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(O).multiplyScalar(B),k.distance=X,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[x]=k;let j=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,j.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=j.matrix,E.castShadow){let F=t.get(E);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=N,M++}x++}else if(E.isRectAreaLight){let k=e.get(E);k.color.copy(O).multiplyScalar(B),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=k,g++}else if(E.isPointLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){let j=E.shadow,F=t.get(E);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=E.shadow.matrix,w++}i.point[p]=k,p++}else if(E.isHemisphereLight){let k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(B),k.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==A||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,L.directionalLength=h,L.pointLength=p,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=A,L.numLightProbes=D,i.version=jT++)}function l(c,u){let f=0,d=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let w=c[m];if(w.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(w.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(w.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(w.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function sx(n){let e=new QT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $T(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new sx(n),e.set(r,[a])):s>=o.length?(a=new sx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`;function tA(n,e,t){let i=new lo,r=new xe,s=new xe,o=new lt,a=new nu({depthPacking:v0}),l=new iu,c={},u=t.maxTextureSize,f={[ui]:fn,[fn]:ui,[cn]:cn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:KT,fragmentShader:eA}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let m=this.type;this.render=function(C,D,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),b=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ki),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=m!==Ai&&this.type===Ai,X=m===Ai&&this.type!==Ai;for(let N=0,k=C.length;N<k;N++){let j=C[N],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let ie=F.getFrameExtents();if(r.multiply(ie),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,F.mapSize.y=s.y)),F.map===null||B===!0||X===!0){let de=this.type!==Ai?{minFilter:un,magFilter:un}:{};F.map!==null&&F.map.dispose(),F.map=new Dn(r.x,r.y,de),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let ne=F.getViewportCount();for(let de=0;de<ne;de++){let Te=F.getViewport(de);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),O.viewport(o),F.updateMatrices(j,de),i=F.getFrustum(),M(D,L,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Ai&&y(F,L),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,b,E)};function y(C,D){let L=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Dn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,L,d,x,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,L,h,x,null)}function w(C,D,L,T){let b=null,E=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)b=E;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let O=b.uuid,B=D.uuid,X=c[O];X===void 0&&(X={},c[O]=X);let N=X[B];N===void 0&&(N=b.clone(),X[B]=N,D.addEventListener("dispose",A)),b=N}if(b.visible=D.visible,b.wireframe=D.wireframe,T===Ai?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:f[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=L}return b}function M(C,D,L,T,b){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let B=e.update(C),X=C.material;if(Array.isArray(X)){let N=B.groups;for(let k=0,j=N.length;k<j;k++){let F=N[k],ie=X[F.materialIndex];if(ie&&ie.visible){let ne=w(C,ie,T,b);C.onBeforeShadow(n,C,D,L,B,ne,F),n.renderBufferDirect(L,null,B,ne,C,F),C.onAfterShadow(n,C,D,L,B,ne,F)}}}else if(X.visible){let N=w(C,X,T,b);C.onBeforeShadow(n,C,D,L,B,N,null),n.renderBufferDirect(L,null,B,N,C,null),C.onAfterShadow(n,C,D,L,B,N,null)}}let O=C.children;for(let B=0,X=O.length;B<X;B++)M(O[B],D,L,T,b)}function A(C){C.target.removeEventListener("dispose",A);for(let L in c){let T=c[L],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var nA={[mu]:gu,[xu]:_u,[yu]:Mu,[$r]:vu,[gu]:mu,[_u]:xu,[Mu]:yu,[vu]:$r};function iA(n,e){function t(){let q=!1,ve=new lt,Ee=null,Ue=new lt(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!q&&(n.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){q=Me},setClear:function(Me,ge,qe,tt,It){It===!0&&(Me*=tt,ge*=tt,qe*=tt),ve.set(Me,ge,qe,tt),Ue.equals(ve)===!1&&(n.clearColor(Me,ge,qe,tt),Ue.copy(ve))},reset:function(){q=!1,Ee=null,Ue.set(-1,0,0,0)}}}function i(){let q=!1,ve=!1,Ee=null,Ue=null,Me=null;return{setReversed:function(ge){if(ve!==ge){let qe=e.get("EXT_clip_control");ge?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ve=ge;let tt=Me;Me=null,this.setClear(tt)}},getReversed:function(){return ve},setTest:function(ge){ge?se(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!q&&(n.depthMask(ge),Ee=ge)},setFunc:function(ge){if(ve&&(ge=nA[ge]),Ue!==ge){switch(ge){case mu:n.depthFunc(n.NEVER);break;case gu:n.depthFunc(n.ALWAYS);break;case xu:n.depthFunc(n.LESS);break;case $r:n.depthFunc(n.LEQUAL);break;case yu:n.depthFunc(n.EQUAL);break;case vu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case Mu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=ge}},setLocked:function(ge){q=ge},setClear:function(ge){Me!==ge&&(ve&&(ge=1-ge),n.clearDepth(ge),Me=ge)},reset:function(){q=!1,Ee=null,Ue=null,Me=null,ve=!1}}}function r(){let q=!1,ve=null,Ee=null,Ue=null,Me=null,ge=null,qe=null,tt=null,It=null;return{setTest:function(yt){q||(yt?se(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(yt){ve!==yt&&!q&&(n.stencilMask(yt),ve=yt)},setFunc:function(yt,ki,Mi){(Ee!==yt||Ue!==ki||Me!==Mi)&&(n.stencilFunc(yt,ki,Mi),Ee=yt,Ue=ki,Me=Mi)},setOp:function(yt,ki,Mi){(ge!==yt||qe!==ki||tt!==Mi)&&(n.stencilOp(yt,ki,Mi),ge=yt,qe=ki,tt=Mi)},setLocked:function(yt){q=yt},setClear:function(yt){It!==yt&&(n.clearStencil(yt),It=yt)},reset:function(){q=!1,ve=null,Ee=null,Ue=null,Me=null,ge=null,qe=null,tt=null,It=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,w=null,M=null,A=null,C=null,D=new Ie(0,0,0),L=0,T=!1,b=null,E=null,O=null,B=null,X=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=j>=2);let ie=null,ne={},de=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),we=new lt().fromArray(de),Pe=new lt().fromArray(Te);function Ce(q,ve,Ee,Ue){let Me=new Uint8Array(4),ge=n.createTexture();n.bindTexture(q,ge),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Ee;qe++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ve+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ge}let re={};re[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc($r),H(!1),W(Nf),se(n.CULL_FACE),V(Ki);function se(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function _e(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Re(q,ve){return f[q]!==ve?(n.bindFramebuffer(q,ve),f[q]=ve,q===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),q===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function be(q,ve){let Ee=h,Ue=!1;if(q){Ee=d.get(ve),Ee===void 0&&(Ee=[],d.set(ve,Ee));let Me=q.textures;if(Ee.length!==Me.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,qe=Me.length;ge<qe;ge++)Ee[ge]=n.COLOR_ATTACHMENT0+ge;Ee.length=Me.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function Oe(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let ze={[Mr]:n.FUNC_ADD,[Xg]:n.FUNC_SUBTRACT,[Yg]:n.FUNC_REVERSE_SUBTRACT};ze[Zg]=n.MIN,ze[jg]=n.MAX;let S={[Jg]:n.ZERO,[Qg]:n.ONE,[$g]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[r0]:n.SRC_ALPHA_SATURATE,[n0]:n.DST_COLOR,[e0]:n.DST_ALPHA,[Kg]:n.ONE_MINUS_SRC_COLOR,[zc]:n.ONE_MINUS_SRC_ALPHA,[i0]:n.ONE_MINUS_DST_COLOR,[t0]:n.ONE_MINUS_DST_ALPHA,[s0]:n.CONSTANT_COLOR,[o0]:n.ONE_MINUS_CONSTANT_COLOR,[a0]:n.CONSTANT_ALPHA,[l0]:n.ONE_MINUS_CONSTANT_ALPHA};function V(q,ve,Ee,Ue,Me,ge,qe,tt,It,yt){if(q===Ki){x===!0&&(_e(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),q!==qg){if(q!==g||yt!==T){if((m!==Mr||M!==Mr)&&(n.blendEquation(n.FUNC_ADD),m=Mr,M=Mr),yt)switch(q){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Of:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,w=null,A=null,C=null,D.set(0,0,0),L=0,g=q,T=yt}return}Me=Me||ve,ge=ge||Ee,qe=qe||Ue,(ve!==m||Me!==M)&&(n.blendEquationSeparate(ze[ve],ze[Me]),m=ve,M=Me),(Ee!==y||Ue!==w||ge!==A||qe!==C)&&(n.blendFuncSeparate(S[Ee],S[Ue],S[ge],S[qe]),y=Ee,w=Ue,A=ge,C=qe),(tt.equals(D)===!1||It!==L)&&(n.blendColor(tt.r,tt.g,tt.b,It),D.copy(tt),L=It),g=q,T=!1}function z(q,ve){q.side===cn?_e(n.CULL_FACE):se(n.CULL_FACE);let Ee=q.side===fn;ve&&(Ee=!Ee),H(Ee),q.blending===Qr&&q.transparent===!1?V(Ki):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Ue=q.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Y(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(q){b!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),b=q)}function W(q){q!==Gg?(se(n.CULL_FACE),q!==E&&(q===Nf?n.cullFace(n.BACK):q===Hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),E=q}function R(q){q!==O&&(k&&n.lineWidth(q),O=q)}function Y(q,ve,Ee){q?(se(n.POLYGON_OFFSET_FILL),(B!==ve||X!==Ee)&&(n.polygonOffset(ve,Ee),B=ve,X=Ee)):_e(n.POLYGON_OFFSET_FILL)}function Z(q){q?se(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function le(q){q===void 0&&(q=n.TEXTURE0+N-1),ie!==q&&(n.activeTexture(q),ie=q)}function fe(q,ve,Ee){Ee===void 0&&(ie===null?Ee=n.TEXTURE0+N-1:Ee=ie);let Ue=ne[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},ne[Ee]=Ue),(Ue.type!==q||Ue.texture!==ve)&&(ie!==Ee&&(n.activeTexture(Ee),ie=Ee),n.bindTexture(q,ve||re[q]),Ue.type=q,Ue.texture=ve)}function P(){let q=ne[ie];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(q){we.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),we.copy(q))}function Be(q){Pe.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),Pe.copy(q))}function ye(q,ve){let Ee=c.get(ve);Ee===void 0&&(Ee=new WeakMap,c.set(ve,Ee));let Ue=Ee.get(q);Ue===void 0&&(Ue=n.getUniformBlockIndex(ve,q.name),Ee.set(q,Ue))}function Se(q,ve){let Ue=c.get(ve).get(q);l.get(ve)!==Ue&&(n.uniformBlockBinding(ve,Ue,q.__bindingPointIndex),l.set(ve,Ue))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,ne={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,w=null,M=null,A=null,C=null,D=new Ie(0,0,0),L=0,T=!1,b=null,E=null,O=null,B=null,X=null,we.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:_e,bindFramebuffer:Re,drawBuffers:be,useProgram:Oe,setBlending:V,setMaterial:z,setFlipSided:H,setCullFace:W,setLineWidth:R,setPolygonOffset:Y,setScissorTest:Z,activeTexture:le,bindTexture:fe,unbindTexture:P,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:me,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:Se,texStorage2D:ce,texStorage3D:he,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:ue,scissor:pe,viewport:Be,reset:Ge}}function rA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,v){return h?new OffscreenCanvas(P,v):eo("canvas")}function x(P,v,U){let Q=1,ee=fe(P);if((ee.width>U||ee.height>U)&&(Q=U/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(Q*ee.width),ue=Math.floor(Q*ee.height);f===void 0&&(f=p(J,ue));let ce=v?p(J,ue):f;return ce.width=J,ce.height=ue,ce.getContext("2d").drawImage(P,0,0,J,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+ue+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,v,U,Q,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=v;if(v===n.RED&&(U===n.FLOAT&&(J=n.R32F),U===n.HALF_FLOAT&&(J=n.R16F),U===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.R8UI),U===n.UNSIGNED_SHORT&&(J=n.R16UI),U===n.UNSIGNED_INT&&(J=n.R32UI),U===n.BYTE&&(J=n.R8I),U===n.SHORT&&(J=n.R16I),U===n.INT&&(J=n.R32I)),v===n.RG&&(U===n.FLOAT&&(J=n.RG32F),U===n.HALF_FLOAT&&(J=n.RG16F),U===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RG8UI),U===n.UNSIGNED_SHORT&&(J=n.RG16UI),U===n.UNSIGNED_INT&&(J=n.RG32UI),U===n.BYTE&&(J=n.RG8I),U===n.SHORT&&(J=n.RG16I),U===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RGB8UI),U===n.UNSIGNED_SHORT&&(J=n.RGB16UI),U===n.UNSIGNED_INT&&(J=n.RGB32UI),U===n.BYTE&&(J=n.RGB8I),U===n.SHORT&&(J=n.RGB16I),U===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),U===n.UNSIGNED_INT&&(J=n.RGBA32UI),U===n.BYTE&&(J=n.RGBA8I),U===n.SHORT&&(J=n.RGBA16I),U===n.INT&&(J=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),v===n.RGBA){let ue=ee?wa:ht.getTransfer(Q);U===n.FLOAT&&(J=n.RGBA32F),U===n.HALF_FLOAT&&(J=n.RGBA16F),U===n.UNSIGNED_BYTE&&(J=ue===_t?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(P,v){let U;return P?v===null||v===Ar||v===vo?U=n.DEPTH24_STENCIL8:v===gi?U=n.DEPTH32F_STENCIL8:v===yo&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ar||v===vo?U=n.DEPTH_COMPONENT24:v===gi?U=n.DEPTH_COMPONENT32F:v===yo&&(U=n.DEPTH_COMPONENT16),U}function A(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function C(P){let v=P.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&u.delete(v)}function D(P){let v=P.target;v.removeEventListener("dispose",D),b(v)}function L(P){let v=i.get(P);if(v.__webglInit===void 0)return;let U=P.source,Q=d.get(U);if(Q){let ee=Q[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(P),Object.keys(Q).length===0&&d.delete(U)}i.remove(P)}function T(P){let v=i.get(P);n.deleteTexture(v.__webglTexture);let U=P.source,Q=d.get(U);delete Q[v.__cacheKey],o.memory.textures--}function b(P){let v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ee=0;ee<v.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=P.textures;for(let Q=0,ee=U.length;Q<ee;Q++){let J=i.get(U[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(U[Q])}i.remove(P)}let E=0;function O(){E=0}function B(){let P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function X(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function N(P,v){let U=i.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&U.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,P,v);return}}else P.isExternalTexture&&(U.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function k(P,v){let U=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){re(U,P,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function j(P,v){let U=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){re(U,P,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function F(P,v){let U=i.get(P);if(P.version>0&&U.__version!==P.version){se(U,P,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let ie={[wn]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[Vc]:n.MIRRORED_REPEAT},ne={[un]:n.NEAREST,[x0]:n.NEAREST_MIPMAP_NEAREST,[rl]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Tu]:n.LINEAR_MIPMAP_NEAREST,[Tn]:n.LINEAR_MIPMAP_LINEAR},de={[M0]:n.NEVER,[E0]:n.ALWAYS,[b0]:n.LESS,[Yf]:n.LEQUAL,[S0]:n.EQUAL,[A0]:n.GEQUAL,[w0]:n.GREATER,[T0]:n.NOTEQUAL};function Te(P,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Tu||v.magFilter===rl||v.magFilter===Tn||v.minFilter===an||v.minFilter===Tu||v.minFilter===rl||v.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ie[v.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==rl&&v.minFilter!==Tn||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function we(P,v){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",C));let Q=v.source,ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));let J=X(v);if(J!==P.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[J].usedTimes++;let ue=ee[P.__cacheKey];ue!==void 0&&(ee[P.__cacheKey].usedTimes--,ue.usedTimes===0&&T(v)),P.__cacheKey=J,P.__webglTexture=ee[J].texture}return U}function Pe(P,v,U){return Math.floor(Math.floor(P/U)/v)}function Ce(P,v,U,Q){let J=P.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,Q,v.data);else{J.sort((te,pe)=>te.start-pe.start);let ue=0;for(let te=1;te<J.length;te++){let pe=J[ue],Be=J[te],ye=pe.start+pe.count,Se=Pe(Be.start,v.width,4),Ge=Pe(pe.start,v.width,4);Be.start<=ye+1&&Se===Ge&&Pe(Be.start+Be.count-1,v.width,4)===Se?pe.count=Math.max(pe.count,Be.start+Be.count-pe.start):(++ue,J[ue]=Be)}J.length=ue+1;let ce=n.getParameter(n.UNPACK_ROW_LENGTH),he=n.getParameter(n.UNPACK_SKIP_PIXELS),me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let te=0,pe=J.length;te<pe;te++){let Be=J[te],ye=Math.floor(Be.start/4),Se=Math.ceil(Be.count/4),Ge=ye%v.width,q=Math.floor(ye/v.width),ve=Se,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,Ge,q,ve,Ee,U,Q,v.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,he),n.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function re(P,v,U){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);let ee=we(P,v),J=v.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+U);let ue=i.get(J);if(J.version!==ue.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);let ce=ht.getPrimaries(ht.workingColorSpace),he=v.colorSpace===tr?null:ht.getPrimaries(v.colorSpace),me=v.colorSpace===tr||ce===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let te=x(v.image,!1,r.maxTextureSize);te=le(v,te);let pe=s.convert(v.format,v.colorSpace),Be=s.convert(v.type),ye=w(v.internalFormat,pe,Be,v.colorSpace,v.isVideoTexture);Te(Q,v);let Se,Ge=v.mipmaps,q=v.isVideoTexture!==!0,ve=ue.__version===void 0||ee===!0,Ee=J.dataReady,Ue=A(v,te);if(v.isDepthTexture)ye=M(v.format===_o,v.type),ve&&(q?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Be,null));else if(v.isDataTexture)if(Ge.length>0){q&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,ye,Ge[0].width,Ge[0].height);for(let Me=0,ge=Ge.length;Me<ge;Me++)Se=Ge[Me],q?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Se.width,Se.height,pe,Be,Se.data):t.texImage2D(n.TEXTURE_2D,Me,ye,Se.width,Se.height,0,pe,Be,Se.data);v.generateMipmaps=!1}else q?(ve&&t.texStorage2D(n.TEXTURE_2D,Ue,ye,te.width,te.height),Ee&&Ce(v,te,pe,Be)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Be,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){q&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,ye,Ge[0].width,Ge[0].height,te.depth);for(let Me=0,ge=Ge.length;Me<ge;Me++)if(Se=Ge[Me],v.format!==Un)if(pe!==null)if(q){if(Ee)if(v.layerUpdates.size>0){let qe=tp(Se.width,Se.height,v.format,v.type);for(let tt of v.layerUpdates){let It=Se.data.subarray(tt*qe/Se.data.BYTES_PER_ELEMENT,(tt+1)*qe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,tt,Se.width,Se.height,1,pe,It)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Se.width,Se.height,te.depth,pe,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,ye,Se.width,Se.height,te.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Se.width,Se.height,te.depth,pe,Be,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,ye,Se.width,Se.height,te.depth,0,pe,Be,Se.data)}else{q&&ve&&t.texStorage2D(n.TEXTURE_2D,Ue,ye,Ge[0].width,Ge[0].height);for(let Me=0,ge=Ge.length;Me<ge;Me++)Se=Ge[Me],v.format!==Un?pe!==null?q?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Se.width,Se.height,pe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Se.width,Se.height,pe,Be,Se.data):t.texImage2D(n.TEXTURE_2D,Me,ye,Se.width,Se.height,0,pe,Be,Se.data)}else if(v.isDataArrayTexture)if(q){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,ye,te.width,te.height,te.depth),Ee)if(v.layerUpdates.size>0){let Me=tp(te.width,te.height,v.format,v.type);for(let ge of v.layerUpdates){let qe=te.data.subarray(ge*Me/te.data.BYTES_PER_ELEMENT,(ge+1)*Me/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,pe,Be,qe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Be,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,pe,Be,te.data);else if(v.isData3DTexture)q?(ve&&t.texStorage3D(n.TEXTURE_3D,Ue,ye,te.width,te.height,te.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Be,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,pe,Be,te.data);else if(v.isFramebufferTexture){if(ve)if(q)t.texStorage2D(n.TEXTURE_2D,Ue,ye,te.width,te.height);else{let Me=te.width,ge=te.height;for(let qe=0;qe<Ue;qe++)t.texImage2D(n.TEXTURE_2D,qe,ye,Me,ge,0,pe,Be,null),Me>>=1,ge>>=1}}else if(Ge.length>0){if(q&&ve){let Me=fe(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ue,ye,Me.width,Me.height)}for(let Me=0,ge=Ge.length;Me<ge;Me++)Se=Ge[Me],q?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,pe,Be,Se):t.texImage2D(n.TEXTURE_2D,Me,ye,pe,Be,Se);v.generateMipmaps=!1}else if(q){if(ve){let Me=fe(te);t.texStorage2D(n.TEXTURE_2D,Ue,ye,Me.width,Me.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Be,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,pe,Be,te);g(v)&&m(Q),ue.__version=J.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function se(P,v,U){if(v.image.length!==6)return;let Q=we(P,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);let J=i.get(ee);if(ee.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);let ue=ht.getPrimaries(ht.workingColorSpace),ce=v.colorSpace===tr?null:ht.getPrimaries(v.colorSpace),he=v.colorSpace===tr||ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let me=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ge=0;ge<6;ge++)!me&&!te?pe[ge]=x(v.image[ge],!0,r.maxCubemapSize):pe[ge]=te?v.image[ge].image:v.image[ge],pe[ge]=le(v,pe[ge]);let Be=pe[0],ye=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),Ge=w(v.internalFormat,ye,Se,v.colorSpace),q=v.isVideoTexture!==!0,ve=J.__version===void 0||Q===!0,Ee=ee.dataReady,Ue=A(v,Be);Te(n.TEXTURE_CUBE_MAP,v);let Me;if(me){q&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Ge,Be.width,Be.height);for(let ge=0;ge<6;ge++){Me=pe[ge].mipmaps;for(let qe=0;qe<Me.length;qe++){let tt=Me[qe];v.format!==Un?ye!==null?q?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,tt.width,tt.height,ye,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,Ge,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,0,0,tt.width,tt.height,ye,Se,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe,Ge,tt.width,tt.height,0,ye,Se,tt.data)}}}else{if(Me=v.mipmaps,q&&ve){Me.length>0&&Ue++;let ge=fe(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Ge,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(te){q?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pe[ge].width,pe[ge].height,ye,Se,pe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,pe[ge].width,pe[ge].height,0,ye,Se,pe[ge].data);for(let qe=0;qe<Me.length;qe++){let It=Me[qe].image[ge].image;q?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,It.width,It.height,ye,Se,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,Ge,It.width,It.height,0,ye,Se,It.data)}}else{q?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ye,Se,pe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,ye,Se,pe[ge]);for(let qe=0;qe<Me.length;qe++){let tt=Me[qe];q?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,0,0,ye,Se,tt.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,qe+1,Ge,ye,Se,tt.image[ge])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),J.__version=ee.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function _e(P,v,U,Q,ee,J){let ue=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),he=w(U.internalFormat,ue,ce,U.colorSpace),me=i.get(v),te=i.get(U);if(te.__renderTarget=v,!me.__hasExternalTextures){let pe=Math.max(1,v.width>>J),Be=Math.max(1,v.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,he,pe,Be,v.depth,0,ue,ce,null):t.texImage2D(ee,J,he,pe,Be,0,ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,te.__webglTexture,0,R(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,te.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),v.depthBuffer){let Q=v.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,J=M(v.stencilBuffer,ee),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=R(v);Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,J,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,P)}else{let Q=v.textures;for(let ee=0;ee<Q.length;ee++){let J=Q[ee],ue=s.convert(J.format,J.colorSpace),ce=s.convert(J.type),he=w(J.internalFormat,ue,ce,J.colorSpace),me=R(v);U&&Y(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,he,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(P,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(v.depthTexture);Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let ee=Q.__webglTexture,J=R(v);if(v.depthTexture.format===$s)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===_o)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Oe(P){let v=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=Q}if(P.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let Q=P.texture.mipmaps;Q&&Q.length>0?be(v.__webglFramebuffer[0],P):be(v.__webglFramebuffer,P)}else if(U){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=n.createRenderbuffer(),Re(v.__webglDepthbuffer[Q],P,!1);else{let ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else{let Q=P.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Re(v.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(P,v,U){let Q=i.get(P);v!==void 0&&_e(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Oe(P)}function S(P){let v=P.texture,U=i.get(P),Q=i.get(v);P.addEventListener("dispose",D);let ee=P.textures,J=P.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,o.memory.textures++),J){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let he=0;he<v.mipmaps.length;he++)U.__webglFramebuffer[ce][he]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ce=0,he=ee.length;ce<he;ce++){let me=i.get(ee[ce]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Y(P)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){let he=ee[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);let me=s.convert(he.format,he.colorSpace),te=s.convert(he.type),pe=w(he.internalFormat,me,te,he.colorSpace,P.isXRRenderTarget===!0),Be=R(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Te(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(U.__webglFramebuffer[ce][he],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else _e(U.__webglFramebuffer[ce],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ce=0,he=ee.length;ce<he;ce++){let me=ee[ce],te=i.get(me),pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),Te(pe,me),_e(U.__webglFramebuffer,P,me,n.COLOR_ATTACHMENT0+ce,pe,0),g(me)&&m(pe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Te(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)_e(U.__webglFramebuffer[he],P,v,n.COLOR_ATTACHMENT0,ce,he);else _e(U.__webglFramebuffer,P,v,n.COLOR_ATTACHMENT0,ce,0);g(v)&&m(ce),t.unbindTexture()}P.depthBuffer&&Oe(P)}function V(P){let v=P.textures;for(let U=0,Q=v.length;U<Q;U++){let ee=v[U];if(g(ee)){let J=y(P),ue=i.get(ee).__webglTexture;t.bindTexture(J,ue),m(J),t.unbindTexture()}}}let z=[],H=[];function W(P){if(P.samples>0){if(Y(P)===!1){let v=P.textures,U=P.width,Q=P.height,ee=n.COLOR_BUFFER_BIT,J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(P),ce=v.length>1;if(ce)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let he=P.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<v.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let te=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,U,Q,0,0,U,Q,ee,n.NEAREST),l===!0&&(z.length=0,H.length=0,z.push(n.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(z.push(J),H.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let te=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let v=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function R(P){return Math.min(r.maxSamples,P.samples)}function Y(P){let v=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(P){let v=o.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function le(P,v){let U=P.colorSpace,Q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==Kr&&U!==tr&&(ht.getTransfer(U)===_t?(Q!==Un||ee!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=ze,this.setupRenderTarget=S,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Y}function sA(n,e){function t(i,r=tr){let s,o=ht.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vf)return n.BYTE;if(i===kf)return n.SHORT;if(i===yo)return n.UNSIGNED_SHORT;if(i===Au)return n.INT;if(i===Ar)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Ei)return n.HALF_FLOAT;if(i===Wf)return n.ALPHA;if(i===qf)return n.RGB;if(i===Un)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===_o)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===Pu)return n.RED_INTEGER;if(i===Xf)return n.RG;if(i===Iu)return n.RG_INTEGER;if(i===Du)return n.RGBA_INTEGER;if(i===sl||i===ol||i===al||i===ll)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Uu||i===Fu||i===Nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===Ou||i===zu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bu||i===Ou)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vu||i===ku||i===Gu||i===Hu||i===Wu||i===qu||i===Xu||i===Yu||i===Zu||i===ju||i===Ju||i===Qu||i===$u||i===Ku)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ku)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ju)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ju)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eh||i===th||i===nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===eh)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===rh||i===sh||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ih)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
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

}`,pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:oA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mp=class extends Zi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new pp,m={},y=t.getContextAttributes(),w=null,M=null,A=[],C=[],D=new xe,L=null,T=new Zt;T.viewport=new lt;let b=new Zt;b.viewport=new lt;let E=[T,b],O=new pu,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let se=A[re];return se===void 0&&(se=new ro,A[re]=se),se.getTargetRaySpace()},this.getControllerGrip=function(re){let se=A[re];return se===void 0&&(se=new ro,A[re]=se),se.getGripSpace()},this.getHand=function(re){let se=A[re];return se===void 0&&(se=new ro,A[re]=se),se.getHandSpace()};function N(re){let se=C.indexOf(re.inputSource);if(se===-1)return;let _e=A[se];_e!==void 0&&(_e.update(re.inputSource,re.frame,c||o),_e.dispatchEvent({type:re.type,data:re.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let re=0;re<A.length;re++){let se=C[re];se!==null&&(C[re]=null,A[re].disconnect(se))}B=null,X=null,g.reset();for(let re in m)delete m[re];e.setRenderTarget(w),h=null,d=null,f=null,r=null,M=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Re=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?_o:$s,Re=y.stencil?vo:Ar);let Oe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Dn(d.textureWidth,d.textureHeight,{format:Un,type:Wn,depthTexture:new Ba(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Dn(h.framebufferWidth,h.framebufferHeight,{format:Un,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(re){for(let se=0;se<re.removed.length;se++){let _e=re.removed[se],Re=C.indexOf(_e);Re>=0&&(C[Re]=null,A[Re].disconnect(_e))}for(let se=0;se<re.added.length;se++){let _e=re.added[se],Re=C.indexOf(_e);if(Re===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=C.length){C.push(_e),Re=Oe;break}else if(C[Oe]===null){C[Oe]=_e,Re=Oe;break}if(Re===-1)break}let be=A[Re];be&&be.connect(_e)}}let F=new _,ie=new _;function ne(re,se,_e){F.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);let Re=F.distanceTo(ie),be=se.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,ze=be[14]/(be[10]-1),S=be[14]/(be[10]+1),V=(be[9]+1)/be[5],z=(be[9]-1)/be[5],H=(be[8]-1)/be[0],W=(Oe[8]+1)/Oe[0],R=ze*H,Y=ze*W,Z=Re/(-H+W),le=Z*-H;if(se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(le),re.translateZ(Z),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),be[10]===-1)re.projectionMatrix.copy(se.projectionMatrix),re.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let fe=ze+Z,P=S+Z,v=R-le,U=Y+(Re-le),Q=V*S/P*fe,ee=z*S/P*fe;re.projectionMatrix.makePerspective(v,U,Q,ee,fe,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,se){se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let se=re.near,_e=re.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),O.near=b.near=T.near=se,O.far=b.far=T.far=_e,(B!==O.near||X!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,X=O.far),O.layers.mask=re.layers.mask|6,T.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;let Re=re.parent,be=O.cameras;de(O,Re);for(let Oe=0;Oe<be.length;Oe++)de(be[Oe],Re);be.length===2?ne(O,T,b):O.projectionMatrix.copy(T.projectionMatrix),Te(re,O,Re)};function Te(re,se,_e){_e===null?re.matrix.copy(se.matrixWorld):(re.matrix.copy(_e.matrixWorld),re.matrix.invert(),re.matrix.multiply(se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(se.projectionMatrix),re.projectionMatrixInverse.copy(se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ks*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(re){return m[re]};let we=null;function Pe(re,se){if(u=se.getViewerPose(c||o),p=se,u!==null){let _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Re=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let S=0;S<_e.length;S++){let V=_e[S],z=null;if(h!==null)z=h.getViewport(V);else{let W=f.getViewSubImage(d,V);z=W.viewport,S===0&&(e.setRenderTargetTextures(M,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(M))}let H=E[S];H===void 0&&(H=new Zt,H.layers.enable(S),H.viewport=new lt,E[S]=H),H.matrix.fromArray(V.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(V.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(z.x,z.y,z.width,z.height),S===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(H)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let S=f.getDepthInformation(_e[0]);S&&S.isValid&&S.texture&&g.init(S,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let S=0;S<_e.length;S++){let V=_e[S].camera;if(V){let z=m[V];z||(z=new Oa,m[V]=z);let H=f.getCameraImage(V);z.sourceTexture=H}}}}for(let _e=0;_e<A.length;_e++){let Re=C[_e],be=A[_e];Re!==null&&be!==void 0&&be.update(Re,se,c||o)}we&&we(re,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let Ce=new ox;Ce.setAnimationLoop(Pe),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}},us=new Jt,lA=new ot;function cA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Qf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,w,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),w=y.envMap,M=y.envMapRotation;w&&(g.envMap.value=w,us.copy(M),us.x*=-1,us.y*=-1,us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(us)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let M=w.program;i.uniformBlockBinding(y,M)}function c(y,w){let M=r[y.id];M===void 0&&(p(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",g));let A=w.program;i.updateUBOMapping(y,A);let C=e.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){let w=f();y.__bindingPointIndex=w;let M=n.createBuffer(),A=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=r[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,D=M.length;C<D;C++){let L=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,b=L.length;T<b;T++){let E=L[T];if(h(E,C,T,A)===!0){let O=E.__offset,B=Array.isArray(E.value)?E.value:[E.value],X=0;for(let N=0;N<B.length;N++){let k=B[N],j=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,O+X,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,w,M,A){let C=y.value,D=w+"_"+M;if(A[D]===void 0)return typeof C=="number"||typeof C=="boolean"?A[D]=C:A[D]=C.clone(),!0;{let L=A[D];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return A[D]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function p(y){let w=y.uniforms,M=0,A=16;for(let D=0,L=w.length;D<L;D++){let T=Array.isArray(w[D])?w[D]:[w[D]];for(let b=0,E=T.length;b<E;b++){let O=T[b],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,N=B.length;X<N;X++){let k=B[X],j=x(k),F=M%A,ie=F%j.boundary,ne=F+ie;M+=ie,ne!==0&&A-ne<j.storage&&(M+=A-ne),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=j.storage}}}let C=M%A;return C>0&&(M+=A-C),y.__size=M,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function g(y){let w=y.target;w.removeEventListener("dispose",g);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function m(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var dh=class{constructor(e={}){let{canvas:t=C0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=dt;let C=0,D=0,L=null,T=-1,b=null,E=new lt,O=new lt,B=null,X=new Ie(0),N=0,k=t.width,j=t.height,F=1,ie=null,ne=null,de=new lt(0,0,k,j),Te=new lt(0,0,k,j),we=!1,Pe=new lo,Ce=!1,re=!1,se=new ot,_e=new _,Re=new lt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ze(){return L===null?F:1}let S=i;function V(I,$){return t.getContext(I,$)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Me,!1),S===null){let $="webgl2";if(S=V($,I),S===null)throw V($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let z,H,W,R,Y,Z,le,fe,P,v,U,Q,ee,J,ue,ce,he,me,te,pe,Be,ye,Se,Ge;function q(){z=new Cw(S),z.init(),ye=new sA(S,z),H=new Mw(S,z,e,ye),W=new iA(S,z),H.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),R=new Iw(S),Y=new WT,Z=new rA(S,z,W,Y,H,ye,R),le=new Sw(M),fe=new Ew(M),P=new Bb(S),Se=new vw(S,P),v=new Rw(S,P,R,Se),U=new Lw(S,v,P,R),te=new Dw(S,H,Z),ce=new bw(Y),Q=new HT(M,le,fe,z,H,Se,ce),ee=new cA(M,Y),J=new XT,ue=new $T(z),me=new yw(M,le,fe,W,U,h,l),he=new tA(M,U,H),Ge=new uA(S,R,H,W),pe=new _w(S,z,R),Be=new Pw(S,z,R),R.programs=Q.programs,M.capabilities=H,M.extensions=z,M.properties=Y,M.renderLists=J,M.shadowMap=he,M.state=W,M.info=R}q();let ve=new mp(M,S);this.xr=ve,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let I=z.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=z.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(I){I!==void 0&&(F=I,this.setSize(k,j,!1))},this.getSize=function(I){return I.set(k,j)},this.setSize=function(I,$,oe=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,j=$,t.width=Math.floor(I*F),t.height=Math.floor($*F),oe===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(k*F,j*F).floor()},this.setDrawingBufferSize=function(I,$,oe){k=I,j=$,F=oe,t.width=Math.floor(I*oe),t.height=Math.floor($*oe),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(de)},this.setViewport=function(I,$,oe,ae){I.isVector4?de.set(I.x,I.y,I.z,I.w):de.set(I,$,oe,ae),W.viewport(E.copy(de).multiplyScalar(F).round())},this.getScissor=function(I){return I.copy(Te)},this.setScissor=function(I,$,oe,ae){I.isVector4?Te.set(I.x,I.y,I.z,I.w):Te.set(I,$,oe,ae),W.scissor(O.copy(Te).multiplyScalar(F).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){W.setScissorTest(we=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ne=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,oe=!0){let ae=0;if(I){let K=!1;if(L!==null){let Ae=L.texture.format;K=Ae===Du||Ae===Iu||Ae===Pu}if(K){let Ae=L.texture.type,Fe=Ae===Wn||Ae===Ar||Ae===yo||Ae===vo||Ae===Eu||Ae===Cu,He=me.getClearColor(),Ve=me.getClearAlpha(),Je=He.r,Qe=He.g,Xe=He.b;Fe?(p[0]=Je,p[1]=Qe,p[2]=Xe,p[3]=Ve,S.clearBufferuiv(S.COLOR,0,p)):(x[0]=Je,x[1]=Qe,x[2]=Xe,x[3]=Ve,S.clearBufferiv(S.COLOR,0,x))}else ae|=S.COLOR_BUFFER_BIT}$&&(ae|=S.DEPTH_BUFFER_BIT),oe&&(ae|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),J.dispose(),ue.dispose(),Y.dispose(),le.dispose(),fe.dispose(),U.dispose(),Se.dispose(),Ge.dispose(),Q.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Mi),ve.removeEventListener("sessionend",Hm),Wr.stop()};function Ee(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let I=R.autoReset,$=he.enabled,oe=he.autoUpdate,ae=he.needsUpdate,K=he.type;q(),R.autoReset=I,he.enabled=$,he.autoUpdate=oe,he.needsUpdate=ae,he.type=K}function Me(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ge(I){let $=I.target;$.removeEventListener("dispose",ge),qe($)}function qe(I){tt(I),Y.remove(I)}function tt(I){let $=Y.get(I).programs;$!==void 0&&($.forEach(function(oe){Q.releaseProgram(oe)}),I.isShaderMaterial&&Q.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,oe,ae,K,Ae){$===null&&($=be);let Fe=K.isMesh&&K.matrixWorld.determinant()<0,He=rM(I,$,oe,ae,K);W.setMaterial(ae,Fe);let Ve=oe.index,Je=1;if(ae.wireframe===!0){if(Ve=v.getWireframeAttribute(oe),Ve===void 0)return;Je=2}let Qe=oe.drawRange,Xe=oe.attributes.position,at=Qe.start*Je,Tt=(Qe.start+Qe.count)*Je;Ae!==null&&(at=Math.max(at,Ae.start*Je),Tt=Math.min(Tt,(Ae.start+Ae.count)*Je)),Ve!==null?(at=Math.max(at,0),Tt=Math.min(Tt,Ve.count)):Xe!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Xe.count));let Yt=Tt-at;if(Yt<0||Yt===1/0)return;Se.setup(K,ae,He,oe,Ve);let Dt,Ct=pe;if(Ve!==null&&(Dt=P.get(Ve),Ct=Be,Ct.setIndex(Dt)),K.isMesh)ae.wireframe===!0?(W.setLineWidth(ae.wireframeLinewidth*ze()),Ct.setMode(S.LINES)):Ct.setMode(S.TRIANGLES);else if(K.isLine){let Ye=ae.linewidth;Ye===void 0&&(Ye=1),W.setLineWidth(Ye*ze()),K.isLineSegments?Ct.setMode(S.LINES):K.isLineLoop?Ct.setMode(S.LINE_LOOP):Ct.setMode(S.LINE_STRIP)}else K.isPoints?Ct.setMode(S.POINTS):K.isSprite&&Ct.setMode(S.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ye=K._multiDrawStarts,Bt=K._multiDrawCounts,pt=K._multiDrawCount,On=Ve?P.get(Ve).bytesPerElement:1,Ps=Y.get(ae).currentProgram.getUniforms();for(let zn=0;zn<pt;zn++)Ps.setValue(S,"_gl_DrawID",zn),Ct.render(Ye[zn]/On,Bt[zn])}else if(K.isInstancedMesh)Ct.renderInstances(at,Yt,K.count);else if(oe.isInstancedBufferGeometry){let Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Bt=Math.min(oe.instanceCount,Ye);Ct.renderInstances(at,Yt,Bt)}else Ct.render(at,Yt)};function It(I,$,oe){I.transparent===!0&&I.side===cn&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,sc(I,$,oe),I.side=ui,I.needsUpdate=!0,sc(I,$,oe),I.side=cn):sc(I,$,oe)}this.compile=function(I,$,oe=null){oe===null&&(oe=I),m=ue.get(oe),m.init($),w.push(m),oe.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),I!==oe&&I.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();let ae=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){let He=Ae[Fe];It(He,oe,K),ae.add(He)}else It(Ae,oe,K),ae.add(Ae)}),m=w.pop(),ae},this.compileAsync=function(I,$,oe=null){let ae=this.compile(I,$,oe);return new Promise(K=>{function Ae(){if(ae.forEach(function(Fe){Y.get(Fe).currentProgram.isReady()&&ae.delete(Fe)}),ae.size===0){K(I);return}setTimeout(Ae,10)}z.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let yt=null;function ki(I){yt&&yt(I)}function Mi(){Wr.stop()}function Hm(){Wr.start()}let Wr=new ox;Wr.setAnimationLoop(ki),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(I){yt=I,ve.setAnimationLoop(I),I===null?Wr.stop():Wr.start()},ve.addEventListener("sessionstart",Mi),ve.addEventListener("sessionend",Hm),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera($),$=ve.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,$,L),m=ue.get(I,w.length),m.init($),w.push(m),se.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Pe.setFromProjectionMatrix(se,ci,$.reversedDepth),re=this.localClippingEnabled,Ce=ce.init(this.clippingPlanes,re),g=J.get(I,y.length),g.init(),y.push(g),ve.enabled===!0&&ve.isPresenting===!0){let Ae=M.xr.getDepthSensingMesh();Ae!==null&&Wd(Ae,$,-1/0,M.sortObjects)}Wd(I,$,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ie,ne),Oe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Oe&&me.addToRenderList(g,I),this.info.render.frame++,Ce===!0&&ce.beginShadows();let oe=m.state.shadowsArray;he.render(oe,I,$),Ce===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=g.opaque,K=g.transmissive;if(m.setupLights(),$.isArrayCamera){let Ae=$.cameras;if(K.length>0)for(let Fe=0,He=Ae.length;Fe<He;Fe++){let Ve=Ae[Fe];qm(ae,K,I,Ve)}Oe&&me.render(I);for(let Fe=0,He=Ae.length;Fe<He;Fe++){let Ve=Ae[Fe];Wm(g,I,Ve,Ve.viewport)}}else K.length>0&&qm(ae,K,I,$),Oe&&me.render(I),Wm(g,I,$);L!==null&&D===0&&(Z.updateMultisampleRenderTarget(L),Z.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(M,I,$),Se.resetDefaultState(),T=-1,b=null,w.pop(),w.length>0?(m=w[w.length-1],Ce===!0&&ce.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Wd(I,$,oe,ae){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Pe.intersectsSprite(I)){ae&&Re.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);let Fe=U.update(I),He=I.material;He.visible&&g.push(I,Fe,He,oe,Re.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Pe.intersectsObject(I))){let Fe=U.update(I),He=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Re.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(I.matrixWorld).applyMatrix4(se)),Array.isArray(He)){let Ve=Fe.groups;for(let Je=0,Qe=Ve.length;Je<Qe;Je++){let Xe=Ve[Je],at=He[Xe.materialIndex];at&&at.visible&&g.push(I,Fe,at,oe,Re.z,Xe)}}else He.visible&&g.push(I,Fe,He,oe,Re.z,null)}}let Ae=I.children;for(let Fe=0,He=Ae.length;Fe<He;Fe++)Wd(Ae[Fe],$,oe,ae)}function Wm(I,$,oe,ae){let K=I.opaque,Ae=I.transmissive,Fe=I.transparent;m.setupLightsView(oe),Ce===!0&&ce.setGlobalState(M.clippingPlanes,oe),ae&&W.viewport(E.copy(ae)),K.length>0&&rc(K,$,oe),Ae.length>0&&rc(Ae,$,oe),Fe.length>0&&rc(Fe,$,oe),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function qm(I,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ae.id]===void 0&&(m.state.transmissionRenderTarget[ae.id]=new Dn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Ei:Wn,minFilter:Tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Ae=m.state.transmissionRenderTarget[ae.id],Fe=ae.viewport||E;Ae.setSize(Fe.z*M.transmissionResolutionScale,Fe.w*M.transmissionResolutionScale);let He=M.getRenderTarget(),Ve=M.getActiveCubeFace(),Je=M.getActiveMipmapLevel();M.setRenderTarget(Ae),M.getClearColor(X),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&me.render(oe);let Qe=M.toneMapping;M.toneMapping=er;let Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),m.setupLightsView(ae),Ce===!0&&ce.setGlobalState(M.clippingPlanes,ae),rc(I,oe,ae),Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae),z.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Tt=0,Yt=$.length;Tt<Yt;Tt++){let Dt=$[Tt],Ct=Dt.object,Ye=Dt.geometry,Bt=Dt.material,pt=Dt.group;if(Bt.side===cn&&Ct.layers.test(ae.layers)){let On=Bt.side;Bt.side=fn,Bt.needsUpdate=!0,Xm(Ct,oe,ae,Ye,Bt,pt),Bt.side=On,Bt.needsUpdate=!0,at=!0}}at===!0&&(Z.updateMultisampleRenderTarget(Ae),Z.updateRenderTargetMipmap(Ae))}M.setRenderTarget(He,Ve,Je),M.setClearColor(X,N),Xe!==void 0&&(ae.viewport=Xe),M.toneMapping=Qe}function rc(I,$,oe){let ae=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ae=I.length;K<Ae;K++){let Fe=I[K],He=Fe.object,Ve=Fe.geometry,Je=Fe.group,Qe=Fe.material;Qe.allowOverride===!0&&ae!==null&&(Qe=ae),He.layers.test(oe.layers)&&Xm(He,$,oe,Ve,Qe,Je)}}function Xm(I,$,oe,ae,K,Ae){I.onBeforeRender(M,$,oe,ae,K,Ae),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(M,$,oe,ae,I,Ae),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,I,Ae),K.side=ui,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,I,Ae),K.side=cn):M.renderBufferDirect(oe,$,ae,K,I,Ae),I.onAfterRender(M,$,oe,ae,K,Ae)}function sc(I,$,oe){$.isScene!==!0&&($=be);let ae=Y.get(I),K=m.state.lights,Ae=m.state.shadowsArray,Fe=K.state.version,He=Q.getParameters(I,K.state,Ae,$,oe),Ve=Q.getProgramCacheKey(He),Je=ae.programs;ae.environment=I.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(I.isMeshStandardMaterial?fe:le).get(I.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",ge),Je=new Map,ae.programs=Je);let Qe=Je.get(Ve);if(Qe!==void 0){if(ae.currentProgram===Qe&&ae.lightsStateVersion===Fe)return Zm(I,He),Qe}else He.uniforms=Q.getUniforms(I),I.onBeforeCompile(He,M),Qe=Q.acquireProgram(He,Ve),Je.set(Ve,Qe),ae.uniforms=He.uniforms;let Xe=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xe.clippingPlanes=ce.uniform),Zm(I,He),ae.needsLights=oM(I),ae.lightsStateVersion=Fe,ae.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=Qe,ae.uniformsList=null,Qe}function Ym(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=So.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Zm(I,$){let oe=Y.get(I);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function rM(I,$,oe,ae,K){$.isScene!==!0&&($=be),Z.resetTextureUnits();let Ae=$.fog,Fe=ae.isMeshStandardMaterial?$.environment:null,He=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Kr,Ve=(ae.isMeshStandardMaterial?fe:le).get(ae.envMap||Fe),Je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Qe=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!oe.morphAttributes.position,at=!!oe.morphAttributes.normal,Tt=!!oe.morphAttributes.color,Yt=er;ae.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Yt=M.toneMapping);let Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ct=Dt!==void 0?Dt.length:0,Ye=Y.get(ae),Bt=m.state.lights;if(Ce===!0&&(re===!0||I!==b)){let bn=I===b&&ae.id===T;ce.setState(ae,I,bn)}let pt=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Bt.state.version||Ye.outputColorSpace!==He||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isBatchedMesh&&Ye.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ye.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ye.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ye.instancingMorph===!1&&K.morphTexture!==null||Ye.envMap!==Ve||ae.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ce.numPlanes||Ye.numIntersection!==ce.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==Qe||Ye.morphTargets!==Xe||Ye.morphNormals!==at||Ye.morphColors!==Tt||Ye.toneMapping!==Yt||Ye.morphTargetsCount!==Ct)&&(pt=!0):(pt=!0,Ye.__version=ae.version);let On=Ye.currentProgram;pt===!0&&(On=sc(ae,$,K));let Ps=!1,zn=!1,oa=!1,Ot=On.getUniforms(),Zn=Ye.uniforms;if(W.useProgram(On.program)&&(Ps=!0,zn=!0,oa=!0),ae.id!==T&&(T=ae.id,zn=!0),Ps||b!==I){W.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ot.setValue(S,"projectionMatrix",I.projectionMatrix),Ot.setValue(S,"viewMatrix",I.matrixWorldInverse);let Rn=Ot.map.cameraPosition;Rn!==void 0&&Rn.setValue(S,_e.setFromMatrixPosition(I.matrixWorld)),H.logarithmicDepthBuffer&&Ot.setValue(S,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ot.setValue(S,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,zn=!0,oa=!0)}if(K.isSkinnedMesh){Ot.setOptional(S,K,"bindMatrix"),Ot.setOptional(S,K,"bindMatrixInverse");let bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ot.setValue(S,"boneTexture",bn.boneTexture,Z))}K.isBatchedMesh&&(Ot.setOptional(S,K,"batchingTexture"),Ot.setValue(S,"batchingTexture",K._matricesTexture,Z),Ot.setOptional(S,K,"batchingIdTexture"),Ot.setValue(S,"batchingIdTexture",K._indirectTexture,Z),Ot.setOptional(S,K,"batchingColorTexture"),K._colorsTexture!==null&&Ot.setValue(S,"batchingColorTexture",K._colorsTexture,Z));let jn=oe.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&te.update(K,oe,On),(zn||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,Ot.setValue(S,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Zn.envMap.value=Ve,Zn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Zn.envMapIntensity.value=$.environmentIntensity),zn&&(Ot.setValue(S,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&sM(Zn,oa),Ae&&ae.fog===!0&&ee.refreshFogUniforms(Zn,Ae),ee.refreshMaterialUniforms(Zn,ae,F,j,m.state.transmissionRenderTarget[I.id]),So.upload(S,Ym(Ye),Zn,Z)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(So.upload(S,Ym(Ye),Zn,Z),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ot.setValue(S,"center",K.center),Ot.setValue(S,"modelViewMatrix",K.modelViewMatrix),Ot.setValue(S,"normalMatrix",K.normalMatrix),Ot.setValue(S,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let bn=ae.uniformsGroups;for(let Rn=0,qd=bn.length;Rn<qd;Rn++){let qr=bn[Rn];Ge.update(qr,On),Ge.bind(qr,On)}}return On}function sM(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function oM(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,$,oe){let ae=Y.get(I);ae.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Y.get(I.texture).__webglTexture=$,Y.get(I.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){let oe=Y.get(I);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};let aM=S.createFramebuffer();this.setRenderTarget=function(I,$=0,oe=0){L=I,C=$,D=oe;let ae=!0,K=null,Ae=!1,Fe=!1;if(I){let Ve=Y.get(I);if(Ve.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(S.FRAMEBUFFER,null),ae=!1;else if(Ve.__webglFramebuffer===void 0)Z.setupRenderTarget(I);else if(Ve.__hasExternalTextures)Z.rebindTextures(I,Y.get(I.texture).__webglTexture,Y.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Xe=I.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&Y.has(Xe)&&(I.width!==Xe.image.width||I.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(I)}}let Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);let Qe=Y.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?K=Qe[$][oe]:K=Qe[$],Ae=!0):I.samples>0&&Z.useMultisampledRTT(I)===!1?K=Y.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?K=Qe[oe]:K=Qe,E.copy(I.viewport),O.copy(I.scissor),B=I.scissorTest}else E.copy(de).multiplyScalar(F).floor(),O.copy(Te).multiplyScalar(F).floor(),B=we;if(oe!==0&&(K=aM),W.bindFramebuffer(S.FRAMEBUFFER,K)&&ae&&W.drawBuffers(I,K),W.viewport(E),W.scissor(O),W.setScissorTest(B),Ae){let Ve=Y.get(I.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,oe)}else if(Fe){let Ve=$;for(let Je=0;Je<I.textures.length;Je++){let Qe=Y.get(I.textures[Je]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,oe,Ve)}}else if(I!==null&&oe!==0){let Ve=Y.get(I.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ve.__webglTexture,oe)}T=-1},this.readRenderTargetPixels=function(I,$,oe,ae,K,Ae,Fe,He=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){W.bindFramebuffer(S.FRAMEBUFFER,Ve);try{let Je=I.textures[He],Qe=Je.format,Xe=Je.type;if(!H.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-ae&&oe>=0&&oe<=I.height-K&&(I.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+He),S.readPixels($,oe,ae,K,ye.convert(Qe),ye.convert(Xe),Ae))}finally{let Je=L!==null?Y.get(L).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(I,$,oe,ae,K,Ae,Fe,He=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if($>=0&&$<=I.width-ae&&oe>=0&&oe<=I.height-K){W.bindFramebuffer(S.FRAMEBUFFER,Ve);let Je=I.textures[He],Qe=Je.format,Xe=Je.type;if(!H.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,at),S.bufferData(S.PIXEL_PACK_BUFFER,Ae.byteLength,S.STREAM_READ),I.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+He),S.readPixels($,oe,ae,K,ye.convert(Qe),ye.convert(Xe),0);let Tt=L!==null?Y.get(L).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,Tt);let Yt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await R0(S,Yt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,at),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ae),S.deleteBuffer(at),S.deleteSync(Yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,oe=0){let ae=Math.pow(2,-oe),K=Math.floor(I.image.width*ae),Ae=Math.floor(I.image.height*ae),Fe=$!==null?$.x:0,He=$!==null?$.y:0;Z.setTexture2D(I,0),S.copyTexSubImage2D(S.TEXTURE_2D,oe,0,0,Fe,He,K,Ae),W.unbindTexture()};let lM=S.createFramebuffer(),cM=S.createFramebuffer();this.copyTextureToTexture=function(I,$,oe=null,ae=null,K=0,Ae=null){Ae===null&&(K!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Fe,He,Ve,Je,Qe,Xe,at,Tt,Yt,Dt=I.isCompressedTexture?I.mipmaps[Ae]:I.image;if(oe!==null)Fe=oe.max.x-oe.min.x,He=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,Qe=oe.min.y,Xe=oe.isBox3?oe.min.z:0;else{let jn=Math.pow(2,-K);Fe=Math.floor(Dt.width*jn),He=Math.floor(Dt.height*jn),I.isDataArrayTexture?Ve=Dt.depth:I.isData3DTexture?Ve=Math.floor(Dt.depth*jn):Ve=1,Je=0,Qe=0,Xe=0}ae!==null?(at=ae.x,Tt=ae.y,Yt=ae.z):(at=0,Tt=0,Yt=0);let Ct=ye.convert($.format),Ye=ye.convert($.type),Bt;$.isData3DTexture?(Z.setTexture3D($,0),Bt=S.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Z.setTexture2DArray($,0),Bt=S.TEXTURE_2D_ARRAY):(Z.setTexture2D($,0),Bt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,$.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,$.unpackAlignment);let pt=S.getParameter(S.UNPACK_ROW_LENGTH),On=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Ps=S.getParameter(S.UNPACK_SKIP_PIXELS),zn=S.getParameter(S.UNPACK_SKIP_ROWS),oa=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Dt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Dt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Je),S.pixelStorei(S.UNPACK_SKIP_ROWS,Qe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Xe);let Ot=I.isDataArrayTexture||I.isData3DTexture,Zn=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){let jn=Y.get(I),bn=Y.get($),Rn=Y.get(jn.__renderTarget),qd=Y.get(bn.__renderTarget);W.bindFramebuffer(S.READ_FRAMEBUFFER,Rn.__webglFramebuffer),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,qd.__webglFramebuffer);for(let qr=0;qr<Ve;qr++)Ot&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Y.get(I).__webglTexture,K,Xe+qr),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Y.get($).__webglTexture,Ae,Yt+qr)),S.blitFramebuffer(Je,Qe,Fe,He,at,Tt,Fe,He,S.DEPTH_BUFFER_BIT,S.NEAREST);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(K!==0||I.isRenderTargetTexture||Y.has(I)){let jn=Y.get(I),bn=Y.get($);W.bindFramebuffer(S.READ_FRAMEBUFFER,lM),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,cM);for(let Rn=0;Rn<Ve;Rn++)Ot?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,jn.__webglTexture,K,Xe+Rn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,jn.__webglTexture,K),Zn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,bn.__webglTexture,Ae,Yt+Rn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,bn.__webglTexture,Ae),K!==0?S.blitFramebuffer(Je,Qe,Fe,He,at,Tt,Fe,He,S.COLOR_BUFFER_BIT,S.NEAREST):Zn?S.copyTexSubImage3D(Bt,Ae,at,Tt,Yt+Rn,Je,Qe,Fe,He):S.copyTexSubImage2D(Bt,Ae,at,Tt,Je,Qe,Fe,He);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Zn?I.isDataTexture||I.isData3DTexture?S.texSubImage3D(Bt,Ae,at,Tt,Yt,Fe,He,Ve,Ct,Ye,Dt.data):$.isCompressedArrayTexture?S.compressedTexSubImage3D(Bt,Ae,at,Tt,Yt,Fe,He,Ve,Ct,Dt.data):S.texSubImage3D(Bt,Ae,at,Tt,Yt,Fe,He,Ve,Ct,Ye,Dt):I.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Ae,at,Tt,Fe,He,Ct,Ye,Dt.data):I.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Ae,at,Tt,Dt.width,Dt.height,Ct,Dt.data):S.texSubImage2D(S.TEXTURE_2D,Ae,at,Tt,Fe,He,Ct,Ye,Dt);S.pixelStorei(S.UNPACK_ROW_LENGTH,pt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,On),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ps),S.pixelStorei(S.UNPACK_SKIP_ROWS,zn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,oa),Ae===0&&$.generateMipmaps&&S.generateMipmap(Bt),W.unbindTexture()},this.initRenderTarget=function(I){Y.get(I).__webglFramebuffer===void 0&&Z.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Z.setTextureCube(I,0):I.isData3DTexture?Z.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Z.setTexture2DArray(I,0):Z.setTexture2D(I,0),W.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,W.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var ul=class n extends ke{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Zt;let i=this,r=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Pn,f=new _,d=new _,h=new _,p=new ot,x=new _(0,0,-1),g=new lt,m=new _,y=new _,w=new lt,M=new ot,A=this.camera,C=new Dn(s,o,{samples:c,type:Ei}),D=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:lh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=C.texture,D.uniforms.color.value=r,D.uniforms.textureMatrix.value=M,this.material=D,this.onBeforeRender=function(L,T,b){if(d.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(b.matrixWorld),p.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(p),m.subVectors(d,h),m.dot(f)>0===!0&&this.forceUpdate===!1)return;m.reflect(f).negate(),m.add(d),p.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(d,x),y.reflect(f).negate(),y.add(d),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(f),A.lookAt(y),A.far=b.far,A.updateMatrixWorld(),A.projectionMatrix.copy(b.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(A.projectionMatrix),M.multiply(A.matrixWorldInverse),M.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let O=A.projectionMatrix;w.x=(Math.sign(g.x)+O.elements[8])/O.elements[0],w.y=(Math.sign(g.y)+O.elements[9])/O.elements[5],w.z=-1,w.w=(1+O.elements[10])/O.elements[14],g.multiplyScalar(2/g.dot(w)),O.elements[2]=g.x,O.elements[6]=g.y,O.elements[10]=g.z+1-a,O.elements[14]=g.w,i.visible=!1;let B=L.getRenderTarget(),X=L.xr.enabled,N=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(C),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(T,A),L.xr.enabled=X,L.shadowMap.autoUpdate=N,L.setRenderTarget(B);let k=b.viewport;k!==void 0&&L.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),i.material.dispose()}}};ul.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var ph=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function dx(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function vn(n,e,t,i=0,r=0){return dx(n,new Nt(1,i),e,t,r)}function xp(n,e,t,i=0){return dx(n,new pi(1),e,t,i)}function hA(n,e){let t=new $e;return t.setAttribute("position",new Ne(e.flat(),3)),{tone:n,geometry:t}}function hx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return hA(n,i)}function dA(){let n=[vn("fur",[0,.012,.011],[.154,.161,.132],1),vn("fur",[0,-.065,.008],[.128,.079,.108]),vn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),vn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),hx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),vn("skin",[0,-.061,-.133],[.102,.066,.065],1),vn("skinShade",[0,-.097,-.14],[.076,.031,.047]),vn("skin",[0,.015,-.15],[.041,.056,.038]),vn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(vn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),vn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),xp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),vn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),vn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),vn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),vn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),vn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),vn("ink",[e*.047,.031,-.183],[.011,.012,.006]),xp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),xp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(hx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function fA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new $e;return r.setAttribute("position",new ft(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var pA=fA(dA());function mh(n=0){let e=new dn({flatShading:!0}),t=new dn({flatShading:!0}),i=new dn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new Ie("#212128"),ivory:new Ie("#fff1ce")},o=-1;function a({colors:u,ranges:f}){for(let{tone:d,start:h,end:p}of f){let{r:x,g,b:m}=s[d];for(let y=h;y<p;y++)u.setXYZ(y,x,g,m)}u.needsUpdate=!0}function l(u){let f=Number.isInteger(u)&&u>=0&&u<ph.length?u:0;if(f===o)return;o=f;let d=ph[o];for(let[h,p]of Object.entries(d))(s[h]??=new Ie).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let f=u.geometry.clone(),d=new ft(new Float32Array(f.getAttribute("position").count*3),3);f.setAttribute("color",d);let h={colors:d,ranges:u.ranges};return r.push(h),a(h),new ke(f,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new At;return u.add(c(pA)),u}}}var fs=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],mA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],gA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],fx=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],gh=fs.length-1,px=Math.min(...fs.map(n=>n[1])),mx=Math.max(...fs.map(n=>n[1])),nr=new _(0,0,(px+mx)/2),xh=new _(.047,.027,(mx-px)/2),xA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],yA=[-.57,.57,1,.61,-.61,-1],vA=[1,1,-.04,-.91,-.91,-.04];function yh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(T=0,b=0,E=0){let O=s.length/3;return s.push(T*r,b,E),O}function c(T,b,E){i?o.push(T,E,b):o.push(T,b,E)}function u(T,b,E,O){c(T,b,E),c(T,E,O)}function f(T,b){for(let E=0;E<T.length;E++){let O=(E+1)%T.length;u(T[O],T[E],b[E],b[O])}}function d(T,b){for(let E=0;E<T.length;E++)c(b,T[(E+1)%T.length],T[E])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=fs.map(([T,b,E,O],B)=>{let X=B===0||B===gh,N=T*.67,k=-.024+(b+.024)*.69;return{top:l(T,E,b),middle:l(T*1.08,(E+O)/2,X?b:-.025+(b+.025)*1.04),bottom:l(T,O,b),innerTop:l(N,mA[B],k),innerBottom:l(N,gA[B],k)}});function g(T){let b=x[T],E=x[(T+1)%x.length];return[b.top,E.top,E.middle,E.bottom,b.bottom,b.middle]}let m=new Set(fx.map(({edge:T})=>T));m.add(gh);for(let T=0;T<x.length;T++){let b=x[T],E=x[(T+1)%x.length];c(h,b.innerTop,E.innerTop),c(p,E.innerBottom,b.innerBottom),u(b.innerTop,b.top,E.top,E.innerTop),u(E.innerBottom,E.bottom,b.bottom,b.innerBottom),m.has(T)||(u(E.top,b.top,b.middle,E.middle),u(E.middle,b.middle,b.bottom,E.bottom))}let y=g(gh);t||d(y,l(0,0,fs[gh][1]));let w=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:T,length:b,splay:E}of fx){let[O,B,X,N]=fs[T],[k,j,F,ie]=fs[T+1],ne=k-O,de=j-B,Te=-de+ne*E,we=ne+de*E,Pe=Math.hypot(Te,we),Ce=Math.hypot(ne,de)/2,re=(X+F-N-ie)/4,se=[],_e=g(T);for(let[be,Oe,ze]of xA){let S=[l(),l(),l(),l(),l(),l()];f(_e,S),se.push({ring:S,distance:be*b,width:Oe*Ce,height:ze*re}),_e=S}let Re=l();d(_e,Re),a.push({x:(O+k)/2,y:(X+F+N+ie)/4,z:(B+j)/2,forwardX:Te/Pe,forwardZ:we/Pe,rows:se,tip:Re,length:b,pressure:-1})}let M=new $e,A=new Ne(s,3).setUsage(An);M.setAttribute("position",A),M.setIndex(o),M.boundingSphere=new Qn(new _(0,-.018,-.052),.12),M.boundingBox=new jt(new _(-.1,-.082,-.17),new _(.1,.038,.025));let C=!0;function D(T,b=!0){let E=!1;for(let O=0;O<a.length;O++){let B=a[O],X=T?.[O],N=Number.isFinite(X)?De.clamp(X,0,1):0;if(N===B.pressure)continue;B.pressure=N,E=!0;let{forwardX:k,forwardZ:j,length:F,rows:ie,tip:ne}=B,de=B.x,Te=B.z,we=B.y,Pe=0,Ce=0;for(let{ring:_e,distance:Re,width:be,height:Oe}of ie){let ze=Re/F,S=De.smoothstep(ze,0,.57),V=De.smoothstep(ze,.38,1),z=(.17+N*.83)*S+(.14+N*.76)*V,H=(z+Pe)/2,W=Re-Ce,R=Math.cos(H)*W;de+=k*R,we-=Math.sin(H)*W,Te+=j*R;for(let Y=0;Y<_e.length;Y++){let Z=yA[Y]*be,le=vA[Y]*Oe,fe=le*Math.sin(z);A.setXYZ(_e[Y],r*(de+j*Z+k*fe),we+le*Math.cos(z),Te-k*Z+j*fe)}Pe=z,Ce=Re}let re=F-Ce,se=re*Math.cos(Pe);A.setXYZ(ne,r*(de+k*se),we-re*Math.sin(Pe),Te+j*se)}E&&(A.needsUpdate=!0,C=!0),b&&C&&(M.computeVertexNormals(),C=!1)}D(),M.getAttribute("normal").setUsage(An);let L=new ke(M,e);return L.castShadow=!0,{mesh:L,pose:D,wristIndices:w}}var Er=12,yp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],_A=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],gx=yp.flatMap(([n,e,t])=>Array.from({length:Er},(i,r)=>{let s=(r-.5)*Math.PI*2/Er;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function vh(n,e){let t=gx.length,i=[],r=(j,F,ie,ne,de)=>j.push(F,ie,ne,F,ne,de);function s(j,F,ie=!1){for(let ne=1;ne<F.length-1;ne++)ie?j.push(F[0],F[ne+1],F[ne]):j.push(F[0],F[ne],F[ne+1])}let o=(j,F)=>j*Er+(F+Er)%Er;for(let j=0;j<yp.length-1;j++)for(let F=0;F<Er;F++)(j===2||j===3)&&(F===0||F===6)||r(i,o(j,F),o(j+1,F),o(j+1,F+1),o(j,F+1));s(i,Array.from({length:Er},(j,F)=>o(0,F))),s(i,Array.from({length:Er},(j,F)=>o(yp.length-1,F)),!0);let a=t,l=e.map(({geometry:j,wristIndices:F},ie)=>{let ne=ie===0?6:0,de=[o(4,ne),o(4,ne+1),o(3,ne+1),o(2,ne+1),o(2,ne),o(3,ne)],Te=[de,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],we=Te.at(-1),Pe=new Array(j.attributes.position.count);F.forEach((se,_e)=>{Pe[se]=we[_e]});for(let se=0;se<Pe.length;se++)Pe[se]??=a++;let Ce=[];for(let se=0;se<j.index.count;se++)Ce.push(Pe[j.index.getX(se)]);for(let se=0;se<Te.length-1;se++)for(let _e=0;_e<6;_e++){let Re=(_e+1)%6;r(i,Te[se][_e],Te[se][Re],Te[se+1][Re],Te[se+1][_e])}let re=[];return s(re,we),{socket:de,rings:Te,wrist:we,wristIndices:F,remap:Pe,skin:Ce,cap:re,sign:ie===0?-1:1}}),c=new $e,u=new Ne(a*3,3).setUsage(An);c.setAttribute("position",u);let f=new ke(c,n);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let d=Array.from({length:4},(j,F)=>new es([...i,...l.flatMap((ie,ne)=>F&1<<ne?ie.skin:ie.cap)],1));c.setIndex(d[0]);let h=new _,p=new _,x=new _,g=new _,m=new _,y=new _,w=new _,M=new _,A=new _,C=new We,D=new We,L=new We,T=new _(0,0,-1),b=new We().setFromEuler(new Jt(-1.42,0,0)),E=[.24,.62,.94,.56],O=[.089,.084,.069,.054,.037],B=0,X=0,N=!0;function k(j,F,ie,ne,de){let Te=!!(j[0]||j[1]);if(!Te&&!N&&B===ie&&X===ne)return;B=ie,X=ne,N=Te;for(let Pe=0;Pe<t;Pe++){let[Ce,re,se]=gx[Pe];u.setXYZ(Pe,Ce*ie,re*ne,se*ie)}let we=0;for(let Pe=0;Pe<l.length;Pe++){let Ce=l[Pe],re=j[Pe],se=e[Pe].geometry.attributes.position,_e=!!re,Re=Ce.wristIndices;_e&&de&&(we|=1<<Pe),p.set(0,0,0);for(let be of Ce.socket)p.add(h.fromBufferAttribute(u,be));p.multiplyScalar(1/6),g.set(0,0,0);for(let be of Re)g.add(h.fromBufferAttribute(se,be));g.multiplyScalar(1/6).applyQuaternion(re?.quaternion??b),_e?g.add(re.position):g.add(h.set(p.x+Ce.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),y.copy(m).normalize(),w.set(Ce.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Ce.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),_e&&x.addScaledVector(w,Math.sqrt(Math.max(.007,F**2-m.lengthSq()*.25))*.72),C.setFromUnitVectors(T,y.subVectors(x,p).normalize()),D.copy(re?.quaternion??b);for(let be=0;be<4;be++){let Oe=be===3;A.lerpVectors(Oe?x:p,Oe?g:x,E[be]),L.copy(C).slerp(D,Oe?.79:be*.19);for(let ze=0;ze<6;ze++){let S=_A[ze],V=O[be];M.set(S[0]*V,S[1]*V*.84,0).applyQuaternion(L).add(A),u.setXYZ(Ce.rings[be+1][ze],M.x,M.y,M.z)}}for(let be=0;be<Ce.remap.length;be++)M.fromBufferAttribute(se,be).applyQuaternion(D),_e?M.add(re.position):M.add(h.set(p.x+Ce.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Ce.remap[be],M.x,M.y,M.z)}c.index!==d[we]&&c.setIndex(d[we]),u.needsUpdate=!0,c.computeVertexNormals()}return k([null,null],.42,1,1,!1),{mesh:f,pose:k}}function Ao(n,e){let t=new fi;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Qi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var xx=.1,MA=45,yx=55,hl=128,vp=96,bA=[new Ie("#ffdc4d"),new Ie("#ff5d35"),new Ie("#bfc4c8")],SA=new _(0,0,-1);function _p(){let n=new At,e=new gt({color:"#596974",roughness:.38,metalness:.6}),t=new gt({color:"#29323e",roughness:.68}),i=new Mt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,f=0){let d=new ke(o,a);d.position.set(l,c,u),d.rotation.x=f,n.add(d)}let s=new gt({color:"#7f4231",roughness:.46,metalness:.34});return r(Ao([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(Ao([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Qt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new et(.054,.014,.073),s,.035,.045,-.099),r(new et(.018,.008,.023),i,.035,.063,-.131),n}function vx(n,{impact:e,onShot:t}){let i=_p(),r=new ke(new Nt(.045,0),new Mt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new $e,o=new Ne(hl*18,3).setUsage(An),a=new Ne(hl*18,3);for(let B=0;B<hl;B++)for(let X=0;X<6;X++){let N=bA[Math.floor(X/2)];a.setXYZ(B*6+X,N.r,N.g,N.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new ns(s,new wi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Ne(vp*3,3).setUsage(An),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let f=new Na(u,new co({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:Kn}));f.frustumCulled=!1,f.visible=!1,n.add(f);let d=Array.from({length:hl},()=>({p:new _,d:new _,distance:0,active:!1,authoritative:!1})),h=Array.from({length:vp},()=>({p:new _,v:new _,life:0})),p=new _,x=new _,g=new _,m=0,y=0,w=0,M=0,A=0,C=!1;function D(B,X,N,k){for(let j=0;j<N;j++){let F=h[y++%vp];F.p.copy(B),F.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(k).addScaledVector(X,.55),F.life=.12+Math.random()*.21}}function L(B,X,N){let k=d[m++%hl];return k.p.copy(B),k.d.copy(SA).applyQuaternion(X),k.distance=0,k.active=!0,k.authoritative=N,k}function T(B){let X=L(B.position,B.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),D(p,X.d,4,2.2),A=.055,w++,t?.(B.position,B.quaternion)}function b(B,X,N){let k=L(B,X,N);D(k.p,k.d,4,2.2),l.visible=!0}function E({dt:B,aim:X,firing:N}){if(!X&&!i.visible&&!l.visible&&!f.visible)return;if(B=Math.max(0,Math.min(B,.12)),i.visible=!!X,X&&(i.position.copy(X.modelPosition??X.position),i.quaternion.copy(X.quaternion)),X&&N){if(C)for(M-=B;M<=0;)T(X),M+=xx;else T(X),M=xx;C=!0}else M=0,C=!1;A=Math.max(0,A-B),r.visible=!!X&&A>0,r.material.opacity=A/.055;let k=0;for(let F of d){if(!F.active)continue;let ie=Math.min(MA*B,yx-F.distance),ne=ie>0?e?.(F.p,F.d,ie,F.authoritative):null,de=ne==null?ie:Math.max(0,Math.min(ie,ne));F.p.addScaledVector(F.d,de),F.distance+=de,ne!=null&&(g.copy(F.d).negate(),D(F.p,g,8,4.2)),F.active=ne==null&&F.distance<yx;let Te=Math.min(.82,F.distance);for(let we=0;we<3;we++)for(let Pe=0;Pe<2;Pe++){let Ce=(we+Pe)/3;x.copy(F.p).addScaledVector(F.d,-Te*Ce),o.setXYZ(k++,x.x,x.y,x.z)}}l.visible=k>0,k>0&&(o.needsUpdate=!0),s.setDrawRange(0,k);let j=0;for(let F of h)F.life<=0||(F.life-=B,F.v.y-=5*B,F.p.addScaledVector(F.v,B),F.life>0&&c.setXYZ(j++,F.p.x,F.p.y,F.p.z));f.visible=j>0,j>0&&(c.needsUpdate=!0),u.setDrawRange(0,j)}function O(){for(let B of d)B.active=!1;for(let B of h)B.life=0;M=A=0,C=!1,i.visible=r.visible=l.visible=f.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:E,reset:O,replay:b,get shotsFired(){return w}}}var _x=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],wA=new _(0,1,0);function _h(n){let e=new At,t=new gt({color:"#2c4750",roughness:.43,metalness:.47}),i=new gt({color:"#899fa3",roughness:.46,metalness:.57}),r=new Mt({toneMapped:!1});function s(h,p,x,g,m,y=0){let w=new ke(h,p);return w.position.set(x,g,m),w.rotation.x=y,e.add(w),w}s(Ao([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(Ao([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Qt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Qt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new et(.044,.009,.038),r,.038,.069,-.023);let o=new ke(new Qt(.002,.003,1,5,1,!0),new Mt({transparent:!0,opacity:.52,depthWrite:!1,blending:Kn,toneMapped:!1})),a=new ke(new Nt(.012,0),new Mt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new _,c=new _,u=0;function f(){e.visible=o.visible=a.visible=!1}function d({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){f();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(_x[h-1]??_x[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(wA,c.normalize()),a.position.copy(g)}return f(),{mesh:e,hide:f,update:d}}var TA="wss://clouddata.turbowarp.org",AA="itssoren.github.io/VR/gorilla-lab/",Sh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Eo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),Sx="\u2601 GorillaHost",dl=["ARENE1","ARENE2","ARENE3"],EA=new Map([[Sx,"vr"],[Sh.vr,"vr"],[Sh.pc,"pc"],...Eo.map(n=>[n,"player"])]),bp=53,Mh=4400,wx=64e3,CA=100,RA=200,PA=450,Tx=6,kt=(n,e)=>Math.round(n).toString().padStart(e,"0");function fl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function ps(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function IA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+kt(e,7)+a.map(c=>kt(c*100+2e4,5)).join("")+kt(Math.round(l*10)%3600,4)+kt(o,6)}function DA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function Ax({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),f=o(),d=null,h=null,p="",x=0,g="",m=-1/0,y=null,w=0,M=0,A=1/0,C=0,D="offline",L=!1,T=-1,b=0,E=[],O=1/0,B=350,X=1/0,N=0,k=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function F(S,V){D=S,n(V)}function ie(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ne(){return[...c.values()].map(S=>S.pose).filter(Boolean)}function de(){let S=ne().filter(W=>h==="vr"?W.role!=="vr":W.role==="vr"),V=W=>Number(W.ready)*2+ +(W.role==="pc"),z=S.find(W=>W.id===y?.id)??null,H=S.reduce((W,R)=>!W||V(R)>V(W)?R:W,z);H!==y&&(y=H,e(y))}function Te(S){for(let V of c.values())V.pose&&t(null,V.pose),V.pose=V.candidate=null;S&&c.clear(),de()}function we(){let S=d;if(d=null,S){S.onopen=S.onmessage=S.onerror=S.onclose=null;try{S.close()}catch{}}}function Pe(){we(),h=null,p="",A=1/0,L=!1,T=-1,E=[],k=[],Te(!0),F("offline","Hors ligne")}function Ce(S){let V=Math.min(3e4,1500*2**Math.min(C++,5));A=a()+V,F("retry","TurboWarp d\xE9connect\xE9 ("+S+") \xB7 reconnexion automatique au salon "+p)}function re(S){let V=!1;for(let[z,H]of c)H.pose&&S-H.pose.arrival>Mh&&(t(null,H.pose),H.pose=null,V=!0),H.candidate&&S-H.candidate.arrival>Mh&&(H.candidate=null),S-H.lastArrival>6e4&&c.delete(z);V&&de()}function se(S,V,z,H){let W=kA(z.value,null);if(!W||W.id===x)return;let R=c.get(W.id);if(!R){if(c.size>=64)return;R={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:H,pose:null,candidate:null},c.set(W.id,R)}if(W.time<=R.lastTime)return;let Y=R.pose??R.candidate;if(Y&&W.time-Y.time>Mh+H-Y.arrival){if(R.pose)return;R.candidate=null}R.lastTime=W.time,R.lastArrival=H;let Z={...W,ready:W.ready??!0,protocol:W.protocol??(W.ready===void 0?3:4),role:S,channel:V,received:o(),arrival:H},le=R.candidate;if(!R.pose&&(!le||le.channel!==V||le.map!==Z.map||H-le.arrival>Mh)&&(W.ready!==void 0||Math.abs(W.time-Z.received)>25e3)){R.candidate=Z;return}if(R.candidate=null,!R.pose&&le?.objects&&le.ready&&le.map===Z.map&&!Z.objects&&(Z.objects=le.objects),R.pose=Z,h==="vr"&&S==="vr"&&Z.ready)if(X===1/0||le?.arrival<X||W.id<x)h="player",g=Eo[x%Eo.length],F("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(j.received++,j.bytesReceived+=z.value.length,t(Z),de(),!(!L||!Z.ready||Z.map!==T)){H-R.shotWindow>=1e3&&(R.shotWindow=H,R.shotCount=0);for(let{seq:fe,position:P,quaternion:v}of Z.shots??[])fe<=R.lastShot||(R.lastShot=fe,!(R.shotCount>=14||(P.x-Z.x)**2+(P.y-Z.y)**2+(P.z-Z.z)**2>7**2)&&(R.shotCount++,r({position:P,quaternion:v},Z)));if(!(h!=="vr"||S!=="player"||W.actionTarget!==x))for(let{seq:fe,action:P}of W.actions)fe<=R.lastAction||(R.lastAction=fe,i(P,Z))}}function _e(){let S;try{S=new s(TA)}catch{return!1}return d=S,M=a(),m=-1/0,X=1/0,F("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),S.onopen=()=>{d===S&&(w=a(),S.send(JSON.stringify({method:"handshake",project_id:AA+p,user:"player"+x})+`
`),F("open",ie()))},S.onmessage=V=>{if(d!==S||typeof V.data!="string"||V.data.length>105e4)return;let z=a();re(z);for(let H of V.data.split(`
`)){if(!H.trim())continue;let W;try{W=JSON.parse(H)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",H.slice(0,200));continue}let R=EA.get(W?.name);W?.method!=="set"||!R||se(R,W.name,W,z)}},S.onerror=()=>{d===S&&F("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},S.onclose=V=>{if(d!==S)return;let z=V.code;if(we(),Te(!1),E=[],k=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(z)){Ce(z);return}h=null,p="";let H={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[z];F("error","TurboWarp d\xE9connect\xE9 ("+z+")"+(H?" \xB7 "+H:V.reason?" \xB7 "+V.reason.slice(0,100):""))},!0}function Re(S,V){let z=fl(S);return!/^[A-Z0-9]{5,12}$/.test(z)||!["vr","pc","player"].includes(V)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===V&&p===z?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(Te(!0),x=Math.floor(1e6+l()*8999999),h=V,p=z,g=Sh[h]??Eo[x%Eo.length],B=350,h==="vr"&&dl.includes(p)&&(g=x%2===0?Sh.vr:Sx,B=750+x%150),b=N=0,k=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},C=0,A=O=1/0,_e()?!0:(h=null,p="",F("error","WebSocket indisponible."),!1))}function be(S,V){let z=S.hand||S.type==="world"?5:4;if(h!=="player"||D!=="open"||!y?.ready||y.protocol<z||y.map!==V||!Sp(S)||b>=99999999)return!1;let H=a();return E=E.filter(W=>W.expires>=H&&W.target===y.id&&W.map===V),E.length>=8?!1:(E.push({action:{...S},seq:++b,expires:H+1800,target:y.id,map:V}),!0)}function Oe(S,V,z){if(!h||h==="pc"||D!=="open"||N>=99999999)return;let H=Po(S),W=Io(V);if(!H||!W)return;let R=a();k=k.filter(Y=>Y.expires>=R&&Y.map===z).slice(-(Tx-1)),k.push({record:kt(++N,8)+H+W,expires:R+PA,map:z})}function ze(S){let V=a();L=!!S&&S.ready!==!1,T=S?.map??-1,re(V),h&&!d&&V>=A&&(A=1/0,_e()||Ce(1006)),d&&d.readyState===0&&V-M>1e4&&(we(),Ce(1006)),j.bufferedBytes=d?.bufferedAmount??0;let z=h==="pc"?RA:CA;if(!S||!h||d?.readyState!==1||j.bufferedBytes>4096||V-w<(h==="vr"?B:350)||V-m<z)return!1;if(h==="player"){let le=ne().filter(P=>P.role==="player"),fe=le.find(P=>P.channel===g);if(fe?O=Math.min(V,O):O=1/0,fe&&(fe.id<x||V-O>=800)){let P=Eo.find(v=>!le.some(U=>U.channel===v));if(!P)return D!=="capacity"&&F("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=P,O=1/0}}(C||D==="capacity")&&(C=0,F("open",ie()));let H=Math.round(f+V-u),W=IA({...S,time:H,id:x});if(!W)return!1;E=E.filter(le=>le.expires>=V&&le.target===y?.id&&le.map===S.map),k=k.filter(le=>le.expires>=V&&le.map===S.map);let R=j.bufferedBytes===0?S.objectFeed?.(V):null,Y=typeof S.avatar=="function"?S.avatar():S.avatar,Z=VA(W,Y,R,{version:5,ready:S.ready!==!1,actions:E,actionTarget:E[0]?.target??0,shots:k,score:S.score});return m=V,h==="vr"&&(X=Math.min(X,V)),d.send(JSON.stringify({method:"set",name:g,value:Z})+`
`),j.sent++,j.bytesSent+=Z.length,!0}return{join:Re,leave:Pe,tick:ze,sendAction:be,queueShot:Oe,get stats(){return{...j}},get role(){return h},get code(){return p},get state(){return D},get remote(){return y},get peers(){return ne()}}}var LA=15,UA=12,Ex=44,bh=15,Mp=35,Po=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>kt(e*100+2e4,5)).join(""):null;function Co(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Io=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>kt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Ro(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function FA(n){let e=Po(n.mesh.position),t=Io(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>bp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return kt(i,5)+kt(r,2)+s+o+kt(a,8)+e+t}function NA(n){return kt(n,5)+"99"+"0".repeat(Ex-7)}function BA(n){if(!n)return null;let e=Io(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Po(l.position),u=l&&Io(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(LA+UA)}),r=kt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=kt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+kt(n.color??0,2)+a}function Sp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=bp?"10"+kt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+kt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+kt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+kt(i,5):null}function OA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),Sp(s)===n?s:null}function zA(n){let e=Po(n?.position),t=Io(n?.quaternion),i=Po(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function VA(n,e,t,i=null){let r=BA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>kt(p,8)+Sp(x)).join(""),a=i.version===5,l=a&&Po(e?.gun?.position),c=a&&Io(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",f=i.shots??[],d=a?u+kt(f.length,1)+f.map(p=>p.record).join("")+kt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+zA(r?e.tool:null)+kt(i.actionTarget??0,7)+kt(o.length/bh,1)+o+d;return h.length+1+s.length>wx&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function Mx(n,e,t){let i=Ro(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:Co(n,o+1),quaternion:Ro(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function kA(n,e){if(typeof n!="string"||n.length>wx||!/^[0-9]+$/.test(n))return null;let t=DA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:Ex,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=Mx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),f=Co(n,a+2),d=Ro(n,a+17),h=Co(n,a+29);if(u<1||u>7||!f||!d||!h)return null;t.avatar.tool={mode:u,position:f,quaternion:d,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*bh+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=bh){let u=Number(n.slice(a,a+8)),f=OA(n.slice(a+8,a+bh));if(!f||u<=c)return null;t.actions.push({seq:u,action:f}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let d=Co(n,a+1),h=Ro(n,a+16);if(!d||!h)return null;t.avatar.gun={position:d,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>Tx||n.length<a+u*Mp+7)return null;t.shots=[];let f=0;for(let d=a+u*Mp;a<d;a+=Mp){let h=Number(n.slice(a,a+8)),p=Co(n,a+8),x=Ro(n,a+23);if(h<=f||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),f=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=Mx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),f=Number(n.slice(l+5,c));if(!u)return null;if(f===(i?9:99)){a.push({id:u,removed:!0});continue}let d=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Co(n,c+10),g=Ro(n,c+25);if(f>bp||d>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:f,flags:d,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var GA=.45,bx=2.5;function Cx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let f of o){if(!f.mesh.visible)continue;let d=f.netId,h=n.get(d),p=f.radius<=GA&&!f.frozen&&(f.velocity.lengthSq()>=bx**2||f.angular.lengthSq()*f.radius**2>=bx**2);if(!l&&!p&&!h?.fast)continue;let x=FA(f);if(!x)continue;c?.add(d);let g=x!==h?.record;g&&e.set(d,{record:x,until:s+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(d,{record:x,fast:p})}if(l){for(let f of n.keys())c.has(f)||(e.set(f,{record:NA(f),until:s+420}),n.delete(f));for(let[f,d]of e)d.until<s?e.delete(f):a||u.push(d.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Rx=Vt.DEFAULT_UP,HA=15,Px=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function WA(){let n=new At,e=new ke(new Nt(.155,1),new gt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new ke(new mi(.23,.018,5,20),new Mt({color:"#84e6ff",transparent:!0,opacity:.85,blending:Kn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new ke(new Ji(.11,.28,9,1,!0),new Mt({color:"#55c7ff",transparent:!0,opacity:.45,side:cn,blending:Kn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function qA(){let n=new At,e=new At,t=mh(0),i=t.createHead(),r=["left","right"].map(m=>({skin:yh(m,t.hand,{openWrist:!0}),position:new _,quaternion:new We,pressure:[0,0,0],tracked:!1})),s=vh(t.fur,r.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=_h(e),l=null,c=new _,u=[null,null],f=new _,d=new We,h=new We,p=new We,x={mode:0,position:new _,quaternion:new We,end:new _};function g(m,y,w){let M=m.avatar,A=1-Math.exp(-w*32);if(!M){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}d.copy(n.quaternion).invert(),p.copy(M.head).premultiply(d),i.quaternion.slerp(p,A),f.set(0,0,-1).applyQuaternion(i.quaternion);let C=De.smoothstep(-f.y,.28,.94),D=Math.max(.38,M.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*D,.24*C),o.rotation.x=-.5*C,h.copy(o.quaternion).invert(),t.setColor(M.color??0);for(let b=0;b<r.length;b++){let E=r[b],O=M.hands[b];if(u[b]=O?E:null,!O){E.tracked=!1;continue}c.copy(O.position).sub(m).applyQuaternion(d).sub(o.position).applyQuaternion(h),p.copy(O.quaternion).premultiply(d).premultiply(h),E.tracked?(E.position.lerp(c,A),E.quaternion.slerp(p,A)):(E.position.copy(c),E.quaternion.copy(p)),E.tracked=!0;for(let B=0;B<3;B++)E.pressure[B]+=((O.pressure?.[B]??0)-E.pressure[B])*A;E.skin.pose(E.pressure,!1)}if(s.pose(u,M.armSpan*.5,.97,D,!0),M.gun){l||(l=_p(),l.visible=!1,e.add(l));let b=l.visible?A:1;l.position.lerp(M.gun.position,b),l.quaternion.slerp(p.copy(M.gun.quaternion),b),l.visible=!0}else l&&(l.visible=!1);let L=M.tool;if(!L){a.hide(),x.mode=0;return}let T=x.mode?A:1;x.mode=L.mode,x.position.lerp(L.position,T),x.quaternion.slerp(p.copy(L.quaternion),T),x.end.lerp(L.end,T),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of r)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Ix(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Dx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=Cx(),f=0,d=-1,h=-1,p="",x=0;function g(){let S=e();return S!==p&&(p=S,x=ps(S)),x}function m(S){return!!S?.ready&&S.map===g()}function y(S){let V=c.get(S);V&&(n.remove(V.mesh),V.mesh.material?.dispose(),c.delete(S))}function w(){for(let S of c.keys())y(S);f=0,d=-1,h!==-1&&(h=-1,r?.(null))}function M(S,V){if(S.color===V.color&&S.style===V.style)return;S.color=V.color,S.style=V.style;let z=S.mesh.material;if(z?.color){if(z.color.setHex(V.color),V.style===0){Object.assign(z,S.baseMaterial),S.baseEmissive&&z.emissive.copy(S.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][V.style],z.metalness=[.1,0,.87,.12,0][V.style],z.opacity=V.style===3?.4:1,z.transparent=V.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=V.style===4?1.65:0,z.needsUpdate=!0}}function A(S){if(!m(S)){w();return}if((f!==S.id||d!==S.map)&&(w(),f=S.id,d=S.map),S.avatar&&S.avatar.light!==h&&(h=S.avatar.light,r?.(h)),!S.objects)return;let V=S.objects.full?new Set:null;for(let z of S.objects.records){if(z.removed){y(z.id);continue}V?.add(z.id);let H=c.get(z.id);if(H&&H.type!==z.type&&(y(z.id),H=null),!H){let R=i?.(z.type);if(!R)continue;let{roughness:Y,metalness:Z,transparent:le,depthWrite:fe,opacity:P,emissiveIntensity:v}=R.material??{},U={roughness:Y,metalness:Z,transparent:le,depthWrite:fe,opacity:P,emissiveIntensity:v};R.userData.netId=z.id,R.userData.netType=z.type,H={mesh:R,baseMaterial:U,baseEmissive:R.material?.emissive?.clone(),type:z.type,target:new _().copy(z.position),quaternion:new We().copy(z.rotation),velocity:new _,time:S.time},R.position.copy(H.target),R.quaternion.copy(H.quaternion),c.set(z.id,H),n.add(R)}let W=(S.time-H.time)/1e3;W>.06&&W<.65&&!(z.flags&6)?H.velocity.copy(z.position).sub(H.target).multiplyScalar(1/W).clampLength(0,23):H.velocity.set(0,0,0),H.target.copy(z.position),H.quaternion.copy(z.rotation),H.time=S.time,H.flags=z.flags,H.frequent=W>.06&&W<.16,H.received=S.arrival,H.mesh.userData.netFlags=z.flags,H.mesh.userData.held=!!(z.flags&1),M(H,z)}if(V)for(let z of c.keys())V.has(z)||y(z)}let C=new _;function D(S,V,z){let H=1-Math.exp(-S*22),W=1-Math.exp(-S*32);for(let R of c.values()){if(R.mesh.visible=V,!V)continue;let Y=R.frequent?W:H,Z=R.flags&6?0:Math.min(R.frequent?.1:.12,Math.max(0,(z-R.received)/1e3));C.copy(R.target).addScaledVector(R.velocity,Z),R.mesh.position.distanceToSquared(C)>16||R.flags&6&&R.mesh.position.distanceToSquared(R.target)<1e-4?R.mesh.position.copy(C):R.mesh.position.lerp(C,Y),R.mesh.quaternion.slerp(R.quaternion,Y),R.flags&6&&R.mesh.quaternion.angleTo(R.quaternion)<.008&&R.mesh.quaternion.copy(R.quaternion),R.mesh.updateMatrixWorld(!0)}}let L=S=>document.querySelector(S),T=L("#cloud-status"),b=L("#cloud-room"),E=L("#cloud-camera"),O=-1/0,B=0,X="Hors ligne",N=0;function k(S){B=S,E.textContent="Cam\xE9ra : "+Px[S]}function j(){k((B+1)%Px.length)}E.onclick=j;let F=Ax({onStatus(S){X=S,T.textContent=S,a?.()},onPose(S){F.role!=="vr"&&A(S)},onPeer(S,V){if(!S){let W=l.get(V.id);W?.art&&(Ix(W.art.model),Ix(W.art.toolRoot),W.art.dispose?.()),l.delete(V.id);return}let z=l.get(S.id);z||(z={art:null,motion:new _,handMotion:[new _,new _]},l.set(S.id,z));let H=z.pose;z.motion.set(0,0,0);for(let W of z.handMotion)W.set(0,0,0);if(H&&H.map===S.map){let W=(S.time-H.time)/1e3;if(W>=.055&&W<=.65){z.motion.set(S.x-H.x,S.y-H.y,S.z-H.z).multiplyScalar(1/W),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let R=0;R<2;R++){let Y=H.avatar?.hands[R],Z=S.avatar?.hands[R];Y&&Z&&z.handMotion[R].copy(Z.position).sub(Y.position).multiplyScalar(1/W).clampLength(0,23)}}}z.pose=S},onAction:s,onShot:o}),ie=fl(new URLSearchParams(location.search).get("room")??"");function ne(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),S=>(S%36).toString(36)).join("").toUpperCase()}b.value=/^[A-Z0-9]{5,12}$/.test(ie)?ie:ne();function de(S,V=b.value){let z=fl(V);if(!(F.role===S&&F.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){T.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}F.role&&F.leave(),F.join(z,S)&&(b.value=z,S!=="vr"&&L("#game").focus(),u.reset(),k(0),t(ps(z)),p="")}}L("#cloud-vr").onclick=()=>de("vr"),L("#cloud-new").onclick=()=>de("vr",ne());for(let[S,V]of dl.entries())L(`#public-join-${S}`).onclick=()=>de("player",V),L(`#public-host-${S}`).onclick=()=>de("vr",V);L("#cloud-pc").onclick=()=>de("pc");let Te=L("#cloud-player");Te&&(Te.onclick=()=>de("player")),L("#cloud-leave").onclick=()=>{N=0,F.leave()},L("#cloud-copy").onclick=async()=>{let S=new URL(location.href);S.searchParams.set("room",F.code||fl(b.value));try{await navigator.clipboard.writeText(S.href),T.textContent="Lien copi\xE9."}catch{T.textContent=S.href}N=performance.now()+2500},addEventListener("pagehide",()=>F.leave());let we=new _,Pe=new _,Ce=new _,re=new _,se=0;function _e({dt:S,position:V,yaw:z,pitch:H,camera:W,rig:R,keys:Y,flat:Z}){let le=Z?.movement,fe=Number(Y.has("KeyD"))-Number(Y.has("KeyQ")||Y.has("KeyA"))+(le?.x??0),P=Number(Y.has("KeyS"))-Number(Y.has("KeyZ")||Y.has("KeyW"))+(le?.z??0);Z?.consumeJump?.()&&(se=.26),se=Math.max(0,se-S);let v=Number(Y.has("Space")||se>0)-Number(Y.has("ShiftLeft")||Y.has("ShiftRight")),U=Y.has("ControlLeft")||Y.has("ControlRight")?11:3.2;re.set(fe,v,P).clampLength(0,1).applyAxisAngle(Rx,z),R.position.addScaledVector(re,S*U).clampScalar(-175,175),R.rotation.set(0,z,0),W.position.set(0,0,0),W.rotation.set(H,0,0,"YXZ"),R.updateMatrixWorld(!0),V.copy(R.position)}function Re(S,V,z,H){for(let W of l.values()){let R=W.pose;if(!(S&&m(R))){W.art&&(W.art.model.visible=!1,W.art.toolRoot&&(W.art.toolRoot.visible=!1));continue}W.art||(W.art=R.role==="pc"?WA():qA(),n.add(W.art.model),W.art.model.visible=!1,W.art.toolRoot&&n.add(W.art.toolRoot));let{model:Z,toolRoot:le}=W.art,fe=Math.min(.12,Math.max(0,(H-R.arrival)/1e3+.025));we.copy(R).addScaledVector(W.motion,fe),!Z.visible||Z.position.distanceToSquared(we)>64?Z.position.copy(we):Z.position.lerp(we,1-Math.exp(-z*34)),Z.rotation.y=R.yaw,Z.visible=!0,le&&(le.visible=!0),W.art.draw(R,V,z)}}function be(S,V){if(V<N)return;let z=F.remote,H=X;if(F.state==="open"){let W="Salon "+F.code+" \xB7 ",R=F.peers.filter(Y=>Y.ready);if(!S)H=W+"quitte la session VR pour utiliser le mode spectateur";else if(F.role!=="vr"&&z&&z.map!==g())H=W+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(F.role!=="vr"&&z&&!z.ready)H=W+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(F.role==="player"&&z&&z.protocol<5)H=W+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(F.role!=="vr"&&m(z))H=W+"h\xF4te connect\xE9";else if(F.role==="vr"){let Y=R.filter(m),Z=Y.filter(fe=>fe.role==="player").length,le=Y.some(fe=>fe.role==="pc");H=W+"tu h\xE9berges \xB7 "+(Z+1)+" joueur"+(Z?"s":""),le&&(H+=" \xB7 spectateur connect\xE9"),!Z&&R.some(fe=>!m(fe))&&(H+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}T.textContent!==H&&(T.textContent=H,a?.())}function Oe(S){let{inVR:V,time:z,dt:H,position:W,yaw:R,camera:Y,rig:Z,keys:le,avatar:fe,bodies:P}=S;if(!F.role){w();return}let v=F.role!=="pc"||!V,U=performance.now(),Q=g(),ee=F.role!=="vr"?F.remote:null,J=v&&m(ee);if(!J&&d!==-1&&w(),D(H,J,U),Re(v,z,H,U),F.role==="pc"&&!V){(S.actions??le).delete("KeyC")&&j();let ue=B===3&&J?[...c.values()].find(he=>he.type===HA)?.mesh:null,ce=J?l.get(ee.id)?.art?.model:null;ue?(Ce.set(0,0,-.23).applyQuaternion(ue.quaternion),Z.position.copy(ue.position).add(Ce),Z.rotation.set(0,0,0),Y.position.set(0,0,0),Y.quaternion.copy(ue.quaternion),Z.updateMatrixWorld(!0),W.copy(Z.position)):ce&&(B===1||B===2)?(Ce.set(0,.72,B===1?-2.7:2.7).applyAxisAngle(Rx,ce.rotation.y),Pe.copy(ce.position).add(Ce),Z.position.lerp(Pe,1-Math.exp(-H*11)),Y.position.set(0,0,0),Z.updateMatrixWorld(!0),Y.lookAt(ce.position),Y.updateWorldMatrix(!0,!1),W.copy(Z.position)):_e(S)}F.tick({x:W.x,y:W.y,z:W.z,yaw:R,map:Q,ready:v,avatar:v&&F.role!=="pc"?fe:null,objectFeed:v&&F.role==="vr"&&P?ue=>u.capture(ue,P):null}),U-O>=150&&(O=U,be(v,U))}function ze(S){let V=l.get(S)?.pose;return m(V)?V:null}return{update:Oe,getPeer:ze,connect:de,leave:()=>F.leave(),get caption(){return T.textContent},handMotion(S,V){return l.get(S)?.handMotion[V]},sendAction(S){return F.sendAction(S,g())},sendShot(S,V){F.queueShot(S,V,g())},get stats(){return F.stats},get role(){return F.role},get connected(){return m(F.remote)},get remoteSpectator(){return F.peers.find(S=>S.role==="pc"&&m(S))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(S){for(let V of c.values())V.mesh.visible&&S(V.mesh)}}}function wh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let f=n[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,f=[];for(let d=0;d<n.length;++d){let h=n[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(f)}for(let u in s){let f=Lx(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][d]);let p=Lx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Lx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let d=0,h=u.count;d<h;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+f,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Ah=0,XA=1,YA=new _,Ux=new tl,wp=new Pn,Fx=new _,Th=new In,Eh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ch,this.unassigned=new Ch,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Tp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new _;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let f=u!==0?-c/u:0;if(!(f<=0)&&(u>0?s=Math.min(f,s):r=Math.max(f,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,YA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Ah){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let d=0;d<3;d++){let h=r[d].point.getComponent(d)-i[d].point.getComponent(d);h>s&&(s=h,o=d)}let a=i[o],l=r[o],c,u;s=0,Ux.set(a.point,l.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l){Ux.closestPointToPoint(p.point,!0,Fx);let x=Fx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,wp.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(wp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let f=[];if(wp.distanceToPoint(u.point)<0){f.push(xi.create(a,l,c),xi.create(u,l,a),xi.create(u,c,l),xi.create(u,a,c));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge(h)),f[d+1].getEdge(1).setTwin(f[h+1].getEdge(0))}}else{f.push(xi.create(a,c,l),xi.create(u,a,l),xi.create(u,l,c),xi.create(u,c,a));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge((3-d)%3)),f[d+1].getEdge(0).setTwin(f[h+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(f[d]);for(let d=0,h=e.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>s&&(s=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Ah&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=XA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===Ah&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=xi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},xi=class n{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=Ah,this.edge=null}static create(e,t,i){let r=new n,s=new pl(e,r),o=new pl(t,r),a=new pl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Th.set(e.point,t.point,i.point),Th.getNormal(this.normal),Th.getMidpoint(this.midpoint),this.area=Th.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},pl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Tp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Ch=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var ir=class extends $e{constructor(e=[]){super();let t=[],i=[],s=new Eh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var Nx=48,ZA=3,jA=128,Bx=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),JA=(n,e,t)=>Math.max(e,Math.min(t,n)),QA=()=>structuredClone(Bx.shield),ml=(n,e,t,i)=>Number.isFinite(n)?JA(n,t,i):e;function Ph(n){let e=n?.mode==="lathe"?Bx.bottle:QA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Nx?n.points.map(o=>[ml(o?.[0],0,-1.5,1.5),ml(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:ml(n?.depth,e.depth,.025,1.5),bevel:ml(n?.bevel,e.bevel,0,.15),segments:Math.round(ml(n?.segments,32,ZA,jA))}}function Ox(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Rh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function $A(n,e,t,i){let r=Rh(n,e,t),s=Rh(n,e,i),o=Rh(t,i,n),a=Rh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function KA(n){let e=Ph(n),t=e.mode==="lathe"?e.points:Ox(e);if(t.length<3||t.length>Nx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&$A(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function zx(n){let e=Ph(n),t=KA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([d,h])=>new xe(Math.max(0,d),h));r[0].y>r.at(-1).y&&r.reverse(),r[0].x>0&&r.unshift(new xe(0,r[0].y)),r.at(-1).x>0&&r.push(new xe(0,r.at(-1).y)),i=new Ya(r,e.segments);let s=[],o=i.attributes.position,a=new _,l=new _,c=new _,u=new _,f=i.index.array;for(let d=0;d<f.length;d+=3)a.fromBufferAttribute(o,f[d]),l.fromBufferAttribute(o,f[d+1]),c.fromBufferAttribute(o,f[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&s.push(f[d],f[d+1],f[d+2]);i.setIndex(s)}else{let r=Ox(e),s=new fi;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Qi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ft(new Float32Array(r*2),2))}return i}var Fn=Math.PI*2,Ih=.84,rr=128;function Pr(n){let e=new Uint8Array(rr*rr*4);for(let i=0;i<rr;i++)for(let r=0;r<rr;r++){let s=(r+.5)/rr,o=(i+.5)/rr,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Ih,1),Math.min(o/Ih,1),r,i),l=(r+i*rr)*4;for(let c=0;c<3;c++)e[l+c]=De.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new hi(e,rr,rr);return t.colorSpace=dt,t.generateMipmaps=!0,t.minFilter=Tn,t.magFilter=an,t.needsUpdate=!0,t}function ms(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new Ie(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Ih,s.getY(l)*Ih):s.setXY(l,.95,.95);return i.setAttribute("color",new ft(a,3)),i}function Ir(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:wh(r),material:new gt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Vx(n,e,t){let i=n/2,r=e/2,s=new fi;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Cr(n,e,t,i,r){return new Qi(Vx(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Rr(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[f,d]=n[u];for(let h=0;h<=e;h++){let p=Fn*h/e,x=t(f,d,p,u);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;f>0&&s.push(g,g+1,m),n[u+1][0]>0&&s.push(g+1,m+1,m)}}let o=new $e;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<n.length;u++){let f=u*(e+1),d=f+e;l.fromBufferAttribute(a,f).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(f,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function gl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new _(0,r,0));continue}for(let s=0;s<e;s++){let o=Fn*s/e;t.push(new _(i*Math.sin(o),r,i*Math.cos(o)))}}return new ir(t)}function eE(){let t=new Za(Vx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=De.clamp(i.getX(l)/.098+.5,0,1),u=De.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Pr((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),f=.5+.5*Math.sin((c*1.5+l*.6)*Fn),d=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:d||p?[222,239,247]:[15+58*u+27*f,27+98*u+54*f,59+108*u+47*f]}),s=[it(Cr(.106,.207,.013,.011,.0019),8425890),it(Cr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Cr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Cr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new Qt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new ln(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new ln(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new ir([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Ir("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function tE(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Rr(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),f=.035*Math.cos(c),d=Math.max(...e.map(h=>Math.exp(-(((l-h+f)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Pr((a,l,c,u)=>{let f=Fn*a,d=(l*2-1)*.275,h=Math.max(0,-Math.sin(f)),p=Math.max(...e.map(y=>Math.exp(-(((d-y+.035*Math.cos(f))/.009)**2)))),x=h**3*p,g=ms(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=gl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ir("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function nE(){let n=Pr((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,f=(s*28+u)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*ms(a,l)-(c&&(f||d)?35:0);return[p*.94,p,p*1.04]}),e=Rr([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Rr([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Qt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Qt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Fn*s/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=gl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ir("wheel","Roue",1.8,r,i,n,.64,.23)}function iE(){let n=Pr((s,o,a,l)=>{let c=ms(a,l),u=o>.26&&o<.34||o>.455&&o<.475,f=c>.98?-44:19*(c-.5)+5*Math.cos(Fn*s*4);return u?[46+f,94+f,117+f]:[240+f,223+f,194+f]}),e=Rr([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new mi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Fn*l/5;return new _(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let r=new ir(i);return Ir("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function rE(){let n=Rr([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Pr((r,s,o,a)=>{let l=9*ms(o,a),c=11*Math.cos(r*Fn*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let f=40+.6*c+8*Math.cos(s*Fn*48+r*Fn*13)+l;return[f,f*1.08,f*1.13]}let u=63+c+l+14*Math.cos(r*Fn*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new po(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new ln(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new ln(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Qt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new ln(.008,12).translate(0,.035,.0336),15633202)],i=gl([[.033,-.143],[.054,.133]],6);return Ir("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function sE(){let n=Rr([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Pr((s,o,a,l)=>{let c=10*ms(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,f=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Fn*s*2));if(e[d]?.[f]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Fn*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new ln(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new po(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new ln(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=gl([[.069,-.112],[.069,.109]],6);return Ir("soda","Canette de soda",.35,r,i,t,.42,.27)}function oE(){let n=Rr([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Pr((r,s,o,a)=>{let l=15*ms(o,a),c=8*Math.cos(r*Fn*4);if(s>.321&&s<.435||s>.536&&s<.635){let f=o%4===0||(o+2*a)%7===0?14:0;return[240+l-f,236+l-f,216+l-f]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Cr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new ln(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=gl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ir("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function aE(){let n=Pr((r,s,o,a)=>{let l=8*ms(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let d=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return d||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Rr([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Cr(.138,.22,.061,.016,.004),14788675),it(Cr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new tn(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Qt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new ln(.004,8).translate(.04,.066,.0397),15817792),it(new ln(.004,8).translate(-.04,.066,.0397),7903100),it(Cr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new _(r,l,o),new _(s,l,o),new _(s,l,a),new _(r,l,a)]);return Ir("radio","Talkie-walkie",.43,new ir(i),t,n,.61,.08)}function kx(){return[eE(),tE(),nE(),iE(),rE(),sE(),oE(),aE()]}var Nn=new We,Gt=new _,zh=new _,lE=new ot,Gx=new WeakMap;function Hh(n){if(n.heightfield||n.objectBody)return null;let e=Gx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=lE.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Gx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function ty(n,e,t){let i=Hh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Vh(n,e,t,i){if(t.heightfield)return _E(n,e,t,i);if(t.objectBody)return hy(n,e,t.objectBody,i);if(!ty(n,e,t))return 0;Nn.copy(t.quaternion).invert(),Gt.copy(n).sub(t.position).applyQuaternion(Nn);let r=t.half;zh.copy(Gt).clamp(t.min,r),i.subVectors(Gt,zh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(Gt.x),a=r.y-Math.abs(Gt.y),l=r.z-Math.abs(Gt.z);return o<=a&&o<=l?i.set(Math.sign(Gt.x)||1,0,0):a<=l?i.set(0,Math.sign(Gt.y)||1,0):i.set(0,0,Math.sign(Gt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new _,sr=new _;function Op(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let f=Vh(n,e,u,rt);if(!f||(n.addScaledVector(rt,f+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let d=i.dot(rt);d<0&&i.addScaledVector(rt,-d*(Math.abs(d)<.55?1:1+r)),sr.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(sr,-Math.min(.95,s*u.friction*o))}return l}var Ap=new _,Fo=[];function Sl(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Fo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,f=Math.min(n.z,e.z)-t,d=Math.max(n.z,e.z)+t;for(let h of i){let p=Hh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&d>=p.minZ&&f<=p.maxZ)&&Fo.push(h)}for(let h=1;h<=o;h++){Ap.copy(n).lerp(e,h/o);for(let p of Fo){let x=Vh(Ap,t,p,rt);if(x)return r.copy(Ap).addScaledVector(rt,x+.001),s.copy(rt),p}}return null}var vl=new _,bl=new _,No=new _,ny=new In,_l=new _;function yi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new _().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");s.has(g)||(s.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=M=>new _().fromBufferAttribute(t,n.index?n.index.getX(M):M),g=x(p),m=x(p+1),y=x(p+2),w=new In(g,m,y).getNormal(new _);w.lengthSq()>.1&&r.push({a:g,b:m,c:y,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new jt().setFromPoints(i).getSize(new _),u=Math.max(1e-4,e**2*.4),f=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:f,thickness:d,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new _().subVectors(p.b,p.a).normalize(),new _().subVectors(p.c,p.b).normalize(),new _().subVectors(p.a,p.c).normalize()]))}}function Wh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Nn.copy(t.quaternion).invert(),Gt.copy(n).sub(t.position).applyQuaternion(Nn),i.faces.every(s=>s.n.dot(vl.subVectors(Gt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)ny.set(s,o,a).closestPointToPoint(Gt,_l),r=Math.min(r,Gt.distanceToSquared(_l));return Math.sqrt(r)}function cE(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Vh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Nn.copy(e.quaternion).invert(),Gt.copy(r.position).sub(e.position).applyQuaternion(Nn),zh.copy(Gt).clamp(e.min,e.half),Gt.distanceToSquared(zh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){vl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Vh(vl,.007,e,No);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(vl),t.copy(No)):Math.abs(c-o)<.003&&No.dot(t)>.98&&(i.lerp(vl,1/++a),o=Math.max(o,c)))}return o}var Dh=new _,uE=new _,Lh=new _,hE=new _,Hx=new We,Wx=new We,qx=new _,Ep={min:0,max:0},Cp={min:0,max:0};function Xx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}qx.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(qx);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function ei(n){return yi(new et(n.x*2,n.y*2,n.z*2))}function qh(n,e,t){let i=hE.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Hx.copy(n.mesh.quaternion).invert(),Wx.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);Xx(n.shape,o,Hx,Ep),Xx(e.shape,o,Wx,Cp);let l=Cp.max-Ep.min-a,c=Ep.max-Cp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Dh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Dh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Lh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Dh.copy(a).applyQuaternion(e.mesh.quaternion).cross(Lh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(uE.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Nn.copy(a.mesh.quaternion).invert(),Gt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Nn);for(let{a:c,b:u,c:f}of a.shape.faces){ny.set(c,u,f).closestPointToPoint(Gt,_l);let d=Gt.distanceToSquared(_l);d<l&&(l=d,Lh.copy(_l))}if(!s(Dh.subVectors(Gt,Lh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var dE=new _;function fE(n,e,t){Nn.copy(e.quaternion).invert(),Gt.copy(n.mesh.position).sub(e.position).applyQuaternion(Nn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Gt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=Gt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Fp(n,dE.copy(t).negate())-r,a=s+Fp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function zp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return cE(n,e,t,i??bl);let r=fE(n,e,t)??qh(n,e,t);return r>0&&i&&sy(n,e,t,i),r}var Up=yi(new pi(1,0).scale(...xh)),Uh={mesh:{position:new _,quaternion:new We},shape:Up,radius:Up.radius,precise:!0};function iy(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Up.radius;Fo.length=0;for(let c of i){let u=Hh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Fo.push(c)}Uh.mesh.quaternion.copy(t);let l=Uh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Fo){let f=u.objectBody;if(f&&(f.owner||l.distanceToSquared(f.mesh.position)>(a+f.radius)**2))continue;let d=f?qh(Uh,f,rt):zp(Uh,u,rt);if(d>0)return r.copy(l).addScaledVector(rt,d+5e-4),s.copy(rt),u}}return null}function wl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!ty(n.mesh.position,n.radius,r))continue;let s=zp(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var Rp=new _,xl=new _,Fh=new _,Pp=new We,Dr=new We,Yx=new We;function Zx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function ry(n,e,t,i,r){let{mesh:s,shape:o}=n;Rp.copy(s.position),Pp.copy(s.quaternion),xl.subVectors(e,Rp);let a=Zx(Pp,t,Dr),l=xl.length()+a*o.radius,c=cy(o),u=Math.max(1,Math.min(ly,Math.ceil(l/c))),f=l>0?Math.min(1,u*c/l):1,d=a*f/u;Fh.set(Dr.x,Dr.y,Dr.z).normalize(),Yx.setFromAxisAngle(Fh,d),xl.multiplyScalar(f/u);for(let x=0;x<u;x++)s.position.add(xl),s.quaternion.premultiply(Yx).normalize(),wl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(xl.subVectors(s.position,Rp).divideScalar(h).clampLength(0,23),.52);let p=Zx(Pp,s.quaternion,Dr);Fh.set(Dr.x,Dr.y,Dr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Fh,.52)}function Fp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Nn.copy(n.mesh.quaternion).invert(),No.copy(e).applyQuaternion(Nn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(No));return t}var Uo=new _,kh=new _,pE=new _,Ip=new _,Do={},Lo={};function jx(n,e,t,i){let{mesh:r,shape:s}=n,o=Fp(n,pE.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Uo),i.minV=i.maxV=r.position.dot(kh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(No)<o-.0015)continue;Ip.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Ip.dot(Uo),c=Ip.dot(kh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function sy(n,e,t,i){Math.abs(t.y)<.8?Uo.set(-t.z,0,t.x).normalize():Uo.set(t.y,-t.x,0).normalize(),kh.crossVectors(t,Uo),jx(n,t,-1,Do),jx(e,t,1,Lo);let r=(Math.max(Do.minU,Lo.minU)+Math.min(Do.maxU,Lo.maxU))*.5,s=(Math.max(Do.minV,Lo.minV)+Math.min(Do.maxV,Lo.maxV))*.5;i.copy(t).multiplyScalar((Do.plane+Lo.plane)*.5).addScaledVector(Uo,r).addScaledVector(kh,s)}var Jx=new _;function Gh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Jx.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Jx)}}function Qx(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function oy(n){return!n.owner&&!n.frozen}var gs=new _,xs=new _,yl=new _,$x=new _,Np=new _,Bp=new _,mE=new _;function Nh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function ay(n,e,t,i){let{mesh:r,shape:s}=n.body;return Nn.copy(r.quaternion).invert(),Np.crossVectors(e,t),i.copy(Np).applyQuaternion(Nn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Bh(n,e,t){return n?.inverseMass?(ay(n,e,t,Bp),n.inverseMass+Np.dot(Bp)):0}function Oh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(ay(n,e,t,Bp),i))}function Dp(n){return n.friction??n.spec?.friction??.78}function Kx(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Dp(s)*Dp(o)):Math.min(Dp(s),t.friction??.78);gs.subVectors(bl,s.mesh.position),o&&xs.subVectors(bl,o.mesh.position),Nh(n,gs,yl).sub(Nh(e,xs,$x));let l=yl.dot(rt),c=!1;if(l<-1e-5){let f=l<-.8?De.clamp(r*(t?.bounce??1)*(s.spec?.physics?.bounce??1)*(o?.spec?.physics?.bounce??1),0,.98):0,d=-l*(1+f)/(Bh(n,gs,rt)+Bh(e,xs,rt));Oh(n,gs,rt,d),Oh(e,xs,rt,-d),Nh(n,gs,yl).sub(Nh(e,xs,$x)),sr.copy(yl).addScaledVector(rt,-yl.dot(rt));let h=sr.length();if(h>1e-5&&a>0){sr.divideScalar(h);let p=Math.min(d*a,h/(Bh(n,gs,sr)+Bh(e,xs,sr)));Oh(n,gs,sr,-p),Oh(e,xs,sr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let f=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/f),Gh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/f),Gh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function gE(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var ly=96,xE=5;function cy(n){return Math.max(.008,n.thickness*.35)}var Ml={substeps:0,active:0,free:0,sleeping:0};function ey(n,e,t,i){n.velocity.y-=t*e*(n.spec?.physics?.gravity??1)*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(mE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function yE(n,e,t){let i=new jt().setFromCenterAndSize(n.mesh.position,new _),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*vE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function vE(n){return n.sweepGravity??1}function uy(n,e,t,i,r,s){if(Object.assign(Ml,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:Hh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,yE(h,t,i));let f=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=oy(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),g=l.some(({box:w,bounds:M})=>Qx(x,w,M)),m=c.some(w=>w!==h&&w.collidable!==!1&&x.intersectsBox(u.get(w)));if(p&&!g&&!m){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let w=Math.min(h.angular.length(),30),M=h.velocity.length()+w*h.shape.radius+Math.abs(i*h.sweepGravity)*t;f=Math.max(f,Math.ceil(M*t/cy(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new jt,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Gh(y),o.push(y)}for(let h of a)ey(h,t,i,s);f=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(ly,f):1,Object.assign(Ml,{substeps:f,active:o.length,free:a.length});let d=t/f;for(let h=0;h<f;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(ey(x,d,i,s),Gh(p))}for(let p=0;p<xE;p++){let x=!1;for(let g of o)if(g.inverseMass)for(let{box:m,bounds:y}of l){if(!Qx(g.bounds,m,y))continue;let w=zp(g.body,m,rt,bl);w>0&&(x=Kx(g,null,m,w,r)||x)}for(let g of o)g.sweepStart=g.bounds.min.x,g.sweepEnd=g.bounds.max.x;o.sort((g,m)=>g.sweepStart-m.sweepStart);for(let g=0;g<o.length;g++){let m=o[g];for(let y=g+1;y<o.length;y++){let w=o[y];if(w.sweepStart>m.sweepEnd)break;if(!m.inverseMass&&!w.inverseMass||m.body.sleeping&&w.body.sleeping&&m.groundY>.9&&w.groundY>.9||!m.bounds.intersectsBox(w.bounds))continue;let M=qh(m.body,w.body,rt);M<=0||(sy(m.body,w.body,rt,bl),x=Kx(m,w,null,M,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&gE(p,d)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,g=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=g?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):g||(p.sleeping=!1),p.sleeping&&Ml.sleeping++}}function _E(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Lp={mesh:{position:null,quaternion:new We},shape:{sphereRadius:0,normals:[],edges:[]}};function hy(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Lp.mesh.position=n,Lp.shape.sphereRadius=e,qh(Lp,t,i))}function dy(n,e,t,i,r){let s=hy(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&oy(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Ht=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),fy=Ht(-24,24,-51,7),py=34521,Oo={x:0,y:0,z:3},Lr={x:.05,y:1.16,z:5.9},Bo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Ht(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Ht(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Ht(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Ht(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Ht(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Ht(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Ht(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Ht(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Ht(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Ht(9,23,-48,-37),sign:[16,-38.2]}},EP=[Ht(-9,-6,-51,7),Ht(6,9,-51,7),Ht(-24,24,-8,-5),Ht(-24,24,-27,-23),Ht(9,23,-37,-34)],my=[{name:"Glace",bounds:Bo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Bo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Ht(-9,9,-51,7)},{name:"Sol ouest",bounds:Ht(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Ht(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Ht(-24,-23,-51,7)},{name:"Sol est",bounds:Ht(9,23,-51,-48)},{name:"Sol est",bounds:Ht(9,23,-37,7)},{name:"Bordure est",bounds:Ht(23,24,-51,7)}],Tl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},zo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],gy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Xh={x:-19.4,y:.68,z:-3.25},xy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),yy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var ME=[0,1,2,3,4,5,7,8,9,10];function vy(n){gy.forEach(({x:e,z:t},i)=>n(ME[i],new _(e,.8,t)))}function Yh(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Nt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new rs(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Nt(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:yi(t,r),material:new gt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:ei(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of kx()){let r=yi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Vp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Al=null,bE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function ys(n){return typeof n=="string"&&bE.has(n.replace(/^custom-model-game-/,""))}function Zh(n){let e=n?.parts;return ys(n?.id)||ys(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>ys(t?.assetId))}function _y(){if(Al)return Al;let n=Yh(),e=Vp;return Al=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Al.set("chrome-sphere",{geometry:new Nt(.54,2),material:new gt({color:"#c8e6ed",metalness:1,roughness:.16})}),Al}function jh(n){return typeof n=="string"&&_y().has(n)}function kp(n){return _y().get(n)??null}var qp="gorilla-lab-models-v1",Pi=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),SE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,wE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),by=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Hp=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),TE=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),El=(n,e,t,i)=>Number.isFinite(n)?De.clamp(n,e,t):i;function Qh(n){return{gravity:El(n?.physics?.gravity,0,2.5,1),bounce:El(n?.physics?.bounce,0,1.65,1)}}function Sy(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:El(n?.uv?.repeat,.01,100,1),angle:El(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>El(n?.uv?.offset?.[t],-100,100,0))}}var AE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),EE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,CE=/^#[a-f\d]{6}$/i;function My(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ur(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?De.clamp(n[r],t,i):e)}var Wp=new Set(["box","sphere","capsule","convex"]);function RE(n){if(n?.mode==="box")return{mode:"box",center:Ur(n.center,0,-6,6),size:Ur(n.size,.5,.025,12)};let e=Math.round(De.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Wp.has(n.shape)?n.shape:"box",center:Ur(n.center,0,-6,6),size:Ur(n.size,.5,.025,12),rotation:Ur(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Wp.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function vs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Pi.models||JSON.stringify(n).length>Pi.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!Zh(i)).map(i=>{if(typeof i?.id!="string"||!EE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Pi.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:My(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...jh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(AE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:RE(i?.hitbox),...i.physics?{physics:Qh(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!ys(r?.assetId)).map((r,s)=>({name:My(r?.name,`Pi\xE8ce ${s+1}`),...Number.isInteger(r?.group)&&r.group>0&&r.group<=Pi.parts?{group:r.group}:{},shape:r?.shape==="asset"&&jh(r?.assetId)?"asset":Object.hasOwn(wE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&jh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Ph(r?.profile)}:{},position:Ur(r?.position,0,-3,3),rotation:Ur(r?.rotation,0,-360,360),scale:Ur(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&CE.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(TE,r?.zone)?{zone:r.zone}:{},...Object.hasOwn(Hp,r?.finish)?{finish:r.finish}:{},...r?.uv?{uv:Sy(r)}:{},surface:Object.hasOwn(by,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Pi.textureBytes&&SE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Xp(n){try{let e=(n??globalThis.localStorage)?.getItem(qp);if(e&&e.length<=Pi.fileBytes)return vs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function PE(n){switch(n){case"tetrahedron":return new rs(Math.sqrt(3)/2);case"sphere":return new Ln(.5,20,12);case"cylinder":return new Qt(.5,.5,1,20);case"cone":return new Ji(.5,1,20);case"torus":return new mi(.365,.135,8,24);case"capsule":return new br(.28,.44,6,16);case"diamond":return new pi(.5);default:return new et(1,1,1)}}var wy=Object.keys(by),qn=64,Cl=4,Ty=2,Ri;function Ay(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function Ey(){if(Ri)return Ri;let n=qn*Cl,e=qn*Ty,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/qn)*Cl+Math.floor(r/qn),o=Ay(wy[s],r%qn,i%qn),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ri=new hi(t,n,e),Ri.colorSpace=dt,Ri.magFilter=an,Ri.minFilter=Tn,Ri.generateMipmaps=!0,Ri.needsUpdate=!0,Ri}var Gp=new Map;function IE(n){if(Gp.has(n))return Gp.get(n);let e=new Uint8Array(qn*qn*4);for(let i=0;i<qn;i++)for(let r=0;r<qn;r++){let s=Ay(n,r,i),o=(i*qn+r)*4;e.set([s,s,s,255],o)}let t=new hi(e,qn,qn);return t.colorSpace=dt,t.wrapS=t.wrapT=wn,t.magFilter=an,t.minFilter=Tn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Gp.set(n,t),t}function Cy(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function DE(n,e,t){let{projection:i,repeat:r,angle:s,offset:o}=Sy(e),a=De.degToRad(s),l=Math.cos(a),c=Math.sin(a),{position:u,normal:f,uv:d}=n.attributes,h=new _,p=new _;for(let x=0;x<u.count;x++){let g=d.getX(x),m=d.getY(x);if(i==="metric"){h.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(f,x);let y=Math.abs(p.x),w=Math.abs(p.y),M=Math.abs(p.z);y>=w&&y>=M?(g=h.z,m=h.y):w>=M?(g=h.x,m=h.z):(g=h.x,m=h.y)}d.setXY(x,(g*l-m*c)*r+o[0],(g*c+m*l)*r+o[1])}}function Jh(n,e=new _(...n.scale)){let t=n.shape==="asset"?kp(n.assetId):null,i=n.shape==="custom"?zx(n.profile):t?.geometry?.clone()??PE(n.shape),r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.attributes.uv||r.setAttribute("uv",new Ne(new Float32Array(r.attributes.position.count*2),2)),n.uv&&DE(r,n,e);let s=n.rotation.map(De.degToRad);r.scale(...n.scale),r.rotateX(s[0]),r.rotateY(s[1]),r.rotateZ(s[2]),r.translate(...n.position);let o=new Ie(n.color),a=r.attributes.position.count,l=new Float32Array(a*3),c=r.attributes.uv,u=wy.indexOf(n.surface),f=u%Cl,d=Math.floor(u/Cl),h=r.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&h?(l[p*3]=h.getX(p)*o.r,l[p*3+1]=h.getY(p)*o.g,l[p*3+2]=h.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(f+.05+c.getX(p)*.9)/Cl,(d+.05+c.getY(p)*.9)/Ty);return r.setAttribute("color",new ft(l,3)),r}function LE(n){let e=n?.shape==="asset"?kp(n.assetId):null,t=Hp[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new Ti().load(n.texture);a.colorSpace=dt,a.wrapS=a.wrapT=wn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=wn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Ie(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:r}=t??Hp.original;if(!n?.texture)return new gt({vertexColors:!0,map:n?.uv?IE(n.surface):Ey(),roughness:i,metalness:r});let s=new Ti().load(n.texture);return s.colorSpace=dt,s.wrapS=s.wrapT=wn,new gt({vertexColors:!0,map:s,roughness:i,metalness:r})}function Fr(n){return n?.parts?.some(Cy)?n.parts.map(LE):new gt({vertexColors:!0,map:Ey(),roughness:.68})}function $h(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ri&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Rl(n,e=null){let t=n.map(r=>{if(!e||r.uv?.projection!=="metric")return Jh(r);let s=new Jt(...r.rotation.map(De.degToRad),"ZYX"),o=new _(...r.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(s).multiply(e).length())));return Jh(r,o)}),i=wh(t,n.some(Cy));return t.forEach(r=>r.dispose()),i.center(),i.computeBoundingBox(),i}function Vo(n,e=null){let t=Rl(n.parts),i=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&n.parts.some(r=>r.uv?.projection==="metric")&&(t.dispose(),t=Rl(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function Yp(n){let e=new jt;for(let t of n.parts??[]){let i=Jh(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function Ry(n){return Yp(n).getSize(new _)}function Py(n){let e=Yp(n),t=e.getCenter(new _),i=e.getSize(new _),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":Wp.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?De.clamp(r.precision,8,96):48,center:s?new _(...r.center):t,size:s?new _(...r.size):i,rotation:s?new _(...r.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:i}}function UE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(f=>f.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function FE(n,e=null){let t=Py(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let r=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),s=r.toArray(),o=Math.max(...s),a=s.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...s.filter((f,d)=>d!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new br(l,c,Math.max(2,Math.round(i/8)),i):new Ln(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/r.x,1/r.y,1/r.z),u}if(t.shape==="convex"&&n.parts?.length){let r=Rl(n.parts),s=UE(r,t.precision);if(r.dispose(),s.length>=4)try{let o=new ir(s),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new et(1,1,1)}function Pl(n,e=null){let t=Py(n),i=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5)),r=e?new _(e.x,e.y,e.z):i.clone(),s=t.size.clone().multiply(r).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(r).divide(i),a=FE(n,s);return a.scale(s.x,s.y,s.z),a.rotateX(De.degToRad(t.rotation.x)),a.rotateY(De.degToRad(t.rotation.y)),a.rotateZ(De.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Iy(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=Yp(n),i=t.getCenter(new _),r=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),s=e?e.clone().divide(r):new _(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Jh(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new _).sub(i).multiply(s),size:l.getSize(new _).multiply(s).max(new _(.01,.01,.01))};return a.dispose(),[c]})}function Dy(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Rl(e.parts),i=t.boundingBox.getSize(new _);return{id:e.id,name:e.name,properties:e.properties,physics:Qh(e),geo:t,material:Fr(e),collisionGeo:Pl(e),mass:De.clamp(i.x*i.y*i.z*9,.18,12)}})}function Ly(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Rl(e.parts),i=t.boundingBox.getSize(new _),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new ke(t,Fr(e));s.castShadow=!0;let o=new At;return o.add(s),o}var NE=256,Ny=1/2.6**2,BE=1e4,ko=1e4,OE=10,zE=10,VE=256,kE=16,ed=24,Uy=new WeakMap,Ii=De.clamp,Di=De.lerp,td=n=>n*n*(3-2*n);function xt(n,e,t,i){return Number.isFinite(n)?Ii(n,e,t):i}function By(n){if(!n)return null;let e=vs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var GE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Oy(n,e=kE){return Math.round(xt(n,1,NE,e))}function HE(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return xt(n[e+"Density"],0,ko,0);let s=xt(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return xt(o/t,0,ko,0)}var WE=["grass","shrub","model"],qE=["keep","fit","stretch"],XE=/^#[a-f\d]{6}$/i,YE=10;function ZE(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(xt(n.minHeight,-300,300,-300),xt(n.maxHeight,-300,300,300)),[r,s]=e(xt(n.minX,0,100,0),xt(n.maxX,0,100,100)),[o,a]=e(xt(n.minZ,0,100,0),xt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:r,maxX:s,minZ:o,maxZ:a,maxSlope:xt(n.maxSlope,0,90,90),yaw:xt(n.yaw,-360,360,0),yawVariation:xt(n.yawVariation,0,360,360)}}function jE(n){return n?{x:xt(n.x,-256,256,0),z:xt(n.z,-256,256,0),radius:xt(n.radius,.1,512,5),blend:xt(n.blend,0,1,.5)}:null}function Fy(n={}){let e=By(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",r=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,OE).map(s=>XE.test(s)?s:i);for(;r.length<2;)r.push(r.at(-1)??i);return{kind:t,model:e,density:xt(n.density,0,ko,1),colors:r,seed:Math.round(xt(n.seed,0,2147483647,1)),size:xt(n.size,.05,ko,1),fit:qE.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:xt(n.variation,0,zE,0),...n.scatter?{scatter:ZE(n.scatter)}:{}}}function JE(n,e){return Array.isArray(n.rules)?n.rules.slice(0,BE).filter(t=>t&&typeof t=="object"&&WE.includes(t.kind)).filter(t=>t.kind!=="model"||By(t.model)).map(Fy):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,r,s])=>{let o=HE(n,t,e,i,r),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Fy({kind:t,model:a,density:o,seed:n.seed,size:xt(n[t+"Size"],.1,5,1)*(a?s:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Go(n={},e=1){let t=Oy(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(xt(n?.seed,0,2147483647,1)),amplitude:xt(n?.amplitude,0,12,0),frequency:xt(n?.frequency,.015,2,.12),octaves:Math.round(xt(n?.octaves,1,YE,3)),roughness:xt(n?.roughness,.15,.95,.42),ridge:xt(n?.ridge,0,1,0),edgeFade:xt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:jE(n.reliefArea)}:{},rules:JE(n??{},e),textureDensity:xt(n?.textureDensity,1e-4,VE,Ny),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&GE.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>xt(r,-ed,ed,0)):null}}function zy(n,e,t,i){let r=Ii(t,0,e),s=Ii(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,f=a*u+o,d=n[f],h=n[f+1],p=n[f+u],x=n[f+u+1];return l+c<=1?d+(h-d)*l+(p-d)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Vy(n,e){let t=Oy(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>zy(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function ti(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Kh(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=td(n-i),o=td(e-r),a=Di(ti(i,r,t),ti(i+1,r,t),s),l=Di(ti(i,r+1,t),ti(i+1,r+1,t),s);return 2*Di(a,l,o)-1}function Ho(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:f,reliefArea:d,heights:h}=i,p=Uy.get(n),x=p&&p.w===e&&p.d===t&&p.detail===r&&p.seed===s&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===f&&p.reliefArea===d;if(x&&p.heights===h)return p;let g=r+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let M=0;M<=r;M++)for(let A=0;A<=r;A++){let C=(A/r-.5)*e,D=(M/r-.5)*t,L=1;if(d){let k=Math.hypot(C-d.x,D-d.z);if(k>=d.radius)continue;d.blend&&(L=td(Math.min(1,(d.radius-k)/(d.radius*d.blend))))}let T=C*a,b=D*a,E=0,O=1,B=0;for(let k=0;k<l;k++){let j=Kh(T*2**k,b*2**k,s+k*13);E+=O*Di(j,1-2*Math.abs(j),u),B+=O,O*=c}let X=f?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(A/r-.5))*2,(.5-Math.abs(M/r-.5))*2)),f*2):1,N=l===3&&c===.42&&u===0&&f===0;m[M*g+A]=L*(N?o*(.62*Kh(T,b,s)+.26*Kh(T*2.03,b*2.03,s+13)+.12*Kh(T*4.13,b*4.13,s+37)):o*E/B*X)}let y=h?m.map((M,A)=>M+h[A]):m,w={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:f,reliefArea:d,heights:h,procedural:m,surface:y};return Uy.set(n,w),w}function nd(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return zy(o,i,(e/r+.5)*i,(t/s+.5)*i)}function Il(n=0){return(Math.round(n/90)%4+4)%4*90}function ky(n){let e=Il(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Zp(n,e,t){let{cos:i,sin:r}=ky(n),s=e-n.x,o=t-n.z;return[i*s-r*o,r*s+i*o]}function QE(n){return Il(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function $E(n,e,t){return n.y+nd(Ho(n),...Zp(n,e,t))}function KE(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,f=0;for(let d=l;d<=c;d++)for(let h=o;h<=a;h++)h===e&&d===t||(u+=r[d*s+h],f++);return u/f}function Gy(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=Ho(n),{detail:l,w:c,d:u,surface:f,procedural:d}=a,[h,p]=Zp(n,e,t),x=Ii(h,-c/2,c/2),g=Ii(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=r**2)return!1;let m=(h/c+.5)*l,y=(p/u+.5)*l,w=c/l,M=u/l,A=Math.max(0,Math.ceil(m-r/w)),C=Math.min(l,Math.floor(m+r/w)),D=Math.max(0,Math.ceil(y-r/M)),L=Math.min(l,Math.floor(y+r/M)),T=Number.isFinite(o)?o-n.y:nd(a,h,p),b=l+1,E=a.heights?.slice()??new Array(b**2).fill(0),O=!1,B=!1;function X(N,k,j){O=!0;let F=k*b+N,ie=E[F],ne;if(i==="raise"||i==="lower")ne=ie+(i==="raise"?1:-1)*s*j;else{let de=i==="flatten"?T:KE(a,N,k);ne=Di(f[F],de,Math.min(1,s)*j)-d[F]}ne=Ii(ne,-ed,ed),!(Math.abs(ne-ie)<1e-7)&&(E[F]=ne,B=!0)}for(let N=D;N<=L;N++)for(let k=A;k<=C;k++){let j=Math.hypot((k-m)*w,(N-y)*M)/r;j<1&&X(k,N,td(1-j))}if(!O){let N=Ii(m,0,l),k=Ii(y,0,l),j=Math.min(l-1,Math.floor(N)),F=Math.min(l-1,Math.floor(k)),ie=N-j,ne=k-F,de=ie+ne<=1,Te=de?1-ie-ne:ie+ne-1,we=de?ie:1-ne,Pe=de?ne:1-ie;if(Te>=Math.max(we,Pe)){let Ce=+!de;X(j+Ce,F+Ce,1)}else we>=Pe?X(j+1,F,1):X(j,F+1,1)}return B&&(n.terrain.heights=E),B}function Hy(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??Ny),f=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],f),f+=6)}let d=new $e;return d.setAttribute("position",new ft(o,3).setUsage(An)),d.setAttribute("uv",new ft(a,2)),d.setIndex(new ft(c,1)),e2(d,n),d}function e2(n,e){let{surface:t}=Ho(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function Wy(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=n,l=Ii((e/s+.5)*r,0,r),c=Ii((t/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),f=Math.min(r-1,Math.floor(c)),d=r+1,h=f*d+u,p=l-u+c-f<=1,x=p?a[h+1]-a[h]:a[h+d+1]-a[h+d],g=p?a[h+d]-a[h]:a[h+d+1]-a[h+1];return i.set(-x*r/s,1,-g*r/o).normalize()}function t2(n,e,t,i){let[r,s]=Zp(n,e,t),{cos:o,sin:a}=ky(n);Wy(Ho(n),r,s,i);let l=i.x,c=i.z;return i.set(o*l+a*c,i.y,-a*l+o*c)}function qy(n,e){let{w:t,d:i}=QE(n);return{mesh:e,heightfield:!0,xMin:n.x-t/2,xMax:n.x+t/2,zMin:n.z-i/2,zMax:n.z+i/2,height:(r,s)=>$E(n,r,s),normalAt:(r,s,o)=>t2(n,r,s,o),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function n2(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new $e;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function i2(){return new Nt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function r2(n,e,t){if(e==="stretch")return new _().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function s2(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(i.minX/100-.5)*n.w,s=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(s-r)*(a-o),c=[],u=new _;if(!l||!e.density)return{requested:0,positions:c,area:l};let f=Math.cos(De.degToRad(i.maxSlope)),d=i.maxSlope<90,h=i.minHeight>-300||i.maxHeight<300,p=(w,M)=>{if(h){let A=n.y+nd(t,w,M);if(A<i.minHeight||A>i.maxHeight)return!1}return!d||Wy(t,w,M,u).y>=f-1e-7},x=1;if(d||h){let w=0,M=32;for(let A=0;A<M;A++)for(let C=0;C<M;C++)p(Di(r,s,(C+.5)/M),Di(o,a,(A+.5)/M))&&w++;x=w/M**2}let g=Math.round(l*x*e.density),m=Math.min(g,ko),y=d||h?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let w=0;w<y&&c.length<m;w++){let M=Di(r,s,ti(w,27,e.seed)),A=Di(o,a,ti(w,27,e.seed+1));p(M,A)&&c.push([M,A])}return{requested:g,positions:c,area:l*x}}function Xy(n){let e=new At,t=Ho(n);e.userData.distribution=[];for(let[i,r]of(n.terrain.rules??[]).entries()){let{requested:s,positions:o,area:a}=s2(n,r,t),l=o?o.length:Math.min(s,ko);if(e.userData.distribution[i]={requested:s,count:l,area:a},!l)continue;let c=r.kind==="grass",u=r.model?r2(Ry(r.model),r.fit,r.size):null,f=r.model?Vo(r.model,u):c?n2():i2();u?f.scale(...u):f.scale(r.size,r.size,r.size),f.computeBoundingBox(),f.translate(0,-f.boundingBox.min.y,0),f.computeBoundingBox();let d=r.model?Fr(r.model):new dn({color:"#ffffff",side:c?cn:ui,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new Ti().load(n.terrain.grassTexture);g.colorSpace=dt,d.map=g,d.userData.ownTexture=!0}let h=new La(f,d,l);h.name=r.kind,h.userData={ruleIndex:i,seed:r.seed,variation:r.variation,collidable:r.collidable,requestedCount:s,positions:o,scatter:r.scatter},h.instanceMatrix.setUsage(An),h.receiveShadow=!0;let p=r.colors.map(g=>new Ie(g)),x=new Ie;for(let g=0;g<l;g++){let m=ti(g,41,r.seed)*(p.length-1),y=Math.floor(m);h.setColorAt(g,x.copy(p[y]).lerp(p[y+1],m-y))}e.add(h)}return o2(e,n),e}function o2(n,e){let t=Ho(e),i=new Vt;for(let r of n.children){let{seed:s,variation:o,positions:a,scatter:l}=r.userData;for(let c=0;c<r.count;c++){let u=a?.[c][0]??(ti(c,27,s)-.5)*.96*e.w,f=a?.[c][1]??(ti(c,27,s+1)-.5)*.96*e.d;i.position.set(u,nd(t,u,f),f),i.rotation.y=l?De.degToRad(l.yaw+ti(c,27,s+2)*l.yawVariation):ti(c,27,s+2)*Math.PI*2,i.scale.setScalar(Di(Math.max(.05,1-o),1+o,ti(c,27,s+3))),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Yy(n,e){let t=[],i=new ot,r=new _,s=new We().setFromAxisAngle(new _(0,1,0),Il(n.yaw)*Math.PI/180),o=new _(n.x,n.y,n.z),a=new _(.005,.005,.005);for(let l of e?.children??[]){if(!l.userData.collidable)continue;let c=l.geometry.boundingBox,u=c.getCenter(new _),f=c.getSize(new _).multiplyScalar(.5);for(let d=0;d<l.count;d++){l.getMatrixAt(d,i);let h=new _,p=new We;i.decompose(h,p,r),h.add(u.clone().multiply(r).applyQuaternion(p)),h.applyQuaternion(s).add(o),p.premultiply(s),t.push({position:h,quaternion:p,half:f.clone().multiply(r).max(a)})}}return t}function Zy(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),$h(e.material),e.dispose();n.clear(),n.removeFromParent()}}var id=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],jy=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Jy(n,e=jy[n]){n=Math.max(0,Math.min(id.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:jy[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let f of[0,-512])for(let d of[0,-512])i.fillRect(a+f,l+d,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Qy({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function f(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function d(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>d(h,!0),n.onpointercancel=n.onlostpointercapture=h=>d(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:f,consumeJump(){let h=c;return c=!1,h}}}var a2=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function $y(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){a2.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Ky(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var ev=.065,l2=.08,rd=.035,jp=.003,sd=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:f,normal:d,offset:h}=u,p=f.surface;if(u.released=null,f.surface=null,f.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=f.valid&&(!f.held||f.hasSupport)&&s.movement!==!1,!f.valid)continue;let x=f.locomotionTarget.subVectors(f.target,e).clampLength(0,c).add(e);if(f.hasSupport?h.copy(f.supportOffset):h.copy(nr).applyQuaternion(f.mesh.quaternion),!u.eligible)continue;let g=p&&o.includes(p)&&!p.objectBody?.owner,m=g&&p.objectBody;m&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(m.mesh.quaternion).add(m.mesh.position),d.copy(u.localNormal).applyQuaternion(m.mesh.quaternion)),g&&f.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),g||this.to.add(this.flight),this.to.y-=Math.min(jp,r*t*t);let y=this.sweep(u,this.from,this.to);if(g){let T=this.correction.subVectors(x,f.anchor),b=T.dot(d)<=rd&&f.anchor.distanceToSquared(e)<=(c+rd)**2&&T.lengthSq()<=Math.max(.12,c*.5)**2;b&&(!y||y===p&&this.hitNormal.dot(d)>.7)?(y=p,this.hit.copy(f.anchor).add(h),this.hitNormal.copy(d)):!b&&y===p&&T.dot(d)>rd&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;f.anchor.copy(this.hit).sub(h),d.copy(this.hitNormal);let w=y.friction??.8,M=Math.min(1,Math.max(0,w*(.75+s.grip*.09))),A=Math.max(0,1-Math.abs(d.y)/.28),C=Math.min(.97,Math.max(0,1-M+A*.24+(s.slide-3)*.035)),D=this.correction.subVectors(f.anchor,x);if(D.addScaledVector(d,-D.dot(d)),this.slideTarget.copy(D).multiplyScalar(-C),g&&(this.downhill.set(0,-1,0).addScaledVector(d,d.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*C*Math.max(A,Math.max(0,1-2*M)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(f.anchor).add(h).addScaledVector(d,jp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(d,-jp*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,f.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))f.anchor.copy(this.hit).sub(h),d.copy(this.hitNormal);else if(C>.5&&D.lengthSq()>rd**2)continue}D.subVectors(f.anchor,x),g&&D.dot(d)<0&&D.addScaledVector(d,-D.dot(d)),l.add(D);let L=y.objectBody;if(L){let T=u.inverseRotation.copy(L.mesh.quaternion).invert();u.localAnchor.copy(f.anchor).add(h).sub(L.mesh.position).applyQuaternion(T),u.localNormal.copy(d).applyQuaternion(T)}if(f.surface=y,f.groundContact=d.y>.55,this.contacts++,u.tracked){let T=this.handMotion.subVectors(u.previousTarget,x),b=T.dot(d);T.multiplyScalar(1-C).addScaledVector(d,Math.max(0,b)-b*(1-C)),this.intent.add(T)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=ev;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/ev),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:f,weight:d}=this.settings;if(this.average.lengthSq()<(1.05+.04*d)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*f)/(.72+.056*d)),t.clampLength(0,8.5+.28*f);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=l2,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function c2(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function Jp(n,e=.16,t=26){let i=c2(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function tv(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,Jp(n,i,r)&&(n.hapticCooldown=.08))}function nv({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new _(0,1,0),a=new We,l=0,c=new $i,u=[],f=new Map,d=vx(n,{onShot:(m,y)=>s.sendShot(m,y),impact(m,y,w,M){c.set(m,y),c.far=w;let A=c.intersectObjects(u,!1)[0];if(!A)return null;let C=f.get(A.object);return M&&C&&!C.owner&&!C.frozen&&C.velocity.addScaledVector(y,Math.min(4,2.6/C.mass)),A.distance}}),h={position:new _,quaternion:new We,modelPosition:new _},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:y,inVR:w,enabled:M,remoteWorld:A,dt:C,yaw:D,drop:L,rightHand:T,flatFiring:b}){let E=null,O=!1;if(M)if(w){let B=[...m.session.inputSources].find(N=>N.handedness==="right"),X=B&&m.getPose(B.targetRaySpace,y);if(X){let{position:N,orientation:k}=X.transform;E=h,E.position.set(N.x,N.y-L,N.z).applyAxisAngle(o,D).add(e.position),E.modelPosition.copy(T.valid?T.mesh.position:E.position),E.quaternion.set(k.x,k.y,k.z,k.w).premultiply(a.setFromAxisAngle(o,D)),O=!!B.gamepad?.buttons[0]?.pressed}}else E=h,t.getWorldPosition(E.position),t.getWorldQuaternion(E.quaternion),E.modelPosition.set(.16,-.17,-.43).applyQuaternion(E.quaternion).add(E.position),O=b;if(x=E?p:null,u.length=0,f.clear(),E||l){for(let B of i.boxes)B.mesh?.isMesh&&B.mesh.visible&&u.push(B.mesh);if(A)s.forEachReplica(B=>u.push(B));else for(let B of r)B.mesh.visible&&B.collidable&&!B.owner&&(u.push(B.mesh),f.set(B.mesh,B))}d.update({dt:C,aim:E,firing:O}),O?l=1.3:l=Math.max(0,l-C)}return{update:g,receiveShot({position:m,quaternion:y},w){d.replay(m,new We().copy(y),w),l=1.3},reset(){d.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return d.shotsFired}}}function iv(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function rv(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var _s=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],od=["Naturel","Cellulo","Affiche","R\xE9tro"],ad={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var sv=new WeakMap;function Qp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,sv.set(n,e),n}function Dl(n){if(Array.isArray(n))return n.map(Dl);let e=n.clone(),t=sv.get(n);return t?Qp(e,t):e}function u2(n){let t=new Ln(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Nt(.225,0),r=new ja({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Qp(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function h2(n){let e=new et(.37,.37,.37),t=new gt({color:16777215,roughness:.4});return Qp(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function ov(){let n={value:0};return{props:[u2(n),h2(n)],animate(e){n.value=e}}}var av=new _(0,1,0),lv=new _(0,0,1),d2={left:new We().setFromAxisAngle(lv,Math.PI/2),right:new We().setFromAxisAngle(lv,-Math.PI/2)},f2=new We,p2=new _;function cv(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(av,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(f2.setFromAxisAngle(av,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(d2[n.side]),n.target.copy(n.gripPosition).sub(p2.copy(nr).applyQuaternion(n.mesh.quaternion))}function uv(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let d=globalThis.AudioContext??globalThis.webkitAudioContext;if(d)try{n??=new d,n.state==="suspended"&&await n.resume()}catch{}}function c(d){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let m=e.getChannelData(0);for(let y=0;y<m.length;y++)m[y]=(Math.random()*2-1)*(1-y/m.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),g=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,g.gain.setValueAtTime(De.clamp(d,1,10)*.055,h),g.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(g).connect(n.destination),p.start(h),s++}function u({dt:d,inVR:h,hands:p,grounded:x,travel:g,volume:m,enabled:y}){if(h){p.forEach((w,M)=>{a[M]=Math.max(0,a[M]-d);let A=w.valid&&w.groundContact;A&&!o[M]&&!a[M]&&y&&(c(m),a[M]=.11),o[M]=A});return}r=Math.max(0,r-d),t=x?t+g:0,x&&y&&r===0&&(t>=.64||!i&&g>.025)&&(c(m),t=0,r=.12),i=x}function f(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:f,get count(){return s},get state(){return n?.state??"locked"}}}function hv(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new $e;r.setAttribute("position",new ft(t,3).setUsage(An)),r.setAttribute("color",new ft(i,3).setUsage(An));let s=new ns(r,new wi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Sr(new Ln(1,12,8)).attributes.position,a=new Sr(new pi(1).scale(...xh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,f=new _,d=new WeakMap,h=new _(1,1,1),p=new We,x=new _,g=new _,m=new _,y=new _,w=new _,M=new _,A=new _,C=new _(0,1,0),D={grip:new Ie("#61f6ff"),palm:new Ie("#71ff87"),solid:new Ie("#ffe060"),proxy:new Ie("#ff76df"),movement:new Ie("#fff0af"),normal:new Ie("#ff994e"),velocity:new Ie("#80aaff"),force:new Ie("#ff5454"),rig:new Ie("#cec4ff")},L=0;function T(N,k,j){if(L+2>u){c.truncated=!0;return}N.toArray(t,L*3),j.toArray(i,L++*3),k.toArray(t,L*3),j.toArray(i,L++*3)}function b(N,k,j,F,ie){for(let ne=0;ne<N.count;ne+=2){if(L+2>u){c.truncated=!0;break}x.fromBufferAttribute(N,ne).multiply(F).applyQuaternion(j).add(k),g.fromBufferAttribute(N,ne+1).multiply(F).applyQuaternion(j).add(k),T(x,g,ie)}}function E(N,k,j,F){if(N.sphereRadius){b(o,k,j,y.setScalar(N.sphereRadius),F);return}let ie=l.get(N);if(!ie){let ne=new Set,de=[];for(let Te of N.faces)for(let[we,Pe]of[[Te.a,Te.b],[Te.b,Te.c],[Te.c,Te.a]]){let Ce=[we.toArray().join(","),Pe.toArray().join(",")].sort().join("|");ne.has(Ce)||(ne.add(Ce),de.push(...we.toArray(),...Pe.toArray()))}ie=new Ne(de,3),l.set(N,ie)}b(ie,k,j,h,F)}function O(N,k){let F=(N.xMax-N.xMin)/16,ie=(N.zMax-N.zMin)/16;for(let ne=0;ne<=16;ne++)for(let de=0;de<=16;de++){if(L+2>u){c.truncated=!0;return}let Te=N.xMin+ne*F,we=N.zMin+de*ie;x.set(Te,N.height(Te,we),we),ne<16&&T(x,g.set(Te+F,N.height(Te+F,we),we),k),de<16&&T(x,g.set(Te,N.height(Te,we+ie),we+ie),k)}}function B(N,k,j,F){if(k.lengthSq()<1e-8)return;w.copy(N).addScaledVector(k,j),M.copy(k).normalize(),A.crossVectors(M,C),A.lengthSq()<1e-8?A.set(1,0,0):A.normalize();let ie=Math.min(.09,N.distanceTo(w)*.3);y.copy(w).addScaledVector(M,-ie),T(N,w,F),T(w,x.copy(y).addScaledVector(A,ie*.5),F),T(w,g.copy(y).addScaledVector(A,-ie*.5),F)}function X({settings:N,boxes:k,bodies:j,hands:F,locomotion:ie,velocity:ne,head:de,body:Te,neck:we,proxies:Pe,gravity:Ce,appliedMove:re,playerActive:se,inVR:_e,viewQuaternion:Re}){L=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(N.debugBudget??5)*2e3);let be=(N.debugRange??6)*5,Oe=(ze,S=0)=>!ze||ze.distanceToSquared(de)<=(be+S)**2;if(s.visible=N.debugPalm||N.debugHitboxes||N.debugInvisible||N.debugForces||N.debugBody||N.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(N.debugHitboxes||N.debugInvisible||N.debugMesh){let ze=u;if(N.debugScene!==!1&&k.length&&(u=Math.floor(ze*.65/2)*2),N.debugObjects!==!1)for(let S of j){if(L+2>u){c.truncated=!0;break}if(!(!S.mesh.visible||!Oe(S.mesh.position,S.shape.radius))&&(c.bodies++,N.debugHitboxes&&S.collidable!==!1&&S.blocksPlayer!==!1&&E(S.shape,S.mesh.position,S.mesh.quaternion,S.owner?D.proxy:D.solid),N.debugMesh&&S.mesh.geometry)){let V=S.mesh.geometry,z=V.attributes.position.version,H=d.get(V);H?.version!==z&&(H?.edges.dispose(),H={version:z,edges:new Sr(V)},d.set(V,H)),b(H.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,D.grip)}}if(u=ze,N.debugScene!==!1)for(let S of k){if(L+2>u){c.truncated=!0;break}let V=S.shape?.radius??S.half?.length()??Math.hypot(S.xMax-S.xMin||0,S.zMax-S.zMin||0);if(!Oe(S.position??S.mesh?.position,V))continue;c.boxes++;let z=S.mesh?.isObject3D&&S.mesh.visible;if(N.debugMesh&&z&&S.mesh.geometry){let H=S.mesh.geometry,W=H.attributes.position.version,R=d.get(H);R?.version!==W&&(R?.edges.dispose(),R={version:W,edges:new Sr(H)},d.set(H,R)),b(R.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,D.grip)}(z?!N.debugHitboxes:!N.debugInvisible)||(S.shape?E(S.shape,S.position,S.quaternion,z?D.solid:D.proxy):S.heightfield&&O(S,z?D.solid:D.proxy))}}if(se){if(N.debugBody){if(N.collisions)for(let{position:ze,radius:S}of Pe)b(o,ze,p,y.setScalar(S),D.rig);T(de,we,D.rig),T(we,Te,D.rig)}if(N.debugForces&&(f.set(0,-.22,-.5),Re&&f.applyQuaternion(Re),f.add(de),B(f,ne,.13,D.velocity),B(f,C,-Ce*.038,D.force),B(f,re,5,D.movement),N.debugObjects!==!1)){for(let ze of j)if(!(!ze.mesh.visible||!ze.velocity||!Oe(ze.mesh.position,ze.radius))&&(B(ze.mesh.position,ze.velocity,.13,D.velocity),L+2>u)){c.truncated=!0;break}}if(_e&&(N.debugPalm||N.debugForces))for(let ze of ie.hands){let{hand:S,normal:V,offset:z}=ze;if(S.valid){if(N.debugPalm){b(o,S.gripPosition,p,y.setScalar(.014),D.grip);for(let H=0;H<3;H++)M.set(0,0,0).setComponent(H,.075).applyQuaternion(S.controllerRotation),B(S.gripPosition,M,1,D.grip);w.copy(S.mesh.position).add(z),b(a,w,S.mesh.quaternion,h,D.palm),T(S.gripPosition,w,D.grip),S.hasSupport&&(w.copy(nr).applyQuaternion(S.mesh.quaternion).add(S.mesh.position),b(a,w,S.mesh.quaternion,h,D.grip))}N.debugForces&&S.surface&&B(S.anchor,V,.25,D.normal)}}}c.vertices=L,c.segments=L/2,r.setDrawRange(0,L);for(let ze of["position","color"]){let S=r.attributes[ze];S.clearUpdateRanges(),L&&S.addUpdateRange(0,L*3),S.needsUpdate=!!L}}return{update:X,stats:c}}var $p=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],pv=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Kp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},ld=8e6,Ll=512,Li=1024,dv=512,Wt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,fv=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Ul(n){if(typeof n=="string"){if(n.length>ld)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ll)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ll+" pi\xE8ces.");let e=n.spawn??{},t=n.pieces.filter(i=>!ys(i?.sceneryId)&&!Zh(i?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:fv(n.name,56,"Ma map"),worldSize:Wt(n.worldSize,24,2048,240),spawn:{x:Wt(e.x,-Li,Li,0),y:Wt(e.y,-256,256,.06),z:Wt(e.z,-Li,Li,3),yaw:Wt(e.yaw,-360,360,0)},pieces:t.map((i,r)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let s=Wt(i.w,.05,dv,3),o=Wt(i.d,.05,dv,3),a=i.terrain&&typeof i.terrain=="object"?Go(i.terrain,s*o):null,l=i.model?vs({version:1,models:[i.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:fv(i.name,36,"Pi\xE8ce "+(r+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Wt(i.x,-Li,Li,0),y:Wt(i.y,-256,256,0),z:Wt(i.z,-Li,Li,0),w:s,h:Wt(i.h,.05,256,.5),d:o,pitch:a?0:Wt(i.pitch,-180,180,0),yaw:a?Il(Wt(i.yaw,-360,360,0)):Wt(i.yaw,-360,360,0),roll:a?0:Wt(i.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(i.primitive)?i.primitive:"box",uvScale:Wt(i.uvScale,.05,100,1),uvOffsetX:Wt(i.uvOffsetX,-100,100,0),uvOffsetY:Wt(i.uvOffsetY,-100,100,0),uvRotation:Wt(i.uvRotation,-360,360,0),material:Math.round(Wt(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Wt(i.grip,0,1.5,.8),gravity:Wt(i.gravity,.05,2.5,1),bounce:Wt(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function mv(n){return Ul({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Oo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Jt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Fl(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function gv(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new Jt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new _(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),f=l(n.z+r.z*a),d=a-(c-n.x)*r.x-(u-n.y)*r.y-(f-n.z)*r.z;return c+=r.x*d,u+=r.y*d,f+=r.z*d,![c,u,f].every(Number.isFinite)||Math.abs(c)>Li||Math.abs(f)>Li||u<-256||u>256?null:{...t,x:c,y:u,z:f}}var Nl="gorilla-lab-custom-map-v1";function xv(n){let e=new Blob([JSON.stringify(Ul(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var m2=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function em(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&m2.has(e)):!1:!0}function cd(n,e,t){let i=new et(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function yv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,f=t.getY(c)*i;t.setXY(c,u*s-f*o+a,u*o+f*s+l)}return t.needsUpdate=!0,n}function vv(n){switch(n){case"sphere":return new Ln(.5,24,16);case"cylinder":return new Qt(.5,.5,1,24);case"cone":return new Ji(.5,1,24);case"torus":return new mi(.34,.14,12,32);case"capsule":return new br(.32,.36,8,16);default:return new et(1,1,1)}}function tm(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new _(...a)),r=[],s=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],u=l[1].clone().sub(c).normalize(),f=l.at(-1).clone().sub(c);f.addScaledVector(u,-f.dot(u)).normalize();for(let d=1;d<l.length-1;d++)for(let h of[c,l[d],l[d+1]]){r.push(...h);let p=h.clone().sub(c);s.push(p.dot(u)/2.6,p.dot(f)/2.6)}}let o=new $e;return o.setAttribute("position",new Ne(r,3)),o.setAttribute("uv",new Ne(s,2)),o.computeVertexNormals(),o}function _v({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(R=>R.half&&R.mesh?.isObject3D).map(R=>R.mesh)),c=new At;n.add(c);let u=[],f=[],d=[],h=[],p=new Set,x=new Ti,g=new Map,m=0,y=null,w="",M=-1,A=-1,C="",D="",L=new et(1,1,1),T=tm(),b=new ke(L,new Mt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));b.visible=!1,n.add(b);let E=new $i,O=new _,B=new _,X=document.querySelector("#map-note");function N(R){C=R,X.textContent=R}function k(){d.length>=20&&d.shift(),d.push(JSON.stringify(y))}function j(R,Y){let Z=g.get(R);if(!Z){Z={materials:new Set,texture:null,failed:!1},g.set(R,Z);let le=P=>{if(!(g.get(R)!==Z||Z.failed)){Z.failed=!0;for(let v of Z.materials)v.map=null,v.needsUpdate=!0;Z.texture?.dispose(),P&&N(P)}},fe=x.load(R,P=>{(P.image.width>2048||P.image.height>2048)&&le("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>le());Z.texture=fe,fe.colorSpace=dt,fe.wrapS=fe.wrapT=wn}return Z.materials.add(Y),Y.map=Z.failed?null:Z.texture,Z}function F(){for(let[R,Y]of g)Y.materials.size||(g.delete(R),Y.failed||Y.texture.dispose())}function ie(R){let Y=e.mapMaterial(R.material,s());if(!R.texture&&R.color==="#ffffff")return{material:Y,custom:!1};let Z=Y.clone();return Z.onBeforeCompile=Y.onBeforeCompile,Z.customProgramCacheKey=Y.customProgramCacheKey,Z.color.multiply(new Ie(R.color)),{material:Z,custom:!0,ownTexture:R.texture?j(R.texture,Z):null}}function ne(R){c.remove(R.mesh),R.mesh.geometry.dispose(),R.vegetation&&Zy(R.vegetation),R.custom&&(R.ownTexture?.materials.delete(R.mesh.material),R.model?$h(R.mesh.material):R.mesh.material.dispose())}function de(R,Y){if(R.model){let J=new _(R.w,R.h,R.d),ue=Vo(R.model,J);ue.scale(R.w,R.h,R.d);let ce=Fr(R.model),he=new ke(ue,ce);he.position.set(R.x,R.y,R.z),he.rotation.set(De.degToRad(R.pitch),De.degToRad(R.yaw),De.degToRad(R.roll??0),"YXZ"),he.castShadow=he.receiveShadow=!0,he.userData.mapIndex=Y,R.model.kind==="prop"&&(he.visible=!1),c.add(he);let me=Iy(R.model,J);if(me){let Ge=[];for(let q of me){let ve=q.size.clone().multiplyScalar(.5),Ee=q.center.clone().applyQuaternion(he.quaternion).add(he.position),Ue=he.quaternion.clone();q.mode==="trigger"?h.push({name:q.name,model:R.name,position:Ee,inverse:Ue.invert(),bounds:new jt(ve.clone().negate(),ve)}):Ge.push({position:Ee,quaternion:Ue,half:ve,min:ve.clone().negate(),shape:ei(ve),friction:R.grip,gravity:R.gravity,bounce:R.bounce,zone:!0,type:R.material})}return{mesh:he,colliders:Ge,custom:!0,model:!0}}let te=Pl(R.model,J);te.computeBoundingBox();let pe=te.boundingBox,Be=new _(Math.max(Math.abs(pe.min.x),Math.abs(pe.max.x)),Math.max(Math.abs(pe.min.y),Math.abs(pe.max.y)),Math.max(Math.abs(pe.min.z),Math.abs(pe.max.z))),ye=yi(te);te.dispose();let Se={mesh:he,position:he.position,quaternion:he.quaternion,half:Be,min:Be.clone().negate(),shape:ye,radius:ye.radius,friction:R.grip,gravity:R.gravity,bounce:R.bounce,zone:!0,type:R.material};return{mesh:he,collider:Se,custom:!0,model:!0}}let{material:Z,custom:le,ownTexture:fe}=ie(R),P=R.terrain?Hy(R):R.primitive==="ramp"?tm(R.w,R.h,R.d):R.primitive&&R.primitive!=="box"?vv(R.primitive).scale(R.w,R.h,R.d):cd(R.w,R.h,R.d),v=new ke(yv(P,R),Z);v.position.set(R.x,R.y,R.z),v.rotation.set(De.degToRad(R.pitch),De.degToRad(R.yaw),De.degToRad(R.roll??0),"YXZ"),v.castShadow=v.receiveShadow=!0,v.userData.mapIndex=Y,R.sceneryId==="lab-mirror"&&(v.userData.mirrorSize={w:R.w,h:R.h,d:R.d}),c.add(v);let U=new _(R.w/2,R.h/2,R.d/2),Q={mesh:v,position:v.position,quaternion:v.quaternion,half:U,min:U.clone().negate(),shape:R.primitive==="ramp"?yi(P):ei(U),friction:R.grip,gravity:R.gravity,bounce:R.bounce,zone:!0,type:R.material};if(!R.terrain)return{mesh:v,collider:Q,custom:le,ownTexture:fe};let ee=Xy(R);return ee&&v.add(ee),{mesh:v,collider:qy(R,v),custom:le,ownTexture:fe,vegetation:ee}}function Te(){for(let R of u){let Y=y?.pieces[R.mesh.userData.mapIndex];if(!Y||R.ownTexture||R.model)continue;let Z=e.mapMaterial(Y.material,s());R.custom?R.mesh.material.map!==Z.map&&(R.mesh.material.map=Z.map,R.mesh.material.needsUpdate=!0):R.mesh.material=Z}}function we(){for(let fe of u)ne(fe);u.length=0,f.length=0,h.length=0,p.clear();let R=y?.pieces??[];w=y?"custom-"+ps(JSON.stringify(y)):"";let Y=new Set(R.map(fe=>fe.model?.assetId).filter(Boolean)),Z=new Set(R.map(fe=>fe.sceneryId).filter(Boolean));o.forEach(fe=>{let P=fe.userData?.editorAssetId;fe.visible=!y||!l.has(fe)&&em(y,P,Y,Z)});let le=[];for(let[fe,P]of R.entries()){let v=de(P,fe);u.push(v);for(let U of Yy(P,v.vegetation))le.push({...U,min:U.half.clone().negate(),shape:ei(U.half),friction:P.grip,gravity:P.gravity,bounce:P.bounce,zone:!1,type:P.material})}for(let fe of u)fe.mesh.userData.mirrorSize&&f.push(fe);if(F(),y){let fe=a.filter(v=>!l.has(v.mesh)&&em(y,v.editorAssetId,Y,Z)),P=u.filter((v,U)=>R[U].solid&&R[U].model?.kind!=="prop"&&R[U].model?.properties?.collidable!==!1).flatMap(v=>v.colliders??[v.collider]);e.boxes.splice(0,e.boxes.length,...fe,...P,...le)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),y)try{localStorage.setItem(Nl,JSON.stringify(y))}catch{}else try{localStorage.removeItem(Nl)}catch{}}function Pe(R){let Y=Ul(R);m++,d.length=0,y=Y,M=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),we(),i(y.spawn.yaw),N("Map : "+y.name+" \xB7 "+y.pieces.length+" pi\xE8ces")}function Ce(){m++,y=null,d.length=0,M=A=-1,t.set(0,0,3),we(),i(0),N("Ar\xE8ne int\xE9gr\xE9e")}function re(){Pe({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Fl({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function se(){if(!d.length)return N("Rien \xE0 annuler.");y=Ul(d.pop()),M=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),we(),N("Derni\xE8re modification annul\xE9e.")}function _e(){y?xv(y):N("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Re(R,Y,Z,le){y&&(k(),y.spawn={x:R,y:Y,z:Z,yaw:De.radToDeg(le)},t.set(R,Y,Z),we(),N("Point de d\xE9part m\xE9moris\xE9."))}function be(R,Y,Z,{mode:le,piece:fe,head:P,feet:v}){E.set(R,Y),E.far=12;let U=u.map(te=>te.mesh);le===1&&y?.arenaBase&&!y.editableArena&&U.push(...a.filter(te=>te.heightfield&&!y.pieces.some(pe=>pe.sceneryId===te.editorAssetId)).map(te=>te.mesh));let Q=E.intersectObjects(U,!1),ee=le>=5?Q.find(te=>y?.pieces[te.object.userData.mapIndex]?.terrain):Q[0];if(b.visible=!1,!y)return;if(le>=5){let te=ee?.object.userData.mapIndex,pe=y.pieces[te];if(!pe?.terrain||!Z)return;if(k(),le===9){let Be=fe.terrain?.detail??pe.terrain.detail,ye=Vy(pe.terrain,Be);pe.terrain=Go({...ye,...fe.terrain,heights:ye.heights})}else{let Be={mode:["raise","lower","smooth","flatten"][le-5],radius:fe.brushRadius,strength:fe.brushStrength,target:pe.y};Gy(pe,ee.point.x,ee.point.z,Be)}we(),N("Relief modifi\xE9.");return}if(le===2||le===3||le===4){if(!ee)return;let te=ee.object.userData.mapIndex,pe=y.pieces[te];if(Z&&le===2&&(M=te,A=te,N("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Z&&le===3){if(y.pieces.length===1)return N("Garde au moins une pi\xE8ce dans la map.");k(),y.pieces.splice(te,1),M=A=-1,we(),N("Pi\xE8ce supprim\xE9e.")}Z&&le===4&&(k(),Object.assign(y.pieces[te],{material:fe.material,grip:fe.grip,gravity:fe.gravity,bounce:fe.bounce,solid:fe.solid,texture:fe.texture}),we(),N("Surface modifi\xE9e.")),ee&&(b.geometry=pe.primitive==="ramp"?T:L,b.position.copy(ee.object.position),b.rotation.copy(ee.object.rotation),b.scale.set(pe.w,pe.h,pe.d).multiplyScalar(1.006),b.visible=!0,b.material.color.set(le===3?"#ff8271":"#ffe2a2"));return}if(!ee)return;let J=A>=0?y.pieces[A]:fe;if(ee.object.userData.mapIndex===A)return;O.copy(ee.face.normal).transformDirection(ee.object.matrixWorld);let ue=J.terrain?{...J,x:Math.round(ee.point.x*2)/2,y:ee.point.y,z:Math.round(ee.point.z*2)/2,pitch:0,yaw:J.yaw??0}:gv(ee.point,O,J);if(!ue)return;b.geometry=ue.primitive==="ramp"?T:L,b.position.set(ue.x,ue.y,ue.z),b.rotation.set(De.degToRad(ue.pitch),De.degToRad(ue.yaw),De.degToRad(ue.roll??0),"YXZ"),b.scale.set(ue.w,ue.h,ue.d),b.updateMatrixWorld(!0),b.visible=!0;let ce=new jt().setFromObject(b),he=new jt(new _(P.x-.26,v+.01,P.z-.26),new _(P.x+.26,P.y+.19,P.z+.26)),me=ue.solid&&ce.intersectsBox(he);if(b.material.color.set(me?"#fd7763":"#8be4b9"),Z){if(me)return N("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(A<0&&y.pieces.length>=Ll)return N("Limite de "+Ll+" pi\xE8ces atteinte.");k(),A>=0?(y.pieces[A]=ue,A=-1):y.pieces.push(ue),we(),N("Pi\xE8ce pos\xE9e \xB7 "+y.pieces.length+" pi\xE8ces")}}let Oe=document.querySelector("#map-file"),ze=document.querySelector("#map-url");Oe.onchange=async()=>{let R=Oe.files[0];if(!R)return;let Y=++m;Oe.value="";try{if(R.size>ld)throw Error("Map trop lourde.");let Z=await R.text();Y===m&&Pe(Z)}catch(Z){Y===m&&N(Z.message)}};async function S(R){let Y=++m;try{let Z=new URL(R,location.href);if(!["http:","https:"].includes(Z.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let le=await fetch(Z,{credentials:"omit"});if(Y!==m)return;if(!le.ok)throw Error("URL de map inaccessible ("+le.status+").");if(Number(le.headers.get("content-length"))>ld)throw Error("Map trop lourde.");let P=await le.text();Y===m&&Pe(P)}catch(Z){Y===m&&N(Z.message)}}let V=new ji,z=new _,H=new _;function W(R){if(!h.length)return[];let Y=[],Z=new Set;for(let le of h){V.origin.copy(R).sub(le.position).applyQuaternion(le.inverse),V.direction.set(0,-1,0).applyQuaternion(le.inverse),z.copy(V.origin).addScaledVector(V.direction,1.45);let fe=V.intersectBox(le.bounds,H);le.bounds.containsPoint(V.origin)||le.bounds.containsPoint(z)||fe&&H.distanceToSquared(V.origin)<=1.45**2?(Z.add(le),p.has(le)||Y.push({phase:"enter",part:le.name,model:le.model})):p.has(le)&&Y.push({phase:"exit",part:le.name,model:le.model})}return p=Z,Y}return document.querySelector("#map-load-url").onclick=()=>S(ze.value),document.querySelector("#map-export").onclick=_e,document.querySelector("#map-reset").onclick=Ce,{checkTriggers:W,placedModels:()=>y?.pieces.filter(R=>R.model?.kind==="prop")??[],modelPieces:()=>y?.pieces.filter(R=>!R.terrain&&R.name!=="Sol")??[],refreshMaterials:Te,load:Pe,loadURL:S,reset:Ce,blank:re,undo:se,save:_e,edit:be,recenter:Re,inform:N,mirrors:()=>f,get usesBuiltInMirror(){return!y||y.arenaBase&&!y.editableArena&&!y.pieces.some(R=>R.sceneryId==="lab-mirror")},clearGhost(){b.visible=!1},get active(){return!!y},get builtIn(){return!y||y.arenaBase===!0},get assetLayer(){return y?.assetLayer===!0},hasAsset(R){return!!y?.pieces.some(Y=>Y.model?.assetId===R)},getAssetPiece(R){return y?.pieces.find(Y=>Y.model?.assetId===R)??null},get status(){return C},get yaw(){return y?.spawn.yaw??0},get nodes(){return y?.pieces.length??0},get name(){return y?.name??null},get signature(){return w}}}var nm=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Mv(){let n=new ke(new tn(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+nm+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function bv(n){let e=new ts,t=new Zt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new xe(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+nm+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new ke(new tn(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,f,d)=>{let h=Math.max(0,l.indexOf(d)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,f,{bloom:d,visibleField:h}){if(n.xr.updateCamera(f),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=d?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let w=l[y],M=Math.max(32,Math.round(w.viewport.z)),A=Math.max(32,Math.round(w.viewport.w)),C=a[y];C?(C.width!==M||C.height!==A)&&C.setSize(M,A):C=a[y]=new Dn(M,A,{type:o?Ei:Wn,minFilter:un,magFilter:un,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=y===0&&g,n.setRenderTarget(C),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,f)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Sv(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function wv(n,e,t){function i(c,u,f=.85){let d=c.getWorldPosition(new _),h=c.getWorldQuaternion(new We);e.push({half:u,min:u.clone().negate(),position:d,quaternion:h,mesh:{position:d,quaternion:h},shape:ei(u),friction:f,gravity:1})}let r=[],s=[],o=new dn({color:"#485d5d",flatShading:!0});function a([c,u],f,d){let h=new ke(new et(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new _(.0475,.34,.055));let p=new At;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new ke(new et(.64,.36,.055),new dn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),y=new di(g);y.colorSpace=dt;let w=new ke(new tn(.61,.095),new Mt({map:y}));w.position.set(0,.116,.03),p.add(w);let M=.592/d.length,A=d.map(([D,L],T)=>{let b=new ke(new et(M-.012,.155,.04),new dn({color:"#478086"}));b.position.set(-.296+M*(T+.5),-.045,.046),p.add(b),r.push(b),b.userData.touchWidth=M-.012;let E=document.createElement("canvas");E.width=208,E.height=172;let O=new di(E);O.colorSpace=dt;let B=new ke(new tn(M-.017,.139),new Mt({map:O}));B.position.z=.0205,b.add(B);let X=-1/0;return b.userData.action=()=>{let N=performance.now();N-X<250||(X=N,L(),l(),b.position.z=.036,setTimeout(()=>{b.position.z=.046},115))},{label:D,context:E.getContext("2d"),texture:O}});function C(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(f,17,62,478);for(let D of A){let L=D.context;L.fillStyle="#386269",L.fillRect(0,0,208,172),L.fillStyle="#fff2d5",L.textAlign="center",L.font="bold 27px system-ui";let T=(typeof D.label=="function"?D.label():D.label).split("|");T.forEach((b,E)=>L.fillText(b,104,(T.length>1?68:97)+E*37,188)),D.texture.needsUpdate=!0}y.needsUpdate=!0}s.push(C)}function l(){for(let c of s)c()}return a(Tl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,zo[0])],["Boule",()=>t.spawn(1,zo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,zo[0])],["Vider",t.clear]]),a(Tl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,zo[1])],["Sph\xE8re",()=>t.spawn(5,zo[1])]]),a(Tl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Tl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function Bl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Nr=(n,e,t)=>n+(e-n)*t,Wo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function ud(n,e){let t=Math.floor(n),i=Math.floor(e),r=Wo(0,1,n-t),s=Wo(0,1,e-i);return Nr(Nr(Bl(t,i),Bl(t+1,i),r),Nr(Bl(t,i+1),Bl(t+1,i+1),r),s)}function Tv(n,e){return ud(n,e)*.54+ud(n*2.07+3.4,e*2.07-6.1)*.26+ud(n*4.2+9,e*4.2)*.13+ud(n*8.6,e*8.6-13)*.07}function Av(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),f=Math.max(0,c),d=f**.54,h=s.map((p,x)=>Nr(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,y=0;if(c>.025)if(n){let M=Bl(p+792,l+677);M>.9988&&(y=(M-.9988)*49e3*Wo(.09,.3,c))}else{let[M,A]=r[p],C=2.8*u/(c+.16),D=M*C+3.6,L=A*C-8.1,T=Tv(D,L),b=Tv(D-.12,L-.09);g=Wo(.49,.66,T)*Wo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(T-b)*5+(T-.54)*.8))}let w=n?1:Nr(.94,1,Wo(.05,.34,c));i[x]=Nr(h[0],(139+115*m)*w,g)+y,i[x+1]=Nr(h[1],(154+100*m)*w,g)+y*.94,i[x+2]=Nr(h[2],(178+77*m)*w,g)+y*.86,i[x+3]=255}}let a=new hi(i,1024,512,Un);return a.colorSpace=dt,a.wrapS=wn,a.magFilter=an,a.minFilter=Tn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Ev(){return{day:Av(!1),night:Av(!0)}}function hd(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new di(i);return r.colorSpace=dt,r}function Cv(n,e){let{day:t,night:i}=Ev(),r=new ke(new Ln(180,40,20),new Mt({map:t,side:fn,fog:!1,toneMapped:!1}));n.add(r);let s=hd(128,128,(v,U)=>{let Q=v.createRadialGradient(U/2,U/2,0,U/2,U/2,U/2);Q.addColorStop(0,"#fff8df"),Q.addColorStop(.12,"#fff3bd"),Q.addColorStop(.18,"rgba(255,225,144,.40)"),Q.addColorStop(1,"rgba(255,220,144,0)"),v.fillStyle=Q,v.fillRect(0,0,U,U)}),o=new Da(new oo({map:s,blending:Kn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=xo,a.needsUpdate=!0;let l=new wo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Qa("#daeaff","#88724c",2.25),u=new el("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let f=new _,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(v){h=d[v]?v:0;let U=d[h];c.color.set(U.fill),c.groundColor.set(U.ground),c.intensity=U.hemi,u.color.set(U.sun),u.intensity=U.power,f.set(...U.xyz),u.position.copy(u.target.position).add(f),o.position.copy(f).normalize().multiplyScalar(94),o.material.color.set(U.sun),o.material.opacity=U.glow,r.material.map=h===2?i:t,r.material.color.set(U.sky),n.fog.color.set(U.fog),n.background.set(U.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(v){if(!u.castShadow)return;let U=u.target.position,Q=Math.round(v.x/4)*4,ee=Math.round(v.y/4)*4,J=Math.round(v.z/4)*4;U.x===Q&&U.y===ee&&U.z===J||(U.set(Q,ee,J),u.position.copy(U).add(f))}let g=0;n.background=new Ie(d[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function y(v,U,Q){let[,ee,J]=m[U],ue=512;v.save(),v.scale(Q/512,Q/512),v.fillStyle=ee,v.fillRect(0,0,ue,ue);let ce=U+19;function he(){return ce=Math.imul(ce,1664525)+1013904223>>>0,ce/4294967296}if(v.fillStyle=J,U===16){for(let me=0;me<16;me++)for(let te=0;te<16;te++)(te+me)%2===0&&v.fillRect(te*32,me*32,32,32);v.fillStyle="#ff3957",v.fillRect(253,0,6,512),v.fillRect(0,253,512,6)}else if([0,2,8,15].includes(U)){let me=U===15?32:64;v.globalAlpha=.48;for(let te=0;te<ue;te+=me){v.fillRect(0,te,ue,U===8?3:2);for(let pe=-me;pe<ue;pe+=me)v.fillRect(pe+te/me%2*(U===2?me/2:0),te,2,me)}}else if([4,5,6,7,10,11,12].includes(U)){let me=U===5?38:U===7?64:18;for(let te=0;te<me;te++){v.strokeStyle=J,v.globalAlpha=.08+he()*.22,v.lineWidth=U===5?1+he()*8:1+he()*4;let pe=he()*ue,Be=U===5?.018:.009;v.beginPath();for(let ye=0;ye<=ue;ye+=8){let Se=pe+Math.sin(ye*Be+te)*(U===6||U===7?4:12+te%5*3)+(U===4?ye*.28:0);ye===0?v.moveTo(ye,Se):v.lineTo(ye,Se)}v.stroke()}}else{v.globalAlpha=.27;for(let me=0;me<120;me++){let te=he()*ue,pe=he()*ue,Be=2+he()*6;v.beginPath(),v.arc(te,pe,Be,0,Math.PI*2),v.fill()}}if(U!==16)for(let me=0;me<4400;me++)v.globalAlpha=.05+he()*.1,v.fillStyle=he()>.5?J:"#222324",v.fillRect(he()*ue,he()*ue,1+he()*4,1+he()*3);v.restore()}let w=new Set([0,2,4,5,8,15,16]),M=m.map(([v,U,Q,ee,J,ue],ce)=>{let he=w.has(ce)?512:256,me=hd(he,he,pe=>y(pe,ce,he));me.wrapS=me.wrapT=wn;let te=new gt({map:me,roughness:ee,metalness:J,flatShading:!0,opacity:ue,transparent:ue<1,depthWrite:ue===1});return te.name=v,te}),A=M.map(v=>v.map.image),C=512,D=M.map(v=>new dn({map:v.map,flatShading:!0,opacity:v.opacity,transparent:v.transparent,depthWrite:v.depthWrite})),L={value:0},T={value:.24},b={value:null},E={value:0};function O(){b.value?.dispose(),b.value=hd(512,512,(v,U)=>{v.fillStyle="#ffffff",v.fillRect(0,0,U,U);let Q=U/52,ee=U/64;for(let J of B){if(!J.position||!J.half||J.position.y+J.half.y<.22)continue;let ue=(J.position.x+26)*Q,ce=(J.position.z+54)*ee,he=Math.min(55,J.half.x*Q+5),me=Math.min(72,J.half.z*ee+6);v.save(),v.translate(ue+J.half.y*Q*.2,ce+J.half.y*ee*.24),v.scale(he,me);let te=v.createRadialGradient(0,0,.15,0,0,1);te.addColorStop(0,"rgba(22,37,65,.54)"),te.addColorStop(.58,"rgba(36,54,76,.29)"),te.addColorStop(1,"rgba(38,48,57,0)"),v.fillStyle=te,v.fillRect(-1,-1,2,2),v.restore()}})}for(let v of[...M,...D])v.onBeforeCompile=U=>{U.uniforms.uFocusAmount=L,U.uniforms.uFocusRadius=T,U.uniforms.uLabLightmap=b,U.uniforms.uLabBakedStrength=E,U.vertexShader=`varying vec3 vLabPosition;
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),U.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+U.fragmentShader,U.fragmentShader=U.fragmentShader.replace("#include <map_fragment>",`
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
      `)},v.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let B=[],X=[];function N(v,U,Q,ee,J,ue,ce,he=0,me=0,te=1,pe=1,Be=!1){let ye=new ke(Be?new et(J,ue,ce):cd(J,ue,ce),M[he]);ye.position.set(U,Q,ee),ye.rotation.x=me,ye.receiveShadow=!0,ye.castShadow=!0,n.add(ye);let Se=new _(J/2,ue/2,ce/2),Ge={mesh:ye,position:ye.position,quaternion:ye.quaternion,half:Se,min:Se.clone().negate(),friction:te,gravity:pe,name:v,type:he,shape:ei(Se)};return B.push(Ge),Ge}let k=my.map(({name:v,bounds:U,type:Q=0,friction:ee=.78,gravity:J=1})=>{let{xMin:ue,xMax:ce,zMin:he,zMax:me}=U;return N(v,(ue+ce)/2,-.33,(he+me)/2,ce-ue,.66,me-he,Q,0,ee,J)});for(let v of Object.values(yy))for(let U of v)N(...U);let{xMin:j,xMax:F,zMin:ie,zMax:ne}=fy;N("But\xE9e arri\xE8re",0,1.35,ie+.4,F-j,2.7,.6,2),N("But\xE9e ouest",j+.3,1.05,(ie+ne)/2,.6,2.1,ne-ie,2),N("But\xE9e est",F-.3,1.05,(ie+ne)/2,.6,2.1,ne-ie,2);let{xMin:de,xMax:Te,zMin:we,zMax:Pe}=Bo.hills.bounds,Ce=Te-de,re=Pe-we,se=16,_e=64,Re=new tn(Ce,re,se,_e).rotateX(-Math.PI/2).translate(de+Ce/2,0,we+re/2),be=Re.attributes.uv;for(let v=0;v<be.count;v++)be.setXY(v,be.getX(v)*Ce/2.6,be.getY(v)*re/2.6);let Oe=Re.attributes.position,ze;function S(v){if(ze===v)return;ze=v;let U=ze*.017;for(let Q=0;Q<Oe.count;Q++){let ee=Oe.getX(Q),J=Oe.getZ(Q),ue=Math.sin(Math.PI*De.clamp((ee-de)/Ce,0,1)),ce=Math.min(1,(J-we)*.48,(Pe-J)*.48),he=.93+.56*Math.sin(J*.36+U)+.32*Math.cos(ee*.67+J*.26+U*1.4)+.19*Math.sin(J*.81+U*.67);Oe.setY(Q,Math.max(0,ue*ce*he))}Oe.needsUpdate=!0,Re.computeVertexNormals(),Re.computeBoundingSphere()}S(py);let V=new ke(Re,M[3]);V.userData.editorAssetId="lab-hill",V.receiveShadow=V.castShadow=!0,n.add(V);let z=(v,U)=>{let Q=De.clamp((v-de)/Ce*se,0,se-1e-6),ee=De.clamp((U-we)/re*_e,0,_e-1e-6),J=Math.floor(Q),ue=Math.floor(ee),ce=Q-J,he=ee-ue,me=se+1,te=ue*me+J,pe=Oe.getY(te),Be=Oe.getY(te+1),ye=Oe.getY(te+me),Se=Oe.getY(te+me+1);return ce+he<=1?pe+(Be-pe)*ce+(ye-pe)*he:Se+(ye-Se)*(1-ce)+(Be-Se)*(1-he)};B.push({heightfield:!0,mesh:V,editorAssetId:"lab-hill",height:z,...Bo.hills.bounds,friction:.81,gravity:1});function H(v,U,Q,ee,J=1.45){let ue=hd(384,72,(he,me,te)=>{he.fillStyle="#202a32",he.fillRect(0,0,me,te),he.fillStyle=ee,he.font="bold 31px system-ui",he.textAlign="center",he.fillText(v,me/2,48,me-20)}),ce=new ke(new tn(3.2,.6),new Mt({map:ue,side:cn}));ce.position.set(U,J,Q),n.add(ce),X.push(ce)}for(let v of Object.values(Bo)){H(v.name.toLocaleUpperCase("fr"),...v.sign,v.color);let{xMin:U,xMax:Q,zMin:ee,zMax:J}=v.bounds,ue=new Fa(new $e().setFromPoints([new _(U,.025,ee),new _(Q,.025,ee),new _(Q,.025,J),new _(U,.025,J)]),new wi({color:v.color,transparent:!0,opacity:.72}));n.add(ue),X.push(ue)}H("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),H("MURS HAUTS",3,-31,"#e8d2ff"),H("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let W=new gt({color:"#c8e6ed",metalness:1,roughness:.16}),R=new ke(new Nt(.54,2),W);R.userData.editorAssetId="chrome-sphere",R.position.set(Xh.x,Xh.y,Xh.z),R.castShadow=!0,n.add(R);let Y=m.map((v,U)=>{let{x:Q,z:ee}=xy(U);return N("\xC9chantillon "+m[U][0],Q,.325,ee,.65,.65,.65,U,0,1,1,!0).mesh}),Z=new ln(1,12).rotateX(-Math.PI/2),le=new Mt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function fe(v){let U=new ke(Z,le);return U.scale.setScalar(v),n.add(U),U}function P(v,U,Q,ee,J,ue,ce,he){let me=U>=3;e.shadowMap.enabled=me,u.castShadow=me,le.opacity=U===2?.17:.11,E.value=he?.38+Q*.04:0;let te=U>=9?2048:U>=6?1024:U>=4?512:256;u.shadow.intensity=.45+U*.055,u.shadow.radius=.65+U*.12;let pe=13+U*1.2;Object.assign(u.shadow.camera,{left:-pe,right:pe,top:pe,bottom:-pe}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==te&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(te,te)),o.visible=J,ce!==C&&(C=ce,M.forEach((ye,Se)=>{let Ge=ye.userData.texture??ye.map,q=w.has(Se)?ce:Math.min(256,ce);if(Ge.image.width===q)return;let ve=document.createElement("canvas");ve.width=ve.height=q;let Ee=ve.getContext("2d");q>512?y(Ee,Se,q):Ee.drawImage(A[Se],0,0,q,q);let Ue=new di(ve);Ue.colorSpace=Ge.colorSpace,Ue.wrapS=Ge.wrapS,Ue.wrapT=Ge.wrapT,Ue.repeat.copy(Ge.repeat);for(let Me of[ye,D[Se]])Me.userData.texture=Ue,Me.map=Ue,Me.needsUpdate=!0;Ge.dispose()}));let Be=v>=4;for(let ye of B)ye.mesh?.isMesh&&!ye.zone&&(ye.mesh.material=Be?M[ye.type]:D[ye.type]);V.material=Be?M[3]:D[3];for(let ye=0;ye<Y.length;ye++)Y[ye].material=Be?M[ye]:D[ye];M.forEach((ye,Se)=>{for(let Ge of[ye,D[Se]])Ge.userData.texture||(Ge.userData.texture=Ge.map),Ge.map=ue?Ge.userData.texture:null,Ge.color.set(ue?"#ffffff":m[Se][1]),Ge.needsUpdate=!0}),g=ee?.21+Q*.067:0,W.metalness=ee?.95:.1,W.roughness=ee?.13:.46,r.visible=v>=2,p(h)}return{boxes:B,floors:k,probe:R,display:Y,visual:P,shadow:fe,setTimeOfDay:p,centerShadows:x,get hillSeed(){return ze},setHillSeed:S,bakeLightmap:O,mapMaterial:(v,U)=>U>=4?M[v]:D[v],builtObjects:[...B.map(v=>v.mesh).filter(v=>v?.isObject3D),R,...X],materials:[...M,...D],focus(v,U,Q){L.value=v?U*.75:0,T.value=.07+Q*.058}}}var u_="R38.7",Or=document.getElementById("game");Or instanceof HTMLCanvasElement||(Or=document.createElement("canvas"),Or.id="game",Or.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Or));var As=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ze;try{Ze=new dh({canvas:Or,antialias:!As,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ze.xr.enabled=!0;Ze.xr.setReferenceSpaceType("local-floor");Ze.shadowMap.type=nl;Ze.shadowMap.autoUpdate=!1;var Rv=-1/0;Ze.toneMapping=Su;Ze.toneMappingExposure=1.15;var Et=new ts;Et.fog=new Pa("#a6d4ea",55,135);var mt=new At,Ed=new At,Kt=new Zt(70,1,.035,210);mt.add(Ed);Ed.add(Kt);Et.add(mt);var wt=Cv(Et,Ze),g2=bv(Ze),yd=Mv();Et.add(yd);var x2=Sv(wt.probe),G=rv(As),y2={...G};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(G.stepVolume=n)}catch{}var kr=uv();for(let n of["pointerdown","keydown"])addEventListener(n,kr.unlock,{passive:!0});var Zo=hv(Et),_i=Qm(),im=0,Pv=0,Iv=0;addEventListener("error",n=>_i.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>_i.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var Ms={normal:new _,surface:null},vd=[.18,.17,.105].map(n=>({radius:n,position:new _})),_m=new _(Oo.x,Oo.y,Oo.z);mt.position.copy(_m);var $t=new _,qo=new _,Rt=new _,Dv=new _,ni=new _,_n=new _,Lv=new _,Ko=new _,or=new _,Uv=new _,Br=new _,Fv=new _,Ol=new _,v2=.105,dd=new _,_d=!1,Fi=!1,Mm=0,bm=null,Gl=[],Sm=100,qt=new _(0,1,0),dr=new We,bt=0,ur=0,Es=0,ri=0,Ts=NaN,h_={armed:!0},rm=0,bs=0,sm=0,fd=0,Jo=0,Qo=0,$o=0,nn=G.quality,Hl=72,Ui=0,Xt=!1,d_="left",ct=new URLSearchParams(location.search).has("room")?5:0,wm=0,Tm=0,Am=0,Ft=!0,Nv=0,_2=[],pd=[],Gr=wt.boxes,M2=new Nt(1,0),f_=1+Math.floor(Math.random()*(ph.length-1)),p_=mh(f_),{hand:b2,fur:S2}=p_;function w2(n,e,t,i,r,s,o,a){let l=new ke(M2,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Cd=Xp(localStorage),T2=Cd.models.length?"|atelier-"+ps(JSON.stringify(Cd)):"",Bi=Ly(Cd)??p_.createHead();Bi.visible=!1;Et.add(Bi);var jo=new _,Md=new We,Bv=new _,A2=new _,Ov=new Jt(0,0,0,"YXZ"),fm=new _,om=new _,lr=new xe,zv=new We,Xl=9.81,m_=null,am=new We,Vv=[null,null];function Rd(){return .24+G.arms*.036}function E2(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=De.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=De.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=De.lerp(s[2],i,r),n.skin.pose(s,!G.body)}var Pt=["left","right"].map(n=>{let e=yh(n,b2,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Et.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new _,quaternion:new We},target:new _,gripPosition:new _,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new We,aimDirection:new _,supportOffset:new _,hasSupport:!1}}),Vr=new sd(_,Pt,iy),g_=vh(S2,Pt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Pt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Oi=g_.mesh;Et.add(Oi);function C2(n,e){if(G.body){am.copy(Oi.quaternion).invert();for(let t=0;t<Pt.length;t++){let i=Pt[t];Vv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Oi.position).applyQuaternion(am),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(am))}g_.pose(Vv,Rd(),n,e,G.hands)}}var Cn=Yh(),x_=[0,1,2,3,4,5],y_=[7,8,9,10,11,12,13,14],Kl=15,kv=ei(new _(.13,.088,.115)),R2=new et(.26,.176,.23),P2=new gt({color:"#536771",roughness:.36,metalness:.28});Cn[Kl]={name:"Cam\xE9ra du spectateur",geo:R2,material:P2,shape:kv,lowShape:kv,mass:1.2};var{props:I2,animate:D2}=ov(),L2=Dy(Cd).slice(0,36),Em=[],Yl=[];function v_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=yi(t??r.geo,i);e.push(Cn.length),Cn.push({...r,shape:s,lowShape:s})}}v_(I2,Em);v_(L2,Yl);var __=[...x_,...y_,...Em,...Yl];Cn[8].properties={supportWhileHeld:!0};Cn[11].properties={supportWhileHeld:!0};function U2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new _),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new _().setComponent(t,e.getComponent(t)*.49)}for(let n of Cn)n&&(n.supportAxis=U2(n));function F2(n){let e=new ke(new Qt(.058,.074,.1,12).rotateX(Math.PI/2),new gt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new ke(new ln(.048,12),new Mt({color:"#7bd7ed",side:cn}));t.position.z=-.203,n.add(t);let i=new ke(new et(.045,.013,.012),new Mt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function M_(n,e=!1){let t=Cn[n];if(!t)return null;let i=new ke(t.geo,e?Dl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Kl&&F2(i),i}var ut=null,St=[],Gv=[],Hr={held:null},ta=new Map,cr=0,N2=1,zl=new We,Zl=new We,Vl=new _,Pd=new _,Ss=new _,b_=new _,S_=new _;function B2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Pd.set(0,0,-1).applyAxisAngle(qt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(Vl.copy(n).addScaledVector(Pd,s),Vl.y+=.15,!Sl(n,Vl,Math.min(.2,t*.5),Gr,b_,S_)&&!St.some(o=>o.mesh.position.distanceToSquared(Vl)<(t+o.radius+.07)**2))return Vl}}return null}function na(n,e,t,i=!1){let r=Cn[n];if(!r)return null;if(!e&&(t?Ss.set(t.x,t.y,t.z):Ze.xr.isPresenting?Ss.copy(Rt):Kt.getWorldPosition(Ss),e=B2(Ss,t?.yaw??ur,r.shape.radius),!e))return i||Yn("Aucun espace libre pour cet objet."),null;let s=M_(n);s.position.copy(e),Et.add(s);let o=G.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:N2++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:G.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new _,angular:new _,offset:new _,relativeRotation:new We,shadow:wt.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Kl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),St.push(a),wl(a,wt.boxes),_i.record("object-spawn",{model:r.name,typeId:n,count:St.length}),a}function w_(){for(let n of Pt)vi(n,!1);vi(Hr,!1);for(let n of ta.values())vi(n,!1)}function zd(){w_();for(let n of St)if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();St.length=0,ta.clear()}function T_(){if(ut?.assetLayer)return;let n=new Set(ut?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);vy((e,t)=>{n.has(Vp[e])||na(e,t)})}T_();function vi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+G.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function ec(){w_();for(let n of St)Xd(n),n.frozen=!!n.spec.properties?.frozen}function fr(){Ts=NaN,ri=0,Vd.reset(),mt.position.copy(_m),bt=De.degToRad(ut.yaw),Es=0,mt.rotation.y=bt,$t.set(0,0,0),h_.armed=!0,Fi=!1,Ms.normal.set(0,0,0),Ms.surface=null,_d=!1,Vr.reset(),kr.reset(),lr.set(0,0);for(let n of Pt)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,vi(n,!1)}ec();function A_(){return G.auto||As&&!Ze.xr.isPresenting}function Id(){return A_()?Math.min(G.shadowQuality,nn):G.shadowQuality}function jl(){return A_()?Math.min(G.lightQuality,nn):G.lightQuality}function Vi(){let n=G.texturePower;wt.visual(nn,G.shadows?Id():0,jl(),G.reflections,G.bloom,G.textures,2**(n-1),G.lightmap),ut.refreshMaterials?.(),Ze.shadowMap.needsUpdate=!0,wt.setTimeOfDay(je.remoteLight??G.timeOfDay-1),pm=Ud.slice(0,jl()>=8?3:jl()>=4?2:1),Gm.value=G.shaderMode-1;let e=Ze.xr.isPresenting&&Ze.xr.getBaseLayer?.()?.fixedFoveation!=null;wt.focus(G.focus&&!e,G.focusStrength,G.focusSize),Ze.toneMappingExposure=.58+G.exposure*.114,tM.value=.55+G.contrast*.09,nM.value=G.saturation*.2,iM.value=(G.warmth-5)*.022,Ze.xr.setFoveation(G.focus?De.clamp((G.focusStrength+1)*.105+(5-G.focusSize)*.028+(G.auto?(7-nn)*.045:0),0,1):0),Ze.xr.isPresenting||tc(),Ft=!0,Fm.redraw()}var Hv=0,Wv=0,qv=0;function tc(){if(Ze.xr.isPresenting)return;let n=Math.max(1,Or.clientWidth||innerWidth),e=Math.max(1,Or.clientHeight||innerHeight),t=Ky(nn,devicePixelRatio,As);t!==qv&&(Ze.setPixelRatio(t),qv=t),(n!==Hv||e!==Wv)&&(Ze.setSize(n,e,!1),Hv=n,Wv=e),Kt.aspect=n/e,Kt.fov=G.viewFov,Kt.updateProjectionMatrix()}addEventListener("resize",tc);globalThis.visualViewport?.addEventListener("resize",tc);function O2(n){Object.assign(G,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},ad[n]),nn=G.quality,Qo=$o=Jo=0,Vi()}var Cs=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",fr]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Om]]],["Rendu",[]]],Cm=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Rm(){return ct===2?Cm[wm][1]:ct===3?I_[Tm][1]:ct===4?Dm[Am][1]:Cs[ct][1]}function E_(n){ct=n,Ui=0,Ft=!0}var Dd=null,C_=[],bd=0,Wl=0,Ld=null,R_=!1,Pm=0,Im=0,P_={},Ud=Array.from({length:3},()=>{let n=new $a("#ffffff",0,22,1.6);return n.visible=!1,Et.add(n),{light:n,mesh:null,distance:1/0}}),pm=Ud,Fd=new _;function Xv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Fd);if(t>34**2)return;let i=pm[0];for(let r of pm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function z2(n){n?Kt.getWorldPosition(Fd):Fd.copy(Rt);for(let t of Ud)t.mesh=null,t.distance=1/0;if(n)je.forEachReplica(Xv);else if(G.objects)for(let t of St)t.materialStyle===3&&Xv(t.mesh);let e=20+jl()*.75;for(let{light:t,mesh:i}of Ud)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function nc(){_i.record("capture",{mode:Ze.xr.isPresenting?"VR":"PC"});let n=_i.snapshot(Ze.xr.isPresenting?"VR":"PC");Dd={game:"Gorilla Lab",version:u_.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:Ze.xr.isPresenting?"VR":"PC",sessionHadVR:R_,settings:{...G},qualityActive:nn,diagnostics:n,debugGeometry:{...Zo.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:Ze.getPixelRatio()},haptics:Pt.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:m_,audio:{volume:G.stepVolume,enabled:G.stepAudio,clipsPlayed:kr.count,state:kr.state},performance:{fps:bs,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:Ze.xr.isPresenting?Ld:null,previousVR:Ld,renderer:P_,terrainSeed:wt.hillSeed,map:ut.active?{name:ut.name,pieces:ut.nodes}:null,objects:{physics:{...Ml},total:St.length,held:St.filter(e=>e.owner).length,frozen:St.filter(e=>e.frozen).length},cloud:{role:je.role,connected:je.connected,replicas:je.replicaCount,...je.stats},locomotion:{trackedFrames:Im,contactFrames:Pm,launchCount:Mm,lastLaunch:bm,standingHeight:Number.isFinite(Ts)?Ts:null,viewOffset:ri}},document.querySelector("#download-report").disabled=!1,Ft=!0}function V2(){Dd||nc();let n=URL.createObjectURL(new Blob([JSON.stringify(Dd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=V2;document.querySelector("#capture-report").onclick=nc;var ia=document.createElement("input");ia.id="report-note";ia.maxLength=500;ia.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";ia.setAttribute("aria-label","Sc\xE9nario du rapport");ia.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(ia);var Jl=document.createElement("p");Jl.setAttribute("aria-live","off");document.querySelector("#settings").after(Jl);Cs[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",nc]);var k2=Array.from({length:Math.ceil(Yl.length/8)},(n,e)=>["Atelier"+(Yl.length>8?" "+(e+1):""),Yl.slice(e*8,e*8+8)]),I_=[["Basiques",x_],["D\xE9taill\xE9s",y_],["Anim\xE9s",Em],...k2].map(([n,e])=>[n,[...e.map(t=>[Cn[t].name,()=>zm(t)]),["Tout retirer",kd]]]);Cs.push(["Spawn",[]]);var Dm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ut.blank(),G.mapEdit=!0}],["Annuler placement",()=>ut.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ut.recenter(Rt.x,mt.position.y,Rt.z,ur)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ut.reset(),G.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>e_(!1)],["Utiliser comme t\xEAte",()=>e_(!0)]]]];Cs.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",L_],["Tester vibration droite",U_],["\xC9couter un pas",F_],["Capturer un rapport",nc]]]);function D_(n){let e=Pt.find(i=>i.side===n),t=e?.valid&&Jp(e,.45,65);_i.record("haptic-test",{side:n,supported:!!t}),Yn(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function L_(){D_("left")}function U_(){D_("right")}function F_(){kr.unlock().then(()=>kr.play(G.stepVolume))}function N_(){try{localStorage.setItem("gorilla-lab-step-volume",String(G.stepVolume))}catch{}}var G2=document.querySelector("#section"),md=document.querySelector("#settings"),H2=document.querySelector("#readings"),Lm=[1,.75,.5,.25];function Mn(n,e){if(_i.record("setting",{key:n,step:e,previous:G[n]}),n==="mirrorQuality"){G.mirrorQuality=De.clamp(G.mirrorQuality+e,1,3),Ft=!0;return}if(n==="debugSpeed"){G.debugSpeed=De.clamp(G.debugSpeed+e,1,Lm.length),Vr.reset(),Ft=!0;return}if(n==="stepVolume"){G.stepVolume=De.clamp(G.stepVolume+e,1,10),N_(),Ft=!0;return}if(n==="viewFov"){G.viewFov=De.clamp(G.viewFov+5*e,50,105),tc(),Ft=!0;return}if(n==="vrFov"){G.vrFov=De.clamp(G.vrFov+5*e,55,100),Ft=!0;return}if(n==="shaderMode"){G.shaderMode=(G.shaderMode-1+e+od.length)%od.length+1,Gm.value=G.shaderMode-1,Ft=!0;return}if(n==="timeOfDay"){if(je.role==="player"){let i=((je.remoteLight??G.timeOfDay-1)+e+3)%3;je.sendAction({type:"world",mode:1,typeId:i})}else G.timeOfDay=(G.timeOfDay-1+e+3)%3+1;Vi();return}let t={mapMode:9,mapShape:5,mapMaterial:$p.length,mapSurface:4,mapTurn:8,mapTexture:id.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];G[n]=(G[n]-1+e+i)%i+1,Ft=!0;return}if(n==="mapEdit"&&!G.mapEdit&&!ut.active&&ut.load(mv(wt.boxes)),n==="toolMode"){G.toolMode=(G.toolMode-1+e+_s.length)%_s.length+1,Ze.xr.isPresenting||Yn("Outil \xB7 "+_s[G.toolMode-1]),Ft=!0;return}if(n==="preset"){let i=Object.keys(ad);G.preset=(G.preset-1+e+i.length)%i.length+1,O2(i[G.preset-1]);return}if(typeof G[n]=="boolean"?G[n]=!G[n]:G[n]=De.clamp(G[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Pt)i.valid=!1,i.surface=null;if(n==="quality"&&(G.auto=!1,nn=G.quality),n==="auto"&&!G.auto&&(nn=G.quality),n==="movement"||n==="collisions")for(let i of Pt)i.surface=null;if(n==="objects"&&!G.objects&&ec(),n==="blasterActive"&&G.blasterActive&&(G.toolActive=!1),n==="toolActive"&&G.toolActive&&(G.blasterActive=!1),!G.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Pt)i.held?.toolHold&&vi(i,!1);Bm(!1)}n==="preciseHitboxes"&&B_(),Vi()}function B_(){for(let n of St)n.precise=G.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||wl(n,wt.boxes)}function O_(){let n=(ct===2?Cm:ct===4?Dm:null)?.flatMap(e=>e[1])??Rm();for(let[,e]of n)typeof e=="string"&&(G[e]=y2[e]);ct===6&&(N_(),Vr.reset()),ct===0&&fr(),ct===1&&(B_(),ec()),ct===3&&kd(),ct===2&&(nn=G.quality),Vi()}function kl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),ra(),Ft=!0},t}function z_(n){return n==="preciseHitboxes"?G[n]?"High":"Low":G[n]?"Actif":"Coup\xE9"}function Um(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][G[n]-1];if(n==="debugRange")return G[n]*5+" m";if(n==="debugBudget")return G[n]*1e3+" segments";if(n==="debugSpeed")return je.role?"\xD71 en ligne":"\xD7"+Lm[G.debugSpeed-1];if(n==="stepVolume")return G.stepVolume+"/10";if(n==="viewFov")return G.viewFov+"\xB0";if(n==="vrFov")return G.vrFov===100?"Natif":G.vrFov+" %";if(n==="mapTexture")return G[n]===1?"Aucune":id[G[n]-2];if(n==="terrainResolution")return[8,16,32,48][G[n]-1]+"\xB2";if(n==="shaderMode")return od[G.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=G[n],t=n==="shadowQuality"?Id():jl();return t===e?e+"/10":e+"/10 \xB7 "+t+(G.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][je.remoteLight??G.timeOfDay-1]:n==="mapMode"?q_[G.mapMode-1]:n==="mapShape"?Q2[G.mapShape-1]:n==="mapSurface"?$2[G.mapSurface-1]:n==="mapMaterial"?$p[G.mapMaterial-1]:n==="mapTurn"?(G.mapTurn-1)*45+"\xB0":n==="toolMode"?_s[G.toolMode-1]:n==="preset"?Object.keys(ad)[G.preset-1]:n==="texturePower"?[2**(G[n]-1),2**(G[n]-1)].join("\xD7"):G[n]}function mm(){return ct===2?Cm:ct===3?I_:Dm}function V_(){return ct===2?wm:ct===3?Tm:Am}function k_(n){ct===2?wm=n:ct===3?Tm=n:Am=n}function G_(n){return n===L_||n===U_?"Tester":n===nc?"Capturer":n===F_?"\xC9couter":n===zd||n===kd?"Vider":n===fr||n===Om?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function ra(){if(G2.textContent=Cs[ct][0],H_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),md.replaceChildren(),W2.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),mm().forEach(([e],t)=>{let i=kl(e,()=>k_(t));i.setAttribute("aria-pressed",String(V_()===t)),n.append(i)}),md.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",md.append(n)}for(let[n,e]of Rm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(kl(G_(e),e)):typeof G[e]=="boolean"?i.append(kl(z_(e),()=>Mn(e,1))):i.append(kl("\u2212",()=>Mn(e,-1)),document.createTextNode(" "+Um(e)+" "),kl("+",()=>Mn(e,1))),t.append(i),md.append(t)}}}var H_=document.querySelectorAll("[data-page]"),W2=document.querySelector("#cloud-access");H_.forEach((n,e)=>n.onclick=()=>{E_(e),ra()});document.querySelector("#restore").onclick=()=>{O_(),ra()};ra();function W_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new di(s);a.colorSpace=dt;let l=new ke(new tn(t,i),new Mt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var pn=W_(640,652,.84,.86,Et);pn.mesh.visible=!1;var ii=W_(416,84,.32,.065,Et);ii.mesh.visible=!1;var Xo=new Zt(75,1,.07,20),En=new ul(new tn(1.7,1.95),{color:16054015,textureWidth:As?128:256,textureHeight:As?128:256,clipBias:.004,multisample:0}),Yv=new _,gd=new _,Zv=new _,jv=new _,lm=new We,q2=new _,X2=new We().setFromAxisAngle(qt,Math.PI),Y2=new _(Lr.x,Lr.y,Lr.z);En.position.set(Lr.x,Lr.y,Lr.z);En.rotation.y=Math.PI;Et.add(En);var ic=new ke(new et(1.8,2.03,.1),new dn({color:"#344650"}));ic.userData.editorAssetId="lab-mirror";ic.position.copy(En.position).z+=.064;Et.add(ic);var Z2=En.onBeforeRender.bind(En);En.onBeforeRender=()=>{};En.visible=!1;var Yo=-1/0,Jv=null,Qv=0,gm=0;function j2(n,e){if(gm=0,En.visible=!1,!G.reflections||G.mirrorQuality===1){Yo=-1/0;return}if(Xo.position.copy(Rt),e){let u=e.transform.orientation;Xo.quaternion.set(u.x,u.y,u.z,u.w).premultiply(Md.setFromAxisAngle(qt,bt))}else Kt.getWorldQuaternion(Xo.quaternion);Zv.set(0,0,-1).applyQuaternion(Xo.quaternion);let t=null,i=3;function r(u,f,d){gd.subVectors(f,Rt);let h=gd.length();Yv.set(0,0,1).applyQuaternion(d),!(h>=i||gd.dot(Yv)>=-.15||gd.dot(Zv)<=.66*h)&&(t=u,i=h,En.position.copy(f),En.quaternion.copy(d))}ut.usesBuiltInMirror&&r(ic,Y2,X2);for(let{mesh:u}of ut.mirrors()){let{mirrorSize:f}=u.userData;lm.copy(u.quaternion),jv.copy(u.position).add(q2.set(0,0,f.d/2+.002).applyQuaternion(lm)),r(u,jv,lm)}if(!t){Yo=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};En.scale.set(s/1.7,o/1.95,1),En.visible=!0,Jv!==t&&(Jv=t,Yo=-1/0);let a=G.mirrorQuality,l=a===3?As||Ze.xr.isPresenting?256:768:128;if(Qv!==l&&(En.getRenderTarget().setSize(l,l),Qv=l,Yo=-1/0),n-Yo<(a===3?45:110))return;Yo=n,Xo.updateMatrixWorld(!0),En.updateMatrixWorld(!0),Bi.visible=G.body;let c=performance.now();try{Z2(Ze,Et,Xo)}finally{Bi.visible=!1}gm=performance.now()-c}var zi=new $i,Xn=new _,Bn=new _,xd=new _,$v=new _,ql=null,Sd=null,wd=null,J2=new Set(Et.children),Fm=wv(Et,wt.boxes,{spawn:zm,clear:kd,resetPlayer:fr,resetObjects:Om,quality:()=>nn+"/10",resolution:()=>G.resolution+"/10 \xB7 relancer VR",textureSize:()=>Um("texturePower"),qualityNext:()=>{G.quality>=10&&(G.quality=0),Mn("quality",1)},resolutionNext:()=>{G.resolution>=10&&(G.resolution=0),Mn("resolution",1)},textureNext:()=>{G.texturePower>=12&&(G.texturePower=0),Mn("texturePower",1)},hitbox:()=>Mn("preciseHitboxes",1),movement:()=>Mn("movement",1)}),q_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],Q2=["Bloc","Rampe","Mur","Dalle","Terrain"],$2=["Normale","Glace","Caoutchouc","Lune"],Kv=new Map;function K2(){for(let n of ut.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d,n.gravity,n.bounce]),t=Kv.get(e);if(t===void 0){let r=new _(n.w,n.h,n.d),s=Vo(n.model,r);s.scale(n.w,n.h,n.d);let o=Pl(n.model,r),a=yi(o);o.dispose(),t=Cn.length,Cn.push({id:n.model.id,name:n.model.name,geo:s,material:Fr(n.model),shape:a,lowShape:a,assetId:n.model.assetId??null,physics:Qh({physics:{gravity:n.gravity,bounce:n.bounce}}),properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:De.clamp(n.w*n.h*n.d*9,.18,12)}),Kv.set(e,t)}let i=na(t,new _(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(De.degToRad(n.pitch),De.degToRad(n.yaw),De.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}ut=_v({scene:Et,arena:wt,boot:_m,onReset:n=>{zd(),fr(),bt=De.degToRad(n),ut.builtIn&&T_(),K2()},onVisual:Vi,getLevel:()=>nn,defaultObjects:[...wt.builtObjects,...Et.children.filter(n=>!J2.has(n)),ic]});var je=Dx({scene:Et,currentMap:()=>(ut.signature||"arena-r25-"+wt.hillSeed)+T2,seedArena:n=>wt.setHillSeed(n),makeReplica:n=>{let e=M_(n,!0);return e&&sa(e.material),e},onAction:sC,onStatus:()=>{ct===5&&(Ft=!0)},onShot:n=>Vd.receiveShot(n,je.role==="vr"),applyLight:n=>{wt.setTimeOfDay(n??G.timeOfDay-1),Ft=!0,Ze.xr.isPresenting||ra()}});function e_(n){let e=ut.modelPieces();if(!e.length||e.length>Pi.parts){Yn("Compose un mod\xE8le de 1 \xE0 "+Pi.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Xp(localStorage);if(t.models.length>=Pi.models){Yn("La collection de mod\xE8les est pleine.");return}let i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0);for(let c of e)i.min(new _(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new _(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:G.modelGrab,frozen:G.modelFrozen,collidable:G.modelCollidable,supportWhileHeld:G.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?pv[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(qp,JSON.stringify(vs(t))),Yn("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{Yn("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var cm=new Map;function eC(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][G.mapShape-1],e=Go({detail:[8,16,32,48][G.terrainResolution-1],amplitude:(G.terrainAmplitude-1)*.34,frequency:.05+G.terrainFrequency*.025,seed:G.terrainSeed,grass:(G.terrainGrass-1)/9,shrub:(G.terrainShrub-1)/9}),t=G.mapTexture-2;return t>=0&&!cm.has(t)&&cm.set(t,Jy(t).toDataURL("image/webp",.83)),Fl({...n,material:G.mapMaterial-1,yaw:G.mapShape===5?0:(G.mapTurn-1)*45,...Kp[Object.keys(Kp)[G.mapSurface-1]],texture:cm.get(t)??null,terrain:G.mapShape===5||G.mapMode===9?e:null,brushRadius:.5+G.brushRadius*.5,brushStrength:G.brushStrength*.15})}function tC(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Xn.set(s.x,s.y-ri,s.z).applyAxisAngle(qt,bt).add(mt.position),dr.set(o.x,o.y,o.z,o.w),Bn.set(0,0,-1).applyQuaternion(dr).applyAxisAngle(qt,bt),ut.edit(Xn,Bn,i,{mode:G.mapMode,piece:eC(),head:Rt,feet:mt.position.y}),i&&(Ft=!0)}function nC(n){if(!ut.builtIn||!n.valid||n.held||n.remoteHeld||Xt)return;let e=null;for(let t of Fm.targets)if(t.getWorldPosition($v),!(n.mesh.position.distanceToSquared($v)>.11**2)&&(t.worldToLocal(xd.copy(n.mesh.position)),Math.abs(xd.x)<t.userData.touchWidth*.5+.025&&Math.abs(xd.y)<.095&&Math.abs(xd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function xm(n,e,t){if(!ut.builtIn)return;zi.set(n,e),zi.far=5.5;let i=zi.intersectObjects(Fm.targets,!1);zi.far=1/0;let r=i[0];r&&(Rs.visible=!0,Rs.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),ra()))}var t_=new _,X_=new We,Nm=_h(Et),Vd=nv({scene:Et,rig:mt,camera:Kt,arena:wt,objects:St,spectator:je}),gD=Nm.mesh,Td=new _,hr=new We,Nd=new _,ea={mode:0,position:Nd,quaternion:hr,end:Td},n_=new _,iC=new _,i_=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Bd=new _,rC={position:Nd,quaternion:hr,pressure:[.1,.66,.08]},um=new _,Od=new We;function Bm(n){Hr.held&&vi(Hr,n)}function Y_(n,e){if(je.role==="pc"){Yn("Rejoins le salon en joueur pour modifier les objets.");return}if(je.role!=="player"){e();return}je.sendAction({type:"world",mode:3,typeId:n})||Yn("Attends la connexion \xE0 l\u2019h\xF4te.")}function kd(){Y_(0,zd)}function Om(){Y_(1,ec)}function zm(n,e=null){if(G.objects=!0,je.role==="pc"){Yn("Commence par rejoindre le salon en joueur.");return}je.role==="player"?je.sendAction({type:"spawn",typeId:n})||Yn("Attends la connexion \xE0 l\u2019h\xF4te."):na(n,e)}function sC(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(G.timeOfDay=n.typeId+1,Vi()):n.mode===3&&[zd,ec][n.typeId]?.();return}if(n.type==="spawn"){__.includes(n.typeId)&&(G.objects=!0,na(n.typeId,null,e));return}let t=St.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=ta.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new We},ta.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?je.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),vi(o,!0)}return}if(!G.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ss.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Wh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Sl(l,t.mesh.position,.01,Gr,b_,S_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Vm(t,s,o,De.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Zl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Zl))}}function oC(n){if(Ze.xr.isPresenting)for(let t of Pt)t.valid&&t.held&&hm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of ta){let r=je.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){vi(i,!1),ta.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ss.copy(s?.position??r.avatar?.tool?.position??r),Pd.set(0,0,-1).applyQuaternion(i.controllerRotation),hm(o,Ss,Pd,i.controllerRotation,n)}let e=Hr.held;e&&(Kt.getWorldPosition(Bd),Kt.getWorldDirection(t_),Kt.getWorldQuaternion(hr),hm(e,Bd,t_,hr,n))}function hm(n,e,t,i,r){n.toolHold?um.copy(e).addScaledVector(t,n.toolDistance):um.copy(n.offset).applyQuaternion(i).add(e),Od.multiplyQuaternions(i,n.relativeRotation),ry(n,um,Od,Gr,r)}function Z_(n){return n.customMaterial||(n.mesh.material=Dl(n.mesh.material),n.customMaterial=!0,sa(n.mesh.material)),n.mesh.material}function aC(n){let e=Z_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function j_(n,e,t){zi.set(n,e),zi.far=9;let i=zi.intersectObjects(t,!1)[0];return zi.far=1/0,Td.copy(n).addScaledVector(e,i?.distance??9),Sl(n,Td,.006,Gr,n_,iC)?(Td.copy(n_),null):i}function Vm(n,e,t,i){if(e===1){if(t?.held){t===Hr?Bm(!0):vi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??hr;n.relativeRotation.multiplyQuaternions(X_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();St.splice(St.indexOf(n),1)}else if(e===4&&!n.protected){Bd.copy(n.mesh.position).addScaledVector(qt,n.radius*2+.08);let r=na(n.netType,Bd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Dl(n.mesh.material),r.customMaterial=!0,sa(r.mesh.material)),wl(r,wt.boxes))}else if(e===5){let r=Z_(n),s=i_[n.paint++%i_.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,aC(n));Ft=!0}}var zr=[];function J_(n,e,t,i){if(!G.objects)return;let r=je.role==="player";if(zr.length=0,r)je.forEachReplica(a=>zr.push(a));else for(let a of St)!a.owner&&a.mesh.visible&&zr.push(a.mesh);let s=j_(n,e,zr);if(ea.mode=G.toolMode,i?(Nd.copy(i.mesh.position),hr.copy(i.controllerRotation)):(Kt.getWorldQuaternion(hr),Nd.set(.16,-.17,-.43).applyQuaternion(hr).add(n)),Nm.update(ea),!t)return;if(r){if(G.toolMode===1&&cr)je.sendAction({type:"release",objectId:cr}),cr=0;else if(s){let a=s.object.userData.netId;je.sendAction({type:"tool",mode:G.toolMode,objectId:a})&&G.toolMode===1&&(cr=a)}return}let o=s&&St.find(a=>a.mesh===s.object);Vm(o,G.toolMode,i??Hr,s?De.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function lC(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;Xn.set(o.x,o.y-ri,o.z).applyAxisAngle(qt,bt).add(mt.position),dr.set(a.x,a.y,a.z,a.w),Bn.set(0,0,-1).applyQuaternion(dr).applyAxisAngle(qt,bt),J_(Xn,Bn,r,i)}function cC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Xn.set(s.x,s.y-ri,s.z).applyAxisAngle(qt,bt).add(mt.position),dr.set(o.x,o.y,o.z,o.w),Bn.set(0,0,-1).applyQuaternion(dr).applyAxisAngle(qt,bt),xm(Xn,Bn,i)}var Rs=w2(Et,new Mt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Rs.visible=!1;var ym=[],ws=null;function r_(){let n=pn.ctx;ym=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+u_,25,42),n.font="20px system-ui",n.fillText(bs+" FPS   \xB7   Q "+nn+"/10   \xB7   "+(G.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,f,d,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(f,a+c/2,l+u/2+7,c-8),n.textAlign="left",ym.push({x:a,y:l,w:c,h:u,action:d,label:f})}let t=Math.floor(587/Cs.length);if(Cs.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>E_(l),ct===l?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(je.caption,25,145,587),n.fillText("Salons publics",25,190),dl.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>je.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>je.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>je.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>je.leave()),e(325,579,287,44,"Fermer",()=>Xt=!1),pn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&mm().forEach(([a],l)=>{let c=V_()===l,u=Math.min(144,Math.floor(586/mm().length)-4);e(25+l*(u+4),114,u,38,a,()=>k_(l),c?"#546947":"#263d49")});let r=Rm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));Ui=Math.max(0,Math.min(Ui,o-1)),r.slice(Ui*s,(Ui+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,G_(l),l):typeof G[l]=="boolean"?e(406,u,206,36,z_(l),()=>Mn(l,1),G[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>Mn(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Um(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>Mn(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Ui=(Ui+o-1)%o,Ft=!0}),e(432,533,180,35,"Suivant",()=>{Ui=(Ui+1)%o,Ft=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Ui+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",O_),e(325,579,287,44,"Fermer",()=>Xt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(km||(ct===6?"v "+$t.length().toFixed(2)+" m/s | g "+Xl.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ct===4&&ut.status?ut.status.slice(0,64):Dd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),pn.texture.needsUpdate=!0}function uC(n){Xt=!Xt,Xt&&(d_=n,Bv.set(0,0,-1).applyAxisAngle(qt,ur),pn.mesh.position.copy(Rt).addScaledVector(Bv,1.25),pn.mesh.position.y+=.08,pn.mesh.lookAt(Rt),pn.mesh.updateMatrixWorld(!0)),Ft=!0}function hC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Xn.set(s.x,s.y-ri,s.z).applyAxisAngle(qt,bt).add(mt.position),dr.set(o.x,o.y,o.z,o.w),Bn.set(0,0,-1).applyQuaternion(dr).applyAxisAngle(qt,bt),zi.set(Xn,Bn);let a=zi.intersectObject(pn.mesh)[0];if(a&&(Rs.visible=!0,Rs.position.copy(a.point).addScaledVector(Bn,-.012),i)){let l=a.uv.x*pn.w,c=(1-a.uv.y)*pn.h;ym.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Ft=!0}}var Gd=$y(),{held:Ni,pressed:ar}=Gd,Q_=iv(Ze.domElement,document.querySelector("#touch-fire")),s_=document.querySelector("#game-settings"),$_=document.querySelector("#open-settings"),vm=document.querySelector("#game-hint"),Ad=0;function Yn(n){vm.textContent=n,vm.hidden=!1,Ad=performance.now()+2400,km=n,Ft=!0}var km="";function Hd(n){let e=n??!s_.hidden;s_.hidden=e,$_.hidden=!e,e&&Ze.domElement.focus()}$_.onclick=()=>Hd(!1);document.querySelector("#close-settings").onclick=()=>Hd(!0);var Ql=Qy({canvas:Ze.domElement,enabled:()=>!Ze.xr.isPresenting,onLook:(n,e,t)=>{bt-=n*t,Es=De.clamp(Es-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&ar.add(e)},onMenu:()=>Hd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ze.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Hd();return}n.code==="Space"&&n.preventDefault(),Gd.down(n.code,n.repeat),n.code==="KeyR"&&fr()}});addEventListener("keyup",n=>Gd.up(n.code));addEventListener("blur",()=>{Gd.clear(),Ql.clear(),Q_.clear()});function dC(n,e){if(!G.objects)return!1;let t=je.role==="player";if(t&&cr)return je.sendAction({type:"release",objectId:cr}),cr=0,!0;if(Hr.held)return Bm(!0),!0;if(zr.length=0,t)je.forEachReplica(r=>zr.push(r));else for(let r of St)!r.owner&&r.mesh.visible&&zr.push(r.mesh);let i=j_(n,e,zr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;je.sendAction({type:"hold",objectId:r})&&(cr=r)}else Kt.getWorldQuaternion(hr),Vm(St.find(r=>r.mesh===i.object),1,Hr,Math.max(.75,i.distance));return!0}var dm=[];function K_(){return dm.length=0,je.forEachReplica(n=>{let e=n.userData.netType;if(!Cn[e]||Cn[e].properties?.collidable===!1||n.userData.held)return;let t=Cn[e],i=G.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=G.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},dm.push(r)}),dm}function fC(){je.role!=="vr"||!je.remoteSpectator||St.some(n=>n.netType===Kl)||na(Kl,null,null,!0)}var $l=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{$l.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});$l.onclick=async()=>{let n;kr.unlock();try{$l.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ze.xr.setFramebufferScaleFactor(.45+G.resolution*.055),await Ze.xr.setSession(n),Vi(),Hl=n.frameRate||72,Gl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Gl.includes(120)?120:Gl.find(t=>t>=100)??Gl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Hl=n.frameRate||Hl,Sm=Math.min(100,Hl),G.auto&&(nn=Math.min(nn,4),Jo=Qo=$o=0),C_=[],_i.reset(),bd=0,Wl=0,Pm=Im=Mm=0,bm=null,R_=!0,Ld=null,Ts=NaN,ri=0,fr(),Vi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),$l.disabled=!1,document.querySelector("#status").textContent=e.message}};Ze.xr.addEventListener("sessionend",()=>{$l.disabled=!1,Xt=!1,pn.mesh.visible=!1,ii.mesh.visible=!1,document.body.classList.remove("immersive"),fr(),tc()});function eM(n){if(!ut.active){for(let e of wt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ut.active){let e=-1/0,t;for(let i of wt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function o_(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(je.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Xt||!e||n.grip||!G.objects)return;let i=null,r=.15;if(je.forEachReplica(s=>{if(s.userData.held)return;let o=Cn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Wh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;je.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function pC(n,e,t){let i=[...n.session.inputSources];for(let r of Pt){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&G.hands&&!G.body,!o){je.role==="player"&&o_(r,!1),r.valid=!1,r.surface=null,vi(r,!1);continue}cv(r,o.transform,ri,bt,mt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(zl.copy(r.controllerRotation),E2(r,s.gamepad?.buttons??[],t),je.role==="player")o_(r,a);else if(!Xt&&a&&!r.grip&&G.objects&&!r.held){let h=null,p=.15;for(let x of St){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let g=Wh(r.target,x);g<p&&(p=g,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Zl.copy(zl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Zl),h.relativeRotation.multiplyQuaternions(Zl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&vi(r,!Xt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Od.multiplyQuaternions(zl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Od),Ko.copy(l.offset).applyQuaternion(zl);let h=r.supportOffset.dot(Ko);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(Ko),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(X_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(qt,bt):r.aimDirection.set(0,0,-1).applyQuaternion(zl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&uC(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!Xt&&Mn("toolActive",1),r.toolButton=u;let f=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&f&&!r.toolCycle&&G.toolActive&&!Xt&&Mn("toolMode",1),r.toolCycle=f;let d=!!s.gamepad?.buttons[0]?.pressed;if(Xt){let h=d&&!r.trigger;(h||!ws||!ws.click&&r.side!==d_)&&(ws={source:s,click:h})}else!Xt&&r.side==="right"&&G.mapEdit?wd={source:s,click:d&&!r.trigger}:!Xt&&r.side==="right"&&G.toolActive?Sd={source:s,hand:r,click:d&&!r.trigger}:!Xt&&!G.blasterActive&&(r.side==="right"||d&&!r.trigger)&&(ql={source:s,click:d&&!r.trigger});r.trigger=d}}function a_(n,e){let t=n?-jo.y:Math.max(0,-Math.sin(Es)),i=0,r=0,s=0;if(n){zv.setFromAxisAngle(qt,-ur);for(let u of Pt)u.valid&&(om.copy(u.gripPosition).sub(Rt).applyQuaternion(zv),i+=om.x-(u.side==="left"?-.2:.2),r+=om.z+.24,s++)}let o=s?De.clamp(-r/s,-.35,.45):0,a=s?De.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?eg(t,o):-.31*De.smoothstep(t,.2,.92);lr.x=De.lerp(lr.x,c,l),lr.y=De.lerp(lr.y,-a*.62,l),Ov.set(lr.x,ur,lr.y,"YXZ"),Oi.quaternion.setFromEuler(Ov)}function mC(n,e,t,i,r=i){let s=!!t,o=.43+G.size*.088;if(s){let d=t.transform.position;Ts=Km(Ts,d.y),ri=De.clamp(Ts-o,-.65,1.7),Ed.position.y=-ri,ni.set(d.x,d.y-ri,d.z);let h=[...n.session.inputSources].find(g=>g.handedness==="right"),p=jm(h?.gamepad),x=Jm(h_,p,{menu:Xt,allowMenu:G.snapWithMenu});x&&(_i.record("snap-turn",{direction:x,menu:Xt}),_n.copy(ni).applyAxisAngle(qt,bt),bt-=x*Math.PI/4,Dv.copy(ni).applyAxisAngle(qt,bt),mt.position.add(_n.sub(Dv)),Vr.reset(),_d=!1)}else Ed.position.y=0,ni.set(0,o,0),Kt.position.copy(ni),Kt.rotation.set(Es,0,0,"YXZ");if(Rt.copy(ni).applyAxisAngle(qt,bt).add(mt.position),s){let d=t.transform.orientation;Md.set(d.x,d.y,d.z,d.w),jo.set(0,0,-1).applyQuaternion(Md),jo.x**2+jo.z**2>.018&&(ur=bt+Math.atan2(-jo.x,-jo.z))}else ur=bt;let a=eM(Rt),l=9.81*(G.gravity/5)*(a?.gravity??1);Xl=l,Uv.copy(mt.position);let c=je.role==="player"?K_():St;if(s){pC(n,e,r),a_(!0,r),Pt.some(d=>d.valid)&&Im++,pd.length=0;for(let d of Gr)pd.push(d);if(G.collisions&&G.objects)for(let d of c)d.handCollider&&!d.owner&&pd.push(d.handCollider);Vr.move({head:Rt,dt:i,inputDt:r,gravity:l,settings:G,boxes:pd,velocity:$t,movement:qo,reach:Rd()*2+.16});for(let d of Pt)tv(d,G.stepHaptics,r,.08+G.stepHapticStrength*.04,40)}else{a_(!1,r),$t.y-=l*i;let d=Number(Ni.has("KeyD"))-Number(Ni.has("KeyA")||Ni.has("KeyQ"))+Ql.movement.x,h=Number(Ni.has("KeyS"))-Number(Ni.has("KeyW")||Ni.has("KeyZ"))+Ql.movement.z,p=Ni.has("ShiftLeft")||Ni.has("ShiftRight");or.set(d,0,h).clampLength(0,1).applyAxisAngle(qt,bt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Fi?13:4));$t.x=De.lerp($t.x,or.x,x),$t.z=De.lerp($t.z,or.z,x);let m=(Ql.consumeJump()||ar.delete("Space"))&&Fi,y=Ms.normal,w=!m&&Fi&&y.y>=.62&&(Ms.surface?.friction??0)>=.45;m?$t.y=3.1+G.jump*.18:w&&($t.y=-($t.x*y.x+$t.z*y.z)/y.y),qo.copy($t).multiplyScalar(i),w&&qo.addScaledVector(y,-l*i*i)}if(G.collisions&&_d&&(Ko.copy(Rt).add(qo),Sl(Fv,Ko,v2,Gr,_n,Ol)&&or.subVectors(Ko,_n).dot(Ol)<0&&(qo.copy(_n).sub(Rt),tg($t,Ol))),mt.position.add(qo),Rt.copy(ni).applyAxisAngle(qt,bt).add(mt.position),Fi=!1,Ms.normal.set(0,0,0),Ms.surface=null,G.collisions){dd.set(0,-1,0).applyQuaternion(Oi.quaternion),dd.y=0,dd.addScaledVector(A2.set(0,0,1).applyAxisAngle(qt,ur),.12);for(let d=0;d<3;d++){let h=d===0?.18:d===1?Math.max(.26,ni.y*.57):ni.y,{radius:p}=vd[d];if(_n.set(Rt.x,mt.position.y+h,Rt.z),d<2&&_n.add(ng(s,dd,Math.max(0,ni.y-h),or)),Lv.copy(_n),Fi=Op(_n,p,wt.boxes,$t,0,3+G.grip,i,d===0?Ms:null)||Fi,G.objects)for(let x of c)x.blocksPlayer&&!x.owner&&dy(_n,p,x,$t,Ol)&&Ol.y>.6&&(Fi=!0);Op(_n,p,wt.boxes,$t,0,3+G.grip,i),or.subVectors(_n,Lv),mt.position.add(or),Rt.add(or);for(let x=0;x<d;x++)vd[x].position.add(or);vd[d].position.copy(_n)}}if(Br.subVectors(mt.position,Uv),kr.update({dt:r,inVR:s,hands:Pt,grounded:Fi,travel:Math.hypot(Br.x,Br.z),volume:G.stepVolume,enabled:G.stepAudio}),s){let d=Vr.finish(Br,$t);d.contacts&&Pm++,d.launched&&(Mm++,bm={handSpeed:d.launchSpeed,velocity:$t.toArray(),t:performance.now()})}(ut.active?mt.position.y<-24||Math.abs(mt.position.x)>155||Math.abs(mt.position.z)>155:mt.position.y<-9||Math.abs(mt.position.x)>33||mt.position.z<-57||mt.position.z>13)&&(fr(),Rt.copy(ni).applyAxisAngle(qt,bt).add(mt.position)),Fv.copy(Rt),_d=!0,mt.rotation.y=bt,s&&Kt.position.set(0,0,0);for(let d of Pt)s&&d.valid&&(d.mesh.position.copy(d.surface?d.anchor:d.held?d.target:d.locomotionTarget).addScaledVector(Br,d.surface?0:1),d.gripPosition.add(Br)),s||(d.mesh.visible=!1);let u=.72+G.size*.05,f=Rd()*2*(2/3)/.82;Oi.visible=G.body,Bi.position.copy(Rt),s?Bi.quaternion.copy(Md).premultiply(dr.setFromAxisAngle(qt,bt)):Bi.quaternion.setFromEuler(new Jt(Es,bt,0,"YXZ")),fm.set(0,-.145,.045).applyQuaternion(Bi.quaternion).add(Rt),Oi.position.set(0,.46*f,.04*u).applyQuaternion(Oi.quaternion).negate().add(fm),C2(u,f),mt.updateMatrixWorld(!0),Kt.updateWorldMatrix(!0,!1)}function gC(n,e){if(fd+=n,sm++,Jo+=n,fd<1||(bs=Math.round(sm/fd),sm=0,fd=0,Ft=!0,H2.textContent=bs+" FPS \xB7 qualit\xE9 "+nn+"/10 \xB7 "+(G.auto?"auto":"manuel"),!G.auto||Jo<5))return;Jo=0;let t=e?Math.min(100,Ze.xr.getSession()?.frameRate||Hl):60;e&&(Sm=t),Qo=bs<t-4?Qo+1:0,$o=bs>=t-1?$o+1:0;let i=De.clamp(nn+(Qo>=1?-1:$o>=2?1:0),1,10);i!==nn&&(nn=i,Jo=Qo=$o=0,Vi())}wt.bakeLightmap();var tM={value:1},nM={value:1},iM={value:0},Gm={value:0},l_=new WeakSet;function sa(n){if(Array.isArray(n)){for(let i of n)sa(i);return}if(!n||l_.has(n))return;l_.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:tM,uPhotoSaturation:nM,uPhotoWarmth:iM,uLabShader:Gm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of wt.materials)sa(n);Et.traverse(n=>{n.isMesh&&![pn.mesh,ii.mesh,Rs].includes(n)&&sa(n.material)});Vi();var c_=new URLSearchParams(location.search);if(c_.has("map"))ut.loadURL(c_.get("map"));else try{let n=localStorage.getItem(Nl);n&&ut.load(n)}catch(n){ut.inform(n.message)}function xC(){let n=Ze.xr.isPresenting;return{head:Bi.quaternion,hands:n?Pt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,ea.mode?rC:null],height:ni.y,armSpan:Rd()*2,light:G.timeOfDay-1,color:f_,tool:ea.mode?ea:null,gun:Vd.gun}}Ze.setAnimationLoop((n,e)=>{let t=rm?Math.max(0,(n-rm)/1e3):.014;rm=n;let i=Math.max(1e-4,Math.min(.035,t)),r=je.role?1:Lm[G.debugSpeed-1],s=i*r,o=Ze.xr.isPresenting,a=Ze.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(D2(n*.001),Ad&&n>Ad&&(vm.hidden=!0,Ad=0,km=""),Rs.visible=!1,Nm.hide(),ea.mode=0,Gr=G.collisions?wt.boxes:_2,ws=null,ql=null,Sd=null,wd=null,ut.clearGhost(),pn.mesh.visible=!1,!o&&je.role==="pc"){Oi.visible=!1;for(let y of Pt)y.mesh.visible=!1}else mC(e,a,l,s,i);let c=!o&&je.role==="pc";if(!o&&!c)for(let y of ut.checkTriggers(Rt))_i.record("map-trigger",y),window.dispatchEvent(new CustomEvent("gorilla-model-trigger",{detail:y})),y.phase==="enter"&&Yn("D\xE9clencheur \xB7 "+y.part);let u=c||je.role==="player";if(je.role!=="player"){cr=0;for(let y of Pt)y.remoteHeld=0}u||(oC(s),fC()),im=0;for(let y of St){y.mesh.visible=G.objects&&!u;let{x:w,y:M,z:A}=y.mesh.position;if($m(y.mesh.position,ut.active)&&(y.owner||Xd(y)),y.shadow.visible=!u&&G.shadows&&Id()<3&&G.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:D,z:L}=y.mesh.position,T=wt.boxes.find(E=>E.heightfield&&D>=E.xMin&&D<=E.xMax&&L>=E.zMin&&L<=E.zMax),b=T?T.height(D,L):0;y.shadow.position.set(D,b+.006,L)}}if(!u&&G.objects){let y=performance.now();uy(St,wt.boxes,s,9.81*G.gravity/5,.12+G.bounce*.064,eM),im=performance.now()-y}if(o&&!Xt&&je.role!=="pc")for(let y of Pt)nC(y);if(wt.probe.rotation.y+=s*.29,gC(Math.min(.3,t),o),pn.mesh.visible=o&&Xt,pn.mesh.visible&&Ft&&r_(),pn.mesh.visible&&ws)hC(e,a,ws.source,ws.click);else if(o&&wd)tC(e,a,wd);else if(o&&Sd)lC(e,a,Sd);else if(o&&ql)cC(e,a,ql.source,ql.click);else if(!o&&!c){Kt.getWorldPosition(Xn),Kt.getWorldDirection(Bn),ar.delete("KeyX")&&Mn("blasterActive",1),ar.delete("KeyG")&&(Mn("toolActive",1),G.toolActive&&Yn("Outil \xB7 "+_s[G.toolMode-1])),ar.delete("KeyT")&&Mn("toolMode",1);let y=ar.delete("KeyE");G.toolActive?J_(Xn,Bn,y,null):y&&!dC(Xn,Bn)?xm(Xn,Bn,!0):!y&&!u&&xm(Xn,Bn,!1),ar.delete("KeyF")&&(G.objects=!0,zm(__[0]))}let f=ii.mesh.visible;if(ii.mesh.visible=o&&!Xt&&Pt[0].valid,ii.mesh.visible&&(ii.mesh.position.copy(Pt[0].mesh.position).y+=.12,ii.mesh.lookAt(Rt)),(Ft||n-Nv>1100||ii.mesh.visible&&!f)&&(Ft=!1,Nv=n,Xt&&r_(),ii.mesh.visible)){let y=ii.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(bs+" FPS     Q "+nn+"/10",17,32),y.font="20px system-ui",y.fillText(G.mapEdit?"\xC9dition : "+q_[G.mapMode-1]:G.blasterActive?"Pistolet : maintenir la g\xE2chette":G.toolActive?"Tool Gun : "+_s[G.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ii.texture.needsUpdate=!0}Vd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:bt,drop:ri,rightHand:Pt[1],enabled:G.blasterActive&&!c&&!Xt&&!G.mapEdit,flatFiring:Q_.held||Ni.has("KeyJ")}),je.update({inVR:o,time:n,dt:i,position:Rt,yaw:c?bt:ur,pitch:Es,camera:Kt,rig:mt,keys:Ni,actions:ar,flat:Ql,avatar:xC,bodies:G.objects?St:Gv}),ar.clear();let d=performance.now();Zo.update({settings:G,boxes:Gr,bodies:u?G.debugHitboxes?K_():Gv:St,hands:Pt,locomotion:Vr,velocity:$t,head:Rt,neck:fm,body:Oi.position,proxies:vd,gravity:Xl,appliedMove:Br,playerActive:!c,inVR:o,viewQuaternion:Bi.quaternion}),Pv=performance.now()-d,!c&&n-Wl>350&&(m_={simulationScale:r,gravity:Xl,velocity:$t.toArray(),grounded:Fi,torsoDegrees:[lr.x,lr.y].map(De.radToDeg),hands:o?Vr.hands.map(({hand:y,normal:w,offset:M})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:_n.copy(nr).applyQuaternion(y.mesh.quaternion).add(y.target).add(Br).distanceTo(y.gripPosition),palmCenter:_n.copy(nr).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:_n.copy(y.mesh.position).add(M).toArray(),normal:y.surface?w.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),z2(u),wt.centerShadows(Fd);let h=25+(10-Id())*(o?7:4);Ze.shadowMap.enabled&&n-Rv>=h&&(Ze.shadowMap.needsUpdate=!0,Rv=n),j2(n,l);let p=performance.now(),x=o&&G.post,g=o&&G.rayTrace;x2(g,St);let m=G.vrFov/100;if(!x||!g2.render(Et,Kt,{bloom:G.bloom,visibleField:m})){yd.material.uniforms.visibleField.value=m,yd.visible=o&&m<1;try{Ze.render(Et,Kt)}finally{yd.visible=!1}}if(Iv=performance.now()-p,_i.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:im,debugCpuMs:Pv,mirrorCpuMs:gm,renderSubmissionCpuMs:Iv,objects:St.length,moving:St.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:Zo.stats.segments}),n-Wl>350&&(Jl.hidden=!(G.debugForces||Zo.stats.truncated),Jl.hidden||(Jl.textContent="Vitesse joueur : "+$t.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+Xl.toFixed(2)+" m/s\xB2 \xB7 Segments : "+Zo.stats.segments+(Zo.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),C_[bd]=t*1e3,bd=(bd+1)%720,n-Wl>350){Wl=n;let{calls:y,triangles:w,lines:M,points:A}=Ze.info.render;P_={calls:y,triangles:w,lines:M,points:A,textures:Ze.info.memory.textures},o&&(Ld={refreshHz:Ze.xr.getSession()?.frameRate??null,targetFps:Sm,supportedHz:Gl.slice(),foveation:Ze.xr.getFoveation()??null,visualEffects:{post:x,bloom:x&&G.bloom,rayTrace:g},eyeViewports:Ze.xr.getCamera().cameras.map(C=>({width:C.viewport?.z??null,height:C.viewport?.w??null}))})}});})();
