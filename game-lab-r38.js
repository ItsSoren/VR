(()=>{function Km(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function eg(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function tg(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function Qd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function ng(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function ig(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function rg(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function sg(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function og(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xg=0,kf=1,Yg=2;var ol=1,Zg=2,Ri=3,pi=0,An=1,un=2,tr=0,ts=1,ii=2,Gf=3,Hf=4,jg=5,wr=100,Jg=101,Qg=102,$g=103,Kg=104,e0=200,t0=201,n0=202,i0=203,Wc=204,qc=205,r0=206,s0=207,o0=208,a0=209,l0=210,c0=211,u0=212,h0=213,d0=214,bu=0,Mu=1,Su=2,ns=3,wu=4,Tu=5,Au=6,Eu=7,Cu=0,f0=1,p0=2,nr=0,m0=1,g0=2,x0=3,Ru=4,y0=5,v0=6,_0=7;var Wf=300,us=301,hs=302,ir=303,Iu=304,al=306,Tn=1e3,Sr=1001,Xc=1002,dn=1003,b0=1004;var ll=1005;var nn=1006,Pu=1007;var En=1008;var qn=1009,qf=1010,Xf=1011,Mo=1012,Lu=1013,Rr=1014,vi=1015,Ii=1016,Du=1017,Uu=1018,So=1020,Yf=35902,Zf=35899,jf=1021,Jf=1022,Cn=1023,io=1026,wo=1027,Fu=1028,Nu=1029,Qf=1030,Bu=1031;var Ou=1033,cl=33776,ul=33777,hl=33778,dl=33779,zu=35840,Vu=35841,ku=35842,Gu=35843,Hu=36196,Wu=37492,qu=37496,Xu=37808,Yu=37809,Zu=37810,ju=37811,Ju=37812,Qu=37813,$u=37814,Ku=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,oh=36492,ah=36494,lh=36495,ch=36283,uh=36284,hh=36285,dh=36286;var Ea=2300,Yc=2301,Gc=2302,Cf=2400,Rf=2401,If=2402;var M0=3200,S0=3201;var fh=0,w0=1,rr="",ht="srgb",is="srgb-linear",Ca="linear",Mt="srgb";var es=7680;var Pf=519,T0=512,A0=513,E0=514,$f=515,C0=516,R0=517,I0=518,P0=519,Zc=35044,Rn=35048;var Kf="300 es",fi=2e3,Ra=2001;var Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ag=1234567,Sa=Math.PI/180,ro=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function ep(n,e){return(n%e+e)%e}function gb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xb(n,e,t){return n!==e?(t-n)/(e-n):0}function wa(n,e,t){return(1-t)*n+t*e}function yb(n,e,t,i){return wa(n,e,1-Math.exp(-t*i))}function vb(n,e=1){return e-Math.abs(ep(n,e*2)-e)}function _b(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Mb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sb(n,e){return n+Math.random()*(e-n)}function wb(n){return n*(.5-Math.random())}function Tb(n){n!==void 0&&(ag=n);let e=ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ab(n){return n*Sa}function Eb(n){return n*ro}function Cb(n){return(n&n-1)===0&&n!==0}function Rb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ib(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pb(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var De={DEG2RAD:Sa,RAD2DEG:ro,generateUUID:Ei,clamp:nt,euclideanModulo:ep,mapLinear:gb,inverseLerp:xb,lerp:wa,damp:yb,pingpong:vb,smoothstep:_b,smootherstep:bb,randInt:Mb,randFloat:Sb,randFloatSpread:wb,seededRandom:Tb,degToRad:Ab,radToDeg:Eb,isPowerOfTwo:Cb,ceilPowerOfTwo:Rb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:Pb,normalize:bt,denormalize:di},ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let A=Math.sqrt(v),E=Math.atan2(A,m*y);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let b=a*y;if(l=l*g+f*b,c=c*g+h*b,u=u*g+p*b,d=d*g+x*b,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$d=new _,lg=new Xe,rt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],g=r[3],m=r[6],y=r[1],v=r[4],b=r[7],A=r[2],E=r[5],D=r[8];return s[0]=o*x+a*y+l*A,s[3]=o*g+a*v+l*E,s[6]=o*m+a*b+l*D,s[1]=c*x+u*y+d*A,s[4]=c*g+u*v+d*E,s[7]=c*m+u*b+d*D,s[2]=f*x+h*y+p*A,s[5]=f*g+h*v+p*E,s[8]=f*m+h*b+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kd.makeScale(e,t)),this}rotate(e){return this.premultiply(Kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kd=new rt;function tp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function L0(){let n=so("canvas");return n.style.display="block",n}var cg={};function oo(n){n in cg||(cg[n]=!0,console.warn(n))}function D0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ug=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){let n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Ca:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:Ca,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),n}var pt=Lb();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ns,jc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=so("canvas")),Ns.width=e.width,Ns.height=e.height;let r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Db=0,ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ef(r[o].image)):s.push(ef(r[o]))}else s=ef(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ub=0,tf=new _,yn=class n extends Ji{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Sr,r=Sr,s=nn,o=En,a=Cn,l=qn,c=n.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Ei(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Wf;yn.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(h+1)/2,A=(m+1)/2,E=(u+f)/4,D=(d+x)/4,L=(p+g)/4;return v>b&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=D/i):b>A?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=D/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends Ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new yn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Jc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ia=class extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),fc.subVectors(this.max,ha),Bs.subVectors(e.a,ha),Os.subVectors(e.b,ha),zs.subVectors(e.c,ha),xr.subVectors(Os,Bs),yr.subVectors(zs,Os),Jr.subVectors(Bs,zs);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Jr.z,Jr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Jr.z,0,-Jr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Jr.y,Jr.x,0];return!nf(t,Bs,Os,zs,fc)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,Bs,Os,zs,fc))?!1:(pc.crossVectors(xr,yr),t=[pc.x,pc.y,pc.z],nf(t,Bs,Os,zs,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new _,new _,new _,new _,new _,new _,new _,new _],ci=new _,dc=new Qt,Bs=new _,Os=new _,zs=new _,xr=new _,yr=new _,Jr=new _,ha=new _,fc=new _,pc=new _,Qr=new _;function nf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qr.fromArray(n,s);let a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),u=i.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Fb=new Qt,da=new _,rf=new _,$n=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(rf)),this.expandByPoint(da.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qi=new _,sf=new _,mc=new _,vr=new _,of=new _,gc=new _,af=new _,Qi=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sf.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(sf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(mc),a=vr.dot(this.direction),l=-vr.dot(mc),c=vr.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sf).addScaledVector(mc,f),h}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,r,s){of.subVectors(t,e),gc.subVectors(i,e),af.crossVectors(of,gc);let o=this.direction.dot(af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);let l=a*this.direction.dot(gc.crossVectors(vr,gc));if(l<0)return null;let c=a*this.direction.dot(of.cross(vr));if(c<0||l+c>o)return null;let u=-a*vr.dot(af);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Bb)}lookAt(e,t,i){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),_r.crossVectors(i,kn),_r.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),_r.crossVectors(i,kn)),_r.normalize(),xc.crossVectors(kn,_r),r[0]=_r.x,r[4]=xc.x,r[8]=kn.x,r[1]=_r.y,r[5]=xc.y,r[9]=kn.y,r[2]=_r.z,r[6]=xc.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],v=i[7],b=i[11],A=i[15],E=r[0],D=r[4],L=r[8],w=r[12],M=r[1],R=r[5],N=r[9],O=r[13],X=r[2],F=r[6],k=r[10],j=r[14],U=r[3],re=r[7],ne=r[11],me=r[15];return s[0]=o*E+a*M+l*X+c*U,s[4]=o*D+a*R+l*F+c*re,s[8]=o*L+a*N+l*k+c*ne,s[12]=o*w+a*O+l*j+c*me,s[1]=u*E+d*M+f*X+h*U,s[5]=u*D+d*R+f*F+h*re,s[9]=u*L+d*N+f*k+h*ne,s[13]=u*w+d*O+f*j+h*me,s[2]=p*E+x*M+g*X+m*U,s[6]=p*D+x*R+g*F+m*re,s[10]=p*L+x*N+g*k+m*ne,s[14]=p*w+x*O+g*j+m*me,s[3]=y*E+v*M+b*X+A*U,s[7]=y*D+v*R+b*F+A*re,s[11]=y*L+v*N+b*k+A*ne,s[15]=y*w+v*O+b*j+A*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+g*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+m*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,v=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,b=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,A=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,E=t*y+i*v+r*b+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return e[0]=y*D,e[1]=(x*f*s-d*g*s-x*r*h+i*g*h+d*r*m-i*f*m)*D,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*m+i*l*m)*D,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*D,e[4]=v*D,e[5]=(u*g*s-p*f*s+p*r*h-t*g*h-u*r*m+t*f*m)*D,e[6]=(p*l*s-o*g*s-p*r*c+t*g*c+o*r*m-t*l*m)*D,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*D,e[8]=b*D,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*m-t*d*m)*D,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*D,e[12]=A*D,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*g+t*d*g)*D,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,g=o*d,m=a*d,y=l*c,v=l*u,b=l*d,A=i.x,E=i.y,D=i.z;return r[0]=(1-(x+m))*A,r[1]=(h+b)*A,r[2]=(p-v)*A,r[3]=0,r[4]=(h-b)*E,r[5]=(1-(f+m))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(p+v)*D,r[9]=(g-y)*D,r[10]=(1-(f+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Vs.set(r[0],r[1],r[2]).length(),o=Vs.set(r[4],r[5],r[6]).length(),a=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);let c=1/s,u=1/o,d=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===fi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ra)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===fi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ra)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vs=new _,ui=new lt,Nb=new _(0,0,0),Bb=new _(1,1,1),_r=new _,xc=new _,kn=new _,dg=new lt,fg=new Xe,$t=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ob=0,pg=new _,ks=new Xe,Xi=new lt,yc=new _,fa=new _,zb=new _,Vb=new Xe,mg=new _(1,0,0),gg=new _(0,1,0),xg=new _(0,0,1),yg={type:"added"},kb={type:"removed"},Gs={type:"childadded",child:null},lf={type:"childremoved",child:null},Gt=class n extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new _,t=new $t,i=new Xe,r=new _(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new rt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(fa,yc,this.up):Xi.lookAt(yc,fa,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Xi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kb),lf.child=e,this.dispatchEvent(lf),lf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,zb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Gt.DEFAULT_UP=new _(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new _,Yi=new _,cf=new _,Zi=new _,Hs=new _,Ws=new _,vg=new _,uf=new _,hf=new _,df=new _,ff=new dt,pf=new dt,mf=new dt,Un=class n{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hi.subVectors(e,t),r.cross(hi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hi.subVectors(r,t),Yi.subVectors(i,t),cf.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(Yi),l=hi.dot(cf),c=Yi.dot(Yi),u=Yi.dot(cf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ff.setScalar(0),pf.setScalar(0),mf.setScalar(0),ff.fromBufferAttribute(e,t),pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ff,s.x),o.addScaledVector(pf,s.y),o.addScaledVector(mf,s.z),o}static isFrontFacing(e,t,i,r){return hi.subVectors(i,t),Yi.subVectors(e,t),hi.cross(Yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Hs.subVectors(r,i),Ws.subVectors(s,i),uf.subVectors(e,i);let l=Hs.dot(uf),c=Ws.dot(uf);if(l<=0&&c<=0)return t.copy(i);hf.subVectors(e,r);let u=Hs.dot(hf),d=Ws.dot(hf);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Hs,o);df.subVectors(e,s);let h=Hs.dot(df),p=Ws.dot(df);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ws,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return vg.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(vg,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(Hs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},vc={h:0,s:0,l:0};function gf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=ep(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gf(o,s,e+1/3),this.g=gf(o,s,e),this.b=gf(o,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let i=U0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return pt.workingToColorSpace(xn.copy(this),e),Math.round(nt(xn.r*255,0,255))*65536+Math.round(nt(xn.g*255,0,255))*256+Math.round(nt(xn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(xn.copy(this),t);let i=xn.r,r=xn.g,s=xn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ht){pt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,r=xn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(vc);let i=wa(br.h,vc.h,t),r=wa(br.s,vc.s,t),s=wa(br.l,vc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Fe;Fe.NAMES=U0;var Gb=0,Kn=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ts,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=qc,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Et=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new _,_c=new ve,Hb=0,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_c.fromBufferAttribute(this,t),_c.applyMatrix3(e),this.setXY(t,_c.x,_c.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var rs=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pa=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ze=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wb=0,Qn=new lt,xf=new Gt,qs=new _,Gn=new Qt,pa=new Qt,ln=new _,tt=class n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?Pa:rs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Gn.min,pa.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,pa.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(pa.min),Gn.expandByPoint(pa.max))}Gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),ln.add(qs)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new _,l[L]=new _;let c=new _,u=new _,d=new _,f=new ve,h=new ve,p=new ve,x=new _,g=new _;function m(L,w,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let R=1/(h.x*p.y-p.x*h.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(R),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(R),a[L].add(x),a[w].add(x),a[M].add(x),l[L].add(g),l[w].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,w=y.length;L<w;++L){let M=y[L],R=M.start,N=M.count;for(let O=R,X=R+N;O<X;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new _,b=new _,A=new _,E=new _;function D(L){A.fromBufferAttribute(r,L),E.copy(A);let w=a[L];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(E,w);let R=b.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,R)}for(let L=0,w=y.length;L<w;++L){let M=y[L],R=M.start,N=M.count;for(let O=R,X=R+N;O<X;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new _,s=new _,o=new _,a=new _,l=new _,c=new _,u=new _,d=new _;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new mt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_g=new lt,$r=new Qi,bc=new $n,bg=new _,Mc=new _,Sc=new _,wc=new _,yf=new _,Tc=new _,Mg=new _,Ac=new _,He=class extends Gt{constructor(e=new tt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(yf.fromBufferAttribute(d,e),o?Tc.addScaledVector(yf,u):Tc.addScaledVector(yf.sub(t),u))}t.add(Tc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(bc.containsPoint($r.origin)===!1&&($r.intersectSphere(bc,bg)===null||$r.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(_g.copy(s).invert(),$r.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),v=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let b=y,A=v;b<A;b+=3){let E=a.getX(b),D=a.getX(b+1),L=a.getX(b+2);r=Ec(this,m,e,i,c,u,d,E,D,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);r=Ec(this,o,e,i,c,u,d,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=y,A=v;b<A;b+=3){let E=b,D=b+1,L=b+2;r=Ec(this,m,e,i,c,u,d,E,D,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=g,v=g+1,b=g+2;r=Ec(this,o,e,i,c,u,d,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function qb(n,e,t,i,r,s,o,a){let l;if(e.side===An?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;Ac.copy(a),Ac.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ac);return c<t.near||c>t.far?null:{distance:c,point:Ac.clone(),object:n}}function Ec(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Mc),n.getVertexPosition(l,Sc),n.getVertexPosition(c,wc);let u=qb(n,e,t,i,Mc,Sc,wc,Mg);if(u){let d=new _;Un.getBarycoord(Mg,Mc,Sc,wc,d),r&&(u.uv=Un.getInterpolatedAttribute(r,a,l,c,d,new ve)),s&&(u.uv1=Un.getInterpolatedAttribute(s,a,l,c,d,new ve)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,d,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};Un.getNormal(Mc,Sc,wc,f.normal),u.face=f,u.barycoord=d}return u}var it=class n extends tt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function p(x,g,m,y,v,b,A,E,D,L,w){let M=b/D,R=A/L,N=b/2,O=A/2,X=E/2,F=D+1,k=L+1,j=0,U=0,re=new _;for(let ne=0;ne<k;ne++){let me=ne*R-O;for(let we=0;we<F;we++){let Ee=we*M-N;re[x]=Ee*y,re[g]=me*v,re[m]=X,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[m]=E>0?1:-1,u.push(re.x,re.y,re.z),d.push(we/D),d.push(1-ne/L),j+=1}}for(let ne=0;ne<L;ne++)for(let me=0;me<D;me++){let we=f+me+F*ne,Ee=f+me+F*(ne+1),Ce=f+(me+1)+F*(ne+1),Le=f+(me+1)+F*ne;l.push(we,Ee,Le),l.push(Ee,Ce,Le),U+=6}a.addGroup(h,U,w),h+=U,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let r in i)e[r]=i[r]}return e}function Xb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var ph={clone:ds,merge:vn},Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},La=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mr=new _,Sg=new ve,wg=new ve,Jt=class extends La{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,wg),t.subVectors(wg,Sg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,Ys=1,$c=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(Xs,Ys,e,t);r.layers=this.layers,this.add(r);let s=new Jt(Xs,Ys,e,t);s.layers=this.layers,this.add(s);let o=new Jt(Xs,Ys,e,t);o.layers=this.layers,this.add(o);let a=new Jt(Xs,Ys,e,t);a.layers=this.layers,this.add(a);let l=new Jt(Xs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Da=class extends yn{constructor(e=[],t=us,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Da(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:tr});s.uniforms.tEquirect.value=t;let o=new He(r,s),a=t.minFilter;return t.minFilter===En&&(t.minFilter=nn),new $c(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},At=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jb={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new At;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ua=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ss=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new _,uo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ho=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,ma=new _,js=new _,Js=new _,Qs=new ve,ga=new ve,F0=new lt,Cc=new _,xa=new _,Rc=new _,Tg=new ve,vf=new ve,Ag=new ve,Na=class extends Gt{constructor(e=new ho){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fa(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new uo(i,3,0,!1)),Zs.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),F0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Js.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Ic(Cc.set(-.5,-.5,0),Js,o,js,r,s),Ic(xa.set(.5,-.5,0),Js,o,js,r,s),Ic(Rc.set(.5,.5,0),Js,o,js,r,s),Tg.set(0,0),vf.set(1,0),Ag.set(1,1);let a=e.ray.intersectTriangle(Cc,xa,Rc,!1,ma);if(a===null&&(Ic(xa.set(-.5,.5,0),Js,o,js,r,s),vf.set(0,1),a=e.ray.intersectTriangle(Cc,Rc,xa,!1,ma),a===null))return;let l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||t.push({distance:l,point:ma.clone(),uv:Un.getInterpolation(ma,Cc,xa,Rc,Tg,vf,Ag,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ic(n,e,t,i,r,s){Qs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*Qs.x-r*Qs.y,ga.y=r*Qs.x+s*Qs.y):ga.copy(Qs),n.copy(e),n.x+=ga.x,n.y+=ga.y,n.applyMatrix4(F0)}var ei=class extends yn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=dn,u=dn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fo=class extends mt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new lt,Eg=new lt,Pc=[],Cg=new Qt,Jb=new lt,ya=new He,va=new $n,Ba=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Cg.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Cg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),va.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$s),Eg.multiplyMatrices(i,$s),ya.matrixWorld=Eg,ya.raycast(e,Pc);for(let o=0,a=Pc.length;o<a;o++){let l=Pc[o];l.instanceId=s,l.object=this,t.push(l)}Pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(r*this.count),r,this.count,Fu,vi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_f=new _,Qb=new _,$b=new rt,Dn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=_f.subVectors(i,t).cross(Qb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(_f),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$b.getNormalMatrix(e),r=this.coplanarPoint(_f).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kr=new $n,Kb=new ve(.5,.5),Lc=new _,po=class{constructor(e=new Dn,t=new Dn,i=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],g=s[10],m=s[11],y=s[12],v=s[13],b=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,m-p,A-y).normalize(),r[1].setComponents(c+o,h+u,m+p,A+y).normalize(),r[2].setComponents(c+a,h+d,m+x,A+v).normalize(),r[3].setComponents(c-a,h-d,m-x,A-v).normalize(),i)r[4].setComponents(l,f,g,b).normalize(),r[5].setComponents(c-l,h-f,m-g,A-b).normalize();else if(r[4].setComponents(c-l,h-f,m-g,A-b).normalize(),t===fi)r[5].setComponents(c+l,h+f,m+g,A+b).normalize();else if(t===Ra)r[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);let t=Kb.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Lc.x=r.normal.x>0?e.max.x:e.min.x,Lc.y=r.normal.y>0?e.max.y:e.min.y,Lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ci=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eu=new _,tu=new _,Rg=new lt,_a=new Qi,Dc=new $n,bf=new _,Ig=new _,Oa=class extends Gt{constructor(e=new tt,t=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)eu.fromBufferAttribute(t,r-1),tu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(r),Dc.radius+=s,e.ray.intersectsSphere(Dc)===!1)return;Rg.copy(r).invert(),_a.copy(e.ray).applyMatrix4(Rg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),v=Uc(this,e,_a,l,m,y,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Uc(this,e,_a,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Uc(this,e,_a,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Uc(this,e,_a,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Uc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(eu.fromBufferAttribute(a,r),tu.fromBufferAttribute(a,s),t.distanceSqToSegment(eu,tu,bf,Ig)>i)return;bf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bf);if(!(c<e.near||c>e.far))return{distance:c,point:Ig.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Pg=new _,Lg=new _,os=class extends Oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Pg.fromBufferAttribute(t,r),Lg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pg.distanceTo(Lg);e.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},za=class extends Oa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},mo=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dg=new lt,Lf=new Qi,Fc=new $n,Nc=new _,Va=class extends Gt{constructor(e=new tt,t=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;Dg.copy(r).invert(),Lf.copy(e.ray).applyMatrix4(Dg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Nc.fromBufferAttribute(d,g),Ug(Nc,g,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Nc.fromBufferAttribute(d,p),Ug(Nc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ug(n,e,t,i,r,s,o){let a=Lf.distanceSqToPoint(n);if(a<t){let l=new _;Lf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var mi=class extends yn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ka=class extends yn{constructor(e,t,i=Rr,r,s,o,a=dn,l=dn,c,u=io,d=1){if(u!==io&&u!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ga=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tr=class n extends tt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,g=new _,m=new _;for(let y=0;y<=p;y++){let v=0,b=0,A=0,E=0;if(y<=i){let w=y/i,M=w*Math.PI/2;b=-u-e*Math.cos(M),A=e*Math.sin(M),E=-e*Math.cos(M),v=w*d}else if(y<=i+s){let w=(y-i)/s;b=-u+w*t,A=e,E=0,v=d+w*f}else{let w=(y-i-s)/i,M=w*Math.PI/2;b=u+e*Math.sin(M),A=e*Math.cos(M),E=e*Math.sin(M),v=d+f+w*d}let D=Math.max(0,Math.min(1,v/h)),L=0;y===0?L=.5/r:y===p&&(L=-.5/r);for(let w=0;w<=r;w++){let M=w/r,R=M*Math.PI*2,N=Math.sin(R),O=Math.cos(R);m.x=-A*O,m.y=b,m.z=A*N,a.push(m.x,m.y,m.z),g.set(-A*O,E,A*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+L,D)}if(y>0){let w=(y-1)*x;for(let M=0;M<r;M++){let R=w+M,N=w+M+1,O=y*x+M,X=y*x+M+1;o.push(R,N,O),o.push(N,X,O)}}}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},cn=class n extends tt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,u=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kt=class n extends tt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(h,2));function y(){let b=new _,A=new _,E=0,D=(t-e)/i;for(let L=0;L<=s;L++){let w=[],M=L/s,R=M*(t-e)+e;for(let N=0;N<=r;N++){let O=N/r,X=O*l+a,F=Math.sin(X),k=Math.cos(X);A.x=R*F,A.y=-M*i+g,A.z=R*k,d.push(A.x,A.y,A.z),b.set(F,D,k).normalize(),f.push(b.x,b.y,b.z),h.push(O,1-M),w.push(p++)}x.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){let M=x[w][L],R=x[w+1][L],N=x[w+1][L+1],O=x[w][L+1];(e>0||w!==0)&&(u.push(M,R,O),E+=3),(t>0||w!==s-1)&&(u.push(R,N,O),E+=3)}c.addGroup(m,E,0),m+=E}function v(b){let A=p,E=new ve,D=new _,L=0,w=b===!0?e:t,M=b===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,g*M,0),f.push(0,M,0),h.push(.5,.5),p++;let R=p;for(let N=0;N<=r;N++){let X=N/r*l+a,F=Math.cos(X),k=Math.sin(X);D.x=w*k,D.y=g*M,D.z=w*F,d.push(D.x,D.y,D.z),f.push(0,M,0),E.x=F*.5+.5,E.y=k*.5*M+.5,h.push(E.x,E.y),p++}for(let N=0;N<r;N++){let O=A+N,X=R+N;b===!0?u.push(X,X+1,O):u.push(X+1,X,O),L+=3}c.addGroup(m,L,b===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class n extends Kt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},go=class n extends tt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new _,b=new _,A=new _;for(let E=0;E<t.length;E+=3)h(t[E+0],v),h(t[E+1],b),h(t[E+2],A),l(v,b,A,y)}function l(y,v,b,A){let E=A+1,D=[];for(let L=0;L<=E;L++){D[L]=[];let w=y.clone().lerp(b,L/E),M=v.clone().lerp(b,L/E),R=E-L;for(let N=0;N<=R;N++)N===0&&L===E?D[L][N]=w:D[L][N]=w.clone().lerp(M,N/R)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){let M=Math.floor(w/2);w%2===0?(f(D[L][M+1]),f(D[L+1][M]),f(D[L][M])):(f(D[L][M+1]),f(D[L+1][M+1]),f(D[L+1][M]))}}function c(y){let v=new _;for(let b=0;b<s.length;b+=3)v.x=s[b+0],v.y=s[b+1],v.z=s[b+2],v.normalize().multiplyScalar(y),s[b+0]=v.x,s[b+1]=v.y,s[b+2]=v.z}function u(){let y=new _;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let b=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(b,1-A)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],A=o[y+4],E=Math.max(v,b,A),D=Math.min(v,b,A);E>.9&&D<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function h(y,v){let b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function p(){let y=new _,v=new _,b=new _,A=new _,E=new ve,D=new ve,L=new ve;for(let w=0,M=0;w<s.length;w+=9,M+=6){y.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),E.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),A.copy(y).add(v).add(b).divideScalar(3);let R=g(A);x(E,M+0,y,R),x(D,M+2,v,R),x(L,M+4,b,R)}}function x(y,v,b,A){A<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ve:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new _,r=[],s=[],o=[],a=new _,l=new lt;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(nt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xo=class extends Hn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nu=class extends xo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ip(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Bc=new _,Mf=new ip,Sf=new ip,wf=new ip,iu=class extends Hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Bc.subVectors(r[0],r[1]).add(r[0]),c=Bc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Mf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),Sf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),wf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(Mf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Sf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),wf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Mf.calc(l),Sf.calc(l),wf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function eM(n,e){let t=1-n;return t*t*e}function tM(n,e){return 2*(1-n)*n*e}function nM(n,e){return n*n*e}function Ta(n,e,t,i){return eM(n,e)+tM(n,t)+nM(n,i)}function iM(n,e){let t=1-n;return t*t*t*e}function rM(n,e){let t=1-n;return 3*t*t*n*e}function sM(n,e){return 3*(1-n)*n*n*e}function oM(n,e){return n*n*n*e}function Aa(n,e,t,i,r){return iM(n,e)+rM(n,t)+sM(n,i)+oM(n,r)}var Ha=class extends Hn{constructor(e=new ve,t=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ve){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Aa(e,r.x,s.x,o.x,a.x),Aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ru=class extends Hn{constructor(e=new _,t=new _,i=new _,r=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Aa(e,r.x,s.x,o.x,a.x),Aa(e,r.y,s.y,o.y,a.y),Aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends Hn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Hn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Hn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ou=class extends Hn{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y),Ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Fg(a,l.x,c.x,u.x,d.x),Fg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ve().fromArray(r))}return this}},Df=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:iu,CubicBezierCurve:Ha,CubicBezierCurve3:ru,EllipseCurve:xo,LineCurve:Wa,LineCurve3:su,QuadraticBezierCurve:qa,QuadraticBezierCurve3:ou,SplineCurve:Xa}),au=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Df[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Df[r.type]().fromJSON(r))}return this}},Ya=class extends au{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wa(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new qa(this.currentPoint.clone(),new ve(e,t),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Ha(this.currentPoint.clone(),new ve(e,t),new ve(i,r),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new xo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gi=class extends Ya{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ya().fromJSON(r))}return this}};function aM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=N0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=dM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Za(s,o,t,a,l,c,0),o}function N0(n,e,t,i,r){let s;if(r===SM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ng(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ng(o/i|0,n[o],n[o+1],s);return s&&yo(s,s.next)&&(Ja(s),s=s.next),s}function as(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yo(t,t.next)||kt(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Za(n,e,t,i,r,s,o){if(!n)return;!o&&s&&xM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?cM(n,i,r,s):lM(n)){e.push(l.i,n.i,c.i),Ja(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=uM(as(n),e),Za(n,e,t,i,r,s,2)):o===2&&hM(n,e,t,i,r,s):Za(as(n),e,t,i,r,s,1);break}}}function lM(n){let e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&Ma(r,a,s,l,o,c,p.x,p.y)&&kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(kt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Uf(h,p,e,t,i),y=Uf(x,g,e,t,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=m&&b&&b.z<=y;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ma(a,u,l,d,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&Ma(a,u,l,d,c,f,b.x,b.y)&&kt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=m;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ma(a,u,l,d,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&Ma(a,u,l,d,c,f,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function uM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!yo(i,r)&&O0(i,t,t.next,r)&&ja(i,r)&&ja(r,i)&&(e.push(i.i,t.i,r.i),Ja(t),Ja(t.next),t=n=r),t=t.next}while(t!==n);return as(t)}function hM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_M(o,a)){let l=z0(o,a);o=as(o,o.next),l=as(l,l.next),Za(o,e,t,i,r,s,0),Za(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function dM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=N0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(vM(c))}r.sort(fM);for(let s=0;s<r.length;s++)t=pM(r[s],t);return t}function fM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function pM(n,e){let t=mM(n,e);if(!t)return e;let i=z0(t,n);return as(i,i.next),as(t,t.next)}function mM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(yo(n,t))return t;do{if(yo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&B0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);ja(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&gM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function gM(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function xM(n,e,t,i){let r=n;do r.z===0&&(r.z=Uf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,yM(r)}function yM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Uf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function vM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function B0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ma(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&B0(n,e,t,i,r,s,o,a)}function _M(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bM(n,e)&&(ja(n,e)&&ja(e,n)&&MM(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||yo(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yo(n,e){return n.x===e.x&&n.y===e.y}function O0(n,e,t,i){let r=zc(kt(n,e,t)),s=zc(kt(n,e,i)),o=zc(kt(t,i,n)),a=zc(kt(t,i,e));return!!(r!==s&&o!==a||r===0&&Oc(n,t,e)||s===0&&Oc(n,i,e)||o===0&&Oc(t,n,i)||a===0&&Oc(t,e,i))}function Oc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zc(n){return n>0?1:n<0?-1:0}function bM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&O0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ja(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function MM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function z0(n,e){let t=Ff(n.i,n.x,n.y),i=Ff(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ng(n,e,t,i){let r=Ff(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ff(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function SM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Nf=class{static triangulate(e,t,i=2){return aM(e,t,i)}},Ai=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Bg(e),Og(i,e);let o=e.length;t.forEach(Bg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Og(i,t[l]);let a=Nf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Bg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Og(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ki=class n extends tt{constructor(e=new gi([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:wM,v,b=!1,A,E,D,L;m&&(v=m.getSpacedPoints(u),b=!0,f=!1,A=m.computeFrenetFrames(u,!1),E=new _,D=new _,L=new _),f||(g=0,h=0,p=0,x=0);let w=a.extractPoints(c),M=w.shape,R=w.holes;if(!Ai.isClockWise(M)){M=M.reverse();for(let V=0,z=R.length;V<z;V++){let G=R[V];Ai.isClockWise(G)&&(R[V]=G.reverse())}}function O(V){let G=10000000000000001e-36,W=V[0];for(let I=1;I<=V.length;I++){let Z=I%V.length,Y=V[Z],de=Y.x-W.x,pe=Y.y-W.y,C=de*de+pe*pe,T=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(W.x),Math.abs(W.y)),q=G*T*T;if(C<=q){V.splice(Z,1),I--;continue}W=Y}}O(M),R.forEach(O);let X=R.length,F=M;for(let V=0;V<X;V++){let z=R[V];M=M.concat(z)}function k(V,z,G){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(z,G)}let j=M.length;function U(V,z,G){let W,I,Z,Y=V.x-z.x,de=V.y-z.y,pe=G.x-V.x,C=G.y-V.y,T=Y*Y+de*de,q=Y*C-de*pe;if(Math.abs(q)>Number.EPSILON){let se=Math.sqrt(T),he=Math.sqrt(pe*pe+C*C),ie=z.x-de/se,Te=z.y+Y/se,be=G.x-C/he,Re=G.y+pe/he,Oe=((be-ie)*C-(Re-Te)*pe)/(Y*C-de*pe);W=ie+Y*Oe-V.x,I=Te+de*Oe-V.y;let ge=W*W+I*I;if(ge<=2)return new ve(W,I);Z=Math.sqrt(ge/2)}else{let se=!1;Y>Number.EPSILON?pe>Number.EPSILON&&(se=!0):Y<-Number.EPSILON?pe<-Number.EPSILON&&(se=!0):Math.sign(de)===Math.sign(C)&&(se=!0),se?(W=-de,I=Y,Z=Math.sqrt(T)):(W=Y,I=de,Z=Math.sqrt(T/2))}return new ve(W/Z,I/Z)}let re=[];for(let V=0,z=F.length,G=z-1,W=V+1;V<z;V++,G++,W++)G===z&&(G=0),W===z&&(W=0),re[V]=U(F[V],F[G],F[W]);let ne=[],me,we=re.concat();for(let V=0,z=X;V<z;V++){let G=R[V];me=[];for(let W=0,I=G.length,Z=I-1,Y=W+1;W<I;W++,Z++,Y++)Z===I&&(Z=0),Y===I&&(Y=0),me[W]=U(G[W],G[Z],G[Y]);ne.push(me),we=we.concat(me)}let Ee;if(g===0)Ee=Ai.triangulateShape(F,R);else{let V=[],z=[];for(let G=0;G<g;G++){let W=G/g,I=h*Math.cos(W*Math.PI/2),Z=p*Math.sin(W*Math.PI/2)+x;for(let Y=0,de=F.length;Y<de;Y++){let pe=k(F[Y],re[Y],Z);Ue(pe.x,pe.y,-I),W===0&&V.push(pe)}for(let Y=0,de=X;Y<de;Y++){let pe=R[Y];me=ne[Y];let C=[];for(let T=0,q=pe.length;T<q;T++){let se=k(pe[T],me[T],Z);Ue(se.x,se.y,-I),W===0&&C.push(se)}W===0&&z.push(C)}}Ee=Ai.triangulateShape(V,z)}let Ce=Ee.length,Le=p+x;for(let V=0;V<j;V++){let z=f?k(M[V],we[V],Le):M[V];b?(D.copy(A.normals[0]).multiplyScalar(z.x),E.copy(A.binormals[0]).multiplyScalar(z.y),L.copy(v[0]).add(D).add(E),Ue(L.x,L.y,L.z)):Ue(z.x,z.y,0)}for(let V=1;V<=u;V++)for(let z=0;z<j;z++){let G=f?k(M[z],we[z],Le):M[z];b?(D.copy(A.normals[V]).multiplyScalar(G.x),E.copy(A.binormals[V]).multiplyScalar(G.y),L.copy(v[V]).add(D).add(E),Ue(L.x,L.y,L.z)):Ue(G.x,G.y,d/u*V)}for(let V=g-1;V>=0;V--){let z=V/g,G=h*Math.cos(z*Math.PI/2),W=p*Math.sin(z*Math.PI/2)+x;for(let I=0,Z=F.length;I<Z;I++){let Y=k(F[I],re[I],W);Ue(Y.x,Y.y,d+G)}for(let I=0,Z=R.length;I<Z;I++){let Y=R[I];me=ne[I];for(let de=0,pe=Y.length;de<pe;de++){let C=k(Y[de],me[de],W);b?Ue(C.x,C.y+v[u-1].y,v[u-1].x+G):Ue(C.x,C.y,d+G)}}}te(),oe();function te(){let V=r.length/3;if(f){let z=0,G=j*z;for(let W=0;W<Ce;W++){let I=Ee[W];Me(I[2]+G,I[1]+G,I[0]+G)}z=u+g*2,G=j*z;for(let W=0;W<Ce;W++){let I=Ee[W];Me(I[0]+G,I[1]+G,I[2]+G)}}else{for(let z=0;z<Ce;z++){let G=Ee[z];Me(G[2],G[1],G[0])}for(let z=0;z<Ce;z++){let G=Ee[z];Me(G[0]+j*u,G[1]+j*u,G[2]+j*u)}}i.addGroup(V,r.length/3-V,0)}function oe(){let V=r.length/3,z=0;_e(F,z),z+=F.length;for(let G=0,W=R.length;G<W;G++){let I=R[G];_e(I,z),z+=I.length}i.addGroup(V,r.length/3-V,1)}function _e(V,z){let G=V.length;for(;--G>=0;){let W=G,I=G-1;I<0&&(I=V.length-1);for(let Z=0,Y=u+g*2;Z<Y;Z++){let de=j*Z,pe=j*(Z+1),C=z+W+de,T=z+I+de,q=z+I+pe,se=z+W+pe;We(C,T,q,se)}}}function Ue(V,z,G){l.push(V),l.push(z),l.push(G)}function Me(V,z,G){Ve(V),Ve(z),Ve(G);let W=r.length/3,I=y.generateTopUV(i,r,W-3,W-2,W-1);S(I[0]),S(I[1]),S(I[2])}function We(V,z,G,W){Ve(V),Ve(z),Ve(W),Ve(z),Ve(G),Ve(W);let I=r.length/3,Z=y.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);S(Z[0]),S(Z[1]),S(Z[3]),S(Z[1]),S(Z[2]),S(Z[3])}function Ve(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function S(V){s.push(V.x),s.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return TM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Df[r.type]().fromJSON(r)),new n(i,e.options)}},wM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-d),new ve(f,1-p),new ve(x,1-m)]:[new ve(a,1-l),new ve(u,1-d),new ve(h,1-p),new ve(g,1-m)]}};function TM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ot=class n extends go{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Qa=class n extends tt{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=nt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new _,f=new ve,h=new _,p=new _,x=new _,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let v=i+y*u*r,b=Math.sin(v),A=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*b,d.y=e[E].y,d.z=e[E].x*A,o.push(d.x,d.y,d.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let D=l[3*E+0]*b,L=l[3*E+1],w=l[3*E+0]*A;c.push(D,L,w)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let b=v+y*e.length,A=b,E=b+e.length,D=b+e.length+1,L=b+1;s.push(A,E,L),s.push(D,L,E)}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},xi=class n extends go{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},rn=class n extends tt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*f-o;for(let v=0;v<c;v++){let b=v*d-s;p.push(b,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,b=y+c*(m+1),A=y+1+c*(m+1),E=y+1+c*m;h.push(v,b,E),h.push(b,A,E)}this.setIndex(h),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vo=class n extends tt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new _,p=new ve;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,v=y,b=y+i+1,A=y+i+2,E=y+1;a.push(v,b,E),a.push(b,A,E)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$a=class n extends tt{constructor(e=new gi([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(s,3)),this.setAttribute("uv",new ze(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;Ai.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Ai.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=Ai.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];h=h.concat(y)}for(let g=0,m=h.length;g<m;g++){let y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],v=y[0]+d,b=y[1]+d,A=y[2]+d;i.push(v,b,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return AM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function AM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var ti=class n extends tt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new _,f=new _,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],v=m/i,b=0;m===0&&o===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let E=A/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(E+b,1-v),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let v=u[m][y+1],b=u[m][y],A=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&h.push(v,b,E),(m!==i-1||l<Math.PI)&&h.push(b,A,E)}this.setIndex(h),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ls=class n extends go{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},yi=class n extends tt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new _,d=new _,f=new _;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,g=(r+1)*(h-1)+p-1,m=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ar=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new _,s=new _;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,y),zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var yt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ka=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pn=class extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},lu=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cu=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function EM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends cs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cf,endingEnd:Cf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rf:s=e,a=2*t-i;break;case If:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rf:o=e,l=2*i-t;break;case If:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-h)*g+(1.5+h)*x+.5*p,b=h*g-h*x;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+y*o[c+A]+v*o[l+A]+b*o[d+A];return s}},hu=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},du=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vc(t,this.TimeBufferType),this.values=Vc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vc(e.times,Array),values:Vc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case Yc:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&EM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Gc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Yc;var Er=class extends Wn{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Ea;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends Wn{constructor(e,t,i,r){super(e,t,i,r)}};fu.prototype.ValueTypeName="color";var pu=class extends Wn{constructor(e,t,i,r){super(e,t,i,r)}};pu.prototype.ValueTypeName="number";var mu=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Xe.slerpFlat(s,0,o,c-a,o,c,l);return s}},el=class extends Wn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Wn{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Ea;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends Wn{constructor(e,t,i,r){super(e,t,i,r)}};gu.prototype.ValueTypeName="vector";var Hc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},xu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},V0=new xu,_o=class{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=new WeakMap,yu=class extends _o{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Ks.get(o);d===void 0&&(d=[],Ks.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=so("img");function l(){u(),t&&t(this);let d=Ks.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Ks.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Hc.remove(`image:${e}`);let f=Ks.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Ks.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ni=class extends _o{constructor(e){super(e)}load(e,t,i,r){let s=new yn,o=new yu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},bo=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},tl=class extends bo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tf=new lt,Vg=new _,kg=new _,vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kg),t.updateMatrixWorld(),Tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gg=new lt,ba=new _,Af=new _,Bf=class extends vu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Af.copy(i.position),Af.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Af),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),Gg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gg,i.coordinateSystem,i.reversedDepth)}},nl=class extends bo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},il=class extends La{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Of=class extends vu{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rl=class extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _u=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rp="\\[\\]\\.:\\/",CM=new RegExp("["+rp+"]","g"),sp="[^"+rp+"]",RM="[^"+rp.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",sp),PM=/(WCOD+)?/.source.replace("WCOD",RM),LM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sp),DM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sp),UM=new RegExp("^"+IM+PM+LM+DM+"$"),FM=["material","materials","bones","map"],zf=class{constructor(e,t,i){let r=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CM,"")}static parseTrackName(e){let t=UM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);FM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=zf;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FC=new Float32Array(1);var Hg=new lt,er=class{constructor(e,t,i=0,r=1/0){this.ray=new Qi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hg),this}intersectObject(e,t=!0,i=[]){return Vf(e,this,i,t),i.sort(Wg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vf(e[r],this,i,t);return i.sort(Wg),i}};function Wg(n,e){return n.distance-e.distance}function Vf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Vf(s[o],e,t,!0)}}var qg=new _,kc=new _,eo=new _,to=new _,Ef=new _,NM=new _,BM=new _,sl=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qg.subVectors(e,this.start),kc.subVectors(this.end,this.start);let i=kc.dot(kc),s=kc.dot(qg)/i;return t&&(s=nt(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=NM,i=BM){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;eo.subVectors(c,a),to.subVectors(u,l),Ef.subVectors(a,l);let d=eo.dot(eo),f=to.dot(to),h=to.dot(Ef);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=nt(o,0,1);else{let p=eo.dot(Ef);if(f<=r)o=0,s=nt(-p/d,0,1);else{let x=eo.dot(to),g=d*f-x*x;g!==0?s=nt((x*h-p*f)/g,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=nt(-p/d,0,1)):o>1&&(o=1,s=nt((x-p)/d,0,1))}}return t.copy(a).add(eo.multiplyScalar(s)),i.copy(l).add(to.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function op(n,e,t,i){let r=OM(i);switch(t){case jf:return n*e;case Fu:return n*e/r.components*r.byteLength;case Nu:return n*e/r.components*r.byteLength;case Qf:return n*e*2/r.components*r.byteLength;case Bu:return n*e*2/r.components*r.byteLength;case Jf:return n*e*3/r.components*r.byteLength;case Cn:return n*e*4/r.components*r.byteLength;case Ou:return n*e*4/r.components*r.byteLength;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hl:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:case Gu:return Math.max(n,16)*Math.max(e,8)/4;case zu:case ku:return Math.max(n,8)*Math.max(e,8)/2;case Hu:case Wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case oh:case ah:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ch:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OM(n){switch(n){case qn:case qf:return{byteLength:1,components:1};case Mo:case Xf:case Ii:return{byteLength:2,components:1};case Du:case Uu:return{byteLength:2,components:4};case Rr:case Lu:case vi:return{byteLength:4,components:1};case Yf:case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function HM(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
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
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
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
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,r1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f1=`#define PI 3.141592653589793
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m1=`vec3 transformedNormal = objectNormal;
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
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
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
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
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
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k1=`PhysicalMaterial material;
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
#endif`,G1=`struct PhysicalMaterial {
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
}`,H1=`
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
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
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K1=`#if defined( USE_POINTS_UV )
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
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IS=`#ifdef USE_SKINNING
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
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
}`,QS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`uniform float scale;
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#include <common>
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#define LAMBERT
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
}`,ow=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,lw=`#define MATCAP
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
}`,cw=`#define NORMAL
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
}`,uw=`#define NORMAL
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
}`,hw=`#define PHONG
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
}`,dw=`#define PHONG
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
}`,fw=`#define STANDARD
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
}`,pw=`#define STANDARD
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
}`,mw=`#define TOON
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
}`,gw=`#define TOON
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
}`,xw=`uniform float size;
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
}`,yw=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,_w=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:XM,alphamap_pars_fragment:YM,alphatest_fragment:ZM,alphatest_pars_fragment:jM,aomap_fragment:JM,aomap_pars_fragment:QM,batching_pars_vertex:$M,batching_vertex:KM,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:h1,color_vertex:d1,common:f1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:v1,colorspace_fragment:_1,colorspace_pars_fragment:b1,envmap_fragment:M1,envmap_common_pars_fragment:S1,envmap_pars_fragment:w1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:N1,envmap_vertex:A1,fog_vertex:E1,fog_pars_vertex:C1,fog_fragment:R1,fog_pars_fragment:I1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:L1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:U1,lights_pars_begin:F1,lights_toon_fragment:B1,lights_toon_pars_fragment:O1,lights_phong_fragment:z1,lights_phong_pars_fragment:V1,lights_physical_fragment:k1,lights_physical_pars_fragment:G1,lights_fragment_begin:H1,lights_fragment_maps:W1,lights_fragment_end:q1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:j1,map_fragment:J1,map_pars_fragment:Q1,map_particle_fragment:$1,map_particle_pars_fragment:K1,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:hS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:xS,packing:yS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:bS,dithering_pars_fragment:MS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:AS,shadowmap_vertex:ES,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:IS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:DS,specularmap_pars_fragment:US,tonemapping_fragment:FS,tonemapping_pars_fragment:NS,transmission_fragment:BS,transmission_pars_fragment:OS,uv_pars_fragment:zS,uv_pars_vertex:VS,uv_vertex:kS,worldpos_vertex:GS,background_vert:HS,background_frag:WS,backgroundCube_vert:qS,backgroundCube_frag:XS,cube_vert:YS,cube_frag:ZS,depth_vert:jS,depth_frag:JS,distanceRGBA_vert:QS,distanceRGBA_frag:$S,equirect_vert:KS,equirect_frag:ew,linedashed_vert:tw,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:rw,meshlambert_vert:sw,meshlambert_frag:ow,meshmatcap_vert:aw,meshmatcap_frag:lw,meshnormal_vert:cw,meshnormal_frag:uw,meshphong_vert:hw,meshphong_frag:dw,meshphysical_vert:fw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:xw,points_frag:yw,shadow_vert:vw,shadow_frag:_w,sprite_vert:bw,sprite_frag:Mw},Ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Pi={basic:{uniforms:vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([Ne.common,Ne.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([Ne.lights,Ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Pi.physical={uniforms:vn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var mh={r:0,b:0,g:0},fs=new $t,Sw=new lt;function ww(n,e,t,i,r,s,o){let a=new Fe(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function x(v){let b=!1,A=p(v);A===null?m(a,l):A&&A.isColor&&(m(A,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){let A=p(b);A&&(A.isCubeTexture||A.mapping===al)?(u===void 0&&(u=new He(new it(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ds(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fs.copy(b.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(fs)),u.material.toneMapped=pt.getTransfer(A.colorSpace)!==Mt,(d!==A||f!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new rn(2,2),new fn({name:"BackgroundMaterial",uniforms:ds(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=pt.getTransfer(A.colorSpace)!==Mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(mh,np(n)),i.buffers.color.setClear(mh.r,mh.g,mh.b,b,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:y}}function Tw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,R,N,O,X){let F=!1,k=d(O,N,R);s!==k&&(s=k,c(s.object)),F=h(M,O,N,X),F&&p(M,O,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,b(M,R,N,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,R,N){let O=N.wireframe===!0,X=i[M.id];X===void 0&&(X={},i[M.id]=X);let F=X[R.id];F===void 0&&(F={},X[R.id]=F);let k=F[O];return k===void 0&&(k=f(l()),F[O]=k),k}function f(M){let R=[],N=[],O=[];for(let X=0;X<t;X++)R[X]=0,N[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,R,N,O){let X=s.attributes,F=R.attributes,k=0,j=N.getAttributes();for(let U in j)if(j[U].location>=0){let ne=X[U],me=F[U];if(me===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ne===void 0||ne.attribute!==me||me&&ne.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function p(M,R,N,O){let X={},F=R.attributes,k=0,j=N.getAttributes();for(let U in j)if(j[U].location>=0){let ne=F[U];ne===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));let me={};me.attribute=ne,ne&&ne.data&&(me.data=ne.data),X[U]=me,k++}s.attributes=X,s.attributesNum=k,s.index=O}function x(){let M=s.newAttributes;for(let R=0,N=M.length;R<N;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){let N=s.newAttributes,O=s.enabledAttributes,X=s.attributeDivisors;N[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),X[M]!==R&&(n.vertexAttribDivisor(M,R),X[M]=R)}function y(){let M=s.newAttributes,R=s.enabledAttributes;for(let N=0,O=R.length;N<O;N++)R[N]!==M[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function v(M,R,N,O,X,F,k){k===!0?n.vertexAttribIPointer(M,R,N,X,F):n.vertexAttribPointer(M,R,N,O,X,F)}function b(M,R,N,O){x();let X=O.attributes,F=N.getAttributes(),k=R.defaultAttributeValues;for(let j in F){let U=F[j];if(U.location>=0){let re=X[j];if(re===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let ne=re.normalized,me=re.itemSize,we=e.get(re);if(we===void 0)continue;let Ee=we.buffer,Ce=we.type,Le=we.bytesPerElement,te=Ce===n.INT||Ce===n.UNSIGNED_INT||re.gpuType===Lu;if(re.isInterleavedBufferAttribute){let oe=re.data,_e=oe.stride,Ue=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<U.locationSize;Me++)g(U.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Me=0;Me<U.locationSize;Me++)v(U.location+Me,me/U.locationSize,Ce,ne,_e*Le,(Ue+me/U.locationSize*Me)*Le,te)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<U.locationSize;oe++)m(U.location+oe,re.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<U.locationSize;oe++)g(U.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let oe=0;oe<U.locationSize;oe++)v(U.location+oe,me/U.locationSize,Ce,ne,me*Le,me/U.locationSize*oe*Le,te)}}else if(k!==void 0){let ne=k[j];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(U.location,ne);break;case 3:n.vertexAttrib3fv(U.location,ne);break;case 4:n.vertexAttrib4fv(U.location,ne);break;default:n.vertexAttrib1fv(U.location,ne)}}}}y()}function A(){L();for(let M in i){let R=i[M];for(let N in R){let O=R[N];for(let X in O)u(O[X].object),delete O[X];delete R[N]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let R=i[M.id];for(let N in R){let O=R[N];for(let X in O)u(O[X].object),delete O[X];delete R[N]}delete i[M.id]}function D(M){for(let R in i){let N=i[R];if(N[M.id]===void 0)continue;let O=N[M.id];for(let X in O)u(O[X].object),delete O[X];delete N[M.id]}}function L(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Aw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ew(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Cn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==qn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==vi&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:A,maxSamples:E}}function Cw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Dn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let y=s?0:i,v=y*4,b=m.clippingState||null;l.value=b,b=u(p,f,v,h);for(let A=0;A!==v;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,b=h;v!==x;++v,b+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Rw(n){let e=new WeakMap;function t(o,a){return a===ir?o.mapping=us:a===Iu&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ir||a===Iu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ao=4,k0=[.125,.215,.35,.446,.526,.582],gs=20,ap=new il,G0=new Fe,lp=null,cp=0,up=0,hp=!1,ms=(1+Math.sqrt(5))/2,To=1/ms,H0=[new _(-ms,To,0),new _(ms,To,0),new _(-To,0,ms),new _(To,0,ms),new _(0,ms,-To),new _(0,ms,To),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],Iw=new _,Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Iw}=s;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=hp,e.scissorTest=!1,gh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ii,format:Cn,colorSpace:is,depthBuffer:!1},r=W0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pw(s)),this._blurMaterial=Lw(s,e,t)}return r}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,i,r,s){let l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(G0),d.toneMapping=nr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new Et({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new He(new it,x),m=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,m=!0):(x.color.copy(G0),m=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let A=this._cubeSize;gh(r,b*A,v>2?A:0,A,A),d.setRenderTarget(r),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===us||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;gh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ap)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=H0[(r-s-1)%H0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new He(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*gs-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):gs;g>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);let m=[],y=0;for(let D=0;D<gs;++D){let L=D/x,w=Math.exp(-L*L/2);m.push(w),D===0?y+=w:D<g&&(y+=2*w)}for(let D=0;D<m.length;D++)m[D]=m[D]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let b=this._sizeLods[r],A=3*b*(r>v-Ao?r-v+Ao:0),E=4*(this._cubeSize-b);gh(t,A,E,3*b,2*b),l.setRenderTarget(t),l.render(d,ap)}};function Pw(n){let e=[],t=[],i=[],r=n,s=n-Ao+1+k0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ao?l=k0[o-n+Ao-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*h),v=new Float32Array(g*p*h),b=new Float32Array(m*p*h);for(let E=0;E<h;E++){let D=E%3*2/3-1,L=E>2?0:-1,w=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];y.set(w,x*p*E),v.set(f,g*p*E);let M=[E,E,E,E,E,E];b.set(M,m*p*E)}let A=new tt;A.setAttribute("position",new mt(y,x)),A.setAttribute("uv",new mt(v,g)),A.setAttribute("faceIndex",new mt(b,m)),e.push(A),r>Ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function W0(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lw(n,e,t){let i=new Float32Array(gs),r=new _(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function q0(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function X0(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function bp(){return`

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
	`}function Dw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ir||l===Iu,u=l===us||l===hs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Co(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Co(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Uw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fw(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let v=0,b=y.length;v<b;v+=3){let A=y[v+0],E=y[v+1],D=y[v+2];f.push(A,E,E,D,D,A)}}else if(p!==void 0){let y=p.array;x=p.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let A=v+0,E=v+1,D=v+2;f.push(A,E,E,D,D,A)}}else return;let g=new(tp(f)?Pa:rs)(f,1);g.version=x;let m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Nw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*x[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Bw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ow(n,e,t){let i=new WeakMap,r=new dt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;h===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*d),D=new Ia(E,b,A,d);D.type=vi,D.needsUpdate=!0;let L=v*4;for(let M=0;M<d;M++){let R=g[M],N=m[M],O=y[M],X=b*A*4*M;for(let F=0;F<R.count;F++){let k=F*L;h===!0&&(r.fromBufferAttribute(R,F),E[X+k+0]=r.x,E[X+k+1]=r.y,E[X+k+2]=r.z,E[X+k+3]=0),p===!0&&(r.fromBufferAttribute(N,F),E[X+k+4]=r.x,E[X+k+5]=r.y,E[X+k+6]=r.z,E[X+k+7]=0),x===!0&&(r.fromBufferAttribute(O,F),E[X+k+8]=r.x,E[X+k+9]=r.y,E[X+k+10]=r.z,E[X+k+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:D,size:new ve(b,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function zw(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var hx=new yn,Y0=new ka(1,1),dx=new Ia,fx=new Qc,px=new Da,Z0=[],j0=[],J0=new Float32Array(16),Q0=new Float32Array(9),$0=new Float32Array(4);function Ro(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Z0[r];if(s===void 0&&(s=new Float32Array(r),Z0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vh(n,e){let t=j0[e];t===void 0&&(t=new Int32Array(e),j0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function Gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function Hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function Ww(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;$0.set(i),n.uniformMatrix2fv(this.addr,!1,$0),an(t,i)}}function qw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Q0.set(i),n.uniformMatrix3fv(this.addr,!1,Q0),an(t,i)}}function Xw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;J0.set(i),n.uniformMatrix4fv(this.addr,!1,J0),an(t,i)}}function Yw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function Jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function Qw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $w(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function eT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function tT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Y0.compareFunction=$f,s=Y0):s=hx,t.setTexture2D(e||s,r)}function nT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fx,r)}function iT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||px,r)}function rT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dx,r)}function sT(n){switch(n){case 5126:return Vw;case 35664:return kw;case 35665:return Gw;case 35666:return Hw;case 35674:return Ww;case 35675:return qw;case 35676:return Xw;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return jw;case 35669:case 35673:return Jw;case 5125:return Qw;case 36294:return $w;case 36295:return Kw;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(n,e){n.uniform1fv(this.addr,e)}function aT(n,e){let t=Ro(e,this.size,2);n.uniform2fv(this.addr,t)}function lT(n,e){let t=Ro(e,this.size,3);n.uniform3fv(this.addr,t)}function cT(n,e){let t=Ro(e,this.size,4);n.uniform4fv(this.addr,t)}function uT(n,e){let t=Ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hT(n,e){let t=Ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dT(n,e){let t=Ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fT(n,e){n.uniform1iv(this.addr,e)}function pT(n,e){n.uniform2iv(this.addr,e)}function mT(n,e){n.uniform3iv(this.addr,e)}function gT(n,e){n.uniform4iv(this.addr,e)}function xT(n,e){n.uniform1uiv(this.addr,e)}function yT(n,e){n.uniform2uiv(this.addr,e)}function vT(n,e){n.uniform3uiv(this.addr,e)}function _T(n,e){n.uniform4uiv(this.addr,e)}function bT(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hx,s[o])}function MT(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fx,s[o])}function ST(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||px,s[o])}function wT(n,e,t){let i=this.cache,r=e.length,s=vh(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dx,s[o])}function TT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return xT;case 36294:return yT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return wT}}var fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sT(t.type)}},pp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TT(t.type)}},mp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},dp=/(\w+)(\])?(\[|\.)?/g;function K0(n,e){n.seq.push(e),n.map[e.id]=e}function AT(n,e,t){let i=n.name,r=i.length;for(dp.lastIndex=0;;){let s=dp.exec(i),o=dp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){K0(t,c===void 0?new fp(a,n,e):new pp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mp(a),K0(t,d)),t=d}}}var Eo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ex(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ET=37297,CT=0;function RT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var tx=new rt;function IT(n){pt._getMatrix(tx,pt.workingColorSpace,n);let e=`mat3( ${tx.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Ca:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RT(n.getShaderSource(e),a)}else return s}function PT(n,e){let t=IT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function LT(n,e){let t;switch(e){case m0:t="Linear";break;case g0:t="Reinhard";break;case x0:t="Cineon";break;case Ru:t="ACESFilmic";break;case v0:t="AgX";break;case _0:t="Neutral";break;case y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xh=new _;function DT(){pt.getLuminanceCoefficients(xh);let n=xh.x.toFixed(4),e=xh.y.toFixed(4),t=xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function FT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fl(n){return n!==""}function ix(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(n){return n.replace(BT,zT)}var OT=new Map;function zT(n,e){let t=at[e];if(t===void 0){let i=OT.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gp(t)}var VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(n){return n.replace(VT,kT)}function kT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ox(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case hs:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cu:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case p0:e="ENVMAP_BLENDING_ADD";break}return e}function XT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function YT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GT(t),c=HT(t),u=WT(t),d=qT(t),f=XT(t),h=UT(t),p=FT(s),x=r.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fl).join(`
`),m.length>0&&(m+=`
`)):(g=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),m=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?at.tonemapping_pars_fragment:"",t.toneMapping!==nr?LT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,PT("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),o=gp(o),o=ix(o,t),o=rx(o,t),a=gp(a),a=ix(a,t),a=rx(a,t),o=sx(o),a=sx(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+g+o,b=y+m+a,A=ex(r,r.VERTEX_SHADER,v),E=ex(r,r.FRAGMENT_SHADER,b);r.attachShader(x,A),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(R){if(n.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(A)||"",X=r.getShaderInfoLog(E)||"",F=N.trim(),k=O.trim(),j=X.trim(),U=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,E);else{let ne=nx(r,A,"vertex"),me=nx(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ne+`
`+me)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||j==="")&&(re=!1);re&&(R.diagnostics={runnable:U,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:j,prefix:m}})}r.deleteShader(A),r.deleteShader(E),L=new Eo(r,x),w=NT(r,x)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,ET)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var ZT=0,xp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yp(e),t.set(e,i)),i}},yp=class{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}};function jT(n,e,t,i,r,s,o){let a=new lo,l=new xp,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,R,N,O){let X=N.fog,F=O.geometry,k=w.isMeshStandardMaterial?N.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),U=j&&j.mapping===al?j.image.height:null,re=p[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,me=ne!==void 0?ne.length:0,we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let Ee,Ce,Le,te;if(re){let $e=Pi[re];Ee=$e.vertexShader,Ce=$e.fragmentShader}else Ee=w.vertexShader,Ce=w.fragmentShader,l.update(w),Le=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);let oe=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,We=!!w.map,Ve=!!w.matcap,S=!!j,V=!!w.aoMap,z=!!w.lightMap,G=!!w.bumpMap,W=!!w.normalMap,I=!!w.displacementMap,Z=!!w.emissiveMap,Y=!!w.metalnessMap,de=!!w.roughnessMap,pe=w.anisotropy>0,C=w.clearcoat>0,T=w.dispersion>0,q=w.iridescence>0,se=w.sheen>0,he=w.transmission>0,ie=pe&&!!w.anisotropyMap,Te=C&&!!w.clearcoatMap,be=C&&!!w.clearcoatNormalMap,Re=C&&!!w.clearcoatRoughnessMap,Oe=q&&!!w.iridescenceMap,ge=q&&!!w.iridescenceThicknessMap,Se=se&&!!w.sheenColorMap,K=se&&!!w.sheenRoughnessMap,J=!!w.specularMap,fe=!!w.specularColorMap,Ie=!!w.specularIntensityMap,B=he&&!!w.transmissionMap,ue=he&&!!w.thicknessMap,xe=!!w.gradientMap,ye=!!w.alphaMap,ce=w.alphaTest>0,ee=!!w.alphaHash,Pe=!!w.extensions,Ye=nr;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let Ge={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:Ce,defines:w.defines,customVertexShaderID:Le,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:is,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:Ve,envMap:S,envMapMode:S&&j.mapping,envMapCubeUVHeight:U,aoMap:V,lightMap:z,bumpMap:G,normalMap:W,displacementMap:f&&I,emissiveMap:Z,normalMapObjectSpace:W&&w.normalMapType===w0,normalMapTangentSpace:W&&w.normalMapType===fh,metalnessMap:Y,roughnessMap:de,anisotropy:pe,anisotropyMap:ie,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:be,clearcoatRoughnessMap:Re,dispersion:T,iridescence:q,iridescenceMap:Oe,iridescenceThicknessMap:ge,sheen:se,sheenColorMap:Se,sheenRoughnessMap:K,specularMap:J,specularColorMap:fe,specularIntensityMap:Ie,transmission:he,transmissionMap:B,thicknessMap:ue,gradientMap:xe,opaque:w.transparent===!1&&w.blending===ts&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:ce,alphaHash:ee,combine:w.combine,mapUv:We&&x(w.map.channel),aoMapUv:V&&x(w.aoMap.channel),lightMapUv:z&&x(w.lightMap.channel),bumpMapUv:G&&x(w.bumpMap.channel),normalMapUv:W&&x(w.normalMap.channel),displacementMapUv:I&&x(w.displacementMap.channel),emissiveMapUv:Z&&x(w.emissiveMap.channel),metalnessMapUv:Y&&x(w.metalnessMap.channel),roughnessMapUv:de&&x(w.roughnessMap.channel),anisotropyMapUv:ie&&x(w.anisotropyMap.channel),clearcoatMapUv:Te&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:K&&x(w.sheenRoughnessMap.channel),specularMapUv:J&&x(w.specularMap.channel),specularColorMapUv:fe&&x(w.specularColorMap.channel),specularIntensityMapUv:Ie&&x(w.specularIntensityMap.channel),transmissionMapUv:B&&x(w.transmissionMap.channel),thicknessMapUv:ue&&x(w.thicknessMap.channel),alphaMapUv:ye&&x(w.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(W||pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(We||ye),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:Z&&w.emissiveMap.isVideoTexture===!0&&pt.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===un,flipSided:w.side===An,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){let M=p[w.type],R;if(M){let N=Pi[M];R=ph.clone(N.uniforms)}else R=w.uniforms;return R}function A(w,M){let R;for(let N=0,O=u.length;N<O;N++){let X=u[N];if(X.cacheKey===M){R=X,++R.usedTimes;break}}return R===void 0&&(R=new YT(n,M,w,s),u.push(R)),R}function E(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function D(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:L}}function JT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function QT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ax(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||QT),i.length>1&&i.sort(f||ax),r.length>1&&r.sort(f||ax)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $T(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new lx,n.set(i,[o])):r>=s.length?(o=new lx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Fe};break;case"SpotLight":t={position:new _,direction:new _,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function eA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tA=0;function nA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iA(n){let e=new KT,t=eA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let r=new _,s=new lt,o=new lt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,y=0,v=0,b=0,A=0,E=0,D=0;c.sort(nA);for(let w=0,M=c.length;w<M;w++){let R=c[w],N=R.color,O=R.intensity,X=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],O);D++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,U=t.get(R);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=R.shadow.matrix,y++}i.directional[h]=k,h++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(O),k.distance=X,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[x]=k;let j=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=j.matrix,R.castShadow){let U=t.get(R);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=F,b++}x++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(N).multiplyScalar(O),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=k,g++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let j=R.shadow,U=t.get(R);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=R.shadow.matrix,v++}i.point[p]=k,p++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(O),k.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==b||L.numSpotMaps!==A||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=D,L.directionalLength=h,L.pointLength=p,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=b,L.numSpotMaps=A,L.numLightProbes=D,i.version=tA++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(v.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(v.isRectAreaLight){let b=i.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function cx(n){let e=new iA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rA(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new cx(n),e.set(r,[a])):s>=o.length?(a=new cx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
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
}`;function aA(n,e,t){let i=new po,r=new ve,s=new ve,o=new dt,a=new lu({depthPacking:S0}),l=new cu,c={},u=t.maxTextureSize,d={[pi]:An,[An]:pi,[un]:un},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:sA,fragmentShader:oA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new tt;p.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let m=this.type;this.render=function(E,D,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(tr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==Ri&&this.type===Ri,X=m===Ri&&this.type!==Ri;for(let F=0,k=E.length;F<k;F++){let j=E[F],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let re=U.getFrameExtents();if(r.multiply(re),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,U.mapSize.y=s.y)),U.map===null||O===!0||X===!0){let me=this.type!==Ri?{minFilter:dn,magFilter:dn}:{};U.map!==null&&U.map.dispose(),U.map=new Fn(r.x,r.y,me),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let ne=U.getViewportCount();for(let me=0;me<ne;me++){let we=U.getViewport(me);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),N.viewport(o),U.updateMatrices(j,me),i=U.getFrustum(),b(D,L,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===Ri&&y(U,L),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,M,R)};function y(E,D){let L=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,L,h,x,null)}function v(E,D,L,w){let M=null,R=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=M.uuid,O=D.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let F=X[O];F===void 0&&(F=M.clone(),X[O]=F,D.addEventListener("dispose",A)),M=F}if(M.visible=D.visible,M.wireframe=D.wireframe,w===Ri?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:d[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=n.properties.get(M);N.light=L}return M}function b(E,D,L,w,M){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let O=e.update(E),X=E.material;if(Array.isArray(X)){let F=O.groups;for(let k=0,j=F.length;k<j;k++){let U=F[k],re=X[U.materialIndex];if(re&&re.visible){let ne=v(E,re,w,M);E.onBeforeShadow(n,E,D,L,O,ne,U),n.renderBufferDirect(L,null,O,ne,E,U),E.onAfterShadow(n,E,D,L,O,ne,U)}}}else if(X.visible){let F=v(E,X,w,M);E.onBeforeShadow(n,E,D,L,O,F,null),n.renderBufferDirect(L,null,O,F,E,null),E.onAfterShadow(n,E,D,L,O,F,null)}}let N=E.children;for(let O=0,X=N.length;O<X;O++)b(N[O],D,L,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(let L in c){let w=c[L],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var lA={[bu]:Mu,[Su]:Au,[wu]:Eu,[ns]:Tu,[Mu]:bu,[Au]:Su,[Eu]:wu,[Tu]:ns};function cA(n,e){function t(){let B=!1,ue=new dt,xe=null,ye=new dt(0,0,0,0);return{setMask:function(ce){xe!==ce&&!B&&(n.colorMask(ce,ce,ce,ce),xe=ce)},setLocked:function(ce){B=ce},setClear:function(ce,ee,Pe,Ye,Ge){Ge===!0&&(ce*=Ye,ee*=Ye,Pe*=Ye),ue.set(ce,ee,Pe,Ye),ye.equals(ue)===!1&&(n.clearColor(ce,ee,Pe,Ye),ye.copy(ue))},reset:function(){B=!1,xe=null,ye.set(-1,0,0,0)}}}function i(){let B=!1,ue=!1,xe=null,ye=null,ce=null;return{setReversed:function(ee){if(ue!==ee){let Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;let Ye=ce;ce=null,this.setClear(Ye)}},getReversed:function(){return ue},setTest:function(ee){ee?oe(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ee){xe!==ee&&!B&&(n.depthMask(ee),xe=ee)},setFunc:function(ee){if(ue&&(ee=lA[ee]),ye!==ee){switch(ee){case bu:n.depthFunc(n.NEVER);break;case Mu:n.depthFunc(n.ALWAYS);break;case Su:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case wu:n.depthFunc(n.EQUAL);break;case Tu:n.depthFunc(n.GEQUAL);break;case Au:n.depthFunc(n.GREATER);break;case Eu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ee}},setLocked:function(ee){B=ee},setClear:function(ee){ce!==ee&&(ue&&(ee=1-ee),n.clearDepth(ee),ce=ee)},reset:function(){B=!1,xe=null,ye=null,ce=null,ue=!1}}}function r(){let B=!1,ue=null,xe=null,ye=null,ce=null,ee=null,Pe=null,Ye=null,Ge=null;return{setTest:function($e){B||($e?oe(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function($e){ue!==$e&&!B&&(n.stencilMask($e),ue=$e)},setFunc:function($e,Ct,hn){(xe!==$e||ye!==Ct||ce!==hn)&&(n.stencilFunc($e,Ct,hn),xe=$e,ye=Ct,ce=hn)},setOp:function($e,Ct,hn){(ee!==$e||Pe!==Ct||Ye!==hn)&&(n.stencilOp($e,Ct,hn),ee=$e,Pe=Ct,Ye=hn)},setLocked:function($e){B=$e},setClear:function($e){Ge!==$e&&(n.clearStencil($e),Ge=$e)},reset:function(){B=!1,ue=null,xe=null,ye=null,ce=null,ee=null,Pe=null,Ye=null,Ge=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,v=null,b=null,A=null,E=null,D=new Fe(0,0,0),L=0,w=!1,M=null,R=null,N=null,O=null,X=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=j>=2);let re=null,ne={},me=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ee=new dt().fromArray(me),Ce=new dt().fromArray(we);function Le(B,ue,xe,ye){let ce=new Uint8Array(4),ee=n.createTexture();n.bindTexture(B,ee),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<xe;Pe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ue+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ee}let te={};te[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(ns),G(!1),W(kf),oe(n.CULL_FACE),V(tr);function oe(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function _e(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ue(B,ue){return d[B]!==ue?(n.bindFramebuffer(B,ue),d[B]=ue,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Me(B,ue){let xe=h,ye=!1;if(B){xe=f.get(ue),xe===void 0&&(xe=[],f.set(ue,xe));let ce=B.textures;if(xe.length!==ce.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Pe=ce.length;ee<Pe;ee++)xe[ee]=n.COLOR_ATTACHMENT0+ee;xe.length=ce.length,ye=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,ye=!0);ye&&n.drawBuffers(xe)}function We(B){return p!==B?(n.useProgram(B),p=B,!0):!1}let Ve={[wr]:n.FUNC_ADD,[Jg]:n.FUNC_SUBTRACT,[Qg]:n.FUNC_REVERSE_SUBTRACT};Ve[$g]=n.MIN,Ve[Kg]=n.MAX;let S={[e0]:n.ZERO,[t0]:n.ONE,[n0]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[l0]:n.SRC_ALPHA_SATURATE,[o0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[i0]:n.ONE_MINUS_SRC_COLOR,[qc]:n.ONE_MINUS_SRC_ALPHA,[a0]:n.ONE_MINUS_DST_COLOR,[s0]:n.ONE_MINUS_DST_ALPHA,[c0]:n.CONSTANT_COLOR,[u0]:n.ONE_MINUS_CONSTANT_COLOR,[h0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function V(B,ue,xe,ye,ce,ee,Pe,Ye,Ge,$e){if(B===tr){x===!0&&(_e(n.BLEND),x=!1);return}if(x===!1&&(oe(n.BLEND),x=!0),B!==jg){if(B!==g||$e!==w){if((m!==wr||b!==wr)&&(n.blendEquation(n.FUNC_ADD),m=wr,b=wr),$e)switch(B){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,v=null,A=null,E=null,D.set(0,0,0),L=0,g=B,w=$e}return}ce=ce||ue,ee=ee||xe,Pe=Pe||ye,(ue!==m||ce!==b)&&(n.blendEquationSeparate(Ve[ue],Ve[ce]),m=ue,b=ce),(xe!==y||ye!==v||ee!==A||Pe!==E)&&(n.blendFuncSeparate(S[xe],S[ye],S[ee],S[Pe]),y=xe,v=ye,A=ee,E=Pe),(Ye.equals(D)===!1||Ge!==L)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Ge),D.copy(Ye),L=Ge),g=B,w=!1}function z(B,ue){B.side===un?_e(n.CULL_FACE):oe(n.CULL_FACE);let xe=B.side===An;ue&&(xe=!xe),G(xe),B.blending===ts&&B.transparent===!1?V(tr):V(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let ye=B.stencilWrite;a.setTest(ye),ye&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function W(B){B!==Xg?(oe(n.CULL_FACE),B!==R&&(B===kf?n.cullFace(n.BACK):B===Yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),R=B}function I(B){B!==N&&(k&&n.lineWidth(B),N=B)}function Z(B,ue,xe){B?(oe(n.POLYGON_OFFSET_FILL),(O!==ue||X!==xe)&&(n.polygonOffset(ue,xe),O=ue,X=xe)):_e(n.POLYGON_OFFSET_FILL)}function Y(B){B?oe(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function de(B){B===void 0&&(B=n.TEXTURE0+F-1),re!==B&&(n.activeTexture(B),re=B)}function pe(B,ue,xe){xe===void 0&&(re===null?xe=n.TEXTURE0+F-1:xe=re);let ye=ne[xe];ye===void 0&&(ye={type:void 0,texture:void 0},ne[xe]=ye),(ye.type!==B||ye.texture!==ue)&&(re!==xe&&(n.activeTexture(xe),re=xe),n.bindTexture(B,ue||te[B]),ye.type=B,ye.texture=ue)}function C(){let B=ne[re];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(B){Ee.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ee.copy(B))}function K(B){Ce.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function J(B,ue){let xe=c.get(ue);xe===void 0&&(xe=new WeakMap,c.set(ue,xe));let ye=xe.get(B);ye===void 0&&(ye=n.getUniformBlockIndex(ue,B.name),xe.set(B,ye))}function fe(B,ue){let ye=c.get(ue).get(B);l.get(ue)!==ye&&(n.uniformBlockBinding(ue,ye,B.__bindingPointIndex),l.set(ue,ye))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ne={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,v=null,b=null,A=null,E=null,D=new Fe(0,0,0),L=0,w=!1,M=null,R=null,N=null,O=null,X=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:_e,bindFramebuffer:Ue,drawBuffers:Me,useProgram:We,setBlending:V,setMaterial:z,setFlipSided:G,setCullFace:W,setLineWidth:I,setPolygonOffset:Z,setScissorTest:Y,activeTexture:de,bindTexture:pe,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Oe,texImage3D:ge,updateUBOMapping:J,uniformBlockBinding:fe,texStorage2D:be,texStorage3D:Re,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:ie,compressedTexSubImage3D:Te,scissor:Se,viewport:K,reset:Ie}}function uA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return h?new OffscreenCanvas(C,T):so("canvas")}function x(C,T,q){let se=1,he=pe(C);if((he.width>q||he.height>q)&&(se=q/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ie=Math.floor(se*he.width),Te=Math.floor(se*he.height);d===void 0&&(d=p(ie,Te));let be=T?p(ie,Te):d;return be.width=ie,be.height=Te,be.getContext("2d").drawImage(C,0,0,ie,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ie+"x"+Te+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,T,q,se,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=T;if(T===n.RED&&(q===n.FLOAT&&(ie=n.R32F),q===n.HALF_FLOAT&&(ie=n.R16F),q===n.UNSIGNED_BYTE&&(ie=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.R8UI),q===n.UNSIGNED_SHORT&&(ie=n.R16UI),q===n.UNSIGNED_INT&&(ie=n.R32UI),q===n.BYTE&&(ie=n.R8I),q===n.SHORT&&(ie=n.R16I),q===n.INT&&(ie=n.R32I)),T===n.RG&&(q===n.FLOAT&&(ie=n.RG32F),q===n.HALF_FLOAT&&(ie=n.RG16F),q===n.UNSIGNED_BYTE&&(ie=n.RG8)),T===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RG8UI),q===n.UNSIGNED_SHORT&&(ie=n.RG16UI),q===n.UNSIGNED_INT&&(ie=n.RG32UI),q===n.BYTE&&(ie=n.RG8I),q===n.SHORT&&(ie=n.RG16I),q===n.INT&&(ie=n.RG32I)),T===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),q===n.UNSIGNED_INT&&(ie=n.RGB32UI),q===n.BYTE&&(ie=n.RGB8I),q===n.SHORT&&(ie=n.RGB16I),q===n.INT&&(ie=n.RGB32I)),T===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),q===n.UNSIGNED_INT&&(ie=n.RGBA32UI),q===n.BYTE&&(ie=n.RGBA8I),q===n.SHORT&&(ie=n.RGBA16I),q===n.INT&&(ie=n.RGBA32I)),T===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),T===n.RGBA){let Te=he?Ca:pt.getTransfer(se);q===n.FLOAT&&(ie=n.RGBA32F),q===n.HALF_FLOAT&&(ie=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ie=Te===Mt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(C,T){let q;return C?T===null||T===Rr||T===So?q=n.DEPTH24_STENCIL8:T===vi?q=n.DEPTH32F_STENCIL8:T===Mo&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===So?q=n.DEPTH_COMPONENT24:T===vi?q=n.DEPTH_COMPONENT32F:T===Mo&&(q=n.DEPTH_COMPONENT16),q}function A(C,T){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){let T=C.target;T.removeEventListener("dispose",E),L(T),T.isVideoTexture&&u.delete(T)}function D(C){let T=C.target;T.removeEventListener("dispose",D),M(T)}function L(C){let T=i.get(C);if(T.__webglInit===void 0)return;let q=C.source,se=f.get(q);if(se){let he=se[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(C),Object.keys(se).length===0&&f.delete(q)}i.remove(C)}function w(C){let T=i.get(C);n.deleteTexture(T.__webglTexture);let q=C.source,se=f.get(q);delete se[T.__cacheKey],o.memory.textures--}function M(C){let T=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let he=0;he<T.__webglFramebuffer[se].length;he++)n.deleteFramebuffer(T.__webglFramebuffer[se][he]);else n.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)n.deleteFramebuffer(T.__webglFramebuffer[se]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=C.textures;for(let se=0,he=q.length;se<he;se++){let ie=i.get(q[se]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(q[se])}i.remove(C)}let R=0;function N(){R=0}function O(){let C=R;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function X(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function F(C,T){let q=i.get(C);if(C.isVideoTexture&&Y(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,C,T);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function k(C,T){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){te(q,C,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function j(C,T){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){te(q,C,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function U(C,T){let q=i.get(C);if(C.version>0&&q.__version!==C.version){oe(q,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}let re={[Tn]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[Xc]:n.MIRRORED_REPEAT},ne={[dn]:n.NEAREST,[b0]:n.NEAREST_MIPMAP_NEAREST,[ll]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Pu]:n.LINEAR_MIPMAP_NEAREST,[En]:n.LINEAR_MIPMAP_LINEAR},me={[T0]:n.NEVER,[P0]:n.ALWAYS,[A0]:n.LESS,[$f]:n.LEQUAL,[E0]:n.EQUAL,[I0]:n.GEQUAL,[C0]:n.GREATER,[R0]:n.NOTEQUAL};function we(C,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===nn||T.magFilter===Pu||T.magFilter===ll||T.magFilter===En||T.minFilter===nn||T.minFilter===Pu||T.minFilter===ll||T.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,re[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,re[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,re[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ne[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==ll&&T.minFilter!==En||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(C,T){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",E));let se=T.source,he=f.get(se);he===void 0&&(he={},f.set(se,he));let ie=X(T);if(ie!==C.__cacheKey){he[ie]===void 0&&(he[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[ie].usedTimes++;let Te=he[C.__cacheKey];Te!==void 0&&(he[C.__cacheKey].usedTimes--,Te.usedTimes===0&&w(T)),C.__cacheKey=ie,C.__webglTexture=he[ie].texture}return q}function Ce(C,T,q){return Math.floor(Math.floor(C/q)/T)}function Le(C,T,q,se){let ie=C.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,q,se,T.data);else{ie.sort((ge,Se)=>ge.start-Se.start);let Te=0;for(let ge=1;ge<ie.length;ge++){let Se=ie[Te],K=ie[ge],J=Se.start+Se.count,fe=Ce(K.start,T.width,4),Ie=Ce(Se.start,T.width,4);K.start<=J+1&&fe===Ie&&Ce(K.start+K.count-1,T.width,4)===fe?Se.count=Math.max(Se.count,K.start+K.count-Se.start):(++Te,ie[Te]=K)}ie.length=Te+1;let be=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ge=0,Se=ie.length;ge<Se;ge++){let K=ie[ge],J=Math.floor(K.start/4),fe=Math.ceil(K.count/4),Ie=J%T.width,B=Math.floor(J/T.width),ue=fe,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ie,B,ue,xe,q,se,T.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function te(C,T,q){let se=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=n.TEXTURE_3D);let he=Ee(C,T),ie=T.source;t.bindTexture(se,C.__webglTexture,n.TEXTURE0+q);let Te=i.get(ie);if(ie.version!==Te.__version||he===!0){t.activeTexture(n.TEXTURE0+q);let be=pt.getPrimaries(pt.workingColorSpace),Re=T.colorSpace===rr?null:pt.getPrimaries(T.colorSpace),Oe=T.colorSpace===rr||be===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ge=x(T.image,!1,r.maxTextureSize);ge=de(T,ge);let Se=s.convert(T.format,T.colorSpace),K=s.convert(T.type),J=v(T.internalFormat,Se,K,T.colorSpace,T.isVideoTexture);we(se,T);let fe,Ie=T.mipmaps,B=T.isVideoTexture!==!0,ue=Te.__version===void 0||he===!0,xe=ie.dataReady,ye=A(T,ge);if(T.isDepthTexture)J=b(T.format===wo,T.type),ue&&(B?t.texStorage2D(n.TEXTURE_2D,1,J,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,J,ge.width,ge.height,0,Se,K,null));else if(T.isDataTexture)if(Ie.length>0){B&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,J,Ie[0].width,Ie[0].height);for(let ce=0,ee=Ie.length;ce<ee;ce++)fe=Ie[ce],B?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,fe.width,fe.height,Se,K,fe.data):t.texImage2D(n.TEXTURE_2D,ce,J,fe.width,fe.height,0,Se,K,fe.data);T.generateMipmaps=!1}else B?(ue&&t.texStorage2D(n.TEXTURE_2D,ye,J,ge.width,ge.height),xe&&Le(T,ge,Se,K)):t.texImage2D(n.TEXTURE_2D,0,J,ge.width,ge.height,0,Se,K,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,J,Ie[0].width,Ie[0].height,ge.depth);for(let ce=0,ee=Ie.length;ce<ee;ce++)if(fe=Ie[ce],T.format!==Cn)if(Se!==null)if(B){if(xe)if(T.layerUpdates.size>0){let Pe=op(fe.width,fe.height,T.format,T.type);for(let Ye of T.layerUpdates){let Ge=fe.data.subarray(Ye*Pe/fe.data.BYTES_PER_ELEMENT,(Ye+1)*Pe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ye,fe.width,fe.height,1,Se,Ge)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,fe.width,fe.height,ge.depth,Se,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,J,fe.width,fe.height,ge.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,fe.width,fe.height,ge.depth,Se,K,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,J,fe.width,fe.height,ge.depth,0,Se,K,fe.data)}else{B&&ue&&t.texStorage2D(n.TEXTURE_2D,ye,J,Ie[0].width,Ie[0].height);for(let ce=0,ee=Ie.length;ce<ee;ce++)fe=Ie[ce],T.format!==Cn?Se!==null?B?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,fe.width,fe.height,Se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,J,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,fe.width,fe.height,Se,K,fe.data):t.texImage2D(n.TEXTURE_2D,ce,J,fe.width,fe.height,0,Se,K,fe.data)}else if(T.isDataArrayTexture)if(B){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,J,ge.width,ge.height,ge.depth),xe)if(T.layerUpdates.size>0){let ce=op(ge.width,ge.height,T.format,T.type);for(let ee of T.layerUpdates){let Pe=ge.data.subarray(ee*ce/ge.data.BYTES_PER_ELEMENT,(ee+1)*ce/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ge.width,ge.height,1,Se,K,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,K,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,ge.width,ge.height,ge.depth,0,Se,K,ge.data);else if(T.isData3DTexture)B?(ue&&t.texStorage3D(n.TEXTURE_3D,ye,J,ge.width,ge.height,ge.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,K,ge.data)):t.texImage3D(n.TEXTURE_3D,0,J,ge.width,ge.height,ge.depth,0,Se,K,ge.data);else if(T.isFramebufferTexture){if(ue)if(B)t.texStorage2D(n.TEXTURE_2D,ye,J,ge.width,ge.height);else{let ce=ge.width,ee=ge.height;for(let Pe=0;Pe<ye;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,J,ce,ee,0,Se,K,null),ce>>=1,ee>>=1}}else if(Ie.length>0){if(B&&ue){let ce=pe(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ye,J,ce.width,ce.height)}for(let ce=0,ee=Ie.length;ce<ee;ce++)fe=Ie[ce],B?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Se,K,fe):t.texImage2D(n.TEXTURE_2D,ce,J,Se,K,fe);T.generateMipmaps=!1}else if(B){if(ue){let ce=pe(ge);t.texStorage2D(n.TEXTURE_2D,ye,J,ce.width,ce.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,K,ge)}else t.texImage2D(n.TEXTURE_2D,0,J,Se,K,ge);g(T)&&m(se),Te.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function oe(C,T,q){if(T.image.length!==6)return;let se=Ee(C,T),he=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let ie=i.get(he);if(he.version!==ie.__version||se===!0){t.activeTexture(n.TEXTURE0+q);let Te=pt.getPrimaries(pt.workingColorSpace),be=T.colorSpace===rr?null:pt.getPrimaries(T.colorSpace),Re=T.colorSpace===rr||Te===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!Oe&&!ge?Se[ee]=x(T.image[ee],!0,r.maxCubemapSize):Se[ee]=ge?T.image[ee].image:T.image[ee],Se[ee]=de(T,Se[ee]);let K=Se[0],J=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),Ie=v(T.internalFormat,J,fe,T.colorSpace),B=T.isVideoTexture!==!0,ue=ie.__version===void 0||se===!0,xe=he.dataReady,ye=A(T,K);we(n.TEXTURE_CUBE_MAP,T);let ce;if(Oe){B&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ie,K.width,K.height);for(let ee=0;ee<6;ee++){ce=Se[ee].mipmaps;for(let Pe=0;Pe<ce.length;Pe++){let Ye=ce[Pe];T.format!==Cn?J!==null?B?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ye.width,Ye.height,J,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ie,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Ye.width,Ye.height,J,fe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ie,Ye.width,Ye.height,0,J,fe,Ye.data)}}}else{if(ce=T.mipmaps,B&&ue){ce.length>0&&ye++;let ee=pe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ie,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ge){B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,J,fe,Se[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ie,Se[ee].width,Se[ee].height,0,J,fe,Se[ee].data);for(let Pe=0;Pe<ce.length;Pe++){let Ge=ce[Pe].image[ee].image;B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,Ge.width,Ge.height,J,fe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ie,Ge.width,Ge.height,0,J,fe,Ge.data)}}else{B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J,fe,Se[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ie,J,fe,Se[ee]);for(let Pe=0;Pe<ce.length;Pe++){let Ye=ce[Pe];B?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,J,fe,Ye.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ie,J,fe,Ye.image[ee])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),ie.__version=he.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function _e(C,T,q,se,he,ie){let Te=s.convert(q.format,q.colorSpace),be=s.convert(q.type),Re=v(q.internalFormat,Te,be,q.colorSpace),Oe=i.get(T),ge=i.get(q);if(ge.__renderTarget=T,!Oe.__hasExternalTextures){let Se=Math.max(1,T.width>>ie),K=Math.max(1,T.height>>ie);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,ie,Re,Se,K,T.depth,0,Te,be,null):t.texImage2D(he,ie,Re,Se,K,0,Te,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,he,ge.__webglTexture,0,I(T)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,he,ge.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer){let se=T.depthTexture,he=se&&se.isDepthTexture?se.type:null,ie=b(T.stencilBuffer,he),Te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=I(T);Z(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ie,T.width,T.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ie,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ie,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{let se=T.textures;for(let he=0;he<se.length;he++){let ie=se[he],Te=s.convert(ie.format,ie.colorSpace),be=s.convert(ie.type),Re=v(ie.internalFormat,Te,be,ie.colorSpace),Oe=I(T);q&&Z(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Re,T.width,T.height):Z(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Re,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=i.get(T.depthTexture);se.__renderTarget=T,(!se.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);let he=se.__webglTexture,ie=I(T);if(T.depthTexture.format===io)Z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(T.depthTexture.format===wo)Z(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function We(C){let T=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let se=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){let he=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),T.__depthDisposeCallback=he}T.__boundDepthTexture=se}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let se=C.texture.mipmaps;se&&se.length>0?Me(T.__webglFramebuffer[0],C):Me(T.__webglFramebuffer,C)}else if(q){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=n.createRenderbuffer(),Ue(T.__webglDepthbuffer[se],C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ie)}}else{let se=C.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ue(T.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(C,T,q){let se=i.get(C);T!==void 0&&_e(se.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&We(C)}function S(C){let T=C.texture,q=i.get(C),se=i.get(T);C.addEventListener("dispose",D);let he=C.textures,ie=C.isWebGLCubeRenderTarget===!0,Te=he.length>1;if(Te||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=T.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Re=0;Re<T.mipmaps.length;Re++)q.__webglFramebuffer[be][Re]=n.createFramebuffer()}else q.__webglFramebuffer[be]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)q.__webglFramebuffer[be]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Te)for(let be=0,Re=he.length;be<Re;be++){let Oe=i.get(he[be]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Z(C)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){let Re=he[be];q.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let Oe=s.convert(Re.format,Re.colorSpace),ge=s.convert(Re.type),Se=v(Re.internalFormat,Oe,ge,Re.colorSpace,C.isXRRenderTarget===!0),K=I(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,Se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,q.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),we(n.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)_e(q.__webglFramebuffer[be][Re],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re);else _e(q.__webglFramebuffer[be],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let be=0,Re=he.length;be<Re;be++){let Oe=he[be],ge=i.get(Oe),Se=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ge.__webglTexture),we(Se,Oe),_e(q.__webglFramebuffer,C,Oe,n.COLOR_ATTACHMENT0+be,Se,0),g(Oe)&&m(Se)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,se.__webglTexture),we(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)_e(q.__webglFramebuffer[Re],C,T,n.COLOR_ATTACHMENT0,be,Re);else _e(q.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,be,0);g(T)&&m(be),t.unbindTexture()}C.depthBuffer&&We(C)}function V(C){let T=C.textures;for(let q=0,se=T.length;q<se;q++){let he=T[q];if(g(he)){let ie=y(C),Te=i.get(he).__webglTexture;t.bindTexture(ie,Te),m(ie),t.unbindTexture()}}}let z=[],G=[];function W(C){if(C.samples>0){if(Z(C)===!1){let T=C.textures,q=C.width,se=C.height,he=n.COLOR_BUFFER_BIT,ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),be=T.length>1;if(be)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);let ge=i.get(T[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,q,se,0,0,q,se,he,n.NEAREST),l===!0&&(z.length=0,G.length=0,z.push(n.COLOR_ATTACHMENT0+Oe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(ie),G.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);let ge=i.get(T[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let T=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function I(C){return Math.min(r.maxSamples,C.samples)}function Z(C){let T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(C){let T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function de(C,T){let q=C.colorSpace,se=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==is&&q!==rr&&(pt.getTransfer(q)===Mt?(se!==Cn||he!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=Ve,this.setupRenderTarget=S,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Z}function hA(n,e){function t(i,r=rr){let s,o=pt.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Mo)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===Rr)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Jf)return n.RGB;if(i===Cn)return n.RGBA;if(i===io)return n.DEPTH_COMPONENT;if(i===wo)return n.DEPTH_STENCIL;if(i===Fu)return n.RED;if(i===Nu)return n.RED_INTEGER;if(i===Qf)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===Ou)return n.RGBA_INTEGER;if(i===cl||i===ul||i===hl||i===dl)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zu||i===Vu||i===ku||i===Gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hu||i===Wu||i===qu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hu||i===Wu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xu||i===Yu||i===Zu||i===ju||i===Ju||i===Qu||i===$u||i===Ku||i===eh||i===th||i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ju)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ku)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===th)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===ah||i===lh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oh)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===uh||i===hh||i===dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
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

}`,vp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:dA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_p=class extends Ji{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new vp,m={},y=t.getContextAttributes(),v=null,b=null,A=[],E=[],D=new ve,L=null,w=new Jt;w.viewport=new dt;let M=new Jt;M.viewport=new dt;let R=[w,M],N=new _u,O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=A[te];return oe===void 0&&(oe=new co,A[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=A[te];return oe===void 0&&(oe=new co,A[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=A[te];return oe===void 0&&(oe=new co,A[te]=oe),oe.getHandSpace()};function F(te){let oe=E.indexOf(te.inputSource);if(oe===-1)return;let _e=A[oe];_e!==void 0&&(_e.update(te.inputSource,te.frame,c||o),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let te=0;te<A.length;te++){let oe=E[te];oe!==null&&(E[te]=null,A[te].disconnect(oe))}O=null,X=null,g.reset();for(let te in m)delete m[te];e.setRenderTarget(v),h=null,f=null,d=null,r=null,b=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?wo:io,Ue=y.stencil?So:Rr);let We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Fn(f.textureWidth,f.textureHeight,{format:Cn,type:qn,depthTexture:new ka(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Fn(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(te){for(let oe=0;oe<te.removed.length;oe++){let _e=te.removed[oe],Ue=E.indexOf(_e);Ue>=0&&(E[Ue]=null,A[Ue].disconnect(_e))}for(let oe=0;oe<te.added.length;oe++){let _e=te.added[oe],Ue=E.indexOf(_e);if(Ue===-1){for(let We=0;We<A.length;We++)if(We>=E.length){E.push(_e),Ue=We;break}else if(E[We]===null){E[We]=_e,Ue=We;break}if(Ue===-1)break}let Me=A[Ue];Me&&Me.connect(_e)}}let U=new _,re=new _;function ne(te,oe,_e){U.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);let Ue=U.distanceTo(re),Me=oe.projectionMatrix.elements,We=_e.projectionMatrix.elements,Ve=Me[14]/(Me[10]-1),S=Me[14]/(Me[10]+1),V=(Me[9]+1)/Me[5],z=(Me[9]-1)/Me[5],G=(Me[8]-1)/Me[0],W=(We[8]+1)/We[0],I=Ve*G,Z=Ve*W,Y=Ue/(-G+W),de=Y*-G;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(de),te.translateZ(Y),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Me[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let pe=Ve+Y,C=S+Y,T=I-de,q=Z+(Ue-de),se=V*S/C*pe,he=z*S/C*pe;te.projectionMatrix.makePerspective(T,q,se,he,pe,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let oe=te.near,_e=te.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),N.near=M.near=w.near=oe,N.far=M.far=w.far=_e,(O!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,X=N.far),N.layers.mask=te.layers.mask|6,w.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;let Ue=te.parent,Me=N.cameras;me(N,Ue);for(let We=0;We<Me.length;We++)me(Me[We],Ue);Me.length===2?ne(N,w,M):N.projectionMatrix.copy(w.projectionMatrix),we(te,N,Ue)};function we(te,oe,_e){_e===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ro*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(te){return m[te]};let Ee=null;function Ce(te,oe){if(u=oe.getViewerPose(c||o),p=oe,u!==null){let _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ue=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let S=0;S<_e.length;S++){let V=_e[S],z=null;if(h!==null)z=h.getViewport(V);else{let W=d.getViewSubImage(f,V);z=W.viewport,S===0&&(e.setRenderTargetTextures(b,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(b))}let G=R[S];G===void 0&&(G=new Jt,G.layers.enable(S),G.viewport=new dt,R[S]=G),G.matrix.fromArray(V.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(V.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(z.x,z.y,z.width,z.height),S===0&&(N.matrix.copy(G.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(G)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let S=d.getDepthInformation(_e[0]);S&&S.isValid&&S.texture&&g.init(S,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let S=0;S<_e.length;S++){let V=_e[S].camera;if(V){let z=m[V];z||(z=new Ga,m[V]=z);let G=d.getCameraImage(V);z.sourceTexture=G}}}}for(let _e=0;_e<A.length;_e++){let Ue=E[_e],Me=A[_e];Ue!==null&&Me!==void 0&&Me.update(Ue,oe,c||o)}Ee&&Ee(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),p=null}let Le=new ux;Le.setAnimationLoop(Ce),this.setAnimationLoop=function(te){Ee=te},this.dispose=function(){}}},ps=new $t,pA=new lt;function mA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,np(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===An&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===An&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,b=y.envMapRotation;v&&(g.envMap.value=v,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(ps)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=r[y.id];b===void 0&&(p(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));let A=v.program;i.updateUBOMapping(y,A);let E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){let v=d();y.__bindingPointIndex=v;let b=n.createBuffer(),A=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=r[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,D=b.length;E<D;E++){let L=Array.isArray(b[E])?b[E]:[b[E]];for(let w=0,M=L.length;w<M;w++){let R=L[w];if(h(R,E,w,A)===!0){let N=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],X=0;for(let F=0;F<O.length;F++){let k=O[F],j=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+X,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,v,b,A){let E=y.value,D=v+"_"+b;if(A[D]===void 0)return typeof E=="number"||typeof E=="boolean"?A[D]=E:A[D]=E.clone(),!0;{let L=A[D];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[D]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function p(y){let v=y.uniforms,b=0,A=16;for(let D=0,L=v.length;D<L;D++){let w=Array.isArray(v[D])?v[D]:[v[D]];for(let M=0,R=w.length;M<R;M++){let N=w[M],O=Array.isArray(N.value)?N.value:[N.value];for(let X=0,F=O.length;X<F;X++){let k=O[X],j=x(k),U=b%A,re=U%j.boundary,ne=U+re;b+=re,ne!==0&&A-ne<j.storage&&(b+=A-ne),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=j.storage}}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var yh=class{constructor(e={}){let{canvas:t=L0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1;this._outputColorSpace=ht;let E=0,D=0,L=null,w=-1,M=null,R=new dt,N=new dt,O=null,X=new Fe(0),F=0,k=t.width,j=t.height,U=1,re=null,ne=null,me=new dt(0,0,k,j),we=new dt(0,0,k,j),Ee=!1,Ce=new po,Le=!1,te=!1,oe=new lt,_e=new _,Ue=new dt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ve(){return L===null?U:1}let S=i;function V(P,Q){return t.getContext(P,Q)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ce,!1),S===null){let Q="webgl2";if(S=V(Q,P),S===null)throw V(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let z,G,W,I,Z,Y,de,pe,C,T,q,se,he,ie,Te,be,Re,Oe,ge,Se,K,J,fe,Ie;function B(){z=new Uw(S),z.init(),J=new hA(S,z),G=new Ew(S,z,e,J),W=new cA(S,z),G.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),I=new Bw(S),Z=new JT,Y=new uA(S,z,W,Z,G,J,I),de=new Rw(b),pe=new Dw(b),C=new HM(S),fe=new Tw(S,C),T=new Fw(S,C,I,fe),q=new zw(S,T,C,I),ge=new Ow(S,G,Y),be=new Cw(Z),se=new jT(b,de,pe,z,G,fe,be),he=new mA(b,Z),ie=new $T,Te=new rA(z),Oe=new ww(b,de,pe,W,q,h,l),Re=new aA(b,q,G),Ie=new gA(S,I,G,W),Se=new Aw(S,z,I),K=new Nw(S,z,I),I.programs=se.programs,b.capabilities=G,b.extensions=z,b.properties=Z,b.renderLists=ie,b.shadowMap=Re,b.state=W,b.info=I}B();let ue=new _p(b,S);this.xr=ue,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let P=z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(k,j,!1))},this.getSize=function(P){return P.set(k,j)},this.setSize=function(P,Q,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,j=Q,t.width=Math.floor(P*U),t.height=Math.floor(Q*U),ae===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(k*U,j*U).floor()},this.setDrawingBufferSize=function(P,Q,ae){k=P,j=Q,U=ae,t.width=Math.floor(P*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(me)},this.setViewport=function(P,Q,ae,le){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,Q,ae,le),W.viewport(R.copy(me).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(we)},this.setScissor=function(P,Q,ae,le){P.isVector4?we.set(P.x,P.y,P.z,P.w):we.set(P,Q,ae,le),W.scissor(N.copy(we).multiplyScalar(U).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(P){W.setScissorTest(Ee=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,ae=!0){let le=0;if(P){let $=!1;if(L!==null){let Ae=L.texture.format;$=Ae===Ou||Ae===Bu||Ae===Nu}if($){let Ae=L.texture.type,Be=Ae===qn||Ae===Rr||Ae===Mo||Ae===So||Ae===Du||Ae===Uu,qe=Oe.getClearColor(),ke=Oe.getClearAlpha(),Ke=qe.r,et=qe.g,Ze=qe.b;Be?(p[0]=Ke,p[1]=et,p[2]=Ze,p[3]=ke,S.clearBufferuiv(S.COLOR,0,p)):(x[0]=Ke,x[1]=et,x[2]=Ze,x[3]=ke,S.clearBufferiv(S.COLOR,0,x))}else le|=S.COLOR_BUFFER_BIT}Q&&(le|=S.DEPTH_BUFFER_BIT),ae&&(le|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Oe.dispose(),ie.dispose(),Te.dispose(),Z.dispose(),de.dispose(),pe.dispose(),q.dispose(),fe.dispose(),Ie.dispose(),se.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",hn),ue.removeEventListener("sessionend",Zr),wi.stop()};function xe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=I.autoReset,Q=Re.enabled,ae=Re.autoUpdate,le=Re.needsUpdate,$=Re.type;B(),I.autoReset=P,Re.enabled=Q,Re.autoUpdate=ae,Re.needsUpdate=le,Re.type=$}function ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ee(P){let Q=P.target;Q.removeEventListener("dispose",ee),Pe(Q)}function Pe(P){Ye(P),Z.remove(P)}function Ye(P){let Q=Z.get(P).programs;Q!==void 0&&(Q.forEach(function(ae){se.releaseProgram(ae)}),P.isShaderMaterial&&se.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,ae,le,$,Ae){Q===null&&(Q=Me);let Be=$.isMesh&&$.matrixWorld.determinant()<0,qe=ub(P,Q,ae,le,$);W.setMaterial(le,Be);let ke=ae.index,Ke=1;if(le.wireframe===!0){if(ke=T.getWireframeAttribute(ae),ke===void 0)return;Ke=2}let et=ae.drawRange,Ze=ae.attributes.position,ct=et.start*Ke,Tt=(et.start+et.count)*Ke;Ae!==null&&(ct=Math.max(ct,Ae.start*Ke),Tt=Math.min(Tt,(Ae.start+Ae.count)*Ke)),ke!==null?(ct=Math.max(ct,0),Tt=Math.min(Tt,ke.count)):Ze!=null&&(ct=Math.max(ct,0),Tt=Math.min(Tt,Ze.count));let jt=Tt-ct;if(jt<0||jt===1/0)return;fe.setup($,le,qe,ae,ke);let Dt,Rt=Se;if(ke!==null&&(Dt=C.get(ke),Rt=K,Rt.setIndex(Dt)),$.isMesh)le.wireframe===!0?(W.setLineWidth(le.wireframeLinewidth*Ve()),Rt.setMode(S.LINES)):Rt.setMode(S.TRIANGLES);else if($.isLine){let Je=le.linewidth;Je===void 0&&(Je=1),W.setLineWidth(Je*Ve()),$.isLineSegments?Rt.setMode(S.LINES):$.isLineLoop?Rt.setMode(S.LINE_LOOP):Rt.setMode(S.LINE_STRIP)}else $.isPoints?Rt.setMode(S.POINTS):$.isSprite&&Rt.setMode(S.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Rt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Je=$._multiDrawStarts,zt=$._multiDrawCounts,gt=$._multiDrawCount,zn=ke?C.get(ke).bytesPerElement:1,Fs=Z.get(le).currentProgram.getUniforms();for(let Vn=0;Vn<gt;Vn++)Fs.setValue(S,"_gl_DrawID",Vn),Rt.render(Je[Vn]/zn,zt[Vn])}else if($.isInstancedMesh)Rt.renderInstances(ct,jt,$.count);else if(ae.isInstancedBufferGeometry){let Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,zt=Math.min(ae.instanceCount,Je);Rt.renderInstances(ct,jt,zt)}else Rt.render(ct,jt)};function Ge(P,Q,ae){P.transparent===!0&&P.side===un&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,hc(P,Q,ae),P.side=pi,P.needsUpdate=!0,hc(P,Q,ae),P.side=un):hc(P,Q,ae)}this.compile=function(P,Q,ae=null){ae===null&&(ae=P),m=Te.get(ae),m.init(Q),v.push(m),ae.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),P!==ae&&P.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let le=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){let qe=Ae[Be];Ge(qe,ae,$),le.add(qe)}else Ge(Ae,ae,$),le.add(Ae)}),m=v.pop(),le},this.compileAsync=function(P,Q,ae=null){let le=this.compile(P,Q,ae);return new Promise($=>{function Ae(){if(le.forEach(function(Be){Z.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){$(P);return}setTimeout(Ae,10)}z.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let $e=null;function Ct(P){$e&&$e(P)}function hn(){wi.stop()}function Zr(){wi.start()}let wi=new ux;wi.setAnimationLoop(Ct),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(P){$e=P,ue.setAnimationLoop(P),P===null?wi.stop():wi.start()},ue.addEventListener("sessionstart",hn),ue.addEventListener("sessionend",Zr),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Q),Q=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Q,L),m=Te.get(P,v.length),m.init(Q),v.push(m),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ce.setFromProjectionMatrix(oe,fi,Q.reversedDepth),te=this.localClippingEnabled,Le=be.init(this.clippingPlanes,te),g=ie.get(P,y.length),g.init(),y.push(g),ue.enabled===!0&&ue.isPresenting===!0){let Ae=b.xr.getDepthSensingMesh();Ae!==null&&Ti(Ae,Q,-1/0,b.sortObjects)}Ti(P,Q,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(re,ne),We=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,We&&Oe.addToRenderList(g,P),this.info.render.frame++,Le===!0&&be.beginShadows();let ae=m.state.shadowsArray;Re.render(ae,P,Q),Le===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=g.opaque,$=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Ae=Q.cameras;if($.length>0)for(let Be=0,qe=Ae.length;Be<qe;Be++){let ke=Ae[Be];jm(le,$,P,ke)}We&&Oe.render(P);for(let Be=0,qe=Ae.length;Be<qe;Be++){let ke=Ae[Be];Us(g,P,ke,ke.viewport)}}else $.length>0&&jm(le,$,P,Q),We&&Oe.render(P),Us(g,P,Q);L!==null&&D===0&&(Y.updateMultisampleRenderTarget(L),Y.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(b,P,Q),fe.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],Le===!0&&be.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ti(P,Q,ae,le){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){le&&Ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);let Be=q.update(P),qe=P.material;qe.visible&&g.push(P,Be,qe,ae,Ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){let Be=q.update(P),qe=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ue.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ue.copy(Be.boundingSphere.center)),Ue.applyMatrix4(P.matrixWorld).applyMatrix4(oe)),Array.isArray(qe)){let ke=Be.groups;for(let Ke=0,et=ke.length;Ke<et;Ke++){let Ze=ke[Ke],ct=qe[Ze.materialIndex];ct&&ct.visible&&g.push(P,Be,ct,ae,Ue.z,Ze)}}else qe.visible&&g.push(P,Be,qe,ae,Ue.z,null)}}let Ae=P.children;for(let Be=0,qe=Ae.length;Be<qe;Be++)Ti(Ae[Be],Q,ae,le)}function Us(P,Q,ae,le){let $=P.opaque,Ae=P.transmissive,Be=P.transparent;m.setupLightsView(ae),Le===!0&&be.setGlobalState(b.clippingPlanes,ae),le&&W.viewport(R.copy(le)),$.length>0&&uc($,Q,ae),Ae.length>0&&uc(Ae,Q,ae),Be.length>0&&uc(Be,Q,ae),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function jm(P,Q,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[le.id]===void 0&&(m.state.transmissionRenderTarget[le.id]=new Fn(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Ii:qn,minFilter:En,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Ae=m.state.transmissionRenderTarget[le.id],Be=le.viewport||R;Ae.setSize(Be.z*b.transmissionResolutionScale,Be.w*b.transmissionResolutionScale);let qe=b.getRenderTarget(),ke=b.getActiveCubeFace(),Ke=b.getActiveMipmapLevel();b.setRenderTarget(Ae),b.getClearColor(X),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear(),We&&Oe.render(ae);let et=b.toneMapping;b.toneMapping=nr;let Ze=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),m.setupLightsView(le),Le===!0&&be.setGlobalState(b.clippingPlanes,le),uc(P,ae,le),Y.updateMultisampleRenderTarget(Ae),Y.updateRenderTargetMipmap(Ae),z.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,jt=Q.length;Tt<jt;Tt++){let Dt=Q[Tt],Rt=Dt.object,Je=Dt.geometry,zt=Dt.material,gt=Dt.group;if(zt.side===un&&Rt.layers.test(le.layers)){let zn=zt.side;zt.side=An,zt.needsUpdate=!0,Jm(Rt,ae,le,Je,zt,gt),zt.side=zn,zt.needsUpdate=!0,ct=!0}}ct===!0&&(Y.updateMultisampleRenderTarget(Ae),Y.updateRenderTargetMipmap(Ae))}b.setRenderTarget(qe,ke,Ke),b.setClearColor(X,F),Ze!==void 0&&(le.viewport=Ze),b.toneMapping=et}function uc(P,Q,ae){let le=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Ae=P.length;$<Ae;$++){let Be=P[$],qe=Be.object,ke=Be.geometry,Ke=Be.group,et=Be.material;et.allowOverride===!0&&le!==null&&(et=le),qe.layers.test(ae.layers)&&Jm(qe,Q,ae,ke,et,Ke)}}function Jm(P,Q,ae,le,$,Ae){P.onBeforeRender(b,Q,ae,le,$,Ae),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(b,Q,ae,le,P,Ae),$.transparent===!0&&$.side===un&&$.forceSinglePass===!1?($.side=An,$.needsUpdate=!0,b.renderBufferDirect(ae,Q,le,$,P,Ae),$.side=pi,$.needsUpdate=!0,b.renderBufferDirect(ae,Q,le,$,P,Ae),$.side=un):b.renderBufferDirect(ae,Q,le,$,P,Ae),P.onAfterRender(b,Q,ae,le,$,Ae)}function hc(P,Q,ae){Q.isScene!==!0&&(Q=Me);let le=Z.get(P),$=m.state.lights,Ae=m.state.shadowsArray,Be=$.state.version,qe=se.getParameters(P,$.state,Ae,Q,ae),ke=se.getProgramCacheKey(qe),Ke=le.programs;le.environment=P.isMeshStandardMaterial?Q.environment:null,le.fog=Q.fog,le.envMap=(P.isMeshStandardMaterial?pe:de).get(P.envMap||le.environment),le.envMapRotation=le.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",ee),Ke=new Map,le.programs=Ke);let et=Ke.get(ke);if(et!==void 0){if(le.currentProgram===et&&le.lightsStateVersion===Be)return $m(P,qe),et}else qe.uniforms=se.getUniforms(P),P.onBeforeCompile(qe,b),et=se.acquireProgram(qe,ke),Ke.set(ke,et),le.uniforms=qe.uniforms;let Ze=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=be.uniform),$m(P,qe),le.needsLights=db(P),le.lightsStateVersion=Be,le.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=et,le.uniformsList=null,et}function Qm(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=Eo.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function $m(P,Q){let ae=Z.get(P);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.batchingColor=Q.batchingColor,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.instancingMorph=Q.instancingMorph,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function ub(P,Q,ae,le,$){Q.isScene!==!0&&(Q=Me),Y.resetTextureUnits();let Ae=Q.fog,Be=le.isMeshStandardMaterial?Q.environment:null,qe=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:is,ke=(le.isMeshStandardMaterial?pe:de).get(le.envMap||Be),Ke=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,Tt=!!ae.morphAttributes.color,jt=nr;le.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(jt=b.toneMapping);let Dt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Rt=Dt!==void 0?Dt.length:0,Je=Z.get(le),zt=m.state.lights;if(Le===!0&&(te===!0||P!==M)){let Sn=P===M&&le.id===w;be.setState(le,P,Sn)}let gt=!1;le.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==zt.state.version||Je.outputColorSpace!==qe||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==ke||le.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==et||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Tt||Je.toneMapping!==jt||Je.morphTargetsCount!==Rt)&&(gt=!0):(gt=!0,Je.__version=le.version);let zn=Je.currentProgram;gt===!0&&(zn=hc(le,Q,$));let Fs=!1,Vn=!1,ua=!1,Vt=zn.getUniforms(),jn=Je.uniforms;if(W.useProgram(zn.program)&&(Fs=!0,Vn=!0,ua=!0),le.id!==w&&(w=le.id,Vn=!0),Fs||M!==P){W.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Vt.setValue(S,"projectionMatrix",P.projectionMatrix),Vt.setValue(S,"viewMatrix",P.matrixWorldInverse);let Ln=Vt.map.cameraPosition;Ln!==void 0&&Ln.setValue(S,_e.setFromMatrixPosition(P.matrixWorld)),G.logarithmicDepthBuffer&&Vt.setValue(S,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(S,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Vn=!0,ua=!0)}if($.isSkinnedMesh){Vt.setOptional(S,$,"bindMatrix"),Vt.setOptional(S,$,"bindMatrixInverse");let Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Vt.setValue(S,"boneTexture",Sn.boneTexture,Y))}$.isBatchedMesh&&(Vt.setOptional(S,$,"batchingTexture"),Vt.setValue(S,"batchingTexture",$._matricesTexture,Y),Vt.setOptional(S,$,"batchingIdTexture"),Vt.setValue(S,"batchingIdTexture",$._indirectTexture,Y),Vt.setOptional(S,$,"batchingColorTexture"),$._colorsTexture!==null&&Vt.setValue(S,"batchingColorTexture",$._colorsTexture,Y));let Jn=ae.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&ge.update($,ae,zn),(Vn||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Vt.setValue(S,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(jn.envMap.value=ke,jn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Q.environment!==null&&(jn.envMapIntensity.value=Q.environmentIntensity),Vn&&(Vt.setValue(S,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&hb(jn,ua),Ae&&le.fog===!0&&he.refreshFogUniforms(jn,Ae),he.refreshMaterialUniforms(jn,le,U,j,m.state.transmissionRenderTarget[P.id]),Eo.upload(S,Qm(Je),jn,Y)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Eo.upload(S,Qm(Je),jn,Y),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(S,"center",$.center),Vt.setValue(S,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(S,"normalMatrix",$.normalMatrix),Vt.setValue(S,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let Sn=le.uniformsGroups;for(let Ln=0,Jd=Sn.length;Ln<Jd;Ln++){let jr=Sn[Ln];Ie.update(jr,zn),Ie.bind(jr,zn)}}return zn}function hb(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function db(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,Q,ae){let le=Z.get(P);le.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Z.get(P.texture).__webglTexture=Q,Z.get(P.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ae,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Q){let ae=Z.get(P);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0};let fb=S.createFramebuffer();this.setRenderTarget=function(P,Q=0,ae=0){L=P,E=Q,D=ae;let le=!0,$=null,Ae=!1,Be=!1;if(P){let ke=Z.get(P);if(ke.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(S.FRAMEBUFFER,null),le=!1;else if(ke.__webglFramebuffer===void 0)Y.setupRenderTarget(P);else if(ke.__hasExternalTextures)Y.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ze=P.depthTexture;if(ke.__boundDepthTexture!==Ze){if(Ze!==null&&Z.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Be=!0);let et=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[Q])?$=et[Q][ae]:$=et[Q],Ae=!0):P.samples>0&&Y.useMultisampledRTT(P)===!1?$=Z.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?$=et[ae]:$=et,R.copy(P.viewport),N.copy(P.scissor),O=P.scissorTest}else R.copy(me).multiplyScalar(U).floor(),N.copy(we).multiplyScalar(U).floor(),O=Ee;if(ae!==0&&($=fb),W.bindFramebuffer(S.FRAMEBUFFER,$)&&le&&W.drawBuffers(P,$),W.viewport(R),W.scissor(N),W.setScissorTest(O),Ae){let ke=Z.get(P.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ke.__webglTexture,ae)}else if(Be){let ke=Q;for(let Ke=0;Ke<P.textures.length;Ke++){let et=Z.get(P.textures[Ke]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ke,et.__webglTexture,ae,ke)}}else if(P!==null&&ae!==0){let ke=Z.get(P.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ke.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(P,Q,ae,le,$,Ae,Be,qe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){W.bindFramebuffer(S.FRAMEBUFFER,ke);try{let Ke=P.textures[qe],et=Ke.format,Ze=Ke.type;if(!G.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-le&&ae>=0&&ae<=P.height-$&&(P.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+qe),S.readPixels(Q,ae,le,$,J.convert(et),J.convert(Ze),Ae))}finally{let Ke=L!==null?Z.get(L).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,Q,ae,le,$,Ae,Be,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke)if(Q>=0&&Q<=P.width-le&&ae>=0&&ae<=P.height-$){W.bindFramebuffer(S.FRAMEBUFFER,ke);let Ke=P.textures[qe],et=Ke.format,Ze=Ke.type;if(!G.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ct),S.bufferData(S.PIXEL_PACK_BUFFER,Ae.byteLength,S.STREAM_READ),P.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+qe),S.readPixels(Q,ae,le,$,J.convert(et),J.convert(Ze),0);let Tt=L!==null?Z.get(L).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,Tt);let jt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await D0(S,jt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ct),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ae),S.deleteBuffer(ct),S.deleteSync(jt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Q=null,ae=0){let le=Math.pow(2,-ae),$=Math.floor(P.image.width*le),Ae=Math.floor(P.image.height*le),Be=Q!==null?Q.x:0,qe=Q!==null?Q.y:0;Y.setTexture2D(P,0),S.copyTexSubImage2D(S.TEXTURE_2D,ae,0,0,Be,qe,$,Ae),W.unbindTexture()};let pb=S.createFramebuffer(),mb=S.createFramebuffer();this.copyTextureToTexture=function(P,Q,ae=null,le=null,$=0,Ae=null){Ae===null&&($!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=$,$=0):Ae=0);let Be,qe,ke,Ke,et,Ze,ct,Tt,jt,Dt=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(ae!==null)Be=ae.max.x-ae.min.x,qe=ae.max.y-ae.min.y,ke=ae.isBox3?ae.max.z-ae.min.z:1,Ke=ae.min.x,et=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{let Jn=Math.pow(2,-$);Be=Math.floor(Dt.width*Jn),qe=Math.floor(Dt.height*Jn),P.isDataArrayTexture?ke=Dt.depth:P.isData3DTexture?ke=Math.floor(Dt.depth*Jn):ke=1,Ke=0,et=0,Ze=0}le!==null?(ct=le.x,Tt=le.y,jt=le.z):(ct=0,Tt=0,jt=0);let Rt=J.convert(Q.format),Je=J.convert(Q.type),zt;Q.isData3DTexture?(Y.setTexture3D(Q,0),zt=S.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Y.setTexture2DArray(Q,0),zt=S.TEXTURE_2D_ARRAY):(Y.setTexture2D(Q,0),zt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Q.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,Q.unpackAlignment);let gt=S.getParameter(S.UNPACK_ROW_LENGTH),zn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Fs=S.getParameter(S.UNPACK_SKIP_PIXELS),Vn=S.getParameter(S.UNPACK_SKIP_ROWS),ua=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Dt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Dt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(S.UNPACK_SKIP_ROWS,et),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ze);let Vt=P.isDataArrayTexture||P.isData3DTexture,jn=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){let Jn=Z.get(P),Sn=Z.get(Q),Ln=Z.get(Jn.__renderTarget),Jd=Z.get(Sn.__renderTarget);W.bindFramebuffer(S.READ_FRAMEBUFFER,Ln.__webglFramebuffer),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,Jd.__webglFramebuffer);for(let jr=0;jr<ke;jr++)Vt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Z.get(P).__webglTexture,$,Ze+jr),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Z.get(Q).__webglTexture,Ae,jt+jr)),S.blitFramebuffer(Ke,et,Be,qe,ct,Tt,Be,qe,S.DEPTH_BUFFER_BIT,S.NEAREST);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if($!==0||P.isRenderTargetTexture||Z.has(P)){let Jn=Z.get(P),Sn=Z.get(Q);W.bindFramebuffer(S.READ_FRAMEBUFFER,pb),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,mb);for(let Ln=0;Ln<ke;Ln++)Vt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Jn.__webglTexture,$,Ze+Ln):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Jn.__webglTexture,$),jn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Sn.__webglTexture,Ae,jt+Ln):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Sn.__webglTexture,Ae),$!==0?S.blitFramebuffer(Ke,et,Be,qe,ct,Tt,Be,qe,S.COLOR_BUFFER_BIT,S.NEAREST):jn?S.copyTexSubImage3D(zt,Ae,ct,Tt,jt+Ln,Ke,et,Be,qe):S.copyTexSubImage2D(zt,Ae,ct,Tt,Ke,et,Be,qe);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else jn?P.isDataTexture||P.isData3DTexture?S.texSubImage3D(zt,Ae,ct,Tt,jt,Be,qe,ke,Rt,Je,Dt.data):Q.isCompressedArrayTexture?S.compressedTexSubImage3D(zt,Ae,ct,Tt,jt,Be,qe,ke,Rt,Dt.data):S.texSubImage3D(zt,Ae,ct,Tt,jt,Be,qe,ke,Rt,Je,Dt):P.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Ae,ct,Tt,Be,qe,Rt,Je,Dt.data):P.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Ae,ct,Tt,Dt.width,Dt.height,Rt,Dt.data):S.texSubImage2D(S.TEXTURE_2D,Ae,ct,Tt,Be,qe,Rt,Je,Dt);S.pixelStorei(S.UNPACK_ROW_LENGTH,gt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,zn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Fs),S.pixelStorei(S.UNPACK_SKIP_ROWS,Vn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ua),Ae===0&&Q.generateMipmaps&&S.generateMipmap(zt),W.unbindTexture()},this.initRenderTarget=function(P){Z.get(P).__webglFramebuffer===void 0&&Y.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Y.setTextureCube(P,0):P.isData3DTexture?Y.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Y.setTexture2DArray(P,0):Y.setTexture2D(P,0),W.unbindTexture()},this.resetState=function(){E=0,D=0,L=null,W.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var pl=class n extends He{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Jt;let i=this,r=t.color!==void 0?new Fe(t.color):new Fe(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Dn,d=new _,f=new _,h=new _,p=new lt,x=new _(0,0,-1),g=new dt,m=new _,y=new _,v=new dt,b=new lt,A=this.camera,E=new Fn(s,o,{samples:c,type:Ii}),D=new fn({name:l.name!==void 0?l.name:"unspecified",uniforms:ph.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=E.texture,D.uniforms.color.value=r,D.uniforms.textureMatrix.value=b,this.material=D,this.onBeforeRender=function(L,w,M){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(M.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(f,x),y.reflect(d).negate(),y.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(d),A.lookAt(y),A.far=M.far,A.updateMatrixWorld(),A.projectionMatrix.copy(M.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(A.projectionMatrix),b.multiply(A.matrixWorldInverse),b.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=A.projectionMatrix;v.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],v.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],v.z=-1,v.w=(1+N.elements[10])/N.elements[14],g.multiplyScalar(2/g.dot(v)),N.elements[2]=g.x,N.elements[6]=g.y,N.elements[10]=g.z+1-a,N.elements[14]=g.w,i.visible=!1;let O=L.getRenderTarget(),X=L.xr.enabled,F=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(E),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(w,A),L.xr.enabled=X,L.shadowMap.autoUpdate=F,L.setRenderTarget(O);let k=M.viewport;k!==void 0&&L.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};pl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var _h=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function gx(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function _n(n,e,t,i=0,r=0){return gx(n,new Ot(1,i),e,t,r)}function Mp(n,e,t,i=0){return gx(n,new xi(1),e,t,i)}function xA(n,e){let t=new tt;return t.setAttribute("position",new ze(e.flat(),3)),{tone:n,geometry:t}}function mx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return xA(n,i)}function yA(){let n=[_n("fur",[0,.012,.011],[.154,.161,.132],1),_n("fur",[0,-.065,.008],[.128,.079,.108]),_n("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),_n("hand",[.023,.139,.009],[.066,.043,.082],0,.24),mx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),_n("skin",[0,-.061,-.133],[.102,.066,.065],1),_n("skinShade",[0,-.097,-.14],[.076,.031,.047]),_n("skin",[0,.015,-.15],[.041,.056,.038]),_n("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(_n("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),_n("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),Mp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),_n("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),_n("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),_n("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),_n("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),_n("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),_n("ink",[e*.047,.031,-.183],[.011,.012,.006]),Mp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),Mp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(mx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function vA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new tt;return r.setAttribute("position",new mt(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var _A=vA(yA());function bh(n=0){let e=new pn({flatShading:!0}),t=new pn({flatShading:!0}),i=new pn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new Fe("#212128"),ivory:new Fe("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=s[f];for(let y=h;y<p;y++)u.setXYZ(y,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<_h.length?u:0;if(d===o)return;o=d;let f=_h[o];for(let[h,p]of Object.entries(f))(s[h]??=new Fe).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new mt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new He(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new At;return u.add(c(_A)),u}}}var xs=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],bA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],MA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],xx=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Mh=xs.length-1,yx=Math.min(...xs.map(n=>n[1])),vx=Math.max(...xs.map(n=>n[1])),sr=new _(0,0,(yx+vx)/2),Sh=new _(.047,.027,(vx-yx)/2),SA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],wA=[-.57,.57,1,.61,-.61,-1],TA=[1,1,-.04,-.91,-.91,-.04];function wh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(w=0,M=0,R=0){let N=s.length/3;return s.push(w*r,M,R),N}function c(w,M,R){i?o.push(w,R,M):o.push(w,M,R)}function u(w,M,R,N){c(w,M,R),c(w,R,N)}function d(w,M){for(let R=0;R<w.length;R++){let N=(R+1)%w.length;u(w[N],w[R],M[R],M[N])}}function f(w,M){for(let R=0;R<w.length;R++)c(M,w[(R+1)%w.length],w[R])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=xs.map(([w,M,R,N],O)=>{let X=O===0||O===Mh,F=w*.67,k=-.024+(M+.024)*.69;return{top:l(w,R,M),middle:l(w*1.08,(R+N)/2,X?M:-.025+(M+.025)*1.04),bottom:l(w,N,M),innerTop:l(F,bA[O],k),innerBottom:l(F,MA[O],k)}});function g(w){let M=x[w],R=x[(w+1)%x.length];return[M.top,R.top,R.middle,R.bottom,M.bottom,M.middle]}let m=new Set(xx.map(({edge:w})=>w));m.add(Mh);for(let w=0;w<x.length;w++){let M=x[w],R=x[(w+1)%x.length];c(h,M.innerTop,R.innerTop),c(p,R.innerBottom,M.innerBottom),u(M.innerTop,M.top,R.top,R.innerTop),u(R.innerBottom,R.bottom,M.bottom,M.innerBottom),m.has(w)||(u(R.top,M.top,M.middle,R.middle),u(R.middle,M.middle,M.bottom,R.bottom))}let y=g(Mh);t||f(y,l(0,0,xs[Mh][1]));let v=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:w,length:M,splay:R}of xx){let[N,O,X,F]=xs[w],[k,j,U,re]=xs[w+1],ne=k-N,me=j-O,we=-me+ne*R,Ee=ne+me*R,Ce=Math.hypot(we,Ee),Le=Math.hypot(ne,me)/2,te=(X+U-F-re)/4,oe=[],_e=g(w);for(let[Me,We,Ve]of SA){let S=[l(),l(),l(),l(),l(),l()];d(_e,S),oe.push({ring:S,distance:Me*M,width:We*Le,height:Ve*te}),_e=S}let Ue=l();f(_e,Ue),a.push({x:(N+k)/2,y:(X+U+F+re)/4,z:(O+j)/2,forwardX:we/Ce,forwardZ:Ee/Ce,rows:oe,tip:Ue,length:M,pressure:-1})}let b=new tt,A=new ze(s,3).setUsage(Rn);b.setAttribute("position",A),b.setIndex(o),b.boundingSphere=new $n(new _(0,-.018,-.052),.12),b.boundingBox=new Qt(new _(-.1,-.082,-.17),new _(.1,.038,.025));let E=!0;function D(w,M=!0){let R=!1;for(let N=0;N<a.length;N++){let O=a[N],X=w?.[N],F=Number.isFinite(X)?De.clamp(X,0,1):0;if(F===O.pressure)continue;O.pressure=F,R=!0;let{forwardX:k,forwardZ:j,length:U,rows:re,tip:ne}=O,me=O.x,we=O.z,Ee=O.y,Ce=0,Le=0;for(let{ring:_e,distance:Ue,width:Me,height:We}of re){let Ve=Ue/U,S=De.smoothstep(Ve,0,.57),V=De.smoothstep(Ve,.38,1),z=(.17+F*.83)*S+(.14+F*.76)*V,G=(z+Ce)/2,W=Ue-Le,I=Math.cos(G)*W;me+=k*I,Ee-=Math.sin(G)*W,we+=j*I;for(let Z=0;Z<_e.length;Z++){let Y=wA[Z]*Me,de=TA[Z]*We,pe=de*Math.sin(z);A.setXYZ(_e[Z],r*(me+j*Y+k*pe),Ee+de*Math.cos(z),we-k*Y+j*pe)}Ce=z,Le=Ue}let te=U-Le,oe=te*Math.cos(Ce);A.setXYZ(ne,r*(me+k*oe),Ee-te*Math.sin(Ce),we+j*oe)}R&&(A.needsUpdate=!0,E=!0),M&&E&&(b.computeVertexNormals(),E=!1)}D(),b.getAttribute("normal").setUsage(Rn);let L=new He(b,e);return L.castShadow=!0,{mesh:L,pose:D,wristIndices:v}}var Ir=12,Sp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],AA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],_x=Sp.flatMap(([n,e,t])=>Array.from({length:Ir},(i,r)=>{let s=(r-.5)*Math.PI*2/Ir;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function Th(n,e){let t=_x.length,i=[],r=(j,U,re,ne,me)=>j.push(U,re,ne,U,ne,me);function s(j,U,re=!1){for(let ne=1;ne<U.length-1;ne++)re?j.push(U[0],U[ne+1],U[ne]):j.push(U[0],U[ne],U[ne+1])}let o=(j,U)=>j*Ir+(U+Ir)%Ir;for(let j=0;j<Sp.length-1;j++)for(let U=0;U<Ir;U++)(j===2||j===3)&&(U===0||U===6)||r(i,o(j,U),o(j+1,U),o(j+1,U+1),o(j,U+1));s(i,Array.from({length:Ir},(j,U)=>o(0,U))),s(i,Array.from({length:Ir},(j,U)=>o(Sp.length-1,U)),!0);let a=t,l=e.map(({geometry:j,wristIndices:U},re)=>{let ne=re===0?6:0,me=[o(4,ne),o(4,ne+1),o(3,ne+1),o(2,ne+1),o(2,ne),o(3,ne)],we=[me,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Ee=we.at(-1),Ce=new Array(j.attributes.position.count);U.forEach((oe,_e)=>{Ce[oe]=Ee[_e]});for(let oe=0;oe<Ce.length;oe++)Ce[oe]??=a++;let Le=[];for(let oe=0;oe<j.index.count;oe++)Le.push(Ce[j.index.getX(oe)]);for(let oe=0;oe<we.length-1;oe++)for(let _e=0;_e<6;_e++){let Ue=(_e+1)%6;r(i,we[oe][_e],we[oe][Ue],we[oe+1][Ue],we[oe+1][_e])}let te=[];return s(te,Ee),{socket:me,rings:we,wrist:Ee,wristIndices:U,remap:Ce,skin:Le,cap:te,sign:re===0?-1:1}}),c=new tt,u=new ze(a*3,3).setUsage(Rn);c.setAttribute("position",u);let d=new He(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(j,U)=>new rs([...i,...l.flatMap((re,ne)=>U&1<<ne?re.skin:re.cap)],1));c.setIndex(f[0]);let h=new _,p=new _,x=new _,g=new _,m=new _,y=new _,v=new _,b=new _,A=new _,E=new Xe,D=new Xe,L=new Xe,w=new _(0,0,-1),M=new Xe().setFromEuler(new $t(-1.42,0,0)),R=[.24,.62,.94,.56],N=[.089,.084,.069,.054,.037],O=0,X=0,F=!0;function k(j,U,re,ne,me){let we=!!(j[0]||j[1]);if(!we&&!F&&O===re&&X===ne)return;O=re,X=ne,F=we;for(let Ce=0;Ce<t;Ce++){let[Le,te,oe]=_x[Ce];u.setXYZ(Ce,Le*re,te*ne,oe*re)}let Ee=0;for(let Ce=0;Ce<l.length;Ce++){let Le=l[Ce],te=j[Ce],oe=e[Ce].geometry.attributes.position,_e=!!te,Ue=Le.wristIndices;_e&&me&&(Ee|=1<<Ce),p.set(0,0,0);for(let Me of Le.socket)p.add(h.fromBufferAttribute(u,Me));p.multiplyScalar(1/6),g.set(0,0,0);for(let Me of Ue)g.add(h.fromBufferAttribute(oe,Me));g.multiplyScalar(1/6).applyQuaternion(te?.quaternion??M),_e?g.add(te.position):g.add(h.set(p.x+Le.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),y.copy(m).normalize(),v.set(Le.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Le.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),_e&&x.addScaledVector(v,Math.sqrt(Math.max(.007,U**2-m.lengthSq()*.25))*.72),E.setFromUnitVectors(w,y.subVectors(x,p).normalize()),D.copy(te?.quaternion??M);for(let Me=0;Me<4;Me++){let We=Me===3;A.lerpVectors(We?x:p,We?g:x,R[Me]),L.copy(E).slerp(D,We?.79:Me*.19);for(let Ve=0;Ve<6;Ve++){let S=AA[Ve],V=N[Me];b.set(S[0]*V,S[1]*V*.84,0).applyQuaternion(L).add(A),u.setXYZ(Le.rings[Me+1][Ve],b.x,b.y,b.z)}}for(let Me=0;Me<Le.remap.length;Me++)b.fromBufferAttribute(oe,Me).applyQuaternion(D),_e?b.add(te.position):b.add(h.set(p.x+Le.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Le.remap[Me],b.x,b.y,b.z)}c.index!==f[Ee]&&c.setIndex(f[Ee]),u.needsUpdate=!0,c.computeVertexNormals()}return k([null,null],.42,1,1,!1),{mesh:d,pose:k}}function Io(n,e){let t=new gi;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Ki(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var bx=.1,EA=45,Mx=55,ml=128,wp=96,CA=[new Fe("#ffdc4d"),new Fe("#ff5d35"),new Fe("#bfc4c8")],RA=new _(0,0,-1);function Tp(){let n=new At,e=new yt({color:"#596974",roughness:.38,metalness:.6}),t=new yt({color:"#29323e",roughness:.68}),i=new Et({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new He(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new yt({color:"#7f4231",roughness:.46,metalness:.34});return r(Io([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(Io([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Kt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new it(.054,.014,.073),s,.035,.045,-.099),r(new it(.018,.008,.023),i,.035,.063,-.131),n}function Sx(n,{impact:e,onShot:t}){let i=Tp(),r=new He(new Ot(.045,0),new Et({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new tt,o=new ze(ml*18,3).setUsage(Rn),a=new ze(ml*18,3);for(let O=0;O<ml;O++)for(let X=0;X<6;X++){let F=CA[Math.floor(X/2)];a.setXYZ(O*6+X,F.r,F.g,F.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new os(s,new Ci({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new ze(wp*3,3).setUsage(Rn),u=new tt;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Va(u,new mo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:ii}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:ml},()=>({p:new _,d:new _,distance:0,active:!1,authoritative:!1})),h=Array.from({length:wp},()=>({p:new _,v:new _,life:0})),p=new _,x=new _,g=new _,m=0,y=0,v=0,b=0,A=0,E=!1;function D(O,X,F,k){for(let j=0;j<F;j++){let U=h[y++%wp];U.p.copy(O),U.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(k).addScaledVector(X,.55),U.life=.12+Math.random()*.21}}function L(O,X,F){let k=f[m++%ml];return k.p.copy(O),k.d.copy(RA).applyQuaternion(X),k.distance=0,k.active=!0,k.authoritative=F,k}function w(O){let X=L(O.position,O.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),D(p,X.d,4,2.2),A=.055,v++,t?.(O.position,O.quaternion)}function M(O,X,F){let k=L(O,X,F);D(k.p,k.d,4,2.2),l.visible=!0}function R({dt:O,aim:X,firing:F}){if(!X&&!i.visible&&!l.visible&&!d.visible)return;if(O=Math.max(0,Math.min(O,.12)),i.visible=!!X,X&&(i.position.copy(X.modelPosition??X.position),i.quaternion.copy(X.quaternion)),X&&F){if(E)for(b-=O;b<=0;)w(X),b+=bx;else w(X),b=bx;E=!0}else b=0,E=!1;A=Math.max(0,A-O),r.visible=!!X&&A>0,r.material.opacity=A/.055;let k=0;for(let U of f){if(!U.active)continue;let re=Math.min(EA*O,Mx-U.distance),ne=re>0?e?.(U.p,U.d,re,U.authoritative):null,me=ne==null?re:Math.max(0,Math.min(re,ne));U.p.addScaledVector(U.d,me),U.distance+=me,ne!=null&&(g.copy(U.d).negate(),D(U.p,g,8,4.2)),U.active=ne==null&&U.distance<Mx;let we=Math.min(.82,U.distance);for(let Ee=0;Ee<3;Ee++)for(let Ce=0;Ce<2;Ce++){let Le=(Ee+Ce)/3;x.copy(U.p).addScaledVector(U.d,-we*Le),o.setXYZ(k++,x.x,x.y,x.z)}}l.visible=k>0,k>0&&(o.needsUpdate=!0),s.setDrawRange(0,k);let j=0;for(let U of h)U.life<=0||(U.life-=O,U.v.y-=5*O,U.p.addScaledVector(U.v,O),U.life>0&&c.setXYZ(j++,U.p.x,U.p.y,U.p.z));d.visible=j>0,j>0&&(c.needsUpdate=!0),u.setDrawRange(0,j)}function N(){for(let O of f)O.active=!1;for(let O of h)O.life=0;b=A=0,E=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:R,reset:N,replay:M,get shotsFired(){return v}}}var wx=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],IA=new _(0,1,0);function Ah(n){let e=new At,t=new yt({color:"#2c4750",roughness:.43,metalness:.47}),i=new yt({color:"#899fa3",roughness:.46,metalness:.57}),r=new Et({toneMapped:!1});function s(h,p,x,g,m,y=0){let v=new He(h,p);return v.position.set(x,g,m),v.rotation.x=y,e.add(v),v}s(Io([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(Io([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Kt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Kt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new it(.044,.009,.038),r,.038,.069,-.023);let o=new He(new Kt(.002,.003,1,5,1,!0),new Et({transparent:!0,opacity:.52,depthWrite:!1,blending:ii,toneMapped:!1})),a=new He(new Ot(.012,0),new Et({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new _,c=new _,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(wx[h-1]??wx[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(IA,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var PA="wss://clouddata.turbowarp.org",LA="itssoren.github.io/VR/gorilla-lab/",Rh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Po=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),Ex="\u2601 GorillaHost",gl=["ARENE1","ARENE2","ARENE3"],DA=new Map([[Ex,"vr"],[Rh.vr,"vr"],[Rh.pc,"pc"],...Po.map(n=>[n,"player"])]),Ep=53,Eh=4400,Cx=64e3,UA=100,FA=200,NA=450,Rx=6,Ht=(n,e)=>Math.round(n).toString().padStart(e,"0");function xl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function ys(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function BA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Ht(e,7)+a.map(c=>Ht(c*100+2e4,5)).join("")+Ht(Math.round(l*10)%3600,4)+Ht(o,6)}function OA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function Ix({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,g="",m=-1/0,y=null,v=0,b=0,A=1/0,E=0,D="offline",L=!1,w=-1,M=0,R=[],N=1/0,O=350,X=1/0,F=0,k=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function U(S,V){D=S,n(V)}function re(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ne(){return[...c.values()].map(S=>S.pose).filter(Boolean)}function me(){let S=ne().filter(W=>h==="vr"?W.role!=="vr":W.role==="vr"),V=W=>Number(W.ready)*2+ +(W.role==="pc"),z=S.find(W=>W.id===y?.id)??null,G=S.reduce((W,I)=>!W||V(I)>V(W)?I:W,z);G!==y&&(y=G,e(y))}function we(S){for(let V of c.values())V.pose&&t(null,V.pose),V.pose=V.candidate=null;S&&c.clear(),me()}function Ee(){let S=f;if(f=null,S){S.onopen=S.onmessage=S.onerror=S.onclose=null;try{S.close()}catch{}}}function Ce(){Ee(),h=null,p="",A=1/0,L=!1,w=-1,R=[],k=[],we(!0),U("offline","Hors ligne")}function Le(S){let V=Math.min(3e4,1500*2**Math.min(E++,5));A=a()+V,U("retry","TurboWarp d\xE9connect\xE9 ("+S+") \xB7 reconnexion automatique au salon "+p)}function te(S){let V=!1;for(let[z,G]of c)G.pose&&S-G.pose.arrival>Eh&&(t(null,G.pose),G.pose=null,V=!0),G.candidate&&S-G.candidate.arrival>Eh&&(G.candidate=null),S-G.lastArrival>6e4&&c.delete(z);V&&me()}function oe(S,V,z,G){let W=YA(z.value,null);if(!W||W.id===x)return;let I=c.get(W.id);if(!I){if(c.size>=64)return;I={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:G,pose:null,candidate:null},c.set(W.id,I)}if(W.time<=I.lastTime)return;let Z=I.pose??I.candidate;if(Z&&W.time-Z.time>Eh+G-Z.arrival){if(I.pose)return;I.candidate=null}I.lastTime=W.time,I.lastArrival=G;let Y={...W,ready:W.ready??!0,protocol:W.protocol??(W.ready===void 0?3:4),role:S,channel:V,received:o(),arrival:G},de=I.candidate;if(!I.pose&&(!de||de.channel!==V||de.map!==Y.map||G-de.arrival>Eh)&&(W.ready!==void 0||Math.abs(W.time-Y.received)>25e3)){I.candidate=Y;return}if(I.candidate=null,!I.pose&&de?.objects&&de.ready&&de.map===Y.map&&!Y.objects&&(Y.objects=de.objects),I.pose=Y,h==="vr"&&S==="vr"&&Y.ready)if(X===1/0||de?.arrival<X||W.id<x)h="player",g=Po[x%Po.length],U("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(j.received++,j.bytesReceived+=z.value.length,t(Y),me(),!(!L||!Y.ready||Y.map!==w)){G-I.shotWindow>=1e3&&(I.shotWindow=G,I.shotCount=0);for(let{seq:pe,position:C,quaternion:T}of Y.shots??[])pe<=I.lastShot||(I.lastShot=pe,!(I.shotCount>=14||(C.x-Y.x)**2+(C.y-Y.y)**2+(C.z-Y.z)**2>7**2)&&(I.shotCount++,r({position:C,quaternion:T},Y)));if(!(h!=="vr"||S!=="player"||W.actionTarget!==x))for(let{seq:pe,action:C}of W.actions)pe<=I.lastAction||(I.lastAction=pe,i(C,Y))}}function _e(){let S;try{S=new s(PA)}catch{return!1}return f=S,b=a(),m=-1/0,X=1/0,U("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),S.onopen=()=>{f===S&&(v=a(),S.send(JSON.stringify({method:"handshake",project_id:LA+p,user:"player"+x})+`
`),U("open",re()))},S.onmessage=V=>{if(f!==S||typeof V.data!="string"||V.data.length>105e4)return;let z=a();te(z);for(let G of V.data.split(`
`)){if(!G.trim())continue;let W;try{W=JSON.parse(G)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",G.slice(0,200));continue}let I=DA.get(W?.name);W?.method!=="set"||!I||oe(I,W.name,W,z)}},S.onerror=()=>{f===S&&U("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},S.onclose=V=>{if(f!==S)return;let z=V.code;if(Ee(),we(!1),R=[],k=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(z)){Le(z);return}h=null,p="";let G={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[z];U("error","TurboWarp d\xE9connect\xE9 ("+z+")"+(G?" \xB7 "+G:V.reason?" \xB7 "+V.reason.slice(0,100):""))},!0}function Ue(S,V){let z=xl(S);return!/^[A-Z0-9]{5,12}$/.test(z)||!["vr","pc","player"].includes(V)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===V&&p===z?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(we(!0),x=Math.floor(1e6+l()*8999999),h=V,p=z,g=Rh[h]??Po[x%Po.length],O=350,h==="vr"&&gl.includes(p)&&(g=x%2===0?Rh.vr:Ex,O=750+x%150),M=F=0,k=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},E=0,A=N=1/0,_e()?!0:(h=null,p="",U("error","WebSocket indisponible."),!1))}function Me(S,V){let z=S.hand||S.type==="world"?5:4;if(h!=="player"||D!=="open"||!y?.ready||y.protocol<z||y.map!==V||!Cp(S)||M>=99999999)return!1;let G=a();return R=R.filter(W=>W.expires>=G&&W.target===y.id&&W.map===V),R.length>=8?!1:(R.push({action:{...S},seq:++M,expires:G+1800,target:y.id,map:V}),!0)}function We(S,V,z){if(!h||h==="pc"||D!=="open"||F>=99999999)return;let G=Uo(S),W=Fo(V);if(!G||!W)return;let I=a();k=k.filter(Z=>Z.expires>=I&&Z.map===z).slice(-(Rx-1)),k.push({record:Ht(++F,8)+G+W,expires:I+NA,map:z})}function Ve(S){let V=a();L=!!S&&S.ready!==!1,w=S?.map??-1,te(V),h&&!f&&V>=A&&(A=1/0,_e()||Le(1006)),f&&f.readyState===0&&V-b>1e4&&(Ee(),Le(1006)),j.bufferedBytes=f?.bufferedAmount??0;let z=h==="pc"?FA:UA;if(!S||!h||f?.readyState!==1||j.bufferedBytes>4096||V-v<(h==="vr"?O:350)||V-m<z)return!1;if(h==="player"){let de=ne().filter(C=>C.role==="player"),pe=de.find(C=>C.channel===g);if(pe?N=Math.min(V,N):N=1/0,pe&&(pe.id<x||V-N>=800)){let C=Po.find(T=>!de.some(q=>q.channel===T));if(!C)return D!=="capacity"&&U("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=C,N=1/0}}(E||D==="capacity")&&(E=0,U("open",re()));let G=Math.round(d+V-u),W=BA({...S,time:G,id:x});if(!W)return!1;R=R.filter(de=>de.expires>=V&&de.target===y?.id&&de.map===S.map),k=k.filter(de=>de.expires>=V&&de.map===S.map);let I=j.bufferedBytes===0?S.objectFeed?.(V):null,Z=typeof S.avatar=="function"?S.avatar():S.avatar,Y=XA(W,Z,I,{version:5,ready:S.ready!==!1,actions:R,actionTarget:R[0]?.target??0,shots:k,score:S.score});return m=V,h==="vr"&&(X=Math.min(X,V)),f.send(JSON.stringify({method:"set",name:g,value:Y})+`
`),j.sent++,j.bytesSent+=Y.length,!0}return{join:Ue,leave:Ce,tick:Ve,sendAction:Me,queueShot:We,get stats(){return{...j}},get role(){return h},get code(){return p},get state(){return D},get remote(){return y},get peers(){return ne()}}}var zA=15,VA=12,Px=44,Ch=15,Ap=35,Uo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Ht(e*100+2e4,5)).join(""):null;function Lo(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Fo=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Ht(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Do(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function kA(n){let e=Uo(n.mesh.position),t=Fo(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>Ep)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Ht(i,5)+Ht(r,2)+s+o+Ht(a,8)+e+t}function GA(n){return Ht(n,5)+"99"+"0".repeat(Px-7)}function HA(n){if(!n)return null;let e=Fo(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Uo(l.position),u=l&&Fo(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(zA+VA)}),r=Ht(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Ht(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+Ht(n.color??0,2)+a}function Cp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Ep?"10"+Ht(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Ht(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Ht(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Ht(i,5):null}function WA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),Cp(s)===n?s:null}function qA(n){let e=Uo(n?.position),t=Fo(n?.quaternion),i=Uo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function XA(n,e,t,i=null){let r=HA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Ht(p,8)+Cp(x)).join(""),a=i.version===5,l=a&&Uo(e?.gun?.position),c=a&&Fo(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Ht(d.length,1)+d.map(p=>p.record).join("")+Ht(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+qA(r?e.tool:null)+Ht(i.actionTarget??0,7)+Ht(o.length/Ch,1)+o+f;return h.length+1+s.length>Cx&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function Tx(n,e,t){let i=Do(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:Lo(n,o+1),quaternion:Do(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function YA(n,e){if(typeof n!="string"||n.length>Cx||!/^[0-9]+$/.test(n))return null;let t=OA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:Px,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=Tx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Lo(n,a+2),f=Do(n,a+17),h=Lo(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*Ch+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=Ch){let u=Number(n.slice(a,a+8)),d=WA(n.slice(a+8,a+Ch));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=Lo(n,a+1),h=Do(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>Rx||n.length<a+u*Ap+7)return null;t.shots=[];let d=0;for(let f=a+u*Ap;a<f;a+=Ap){let h=Number(n.slice(a,a+8)),p=Lo(n,a+8),x=Do(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=Tx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Lo(n,c+10),g=Do(n,c+25);if(d>Ep||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var ZA=.45,Ax=2.5;function Lx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=ZA&&!d.frozen&&(d.velocity.lengthSq()>=Ax**2||d.angular.lengthSq()*d.radius**2>=Ax**2);if(!l&&!p&&!h?.fast)continue;let x=kA(d);if(!x)continue;c?.add(f);let g=x!==h?.record;g&&e.set(f,{record:x,until:s+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:GA(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Dx=Gt.DEFAULT_UP,jA=15,Ux=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function JA(){let n=new At,e=new He(new Ot(.155,1),new yt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new He(new yi(.23,.018,5,20),new Et({color:"#84e6ff",transparent:!0,opacity:.85,blending:ii,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new He(new $i(.11,.28,9,1,!0),new Et({color:"#55c7ff",transparent:!0,opacity:.45,side:un,blending:ii,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function QA(){let n=new At,e=new At,t=bh(0),i=t.createHead(),r=["left","right"].map(m=>({skin:wh(m,t.hand,{openWrist:!0}),position:new _,quaternion:new Xe,pressure:[0,0,0],tracked:!1})),s=Th(t.fur,r.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=Ah(e),l=null,c=new _,u=[null,null],d=new _,f=new Xe,h=new Xe,p=new Xe,x={mode:0,position:new _,quaternion:new Xe,end:new _};function g(m,y,v){let b=m.avatar,A=1-Math.exp(-v*32);if(!b){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(b.head).premultiply(f),i.quaternion.slerp(p,A),d.set(0,0,-1).applyQuaternion(i.quaternion);let E=De.smoothstep(-d.y,.28,.94),D=Math.max(.38,b.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*D,.24*E),o.rotation.x=-.5*E,h.copy(o.quaternion).invert(),t.setColor(b.color??0);for(let M=0;M<r.length;M++){let R=r[M],N=b.hands[M];if(u[M]=N?R:null,!N){R.tracked=!1;continue}c.copy(N.position).sub(m).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(N.quaternion).premultiply(f).premultiply(h),R.tracked?(R.position.lerp(c,A),R.quaternion.slerp(p,A)):(R.position.copy(c),R.quaternion.copy(p)),R.tracked=!0;for(let O=0;O<3;O++)R.pressure[O]+=((N.pressure?.[O]??0)-R.pressure[O])*A;R.skin.pose(R.pressure,!1)}if(s.pose(u,b.armSpan*.5,.97,D,!0),b.gun){l||(l=Tp(),l.visible=!1,e.add(l));let M=l.visible?A:1;l.position.lerp(b.gun.position,M),l.quaternion.slerp(p.copy(b.gun.quaternion),M),l.visible=!0}else l&&(l.visible=!1);let L=b.tool;if(!L){a.hide(),x.mode=0;return}let w=x.mode?A:1;x.mode=L.mode,x.position.lerp(L.position,w),x.quaternion.slerp(p.copy(L.quaternion),w),x.end.lerp(L.end,w),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of r)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Fx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Nx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=Lx(),d=0,f=-1,h=-1,p="",x=0;function g(){let S=e();return S!==p&&(p=S,x=ys(S)),x}function m(S){return!!S?.ready&&S.map===g()}function y(S){let V=c.get(S);V&&(n.remove(V.mesh),V.mesh.material?.dispose(),c.delete(S))}function v(){for(let S of c.keys())y(S);d=0,f=-1,h!==-1&&(h=-1,r?.(null))}function b(S,V){if(S.color===V.color&&S.style===V.style)return;S.color=V.color,S.style=V.style;let z=S.mesh.material;if(z?.color){if(z.color.setHex(V.color),V.style===0){Object.assign(z,S.baseMaterial),S.baseEmissive&&z.emissive.copy(S.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][V.style],z.metalness=[.1,0,.87,.12,0][V.style],z.opacity=V.style===3?.4:1,z.transparent=V.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=V.style===4?1.65:0,z.needsUpdate=!0}}function A(S){if(!m(S)){v();return}if((d!==S.id||f!==S.map)&&(v(),d=S.id,f=S.map),S.avatar&&S.avatar.light!==h&&(h=S.avatar.light,r?.(h)),!S.objects)return;let V=S.objects.full?new Set:null;for(let z of S.objects.records){if(z.removed){y(z.id);continue}V?.add(z.id);let G=c.get(z.id);if(G&&G.type!==z.type&&(y(z.id),G=null),!G){let I=i?.(z.type);if(!I)continue;let{roughness:Z,metalness:Y,transparent:de,depthWrite:pe,opacity:C,emissiveIntensity:T}=I.material??{},q={roughness:Z,metalness:Y,transparent:de,depthWrite:pe,opacity:C,emissiveIntensity:T};I.userData.netId=z.id,I.userData.netType=z.type,G={mesh:I,baseMaterial:q,baseEmissive:I.material?.emissive?.clone(),type:z.type,target:new _().copy(z.position),quaternion:new Xe().copy(z.rotation),velocity:new _,time:S.time},I.position.copy(G.target),I.quaternion.copy(G.quaternion),c.set(z.id,G),n.add(I)}let W=(S.time-G.time)/1e3;W>.06&&W<.65&&!(z.flags&6)?G.velocity.copy(z.position).sub(G.target).multiplyScalar(1/W).clampLength(0,23):G.velocity.set(0,0,0),G.target.copy(z.position),G.quaternion.copy(z.rotation),G.time=S.time,G.flags=z.flags,G.frequent=W>.06&&W<.16,G.received=S.arrival,G.mesh.userData.netFlags=z.flags,G.mesh.userData.held=!!(z.flags&1),b(G,z)}if(V)for(let z of c.keys())V.has(z)||y(z)}let E=new _;function D(S,V,z){let G=1-Math.exp(-S*22),W=1-Math.exp(-S*32);for(let I of c.values()){if(I.mesh.visible=V,!V)continue;let Z=I.frequent?W:G,Y=I.flags&6?0:Math.min(I.frequent?.1:.12,Math.max(0,(z-I.received)/1e3));E.copy(I.target).addScaledVector(I.velocity,Y),I.mesh.position.distanceToSquared(E)>16||I.flags&6&&I.mesh.position.distanceToSquared(I.target)<1e-4?I.mesh.position.copy(E):I.mesh.position.lerp(E,Z),I.mesh.quaternion.slerp(I.quaternion,Z),I.flags&6&&I.mesh.quaternion.angleTo(I.quaternion)<.008&&I.mesh.quaternion.copy(I.quaternion),I.mesh.updateMatrixWorld(!0)}}let L=S=>document.querySelector(S),w=L("#cloud-status"),M=L("#cloud-room"),R=L("#cloud-camera"),N=-1/0,O=0,X="Hors ligne",F=0;function k(S){O=S,R.textContent="Cam\xE9ra : "+Ux[S]}function j(){k((O+1)%Ux.length)}R.onclick=j;let U=Ix({onStatus(S){X=S,w.textContent=S,a?.()},onPose(S){U.role!=="vr"&&A(S)},onPeer(S,V){if(!S){let W=l.get(V.id);W?.art&&(Fx(W.art.model),Fx(W.art.toolRoot),W.art.dispose?.()),l.delete(V.id);return}let z=l.get(S.id);z||(z={art:null,motion:new _,handMotion:[new _,new _]},l.set(S.id,z));let G=z.pose;z.motion.set(0,0,0);for(let W of z.handMotion)W.set(0,0,0);if(G&&G.map===S.map){let W=(S.time-G.time)/1e3;if(W>=.055&&W<=.65){z.motion.set(S.x-G.x,S.y-G.y,S.z-G.z).multiplyScalar(1/W),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let I=0;I<2;I++){let Z=G.avatar?.hands[I],Y=S.avatar?.hands[I];Z&&Y&&z.handMotion[I].copy(Y.position).sub(Z.position).multiplyScalar(1/W).clampLength(0,23)}}}z.pose=S},onAction:s,onShot:o}),re=xl(new URLSearchParams(location.search).get("room")??"");function ne(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),S=>(S%36).toString(36)).join("").toUpperCase()}M.value=/^[A-Z0-9]{5,12}$/.test(re)?re:ne();function me(S,V=M.value){let z=xl(V);if(!(U.role===S&&U.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){w.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}U.role&&U.leave(),U.join(z,S)&&(M.value=z,S!=="vr"&&L("#game").focus(),u.reset(),k(0),t(ys(z)),p="")}}L("#cloud-vr").onclick=()=>me("vr"),L("#cloud-new").onclick=()=>me("vr",ne());for(let[S,V]of gl.entries())L(`#public-join-${S}`).onclick=()=>me("player",V),L(`#public-host-${S}`).onclick=()=>me("vr",V);L("#cloud-pc").onclick=()=>me("pc");let we=L("#cloud-player");we&&(we.onclick=()=>me("player")),L("#cloud-leave").onclick=()=>{F=0,U.leave()},L("#cloud-copy").onclick=async()=>{let S=new URL(location.href);S.searchParams.set("room",U.code||xl(M.value));try{await navigator.clipboard.writeText(S.href),w.textContent="Lien copi\xE9."}catch{w.textContent=S.href}F=performance.now()+2500},addEventListener("pagehide",()=>U.leave());let Ee=new _,Ce=new _,Le=new _,te=new _,oe=0;function _e({dt:S,position:V,yaw:z,pitch:G,camera:W,rig:I,keys:Z,flat:Y}){let de=Y?.movement,pe=Number(Z.has("KeyD"))-Number(Z.has("KeyQ")||Z.has("KeyA"))+(de?.x??0),C=Number(Z.has("KeyS"))-Number(Z.has("KeyZ")||Z.has("KeyW"))+(de?.z??0);Y?.consumeJump?.()&&(oe=.26),oe=Math.max(0,oe-S);let T=Number(Z.has("Space")||oe>0)-Number(Z.has("ShiftLeft")||Z.has("ShiftRight")),q=Z.has("ControlLeft")||Z.has("ControlRight")?11:3.2;te.set(pe,T,C).clampLength(0,1).applyAxisAngle(Dx,z),I.position.addScaledVector(te,S*q).clampScalar(-175,175),I.rotation.set(0,z,0),W.position.set(0,0,0),W.rotation.set(G,0,0,"YXZ"),I.updateMatrixWorld(!0),V.copy(I.position)}function Ue(S,V,z,G){for(let W of l.values()){let I=W.pose;if(!(S&&m(I))){W.art&&(W.art.model.visible=!1,W.art.toolRoot&&(W.art.toolRoot.visible=!1));continue}W.art||(W.art=I.role==="pc"?JA():QA(),n.add(W.art.model),W.art.model.visible=!1,W.art.toolRoot&&n.add(W.art.toolRoot));let{model:Y,toolRoot:de}=W.art,pe=Math.min(.12,Math.max(0,(G-I.arrival)/1e3+.025));Ee.copy(I).addScaledVector(W.motion,pe),!Y.visible||Y.position.distanceToSquared(Ee)>64?Y.position.copy(Ee):Y.position.lerp(Ee,1-Math.exp(-z*34)),Y.rotation.y=I.yaw,Y.visible=!0,de&&(de.visible=!0),W.art.draw(I,V,z)}}function Me(S,V){if(V<F)return;let z=U.remote,G=X;if(U.state==="open"){let W="Salon "+U.code+" \xB7 ",I=U.peers.filter(Z=>Z.ready);if(!S)G=W+"quitte la session VR pour utiliser le mode spectateur";else if(U.role!=="vr"&&z&&z.map!==g())G=W+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(U.role!=="vr"&&z&&!z.ready)G=W+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(U.role==="player"&&z&&z.protocol<5)G=W+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(U.role!=="vr"&&m(z))G=W+"h\xF4te connect\xE9";else if(U.role==="vr"){let Z=I.filter(m),Y=Z.filter(pe=>pe.role==="player").length,de=Z.some(pe=>pe.role==="pc");G=W+"tu h\xE9berges \xB7 "+(Y+1)+" joueur"+(Y?"s":""),de&&(G+=" \xB7 spectateur connect\xE9"),!Y&&I.some(pe=>!m(pe))&&(G+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}w.textContent!==G&&(w.textContent=G,a?.())}function We(S){let{inVR:V,time:z,dt:G,position:W,yaw:I,camera:Z,rig:Y,keys:de,avatar:pe,bodies:C}=S;if(!U.role){v();return}let T=U.role!=="pc"||!V,q=performance.now(),se=g(),he=U.role!=="vr"?U.remote:null,ie=T&&m(he);if(!ie&&f!==-1&&v(),D(G,ie,q),Ue(T,z,G,q),U.role==="pc"&&!V){(S.actions??de).delete("KeyC")&&j();let Te=O===3&&ie?[...c.values()].find(Re=>Re.type===jA)?.mesh:null,be=ie?l.get(he.id)?.art?.model:null;Te?(Le.set(0,0,-.23).applyQuaternion(Te.quaternion),Y.position.copy(Te.position).add(Le),Y.rotation.set(0,0,0),Z.position.set(0,0,0),Z.quaternion.copy(Te.quaternion),Y.updateMatrixWorld(!0),W.copy(Y.position)):be&&(O===1||O===2)?(Le.set(0,.72,O===1?-2.7:2.7).applyAxisAngle(Dx,be.rotation.y),Ce.copy(be.position).add(Le),Y.position.lerp(Ce,1-Math.exp(-G*11)),Z.position.set(0,0,0),Y.updateMatrixWorld(!0),Z.lookAt(be.position),Z.updateWorldMatrix(!0,!1),W.copy(Y.position)):_e(S)}U.tick({x:W.x,y:W.y,z:W.z,yaw:I,map:se,ready:T,avatar:T&&U.role!=="pc"?pe:null,objectFeed:T&&U.role==="vr"&&C?Te=>u.capture(Te,C):null}),q-N>=150&&(N=q,Me(T,q))}function Ve(S){let V=l.get(S)?.pose;return m(V)?V:null}return{update:We,getPeer:Ve,connect:me,leave:()=>U.leave(),get caption(){return w.textContent},handMotion(S,V){return l.get(S)?.handMotion[V]},sendAction(S){return U.sendAction(S,g())},sendShot(S,V){U.queueShot(S,V,g())},get stats(){return U.stats},get role(){return U.role},get connected(){return m(U.remote)},get remoteSpectator(){return U.peers.find(S=>S.role==="pc"&&m(S))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(S){for(let V of c.values())V.mesh.visible&&S(V.mesh)}}}function Ih(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new tt,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=Bx(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=Bx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Bx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new mt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Lh=0,$A=1,KA=new _,Ox=new sl,Rp=new Dn,zx=new _,Ph=new Un,Dh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Uh,this.unassigned=new Uh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Ip(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new _;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,KA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Lh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,Ox.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Ox.closestPointToPoint(p.point,!0,zx);let x=zx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,Rp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Rp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(Rp.distanceToPoint(u.point)<0){d.push(_i.create(a,l,c),_i.create(u,l,a),_i.create(u,c,l),_i.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(_i.create(a,c,l),_i.create(u,a,l),_i.create(u,l,c),_i.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>s&&(s=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Lh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=$A;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===Lh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=_i.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},_i=class n{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=Lh,this.edge=null}static create(e,t,i){let r=new n,s=new yl(e,r),o=new yl(t,r),a=new yl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Ph.set(e.point,t.point,i.point),Ph.getNormal(this.normal),Ph.getMidpoint(this.midpoint),this.area=Ph.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},yl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Ip=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Uh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var or=class extends tt{constructor(e=[]){super();let t=[],i=[],s=new Dh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new ze(t,3)),this.setAttribute("normal",new ze(i,3))}};var Vx=48,eE=3,tE=128,kx=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),nE=(n,e,t)=>Math.max(e,Math.min(t,n)),iE=()=>structuredClone(kx.shield),vl=(n,e,t,i)=>Number.isFinite(n)?nE(n,t,i):e;function Nh(n){let e=n?.mode==="lathe"?kx.bottle:iE(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Vx?n.points.map(o=>[vl(o?.[0],0,-1.5,1.5),vl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:vl(n?.depth,e.depth,.025,1.5),bevel:vl(n?.bevel,e.bevel,0,.15),segments:Math.round(vl(n?.segments,32,eE,tE))}}function Gx(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Fh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function rE(n,e,t,i){let r=Fh(n,e,t),s=Fh(n,e,i),o=Fh(t,i,n),a=Fh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function sE(n){let e=Nh(n),t=e.mode==="lathe"?e.points:Gx(e);if(t.length<3||t.length>Vx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&rE(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Hx(n){let e=Nh(n),t=sE(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([f,h])=>new ve(Math.max(0,f),h));r[0].y>r.at(-1).y&&r.reverse(),r[0].x>0&&r.unshift(new ve(0,r[0].y)),r.at(-1).x>0&&r.push(new ve(0,r.at(-1).y)),i=new Qa(r,e.segments);let s=[],o=i.attributes.position,a=new _,l=new _,c=new _,u=new _,d=i.index.array;for(let f=0;f<d.length;f+=3)a.fromBufferAttribute(o,d[f]),l.fromBufferAttribute(o,d[f+1]),c.fromBufferAttribute(o,d[f+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&s.push(d[f],d[f+1],d[f+2]);i.setIndex(s)}else{let r=Gx(e),s=new gi;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Ki(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new mt(new Float32Array(r*2),2))}return i}var Nn=Math.PI*2,Bh=.84,ar=128;function Dr(n){let e=new Uint8Array(ar*ar*4);for(let i=0;i<ar;i++)for(let r=0;r<ar;r++){let s=(r+.5)/ar,o=(i+.5)/ar,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Bh,1),Math.min(o/Bh,1),r,i),l=(r+i*ar)*4;for(let c=0;c<3;c++)e[l+c]=De.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ei(e,ar,ar);return t.colorSpace=ht,t.generateMipmaps=!0,t.minFilter=En,t.magFilter=nn,t.needsUpdate=!0,t}function vs(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function st(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new Fe(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Bh,s.getY(l)*Bh):s.setXY(l,.95,.95);return i.setAttribute("color",new mt(a,3)),i}function Ur(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Ih(r),material:new yt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Wx(n,e,t){let i=n/2,r=e/2,s=new gi;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Pr(n,e,t,i,r){return new Ki(Wx(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Lr(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Nn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&s.push(g,g+1,m),n[u+1][0]>0&&s.push(g+1,m+1,m)}}let o=new tt;o.setAttribute("position",new ze(i,3)),o.setAttribute("uv",new ze(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function _l(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new _(0,r,0));continue}for(let s=0;s<e;s++){let o=Nn*s/e;t.push(new _(i*Math.sin(o),r,i*Math.cos(o)))}}return new or(t)}function oE(){let t=new $a(Wx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=De.clamp(i.getX(l)/.098+.5,0,1),u=De.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Dr((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Nn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[st(Pr(.106,.207,.013,.011,.0019),8425890),st(Pr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),st(Pr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),st(t,16777215,!0),st(Pr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),st(new it(.0036,.024,.004).translate(.055,.029,0),11714250),st(new it(.0036,.015,.004).translate(-.055,.032,0),11385285),st(new it(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(st(new Kt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(st(new cn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(st(new cn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new or([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Ur("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function aE(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Lr(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Dr((a,l,c,u)=>{let d=Nn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(y=>Math.exp(-(((f-y+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=vs(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=_l([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ur("bread","Baguette de pain",.27,o,[st(r,16777215,!0)],s,.9)}function lE(){let n=Dr((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*vs(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Lr([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Lr([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[st(e,16777215,!0),st(t,11056059),st(new Kt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),st(new Kt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Nn*s/5;i.push(st(new it(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=_l([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ur("wheel","Roue",1.8,r,i,n,.64,.23)}function cE(){let n=Dr((s,o,a,l)=>{let c=vs(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Nn*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Lr([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new yi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Nn*l/5;return new _(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let r=new or(i);return Ur("cup","Tasse",.39,r,[st(e,16777215,!0),st(t,15785922)],n,.37)}function uE(){let n=Lr([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Dr((r,s,o,a)=>{let l=9*vs(o,a),c=11*Math.cos(r*Nn*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Nn*48+r*Nn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Nn*4);return[u,u*1.13,u*1.24]}),t=[st(n,16777215,!0),st(new vo(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),st(new cn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),st(new cn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),st(new Kt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),st(new cn(.008,12).translate(0,.035,.0336),15633202)],i=_l([[.033,-.143],[.054,.133]],6);return Ur("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function hE(){let n=Lr([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Dr((s,o,a,l)=>{let c=10*vs(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Nn*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Nn*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[st(n,16777215,!0),st(new cn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),st(new vo(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),st(new cn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=_l([[.069,-.112],[.069,.109]],6);return Ur("soda","Canette de soda",.35,r,i,t,.42,.27)}function dE(){let n=Lr([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Dr((r,s,o,a)=>{let l=15*vs(o,a),c=8*Math.cos(r*Nn*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[st(n,16777215,!0),st(Pr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),st(new cn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=_l([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ur("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function fE(){let n=Dr((r,s,o,a)=>{let l=8*vs(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Lr([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[st(Pr(.138,.22,.061,.016,.004),14788675),st(Pr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),st(new rn(.106,.174).translate(0,-.004,.0395),16777215,!0),st(e,2502456),st(new Kt(.014,.017,.016,10).translate(.04,.117,.001),2503482),st(new it(.008,.047,.027).translate(-.072,.014,-.002),3028798),st(new it(.006,.02,.019).translate(-.072,-.043,-.002),3950414),st(new cn(.004,8).translate(.04,.066,.0397),15817792),st(new cn(.004,8).translate(-.04,.066,.0397),7903100),st(Pr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new _(r,l,o),new _(s,l,o),new _(s,l,a),new _(r,l,a)]);return Ur("radio","Talkie-walkie",.43,new or(i),t,n,.61,.08)}function qx(){return[oE(),aE(),lE(),cE(),uE(),hE(),dE(),fE()]}var Bn=new Xe,Wt=new _,qh=new _,pE=new lt,Xx=new WeakMap;function jh(n){if(n.heightfield||n.objectBody)return null;let e=Xx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=pE.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Xx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function sy(n,e,t){let i=jh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Xh(n,e,t,i){if(t.heightfield)return AE(n,e,t,i);if(t.objectBody)return my(n,e,t.objectBody,i);if(!sy(n,e,t))return 0;Bn.copy(t.quaternion).invert(),Wt.copy(n).sub(t.position).applyQuaternion(Bn);let r=t.half;qh.copy(Wt).clamp(t.min,r),i.subVectors(Wt,qh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(Wt.x),a=r.y-Math.abs(Wt.y),l=r.z-Math.abs(Wt.z);return o<=a&&o<=l?i.set(Math.sign(Wt.x)||1,0,0):a<=l?i.set(0,Math.sign(Wt.y)||1,0):i.set(0,0,Math.sign(Wt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var ot=new _,lr=new _;function Hp(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Xh(n,e,u,ot);if(!d||(n.addScaledVector(ot,d+1e-4),ot.y>=.62&&(l=!0,a&&ot.y>a.normal.y&&(a.normal.copy(ot),a.surface=u)),!i))continue;let f=i.dot(ot);f<0&&i.addScaledVector(ot,-f*(Math.abs(f)<.55?1:1+r)),lr.copy(i).addScaledVector(ot,-i.dot(ot)),i.addScaledVector(lr,-Math.min(.95,s*u.friction*o))}return l}var Pp=new _,zo=[];function El(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));zo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=jh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&zo.push(h)}for(let h=1;h<=o;h++){Pp.copy(n).lerp(e,h/o);for(let p of zo){let x=Xh(Pp,t,p,ot);if(x)return r.copy(Pp).addScaledVector(ot,x+.001),s.copy(ot),p}}return null}var Sl=new _,Al=new _,Vo=new _,oy=new Un,wl=new _;function bi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new _().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");s.has(g)||(s.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=b=>new _().fromBufferAttribute(t,n.index?n.index.getX(b):b),g=x(p),m=x(p+1),y=x(p+2),v=new Un(g,m,y).getNormal(new _);v.lengthSq()>.1&&r.push({a:g,b:m,c:y,n:v})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new Qt().setFromPoints(i).getSize(new _),u=Math.max(1e-4,e**2*.4),d=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new _().subVectors(p.b,p.a).normalize(),new _().subVectors(p.c,p.b).normalize(),new _().subVectors(p.a,p.c).normalize()]))}}function Jh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Bn.copy(t.quaternion).invert(),Wt.copy(n).sub(t.position).applyQuaternion(Bn),i.faces.every(s=>s.n.dot(Sl.subVectors(Wt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)oy.set(s,o,a).closestPointToPoint(Wt,wl),r=Math.min(r,Wt.distanceToSquared(wl));return Math.sqrt(r)}function mE(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Xh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Bn.copy(e.quaternion).invert(),Wt.copy(r.position).sub(e.position).applyQuaternion(Bn),qh.copy(Wt).clamp(e.min,e.half),Wt.distanceToSquared(qh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){Sl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Xh(Sl,.007,e,Vo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Sl),t.copy(Vo)):Math.abs(c-o)<.003&&Vo.dot(t)>.98&&(i.lerp(Sl,1/++a),o=Math.max(o,c)))}return o}var Oh=new _,gE=new _,zh=new _,xE=new _,Yx=new Xe,Zx=new Xe,jx=new _,Lp={min:0,max:0},Dp={min:0,max:0};function Jx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}jx.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(jx);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function ri(n){return bi(new it(n.x*2,n.y*2,n.z*2))}function Qh(n,e,t){let i=xE.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Yx.copy(n.mesh.quaternion).invert(),Zx.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);Jx(n.shape,o,Yx,Lp),Jx(e.shape,o,Zx,Dp);let l=Dp.max-Lp.min-a,c=Lp.max-Dp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Oh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Oh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){zh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Oh.copy(a).applyQuaternion(e.mesh.quaternion).cross(zh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(gE.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Bn.copy(a.mesh.quaternion).invert(),Wt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Bn);for(let{a:c,b:u,c:d}of a.shape.faces){oy.set(c,u,d).closestPointToPoint(Wt,wl);let f=Wt.distanceToSquared(wl);f<l&&(l=f,zh.copy(wl))}if(!s(Oh.subVectors(Wt,zh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var yE=new _;function vE(n,e,t){Bn.copy(e.quaternion).invert(),Wt.copy(n.mesh.position).sub(e.position).applyQuaternion(Bn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Wt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=Wt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Vp(n,yE.copy(t).negate())-r,a=s+Vp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Wp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return mE(n,e,t,i??Al);let r=vE(n,e,t)??Qh(n,e,t);return r>0&&i&&cy(n,e,t,i),r}var zp=bi(new xi(1,0).scale(...Sh)),Vh={mesh:{position:new _,quaternion:new Xe},shape:zp,radius:zp.radius,precise:!0};function ay(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=zp.radius;zo.length=0;for(let c of i){let u=jh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||zo.push(c)}Vh.mesh.quaternion.copy(t);let l=Vh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of zo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Qh(Vh,d,ot):Wp(Vh,u,ot);if(f>0)return r.copy(l).addScaledVector(ot,f+5e-4),s.copy(ot),u}}return null}function Cl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!sy(n.mesh.position,n.radius,r))continue;let s=Wp(n,r,ot);s<=1e-6||(n.mesh.position.addScaledVector(ot,s),i=!0)}if(!i)break}}var Up=new _,bl=new _,kh=new _,Fp=new Xe,Fr=new Xe,Qx=new Xe;function $x(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function ly(n,e,t,i,r){let{mesh:s,shape:o}=n;Up.copy(s.position),Fp.copy(s.quaternion),bl.subVectors(e,Up);let a=$x(Fp,t,Fr),l=bl.length()+a*o.radius,c=fy(o),u=Math.max(1,Math.min(dy,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;kh.set(Fr.x,Fr.y,Fr.z).normalize(),Qx.setFromAxisAngle(kh,f),bl.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(bl),s.quaternion.premultiply(Qx).normalize(),Cl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(bl.subVectors(s.position,Up).divideScalar(h).clampLength(0,23),.52);let p=$x(Fp,s.quaternion,Fr);kh.set(Fr.x,Fr.y,Fr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(kh,.52)}function Vp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Bn.copy(n.mesh.quaternion).invert(),Vo.copy(e).applyQuaternion(Bn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Vo));return t}var Oo=new _,Yh=new _,_E=new _,Np=new _,No={},Bo={};function Kx(n,e,t,i){let{mesh:r,shape:s}=n,o=Vp(n,_E.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Oo),i.minV=i.maxV=r.position.dot(Yh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Vo)<o-.0015)continue;Np.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Np.dot(Oo),c=Np.dot(Yh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function cy(n,e,t,i){Math.abs(t.y)<.8?Oo.set(-t.z,0,t.x).normalize():Oo.set(t.y,-t.x,0).normalize(),Yh.crossVectors(t,Oo),Kx(n,t,-1,No),Kx(e,t,1,Bo);let r=(Math.max(No.minU,Bo.minU)+Math.min(No.maxU,Bo.maxU))*.5,s=(Math.max(No.minV,Bo.minV)+Math.min(No.maxV,Bo.maxV))*.5;i.copy(t).multiplyScalar((No.plane+Bo.plane)*.5).addScaledVector(Oo,r).addScaledVector(Yh,s)}var ey=new _;function Zh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)ey.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(ey)}}function ty(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function uy(n){return!n.owner&&!n.frozen}var _s=new _,bs=new _,Ml=new _,ny=new _,kp=new _,Gp=new _,bE=new _;function Gh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function hy(n,e,t,i){let{mesh:r,shape:s}=n.body;return Bn.copy(r.quaternion).invert(),kp.crossVectors(e,t),i.copy(kp).applyQuaternion(Bn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Hh(n,e,t){return n?.inverseMass?(hy(n,e,t,Gp),n.inverseMass+kp.dot(Gp)):0}function Wh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(hy(n,e,t,Gp),i))}function Bp(n){return n.friction??n.spec?.friction??.78}function iy(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Bp(s)*Bp(o)):Math.min(Bp(s),t.friction??.78);_s.subVectors(Al,s.mesh.position),o&&bs.subVectors(Al,o.mesh.position),Gh(n,_s,Ml).sub(Gh(e,bs,ny));let l=Ml.dot(ot),c=!1;if(l<-1e-5){let d=l<-.8?De.clamp(r*(t?.bounce??1)*(s.spec?.physics?.bounce??1)*(o?.spec?.physics?.bounce??1),0,.98):0,f=-l*(1+d)/(Hh(n,_s,ot)+Hh(e,bs,ot));Wh(n,_s,ot,f),Wh(e,bs,ot,-f),Gh(n,_s,Ml).sub(Gh(e,bs,ny)),lr.copy(Ml).addScaledVector(ot,-Ml.dot(ot));let h=lr.length();if(h>1e-5&&a>0){lr.divideScalar(h);let p=Math.min(f*a,h/(Hh(n,_s,lr)+Hh(e,bs,lr)));Wh(n,_s,lr,-p),Wh(e,bs,lr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(ot,u*n.inverseMass/d),Zh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(ot,-u*e.inverseMass/d),Zh(e)),c=!0}return n.inverseMass&&ot.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,ot.y)),e?.inverseMass&&ot.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-ot.y)),c}function ME(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var dy=96,SE=5;function fy(n){return Math.max(.008,n.thickness*.35)}var Tl={substeps:0,active:0,free:0,sleeping:0};function ry(n,e,t,i){n.velocity.y-=t*e*(n.spec?.physics?.gravity??1)*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(bE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function wE(n,e,t){let i=new Qt().setFromCenterAndSize(n.mesh.position,new _),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*TE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function TE(n){return n.sweepGravity??1}function py(n,e,t,i,r,s){if(Object.assign(Tl,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:jh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,wE(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=uy(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),g=l.some(({box:v,bounds:b})=>ty(x,v,b)),m=c.some(v=>v!==h&&v.collidable!==!1&&x.intersectsBox(u.get(v)));if(p&&!g&&!m){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let v=Math.min(h.angular.length(),30),b=h.velocity.length()+v*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(b*t/fy(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new Qt,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Zh(y),o.push(y)}for(let h of a)ry(h,t,i,s);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(dy,d):1,Object.assign(Tl,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(ry(x,f,i,s),Zh(p))}for(let p=0;p<SE;p++){let x=!1;for(let g of o)if(g.inverseMass)for(let{box:m,bounds:y}of l){if(!ty(g.bounds,m,y))continue;let v=Wp(g.body,m,ot,Al);v>0&&(x=iy(g,null,m,v,r)||x)}for(let g of o)g.sweepStart=g.bounds.min.x,g.sweepEnd=g.bounds.max.x;o.sort((g,m)=>g.sweepStart-m.sweepStart);for(let g=0;g<o.length;g++){let m=o[g];for(let y=g+1;y<o.length;y++){let v=o[y];if(v.sweepStart>m.sweepEnd)break;if(!m.inverseMass&&!v.inverseMass||m.body.sleeping&&v.body.sleeping&&m.groundY>.9&&v.groundY>.9||!m.bounds.intersectsBox(v.bounds))continue;let b=Qh(m.body,v.body,ot);b<=0||(cy(m.body,v.body,ot,Al),x=iy(m,v,null,b,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&ME(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,g=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=g?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):g||(p.sleeping=!1),p.sleeping&&Tl.sleeping++}}function AE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Op={mesh:{position:null,quaternion:new Xe},shape:{sphereRadius:0,normals:[],edges:[]}};function my(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Op.mesh.position=n,Op.shape.sphereRadius=e,Qh(Op,t,i))}function gy(n,e,t,i,r){let s=my(n,e,t,ot);if(s<=0)return!1;n.addScaledVector(ot,s+.001),r?.copy(ot);let o=i.dot(ot);return o<0&&(i.addScaledVector(ot,-o),Math.abs(ot.y)<.6&&uy(t)&&t.velocity.addScaledVector(ot,-Math.min(2.8,-o*.24))),!0}var qt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),xy=qt(-24,24,-51,7),yy=34521,Go={x:0,y:0,z:3},Nr={x:.05,y:1.16,z:5.9},ko={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:qt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:qt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:qt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:qt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:qt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:qt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:qt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:qt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:qt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:qt(9,23,-48,-37),sign:[16,-38.2]}},VI=[qt(-9,-6,-51,7),qt(6,9,-51,7),qt(-24,24,-8,-5),qt(-24,24,-27,-23),qt(9,23,-37,-34)],vy=[{name:"Glace",bounds:ko.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:ko.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:qt(-9,9,-51,7)},{name:"Sol ouest",bounds:qt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:qt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:qt(-24,-23,-51,7)},{name:"Sol est",bounds:qt(9,23,-51,-48)},{name:"Sol est",bounds:qt(9,23,-37,7)},{name:"Bordure est",bounds:qt(23,24,-51,7)}],Rl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Ho=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],_y=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),$h={x:-19.4,y:.68,z:-3.25},by=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),My={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var EE=[0,1,2,3,4,5,7,8,9,10];function Sy(n){_y.forEach(({x:e,z:t},i)=>n(EE[i],new _(e,.8,t)))}function Kh(){let n=[["Cube",new it(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ot(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new ls(.29),"#d8ae53",0,1],["Brique",new it(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new it(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ot(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:bi(t,r),material:new yt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:ri(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of qx()){let r=bi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var qp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Il=null,CE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Ms(n){return typeof n=="string"&&CE.has(n.replace(/^custom-model-game-/,""))}function ed(n){let e=n?.parts;return Ms(n?.id)||Ms(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Ms(t?.assetId))}function wy(){if(Il)return Il;let n=Kh(),e=qp;return Il=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Il.set("chrome-sphere",{geometry:new Ot(.54,2),material:new yt({color:"#c8e6ed",metalness:1,roughness:.16})}),Il}function td(n){return typeof n=="string"&&wy().has(n)}function Xp(n){return wy().get(n)??null}var Jp="gorilla-lab-models-v1",Di=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),RE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,IE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Ay=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Zp=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),PE=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Pl=(n,e,t,i)=>Number.isFinite(n)?De.clamp(n,e,t):i;function id(n){return{gravity:Pl(n?.physics?.gravity,0,2.5,1),bounce:Pl(n?.physics?.bounce,0,1.65,1)}}function Ey(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Pl(n?.uv?.repeat,.01,100,1),angle:Pl(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Pl(n?.uv?.offset?.[t],-100,100,0))}}var LE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),DE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,UE=/^#[a-f\d]{6}$/i;function Ty(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Br(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?De.clamp(n[r],t,i):e)}var jp=new Set(["box","sphere","capsule","convex"]);function FE(n){if(n?.mode==="box")return{mode:"box",center:Br(n.center,0,-6,6),size:Br(n.size,.5,.025,12)};let e=Math.round(De.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:jp.has(n.shape)?n.shape:"box",center:Br(n.center,0,-6,6),size:Br(n.size,.5,.025,12),rotation:Br(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&jp.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function Ss(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Di.models||JSON.stringify(n).length>Di.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!ed(i)).map(i=>{if(typeof i?.id!="string"||!DE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Di.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Ty(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...td(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(LE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:FE(i?.hitbox),...i.physics?{physics:id(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Ms(r?.assetId)).map((r,s)=>({name:Ty(r?.name,`Pi\xE8ce ${s+1}`),...Number.isInteger(r?.group)&&r.group>0&&r.group<=Di.parts?{group:r.group}:{},shape:r?.shape==="asset"&&td(r?.assetId)?"asset":Object.hasOwn(IE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&td(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Nh(r?.profile)}:{},position:Br(r?.position,0,-3,3),rotation:Br(r?.rotation,0,-360,360),scale:Br(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&UE.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(PE,r?.zone)?{zone:r.zone}:{},...Object.hasOwn(Zp,r?.finish)?{finish:r.finish}:{},...r?.uv?{uv:Ey(r)}:{},surface:Object.hasOwn(Ay,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Di.textureBytes&&RE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Qp(n){try{let e=(n??globalThis.localStorage)?.getItem(Jp);if(e&&e.length<=Di.fileBytes)return Ss(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function NE(n){switch(n){case"tetrahedron":return new ls(Math.sqrt(3)/2);case"sphere":return new ti(.5,20,12);case"cylinder":return new Kt(.5,.5,1,20);case"cone":return new $i(.5,1,20);case"torus":return new yi(.365,.135,8,24);case"capsule":return new Tr(.28,.44,6,16);case"diamond":return new xi(.5);default:return new it(1,1,1)}}var Cy=Object.keys(Ay),Xn=64,Ll=4,Ry=2,Li;function Iy(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function Py(){if(Li)return Li;let n=Xn*Ll,e=Xn*Ry,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/Xn)*Ll+Math.floor(r/Xn),o=Iy(Cy[s],r%Xn,i%Xn),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Li=new ei(t,n,e),Li.colorSpace=ht,Li.magFilter=nn,Li.minFilter=En,Li.generateMipmaps=!0,Li.needsUpdate=!0,Li}var Yp=new Map;function BE(n){if(Yp.has(n))return Yp.get(n);let e=new Uint8Array(Xn*Xn*4);for(let i=0;i<Xn;i++)for(let r=0;r<Xn;r++){let s=Iy(n,r,i),o=(i*Xn+r)*4;e.set([s,s,s,255],o)}let t=new ei(e,Xn,Xn);return t.colorSpace=ht,t.wrapS=t.wrapT=Tn,t.magFilter=nn,t.minFilter=En,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,Yp.set(n,t),t}function Ly(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function OE(n,e,t){let{projection:i,repeat:r,angle:s,offset:o}=Ey(e),a=De.degToRad(s),l=Math.cos(a),c=Math.sin(a),{position:u,normal:d,uv:f}=n.attributes,h=new _,p=new _;for(let x=0;x<u.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){h.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(d,x);let y=Math.abs(p.x),v=Math.abs(p.y),b=Math.abs(p.z);y>=v&&y>=b?(g=h.z,m=h.y):v>=b?(g=h.x,m=h.z):(g=h.x,m=h.y)}f.setXY(x,(g*l-m*c)*r+o[0],(g*c+m*l)*r+o[1])}}function nd(n,e=new _(...n.scale)){let t=n.shape==="asset"?Xp(n.assetId):null,i=n.shape==="custom"?Hx(n.profile):t?.geometry?.clone()??NE(n.shape),r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.attributes.uv||r.setAttribute("uv",new ze(new Float32Array(r.attributes.position.count*2),2)),n.uv&&OE(r,n,e);let s=n.rotation.map(De.degToRad);r.scale(...n.scale),r.rotateX(s[0]),r.rotateY(s[1]),r.rotateZ(s[2]),r.translate(...n.position);let o=new Fe(n.color),a=r.attributes.position.count,l=new Float32Array(a*3),c=r.attributes.uv,u=Cy.indexOf(n.surface),d=u%Ll,f=Math.floor(u/Ll),h=r.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&h?(l[p*3]=h.getX(p)*o.r,l[p*3+1]=h.getY(p)*o.g,l[p*3+2]=h.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(d+.05+c.getX(p)*.9)/Ll,(f+.05+c.getY(p)*.9)/Ry);return r.setAttribute("color",new mt(l,3)),r}function zE(n){let e=n?.shape==="asset"?Xp(n.assetId):null,t=Zp[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new ni().load(n.texture);a.colorSpace=ht,a.wrapS=a.wrapT=Tn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Tn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Fe(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:r}=t??Zp.original;if(!n?.texture)return new yt({vertexColors:!0,map:n?.uv?BE(n.surface):Py(),roughness:i,metalness:r});let s=new ni().load(n.texture);return s.colorSpace=ht,s.wrapS=s.wrapT=Tn,new yt({vertexColors:!0,map:s,roughness:i,metalness:r})}function Or(n){return n?.parts?.some(Ly)?n.parts.map(zE):new yt({vertexColors:!0,map:Py(),roughness:.68})}function rd(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Li&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Dl(n,e=null){let t=n.map(r=>{if(!e||r.uv?.projection!=="metric")return nd(r);let s=new $t(...r.rotation.map(De.degToRad),"ZYX"),o=new _(...r.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(s).multiply(e).length())));return nd(r,o)}),i=Ih(t,n.some(Ly));return t.forEach(r=>r.dispose()),i.center(),i.computeBoundingBox(),i}function Wo(n,e=null){let t=Dl(n.parts),i=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&n.parts.some(r=>r.uv?.projection==="metric")&&(t.dispose(),t=Dl(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function $p(n){let e=new Qt;for(let t of n.parts??[]){let i=nd(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function Dy(n){return $p(n).getSize(new _)}function Uy(n){let e=$p(n),t=e.getCenter(new _),i=e.getSize(new _),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":jp.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?De.clamp(r.precision,8,96):48,center:s?new _(...r.center):t,size:s?new _(...r.size):i,rotation:s?new _(...r.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:i}}function VE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function kE(n,e=null){let t=Uy(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let r=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),s=r.toArray(),o=Math.max(...s),a=s.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...s.filter((d,f)=>f!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new Tr(l,c,Math.max(2,Math.round(i/8)),i):new ti(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/r.x,1/r.y,1/r.z),u}if(t.shape==="convex"&&n.parts?.length){let r=Dl(n.parts),s=VE(r,t.precision);if(r.dispose(),s.length>=4)try{let o=new or(s),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new it(1,1,1)}function Ul(n,e=null){let t=Uy(n),i=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5)),r=e?new _(e.x,e.y,e.z):i.clone(),s=t.size.clone().multiply(r).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(r).divide(i),a=kE(n,s);return a.scale(s.x,s.y,s.z),a.rotateX(De.degToRad(t.rotation.x)),a.rotateY(De.degToRad(t.rotation.y)),a.rotateZ(De.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Fy(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=$p(n),i=t.getCenter(new _),r=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),s=e?e.clone().divide(r):new _(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=nd(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new _).sub(i).multiply(s),size:l.getSize(new _).multiply(s).max(new _(.01,.01,.01))};return a.dispose(),[c]})}function Ny(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Dl(e.parts),i=t.boundingBox.getSize(new _);return{id:e.id,name:e.name,properties:e.properties,physics:id(e),geo:t,material:Or(e),collisionGeo:Ul(e),mass:De.clamp(i.x*i.y*i.z*9,.18,12)}})}function By(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Dl(e.parts),i=t.boundingBox.getSize(new _),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new He(t,Or(e));s.castShadow=!0;let o=new At;return o.add(s),o}var GE=256,Vy=1/2.6**2,HE=1e4,qo=1e4,WE=10,qE=10,XE=256,YE=16,od=24,Oy=new WeakMap,Ui=De.clamp,Fi=De.lerp,ad=n=>n*n*(3-2*n);function vt(n,e,t,i){return Number.isFinite(n)?Ui(n,e,t):i}function ky(n){if(!n)return null;let e=Ss({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var ZE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Gy(n,e=YE){return Math.round(vt(n,1,GE,e))}function jE(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return vt(n[e+"Density"],0,qo,0);let s=vt(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return vt(o/t,0,qo,0)}var JE=["grass","shrub","model"],QE=["keep","fit","stretch"],$E=/^#[a-f\d]{6}$/i,KE=10;function e2(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(vt(n.minHeight,-300,300,-300),vt(n.maxHeight,-300,300,300)),[r,s]=e(vt(n.minX,0,100,0),vt(n.maxX,0,100,100)),[o,a]=e(vt(n.minZ,0,100,0),vt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:r,maxX:s,minZ:o,maxZ:a,maxSlope:vt(n.maxSlope,0,90,90),yaw:vt(n.yaw,-360,360,0),yawVariation:vt(n.yawVariation,0,360,360)}}function t2(n){return n?{x:vt(n.x,-256,256,0),z:vt(n.z,-256,256,0),radius:vt(n.radius,.1,512,5),blend:vt(n.blend,0,1,.5)}:null}function zy(n={}){let e=ky(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",r=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,WE).map(s=>$E.test(s)?s:i);for(;r.length<2;)r.push(r.at(-1)??i);return{kind:t,model:e,density:vt(n.density,0,qo,1),colors:r,seed:Math.round(vt(n.seed,0,2147483647,1)),size:vt(n.size,.05,qo,1),fit:QE.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:vt(n.variation,0,qE,0),...n.scatter?{scatter:e2(n.scatter)}:{}}}function n2(n,e){return Array.isArray(n.rules)?n.rules.slice(0,HE).filter(t=>t&&typeof t=="object"&&JE.includes(t.kind)).filter(t=>t.kind!=="model"||ky(t.model)).map(zy):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,r,s])=>{let o=jE(n,t,e,i,r),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[zy({kind:t,model:a,density:o,seed:n.seed,size:vt(n[t+"Size"],.1,5,1)*(a?s:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Xo(n={},e=1){let t=Gy(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(vt(n?.seed,0,2147483647,1)),amplitude:vt(n?.amplitude,0,12,0),frequency:vt(n?.frequency,.015,2,.12),octaves:Math.round(vt(n?.octaves,1,KE,3)),roughness:vt(n?.roughness,.15,.95,.42),ridge:vt(n?.ridge,0,1,0),edgeFade:vt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:t2(n.reliefArea)}:{},rules:n2(n??{},e),textureDensity:vt(n?.textureDensity,1e-4,XE,Vy),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&ZE.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>vt(r,-od,od,0)):null}}function Hy(n,e,t,i){let r=Ui(t,0,e),s=Ui(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Wy(n,e){let t=Gy(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Hy(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function si(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function sd(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=ad(n-i),o=ad(e-r),a=Fi(si(i,r,t),si(i+1,r,t),s),l=Fi(si(i,r+1,t),si(i+1,r+1,t),s);return 2*Fi(a,l,o)-1}function Yo(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h}=i,p=Oy.get(n),x=p&&p.w===e&&p.d===t&&p.detail===r&&p.seed===s&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===d&&p.reliefArea===f;if(x&&p.heights===h)return p;let g=r+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let b=0;b<=r;b++)for(let A=0;A<=r;A++){let E=(A/r-.5)*e,D=(b/r-.5)*t,L=1;if(f){let k=Math.hypot(E-f.x,D-f.z);if(k>=f.radius)continue;f.blend&&(L=ad(Math.min(1,(f.radius-k)/(f.radius*f.blend))))}let w=E*a,M=D*a,R=0,N=1,O=0;for(let k=0;k<l;k++){let j=sd(w*2**k,M*2**k,s+k*13);R+=N*Fi(j,1-2*Math.abs(j),u),O+=N,N*=c}let X=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(A/r-.5))*2,(.5-Math.abs(b/r-.5))*2)),d*2):1,F=l===3&&c===.42&&u===0&&d===0;m[b*g+A]=L*(F?o*(.62*sd(w,M,s)+.26*sd(w*2.03,M*2.03,s+13)+.12*sd(w*4.13,M*4.13,s+37)):o*R/O*X)}let y=h?m.map((b,A)=>b+h[A]):m,v={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h,procedural:m,surface:y};return Oy.set(n,v),v}function ld(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Hy(o,i,(e/r+.5)*i,(t/s+.5)*i)}function Fl(n=0){return(Math.round(n/90)%4+4)%4*90}function qy(n){let e=Fl(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function Kp(n,e,t){let{cos:i,sin:r}=qy(n),s=e-n.x,o=t-n.z;return[i*s-r*o,r*s+i*o]}function i2(n){return Fl(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function r2(n,e,t){return n.y+ld(Yo(n),...Kp(n,e,t))}function s2(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function Xy(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=Yo(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,[h,p]=Kp(n,e,t),x=Ui(h,-c/2,c/2),g=Ui(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=r**2)return!1;let m=(h/c+.5)*l,y=(p/u+.5)*l,v=c/l,b=u/l,A=Math.max(0,Math.ceil(m-r/v)),E=Math.min(l,Math.floor(m+r/v)),D=Math.max(0,Math.ceil(y-r/b)),L=Math.min(l,Math.floor(y+r/b)),w=Number.isFinite(o)?o-n.y:ld(a,h,p),M=l+1,R=a.heights?.slice()??new Array(M**2).fill(0),N=!1,O=!1;function X(F,k,j){N=!0;let U=k*M+F,re=R[U],ne;if(i==="raise"||i==="lower")ne=re+(i==="raise"?1:-1)*s*j;else{let me=i==="flatten"?w:s2(a,F,k);ne=Fi(d[U],me,Math.min(1,s)*j)-f[U]}ne=Ui(ne,-od,od),!(Math.abs(ne-re)<1e-7)&&(R[U]=ne,O=!0)}for(let F=D;F<=L;F++)for(let k=A;k<=E;k++){let j=Math.hypot((k-m)*v,(F-y)*b)/r;j<1&&X(k,F,ad(1-j))}if(!N){let F=Ui(m,0,l),k=Ui(y,0,l),j=Math.min(l-1,Math.floor(F)),U=Math.min(l-1,Math.floor(k)),re=F-j,ne=k-U,me=re+ne<=1,we=me?1-re-ne:re+ne-1,Ee=me?re:1-ne,Ce=me?ne:1-re;if(we>=Math.max(Ee,Ce)){let Le=+!me;X(j+Le,U+Le,1)}else Ee>=Ce?X(j+1,U,1):X(j,U+1,1)}return O&&(n.terrain.heights=R),O}function Yy(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??Vy),d=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],d),d+=6)}let f=new tt;return f.setAttribute("position",new mt(o,3).setUsage(Rn)),f.setAttribute("uv",new mt(a,2)),f.setIndex(new mt(c,1)),o2(f,n),f}function o2(n,e){let{surface:t}=Yo(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function Zy(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=n,l=Ui((e/s+.5)*r,0,r),c=Ui((t/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],g=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-g*r/o).normalize()}function a2(n,e,t,i){let[r,s]=Kp(n,e,t),{cos:o,sin:a}=qy(n);Zy(Yo(n),r,s,i);let l=i.x,c=i.z;return i.set(o*l+a*c,i.y,-a*l+o*c)}function jy(n,e){let{w:t,d:i}=i2(n);return{mesh:e,heightfield:!0,xMin:n.x-t/2,xMax:n.x+t/2,zMin:n.z-i/2,zMax:n.z+i/2,height:(r,s)=>r2(n,r,s),normalAt:(r,s,o)=>a2(n,r,s,o),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function l2(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new tt;return e.setAttribute("position",new ze(n,3)),e.setAttribute("uv",new ze(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function c2(){return new Ot(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function u2(n,e,t){if(e==="stretch")return new _().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function h2(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(i.minX/100-.5)*n.w,s=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(s-r)*(a-o),c=[],u=new _;if(!l||!e.density)return{requested:0,positions:c,area:l};let d=Math.cos(De.degToRad(i.maxSlope)),f=i.maxSlope<90,h=i.minHeight>-300||i.maxHeight<300,p=(v,b)=>{if(h){let A=n.y+ld(t,v,b);if(A<i.minHeight||A>i.maxHeight)return!1}return!f||Zy(t,v,b,u).y>=d-1e-7},x=1;if(f||h){let v=0,b=32;for(let A=0;A<b;A++)for(let E=0;E<b;E++)p(Fi(r,s,(E+.5)/b),Fi(o,a,(A+.5)/b))&&v++;x=v/b**2}let g=Math.round(l*x*e.density),m=Math.min(g,qo),y=f||h?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let v=0;v<y&&c.length<m;v++){let b=Fi(r,s,si(v,27,e.seed)),A=Fi(o,a,si(v,27,e.seed+1));p(b,A)&&c.push([b,A])}return{requested:g,positions:c,area:l*x}}function Jy(n){let e=new At,t=Yo(n);e.userData.distribution=[];for(let[i,r]of(n.terrain.rules??[]).entries()){let{requested:s,positions:o,area:a}=h2(n,r,t),l=o?o.length:Math.min(s,qo);if(e.userData.distribution[i]={requested:s,count:l,area:a},!l)continue;let c=r.kind==="grass",u=r.model?u2(Dy(r.model),r.fit,r.size):null,d=r.model?Wo(r.model,u):c?l2():c2();u?d.scale(...u):d.scale(r.size,r.size,r.size),d.computeBoundingBox(),d.translate(0,-d.boundingBox.min.y,0),d.computeBoundingBox();let f=r.model?Or(r.model):new pn({color:"#ffffff",side:c?un:pi,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new ni().load(n.terrain.grassTexture);g.colorSpace=ht,f.map=g,f.userData.ownTexture=!0}let h=new Ba(d,f,l);h.name=r.kind,h.userData={ruleIndex:i,seed:r.seed,variation:r.variation,collidable:r.collidable,requestedCount:s,positions:o,scatter:r.scatter},h.instanceMatrix.setUsage(Rn),h.receiveShadow=!0;let p=r.colors.map(g=>new Fe(g)),x=new Fe;for(let g=0;g<l;g++){let m=si(g,41,r.seed)*(p.length-1),y=Math.floor(m);h.setColorAt(g,x.copy(p[y]).lerp(p[y+1],m-y))}e.add(h)}return d2(e,n),e}function d2(n,e){let t=Yo(e),i=new Gt;for(let r of n.children){let{seed:s,variation:o,positions:a,scatter:l}=r.userData;for(let c=0;c<r.count;c++){let u=a?.[c][0]??(si(c,27,s)-.5)*.96*e.w,d=a?.[c][1]??(si(c,27,s+1)-.5)*.96*e.d;i.position.set(u,ld(t,u,d),d),i.rotation.y=l?De.degToRad(l.yaw+si(c,27,s+2)*l.yawVariation):si(c,27,s+2)*Math.PI*2,i.scale.setScalar(Fi(Math.max(.05,1-o),1+o,si(c,27,s+3))),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Qy(n,e){let t=[],i=new lt,r=new _,s=new Xe().setFromAxisAngle(new _(0,1,0),Fl(n.yaw)*Math.PI/180),o=new _(n.x,n.y,n.z),a=new _(.005,.005,.005);for(let l of e?.children??[]){if(!l.userData.collidable)continue;let c=l.geometry.boundingBox,u=c.getCenter(new _),d=c.getSize(new _).multiplyScalar(.5);for(let f=0;f<l.count;f++){l.getMatrixAt(f,i);let h=new _,p=new Xe;i.decompose(h,p,r),h.add(u.clone().multiply(r).applyQuaternion(p)),h.applyQuaternion(s).add(o),p.premultiply(s),t.push({position:h,quaternion:p,half:d.clone().multiply(r).max(a)})}}return t}function $y(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),rd(e.material),e.dispose();n.clear(),n.removeFromParent()}}var f2=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",p2=(n,e,t)=>Math.min(t,Math.max(e,n));var Ky=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function m2(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function ev(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:r=23}={}){let s=n.getContext("2d"),o=512;s.clearRect(0,0,o,o),s.fillStyle=f2(t),s.fillRect(0,0,o,o);let a=m2(r),l=o/Math.max(4,2*Math.round(4*i)),c=u=>{s.fillStyle=u>0?"#f6f4dc":"#18232b",s.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(i),d={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<d;f++){let h=a()*o,p=a()*o,x=a(),g=a(),m=a();Ky(s,y=>{if(e==="rock"){let v=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),y.beginPath();for(let b=0;b<6;b++){let A=b*Math.PI/3+g,E=v*(.63+.3*Math.cos(A*2+g)+.25);y.lineTo(h+Math.cos(A)*E,p+Math.sin(A)*E*.72)}y.closePath(),y.fill(),y.globalAlpha=.3,y.strokeStyle="#232633",y.lineWidth=1.4,y.stroke()}else if(e==="soil"){let v=(1+x*x*12)*u,b=y.createRadialGradient(h,p,0,h,p,v);b.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),b.addColorStop(1,"#39221900"),y.globalAlpha=.6,y.fillStyle=b,y.fillRect(h-v,p-v,v*2,v*2)}else if(e==="grass"||e==="wood"){let v=e==="grass",b=(v?5+x*25:7+x*110)*u;y.strokeStyle=v?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",y.globalAlpha=.08+g*.28,y.lineWidth=(.75+x*1.7)*u,y.beginPath(),y.moveTo(h,p),v?y.quadraticCurveTo(h+b*(g-.5)*.55,p-b*.58,h+b*(g-.6),p-b):y.quadraticCurveTo(h+b*.5,p+10*(g-.5),h+b,p+4*(m-.5)),y.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let v=(e==="sand"?.6+x*1.6:1+x*5)*u;y.fillRect(h,p,v,v*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){s.globalAlpha=.5,s.lineWidth=Math.max(1,3/i);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let d=0;d<u;d++)for(let f=0;f<u;f++)Ky(s,h=>{h.beginPath(),h.arc(f*l+l/2,d*l+l/2,p2(l*.11,2,13),0,Math.PI*2),h.fill()})}else if(e==="stripes"){s.fillStyle="#17242b",s.globalAlpha=.3;for(let d=0;d<o;d+=l/2)s.fillRect(d,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#f4f3e8":"#14212a",s.globalAlpha=.14,s.fillRect(0,d,o,Math.max(1,l/13));for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#14212a":"#f4f3e8",s.globalAlpha=.13,s.fillRect(d,0,Math.max(1,l/13),o)}else{s.strokeStyle="#12212a",s.globalAlpha=.48;for(let d=0;d<=o;d+=l)s.beginPath(),s.moveTo(0,d),s.lineTo(o,d),s.stroke();for(let d=0;d<o;d+=l)for(let f=0;f<=o;f+=l){let h=e==="brick"&&Math.floor(d/l)%2?l/2:0;e!=="brick"&&d>0||(s.beginPath(),s.moveTo(f+h,d),s.lineTo(f+h,d+l),s.stroke())}if(e==="grid"){s.strokeStyle="#f7ebc9",s.globalAlpha=.1;for(let d=l/2;d<o;d+=l)s.beginPath(),s.moveTo(d,0),s.lineTo(d,o),s.stroke()}}}s.globalAlpha=1}var cd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],g2=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"],x2=["rock","soil","grass","sand","wood","tiles"];function tv(n,e){n=Math.max(0,Math.min(cd.length-1,n|0));let t=document.createElement("canvas");return t.width=t.height=512,ev(t,{pattern:x2[n],base:e??g2[n],seed:(n+45)*31337}),t}function nv({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var y2=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function iv(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){y2.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function rv(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var sv=.065,v2=.08,ud=.035,em=.003,hd=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(sr).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let g=p&&o.includes(p)&&!p.objectBody?.owner,m=g&&p.objectBody;m&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(m.mesh.quaternion).add(m.mesh.position),f.copy(u.localNormal).applyQuaternion(m.mesh.quaternion)),g&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),g||this.to.add(this.flight),this.to.y-=Math.min(em,r*t*t);let y=this.sweep(u,this.from,this.to);if(g){let w=this.correction.subVectors(x,d.anchor),M=w.dot(f)<=ud&&d.anchor.distanceToSquared(e)<=(c+ud)**2&&w.lengthSq()<=Math.max(.12,c*.5)**2;M&&(!y||y===p&&this.hitNormal.dot(f)>.7)?(y=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!M&&y===p&&w.dot(f)>ud&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let v=y.friction??.8,b=Math.min(1,Math.max(0,v*(.75+s.grip*.09))),A=Math.max(0,1-Math.abs(f.y)/.28),E=Math.min(.97,Math.max(0,1-b+A*.24+(s.slide-3)*.035)),D=this.correction.subVectors(d.anchor,x);if(D.addScaledVector(f,-D.dot(f)),this.slideTarget.copy(D).multiplyScalar(-E),g&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*E*Math.max(A,Math.max(0,1-2*b)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,em),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-em*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(E>.5&&D.lengthSq()>ud**2)continue}D.subVectors(d.anchor,x),g&&D.dot(f)<0&&D.addScaledVector(f,-D.dot(f)),l.add(D);let L=y.objectBody;if(L){let w=u.inverseRotation.copy(L.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(L.mesh.position).applyQuaternion(w),u.localNormal.copy(f).applyQuaternion(w)}if(d.surface=y,d.groundContact=f.y>.55,this.contacts++,u.tracked){let w=this.handMotion.subVectors(u.previousTarget,x),M=w.dot(f);w.multiplyScalar(1-E).addScaledVector(f,Math.max(0,M)-M*(1-E)),this.intent.add(w)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=sv;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/sv),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=v2,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function _2(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function tm(n,e=.16,t=26){let i=_2(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function ov(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,tm(n,i,r)&&(n.hapticCooldown=.08))}function av({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new _(0,1,0),a=new Xe,l=0,c=new er,u=[],d=new Map,f=Sx(n,{onShot:(m,y)=>s.sendShot(m,y),impact(m,y,v,b){c.set(m,y),c.far=v;let A=c.intersectObjects(u,!1)[0];if(!A)return null;let E=d.get(A.object);return b&&E&&!E.owner&&!E.frozen&&E.velocity.addScaledVector(y,Math.min(4,2.6/E.mass)),A.distance}}),h={position:new _,quaternion:new Xe,modelPosition:new _},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:y,inVR:v,enabled:b,remoteWorld:A,dt:E,yaw:D,drop:L,rightHand:w,flatFiring:M}){let R=null,N=!1;if(b)if(v){let O=[...m.session.inputSources].find(F=>F.handedness==="right"),X=O&&m.getPose(O.targetRaySpace,y);if(X){let{position:F,orientation:k}=X.transform;R=h,R.position.set(F.x,F.y-L,F.z).applyAxisAngle(o,D).add(e.position),R.modelPosition.copy(w.valid?w.mesh.position:R.position),R.quaternion.set(k.x,k.y,k.z,k.w).premultiply(a.setFromAxisAngle(o,D)),N=!!O.gamepad?.buttons[0]?.pressed}}else R=h,t.getWorldPosition(R.position),t.getWorldQuaternion(R.quaternion),R.modelPosition.set(.16,-.17,-.43).applyQuaternion(R.quaternion).add(R.position),N=M;if(x=R?p:null,u.length=0,d.clear(),R||l){for(let O of i.boxes)O.mesh?.isMesh&&O.mesh.visible&&u.push(O.mesh);if(A)s.forEachReplica(O=>u.push(O));else for(let O of r)O.mesh.visible&&O.collidable&&!O.owner&&(u.push(O.mesh),d.set(O.mesh,O))}f.update({dt:E,aim:R,firing:N}),N?l=1.3:l=Math.max(0,l-E)}return{update:g,receiveShot({position:m,quaternion:y},v){f.replay(m,new Xe().copy(y),v),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function lv(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function cv(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var ws=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],dd=["Naturel","Cellulo","Affiche","R\xE9tro"],fd={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var uv=new WeakMap;function nm(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,uv.set(n,e),n}function Nl(n){if(Array.isArray(n))return n.map(Nl);let e=n.clone(),t=uv.get(n);return t?nm(e,t):e}function b2(n){let t=new ti(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Ot(.225,0),r=new Ka({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return nm(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function M2(n){let e=new it(.37,.37,.37),t=new yt({color:16777215,roughness:.4});return nm(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function hv(){let n={value:0};return{props:[b2(n),M2(n)],animate(e){n.value=e}}}var dv=new _(0,1,0),fv=new _(0,0,1),S2={left:new Xe().setFromAxisAngle(fv,Math.PI/2),right:new Xe().setFromAxisAngle(fv,-Math.PI/2)},w2=new Xe,T2=new _;function pv(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(dv,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(w2.setFromAxisAngle(dv,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(S2[n.side]),n.target.copy(n.gripPosition).sub(T2.copy(sr).applyQuaternion(n.mesh.quaternion))}function mv(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let m=e.getChannelData(0);for(let y=0;y<m.length;y++)m[y]=(Math.random()*2-1)*(1-y/m.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),g=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,g.gain.setValueAtTime(De.clamp(f,1,10)*.055,h),g.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(g).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:g,volume:m,enabled:y}){if(h){p.forEach((v,b)=>{a[b]=Math.max(0,a[b]-f);let A=v.valid&&v.groundContact;A&&!o[b]&&!a[b]&&y&&(c(m),a[b]=.11),o[b]=A});return}r=Math.max(0,r-f),t=x?t+g:0,x&&y&&r===0&&(t>=.64||!i&&g>.025)&&(c(m),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function gv(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new tt;r.setAttribute("position",new mt(t,3).setUsage(Rn)),r.setAttribute("color",new mt(i,3).setUsage(Rn));let s=new os(r,new Ci({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Ar(new ti(1,12,8)).attributes.position,a=new Ar(new xi(1).scale(...Sh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new _,f=new WeakMap,h=new _(1,1,1),p=new Xe,x=new _,g=new _,m=new _,y=new _,v=new _,b=new _,A=new _,E=new _(0,1,0),D={grip:new Fe("#61f6ff"),palm:new Fe("#71ff87"),solid:new Fe("#ffe060"),proxy:new Fe("#ff76df"),movement:new Fe("#fff0af"),normal:new Fe("#ff994e"),velocity:new Fe("#80aaff"),force:new Fe("#ff5454"),rig:new Fe("#cec4ff")},L=0;function w(F,k,j){if(L+2>u){c.truncated=!0;return}F.toArray(t,L*3),j.toArray(i,L++*3),k.toArray(t,L*3),j.toArray(i,L++*3)}function M(F,k,j,U,re){for(let ne=0;ne<F.count;ne+=2){if(L+2>u){c.truncated=!0;break}x.fromBufferAttribute(F,ne).multiply(U).applyQuaternion(j).add(k),g.fromBufferAttribute(F,ne+1).multiply(U).applyQuaternion(j).add(k),w(x,g,re)}}function R(F,k,j,U){if(F.sphereRadius){M(o,k,j,y.setScalar(F.sphereRadius),U);return}let re=l.get(F);if(!re){let ne=new Set,me=[];for(let we of F.faces)for(let[Ee,Ce]of[[we.a,we.b],[we.b,we.c],[we.c,we.a]]){let Le=[Ee.toArray().join(","),Ce.toArray().join(",")].sort().join("|");ne.has(Le)||(ne.add(Le),me.push(...Ee.toArray(),...Ce.toArray()))}re=new ze(me,3),l.set(F,re)}M(re,k,j,h,U)}function N(F,k){let U=(F.xMax-F.xMin)/16,re=(F.zMax-F.zMin)/16;for(let ne=0;ne<=16;ne++)for(let me=0;me<=16;me++){if(L+2>u){c.truncated=!0;return}let we=F.xMin+ne*U,Ee=F.zMin+me*re;x.set(we,F.height(we,Ee),Ee),ne<16&&w(x,g.set(we+U,F.height(we+U,Ee),Ee),k),me<16&&w(x,g.set(we,F.height(we,Ee+re),Ee+re),k)}}function O(F,k,j,U){if(k.lengthSq()<1e-8)return;v.copy(F).addScaledVector(k,j),b.copy(k).normalize(),A.crossVectors(b,E),A.lengthSq()<1e-8?A.set(1,0,0):A.normalize();let re=Math.min(.09,F.distanceTo(v)*.3);y.copy(v).addScaledVector(b,-re),w(F,v,U),w(v,x.copy(y).addScaledVector(A,re*.5),U),w(v,g.copy(y).addScaledVector(A,-re*.5),U)}function X({settings:F,boxes:k,bodies:j,hands:U,locomotion:re,velocity:ne,head:me,body:we,neck:Ee,proxies:Ce,gravity:Le,appliedMove:te,playerActive:oe,inVR:_e,viewQuaternion:Ue}){L=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(F.debugBudget??5)*2e3);let Me=(F.debugRange??6)*5,We=(Ve,S=0)=>!Ve||Ve.distanceToSquared(me)<=(Me+S)**2;if(s.visible=F.debugPalm||F.debugHitboxes||F.debugInvisible||F.debugForces||F.debugBody||F.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(F.debugHitboxes||F.debugInvisible||F.debugMesh){let Ve=u;if(F.debugScene!==!1&&k.length&&(u=Math.floor(Ve*.65/2)*2),F.debugObjects!==!1)for(let S of j){if(L+2>u){c.truncated=!0;break}if(!(!S.mesh.visible||!We(S.mesh.position,S.shape.radius))&&(c.bodies++,F.debugHitboxes&&S.collidable!==!1&&S.blocksPlayer!==!1&&R(S.shape,S.mesh.position,S.mesh.quaternion,S.owner?D.proxy:D.solid),F.debugMesh&&S.mesh.geometry)){let V=S.mesh.geometry,z=V.attributes.position.version,G=f.get(V);G?.version!==z&&(G?.edges.dispose(),G={version:z,edges:new Ar(V)},f.set(V,G)),M(G.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,D.grip)}}if(u=Ve,F.debugScene!==!1)for(let S of k){if(L+2>u){c.truncated=!0;break}let V=S.shape?.radius??S.half?.length()??Math.hypot(S.xMax-S.xMin||0,S.zMax-S.zMin||0);if(!We(S.position??S.mesh?.position,V))continue;c.boxes++;let z=S.mesh?.isObject3D&&S.mesh.visible;if(F.debugMesh&&z&&S.mesh.geometry){let G=S.mesh.geometry,W=G.attributes.position.version,I=f.get(G);I?.version!==W&&(I?.edges.dispose(),I={version:W,edges:new Ar(G)},f.set(G,I)),M(I.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,D.grip)}(z?!F.debugHitboxes:!F.debugInvisible)||(S.shape?R(S.shape,S.position,S.quaternion,z?D.solid:D.proxy):S.heightfield&&N(S,z?D.solid:D.proxy))}}if(oe){if(F.debugBody){if(F.collisions)for(let{position:Ve,radius:S}of Ce)M(o,Ve,p,y.setScalar(S),D.rig);w(me,Ee,D.rig),w(Ee,we,D.rig)}if(F.debugForces&&(d.set(0,-.22,-.5),Ue&&d.applyQuaternion(Ue),d.add(me),O(d,ne,.13,D.velocity),O(d,E,-Le*.038,D.force),O(d,te,5,D.movement),F.debugObjects!==!1)){for(let Ve of j)if(!(!Ve.mesh.visible||!Ve.velocity||!We(Ve.mesh.position,Ve.radius))&&(O(Ve.mesh.position,Ve.velocity,.13,D.velocity),L+2>u)){c.truncated=!0;break}}if(_e&&(F.debugPalm||F.debugForces))for(let Ve of re.hands){let{hand:S,normal:V,offset:z}=Ve;if(S.valid){if(F.debugPalm){M(o,S.gripPosition,p,y.setScalar(.014),D.grip);for(let G=0;G<3;G++)b.set(0,0,0).setComponent(G,.075).applyQuaternion(S.controllerRotation),O(S.gripPosition,b,1,D.grip);v.copy(S.mesh.position).add(z),M(a,v,S.mesh.quaternion,h,D.palm),w(S.gripPosition,v,D.grip),S.hasSupport&&(v.copy(sr).applyQuaternion(S.mesh.quaternion).add(S.mesh.position),M(a,v,S.mesh.quaternion,h,D.grip))}F.debugForces&&S.surface&&O(S.anchor,V,.25,D.normal)}}}c.vertices=L,c.segments=L/2,r.setDrawRange(0,L);for(let Ve of["position","color"]){let S=r.attributes[Ve];S.clearUpdateRanges(),L&&S.addUpdateRange(0,L*3),S.needsUpdate=!!L}}return{update:X,stats:c}}var pd={preset:0,sky:"preset",rotation:0,skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},A2=[pd,{...pd,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...pd,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function im(n){return{...A2[n]??pd}}var E2=12e5,Bl=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,zr=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function xv(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(zr(n.preset,0,2,0)),t=im(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=E2&&/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(n.skyImage)?n.skyImage:null,r=zr(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&i?n.sky:"preset",rotation:zr(n.rotation,-360,360,0),skyColor:Bl(n.skyColor,t.skyColor),skyImage:i,fog:n.fog!==!1,fogColor:Bl(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,zr(n.fogFar,1,4096,t.fogFar)),azimuth:zr(n.azimuth,-360,360,t.azimuth),elevation:zr(n.elevation,-89,89,t.elevation),sunColor:Bl(n.sunColor,t.sunColor),sunPower:zr(n.sunPower,0,12,t.sunPower),ambientColor:Bl(n.ambientColor,t.ambientColor),groundColor:Bl(n.groundColor,t.groundColor),ambientPower:zr(n.ambientPower,0,12,t.ambientPower)}}var rm=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],_v=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],sm={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},md=8e6,Ol=512,Ni=1024,yv=512,Xt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,vv=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function zl(n){if(typeof n=="string"){if(n.length>md)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Ol)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Ol+" pi\xE8ces.");let e=n.spawn??{},t=xv(n.environment),i=n.pieces.filter(r=>!Ms(r?.sceneryId)&&!ed(r?.model));if(!i.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:vv(n.name,56,"Ma map"),worldSize:Xt(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:Xt(e.x,-Ni,Ni,0),y:Xt(e.y,-256,256,.06),z:Xt(e.z,-Ni,Ni,3),yaw:Xt(e.yaw,-360,360,0)},pieces:i.map((r,s)=>{if(!r||typeof r!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let o=Xt(r.w,.05,yv,3),a=Xt(r.d,.05,yv,3),l=r.terrain&&typeof r.terrain=="object"?Xo(r.terrain,o*a):null,c=r.model?Ss({version:1,models:[r.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:vv(r.name,36,"Pi\xE8ce "+(s+1)),...typeof r.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(r.sceneryId)?{sceneryId:r.sceneryId}:{},x:Xt(r.x,-Ni,Ni,0),y:Xt(r.y,-256,256,0),z:Xt(r.z,-Ni,Ni,0),w:o,h:Xt(r.h,.05,256,.5),d:a,pitch:l?0:Xt(r.pitch,-180,180,0),yaw:l?Fl(Xt(r.yaw,-360,360,0)):Xt(r.yaw,-360,360,0),roll:l?0:Xt(r.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(r.primitive)?r.primitive:"box",uvScale:Xt(r.uvScale,.05,100,1),uvOffsetX:Xt(r.uvOffsetX,-100,100,0),uvOffsetY:Xt(r.uvOffsetY,-100,100,0),uvRotation:Xt(r.uvRotation,-360,360,0),material:Math.round(Xt(r.material,0,16,0)),color:typeof r.color=="string"&&/^#[a-f0-9]{6}$/i.test(r.color)?r.color:"#ffffff",grip:Xt(r.grip,0,1.5,.8),gravity:Xt(r.gravity,.05,2.5,1),bounce:Xt(r.bounce,0,1.65,1),solid:r.solid!==!1,texture:typeof r.texture=="string"&&r.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(r.texture)?r.texture:null}})}}function bv(n){return zl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Go,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new $t().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Vl(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Mv(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new $t(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new _(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ni||Math.abs(d)>Ni||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var kl="gorilla-lab-custom-map-v1";function Sv(n){let e=new Blob([JSON.stringify(zl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var C2=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function om(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&C2.has(e)):!1:!0}function gd(n,e,t){let i=new it(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function wv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function Tv(n){switch(n){case"sphere":return new ti(.5,24,16);case"cylinder":return new Kt(.5,.5,1,24);case"cone":return new $i(.5,1,24);case"torus":return new yi(.34,.14,12,32);case"capsule":return new Tr(.32,.36,8,16);default:return new it(1,1,1)}}function am(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new _(...a)),r=[],s=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],u=l[1].clone().sub(c).normalize(),d=l.at(-1).clone().sub(c);d.addScaledVector(u,-d.dot(u)).normalize();for(let f=1;f<l.length-1;f++)for(let h of[c,l[f],l[f+1]]){r.push(...h);let p=h.clone().sub(c);s.push(p.dot(u)/2.6,p.dot(d)/2.6)}}let o=new tt;return o.setAttribute("position",new ze(r,3)),o.setAttribute("uv",new ze(s,2)),o.computeVertexNormals(),o}function Av({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(I=>I.half&&I.mesh?.isObject3D).map(I=>I.mesh)),c=new At;n.add(c);let u=[],d=[],f=[],h=[],p=new Set,x=new ni,g=new Map,m=0,y=null,v="",b=-1,A=-1,E="",D="",L=new it(1,1,1),w=am(),M=new He(L,new Et({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));M.visible=!1,n.add(M);let R=new er,N=new _,O=new _,X=document.querySelector("#map-note");function F(I){E=I,X.textContent=I}function k(){f.length>=20&&f.shift(),f.push(JSON.stringify(y))}function j(I,Z){let Y=g.get(I);if(!Y){Y={materials:new Set,texture:null,failed:!1},g.set(I,Y);let de=C=>{if(!(g.get(I)!==Y||Y.failed)){Y.failed=!0;for(let T of Y.materials)T.map=null,T.needsUpdate=!0;Y.texture?.dispose(),C&&F(C)}},pe=x.load(I,C=>{(C.image.width>2048||C.image.height>2048)&&de("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>de());Y.texture=pe,pe.colorSpace=ht,pe.wrapS=pe.wrapT=Tn}return Y.materials.add(Z),Z.map=Y.failed?null:Y.texture,Y}function U(){for(let[I,Z]of g)Z.materials.size||(g.delete(I),Z.failed||Z.texture.dispose())}function re(I){let Z=e.mapMaterial(I.material,s());if(!I.texture&&I.color==="#ffffff")return{material:Z,custom:!1};let Y=Z.clone();return Y.onBeforeCompile=Z.onBeforeCompile,Y.customProgramCacheKey=Z.customProgramCacheKey,Y.color.multiply(new Fe(I.color)),{material:Y,custom:!0,ownTexture:I.texture?j(I.texture,Y):null}}function ne(I){c.remove(I.mesh),I.mesh.geometry.dispose(),I.vegetation&&$y(I.vegetation),I.custom&&(I.ownTexture?.materials.delete(I.mesh.material),I.model?rd(I.mesh.material):I.mesh.material.dispose())}function me(I,Z){if(I.model){let ie=new _(I.w,I.h,I.d),Te=Wo(I.model,ie);Te.scale(I.w,I.h,I.d);let be=Or(I.model),Re=new He(Te,be);Re.position.set(I.x,I.y,I.z),Re.rotation.set(De.degToRad(I.pitch),De.degToRad(I.yaw),De.degToRad(I.roll??0),"YXZ"),Re.castShadow=Re.receiveShadow=!0,Re.userData.mapIndex=Z,I.model.kind==="prop"&&(Re.visible=!1),c.add(Re);let Oe=Fy(I.model,ie);if(Oe){let Ie=[];for(let B of Oe){let ue=B.size.clone().multiplyScalar(.5),xe=B.center.clone().applyQuaternion(Re.quaternion).add(Re.position),ye=Re.quaternion.clone();B.mode==="trigger"?h.push({name:B.name,model:I.name,position:xe,inverse:ye.invert(),bounds:new Qt(ue.clone().negate(),ue)}):Ie.push({position:xe,quaternion:ye,half:ue,min:ue.clone().negate(),shape:ri(ue),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material})}return{mesh:Re,colliders:Ie,custom:!0,model:!0}}let ge=Ul(I.model,ie);ge.computeBoundingBox();let Se=ge.boundingBox,K=new _(Math.max(Math.abs(Se.min.x),Math.abs(Se.max.x)),Math.max(Math.abs(Se.min.y),Math.abs(Se.max.y)),Math.max(Math.abs(Se.min.z),Math.abs(Se.max.z))),J=bi(ge);ge.dispose();let fe={mesh:Re,position:Re.position,quaternion:Re.quaternion,half:K,min:K.clone().negate(),shape:J,radius:J.radius,friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};return{mesh:Re,collider:fe,custom:!0,model:!0}}let{material:Y,custom:de,ownTexture:pe}=re(I),C=I.terrain?Yy(I):I.primitive==="ramp"?am(I.w,I.h,I.d):I.primitive&&I.primitive!=="box"?Tv(I.primitive).scale(I.w,I.h,I.d):gd(I.w,I.h,I.d),T=new He(wv(C,I),Y);T.position.set(I.x,I.y,I.z),T.rotation.set(De.degToRad(I.pitch),De.degToRad(I.yaw),De.degToRad(I.roll??0),"YXZ"),T.castShadow=T.receiveShadow=!0,T.userData.mapIndex=Z,I.sceneryId==="lab-mirror"&&(T.userData.mirrorSize={w:I.w,h:I.h,d:I.d}),c.add(T);let q=new _(I.w/2,I.h/2,I.d/2),se={mesh:T,position:T.position,quaternion:T.quaternion,half:q,min:q.clone().negate(),shape:I.primitive==="ramp"?bi(C):ri(q),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};if(!I.terrain)return{mesh:T,collider:se,custom:de,ownTexture:pe};let he=Jy(I);return he&&T.add(he),{mesh:T,collider:jy(I,T),custom:de,ownTexture:pe,vegetation:he}}function we(){for(let I of u){let Z=y?.pieces[I.mesh.userData.mapIndex];if(!Z||I.ownTexture||I.model)continue;let Y=e.mapMaterial(Z.material,s());I.custom?I.mesh.material.map!==Y.map&&(I.mesh.material.map=Y.map,I.mesh.material.needsUpdate=!0):I.mesh.material=Y}}function Ee(){for(let pe of u)ne(pe);u.length=0,d.length=0,h.length=0,p.clear();let I=y?.pieces??[];v=y?"custom-"+ys(JSON.stringify(y)):"";let Z=new Set(I.map(pe=>pe.model?.assetId).filter(Boolean)),Y=new Set(I.map(pe=>pe.sceneryId).filter(Boolean));o.forEach(pe=>{let C=pe.userData?.editorAssetId;pe.visible=!y||!l.has(pe)&&om(y,C,Z,Y)});let de=[];for(let[pe,C]of I.entries()){let T=me(C,pe);u.push(T);for(let q of Qy(C,T.vegetation))de.push({...q,min:q.half.clone().negate(),shape:ri(q.half),friction:C.grip,gravity:C.gravity,bounce:C.bounce,zone:!1,type:C.material})}for(let pe of u)pe.mesh.userData.mirrorSize&&d.push(pe);if(U(),y){let pe=a.filter(T=>!l.has(T.mesh)&&om(y,T.editorAssetId,Z,Y)),C=u.filter((T,q)=>I[q].solid&&I[q].model?.kind!=="prop"&&I[q].model?.properties?.collidable!==!1).flatMap(T=>T.colliders??[T.collider]);e.boxes.splice(0,e.boxes.length,...pe,...C,...de)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.setEnvironment(y?.environment??null),e.bakeLightmap(),r(),y)try{localStorage.setItem(kl,JSON.stringify(y))}catch{}else try{localStorage.removeItem(kl)}catch{}}function Ce(I){let Z=zl(I);m++,f.length=0,y=Z,b=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),Ee(),i(y.spawn.yaw),F("Map : "+y.name+" \xB7 "+y.pieces.length+" pi\xE8ces")}function Le(){m++,y=null,f.length=0,b=A=-1,t.set(0,0,3),Ee(),i(0),F("Ar\xE8ne int\xE9gr\xE9e")}function te(){Ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Vl({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function oe(){if(!f.length)return F("Rien \xE0 annuler.");y=zl(f.pop()),b=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),Ee(),F("Derni\xE8re modification annul\xE9e.")}function _e(){y?Sv(y):F("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Ue(I,Z,Y,de){y&&(k(),y.spawn={x:I,y:Z,z:Y,yaw:De.radToDeg(de)},t.set(I,Z,Y),Ee(),F("Point de d\xE9part m\xE9moris\xE9."))}function Me(I,Z,Y,{mode:de,piece:pe,head:C,feet:T}){R.set(I,Z),R.far=12;let q=u.map(ge=>ge.mesh);de===1&&y?.arenaBase&&!y.editableArena&&q.push(...a.filter(ge=>ge.heightfield&&!y.pieces.some(Se=>Se.sceneryId===ge.editorAssetId)).map(ge=>ge.mesh));let se=R.intersectObjects(q,!1),he=de>=5?se.find(ge=>y?.pieces[ge.object.userData.mapIndex]?.terrain):se[0];if(M.visible=!1,!y)return;if(de>=5){let ge=he?.object.userData.mapIndex,Se=y.pieces[ge];if(!Se?.terrain||!Y)return;if(k(),de===9){let K=pe.terrain?.detail??Se.terrain.detail,J=Wy(Se.terrain,K);Se.terrain=Xo({...J,...pe.terrain,heights:J.heights})}else{let K={mode:["raise","lower","smooth","flatten"][de-5],radius:pe.brushRadius,strength:pe.brushStrength,target:Se.y};Xy(Se,he.point.x,he.point.z,K)}Ee(),F("Relief modifi\xE9.");return}if(de===2||de===3||de===4){if(!he)return;let ge=he.object.userData.mapIndex,Se=y.pieces[ge];if(Y&&de===2&&(b=ge,A=ge,F("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Y&&de===3){if(y.pieces.length===1)return F("Garde au moins une pi\xE8ce dans la map.");k(),y.pieces.splice(ge,1),b=A=-1,Ee(),F("Pi\xE8ce supprim\xE9e.")}Y&&de===4&&(k(),Object.assign(y.pieces[ge],{material:pe.material,grip:pe.grip,gravity:pe.gravity,bounce:pe.bounce,solid:pe.solid,texture:pe.texture}),Ee(),F("Surface modifi\xE9e.")),he&&(M.geometry=Se.primitive==="ramp"?w:L,M.position.copy(he.object.position),M.rotation.copy(he.object.rotation),M.scale.set(Se.w,Se.h,Se.d).multiplyScalar(1.006),M.visible=!0,M.material.color.set(de===3?"#ff8271":"#ffe2a2"));return}if(!he)return;let ie=A>=0?y.pieces[A]:pe;if(he.object.userData.mapIndex===A)return;N.copy(he.face.normal).transformDirection(he.object.matrixWorld);let Te=ie.terrain?{...ie,x:Math.round(he.point.x*2)/2,y:he.point.y,z:Math.round(he.point.z*2)/2,pitch:0,yaw:ie.yaw??0}:Mv(he.point,N,ie);if(!Te)return;M.geometry=Te.primitive==="ramp"?w:L,M.position.set(Te.x,Te.y,Te.z),M.rotation.set(De.degToRad(Te.pitch),De.degToRad(Te.yaw),De.degToRad(Te.roll??0),"YXZ"),M.scale.set(Te.w,Te.h,Te.d),M.updateMatrixWorld(!0),M.visible=!0;let be=new Qt().setFromObject(M),Re=new Qt(new _(C.x-.26,T+.01,C.z-.26),new _(C.x+.26,C.y+.19,C.z+.26)),Oe=Te.solid&&be.intersectsBox(Re);if(M.material.color.set(Oe?"#fd7763":"#8be4b9"),Y){if(Oe)return F("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(A<0&&y.pieces.length>=Ol)return F("Limite de "+Ol+" pi\xE8ces atteinte.");k(),A>=0?(y.pieces[A]=Te,A=-1):y.pieces.push(Te),Ee(),F("Pi\xE8ce pos\xE9e \xB7 "+y.pieces.length+" pi\xE8ces")}}let We=document.querySelector("#map-file"),Ve=document.querySelector("#map-url");We.onchange=async()=>{let I=We.files[0];if(!I)return;let Z=++m;We.value="";try{if(I.size>md)throw Error("Map trop lourde.");let Y=await I.text();Z===m&&Ce(Y)}catch(Y){Z===m&&F(Y.message)}};async function S(I){let Z=++m;try{let Y=new URL(I,location.href);if(!["http:","https:"].includes(Y.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let de=await fetch(Y,{credentials:"omit"});if(Z!==m)return;if(!de.ok)throw Error("URL de map inaccessible ("+de.status+").");if(Number(de.headers.get("content-length"))>md)throw Error("Map trop lourde.");let C=await de.text();Z===m&&Ce(C)}catch(Y){Z===m&&F(Y.message)}}let V=new Qi,z=new _,G=new _;function W(I){if(!h.length)return[];let Z=[],Y=new Set;for(let de of h){V.origin.copy(I).sub(de.position).applyQuaternion(de.inverse),V.direction.set(0,-1,0).applyQuaternion(de.inverse),z.copy(V.origin).addScaledVector(V.direction,1.45);let pe=V.intersectBox(de.bounds,G);de.bounds.containsPoint(V.origin)||de.bounds.containsPoint(z)||pe&&G.distanceToSquared(V.origin)<=1.45**2?(Y.add(de),p.has(de)||Z.push({phase:"enter",part:de.name,model:de.model})):p.has(de)&&Z.push({phase:"exit",part:de.name,model:de.model})}return p=Y,Z}return document.querySelector("#map-load-url").onclick=()=>S(Ve.value),document.querySelector("#map-export").onclick=_e,document.querySelector("#map-reset").onclick=Le,{checkTriggers:W,placedModels:()=>y?.pieces.filter(I=>I.model?.kind==="prop")??[],modelPieces:()=>y?.pieces.filter(I=>!I.terrain&&I.name!=="Sol")??[],refreshMaterials:we,load:Ce,loadURL:S,reset:Le,blank:te,undo:oe,save:_e,edit:Me,recenter:Ue,inform:F,mirrors:()=>d,get usesBuiltInMirror(){return!y||y.arenaBase&&!y.editableArena&&!y.pieces.some(I=>I.sceneryId==="lab-mirror")},clearGhost(){M.visible=!1},get active(){return!!y},get builtIn(){return!y||y.arenaBase===!0},get assetLayer(){return y?.assetLayer===!0},hasAsset(I){return!!y?.pieces.some(Z=>Z.model?.assetId===I)},getAssetPiece(I){return y?.pieces.find(Z=>Z.model?.assetId===I)??null},get status(){return E},get yaw(){return y?.spawn.yaw??0},get worldSize(){return y?.worldSize??0},get fogDistance(){return y?.environment?.fog?y.environment.fogFar:0},get nodes(){return y?.pieces.length??0},get name(){return y?.name??null},get signature(){return v}}}var lm=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Ev(){let n=new He(new rn(2,2),new fn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+lm+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Cv(n){let e=new ss,t=new Jt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new ve(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new fn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+lm+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new He(new rn(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let v=l[y],b=Math.max(32,Math.round(v.viewport.z)),A=Math.max(32,Math.round(v.viewport.w)),E=a[y];E?(E.width!==b||E.height!==A)&&E.setSize(b,A):E=a[y]=new Fn(b,A,{type:o?Ii:qn,minFilter:dn,magFilter:dn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(v.matrixWorld),t.matrixWorld.copy(v.matrixWorld),t.matrixWorldInverse.copy(v.matrixWorldInverse),t.projectionMatrix.copy(v.projectionMatrix),t.projectionMatrixInverse.copy(v.projectionMatrixInverse),t.layers.mask=v.layers.mask,n.shadowMap.autoUpdate=y===0&&g,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Rv(n){let e={value:0},t={value:Array.from({length:7},()=>new dt(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Iv(n,e,t){function i(c,u,d=.85){let f=c.getWorldPosition(new _),h=c.getWorldQuaternion(new Xe);e.push({half:u,min:u.clone().negate(),position:f,quaternion:h,mesh:{position:f,quaternion:h},shape:ri(u),friction:d,gravity:1})}let r=[],s=[],o=new pn({color:"#485d5d",flatShading:!0});function a([c,u],d,f){let h=new He(new it(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new _(.0475,.34,.055));let p=new At;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new He(new it(.64,.36,.055),new pn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),y=new mi(g);y.colorSpace=ht;let v=new He(new rn(.61,.095),new Et({map:y}));v.position.set(0,.116,.03),p.add(v);let b=.592/f.length,A=f.map(([D,L],w)=>{let M=new He(new it(b-.012,.155,.04),new pn({color:"#478086"}));M.position.set(-.296+b*(w+.5),-.045,.046),p.add(M),r.push(M),M.userData.touchWidth=b-.012;let R=document.createElement("canvas");R.width=208,R.height=172;let N=new mi(R);N.colorSpace=ht;let O=new He(new rn(b-.017,.139),new Et({map:N}));O.position.z=.0205,M.add(O);let X=-1/0;return M.userData.action=()=>{let F=performance.now();F-X<250||(X=F,L(),l(),M.position.z=.036,setTimeout(()=>{M.position.z=.046},115))},{label:D,context:R.getContext("2d"),texture:N}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(d,17,62,478);for(let D of A){let L=D.context;L.fillStyle="#386269",L.fillRect(0,0,208,172),L.fillStyle="#fff2d5",L.textAlign="center",L.font="bold 27px system-ui";let w=(typeof D.label=="function"?D.label():D.label).split("|");w.forEach((M,R)=>L.fillText(M,104,(w.length>1?68:97)+R*37,188)),D.texture.needsUpdate=!0}y.needsUpdate=!0}s.push(E)}function l(){for(let c of s)c()}return a(Rl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Ho[0])],["Boule",()=>t.spawn(1,Ho[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Ho[0])],["Vider",t.clear]]),a(Rl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Ho[1])],["Sph\xE8re",()=>t.spawn(5,Ho[1])]]),a(Rl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Rl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function Gl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Vr=(n,e,t)=>n+(e-n)*t,Zo=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function xd(n,e){let t=Math.floor(n),i=Math.floor(e),r=Zo(0,1,n-t),s=Zo(0,1,e-i);return Vr(Vr(Gl(t,i),Gl(t+1,i),r),Vr(Gl(t,i+1),Gl(t+1,i+1),r),s)}function Pv(n,e){return xd(n,e)*.54+xd(n*2.07+3.4,e*2.07-6.1)*.26+xd(n*4.2+9,e*4.2)*.13+xd(n*8.6,e*8.6-13)*.07}function Lv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Vr(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,y=0;if(c>.025)if(n){let b=Gl(p+792,l+677);b>.9988&&(y=(b-.9988)*49e3*Zo(.09,.3,c))}else{let[b,A]=r[p],E=2.8*u/(c+.16),D=b*E+3.6,L=A*E-8.1,w=Pv(D,L),M=Pv(D-.12,L-.09);g=Zo(.49,.66,w)*Zo(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(w-M)*5+(w-.54)*.8))}let v=n?1:Vr(.94,1,Zo(.05,.34,c));i[x]=Vr(h[0],(139+115*m)*v,g)+y,i[x+1]=Vr(h[1],(154+100*m)*v,g)+y*.94,i[x+2]=Vr(h[2],(178+77*m)*v,g)+y*.86,i[x+3]=255}}let a=new ei(i,1024,512,Cn);return a.colorSpace=ht,a.wrapS=Tn,a.magFilter=nn,a.minFilter=En,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Dv(){let n=Lv(!1),e=Lv(!0),t=n.image.data.slice();for(let r=0;r<t.length;r+=4)t[r]*=.89,t[r+1]*=.61,t[r+2]*=.53;let i=new ei(t,n.image.width,n.image.height,Cn);i.colorSpace=ht;for(let r of[n,i,e])r.mapping=ir,r.magFilter=nn,r.minFilter=nn,r.needsUpdate=!0;return{day:n,sunset:i,night:e}}function yd(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new mi(i);return r.colorSpace=ht,r}function Uv(n,e){let{day:t,sunset:i,night:r}=Dv(),s=[t,i,r],o=new Fe,a=new Ua("#a6d4ea",55,135),l=yd(128,128,(K,J)=>{let fe=K.createRadialGradient(J/2,J/2,0,J/2,J/2,J/2);fe.addColorStop(0,"#fff8df"),fe.addColorStop(.12,"#fff3bd"),fe.addColorStop(.18,"rgba(255,225,144,.40)"),fe.addColorStop(1,"rgba(255,220,144,0)"),K.fillStyle=fe,K.fillRect(0,0,J,J)}),c=new Na(new ho({map:l,blending:ii,depthWrite:!1,fog:!1,toneMapped:!1}));c.scale.setScalar(34),n.add(c);let u=t.clone();u.mapping=ir,u.needsUpdate=!0;let d=new Co(e);n.environment=d.fromEquirectangular(u).texture,d.dispose();let f=new tl("#daeaff","#88724c",2.25),h=new rl("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(f,h,h.target);let p=new _,x=0,g=null,m=!0,y=null,v=null,b=!0,A=0,E=0,D=new _;function L(K){x=[0,1,2].includes(K)?K:0;let J=g??im(x),fe=De.degToRad(J.azimuth),Ie=De.degToRad(J.elevation);D.set(Math.cos(fe)*Math.cos(Ie),Math.sin(Ie),Math.sin(fe)*Math.cos(Ie)),p.copy(D).multiplyScalar(33),f.color.set(J.ambientColor),f.groundColor.set(J.groundColor),f.intensity=J.ambientPower,h.color.set(J.sunColor),h.intensity=J.sunPower,h.position.copy(h.target.position).add(p),c.material.color.set(J.sunColor),c.material.opacity=[1,.93,.22][J.preset]*Math.min(1,J.sunPower),c.visible=b&&J.sunPower>0,n.background=J.sky==="color"||!m?o.set(J.skyColor):J.sky==="image"&&v?v:s[J.preset],n.backgroundRotation.y=De.degToRad(J.rotation),a.color.set(J.fogColor),a.near=J.fogNear,a.far=J.fogFar,n.fog=J.fog?a:null,n.environmentIntensity=A*[1,.56,.09][J.preset]}function w(K,J=()=>{}){g=K;let fe=K?.sky==="image"?K.skyImage:null;if(y!==fe){y=fe;let Ie=++E;v?.dispose(),v=null,fe&&new ni().load(fe,B=>{if(E!==Ie){B.dispose();return}B.colorSpace=ht,B.mapping=ir,v=B,L(x),J()},void 0,()=>J())}L(x)}function M(K){c.position.copy(K).addScaledVector(D,94)}function R(K){if(!h.castShadow)return;let J=h.target.position,fe=Math.round(K.x/4)*4,Ie=Math.round(K.y/4)*4,B=Math.round(K.z/4)*4;J.x===fe&&J.y===Ie&&J.z===B||(J.set(fe,Ie,B),h.position.copy(J).add(p))}L(0);let N=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function O(K,J,fe){let[,Ie,B]=N[J],ue=512;K.save(),K.scale(fe/512,fe/512),K.fillStyle=Ie,K.fillRect(0,0,ue,ue);let xe=J+19;function ye(){return xe=Math.imul(xe,1664525)+1013904223>>>0,xe/4294967296}if(K.fillStyle=B,J===16){for(let ce=0;ce<16;ce++)for(let ee=0;ee<16;ee++)(ee+ce)%2===0&&K.fillRect(ee*32,ce*32,32,32);K.fillStyle="#ff3957",K.fillRect(253,0,6,512),K.fillRect(0,253,512,6)}else if([0,2,8,15].includes(J)){let ce=J===15?32:64;K.globalAlpha=.48;for(let ee=0;ee<ue;ee+=ce){K.fillRect(0,ee,ue,J===8?3:2);for(let Pe=-ce;Pe<ue;Pe+=ce)K.fillRect(Pe+ee/ce%2*(J===2?ce/2:0),ee,2,ce)}}else if([4,5,6,7,10,11,12].includes(J)){let ce=J===5?38:J===7?64:18;for(let ee=0;ee<ce;ee++){K.strokeStyle=B,K.globalAlpha=.08+ye()*.22,K.lineWidth=J===5?1+ye()*8:1+ye()*4;let Pe=ye()*ue,Ye=J===5?.018:.009;K.beginPath();for(let Ge=0;Ge<=ue;Ge+=8){let $e=Pe+Math.sin(Ge*Ye+ee)*(J===6||J===7?4:12+ee%5*3)+(J===4?Ge*.28:0);Ge===0?K.moveTo(Ge,$e):K.lineTo(Ge,$e)}K.stroke()}}else{K.globalAlpha=.27;for(let ce=0;ce<120;ce++){let ee=ye()*ue,Pe=ye()*ue,Ye=2+ye()*6;K.beginPath(),K.arc(ee,Pe,Ye,0,Math.PI*2),K.fill()}}if(J!==16)for(let ce=0;ce<4400;ce++)K.globalAlpha=.05+ye()*.1,K.fillStyle=ye()>.5?B:"#222324",K.fillRect(ye()*ue,ye()*ue,1+ye()*4,1+ye()*3);K.restore()}let X=new Set([0,2,4,5,8,15,16]),F=N.map(([K,J,fe,Ie,B,ue],xe)=>{let ye=X.has(xe)?512:256,ce=yd(ye,ye,Pe=>O(Pe,xe,ye));ce.wrapS=ce.wrapT=Tn;let ee=new yt({map:ce,roughness:Ie,metalness:B,flatShading:!0,opacity:ue,transparent:ue<1,depthWrite:ue===1});return ee.name=K,ee}),k=F.map(K=>K.map.image),j=512,U=F.map(K=>new pn({map:K.map,flatShading:!0,opacity:K.opacity,transparent:K.transparent,depthWrite:K.depthWrite})),re={value:0},ne={value:.24},me={value:null},we={value:0};function Ee(){me.value?.dispose(),me.value=yd(512,512,(K,J)=>{K.fillStyle="#ffffff",K.fillRect(0,0,J,J);let fe=J/52,Ie=J/64;for(let B of Ce){if(!B.position||!B.half||B.position.y+B.half.y<.22)continue;let ue=(B.position.x+26)*fe,xe=(B.position.z+54)*Ie,ye=Math.min(55,B.half.x*fe+5),ce=Math.min(72,B.half.z*Ie+6);K.save(),K.translate(ue+B.half.y*fe*.2,xe+B.half.y*Ie*.24),K.scale(ye,ce);let ee=K.createRadialGradient(0,0,.15,0,0,1);ee.addColorStop(0,"rgba(22,37,65,.54)"),ee.addColorStop(.58,"rgba(36,54,76,.29)"),ee.addColorStop(1,"rgba(38,48,57,0)"),K.fillStyle=ee,K.fillRect(-1,-1,2,2),K.restore()}})}for(let K of[...F,...U])K.onBeforeCompile=J=>{J.uniforms.uFocusAmount=re,J.uniforms.uFocusRadius=ne,J.uniforms.uLabLightmap=me,J.uniforms.uLabBakedStrength=we,J.vertexShader=`varying vec3 vLabPosition;
`+J.vertexShader,J.vertexShader=J.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),J.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+J.fragmentShader,J.fragmentShader=J.fragmentShader.replace("#include <map_fragment>",`
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
      `)},K.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let Ce=[],Le=[];function te(K,J,fe,Ie,B,ue,xe,ye=0,ce=0,ee=1,Pe=1,Ye=!1){let Ge=new He(Ye?new it(B,ue,xe):gd(B,ue,xe),F[ye]);Ge.position.set(J,fe,Ie),Ge.rotation.x=ce,Ge.receiveShadow=!0,Ge.castShadow=!0,n.add(Ge);let $e=new _(B/2,ue/2,xe/2),Ct={mesh:Ge,position:Ge.position,quaternion:Ge.quaternion,half:$e,min:$e.clone().negate(),friction:ee,gravity:Pe,name:K,type:ye,shape:ri($e)};return Ce.push(Ct),Ct}let oe=vy.map(({name:K,bounds:J,type:fe=0,friction:Ie=.78,gravity:B=1})=>{let{xMin:ue,xMax:xe,zMin:ye,zMax:ce}=J;return te(K,(ue+xe)/2,-.33,(ye+ce)/2,xe-ue,.66,ce-ye,fe,0,Ie,B)});for(let K of Object.values(My))for(let J of K)te(...J);let{xMin:_e,xMax:Ue,zMin:Me,zMax:We}=xy;te("But\xE9e arri\xE8re",0,1.35,Me+.4,Ue-_e,2.7,.6,2),te("But\xE9e ouest",_e+.3,1.05,(Me+We)/2,.6,2.1,We-Me,2),te("But\xE9e est",Ue-.3,1.05,(Me+We)/2,.6,2.1,We-Me,2);let{xMin:Ve,xMax:S,zMin:V,zMax:z}=ko.hills.bounds,G=S-Ve,W=z-V,I=16,Z=64,Y=new rn(G,W,I,Z).rotateX(-Math.PI/2).translate(Ve+G/2,0,V+W/2),de=Y.attributes.uv;for(let K=0;K<de.count;K++)de.setXY(K,de.getX(K)*G/2.6,de.getY(K)*W/2.6);let pe=Y.attributes.position,C;function T(K){if(C===K)return;C=K;let J=C*.017;for(let fe=0;fe<pe.count;fe++){let Ie=pe.getX(fe),B=pe.getZ(fe),ue=Math.sin(Math.PI*De.clamp((Ie-Ve)/G,0,1)),xe=Math.min(1,(B-V)*.48,(z-B)*.48),ye=.93+.56*Math.sin(B*.36+J)+.32*Math.cos(Ie*.67+B*.26+J*1.4)+.19*Math.sin(B*.81+J*.67);pe.setY(fe,Math.max(0,ue*xe*ye))}pe.needsUpdate=!0,Y.computeVertexNormals(),Y.computeBoundingSphere()}T(yy);let q=new He(Y,F[3]);q.userData.editorAssetId="lab-hill",q.receiveShadow=q.castShadow=!0,n.add(q);let se=(K,J)=>{let fe=De.clamp((K-Ve)/G*I,0,I-1e-6),Ie=De.clamp((J-V)/W*Z,0,Z-1e-6),B=Math.floor(fe),ue=Math.floor(Ie),xe=fe-B,ye=Ie-ue,ce=I+1,ee=ue*ce+B,Pe=pe.getY(ee),Ye=pe.getY(ee+1),Ge=pe.getY(ee+ce),$e=pe.getY(ee+ce+1);return xe+ye<=1?Pe+(Ye-Pe)*xe+(Ge-Pe)*ye:$e+(Ge-$e)*(1-xe)+(Ye-$e)*(1-ye)};Ce.push({heightfield:!0,mesh:q,editorAssetId:"lab-hill",height:se,...ko.hills.bounds,friction:.81,gravity:1});function he(K,J,fe,Ie,B=1.45){let ue=yd(384,72,(ye,ce,ee)=>{ye.fillStyle="#202a32",ye.fillRect(0,0,ce,ee),ye.fillStyle=Ie,ye.font="bold 31px system-ui",ye.textAlign="center",ye.fillText(K,ce/2,48,ce-20)}),xe=new He(new rn(3.2,.6),new Et({map:ue,side:un}));xe.position.set(J,B,fe),n.add(xe),Le.push(xe)}for(let K of Object.values(ko)){he(K.name.toLocaleUpperCase("fr"),...K.sign,K.color);let{xMin:J,xMax:fe,zMin:Ie,zMax:B}=K.bounds,ue=new za(new tt().setFromPoints([new _(J,.025,Ie),new _(fe,.025,Ie),new _(fe,.025,B),new _(J,.025,B)]),new Ci({color:K.color,transparent:!0,opacity:.72}));n.add(ue),Le.push(ue)}he("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),he("MURS HAUTS",3,-31,"#e8d2ff"),he("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let ie=new yt({color:"#c8e6ed",metalness:1,roughness:.16}),Te=new He(new Ot(.54,2),ie);Te.userData.editorAssetId="chrome-sphere",Te.position.set($h.x,$h.y,$h.z),Te.castShadow=!0,n.add(Te);let be=N.map((K,J)=>{let{x:fe,z:Ie}=by(J);return te("\xC9chantillon "+N[J][0],fe,.325,Ie,.65,.65,.65,J,0,1,1,!0).mesh}),Re=new cn(1,12).rotateX(-Math.PI/2),Oe=new Et({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function ge(K){let J=new He(Re,Oe);return J.scale.setScalar(K),n.add(J),J}function Se(K,J,fe,Ie,B,ue,xe,ye){let ce=J>=3;e.shadowMap.enabled=ce,h.castShadow=ce,Oe.opacity=J===2?.17:.11,we.value=ye?.38+fe*.04:0;let ee=J>=9?2048:J>=6?1024:J>=4?512:256;h.shadow.intensity=.45+J*.055,h.shadow.radius=.65+J*.12;let Pe=13+J*1.2;Object.assign(h.shadow.camera,{left:-Pe,right:Pe,top:Pe,bottom:-Pe}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==ee&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(ee,ee)),b=B,xe!==j&&(j=xe,F.forEach((Ge,$e)=>{let Ct=Ge.userData.texture??Ge.map,hn=X.has($e)?xe:Math.min(256,xe);if(Ct.image.width===hn)return;let Zr=document.createElement("canvas");Zr.width=Zr.height=hn;let wi=Zr.getContext("2d");hn>512?O(wi,$e,hn):wi.drawImage(k[$e],0,0,hn,hn);let Ti=new mi(Zr);Ti.colorSpace=Ct.colorSpace,Ti.wrapS=Ct.wrapS,Ti.wrapT=Ct.wrapT,Ti.repeat.copy(Ct.repeat);for(let Us of[Ge,U[$e]])Us.userData.texture=Ti,Us.map=Ti,Us.needsUpdate=!0;Ct.dispose()}));let Ye=K>=4;for(let Ge of Ce)Ge.mesh?.isMesh&&!Ge.zone&&(Ge.mesh.material=Ye?F[Ge.type]:U[Ge.type]);q.material=Ye?F[3]:U[3];for(let Ge=0;Ge<be.length;Ge++)be[Ge].material=Ye?F[Ge]:U[Ge];F.forEach((Ge,$e)=>{for(let Ct of[Ge,U[$e]])Ct.userData.texture||(Ct.userData.texture=Ct.map),Ct.map=ue?Ct.userData.texture:null,Ct.color.set(ue?"#ffffff":N[$e][1]),Ct.needsUpdate=!0}),A=Ie?.21+fe*.067:0,ie.metalness=Ie?.95:.1,ie.roughness=Ie?.13:.46,m=K>=2,L(x)}return{boxes:Ce,floors:oe,probe:Te,display:be,visual:Se,shadow:ge,setTimeOfDay:L,setEnvironment:w,centerSky:M,centerShadows:R,lighting:[f,h,h.target,c],get hillSeed(){return C},setHillSeed:T,bakeLightmap:Ee,mapMaterial:(K,J)=>J>=4?F[K]:U[K],builtObjects:[...Ce.map(K=>K.mesh).filter(K=>K?.isObject3D),Te,...Le],materials:[...F,...U],focus(K,J,fe){re.value=K?J*.75:0,ne.value=.07+fe*.058}}}var g_="R38.8",Gr=document.getElementById("game");Gr instanceof HTMLCanvasElement||(Gr=document.createElement("canvas"),Gr.id="game",Gr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Gr));var Is=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),je;try{je=new yh({canvas:Gr,antialias:!Is,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}je.xr.enabled=!0;je.xr.setReferenceSpaceType("local-floor");je.shadowMap.type=ol;je.shadowMap.autoUpdate=!1;var Fv=-1/0;je.toneMapping=Ru;je.toneMappingExposure=1.15;var Lt=new ss,xt=new At,Ud=new At,Nt=new Jt(70,1,.035,210);xt.add(Ud);Ud.add(Nt);Lt.add(xt);var _t=Uv(Lt,je),R2=Cv(je),Td=Ev();Lt.add(Td);var I2=Rv(_t.probe),H=cv(Is),P2={...H};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(H.stepVolume=n)}catch{}var qr=mv();for(let n of["pointerdown","keydown"])addEventListener(n,qr.unlock,{passive:!0});var $o=gv(Lt),Si=tg(),cm=0,Nv=0,Bv=0;addEventListener("error",n=>Si.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Si.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var Ts={normal:new _,surface:null},Ad=[.18,.17,.105].map(n=>({radius:n,position:new _})),Am=new _(Go.x,Go.y,Go.z);xt.position.copy(Am);var en=new _,jo=new _,It=new _,Ov=new _,oi=new _,bn=new _,zv=new _,ia=new _,cr=new _,Vv=new _,kr=new _,kv=new _,Hl=new _,L2=.105,vd=new _,Ed=!1,Oi=!1,Em=0,Cm=null,Yl=[],Rm=100,Yt=new _(0,1,0),mr=new Xe,St=0,fr=0,Ps=0,li=0,Rs=NaN,x_={armed:!0},um=0,As=0,hm=0,_d=0,ea=0,ta=0,na=0,sn=H.quality,Zl=72,Bi=0,Zt=!1,y_="left",ft=new URLSearchParams(location.search).has("room")?5:0,Im=0,Pm=0,Lm=0,Bt=!0,Gv=0,D2=[],bd=[],Xr=_t.boxes,U2=new Ot(1,0),v_=1+Math.floor(Math.random()*(_h.length-1)),__=bh(v_),{hand:F2,fur:N2}=__;function B2(n,e,t,i,r,s,o,a){let l=new He(U2,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Fd=Qp(localStorage),O2=Fd.models.length?"|atelier-"+ys(JSON.stringify(Fd)):"",Vi=By(Fd)??__.createHead();Vi.visible=!1;Lt.add(Vi);var Ko=new _,Cd=new Xe,Hv=new _,z2=new _,Wv=new $t(0,0,0,"YXZ"),vm=new _,dm=new _,hr=new ve,qv=new Xe,Ql=9.81,b_=null,fm=new Xe,Xv=[null,null];function Nd(){return .24+H.arms*.036}function V2(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=De.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=De.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=De.lerp(s[2],i,r),n.skin.pose(s,!H.body)}var Pt=["left","right"].map(n=>{let e=wh(n,F2,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Lt.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new _,quaternion:new Xe},target:new _,gripPosition:new _,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new Xe,aimDirection:new _,supportOffset:new _,hasSupport:!1}}),Wr=new hd(_,Pt,ay),M_=Th(N2,Pt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Pt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var ki=M_.mesh;Lt.add(ki);function k2(n,e){if(H.body){fm.copy(ki.quaternion).invert();for(let t=0;t<Pt.length;t++){let i=Pt[t];Xv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(ki.position).applyQuaternion(fm),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(fm))}M_.pose(Xv,Nd(),n,e,H.hands)}}var Pn=Kh(),S_=[0,1,2,3,4,5],w_=[7,8,9,10,11,12,13,14],rc=15,Yv=ri(new _(.13,.088,.115)),G2=new it(.26,.176,.23),H2=new yt({color:"#536771",roughness:.36,metalness:.28});Pn[rc]={name:"Cam\xE9ra du spectateur",geo:G2,material:H2,shape:Yv,lowShape:Yv,mass:1.2};var{props:W2,animate:q2}=hv(),X2=Ny(Fd).slice(0,36),Dm=[],$l=[];function T_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=bi(t??r.geo,i);e.push(Pn.length),Pn.push({...r,shape:s,lowShape:s})}}T_(W2,Dm);T_(X2,$l);var A_=[...S_,...w_,...Dm,...$l];Pn[8].properties={supportWhileHeld:!0};Pn[11].properties={supportWhileHeld:!0};function Y2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new _),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new _().setComponent(t,e.getComponent(t)*.49)}for(let n of Pn)n&&(n.supportAxis=Y2(n));function Z2(n){let e=new He(new Kt(.058,.074,.1,12).rotateX(Math.PI/2),new yt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new He(new cn(.048,12),new Et({color:"#7bd7ed",side:un}));t.position.z=-.203,n.add(t);let i=new He(new it(.045,.013,.012),new Et({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function E_(n,e=!1){let t=Pn[n];if(!t)return null;let i=new He(t.geo,e?Nl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===rc&&Z2(i),i}var ut=null,wt=[],Zv=[],Yr={held:null},sa=new Map,dr=0,j2=1,Wl=new Xe,Kl=new Xe,ql=new _,Bd=new _,Es=new _,C_=new _,R_=new _;function J2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Bd.set(0,0,-1).applyAxisAngle(Yt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(ql.copy(n).addScaledVector(Bd,s),ql.y+=.15,!El(n,ql,Math.min(.2,t*.5),Xr,C_,R_)&&!wt.some(o=>o.mesh.position.distanceToSquared(ql)<(t+o.radius+.07)**2))return ql}}return null}function oa(n,e,t,i=!1){let r=Pn[n];if(!r)return null;if(!e&&(t?Es.set(t.x,t.y,t.z):je.xr.isPresenting?Es.copy(It):Nt.getWorldPosition(Es),e=J2(Es,t?.yaw??fr,r.shape.radius),!e))return i||Zn("Aucun espace libre pour cet objet."),null;let s=E_(n);s.position.copy(e),Lt.add(s);let o=H.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:j2++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:H.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new _,angular:new _,offset:new _,relativeRotation:new Xe,shadow:_t.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===rc,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),wt.push(a),Cl(a,_t.boxes),Si.record("object-spawn",{model:r.name,typeId:n,count:wt.length}),a}function I_(){for(let n of Pt)Mi(n,!1);Mi(Yr,!1);for(let n of sa.values())Mi(n,!1)}function qd(){I_();for(let n of wt)if(Lt.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();wt.length=0,sa.clear()}function P_(){if(ut?.assetLayer)return;let n=new Set(ut?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);Sy((e,t)=>{n.has(qp[e])||oa(e,t)})}P_();function Mi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+H.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function oc(){I_();for(let n of wt)Qd(n),n.frozen=!!n.spec.properties?.frozen}function gr(){Rs=NaN,li=0,Xd.reset(),xt.position.copy(Am),St=De.degToRad(ut.yaw),Ps=0,xt.rotation.y=St,en.set(0,0,0),x_.armed=!0,Oi=!1,Ts.normal.set(0,0,0),Ts.surface=null,Ed=!1,Wr.reset(),qr.reset(),hr.set(0,0);for(let n of Pt)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,Mi(n,!1)}oc();function L_(){return H.auto||Is&&!je.xr.isPresenting}function Od(){return L_()?Math.min(H.shadowQuality,sn):H.shadowQuality}function ec(){return L_()?Math.min(H.lightQuality,sn):H.lightQuality}function Hi(){let n=H.texturePower;_t.visual(sn,H.shadows?Od():0,ec(),H.reflections,H.bloom,H.textures,2**(n-1),H.lightmap),ut.refreshMaterials?.(),je.shadowMap.needsUpdate=!0,_t.setTimeOfDay(Qe.remoteLight??H.timeOfDay-1),_m=kd.slice(0,ec()>=8?3:ec()>=4?2:1),Zm.value=H.shaderMode-1;let e=je.xr.isPresenting&&je.xr.getBaseLayer?.()?.fixedFoveation!=null;_t.focus(H.focus&&!e,H.focusStrength,H.focusSize),je.toneMappingExposure=.58+H.exposure*.114,ab.value=.55+H.contrast*.09,lb.value=H.saturation*.2,cb.value=(H.warmth-5)*.022,je.xr.setFoveation(H.focus?De.clamp((H.focusStrength+1)*.105+(5-H.focusSize)*.028+(H.auto?(7-sn)*.045:0),0,1):0),je.xr.isPresenting||ac(),Bt=!0,km.redraw()}var jv=0,Jv=0,Qv=0;function ac(){if(je.xr.isPresenting)return;let n=Math.max(1,Gr.clientWidth||innerWidth),e=Math.max(1,Gr.clientHeight||innerHeight),t=rv(sn,devicePixelRatio,Is);t!==Qv&&(je.setPixelRatio(t),Qv=t),(n!==jv||e!==Jv)&&(je.setSize(n,e,!1),jv=n,Jv=e),Nt.aspect=n/e,Nt.fov=H.viewFov,Nt.updateProjectionMatrix()}addEventListener("resize",ac);globalThis.visualViewport?.addEventListener("resize",ac);function Q2(n){Object.assign(H,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},fd[n]),sn=H.quality,ta=na=ea=0,Hi()}var Ls=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",gr]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Wm]]],["Rendu",[]]],Um=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Fm(){return ft===2?Um[Im][1]:ft===3?B_[Pm][1]:ft===4?Om[Lm][1]:Ls[ft][1]}function D_(n){ft=n,Bi=0,Bt=!0}var zd=null,U_=[],Rd=0,jl=0,Vd=null,F_=!1,Nm=0,Bm=0,N_={},kd=Array.from({length:3},()=>{let n=new nl("#ffffff",0,22,1.6);return n.visible=!1,Lt.add(n),{light:n,mesh:null,distance:1/0}}),_m=kd,sc=new _;function $v(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(sc);if(t>34**2)return;let i=_m[0];for(let r of _m)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function $2(n){n?Nt.getWorldPosition(sc):sc.copy(It);for(let t of kd)t.mesh=null,t.distance=1/0;if(n)Qe.forEachReplica($v);else if(H.objects)for(let t of wt)t.materialStyle===3&&$v(t.mesh);let e=20+ec()*.75;for(let{light:t,mesh:i}of kd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function lc(){Si.record("capture",{mode:je.xr.isPresenting?"VR":"PC"});let n=Si.snapshot(je.xr.isPresenting?"VR":"PC");zd={game:"Gorilla Lab",version:g_.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:je.xr.isPresenting?"VR":"PC",sessionHadVR:F_,settings:{...H},qualityActive:sn,diagnostics:n,debugGeometry:{...$o.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:je.getPixelRatio()},haptics:Pt.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:b_,audio:{volume:H.stepVolume,enabled:H.stepAudio,clipsPlayed:qr.count,state:qr.state},performance:{fps:As,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:je.xr.isPresenting?Vd:null,previousVR:Vd,renderer:N_,terrainSeed:_t.hillSeed,map:ut.active?{name:ut.name,pieces:ut.nodes}:null,objects:{physics:{...Tl},total:wt.length,held:wt.filter(e=>e.owner).length,frozen:wt.filter(e=>e.frozen).length},cloud:{role:Qe.role,connected:Qe.connected,replicas:Qe.replicaCount,...Qe.stats},locomotion:{trackedFrames:Bm,contactFrames:Nm,launchCount:Em,lastLaunch:Cm,standingHeight:Number.isFinite(Rs)?Rs:null,viewOffset:li}},document.querySelector("#download-report").disabled=!1,Bt=!0}function K2(){zd||lc();let n=URL.createObjectURL(new Blob([JSON.stringify(zd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=K2;document.querySelector("#capture-report").onclick=lc;var aa=document.createElement("input");aa.id="report-note";aa.maxLength=500;aa.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";aa.setAttribute("aria-label","Sc\xE9nario du rapport");aa.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(aa);var tc=document.createElement("p");tc.setAttribute("aria-live","off");document.querySelector("#settings").after(tc);Ls[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",lc]);var eC=Array.from({length:Math.ceil($l.length/8)},(n,e)=>["Atelier"+($l.length>8?" "+(e+1):""),$l.slice(e*8,e*8+8)]),B_=[["Basiques",S_],["D\xE9taill\xE9s",w_],["Anim\xE9s",Dm],...eC].map(([n,e])=>[n,[...e.map(t=>[Pn[t].name,()=>qm(t)]),["Tout retirer",Yd]]]);Ls.push(["Spawn",[]]);var Om=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{ut.blank(),H.mapEdit=!0}],["Annuler placement",()=>ut.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>ut.recenter(It.x,xt.position.y,It.z,fr)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{ut.reset(),H.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>o_(!1)],["Utiliser comme t\xEAte",()=>o_(!0)]]]];Ls.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",z_],["Tester vibration droite",V_],["\xC9couter un pas",k_],["Capturer un rapport",lc]]]);function O_(n){let e=Pt.find(i=>i.side===n),t=e?.valid&&tm(e,.45,65);Si.record("haptic-test",{side:n,supported:!!t}),Zn(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function z_(){O_("left")}function V_(){O_("right")}function k_(){qr.unlock().then(()=>qr.play(H.stepVolume))}function G_(){try{localStorage.setItem("gorilla-lab-step-volume",String(H.stepVolume))}catch{}}var tC=document.querySelector("#section"),Md=document.querySelector("#settings"),nC=document.querySelector("#readings"),zm=[1,.75,.5,.25];function Mn(n,e){if(Si.record("setting",{key:n,step:e,previous:H[n]}),n==="mirrorQuality"){H.mirrorQuality=De.clamp(H.mirrorQuality+e,1,3),Bt=!0;return}if(n==="debugSpeed"){H.debugSpeed=De.clamp(H.debugSpeed+e,1,zm.length),Wr.reset(),Bt=!0;return}if(n==="stepVolume"){H.stepVolume=De.clamp(H.stepVolume+e,1,10),G_(),Bt=!0;return}if(n==="viewFov"){H.viewFov=De.clamp(H.viewFov+5*e,50,105),ac(),Bt=!0;return}if(n==="vrFov"){H.vrFov=De.clamp(H.vrFov+5*e,55,100),Bt=!0;return}if(n==="shaderMode"){H.shaderMode=(H.shaderMode-1+e+dd.length)%dd.length+1,Zm.value=H.shaderMode-1,Bt=!0;return}if(n==="timeOfDay"){if(Qe.role==="player"){let i=((Qe.remoteLight??H.timeOfDay-1)+e+3)%3;Qe.sendAction({type:"world",mode:1,typeId:i})}else H.timeOfDay=(H.timeOfDay-1+e+3)%3+1;Hi();return}let t={mapMode:9,mapShape:5,mapMaterial:rm.length,mapSurface:4,mapTurn:8,mapTexture:cd.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];H[n]=(H[n]-1+e+i)%i+1,Bt=!0;return}if(n==="mapEdit"&&!H.mapEdit&&!ut.active&&ut.load(bv(_t.boxes)),n==="toolMode"){H.toolMode=(H.toolMode-1+e+ws.length)%ws.length+1,je.xr.isPresenting||Zn("Outil \xB7 "+ws[H.toolMode-1]),Bt=!0;return}if(n==="preset"){let i=Object.keys(fd);H.preset=(H.preset-1+e+i.length)%i.length+1,Q2(i[H.preset-1]);return}if(typeof H[n]=="boolean"?H[n]=!H[n]:H[n]=De.clamp(H[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Pt)i.valid=!1,i.surface=null;if(n==="quality"&&(H.auto=!1,sn=H.quality),n==="auto"&&!H.auto&&(sn=H.quality),n==="movement"||n==="collisions")for(let i of Pt)i.surface=null;if(n==="objects"&&!H.objects&&oc(),n==="blasterActive"&&H.blasterActive&&(H.toolActive=!1),n==="toolActive"&&H.toolActive&&(H.blasterActive=!1),!H.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Pt)i.held?.toolHold&&Mi(i,!1);Hm(!1)}n==="preciseHitboxes"&&H_(),Hi()}function H_(){for(let n of wt)n.precise=H.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||Cl(n,_t.boxes)}function W_(){let n=(ft===2?Um:ft===4?Om:null)?.flatMap(e=>e[1])??Fm();for(let[,e]of n)typeof e=="string"&&(H[e]=P2[e]);ft===6&&(G_(),Wr.reset()),ft===0&&gr(),ft===1&&(H_(),oc()),ft===3&&Yd(),ft===2&&(sn=H.quality),Hi()}function Xl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),la(),Bt=!0},t}function q_(n){return n==="preciseHitboxes"?H[n]?"High":"Low":H[n]?"Actif":"Coup\xE9"}function Vm(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][H[n]-1];if(n==="debugRange")return H[n]*5+" m";if(n==="debugBudget")return H[n]*1e3+" segments";if(n==="debugSpeed")return Qe.role?"\xD71 en ligne":"\xD7"+zm[H.debugSpeed-1];if(n==="stepVolume")return H.stepVolume+"/10";if(n==="viewFov")return H.viewFov+"\xB0";if(n==="vrFov")return H.vrFov===100?"Natif":H.vrFov+" %";if(n==="mapTexture")return H[n]===1?"Aucune":cd[H[n]-2];if(n==="terrainResolution")return[8,16,32,48][H[n]-1]+"\xB2";if(n==="shaderMode")return dd[H.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=H[n],t=n==="shadowQuality"?Od():ec();return t===e?e+"/10":e+"/10 \xB7 "+t+(H.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Qe.remoteLight??H.timeOfDay-1]:n==="mapMode"?Q_[H.mapMode-1]:n==="mapShape"?uC[H.mapShape-1]:n==="mapSurface"?hC[H.mapSurface-1]:n==="mapMaterial"?rm[H.mapMaterial-1]:n==="mapTurn"?(H.mapTurn-1)*45+"\xB0":n==="toolMode"?ws[H.toolMode-1]:n==="preset"?Object.keys(fd)[H.preset-1]:n==="texturePower"?[2**(H[n]-1),2**(H[n]-1)].join("\xD7"):H[n]}function bm(){return ft===2?Um:ft===3?B_:Om}function X_(){return ft===2?Im:ft===3?Pm:Lm}function Y_(n){ft===2?Im=n:ft===3?Pm=n:Lm=n}function Z_(n){return n===z_||n===V_?"Tester":n===lc?"Capturer":n===k_?"\xC9couter":n===qd||n===Yd?"Vider":n===gr||n===Wm?"R\xE9initialiser":ft===3?"Cr\xE9er":"Appliquer"}function la(){if(tC.textContent=Ls[ft][0],j_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ft))),Md.replaceChildren(),iC.hidden=ft!==5,document.querySelector("#restore").hidden=ft===5,ft!==5){if(ft>=2&&ft<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),bm().forEach(([e],t)=>{let i=Xl(e,()=>Y_(t));i.setAttribute("aria-pressed",String(X_()===t)),n.append(i)}),Md.append(n)}if(ft===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",Md.append(n)}for(let[n,e]of Fm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Xl(Z_(e),e)):typeof H[e]=="boolean"?i.append(Xl(q_(e),()=>Mn(e,1))):i.append(Xl("\u2212",()=>Mn(e,-1)),document.createTextNode(" "+Vm(e)+" "),Xl("+",()=>Mn(e,1))),t.append(i),Md.append(t)}}}var j_=document.querySelectorAll("[data-page]"),iC=document.querySelector("#cloud-access");j_.forEach((n,e)=>n.onclick=()=>{D_(e),la()});document.querySelector("#restore").onclick=()=>{W_(),la()};la();function J_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new mi(s);a.colorSpace=ht;let l=new He(new rn(t,i),new Et({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var mn=J_(640,652,.84,.86,Lt);mn.mesh.visible=!1;var ai=J_(416,84,.32,.065,Lt);ai.mesh.visible=!1;var Jo=new Jt(75,1,.07,20),In=new pl(new rn(1.7,1.95),{color:16054015,textureWidth:Is?128:256,textureHeight:Is?128:256,clipBias:.004,multisample:0}),Kv=new _,Sd=new _,e_=new _,t_=new _,pm=new Xe,rC=new _,sC=new Xe().setFromAxisAngle(Yt,Math.PI),oC=new _(Nr.x,Nr.y,Nr.z);In.position.set(Nr.x,Nr.y,Nr.z);In.rotation.y=Math.PI;Lt.add(In);var cc=new He(new it(1.8,2.03,.1),new pn({color:"#344650"}));cc.userData.editorAssetId="lab-mirror";cc.position.copy(In.position).z+=.064;Lt.add(cc);var aC=In.onBeforeRender.bind(In);In.onBeforeRender=()=>{};In.visible=!1;var Qo=-1/0,n_=null,i_=0,Mm=0;function lC(n,e){if(Mm=0,In.visible=!1,!H.reflections||H.mirrorQuality===1){Qo=-1/0;return}if(Jo.position.copy(It),e){let u=e.transform.orientation;Jo.quaternion.set(u.x,u.y,u.z,u.w).premultiply(Cd.setFromAxisAngle(Yt,St))}else Nt.getWorldQuaternion(Jo.quaternion);e_.set(0,0,-1).applyQuaternion(Jo.quaternion);let t=null,i=3;function r(u,d,f){Sd.subVectors(d,It);let h=Sd.length();Kv.set(0,0,1).applyQuaternion(f),!(h>=i||Sd.dot(Kv)>=-.15||Sd.dot(e_)<=.66*h)&&(t=u,i=h,In.position.copy(d),In.quaternion.copy(f))}ut.usesBuiltInMirror&&r(cc,oC,sC);for(let{mesh:u}of ut.mirrors()){let{mirrorSize:d}=u.userData;pm.copy(u.quaternion),t_.copy(u.position).add(rC.set(0,0,d.d/2+.002).applyQuaternion(pm)),r(u,t_,pm)}if(!t){Qo=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};In.scale.set(s/1.7,o/1.95,1),In.visible=!0,n_!==t&&(n_=t,Qo=-1/0);let a=H.mirrorQuality,l=a===3?Is||je.xr.isPresenting?256:768:128;if(i_!==l&&(In.getRenderTarget().setSize(l,l),i_=l,Qo=-1/0),n-Qo<(a===3?45:110))return;Qo=n,Jo.updateMatrixWorld(!0),In.updateMatrixWorld(!0),Vi.visible=H.body;let c=performance.now();try{aC(je,Lt,Jo)}finally{Vi.visible=!1}Mm=performance.now()-c}var Gi=new er,Yn=new _,On=new _,wd=new _,r_=new _,Jl=null,Id=null,Pd=null,cC=new Set(Lt.children),km=Iv(Lt,_t.boxes,{spawn:qm,clear:Yd,resetPlayer:gr,resetObjects:Wm,quality:()=>sn+"/10",resolution:()=>H.resolution+"/10 \xB7 relancer VR",textureSize:()=>Vm("texturePower"),qualityNext:()=>{H.quality>=10&&(H.quality=0),Mn("quality",1)},resolutionNext:()=>{H.resolution>=10&&(H.resolution=0),Mn("resolution",1)},textureNext:()=>{H.texturePower>=12&&(H.texturePower=0),Mn("texturePower",1)},hitbox:()=>Mn("preciseHitboxes",1),movement:()=>Mn("movement",1)}),Q_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],uC=["Bloc","Rampe","Mur","Dalle","Terrain"],hC=["Normale","Glace","Caoutchouc","Lune"],s_=new Map;function dC(){for(let n of ut.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d,n.gravity,n.bounce]),t=s_.get(e);if(t===void 0){let r=new _(n.w,n.h,n.d),s=Wo(n.model,r);s.scale(n.w,n.h,n.d);let o=Ul(n.model,r),a=bi(o);o.dispose(),t=Pn.length,Pn.push({id:n.model.id,name:n.model.name,geo:s,material:Or(n.model),shape:a,lowShape:a,assetId:n.model.assetId??null,physics:id({physics:{gravity:n.gravity,bounce:n.bounce}}),properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:De.clamp(n.w*n.h*n.d*9,.18,12)}),s_.set(e,t)}let i=oa(t,new _(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(De.degToRad(n.pitch),De.degToRad(n.yaw),De.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}ut=Av({scene:Lt,arena:_t,boot:Am,onReset:n=>{qd(),gr(),St=De.degToRad(n),ut.builtIn&&P_(),dC()},onVisual:Hi,getLevel:()=>sn,defaultObjects:[..._t.builtObjects,...Lt.children.filter(n=>!cC.has(n)),cc]});var Qe=Nx({scene:Lt,currentMap:()=>(ut.signature||"arena-r25-"+_t.hillSeed)+O2,seedArena:n=>_t.setHillSeed(n),makeReplica:n=>{let e=E_(n,!0);return e&&ca(e.material),e},onAction:yC,onStatus:()=>{ft===5&&(Bt=!0)},onShot:n=>Xd.receiveShot(n,Qe.role==="vr"),applyLight:n=>{_t.setTimeOfDay(n??H.timeOfDay-1),Bt=!0,je.xr.isPresenting||la()}});function o_(n){let e=ut.modelPieces();if(!e.length||e.length>Di.parts){Zn("Compose un mod\xE8le de 1 \xE0 "+Di.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Qp(localStorage);if(t.models.length>=Di.models){Zn("La collection de mod\xE8les est pleine.");return}let i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0);for(let c of e)i.min(new _(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new _(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:H.modelGrab,frozen:H.modelFrozen,collidable:H.modelCollidable,supportWhileHeld:H.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?_v[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Jp,JSON.stringify(Ss(t))),Zn("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{Zn("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var mm=new Map;function fC(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][H.mapShape-1],e=Xo({detail:[8,16,32,48][H.terrainResolution-1],amplitude:(H.terrainAmplitude-1)*.34,frequency:.05+H.terrainFrequency*.025,seed:H.terrainSeed,grass:(H.terrainGrass-1)/9,shrub:(H.terrainShrub-1)/9}),t=H.mapTexture-2;return t>=0&&!mm.has(t)&&mm.set(t,tv(t).toDataURL("image/webp",.83)),Vl({...n,material:H.mapMaterial-1,yaw:H.mapShape===5?0:(H.mapTurn-1)*45,...sm[Object.keys(sm)[H.mapSurface-1]],texture:mm.get(t)??null,terrain:H.mapShape===5||H.mapMode===9?e:null,brushRadius:.5+H.brushRadius*.5,brushStrength:H.brushStrength*.15})}function pC(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Yn.set(s.x,s.y-li,s.z).applyAxisAngle(Yt,St).add(xt.position),mr.set(o.x,o.y,o.z,o.w),On.set(0,0,-1).applyQuaternion(mr).applyAxisAngle(Yt,St),ut.edit(Yn,On,i,{mode:H.mapMode,piece:fC(),head:It,feet:xt.position.y}),i&&(Bt=!0)}function mC(n){if(!ut.builtIn||!n.valid||n.held||n.remoteHeld||Zt)return;let e=null;for(let t of km.targets)if(t.getWorldPosition(r_),!(n.mesh.position.distanceToSquared(r_)>.11**2)&&(t.worldToLocal(wd.copy(n.mesh.position)),Math.abs(wd.x)<t.userData.touchWidth*.5+.025&&Math.abs(wd.y)<.095&&Math.abs(wd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Sm(n,e,t){if(!ut.builtIn)return;Gi.set(n,e),Gi.far=5.5;let i=Gi.intersectObjects(km.targets,!1);Gi.far=1/0;let r=i[0];r&&(Ds.visible=!0,Ds.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),la()))}var a_=new _,$_=new Xe,Gm=Ah(Lt),Xd=av({scene:Lt,rig:xt,camera:Nt,arena:_t,objects:wt,spectator:Qe}),UL=Gm.mesh,Ld=new _,pr=new Xe,Gd=new _,ra={mode:0,position:Gd,quaternion:pr,end:Ld},l_=new _,gC=new _,c_=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Hd=new _,xC={position:Gd,quaternion:pr,pressure:[.1,.66,.08]},gm=new _,Wd=new Xe;function Hm(n){Yr.held&&Mi(Yr,n)}function K_(n,e){if(Qe.role==="pc"){Zn("Rejoins le salon en joueur pour modifier les objets.");return}if(Qe.role!=="player"){e();return}Qe.sendAction({type:"world",mode:3,typeId:n})||Zn("Attends la connexion \xE0 l\u2019h\xF4te.")}function Yd(){K_(0,qd)}function Wm(){K_(1,oc)}function qm(n,e=null){if(H.objects=!0,Qe.role==="pc"){Zn("Commence par rejoindre le salon en joueur.");return}Qe.role==="player"?Qe.sendAction({type:"spawn",typeId:n})||Zn("Attends la connexion \xE0 l\u2019h\xF4te."):oa(n,e)}function yC(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(H.timeOfDay=n.typeId+1,Hi()):n.mode===3&&[qd,oc][n.typeId]?.();return}if(n.type==="spawn"){A_.includes(n.typeId)&&(H.objects=!0,oa(n.typeId,null,e));return}let t=wt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=sa.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new Xe},sa.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?Qe.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),Mi(o,!0)}return}if(!H.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Es.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Jh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||El(l,t.mesh.position,.01,Xr,C_,R_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Xm(t,s,o,De.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Kl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Kl))}}function vC(n){if(je.xr.isPresenting)for(let t of Pt)t.valid&&t.held&&xm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of sa){let r=Qe.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){Mi(i,!1),sa.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Es.copy(s?.position??r.avatar?.tool?.position??r),Bd.set(0,0,-1).applyQuaternion(i.controllerRotation),xm(o,Es,Bd,i.controllerRotation,n)}let e=Yr.held;e&&(Nt.getWorldPosition(Hd),Nt.getWorldDirection(a_),Nt.getWorldQuaternion(pr),xm(e,Hd,a_,pr,n))}function xm(n,e,t,i,r){n.toolHold?gm.copy(e).addScaledVector(t,n.toolDistance):gm.copy(n.offset).applyQuaternion(i).add(e),Wd.multiplyQuaternions(i,n.relativeRotation),ly(n,gm,Wd,Xr,r)}function eb(n){return n.customMaterial||(n.mesh.material=Nl(n.mesh.material),n.customMaterial=!0,ca(n.mesh.material)),n.mesh.material}function _C(n){let e=eb(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function tb(n,e,t){Gi.set(n,e),Gi.far=9;let i=Gi.intersectObjects(t,!1)[0];return Gi.far=1/0,Ld.copy(n).addScaledVector(e,i?.distance??9),El(n,Ld,.006,Xr,l_,gC)?(Ld.copy(l_),null):i}function Xm(n,e,t,i){if(e===1){if(t?.held){t===Yr?Hm(!0):Mi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??pr;n.relativeRotation.multiplyQuaternions($_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Lt.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();wt.splice(wt.indexOf(n),1)}else if(e===4&&!n.protected){Hd.copy(n.mesh.position).addScaledVector(Yt,n.radius*2+.08);let r=oa(n.netType,Hd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Nl(n.mesh.material),r.customMaterial=!0,ca(r.mesh.material)),Cl(r,_t.boxes))}else if(e===5){let r=eb(n),s=c_[n.paint++%c_.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,_C(n));Bt=!0}}var Hr=[];function nb(n,e,t,i){if(!H.objects)return;let r=Qe.role==="player";if(Hr.length=0,r)Qe.forEachReplica(a=>Hr.push(a));else for(let a of wt)!a.owner&&a.mesh.visible&&Hr.push(a.mesh);let s=tb(n,e,Hr);if(ra.mode=H.toolMode,i?(Gd.copy(i.mesh.position),pr.copy(i.controllerRotation)):(Nt.getWorldQuaternion(pr),Gd.set(.16,-.17,-.43).applyQuaternion(pr).add(n)),Gm.update(ra),!t)return;if(r){if(H.toolMode===1&&dr)Qe.sendAction({type:"release",objectId:dr}),dr=0;else if(s){let a=s.object.userData.netId;Qe.sendAction({type:"tool",mode:H.toolMode,objectId:a})&&H.toolMode===1&&(dr=a)}return}let o=s&&wt.find(a=>a.mesh===s.object);Xm(o,H.toolMode,i??Yr,s?De.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function bC(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;Yn.set(o.x,o.y-li,o.z).applyAxisAngle(Yt,St).add(xt.position),mr.set(a.x,a.y,a.z,a.w),On.set(0,0,-1).applyQuaternion(mr).applyAxisAngle(Yt,St),nb(Yn,On,r,i)}function MC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Yn.set(s.x,s.y-li,s.z).applyAxisAngle(Yt,St).add(xt.position),mr.set(o.x,o.y,o.z,o.w),On.set(0,0,-1).applyQuaternion(mr).applyAxisAngle(Yt,St),Sm(Yn,On,i)}var Ds=B2(Lt,new Et({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Ds.visible=!1;var wm=[],Cs=null;function u_(){let n=mn.ctx;wm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+g_,25,42),n.font="20px system-ui",n.fillText(As+" FPS   \xB7   Q "+sn+"/10   \xB7   "+(H.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",wm.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/Ls.length);if(Ls.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>D_(l),ft===l?"#586d53":"#334b58")),ft===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Qe.caption,25,145,587),n.fillText("Salons publics",25,190),gl.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>Qe.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>Qe.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Qe.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Qe.leave()),e(325,579,287,44,"Fermer",()=>Zt=!1),mn.texture.needsUpdate=!0;return}let i=ft>=2&&ft<=4;i&&bm().forEach(([a],l)=>{let c=X_()===l,u=Math.min(144,Math.floor(586/bm().length)-4);e(25+l*(u+4),114,u,38,a,()=>Y_(l),c?"#546947":"#263d49")});let r=Fm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));Bi=Math.max(0,Math.min(Bi,o-1)),r.slice(Bi*s,(Bi+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,Z_(l),l):typeof H[l]=="boolean"?e(406,u,206,36,q_(l),()=>Mn(l,1),H[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>Mn(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Vm(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>Mn(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Bi=(Bi+o-1)%o,Bt=!0}),e(432,533,180,35,"Suivant",()=>{Bi=(Bi+1)%o,Bt=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Bi+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",W_),e(325,579,287,44,"Fermer",()=>Zt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Ym||(ft===6?"v "+en.length().toFixed(2)+" m/s | g "+Ql.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ft===4&&ut.status?ut.status.slice(0,64):zd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),mn.texture.needsUpdate=!0}function SC(n){Zt=!Zt,Zt&&(y_=n,Hv.set(0,0,-1).applyAxisAngle(Yt,fr),mn.mesh.position.copy(It).addScaledVector(Hv,1.25),mn.mesh.position.y+=.08,mn.mesh.lookAt(It),mn.mesh.updateMatrixWorld(!0)),Bt=!0}function wC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Yn.set(s.x,s.y-li,s.z).applyAxisAngle(Yt,St).add(xt.position),mr.set(o.x,o.y,o.z,o.w),On.set(0,0,-1).applyQuaternion(mr).applyAxisAngle(Yt,St),Gi.set(Yn,On);let a=Gi.intersectObject(mn.mesh)[0];if(a&&(Ds.visible=!0,Ds.position.copy(a.point).addScaledVector(On,-.012),i)){let l=a.uv.x*mn.w,c=(1-a.uv.y)*mn.h;wm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Bt=!0}}var Zd=iv(),{held:zi,pressed:ur}=Zd,ib=lv(je.domElement,document.querySelector("#touch-fire")),h_=document.querySelector("#game-settings"),rb=document.querySelector("#open-settings"),Tm=document.querySelector("#game-hint"),Dd=0;function Zn(n){Tm.textContent=n,Tm.hidden=!1,Dd=performance.now()+2400,Ym=n,Bt=!0}var Ym="";function jd(n){let e=n??!h_.hidden;h_.hidden=e,rb.hidden=!e,e&&je.domElement.focus()}rb.onclick=()=>jd(!1);document.querySelector("#close-settings").onclick=()=>jd(!0);var nc=nv({canvas:je.domElement,enabled:()=>!je.xr.isPresenting,onLook:(n,e,t)=>{St-=n*t,Ps=De.clamp(Ps-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&ur.add(e)},onMenu:()=>jd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!je.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||jd();return}n.code==="Space"&&n.preventDefault(),Zd.down(n.code,n.repeat),n.code==="KeyR"&&gr()}});addEventListener("keyup",n=>Zd.up(n.code));addEventListener("blur",()=>{Zd.clear(),nc.clear(),ib.clear()});function TC(n,e){if(!H.objects)return!1;let t=Qe.role==="player";if(t&&dr)return Qe.sendAction({type:"release",objectId:dr}),dr=0,!0;if(Yr.held)return Hm(!0),!0;if(Hr.length=0,t)Qe.forEachReplica(r=>Hr.push(r));else for(let r of wt)!r.owner&&r.mesh.visible&&Hr.push(r.mesh);let i=tb(n,e,Hr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;Qe.sendAction({type:"hold",objectId:r})&&(dr=r)}else Nt.getWorldQuaternion(pr),Xm(wt.find(r=>r.mesh===i.object),1,Yr,Math.max(.75,i.distance));return!0}var ym=[];function sb(){return ym.length=0,Qe.forEachReplica(n=>{let e=n.userData.netType;if(!Pn[e]||Pn[e].properties?.collidable===!1||n.userData.held)return;let t=Pn[e],i=H.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=H.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},ym.push(r)}),ym}function AC(){Qe.role!=="vr"||!Qe.remoteSpectator||wt.some(n=>n.netType===rc)||oa(rc,null,null,!0)}var ic=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{ic.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});ic.onclick=async()=>{let n;qr.unlock();try{ic.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),je.xr.setFramebufferScaleFactor(.45+H.resolution*.055),await je.xr.setSession(n),Hi(),Zl=n.frameRate||72,Yl=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Yl.includes(120)?120:Yl.find(t=>t>=100)??Yl.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}Zl=n.frameRate||Zl,Rm=Math.min(100,Zl),H.auto&&(sn=Math.min(sn,4),ea=ta=na=0),U_=[],Si.reset(),Rd=0,jl=0,Nm=Bm=Em=0,Cm=null,F_=!0,Vd=null,Rs=NaN,li=0,gr(),Hi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),ic.disabled=!1,document.querySelector("#status").textContent=e.message}};je.xr.addEventListener("sessionend",()=>{ic.disabled=!1,Zt=!1,mn.mesh.visible=!1,ai.mesh.visible=!1,document.body.classList.remove("immersive"),gr(),ac()});function ob(n){if(!ut.active){for(let e of _t.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(ut.active){let e=-1/0,t;for(let i of _t.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function d_(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Qe.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Zt||!e||n.grip||!H.objects)return;let i=null,r=.15;if(Qe.forEachReplica(s=>{if(s.userData.held)return;let o=Pn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Jh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;Qe.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function EC(n,e,t){let i=[...n.session.inputSources];for(let r of Pt){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&H.hands&&!H.body,!o){Qe.role==="player"&&d_(r,!1),r.valid=!1,r.surface=null,Mi(r,!1);continue}pv(r,o.transform,li,St,xt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Wl.copy(r.controllerRotation),V2(r,s.gamepad?.buttons??[],t),Qe.role==="player")d_(r,a);else if(!Zt&&a&&!r.grip&&H.objects&&!r.held){let h=null,p=.15;for(let x of wt){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let g=Jh(r.target,x);g<p&&(p=g,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Kl.copy(Wl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Kl),h.relativeRotation.multiplyQuaternions(Kl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&Mi(r,!Zt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Wd.multiplyQuaternions(Wl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Wd),ia.copy(l.offset).applyQuaternion(Wl);let h=r.supportOffset.dot(ia);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(ia),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion($_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Yt,St):r.aimDirection.set(0,0,-1).applyQuaternion(Wl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&SC(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!Zt&&Mn("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&H.toolActive&&!Zt&&Mn("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if(Zt){let h=f&&!r.trigger;(h||!Cs||!Cs.click&&r.side!==y_)&&(Cs={source:s,click:h})}else!Zt&&r.side==="right"&&H.mapEdit?Pd={source:s,click:f&&!r.trigger}:!Zt&&r.side==="right"&&H.toolActive?Id={source:s,hand:r,click:f&&!r.trigger}:!Zt&&!H.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(Jl={source:s,click:f&&!r.trigger});r.trigger=f}}function f_(n,e){let t=n?-Ko.y:Math.max(0,-Math.sin(Ps)),i=0,r=0,s=0;if(n){qv.setFromAxisAngle(Yt,-fr);for(let u of Pt)u.valid&&(dm.copy(u.gripPosition).sub(It).applyQuaternion(qv),i+=dm.x-(u.side==="left"?-.2:.2),r+=dm.z+.24,s++)}let o=s?De.clamp(-r/s,-.35,.45):0,a=s?De.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?rg(t,o):-.31*De.smoothstep(t,.2,.92);hr.x=De.lerp(hr.x,c,l),hr.y=De.lerp(hr.y,-a*.62,l),Wv.set(hr.x,fr,hr.y,"YXZ"),ki.quaternion.setFromEuler(Wv)}function CC(n,e,t,i,r=i){let s=!!t,o=.43+H.size*.088;if(s){let f=t.transform.position;Rs=ig(Rs,f.y),li=De.clamp(Rs-o,-.65,1.7),Ud.position.y=-li,oi.set(f.x,f.y-li,f.z);let h=[...n.session.inputSources].find(g=>g.handedness==="right"),p=Km(h?.gamepad),x=eg(x_,p,{menu:Zt,allowMenu:H.snapWithMenu});x&&(Si.record("snap-turn",{direction:x,menu:Zt}),bn.copy(oi).applyAxisAngle(Yt,St),St-=x*Math.PI/4,Ov.copy(oi).applyAxisAngle(Yt,St),xt.position.add(bn.sub(Ov)),Wr.reset(),Ed=!1)}else Ud.position.y=0,oi.set(0,o,0),Nt.position.copy(oi),Nt.rotation.set(Ps,0,0,"YXZ");if(It.copy(oi).applyAxisAngle(Yt,St).add(xt.position),s){let f=t.transform.orientation;Cd.set(f.x,f.y,f.z,f.w),Ko.set(0,0,-1).applyQuaternion(Cd),Ko.x**2+Ko.z**2>.018&&(fr=St+Math.atan2(-Ko.x,-Ko.z))}else fr=St;let a=ob(It),l=9.81*(H.gravity/5)*(a?.gravity??1);Ql=l,Vv.copy(xt.position);let c=Qe.role==="player"?sb():wt;if(s){EC(n,e,r),f_(!0,r),Pt.some(f=>f.valid)&&Bm++,bd.length=0;for(let f of Xr)bd.push(f);if(H.collisions&&H.objects)for(let f of c)f.handCollider&&!f.owner&&bd.push(f.handCollider);Wr.move({head:It,dt:i,inputDt:r,gravity:l,settings:H,boxes:bd,velocity:en,movement:jo,reach:Nd()*2+.16});for(let f of Pt)ov(f,H.stepHaptics,r,.08+H.stepHapticStrength*.04,40)}else{f_(!1,r),en.y-=l*i;let f=Number(zi.has("KeyD"))-Number(zi.has("KeyA")||zi.has("KeyQ"))+nc.movement.x,h=Number(zi.has("KeyS"))-Number(zi.has("KeyW")||zi.has("KeyZ"))+nc.movement.z,p=zi.has("ShiftLeft")||zi.has("ShiftRight");cr.set(f,0,h).clampLength(0,1).applyAxisAngle(Yt,St).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Oi?13:4));en.x=De.lerp(en.x,cr.x,x),en.z=De.lerp(en.z,cr.z,x);let m=(nc.consumeJump()||ur.delete("Space"))&&Oi,y=Ts.normal,v=!m&&Oi&&y.y>=.62&&(Ts.surface?.friction??0)>=.45;m?en.y=3.1+H.jump*.18:v&&(en.y=-(en.x*y.x+en.z*y.z)/y.y),jo.copy(en).multiplyScalar(i),v&&jo.addScaledVector(y,-l*i*i)}if(H.collisions&&Ed&&(ia.copy(It).add(jo),El(kv,ia,L2,Xr,bn,Hl)&&cr.subVectors(ia,bn).dot(Hl)<0&&(jo.copy(bn).sub(It),sg(en,Hl))),xt.position.add(jo),It.copy(oi).applyAxisAngle(Yt,St).add(xt.position),Oi=!1,Ts.normal.set(0,0,0),Ts.surface=null,H.collisions){vd.set(0,-1,0).applyQuaternion(ki.quaternion),vd.y=0,vd.addScaledVector(z2.set(0,0,1).applyAxisAngle(Yt,fr),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,oi.y*.57):oi.y,{radius:p}=Ad[f];if(bn.set(It.x,xt.position.y+h,It.z),f<2&&bn.add(og(s,vd,Math.max(0,oi.y-h),cr)),zv.copy(bn),Oi=Hp(bn,p,_t.boxes,en,0,3+H.grip,i,f===0?Ts:null)||Oi,H.objects)for(let x of c)x.blocksPlayer&&!x.owner&&gy(bn,p,x,en,Hl)&&Hl.y>.6&&(Oi=!0);Hp(bn,p,_t.boxes,en,0,3+H.grip,i),cr.subVectors(bn,zv),xt.position.add(cr),It.add(cr);for(let x=0;x<f;x++)Ad[x].position.add(cr);Ad[f].position.copy(bn)}}if(kr.subVectors(xt.position,Vv),qr.update({dt:r,inVR:s,hands:Pt,grounded:Oi,travel:Math.hypot(kr.x,kr.z),volume:H.stepVolume,enabled:H.stepAudio}),s){let f=Wr.finish(kr,en);f.contacts&&Nm++,f.launched&&(Em++,Cm={handSpeed:f.launchSpeed,velocity:en.toArray(),t:performance.now()})}(ut.active?xt.position.y<-24||Math.abs(xt.position.x)>155||Math.abs(xt.position.z)>155:xt.position.y<-9||Math.abs(xt.position.x)>33||xt.position.z<-57||xt.position.z>13)&&(gr(),It.copy(oi).applyAxisAngle(Yt,St).add(xt.position)),kv.copy(It),Ed=!0,xt.rotation.y=St,s&&Nt.position.set(0,0,0);for(let f of Pt)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(kr,f.surface?0:1),f.gripPosition.add(kr)),s||(f.mesh.visible=!1);let u=.72+H.size*.05,d=Nd()*2*(2/3)/.82;ki.visible=H.body,Vi.position.copy(It),s?Vi.quaternion.copy(Cd).premultiply(mr.setFromAxisAngle(Yt,St)):Vi.quaternion.setFromEuler(new $t(Ps,St,0,"YXZ")),vm.set(0,-.145,.045).applyQuaternion(Vi.quaternion).add(It),ki.position.set(0,.46*d,.04*u).applyQuaternion(ki.quaternion).negate().add(vm),k2(u,d),xt.updateMatrixWorld(!0),Nt.updateWorldMatrix(!0,!1)}function RC(n,e){if(_d+=n,hm++,ea+=n,_d<1||(As=Math.round(hm/_d),hm=0,_d=0,Bt=!0,nC.textContent=As+" FPS \xB7 qualit\xE9 "+sn+"/10 \xB7 "+(H.auto?"auto":"manuel"),!H.auto||ea<5))return;ea=0;let t=e?Math.min(100,je.xr.getSession()?.frameRate||Zl):60;e&&(Rm=t),ta=As<t-4?ta+1:0,na=As>=t-1?na+1:0;let i=De.clamp(sn+(ta>=1?-1:na>=2?1:0),1,10);i!==sn&&(sn=i,ea=ta=na=0,Hi())}_t.bakeLightmap();var ab={value:1},lb={value:1},cb={value:0},Zm={value:0},p_=new WeakSet;function ca(n){if(Array.isArray(n)){for(let i of n)ca(i);return}if(!n||p_.has(n))return;p_.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:ab,uPhotoSaturation:lb,uPhotoWarmth:cb,uLabShader:Zm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of _t.materials)ca(n);Lt.traverse(n=>{n.isMesh&&![mn.mesh,ai.mesh,Ds].includes(n)&&ca(n.material)});Hi();var m_=new URLSearchParams(location.search);if(m_.has("map"))ut.loadURL(m_.get("map"));else try{let n=localStorage.getItem(kl);n&&ut.load(n)}catch(n){ut.inform(n.message)}function IC(){let n=je.xr.isPresenting;return{head:Vi.quaternion,hands:n?Pt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,ra.mode?xC:null],height:oi.y,armSpan:Nd()*2,light:H.timeOfDay-1,color:v_,tool:ra.mode?ra:null,gun:Xd.gun}}je.setAnimationLoop((n,e)=>{let t=um?Math.max(0,(n-um)/1e3):.014;um=n;let i=Math.max(1e-4,Math.min(.035,t)),r=Qe.role?1:zm[H.debugSpeed-1],s=i*r,o=je.xr.isPresenting,a=je.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(q2(n*.001),Dd&&n>Dd&&(Tm.hidden=!0,Dd=0,Ym=""),Ds.visible=!1,Gm.hide(),ra.mode=0,Xr=H.collisions?_t.boxes:D2,Cs=null,Jl=null,Id=null,Pd=null,ut.clearGhost(),mn.mesh.visible=!1,!o&&Qe.role==="pc"){ki.visible=!1;for(let v of Pt)v.mesh.visible=!1}else CC(e,a,l,s,i);let c=!o&&Qe.role==="pc";if(!o&&!c)for(let v of ut.checkTriggers(It))Si.record("map-trigger",v),window.dispatchEvent(new CustomEvent("gorilla-model-trigger",{detail:v})),v.phase==="enter"&&Zn("D\xE9clencheur \xB7 "+v.part);let u=c||Qe.role==="player";if(Qe.role!=="player"){dr=0;for(let v of Pt)v.remoteHeld=0}u||(vC(s),AC()),cm=0;for(let v of wt){v.mesh.visible=H.objects&&!u;let{x:b,y:A,z:E}=v.mesh.position;if(ng(v.mesh.position,ut.active)&&(v.owner||Qd(v)),v.shadow.visible=!u&&H.shadows&&Od()<3&&H.objects&&v.mesh.position.y<2,v.shadow.visible){let{x:L,z:w}=v.mesh.position,M=_t.boxes.find(N=>N.heightfield&&L>=N.xMin&&L<=N.xMax&&w>=N.zMin&&w<=N.zMax),R=M?M.height(L,w):0;v.shadow.position.set(L,R+.006,w)}}if(!u&&H.objects){let v=performance.now();py(wt,_t.boxes,s,9.81*H.gravity/5,.12+H.bounce*.064,ob),cm=performance.now()-v}if(o&&!Zt&&Qe.role!=="pc")for(let v of Pt)mC(v);if(_t.probe.rotation.y+=s*.29,RC(Math.min(.3,t),o),mn.mesh.visible=o&&Zt,mn.mesh.visible&&Bt&&u_(),mn.mesh.visible&&Cs)wC(e,a,Cs.source,Cs.click);else if(o&&Pd)pC(e,a,Pd);else if(o&&Id)bC(e,a,Id);else if(o&&Jl)MC(e,a,Jl.source,Jl.click);else if(!o&&!c){Nt.getWorldPosition(Yn),Nt.getWorldDirection(On),ur.delete("KeyX")&&Mn("blasterActive",1),ur.delete("KeyG")&&(Mn("toolActive",1),H.toolActive&&Zn("Outil \xB7 "+ws[H.toolMode-1])),ur.delete("KeyT")&&Mn("toolMode",1);let v=ur.delete("KeyE");H.toolActive?nb(Yn,On,v,null):v&&!TC(Yn,On)?Sm(Yn,On,!0):!v&&!u&&Sm(Yn,On,!1),ur.delete("KeyF")&&(H.objects=!0,qm(A_[0]))}let d=ai.mesh.visible;if(ai.mesh.visible=o&&!Zt&&Pt[0].valid,ai.mesh.visible&&(ai.mesh.position.copy(Pt[0].mesh.position).y+=.12,ai.mesh.lookAt(It)),(Bt||n-Gv>1100||ai.mesh.visible&&!d)&&(Bt=!1,Gv=n,Zt&&u_(),ai.mesh.visible)){let v=ai.ctx;v.clearRect(0,0,416,84),v.fillStyle="#182632",v.fillRect(0,0,416,84),v.fillStyle="#fff0cf",v.font="bold 25px system-ui",v.fillText(As+" FPS     Q "+sn+"/10",17,32),v.font="20px system-ui",v.fillText(H.mapEdit?"\xC9dition : "+Q_[H.mapMode-1]:H.blasterActive?"Pistolet : maintenir la g\xE2chette":H.toolActive?"Tool Gun : "+ws[H.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),ai.texture.needsUpdate=!0}Xd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:St,drop:li,rightHand:Pt[1],enabled:H.blasterActive&&!c&&!Zt&&!H.mapEdit,flatFiring:ib.held||zi.has("KeyJ")}),Qe.update({inVR:o,time:n,dt:i,position:It,yaw:c?St:fr,pitch:Ps,camera:Nt,rig:xt,keys:zi,actions:ur,flat:nc,avatar:IC,bodies:H.objects?wt:Zv}),ur.clear();let f=performance.now();$o.update({settings:H,boxes:Xr,bodies:u?H.debugHitboxes?sb():Zv:wt,hands:Pt,locomotion:Wr,velocity:en,head:It,neck:vm,body:ki.position,proxies:Ad,gravity:Ql,appliedMove:kr,playerActive:!c,inVR:o,viewQuaternion:Vi.quaternion}),Nv=performance.now()-f,!c&&n-jl>350&&(b_={simulationScale:r,gravity:Ql,velocity:en.toArray(),grounded:Oi,torsoDegrees:[hr.x,hr.y].map(De.radToDeg),hands:o?Wr.hands.map(({hand:v,normal:b,offset:A})=>v.valid?{side:v.side,gripPosition:v.gripPosition.toArray(),idleAlignmentMeters:bn.copy(sr).applyQuaternion(v.mesh.quaternion).add(v.target).add(kr).distanceTo(v.gripPosition),palmCenter:bn.copy(sr).applyQuaternion(v.mesh.quaternion).add(v.mesh.position).toArray(),contactCenter:bn.copy(v.mesh.position).add(A).toArray(),normal:v.surface?b.toArray():null,surface:v.surface?.name??v.surface?.objectBody?.spec?.name??null}:null):[]}),$2(u);let h=je.xr.isPresenting?210:Math.max(210,ut.worldSize*1.5,ut.fogDistance+10);Nt.far!==h&&(Nt.far=h,Nt.updateProjectionMatrix()),_t.centerSky(sc),_t.centerShadows(sc);let p=25+(10-Od())*(o?7:4);je.shadowMap.enabled&&n-Fv>=p&&(je.shadowMap.needsUpdate=!0,Fv=n),lC(n,l);let x=performance.now(),g=o&&H.post,m=o&&H.rayTrace;I2(m,wt);let y=H.vrFov/100;if(!g||!R2.render(Lt,Nt,{bloom:H.bloom,visibleField:y})){Td.material.uniforms.visibleField.value=y,Td.visible=o&&y<1;try{je.render(Lt,Nt)}finally{Td.visible=!1}}if(Bv=performance.now()-x,Si.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:cm,debugCpuMs:Nv,mirrorCpuMs:Mm,renderSubmissionCpuMs:Bv,objects:wt.length,moving:wt.filter(v=>!v.owner&&!v.frozen&&!v.sleeping&&v.velocity.lengthSq()>1e-4).length,debugSegments:$o.stats.segments}),n-jl>350&&(tc.hidden=!(H.debugForces||$o.stats.truncated),tc.hidden||(tc.textContent="Vitesse joueur : "+en.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+Ql.toFixed(2)+" m/s\xB2 \xB7 Segments : "+$o.stats.segments+($o.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),U_[Rd]=t*1e3,Rd=(Rd+1)%720,n-jl>350){jl=n;let{calls:v,triangles:b,lines:A,points:E}=je.info.render;N_={calls:v,triangles:b,lines:A,points:E,textures:je.info.memory.textures},o&&(Vd={refreshHz:je.xr.getSession()?.frameRate??null,targetFps:Rm,supportedHz:Yl.slice(),foveation:je.xr.getFoveation()??null,visualEffects:{post:g,bloom:g&&H.bloom,rayTrace:m},eyeViewports:je.xr.getCamera().cameras.map(D=>({width:D.viewport?.z??null,height:D.viewport?.w??null}))})}});})();
