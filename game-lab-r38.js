(()=>{function Hm(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function Wm(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function qm(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function kd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function Xm(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function Ym(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function Zm(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function jm(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function Jm(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ng=0,If=1,Bg=2;var el=1,Og=2,Si=3,ai=0,fn=1,an=2,ji=0,Zr=1,Qn=2,Df=3,Lf=4,zg=5,yr=100,Vg=101,kg=102,Gg=103,Hg=104,Wg=200,qg=201,Xg=202,Yg=203,Nc=204,Bc=205,Zg=206,jg=207,Jg=208,Qg=209,$g=210,Kg=211,e0=212,t0=213,n0=214,fu=0,pu=1,mu=2,jr=3,gu=4,xu=5,yu=6,vu=7,_u=0,i0=1,r0=2,Ji=0,s0=1,o0=2,a0=3,Mu=4,l0=5,c0=6,u0=7;var Uf=300,rs=301,ss=302,mo=303,bu=304,tl=306,kn=1e3,xr=1001,Oc=1002,cn=1003,h0=1004;var nl=1005;var un=1006,Su=1007;var Dn=1008;var Wn=1009,Ff=1010,Nf=1011,go=1012,wu=1013,Sr=1014,di=1015,wi=1016,Tu=1017,Au=1018,xo=1020,Bf=35902,Of=35899,zf=1021,Vf=1022,Ln=1023,Js=1026,yo=1027,Eu=1028,Cu=1029,kf=1030,Ru=1031;var Pu=1033,il=33776,rl=33777,sl=33778,ol=33779,Iu=35840,Du=35841,Lu=35842,Uu=35843,Fu=36196,Nu=37492,Bu=37496,Ou=37808,zu=37809,Vu=37810,ku=37811,Gu=37812,Hu=37813,Wu=37814,qu=37815,Xu=37816,Yu=37817,Zu=37818,ju=37819,Ju=37820,Qu=37821,$u=36492,Ku=36494,eh=36495,th=36283,nh=36284,ih=36285,rh=36286;var Ma=2300,zc=2301,Uc=2302,yf=2400,vf=2401,_f=2402;var d0=3200,f0=3201;var sh=0,p0=1,Qi="",pt="srgb",Jr="srgb-linear",ba="linear",vt="srgb";var Yr=7680;var Mf=519,m0=512,g0=513,x0=514,Gf=515,y0=516,v0=517,_0=518,M0=519,Vc=35044,wn=35048;var Hf="300 es",oi=2e3,Sa=2001;var qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qm=1234567,xa=Math.PI/180,Qs=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Wf(n,e){return(n%e+e)%e}function tM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function nM(n,e,t){return n!==e?(t-n)/(e-n):0}function ya(n,e,t){return(1-t)*n+t*e}function iM(n,e,t,i){return ya(n,e,1-Math.exp(-t*i))}function rM(n,e=1){return e-Math.abs(Wf(n,e*2)-e)}function sM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function oM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function aM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lM(n,e){return n+Math.random()*(e-n)}function cM(n){return n*(.5-Math.random())}function uM(n){n!==void 0&&(Qm=n);let e=Qm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(n){return n*xa}function dM(n){return n*Qs}function fM(n){return(n&n-1)===0&&n!==0}function pM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Fe={DEG2RAD:xa,RAD2DEG:Qs,generateUUID:vi,clamp:Ke,euclideanModulo:Wf,mapLinear:tM,inverseLerp:nM,lerp:ya,damp:iM,pingpong:rM,smoothstep:sM,smootherstep:oM,randInt:aM,randFloat:lM,randFloatSpread:cM,seededRandom:uM,degToRad:hM,radToDeg:dM,isPowerOfTwo:fM,ceilPowerOfTwo:pM,floorPowerOfTwo:mM,setQuaternionFromProperEuler:gM,normalize:yt,denormalize:si},fe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(f!==x||l!==d||c!==h||u!==p){let m=1-a,g=l*d+c*h+u*p+f*x,y=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let C=Math.sqrt(w),A=Math.atan2(C,g*y);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let b=a*y;if(l=l*m+d*b,c=c*m+h*b,u=u*m+p*b,f=f*m+x*b,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-a*h,e[t+2]=c*p+u*h+a*d-l*f,e[t+3]=u*p-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gd=new M,$m=new He,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],p=i[8],x=r[0],m=r[3],g=r[6],y=r[1],w=r[4],b=r[7],C=r[2],A=r[5],D=r[8];return s[0]=o*x+a*y+l*C,s[3]=o*m+a*w+l*A,s[6]=o*g+a*b+l*D,s[1]=c*x+u*y+f*C,s[4]=c*m+u*w+f*A,s[7]=c*g+u*b+f*D,s[2]=d*x+h*y+p*C,s[5]=d*m+h*w+p*A,s[8]=d*g+h*b+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,p=t*f+i*d+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hd.makeScale(e,t)),this}rotate(e){return this.premultiply(Hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hd=new nt;function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b0(){let n=$s("canvas");return n.style.display="block",n}var Km={};function Ks(n){n in Km||(Km[n]=!0,console.warn(n))}function S0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var eg=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){let n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?ba:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),n}var ut=xM();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=$s("canvas")),Rs.width=e.width,Rs.height=e.height;let r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yM=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wd(r[o].image)):s.push(Wd(r[o]))}else s=Wd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vM=0,qd=new M,xn=class n extends qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xr,r=xr,s=un,o=Dn,a=Ln,l=Wn,c=n.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=vi(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Uf;xn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(h+1)/2,C=(g+1)/2,A=(u+d)/4,D=(f+x)/4,P=(p+m)/4;return w>b&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=D/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=P/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new xn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Gc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wa=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hc=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),sc.subVectors(this.max,sa),Ps.subVectors(e.a,sa),Is.subVectors(e.b,sa),Ds.subVectors(e.c,sa),hr.subVectors(Is,Ps),dr.subVectors(Ds,Is),Hr.subVectors(Ps,Ds);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!Xd(t,Ps,Is,Ds,sc)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,Ps,Is,Ds,sc))?!1:(oc.crossVectors(hr,dr),t=[oc.x,oc.y,oc.z],Xd(t,Ps,Is,Ds,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new M,new M,new M,new M,new M,new M,new M,new M],ni=new M,rc=new Qt,Ps=new M,Is=new M,Ds=new M,hr=new M,dr=new M,Hr=new M,sa=new M,sc=new M,oc=new M,Wr=new M;function Xd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wr.fromArray(n,s);let a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=i.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var _M=new Qt,oa=new M,Yd=new M,jn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Yd)),this.expandByPoint(oa.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vi=new M,Zd=new M,ac=new M,fr=new M,jd=new M,lc=new M,Jd=new M,Qr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zd.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(Zd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=fr.dot(this.direction),l=-fr.dot(ac),c=fr.lengthSq(),u=Math.abs(1-o*o),f,d,h,p;if(u>0)if(f=o*l-a,d=o*a-l,p=s*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zd).addScaledVector(ac,d),h}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){jd.subVectors(t,e),lc.subVectors(i,e),Jd.crossVectors(jd,lc);let o=this.direction.dot(Jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);let l=a*this.direction.dot(lc.crossVectors(fr,lc));if(l<0)return null;let c=a*this.direction.dot(jd.cross(fr));if(c<0||l+c>o)return null;let u=-a*fr.dot(Jd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=h,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,h=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,bM)}lookAt(e,t,i){let r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),pr.crossVectors(i,zn),pr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),pr.crossVectors(i,zn)),pr.normalize(),cc.crossVectors(zn,pr),r[0]=pr.x,r[4]=cc.x,r[8]=zn.x,r[1]=pr.y,r[5]=cc.y,r[9]=zn.y,r[2]=pr.z,r[6]=cc.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],w=i[7],b=i[11],C=i[15],A=r[0],D=r[4],P=r[8],T=r[12],S=r[1],E=r[5],k=r[9],N=r[13],X=r[2],V=r[6],W=r[10],J=r[14],U=r[3],ie=r[7],te=r[11],ce=r[15];return s[0]=o*A+a*S+l*X+c*U,s[4]=o*D+a*E+l*V+c*ie,s[8]=o*P+a*k+l*W+c*te,s[12]=o*T+a*N+l*J+c*ce,s[1]=u*A+f*S+d*X+h*U,s[5]=u*D+f*E+d*V+h*ie,s[9]=u*P+f*k+d*W+h*te,s[13]=u*T+f*N+d*J+h*ce,s[2]=p*A+x*S+m*X+g*U,s[6]=p*D+x*E+m*V+g*ie,s[10]=p*P+x*k+m*W+g*te,s[14]=p*T+x*N+m*J+g*ce,s[3]=y*A+w*S+b*X+C*U,s[7]=y*D+w*E+b*V+C*ie,s[11]=y*P+w*k+b*W+C*te,s[15]=y*T+w*N+b*J+C*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+x*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+g*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=f*m*c-x*d*c+x*l*h-a*m*h-f*l*g+a*d*g,w=p*d*c-u*m*c-p*l*h+o*m*h+u*l*g-o*d*g,b=u*x*c-p*f*c+p*a*h-o*x*h-u*a*g+o*f*g,C=p*f*l-u*x*l-p*a*d+o*x*d+u*a*m-o*f*m,A=t*y+i*w+r*b+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=y*D,e[1]=(x*d*s-f*m*s-x*r*h+i*m*h+f*r*g-i*d*g)*D,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*g+i*l*g)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=w*D,e[5]=(u*m*s-p*d*s+p*r*h-t*m*h-u*r*g+t*d*g)*D,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*D,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*D,e[8]=b*D,e[9]=(p*f*s-u*x*s-p*i*h+t*x*h+u*i*g-t*f*g)*D,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*g+t*a*g)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*D,e[12]=C*D,e[13]=(u*x*r-p*f*r+p*i*d-t*x*d-u*i*m+t*f*m)*D,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*m-t*a*m)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,p=s*f,x=o*u,m=o*f,g=a*f,y=l*c,w=l*u,b=l*f,C=i.x,A=i.y,D=i.z;return r[0]=(1-(x+g))*C,r[1]=(h+b)*C,r[2]=(p-w)*C,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(d+g))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(p+w)*D,r[9]=(m-y)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let c=1/s,u=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===oi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Sa)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===oi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Sa)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new M,ii=new ot,MM=new M(0,0,0),bM=new M(1,1,1),pr=new M,cc=new M,zn=new M,ng=new ot,ig=new He,Kt=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},SM=0,rg=new M,Us=new He,ki=new ot,uc=new M,aa=new M,wM=new M,TM=new He,sg=new M(1,0,0),og=new M(0,1,0),ag=new M(0,0,1),lg={type:"added"},AM={type:"removed"},Fs={type:"childadded",child:null},Qd={type:"childremoved",child:null},zt=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new Kt,i=new He,r=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new nt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uc.copy(e):uc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(aa,uc,this.up):ki.lookAt(uc,aa,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(ki),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AM),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};zt.DEFAULT_UP=new M(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new M,Gi=new M,$d=new M,Hi=new M,Ns=new M,Bs=new M,cg=new M,Kd=new M,ef=new M,tf=new M,nf=new lt,rf=new lt,sf=new lt,Rn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Gi.subVectors(i,t),$d.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(Gi),l=ri.dot($d),c=Gi.dot(Gi),u=Gi.dot($d),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Gi.subVectors(e,t),ri.cross(Gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ri.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ns.subVectors(r,i),Bs.subVectors(s,i),Kd.subVectors(e,i);let l=Ns.dot(Kd),c=Bs.dot(Kd);if(l<=0&&c<=0)return t.copy(i);ef.subVectors(e,r);let u=Ns.dot(ef),f=Bs.dot(ef);if(u>=0&&f<=u)return t.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ns,o);tf.subVectors(e,s);let h=Ns.dot(tf),p=Bs.dot(tf);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Bs,a);let m=u*p-h*f;if(m<=0&&f-u>=0&&h-p>=0)return cg.subVectors(s,r),a=(f-u)/(f-u+(h-p)),t.copy(r).addScaledVector(cg,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Ns,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},hc={h:0,s:0,l:0};function of(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Wf(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ut.workingToColorSpace(gn.copy(this),e),Math.round(Ke(gn.r*255,0,255))*65536+Math.round(Ke(gn.g*255,0,255))*256+Math.round(Ke(gn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(gn.copy(this),t);let i=gn.r,r=gn.g,s=gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=pt){ut.workingToColorSpace(gn.copy(this),e);let t=gn.r,i=gn.g,r=gn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(hc);let i=ya(mr.h,hc.h,t),r=ya(mr.s,hc.s,t),s=ya(mr.l,hc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new De;De.NAMES=w0;var EM=0,Jn=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Zr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Bc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_t=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new M,dc=new fe,CM=0,ht=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}};var $r=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ta=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Be=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},RM=0,Zn=new ot,af=new zt,Os=new M,Vn=new Qt,la=new Qt,sn=new M,$e=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?Ta:$r)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Vn.min,la.min),Vn.expandByPoint(sn),sn.addVectors(Vn.max,la.max),Vn.expandByPoint(sn)):(Vn.expandByPoint(la.min),Vn.expandByPoint(la.max))}Vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),sn.add(Os)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new M,l[P]=new M;let c=new M,u=new M,f=new M,d=new fe,h=new fe,p=new fe,x=new M,m=new M;function g(P,T,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),p.sub(d);let E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(E),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(E),a[P].add(x),a[T].add(x),a[S].add(x),l[P].add(m),l[T].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,T=y.length;P<T;++P){let S=y[P],E=S.start,k=S.count;for(let N=E,X=E+k;N<X;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new M,b=new M,C=new M,A=new M;function D(P){C.fromBufferAttribute(r,P),A.copy(C);let T=a[P];w.copy(T),w.sub(C.multiplyScalar(C.dot(T))).normalize(),b.crossVectors(A,T);let E=b.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,E)}for(let P=0,T=y.length;P<T;++P){let S=y[P],E=S.start,k=S.count;for(let N=E,X=E+k;N<X;N+=3)D(e.getX(N+0)),D(e.getX(N+1)),D(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new M,s=new M,o=new M,a=new M,l=new M,c=new M,u=new M,f=new M;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),h=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[h++]}return new ht(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ug=new ot,qr=new Qr,fc=new jn,hg=new M,pc=new M,mc=new M,gc=new M,lf=new M,xc=new M,dg=new M,yc=new M,Ve=class extends zt{constructor(e=new $e,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(lf.fromBufferAttribute(f,e),o?xc.addScaledVector(lf,u):xc.addScaledVector(lf.sub(t),u))}t.add(xc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(fc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(fc,hg)===null||qr.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),qr.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,C=w;b<C;b+=3){let A=a.getX(b),D=a.getX(b+1),P=a.getX(b+2);r=vc(this,g,e,i,c,u,f,A,D,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);r=vc(this,o,e,i,c,u,f,y,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,C=w;b<C;b+=3){let A=b,D=b+1,P=b+2;r=vc(this,g,e,i,c,u,f,A,D,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,b=m+2;r=vc(this,o,e,i,c,u,f,y,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function PM(n,e,t,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;yc.copy(a),yc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(yc);return c<t.near||c>t.far?null:{distance:c,point:yc.clone(),object:n}}function vc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,pc),n.getVertexPosition(l,mc),n.getVertexPosition(c,gc);let u=PM(n,e,t,i,pc,mc,gc,dg);if(u){let f=new M;Rn.getBarycoord(dg,pc,mc,gc,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,l,c,f,new fe)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,l,c,f,new fe)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,f,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};Rn.getNormal(pc,mc,gc,d.normal),u.face=d,u.barycoord=f}return u}var et=class n extends $e{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(f,2));function p(x,m,g,y,w,b,C,A,D,P,T){let S=b/D,E=C/P,k=b/2,N=C/2,X=A/2,V=D+1,W=P+1,J=0,U=0,ie=new M;for(let te=0;te<W;te++){let ce=te*E-N;for(let _e=0;_e<V;_e++){let Ae=_e*S-k;ie[x]=Ae*y,ie[m]=ce*w,ie[g]=X,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[g]=A>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(_e/D),f.push(1-te/P),J+=1}}for(let te=0;te<P;te++)for(let ce=0;ce<D;ce++){let _e=d+ce+V*te,Ae=d+ce+V*(te+1),Ie=d+(ce+1)+V*(te+1),Pe=d+(ce+1)+V*te;l.push(_e,Ae,Pe),l.push(Ae,Ie,Pe),U+=6}a.addGroup(h,U,T),h+=U,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=os(n[t]);for(let r in i)e[r]=i[r]}return e}function IM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var oh={clone:os,merge:yn},DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Aa=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new M,fg=new fe,pg=new fe,Yt=class extends Aa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,fg,pg),t.subVectors(pg,fg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Vs=1,Wc=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(zs,Vs,e,t);r.layers=this.layers,this.add(r);let s=new Yt(zs,Vs,e,t);s.layers=this.layers,this.add(s);let o=new Yt(zs,Vs,e,t);o.layers=this.layers,this.add(o);let a=new Yt(zs,Vs,e,t);a.layers=this.layers,this.add(a);let l=new Yt(zs,Vs,e,t);l.layers=this.layers,this.add(l);let c=new Yt(zs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ea=class extends xn{constructor(e=[],t=rs,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ea(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:ji});s.uniforms.tEquirect.value=t;let o=new Ve(r,s),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=un),new Wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Tt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},UM={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ca=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ra=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new M,io=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ro=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,ca=new M,Gs=new M,Hs=new M,Ws=new fe,ua=new fe,T0=new ot,_c=new M,ha=new M,Mc=new M,mg=new fe,cf=new fe,gg=new fe,Pa=class extends zt{constructor(e=new ro){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ra(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new io(i,3,0,!1)),ks.setAttribute("uv",new io(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),T0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Hs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;bc(_c.set(-.5,-.5,0),Hs,o,Gs,r,s),bc(ha.set(.5,-.5,0),Hs,o,Gs,r,s),bc(Mc.set(.5,.5,0),Hs,o,Gs,r,s),mg.set(0,0),cf.set(1,0),gg.set(1,1);let a=e.ray.intersectTriangle(_c,ha,Mc,!1,ca);if(a===null&&(bc(ha.set(-.5,.5,0),Hs,o,Gs,r,s),cf.set(0,1),a=e.ray.intersectTriangle(_c,Mc,ha,!1,ca),a===null))return;let l=e.ray.origin.distanceTo(ca);l<e.near||l>e.far||t.push({distance:l,point:ca.clone(),uv:Rn.getInterpolation(ca,_c,ha,Mc,mg,cf,gg,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bc(n,e,t,i,r,s){Ws.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ua.x=s*Ws.x-r*Ws.y,ua.y=r*Ws.x+s*Ws.y):ua.copy(Ws),n.copy(e),n.x+=ua.x,n.y+=ua.y,n.applyMatrix4(T0)}var _i=class extends xn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=cn,u=cn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var so=class extends ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new ot,xg=new ot,Sc=[],yg=new Qt,FM=new ot,da=new Ve,fa=new jn,Ia=class extends Ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new so(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,FM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),yg.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(yg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),fa.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qs),xg.multiplyMatrices(i,qs),da.matrixWorld=xg,da.raycast(e,Sc);for(let o=0,a=Sc.length;o<a;o++){let l=Sc[o];l.instanceId=s,l.object=this,t.push(l)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new so(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,Eu,di));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},uf=new M,NM=new M,BM=new nt,Cn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=uf.subVectors(i,t).cross(NM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||BM.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xr=new jn,OM=new fe(.5,.5),wc=new M,oo=class{constructor(e=new Cn,t=new Cn,i=new Cn,r=new Cn,s=new Cn,o=new Cn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],p=s[8],x=s[9],m=s[10],g=s[11],y=s[12],w=s[13],b=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,g-p,C-y).normalize(),r[1].setComponents(c+o,h+u,g+p,C+y).normalize(),r[2].setComponents(c+a,h+f,g+x,C+w).normalize(),r[3].setComponents(c-a,h-f,g-x,C-w).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,h-d,g-m,C-b).normalize();else if(r[4].setComponents(c-l,h-d,g-m,C-b).normalize(),t===oi)r[5].setComponents(c+l,h+d,g+m,C+b).normalize();else if(t===Sa)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);let t=OM.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(wc.x=r.normal.x>0?e.max.x:e.min.x,wc.y=r.normal.y>0?e.max.y:e.min.y,wc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xc=new M,Yc=new M,vg=new ot,pa=new Qr,Tc=new jn,hf=new M,_g=new M,Da=class extends zt{constructor(e=new $e,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Xc.fromBufferAttribute(t,r-1),Yc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xc.distanceTo(Yc);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(r),Tc.radius+=s,e.ray.intersectsSphere(Tc)===!1)return;vg.copy(r).invert(),pa.copy(e.ray).applyMatrix4(vg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),w=Ac(this,e,pa,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(h),g=Ac(this,e,pa,l,x,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=Ac(this,e,pa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ac(this,e,pa,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ac(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Xc.fromBufferAttribute(a,r),Yc.fromBufferAttribute(a,s),t.distanceSqToSegment(Xc,Yc,hf,_g)>i)return;hf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(hf);if(!(c<e.near||c>e.far))return{distance:c,point:_g.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Mg=new M,bg=new M,es=class extends Da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Mg.fromBufferAttribute(t,r),bg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(bg);e.setAttribute("lineDistance",new Be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},La=class extends Da{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ao=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sg=new ot,bf=new Qr,Ec=new jn,Cc=new M,Ua=class extends zt{constructor(e=new $e,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;Sg.copy(r).invert(),bf.copy(e.ray).applyMatrix4(Sg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=d,x=h;p<x;p++){let m=c.getX(p);Cc.fromBufferAttribute(f,m),wg(Cc,m,l,r,e,t,this)}}else{let d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let p=d,x=h;p<x;p++)Cc.fromBufferAttribute(f,p),wg(Cc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wg(n,e,t,i,r,s,o){let a=bf.distanceSqToPoint(n);if(a<t){let l=new M;bf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var li=class extends xn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fa=class extends xn{constructor(e,t,i=Sr,r,s,o,a=cn,l=cn,c,u=Js,f=1){if(u!==Js&&u!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Na=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vr=class n extends $e{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,f=Math.PI/2*e,d=t,h=2*f+d,p=i*2+s,x=r+1,m=new M,g=new M;for(let y=0;y<=p;y++){let w=0,b=0,C=0,A=0;if(y<=i){let T=y/i,S=T*Math.PI/2;b=-u-e*Math.cos(S),C=e*Math.sin(S),A=-e*Math.cos(S),w=T*f}else if(y<=i+s){let T=(y-i)/s;b=-u+T*t,C=e,A=0,w=f+T*d}else{let T=(y-i-s)/i,S=T*Math.PI/2;b=u+e*Math.sin(S),C=e*Math.cos(S),A=e*Math.sin(S),w=f+d+T*f}let D=Math.max(0,Math.min(1,w/h)),P=0;y===0?P=.5/r:y===p&&(P=-.5/r);for(let T=0;T<=r;T++){let S=T/r,E=S*Math.PI*2,k=Math.sin(E),N=Math.cos(E);g.x=-C*N,g.y=b,g.z=C*k,a.push(g.x,g.y,g.z),m.set(-C*N,A,C*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+P,D)}if(y>0){let T=(y-1)*x;for(let S=0;S<r;S++){let E=T+S,k=T+S+1,N=y*x+S,X=y*x+S+1;o.push(E,k,N),o.push(k,X,N)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},on=class n extends $e{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new M,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let h=i+f/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class n extends $e{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],d=[],h=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Be(f,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(h,2));function y(){let b=new M,C=new M,A=0,D=(t-e)/i;for(let P=0;P<=s;P++){let T=[],S=P/s,E=S*(t-e)+e;for(let k=0;k<=r;k++){let N=k/r,X=N*l+a,V=Math.sin(X),W=Math.cos(X);C.x=E*V,C.y=-S*i+m,C.z=E*W,f.push(C.x,C.y,C.z),b.set(V,D,W).normalize(),d.push(b.x,b.y,b.z),h.push(N,1-S),T.push(p++)}x.push(T)}for(let P=0;P<r;P++)for(let T=0;T<s;T++){let S=x[T][P],E=x[T+1][P],k=x[T+1][P+1],N=x[T][P+1];(e>0||T!==0)&&(u.push(S,E,N),A+=3),(t>0||T!==s-1)&&(u.push(E,k,N),A+=3)}c.addGroup(g,A,0),g+=A}function w(b){let C=p,A=new fe,D=new M,P=0,T=b===!0?e:t,S=b===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*S,0),d.push(0,S,0),h.push(.5,.5),p++;let E=p;for(let k=0;k<=r;k++){let X=k/r*l+a,V=Math.cos(X),W=Math.sin(X);D.x=T*W,D.y=m*S,D.z=T*V,f.push(D.x,D.y,D.z),d.push(0,S,0),A.x=V*.5+.5,A.y=W*.5*S+.5,h.push(A.x,A.y),p++}for(let k=0;k<r;k++){let N=C+k,X=E+k;b===!0?u.push(X,X+1,N):u.push(X+1,X,N),P+=3}c.addGroup(g,P,b===!0?1:2),g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class n extends Zt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class n extends $e{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(s.slice(),3)),this.setAttribute("uv",new Be(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new M,b=new M,C=new M;for(let A=0;A<t.length;A+=3)h(t[A+0],w),h(t[A+1],b),h(t[A+2],C),l(w,b,C,y)}function l(y,w,b,C){let A=C+1,D=[];for(let P=0;P<=A;P++){D[P]=[];let T=y.clone().lerp(b,P/A),S=w.clone().lerp(b,P/A),E=A-P;for(let k=0;k<=E;k++)k===0&&P===A?D[P][k]=T:D[P][k]=T.clone().lerp(S,k/E)}for(let P=0;P<A;P++)for(let T=0;T<2*(A-P)-1;T++){let S=Math.floor(T/2);T%2===0?(d(D[P][S+1]),d(D[P+1][S]),d(D[P][S])):(d(D[P][S+1]),d(D[P+1][S+1]),d(D[P+1][S]))}}function c(y){let w=new M;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(y),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function u(){let y=new M;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];let b=m(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;o.push(b,1-C)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let w=o[y+0],b=o[y+2],C=o[y+4],A=Math.max(w,b,C),D=Math.min(w,b,C);A>.9&&D<.1&&(w<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,w){let b=y*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function p(){let y=new M,w=new M,b=new M,C=new M,A=new fe,D=new fe,P=new fe;for(let T=0,S=0;T<s.length;T+=9,S+=6){y.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),b.set(s[T+6],s[T+7],s[T+8]),A.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),C.copy(y).add(w).add(b).divideScalar(3);let E=m(C);x(A,S+0,y,E),x(D,S+2,w,E),x(P,S+4,b,E)}}function x(y,w,b,C){C<0&&y.x===1&&(o[w]=y.x-1),b.x===0&&b.z===0&&(o[w]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new fe:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,r=[],s=[],o=[],a=new M,l=new ot;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new M)}s[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},co=class extends Gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends co{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Rc=new M,df=new Yf,ff=new Yf,pf=new Yf,jc=class extends Gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new M){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Rc.subVectors(r[0],r[1]).add(r[0]),c=Rc);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Rc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Rc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),df.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,p,x,m),ff.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,p,x,m),pf.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(df.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),ff.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),pf.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(df.calc(l),ff.calc(l),pf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function zM(n,e){let t=1-n;return t*t*e}function VM(n,e){return 2*(1-n)*n*e}function kM(n,e){return n*n*e}function va(n,e,t,i){return zM(n,e)+VM(n,t)+kM(n,i)}function GM(n,e){let t=1-n;return t*t*t*e}function HM(n,e){let t=1-n;return 3*t*t*n*e}function WM(n,e){return 3*(1-n)*n*n*e}function qM(n,e){return n*n*n*e}function _a(n,e,t,i,r){return GM(n,e)+HM(n,t)+WM(n,i)+qM(n,r)}var Ba=class extends Gn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_a(e,r.x,s.x,o.x,a.x),_a(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Gn{constructor(e=new M,t=new M,i=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_a(e,r.x,s.x,o.x,a.x),_a(e,r.y,s.y,o.y,a.y),_a(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends Gn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Gn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Gn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(va(e,r.x,s.x,o.x),va(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Gn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(va(e,r.x,s.x,o.x),va(e,r.y,s.y,o.y),va(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Tg(a,l.x,c.x,u.x,f.x),Tg(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new fe().fromArray(r))}return this}},Sf=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:jc,CubicBezierCurve:Ba,CubicBezierCurve3:Jc,EllipseCurve:co,LineCurve:Oa,LineCurve3:Qc,QuadraticBezierCurve:za,QuadraticBezierCurve3:$c,SplineCurve:Va}),Kc=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Sf[r.type]().fromJSON(r))}return this}},ka=class extends Kc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Oa(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new za(this.currentPoint.clone(),new fe(e,t),new fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Ba(this.currentPoint.clone(),new fe(e,t),new fe(i,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new co(e,t,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ci=class extends ka{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ka().fromJSON(r))}return this}};function XM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=A0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=QM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let d=t;d<r;d+=t){let h=n[d],p=n[d+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ga(s,o,t,a,l,c,0),o}function A0(n,e,t,i,r){let s;if(r===lb(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ag(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ag(o/i|0,n[o],n[o+1],s);return s&&uo(s,s.next)&&(Wa(s),s=s.next),s}function ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(uo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ga(n,e,t,i,r,s,o){if(!n)return;!o&&s&&nb(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?ZM(n,i,r,s):YM(n)){e.push(l.i,n.i,c.i),Wa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jM(ts(n),e),Ga(n,e,t,i,r,s,2)):o===2&&JM(n,e,t,i,r,s):Ga(ts(n),e,t,i,r,s,1);break}}}function YM(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&ga(r,a,s,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ZM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,h=Math.min(a,l,c),p=Math.min(u,f,d),x=Math.max(a,l,c),m=Math.max(u,f,d),g=wf(h,p,e,t,i),y=wf(x,m,e,t,i),w=n.prevZ,b=n.nextZ;for(;w&&w.z>=g&&b&&b.z<=y;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&ga(a,u,l,f,c,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=h&&b.x<=x&&b.y>=p&&b.y<=m&&b!==r&&b!==o&&ga(a,u,l,f,c,d,b.x,b.y)&&Ot(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=g;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&ga(a,u,l,f,c,d,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=h&&b.x<=x&&b.y>=p&&b.y<=m&&b!==r&&b!==o&&ga(a,u,l,f,c,d,b.x,b.y)&&Ot(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function jM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!uo(i,r)&&C0(i,t,t.next,r)&&Ha(i,r)&&Ha(r,i)&&(e.push(i.i,t.i,r.i),Wa(t),Wa(t.next),t=n=r),t=t.next}while(t!==n);return ts(t)}function JM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sb(o,a)){let l=R0(o,a);o=ts(o,o.next),l=ts(l,l.next),Ga(o,e,t,i,r,s,0),Ga(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function QM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=A0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(rb(c))}r.sort($M);for(let s=0;s<r.length;s++)t=KM(r[s],t);return t}function $M(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function KM(n,e){let t=eb(n,e);if(!t)return e;let i=R0(t,n);return ts(i,i.next),ts(t,t.next)}function eb(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(uo(n,t))return t;do{if(uo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&E0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let f=Math.abs(r-t.y)/(i-t.x);Ha(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&tb(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function tb(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function nb(n,e,t,i){let r=n;do r.z===0&&(r.z=wf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,ib(r)}function ib(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function wf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function E0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ga(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&E0(n,e,t,i,r,s,o,a)}function sb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ob(n,e)&&(Ha(n,e)&&Ha(e,n)&&ab(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||uo(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function uo(n,e){return n.x===e.x&&n.y===e.y}function C0(n,e,t,i){let r=Ic(Ot(n,e,t)),s=Ic(Ot(n,e,i)),o=Ic(Ot(t,i,n)),a=Ic(Ot(t,i,e));return!!(r!==s&&o!==a||r===0&&Pc(n,t,e)||s===0&&Pc(n,i,e)||o===0&&Pc(t,n,i)||a===0&&Pc(t,e,i))}function Pc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ic(n){return n>0?1:n<0?-1:0}function ob(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&C0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ha(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function ab(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function R0(n,e){let t=Tf(n.i,n.x,n.y),i=Tf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ag(n,e,t,i){let r=Tf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Af=class{static triangulate(e,t,i=2){return XM(e,t,i)}},yi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Eg(e),Cg(i,e);let o=e.length;t.forEach(Eg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Cg(i,t[l]);let a=Af.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Eg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Yi=class n extends $e{constructor(e=new ci([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Be(r,3)),this.setAttribute("uv",new Be(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:cb,w,b=!1,C,A,D,P;g&&(w=g.getSpacedPoints(u),b=!0,d=!1,C=g.computeFrenetFrames(u,!1),A=new M,D=new M,P=new M),d||(m=0,h=0,p=0,x=0);let T=a.extractPoints(c),S=T.shape,E=T.holes;if(!yi.isClockWise(S)){S=S.reverse();for(let F=0,O=E.length;F<O;F++){let B=E[F];yi.isClockWise(B)&&(E[F]=B.reverse())}}function N(F){let B=10000000000000001e-36,z=F[0];for(let H=1;H<=F.length;H++){let ee=H%F.length,se=F[ee],me=se.x-z.x,Ce=se.y-z.y,I=me*me+Ce*Ce,_=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(z.x),Math.abs(z.y)),L=B*_*_;if(I<=L){F.splice(ee,1),H--;continue}z=se}}N(S),E.forEach(N);let X=E.length,V=S;for(let F=0;F<X;F++){let O=E[F];S=S.concat(O)}function W(F,O,B){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(O,B)}let J=S.length;function U(F,O,B){let z,H,ee,se=F.x-O.x,me=F.y-O.y,Ce=B.x-F.x,I=B.y-F.y,_=se*se+me*me,L=se*I-me*Ce;if(Math.abs(L)>Number.EPSILON){let j=Math.sqrt(_),K=Math.sqrt(Ce*Ce+I*I),Z=O.x-me/j,he=O.y+se/j,ue=B.x-I/K,pe=B.y+Ce/K,ge=((ue-Z)*I-(pe-he)*Ce)/(se*I-me*Ce);z=Z+se*ge-F.x,H=he+me*ge-F.y;let le=z*z+H*H;if(le<=2)return new fe(z,H);ee=Math.sqrt(le/2)}else{let j=!1;se>Number.EPSILON?Ce>Number.EPSILON&&(j=!0):se<-Number.EPSILON?Ce<-Number.EPSILON&&(j=!0):Math.sign(me)===Math.sign(I)&&(j=!0),j?(z=-me,H=se,ee=Math.sqrt(_)):(z=se,H=me,ee=Math.sqrt(_/2))}return new fe(z/ee,H/ee)}let ie=[];for(let F=0,O=V.length,B=O-1,z=F+1;F<O;F++,B++,z++)B===O&&(B=0),z===O&&(z=0),ie[F]=U(V[F],V[B],V[z]);let te=[],ce,_e=ie.concat();for(let F=0,O=X;F<O;F++){let B=E[F];ce=[];for(let z=0,H=B.length,ee=H-1,se=z+1;z<H;z++,ee++,se++)ee===H&&(ee=0),se===H&&(se=0),ce[z]=U(B[z],B[ee],B[se]);te.push(ce),_e=_e.concat(ce)}let Ae;if(m===0)Ae=yi.triangulateShape(V,E);else{let F=[],O=[];for(let B=0;B<m;B++){let z=B/m,H=h*Math.cos(z*Math.PI/2),ee=p*Math.sin(z*Math.PI/2)+x;for(let se=0,me=V.length;se<me;se++){let Ce=W(V[se],ie[se],ee);Ee(Ce.x,Ce.y,-H),z===0&&F.push(Ce)}for(let se=0,me=X;se<me;se++){let Ce=E[se];ce=te[se];let I=[];for(let _=0,L=Ce.length;_<L;_++){let j=W(Ce[_],ce[_],ee);Ee(j.x,j.y,-H),z===0&&I.push(j)}z===0&&O.push(I)}}Ae=yi.triangulateShape(F,O)}let Ie=Ae.length,Pe=p+x;for(let F=0;F<J;F++){let O=d?W(S[F],_e[F],Pe):S[F];b?(D.copy(C.normals[0]).multiplyScalar(O.x),A.copy(C.binormals[0]).multiplyScalar(O.y),P.copy(w[0]).add(D).add(A),Ee(P.x,P.y,P.z)):Ee(O.x,O.y,0)}for(let F=1;F<=u;F++)for(let O=0;O<J;O++){let B=d?W(S[O],_e[O],Pe):S[O];b?(D.copy(C.normals[F]).multiplyScalar(B.x),A.copy(C.binormals[F]).multiplyScalar(B.y),P.copy(w[F]).add(D).add(A),Ee(P.x,P.y,P.z)):Ee(B.x,B.y,f/u*F)}for(let F=m-1;F>=0;F--){let O=F/m,B=h*Math.cos(O*Math.PI/2),z=p*Math.sin(O*Math.PI/2)+x;for(let H=0,ee=V.length;H<ee;H++){let se=W(V[H],ie[H],z);Ee(se.x,se.y,f+B)}for(let H=0,ee=E.length;H<ee;H++){let se=E[H];ce=te[H];for(let me=0,Ce=se.length;me<Ce;me++){let I=W(se[me],ce[me],z);b?Ee(I.x,I.y+w[u-1].y,w[u-1].x+B):Ee(I.x,I.y,f+B)}}}ne(),re();function ne(){let F=r.length/3;if(d){let O=0,B=J*O;for(let z=0;z<Ie;z++){let H=Ae[z];Me(H[2]+B,H[1]+B,H[0]+B)}O=u+m*2,B=J*O;for(let z=0;z<Ie;z++){let H=Ae[z];Me(H[0]+B,H[1]+B,H[2]+B)}}else{for(let O=0;O<Ie;O++){let B=Ae[O];Me(B[2],B[1],B[0])}for(let O=0;O<Ie;O++){let B=Ae[O];Me(B[0]+J*u,B[1]+J*u,B[2]+J*u)}}i.addGroup(F,r.length/3-F,0)}function re(){let F=r.length/3,O=0;xe(V,O),O+=V.length;for(let B=0,z=E.length;B<z;B++){let H=E[B];xe(H,O),O+=H.length}i.addGroup(F,r.length/3-F,1)}function xe(F,O){let B=F.length;for(;--B>=0;){let z=B,H=B-1;H<0&&(H=F.length-1);for(let ee=0,se=u+m*2;ee<se;ee++){let me=J*ee,Ce=J*(ee+1),I=O+z+me,_=O+H+me,L=O+H+Ce,j=O+z+Ce;Oe(I,_,L,j)}}}function Ee(F,O,B){l.push(F),l.push(O),l.push(B)}function Me(F,O,B){Y(F),Y(O),Y(B);let z=r.length/3,H=y.generateTopUV(i,r,z-3,z-2,z-1);v(H[0]),v(H[1]),v(H[2])}function Oe(F,O,B,z){Y(F),Y(O),Y(z),Y(O),Y(B),Y(z);let H=r.length/3,ee=y.generateSideWallUV(i,r,H-6,H-3,H-2,H-1);v(ee[0]),v(ee[1]),v(ee[3]),v(ee[1]),v(ee[2]),v(ee[3])}function Y(F){r.push(l[F*3+0]),r.push(l[F*3+1]),r.push(l[F*3+2])}function v(F){s.push(F.x),s.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ub(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sf[r.type]().fromJSON(r)),new n(i,e.options)}},cb={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-f),new fe(d,1-p),new fe(x,1-g)]:[new fe(a,1-l),new fe(u,1-f),new fe(h,1-p),new fe(m,1-g)]}};function ub(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ft=class n extends lo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qa=class n extends $e{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ke(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,f=new M,d=new fe,h=new M,p=new M,x=new M,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let w=i+y*u*r,b=Math.sin(w),C=Math.cos(w);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*b,f.y=e[A].y,f.z=e[A].x*C,o.push(f.x,f.y,f.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);let D=l[3*A+0]*b,P=l[3*A+1],T=l[3*A+0]*C;c.push(D,P,T)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let b=w+y*e.length,C=b,A=b+e.length,D=b+e.length+1,P=b+1;s.push(C,A,P),s.push(D,P,A)}this.setIndex(s),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ui=class n extends lo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},en=class n extends $e{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*d-o;for(let w=0;w<c;w++){let b=w*f-s;p.push(b,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,b=y+c*(g+1),C=y+1+c*(g+1),A=y+1+c*g;h.push(w,b,A),h.push(b,C,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ho=class n extends $e{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],f=e,d=(t-e)/r,h=new M,p=new fe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let g=s+m/i*o;h.x=f*Math.cos(g),h.y=f*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}f+=d}for(let x=0;x<r;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,w=y,b=y+i+1,C=y+i+2,A=y+1;a.push(w,b,A),a.push(b,C,A)}}this.setIndex(a),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Xa=class n extends $e{constructor(e=new ci([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(s,3)),this.setAttribute("uv",new Be(o,2));function c(u){let f=r.length/3,d=u.extractPoints(t),h=d.shape,p=d.holes;yi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];yi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=yi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];h=h.concat(y)}for(let m=0,g=h.length;m<g;m++){let y=h[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+f,b=y[1]+f,C=y[2]+f;i.push(w,b,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hb(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function hb(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var In=class n extends $e{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new M,d=new M,h=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],w=g/i,b=0;g===0&&o===0?b=.5/t:g===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){let A=C/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+w*a),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-w),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let w=u[g][y+1],b=u[g][y],C=u[g+1][y],A=u[g+1][y+1];(g!==0||o>0)&&h.push(w,b,A),(g!==i-1||l<Math.PI)&&h.push(b,C,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ns=class n extends lo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},hi=class n extends $e{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new M,f=new M,d=new M;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,m=h/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,m=(r+1)*(h-1)+p-1,g=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _r=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new M,s=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let f=l[c],d=f.start,h=f.count;for(let p=d,x=d+h;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),y=a.getX(p+(m+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,y),Rg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Rg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var gt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ya=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var dn=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},eu=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tu=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function db(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var is=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends is{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vf:s=e,a=2*t-i;break;case _f:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vf:o=e,l=2*i-t;break;case _f:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-h)*m+(1.5+h)*x+.5*p,b=h*m-h*x;for(let C=0;C!==a;++C)s[C]=g*o[u+C]+y*o[c+C]+w*o[l+C]+b*o[f+C];return s}},iu=class extends is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},ru=class extends is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dc(t,this.TimeBufferType),this.values=Dc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dc(e.times,Array),values:Dc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case zc:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&db(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Uc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,h=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=zc;var Mr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Ma;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};su.prototype.ValueTypeName="color";var ou=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};ou.prototype.ValueTypeName="number";var au=class extends is{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)He.slerpFlat(s,0,o,c-a,o,c,l);return s}},Za=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends Hn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Ma;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};lu.prototype.ValueTypeName="vector";var Fc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},cu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},P0=new cu,fo=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=new WeakMap,uu=class extends fo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Fc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Xs.get(o);f===void 0&&(f=[],Xs.set(o,f)),f.push({onLoad:t,onError:r})}return o}let a=$s("img");function l(){u(),t&&t(this);let f=Xs.get(this)||[];for(let d=0;d<f.length;d++){let h=f[d];h.onLoad&&h.onLoad(this)}Xs.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Fc.remove(`image:${e}`);let d=Xs.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onError&&p.onError(f)}Xs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var bi=class extends fo{constructor(e){super(e)}load(e,t,i,r){let s=new xn,o=new uu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},po=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ja=class extends po{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mf=new ot,Pg=new M,Ig=new M,hu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pg),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Dg=new ot,ma=new M,gf=new M,Ef=class extends hu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(ma),gf.copy(i.position),gf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gf),i.updateMatrixWorld(),r.makeTranslation(-ma.x,-ma.y,-ma.z),Dg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg,i.coordinateSystem,i.reversedDepth)}},Ja=class extends po{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Qa=class extends Aa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cf=class extends hu{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var du=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zf="\\[\\]\\.:\\/",fb=new RegExp("["+Zf+"]","g"),jf="[^"+Zf+"]",pb="[^"+Zf.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",jf),gb=/(WCOD+)?/.source.replace("WCOD",pb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jf),yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jf),vb=new RegExp("^"+mb+gb+xb+yb+"$"),_b=["material","materials","bones","map"],Rf=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){let t=vb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);_b.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Rf;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aC=new Float32Array(1);var Lg=new ot,Zi=class{constructor(e,t,i=0,r=1/0){this.ray=new Qr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lg),this}intersectObject(e,t=!0,i=[]){return Pf(e,this,i,t),i.sort(Ug),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pf(e[r],this,i,t);return i.sort(Ug),i}};function Ug(n,e){return n.distance-e.distance}function Pf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Pf(s[o],e,t,!0)}}var Fg=new M,Lc=new M,Ys=new M,Zs=new M,xf=new M,Mb=new M,bb=new M,Ka=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fg.subVectors(e,this.start),Lc.subVectors(this.end,this.start);let i=Lc.dot(Lc),s=Lc.dot(Fg)/i;return t&&(s=Ke(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Mb,i=bb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Ys.subVectors(c,a),Zs.subVectors(u,l),xf.subVectors(a,l);let f=Ys.dot(Ys),d=Zs.dot(Zs),h=Zs.dot(xf);if(f<=r&&d<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,o=h/d,o=Ke(o,0,1);else{let p=Ys.dot(xf);if(d<=r)o=0,s=Ke(-p/f,0,1);else{let x=Ys.dot(Zs),m=f*d-x*x;m!==0?s=Ke((x*h-p*d)/m,0,1):s=0,o=(x*s+h)/d,o<0?(o=0,s=Ke(-p/f,0,1)):o>1&&(o=1,s=Ke((x-p)/f,0,1))}}return t.copy(a).add(Ys.multiplyScalar(s)),i.copy(l).add(Zs.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Jf(n,e,t,i){let r=Sb(i);switch(t){case zf:return n*e;case Eu:return n*e/r.components*r.byteLength;case Cu:return n*e/r.components*r.byteLength;case kf:return n*e*2/r.components*r.byteLength;case Ru:return n*e*2/r.components*r.byteLength;case Vf:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case Pu:return n*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Du:case Uu:return Math.max(n,16)*Math.max(e,8)/4;case Iu:case Lu:return Math.max(n,8)*Math.max(e,8)/2;case Fu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $u:case Ku:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ih:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sb(n){switch(n){case Wn:case Ff:return{byteLength:1,components:1};case go:case Nf:case wi:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case Sr:case wu:case di:return{byteLength:4,components:1};case Bf:case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,Nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Hb=`#ifdef USE_BUMPMAP
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,Kb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e1=`vec3 transformedNormal = objectNormal;
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
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",o1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
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
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A1=`PhysicalMaterial material;
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
#endif`,E1=`struct PhysicalMaterial {
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
}`,C1=`
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O1=`#if defined( USE_POINTS_UV )
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
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
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
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
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
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
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
}`,FS=`#if DEPTH_PACKING == 3200
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
}`,NS=`#define DISTANCE
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
}`,BS=`#define DISTANCE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
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
}`,kS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,HS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,XS=`#define MATCAP
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
}`,YS=`#define MATCAP
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
}`,ZS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,JS=`#define PHONG
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
}`,QS=`#define PHONG
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
}`,$S=`#define STANDARD
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
}`,KS=`#define STANDARD
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
}`,ew=`#define TOON
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
}`,tw=`#define TOON
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
}`,nw=`uniform float size;
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 color;
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
}`,ow=`uniform float rotation;
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
}`,aw=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Rb,alphahash_pars_fragment:Pb,alphamap_fragment:Ib,alphamap_pars_fragment:Db,alphatest_fragment:Lb,alphatest_pars_fragment:Ub,aomap_fragment:Fb,aomap_pars_fragment:Nb,batching_pars_vertex:Bb,batching_vertex:Ob,begin_vertex:zb,beginnormal_vertex:Vb,bsdfs:kb,iridescence_fragment:Gb,bumpmap_pars_fragment:Hb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:jb,color_pars_vertex:Jb,color_vertex:Qb,common:$b,cube_uv_reflection_fragment:Kb,defaultnormal_vertex:e1,displacementmap_pars_vertex:t1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:r1,colorspace_fragment:s1,colorspace_pars_fragment:o1,envmap_fragment:a1,envmap_common_pars_fragment:l1,envmap_pars_fragment:c1,envmap_pars_vertex:u1,envmap_physical_pars_fragment:M1,envmap_vertex:h1,fog_vertex:d1,fog_pars_vertex:f1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_pars_fragment:x1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:v1,lights_pars_begin:_1,lights_toon_fragment:b1,lights_toon_pars_fragment:S1,lights_phong_fragment:w1,lights_phong_pars_fragment:T1,lights_physical_fragment:A1,lights_physical_pars_fragment:E1,lights_fragment_begin:C1,lights_fragment_maps:R1,lights_fragment_end:P1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:U1,map_fragment:F1,map_pars_fragment:N1,map_particle_fragment:B1,map_particle_pars_fragment:O1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:V1,morphinstance_vertex:k1,morphcolor_vertex:G1,morphnormal_vertex:H1,morphtarget_pars_vertex:W1,morphtarget_vertex:q1,normal_fragment_begin:X1,normal_fragment_maps:Y1,normal_pars_fragment:Z1,normal_pars_vertex:j1,normal_vertex:J1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:hS,shadowmap_vertex:dS,shadowmask_pars_fragment:fS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:xS,specularmap_fragment:yS,specularmap_pars_fragment:vS,tonemapping_fragment:_S,tonemapping_pars_fragment:MS,transmission_fragment:bS,transmission_pars_fragment:SS,uv_pars_fragment:wS,uv_pars_vertex:TS,uv_vertex:AS,worldpos_vertex:ES,background_vert:CS,background_frag:RS,backgroundCube_vert:PS,backgroundCube_frag:IS,cube_vert:DS,cube_frag:LS,depth_vert:US,depth_frag:FS,distanceRGBA_vert:NS,distanceRGBA_frag:BS,equirect_vert:OS,equirect_frag:zS,linedashed_vert:VS,linedashed_frag:kS,meshbasic_vert:GS,meshbasic_frag:HS,meshlambert_vert:WS,meshlambert_frag:qS,meshmatcap_vert:XS,meshmatcap_frag:YS,meshnormal_vert:ZS,meshnormal_frag:jS,meshphong_vert:JS,meshphong_frag:QS,meshphysical_vert:$S,meshphysical_frag:KS,meshtoon_vert:ew,meshtoon_frag:tw,points_vert:nw,points_frag:iw,shadow_vert:rw,shadow_frag:sw,sprite_vert:ow,sprite_frag:aw},Le={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new De(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([Le.points,Le.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([Le.common,Le.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([Le.sprite,Le.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:yn([Le.common,Le.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:yn([Le.lights,Le.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ah={r:0,b:0,g:0},as=new Kt,lw=new ot;function cw(n,e,t,i,r,s,o){let a=new De(0),l=s===!0?0:1,c,u,f=null,d=0,h=null;function p(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function x(w){let b=!1,C=p(w);C===null?g(a,l):C&&C.isColor&&(g(C,1),b=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,b){let C=p(b);C&&(C.isCubeTexture||C.mapping===tl)?(u===void 0&&(u=new Ve(new et(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:os(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),as.copy(b.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lw.makeRotationFromEuler(as)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==vt,(f!==C||d!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ve(new en(2,2),new hn({name:"BackgroundMaterial",uniforms:os(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,b){w.getRGB(ah,Xf(n)),i.buffers.color.setClear(ah.r,ah.g,ah.b,b,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:x,addToRenderList:m,dispose:y}}function uw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(S,E,k,N,X){let V=!1,W=f(N,k,E);s!==W&&(s=W,c(s.object)),V=h(S,N,k,X),V&&p(S,N,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,b(S,E,k,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,E,k){let N=k.wireframe===!0,X=i[S.id];X===void 0&&(X={},i[S.id]=X);let V=X[E.id];V===void 0&&(V={},X[E.id]=V);let W=V[N];return W===void 0&&(W=d(l()),V[N]=W),W}function d(S){let E=[],k=[],N=[];for(let X=0;X<t;X++)E[X]=0,k[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:N,object:S,attributes:{},index:null}}function h(S,E,k,N){let X=s.attributes,V=E.attributes,W=0,J=k.getAttributes();for(let U in J)if(J[U].location>=0){let te=X[U],ce=V[U];if(ce===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function p(S,E,k,N){let X={},V=E.attributes,W=0,J=k.getAttributes();for(let U in J)if(J[U].location>=0){let te=V[U];te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));let ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),X[U]=ce,W++}s.attributes=X,s.attributesNum=W,s.index=N}function x(){let S=s.newAttributes;for(let E=0,k=S.length;E<k;E++)S[E]=0}function m(S){g(S,0)}function g(S,E){let k=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;k[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),X[S]!==E&&(n.vertexAttribDivisor(S,E),X[S]=E)}function y(){let S=s.newAttributes,E=s.enabledAttributes;for(let k=0,N=E.length;k<N;k++)E[k]!==S[k]&&(n.disableVertexAttribArray(k),E[k]=0)}function w(S,E,k,N,X,V,W){W===!0?n.vertexAttribIPointer(S,E,k,X,V):n.vertexAttribPointer(S,E,k,N,X,V)}function b(S,E,k,N){x();let X=N.attributes,V=k.getAttributes(),W=E.defaultAttributeValues;for(let J in V){let U=V[J];if(U.location>=0){let ie=X[J];if(ie===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){let te=ie.normalized,ce=ie.itemSize,_e=e.get(ie);if(_e===void 0)continue;let Ae=_e.buffer,Ie=_e.type,Pe=_e.bytesPerElement,ne=Ie===n.INT||Ie===n.UNSIGNED_INT||ie.gpuType===wu;if(ie.isInterleavedBufferAttribute){let re=ie.data,xe=re.stride,Ee=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)g(U.location+Me,re.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Me=0;Me<U.locationSize;Me++)w(U.location+Me,ce/U.locationSize,Ie,te,xe*Pe,(Ee+ce/U.locationSize*Me)*Pe,ne)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<U.locationSize;re++)g(U.location+re,ie.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<U.locationSize;re++)m(U.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let re=0;re<U.locationSize;re++)w(U.location+re,ce/U.locationSize,Ie,te,ce*Pe,ce/U.locationSize*re*Pe,ne)}}else if(W!==void 0){let te=W[J];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(U.location,te);break;case 3:n.vertexAttrib3fv(U.location,te);break;case 4:n.vertexAttrib4fv(U.location,te);break;default:n.vertexAttrib1fv(U.location,te)}}}}y()}function C(){P();for(let S in i){let E=i[S];for(let k in E){let N=E[k];for(let X in N)u(N[X].object),delete N[X];delete E[k]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;let E=i[S.id];for(let k in E){let N=E[k];for(let X in N)u(N[X].object),delete N[X];delete E[k]}delete i[S.id]}function D(S){for(let E in i){let k=i[E];if(k[S.id]===void 0)continue;let N=k[S.id];for(let X in N)u(N[X].object),delete N[X];delete k[S.id]}}function P(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function hw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let p=0;p<f;p++)h+=u[p];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Ln&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let P=D===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Wn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==di&&!P)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:C,maxSamples:A}}function fw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Cn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:i,w=y*4,b=g.clippingState||null;l.value=b,b=u(p,d,w,h);for(let C=0;C!==w;++C)b[C]=t[C];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=h+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,b=h;w!==x;++w,b+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function pw(n){let e=new WeakMap;function t(o,a){return a===mo?o.mapping=rs:a===bu&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===mo||a===bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var _o=4,I0=[.125,.215,.35,.446,.526,.582],us=20,Qf=new Qa,D0=new De,$f=null,Kf=0,ep=0,tp=!1,cs=(1+Math.sqrt(5))/2,vo=1/cs,L0=[new M(-cs,vo,0),new M(cs,vo,0),new M(-vo,0,cs),new M(vo,0,cs),new M(0,cs,-vo),new M(0,cs,vo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],mw=new M,bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=mw}=s;$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,ep),this._renderer.xr.enabled=tp,e.scissorTest=!1,lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:wi,format:Ln,colorSpace:Jr,depthBuffer:!1},r=U0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gw(s)),this._blurMaterial=xw(s,e,t)}return r}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Qf)}_sceneToCubeUV(e,t,i,r,s){let l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(D0),f.toneMapping=Ji,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));let x=new _t({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new Ve(new et,x),g=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,g=!0):(x.color.copy(D0),g=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let C=this._cubeSize;lh(r,b*C,w>2?C:0,C,C),f.setRenderTarget(r),g&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===rs||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;lh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=L0[(r-s-1)%L0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Ve(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*us-1),x=s/p,m=isFinite(s)?1+Math.floor(u*x):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let g=[],y=0;for(let D=0;D<us;++D){let P=D/x,T=Math.exp(-P*P/2);g.push(T),D===0?y+=T:D<m&&(y+=2*T)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-i;let b=this._sizeLods[r],C=3*b*(r>w-_o?r-w+_o:0),A=4*(this._cubeSize-b);lh(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(f,Qf)}};function gw(n){let e=[],t=[],i=[],r=n,s=n-_o+1+I0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_o?l=I0[o-n+_o-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*h),w=new Float32Array(m*p*h),b=new Float32Array(g*p*h);for(let A=0;A<h;A++){let D=A%3*2/3-1,P=A>2?0:-1,T=[D,P,0,D+2/3,P,0,D+2/3,P+1,0,D,P,0,D+2/3,P+1,0,D,P+1,0];y.set(T,x*p*A),w.set(d,m*p*A);let S=[A,A,A,A,A,A];b.set(S,g*p*A)}let C=new $e;C.setAttribute("position",new ht(y,x)),C.setAttribute("uv",new ht(w,m)),C.setAttribute("faceIndex",new ht(b,g)),e.push(C),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function U0(n,e,t){let i=new Pn(n,e,t);return i.texture.mapping=tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xw(n,e,t){let i=new Float32Array(us),r=new M(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hp(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function F0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hp(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function N0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function hp(){return`

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
	`}function yw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===mo||l===bu,u=l===rs||l===ss;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bo(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new bo(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _w(n,e,t,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,p=f.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let w=0,b=y.length;w<b;w+=3){let C=y[w+0],A=y[w+1],D=y[w+2];d.push(C,A,A,D,D,C)}}else if(p!==void 0){let y=p.array;x=p.version;for(let w=0,b=y.length/3-1;w<b;w+=3){let C=w+0,A=w+1,D=w+2;d.push(C,A,A,D,D,C)}}else return;let m=new(qf(d)?Ta:$r)(d,1);m.version=x;let g=s.get(f);g&&e.remove(g),s.set(f,m)}function u(f){let d=s.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Mw(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function f(d,h,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,h[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y]*x[y];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sw(n,e,t){let i=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let b=a.attributes.position.count*w,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*C*4*f),D=new wa(A,b,C,f);D.type=di,D.needsUpdate=!0;let P=w*4;for(let S=0;S<f;S++){let E=m[S],k=g[S],N=y[S],X=b*C*4*S;for(let V=0;V<E.count;V++){let W=V*P;h===!0&&(r.fromBufferAttribute(E,V),A[X+W+0]=r.x,A[X+W+1]=r.y,A[X+W+2]=r.z,A[X+W+3]=0),p===!0&&(r.fromBufferAttribute(k,V),A[X+W+4]=r.x,A[X+W+5]=r.y,A[X+W+6]=r.z,A[X+W+7]=0),x===!0&&(r.fromBufferAttribute(N,V),A[X+W+8]=r.x,A[X+W+9]=r.y,A[X+W+10]=r.z,A[X+W+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new fe(b,C)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function ww(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var tx=new xn,B0=new Fa(1,1),nx=new wa,ix=new Hc,rx=new Ea,O0=[],z0=[],V0=new Float32Array(16),k0=new Float32Array(9),G0=new Float32Array(4);function So(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=O0[r];if(s===void 0&&(s=new Float32Array(r),O0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hh(n,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Aw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function Ew(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function Cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function Rw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;G0.set(i),n.uniformMatrix2fv(this.addr,!1,G0),rn(t,i)}}function Pw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;k0.set(i),n.uniformMatrix3fv(this.addr,!1,k0),rn(t,i)}}function Iw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;V0.set(i),n.uniformMatrix4fv(this.addr,!1,V0),rn(t,i)}}function Dw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function Uw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function Fw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function Nw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function Ow(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Vw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(B0.compareFunction=Gf,s=B0):s=tx,t.setTexture2D(e||s,r)}function kw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ix,r)}function Gw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rx,r)}function Hw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nx,r)}function Ww(n){switch(n){case 5126:return Tw;case 35664:return Aw;case 35665:return Ew;case 35666:return Cw;case 35674:return Rw;case 35675:return Pw;case 35676:return Iw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Nw;case 36294:return Bw;case 36295:return Ow;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Hw}}function qw(n,e){n.uniform1fv(this.addr,e)}function Xw(n,e){let t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function Yw(n,e){let t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function Zw(n,e){let t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function jw(n,e){let t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jw(n,e){let t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qw(n,e){let t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $w(n,e){n.uniform1iv(this.addr,e)}function Kw(n,e){n.uniform2iv(this.addr,e)}function eT(n,e){n.uniform3iv(this.addr,e)}function tT(n,e){n.uniform4iv(this.addr,e)}function nT(n,e){n.uniform1uiv(this.addr,e)}function iT(n,e){n.uniform2uiv(this.addr,e)}function rT(n,e){n.uniform3uiv(this.addr,e)}function sT(n,e){n.uniform4uiv(this.addr,e)}function oT(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||tx,s[o])}function aT(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ix,s[o])}function lT(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rx,s[o])}function cT(n,e,t){let i=this.cache,r=e.length,s=hh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nx,s[o])}function uT(n){switch(n){case 5126:return qw;case 35664:return Xw;case 35665:return Yw;case 35666:return Zw;case 35674:return jw;case 35675:return Jw;case 35676:return Qw;case 5124:case 35670:return $w;case 35667:case 35671:return Kw;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}var ip=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ww(t.type)}},rp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uT(t.type)}},sp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},np=/(\w+)(\])?(\[|\.)?/g;function H0(n,e){n.seq.push(e),n.map[e.id]=e}function hT(n,e,t){let i=n.name,r=i.length;for(np.lastIndex=0;;){let s=np.exec(i),o=np.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){H0(t,c===void 0?new ip(a,n,e):new rp(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new sp(a),H0(t,f)),t=f}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function W0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dT=37297,fT=0;function pT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var q0=new nt;function mT(n){ut._getMatrix(q0,ut.workingColorSpace,n);let e=`mat3( ${q0.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function X0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+pT(n.getShaderSource(e),a)}else return s}function gT(n,e){let t=mT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xT(n,e){let t;switch(e){case s0:t="Linear";break;case o0:t="Reinhard";break;case a0:t="Cineon";break;case Mu:t="ACESFilmic";break;case c0:t="AgX";break;case u0:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new M;function yT(){ut.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function _T(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function al(n){return n!==""}function Y0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(n){return n.replace(bT,wT)}var ST=new Map;function wT(n,e){let t=st[e];if(t===void 0){let i=ST.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return op(t)}var TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j0(n){return n.replace(TT,AT)}function AT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function J0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ET(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function CT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case ss:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case i0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function IT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function DT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ET(t),c=CT(t),u=RT(t),f=PT(t),d=IT(t),h=vT(t),p=_T(s),x=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),g.length>0&&(g+=`
`)):(m=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),g=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?st.tonemapping_pars_fragment:"",t.toneMapping!==Ji?xT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,gT("linearToOutputTexel",t.outputColorSpace),yT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),o=op(o),o=Y0(o,t),o=Z0(o,t),a=op(a),a=Y0(a,t),a=Z0(a,t),o=j0(o),a=j0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,b=y+g+a,C=W0(r,r.VERTEX_SHADER,w),A=W0(r,r.FRAGMENT_SHADER,b);r.attachShader(x,C),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(E){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",V=k.trim(),W=N.trim(),J=X.trim(),U=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,A);else{let te=X0(r,C,"vertex"),ce=X0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+te+`
`+ce)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||J==="")&&(ie=!1);ie&&(E.diagnostics={runnable:U,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:g}})}r.deleteShader(C),r.deleteShader(A),P=new Mo(r,x),T=MT(r,x)}let P;this.getUniforms=function(){return P===void 0&&D(this),P};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,dT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var LT=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lp(e),t.set(e,i)),i}},lp=class{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}};function UT(n,e,t,i,r,s,o){let a=new to,l=new ap,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,E,k,N){let X=k.fog,V=N.geometry,W=T.isMeshStandardMaterial?k.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),U=J&&J.mapping===tl?J.image.height:null,ie=p[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));let te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=te!==void 0?te.length:0,_e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let Ae,Ie,Pe,ne;if(ie){let xt=Ti[ie];Ae=xt.vertexShader,Ie=xt.fragmentShader}else Ae=T.vertexShader,Ie=T.fragmentShader,l.update(T),Pe=l.getVertexShaderID(T),ne=l.getFragmentShaderID(T);let re=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Oe=!!T.map,Y=!!T.matcap,v=!!J,F=!!T.aoMap,O=!!T.lightMap,B=!!T.bumpMap,z=!!T.normalMap,H=!!T.displacementMap,ee=!!T.emissiveMap,se=!!T.metalnessMap,me=!!T.roughnessMap,Ce=T.anisotropy>0,I=T.clearcoat>0,_=T.dispersion>0,L=T.iridescence>0,j=T.sheen>0,K=T.transmission>0,Z=Ce&&!!T.anisotropyMap,he=I&&!!T.clearcoatMap,ue=I&&!!T.clearcoatNormalMap,pe=I&&!!T.clearcoatRoughnessMap,ge=L&&!!T.iridescenceMap,le=L&&!!T.iridescenceThicknessMap,Se=j&&!!T.sheenColorMap,ke=j&&!!T.sheenRoughnessMap,ye=!!T.specularMap,we=!!T.specularColorMap,qe=!!T.specularIntensityMap,q=K&&!!T.transmissionMap,be=K&&!!T.thicknessMap,Re=!!T.gradientMap,Ne=!!T.alphaMap,ve=T.alphaTest>0,de=!!T.alphaHash,We=!!T.extensions,tt=Ji;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Rt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Ie,defines:T.defines,customVertexShaderID:Pe,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Jr,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:Y,envMap:v,envMapMode:v&&J.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:O,bumpMap:B,normalMap:z,displacementMap:d&&H,emissiveMap:ee,normalMapObjectSpace:z&&T.normalMapType===p0,normalMapTangentSpace:z&&T.normalMapType===sh,metalnessMap:se,roughnessMap:me,anisotropy:Ce,anisotropyMap:Z,clearcoat:I,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:_,iridescence:L,iridescenceMap:ge,iridescenceThicknessMap:le,sheen:j,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:ye,specularColorMap:we,specularIntensityMap:qe,transmission:K,transmissionMap:q,thicknessMap:be,gradientMap:Re,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:de,combine:T.combine,mapUv:Oe&&x(T.map.channel),aoMapUv:F&&x(T.aoMap.channel),lightMapUv:O&&x(T.lightMap.channel),bumpMapUv:B&&x(T.bumpMap.channel),normalMapUv:z&&x(T.normalMap.channel),displacementMapUv:H&&x(T.displacementMap.channel),emissiveMapUv:ee&&x(T.emissiveMap.channel),metalnessMapUv:se&&x(T.metalnessMap.channel),roughnessMapUv:me&&x(T.roughnessMap.channel),anisotropyMapUv:Z&&x(T.anisotropyMap.channel),clearcoatMapUv:he&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(T.sheenRoughnessMap.channel),specularMapUv:ye&&x(T.specularMap.channel),specularColorMapUv:we&&x(T.specularColorMap.channel),specularIntensityMapUv:qe&&x(T.specularIntensityMap.channel),transmissionMapUv:q&&x(T.transmissionMap.channel),thicknessMapUv:be&&x(T.thicknessMap.channel),alphaMapUv:Ne&&x(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(z||Ce),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Oe||Ne),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===vt,decodeVideoTextureEmissive:ee&&T.emissiveMap.isVideoTexture===!0&&ut.getTransfer(T.emissiveMap.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===an,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:We&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&T.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function g(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let E in T.defines)S.push(E),S.push(T.defines[E]);return T.isRawShaderMaterial===!1&&(y(S,T),w(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function w(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function b(T){let S=p[T.type],E;if(S){let k=Ti[S];E=oh.clone(k.uniforms)}else E=T.uniforms;return E}function C(T,S){let E;for(let k=0,N=u.length;k<N;k++){let X=u[k];if(X.cacheKey===S){E=X,++E.usedTimes;break}}return E===void 0&&(E=new DT(n,S,T,s),u.push(E)),E}function A(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function D(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:P}}function FT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function NT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,p,x,m){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:x,group:m},n[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=h,g.groupOrder=p,g.renderOrder=f.renderOrder,g.z=x,g.group=m),e++,g}function a(f,d,h,p,x,m){let g=o(f,d,h,p,x,m);h.transmission>0?i.push(g):h.transparent===!0?r.push(g):t.push(g)}function l(f,d,h,p,x,m){let g=o(f,d,h,p,x,m);h.transmission>0?i.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,d){t.length>1&&t.sort(f||NT),i.length>1&&i.sort(d||Q0),r.length>1&&r.sort(d||Q0)}function u(){for(let f=e,d=n.length;f<d;f++){let h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new $0,n.set(i,[o])):r>=s.length?(o=new $0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function OT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new De};break;case"SpotLight":t={position:new M,direction:new M,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function zT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var VT=0;function kT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GT(n){let e=new OT,t=zT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let r=new M,s=new ot,o=new ot;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,p=0,x=0,m=0,g=0,y=0,w=0,b=0,C=0,A=0,D=0;c.sort(kT);for(let T=0,S=c.length;T<S;T++){let E=c[T],k=E.color,N=E.intensity,X=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=k.r*N,f+=k.g*N,d+=k.b*N;else if(E.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(E.sh.coefficients[W],N);D++}else if(E.isDirectionalLight){let W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let J=E.shadow,U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=E.shadow.matrix,y++}i.directional[h]=W,h++}else if(E.isSpotLight){let W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(k).multiplyScalar(N),W.distance=X,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,i.spot[x]=W;let J=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,J.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[x]=J.matrix,E.castShadow){let U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=V,b++}x++}else if(E.isRectAreaLight){let W=e.get(E);W.color.copy(k).multiplyScalar(N),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=W,m++}else if(E.isPointLight){let W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){let J=E.shadow,U=t.get(E);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=E.shadow.matrix,w++}i.point[p]=W,p++}else if(E.isHemisphereLight){let W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(N),W.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[g]=W,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==g||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==b||P.numSpotMaps!==C||P.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,P.directionalLength=h,P.pointLength=p,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=g,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=b,P.numSpotMaps=C,P.numLightProbes=D,i.version=VT++)}function l(c,u){let f=0,d=0,h=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let w=c[g];if(w.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(w.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let b=i.rectArea[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function K0(n){let e=new GT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function HT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new K0(n),e.set(r,[a])):s>=o.length?(a=new K0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
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
}`;function XT(n,e,t){let i=new oo,r=new fe,s=new fe,o=new lt,a=new eu({depthPacking:f0}),l=new tu,c={},u=t.maxTextureSize,f={[ai]:fn,[fn]:ai,[an]:an},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:WT,fragmentShader:qT}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ve(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let g=this.type;this.render=function(A,D,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let T=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ji),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=g!==Si&&this.type===Si,X=g===Si&&this.type!==Si;for(let V=0,W=A.length;V<W;V++){let J=A[V],U=J.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let ie=U.getFrameExtents();if(r.multiply(ie),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,U.mapSize.y=s.y)),U.map===null||N===!0||X===!0){let ce=this.type!==Si?{minFilter:cn,magFilter:cn}:{};U.map!==null&&U.map.dispose(),U.map=new Pn(r.x,r.y,ce),U.map.texture.name=J.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let te=U.getViewportCount();for(let ce=0;ce<te;ce++){let _e=U.getViewport(ce);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),k.viewport(o),U.updateMatrices(J,ce),i=U.getFrustum(),b(D,P,U.camera,J,this.type)}U.isPointLightShadow!==!0&&this.type===Si&&y(U,P),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,E)};function y(A,D){let P=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,P,d,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,P,h,x,null)}function w(A,D,P,T){let S=null,E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)S=E;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let k=S.uuid,N=D.uuid,X=c[k];X===void 0&&(X={},c[k]=X);let V=X[N];V===void 0&&(V=S.clone(),X[N]=V,D.addEventListener("dispose",C)),S=V}if(S.visible=D.visible,S.wireframe=D.wireframe,T===Si?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=n.properties.get(S);k.light=P}return S}function b(A,D,P,T,S){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let N=e.update(A),X=A.material;if(Array.isArray(X)){let V=N.groups;for(let W=0,J=V.length;W<J;W++){let U=V[W],ie=X[U.materialIndex];if(ie&&ie.visible){let te=w(A,ie,T,S);A.onBeforeShadow(n,A,D,P,N,te,U),n.renderBufferDirect(P,null,N,te,A,U),A.onAfterShadow(n,A,D,P,N,te,U)}}}else if(X.visible){let V=w(A,X,T,S);A.onBeforeShadow(n,A,D,P,N,V,null),n.renderBufferDirect(P,null,N,V,A,null),A.onAfterShadow(n,A,D,P,N,V,null)}}let k=A.children;for(let N=0,X=k.length;N<X;N++)b(k[N],D,P,T,S)}function C(A){A.target.removeEventListener("dispose",C);for(let P in c){let T=c[P],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var YT={[fu]:pu,[mu]:yu,[gu]:vu,[jr]:xu,[pu]:fu,[yu]:mu,[vu]:gu,[xu]:jr};function ZT(n,e){function t(){let q=!1,be=new lt,Re=null,Ne=new lt(0,0,0,0);return{setMask:function(ve){Re!==ve&&!q&&(n.colorMask(ve,ve,ve,ve),Re=ve)},setLocked:function(ve){q=ve},setClear:function(ve,de,We,tt,Rt){Rt===!0&&(ve*=tt,de*=tt,We*=tt),be.set(ve,de,We,tt),Ne.equals(be)===!1&&(n.clearColor(ve,de,We,tt),Ne.copy(be))},reset:function(){q=!1,Re=null,Ne.set(-1,0,0,0)}}}function i(){let q=!1,be=!1,Re=null,Ne=null,ve=null;return{setReversed:function(de){if(be!==de){let We=e.get("EXT_clip_control");de?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=de;let tt=ve;ve=null,this.setClear(tt)}},getReversed:function(){return be},setTest:function(de){de?re(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(de){Re!==de&&!q&&(n.depthMask(de),Re=de)},setFunc:function(de){if(be&&(de=YT[de]),Ne!==de){switch(de){case fu:n.depthFunc(n.NEVER);break;case pu:n.depthFunc(n.ALWAYS);break;case mu:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case gu:n.depthFunc(n.EQUAL);break;case xu:n.depthFunc(n.GEQUAL);break;case yu:n.depthFunc(n.GREATER);break;case vu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=de}},setLocked:function(de){q=de},setClear:function(de){ve!==de&&(be&&(de=1-de),n.clearDepth(de),ve=de)},reset:function(){q=!1,Re=null,Ne=null,ve=null,be=!1}}}function r(){let q=!1,be=null,Re=null,Ne=null,ve=null,de=null,We=null,tt=null,Rt=null;return{setTest:function(xt){q||(xt?re(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(xt){be!==xt&&!q&&(n.stencilMask(xt),be=xt)},setFunc:function(xt,Oi,xi){(Re!==xt||Ne!==Oi||ve!==xi)&&(n.stencilFunc(xt,Oi,xi),Re=xt,Ne=Oi,ve=xi)},setOp:function(xt,Oi,xi){(de!==xt||We!==Oi||tt!==xi)&&(n.stencilOp(xt,Oi,xi),de=xt,We=Oi,tt=xi)},setLocked:function(xt){q=xt},setClear:function(xt){Rt!==xt&&(n.clearStencil(xt),Rt=xt)},reset:function(){q=!1,be=null,Re=null,Ne=null,ve=null,de=null,We=null,tt=null,Rt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,w=null,b=null,C=null,A=null,D=new De(0,0,0),P=0,T=!1,S=null,E=null,k=null,N=null,X=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(U)[1]),W=J>=1):U.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),W=J>=2);let ie=null,te={},ce=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Ae=new lt().fromArray(ce),Ie=new lt().fromArray(_e);function Pe(q,be,Re,Ne){let ve=new Uint8Array(4),de=n.createTexture();n.bindTexture(q,de),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<Re;We++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(be+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return de}let ne={};ne[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(jr),B(!1),z(If),re(n.CULL_FACE),F(ji);function re(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function xe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Ee(q,be){return f[q]!==be?(n.bindFramebuffer(q,be),f[q]=be,q===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),q===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Me(q,be){let Re=h,Ne=!1;if(q){Re=d.get(be),Re===void 0&&(Re=[],d.set(be,Re));let ve=q.textures;if(Re.length!==ve.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let de=0,We=ve.length;de<We;de++)Re[de]=n.COLOR_ATTACHMENT0+de;Re.length=ve.length,Ne=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(Re)}function Oe(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let Y={[yr]:n.FUNC_ADD,[Vg]:n.FUNC_SUBTRACT,[kg]:n.FUNC_REVERSE_SUBTRACT};Y[Gg]=n.MIN,Y[Hg]=n.MAX;let v={[Wg]:n.ZERO,[qg]:n.ONE,[Xg]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[$g]:n.SRC_ALPHA_SATURATE,[Jg]:n.DST_COLOR,[Zg]:n.DST_ALPHA,[Yg]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[Qg]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function F(q,be,Re,Ne,ve,de,We,tt,Rt,xt){if(q===ji){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(re(n.BLEND),x=!0),q!==zg){if(q!==m||xt!==T){if((g!==yr||b!==yr)&&(n.blendEquation(n.FUNC_ADD),g=yr,b=yr),xt)switch(q){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qn:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Df:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,w=null,C=null,A=null,D.set(0,0,0),P=0,m=q,T=xt}return}ve=ve||be,de=de||Re,We=We||Ne,(be!==g||ve!==b)&&(n.blendEquationSeparate(Y[be],Y[ve]),g=be,b=ve),(Re!==y||Ne!==w||de!==C||We!==A)&&(n.blendFuncSeparate(v[Re],v[Ne],v[de],v[We]),y=Re,w=Ne,C=de,A=We),(tt.equals(D)===!1||Rt!==P)&&(n.blendColor(tt.r,tt.g,tt.b,Rt),D.copy(tt),P=Rt),m=q,T=!1}function O(q,be){q.side===an?xe(n.CULL_FACE):re(n.CULL_FACE);let Re=q.side===fn;be&&(Re=!Re),B(Re),q.blending===Zr&&q.transparent===!1?F(ji):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Ne=q.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(q){S!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),S=q)}function z(q){q!==Ng?(re(n.CULL_FACE),q!==E&&(q===If?n.cullFace(n.BACK):q===Bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),E=q}function H(q){q!==k&&(W&&n.lineWidth(q),k=q)}function ee(q,be,Re){q?(re(n.POLYGON_OFFSET_FILL),(N!==be||X!==Re)&&(n.polygonOffset(be,Re),N=be,X=Re)):xe(n.POLYGON_OFFSET_FILL)}function se(q){q?re(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function me(q){q===void 0&&(q=n.TEXTURE0+V-1),ie!==q&&(n.activeTexture(q),ie=q)}function Ce(q,be,Re){Re===void 0&&(ie===null?Re=n.TEXTURE0+V-1:Re=ie);let Ne=te[Re];Ne===void 0&&(Ne={type:void 0,texture:void 0},te[Re]=Ne),(Ne.type!==q||Ne.texture!==be)&&(ie!==Re&&(n.activeTexture(Re),ie=Re),n.bindTexture(q,be||ne[q]),Ne.type=q,Ne.texture=be)}function I(){let q=te[ie];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ge(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(q){Ae.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Ae.copy(q))}function ke(q){Ie.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),Ie.copy(q))}function ye(q,be){let Re=c.get(be);Re===void 0&&(Re=new WeakMap,c.set(be,Re));let Ne=Re.get(q);Ne===void 0&&(Ne=n.getUniformBlockIndex(be,q.name),Re.set(q,Ne))}function we(q,be){let Ne=c.get(be).get(q);l.get(be)!==Ne&&(n.uniformBlockBinding(be,Ne,q.__bindingPointIndex),l.set(be,Ne))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,te={},f={},d=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,w=null,b=null,C=null,A=null,D=new De(0,0,0),P=0,T=!1,S=null,E=null,k=null,N=null,X=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:xe,bindFramebuffer:Ee,drawBuffers:Me,useProgram:Oe,setBlending:F,setMaterial:O,setFlipSided:B,setCullFace:z,setLineWidth:H,setPolygonOffset:ee,setScissorTest:se,activeTexture:me,bindTexture:Ce,unbindTexture:I,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:ge,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:we,texStorage2D:ue,texStorage3D:pe,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:he,scissor:Se,viewport:ke,reset:qe}}function jT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,_){return h?new OffscreenCanvas(I,_):$s("canvas")}function x(I,_,L){let j=1,K=Ce(I);if((K.width>L||K.height>L)&&(j=L/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(j*K.width),he=Math.floor(j*K.height);f===void 0&&(f=p(Z,he));let ue=_?p(Z,he):f;return ue.width=Z,ue.height=he,ue.getContext("2d").drawImage(I,0,0,Z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+he+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){n.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,_,L,j,K=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=_;if(_===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),_===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){let he=K?ba:ut.getTransfer(j);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=he===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(I,_){let L;return I?_===null||_===Sr||_===xo?L=n.DEPTH24_STENCIL8:_===di?L=n.DEPTH32F_STENCIL8:_===go&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sr||_===xo?L=n.DEPTH_COMPONENT24:_===di?L=n.DEPTH_COMPONENT32F:_===go&&(L=n.DEPTH_COMPONENT16),L}function C(I,_){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==cn&&I.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function A(I){let _=I.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&u.delete(_)}function D(I){let _=I.target;_.removeEventListener("dispose",D),S(_)}function P(I){let _=i.get(I);if(_.__webglInit===void 0)return;let L=I.source,j=d.get(L);if(j){let K=j[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(I),Object.keys(j).length===0&&d.delete(L)}i.remove(I)}function T(I){let _=i.get(I);n.deleteTexture(_.__webglTexture);let L=I.source,j=d.get(L);delete j[_.__cacheKey],o.memory.textures--}function S(I){let _=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let K=0;K<_.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[j][K]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=I.textures;for(let j=0,K=L.length;j<K;j++){let Z=i.get(L[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[j])}i.remove(I)}let E=0;function k(){E=0}function N(){let I=E;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),E+=1,I}function X(I){let _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function V(I,_){let L=i.get(I);if(I.isVideoTexture&&se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&L.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(L,I,_);return}}else I.isExternalTexture&&(L.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function W(I,_){let L=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&L.__version!==I.version){ne(L,I,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function J(I,_){let L=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&L.__version!==I.version){ne(L,I,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function U(I,_){let L=i.get(I);if(I.version>0&&L.__version!==I.version){re(L,I,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}let ie={[kn]:n.REPEAT,[xr]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},te={[cn]:n.NEAREST,[h0]:n.NEAREST_MIPMAP_NEAREST,[nl]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Su]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},ce={[m0]:n.NEVER,[M0]:n.ALWAYS,[g0]:n.LESS,[Gf]:n.LEQUAL,[x0]:n.EQUAL,[_0]:n.GEQUAL,[y0]:n.GREATER,[v0]:n.NOTEQUAL};function _e(I,_){if(_.type===di&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Su||_.magFilter===nl||_.magFilter===Dn||_.minFilter===un||_.minFilter===Su||_.minFilter===nl||_.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ie[_.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ie[_.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ie[_.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,te[_.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,te[_.minFilter]),_.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==nl&&_.minFilter!==Dn||_.type===di&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ae(I,_){let L=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",A));let j=_.source,K=d.get(j);K===void 0&&(K={},d.set(j,K));let Z=X(_);if(Z!==I.__cacheKey){K[Z]===void 0&&(K[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[Z].usedTimes++;let he=K[I.__cacheKey];he!==void 0&&(K[I.__cacheKey].usedTimes--,he.usedTimes===0&&T(_)),I.__cacheKey=Z,I.__webglTexture=K[Z].texture}return L}function Ie(I,_,L){return Math.floor(Math.floor(I/L)/_)}function Pe(I,_,L,j){let Z=I.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,j,_.data);else{Z.sort((le,Se)=>le.start-Se.start);let he=0;for(let le=1;le<Z.length;le++){let Se=Z[he],ke=Z[le],ye=Se.start+Se.count,we=Ie(ke.start,_.width,4),qe=Ie(Se.start,_.width,4);ke.start<=ye+1&&we===qe&&Ie(ke.start+ke.count-1,_.width,4)===we?Se.count=Math.max(Se.count,ke.start+ke.count-Se.start):(++he,Z[he]=ke)}Z.length=he+1;let ue=n.getParameter(n.UNPACK_ROW_LENGTH),pe=n.getParameter(n.UNPACK_SKIP_PIXELS),ge=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let le=0,Se=Z.length;le<Se;le++){let ke=Z[le],ye=Math.floor(ke.start/4),we=Math.ceil(ke.count/4),qe=ye%_.width,q=Math.floor(ye/_.width),be=we,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,qe,q,be,Re,L,j,_.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function ne(I,_,L){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);let K=Ae(I,_),Z=_.source;t.bindTexture(j,I.__webglTexture,n.TEXTURE0+L);let he=i.get(Z);if(Z.version!==he.__version||K===!0){t.activeTexture(n.TEXTURE0+L);let ue=ut.getPrimaries(ut.workingColorSpace),pe=_.colorSpace===Qi?null:ut.getPrimaries(_.colorSpace),ge=_.colorSpace===Qi||ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let le=x(_.image,!1,r.maxTextureSize);le=me(_,le);let Se=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),ye=w(_.internalFormat,Se,ke,_.colorSpace,_.isVideoTexture);_e(j,_);let we,qe=_.mipmaps,q=_.isVideoTexture!==!0,be=he.__version===void 0||K===!0,Re=Z.dataReady,Ne=C(_,le);if(_.isDepthTexture)ye=b(_.format===yo,_.type),be&&(q?t.texStorage2D(n.TEXTURE_2D,1,ye,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ye,le.width,le.height,0,Se,ke,null));else if(_.isDataTexture)if(qe.length>0){q&&be&&t.texStorage2D(n.TEXTURE_2D,Ne,ye,qe[0].width,qe[0].height);for(let ve=0,de=qe.length;ve<de;ve++)we=qe[ve],q?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,we.width,we.height,Se,ke,we.data):t.texImage2D(n.TEXTURE_2D,ve,ye,we.width,we.height,0,Se,ke,we.data);_.generateMipmaps=!1}else q?(be&&t.texStorage2D(n.TEXTURE_2D,Ne,ye,le.width,le.height),Re&&Pe(_,le,Se,ke)):t.texImage2D(n.TEXTURE_2D,0,ye,le.width,le.height,0,Se,ke,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){q&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,ye,qe[0].width,qe[0].height,le.depth);for(let ve=0,de=qe.length;ve<de;ve++)if(we=qe[ve],_.format!==Ln)if(Se!==null)if(q){if(Re)if(_.layerUpdates.size>0){let We=Jf(we.width,we.height,_.format,_.type);for(let tt of _.layerUpdates){let Rt=we.data.subarray(tt*We/we.data.BYTES_PER_ELEMENT,(tt+1)*We/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,tt,we.width,we.height,1,Se,Rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,we.width,we.height,le.depth,Se,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ye,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,we.width,we.height,le.depth,Se,ke,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ye,we.width,we.height,le.depth,0,Se,ke,we.data)}else{q&&be&&t.texStorage2D(n.TEXTURE_2D,Ne,ye,qe[0].width,qe[0].height);for(let ve=0,de=qe.length;ve<de;ve++)we=qe[ve],_.format!==Ln?Se!==null?q?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ye,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,we.width,we.height,Se,ke,we.data):t.texImage2D(n.TEXTURE_2D,ve,ye,we.width,we.height,0,Se,ke,we.data)}else if(_.isDataArrayTexture)if(q){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,ye,le.width,le.height,le.depth),Re)if(_.layerUpdates.size>0){let ve=Jf(le.width,le.height,_.format,_.type);for(let de of _.layerUpdates){let We=le.data.subarray(de*ve/le.data.BYTES_PER_ELEMENT,(de+1)*ve/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,Se,ke,We)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,le.width,le.height,le.depth,0,Se,ke,le.data);else if(_.isData3DTexture)q?(be&&t.texStorage3D(n.TEXTURE_3D,Ne,ye,le.width,le.height,le.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)):t.texImage3D(n.TEXTURE_3D,0,ye,le.width,le.height,le.depth,0,Se,ke,le.data);else if(_.isFramebufferTexture){if(be)if(q)t.texStorage2D(n.TEXTURE_2D,Ne,ye,le.width,le.height);else{let ve=le.width,de=le.height;for(let We=0;We<Ne;We++)t.texImage2D(n.TEXTURE_2D,We,ye,ve,de,0,Se,ke,null),ve>>=1,de>>=1}}else if(qe.length>0){if(q&&be){let ve=Ce(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ne,ye,ve.width,ve.height)}for(let ve=0,de=qe.length;ve<de;ve++)we=qe[ve],q?Re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se,ke,we):t.texImage2D(n.TEXTURE_2D,ve,ye,Se,ke,we);_.generateMipmaps=!1}else if(q){if(be){let ve=Ce(le);t.texStorage2D(n.TEXTURE_2D,Ne,ye,ve.width,ve.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ke,le)}else t.texImage2D(n.TEXTURE_2D,0,ye,Se,ke,le);m(_)&&g(j),he.__version=Z.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function re(I,_,L){if(_.image.length!==6)return;let j=Ae(I,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+L);let Z=i.get(K);if(K.version!==Z.__version||j===!0){t.activeTexture(n.TEXTURE0+L);let he=ut.getPrimaries(ut.workingColorSpace),ue=_.colorSpace===Qi?null:ut.getPrimaries(_.colorSpace),pe=_.colorSpace===Qi||he===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ge=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!ge&&!le?Se[de]=x(_.image[de],!0,r.maxCubemapSize):Se[de]=le?_.image[de].image:_.image[de],Se[de]=me(_,Se[de]);let ke=Se[0],ye=s.convert(_.format,_.colorSpace),we=s.convert(_.type),qe=w(_.internalFormat,ye,we,_.colorSpace),q=_.isVideoTexture!==!0,be=Z.__version===void 0||j===!0,Re=K.dataReady,Ne=C(_,ke);_e(n.TEXTURE_CUBE_MAP,_);let ve;if(ge){q&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,qe,ke.width,ke.height);for(let de=0;de<6;de++){ve=Se[de].mipmaps;for(let We=0;We<ve.length;We++){let tt=ve[We];_.format!==Ln?ye!==null?q?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,tt.width,tt.height,ye,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,qe,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,tt.width,tt.height,ye,we,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,qe,tt.width,tt.height,0,ye,we,tt.data)}}}else{if(ve=_.mipmaps,q&&be){ve.length>0&&Ne++;let de=Ce(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,qe,de.width,de.height)}for(let de=0;de<6;de++)if(le){q?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,ye,we,Se[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Se[de].width,Se[de].height,0,ye,we,Se[de].data);for(let We=0;We<ve.length;We++){let Rt=ve[We].image[de].image;q?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,Rt.width,Rt.height,ye,we,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,qe,Rt.width,Rt.height,0,ye,we,Rt.data)}}else{q?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ye,we,Se[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,ye,we,Se[de]);for(let We=0;We<ve.length;We++){let tt=ve[We];q?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,ye,we,tt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,qe,ye,we,tt.image[de])}}}m(_)&&g(n.TEXTURE_CUBE_MAP),Z.__version=K.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function xe(I,_,L,j,K,Z){let he=s.convert(L.format,L.colorSpace),ue=s.convert(L.type),pe=w(L.internalFormat,he,ue,L.colorSpace),ge=i.get(_),le=i.get(L);if(le.__renderTarget=_,!ge.__hasExternalTextures){let Se=Math.max(1,_.width>>Z),ke=Math.max(1,_.height>>Z);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,pe,Se,ke,_.depth,0,he,ue,null):t.texImage2D(K,Z,pe,Se,ke,0,he,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,le.__webglTexture,0,H(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,le.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(I,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,I),_.depthBuffer){let j=_.depthTexture,K=j&&j.isDepthTexture?j.type:null,Z=b(_.stencilBuffer,K),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=H(_);ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Z,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,I)}else{let j=_.textures;for(let K=0;K<j.length;K++){let Z=j[K],he=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),pe=w(Z.internalFormat,he,ue,Z.colorSpace),ge=H(_);L&&ee(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,pe,_.width,_.height):ee(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(I,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let K=j.__webglTexture,Z=H(_);if(_.depthTexture.format===Js)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===yo)ee(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Oe(I){let _=i.get(I),L=I.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=j}if(I.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let j=I.texture.mipmaps;j&&j.length>0?Me(_.__webglFramebuffer[0],I):Me(_.__webglFramebuffer,I)}else if(L){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[j],I,!1);else{let K=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}}else{let j=I.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(I,_,L){let j=i.get(I);_!==void 0&&xe(j.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Oe(I)}function v(I){let _=I.texture,L=i.get(I),j=i.get(_);I.addEventListener("dispose",D);let K=I.textures,Z=I.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ue]=[];for(let pe=0;pe<_.mipmaps.length;pe++)L.__webglFramebuffer[ue][pe]=n.createFramebuffer()}else L.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)L.__webglFramebuffer[ue]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(he)for(let ue=0,pe=K.length;ue<pe;ue++){let ge=i.get(K[ue]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&ee(I)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ue=0;ue<K.length;ue++){let pe=K[ue];L.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ue]);let ge=s.convert(pe.format,pe.colorSpace),le=s.convert(pe.type),Se=w(pe.internalFormat,ge,le,pe.colorSpace,I.isXRRenderTarget===!0),ke=H(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Se,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,L.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(L.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),_e(n.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(L.__webglFramebuffer[ue][pe],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else xe(L.__webglFramebuffer[ue],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ue=0,pe=K.length;ue<pe;ue++){let ge=K[ue],le=i.get(ge),Se=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),_e(Se,ge),xe(L.__webglFramebuffer,I,ge,n.COLOR_ATTACHMENT0+ue,Se,0),m(ge)&&g(Se)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),_e(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(L.__webglFramebuffer[pe],I,_,n.COLOR_ATTACHMENT0,ue,pe);else xe(L.__webglFramebuffer,I,_,n.COLOR_ATTACHMENT0,ue,0);m(_)&&g(ue),t.unbindTexture()}I.depthBuffer&&Oe(I)}function F(I){let _=I.textures;for(let L=0,j=_.length;L<j;L++){let K=_[L];if(m(K)){let Z=y(I),he=i.get(K).__webglTexture;t.bindTexture(Z,he),g(Z),t.unbindTexture()}}}let O=[],B=[];function z(I){if(I.samples>0){if(ee(I)===!1){let _=I.textures,L=I.width,j=I.height,K=n.COLOR_BUFFER_BIT,Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(I),ue=_.length>1;if(ue)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let pe=I.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let le=i.get(_[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,L,j,0,0,L,j,K,n.NEAREST),l===!0&&(O.length=0,B.length=0,O.push(n.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.resolveDepthBuffer===!1&&(O.push(Z),B.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let le=i.get(_[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let _=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function H(I){return Math.min(r.maxSamples,I.samples)}function ee(I){let _=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(I){let _=o.render.frame;u.get(I)!==_&&(u.set(I,_),I.update())}function me(I,_){let L=I.colorSpace,j=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||L!==Jr&&L!==Qi&&(ut.getTransfer(L)===vt?(j!==Ln||K!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=U,this.rebindTextures=Y,this.setupRenderTarget=v,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ee}function JT(n,e){function t(i,r=Qi){let s,o=ut.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Of)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ff)return n.BYTE;if(i===Nf)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===Sr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===zf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===Ln)return n.RGBA;if(i===Js)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===Eu)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===kf)return n.RG;if(i===Ru)return n.RG_INTEGER;if(i===Pu)return n.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Iu||i===Du||i===Lu||i===Uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fu||i===Nu||i===Bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fu||i===Nu)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===zu||i===Vu||i===ku||i===Gu||i===Hu||i===Wu||i===qu||i===Xu||i===Yu||i===Zu||i===ju||i===Ju||i===Qu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ou)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ku)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$u||i===Ku||i===eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$u)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===ih||i===rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===th)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
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

}`,cp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:QT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},up=class extends qi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",m=new cp,g={},y=t.getContextAttributes(),w=null,b=null,C=[],A=[],D=new fe,P=null,T=new Yt;T.viewport=new lt;let S=new Yt;S.viewport=new lt;let E=[T,S],k=new du,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let re=C[ne];return re===void 0&&(re=new no,C[ne]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ne){let re=C[ne];return re===void 0&&(re=new no,C[ne]=re),re.getGripSpace()},this.getHand=function(ne){let re=C[ne];return re===void 0&&(re=new no,C[ne]=re),re.getHandSpace()};function V(ne){let re=A.indexOf(ne.inputSource);if(re===-1)return;let xe=C[re];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||o),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function W(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let ne=0;ne<C.length;ne++){let re=A[ne];re!==null&&(A[ne]=null,C[ne].disconnect(re))}N=null,X=null,m.reset();for(let ne in g)delete g[ne];e.setRenderTarget(w),h=null,d=null,f=null,r=null,b=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ee=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?yo:Js,Ee=y.stencil?xo:Sr);let Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Pn(d.textureWidth,d.textureHeight,{format:Ln,type:Wn,depthTexture:new Fa(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(ne){for(let re=0;re<ne.removed.length;re++){let xe=ne.removed[re],Ee=A.indexOf(xe);Ee>=0&&(A[Ee]=null,C[Ee].disconnect(xe))}for(let re=0;re<ne.added.length;re++){let xe=ne.added[re],Ee=A.indexOf(xe);if(Ee===-1){for(let Oe=0;Oe<C.length;Oe++)if(Oe>=A.length){A.push(xe),Ee=Oe;break}else if(A[Oe]===null){A[Oe]=xe,Ee=Oe;break}if(Ee===-1)break}let Me=C[Ee];Me&&Me.connect(xe)}}let U=new M,ie=new M;function te(ne,re,xe){U.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(xe.matrixWorld);let Ee=U.distanceTo(ie),Me=re.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,Y=Me[14]/(Me[10]-1),v=Me[14]/(Me[10]+1),F=(Me[9]+1)/Me[5],O=(Me[9]-1)/Me[5],B=(Me[8]-1)/Me[0],z=(Oe[8]+1)/Oe[0],H=Y*B,ee=Y*z,se=Ee/(-B+z),me=se*-B;if(re.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(me),ne.translateZ(se),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Me[10]===-1)ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ce=Y+se,I=v+se,_=H-me,L=ee+(Ee-me),j=F*v/I*Ce,K=O*v/I*Ce;ne.projectionMatrix.makePerspective(_,L,j,K,Ce,I),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,re){re===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(re.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let re=ne.near,xe=ne.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),k.near=S.near=T.near=re,k.far=S.far=T.far=xe,(N!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,X=k.far),k.layers.mask=ne.layers.mask|6,T.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;let Ee=ne.parent,Me=k.cameras;ce(k,Ee);for(let Oe=0;Oe<Me.length;Oe++)ce(Me[Oe],Ee);Me.length===2?te(k,T,S):k.projectionMatrix.copy(T.projectionMatrix),_e(ne,k,Ee)};function _e(ne,re,xe){xe===null?ne.matrix.copy(re.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(re.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(re.projectionMatrix),ne.projectionMatrixInverse.copy(re.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Qs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ne){return g[ne]};let Ae=null;function Ie(ne,re){if(u=re.getViewerPose(c||o),p=re,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ee=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,Ee=!0);for(let v=0;v<xe.length;v++){let F=xe[v],O=null;if(h!==null)O=h.getViewport(F);else{let z=f.getViewSubImage(d,F);O=z.viewport,v===0&&(e.setRenderTargetTextures(b,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(b))}let B=E[v];B===void 0&&(B=new Yt,B.layers.enable(v),B.viewport=new lt,E[v]=B),B.matrix.fromArray(F.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(F.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(O.x,O.y,O.width,O.height),v===0&&(k.matrix.copy(B.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ee===!0&&k.cameras.push(B)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let v=f.getDepthInformation(xe[0]);v&&v.isValid&&v.texture&&m.init(v,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let v=0;v<xe.length;v++){let F=xe[v].camera;if(F){let O=g[F];O||(O=new Na,g[F]=O);let B=f.getCameraImage(F);O.sourceTexture=B}}}}for(let xe=0;xe<C.length;xe++){let Ee=A[xe],Me=C[xe];Ee!==null&&Me!==void 0&&Me.update(Ee,re,c||o)}Ae&&Ae(ne,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}let Pe=new ex;Pe.setAnimationLoop(Ie),this.setAnimationLoop=function(ne){Ae=ne},this.dispose=function(){}}},ls=new Kt,KT=new ot;function eA(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Xf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,w,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&h(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,ls.copy(b),ls.x*=-1,ls.y*=-1,ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(KT.makeRotationFromEuler(ls)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;i.uniformBlockBinding(y,b)}function c(y,w){let b=r[y.id];b===void 0&&(p(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",m));let C=w.program;i.updateUBOMapping(y,C);let A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){let w=f();y.__bindingPointIndex=w;let b=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=r[y.id],b=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,D=b.length;A<D;A++){let P=Array.isArray(b[A])?b[A]:[b[A]];for(let T=0,S=P.length;T<S;T++){let E=P[T];if(h(E,A,T,C)===!0){let k=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],X=0;for(let V=0;V<N.length;V++){let W=N[V],J=x(W);typeof W=="number"||typeof W=="boolean"?(E.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+X,E.__data)):W.isMatrix3?(E.__data[0]=W.elements[0],E.__data[1]=W.elements[1],E.__data[2]=W.elements[2],E.__data[3]=0,E.__data[4]=W.elements[3],E.__data[5]=W.elements[4],E.__data[6]=W.elements[5],E.__data[7]=0,E.__data[8]=W.elements[6],E.__data[9]=W.elements[7],E.__data[10]=W.elements[8],E.__data[11]=0):(W.toArray(E.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,w,b,C){let A=y.value,D=w+"_"+b;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{let P=C[D];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[D]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(y){let w=y.uniforms,b=0,C=16;for(let D=0,P=w.length;D<P;D++){let T=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,E=T.length;S<E;S++){let k=T[S],N=Array.isArray(k.value)?k.value:[k.value];for(let X=0,V=N.length;X<V;X++){let W=N[X],J=x(W),U=b%C,ie=U%J.boundary,te=U+ie;b+=ie,te!==0&&C-te<J.storage&&(b+=C-te),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=J.storage}}}let A=b%C;return A>0&&(b+=C-A),y.__size=b,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var uh=class{constructor(e={}){let{canvas:t=b0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,C=!1;this._outputColorSpace=pt;let A=0,D=0,P=null,T=-1,S=null,E=new lt,k=new lt,N=null,X=new De(0),V=0,W=t.width,J=t.height,U=1,ie=null,te=null,ce=new lt(0,0,W,J),_e=new lt(0,0,W,J),Ae=!1,Ie=new oo,Pe=!1,ne=!1,re=new ot,xe=new M,Ee=new lt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Y(){return P===null?U:1}let v=i;function F(R,Q){return t.getContext(R,Q)}try{let R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ve,!1),v===null){let Q="webgl2";if(v=F(Q,R),v===null)throw F(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let O,B,z,H,ee,se,me,Ce,I,_,L,j,K,Z,he,ue,pe,ge,le,Se,ke,ye,we,qe;function q(){O=new vw(v),O.init(),ye=new JT(v,O),B=new dw(v,O,e,ye),z=new ZT(v,O),B.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),H=new bw(v),ee=new FT,se=new jT(v,O,z,ee,B,ye,H),me=new pw(b),Ce=new yw(b),I=new Cb(v),we=new uw(v,I),_=new _w(v,I,H,we),L=new ww(v,_,I,H),le=new Sw(v,B,se),ue=new fw(ee),j=new UT(b,me,Ce,O,B,we,ue),K=new eA(b,ee),Z=new BT,he=new HT(O),ge=new cw(b,me,Ce,z,L,h,l),pe=new XT(b,L,B),qe=new tA(v,H,B,z),Se=new hw(v,O,H),ke=new Mw(v,O,H),H.programs=j.programs,b.capabilities=B,b.extensions=O,b.properties=ee,b.renderLists=Z,b.shadowMap=pe,b.state=z,b.info=H}q();let be=new up(b,v);this.xr=be,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let R=O.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=O.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(W,J,!1))},this.getSize=function(R){return R.set(W,J)},this.setSize=function(R,Q,oe=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,J=Q,t.width=Math.floor(R*U),t.height=Math.floor(Q*U),oe===!0&&(t.style.width=R+"px",t.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(W*U,J*U).floor()},this.setDrawingBufferSize=function(R,Q,oe){W=R,J=Q,U=oe,t.width=Math.floor(R*oe),t.height=Math.floor(Q*oe),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,Q,oe,ae){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,Q,oe,ae),z.viewport(E.copy(ce).multiplyScalar(U).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,Q,oe,ae){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,Q,oe,ae),z.scissor(k.copy(_e).multiplyScalar(U).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){z.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){ie=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,oe=!0){let ae=0;if(R){let $=!1;if(P!==null){let Te=P.texture.format;$=Te===Pu||Te===Ru||Te===Cu}if($){let Te=P.texture.type,Ue=Te===Wn||Te===Sr||Te===go||Te===xo||Te===Tu||Te===Au,Ge=ge.getClearColor(),ze=ge.getClearAlpha(),Je=Ge.r,Qe=Ge.g,Xe=Ge.b;Ue?(p[0]=Je,p[1]=Qe,p[2]=Xe,p[3]=ze,v.clearBufferuiv(v.COLOR,0,p)):(x[0]=Je,x[1]=Qe,x[2]=Xe,x[3]=ze,v.clearBufferiv(v.COLOR,0,x))}else ae|=v.COLOR_BUFFER_BIT}Q&&(ae|=v.DEPTH_BUFFER_BIT),oe&&(ae|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Z.dispose(),he.dispose(),ee.dispose(),me.dispose(),Ce.dispose(),L.dispose(),we.dispose(),qe.dispose(),j.dispose(),be.dispose(),be.removeEventListener("sessionstart",xi),be.removeEventListener("sessionend",Bm),kr.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=H.autoReset,Q=pe.enabled,oe=pe.autoUpdate,ae=pe.needsUpdate,$=pe.type;q(),H.autoReset=R,pe.enabled=Q,pe.autoUpdate=oe,pe.needsUpdate=ae,pe.type=$}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){let Q=R.target;Q.removeEventListener("dispose",de),We(Q)}function We(R){tt(R),ee.remove(R)}function tt(R){let Q=ee.get(R).programs;Q!==void 0&&(Q.forEach(function(oe){j.releaseProgram(oe)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,oe,ae,$,Te){Q===null&&(Q=Me);let Ue=$.isMesh&&$.matrixWorld.determinant()<0,Ge=j_(R,Q,oe,ae,$);z.setMaterial(ae,Ue);let ze=oe.index,Je=1;if(ae.wireframe===!0){if(ze=_.getWireframeAttribute(oe),ze===void 0)return;Je=2}let Qe=oe.drawRange,Xe=oe.attributes.position,at=Qe.start*Je,wt=(Qe.start+Qe.count)*Je;Te!==null&&(at=Math.max(at,Te.start*Je),wt=Math.min(wt,(Te.start+Te.count)*Je)),ze!==null?(at=Math.max(at,0),wt=Math.min(wt,ze.count)):Xe!=null&&(at=Math.max(at,0),wt=Math.min(wt,Xe.count));let Xt=wt-at;if(Xt<0||Xt===1/0)return;we.setup($,ae,Ge,oe,ze);let It,Et=Se;if(ze!==null&&(It=I.get(ze),Et=ke,Et.setIndex(It)),$.isMesh)ae.wireframe===!0?(z.setLineWidth(ae.wireframeLinewidth*Y()),Et.setMode(v.LINES)):Et.setMode(v.TRIANGLES);else if($.isLine){let Ye=ae.linewidth;Ye===void 0&&(Ye=1),z.setLineWidth(Ye*Y()),$.isLineSegments?Et.setMode(v.LINES):$.isLineLoop?Et.setMode(v.LINE_LOOP):Et.setMode(v.LINE_STRIP)}else $.isPoints?Et.setMode(v.POINTS):$.isSprite&&Et.setMode(v.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ye=$._multiDrawStarts,Nt=$._multiDrawCounts,ft=$._multiDrawCount,Bn=ze?I.get(ze).bytesPerElement:1,Cs=ee.get(ae).currentProgram.getUniforms();for(let On=0;On<ft;On++)Cs.setValue(v,"_gl_DrawID",On),Et.render(Ye[On]/Bn,Nt[On])}else if($.isInstancedMesh)Et.renderInstances(at,Xt,$.count);else if(oe.isInstancedBufferGeometry){let Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Nt=Math.min(oe.instanceCount,Ye);Et.renderInstances(at,Xt,Nt)}else Et.render(at,Xt)};function Rt(R,Q,oe){R.transparent===!0&&R.side===an&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,ic(R,Q,oe),R.side=ai,R.needsUpdate=!0,ic(R,Q,oe),R.side=an):ic(R,Q,oe)}this.compile=function(R,Q,oe=null){oe===null&&(oe=R),g=he.get(oe),g.init(Q),w.push(g),oe.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),R!==oe&&R.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();let ae=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Te=$.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){let Ge=Te[Ue];Rt(Ge,oe,$),ae.add(Ge)}else Rt(Te,oe,$),ae.add(Te)}),g=w.pop(),ae},this.compileAsync=function(R,Q,oe=null){let ae=this.compile(R,Q,oe);return new Promise($=>{function Te(){if(ae.forEach(function(Ue){ee.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){$(R);return}setTimeout(Te,10)}O.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xt=null;function Oi(R){xt&&xt(R)}function xi(){kr.stop()}function Bm(){kr.start()}let kr=new ex;kr.setAnimationLoop(Oi),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(R){xt=R,be.setAnimationLoop(R),R===null?kr.stop():kr.start()},be.addEventListener("sessionstart",xi),be.addEventListener("sessionend",Bm),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(Q),Q=be.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Q,P),g=he.get(R,w.length),g.init(Q),w.push(g),re.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ie.setFromProjectionMatrix(re,oi,Q.reversedDepth),ne=this.localClippingEnabled,Pe=ue.init(this.clippingPlanes,ne),m=Z.get(R,y.length),m.init(),y.push(m),be.enabled===!0&&be.isPresenting===!0){let Te=b.xr.getDepthSensingMesh();Te!==null&&zd(Te,Q,-1/0,b.sortObjects)}zd(R,Q,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ie,te),Oe=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Oe&&ge.addToRenderList(m,R),this.info.render.frame++,Pe===!0&&ue.beginShadows();let oe=g.state.shadowsArray;pe.render(oe,R,Q),Pe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,$=m.transmissive;if(g.setupLights(),Q.isArrayCamera){let Te=Q.cameras;if($.length>0)for(let Ue=0,Ge=Te.length;Ue<Ge;Ue++){let ze=Te[Ue];zm(ae,$,R,ze)}Oe&&ge.render(R);for(let Ue=0,Ge=Te.length;Ue<Ge;Ue++){let ze=Te[Ue];Om(m,R,ze,ze.viewport)}}else $.length>0&&zm(ae,$,R,Q),Oe&&ge.render(R),Om(m,R,Q);P!==null&&D===0&&(se.updateMultisampleRenderTarget(P),se.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(b,R,Q),we.resetDefaultState(),T=-1,S=null,w.pop(),w.length>0?(g=w[w.length-1],Pe===!0&&ue.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zd(R,Q,oe,ae){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ie.intersectsSprite(R)){ae&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);let Ue=L.update(R),Ge=R.material;Ge.visible&&m.push(R,Ue,Ge,oe,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ie.intersectsObject(R))){let Ue=L.update(R),Ge=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ee.copy(Ue.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(Ge)){let ze=Ue.groups;for(let Je=0,Qe=ze.length;Je<Qe;Je++){let Xe=ze[Je],at=Ge[Xe.materialIndex];at&&at.visible&&m.push(R,Ue,at,oe,Ee.z,Xe)}}else Ge.visible&&m.push(R,Ue,Ge,oe,Ee.z,null)}}let Te=R.children;for(let Ue=0,Ge=Te.length;Ue<Ge;Ue++)zd(Te[Ue],Q,oe,ae)}function Om(R,Q,oe,ae){let $=R.opaque,Te=R.transmissive,Ue=R.transparent;g.setupLightsView(oe),Pe===!0&&ue.setGlobalState(b.clippingPlanes,oe),ae&&z.viewport(E.copy(ae)),$.length>0&&nc($,Q,oe),Te.length>0&&nc(Te,Q,oe),Ue.length>0&&nc(Ue,Q,oe),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function zm(R,Q,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Pn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?wi:Wn,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Te=g.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||E;Te.setSize(Ue.z*b.transmissionResolutionScale,Ue.w*b.transmissionResolutionScale);let Ge=b.getRenderTarget(),ze=b.getActiveCubeFace(),Je=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(X),V=b.getClearAlpha(),V<1&&b.setClearColor(16777215,.5),b.clear(),Oe&&ge.render(oe);let Qe=b.toneMapping;b.toneMapping=Ji;let Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),Pe===!0&&ue.setGlobalState(b.clippingPlanes,ae),nc(R,oe,ae),se.updateMultisampleRenderTarget(Te),se.updateRenderTargetMipmap(Te),O.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let wt=0,Xt=Q.length;wt<Xt;wt++){let It=Q[wt],Et=It.object,Ye=It.geometry,Nt=It.material,ft=It.group;if(Nt.side===an&&Et.layers.test(ae.layers)){let Bn=Nt.side;Nt.side=fn,Nt.needsUpdate=!0,Vm(Et,oe,ae,Ye,Nt,ft),Nt.side=Bn,Nt.needsUpdate=!0,at=!0}}at===!0&&(se.updateMultisampleRenderTarget(Te),se.updateRenderTargetMipmap(Te))}b.setRenderTarget(Ge,ze,Je),b.setClearColor(X,V),Xe!==void 0&&(ae.viewport=Xe),b.toneMapping=Qe}function nc(R,Q,oe){let ae=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Te=R.length;$<Te;$++){let Ue=R[$],Ge=Ue.object,ze=Ue.geometry,Je=Ue.group,Qe=Ue.material;Qe.allowOverride===!0&&ae!==null&&(Qe=ae),Ge.layers.test(oe.layers)&&Vm(Ge,Q,oe,ze,Qe,Je)}}function Vm(R,Q,oe,ae,$,Te){R.onBeforeRender(b,Q,oe,ae,$,Te),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(b,Q,oe,ae,R,Te),$.transparent===!0&&$.side===an&&$.forceSinglePass===!1?($.side=fn,$.needsUpdate=!0,b.renderBufferDirect(oe,Q,ae,$,R,Te),$.side=ai,$.needsUpdate=!0,b.renderBufferDirect(oe,Q,ae,$,R,Te),$.side=an):b.renderBufferDirect(oe,Q,ae,$,R,Te),R.onAfterRender(b,Q,oe,ae,$,Te)}function ic(R,Q,oe){Q.isScene!==!0&&(Q=Me);let ae=ee.get(R),$=g.state.lights,Te=g.state.shadowsArray,Ue=$.state.version,Ge=j.getParameters(R,$.state,Te,Q,oe),ze=j.getProgramCacheKey(Ge),Je=ae.programs;ae.environment=R.isMeshStandardMaterial?Q.environment:null,ae.fog=Q.fog,ae.envMap=(R.isMeshStandardMaterial?Ce:me).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",de),Je=new Map,ae.programs=Je);let Qe=Je.get(ze);if(Qe!==void 0){if(ae.currentProgram===Qe&&ae.lightsStateVersion===Ue)return Gm(R,Ge),Qe}else Ge.uniforms=j.getUniforms(R),R.onBeforeCompile(Ge,b),Qe=j.acquireProgram(Ge,ze),Je.set(ze,Qe),ae.uniforms=Ge.uniforms;let Xe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=ue.uniform),Gm(R,Ge),ae.needsLights=Q_(R),ae.lightsStateVersion=Ue,ae.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=Qe,ae.uniformsList=null,Qe}function km(R){if(R.uniformsList===null){let Q=R.currentProgram.getUniforms();R.uniformsList=Mo.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Gm(R,Q){let oe=ee.get(R);oe.outputColorSpace=Q.outputColorSpace,oe.batching=Q.batching,oe.batchingColor=Q.batchingColor,oe.instancing=Q.instancing,oe.instancingColor=Q.instancingColor,oe.instancingMorph=Q.instancingMorph,oe.skinning=Q.skinning,oe.morphTargets=Q.morphTargets,oe.morphNormals=Q.morphNormals,oe.morphColors=Q.morphColors,oe.morphTargetsCount=Q.morphTargetsCount,oe.numClippingPlanes=Q.numClippingPlanes,oe.numIntersection=Q.numClipIntersection,oe.vertexAlphas=Q.vertexAlphas,oe.vertexTangents=Q.vertexTangents,oe.toneMapping=Q.toneMapping}function j_(R,Q,oe,ae,$){Q.isScene!==!0&&(Q=Me),se.resetTextureUnits();let Te=Q.fog,Ue=ae.isMeshStandardMaterial?Q.environment:null,Ge=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Jr,ze=(ae.isMeshStandardMaterial?Ce:me).get(ae.envMap||Ue),Je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Qe=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!oe.morphAttributes.position,at=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color,Xt=Ji;ae.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Xt=b.toneMapping);let It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Et=It!==void 0?It.length:0,Ye=ee.get(ae),Nt=g.state.lights;if(Pe===!0&&(ne===!0||R!==S)){let bn=R===S&&ae.id===T;ue.setState(ae,R,bn)}let ft=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==Ge||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==ze||ae.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==Qe||Ye.morphTargets!==Xe||Ye.morphNormals!==at||Ye.morphColors!==wt||Ye.toneMapping!==Xt||Ye.morphTargetsCount!==Et)&&(ft=!0):(ft=!0,Ye.__version=ae.version);let Bn=Ye.currentProgram;ft===!0&&(Bn=ic(ae,Q,$));let Cs=!1,On=!1,ra=!1,Bt=Bn.getUniforms(),Xn=Ye.uniforms;if(z.useProgram(Bn.program)&&(Cs=!0,On=!0,ra=!0),ae.id!==T&&(T=ae.id,On=!0),Cs||S!==R){z.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(v,"projectionMatrix",R.projectionMatrix),Bt.setValue(v,"viewMatrix",R.matrixWorldInverse);let En=Bt.map.cameraPosition;En!==void 0&&En.setValue(v,xe.setFromMatrixPosition(R.matrixWorld)),B.logarithmicDepthBuffer&&Bt.setValue(v,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(v,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,On=!0,ra=!0)}if($.isSkinnedMesh){Bt.setOptional(v,$,"bindMatrix"),Bt.setOptional(v,$,"bindMatrixInverse");let bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Bt.setValue(v,"boneTexture",bn.boneTexture,se))}$.isBatchedMesh&&(Bt.setOptional(v,$,"batchingTexture"),Bt.setValue(v,"batchingTexture",$._matricesTexture,se),Bt.setOptional(v,$,"batchingIdTexture"),Bt.setValue(v,"batchingIdTexture",$._indirectTexture,se),Bt.setOptional(v,$,"batchingColorTexture"),$._colorsTexture!==null&&Bt.setValue(v,"batchingColorTexture",$._colorsTexture,se));let Yn=oe.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&le.update($,oe,Bn),(On||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,Bt.setValue(v,"receiveShadow",$.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Xn.envMap.value=ze,Xn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Q.environment!==null&&(Xn.envMapIntensity.value=Q.environmentIntensity),On&&(Bt.setValue(v,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&J_(Xn,ra),Te&&ae.fog===!0&&K.refreshFogUniforms(Xn,Te),K.refreshMaterialUniforms(Xn,ae,U,J,g.state.transmissionRenderTarget[R.id]),Mo.upload(v,km(Ye),Xn,se)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Mo.upload(v,km(Ye),Xn,se),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(v,"center",$.center),Bt.setValue(v,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(v,"normalMatrix",$.normalMatrix),Bt.setValue(v,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let bn=ae.uniformsGroups;for(let En=0,Vd=bn.length;En<Vd;En++){let Gr=bn[En];qe.update(Gr,Bn),qe.bind(Gr,Bn)}}return Bn}function J_(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Q_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,Q,oe){let ae=ee.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ee.get(R.texture).__webglTexture=Q,ee.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){let oe=ee.get(R);oe.__webglFramebuffer=Q,oe.__useDefaultFramebuffer=Q===void 0};let $_=v.createFramebuffer();this.setRenderTarget=function(R,Q=0,oe=0){P=R,A=Q,D=oe;let ae=!0,$=null,Te=!1,Ue=!1;if(R){let ze=ee.get(R);if(ze.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(v.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(ze.__hasExternalTextures)se.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xe=R.depthTexture;if(ze.__boundDepthTexture!==Xe){if(Xe!==null&&ee.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}let Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ue=!0);let Qe=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[Q])?$=Qe[Q][oe]:$=Qe[Q],Te=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?$=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?$=Qe[oe]:$=Qe,E.copy(R.viewport),k.copy(R.scissor),N=R.scissorTest}else E.copy(ce).multiplyScalar(U).floor(),k.copy(_e).multiplyScalar(U).floor(),N=Ae;if(oe!==0&&($=$_),z.bindFramebuffer(v.FRAMEBUFFER,$)&&ae&&z.drawBuffers(R,$),z.viewport(E),z.scissor(k),z.setScissorTest(N),Te){let ze=ee.get(R.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ze.__webglTexture,oe)}else if(Ue){let ze=Q;for(let Je=0;Je<R.textures.length;Je++){let Qe=ee.get(R.textures[Je]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,oe,ze)}}else if(R!==null&&oe!==0){let ze=ee.get(R.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,ze.__webglTexture,oe)}T=-1},this.readRenderTargetPixels=function(R,Q,oe,ae,$,Te,Ue,Ge=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){z.bindFramebuffer(v.FRAMEBUFFER,ze);try{let Je=R.textures[Ge],Qe=Je.format,Xe=Je.type;if(!B.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-ae&&oe>=0&&oe<=R.height-$&&(R.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ge),v.readPixels(Q,oe,ae,$,ye.convert(Qe),ye.convert(Xe),Te))}finally{let Je=P!==null?ee.get(P).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,Q,oe,ae,$,Te,Ue,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(Q>=0&&Q<=R.width-ae&&oe>=0&&oe<=R.height-$){z.bindFramebuffer(v.FRAMEBUFFER,ze);let Je=R.textures[Ge],Qe=Je.format,Xe=Je.type;if(!B.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,at),v.bufferData(v.PIXEL_PACK_BUFFER,Te.byteLength,v.STREAM_READ),R.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ge),v.readPixels(Q,oe,ae,$,ye.convert(Qe),ye.convert(Xe),0);let wt=P!==null?ee.get(P).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,wt);let Xt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await S0(v,Xt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,at),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Te),v.deleteBuffer(at),v.deleteSync(Xt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,oe=0){let ae=Math.pow(2,-oe),$=Math.floor(R.image.width*ae),Te=Math.floor(R.image.height*ae),Ue=Q!==null?Q.x:0,Ge=Q!==null?Q.y:0;se.setTexture2D(R,0),v.copyTexSubImage2D(v.TEXTURE_2D,oe,0,0,Ue,Ge,$,Te),z.unbindTexture()};let K_=v.createFramebuffer(),eM=v.createFramebuffer();this.copyTextureToTexture=function(R,Q,oe=null,ae=null,$=0,Te=null){Te===null&&($!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Ue,Ge,ze,Je,Qe,Xe,at,wt,Xt,It=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(oe!==null)Ue=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,ze=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,Qe=oe.min.y,Xe=oe.isBox3?oe.min.z:0;else{let Yn=Math.pow(2,-$);Ue=Math.floor(It.width*Yn),Ge=Math.floor(It.height*Yn),R.isDataArrayTexture?ze=It.depth:R.isData3DTexture?ze=Math.floor(It.depth*Yn):ze=1,Je=0,Qe=0,Xe=0}ae!==null?(at=ae.x,wt=ae.y,Xt=ae.z):(at=0,wt=0,Xt=0);let Et=ye.convert(Q.format),Ye=ye.convert(Q.type),Nt;Q.isData3DTexture?(se.setTexture3D(Q,0),Nt=v.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(se.setTexture2DArray(Q,0),Nt=v.TEXTURE_2D_ARRAY):(se.setTexture2D(Q,0),Nt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,Q.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,Q.unpackAlignment);let ft=v.getParameter(v.UNPACK_ROW_LENGTH),Bn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Cs=v.getParameter(v.UNPACK_SKIP_PIXELS),On=v.getParameter(v.UNPACK_SKIP_ROWS),ra=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,It.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,It.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Je),v.pixelStorei(v.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xe);let Bt=R.isDataArrayTexture||R.isData3DTexture,Xn=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){let Yn=ee.get(R),bn=ee.get(Q),En=ee.get(Yn.__renderTarget),Vd=ee.get(bn.__renderTarget);z.bindFramebuffer(v.READ_FRAMEBUFFER,En.__webglFramebuffer),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,Vd.__webglFramebuffer);for(let Gr=0;Gr<ze;Gr++)Bt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(R).__webglTexture,$,Xe+Gr),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(Q).__webglTexture,Te,Xt+Gr)),v.blitFramebuffer(Je,Qe,Ue,Ge,at,wt,Ue,Ge,v.DEPTH_BUFFER_BIT,v.NEAREST);z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||ee.has(R)){let Yn=ee.get(R),bn=ee.get(Q);z.bindFramebuffer(v.READ_FRAMEBUFFER,K_),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,eM);for(let En=0;En<ze;En++)Bt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Yn.__webglTexture,$,Xe+En):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Yn.__webglTexture,$),Xn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,bn.__webglTexture,Te,Xt+En):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,bn.__webglTexture,Te),$!==0?v.blitFramebuffer(Je,Qe,Ue,Ge,at,wt,Ue,Ge,v.COLOR_BUFFER_BIT,v.NEAREST):Xn?v.copyTexSubImage3D(Nt,Te,at,wt,Xt+En,Je,Qe,Ue,Ge):v.copyTexSubImage2D(Nt,Te,at,wt,Je,Qe,Ue,Ge);z.bindFramebuffer(v.READ_FRAMEBUFFER,null),z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Xn?R.isDataTexture||R.isData3DTexture?v.texSubImage3D(Nt,Te,at,wt,Xt,Ue,Ge,ze,Et,Ye,It.data):Q.isCompressedArrayTexture?v.compressedTexSubImage3D(Nt,Te,at,wt,Xt,Ue,Ge,ze,Et,It.data):v.texSubImage3D(Nt,Te,at,wt,Xt,Ue,Ge,ze,Et,Ye,It):R.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Te,at,wt,Ue,Ge,Et,Ye,It.data):R.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Te,at,wt,It.width,It.height,Et,It.data):v.texSubImage2D(v.TEXTURE_2D,Te,at,wt,Ue,Ge,Et,Ye,It);v.pixelStorei(v.UNPACK_ROW_LENGTH,ft),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Bn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Cs),v.pixelStorei(v.UNPACK_SKIP_ROWS,On),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ra),Te===0&&Q.generateMipmaps&&v.generateMipmap(Nt),z.unbindTexture()},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),z.unbindTexture()},this.resetState=function(){A=0,D=0,P=null,z.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var ll=class n extends Ve{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Yt;let i=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Cn,f=new M,d=new M,h=new M,p=new ot,x=new M(0,0,-1),m=new lt,g=new M,y=new M,w=new lt,b=new ot,C=this.camera,A=new Pn(s,o,{samples:c,type:wi}),D=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:oh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=A.texture,D.uniforms.color.value=r,D.uniforms.textureMatrix.value=b,this.material=D,this.onBeforeRender=function(P,T,S){if(d.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(S.matrixWorld),p.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(p),g.subVectors(d,h),g.dot(f)>0===!0&&this.forceUpdate===!1)return;g.reflect(f).negate(),g.add(d),p.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(d,x),y.reflect(f).negate(),y.add(d),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(f),C.lookAt(y),C.far=S.far,C.updateMatrixWorld(),C.projectionMatrix.copy(S.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(C.projectionMatrix),b.multiply(C.matrixWorldInverse),b.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let k=C.projectionMatrix;w.x=(Math.sign(m.x)+k.elements[8])/k.elements[0],w.y=(Math.sign(m.y)+k.elements[9])/k.elements[5],w.z=-1,w.w=(1+k.elements[10])/k.elements[14],m.multiplyScalar(2/m.dot(w)),k.elements[2]=m.x,k.elements[6]=m.y,k.elements[10]=m.z+1-a,k.elements[14]=m.w,i.visible=!1;let N=P.getRenderTarget(),X=P.xr.enabled,V=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(A),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(T,C),P.xr.enabled=X,P.shadowMap.autoUpdate=V,P.setRenderTarget(N);let W=S.viewport;W!==void 0&&P.state.viewport(W),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}};ll.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var dh=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function ox(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function vn(n,e,t,i=0,r=0){return ox(n,new Ft(1,i),e,t,r)}function dp(n,e,t,i=0){return ox(n,new ui(1),e,t,i)}function nA(n,e){let t=new $e;return t.setAttribute("position",new Be(e.flat(),3)),{tone:n,geometry:t}}function sx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return nA(n,i)}function iA(){let n=[vn("fur",[0,.012,.011],[.154,.161,.132],1),vn("fur",[0,-.065,.008],[.128,.079,.108]),vn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),vn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),sx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),vn("skin",[0,-.061,-.133],[.102,.066,.065],1),vn("skinShade",[0,-.097,-.14],[.076,.031,.047]),vn("skin",[0,.015,-.15],[.041,.056,.038]),vn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(vn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),vn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),dp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),vn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),vn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),vn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),vn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),vn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),vn("ink",[e*.047,.031,-.183],[.011,.012,.006]),dp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),dp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(sx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function rA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new $e;return r.setAttribute("position",new ht(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var sA=rA(iA());function fh(n=0){let e=new dn({flatShading:!0}),t=new dn({flatShading:!0}),i=new dn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:f}){for(let{tone:d,start:h,end:p}of f){let{r:x,g:m,b:g}=s[d];for(let y=h;y<p;y++)u.setXYZ(y,x,m,g)}u.needsUpdate=!0}function l(u){let f=Number.isInteger(u)&&u>=0&&u<dh.length?u:0;if(f===o)return;o=f;let d=dh[o];for(let[h,p]of Object.entries(d))(s[h]??=new De).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let f=u.geometry.clone(),d=new ht(new Float32Array(f.getAttribute("position").count*3),3);f.setAttribute("color",d);let h={colors:d,ranges:u.ranges};return r.push(h),a(h),new Ve(f,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new Tt;return u.add(c(sA)),u}}}var hs=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],oA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],aA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],ax=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],ph=hs.length-1,lx=Math.min(...hs.map(n=>n[1])),cx=Math.max(...hs.map(n=>n[1])),$i=new M(0,0,(lx+cx)/2),mh=new M(.047,.027,(cx-lx)/2),lA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],cA=[-.57,.57,1,.61,-.61,-1],uA=[1,1,-.04,-.91,-.91,-.04];function gh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(T=0,S=0,E=0){let k=s.length/3;return s.push(T*r,S,E),k}function c(T,S,E){i?o.push(T,E,S):o.push(T,S,E)}function u(T,S,E,k){c(T,S,E),c(T,E,k)}function f(T,S){for(let E=0;E<T.length;E++){let k=(E+1)%T.length;u(T[k],T[E],S[E],S[k])}}function d(T,S){for(let E=0;E<T.length;E++)c(S,T[(E+1)%T.length],T[E])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=hs.map(([T,S,E,k],N)=>{let X=N===0||N===ph,V=T*.67,W=-.024+(S+.024)*.69;return{top:l(T,E,S),middle:l(T*1.08,(E+k)/2,X?S:-.025+(S+.025)*1.04),bottom:l(T,k,S),innerTop:l(V,oA[N],W),innerBottom:l(V,aA[N],W)}});function m(T){let S=x[T],E=x[(T+1)%x.length];return[S.top,E.top,E.middle,E.bottom,S.bottom,S.middle]}let g=new Set(ax.map(({edge:T})=>T));g.add(ph);for(let T=0;T<x.length;T++){let S=x[T],E=x[(T+1)%x.length];c(h,S.innerTop,E.innerTop),c(p,E.innerBottom,S.innerBottom),u(S.innerTop,S.top,E.top,E.innerTop),u(E.innerBottom,E.bottom,S.bottom,S.innerBottom),g.has(T)||(u(E.top,S.top,S.middle,E.middle),u(E.middle,S.middle,S.bottom,E.bottom))}let y=m(ph);t||d(y,l(0,0,hs[ph][1]));let w=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:T,length:S,splay:E}of ax){let[k,N,X,V]=hs[T],[W,J,U,ie]=hs[T+1],te=W-k,ce=J-N,_e=-ce+te*E,Ae=te+ce*E,Ie=Math.hypot(_e,Ae),Pe=Math.hypot(te,ce)/2,ne=(X+U-V-ie)/4,re=[],xe=m(T);for(let[Me,Oe,Y]of lA){let v=[l(),l(),l(),l(),l(),l()];f(xe,v),re.push({ring:v,distance:Me*S,width:Oe*Pe,height:Y*ne}),xe=v}let Ee=l();d(xe,Ee),a.push({x:(k+W)/2,y:(X+U+V+ie)/4,z:(N+J)/2,forwardX:_e/Ie,forwardZ:Ae/Ie,rows:re,tip:Ee,length:S,pressure:-1})}let b=new $e,C=new Be(s,3).setUsage(wn);b.setAttribute("position",C),b.setIndex(o),b.boundingSphere=new jn(new M(0,-.018,-.052),.12),b.boundingBox=new Qt(new M(-.1,-.082,-.17),new M(.1,.038,.025));let A=!0;function D(T,S=!0){let E=!1;for(let k=0;k<a.length;k++){let N=a[k],X=T?.[k],V=Number.isFinite(X)?Fe.clamp(X,0,1):0;if(V===N.pressure)continue;N.pressure=V,E=!0;let{forwardX:W,forwardZ:J,length:U,rows:ie,tip:te}=N,ce=N.x,_e=N.z,Ae=N.y,Ie=0,Pe=0;for(let{ring:xe,distance:Ee,width:Me,height:Oe}of ie){let Y=Ee/U,v=Fe.smoothstep(Y,0,.57),F=Fe.smoothstep(Y,.38,1),O=(.17+V*.83)*v+(.14+V*.76)*F,B=(O+Ie)/2,z=Ee-Pe,H=Math.cos(B)*z;ce+=W*H,Ae-=Math.sin(B)*z,_e+=J*H;for(let ee=0;ee<xe.length;ee++){let se=cA[ee]*Me,me=uA[ee]*Oe,Ce=me*Math.sin(O);C.setXYZ(xe[ee],r*(ce+J*se+W*Ce),Ae+me*Math.cos(O),_e-W*se+J*Ce)}Ie=O,Pe=Ee}let ne=U-Pe,re=ne*Math.cos(Ie);C.setXYZ(te,r*(ce+W*re),Ae-ne*Math.sin(Ie),_e+J*re)}E&&(C.needsUpdate=!0,A=!0),S&&A&&(b.computeVertexNormals(),A=!1)}D(),b.getAttribute("normal").setUsage(wn);let P=new Ve(b,e);return P.castShadow=!0,{mesh:P,pose:D,wristIndices:w}}var wr=12,fp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],hA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],ux=fp.flatMap(([n,e,t])=>Array.from({length:wr},(i,r)=>{let s=(r-.5)*Math.PI*2/wr;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function xh(n,e){let t=ux.length,i=[],r=(J,U,ie,te,ce)=>J.push(U,ie,te,U,te,ce);function s(J,U,ie=!1){for(let te=1;te<U.length-1;te++)ie?J.push(U[0],U[te+1],U[te]):J.push(U[0],U[te],U[te+1])}let o=(J,U)=>J*wr+(U+wr)%wr;for(let J=0;J<fp.length-1;J++)for(let U=0;U<wr;U++)(J===2||J===3)&&(U===0||U===6)||r(i,o(J,U),o(J+1,U),o(J+1,U+1),o(J,U+1));s(i,Array.from({length:wr},(J,U)=>o(0,U))),s(i,Array.from({length:wr},(J,U)=>o(fp.length-1,U)),!0);let a=t,l=e.map(({geometry:J,wristIndices:U},ie)=>{let te=ie===0?6:0,ce=[o(4,te),o(4,te+1),o(3,te+1),o(2,te+1),o(2,te),o(3,te)],_e=[ce,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Ae=_e.at(-1),Ie=new Array(J.attributes.position.count);U.forEach((re,xe)=>{Ie[re]=Ae[xe]});for(let re=0;re<Ie.length;re++)Ie[re]??=a++;let Pe=[];for(let re=0;re<J.index.count;re++)Pe.push(Ie[J.index.getX(re)]);for(let re=0;re<_e.length-1;re++)for(let xe=0;xe<6;xe++){let Ee=(xe+1)%6;r(i,_e[re][xe],_e[re][Ee],_e[re+1][Ee],_e[re+1][xe])}let ne=[];return s(ne,Ae),{socket:ce,rings:_e,wrist:Ae,wristIndices:U,remap:Ie,skin:Pe,cap:ne,sign:ie===0?-1:1}}),c=new $e,u=new Be(a*3,3).setUsage(wn);c.setAttribute("position",u);let f=new Ve(c,n);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let d=Array.from({length:4},(J,U)=>new $r([...i,...l.flatMap((ie,te)=>U&1<<te?ie.skin:ie.cap)],1));c.setIndex(d[0]);let h=new M,p=new M,x=new M,m=new M,g=new M,y=new M,w=new M,b=new M,C=new M,A=new He,D=new He,P=new He,T=new M(0,0,-1),S=new He().setFromEuler(new Kt(-1.42,0,0)),E=[.24,.62,.94,.56],k=[.089,.084,.069,.054,.037],N=0,X=0,V=!0;function W(J,U,ie,te,ce){let _e=!!(J[0]||J[1]);if(!_e&&!V&&N===ie&&X===te)return;N=ie,X=te,V=_e;for(let Ie=0;Ie<t;Ie++){let[Pe,ne,re]=ux[Ie];u.setXYZ(Ie,Pe*ie,ne*te,re*ie)}let Ae=0;for(let Ie=0;Ie<l.length;Ie++){let Pe=l[Ie],ne=J[Ie],re=e[Ie].geometry.attributes.position,xe=!!ne,Ee=Pe.wristIndices;xe&&ce&&(Ae|=1<<Ie),p.set(0,0,0);for(let Me of Pe.socket)p.add(h.fromBufferAttribute(u,Me));p.multiplyScalar(1/6),m.set(0,0,0);for(let Me of Ee)m.add(h.fromBufferAttribute(re,Me));m.multiplyScalar(1/6).applyQuaternion(ne?.quaternion??S),xe?m.add(ne.position):m.add(h.set(p.x+Pe.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),y.copy(g).normalize(),w.set(Pe.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Pe.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(g,.49),xe&&x.addScaledVector(w,Math.sqrt(Math.max(.007,U**2-g.lengthSq()*.25))*.72),A.setFromUnitVectors(T,y.subVectors(x,p).normalize()),D.copy(ne?.quaternion??S);for(let Me=0;Me<4;Me++){let Oe=Me===3;C.lerpVectors(Oe?x:p,Oe?m:x,E[Me]),P.copy(A).slerp(D,Oe?.79:Me*.19);for(let Y=0;Y<6;Y++){let v=hA[Y],F=k[Me];b.set(v[0]*F,v[1]*F*.84,0).applyQuaternion(P).add(C),u.setXYZ(Pe.rings[Me+1][Y],b.x,b.y,b.z)}}for(let Me=0;Me<Pe.remap.length;Me++)b.fromBufferAttribute(re,Me).applyQuaternion(D),xe?b.add(ne.position):b.add(h.set(p.x+Pe.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Pe.remap[Me],b.x,b.y,b.z)}c.index!==d[Ae]&&c.setIndex(d[Ae]),u.needsUpdate=!0,c.computeVertexNormals()}return W([null,null],.42,1,1,!1),{mesh:f,pose:W}}function wo(n,e){let t=new ci;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Yi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var hx=.1,dA=45,dx=55,cl=128,pp=96,fA=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],pA=new M(0,0,-1);function mp(){let n=new Tt,e=new gt({color:"#596974",roughness:.38,metalness:.6}),t=new gt({color:"#29323e",roughness:.68}),i=new _t({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,f=0){let d=new Ve(o,a);d.position.set(l,c,u),d.rotation.x=f,n.add(d)}let s=new gt({color:"#7f4231",roughness:.46,metalness:.34});return r(wo([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(wo([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Zt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new et(.054,.014,.073),s,.035,.045,-.099),r(new et(.018,.008,.023),i,.035,.063,-.131),n}function fx(n,{impact:e,onShot:t}){let i=mp(),r=new Ve(new Ft(.045,0),new _t({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new $e,o=new Be(cl*18,3).setUsage(wn),a=new Be(cl*18,3);for(let N=0;N<cl;N++)for(let X=0;X<6;X++){let V=fA[Math.floor(X/2)];a.setXYZ(N*6+X,V.r,V.g,V.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new es(s,new Mi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Be(pp*3,3).setUsage(wn),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let f=new Ua(u,new ao({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:Qn}));f.frustumCulled=!1,f.visible=!1,n.add(f);let d=Array.from({length:cl},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:pp},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,m=new M,g=0,y=0,w=0,b=0,C=0,A=!1;function D(N,X,V,W){for(let J=0;J<V;J++){let U=h[y++%pp];U.p.copy(N),U.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(W).addScaledVector(X,.55),U.life=.12+Math.random()*.21}}function P(N,X,V){let W=d[g++%cl];return W.p.copy(N),W.d.copy(pA).applyQuaternion(X),W.distance=0,W.active=!0,W.authoritative=V,W}function T(N){let X=P(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),D(p,X.d,4,2.2),C=.055,w++,t?.(N.position,N.quaternion)}function S(N,X,V){let W=P(N,X,V);D(W.p,W.d,4,2.2),l.visible=!0}function E({dt:N,aim:X,firing:V}){if(!X&&!i.visible&&!l.visible&&!f.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!X,X&&(i.position.copy(X.modelPosition??X.position),i.quaternion.copy(X.quaternion)),X&&V){if(A)for(b-=N;b<=0;)T(X),b+=hx;else T(X),b=hx;A=!0}else b=0,A=!1;C=Math.max(0,C-N),r.visible=!!X&&C>0,r.material.opacity=C/.055;let W=0;for(let U of d){if(!U.active)continue;let ie=Math.min(dA*N,dx-U.distance),te=ie>0?e?.(U.p,U.d,ie,U.authoritative):null,ce=te==null?ie:Math.max(0,Math.min(ie,te));U.p.addScaledVector(U.d,ce),U.distance+=ce,te!=null&&(m.copy(U.d).negate(),D(U.p,m,8,4.2)),U.active=te==null&&U.distance<dx;let _e=Math.min(.82,U.distance);for(let Ae=0;Ae<3;Ae++)for(let Ie=0;Ie<2;Ie++){let Pe=(Ae+Ie)/3;x.copy(U.p).addScaledVector(U.d,-_e*Pe),o.setXYZ(W++,x.x,x.y,x.z)}}l.visible=W>0,W>0&&(o.needsUpdate=!0),s.setDrawRange(0,W);let J=0;for(let U of h)U.life<=0||(U.life-=N,U.v.y-=5*N,U.p.addScaledVector(U.v,N),U.life>0&&c.setXYZ(J++,U.p.x,U.p.y,U.p.z));f.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function k(){for(let N of d)N.active=!1;for(let N of h)N.life=0;b=C=0,A=!1,i.visible=r.visible=l.visible=f.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:E,reset:k,replay:S,get shotsFired(){return w}}}var px=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],mA=new M(0,1,0);function yh(n){let e=new Tt,t=new gt({color:"#2c4750",roughness:.43,metalness:.47}),i=new gt({color:"#899fa3",roughness:.46,metalness:.57}),r=new _t({toneMapped:!1});function s(h,p,x,m,g,y=0){let w=new Ve(h,p);return w.position.set(x,m,g),w.rotation.x=y,e.add(w),w}s(wo([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(wo([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Zt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Zt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new et(.044,.009,.038),r,.038,.069,-.023);let o=new Ve(new Zt(.002,.003,1,5,1,!0),new _t({transparent:!0,opacity:.52,depthWrite:!1,blending:Qn,toneMapped:!1})),a=new Ve(new Ft(.012,0),new _t({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function f(){e.visible=o.visible=a.visible=!1}function d({mode:h,position:p,quaternion:x,end:m}){if(!h||!p||!x||!m){f();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(px[h-1]??px[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(mA,c.normalize()),a.position.copy(m)}return f(),{mesh:e,hide:f,update:d}}var gA="wss://clouddata.turbowarp.org",xA="itssoren.github.io/VR/gorilla-lab/",Mh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},To=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),xx="\u2601 GorillaHost",ul=["ARENE1","ARENE2","ARENE3"],yA=new Map([[xx,"vr"],[Mh.vr,"vr"],[Mh.pc,"pc"],...To.map(n=>[n,"player"])]),xp=53,vh=4400,yx=64e3,vA=100,_A=200,MA=450,vx=6,Vt=(n,e)=>Math.round(n).toString().padStart(e,"0");function hl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function ds(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function bA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Vt(e,7)+a.map(c=>Vt(c*100+2e4,5)).join("")+Vt(Math.round(l*10)%3600,4)+Vt(o,6)}function SA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function _x({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),f=o(),d=null,h=null,p="",x=0,m="",g=-1/0,y=null,w=0,b=0,C=1/0,A=0,D="offline",P=!1,T=-1,S=0,E=[],k=1/0,N=350,X=1/0,V=0,W=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function U(v,F){D=v,n(F)}function ie(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function te(){return[...c.values()].map(v=>v.pose).filter(Boolean)}function ce(){let v=te().filter(z=>h==="vr"?z.role!=="vr":z.role==="vr"),F=z=>Number(z.ready)*2+ +(z.role==="pc"),O=v.find(z=>z.id===y?.id)??null,B=v.reduce((z,H)=>!z||F(H)>F(z)?H:z,O);B!==y&&(y=B,e(y))}function _e(v){for(let F of c.values())F.pose&&t(null,F.pose),F.pose=F.candidate=null;v&&c.clear(),ce()}function Ae(){let v=d;if(d=null,v){v.onopen=v.onmessage=v.onerror=v.onclose=null;try{v.close()}catch{}}}function Ie(){Ae(),h=null,p="",C=1/0,P=!1,T=-1,E=[],W=[],_e(!0),U("offline","Hors ligne")}function Pe(v){let F=Math.min(3e4,1500*2**Math.min(A++,5));C=a()+F,U("retry","TurboWarp d\xE9connect\xE9 ("+v+") \xB7 reconnexion automatique au salon "+p)}function ne(v){let F=!1;for(let[O,B]of c)B.pose&&v-B.pose.arrival>vh&&(t(null,B.pose),B.pose=null,F=!0),B.candidate&&v-B.candidate.arrival>vh&&(B.candidate=null),v-B.lastArrival>6e4&&c.delete(O);F&&ce()}function re(v,F,O,B){let z=DA(O.value,null);if(!z||z.id===x)return;let H=c.get(z.id);if(!H){if(c.size>=64)return;H={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:B,pose:null,candidate:null},c.set(z.id,H)}if(z.time<=H.lastTime)return;let ee=H.pose??H.candidate;if(ee&&z.time-ee.time>vh+B-ee.arrival){if(H.pose)return;H.candidate=null}H.lastTime=z.time,H.lastArrival=B;let se={...z,ready:z.ready??!0,protocol:z.protocol??(z.ready===void 0?3:4),role:v,channel:F,received:o(),arrival:B},me=H.candidate;if(!H.pose&&(!me||me.channel!==F||me.map!==se.map||B-me.arrival>vh)&&(z.ready!==void 0||Math.abs(z.time-se.received)>25e3)){H.candidate=se;return}if(H.candidate=null,!H.pose&&me?.objects&&me.ready&&me.map===se.map&&!se.objects&&(se.objects=me.objects),H.pose=se,h==="vr"&&v==="vr"&&se.ready)if(X===1/0||me?.arrival<X||z.id<x)h="player",m=To[x%To.length],U("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=O.value.length,t(se),ce(),!(!P||!se.ready||se.map!==T)){B-H.shotWindow>=1e3&&(H.shotWindow=B,H.shotCount=0);for(let{seq:Ce,position:I,quaternion:_}of se.shots??[])Ce<=H.lastShot||(H.lastShot=Ce,!(H.shotCount>=14||(I.x-se.x)**2+(I.y-se.y)**2+(I.z-se.z)**2>7**2)&&(H.shotCount++,r({position:I,quaternion:_},se)));if(!(h!=="vr"||v!=="player"||z.actionTarget!==x))for(let{seq:Ce,action:I}of z.actions)Ce<=H.lastAction||(H.lastAction=Ce,i(I,se))}}function xe(){let v;try{v=new s(gA)}catch{return!1}return d=v,b=a(),g=-1/0,X=1/0,U("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),v.onopen=()=>{d===v&&(w=a(),v.send(JSON.stringify({method:"handshake",project_id:xA+p,user:"player"+x})+`
`),U("open",ie()))},v.onmessage=F=>{if(d!==v||typeof F.data!="string"||F.data.length>105e4)return;let O=a();ne(O);for(let B of F.data.split(`
`)){if(!B.trim())continue;let z;try{z=JSON.parse(B)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",B.slice(0,200));continue}let H=yA.get(z?.name);z?.method!=="set"||!H||re(H,z.name,z,O)}},v.onerror=()=>{d===v&&U("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},v.onclose=F=>{if(d!==v)return;let O=F.code;if(Ae(),_e(!1),E=[],W=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(O)){Pe(O);return}h=null,p="";let B={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[O];U("error","TurboWarp d\xE9connect\xE9 ("+O+")"+(B?" \xB7 "+B:F.reason?" \xB7 "+F.reason.slice(0,100):""))},!0}function Ee(v,F){let O=hl(v);return!/^[A-Z0-9]{5,12}$/.test(O)||!["vr","pc","player"].includes(F)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===F&&p===O?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(_e(!0),x=Math.floor(1e6+l()*8999999),h=F,p=O,m=Mh[h]??To[x%To.length],N=350,h==="vr"&&ul.includes(p)&&(m=x%2===0?Mh.vr:xx,N=750+x%150),S=V=0,W=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},A=0,C=k=1/0,xe()?!0:(h=null,p="",U("error","WebSocket indisponible."),!1))}function Me(v,F){let O=v.hand||v.type==="world"?5:4;if(h!=="player"||D!=="open"||!y?.ready||y.protocol<O||y.map!==F||!yp(v)||S>=99999999)return!1;let B=a();return E=E.filter(z=>z.expires>=B&&z.target===y.id&&z.map===F),E.length>=8?!1:(E.push({action:{...v},seq:++S,expires:B+1800,target:y.id,map:F}),!0)}function Oe(v,F,O){if(!h||h==="pc"||D!=="open"||V>=99999999)return;let B=Co(v),z=Ro(F);if(!B||!z)return;let H=a();W=W.filter(ee=>ee.expires>=H&&ee.map===O).slice(-(vx-1)),W.push({record:Vt(++V,8)+B+z,expires:H+MA,map:O})}function Y(v){let F=a();P=!!v&&v.ready!==!1,T=v?.map??-1,ne(F),h&&!d&&F>=C&&(C=1/0,xe()||Pe(1006)),d&&d.readyState===0&&F-b>1e4&&(Ae(),Pe(1006)),J.bufferedBytes=d?.bufferedAmount??0;let O=h==="pc"?_A:vA;if(!v||!h||d?.readyState!==1||J.bufferedBytes>4096||F-w<(h==="vr"?N:350)||F-g<O)return!1;if(h==="player"){let me=te().filter(I=>I.role==="player"),Ce=me.find(I=>I.channel===m);if(Ce?k=Math.min(F,k):k=1/0,Ce&&(Ce.id<x||F-k>=800)){let I=To.find(_=>!me.some(L=>L.channel===_));if(!I)return D!=="capacity"&&U("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=I,k=1/0}}(A||D==="capacity")&&(A=0,U("open",ie()));let B=Math.round(f+F-u),z=bA({...v,time:B,id:x});if(!z)return!1;E=E.filter(me=>me.expires>=F&&me.target===y?.id&&me.map===v.map),W=W.filter(me=>me.expires>=F&&me.map===v.map);let H=J.bufferedBytes===0?v.objectFeed?.(F):null,ee=typeof v.avatar=="function"?v.avatar():v.avatar,se=IA(z,ee,H,{version:5,ready:v.ready!==!1,actions:E,actionTarget:E[0]?.target??0,shots:W,score:v.score});return g=F,h==="vr"&&(X=Math.min(X,F)),d.send(JSON.stringify({method:"set",name:m,value:se})+`
`),J.sent++,J.bytesSent+=se.length,!0}return{join:Ee,leave:Ie,tick:Y,sendAction:Me,queueShot:Oe,get stats(){return{...J}},get role(){return h},get code(){return p},get state(){return D},get remote(){return y},get peers(){return te()}}}var wA=15,TA=12,Mx=44,_h=15,gp=35,Co=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Vt(e*100+2e4,5)).join(""):null;function Ao(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Ro=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Vt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Eo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function AA(n){let e=Co(n.mesh.position),t=Ro(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>xp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Vt(i,5)+Vt(r,2)+s+o+Vt(a,8)+e+t}function EA(n){return Vt(n,5)+"99"+"0".repeat(Mx-7)}function CA(n){if(!n)return null;let e=Ro(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Co(l.position),u=l&&Ro(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(wA+TA)}),r=Vt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Vt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+Vt(n.color??0,2)+a}function yp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=xp?"10"+Vt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Vt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Vt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Vt(i,5):null}function RA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),yp(s)===n?s:null}function PA(n){let e=Co(n?.position),t=Ro(n?.quaternion),i=Co(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function IA(n,e,t,i=null){let r=CA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Vt(p,8)+yp(x)).join(""),a=i.version===5,l=a&&Co(e?.gun?.position),c=a&&Ro(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",f=i.shots??[],d=a?u+Vt(f.length,1)+f.map(p=>p.record).join("")+Vt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+PA(r?e.tool:null)+Vt(i.actionTarget??0,7)+Vt(o.length/_h,1)+o+d;return h.length+1+s.length>yx&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function mx(n,e,t){let i=Eo(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:Ao(n,o+1),quaternion:Eo(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function DA(n,e){if(typeof n!="string"||n.length>yx||!/^[0-9]+$/.test(n))return null;let t=SA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:Mx,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=mx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),f=Ao(n,a+2),d=Eo(n,a+17),h=Ao(n,a+29);if(u<1||u>7||!f||!d||!h)return null;t.avatar.tool={mode:u,position:f,quaternion:d,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*_h+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=_h){let u=Number(n.slice(a,a+8)),f=RA(n.slice(a+8,a+_h));if(!f||u<=c)return null;t.actions.push({seq:u,action:f}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let d=Ao(n,a+1),h=Eo(n,a+16);if(!d||!h)return null;t.avatar.gun={position:d,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>vx||n.length<a+u*gp+7)return null;t.shots=[];let f=0;for(let d=a+u*gp;a<d;a+=gp){let h=Number(n.slice(a,a+8)),p=Ao(n,a+8),x=Eo(n,a+23);if(h<=f||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),f=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=mx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),f=Number(n.slice(l+5,c));if(!u)return null;if(f===(i?9:99)){a.push({id:u,removed:!0});continue}let d=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Ao(n,c+10),m=Eo(n,c+25);if(f>xp||d>7||h>4||p>16777215||!x||!m)return null;a.push({id:u,type:f,flags:d,style:h,color:p,position:x,rotation:m})}t.objects={full:o==="2",records:a}}return t}var LA=.45,gx=2.5;function bx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let f of o){if(!f.mesh.visible)continue;let d=f.netId,h=n.get(d),p=f.radius<=LA&&!f.frozen&&(f.velocity.lengthSq()>=gx**2||f.angular.lengthSq()*f.radius**2>=gx**2);if(!l&&!p&&!h?.fast)continue;let x=AA(f);if(!x)continue;c?.add(d);let m=x!==h?.record;m&&e.set(d,{record:x,until:s+420}),(a||!l&&m)&&u.push(x),h?(h.record=x,h.fast=p):n.set(d,{record:x,fast:p})}if(l){for(let f of n.keys())c.has(f)||(e.set(f,{record:EA(f),until:s+420}),n.delete(f));for(let[f,d]of e)d.until<s?e.delete(f):a||u.push(d.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Sx=zt.DEFAULT_UP,UA=15,wx=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function FA(){let n=new Tt,e=new Ve(new Ft(.155,1),new gt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Ve(new hi(.23,.018,5,20),new _t({color:"#84e6ff",transparent:!0,opacity:.85,blending:Qn,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Ve(new Xi(.11,.28,9,1,!0),new _t({color:"#55c7ff",transparent:!0,opacity:.45,side:an,blending:Qn,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function NA(){let n=new Tt,e=new Tt,t=fh(0),i=t.createHead(),r=["left","right"].map(g=>({skin:gh(g,t.hand,{openWrist:!0}),position:new M,quaternion:new He,pressure:[0,0,0],tracked:!1})),s=xh(t.fur,r.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=yh(e),l=null,c=new M,u=[null,null],f=new M,d=new He,h=new He,p=new He,x={mode:0,position:new M,quaternion:new He,end:new M};function m(g,y,w){let b=g.avatar,C=1-Math.exp(-w*32);if(!b){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}d.copy(n.quaternion).invert(),p.copy(b.head).premultiply(d),i.quaternion.slerp(p,C),f.set(0,0,-1).applyQuaternion(i.quaternion);let A=Fe.smoothstep(-f.y,.28,.94),D=Math.max(.38,b.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*D,.24*A),o.rotation.x=-.5*A,h.copy(o.quaternion).invert(),t.setColor(b.color??0);for(let S=0;S<r.length;S++){let E=r[S],k=b.hands[S];if(u[S]=k?E:null,!k){E.tracked=!1;continue}c.copy(k.position).sub(g).applyQuaternion(d).sub(o.position).applyQuaternion(h),p.copy(k.quaternion).premultiply(d).premultiply(h),E.tracked?(E.position.lerp(c,C),E.quaternion.slerp(p,C)):(E.position.copy(c),E.quaternion.copy(p)),E.tracked=!0;for(let N=0;N<3;N++)E.pressure[N]+=((k.pressure?.[N]??0)-E.pressure[N])*C;E.skin.pose(E.pressure,!1)}if(s.pose(u,b.armSpan*.5,.97,D,!0),b.gun){l||(l=mp(),l.visible=!1,e.add(l));let S=l.visible?C:1;l.position.lerp(b.gun.position,S),l.quaternion.slerp(p.copy(b.gun.quaternion),S),l.visible=!0}else l&&(l.visible=!1);let P=b.tool;if(!P){a.hide(),x.mode=0;return}let T=x.mode?C:1;x.mode=P.mode,x.position.lerp(P.position,T),x.quaternion.slerp(p.copy(P.quaternion),T),x.end.lerp(P.end,T),a.update(x)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of r)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Tx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Ax({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=bx(),f=0,d=-1,h=-1,p="",x=0;function m(){let v=e();return v!==p&&(p=v,x=ds(v)),x}function g(v){return!!v?.ready&&v.map===m()}function y(v){let F=c.get(v);F&&(n.remove(F.mesh),F.mesh.material?.dispose(),c.delete(v))}function w(){for(let v of c.keys())y(v);f=0,d=-1,h!==-1&&(h=-1,r?.(null))}function b(v,F){if(v.color===F.color&&v.style===F.style)return;v.color=F.color,v.style=F.style;let O=v.mesh.material;if(O?.color){if(O.color.setHex(F.color),F.style===0){Object.assign(O,v.baseMaterial),v.baseEmissive&&O.emissive.copy(v.baseEmissive),O.needsUpdate=!0;return}O.roughness=[.44,.94,.12,.16,.4][F.style],O.metalness=[.1,0,.87,.12,0][F.style],O.opacity=F.style===3?.4:1,O.transparent=F.style===3,O.depthWrite=!O.transparent,O.emissive?.copy(O.color),O.emissiveIntensity=F.style===4?1.65:0,O.needsUpdate=!0}}function C(v){if(!g(v)){w();return}if((f!==v.id||d!==v.map)&&(w(),f=v.id,d=v.map),v.avatar&&v.avatar.light!==h&&(h=v.avatar.light,r?.(h)),!v.objects)return;let F=v.objects.full?new Set:null;for(let O of v.objects.records){if(O.removed){y(O.id);continue}F?.add(O.id);let B=c.get(O.id);if(B&&B.type!==O.type&&(y(O.id),B=null),!B){let H=i?.(O.type);if(!H)continue;let{roughness:ee,metalness:se,transparent:me,depthWrite:Ce,opacity:I,emissiveIntensity:_}=H.material??{},L={roughness:ee,metalness:se,transparent:me,depthWrite:Ce,opacity:I,emissiveIntensity:_};H.userData.netId=O.id,H.userData.netType=O.type,B={mesh:H,baseMaterial:L,baseEmissive:H.material?.emissive?.clone(),type:O.type,target:new M().copy(O.position),quaternion:new He().copy(O.rotation),velocity:new M,time:v.time},H.position.copy(B.target),H.quaternion.copy(B.quaternion),c.set(O.id,B),n.add(H)}let z=(v.time-B.time)/1e3;z>.06&&z<.65&&!(O.flags&6)?B.velocity.copy(O.position).sub(B.target).multiplyScalar(1/z).clampLength(0,23):B.velocity.set(0,0,0),B.target.copy(O.position),B.quaternion.copy(O.rotation),B.time=v.time,B.flags=O.flags,B.frequent=z>.06&&z<.16,B.received=v.arrival,B.mesh.userData.netFlags=O.flags,B.mesh.userData.held=!!(O.flags&1),b(B,O)}if(F)for(let O of c.keys())F.has(O)||y(O)}let A=new M;function D(v,F,O){let B=1-Math.exp(-v*22),z=1-Math.exp(-v*32);for(let H of c.values()){if(H.mesh.visible=F,!F)continue;let ee=H.frequent?z:B,se=H.flags&6?0:Math.min(H.frequent?.1:.12,Math.max(0,(O-H.received)/1e3));A.copy(H.target).addScaledVector(H.velocity,se),H.mesh.position.distanceToSquared(A)>16||H.flags&6&&H.mesh.position.distanceToSquared(H.target)<1e-4?H.mesh.position.copy(A):H.mesh.position.lerp(A,ee),H.mesh.quaternion.slerp(H.quaternion,ee),H.flags&6&&H.mesh.quaternion.angleTo(H.quaternion)<.008&&H.mesh.quaternion.copy(H.quaternion),H.mesh.updateMatrixWorld(!0)}}let P=v=>document.querySelector(v),T=P("#cloud-status"),S=P("#cloud-room"),E=P("#cloud-camera"),k=-1/0,N=0,X="Hors ligne",V=0;function W(v){N=v,E.textContent="Cam\xE9ra : "+wx[v]}function J(){W((N+1)%wx.length)}E.onclick=J;let U=_x({onStatus(v){X=v,T.textContent=v,a?.()},onPose(v){U.role!=="vr"&&C(v)},onPeer(v,F){if(!v){let z=l.get(F.id);z?.art&&(Tx(z.art.model),Tx(z.art.toolRoot),z.art.dispose?.()),l.delete(F.id);return}let O=l.get(v.id);O||(O={art:null,motion:new M,handMotion:[new M,new M]},l.set(v.id,O));let B=O.pose;O.motion.set(0,0,0);for(let z of O.handMotion)z.set(0,0,0);if(B&&B.map===v.map){let z=(v.time-B.time)/1e3;if(z>=.055&&z<=.65){O.motion.set(v.x-B.x,v.y-B.y,v.z-B.z).multiplyScalar(1/z),O.motion.lengthSq()>=18**2&&O.motion.set(0,0,0);for(let H=0;H<2;H++){let ee=B.avatar?.hands[H],se=v.avatar?.hands[H];ee&&se&&O.handMotion[H].copy(se.position).sub(ee.position).multiplyScalar(1/z).clampLength(0,23)}}}O.pose=v},onAction:s,onShot:o}),ie=hl(new URLSearchParams(location.search).get("room")??"");function te(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),v=>(v%36).toString(36)).join("").toUpperCase()}S.value=/^[A-Z0-9]{5,12}$/.test(ie)?ie:te();function ce(v,F=S.value){let O=hl(F);if(!(U.role===v&&U.code===O)){if(!/^[A-Z0-9]{5,12}$/.test(O)){T.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}U.role&&U.leave(),U.join(O,v)&&(S.value=O,v!=="vr"&&P("#game").focus(),u.reset(),W(0),t(ds(O)),p="")}}P("#cloud-vr").onclick=()=>ce("vr"),P("#cloud-new").onclick=()=>ce("vr",te());for(let[v,F]of ul.entries())P(`#public-join-${v}`).onclick=()=>ce("player",F),P(`#public-host-${v}`).onclick=()=>ce("vr",F);P("#cloud-pc").onclick=()=>ce("pc");let _e=P("#cloud-player");_e&&(_e.onclick=()=>ce("player")),P("#cloud-leave").onclick=()=>{V=0,U.leave()},P("#cloud-copy").onclick=async()=>{let v=new URL(location.href);v.searchParams.set("room",U.code||hl(S.value));try{await navigator.clipboard.writeText(v.href),T.textContent="Lien copi\xE9."}catch{T.textContent=v.href}V=performance.now()+2500},addEventListener("pagehide",()=>U.leave());let Ae=new M,Ie=new M,Pe=new M,ne=new M,re=0;function xe({dt:v,position:F,yaw:O,pitch:B,camera:z,rig:H,keys:ee,flat:se}){let me=se?.movement,Ce=Number(ee.has("KeyD"))-Number(ee.has("KeyQ")||ee.has("KeyA"))+(me?.x??0),I=Number(ee.has("KeyS"))-Number(ee.has("KeyZ")||ee.has("KeyW"))+(me?.z??0);se?.consumeJump?.()&&(re=.26),re=Math.max(0,re-v);let _=Number(ee.has("Space")||re>0)-Number(ee.has("ShiftLeft")||ee.has("ShiftRight")),L=ee.has("ControlLeft")||ee.has("ControlRight")?11:3.2;ne.set(Ce,_,I).clampLength(0,1).applyAxisAngle(Sx,O),H.position.addScaledVector(ne,v*L).clampScalar(-175,175),H.rotation.set(0,O,0),z.position.set(0,0,0),z.rotation.set(B,0,0,"YXZ"),H.updateMatrixWorld(!0),F.copy(H.position)}function Ee(v,F,O,B){for(let z of l.values()){let H=z.pose;if(!(v&&g(H))){z.art&&(z.art.model.visible=!1,z.art.toolRoot&&(z.art.toolRoot.visible=!1));continue}z.art||(z.art=H.role==="pc"?FA():NA(),n.add(z.art.model),z.art.model.visible=!1,z.art.toolRoot&&n.add(z.art.toolRoot));let{model:se,toolRoot:me}=z.art,Ce=Math.min(.12,Math.max(0,(B-H.arrival)/1e3+.025));Ae.copy(H).addScaledVector(z.motion,Ce),!se.visible||se.position.distanceToSquared(Ae)>64?se.position.copy(Ae):se.position.lerp(Ae,1-Math.exp(-O*34)),se.rotation.y=H.yaw,se.visible=!0,me&&(me.visible=!0),z.art.draw(H,F,O)}}function Me(v,F){if(F<V)return;let O=U.remote,B=X;if(U.state==="open"){let z="Salon "+U.code+" \xB7 ",H=U.peers.filter(ee=>ee.ready);if(!v)B=z+"quitte la session VR pour utiliser le mode spectateur";else if(U.role!=="vr"&&O&&O.map!==m())B=z+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(U.role!=="vr"&&O&&!O.ready)B=z+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(U.role==="player"&&O&&O.protocol<5)B=z+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(U.role!=="vr"&&g(O))B=z+"h\xF4te connect\xE9";else if(U.role==="vr"){let ee=H.filter(g),se=ee.filter(Ce=>Ce.role==="player").length,me=ee.some(Ce=>Ce.role==="pc");B=z+"tu h\xE9berges \xB7 "+(se+1)+" joueur"+(se?"s":""),me&&(B+=" \xB7 spectateur connect\xE9"),!se&&H.some(Ce=>!g(Ce))&&(B+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}T.textContent!==B&&(T.textContent=B,a?.())}function Oe(v){let{inVR:F,time:O,dt:B,position:z,yaw:H,camera:ee,rig:se,keys:me,avatar:Ce,bodies:I}=v;if(!U.role){w();return}let _=U.role!=="pc"||!F,L=performance.now(),j=m(),K=U.role!=="vr"?U.remote:null,Z=_&&g(K);if(!Z&&d!==-1&&w(),D(B,Z,L),Ee(_,O,B,L),U.role==="pc"&&!F){(v.actions??me).delete("KeyC")&&J();let he=N===3&&Z?[...c.values()].find(pe=>pe.type===UA)?.mesh:null,ue=Z?l.get(K.id)?.art?.model:null;he?(Pe.set(0,0,-.23).applyQuaternion(he.quaternion),se.position.copy(he.position).add(Pe),se.rotation.set(0,0,0),ee.position.set(0,0,0),ee.quaternion.copy(he.quaternion),se.updateMatrixWorld(!0),z.copy(se.position)):ue&&(N===1||N===2)?(Pe.set(0,.72,N===1?-2.7:2.7).applyAxisAngle(Sx,ue.rotation.y),Ie.copy(ue.position).add(Pe),se.position.lerp(Ie,1-Math.exp(-B*11)),ee.position.set(0,0,0),se.updateMatrixWorld(!0),ee.lookAt(ue.position),ee.updateWorldMatrix(!0,!1),z.copy(se.position)):xe(v)}U.tick({x:z.x,y:z.y,z:z.z,yaw:H,map:j,ready:_,avatar:_&&U.role!=="pc"?Ce:null,objectFeed:_&&U.role==="vr"&&I?he=>u.capture(he,I):null}),L-k>=150&&(k=L,Me(_,L))}function Y(v){let F=l.get(v)?.pose;return g(F)?F:null}return{update:Oe,getPeer:Y,connect:ce,leave:()=>U.leave(),get caption(){return T.textContent},handMotion(v,F){return l.get(v)?.handMotion[F]},sendAction(v){return U.sendAction(v,m())},sendShot(v,F){U.queueShot(v,F,m())},get stats(){return U.stats},get role(){return U.role},get connected(){return g(U.remote)},get remoteSpectator(){return U.peers.find(v=>v.role==="pc"&&g(v))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(v){for(let F of c.values())F.mesh.visible&&v(F.mesh)}}}function bh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let f=n[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,f=[];for(let d=0;d<n.length;++d){let h=n[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(f)}for(let u in s){let f=Ex(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][d]);let p=Ex(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ex(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ht(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let d=0,h=u.count;d<h;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+f,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var wh=0,BA=1,OA=new M,Cx=new Ka,vp=new Cn,Rx=new M,Sh=new Rn,Th=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ah,this.unassigned=new Ah,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new _p(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new M;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let f=u!==0?-c/u:0;if(!(f<=0)&&(u>0?s=Math.min(f,s):r=Math.max(f,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,OA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===wh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let d=0;d<3;d++){let h=r[d].point.getComponent(d)-i[d].point.getComponent(d);h>s&&(s=h,o=d)}let a=i[o],l=r[o],c,u;s=0,Cx.set(a.point,l.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l){Cx.closestPointToPoint(p.point,!0,Rx);let x=Rx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,vp.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,h=this.vertices.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c){let x=Math.abs(vp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let f=[];if(vp.distanceToPoint(u.point)<0){f.push(fi.create(a,l,c),fi.create(u,l,a),fi.create(u,c,l),fi.create(u,a,c));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge(h)),f[d+1].getEdge(1).setTwin(f[h+1].getEdge(0))}}else{f.push(fi.create(a,c,l),fi.create(u,a,l),fi.create(u,l,c),fi.create(u,c,a));for(let d=0;d<3;d++){let h=(d+1)%3;f[d+1].getEdge(2).setTwin(f[0].getEdge((3-d)%3)),f[d+1].getEdge(0).setTwin(f[h+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(f[d]);for(let d=0,h=e.length;d<h;d++){let p=e[d];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>s&&(s=g,x=this.faces[m])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===wh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=BA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===wh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=fi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},fi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=wh,this.edge=null}static create(e,t,i){let r=new n,s=new dl(e,r),o=new dl(t,r),a=new dl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Sh.set(e.point,t.point,i.point),Sh.getNormal(this.normal),Sh.getMidpoint(this.midpoint),this.area=Sh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},dl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},_p=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Ah=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Ki=class extends $e{constructor(e=[]){super();let t=[],i=[],s=new Th().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Be(t,3)),this.setAttribute("normal",new Be(i,3))}};var Px=48,zA=3,VA=128,Ix=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),kA=(n,e,t)=>Math.max(e,Math.min(t,n)),GA=()=>structuredClone(Ix.shield),fl=(n,e,t,i)=>Number.isFinite(n)?kA(n,t,i):e;function Ch(n){let e=n?.mode==="lathe"?Ix.bottle:GA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Px?n.points.map(o=>[fl(o?.[0],0,-1.5,1.5),fl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:fl(n?.depth,e.depth,.025,1.5),bevel:fl(n?.bevel,e.bevel,0,.15),segments:Math.round(fl(n?.segments,32,zA,VA))}}function Dx(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Eh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function HA(n,e,t,i){let r=Eh(n,e,t),s=Eh(n,e,i),o=Eh(t,i,n),a=Eh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function WA(n){let e=Ch(n),t=e.mode==="lathe"?e.points:Dx(e);if(t.length<3||t.length>Px*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&HA(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Lx(n){let e=Ch(n),t=WA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([d,h])=>new fe(Math.max(0,d),h));r[0].y>r.at(-1).y&&r.reverse(),r[0].x>0&&r.unshift(new fe(0,r[0].y)),r.at(-1).x>0&&r.push(new fe(0,r.at(-1).y)),i=new qa(r,e.segments);let s=[],o=i.attributes.position,a=new M,l=new M,c=new M,u=new M,f=i.index.array;for(let d=0;d<f.length;d+=3)a.fromBufferAttribute(o,f[d]),l.fromBufferAttribute(o,f[d+1]),c.fromBufferAttribute(o,f[d+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&s.push(f[d],f[d+1],f[d+2]);i.setIndex(s)}else{let r=Dx(e),s=new ci;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Yi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ht(new Float32Array(r*2),2))}return i}var Un=Math.PI*2,Rh=.84,er=128;function Er(n){let e=new Uint8Array(er*er*4);for(let i=0;i<er;i++)for(let r=0;r<er;r++){let s=(r+.5)/er,o=(i+.5)/er,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Rh,1),Math.min(o/Rh,1),r,i),l=(r+i*er)*4;for(let c=0;c<3;c++)e[l+c]=Fe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new _i(e,er,er);return t.colorSpace=pt,t.generateMipmaps=!0,t.minFilter=Dn,t.magFilter=un,t.needsUpdate=!0,t}function fs(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new De(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Rh,s.getY(l)*Rh):s.setXY(l,.95,.95);return i.setAttribute("color",new ht(a,3)),i}function Cr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:bh(r),material:new gt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Ux(n,e,t){let i=n/2,r=e/2,s=new ci;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Tr(n,e,t,i,r){return new Yi(Ux(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ar(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[f,d]=n[u];for(let h=0;h<=e;h++){let p=Un*h/e,x=t(f,d,p,u);if(i.push(x*Math.sin(p),d,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;f>0&&s.push(m,m+1,g),n[u+1][0]>0&&s.push(m+1,g+1,g)}}let o=new $e;o.setAttribute("position",new Be(i,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let f=u*(e+1),d=f+e;l.fromBufferAttribute(a,f).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(f,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function pl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new M(0,r,0));continue}for(let s=0;s<e;s++){let o=Un*s/e;t.push(new M(i*Math.sin(o),r,i*Math.cos(o)))}}return new Ki(t)}function qA(){let t=new Xa(Ux(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Fe.clamp(i.getX(l)/.098+.5,0,1),u=Fe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Er((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),f=.5+.5*Math.sin((c*1.5+l*.6)*Un),d=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:d||p?[222,239,247]:[15+58*u+27*f,27+98*u+54*f,59+108*u+47*f]}),s=[it(Tr(.106,.207,.013,.011,.0019),8425890),it(Tr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Tr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Tr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new Zt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new on(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new on(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ki([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return Cr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function XA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Ar(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),f=.035*Math.cos(c),d=Math.max(...e.map(h=>Math.exp(-(((l-h+f)/.014)**2))));return a*(1-.14*u**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Er((a,l,c,u)=>{let f=Un*a,d=(l*2-1)*.275,h=Math.max(0,-Math.sin(f)),p=Math.max(...e.map(y=>Math.exp(-(((d-y+.035*Math.cos(f))/.009)**2)))),x=h**3*p,m=fs(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*x+g,76+24*h+70*x+g,24+11*h+52*x+g*.8]}),o=pl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Cr("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function YA(){let n=Er((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,f=(s*28+u)%1<.17,d=Math.abs(o-.5)<.013,p=46+12*fs(a,l)-(c&&(f||d)?35:0);return[p*.94,p,p*1.04]}),e=Ar([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ar([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Zt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Zt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Un*s/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=pl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Cr("wheel","Roue",1.8,r,i,n,.64,.23)}function ZA(){let n=Er((s,o,a,l)=>{let c=fs(a,l),u=o>.26&&o<.34||o>.455&&o<.475,f=c>.98?-44:19*(c-.5)+5*Math.cos(Un*s*4);return u?[46+f,94+f,117+f]:[240+f,223+f,194+f]}),e=Ar([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new hi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Un*l/5;return new M(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let r=new Ki(i);return Cr("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function jA(){let n=Ar([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Er((r,s,o,a)=>{let l=9*fs(o,a),c=11*Math.cos(r*Un*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let f=40+.6*c+8*Math.cos(s*Un*48+r*Un*13)+l;return[f,f*1.08,f*1.13]}let u=63+c+l+14*Math.cos(r*Un*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new ho(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new on(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new on(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Zt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new on(.008,12).translate(0,.035,.0336),15633202)],i=pl([[.033,-.143],[.054,.133]],6);return Cr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function JA(){let n=Ar([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Er((s,o,a,l)=>{let c=10*fs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,f=Math.floor((u-.098)*64),d=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Un*s*2));if(e[d]?.[f]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Un*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new on(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new ho(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new on(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=pl([[.069,-.112],[.069,.109]],6);return Cr("soda","Canette de soda",.35,r,i,t,.42,.27)}function QA(){let n=Ar([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Er((r,s,o,a)=>{let l=15*fs(o,a),c=8*Math.cos(r*Un*4);if(s>.321&&s<.435||s>.536&&s<.635){let f=o%4===0||(o+2*a)%7===0?14:0;return[240+l-f,236+l-f,216+l-f]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Tr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new on(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=pl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Cr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function $A(){let n=Er((r,s,o,a)=>{let l=8*fs(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let d=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return d||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ar([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Tr(.138,.22,.061,.016,.004),14788675),it(Tr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new en(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Zt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new on(.004,8).translate(.04,.066,.0397),15817792),it(new on(.004,8).translate(-.04,.066,.0397),7903100),it(Tr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new M(r,l,o),new M(s,l,o),new M(s,l,a),new M(r,l,a)]);return Cr("radio","Talkie-walkie",.43,new Ki(i),t,n,.61,.08)}function Fx(){return[qA(),XA(),YA(),ZA(),jA(),JA(),QA(),$A()]}var Fn=new He,kt=new M,Bh=new M,KA=new ot,Nx=new WeakMap;function kh(n){if(n.heightfield||n.objectBody)return null;let e=Nx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=KA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Nx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function jx(n,e,t){let i=kh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Oh(n,e,t,i){if(t.heightfield)return hE(n,e,t,i);if(t.objectBody)return sy(n,e,t.objectBody,i);if(!jx(n,e,t))return 0;Fn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Fn);let r=t.half;Bh.copy(kt).clamp(t.min,r),i.subVectors(kt,Bh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(kt.x),a=r.y-Math.abs(kt.y),l=r.z-Math.abs(kt.z);return o<=a&&o<=l?i.set(Math.sign(kt.x)||1,0,0):a<=l?i.set(0,Math.sign(kt.y)||1,0):i.set(0,0,Math.sign(kt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,tr=new M;function Lp(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let f=Oh(n,e,u,rt);if(!f||(n.addScaledVector(rt,f+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let d=i.dot(rt);d<0&&i.addScaledVector(rt,-d*(Math.abs(d)<.55?1:1+r)),tr.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(tr,-Math.min(.95,s*u.friction*o))}return l}var Mp=new M,Lo=[];function Ml(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Lo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,f=Math.min(n.z,e.z)-t,d=Math.max(n.z,e.z)+t;for(let h of i){let p=kh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&d>=p.minZ&&f<=p.maxZ)&&Lo.push(h)}for(let h=1;h<=o;h++){Mp.copy(n).lerp(e,h/o);for(let p of Lo){let x=Oh(Mp,t,p,rt);if(x)return r.copy(Mp).addScaledVector(rt,x+.001),s.copy(rt),p}}return null}var xl=new M,_l=new M,Uo=new M,Jx=new Rn,yl=new M;function pi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),m=x.toArray().map(g=>g.toFixed(5)).join(",");s.has(m)||(s.add(m),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=b=>new M().fromBufferAttribute(t,n.index?n.index.getX(b):b),m=x(p),g=x(p+1),y=x(p+2),w=new Rn(m,g,y).getNormal(new M);w.lengthSq()>.1&&r.push({a:m,b:g,c:y,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new Qt().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),f=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let m of p)m.lengthSq()>.5&&!x.some(g=>Math.abs(g.dot(m))>.9999)&&x.push(m);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:f,thickness:d,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Gh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Fn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Fn),i.faces.every(s=>s.n.dot(xl.subVectors(kt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)Jx.set(s,o,a).closestPointToPoint(kt,yl),r=Math.min(r,kt.distanceToSquared(yl));return Math.sqrt(r)}function eE(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Oh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Fn.copy(e.quaternion).invert(),kt.copy(r.position).sub(e.position).applyQuaternion(Fn),Bh.copy(kt).clamp(e.min,e.half),kt.distanceToSquared(Bh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){xl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Oh(xl,.007,e,Uo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(xl),t.copy(Uo)):Math.abs(c-o)<.003&&Uo.dot(t)>.98&&(i.lerp(xl,1/++a),o=Math.max(o,c)))}return o}var Ph=new M,tE=new M,Ih=new M,nE=new M,Bx=new He,Ox=new He,zx=new M,bp={min:0,max:0},Sp={min:0,max:0};function Vx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}zx.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(zx);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function mi(n){return pi(new et(n.x*2,n.y*2,n.z*2))}function Hh(n,e,t){let i=nE.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Bx.copy(n.mesh.quaternion).invert(),Ox.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);Vx(n.shape,o,Bx,bp),Vx(e.shape,o,Ox,Sp);let l=Sp.max-bp.min-a,c=bp.max-Sp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Ph.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Ph.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Ih.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Ph.copy(a).applyQuaternion(e.mesh.quaternion).cross(Ih)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(tE.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Fn.copy(a.mesh.quaternion).invert(),kt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Fn);for(let{a:c,b:u,c:f}of a.shape.faces){Jx.set(c,u,f).closestPointToPoint(kt,yl);let d=kt.distanceToSquared(yl);d<l&&(l=d,Ih.copy(yl))}if(!s(Ph.subVectors(kt,Ih).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var iE=new M;function rE(n,e,t){Fn.copy(e.quaternion).invert(),kt.copy(n.mesh.position).sub(e.position).applyQuaternion(Fn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(kt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=kt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Pp(n,iE.copy(t).negate())-r,a=s+Pp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Up(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return eE(n,e,t,i??_l);let r=rE(n,e,t)??Hh(n,e,t);return r>0&&i&&Kx(n,e,t,i),r}var Rp=pi(new ui(1,0).scale(...mh)),Dh={mesh:{position:new M,quaternion:new He},shape:Rp,radius:Rp.radius,precise:!0};function Qx(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Rp.radius;Lo.length=0;for(let c of i){let u=kh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Lo.push(c)}Dh.mesh.quaternion.copy(t);let l=Dh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Lo){let f=u.objectBody;if(f&&(f.owner||l.distanceToSquared(f.mesh.position)>(a+f.radius)**2))continue;let d=f?Hh(Dh,f,rt):Up(Dh,u,rt);if(d>0)return r.copy(l).addScaledVector(rt,d+5e-4),s.copy(rt),u}}return null}function bl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!jx(n.mesh.position,n.radius,r))continue;let s=Up(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var wp=new M,ml=new M,Lh=new M,Tp=new He,Rr=new He,kx=new He;function Gx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function $x(n,e,t,i,r){let{mesh:s,shape:o}=n;wp.copy(s.position),Tp.copy(s.quaternion),ml.subVectors(e,wp);let a=Gx(Tp,t,Rr),l=ml.length()+a*o.radius,c=iy(o),u=Math.max(1,Math.min(ny,Math.ceil(l/c))),f=l>0?Math.min(1,u*c/l):1,d=a*f/u;Lh.set(Rr.x,Rr.y,Rr.z).normalize(),kx.setFromAxisAngle(Lh,d),ml.multiplyScalar(f/u);for(let x=0;x<u;x++)s.position.add(ml),s.quaternion.premultiply(kx).normalize(),bl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(ml.subVectors(s.position,wp).divideScalar(h).clampLength(0,23),.52);let p=Gx(Tp,s.quaternion,Rr);Lh.set(Rr.x,Rr.y,Rr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Lh,.52)}function Pp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Fn.copy(n.mesh.quaternion).invert(),Uo.copy(e).applyQuaternion(Fn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Uo));return t}var Do=new M,zh=new M,sE=new M,Ap=new M,Po={},Io={};function Hx(n,e,t,i){let{mesh:r,shape:s}=n,o=Pp(n,sE.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Do),i.minV=i.maxV=r.position.dot(zh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Uo)<o-.0015)continue;Ap.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Ap.dot(Do),c=Ap.dot(zh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Kx(n,e,t,i){Math.abs(t.y)<.8?Do.set(-t.z,0,t.x).normalize():Do.set(t.y,-t.x,0).normalize(),zh.crossVectors(t,Do),Hx(n,t,-1,Po),Hx(e,t,1,Io);let r=(Math.max(Po.minU,Io.minU)+Math.min(Po.maxU,Io.maxU))*.5,s=(Math.max(Po.minV,Io.minV)+Math.min(Po.maxV,Io.maxV))*.5;i.copy(t).multiplyScalar((Po.plane+Io.plane)*.5).addScaledVector(Do,r).addScaledVector(zh,s)}var Wx=new M;function Vh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Wx.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Wx)}}function qx(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function ey(n){return!n.owner&&!n.frozen}var ps=new M,ms=new M,gl=new M,Xx=new M,Ip=new M,Dp=new M,oE=new M;function Uh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function ty(n,e,t,i){let{mesh:r,shape:s}=n.body;return Fn.copy(r.quaternion).invert(),Ip.crossVectors(e,t),i.copy(Ip).applyQuaternion(Fn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Fh(n,e,t){return n?.inverseMass?(ty(n,e,t,Dp),n.inverseMass+Ip.dot(Dp)):0}function Nh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(ty(n,e,t,Dp),i))}function Ep(n){return n.friction??n.spec?.friction??.78}function Yx(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Ep(s)*Ep(o)):Math.min(Ep(s),t.friction??.78);ps.subVectors(_l,s.mesh.position),o&&ms.subVectors(_l,o.mesh.position),Uh(n,ps,gl).sub(Uh(e,ms,Xx));let l=gl.dot(rt),c=!1;if(l<-1e-5){let f=l<-.8?Fe.clamp(r*(t?.bounce??1),0,.98):0,d=-l*(1+f)/(Fh(n,ps,rt)+Fh(e,ms,rt));Nh(n,ps,rt,d),Nh(e,ms,rt,-d),Uh(n,ps,gl).sub(Uh(e,ms,Xx)),tr.copy(gl).addScaledVector(rt,-gl.dot(rt));let h=tr.length();if(h>1e-5&&a>0){tr.divideScalar(h);let p=Math.min(d*a,h/(Fh(n,ps,tr)+Fh(e,ms,tr)));Nh(n,ps,tr,-p),Nh(e,ms,tr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let f=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/f),Vh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/f),Vh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function aE(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var ny=96,lE=5;function iy(n){return Math.max(.008,n.thickness*.35)}var vl={substeps:0,active:0,free:0,sleeping:0};function Zx(n,e,t,i){n.velocity.y-=t*e*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(oE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function cE(n,e,t){let i=new Qt().setFromCenterAndSize(n.mesh.position,new M),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*uE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function uE(n){return n.sweepGravity??1}function ry(n,e,t,i,r,s){if(Object.assign(vl,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:kh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,cE(h,t,i));let f=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=ey(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),m=l.some(({box:w,bounds:b})=>qx(x,w,b)),g=c.some(w=>w!==h&&w.collidable!==!1&&x.intersectsBox(u.get(w)));if(p&&!m&&!g){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let w=Math.min(h.angular.length(),30),b=h.velocity.length()+w*h.shape.radius+Math.abs(i*h.sweepGravity)*t;f=Math.max(f,Math.ceil(b*t/iy(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new Qt,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Vh(y),o.push(y)}for(let h of a)Zx(h,t,i,s);f=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(ny,f):1,Object.assign(vl,{substeps:f,active:o.length,free:a.length});let d=t/f;for(let h=0;h<f;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(Zx(x,d,i,s),Vh(p))}for(let p=0;p<lE;p++){let x=!1;for(let m of o)if(m.inverseMass)for(let{box:g,bounds:y}of l){if(!qx(m.bounds,g,y))continue;let w=Up(m.body,g,rt,_l);w>0&&(x=Yx(m,null,g,w,r)||x)}for(let m of o)m.sweepStart=m.bounds.min.x,m.sweepEnd=m.bounds.max.x;o.sort((m,g)=>m.sweepStart-g.sweepStart);for(let m=0;m<o.length;m++){let g=o[m];for(let y=m+1;y<o.length;y++){let w=o[y];if(w.sweepStart>g.sweepEnd)break;if(!g.inverseMass&&!w.inverseMass||g.body.sleeping&&w.body.sleeping&&g.groundY>.9&&w.groundY>.9||!g.bounds.intersectsBox(w.bounds))continue;let b=Hh(g.body,w.body,rt);b<=0||(Kx(g.body,w.body,rt,_l),x=Yx(g,w,null,b,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&aE(p,d)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,m=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=m?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):m||(p.sleeping=!1),p.sleeping&&vl.sleeping++}}function hE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Cp={mesh:{position:null,quaternion:new He},shape:{sphereRadius:0,normals:[],edges:[]}};function sy(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Cp.mesh.position=n,Cp.shape.sphereRadius=e,Hh(Cp,t,i))}function oy(n,e,t,i,r){let s=sy(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&ey(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Gt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),ay=Gt(-24,24,-51,7),ly=34521,No={x:0,y:0,z:3},Pr={x:.05,y:1.16,z:5.9},Fo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Gt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Gt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Gt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Gt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Gt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Gt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Gt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Gt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Gt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Gt(9,23,-48,-37),sign:[16,-38.2]}},dP=[Gt(-9,-6,-51,7),Gt(6,9,-51,7),Gt(-24,24,-8,-5),Gt(-24,24,-27,-23),Gt(9,23,-37,-34)],cy=[{name:"Glace",bounds:Fo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Fo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Gt(-9,9,-51,7)},{name:"Sol ouest",bounds:Gt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Gt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Gt(-24,-23,-51,7)},{name:"Sol est",bounds:Gt(9,23,-51,-48)},{name:"Sol est",bounds:Gt(9,23,-37,7)},{name:"Bordure est",bounds:Gt(23,24,-51,7)}],Sl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Bo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],uy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Wh={x:-19.4,y:.68,z:-3.25},hy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),dy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var dE=[0,1,2,3,4,5,7,8,9,10];function fy(n){uy.forEach(({x:e,z:t},i)=>n(dE[i],new M(e,.8,t)))}function qh(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ft(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new ns(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ft(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:pi(t,r),material:new gt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:mi(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Fx()){let r=pi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Fp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],wl=null,fE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function gs(n){return typeof n=="string"&&fE.has(n.replace(/^custom-model-game-/,""))}function Xh(n){let e=n?.parts;return gs(n?.id)||gs(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>gs(t?.assetId))}function py(){if(wl)return wl;let n=qh(),e=Fp;return wl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),wl.set("chrome-sphere",{geometry:new Ft(.54,2),material:new gt({color:"#c8e6ed",metalness:1,roughness:.16})}),wl}function Yh(n){return typeof n=="string"&&py().has(n)}function Np(n){return py().get(n)??null}var Op="gorilla-lab-models-v1",Ei=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),pE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,mE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),gy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),gE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),xE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,yE=/^#[a-f\d]{6}$/i;function my(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ir(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Fe.clamp(n[r],t,i):e)}var Bp=new Set(["box","sphere","capsule","convex"]);function vE(n){if(n?.mode==="box")return{mode:"box",center:Ir(n.center,0,-6,6),size:Ir(n.size,.5,.025,12)};let e=Math.round(Fe.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Bp.has(n.shape)?n.shape:"box",center:Ir(n.center,0,-6,6),size:Ir(n.size,.5,.025,12),rotation:Ir(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Bp.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function xs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Ei.models||JSON.stringify(n).length>Ei.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!Xh(i)).map(i=>{if(typeof i?.id!="string"||!xE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Ei.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:my(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...Yh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(gE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:vE(i?.hitbox),parts:i.parts.filter(r=>!gs(r?.assetId)).map((r,s)=>({name:my(r?.name,`Pi\xE8ce ${s+1}`),...Number.isInteger(r?.group)&&r.group>0&&r.group<=Ei.parts?{group:r.group}:{},shape:r?.shape==="asset"&&Yh(r?.assetId)?"asset":Object.hasOwn(mE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Yh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Ch(r?.profile)}:{},position:Ir(r?.position,0,-3,3),rotation:Ir(r?.rotation,0,-360,360),scale:Ir(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&yE.test(r.color)?r.color:"#51bdd2",surface:Object.hasOwn(gy,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Ei.textureBytes&&pE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function zp(n){try{let e=(n??globalThis.localStorage)?.getItem(Op);if(e&&e.length<=Ei.fileBytes)return xs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function _E(n){switch(n){case"tetrahedron":return new ns(Math.sqrt(3)/2);case"sphere":return new In(.5,20,12);case"cylinder":return new Zt(.5,.5,1,20);case"cone":return new Xi(.5,1,20);case"torus":return new hi(.365,.135,8,24);case"capsule":return new vr(.28,.44,6,16);case"diamond":return new ui(.5);default:return new et(1,1,1)}}var xy=Object.keys(gy),Oo=64,Tl=4,yy=2,Ai;function ME(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function vy(){if(Ai)return Ai;let n=Oo*Tl,e=Oo*yy,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/Oo)*Tl+Math.floor(r/Oo),o=ME(xy[s],r%Oo,i%Oo),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ai=new _i(t,n,e),Ai.colorSpace=pt,Ai.magFilter=un,Ai.minFilter=Dn,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}function _y(n){let e=n.shape==="asset"?Np(n.assetId):null,t=n.shape==="custom"?Lx(n.profile):e?.geometry?.clone()??_E(n.shape),i=t.index?t.toNonIndexed():t;i!==t&&t.dispose(),i.attributes.uv||i.setAttribute("uv",new Be(new Float32Array(i.attributes.position.count*2),2));let r=n.rotation.map(Fe.degToRad);i.scale(...n.scale),i.rotateX(r[0]),i.rotateY(r[1]),i.rotateZ(r[2]),i.translate(...n.position);let s=new De(n.color),o=i.attributes.position.count,a=new Float32Array(o*3),l=i.attributes.uv,c=xy.indexOf(n.surface),u=c%Tl,f=Math.floor(c/Tl),d=i.attributes.color;for(let h=0;h<o;h++)n.shape==="asset"&&d?(a[h*3]=d.getX(h)*s.r,a[h*3+1]=d.getY(h)*s.g,a[h*3+2]=d.getZ(h)*s.b):s.toArray(a,h*3),n.shape!=="asset"&&!n.texture&&l.setXY(h,(u+.05+l.getX(h)*.9)/Tl,(f+.05+l.getY(h)*.9)/yy);return i.setAttribute("color",new ht(a,3)),i}function bE(n){let e=n?.shape==="asset"?Np(n.assetId):null;if(e?.material){let i=e.material.clone();if(i.map&&(i.map=i.map.clone(),i.map.needsUpdate=!0),n.texture){i.map?.dispose();let r=new bi().load(n.texture);r.colorSpace=pt,r.wrapS=r.wrapT=kn,i.map=r}return n.color&&n.color!=="#ffffff"&&i.color?.multiply(new De(n.color)),i.needsUpdate=!0,i}if(!n?.texture)return new gt({vertexColors:!0,map:vy(),roughness:.68});let t=new bi().load(n.texture);return t.colorSpace=pt,t.wrapS=t.wrapT=kn,new gt({vertexColors:!0,map:t,roughness:.68})}function Dr(n){return n?.parts?.some(e=>e.texture||e.shape==="asset")?n.parts.map(bE):new gt({vertexColors:!0,map:vy(),roughness:.68})}function Zh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ai&&e.map.dispose(),e.dispose()}}function jh(n){let e=n.map(_y),t=bh(e,n.some(i=>i.texture||i.shape==="asset"));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function zo(n){let e=jh(n.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function My(n){let e=new Qt;for(let t of n.parts??[]){let i=_y(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function by(n){return My(n).getSize(new M)}function Sy(n){let e=My(n),t=e.getCenter(new M),i=e.getSize(new M),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":Bp.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?Fe.clamp(r.precision,8,96):48,center:s?new M(...r.center):t,size:s?new M(...r.size):i,rotation:s?new M(...r.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function SE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),u=c.toArray().map(f=>f.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function wE(n){let e=Sy(n),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new In(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new vr(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&n.parts?.length){let i=jh(n.parts),r=SE(i,e.precision);if(i.dispose(),r.length>=4)try{let s=new Ki(r),o=e.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return s.scale(1/o.x,1/o.y,1/o.z),s.computeVertexNormals(),s}catch{}}return new et(1,1,1)}function Al(n,e=null){let t=Sy(n),i=wE(n),r=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):r.clone(),o=t.size.clone().multiply(s).divide(r),a=t.center.clone().sub(t.boundsCenter).multiply(s).divide(r);return i.scale(o.x,o.y,o.z),i.rotateX(Fe.degToRad(t.rotation.x)),i.rotateY(Fe.degToRad(t.rotation.y)),i.rotateZ(Fe.degToRad(t.rotation.z)),i.translate(a.x,a.y,a.z),i.computeBoundingBox(),i}function wy(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=jh(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Dr(e),collisionGeo:Al(e),mass:Fe.clamp(i.x*i.y*i.z*9,.18,12)}})}function Ty(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=jh(e.parts),i=t.boundingBox.getSize(new M),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new Ve(t,Dr(e));s.castShadow=!0;let o=new Tt;return o.add(s),o}var TE=256,Cy=1/2.6**2,AE=1e4,El=1e4,EE=10,CE=10,RE=256,PE=16,Qh=24,Ay=new WeakMap,Ci=Fe.clamp,Vo=Fe.lerp,Vp=n=>n*n*(3-2*n);function ln(n,e,t,i){return Number.isFinite(n)?Ci(n,e,t):i}function Ry(n){if(!n)return null;let e=xs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var IE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Py(n,e=PE){return Math.round(ln(n,1,TE,e))}function DE(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return ln(n[e+"Density"],0,El,0);let s=ln(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return ln(o/t,0,El,0)}var LE=["grass","shrub","model"],UE=["keep","fit","stretch"],FE=/^#[a-f\d]{6}$/i;function Ey(n={}){let e=Ry(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",r=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,EE).map(s=>FE.test(s)?s:i);for(;r.length<2;)r.push(r.at(-1)??i);return{kind:t,model:e,density:ln(n.density,0,El,1),colors:r,seed:Math.round(ln(n.seed,0,2147483647,1)),size:ln(n.size,.05,El,1),fit:UE.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:ln(n.variation,0,CE,0)}}function NE(n,e){return Array.isArray(n.rules)?n.rules.slice(0,AE).filter(t=>t&&typeof t=="object"&&LE.includes(t.kind)).filter(t=>t.kind!=="model"||Ry(t.model)).map(Ey):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,r,s])=>{let o=DE(n,t,e,i,r),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Ey({kind:t,model:a,density:o,seed:n.seed,size:ln(n[t+"Size"],.1,5,1)*(a?s:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function ko(n={},e=1){let t=Py(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(ln(n?.seed,0,2147483647,1)),amplitude:ln(n?.amplitude,0,12,0),frequency:ln(n?.frequency,.015,2,.12),octaves:Math.round(ln(n?.octaves,1,5,3)),roughness:ln(n?.roughness,.15,.95,.42),ridge:ln(n?.ridge,0,1,0),edgeFade:ln(n?.edgeFade,0,1,0),rules:NE(n??{},e),textureDensity:ln(n?.textureDensity,1e-4,RE,Cy),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&IE.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>ln(r,-Qh,Qh,0)):null}}function Iy(n,e,t,i){let r=Ci(t,0,e),s=Ci(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,f=a*u+o,d=n[f],h=n[f+1],p=n[f+u],x=n[f+u+1];return l+c<=1?d+(h-d)*l+(p-d)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Dy(n,e){let t=Py(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Iy(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function nr(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Jh(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=Vp(n-i),o=Vp(e-r),a=Vo(nr(i,r,t),nr(i+1,r,t),s),l=Vo(nr(i,r+1,t),nr(i+1,r+1,t),s);return 2*Vo(a,l,o)-1}function Cl(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:f,heights:d}=i,h=Ay.get(n),p=h&&h.w===e&&h.d===t&&h.detail===r&&h.seed===s&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===f;if(p&&h.heights===d)return h;let x=r+1,m=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let w=0;w<=r;w++)for(let b=0;b<=r;b++){let C=(b/r-.5)*e*a,A=(w/r-.5)*t*a,D=0,P=1,T=0;for(let k=0;k<l;k++){let N=Jh(C*2**k,A*2**k,s+k*13);D+=P*Vo(N,1-2*Math.abs(N),u),T+=P,P*=c}let S=f?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(b/r-.5))*2,(.5-Math.abs(w/r-.5))*2)),f*2):1,E=l===3&&c===.42&&u===0&&f===0;m[w*x+b]=E?o*(.62*Jh(C,A,s)+.26*Jh(C*2.03,A*2.03,s+13)+.12*Jh(C*4.13,A*4.13,s+37)):o*D/T*S}let g=d?m.map((w,b)=>w+d[b]):m,y={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:f,heights:d,procedural:m,surface:g};return Ay.set(n,y),y}function kp(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Iy(o,i,(e/r+.5)*i,(t/s+.5)*i)}function Rl(n=0){return(Math.round(n/90)%4+4)%4*90}function Ly(n){let e=Rl(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Gp(n,e,t){let{cos:i,sin:r}=Ly(n),s=e-n.x,o=t-n.z;return[i*s-r*o,r*s+i*o]}function BE(n){return Rl(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function OE(n,e,t){return n.y+kp(Cl(n),...Gp(n,e,t))}function zE(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,f=0;for(let d=l;d<=c;d++)for(let h=o;h<=a;h++)h===e&&d===t||(u+=r[d*s+h],f++);return u/f}function Uy(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=Cl(n),{detail:l,w:c,d:u,surface:f,procedural:d}=a,[h,p]=Gp(n,e,t),x=Ci(h,-c/2,c/2),m=Ci(p,-u/2,u/2);if((h-x)**2+(p-m)**2>=r**2)return!1;let g=(h/c+.5)*l,y=(p/u+.5)*l,w=c/l,b=u/l,C=Math.max(0,Math.ceil(g-r/w)),A=Math.min(l,Math.floor(g+r/w)),D=Math.max(0,Math.ceil(y-r/b)),P=Math.min(l,Math.floor(y+r/b)),T=Number.isFinite(o)?o-n.y:kp(a,h,p),S=l+1,E=a.heights?.slice()??new Array(S**2).fill(0),k=!1,N=!1;function X(V,W,J){k=!0;let U=W*S+V,ie=E[U],te;if(i==="raise"||i==="lower")te=ie+(i==="raise"?1:-1)*s*J;else{let ce=i==="flatten"?T:zE(a,V,W);te=Vo(f[U],ce,Math.min(1,s)*J)-d[U]}te=Ci(te,-Qh,Qh),!(Math.abs(te-ie)<1e-7)&&(E[U]=te,N=!0)}for(let V=D;V<=P;V++)for(let W=C;W<=A;W++){let J=Math.hypot((W-g)*w,(V-y)*b)/r;J<1&&X(W,V,Vp(1-J))}if(!k){let V=Ci(g,0,l),W=Ci(y,0,l),J=Math.min(l-1,Math.floor(V)),U=Math.min(l-1,Math.floor(W)),ie=V-J,te=W-U,ce=ie+te<=1,_e=ce?1-ie-te:ie+te-1,Ae=ce?ie:1-te,Ie=ce?te:1-ie;if(_e>=Math.max(Ae,Ie)){let Pe=+!ce;X(J+Pe,U+Pe,1)}else Ae>=Ie?X(J+1,U,1):X(J,U+1,1)}return N&&(n.terrain.heights=E),N}function Fy(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??Cy),f=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],f),f+=6)}let d=new $e;return d.setAttribute("position",new ht(o,3).setUsage(wn)),d.setAttribute("uv",new ht(a,2)),d.setIndex(new ht(c,1)),VE(d,n),d}function VE(n,e){let{surface:t}=Cl(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function kE(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=Cl(n),[l,c]=Gp(n,e,t),u=Ci((l/s+.5)*r,0,r),f=Ci((c/o+.5)*r,0,r),d=Math.min(r-1,Math.floor(u)),h=Math.min(r-1,Math.floor(f)),p=r+1,x=h*p+d,m=u-d+f-h<=1,g=m?a[x+1]-a[x]:a[x+p+1]-a[x+p],y=m?a[x+p]-a[x]:a[x+p+1]-a[x+1],{cos:w,sin:b}=Ly(n),C=-g*r/s,A=-y*r/o;return i.set(w*C+b*A,1,-b*C+w*A).normalize()}function Ny(n,e){let{w:t,d:i}=BE(n);return{mesh:e,heightfield:!0,xMin:n.x-t/2,xMax:n.x+t/2,zMin:n.z-i/2,zMax:n.z+i/2,height:(r,s)=>OE(n,r,s),normalAt:(r,s,o)=>kE(n,r,s,o),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function GE(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new $e;return e.setAttribute("position",new Be(n,3)),e.setAttribute("uv",new Be(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function HE(){return new Ft(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function WE(n,e,t){if(e==="stretch")return new M().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function By(n){let e=new Tt;for(let[t,i]of(n.terrain.rules??[]).entries()){let r=Math.round(n.w*n.d*i.density),s=Math.min(r,El);if(!s)continue;let o=i.kind==="grass",a=i.model?zo(i.model):o?GE():HE();i.model?a.scale(...WE(by(i.model),i.fit,i.size)):a.scale(i.size,i.size,i.size),a.computeBoundingBox(),a.translate(0,-a.boundingBox.min.y,0),a.computeBoundingBox();let l=i.model?Dr(i.model):new dn({color:"#ffffff",side:o?an:ai,flatShading:!0});if(o&&n.terrain.grassTexture){let d=new bi().load(n.terrain.grassTexture);d.colorSpace=pt,l.map=d,l.userData.ownTexture=!0}let c=new Ia(a,l,s);c.name=i.kind,c.userData={ruleIndex:t,seed:i.seed,variation:i.variation,collidable:i.collidable,requestedCount:r},c.instanceMatrix.setUsage(wn),c.receiveShadow=!0;let u=i.colors.map(d=>new De(d)),f=new De;for(let d=0;d<s;d++){let h=nr(d,41,i.seed)*(u.length-1),p=Math.floor(h);c.setColorAt(d,f.copy(u[p]).lerp(u[p+1],h-p))}e.add(c)}return qE(e,n),e}function qE(n,e){let t=Cl(e),i=new zt;for(let r of n.children){let{seed:s,variation:o}=r.userData;for(let a=0;a<r.count;a++){let l=(nr(a,27,s)-.5)*.96*e.w,c=(nr(a,27,s+1)-.5)*.96*e.d;i.position.set(l,kp(t,l,c),c),i.rotation.y=nr(a,27,s+2)*Math.PI*2,i.scale.setScalar(Vo(Math.max(.05,1-o),1+o,nr(a,27,s+3))),i.updateMatrix(),r.setMatrixAt(a,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Oy(n,e){let t=[],i=new ot,r=new M,s=new He().setFromAxisAngle(new M(0,1,0),Rl(n.yaw)*Math.PI/180),o=new M(n.x,n.y,n.z),a=new M(.005,.005,.005);for(let l of e?.children??[]){if(!l.userData.collidable)continue;let c=l.geometry.boundingBox,u=c.getCenter(new M),f=c.getSize(new M).multiplyScalar(.5);for(let d=0;d<l.count;d++){l.getMatrixAt(d,i);let h=new M,p=new He;i.decompose(h,p,r),h.add(u.clone().multiply(r).applyQuaternion(p)),h.applyQuaternion(s).add(o),p.premultiply(s),t.push({position:h,quaternion:p,half:f.clone().multiply(r).max(a)})}}return t}function zy(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Zh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var $h=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Vy=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function ky(n,e=Vy[n]){n=Math.max(0,Math.min($h.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Vy[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let f of[0,-512])for(let d of[0,-512])i.fillRect(a+f,l+d,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Gy({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function f(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function d(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>d(h,!0),n.onpointercancel=n.onlostpointercapture=h=>d(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:f,consumeJump(){let h=c;return c=!1,h}}}var XE=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function Hy(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){XE.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Wy(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var qy=.065,YE=.08,Kh=.035,Hp=.003,ed=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:f,normal:d,offset:h}=u,p=f.surface;if(u.released=null,f.surface=null,f.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=f.valid&&(!f.held||f.hasSupport)&&s.movement!==!1,!f.valid)continue;let x=f.locomotionTarget.subVectors(f.target,e).clampLength(0,c).add(e);if(f.hasSupport?h.copy(f.supportOffset):h.copy($i).applyQuaternion(f.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),d.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&f.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(Hp,r*t*t);let y=this.sweep(u,this.from,this.to);if(m){let T=this.correction.subVectors(x,f.anchor),S=T.dot(d)<=Kh&&f.anchor.distanceToSquared(e)<=(c+Kh)**2&&T.lengthSq()<=Math.max(.12,c*.5)**2;S&&(!y||y===p&&this.hitNormal.dot(d)>.7)?(y=p,this.hit.copy(f.anchor).add(h),this.hitNormal.copy(d)):!S&&y===p&&T.dot(d)>Kh&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;f.anchor.copy(this.hit).sub(h),d.copy(this.hitNormal);let w=y.friction??.8,b=Math.min(1,Math.max(0,w*(.75+s.grip*.09))),C=Math.max(0,1-Math.abs(d.y)/.28),A=Math.min(.97,Math.max(0,1-b+C*.24+(s.slide-3)*.035)),D=this.correction.subVectors(f.anchor,x);if(D.addScaledVector(d,-D.dot(d)),this.slideTarget.copy(D).multiplyScalar(-A),m&&(this.downhill.set(0,-1,0).addScaledVector(d,d.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*A*Math.max(C,Math.max(0,1-2*b)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(f.anchor).add(h).addScaledVector(d,Hp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(d,-Hp*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,f.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))f.anchor.copy(this.hit).sub(h),d.copy(this.hitNormal);else if(A>.5&&D.lengthSq()>Kh**2)continue}D.subVectors(f.anchor,x),m&&D.dot(d)<0&&D.addScaledVector(d,-D.dot(d)),l.add(D);let P=y.objectBody;if(P){let T=u.inverseRotation.copy(P.mesh.quaternion).invert();u.localAnchor.copy(f.anchor).add(h).sub(P.mesh.position).applyQuaternion(T),u.localNormal.copy(d).applyQuaternion(T)}if(f.surface=y,f.groundContact=d.y>.55,this.contacts++,u.tracked){let T=this.handMotion.subVectors(u.previousTarget,x),S=T.dot(d);T.multiplyScalar(1-A).addScaledVector(d,Math.max(0,S)-S*(1-A)),this.intent.add(T)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),x.copy(m).add(g),p.surface&&(x.copy(p.anchor).add(g),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=qy;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/qy),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(x);g<0&&this.average.addScaledVector(x,-g)}let{jump:f,weight:d}=this.settings;if(this.average.lengthSq()<(1.05+.04*d)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*f)/(.72+.056*d)),t.clampLength(0,8.5+.28*f);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=YE,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function ZE(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function Wp(n,e=.16,t=26){let i=ZE(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function Xy(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,Wp(n,i,r)&&(n.hapticCooldown=.08))}function Yy({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new M(0,1,0),a=new He,l=0,c=new Zi,u=[],f=new Map,d=fx(n,{onShot:(g,y)=>s.sendShot(g,y),impact(g,y,w,b){c.set(g,y),c.far=w;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let A=f.get(C.object);return b&&A&&!A.owner&&!A.frozen&&A.velocity.addScaledVector(y,Math.min(4,2.6/A.mass)),C.distance}}),h={position:new M,quaternion:new He,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function m({frame:g,space:y,inVR:w,enabled:b,remoteWorld:C,dt:A,yaw:D,drop:P,rightHand:T,flatFiring:S}){let E=null,k=!1;if(b)if(w){let N=[...g.session.inputSources].find(V=>V.handedness==="right"),X=N&&g.getPose(N.targetRaySpace,y);if(X){let{position:V,orientation:W}=X.transform;E=h,E.position.set(V.x,V.y-P,V.z).applyAxisAngle(o,D).add(e.position),E.modelPosition.copy(T.valid?T.mesh.position:E.position),E.quaternion.set(W.x,W.y,W.z,W.w).premultiply(a.setFromAxisAngle(o,D)),k=!!N.gamepad?.buttons[0]?.pressed}}else E=h,t.getWorldPosition(E.position),t.getWorldQuaternion(E.quaternion),E.modelPosition.set(.16,-.17,-.43).applyQuaternion(E.quaternion).add(E.position),k=S;if(x=E?p:null,u.length=0,f.clear(),E||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(C)s.forEachReplica(N=>u.push(N));else for(let N of r)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),f.set(N.mesh,N))}d.update({dt:A,aim:E,firing:k}),k?l=1.3:l=Math.max(0,l-A)}return{update:m,receiveShot({position:g,quaternion:y},w){d.replay(g,new He().copy(y),w),l=1.3},reset(){d.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return d.shotsFired}}}function Zy(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function jy(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var ys=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],td=["Naturel","Cellulo","Affiche","R\xE9tro"],nd={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var Jy=new WeakMap;function qp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,Jy.set(n,e),n}function Pl(n){if(Array.isArray(n))return n.map(Pl);let e=n.clone(),t=Jy.get(n);return t?qp(e,t):e}function jE(n){let t=new In(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Ft(.225,0),r=new Ya({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return qp(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function JE(n){let e=new et(.37,.37,.37),t=new gt({color:16777215,roughness:.4});return qp(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function Qy(){let n={value:0};return{props:[jE(n),JE(n)],animate(e){n.value=e}}}var $y=new M(0,1,0),Ky=new M(0,0,1),QE={left:new He().setFromAxisAngle(Ky,Math.PI/2),right:new He().setFromAxisAngle(Ky,-Math.PI/2)},$E=new He,KE=new M;function ev(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle($y,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply($E.setFromAxisAngle($y,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(QE[n.side]),n.target.copy(n.gripPosition).sub(KE.copy($i).applyQuaternion(n.mesh.quaternion))}function tv(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let d=globalThis.AudioContext??globalThis.webkitAudioContext;if(d)try{n??=new d,n.state==="suspended"&&await n.resume()}catch{}}function c(d){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let y=0;y<g.length;y++)g[y]=(Math.random()*2-1)*(1-y/g.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),m=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(Fe.clamp(d,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(m).connect(n.destination),p.start(h),s++}function u({dt:d,inVR:h,hands:p,grounded:x,travel:m,volume:g,enabled:y}){if(h){p.forEach((w,b)=>{a[b]=Math.max(0,a[b]-d);let C=w.valid&&w.groundContact;C&&!o[b]&&!a[b]&&y&&(c(g),a[b]=.11),o[b]=C});return}r=Math.max(0,r-d),t=x?t+m:0,x&&y&&r===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,r=.12),i=x}function f(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:f,get count(){return s},get state(){return n?.state??"locked"}}}function nv(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new $e;r.setAttribute("position",new ht(t,3).setUsage(wn)),r.setAttribute("color",new ht(i,3).setUsage(wn));let s=new es(r,new Mi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new _r(new In(1,12,8)).attributes.position,a=new _r(new ui(1).scale(...mh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,f=new M,d=new WeakMap,h=new M(1,1,1),p=new He,x=new M,m=new M,g=new M,y=new M,w=new M,b=new M,C=new M,A=new M(0,1,0),D={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},P=0;function T(V,W,J){if(P+2>u){c.truncated=!0;return}V.toArray(t,P*3),J.toArray(i,P++*3),W.toArray(t,P*3),J.toArray(i,P++*3)}function S(V,W,J,U,ie){for(let te=0;te<V.count;te+=2){if(P+2>u){c.truncated=!0;break}x.fromBufferAttribute(V,te).multiply(U).applyQuaternion(J).add(W),m.fromBufferAttribute(V,te+1).multiply(U).applyQuaternion(J).add(W),T(x,m,ie)}}function E(V,W,J,U){if(V.sphereRadius){S(o,W,J,y.setScalar(V.sphereRadius),U);return}let ie=l.get(V);if(!ie){let te=new Set,ce=[];for(let _e of V.faces)for(let[Ae,Ie]of[[_e.a,_e.b],[_e.b,_e.c],[_e.c,_e.a]]){let Pe=[Ae.toArray().join(","),Ie.toArray().join(",")].sort().join("|");te.has(Pe)||(te.add(Pe),ce.push(...Ae.toArray(),...Ie.toArray()))}ie=new Be(ce,3),l.set(V,ie)}S(ie,W,J,h,U)}function k(V,W){let U=(V.xMax-V.xMin)/16,ie=(V.zMax-V.zMin)/16;for(let te=0;te<=16;te++)for(let ce=0;ce<=16;ce++){if(P+2>u){c.truncated=!0;return}let _e=V.xMin+te*U,Ae=V.zMin+ce*ie;x.set(_e,V.height(_e,Ae),Ae),te<16&&T(x,m.set(_e+U,V.height(_e+U,Ae),Ae),W),ce<16&&T(x,m.set(_e,V.height(_e,Ae+ie),Ae+ie),W)}}function N(V,W,J,U){if(W.lengthSq()<1e-8)return;w.copy(V).addScaledVector(W,J),b.copy(W).normalize(),C.crossVectors(b,A),C.lengthSq()<1e-8?C.set(1,0,0):C.normalize();let ie=Math.min(.09,V.distanceTo(w)*.3);y.copy(w).addScaledVector(b,-ie),T(V,w,U),T(w,x.copy(y).addScaledVector(C,ie*.5),U),T(w,m.copy(y).addScaledVector(C,-ie*.5),U)}function X({settings:V,boxes:W,bodies:J,hands:U,locomotion:ie,velocity:te,head:ce,body:_e,neck:Ae,proxies:Ie,gravity:Pe,appliedMove:ne,playerActive:re,inVR:xe,viewQuaternion:Ee}){P=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(V.debugBudget??5)*2e3);let Me=(V.debugRange??6)*5,Oe=(Y,v=0)=>!Y||Y.distanceToSquared(ce)<=(Me+v)**2;if(s.visible=V.debugPalm||V.debugHitboxes||V.debugInvisible||V.debugForces||V.debugBody||V.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(V.debugHitboxes||V.debugInvisible||V.debugMesh){let Y=u;if(V.debugScene!==!1&&W.length&&(u=Math.floor(Y*.65/2)*2),V.debugObjects!==!1)for(let v of J){if(P+2>u){c.truncated=!0;break}if(!(!v.mesh.visible||!Oe(v.mesh.position,v.shape.radius))&&(c.bodies++,V.debugHitboxes&&v.collidable!==!1&&v.blocksPlayer!==!1&&E(v.shape,v.mesh.position,v.mesh.quaternion,v.owner?D.proxy:D.solid),V.debugMesh&&v.mesh.geometry)){let F=v.mesh.geometry,O=F.attributes.position.version,B=d.get(F);B?.version!==O&&(B?.edges.dispose(),B={version:O,edges:new _r(F)},d.set(F,B)),S(B.edges.attributes.position,v.mesh.position,v.mesh.quaternion,v.mesh.scale,D.grip)}}if(u=Y,V.debugScene!==!1)for(let v of W){if(P+2>u){c.truncated=!0;break}let F=v.shape?.radius??v.half?.length()??Math.hypot(v.xMax-v.xMin||0,v.zMax-v.zMin||0);if(!Oe(v.position??v.mesh?.position,F))continue;c.boxes++;let O=v.mesh?.isObject3D&&v.mesh.visible;if(V.debugMesh&&O&&v.mesh.geometry){let B=v.mesh.geometry,z=B.attributes.position.version,H=d.get(B);H?.version!==z&&(H?.edges.dispose(),H={version:z,edges:new _r(B)},d.set(B,H)),S(H.edges.attributes.position,v.mesh.position,v.mesh.quaternion,v.mesh.scale,D.grip)}(O?!V.debugHitboxes:!V.debugInvisible)||(v.shape?E(v.shape,v.position,v.quaternion,O?D.solid:D.proxy):v.heightfield&&k(v,O?D.solid:D.proxy))}}if(re){if(V.debugBody){if(V.collisions)for(let{position:Y,radius:v}of Ie)S(o,Y,p,y.setScalar(v),D.rig);T(ce,Ae,D.rig),T(Ae,_e,D.rig)}if(V.debugForces&&(f.set(0,-.22,-.5),Ee&&f.applyQuaternion(Ee),f.add(ce),N(f,te,.13,D.velocity),N(f,A,-Pe*.038,D.force),N(f,ne,5,D.movement),V.debugObjects!==!1)){for(let Y of J)if(!(!Y.mesh.visible||!Y.velocity||!Oe(Y.mesh.position,Y.radius))&&(N(Y.mesh.position,Y.velocity,.13,D.velocity),P+2>u)){c.truncated=!0;break}}if(xe&&(V.debugPalm||V.debugForces))for(let Y of ie.hands){let{hand:v,normal:F,offset:O}=Y;if(v.valid){if(V.debugPalm){S(o,v.gripPosition,p,y.setScalar(.014),D.grip);for(let B=0;B<3;B++)b.set(0,0,0).setComponent(B,.075).applyQuaternion(v.controllerRotation),N(v.gripPosition,b,1,D.grip);w.copy(v.mesh.position).add(O),S(a,w,v.mesh.quaternion,h,D.palm),T(v.gripPosition,w,D.grip),v.hasSupport&&(w.copy($i).applyQuaternion(v.mesh.quaternion).add(v.mesh.position),S(a,w,v.mesh.quaternion,h,D.grip))}V.debugForces&&v.surface&&N(v.anchor,F,.25,D.normal)}}}c.vertices=P,c.segments=P/2,r.setDrawRange(0,P);for(let Y of["position","color"]){let v=r.attributes[Y];v.clearUpdateRanges(),P&&v.addUpdateRange(0,P*3),v.needsUpdate=!!P}}return{update:X,stats:c}}var Xp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],sv=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Yp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},id=8e6,Il=512,Ri=1024,iv=512,Ht=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,rv=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Dl(n){if(typeof n=="string"){if(n.length>id)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Il)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Il+" pi\xE8ces.");let e=n.spawn??{},t=n.pieces.filter(i=>!gs(i?.sceneryId)&&!Xh(i?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:rv(n.name,56,"Ma map"),worldSize:Ht(n.worldSize,24,2048,240),spawn:{x:Ht(e.x,-Ri,Ri,0),y:Ht(e.y,-256,256,.06),z:Ht(e.z,-Ri,Ri,3),yaw:Ht(e.yaw,-360,360,0)},pieces:t.map((i,r)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let s=Ht(i.w,.05,iv,3),o=Ht(i.d,.05,iv,3),a=i.terrain&&typeof i.terrain=="object"?ko(i.terrain,s*o):null,l=i.model?xs({version:1,models:[i.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:rv(i.name,36,"Pi\xE8ce "+(r+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Ht(i.x,-Ri,Ri,0),y:Ht(i.y,-256,256,0),z:Ht(i.z,-Ri,Ri,0),w:s,h:Ht(i.h,.05,256,.5),d:o,pitch:a?0:Ht(i.pitch,-180,180,0),yaw:a?Rl(Ht(i.yaw,-360,360,0)):Ht(i.yaw,-360,360,0),roll:a?0:Ht(i.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(i.primitive)?i.primitive:"box",uvScale:Ht(i.uvScale,.05,100,1),uvOffsetX:Ht(i.uvOffsetX,-100,100,0),uvOffsetY:Ht(i.uvOffsetY,-100,100,0),uvRotation:Ht(i.uvRotation,-360,360,0),material:Math.round(Ht(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Ht(i.grip,0,1.5,.8),gravity:Ht(i.gravity,.05,2.5,1),bounce:Ht(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function ov(n){return Dl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...No,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Kt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Ll(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function av(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new Kt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),f=l(n.z+r.z*a),d=a-(c-n.x)*r.x-(u-n.y)*r.y-(f-n.z)*r.z;return c+=r.x*d,u+=r.y*d,f+=r.z*d,![c,u,f].every(Number.isFinite)||Math.abs(c)>Ri||Math.abs(f)>Ri||u<-256||u>256?null:{...t,x:c,y:u,z:f}}var Ul="gorilla-lab-custom-map-v1";function lv(n){let e=new Blob([JSON.stringify(Dl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var e2=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function Zp(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&e2.has(e)):!1:!0}function rd(n,e,t){let i=new et(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function cv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,f=t.getY(c)*i;t.setXY(c,u*s-f*o+a,u*o+f*s+l)}return t.needsUpdate=!0,n}function uv(n){switch(n){case"sphere":return new In(.5,24,16);case"cylinder":return new Zt(.5,.5,1,24);case"cone":return new Xi(.5,1,24);case"torus":return new hi(.34,.14,12,32);case"capsule":return new vr(.32,.36,8,16);default:return new et(1,1,1)}}function jp(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new M(...a)),r=[],s=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(d=>i[d]),c=l[0],u=l[1].clone().sub(c).normalize(),f=l.at(-1).clone().sub(c);f.addScaledVector(u,-f.dot(u)).normalize();for(let d=1;d<l.length-1;d++)for(let h of[c,l[d],l[d+1]]){r.push(...h);let p=h.clone().sub(c);s.push(p.dot(u)/2.6,p.dot(f)/2.6)}}let o=new $e;return o.setAttribute("position",new Be(r,3)),o.setAttribute("uv",new Be(s,2)),o.computeVertexNormals(),o}function hv({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(Y=>Y.half&&Y.mesh?.isObject3D).map(Y=>Y.mesh)),c=new Tt;n.add(c);let u=[],f=[],d=[],h=new bi,p=new Map,x=0,m=null,g="",y=-1,w=-1,b="",C="",A=new et(1,1,1),D=jp(),P=new Ve(A,new _t({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));P.visible=!1,n.add(P);let T=new Zi,S=new M,E=new M,k=document.querySelector("#map-note");function N(Y){b=Y,k.textContent=Y}function X(){d.length>=20&&d.shift(),d.push(JSON.stringify(m))}function V(Y,v){let F=p.get(Y);if(!F){F={materials:new Set,texture:null,failed:!1},p.set(Y,F);let O=z=>{if(!(p.get(Y)!==F||F.failed)){F.failed=!0;for(let H of F.materials)H.map=null,H.needsUpdate=!0;F.texture?.dispose(),z&&N(z)}},B=h.load(Y,z=>{(z.image.width>2048||z.image.height>2048)&&O("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>O());F.texture=B,B.colorSpace=pt,B.wrapS=B.wrapT=kn}return F.materials.add(v),v.map=F.failed?null:F.texture,F}function W(){for(let[Y,v]of p)v.materials.size||(p.delete(Y),v.failed||v.texture.dispose())}function J(Y){let v=e.mapMaterial(Y.material,s());if(!Y.texture&&Y.color==="#ffffff")return{material:v,custom:!1};let F=v.clone();return F.onBeforeCompile=v.onBeforeCompile,F.customProgramCacheKey=v.customProgramCacheKey,F.color.multiply(new De(Y.color)),{material:F,custom:!0,ownTexture:Y.texture?V(Y.texture,F):null}}function U(Y){c.remove(Y.mesh),Y.mesh.geometry.dispose(),Y.vegetation&&zy(Y.vegetation),Y.custom&&(Y.ownTexture?.materials.delete(Y.mesh.material),Y.model?Zh(Y.mesh.material):Y.mesh.material.dispose())}function ie(Y,v){if(Y.model){let Ce=zo(Y.model);Ce.scale(Y.w,Y.h,Y.d);let I=Dr(Y.model),_=new Ve(Ce,I);_.position.set(Y.x,Y.y,Y.z),_.rotation.set(Fe.degToRad(Y.pitch),Fe.degToRad(Y.yaw),Fe.degToRad(Y.roll??0),"YXZ"),_.castShadow=_.receiveShadow=!0,_.userData.mapIndex=v,Y.model.kind==="prop"&&(_.visible=!1),c.add(_);let L=new M(Y.w,Y.h,Y.d),j=Al(Y.model,L);j.computeBoundingBox();let K=j.boundingBox,Z=new M(Math.max(Math.abs(K.min.x),Math.abs(K.max.x)),Math.max(Math.abs(K.min.y),Math.abs(K.max.y)),Math.max(Math.abs(K.min.z),Math.abs(K.max.z))),he=pi(j);j.dispose();let ue={mesh:_,position:_.position,quaternion:_.quaternion,half:Z,min:Z.clone().negate(),shape:he,radius:he.radius,friction:Y.grip,gravity:Y.gravity,bounce:Y.bounce,zone:!0,type:Y.material};return{mesh:_,collider:ue,custom:!0,model:!0}}let{material:F,custom:O,ownTexture:B}=J(Y),z=Y.terrain?Fy(Y):Y.primitive==="ramp"?jp(Y.w,Y.h,Y.d):Y.primitive&&Y.primitive!=="box"?uv(Y.primitive).scale(Y.w,Y.h,Y.d):rd(Y.w,Y.h,Y.d),H=new Ve(cv(z,Y),F);H.position.set(Y.x,Y.y,Y.z),H.rotation.set(Fe.degToRad(Y.pitch),Fe.degToRad(Y.yaw),Fe.degToRad(Y.roll??0),"YXZ"),H.castShadow=H.receiveShadow=!0,H.userData.mapIndex=v,Y.sceneryId==="lab-mirror"&&(H.userData.mirrorSize={w:Y.w,h:Y.h,d:Y.d}),c.add(H);let ee=new M(Y.w/2,Y.h/2,Y.d/2),se={mesh:H,position:H.position,quaternion:H.quaternion,half:ee,min:ee.clone().negate(),shape:Y.primitive==="ramp"?pi(z):mi(ee),friction:Y.grip,gravity:Y.gravity,bounce:Y.bounce,zone:!0,type:Y.material};if(!Y.terrain)return{mesh:H,collider:se,custom:O,ownTexture:B};let me=By(Y);return me&&H.add(me),{mesh:H,collider:Ny(Y,H),custom:O,ownTexture:B,vegetation:me}}function te(){for(let Y of u){let v=m?.pieces[Y.mesh.userData.mapIndex];if(!v||Y.ownTexture||Y.model)continue;let F=e.mapMaterial(v.material,s());Y.custom?Y.mesh.material.map!==F.map&&(Y.mesh.material.map=F.map,Y.mesh.material.needsUpdate=!0):Y.mesh.material=F}}function ce(){for(let B of u)U(B);u.length=0,f.length=0;let Y=m?.pieces??[];g=m?"custom-"+ds(JSON.stringify(m)):"";let v=new Set(Y.map(B=>B.model?.assetId).filter(Boolean)),F=new Set(Y.map(B=>B.sceneryId).filter(Boolean));o.forEach(B=>{let z=B.userData?.editorAssetId;B.visible=!m||!l.has(B)&&Zp(m,z,v,F)});let O=[];for(let[B,z]of Y.entries()){let H=ie(z,B);u.push(H);for(let ee of Oy(z,H.vegetation))O.push({...ee,min:ee.half.clone().negate(),shape:mi(ee.half),friction:z.grip,gravity:z.gravity,bounce:z.bounce,zone:!1,type:z.material})}for(let B of u)B.mesh.userData.mirrorSize&&f.push(B);if(W(),m){let B=a.filter(H=>!l.has(H.mesh)&&Zp(m,H.editorAssetId,v,F)),z=u.filter((H,ee)=>Y[ee].solid&&Y[ee].model?.kind!=="prop"&&Y[ee].model?.properties?.collidable!==!1).map(H=>H.collider);e.boxes.splice(0,e.boxes.length,...B,...z,...O)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),m)try{localStorage.setItem(Ul,JSON.stringify(m))}catch{}else try{localStorage.removeItem(Ul)}catch{}}function _e(Y){let v=Dl(Y);x++,d.length=0,m=v,y=w=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ce(),i(m.spawn.yaw),N("Map : "+m.name+" \xB7 "+m.pieces.length+" pi\xE8ces")}function Ae(){x++,m=null,d.length=0,y=w=-1,t.set(0,0,3),ce(),i(0),N("Ar\xE8ne int\xE9gr\xE9e")}function Ie(){_e({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Ll({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function Pe(){if(!d.length)return N("Rien \xE0 annuler.");m=Dl(d.pop()),y=w=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ce(),N("Derni\xE8re modification annul\xE9e.")}function ne(){m?lv(m):N("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function re(Y,v,F,O){m&&(X(),m.spawn={x:Y,y:v,z:F,yaw:Fe.radToDeg(O)},t.set(Y,v,F),ce(),N("Point de d\xE9part m\xE9moris\xE9."))}function xe(Y,v,F,{mode:O,piece:B,head:z,feet:H}){T.set(Y,v),T.far=12;let ee=u.map(K=>K.mesh);O===1&&m?.arenaBase&&!m.editableArena&&ee.push(...a.filter(K=>K.heightfield&&!m.pieces.some(Z=>Z.sceneryId===K.editorAssetId)).map(K=>K.mesh));let se=T.intersectObjects(ee,!1),me=O>=5?se.find(K=>m?.pieces[K.object.userData.mapIndex]?.terrain):se[0];if(P.visible=!1,!m)return;if(O>=5){let K=me?.object.userData.mapIndex,Z=m.pieces[K];if(!Z?.terrain||!F)return;if(X(),O===9){let he=B.terrain?.detail??Z.terrain.detail,ue=Dy(Z.terrain,he);Z.terrain=ko({...ue,...B.terrain,heights:ue.heights})}else{let he={mode:["raise","lower","smooth","flatten"][O-5],radius:B.brushRadius,strength:B.brushStrength,target:Z.y};Uy(Z,me.point.x,me.point.z,he)}ce(),N("Relief modifi\xE9.");return}if(O===2||O===3||O===4){if(!me)return;let K=me.object.userData.mapIndex,Z=m.pieces[K];if(F&&O===2&&(y=K,w=K,N("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),F&&O===3){if(m.pieces.length===1)return N("Garde au moins une pi\xE8ce dans la map.");X(),m.pieces.splice(K,1),y=w=-1,ce(),N("Pi\xE8ce supprim\xE9e.")}F&&O===4&&(X(),Object.assign(m.pieces[K],{material:B.material,grip:B.grip,gravity:B.gravity,bounce:B.bounce,solid:B.solid,texture:B.texture}),ce(),N("Surface modifi\xE9e.")),me&&(P.geometry=Z.primitive==="ramp"?D:A,P.position.copy(me.object.position),P.rotation.copy(me.object.rotation),P.scale.set(Z.w,Z.h,Z.d).multiplyScalar(1.006),P.visible=!0,P.material.color.set(O===3?"#ff8271":"#ffe2a2"));return}if(!me)return;let Ce=w>=0?m.pieces[w]:B;if(me.object.userData.mapIndex===w)return;S.copy(me.face.normal).transformDirection(me.object.matrixWorld);let I=Ce.terrain?{...Ce,x:Math.round(me.point.x*2)/2,y:me.point.y,z:Math.round(me.point.z*2)/2,pitch:0,yaw:Ce.yaw??0}:av(me.point,S,Ce);if(!I)return;P.geometry=I.primitive==="ramp"?D:A,P.position.set(I.x,I.y,I.z),P.rotation.set(Fe.degToRad(I.pitch),Fe.degToRad(I.yaw),Fe.degToRad(I.roll??0),"YXZ"),P.scale.set(I.w,I.h,I.d),P.updateMatrixWorld(!0),P.visible=!0;let _=new Qt().setFromObject(P),L=new Qt(new M(z.x-.26,H+.01,z.z-.26),new M(z.x+.26,z.y+.19,z.z+.26)),j=I.solid&&_.intersectsBox(L);if(P.material.color.set(j?"#fd7763":"#8be4b9"),F){if(j)return N("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(w<0&&m.pieces.length>=Il)return N("Limite de "+Il+" pi\xE8ces atteinte.");X(),w>=0?(m.pieces[w]=I,w=-1):m.pieces.push(I),ce(),N("Pi\xE8ce pos\xE9e \xB7 "+m.pieces.length+" pi\xE8ces")}}let Ee=document.querySelector("#map-file"),Me=document.querySelector("#map-url");Ee.onchange=async()=>{let Y=Ee.files[0];if(!Y)return;let v=++x;Ee.value="";try{if(Y.size>id)throw Error("Map trop lourde.");let F=await Y.text();v===x&&_e(F)}catch(F){v===x&&N(F.message)}};async function Oe(Y){let v=++x;try{let F=new URL(Y,location.href);if(!["http:","https:"].includes(F.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let O=await fetch(F,{credentials:"omit"});if(v!==x)return;if(!O.ok)throw Error("URL de map inaccessible ("+O.status+").");if(Number(O.headers.get("content-length"))>id)throw Error("Map trop lourde.");let z=await O.text();v===x&&_e(z)}catch(F){v===x&&N(F.message)}}return document.querySelector("#map-load-url").onclick=()=>Oe(Me.value),document.querySelector("#map-export").onclick=ne,document.querySelector("#map-reset").onclick=Ae,{placedModels:()=>m?.pieces.filter(Y=>Y.model?.kind==="prop")??[],modelPieces:()=>m?.pieces.filter(Y=>!Y.terrain&&Y.name!=="Sol")??[],refreshMaterials:te,load:_e,loadURL:Oe,reset:Ae,blank:Ie,undo:Pe,save:ne,edit:xe,recenter:re,inform:N,mirrors:()=>f,get usesBuiltInMirror(){return!m||m.arenaBase&&!m.editableArena&&!m.pieces.some(Y=>Y.sceneryId==="lab-mirror")},clearGhost(){P.visible=!1},get active(){return!!m},get builtIn(){return!m||m.arenaBase===!0},get assetLayer(){return m?.assetLayer===!0},hasAsset(Y){return!!m?.pieces.some(v=>v.model?.assetId===Y)},getAssetPiece(Y){return m?.pieces.find(v=>v.model?.assetId===Y)??null},get status(){return b},get yaw(){return m?.spawn.yaw??0},get nodes(){return m?.pieces.length??0},get name(){return m?.name??null},get signature(){return g}}}var Jp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function dv(){let n=new Ve(new en(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+Jp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function fv(n){let e=new Kr,t=new Yt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new fe(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+Jp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new Ve(new en(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,f,d)=>{let h=Math.max(0,l.indexOf(d)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,f,{bloom:d,visibleField:h}){if(n.xr.updateCamera(f),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=d?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let w=l[y],b=Math.max(32,Math.round(w.viewport.z)),C=Math.max(32,Math.round(w.viewport.w)),A=a[y];A?(A.width!==b||A.height!==C)&&A.setSize(b,C):A=a[y]=new Pn(b,C,{type:o?wi:Wn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=y===0&&m,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,f)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function pv(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function mv(n,e,t){function i(c,u,f=.85){let d=c.getWorldPosition(new M),h=c.getWorldQuaternion(new He);e.push({half:u,min:u.clone().negate(),position:d,quaternion:h,mesh:{position:d,quaternion:h},shape:mi(u),friction:f,gravity:1})}let r=[],s=[],o=new dn({color:"#485d5d",flatShading:!0});function a([c,u],f,d){let h=new Ve(new et(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new M(.0475,.34,.055));let p=new Tt;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new Ve(new et(.64,.36,.055),new dn({color:"#182831"}));p.add(x);let m=document.createElement("canvas");m.width=512,m.height=96;let g=m.getContext("2d"),y=new li(m);y.colorSpace=pt;let w=new Ve(new en(.61,.095),new _t({map:y}));w.position.set(0,.116,.03),p.add(w);let b=.592/d.length,C=d.map(([D,P],T)=>{let S=new Ve(new et(b-.012,.155,.04),new dn({color:"#478086"}));S.position.set(-.296+b*(T+.5),-.045,.046),p.add(S),r.push(S),S.userData.touchWidth=b-.012;let E=document.createElement("canvas");E.width=208,E.height=172;let k=new li(E);k.colorSpace=pt;let N=new Ve(new en(b-.017,.139),new _t({map:k}));N.position.z=.0205,S.add(N);let X=-1/0;return S.userData.action=()=>{let V=performance.now();V-X<250||(X=V,P(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:D,context:E.getContext("2d"),texture:k}});function A(){g.fillStyle="#182831",g.fillRect(0,0,512,96),g.fillStyle="#ffe1a0",g.font="bold 38px system-ui",g.fillText(f,17,62,478);for(let D of C){let P=D.context;P.fillStyle="#386269",P.fillRect(0,0,208,172),P.fillStyle="#fff2d5",P.textAlign="center",P.font="bold 27px system-ui";let T=(typeof D.label=="function"?D.label():D.label).split("|");T.forEach((S,E)=>P.fillText(S,104,(T.length>1?68:97)+E*37,188)),D.texture.needsUpdate=!0}y.needsUpdate=!0}s.push(A)}function l(){for(let c of s)c()}return a(Sl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Bo[0])],["Boule",()=>t.spawn(1,Bo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Bo[0])],["Vider",t.clear]]),a(Sl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Bo[1])],["Sph\xE8re",()=>t.spawn(5,Bo[1])]]),a(Sl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Sl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function Fl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Lr=(n,e,t)=>n+(e-n)*t,Go=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function sd(n,e){let t=Math.floor(n),i=Math.floor(e),r=Go(0,1,n-t),s=Go(0,1,e-i);return Lr(Lr(Fl(t,i),Fl(t+1,i),r),Lr(Fl(t,i+1),Fl(t+1,i+1),r),s)}function gv(n,e){return sd(n,e)*.54+sd(n*2.07+3.4,e*2.07-6.1)*.26+sd(n*4.2+9,e*4.2)*.13+sd(n*8.6,e*8.6-13)*.07}function xv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),f=Math.max(0,c),d=f**.54,h=s.map((p,x)=>Lr(p,o[x],d));for(let p=0;p<1024;p++){let x=4*(p+l*1024),m=0,g=0,y=0;if(c>.025)if(n){let b=Fl(p+792,l+677);b>.9988&&(y=(b-.9988)*49e3*Go(.09,.3,c))}else{let[b,C]=r[p],A=2.8*u/(c+.16),D=b*A+3.6,P=C*A-8.1,T=gv(D,P),S=gv(D-.12,P-.09);m=Go(.49,.66,T)*Go(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(T-S)*5+(T-.54)*.8))}let w=n?1:Lr(.94,1,Go(.05,.34,c));i[x]=Lr(h[0],(139+115*g)*w,m)+y,i[x+1]=Lr(h[1],(154+100*g)*w,m)+y*.94,i[x+2]=Lr(h[2],(178+77*g)*w,m)+y*.86,i[x+3]=255}}let a=new _i(i,1024,512,Ln);return a.colorSpace=pt,a.wrapS=kn,a.magFilter=un,a.minFilter=Dn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function yv(){return{day:xv(!1),night:xv(!0)}}function od(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new li(i);return r.colorSpace=pt,r}function vv(n,e){let{day:t,night:i}=yv(),r=new Ve(new In(180,40,20),new _t({map:t,side:fn,fog:!1,toneMapped:!1}));n.add(r);let s=od(128,128,(_,L)=>{let j=_.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);j.addColorStop(0,"#fff8df"),j.addColorStop(.12,"#fff3bd"),j.addColorStop(.18,"rgba(255,225,144,.40)"),j.addColorStop(1,"rgba(255,220,144,0)"),_.fillStyle=j,_.fillRect(0,0,L,L)}),o=new Pa(new ro({map:s,blending:Qn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=mo,a.needsUpdate=!0;let l=new bo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ja("#daeaff","#88724c",2.25),u=new $a("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let f=new M,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(_){h=d[_]?_:0;let L=d[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,f.set(...L.xyz),u.position.copy(u.target.position).add(f),o.position.copy(f).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,r.material.map=h===2?i:t,r.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=m*[1,.56,.09][h]}function x(_){if(!u.castShadow)return;let L=u.target.position,j=Math.round(_.x/4)*4,K=Math.round(_.y/4)*4,Z=Math.round(_.z/4)*4;L.x===j&&L.y===K&&L.z===Z||(L.set(j,K,Z),u.position.copy(L).add(f))}let m=0;n.background=new De(d[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function y(_,L,j){let[,K,Z]=g[L],he=512;_.save(),_.scale(j/512,j/512),_.fillStyle=K,_.fillRect(0,0,he,he);let ue=L+19;function pe(){return ue=Math.imul(ue,1664525)+1013904223>>>0,ue/4294967296}if(_.fillStyle=Z,L===16){for(let ge=0;ge<16;ge++)for(let le=0;le<16;le++)(le+ge)%2===0&&_.fillRect(le*32,ge*32,32,32);_.fillStyle="#ff3957",_.fillRect(253,0,6,512),_.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let ge=L===15?32:64;_.globalAlpha=.48;for(let le=0;le<he;le+=ge){_.fillRect(0,le,he,L===8?3:2);for(let Se=-ge;Se<he;Se+=ge)_.fillRect(Se+le/ge%2*(L===2?ge/2:0),le,2,ge)}}else if([4,5,6,7,10,11,12].includes(L)){let ge=L===5?38:L===7?64:18;for(let le=0;le<ge;le++){_.strokeStyle=Z,_.globalAlpha=.08+pe()*.22,_.lineWidth=L===5?1+pe()*8:1+pe()*4;let Se=pe()*he,ke=L===5?.018:.009;_.beginPath();for(let ye=0;ye<=he;ye+=8){let we=Se+Math.sin(ye*ke+le)*(L===6||L===7?4:12+le%5*3)+(L===4?ye*.28:0);ye===0?_.moveTo(ye,we):_.lineTo(ye,we)}_.stroke()}}else{_.globalAlpha=.27;for(let ge=0;ge<120;ge++){let le=pe()*he,Se=pe()*he,ke=2+pe()*6;_.beginPath(),_.arc(le,Se,ke,0,Math.PI*2),_.fill()}}if(L!==16)for(let ge=0;ge<4400;ge++)_.globalAlpha=.05+pe()*.1,_.fillStyle=pe()>.5?Z:"#222324",_.fillRect(pe()*he,pe()*he,1+pe()*4,1+pe()*3);_.restore()}let w=new Set([0,2,4,5,8,15,16]),b=g.map(([_,L,j,K,Z,he],ue)=>{let pe=w.has(ue)?512:256,ge=od(pe,pe,Se=>y(Se,ue,pe));ge.wrapS=ge.wrapT=kn;let le=new gt({map:ge,roughness:K,metalness:Z,flatShading:!0,opacity:he,transparent:he<1,depthWrite:he===1});return le.name=_,le}),C=b.map(_=>_.map.image),A=512,D=b.map(_=>new dn({map:_.map,flatShading:!0,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite})),P={value:0},T={value:.24},S={value:null},E={value:0};function k(){S.value?.dispose(),S.value=od(512,512,(_,L)=>{_.fillStyle="#ffffff",_.fillRect(0,0,L,L);let j=L/52,K=L/64;for(let Z of N){if(!Z.position||!Z.half||Z.position.y+Z.half.y<.22)continue;let he=(Z.position.x+26)*j,ue=(Z.position.z+54)*K,pe=Math.min(55,Z.half.x*j+5),ge=Math.min(72,Z.half.z*K+6);_.save(),_.translate(he+Z.half.y*j*.2,ue+Z.half.y*K*.24),_.scale(pe,ge);let le=_.createRadialGradient(0,0,.15,0,0,1);le.addColorStop(0,"rgba(22,37,65,.54)"),le.addColorStop(.58,"rgba(36,54,76,.29)"),le.addColorStop(1,"rgba(38,48,57,0)"),_.fillStyle=le,_.fillRect(-1,-1,2,2),_.restore()}})}for(let _ of[...b,...D])_.onBeforeCompile=L=>{L.uniforms.uFocusAmount=P,L.uniforms.uFocusRadius=T,L.uniforms.uLabLightmap=S,L.uniforms.uLabBakedStrength=E,L.vertexShader=`varying vec3 vLabPosition;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),L.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+L.fragmentShader,L.fragmentShader=L.fragmentShader.replace("#include <map_fragment>",`
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
      `)},_.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],X=[];function V(_,L,j,K,Z,he,ue,pe=0,ge=0,le=1,Se=1,ke=!1){let ye=new Ve(ke?new et(Z,he,ue):rd(Z,he,ue),b[pe]);ye.position.set(L,j,K),ye.rotation.x=ge,ye.receiveShadow=!0,ye.castShadow=!0,n.add(ye);let we=new M(Z/2,he/2,ue/2),qe={mesh:ye,position:ye.position,quaternion:ye.quaternion,half:we,min:we.clone().negate(),friction:le,gravity:Se,name:_,type:pe,shape:mi(we)};return N.push(qe),qe}let W=cy.map(({name:_,bounds:L,type:j=0,friction:K=.78,gravity:Z=1})=>{let{xMin:he,xMax:ue,zMin:pe,zMax:ge}=L;return V(_,(he+ue)/2,-.33,(pe+ge)/2,ue-he,.66,ge-pe,j,0,K,Z)});for(let _ of Object.values(dy))for(let L of _)V(...L);let{xMin:J,xMax:U,zMin:ie,zMax:te}=ay;V("But\xE9e arri\xE8re",0,1.35,ie+.4,U-J,2.7,.6,2),V("But\xE9e ouest",J+.3,1.05,(ie+te)/2,.6,2.1,te-ie,2),V("But\xE9e est",U-.3,1.05,(ie+te)/2,.6,2.1,te-ie,2);let{xMin:ce,xMax:_e,zMin:Ae,zMax:Ie}=Fo.hills.bounds,Pe=_e-ce,ne=Ie-Ae,re=16,xe=64,Ee=new en(Pe,ne,re,xe).rotateX(-Math.PI/2).translate(ce+Pe/2,0,Ae+ne/2),Me=Ee.attributes.uv;for(let _=0;_<Me.count;_++)Me.setXY(_,Me.getX(_)*Pe/2.6,Me.getY(_)*ne/2.6);let Oe=Ee.attributes.position,Y;function v(_){if(Y===_)return;Y=_;let L=Y*.017;for(let j=0;j<Oe.count;j++){let K=Oe.getX(j),Z=Oe.getZ(j),he=Math.sin(Math.PI*Fe.clamp((K-ce)/Pe,0,1)),ue=Math.min(1,(Z-Ae)*.48,(Ie-Z)*.48),pe=.93+.56*Math.sin(Z*.36+L)+.32*Math.cos(K*.67+Z*.26+L*1.4)+.19*Math.sin(Z*.81+L*.67);Oe.setY(j,Math.max(0,he*ue*pe))}Oe.needsUpdate=!0,Ee.computeVertexNormals(),Ee.computeBoundingSphere()}v(ly);let F=new Ve(Ee,b[3]);F.userData.editorAssetId="lab-hill",F.receiveShadow=F.castShadow=!0,n.add(F);let O=(_,L)=>{let j=Fe.clamp((_-ce)/Pe*re,0,re-1e-6),K=Fe.clamp((L-Ae)/ne*xe,0,xe-1e-6),Z=Math.floor(j),he=Math.floor(K),ue=j-Z,pe=K-he,ge=re+1,le=he*ge+Z,Se=Oe.getY(le),ke=Oe.getY(le+1),ye=Oe.getY(le+ge),we=Oe.getY(le+ge+1);return ue+pe<=1?Se+(ke-Se)*ue+(ye-Se)*pe:we+(ye-we)*(1-ue)+(ke-we)*(1-pe)};N.push({heightfield:!0,mesh:F,editorAssetId:"lab-hill",height:O,...Fo.hills.bounds,friction:.81,gravity:1});function B(_,L,j,K,Z=1.45){let he=od(384,72,(pe,ge,le)=>{pe.fillStyle="#202a32",pe.fillRect(0,0,ge,le),pe.fillStyle=K,pe.font="bold 31px system-ui",pe.textAlign="center",pe.fillText(_,ge/2,48,ge-20)}),ue=new Ve(new en(3.2,.6),new _t({map:he,side:an}));ue.position.set(L,Z,j),n.add(ue),X.push(ue)}for(let _ of Object.values(Fo)){B(_.name.toLocaleUpperCase("fr"),..._.sign,_.color);let{xMin:L,xMax:j,zMin:K,zMax:Z}=_.bounds,he=new La(new $e().setFromPoints([new M(L,.025,K),new M(j,.025,K),new M(j,.025,Z),new M(L,.025,Z)]),new Mi({color:_.color,transparent:!0,opacity:.72}));n.add(he),X.push(he)}B("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),B("MURS HAUTS",3,-31,"#e8d2ff"),B("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let z=new gt({color:"#c8e6ed",metalness:1,roughness:.16}),H=new Ve(new Ft(.54,2),z);H.userData.editorAssetId="chrome-sphere",H.position.set(Wh.x,Wh.y,Wh.z),H.castShadow=!0,n.add(H);let ee=g.map((_,L)=>{let{x:j,z:K}=hy(L);return V("\xC9chantillon "+g[L][0],j,.325,K,.65,.65,.65,L,0,1,1,!0).mesh}),se=new on(1,12).rotateX(-Math.PI/2),me=new _t({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Ce(_){let L=new Ve(se,me);return L.scale.setScalar(_),n.add(L),L}function I(_,L,j,K,Z,he,ue,pe){let ge=L>=3;e.shadowMap.enabled=ge,u.castShadow=ge,me.opacity=L===2?.17:.11,E.value=pe?.38+j*.04:0;let le=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Se=13+L*1.2;Object.assign(u.shadow.camera,{left:-Se,right:Se,top:Se,bottom:-Se}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==le&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(le,le)),o.visible=Z,ue!==A&&(A=ue,b.forEach((ye,we)=>{let qe=ye.userData.texture??ye.map,q=w.has(we)?ue:Math.min(256,ue);if(qe.image.width===q)return;let be=document.createElement("canvas");be.width=be.height=q;let Re=be.getContext("2d");q>512?y(Re,we,q):Re.drawImage(C[we],0,0,q,q);let Ne=new li(be);Ne.colorSpace=qe.colorSpace,Ne.wrapS=qe.wrapS,Ne.wrapT=qe.wrapT,Ne.repeat.copy(qe.repeat);for(let ve of[ye,D[we]])ve.userData.texture=Ne,ve.map=Ne,ve.needsUpdate=!0;qe.dispose()}));let ke=_>=4;for(let ye of N)ye.mesh?.isMesh&&!ye.zone&&(ye.mesh.material=ke?b[ye.type]:D[ye.type]);F.material=ke?b[3]:D[3];for(let ye=0;ye<ee.length;ye++)ee[ye].material=ke?b[ye]:D[ye];b.forEach((ye,we)=>{for(let qe of[ye,D[we]])qe.userData.texture||(qe.userData.texture=qe.map),qe.map=he?qe.userData.texture:null,qe.color.set(he?"#ffffff":g[we][1]),qe.needsUpdate=!0}),m=K?.21+j*.067:0,z.metalness=K?.95:.1,z.roughness=K?.13:.46,r.visible=_>=2,p(h)}return{boxes:N,floors:W,probe:H,display:ee,visual:I,shadow:Ce,setTimeOfDay:p,centerShadows:x,get hillSeed(){return Y},setHillSeed:v,bakeLightmap:k,mapMaterial:(_,L)=>L>=4?b[_]:D[_],builtObjects:[...N.map(_=>_.mesh).filter(_=>_?.isObject3D),H,...X],materials:[...b,...D],focus(_,L,j){P.value=_?L*.75:0,T.value=.07+j*.058}}}var t_="R38.5",Fr=document.getElementById("game");Fr instanceof HTMLCanvasElement||(Fr=document.createElement("canvas"),Fr.id="game",Fr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Fr));var ws=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ze;try{Ze=new uh({canvas:Fr,antialias:!ws,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ze.xr.enabled=!0;Ze.xr.setReferenceSpaceType("local-floor");Ze.shadowMap.type=el;Ze.shadowMap.autoUpdate=!1;var _v=-1/0;Ze.toneMapping=Mu;Ze.toneMappingExposure=1.15;var At=new Kr;At.fog=new Ca("#a6d4ea",55,135);var mt=new Tt,bd=new Tt,Jt=new Yt(70,1,.035,210);mt.add(bd);bd.add(Jt);At.add(mt);var St=vv(At,Ze),t2=fv(Ze),fd=dv();At.add(fd);var n2=pv(St.probe),G=jy(ws),i2={...G};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(G.stepVolume=n)}catch{}var Or=tv();for(let n of["pointerdown","keydown"])addEventListener(n,Or.unlock,{passive:!0});var Xo=nv(At),Ni=qm(),Qp=0,Mv=0,bv=0;addEventListener("error",n=>Ni.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Ni.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var vs={normal:new M,surface:null},pd=[.18,.17,.105].map(n=>({radius:n,position:new M})),pm=new M(No.x,No.y,No.z);mt.position.copy(pm);var jt=new M,Ho=new M,Pt=new M,Sv=new M,$n=new M,_n=new M,wv=new M,Qo=new M,ir=new M,Tv=new M,Ur=new M,Av=new M,Nl=new M,r2=.105,ad=new M,md=!1,Ii=!1,mm=0,gm=null,Vl=[],xm=100,Wt=new M(0,1,0),cr=new He,Mt=0,ar=0,Ts=0,ti=0,Ss=NaN,n_={armed:!0},$p=0,_s=0,Kp=0,ld=0,Zo=0,jo=0,Jo=0,tn=G.quality,kl=72,Pi=0,qt=!1,i_="left",ct=new URLSearchParams(location.search).has("room")?5:0,ym=0,vm=0,_m=0,Ut=!0,Ev=0,s2=[],cd=[],zr=St.boxes,o2=new Ft(1,0),r_=1+Math.floor(Math.random()*(dh.length-1)),s_=fh(r_),{hand:a2,fur:l2}=s_;function c2(n,e,t,i,r,s,o,a){let l=new Ve(o2,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Sd=zp(localStorage),u2=Sd.models.length?"|atelier-"+ds(JSON.stringify(Sd)):"",Li=Ty(Sd)??s_.createHead();Li.visible=!1;At.add(Li);var Yo=new M,gd=new He,Cv=new M,h2=new M,Rv=new Kt(0,0,0,"YXZ"),am=new M,em=new M,sr=new fe,Pv=new He,Wl=9.81,o_=null,tm=new He,Iv=[null,null];function wd(){return .24+G.arms*.036}function d2(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Fe.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Fe.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Fe.lerp(s[2],i,r),n.skin.pose(s,!G.body)}var Ct=["left","right"].map(n=>{let e=gh(n,a2,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new He},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new He,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),Br=new ed(M,Ct,Qx),a_=xh(l2,Ct.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ct){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Ui=a_.mesh;At.add(Ui);function f2(n,e){if(G.body){tm.copy(Ui.quaternion).invert();for(let t=0;t<Ct.length;t++){let i=Ct[t];Iv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Ui.position).applyQuaternion(tm),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(tm))}a_.pose(Iv,wd(),n,e,G.hands)}}var An=qh(),l_=[0,1,2,3,4,5],c_=[7,8,9,10,11,12,13,14],Ql=15,Dv=mi(new M(.13,.088,.115)),p2=new et(.26,.176,.23),m2=new gt({color:"#536771",roughness:.36,metalness:.28});An[Ql]={name:"Cam\xE9ra du spectateur",geo:p2,material:m2,shape:Dv,lowShape:Dv,mass:1.2};var{props:g2,animate:x2}=Qy(),y2=wy(Sd).slice(0,36),Mm=[],ql=[];function u_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=pi(t??r.geo,i);e.push(An.length),An.push({...r,shape:s,lowShape:s})}}u_(g2,Mm);u_(y2,ql);var h_=[...l_,...c_,...Mm,...ql];An[8].properties={supportWhileHeld:!0};An[11].properties={supportWhileHeld:!0};function v2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of An)n&&(n.supportAxis=v2(n));function _2(n){let e=new Ve(new Zt(.058,.074,.1,12).rotateX(Math.PI/2),new gt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Ve(new on(.048,12),new _t({color:"#7bd7ed",side:an}));t.position.z=-.203,n.add(t);let i=new Ve(new et(.045,.013,.012),new _t({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function d_(n,e=!1){let t=An[n];if(!t)return null;let i=new Ve(t.geo,e?Pl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Ql&&_2(i),i}var dt=null,bt=[],Lv=[],Vr={held:null},Ko=new Map,or=0,M2=1,Bl=new He,Xl=new He,Ol=new M,Td=new M,Ms=new M,f_=new M,p_=new M;function b2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Td.set(0,0,-1).applyAxisAngle(Wt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(Ol.copy(n).addScaledVector(Td,s),Ol.y+=.15,!Ml(n,Ol,Math.min(.2,t*.5),zr,f_,p_)&&!bt.some(o=>o.mesh.position.distanceToSquared(Ol)<(t+o.radius+.07)**2))return Ol}}return null}function ea(n,e,t,i=!1){let r=An[n];if(!r)return null;if(!e&&(t?Ms.set(t.x,t.y,t.z):Ze.xr.isPresenting?Ms.copy(Pt):Jt.getWorldPosition(Ms),e=b2(Ms,t?.yaw??ar,r.shape.radius),!e))return i||ei("Aucun espace libre pour cet objet."),null;let s=d_(n);s.position.copy(e),At.add(s);let o=G.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:M2++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:G.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new He,shadow:St.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Ql,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),bt.push(a),bl(a,St.boxes),Ni.record("object-spawn",{model:r.name,typeId:n,count:bt.length}),a}function m_(){for(let n of Ct)gi(n,!1);gi(Vr,!1);for(let n of Ko.values())gi(n,!1)}function Ud(){m_();for(let n of bt)if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();bt.length=0,Ko.clear()}function g_(){if(dt?.assetLayer)return;let n=new Set(dt?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);fy((e,t)=>{n.has(Fp[e])||ea(e,t)})}g_();function gi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+G.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function $l(){m_();for(let n of bt)kd(n),n.frozen=!!n.spec.properties?.frozen}function ur(){Ss=NaN,ti=0,Fd.reset(),mt.position.copy(pm),Mt=Fe.degToRad(dt.yaw),Ts=0,mt.rotation.y=Mt,jt.set(0,0,0),n_.armed=!0,Ii=!1,vs.normal.set(0,0,0),vs.surface=null,md=!1,Br.reset(),Or.reset(),sr.set(0,0);for(let n of Ct)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,gi(n,!1)}$l();function x_(){return G.auto||ws&&!Ze.xr.isPresenting}function Ad(){return x_()?Math.min(G.shadowQuality,tn):G.shadowQuality}function Yl(){return x_()?Math.min(G.lightQuality,tn):G.lightQuality}function Bi(){let n=G.texturePower;St.visual(tn,G.shadows?Ad():0,Yl(),G.reflections,G.bloom,G.textures,2**(n-1),G.lightmap),dt.refreshMaterials?.(),Ze.shadowMap.needsUpdate=!0,St.setTimeOfDay(je.remoteLight??G.timeOfDay-1),lm=Rd.slice(0,Yl()>=8?3:Yl()>=4?2:1),Nm.value=G.shaderMode-1;let e=Ze.xr.isPresenting&&Ze.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(G.focus&&!e,G.focusStrength,G.focusSize),Ze.toneMappingExposure=.58+G.exposure*.114,X_.value=.55+G.contrast*.09,Y_.value=G.saturation*.2,Z_.value=(G.warmth-5)*.022,Ze.xr.setFoveation(G.focus?Fe.clamp((G.focusStrength+1)*.105+(5-G.focusSize)*.028+(G.auto?(7-tn)*.045:0),0,1):0),Ze.xr.isPresenting||Kl(),Ut=!0,Rm.redraw()}var Uv=0,Fv=0,Nv=0;function Kl(){if(Ze.xr.isPresenting)return;let n=Math.max(1,Fr.clientWidth||innerWidth),e=Math.max(1,Fr.clientHeight||innerHeight),t=Wy(tn,devicePixelRatio,ws);t!==Nv&&(Ze.setPixelRatio(t),Nv=t),(n!==Uv||e!==Fv)&&(Ze.setSize(n,e,!1),Uv=n,Fv=e),Jt.aspect=n/e,Jt.fov=G.viewFov,Jt.updateProjectionMatrix()}addEventListener("resize",Kl);globalThis.visualViewport?.addEventListener("resize",Kl);function S2(n){Object.assign(G,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},nd[n]),tn=G.quality,jo=Jo=Zo=0,Bi()}var As=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",ur]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Dm]]],["Rendu",[]]],bm=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Sm(){return ct===2?bm[ym][1]:ct===3?b_[vm][1]:ct===4?Am[_m][1]:As[ct][1]}function y_(n){ct=n,Pi=0,Ut=!0}var Ed=null,v_=[],xd=0,Gl=0,Cd=null,__=!1,wm=0,Tm=0,M_={},Rd=Array.from({length:3},()=>{let n=new Ja("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),lm=Rd,Pd=new M;function Bv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Pd);if(t>34**2)return;let i=lm[0];for(let r of lm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function w2(n){n?Jt.getWorldPosition(Pd):Pd.copy(Pt);for(let t of Rd)t.mesh=null,t.distance=1/0;if(n)je.forEachReplica(Bv);else if(G.objects)for(let t of bt)t.materialStyle===3&&Bv(t.mesh);let e=20+Yl()*.75;for(let{light:t,mesh:i}of Rd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function ec(){Ni.record("capture",{mode:Ze.xr.isPresenting?"VR":"PC"});let n=Ni.snapshot(Ze.xr.isPresenting?"VR":"PC");Ed={game:"Gorilla Lab",version:t_.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:Ze.xr.isPresenting?"VR":"PC",sessionHadVR:__,settings:{...G},qualityActive:tn,diagnostics:n,debugGeometry:{...Xo.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:Ze.getPixelRatio()},haptics:Ct.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:o_,audio:{volume:G.stepVolume,enabled:G.stepAudio,clipsPlayed:Or.count,state:Or.state},performance:{fps:_s,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:Ze.xr.isPresenting?Cd:null,previousVR:Cd,renderer:M_,terrainSeed:St.hillSeed,map:dt.active?{name:dt.name,pieces:dt.nodes}:null,objects:{physics:{...vl},total:bt.length,held:bt.filter(e=>e.owner).length,frozen:bt.filter(e=>e.frozen).length},cloud:{role:je.role,connected:je.connected,replicas:je.replicaCount,...je.stats},locomotion:{trackedFrames:Tm,contactFrames:wm,launchCount:mm,lastLaunch:gm,standingHeight:Number.isFinite(Ss)?Ss:null,viewOffset:ti}},document.querySelector("#download-report").disabled=!1,Ut=!0}function T2(){Ed||ec();let n=URL.createObjectURL(new Blob([JSON.stringify(Ed,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=T2;document.querySelector("#capture-report").onclick=ec;var ta=document.createElement("input");ta.id="report-note";ta.maxLength=500;ta.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";ta.setAttribute("aria-label","Sc\xE9nario du rapport");ta.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(ta);var Zl=document.createElement("p");Zl.setAttribute("aria-live","off");document.querySelector("#settings").after(Zl);As[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",ec]);var A2=Array.from({length:Math.ceil(ql.length/8)},(n,e)=>["Atelier"+(ql.length>8?" "+(e+1):""),ql.slice(e*8,e*8+8)]),b_=[["Basiques",l_],["D\xE9taill\xE9s",c_],["Anim\xE9s",Mm],...A2].map(([n,e])=>[n,[...e.map(t=>[An[t].name,()=>Lm(t)]),["Tout retirer",Nd]]]);As.push(["Spawn",[]]);var Am=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{dt.blank(),G.mapEdit=!0}],["Annuler placement",()=>dt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>dt.recenter(Pt.x,mt.position.y,Pt.z,ar)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{dt.reset(),G.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>qv(!1)],["Utiliser comme t\xEAte",()=>qv(!0)]]]];As.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",w_],["Tester vibration droite",T_],["\xC9couter un pas",A_],["Capturer un rapport",ec]]]);function S_(n){let e=Ct.find(i=>i.side===n),t=e?.valid&&Wp(e,.45,65);Ni.record("haptic-test",{side:n,supported:!!t}),ei(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function w_(){S_("left")}function T_(){S_("right")}function A_(){Or.unlock().then(()=>Or.play(G.stepVolume))}function E_(){try{localStorage.setItem("gorilla-lab-step-volume",String(G.stepVolume))}catch{}}var E2=document.querySelector("#section"),ud=document.querySelector("#settings"),C2=document.querySelector("#readings"),Em=[1,.75,.5,.25];function Mn(n,e){if(Ni.record("setting",{key:n,step:e,previous:G[n]}),n==="mirrorQuality"){G.mirrorQuality=Fe.clamp(G.mirrorQuality+e,1,3),Ut=!0;return}if(n==="debugSpeed"){G.debugSpeed=Fe.clamp(G.debugSpeed+e,1,Em.length),Br.reset(),Ut=!0;return}if(n==="stepVolume"){G.stepVolume=Fe.clamp(G.stepVolume+e,1,10),E_(),Ut=!0;return}if(n==="viewFov"){G.viewFov=Fe.clamp(G.viewFov+5*e,50,105),Kl(),Ut=!0;return}if(n==="vrFov"){G.vrFov=Fe.clamp(G.vrFov+5*e,55,100),Ut=!0;return}if(n==="shaderMode"){G.shaderMode=(G.shaderMode-1+e+td.length)%td.length+1,Nm.value=G.shaderMode-1,Ut=!0;return}if(n==="timeOfDay"){if(je.role==="player"){let i=((je.remoteLight??G.timeOfDay-1)+e+3)%3;je.sendAction({type:"world",mode:1,typeId:i})}else G.timeOfDay=(G.timeOfDay-1+e+3)%3+1;Bi();return}let t={mapMode:9,mapShape:5,mapMaterial:Xp.length,mapSurface:4,mapTurn:8,mapTexture:$h.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];G[n]=(G[n]-1+e+i)%i+1,Ut=!0;return}if(n==="mapEdit"&&!G.mapEdit&&!dt.active&&dt.load(ov(St.boxes)),n==="toolMode"){G.toolMode=(G.toolMode-1+e+ys.length)%ys.length+1,Ze.xr.isPresenting||ei("Outil \xB7 "+ys[G.toolMode-1]),Ut=!0;return}if(n==="preset"){let i=Object.keys(nd);G.preset=(G.preset-1+e+i.length)%i.length+1,S2(i[G.preset-1]);return}if(typeof G[n]=="boolean"?G[n]=!G[n]:G[n]=Fe.clamp(G[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ct)i.valid=!1,i.surface=null;if(n==="quality"&&(G.auto=!1,tn=G.quality),n==="auto"&&!G.auto&&(tn=G.quality),n==="movement"||n==="collisions")for(let i of Ct)i.surface=null;if(n==="objects"&&!G.objects&&$l(),n==="blasterActive"&&G.blasterActive&&(G.toolActive=!1),n==="toolActive"&&G.toolActive&&(G.blasterActive=!1),!G.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ct)i.held?.toolHold&&gi(i,!1);Im(!1)}n==="preciseHitboxes"&&C_(),Bi()}function C_(){for(let n of bt)n.precise=G.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||bl(n,St.boxes)}function R_(){let n=(ct===2?bm:ct===4?Am:null)?.flatMap(e=>e[1])??Sm();for(let[,e]of n)typeof e=="string"&&(G[e]=i2[e]);ct===6&&(E_(),Br.reset()),ct===0&&ur(),ct===1&&(C_(),$l()),ct===3&&Nd(),ct===2&&(tn=G.quality),Bi()}function zl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),na(),Ut=!0},t}function P_(n){return n==="preciseHitboxes"?G[n]?"High":"Low":G[n]?"Actif":"Coup\xE9"}function Cm(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][G[n]-1];if(n==="debugRange")return G[n]*5+" m";if(n==="debugBudget")return G[n]*1e3+" segments";if(n==="debugSpeed")return je.role?"\xD71 en ligne":"\xD7"+Em[G.debugSpeed-1];if(n==="stepVolume")return G.stepVolume+"/10";if(n==="viewFov")return G.viewFov+"\xB0";if(n==="vrFov")return G.vrFov===100?"Natif":G.vrFov+" %";if(n==="mapTexture")return G[n]===1?"Aucune":$h[G[n]-2];if(n==="terrainResolution")return[8,16,32,48][G[n]-1]+"\xB2";if(n==="shaderMode")return td[G.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=G[n],t=n==="shadowQuality"?Ad():Yl();return t===e?e+"/10":e+"/10 \xB7 "+t+(G.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][je.remoteLight??G.timeOfDay-1]:n==="mapMode"?N_[G.mapMode-1]:n==="mapShape"?N2[G.mapShape-1]:n==="mapSurface"?B2[G.mapSurface-1]:n==="mapMaterial"?Xp[G.mapMaterial-1]:n==="mapTurn"?(G.mapTurn-1)*45+"\xB0":n==="toolMode"?ys[G.toolMode-1]:n==="preset"?Object.keys(nd)[G.preset-1]:n==="texturePower"?[2**(G[n]-1),2**(G[n]-1)].join("\xD7"):G[n]}function cm(){return ct===2?bm:ct===3?b_:Am}function I_(){return ct===2?ym:ct===3?vm:_m}function D_(n){ct===2?ym=n:ct===3?vm=n:_m=n}function L_(n){return n===w_||n===T_?"Tester":n===ec?"Capturer":n===A_?"\xC9couter":n===Ud||n===Nd?"Vider":n===ur||n===Dm?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function na(){if(E2.textContent=As[ct][0],U_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),ud.replaceChildren(),R2.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),cm().forEach(([e],t)=>{let i=zl(e,()=>D_(t));i.setAttribute("aria-pressed",String(I_()===t)),n.append(i)}),ud.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",ud.append(n)}for(let[n,e]of Sm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(zl(L_(e),e)):typeof G[e]=="boolean"?i.append(zl(P_(e),()=>Mn(e,1))):i.append(zl("\u2212",()=>Mn(e,-1)),document.createTextNode(" "+Cm(e)+" "),zl("+",()=>Mn(e,1))),t.append(i),ud.append(t)}}}var U_=document.querySelectorAll("[data-page]"),R2=document.querySelector("#cloud-access");U_.forEach((n,e)=>n.onclick=()=>{y_(e),na()});document.querySelector("#restore").onclick=()=>{R_(),na()};na();function F_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new li(s);a.colorSpace=pt;let l=new Ve(new en(t,i),new _t({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var pn=F_(640,652,.84,.86,At);pn.mesh.visible=!1;var Kn=F_(416,84,.32,.065,At);Kn.mesh.visible=!1;var Wo=new Yt(75,1,.07,20),Tn=new ll(new en(1.7,1.95),{color:16054015,textureWidth:ws?128:256,textureHeight:ws?128:256,clipBias:.004,multisample:0}),Ov=new M,hd=new M,zv=new M,Vv=new M,nm=new He,P2=new M,I2=new He().setFromAxisAngle(Wt,Math.PI),D2=new M(Pr.x,Pr.y,Pr.z);Tn.position.set(Pr.x,Pr.y,Pr.z);Tn.rotation.y=Math.PI;At.add(Tn);var tc=new Ve(new et(1.8,2.03,.1),new dn({color:"#344650"}));tc.userData.editorAssetId="lab-mirror";tc.position.copy(Tn.position).z+=.064;At.add(tc);var L2=Tn.onBeforeRender.bind(Tn);Tn.onBeforeRender=()=>{};Tn.visible=!1;var qo=-1/0,kv=null,Gv=0,um=0;function U2(n,e){if(um=0,Tn.visible=!1,!G.reflections||G.mirrorQuality===1){qo=-1/0;return}if(Wo.position.copy(Pt),e){let u=e.transform.orientation;Wo.quaternion.set(u.x,u.y,u.z,u.w).premultiply(gd.setFromAxisAngle(Wt,Mt))}else Jt.getWorldQuaternion(Wo.quaternion);zv.set(0,0,-1).applyQuaternion(Wo.quaternion);let t=null,i=3;function r(u,f,d){hd.subVectors(f,Pt);let h=hd.length();Ov.set(0,0,1).applyQuaternion(d),!(h>=i||hd.dot(Ov)>=-.15||hd.dot(zv)<=.66*h)&&(t=u,i=h,Tn.position.copy(f),Tn.quaternion.copy(d))}dt.usesBuiltInMirror&&r(tc,D2,I2);for(let{mesh:u}of dt.mirrors()){let{mirrorSize:f}=u.userData;nm.copy(u.quaternion),Vv.copy(u.position).add(P2.set(0,0,f.d/2+.002).applyQuaternion(nm)),r(u,Vv,nm)}if(!t){qo=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};Tn.scale.set(s/1.7,o/1.95,1),Tn.visible=!0,kv!==t&&(kv=t,qo=-1/0);let a=G.mirrorQuality,l=a===3?ws||Ze.xr.isPresenting?256:768:128;if(Gv!==l&&(Tn.getRenderTarget().setSize(l,l),Gv=l,qo=-1/0),n-qo<(a===3?45:110))return;qo=n,Wo.updateMatrixWorld(!0),Tn.updateMatrixWorld(!0),Li.visible=G.body;let c=performance.now();try{L2(Ze,At,Wo)}finally{Li.visible=!1}um=performance.now()-c}var Fi=new Zi,qn=new M,Nn=new M,dd=new M,Hv=new M,Hl=null,yd=null,vd=null,F2=new Set(At.children),Rm=mv(At,St.boxes,{spawn:Lm,clear:Nd,resetPlayer:ur,resetObjects:Dm,quality:()=>tn+"/10",resolution:()=>G.resolution+"/10 \xB7 relancer VR",textureSize:()=>Cm("texturePower"),qualityNext:()=>{G.quality>=10&&(G.quality=0),Mn("quality",1)},resolutionNext:()=>{G.resolution>=10&&(G.resolution=0),Mn("resolution",1)},textureNext:()=>{G.texturePower>=12&&(G.texturePower=0),Mn("texturePower",1)},hitbox:()=>Mn("preciseHitboxes",1),movement:()=>Mn("movement",1)}),N_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],N2=["Bloc","Rampe","Mur","Dalle","Terrain"],B2=["Normale","Glace","Caoutchouc","Lune"],Wv=new Map;function O2(){for(let n of dt.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=Wv.get(e);if(t===void 0){let r=zo(n.model);r.scale(n.w,n.h,n.d);let s=Al(n.model,new M(n.w,n.h,n.d)),o=pi(s);s.dispose(),t=An.length,An.push({id:n.model.id,name:n.model.name,geo:r,material:Dr(n.model),shape:o,lowShape:o,assetId:n.model.assetId??null,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Fe.clamp(n.w*n.h*n.d*9,.18,12)}),Wv.set(e,t)}let i=ea(t,new M(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Fe.degToRad(n.pitch),Fe.degToRad(n.yaw),Fe.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}dt=hv({scene:At,arena:St,boot:pm,onReset:n=>{Ud(),ur(),Mt=Fe.degToRad(n),dt.builtIn&&g_(),O2()},onVisual:Bi,getLevel:()=>tn,defaultObjects:[...St.builtObjects,...At.children.filter(n=>!F2.has(n)),tc]});var je=Ax({scene:At,currentMap:()=>(dt.signature||"arena-r25-"+St.hillSeed)+u2,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=d_(n,!0);return e&&ia(e.material),e},onAction:W2,onStatus:()=>{ct===5&&(Ut=!0)},onShot:n=>Fd.receiveShot(n,je.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??G.timeOfDay-1),Ut=!0,Ze.xr.isPresenting||na()}});function qv(n){let e=dt.modelPieces();if(!e.length||e.length>Ei.parts){ei("Compose un mod\xE8le de 1 \xE0 "+Ei.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=zp(localStorage);if(t.models.length>=Ei.models){ei("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),r=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:G.modelGrab,frozen:G.modelFrozen,collidable:G.modelCollidable,supportWhileHeld:G.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?sv[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Op,JSON.stringify(xs(t))),ei("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ei("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var im=new Map;function z2(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][G.mapShape-1],e=ko({detail:[8,16,32,48][G.terrainResolution-1],amplitude:(G.terrainAmplitude-1)*.34,frequency:.05+G.terrainFrequency*.025,seed:G.terrainSeed,grass:(G.terrainGrass-1)/9,shrub:(G.terrainShrub-1)/9}),t=G.mapTexture-2;return t>=0&&!im.has(t)&&im.set(t,ky(t).toDataURL("image/webp",.83)),Ll({...n,material:G.mapMaterial-1,yaw:G.mapShape===5?0:(G.mapTurn-1)*45,...Yp[Object.keys(Yp)[G.mapSurface-1]],texture:im.get(t)??null,terrain:G.mapShape===5||G.mapMode===9?e:null,brushRadius:.5+G.brushRadius*.5,brushStrength:G.brushStrength*.15})}function V2(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Wt,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Wt,Mt),dt.edit(qn,Nn,i,{mode:G.mapMode,piece:z2(),head:Pt,feet:mt.position.y}),i&&(Ut=!0)}function k2(n){if(!dt.builtIn||!n.valid||n.held||n.remoteHeld||qt)return;let e=null;for(let t of Rm.targets)if(t.getWorldPosition(Hv),!(n.mesh.position.distanceToSquared(Hv)>.11**2)&&(t.worldToLocal(dd.copy(n.mesh.position)),Math.abs(dd.x)<t.userData.touchWidth*.5+.025&&Math.abs(dd.y)<.095&&Math.abs(dd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function hm(n,e,t){if(!dt.builtIn)return;Fi.set(n,e),Fi.far=5.5;let i=Fi.intersectObjects(Rm.targets,!1);Fi.far=1/0;let r=i[0];r&&(Es.visible=!0,Es.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),na()))}var Xv=new M,B_=new He,Pm=yh(At),Fd=Yy({scene:At,rig:mt,camera:Jt,arena:St,objects:bt,spectator:je}),tD=Pm.mesh,_d=new M,lr=new He,Id=new M,$o={mode:0,position:Id,quaternion:lr,end:_d},Yv=new M,G2=new M,Zv=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Dd=new M,H2={position:Id,quaternion:lr,pressure:[.1,.66,.08]},rm=new M,Ld=new He;function Im(n){Vr.held&&gi(Vr,n)}function O_(n,e){if(je.role==="pc"){ei("Rejoins le salon en joueur pour modifier les objets.");return}if(je.role!=="player"){e();return}je.sendAction({type:"world",mode:3,typeId:n})||ei("Attends la connexion \xE0 l\u2019h\xF4te.")}function Nd(){O_(0,Ud)}function Dm(){O_(1,$l)}function Lm(n,e=null){if(G.objects=!0,je.role==="pc"){ei("Commence par rejoindre le salon en joueur.");return}je.role==="player"?je.sendAction({type:"spawn",typeId:n})||ei("Attends la connexion \xE0 l\u2019h\xF4te."):ea(n,e)}function W2(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(G.timeOfDay=n.typeId+1,Bi()):n.mode===3&&[Ud,$l][n.typeId]?.();return}if(n.type==="spawn"){h_.includes(n.typeId)&&(G.objects=!0,ea(n.typeId,null,e));return}let t=bt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=Ko.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new He},Ko.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?je.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),gi(o,!0)}return}if(!G.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ms.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Gh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Ml(l,t.mesh.position,.01,zr,f_,p_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Um(t,s,o,Fe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Xl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Xl))}}function q2(n){if(Ze.xr.isPresenting)for(let t of Ct)t.valid&&t.held&&sm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Ko){let r=je.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){gi(i,!1),Ko.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ms.copy(s?.position??r.avatar?.tool?.position??r),Td.set(0,0,-1).applyQuaternion(i.controllerRotation),sm(o,Ms,Td,i.controllerRotation,n)}let e=Vr.held;e&&(Jt.getWorldPosition(Dd),Jt.getWorldDirection(Xv),Jt.getWorldQuaternion(lr),sm(e,Dd,Xv,lr,n))}function sm(n,e,t,i,r){n.toolHold?rm.copy(e).addScaledVector(t,n.toolDistance):rm.copy(n.offset).applyQuaternion(i).add(e),Ld.multiplyQuaternions(i,n.relativeRotation),$x(n,rm,Ld,zr,r)}function z_(n){return n.customMaterial||(n.mesh.material=Pl(n.mesh.material),n.customMaterial=!0,ia(n.mesh.material)),n.mesh.material}function X2(n){let e=z_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function V_(n,e,t){Fi.set(n,e),Fi.far=9;let i=Fi.intersectObjects(t,!1)[0];return Fi.far=1/0,_d.copy(n).addScaledVector(e,i?.distance??9),Ml(n,_d,.006,zr,Yv,G2)?(_d.copy(Yv),null):i}function Um(n,e,t,i){if(e===1){if(t?.held){t===Vr?Im(!0):gi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??lr;n.relativeRotation.multiplyQuaternions(B_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();bt.splice(bt.indexOf(n),1)}else if(e===4&&!n.protected){Dd.copy(n.mesh.position).addScaledVector(Wt,n.radius*2+.08);let r=ea(n.netType,Dd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Pl(n.mesh.material),r.customMaterial=!0,ia(r.mesh.material)),bl(r,St.boxes))}else if(e===5){let r=z_(n),s=Zv[n.paint++%Zv.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,X2(n));Ut=!0}}var Nr=[];function k_(n,e,t,i){if(!G.objects)return;let r=je.role==="player";if(Nr.length=0,r)je.forEachReplica(a=>Nr.push(a));else for(let a of bt)!a.owner&&a.mesh.visible&&Nr.push(a.mesh);let s=V_(n,e,Nr);if($o.mode=G.toolMode,i?(Id.copy(i.mesh.position),lr.copy(i.controllerRotation)):(Jt.getWorldQuaternion(lr),Id.set(.16,-.17,-.43).applyQuaternion(lr).add(n)),Pm.update($o),!t)return;if(r){if(G.toolMode===1&&or)je.sendAction({type:"release",objectId:or}),or=0;else if(s){let a=s.object.userData.netId;je.sendAction({type:"tool",mode:G.toolMode,objectId:a})&&G.toolMode===1&&(or=a)}return}let o=s&&bt.find(a=>a.mesh===s.object);Um(o,G.toolMode,i??Vr,s?Fe.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function Y2(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;qn.set(o.x,o.y-ti,o.z).applyAxisAngle(Wt,Mt).add(mt.position),cr.set(a.x,a.y,a.z,a.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Wt,Mt),k_(qn,Nn,r,i)}function Z2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Wt,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Wt,Mt),hm(qn,Nn,i)}var Es=c2(At,new _t({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Es.visible=!1;var dm=[],bs=null;function jv(){let n=pn.ctx;dm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+t_,25,42),n.font="20px system-ui",n.fillText(_s+" FPS   \xB7   Q "+tn+"/10   \xB7   "+(G.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,f,d,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(f,a+c/2,l+u/2+7,c-8),n.textAlign="left",dm.push({x:a,y:l,w:c,h:u,action:d,label:f})}let t=Math.floor(587/As.length);if(As.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>y_(l),ct===l?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(je.caption,25,145,587),n.fillText("Salons publics",25,190),ul.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>je.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>je.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>je.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>je.leave()),e(325,579,287,44,"Fermer",()=>qt=!1),pn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&cm().forEach(([a],l)=>{let c=I_()===l,u=Math.min(144,Math.floor(586/cm().length)-4);e(25+l*(u+4),114,u,38,a,()=>D_(l),c?"#546947":"#263d49")});let r=Sm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));Pi=Math.max(0,Math.min(Pi,o-1)),r.slice(Pi*s,(Pi+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,L_(l),l):typeof G[l]=="boolean"?e(406,u,206,36,P_(l),()=>Mn(l,1),G[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>Mn(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Cm(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>Mn(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Pi=(Pi+o-1)%o,Ut=!0}),e(432,533,180,35,"Suivant",()=>{Pi=(Pi+1)%o,Ut=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Pi+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",R_),e(325,579,287,44,"Fermer",()=>qt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Fm||(ct===6?"v "+jt.length().toFixed(2)+" m/s | g "+Wl.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ct===4&&dt.status?dt.status.slice(0,64):Ed?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),pn.texture.needsUpdate=!0}function j2(n){qt=!qt,qt&&(i_=n,Cv.set(0,0,-1).applyAxisAngle(Wt,ar),pn.mesh.position.copy(Pt).addScaledVector(Cv,1.25),pn.mesh.position.y+=.08,pn.mesh.lookAt(Pt),pn.mesh.updateMatrixWorld(!0)),Ut=!0}function J2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Wt,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Wt,Mt),Fi.set(qn,Nn);let a=Fi.intersectObject(pn.mesh)[0];if(a&&(Es.visible=!0,Es.position.copy(a.point).addScaledVector(Nn,-.012),i)){let l=a.uv.x*pn.w,c=(1-a.uv.y)*pn.h;dm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Ut=!0}}var Bd=Hy(),{held:Di,pressed:rr}=Bd,G_=Zy(Ze.domElement,document.querySelector("#touch-fire")),Jv=document.querySelector("#game-settings"),H_=document.querySelector("#open-settings"),fm=document.querySelector("#game-hint"),Md=0;function ei(n){fm.textContent=n,fm.hidden=!1,Md=performance.now()+2400,Fm=n,Ut=!0}var Fm="";function Od(n){let e=n??!Jv.hidden;Jv.hidden=e,H_.hidden=!e,e&&Ze.domElement.focus()}H_.onclick=()=>Od(!1);document.querySelector("#close-settings").onclick=()=>Od(!0);var jl=Gy({canvas:Ze.domElement,enabled:()=>!Ze.xr.isPresenting,onLook:(n,e,t)=>{Mt-=n*t,Ts=Fe.clamp(Ts-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&rr.add(e)},onMenu:()=>Od()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ze.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Od();return}n.code==="Space"&&n.preventDefault(),Bd.down(n.code,n.repeat),n.code==="KeyR"&&ur()}});addEventListener("keyup",n=>Bd.up(n.code));addEventListener("blur",()=>{Bd.clear(),jl.clear(),G_.clear()});function Q2(n,e){if(!G.objects)return!1;let t=je.role==="player";if(t&&or)return je.sendAction({type:"release",objectId:or}),or=0,!0;if(Vr.held)return Im(!0),!0;if(Nr.length=0,t)je.forEachReplica(r=>Nr.push(r));else for(let r of bt)!r.owner&&r.mesh.visible&&Nr.push(r.mesh);let i=V_(n,e,Nr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;je.sendAction({type:"hold",objectId:r})&&(or=r)}else Jt.getWorldQuaternion(lr),Um(bt.find(r=>r.mesh===i.object),1,Vr,Math.max(.75,i.distance));return!0}var om=[];function W_(){return om.length=0,je.forEachReplica(n=>{let e=n.userData.netType;if(!An[e]||An[e].properties?.collidable===!1||n.userData.held)return;let t=An[e],i=G.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=G.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},om.push(r)}),om}function $2(){je.role!=="vr"||!je.remoteSpectator||bt.some(n=>n.netType===Ql)||ea(Ql,null,null,!0)}var Jl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Jl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Jl.onclick=async()=>{let n;Or.unlock();try{Jl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ze.xr.setFramebufferScaleFactor(.45+G.resolution*.055),await Ze.xr.setSession(n),Bi(),kl=n.frameRate||72,Vl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Vl.includes(120)?120:Vl.find(t=>t>=100)??Vl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}kl=n.frameRate||kl,xm=Math.min(100,kl),G.auto&&(tn=Math.min(tn,4),Zo=jo=Jo=0),v_=[],Ni.reset(),xd=0,Gl=0,wm=Tm=mm=0,gm=null,__=!0,Cd=null,Ss=NaN,ti=0,ur(),Bi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Jl.disabled=!1,document.querySelector("#status").textContent=e.message}};Ze.xr.addEventListener("sessionend",()=>{Jl.disabled=!1,qt=!1,pn.mesh.visible=!1,Kn.mesh.visible=!1,document.body.classList.remove("immersive"),ur(),Kl()});function q_(n){if(!dt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(dt.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function Qv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(je.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),qt||!e||n.grip||!G.objects)return;let i=null,r=.15;if(je.forEachReplica(s=>{if(s.userData.held)return;let o=An[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Gh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;je.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function K2(n,e,t){let i=[...n.session.inputSources];for(let r of Ct){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&G.hands&&!G.body,!o){je.role==="player"&&Qv(r,!1),r.valid=!1,r.surface=null,gi(r,!1);continue}ev(r,o.transform,ti,Mt,mt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Bl.copy(r.controllerRotation),d2(r,s.gamepad?.buttons??[],t),je.role==="player")Qv(r,a);else if(!qt&&a&&!r.grip&&G.objects&&!r.held){let h=null,p=.15;for(let x of bt){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let m=Gh(r.target,x);m<p&&(p=m,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Xl.copy(Bl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Xl),h.relativeRotation.multiplyQuaternions(Xl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&gi(r,!qt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Ld.multiplyQuaternions(Bl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Ld),Qo.copy(l.offset).applyQuaternion(Bl);let h=r.supportOffset.dot(Qo);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(Qo),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(B_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Wt,Mt):r.aimDirection.set(0,0,-1).applyQuaternion(Bl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&j2(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!qt&&Mn("toolActive",1),r.toolButton=u;let f=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&f&&!r.toolCycle&&G.toolActive&&!qt&&Mn("toolMode",1),r.toolCycle=f;let d=!!s.gamepad?.buttons[0]?.pressed;if(qt){let h=d&&!r.trigger;(h||!bs||!bs.click&&r.side!==i_)&&(bs={source:s,click:h})}else!qt&&r.side==="right"&&G.mapEdit?vd={source:s,click:d&&!r.trigger}:!qt&&r.side==="right"&&G.toolActive?yd={source:s,hand:r,click:d&&!r.trigger}:!qt&&!G.blasterActive&&(r.side==="right"||d&&!r.trigger)&&(Hl={source:s,click:d&&!r.trigger});r.trigger=d}}function $v(n,e){let t=n?-Yo.y:Math.max(0,-Math.sin(Ts)),i=0,r=0,s=0;if(n){Pv.setFromAxisAngle(Wt,-ar);for(let u of Ct)u.valid&&(em.copy(u.gripPosition).sub(Pt).applyQuaternion(Pv),i+=em.x-(u.side==="left"?-.2:.2),r+=em.z+.24,s++)}let o=s?Fe.clamp(-r/s,-.35,.45):0,a=s?Fe.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?Zm(t,o):-.31*Fe.smoothstep(t,.2,.92);sr.x=Fe.lerp(sr.x,c,l),sr.y=Fe.lerp(sr.y,-a*.62,l),Rv.set(sr.x,ar,sr.y,"YXZ"),Ui.quaternion.setFromEuler(Rv)}function eC(n,e,t,i,r=i){let s=!!t,o=.43+G.size*.088;if(s){let d=t.transform.position;Ss=Ym(Ss,d.y),ti=Fe.clamp(Ss-o,-.65,1.7),bd.position.y=-ti,$n.set(d.x,d.y-ti,d.z);let h=[...n.session.inputSources].find(m=>m.handedness==="right"),p=Hm(h?.gamepad),x=Wm(n_,p,{menu:qt,allowMenu:G.snapWithMenu});x&&(Ni.record("snap-turn",{direction:x,menu:qt}),_n.copy($n).applyAxisAngle(Wt,Mt),Mt-=x*Math.PI/4,Sv.copy($n).applyAxisAngle(Wt,Mt),mt.position.add(_n.sub(Sv)),Br.reset(),md=!1)}else bd.position.y=0,$n.set(0,o,0),Jt.position.copy($n),Jt.rotation.set(Ts,0,0,"YXZ");if(Pt.copy($n).applyAxisAngle(Wt,Mt).add(mt.position),s){let d=t.transform.orientation;gd.set(d.x,d.y,d.z,d.w),Yo.set(0,0,-1).applyQuaternion(gd),Yo.x**2+Yo.z**2>.018&&(ar=Mt+Math.atan2(-Yo.x,-Yo.z))}else ar=Mt;let a=q_(Pt),l=9.81*(G.gravity/5)*(a?.gravity??1);Wl=l,Tv.copy(mt.position);let c=je.role==="player"?W_():bt;if(s){K2(n,e,r),$v(!0,r),Ct.some(d=>d.valid)&&Tm++,cd.length=0;for(let d of zr)cd.push(d);if(G.collisions&&G.objects)for(let d of c)d.handCollider&&!d.owner&&cd.push(d.handCollider);Br.move({head:Pt,dt:i,inputDt:r,gravity:l,settings:G,boxes:cd,velocity:jt,movement:Ho,reach:wd()*2+.16});for(let d of Ct)Xy(d,G.stepHaptics,r,.08+G.stepHapticStrength*.04,40)}else{$v(!1,r),jt.y-=l*i;let d=Number(Di.has("KeyD"))-Number(Di.has("KeyA")||Di.has("KeyQ"))+jl.movement.x,h=Number(Di.has("KeyS"))-Number(Di.has("KeyW")||Di.has("KeyZ"))+jl.movement.z,p=Di.has("ShiftLeft")||Di.has("ShiftRight");ir.set(d,0,h).clampLength(0,1).applyAxisAngle(Wt,Mt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Ii?13:4));jt.x=Fe.lerp(jt.x,ir.x,x),jt.z=Fe.lerp(jt.z,ir.z,x);let g=(jl.consumeJump()||rr.delete("Space"))&&Ii,y=vs.normal,w=!g&&Ii&&y.y>=.62&&(vs.surface?.friction??0)>=.45;g?jt.y=3.1+G.jump*.18:w&&(jt.y=-(jt.x*y.x+jt.z*y.z)/y.y),Ho.copy(jt).multiplyScalar(i),w&&Ho.addScaledVector(y,-l*i*i)}if(G.collisions&&md&&(Qo.copy(Pt).add(Ho),Ml(Av,Qo,r2,zr,_n,Nl)&&ir.subVectors(Qo,_n).dot(Nl)<0&&(Ho.copy(_n).sub(Pt),jm(jt,Nl))),mt.position.add(Ho),Pt.copy($n).applyAxisAngle(Wt,Mt).add(mt.position),Ii=!1,vs.normal.set(0,0,0),vs.surface=null,G.collisions){ad.set(0,-1,0).applyQuaternion(Ui.quaternion),ad.y=0,ad.addScaledVector(h2.set(0,0,1).applyAxisAngle(Wt,ar),.12);for(let d=0;d<3;d++){let h=d===0?.18:d===1?Math.max(.26,$n.y*.57):$n.y,{radius:p}=pd[d];if(_n.set(Pt.x,mt.position.y+h,Pt.z),d<2&&_n.add(Jm(s,ad,Math.max(0,$n.y-h),ir)),wv.copy(_n),Ii=Lp(_n,p,St.boxes,jt,0,3+G.grip,i,d===0?vs:null)||Ii,G.objects)for(let x of c)x.blocksPlayer&&!x.owner&&oy(_n,p,x,jt,Nl)&&Nl.y>.6&&(Ii=!0);Lp(_n,p,St.boxes,jt,0,3+G.grip,i),ir.subVectors(_n,wv),mt.position.add(ir),Pt.add(ir);for(let x=0;x<d;x++)pd[x].position.add(ir);pd[d].position.copy(_n)}}if(Ur.subVectors(mt.position,Tv),Or.update({dt:r,inVR:s,hands:Ct,grounded:Ii,travel:Math.hypot(Ur.x,Ur.z),volume:G.stepVolume,enabled:G.stepAudio}),s){let d=Br.finish(Ur,jt);d.contacts&&wm++,d.launched&&(mm++,gm={handSpeed:d.launchSpeed,velocity:jt.toArray(),t:performance.now()})}(dt.active?mt.position.y<-24||Math.abs(mt.position.x)>155||Math.abs(mt.position.z)>155:mt.position.y<-9||Math.abs(mt.position.x)>33||mt.position.z<-57||mt.position.z>13)&&(ur(),Pt.copy($n).applyAxisAngle(Wt,Mt).add(mt.position)),Av.copy(Pt),md=!0,mt.rotation.y=Mt,s&&Jt.position.set(0,0,0);for(let d of Ct)s&&d.valid&&(d.mesh.position.copy(d.surface?d.anchor:d.held?d.target:d.locomotionTarget).addScaledVector(Ur,d.surface?0:1),d.gripPosition.add(Ur)),s||(d.mesh.visible=!1);let u=.72+G.size*.05,f=wd()*2*(2/3)/.82;Ui.visible=G.body,Li.position.copy(Pt),s?Li.quaternion.copy(gd).premultiply(cr.setFromAxisAngle(Wt,Mt)):Li.quaternion.setFromEuler(new Kt(Ts,Mt,0,"YXZ")),am.set(0,-.145,.045).applyQuaternion(Li.quaternion).add(Pt),Ui.position.set(0,.46*f,.04*u).applyQuaternion(Ui.quaternion).negate().add(am),f2(u,f),mt.updateMatrixWorld(!0),Jt.updateWorldMatrix(!0,!1)}function tC(n,e){if(ld+=n,Kp++,Zo+=n,ld<1||(_s=Math.round(Kp/ld),Kp=0,ld=0,Ut=!0,C2.textContent=_s+" FPS \xB7 qualit\xE9 "+tn+"/10 \xB7 "+(G.auto?"auto":"manuel"),!G.auto||Zo<5))return;Zo=0;let t=e?Math.min(100,Ze.xr.getSession()?.frameRate||kl):60;e&&(xm=t),jo=_s<t-4?jo+1:0,Jo=_s>=t-1?Jo+1:0;let i=Fe.clamp(tn+(jo>=1?-1:Jo>=2?1:0),1,10);i!==tn&&(tn=i,Zo=jo=Jo=0,Bi())}St.bakeLightmap();var X_={value:1},Y_={value:1},Z_={value:0},Nm={value:0},Kv=new WeakSet;function ia(n){if(Array.isArray(n)){for(let i of n)ia(i);return}if(!n||Kv.has(n))return;Kv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:X_,uPhotoSaturation:Y_,uPhotoWarmth:Z_,uLabShader:Nm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)ia(n);At.traverse(n=>{n.isMesh&&![pn.mesh,Kn.mesh,Es].includes(n)&&ia(n.material)});Bi();var e_=new URLSearchParams(location.search);if(e_.has("map"))dt.loadURL(e_.get("map"));else try{let n=localStorage.getItem(Ul);n&&dt.load(n)}catch(n){dt.inform(n.message)}function nC(){let n=Ze.xr.isPresenting;return{head:Li.quaternion,hands:n?Ct.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,$o.mode?H2:null],height:$n.y,armSpan:wd()*2,light:G.timeOfDay-1,color:r_,tool:$o.mode?$o:null,gun:Fd.gun}}Ze.setAnimationLoop((n,e)=>{let t=$p?Math.max(0,(n-$p)/1e3):.014;$p=n;let i=Math.max(1e-4,Math.min(.035,t)),r=je.role?1:Em[G.debugSpeed-1],s=i*r,o=Ze.xr.isPresenting,a=Ze.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(x2(n*.001),Md&&n>Md&&(fm.hidden=!0,Md=0,Fm=""),Es.visible=!1,Pm.hide(),$o.mode=0,zr=G.collisions?St.boxes:s2,bs=null,Hl=null,yd=null,vd=null,dt.clearGhost(),pn.mesh.visible=!1,!o&&je.role==="pc"){Ui.visible=!1;for(let y of Ct)y.mesh.visible=!1}else eC(e,a,l,s,i);let c=!o&&je.role==="pc",u=c||je.role==="player";if(je.role!=="player"){or=0;for(let y of Ct)y.remoteHeld=0}u||(q2(s),$2()),Qp=0;for(let y of bt){y.mesh.visible=G.objects&&!u;let{x:w,y:b,z:C}=y.mesh.position;if(Xm(y.mesh.position,dt.active)&&(y.owner||kd(y)),y.shadow.visible=!u&&G.shadows&&Ad()<3&&G.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:D,z:P}=y.mesh.position,T=St.boxes.find(E=>E.heightfield&&D>=E.xMin&&D<=E.xMax&&P>=E.zMin&&P<=E.zMax),S=T?T.height(D,P):0;y.shadow.position.set(D,S+.006,P)}}if(!u&&G.objects){let y=performance.now();ry(bt,St.boxes,s,9.81*G.gravity/5,.12+G.bounce*.064,q_),Qp=performance.now()-y}if(o&&!qt&&je.role!=="pc")for(let y of Ct)k2(y);if(St.probe.rotation.y+=s*.29,tC(Math.min(.3,t),o),pn.mesh.visible=o&&qt,pn.mesh.visible&&Ut&&jv(),pn.mesh.visible&&bs)J2(e,a,bs.source,bs.click);else if(o&&vd)V2(e,a,vd);else if(o&&yd)Y2(e,a,yd);else if(o&&Hl)Z2(e,a,Hl.source,Hl.click);else if(!o&&!c){Jt.getWorldPosition(qn),Jt.getWorldDirection(Nn),rr.delete("KeyX")&&Mn("blasterActive",1),rr.delete("KeyG")&&(Mn("toolActive",1),G.toolActive&&ei("Outil \xB7 "+ys[G.toolMode-1])),rr.delete("KeyT")&&Mn("toolMode",1);let y=rr.delete("KeyE");G.toolActive?k_(qn,Nn,y,null):y&&!Q2(qn,Nn)?hm(qn,Nn,!0):!y&&!u&&hm(qn,Nn,!1),rr.delete("KeyF")&&(G.objects=!0,Lm(h_[0]))}let f=Kn.mesh.visible;if(Kn.mesh.visible=o&&!qt&&Ct[0].valid,Kn.mesh.visible&&(Kn.mesh.position.copy(Ct[0].mesh.position).y+=.12,Kn.mesh.lookAt(Pt)),(Ut||n-Ev>1100||Kn.mesh.visible&&!f)&&(Ut=!1,Ev=n,qt&&jv(),Kn.mesh.visible)){let y=Kn.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(_s+" FPS     Q "+tn+"/10",17,32),y.font="20px system-ui",y.fillText(G.mapEdit?"\xC9dition : "+N_[G.mapMode-1]:G.blasterActive?"Pistolet : maintenir la g\xE2chette":G.toolActive?"Tool Gun : "+ys[G.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Kn.texture.needsUpdate=!0}Fd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:Mt,drop:ti,rightHand:Ct[1],enabled:G.blasterActive&&!c&&!qt&&!G.mapEdit,flatFiring:G_.held||Di.has("KeyJ")}),je.update({inVR:o,time:n,dt:i,position:Pt,yaw:c?Mt:ar,pitch:Ts,camera:Jt,rig:mt,keys:Di,actions:rr,flat:jl,avatar:nC,bodies:G.objects?bt:Lv}),rr.clear();let d=performance.now();Xo.update({settings:G,boxes:zr,bodies:u?G.debugHitboxes?W_():Lv:bt,hands:Ct,locomotion:Br,velocity:jt,head:Pt,neck:am,body:Ui.position,proxies:pd,gravity:Wl,appliedMove:Ur,playerActive:!c,inVR:o,viewQuaternion:Li.quaternion}),Mv=performance.now()-d,!c&&n-Gl>350&&(o_={simulationScale:r,gravity:Wl,velocity:jt.toArray(),grounded:Ii,torsoDegrees:[sr.x,sr.y].map(Fe.radToDeg),hands:o?Br.hands.map(({hand:y,normal:w,offset:b})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:_n.copy($i).applyQuaternion(y.mesh.quaternion).add(y.target).add(Ur).distanceTo(y.gripPosition),palmCenter:_n.copy($i).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:_n.copy(y.mesh.position).add(b).toArray(),normal:y.surface?w.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),w2(u),St.centerShadows(Pd);let h=25+(10-Ad())*(o?7:4);Ze.shadowMap.enabled&&n-_v>=h&&(Ze.shadowMap.needsUpdate=!0,_v=n),U2(n,l);let p=performance.now(),x=o&&G.post,m=o&&G.rayTrace;n2(m,bt);let g=G.vrFov/100;if(!x||!t2.render(At,Jt,{bloom:G.bloom,visibleField:g})){fd.material.uniforms.visibleField.value=g,fd.visible=o&&g<1;try{Ze.render(At,Jt)}finally{fd.visible=!1}}if(bv=performance.now()-p,Ni.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:Qp,debugCpuMs:Mv,mirrorCpuMs:um,renderSubmissionCpuMs:bv,objects:bt.length,moving:bt.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:Xo.stats.segments}),n-Gl>350&&(Zl.hidden=!(G.debugForces||Xo.stats.truncated),Zl.hidden||(Zl.textContent="Vitesse joueur : "+jt.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+Wl.toFixed(2)+" m/s\xB2 \xB7 Segments : "+Xo.stats.segments+(Xo.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),v_[xd]=t*1e3,xd=(xd+1)%720,n-Gl>350){Gl=n;let{calls:y,triangles:w,lines:b,points:C}=Ze.info.render;M_={calls:y,triangles:w,lines:b,points:C,textures:Ze.info.memory.textures},o&&(Cd={refreshHz:Ze.xr.getSession()?.frameRate??null,targetFps:xm,supportedHz:Vl.slice(),foveation:Ze.xr.getFoveation()??null,visualEffects:{post:x,bloom:x&&G.bloom,rayTrace:m},eyeViewports:Ze.xr.getCamera().cameras.map(A=>({width:A.viewport?.z??null,height:A.viewport?.w??null}))})}});})();
