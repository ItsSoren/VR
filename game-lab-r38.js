(()=>{function Gm(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function Hm(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function Wm(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function Gd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function qm(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function Xm(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function Ym(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function Zm(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function jm(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Fg=0,Lf=1,Ng=2;var nl=1,Bg=2,Mi=3,li=0,dn=1,Ct=2,ji=0,$r=1,$n=2,Df=3,Uf=4,Og=5,vr=100,zg=101,Vg=102,kg=103,Gg=104,Hg=200,Wg=201,qg=202,Xg=203,Bc=204,Oc=205,Yg=206,Zg=207,jg=208,Jg=209,$g=210,Qg=211,Kg=212,e0=213,t0=214,pu=0,mu=1,gu=2,Qr=3,xu=4,yu=5,vu=6,_u=7,Mu=0,n0=1,i0=2,Ji=0,r0=1,s0=2,o0=3,bu=4,a0=5,l0=6,c0=7;var Ff=300,os=301,as=302,go=303,Su=304,il=306,kn=1e3,yr=1001,zc=1002,cn=1003,u0=1004;var rl=1005;var un=1006,wu=1007;var Ln=1008;var Wn=1009,Nf=1010,Bf=1011,xo=1012,Tu=1013,Sr=1014,di=1015,bi=1016,Au=1017,Eu=1018,yo=1020,Of=35902,zf=35899,Vf=1021,kf=1022,Dn=1023,$s=1026,vo=1027,Cu=1028,Ru=1029,Gf=1030,Pu=1031;var Iu=1033,sl=33776,ol=33777,al=33778,ll=33779,Lu=35840,Du=35841,Uu=35842,Fu=35843,Nu=36196,Bu=37492,Ou=37496,zu=37808,Vu=37809,ku=37810,Gu=37811,Hu=37812,Wu=37813,qu=37814,Xu=37815,Yu=37816,Zu=37817,ju=37818,Ju=37819,$u=37820,Qu=37821,Ku=36492,eh=36494,th=36495,nh=36283,ih=36284,rh=36285,sh=36286;var ba=2300,Vc=2301,Fc=2302,vf=2400,_f=2401,Mf=2402;var h0=3200,d0=3201;var oh=0,f0=1,$i="",at="srgb",Kr="srgb-linear",Sa="linear",bt="srgb";var Jr=7680;var bf=519,p0=512,m0=513,g0=514,Hf=515,x0=516,y0=517,v0=518,_0=519,kc=35044,Sn=35048;var Wf="300 es",ai=2e3,wa=2001;var Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jm=1234567,ya=Math.PI/180,Qs=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function qf(n,e){return(n%e+e)%e}function $_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Q_(n,e,t){return n!==e?(t-n)/(e-n):0}function va(n,e,t){return(1-t)*n+t*e}function K_(n,e,t,i){return va(n,e,1-Math.exp(-t*i))}function eM(n,e=1){return e-Math.abs(qf(n,e*2)-e)}function tM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function iM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rM(n,e){return n+Math.random()*(e-n)}function sM(n){return n*(.5-Math.random())}function oM(n){n!==void 0&&(Jm=n);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aM(n){return n*ya}function lM(n){return n*Qs}function cM(n){return(n&n-1)===0&&n!==0}function uM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var De={DEG2RAD:ya,RAD2DEG:Qs,generateUUID:xi,clamp:et,euclideanModulo:qf,mapLinear:$_,inverseLerp:Q_,lerp:va,damp:K_,pingpong:eM,smoothstep:tM,smootherstep:nM,randInt:iM,randFloat:rM,randFloatSpread:sM,seededRandom:oM,degToRad:aM,radToDeg:lM,isPowerOfTwo:cM,ceilPowerOfTwo:uM,floorPowerOfTwo:hM,setQuaternionFromProperEuler:dM,normalize:_t,denormalize:oi},_e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let m=1-a,g=l*f+c*h+u*p+d*x,y=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){let R=Math.sqrt(S),P=Math.atan2(R,g*y);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}let _=a*y;if(l=l*m+f*_,c=c*m+h*_,u=u*m+p*_,d=d*m+x*_,m===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hd=new M,$m=new qe,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],m=r[3],g=r[6],y=r[1],S=r[4],_=r[7],R=r[2],P=r[5],C=r[8];return s[0]=o*x+a*y+l*R,s[3]=o*m+a*S+l*P,s[6]=o*g+a*_+l*C,s[1]=c*x+u*y+d*R,s[4]=c*m+u*S+d*P,s[7]=c*g+u*_+d*C,s[2]=f*x+h*y+p*R,s[5]=f*m+h*S+p*P,s[8]=f*g+h*_+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wd.makeScale(e,t)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wd=new nt;function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M0(){let n=Ks("canvas");return n.style.display="block",n}var Qm={};function eo(n){n in Qm||(Qm[n]=!0,console.warn(n))}function b0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Km=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:Sa,toXYZ:Km,fromXYZ:eg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Km,fromXYZ:eg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),n}var dt=fM();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ps,Gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=Ks("canvas")),Ps.width=e.width,Ps.height=e.height;let r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pM=0,to=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qd(r[o].image)):s.push(qd(r[o]))}else s=qd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mM=0,Xd=new M,gn=class n extends Wi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yr,r=yr,s=un,o=Ln,a=Dn,l=Wn,c=n.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=xi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ff;gn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(h+1)/2,R=(g+1)/2,P=(u+f)/4,C=(d+x)/4,L=(p+m)/4;return S>_&&S>R?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=C/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=P/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hc=class extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new to(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Hc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ta=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wc=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),oc.subVectors(this.max,oa),Is.subVectors(e.a,oa),Ls.subVectors(e.b,oa),Ds.subVectors(e.c,oa),dr.subVectors(Ls,Is),fr.subVectors(Ds,Ls),Xr.subVectors(Is,Ds);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Xr.y,Xr.x,0];return!Yd(t,Is,Ls,Ds,oc)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,Is,Ls,Ds,oc))?!1:(ac.crossVectors(dr,fr),t=[ac.x,ac.y,ac.z],Yd(t,Is,Ls,Ds,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new M,new M,new M,new M,new M,new M,new M,new M],ii=new M,sc=new tn,Is=new M,Ls=new M,Ds=new M,dr=new M,fr=new M,Xr=new M,oa=new M,oc=new M,ac=new M,Yr=new M;function Yd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yr.fromArray(n,s);let a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=t.dot(Yr),u=i.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var gM=new tn,aa=new M,Zd=new M,jn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Zd)),this.expandByPoint(aa.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zi=new M,jd=new M,lc=new M,pr=new M,Jd=new M,cc=new M,$d=new M,es=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jd.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(jd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=pr.dot(this.direction),l=-pr.dot(lc),c=pr.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jd).addScaledVector(lc,f),h}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,r,s){Jd.subVectors(t,e),cc.subVectors(i,e),$d.crossVectors(Jd,cc);let o=this.direction.dot($d),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);let l=a*this.direction.dot(cc.crossVectors(pr,cc));if(l<0)return null;let c=a*this.direction.dot(Jd.cross(pr));if(c<0||l+c>o)return null;let u=-a*pr.dot($d);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,yM)}lookAt(e,t,i){let r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),mr.crossVectors(i,zn),mr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),mr.crossVectors(i,zn)),mr.normalize(),uc.crossVectors(zn,mr),r[0]=mr.x,r[4]=uc.x,r[8]=zn.x,r[1]=mr.y,r[5]=uc.y,r[9]=zn.y,r[2]=mr.z,r[6]=uc.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],_=i[11],R=i[15],P=r[0],C=r[4],L=r[8],w=r[12],b=r[1],E=r[5],F=r[9],N=r[13],z=r[2],W=r[6],G=r[10],Y=r[14],B=r[3],se=r[7],ne=r[11],he=r[15];return s[0]=o*P+a*b+l*z+c*B,s[4]=o*C+a*E+l*W+c*se,s[8]=o*L+a*F+l*G+c*ne,s[12]=o*w+a*N+l*Y+c*he,s[1]=u*P+d*b+f*z+h*B,s[5]=u*C+d*E+f*W+h*se,s[9]=u*L+d*F+f*G+h*ne,s[13]=u*w+d*N+f*Y+h*he,s[2]=p*P+x*b+m*z+g*B,s[6]=p*C+x*E+m*W+g*se,s[10]=p*L+x*F+m*G+g*ne,s[14]=p*w+x*N+m*Y+g*he,s[3]=y*P+S*b+_*z+R*B,s[7]=y*C+S*E+_*W+R*se,s[11]=y*L+S*F+_*G+R*ne,s[15]=y*w+S*N+_*Y+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=d*m*c-x*f*c+x*l*h-a*m*h-d*l*g+a*f*g,S=p*f*c-u*m*c-p*l*h+o*m*h+u*l*g-o*f*g,_=u*x*c-p*d*c+p*a*h-o*x*h-u*a*g+o*d*g,R=p*d*l-u*x*l-p*a*f+o*x*f+u*a*m-o*d*m,P=t*y+i*S+r*_+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/P;return e[0]=y*C,e[1]=(x*f*s-d*m*s-x*r*h+i*m*h+d*r*g-i*f*g)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*g+i*l*g)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*C,e[4]=S*C,e[5]=(u*m*s-p*f*s+p*r*h-t*m*h-u*r*g+t*f*g)*C,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*C,e[8]=_*C,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*g-t*d*g)*C,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*g+t*a*g)*C,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*C,e[12]=R*C,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*m+t*d*m)*C,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,m=o*d,g=a*d,y=l*c,S=l*u,_=l*d,R=i.x,P=i.y,C=i.z;return r[0]=(1-(x+g))*R,r[1]=(h+_)*R,r[2]=(p-S)*R,r[3]=0,r[4]=(h-_)*P,r[5]=(1-(f+g))*P,r[6]=(m+y)*P,r[7]=0,r[8]=(p+S)*C,r[9]=(m-y)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/s,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ai,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===ai)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===wa)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ai,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===ai)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===wa)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new M,ri=new lt,xM=new M(0,0,0),yM=new M(1,1,1),mr=new M,uc=new M,zn=new M,tg=new lt,ng=new qe,nn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vM=0,ig=new M,Fs=new qe,Vi=new lt,hc=new M,la=new M,_M=new M,MM=new qe,rg=new M(1,0,0),sg=new M(0,1,0),og=new M(0,0,1),ag={type:"added"},bM={type:"removed"},Ns={type:"childadded",child:null},Qd={type:"childremoved",child:null},Wt=class n extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new nn,i=new qe,r=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new nt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(sg,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(sg,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(la,hc,this.up):Vi.lookAt(hc,la,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bM),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Wt.DEFAULT_UP=new M(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new M,ki=new M,Kd=new M,Gi=new M,Bs=new M,Os=new M,lg=new M,ef=new M,tf=new M,nf=new M,rf=new ut,sf=new ut,of=new ut,Cn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),si.subVectors(e,t),r.cross(si);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){si.subVectors(r,t),ki.subVectors(i,t),Kd.subVectors(e,t);let o=si.dot(si),a=si.dot(ki),l=si.dot(Kd),c=ki.dot(ki),u=ki.dot(Kd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,t,i,r){return si.subVectors(i,t),ki.subVectors(e,t),si.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Bs.subVectors(r,i),Os.subVectors(s,i),ef.subVectors(e,i);let l=Bs.dot(ef),c=Os.dot(ef);if(l<=0&&c<=0)return t.copy(i);tf.subVectors(e,r);let u=Bs.dot(tf),d=Os.dot(tf);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Bs,o);nf.subVectors(e,s);let h=Bs.dot(nf),p=Os.dot(nf);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Os,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return lg.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(lg,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Bs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function af(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=qf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=at){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=S0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return dt.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=at){dt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(dc);let i=va(gr.h,dc.h,t),r=va(gr.s,dc.s,t),s=va(gr.l,dc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ue;Ue.NAMES=S0;var SM=0,Jn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=$r,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=Oc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var rn=new M,fc=new _e,wM=0,ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}};var ts=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Aa=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},TM=0,Zn=new lt,lf=new Wt,zs=new M,Vn=new tn,ca=new tn,ln=new M,Qe=class n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Aa:ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Vn.min,ca.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,ca.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(ca.min),Vn.expandByPoint(ca.max))}Vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),ln.add(zs)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new M,l[L]=new M;let c=new M,u=new M,d=new M,f=new _e,h=new _e,p=new _e,x=new M,m=new M;function g(L,w,b){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,b),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(E),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(E),a[L].add(x),a[w].add(x),a[b].add(x),l[L].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,w=y.length;L<w;++L){let b=y[L],E=b.start,F=b.count;for(let N=E,z=E+F;N<z;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new M,_=new M,R=new M,P=new M;function C(L){R.fromBufferAttribute(r,L),P.copy(R);let w=a[L];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),_.crossVectors(P,w);let E=_.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,E)}for(let L=0,w=y.length;L<w;++L){let b=y[L],E=b.start,F=b.count;for(let N=E,z=E+F;N<z;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new M,s=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cg=new lt,Zr=new es,pc=new jn,ug=new M,mc=new M,gc=new M,xc=new M,cf=new M,yc=new M,hg=new M,vc=new M,ze=class extends Wt{constructor(e=new Qe,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(cf.fromBufferAttribute(d,e),o?yc.addScaledVector(cf,u):yc.addScaledVector(cf.sub(t),u))}t.add(yc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(pc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(pc,ug)===null||Zr.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(cg),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){let P=a.getX(_),C=a.getX(_+1),L=a.getX(_+2);r=_c(this,g,e,i,c,u,d,P,C,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);r=_c(this,o,e,i,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){let P=_,C=_+1,L=_+2;r=_c(this,g,e,i,c,u,d,P,C,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,_=m+2;r=_c(this,o,e,i,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function AM(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===li,a),l===null)return null;vc.copy(a),vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:n}}function _c(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,mc),n.getVertexPosition(l,gc),n.getVertexPosition(c,xc);let u=AM(n,e,t,i,mc,gc,xc,hg);if(u){let d=new M;Cn.getBarycoord(hg,mc,gc,xc,d),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,d,new _e)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,d,new _e)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Cn.getNormal(mc,gc,xc,f.normal),u.face=f,u.barycoord=d}return u}var Ke=class n extends Qe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function p(x,m,g,y,S,_,R,P,C,L,w){let b=_/C,E=R/L,F=_/2,N=R/2,z=P/2,W=C+1,G=L+1,Y=0,B=0,se=new M;for(let ne=0;ne<G;ne++){let he=ne*E-N;for(let de=0;de<W;de++){let Ie=de*b-F;se[x]=Ie*y,se[m]=he*S,se[g]=z,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[g]=P>0?1:-1,u.push(se.x,se.y,se.z),d.push(de/C),d.push(1-ne/L),Y+=1}}for(let ne=0;ne<L;ne++)for(let he=0;he<C;he++){let de=f+he+W*ne,Ie=f+he+W*(ne+1),Ee=f+(he+1)+W*(ne+1),Ce=f+(he+1)+W*ne;l.push(de,Ie,Ce),l.push(Ie,Ee,Ce),B+=6}a.addGroup(h,B,w),h+=B,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=ls(n[t]);for(let r in i)e[r]=i[r]}return e}function EM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var ah={clone:ls,merge:xn},CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ea=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xr=new M,dg=new _e,fg=new _e,$t=class extends Ea{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,dg,fg),t.subVectors(fg,dg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,ks=1,qc=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(Vs,ks,e,t);r.layers=this.layers,this.add(r);let s=new $t(Vs,ks,e,t);s.layers=this.layers,this.add(s);let o=new $t(Vs,ks,e,t);o.layers=this.layers,this.add(o);let a=new $t(Vs,ks,e,t);a.layers=this.layers,this.add(a);let l=new $t(Vs,ks,e,t);l.layers=this.layers,this.add(l);let c=new $t(Vs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ca=class extends gn{constructor(e=[],t=os,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ke(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ji});s.uniforms.tEquirect.value=t;let o=new ze(r,s),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=un),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Mt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},PM={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ra=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new M,ro=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},so=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,ua=new M,Hs=new M,Ws=new M,qs=new _e,ha=new _e,w0=new lt,Mc=new M,da=new M,bc=new M,pg=new _e,uf=new _e,mg=new _e,Ia=class extends Wt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pa(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new ro(i,3,0,!1)),Gs.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),w0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Ws.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Sc(Mc.set(-.5,-.5,0),Ws,o,Hs,r,s),Sc(da.set(.5,-.5,0),Ws,o,Hs,r,s),Sc(bc.set(.5,.5,0),Ws,o,Hs,r,s),pg.set(0,0),uf.set(1,0),mg.set(1,1);let a=e.ray.intersectTriangle(Mc,da,bc,!1,ua);if(a===null&&(Sc(da.set(-.5,.5,0),Ws,o,Hs,r,s),uf.set(0,1),a=e.ray.intersectTriangle(Mc,bc,da,!1,ua),a===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:Cn.getInterpolation(ua,Mc,da,bc,pg,uf,mg,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sc(n,e,t,i,r,s){qs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ha.x=s*qs.x-r*qs.y,ha.y=r*qs.x+s*qs.y):ha.copy(qs),n.copy(e),n.x+=ha.x,n.y+=ha.y,n.applyMatrix4(w0)}var yi=class extends gn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=cn,u=cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oo=class extends ft{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new lt,gg=new lt,wc=[],xg=new tn,IM=new lt,fa=new ze,pa=new jn,La=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,IM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),xg.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(xg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),pa.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xs),gg.multiplyMatrices(i,Xs),fa.matrixWorld=gg,fa.raycast(e,wc);for(let o=0,a=wc.length;o<a;o++){let l=wc[o];l.instanceId=s,l.object=this,t.push(l)}wc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(r*this.count),r,this.count,Cu,di));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hf=new M,LM=new M,DM=new nt,En=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=hf.subVectors(i,t).cross(LM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||DM.getNormalMatrix(e),r=this.coplanarPoint(hf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jr=new jn,UM=new _e(.5,.5),Tc=new M,ao=class{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],m=s[10],g=s[11],y=s[12],S=s[13],_=s[14],R=s[15];if(r[0].setComponents(c-o,h-u,g-p,R-y).normalize(),r[1].setComponents(c+o,h+u,g+p,R+y).normalize(),r[2].setComponents(c+a,h+d,g+x,R+S).normalize(),r[3].setComponents(c-a,h-d,g-x,R-S).normalize(),i)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,h-f,g-m,R-_).normalize();else if(r[4].setComponents(c-l,h-f,g-m,R-_).normalize(),t===ai)r[5].setComponents(c+l,h+f,g+m,R+_).normalize();else if(t===wa)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);let t=UM.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Tc.x=r.normal.x>0?e.max.x:e.min.x,Tc.y=r.normal.y>0?e.max.y:e.min.y,Tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vi=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new M,Zc=new M,yg=new lt,ma=new es,Ac=new jn,df=new M,vg=new M,Da=class extends Wt{constructor(e=new Qe,t=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Yc.fromBufferAttribute(t,r-1),Zc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(r),Ac.radius+=s,e.ray.intersectsSphere(Ac)===!1)return;yg.copy(r).invert(),ma.copy(e.ray).applyMatrix4(yg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),S=Ec(this,e,ma,l,g,y,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(h),g=Ec(this,e,ma,l,x,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=Ec(this,e,ma,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ec(this,e,ma,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ec(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Yc.fromBufferAttribute(a,r),Zc.fromBufferAttribute(a,s),t.distanceSqToSegment(Yc,Zc,df,vg)>i)return;df.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(df);if(!(c<e.near||c>e.far))return{distance:c,point:vg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var _g=new M,Mg=new M,is=class extends Da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_g.fromBufferAttribute(t,r),Mg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_g.distanceTo(Mg);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ua=class extends Da{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},lo=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bg=new lt,Sf=new es,Cc=new jn,Rc=new M,Fa=class extends Wt{constructor(e=new Qe,t=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),Cc.radius+=s,e.ray.intersectsSphere(Cc)===!1)return;bg.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(bg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let m=c.getX(p);Rc.fromBufferAttribute(d,m),Sg(Rc,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Rc.fromBufferAttribute(d,p),Sg(Rc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Sg(n,e,t,i,r,s,o){let a=Sf.distanceSqToPoint(n);if(a<t){let l=new M;Sf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends gn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Na=class extends gn{constructor(e,t,i=Sr,r,s,o,a=cn,l=cn,c,u=$s,d=1){if(u!==$s&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ba=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_r=class n extends Qe{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,m=new M,g=new M;for(let y=0;y<=p;y++){let S=0,_=0,R=0,P=0;if(y<=i){let w=y/i,b=w*Math.PI/2;_=-u-e*Math.cos(b),R=e*Math.sin(b),P=-e*Math.cos(b),S=w*d}else if(y<=i+s){let w=(y-i)/s;_=-u+w*t,R=e,P=0,S=d+w*f}else{let w=(y-i-s)/i,b=w*Math.PI/2;_=u+e*Math.sin(b),R=e*Math.cos(b),P=e*Math.sin(b),S=d+f+w*d}let C=Math.max(0,Math.min(1,S/h)),L=0;y===0?L=.5/r:y===p&&(L=-.5/r);for(let w=0;w<=r;w++){let b=w/r,E=b*Math.PI*2,F=Math.sin(E),N=Math.cos(E);g.x=-R*N,g.y=_,g.z=R*F,a.push(g.x,g.y,g.z),m.set(-R*N,P,R*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+L,C)}if(y>0){let w=(y-1)*x;for(let b=0;b<r;b++){let E=w+b,F=w+b+1,N=y*x+b,z=y*x+b+1;o.push(E,F,N),o.push(F,z,N)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ot=class n extends Qe{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new M,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class n extends Qe{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function y(){let _=new M,R=new M,P=0,C=(t-e)/i;for(let L=0;L<=s;L++){let w=[],b=L/s,E=b*(t-e)+e;for(let F=0;F<=r;F++){let N=F/r,z=N*l+a,W=Math.sin(z),G=Math.cos(z);R.x=E*W,R.y=-b*i+m,R.z=E*G,d.push(R.x,R.y,R.z),_.set(W,C,G).normalize(),f.push(_.x,_.y,_.z),h.push(N,1-b),w.push(p++)}x.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){let b=x[w][L],E=x[w+1][L],F=x[w+1][L+1],N=x[w][L+1];(e>0||w!==0)&&(u.push(b,E,N),P+=3),(t>0||w!==s-1)&&(u.push(E,F,N),P+=3)}c.addGroup(g,P,0),g+=P}function S(_){let R=p,P=new _e,C=new M,L=0,w=_===!0?e:t,b=_===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*b,0),f.push(0,b,0),h.push(.5,.5),p++;let E=p;for(let F=0;F<=r;F++){let z=F/r*l+a,W=Math.cos(z),G=Math.sin(z);C.x=w*G,C.y=m*b,C.z=w*W,d.push(C.x,C.y,C.z),f.push(0,b,0),P.x=W*.5+.5,P.y=G*.5*b+.5,h.push(P.x,P.y),p++}for(let F=0;F<r;F++){let N=R+F,z=E+F;_===!0?u.push(z,z+1,N):u.push(z+1,z,N),L+=3}c.addGroup(g,L,_===!0?1:2),g+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class n extends zt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},co=class n extends Qe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new M,_=new M,R=new M;for(let P=0;P<t.length;P+=3)h(t[P+0],S),h(t[P+1],_),h(t[P+2],R),l(S,_,R,y)}function l(y,S,_,R){let P=R+1,C=[];for(let L=0;L<=P;L++){C[L]=[];let w=y.clone().lerp(_,L/P),b=S.clone().lerp(_,L/P),E=P-L;for(let F=0;F<=E;F++)F===0&&L===P?C[L][F]=w:C[L][F]=w.clone().lerp(b,F/E)}for(let L=0;L<P;L++)for(let w=0;w<2*(P-L)-1;w++){let b=Math.floor(w/2);w%2===0?(f(C[L][b+1]),f(C[L+1][b]),f(C[L][b])):(f(C[L][b+1]),f(C[L+1][b+1]),f(C[L+1][b]))}}function c(y){let S=new M;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(y),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function u(){let y=new M;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let _=m(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;o.push(_,1-R)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],R=o[y+4],P=Math.max(S,_,R),C=Math.min(S,_,R);P>.9&&C<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function h(y,S){let _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function p(){let y=new M,S=new M,_=new M,R=new M,P=new _e,C=new _e,L=new _e;for(let w=0,b=0;w<s.length;w+=9,b+=6){y.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),P.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),R.copy(y).add(S).add(_).divideScalar(3);let E=m(R);x(P,b+0,y,E),x(C,b+2,S,E),x(L,b+4,_,E)}}function x(y,S,_,R){R<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new _e:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,r=[],s=[],o=[],a=new M,l=new lt;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new M)}s[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(et(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(et(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},uo=class extends Gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jc=class extends uo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Pc=new M,ff=new Zf,pf=new Zf,mf=new Zf,Jc=class extends Gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new M){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Pc.subVectors(r[0],r[1]).add(r[0]),c=Pc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Pc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Pc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),ff.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,m),pf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,m),mf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(ff.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),pf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),mf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(ff.calc(l),pf.calc(l),mf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function FM(n,e){let t=1-n;return t*t*e}function NM(n,e){return 2*(1-n)*n*e}function BM(n,e){return n*n*e}function _a(n,e,t,i){return FM(n,e)+NM(n,t)+BM(n,i)}function OM(n,e){let t=1-n;return t*t*t*e}function zM(n,e){let t=1-n;return 3*t*t*n*e}function VM(n,e){return 3*(1-n)*n*n*e}function kM(n,e){return n*n*n*e}function Ma(n,e,t,i,r){return OM(n,e)+zM(n,t)+VM(n,i)+kM(n,r)}var Oa=class extends Gn{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$c=class extends Gn{constructor(e=new M,t=new M,i=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ma(e,r.x,s.x,o.x,a.x),Ma(e,r.y,s.y,o.y,a.y),Ma(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends Gn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Gn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Gn{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(_a(e,r.x,s.x,o.x),_a(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Gn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(_a(e,r.x,s.x,o.x),_a(e,r.y,s.y,o.y),_a(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(wg(a,l.x,c.x,u.x,d.x),wg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _e().fromArray(r))}return this}},wf=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:Jc,CubicBezierCurve:Oa,CubicBezierCurve3:$c,EllipseCurve:uo,LineCurve:za,LineCurve3:Qc,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Kc,SplineCurve:ka}),eu=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new wf[r.type]().fromJSON(r))}return this}},Ga=class extends eu{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new za(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Va(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Oa(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ka(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new uo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ci=class extends Ga{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ga().fromJSON(r))}return this}};function GM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=T0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=YM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ha(s,o,t,a,l,c,0),o}function T0(n,e,t,i,r){let s;if(r===rb(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Tg(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Tg(o/i|0,n[o],n[o+1],s);return s&&ho(s,s.next)&&(qa(s),s=s.next),s}function rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ho(t,t.next)||Ht(t.prev,t,t.next)===0)){if(qa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ha(n,e,t,i,r,s,o){if(!n)return;!o&&s&&QM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?WM(n,i,r,s):HM(n)){e.push(l.i,n.i,c.i),qa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=qM(rs(n),e),Ha(n,e,t,i,r,s,2)):o===2&&XM(n,e,t,i,r,s):Ha(rs(n),e,t,i,r,s,1);break}}}function HM(n){let e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&xa(r,a,s,l,o,c,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function WM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ht(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),m=Math.max(u,d,f),g=Tf(h,p,e,t,i),y=Tf(x,m,e,t,i),S=n.prevZ,_=n.nextZ;for(;S&&S.z>=g&&_&&_.z<=y;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=m&&S!==r&&S!==o&&xa(a,u,l,d,c,f,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=h&&_.x<=x&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&xa(a,u,l,d,c,f,_.x,_.y)&&Ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=m&&S!==r&&S!==o&&xa(a,u,l,d,c,f,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=h&&_.x<=x&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&xa(a,u,l,d,c,f,_.x,_.y)&&Ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!ho(i,r)&&E0(i,t,t.next,r)&&Wa(i,r)&&Wa(r,i)&&(e.push(i.i,t.i,r.i),qa(t),qa(t.next),t=n=r),t=t.next}while(t!==n);return rs(t)}function XM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tb(o,a)){let l=C0(o,a);o=rs(o,o.next),l=rs(l,l.next),Ha(o,e,t,i,r,s,0),Ha(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function YM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=T0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(eb(c))}r.sort(ZM);for(let s=0;s<r.length;s++)t=jM(r[s],t);return t}function ZM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function jM(n,e){let t=JM(n,e);if(!t)return e;let i=C0(t,n);return rs(i,i.next),rs(t,t.next)}function JM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(ho(n,t))return t;do{if(ho(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&A0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);Wa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&$M(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function $M(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function QM(n,e,t,i){let r=n;do r.z===0&&(r.z=Tf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,KM(r)}function KM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Tf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function A0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function xa(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&A0(n,e,t,i,r,s,o,a)}function tb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nb(n,e)&&(Wa(n,e)&&Wa(e,n)&&ib(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||ho(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ho(n,e){return n.x===e.x&&n.y===e.y}function E0(n,e,t,i){let r=Lc(Ht(n,e,t)),s=Lc(Ht(n,e,i)),o=Lc(Ht(t,i,n)),a=Lc(Ht(t,i,e));return!!(r!==s&&o!==a||r===0&&Ic(n,t,e)||s===0&&Ic(n,i,e)||o===0&&Ic(t,n,i)||a===0&&Ic(t,e,i))}function Ic(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lc(n){return n>0?1:n<0?-1:0}function nb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&E0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wa(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function ib(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function C0(n,e){let t=Af(n.i,n.x,n.y),i=Af(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Tg(n,e,t,i){let r=Af(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function qa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Af(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Ef=class{static triangulate(e,t,i=2){return GM(e,t,i)}},gi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Ag(e),Eg(i,e);let o=e.length;t.forEach(Ag);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Eg(i,t[l]);let a=Ef.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Ag(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Eg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Xi=class n extends Qe{constructor(e=new ci([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:sb,S,_=!1,R,P,C,L;g&&(S=g.getSpacedPoints(u),_=!0,f=!1,R=g.computeFrenetFrames(u,!1),P=new M,C=new M,L=new M),f||(m=0,h=0,p=0,x=0);let w=a.extractPoints(c),b=w.shape,E=w.holes;if(!gi.isClockWise(b)){b=b.reverse();for(let V=0,J=E.length;V<J;V++){let Z=E[V];gi.isClockWise(Z)&&(E[V]=Z.reverse())}}function N(V){let Z=10000000000000001e-36,D=V[0];for(let j=1;j<=V.length;j++){let X=j%V.length,Q=V[X],ue=Q.x-D.x,ce=Q.y-D.y,A=ue*ue+ce*ce,v=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(D.x),Math.abs(D.y)),U=Z*v*v;if(A<=U){V.splice(X,1),j--;continue}D=Q}}N(b),E.forEach(N);let z=E.length,W=b;for(let V=0;V<z;V++){let J=E[V];b=b.concat(J)}function G(V,J,Z){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(J,Z)}let Y=b.length;function B(V,J,Z){let D,j,X,Q=V.x-J.x,ue=V.y-J.y,ce=Z.x-V.x,A=Z.y-V.y,v=Q*Q+ue*ue,U=Q*A-ue*ce;if(Math.abs(U)>Number.EPSILON){let H=Math.sqrt(v),te=Math.sqrt(ce*ce+A*A),$=J.x-ue/H,me=J.y+Q/H,fe=Z.x-A/te,ve=Z.y+ce/te,ye=((fe-$)*A-(ve-me)*ce)/(Q*A-ue*ce);D=$+Q*ye-V.x,j=me+ue*ye-V.y;let le=D*D+j*j;if(le<=2)return new _e(D,j);X=Math.sqrt(le/2)}else{let H=!1;Q>Number.EPSILON?ce>Number.EPSILON&&(H=!0):Q<-Number.EPSILON?ce<-Number.EPSILON&&(H=!0):Math.sign(ue)===Math.sign(A)&&(H=!0),H?(D=-ue,j=Q,X=Math.sqrt(v)):(D=Q,j=ue,X=Math.sqrt(v/2))}return new _e(D/X,j/X)}let se=[];for(let V=0,J=W.length,Z=J-1,D=V+1;V<J;V++,Z++,D++)Z===J&&(Z=0),D===J&&(D=0),se[V]=B(W[V],W[Z],W[D]);let ne=[],he,de=se.concat();for(let V=0,J=z;V<J;V++){let Z=E[V];he=[];for(let D=0,j=Z.length,X=j-1,Q=D+1;D<j;D++,X++,Q++)X===j&&(X=0),Q===j&&(Q=0),he[D]=B(Z[D],Z[X],Z[Q]);ne.push(he),de=de.concat(he)}let Ie;if(m===0)Ie=gi.triangulateShape(W,E);else{let V=[],J=[];for(let Z=0;Z<m;Z++){let D=Z/m,j=h*Math.cos(D*Math.PI/2),X=p*Math.sin(D*Math.PI/2)+x;for(let Q=0,ue=W.length;Q<ue;Q++){let ce=G(W[Q],se[Q],X);Pe(ce.x,ce.y,-j),D===0&&V.push(ce)}for(let Q=0,ue=z;Q<ue;Q++){let ce=E[Q];he=ne[Q];let A=[];for(let v=0,U=ce.length;v<U;v++){let H=G(ce[v],he[v],X);Pe(H.x,H.y,-j),D===0&&A.push(H)}D===0&&J.push(A)}}Ie=gi.triangulateShape(V,J)}let Ee=Ie.length,Ce=p+x;for(let V=0;V<Y;V++){let J=f?G(b[V],de[V],Ce):b[V];_?(C.copy(R.normals[0]).multiplyScalar(J.x),P.copy(R.binormals[0]).multiplyScalar(J.y),L.copy(S[0]).add(C).add(P),Pe(L.x,L.y,L.z)):Pe(J.x,J.y,0)}for(let V=1;V<=u;V++)for(let J=0;J<Y;J++){let Z=f?G(b[J],de[J],Ce):b[J];_?(C.copy(R.normals[V]).multiplyScalar(Z.x),P.copy(R.binormals[V]).multiplyScalar(Z.y),L.copy(S[V]).add(C).add(P),Pe(L.x,L.y,L.z)):Pe(Z.x,Z.y,d/u*V)}for(let V=m-1;V>=0;V--){let J=V/m,Z=h*Math.cos(J*Math.PI/2),D=p*Math.sin(J*Math.PI/2)+x;for(let j=0,X=W.length;j<X;j++){let Q=G(W[j],se[j],D);Pe(Q.x,Q.y,d+Z)}for(let j=0,X=E.length;j<X;j++){let Q=E[j];he=ne[j];for(let ue=0,ce=Q.length;ue<ce;ue++){let A=G(Q[ue],he[ue],D);_?Pe(A.x,A.y+S[u-1].y,S[u-1].x+Z):Pe(A.x,A.y,d+Z)}}}ie(),re();function ie(){let V=r.length/3;if(f){let J=0,Z=Y*J;for(let D=0;D<Ee;D++){let j=Ie[D];be(j[2]+Z,j[1]+Z,j[0]+Z)}J=u+m*2,Z=Y*J;for(let D=0;D<Ee;D++){let j=Ie[D];be(j[0]+Z,j[1]+Z,j[2]+Z)}}else{for(let J=0;J<Ee;J++){let Z=Ie[J];be(Z[2],Z[1],Z[0])}for(let J=0;J<Ee;J++){let Z=Ie[J];be(Z[0]+Y*u,Z[1]+Y*u,Z[2]+Y*u)}}i.addGroup(V,r.length/3-V,0)}function re(){let V=r.length/3,J=0;xe(W,J),J+=W.length;for(let Z=0,D=E.length;Z<D;Z++){let j=E[Z];xe(j,J),J+=j.length}i.addGroup(V,r.length/3-V,1)}function xe(V,J){let Z=V.length;for(;--Z>=0;){let D=Z,j=Z-1;j<0&&(j=V.length-1);for(let X=0,Q=u+m*2;X<Q;X++){let ue=Y*X,ce=Y*(X+1),A=J+D+ue,v=J+j+ue,U=J+j+ce,H=J+D+ce;O(A,v,U,H)}}}function Pe(V,J,Z){l.push(V),l.push(J),l.push(Z)}function be(V,J,Z){pe(V),pe(J),pe(Z);let D=r.length/3,j=y.generateTopUV(i,r,D-3,D-2,D-1);T(j[0]),T(j[1]),T(j[2])}function O(V,J,Z,D){pe(V),pe(J),pe(D),pe(J),pe(Z),pe(D);let j=r.length/3,X=y.generateSideWallUV(i,r,j-6,j-3,j-2,j-1);T(X[0]),T(X[1]),T(X[3]),T(X[1]),T(X[2]),T(X[3])}function pe(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function T(V){s.push(V.x),s.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ob(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wf[r.type]().fromJSON(r)),new n(i,e.options)}},sb={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new _e(s,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-d),new _e(f,1-p),new _e(x,1-g)]:[new _e(a,1-l),new _e(u,1-d),new _e(h,1-p),new _e(m,1-g)]}};function ob(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ut=class n extends co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xa=class n extends Qe{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=et(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new M,f=new _e,h=new M,p=new M,x=new M,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let S=i+y*u*r,_=Math.sin(S),R=Math.cos(S);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*_,d.y=e[P].y,d.z=e[P].x*R,o.push(d.x,d.y,d.z),f.x=y/t,f.y=P/(e.length-1),a.push(f.x,f.y);let C=l[3*P+0]*_,L=l[3*P+1],w=l[3*P+0]*R;c.push(C,L,w)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,R=_,P=_+e.length,C=_+e.length+1,L=_+1;s.push(R,P,L),s.push(C,L,P)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ui=class n extends co{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qt=class n extends Qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let S=0;S<c;S++){let _=S*d-s;p.push(_,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,_=y+c*(g+1),R=y+1+c*(g+1),P=y+1+c*g;h.push(S,_,P),h.push(_,R,P)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fo=class n extends Qe{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new M,p=new _e;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let g=s+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,S=y,_=y+i+1,R=y+i+2,P=y+1;a.push(S,_,P),a.push(_,R,P)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ya=class n extends Qe{constructor(e=new ci([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;gi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];gi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=gi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];h=h.concat(y)}for(let m=0,g=h.length;m<g;m++){let y=h[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],S=y[0]+d,_=y[1]+d,R=y[2]+d;i.push(S,_,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ab(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function ab(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var In=class n extends Qe{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let P=R/t;d.x=-e*Math.cos(r+P*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+P*s)*Math.sin(o+S*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(P+_,1-S),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let S=u[g][y+1],_=u[g][y],R=u[g+1][y],P=u[g+1][y+1];(g!==0||o>0)&&h.push(S,_,P),(g!==i-1||l<Math.PI)&&h.push(_,R,P)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Za=class n extends co{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},hi=class n extends Qe{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,m=(r+1)*(h-1)+p-1,g=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yi=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new M,s=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),y=a.getX(p+(m+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,y),Cg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),Cg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Cg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var xt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ja=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ft=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},tu=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nu=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ss=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},iu=class extends ss{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vf,endingEnd:vf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:s=e,a=2*t-i;break;case Mf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,l=2*i-t;break;case Mf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,S=(-1-h)*m+(1.5+h)*x+.5*p,_=h*m-h*x;for(let R=0;R!==a;++R)s[R]=g*o[u+R]+y*o[c+R]+S*o[l+R]+_*o[d+R];return s}},ru=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},su=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dc(t,this.TimeBufferType),this.values=Dc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dc(e.times,Array),values:Dc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Vc:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Vc;var Mr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ba;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};ou.prototype.ValueTypeName="color";var au=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};au.prototype.ValueTypeName="number";var lu=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ja=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new lu(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends Hn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=ba;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var cu=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};cu.prototype.ValueTypeName="vector";var Nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},uu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},R0=new uu,po=class{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=new WeakMap,hu=class extends po{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Nc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Ys.get(o);d===void 0&&(d=[],Ys.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=Ks("img");function l(){u(),t&&t(this);let d=Ys.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Ys.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Nc.remove(`image:${e}`);let f=Ys.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Ys.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Nc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var _i=class extends po{constructor(e){super(e)}load(e,t,i,r){let s=new gn,o=new hu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},mo=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$a=class extends mo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gf=new lt,Rg=new M,Pg=new M,du=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rg),Pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pg),t.updateMatrixWorld(),gf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ig=new lt,ga=new M,xf=new M,Cf=class extends du{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(ga),xf.copy(i.position),xf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xf),i.updateMatrixWorld(),r.makeTranslation(-ga.x,-ga.y,-ga.z),Ig.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ig,i.coordinateSystem,i.reversedDepth)}},Qa=class extends mo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ka=class extends Ea{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rf=class extends du{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Rf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fu=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jf="\\[\\]\\.:\\/",cb=new RegExp("["+jf+"]","g"),Jf="[^"+jf+"]",ub="[^"+jf.replace("\\.","")+"]",hb=/((?:WC+[\/:])*)/.source.replace("WC",Jf),db=/(WCOD+)?/.source.replace("WCOD",ub),fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),mb=new RegExp("^"+hb+db+fb+pb+"$"),gb=["material","materials","bones","map"],Pf=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cb,"")}static parseTrackName(e){let t=mb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);gb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Pf;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q2=new Float32Array(1);var Lg=new lt,Zi=class{constructor(e,t,i=0,r=1/0){this.ray=new es(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lg),this}intersectObject(e,t=!0,i=[]){return If(e,this,i,t),i.sort(Dg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)If(e[r],this,i,t);return i.sort(Dg),i}};function Dg(n,e){return n.distance-e.distance}function If(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)If(s[o],e,t,!0)}}var Ug=new M,Uc=new M,Zs=new M,js=new M,yf=new M,xb=new M,yb=new M,tl=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ug.subVectors(e,this.start),Uc.subVectors(this.end,this.start);let i=Uc.dot(Uc),s=Uc.dot(Ug)/i;return t&&(s=et(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=xb,i=yb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Zs.subVectors(c,a),js.subVectors(u,l),yf.subVectors(a,l);let d=Zs.dot(Zs),f=js.dot(js),h=js.dot(yf);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=et(o,0,1);else{let p=Zs.dot(yf);if(f<=r)o=0,s=et(-p/d,0,1);else{let x=Zs.dot(js),m=d*f-x*x;m!==0?s=et((x*h-p*f)/m,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=et(-p/d,0,1)):o>1&&(o=1,s=et((x-p)/d,0,1))}}return t.copy(a).add(Zs.multiplyScalar(s)),i.copy(l).add(js.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function $f(n,e,t,i){let r=vb(i);switch(t){case Vf:return n*e;case Cu:return n*e/r.components*r.byteLength;case Ru:return n*e/r.components*r.byteLength;case Gf:return n*e*2/r.components*r.byteLength;case Pu:return n*e*2/r.components*r.byteLength;case kf:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case Iu:return n*e*4/r.components*r.byteLength;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Du:case Fu:return Math.max(n,16)*Math.max(e,8)/4;case Lu:case Uu:return Math.max(n,8)*Math.max(e,8)/2;case Nu:case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ku:case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rh:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vb(n){switch(n){case Wn:case Nf:return{byteLength:1,components:1};case xo:case Bf:case bi:return{byteLength:2,components:1};case Au:case Eu:return{byteLength:2,components:4};case Sr:case Tu:case di:return{byteLength:4,components:1};case Of:case zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ab=`#ifdef USE_ALPHAHASH
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
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
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
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
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
#endif`,Ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,zb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zb=`#define PI 3.141592653589793
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
} // validated`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
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
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
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
#endif`,S1=`struct PhysicalMaterial {
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
}`,w1=`
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
#endif`,T1=`#if defined( RE_IndirectDiffuse )
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U1=`#if defined( USE_POINTS_UV )
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
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
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
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
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
#endif`,Z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cS=`float getShadowMask() {
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
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
#endif`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
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
}`,IS=`#if DEPTH_PACKING == 3200
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
}`,LS=`#define DISTANCE
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
}`,DS=`#define DISTANCE
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
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
}`,BS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,zS=`uniform vec3 diffuse;
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
}`,VS=`#define LAMBERT
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
}`,kS=`#define LAMBERT
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
}`,GS=`#define MATCAP
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
}`,HS=`#define MATCAP
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
}`,WS=`#define NORMAL
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
}`,qS=`#define NORMAL
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
}`,XS=`#define PHONG
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
}`,YS=`#define PHONG
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
}`,ZS=`#define STANDARD
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
}`,jS=`#define STANDARD
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
}`,JS=`#define TOON
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
}`,$S=`#define TOON
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
}`,QS=`uniform float size;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 color;
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
}`,nw=`uniform float rotation;
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
}`,iw=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Tb,alphahash_pars_fragment:Ab,alphamap_fragment:Eb,alphamap_pars_fragment:Cb,alphatest_fragment:Rb,alphatest_pars_fragment:Pb,aomap_fragment:Ib,aomap_pars_fragment:Lb,batching_pars_vertex:Db,batching_vertex:Ub,begin_vertex:Fb,beginnormal_vertex:Nb,bsdfs:Bb,iridescence_fragment:Ob,bumpmap_pars_fragment:zb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Hb,color_fragment:Wb,color_pars_fragment:qb,color_pars_vertex:Xb,color_vertex:Yb,common:Zb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:Qb,emissivemap_fragment:Kb,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:s1,envmap_pars_vertex:o1,envmap_physical_pars_fragment:x1,envmap_vertex:a1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:h1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:f1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:y1,lights_toon_pars_fragment:v1,lights_phong_fragment:_1,lights_phong_pars_fragment:M1,lights_physical_fragment:b1,lights_physical_pars_fragment:S1,lights_fragment_begin:w1,lights_fragment_maps:T1,lights_fragment_end:A1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:P1,map_fragment:I1,map_pars_fragment:L1,map_particle_fragment:D1,map_particle_pars_fragment:U1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:N1,morphinstance_vertex:B1,morphcolor_vertex:O1,morphnormal_vertex:z1,morphtarget_pars_vertex:V1,morphtarget_vertex:k1,normal_fragment_begin:G1,normal_fragment_maps:H1,normal_pars_fragment:W1,normal_pars_vertex:q1,normal_vertex:X1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:Z1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:J1,iridescence_pars_fragment:$1,opaque_fragment:Q1,packing:K1,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:aS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:uS,skinning_pars_vertex:hS,skinning_vertex:dS,skinnormal_vertex:fS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:xS,transmission_fragment:yS,transmission_pars_fragment:vS,uv_pars_fragment:_S,uv_pars_vertex:MS,uv_vertex:bS,worldpos_vertex:SS,background_vert:wS,background_frag:TS,backgroundCube_vert:AS,backgroundCube_frag:ES,cube_vert:CS,cube_frag:RS,depth_vert:PS,depth_frag:IS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:US,equirect_frag:FS,linedashed_vert:NS,linedashed_frag:BS,meshbasic_vert:OS,meshbasic_frag:zS,meshlambert_vert:VS,meshlambert_frag:kS,meshmatcap_vert:GS,meshmatcap_frag:HS,meshnormal_vert:WS,meshnormal_frag:qS,meshphong_vert:XS,meshphong_frag:YS,meshphysical_vert:ZS,meshphysical_frag:jS,meshtoon_vert:JS,meshtoon_frag:$S,points_vert:QS,points_frag:KS,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},Fe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Si={basic:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Fe.points,Fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Fe.common,Fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Fe.sprite,Fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Fe.lights,Fe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:xn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var lh={r:0,b:0,g:0},cs=new nn,rw=new lt;function sw(n,e,t,i,r,s,o){let a=new Ue(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function x(S){let _=!1,R=p(S);R===null?g(a,l):R&&R.isColor&&(g(R,1),_=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,_){let R=p(_);R&&(R.isCubeTexture||R.mapping===il)?(u===void 0&&(u=new ze(new Ke(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ls(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cs.copy(_.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rw.makeRotationFromEuler(cs)),u.material.toneMapped=dt.getTransfer(R.colorSpace)!==bt,(d!==R||f!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ze(new qt(2,2),new hn({name:"BackgroundMaterial",uniforms:ls(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(R.colorSpace)!==bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,_){S.getRGB(lh,Yf(n)),i.buffers.color.setClear(lh.r,lh.g,lh.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:x,addToRenderList:m,dispose:y}}function ow(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(b,E,F,N,z){let W=!1,G=d(N,F,E);s!==G&&(s=G,c(s.object)),W=h(b,N,F,z),W&&p(b,N,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(b,E,F,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,E,F){let N=F.wireframe===!0,z=i[b.id];z===void 0&&(z={},i[b.id]=z);let W=z[E.id];W===void 0&&(W={},z[E.id]=W);let G=W[N];return G===void 0&&(G=f(l()),W[N]=G),G}function f(b){let E=[],F=[],N=[];for(let z=0;z<t;z++)E[z]=0,F[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:N,object:b,attributes:{},index:null}}function h(b,E,F,N){let z=s.attributes,W=E.attributes,G=0,Y=F.getAttributes();for(let B in Y)if(Y[B].location>=0){let ne=z[B],he=W[B];if(he===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function p(b,E,F,N){let z={},W=E.attributes,G=0,Y=F.getAttributes();for(let B in Y)if(Y[B].location>=0){let ne=W[B];ne===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));let he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),z[B]=he,G++}s.attributes=z,s.attributesNum=G,s.index=N}function x(){let b=s.newAttributes;for(let E=0,F=b.length;E<F;E++)b[E]=0}function m(b){g(b,0)}function g(b,E){let F=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;F[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),z[b]!==E&&(n.vertexAttribDivisor(b,E),z[b]=E)}function y(){let b=s.newAttributes,E=s.enabledAttributes;for(let F=0,N=E.length;F<N;F++)E[F]!==b[F]&&(n.disableVertexAttribArray(F),E[F]=0)}function S(b,E,F,N,z,W,G){G===!0?n.vertexAttribIPointer(b,E,F,z,W):n.vertexAttribPointer(b,E,F,N,z,W)}function _(b,E,F,N){x();let z=N.attributes,W=F.getAttributes(),G=E.defaultAttributeValues;for(let Y in W){let B=W[Y];if(B.location>=0){let se=z[Y];if(se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let ne=se.normalized,he=se.itemSize,de=e.get(se);if(de===void 0)continue;let Ie=de.buffer,Ee=de.type,Ce=de.bytesPerElement,ie=Ee===n.INT||Ee===n.UNSIGNED_INT||se.gpuType===Tu;if(se.isInterleavedBufferAttribute){let re=se.data,xe=re.stride,Pe=se.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<B.locationSize;be++)g(B.location+be,re.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<B.locationSize;be++)m(B.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let be=0;be<B.locationSize;be++)S(B.location+be,he/B.locationSize,Ee,ne,xe*Ce,(Pe+he/B.locationSize*be)*Ce,ie)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)g(B.location+re,se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<B.locationSize;re++)m(B.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let re=0;re<B.locationSize;re++)S(B.location+re,he/B.locationSize,Ee,ne,he*Ce,he/B.locationSize*re*Ce,ie)}}else if(G!==void 0){let ne=G[Y];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(B.location,ne);break;case 3:n.vertexAttrib3fv(B.location,ne);break;case 4:n.vertexAttrib4fv(B.location,ne);break;default:n.vertexAttrib1fv(B.location,ne)}}}}y()}function R(){L();for(let b in i){let E=i[b];for(let F in E){let N=E[F];for(let z in N)u(N[z].object),delete N[z];delete E[F]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;let E=i[b.id];for(let F in E){let N=E[F];for(let z in N)u(N[z].object),delete N[z];delete E[F]}delete i[b.id]}function C(b){for(let E in i){let F=i[E];if(F[b.id]===void 0)continue;let N=F[b.id];for(let z in N)u(N[z].object),delete N[z];delete F[b.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function aw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:R,maxSamples:P}}function cw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new En,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:i,S=y*4,_=g.clippingState||null;l.value=_,_=u(p,f,S,h);for(let R=0;R!==S;++R)_[R]=t[R];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,_=h;S!==x;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function uw(n){let e=new WeakMap;function t(o,a){return a===go?o.mapping=os:a===Su&&(o.mapping=as),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===Su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Mo=4,P0=[.125,.215,.35,.446,.526,.582],ds=20,Qf=new Ka,I0=new Ue,Kf=null,ep=0,tp=0,np=!1,hs=(1+Math.sqrt(5))/2,_o=1/hs,L0=[new M(-hs,_o,0),new M(hs,_o,0),new M(-_o,0,hs),new M(_o,0,hs),new M(0,hs,-_o),new M(0,hs,_o),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],hw=new M,So=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=hw}=s;Kf=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,ep,tp),this._renderer.xr.enabled=np,e.scissorTest=!1,ch(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:bi,format:Dn,colorSpace:Kr,depthBuffer:!1},r=D0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(s)),this._blurMaterial=fw(s,e,t)}return r}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Qf)}_sceneToCubeUV(e,t,i,r,s){let l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(I0),d.toneMapping=Ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new mt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new ze(new Ke,x),g=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,g=!0):(x.color.copy(I0),g=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));let R=this._cubeSize;ch(r,_*R,S>2?R:0,R,R),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===os||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ch(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=L0[(r-s-1)%L0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ze(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ds-1),x=s/p,m=isFinite(s)?1+Math.floor(u*x):ds;m>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let g=[],y=0;for(let C=0;C<ds;++C){let L=C/x,w=Math.exp(-L*L/2);g.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<g.length;C++)g[C]=g[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-i;let _=this._sizeLods[r],R=3*_*(r>S-Mo?r-S+Mo:0),P=4*(this._cubeSize-_);ch(t,R,P,3*_,2*_),l.setRenderTarget(t),l.render(d,Qf)}};function dw(n){let e=[],t=[],i=[],r=n,s=n-Mo+1+P0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Mo?l=P0[o-n+Mo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*h),S=new Float32Array(m*p*h),_=new Float32Array(g*p*h);for(let P=0;P<h;P++){let C=P%3*2/3-1,L=P>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];y.set(w,x*p*P),S.set(f,m*p*P);let b=[P,P,P,P,P,P];_.set(b,g*p*P)}let R=new Qe;R.setAttribute("position",new ft(y,x)),R.setAttribute("uv",new ft(S,m)),R.setAttribute("faceIndex",new ft(_,g)),e.push(R),r>Mo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function D0(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ch(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fw(n,e,t){let i=new Float32Array(ds),r=new M(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function U0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function F0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function pw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===go||l===Su,u=l===os||l===as;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new So(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new So(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gw(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let S=0,_=y.length;S<_;S+=3){let R=y[S+0],P=y[S+1],C=y[S+2];f.push(R,P,P,C,C,R)}}else if(p!==void 0){let y=p.array;x=p.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let R=S+0,P=S+1,C=S+2;f.push(R,P,P,C,C,R)}}else return;let m=new(Xf(f)?Aa:ts)(f,1);m.version=x;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function xw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function d(f,h,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y]*x[y];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function yw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vw(n,e,t){let i=new WeakMap,r=new ut;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;h===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let P=new Float32Array(_*R*4*d),C=new Ta(P,_,R,d);C.type=di,C.needsUpdate=!0;let L=S*4;for(let b=0;b<d;b++){let E=m[b],F=g[b],N=y[b],z=_*R*4*b;for(let W=0;W<E.count;W++){let G=W*L;h===!0&&(r.fromBufferAttribute(E,W),P[z+G+0]=r.x,P[z+G+1]=r.y,P[z+G+2]=r.z,P[z+G+3]=0),p===!0&&(r.fromBufferAttribute(F,W),P[z+G+4]=r.x,P[z+G+5]=r.y,P[z+G+6]=r.z,P[z+G+7]=0),x===!0&&(r.fromBufferAttribute(N,W),P[z+G+8]=r.x,P[z+G+9]=r.y,P[z+G+10]=r.z,P[z+G+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new _e(_,R)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function _w(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ex=new gn,N0=new Na(1,1),tx=new Ta,nx=new Wc,ix=new Ca,B0=[],O0=[],z0=new Float32Array(16),V0=new Float32Array(9),k0=new Float32Array(4);function wo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=B0[r];if(s===void 0&&(s=new Float32Array(r),B0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dh(n,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function Sw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function Tw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;k0.set(i),n.uniformMatrix2fv(this.addr,!1,k0),an(t,i)}}function Aw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;V0.set(i),n.uniformMatrix3fv(this.addr,!1,V0),an(t,i)}}function Ew(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;z0.set(i),n.uniformMatrix4fv(this.addr,!1,z0),an(t,i)}}function Cw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function Pw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function Iw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function Lw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function Uw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function Fw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function Nw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(N0.compareFunction=Hf,s=N0):s=ex,t.setTexture2D(e||s,r)}function Bw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nx,r)}function Ow(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ix,r)}function zw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tx,r)}function Vw(n){switch(n){case 5126:return Mw;case 35664:return bw;case 35665:return Sw;case 35666:return ww;case 35674:return Tw;case 35675:return Aw;case 35676:return Ew;case 5124:case 35670:return Cw;case 35667:case 35671:return Rw;case 35668:case 35672:return Pw;case 35669:case 35673:return Iw;case 5125:return Lw;case 36294:return Dw;case 36295:return Uw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return zw}}function kw(n,e){n.uniform1fv(this.addr,e)}function Gw(n,e){let t=wo(e,this.size,2);n.uniform2fv(this.addr,t)}function Hw(n,e){let t=wo(e,this.size,3);n.uniform3fv(this.addr,t)}function Ww(n,e){let t=wo(e,this.size,4);n.uniform4fv(this.addr,t)}function qw(n,e){let t=wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xw(n,e){let t=wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yw(n,e){let t=wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zw(n,e){n.uniform1iv(this.addr,e)}function jw(n,e){n.uniform2iv(this.addr,e)}function Jw(n,e){n.uniform3iv(this.addr,e)}function $w(n,e){n.uniform4iv(this.addr,e)}function Qw(n,e){n.uniform1uiv(this.addr,e)}function Kw(n,e){n.uniform2uiv(this.addr,e)}function eT(n,e){n.uniform3uiv(this.addr,e)}function tT(n,e){n.uniform4uiv(this.addr,e)}function nT(n,e,t){let i=this.cache,r=e.length,s=dh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ex,s[o])}function iT(n,e,t){let i=this.cache,r=e.length,s=dh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nx,s[o])}function rT(n,e,t){let i=this.cache,r=e.length,s=dh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ix,s[o])}function sT(n,e,t){let i=this.cache,r=e.length,s=dh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tx,s[o])}function oT(n){switch(n){case 5126:return kw;case 35664:return Gw;case 35665:return Hw;case 35666:return Ww;case 35674:return qw;case 35675:return Xw;case 35676:return Yw;case 5124:case 35670:return Zw;case 35667:case 35671:return jw;case 35668:case 35672:return Jw;case 35669:case 35673:return $w;case 5125:return Qw;case 36294:return Kw;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}var rp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vw(t.type)}},sp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oT(t.type)}},op=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ip=/(\w+)(\])?(\[|\.)?/g;function G0(n,e){n.seq.push(e),n.map[e.id]=e}function aT(n,e,t){let i=n.name,r=i.length;for(ip.lastIndex=0;;){let s=ip.exec(i),o=ip.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){G0(t,c===void 0?new rp(a,n,e):new sp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new op(a),G0(t,d)),t=d}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);aT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function H0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var lT=37297,cT=0;function uT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var W0=new nt;function hT(n){dt._getMatrix(W0,dt.workingColorSpace,n);let e=`mat3( ${W0.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Sa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function q0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+uT(n.getShaderSource(e),a)}else return s}function dT(n,e){let t=hT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fT(n,e){let t;switch(e){case r0:t="Linear";break;case s0:t="Reinhard";break;case o0:t="Cineon";break;case bu:t="ACESFilmic";break;case l0:t="AgX";break;case c0:t="Neutral";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uh=new M;function pT(){dt.getLuminanceCoefficients(uh);let n=uh.x.toFixed(4),e=uh.y.toFixed(4),t=uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function gT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cl(n){return n!==""}function X0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(yT,_T)}var vT=new Map;function _T(n,e){let t=st[e];if(t===void 0){let i=vT.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}var MT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(n){return n.replace(MT,bT)}function bT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ST(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case as:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case n0:e="ENVMAP_BLENDING_MIX";break;case i0:e="ENVMAP_BLENDING_ADD";break}return e}function ET(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ST(t),c=wT(t),u=TT(t),d=AT(t),f=ET(t),h=mT(t),p=gT(s),x=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cl).join(`
`),g.length>0&&(g+=`
`)):(m=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),g=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?st.tonemapping_pars_fragment:"",t.toneMapping!==Ji?fT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,dT("linearToOutputTexel",t.outputColorSpace),pT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),o=ap(o),o=X0(o,t),o=Y0(o,t),a=ap(a),a=X0(a,t),a=Y0(a,t),o=Z0(o),a=Z0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=y+m+o,_=y+g+a,R=H0(r,r.VERTEX_SHADER,S),P=H0(r,r.FRAGMENT_SHADER,_);r.attachShader(x,R),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(E){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(R)||"",z=r.getShaderInfoLog(P)||"",W=F.trim(),G=N.trim(),Y=z.trim(),B=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,P);else{let ne=q0(r,R,"vertex"),he=q0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+ne+`
`+he)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Y==="")&&(se=!1);se&&(E.diagnostics={runnable:B,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:g}})}r.deleteShader(R),r.deleteShader(P),L=new bo(r,x),w=xT(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,lT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=P,this}var RT=0,lp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cp(e),t.set(e,i)),i}},cp=class{constructor(e){this.id=RT++,this.code=e,this.usedTimes=0}};function PT(n,e,t,i,r,s,o){let a=new no,l=new lp,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,E,F,N){let z=F.fog,W=N.geometry,G=w.isMeshStandardMaterial?F.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),B=Y&&Y.mapping===il?Y.image.height:null,se=p[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=ne!==void 0?ne.length:0,de=0;W.morphAttributes.position!==void 0&&(de=1),W.morphAttributes.normal!==void 0&&(de=2),W.morphAttributes.color!==void 0&&(de=3);let Ie,Ee,Ce,ie;if(se){let vt=Si[se];Ie=vt.vertexShader,Ee=vt.fragmentShader}else Ie=w.vertexShader,Ee=w.fragmentShader,l.update(w),Ce=l.getVertexShaderID(w),ie=l.getFragmentShaderID(w);let re=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,O=!!w.map,pe=!!w.matcap,T=!!Y,V=!!w.aoMap,J=!!w.lightMap,Z=!!w.bumpMap,D=!!w.normalMap,j=!!w.displacementMap,X=!!w.emissiveMap,Q=!!w.metalnessMap,ue=!!w.roughnessMap,ce=w.anisotropy>0,A=w.clearcoat>0,v=w.dispersion>0,U=w.iridescence>0,H=w.sheen>0,te=w.transmission>0,$=ce&&!!w.anisotropyMap,me=A&&!!w.clearcoatMap,fe=A&&!!w.clearcoatNormalMap,ve=A&&!!w.clearcoatRoughnessMap,ye=U&&!!w.iridescenceMap,le=U&&!!w.iridescenceThicknessMap,Me=H&&!!w.sheenColorMap,Ve=H&&!!w.sheenRoughnessMap,Se=!!w.specularMap,Ae=!!w.specularColorMap,We=!!w.specularIntensityMap,q=te&&!!w.transmissionMap,Te=te&&!!w.thicknessMap,Le=!!w.gradientMap,Be=!!w.alphaMap,we=w.alphaTest>0,ge=!!w.alphaHash,He=!!w.extensions,tt=Ji;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Pt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ie,fragmentShader:Ee,defines:w.defines,customVertexShaderID:Ce,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Kr,alphaToCoverage:!!w.alphaToCoverage,map:O,matcap:pe,envMap:T,envMapMode:T&&Y.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:J,bumpMap:Z,normalMap:D,displacementMap:f&&j,emissiveMap:X,normalMapObjectSpace:D&&w.normalMapType===f0,normalMapTangentSpace:D&&w.normalMapType===oh,metalnessMap:Q,roughnessMap:ue,anisotropy:ce,anisotropyMap:$,clearcoat:A,clearcoatMap:me,clearcoatNormalMap:fe,clearcoatRoughnessMap:ve,dispersion:v,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:le,sheen:H,sheenColorMap:Me,sheenRoughnessMap:Ve,specularMap:Se,specularColorMap:Ae,specularIntensityMap:We,transmission:te,transmissionMap:q,thicknessMap:Te,gradientMap:Le,opaque:w.transparent===!1&&w.blending===$r&&w.alphaToCoverage===!1,alphaMap:Be,alphaTest:we,alphaHash:ge,combine:w.combine,mapUv:O&&x(w.map.channel),aoMapUv:V&&x(w.aoMap.channel),lightMapUv:J&&x(w.lightMap.channel),bumpMapUv:Z&&x(w.bumpMap.channel),normalMapUv:D&&x(w.normalMap.channel),displacementMapUv:j&&x(w.displacementMap.channel),emissiveMapUv:X&&x(w.emissiveMap.channel),metalnessMapUv:Q&&x(w.metalnessMap.channel),roughnessMapUv:ue&&x(w.roughnessMap.channel),anisotropyMapUv:$&&x(w.anisotropyMap.channel),clearcoatMapUv:me&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(w.sheenRoughnessMap.channel),specularMapUv:Se&&x(w.specularMap.channel),specularColorMapUv:Ae&&x(w.specularColorMap.channel),specularIntensityMapUv:We&&x(w.specularIntensityMap.channel),transmissionMapUv:q&&x(w.transmissionMap.channel),thicknessMapUv:Te&&x(w.thicknessMap.channel),alphaMapUv:Be&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(D||ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(O||Be),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:O&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:X&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ct,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function g(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let E in w.defines)b.push(E),b.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(y(b,w),S(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let b=p[w.type],E;if(b){let F=Si[b];E=ah.clone(F.uniforms)}else E=w.uniforms;return E}function R(w,b){let E;for(let F=0,N=u.length;F<N;F++){let z=u[F];if(z.cacheKey===b){E=z,++E.usedTimes;break}}return E===void 0&&(E=new CT(n,b,w,s),u.push(E)),E}function P(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:R,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:L}}function IT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function J0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.push(g):h.transparent===!0?r.push(g):t.push(g)}function l(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||LT),i.length>1&&i.sort(f||J0),r.length>1&&r.sort(f||J0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new $0,n.set(i,[o])):r>=s.length?(o=new $0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function UT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ue};break;case"SpotLight":t={position:new M,direction:new M,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function FT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var NT=0;function BT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OT(n){let e=new UT,t=FT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let r=new M,s=new lt,o=new lt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,x=0,m=0,g=0,y=0,S=0,_=0,R=0,P=0,C=0;c.sort(BT);for(let w=0,b=c.length;w<b;w++){let E=c[w],F=E.color,N=E.intensity,z=E.distance,W=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],N);C++}else if(E.isDirectionalLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Y=E.shadow,B=t.get(E);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=E.shadow.matrix,y++}i.directional[h]=G,h++}else if(E.isSpotLight){let G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(F).multiplyScalar(N),G.distance=z,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;let Y=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Y.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[x]=Y.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=W,_++}x++}else if(E.isRectAreaLight){let G=e.get(E);G.color.copy(F).multiplyScalar(N),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){let Y=E.shadow,B=t.get(E);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=E.shadow.matrix,S++}i.point[p]=G,p++}else if(E.isHemisphereLight){let G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(N),G.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[g]=G,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==g||L.numDirectionalShadows!==y||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,L.directionalLength=h,L.pointLength=p,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=g,L.numDirectionalShadows=y,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=R,L.numLightProbes=C,i.version=NT++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let S=c[g];if(S.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(S.isSpotLight){let _=i.spot[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Q0(n){let e=new OT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Q0(n),e.set(r,[a])):s>=o.length?(a=new Q0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`;function GT(n,e,t){let i=new ao,r=new _e,s=new _e,o=new ut,a=new tu({depthPacking:d0}),l=new nu,c={},u=t.maxTextureSize,d={[li]:dn,[dn]:li,[Ct]:Ct},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:VT,fragmentShader:kT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let g=this.type;this.render=function(P,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ji),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=g!==Mi&&this.type===Mi,z=g===Mi&&this.type!==Mi;for(let W=0,G=P.length;W<G;W++){let Y=P[W],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let se=B.getFrameExtents();if(r.multiply(se),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,B.mapSize.y=s.y)),B.map===null||N===!0||z===!0){let he=this.type!==Mi?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(r.x,r.y,he),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ne=B.getViewportCount();for(let he=0;he<ne;he++){let de=B.getViewport(he);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(o),B.updateMatrices(Y,he),i=B.getFrustum(),_(C,L,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Mi&&y(B,L),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,E)};function y(P,C){let L=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Rn(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,L,f,x,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,L,h,x,null)}function S(P,C,L,w){let b=null,E=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)b=E;else if(b=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=b.uuid,N=C.uuid,z=c[F];z===void 0&&(z={},c[F]=z);let W=z[N];W===void 0&&(W=b.clone(),z[N]=W,C.addEventListener("dispose",R)),b=W}if(b.visible=C.visible,b.wireframe=C.wireframe,w===Mi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=n.properties.get(b);F.light=L}return b}function _(P,C,L,w,b){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Mi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);let N=e.update(P),z=P.material;if(Array.isArray(z)){let W=N.groups;for(let G=0,Y=W.length;G<Y;G++){let B=W[G],se=z[B.materialIndex];if(se&&se.visible){let ne=S(P,se,w,b);P.onBeforeShadow(n,P,C,L,N,ne,B),n.renderBufferDirect(L,null,N,ne,P,B),P.onAfterShadow(n,P,C,L,N,ne,B)}}}else if(z.visible){let W=S(P,z,w,b);P.onBeforeShadow(n,P,C,L,N,W,null),n.renderBufferDirect(L,null,N,W,P,null),P.onAfterShadow(n,P,C,L,N,W,null)}}let F=P.children;for(let N=0,z=F.length;N<z;N++)_(F[N],C,L,w,b)}function R(P){P.target.removeEventListener("dispose",R);for(let L in c){let w=c[L],b=P.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var HT={[pu]:mu,[gu]:vu,[xu]:_u,[Qr]:yu,[mu]:pu,[vu]:gu,[_u]:xu,[yu]:Qr};function WT(n,e){function t(){let q=!1,Te=new ut,Le=null,Be=new ut(0,0,0,0);return{setMask:function(we){Le!==we&&!q&&(n.colorMask(we,we,we,we),Le=we)},setLocked:function(we){q=we},setClear:function(we,ge,He,tt,Pt){Pt===!0&&(we*=tt,ge*=tt,He*=tt),Te.set(we,ge,He,tt),Be.equals(Te)===!1&&(n.clearColor(we,ge,He,tt),Be.copy(Te))},reset:function(){q=!1,Le=null,Be.set(-1,0,0,0)}}}function i(){let q=!1,Te=!1,Le=null,Be=null,we=null;return{setReversed:function(ge){if(Te!==ge){let He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;let tt=we;we=null,this.setClear(tt)}},getReversed:function(){return Te},setTest:function(ge){ge?re(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ge){Le!==ge&&!q&&(n.depthMask(ge),Le=ge)},setFunc:function(ge){if(Te&&(ge=HT[ge]),Be!==ge){switch(ge){case pu:n.depthFunc(n.NEVER);break;case mu:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case xu:n.depthFunc(n.EQUAL);break;case yu:n.depthFunc(n.GEQUAL);break;case vu:n.depthFunc(n.GREATER);break;case _u:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=ge}},setLocked:function(ge){q=ge},setClear:function(ge){we!==ge&&(Te&&(ge=1-ge),n.clearDepth(ge),we=ge)},reset:function(){q=!1,Le=null,Be=null,we=null,Te=!1}}}function r(){let q=!1,Te=null,Le=null,Be=null,we=null,ge=null,He=null,tt=null,Pt=null;return{setTest:function(vt){q||(vt?re(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!q&&(n.stencilMask(vt),Te=vt)},setFunc:function(vt,Bi,mi){(Le!==vt||Be!==Bi||we!==mi)&&(n.stencilFunc(vt,Bi,mi),Le=vt,Be=Bi,we=mi)},setOp:function(vt,Bi,mi){(ge!==vt||He!==Bi||tt!==mi)&&(n.stencilOp(vt,Bi,mi),ge=vt,He=Bi,tt=mi)},setLocked:function(vt){q=vt},setClear:function(vt){Pt!==vt&&(n.clearStencil(vt),Pt=vt)},reset:function(){q=!1,Te=null,Le=null,Be=null,we=null,ge=null,He=null,tt=null,Pt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,S=null,_=null,R=null,P=null,C=new Ue(0,0,0),L=0,w=!1,b=null,E=null,F=null,N=null,z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Y=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let se=null,ne={},he=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ie=new ut().fromArray(he),Ee=new ut().fromArray(de);function Ce(q,Te,Le,Be){let we=new Uint8Array(4),ge=n.createTexture();n.bindTexture(q,ge),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Le;He++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Te+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ge}let ie={};ie[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(Qr),Z(!1),D(Lf),re(n.CULL_FACE),V(ji);function re(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function xe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Pe(q,Te){return d[q]!==Te?(n.bindFramebuffer(q,Te),d[q]=Te,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Te),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function be(q,Te){let Le=h,Be=!1;if(q){Le=f.get(Te),Le===void 0&&(Le=[],f.set(Te,Le));let we=q.textures;if(Le.length!==we.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,He=we.length;ge<He;ge++)Le[ge]=n.COLOR_ATTACHMENT0+ge;Le.length=we.length,Be=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Be=!0);Be&&n.drawBuffers(Le)}function O(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let pe={[vr]:n.FUNC_ADD,[zg]:n.FUNC_SUBTRACT,[Vg]:n.FUNC_REVERSE_SUBTRACT};pe[kg]=n.MIN,pe[Gg]=n.MAX;let T={[Hg]:n.ZERO,[Wg]:n.ONE,[qg]:n.SRC_COLOR,[Bc]:n.SRC_ALPHA,[$g]:n.SRC_ALPHA_SATURATE,[jg]:n.DST_COLOR,[Yg]:n.DST_ALPHA,[Xg]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[Jg]:n.ONE_MINUS_DST_COLOR,[Zg]:n.ONE_MINUS_DST_ALPHA,[Qg]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[e0]:n.CONSTANT_ALPHA,[t0]:n.ONE_MINUS_CONSTANT_ALPHA};function V(q,Te,Le,Be,we,ge,He,tt,Pt,vt){if(q===ji){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(re(n.BLEND),x=!0),q!==Og){if(q!==m||vt!==w){if((g!==vr||_!==vr)&&(n.blendEquation(n.FUNC_ADD),g=vr,_=vr),vt)switch(q){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Df:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,S=null,R=null,P=null,C.set(0,0,0),L=0,m=q,w=vt}return}we=we||Te,ge=ge||Le,He=He||Be,(Te!==g||we!==_)&&(n.blendEquationSeparate(pe[Te],pe[we]),g=Te,_=we),(Le!==y||Be!==S||ge!==R||He!==P)&&(n.blendFuncSeparate(T[Le],T[Be],T[ge],T[He]),y=Le,S=Be,R=ge,P=He),(tt.equals(C)===!1||Pt!==L)&&(n.blendColor(tt.r,tt.g,tt.b,Pt),C.copy(tt),L=Pt),m=q,w=!1}function J(q,Te){q.side===Ct?xe(n.CULL_FACE):re(n.CULL_FACE);let Le=q.side===dn;Te&&(Le=!Le),Z(Le),q.blending===$r&&q.transparent===!1?V(ji):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Be=q.stencilWrite;a.setTest(Be),Be&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),X(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(q){b!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),b=q)}function D(q){q!==Fg?(re(n.CULL_FACE),q!==E&&(q===Lf?n.cullFace(n.BACK):q===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),E=q}function j(q){q!==F&&(G&&n.lineWidth(q),F=q)}function X(q,Te,Le){q?(re(n.POLYGON_OFFSET_FILL),(N!==Te||z!==Le)&&(n.polygonOffset(Te,Le),N=Te,z=Le)):xe(n.POLYGON_OFFSET_FILL)}function Q(q){q?re(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ue(q){q===void 0&&(q=n.TEXTURE0+W-1),se!==q&&(n.activeTexture(q),se=q)}function ce(q,Te,Le){Le===void 0&&(se===null?Le=n.TEXTURE0+W-1:Le=se);let Be=ne[Le];Be===void 0&&(Be={type:void 0,texture:void 0},ne[Le]=Be),(Be.type!==q||Be.texture!==Te)&&(se!==Le&&(n.activeTexture(Le),se=Le),n.bindTexture(q,Te||ie[q]),Be.type=q,Be.texture=Te)}function A(){let q=ne[se];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function H(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function fe(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(q){Ie.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Ie.copy(q))}function Ve(q){Ee.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),Ee.copy(q))}function Se(q,Te){let Le=c.get(Te);Le===void 0&&(Le=new WeakMap,c.set(Te,Le));let Be=Le.get(q);Be===void 0&&(Be=n.getUniformBlockIndex(Te,q.name),Le.set(q,Be))}function Ae(q,Te){let Be=c.get(Te).get(q);l.get(Te)!==Be&&(n.uniformBlockBinding(Te,Be,q.__bindingPointIndex),l.set(Te,Be))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ne={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,S=null,_=null,R=null,P=null,C=new Ue(0,0,0),L=0,w=!1,b=null,E=null,F=null,N=null,z=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:xe,bindFramebuffer:Pe,drawBuffers:be,useProgram:O,setBlending:V,setMaterial:J,setFlipSided:Z,setCullFace:D,setLineWidth:j,setPolygonOffset:X,setScissorTest:Q,activeTexture:ue,bindTexture:ce,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:ye,texImage3D:le,updateUBOMapping:Se,uniformBlockBinding:Ae,texStorage2D:fe,texStorage3D:ve,texSubImage2D:H,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:me,scissor:Me,viewport:Ve,reset:We}}function qT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return h?new OffscreenCanvas(A,v):Ks("canvas")}function x(A,v,U){let H=1,te=ce(A);if((te.width>U||te.height>U)&&(H=U/Math.max(te.width,te.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(H*te.width),me=Math.floor(H*te.height);d===void 0&&(d=p($,me));let fe=v?p($,me):d;return fe.width=$,fe.height=me,fe.getContext("2d").drawImage(A,0,0,$,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+me+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function g(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,v,U,H,te=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(U===n.FLOAT&&($=n.R32F),U===n.HALF_FLOAT&&($=n.R16F),U===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.R8UI),U===n.UNSIGNED_SHORT&&($=n.R16UI),U===n.UNSIGNED_INT&&($=n.R32UI),U===n.BYTE&&($=n.R8I),U===n.SHORT&&($=n.R16I),U===n.INT&&($=n.R32I)),v===n.RG&&(U===n.FLOAT&&($=n.RG32F),U===n.HALF_FLOAT&&($=n.RG16F),U===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RG8UI),U===n.UNSIGNED_SHORT&&($=n.RG16UI),U===n.UNSIGNED_INT&&($=n.RG32UI),U===n.BYTE&&($=n.RG8I),U===n.SHORT&&($=n.RG16I),U===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RGB8UI),U===n.UNSIGNED_SHORT&&($=n.RGB16UI),U===n.UNSIGNED_INT&&($=n.RGB32UI),U===n.BYTE&&($=n.RGB8I),U===n.SHORT&&($=n.RGB16I),U===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RGBA8UI),U===n.UNSIGNED_SHORT&&($=n.RGBA16UI),U===n.UNSIGNED_INT&&($=n.RGBA32UI),U===n.BYTE&&($=n.RGBA8I),U===n.SHORT&&($=n.RGBA16I),U===n.INT&&($=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){let me=te?Sa:dt.getTransfer(H);U===n.FLOAT&&($=n.RGBA32F),U===n.HALF_FLOAT&&($=n.RGBA16F),U===n.UNSIGNED_BYTE&&($=me===bt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(A,v){let U;return A?v===null||v===Sr||v===yo?U=n.DEPTH24_STENCIL8:v===di?U=n.DEPTH32F_STENCIL8:v===xo&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Sr||v===yo?U=n.DEPTH_COMPONENT24:v===di?U=n.DEPTH_COMPONENT32F:v===xo&&(U=n.DEPTH_COMPONENT16),U}function R(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){let v=A.target;v.removeEventListener("dispose",P),L(v),v.isVideoTexture&&u.delete(v)}function C(A){let v=A.target;v.removeEventListener("dispose",C),b(v)}function L(A){let v=i.get(A);if(v.__webglInit===void 0)return;let U=A.source,H=f.get(U);if(H){let te=H[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(H).length===0&&f.delete(U)}i.remove(A)}function w(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let U=A.source,H=f.get(U);delete H[v.__cacheKey],o.memory.textures--}function b(A){let v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let te=0;te<v.__webglFramebuffer[H].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[H][te]);else n.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)n.deleteFramebuffer(v.__webglFramebuffer[H]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=A.textures;for(let H=0,te=U.length;H<te;H++){let $=i.get(U[H]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(U[H])}i.remove(A)}let E=0;function F(){E=0}function N(){let A=E;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),E+=1,A}function z(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){let U=i.get(A);if(A.isVideoTexture&&Q(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let H=A.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,A,v);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function G(A,v){let U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ie(U,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Y(A,v){let U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ie(U,A,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function B(A,v){let U=i.get(A);if(A.version>0&&U.__version!==A.version){re(U,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let se={[kn]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},ne={[cn]:n.NEAREST,[u0]:n.NEAREST_MIPMAP_NEAREST,[rl]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[wu]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},he={[p0]:n.NEVER,[_0]:n.ALWAYS,[m0]:n.LESS,[Hf]:n.LEQUAL,[g0]:n.EQUAL,[v0]:n.GEQUAL,[x0]:n.GREATER,[y0]:n.NOTEQUAL};function de(A,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===wu||v.magFilter===rl||v.magFilter===Ln||v.minFilter===un||v.minFilter===wu||v.minFilter===rl||v.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,se[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==rl&&v.minFilter!==Ln||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(A,v){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",P));let H=v.source,te=f.get(H);te===void 0&&(te={},f.set(H,te));let $=z(v);if($!==A.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),te[$].usedTimes++;let me=te[A.__cacheKey];me!==void 0&&(te[A.__cacheKey].usedTimes--,me.usedTimes===0&&w(v)),A.__cacheKey=$,A.__webglTexture=te[$].texture}return U}function Ee(A,v,U){return Math.floor(Math.floor(A/U)/v)}function Ce(A,v,U,H){let $=A.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,H,v.data);else{$.sort((le,Me)=>le.start-Me.start);let me=0;for(let le=1;le<$.length;le++){let Me=$[me],Ve=$[le],Se=Me.start+Me.count,Ae=Ee(Ve.start,v.width,4),We=Ee(Me.start,v.width,4);Ve.start<=Se+1&&Ae===We&&Ee(Ve.start+Ve.count-1,v.width,4)===Ae?Me.count=Math.max(Me.count,Ve.start+Ve.count-Me.start):(++me,$[me]=Ve)}$.length=me+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let le=0,Me=$.length;le<Me;le++){let Ve=$[le],Se=Math.floor(Ve.start/4),Ae=Math.ceil(Ve.count/4),We=Se%v.width,q=Math.floor(Se/v.width),Te=Ae,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,We,q,Te,Le,U,H,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function ie(A,v,U){let H=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=n.TEXTURE_3D);let te=Ie(A,v),$=v.source;t.bindTexture(H,A.__webglTexture,n.TEXTURE0+U);let me=i.get($);if($.version!==me.__version||te===!0){t.activeTexture(n.TEXTURE0+U);let fe=dt.getPrimaries(dt.workingColorSpace),ve=v.colorSpace===$i?null:dt.getPrimaries(v.colorSpace),ye=v.colorSpace===$i||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let le=x(v.image,!1,r.maxTextureSize);le=ue(v,le);let Me=s.convert(v.format,v.colorSpace),Ve=s.convert(v.type),Se=S(v.internalFormat,Me,Ve,v.colorSpace,v.isVideoTexture);de(H,v);let Ae,We=v.mipmaps,q=v.isVideoTexture!==!0,Te=me.__version===void 0||te===!0,Le=$.dataReady,Be=R(v,le);if(v.isDepthTexture)Se=_(v.format===vo,v.type),Te&&(q?t.texStorage2D(n.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,Me,Ve,null));else if(v.isDataTexture)if(We.length>0){q&&Te&&t.texStorage2D(n.TEXTURE_2D,Be,Se,We[0].width,We[0].height);for(let we=0,ge=We.length;we<ge;we++)Ae=We[we],q?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Ae.width,Ae.height,Me,Ve,Ae.data):t.texImage2D(n.TEXTURE_2D,we,Se,Ae.width,Ae.height,0,Me,Ve,Ae.data);v.generateMipmaps=!1}else q?(Te&&t.texStorage2D(n.TEXTURE_2D,Be,Se,le.width,le.height),Le&&Ce(v,le,Me,Ve)):t.texImage2D(n.TEXTURE_2D,0,Se,le.width,le.height,0,Me,Ve,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){q&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Se,We[0].width,We[0].height,le.depth);for(let we=0,ge=We.length;we<ge;we++)if(Ae=We[we],v.format!==Dn)if(Me!==null)if(q){if(Le)if(v.layerUpdates.size>0){let He=$f(Ae.width,Ae.height,v.format,v.type);for(let tt of v.layerUpdates){let Pt=Ae.data.subarray(tt*He/Ae.data.BYTES_PER_ELEMENT,(tt+1)*He/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,tt,Ae.width,Ae.height,1,Me,Pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Ae.width,Ae.height,le.depth,Me,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,we,Se,Ae.width,Ae.height,le.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,we,0,0,0,Ae.width,Ae.height,le.depth,Me,Ve,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,we,Se,Ae.width,Ae.height,le.depth,0,Me,Ve,Ae.data)}else{q&&Te&&t.texStorage2D(n.TEXTURE_2D,Be,Se,We[0].width,We[0].height);for(let we=0,ge=We.length;we<ge;we++)Ae=We[we],v.format!==Dn?Me!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,we,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,we,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Ae.width,Ae.height,Me,Ve,Ae.data):t.texImage2D(n.TEXTURE_2D,we,Se,Ae.width,Ae.height,0,Me,Ve,Ae.data)}else if(v.isDataArrayTexture)if(q){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Se,le.width,le.height,le.depth),Le)if(v.layerUpdates.size>0){let we=$f(le.width,le.height,v.format,v.type);for(let ge of v.layerUpdates){let He=le.data.subarray(ge*we/le.data.BYTES_PER_ELEMENT,(ge+1)*we/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,le.width,le.height,1,Me,Ve,He)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,Ve,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,Me,Ve,le.data);else if(v.isData3DTexture)q?(Te&&t.texStorage3D(n.TEXTURE_3D,Be,Se,le.width,le.height,le.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,Ve,le.data)):t.texImage3D(n.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,Me,Ve,le.data);else if(v.isFramebufferTexture){if(Te)if(q)t.texStorage2D(n.TEXTURE_2D,Be,Se,le.width,le.height);else{let we=le.width,ge=le.height;for(let He=0;He<Be;He++)t.texImage2D(n.TEXTURE_2D,He,Se,we,ge,0,Me,Ve,null),we>>=1,ge>>=1}}else if(We.length>0){if(q&&Te){let we=ce(We[0]);t.texStorage2D(n.TEXTURE_2D,Be,Se,we.width,we.height)}for(let we=0,ge=We.length;we<ge;we++)Ae=We[we],q?Le&&t.texSubImage2D(n.TEXTURE_2D,we,0,0,Me,Ve,Ae):t.texImage2D(n.TEXTURE_2D,we,Se,Me,Ve,Ae);v.generateMipmaps=!1}else if(q){if(Te){let we=ce(le);t.texStorage2D(n.TEXTURE_2D,Be,Se,we.width,we.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ve,le)}else t.texImage2D(n.TEXTURE_2D,0,Se,Me,Ve,le);m(v)&&g(H),me.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function re(A,v,U){if(v.image.length!==6)return;let H=Ie(A,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+U);let $=i.get(te);if(te.version!==$.__version||H===!0){t.activeTexture(n.TEXTURE0+U);let me=dt.getPrimaries(dt.workingColorSpace),fe=v.colorSpace===$i?null:dt.getPrimaries(v.colorSpace),ve=v.colorSpace===$i||me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let ge=0;ge<6;ge++)!ye&&!le?Me[ge]=x(v.image[ge],!0,r.maxCubemapSize):Me[ge]=le?v.image[ge].image:v.image[ge],Me[ge]=ue(v,Me[ge]);let Ve=Me[0],Se=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),We=S(v.internalFormat,Se,Ae,v.colorSpace),q=v.isVideoTexture!==!0,Te=$.__version===void 0||H===!0,Le=te.dataReady,Be=R(v,Ve);de(n.TEXTURE_CUBE_MAP,v);let we;if(ye){q&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,We,Ve.width,Ve.height);for(let ge=0;ge<6;ge++){we=Me[ge].mipmaps;for(let He=0;He<we.length;He++){let tt=we[He];v.format!==Dn?Se!==null?q?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,tt.width,tt.height,Se,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,tt.width,tt.height,Se,Ae,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,We,tt.width,tt.height,0,Se,Ae,tt.data)}}}else{if(we=v.mipmaps,q&&Te){we.length>0&&Be++;let ge=ce(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,We,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(le){q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Me[ge].width,Me[ge].height,Se,Ae,Me[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,Me[ge].width,Me[ge].height,0,Se,Ae,Me[ge].data);for(let He=0;He<we.length;He++){let Pt=we[He].image[ge].image;q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,Pt.width,Pt.height,Se,Ae,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,We,Pt.width,Pt.height,0,Se,Ae,Pt.data)}}else{q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Se,Ae,Me[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,Se,Ae,Me[ge]);for(let He=0;He<we.length;He++){let tt=we[He];q?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,Se,Ae,tt.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,We,Se,Ae,tt.image[ge])}}}m(v)&&g(n.TEXTURE_CUBE_MAP),$.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xe(A,v,U,H,te,$){let me=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),ve=S(U.internalFormat,me,fe,U.colorSpace),ye=i.get(v),le=i.get(U);if(le.__renderTarget=v,!ye.__hasExternalTextures){let Me=Math.max(1,v.width>>$),Ve=Math.max(1,v.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,ve,Me,Ve,v.depth,0,me,fe,null):t.texImage2D(te,$,ve,Me,Ve,0,me,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,te,le.__webglTexture,0,j(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,te,le.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(A,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let H=v.depthTexture,te=H&&H.isDepthTexture?H.type:null,$=_(v.stencilBuffer,te),me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=j(v);X(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,$,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,A)}else{let H=v.textures;for(let te=0;te<H.length;te++){let $=H[te],me=s.convert($.format,$.colorSpace),fe=s.convert($.type),ve=S($.internalFormat,me,fe,$.colorSpace),ye=j(v);U&&X(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ve,v.width,v.height):X(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(v.depthTexture);H.__renderTarget=v,(!H.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let te=H.__webglTexture,$=j(v);if(v.depthTexture.format===$s)X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(v.depthTexture.format===vo)X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function O(A){let v=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",te)};H.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=H}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let H=A.texture.mipmaps;H&&H.length>0?be(v.__webglFramebuffer[0],A):be(v.__webglFramebuffer,A)}else if(U){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=n.createRenderbuffer(),Pe(v.__webglDepthbuffer[H],A,!1);else{let te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Pe(v.__webglDepthbuffer,A,!1);else{let te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(A,v,U){let H=i.get(A);v!==void 0&&xe(H.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&O(A)}function T(A){let v=A.texture,U=i.get(A),H=i.get(v);A.addEventListener("dispose",C);let te=A.textures,$=A.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,o.memory.textures++),$){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)U.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else U.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)U.__webglFramebuffer[fe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(me)for(let fe=0,ve=te.length;fe<ve;fe++){let ye=i.get(te[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&X(A)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){let ve=te[fe];U.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);let ye=s.convert(ve.format,ve.colorSpace),le=s.convert(ve.type),Me=S(ve.internalFormat,ye,le,ve.colorSpace,A.isXRRenderTarget===!0),Ve=j(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),de(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(U.__webglFramebuffer[fe][ve],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else xe(U.__webglFramebuffer[fe],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(v)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let fe=0,ve=te.length;fe<ve;fe++){let ye=te[fe],le=i.get(ye),Me=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,le.__webglTexture),de(Me,ye),xe(U.__webglFramebuffer,A,ye,n.COLOR_ATTACHMENT0+fe,Me,0),m(ye)&&g(Me)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),de(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(U.__webglFramebuffer[ve],A,v,n.COLOR_ATTACHMENT0,fe,ve);else xe(U.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,fe,0);m(v)&&g(fe),t.unbindTexture()}A.depthBuffer&&O(A)}function V(A){let v=A.textures;for(let U=0,H=v.length;U<H;U++){let te=v[U];if(m(te)){let $=y(A),me=i.get(te).__webglTexture;t.bindTexture($,me),g($),t.unbindTexture()}}}let J=[],Z=[];function D(A){if(A.samples>0){if(X(A)===!1){let v=A.textures,U=A.width,H=A.height,te=n.COLOR_BUFFER_BIT,$=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),fe=v.length>1;if(fe)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ve=A.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let le=i.get(v[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,te,n.NEAREST),l===!0&&(J.length=0,Z.length=0,J.push(n.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push($),Z.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,me.__webglColorRenderbuffer[ye]);let le=i.get(v[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function j(A){return Math.min(r.maxSamples,A.samples)}function X(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(A){let v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ue(A,v){let U=A.colorSpace,H=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Kr&&U!==$i&&(dt.getTransfer(U)===bt?(H!==Dn||te!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=pe,this.setupRenderTarget=T,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=X}function XT(n,e){function t(i,r=$i){let s,o=dt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nf)return n.BYTE;if(i===Bf)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===Sr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===kf)return n.RGB;if(i===Dn)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===vo)return n.DEPTH_STENCIL;if(i===Cu)return n.RED;if(i===Ru)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===sl||i===ol||i===al||i===ll)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Du||i===Uu||i===Fu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===Bu||i===Ou)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nu||i===Bu)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ou)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zu||i===Vu||i===ku||i===Gu||i===Hu||i===Wu||i===qu||i===Xu||i===Yu||i===Zu||i===ju||i===Ju||i===$u||i===Qu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ku)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ju)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ku||i===eh||i===th)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ku)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nh||i===ih||i===rh||i===sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
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

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:YT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hp=class extends Wi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",m=new up,g={},y=t.getContextAttributes(),S=null,_=null,R=[],P=[],C=new _e,L=null,w=new $t;w.viewport=new ut;let b=new $t;b.viewport=new ut;let E=[w,b],F=new fu,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let re=R[ie];return re===void 0&&(re=new io,R[ie]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ie){let re=R[ie];return re===void 0&&(re=new io,R[ie]=re),re.getGripSpace()},this.getHand=function(ie){let re=R[ie];return re===void 0&&(re=new io,R[ie]=re),re.getHandSpace()};function W(ie){let re=P.indexOf(ie.inputSource);if(re===-1)return;let xe=R[re];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||o),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<R.length;ie++){let re=P[ie];re!==null&&(P[ie]=null,R[ie].disconnect(re))}N=null,z=null,m.reset();for(let ie in g)delete g[ie];e.setRenderTarget(S),h=null,f=null,d=null,r=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?vo:$s,Pe=y.stencil?yo:Sr);let O={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(O),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Rn(f.textureWidth,f.textureHeight,{format:Dn,type:Wn,depthTexture:new Na(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(ie){for(let re=0;re<ie.removed.length;re++){let xe=ie.removed[re],Pe=P.indexOf(xe);Pe>=0&&(P[Pe]=null,R[Pe].disconnect(xe))}for(let re=0;re<ie.added.length;re++){let xe=ie.added[re],Pe=P.indexOf(xe);if(Pe===-1){for(let O=0;O<R.length;O++)if(O>=P.length){P.push(xe),Pe=O;break}else if(P[O]===null){P[O]=xe,Pe=O;break}if(Pe===-1)break}let be=R[Pe];be&&be.connect(xe)}}let B=new M,se=new M;function ne(ie,re,xe){B.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);let Pe=B.distanceTo(se),be=re.projectionMatrix.elements,O=xe.projectionMatrix.elements,pe=be[14]/(be[10]-1),T=be[14]/(be[10]+1),V=(be[9]+1)/be[5],J=(be[9]-1)/be[5],Z=(be[8]-1)/be[0],D=(O[8]+1)/O[0],j=pe*Z,X=pe*D,Q=Pe/(-Z+D),ue=Q*-Z;if(re.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ue),ie.translateZ(Q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),be[10]===-1)ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ce=pe+Q,A=T+Q,v=j-ue,U=X+(Pe-ue),H=V*T/A*ce,te=J*T/A*ce;ie.projectionMatrix.makePerspective(v,U,H,te,ce,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,re){re===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(re.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let re=ie.near,xe=ie.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),F.near=b.near=w.near=re,F.far=b.far=w.far=xe,(N!==F.near||z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,z=F.far),F.layers.mask=ie.layers.mask|6,w.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Pe=ie.parent,be=F.cameras;he(F,Pe);for(let O=0;O<be.length;O++)he(be[O],Pe);be.length===2?ne(F,w,b):F.projectionMatrix.copy(w.projectionMatrix),de(ie,F,Pe)};function de(ie,re,xe){xe===null?ie.matrix.copy(re.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(re.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qs*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ie){return g[ie]};let Ie=null;function Ee(ie,re){if(u=re.getViewerPose(c||o),p=re,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Pe=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let T=0;T<xe.length;T++){let V=xe[T],J=null;if(h!==null)J=h.getViewport(V);else{let D=d.getViewSubImage(f,V);J=D.viewport,T===0&&(e.setRenderTargetTextures(_,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(_))}let Z=E[T];Z===void 0&&(Z=new $t,Z.layers.enable(T),Z.viewport=new ut,E[T]=Z),Z.matrix.fromArray(V.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(V.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(J.x,J.y,J.width,J.height),T===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Z)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let T=d.getDepthInformation(xe[0]);T&&T.isValid&&T.texture&&m.init(T,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<xe.length;T++){let V=xe[T].camera;if(V){let J=g[V];J||(J=new Ba,g[V]=J);let Z=d.getCameraImage(V);J.sourceTexture=Z}}}}for(let xe=0;xe<R.length;xe++){let Pe=P[xe],be=R[xe];Pe!==null&&be!==void 0&&be.update(Pe,re,c||o)}Ie&&Ie(ie,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),p=null}let Ce=new K0;Ce.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){Ie=ie},this.dispose=function(){}}},us=new nn,jT=new lt;function JT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Yf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,S,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,_)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,us.copy(_),us.x*=-1,us.y*=-1,us.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(us)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $T(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let _=S.program;i.uniformBlockBinding(y,_)}function c(y,S){let _=r[y.id];_===void 0&&(p(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",m));let R=S.program;i.updateUBOMapping(y,R);let P=e.render.frame;s[y.id]!==P&&(f(y),s[y.id]=P)}function u(y){let S=d();y.__bindingPointIndex=S;let _=n.createBuffer(),R=y.__size,P=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=r[y.id],_=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,C=_.length;P<C;P++){let L=Array.isArray(_[P])?_[P]:[_[P]];for(let w=0,b=L.length;w<b;w++){let E=L[w];if(h(E,P,w,R)===!0){let F=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],z=0;for(let W=0;W<N.length;W++){let G=N[W],Y=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+z,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,_,R){let P=y.value,C=S+"_"+_;if(R[C]===void 0)return typeof P=="number"||typeof P=="boolean"?R[C]=P:R[C]=P.clone(),!0;{let L=R[C];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return R[C]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function p(y){let S=y.uniforms,_=0,R=16;for(let C=0,L=S.length;C<L;C++){let w=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,E=w.length;b<E;b++){let F=w[b],N=Array.isArray(F.value)?F.value:[F.value];for(let z=0,W=N.length;z<W;z++){let G=N[z],Y=x(G),B=_%R,se=B%Y.boundary,ne=B+se;_+=se,ne!==0&&R-ne<Y.storage&&(_+=R-ne),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Y.storage}}}let P=_%R;return P>0&&(_+=R-P),y.__size=_,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function g(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var hh=class{constructor(e={}){let{canvas:t=M0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,R=!1;this._outputColorSpace=at;let P=0,C=0,L=null,w=-1,b=null,E=new ut,F=new ut,N=null,z=new Ue(0),W=0,G=t.width,Y=t.height,B=1,se=null,ne=null,he=new ut(0,0,G,Y),de=new ut(0,0,G,Y),Ie=!1,Ee=new ao,Ce=!1,ie=!1,re=new lt,xe=new M,Pe=new ut,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},O=!1;function pe(){return L===null?B:1}let T=i;function V(I,K){return t.getContext(I,K)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",we,!1),T===null){let K="webgl2";if(T=V(K,I),T===null)throw V(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let J,Z,D,j,X,Q,ue,ce,A,v,U,H,te,$,me,fe,ve,ye,le,Me,Ve,Se,Ae,We;function q(){J=new mw(T),J.init(),Se=new XT(T,J),Z=new lw(T,J,e,Se),D=new WT(T,J),Z.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),j=new yw(T),X=new IT,Q=new qT(T,J,D,X,Z,Se,j),ue=new uw(_),ce=new pw(_),A=new wb(T),Ae=new ow(T,A),v=new gw(T,A,j,Ae),U=new _w(T,v,A,j),le=new vw(T,Z,Q),fe=new cw(X),H=new PT(_,ue,ce,J,Z,Ae,fe),te=new JT(_,X),$=new DT,me=new zT(J),ye=new sw(_,ue,ce,D,U,h,l),ve=new GT(_,U,Z),We=new $T(T,j,Z,D),Me=new aw(T,J,j),Ve=new xw(T,J,j),j.programs=H.programs,_.capabilities=Z,_.extensions=J,_.properties=X,_.renderLists=$,_.shadowMap=ve,_.state=D,_.info=j}q();let Te=new hp(_,T);this.xr=Te,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let I=J.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=J.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(G,Y,!1))},this.getSize=function(I){return I.set(G,Y)},this.setSize=function(I,K,oe=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,Y=K,t.width=Math.floor(I*B),t.height=Math.floor(K*B),oe===!0&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(I,K,oe){G=I,Y=K,B=oe,t.width=Math.floor(I*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(he)},this.setViewport=function(I,K,oe,ae){I.isVector4?he.set(I.x,I.y,I.z,I.w):he.set(I,K,oe,ae),D.viewport(E.copy(he).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(de)},this.setScissor=function(I,K,oe,ae){I.isVector4?de.set(I.x,I.y,I.z,I.w):de.set(I,K,oe,ae),D.scissor(F.copy(de).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(I){D.setScissorTest(Ie=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){ne=I},this.getClearColor=function(I){return I.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,oe=!0){let ae=0;if(I){let ee=!1;if(L!==null){let Re=L.texture.format;ee=Re===Iu||Re===Pu||Re===Ru}if(ee){let Re=L.texture.type,Ne=Re===Wn||Re===Sr||Re===xo||Re===yo||Re===Au||Re===Eu,Ge=ye.getClearColor(),ke=ye.getClearAlpha(),Je=Ge.r,$e=Ge.g,Xe=Ge.b;Ne?(p[0]=Je,p[1]=$e,p[2]=Xe,p[3]=ke,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Je,x[1]=$e,x[2]=Xe,x[3]=ke,T.clearBufferiv(T.COLOR,0,x))}else ae|=T.COLOR_BUFFER_BIT}K&&(ae|=T.DEPTH_BUFFER_BIT),oe&&(ae|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",we,!1),ye.dispose(),$.dispose(),me.dispose(),X.dispose(),ue.dispose(),ce.dispose(),U.dispose(),Ae.dispose(),We.dispose(),H.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",mi),Te.removeEventListener("sessionend",Nm),Wr.stop()};function Le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let I=j.autoReset,K=ve.enabled,oe=ve.autoUpdate,ae=ve.needsUpdate,ee=ve.type;q(),j.autoReset=I,ve.enabled=K,ve.autoUpdate=oe,ve.needsUpdate=ae,ve.type=ee}function we(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ge(I){let K=I.target;K.removeEventListener("dispose",ge),He(K)}function He(I){tt(I),X.remove(I)}function tt(I){let K=X.get(I).programs;K!==void 0&&(K.forEach(function(oe){H.releaseProgram(oe)}),I.isShaderMaterial&&H.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,oe,ae,ee,Re){K===null&&(K=be);let Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,Ge=q_(I,K,oe,ae,ee);D.setMaterial(ae,Ne);let ke=oe.index,Je=1;if(ae.wireframe===!0){if(ke=v.getWireframeAttribute(oe),ke===void 0)return;Je=2}let $e=oe.drawRange,Xe=oe.attributes.position,ot=$e.start*Je,Tt=($e.start+$e.count)*Je;Re!==null&&(ot=Math.max(ot,Re.start*Je),Tt=Math.min(Tt,(Re.start+Re.count)*Je)),ke!==null?(ot=Math.max(ot,0),Tt=Math.min(Tt,ke.count)):Xe!=null&&(ot=Math.max(ot,0),Tt=Math.min(Tt,Xe.count));let Jt=Tt-ot;if(Jt<0||Jt===1/0)return;Ae.setup(ee,ae,Ge,oe,ke);let Lt,Et=Me;if(ke!==null&&(Lt=A.get(ke),Et=Ve,Et.setIndex(Lt)),ee.isMesh)ae.wireframe===!0?(D.setLineWidth(ae.wireframeLinewidth*pe()),Et.setMode(T.LINES)):Et.setMode(T.TRIANGLES);else if(ee.isLine){let Ye=ae.linewidth;Ye===void 0&&(Ye=1),D.setLineWidth(Ye*pe()),ee.isLineSegments?Et.setMode(T.LINES):ee.isLineLoop?Et.setMode(T.LINE_LOOP):Et.setMode(T.LINE_STRIP)}else ee.isPoints?Et.setMode(T.POINTS):ee.isSprite&&Et.setMode(T.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Et.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Ye=ee._multiDrawStarts,kt=ee._multiDrawCounts,pt=ee._multiDrawCount,Bn=ke?A.get(ke).bytesPerElement:1,Rs=X.get(ae).currentProgram.getUniforms();for(let On=0;On<pt;On++)Rs.setValue(T,"_gl_DrawID",On),Et.render(Ye[On]/Bn,kt[On])}else if(ee.isInstancedMesh)Et.renderInstances(ot,Jt,ee.count);else if(oe.isInstancedBufferGeometry){let Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,kt=Math.min(oe.instanceCount,Ye);Et.renderInstances(ot,Jt,kt)}else Et.render(ot,Jt)};function Pt(I,K,oe){I.transparent===!0&&I.side===Ct&&I.forceSinglePass===!1?(I.side=dn,I.needsUpdate=!0,rc(I,K,oe),I.side=li,I.needsUpdate=!0,rc(I,K,oe),I.side=Ct):rc(I,K,oe)}this.compile=function(I,K,oe=null){oe===null&&(oe=I),g=me.get(oe),g.init(K),S.push(g),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),I!==oe&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights();let ae=new Set;return I.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){let Ge=Re[Ne];Pt(Ge,oe,ee),ae.add(Ge)}else Pt(Re,oe,ee),ae.add(Re)}),g=S.pop(),ae},this.compileAsync=function(I,K,oe=null){let ae=this.compile(I,K,oe);return new Promise(ee=>{function Re(){if(ae.forEach(function(Ne){X.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){ee(I);return}setTimeout(Re,10)}J.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let vt=null;function Bi(I){vt&&vt(I)}function mi(){Wr.stop()}function Nm(){Wr.start()}let Wr=new K0;Wr.setAnimationLoop(Bi),typeof self<"u"&&Wr.setContext(self),this.setAnimationLoop=function(I){vt=I,Te.setAnimationLoop(I),I===null?Wr.stop():Wr.start()},Te.addEventListener("sessionstart",mi),Te.addEventListener("sessionend",Nm),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,K,L),g=me.get(I,S.length),g.init(K),S.push(g),re.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ee.setFromProjectionMatrix(re,ai,K.reversedDepth),ie=this.localClippingEnabled,Ce=fe.init(this.clippingPlanes,ie),m=$.get(I,y.length),m.init(),y.push(m),Te.enabled===!0&&Te.isPresenting===!0){let Re=_.xr.getDepthSensingMesh();Re!==null&&Vd(Re,K,-1/0,_.sortObjects)}Vd(I,K,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,ne),O=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,O&&ye.addToRenderList(m,I),this.info.render.frame++,Ce===!0&&fe.beginShadows();let oe=g.state.shadowsArray;ve.render(oe,I,K),Ce===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,ee=m.transmissive;if(g.setupLights(),K.isArrayCamera){let Re=K.cameras;if(ee.length>0)for(let Ne=0,Ge=Re.length;Ne<Ge;Ne++){let ke=Re[Ne];Om(ae,ee,I,ke)}O&&ye.render(I);for(let Ne=0,Ge=Re.length;Ne<Ge;Ne++){let ke=Re[Ne];Bm(m,I,ke,ke.viewport)}}else ee.length>0&&Om(ae,ee,I,K),O&&ye.render(I),Bm(m,I,K);L!==null&&C===0&&(Q.updateMultisampleRenderTarget(L),Q.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(_,I,K),Ae.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(g=S[S.length-1],Ce===!0&&fe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Vd(I,K,oe,ae){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ee.intersectsSprite(I)){ae&&Pe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(re);let Ne=U.update(I),Ge=I.material;Ge.visible&&m.push(I,Ne,Ge,oe,Pe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ee.intersectsObject(I))){let Ne=U.update(I),Ge=I.material;if(ae&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Pe.copy(I.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(I.matrixWorld).applyMatrix4(re)),Array.isArray(Ge)){let ke=Ne.groups;for(let Je=0,$e=ke.length;Je<$e;Je++){let Xe=ke[Je],ot=Ge[Xe.materialIndex];ot&&ot.visible&&m.push(I,Ne,ot,oe,Pe.z,Xe)}}else Ge.visible&&m.push(I,Ne,Ge,oe,Pe.z,null)}}let Re=I.children;for(let Ne=0,Ge=Re.length;Ne<Ge;Ne++)Vd(Re[Ne],K,oe,ae)}function Bm(I,K,oe,ae){let ee=I.opaque,Re=I.transmissive,Ne=I.transparent;g.setupLightsView(oe),Ce===!0&&fe.setGlobalState(_.clippingPlanes,oe),ae&&D.viewport(E.copy(ae)),ee.length>0&&ic(ee,K,oe),Re.length>0&&ic(Re,K,oe),Ne.length>0&&ic(Ne,K,oe),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Om(I,K,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Rn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?bi:Wn,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Re=g.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||E;Re.setSize(Ne.z*_.transmissionResolutionScale,Ne.w*_.transmissionResolutionScale);let Ge=_.getRenderTarget(),ke=_.getActiveCubeFace(),Je=_.getActiveMipmapLevel();_.setRenderTarget(Re),_.getClearColor(z),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),O&&ye.render(oe);let $e=_.toneMapping;_.toneMapping=Ji;let Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),Ce===!0&&fe.setGlobalState(_.clippingPlanes,ae),ic(I,oe,ae),Q.updateMultisampleRenderTarget(Re),Q.updateRenderTargetMipmap(Re),J.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Tt=0,Jt=K.length;Tt<Jt;Tt++){let Lt=K[Tt],Et=Lt.object,Ye=Lt.geometry,kt=Lt.material,pt=Lt.group;if(kt.side===Ct&&Et.layers.test(ae.layers)){let Bn=kt.side;kt.side=dn,kt.needsUpdate=!0,zm(Et,oe,ae,Ye,kt,pt),kt.side=Bn,kt.needsUpdate=!0,ot=!0}}ot===!0&&(Q.updateMultisampleRenderTarget(Re),Q.updateRenderTargetMipmap(Re))}_.setRenderTarget(Ge,ke,Je),_.setClearColor(z,W),Xe!==void 0&&(ae.viewport=Xe),_.toneMapping=$e}function ic(I,K,oe){let ae=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Re=I.length;ee<Re;ee++){let Ne=I[ee],Ge=Ne.object,ke=Ne.geometry,Je=Ne.group,$e=Ne.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Ge.layers.test(oe.layers)&&zm(Ge,K,oe,ke,$e,Je)}}function zm(I,K,oe,ae,ee,Re){I.onBeforeRender(_,K,oe,ae,ee,Re),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.onBeforeRender(_,K,oe,ae,I,Re),ee.transparent===!0&&ee.side===Ct&&ee.forceSinglePass===!1?(ee.side=dn,ee.needsUpdate=!0,_.renderBufferDirect(oe,K,ae,ee,I,Re),ee.side=li,ee.needsUpdate=!0,_.renderBufferDirect(oe,K,ae,ee,I,Re),ee.side=Ct):_.renderBufferDirect(oe,K,ae,ee,I,Re),I.onAfterRender(_,K,oe,ae,ee,Re)}function rc(I,K,oe){K.isScene!==!0&&(K=be);let ae=X.get(I),ee=g.state.lights,Re=g.state.shadowsArray,Ne=ee.state.version,Ge=H.getParameters(I,ee.state,Re,K,oe),ke=H.getProgramCacheKey(Ge),Je=ae.programs;ae.environment=I.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(I.isMeshStandardMaterial?ce:ue).get(I.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,Je===void 0&&(I.addEventListener("dispose",ge),Je=new Map,ae.programs=Je);let $e=Je.get(ke);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===Ne)return km(I,Ge),$e}else Ge.uniforms=H.getUniforms(I),I.onBeforeCompile(Ge,_),$e=H.acquireProgram(Ge,ke),Je.set(ke,$e),ae.uniforms=Ge.uniforms;let Xe=ae.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xe.clippingPlanes=fe.uniform),km(I,Ge),ae.needsLights=Y_(I),ae.lightsStateVersion=Ne,ae.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=$e,ae.uniformsList=null,$e}function Vm(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=bo.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function km(I,K){let oe=X.get(I);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function q_(I,K,oe,ae,ee){K.isScene!==!0&&(K=be),Q.resetTextureUnits();let Re=K.fog,Ne=ae.isMeshStandardMaterial?K.environment:null,Ge=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Kr,ke=(ae.isMeshStandardMaterial?ce:ue).get(ae.envMap||Ne),Je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!oe.morphAttributes.position,ot=!!oe.morphAttributes.normal,Tt=!!oe.morphAttributes.color,Jt=Ji;ae.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Jt=_.toneMapping);let Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Et=Lt!==void 0?Lt.length:0,Ye=X.get(ae),kt=g.state.lights;if(Ce===!0&&(ie===!0||I!==b)){let Mn=I===b&&ae.id===w;fe.setState(ae,I,Mn)}let pt=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==kt.state.version||Ye.outputColorSpace!==Ge||ee.isBatchedMesh&&Ye.batching===!1||!ee.isBatchedMesh&&Ye.batching===!0||ee.isBatchedMesh&&Ye.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ye.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ye.instancing===!1||!ee.isInstancedMesh&&Ye.instancing===!0||ee.isSkinnedMesh&&Ye.skinning===!1||!ee.isSkinnedMesh&&Ye.skinning===!0||ee.isInstancedMesh&&Ye.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ye.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ye.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ye.instancingMorph===!1&&ee.morphTexture!==null||Ye.envMap!==ke||ae.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==fe.numPlanes||Ye.numIntersection!==fe.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==$e||Ye.morphTargets!==Xe||Ye.morphNormals!==ot||Ye.morphColors!==Tt||Ye.toneMapping!==Jt||Ye.morphTargetsCount!==Et)&&(pt=!0):(pt=!0,Ye.__version=ae.version);let Bn=Ye.currentProgram;pt===!0&&(Bn=rc(ae,K,ee));let Rs=!1,On=!1,sa=!1,Gt=Bn.getUniforms(),Xn=Ye.uniforms;if(D.useProgram(Bn.program)&&(Rs=!0,On=!0,sa=!0),ae.id!==w&&(w=ae.id,On=!0),Rs||b!==I){D.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Gt.setValue(T,"projectionMatrix",I.projectionMatrix),Gt.setValue(T,"viewMatrix",I.matrixWorldInverse);let An=Gt.map.cameraPosition;An!==void 0&&An.setValue(T,xe.setFromMatrixPosition(I.matrixWorld)),Z.logarithmicDepthBuffer&&Gt.setValue(T,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Gt.setValue(T,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,On=!0,sa=!0)}if(ee.isSkinnedMesh){Gt.setOptional(T,ee,"bindMatrix"),Gt.setOptional(T,ee,"bindMatrixInverse");let Mn=ee.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Gt.setValue(T,"boneTexture",Mn.boneTexture,Q))}ee.isBatchedMesh&&(Gt.setOptional(T,ee,"batchingTexture"),Gt.setValue(T,"batchingTexture",ee._matricesTexture,Q),Gt.setOptional(T,ee,"batchingIdTexture"),Gt.setValue(T,"batchingIdTexture",ee._indirectTexture,Q),Gt.setOptional(T,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Gt.setValue(T,"batchingColorTexture",ee._colorsTexture,Q));let Yn=oe.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&le.update(ee,oe,Bn),(On||Ye.receiveShadow!==ee.receiveShadow)&&(Ye.receiveShadow=ee.receiveShadow,Gt.setValue(T,"receiveShadow",ee.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Xn.envMap.value=ke,Xn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&K.environment!==null&&(Xn.envMapIntensity.value=K.environmentIntensity),On&&(Gt.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&X_(Xn,sa),Re&&ae.fog===!0&&te.refreshFogUniforms(Xn,Re),te.refreshMaterialUniforms(Xn,ae,B,Y,g.state.transmissionRenderTarget[I.id]),bo.upload(T,Vm(Ye),Xn,Q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(bo.upload(T,Vm(Ye),Xn,Q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Gt.setValue(T,"center",ee.center),Gt.setValue(T,"modelViewMatrix",ee.modelViewMatrix),Gt.setValue(T,"normalMatrix",ee.normalMatrix),Gt.setValue(T,"modelMatrix",ee.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let Mn=ae.uniformsGroups;for(let An=0,kd=Mn.length;An<kd;An++){let qr=Mn[An];We.update(qr,Bn),We.bind(qr,Bn)}}return Bn}function X_(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function Y_(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,K,oe){let ae=X.get(I);ae.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),X.get(I.texture).__webglTexture=K,X.get(I.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){let oe=X.get(I);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};let Z_=T.createFramebuffer();this.setRenderTarget=function(I,K=0,oe=0){L=I,P=K,C=oe;let ae=!0,ee=null,Re=!1,Ne=!1;if(I){let ke=X.get(I);if(ke.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(T.FRAMEBUFFER,null),ae=!1;else if(ke.__webglFramebuffer===void 0)Q.setupRenderTarget(I);else if(ke.__hasExternalTextures)Q.rebindTextures(I,X.get(I.texture).__webglTexture,X.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Xe=I.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&X.has(Xe)&&(I.width!==Xe.image.width||I.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(I)}}let Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ne=!0);let $e=X.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($e[K])?ee=$e[K][oe]:ee=$e[K],Re=!0):I.samples>0&&Q.useMultisampledRTT(I)===!1?ee=X.get(I).__webglMultisampledFramebuffer:Array.isArray($e)?ee=$e[oe]:ee=$e,E.copy(I.viewport),F.copy(I.scissor),N=I.scissorTest}else E.copy(he).multiplyScalar(B).floor(),F.copy(de).multiplyScalar(B).floor(),N=Ie;if(oe!==0&&(ee=Z_),D.bindFramebuffer(T.FRAMEBUFFER,ee)&&ae&&D.drawBuffers(I,ee),D.viewport(E),D.scissor(F),D.setScissorTest(N),Re){let ke=X.get(I.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,oe)}else if(Ne){let ke=K;for(let Je=0;Je<I.textures.length;Je++){let $e=X.get(I.textures[Je]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Je,$e.__webglTexture,oe,ke)}}else if(I!==null&&oe!==0){let ke=X.get(I.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,oe)}w=-1},this.readRenderTargetPixels=function(I,K,oe,ae,ee,Re,Ne,Ge=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=X.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){D.bindFramebuffer(T.FRAMEBUFFER,ke);try{let Je=I.textures[Ge],$e=Je.format,Xe=Je.type;if(!Z.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ae&&oe>=0&&oe<=I.height-ee&&(I.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(K,oe,ae,ee,Se.convert($e),Se.convert(Xe),Re))}finally{let Je=L!==null?X.get(L).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(I,K,oe,ae,ee,Re,Ne,Ge=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=X.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(K>=0&&K<=I.width-ae&&oe>=0&&oe<=I.height-ee){D.bindFramebuffer(T.FRAMEBUFFER,ke);let Je=I.textures[Ge],$e=Je.format,Xe=Je.type;if(!Z.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ot),T.bufferData(T.PIXEL_PACK_BUFFER,Re.byteLength,T.STREAM_READ),I.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(K,oe,ae,ee,Se.convert($e),Se.convert(Xe),0);let Tt=L!==null?X.get(L).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,Tt);let Jt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await b0(T,Jt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ot),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Re),T.deleteBuffer(ot),T.deleteSync(Jt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,oe=0){let ae=Math.pow(2,-oe),ee=Math.floor(I.image.width*ae),Re=Math.floor(I.image.height*ae),Ne=K!==null?K.x:0,Ge=K!==null?K.y:0;Q.setTexture2D(I,0),T.copyTexSubImage2D(T.TEXTURE_2D,oe,0,0,Ne,Ge,ee,Re),D.unbindTexture()};let j_=T.createFramebuffer(),J_=T.createFramebuffer();this.copyTextureToTexture=function(I,K,oe=null,ae=null,ee=0,Re=null){Re===null&&(ee!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=ee,ee=0):Re=0);let Ne,Ge,ke,Je,$e,Xe,ot,Tt,Jt,Lt=I.isCompressedTexture?I.mipmaps[Re]:I.image;if(oe!==null)Ne=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,$e=oe.min.y,Xe=oe.isBox3?oe.min.z:0;else{let Yn=Math.pow(2,-ee);Ne=Math.floor(Lt.width*Yn),Ge=Math.floor(Lt.height*Yn),I.isDataArrayTexture?ke=Lt.depth:I.isData3DTexture?ke=Math.floor(Lt.depth*Yn):ke=1,Je=0,$e=0,Xe=0}ae!==null?(ot=ae.x,Tt=ae.y,Jt=ae.z):(ot=0,Tt=0,Jt=0);let Et=Se.convert(K.format),Ye=Se.convert(K.type),kt;K.isData3DTexture?(Q.setTexture3D(K,0),kt=T.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Q.setTexture2DArray(K,0),kt=T.TEXTURE_2D_ARRAY):(Q.setTexture2D(K,0),kt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,K.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,K.unpackAlignment);let pt=T.getParameter(T.UNPACK_ROW_LENGTH),Bn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Rs=T.getParameter(T.UNPACK_SKIP_PIXELS),On=T.getParameter(T.UNPACK_SKIP_ROWS),sa=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xe);let Gt=I.isDataArrayTexture||I.isData3DTexture,Xn=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){let Yn=X.get(I),Mn=X.get(K),An=X.get(Yn.__renderTarget),kd=X.get(Mn.__renderTarget);D.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,kd.__webglFramebuffer);for(let qr=0;qr<ke;qr++)Gt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(I).__webglTexture,ee,Xe+qr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(K).__webglTexture,Re,Jt+qr)),T.blitFramebuffer(Je,$e,Ne,Ge,ot,Tt,Ne,Ge,T.DEPTH_BUFFER_BIT,T.NEAREST);D.bindFramebuffer(T.READ_FRAMEBUFFER,null),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(ee!==0||I.isRenderTargetTexture||X.has(I)){let Yn=X.get(I),Mn=X.get(K);D.bindFramebuffer(T.READ_FRAMEBUFFER,j_),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,J_);for(let An=0;An<ke;An++)Gt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yn.__webglTexture,ee,Xe+An):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yn.__webglTexture,ee),Xn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mn.__webglTexture,Re,Jt+An):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Mn.__webglTexture,Re),ee!==0?T.blitFramebuffer(Je,$e,Ne,Ge,ot,Tt,Ne,Ge,T.COLOR_BUFFER_BIT,T.NEAREST):Xn?T.copyTexSubImage3D(kt,Re,ot,Tt,Jt+An,Je,$e,Ne,Ge):T.copyTexSubImage2D(kt,Re,ot,Tt,Je,$e,Ne,Ge);D.bindFramebuffer(T.READ_FRAMEBUFFER,null),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xn?I.isDataTexture||I.isData3DTexture?T.texSubImage3D(kt,Re,ot,Tt,Jt,Ne,Ge,ke,Et,Ye,Lt.data):K.isCompressedArrayTexture?T.compressedTexSubImage3D(kt,Re,ot,Tt,Jt,Ne,Ge,ke,Et,Lt.data):T.texSubImage3D(kt,Re,ot,Tt,Jt,Ne,Ge,ke,Et,Ye,Lt):I.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Re,ot,Tt,Ne,Ge,Et,Ye,Lt.data):I.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Re,ot,Tt,Lt.width,Lt.height,Et,Lt.data):T.texSubImage2D(T.TEXTURE_2D,Re,ot,Tt,Ne,Ge,Et,Ye,Lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,pt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Bn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Rs),T.pixelStorei(T.UNPACK_SKIP_ROWS,On),T.pixelStorei(T.UNPACK_SKIP_IMAGES,sa),Re===0&&K.generateMipmaps&&T.generateMipmap(kt),D.unbindTexture()},this.initRenderTarget=function(I){X.get(I).__webglFramebuffer===void 0&&Q.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Q.setTextureCube(I,0):I.isData3DTexture?Q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Q.setTexture2DArray(I,0):Q.setTexture2D(I,0),D.unbindTexture()},this.resetState=function(){P=0,C=0,L=null,D.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var ul=class n extends ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new $t;let i=this,r=t.color!==void 0?new Ue(t.color):new Ue(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new En,d=new M,f=new M,h=new M,p=new lt,x=new M(0,0,-1),m=new ut,g=new M,y=new M,S=new ut,_=new lt,R=this.camera,P=new Rn(s,o,{samples:c,type:bi}),C=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:ah.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=P.texture,C.uniforms.color.value=r,C.uniforms.textureMatrix.value=_,this.material=C,this.onBeforeRender=function(L,w,b){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(b.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(f,h),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(f),p.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(f,x),y.reflect(d).negate(),y.add(f),R.position.copy(g),R.up.set(0,1,0),R.up.applyMatrix4(p),R.up.reflect(d),R.lookAt(y),R.far=b.far,R.updateMatrixWorld(),R.projectionMatrix.copy(b.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(R.projectionMatrix),_.multiply(R.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=R.projectionMatrix;S.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(S)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,i.visible=!1;let N=L.getRenderTarget(),z=L.xr.enabled,W=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(P),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(w,R),L.xr.enabled=z,L.shadowMap.autoUpdate=W,L.setRenderTarget(N);let G=b.viewport;G!==void 0&&L.state.viewport(G),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),i.material.dispose()}}};ul.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var fh=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function sx(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function yn(n,e,t,i=0,r=0){return sx(n,new Ut(1,i),e,t,r)}function fp(n,e,t,i=0){return sx(n,new ui(1),e,t,i)}function QT(n,e){let t=new Qe;return t.setAttribute("position",new Oe(e.flat(),3)),{tone:n,geometry:t}}function rx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return QT(n,i)}function KT(){let n=[yn("fur",[0,.012,.011],[.154,.161,.132],1),yn("fur",[0,-.065,.008],[.128,.079,.108]),yn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),yn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),rx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),yn("skin",[0,-.061,-.133],[.102,.066,.065],1),yn("skinShade",[0,-.097,-.14],[.076,.031,.047]),yn("skin",[0,.015,-.15],[.041,.056,.038]),yn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(yn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),yn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),fp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),yn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),yn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),yn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),yn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),yn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),yn("ink",[e*.047,.031,-.183],[.011,.012,.006]),fp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),fp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(rx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function eA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new Qe;return r.setAttribute("position",new ft(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var tA=eA(KT());function ph(n=0){let e=new Ft({flatShading:!0}),t=new Ft({flatShading:!0}),i=new Ft({vertexColors:!0,flatShading:!0}),r=[],s={ink:new Ue("#212128"),ivory:new Ue("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g:m,b:g}=s[f];for(let y=h;y<p;y++)u.setXYZ(y,x,m,g)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<fh.length?u:0;if(d===o)return;o=d;let f=fh[o];for(let[h,p]of Object.entries(f))(s[h]??=new Ue).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new ft(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new ze(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new Mt;return u.add(c(tA)),u}}}var fs=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],nA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],iA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],ox=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],mh=fs.length-1,ax=Math.min(...fs.map(n=>n[1])),lx=Math.max(...fs.map(n=>n[1])),Qi=new M(0,0,(ax+lx)/2),gh=new M(.047,.027,(lx-ax)/2),rA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],sA=[-.57,.57,1,.61,-.61,-1],oA=[1,1,-.04,-.91,-.91,-.04];function xh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(w=0,b=0,E=0){let F=s.length/3;return s.push(w*r,b,E),F}function c(w,b,E){i?o.push(w,E,b):o.push(w,b,E)}function u(w,b,E,F){c(w,b,E),c(w,E,F)}function d(w,b){for(let E=0;E<w.length;E++){let F=(E+1)%w.length;u(w[F],w[E],b[E],b[F])}}function f(w,b){for(let E=0;E<w.length;E++)c(b,w[(E+1)%w.length],w[E])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=fs.map(([w,b,E,F],N)=>{let z=N===0||N===mh,W=w*.67,G=-.024+(b+.024)*.69;return{top:l(w,E,b),middle:l(w*1.08,(E+F)/2,z?b:-.025+(b+.025)*1.04),bottom:l(w,F,b),innerTop:l(W,nA[N],G),innerBottom:l(W,iA[N],G)}});function m(w){let b=x[w],E=x[(w+1)%x.length];return[b.top,E.top,E.middle,E.bottom,b.bottom,b.middle]}let g=new Set(ox.map(({edge:w})=>w));g.add(mh);for(let w=0;w<x.length;w++){let b=x[w],E=x[(w+1)%x.length];c(h,b.innerTop,E.innerTop),c(p,E.innerBottom,b.innerBottom),u(b.innerTop,b.top,E.top,E.innerTop),u(E.innerBottom,E.bottom,b.bottom,b.innerBottom),g.has(w)||(u(E.top,b.top,b.middle,E.middle),u(E.middle,b.middle,b.bottom,E.bottom))}let y=m(mh);t||f(y,l(0,0,fs[mh][1]));let S=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:w,length:b,splay:E}of ox){let[F,N,z,W]=fs[w],[G,Y,B,se]=fs[w+1],ne=G-F,he=Y-N,de=-he+ne*E,Ie=ne+he*E,Ee=Math.hypot(de,Ie),Ce=Math.hypot(ne,he)/2,ie=(z+B-W-se)/4,re=[],xe=m(w);for(let[be,O,pe]of rA){let T=[l(),l(),l(),l(),l(),l()];d(xe,T),re.push({ring:T,distance:be*b,width:O*Ce,height:pe*ie}),xe=T}let Pe=l();f(xe,Pe),a.push({x:(F+G)/2,y:(z+B+W+se)/4,z:(N+Y)/2,forwardX:de/Ee,forwardZ:Ie/Ee,rows:re,tip:Pe,length:b,pressure:-1})}let _=new Qe,R=new Oe(s,3).setUsage(Sn);_.setAttribute("position",R),_.setIndex(o),_.boundingSphere=new jn(new M(0,-.018,-.052),.12),_.boundingBox=new tn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let P=!0;function C(w,b=!0){let E=!1;for(let F=0;F<a.length;F++){let N=a[F],z=w?.[F],W=Number.isFinite(z)?De.clamp(z,0,1):0;if(W===N.pressure)continue;N.pressure=W,E=!0;let{forwardX:G,forwardZ:Y,length:B,rows:se,tip:ne}=N,he=N.x,de=N.z,Ie=N.y,Ee=0,Ce=0;for(let{ring:xe,distance:Pe,width:be,height:O}of se){let pe=Pe/B,T=De.smoothstep(pe,0,.57),V=De.smoothstep(pe,.38,1),J=(.17+W*.83)*T+(.14+W*.76)*V,Z=(J+Ee)/2,D=Pe-Ce,j=Math.cos(Z)*D;he+=G*j,Ie-=Math.sin(Z)*D,de+=Y*j;for(let X=0;X<xe.length;X++){let Q=sA[X]*be,ue=oA[X]*O,ce=ue*Math.sin(J);R.setXYZ(xe[X],r*(he+Y*Q+G*ce),Ie+ue*Math.cos(J),de-G*Q+Y*ce)}Ee=J,Ce=Pe}let ie=B-Ce,re=ie*Math.cos(Ee);R.setXYZ(ne,r*(he+G*re),Ie-ie*Math.sin(Ee),de+Y*re)}E&&(R.needsUpdate=!0,P=!0),b&&P&&(_.computeVertexNormals(),P=!1)}C(),_.getAttribute("normal").setUsage(Sn);let L=new ze(_,e);return L.castShadow=!0,{mesh:L,pose:C,wristIndices:S}}var wr=12,pp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],aA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],cx=pp.flatMap(([n,e,t])=>Array.from({length:wr},(i,r)=>{let s=(r-.5)*Math.PI*2/wr;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function yh(n,e){let t=cx.length,i=[],r=(Y,B,se,ne,he)=>Y.push(B,se,ne,B,ne,he);function s(Y,B,se=!1){for(let ne=1;ne<B.length-1;ne++)se?Y.push(B[0],B[ne+1],B[ne]):Y.push(B[0],B[ne],B[ne+1])}let o=(Y,B)=>Y*wr+(B+wr)%wr;for(let Y=0;Y<pp.length-1;Y++)for(let B=0;B<wr;B++)(Y===2||Y===3)&&(B===0||B===6)||r(i,o(Y,B),o(Y+1,B),o(Y+1,B+1),o(Y,B+1));s(i,Array.from({length:wr},(Y,B)=>o(0,B))),s(i,Array.from({length:wr},(Y,B)=>o(pp.length-1,B)),!0);let a=t,l=e.map(({geometry:Y,wristIndices:B},se)=>{let ne=se===0?6:0,he=[o(4,ne),o(4,ne+1),o(3,ne+1),o(2,ne+1),o(2,ne),o(3,ne)],de=[he,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Ie=de.at(-1),Ee=new Array(Y.attributes.position.count);B.forEach((re,xe)=>{Ee[re]=Ie[xe]});for(let re=0;re<Ee.length;re++)Ee[re]??=a++;let Ce=[];for(let re=0;re<Y.index.count;re++)Ce.push(Ee[Y.index.getX(re)]);for(let re=0;re<de.length-1;re++)for(let xe=0;xe<6;xe++){let Pe=(xe+1)%6;r(i,de[re][xe],de[re][Pe],de[re+1][Pe],de[re+1][xe])}let ie=[];return s(ie,Ie),{socket:he,rings:de,wrist:Ie,wristIndices:B,remap:Ee,skin:Ce,cap:ie,sign:se===0?-1:1}}),c=new Qe,u=new Oe(a*3,3).setUsage(Sn);c.setAttribute("position",u);let d=new ze(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(Y,B)=>new ts([...i,...l.flatMap((se,ne)=>B&1<<ne?se.skin:se.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,m=new M,g=new M,y=new M,S=new M,_=new M,R=new M,P=new qe,C=new qe,L=new qe,w=new M(0,0,-1),b=new qe().setFromEuler(new nn(-1.42,0,0)),E=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,z=0,W=!0;function G(Y,B,se,ne,he){let de=!!(Y[0]||Y[1]);if(!de&&!W&&N===se&&z===ne)return;N=se,z=ne,W=de;for(let Ee=0;Ee<t;Ee++){let[Ce,ie,re]=cx[Ee];u.setXYZ(Ee,Ce*se,ie*ne,re*se)}let Ie=0;for(let Ee=0;Ee<l.length;Ee++){let Ce=l[Ee],ie=Y[Ee],re=e[Ee].geometry.attributes.position,xe=!!ie,Pe=Ce.wristIndices;xe&&he&&(Ie|=1<<Ee),p.set(0,0,0);for(let be of Ce.socket)p.add(h.fromBufferAttribute(u,be));p.multiplyScalar(1/6),m.set(0,0,0);for(let be of Pe)m.add(h.fromBufferAttribute(re,be));m.multiplyScalar(1/6).applyQuaternion(ie?.quaternion??b),xe?m.add(ie.position):m.add(h.set(p.x+Ce.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),y.copy(g).normalize(),S.set(Ce.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Ce.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(g,.49),xe&&x.addScaledVector(S,Math.sqrt(Math.max(.007,B**2-g.lengthSq()*.25))*.72),P.setFromUnitVectors(w,y.subVectors(x,p).normalize()),C.copy(ie?.quaternion??b);for(let be=0;be<4;be++){let O=be===3;R.lerpVectors(O?x:p,O?m:x,E[be]),L.copy(P).slerp(C,O?.79:be*.19);for(let pe=0;pe<6;pe++){let T=aA[pe],V=F[be];_.set(T[0]*V,T[1]*V*.84,0).applyQuaternion(L).add(R),u.setXYZ(Ce.rings[be+1][pe],_.x,_.y,_.z)}}for(let be=0;be<Ce.remap.length;be++)_.fromBufferAttribute(re,be).applyQuaternion(C),xe?_.add(ie.position):_.add(h.set(p.x+Ce.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Ce.remap[be],_.x,_.y,_.z)}c.index!==f[Ie]&&c.setIndex(f[Ie]),u.needsUpdate=!0,c.computeVertexNormals()}return G([null,null],.42,1,1,!1),{mesh:d,pose:G}}function To(n,e){let t=new ci;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Xi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var ux=.1,lA=45,hx=55,hl=128,mp=96,cA=[new Ue("#ffdc4d"),new Ue("#ff5d35"),new Ue("#bfc4c8")],uA=new M(0,0,-1);function gp(){let n=new Mt,e=new xt({color:"#596974",roughness:.38,metalness:.6}),t=new xt({color:"#29323e",roughness:.68}),i=new mt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new ze(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new xt({color:"#7f4231",roughness:.46,metalness:.34});return r(To([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(To([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new zt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new Ke(.054,.014,.073),s,.035,.045,-.099),r(new Ke(.018,.008,.023),i,.035,.063,-.131),n}function dx(n,{impact:e,onShot:t}){let i=gp(),r=new ze(new Ut(.045,0),new mt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new Qe,o=new Oe(hl*18,3).setUsage(Sn),a=new Oe(hl*18,3);for(let N=0;N<hl;N++)for(let z=0;z<6;z++){let W=cA[Math.floor(z/2)];a.setXYZ(N*6+z,W.r,W.g,W.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new is(s,new vi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Oe(mp*3,3).setUsage(Sn),u=new Qe;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Fa(u,new lo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:$n}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:hl},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:mp},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,m=new M,g=0,y=0,S=0,_=0,R=0,P=!1;function C(N,z,W,G){for(let Y=0;Y<W;Y++){let B=h[y++%mp];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(G).addScaledVector(z,.55),B.life=.12+Math.random()*.21}}function L(N,z,W){let G=f[g++%hl];return G.p.copy(N),G.d.copy(uA).applyQuaternion(z),G.distance=0,G.active=!0,G.authoritative=W,G}function w(N){let z=L(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),C(p,z.d,4,2.2),R=.055,S++,t?.(N.position,N.quaternion)}function b(N,z,W){let G=L(N,z,W);C(G.p,G.d,4,2.2),l.visible=!0}function E({dt:N,aim:z,firing:W}){if(!z&&!i.visible&&!l.visible&&!d.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!z,z&&(i.position.copy(z.modelPosition??z.position),i.quaternion.copy(z.quaternion)),z&&W){if(P)for(_-=N;_<=0;)w(z),_+=ux;else w(z),_=ux;P=!0}else _=0,P=!1;R=Math.max(0,R-N),r.visible=!!z&&R>0,r.material.opacity=R/.055;let G=0;for(let B of f){if(!B.active)continue;let se=Math.min(lA*N,hx-B.distance),ne=se>0?e?.(B.p,B.d,se,B.authoritative):null,he=ne==null?se:Math.max(0,Math.min(se,ne));B.p.addScaledVector(B.d,he),B.distance+=he,ne!=null&&(m.copy(B.d).negate(),C(B.p,m,8,4.2)),B.active=ne==null&&B.distance<hx;let de=Math.min(.82,B.distance);for(let Ie=0;Ie<3;Ie++)for(let Ee=0;Ee<2;Ee++){let Ce=(Ie+Ee)/3;x.copy(B.p).addScaledVector(B.d,-de*Ce),o.setXYZ(G++,x.x,x.y,x.z)}}l.visible=G>0,G>0&&(o.needsUpdate=!0),s.setDrawRange(0,G);let Y=0;for(let B of h)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(Y++,B.p.x,B.p.y,B.p.z));d.visible=Y>0,Y>0&&(c.needsUpdate=!0),u.setDrawRange(0,Y)}function F(){for(let N of f)N.active=!1;for(let N of h)N.life=0;_=R=0,P=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:E,reset:F,replay:b,get shotsFired(){return S}}}var fx=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],hA=new M(0,1,0);function vh(n){let e=new Mt,t=new xt({color:"#2c4750",roughness:.43,metalness:.47}),i=new xt({color:"#899fa3",roughness:.46,metalness:.57}),r=new mt({toneMapped:!1});function s(h,p,x,m,g,y=0){let S=new ze(h,p);return S.position.set(x,m,g),S.rotation.x=y,e.add(S),S}s(To([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(To([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new zt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new zt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new Ke(.044,.009,.038),r,.038,.069,-.023);let o=new ze(new zt(.002,.003,1,5,1,!0),new mt({transparent:!0,opacity:.52,depthWrite:!1,blending:$n,toneMapped:!1})),a=new ze(new Ut(.012,0),new mt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:m}){if(!h||!p||!x||!m){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(fx[h-1]??fx[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(hA,c.normalize()),a.position.copy(m)}return d(),{mesh:e,hide:d,update:f}}var dA="wss://clouddata.turbowarp.org",fA="itssoren.github.io/VR/gorilla-lab/",bh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Ao=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),gx="\u2601 GorillaHost",dl=["ARENE1","ARENE2","ARENE3"],pA=new Map([[gx,"vr"],[bh.vr,"vr"],[bh.pc,"pc"],...Ao.map(n=>[n,"player"])]),yp=53,_h=4400,xx=64e3,mA=100,gA=200,xA=450,yx=6,Vt=(n,e)=>Math.round(n).toString().padStart(e,"0");function fl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function ps(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function yA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Vt(e,7)+a.map(c=>Vt(c*100+2e4,5)).join("")+Vt(Math.round(l*10)%3600,4)+Vt(o,6)}function vA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function vx({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,m="",g=-1/0,y=null,S=0,_=0,R=1/0,P=0,C="offline",L=!1,w=-1,b=0,E=[],F=1/0,N=350,z=1/0,W=0,G=[],Y={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(T,V){C=T,n(V)}function se(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ne(){return[...c.values()].map(T=>T.pose).filter(Boolean)}function he(){let T=ne().filter(D=>h==="vr"?D.role!=="vr":D.role==="vr"),V=D=>Number(D.ready)*2+ +(D.role==="pc"),J=T.find(D=>D.id===y?.id)??null,Z=T.reduce((D,j)=>!D||V(j)>V(D)?j:D,J);Z!==y&&(y=Z,e(y))}function de(T){for(let V of c.values())V.pose&&t(null,V.pose),V.pose=V.candidate=null;T&&c.clear(),he()}function Ie(){let T=f;if(f=null,T){T.onopen=T.onmessage=T.onerror=T.onclose=null;try{T.close()}catch{}}}function Ee(){Ie(),h=null,p="",R=1/0,L=!1,w=-1,E=[],G=[],de(!0),B("offline","Hors ligne")}function Ce(T){let V=Math.min(3e4,1500*2**Math.min(P++,5));R=a()+V,B("retry","TurboWarp d\xE9connect\xE9 ("+T+") \xB7 reconnexion automatique au salon "+p)}function ie(T){let V=!1;for(let[J,Z]of c)Z.pose&&T-Z.pose.arrival>_h&&(t(null,Z.pose),Z.pose=null,V=!0),Z.candidate&&T-Z.candidate.arrival>_h&&(Z.candidate=null),T-Z.lastArrival>6e4&&c.delete(J);V&&he()}function re(T,V,J,Z){let D=CA(J.value,null);if(!D||D.id===x)return;let j=c.get(D.id);if(!j){if(c.size>=64)return;j={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:Z,pose:null,candidate:null},c.set(D.id,j)}if(D.time<=j.lastTime)return;let X=j.pose??j.candidate;if(X&&D.time-X.time>_h+Z-X.arrival){if(j.pose)return;j.candidate=null}j.lastTime=D.time,j.lastArrival=Z;let Q={...D,ready:D.ready??!0,protocol:D.protocol??(D.ready===void 0?3:4),role:T,channel:V,received:o(),arrival:Z},ue=j.candidate;if(!j.pose&&(!ue||ue.channel!==V||ue.map!==Q.map||Z-ue.arrival>_h)&&(D.ready!==void 0||Math.abs(D.time-Q.received)>25e3)){j.candidate=Q;return}if(j.candidate=null,!j.pose&&ue?.objects&&ue.ready&&ue.map===Q.map&&!Q.objects&&(Q.objects=ue.objects),j.pose=Q,h==="vr"&&T==="vr"&&Q.ready)if(z===1/0||ue?.arrival<z||D.id<x)h="player",m=Ao[x%Ao.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(Y.received++,Y.bytesReceived+=J.value.length,t(Q),he(),!(!L||!Q.ready||Q.map!==w)){Z-j.shotWindow>=1e3&&(j.shotWindow=Z,j.shotCount=0);for(let{seq:ce,position:A,quaternion:v}of Q.shots??[])ce<=j.lastShot||(j.lastShot=ce,!(j.shotCount>=14||(A.x-Q.x)**2+(A.y-Q.y)**2+(A.z-Q.z)**2>7**2)&&(j.shotCount++,r({position:A,quaternion:v},Q)));if(!(h!=="vr"||T!=="player"||D.actionTarget!==x))for(let{seq:ce,action:A}of D.actions)ce<=j.lastAction||(j.lastAction=ce,i(A,Q))}}function xe(){let T;try{T=new s(dA)}catch{return!1}return f=T,_=a(),g=-1/0,z=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),T.onopen=()=>{f===T&&(S=a(),T.send(JSON.stringify({method:"handshake",project_id:fA+p,user:"player"+x})+`
`),B("open",se()))},T.onmessage=V=>{if(f!==T||typeof V.data!="string"||V.data.length>105e4)return;let J=a();ie(J);for(let Z of V.data.split(`
`)){if(!Z.trim())continue;let D;try{D=JSON.parse(Z)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",Z.slice(0,200));continue}let j=pA.get(D?.name);D?.method!=="set"||!j||re(j,D.name,D,J)}},T.onerror=()=>{f===T&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},T.onclose=V=>{if(f!==T)return;let J=V.code;if(Ie(),de(!1),E=[],G=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(J)){Ce(J);return}h=null,p="";let Z={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[J];B("error","TurboWarp d\xE9connect\xE9 ("+J+")"+(Z?" \xB7 "+Z:V.reason?" \xB7 "+V.reason.slice(0,100):""))},!0}function Pe(T,V){let J=fl(T);return!/^[A-Z0-9]{5,12}$/.test(J)||!["vr","pc","player"].includes(V)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===V&&p===J?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(de(!0),x=Math.floor(1e6+l()*8999999),h=V,p=J,m=bh[h]??Ao[x%Ao.length],N=350,h==="vr"&&dl.includes(p)&&(m=x%2===0?bh.vr:gx,N=750+x%150),b=W=0,G=[],Y={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},P=0,R=F=1/0,xe()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function be(T,V){let J=T.hand||T.type==="world"?5:4;if(h!=="player"||C!=="open"||!y?.ready||y.protocol<J||y.map!==V||!vp(T)||b>=99999999)return!1;let Z=a();return E=E.filter(D=>D.expires>=Z&&D.target===y.id&&D.map===V),E.length>=8?!1:(E.push({action:{...T},seq:++b,expires:Z+1800,target:y.id,map:V}),!0)}function O(T,V,J){if(!h||h==="pc"||C!=="open"||W>=99999999)return;let Z=Ro(T),D=Po(V);if(!Z||!D)return;let j=a();G=G.filter(X=>X.expires>=j&&X.map===J).slice(-(yx-1)),G.push({record:Vt(++W,8)+Z+D,expires:j+xA,map:J})}function pe(T){let V=a();L=!!T&&T.ready!==!1,w=T?.map??-1,ie(V),h&&!f&&V>=R&&(R=1/0,xe()||Ce(1006)),f&&f.readyState===0&&V-_>1e4&&(Ie(),Ce(1006)),Y.bufferedBytes=f?.bufferedAmount??0;let J=h==="pc"?gA:mA;if(!T||!h||f?.readyState!==1||Y.bufferedBytes>4096||V-S<(h==="vr"?N:350)||V-g<J)return!1;if(h==="player"){let ue=ne().filter(A=>A.role==="player"),ce=ue.find(A=>A.channel===m);if(ce?F=Math.min(V,F):F=1/0,ce&&(ce.id<x||V-F>=800)){let A=Ao.find(v=>!ue.some(U=>U.channel===v));if(!A)return C!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=A,F=1/0}}(P||C==="capacity")&&(P=0,B("open",se()));let Z=Math.round(d+V-u),D=yA({...T,time:Z,id:x});if(!D)return!1;E=E.filter(ue=>ue.expires>=V&&ue.target===y?.id&&ue.map===T.map),G=G.filter(ue=>ue.expires>=V&&ue.map===T.map);let j=Y.bufferedBytes===0?T.objectFeed?.(V):null,X=typeof T.avatar=="function"?T.avatar():T.avatar,Q=EA(D,X,j,{version:5,ready:T.ready!==!1,actions:E,actionTarget:E[0]?.target??0,shots:G,score:T.score});return g=V,h==="vr"&&(z=Math.min(z,V)),f.send(JSON.stringify({method:"set",name:m,value:Q})+`
`),Y.sent++,Y.bytesSent+=Q.length,!0}return{join:Pe,leave:Ee,tick:pe,sendAction:be,queueShot:O,get stats(){return{...Y}},get role(){return h},get code(){return p},get state(){return C},get remote(){return y},get peers(){return ne()}}}var _A=15,MA=12,_x=44,Mh=15,xp=35,Ro=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Vt(e*100+2e4,5)).join(""):null;function Eo(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Po=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Vt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Co(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function bA(n){let e=Ro(n.mesh.position),t=Po(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>yp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Vt(i,5)+Vt(r,2)+s+o+Vt(a,8)+e+t}function SA(n){return Vt(n,5)+"99"+"0".repeat(_x-7)}function wA(n){if(!n)return null;let e=Po(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Ro(l.position),u=l&&Po(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(_A+MA)}),r=Vt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Vt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+Vt(n.coconuts??31,2)+Vt(n.color??0,2)+a}function vp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=yp?"10"+Vt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Vt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Vt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Vt(i,5):null}function TA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),vp(s)===n?s:null}function AA(n){let e=Ro(n?.position),t=Po(n?.quaternion),i=Ro(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function EA(n,e,t,i=null){let r=wA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Vt(p,8)+vp(x)).join(""),a=i.version===5,l=a&&Ro(e?.gun?.position),c=a&&Po(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Vt(d.length,1)+d.map(p=>p.record).join("")+Vt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+AA(r?e.tool:null)+Vt(i.actionTarget??0,7)+Vt(o.length/Mh,1)+o+f;return h.length+1+s.length>xx&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function px(n,e,t){let i=Co(n,e);if(!i)return null;let r=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:Eo(n,a+1),quaternion:Co(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(r.some(a=>a&&(!a.position||!a.quaternion)))return null;let s=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return s>2||o>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function CA(n,e){if(typeof n!="string"||n.length>xx||!/^[0-9]+$/.test(n))return null;let t=vA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:_x,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=px(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Eo(n,a+2),f=Co(n,a+17),h=Eo(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*Mh+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=Mh){let u=Number(n.slice(a,a+8)),d=TA(n.slice(a+8,a+Mh));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=Eo(n,a+1),h=Co(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>yx||n.length<a+u*xp+7)return null;t.shots=[];let d=0;for(let f=a+u*xp;a<f;a+=xp){let h=Number(n.slice(a,a+8)),p=Eo(n,a+8),x=Co(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=px(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Eo(n,c+10),m=Co(n,c+25);if(d>yp||f>7||h>4||p>16777215||!x||!m)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:m})}t.objects={full:o==="2",records:a}}return t}var RA=.45,mx=2.5;function Mx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=RA&&!d.frozen&&(d.velocity.lengthSq()>=mx**2||d.angular.lengthSq()*d.radius**2>=mx**2);if(!l&&!p&&!h?.fast)continue;let x=bA(d);if(!x)continue;c?.add(f);let m=x!==h?.record;m&&e.set(f,{record:x,until:s+420}),(a||!l&&m)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:SA(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var bx=Wt.DEFAULT_UP,PA=15,Sx=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function IA(){let n=new Mt,e=new ze(new Ut(.155,1),new xt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new ze(new hi(.23,.018,5,20),new mt({color:"#84e6ff",transparent:!0,opacity:.85,blending:$n,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new ze(new qi(.11,.28,9,1,!0),new mt({color:"#55c7ff",transparent:!0,opacity:.45,side:Ct,blending:$n,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function LA(){let n=new Mt,e=new Mt,t=ph(0),i=t.createHead(),r=["left","right"].map(g=>({skin:xh(g,t.hand,{openWrist:!0}),position:new M,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=yh(t.fur,r.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=vh(e),l=null,c=new M,u=[null,null],d=new M,f=new qe,h=new qe,p=new qe,x={mode:0,position:new M,quaternion:new qe,end:new M};function m(g,y,S){let _=g.avatar,R=1-Math.exp(-S*32);if(!_){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(_.head).premultiply(f),i.quaternion.slerp(p,R),d.set(0,0,-1).applyQuaternion(i.quaternion);let P=De.smoothstep(-d.y,.28,.94),C=Math.max(.38,_.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*C,.24*P),o.rotation.x=-.5*P,h.copy(o.quaternion).invert(),t.setColor(_.color??0);for(let b=0;b<r.length;b++){let E=r[b],F=_.hands[b];if(u[b]=F?E:null,!F){E.tracked=!1;continue}c.copy(F.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(F.quaternion).premultiply(f).premultiply(h),E.tracked?(E.position.lerp(c,R),E.quaternion.slerp(p,R)):(E.position.copy(c),E.quaternion.copy(p)),E.tracked=!0;for(let N=0;N<3;N++)E.pressure[N]+=((F.pressure?.[N]??0)-E.pressure[N])*R;E.skin.pose(E.pressure,!1)}if(s.pose(u,_.armSpan*.5,.97,C,!0),_.gun){l||(l=gp(),l.visible=!1,e.add(l));let b=l.visible?R:1;l.position.lerp(_.gun.position,b),l.quaternion.slerp(p.copy(_.gun.quaternion),b),l.visible=!0}else l&&(l.visible=!1);let L=_.tool;if(!L){a.hide(),x.mode=0;return}let w=x.mode?R:1;x.mode=L.mode,x.position.lerp(L.position,w),x.quaternion.slerp(p.copy(L.quaternion),w),x.end.lerp(L.end,w),a.update(x)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of r)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function wx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Tx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,applyCoconuts:s,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,d=new Map,f=Mx(),h=0,p=-1,x=-1,m=-1,g="",y=0,S=-1;function _(){let D=e();return D!==g&&(g=D,y=ps(D)),y}function R(D){return!!D?.ready&&D.map===_()}function P(D){let j=d.get(D);j&&(n.remove(j.mesh),j.mesh.material?.dispose(),d.delete(D))}function C(){for(let D of d.keys())P(D);h=0,p=-1,x!==-1&&(x=-1,r?.(null)),m!==-1&&(m=-1,s?.(null)),S!==-1&&(S=-1,o?.(0))}function L(D,j){if(D.color===j.color&&D.style===j.style)return;D.color=j.color,D.style=j.style;let X=D.mesh.material;if(X?.color){if(X.color.setHex(j.color),j.style===0){Object.assign(X,D.baseMaterial),D.baseEmissive&&X.emissive.copy(D.baseEmissive),X.needsUpdate=!0;return}X.roughness=[.44,.94,.12,.16,.4][j.style],X.metalness=[.1,0,.87,.12,0][j.style],X.opacity=j.style===3?.4:1,X.transparent=j.style===3,X.depthWrite=!X.transparent,X.emissive?.copy(X.color),X.emissiveIntensity=j.style===4?1.65:0,X.needsUpdate=!0}}function w(D){if(!R(D)){C();return}if((h!==D.id||p!==D.map)&&(C(),h=D.id,p=D.map),D.avatar&&D.avatar.light!==x&&(x=D.avatar.light,r?.(x)),D.avatar&&D.avatar.coconuts!==m&&(m=D.avatar.coconuts,s?.(m)),D.score!==void 0&&D.score!==S&&(S=D.score,o?.(S)),!D.objects)return;let j=D.objects.full?new Set:null;for(let X of D.objects.records){if(X.removed){P(X.id);continue}j?.add(X.id);let Q=d.get(X.id);if(Q&&Q.type!==X.type&&(P(X.id),Q=null),!Q){let ce=i?.(X.type);if(!ce)continue;let{roughness:A,metalness:v,transparent:U,depthWrite:H,opacity:te,emissiveIntensity:$}=ce.material??{},me={roughness:A,metalness:v,transparent:U,depthWrite:H,opacity:te,emissiveIntensity:$};ce.userData.netId=X.id,ce.userData.netType=X.type,Q={mesh:ce,baseMaterial:me,baseEmissive:ce.material?.emissive?.clone(),type:X.type,target:new M().copy(X.position),quaternion:new qe().copy(X.rotation),velocity:new M,time:D.time},ce.position.copy(Q.target),ce.quaternion.copy(Q.quaternion),d.set(X.id,Q),n.add(ce)}let ue=(D.time-Q.time)/1e3;ue>.06&&ue<.65&&!(X.flags&6)?Q.velocity.copy(X.position).sub(Q.target).multiplyScalar(1/ue).clampLength(0,23):Q.velocity.set(0,0,0),Q.target.copy(X.position),Q.quaternion.copy(X.rotation),Q.time=D.time,Q.flags=X.flags,Q.frequent=ue>.06&&ue<.16,Q.received=D.arrival,Q.mesh.userData.netFlags=X.flags,Q.mesh.userData.held=!!(X.flags&1),L(Q,X)}if(j)for(let X of d.keys())j.has(X)||P(X)}let b=new M;function E(D,j,X){let Q=1-Math.exp(-D*22),ue=1-Math.exp(-D*32);for(let ce of d.values()){if(ce.mesh.visible=j,!j)continue;let A=ce.frequent?ue:Q,v=ce.flags&6?0:Math.min(ce.frequent?.1:.12,Math.max(0,(X-ce.received)/1e3));b.copy(ce.target).addScaledVector(ce.velocity,v),ce.mesh.position.distanceToSquared(b)>16||ce.flags&6&&ce.mesh.position.distanceToSquared(ce.target)<1e-4?ce.mesh.position.copy(b):ce.mesh.position.lerp(b,A),ce.mesh.quaternion.slerp(ce.quaternion,A),ce.flags&6&&ce.mesh.quaternion.angleTo(ce.quaternion)<.008&&ce.mesh.quaternion.copy(ce.quaternion),ce.mesh.updateMatrixWorld(!0)}}let F=D=>document.querySelector(D),N=F("#cloud-status"),z=F("#cloud-room"),W=F("#cloud-camera"),G=-1/0,Y=0,B="Hors ligne",se=0;function ne(D){Y=D,W.textContent="Cam\xE9ra : "+Sx[D]}function he(){ne((Y+1)%Sx.length)}W.onclick=he;let de=vx({onStatus(D){B=D,N.textContent=D,c?.()},onPose(D){de.role!=="vr"&&w(D)},onPeer(D,j){if(!D){let ue=u.get(j.id);ue?.art&&(wx(ue.art.model),wx(ue.art.toolRoot),ue.art.dispose?.()),u.delete(j.id);return}let X=u.get(D.id);X||(X={art:null,motion:new M,handMotion:[new M,new M]},u.set(D.id,X));let Q=X.pose;X.motion.set(0,0,0);for(let ue of X.handMotion)ue.set(0,0,0);if(Q&&Q.map===D.map){let ue=(D.time-Q.time)/1e3;if(ue>=.055&&ue<=.65){X.motion.set(D.x-Q.x,D.y-Q.y,D.z-Q.z).multiplyScalar(1/ue),X.motion.lengthSq()>=18**2&&X.motion.set(0,0,0);for(let ce=0;ce<2;ce++){let A=Q.avatar?.hands[ce],v=D.avatar?.hands[ce];A&&v&&X.handMotion[ce].copy(v.position).sub(A.position).multiplyScalar(1/ue).clampLength(0,23)}}}X.pose=D},onAction:a,onShot:l}),Ie=fl(new URLSearchParams(location.search).get("room")??"");function Ee(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),D=>(D%36).toString(36)).join("").toUpperCase()}z.value=/^[A-Z0-9]{5,12}$/.test(Ie)?Ie:Ee();function Ce(D,j=z.value){let X=fl(j);if(!(de.role===D&&de.code===X)){if(!/^[A-Z0-9]{5,12}$/.test(X)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}de.role&&de.leave(),de.join(X,D)&&(z.value=X,D!=="vr"&&F("#game").focus(),f.reset(),ne(0),t(ps(X)),g="")}}F("#cloud-vr").onclick=()=>Ce("vr"),F("#cloud-new").onclick=()=>Ce("vr",Ee());for(let[D,j]of dl.entries())F(`#public-join-${D}`).onclick=()=>Ce("player",j),F(`#public-host-${D}`).onclick=()=>Ce("vr",j);F("#cloud-pc").onclick=()=>Ce("pc");let ie=F("#cloud-player");ie&&(ie.onclick=()=>Ce("player")),F("#cloud-leave").onclick=()=>{se=0,de.leave()},F("#cloud-copy").onclick=async()=>{let D=new URL(location.href);D.searchParams.set("room",de.code||fl(z.value));try{await navigator.clipboard.writeText(D.href),N.textContent="Lien copi\xE9."}catch{N.textContent=D.href}se=performance.now()+2500},addEventListener("pagehide",()=>de.leave());let re=new M,xe=new M,Pe=new M,be=new M,O=0;function pe({dt:D,position:j,yaw:X,pitch:Q,camera:ue,rig:ce,keys:A,flat:v}){let U=v?.movement,H=Number(A.has("KeyD"))-Number(A.has("KeyQ")||A.has("KeyA"))+(U?.x??0),te=Number(A.has("KeyS"))-Number(A.has("KeyZ")||A.has("KeyW"))+(U?.z??0);v?.consumeJump?.()&&(O=.26),O=Math.max(0,O-D);let $=Number(A.has("Space")||O>0)-Number(A.has("ShiftLeft")||A.has("ShiftRight")),me=A.has("ControlLeft")||A.has("ControlRight")?11:3.2;be.set(H,$,te).clampLength(0,1).applyAxisAngle(bx,X),ce.position.addScaledVector(be,D*me).clampScalar(-175,175),ce.rotation.set(0,X,0),ue.position.set(0,0,0),ue.rotation.set(Q,0,0,"YXZ"),ce.updateMatrixWorld(!0),j.copy(ce.position)}function T(D,j,X,Q){for(let ue of u.values()){let ce=ue.pose;if(!(D&&R(ce))){ue.art&&(ue.art.model.visible=!1,ue.art.toolRoot&&(ue.art.toolRoot.visible=!1));continue}ue.art||(ue.art=ce.role==="pc"?IA():LA(),n.add(ue.art.model),ue.art.model.visible=!1,ue.art.toolRoot&&n.add(ue.art.toolRoot));let{model:v,toolRoot:U}=ue.art,H=Math.min(.12,Math.max(0,(Q-ce.arrival)/1e3+.025));re.copy(ce).addScaledVector(ue.motion,H),!v.visible||v.position.distanceToSquared(re)>64?v.position.copy(re):v.position.lerp(re,1-Math.exp(-X*34)),v.rotation.y=ce.yaw,v.visible=!0,U&&(U.visible=!0),ue.art.draw(ce,j,X)}}function V(D,j){if(j<se)return;let X=de.remote,Q=B;if(de.state==="open"){let ue="Salon "+de.code+" \xB7 ",ce=de.peers.filter(A=>A.ready);if(!D)Q=ue+"quitte la session VR pour utiliser le mode spectateur";else if(de.role!=="vr"&&X&&X.map!==_())Q=ue+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(de.role!=="vr"&&X&&!X.ready)Q=ue+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(de.role==="player"&&X&&X.protocol<5)Q=ue+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(de.role!=="vr"&&R(X))Q=ue+"h\xF4te connect\xE9";else if(de.role==="vr"){let A=ce.filter(R),v=A.filter(H=>H.role==="player").length,U=A.some(H=>H.role==="pc");Q=ue+"tu h\xE9berges \xB7 "+(v+1)+" joueur"+(v?"s":""),U&&(Q+=" \xB7 spectateur connect\xE9"),!v&&ce.some(H=>!R(H))&&(Q+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==Q&&(N.textContent=Q,c?.())}function J(D){let{inVR:j,time:X,dt:Q,position:ue,yaw:ce,camera:A,rig:v,keys:U,avatar:H,bodies:te,score:$}=D;if(!de.role){C();return}let me=de.role!=="pc"||!j,fe=performance.now(),ve=_(),ye=de.role!=="vr"?de.remote:null,le=me&&R(ye);if(!le&&p!==-1&&C(),E(Q,le,fe),T(me,X,Q,fe),de.role==="pc"&&!j){(D.actions??U).delete("KeyC")&&he();let Me=Y===3&&le?[...d.values()].find(Se=>Se.type===PA)?.mesh:null,Ve=le?u.get(ye.id)?.art?.model:null;Me?(Pe.set(0,0,-.23).applyQuaternion(Me.quaternion),v.position.copy(Me.position).add(Pe),v.rotation.set(0,0,0),A.position.set(0,0,0),A.quaternion.copy(Me.quaternion),v.updateMatrixWorld(!0),ue.copy(v.position)):Ve&&(Y===1||Y===2)?(Pe.set(0,.72,Y===1?-2.7:2.7).applyAxisAngle(bx,Ve.rotation.y),xe.copy(Ve.position).add(Pe),v.position.lerp(xe,1-Math.exp(-Q*11)),A.position.set(0,0,0),v.updateMatrixWorld(!0),A.lookAt(Ve.position),A.updateWorldMatrix(!0,!1),ue.copy(v.position)):pe(D)}de.tick({x:ue.x,y:ue.y,z:ue.z,yaw:ce,map:ve,ready:me,avatar:me&&de.role!=="pc"?H:null,score:$,objectFeed:me&&de.role==="vr"&&te?Me=>f.capture(Me,te):null}),fe-G>=150&&(G=fe,V(me,fe))}function Z(D){let j=u.get(D)?.pose;return R(j)?j:null}return{update:J,getPeer:Z,connect:Ce,leave:()=>de.leave(),get caption(){return N.textContent},handMotion(D,j){return u.get(D)?.handMotion[j]},sendAction(D){return de.sendAction(D,_())},sendShot(D,j){de.queueShot(D,j,_())},get stats(){return de.stats},get role(){return de.role},get connected(){return R(de.remote)},get remoteSpectator(){return de.peers.find(D=>D.role==="pc"&&R(D))??null},get remoteLight(){return x===-1?null:x},get replicaCount(){return d.size},forEachReplica(D){for(let j of d.values())j.mesh.visible&&D(j.mesh)}}}function Sh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Qe,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=Ax(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=Ax(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ax(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Th=0,DA=1,UA=new M,Ex=new tl,_p=new En,Cx=new M,wh=new Cn,Ah=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Eh,this.unassigned=new Eh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Mp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new M;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,UA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Th){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,Ex.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Ex.closestPointToPoint(p.point,!0,Cx);let x=Cx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,_p.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(_p.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(_p.distanceToPoint(u.point)<0){d.push(fi.create(a,l,c),fi.create(u,l,a),fi.create(u,c,l),fi.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(fi.create(a,c,l),fi.create(u,a,l),fi.create(u,l,c),fi.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>s&&(s=g,x=this.faces[m])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Th&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=DA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===Th&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=fi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},fi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=Th,this.edge=null}static create(e,t,i){let r=new n,s=new pl(e,r),o=new pl(t,r),a=new pl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return wh.set(e.point,t.point,i.point),wh.getNormal(this.normal),wh.getMidpoint(this.midpoint),this.area=wh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},pl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Mp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Eh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Ki=class extends Qe{constructor(e=[]){super();let t=[],i=[],s=new Ah().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var Rx=48,Px=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),FA=(n,e,t)=>Math.max(e,Math.min(t,n)),NA=()=>structuredClone(Px.shield),ml=(n,e,t,i)=>Number.isFinite(n)?FA(n,t,i):e;function Rh(n){let e=n?.mode==="lathe"?Px.bottle:NA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Rx?n.points.map(o=>[ml(o?.[0],0,-1.5,1.5),ml(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:ml(n?.depth,e.depth,.025,1.5),bevel:ml(n?.bevel,e.bevel,0,.15),segments:Math.round(ml(n?.segments,32,8,64))}}function Ix(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Ch(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function BA(n,e,t,i){let r=Ch(n,e,t),s=Ch(n,e,i),o=Ch(t,i,n),a=Ch(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function OA(n){let e=Rh(n),t=e.mode==="lathe"?e.points:Ix(e);if(t.length<3||t.length>Rx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&BA(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Lx(n){let e=Rh(n),t=OA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([s,o])=>new _e(Math.max(0,s),o));i=new Xa(r,e.segments)}else{let r=Ix(e),s=new ci;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Xi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ft(new Float32Array(r*2),2))}return i}var Un=Math.PI*2,Ph=.84,er=128;function Er(n){let e=new Uint8Array(er*er*4);for(let i=0;i<er;i++)for(let r=0;r<er;r++){let s=(r+.5)/er,o=(i+.5)/er,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Ph,1),Math.min(o/Ph,1),r,i),l=(r+i*er)*4;for(let c=0;c<3;c++)e[l+c]=De.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new yi(e,er,er);return t.colorSpace=at,t.generateMipmaps=!0,t.minFilter=Ln,t.magFilter=un,t.needsUpdate=!0,t}function ms(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new Ue(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Ph,s.getY(l)*Ph):s.setXY(l,.95,.95);return i.setAttribute("color",new ft(a,3)),i}function Cr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Sh(r),material:new xt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Dx(n,e,t){let i=n/2,r=e/2,s=new ci;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Tr(n,e,t,i,r){return new Xi(Dx(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ar(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Un*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;d>0&&s.push(m,m+1,g),n[u+1][0]>0&&s.push(m+1,g+1,g)}}let o=new Qe;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function gl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new M(0,r,0));continue}for(let s=0;s<e;s++){let o=Un*s/e;t.push(new M(i*Math.sin(o),r,i*Math.cos(o)))}}return new Ki(t)}function zA(){let t=new Ya(Dx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=De.clamp(i.getX(l)/.098+.5,0,1),u=De.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Er((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Un),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[it(Tr(.106,.207,.013,.011,.0019),8425890),it(Tr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Tr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Tr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new Ke(.0036,.024,.004).translate(.055,.029,0),11714250),it(new Ke(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new Ke(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new zt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new Ot(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new Ot(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ki([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return Cr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function VA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Ar(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Er((a,l,c,u)=>{let d=Un*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(y=>Math.exp(-(((f-y+.035*Math.cos(d))/.009)**2)))),x=h**3*p,m=ms(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*x+g,76+24*h+70*x+g,24+11*h+52*x+g*.8]}),o=gl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Cr("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function kA(){let n=Er((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*ms(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Ar([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ar([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new zt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new zt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Un*s/5;i.push(it(new Ke(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=gl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Cr("wheel","Roue",1.8,r,i,n,.64,.23)}function GA(){let n=Er((s,o,a,l)=>{let c=ms(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Un*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Ar([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new hi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Un*l/5;return new M(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let r=new Ki(i);return Cr("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function HA(){let n=Ar([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Er((r,s,o,a)=>{let l=9*ms(o,a),c=11*Math.cos(r*Un*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Un*48+r*Un*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Un*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new fo(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new Ot(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new Ot(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new zt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new Ot(.008,12).translate(0,.035,.0336),15633202)],i=gl([[.033,-.143],[.054,.133]],6);return Cr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function WA(){let n=Ar([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Er((s,o,a,l)=>{let c=10*ms(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Un*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Un*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new Ot(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new fo(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new Ot(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=gl([[.069,-.112],[.069,.109]],6);return Cr("soda","Canette de soda",.35,r,i,t,.42,.27)}function qA(){let n=Ar([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Er((r,s,o,a)=>{let l=15*ms(o,a),c=8*Math.cos(r*Un*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Tr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new Ot(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=gl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Cr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function XA(){let n=Er((r,s,o,a)=>{let l=8*ms(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ar([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Tr(.138,.22,.061,.016,.004),14788675),it(Tr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new qt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new zt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new Ke(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new Ke(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new Ot(.004,8).translate(.04,.066,.0397),15817792),it(new Ot(.004,8).translate(-.04,.066,.0397),7903100),it(Tr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new M(r,l,o),new M(s,l,o),new M(s,l,a),new M(r,l,a)]);return Cr("radio","Talkie-walkie",.43,new Ki(i),t,n,.61,.08)}function Ux(){return[zA(),VA(),kA(),GA(),HA(),WA(),qA(),XA()]}var Fn=new qe,Xt=new M,Oh=new M,YA=new lt,Fx=new WeakMap;function Gh(n){if(n.heightfield||n.objectBody)return null;let e=Fx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=YA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Fx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function Zx(n,e,t){let i=Gh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function zh(n,e,t,i){if(t.heightfield)return sE(n,e,t,i);if(t.objectBody)return ry(n,e,t.objectBody,i);if(!Zx(n,e,t))return 0;Fn.copy(t.quaternion).invert(),Xt.copy(n).sub(t.position).applyQuaternion(Fn);let r=t.half;Oh.copy(Xt).clamp(t.min,r),i.subVectors(Xt,Oh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(Xt.x),a=r.y-Math.abs(Xt.y),l=r.z-Math.abs(Xt.z);return o<=a&&o<=l?i.set(Math.sign(Xt.x)||1,0,0):a<=l?i.set(0,Math.sign(Xt.y)||1,0):i.set(0,0,Math.sign(Xt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new M,tr=new M;function Up(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=zh(n,e,u,rt);if(!d||(n.addScaledVector(rt,d+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let f=i.dot(rt);f<0&&i.addScaledVector(rt,-f*(Math.abs(f)<.55?1:1+r)),tr.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(tr,-Math.min(.95,s*u.friction*o))}return l}var bp=new M,Uo=[];function Sl(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Uo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=Gh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Uo.push(h)}for(let h=1;h<=o;h++){bp.copy(n).lerp(e,h/o);for(let p of Uo){let x=zh(bp,t,p,rt);if(x)return r.copy(bp).addScaledVector(rt,x+.001),s.copy(rt),p}}return null}var vl=new M,bl=new M,Fo=new M,jx=new Cn,_l=new M;function wi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),m=x.toArray().map(g=>g.toFixed(5)).join(",");s.has(m)||(s.add(m),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=_=>new M().fromBufferAttribute(t,n.index?n.index.getX(_):_),m=x(p),g=x(p+1),y=x(p+2),S=new Cn(m,g,y).getNormal(new M);S.lengthSq()>.1&&r.push({a:m,b:g,c:y,n:S})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new tn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let m of p)m.lengthSq()>.5&&!x.some(g=>Math.abs(g.dot(m))>.9999)&&x.push(m);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Hh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Fn.copy(t.quaternion).invert(),Xt.copy(n).sub(t.position).applyQuaternion(Fn),i.faces.every(s=>s.n.dot(vl.subVectors(Xt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)jx.set(s,o,a).closestPointToPoint(Xt,_l),r=Math.min(r,Xt.distanceToSquared(_l));return Math.sqrt(r)}function ZA(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=zh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Fn.copy(e.quaternion).invert(),Xt.copy(r.position).sub(e.position).applyQuaternion(Fn),Oh.copy(Xt).clamp(e.min,e.half),Xt.distanceToSquared(Oh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){vl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=zh(vl,.007,e,Fo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(vl),t.copy(Fo)):Math.abs(c-o)<.003&&Fo.dot(t)>.98&&(i.lerp(vl,1/++a),o=Math.max(o,c)))}return o}var Ih=new M,jA=new M,Lh=new M,JA=new M,Nx=new qe,Bx=new qe,Ox=new M,Sp={min:0,max:0},wp={min:0,max:0};function zx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}Ox.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(Ox);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function Ti(n){return wi(new Ke(n.x*2,n.y*2,n.z*2))}function Wh(n,e,t){let i=JA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Nx.copy(n.mesh.quaternion).invert(),Bx.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);zx(n.shape,o,Nx,Sp),zx(e.shape,o,Bx,wp);let l=wp.max-Sp.min-a,c=Sp.max-wp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Ih.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Ih.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Lh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Ih.copy(a).applyQuaternion(e.mesh.quaternion).cross(Lh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(jA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Fn.copy(a.mesh.quaternion).invert(),Xt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Fn);for(let{a:c,b:u,c:d}of a.shape.faces){jx.set(c,u,d).closestPointToPoint(Xt,_l);let f=Xt.distanceToSquared(_l);f<l&&(l=f,Lh.copy(_l))}if(!s(Ih.subVectors(Xt,Lh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var $A=new M;function QA(n,e,t){Fn.copy(e.quaternion).invert(),Xt.copy(n.mesh.position).sub(e.position).applyQuaternion(Fn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Xt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=Xt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Ip(n,$A.copy(t).negate())-r,a=s+Ip(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Fp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return ZA(n,e,t,i??bl);let r=QA(n,e,t)??Wh(n,e,t);return r>0&&i&&Qx(n,e,t,i),r}var Pp=wi(new ui(1,0).scale(...gh)),Dh={mesh:{position:new M,quaternion:new qe},shape:Pp,radius:Pp.radius,precise:!0};function Jx(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Pp.radius;Uo.length=0;for(let c of i){let u=Gh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Uo.push(c)}Dh.mesh.quaternion.copy(t);let l=Dh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Uo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Wh(Dh,d,rt):Fp(Dh,u,rt);if(f>0)return r.copy(l).addScaledVector(rt,f+5e-4),s.copy(rt),u}}return null}function wl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!Zx(n.mesh.position,n.radius,r))continue;let s=Fp(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var Tp=new M,xl=new M,Uh=new M,Ap=new qe,Rr=new qe,Vx=new qe;function kx(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function $x(n,e,t,i,r){let{mesh:s,shape:o}=n;Tp.copy(s.position),Ap.copy(s.quaternion),xl.subVectors(e,Tp);let a=kx(Ap,t,Rr),l=xl.length()+a*o.radius,c=ny(o),u=Math.max(1,Math.min(ty,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Uh.set(Rr.x,Rr.y,Rr.z).normalize(),Vx.setFromAxisAngle(Uh,f),xl.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(xl),s.quaternion.premultiply(Vx).normalize(),wl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(xl.subVectors(s.position,Tp).divideScalar(h).clampLength(0,23),.52);let p=kx(Ap,s.quaternion,Rr);Uh.set(Rr.x,Rr.y,Rr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Uh,.52)}function Ip(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Fn.copy(n.mesh.quaternion).invert(),Fo.copy(e).applyQuaternion(Fn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Fo));return t}var Do=new M,Vh=new M,KA=new M,Ep=new M,Io={},Lo={};function Gx(n,e,t,i){let{mesh:r,shape:s}=n,o=Ip(n,KA.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Do),i.minV=i.maxV=r.position.dot(Vh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Fo)<o-.0015)continue;Ep.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Ep.dot(Do),c=Ep.dot(Vh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function Qx(n,e,t,i){Math.abs(t.y)<.8?Do.set(-t.z,0,t.x).normalize():Do.set(t.y,-t.x,0).normalize(),Vh.crossVectors(t,Do),Gx(n,t,-1,Io),Gx(e,t,1,Lo);let r=(Math.max(Io.minU,Lo.minU)+Math.min(Io.maxU,Lo.maxU))*.5,s=(Math.max(Io.minV,Lo.minV)+Math.min(Io.maxV,Lo.maxV))*.5;i.copy(t).multiplyScalar((Io.plane+Lo.plane)*.5).addScaledVector(Do,r).addScaledVector(Vh,s)}var Hx=new M;function kh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Hx.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Hx)}}function Wx(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function Kx(n){return!n.owner&&!n.frozen}var gs=new M,xs=new M,yl=new M,qx=new M,Lp=new M,Dp=new M,eE=new M;function Fh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function ey(n,e,t,i){let{mesh:r,shape:s}=n.body;return Fn.copy(r.quaternion).invert(),Lp.crossVectors(e,t),i.copy(Lp).applyQuaternion(Fn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Nh(n,e,t){return n?.inverseMass?(ey(n,e,t,Dp),n.inverseMass+Lp.dot(Dp)):0}function Bh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(ey(n,e,t,Dp),i))}function Cp(n){return n.friction??n.spec?.friction??.78}function Xx(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Cp(s)*Cp(o)):Math.min(Cp(s),t.friction??.78);gs.subVectors(bl,s.mesh.position),o&&xs.subVectors(bl,o.mesh.position),Fh(n,gs,yl).sub(Fh(e,xs,qx));let l=yl.dot(rt),c=!1;if(l<-1e-5){let d=l<-.8?De.clamp(r*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(Nh(n,gs,rt)+Nh(e,xs,rt));Bh(n,gs,rt,f),Bh(e,xs,rt,-f),Fh(n,gs,yl).sub(Fh(e,xs,qx)),tr.copy(yl).addScaledVector(rt,-yl.dot(rt));let h=tr.length();if(h>1e-5&&a>0){tr.divideScalar(h);let p=Math.min(f*a,h/(Nh(n,gs,tr)+Nh(e,xs,tr)));Bh(n,gs,tr,-p),Bh(e,xs,tr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/d),kh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/d),kh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function tE(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var ty=96,nE=5;function ny(n){return Math.max(.008,n.thickness*.35)}var Ml={substeps:0,active:0,free:0,sleeping:0};function Yx(n,e,t,i){n.velocity.y-=t*e*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(eE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function iE(n,e,t){let i=new tn().setFromCenterAndSize(n.mesh.position,new M),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*rE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function rE(n){return n.sweepGravity??1}function iy(n,e,t,i,r,s){if(Object.assign(Ml,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:Gh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,iE(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=Kx(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),m=l.some(({box:S,bounds:_})=>Wx(x,S,_)),g=c.some(S=>S!==h&&S.collidable!==!1&&x.intersectsBox(u.get(S)));if(p&&!m&&!g){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let S=Math.min(h.angular.length(),30),_=h.velocity.length()+S*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(_*t/ny(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new tn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};kh(y),o.push(y)}for(let h of a)Yx(h,t,i,s);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(ty,d):1,Object.assign(Ml,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(Yx(x,f,i,s),kh(p))}for(let p=0;p<nE;p++){let x=!1;for(let m of o)if(m.inverseMass)for(let{box:g,bounds:y}of l){if(!Wx(m.bounds,g,y))continue;let S=Fp(m.body,g,rt,bl);S>0&&(x=Xx(m,null,g,S,r)||x)}for(let m of o)m.sweepStart=m.bounds.min.x,m.sweepEnd=m.bounds.max.x;o.sort((m,g)=>m.sweepStart-g.sweepStart);for(let m=0;m<o.length;m++){let g=o[m];for(let y=m+1;y<o.length;y++){let S=o[y];if(S.sweepStart>g.sweepEnd)break;if(!g.inverseMass&&!S.inverseMass||g.body.sleeping&&S.body.sleeping&&g.groundY>.9&&S.groundY>.9||!g.bounds.intersectsBox(S.bounds))continue;let _=Wh(g.body,S.body,rt);_<=0||(Qx(g.body,S.body,rt,bl),x=Xx(g,S,null,_,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&tE(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,m=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=m?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):m||(p.sleeping=!1),p.sleeping&&Ml.sleeping++}}function sE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Rp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function ry(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Rp.mesh.position=n,Rp.shape.sphereRadius=e,Wh(Rp,t,i))}function sy(n,e,t,i,r){let s=ry(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Kx(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Yt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),oy=Yt(-24,24,-51,7),ay=34521,Bo={x:0,y:0,z:3},Pr={x:.05,y:1.16,z:5.9},No={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Yt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Yt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Yt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Yt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Yt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Yt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Yt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Yt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Zone libre",color:"#a4c99c",bounds:Yt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Yt(9,23,-48,-37),sign:[16,-38.2]}},J3=[Yt(-9,-6,-51,7),Yt(6,9,-51,7),Yt(-24,24,-8,-5),Yt(-24,24,-27,-23),Yt(9,23,-37,-34)],ly=[{name:"Glace",bounds:No.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:No.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Yt(-9,9,-51,7)},{name:"Sol ouest",bounds:Yt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Yt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Yt(-24,-23,-51,7)},{name:"Sol est",bounds:Yt(9,23,-51,-48)},{name:"Sol est",bounds:Yt(9,23,-37,7)},{name:"Bordure est",bounds:Yt(23,24,-51,7)}],Tl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Oo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],cy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),qh={x:16,y:1.52,z:-21},Xh={x:-19.4,y:.68,z:-3.25},uy=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),hy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",qh.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var oE=[0,1,2,3,4,5,7,8,9,10];function dy(n){cy.forEach(({x:e,z:t},i)=>n(oE[i],new M(e,.8,t)))}function Yh(){let n=[["Cube",new Ke(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ut(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Za(.29),"#d8ae53",0,1],["Brique",new Ke(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Ke(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ut(.6,4),"#dbab58",.6,3.7],["Coco",new Ut(.124,1),"#956238",.124,.44]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:wi(t,r),material:new xt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:Ti(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of Ux()){let r=wi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Np=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere","spawn-coconut","spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ir=null;function aE(){let n=new Ue,e=new zt(.16,.25,3.15,9,12),t=e.attributes.position,i=[];for(let c=0;c<t.count;c++){let u=Math.round((t.getY(c)+1.575)/3.15*12),d=Math.floor((Math.atan2(t.getX(c),t.getZ(c))+Math.PI)*1.43);n.setHSL(.084+u*.002,.35,.35+u%3*.032+d%3*.018),i.push(n.r,n.g,n.b)}e.setAttribute("color",new Oe(i,3));let r=[],s=[],o=3.14;function a(c,u,d,f){r.push(...c,...u,...d),n.setHSL(.25+f*.043,.54,.28+f*.17);for(let h=0;h<3;h++)s.push(n.r,n.g,n.b)}for(let c=0;c<10;c++){let f=function(h,p){let x=h*d;return[Math.cos(u)*x-Math.sin(u)*p,o+Math.sin(h*Math.PI)*.38-h*h*.54+c%3*.055,Math.sin(u)*x+Math.cos(u)*p]},u=c*2.39996,d=1.35+c%4*.2;for(let h=0;h<7;h++){let p=h/7,x=(h+1)/7,m=.285*Math.sin(Math.PI*p)**.7,g=.285*Math.sin(Math.PI*x)**.7;for(let y of[-1,1]){let S=f(p,m*y),_=f(x,g*y);S[1]-=.065,_[1]-=.065,a(f(p,0),S,_,.31+h%4*.14),a(f(p,0),_,f(x,0),.47+c%3*.16)}}}let l=new Qe;return l.setAttribute("position",new Oe(r,3)),l.setAttribute("color",new Oe(s,3)),l.computeVertexNormals(),{trunk:{geometry:e,material:new Ft({color:16777215,vertexColors:!0,flatShading:!0})},fronds:{geometry:l,material:new Ft({vertexColors:!0,side:Ct,flatShading:!0})}}}function lE(){let n=()=>{let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="#182831",t.fillRect(0,0,256,64),t.textAlign="center",t.font="bold 28px system-ui",t.fillStyle="#fff0ce",t.fillText("CIBLE \xB7 0",128,42);let i=new Pn(e);return i.colorSpace=at,i};return{"target-ring-outer":{geometry:new Ot(.9,20),material:new Ft({color:"#e2ad5c",side:Ct})},"target-ring-middle":{geometry:new Ot(.58,20),material:new Ft({color:"#ca664b",side:Ct})},"target-ring-inner":{geometry:new Ot(.27,20),material:new Ft({color:"#f5e5bd",side:Ct})},"target-post":{geometry:new Ke(.14,1.5,.14),material:new Ft({color:"#485d5d",flatShading:!0})},"target-score":{geometry:new qt(1.4,.35),material:new mt({map:n(),side:Ct})}}}function fy(){if(Ir)return Ir;let n=Yh(),e=Np;Ir=new Map(n.map((i,r)=>[e[r],{geometry:i.geo,material:i.material,mass:i.mass,properties:i.properties??{}}]));let t=aE();Ir.set("palm-trunk",t.trunk),Ir.set("palm-fronds",t.fronds),Ir.set("chrome-sphere",{geometry:new Ut(.54,2),material:new xt({color:"#c8e6ed",metalness:1,roughness:.16})});for(let[i,r]of Object.entries(lE()))Ir.set(i,r);return Ir}function Zh(n){return typeof n=="string"&&fy().has(n)}function Bp(n){return fy().get(n)??null}var zp="gorilla-lab-models-v1",nr=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),cE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,uE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),my=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),hE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),dE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,fE=/^#[a-f\d]{6}$/i;function py(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Lr(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?De.clamp(n[r],t,i):e)}var Op=new Set(["box","sphere","capsule","convex"]);function pE(n){if(n?.mode==="box")return{mode:"box",center:Lr(n.center,0,-6,6),size:Lr(n.size,.5,.025,12)};let e=Math.round(De.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Op.has(n.shape)?n.shape:"box",center:Lr(n.center,0,-6,6),size:Lr(n.size,.5,.025,12),rotation:Lr(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Op.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function ys(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>nr.models||JSON.stringify(n).length>nr.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!dE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>nr.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:py(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...Zh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(hE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:pE(i?.hitbox),parts:i.parts.map((r,s)=>({name:py(r?.name,`Pi\xE8ce ${s+1}`),shape:r?.shape==="asset"&&Zh(r?.assetId)?"asset":Object.hasOwn(uE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&Zh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Rh(r?.profile)}:{},position:Lr(r?.position,0,-3,3),rotation:Lr(r?.rotation,0,-360,360),scale:Lr(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&fE.test(r.color)?r.color:"#51bdd2",surface:Object.hasOwn(my,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=nr.textureBytes&&cE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Vp(n){try{let e=(n??globalThis.localStorage)?.getItem(zp);if(e&&e.length<=nr.fileBytes)return ys(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function mE(n){switch(n){case"sphere":return new In(.5,20,12);case"cylinder":return new zt(.5,.5,1,20);case"cone":return new qi(.5,1,20);case"torus":return new hi(.365,.135,8,24);case"capsule":return new _r(.28,.44,6,16);case"diamond":return new ui(.5);default:return new Ke(1,1,1)}}var gy=Object.keys(my),zo=64,Al=4,xy=2,Ai;function gE(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function yy(){if(Ai)return Ai;let n=zo*Al,e=zo*xy,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/zo)*Al+Math.floor(r/zo),o=gE(gy[s],r%zo,i%zo),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ai=new yi(t,n,e),Ai.colorSpace=at,Ai.magFilter=un,Ai.minFilter=Ln,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}function vy(n){let e=n.shape==="asset"?Bp(n.assetId):null,t=n.shape==="custom"?Lx(n.profile):e?.geometry?.clone()??mE(n.shape),i=t.index?t.toNonIndexed():t;i!==t&&t.dispose(),i.attributes.uv||i.setAttribute("uv",new Oe(new Float32Array(i.attributes.position.count*2),2));let r=n.rotation.map(De.degToRad);i.scale(...n.scale),i.rotateX(r[0]),i.rotateY(r[1]),i.rotateZ(r[2]),i.translate(...n.position);let s=new Ue(n.color),o=i.attributes.position.count,a=new Float32Array(o*3),l=i.attributes.uv,c=gy.indexOf(n.surface),u=c%Al,d=Math.floor(c/Al),f=i.attributes.color;for(let h=0;h<o;h++)n.shape==="asset"&&f?(a[h*3]=f.getX(h)*s.r,a[h*3+1]=f.getY(h)*s.g,a[h*3+2]=f.getZ(h)*s.b):s.toArray(a,h*3),n.shape!=="asset"&&!n.texture&&l.setXY(h,(u+.05+l.getX(h)*.9)/Al,(d+.05+l.getY(h)*.9)/xy);return i.setAttribute("color",new ft(a,3)),i}function xE(n){let e=n?.shape==="asset"?Bp(n.assetId):null;if(e?.material){let i=e.material.clone();if(i.map&&(i.map=i.map.clone(),i.map.needsUpdate=!0),n.texture){i.map?.dispose();let r=new _i().load(n.texture);r.colorSpace=at,r.wrapS=r.wrapT=kn,i.map=r}return n.color&&n.color!=="#ffffff"&&i.color?.multiply(new Ue(n.color)),i.needsUpdate=!0,i}if(!n?.texture)return new xt({vertexColors:!0,map:yy(),roughness:.68});let t=new _i().load(n.texture);return t.colorSpace=at,t.wrapS=t.wrapT=kn,new xt({vertexColors:!0,map:t,roughness:.68})}function Dr(n){return n?.parts?.some(e=>e.texture||e.shape==="asset")?n.parts.map(xE):new xt({vertexColors:!0,map:yy(),roughness:.68})}function jh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ai&&e.map.dispose(),e.dispose()}}function Jh(n){let e=n.map(vy),t=Sh(e,n.some(i=>i.texture||i.shape==="asset"));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Vo(n){let e=Jh(n.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function kp(n){let e=new tn;for(let t of n.parts??[]){let i=vy(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function _y(n){let e=kp(n),t=e.getCenter(new M),i=e.getSize(new M),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":Op.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?De.clamp(r.precision,8,96):48,center:s?new M(...r.center):t,size:s?new M(...r.size):i,rotation:s?new M(...r.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function yE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function vE(n){let e=_y(n),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new In(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new _r(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&n.parts?.length){let i=Jh(n.parts),r=yE(i,e.precision);if(i.dispose(),r.length>=4)try{let s=new Ki(r),o=e.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return s.scale(1/o.x,1/o.y,1/o.z),s.computeVertexNormals(),s}catch{}}return new Ke(1,1,1)}function El(n,e=null){let t=_y(n),i=vE(n),r=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),s=e?new M(e.x,e.y,e.z):r.clone(),o=t.size.clone().multiply(s).divide(r),a=t.center.clone().sub(t.boundsCenter).multiply(s).divide(r);return i.scale(o.x,o.y,o.z),i.rotateX(De.degToRad(t.rotation.x)),i.rotateY(De.degToRad(t.rotation.y)),i.rotateZ(De.degToRad(t.rotation.z)),i.translate(a.x,a.y,a.z),i.computeBoundingBox(),i}function My(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Jh(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Dr(e),collisionGeo:El(e),mass:De.clamp(i.x*i.y*i.z*9,.18,12)}})}function by(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Jh(e.parts),i=t.boundingBox.getSize(new M),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new ze(t,Dr(e));s.castShadow=!0;let o=new Mt;return o.add(s),o}var Ty=Object.freeze([8,16,32,48,64,96,128]),Ay=16,Qh=24,Sy=new WeakMap,Ei=De.clamp,vs=De.lerp,Gp=n=>n*n*(3-2*n);function Qn(n,e,t,i){return Number.isFinite(n)?Ei(n,e,t):i}function wy(n){if(!n)return null;let e=ys({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var _E=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function ko(n={}){let e=Ty.includes(n?.detail)?n.detail:Ay,t=n?.heights;return{detail:e,seed:Math.round(Qn(n?.seed,0,2147483647,1)),amplitude:Qn(n?.amplitude,0,12,0),frequency:Qn(n?.frequency,.015,2,.12),octaves:Math.round(Qn(n?.octaves,1,5,3)),roughness:Qn(n?.roughness,.15,.95,.42),ridge:Qn(n?.ridge,0,1,0),edgeFade:Qn(n?.edgeFade,0,1,0),grass:Qn(n?.grass,0,1,0),shrub:Qn(n?.shrub,0,1,0),grassSize:Qn(n?.grassSize,.1,5,1),shrubSize:Qn(n?.shrubSize,.1,5,1),grassModel:wy(n?.grassModel),shrubModel:wy(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&_E.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Qn(i,-Qh,Qh,0)):null}}function Ey(n,e,t,i){let r=Ei(t,0,e),s=Ei(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Cy(n,e){let t=Ty.includes(e)?e:Ay;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Ey(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function ir(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function $h(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=Gp(n-i),o=Gp(e-r),a=vs(ir(i,r,t),ir(i+1,r,t),s),l=vs(ir(i,r+1,t),ir(i+1,r+1,t),s);return 2*vs(a,l,o)-1}function Cl(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=Sy.get(n),p=h&&h.w===e&&h.d===t&&h.detail===r&&h.seed===s&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let x=r+1,m=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let S=0;S<=r;S++)for(let _=0;_<=r;_++){let R=(_/r-.5)*e*a,P=(S/r-.5)*t*a,C=0,L=1,w=0;for(let F=0;F<l;F++){let N=$h(R*2**F,P*2**F,s+F*13);C+=L*vs(N,1-2*Math.abs(N),u),w+=L,L*=c}let b=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(_/r-.5))*2,(.5-Math.abs(S/r-.5))*2)),d*2):1,E=l===3&&c===.42&&u===0&&d===0;m[S*x+_]=E?o*(.62*$h(R,P,s)+.26*$h(R*2.03,P*2.03,s+13)+.12*$h(R*4.13,P*4.13,s+37)):o*C/w*b}let g=f?m.map((S,_)=>S+f[_]):m,y={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:m,surface:g};return Sy.set(n,y),y}function Hp(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Ey(o,i,(e/r+.5)*i,(t/s+.5)*i)}function ME(n,e,t){return n.y+Hp(Cl(n),e-n.x,t-n.z)}function bE(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function Ry(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=Cl(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=Ei(h,-c/2,c/2),m=Ei(p,-u/2,u/2);if((h-x)**2+(p-m)**2>=r**2)return!1;let g=(h/c+.5)*l,y=(p/u+.5)*l,S=c/l,_=u/l,R=Math.max(0,Math.ceil(g-r/S)),P=Math.min(l,Math.floor(g+r/S)),C=Math.max(0,Math.ceil(y-r/_)),L=Math.min(l,Math.floor(y+r/_)),w=Number.isFinite(o)?o-n.y:Hp(a,h,p),b=l+1,E=a.heights?.slice()??new Array(b**2).fill(0),F=!1,N=!1;function z(W,G,Y){F=!0;let B=G*b+W,se=E[B],ne;if(i==="raise"||i==="lower")ne=se+(i==="raise"?1:-1)*s*Y;else{let he=i==="flatten"?w:bE(a,W,G);ne=vs(d[B],he,Math.min(1,s)*Y)-f[B]}ne=Ei(ne,-Qh,Qh),!(Math.abs(ne-se)<1e-7)&&(E[B]=ne,N=!0)}for(let W=C;W<=L;W++)for(let G=R;G<=P;G++){let Y=Math.hypot((G-g)*S,(W-y)*_)/r;Y<1&&z(G,W,Gp(1-Y))}if(!F){let W=Ei(g,0,l),G=Ei(y,0,l),Y=Math.min(l-1,Math.floor(W)),B=Math.min(l-1,Math.floor(G)),se=W-Y,ne=G-B,he=se+ne<=1,de=he?1-se-ne:se+ne-1,Ie=he?se:1-ne,Ee=he?ne:1-se;if(de>=Math.max(Ie,Ee)){let Ce=+!he;z(Y+Ce,B+Ce,1)}else Ie>=Ee?z(Y+1,B,1):z(Y,B+1,1)}return N&&(n.terrain.heights=E),N}function Py(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=new Uint16Array(r**2*6),c=0;for(let d=0;d<=r;d++)for(let f=0;f<=r;f++){let h=d*s+f;o[3*h]=(f/r-.5)*e,o[3*h+2]=(d/r-.5)*t,a[2*h]=f/r*e/2.6,a[2*h+1]=(1-d/r)*t/2.6,d<r&&f<r&&(l.set([h,h+s,h+1,h+s+1,h+1,h+s],c),c+=6)}let u=new Qe;return u.setAttribute("position",new ft(o,3).setUsage(Sn)),u.setAttribute("uv",new ft(a,2)),u.setIndex(new ft(l,1)),SE(u,n),u}function SE(n,e){let{surface:t}=Cl(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function wE(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=Cl(n),l=Ei(((e-n.x)/s+.5)*r,0,r),c=Ei(((t-n.z)/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],m=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-m*r/o).normalize()}function Iy(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>ME(n,t,i),normalAt:(t,i,r)=>wE(n,t,i,r),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function TE(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new Qe;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function AE(){return new Ut(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var EE=[{name:"grass",geometry:TE,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:AE,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Ly(n){let e=new Mt;for(let{name:t,geometry:i,perMetre:r,max:s,salt:o,color:a}of EE){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(s,n.w*n.d*r)*l)),u=n.terrain[t+"Model"],d=n.terrain[t+"Size"]??1,f,h;if(u){let m=t==="grass"?.42:.85;f=Vo(u),f.scale(m*d,m*d,m*d),f.translate(0,m*d/2,0),h=Dr(u)}else if(f=i(),f.scale(d,d,d),h=new Ft({color:a,side:t==="grass"?Ct:li,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let m=new _i().load(n.terrain.grassTexture);m.colorSpace=at,h.map=m,h.color.set("#ffffff"),h.userData.ownTexture=!0}let p=new La(f,h,c);p.name=t,p.instanceMatrix.setUsage(Sn),p.userData.salt=o,p.receiveShadow=!0;let x=new Ue;for(let m=0;m<c;m++){let g=vs(.68,1.2,ir(m,o,n.terrain.seed+4));p.setColorAt(m,x.setRGB(g,g,g))}e.add(p)}return CE(e,n),e}function CE(n,e){let t=Cl(e),i=new Wt;for(let r of n.children){let{salt:s}=r.userData,{seed:o}=e.terrain;for(let a=0;a<r.count;a++){let l=(ir(a,s,o)-.5)*.96*e.w,c=(ir(a,s,o+1)-.5)*.96*e.d;i.position.set(l,Hp(t,l,c),c),i.rotation.y=ir(a,s,o+2)*2*Math.PI,i.scale.setScalar(vs(.58,1.34,ir(a,s,o+3))),i.updateMatrix(),r.setMatrixAt(a,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Dy(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),jh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Kh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Uy=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Fy(n,e=Uy[n]){n=Math.max(0,Math.min(Kh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Uy[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Ny({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var RE=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function By(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){RE.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Oy(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var zy=.065,PE=.08,ed=.035,Wp=.003,td=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(Qi).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(Wp,r*t*t);let y=this.sweep(u,this.from,this.to);if(m){let w=this.correction.subVectors(x,d.anchor),b=w.dot(f)<=ed&&d.anchor.distanceToSquared(e)<=(c+ed)**2&&w.lengthSq()<=Math.max(.12,c*.5)**2;b&&(!y||y===p&&this.hitNormal.dot(f)>.7)?(y=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!b&&y===p&&w.dot(f)>ed&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let S=y.friction??.8,_=Math.min(1,Math.max(0,S*(.75+s.grip*.09))),R=Math.max(0,1-Math.abs(f.y)/.28),P=Math.min(.97,Math.max(0,1-_+R*.24+(s.slide-3)*.035)),C=this.correction.subVectors(d.anchor,x);if(C.addScaledVector(f,-C.dot(f)),this.slideTarget.copy(C).multiplyScalar(-P),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*P*Math.max(R,Math.max(0,1-2*_)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,Wp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-Wp*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(P>.5&&C.lengthSq()>ed**2)continue}C.subVectors(d.anchor,x),m&&C.dot(f)<0&&C.addScaledVector(f,-C.dot(f)),l.add(C);let L=y.objectBody;if(L){let w=u.inverseRotation.copy(L.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(L.mesh.position).applyQuaternion(w),u.localNormal.copy(f).applyQuaternion(w)}if(d.surface=y,d.groundContact=f.y>.55,this.contacts++,u.tracked){let w=this.handMotion.subVectors(u.previousTarget,x),b=w.dot(f);w.multiplyScalar(1-P).addScaledVector(f,Math.max(0,b)-b*(1-P)),this.intent.add(w)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),x.copy(m).add(g),p.surface&&(x.copy(p.anchor).add(g),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=zy;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/zy),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(x);g<0&&this.average.addScaledVector(x,-g)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=PE,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function IE(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function qp(n,e=.16,t=26){let i=IE(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function Vy(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,qp(n,i,r)&&(n.hapticCooldown=.08))}function ky({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new M(0,1,0),a=new qe,l=0,c=new Zi,u=[],d=new Map,f=dx(n,{onShot:(g,y)=>s.sendShot(g,y),impact(g,y,S,_){c.set(g,y),c.far=S;let R=c.intersectObjects(u,!1)[0];if(!R)return null;let P=d.get(R.object);return _&&P&&!P.owner&&!P.frozen&&P.velocity.addScaledVector(y,Math.min(4,2.6/P.mass)),R.distance}}),h={position:new M,quaternion:new qe,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function m({frame:g,space:y,inVR:S,enabled:_,remoteWorld:R,dt:P,yaw:C,drop:L,rightHand:w,flatFiring:b}){let E=null,F=!1;if(_)if(S){let N=[...g.session.inputSources].find(W=>W.handedness==="right"),z=N&&g.getPose(N.targetRaySpace,y);if(z){let{position:W,orientation:G}=z.transform;E=h,E.position.set(W.x,W.y-L,W.z).applyAxisAngle(o,C).add(e.position),E.modelPosition.copy(w.valid?w.mesh.position:E.position),E.quaternion.set(G.x,G.y,G.z,G.w).premultiply(a.setFromAxisAngle(o,C)),F=!!N.gamepad?.buttons[0]?.pressed}}else E=h,t.getWorldPosition(E.position),t.getWorldQuaternion(E.quaternion),E.modelPosition.set(.16,-.17,-.43).applyQuaternion(E.quaternion).add(E.position),F=b;if(x=E?p:null,u.length=0,d.clear(),E||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(R)s.forEachReplica(N=>u.push(N));else for(let N of r)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),d.set(N.mesh,N))}f.update({dt:P,aim:E,firing:F}),F?l=1.3:l=Math.max(0,l-P)}return{update:m,receiveShot({position:g,quaternion:y},S){f.replay(g,new qe().copy(y),S),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function Gy(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Hy(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var _s=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],nd=["Naturel","Cellulo","Affiche","R\xE9tro"],id={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var Wy=new WeakMap;function Xp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,Wy.set(n,e),n}function Rl(n){if(Array.isArray(n))return n.map(Rl);let e=n.clone(),t=Wy.get(n);return t?Xp(e,t):e}function LE(n){let t=new In(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Ut(.225,0),r=new ja({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Xp(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function DE(n){let e=new Ke(.37,.37,.37),t=new xt({color:16777215,roughness:.4});return Xp(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function qy(){let n={value:0};return{props:[LE(n),DE(n)],animate(e){n.value=e}}}var Xy=new M(0,1,0),Yy=new M(0,0,1),UE={left:new qe().setFromAxisAngle(Yy,Math.PI/2),right:new qe().setFromAxisAngle(Yy,-Math.PI/2)},FE=new qe,NE=new M;function Zy(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(Xy,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(FE.setFromAxisAngle(Xy,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(UE[n.side]),n.target.copy(n.gripPosition).sub(NE.copy(Qi).applyQuaternion(n.mesh.quaternion))}function jy(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let y=0;y<g.length;y++)g[y]=(Math.random()*2-1)*(1-y/g.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),m=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(De.clamp(f,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(m).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:m,volume:g,enabled:y}){if(h){p.forEach((S,_)=>{a[_]=Math.max(0,a[_]-f);let R=S.valid&&S.groundContact;R&&!o[_]&&!a[_]&&y&&(c(g),a[_]=.11),o[_]=R});return}r=Math.max(0,r-f),t=x?t+m:0,x&&y&&r===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function Jy(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new Qe;r.setAttribute("position",new ft(t,3).setUsage(Sn)),r.setAttribute("color",new ft(i,3).setUsage(Sn));let s=new is(r,new vi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Yi(new In(1,12,8)).attributes.position,a=new Yi(new ui(1).scale(...gh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new M,f=new WeakMap,h=new M(1,1,1),p=new qe,x=new M,m=new M,g=new M,y=new M,S=new M,_=new M,R=new M,P=new M(0,1,0),C={grip:new Ue("#61f6ff"),palm:new Ue("#71ff87"),solid:new Ue("#ffe060"),proxy:new Ue("#ff76df"),movement:new Ue("#fff0af"),normal:new Ue("#ff994e"),velocity:new Ue("#80aaff"),force:new Ue("#ff5454"),rig:new Ue("#cec4ff")},L=0;function w(z,W,G){if(L+2>u){c.truncated=!0;return}z.toArray(t,L*3),G.toArray(i,L++*3),W.toArray(t,L*3),G.toArray(i,L++*3)}function b(z,W,G,Y,B){for(let se=0;se<z.count;se+=2){if(L+2>u){c.truncated=!0;break}x.fromBufferAttribute(z,se).multiply(Y).applyQuaternion(G).add(W),m.fromBufferAttribute(z,se+1).multiply(Y).applyQuaternion(G).add(W),w(x,m,B)}}function E(z,W,G,Y){if(z.sphereRadius){b(o,W,G,y.setScalar(z.sphereRadius),Y);return}let B=l.get(z);if(!B){let se=new Set,ne=[];for(let he of z.faces)for(let[de,Ie]of[[he.a,he.b],[he.b,he.c],[he.c,he.a]]){let Ee=[de.toArray().join(","),Ie.toArray().join(",")].sort().join("|");se.has(Ee)||(se.add(Ee),ne.push(...de.toArray(),...Ie.toArray()))}B=new Oe(ne,3),l.set(z,B)}b(B,W,G,h,Y)}function F(z,W,G,Y){if(W.lengthSq()<1e-8)return;S.copy(z).addScaledVector(W,G),_.copy(W).normalize(),R.crossVectors(_,P),R.lengthSq()<1e-8?R.set(1,0,0):R.normalize();let B=Math.min(.09,z.distanceTo(S)*.3);y.copy(S).addScaledVector(_,-B),w(z,S,Y),w(S,x.copy(y).addScaledVector(R,B*.5),Y),w(S,m.copy(y).addScaledVector(R,-B*.5),Y)}function N({settings:z,boxes:W,bodies:G,hands:Y,locomotion:B,velocity:se,head:ne,body:he,neck:de,proxies:Ie,gravity:Ee,appliedMove:Ce,playerActive:ie,inVR:re,viewQuaternion:xe}){L=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(z.debugBudget??5)*2e3);let Pe=(z.debugRange??6)*5,be=(O,pe=0)=>!O||O.distanceToSquared(ne)<=(Pe+pe)**2;if(s.visible=z.debugPalm||z.debugHitboxes||z.debugInvisible||z.debugForces||z.debugBody||z.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(z.debugHitboxes||z.debugInvisible||z.debugMesh){if(z.debugScene!==!1)for(let O of W){if(L+2>u){c.truncated=!0;break}let pe=O.shape?.radius??O.half?.length()??Math.hypot(O.xMax-O.xMin||0,O.zMax-O.zMin||0);if(!be(O.position??O.mesh?.position,pe))continue;c.boxes++;let T=O.mesh?.isObject3D&&O.mesh.visible;if(z.debugMesh&&T&&O.mesh.geometry){let V=O.mesh.geometry,J=V.attributes.position.version,Z=f.get(V);Z?.version!==J&&(Z?.edges.dispose(),Z={version:J,edges:new Yi(V)},f.set(V,Z)),b(Z.edges.attributes.position,O.mesh.position,O.mesh.quaternion,O.mesh.scale,C.grip)}if(!(T?!z.debugHitboxes:!z.debugInvisible)){if(O.shape)E(O.shape,O.position,O.quaternion,T?C.solid:C.proxy);else if(O.heightfield&&O.mesh?.geometry){let V=O.mesh.geometry,J=f.get(V),Z=V.attributes.position.version;J?.version!==Z&&(J?.edges.dispose(),J={version:Z,edges:new Yi(V)},f.set(V,J)),b(J.edges.attributes.position,O.mesh.position,O.mesh.quaternion,h,C.solid)}}}if(z.debugObjects!==!1)for(let O of G){if(L+2>u){c.truncated=!0;break}if(!(!O.mesh.visible||!be(O.mesh.position,O.shape.radius))&&(c.bodies++,z.debugHitboxes&&O.collidable!==!1&&O.blocksPlayer!==!1&&E(O.shape,O.mesh.position,O.mesh.quaternion,O.owner?C.proxy:C.solid),z.debugMesh&&O.mesh.geometry)){let pe=O.mesh.geometry,T=pe.attributes.position.version,V=f.get(pe);V?.version!==T&&(V?.edges.dispose(),V={version:T,edges:new Yi(pe)},f.set(pe,V)),b(V.edges.attributes.position,O.mesh.position,O.mesh.quaternion,O.mesh.scale,C.grip)}}}if(ie){if(z.debugBody){if(z.collisions)for(let{position:O,radius:pe}of Ie)b(o,O,p,y.setScalar(pe),C.rig);w(ne,de,C.rig),w(de,he,C.rig)}if(z.debugForces&&(d.set(0,-.22,-.5),xe&&d.applyQuaternion(xe),d.add(ne),F(d,se,.13,C.velocity),F(d,P,-Ee*.038,C.force),F(d,Ce,5,C.movement),z.debugObjects!==!1)){for(let O of G)if(!(!O.mesh.visible||!O.velocity||!be(O.mesh.position,O.radius))&&(F(O.mesh.position,O.velocity,.13,C.velocity),L+2>u)){c.truncated=!0;break}}if(re&&(z.debugPalm||z.debugForces))for(let O of B.hands){let{hand:pe,normal:T,offset:V}=O;if(pe.valid){if(z.debugPalm){b(o,pe.gripPosition,p,y.setScalar(.014),C.grip);for(let J=0;J<3;J++)_.set(0,0,0).setComponent(J,.075).applyQuaternion(pe.controllerRotation),F(pe.gripPosition,_,1,C.grip);S.copy(pe.mesh.position).add(V),b(a,S,pe.mesh.quaternion,h,C.palm),w(pe.gripPosition,S,C.grip),pe.hasSupport&&(S.copy(Qi).applyQuaternion(pe.mesh.quaternion).add(pe.mesh.position),b(a,S,pe.mesh.quaternion,h,C.grip))}z.debugForces&&pe.surface&&F(pe.anchor,T,.25,C.normal)}}}c.vertices=L,c.segments=L/2,r.setDrawRange(0,L);for(let O of["position","color"]){let pe=r.attributes[O];pe.clearUpdateRanges(),L&&pe.addUpdateRange(0,L*3),pe.needsUpdate=!!L}}return{update:N,stats:c}}var Yp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Ky=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Zp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},rd=8e6,Pl=512,Ci=1024,$y=512,Qt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Qy=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Il(n){if(typeof n=="string"){if(n.length>rd)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Pl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Pl+" pi\xE8ces.");let e=n.spawn??{},t=n.arenaBase===!0?n.pieces.filter(i=>i?.model?.assetId!=="palm-tree"&&i?.sceneryId!=="palm-tree"&&!(i?.model?.assetId==="spawn-coconut"&&/^Coco [1-5]$/.test(i.name))):n.pieces;if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait du cocotier.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Qy(n.name,56,"Ma map"),worldSize:Qt(n.worldSize,24,2048,240),spawn:{x:Qt(e.x,-Ci,Ci,0),y:Qt(e.y,-256,256,.06),z:Qt(e.z,-Ci,Ci,3),yaw:Qt(e.yaw,-360,360,0)},pieces:t.map((i,r)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let s=i.terrain&&typeof i.terrain=="object"?ko(i.terrain):null,o=i.model?ys({version:1,models:[i.model]}).models[0]:null;if(o&&!o.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Qy(i.name,36,"Pi\xE8ce "+(r+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Qt(i.x,-Ci,Ci,0),y:Qt(i.y,-256,256,0),z:Qt(i.z,-Ci,Ci,0),w:Qt(i.w,.05,$y,3),h:Qt(i.h,.05,256,.5),d:Qt(i.d,.05,$y,3),pitch:s?0:Qt(i.pitch,-180,180,0),yaw:s?0:Qt(i.yaw,-360,360,0),roll:s?0:Qt(i.roll,-180,180,0),...s?{terrain:s}:{},...o?{model:o}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(i.primitive)?i.primitive:"box",uvScale:Qt(i.uvScale,.05,100,1),uvOffsetX:Qt(i.uvOffsetX,-100,100,0),uvOffsetY:Qt(i.uvOffsetY,-100,100,0),uvRotation:Qt(i.uvRotation,-360,360,0),material:Math.round(Qt(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Qt(i.grip,0,1.5,.8),gravity:Qt(i.gravity,.05,2.5,1),bounce:Qt(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function ev(n){return Il({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Bo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new nn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Ll(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function tv(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new nn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ci||Math.abs(d)>Ci||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var Dl="gorilla-lab-custom-map-v1";function nv(n){let e=new Blob([JSON.stringify(Il(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var BE=new Set(["lab-hill","range-target","chrome-sphere","lab-mirror"]);function jp(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&BE.has(e)):!1:!0}function sd(n,e,t){let i=new Ke(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function iv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function rv(n){switch(n){case"sphere":return new In(.5,24,16);case"cylinder":return new zt(.5,.5,1,24);case"cone":return new qi(.5,1,24);case"torus":return new hi(.34,.14,12,32);case"capsule":return new _r(.32,.36,8,16);default:return new Ke(1,1,1)}}function sv({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(O=>O.half&&O.mesh?.isObject3D).map(O=>O.mesh)),c=new Mt;n.add(c);let u=[],d=[],f=[],h=new _i,p=new Map,x=0,m=null,g="",y=-1,S=-1,_="",R="",P=new Ke(1,1,1),C=new ze(P,new mt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));C.visible=!1,n.add(C);let L=new Zi,w=new M,b=new M,E=document.querySelector("#map-note");function F(O){_=O,E.textContent=O}function N(){f.length>=20&&f.shift(),f.push(JSON.stringify(m))}function z(O,pe){let T=p.get(O);if(!T){T={materials:new Set,texture:null,failed:!1},p.set(O,T);let V=Z=>{if(!(p.get(O)!==T||T.failed)){T.failed=!0;for(let D of T.materials)D.map=null,D.needsUpdate=!0;T.texture?.dispose(),Z&&F(Z)}},J=h.load(O,Z=>{(Z.image.width>2048||Z.image.height>2048)&&V("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>V());T.texture=J,J.colorSpace=at,J.wrapS=J.wrapT=kn}return T.materials.add(pe),pe.map=T.failed?null:T.texture,T}function W(){for(let[O,pe]of p)pe.materials.size||(p.delete(O),pe.failed||pe.texture.dispose())}function G(O){let pe=e.mapMaterial(O.material,s());if(!O.texture&&O.color==="#ffffff")return{material:pe,custom:!1};let T=pe.clone();return T.onBeforeCompile=pe.onBeforeCompile,T.customProgramCacheKey=pe.customProgramCacheKey,T.color.multiply(new Ue(O.color)),{material:T,custom:!0,ownTexture:O.texture?z(O.texture,T):null}}function Y(O){c.remove(O.mesh),O.mesh.geometry.dispose(),O.vegetation&&Dy(O.vegetation),O.custom&&(O.ownTexture?.materials.delete(O.mesh.material),O.model?jh(O.mesh.material):O.mesh.material.dispose())}function B(O,pe){if(O.model){let ue=Vo(O.model);ue.scale(O.w,O.h,O.d);let ce=Dr(O.model),A=new ze(ue,ce);A.position.set(O.x,O.y,O.z),A.rotation.set(De.degToRad(O.pitch),De.degToRad(O.yaw),De.degToRad(O.roll??0),"YXZ"),A.castShadow=A.receiveShadow=!0,A.userData.mapIndex=pe,O.model.kind==="prop"&&(A.visible=!1),c.add(A);let v=new M(O.w,O.h,O.d),U=El(O.model,v);U.computeBoundingBox();let H=U.boundingBox,te=new M(Math.max(Math.abs(H.min.x),Math.abs(H.max.x)),Math.max(Math.abs(H.min.y),Math.abs(H.max.y)),Math.max(Math.abs(H.min.z),Math.abs(H.max.z))),$=wi(U);U.dispose();let me={mesh:A,position:A.position,quaternion:A.quaternion,half:te,min:te.clone().negate(),shape:$,radius:$.radius,friction:O.grip,gravity:O.gravity,bounce:O.bounce,zone:!0,type:O.material};return{mesh:A,collider:me,custom:!0,model:!0}}let{material:T,custom:V,ownTexture:J}=G(O),Z=O.terrain?Py(O):O.primitive&&O.primitive!=="box"?rv(O.primitive).scale(O.w,O.h,O.d):sd(O.w,O.h,O.d),D=new ze(iv(Z,O),T);D.position.set(O.x,O.y,O.z),D.rotation.set(De.degToRad(O.pitch),De.degToRad(O.yaw),De.degToRad(O.roll??0),"YXZ"),D.castShadow=D.receiveShadow=!0,D.userData.mapIndex=pe,O.sceneryId==="lab-mirror"&&(D.userData.mirrorSize={w:O.w,h:O.h,d:O.d}),c.add(D);let j=new M(O.w/2,O.h/2,O.d/2),X={mesh:D,position:D.position,quaternion:D.quaternion,half:j,min:j.clone().negate(),shape:Ti(j),friction:O.grip,gravity:O.gravity,bounce:O.bounce,zone:!0,type:O.material};if(!O.terrain)return{mesh:D,collider:X,custom:V,ownTexture:J};let Q=Ly(O);return Q&&D.add(Q),{mesh:D,collider:Iy(O,D),custom:V,ownTexture:J,vegetation:Q}}function se(){for(let O of u){let pe=m?.pieces[O.mesh.userData.mapIndex];if(!pe||O.ownTexture||O.model)continue;let T=e.mapMaterial(pe.material,s());O.custom?O.mesh.material.map!==T.map&&(O.mesh.material.map=T.map,O.mesh.material.needsUpdate=!0):O.mesh.material=T}}function ne(){for(let V of u)Y(V);u.length=0,d.length=0;let O=m?.pieces??[];g=m?"custom-"+ps(JSON.stringify(m)):"";let pe=new Set(O.map(V=>V.model?.assetId).filter(Boolean)),T=new Set(O.map(V=>V.sceneryId).filter(Boolean));o.forEach(V=>{let J=V.userData?.editorAssetId;V.visible=!m||!l.has(V)&&jp(m,J,pe,T)});for(let V=0;V<O.length;V++)u.push(B(O[V],V));for(let V of u)V.mesh.userData.mirrorSize&&d.push(V);if(W(),m){let V=a.filter(Z=>!l.has(Z.mesh)&&jp(m,Z.editorAssetId,pe,T)),J=u.filter((Z,D)=>O[D].solid&&O[D].model?.kind!=="prop"&&O[D].model?.properties?.collidable!==!1).map(Z=>Z.collider);e.boxes.splice(0,e.boxes.length,...V,...J)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),m)try{localStorage.setItem(Dl,JSON.stringify(m))}catch{}else try{localStorage.removeItem(Dl)}catch{}}function he(O){let pe=Il(O);x++,f.length=0,m=pe,y=S=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ne(),i(m.spawn.yaw),F("Map : "+m.name+" \xB7 "+m.pieces.length+" pi\xE8ces")}function de(){x++,m=null,f.length=0,y=S=-1,t.set(0,0,3),ne(),i(0),F("Ar\xE8ne int\xE9gr\xE9e")}function Ie(){he({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Ll({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function Ee(){if(!f.length)return F("Rien \xE0 annuler.");m=Il(f.pop()),y=S=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ne(),F("Derni\xE8re modification annul\xE9e.")}function Ce(){m?nv(m):F("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function ie(O,pe,T,V){m&&(N(),m.spawn={x:O,y:pe,z:T,yaw:De.radToDeg(V)},t.set(O,pe,T),ne(),F("Point de d\xE9part m\xE9moris\xE9."))}function re(O,pe,T,{mode:V,piece:J,head:Z,feet:D}){L.set(O,pe),L.far=12;let j=u.map(H=>H.mesh);V===1&&m?.arenaBase&&!m.editableArena&&j.push(...a.filter(H=>H.heightfield&&!m.pieces.some(te=>te.sceneryId===H.editorAssetId)).map(H=>H.mesh));let X=L.intersectObjects(j,!1),Q=V>=5?X.find(H=>m?.pieces[H.object.userData.mapIndex]?.terrain):X[0];if(C.visible=!1,!m)return;if(V>=5){let H=Q?.object.userData.mapIndex,te=m.pieces[H];if(!te?.terrain||!T)return;if(N(),V===9){let $=J.terrain?.detail??te.terrain.detail,me=Cy(te.terrain,$);te.terrain=ko({...me,...J.terrain,heights:me.heights})}else{let $={mode:["raise","lower","smooth","flatten"][V-5],radius:J.brushRadius,strength:J.brushStrength,target:te.y};Ry(te,Q.point.x,Q.point.z,$)}ne(),F("Relief modifi\xE9.");return}if(V===2||V===3||V===4){if(!Q)return;let H=Q.object.userData.mapIndex,te=m.pieces[H];if(T&&V===2&&(y=H,S=H,F("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),T&&V===3){if(m.pieces.length===1)return F("Garde au moins une pi\xE8ce dans la map.");N(),m.pieces.splice(H,1),y=S=-1,ne(),F("Pi\xE8ce supprim\xE9e.")}T&&V===4&&(N(),Object.assign(m.pieces[H],{material:J.material,grip:J.grip,gravity:J.gravity,bounce:J.bounce,solid:J.solid,texture:J.texture}),ne(),F("Surface modifi\xE9e.")),Q&&(C.position.copy(Q.object.position),C.rotation.copy(Q.object.rotation),C.scale.set(te.w,te.h,te.d).multiplyScalar(1.006),C.visible=!0,C.material.color.set(V===3?"#ff8271":"#ffe2a2"));return}if(!Q)return;let ue=S>=0?m.pieces[S]:J;if(Q.object.userData.mapIndex===S)return;w.copy(Q.face.normal).transformDirection(Q.object.matrixWorld);let ce=ue.terrain?{...ue,x:Math.round(Q.point.x*2)/2,y:Q.point.y,z:Math.round(Q.point.z*2)/2,pitch:0,yaw:0}:tv(Q.point,w,ue);if(!ce)return;C.position.set(ce.x,ce.y,ce.z),C.rotation.set(De.degToRad(ce.pitch),De.degToRad(ce.yaw),De.degToRad(ce.roll??0),"YXZ"),C.scale.set(ce.w,ce.h,ce.d),C.updateMatrixWorld(!0),C.visible=!0;let A=new tn().setFromObject(C),v=new tn(new M(Z.x-.26,D+.01,Z.z-.26),new M(Z.x+.26,Z.y+.19,Z.z+.26)),U=ce.solid&&A.intersectsBox(v);if(C.material.color.set(U?"#fd7763":"#8be4b9"),T){if(U)return F("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(S<0&&m.pieces.length>=Pl)return F("Limite de "+Pl+" pi\xE8ces atteinte.");N(),S>=0?(m.pieces[S]=ce,S=-1):m.pieces.push(ce),ne(),F("Pi\xE8ce pos\xE9e \xB7 "+m.pieces.length+" pi\xE8ces")}}let xe=document.querySelector("#map-file"),Pe=document.querySelector("#map-url");xe.onchange=async()=>{let O=xe.files[0];if(!O)return;let pe=++x;xe.value="";try{if(O.size>rd)throw Error("Map trop lourde.");let T=await O.text();pe===x&&he(T)}catch(T){pe===x&&F(T.message)}};async function be(O){let pe=++x;try{let T=new URL(O,location.href);if(!["http:","https:"].includes(T.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let V=await fetch(T,{credentials:"omit"});if(pe!==x)return;if(!V.ok)throw Error("URL de map inaccessible ("+V.status+").");if(Number(V.headers.get("content-length"))>rd)throw Error("Map trop lourde.");let Z=await V.text();pe===x&&he(Z)}catch(T){pe===x&&F(T.message)}}return document.querySelector("#map-load-url").onclick=()=>be(Pe.value),document.querySelector("#map-export").onclick=Ce,document.querySelector("#map-reset").onclick=de,{placedModels:()=>m?.pieces.filter(O=>O.model?.kind==="prop")??[],modelPieces:()=>m?.pieces.filter(O=>!O.terrain&&O.name!=="Sol")??[],refreshMaterials:se,load:he,loadURL:be,reset:de,blank:Ie,undo:Ee,save:Ce,edit:re,recenter:ie,inform:F,mirrors:()=>d,get usesBuiltInMirror(){return!m||m.arenaBase&&!m.editableArena&&!m.pieces.some(O=>O.sceneryId==="lab-mirror")},clearGhost(){C.visible=!1},get active(){return!!m},get builtIn(){return!m||m.arenaBase===!0},get assetLayer(){return m?.assetLayer===!0},hasAsset(O){return!!m?.pieces.some(pe=>pe.model?.assetId===O)},getAssetPiece(O){return m?.pieces.find(pe=>pe.model?.assetId===O)??null},get status(){return _},get yaw(){return m?.spawn.yaw??0},get nodes(){return m?.pieces.length??0},get name(){return m?.name??null},get signature(){return g}}}var Jp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function ov(){let n=new ze(new qt(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+Jp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function av(n){let e=new ns,t=new $t;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new _e(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+Jp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new ze(new qt(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let S=l[y],_=Math.max(32,Math.round(S.viewport.z)),R=Math.max(32,Math.round(S.viewport.w)),P=a[y];P?(P.width!==_||P.height!==R)&&P.setSize(_,R):P=a[y]=new Rn(_,R,{type:o?bi:Wn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(S.matrixWorld),t.matrixWorld.copy(S.matrixWorld),t.matrixWorldInverse.copy(S.matrixWorldInverse),t.projectionMatrix.copy(S.projectionMatrix),t.projectionMatrixInverse.copy(S.projectionMatrixInverse),t.layers.mask=S.layers.mask,n.shadowMap.autoUpdate=y===0&&m,n.setRenderTarget(P),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function lv(n){let e={value:0},t={value:Array.from({length:7},()=>new ut(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function cv(n,e,t){function i(C,L,w=.85){let b=C.getWorldPosition(new M),E=C.getWorldQuaternion(new qe);e.push({half:L,min:L.clone().negate(),position:b,quaternion:E,mesh:{position:b,quaternion:E},shape:Ti(L),friction:w,gravity:1})}let r=[],s=[],o=new Ft({color:"#485d5d",flatShading:!0});function a([C,L],w,b){let E=new ze(new Ke(.095,.68,.11),o);E.position.set(C,.34,L+.46),E.castShadow=E.receiveShadow=!0,n.add(E),i(E,new M(.0475,.34,.055));let F=new Mt;F.position.set(C,.85,L+.4),F.rotation.x=-.35,n.add(F);let N=new ze(new Ke(.64,.36,.055),new Ft({color:"#182831"}));F.add(N);let z=document.createElement("canvas");z.width=512,z.height=96;let W=z.getContext("2d"),G=new Pn(z);G.colorSpace=at;let Y=new ze(new qt(.61,.095),new mt({map:G}));Y.position.set(0,.116,.03),F.add(Y);let B=.592/b.length,se=b.map(([he,de],Ie)=>{let Ee=new ze(new Ke(B-.012,.155,.04),new Ft({color:"#478086"}));Ee.position.set(-.296+B*(Ie+.5),-.045,.046),F.add(Ee),r.push(Ee),Ee.userData.touchWidth=B-.012;let Ce=document.createElement("canvas");Ce.width=208,Ce.height=172;let ie=new Pn(Ce);ie.colorSpace=at;let re=new ze(new qt(B-.017,.139),new mt({map:ie}));re.position.z=.0205,Ee.add(re);let xe=-1/0;return Ee.userData.action=()=>{let Pe=performance.now();Pe-xe<250||(xe=Pe,de(),l(),Ee.position.z=.036,setTimeout(()=>{Ee.position.z=.046},115))},{label:he,context:Ce.getContext("2d"),texture:ie}});function ne(){W.fillStyle="#182831",W.fillRect(0,0,512,96),W.fillStyle="#ffe1a0",W.font="bold 38px system-ui",W.fillText(w,17,62,478);for(let he of se){let de=he.context;de.fillStyle="#386269",de.fillRect(0,0,208,172),de.fillStyle="#fff2d5",de.textAlign="center",de.font="bold 27px system-ui";let Ie=(typeof he.label=="function"?he.label():he.label).split("|");Ie.forEach((Ee,Ce)=>de.fillText(Ee,104,(Ie.length>1?68:97)+Ce*37,188)),he.texture.needsUpdate=!0}G.needsUpdate=!0}s.push(ne)}function l(){for(let C of s)C()}a(Tl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Oo[0])],["Boule",()=>t.spawn(1,Oo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Oo[0])],["Vider",t.clear]]),a(Tl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Oo[1])],["Sph\xE8re",()=>t.spawn(5,Oo[1])]]),a(Tl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Tl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l();let c=new Mt;c.userData.editorAssetId="range-target";let{x:u,y:d,z:f}=qh;c.position.set(u,d,f),n.add(c);let h=["#e2ad5c","#ca664b","#f5e5bd"];for(let C=0;C<3;C++){let L=[.9,.58,.27][C],w=new ze(new Ot(L,20),new Ft({color:h[C],side:Ct}));w.position.z=C*.012,c.add(w)}let p=new ze(new Ke(.14,1.5,.14),o);p.position.set(0,.75-d,-.11),c.add(p);let x=0,m=document.createElement("canvas");m.width=256,m.height=64;let g=m.getContext("2d"),y=new Pn(m);y.colorSpace=at;let S=new ze(new qt(1.4,.35),new mt({map:y,side:Ct}));S.position.set(0,2.64-d,.02),c.add(S);function _(){g.fillStyle="#182831",g.fillRect(0,0,256,64),g.textAlign="center",g.font="bold 28px system-ui",g.fillStyle="#fff0ce",g.fillText("CIBLE  \xB7  "+x,128,42),y.needsUpdate=!0}let R={position:new M(u,d,f),right:new M(1,0,0),up:new M(0,1,0),normal:new M(0,0,1),scaleX:1,scaleY:1};function P(C,L=null){let w=L??R,{position:b,right:E,up:F,normal:N}=w,z=Math.max(1e-4,w.scaleX??1),W=Math.max(1e-4,w.scaleY??1);for(let G of C){if(!G.beforePhysics||G.owner||G.frozen||!G.mesh.visible)continue;let Y=G.beforePhysics,B=G.mesh.position,se=(Y.x-b.x)*N.x+(Y.y-b.y)*N.y+(Y.z-b.z)*N.z,ne=(B.x-b.x)*N.x+(B.y-b.y)*N.y+(B.z-b.z)*N.z;if(se<=0||ne>0||G.velocity.dot(N)>=-1)continue;let he=se/(se-ne),de=De.lerp(Y.x,B.x,he)-b.x,Ie=De.lerp(Y.y,B.y,he)-b.y,Ee=De.lerp(Y.z,B.z,he)-b.z,Ce=(de*E.x+Ie*E.y+Ee*E.z)/z,ie=(de*F.x+Ie*F.y+Ee*F.z)/W,re=Math.hypot(Ce,ie),xe=G.radius/Math.sqrt(z*W);re<=.9+xe*.45&&(x+=re<.27?3:re<.58?2:1,_())}}return _(),{targets:r,target:c,redraw:l,updateTarget:P,score:()=>x,setScore(C){x=C,_()}}}function Ul(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Ur=(n,e,t)=>n+(e-n)*t,Go=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function od(n,e){let t=Math.floor(n),i=Math.floor(e),r=Go(0,1,n-t),s=Go(0,1,e-i);return Ur(Ur(Ul(t,i),Ul(t+1,i),r),Ur(Ul(t,i+1),Ul(t+1,i+1),r),s)}function uv(n,e){return od(n,e)*.54+od(n*2.07+3.4,e*2.07-6.1)*.26+od(n*4.2+9,e*4.2)*.13+od(n*8.6,e*8.6-13)*.07}function hv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Ur(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),m=0,g=0,y=0;if(c>.025)if(n){let _=Ul(p+792,l+677);_>.9988&&(y=(_-.9988)*49e3*Go(.09,.3,c))}else{let[_,R]=r[p],P=2.8*u/(c+.16),C=_*P+3.6,L=R*P-8.1,w=uv(C,L),b=uv(C-.12,L-.09);m=Go(.49,.66,w)*Go(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(w-b)*5+(w-.54)*.8))}let S=n?1:Ur(.94,1,Go(.05,.34,c));i[x]=Ur(h[0],(139+115*g)*S,m)+y,i[x+1]=Ur(h[1],(154+100*g)*S,m)+y*.94,i[x+2]=Ur(h[2],(178+77*g)*S,m)+y*.86,i[x+3]=255}}let a=new yi(i,1024,512,Dn);return a.colorSpace=at,a.wrapS=kn,a.magFilter=un,a.minFilter=Ln,a.generateMipmaps=!0,a.needsUpdate=!0,a}function dv(){return{day:hv(!1),night:hv(!0)}}function ad(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new Pn(i);return r.colorSpace=at,r}function fv(n,e){let{day:t,night:i}=dv(),r=new ze(new In(180,40,20),new mt({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(r);let s=ad(128,128,(v,U)=>{let H=v.createRadialGradient(U/2,U/2,0,U/2,U/2,U/2);H.addColorStop(0,"#fff8df"),H.addColorStop(.12,"#fff3bd"),H.addColorStop(.18,"rgba(255,225,144,.40)"),H.addColorStop(1,"rgba(255,220,144,0)"),v.fillStyle=H,v.fillRect(0,0,U,U)}),o=new Ia(new so({map:s,blending:$n,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=go,a.needsUpdate=!0;let l=new So(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new $a("#daeaff","#88724c",2.25),u=new el("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(v){h=f[v]?v:0;let U=f[h];c.color.set(U.fill),c.groundColor.set(U.ground),c.intensity=U.hemi,u.color.set(U.sun),u.intensity=U.power,d.set(...U.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(U.sun),o.material.opacity=U.glow,r.material.map=h===2?i:t,r.material.color.set(U.sky),n.fog.color.set(U.fog),n.background.set(U.fog),n.environmentIntensity=m*[1,.56,.09][h]}function x(v){if(!u.castShadow)return;let U=u.target.position,H=Math.round(v.x/4)*4,te=Math.round(v.y/4)*4,$=Math.round(v.z/4)*4;U.x===H&&U.y===te&&U.z===$||(U.set(H,te,$),u.position.copy(U).add(d))}let m=0;n.background=new Ue(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function y(v,U,H){let[,te,$]=g[U],me=512;v.save(),v.scale(H/512,H/512),v.fillStyle=te,v.fillRect(0,0,me,me);let fe=U+19;function ve(){return fe=Math.imul(fe,1664525)+1013904223>>>0,fe/4294967296}if(v.fillStyle=$,U===16){for(let ye=0;ye<16;ye++)for(let le=0;le<16;le++)(le+ye)%2===0&&v.fillRect(le*32,ye*32,32,32);v.fillStyle="#ff3957",v.fillRect(253,0,6,512),v.fillRect(0,253,512,6)}else if([0,2,8,15].includes(U)){let ye=U===15?32:64;v.globalAlpha=.48;for(let le=0;le<me;le+=ye){v.fillRect(0,le,me,U===8?3:2);for(let Me=-ye;Me<me;Me+=ye)v.fillRect(Me+le/ye%2*(U===2?ye/2:0),le,2,ye)}}else if([4,5,6,7,10,11,12].includes(U)){let ye=U===5?38:U===7?64:18;for(let le=0;le<ye;le++){v.strokeStyle=$,v.globalAlpha=.08+ve()*.22,v.lineWidth=U===5?1+ve()*8:1+ve()*4;let Me=ve()*me,Ve=U===5?.018:.009;v.beginPath();for(let Se=0;Se<=me;Se+=8){let Ae=Me+Math.sin(Se*Ve+le)*(U===6||U===7?4:12+le%5*3)+(U===4?Se*.28:0);Se===0?v.moveTo(Se,Ae):v.lineTo(Se,Ae)}v.stroke()}}else{v.globalAlpha=.27;for(let ye=0;ye<120;ye++){let le=ve()*me,Me=ve()*me,Ve=2+ve()*6;v.beginPath(),v.arc(le,Me,Ve,0,Math.PI*2),v.fill()}}if(U!==16)for(let ye=0;ye<4400;ye++)v.globalAlpha=.05+ve()*.1,v.fillStyle=ve()>.5?$:"#222324",v.fillRect(ve()*me,ve()*me,1+ve()*4,1+ve()*3);v.restore()}let S=new Set([0,2,4,5,8,15,16]),_=g.map(([v,U,H,te,$,me],fe)=>{let ve=S.has(fe)?512:256,ye=ad(ve,ve,Me=>y(Me,fe,ve));ye.wrapS=ye.wrapT=kn;let le=new xt({map:ye,roughness:te,metalness:$,flatShading:!0,opacity:me,transparent:me<1,depthWrite:me===1});return le.name=v,le}),R=_.map(v=>v.map.image),P=512,C=_.map(v=>new Ft({map:v.map,flatShading:!0,opacity:v.opacity,transparent:v.transparent,depthWrite:v.depthWrite})),L={value:0},w={value:.24},b={value:null},E={value:0};function F(){b.value?.dispose(),b.value=ad(512,512,(v,U)=>{v.fillStyle="#ffffff",v.fillRect(0,0,U,U);let H=U/52,te=U/64;for(let $ of N){if(!$.position||!$.half||$.position.y+$.half.y<.22)continue;let me=($.position.x+26)*H,fe=($.position.z+54)*te,ve=Math.min(55,$.half.x*H+5),ye=Math.min(72,$.half.z*te+6);v.save(),v.translate(me+$.half.y*H*.2,fe+$.half.y*te*.24),v.scale(ve,ye);let le=v.createRadialGradient(0,0,.15,0,0,1);le.addColorStop(0,"rgba(22,37,65,.54)"),le.addColorStop(.58,"rgba(36,54,76,.29)"),le.addColorStop(1,"rgba(38,48,57,0)"),v.fillStyle=le,v.fillRect(-1,-1,2,2),v.restore()}})}for(let v of[..._,...C])v.onBeforeCompile=U=>{U.uniforms.uFocusAmount=L,U.uniforms.uFocusRadius=w,U.uniforms.uLabLightmap=b,U.uniforms.uLabBakedStrength=E,U.vertexShader=`varying vec3 vLabPosition;
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
      `)},v.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],z=[];function W(v,U,H,te,$,me,fe,ve=0,ye=0,le=1,Me=1,Ve=!1){let Se=new ze(Ve?new Ke($,me,fe):sd($,me,fe),_[ve]);Se.position.set(U,H,te),Se.rotation.x=ye,Se.receiveShadow=!0,Se.castShadow=!0,n.add(Se);let Ae=new M($/2,me/2,fe/2),We={mesh:Se,position:Se.position,quaternion:Se.quaternion,half:Ae,min:Ae.clone().negate(),friction:le,gravity:Me,name:v,type:ve,shape:Ti(Ae)};return N.push(We),We}let G=ly.map(({name:v,bounds:U,type:H=0,friction:te=.78,gravity:$=1})=>{let{xMin:me,xMax:fe,zMin:ve,zMax:ye}=U;return W(v,(me+fe)/2,-.33,(ve+ye)/2,fe-me,.66,ye-ve,H,0,te,$)});for(let v of Object.values(hy))for(let U of v)W(...U);let{xMin:Y,xMax:B,zMin:se,zMax:ne}=oy;W("But\xE9e arri\xE8re",0,1.35,se+.4,B-Y,2.7,.6,2),W("But\xE9e ouest",Y+.3,1.05,(se+ne)/2,.6,2.1,ne-se,2),W("But\xE9e est",B-.3,1.05,(se+ne)/2,.6,2.1,ne-se,2);let{xMin:he,xMax:de,zMin:Ie,zMax:Ee}=No.hills.bounds,Ce=de-he,ie=Ee-Ie,re=16,xe=64,Pe=new qt(Ce,ie,re,xe).rotateX(-Math.PI/2).translate(he+Ce/2,0,Ie+ie/2),be=Pe.attributes.uv;for(let v=0;v<be.count;v++)be.setXY(v,be.getX(v)*Ce/2.6,be.getY(v)*ie/2.6);let O=Pe.attributes.position,pe;function T(v){if(pe===v)return;pe=v;let U=pe*.017;for(let H=0;H<O.count;H++){let te=O.getX(H),$=O.getZ(H),me=Math.sin(Math.PI*De.clamp((te-he)/Ce,0,1)),fe=Math.min(1,($-Ie)*.48,(Ee-$)*.48),ve=.93+.56*Math.sin($*.36+U)+.32*Math.cos(te*.67+$*.26+U*1.4)+.19*Math.sin($*.81+U*.67);O.setY(H,Math.max(0,me*fe*ve))}O.needsUpdate=!0,Pe.computeVertexNormals(),Pe.computeBoundingSphere()}T(ay);let V=new ze(Pe,_[3]);V.userData.editorAssetId="lab-hill",V.receiveShadow=V.castShadow=!0,n.add(V);let J=(v,U)=>{let H=De.clamp((v-he)/Ce*re,0,re-1e-6),te=De.clamp((U-Ie)/ie*xe,0,xe-1e-6),$=Math.floor(H),me=Math.floor(te),fe=H-$,ve=te-me,ye=re+1,le=me*ye+$,Me=O.getY(le),Ve=O.getY(le+1),Se=O.getY(le+ye),Ae=O.getY(le+ye+1);return fe+ve<=1?Me+(Ve-Me)*fe+(Se-Me)*ve:Ae+(Se-Ae)*(1-fe)+(Ve-Ae)*(1-ve)};N.push({heightfield:!0,mesh:V,editorAssetId:"lab-hill",height:J,...No.hills.bounds,friction:.81,gravity:1});function Z(v,U,H,te,$=1.45){let me=ad(384,72,(ve,ye,le)=>{ve.fillStyle="#202a32",ve.fillRect(0,0,ye,le),ve.fillStyle=te,ve.font="bold 31px system-ui",ve.textAlign="center",ve.fillText(v,ye/2,48,ye-20)}),fe=new ze(new qt(3.2,.6),new mt({map:me,side:Ct}));fe.position.set(U,$,H),n.add(fe),z.push(fe)}for(let v of Object.values(No)){Z(v.name.toLocaleUpperCase("fr"),...v.sign,v.color);let{xMin:U,xMax:H,zMin:te,zMax:$}=v.bounds,me=new Ua(new Qe().setFromPoints([new M(U,.025,te),new M(H,.025,te),new M(H,.025,$),new M(U,.025,$)]),new vi({color:v.color,transparent:!0,opacity:.72}));n.add(me),z.push(me)}Z("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Z("MURS HAUTS",3,-31,"#e8d2ff"),Z("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let D=new xt({color:"#c8e6ed",metalness:1,roughness:.16}),j=new ze(new Ut(.54,2),D);j.userData.editorAssetId="chrome-sphere",j.position.set(Xh.x,Xh.y,Xh.z),j.castShadow=!0,n.add(j);let X=g.map((v,U)=>{let{x:H,z:te}=uy(U);return W("\xC9chantillon "+g[U][0],H,.325,te,.65,.65,.65,U,0,1,1,!0).mesh}),Q=new Ot(1,12).rotateX(-Math.PI/2),ue=new mt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function ce(v){let U=new ze(Q,ue);return U.scale.setScalar(v),n.add(U),U}function A(v,U,H,te,$,me,fe,ve){let ye=U>=3;e.shadowMap.enabled=ye,u.castShadow=ye,ue.opacity=U===2?.17:.11,E.value=ve?.38+H*.04:0;let le=U>=9?2048:U>=6?1024:U>=4?512:256;u.shadow.intensity=.45+U*.055,u.shadow.radius=.65+U*.12;let Me=13+U*1.2;Object.assign(u.shadow.camera,{left:-Me,right:Me,top:Me,bottom:-Me}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==le&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(le,le)),o.visible=$,fe!==P&&(P=fe,_.forEach((Se,Ae)=>{let We=Se.userData.texture??Se.map,q=S.has(Ae)?fe:Math.min(256,fe);if(We.image.width===q)return;let Te=document.createElement("canvas");Te.width=Te.height=q;let Le=Te.getContext("2d");q>512?y(Le,Ae,q):Le.drawImage(R[Ae],0,0,q,q);let Be=new Pn(Te);Be.colorSpace=We.colorSpace,Be.wrapS=We.wrapS,Be.wrapT=We.wrapT,Be.repeat.copy(We.repeat);for(let we of[Se,C[Ae]])we.userData.texture=Be,we.map=Be,we.needsUpdate=!0;We.dispose()}));let Ve=v>=4;for(let Se of N)Se.mesh?.isMesh&&!Se.zone&&(Se.mesh.material=Ve?_[Se.type]:C[Se.type]);V.material=Ve?_[3]:C[3];for(let Se=0;Se<X.length;Se++)X[Se].material=Ve?_[Se]:C[Se];_.forEach((Se,Ae)=>{for(let We of[Se,C[Ae]])We.userData.texture||(We.userData.texture=We.map),We.map=me?We.userData.texture:null,We.color.set(me?"#ffffff":g[Ae][1]),We.needsUpdate=!0}),m=te?.21+H*.067:0,D.metalness=te?.95:.1,D.roughness=te?.13:.46,r.visible=v>=2,p(h)}return{boxes:N,floors:G,probe:j,display:X,visual:A,shadow:ce,setTimeOfDay:p,centerShadows:x,get hillSeed(){return pe},setHillSeed:T,bakeLightmap:F,mapMaterial:(v,U)=>U>=4?_[v]:C[v],builtObjects:[...N.map(v=>v.mesh).filter(v=>v?.isObject3D),j,...z],materials:[..._,...C],focus(v,U,H){L.value=v?U*.75:0,w.value=.07+H*.058}}}var $v="R38",Br=document.getElementById("game");Br instanceof HTMLCanvasElement||(Br=document.createElement("canvas"),Br.id="game",Br.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Br));var Ko=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ze;try{Ze=new hh({canvas:Br,antialias:!Ko,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ze.xr.enabled=!0;Ze.xr.setReferenceSpaceType("local-floor");Ze.shadowMap.type=nl;Ze.shadowMap.autoUpdate=!1;var pv=-1/0;Ze.toneMapping=bu;Ze.toneMappingExposure=1.15;var At=new ns;At.fog=new Ra("#a6d4ea",55,135);var gt=new Mt,Sd=new Mt,en=new $t(70,1,.035,210);gt.add(Sd);Sd.add(en);At.add(gt);var wt=fv(At,Ze),OE=av(Ze),pd=ov();At.add(pd);var zE=lv(wt.probe),k=Hy(Ko),VE={...k};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(k.stepVolume=n)}catch{}var kr=jy();for(let n of["pointerdown","keydown"])addEventListener(n,kr.unlock,{passive:!0});var Xo=Jy(At),Fi=Wm(),$p=0,mv=0,gv=0;addEventListener("error",n=>Fi.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Fi.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var Ms={normal:new M,surface:null},md=[.18,.17,.105].map(n=>({radius:n,position:new M})),pm=new M(Bo.x,Bo.y,Bo.z);gt.position.copy(pm);var Kt=new M,Ho=new M,It=new M,xv=new M,Kn=new M,vn=new M,yv=new M,$o=new M,rr=new M,vv=new M,Nr=new M,_v=new M,Fl=new M,kE=.105,ld=new M,gd=!1,Pi=!1,mm=0,gm=null,kl=[],xm=100,Zt=new M(0,1,0),ur=new qe,St=0,lr=0,As=0,ni=0,Ts=NaN,Qv={armed:!0},Qp=0,bs=0,Kp=0,cd=0,Zo=0,jo=0,Jo=0,sn=k.quality,Gl=72,Ri=0,jt=!1,Kv="left",ht=new URLSearchParams(location.search).has("room")?5:0,ym=0,vm=0,_m=0,Bt=!0,Mv=0,GE=[],ud=[],Gr=wt.boxes,HE=new Ut(1,0),e_=1+Math.floor(Math.random()*(fh.length-1)),t_=ph(e_),{hand:WE,fur:qE}=t_;function XE(n,e,t,i,r,s,o,a){let l=new ze(HE,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var wd=Vp(localStorage),YE=wd.models.length?"|atelier-"+ps(JSON.stringify(wd)):"",Li=by(wd)??t_.createHead();Li.visible=!1;At.add(Li);var Yo=new M,xd=new qe,bv=new M,ZE=new M,Sv=new nn(0,0,0,"YXZ"),am=new M,em=new M,or=new _e,wv=new qe,ql=9.81,n_=null,tm=new qe,Tv=[null,null];function Td(){return .24+k.arms*.036}function jE(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=De.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=De.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=De.lerp(s[2],i,r),n.skin.pose(s,!k.body)}var Rt=["left","right"].map(n=>{let e=xh(n,WE,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new qe},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),zr=new td(M,Rt,Jx),i_=yh(qE,Rt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Rt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Di=i_.mesh;At.add(Di);function JE(n,e){if(k.body){tm.copy(Di.quaternion).invert();for(let t=0;t<Rt.length;t++){let i=Rt[t];Tv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Di.position).applyQuaternion(tm),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(tm))}i_.pose(Tv,Td(),n,e,k.hands)}}var Tn=Yh(),r_=[0,1,2,3,4,5],s_=[7,8,9,10,11,12,13,14],Ql=15,Av=Ti(new M(.13,.088,.115)),$E=new Ke(.26,.176,.23),QE=new xt({color:"#536771",roughness:.36,metalness:.28});Tn[Ql]={name:"Cam\xE9ra du spectateur",geo:$E,material:QE,shape:Av,lowShape:Av,mass:1.2};var{props:KE,animate:e2}=qy(),t2=My(wd).slice(0,36),Mm=[],Xl=[];function o_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=wi(t??r.geo,i);e.push(Tn.length),Tn.push({...r,shape:s,lowShape:s})}}o_(KE,Mm);o_(t2,Xl);var a_=[...r_,...s_,...Mm,...Xl];Tn[8].properties={supportWhileHeld:!0};Tn[11].properties={supportWhileHeld:!0};function n2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Tn)n.supportAxis=n2(n);function i2(n){let e=new ze(new zt(.058,.074,.1,12).rotateX(Math.PI/2),new xt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new ze(new Ot(.048,12),new mt({color:"#7bd7ed",side:Ct}));t.position.z=-.203,n.add(t);let i=new ze(new Ke(.045,.013,.012),new mt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function l_(n,e=!1){let t=Tn[n];if(!t)return null;let i=new ze(t.geo,e?Rl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===Ql&&i2(i),i}var ct=null,yt=[],Ev=[],Nl={model:null,bounds:null,center:new M,size:new M},Fr={position:new M,right:new M,up:new M,normal:new M,scaleX:1,scaleY:1},Bl=new qe,Cv=new M,Rv=new nn(0,0,0,"YXZ");function r2(){let n=ct?.getAssetPiece?.("range-target");if(!n)return null;if(Nl.model!==n.model){Nl.model=n.model;let i=kp(n.model);i.getCenter(Nl.center),i.getSize(Nl.size)}let{center:e,size:t}=Nl;return Rv.set(De.degToRad(n.pitch),De.degToRad(n.yaw),De.degToRad(n.roll??0),"YXZ"),Bl.setFromEuler(Rv),Fr.position.set(n.x,n.y,n.z),Cv.set(-e.x/Math.max(1e-4,t.x)*n.w,-e.y/Math.max(1e-4,t.y)*n.h,-e.z/Math.max(1e-4,t.z)*n.d).applyQuaternion(Bl),Fr.position.add(Cv),Fr.right.set(1,0,0).applyQuaternion(Bl),Fr.up.set(0,1,0).applyQuaternion(Bl),Fr.normal.set(0,0,1).applyQuaternion(Bl),Fr.scaleX=n.w/Math.max(1e-4,t.x),Fr.scaleY=n.h/Math.max(1e-4,t.y),Fr}var Hr={held:null},ea=new Map,ar=0,s2=1,Ol=new qe,Yl=new qe,zl=new M,Ad=new M,Ss=new M,c_=new M,u_=new M;function o2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Ad.set(0,0,-1).applyAxisAngle(Zt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(zl.copy(n).addScaledVector(Ad,s),zl.y+=.15,!Sl(n,zl,Math.min(.2,t*.5),Gr,c_,u_)&&!yt.some(o=>o.mesh.position.distanceToSquared(zl)<(t+o.radius+.07)**2))return zl}}return null}function ta(n,e,t,i=!1){let r=Tn[n];if(!r)return null;if(!e&&(t?Ss.set(t.x,t.y,t.z):Ze.xr.isPresenting?Ss.copy(It):en.getWorldPosition(Ss),e=o2(Ss,t?.yaw??lr,r.shape.radius),!e))return i||ti("Aucun espace libre pour cet objet."),null;let s=l_(n);s.position.copy(e),At.add(s);let o=k.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:s2++,netType:n,beforePhysics:s.position.clone(),blocksPlayer:r.properties?.collidable!==!1,precise:k.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new qe,shadow:wt.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===Ql,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),yt.push(a),wl(a,wt.boxes),Fi.record("object-spawn",{model:r.name,typeId:n,count:yt.length}),a}function h_(){for(let n of Rt)pi(n,!1);pi(Hr,!1);for(let n of ea.values())pi(n,!1)}function Fd(){h_();for(let n of yt)if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();yt.length=0,ea.clear()}function d_(){if(ct?.assetLayer)return;let n=new Set(ct?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);dy((e,t)=>{n.has(Np[e])||ta(e,t)})}d_();function pi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+k.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Kl(){h_();for(let n of yt)Gd(n),n.frozen=!!n.spec.properties?.frozen}function hr(){Ts=NaN,ni=0,Nd.reset(),gt.position.copy(pm),St=De.degToRad(ct.yaw),As=0,gt.rotation.y=St,Kt.set(0,0,0),Qv.armed=!0,Pi=!1,Ms.normal.set(0,0,0),Ms.surface=null,gd=!1,zr.reset(),kr.reset(),or.set(0,0);for(let n of Rt)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,pi(n,!1)}Kl();function f_(){return k.auto||Ko&&!Ze.xr.isPresenting}function Ed(){return f_()?Math.min(k.shadowQuality,sn):k.shadowQuality}function Zl(){return f_()?Math.min(k.lightQuality,sn):k.lightQuality}function Ni(){let n=k.texturePower;wt.visual(sn,k.shadows?Ed():0,Zl(),k.reflections,k.bloom,k.textures,2**(n-1),k.lightmap),ct.refreshMaterials?.(),Ze.shadowMap.needsUpdate=!0,wt.setTimeOfDay(je.remoteLight??k.timeOfDay-1),lm=Pd.slice(0,Zl()>=8?3:Zl()>=4?2:1),Fm.value=k.shaderMode-1;let e=Ze.xr.isPresenting&&Ze.xr.getBaseLayer?.()?.fixedFoveation!=null;wt.focus(k.focus&&!e,k.focusStrength,k.focusSize),Ze.toneMappingExposure=.58+k.exposure*.114,G_.value=.55+k.contrast*.09,H_.value=k.saturation*.2,W_.value=(k.warmth-5)*.022,Ze.xr.setFoveation(k.focus?De.clamp((k.focusStrength+1)*.105+(5-k.focusSize)*.028+(k.auto?(7-sn)*.045:0),0,1):0),Ze.xr.isPresenting||ec(),Bt=!0,Vr.redraw()}var Pv=0,Iv=0,Lv=0;function ec(){if(Ze.xr.isPresenting)return;let n=Math.max(1,Br.clientWidth||innerWidth),e=Math.max(1,Br.clientHeight||innerHeight),t=Oy(sn,devicePixelRatio,Ko);t!==Lv&&(Ze.setPixelRatio(t),Lv=t),(n!==Pv||e!==Iv)&&(Ze.setSize(n,e,!1),Pv=n,Iv=e),en.aspect=n/e,en.fov=k.viewFov,en.updateProjectionMatrix()}addEventListener("resize",ec);globalThis.visualViewport?.addEventListener("resize",ec);function a2(n){Object.assign(k,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},id[n]),sn=k.quality,jo=Jo=Zo=0,Ni()}var Es=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",hr]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Im]]],["Rendu",[]]],bm=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Sm(){return ht===2?bm[ym][1]:ht===3?y_[vm][1]:ht===4?Am[_m][1]:Es[ht][1]}function p_(n){ht=n,Ri=0,Bt=!0}var Cd=null,m_=[],yd=0,Hl=0,Rd=null,g_=!1,wm=0,Tm=0,x_={},Pd=Array.from({length:3},()=>{let n=new Qa("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),lm=Pd,Id=new M;function Dv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Id);if(t>34**2)return;let i=lm[0];for(let r of lm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function l2(n){n?en.getWorldPosition(Id):Id.copy(It);for(let t of Pd)t.mesh=null,t.distance=1/0;if(n)je.forEachReplica(Dv);else if(k.objects)for(let t of yt)t.materialStyle===3&&Dv(t.mesh);let e=20+Zl()*.75;for(let{light:t,mesh:i}of Pd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function tc(){Fi.record("capture",{mode:Ze.xr.isPresenting?"VR":"PC"});let n=Fi.snapshot(Ze.xr.isPresenting?"VR":"PC");Cd={game:"Gorilla Lab",version:$v.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:Ze.xr.isPresenting?"VR":"PC",sessionHadVR:g_,settings:{...k},qualityActive:sn,diagnostics:n,debugGeometry:{...Xo.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:Ze.getPixelRatio()},haptics:Rt.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:n_,audio:{volume:k.stepVolume,enabled:k.stepAudio,clipsPlayed:kr.count,state:kr.state},performance:{fps:bs,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:Ze.xr.isPresenting?Rd:null,previousVR:Rd,renderer:x_,terrainSeed:wt.hillSeed,map:ct.active?{name:ct.name,pieces:ct.nodes}:null,objects:{physics:{...Ml},total:yt.length,held:yt.filter(e=>e.owner).length,frozen:yt.filter(e=>e.frozen).length},cloud:{role:je.role,connected:je.connected,replicas:je.replicaCount,...je.stats},targetScore:Vr.score(),locomotion:{trackedFrames:Tm,contactFrames:wm,launchCount:mm,lastLaunch:gm,standingHeight:Number.isFinite(Ts)?Ts:null,viewOffset:ni}},document.querySelector("#download-report").disabled=!1,Bt=!0}function c2(){Cd||tc();let n=URL.createObjectURL(new Blob([JSON.stringify(Cd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=c2;document.querySelector("#capture-report").onclick=tc;var na=document.createElement("input");na.id="report-note";na.maxLength=500;na.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";na.setAttribute("aria-label","Sc\xE9nario du rapport");na.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(na);var jl=document.createElement("p");jl.setAttribute("aria-live","off");document.querySelector("#settings").after(jl);Es[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",tc]);var u2=Array.from({length:Math.ceil(Xl.length/8)},(n,e)=>["Atelier"+(Xl.length>8?" "+(e+1):""),Xl.slice(e*8,e*8+8)]),y_=[["Basiques",r_],["D\xE9taill\xE9s",s_],["Anim\xE9s",Mm],...u2].map(([n,e])=>[n,[...e.map(t=>[Tn[t].name,()=>Lm(t)]),["Tout retirer",Bd]]]);Es.push(["Spawn",[]]);var Am=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ct.blank(),k.mapEdit=!0}],["Annuler placement",()=>ct.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ct.recenter(It.x,gt.position.y,It.z,lr)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ct.reset(),k.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>kv(!1)],["Utiliser comme t\xEAte",()=>kv(!0)]]]];Es.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",__],["Tester vibration droite",M_],["\xC9couter un pas",b_],["Capturer un rapport",tc]]]);function v_(n){let e=Rt.find(i=>i.side===n),t=e?.valid&&qp(e,.45,65);Fi.record("haptic-test",{side:n,supported:!!t}),ti(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function __(){v_("left")}function M_(){v_("right")}function b_(){kr.unlock().then(()=>kr.play(k.stepVolume))}function S_(){try{localStorage.setItem("gorilla-lab-step-volume",String(k.stepVolume))}catch{}}var h2=document.querySelector("#section"),hd=document.querySelector("#settings"),d2=document.querySelector("#readings"),Em=[1,.75,.5,.25];function _n(n,e){if(Fi.record("setting",{key:n,step:e,previous:k[n]}),n==="mirrorQuality"){k.mirrorQuality=De.clamp(k.mirrorQuality+e,1,3),Bt=!0;return}if(n==="debugSpeed"){k.debugSpeed=De.clamp(k.debugSpeed+e,1,Em.length),zr.reset(),Bt=!0;return}if(n==="stepVolume"){k.stepVolume=De.clamp(k.stepVolume+e,1,10),S_(),Bt=!0;return}if(n==="viewFov"){k.viewFov=De.clamp(k.viewFov+5*e,50,105),ec(),Bt=!0;return}if(n==="vrFov"){k.vrFov=De.clamp(k.vrFov+5*e,55,100),Bt=!0;return}if(n==="shaderMode"){k.shaderMode=(k.shaderMode-1+e+nd.length)%nd.length+1,Fm.value=k.shaderMode-1,Bt=!0;return}if(n==="timeOfDay"){if(je.role==="player"){let i=((je.remoteLight??k.timeOfDay-1)+e+3)%3;je.sendAction({type:"world",mode:1,typeId:i})}else k.timeOfDay=(k.timeOfDay-1+e+3)%3+1;Ni();return}let t={mapMode:9,mapShape:5,mapMaterial:Yp.length,mapSurface:4,mapTurn:8,mapTexture:Kh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];k[n]=(k[n]-1+e+i)%i+1,Bt=!0;return}if(n==="mapEdit"&&!k.mapEdit&&!ct.active&&ct.load(ev(wt.boxes)),n==="toolMode"){k.toolMode=(k.toolMode-1+e+_s.length)%_s.length+1,Ze.xr.isPresenting||ti("Outil \xB7 "+_s[k.toolMode-1]),Bt=!0;return}if(n==="preset"){let i=Object.keys(id);k.preset=(k.preset-1+e+i.length)%i.length+1,a2(i[k.preset-1]);return}if(typeof k[n]=="boolean"?k[n]=!k[n]:k[n]=De.clamp(k[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Rt)i.valid=!1,i.surface=null;if(n==="quality"&&(k.auto=!1,sn=k.quality),n==="auto"&&!k.auto&&(sn=k.quality),n==="movement"||n==="collisions")for(let i of Rt)i.surface=null;if(n==="objects"&&!k.objects&&Kl(),n==="blasterActive"&&k.blasterActive&&(k.toolActive=!1),n==="toolActive"&&k.toolActive&&(k.blasterActive=!1),!k.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Rt)i.held?.toolHold&&pi(i,!1);Pm(!1)}n==="preciseHitboxes"&&w_(),Ni()}function w_(){for(let n of yt)n.precise=k.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||wl(n,wt.boxes)}function T_(){let n=(ht===2?bm:ht===4?Am:null)?.flatMap(e=>e[1])??Sm();for(let[,e]of n)typeof e=="string"&&(k[e]=VE[e]);ht===6&&(S_(),zr.reset()),ht===0&&hr(),ht===1&&(w_(),Kl()),ht===3&&Bd(),ht===2&&(sn=k.quality),Ni()}function Vl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),ia(),Bt=!0},t}function A_(n){return n==="preciseHitboxes"?k[n]?"High":"Low":k[n]?"Actif":"Coup\xE9"}function Cm(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][k[n]-1];if(n==="debugRange")return k[n]*5+" m";if(n==="debugBudget")return k[n]*1e3+" segments";if(n==="debugSpeed")return je.role?"\xD71 en ligne":"\xD7"+Em[k.debugSpeed-1];if(n==="stepVolume")return k.stepVolume+"/10";if(n==="viewFov")return k.viewFov+"\xB0";if(n==="vrFov")return k.vrFov===100?"Natif":k.vrFov+" %";if(n==="mapTexture")return k[n]===1?"Aucune":Kh[k[n]-2];if(n==="terrainResolution")return[8,16,32,48][k[n]-1]+"\xB2";if(n==="shaderMode")return nd[k.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=k[n],t=n==="shadowQuality"?Ed():Zl();return t===e?e+"/10":e+"/10 \xB7 "+t+(k.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][je.remoteLight??k.timeOfDay-1]:n==="mapMode"?L_[k.mapMode-1]:n==="mapShape"?_2[k.mapShape-1]:n==="mapSurface"?M2[k.mapSurface-1]:n==="mapMaterial"?Yp[k.mapMaterial-1]:n==="mapTurn"?(k.mapTurn-1)*45+"\xB0":n==="toolMode"?_s[k.toolMode-1]:n==="preset"?Object.keys(id)[k.preset-1]:n==="texturePower"?[2**(k[n]-1),2**(k[n]-1)].join("\xD7"):k[n]}function cm(){return ht===2?bm:ht===3?y_:Am}function E_(){return ht===2?ym:ht===3?vm:_m}function C_(n){ht===2?ym=n:ht===3?vm=n:_m=n}function R_(n){return n===__||n===M_?"Tester":n===tc?"Capturer":n===b_?"\xC9couter":n===Fd||n===Bd?"Vider":n===hr||n===Im?"R\xE9initialiser":ht===3?"Cr\xE9er":"Appliquer"}function ia(){if(h2.textContent=Es[ht][0],P_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ht))),hd.replaceChildren(),f2.hidden=ht!==5,document.querySelector("#restore").hidden=ht===5,ht!==5){if(ht>=2&&ht<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),cm().forEach(([e],t)=>{let i=Vl(e,()=>C_(t));i.setAttribute("aria-pressed",String(E_()===t)),n.append(i)}),hd.append(n)}if(ht===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",hd.append(n)}for(let[n,e]of Sm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Vl(R_(e),e)):typeof k[e]=="boolean"?i.append(Vl(A_(e),()=>_n(e,1))):i.append(Vl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+Cm(e)+" "),Vl("+",()=>_n(e,1))),t.append(i),hd.append(t)}}}var P_=document.querySelectorAll("[data-page]"),f2=document.querySelector("#cloud-access");P_.forEach((n,e)=>n.onclick=()=>{p_(e),ia()});document.querySelector("#restore").onclick=()=>{T_(),ia()};ia();function I_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new Pn(s);a.colorSpace=at;let l=new ze(new qt(t,i),new mt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=I_(640,652,.84,.86,At);fn.mesh.visible=!1;var ei=I_(416,84,.32,.065,At);ei.mesh.visible=!1;var Wo=new $t(75,1,.07,140),wn=new ul(new qt(1.7,1.95),{color:16054015,textureWidth:Ko?128:256,textureHeight:Ko?128:256,clipBias:.004,multisample:0}),Uv=new M,dd=new M,Fv=new M,Nv=new M,nm=new qe,p2=new M,m2=new qe().setFromAxisAngle(Zt,Math.PI),g2=new M(Pr.x,Pr.y,Pr.z);wn.position.set(Pr.x,Pr.y,Pr.z);wn.rotation.y=Math.PI;At.add(wn);var nc=new ze(new Ke(1.8,2.03,.1),new Ft({color:"#344650"}));nc.userData.editorAssetId="lab-mirror";nc.position.copy(wn.position).z+=.064;At.add(nc);var x2=wn.onBeforeRender.bind(wn);wn.onBeforeRender=()=>{};wn.visible=!1;var qo=-1/0,Bv=null,Ov=0,um=0;function y2(n,e){if(um=0,wn.visible=!1,!k.reflections||k.mirrorQuality===1){qo=-1/0;return}if(Wo.position.copy(It),e){let u=e.transform.orientation;Wo.quaternion.set(u.x,u.y,u.z,u.w).premultiply(xd.setFromAxisAngle(Zt,St))}else en.getWorldQuaternion(Wo.quaternion);Fv.set(0,0,-1).applyQuaternion(Wo.quaternion);let t=null,i=4;function r(u,d,f){dd.subVectors(d,It);let h=dd.length();Uv.set(0,0,1).applyQuaternion(f),!(h>=i||dd.dot(Uv)>=-.15||dd.dot(Fv)<=.66*h)&&(t=u,i=h,wn.position.copy(d),wn.quaternion.copy(f))}ct.usesBuiltInMirror&&r(nc,g2,m2);for(let{mesh:u}of ct.mirrors()){let{mirrorSize:d}=u.userData;nm.copy(u.quaternion),Nv.copy(u.position).add(p2.set(0,0,d.d/2+.002).applyQuaternion(nm)),r(u,Nv,nm)}if(!t){qo=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};wn.scale.set(s/1.7,o/1.95,1),wn.visible=!0,Bv!==t&&(Bv=t,qo=-1/0);let a=k.mirrorQuality,l=a===3?256:128;if(Ov!==l&&(wn.getRenderTarget().setSize(l,l),Ov=l,qo=-1/0),n-qo<(a===3?45:110))return;qo=n,Wo.updateMatrixWorld(!0),wn.updateMatrixWorld(!0),Li.visible=k.body;let c=performance.now();try{x2(Ze,At,Wo)}finally{Li.visible=!1}um=performance.now()-c}var Ui=new Zi,qn=new M,Nn=new M,fd=new M,zv=new M,Wl=null,vd=null,_d=null,v2=new Set(At.children),Vr=cv(At,wt.boxes,{spawn:Lm,clear:Bd,resetPlayer:hr,resetObjects:Im,quality:()=>sn+"/10",resolution:()=>k.resolution+"/10 \xB7 relancer VR",textureSize:()=>Cm("texturePower"),qualityNext:()=>{k.quality>=10&&(k.quality=0),_n("quality",1)},resolutionNext:()=>{k.resolution>=10&&(k.resolution=0),_n("resolution",1)},textureNext:()=>{k.texturePower>=12&&(k.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),L_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],_2=["Bloc","Rampe","Mur","Dalle","Terrain"],M2=["Normale","Glace","Caoutchouc","Lune"],Vv=new Map;function b2(){for(let n of ct.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=Vv.get(e);if(t===void 0){let r=Vo(n.model);r.scale(n.w,n.h,n.d);let s=El(n.model,new M(n.w,n.h,n.d)),o=wi(s);s.dispose(),t=Tn.length,Tn.push({id:n.model.id,name:n.model.name,geo:r,material:Dr(n.model),shape:o,lowShape:o,assetId:n.model.assetId??null,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:De.clamp(n.w*n.h*n.d*9,.18,12)}),Vv.set(e,t)}let i=ta(t,new M(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(De.degToRad(n.pitch),De.degToRad(n.yaw),De.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}ct=sv({scene:At,arena:wt,boot:pm,onReset:n=>{Fd(),hr(),St=De.degToRad(n),ct.builtIn&&d_(),b2()},onVisual:Ni,getLevel:()=>sn,defaultObjects:[...wt.builtObjects,...At.children.filter(n=>!v2.has(n)),nc]});var je=Tx({scene:At,applyCoconuts:()=>{},currentMap:()=>(ct.signature||"arena-r25-"+wt.hillSeed)+YE,seedArena:n=>wt.setHillSeed(n),makeReplica:n=>{let e=l_(n,!0);return e&&ra(e.material),e},onAction:C2,onStatus:()=>{ht===5&&(Bt=!0)},onShot:n=>Nd.receiveShot(n,je.role==="vr"),applyLight:n=>{wt.setTimeOfDay(n??k.timeOfDay-1),Bt=!0,Ze.xr.isPresenting||ia()},applyScore:n=>Vr.setScore(n)});function kv(n){let e=ct.modelPieces();if(!e.length||e.length>nr.parts){ti("Compose un mod\xE8le de 1 \xE0 "+nr.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Vp(localStorage);if(t.models.length>=nr.models){ti("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),r=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:k.modelGrab,frozen:k.modelFrozen,collidable:k.modelCollidable,supportWhileHeld:k.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Ky[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(zp,JSON.stringify(ys(t))),ti("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ti("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var im=new Map;function S2(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][k.mapShape-1],e=ko({detail:[8,16,32,48][k.terrainResolution-1],amplitude:(k.terrainAmplitude-1)*.34,frequency:.05+k.terrainFrequency*.025,seed:k.terrainSeed,grass:(k.terrainGrass-1)/9,shrub:(k.terrainShrub-1)/9}),t=k.mapTexture-2;return t>=0&&!im.has(t)&&im.set(t,Fy(t).toDataURL("image/webp",.83)),Ll({...n,material:k.mapMaterial-1,yaw:k.mapShape===5?0:(k.mapTurn-1)*45,...Zp[Object.keys(Zp)[k.mapSurface-1]],texture:im.get(t)??null,terrain:k.mapShape===5||k.mapMode===9?e:null,brushRadius:.5+k.brushRadius*.5,brushStrength:k.brushStrength*.15})}function w2(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ni,s.z).applyAxisAngle(Zt,St).add(gt.position),ur.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(ur).applyAxisAngle(Zt,St),ct.edit(qn,Nn,i,{mode:k.mapMode,piece:S2(),head:It,feet:gt.position.y}),i&&(Bt=!0)}function T2(n){if(!ct.builtIn||!n.valid||n.held||n.remoteHeld||jt)return;let e=null;for(let t of Vr.targets)if(t.getWorldPosition(zv),!(n.mesh.position.distanceToSquared(zv)>.11**2)&&(t.worldToLocal(fd.copy(n.mesh.position)),Math.abs(fd.x)<t.userData.touchWidth*.5+.025&&Math.abs(fd.y)<.095&&Math.abs(fd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function hm(n,e,t){if(!ct.builtIn)return;Ui.set(n,e),Ui.far=5.5;let i=Ui.intersectObjects(Vr.targets,!1);Ui.far=1/0;let r=i[0];r&&(Cs.visible=!0,Cs.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),ia()))}var Gv=new M,D_=new qe,Rm=vh(At),Nd=ky({scene:At,rig:gt,camera:en,arena:wt,objects:yt,spectator:je}),OI=Rm.mesh,Md=new M,cr=new qe,Ld=new M,Qo={mode:0,position:Ld,quaternion:cr,end:Md},Hv=new M,A2=new M,Wv=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Dd=new M,E2={position:Ld,quaternion:cr,pressure:[.1,.66,.08]},rm=new M,Ud=new qe;function Pm(n){Hr.held&&pi(Hr,n)}function U_(n,e){if(je.role==="pc"){ti("Rejoins le salon en joueur pour modifier les objets.");return}if(je.role!=="player"){e();return}je.sendAction({type:"world",mode:3,typeId:n})||ti("Attends la connexion \xE0 l\u2019h\xF4te.")}function Bd(){U_(0,Fd)}function Im(){U_(1,Kl)}function Lm(n,e=null){if(k.objects=!0,je.role==="pc"){ti("Commence par rejoindre le salon en joueur.");return}je.role==="player"?je.sendAction({type:"spawn",typeId:n})||ti("Attends la connexion \xE0 l\u2019h\xF4te."):ta(n,e)}function C2(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(k.timeOfDay=n.typeId+1,Ni()):n.mode===3&&[Fd,Kl][n.typeId]?.();return}if(n.type==="spawn"){a_.includes(n.typeId)&&(k.objects=!0,ta(n.typeId,null,e));return}let t=yt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=ea.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},ea.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?je.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),pi(o,!0)}return}if(!k.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ss.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Hh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Sl(l,t.mesh.position,.01,Gr,c_,u_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Dm(t,s,o,De.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Yl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Yl))}}function R2(n){if(Ze.xr.isPresenting)for(let t of Rt)t.valid&&t.held&&sm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of ea){let r=je.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){pi(i,!1),ea.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ss.copy(s?.position??r.avatar?.tool?.position??r),Ad.set(0,0,-1).applyQuaternion(i.controllerRotation),sm(o,Ss,Ad,i.controllerRotation,n)}let e=Hr.held;e&&(en.getWorldPosition(Dd),en.getWorldDirection(Gv),en.getWorldQuaternion(cr),sm(e,Dd,Gv,cr,n))}function sm(n,e,t,i,r){n.toolHold?rm.copy(e).addScaledVector(t,n.toolDistance):rm.copy(n.offset).applyQuaternion(i).add(e),Ud.multiplyQuaternions(i,n.relativeRotation),$x(n,rm,Ud,Gr,r)}function F_(n){return n.customMaterial||(n.mesh.material=Rl(n.mesh.material),n.customMaterial=!0,ra(n.mesh.material)),n.mesh.material}function P2(n){let e=F_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function N_(n,e,t){Ui.set(n,e),Ui.far=9;let i=Ui.intersectObjects(t,!1)[0];return Ui.far=1/0,Md.copy(n).addScaledVector(e,i?.distance??9),Sl(n,Md,.006,Gr,Hv,A2)?(Md.copy(Hv),null):i}function Dm(n,e,t,i){if(e===1){if(t?.held){t===Hr?Pm(!0):pi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??cr;n.relativeRotation.multiplyQuaternions(D_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();yt.splice(yt.indexOf(n),1)}else if(e===4&&!n.protected){Dd.copy(n.mesh.position).addScaledVector(Zt,n.radius*2+.08);let r=ta(n.netType,Dd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Rl(n.mesh.material),r.customMaterial=!0,ra(r.mesh.material)),wl(r,wt.boxes))}else if(e===5){let r=F_(n),s=Wv[n.paint++%Wv.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,P2(n));Bt=!0}}var Or=[];function B_(n,e,t,i){if(!k.objects)return;let r=je.role==="player";if(Or.length=0,r)je.forEachReplica(a=>Or.push(a));else for(let a of yt)!a.owner&&a.mesh.visible&&Or.push(a.mesh);let s=N_(n,e,Or);if(Qo.mode=k.toolMode,i?(Ld.copy(i.mesh.position),cr.copy(i.controllerRotation)):(en.getWorldQuaternion(cr),Ld.set(.16,-.17,-.43).applyQuaternion(cr).add(n)),Rm.update(Qo),!t)return;if(r){if(k.toolMode===1&&ar)je.sendAction({type:"release",objectId:ar}),ar=0;else if(s){let a=s.object.userData.netId;je.sendAction({type:"tool",mode:k.toolMode,objectId:a})&&k.toolMode===1&&(ar=a)}return}let o=s&&yt.find(a=>a.mesh===s.object);Dm(o,k.toolMode,i??Hr,s?De.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function I2(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;qn.set(o.x,o.y-ni,o.z).applyAxisAngle(Zt,St).add(gt.position),ur.set(a.x,a.y,a.z,a.w),Nn.set(0,0,-1).applyQuaternion(ur).applyAxisAngle(Zt,St),B_(qn,Nn,r,i)}function L2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ni,s.z).applyAxisAngle(Zt,St).add(gt.position),ur.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(ur).applyAxisAngle(Zt,St),hm(qn,Nn,i)}var Cs=XE(At,new mt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Cs.visible=!1;var dm=[],ws=null;function qv(){let n=fn.ctx;dm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+$v,25,42),n.font="20px system-ui",n.fillText(bs+" FPS   \xB7   Q "+sn+"/10   \xB7   "+(k.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",dm.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/Es.length);if(Es.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>p_(l),ht===l?"#586d53":"#334b58")),ht===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(je.caption,25,145,587),n.fillText("Salons publics",25,190),dl.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>je.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>je.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>je.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>je.leave()),e(325,579,287,44,"Fermer",()=>jt=!1),fn.texture.needsUpdate=!0;return}let i=ht>=2&&ht<=4;i&&cm().forEach(([a],l)=>{let c=E_()===l,u=Math.min(144,Math.floor(586/cm().length)-4);e(25+l*(u+4),114,u,38,a,()=>C_(l),c?"#546947":"#263d49")});let r=Sm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));Ri=Math.max(0,Math.min(Ri,o-1)),r.slice(Ri*s,(Ri+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,R_(l),l):typeof k[l]=="boolean"?e(406,u,206,36,A_(l),()=>_n(l,1),k[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>_n(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Cm(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>_n(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Ri=(Ri+o-1)%o,Bt=!0}),e(432,533,180,35,"Suivant",()=>{Ri=(Ri+1)%o,Bt=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Ri+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",T_),e(325,579,287,44,"Fermer",()=>jt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Um||(ht===6?"v "+Kt.length().toFixed(2)+" m/s | g "+ql.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ht===4&&ct.status?ct.status.slice(0,64):Cd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),fn.texture.needsUpdate=!0}function D2(n){jt=!jt,jt&&(Kv=n,bv.set(0,0,-1).applyAxisAngle(Zt,lr),fn.mesh.position.copy(It).addScaledVector(bv,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(It),fn.mesh.updateMatrixWorld(!0)),Bt=!0}function U2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ni,s.z).applyAxisAngle(Zt,St).add(gt.position),ur.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(ur).applyAxisAngle(Zt,St),Ui.set(qn,Nn);let a=Ui.intersectObject(fn.mesh)[0];if(a&&(Cs.visible=!0,Cs.position.copy(a.point).addScaledVector(Nn,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;dm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Bt=!0}}var Od=By(),{held:Ii,pressed:sr}=Od,O_=Gy(Ze.domElement,document.querySelector("#touch-fire")),Xv=document.querySelector("#game-settings"),z_=document.querySelector("#open-settings"),fm=document.querySelector("#game-hint"),bd=0;function ti(n){fm.textContent=n,fm.hidden=!1,bd=performance.now()+2400,Um=n,Bt=!0}var Um="";function zd(n){let e=n??!Xv.hidden;Xv.hidden=e,z_.hidden=!e,e&&Ze.domElement.focus()}z_.onclick=()=>zd(!1);document.querySelector("#close-settings").onclick=()=>zd(!0);var Jl=Ny({canvas:Ze.domElement,enabled:()=>!Ze.xr.isPresenting,onLook:(n,e,t)=>{St-=n*t,As=De.clamp(As-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&sr.add(e)},onMenu:()=>zd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ze.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||zd();return}n.code==="Space"&&n.preventDefault(),Od.down(n.code,n.repeat),n.code==="KeyR"&&hr()}});addEventListener("keyup",n=>Od.up(n.code));addEventListener("blur",()=>{Od.clear(),Jl.clear(),O_.clear()});function F2(n,e){if(!k.objects)return!1;let t=je.role==="player";if(t&&ar)return je.sendAction({type:"release",objectId:ar}),ar=0,!0;if(Hr.held)return Pm(!0),!0;if(Or.length=0,t)je.forEachReplica(r=>Or.push(r));else for(let r of yt)!r.owner&&r.mesh.visible&&Or.push(r.mesh);let i=N_(n,e,Or);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;je.sendAction({type:"hold",objectId:r})&&(ar=r)}else en.getWorldQuaternion(cr),Dm(yt.find(r=>r.mesh===i.object),1,Hr,Math.max(.75,i.distance));return!0}var om=[];function V_(){return om.length=0,je.forEachReplica(n=>{let e=n.userData.netType;if(!Tn[e]||Tn[e].properties?.collidable===!1||n.userData.held)return;let t=Tn[e],i=k.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=k.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},om.push(r)}),om}function N2(){je.role!=="vr"||!je.remoteSpectator||yt.some(n=>n.netType===Ql)||ta(Ql,null,null,!0)}var $l=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{$l.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});$l.onclick=async()=>{let n;kr.unlock();try{$l.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ze.xr.setFramebufferScaleFactor(.45+k.resolution*.055),await Ze.xr.setSession(n),Ni(),Gl=n.frameRate||72,kl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=kl.includes(120)?120:kl.find(t=>t>=100)??kl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Gl=n.frameRate||Gl,xm=Math.min(100,Gl),k.auto&&(sn=Math.min(sn,4),Zo=jo=Jo=0),m_=[],Fi.reset(),yd=0,Hl=0,wm=Tm=mm=0,gm=null,g_=!0,Rd=null,Ts=NaN,ni=0,hr(),Ni(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),$l.disabled=!1,document.querySelector("#status").textContent=e.message}};Ze.xr.addEventListener("sessionend",()=>{$l.disabled=!1,jt=!1,fn.mesh.visible=!1,ei.mesh.visible=!1,document.body.classList.remove("immersive"),hr(),ec()});function k_(n){if(!ct.active){for(let e of wt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ct.active){let e=-1/0,t;for(let i of wt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function Yv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(je.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),jt||!e||n.grip||!k.objects)return;let i=null,r=.15;if(je.forEachReplica(s=>{if(s.userData.held)return;let o=Tn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Hh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;je.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function B2(n,e,t){let i=[...n.session.inputSources];for(let r of Rt){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&k.hands&&!k.body,!o){je.role==="player"&&Yv(r,!1),r.valid=!1,r.surface=null,pi(r,!1);continue}Zy(r,o.transform,ni,St,gt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Ol.copy(r.controllerRotation),jE(r,s.gamepad?.buttons??[],t),je.role==="player")Yv(r,a);else if(!jt&&a&&!r.grip&&k.objects&&!r.held){let h=null,p=.15;for(let x of yt){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let m=Hh(r.target,x);m<p&&(p=m,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Yl.copy(Ol).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Yl),h.relativeRotation.multiplyQuaternions(Yl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&pi(r,!jt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Ud.multiplyQuaternions(Ol,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Ud),$o.copy(l.offset).applyQuaternion(Ol);let h=r.supportOffset.dot($o);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add($o),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(D_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Zt,St):r.aimDirection.set(0,0,-1).applyQuaternion(Ol)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&D2(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!jt&&_n("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&k.toolActive&&!jt&&_n("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if(jt){let h=f&&!r.trigger;(h||!ws||!ws.click&&r.side!==Kv)&&(ws={source:s,click:h})}else!jt&&r.side==="right"&&k.mapEdit?_d={source:s,click:f&&!r.trigger}:!jt&&r.side==="right"&&k.toolActive?vd={source:s,hand:r,click:f&&!r.trigger}:!jt&&!k.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(Wl={source:s,click:f&&!r.trigger});r.trigger=f}}function Zv(n,e){let t=n?-Yo.y:Math.max(0,-Math.sin(As)),i=0,r=0,s=0;if(n){wv.setFromAxisAngle(Zt,-lr);for(let u of Rt)u.valid&&(em.copy(u.gripPosition).sub(It).applyQuaternion(wv),i+=em.x-(u.side==="left"?-.2:.2),r+=em.z+.24,s++)}let o=s?De.clamp(-r/s,-.35,.45):0,a=s?De.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?Ym(t,o):-.31*De.smoothstep(t,.2,.92);or.x=De.lerp(or.x,c,l),or.y=De.lerp(or.y,-a*.62,l),Sv.set(or.x,lr,or.y,"YXZ"),Di.quaternion.setFromEuler(Sv)}function O2(n,e,t,i,r=i){let s=!!t,o=.43+k.size*.088;if(s){let f=t.transform.position;Ts=Xm(Ts,f.y),ni=De.clamp(Ts-o,-.65,1.7),Sd.position.y=-ni,Kn.set(f.x,f.y-ni,f.z);let h=[...n.session.inputSources].find(m=>m.handedness==="right"),p=Gm(h?.gamepad),x=Hm(Qv,p,{menu:jt,allowMenu:k.snapWithMenu});x&&(Fi.record("snap-turn",{direction:x,menu:jt}),vn.copy(Kn).applyAxisAngle(Zt,St),St-=x*Math.PI/4,xv.copy(Kn).applyAxisAngle(Zt,St),gt.position.add(vn.sub(xv)),zr.reset(),gd=!1)}else Sd.position.y=0,Kn.set(0,o,0),en.position.copy(Kn),en.rotation.set(As,0,0,"YXZ");if(It.copy(Kn).applyAxisAngle(Zt,St).add(gt.position),s){let f=t.transform.orientation;xd.set(f.x,f.y,f.z,f.w),Yo.set(0,0,-1).applyQuaternion(xd),Yo.x**2+Yo.z**2>.018&&(lr=St+Math.atan2(-Yo.x,-Yo.z))}else lr=St;let a=k_(It),l=9.81*(k.gravity/5)*(a?.gravity??1);ql=l,vv.copy(gt.position);let c=je.role==="player"?V_():yt;if(s){B2(n,e,r),Zv(!0,r),Rt.some(f=>f.valid)&&Tm++,ud.length=0;for(let f of Gr)ud.push(f);if(k.collisions&&k.objects)for(let f of c)f.handCollider&&!f.owner&&ud.push(f.handCollider);zr.move({head:It,dt:i,inputDt:r,gravity:l,settings:k,boxes:ud,velocity:Kt,movement:Ho,reach:Td()*2+.16});for(let f of Rt)Vy(f,k.stepHaptics,r,.08+k.stepHapticStrength*.04,40)}else{Zv(!1,r),Kt.y-=l*i;let f=Number(Ii.has("KeyD"))-Number(Ii.has("KeyA")||Ii.has("KeyQ"))+Jl.movement.x,h=Number(Ii.has("KeyS"))-Number(Ii.has("KeyW")||Ii.has("KeyZ"))+Jl.movement.z,p=Ii.has("ShiftLeft")||Ii.has("ShiftRight");rr.set(f,0,h).clampLength(0,1).applyAxisAngle(Zt,St).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Pi?13:4));Kt.x=De.lerp(Kt.x,rr.x,x),Kt.z=De.lerp(Kt.z,rr.z,x);let g=(Jl.consumeJump()||sr.delete("Space"))&&Pi,y=Ms.normal,S=!g&&Pi&&y.y>=.62&&(Ms.surface?.friction??0)>=.45;g?Kt.y=3.1+k.jump*.18:S&&(Kt.y=-(Kt.x*y.x+Kt.z*y.z)/y.y),Ho.copy(Kt).multiplyScalar(i),S&&Ho.addScaledVector(y,-l*i*i)}if(k.collisions&&gd&&($o.copy(It).add(Ho),Sl(_v,$o,kE,Gr,vn,Fl)&&rr.subVectors($o,vn).dot(Fl)<0&&(Ho.copy(vn).sub(It),Zm(Kt,Fl))),gt.position.add(Ho),It.copy(Kn).applyAxisAngle(Zt,St).add(gt.position),Pi=!1,Ms.normal.set(0,0,0),Ms.surface=null,k.collisions){ld.set(0,-1,0).applyQuaternion(Di.quaternion),ld.y=0,ld.addScaledVector(ZE.set(0,0,1).applyAxisAngle(Zt,lr),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,Kn.y*.57):Kn.y,{radius:p}=md[f];if(vn.set(It.x,gt.position.y+h,It.z),f<2&&vn.add(jm(s,ld,Math.max(0,Kn.y-h),rr)),yv.copy(vn),Pi=Up(vn,p,wt.boxes,Kt,0,3+k.grip,i,f===0?Ms:null)||Pi,k.objects)for(let x of c)x.blocksPlayer&&!x.owner&&sy(vn,p,x,Kt,Fl)&&Fl.y>.6&&(Pi=!0);Up(vn,p,wt.boxes,Kt,0,3+k.grip,i),rr.subVectors(vn,yv),gt.position.add(rr),It.add(rr);for(let x=0;x<f;x++)md[x].position.add(rr);md[f].position.copy(vn)}}if(Nr.subVectors(gt.position,vv),kr.update({dt:r,inVR:s,hands:Rt,grounded:Pi,travel:Math.hypot(Nr.x,Nr.z),volume:k.stepVolume,enabled:k.stepAudio}),s){let f=zr.finish(Nr,Kt);f.contacts&&wm++,f.launched&&(mm++,gm={handSpeed:f.launchSpeed,velocity:Kt.toArray(),t:performance.now()})}(ct.active?gt.position.y<-24||Math.abs(gt.position.x)>155||Math.abs(gt.position.z)>155:gt.position.y<-9||Math.abs(gt.position.x)>33||gt.position.z<-57||gt.position.z>13)&&(hr(),It.copy(Kn).applyAxisAngle(Zt,St).add(gt.position)),_v.copy(It),gd=!0,gt.rotation.y=St,s&&en.position.set(0,0,0);for(let f of Rt)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Nr,f.surface?0:1),f.gripPosition.add(Nr)),s||(f.mesh.visible=!1);let u=.72+k.size*.05,d=Td()*2*(2/3)/.82;Di.visible=k.body,Li.position.copy(It),s?Li.quaternion.copy(xd).premultiply(ur.setFromAxisAngle(Zt,St)):Li.quaternion.setFromEuler(new nn(As,St,0,"YXZ")),am.set(0,-.145,.045).applyQuaternion(Li.quaternion).add(It),Di.position.set(0,.46*d,.04*u).applyQuaternion(Di.quaternion).negate().add(am),JE(u,d),gt.updateMatrixWorld(!0),en.updateWorldMatrix(!0,!1)}function z2(n,e){if(cd+=n,Kp++,Zo+=n,cd<1||(bs=Math.round(Kp/cd),Kp=0,cd=0,Bt=!0,d2.textContent=bs+" FPS \xB7 qualit\xE9 "+sn+"/10 \xB7 "+(k.auto?"auto":"manuel"),!k.auto||Zo<5))return;Zo=0;let t=e?Math.min(100,Ze.xr.getSession()?.frameRate||Gl):60;e&&(xm=t),jo=bs<t-4?jo+1:0,Jo=bs>=t-1?Jo+1:0;let i=De.clamp(sn+(jo>=1?-1:Jo>=2?1:0),1,10);i!==sn&&(sn=i,Zo=jo=Jo=0,Ni())}wt.bakeLightmap();var G_={value:1},H_={value:1},W_={value:0},Fm={value:0},jv=new WeakSet;function ra(n){if(Array.isArray(n)){for(let i of n)ra(i);return}if(!n||jv.has(n))return;jv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:G_,uPhotoSaturation:H_,uPhotoWarmth:W_,uLabShader:Fm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of wt.materials)ra(n);At.traverse(n=>{n.isMesh&&![fn.mesh,ei.mesh,Cs].includes(n)&&ra(n.material)});Ni();var Jv=new URLSearchParams(location.search);if(Jv.has("map"))ct.loadURL(Jv.get("map"));else try{let n=localStorage.getItem(Dl);n&&ct.load(n)}catch(n){ct.inform(n.message)}function V2(){let n=Ze.xr.isPresenting;return{head:Li.quaternion,hands:n?Rt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,Qo.mode?E2:null],height:Kn.y,armSpan:Td()*2,light:k.timeOfDay-1,color:e_,coconuts:0,tool:Qo.mode?Qo:null,gun:Nd.gun}}Ze.setAnimationLoop((n,e)=>{let t=Qp?Math.max(0,(n-Qp)/1e3):.014;Qp=n;let i=Math.max(1e-4,Math.min(.035,t)),r=je.role?1:Em[k.debugSpeed-1],s=i*r,o=Ze.xr.isPresenting,a=Ze.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(e2(n*.001),bd&&n>bd&&(fm.hidden=!0,bd=0,Um=""),Cs.visible=!1,Rm.hide(),Qo.mode=0,Gr=k.collisions?wt.boxes:GE,ws=null,Wl=null,vd=null,_d=null,ct.clearGhost(),fn.mesh.visible=!1,!o&&je.role==="pc"){Di.visible=!1;for(let y of Rt)y.mesh.visible=!1}else O2(e,a,l,s,i);let c=!o&&je.role==="pc",u=c||je.role==="player";if(je.role!=="player"){ar=0;for(let y of Rt)y.remoteHeld=0}u||(R2(s),N2()),$p=0;for(let y of yt){y.mesh.visible=k.objects&&!u;let{x:S,y:_,z:R}=y.mesh.position;if(qm(y.mesh.position,ct.active)&&(y.owner||Gd(y)),y.shadow.visible=!u&&k.shadows&&Ed()<3&&k.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:C,z:L}=y.mesh.position,w=wt.boxes.find(E=>E.heightfield&&C>=E.xMin&&C<=E.xMax&&L>=E.zMin&&L<=E.zMax),b=w?w.height(C,L):0;y.shadow.position.set(C,b+.006,L)}}if(!u&&k.objects){for(let S of yt)S.beforePhysics.copy(S.mesh.position);let y=performance.now();if(iy(yt,wt.boxes,s,9.81*k.gravity/5,.12+k.bounce*.064,k_),$p=performance.now()-y,ct.builtIn){let S=r2();(S||Vr.target.visible)&&Vr.updateTarget(yt,S)}}if(o&&!jt&&je.role!=="pc")for(let y of Rt)T2(y);if(wt.probe.rotation.y+=s*.29,z2(Math.min(.3,t),o),fn.mesh.visible=o&&jt,fn.mesh.visible&&Bt&&qv(),fn.mesh.visible&&ws)U2(e,a,ws.source,ws.click);else if(o&&_d)w2(e,a,_d);else if(o&&vd)I2(e,a,vd);else if(o&&Wl)L2(e,a,Wl.source,Wl.click);else if(!o&&!c){en.getWorldPosition(qn),en.getWorldDirection(Nn),sr.delete("KeyX")&&_n("blasterActive",1),sr.delete("KeyG")&&(_n("toolActive",1),k.toolActive&&ti("Outil \xB7 "+_s[k.toolMode-1])),sr.delete("KeyT")&&_n("toolMode",1);let y=sr.delete("KeyE");k.toolActive?B_(qn,Nn,y,null):y&&!F2(qn,Nn)?hm(qn,Nn,!0):!y&&!u&&hm(qn,Nn,!1),sr.delete("KeyF")&&(k.objects=!0,Lm(a_[0]))}let d=ei.mesh.visible;if(ei.mesh.visible=o&&!jt&&Rt[0].valid,ei.mesh.visible&&(ei.mesh.position.copy(Rt[0].mesh.position).y+=.12,ei.mesh.lookAt(It)),(Bt||n-Mv>1100||ei.mesh.visible&&!d)&&(Bt=!1,Mv=n,jt&&qv(),ei.mesh.visible)){let y=ei.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(bs+" FPS     Q "+sn+"/10",17,32),y.font="20px system-ui",y.fillText(k.mapEdit?"\xC9dition : "+L_[k.mapMode-1]:k.blasterActive?"Pistolet : maintenir la g\xE2chette":k.toolActive?"Tool Gun : "+_s[k.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ei.texture.needsUpdate=!0}Nd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:St,drop:ni,rightHand:Rt[1],enabled:k.blasterActive&&!c&&!jt&&!k.mapEdit,flatFiring:O_.held||Ii.has("KeyJ")}),je.update({inVR:o,time:n,dt:i,position:It,yaw:c?St:lr,pitch:As,camera:en,rig:gt,keys:Ii,actions:sr,flat:Jl,avatar:V2,bodies:k.objects?yt:Ev,score:Vr.score()}),sr.clear();let f=performance.now();Xo.update({settings:k,boxes:Gr,bodies:u?k.debugHitboxes?V_():Ev:yt,hands:Rt,locomotion:zr,velocity:Kt,head:It,neck:am,body:Di.position,proxies:md,gravity:ql,appliedMove:Nr,playerActive:!c,inVR:o,viewQuaternion:Li.quaternion}),mv=performance.now()-f,!c&&n-Hl>350&&(n_={simulationScale:r,gravity:ql,velocity:Kt.toArray(),grounded:Pi,torsoDegrees:[or.x,or.y].map(De.radToDeg),hands:o?zr.hands.map(({hand:y,normal:S,offset:_})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Qi).applyQuaternion(y.mesh.quaternion).add(y.target).add(Nr).distanceTo(y.gripPosition),palmCenter:vn.copy(Qi).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:vn.copy(y.mesh.position).add(_).toArray(),normal:y.surface?S.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),l2(u),wt.centerShadows(Id);let h=25+(10-Ed())*(o?7:4);Ze.shadowMap.enabled&&n-pv>=h&&(Ze.shadowMap.needsUpdate=!0,pv=n),y2(n,l);let p=performance.now(),x=o&&k.post,m=o&&k.rayTrace;zE(m,yt);let g=k.vrFov/100;if(!x||!OE.render(At,en,{bloom:k.bloom,visibleField:g})){pd.material.uniforms.visibleField.value=g,pd.visible=o&&g<1;try{Ze.render(At,en)}finally{pd.visible=!1}}if(gv=performance.now()-p,Fi.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:$p,debugCpuMs:mv,mirrorCpuMs:um,renderSubmissionCpuMs:gv,objects:yt.length,moving:yt.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:Xo.stats.segments}),n-Hl>350&&(jl.hidden=!(k.debugForces||Xo.stats.truncated),jl.hidden||(jl.textContent="Vitesse joueur : "+Kt.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+ql.toFixed(2)+" m/s\xB2 \xB7 Segments : "+Xo.stats.segments+(Xo.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),m_[yd]=t*1e3,yd=(yd+1)%720,n-Hl>350){Hl=n;let{calls:y,triangles:S,lines:_,points:R}=Ze.info.render;x_={calls:y,triangles:S,lines:_,points:R,textures:Ze.info.memory.textures},o&&(Rd={refreshHz:Ze.xr.getSession()?.frameRate??null,targetFps:xm,supportedHz:kl.slice(),foveation:Ze.xr.getFoveation()??null,visualEffects:{post:x,bloom:x&&k.bloom,rayTrace:m},eyeViewports:Ze.xr.getCamera().cameras.map(P=>({width:P.viewport?.z??null,height:P.viewport?.w??null}))})}});})();
