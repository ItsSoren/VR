(()=>{function Hm(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function Wm(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function qm(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,s={}){t.push({time:new Date().toISOString(),type:i,...s}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let s=i?e.filter(a=>a.mode===i):e,r=a=>s.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=r(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:s.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function ic(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function Xm(n,e){let{x:t,y:i,z:s}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(s)||(e?i<-24||Math.abs(t)>155||Math.abs(s)>155:i<-8||Math.abs(t)>28||s<-57||s>13)}function Ym(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function Zm(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function jm(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function Jm(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ng=0,Lf=1,Bg=2;var sl=1,Og=2,bi=3,ci=0,dn=1,At=2,Ji=0,$s=1,$n=2,Df=3,Uf=4,zg=5,Ms=100,Vg=101,kg=102,Gg=103,Hg=104,Wg=200,qg=201,Xg=202,Yg=203,Nc=204,Bc=205,Zg=206,jg=207,Jg=208,$g=209,Kg=210,Qg=211,e0=212,t0=213,n0=214,fu=0,pu=1,mu=2,Ks=3,gu=4,xu=5,yu=6,vu=7,_u=0,i0=1,s0=2,$i=0,r0=1,o0=2,a0=3,Mu=4,l0=5,c0=6,u0=7;var Ff=300,or=301,ar=302,yo=303,bu=304,rl=306,kn=1e3,_s=1001,Oc=1002,cn=1003,h0=1004;var ol=1005;var un=1006,Su=1007;var Ln=1008;var Wn=1009,Nf=1010,Bf=1011,vo=1012,wu=1013,Ts=1014,fi=1015,Si=1016,Tu=1017,Au=1018,_o=1020,Of=35902,zf=35899,Vf=1021,kf=1022,Dn=1023,Qr=1026,Mo=1027,Eu=1028,Cu=1029,Gf=1030,Ru=1031;var Pu=1033,al=33776,ll=33777,cl=33778,ul=33779,Iu=35840,Lu=35841,Du=35842,Uu=35843,Fu=36196,Nu=37492,Bu=37496,Ou=37808,zu=37809,Vu=37810,ku=37811,Gu=37812,Hu=37813,Wu=37814,qu=37815,Xu=37816,Yu=37817,Zu=37818,ju=37819,Ju=37820,$u=37821,Ku=36492,Qu=36494,eh=36495,th=36283,nh=36284,ih=36285,sh=36286;var wa=2300,zc=2301,Uc=2302,vf=2400,_f=2401,Mf=2402;var d0=3200,f0=3201;var rh=0,p0=1,Ki="",lt="srgb",Qs="srgb-linear",Ta="linear",bt="srgb";var Js=7680;var bf=519,m0=512,g0=513,x0=514,Hf=515,y0=516,v0=517,_0=518,M0=519,Vc=35044,wn=35048;var Wf="300 es",li=2e3,Aa=2001;var qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$m=1234567,_a=Math.PI/180,eo=180/Math.PI;function yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function qf(n,e){return(n%e+e)%e}function G_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function H_(n,e,t){return n!==e?(t-n)/(e-n):0}function Ma(n,e,t){return(1-t)*n+t*e}function W_(n,e,t,i){return Ma(n,e,1-Math.exp(-t*i))}function q_(n,e=1){return e-Math.abs(qf(n,e*2)-e)}function X_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Y_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Z_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function j_(n,e){return n+Math.random()*(e-n)}function J_(n){return n*(.5-Math.random())}function $_(n){n!==void 0&&($m=n);let e=$m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K_(n){return n*_a}function Q_(n){return n*eo}function eM(n){return(n&n-1)===0&&n!==0}function tM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iM(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ue={DEG2RAD:_a,RAD2DEG:eo,generateUUID:yi,clamp:et,euclideanModulo:qf,mapLinear:G_,inverseLerp:H_,lerp:Ma,damp:W_,pingpong:q_,smoothstep:X_,smootherstep:Y_,randInt:Z_,randFloat:j_,randFloatSpread:J_,seededRandom:$_,degToRad:K_,radToDeg:Q_,isPowerOfTwo:eM,ceilPowerOfTwo:tM,floorPowerOfTwo:nM,setQuaternionFromProperEuler:iM,normalize:Mt,denormalize:ai},we=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let C=Math.sqrt(S),A=Math.atan2(C,m*y);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}let _=a*y;if(l=l*g+f*_,c=c*g+h*_,u=u*g+p*_,d=d*g+x*_,g===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Km.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hd=new M,Km=new qe,nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],S=s[4],_=s[7],C=s[2],A=s[5],I=s[8];return r[0]=o*x+a*y+l*C,r[3]=o*g+a*S+l*A,r[6]=o*m+a*_+l*I,r[1]=c*x+u*y+d*C,r[4]=c*g+u*S+d*A,r[7]=c*m+u*_+d*I,r[2]=f*x+h*y+p*C,r[5]=f*g+h*S+p*A,r[8]=f*m+h*_+p*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,p=t*d+i*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wd.makeScale(e,t)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wd=new nt;function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b0(){let n=to("canvas");return n.style.display="block",n}var Qm={};function no(n){n in Qm||(Qm[n]=!0,console.warn(n))}function S0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var eg=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){let n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return no("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return no("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),n}var dt=sM();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Lr,kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lr===void 0&&(Lr=to("canvas")),Lr.width=e.width,Lr.height=e.height;let s=Lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Lr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rM=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qd(s[o].image)):r.push(qd(s[o]))}else r=qd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var oM=0,Xd=new M,gn=class n extends qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_s,s=_s,r=un,o=Ln,a=Dn,l=Wn,c=n.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=yi(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ff;gn.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(h+1)/2,C=(m+1)/2,A=(u+f)/4,I=(d+x)/4,D=(p+g)/4;return S>_&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=I/i):_>C?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=I/r,s=D/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new gn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new io(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Gc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ea=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hc=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),rc.subVectors(this.max,la),Dr.subVectors(e.a,la),Ur.subVectors(e.b,la),Fr.subVectors(e.c,la),ps.subVectors(Ur,Dr),ms.subVectors(Fr,Ur),Xs.subVectors(Dr,Fr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Xs.z,Xs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Xs.z,0,-Xs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Xs.y,Xs.x,0];return!Yd(t,Dr,Ur,Fr,rc)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,Dr,Ur,Fr,rc))?!1:(oc.crossVectors(ps,ms),t=[oc.x,oc.y,oc.z],Yd(t,Dr,Ur,Fr,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new M,new M,new M,new M,new M,new M,new M,new M],si=new M,sc=new tn,Dr=new M,Ur=new M,Fr=new M,ps=new M,ms=new M,Xs=new M,la=new M,rc=new M,oc=new M,Ys=new M;function Yd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ys.fromArray(n,r);let a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var aM=new tn,ca=new M,Zd=new M,jn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):aM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ca,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Zd)),this.expandByPoint(ca.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vi=new M,jd=new M,ac=new M,gs=new M,Jd=new M,lc=new M,$d=new M,er=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){jd.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(jd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=gs.dot(this.direction),l=-gs.dot(ac),c=gs.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jd).addScaledVector(ac,f),h}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){Jd.subVectors(t,e),lc.subVectors(i,e),$d.crossVectors(Jd,lc);let o=this.direction.dot($d),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);let l=a*this.direction.dot(lc.crossVectors(gs,lc));if(l<0)return null;let c=a*this.direction.dot(Jd.cross(gs));if(c<0||l+c>o)return null;let u=-a*gs.dot($d);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,t,i){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),xs.crossVectors(i,zn),xs.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),xs.crossVectors(i,zn)),xs.normalize(),cc.crossVectors(zn,xs),s[0]=xs.x,s[4]=cc.x,s[8]=zn.x,s[1]=xs.y,s[5]=cc.y,s[9]=zn.y,s[2]=xs.z,s[6]=cc.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],S=i[7],_=i[11],C=i[15],A=s[0],I=s[4],D=s[8],w=s[12],b=s[1],E=s[5],F=s[9],N=s[13],O=s[2],q=s[6],H=s[10],j=s[14],B=s[3],re=s[7],ae=s[11],ge=s[15];return r[0]=o*A+a*b+l*O+c*B,r[4]=o*I+a*E+l*q+c*re,r[8]=o*D+a*F+l*H+c*ae,r[12]=o*w+a*N+l*j+c*ge,r[1]=u*A+d*b+f*O+h*B,r[5]=u*I+d*E+f*q+h*re,r[9]=u*D+d*F+f*H+h*ae,r[13]=u*w+d*N+f*j+h*ge,r[2]=p*A+x*b+g*O+m*B,r[6]=p*I+x*E+g*q+m*re,r[10]=p*D+x*F+g*H+m*ae,r[14]=p*w+x*N+g*j+m*ge,r[3]=y*A+S*b+_*O+C*B,r[7]=y*I+S*E+_*q+C*re,r[11]=y*D+S*F+_*H+C*ae,r[15]=y*w+S*N+_*j+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+g*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,S=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,_=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,C=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,A=t*y+i*S+s*_+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=y*I,e[1]=(x*f*r-d*g*r-x*s*h+i*g*h+d*s*m-i*f*m)*I,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*I,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*I,e[4]=S*I,e[5]=(u*g*r-p*f*r+p*s*h-t*g*h-u*s*m+t*f*m)*I,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*I,e[8]=_*I,e[9]=(p*d*r-u*x*r-p*i*h+t*x*h+u*i*m-t*d*m)*I,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*I,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*I,e[12]=C*I,e[13]=(u*x*s-p*d*s+p*i*f-t*x*f-u*i*g+t*d*g)*I,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*I,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,p=r*d,x=o*u,g=o*d,m=a*d,y=l*c,S=l*u,_=l*d,C=i.x,A=i.y,I=i.z;return s[0]=(1-(x+m))*C,s[1]=(h+_)*C,s[2]=(p-S)*C,s[3]=0,s[4]=(h-_)*A,s[5]=(1-(f+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(p+S)*I,s[9]=(g-y)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Nr.set(s[0],s[1],s[2]).length(),o=Nr.set(s[4],s[5],s[6]).length(),a=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let c=1/r,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=li,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===li)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Aa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=li,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===li)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Aa)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Nr=new M,ri=new ct,lM=new M(0,0,0),cM=new M(1,1,1),xs=new M,cc=new M,zn=new M,ng=new ct,ig=new qe,sn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uM=0,sg=new M,Br=new qe,ki=new ct,uc=new M,ua=new M,hM=new M,dM=new qe,rg=new M(1,0,0),og=new M(0,1,0),ag=new M(0,0,1),lg={type:"added"},fM={type:"removed"},Or={type:"childadded",child:null},Kd={type:"childremoved",child:null},Bt=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new M,t=new sn,i=new qe,s=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new nt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(rg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,t){return sg.copy(e).applyQuaternion(this.quaternion),this.position.add(sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uc.copy(e):uc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ua,uc,this.up):ki.lookAt(uc,ua,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(ki),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fM),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new M(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new M,Gi=new M,Qd=new M,Hi=new M,zr=new M,Vr=new M,cg=new M,ef=new M,tf=new M,nf=new M,sf=new ut,rf=new ut,of=new ut,Cn=class n{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Gi.subVectors(i,t),Qd.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Gi),l=oi.dot(Qd),c=Gi.dot(Gi),u=Gi.dot(Qd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return sf.setScalar(0),rf.setScalar(0),of.setScalar(0),sf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sf,r.x),o.addScaledVector(rf,r.y),o.addScaledVector(of,r.z),o}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Gi.subVectors(e,t),oi.cross(Gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),oi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;zr.subVectors(s,i),Vr.subVectors(r,i),ef.subVectors(e,i);let l=zr.dot(ef),c=Vr.dot(ef);if(l<=0&&c<=0)return t.copy(i);tf.subVectors(e,s);let u=zr.dot(tf),d=Vr.dot(tf);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(zr,o);nf.subVectors(e,r);let h=zr.dot(nf),p=Vr.dot(nf);if(p>=0&&h<=p)return t.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Vr,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return cg.subVectors(r,s),a=(d-u)/(d-u+(h-p)),t.copy(s).addScaledVector(cg,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(zr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},hc={h:0,s:0,l:0};function af(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=qf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=af(o,r,e+1/3),this.g=af(o,r,e),this.b=af(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return dt.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=lt){dt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(hc);let i=Ma(ys.h,hc.h,t),s=Ma(ys.s,hc.s,t),r=Ma(ys.l,hc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new De;De.NAMES=w0;var pM=0,Jn=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=$s,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Bc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gt=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var nn=new M,dc=new we,mM=0,ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}};var tr=class extends ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ne=class extends ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},gM=0,Zn=new ct,lf=new Bt,kr=new M,Vn=new tn,ha=new tn,ln=new M,$e=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Ca:tr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Vn.min,ha.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,ha.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(ha.min),Vn.expandByPoint(ha.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),ln.add(kr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new M,l[D]=new M;let c=new M,u=new M,d=new M,f=new we,h=new we,p=new we,x=new M,g=new M;function m(D,w,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,D),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(E),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(E),a[D].add(x),a[w].add(x),a[b].add(x),l[D].add(g),l[w].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,w=y.length;D<w;++D){let b=y[D],E=b.start,F=b.count;for(let N=E,O=E+F;N<O;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new M,_=new M,C=new M,A=new M;function I(D){C.fromBufferAttribute(s,D),A.copy(C);let w=a[D];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),_.crossVectors(A,w);let E=_.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,E)}for(let D=0,w=y.length;D<w;++D){let b=y[D],E=b.start,F=b.count;for(let N=E,O=E+F;N<O;N+=3)I(e.getX(N+0)),I(e.getX(N+1)),I(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,d=new M;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ug=new ct,Zs=new er,fc=new jn,hg=new M,pc=new M,mc=new M,gc=new M,cf=new M,xc=new M,dg=new M,yc=new M,ze=class extends Bt{constructor(e=new $e,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(cf.fromBufferAttribute(d,e),o?xc.addScaledVector(cf,u):xc.addScaledVector(cf.sub(t),u))}t.add(xc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),!(fc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(fc,hg)===null||Zs.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(ug.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,C=S;_<C;_+=3){let A=a.getX(_),I=a.getX(_+1),D=a.getX(_+2);s=vc(this,m,e,i,c,u,d,A,I,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);s=vc(this,o,e,i,c,u,d,y,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,C=S;_<C;_+=3){let A=_,I=_+1,D=_+2;s=vc(this,m,e,i,c,u,d,A,I,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=g,S=g+1,_=g+2;s=vc(this,o,e,i,c,u,d,y,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function xM(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ci,a),l===null)return null;yc.copy(a),yc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(yc);return c<t.near||c>t.far?null:{distance:c,point:yc.clone(),object:n}}function vc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,pc),n.getVertexPosition(l,mc),n.getVertexPosition(c,gc);let u=xM(n,e,t,i,pc,mc,gc,dg);if(u){let d=new M;Cn.getBarycoord(dg,pc,mc,gc,d),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,d,new we)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,d,new we)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,d,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new M,materialIndex:0};Cn.getNormal(pc,mc,gc,f.normal),u.face=f,u.barycoord=d}return u}var Qe=class n extends $e{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(d,2));function p(x,g,m,y,S,_,C,A,I,D,w){let b=_/I,E=C/D,F=_/2,N=C/2,O=A/2,q=I+1,H=D+1,j=0,B=0,re=new M;for(let ae=0;ae<H;ae++){let ge=ae*E-N;for(let se=0;se<q;se++){let be=se*b-F;re[x]=be*y,re[g]=ge*S,re[m]=O,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),d.push(se/I),d.push(1-ae/D),j+=1}}for(let ae=0;ae<D;ae++)for(let ge=0;ge<I;ge++){let se=f+ge+q*ae,be=f+ge+q*(ae+1),ve=f+(ge+1)+q*(ae+1),Me=f+(ge+1)+q*ae;l.push(se,be,Me),l.push(be,ve,Me),B+=6}a.addGroup(h,B,w),h+=B,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=lr(n[t]);for(let s in i)e[s]=i[s]}return e}function yM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var oh={clone:lr,merge:xn},vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ra=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vs=new M,fg=new we,pg=new we,Jt=class extends Ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,fg,pg),t.subVectors(pg,fg)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gr=-90,Hr=1,Wc=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Gr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Gr,Hr,e,t);r.layers=this.layers,this.add(r);let o=new Jt(Gr,Hr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(Gr,Hr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(Gr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Gr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Pa=class extends gn{constructor(e=[],t=or,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ji});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=un),new Wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},_t=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},MM={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ia=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},La=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new M,oo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ao=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,da=new M,qr=new M,Xr=new M,Yr=new we,fa=new we,T0=new ct,_c=new M,pa=new M,Mc=new M,mg=new we,uf=new we,gg=new we,Da=class extends Bt{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new La(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new oo(i,3,0,!1)),Wr.setAttribute("uv",new oo(i,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new we(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),T0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Xr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bc(_c.set(-.5,-.5,0),Xr,o,qr,s,r),bc(pa.set(.5,-.5,0),Xr,o,qr,s,r),bc(Mc.set(.5,.5,0),Xr,o,qr,s,r),mg.set(0,0),uf.set(1,0),gg.set(1,1);let a=e.ray.intersectTriangle(_c,pa,Mc,!1,da);if(a===null&&(bc(pa.set(-.5,.5,0),Xr,o,qr,s,r),uf.set(0,1),a=e.ray.intersectTriangle(_c,Mc,pa,!1,da),a===null))return;let l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||t.push({distance:l,point:da.clone(),uv:Cn.getInterpolation(da,_c,pa,Mc,mg,uf,gg,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bc(n,e,t,i,s,r){Yr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fa.x=r*Yr.x-s*Yr.y,fa.y=s*Yr.x+r*Yr.y):fa.copy(Yr),n.copy(e),n.x+=fa.x,n.y+=fa.y,n.applyMatrix4(T0)}var vi=class extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=cn,u=cn,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lo=class extends ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zr=new ct,xg=new ct,Sc=[],yg=new tn,bM=new ct,ma=new ze,ga=new jn,Ua=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),yg.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(yg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zr),ga.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(i),e.ray.intersectsSphere(ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zr),xg.multiplyMatrices(i,Zr),ma.matrixWorld=xg,ma.raycast(e,Sc);for(let o=0,a=Sc.length;o<a;o++){let l=Sc[o];l.instanceId=r,l.object=this,t.push(l)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,Eu,fi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hf=new M,SM=new M,wM=new nt,En=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hf.subVectors(i,t).cross(SM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wM.getNormalMatrix(e),s=this.coplanarPoint(hf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},js=new jn,TM=new we(.5,.5),wc=new M,co=class{constructor(e=new En,t=new En,i=new En,s=new En,r=new En,o=new En){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],S=r[13],_=r[14],C=r[15];if(s[0].setComponents(c-o,h-u,m-p,C-y).normalize(),s[1].setComponents(c+o,h+u,m+p,C+y).normalize(),s[2].setComponents(c+a,h+d,m+x,C+S).normalize(),s[3].setComponents(c-a,h-d,m-x,C-S).normalize(),i)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,h-f,m-g,C-_).normalize();else if(s[4].setComponents(c-l,h-f,m-g,C-_).normalize(),t===li)s[5].setComponents(c+l,h+f,m+g,C+_).normalize();else if(t===Aa)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);let t=TM.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wc.x=s.normal.x>0?e.max.x:e.min.x,wc.y=s.normal.y>0?e.max.y:e.min.y,wc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _i=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xc=new M,Yc=new M,vg=new ct,xa=new er,Tc=new jn,df=new M,_g=new M,Fa=class extends Bt{constructor(e=new $e,t=new _i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Xc.fromBufferAttribute(t,s-1),Yc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xc.distanceTo(Yc);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;vg.copy(s).invert(),xa.copy(e.ray).applyMatrix4(vg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),S=Ac(this,e,xa,l,m,y,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Ac(this,e,xa,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Ac(this,e,xa,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ac(this,e,xa,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ac(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Xc.fromBufferAttribute(a,s),Yc.fromBufferAttribute(a,r),t.distanceSqToSegment(Xc,Yc,df,_g)>i)return;df.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(df);if(!(c<e.near||c>e.far))return{distance:c,point:_g.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Mg=new M,bg=new M,ir=class extends Fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Mg.fromBufferAttribute(t,s),bg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mg.distanceTo(bg);e.setAttribute("lineDistance",new Ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Na=class extends Fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},uo=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sg=new ct,Sf=new er,Ec=new jn,Cc=new M,Ba=class extends Bt{constructor(e=new $e,t=new uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;Sg.copy(s).invert(),Sf.copy(e.ray).applyMatrix4(Sg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Cc.fromBufferAttribute(d,g),wg(Cc,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Cc.fromBufferAttribute(d,p),wg(Cc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wg(n,e,t,i,s,r,o){let a=Sf.distanceSqToPoint(n);if(a<t){let l=new M;Sf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends gn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oa=class extends gn{constructor(e,t,i=Ts,s,r,o,a=cn,l=cn,c,u=Qr,d=1){if(u!==Qr&&u!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},za=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bs=class n extends $e{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+r,x=s+1,g=new M,m=new M;for(let y=0;y<=p;y++){let S=0,_=0,C=0,A=0;if(y<=i){let w=y/i,b=w*Math.PI/2;_=-u-e*Math.cos(b),C=e*Math.sin(b),A=-e*Math.cos(b),S=w*d}else if(y<=i+r){let w=(y-i)/r;_=-u+w*t,C=e,A=0,S=d+w*f}else{let w=(y-i-r)/i,b=w*Math.PI/2;_=u+e*Math.sin(b),C=e*Math.cos(b),A=e*Math.sin(b),S=d+f+w*d}let I=Math.max(0,Math.min(1,S/h)),D=0;y===0?D=.5/s:y===p&&(D=-.5/s);for(let w=0;w<=s;w++){let b=w/s,E=b*Math.PI*2,F=Math.sin(E),N=Math.cos(E);m.x=-C*N,m.y=_,m.z=C*F,a.push(m.x,m.y,m.z),g.set(-C*N,A,C*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+D,I)}if(y>0){let w=(y-1)*x;for(let b=0;b<s;b++){let E=w+b,F=w+b+1,N=y*x+b,O=y*x+b+1;o.push(E,F,N),o.push(F,O,N)}}}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zt=class n extends $e{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new we;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dt=class n extends $e{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(h,2));function y(){let _=new M,C=new M,A=0,I=(t-e)/i;for(let D=0;D<=r;D++){let w=[],b=D/r,E=b*(t-e)+e;for(let F=0;F<=s;F++){let N=F/s,O=N*l+a,q=Math.sin(O),H=Math.cos(O);C.x=E*q,C.y=-b*i+g,C.z=E*H,d.push(C.x,C.y,C.z),_.set(q,I,H).normalize(),f.push(_.x,_.y,_.z),h.push(N,1-b),w.push(p++)}x.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){let b=x[w][D],E=x[w+1][D],F=x[w+1][D+1],N=x[w][D+1];(e>0||w!==0)&&(u.push(b,E,N),A+=3),(t>0||w!==r-1)&&(u.push(E,F,N),A+=3)}c.addGroup(m,A,0),m+=A}function S(_){let C=p,A=new we,I=new M,D=0,w=_===!0?e:t,b=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*b,0),f.push(0,b,0),h.push(.5,.5),p++;let E=p;for(let F=0;F<=s;F++){let O=F/s*l+a,q=Math.cos(O),H=Math.sin(O);I.x=w*H,I.y=g*b,I.z=w*q,d.push(I.x,I.y,I.z),f.push(0,b,0),A.x=q*.5+.5,A.y=H*.5*b+.5,h.push(A.x,A.y),p++}for(let F=0;F<s;F++){let N=C+F,O=E+F;_===!0?u.push(O,O+1,N):u.push(O+1,O,N),D+=3}c.addGroup(m,D,_===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class n extends Dt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class n extends $e{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new M,_=new M,C=new M;for(let A=0;A<t.length;A+=3)h(t[A+0],S),h(t[A+1],_),h(t[A+2],C),l(S,_,C,y)}function l(y,S,_,C){let A=C+1,I=[];for(let D=0;D<=A;D++){I[D]=[];let w=y.clone().lerp(_,D/A),b=S.clone().lerp(_,D/A),E=A-D;for(let F=0;F<=E;F++)F===0&&D===A?I[D][F]=w:I[D][F]=w.clone().lerp(b,F/E)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){let b=Math.floor(w/2);w%2===0?(f(I[D][b+1]),f(I[D+1][b]),f(I[D][b])):(f(I[D][b+1]),f(I[D+1][b+1]),f(I[D+1][b]))}}function c(y){let S=new M;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function u(){let y=new M;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=g(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(_,1-C)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],C=o[y+4],A=Math.max(S,_,C),I=Math.min(S,_,C);A>.9&&I<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function h(y,S){let _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function p(){let y=new M,S=new M,_=new M,C=new M,A=new we,I=new we,D=new we;for(let w=0,b=0;w<r.length;w+=9,b+=6){y.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),I.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),C.copy(y).add(S).add(_).divideScalar(3);let E=g(C);x(A,b+0,y,E),x(I,b+2,S,E),x(D,b+4,_,E)}}function x(y,S,_,C){C<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,s=[],r=[],o=[],a=new M,l=new ct;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(et(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(et(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fo=class extends Gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zc=class extends fo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Rc=new M,ff=new Zf,pf=new Zf,mf=new Zf,jc=class extends Gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new M){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Rc.subVectors(s[0],s[1]).add(s[0]),c=Rc);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Rc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ff.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),pf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),mf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(ff.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),pf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),mf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(ff.calc(l),pf.calc(l),mf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tg(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function AM(n,e){let t=1-n;return t*t*e}function EM(n,e){return 2*(1-n)*n*e}function CM(n,e){return n*n*e}function ba(n,e,t,i){return AM(n,e)+EM(n,t)+CM(n,i)}function RM(n,e){let t=1-n;return t*t*t*e}function PM(n,e){let t=1-n;return 3*t*t*n*e}function IM(n,e){return 3*(1-n)*n*n*e}function LM(n,e){return n*n*n*e}function Sa(n,e,t,i,s){return RM(n,e)+PM(n,t)+IM(n,i)+LM(n,s)}var Va=class extends Gn{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sa(e,s.x,r.x,o.x,a.x),Sa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Gn{constructor(e=new M,t=new M,i=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sa(e,s.x,r.x,o.x,a.x),Sa(e,s.y,r.y,o.y,a.y),Sa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Gn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends Gn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Gn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Gn{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y),ba(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Tg(a,l.x,c.x,u.x,d.x),Tg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},wf=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:jc,CubicBezierCurve:Va,CubicBezierCurve3:Jc,EllipseCurve:fo,LineCurve:ka,LineCurve3:$c,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Kc,SplineCurve:Ha}),Qc=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wf[s.type]().fromJSON(s))}return this}},Wa=class extends Qc{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ka(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ga(this.currentPoint.clone(),new we(e,t),new we(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Va(this.currentPoint.clone(),new we(e,t),new we(i,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ha(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new fo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ui=class extends Wa{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Wa().fromJSON(s))}return this}};function DM(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=A0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=OM(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return qa(r,o,t,a,l,c,0),o}function A0(n,e,t,i,s){let r;if(s===jM(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ag(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ag(o/i|0,n[o],n[o+1],r);return r&&po(r,r.next)&&(Ya(r),r=r.next),r}function sr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(po(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ya(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&HM(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?FM(n,i,s,r):UM(n)){e.push(l.i,n.i,c.i),Ya(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=NM(sr(n),e),qa(n,e,t,i,s,r,2)):o===2&&BM(n,e,t,i,s,r):qa(sr(n),e,t,i,s,r,1);break}}}function UM(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&va(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function FM(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Tf(h,p,e,t,i),y=Tf(x,g,e,t,i),S=n.prevZ,_=n.nextZ;for(;S&&S.z>=m&&_&&_.z<=y;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&va(a,u,l,d,c,f,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&va(a,u,l,d,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&va(a,u,l,d,c,f,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&va(a,u,l,d,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function NM(n,e){let t=n;do{let i=t.prev,s=t.next.next;!po(i,s)&&C0(i,t,t.next,s)&&Xa(i,s)&&Xa(s,i)&&(e.push(i.i,t.i,s.i),Ya(t),Ya(t.next),t=n=s),t=t.next}while(t!==n);return sr(t)}function BM(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&XM(o,a)){let l=R0(o,a);o=sr(o,o.next),l=sr(l,l.next),qa(o,e,t,i,s,r,0),qa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function OM(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=A0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(qM(c))}s.sort(zM);for(let r=0;r<s.length;r++)t=VM(s[r],t);return t}function zM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function VM(n,e){let t=kM(n,e);if(!t)return e;let i=R0(t,n);return sr(i,i.next),sr(t,t.next)}function kM(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(po(n,t))return t;do{if(po(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&E0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Xa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&GM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function GM(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function HM(n,e,t,i){let s=n;do s.z===0&&(s.z=Tf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,WM(s)}function WM(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Tf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function E0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function va(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&E0(n,e,t,i,s,r,o,a)}function XM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!YM(n,e)&&(Xa(n,e)&&Xa(e,n)&&ZM(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||po(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function po(n,e){return n.x===e.x&&n.y===e.y}function C0(n,e,t,i){let s=Ic(Wt(n,e,t)),r=Ic(Wt(n,e,i)),o=Ic(Wt(t,i,n)),a=Ic(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&Pc(n,t,e)||r===0&&Pc(n,i,e)||o===0&&Pc(t,n,i)||a===0&&Pc(t,e,i))}function Pc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ic(n){return n>0?1:n<0?-1:0}function YM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&C0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Xa(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function ZM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function R0(n,e){let t=Af(n.i,n.x,n.y),i=Af(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ag(n,e,t,i){let s=Af(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ya(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Af(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ef=class{static triangulate(e,t,i=2){return DM(e,t,i)}},xi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Eg(e),Cg(i,e);let o=e.length;t.forEach(Eg);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cg(i,t[l]);let a=Ef.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Yi=class n extends $e{constructor(e=new ui([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:JM,S,_=!1,C,A,I,D;m&&(S=m.getSpacedPoints(u),_=!0,f=!1,C=m.computeFrenetFrames(u,!1),A=new M,I=new M,D=new M),f||(g=0,h=0,p=0,x=0);let w=a.extractPoints(c),b=w.shape,E=w.holes;if(!xi.isClockWise(b)){b=b.reverse();for(let G=0,J=E.length;G<J;G++){let Y=E[G];xi.isClockWise(Y)&&(E[G]=Y.reverse())}}function N(G){let Y=10000000000000001e-36,U=G[0];for(let Z=1;Z<=G.length;Z++){let V=Z%G.length,K=G[V],le=K.x-U.x,he=K.y-U.y,R=le*le+he*he,v=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(U.x),Math.abs(U.y)),L=Y*v*v;if(R<=L){G.splice(V,1),Z--;continue}U=K}}N(b),E.forEach(N);let O=E.length,q=b;for(let G=0;G<O;G++){let J=E[G];b=b.concat(J)}function H(G,J,Y){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(J,Y)}let j=b.length;function B(G,J,Y){let U,Z,V,K=G.x-J.x,le=G.y-J.y,he=Y.x-G.x,R=Y.y-G.y,v=K*K+le*le,L=K*R-le*he;if(Math.abs(L)>Number.EPSILON){let W=Math.sqrt(v),oe=Math.sqrt(he*he+R*R),$=J.x-le/W,xe=J.y+K/W,pe=Y.x-R/oe,Se=Y.y+he/oe,_e=((pe-$)*R-(Se-xe)*he)/(K*R-le*he);U=$+K*_e-G.x,Z=xe+le*_e-G.y;let de=U*U+Z*Z;if(de<=2)return new we(U,Z);V=Math.sqrt(de/2)}else{let W=!1;K>Number.EPSILON?he>Number.EPSILON&&(W=!0):K<-Number.EPSILON?he<-Number.EPSILON&&(W=!0):Math.sign(le)===Math.sign(R)&&(W=!0),W?(U=-le,Z=K,V=Math.sqrt(v)):(U=K,Z=le,V=Math.sqrt(v/2))}return new we(U/V,Z/V)}let re=[];for(let G=0,J=q.length,Y=J-1,U=G+1;G<J;G++,Y++,U++)Y===J&&(Y=0),U===J&&(U=0),re[G]=B(q[G],q[Y],q[U]);let ae=[],ge,se=re.concat();for(let G=0,J=O;G<J;G++){let Y=E[G];ge=[];for(let U=0,Z=Y.length,V=Z-1,K=U+1;U<Z;U++,V++,K++)V===Z&&(V=0),K===Z&&(K=0),ge[U]=B(Y[U],Y[V],Y[K]);ae.push(ge),se=se.concat(ge)}let be;if(g===0)be=xi.triangulateShape(q,E);else{let G=[],J=[];for(let Y=0;Y<g;Y++){let U=Y/g,Z=h*Math.cos(U*Math.PI/2),V=p*Math.sin(U*Math.PI/2)+x;for(let K=0,le=q.length;K<le;K++){let he=H(q[K],re[K],V);Ee(he.x,he.y,-Z),U===0&&G.push(he)}for(let K=0,le=O;K<le;K++){let he=E[K];ge=ae[K];let R=[];for(let v=0,L=he.length;v<L;v++){let W=H(he[v],ge[v],V);Ee(W.x,W.y,-Z),U===0&&R.push(W)}U===0&&J.push(R)}}be=xi.triangulateShape(G,J)}let ve=be.length,Me=p+x;for(let G=0;G<j;G++){let J=f?H(b[G],se[G],Me):b[G];_?(I.copy(C.normals[0]).multiplyScalar(J.x),A.copy(C.binormals[0]).multiplyScalar(J.y),D.copy(S[0]).add(I).add(A),Ee(D.x,D.y,D.z)):Ee(J.x,J.y,0)}for(let G=1;G<=u;G++)for(let J=0;J<j;J++){let Y=f?H(b[J],se[J],Me):b[J];_?(I.copy(C.normals[G]).multiplyScalar(Y.x),A.copy(C.binormals[G]).multiplyScalar(Y.y),D.copy(S[G]).add(I).add(A),Ee(D.x,D.y,D.z)):Ee(Y.x,Y.y,d/u*G)}for(let G=g-1;G>=0;G--){let J=G/g,Y=h*Math.cos(J*Math.PI/2),U=p*Math.sin(J*Math.PI/2)+x;for(let Z=0,V=q.length;Z<V;Z++){let K=H(q[Z],re[Z],U);Ee(K.x,K.y,d+Y)}for(let Z=0,V=E.length;Z<V;Z++){let K=E[Z];ge=ae[Z];for(let le=0,he=K.length;le<he;le++){let R=H(K[le],ge[le],U);_?Ee(R.x,R.y+S[u-1].y,S[u-1].x+Y):Ee(R.x,R.y,d+Y)}}}te(),ie();function te(){let G=s.length/3;if(f){let J=0,Y=j*J;for(let U=0;U<ve;U++){let Z=be[U];z(Z[2]+Y,Z[1]+Y,Z[0]+Y)}J=u+g*2,Y=j*J;for(let U=0;U<ve;U++){let Z=be[U];z(Z[0]+Y,Z[1]+Y,Z[2]+Y)}}else{for(let J=0;J<ve;J++){let Y=be[J];z(Y[2],Y[1],Y[0])}for(let J=0;J<ve;J++){let Y=be[J];z(Y[0]+j*u,Y[1]+j*u,Y[2]+j*u)}}i.addGroup(G,s.length/3-G,0)}function ie(){let G=s.length/3,J=0;me(q,J),J+=q.length;for(let Y=0,U=E.length;Y<U;Y++){let Z=E[Y];me(Z,J),J+=Z.length}i.addGroup(G,s.length/3-G,1)}function me(G,J){let Y=G.length;for(;--Y>=0;){let U=Y,Z=Y-1;Z<0&&(Z=G.length-1);for(let V=0,K=u+g*2;V<K;V++){let le=j*V,he=j*(V+1),R=J+U+le,v=J+Z+le,L=J+Z+he,W=J+U+he;ee(R,v,L,W)}}}function Ee(G,J,Y){l.push(G),l.push(J),l.push(Y)}function z(G,J,Y){fe(G),fe(J),fe(Y);let U=s.length/3,Z=y.generateTopUV(i,s,U-3,U-2,U-1);T(Z[0]),T(Z[1]),T(Z[2])}function ee(G,J,Y,U){fe(G),fe(J),fe(U),fe(J),fe(Y),fe(U);let Z=s.length/3,V=y.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);T(V[0]),T(V[1]),T(V[3]),T(V[1]),T(V[2]),T(V[3])}function fe(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function T(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return $M(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wf[s.type]().fromJSON(s)),new n(i,e.options)}},JM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new we(r,o),new we(a,l),new we(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],h=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-d),new we(f,1-p),new we(x,1-m)]:[new we(a,1-l),new we(u,1-d),new we(h,1-p),new we(g,1-m)]}};function $M(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rt=class n extends ho{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Za=class n extends $e{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new M,f=new we,h=new M,p=new M,x=new M,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let S=i+y*u*s,_=Math.sin(S),C=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*_,d.y=e[A].y,d.z=e[A].x*C,o.push(d.x,d.y,d.z),f.x=y/t,f.y=A/(e.length-1),a.push(f.x,f.y);let I=l[3*A+0]*_,D=l[3*A+1],w=l[3*A+0]*C;c.push(I,D,w)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,C=_,A=_+e.length,I=_+e.length+1,D=_+1;r.push(C,A,D),r.push(I,D,A)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},hi=class n extends ho{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qt=class n extends $e{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*f-o;for(let S=0;S<c;S++){let _=S*d-r;p.push(_,-y,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let S=y+c*m,_=y+c*(m+1),C=y+1+c*(m+1),A=y+1+c*m;h.push(S,_,A),h.push(_,C,A)}this.setIndex(h),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mo=class n extends $e{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/s,h=new M,p=new we;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,S=y,_=y+i+1,C=y+i+2,A=y+1;a.push(S,_,A),a.push(_,C,A)}}this.setIndex(a),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ja=class n extends $e{constructor(e=new ui([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function c(u){let d=s.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;xi.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];xi.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=xi.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];h=h.concat(y)}for(let g=0,m=h.length;g<m;g++){let y=h[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],S=y[0]+d,_=y[1]+d,C=y[2]+d;i.push(S,_,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return KM(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function KM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var In=class n extends $e{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new M,f=new M,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],S=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+S*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(A+_,1-S),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let S=u[m][y+1],_=u[m][y],C=u[m+1][y],A=u[m+1][y+1];(m!==0||o>0)&&h.push(S,_,A),(m!==i-1||l<Math.PI)&&h.push(_,C,A)}this.setIndex(h),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ja=class n extends ho{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},di=class n extends $e{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,d=new M,f=new M;for(let h=0;h<=i;h++)for(let p=0;p<=s;p++){let x=p/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=s;p++){let x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,y=(s+1)*h+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zi=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new M,r=new M;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Rg(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Rg(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var pt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$a=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pt=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},eu=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tu=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function QM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vf,endingEnd:vf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:r=e,a=2*t-i;break;case Mf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,l=2*i-t;break;case Mf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,S=(-1-h)*g+(1.5+h)*x+.5*p,_=h*g-h*x;for(let C=0;C!==a;++C)r[C]=m*o[u+C]+y*o[c+C]+S*o[l+C]+_*o[d+C];return r}},iu=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},su=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lc(t,this.TimeBufferType),this.values=Lc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lc(e.times,Array),values:Lc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case zc:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&QM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=zc;var Ss=class extends Hn{constructor(e,t,i){super(e,t,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=wa;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};ru.prototype.ValueTypeName="color";var ou=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};ou.prototype.ValueTypeName="number";var au=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ka=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Hn{constructor(e,t,i){super(e,t,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=wa;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};lu.prototype.ValueTypeName="vector";var Fc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},cu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},P0=new cu,go=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=new WeakMap,uu=class extends go{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=jr.get(o);d===void 0&&(d=[],jr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=to("img");function l(){u(),t&&t(this);let d=jr.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}jr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Fc.remove(`image:${e}`);let f=jr.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Mi=class extends go{constructor(e){super(e)}load(e,t,i,s){let r=new gn,o=new uu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},xo=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qa=class extends xo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gf=new ct,Pg=new M,Ig=new M,hu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pg),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),gf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Lg=new ct,ya=new M,xf=new M,Cf=class extends hu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),xf.copy(i.position),xf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xf),i.updateMatrixWorld(),s.makeTranslation(-ya.x,-ya.y,-ya.z),Lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lg,i.coordinateSystem,i.reversedDepth)}},el=class extends xo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tl=class extends Ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rf=class extends hu{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Rf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var du=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jf="\\[\\]\\.:\\/",eb=new RegExp("["+jf+"]","g"),Jf="[^"+jf+"]",tb="[^"+jf.replace("\\.","")+"]",nb=/((?:WC+[\/:])*)/.source.replace("WC",Jf),ib=/(WCOD+)?/.source.replace("WCOD",tb),sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),ob=new RegExp("^"+nb+ib+sb+rb+"$"),ab=["material","materials","bones","map"],Pf=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eb,"")}static parseTrackName(e){let t=ob.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ab.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Pf;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U2=new Float32Array(1);var Dg=new ct,ji=class{constructor(e,t,i=0,s=1/0){this.ray=new er(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dg),this}intersectObject(e,t=!0,i=[]){return If(e,this,i,t),i.sort(Ug),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)If(e[s],this,i,t);return i.sort(Ug),i}};function Ug(n,e){return n.distance-e.distance}function If(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)If(r[o],e,t,!0)}}var Fg=new M,Dc=new M,Jr=new M,$r=new M,yf=new M,lb=new M,cb=new M,il=class{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fg.subVectors(e,this.start),Dc.subVectors(this.end,this.start);let i=Dc.dot(Dc),r=Dc.dot(Fg)/i;return t&&(r=et(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=lb,i=cb){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,u=e.end;Jr.subVectors(c,a),$r.subVectors(u,l),yf.subVectors(a,l);let d=Jr.dot(Jr),f=$r.dot($r),h=$r.dot(yf);if(d<=s&&f<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,o=h/f,o=et(o,0,1);else{let p=Jr.dot(yf);if(f<=s)o=0,r=et(-p/d,0,1);else{let x=Jr.dot($r),g=d*f-x*x;g!==0?r=et((x*h-p*f)/g,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=et(-p/d,0,1)):o>1&&(o=1,r=et((x-p)/d,0,1))}}return t.copy(a).add(Jr.multiplyScalar(r)),i.copy(l).add($r.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function $f(n,e,t,i){let s=ub(i);switch(t){case Vf:return n*e;case Eu:return n*e/s.components*s.byteLength;case Cu:return n*e/s.components*s.byteLength;case Gf:return n*e*2/s.components*s.byteLength;case Ru:return n*e*2/s.components*s.byteLength;case kf:return n*e*3/s.components*s.byteLength;case Dn:return n*e*4/s.components*s.byteLength;case Pu:return n*e*4/s.components*s.byteLength;case al:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Uu:return Math.max(n,16)*Math.max(e,8)/4;case Iu:case Du:return Math.max(n,8)*Math.max(e,8)/2;case Fu:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $u:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ku:case Qu:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ih:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ub(n){switch(n){case Wn:case Nf:return{byteLength:1,components:1};case vo:case Bf:case Si:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case Ts:case wu:case fi:return{byteLength:4,components:1};case Of:case zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
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
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,p1=`struct PhysicalMaterial {
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
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
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
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
}`,bS=`#if DEPTH_PACKING == 3200
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
}`,SS=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`uniform float scale;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,IS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,DS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,NS=`#define NORMAL
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
}`,BS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,GS=`#define TOON
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
}`,HS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,XS=`uniform vec3 color;
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
}`,YS=`uniform float rotation;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:gb,alphahash_pars_fragment:xb,alphamap_fragment:yb,alphamap_pars_fragment:vb,alphatest_fragment:_b,alphatest_pars_fragment:Mb,aomap_fragment:bb,aomap_pars_fragment:Sb,batching_pars_vertex:wb,batching_vertex:Tb,begin_vertex:Ab,beginnormal_vertex:Eb,bsdfs:Cb,iridescence_fragment:Rb,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Ub,color_fragment:Fb,color_pars_fragment:Nb,color_pars_vertex:Bb,color_vertex:Ob,common:zb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:kb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Hb,emissivemap_fragment:Wb,emissivemap_pars_fragment:qb,colorspace_fragment:Xb,colorspace_pars_fragment:Yb,envmap_fragment:Zb,envmap_common_pars_fragment:jb,envmap_pars_fragment:Jb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:l1,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:a1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:f1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:x1,logdepthbuf_fragment:y1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:M1,map_fragment:b1,map_pars_fragment:S1,map_particle_fragment:w1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:E1,morphinstance_vertex:C1,morphcolor_vertex:R1,morphnormal_vertex:P1,morphtarget_pars_vertex:I1,morphtarget_vertex:L1,normal_fragment_begin:D1,normal_fragment_maps:U1,normal_pars_fragment:F1,normal_pars_vertex:N1,normal_vertex:B1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:G1,opaque_fragment:H1,packing:W1,premultiplied_alpha_fragment:q1,project_vertex:X1,dithering_fragment:Y1,dithering_pars_fragment:Z1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:sS,specularmap_fragment:rS,specularmap_pars_fragment:oS,tonemapping_fragment:aS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:hS,uv_pars_vertex:dS,uv_vertex:fS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:xS,backgroundCube_frag:yS,cube_vert:vS,cube_frag:_S,depth_vert:MS,depth_frag:bS,distanceRGBA_vert:SS,distanceRGBA_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:ES,linedashed_frag:CS,meshbasic_vert:RS,meshbasic_frag:PS,meshlambert_vert:IS,meshlambert_frag:LS,meshmatcap_vert:DS,meshmatcap_frag:US,meshnormal_vert:FS,meshnormal_frag:NS,meshphong_vert:BS,meshphong_frag:OS,meshphysical_vert:zS,meshphysical_frag:VS,meshtoon_vert:kS,meshtoon_frag:GS,points_vert:HS,points_frag:WS,shadow_vert:qS,shadow_frag:XS,sprite_vert:YS,sprite_frag:ZS},Fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},wi={basic:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:xn([Fe.points,Fe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:xn([Fe.common,Fe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:xn([Fe.sprite,Fe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:xn([Fe.lights,Fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};wi.physical={uniforms:xn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ah={r:0,b:0,g:0},cr=new sn,jS=new ct;function JS(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,d=null,f=0,h=null;function p(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function x(S){let _=!1,C=p(S);C===null?m(a,l):C&&C.isColor&&(m(C,1),_=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,_){let C=p(_);C&&(C.isCubeTexture||C.mapping===rl)?(u===void 0&&(u=new ze(new Qe(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:lr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(cr)),u.material.toneMapped=dt.getTransfer(C.colorSpace)!==bt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ze(new qt(2,2),new hn({name:"BackgroundMaterial",uniforms:lr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,_){S.getRGB(ah,Yf(n)),i.buffers.color.setClear(ah.r,ah.g,ah.b,_,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:x,addToRenderList:g,dispose:y}}function $S(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,E,F,N,O){let q=!1,H=d(N,F,E);r!==H&&(r=H,c(r.object)),q=h(b,N,F,O),q&&p(b,N,F,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(b,E,F,N),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,E,F){let N=F.wireframe===!0,O=i[b.id];O===void 0&&(O={},i[b.id]=O);let q=O[E.id];q===void 0&&(q={},O[E.id]=q);let H=q[N];return H===void 0&&(H=f(l()),q[N]=H),H}function f(b){let E=[],F=[],N=[];for(let O=0;O<t;O++)E[O]=0,F[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:F,attributeDivisors:N,object:b,attributes:{},index:null}}function h(b,E,F,N){let O=r.attributes,q=E.attributes,H=0,j=F.getAttributes();for(let B in j)if(j[B].location>=0){let ae=O[B],ge=q[B];if(ge===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function p(b,E,F,N){let O={},q=E.attributes,H=0,j=F.getAttributes();for(let B in j)if(j[B].location>=0){let ae=q[B];ae===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));let ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),O[B]=ge,H++}r.attributes=O,r.attributesNum=H,r.index=N}function x(){let b=r.newAttributes;for(let E=0,F=b.length;E<F;E++)b[E]=0}function g(b){m(b,0)}function m(b,E){let F=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;F[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),O[b]!==E&&(n.vertexAttribDivisor(b,E),O[b]=E)}function y(){let b=r.newAttributes,E=r.enabledAttributes;for(let F=0,N=E.length;F<N;F++)E[F]!==b[F]&&(n.disableVertexAttribArray(F),E[F]=0)}function S(b,E,F,N,O,q,H){H===!0?n.vertexAttribIPointer(b,E,F,O,q):n.vertexAttribPointer(b,E,F,N,O,q)}function _(b,E,F,N){x();let O=N.attributes,q=F.getAttributes(),H=E.defaultAttributeValues;for(let j in q){let B=q[j];if(B.location>=0){let re=O[j];if(re===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let ae=re.normalized,ge=re.itemSize,se=e.get(re);if(se===void 0)continue;let be=se.buffer,ve=se.type,Me=se.bytesPerElement,te=ve===n.INT||ve===n.UNSIGNED_INT||re.gpuType===wu;if(re.isInterleavedBufferAttribute){let ie=re.data,me=ie.stride,Ee=re.offset;if(ie.isInstancedInterleavedBuffer){for(let z=0;z<B.locationSize;z++)m(B.location+z,ie.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let z=0;z<B.locationSize;z++)g(B.location+z);n.bindBuffer(n.ARRAY_BUFFER,be);for(let z=0;z<B.locationSize;z++)S(B.location+z,ge/B.locationSize,ve,ae,me*Me,(Ee+ge/B.locationSize*z)*Me,te)}else{if(re.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie,re.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ie=0;ie<B.locationSize;ie++)g(B.location+ie);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ie=0;ie<B.locationSize;ie++)S(B.location+ie,ge/B.locationSize,ve,ae,ge*Me,ge/B.locationSize*ie*Me,te)}}else if(H!==void 0){let ae=H[j];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(B.location,ae);break;case 3:n.vertexAttrib3fv(B.location,ae);break;case 4:n.vertexAttrib4fv(B.location,ae);break;default:n.vertexAttrib1fv(B.location,ae)}}}}y()}function C(){D();for(let b in i){let E=i[b];for(let F in E){let N=E[F];for(let O in N)u(N[O].object),delete N[O];delete E[F]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let E=i[b.id];for(let F in E){let N=E[F];for(let O in N)u(N[O].object),delete N[O];delete E[F]}delete i[b.id]}function I(b){for(let E in i){let F=i[E];if(F[b.id]===void 0)continue;let N=F[b.id];for(let O in N)u(N[O].object),delete N[O];delete F[b.id]}}function D(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function KS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function QS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Dn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fi&&!D)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function ew(n){let e=this,t=null,i=0,s=!1,r=!1,o=new En,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let y=r?0:i,S=y*4,_=m.clippingState||null;l.value=_,_=u(p,f,S,h);for(let C=0;C!==S;++C)_[C]=t[C];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,_=h;S!==x;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function tw(n){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=or:a===bu&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yo||a===bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var So=4,I0=[.125,.215,.35,.446,.526,.582],dr=20,Kf=new tl,L0=new De,Qf=null,ep=0,tp=0,np=!1,hr=(1+Math.sqrt(5))/2,bo=1/hr,D0=[new M(-hr,bo,0),new M(hr,bo,0),new M(-bo,0,hr),new M(bo,0,hr),new M(0,hr,-bo),new M(0,hr,bo),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],nw=new M,To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=nw}=r;Qf=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qf,ep,tp),this._renderer.xr.enabled=np,e.scissorTest=!1,lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qf=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Si,format:Dn,colorSpace:Qs,depthBuffer:!1},s=U0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iw(r)),this._blurMaterial=sw(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Kf)}_sceneToCubeUV(e,t,i,s,r){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(L0),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new gt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new ze(new Qe,x),m=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,m=!0):(x.color.copy(L0),m=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let C=this._cubeSize;lh(s,_*C,S>2?C:0,C,C),d.setRenderTarget(s),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;lh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=D0[(s-r-1)%D0.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ze(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*dr-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):dr;g>dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${dr}`);let m=[],y=0;for(let I=0;I<dr;++I){let D=I/x,w=Math.exp(-D*D/2);m.push(w),I===0?y+=w:I<g&&(y+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-i;let _=this._sizeLods[s],C=3*_*(s>S-So?s-S+So:0),A=4*(this._cubeSize-_);lh(t,C,A,3*_,2*_),l.setRenderTarget(t),l.render(d,Kf)}};function iw(n){let e=[],t=[],i=[],s=n,r=n-So+1+I0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-So?l=I0[o-n+So-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*h),S=new Float32Array(g*p*h),_=new Float32Array(m*p*h);for(let A=0;A<h;A++){let I=A%3*2/3-1,D=A>2?0:-1,w=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];y.set(w,x*p*A),S.set(f,g*p*A);let b=[A,A,A,A,A,A];_.set(b,m*p*A)}let C=new $e;C.setAttribute("position",new ft(y,x)),C.setAttribute("uv",new ft(S,g)),C.setAttribute("faceIndex",new ft(_,m)),e.push(C),s>So&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function U0(n,e,t){let i=new Rn(n,e,t);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lh(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sw(n,e,t){let i=new Float32Array(dr),s=new M(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dp(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function F0(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function N0(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function rw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===yo||l===bu,u=l===or||l===ar;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new To(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new To(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ow(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&no("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function aw(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let S=0,_=y.length;S<_;S+=3){let C=y[S+0],A=y[S+1],I=y[S+2];f.push(C,A,A,I,I,C)}}else if(p!==void 0){let y=p.array;x=p.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let C=S+0,A=S+1,I=S+2;f.push(C,A,A,I,I,C)}}else return;let g=new(Xf(f)?Ca:tr)(f,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lw(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*x[y];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uw(n,e,t){let i=new WeakMap,s=new ut;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;h===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*C*4*d),I=new Ea(A,_,C,d);I.type=fi,I.needsUpdate=!0;let D=S*4;for(let b=0;b<d;b++){let E=g[b],F=m[b],N=y[b],O=_*C*4*b;for(let q=0;q<E.count;q++){let H=q*D;h===!0&&(s.fromBufferAttribute(E,q),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),p===!0&&(s.fromBufferAttribute(F,q),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),x===!0&&(s.fromBufferAttribute(N,q),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=N.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new we(_,C)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hw(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var tx=new gn,B0=new Oa(1,1),nx=new Ea,ix=new Hc,sx=new Pa,O0=[],z0=[],V0=new Float32Array(16),k0=new Float32Array(9),G0=new Float32Array(4);function Ao(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=O0[s];if(r===void 0&&(r=new Float32Array(s),O0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hh(n,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function pw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function gw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;G0.set(i),n.uniformMatrix2fv(this.addr,!1,G0),an(t,i)}}function xw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;k0.set(i),n.uniformMatrix3fv(this.addr,!1,k0),an(t,i)}}function yw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;V0.set(i),n.uniformMatrix4fv(this.addr,!1,V0),an(t,i)}}function vw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _w(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function Mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function bw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function Sw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function Tw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function Aw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function Ew(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(B0.compareFunction=Hf,r=B0):r=tx,t.setTexture2D(e||r,s)}function Cw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ix,s)}function Rw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sx,s)}function Pw(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nx,s)}function Iw(n){switch(n){case 5126:return dw;case 35664:return fw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return vw;case 35667:case 35671:return _w;case 35668:case 35672:return Mw;case 35669:case 35673:return bw;case 5125:return Sw;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Pw}}function Lw(n,e){n.uniform1fv(this.addr,e)}function Dw(n,e){let t=Ao(e,this.size,2);n.uniform2fv(this.addr,t)}function Uw(n,e){let t=Ao(e,this.size,3);n.uniform3fv(this.addr,t)}function Fw(n,e){let t=Ao(e,this.size,4);n.uniform4fv(this.addr,t)}function Nw(n,e){let t=Ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bw(n,e){let t=Ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ow(n,e){let t=Ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zw(n,e){n.uniform1iv(this.addr,e)}function Vw(n,e){n.uniform2iv(this.addr,e)}function kw(n,e){n.uniform3iv(this.addr,e)}function Gw(n,e){n.uniform4iv(this.addr,e)}function Hw(n,e){n.uniform1uiv(this.addr,e)}function Ww(n,e){n.uniform2uiv(this.addr,e)}function qw(n,e){n.uniform3uiv(this.addr,e)}function Xw(n,e){n.uniform4uiv(this.addr,e)}function Yw(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||tx,r[o])}function Zw(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ix,r[o])}function jw(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sx,r[o])}function Jw(n,e,t){let i=this.cache,s=e.length,r=hh(t,s);on(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nx,r[o])}function $w(n){switch(n){case 5126:return Lw;case 35664:return Dw;case 35665:return Uw;case 35666:return Fw;case 35674:return Nw;case 35675:return Bw;case 35676:return Ow;case 5124:case 35670:return zw;case 35667:case 35671:return Vw;case 35668:case 35672:return kw;case 35669:case 35673:return Gw;case 5125:return Hw;case 36294:return Ww;case 36295:return qw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Jw}}var sp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iw(t.type)}},rp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$w(t.type)}},op=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ip=/(\w+)(\])?(\[|\.)?/g;function H0(n,e){n.seq.push(e),n.map[e.id]=e}function Kw(n,e,t){let i=n.name,s=i.length;for(ip.lastIndex=0;;){let r=ip.exec(i),o=ip.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){H0(t,c===void 0?new sp(a,n,e):new rp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new op(a),H0(t,d)),t=d}}}var wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Kw(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function W0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Qw=37297,eT=0;function tT(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var q0=new nt;function nT(n){dt._getMatrix(q0,dt.workingColorSpace,n);let e=`mat3( ${q0.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Ta:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function X0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tT(n.getShaderSource(e),a)}else return r}function iT(n,e){let t=nT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sT(n,e){let t;switch(e){case r0:t="Linear";break;case o0:t="Reinhard";break;case a0:t="Cineon";break;case Mu:t="ACESFilmic";break;case c0:t="AgX";break;case u0:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new M;function rT(){dt.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function aT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hl(n){return n!==""}function Y0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(cT,hT)}var uT=new Map;function hT(n,e){let t=rt[e];if(t===void 0){let i=uT.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}var dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j0(n){return n.replace(dT,fT)}function fT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function J0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case i0:e="ENVMAP_BLENDING_MIX";break;case s0:e="ENVMAP_BLENDING_ADD";break}return e}function yT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vT(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pT(t),c=mT(t),u=gT(t),d=xT(t),f=yT(t),h=oT(t),p=aT(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hl).join(`
`),m.length>0&&(m+=`
`)):(g=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),m=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?rt.tonemapping_pars_fragment:"",t.toneMapping!==$i?sT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hl).join(`
`)),o=ap(o),o=Y0(o,t),o=Z0(o,t),a=ap(a),a=Y0(a,t),a=Z0(a,t),o=j0(o),a=j0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+g+o,_=y+m+a,C=W0(s,s.VERTEX_SHADER,S),A=W0(s,s.FRAGMENT_SHADER,_);s.attachShader(x,C),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(E){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(C)||"",O=s.getShaderInfoLog(A)||"",q=F.trim(),H=N.trim(),j=O.trim(),B=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,A);else{let ae=X0(s,C,"vertex"),ge=X0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+q+`
`+ae+`
`+ge)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||j==="")&&(re=!1);re&&(E.diagnostics={runnable:B,programLog:q,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:m}})}s.deleteShader(C),s.deleteShader(A),D=new wo(s,x),w=lT(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Qw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var _T=0,lp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cp(e),t.set(e,i)),i}},cp=class{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}};function MT(n,e,t,i,s,r,o){let a=new so,l=new lp,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,h=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,E,F,N){let O=F.fog,q=N.geometry,H=w.isMeshStandardMaterial?F.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),B=j&&j.mapping===rl?j.image.height:null,re=p[w.type];w.precision!==null&&(h=s.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=ae!==void 0?ae.length:0,se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let be,ve,Me,te;if(re){let vt=wi[re];be=vt.vertexShader,ve=vt.fragmentShader}else be=w.vertexShader,ve=w.fragmentShader,l.update(w),Me=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);let ie=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,z=N.isBatchedMesh===!0,ee=!!w.map,fe=!!w.matcap,T=!!j,G=!!w.aoMap,J=!!w.lightMap,Y=!!w.bumpMap,U=!!w.normalMap,Z=!!w.displacementMap,V=!!w.emissiveMap,K=!!w.metalnessMap,le=!!w.roughnessMap,he=w.anisotropy>0,R=w.clearcoat>0,v=w.dispersion>0,L=w.iridescence>0,W=w.sheen>0,oe=w.transmission>0,$=he&&!!w.anisotropyMap,xe=R&&!!w.clearcoatMap,pe=R&&!!w.clearcoatNormalMap,Se=R&&!!w.clearcoatRoughnessMap,_e=L&&!!w.iridescenceMap,de=L&&!!w.iridescenceThicknessMap,Te=W&&!!w.sheenColorMap,Ve=W&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Pe=!!w.specularColorMap,We=!!w.specularIntensityMap,X=oe&&!!w.transmissionMap,Re=oe&&!!w.thicknessMap,Le=!!w.gradientMap,Oe=!!w.alphaMap,Ce=w.alphaTest>0,ye=!!w.alphaHash,He=!!w.extensions,tt=$i;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Lt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:ve,defines:w.defines,customVertexShaderID:Me,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:z,batchingColor:z&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qs,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:fe,envMap:T,envMapMode:T&&j.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:J,bumpMap:Y,normalMap:U,displacementMap:f&&Z,emissiveMap:V,normalMapObjectSpace:U&&w.normalMapType===p0,normalMapTangentSpace:U&&w.normalMapType===rh,metalnessMap:K,roughnessMap:le,anisotropy:he,anisotropyMap:$,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Se,dispersion:v,iridescence:L,iridescenceMap:_e,iridescenceThicknessMap:de,sheen:W,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:We,transmission:oe,transmissionMap:X,thicknessMap:Re,gradientMap:Le,opaque:w.transparent===!1&&w.blending===$s&&w.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Ce,alphaHash:ye,combine:w.combine,mapUv:ee&&x(w.map.channel),aoMapUv:G&&x(w.aoMap.channel),lightMapUv:J&&x(w.lightMap.channel),bumpMapUv:Y&&x(w.bumpMap.channel),normalMapUv:U&&x(w.normalMap.channel),displacementMapUv:Z&&x(w.displacementMap.channel),emissiveMapUv:V&&x(w.emissiveMap.channel),metalnessMapUv:K&&x(w.metalnessMap.channel),roughnessMapUv:le&&x(w.roughnessMap.channel),anisotropyMapUv:$&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(w.sheenRoughnessMap.channel),specularMapUv:Ae&&x(w.specularMap.channel),specularColorMapUv:Pe&&x(w.specularColorMap.channel),specularIntensityMapUv:We&&x(w.specularIntensityMap.channel),transmissionMapUv:X&&x(w.transmissionMap.channel),thicknessMapUv:Re&&x(w.thicknessMap.channel),alphaMapUv:Oe&&x(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(U||he),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ee||Oe),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:V&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===At,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function m(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let E in w.defines)b.push(E),b.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(y(b,w),S(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let b=p[w.type],E;if(b){let F=wi[b];E=oh.clone(F.uniforms)}else E=w.uniforms;return E}function C(w,b){let E;for(let F=0,N=u.length;F<N;F++){let O=u[F];if(O.cacheKey===b){E=O,++E.usedTimes;break}}return E===void 0&&(E=new vT(n,b,w,r),u.push(E)),E}function A(w){if(--w.usedTimes===0){let b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function I(w){l.remove(w)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:D}}function bT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ST(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function K0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||ST),i.length>1&&i.sort(f||$0),s.length>1&&s.sort(f||$0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wT(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new K0,n.set(i,[o])):s>=r.length?(o=new K0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new De};break;case"SpotLight":t={position:new M,direction:new M,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new M,halfWidth:new M,halfHeight:new M};break}return n[e.id]=t,t}}}function AT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ET=0;function CT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RT(n){let e=new TT,t=AT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let s=new M,r=new ct,o=new ct;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,y=0,S=0,_=0,C=0,A=0,I=0;c.sort(CT);for(let w=0,b=c.length;w<b;w++){let E=c[w],F=E.color,N=E.intensity,O=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],N);I++}else if(E.isDirectionalLight){let H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let j=E.shadow,B=t.get(E);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=E.shadow.matrix,y++}i.directional[h]=H,h++}else if(E.isSpotLight){let H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(F).multiplyScalar(N),H.distance=O,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[x]=H;let j=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,j.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[x]=j.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=q,_++}x++}else if(E.isRectAreaLight){let H=e.get(E);H.color.copy(F).multiplyScalar(N),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=H,g++}else if(E.isPointLight){let H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){let j=E.shadow,B=t.get(E);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=E.shadow.matrix,S++}i.point[p]=H,p++}else if(E.isHemisphereLight){let H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(N),H.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[m]=H,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==h||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==_||D.numSpotMaps!==C||D.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,D.directionalLength=h,D.pointLength=p,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=_,D.numSpotMaps=C,D.numLightProbes=I,i.version=ET++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let S=c[m];if(S.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(S.isSpotLight){let _=i.spot[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(S.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Q0(n){let e=new RT(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function PT(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Q0(n),e.set(s,[a])):r>=o.length?(a=new Q0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
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
}`;function DT(n,e,t){let i=new co,s=new we,r=new we,o=new ut,a=new eu({depthPacking:f0}),l=new tu,c={},u=t.maxTextureSize,d={[ci]:dn,[dn]:ci,[At]:At},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:IT,fragmentShader:LT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let m=this.type;this.render=function(A,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ji),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=m!==bi&&this.type===bi,O=m===bi&&this.type!==bi;for(let q=0,H=A.length;q<H;q++){let j=A[q],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let re=B.getFrameExtents();if(s.multiply(re),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,B.mapSize.y=r.y)),B.map===null||N===!0||O===!0){let ge=this.type!==bi?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(s.x,s.y,ge),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ae=B.getViewportCount();for(let ge=0;ge<ae;ge++){let se=B.getViewport(ge);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),F.viewport(o),B.updateMatrices(j,ge),i=B.getFrustum(),_(I,D,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===bi&&y(B,D),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,b,E)};function y(A,I){let D=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,D,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,D,h,x,null)}function S(A,I,D,w){let b=null,E=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)b=E;else if(b=D.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=b.uuid,N=I.uuid,O=c[F];O===void 0&&(O={},c[F]=O);let q=O[N];q===void 0&&(q=b.clone(),O[N]=q,I.addEventListener("dispose",C)),b=q}if(b.visible=I.visible,b.wireframe=I.wireframe,w===bi?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:d[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=n.properties.get(b);F.light=D}return b}function _(A,I,D,w,b){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===bi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let N=e.update(A),O=A.material;if(Array.isArray(O)){let q=N.groups;for(let H=0,j=q.length;H<j;H++){let B=q[H],re=O[B.materialIndex];if(re&&re.visible){let ae=S(A,re,w,b);A.onBeforeShadow(n,A,I,D,N,ae,B),n.renderBufferDirect(D,null,N,ae,A,B),A.onAfterShadow(n,A,I,D,N,ae,B)}}}else if(O.visible){let q=S(A,O,w,b);A.onBeforeShadow(n,A,I,D,N,q,null),n.renderBufferDirect(D,null,N,q,A,null),A.onAfterShadow(n,A,I,D,N,q,null)}}let F=A.children;for(let N=0,O=F.length;N<O;N++)_(F[N],I,D,w,b)}function C(A){A.target.removeEventListener("dispose",C);for(let D in c){let w=c[D],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var UT={[fu]:pu,[mu]:yu,[gu]:vu,[Ks]:xu,[pu]:fu,[yu]:mu,[vu]:gu,[xu]:Ks};function FT(n,e){function t(){let X=!1,Re=new ut,Le=null,Oe=new ut(0,0,0,0);return{setMask:function(Ce){Le!==Ce&&!X&&(n.colorMask(Ce,Ce,Ce,Ce),Le=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,ye,He,tt,Lt){Lt===!0&&(Ce*=tt,ye*=tt,He*=tt),Re.set(Ce,ye,He,tt),Oe.equals(Re)===!1&&(n.clearColor(Ce,ye,He,tt),Oe.copy(Re))},reset:function(){X=!1,Le=null,Oe.set(-1,0,0,0)}}}function i(){let X=!1,Re=!1,Le=null,Oe=null,Ce=null;return{setReversed:function(ye){if(Re!==ye){let He=e.get("EXT_clip_control");ye?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=ye;let tt=Ce;Ce=null,this.setClear(tt)}},getReversed:function(){return Re},setTest:function(ye){ye?ie(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ye){Le!==ye&&!X&&(n.depthMask(ye),Le=ye)},setFunc:function(ye){if(Re&&(ye=UT[ye]),Oe!==ye){switch(ye){case fu:n.depthFunc(n.NEVER);break;case pu:n.depthFunc(n.ALWAYS);break;case mu:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case gu:n.depthFunc(n.EQUAL);break;case xu:n.depthFunc(n.GEQUAL);break;case yu:n.depthFunc(n.GREATER);break;case vu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ye}},setLocked:function(ye){X=ye},setClear:function(ye){Ce!==ye&&(Re&&(ye=1-ye),n.clearDepth(ye),Ce=ye)},reset:function(){X=!1,Le=null,Oe=null,Ce=null,Re=!1}}}function s(){let X=!1,Re=null,Le=null,Oe=null,Ce=null,ye=null,He=null,tt=null,Lt=null;return{setTest:function(vt){X||(vt?ie(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!X&&(n.stencilMask(vt),Re=vt)},setFunc:function(vt,Oi,gi){(Le!==vt||Oe!==Oi||Ce!==gi)&&(n.stencilFunc(vt,Oi,gi),Le=vt,Oe=Oi,Ce=gi)},setOp:function(vt,Oi,gi){(ye!==vt||He!==Oi||tt!==gi)&&(n.stencilOp(vt,Oi,gi),ye=vt,He=Oi,tt=gi)},setLocked:function(vt){X=vt},setClear:function(vt){Lt!==vt&&(n.clearStencil(vt),Lt=vt)},reset:function(){X=!1,Re=null,Le=null,Oe=null,Ce=null,ye=null,He=null,tt=null,Lt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,S=null,_=null,C=null,A=null,I=new De(0,0,0),D=0,w=!1,b=null,E=null,F=null,N=null,O=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=j>=2);let re=null,ae={},ge=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),be=new ut().fromArray(ge),ve=new ut().fromArray(se);function Me(X,Re,Le,Oe){let Ce=new Uint8Array(4),ye=n.createTexture();n.bindTexture(X,ye),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Le;He++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Re+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return ye}let te={};te[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Ks),Y(!1),U(Lf),ie(n.CULL_FACE),G(Ji);function ie(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function me(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function Ee(X,Re){return d[X]!==Re?(n.bindFramebuffer(X,Re),d[X]=Re,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function z(X,Re){let Le=h,Oe=!1;if(X){Le=f.get(Re),Le===void 0&&(Le=[],f.set(Re,Le));let Ce=X.textures;if(Le.length!==Ce.length||Le[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,He=Ce.length;ye<He;ye++)Le[ye]=n.COLOR_ATTACHMENT0+ye;Le.length=Ce.length,Oe=!0}}else Le[0]!==n.BACK&&(Le[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Le)}function ee(X){return p!==X?(n.useProgram(X),p=X,!0):!1}let fe={[Ms]:n.FUNC_ADD,[Vg]:n.FUNC_SUBTRACT,[kg]:n.FUNC_REVERSE_SUBTRACT};fe[Gg]=n.MIN,fe[Hg]=n.MAX;let T={[Wg]:n.ZERO,[qg]:n.ONE,[Xg]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[Kg]:n.SRC_ALPHA_SATURATE,[Jg]:n.DST_COLOR,[Zg]:n.DST_ALPHA,[Yg]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[$g]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[Qg]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function G(X,Re,Le,Oe,Ce,ye,He,tt,Lt,vt){if(X===Ji){x===!0&&(me(n.BLEND),x=!1);return}if(x===!1&&(ie(n.BLEND),x=!0),X!==zg){if(X!==g||vt!==w){if((m!==Ms||_!==Ms)&&(n.blendEquation(n.FUNC_ADD),m=Ms,_=Ms),vt)switch(X){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Df:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,S=null,C=null,A=null,I.set(0,0,0),D=0,g=X,w=vt}return}Ce=Ce||Re,ye=ye||Le,He=He||Oe,(Re!==m||Ce!==_)&&(n.blendEquationSeparate(fe[Re],fe[Ce]),m=Re,_=Ce),(Le!==y||Oe!==S||ye!==C||He!==A)&&(n.blendFuncSeparate(T[Le],T[Oe],T[ye],T[He]),y=Le,S=Oe,C=ye,A=He),(tt.equals(I)===!1||Lt!==D)&&(n.blendColor(tt.r,tt.g,tt.b,Lt),I.copy(tt),D=Lt),g=X,w=!1}function J(X,Re){X.side===At?me(n.CULL_FACE):ie(n.CULL_FACE);let Le=X.side===dn;Re&&(Le=!Le),Y(Le),X.blending===$s&&X.transparent===!1?G(Ji):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Oe=X.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),V(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(X){b!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),b=X)}function U(X){X!==Ng?(ie(n.CULL_FACE),X!==E&&(X===Lf?n.cullFace(n.BACK):X===Bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),E=X}function Z(X){X!==F&&(H&&n.lineWidth(X),F=X)}function V(X,Re,Le){X?(ie(n.POLYGON_OFFSET_FILL),(N!==Re||O!==Le)&&(n.polygonOffset(Re,Le),N=Re,O=Le)):me(n.POLYGON_OFFSET_FILL)}function K(X){X?ie(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function le(X){X===void 0&&(X=n.TEXTURE0+q-1),re!==X&&(n.activeTexture(X),re=X)}function he(X,Re,Le){Le===void 0&&(re===null?Le=n.TEXTURE0+q-1:Le=re);let Oe=ae[Le];Oe===void 0&&(Oe={type:void 0,texture:void 0},ae[Le]=Oe),(Oe.type!==X||Oe.texture!==Re)&&(re!==Le&&(n.activeTexture(Le),re=Le),n.bindTexture(X,Re||te[X]),Oe.type=X,Oe.texture=Re)}function R(){let X=ae[re];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function W(){try{n.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{n.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{n.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{n.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{n.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{n.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(X){be.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),be.copy(X))}function Ve(X){ve.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ve.copy(X))}function Ae(X,Re){let Le=c.get(Re);Le===void 0&&(Le=new WeakMap,c.set(Re,Le));let Oe=Le.get(X);Oe===void 0&&(Oe=n.getUniformBlockIndex(Re,X.name),Le.set(X,Oe))}function Pe(X,Re){let Oe=c.get(Re).get(X);l.get(Re)!==Oe&&(n.uniformBlockBinding(Re,Oe,X.__bindingPointIndex),l.set(Re,Oe))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ae={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,S=null,_=null,C=null,A=null,I=new De(0,0,0),D=0,w=!1,b=null,E=null,F=null,N=null,O=null,be.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:me,bindFramebuffer:Ee,drawBuffers:z,useProgram:ee,setBlending:G,setMaterial:J,setFlipSided:Y,setCullFace:U,setLineWidth:Z,setPolygonOffset:V,setScissorTest:K,activeTexture:le,bindTexture:he,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:L,texImage2D:_e,texImage3D:de,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:pe,texStorage3D:Se,texSubImage2D:W,texSubImage3D:oe,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:Te,viewport:Ve,reset:We}}function NT(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,v){return h?new OffscreenCanvas(R,v):to("canvas")}function x(R,v,L){let W=1,oe=he(R);if((oe.width>L||oe.height>L)&&(W=L/Math.max(oe.width,oe.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(W*oe.width),xe=Math.floor(W*oe.height);d===void 0&&(d=p($,xe));let pe=v?p($,xe):d;return pe.width=$,pe.height=xe,pe.getContext("2d").drawImage(R,0,0,$,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+$+"x"+xe+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,v,L,W,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=v;if(v===n.RED&&(L===n.FLOAT&&($=n.R32F),L===n.HALF_FLOAT&&($=n.R16F),L===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.R8UI),L===n.UNSIGNED_SHORT&&($=n.R16UI),L===n.UNSIGNED_INT&&($=n.R32UI),L===n.BYTE&&($=n.R8I),L===n.SHORT&&($=n.R16I),L===n.INT&&($=n.R32I)),v===n.RG&&(L===n.FLOAT&&($=n.RG32F),L===n.HALF_FLOAT&&($=n.RG16F),L===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RG8UI),L===n.UNSIGNED_SHORT&&($=n.RG16UI),L===n.UNSIGNED_INT&&($=n.RG32UI),L===n.BYTE&&($=n.RG8I),L===n.SHORT&&($=n.RG16I),L===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGB8UI),L===n.UNSIGNED_SHORT&&($=n.RGB16UI),L===n.UNSIGNED_INT&&($=n.RGB32UI),L===n.BYTE&&($=n.RGB8I),L===n.SHORT&&($=n.RGB16I),L===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGBA8UI),L===n.UNSIGNED_SHORT&&($=n.RGBA16UI),L===n.UNSIGNED_INT&&($=n.RGBA32UI),L===n.BYTE&&($=n.RGBA8I),L===n.SHORT&&($=n.RGBA16I),L===n.INT&&($=n.RGBA32I)),v===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){let xe=oe?Ta:dt.getTransfer(W);L===n.FLOAT&&($=n.RGBA32F),L===n.HALF_FLOAT&&($=n.RGBA16F),L===n.UNSIGNED_BYTE&&($=xe===bt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(R,v){let L;return R?v===null||v===Ts||v===_o?L=n.DEPTH24_STENCIL8:v===fi?L=n.DEPTH32F_STENCIL8:v===vo&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ts||v===_o?L=n.DEPTH_COMPONENT24:v===fi?L=n.DEPTH_COMPONENT32F:v===vo&&(L=n.DEPTH_COMPONENT16),L}function C(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&u.delete(v)}function I(R){let v=R.target;v.removeEventListener("dispose",I),b(v)}function D(R){let v=i.get(R);if(v.__webglInit===void 0)return;let L=R.source,W=f.get(L);if(W){let oe=W[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(R),Object.keys(W).length===0&&f.delete(L)}i.remove(R)}function w(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let L=R.source,W=f.get(L);delete W[v.__cacheKey],o.memory.textures--}function b(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let oe=0;oe<v.__webglFramebuffer[W].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[W][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=R.textures;for(let W=0,oe=L.length;W<oe;W++){let $=i.get(L[W]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(L[W])}i.remove(R)}let E=0;function F(){E=0}function N(){let R=E;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),E+=1,R}function O(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function q(R,v){let L=i.get(R);if(R.isVideoTexture&&K(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(L,R,v);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function H(R,v){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){te(L,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function j(R,v){let L=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){te(L,R,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function B(R,v){let L=i.get(R);if(R.version>0&&L.__version!==R.version){ie(L,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let re={[kn]:n.REPEAT,[_s]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},ae={[cn]:n.NEAREST,[h0]:n.NEAREST_MIPMAP_NEAREST,[ol]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Su]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},ge={[m0]:n.NEVER,[M0]:n.ALWAYS,[g0]:n.LESS,[Hf]:n.LEQUAL,[x0]:n.EQUAL,[_0]:n.GEQUAL,[y0]:n.GREATER,[v0]:n.NOTEQUAL};function se(R,v){if(v.type===fi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Su||v.magFilter===ol||v.magFilter===Ln||v.minFilter===un||v.minFilter===Su||v.minFilter===ol||v.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,re[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ae[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==ol&&v.minFilter!==Ln||v.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function be(R,v){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let W=v.source,oe=f.get(W);oe===void 0&&(oe={},f.set(W,oe));let $=O(v);if($!==R.__cacheKey){oe[$]===void 0&&(oe[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),oe[$].usedTimes++;let xe=oe[R.__cacheKey];xe!==void 0&&(oe[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(v)),R.__cacheKey=$,R.__webglTexture=oe[$].texture}return L}function ve(R,v,L){return Math.floor(Math.floor(R/L)/v)}function Me(R,v,L,W){let $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,L,W,v.data);else{$.sort((de,Te)=>de.start-Te.start);let xe=0;for(let de=1;de<$.length;de++){let Te=$[xe],Ve=$[de],Ae=Te.start+Te.count,Pe=ve(Ve.start,v.width,4),We=ve(Te.start,v.width,4);Ve.start<=Ae+1&&Pe===We&&ve(Ve.start+Ve.count-1,v.width,4)===Pe?Te.count=Math.max(Te.count,Ve.start+Ve.count-Te.start):(++xe,$[xe]=Ve)}$.length=xe+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let de=0,Te=$.length;de<Te;de++){let Ve=$[de],Ae=Math.floor(Ve.start/4),Pe=Math.ceil(Ve.count/4),We=Ae%v.width,X=Math.floor(Ae/v.width),Re=Pe,Le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,We,X,Re,Le,L,W,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function te(R,v,L){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let oe=be(R,v),$=v.source;t.bindTexture(W,R.__webglTexture,n.TEXTURE0+L);let xe=i.get($);if($.version!==xe.__version||oe===!0){t.activeTexture(n.TEXTURE0+L);let pe=dt.getPrimaries(dt.workingColorSpace),Se=v.colorSpace===Ki?null:dt.getPrimaries(v.colorSpace),_e=v.colorSpace===Ki||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let de=x(v.image,!1,s.maxTextureSize);de=le(v,de);let Te=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),Ae=S(v.internalFormat,Te,Ve,v.colorSpace,v.isVideoTexture);se(W,v);let Pe,We=v.mipmaps,X=v.isVideoTexture!==!0,Re=xe.__version===void 0||oe===!0,Le=$.dataReady,Oe=C(v,de);if(v.isDepthTexture)Ae=_(v.format===Mo,v.type),Re&&(X?t.texStorage2D(n.TEXTURE_2D,1,Ae,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ae,de.width,de.height,0,Te,Ve,null));else if(v.isDataTexture)if(We.length>0){X&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,We[0].width,We[0].height);for(let Ce=0,ye=We.length;Ce<ye;Ce++)Pe=We[Ce],X?Le&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,Pe.width,Pe.height,Te,Ve,Pe.data):t.texImage2D(n.TEXTURE_2D,Ce,Ae,Pe.width,Pe.height,0,Te,Ve,Pe.data);v.generateMipmaps=!1}else X?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,de.width,de.height),Le&&Me(v,de,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,Ae,de.width,de.height,0,Te,Ve,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){X&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ae,We[0].width,We[0].height,de.depth);for(let Ce=0,ye=We.length;Ce<ye;Ce++)if(Pe=We[Ce],v.format!==Dn)if(Te!==null)if(X){if(Le)if(v.layerUpdates.size>0){let He=$f(Pe.width,Pe.height,v.format,v.type);for(let tt of v.layerUpdates){let Lt=Pe.data.subarray(tt*He/Pe.data.BYTES_PER_ELEMENT,(tt+1)*He/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,tt,Pe.width,Pe.height,1,Te,Lt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,Pe.width,Pe.height,de.depth,Te,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ce,Ae,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,Pe.width,Pe.height,de.depth,Te,Ve,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ce,Ae,Pe.width,Pe.height,de.depth,0,Te,Ve,Pe.data)}else{X&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Ae,We[0].width,We[0].height);for(let Ce=0,ye=We.length;Ce<ye;Ce++)Pe=We[Ce],v.format!==Dn?Te!==null?X?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ce,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Ce,Ae,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Le&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,Pe.width,Pe.height,Te,Ve,Pe.data):t.texImage2D(n.TEXTURE_2D,Ce,Ae,Pe.width,Pe.height,0,Te,Ve,Pe.data)}else if(v.isDataArrayTexture)if(X){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ae,de.width,de.height,de.depth),Le)if(v.layerUpdates.size>0){let Ce=$f(de.width,de.height,v.format,v.type);for(let ye of v.layerUpdates){let He=de.data.subarray(ye*Ce/de.data.BYTES_PER_ELEMENT,(ye+1)*Ce/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,de.width,de.height,1,Te,Ve,He)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Te,Ve,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,de.width,de.height,de.depth,0,Te,Ve,de.data);else if(v.isData3DTexture)X?(Re&&t.texStorage3D(n.TEXTURE_3D,Oe,Ae,de.width,de.height,de.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Te,Ve,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,de.width,de.height,de.depth,0,Te,Ve,de.data);else if(v.isFramebufferTexture){if(Re)if(X)t.texStorage2D(n.TEXTURE_2D,Oe,Ae,de.width,de.height);else{let Ce=de.width,ye=de.height;for(let He=0;He<Oe;He++)t.texImage2D(n.TEXTURE_2D,He,Ae,Ce,ye,0,Te,Ve,null),Ce>>=1,ye>>=1}}else if(We.length>0){if(X&&Re){let Ce=he(We[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ae,Ce.width,Ce.height)}for(let Ce=0,ye=We.length;Ce<ye;Ce++)Pe=We[Ce],X?Le&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,Te,Ve,Pe):t.texImage2D(n.TEXTURE_2D,Ce,Ae,Te,Ve,Pe);v.generateMipmaps=!1}else if(X){if(Re){let Ce=he(de);t.texStorage2D(n.TEXTURE_2D,Oe,Ae,Ce.width,Ce.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,de)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Te,Ve,de);g(v)&&m(W),xe.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ie(R,v,L){if(v.image.length!==6)return;let W=be(R,v),oe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+L);let $=i.get(oe);if(oe.version!==$.__version||W===!0){t.activeTexture(n.TEXTURE0+L);let xe=dt.getPrimaries(dt.workingColorSpace),pe=v.colorSpace===Ki?null:dt.getPrimaries(v.colorSpace),Se=v.colorSpace===Ki||xe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let _e=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!_e&&!de?Te[ye]=x(v.image[ye],!0,s.maxCubemapSize):Te[ye]=de?v.image[ye].image:v.image[ye],Te[ye]=le(v,Te[ye]);let Ve=Te[0],Ae=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),We=S(v.internalFormat,Ae,Pe,v.colorSpace),X=v.isVideoTexture!==!0,Re=$.__version===void 0||W===!0,Le=oe.dataReady,Oe=C(v,Ve);se(n.TEXTURE_CUBE_MAP,v);let Ce;if(_e){X&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,We,Ve.width,Ve.height);for(let ye=0;ye<6;ye++){Ce=Te[ye].mipmaps;for(let He=0;He<Ce.length;He++){let tt=Ce[He];v.format!==Dn?Ae!==null?X?Le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,tt.width,tt.height,Ae,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,0,0,tt.width,tt.height,Ae,Pe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He,We,tt.width,tt.height,0,Ae,Pe,tt.data)}}}else{if(Ce=v.mipmaps,X&&Re){Ce.length>0&&Oe++;let ye=he(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,We,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(de){X?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Ae,Pe,Te[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,We,Te[ye].width,Te[ye].height,0,Ae,Pe,Te[ye].data);for(let He=0;He<Ce.length;He++){let Lt=Ce[He].image[ye].image;X?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,Lt.width,Lt.height,Ae,Pe,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,We,Lt.width,Lt.height,0,Ae,Pe,Lt.data)}}else{X?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ae,Pe,Te[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,We,Ae,Pe,Te[ye]);for(let He=0;He<Ce.length;He++){let tt=Ce[He];X?Le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,0,0,Ae,Pe,tt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,He+1,We,Ae,Pe,tt.image[ye])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),$.__version=oe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,L,W,oe,$){let xe=r.convert(L.format,L.colorSpace),pe=r.convert(L.type),Se=S(L.internalFormat,xe,pe,L.colorSpace),_e=i.get(v),de=i.get(L);if(de.__renderTarget=v,!_e.__hasExternalTextures){let Te=Math.max(1,v.width>>$),Ve=Math.max(1,v.height>>$);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,$,Se,Te,Ve,v.depth,0,xe,pe,null):t.texImage2D(oe,$,Se,Te,Ve,0,xe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),V(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,oe,de.__webglTexture,0,Z(v)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,oe,de.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let W=v.depthTexture,oe=W&&W.isDepthTexture?W.type:null,$=_(v.stencilBuffer,oe),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Z(v);V(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{let W=v.textures;for(let oe=0;oe<W.length;oe++){let $=W[oe],xe=r.convert($.format,$.colorSpace),pe=r.convert($.type),Se=S($.internalFormat,xe,pe,$.colorSpace),_e=Z(v);L&&V(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Se,v.width,v.height):V(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function z(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let oe=W.__webglTexture,$=Z(v);if(v.depthTexture.format===Qr)V(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Mo)V(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ee(R){let v=i.get(R),L=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",oe)};W.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let W=R.texture.mipmaps;W&&W.length>0?z(v.__webglFramebuffer[0],R):z(v.__webglFramebuffer,R)}else if(L){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Ee(v.__webglDepthbuffer[W],R,!1);else{let oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ee(v.__webglDepthbuffer,R,!1);else{let oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(R,v,L){let W=i.get(R);v!==void 0&&me(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ee(R)}function T(R){let v=R.texture,L=i.get(R),W=i.get(v);R.addEventListener("dispose",I);let oe=R.textures,$=R.isWebGLCubeRenderTarget===!0,xe=oe.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),$){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let Se=0;Se<v.mipmaps.length;Se++)L.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else L.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)L.__webglFramebuffer[pe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(xe)for(let pe=0,Se=oe.length;pe<Se;pe++){let _e=i.get(oe[pe]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&V(R)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Se=oe[pe];L.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);let _e=r.convert(Se.format,Se.colorSpace),de=r.convert(Se.type),Te=S(Se.internalFormat,_e,de,Se.colorSpace,R.isXRRenderTarget===!0),Ve=Z(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(L.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),se(n.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(L.__webglFramebuffer[pe][Se],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else me(L.__webglFramebuffer[pe],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let pe=0,Se=oe.length;pe<Se;pe++){let _e=oe[pe],de=i.get(_e),Te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),se(Te,_e),me(L.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+pe,Te,0),g(_e)&&m(Te)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,W.__webglTexture),se(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(L.__webglFramebuffer[Se],R,v,n.COLOR_ATTACHMENT0,pe,Se);else me(L.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,pe,0);g(v)&&m(pe),t.unbindTexture()}R.depthBuffer&&ee(R)}function G(R){let v=R.textures;for(let L=0,W=v.length;L<W;L++){let oe=v[L];if(g(oe)){let $=y(R),xe=i.get(oe).__webglTexture;t.bindTexture($,xe),m($),t.unbindTexture()}}}let J=[],Y=[];function U(R){if(R.samples>0){if(V(R)===!1){let v=R.textures,L=R.width,W=R.height,oe=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),pe=v.length>1;if(pe)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let Se=R.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let de=i.get(v[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,oe,n.NEAREST),l===!0&&(J.length=0,Y.length=0,J.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push($),Y.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);let de=i.get(v[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Z(R){return Math.min(s.maxSamples,R.samples)}function V(R){let v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function le(R,v){let L=R.colorSpace,W=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==Qs&&L!==Ki&&(dt.getTransfer(L)===bt?(W!==Dn||oe!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=fe,this.setupRenderTarget=T,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=V}function BT(n,e){function t(i,s=Ki){let r,o=dt.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Au)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nf)return n.BYTE;if(i===Bf)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Si)return n.HALF_FLOAT;if(i===Vf)return n.ALPHA;if(i===kf)return n.RGB;if(i===Dn)return n.RGBA;if(i===Qr)return n.DEPTH_COMPONENT;if(i===Mo)return n.DEPTH_STENCIL;if(i===Eu)return n.RED;if(i===Cu)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Ru)return n.RG_INTEGER;if(i===Pu)return n.RGBA_INTEGER;if(i===al||i===ll||i===cl||i===ul)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Iu||i===Lu||i===Du||i===Uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fu||i===Nu||i===Bu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fu||i===Nu)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===zu||i===Vu||i===ku||i===Gu||i===Hu||i===Wu||i===qu||i===Xu||i===Yu||i===Zu||i===ju||i===Ju||i===$u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ou)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ku)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$u)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ku||i===Qu||i===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ku)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===th||i===nh||i===ih||i===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ih)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var OT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
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

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:OT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hp=class extends qi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new up,m={},y=t.getContextAttributes(),S=null,_=null,C=[],A=[],I=new we,D=null,w=new Jt;w.viewport=new ut;let b=new Jt;b.viewport=new ut;let E=[w,b],F=new du,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=C[te];return ie===void 0&&(ie=new ro,C[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=C[te];return ie===void 0&&(ie=new ro,C[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=C[te];return ie===void 0&&(ie=new ro,C[te]=ie),ie.getHandSpace()};function q(te){let ie=A.indexOf(te.inputSource);if(ie===-1)return;let me=C[ie];me!==void 0&&(me.update(te.inputSource,te.frame,c||o),me.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let te=0;te<C.length;te++){let ie=A[te];ie!==null&&(A[te]=null,C[te].disconnect(ie))}N=null,O=null,g.reset();for(let te in m)delete m[te];e.setRenderTarget(S),h=null,f=null,d=null,s=null,_=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ee=null,z=null;y.depth&&(z=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?Mo:Qr,Ee=y.stencil?_o:Ts);let ee={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Rn(f.textureWidth,f.textureHeight,{format:Dn,type:Wn,depthTexture:new Oa(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(te){for(let ie=0;ie<te.removed.length;ie++){let me=te.removed[ie],Ee=A.indexOf(me);Ee>=0&&(A[Ee]=null,C[Ee].disconnect(me))}for(let ie=0;ie<te.added.length;ie++){let me=te.added[ie],Ee=A.indexOf(me);if(Ee===-1){for(let ee=0;ee<C.length;ee++)if(ee>=A.length){A.push(me),Ee=ee;break}else if(A[ee]===null){A[ee]=me,Ee=ee;break}if(Ee===-1)break}let z=C[Ee];z&&z.connect(me)}}let B=new M,re=new M;function ae(te,ie,me){B.setFromMatrixPosition(ie.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);let Ee=B.distanceTo(re),z=ie.projectionMatrix.elements,ee=me.projectionMatrix.elements,fe=z[14]/(z[10]-1),T=z[14]/(z[10]+1),G=(z[9]+1)/z[5],J=(z[9]-1)/z[5],Y=(z[8]-1)/z[0],U=(ee[8]+1)/ee[0],Z=fe*Y,V=fe*U,K=Ee/(-Y+U),le=K*-Y;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),z[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let he=fe+K,R=T+K,v=Z-le,L=V+(Ee-le),W=G*T/R*he,oe=J*T/R*he;te.projectionMatrix.makePerspective(v,L,W,oe,he,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ie=te.near,me=te.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(me=g.depthFar)),F.near=b.near=w.near=ie,F.far=b.far=w.far=me,(N!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,O=F.far),F.layers.mask=te.layers.mask|6,w.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ee=te.parent,z=F.cameras;ge(F,Ee);for(let ee=0;ee<z.length;ee++)ge(z[ee],Ee);z.length===2?ae(F,w,b):F.projectionMatrix.copy(w.projectionMatrix),se(te,F,Ee)};function se(te,ie,me){me===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=eo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(te){return m[te]};let be=null;function ve(te,ie){if(u=ie.getViewerPose(c||o),p=ie,u!==null){let me=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Ee=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ee=!0);for(let T=0;T<me.length;T++){let G=me[T],J=null;if(h!==null)J=h.getViewport(G);else{let U=d.getViewSubImage(f,G);J=U.viewport,T===0&&(e.setRenderTargetTextures(_,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(_))}let Y=E[T];Y===void 0&&(Y=new Jt,Y.layers.enable(T),Y.viewport=new ut,E[T]=Y),Y.matrix.fromArray(G.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(G.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(J.x,J.y,J.width,J.height),T===0&&(F.matrix.copy(Y.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ee===!0&&F.cameras.push(Y)}let z=s.enabledFeatures;if(z&&z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let T=d.getDepthInformation(me[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(z&&z.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<me.length;T++){let G=me[T].camera;if(G){let J=m[G];J||(J=new za,m[G]=J);let Y=d.getCameraImage(G);J.sourceTexture=Y}}}}for(let me=0;me<C.length;me++){let Ee=A[me],z=C[me];Ee!==null&&z!==void 0&&z.update(Ee,ie,c||o)}be&&be(te,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}let Me=new ex;Me.setAnimationLoop(ve),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}},ur=new sn,VT=new ct;function kT(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Yf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,ur.copy(_),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(ur)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GT(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let _=S.program;i.uniformBlockBinding(y,_)}function c(y,S){let _=s[y.id];_===void 0&&(p(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",g));let C=S.program;i.updateUBOMapping(y,C);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){let S=d();y.__bindingPointIndex=S;let _=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=s[y.id],_=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,I=_.length;A<I;A++){let D=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,b=D.length;w<b;w++){let E=D[w];if(h(E,A,w,C)===!0){let F=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],O=0;for(let q=0;q<N.length;q++){let H=N[q],j=x(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+O,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,_,C){let A=y.value,I=S+"_"+_;if(C[I]===void 0)return typeof A=="number"||typeof A=="boolean"?C[I]=A:C[I]=A.clone(),!0;{let D=C[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function p(y){let S=y.uniforms,_=0,C=16;for(let I=0,D=S.length;I<D;I++){let w=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,E=w.length;b<E;b++){let F=w[b],N=Array.isArray(F.value)?F.value:[F.value];for(let O=0,q=N.length;O<q;O++){let H=N[O],j=x(H),B=_%C,re=B%j.boundary,ae=B+re;_+=re,ae!==0&&C-ae<j.storage&&(_+=C-ae),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=j.storage}}}let A=_%C;return A>0&&(_+=C-A),y.__size=_,y.__cache={},this}function x(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function g(y){let S=y.target;S.removeEventListener("dispose",g);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var uh=class{constructor(e={}){let{canvas:t=b0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,C=!1;this._outputColorSpace=lt;let A=0,I=0,D=null,w=-1,b=null,E=new ut,F=new ut,N=null,O=new De(0),q=0,H=t.width,j=t.height,B=1,re=null,ae=null,ge=new ut(0,0,H,j),se=new ut(0,0,H,j),be=!1,ve=new co,Me=!1,te=!1,ie=new ct,me=new M,Ee=new ut,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function fe(){return D===null?B:1}let T=i;function G(P,Q){return t.getContext(P,Q)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),T===null){let Q="webgl2";if(T=G(Q,P),T===null)throw G(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let J,Y,U,Z,V,K,le,he,R,v,L,W,oe,$,xe,pe,Se,_e,de,Te,Ve,Ae,Pe,We;function X(){J=new ow(T),J.init(),Ae=new BT(T,J),Y=new QS(T,J,e,Ae),U=new FT(T,J),Y.reversedDepthBuffer&&f&&U.buffers.depth.setReversed(!0),Z=new cw(T),V=new bT,K=new NT(T,J,U,V,Y,Ae,Z),le=new tw(_),he=new rw(_),R=new mb(T),Pe=new $S(T,R),v=new aw(T,R,Z,Pe),L=new hw(T,v,R,Z),de=new uw(T,Y,K),pe=new ew(V),W=new MT(_,le,he,J,Y,Pe,pe),oe=new kT(_,V),$=new wT,xe=new PT(J),_e=new JS(_,le,he,U,L,h,l),Se=new DT(_,L,Y),We=new GT(T,Z,Y,U),Te=new KS(T,J,Z),Ve=new lw(T,J,Z),Z.programs=W.programs,_.capabilities=Y,_.extensions=J,_.properties=V,_.renderLists=$,_.shadowMap=Se,_.state=U,_.info=Z}X();let Re=new hp(_,T);this.xr=Re,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let P=J.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=J.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(H,j,!1))},this.getSize=function(P){return P.set(H,j)},this.setSize=function(P,Q,ce=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,j=Q,t.width=Math.floor(P*B),t.height=Math.floor(Q*B),ce===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(H*B,j*B).floor()},this.setDrawingBufferSize=function(P,Q,ce){H=P,j=Q,B=ce,t.width=Math.floor(P*ce),t.height=Math.floor(Q*ce),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,Q,ce,ue){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,Q,ce,ue),U.viewport(E.copy(ge).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(se)},this.setScissor=function(P,Q,ce,ue){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,Q,ce,ue),U.scissor(F.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(P){U.setScissorTest(be=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,ce=!0){let ue=0;if(P){let ne=!1;if(D!==null){let Ie=D.texture.format;ne=Ie===Pu||Ie===Ru||Ie===Cu}if(ne){let Ie=D.texture.type,Be=Ie===Wn||Ie===Ts||Ie===vo||Ie===_o||Ie===Tu||Ie===Au,Ge=_e.getClearColor(),ke=_e.getClearAlpha(),Je=Ge.r,Ke=Ge.g,Xe=Ge.b;Be?(p[0]=Je,p[1]=Ke,p[2]=Xe,p[3]=ke,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Je,x[1]=Ke,x[2]=Xe,x[3]=ke,T.clearBufferiv(T.COLOR,0,x))}else ue|=T.COLOR_BUFFER_BIT}Q&&(ue|=T.DEPTH_BUFFER_BIT),ce&&(ue|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),_e.dispose(),$.dispose(),xe.dispose(),V.dispose(),le.dispose(),he.dispose(),L.dispose(),Pe.dispose(),We.dispose(),W.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",gi),Re.removeEventListener("sessionend",Bm),Ws.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=Z.autoReset,Q=Se.enabled,ce=Se.autoUpdate,ue=Se.needsUpdate,ne=Se.type;X(),Z.autoReset=P,Se.enabled=Q,Se.autoUpdate=ce,Se.needsUpdate=ue,Se.type=ne}function Ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ye(P){let Q=P.target;Q.removeEventListener("dispose",ye),He(Q)}function He(P){tt(P),V.remove(P)}function tt(P){let Q=V.get(P).programs;Q!==void 0&&(Q.forEach(function(ce){W.releaseProgram(ce)}),P.isShaderMaterial&&W.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,ce,ue,ne,Ie){Q===null&&(Q=z);let Be=ne.isMesh&&ne.matrixWorld.determinant()<0,Ge=N_(P,Q,ce,ue,ne);U.setMaterial(ue,Be);let ke=ce.index,Je=1;if(ue.wireframe===!0){if(ke=v.getWireframeAttribute(ce),ke===void 0)return;Je=2}let Ke=ce.drawRange,Xe=ce.attributes.position,at=Ke.start*Je,Tt=(Ke.start+Ke.count)*Je;Ie!==null&&(at=Math.max(at,Ie.start*Je),Tt=Math.min(Tt,(Ie.start+Ie.count)*Je)),ke!==null?(at=Math.max(at,0),Tt=Math.min(Tt,ke.count)):Xe!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Xe.count));let jt=Tt-at;if(jt<0||jt===1/0)return;Pe.setup(ne,ue,Ge,ce,ke);let Ft,Ct=Te;if(ke!==null&&(Ft=R.get(ke),Ct=Ve,Ct.setIndex(Ft)),ne.isMesh)ue.wireframe===!0?(U.setLineWidth(ue.wireframeLinewidth*fe()),Ct.setMode(T.LINES)):Ct.setMode(T.TRIANGLES);else if(ne.isLine){let Ze=ue.linewidth;Ze===void 0&&(Ze=1),U.setLineWidth(Ze*fe()),ne.isLineSegments?Ct.setMode(T.LINES):ne.isLineLoop?Ct.setMode(T.LINE_LOOP):Ct.setMode(T.LINE_STRIP)}else ne.isPoints?Ct.setMode(T.POINTS):ne.isSprite&&Ct.setMode(T.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)no("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let Ze=ne._multiDrawStarts,Gt=ne._multiDrawCounts,mt=ne._multiDrawCount,Bn=ke?R.get(ke).bytesPerElement:1,Ir=V.get(ue).currentProgram.getUniforms();for(let On=0;On<mt;On++)Ir.setValue(T,"_gl_DrawID",On),Ct.render(Ze[On]/Bn,Gt[On])}else if(ne.isInstancedMesh)Ct.renderInstances(at,jt,ne.count);else if(ce.isInstancedBufferGeometry){let Ze=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Gt=Math.min(ce.instanceCount,Ze);Ct.renderInstances(at,jt,Gt)}else Ct.render(at,jt)};function Lt(P,Q,ce){P.transparent===!0&&P.side===At&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,nc(P,Q,ce),P.side=ci,P.needsUpdate=!0,nc(P,Q,ce),P.side=At):nc(P,Q,ce)}this.compile=function(P,Q,ce=null){ce===null&&(ce=P),m=xe.get(ce),m.init(Q),S.push(m),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),P!==ce&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),m.setupLights();let ue=new Set;return P.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){let Ge=Ie[Be];Lt(Ge,ce,ne),ue.add(Ge)}else Lt(Ie,ce,ne),ue.add(Ie)}),m=S.pop(),ue},this.compileAsync=function(P,Q,ce=null){let ue=this.compile(P,Q,ce);return new Promise(ne=>{function Ie(){if(ue.forEach(function(Be){V.get(Be).currentProgram.isReady()&&ue.delete(Be)}),ue.size===0){ne(P);return}setTimeout(Ie,10)}J.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let vt=null;function Oi(P){vt&&vt(P)}function gi(){Ws.stop()}function Bm(){Ws.start()}let Ws=new ex;Ws.setAnimationLoop(Oi),typeof self<"u"&&Ws.setContext(self),this.setAnimationLoop=function(P){vt=P,Re.setAnimationLoop(P),P===null?Ws.stop():Ws.start()},Re.addEventListener("sessionstart",gi),Re.addEventListener("sessionend",Bm),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Q),Q=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,Q,D),m=xe.get(P,S.length),m.init(Q),S.push(m),ie.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ve.setFromProjectionMatrix(ie,li,Q.reversedDepth),te=this.localClippingEnabled,Me=pe.init(this.clippingPlanes,te),g=$.get(P,y.length),g.init(),y.push(g),Re.enabled===!0&&Re.isPresenting===!0){let Ie=_.xr.getDepthSensingMesh();Ie!==null&&kd(Ie,Q,-1/0,_.sortObjects)}kd(P,Q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(re,ae),ee=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ee&&_e.addToRenderList(g,P),this.info.render.frame++,Me===!0&&pe.beginShadows();let ce=m.state.shadowsArray;Se.render(ce,P,Q),Me===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=g.opaque,ne=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Ie=Q.cameras;if(ne.length>0)for(let Be=0,Ge=Ie.length;Be<Ge;Be++){let ke=Ie[Be];zm(ue,ne,P,ke)}ee&&_e.render(P);for(let Be=0,Ge=Ie.length;Be<Ge;Be++){let ke=Ie[Be];Om(g,P,ke,ke.viewport)}}else ne.length>0&&zm(ue,ne,P,Q),ee&&_e.render(P),Om(g,P,Q);D!==null&&I===0&&(K.updateMultisampleRenderTarget(D),K.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(_,P,Q),Pe.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(m=S[S.length-1],Me===!0&&pe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function kd(P,Q,ce,ue){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ve.intersectsSprite(P)){ue&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ie);let Be=L.update(P),Ge=P.material;Ge.visible&&g.push(P,Be,Ge,ce,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ve.intersectsObject(P))){let Be=L.update(P),Ge=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ee.copy(Be.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(ie)),Array.isArray(Ge)){let ke=Be.groups;for(let Je=0,Ke=ke.length;Je<Ke;Je++){let Xe=ke[Je],at=Ge[Xe.materialIndex];at&&at.visible&&g.push(P,Be,at,ce,Ee.z,Xe)}}else Ge.visible&&g.push(P,Be,Ge,ce,Ee.z,null)}}let Ie=P.children;for(let Be=0,Ge=Ie.length;Be<Ge;Be++)kd(Ie[Be],Q,ce,ue)}function Om(P,Q,ce,ue){let ne=P.opaque,Ie=P.transmissive,Be=P.transparent;m.setupLightsView(ce),Me===!0&&pe.setGlobalState(_.clippingPlanes,ce),ue&&U.viewport(E.copy(ue)),ne.length>0&&tc(ne,Q,ce),Ie.length>0&&tc(Ie,Q,ce),Be.length>0&&tc(Be,Q,ce),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function zm(P,Q,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ue.id]===void 0&&(m.state.transmissionRenderTarget[ue.id]=new Rn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Si:Wn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Ie=m.state.transmissionRenderTarget[ue.id],Be=ue.viewport||E;Ie.setSize(Be.z*_.transmissionResolutionScale,Be.w*_.transmissionResolutionScale);let Ge=_.getRenderTarget(),ke=_.getActiveCubeFace(),Je=_.getActiveMipmapLevel();_.setRenderTarget(Ie),_.getClearColor(O),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ee&&_e.render(ce);let Ke=_.toneMapping;_.toneMapping=$i;let Xe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),m.setupLightsView(ue),Me===!0&&pe.setGlobalState(_.clippingPlanes,ue),tc(P,ce,ue),K.updateMultisampleRenderTarget(Ie),K.updateRenderTargetMipmap(Ie),J.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Tt=0,jt=Q.length;Tt<jt;Tt++){let Ft=Q[Tt],Ct=Ft.object,Ze=Ft.geometry,Gt=Ft.material,mt=Ft.group;if(Gt.side===At&&Ct.layers.test(ue.layers)){let Bn=Gt.side;Gt.side=dn,Gt.needsUpdate=!0,Vm(Ct,ce,ue,Ze,Gt,mt),Gt.side=Bn,Gt.needsUpdate=!0,at=!0}}at===!0&&(K.updateMultisampleRenderTarget(Ie),K.updateRenderTargetMipmap(Ie))}_.setRenderTarget(Ge,ke,Je),_.setClearColor(O,q),Xe!==void 0&&(ue.viewport=Xe),_.toneMapping=Ke}function tc(P,Q,ce){let ue=Q.isScene===!0?Q.overrideMaterial:null;for(let ne=0,Ie=P.length;ne<Ie;ne++){let Be=P[ne],Ge=Be.object,ke=Be.geometry,Je=Be.group,Ke=Be.material;Ke.allowOverride===!0&&ue!==null&&(Ke=ue),Ge.layers.test(ce.layers)&&Vm(Ge,Q,ce,ke,Ke,Je)}}function Vm(P,Q,ce,ue,ne,Ie){P.onBeforeRender(_,Q,ce,ue,ne,Ie),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(_,Q,ce,ue,P,Ie),ne.transparent===!0&&ne.side===At&&ne.forceSinglePass===!1?(ne.side=dn,ne.needsUpdate=!0,_.renderBufferDirect(ce,Q,ue,ne,P,Ie),ne.side=ci,ne.needsUpdate=!0,_.renderBufferDirect(ce,Q,ue,ne,P,Ie),ne.side=At):_.renderBufferDirect(ce,Q,ue,ne,P,Ie),P.onAfterRender(_,Q,ce,ue,ne,Ie)}function nc(P,Q,ce){Q.isScene!==!0&&(Q=z);let ue=V.get(P),ne=m.state.lights,Ie=m.state.shadowsArray,Be=ne.state.version,Ge=W.getParameters(P,ne.state,Ie,Q,ce),ke=W.getProgramCacheKey(Ge),Je=ue.programs;ue.environment=P.isMeshStandardMaterial?Q.environment:null,ue.fog=Q.fog,ue.envMap=(P.isMeshStandardMaterial?he:le).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",ye),Je=new Map,ue.programs=Je);let Ke=Je.get(ke);if(Ke!==void 0){if(ue.currentProgram===Ke&&ue.lightsStateVersion===Be)return Gm(P,Ge),Ke}else Ge.uniforms=W.getUniforms(P),P.onBeforeCompile(Ge,_),Ke=W.acquireProgram(Ge,ke),Je.set(ke,Ke),ue.uniforms=Ge.uniforms;let Xe=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=pe.uniform),Gm(P,Ge),ue.needsLights=O_(P),ue.lightsStateVersion=Be,ue.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.directionalShadowMap.value=ne.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotShadowMap.value=ne.state.spotShadowMap,Xe.spotLightMatrix.value=ne.state.spotLightMatrix,Xe.spotLightMap.value=ne.state.spotLightMap,Xe.pointShadowMap.value=ne.state.pointShadowMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ue.currentProgram=Ke,ue.uniformsList=null,Ke}function km(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=wo.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function Gm(P,Q){let ce=V.get(P);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function N_(P,Q,ce,ue,ne){Q.isScene!==!0&&(Q=z),K.resetTextureUnits();let Ie=Q.fog,Be=ue.isMeshStandardMaterial?Q.environment:null,Ge=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qs,ke=(ue.isMeshStandardMaterial?he:le).get(ue.envMap||Be),Je=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ke=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Xe=!!ce.morphAttributes.position,at=!!ce.morphAttributes.normal,Tt=!!ce.morphAttributes.color,jt=$i;ue.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(jt=_.toneMapping);let Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ct=Ft!==void 0?Ft.length:0,Ze=V.get(ue),Gt=m.state.lights;if(Me===!0&&(te===!0||P!==b)){let bn=P===b&&ue.id===w;pe.setState(ue,P,bn)}let mt=!1;ue.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Gt.state.version||Ze.outputColorSpace!==Ge||ne.isBatchedMesh&&Ze.batching===!1||!ne.isBatchedMesh&&Ze.batching===!0||ne.isBatchedMesh&&Ze.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ze.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ze.instancing===!1||!ne.isInstancedMesh&&Ze.instancing===!0||ne.isSkinnedMesh&&Ze.skinning===!1||!ne.isSkinnedMesh&&Ze.skinning===!0||ne.isInstancedMesh&&Ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ze.instancingMorph===!1&&ne.morphTexture!==null||Ze.envMap!==ke||ue.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==Ke||Ze.morphTargets!==Xe||Ze.morphNormals!==at||Ze.morphColors!==Tt||Ze.toneMapping!==jt||Ze.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Ze.__version=ue.version);let Bn=Ze.currentProgram;mt===!0&&(Bn=nc(ue,Q,ne));let Ir=!1,On=!1,aa=!1,Ht=Bn.getUniforms(),Xn=Ze.uniforms;if(U.useProgram(Bn.program)&&(Ir=!0,On=!0,aa=!0),ue.id!==w&&(w=ue.id,On=!0),Ir||b!==P){U.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(T,"projectionMatrix",P.projectionMatrix),Ht.setValue(T,"viewMatrix",P.matrixWorldInverse);let An=Ht.map.cameraPosition;An!==void 0&&An.setValue(T,me.setFromMatrixPosition(P.matrixWorld)),Y.logarithmicDepthBuffer&&Ht.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ht.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,On=!0,aa=!0)}if(ne.isSkinnedMesh){Ht.setOptional(T,ne,"bindMatrix"),Ht.setOptional(T,ne,"bindMatrixInverse");let bn=ne.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(T,"boneTexture",bn.boneTexture,K))}ne.isBatchedMesh&&(Ht.setOptional(T,ne,"batchingTexture"),Ht.setValue(T,"batchingTexture",ne._matricesTexture,K),Ht.setOptional(T,ne,"batchingIdTexture"),Ht.setValue(T,"batchingIdTexture",ne._indirectTexture,K),Ht.setOptional(T,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ht.setValue(T,"batchingColorTexture",ne._colorsTexture,K));let Yn=ce.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&de.update(ne,ce,Bn),(On||Ze.receiveShadow!==ne.receiveShadow)&&(Ze.receiveShadow=ne.receiveShadow,Ht.setValue(T,"receiveShadow",ne.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Xn.envMap.value=ke,Xn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Q.environment!==null&&(Xn.envMapIntensity.value=Q.environmentIntensity),On&&(Ht.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&B_(Xn,aa),Ie&&ue.fog===!0&&oe.refreshFogUniforms(Xn,Ie),oe.refreshMaterialUniforms(Xn,ue,B,j,m.state.transmissionRenderTarget[P.id]),wo.upload(T,km(Ze),Xn,K)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(wo.upload(T,km(Ze),Xn,K),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ht.setValue(T,"center",ne.center),Ht.setValue(T,"modelViewMatrix",ne.modelViewMatrix),Ht.setValue(T,"normalMatrix",ne.normalMatrix),Ht.setValue(T,"modelMatrix",ne.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let bn=ue.uniformsGroups;for(let An=0,Gd=bn.length;An<Gd;An++){let qs=bn[An];We.update(qs,Bn),We.bind(qs,Bn)}}return Bn}function B_(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function O_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,Q,ce){let ue=V.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),V.get(P.texture).__webglTexture=Q,V.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ce,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Q){let ce=V.get(P);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0};let z_=T.createFramebuffer();this.setRenderTarget=function(P,Q=0,ce=0){D=P,A=Q,I=ce;let ue=!0,ne=null,Ie=!1,Be=!1;if(P){let ke=V.get(P);if(ke.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(T.FRAMEBUFFER,null),ue=!1;else if(ke.__webglFramebuffer===void 0)K.setupRenderTarget(P);else if(ke.__hasExternalTextures)K.rebindTextures(P,V.get(P.texture).__webglTexture,V.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&V.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(P)}}let Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);let Ke=V.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[Q])?ne=Ke[Q][ce]:ne=Ke[Q],Ie=!0):P.samples>0&&K.useMultisampledRTT(P)===!1?ne=V.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[ce]:ne=Ke,E.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else E.copy(ge).multiplyScalar(B).floor(),F.copy(se).multiplyScalar(B).floor(),N=be;if(ce!==0&&(ne=z_),U.bindFramebuffer(T.FRAMEBUFFER,ne)&&ue&&U.drawBuffers(P,ne),U.viewport(E),U.scissor(F),U.setScissorTest(N),Ie){let ke=V.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ke.__webglTexture,ce)}else if(Be){let ke=Q;for(let Je=0;Je<P.textures.length;Je++){let Ke=V.get(P.textures[Je]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,ce,ke)}}else if(P!==null&&ce!==0){let ke=V.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,ce)}w=-1},this.readRenderTargetPixels=function(P,Q,ce,ue,ne,Ie,Be,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){U.bindFramebuffer(T.FRAMEBUFFER,ke);try{let Je=P.textures[Ge],Ke=Je.format,Xe=Je.type;if(!Y.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ue&&ce>=0&&ce<=P.height-ne&&(P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(Q,ce,ue,ne,Ae.convert(Ke),Ae.convert(Xe),Ie))}finally{let Je=D!==null?V.get(D).__webglFramebuffer:null;U.bindFramebuffer(T.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,Q,ce,ue,ne,Ie,Be,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke)if(Q>=0&&Q<=P.width-ue&&ce>=0&&ce<=P.height-ne){U.bindFramebuffer(T.FRAMEBUFFER,ke);let Je=P.textures[Ge],Ke=Je.format,Xe=Je.type;if(!Y.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,at),T.bufferData(T.PIXEL_PACK_BUFFER,Ie.byteLength,T.STREAM_READ),P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ge),T.readPixels(Q,ce,ue,ne,Ae.convert(Ke),Ae.convert(Xe),0);let Tt=D!==null?V.get(D).__webglFramebuffer:null;U.bindFramebuffer(T.FRAMEBUFFER,Tt);let jt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await S0(T,jt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,at),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ie),T.deleteBuffer(at),T.deleteSync(jt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Q=null,ce=0){let ue=Math.pow(2,-ce),ne=Math.floor(P.image.width*ue),Ie=Math.floor(P.image.height*ue),Be=Q!==null?Q.x:0,Ge=Q!==null?Q.y:0;K.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,ce,0,0,Be,Ge,ne,Ie),U.unbindTexture()};let V_=T.createFramebuffer(),k_=T.createFramebuffer();this.copyTextureToTexture=function(P,Q,ce=null,ue=null,ne=0,Ie=null){Ie===null&&(ne!==0?(no("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=ne,ne=0):Ie=0);let Be,Ge,ke,Je,Ke,Xe,at,Tt,jt,Ft=P.isCompressedTexture?P.mipmaps[Ie]:P.image;if(ce!==null)Be=ce.max.x-ce.min.x,Ge=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,Ke=ce.min.y,Xe=ce.isBox3?ce.min.z:0;else{let Yn=Math.pow(2,-ne);Be=Math.floor(Ft.width*Yn),Ge=Math.floor(Ft.height*Yn),P.isDataArrayTexture?ke=Ft.depth:P.isData3DTexture?ke=Math.floor(Ft.depth*Yn):ke=1,Je=0,Ke=0,Xe=0}ue!==null?(at=ue.x,Tt=ue.y,jt=ue.z):(at=0,Tt=0,jt=0);let Ct=Ae.convert(Q.format),Ze=Ae.convert(Q.type),Gt;Q.isData3DTexture?(K.setTexture3D(Q,0),Gt=T.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(K.setTexture2DArray(Q,0),Gt=T.TEXTURE_2D_ARRAY):(K.setTexture2D(Q,0),Gt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,Q.unpackAlignment);let mt=T.getParameter(T.UNPACK_ROW_LENGTH),Bn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ir=T.getParameter(T.UNPACK_SKIP_PIXELS),On=T.getParameter(T.UNPACK_SKIP_ROWS),aa=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ke),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xe);let Ht=P.isDataArrayTexture||P.isData3DTexture,Xn=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){let Yn=V.get(P),bn=V.get(Q),An=V.get(Yn.__renderTarget),Gd=V.get(bn.__renderTarget);U.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gd.__webglFramebuffer);for(let qs=0;qs<ke;qs++)Ht&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(P).__webglTexture,ne,Xe+qs),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(Q).__webglTexture,Ie,jt+qs)),T.blitFramebuffer(Je,Ke,Be,Ge,at,Tt,Be,Ge,T.DEPTH_BUFFER_BIT,T.NEAREST);U.bindFramebuffer(T.READ_FRAMEBUFFER,null),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(ne!==0||P.isRenderTargetTexture||V.has(P)){let Yn=V.get(P),bn=V.get(Q);U.bindFramebuffer(T.READ_FRAMEBUFFER,V_),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,k_);for(let An=0;An<ke;An++)Ht?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yn.__webglTexture,ne,Xe+An):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yn.__webglTexture,ne),Xn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bn.__webglTexture,Ie,jt+An):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,bn.__webglTexture,Ie),ne!==0?T.blitFramebuffer(Je,Ke,Be,Ge,at,Tt,Be,Ge,T.COLOR_BUFFER_BIT,T.NEAREST):Xn?T.copyTexSubImage3D(Gt,Ie,at,Tt,jt+An,Je,Ke,Be,Ge):T.copyTexSubImage2D(Gt,Ie,at,Tt,Je,Ke,Be,Ge);U.bindFramebuffer(T.READ_FRAMEBUFFER,null),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xn?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(Gt,Ie,at,Tt,jt,Be,Ge,ke,Ct,Ze,Ft.data):Q.isCompressedArrayTexture?T.compressedTexSubImage3D(Gt,Ie,at,Tt,jt,Be,Ge,ke,Ct,Ft.data):T.texSubImage3D(Gt,Ie,at,Tt,jt,Be,Ge,ke,Ct,Ze,Ft):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Be,Ge,Ct,Ze,Ft.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Ft.width,Ft.height,Ct,Ft.data):T.texSubImage2D(T.TEXTURE_2D,Ie,at,Tt,Be,Ge,Ct,Ze,Ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,mt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Bn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ir),T.pixelStorei(T.UNPACK_SKIP_ROWS,On),T.pixelStorei(T.UNPACK_SKIP_IMAGES,aa),Ie===0&&Q.generateMipmaps&&T.generateMipmap(Gt),U.unbindTexture()},this.initRenderTarget=function(P){V.get(P).__webglFramebuffer===void 0&&K.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?K.setTextureCube(P,0):P.isData3DTexture?K.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?K.setTexture2DArray(P,0):K.setTexture2D(P,0),U.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,U.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var dl=class n extends ze{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Jt;let i=this,s=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new En,d=new M,f=new M,h=new M,p=new ct,x=new M(0,0,-1),g=new ut,m=new M,y=new M,S=new ut,_=new ct,C=this.camera,A=new Rn(r,o,{samples:c,type:Si}),I=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:oh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=A.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=_,this.material=I,this.onBeforeRender=function(D,w,b){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(b.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(f,x),y.reflect(d).negate(),y.add(f),C.position.copy(m),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(d),C.lookAt(y),C.far=b.far,C.updateMatrixWorld(),C.projectionMatrix.copy(b.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(C.projectionMatrix),_.multiply(C.matrixWorldInverse),_.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(C.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=C.projectionMatrix;S.x=(Math.sign(g.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(g.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],g.multiplyScalar(2/g.dot(S)),F.elements[2]=g.x,F.elements[6]=g.y,F.elements[10]=g.z+1-a,F.elements[14]=g.w,i.visible=!1;let N=D.getRenderTarget(),O=D.xr.enabled,q=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(A),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(w,C),D.xr.enabled=O,D.shadowMap.autoUpdate=q,D.setRenderTarget(N);let H=b.viewport;H!==void 0&&D.state.viewport(H),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}};dl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var dh=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function ox(n,e,t,i,s){return e.scale(...i),e.rotateZ(s),e.translate(...t),{tone:n,geometry:e}}function yn(n,e,t,i=0,s=0){return ox(n,new Rt(1,i),e,t,s)}function fp(n,e,t,i=0){return ox(n,new hi(1),e,t,i)}function HT(n,e){let t=new $e;return t.setAttribute("position",new Ne(e.flat(),3)),{tone:n,geometry:t}}function rx(n,e,t){let i=[];for(let[s,r]of t.entries())i.push(e,r,t[(s+1)%t.length]);return HT(n,i)}function WT(){let n=[yn("fur",[0,.012,.011],[.154,.161,.132],1),yn("fur",[0,-.065,.008],[.128,.079,.108]),yn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),yn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),rx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),yn("skin",[0,-.061,-.133],[.102,.066,.065],1),yn("skinShade",[0,-.097,-.14],[.076,.031,.047]),yn("skin",[0,.015,-.15],[.041,.056,.038]),yn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(yn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),yn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),fp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),yn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),yn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),yn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),yn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),yn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),yn("ink",[e*.047,.031,-.183],[.011,.012,.006]),fp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),fp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(rx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function qT(n){let e=[],t=0;for(let{tone:r,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:r,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:r},o)=>i.set(r.getAttribute("position").array,e[o].start*3));let s=new $e;return s.setAttribute("position",new ft(i,3)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),{geometry:s,ranges:e}}var XT=qT(WT());function fh(n=0){let e=new Pt({flatShading:!0}),t=new Pt({flatShading:!0}),i=new Pt({vertexColors:!0,flatShading:!0}),s=[],r={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=r[f];for(let y=h;y<p;y++)u.setXYZ(y,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<dh.length?u:0;if(d===o)return;o=d;let f=dh[o];for(let[h,p]of Object.entries(f))(r[h]??=new De).set(p);e.color.copy(r.fur),t.color.copy(r.hand),s.forEach(a)}function c(u){let d=u.geometry.clone(),f=new ft(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return s.push(h),a(h),new ze(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new _t;return u.add(c(XT)),u}}}var fr=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],YT=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],ZT=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],ax=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],ph=fr.length-1,lx=Math.min(...fr.map(n=>n[1])),cx=Math.max(...fr.map(n=>n[1])),Qi=new M(0,0,(lx+cx)/2),mh=new M(.047,.027,(cx-lx)/2),jT=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],JT=[-.57,.57,1,.61,-.61,-1],$T=[1,1,-.04,-.91,-.91,-.04];function gh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,s=i?-1:1,r=[],o=[],a=[];function l(w=0,b=0,E=0){let F=r.length/3;return r.push(w*s,b,E),F}function c(w,b,E){i?o.push(w,E,b):o.push(w,b,E)}function u(w,b,E,F){c(w,b,E),c(w,E,F)}function d(w,b){for(let E=0;E<w.length;E++){let F=(E+1)%w.length;u(w[F],w[E],b[E],b[F])}}function f(w,b){for(let E=0;E<w.length;E++)c(b,w[(E+1)%w.length],w[E])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=fr.map(([w,b,E,F],N)=>{let O=N===0||N===ph,q=w*.67,H=-.024+(b+.024)*.69;return{top:l(w,E,b),middle:l(w*1.08,(E+F)/2,O?b:-.025+(b+.025)*1.04),bottom:l(w,F,b),innerTop:l(q,YT[N],H),innerBottom:l(q,ZT[N],H)}});function g(w){let b=x[w],E=x[(w+1)%x.length];return[b.top,E.top,E.middle,E.bottom,b.bottom,b.middle]}let m=new Set(ax.map(({edge:w})=>w));m.add(ph);for(let w=0;w<x.length;w++){let b=x[w],E=x[(w+1)%x.length];c(h,b.innerTop,E.innerTop),c(p,E.innerBottom,b.innerBottom),u(b.innerTop,b.top,E.top,E.innerTop),u(E.innerBottom,E.bottom,b.bottom,b.innerBottom),m.has(w)||(u(E.top,b.top,b.middle,E.middle),u(E.middle,b.middle,b.bottom,E.bottom))}let y=g(ph);t||f(y,l(0,0,fr[ph][1]));let S=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:w,length:b,splay:E}of ax){let[F,N,O,q]=fr[w],[H,j,B,re]=fr[w+1],ae=H-F,ge=j-N,se=-ge+ae*E,be=ae+ge*E,ve=Math.hypot(se,be),Me=Math.hypot(ae,ge)/2,te=(O+B-q-re)/4,ie=[],me=g(w);for(let[z,ee,fe]of jT){let T=[l(),l(),l(),l(),l(),l()];d(me,T),ie.push({ring:T,distance:z*b,width:ee*Me,height:fe*te}),me=T}let Ee=l();f(me,Ee),a.push({x:(F+H)/2,y:(O+B+q+re)/4,z:(N+j)/2,forwardX:se/ve,forwardZ:be/ve,rows:ie,tip:Ee,length:b,pressure:-1})}let _=new $e,C=new Ne(r,3).setUsage(wn);_.setAttribute("position",C),_.setIndex(o),_.boundingSphere=new jn(new M(0,-.018,-.052),.12),_.boundingBox=new tn(new M(-.1,-.082,-.17),new M(.1,.038,.025));let A=!0;function I(w,b=!0){let E=!1;for(let F=0;F<a.length;F++){let N=a[F],O=w?.[F],q=Number.isFinite(O)?Ue.clamp(O,0,1):0;if(q===N.pressure)continue;N.pressure=q,E=!0;let{forwardX:H,forwardZ:j,length:B,rows:re,tip:ae}=N,ge=N.x,se=N.z,be=N.y,ve=0,Me=0;for(let{ring:me,distance:Ee,width:z,height:ee}of re){let fe=Ee/B,T=Ue.smoothstep(fe,0,.57),G=Ue.smoothstep(fe,.38,1),J=(.17+q*.83)*T+(.14+q*.76)*G,Y=(J+ve)/2,U=Ee-Me,Z=Math.cos(Y)*U;ge+=H*Z,be-=Math.sin(Y)*U,se+=j*Z;for(let V=0;V<me.length;V++){let K=JT[V]*z,le=$T[V]*ee,he=le*Math.sin(J);C.setXYZ(me[V],s*(ge+j*K+H*he),be+le*Math.cos(J),se-H*K+j*he)}ve=J,Me=Ee}let te=B-Me,ie=te*Math.cos(ve);C.setXYZ(ae,s*(ge+H*ie),be-te*Math.sin(ve),se+j*ie)}E&&(C.needsUpdate=!0,A=!0),b&&A&&(_.computeVertexNormals(),A=!1)}I(),_.getAttribute("normal").setUsage(wn);let D=new ze(_,e);return D.castShadow=!0,{mesh:D,pose:I,wristIndices:S}}var As=12,pp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],KT=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],ux=pp.flatMap(([n,e,t])=>Array.from({length:As},(i,s)=>{let r=(s-.5)*Math.PI*2/As;return[Math.cos(r)*e,n,Math.sin(r)*t+.04]}));function xh(n,e){let t=ux.length,i=[],s=(j,B,re,ae,ge)=>j.push(B,re,ae,B,ae,ge);function r(j,B,re=!1){for(let ae=1;ae<B.length-1;ae++)re?j.push(B[0],B[ae+1],B[ae]):j.push(B[0],B[ae],B[ae+1])}let o=(j,B)=>j*As+(B+As)%As;for(let j=0;j<pp.length-1;j++)for(let B=0;B<As;B++)(j===2||j===3)&&(B===0||B===6)||s(i,o(j,B),o(j+1,B),o(j+1,B+1),o(j,B+1));r(i,Array.from({length:As},(j,B)=>o(0,B))),r(i,Array.from({length:As},(j,B)=>o(pp.length-1,B)),!0);let a=t,l=e.map(({geometry:j,wristIndices:B},re)=>{let ae=re===0?6:0,ge=[o(4,ae),o(4,ae+1),o(3,ae+1),o(2,ae+1),o(2,ae),o(3,ae)],se=[ge,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],be=se.at(-1),ve=new Array(j.attributes.position.count);B.forEach((ie,me)=>{ve[ie]=be[me]});for(let ie=0;ie<ve.length;ie++)ve[ie]??=a++;let Me=[];for(let ie=0;ie<j.index.count;ie++)Me.push(ve[j.index.getX(ie)]);for(let ie=0;ie<se.length-1;ie++)for(let me=0;me<6;me++){let Ee=(me+1)%6;s(i,se[ie][me],se[ie][Ee],se[ie+1][Ee],se[ie+1][me])}let te=[];return r(te,be),{socket:ge,rings:se,wrist:be,wristIndices:B,remap:ve,skin:Me,cap:te,sign:re===0?-1:1}}),c=new $e,u=new Ne(a*3,3).setUsage(wn);c.setAttribute("position",u);let d=new ze(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(j,B)=>new tr([...i,...l.flatMap((re,ae)=>B&1<<ae?re.skin:re.cap)],1));c.setIndex(f[0]);let h=new M,p=new M,x=new M,g=new M,m=new M,y=new M,S=new M,_=new M,C=new M,A=new qe,I=new qe,D=new qe,w=new M(0,0,-1),b=new qe().setFromEuler(new sn(-1.42,0,0)),E=[.24,.62,.94,.56],F=[.089,.084,.069,.054,.037],N=0,O=0,q=!0;function H(j,B,re,ae,ge){let se=!!(j[0]||j[1]);if(!se&&!q&&N===re&&O===ae)return;N=re,O=ae,q=se;for(let ve=0;ve<t;ve++){let[Me,te,ie]=ux[ve];u.setXYZ(ve,Me*re,te*ae,ie*re)}let be=0;for(let ve=0;ve<l.length;ve++){let Me=l[ve],te=j[ve],ie=e[ve].geometry.attributes.position,me=!!te,Ee=Me.wristIndices;me&&ge&&(be|=1<<ve),p.set(0,0,0);for(let z of Me.socket)p.add(h.fromBufferAttribute(u,z));p.multiplyScalar(1/6),g.set(0,0,0);for(let z of Ee)g.add(h.fromBufferAttribute(ie,z));g.multiplyScalar(1/6).applyQuaternion(te?.quaternion??b),me?g.add(te.position):g.add(h.set(p.x+Me.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),y.copy(m).normalize(),S.set(Me.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Me.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),me&&x.addScaledVector(S,Math.sqrt(Math.max(.007,B**2-m.lengthSq()*.25))*.72),A.setFromUnitVectors(w,y.subVectors(x,p).normalize()),I.copy(te?.quaternion??b);for(let z=0;z<4;z++){let ee=z===3;C.lerpVectors(ee?x:p,ee?g:x,E[z]),D.copy(A).slerp(I,ee?.79:z*.19);for(let fe=0;fe<6;fe++){let T=KT[fe],G=F[z];_.set(T[0]*G,T[1]*G*.84,0).applyQuaternion(D).add(C),u.setXYZ(Me.rings[z+1][fe],_.x,_.y,_.z)}}for(let z=0;z<Me.remap.length;z++)_.fromBufferAttribute(ie,z).applyQuaternion(I),me?_.add(te.position):_.add(h.set(p.x+Me.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Me.remap[z],_.x,_.y,_.z)}c.index!==f[be]&&c.setIndex(f[be]),u.needsUpdate=!0,c.computeVertexNormals()}return H([null,null],.42,1,1,!1),{mesh:d,pose:H}}function Eo(n,e){let t=new ui;return n.forEach(([i,s],r)=>r===0?t.moveTo(-i,s):t.lineTo(-i,s)),t.closePath(),new Yi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var hx=.1,QT=45,dx=55,fl=128,mp=96,eA=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],tA=new M(0,0,-1);function gp(){let n=new _t,e=new pt({color:"#596974",roughness:.38,metalness:.6}),t=new pt({color:"#29323e",roughness:.68}),i=new gt({color:"#ffd563",toneMapped:!1});function s(o,a,l,c,u,d=0){let f=new ze(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let r=new pt({color:"#7f4231",roughness:.46,metalness:.34});return s(Eo([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),s(Eo([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),r,.035,0,0),s(new Dt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),s(new Qe(.054,.014,.073),r,.035,.045,-.099),s(new Qe(.018,.008,.023),i,.035,.063,-.131),n}function fx(n,{impact:e,onShot:t}){let i=gp(),s=new ze(new Rt(.045,0),new gt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));s.position.set(.035,.028,-.208),i.add(s),n.add(i),i.visible=!1;let r=new $e,o=new Ne(fl*18,3).setUsage(wn),a=new Ne(fl*18,3);for(let N=0;N<fl;N++)for(let O=0;O<6;O++){let q=eA[Math.floor(O/2)];a.setXYZ(N*6+O,q.r,q.g,q.b)}r.setAttribute("position",o),r.setAttribute("color",a),r.setDrawRange(0,0);let l=new ir(r,new _i({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Ne(mp*3,3).setUsage(wn),u=new $e;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Ba(u,new uo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:$n}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:fl},()=>({p:new M,d:new M,distance:0,active:!1,authoritative:!1})),h=Array.from({length:mp},()=>({p:new M,v:new M,life:0})),p=new M,x=new M,g=new M,m=0,y=0,S=0,_=0,C=0,A=!1;function I(N,O,q,H){for(let j=0;j<q;j++){let B=h[y++%mp];B.p.copy(N),B.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(H).addScaledVector(O,.55),B.life=.12+Math.random()*.21}}function D(N,O,q){let H=f[m++%fl];return H.p.copy(N),H.d.copy(tA).applyQuaternion(O),H.distance=0,H.active=!0,H.authoritative=q,H}function w(N){let O=D(N.position,N.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),I(p,O.d,4,2.2),C=.055,S++,t?.(N.position,N.quaternion)}function b(N,O,q){let H=D(N,O,q);I(H.p,H.d,4,2.2),l.visible=!0}function E({dt:N,aim:O,firing:q}){if(!O&&!i.visible&&!l.visible&&!d.visible)return;if(N=Math.max(0,Math.min(N,.12)),i.visible=!!O,O&&(i.position.copy(O.modelPosition??O.position),i.quaternion.copy(O.quaternion)),O&&q){if(A)for(_-=N;_<=0;)w(O),_+=hx;else w(O),_=hx;A=!0}else _=0,A=!1;C=Math.max(0,C-N),s.visible=!!O&&C>0,s.material.opacity=C/.055;let H=0;for(let B of f){if(!B.active)continue;let re=Math.min(QT*N,dx-B.distance),ae=re>0?e?.(B.p,B.d,re,B.authoritative):null,ge=ae==null?re:Math.max(0,Math.min(re,ae));B.p.addScaledVector(B.d,ge),B.distance+=ge,ae!=null&&(g.copy(B.d).negate(),I(B.p,g,8,4.2)),B.active=ae==null&&B.distance<dx;let se=Math.min(.82,B.distance);for(let be=0;be<3;be++)for(let ve=0;ve<2;ve++){let Me=(be+ve)/3;x.copy(B.p).addScaledVector(B.d,-se*Me),o.setXYZ(H++,x.x,x.y,x.z)}}l.visible=H>0,H>0&&(o.needsUpdate=!0),r.setDrawRange(0,H);let j=0;for(let B of h)B.life<=0||(B.life-=N,B.v.y-=5*N,B.p.addScaledVector(B.v,N),B.life>0&&c.setXYZ(j++,B.p.x,B.p.y,B.p.z));d.visible=j>0,j>0&&(c.needsUpdate=!0),u.setDrawRange(0,j)}function F(){for(let N of f)N.active=!1;for(let N of h)N.life=0;_=C=0,A=!1,i.visible=s.visible=l.visible=d.visible=!1,r.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:E,reset:F,replay:b,get shotsFired(){return S}}}var px=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],nA=new M(0,1,0);function yh(n){let e=new _t,t=new pt({color:"#2c4750",roughness:.43,metalness:.47}),i=new pt({color:"#899fa3",roughness:.46,metalness:.57}),s=new gt({toneMapped:!1});function r(h,p,x,g,m,y=0){let S=new ze(h,p);return S.position.set(x,g,m),S.rotation.x=y,e.add(S),S}r(Eo([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),r(Eo([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),r(new Dt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),r(new Dt(.016,.02,.011,6,1,!0),s,.038,.025,-.169,-Math.PI/2),r(new Qe(.044,.009,.038),s,.038,.069,-.023);let o=new ze(new Dt(.002,.003,1,5,1,!0),new gt({transparent:!0,opacity:.52,depthWrite:!1,blending:$n,toneMapped:!1})),a=new ze(new Rt(.012,0),new gt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new M,c=new M,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,s.color.set(px[h-1]??px[0]),o.material.color.copy(s.color),a.material.color.copy(s.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(nA,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var iA="wss://clouddata.turbowarp.org",sA="itssoren.github.io/VR/gorilla-lab/",Mh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Co=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),xx="\u2601 GorillaHost",pl=["ARENE1","ARENE2","ARENE3"],rA=new Map([[xx,"vr"],[Mh.vr,"vr"],[Mh.pc,"pc"],...Co.map(n=>[n,"player"])]),yp=53,vh=4400,yx=64e3,oA=100,aA=200,lA=450,vx=6,Vt=(n,e)=>Math.round(n).toString().padStart(e,"0");function ml(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function pr(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function cA({time:n,id:e,x:t,y:i,z:s,yaw:r,map:o}){let a=[t,i,s];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(r)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(r*180/Math.PI%360+360)%360;return"1"+n+Vt(e,7)+a.map(c=>Vt(c*100+2e4,5)).join("")+Vt(Math.round(l*10)%3600,4)+Vt(o,6)}function uA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[s,r,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[s,r,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:s,y:r,z:o,yaw:a*Math.PI/1800,map:l}}function _x({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:s=()=>{},Socket:r=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,g="",m=-1/0,y=null,S=0,_=0,C=1/0,A=0,I="offline",D=!1,w=-1,b=0,E=[],F=1/0,N=350,O=1/0,q=0,H=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function B(T,G){I=T,n(G)}function re(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ae(){return[...c.values()].map(T=>T.pose).filter(Boolean)}function ge(){let T=ae().filter(U=>h==="vr"?U.role!=="vr":U.role==="vr"),G=U=>Number(U.ready)*2+ +(U.role==="pc"),J=T.find(U=>U.id===y?.id)??null,Y=T.reduce((U,Z)=>!U||G(Z)>G(U)?Z:U,J);Y!==y&&(y=Y,e(y))}function se(T){for(let G of c.values())G.pose&&t(null,G.pose),G.pose=G.candidate=null;T&&c.clear(),ge()}function be(){let T=f;if(f=null,T){T.onopen=T.onmessage=T.onerror=T.onclose=null;try{T.close()}catch{}}}function ve(){be(),h=null,p="",C=1/0,D=!1,w=-1,E=[],H=[],se(!0),B("offline","Hors ligne")}function Me(T){let G=Math.min(3e4,1500*2**Math.min(A++,5));C=a()+G,B("retry","TurboWarp d\xE9connect\xE9 ("+T+") \xB7 reconnexion automatique au salon "+p)}function te(T){let G=!1;for(let[J,Y]of c)Y.pose&&T-Y.pose.arrival>vh&&(t(null,Y.pose),Y.pose=null,G=!0),Y.candidate&&T-Y.candidate.arrival>vh&&(Y.candidate=null),T-Y.lastArrival>6e4&&c.delete(J);G&&ge()}function ie(T,G,J,Y){let U=vA(J.value,null);if(!U||U.id===x)return;let Z=c.get(U.id);if(!Z){if(c.size>=64)return;Z={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:Y,pose:null,candidate:null},c.set(U.id,Z)}if(U.time<=Z.lastTime)return;let V=Z.pose??Z.candidate;if(V&&U.time-V.time>vh+Y-V.arrival){if(Z.pose)return;Z.candidate=null}Z.lastTime=U.time,Z.lastArrival=Y;let K={...U,ready:U.ready??!0,protocol:U.protocol??(U.ready===void 0?3:4),role:T,channel:G,received:o(),arrival:Y},le=Z.candidate;if(!Z.pose&&(!le||le.channel!==G||le.map!==K.map||Y-le.arrival>vh)&&(U.ready!==void 0||Math.abs(U.time-K.received)>25e3)){Z.candidate=K;return}if(Z.candidate=null,!Z.pose&&le?.objects&&le.ready&&le.map===K.map&&!K.objects&&(K.objects=le.objects),Z.pose=K,h==="vr"&&T==="vr"&&K.ready)if(O===1/0||le?.arrival<O||U.id<x)h="player",g=Co[x%Co.length],B("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(j.received++,j.bytesReceived+=J.value.length,t(K),ge(),!(!D||!K.ready||K.map!==w)){Y-Z.shotWindow>=1e3&&(Z.shotWindow=Y,Z.shotCount=0);for(let{seq:he,position:R,quaternion:v}of K.shots??[])he<=Z.lastShot||(Z.lastShot=he,!(Z.shotCount>=14||(R.x-K.x)**2+(R.y-K.y)**2+(R.z-K.z)**2>7**2)&&(Z.shotCount++,s({position:R,quaternion:v},K)));if(!(h!=="vr"||T!=="player"||U.actionTarget!==x))for(let{seq:he,action:R}of U.actions)he<=Z.lastAction||(Z.lastAction=he,i(R,K))}}function me(){let T;try{T=new r(iA)}catch{return!1}return f=T,_=a(),m=-1/0,O=1/0,B("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),T.onopen=()=>{f===T&&(S=a(),T.send(JSON.stringify({method:"handshake",project_id:sA+p,user:"player"+x})+`
`),B("open",re()))},T.onmessage=G=>{if(f!==T||typeof G.data!="string"||G.data.length>105e4)return;let J=a();te(J);for(let Y of G.data.split(`
`)){if(!Y.trim())continue;let U;try{U=JSON.parse(Y)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",Y.slice(0,200));continue}let Z=rA.get(U?.name);U?.method!=="set"||!Z||ie(Z,U.name,U,J)}},T.onerror=()=>{f===T&&B("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},T.onclose=G=>{if(f!==T)return;let J=G.code;if(be(),se(!1),E=[],H=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(J)){Me(J);return}h=null,p="";let Y={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[J];B("error","TurboWarp d\xE9connect\xE9 ("+J+")"+(Y?" \xB7 "+Y:G.reason?" \xB7 "+G.reason.slice(0,100):""))},!0}function Ee(T,G){let J=ml(T);return!/^[A-Z0-9]{5,12}$/.test(J)||!["vr","pc","player"].includes(G)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===G&&p===J?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(se(!0),x=Math.floor(1e6+l()*8999999),h=G,p=J,g=Mh[h]??Co[x%Co.length],N=350,h==="vr"&&pl.includes(p)&&(g=x%2===0?Mh.vr:xx,N=750+x%150),b=q=0,H=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},A=0,C=F=1/0,me()?!0:(h=null,p="",B("error","WebSocket indisponible."),!1))}function z(T,G){let J=T.hand||T.type==="world"?5:4;if(h!=="player"||I!=="open"||!y?.ready||y.protocol<J||y.map!==G||!vp(T)||b>=99999999)return!1;let Y=a();return E=E.filter(U=>U.expires>=Y&&U.target===y.id&&U.map===G),E.length>=8?!1:(E.push({action:{...T},seq:++b,expires:Y+1800,target:y.id,map:G}),!0)}function ee(T,G,J){if(!h||h==="pc"||I!=="open"||q>=99999999)return;let Y=Io(T),U=Lo(G);if(!Y||!U)return;let Z=a();H=H.filter(V=>V.expires>=Z&&V.map===J).slice(-(vx-1)),H.push({record:Vt(++q,8)+Y+U,expires:Z+lA,map:J})}function fe(T){let G=a();D=!!T&&T.ready!==!1,w=T?.map??-1,te(G),h&&!f&&G>=C&&(C=1/0,me()||Me(1006)),f&&f.readyState===0&&G-_>1e4&&(be(),Me(1006)),j.bufferedBytes=f?.bufferedAmount??0;let J=h==="pc"?aA:oA;if(!T||!h||f?.readyState!==1||j.bufferedBytes>4096||G-S<(h==="vr"?N:350)||G-m<J)return!1;if(h==="player"){let le=ae().filter(R=>R.role==="player"),he=le.find(R=>R.channel===g);if(he?F=Math.min(G,F):F=1/0,he&&(he.id<x||G-F>=800)){let R=Co.find(v=>!le.some(L=>L.channel===v));if(!R)return I!=="capacity"&&B("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=R,F=1/0}}(A||I==="capacity")&&(A=0,B("open",re()));let Y=Math.round(d+G-u),U=cA({...T,time:Y,id:x});if(!U)return!1;E=E.filter(le=>le.expires>=G&&le.target===y?.id&&le.map===T.map),H=H.filter(le=>le.expires>=G&&le.map===T.map);let Z=j.bufferedBytes===0?T.objectFeed?.(G):null,V=typeof T.avatar=="function"?T.avatar():T.avatar,K=yA(U,V,Z,{version:5,ready:T.ready!==!1,actions:E,actionTarget:E[0]?.target??0,shots:H,score:T.score});return m=G,h==="vr"&&(O=Math.min(O,G)),f.send(JSON.stringify({method:"set",name:g,value:K})+`
`),j.sent++,j.bytesSent+=K.length,!0}return{join:Ee,leave:ve,tick:fe,sendAction:z,queueShot:ee,get stats(){return{...j}},get role(){return h},get code(){return p},get state(){return I},get remote(){return y},get peers(){return ae()}}}var hA=15,dA=12,Mx=44,_h=15,xp=35,Io=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Vt(e*100+2e4,5)).join(""):null;function Ro(n,e){let[t,i,s]=[e,e+5,e+10].map(r=>(Number(n.slice(r,r+5))-2e4)/100);return[t,i,s].some(r=>Math.abs(r)>180)?null:{x:t,y:i,z:s}}var Lo=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Vt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Po(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[s,r,o,a]=t.map(l=>l/i);return{x:s,y:r,z:o,w:a}}function fA(n){let e=Io(n.mesh.position),t=Lo(n.mesh.quaternion),i=n.netId,s=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(s)||s<0||s>yp)return null;let r=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Vt(i,5)+Vt(s,2)+r+o+Vt(a,8)+e+t}function pA(n){return Vt(n,5)+"99"+"0".repeat(Mx-7)}function mA(n){if(!n)return null;let e=Lo(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Io(l.position),u=l&&Lo(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(hA+dA)}),s=Vt(Math.max(0,Math.min(999,(n.height??1)*100)),3),r=Vt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+s+r+o+Vt(n.coconuts??31,2)+Vt(n.color??0,2)+a}function vp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:s}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=yp?"10"+Vt(t,5):null;if(e==="world"){let o=s===1?2:s===2?4:s===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+s+Vt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(s)&&s>=1&&s<=7?"2"+s+Vt(i,5):null;let r=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(r)?(e==="hold"?"3":"4")+r+Vt(i,5):null}function gA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),s=["","spawn","tool","hold","release","world"][e];if(!s)return null;let r={type:s,objectId:i};return s==="spawn"?r={type:s,typeId:i}:s==="world"?r={type:s,mode:t,typeId:i}:s==="tool"?r.mode=t:t&&(r.hand=t),vp(r)===n?r:null}function xA(n){let e=Io(n?.position),t=Lo(n?.quaternion),i=Io(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function yA(n,e,t,i=null){let s=mA(e),r=t?.records.join("")??"";if(!i)return s?n+"3"+s+(t?(t.full?"2":"1")+r:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Vt(p,8)+vp(x)).join(""),a=i.version===5,l=a&&Io(e?.gun?.position),c=a&&Lo(e?.gun?.quaternion),u=s&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Vt(d.length,1)+d.map(p=>p.record).join("")+Vt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!s+(s??"")+xA(s?e.tool:null)+Vt(i.actionTarget??0,7)+Vt(o.length/_h,1)+o+f;return h.length+1+r.length>yx&&(t=null,r=""),h+(t?t.full?"2":"1":"0")+r}function mx(n,e,t){let i=Po(n,e);if(!i)return null;let s=[e+12,e+40].map((a,l)=>n[a]==="1"?{position:Ro(n,a+1),quaternion:Po(n,a+16),pressure:t?null:[0,1,2].map(c=>Number(n[e+79+3*l+c])/9)}:null);if(s.some(a=>a&&(!a.position||!a.quaternion)))return null;let r=Number(n[e+74]),o=Number(n.slice(e+75,e+77));return r>2||o>31?null:{head:i,hands:s,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:r,coconuts:o,color:t?0:Number(n.slice(e+77,e+79))}}function vA(n,e){if(typeof n!="string"||n.length>yx||!/^[0-9]+$/.test(n))return null;let t=uA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",s=i?43:Mx,r=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=mx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Ro(n,a+2),f=Po(n,a+17),h=Ro(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,r=a+l*_h+1,n.length<r))return null;t.actions=[];let c=0;for(;a<r-1;a+=_h){let u=Number(n.slice(a,a+8)),d=gA(n.slice(a+8,a+_h));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=Ro(n,a+1),h=Po(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>vx||n.length<a+u*xp+7)return null;t.shots=[];let d=0;for(let f=a+u*xp;a<f;a+=xp){let h=Number(n.slice(a,a+8)),p=Ro(n,a+8),x=Po(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),r=a+7}}else if(!i&&n[46]!=="3"||n.length<r||!(t.avatar=mx(n,47,i)))return null;let o=n[r-1];if(!["0","1","2"].includes(o)||(n.length-r)%s!==0||o==="0"&&n.length!==r)return null;if(o!=="0"){let a=[];for(let l=r;l<n.length;l+=s){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Ro(n,c+10),g=Po(n,c+25);if(d>yp||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var _A=.45,gx=2.5;function bx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function s(r,o){let a=r-i>=1600,l=a||r-t>=200;a&&(i=r),l&&(t=r);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=_A&&!d.frozen&&(d.velocity.lengthSq()>=gx**2||d.angular.lengthSq()*d.radius**2>=gx**2);if(!l&&!p&&!h?.fast)continue;let x=fA(d);if(!x)continue;c?.add(f);let g=x!==h?.record;g&&e.set(f,{record:x,until:r+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:pA(d),until:r+420}),n.delete(d));for(let[d,f]of e)f.until<r?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:s,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Sx=Bt.DEFAULT_UP,MA=15,wx=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function bA(){let n=new _t,e=new ze(new Rt(.155,1),new pt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new ze(new di(.23,.018,5,20),new gt({color:"#84e6ff",transparent:!0,opacity:.85,blending:$n,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new ze(new Xi(.11,.28,9,1,!0),new gt({color:"#55c7ff",transparent:!0,opacity:.45,side:At,blending:$n,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(s,r){e.rotation.y=r*.0014,t.position.y=-.13+Math.sin(r*.008)*.035,i.scale.y=.75+Math.sin(r*.013)*.24}}}function SA(){let n=new _t,e=new _t,t=fh(0),i=t.createHead(),s=["left","right"].map(m=>({skin:gh(m,t.hand,{openWrist:!0}),position:new M,quaternion:new qe,pressure:[0,0,0],tracked:!1})),r=xh(t.fur,s.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=r.mesh;n.add(i,o);let a=yh(e),l=null,c=new M,u=[null,null],d=new M,f=new qe,h=new qe,p=new qe,x={mode:0,position:new M,quaternion:new qe,end:new M};function g(m,y,S){let _=m.avatar,C=1-Math.exp(-S*32);if(!_){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),r.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(_.head).premultiply(f),i.quaternion.slerp(p,C),d.set(0,0,-1).applyQuaternion(i.quaternion);let A=Ue.smoothstep(-d.y,.28,.94),I=Math.max(.38,_.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*I,.24*A),o.rotation.x=-.5*A,h.copy(o.quaternion).invert(),t.setColor(_.color??0);for(let b=0;b<s.length;b++){let E=s[b],F=_.hands[b];if(u[b]=F?E:null,!F){E.tracked=!1;continue}c.copy(F.position).sub(m).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(F.quaternion).premultiply(f).premultiply(h),E.tracked?(E.position.lerp(c,C),E.quaternion.slerp(p,C)):(E.position.copy(c),E.quaternion.copy(p)),E.tracked=!0;for(let N=0;N<3;N++)E.pressure[N]+=((F.pressure?.[N]??0)-E.pressure[N])*C;E.skin.pose(E.pressure,!1)}if(r.pose(u,_.armSpan*.5,.97,I,!0),_.gun){l||(l=gp(),l.visible=!1,e.add(l));let b=l.visible?C:1;l.position.lerp(_.gun.position,b),l.quaternion.slerp(p.copy(_.gun.quaternion),b),l.visible=!0}else l&&(l.visible=!1);let D=_.tool;if(!D){a.hide(),x.mode=0;return}let w=x.mode?C:1;x.mode=D.mode,x.position.lerp(D.position,w),x.quaternion.slerp(p.copy(D.quaternion),w),x.end.lerp(D.end,w),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of s)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Tx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Ax({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:s,applyCoconuts:r,applyScore:o,onAction:a,onShot:l,onStatus:c}){let u=new Map,d=new Map,f=bx(),h=0,p=-1,x=-1,g=-1,m="",y=0,S=-1;function _(){let U=e();return U!==m&&(m=U,y=pr(U)),y}function C(U){return!!U?.ready&&U.map===_()}function A(U){let Z=d.get(U);Z&&(n.remove(Z.mesh),Z.mesh.material?.dispose(),d.delete(U))}function I(){for(let U of d.keys())A(U);h=0,p=-1,x!==-1&&(x=-1,s?.(null)),g!==-1&&(g=-1,r?.(null)),S!==-1&&(S=-1,o?.(0))}function D(U,Z){if(U.color===Z.color&&U.style===Z.style)return;U.color=Z.color,U.style=Z.style;let V=U.mesh.material;if(V?.color){if(V.color.setHex(Z.color),Z.style===0){Object.assign(V,U.baseMaterial),U.baseEmissive&&V.emissive.copy(U.baseEmissive),V.needsUpdate=!0;return}V.roughness=[.44,.94,.12,.16,.4][Z.style],V.metalness=[.1,0,.87,.12,0][Z.style],V.opacity=Z.style===3?.4:1,V.transparent=Z.style===3,V.depthWrite=!V.transparent,V.emissive?.copy(V.color),V.emissiveIntensity=Z.style===4?1.65:0,V.needsUpdate=!0}}function w(U){if(!C(U)){I();return}if((h!==U.id||p!==U.map)&&(I(),h=U.id,p=U.map),U.avatar&&U.avatar.light!==x&&(x=U.avatar.light,s?.(x)),U.avatar&&U.avatar.coconuts!==g&&(g=U.avatar.coconuts,r?.(g)),U.score!==void 0&&U.score!==S&&(S=U.score,o?.(S)),!U.objects)return;let Z=U.objects.full?new Set:null;for(let V of U.objects.records){if(V.removed){A(V.id);continue}Z?.add(V.id);let K=d.get(V.id);if(K&&K.type!==V.type&&(A(V.id),K=null),!K){let he=i?.(V.type);if(!he)continue;let{roughness:R,metalness:v,transparent:L,depthWrite:W,opacity:oe,emissiveIntensity:$}=he.material??{},xe={roughness:R,metalness:v,transparent:L,depthWrite:W,opacity:oe,emissiveIntensity:$};he.userData.netId=V.id,he.userData.netType=V.type,K={mesh:he,baseMaterial:xe,baseEmissive:he.material?.emissive?.clone(),type:V.type,target:new M().copy(V.position),quaternion:new qe().copy(V.rotation),velocity:new M,time:U.time},he.position.copy(K.target),he.quaternion.copy(K.quaternion),d.set(V.id,K),n.add(he)}let le=(U.time-K.time)/1e3;le>.06&&le<.65&&!(V.flags&6)?K.velocity.copy(V.position).sub(K.target).multiplyScalar(1/le).clampLength(0,23):K.velocity.set(0,0,0),K.target.copy(V.position),K.quaternion.copy(V.rotation),K.time=U.time,K.flags=V.flags,K.frequent=le>.06&&le<.16,K.received=U.arrival,K.mesh.userData.netFlags=V.flags,K.mesh.userData.held=!!(V.flags&1),D(K,V)}if(Z)for(let V of d.keys())Z.has(V)||A(V)}let b=new M;function E(U,Z,V){let K=1-Math.exp(-U*22),le=1-Math.exp(-U*32);for(let he of d.values()){if(he.mesh.visible=Z,!Z)continue;let R=he.frequent?le:K,v=he.flags&6?0:Math.min(he.frequent?.1:.12,Math.max(0,(V-he.received)/1e3));b.copy(he.target).addScaledVector(he.velocity,v),he.mesh.position.distanceToSquared(b)>16||he.flags&6&&he.mesh.position.distanceToSquared(he.target)<1e-4?he.mesh.position.copy(b):he.mesh.position.lerp(b,R),he.mesh.quaternion.slerp(he.quaternion,R),he.flags&6&&he.mesh.quaternion.angleTo(he.quaternion)<.008&&he.mesh.quaternion.copy(he.quaternion),he.mesh.updateMatrixWorld(!0)}}let F=U=>document.querySelector(U),N=F("#cloud-status"),O=F("#cloud-room"),q=F("#cloud-camera"),H=-1/0,j=0,B="Hors ligne",re=0;function ae(U){j=U,q.textContent="Cam\xE9ra : "+wx[U]}function ge(){ae((j+1)%wx.length)}q.onclick=ge;let se=_x({onStatus(U){B=U,N.textContent=U,c?.()},onPose(U){se.role!=="vr"&&w(U)},onPeer(U,Z){if(!U){let le=u.get(Z.id);le?.art&&(Tx(le.art.model),Tx(le.art.toolRoot),le.art.dispose?.()),u.delete(Z.id);return}let V=u.get(U.id);V||(V={art:null,motion:new M,handMotion:[new M,new M]},u.set(U.id,V));let K=V.pose;V.motion.set(0,0,0);for(let le of V.handMotion)le.set(0,0,0);if(K&&K.map===U.map){let le=(U.time-K.time)/1e3;if(le>=.055&&le<=.65){V.motion.set(U.x-K.x,U.y-K.y,U.z-K.z).multiplyScalar(1/le),V.motion.lengthSq()>=18**2&&V.motion.set(0,0,0);for(let he=0;he<2;he++){let R=K.avatar?.hands[he],v=U.avatar?.hands[he];R&&v&&V.handMotion[he].copy(v.position).sub(R.position).multiplyScalar(1/le).clampLength(0,23)}}}V.pose=U},onAction:a,onShot:l}),be=ml(new URLSearchParams(location.search).get("room")??"");function ve(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),U=>(U%36).toString(36)).join("").toUpperCase()}O.value=/^[A-Z0-9]{5,12}$/.test(be)?be:ve();function Me(U,Z=O.value){let V=ml(Z);if(!(se.role===U&&se.code===V)){if(!/^[A-Z0-9]{5,12}$/.test(V)){N.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}se.role&&se.leave(),se.join(V,U)&&(O.value=V,U!=="vr"&&F("#game").focus(),f.reset(),ae(0),t(pr(V)),m="")}}F("#cloud-vr").onclick=()=>Me("vr"),F("#cloud-new").onclick=()=>Me("vr",ve());for(let[U,Z]of pl.entries())F(`#public-join-${U}`).onclick=()=>Me("player",Z),F(`#public-host-${U}`).onclick=()=>Me("vr",Z);F("#cloud-pc").onclick=()=>Me("pc");let te=F("#cloud-player");te&&(te.onclick=()=>Me("player")),F("#cloud-leave").onclick=()=>{re=0,se.leave()},F("#cloud-copy").onclick=async()=>{let U=new URL(location.href);U.searchParams.set("room",se.code||ml(O.value));try{await navigator.clipboard.writeText(U.href),N.textContent="Lien copi\xE9."}catch{N.textContent=U.href}re=performance.now()+2500},addEventListener("pagehide",()=>se.leave());let ie=new M,me=new M,Ee=new M,z=new M,ee=0;function fe({dt:U,position:Z,yaw:V,pitch:K,camera:le,rig:he,keys:R,flat:v}){let L=v?.movement,W=Number(R.has("KeyD"))-Number(R.has("KeyQ")||R.has("KeyA"))+(L?.x??0),oe=Number(R.has("KeyS"))-Number(R.has("KeyZ")||R.has("KeyW"))+(L?.z??0);v?.consumeJump?.()&&(ee=.26),ee=Math.max(0,ee-U);let $=Number(R.has("Space")||ee>0)-Number(R.has("ShiftLeft")||R.has("ShiftRight")),xe=R.has("ControlLeft")||R.has("ControlRight")?11:3.2;z.set(W,$,oe).clampLength(0,1).applyAxisAngle(Sx,V),he.position.addScaledVector(z,U*xe).clampScalar(-175,175),he.rotation.set(0,V,0),le.position.set(0,0,0),le.rotation.set(K,0,0,"YXZ"),he.updateMatrixWorld(!0),Z.copy(he.position)}function T(U,Z,V,K){for(let le of u.values()){let he=le.pose;if(!(U&&C(he))){le.art&&(le.art.model.visible=!1,le.art.toolRoot&&(le.art.toolRoot.visible=!1));continue}le.art||(le.art=he.role==="pc"?bA():SA(),n.add(le.art.model),le.art.model.visible=!1,le.art.toolRoot&&n.add(le.art.toolRoot));let{model:v,toolRoot:L}=le.art,W=Math.min(.12,Math.max(0,(K-he.arrival)/1e3+.025));ie.copy(he).addScaledVector(le.motion,W),!v.visible||v.position.distanceToSquared(ie)>64?v.position.copy(ie):v.position.lerp(ie,1-Math.exp(-V*34)),v.rotation.y=he.yaw,v.visible=!0,L&&(L.visible=!0),le.art.draw(he,Z,V)}}function G(U,Z){if(Z<re)return;let V=se.remote,K=B;if(se.state==="open"){let le="Salon "+se.code+" \xB7 ",he=se.peers.filter(R=>R.ready);if(!U)K=le+"quitte la session VR pour utiliser le mode spectateur";else if(se.role!=="vr"&&V&&V.map!==_())K=le+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(se.role!=="vr"&&V&&!V.ready)K=le+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(se.role==="player"&&V&&V.protocol<5)K=le+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(se.role!=="vr"&&C(V))K=le+"h\xF4te connect\xE9";else if(se.role==="vr"){let R=he.filter(C),v=R.filter(W=>W.role==="player").length,L=R.some(W=>W.role==="pc");K=le+"tu h\xE9berges \xB7 "+(v+1)+" joueur"+(v?"s":""),L&&(K+=" \xB7 spectateur connect\xE9"),!v&&he.some(W=>!C(W))&&(K+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}N.textContent!==K&&(N.textContent=K,c?.())}function J(U){let{inVR:Z,time:V,dt:K,position:le,yaw:he,camera:R,rig:v,keys:L,avatar:W,bodies:oe,score:$}=U;if(!se.role){I();return}let xe=se.role!=="pc"||!Z,pe=performance.now(),Se=_(),_e=se.role!=="vr"?se.remote:null,de=xe&&C(_e);if(!de&&p!==-1&&I(),E(K,de,pe),T(xe,V,K,pe),se.role==="pc"&&!Z){(U.actions??L).delete("KeyC")&&ge();let Te=j===3&&de?[...d.values()].find(Ae=>Ae.type===MA)?.mesh:null,Ve=de?u.get(_e.id)?.art?.model:null;Te?(Ee.set(0,0,-.23).applyQuaternion(Te.quaternion),v.position.copy(Te.position).add(Ee),v.rotation.set(0,0,0),R.position.set(0,0,0),R.quaternion.copy(Te.quaternion),v.updateMatrixWorld(!0),le.copy(v.position)):Ve&&(j===1||j===2)?(Ee.set(0,.72,j===1?-2.7:2.7).applyAxisAngle(Sx,Ve.rotation.y),me.copy(Ve.position).add(Ee),v.position.lerp(me,1-Math.exp(-K*11)),R.position.set(0,0,0),v.updateMatrixWorld(!0),R.lookAt(Ve.position),R.updateWorldMatrix(!0,!1),le.copy(v.position)):fe(U)}se.tick({x:le.x,y:le.y,z:le.z,yaw:he,map:Se,ready:xe,avatar:xe&&se.role!=="pc"?W:null,score:$,objectFeed:xe&&se.role==="vr"&&oe?Te=>f.capture(Te,oe):null}),pe-H>=150&&(H=pe,G(xe,pe))}function Y(U){let Z=u.get(U)?.pose;return C(Z)?Z:null}return{update:J,getPeer:Y,connect:Me,leave:()=>se.leave(),get caption(){return N.textContent},handMotion(U,Z){return u.get(U)?.handMotion[Z]},sendAction(U){return se.sendAction(U,_())},sendShot(U,Z){se.queueShot(U,Z,_())},get stats(){return se.stats},get role(){return se.role},get connected(){return C(se.remote)},get remoteSpectator(){return se.peers.find(U=>U.role==="pc"&&C(U))??null},get remoteLight(){return x===-1?null:x},get replicaCount(){return d.size},forEachReplica(U){for(let Z of d.values())Z.mesh.visible&&U(Z.mesh)}}}function bh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Ex(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=Ex(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ex(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var wh=0,wA=1,TA=new M,Cx=new il,_p=new En,Rx=new M,Sh=new Cn,Th=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ah,this.unassigned=new Ah,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Mp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let s=i.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new M;l.fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,s=t.length;i<s;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,s=-1/0,r=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?r=Math.min(d,r):s=Math.max(d,s),s>r))return null}return s!==-1/0?e.at(s,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,TA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let s=i;do{let r=s.next;t.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,t):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,s=this.tolerance,r=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===wh){let l=a.distanceToPoint(t.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(t,r),t=i}while(t!==null)}return this}_computeExtremes(){let e=new M,t=new M,i=[],s=[];for(let r=0;r<3;r++)i[r]=s[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:s}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,s=t.max,r=0,o=0;for(let f=0;f<3;f++){let h=s[f].point.getComponent(f)-i[f].point.getComponent(f);h>r&&(r=h,o=f)}let a=i[o],l=s[o],c,u;r=0,Cx.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Cx.closestPointToPoint(p.point,!0,Rx);let x=Rx.distanceToSquared(p.point);x>r&&(r=x,c=p)}}r=-1,_p.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(_p.distanceToPoint(p.point));x>r&&(r=x,u=p)}}let d=[];if(_p.distanceToPoint(u.point)<0){d.push(pi.create(a,l,c),pi.create(u,l,a),pi.create(u,c,l),pi.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(pi.create(a,c,l),pi.create(u,a,l),pi.create(u,l,c),pi.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>r&&(r=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===wh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,s=i.outside;do{let r=i.distanceToPoint(s.point);r>t&&(t=r,e=s),s=s.next}while(s!==null&&s.face===i);return e}}_computeHorizon(e,t,i,s){this._deleteFaceVertices(i),i.mark=wA;let r;t===null?r=t=i.getEdge(0):r=t.next;do{let o=r.twin,a=o.face;a.mark===wh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==t);return this}_addAdjoiningFace(e,t){let i=pi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,s=null;for(let r=0;r<t.length;r++){let o=t[r],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return i.next.setTwin(s),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},pi=class n{constructor(){this.normal=new M,this.midpoint=new M,this.area=0,this.constant=0,this.outside=null,this.mark=wh,this.edge=null}static create(e,t,i){let s=new n,r=new gl(e,s),o=new gl(t,s),a=new gl(i,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Sh.set(e.point,t.point,i.point),Sh.getNormal(this.normal),Sh.getMidpoint(this.midpoint),this.area=Sh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},gl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Mp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Ah=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var es=class extends $e{constructor(e=[]){super();let t=[],i=[],r=new Th().setFromPoints(e).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Ne(t,3)),this.setAttribute("normal",new Ne(i,3))}};var Px=48,Ix=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),AA=(n,e,t)=>Math.max(e,Math.min(t,n)),EA=()=>structuredClone(Ix.shield),xl=(n,e,t,i)=>Number.isFinite(n)?AA(n,t,i):e;function Ch(n){let e=n?.mode==="lathe"?Ix.bottle:EA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,s=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Px?n.points.map(o=>[xl(o?.[0],0,-1.5,1.5),xl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(s=s.map(([o,a])=>[Math.abs(o),a])),i&&(s=s.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:s,depth:xl(n?.depth,e.depth,.025,1.5),bevel:xl(n?.bevel,e.bevel,0,.15),segments:Math.round(xl(n?.segments,32,8,64))}}function Lx(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,s])=>[-Math.abs(i),s]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,s])=>[-i,s]);return[...e,...t]}function Eh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function CA(n,e,t,i){let s=Eh(n,e,t),r=Eh(n,e,i),o=Eh(t,i,n),a=Eh(t,i,e);return s*r<-1e-8&&o*a<-1e-8}function RA(n){let e=Ch(n),t=e.mode==="lathe"?e.points:Lx(e);if(t.length<3||t.length>Px*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let s=0;s<t.length;s++){let r=t[s],o=t[(s+1)%t.length];i+=r[0]*o[1]-o[0]*r[1];for(let a=s+2;a<t.length;a++)if(!(s===0&&a===t.length-1)&&CA(r,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Dx(n){let e=Ch(n),t=RA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let s=e.points.map(([r,o])=>new we(Math.max(0,r),o));i=new Za(s,e.segments)}else{let s=Lx(e),r=new ui;r.moveTo(...s[0]);for(let a of s.slice(1))r.lineTo(...a);r.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Yi(r,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let s=i.attributes.position.count;i.setAttribute("uv",new ft(new Float32Array(s*2),2))}return i}var Un=Math.PI*2,Rh=.84,ts=128;function Rs(n){let e=new Uint8Array(ts*ts*4);for(let i=0;i<ts;i++)for(let s=0;s<ts;s++){let r=(s+.5)/ts,o=(i+.5)/ts,a=r>.88&&o>.88?[255,255,255]:n(Math.min(r/Rh,1),Math.min(o/Rh,1),s,i),l=(s+i*ts)*4;for(let c=0;c<3;c++)e[l+c]=Ue.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new vi(e,ts,ts);return t.colorSpace=lt,t.generateMipmaps=!0,t.minFilter=Ln,t.magFilter=un,t.needsUpdate=!0,t}function mr(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,s=new De(e),r=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),t?r.setXY(l,r.getX(l)*Rh,r.getY(l)*Rh):r.setXY(l,.95,.95);return i.setAttribute("color",new ft(a,3)),i}function Ps(n,e,t,i,s,r,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:bh(s),material:new pt({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Ux(n,e,t){let i=n/2,s=e/2,r=new ui;return r.moveTo(-i+t,-s),r.lineTo(i-t,-s),r.quadraticCurveTo(i,-s,i,-s+t),r.lineTo(i,s-t),r.quadraticCurveTo(i,s,i-t,s),r.lineTo(-i+t,s),r.quadraticCurveTo(-i,s,-i,s-t),r.lineTo(-i,-s+t),r.quadraticCurveTo(-i,-s,-i+t,-s),r}function Es(n,e,t,i,s){return new Yi(Ux(n,e,i),{depth:t,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Cs(n,e,t=i=>i){let i=[],s=[],r=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Un*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),s.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&r.push(g,g+1,m),n[u+1][0]>0&&r.push(g+1,m+1,m)}}let o=new $e;o.setAttribute("position",new Ne(i,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new M,c=new M;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function yl(n,e){let t=[];for(let[i,s]of n){if(i===0){t.push(new M(0,s,0));continue}for(let r=0;r<e;r++){let o=Un*r/e;t.push(new M(i*Math.sin(o),s,i*Math.cos(o)))}}return new es(t)}function PA(){let t=new ja(Ux(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ue.clamp(i.getX(l)/.098+.5,0,1),u=Ue.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let s=Rs((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Un),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),r=[it(Es(.106,.207,.013,.011,.0019),8425890),it(Es(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Es(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Es(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new Qe(.0036,.024,.004).translate(.055,.029,0),11714250),it(new Qe(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new Qe(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push(it(new Dt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push(it(new zt(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push(it(new zt(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new es([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new M(c,u,l))));return Ps("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function IA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Cs(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Rs((a,l,c,u)=>{let d=Un*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(y=>Math.exp(-(((f-y+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=mr(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=yl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ps("bread","Baguette de pain",.27,o,[it(s,16777215,!0)],r,.9)}function LA(){let n=Rs((r,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(r*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*mr(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Cs([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Cs([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Dt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Dt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=Un*r/5;i.push(it(new Qe(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=yl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ps("wheel","Roue",1.8,s,i,n,.64,.23)}function DA(){let n=Rs((r,o,a,l)=>{let c=mr(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Un*r*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Cs([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new di(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Un*l/5;return new M(r*Math.cos(c),o,r*Math.sin(c))}));i.push(new M(.166,-.027,.01),new M(.166,.053,-.01));let s=new es(i);return Ps("cup","Tasse",.39,s,[it(e,16777215,!0),it(t,15785922)],n,.37)}function UA(){let n=Cs([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Rs((s,r,o,a)=>{let l=9*mr(o,a),c=11*Math.cos(s*Un*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let d=40+.6*c+8*Math.cos(r*Un*48+s*Un*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(s*Un*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new mo(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new zt(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new zt(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Dt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new zt(.008,12).translate(0,.035,.0336),15633202)],i=yl([[.033,-.143],[.054,.133]],6);return Ps("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function FA(){let n=Cs([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Rs((r,o,a,l)=>{let c=10*mr(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(r+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Un*r*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Un*r*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new zt(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new mo(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new zt(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=yl([[.069,-.112],[.069,.109]],6);return Ps("soda","Canette de soda",.35,s,i,t,.42,.27)}function NA(){let n=Cs([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Rs((s,r,o,a)=>{let l=15*mr(o,a),c=8*Math.cos(s*Un*4);if(r>.321&&r<.435||r>.536&&r<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Es(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new zt(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=yl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ps("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function BA(){let n=Rs((s,r,o,a)=>{let l=8*mr(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let f=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,h=r>.793&&r<.813&&s>.22&&s<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Cs([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Es(.138,.22,.061,.016,.004),14788675),it(Es(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new qt(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Dt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new Qe(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new Qe(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new zt(.004,8).translate(.04,.066,.0397),15817792),it(new zt(.004,8).translate(-.04,.066,.0397),7903100),it(Es(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new M(s,l,o),new M(r,l,o),new M(r,l,a),new M(s,l,a)]);return Ps("radio","Talkie-walkie",.43,new es(i),t,n,.61,.08)}function Fx(){return[PA(),IA(),LA(),DA(),UA(),FA(),NA(),BA()]}var Fn=new qe,Xt=new M,Bh=new M,OA=new ct,Nx=new WeakMap;function kh(n){if(n.heightfield||n.objectBody)return null;let e=Nx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=OA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,s=n.position,r=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:s.x-r,maxX:s.x+r,minY:s.y-o,maxY:s.y+o,minZ:s.z-a,maxZ:s.z+a};return Nx.set(n,{bounds:l,position:s.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function qx(n,e,t){let i=kh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Oh(n,e,t,i){if(t.heightfield)return $A(n,e,t,i);if(t.objectBody)return ty(n,e,t.objectBody,i);if(!qx(n,e,t))return 0;Fn.copy(t.quaternion).invert(),Xt.copy(n).sub(t.position).applyQuaternion(Fn);let s=t.half;Bh.copy(Xt).clamp(t.min,s),i.subVectors(Xt,Bh);let r=i.length();if(r>=e)return 0;if(r>1e-6)return i.multiplyScalar(1/r).applyQuaternion(t.quaternion),e-r;let o=s.x-Math.abs(Xt.x),a=s.y-Math.abs(Xt.y),l=s.z-Math.abs(Xt.z);return o<=a&&o<=l?i.set(Math.sign(Xt.x)||1,0,0):a<=l?i.set(0,Math.sign(Xt.y)||1,0):i.set(0,0,Math.sign(Xt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var st=new M,ns=new M;function Ip(n,e,t,i,s=0,r=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Oh(n,e,u,st);if(!d||(n.addScaledVector(st,d+1e-4),st.y>=.62&&(l=!0,a&&st.y>a.normal.y&&(a.normal.copy(st),a.surface=u)),!i))continue;let f=i.dot(st);f<0&&i.addScaledVector(st,-f*(Math.abs(f)<.55?1:1+s)),ns.copy(i).addScaledVector(st,-i.dot(st)),i.addScaledVector(ns,-Math.min(.95,r*u.friction*o))}return l}var bp=new M,No=[];function Oo(n,e,t,i,s,r){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));No.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=kh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&No.push(h)}for(let h=1;h<=o;h++){bp.copy(n).lerp(e,h/o);for(let p of No){let x=Oh(bp,t,p,st);if(x)return s.copy(bp).addScaledVector(st,x+.001),r.copy(st),p}}return null}var Ml=new M,wl=new M,Bo=new M,Xx=new Cn,bl=new M;function Ti(n,e=0){let t=n.attributes.position,i=[],s=[],r=new Set;for(let p=0;p<t.count;p++){let x=new M().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");r.has(g)||(r.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=_=>new M().fromBufferAttribute(t,n.index?n.index.getX(_):_),g=x(p),m=x(p+1),y=x(p+2),S=new Cn(g,m,y).getNormal(new M);S.lengthSq()>.1&&s.push({a:g,b:m,c:y,n:S})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new tn().setFromPoints(i).getSize(new M),u=Math.max(1e-4,e**2*.4),d=e?new M().setScalar(1/u):new M(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:s,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(s.map(p=>p.n)),edges:e?[]:h(s.flatMap(p=>[new M().subVectors(p.b,p.a).normalize(),new M().subVectors(p.c,p.b).normalize(),new M().subVectors(p.a,p.c).normalize()]))}}function Gh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Fn.copy(t.quaternion).invert(),Xt.copy(n).sub(t.position).applyQuaternion(Fn),i.faces.every(r=>r.n.dot(Ml.subVectors(Xt,r.a))<=1e-4))return 0;let s=1/0;for(let{a:r,b:o,c:a}of i.faces)Xx.set(r,o,a).closestPointToPoint(Xt,bl),s=Math.min(s,Xt.distanceToSquared(bl));return Math.sqrt(s)}function zA(n,e,t,i){let{mesh:s,shape:r}=n;if(r.sphereRadius){let l=Oh(s.position,r.sphereRadius,e,t);return i.copy(s.position).addScaledVector(t,-r.sphereRadius),l}if(!e.heightfield&&(Fn.copy(e.quaternion).invert(),Xt.copy(s.position).sub(e.position).applyQuaternion(Fn),Bh.copy(Xt).clamp(e.min,e.half),Xt.distanceToSquared(Bh)>r.radius*r.radius))return 0;let o=0,a=0;for(let l of r.vertices){Ml.copy(l).applyQuaternion(s.quaternion).add(s.position);let c=Oh(Ml,.007,e,Bo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Ml),t.copy(Bo)):Math.abs(c-o)<.003&&Bo.dot(t)>.98&&(i.lerp(Ml,1/++a),o=Math.max(o,c)))}return o}var Ph=new M,VA=new M,Ih=new M,kA=new M,GA=new M;function Ai(n){return Ti(new Qe(n.x*2,n.y*2,n.z*2))}function Hh(n,e,t){let i=kA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let s=1/0;function r(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o),l=GA.copy(o).negate(),c=yr(n,l)+yr(e,o)-a,u=yr(n,o)+yr(e,l)+a;return c<=0||u<=0?!1:(Math.min(c,u)<s&&(s=Math.min(c,u),t.copy(o).multiplyScalar(c<u?1:-1)),!0)}for(let o of n.shape.normals)if(!r(Ph.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!r(Ph.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Ih.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!r(Ph.copy(a).applyQuaternion(e.mesh.quaternion).cross(Ih)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!r(VA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Fn.copy(a.mesh.quaternion).invert(),Xt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Fn);for(let{a:c,b:u,c:d}of a.shape.faces){Xx.set(c,u,d).closestPointToPoint(Xt,bl);let f=Xt.distanceToSquared(bl);f<l&&(l=f,Ih.copy(bl))}if(!r(Ph.subVectors(Xt,Ih).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(s)?s:0}var HA=new M;function WA(n,e,t){Fn.copy(e.quaternion).invert(),Xt.copy(n.mesh.position).sub(e.position).applyQuaternion(Fn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Xt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let s=Xt.getComponent(i),r=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=r+yr(n,HA.copy(t).negate())-s,a=r+yr(n,t)+s;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Lp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return zA(n,e,t,i??wl);let s=WA(n,e,t)??Hh(n,e,t);return s>0&&i&&jx(n,e,t,i),s}var Cp=Ti(new hi(1,0).scale(...mh)),Lh={mesh:{position:new M,quaternion:new qe},shape:Cp,radius:Cp.radius,precise:!0};function Yx(n,e,t,i,s,r){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Cp.radius;No.length=0;for(let c of i){let u=kh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||No.push(c)}Lh.mesh.quaternion.copy(t);let l=Lh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of No){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Hh(Lh,d,st):Lp(Lh,u,st);if(f>0)return s.copy(l).addScaledVector(st,f+5e-4),r.copy(st),u}}return null}function Tl(n,e){for(let t=0;t<4;t++){let i=!1;for(let s of e){if(!qx(n.mesh.position,n.radius,s))continue;let r=Lp(n,s,st);r<=1e-6||(n.mesh.position.addScaledVector(st,r),i=!0)}if(!i)break}}var Sp=new M,vl=new M,Dh=new M,wp=new qe,Is=new qe,Bx=new qe;function Ox(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Zx(n,e,t,i,s){let{mesh:r,shape:o}=n;Sp.copy(r.position),wp.copy(r.quaternion),vl.subVectors(e,Sp);let a=Ox(wp,t,Is),l=vl.length()+a*o.radius,c=Qx(o),u=Math.max(1,Math.min(Kx,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Dh.set(Is.x,Is.y,Is.z).normalize(),Bx.setFromAxisAngle(Dh,f),vl.multiplyScalar(d/u);for(let x=0;x<u;x++)r.position.add(vl),r.quaternion.premultiply(Bx).normalize(),Tl(n,i);let h=Math.max(.006,s||0);n.velocity.lerp(vl.subVectors(r.position,Sp).divideScalar(h).clampLength(0,23),.52);let p=Ox(wp,r.quaternion,Is);Dh.set(Is.x,Is.y,Is.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Dh,.52)}function yr(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Fn.copy(n.mesh.quaternion).invert(),Bo.copy(e).applyQuaternion(Fn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Bo));return t}var Fo=new M,zh=new M,qA=new M,Tp=new M,Do={},Uo={};function zx(n,e,t,i){let{mesh:s,shape:r}=n,o=yr(n,qA.copy(e).multiplyScalar(t));if(i.plane=s.position.dot(e)+t*o,r.sphereRadius){i.minU=i.maxU=s.position.dot(Fo),i.minV=i.maxV=s.position.dot(zh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of r.vertices){if(a.dot(Bo)<o-.0015)continue;Tp.copy(a).applyQuaternion(s.quaternion).add(s.position);let l=Tp.dot(Fo),c=Tp.dot(zh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function jx(n,e,t,i){Math.abs(t.y)<.8?Fo.set(-t.z,0,t.x).normalize():Fo.set(t.y,-t.x,0).normalize(),zh.crossVectors(t,Fo),zx(n,t,-1,Do),zx(e,t,1,Uo);let s=(Math.max(Do.minU,Uo.minU)+Math.min(Do.maxU,Uo.maxU))*.5,r=(Math.max(Do.minV,Uo.minV)+Math.min(Do.maxV,Uo.maxV))*.5;i.copy(t).multiplyScalar((Do.plane+Uo.plane)*.5).addScaledVector(Fo,s).addScaledVector(zh,r)}var Vx=new M;function Vh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let s of t.vertices)Vx.copy(s).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Vx)}}function kx(n,e,t){let{min:i,max:s}=n;return e.heightfield?i.x<=e.xMax&&s.x>=e.xMin&&i.z<=e.zMax&&s.z>=e.zMin:!t||s.x>=t.minX&&i.x<=t.maxX&&s.y>=t.minY&&i.y<=t.maxY&&s.z>=t.minZ&&i.z<=t.maxZ}function Jx(n){return!n.owner&&!n.frozen}var gr=new M,xr=new M,_l=new M,Gx=new M,Rp=new M,Pp=new M,XA=new M;function Uh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function $x(n,e,t,i){let{mesh:s,shape:r}=n.body;return Fn.copy(s.quaternion).invert(),Rp.crossVectors(e,t),i.copy(Rp).applyQuaternion(Fn).multiply(r.inverseInertia).applyQuaternion(s.quaternion).multiplyScalar(n.inverseMass)}function Fh(n,e,t){return n?.inverseMass?($x(n,e,t,Pp),n.inverseMass+Rp.dot(Pp)):0}function Nh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector($x(n,e,t,Pp),i))}function Ap(n){return n.friction??n.spec?.friction??.78}function Hx(n,e,t,i,s){let{body:r}=n,o=e?.body,a=o?Math.sqrt(Ap(r)*Ap(o)):Math.min(Ap(r),t.friction??.78);gr.subVectors(wl,r.mesh.position),o&&xr.subVectors(wl,o.mesh.position),Uh(n,gr,_l).sub(Uh(e,xr,Gx));let l=_l.dot(st),c=!1;if(l<-1e-5){let d=l<-.8?Ue.clamp(s*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(Fh(n,gr,st)+Fh(e,xr,st));Nh(n,gr,st,f),Nh(e,xr,st,-f),Uh(n,gr,_l).sub(Uh(e,xr,Gx)),ns.copy(_l).addScaledVector(st,-_l.dot(st));let h=ns.length();if(h>1e-5&&a>0){ns.divideScalar(h);let p=Math.min(f*a,h/(Fh(n,gr,ns)+Fh(e,xr,ns)));Nh(n,gr,ns,-p),Nh(e,xr,ns,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(r.mesh.position.addScaledVector(st,u*n.inverseMass/d),Vh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(st,-u*e.inverseMass/d),Vh(e)),c=!0}return n.inverseMass&&st.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,st.y)),e?.inverseMass&&st.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-st.y)),c}function YA(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:s,angular:r,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);s.x*=a,s.z*=a,r.multiplyScalar(a),n.groundY>.999&&s.lengthSq()<144e-6&&r.lengthSq()<.01&&(s.set(0,0,0),r.set(0,0,0))}else r.multiplyScalar(Math.exp(-e*i*2.5)),s.lengthSq()<.0016&&r.lengthSq()<.012&&(s.set(0,0,0),r.set(0,0,0))}var Kx=96,ZA=5;function Qx(n){return Math.max(.008,n.thickness*.35)}var Sl={substeps:0,active:0,free:0,sleeping:0};function Wx(n,e,t,i){n.velocity.y-=t*e*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let s=n.angular.length();s>1e-5&&n.mesh.rotateOnWorldAxis(XA.copy(n.angular).divideScalar(s),Math.min(s,30)*e)}function jA(n,e,t){let i=new tn().setFromCenterAndSize(n.mesh.position,new M),s=n.mesh.position.clone().addScaledVector(n.velocity,e),r=t*JA(n);s.y-=r*e*e;let o=n.velocity.y/(2*r);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=r*o*o,i.expandByPoint(a)}return i.expandByPoint(s).expandByScalar(n.shape.radius+.002),i}function JA(n){return n.sweepGravity??1}function ey(n,e,t,i,s,r){if(Object.assign(Sl,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:kh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=r?.(h.mesh.position)?.gravity??1,u.set(h,jA(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=Jx(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),g=l.some(({box:S,bounds:_})=>kx(x,S,_)),m=c.some(S=>S!==h&&S.collidable!==!1&&x.intersectsBox(u.get(S)));if(p&&!g&&!m){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let S=Math.min(h.angular.length(),30),_=h.velocity.length()+S*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(_*t/Qx(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new tn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Vh(y),o.push(y)}for(let h of a)Wx(h,t,i,r);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(Kx,d):1,Object.assign(Sl,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||Wx(x,f,i,r),Vh(p)}for(let p=0;p<ZA;p++){let x=!1;for(let g of o)if(g.inverseMass)for(let{box:m,bounds:y}of l){if(!kx(g.bounds,m,y))continue;let S=Lp(g.body,m,st,wl);S>0&&(x=Hx(g,null,m,S,s)||x)}for(let g of o)g.sweepStart=g.bounds.min.x,g.sweepEnd=g.bounds.max.x;o.sort((g,m)=>g.sweepStart-m.sweepStart);for(let g=0;g<o.length;g++){let m=o[g];for(let y=g+1;y<o.length;y++){let S=o[y];if(S.sweepStart>m.sweepEnd)break;if(!m.inverseMass&&!S.inverseMass||!m.bounds.intersectsBox(S.bounds))continue;let _=Hh(m.body,S.body,st);_<=0||(jx(m.body,S.body,st,wl),x=Hx(m,S,null,_,s)||x)}}if(!x)break}for(let p of o)p.inverseMass&&YA(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,g=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=g?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):g||(p.sleeping=!1),p.sleeping&&Sl.sleeping++}}function $A(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let s=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-s)*i.y)}var Ep={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function ty(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Ep.mesh.position=n,Ep.shape.sphereRadius=e,Hh(Ep,t,i))}function ny(n,e,t,i,s){let r=ty(n,e,t,st);if(r<=0)return!1;n.addScaledVector(st,r+.001),s?.copy(st);let o=i.dot(st);return o<0&&(i.addScaledVector(st,-o),Math.abs(st.y)<.6&&Jx(t)&&t.velocity.addScaledVector(st,-Math.min(2.8,-o*.24))),!0}var Yt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),iy=Yt(-24,24,-51,7),sy=34521,Vo={x:0,y:0,z:3},Wh={x:.05,y:1.16,z:5.9},zo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Yt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Yt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Yt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Yt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Yt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:Yt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Yt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Yt(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:Yt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Yt(9,23,-48,-37),sign:[16,-38.2]}},z3=[Yt(-9,-6,-51,7),Yt(6,9,-51,7),Yt(-24,24,-8,-5),Yt(-24,24,-27,-23),Yt(9,23,-37,-34)],ry=[{name:"Glace",bounds:zo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:zo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Yt(-9,9,-51,7)},{name:"Sol ouest",bounds:Yt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Yt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Yt(-24,-23,-51,7)},{name:"Sol est",bounds:Yt(9,23,-51,-48)},{name:"Sol est",bounds:Yt(9,23,-37,7)},{name:"Bordure est",bounds:Yt(23,24,-51,7)}],ko={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},Go=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],oy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Dp={x:16,z:-31},qh={x:16,y:1.52,z:-21},Xh={x:-19.4,y:.68,z:-3.25},ay=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),ly={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",qh.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var KA=[0,1,2,3,4,5,7,8,9,10];function cy(n){oy.forEach(({x:e,z:t},i)=>n(KA[i],new M(e,.8,t)))}function Yh(){let n=[["Cube",new Qe(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Rt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Ja(.29),"#d8ae53",0,1],["Brique",new Qe(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new Qe(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Rt(.6,4),"#dbab58",.6,3.7],["Coco",new Rt(.124,1),"#956238",.124,.44]].map(([e,t,i,s,r])=>({name:e,geo:t,mass:r,shape:Ti(t,s),material:new pt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:Ai(t.computeBoundingBox()??t.boundingBox.getSize(new M).multiplyScalar(.5))}));for(let{collisionGeo:e,sphere:t=0,...i}of Fx()){let s=Ti(e??i.geo,t);n.push({...i,shape:s,lowShape:s})}return n}var Up=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere","spawn-coconut","spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Ls=null;function QA(){let n=new De,e=new Dt(.16,.25,3.15,9,12),t=e.attributes.position,i=[];for(let c=0;c<t.count;c++){let u=Math.round((t.getY(c)+1.575)/3.15*12),d=Math.floor((Math.atan2(t.getX(c),t.getZ(c))+Math.PI)*1.43);n.setHSL(.084+u*.002,.35,.35+u%3*.032+d%3*.018),i.push(n.r,n.g,n.b)}e.setAttribute("color",new Ne(i,3));let s=[],r=[],o=3.14;function a(c,u,d,f){s.push(...c,...u,...d),n.setHSL(.25+f*.043,.54,.28+f*.17);for(let h=0;h<3;h++)r.push(n.r,n.g,n.b)}for(let c=0;c<10;c++){let f=function(h,p){let x=h*d;return[Math.cos(u)*x-Math.sin(u)*p,o+Math.sin(h*Math.PI)*.38-h*h*.54+c%3*.055,Math.sin(u)*x+Math.cos(u)*p]},u=c*2.39996,d=1.35+c%4*.2;for(let h=0;h<7;h++){let p=h/7,x=(h+1)/7,g=.285*Math.sin(Math.PI*p)**.7,m=.285*Math.sin(Math.PI*x)**.7;for(let y of[-1,1]){let S=f(p,g*y),_=f(x,m*y);S[1]-=.065,_[1]-=.065,a(f(p,0),S,_,.31+h%4*.14),a(f(p,0),_,f(x,0),.47+c%3*.16)}}}let l=new $e;return l.setAttribute("position",new Ne(s,3)),l.setAttribute("color",new Ne(r,3)),l.computeVertexNormals(),{trunk:{geometry:e,material:new Pt({color:16777215,vertexColors:!0,flatShading:!0})},fronds:{geometry:l,material:new Pt({vertexColors:!0,side:At,flatShading:!0})}}}function eE(){let n=()=>{let e=document.createElement("canvas");e.width=256,e.height=64;let t=e.getContext("2d");t.fillStyle="#182831",t.fillRect(0,0,256,64),t.textAlign="center",t.font="bold 28px system-ui",t.fillStyle="#fff0ce",t.fillText("CIBLE \xB7 0",128,42);let i=new Pn(e);return i.colorSpace=lt,i};return{"target-ring-outer":{geometry:new zt(.9,20),material:new Pt({color:"#e2ad5c",side:At})},"target-ring-middle":{geometry:new zt(.58,20),material:new Pt({color:"#ca664b",side:At})},"target-ring-inner":{geometry:new zt(.27,20),material:new Pt({color:"#f5e5bd",side:At})},"target-post":{geometry:new Qe(.14,1.5,.14),material:new Pt({color:"#485d5d",flatShading:!0})},"target-score":{geometry:new qt(1.4,.35),material:new gt({map:n(),side:At})}}}function uy(){if(Ls)return Ls;let n=Yh(),e=Up;Ls=new Map(n.map((i,s)=>[e[s],{geometry:i.geo,material:i.material,mass:i.mass,properties:i.properties??{}}]));let t=QA();Ls.set("palm-trunk",t.trunk),Ls.set("palm-fronds",t.fronds),Ls.set("chrome-sphere",{geometry:new Rt(.54,2),material:new pt({color:"#c8e6ed",metalness:1,roughness:.16})});for(let[i,s]of Object.entries(eE()))Ls.set(i,s);return Ls}function Zh(n){return typeof n=="string"&&uy().has(n)}function Fp(n){return uy().get(n)??null}var Bp="gorilla-lab-models-v1",is=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),tE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,nE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),dy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),iE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),sE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,rE=/^#[a-f\d]{6}$/i;function hy(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ds(n,e,t,i){return[0,1,2].map(s=>Number.isFinite(n?.[s])?Ue.clamp(n[s],t,i):e)}var Np=new Set(["box","sphere","capsule","convex"]);function oE(n){if(n?.mode==="box")return{mode:"box",center:Ds(n.center,0,-6,6),size:Ds(n.size,.5,.025,12)};let e=Math.round(Ue.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Np.has(n.shape)?n.shape:"box",center:Ds(n.center,0,-6,6),size:Ds(n.size,.5,.025,12),rotation:Ds(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Np.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function vr(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>is.models||JSON.stringify(n).length>is.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.map(i=>{if(typeof i?.id!="string"||!sE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>is.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:hy(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...Zh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(iE).map(([s,r])=>[s,typeof i.properties?.[s]=="boolean"?i.properties[s]:r])),hitbox:oE(i?.hitbox),parts:i.parts.map((s,r)=>({name:hy(s?.name,`Pi\xE8ce ${r+1}`),shape:s?.shape==="asset"&&Zh(s?.assetId)?"asset":Object.hasOwn(nE,s?.shape)&&s.shape!=="asset"?s.shape:"box",...s?.shape==="asset"&&Zh(s?.assetId)?{assetId:s.assetId}:{},...s?.shape==="custom"?{profile:Ch(s?.profile)}:{},position:Ds(s?.position,0,-3,3),rotation:Ds(s?.rotation,0,-360,360),scale:Ds(s?.scale,.35,.02,4),color:typeof s?.color=="string"&&rE.test(s.color)?s.color:"#51bdd2",surface:Object.hasOwn(dy,s?.surface)?s.surface:"plain",texture:typeof s?.texture=="string"&&s.texture.length<=is.textureBytes&&tE.test(s.texture)?s.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Op(n){try{let e=(n??globalThis.localStorage)?.getItem(Bp);if(e&&e.length<=is.fileBytes)return vr(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function aE(n){switch(n){case"sphere":return new In(.5,20,12);case"cylinder":return new Dt(.5,.5,1,20);case"cone":return new Xi(.5,1,20);case"torus":return new di(.365,.135,8,24);case"capsule":return new bs(.28,.44,6,16);case"diamond":return new hi(.5);default:return new Qe(1,1,1)}}var fy=Object.keys(dy),Ho=64,Al=4,py=2,Ei;function lE(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,s=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*s;case"speckle":return s>.88?130:207+48*s;default:return 255}}function my(){if(Ei)return Ei;let n=Ho*Al,e=Ho*py,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let s=0;s<n;s++){let r=Math.floor(i/Ho)*Al+Math.floor(s/Ho),o=lE(fy[r],s%Ho,i%Ho),a=(i*n+s)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ei=new vi(t,n,e),Ei.colorSpace=lt,Ei.magFilter=un,Ei.minFilter=Ln,Ei.generateMipmaps=!0,Ei.needsUpdate=!0,Ei}function gy(n){let e=n.shape==="asset"?Fp(n.assetId):null,t=n.shape==="custom"?Dx(n.profile):e?.geometry?.clone()??aE(n.shape),i=t.index?t.toNonIndexed():t;i!==t&&t.dispose(),i.attributes.uv||i.setAttribute("uv",new Ne(new Float32Array(i.attributes.position.count*2),2));let s=n.rotation.map(Ue.degToRad);i.scale(...n.scale),i.rotateX(s[0]),i.rotateY(s[1]),i.rotateZ(s[2]),i.translate(...n.position);let r=new De(n.color),o=i.attributes.position.count,a=new Float32Array(o*3),l=i.attributes.uv,c=fy.indexOf(n.surface),u=c%Al,d=Math.floor(c/Al),f=i.attributes.color;for(let h=0;h<o;h++)n.shape==="asset"&&f?(a[h*3]=f.getX(h)*r.r,a[h*3+1]=f.getY(h)*r.g,a[h*3+2]=f.getZ(h)*r.b):r.toArray(a,h*3),n.shape!=="asset"&&!n.texture&&l.setXY(h,(u+.05+l.getX(h)*.9)/Al,(d+.05+l.getY(h)*.9)/py);return i.setAttribute("color",new ft(a,3)),i}function cE(n){let e=n?.shape==="asset"?Fp(n.assetId):null;if(e?.material){let i=e.material.clone();if(i.map&&(i.map=i.map.clone(),i.map.needsUpdate=!0),n.texture){i.map?.dispose();let s=new Mi().load(n.texture);s.colorSpace=lt,s.wrapS=s.wrapT=kn,i.map=s}return n.color&&n.color!=="#ffffff"&&i.color?.multiply(new De(n.color)),i.needsUpdate=!0,i}if(!n?.texture)return new pt({vertexColors:!0,map:my(),roughness:.68});let t=new Mi().load(n.texture);return t.colorSpace=lt,t.wrapS=t.wrapT=kn,new pt({vertexColors:!0,map:t,roughness:.68})}function Us(n){return n?.parts?.some(e=>e.texture||e.shape==="asset")?n.parts.map(cE):new pt({vertexColors:!0,map:my(),roughness:.68})}function jh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ei&&e.map.dispose(),e.dispose()}}function Jh(n){let e=n.map(gy),t=bh(e,n.some(i=>i.texture||i.shape==="asset"));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function Wo(n){let e=Jh(n.parts),t=e.boundingBox.getSize(new M);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function zp(n){let e=new tn;for(let t of n.parts??[]){let i=gy(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new M,new M(1,1,1)),e}function xy(n){let e=zp(n),t=e.getCenter(new M),i=e.getSize(new M),s=n.hitbox??{},r=s.mode==="box"||s.mode==="custom";return{mode:r?"custom":"auto",shape:s.mode==="box"?"box":Np.has(s.shape)?s.shape:"box",precision:Number.isFinite(s.precision)?Ue.clamp(s.precision,8,96):48,center:r?new M(...s.center):t,size:r?new M(...s.size):i,rotation:r?new M(...s.rotation??[0,0,0]):new M,boundsCenter:t,boundsSize:i}}function uE(n,e){let t=n.attributes.position,i=[],s=new Set;for(let l=0;l<t.count;l++){let c=new M().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");s.has(u)||(s.add(u),i.push(c))}if(i.length<=e)return i;let r=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(r[0]));for(;r.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),r.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return r}function hE(n){let e=xy(n),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new In(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new bs(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&n.parts?.length){let i=Jh(n.parts),s=uE(i,e.precision);if(i.dispose(),s.length>=4)try{let r=new es(s),o=e.boundsSize.clone().max(new M(1e-5,1e-5,1e-5));return r.scale(1/o.x,1/o.y,1/o.z),r.computeVertexNormals(),r}catch{}}return new Qe(1,1,1)}function El(n,e=null){let t=xy(n),i=hE(n),s=t.boundsSize.clone().max(new M(1e-5,1e-5,1e-5)),r=e?new M(e.x,e.y,e.z):s.clone(),o=t.size.clone().multiply(r).divide(s),a=t.center.clone().sub(t.boundsCenter).multiply(r).divide(s);return i.scale(o.x,o.y,o.z),i.rotateX(Ue.degToRad(t.rotation.x)),i.rotateY(Ue.degToRad(t.rotation.y)),i.rotateZ(Ue.degToRad(t.rotation.z)),i.translate(a.x,a.y,a.z),i.computeBoundingBox(),i}function yy(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Jh(e.parts),i=t.boundingBox.getSize(new M);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Us(e),collisionGeo:El(e),mass:Ue.clamp(i.x*i.y*i.z*9,.18,12)}})}function vy(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Jh(e.parts),i=t.boundingBox.getSize(new M),s=.36/Math.max(i.x,i.y,i.z);t.scale(s,s,s);let r=new ze(t,Us(e));r.castShadow=!0;let o=new _t;return o.add(r),o}var by=Object.freeze([8,16,32,48,64,96,128]),Sy=16,Kh=24,_y=new WeakMap,Ci=Ue.clamp,_r=Ue.lerp,Vp=n=>n*n*(3-2*n);function Kn(n,e,t,i){return Number.isFinite(n)?Ci(n,e,t):i}function My(n){if(!n)return null;let e=vr({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var dE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function qo(n={}){let e=by.includes(n?.detail)?n.detail:Sy,t=n?.heights;return{detail:e,seed:Math.round(Kn(n?.seed,0,2147483647,1)),amplitude:Kn(n?.amplitude,0,12,0),frequency:Kn(n?.frequency,.015,2,.12),octaves:Math.round(Kn(n?.octaves,1,5,3)),roughness:Kn(n?.roughness,.15,.95,.42),ridge:Kn(n?.ridge,0,1,0),edgeFade:Kn(n?.edgeFade,0,1,0),grass:Kn(n?.grass,0,1,0),shrub:Kn(n?.shrub,0,1,0),grassSize:Kn(n?.grassSize,.1,5,1),shrubSize:Kn(n?.shrubSize,.1,5,1),grassModel:My(n?.grassModel),shrubModel:My(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&dE.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(t)&&t.length===(e+1)**2?Array.from(t,i=>Kn(i,-Kh,Kh,0)):null}}function wy(n,e,t,i){let s=Ci(t,0,e),r=Ci(i,0,e),o=Math.min(e-1,Math.floor(s)),a=Math.min(e-1,Math.floor(r)),l=s-o,c=r-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Ty(n,e){let t=by.includes(e)?e:Sy;if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,s=n.detail/t,r=Array.from({length:i**2},(o,a)=>wy(n.heights,n.detail,a%i*s,Math.floor(a/i)*s));return{...n,detail:t,heights:r}}function ss(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function $h(n,e,t){let i=Math.floor(n),s=Math.floor(e),r=Vp(n-i),o=Vp(e-s),a=_r(ss(i,s,t),ss(i+1,s,t),r),l=_r(ss(i,s+1,t),ss(i+1,s+1,t),r);return 2*_r(a,l,o)-1}function Cl(n){let{w:e,d:t,terrain:i}=n,{detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=_y.get(n),p=h&&h.w===e&&h.d===t&&h.detail===s&&h.seed===r&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let x=s+1,g=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let S=0;S<=s;S++)for(let _=0;_<=s;_++){let C=(_/s-.5)*e*a,A=(S/s-.5)*t*a,I=0,D=1,w=0;for(let F=0;F<l;F++){let N=$h(C*2**F,A*2**F,r+F*13);I+=D*_r(N,1-2*Math.abs(N),u),w+=D,D*=c}let b=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(_/s-.5))*2,(.5-Math.abs(S/s-.5))*2)),d*2):1,E=l===3&&c===.42&&u===0&&d===0;g[S*x+_]=E?o*(.62*$h(C,A,r)+.26*$h(C*2.03,A*2.03,r+13)+.12*$h(C*4.13,A*4.13,r+37)):o*I/w*b}let m=f?g.map((S,_)=>S+f[_]):g,y={w:e,d:t,detail:s,seed:r,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:g,surface:m};return _y.set(n,y),y}function kp(n,e,t){let{detail:i,w:s,d:r,surface:o}=n;return wy(o,i,(e/s+.5)*i,(t/r+.5)*i)}function fE(n,e,t){return n.y+kp(Cl(n),e-n.x,t-n.z)}function pE(n,e,t){let{detail:i,surface:s}=n,r=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=s[f*r+h],d++);return u/d}function Ay(n,e,t,{mode:i,radius:s,strength:r,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=Cl(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=Ci(h,-c/2,c/2),g=Ci(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=s**2)return!1;let m=(h/c+.5)*l,y=(p/u+.5)*l,S=c/l,_=u/l,C=Math.max(0,Math.ceil(m-s/S)),A=Math.min(l,Math.floor(m+s/S)),I=Math.max(0,Math.ceil(y-s/_)),D=Math.min(l,Math.floor(y+s/_)),w=Number.isFinite(o)?o-n.y:kp(a,h,p),b=l+1,E=a.heights?.slice()??new Array(b**2).fill(0),F=!1,N=!1;function O(q,H,j){F=!0;let B=H*b+q,re=E[B],ae;if(i==="raise"||i==="lower")ae=re+(i==="raise"?1:-1)*r*j;else{let ge=i==="flatten"?w:pE(a,q,H);ae=_r(d[B],ge,Math.min(1,r)*j)-f[B]}ae=Ci(ae,-Kh,Kh),!(Math.abs(ae-re)<1e-7)&&(E[B]=ae,N=!0)}for(let q=I;q<=D;q++)for(let H=C;H<=A;H++){let j=Math.hypot((H-m)*S,(q-y)*_)/s;j<1&&O(H,q,Vp(1-j))}if(!F){let q=Ci(m,0,l),H=Ci(y,0,l),j=Math.min(l-1,Math.floor(q)),B=Math.min(l-1,Math.floor(H)),re=q-j,ae=H-B,ge=re+ae<=1,se=ge?1-re-ae:re+ae-1,be=ge?re:1-ae,ve=ge?ae:1-re;if(se>=Math.max(be,ve)){let Me=+!ge;O(j+Me,B+Me,1)}else be>=ve?O(j+1,B,1):O(j,B+1,1)}return N&&(n.terrain.heights=E),N}function Ey(n){let{w:e,d:t,terrain:i}=n,{detail:s}=i,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let d=0;d<=s;d++)for(let f=0;f<=s;f++){let h=d*r+f;o[3*h]=(f/s-.5)*e,o[3*h+2]=(d/s-.5)*t,a[2*h]=f/s*e/2.6,a[2*h+1]=(1-d/s)*t/2.6,d<s&&f<s&&(l.set([h,h+r,h+1,h+r+1,h+1,h+r],c),c+=6)}let u=new $e;return u.setAttribute("position",new ft(o,3).setUsage(wn)),u.setAttribute("uv",new ft(a,2)),u.setIndex(new ft(l,1)),mE(u,n),u}function mE(n,e){let{surface:t}=Cl(e),{position:i}=n.attributes;for(let s=0;s<t.length;s++)i.setY(s,t[s]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function gE(n,e,t,i){let{detail:s,w:r,d:o,surface:a}=Cl(n),l=Ci(((e-n.x)/r+.5)*s,0,s),c=Ci(((t-n.z)/o+.5)*s,0,s),u=Math.min(s-1,Math.floor(l)),d=Math.min(s-1,Math.floor(c)),f=s+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],g=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*s/r,1,-g*s/o).normalize()}function Cy(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>fE(n,t,i),normalAt:(t,i,s)=>gE(n,t,i,s),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function xE(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,s=Math.cos(i),r=Math.sin(i),o=s*.105,a=r*.105;n.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+t%3*.07,a+r*.16)}let e=new $e;return e.setAttribute("position",new Ne(n,3)),e.setAttribute("uv",new Ne(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function yE(){return new Rt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var vE=[{name:"grass",geometry:xE,perMetre:5,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:yE,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Ry(n){let e=new _t;for(let{name:t,geometry:i,perMetre:s,max:r,salt:o,color:a}of vE){let l=n.terrain[t];if(!l)continue;let c=Math.max(1,Math.round(Math.min(r,n.w*n.d*s)*l)),u=n.terrain[t+"Model"],d=n.terrain[t+"Size"]??1,f,h;if(u){let g=t==="grass"?.42:.85;f=Wo(u),f.scale(g*d,g*d,g*d),f.translate(0,g*d/2,0),h=Us(u)}else if(f=i(),f.scale(d,d,d),h=new Pt({color:a,side:t==="grass"?At:ci,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let g=new Mi().load(n.terrain.grassTexture);g.colorSpace=lt,h.map=g,h.color.set("#ffffff"),h.userData.ownTexture=!0}let p=new Ua(f,h,c);p.name=t,p.instanceMatrix.setUsage(wn),p.userData.salt=o,p.receiveShadow=!0;let x=new De;for(let g=0;g<c;g++){let m=_r(.68,1.2,ss(g,o,n.terrain.seed+4));p.setColorAt(g,x.setRGB(m,m,m))}e.add(p)}return _E(e,n),e}function _E(n,e){let t=Cl(e),i=new Bt;for(let s of n.children){let{salt:r}=s.userData,{seed:o}=e.terrain;for(let a=0;a<s.count;a++){let l=(ss(a,r,o)-.5)*.96*e.w,c=(ss(a,r,o+1)-.5)*.96*e.d;i.position.set(l,kp(t,l,c),c),i.rotation.y=ss(a,r,o+2)*2*Math.PI,i.scale.setScalar(_r(.58,1.34,ss(a,r,o+3))),i.updateMatrix(),s.setMatrixAt(a,i.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function Py(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),jh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Qh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Iy=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Ly(n,e=Iy[n]){n=Math.max(0,Math.min(Qh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Iy[n],i.fillRect(0,0,512,512);let s=(n+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;i.fillStyle=r()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+r()*.19,o(l,c,n===4?3+r()*62:1+r()*9,1+r()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Dy({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:s}){let r={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,r.x=r.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)r.x=u((h.clientX-o.x)/48),r.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(r.x=r.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?s():p&&i(p)}}),{movement:r,clear:d,consumeJump(){let h=c;return c=!1,h}}}var ME=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function Uy(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){ME.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function Fy(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var Ny=.065,bE=.08,ed=.035,Gp=.003,td=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(s=>(s.anchor=new e,s.locomotionTarget=new e,{hand:s,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:s.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let s=this.boxes;if(e.releaseTime>0&&s.includes(e.releaseSurface)){this.castBoxes.length=0;for(let r of s)r!==e.releaseSurface&&this.castBoxes.push(r);s=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,s,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:s,settings:r,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=r,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=s*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&r.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(Qi).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let g=p&&o.includes(p)&&!p.objectBody?.owner,m=g&&p.objectBody;m&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(m.mesh.quaternion).add(m.mesh.position),f.copy(u.localNormal).applyQuaternion(m.mesh.quaternion)),g&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),g||this.to.add(this.flight),this.to.y-=Math.min(Gp,s*t*t);let y=this.sweep(u,this.from,this.to);if(g){let w=this.correction.subVectors(x,d.anchor),b=w.dot(f)<=ed&&d.anchor.distanceToSquared(e)<=(c+ed)**2&&w.lengthSq()<=Math.max(.12,c*.5)**2;b&&(!y||y===p&&this.hitNormal.dot(f)>.7)?(y=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!b&&y===p&&w.dot(f)>ed&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let S=y.friction??.8,_=Math.min(1,Math.max(0,S*(.75+r.grip*.09))),C=Math.max(0,1-Math.abs(f.y)/.28),A=Math.min(.97,Math.max(0,1-_+C*.24+(r.slide-3)*.035)),I=this.correction.subVectors(d.anchor,x);if(I.addScaledVector(f,-I.dot(f)),this.slideTarget.copy(I).multiplyScalar(-A),g&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,s*t*.11*A*Math.max(C,Math.max(0,1-2*_)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,Gp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-Gp*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(A>.5&&I.lengthSq()>ed**2)continue}I.subVectors(d.anchor,x),g&&I.dot(f)<0&&I.addScaledVector(f,-I.dot(f)),l.add(I);let D=y.objectBody;if(D){let w=u.inverseRotation.copy(D.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(D.mesh.position).applyQuaternion(w),u.localNormal.copy(f).applyQuaternion(w)}if(d.surface=y,d.groundContact=f.y>.55,this.contacts++,u.tracked){let w=this.handMotion.subVectors(u.previousTarget,x),b=w.dot(f);w.multiplyScalar(1-A).addScaledVector(f,Math.max(0,b)-b*(1-A)),this.intent.add(w)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=s*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:s,contacts:r,history:o}=this;if(i.contacts=r,i.launched=!1,i.launchSpeed=0,s<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!r&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&r;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=Ny;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/Ny),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=bE,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function SE(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function Hp(n,e=.16,t=26){let i=SE(n),s=n.gamepad,r=Array.from(s?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!r&&typeof s?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=r?r.pulse(e,t):s.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function By(n,e,t,i=.16,s=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let r=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!r){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,Hp(n,i,s)&&(n.hapticCooldown=.08))}function Oy({scene:n,rig:e,camera:t,arena:i,objects:s,spectator:r}){let o=new M(0,1,0),a=new qe,l=0,c=new ji,u=[],d=new Map,f=fx(n,{onShot:(m,y)=>r.sendShot(m,y),impact(m,y,S,_){c.set(m,y),c.far=S;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let A=d.get(C.object);return _&&A&&!A.owner&&!A.frozen&&A.velocity.addScaledVector(y,Math.min(4,2.6/A.mass)),C.distance}}),h={position:new M,quaternion:new qe,modelPosition:new M},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:y,inVR:S,enabled:_,remoteWorld:C,dt:A,yaw:I,drop:D,rightHand:w,flatFiring:b}){let E=null,F=!1;if(_)if(S){let N=[...m.session.inputSources].find(q=>q.handedness==="right"),O=N&&m.getPose(N.targetRaySpace,y);if(O){let{position:q,orientation:H}=O.transform;E=h,E.position.set(q.x,q.y-D,q.z).applyAxisAngle(o,I).add(e.position),E.modelPosition.copy(w.valid?w.mesh.position:E.position),E.quaternion.set(H.x,H.y,H.z,H.w).premultiply(a.setFromAxisAngle(o,I)),F=!!N.gamepad?.buttons[0]?.pressed}}else E=h,t.getWorldPosition(E.position),t.getWorldQuaternion(E.quaternion),E.modelPosition.set(.16,-.17,-.43).applyQuaternion(E.quaternion).add(E.position),F=b;if(x=E?p:null,u.length=0,d.clear(),E||l){for(let N of i.boxes)N.mesh?.isMesh&&N.mesh.visible&&u.push(N.mesh);if(C)r.forEachReplica(N=>u.push(N));else for(let N of s)N.mesh.visible&&N.collidable&&!N.owner&&(u.push(N.mesh),d.set(N.mesh,N))}f.update({dt:A,aim:E,firing:F}),F?l=1.3:l=Math.max(0,l-A)}return{update:g,receiveShot({position:m,quaternion:y},S){f.replay(m,new qe().copy(y),S),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function zy(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&s.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=s=>{s.preventDefault(),i=!0,e.setPointerCapture(s.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Vy(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Mr=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],nd=["Naturel","Cellulo","Affiche","R\xE9tro"],id={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var ky=new WeakMap;function Wp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,ky.set(n,e),n}function Rl(n){if(Array.isArray(n))return n.map(Rl);let e=n.clone(),t=ky.get(n);return t?Wp(e,t):e}function wE(n){let t=new In(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Rt(.225,0),s=new $a({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Wp(s,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:s,sphere:.225,mass:.82}}function TE(n){let e=new Qe(.37,.37,.37),t=new pt({color:16777215,roughness:.4});return Wp(t,function(s){s.uniforms.uPropTime=n,s.vertexShader=`
      varying vec2 vAbyssUV;
      varying vec3 vAbyssEye;
      varying float vAbyssFace;
    `+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`
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
    `),s.fragmentShader=`
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
    `+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function Gy(){let n={value:0};return{props:[wE(n),TE(n)],animate(e){n.value=e}}}var Hy=new M(0,1,0),Wy=new M(0,0,1),AE={left:new qe().setFromAxisAngle(Wy,Math.PI/2),right:new qe().setFromAxisAngle(Wy,-Math.PI/2)},EE=new qe,CE=new M;function qy(n,e,t,i,s){let r=e.position,o=e.orientation;n.gripPosition.set(r.x,r.y-t,r.z).applyAxisAngle(Hy,i).add(s),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(EE.setFromAxisAngle(Hy,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(AE[n.side]),n.target.copy(n.gripPosition).sub(CE.copy(Qi).applyQuaternion(n.mesh.quaternion))}function Xy(){let n,e,t=0,i=!1,s=0,r=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let m=e.getChannelData(0);for(let y=0;y<m.length;y++)m[y]=(Math.random()*2-1)*(1-y/m.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),g=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,g.gain.setValueAtTime(Ue.clamp(f,1,10)*.055,h),g.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(g).connect(n.destination),p.start(h),r++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:g,volume:m,enabled:y}){if(h){p.forEach((S,_)=>{a[_]=Math.max(0,a[_]-f);let C=S.valid&&S.groundContact;C&&!o[_]&&!a[_]&&y&&(c(m),a[_]=.11),o[_]=C});return}s=Math.max(0,s-f),t=x?t+g:0,x&&y&&s===0&&(t>=.64||!i&&g>.025)&&(c(m),t=0,s=.12),i=x}function d(){t=0,i=!1,s=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return r},get state(){return n?.state??"locked"}}}function Yy(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),s=new $e;s.setAttribute("position",new ft(t,3).setUsage(wn)),s.setAttribute("color",new ft(i,3).setUsage(wn));let r=new ir(s,new _i({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));r.frustumCulled=!1,r.renderOrder=100,r.visible=!1,n.add(r);let o=new Zi(new In(1,12,8)).attributes.position,a=new Zi(new hi(1).scale(...mh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new M,f=new WeakMap,h=new M(1,1,1),p=new qe,x=new M,g=new M,m=new M,y=new M,S=new M,_=new M,C=new M,A=new M(0,1,0),I={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},D=0;function w(O,q,H){if(D+2>u){c.truncated=!0;return}O.toArray(t,D*3),H.toArray(i,D++*3),q.toArray(t,D*3),H.toArray(i,D++*3)}function b(O,q,H,j,B){for(let re=0;re<O.count;re+=2){if(D+2>u){c.truncated=!0;break}x.fromBufferAttribute(O,re).multiply(j).applyQuaternion(H).add(q),g.fromBufferAttribute(O,re+1).multiply(j).applyQuaternion(H).add(q),w(x,g,B)}}function E(O,q,H,j){if(O.sphereRadius){b(o,q,H,y.setScalar(O.sphereRadius),j);return}let B=l.get(O);if(!B){let re=new Set,ae=[];for(let ge of O.faces)for(let[se,be]of[[ge.a,ge.b],[ge.b,ge.c],[ge.c,ge.a]]){let ve=[se.toArray().join(","),be.toArray().join(",")].sort().join("|");re.has(ve)||(re.add(ve),ae.push(...se.toArray(),...be.toArray()))}B=new Ne(ae,3),l.set(O,B)}b(B,q,H,h,j)}function F(O,q,H,j){if(q.lengthSq()<1e-8)return;S.copy(O).addScaledVector(q,H),_.copy(q).normalize(),C.crossVectors(_,A),C.lengthSq()<1e-8?C.set(1,0,0):C.normalize();let B=Math.min(.09,O.distanceTo(S)*.3);y.copy(S).addScaledVector(_,-B),w(O,S,j),w(S,x.copy(y).addScaledVector(C,B*.5),j),w(S,g.copy(y).addScaledVector(C,-B*.5),j)}function N({settings:O,boxes:q,bodies:H,hands:j,locomotion:B,velocity:re,head:ae,body:ge,neck:se,proxies:be,gravity:ve,appliedMove:Me,playerActive:te,inVR:ie,viewQuaternion:me}){D=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(O.debugBudget??5)*2e3);let Ee=(O.debugRange??6)*5,z=(ee,fe=0)=>!ee||ee.distanceToSquared(ae)<=(Ee+fe)**2;if(r.visible=O.debugPalm||O.debugHitboxes||O.debugInvisible||O.debugForces||O.debugBody||O.debugMesh,!r.visible){s.setDrawRange(0,0);return}if(O.debugHitboxes||O.debugInvisible||O.debugMesh){if(O.debugScene!==!1)for(let ee of q){if(D+2>u){c.truncated=!0;break}let fe=ee.shape?.radius??ee.half?.length()??Math.hypot(ee.xMax-ee.xMin||0,ee.zMax-ee.zMin||0);if(!z(ee.position??ee.mesh?.position,fe))continue;c.boxes++;let T=ee.mesh?.isObject3D&&ee.mesh.visible;if(O.debugMesh&&T&&ee.mesh.geometry){let G=ee.mesh.geometry,J=G.attributes.position.version,Y=f.get(G);Y?.version!==J&&(Y?.edges.dispose(),Y={version:J,edges:new Zi(G)},f.set(G,Y)),b(Y.edges.attributes.position,ee.mesh.position,ee.mesh.quaternion,ee.mesh.scale,I.grip)}if(!(T?!O.debugHitboxes:!O.debugInvisible)){if(ee.shape)E(ee.shape,ee.position,ee.quaternion,T?I.solid:I.proxy);else if(ee.heightfield&&ee.mesh?.geometry){let G=ee.mesh.geometry,J=f.get(G),Y=G.attributes.position.version;J?.version!==Y&&(J?.edges.dispose(),J={version:Y,edges:new Zi(G)},f.set(G,J)),b(J.edges.attributes.position,ee.mesh.position,ee.mesh.quaternion,h,I.solid)}}}if(O.debugObjects!==!1)for(let ee of H){if(D+2>u){c.truncated=!0;break}if(!(!ee.mesh.visible||!z(ee.mesh.position,ee.shape.radius))&&(c.bodies++,O.debugHitboxes&&ee.collidable!==!1&&ee.blocksPlayer!==!1&&E(ee.shape,ee.mesh.position,ee.mesh.quaternion,ee.owner?I.proxy:I.solid),O.debugMesh&&ee.mesh.geometry)){let fe=ee.mesh.geometry,T=fe.attributes.position.version,G=f.get(fe);G?.version!==T&&(G?.edges.dispose(),G={version:T,edges:new Zi(fe)},f.set(fe,G)),b(G.edges.attributes.position,ee.mesh.position,ee.mesh.quaternion,ee.mesh.scale,I.grip)}}}if(te){if(O.debugBody){if(O.collisions)for(let{position:ee,radius:fe}of be)b(o,ee,p,y.setScalar(fe),I.rig);w(ae,se,I.rig),w(se,ge,I.rig)}if(O.debugForces&&(d.set(0,-.22,-.5),me&&d.applyQuaternion(me),d.add(ae),F(d,re,.13,I.velocity),F(d,A,-ve*.038,I.force),F(d,Me,5,I.movement),O.debugObjects!==!1)){for(let ee of H)if(!(!ee.mesh.visible||!ee.velocity||!z(ee.mesh.position,ee.radius))&&(F(ee.mesh.position,ee.velocity,.13,I.velocity),D+2>u)){c.truncated=!0;break}}if(ie&&(O.debugPalm||O.debugForces))for(let ee of B.hands){let{hand:fe,normal:T,offset:G}=ee;if(fe.valid){if(O.debugPalm){b(o,fe.gripPosition,p,y.setScalar(.014),I.grip);for(let J=0;J<3;J++)_.set(0,0,0).setComponent(J,.075).applyQuaternion(fe.controllerRotation),F(fe.gripPosition,_,1,I.grip);S.copy(fe.mesh.position).add(G),b(a,S,fe.mesh.quaternion,h,I.palm),w(fe.gripPosition,S,I.grip),fe.hasSupport&&(S.copy(Qi).applyQuaternion(fe.mesh.quaternion).add(fe.mesh.position),b(a,S,fe.mesh.quaternion,h,I.grip))}O.debugForces&&fe.surface&&F(fe.anchor,T,.25,I.normal)}}}c.vertices=D,c.segments=D/2,s.setDrawRange(0,D);for(let ee of["position","color"]){let fe=s.attributes[ee];fe.clearUpdateRanges(),D&&fe.addUpdateRange(0,D*3),fe.needsUpdate=!!D}}return{update:N,stats:c}}function sd(n,e,t){let i=new Qe(n,e,t),{uv:s,normal:r}=i.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?t:n,u=l?t:e;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*u/2.6)}return i}function Zy(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),s=(e.uvRotation??0)*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*r-d*o+a,u*o+d*r+l)}return t.needsUpdate=!0,n}function jy(n){switch(n){case"sphere":return new In(.5,24,16);case"cylinder":return new Dt(.5,.5,1,24);case"cone":return new Xi(.5,1,24);case"torus":return new di(.34,.14,12,32);case"capsule":return new bs(.32,.36,8,16);default:return new Qe(1,1,1)}}var qp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Ky=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Xp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},rd=8e6,Pl=512,Ri=1024,Jy=512,$t=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,$y=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Il(n){if(typeof n=="string"){if(n.length>rd)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Pl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Pl+" pi\xE8ces.");let e=n.spawn??{};return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},name:$y(n.name,56,"Ma map"),worldSize:$t(n.worldSize,24,2048,240),spawn:{x:$t(e.x,-Ri,Ri,0),y:$t(e.y,-256,256,.06),z:$t(e.z,-Ri,Ri,3),yaw:$t(e.yaw,-360,360,0)},pieces:n.pieces.map((t,i)=>{if(!t||typeof t!="object")throw Error("Pi\xE8ce invalide : "+(i+1));let s=t.terrain&&typeof t.terrain=="object"?qo(t.terrain):null,r=t.model?vr({version:1,models:[t.model]}).models[0]:null;if(r&&!r.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:$y(t.name,36,"Pi\xE8ce "+(i+1)),...typeof t.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(t.sceneryId)?{sceneryId:t.sceneryId}:{},x:$t(t.x,-Ri,Ri,0),y:$t(t.y,-256,256,0),z:$t(t.z,-Ri,Ri,0),w:$t(t.w,.05,Jy,3),h:$t(t.h,.05,256,.5),d:$t(t.d,.05,Jy,3),pitch:s?0:$t(t.pitch,-180,180,0),yaw:s?0:$t(t.yaw,-360,360,0),roll:s?0:$t(t.roll,-180,180,0),...s?{terrain:s}:{},...r?{model:r}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(t.primitive)?t.primitive:"box",uvScale:$t(t.uvScale,.05,100,1),uvOffsetX:$t(t.uvOffsetX,-100,100,0),uvOffsetY:$t(t.uvOffsetY,-100,100,0),uvRotation:$t(t.uvRotation,-360,360,0),material:Math.round($t(t.material,0,16,0)),color:typeof t.color=="string"&&/^#[a-f0-9]{6}$/i.test(t.color)?t.color:"#ffffff",grip:$t(t.grip,0,1.5,.8),gravity:$t(t.gravity,.05,2.5,1),bounce:$t(t.bounce,0,1.65,1),solid:t.solid!==!1,texture:typeof t.texture=="string"&&t.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(t.texture)?t.texture:null}})}}function Qy(n){return Il({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Vo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>({name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:e.mesh.rotation.x*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity}))})}function od(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function ev(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let s=e,r=new sn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new M(s.x,s.y,s.z).applyEuler(r),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+s.x*a),u=l(n.y+s.y*a),d=l(n.z+s.z*a),f=a-(c-n.x)*s.x-(u-n.y)*s.y-(d-n.z)*s.z;return c+=s.x*f,u+=s.y*f,d+=s.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ri||Math.abs(d)>Ri||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var Ll="gorilla-lab-custom-map-v1";function tv(n){let e=new Blob([JSON.stringify(Il(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}function nv({scene:n,arena:e,boot:t,onReset:i,onVisual:s,getLevel:r,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(z=>z.half&&z.mesh?.isObject3D).map(z=>z.mesh)),c=new _t;n.add(c);let u=[],d=[],f=new Mi,h=new Map,p=0,x=null,g="",m=-1,y=-1,S="",_="",C=new Qe(1,1,1),A=new ze(C,new gt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));A.visible=!1,n.add(A);let I=new ji,D=new M,w=new M,b=document.querySelector("#map-note");function E(z){S=z,b.textContent=z}function F(){d.length>=20&&d.shift(),d.push(JSON.stringify(x))}function N(z,ee){let fe=h.get(z);if(!fe){fe={materials:new Set,texture:null,failed:!1},h.set(z,fe);let T=J=>{if(!(h.get(z)!==fe||fe.failed)){fe.failed=!0;for(let Y of fe.materials)Y.map=null,Y.needsUpdate=!0;fe.texture?.dispose(),J&&E(J)}},G=f.load(z,J=>{(J.image.width>2048||J.image.height>2048)&&T("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>T());fe.texture=G,G.colorSpace=lt,G.wrapS=G.wrapT=kn}return fe.materials.add(ee),ee.map=fe.failed?null:fe.texture,fe}function O(){for(let[z,ee]of h)ee.materials.size||(h.delete(z),ee.failed||ee.texture.dispose())}function q(z){let ee=e.mapMaterial(z.material,r());if(!z.texture&&z.color==="#ffffff")return{material:ee,custom:!1};let fe=ee.clone();return fe.onBeforeCompile=ee.onBeforeCompile,fe.customProgramCacheKey=ee.customProgramCacheKey,fe.color.multiply(new De(z.color)),{material:fe,custom:!0,ownTexture:z.texture?N(z.texture,fe):null}}function H(z){c.remove(z.mesh),z.mesh.geometry.dispose(),z.vegetation&&Py(z.vegetation),z.custom&&(z.ownTexture?.materials.delete(z.mesh.material),z.model?jh(z.mesh.material):z.mesh.material.dispose())}function j(z,ee){if(z.model){let K=Wo(z.model);K.scale(z.w,z.h,z.d);let le=Us(z.model),he=new ze(K,le);he.position.set(z.x,z.y,z.z),he.rotation.set(Ue.degToRad(z.pitch),Ue.degToRad(z.yaw),Ue.degToRad(z.roll??0),"YXZ"),he.castShadow=he.receiveShadow=!0,he.userData.mapIndex=ee,z.model.kind==="prop"&&(he.visible=!1),c.add(he);let R=new M(z.w,z.h,z.d),v=El(z.model,R);v.computeBoundingBox();let L=v.boundingBox,W=new M(Math.max(Math.abs(L.min.x),Math.abs(L.max.x)),Math.max(Math.abs(L.min.y),Math.abs(L.max.y)),Math.max(Math.abs(L.min.z),Math.abs(L.max.z))),oe=Ti(v);v.dispose();let $={mesh:he,position:he.position,quaternion:he.quaternion,half:W,min:W.clone().negate(),shape:oe,radius:oe.radius,friction:z.grip,gravity:z.gravity,bounce:z.bounce,zone:!0,type:z.material};return{mesh:he,collider:$,custom:!0,model:!0}}let{material:fe,custom:T,ownTexture:G}=q(z),J=z.terrain?Ey(z):z.primitive&&z.primitive!=="box"?jy(z.primitive).scale(z.w,z.h,z.d):sd(z.w,z.h,z.d),Y=new ze(Zy(J,z),fe);Y.position.set(z.x,z.y,z.z),Y.rotation.set(Ue.degToRad(z.pitch),Ue.degToRad(z.yaw),Ue.degToRad(z.roll??0),"YXZ"),Y.castShadow=Y.receiveShadow=!0,Y.userData.mapIndex=ee,c.add(Y);let U=new M(z.w/2,z.h/2,z.d/2),Z={mesh:Y,position:Y.position,quaternion:Y.quaternion,half:U,min:U.clone().negate(),shape:Ai(U),friction:z.grip,gravity:z.gravity,bounce:z.bounce,zone:!0,type:z.material};if(!z.terrain)return{mesh:Y,collider:Z,custom:T,ownTexture:G};let V=Ry(z);return V&&Y.add(V),{mesh:Y,collider:Cy(z,Y),custom:T,ownTexture:G,vegetation:V}}function B(){for(let z of u){let ee=x?.pieces[z.mesh.userData.mapIndex];if(!ee||z.ownTexture||z.model)continue;let fe=e.mapMaterial(ee.material,r());z.custom?z.mesh.material.map!==fe.map&&(z.mesh.material.map=fe.map,z.mesh.material.needsUpdate=!0):z.mesh.material=fe}}function re(){for(let T of u)H(T);u.length=0;let z=x?.pieces??[];g=x?"custom-"+pr(JSON.stringify(x)):"";let ee=new Set(z.map(T=>T.model?.assetId).filter(Boolean)),fe=new Set(z.map(T=>T.sceneryId).filter(Boolean));o.forEach(T=>{let G=T.userData?.editorAssetId;T.visible=!x||x.arenaBase&&!l.has(T)&&(!G||!ee.has(G)&&!fe.has(G)),x?.assetLayer&&T.userData?.editorAssetId==="palm-tree"&&T.traverse(J=>{J.userData?.editorFixtureCoconut&&(J.visible=!1)})});for(let T=0;T<z.length;T++)u.push(j(z[T],T));if(O(),x){let T=x.arenaBase?a.filter(G=>!l.has(G.mesh)&&(!G.editorAssetId||!ee.has(G.editorAssetId)&&!fe.has(G.editorAssetId))):[];e.boxes.splice(0,e.boxes.length,...T,...u.filter((G,J)=>z[J].solid&&z[J].model?.kind!=="prop"&&z[J].model?.properties?.collidable!==!1).map(G=>G.collider))}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),s(),x)try{localStorage.setItem(Ll,JSON.stringify(x))}catch{}else try{localStorage.removeItem(Ll)}catch{}}function ae(z){let ee=Il(z);p++,d.length=0,x=ee,m=y=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),re(),i(x.spawn.yaw),E("Map : "+x.name+" \xB7 "+x.pieces.length+" pi\xE8ces")}function ge(){p++,x=null,d.length=0,m=y=-1,t.set(0,0,3),re(),i(0),E("Ar\xE8ne int\xE9gr\xE9e")}function se(){ae({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[od({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function be(){if(!d.length)return E("Rien \xE0 annuler.");x=Il(d.pop()),m=y=-1,t.set(x.spawn.x,x.spawn.y,x.spawn.z),re(),E("Derni\xE8re modification annul\xE9e.")}function ve(){x?tv(x):E("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Me(z,ee,fe,T){x&&(F(),x.spawn={x:z,y:ee,z:fe,yaw:Ue.radToDeg(T)},t.set(z,ee,fe),re(),E("Point de d\xE9part m\xE9moris\xE9."))}function te(z,ee,fe,{mode:T,piece:G,head:J,feet:Y}){I.set(z,ee),I.far=12;let U=u.map(L=>L.mesh);T===1&&x?.arenaBase&&U.push(...a.filter(L=>L.heightfield&&!x.pieces.some(W=>W.sceneryId===L.editorAssetId)).map(L=>L.mesh));let Z=I.intersectObjects(U,!1),V=T>=5?Z.find(L=>x?.pieces[L.object.userData.mapIndex]?.terrain):Z[0];if(A.visible=!1,!x)return;if(T>=5){let L=V?.object.userData.mapIndex,W=x.pieces[L];if(!W?.terrain||!fe)return;if(F(),T===9){let oe=G.terrain?.detail??W.terrain.detail,$=Ty(W.terrain,oe);W.terrain=qo({...$,...G.terrain,heights:$.heights})}else{let oe={mode:["raise","lower","smooth","flatten"][T-5],radius:G.brushRadius,strength:G.brushStrength,target:W.y};Ay(W,V.point.x,V.point.z,oe)}re(),E("Relief modifi\xE9.");return}if(T===2||T===3||T===4){if(!V)return;let L=V.object.userData.mapIndex,W=x.pieces[L];if(fe&&T===2&&(m=L,y=L,E("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),fe&&T===3){if(x.pieces.length===1)return E("Garde au moins une pi\xE8ce dans la map.");F(),x.pieces.splice(L,1),m=y=-1,re(),E("Pi\xE8ce supprim\xE9e.")}fe&&T===4&&(F(),Object.assign(x.pieces[L],{material:G.material,grip:G.grip,gravity:G.gravity,bounce:G.bounce,solid:G.solid,texture:G.texture}),re(),E("Surface modifi\xE9e.")),V&&(A.position.copy(V.object.position),A.rotation.copy(V.object.rotation),A.scale.set(W.w,W.h,W.d).multiplyScalar(1.006),A.visible=!0,A.material.color.set(T===3?"#ff8271":"#ffe2a2"));return}if(!V)return;let K=y>=0?x.pieces[y]:G;if(V.object.userData.mapIndex===y)return;D.copy(V.face.normal).transformDirection(V.object.matrixWorld);let le=K.terrain?{...K,x:Math.round(V.point.x*2)/2,y:V.point.y,z:Math.round(V.point.z*2)/2,pitch:0,yaw:0}:ev(V.point,D,K);if(!le)return;A.position.set(le.x,le.y,le.z),A.rotation.set(Ue.degToRad(le.pitch),Ue.degToRad(le.yaw),Ue.degToRad(le.roll??0),"YXZ"),A.scale.set(le.w,le.h,le.d),A.updateMatrixWorld(!0),A.visible=!0;let he=new tn().setFromObject(A),R=new tn(new M(J.x-.26,Y+.01,J.z-.26),new M(J.x+.26,J.y+.19,J.z+.26)),v=le.solid&&he.intersectsBox(R);if(A.material.color.set(v?"#fd7763":"#8be4b9"),fe){if(v)return E("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(y<0&&x.pieces.length>=Pl)return E("Limite de "+Pl+" pi\xE8ces atteinte.");F(),y>=0?(x.pieces[y]=le,y=-1):x.pieces.push(le),re(),E("Pi\xE8ce pos\xE9e \xB7 "+x.pieces.length+" pi\xE8ces")}}let ie=document.querySelector("#map-file"),me=document.querySelector("#map-url");ie.onchange=async()=>{let z=ie.files[0];if(!z)return;let ee=++p;ie.value="";try{if(z.size>rd)throw Error("Map trop lourde.");let fe=await z.text();ee===p&&ae(fe)}catch(fe){ee===p&&E(fe.message)}};async function Ee(z){let ee=++p;try{let fe=new URL(z,location.href);if(!["http:","https:"].includes(fe.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let T=await fetch(fe,{credentials:"omit"});if(ee!==p)return;if(!T.ok)throw Error("URL de map inaccessible ("+T.status+").");if(Number(T.headers.get("content-length"))>rd)throw Error("Map trop lourde.");let J=await T.text();ee===p&&ae(J)}catch(fe){ee===p&&E(fe.message)}}return document.querySelector("#map-load-url").onclick=()=>Ee(me.value),document.querySelector("#map-export").onclick=ve,document.querySelector("#map-reset").onclick=ge,{placedModels:()=>x?.pieces.filter(z=>z.model?.kind==="prop")??[],modelPieces:()=>x?.pieces.filter(z=>!z.terrain&&z.name!=="Sol")??[],refreshMaterials:B,load:ae,loadURL:Ee,reset:ge,blank:se,undo:be,save:ve,edit:te,recenter:Me,inform:E,clearGhost(){A.visible=!1},get active(){return!!x},get builtIn(){return!x||x.arenaBase===!0},get assetLayer(){return x?.assetLayer===!0},hasAsset(z){return!!x?.pieces.some(ee=>ee.model?.assetId===z)},getAssetPiece(z){return x?.pieces.find(ee=>ee.model?.assetId===z)??null},get status(){return S},get yaw(){return x?.spawn.yaw??0},get nodes(){return x?.pieces.length??0},get name(){return x?.name??null},get signature(){return g}}}var Yp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function iv(){let n=new ze(new qt(2,2),new hn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+Yp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function sv(n){let e=new nr,t=new Jt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new we(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},s=new hn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+Yp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),r=new ze(new qt(2,2),s);r.frustumCulled=!1,e.add(r);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];r.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),s.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let S=l[y],_=Math.max(32,Math.round(S.viewport.z)),C=Math.max(32,Math.round(S.viewport.w)),A=a[y];A?(A.width!==_||A.height!==C)&&A.setSize(_,C):A=a[y]=new Rn(_,C,{type:o?Si:Wn,minFilter:cn,magFilter:cn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(S.matrixWorld),t.matrixWorld.copy(S.matrixWorld),t.matrixWorldInverse.copy(S.matrixWorldInverse),t.projectionMatrix.copy(S.projectionMatrix),t.projectionMatrixInverse.copy(S.projectionMatrixInverse),t.layers.mask=S.layers.mask,n.shadowMap.autoUpdate=y===0&&g,n.setRenderTarget(A),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function rv(n){let e={value:0},t={value:Array.from({length:7},()=>new ut(0,0,0,0))},i=n.material;return i.onBeforeCompile=s=>{s.uniforms.uLabTrace=e,s.uniforms.uLabProbeCenter={value:n.position},s.uniforms.uLabPrimitives=t,s.vertexShader=`varying vec3 vRayWorld;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),s.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(r,o){if(e.value=r?1:0,!!r)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function ov(n,e,t){let i=new Pt({color:16777215,vertexColors:!0,flatShading:!0}),s=new Dt(.16,.25,3.15,9,12),r=s.attributes.position,o=new De,a=[];for(let se=0;se<r.count;se++){let be=Math.round((r.getY(se)+1.575)/3.15*12),ve=Math.floor((Math.atan2(r.getX(se),r.getZ(se))+Math.PI)*1.43);o.setHSL(.084+be*.002,.35,.35+be%3*.032+ve%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new Ne(a,3));let l=new _t;l.userData.editorAssetId="palm-tree",l.position.set(Dp.x,0,Dp.z),l.rotation.z=-.14,n.add(l);let c=new ze(s,i);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function u(se,be,ve=.85,Me=null){let te=se.getWorldPosition(new M),ie=se.getWorldQuaternion(new qe);e.push({half:be,min:be.clone().negate(),position:te,quaternion:ie,mesh:{position:te,quaternion:ie},shape:Ai(be),friction:ve,gravity:1})}for(let se=0;se<4;se++){let be=new Bt;be.position.y=(se+.5)*3.15/4,l.add(be);let ve=.237-se*.022;u(be,new M(ve,.398,ve),.85,"palm-tree")}let d=[],f=[],h=3.14;function p(se,be,ve,Me){d.push(...se,...be,...ve),o.setHSL(.25+Me*.043,.54,.28+Me*.17);for(let te=0;te<3;te++)f.push(o.r,o.g,o.b)}for(let se=0;se<10;se++){let Me=function(te,ie){let me=te*ve;return[Math.cos(be)*me-Math.sin(be)*ie,h+Math.sin(te*Math.PI)*.38-te*te*.54+se%3*.055,Math.sin(be)*me+Math.cos(be)*ie]},be=se*2.39996,ve=1.35+se%4*.2;for(let te=0;te<7;te++){let ie=te/7,me=(te+1)/7,Ee=.285*Math.sin(Math.PI*ie)**.7,z=.285*Math.sin(Math.PI*me)**.7;for(let ee of[-1,1]){let fe=Me(ie,Ee*ee),T=Me(me,z*ee);fe[1]-=.065,T[1]-=.065,p(Me(ie,0),fe,T,.31+te%4*.14),p(Me(ie,0),T,Me(me,0),.47+se%3*.16)}}}let x=new $e;x.setAttribute("position",new Ne(d,3)),x.setAttribute("color",new Ne(f,3)),x.computeVertexNormals();let g=new ze(x,new Pt({vertexColors:!0,side:At,flatShading:!0}));g.castShadow=!0,l.add(g);let m=new pt({color:"#956238",roughness:.92,flatShading:!0}),y=[];for(let se=0;se<5;se++){let be=se*Math.PI*2/5,ve=new ze(new Rt(.124,1),m);ve.userData.editorFixtureCoconut=!0,ve.position.set(Math.cos(be)*(.25+se%2*.1),2.88+se%3*.06,Math.sin(be)*(.25+se%2*.1)),ve.scale.set(.91,1.16,.91),ve.castShadow=!0,l.add(ve),y.push(ve)}l.updateMatrixWorld(!0);let S=[],_=[],C=new Pt({color:"#485d5d",flatShading:!0});function A([se,be],ve,Me){let te=new ze(new Qe(.095,.68,.11),C);te.position.set(se,.34,be+.46),te.castShadow=te.receiveShadow=!0,n.add(te),u(te,new M(.0475,.34,.055));let ie=new _t;ie.position.set(se,.85,be+.4),ie.rotation.x=-.35,n.add(ie);let me=new ze(new Qe(.64,.36,.055),new Pt({color:"#182831"}));ie.add(me);let Ee=document.createElement("canvas");Ee.width=512,Ee.height=96;let z=Ee.getContext("2d"),ee=new Pn(Ee);ee.colorSpace=lt;let fe=new ze(new qt(.61,.095),new gt({map:ee}));fe.position.set(0,.116,.03),ie.add(fe);let T=.592/Me.length,G=Me.map(([Y,U],Z)=>{let V=new ze(new Qe(T-.012,.155,.04),new Pt({color:"#478086"}));V.position.set(-.296+T*(Z+.5),-.045,.046),ie.add(V),S.push(V),V.userData.touchWidth=T-.012;let K=document.createElement("canvas");K.width=208,K.height=172;let le=new Pn(K);le.colorSpace=lt;let he=new ze(new qt(T-.017,.139),new gt({map:le}));he.position.z=.0205,V.add(he);let R=-1/0;return V.userData.action=()=>{let v=performance.now();v-R<250||(R=v,U(),I(),V.position.z=.036,setTimeout(()=>{V.position.z=.046},115))},{label:Y,context:K.getContext("2d"),texture:le}});function J(){z.fillStyle="#182831",z.fillRect(0,0,512,96),z.fillStyle="#ffe1a0",z.font="bold 38px system-ui",z.fillText(ve,17,62,478);for(let Y of G){let U=Y.context;U.fillStyle="#386269",U.fillRect(0,0,208,172),U.fillStyle="#fff2d5",U.textAlign="center",U.font="bold 27px system-ui";let Z=(typeof Y.label=="function"?Y.label():Y.label).split("|");Z.forEach((V,K)=>U.fillText(V,104,(Z.length>1?68:97)+K*37,188)),Y.texture.needsUpdate=!0}ee.needsUpdate=!0}_.push(J)}function I(){for(let se of _)se()}A(ko.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Go[0])],["Boule",()=>t.spawn(1,Go[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Go[0])],["Vider",t.clear]]),A(ko.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Go[1])],["Sph\xE8re",()=>t.spawn(5,Go[1])]]),A(ko.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),A(ko.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),A(ko.coconuts,"COCOTIER",[["Remettre|les cocos",t.resetTree],["Vider|les objets",t.clear]]),I();let D=new _t;D.userData.editorAssetId="range-target";let{x:w,y:b,z:E}=qh;D.position.set(w,b,E),n.add(D);let F=["#e2ad5c","#ca664b","#f5e5bd"];for(let se=0;se<3;se++){let be=[.9,.58,.27][se],ve=new ze(new zt(be,20),new Pt({color:F[se],side:At}));ve.position.z=se*.012,D.add(ve)}let N=new ze(new Qe(.14,1.5,.14),C);N.position.set(0,.75-b,-.11),D.add(N);let O=0,q=document.createElement("canvas");q.width=256,q.height=64;let H=q.getContext("2d"),j=new Pn(q);j.colorSpace=lt;let B=new ze(new qt(1.4,.35),new gt({map:j,side:At}));B.position.set(0,2.64-b,.02),D.add(B);function re(){H.fillStyle="#182831",H.fillRect(0,0,256,64),H.textAlign="center",H.font="bold 28px system-ui",H.fillStyle="#fff0ce",H.fillText("CIBLE  \xB7  "+O,128,42),j.needsUpdate=!0}let ae={position:new M(w,b,E),right:new M(1,0,0),up:new M(0,1,0),normal:new M(0,0,1),scaleX:1,scaleY:1};function ge(se,be=null){let ve=be??ae,{position:Me,right:te,up:ie,normal:me}=ve,Ee=Math.max(1e-4,ve.scaleX??1),z=Math.max(1e-4,ve.scaleY??1);for(let ee of se){if(!ee.beforePhysics||ee.owner||ee.frozen||!ee.mesh.visible)continue;let fe=ee.beforePhysics,T=ee.mesh.position,G=(fe.x-Me.x)*me.x+(fe.y-Me.y)*me.y+(fe.z-Me.z)*me.z,J=(T.x-Me.x)*me.x+(T.y-Me.y)*me.y+(T.z-Me.z)*me.z;if(G<=0||J>0||ee.velocity.dot(me)>=-1)continue;let Y=G/(G-J),U=Ue.lerp(fe.x,T.x,Y)-Me.x,Z=Ue.lerp(fe.y,T.y,Y)-Me.y,V=Ue.lerp(fe.z,T.z,Y)-Me.z,K=(U*te.x+Z*te.y+V*te.z)/Ee,le=(U*ie.x+Z*ie.y+V*ie.z)/z,he=Math.hypot(K,le),R=ee.radius/Math.sqrt(Ee*z);he<=.9+R*.45&&(O+=he<.27?3:he<.58?2:1,re())}}return re(),{targets:S,coconuts:y,tree:l,target:D,redraw:I,updateTarget:ge,score:()=>O,setScore(se){O=se,re()}}}function Dl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Fs=(n,e,t)=>n+(e-n)*t,Xo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function ad(n,e){let t=Math.floor(n),i=Math.floor(e),s=Xo(0,1,n-t),r=Xo(0,1,e-i);return Fs(Fs(Dl(t,i),Dl(t+1,i),s),Fs(Dl(t,i+1),Dl(t+1,i+1),s),r)}function av(n,e){return ad(n,e)*.54+ad(n*2.07+3.4,e*2.07-6.1)*.26+ad(n*4.2+9,e*4.2)*.13+ad(n*8.6,e*8.6-13)*.07}function lv(n){let i=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=r.map((p,x)=>Fs(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,y=0;if(c>.025)if(n){let _=Dl(p+792,l+677);_>.9988&&(y=(_-.9988)*49e3*Xo(.09,.3,c))}else{let[_,C]=s[p],A=2.8*u/(c+.16),I=_*A+3.6,D=C*A-8.1,w=av(I,D),b=av(I-.12,D-.09);g=Xo(.49,.66,w)*Xo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(w-b)*5+(w-.54)*.8))}let S=n?1:Fs(.94,1,Xo(.05,.34,c));i[x]=Fs(h[0],(139+115*m)*S,g)+y,i[x+1]=Fs(h[1],(154+100*m)*S,g)+y*.94,i[x+2]=Fs(h[2],(178+77*m)*S,g)+y*.86,i[x+3]=255}}let a=new vi(i,1024,512,Dn);return a.colorSpace=lt,a.wrapS=kn,a.magFilter=un,a.minFilter=Ln,a.generateMipmaps=!0,a.needsUpdate=!0,a}function cv(){return{day:lv(!1),night:lv(!0)}}function ld(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Pn(i);return s.colorSpace=lt,s}function uv(n,e){let{day:t,night:i}=cv(),s=new ze(new In(180,40,20),new gt({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(s);let r=ld(128,128,(v,L)=>{let W=v.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);W.addColorStop(0,"#fff8df"),W.addColorStop(.12,"#fff3bd"),W.addColorStop(.18,"rgba(255,225,144,.40)"),W.addColorStop(1,"rgba(255,220,144,0)"),v.fillStyle=W,v.fillRect(0,0,L,L)}),o=new Da(new ao({map:r,blending:$n,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=yo,a.needsUpdate=!0;let l=new To(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new Qa("#daeaff","#88724c",2.25),u=new nl("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new M,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(v){h=f[v]?v:0;let L=f[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,d.set(...L.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,s.material.map=h===2?i:t,s.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=g*[1,.56,.09][h]}function x(v){if(!u.castShadow)return;let L=u.target.position,W=Math.round(v.x/4)*4,oe=Math.round(v.y/4)*4,$=Math.round(v.z/4)*4;L.x===W&&L.y===oe&&L.z===$||(L.set(W,oe,$),u.position.copy(L).add(d))}let g=0;n.background=new De(f[0].fog);let m=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function y(v,L,W){let[,oe,$]=m[L],xe=512;v.save(),v.scale(W/512,W/512),v.fillStyle=oe,v.fillRect(0,0,xe,xe);let pe=L+19;function Se(){return pe=Math.imul(pe,1664525)+1013904223>>>0,pe/4294967296}if(v.fillStyle=$,L===16){for(let _e=0;_e<16;_e++)for(let de=0;de<16;de++)(de+_e)%2===0&&v.fillRect(de*32,_e*32,32,32);v.fillStyle="#ff3957",v.fillRect(253,0,6,512),v.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let _e=L===15?32:64;v.globalAlpha=.48;for(let de=0;de<xe;de+=_e){v.fillRect(0,de,xe,L===8?3:2);for(let Te=-_e;Te<xe;Te+=_e)v.fillRect(Te+de/_e%2*(L===2?_e/2:0),de,2,_e)}}else if([4,5,6,7,10,11,12].includes(L)){let _e=L===5?38:L===7?64:18;for(let de=0;de<_e;de++){v.strokeStyle=$,v.globalAlpha=.08+Se()*.22,v.lineWidth=L===5?1+Se()*8:1+Se()*4;let Te=Se()*xe,Ve=L===5?.018:.009;v.beginPath();for(let Ae=0;Ae<=xe;Ae+=8){let Pe=Te+Math.sin(Ae*Ve+de)*(L===6||L===7?4:12+de%5*3)+(L===4?Ae*.28:0);Ae===0?v.moveTo(Ae,Pe):v.lineTo(Ae,Pe)}v.stroke()}}else{v.globalAlpha=.27;for(let _e=0;_e<120;_e++){let de=Se()*xe,Te=Se()*xe,Ve=2+Se()*6;v.beginPath(),v.arc(de,Te,Ve,0,Math.PI*2),v.fill()}}if(L!==16)for(let _e=0;_e<4400;_e++)v.globalAlpha=.05+Se()*.1,v.fillStyle=Se()>.5?$:"#222324",v.fillRect(Se()*xe,Se()*xe,1+Se()*4,1+Se()*3);v.restore()}let S=new Set([0,2,4,5,8,15,16]),_=m.map(([v,L,W,oe,$,xe],pe)=>{let Se=S.has(pe)?512:256,_e=ld(Se,Se,Te=>y(Te,pe,Se));_e.wrapS=_e.wrapT=kn;let de=new pt({map:_e,roughness:oe,metalness:$,flatShading:!0,opacity:xe,transparent:xe<1,depthWrite:xe===1});return de.name=v,de}),C=_.map(v=>v.map.image),A=512,I=_.map(v=>new Pt({map:v.map,flatShading:!0,opacity:v.opacity,transparent:v.transparent,depthWrite:v.depthWrite})),D={value:0},w={value:.24},b={value:null},E={value:0};function F(){b.value?.dispose(),b.value=ld(512,512,(v,L)=>{v.fillStyle="#ffffff",v.fillRect(0,0,L,L);let W=L/52,oe=L/64;for(let $ of N){if(!$.position||!$.half||$.position.y+$.half.y<.22)continue;let xe=($.position.x+26)*W,pe=($.position.z+54)*oe,Se=Math.min(55,$.half.x*W+5),_e=Math.min(72,$.half.z*oe+6);v.save(),v.translate(xe+$.half.y*W*.2,pe+$.half.y*oe*.24),v.scale(Se,_e);let de=v.createRadialGradient(0,0,.15,0,0,1);de.addColorStop(0,"rgba(22,37,65,.54)"),de.addColorStop(.58,"rgba(36,54,76,.29)"),de.addColorStop(1,"rgba(38,48,57,0)"),v.fillStyle=de,v.fillRect(-1,-1,2,2),v.restore()}})}for(let v of[..._,...I])v.onBeforeCompile=L=>{L.uniforms.uFocusAmount=D,L.uniforms.uFocusRadius=w,L.uniforms.uLabLightmap=b,L.uniforms.uLabBakedStrength=E,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},v.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let N=[],O=[];function q(v,L,W,oe,$,xe,pe,Se=0,_e=0,de=1,Te=1,Ve=!1){let Ae=new ze(Ve?new Qe($,xe,pe):sd($,xe,pe),_[Se]);Ae.position.set(L,W,oe),Ae.rotation.x=_e,Ae.receiveShadow=!0,Ae.castShadow=!0,n.add(Ae);let Pe=new M($/2,xe/2,pe/2),We={mesh:Ae,position:Ae.position,quaternion:Ae.quaternion,half:Pe,min:Pe.clone().negate(),friction:de,gravity:Te,name:v,type:Se,shape:Ai(Pe)};return N.push(We),We}let H=ry.map(({name:v,bounds:L,type:W=0,friction:oe=.78,gravity:$=1})=>{let{xMin:xe,xMax:pe,zMin:Se,zMax:_e}=L;return q(v,(xe+pe)/2,-.33,(Se+_e)/2,pe-xe,.66,_e-Se,W,0,oe,$)});for(let v of Object.values(ly))for(let L of v)q(...L);let{xMin:j,xMax:B,zMin:re,zMax:ae}=iy;q("But\xE9e arri\xE8re",0,1.35,re+.4,B-j,2.7,.6,2),q("But\xE9e ouest",j+.3,1.05,(re+ae)/2,.6,2.1,ae-re,2),q("But\xE9e est",B-.3,1.05,(re+ae)/2,.6,2.1,ae-re,2);let{xMin:ge,xMax:se,zMin:be,zMax:ve}=zo.hills.bounds,Me=se-ge,te=ve-be,ie=16,me=64,Ee=new qt(Me,te,ie,me).rotateX(-Math.PI/2).translate(ge+Me/2,0,be+te/2),z=Ee.attributes.uv;for(let v=0;v<z.count;v++)z.setXY(v,z.getX(v)*Me/2.6,z.getY(v)*te/2.6);let ee=Ee.attributes.position,fe;function T(v){if(fe===v)return;fe=v;let L=fe*.017;for(let W=0;W<ee.count;W++){let oe=ee.getX(W),$=ee.getZ(W),xe=Math.sin(Math.PI*Ue.clamp((oe-ge)/Me,0,1)),pe=Math.min(1,($-be)*.48,(ve-$)*.48),Se=.93+.56*Math.sin($*.36+L)+.32*Math.cos(oe*.67+$*.26+L*1.4)+.19*Math.sin($*.81+L*.67);ee.setY(W,Math.max(0,xe*pe*Se))}ee.needsUpdate=!0,Ee.computeVertexNormals(),Ee.computeBoundingSphere()}T(sy);let G=new ze(Ee,_[3]);G.userData.editorAssetId="lab-hill",G.receiveShadow=G.castShadow=!0,n.add(G);let J=(v,L)=>{let W=Ue.clamp((v-ge)/Me*ie,0,ie-1e-6),oe=Ue.clamp((L-be)/te*me,0,me-1e-6),$=Math.floor(W),xe=Math.floor(oe),pe=W-$,Se=oe-xe,_e=ie+1,de=xe*_e+$,Te=ee.getY(de),Ve=ee.getY(de+1),Ae=ee.getY(de+_e),Pe=ee.getY(de+_e+1);return pe+Se<=1?Te+(Ve-Te)*pe+(Ae-Te)*Se:Pe+(Ae-Pe)*(1-pe)+(Ve-Pe)*(1-Se)};N.push({heightfield:!0,mesh:G,editorAssetId:"lab-hill",height:J,...zo.hills.bounds,friction:.81,gravity:1});function Y(v,L,W,oe,$=1.45){let xe=ld(384,72,(Se,_e,de)=>{Se.fillStyle="#202a32",Se.fillRect(0,0,_e,de),Se.fillStyle=oe,Se.font="bold 31px system-ui",Se.textAlign="center",Se.fillText(v,_e/2,48,_e-20)}),pe=new ze(new qt(3.2,.6),new gt({map:xe,side:At}));pe.position.set(L,$,W),n.add(pe),O.push(pe)}for(let v of Object.values(zo)){Y(v.name.toLocaleUpperCase("fr"),...v.sign,v.color);let{xMin:L,xMax:W,zMin:oe,zMax:$}=v.bounds,xe=new Na(new $e().setFromPoints([new M(L,.025,oe),new M(W,.025,oe),new M(W,.025,$),new M(L,.025,$)]),new _i({color:v.color,transparent:!0,opacity:.72}));n.add(xe),O.push(xe)}Y("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Y("MURS HAUTS",3,-31,"#e8d2ff"),Y("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let U=new pt({color:"#c8e6ed",metalness:1,roughness:.16}),Z=new ze(new Rt(.54,2),U);Z.position.set(Xh.x,Xh.y,Xh.z),Z.castShadow=!0,n.add(Z);let V=m.map((v,L)=>{let{x:W,z:oe}=ay(L);return q("\xC9chantillon "+m[L][0],W,.325,oe,.65,.65,.65,L,0,1,1,!0).mesh}),K=new zt(1,12).rotateX(-Math.PI/2),le=new gt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function he(v){let L=new ze(K,le);return L.scale.setScalar(v),n.add(L),L}function R(v,L,W,oe,$,xe,pe,Se){let _e=L>=3;e.shadowMap.enabled=_e,u.castShadow=_e,le.opacity=L===2?.17:.11,E.value=Se?.38+W*.04:0;let de=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Te=13+L*1.2;Object.assign(u.shadow.camera,{left:-Te,right:Te,top:Te,bottom:-Te}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==de&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(de,de)),o.visible=$,pe!==A&&(A=pe,_.forEach((Ae,Pe)=>{let We=Ae.userData.texture??Ae.map,X=S.has(Pe)?pe:Math.min(256,pe);if(We.image.width===X)return;let Re=document.createElement("canvas");Re.width=Re.height=X;let Le=Re.getContext("2d");X>512?y(Le,Pe,X):Le.drawImage(C[Pe],0,0,X,X);let Oe=new Pn(Re);Oe.colorSpace=We.colorSpace,Oe.wrapS=We.wrapS,Oe.wrapT=We.wrapT,Oe.repeat.copy(We.repeat);for(let Ce of[Ae,I[Pe]])Ce.userData.texture=Oe,Ce.map=Oe,Ce.needsUpdate=!0;We.dispose()}));let Ve=v>=4;for(let Ae of N)Ae.mesh?.isMesh&&!Ae.zone&&(Ae.mesh.material=Ve?_[Ae.type]:I[Ae.type]);G.material=Ve?_[3]:I[3];for(let Ae=0;Ae<V.length;Ae++)V[Ae].material=Ve?_[Ae]:I[Ae];_.forEach((Ae,Pe)=>{for(let We of[Ae,I[Pe]])We.userData.texture||(We.userData.texture=We.map),We.map=xe?We.userData.texture:null,We.color.set(xe?"#ffffff":m[Pe][1]),We.needsUpdate=!0}),g=oe?.21+W*.067:0,U.metalness=oe?.95:.1,U.roughness=oe?.13:.46,s.visible=v>=2,p(h)}return{boxes:N,floors:H,probe:Z,display:V,visual:R,shadow:he,setTimeOfDay:p,centerShadows:x,get hillSeed(){return fe},setHillSeed:T,bakeLightmap:F,mapMaterial:(v,L)=>L>=4?_[v]:I[v],builtObjects:[...N.map(v=>v.mesh).filter(v=>v?.isObject3D),Z,...O],materials:[..._,...I],focus(v,L,W){D.value=v?L*.75:0,w.value=.07+W*.058}}}var Wv="R38",Os=document.getElementById("game");Os instanceof HTMLCanvasElement||(Os=document.createElement("canvas"),Os.id="game",Os.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Os));var Ar=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),je;try{je=new uh({canvas:Os,antialias:!Ar,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}je.xr.enabled=!0;je.xr.setReferenceSpaceType("local-floor");je.shadowMap.type=sl;je.shadowMap.autoUpdate=!1;var hv=-1/0;je.toneMapping=Mu;je.toneMappingExposure=1.15;var Et=new nr;Et.fog=new Ia("#a6d4ea",55,135);var xt=new _t,wd=new _t,en=new Jt(70,1,.035,210);xt.add(wd);wd.add(en);Et.add(xt);var wt=uv(Et,je),RE=sv(je),md=iv();Et.add(md);var PE=rv(wt.probe),k=Vy(Ar),IE={...k};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(k.stepVolume=n)}catch{}var Gs=Xy();for(let n of["pointerdown","keydown"])addEventListener(n,Gs.unlock,{passive:!0});var jo=Yy(Et),Ni=qm(),Zp=0,dv=0,fv=0;addEventListener("error",n=>Ni.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Ni.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var br={normal:new M,surface:null},gd=[.18,.17,.105].map(n=>({radius:n,position:new M})),dm=new M(Vo.x,Vo.y,Vo.z);xt.position.copy(dm);var Kt=new M,Yo=new M,Ut=new M,pv=new M,Qn=new M,vn=new M,mv=new M,ea=new M,rs=new M,gv=new M,Bs=new M,xv=new M,Ul=new M,LE=.105,cd=new M,xd=!1,Ii=!1,fm=0,pm=null,Vl=[],mm=100,Qt=new M(0,1,0),hs=new qe,St=0,cs=0,Er=0,ii=0,Tr=NaN,qv={armed:!0},jp=0,Sr=0,Jp=0,ud=0,$o=0,Ko=0,Qo=0,rn=k.quality,kl=72,Pi=0,Zt=!1,Xv="left",ht=new URLSearchParams(location.search).has("room")?5:0,gm=0,xm=0,ym=0,kt=!0,yv=0,DE=[],hd=[],ds=wt.boxes,UE=new Rt(1,0),Yv=1+Math.floor(Math.random()*(dh.length-1)),Zv=fh(Yv),{hand:FE,fur:NE}=Zv;function BE(n,e,t,i,s,r,o,a){let l=new ze(UE,e);return l.position.set(t,i,s),l.scale.set(r,o,a),n.add(l),l.castShadow=!0,l}var Td=Op(localStorage),OE=Td.models.length?"|atelier-"+pr(JSON.stringify(Td)):"",Di=vy(Td)??Zv.createHead();Di.visible=!1;Et.add(Di);var Jo=new M,yd=new qe,vv=new M,zE=new M,_v=new sn(0,0,0,"YXZ"),sm=new M,$p=new M,as=new we,Mv=new qe,Wl=9.81,jv=null,Kp=new qe,bv=[null,null];function Ad(){return .24+k.arms*.036}function VE(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),s=1-Math.exp(-t*22),r=n.pressure;r[0]=Ue.lerp(r[0],e[0]?.value??+!!e[0]?.pressed,s),r[1]=Ue.lerp(r[1],e[1]?.value??+!!e[1]?.pressed,s),r[2]=Ue.lerp(r[2],i,s),n.skin.pose(r,!k.body)}var It=["left","right"].map(n=>{let e=gh(n,FE,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Et.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new M,quaternion:new qe},target:new M,gripPosition:new M,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new M,supportOffset:new M,hasSupport:!1}}),ks=new td(M,It,Yx),Jv=xh(NE,It.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of It){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let s=1;s<i.length-1;s++)t.push(i[0],i[s+1],i[s]);e.setIndex(t),e.computeVertexNormals()}var Ui=Jv.mesh;Et.add(Ui);function kE(n,e){if(k.body){Kp.copy(Ui.quaternion).invert();for(let t=0;t<It.length;t++){let i=It[t];bv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Ui.position).applyQuaternion(Kp),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(Kp))}Jv.pose(bv,Ad(),n,e,k.hands)}}var Tn=Yh(),$v=[0,1,2,3,4,5],Kv=[7,8,9,10,11,12,13,14],$l=15,Sv=Ai(new M(.13,.088,.115)),GE=new Qe(.26,.176,.23),HE=new pt({color:"#536771",roughness:.36,metalness:.28});Tn[$l]={name:"Cam\xE9ra du spectateur",geo:GE,material:HE,shape:Sv,lowShape:Sv,mass:1.2};var{props:WE,animate:qE}=Gy(),XE=yy(Td).slice(0,36),vm=[],ql=[];function Qv(n,e){for(let{collisionGeo:t,sphere:i=0,...s}of n){let r=Ti(t??s.geo,i);e.push(Tn.length),Tn.push({...s,shape:r,lowShape:r})}}Qv(WE,vm);Qv(XE,ql);var e_=[...$v,...Kv,...vm,...ql];Tn[8].properties={supportWhileHeld:!0};Tn[11].properties={supportWhileHeld:!0};function YE(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new M),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new M().setComponent(t,e.getComponent(t)*.49)}for(let n of Tn)n.supportAxis=YE(n);function ZE(n){let e=new ze(new Dt(.058,.074,.1,12).rotateX(Math.PI/2),new pt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new ze(new zt(.048,12),new gt({color:"#7bd7ed",side:At}));t.position.z=-.203,n.add(t);let i=new ze(new Qe(.045,.013,.012),new gt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function t_(n,e=!1){let t=Tn[n];if(!t)return null;let i=new ze(t.geo,e?Rl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===$l&&ZE(i),i}var ot=null,yt=[],wv=[],Fl={model:null,bounds:null,center:new M,size:new M},Ns={position:new M,right:new M,up:new M,normal:new M,scaleX:1,scaleY:1},Nl=new qe,Tv=new M,Av=new sn(0,0,0,"YXZ");function jE(){let n=ot?.getAssetPiece?.("range-target");if(!n)return null;if(Fl.model!==n.model){Fl.model=n.model;let i=zp(n.model);i.getCenter(Fl.center),i.getSize(Fl.size)}let{center:e,size:t}=Fl;return Av.set(Ue.degToRad(n.pitch),Ue.degToRad(n.yaw),Ue.degToRad(n.roll??0),"YXZ"),Nl.setFromEuler(Av),Ns.position.set(n.x,n.y,n.z),Tv.set(-e.x/Math.max(1e-4,t.x)*n.w,-e.y/Math.max(1e-4,t.y)*n.h,-e.z/Math.max(1e-4,t.z)*n.d).applyQuaternion(Nl),Ns.position.add(Tv),Ns.right.set(1,0,0).applyQuaternion(Nl),Ns.up.set(0,1,0).applyQuaternion(Nl),Ns.normal.set(0,0,1).applyQuaternion(Nl),Ns.scaleX=n.w/Math.max(1e-4,t.x),Ns.scaleY=n.h/Math.max(1e-4,t.y),Ns}var Hs={held:null},na=new Map,ls=0,JE=1,Bl=new qe,Xl=new qe,Ol=new M,Ed=new M,zs=new M,rm=new M,om=new M;function $E(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Ed.set(0,0,-1).applyAxisAngle(Qt,e+i);for(let s of[0,.52,1.04]){let r=Math.max(1.48,t+.68)+s;if(Ol.copy(n).addScaledVector(Ed,r),Ol.y+=.15,!Oo(n,Ol,Math.min(.2,t*.5),ds,rm,om)&&!yt.some(o=>o.mesh.position.distanceToSquared(Ol)<(t+o.radius+.07)**2))return Ol}}return null}function Pr(n,e,t,i=!1){let s=Tn[n];if(!s)return null;if(!e&&(t?zs.set(t.x,t.y,t.z):je.xr.isPresenting?zs.copy(Ut):en.getWorldPosition(zs),e=$E(zs,t?.yaw??cs,s.shape.radius),!e))return i||ni("Aucun espace libre pour cet objet."),null;let r=t_(n);r.position.copy(e),Et.add(r);let o=k.preciseHitboxes?s.shape:s.lowShape??s.shape,a={mesh:r,spec:s,netId:JE++,netType:n,beforePhysics:r.position.clone(),blocksPlayer:s.properties?.collidable!==!1,precise:k.preciseHitboxes,type:s.name,shape:o,radius:o.radius,mass:s.mass,start:r.position.clone(),startRotation:r.quaternion.clone(),owner:null,velocity:new M,angular:new M,offset:new M,relativeRotation:new qe,shadow:wt.shadow(s.shape.radius)};return a.frozen=!!s.properties?.frozen,a.collidable=s.properties?.collidable!==!1,a.grabbable=s.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===$l,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),yt.push(a),Tl(a,wt.boxes),Ni.record("object-spawn",{model:s.name,typeId:n,count:yt.length}),a}function n_(){for(let n of It)mi(n,!1);mi(Hs,!1);for(let n of na.values())mi(n,!1)}function Nd(){n_();for(let n of yt)if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();yt.length=0,na.clear()}function i_(){if(ot?.assetLayer)return;let n=new Set(ot?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);cy((e,t)=>{n.has(Up[e])||Pr(e,t)})}i_();function mi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+k.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Kl(){n_();for(let n of yt)ic(n),n.frozen=!!n.spec.properties?.frozen}function fs(){Tr=NaN,ii=0,Bd.reset(),xt.position.copy(dm),St=Ue.degToRad(ot.yaw),Er=0,xt.rotation.y=St,Kt.set(0,0,0),qv.armed=!0,Ii=!1,br.normal.set(0,0,0),br.surface=null,xd=!1,ks.reset(),Gs.reset(),as.set(0,0);for(let n of It)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,mi(n,!1)}Kl();function s_(){return k.auto||Ar&&!je.xr.isPresenting}function Cd(){return s_()?Math.min(k.shadowQuality,rn):k.shadowQuality}function Yl(){return s_()?Math.min(k.lightQuality,rn):k.lightQuality}function Bi(){let n=k.texturePower;wt.visual(rn,k.shadows?Cd():0,Yl(),k.reflections,k.bloom,k.textures,2**(n-1),k.lightmap),ot.refreshMaterials?.(),je.shadowMap.needsUpdate=!0,wt.setTimeOfDay(Ye.remoteLight??k.timeOfDay-1),am=Id.slice(0,Yl()>=8?3:Yl()>=4?2:1),Nm.value=k.shaderMode-1;let e=je.xr.isPresenting&&je.xr.getBaseLayer?.()?.fixedFoveation!=null;wt.focus(k.focus&&!e,k.focusStrength,k.focusSize),je.toneMappingExposure=.58+k.exposure*.114,D_.value=.55+k.contrast*.09,U_.value=k.saturation*.2,F_.value=(k.warmth-5)*.022,je.xr.setFoveation(k.focus?Ue.clamp((k.focusStrength+1)*.105+(5-k.focusSize)*.028+(k.auto?(7-rn)*.045:0),0,1):0),je.xr.isPresenting||Ql(),kt=!0,Mn.redraw()}var Ev=0,Cv=0,Rv=0;function Ql(){if(je.xr.isPresenting)return;let n=Math.max(1,Os.clientWidth||innerWidth),e=Math.max(1,Os.clientHeight||innerHeight),t=Fy(rn,devicePixelRatio,Ar);t!==Rv&&(je.setPixelRatio(t),Rv=t),(n!==Ev||e!==Cv)&&(je.setSize(n,e,!1),Ev=n,Cv=e),en.aspect=n/e,en.fov=k.viewFov,en.updateProjectionMatrix()}addEventListener("resize",Ql);globalThis.visualViewport?.addEventListener("resize",Ql);function KE(n){Object.assign(k,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},id[n]),rn=k.quality,Ko=Qo=$o=0,Bi()}var Cr=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",fs]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Lm]]],["Rendu",[]]],_m=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Mm(){return ht===2?_m[gm][1]:ht===3?c_[xm][1]:ht===4?wm[ym][1]:Cr[ht][1]}function r_(n){ht=n,Pi=0,kt=!0}var Rd=null,o_=[],vd=0,Gl=0,Pd=null,a_=!1,bm=0,Sm=0,l_={},Id=Array.from({length:3},()=>{let n=new el("#ffffff",0,22,1.6);return n.visible=!1,Et.add(n),{light:n,mesh:null,distance:1/0}}),am=Id,Ld=new M;function Pv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Ld);if(t>34**2)return;let i=am[0];for(let s of am)s.distance>i.distance&&(i=s);t<i.distance&&(i.mesh=n,i.distance=t)}function QE(n){n?en.getWorldPosition(Ld):Ld.copy(Ut);for(let t of Id)t.mesh=null,t.distance=1/0;if(n)Ye.forEachReplica(Pv);else if(k.objects)for(let t of yt)t.materialStyle===3&&Pv(t.mesh);let e=20+Yl()*.75;for(let{light:t,mesh:i}of Id)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function ec(){Ni.record("capture",{mode:je.xr.isPresenting?"VR":"PC"});let n=Ni.snapshot(je.xr.isPresenting?"VR":"PC");Rd={game:"Gorilla Lab",version:Wv.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:je.xr.isPresenting?"VR":"PC",sessionHadVR:a_,settings:{...k},qualityActive:rn,diagnostics:n,debugGeometry:{...jo.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:je.getPixelRatio()},haptics:It.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:jv,audio:{volume:k.stepVolume,enabled:k.stepAudio,clipsPlayed:Gs.count,state:Gs.state},performance:{fps:Sr,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:je.xr.isPresenting?Pd:null,previousVR:Pd,renderer:l_,terrainSeed:wt.hillSeed,map:ot.active?{name:ot.name,pieces:ot.nodes}:null,objects:{physics:{...Sl},total:yt.length,held:yt.filter(e=>e.owner).length,frozen:yt.filter(e=>e.frozen).length},cloud:{role:Ye.role,connected:Ye.connected,replicas:Ye.replicaCount,...Ye.stats},targetScore:Mn.score(),locomotion:{trackedFrames:Sm,contactFrames:bm,launchCount:fm,lastLaunch:pm,standingHeight:Number.isFinite(Tr)?Tr:null,viewOffset:ii}},document.querySelector("#download-report").disabled=!1,kt=!0}function e2(){Rd||ec();let n=URL.createObjectURL(new Blob([JSON.stringify(Rd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=e2;document.querySelector("#capture-report").onclick=ec;var sa=document.createElement("input");sa.id="report-note";sa.maxLength=500;sa.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";sa.setAttribute("aria-label","Sc\xE9nario du rapport");sa.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(sa);var Zl=document.createElement("p");Zl.setAttribute("aria-live","off");document.querySelector("#settings").after(Zl);Cr[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",ec]);var t2=Array.from({length:Math.ceil(ql.length/8)},(n,e)=>["Atelier"+(ql.length>8?" "+(e+1):""),ql.slice(e*8,e*8+8)]),c_=[["Basiques",$v],["D\xE9taill\xE9s",Kv],["Anim\xE9s",vm],...t2].map(([n,e])=>[n,[...e.map(t=>[Tn[t].name,()=>Dm(t)]),["Tout retirer",Od]]]);Cr.push(["Spawn",[]]);var wm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ot.blank(),k.mapEdit=!0}],["Annuler placement",()=>ot.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ot.recenter(Ut.x,xt.position.y,Ut.z,cs)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ot.reset(),k.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Uv(!1)],["Utiliser comme t\xEAte",()=>Uv(!0)]]]];Cr.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",h_],["Tester vibration droite",d_],["\xC9couter un pas",f_],["Capturer un rapport",ec]]]);function u_(n){let e=It.find(i=>i.side===n),t=e?.valid&&Hp(e,.45,65);Ni.record("haptic-test",{side:n,supported:!!t}),ni(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function h_(){u_("left")}function d_(){u_("right")}function f_(){Gs.unlock().then(()=>Gs.play(k.stepVolume))}function p_(){try{localStorage.setItem("gorilla-lab-step-volume",String(k.stepVolume))}catch{}}var n2=document.querySelector("#section"),dd=document.querySelector("#settings"),i2=document.querySelector("#readings"),Tm=[1,.75,.5,.25];function _n(n,e){if(Ni.record("setting",{key:n,step:e,previous:k[n]}),n==="debugSpeed"){k.debugSpeed=Ue.clamp(k.debugSpeed+e,1,Tm.length),ks.reset(),kt=!0;return}if(n==="stepVolume"){k.stepVolume=Ue.clamp(k.stepVolume+e,1,10),p_(),kt=!0;return}if(n==="viewFov"){k.viewFov=Ue.clamp(k.viewFov+5*e,50,105),Ql(),kt=!0;return}if(n==="vrFov"){k.vrFov=Ue.clamp(k.vrFov+5*e,55,100),kt=!0;return}if(n==="shaderMode"){k.shaderMode=(k.shaderMode-1+e+nd.length)%nd.length+1,Nm.value=k.shaderMode-1,kt=!0;return}if(n==="timeOfDay"){if(Ye.role==="player"){let i=((Ye.remoteLight??k.timeOfDay-1)+e+3)%3;Ye.sendAction({type:"world",mode:1,typeId:i})}else k.timeOfDay=(k.timeOfDay-1+e+3)%3+1;Bi();return}let t={mapMode:9,mapShape:5,mapMaterial:qp.length,mapSurface:4,mapTurn:8,mapTexture:Qh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];k[n]=(k[n]-1+e+i)%i+1,kt=!0;return}if(n==="mapEdit"&&!k.mapEdit&&!ot.active&&ot.load(Qy(wt.boxes)),n==="toolMode"){k.toolMode=(k.toolMode-1+e+Mr.length)%Mr.length+1,je.xr.isPresenting||ni("Outil \xB7 "+Mr[k.toolMode-1]),kt=!0;return}if(n==="preset"){let i=Object.keys(id);k.preset=(k.preset-1+e+i.length)%i.length+1,KE(i[k.preset-1]);return}if(typeof k[n]=="boolean"?k[n]=!k[n]:k[n]=Ue.clamp(k[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of It)i.valid=!1,i.surface=null;if(n==="quality"&&(k.auto=!1,rn=k.quality),n==="auto"&&!k.auto&&(rn=k.quality),n==="movement"||n==="collisions")for(let i of It)i.surface=null;if(n==="objects"&&!k.objects&&Kl(),n==="blasterActive"&&k.blasterActive&&(k.toolActive=!1),n==="toolActive"&&k.toolActive&&(k.blasterActive=!1),!k.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of It)i.held?.toolHold&&mi(i,!1);Pm(!1)}n==="preciseHitboxes"&&m_(),Bi()}function m_(){for(let n of yt)n.precise=k.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||Tl(n,wt.boxes)}function g_(){let n=(ht===2?_m:ht===4?wm:null)?.flatMap(e=>e[1])??Mm();for(let[,e]of n)typeof e=="string"&&(k[e]=IE[e]);ht===6&&(p_(),ks.reset()),ht===0&&fs(),ht===1&&(m_(),Kl()),ht===3&&Od(),ht===2&&(rn=k.quality),Bi()}function zl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),ra(),kt=!0},t}function x_(n){return n==="preciseHitboxes"?k[n]?"High":"Low":k[n]?"Actif":"Coup\xE9"}function Am(n){if(n==="debugRange")return k[n]*5+" m";if(n==="debugBudget")return k[n]*1e3+" segments";if(n==="debugSpeed")return Ye.role?"\xD71 en ligne":"\xD7"+Tm[k.debugSpeed-1];if(n==="stepVolume")return k.stepVolume+"/10";if(n==="viewFov")return k.viewFov+"\xB0";if(n==="vrFov")return k.vrFov===100?"Natif":k.vrFov+" %";if(n==="mapTexture")return k[n]===1?"Aucune":Qh[k[n]-2];if(n==="terrainResolution")return[8,16,32,48][k[n]-1]+"\xB2";if(n==="shaderMode")return nd[k.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=k[n],t=n==="shadowQuality"?Cd():Yl();return t===e?e+"/10":e+"/10 \xB7 "+t+(k.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Ye.remoteLight??k.timeOfDay-1]:n==="mapMode"?S_[k.mapMode-1]:n==="mapShape"?c2[k.mapShape-1]:n==="mapSurface"?u2[k.mapSurface-1]:n==="mapMaterial"?qp[k.mapMaterial-1]:n==="mapTurn"?(k.mapTurn-1)*45+"\xB0":n==="toolMode"?Mr[k.toolMode-1]:n==="preset"?Object.keys(id)[k.preset-1]:n==="texturePower"?[2**(k[n]-1),2**(k[n]-1)].join("\xD7"):k[n]}function lm(){return ht===2?_m:ht===3?c_:wm}function y_(){return ht===2?gm:ht===3?xm:ym}function v_(n){ht===2?gm=n:ht===3?xm=n:ym=n}function __(n){return n===h_||n===d_?"Tester":n===ec?"Capturer":n===f_?"\xC9couter":n===Nd||n===Od?"Vider":n===fs||n===Lm?"R\xE9initialiser":ht===3?"Cr\xE9er":"Appliquer"}function ra(){if(n2.textContent=Cr[ht][0],M_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ht))),dd.replaceChildren(),s2.hidden=ht!==5,document.querySelector("#restore").hidden=ht===5,ht!==5){if(ht>=2&&ht<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),lm().forEach(([e],t)=>{let i=zl(e,()=>v_(t));i.setAttribute("aria-pressed",String(y_()===t)),n.append(i)}),dd.append(n)}if(ht===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",dd.append(n)}for(let[n,e]of Mm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(zl(__(e),e)):typeof k[e]=="boolean"?i.append(zl(x_(e),()=>_n(e,1))):i.append(zl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+Am(e)+" "),zl("+",()=>_n(e,1))),t.append(i),dd.append(t)}}}var M_=document.querySelectorAll("[data-page]"),s2=document.querySelector("#cloud-access");M_.forEach((n,e)=>n.onclick=()=>{r_(e),ra()});document.querySelector("#restore").onclick=()=>{g_(),ra()};ra();function b_(n,e,t,i,s){let r=document.createElement("canvas");r.width=n,r.height=e;let o=r.getContext("2d"),a=new Pn(r);a.colorSpace=lt;let l=new ze(new qt(t,i),new gt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return s.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=b_(640,652,.84,.86,Et);fn.mesh.visible=!1;var ei=b_(416,84,.32,.065,Et);ei.mesh.visible=!1;var Zo=new Jt(75,1,.07,140),ti=new dl(new qt(1.7,1.95),{color:16054015,textureWidth:Ar?128:256,textureHeight:Ar?128:256,clipBias:.004,multisample:0}),r2=new M(0,0,-1),fd=new M,Iv=new M;ti.position.set(Wh.x,Wh.y,Wh.z);ti.rotation.y=Math.PI;Et.add(ti);var Em=new ze(new Qe(1.8,2.03,.1),new Pt({color:"#344650"}));Em.position.copy(ti.position).z+=.064;Et.add(Em);var o2=ti.onBeforeRender.bind(ti);ti.onBeforeRender=()=>{};ti.visible=!1;var Qp=-1/0;function a2(n,e){if(Zo.position.copy(Ut),e){let i=e.transform.orientation;Zo.quaternion.set(i.x,i.y,i.z,i.w).premultiply(yd.setFromAxisAngle(Qt,St))}else en.getWorldQuaternion(Zo.quaternion);Iv.set(0,0,-1).applyQuaternion(Zo.quaternion),fd.subVectors(ti.position,Ut);let t=fd.length();if(ti.visible=ot.builtIn&&k.reflections&&t<4&&fd.dot(r2)<-.15&&fd.multiplyScalar(1/Math.max(.001,t)).dot(Iv)>.66,!ti.visible){Qp=-1/0;return}if(!(n-Qp<(Ar&&!je.xr.isPresenting?110:45))){Qp=n,Zo.updateMatrixWorld(!0),ti.updateMatrixWorld(!0),Di.visible=k.body;try{o2(je,Et,Zo)}finally{Di.visible=!1}}}var Fi=new ji,qn=new M,Nn=new M,ia=new M,pd=new M,Lv=new M,Hl=null,_d=null,Md=null,l2=new Set(Et.children),Mn=ov(Et,wt.boxes,{spawn:Dm,clear:Od,resetPlayer:fs,resetObjects:Lm,resetTree:()=>Im(2,T_),quality:()=>rn+"/10",resolution:()=>k.resolution+"/10 \xB7 relancer VR",textureSize:()=>Am("texturePower"),qualityNext:()=>{k.quality>=10&&(k.quality=0),_n("quality",1)},resolutionNext:()=>{k.resolution>=10&&(k.resolution=0),_n("resolution",1)},textureNext:()=>{k.texturePower>=12&&(k.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),S_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],c2=["Bloc","Rampe","Mur","Dalle","Terrain"],u2=["Normale","Glace","Caoutchouc","Lune"],Dv=new Map;function h2(){for(let n of ot.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=Dv.get(e);if(t===void 0){let s=Wo(n.model);s.scale(n.w,n.h,n.d);let r=El(n.model,new M(n.w,n.h,n.d)),o=Ti(r);r.dispose(),t=Tn.length,Tn.push({id:n.model.id,name:n.model.name,geo:s,material:Us(n.model),shape:o,lowShape:o,assetId:n.model.assetId??null,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Ue.clamp(n.w*n.h*n.d*9,.18,12)}),Dv.set(e,t)}let i=Pr(t,new M(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Ue.degToRad(n.pitch),Ue.degToRad(n.yaw),Ue.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}ot=nv({scene:Et,arena:wt,boot:dm,onReset:n=>{Nd(),fs(),St=Ue.degToRad(n),Mn.coconuts.forEach(e=>{e.visible=!ot.assetLayer}),ot.builtIn&&i_(),h2()},onVisual:Bi,getLevel:()=>rn,defaultObjects:[...wt.builtObjects,...Et.children.filter(n=>!l2.has(n)),Em]});var Ye=Ax({scene:Et,currentMap:()=>(ot.signature||"arena-r25-"+wt.hillSeed)+OE,seedArena:n=>wt.setHillSeed(n),makeReplica:n=>{let e=t_(n,!0);return e&&oa(e.material),e},onAction:x2,onStatus:()=>{ht===5&&(kt=!0)},onShot:n=>Bd.receiveShot(n,Ye.role==="vr"),applyLight:n=>{wt.setTimeOfDay(n??k.timeOfDay-1),kt=!0,je.xr.isPresenting||ra()},applyScore:n=>Mn.setScore(n),applyCoconuts:n=>Mn.coconuts.forEach((e,t)=>{e.visible=!!((n??31)&1<<t)})});function Uv(n){let e=ot.modelPieces();if(!e.length||e.length>is.parts){ni("Compose un mod\xE8le de 1 \xE0 "+is.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Op(localStorage);if(t.models.length>=is.models){ni("La collection de mod\xE8les est pleine.");return}let i=new M(1/0,1/0,1/0),s=new M(-1/0,-1/0,-1/0);for(let c of e)i.min(new M(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),s.max(new M(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let r=i.clone().lerp(s,.5),o=Math.min(1,3/Math.max(s.x-i.x,s.y-i.y,s.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:k.modelGrab,frozen:k.modelFrozen,collidable:k.modelCollidable,supportWhileHeld:k.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-r.x)*o,(c.y-r.y)*o,(c.z-r.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Ky[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Bp,JSON.stringify(vr(t))),ni("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ni("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var em=new Map;function d2(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][k.mapShape-1],e=qo({detail:[8,16,32,48][k.terrainResolution-1],amplitude:(k.terrainAmplitude-1)*.34,frequency:.05+k.terrainFrequency*.025,seed:k.terrainSeed,grass:(k.terrainGrass-1)/9,shrub:(k.terrainShrub-1)/9}),t=k.mapTexture-2;return t>=0&&!em.has(t)&&em.set(t,Ly(t).toDataURL("image/webp",.83)),od({...n,material:k.mapMaterial-1,yaw:k.mapShape===5?0:(k.mapTurn-1)*45,...Xp[Object.keys(Xp)[k.mapSurface-1]],texture:em.get(t)??null,terrain:k.mapShape===5||k.mapMode===9?e:null,brushRadius:.5+k.brushRadius*.5,brushStrength:k.brushStrength*.15})}function f2(n,e,{source:t,click:i}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;qn.set(r.x,r.y-ii,r.z).applyAxisAngle(Qt,St).add(xt.position),hs.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(hs).applyAxisAngle(Qt,St),ot.edit(qn,Nn,i,{mode:k.mapMode,piece:d2(),head:Ut,feet:xt.position.y}),i&&(kt=!0)}function p2(n){if(!ot.builtIn||!n.valid||n.held||n.remoteHeld||Zt)return;let e=null;for(let t of Mn.targets)if(t.getWorldPosition(Lv),!(n.mesh.position.distanceToSquared(Lv)>.11**2)&&(t.worldToLocal(pd.copy(n.mesh.position)),Math.abs(pd.x)<t.userData.touchWidth*.5+.025&&Math.abs(pd.y)<.095&&Math.abs(pd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Cm(n,e=null){n.getWorldPosition(ia),n.visible=!1,k.objects||(k.objects=!0);let t=Pr(6,ia);return e&&(t.velocity.copy(e).multiplyScalar(3.5).y+=.66),t}function cm(n,e,t){if(!ot.builtIn)return;Fi.set(n,e),Fi.far=5.5;let i=Fi.intersectObjects([...Mn.targets,...Mn.coconuts.filter(r=>r.visible)],!1);Fi.far=1/0;let s=i[0];s&&(Rr.visible=!0,Rr.position.copy(s.point).addScaledVector(e,-.012),t&&(s.object.userData.action?s.object.userData.action(s.uv):Ye.role==="player"?Ye.sendAction({type:"world",mode:2,typeId:Mn.coconuts.indexOf(s.object)}):Cm(s.object,e),ra()))}var Fv=new M,w_=new qe,Rm=yh(Et),Bd=Oy({scene:Et,rig:xt,camera:en,arena:wt,objects:yt,spectator:Ye}),TI=Rm.mesh,bd=new M,us=new qe,Dd=new M,ta={mode:0,position:Dd,quaternion:us,end:bd},Nv=new M,m2=new M,Bv=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Ud=new M,g2={position:Dd,quaternion:us,pressure:[.1,.66,.08]},tm=new M,Fd=new qe;function Pm(n){Hs.held&&mi(Hs,n)}function Im(n,e){if(Ye.role==="pc"){ni("Rejoins le salon en joueur pour modifier les objets.");return}if(Ye.role!=="player"){e();return}Ye.sendAction({type:"world",mode:3,typeId:n})||ni("Attends la connexion \xE0 l\u2019h\xF4te.")}function Od(){Im(0,Nd)}function Lm(){Im(1,Kl)}function T_(){if(ot?.assetLayer){for(let n of yt)n.spec.assetId==="spawn-coconut"&&(n.owner&&(n.owner.held=null,n.owner=null),n.toolHold=!1,ic(n),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.frozen=!0);return}for(let n of Mn.coconuts)n.visible=!0}function Dm(n,e=null){if(k.objects=!0,Ye.role==="pc"){ni("Commence par rejoindre le salon en joueur.");return}Ye.role==="player"?Ye.sendAction({type:"spawn",typeId:n})||ni("Attends la connexion \xE0 l\u2019h\xF4te."):Pr(n,e)}function x2(n,e){if(!e)return;if(n.type==="world"){if(n.mode===1)k.timeOfDay=n.typeId+1,Bi();else if(n.mode===3)[Nd,Kl,T_][n.typeId]();else if(ot.builtIn){let u=Mn.coconuts[n.typeId];u?.visible&&u.getWorldPosition(ia).distanceToSquared(e)<=5.8**2&&!Oo(zs.copy(e),ia,.01,ds,rm,om)&&Cm(u)}return}if(n.type==="spawn"){e_.includes(n.typeId)&&(k.objects=!0,Pr(n.typeId,null,e));return}let t=yt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,s=e.id*3+i,r=n.type==="hold"?1:n.mode,o=na.get(s);if(!o&&r===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},na.set(s,o)),n.type==="release"){if(o?.held===t){let u=i?Ye.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),mi(o,!0)}return}if(!k.objects||r===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=zs.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Gh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Oo(l,t.mesh.position,.01,ds,rm,om))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Um(t,r,o,Ue.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Xl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Xl))}}function y2(n){if(je.xr.isPresenting)for(let t of It)t.valid&&t.held&&nm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of na){let s=Ye.getPeer(i.peerId),r=i.hand?s?.avatar?.hands[i.hand-1]:null;if(!s||i.hand&&!r){mi(i,!1),na.delete(t);continue}let o=i.held;if(!o)continue;let a=r?.quaternion??s.avatar?.tool?.quaternion??s.avatar?.head;a&&i.controllerRotation.copy(a),zs.copy(r?.position??s.avatar?.tool?.position??s),Ed.set(0,0,-1).applyQuaternion(i.controllerRotation),nm(o,zs,Ed,i.controllerRotation,n)}let e=Hs.held;e&&(en.getWorldPosition(Ud),en.getWorldDirection(Fv),en.getWorldQuaternion(us),nm(e,Ud,Fv,us,n))}function nm(n,e,t,i,s){n.toolHold?tm.copy(e).addScaledVector(t,n.toolDistance):tm.copy(n.offset).applyQuaternion(i).add(e),Fd.multiplyQuaternions(i,n.relativeRotation),Zx(n,tm,Fd,ds,s)}function A_(n){return n.customMaterial||(n.mesh.material=Rl(n.mesh.material),n.customMaterial=!0,oa(n.mesh.material)),n.mesh.material}function v2(n){let e=A_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function E_(n,e,t){Fi.set(n,e),Fi.far=9;let i=Fi.intersectObjects(t,!1)[0];return Fi.far=1/0,bd.copy(n).addScaledVector(e,i?.distance??9),Oo(n,bd,.006,ds,Nv,m2)?(bd.copy(Nv),null):i}function Um(n,e,t,i){if(e===1){if(t?.held){t===Hs?Pm(!0):mi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let s=t.controllerRotation??us;n.relativeRotation.multiplyQuaternions(w_.copy(s).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Et.remove(n.mesh,n.shadow),n.customMaterial)for(let s of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])s.dispose();yt.splice(yt.indexOf(n),1)}else if(e===4&&!n.protected){Ud.copy(n.mesh.position).addScaledVector(Qt,n.radius*2+.08);let s=Pr(n.netType,Ud);s&&(s.mesh.quaternion.copy(n.mesh.quaternion),s.startRotation.copy(n.mesh.quaternion),s.paint=n.paint,s.materialStyle=n.materialStyle,n.customMaterial&&(s.mesh.material=Rl(n.mesh.material),s.customMaterial=!0,oa(s.mesh.material)),Tl(s,wt.boxes))}else if(e===5){let s=A_(n),r=Bv[n.paint++%Bv.length];for(let o of Array.isArray(s)?s:[s])o.color.set(r),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,v2(n));kt=!0}}var Vs=[];function C_(n,e,t,i){if(!k.objects)return;let s=Ye.role==="player";if(Vs.length=0,s)Ye.forEachReplica(a=>Vs.push(a));else for(let a of yt)!a.owner&&a.mesh.visible&&Vs.push(a.mesh);let r=E_(n,e,Vs);if(ta.mode=k.toolMode,i?(Dd.copy(i.mesh.position),us.copy(i.controllerRotation)):(en.getWorldQuaternion(us),Dd.set(.16,-.17,-.43).applyQuaternion(us).add(n)),Rm.update(ta),!t)return;if(s){if(k.toolMode===1&&ls)Ye.sendAction({type:"release",objectId:ls}),ls=0;else if(r){let a=r.object.userData.netId;Ye.sendAction({type:"tool",mode:k.toolMode,objectId:a})&&k.toolMode===1&&(ls=a)}return}let o=r&&yt.find(a=>a.mesh===r.object);Um(o,k.toolMode,i??Hs,r?Ue.clamp(r.distance+(o?.radius??0)*.35,1.1,5):1.1)}function _2(n,e,{source:t,hand:i,click:s}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let o=r.transform.position,a=r.transform.orientation;qn.set(o.x,o.y-ii,o.z).applyAxisAngle(Qt,St).add(xt.position),hs.set(a.x,a.y,a.z,a.w),Nn.set(0,0,-1).applyQuaternion(hs).applyAxisAngle(Qt,St),C_(qn,Nn,s,i)}function M2(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;qn.set(r.x,r.y-ii,r.z).applyAxisAngle(Qt,St).add(xt.position),hs.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(hs).applyAxisAngle(Qt,St),cm(qn,Nn,i)}var Rr=BE(Et,new gt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Rr.visible=!1;var um=[],wr=null;function Ov(){let n=fn.ctx;um=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+Wv,25,42),n.font="20px system-ui",n.fillText(Sr+" FPS   \xB7   Q "+rn+"/10   \xB7   "+(k.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",um.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/Cr.length);if(Cr.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>r_(l),ht===l?"#586d53":"#334b58")),ht===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Ye.caption,25,145,587),n.fillText("Salons publics",25,190),pl.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>Ye.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>Ye.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Ye.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Ye.leave()),e(325,579,287,44,"Fermer",()=>Zt=!1),fn.texture.needsUpdate=!0;return}let i=ht>=2&&ht<=4;i&&lm().forEach(([a],l)=>{let c=y_()===l,u=Math.min(144,Math.floor(586/lm().length)-4);e(25+l*(u+4),114,u,38,a,()=>v_(l),c?"#546947":"#263d49")});let s=Mm(),r=i?9:10,o=Math.max(1,Math.ceil(s.length/r));Pi=Math.max(0,Math.min(Pi,o-1)),s.slice(Pi*r,(Pi+1)*r).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,__(l),l):typeof k[l]=="boolean"?e(406,u,206,36,x_(l),()=>_n(l,1),k[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>_n(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Am(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>_n(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Pi=(Pi+o-1)%o,kt=!0}),e(432,533,180,35,"Suivant",()=>{Pi=(Pi+1)%o,kt=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Pi+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",g_),e(325,579,287,44,"Fermer",()=>Zt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Fm||(ht===6?"v "+Kt.length().toFixed(2)+" m/s | g "+Wl.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ht===4&&ot.status?ot.status.slice(0,64):Rd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),fn.texture.needsUpdate=!0}function b2(n){Zt=!Zt,Zt&&(Xv=n,vv.set(0,0,-1).applyAxisAngle(Qt,cs),fn.mesh.position.copy(Ut).addScaledVector(vv,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(Ut),fn.mesh.updateMatrixWorld(!0)),kt=!0}function S2(n,e,t,i){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let r=s.transform.position,o=s.transform.orientation;qn.set(r.x,r.y-ii,r.z).applyAxisAngle(Qt,St).add(xt.position),hs.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(hs).applyAxisAngle(Qt,St),Fi.set(qn,Nn);let a=Fi.intersectObject(fn.mesh)[0];if(a&&(Rr.visible=!0,Rr.position.copy(a.point).addScaledVector(Nn,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;um.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),kt=!0}}var zd=Uy(),{held:Li,pressed:os}=zd,R_=zy(je.domElement,document.querySelector("#touch-fire")),zv=document.querySelector("#game-settings"),P_=document.querySelector("#open-settings"),hm=document.querySelector("#game-hint"),Sd=0;function ni(n){hm.textContent=n,hm.hidden=!1,Sd=performance.now()+2400,Fm=n,kt=!0}var Fm="";function Vd(n){let e=n??!zv.hidden;zv.hidden=e,P_.hidden=!e,e&&je.domElement.focus()}P_.onclick=()=>Vd(!1);document.querySelector("#close-settings").onclick=()=>Vd(!0);var jl=Dy({canvas:je.domElement,enabled:()=>!je.xr.isPresenting,onLook:(n,e,t)=>{St-=n*t,Er=Ue.clamp(Er-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&os.add(e)},onMenu:()=>Vd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!je.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Vd();return}n.code==="Space"&&n.preventDefault(),zd.down(n.code,n.repeat),n.code==="KeyR"&&fs()}});addEventListener("keyup",n=>zd.up(n.code));addEventListener("blur",()=>{zd.clear(),jl.clear(),R_.clear()});function w2(n,e){if(!k.objects)return!1;let t=Ye.role==="player";if(t&&ls)return Ye.sendAction({type:"release",objectId:ls}),ls=0,!0;if(Hs.held)return Pm(!0),!0;if(Vs.length=0,t)Ye.forEachReplica(s=>Vs.push(s));else for(let s of yt)!s.owner&&s.mesh.visible&&Vs.push(s.mesh);let i=E_(n,e,Vs);if(!i||i.distance>2.8)return!1;if(t){let s=i.object.userData.netId;Ye.sendAction({type:"hold",objectId:s})&&(ls=s)}else en.getWorldQuaternion(us),Um(yt.find(s=>s.mesh===i.object),1,Hs,Math.max(.75,i.distance));return!0}var im=[];function I_(){return im.length=0,Ye.forEachReplica(n=>{let e=n.userData.netType;if(!Tn[e]||Tn[e].properties?.collidable===!1||n.userData.held)return;let t=Tn[e],i=k.preciseHitboxes?t.shape:t.lowShape??t.shape,s=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};s.shape=i,s.radius=i.radius,s.precise=k.preciseHitboxes,s.handCollider??={objectBody:s,friction:.96,gravity:1},im.push(s)}),im}function T2(){Ye.role!=="vr"||!Ye.remoteSpectator||yt.some(n=>n.netType===$l)||Pr($l,null,null,!0)}var Jl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Jl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Jl.onclick=async()=>{let n;Gs.unlock();try{Jl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),je.xr.setFramebufferScaleFactor(.45+k.resolution*.055),await je.xr.setSession(n),Bi(),kl=n.frameRate||72,Vl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Vl.includes(120)?120:Vl.find(t=>t>=100)??Vl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}kl=n.frameRate||kl,mm=Math.min(100,kl),k.auto&&(rn=Math.min(rn,4),$o=Ko=Qo=0),o_=[],Ni.reset(),vd=0,Gl=0,bm=Sm=fm=0,pm=null,a_=!0,Pd=null,Tr=NaN,ii=0,fs(),Bi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Jl.disabled=!1,document.querySelector("#status").textContent=e.message}};je.xr.addEventListener("sessionend",()=>{Jl.disabled=!1,Zt=!1,fn.mesh.visible=!1,ei.mesh.visible=!1,document.body.classList.remove("immersive"),fs(),Ql()});function L_(n){if(!ot.active){for(let e of wt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ot.active){let e=-1/0,t;for(let i of wt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let r=i.height(n.x,n.z);r>=e&&r<=n.y+.5&&(e=r,t=i);continue}let s=i.position.y+i.half.y;s<e||s>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=s,t=i)}return t}}function Vv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Ye.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Zt||!e||n.grip||!k.objects)return;let i=null,s=.15;if(Ye.forEachReplica(r=>{if(r.userData.held)return;let o=Tn[r.userData.netType];if(!o||o.properties?.grabbable===!1||r.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Gh(n.target,{mesh:r,shape:o.shape,radius:o.shape.radius});a<s&&(i=r,s=a)}),i){let r=i.userData.netId;Ye.sendAction({type:"hold",objectId:r,hand:t})&&(n.remoteHeld=r)}else if(ot.builtIn){let r=Mn.coconuts.findIndex(o=>o.visible&&o.getWorldPosition(ia).distanceToSquared(n.target)<.06760000000000001);r>=0&&Ye.sendAction({type:"world",mode:2,typeId:r})}}function A2(n,e,t){let i=[...n.session.inputSources];for(let s of It){let r=i.find(h=>h.handedness===s.side&&h.gripSpace),o=r&&n.getPose(r.gripSpace,e);if(s.gamepad=o?r.gamepad:null,s.mesh.visible=!!o&&k.hands&&!k.body,!o){Ye.role==="player"&&Vv(s,!1),s.valid=!1,s.surface=null,mi(s,!1);continue}qy(s,o.transform,ii,St,xt.position),s.valid=!0;let a=!!r.gamepad?.buttons[1]?.pressed;if(Bl.copy(s.controllerRotation),VE(s,r.gamepad?.buttons??[],t),Ye.role==="player")Vv(s,a);else if(!Zt&&a&&!s.grip&&k.objects&&!s.held){let h=null,p=.15,x=Mn.coconuts.find(g=>g.visible&&g.getWorldPosition(ia).distanceToSquared(s.target)<.26**2);x&&(h=Cm(x));for(let g of yt){if(g.owner||!g.grabbable||g.mesh.position.distanceToSquared(s.target)>(g.radius+.18)**2)continue;let m=Gh(s.target,g);!x&&m<p&&(p=m,h=g)}h&&!s.held&&(s.held=h,h.owner=s,h.frozen=!1,Xl.copy(Bl).invert(),h.offset.copy(h.mesh.position).sub(s.target).applyQuaternion(Xl),h.relativeRotation.multiplyQuaternions(Xl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&s.grip&&!s.held?.toolHold&&mi(s,!Zt),s.grip=a,s.hasSupport=!1;let l=s.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Fd.multiplyQuaternions(Bl,l.relativeRotation),s.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Fd),ea.copy(l.offset).applyQuaternion(Bl);let h=s.supportOffset.dot(ea);(Math.abs(h)>.008?h<0:s.supportOffset.y>0)&&s.supportOffset.negate(),s.supportOffset.add(ea),s.hasSupport=!0}if(s.held?.toolHold){let p=n.getPose(r.targetRaySpace,e)?.transform.orientation;p?s.aimDirection.set(0,0,-1).applyQuaternion(w_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Qt,St):s.aimDirection.set(0,0,-1).applyQuaternion(Bl)}let c=!!(r.gamepad?.buttons[5]?.pressed||r.gamepad?.buttons[3]?.pressed&&s.side==="left");c&&!s.menu&&b2(s.side),s.menu=c;let u=!!r.gamepad?.buttons[4]?.pressed;s.side==="right"&&u&&!s.toolButton&&!Zt&&_n("toolActive",1),s.toolButton=u;let d=!!r.gamepad?.buttons[3]?.pressed;s.side==="right"&&d&&!s.toolCycle&&k.toolActive&&!Zt&&_n("toolMode",1),s.toolCycle=d;let f=!!r.gamepad?.buttons[0]?.pressed;if(Zt){let h=f&&!s.trigger;(h||!wr||!wr.click&&s.side!==Xv)&&(wr={source:r,click:h})}else!Zt&&s.side==="right"&&k.mapEdit?Md={source:r,click:f&&!s.trigger}:!Zt&&s.side==="right"&&k.toolActive?_d={source:r,hand:s,click:f&&!s.trigger}:!Zt&&!k.blasterActive&&(s.side==="right"||f&&!s.trigger)&&(Hl={source:r,click:f&&!s.trigger});s.trigger=f}}function kv(n,e){let t=n?-Jo.y:Math.max(0,-Math.sin(Er)),i=0,s=0,r=0;if(n){Mv.setFromAxisAngle(Qt,-cs);for(let u of It)u.valid&&($p.copy(u.gripPosition).sub(Ut).applyQuaternion(Mv),i+=$p.x-(u.side==="left"?-.2:.2),s+=$p.z+.24,r++)}let o=r?Ue.clamp(-s/r,-.35,.45):0,a=r?Ue.clamp(i/r,-.35,.35):0,l=1-Math.exp(-e*13),c=n?Zm(t,o):-.31*Ue.smoothstep(t,.2,.92);as.x=Ue.lerp(as.x,c,l),as.y=Ue.lerp(as.y,-a*.62,l),_v.set(as.x,cs,as.y,"YXZ"),Ui.quaternion.setFromEuler(_v)}function E2(n,e,t,i,s=i){let r=!!t,o=.43+k.size*.088;if(r){let f=t.transform.position;Tr=Ym(Tr,f.y),ii=Ue.clamp(Tr-o,-.65,1.7),wd.position.y=-ii,Qn.set(f.x,f.y-ii,f.z);let h=[...n.session.inputSources].find(g=>g.handedness==="right"),p=Hm(h?.gamepad),x=Wm(qv,p,{menu:Zt,allowMenu:k.snapWithMenu});x&&(Ni.record("snap-turn",{direction:x,menu:Zt}),vn.copy(Qn).applyAxisAngle(Qt,St),St-=x*Math.PI/4,pv.copy(Qn).applyAxisAngle(Qt,St),xt.position.add(vn.sub(pv)),ks.reset(),xd=!1)}else wd.position.y=0,Qn.set(0,o,0),en.position.copy(Qn),en.rotation.set(Er,0,0,"YXZ");if(Ut.copy(Qn).applyAxisAngle(Qt,St).add(xt.position),r){let f=t.transform.orientation;yd.set(f.x,f.y,f.z,f.w),Jo.set(0,0,-1).applyQuaternion(yd),Jo.x**2+Jo.z**2>.018&&(cs=St+Math.atan2(-Jo.x,-Jo.z))}else cs=St;let a=L_(Ut),l=9.81*(k.gravity/5)*(a?.gravity??1);Wl=l,gv.copy(xt.position);let c=Ye.role==="player"?I_():yt;if(r){A2(n,e,s),kv(!0,s),It.some(f=>f.valid)&&Sm++,hd.length=0;for(let f of ds)hd.push(f);if(k.collisions&&k.objects)for(let f of c)f.handCollider&&!f.owner&&hd.push(f.handCollider);ks.move({head:Ut,dt:i,inputDt:s,gravity:l,settings:k,boxes:hd,velocity:Kt,movement:Yo,reach:Ad()*2+.16});for(let f of It)By(f,k.stepHaptics,s,.08+k.stepHapticStrength*.04,40)}else{kv(!1,s),Kt.y-=l*i;let f=Number(Li.has("KeyD"))-Number(Li.has("KeyA")||Li.has("KeyQ"))+jl.movement.x,h=Number(Li.has("KeyS"))-Number(Li.has("KeyW")||Li.has("KeyZ"))+jl.movement.z,p=Li.has("ShiftLeft")||Li.has("ShiftRight");rs.set(f,0,h).clampLength(0,1).applyAxisAngle(Qt,St).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Ii?13:4));Kt.x=Ue.lerp(Kt.x,rs.x,x),Kt.z=Ue.lerp(Kt.z,rs.z,x);let m=(jl.consumeJump()||os.delete("Space"))&&Ii,y=br.normal,S=!m&&Ii&&y.y>=.62&&(br.surface?.friction??0)>=.45;m?Kt.y=3.1+k.jump*.18:S&&(Kt.y=-(Kt.x*y.x+Kt.z*y.z)/y.y),Yo.copy(Kt).multiplyScalar(i),S&&Yo.addScaledVector(y,-l*i*i)}if(k.collisions&&xd&&(ea.copy(Ut).add(Yo),Oo(xv,ea,LE,ds,vn,Ul)&&rs.subVectors(ea,vn).dot(Ul)<0&&(Yo.copy(vn).sub(Ut),jm(Kt,Ul))),xt.position.add(Yo),Ut.copy(Qn).applyAxisAngle(Qt,St).add(xt.position),Ii=!1,br.normal.set(0,0,0),br.surface=null,k.collisions){cd.set(0,-1,0).applyQuaternion(Ui.quaternion),cd.y=0,cd.addScaledVector(zE.set(0,0,1).applyAxisAngle(Qt,cs),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,Qn.y*.57):Qn.y,{radius:p}=gd[f];if(vn.set(Ut.x,xt.position.y+h,Ut.z),f<2&&vn.add(Jm(r,cd,Math.max(0,Qn.y-h),rs)),mv.copy(vn),Ii=Ip(vn,p,wt.boxes,Kt,0,3+k.grip,i,f===0?br:null)||Ii,k.objects)for(let x of c)x.blocksPlayer&&!x.owner&&ny(vn,p,x,Kt,Ul)&&Ul.y>.6&&(Ii=!0);Ip(vn,p,wt.boxes,Kt,0,3+k.grip,i),rs.subVectors(vn,mv),xt.position.add(rs),Ut.add(rs);for(let x=0;x<f;x++)gd[x].position.add(rs);gd[f].position.copy(vn)}}if(Bs.subVectors(xt.position,gv),Gs.update({dt:s,inVR:r,hands:It,grounded:Ii,travel:Math.hypot(Bs.x,Bs.z),volume:k.stepVolume,enabled:k.stepAudio}),r){let f=ks.finish(Bs,Kt);f.contacts&&bm++,f.launched&&(fm++,pm={handSpeed:f.launchSpeed,velocity:Kt.toArray(),t:performance.now()})}(ot.active?xt.position.y<-24||Math.abs(xt.position.x)>155||Math.abs(xt.position.z)>155:xt.position.y<-9||Math.abs(xt.position.x)>33||xt.position.z<-57||xt.position.z>13)&&(fs(),Ut.copy(Qn).applyAxisAngle(Qt,St).add(xt.position)),xv.copy(Ut),xd=!0,xt.rotation.y=St,r&&en.position.set(0,0,0);for(let f of It)r&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Bs,f.surface?0:1),f.gripPosition.add(Bs)),r||(f.mesh.visible=!1);let u=.72+k.size*.05,d=Ad()*2*(2/3)/.82;Ui.visible=k.body,Di.position.copy(Ut),r?Di.quaternion.copy(yd).premultiply(hs.setFromAxisAngle(Qt,St)):Di.quaternion.setFromEuler(new sn(Er,St,0,"YXZ")),sm.set(0,-.145,.045).applyQuaternion(Di.quaternion).add(Ut),Ui.position.set(0,.46*d,.04*u).applyQuaternion(Ui.quaternion).negate().add(sm),kE(u,d),xt.updateMatrixWorld(!0),en.updateWorldMatrix(!0,!1)}function C2(n,e){if(ud+=n,Jp++,$o+=n,ud<1||(Sr=Math.round(Jp/ud),Jp=0,ud=0,kt=!0,i2.textContent=Sr+" FPS \xB7 qualit\xE9 "+rn+"/10 \xB7 "+(k.auto?"auto":"manuel"),!k.auto||$o<5))return;$o=0;let t=e?Math.min(100,je.xr.getSession()?.frameRate||kl):60;e&&(mm=t),Ko=Sr<t-4?Ko+1:0,Qo=Sr>=t-1?Qo+1:0;let i=Ue.clamp(rn+(Ko>=1?-1:Qo>=2?1:0),1,10);i!==rn&&(rn=i,$o=Ko=Qo=0,Bi())}wt.bakeLightmap();var D_={value:1},U_={value:1},F_={value:0},Nm={value:0},Gv=new WeakSet;function oa(n){if(Array.isArray(n)){for(let i of n)oa(i);return}if(!n||Gv.has(n))return;Gv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,s){e.call(this,i,s),Object.assign(i.uniforms,{uPhotoContrast:D_,uPhotoSaturation:U_,uPhotoWarmth:F_,uLabShader:Nm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of wt.materials)oa(n);Et.traverse(n=>{n.isMesh&&![fn.mesh,ei.mesh,Rr].includes(n)&&oa(n.material)});Bi();var Hv=new URLSearchParams(location.search);if(Hv.has("map"))ot.loadURL(Hv.get("map"));else try{let n=localStorage.getItem(Ll);n&&ot.load(n)}catch(n){ot.inform(n.message)}function R2(){let n=je.xr.isPresenting;return{head:Di.quaternion,hands:n?It.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,ta.mode?g2:null],height:Qn.y,armSpan:Ad()*2,light:k.timeOfDay-1,color:Yv,coconuts:Mn.coconuts.reduce((e,t,i)=>e|Number(t.visible)<<i,0),tool:ta.mode?ta:null,gun:Bd.gun}}je.setAnimationLoop((n,e)=>{let t=jp?Math.max(0,(n-jp)/1e3):.014;jp=n;let i=Math.max(1e-4,Math.min(.035,t)),s=Ye.role?1:Tm[k.debugSpeed-1],r=i*s,o=je.xr.isPresenting,a=je.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(qE(n*.001),Sd&&n>Sd&&(hm.hidden=!0,Sd=0,Fm=""),Rr.visible=!1,Rm.hide(),ta.mode=0,ds=k.collisions?wt.boxes:DE,wr=null,Hl=null,_d=null,Md=null,ot.clearGhost(),fn.mesh.visible=!1,!o&&Ye.role==="pc"){Ui.visible=!1;for(let y of It)y.mesh.visible=!1}else E2(e,a,l,r,i);let c=!o&&Ye.role==="pc",u=c||Ye.role==="player";if(Ye.role!=="player"){ls=0;for(let y of It)y.remoteHeld=0}u||(y2(r),T2()),Zp=0;for(let y of yt){y.mesh.visible=k.objects&&!u;let{x:S,y:_,z:C}=y.mesh.position;if(Xm(y.mesh.position,ot.active)&&(y.owner||ic(y)),y.shadow.visible=!u&&k.shadows&&Cd()<3&&k.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:I,z:D}=y.mesh.position,w=wt.boxes.find(E=>E.heightfield&&I>=E.xMin&&I<=E.xMax&&D>=E.zMin&&D<=E.zMax),b=w?w.height(I,D):0;y.shadow.position.set(I,b+.006,D)}}if(!u&&k.objects){for(let S of yt)S.beforePhysics.copy(S.mesh.position);let y=performance.now();ey(yt,wt.boxes,r,9.81*k.gravity/5,.12+k.bounce*.064,L_),Zp=performance.now()-y,ot.builtIn&&Mn.updateTarget(yt,jE())}if(o&&!Zt&&Ye.role!=="pc")for(let y of It)p2(y);if(wt.probe.rotation.y+=r*.29,C2(Math.min(.3,t),o),fn.mesh.visible=o&&Zt,fn.mesh.visible&&kt&&Ov(),fn.mesh.visible&&wr)S2(e,a,wr.source,wr.click);else if(o&&Md)f2(e,a,Md);else if(o&&_d)_2(e,a,_d);else if(o&&Hl)M2(e,a,Hl.source,Hl.click);else if(!o&&!c){en.getWorldPosition(qn),en.getWorldDirection(Nn),os.delete("KeyX")&&_n("blasterActive",1),os.delete("KeyG")&&(_n("toolActive",1),k.toolActive&&ni("Outil \xB7 "+Mr[k.toolMode-1])),os.delete("KeyT")&&_n("toolMode",1);let y=os.delete("KeyE");k.toolActive?C_(qn,Nn,y,null):y&&!w2(qn,Nn)?cm(qn,Nn,!0):!y&&!u&&cm(qn,Nn,!1),os.delete("KeyF")&&(k.objects=!0,Dm(e_[0]))}let d=ei.mesh.visible;if(ei.mesh.visible=o&&!Zt&&It[0].valid,ei.mesh.visible&&(ei.mesh.position.copy(It[0].mesh.position).y+=.12,ei.mesh.lookAt(Ut)),(kt||n-yv>1100||ei.mesh.visible&&!d)&&(kt=!1,yv=n,Zt&&Ov(),ei.mesh.visible)){let y=ei.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(Sr+" FPS     Q "+rn+"/10",17,32),y.font="20px system-ui",y.fillText(k.mapEdit?"\xC9dition : "+S_[k.mapMode-1]:k.blasterActive?"Pistolet : maintenir la g\xE2chette":k.toolActive?"Tool Gun : "+Mr[k.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ei.texture.needsUpdate=!0}Bd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:r,yaw:St,drop:ii,rightHand:It[1],enabled:k.blasterActive&&!c&&!Zt&&!k.mapEdit,flatFiring:R_.held||Li.has("KeyJ")}),Ye.update({inVR:o,time:n,dt:i,position:Ut,yaw:c?St:cs,pitch:Er,camera:en,rig:xt,keys:Li,actions:os,flat:jl,avatar:R2,bodies:k.objects?yt:wv,score:Mn.score()}),os.clear();let f=performance.now();jo.update({settings:k,boxes:ds,bodies:u?k.debugHitboxes?I_():wv:yt,hands:It,locomotion:ks,velocity:Kt,head:Ut,neck:sm,body:Ui.position,proxies:gd,gravity:Wl,appliedMove:Bs,playerActive:!c,inVR:o,viewQuaternion:Di.quaternion}),dv=performance.now()-f,!c&&n-Gl>350&&(jv={simulationScale:s,gravity:Wl,velocity:Kt.toArray(),grounded:Ii,torsoDegrees:[as.x,as.y].map(Ue.radToDeg),hands:o?ks.hands.map(({hand:y,normal:S,offset:_})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:vn.copy(Qi).applyQuaternion(y.mesh.quaternion).add(y.target).add(Bs).distanceTo(y.gripPosition),palmCenter:vn.copy(Qi).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:vn.copy(y.mesh.position).add(_).toArray(),normal:y.surface?S.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),QE(u),wt.centerShadows(Ld);let h=25+(10-Cd())*(o?7:4);je.shadowMap.enabled&&n-hv>=h&&(je.shadowMap.needsUpdate=!0,hv=n),a2(n,l);let p=performance.now(),x=o&&k.post,g=o&&k.rayTrace;PE(g,yt);let m=k.vrFov/100;if(!x||!RE.render(Et,en,{bloom:k.bloom,visibleField:m})){md.material.uniforms.visibleField.value=m,md.visible=o&&m<1;try{je.render(Et,en)}finally{md.visible=!1}}if(fv=performance.now()-p,Ni.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:Zp,debugCpuMs:dv,renderSubmissionCpuMs:fv,objects:yt.length,moving:yt.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:jo.stats.segments}),n-Gl>350&&(Zl.hidden=!(k.debugForces||jo.stats.truncated),Zl.hidden||(Zl.textContent="Vitesse joueur : "+Kt.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+Wl.toFixed(2)+" m/s\xB2 \xB7 Segments : "+jo.stats.segments+(jo.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),o_[vd]=t*1e3,vd=(vd+1)%720,n-Gl>350){Gl=n;let{calls:y,triangles:S,lines:_,points:C}=je.info.render;l_={calls:y,triangles:S,lines:_,points:C,textures:je.info.memory.textures},o&&(Pd={refreshHz:je.xr.getSession()?.frameRate??null,targetFps:mm,supportedHz:Vl.slice(),foveation:je.xr.getFoveation()??null,visualEffects:{post:x,bloom:x&&k.bloom,rayTrace:g},eyeViewports:je.xr.getCamera().cameras.map(A=>({width:A.viewport?.z??null,height:A.viewport?.w??null}))})}});})();
