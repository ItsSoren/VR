(()=>{function Km(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function eg(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function tg(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function Kd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function ng(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function ig(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function rg(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function sg(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function og(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xg=0,Hf=1,Yg=2;var hl=1,Zg=2,Ii=3,yi=0,Rn=1,pn=2,sr=0,os=1,ai=2,Wf=3,qf=4,jg=5,Cr=100,Jg=101,Qg=102,$g=103,Kg=104,e0=200,t0=201,n0=202,i0=203,Xc=204,Yc=205,r0=206,s0=207,o0=208,a0=209,l0=210,c0=211,u0=212,h0=213,d0=214,Su=0,wu=1,Tu=2,as=3,Au=4,Eu=5,Cu=6,Ru=7,Iu=0,f0=1,p0=2,or=0,m0=1,g0=2,x0=3,Pu=4,y0=5,v0=6,_0=7;var Xf=300,ms=301,gs=302,Pi=303,Lu=304,dl=306,Cn=1e3,Er=1001,Zc=1002,mn=1003,b0=1004;var fl=1005;var an=1006,Du=1007;var In=1008;var Zn=1009,Yf=1010,Zf=1011,Ao=1012,Uu=1013,Dr=1014,Mi=1015,Li=1016,Fu=1017,Nu=1018,Eo=1020,jf=35902,Jf=35899,Qf=1021,$f=1022,Pn=1023,ao=1026,Co=1027,Bu=1028,Ou=1029,Kf=1030,zu=1031;var Vu=1033,pl=33776,ml=33777,gl=33778,xl=33779,ku=35840,Gu=35841,Hu=35842,Wu=35843,qu=36196,Xu=37492,Yu=37496,Zu=37808,ju=37809,Ju=37810,Qu=37811,$u=37812,Ku=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,lh=36492,ch=36494,uh=36495,hh=36283,dh=36284,fh=36285,ph=36286;var La=2300,jc=2301,Wc=2302,If=2400,Pf=2401,Lf=2402;var M0=3200,S0=3201;var mh=0,w0=1,ar="",ht="srgb",ls="srgb-linear",Da="linear",wt="srgb";var ss=7680;var Df=519,T0=512,A0=513,E0=514,ep=515,C0=516,R0=517,I0=518,P0=519,Jc=35044,Ln=35048;var tp="300 es",xi=2e3,Ua=2001;var er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ag=1234567,Ca=Math.PI/180,lo=180/Math.PI;function Ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function np(n,e){return(n%e+e)%e}function gb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xb(n,e,t){return n!==e?(t-n)/(e-n):0}function Ra(n,e,t){return(1-t)*n+t*e}function yb(n,e,t,i){return Ra(n,e,1-Math.exp(-t*i))}function vb(n,e=1){return e-Math.abs(np(n,e*2)-e)}function _b(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Mb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sb(n,e){return n+Math.random()*(e-n)}function wb(n){return n*(.5-Math.random())}function Tb(n){n!==void 0&&(ag=n);let e=ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ab(n){return n*Ca}function Eb(n){return n*lo}function Cb(n){return(n&n-1)===0&&n!==0}function Rb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ib(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pb(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Pe={DEG2RAD:Ca,RAD2DEG:lo,generateUUID:Ci,clamp:nt,euclideanModulo:np,mapLinear:gb,inverseLerp:xb,lerp:Ra,damp:yb,pingpong:vb,smoothstep:_b,smootherstep:bb,randInt:Mb,randFloat:Sb,randFloatSpread:wb,seededRandom:Tb,degToRad:Ab,radToDeg:Eb,isPowerOfTwo:Cb,ceilPowerOfTwo:Rb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:Pb,normalize:St,denormalize:gi},ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let A=Math.sqrt(v),E=Math.atan2(A,m*y);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let b=a*y;if(l=l*g+f*b,c=c*g+h*b,u=u*g+p*b,d=d*g+x*b,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ef.copy(this).projectOnVector(e),this.sub(ef)}reflect(e){return this.sub(ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ef=new _,lg=new qe,rt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],g=r[3],m=r[6],y=r[1],v=r[4],b=r[7],A=r[2],E=r[5],U=r[8];return s[0]=o*x+a*y+l*A,s[3]=o*g+a*v+l*E,s[6]=o*m+a*b+l*U,s[1]=c*x+u*y+d*A,s[4]=c*g+u*v+d*E,s[7]=c*m+u*b+d*U,s[2]=f*x+h*y+p*A,s[5]=f*g+h*v+p*E,s[8]=f*m+h*b+p*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tf=new rt;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function L0(){let n=co("canvas");return n.style.display="block",n}var cg={};function uo(n){n in cg||(cg[n]=!0,console.warn(n))}function D0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ug=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){let n={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=oo(r.r),r.g=oo(r.g),r.b=oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?Da:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return uo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return uo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ls]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:ug,fromXYZ:hg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),n}var mt=Lb();function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vs,Qc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=co("canvas")),Vs.width=e.width,Vs.height=e.height;let r=Vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Db=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function nf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ub=0,rf=new _,bn=class n extends er{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Er,r=Er,s=an,o=In,a=Pn,l=Zn,c=n.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Ci(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rf).x}get height(){return this.source.getSize(rf).y}get depth(){return this.source.getSize(rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Xf;bn.DEFAULT_ANISOTROPY=1;var ft=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(h+1)/2,A=(m+1)/2,E=(u+f)/4,U=(d+x)/4,D=(p+g)/4;return v>b&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=U/i):b>A?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=U/s,r=D/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends er{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new bn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends $c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fa=class extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),mc.subVectors(this.max,ga),ks.subVectors(e.a,ga),Gs.subVectors(e.b,ga),Hs.subVectors(e.c,ga),br.subVectors(Gs,ks),Mr.subVectors(Hs,Gs),ts.subVectors(ks,Hs);let t=[0,-br.z,br.y,0,-Mr.z,Mr.y,0,-ts.z,ts.y,br.z,0,-br.x,Mr.z,0,-Mr.x,ts.z,0,-ts.x,-br.y,br.x,0,-Mr.y,Mr.x,0,-ts.y,ts.x,0];return!sf(t,ks,Gs,Hs,mc)||(t=[1,0,0,0,1,0,0,0,1],!sf(t,ks,Gs,Hs,mc))?!1:(gc.crossVectors(br,Mr),t=[gc.x,gc.y,gc.z],sf(t,ks,Gs,Hs,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new _,new _,new _,new _,new _,new _,new _,new _],fi=new _,pc=new en,ks=new _,Gs=new _,Hs=new _,br=new _,Mr=new _,ts=new _,ga=new _,mc=new _,gc=new _,ns=new _;function sf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ns.fromArray(n,s);let a=r.x*Math.abs(ns.x)+r.y*Math.abs(ns.y)+r.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=i.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Fb=new en,xa=new _,of=new _,ti=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(of)),this.expandByPoint(xa.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ji=new _,af=new _,xc=new _,Sr=new _,lf=new _,yc=new _,cf=new _,tr=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){af.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(af);let s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=Sr.dot(this.direction),l=-Sr.dot(xc),c=Sr.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(af).addScaledVector(xc,f),h}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let i=ji.dot(this.direction),r=ji.dot(ji)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,r,s){lf.subVectors(t,e),yc.subVectors(i,e),cf.crossVectors(lf,yc);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);let l=a*this.direction.dot(yc.crossVectors(Sr,yc));if(l<0)return null;let c=a*this.direction.dot(lf.cross(Sr));if(c<0||l+c>o)return null;let u=-a*Sr.dot(cf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Bb)}lookAt(e,t,i){let r=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),wr.crossVectors(i,Wn),wr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),wr.crossVectors(i,Wn)),wr.normalize(),vc.crossVectors(Wn,wr),r[0]=wr.x,r[4]=vc.x,r[8]=Wn.x,r[1]=wr.y,r[5]=vc.y,r[9]=Wn.y,r[2]=wr.z,r[6]=vc.z,r[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],v=i[7],b=i[11],A=i[15],E=r[0],U=r[4],D=r[8],w=r[12],M=r[1],C=r[5],B=r[9],O=r[13],Y=r[2],N=r[6],V=r[10],J=r[14],F=r[3],K=r[7],ie=r[11],fe=r[15];return s[0]=o*E+a*M+l*Y+c*F,s[4]=o*U+a*C+l*N+c*K,s[8]=o*D+a*B+l*V+c*ie,s[12]=o*w+a*O+l*J+c*fe,s[1]=u*E+d*M+f*Y+h*F,s[5]=u*U+d*C+f*N+h*K,s[9]=u*D+d*B+f*V+h*ie,s[13]=u*w+d*O+f*J+h*fe,s[2]=p*E+x*M+g*Y+m*F,s[6]=p*U+x*C+g*N+m*K,s[10]=p*D+x*B+g*V+m*ie,s[14]=p*w+x*O+g*J+m*fe,s[3]=y*E+v*M+b*Y+A*F,s[7]=y*U+v*C+b*N+A*K,s[11]=y*D+v*B+b*V+A*ie,s[15]=y*w+v*O+b*J+A*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+g*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+m*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,v=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,b=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,A=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,E=t*y+i*v+r*b+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/E;return e[0]=y*U,e[1]=(x*f*s-d*g*s-x*r*h+i*g*h+d*r*m-i*f*m)*U,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*m+i*l*m)*U,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*U,e[4]=v*U,e[5]=(u*g*s-p*f*s+p*r*h-t*g*h-u*r*m+t*f*m)*U,e[6]=(p*l*s-o*g*s-p*r*c+t*g*c+o*r*m-t*l*m)*U,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*U,e[8]=b*U,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*m-t*d*m)*U,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*m+t*a*m)*U,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*U,e[12]=A*U,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*g+t*d*g)*U,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*g-t*a*g)*U,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,g=o*d,m=a*d,y=l*c,v=l*u,b=l*d,A=i.x,E=i.y,U=i.z;return r[0]=(1-(x+m))*A,r[1]=(h+b)*A,r[2]=(p-v)*A,r[3]=0,r[4]=(h-b)*E,r[5]=(1-(f+m))*E,r[6]=(g+y)*E,r[7]=0,r[8]=(p+v)*U,r[9]=(g-y)*U,r[10]=(1-(f+x))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ws.set(r[0],r[1],r[2]).length(),o=Ws.set(r[4],r[5],r[6]).length(),a=Ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);let c=1/s,u=1/o,d=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===xi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ua)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===xi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ua)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new _,pi=new ct,Nb=new _(0,0,0),Bb=new _(1,1,1),wr=new _,vc=new _,Wn=new _,dg=new ct,fg=new qe,tn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ob=0,pg=new _,qs=new qe,Ji=new ct,_c=new _,ya=new _,zb=new _,Vb=new qe,mg=new _(1,0,0),gg=new _(0,1,0),xg=new _(0,0,1),yg={type:"added"},kb={type:"removed"},Xs={type:"childadded",child:null},uf={type:"childremoved",child:null},qt=class n extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new _,t=new tn,i=new qe,r=new _(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new rt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ya,_c,this.up):Ji.lookAt(_c,ya,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Ji),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kb),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,zb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};qt.DEFAULT_UP=new _(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new _,Qi=new _,hf=new _,$i=new _,Ys=new _,Zs=new _,vg=new _,df=new _,ff=new _,pf=new _,mf=new ft,gf=new ft,xf=new ft,Bn=class n{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mi.subVectors(e,t),r.cross(mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mi.subVectors(r,t),Qi.subVectors(i,t),hf.subVectors(e,t);let o=mi.dot(mi),a=mi.dot(Qi),l=mi.dot(hf),c=Qi.dot(Qi),u=Qi.dot(hf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return mf.setScalar(0),gf.setScalar(0),xf.setScalar(0),mf.fromBufferAttribute(e,t),gf.fromBufferAttribute(e,i),xf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mf,s.x),o.addScaledVector(gf,s.y),o.addScaledVector(xf,s.z),o}static isFrontFacing(e,t,i,r){return mi.subVectors(i,t),Qi.subVectors(e,t),mi.cross(Qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ys.subVectors(r,i),Zs.subVectors(s,i),df.subVectors(e,i);let l=Ys.dot(df),c=Zs.dot(df);if(l<=0&&c<=0)return t.copy(i);ff.subVectors(e,r);let u=Ys.dot(ff),d=Zs.dot(ff);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ys,o);pf.subVectors(e,s);let h=Ys.dot(pf),p=Zs.dot(pf);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Zs,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return vg.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(vg,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},bc={h:0,s:0,l:0};function yf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=np(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yf(o,s,e+1/3),this.g=yf(o,s,e),this.b=yf(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let i=U0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return mt.workingToColorSpace(_n.copy(this),e),Math.round(nt(_n.r*255,0,255))*65536+Math.round(nt(_n.g*255,0,255))*256+Math.round(nt(_n.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(_n.copy(this),t);let i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ht){mt.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,r=_n.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(bc);let i=Ra(Tr.h,bc.h,t),r=Ra(Tr.s,bc.s,t),s=Ra(Tr.l,bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new De;De.NAMES=U0;var Gb=0,ni=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=os,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xc&&(i.blendSrc=this.blendSrc),this.blendDst!==Yc&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var on=new _,Mc=new ge,Hb=0,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var cs=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Na=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wb=0,ei=new ct,vf=new qt,js=new _,qn=new en,va=new en,dn=new _,et=class n extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?Na:cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(qn.min,va.min),qn.expandByPoint(dn),dn.addVectors(qn.max,va.max),qn.expandByPoint(dn)):(qn.expandByPoint(va.min),qn.expandByPoint(va.max))}qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dn.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),dn.add(js)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new _,l[D]=new _;let c=new _,u=new _,d=new _,f=new ge,h=new ge,p=new ge,x=new _,g=new _;function m(D,w,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,D),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let C=1/(h.x*p.y-p.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(C),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(C),a[D].add(x),a[w].add(x),a[M].add(x),l[D].add(g),l[w].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,w=y.length;D<w;++D){let M=y[D],C=M.start,B=M.count;for(let O=C,Y=C+B;O<Y;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new _,b=new _,A=new _,E=new _;function U(D){A.fromBufferAttribute(r,D),E.copy(A);let w=a[D];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(E,w);let C=b.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,C)}for(let D=0,w=y.length;D<w;++D){let M=y[D],C=M.start,B=M.count;for(let O=C,Y=C+B;O<Y;O+=3)U(e.getX(O+0)),U(e.getX(O+1)),U(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new _,s=new _,o=new _,a=new _,l=new _,c=new _,u=new _,d=new _;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new gt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_g=new ct,is=new tr,Sc=new ti,bg=new _,wc=new _,Tc=new _,Ac=new _,_f=new _,Ec=new _,Mg=new _,Cc=new _,He=class extends qt{constructor(e=new et,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(_f.fromBufferAttribute(d,e),o?Ec.addScaledVector(_f,u):Ec.addScaledVector(_f.sub(t),u))}t.add(Ec)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(Sc.containsPoint(is.origin)===!1&&(is.intersectSphere(Sc,bg)===null||is.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(_g.copy(s).invert(),is.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),v=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let b=y,A=v;b<A;b+=3){let E=a.getX(b),U=a.getX(b+1),D=a.getX(b+2);r=Rc(this,m,e,i,c,u,d,E,U,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);r=Rc(this,o,e,i,c,u,d,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=y,A=v;b<A;b+=3){let E=b,U=b+1,D=b+2;r=Rc(this,m,e,i,c,u,d,E,U,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=g,v=g+1,b=g+2;r=Rc(this,o,e,i,c,u,d,y,v,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function qb(n,e,t,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;Cc.copy(a),Cc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Cc);return c<t.near||c>t.far?null:{distance:c,point:Cc.clone(),object:n}}function Rc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,wc),n.getVertexPosition(l,Tc),n.getVertexPosition(c,Ac);let u=qb(n,e,t,i,wc,Tc,Ac,Mg);if(u){let d=new _;Bn.getBarycoord(Mg,wc,Tc,Ac,d),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,d,new ge)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,d,new ge)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,d,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};Bn.getNormal(wc,Tc,Ac,f.normal),u.face=f,u.barycoord=d}return u}var it=class n extends et{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function p(x,g,m,y,v,b,A,E,U,D,w){let M=b/U,C=A/D,B=b/2,O=A/2,Y=E/2,N=U+1,V=D+1,J=0,F=0,K=new _;for(let ie=0;ie<V;ie++){let fe=ie*C-O;for(let ye=0;ye<N;ye++){let we=ye*M-B;K[x]=we*y,K[g]=fe*v,K[m]=Y,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[m]=E>0?1:-1,u.push(K.x,K.y,K.z),d.push(ye/U),d.push(1-ie/D),J+=1}}for(let ie=0;ie<D;ie++)for(let fe=0;fe<U;fe++){let ye=f+fe+N*ie,we=f+fe+N*(ie+1),Ce=f+(fe+1)+N*(ie+1),Re=f+(fe+1)+N*ie;l.push(ye,we,Re),l.push(we,Ce,Re),F+=6}a.addGroup(h,F,w),h+=F,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=xs(n[t]);for(let r in i)e[r]=i[r]}return e}function Xb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var gh={clone:xs,merge:Mn},Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ba=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ar=new _,Sg=new ge,wg=new ge,Kt=class extends Ba{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,wg),t.subVectors(wg,Sg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,Qs=1,eu=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Js,Qs,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Js,Qs,e,t);s.layers=this.layers,this.add(s);let o=new Kt(Js,Qs,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Js,Qs,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Js,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Oa=class extends bn{constructor(e=[],t=ms,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tu=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:sr});s.uniforms.tEquirect.value=t;let o=new He(r,s),a=t.minFilter;return t.minFilter===In&&(t.minFilter=an),new eu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Ct=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jb={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var za=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},us=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new _,mo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},go=class extends ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,_a=new _,Ks=new _,eo=new _,to=new ge,ba=new ge,F0=new ct,Ic=new _,Ma=new _,Pc=new _,Tg=new ge,bf=new ge,Ag=new ge,ka=class extends qt{constructor(e=new go){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Va(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new mo(i,3,0,!1)),$s.setAttribute("uv",new mo(i,2,3,!1))}this.geometry=$s,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),F0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-eo.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Lc(Ic.set(-.5,-.5,0),eo,o,Ks,r,s),Lc(Ma.set(.5,-.5,0),eo,o,Ks,r,s),Lc(Pc.set(.5,.5,0),eo,o,Ks,r,s),Tg.set(0,0),bf.set(1,0),Ag.set(1,1);let a=e.ray.intersectTriangle(Ic,Ma,Pc,!1,_a);if(a===null&&(Lc(Ma.set(-.5,.5,0),eo,o,Ks,r,s),bf.set(0,1),a=e.ray.intersectTriangle(Ic,Pc,Ma,!1,_a),a===null))return;let l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:Bn.getInterpolation(_a,Ic,Ma,Pc,Tg,bf,Ag,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Lc(n,e,t,i,r,s){to.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ba.x=s*to.x-r*to.y,ba.y=r*to.x+s*to.y):ba.copy(to),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(F0)}var ii=class extends bn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=mn,u=mn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},no=new ct,Eg=new ct,Dc=[],Cg=new en,Jb=new ct,Sa=new He,wa=new ti,Ga=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),Cg.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(Cg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),wa.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),e.ray.intersectsSphere(wa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,no),Eg.multiplyMatrices(i,no),Sa.matrixWorld=Eg,Sa.raycast(e,Dc);for(let o=0,a=Dc.length;o<a;o++){let l=Dc[o];l.instanceId=s,l.object=this,t.push(l)}Dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(r*this.count),r,this.count,Bu,Mi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mf=new _,Qb=new _,$b=new rt,Nn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Mf.subVectors(i,t).cross(Qb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$b.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new ti,Kb=new ge(.5,.5),Uc=new _,yo=class{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],g=s[10],m=s[11],y=s[12],v=s[13],b=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,m-p,A-y).normalize(),r[1].setComponents(c+o,h+u,m+p,A+y).normalize(),r[2].setComponents(c+a,h+d,m+x,A+v).normalize(),r[3].setComponents(c-a,h-d,m-x,A-v).normalize(),i)r[4].setComponents(l,f,g,b).normalize(),r[5].setComponents(c-l,h-f,m-g,A-b).normalize();else if(r[4].setComponents(c-l,h-f,m-g,A-b).normalize(),t===xi)r[5].setComponents(c+l,h+f,m+g,A+b).normalize();else if(t===Ua)r[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=Kb.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Uc.x=r.normal.x>0?e.max.x:e.min.x,Uc.y=r.normal.y>0?e.max.y:e.min.y,Uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nu=new _,iu=new _,Rg=new ct,Ta=new tr,Fc=new ti,Sf=new _,Ig=new _,Ha=class extends qt{constructor(e=new et,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)nu.fromBufferAttribute(t,r-1),iu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;Rg.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(Rg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),y=u.getX(x+1),v=Nc(this,e,Ta,l,m,y,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Nc(this,e,Ta,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Nc(this,e,Ta,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Nc(this,e,Ta,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(nu.fromBufferAttribute(a,r),iu.fromBufferAttribute(a,s),t.distanceSqToSegment(nu,iu,Sf,Ig)>i)return;Sf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Sf);if(!(c<e.near||c>e.far))return{distance:c,point:Ig.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Pg=new _,Lg=new _,hs=class extends Ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Pg.fromBufferAttribute(t,r),Lg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pg.distanceTo(Lg);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Wa=class extends Ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vo=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dg=new ct,Uf=new tr,Bc=new ti,Oc=new _,qa=class extends qt{constructor(e=new et,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=s,e.ray.intersectsSphere(Bc)===!1)return;Dg.copy(r).invert(),Uf.copy(e.ray).applyMatrix4(Dg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Oc.fromBufferAttribute(d,g),Ug(Oc,g,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Oc.fromBufferAttribute(d,p),Ug(Oc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ug(n,e,t,i,r,s,o){let a=Uf.distanceSqToPoint(n);if(a<t){let l=new _;Uf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ri=class extends bn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xa=class extends bn{constructor(e,t,i=Dr,r,s,o,a=mn,l=mn,c,u=ao,d=1){if(u!==ao&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ya=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rr=class n extends et{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,g=new _,m=new _;for(let y=0;y<=p;y++){let v=0,b=0,A=0,E=0;if(y<=i){let w=y/i,M=w*Math.PI/2;b=-u-e*Math.cos(M),A=e*Math.sin(M),E=-e*Math.cos(M),v=w*d}else if(y<=i+s){let w=(y-i)/s;b=-u+w*t,A=e,E=0,v=d+w*f}else{let w=(y-i-s)/i,M=w*Math.PI/2;b=u+e*Math.sin(M),A=e*Math.cos(M),E=e*Math.sin(M),v=d+f+w*d}let U=Math.max(0,Math.min(1,v/h)),D=0;y===0?D=.5/r:y===p&&(D=-.5/r);for(let w=0;w<=r;w++){let M=w/r,C=M*Math.PI*2,B=Math.sin(C),O=Math.cos(C);m.x=-A*O,m.y=b,m.z=A*B,a.push(m.x,m.y,m.z),g.set(-A*O,E,A*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+D,U)}if(y>0){let w=(y-1)*x;for(let M=0;M<r;M++){let C=w+M,B=w+M+1,O=y*x+M,Y=y*x+M+1;o.push(C,B,O),o.push(B,Y,O)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fn=class n extends et{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,u=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nn=class n extends et{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function y(){let b=new _,A=new _,E=0,U=(t-e)/i;for(let D=0;D<=s;D++){let w=[],M=D/s,C=M*(t-e)+e;for(let B=0;B<=r;B++){let O=B/r,Y=O*l+a,N=Math.sin(Y),V=Math.cos(Y);A.x=C*N,A.y=-M*i+g,A.z=C*V,d.push(A.x,A.y,A.z),b.set(N,U,V).normalize(),f.push(b.x,b.y,b.z),h.push(O,1-M),w.push(p++)}x.push(w)}for(let D=0;D<r;D++)for(let w=0;w<s;w++){let M=x[w][D],C=x[w+1][D],B=x[w+1][D+1],O=x[w][D+1];(e>0||w!==0)&&(u.push(M,C,O),E+=3),(t>0||w!==s-1)&&(u.push(C,B,O),E+=3)}c.addGroup(m,E,0),m+=E}function v(b){let A=p,E=new ge,U=new _,D=0,w=b===!0?e:t,M=b===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,g*M,0),f.push(0,M,0),h.push(.5,.5),p++;let C=p;for(let B=0;B<=r;B++){let Y=B/r*l+a,N=Math.cos(Y),V=Math.sin(Y);U.x=w*V,U.y=g*M,U.z=w*N,d.push(U.x,U.y,U.z),f.push(0,M,0),E.x=N*.5+.5,E.y=V*.5*M+.5,h.push(E.x,E.y),p++}for(let B=0;B<r;B++){let O=A+B,Y=C+B;b===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),D+=3}c.addGroup(m,D,b===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nr=class n extends nn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_o=class n extends et{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new _,b=new _,A=new _;for(let E=0;E<t.length;E+=3)h(t[E+0],v),h(t[E+1],b),h(t[E+2],A),l(v,b,A,y)}function l(y,v,b,A){let E=A+1,U=[];for(let D=0;D<=E;D++){U[D]=[];let w=y.clone().lerp(b,D/E),M=v.clone().lerp(b,D/E),C=E-D;for(let B=0;B<=C;B++)B===0&&D===E?U[D][B]=w:U[D][B]=w.clone().lerp(M,B/C)}for(let D=0;D<E;D++)for(let w=0;w<2*(E-D)-1;w++){let M=Math.floor(w/2);w%2===0?(f(U[D][M+1]),f(U[D+1][M]),f(U[D][M])):(f(U[D][M+1]),f(U[D+1][M+1]),f(U[D+1][M]))}}function c(y){let v=new _;for(let b=0;b<s.length;b+=3)v.x=s[b+0],v.y=s[b+1],v.z=s[b+2],v.normalize().multiplyScalar(y),s[b+0]=v.x,s[b+1]=v.y,s[b+2]=v.z}function u(){let y=new _;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let b=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;o.push(b,1-A)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],A=o[y+4],E=Math.max(v,b,A),U=Math.min(v,b,A);E>.9&&U<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function h(y,v){let b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function p(){let y=new _,v=new _,b=new _,A=new _,E=new ge,U=new ge,D=new ge;for(let w=0,M=0;w<s.length;w+=9,M+=6){y.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),b.set(s[w+6],s[w+7],s[w+8]),E.set(o[M+0],o[M+1]),U.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),A.copy(y).add(v).add(b).divideScalar(3);let C=g(A);x(E,M+0,y,C),x(U,M+2,v,C),x(D,M+4,b,C)}}function x(y,v,b,A){A<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new _,r=[],s=[],o=[],a=new _,l=new ct;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(nt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Xn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ru=class extends bo{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function sp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var zc=new _,wf=new sp,Tf=new sp,Af=new sp,su=class extends Xn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(zc.subVectors(r[0],r[1]).add(r[0]),c=zc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(zc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=zc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),wf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),Tf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),Af.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(wf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Tf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Af.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(wf.calc(l),Tf.calc(l),Af.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function eM(n,e){let t=1-n;return t*t*e}function tM(n,e){return 2*(1-n)*n*e}function nM(n,e){return n*n*e}function Ia(n,e,t,i){return eM(n,e)+tM(n,t)+nM(n,i)}function iM(n,e){let t=1-n;return t*t*t*e}function rM(n,e){let t=1-n;return 3*t*t*n*e}function sM(n,e){return 3*(1-n)*n*n*e}function oM(n,e){return n*n*n*e}function Pa(n,e,t,i,r){return iM(n,e)+rM(n,t)+sM(n,i)+oM(n,r)}var Za=class extends Xn{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Pa(e,r.x,s.x,o.x,a.x),Pa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ou=class extends Xn{constructor(e=new _,t=new _,i=new _,r=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Pa(e,r.x,s.x,o.x,a.x),Pa(e,r.y,s.y,o.y,a.y),Pa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Xn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends Xn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Xn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ia(e,r.x,s.x,o.x),Ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lu=class extends Xn{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ia(e,r.x,s.x,o.x),Ia(e,r.y,s.y,o.y),Ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Fg(a,l.x,c.x,u.x,d.x),Fg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Ff=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:su,CubicBezierCurve:Za,CubicBezierCurve3:ou,EllipseCurve:bo,LineCurve:ja,LineCurve3:au,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:lu,SplineCurve:Qa}),cu=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ff[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ff[r.type]().fromJSON(r))}return this}},$a=class extends cu{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ja(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Ja(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Za(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new bo(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vi=class extends $a{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new $a().fromJSON(r))}return this}};function aM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=N0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=dM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ka(s,o,t,a,l,c,0),o}function N0(n,e,t,i,r){let s;if(r===SM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ng(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ng(o/i|0,n[o],n[o+1],s);return s&&Mo(s,s.next)&&(tl(s),s=s.next),s}function ds(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Mo(t,t.next)||Wt(t.prev,t,t.next)===0)){if(tl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ka(n,e,t,i,r,s,o){if(!n)return;!o&&s&&xM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?cM(n,i,r,s):lM(n)){e.push(l.i,n.i,c.i),tl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=uM(ds(n),e),Ka(n,e,t,i,r,s,2)):o===2&&hM(n,e,t,i,r,s):Ka(ds(n),e,t,i,r,s,1);break}}}function lM(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&Ea(r,a,s,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Wt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Nf(h,p,e,t,i),y=Nf(x,g,e,t,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=m&&b&&b.z<=y;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ea(a,u,l,d,c,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&Ea(a,u,l,d,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=m;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ea(a,u,l,d,c,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=h&&b.x<=x&&b.y>=p&&b.y<=g&&b!==r&&b!==o&&Ea(a,u,l,d,c,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function uM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Mo(i,r)&&O0(i,t,t.next,r)&&el(i,r)&&el(r,i)&&(e.push(i.i,t.i,r.i),tl(t),tl(t.next),t=n=r),t=t.next}while(t!==n);return ds(t)}function hM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_M(o,a)){let l=z0(o,a);o=ds(o,o.next),l=ds(l,l.next),Ka(o,e,t,i,r,s,0),Ka(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function dM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=N0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(vM(c))}r.sort(fM);for(let s=0;s<r.length;s++)t=pM(r[s],t);return t}function fM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function pM(n,e){let t=mM(n,e);if(!t)return e;let i=z0(t,n);return ds(i,i.next),ds(t,t.next)}function mM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(Mo(n,t))return t;do{if(Mo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&B0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);el(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&gM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function gM(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function xM(n,e,t,i){let r=n;do r.z===0&&(r.z=Nf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,yM(r)}function yM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Nf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function vM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function B0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ea(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&B0(n,e,t,i,r,s,o,a)}function _M(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bM(n,e)&&(el(n,e)&&el(e,n)&&MM(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||Mo(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Mo(n,e){return n.x===e.x&&n.y===e.y}function O0(n,e,t,i){let r=kc(Wt(n,e,t)),s=kc(Wt(n,e,i)),o=kc(Wt(t,i,n)),a=kc(Wt(t,i,e));return!!(r!==s&&o!==a||r===0&&Vc(n,t,e)||s===0&&Vc(n,i,e)||o===0&&Vc(t,n,i)||a===0&&Vc(t,e,i))}function Vc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function kc(n){return n>0?1:n<0?-1:0}function bM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&O0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function el(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function MM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function z0(n,e){let t=Bf(n.i,n.x,n.y),i=Bf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ng(n,e,t,i){let r=Bf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function tl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function SM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Of=class{static triangulate(e,t,i=2){return aM(e,t,i)}},Ei=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Bg(e),Og(i,e);let o=e.length;t.forEach(Bg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Og(i,t[l]);let a=Of.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Bg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Og(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ir=class n extends et{constructor(e=new vi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:wM,v,b=!1,A,E,U,D;m&&(v=m.getSpacedPoints(u),b=!0,f=!1,A=m.computeFrenetFrames(u,!1),E=new _,U=new _,D=new _),f||(g=0,h=0,p=0,x=0);let w=a.extractPoints(c),M=w.shape,C=w.holes;if(!Ei.isClockWise(M)){M=M.reverse();for(let k=0,z=C.length;k<z;k++){let H=C[k];Ei.isClockWise(H)&&(C[k]=H.reverse())}}function O(k){let H=10000000000000001e-36,W=k[0];for(let I=1;I<=k.length;I++){let j=I%k.length,Z=k[j],he=Z.x-W.x,pe=Z.y-W.y,R=he*he+pe*pe,T=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(W.x),Math.abs(W.y)),X=H*T*T;if(R<=X){k.splice(j,1),I--;continue}W=Z}}O(M),C.forEach(O);let Y=C.length,N=M;for(let k=0;k<Y;k++){let z=C[k];M=M.concat(z)}function V(k,z,H){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(z,H)}let J=M.length;function F(k,z,H){let W,I,j,Z=k.x-z.x,he=k.y-z.y,pe=H.x-k.x,R=H.y-k.y,T=Z*Z+he*he,X=Z*R-he*pe;if(Math.abs(X)>Number.EPSILON){let ee=Math.sqrt(T),ue=Math.sqrt(pe*pe+R*R),re=z.x-he/ee,Me=z.y+Z/ee,be=H.x-R/ue,Ae=H.y+pe/ue,Ne=((be-re)*R-(Ae-Me)*pe)/(Z*R-he*pe);W=re+Z*Ne-k.x,I=Me+he*Ne-k.y;let de=W*W+I*I;if(de<=2)return new ge(W,I);j=Math.sqrt(de/2)}else{let ee=!1;Z>Number.EPSILON?pe>Number.EPSILON&&(ee=!0):Z<-Number.EPSILON?pe<-Number.EPSILON&&(ee=!0):Math.sign(he)===Math.sign(R)&&(ee=!0),ee?(W=-he,I=Z,j=Math.sqrt(T)):(W=Z,I=he,j=Math.sqrt(T/2))}return new ge(W/j,I/j)}let K=[];for(let k=0,z=N.length,H=z-1,W=k+1;k<z;k++,H++,W++)H===z&&(H=0),W===z&&(W=0),K[k]=F(N[k],N[H],N[W]);let ie=[],fe,ye=K.concat();for(let k=0,z=Y;k<z;k++){let H=C[k];fe=[];for(let W=0,I=H.length,j=I-1,Z=W+1;W<I;W++,j++,Z++)j===I&&(j=0),Z===I&&(Z=0),fe[W]=F(H[W],H[j],H[Z]);ie.push(fe),ye=ye.concat(fe)}let we;if(g===0)we=Ei.triangulateShape(N,C);else{let k=[],z=[];for(let H=0;H<g;H++){let W=H/g,I=h*Math.cos(W*Math.PI/2),j=p*Math.sin(W*Math.PI/2)+x;for(let Z=0,he=N.length;Z<he;Z++){let pe=V(N[Z],K[Z],j);Ie(pe.x,pe.y,-I),W===0&&k.push(pe)}for(let Z=0,he=Y;Z<he;Z++){let pe=C[Z];fe=ie[Z];let R=[];for(let T=0,X=pe.length;T<X;T++){let ee=V(pe[T],fe[T],j);Ie(ee.x,ee.y,-I),W===0&&R.push(ee)}W===0&&z.push(R)}}we=Ei.triangulateShape(k,z)}let Ce=we.length,Re=p+x;for(let k=0;k<J;k++){let z=f?V(M[k],ye[k],Re):M[k];b?(U.copy(A.normals[0]).multiplyScalar(z.x),E.copy(A.binormals[0]).multiplyScalar(z.y),D.copy(v[0]).add(U).add(E),Ie(D.x,D.y,D.z)):Ie(z.x,z.y,0)}for(let k=1;k<=u;k++)for(let z=0;z<J;z++){let H=f?V(M[z],ye[z],Re):M[z];b?(U.copy(A.normals[k]).multiplyScalar(H.x),E.copy(A.binormals[k]).multiplyScalar(H.y),D.copy(v[k]).add(U).add(E),Ie(D.x,D.y,D.z)):Ie(H.x,H.y,d/u*k)}for(let k=g-1;k>=0;k--){let z=k/g,H=h*Math.cos(z*Math.PI/2),W=p*Math.sin(z*Math.PI/2)+x;for(let I=0,j=N.length;I<j;I++){let Z=V(N[I],K[I],W);Ie(Z.x,Z.y,d+H)}for(let I=0,j=C.length;I<j;I++){let Z=C[I];fe=ie[I];for(let he=0,pe=Z.length;he<pe;he++){let R=V(Z[he],fe[he],W);b?Ie(R.x,R.y+v[u-1].y,v[u-1].x+H):Ie(R.x,R.y,d+H)}}}se(),oe();function se(){let k=r.length/3;if(f){let z=0,H=J*z;for(let W=0;W<Ce;W++){let I=we[W];ve(I[2]+H,I[1]+H,I[0]+H)}z=u+g*2,H=J*z;for(let W=0;W<Ce;W++){let I=we[W];ve(I[0]+H,I[1]+H,I[2]+H)}}else{for(let z=0;z<Ce;z++){let H=we[z];ve(H[2],H[1],H[0])}for(let z=0;z<Ce;z++){let H=we[z];ve(H[0]+J*u,H[1]+J*u,H[2]+J*u)}}i.addGroup(k,r.length/3-k,0)}function oe(){let k=r.length/3,z=0;xe(N,z),z+=N.length;for(let H=0,W=C.length;H<W;H++){let I=C[H];xe(I,z),z+=I.length}i.addGroup(k,r.length/3-k,1)}function xe(k,z){let H=k.length;for(;--H>=0;){let W=H,I=H-1;I<0&&(I=k.length-1);for(let j=0,Z=u+g*2;j<Z;j++){let he=J*j,pe=J*(j+1),R=z+W+he,T=z+I+he,X=z+I+pe,ee=z+W+pe;Xe(R,T,X,ee)}}}function Ie(k,z,H){l.push(k),l.push(z),l.push(H)}function ve(k,z,H){Ge(k),Ge(z),Ge(H);let W=r.length/3,I=y.generateTopUV(i,r,W-3,W-2,W-1);S(I[0]),S(I[1]),S(I[2])}function Xe(k,z,H,W){Ge(k),Ge(z),Ge(W),Ge(z),Ge(H),Ge(W);let I=r.length/3,j=y.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);S(j[0]),S(j[1]),S(j[3]),S(j[1]),S(j[2]),S(j[3])}function Ge(k){r.push(l[k*3+0]),r.push(l[k*3+1]),r.push(l[k*3+2])}function S(k){s.push(k.x),s.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return TM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ff[r.type]().fromJSON(r)),new n(i,e.options)}},wM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(f,1-p),new ge(x,1-m)]:[new ge(a,1-l),new ge(u,1-d),new ge(h,1-p),new ge(g,1-m)]}};function TM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vt=class n extends _o{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},nl=class n extends et{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=nt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new _,f=new ge,h=new _,p=new _,x=new _,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let v=i+y*u*r,b=Math.sin(v),A=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*b,d.y=e[E].y,d.z=e[E].x*A,o.push(d.x,d.y,d.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let U=l[3*E+0]*b,D=l[3*E+1],w=l[3*E+0]*A;c.push(U,D,w)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let b=v+y*e.length,A=b,E=b+e.length,U=b+e.length+1,D=b+1;s.push(A,E,D),s.push(U,D,E)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},_i=class n extends _o{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ln=class n extends et{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*f-o;for(let v=0;v<c;v++){let b=v*d-s;p.push(b,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,b=y+c*(m+1),A=y+1+c*(m+1),E=y+1+c*m;h.push(v,b,E),h.push(b,A,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},So=class n extends et{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new _,p=new ge;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,v=y,b=y+i+1,A=y+i+2,E=y+1;a.push(v,b,E),a.push(b,A,E)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},il=class n extends et{constructor(e=new vi([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;Ei.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Ei.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=Ei.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];h=h.concat(y)}for(let g=0,m=h.length;g<m;g++){let y=h[g];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],v=y[0]+d,b=y[1]+d,A=y[2]+d;i.push(v,b,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return AM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function AM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var si=class n extends et{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new _,f=new _,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],v=m/i,b=0;m===0&&o===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let E=A/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(E+b,1-v),y.push(c++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let v=u[m][y+1],b=u[m][y],A=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&h.push(v,b,E),(m!==i-1||l<Math.PI)&&h.push(b,A,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fs=class n extends _o{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},bi=class n extends et{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new _,d=new _,f=new _;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,g=(r+1)*(h-1)+p-1,m=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ir=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new _,s=new _;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,y),zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),zg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var vt=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rl=class extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xn=class extends ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uu=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hu=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function EM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ps=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},du=class extends ps{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pf:s=e,a=2*t-i;break;case Lf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:o=e,l=2*i-t;break;case Lf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-h)*g+(1.5+h)*x+.5*p,b=h*g-h*x;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+y*o[c+A]+v*o[l+A]+b*o[d+A];return s}},fu=class extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},pu=class extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gc(t,this.TimeBufferType),this.values=Gc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gc(e.times,Array),values:Gc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new du(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case jc:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&EM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=jc;var Pr=class extends Yn{constructor(e,t,i){super(e,t,i)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=La;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};mu.prototype.ValueTypeName="color";var gu=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};gu.prototype.ValueTypeName="number";var xu=class extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},sl=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new xu(this.times,this.values,this.getValueSize(),e)}};sl.prototype.ValueTypeName="quaternion";sl.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Yn{constructor(e,t,i){super(e,t,i)}};Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=La;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};yu.prototype.ValueTypeName="vector";var qc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},vu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},V0=new vu,wo=class{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=new WeakMap,_u=class extends wo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=io.get(o);d===void 0&&(d=[],io.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=co("img");function l(){u(),t&&t(this);let d=io.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}io.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),qc.remove(`image:${e}`);let f=io.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}io.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var oi=class extends wo{constructor(e){super(e)}load(e,t,i,r){let s=new bn,o=new _u(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},To=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ol=class extends To{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ef=new ct,Vg=new _,kg=new _,bu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kg),t.updateMatrixWorld(),Ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gg=new ct,Aa=new _,Cf=new _,zf=class extends bu{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Aa),Cf.copy(i.position),Cf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cf),i.updateMatrixWorld(),r.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Gg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gg,i.coordinateSystem,i.reversedDepth)}},al=class extends To{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ll=class extends Ba{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vf=class extends bu{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cl=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Mu=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var op="\\[\\]\\.:\\/",CM=new RegExp("["+op+"]","g"),ap="[^"+op+"]",RM="[^"+op.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",ap),PM=/(WCOD+)?/.source.replace("WCOD",RM),LM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),DM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),UM=new RegExp("^"+IM+PM+LM+DM+"$"),FM=["material","materials","bones","map"],kf=class{constructor(e,t,i){let r=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CM,"")}static parseTrackName(e){let t=UM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);FM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=kf;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FC=new Float32Array(1);var Hg=new ct,rr=class{constructor(e,t,i=0,r=1/0){this.ray=new tr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hg),this}intersectObject(e,t=!0,i=[]){return Gf(e,this,i,t),i.sort(Wg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gf(e[r],this,i,t);return i.sort(Wg),i}};function Wg(n,e){return n.distance-e.distance}function Gf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Gf(s[o],e,t,!0)}}var qg=new _,Hc=new _,ro=new _,so=new _,Rf=new _,NM=new _,BM=new _,ul=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qg.subVectors(e,this.start),Hc.subVectors(this.end,this.start);let i=Hc.dot(Hc),s=Hc.dot(qg)/i;return t&&(s=nt(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=NM,i=BM){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;ro.subVectors(c,a),so.subVectors(u,l),Rf.subVectors(a,l);let d=ro.dot(ro),f=so.dot(so),h=so.dot(Rf);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=nt(o,0,1);else{let p=ro.dot(Rf);if(f<=r)o=0,s=nt(-p/d,0,1);else{let x=ro.dot(so),g=d*f-x*x;g!==0?s=nt((x*h-p*f)/g,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=nt(-p/d,0,1)):o>1&&(o=1,s=nt((x-p)/d,0,1))}}return t.copy(a).add(ro.multiplyScalar(s)),i.copy(l).add(so.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function lp(n,e,t,i){let r=OM(i);switch(t){case Qf:return n*e;case Bu:return n*e/r.components*r.byteLength;case Ou:return n*e/r.components*r.byteLength;case Kf:return n*e*2/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case $f:return n*e*3/r.components*r.byteLength;case Pn:return n*e*4/r.components*r.byteLength;case Vu:return n*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gu:case Wu:return Math.max(n,16)*Math.max(e,8)/4;case ku:case Hu:return Math.max(n,8)*Math.max(e,8)/2;case qu:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ju:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lh:case ch:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fh:case ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OM(n){switch(n){case Zn:case Yf:return{byteLength:1,components:1};case Ao:case Zf:case Li:return{byteLength:2,components:1};case Fu:case Nu:return{byteLength:2,components:4};case Dr:case Uu:case Mi:return{byteLength:4,components:1};case jf:case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
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
}`,lt={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:XM,alphamap_pars_fragment:YM,alphatest_fragment:ZM,alphatest_pars_fragment:jM,aomap_fragment:JM,aomap_pars_fragment:QM,batching_pars_vertex:$M,batching_vertex:KM,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:h1,color_vertex:d1,common:f1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:v1,colorspace_fragment:_1,colorspace_pars_fragment:b1,envmap_fragment:M1,envmap_common_pars_fragment:S1,envmap_pars_fragment:w1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:N1,envmap_vertex:A1,fog_vertex:E1,fog_pars_vertex:C1,fog_fragment:R1,fog_pars_fragment:I1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:L1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:U1,lights_pars_begin:F1,lights_toon_fragment:B1,lights_toon_pars_fragment:O1,lights_phong_fragment:z1,lights_phong_pars_fragment:V1,lights_physical_fragment:k1,lights_physical_pars_fragment:G1,lights_fragment_begin:H1,lights_fragment_maps:W1,lights_fragment_end:q1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:j1,map_fragment:J1,map_pars_fragment:Q1,map_particle_fragment:$1,map_particle_pars_fragment:K1,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:hS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:xS,packing:yS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:bS,dithering_pars_fragment:MS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:AS,shadowmap_vertex:ES,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:IS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:DS,specularmap_pars_fragment:US,tonemapping_fragment:FS,tonemapping_pars_fragment:NS,transmission_fragment:BS,transmission_pars_fragment:OS,uv_pars_fragment:zS,uv_pars_vertex:VS,uv_vertex:kS,worldpos_vertex:GS,background_vert:HS,background_frag:WS,backgroundCube_vert:qS,backgroundCube_frag:XS,cube_vert:YS,cube_frag:ZS,depth_vert:jS,depth_frag:JS,distanceRGBA_vert:QS,distanceRGBA_frag:$S,equirect_vert:KS,equirect_frag:ew,linedashed_vert:tw,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:rw,meshlambert_vert:sw,meshlambert_frag:ow,meshmatcap_vert:aw,meshmatcap_frag:lw,meshnormal_vert:cw,meshnormal_frag:uw,meshphong_vert:hw,meshphong_frag:dw,meshphysical_vert:fw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:xw,points_frag:yw,shadow_vert:vw,shadow_frag:_w,sprite_vert:bw,sprite_frag:Mw},Ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Di={basic:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new De(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Ue.common,Ue.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Ue.lights,Ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Di.physical={uniforms:Mn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var xh={r:0,b:0,g:0},ys=new tn,Sw=new ct;function ww(n,e,t,i,r,s,o){let a=new De(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function x(v){let b=!1,A=p(v);A===null?m(a,l):A&&A.isColor&&(m(A,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){let A=p(b);A&&(A.isCubeTexture||A.mapping===dl)?(u===void 0&&(u=new He(new it(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:xs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ys.copy(b.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(ys)),u.material.toneMapped=mt.getTransfer(A.colorSpace)!==wt,(d!==A||f!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new ln(2,2),new gn({name:"BackgroundMaterial",uniforms:xs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=mt.getTransfer(A.colorSpace)!==wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(xh,rp(n)),i.buffers.color.setClear(xh.r,xh.g,xh.b,b,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:y}}function Tw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,C,B,O,Y){let N=!1,V=d(O,B,C);s!==V&&(s=V,c(s.object)),N=h(M,O,B,Y),N&&p(M,O,B,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,b(M,C,B,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,C,B){let O=B.wireframe===!0,Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let N=Y[C.id];N===void 0&&(N={},Y[C.id]=N);let V=N[O];return V===void 0&&(V=f(l()),N[O]=V),V}function f(M){let C=[],B=[],O=[];for(let Y=0;Y<t;Y++)C[Y]=0,B[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,C,B,O){let Y=s.attributes,N=C.attributes,V=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let ie=Y[F],fe=N[F];if(fe===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function p(M,C,B,O){let Y={},N=C.attributes,V=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let ie=N[F];ie===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),Y[F]=fe,V++}s.attributes=Y,s.attributesNum=V,s.index=O}function x(){let M=s.newAttributes;for(let C=0,B=M.length;C<B;C++)M[C]=0}function g(M){m(M,0)}function m(M,C){let B=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;B[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),Y[M]!==C&&(n.vertexAttribDivisor(M,C),Y[M]=C)}function y(){let M=s.newAttributes,C=s.enabledAttributes;for(let B=0,O=C.length;B<O;B++)C[B]!==M[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function v(M,C,B,O,Y,N,V){V===!0?n.vertexAttribIPointer(M,C,B,Y,N):n.vertexAttribPointer(M,C,B,O,Y,N)}function b(M,C,B,O){x();let Y=O.attributes,N=B.getAttributes(),V=C.defaultAttributeValues;for(let J in N){let F=N[J];if(F.location>=0){let K=Y[J];if(K===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){let ie=K.normalized,fe=K.itemSize,ye=e.get(K);if(ye===void 0)continue;let we=ye.buffer,Ce=ye.type,Re=ye.bytesPerElement,se=Ce===n.INT||Ce===n.UNSIGNED_INT||K.gpuType===Uu;if(K.isInterleavedBufferAttribute){let oe=K.data,xe=oe.stride,Ie=K.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)m(F.location+ve,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<F.locationSize;ve++)g(F.location+ve);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ve=0;ve<F.locationSize;ve++)v(F.location+ve,fe/F.locationSize,Ce,ie,xe*Re,(Ie+fe/F.locationSize*ve)*Re,se)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<F.locationSize;oe++)m(F.location+oe,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<F.locationSize;oe++)g(F.location+oe);n.bindBuffer(n.ARRAY_BUFFER,we);for(let oe=0;oe<F.locationSize;oe++)v(F.location+oe,fe/F.locationSize,Ce,ie,fe*Re,fe/F.locationSize*oe*Re,se)}}else if(V!==void 0){let ie=V[J];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(F.location,ie);break;case 3:n.vertexAttrib3fv(F.location,ie);break;case 4:n.vertexAttrib4fv(F.location,ie);break;default:n.vertexAttrib1fv(F.location,ie)}}}}y()}function A(){D();for(let M in i){let C=i[M];for(let B in C){let O=C[B];for(let Y in O)u(O[Y].object),delete O[Y];delete C[B]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let B in C){let O=C[B];for(let Y in O)u(O[Y].object),delete O[Y];delete C[B]}delete i[M.id]}function U(M){for(let C in i){let B=i[C];if(B[M.id]===void 0)continue;let O=B[M.id];for(let Y in O)u(O[Y].object),delete O[Y];delete B[M.id]}}function D(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Aw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ew(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Pn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let D=U===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Zn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Mi&&!D)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:A,maxSamples:E}}function Cw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Nn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let y=s?0:i,v=y*4,b=m.clippingState||null;l.value=b,b=u(p,f,v,h);for(let A=0;A!==v;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,b=h;v!==x;++v,b+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Rw(n){let e=new WeakMap;function t(o,a){return a===Pi?o.mapping=ms:a===Lu&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pi||a===Lu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new tu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Io=4,k0=[.125,.215,.35,.446,.526,.582],bs=20,cp=new ll,G0=new De,up=null,hp=0,dp=0,fp=!1,_s=(1+Math.sqrt(5))/2,Ro=1/_s,H0=[new _(-_s,Ro,0),new _(_s,Ro,0),new _(-Ro,0,_s),new _(Ro,0,_s),new _(0,_s,-Ro),new _(0,_s,Ro),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],Iw=new _,Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Iw}=s;up=this._renderer.getRenderTarget(),hp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(up,hp,dp),this._renderer.xr.enabled=fp,e.scissorTest=!1,yh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),up=this._renderer.getRenderTarget(),hp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Li,format:Pn,colorSpace:ls,depthBuffer:!1},r=W0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pw(s)),this._blurMaterial=Lw(s,e,t)}return r}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,cp)}_sceneToCubeUV(e,t,i,r,s){let l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(G0),d.toneMapping=or,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new Rt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new He(new it,x),m=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,m=!0):(x.color.copy(G0),m=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let A=this._cubeSize;yh(r,b*A,v>2?A:0,A,A),d.setRenderTarget(r),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;yh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=H0[(r-s-1)%H0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new He(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*bs-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):bs;g>bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bs}`);let m=[],y=0;for(let U=0;U<bs;++U){let D=U/x,w=Math.exp(-D*D/2);m.push(w),U===0?y+=w:U<g&&(y+=2*w)}for(let U=0;U<m.length;U++)m[U]=m[U]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let b=this._sizeLods[r],A=3*b*(r>v-Io?r-v+Io:0),E=4*(this._cubeSize-b);yh(t,A,E,3*b,2*b),l.setRenderTarget(t),l.render(d,cp)}};function Pw(n){let e=[],t=[],i=[],r=n,s=n-Io+1+k0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Io?l=k0[o-n+Io-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*h),v=new Float32Array(g*p*h),b=new Float32Array(m*p*h);for(let E=0;E<h;E++){let U=E%3*2/3-1,D=E>2?0:-1,w=[U,D,0,U+2/3,D,0,U+2/3,D+1,0,U,D,0,U+2/3,D+1,0,U,D+1,0];y.set(w,x*p*E),v.set(f,g*p*E);let M=[E,E,E,E,E,E];b.set(M,m*p*E)}let A=new et;A.setAttribute("position",new gt(y,x)),A.setAttribute("uv",new gt(v,g)),A.setAttribute("faceIndex",new gt(b,m)),e.push(A),r>Io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function W0(n,e,t){let i=new On(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lw(n,e,t){let i=new Float32Array(bs),r=new _(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function q0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function X0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Sp(){return`

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
	`}function Dw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pi||l===Lu,u=l===ms||l===gs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Lo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Lo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Uw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fw(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let v=0,b=y.length;v<b;v+=3){let A=y[v+0],E=y[v+1],U=y[v+2];f.push(A,E,E,U,U,A)}}else if(p!==void 0){let y=p.array;x=p.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let A=v+0,E=v+1,U=v+2;f.push(A,E,E,U,U,A)}}else return;let g=new(ip(f)?Na:cs)(f,1);g.version=x;let m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Nw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=h[y]*x[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Bw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ow(n,e,t){let i=new WeakMap,r=new ft;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;h===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*A*4*d),U=new Fa(E,b,A,d);U.type=Mi,U.needsUpdate=!0;let D=v*4;for(let M=0;M<d;M++){let C=g[M],B=m[M],O=y[M],Y=b*A*4*M;for(let N=0;N<C.count;N++){let V=N*D;h===!0&&(r.fromBufferAttribute(C,N),E[Y+V+0]=r.x,E[Y+V+1]=r.y,E[Y+V+2]=r.z,E[Y+V+3]=0),p===!0&&(r.fromBufferAttribute(B,N),E[Y+V+4]=r.x,E[Y+V+5]=r.y,E[Y+V+6]=r.z,E[Y+V+7]=0),x===!0&&(r.fromBufferAttribute(O,N),E[Y+V+8]=r.x,E[Y+V+9]=r.y,E[Y+V+10]=r.z,E[Y+V+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:U,size:new ge(b,A)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function zw(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var hx=new bn,Y0=new Xa(1,1),dx=new Fa,fx=new Kc,px=new Oa,Z0=[],j0=[],J0=new Float32Array(16),Q0=new Float32Array(9),$0=new Float32Array(4);function Do(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Z0[r];if(s===void 0&&(s=new Float32Array(r),Z0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bh(n,e){let t=j0[e];t===void 0&&(t=new Int32Array(e),j0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function Gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function Hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function Ww(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;$0.set(i),n.uniformMatrix2fv(this.addr,!1,$0),hn(t,i)}}function qw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;Q0.set(i),n.uniformMatrix3fv(this.addr,!1,Q0),hn(t,i)}}function Xw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;J0.set(i),n.uniformMatrix4fv(this.addr,!1,J0),hn(t,i)}}function Yw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function Jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function Qw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $w(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function eT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function tT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Y0.compareFunction=ep,s=Y0):s=hx,t.setTexture2D(e||s,r)}function nT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fx,r)}function iT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||px,r)}function rT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dx,r)}function sT(n){switch(n){case 5126:return Vw;case 35664:return kw;case 35665:return Gw;case 35666:return Hw;case 35674:return Ww;case 35675:return qw;case 35676:return Xw;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return jw;case 35669:case 35673:return Jw;case 5125:return Qw;case 36294:return $w;case 36295:return Kw;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(n,e){n.uniform1fv(this.addr,e)}function aT(n,e){let t=Do(e,this.size,2);n.uniform2fv(this.addr,t)}function lT(n,e){let t=Do(e,this.size,3);n.uniform3fv(this.addr,t)}function cT(n,e){let t=Do(e,this.size,4);n.uniform4fv(this.addr,t)}function uT(n,e){let t=Do(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hT(n,e){let t=Do(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dT(n,e){let t=Do(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fT(n,e){n.uniform1iv(this.addr,e)}function pT(n,e){n.uniform2iv(this.addr,e)}function mT(n,e){n.uniform3iv(this.addr,e)}function gT(n,e){n.uniform4iv(this.addr,e)}function xT(n,e){n.uniform1uiv(this.addr,e)}function yT(n,e){n.uniform2uiv(this.addr,e)}function vT(n,e){n.uniform3uiv(this.addr,e)}function _T(n,e){n.uniform4uiv(this.addr,e)}function bT(n,e,t){let i=this.cache,r=e.length,s=bh(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hx,s[o])}function MT(n,e,t){let i=this.cache,r=e.length,s=bh(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fx,s[o])}function ST(n,e,t){let i=this.cache,r=e.length,s=bh(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||px,s[o])}function wT(n,e,t){let i=this.cache,r=e.length,s=bh(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dx,s[o])}function TT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return xT;case 36294:return yT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return wT}}var mp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sT(t.type)}},gp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TT(t.type)}},xp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},pp=/(\w+)(\])?(\[|\.)?/g;function K0(n,e){n.seq.push(e),n.map[e.id]=e}function AT(n,e,t){let i=n.name,r=i.length;for(pp.lastIndex=0;;){let s=pp.exec(i),o=pp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){K0(t,c===void 0?new mp(a,n,e):new gp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xp(a),K0(t,d)),t=d}}}var Po=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ex(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ET=37297,CT=0;function RT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var tx=new rt;function IT(n){mt._getMatrix(tx,mt.workingColorSpace,n);let e=`mat3( ${tx.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Da:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RT(n.getShaderSource(e),a)}else return s}function PT(n,e){let t=IT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function LT(n,e){let t;switch(e){case m0:t="Linear";break;case g0:t="Reinhard";break;case x0:t="Cineon";break;case Pu:t="ACESFilmic";break;case v0:t="AgX";break;case _0:t="Neutral";break;case y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vh=new _;function DT(){mt.getLuminanceCoefficients(vh);let n=vh.x.toFixed(4),e=vh.y.toFixed(4),t=vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function FT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yl(n){return n!==""}function ix(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(n){return n.replace(BT,zT)}var OT=new Map;function zT(n,e){let t=lt[e];if(t===void 0){let i=OT.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yp(t)}var VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(n){return n.replace(VT,kT)}function kT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ox(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Iu:e="ENVMAP_BLENDING_MULTIPLY";break;case f0:e="ENVMAP_BLENDING_MIX";break;case p0:e="ENVMAP_BLENDING_ADD";break}return e}function XT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function YT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GT(t),c=HT(t),u=WT(t),d=qT(t),f=XT(t),h=UT(t),p=FT(s),x=r.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yl).join(`
`),m.length>0&&(m+=`
`)):(g=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),m=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?lt.tonemapping_pars_fragment:"",t.toneMapping!==or?LT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,PT("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yl).join(`
`)),o=yp(o),o=ix(o,t),o=rx(o,t),a=yp(a),a=ix(a,t),a=rx(a,t),o=sx(o),a=sx(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+g+o,b=y+m+a,A=ex(r,r.VERTEX_SHADER,v),E=ex(r,r.FRAGMENT_SHADER,b);r.attachShader(x,A),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function U(C){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(E)||"",N=B.trim(),V=O.trim(),J=Y.trim(),F=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,E);else{let ie=nx(r,A,"vertex"),fe=nx(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+ie+`
`+fe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(V===""||J==="")&&(K=!1);K&&(C.diagnostics={runnable:F,programLog:N,vertexShader:{log:V,prefix:g},fragmentShader:{log:J,prefix:m}})}r.deleteShader(A),r.deleteShader(E),D=new Po(r,x),w=NT(r,x)}let D;this.getUniforms=function(){return D===void 0&&U(this),D};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,ET)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var ZT=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _p(e),t.set(e,i)),i}},_p=class{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}};function jT(n,e,t,i,r,s,o){let a=new fo,l=new vp,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,C,B,O){let Y=B.fog,N=O.geometry,V=w.isMeshStandardMaterial?B.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),F=J&&J.mapping===dl?J.image.height:null,K=p[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,fe=ie!==void 0?ie.length:0,ye=0;N.morphAttributes.position!==void 0&&(ye=1),N.morphAttributes.normal!==void 0&&(ye=2),N.morphAttributes.color!==void 0&&(ye=3);let we,Ce,Re,se;if(K){let Be=Di[K];we=Be.vertexShader,Ce=Be.fragmentShader}else we=w.vertexShader,Ce=w.fragmentShader,l.update(w),Re=l.getVertexShaderID(w),se=l.getFragmentShaderID(w);let oe=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Xe=!!w.map,Ge=!!w.matcap,S=!!J,k=!!w.aoMap,z=!!w.lightMap,H=!!w.bumpMap,W=!!w.normalMap,I=!!w.displacementMap,j=!!w.emissiveMap,Z=!!w.metalnessMap,he=!!w.roughnessMap,pe=w.anisotropy>0,R=w.clearcoat>0,T=w.dispersion>0,X=w.iridescence>0,ee=w.sheen>0,ue=w.transmission>0,re=pe&&!!w.anisotropyMap,Me=R&&!!w.clearcoatMap,be=R&&!!w.clearcoatNormalMap,Ae=R&&!!w.clearcoatRoughnessMap,Ne=X&&!!w.iridescenceMap,de=X&&!!w.iridescenceThicknessMap,_e=ee&&!!w.sheenColorMap,Ye=ee&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Le=!!w.specularColorMap,tt=!!w.specularIntensityMap,L=ue&&!!w.transmissionMap,q=ue&&!!w.thicknessMap,le=!!w.gradientMap,me=!!w.alphaMap,te=w.alphaTest>0,ne=!!w.alphaHash,Se=!!w.extensions,Ee=or;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=n.toneMapping);let ze={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:Ce,defines:w.defines,customVertexShaderID:Re,customFragmentShaderID:se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ls,alphaToCoverage:!!w.alphaToCoverage,map:Xe,matcap:Ge,envMap:S,envMapMode:S&&J.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:z,bumpMap:H,normalMap:W,displacementMap:f&&I,emissiveMap:j,normalMapObjectSpace:W&&w.normalMapType===w0,normalMapTangentSpace:W&&w.normalMapType===mh,metalnessMap:Z,roughnessMap:he,anisotropy:pe,anisotropyMap:re,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:be,clearcoatRoughnessMap:Ae,dispersion:T,iridescence:X,iridescenceMap:Ne,iridescenceThicknessMap:de,sheen:ee,sheenColorMap:_e,sheenRoughnessMap:Ye,specularMap:Ve,specularColorMap:Le,specularIntensityMap:tt,transmission:ue,transmissionMap:L,thicknessMap:q,gradientMap:le,opaque:w.transparent===!1&&w.blending===os&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:ne,combine:w.combine,mapUv:Xe&&x(w.map.channel),aoMapUv:k&&x(w.aoMap.channel),lightMapUv:z&&x(w.lightMap.channel),bumpMapUv:H&&x(w.bumpMap.channel),normalMapUv:W&&x(w.normalMap.channel),displacementMapUv:I&&x(w.displacementMap.channel),emissiveMapUv:j&&x(w.emissiveMap.channel),metalnessMapUv:Z&&x(w.metalnessMap.channel),roughnessMapUv:he&&x(w.roughnessMap.channel),anisotropyMapUv:re&&x(w.anisotropyMap.channel),clearcoatMapUv:Me&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(w.sheenRoughnessMap.channel),specularMapUv:Ve&&x(w.specularMap.channel),specularColorMapUv:Le&&x(w.specularColorMap.channel),specularIntensityMapUv:tt&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:q&&x(w.thicknessMap.channel),alphaMapUv:me&&x(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(W||pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Xe||me),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Xe&&w.map.isVideoTexture===!0&&mt.getTransfer(w.map.colorSpace)===wt,decodeVideoTextureEmissive:j&&w.emissiveMap.isVideoTexture===!0&&mt.getTransfer(w.emissiveMap.colorSpace)===wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pn,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Se&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&w.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){let M=p[w.type],C;if(M){let B=Di[M];C=gh.clone(B.uniforms)}else C=w.uniforms;return C}function A(w,M){let C;for(let B=0,O=u.length;B<O;B++){let Y=u[B];if(Y.cacheKey===M){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new YT(n,M,w,s),u.push(C)),C}function E(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function U(w){l.remove(w)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:U,programs:u,dispose:D}}function JT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function QT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ax(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||QT),i.length>1&&i.sort(f||ax),r.length>1&&r.sort(f||ax)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $T(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new lx,n.set(i,[o])):r>=s.length?(o=new lx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new De};break;case"SpotLight":t={position:new _,direction:new _,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function eA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tA=0;function nA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iA(n){let e=new KT,t=eA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let r=new _,s=new ct,o=new ct;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,y=0,v=0,b=0,A=0,E=0,U=0;c.sort(nA);for(let w=0,M=c.length;w<M;w++){let C=c[w],B=C.color,O=C.intensity,Y=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=B.r*O,d+=B.g*O,f+=B.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],O);U++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=C.shadow.matrix,y++}i.directional[h]=V,h++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(O),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[x]=V;let J=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[x]=J.matrix,C.castShadow){let F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=N,b++}x++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=V,g++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let J=C.shadow,F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=C.shadow.matrix,v++}i.point[p]=V,p++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[m]=V,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==h||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==v||D.numSpotShadows!==b||D.numSpotMaps!==A||D.numLightProbes!==U)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=U,D.directionalLength=h,D.pointLength=p,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=v,D.numSpotShadows=b,D.numSpotMaps=A,D.numLightProbes=U,i.version=tA++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(v.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(v.isRectAreaLight){let b=i.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function cx(n){let e=new iA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rA(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new cx(n),e.set(r,[a])):s>=o.length?(a=new cx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var sA=`void main() {
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
}`;function aA(n,e,t){let i=new yo,r=new ge,s=new ge,o=new ft,a=new uu({depthPacking:S0}),l=new hu,c={},u=t.maxTextureSize,d={[yi]:Rn,[Rn]:yi,[pn]:pn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:sA,fragmentShader:oA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let m=this.type;this.render=function(E,U,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(sr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=m!==Ii&&this.type===Ii,Y=m===Ii&&this.type!==Ii;for(let N=0,V=E.length;N<V;N++){let J=E[N],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let K=F.getFrameExtents();if(r.multiply(K),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,F.mapSize.y=s.y)),F.map===null||O===!0||Y===!0){let fe=this.type!==Ii?{minFilter:mn,magFilter:mn}:{};F.map!==null&&F.map.dispose(),F.map=new On(r.x,r.y,fe),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let ie=F.getViewportCount();for(let fe=0;fe<ie;fe++){let ye=F.getViewport(fe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(o),F.updateMatrices(J,fe),i=F.getFrustum(),b(U,D,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Ii&&y(F,D),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,M,C)};function y(E,U){let D=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(U,null,D,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(U,null,D,h,x,null)}function v(E,U,D,w){let M=null,C=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let B=M.uuid,O=U.uuid,Y=c[B];Y===void 0&&(Y={},c[B]=Y);let N=Y[O];N===void 0&&(N=M.clone(),Y[O]=N,U.addEventListener("dispose",A)),M=N}if(M.visible=U.visible,M.wireframe=U.wireframe,w===Ii?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:d[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=n.properties.get(M);B.light=D}return M}function b(E,U,D,w,M){if(E.visible===!1)return;if(E.layers.test(U.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let N=O.groups;for(let V=0,J=N.length;V<J;V++){let F=N[V],K=Y[F.materialIndex];if(K&&K.visible){let ie=v(E,K,w,M);E.onBeforeShadow(n,E,U,D,O,ie,F),n.renderBufferDirect(D,null,O,ie,E,F),E.onAfterShadow(n,E,U,D,O,ie,F)}}}else if(Y.visible){let N=v(E,Y,w,M);E.onBeforeShadow(n,E,U,D,O,N,null),n.renderBufferDirect(D,null,O,N,E,null),E.onAfterShadow(n,E,U,D,O,N,null)}}let B=E.children;for(let O=0,Y=B.length;O<Y;O++)b(B[O],U,D,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(let D in c){let w=c[D],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var lA={[Su]:wu,[Tu]:Cu,[Au]:Ru,[as]:Eu,[wu]:Su,[Cu]:Tu,[Ru]:Au,[Eu]:as};function cA(n,e){function t(){let L=!1,q=new ft,le=null,me=new ft(0,0,0,0);return{setMask:function(te){le!==te&&!L&&(n.colorMask(te,te,te,te),le=te)},setLocked:function(te){L=te},setClear:function(te,ne,Se,Ee,ze){ze===!0&&(te*=Ee,ne*=Ee,Se*=Ee),q.set(te,ne,Se,Ee),me.equals(q)===!1&&(n.clearColor(te,ne,Se,Ee),me.copy(q))},reset:function(){L=!1,le=null,me.set(-1,0,0,0)}}}function i(){let L=!1,q=!1,le=null,me=null,te=null;return{setReversed:function(ne){if(q!==ne){let Se=e.get("EXT_clip_control");ne?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),q=ne;let Ee=te;te=null,this.setClear(Ee)}},getReversed:function(){return q},setTest:function(ne){ne?oe(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ne){le!==ne&&!L&&(n.depthMask(ne),le=ne)},setFunc:function(ne){if(q&&(ne=lA[ne]),me!==ne){switch(ne){case Su:n.depthFunc(n.NEVER);break;case wu:n.depthFunc(n.ALWAYS);break;case Tu:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Au:n.depthFunc(n.EQUAL);break;case Eu:n.depthFunc(n.GEQUAL);break;case Cu:n.depthFunc(n.GREATER);break;case Ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ne}},setLocked:function(ne){L=ne},setClear:function(ne){te!==ne&&(q&&(ne=1-ne),n.clearDepth(ne),te=ne)},reset:function(){L=!1,le=null,me=null,te=null,q=!1}}}function r(){let L=!1,q=null,le=null,me=null,te=null,ne=null,Se=null,Ee=null,ze=null;return{setTest:function(Be){L||(Be?oe(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Be){q!==Be&&!L&&(n.stencilMask(Be),q=Be)},setFunc:function(Be,bt,kt){(le!==Be||me!==bt||te!==kt)&&(n.stencilFunc(Be,bt,kt),le=Be,me=bt,te=kt)},setOp:function(Be,bt,kt){(ne!==Be||Se!==bt||Ee!==kt)&&(n.stencilOp(Be,bt,kt),ne=Be,Se=bt,Ee=kt)},setLocked:function(Be){L=Be},setClear:function(Be){ze!==Be&&(n.clearStencil(Be),ze=Be)},reset:function(){L=!1,q=null,le=null,me=null,te=null,ne=null,Se=null,Ee=null,ze=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,v=null,b=null,A=null,E=null,U=new De(0,0,0),D=0,w=!1,M=null,C=null,B=null,O=null,Y=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,J=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=J>=2);let K=null,ie={},fe=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),we=new ft().fromArray(fe),Ce=new ft().fromArray(ye);function Re(L,q,le,me){let te=new Uint8Array(4),ne=n.createTexture();n.bindTexture(L,ne),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<le;Se++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(q+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return ne}let se={};se[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(as),H(!1),W(Hf),oe(n.CULL_FACE),k(sr);function oe(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ie(L,q){return d[L]!==q?(n.bindFramebuffer(L,q),d[L]=q,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=q),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=q),!0):!1}function ve(L,q){let le=h,me=!1;if(L){le=f.get(q),le===void 0&&(le=[],f.set(q,le));let te=L.textures;if(le.length!==te.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Se=te.length;ne<Se;ne++)le[ne]=n.COLOR_ATTACHMENT0+ne;le.length=te.length,me=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,me=!0);me&&n.drawBuffers(le)}function Xe(L){return p!==L?(n.useProgram(L),p=L,!0):!1}let Ge={[Cr]:n.FUNC_ADD,[Jg]:n.FUNC_SUBTRACT,[Qg]:n.FUNC_REVERSE_SUBTRACT};Ge[$g]=n.MIN,Ge[Kg]=n.MAX;let S={[e0]:n.ZERO,[t0]:n.ONE,[n0]:n.SRC_COLOR,[Xc]:n.SRC_ALPHA,[l0]:n.SRC_ALPHA_SATURATE,[o0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[i0]:n.ONE_MINUS_SRC_COLOR,[Yc]:n.ONE_MINUS_SRC_ALPHA,[a0]:n.ONE_MINUS_DST_COLOR,[s0]:n.ONE_MINUS_DST_ALPHA,[c0]:n.CONSTANT_COLOR,[u0]:n.ONE_MINUS_CONSTANT_COLOR,[h0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(L,q,le,me,te,ne,Se,Ee,ze,Be){if(L===sr){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(oe(n.BLEND),x=!0),L!==jg){if(L!==g||Be!==w){if((m!==Cr||b!==Cr)&&(n.blendEquation(n.FUNC_ADD),m=Cr,b=Cr),Be)switch(L){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ai:n.blendFunc(n.ONE,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,A=null,E=null,U.set(0,0,0),D=0,g=L,w=Be}return}te=te||q,ne=ne||le,Se=Se||me,(q!==m||te!==b)&&(n.blendEquationSeparate(Ge[q],Ge[te]),m=q,b=te),(le!==y||me!==v||ne!==A||Se!==E)&&(n.blendFuncSeparate(S[le],S[me],S[ne],S[Se]),y=le,v=me,A=ne,E=Se),(Ee.equals(U)===!1||ze!==D)&&(n.blendColor(Ee.r,Ee.g,Ee.b,ze),U.copy(Ee),D=ze),g=L,w=!1}function z(L,q){L.side===pn?xe(n.CULL_FACE):oe(n.CULL_FACE);let le=L.side===Rn;q&&(le=!le),H(le),L.blending===os&&L.transparent===!1?k(sr):k(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),j(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function W(L){L!==Xg?(oe(n.CULL_FACE),L!==C&&(L===Hf?n.cullFace(n.BACK):L===Yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),C=L}function I(L){L!==B&&(V&&n.lineWidth(L),B=L)}function j(L,q,le){L?(oe(n.POLYGON_OFFSET_FILL),(O!==q||Y!==le)&&(n.polygonOffset(q,le),O=q,Y=le)):xe(n.POLYGON_OFFSET_FILL)}function Z(L){L?oe(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function he(L){L===void 0&&(L=n.TEXTURE0+N-1),K!==L&&(n.activeTexture(L),K=L)}function pe(L,q,le){le===void 0&&(K===null?le=n.TEXTURE0+N-1:le=K);let me=ie[le];me===void 0&&(me={type:void 0,texture:void 0},ie[le]=me),(me.type!==L||me.texture!==q)&&(K!==le&&(n.activeTexture(le),K=le),n.bindTexture(L,q||se[L]),me.type=L,me.texture=q)}function R(){let L=ie[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){we.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),we.copy(L))}function Ye(L){Ce.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ce.copy(L))}function Ve(L,q){let le=c.get(q);le===void 0&&(le=new WeakMap,c.set(q,le));let me=le.get(L);me===void 0&&(me=n.getUniformBlockIndex(q,L.name),le.set(L,me))}function Le(L,q){let me=c.get(q).get(L);l.get(q)!==me&&(n.uniformBlockBinding(q,me,L.__bindingPointIndex),l.set(q,me))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,ie={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,y=null,v=null,b=null,A=null,E=null,U=new De(0,0,0),D=0,w=!1,M=null,C=null,B=null,O=null,Y=null,we.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:xe,bindFramebuffer:Ie,drawBuffers:ve,useProgram:Xe,setBlending:k,setMaterial:z,setFlipSided:H,setCullFace:W,setLineWidth:I,setPolygonOffset:j,setScissorTest:Z,activeTexture:he,bindTexture:pe,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Ne,texImage3D:de,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:Ae,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:Me,scissor:_e,viewport:Ye,reset:tt}}function uA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return h?new OffscreenCanvas(R,T):co("canvas")}function x(R,T,X){let ee=1,ue=pe(R);if((ue.width>X||ue.height>X)&&(ee=X/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let re=Math.floor(ee*ue.width),Me=Math.floor(ee*ue.height);d===void 0&&(d=p(re,Me));let be=T?p(re,Me):d;return be.width=re,be.height=Me,be.getContext("2d").drawImage(R,0,0,re,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+re+"x"+Me+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,T,X,ee,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===n.RED&&(X===n.FLOAT&&(re=n.R32F),X===n.HALF_FLOAT&&(re=n.R16F),X===n.UNSIGNED_BYTE&&(re=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.R8UI),X===n.UNSIGNED_SHORT&&(re=n.R16UI),X===n.UNSIGNED_INT&&(re=n.R32UI),X===n.BYTE&&(re=n.R8I),X===n.SHORT&&(re=n.R16I),X===n.INT&&(re=n.R32I)),T===n.RG&&(X===n.FLOAT&&(re=n.RG32F),X===n.HALF_FLOAT&&(re=n.RG16F),X===n.UNSIGNED_BYTE&&(re=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RG8UI),X===n.UNSIGNED_SHORT&&(re=n.RG16UI),X===n.UNSIGNED_INT&&(re=n.RG32UI),X===n.BYTE&&(re=n.RG8I),X===n.SHORT&&(re=n.RG16I),X===n.INT&&(re=n.RG32I)),T===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RGB8UI),X===n.UNSIGNED_SHORT&&(re=n.RGB16UI),X===n.UNSIGNED_INT&&(re=n.RGB32UI),X===n.BYTE&&(re=n.RGB8I),X===n.SHORT&&(re=n.RGB16I),X===n.INT&&(re=n.RGB32I)),T===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),X===n.UNSIGNED_INT&&(re=n.RGBA32UI),X===n.BYTE&&(re=n.RGBA8I),X===n.SHORT&&(re=n.RGBA16I),X===n.INT&&(re=n.RGBA32I)),T===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(re=n.R11F_G11F_B10F)),T===n.RGBA){let Me=ue?Da:mt.getTransfer(ee);X===n.FLOAT&&(re=n.RGBA32F),X===n.HALF_FLOAT&&(re=n.RGBA16F),X===n.UNSIGNED_BYTE&&(re=Me===wt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(R,T){let X;return R?T===null||T===Dr||T===Eo?X=n.DEPTH24_STENCIL8:T===Mi?X=n.DEPTH32F_STENCIL8:T===Ao&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===Eo?X=n.DEPTH_COMPONENT24:T===Mi?X=n.DEPTH_COMPONENT32F:T===Ao&&(X=n.DEPTH_COMPONENT16),X}function A(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function E(R){let T=R.target;T.removeEventListener("dispose",E),D(T),T.isVideoTexture&&u.delete(T)}function U(R){let T=R.target;T.removeEventListener("dispose",U),M(T)}function D(R){let T=i.get(R);if(T.__webglInit===void 0)return;let X=R.source,ee=f.get(X);if(ee){let ue=ee[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&w(R),Object.keys(ee).length===0&&f.delete(X)}i.remove(R)}function w(R){let T=i.get(R);n.deleteTexture(T.__webglTexture);let X=R.source,ee=f.get(X);delete ee[T.__cacheKey],o.memory.textures--}function M(R){let T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ue=0;ue<T.__webglFramebuffer[ee].length;ue++)n.deleteFramebuffer(T.__webglFramebuffer[ee][ue]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let X=R.textures;for(let ee=0,ue=X.length;ee<ue;ee++){let re=i.get(X[ee]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(X[ee])}i.remove(R)}let C=0;function B(){C=0}function O(){let R=C;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function Y(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function N(R,T){let X=i.get(R);if(R.isVideoTexture&&Z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(X,R,T);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function V(R,T){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){se(X,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function J(R,T){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){se(X,R,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function F(R,T){let X=i.get(R);if(R.version>0&&X.__version!==R.version){oe(X,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}let K={[Cn]:n.REPEAT,[Er]:n.CLAMP_TO_EDGE,[Zc]:n.MIRRORED_REPEAT},ie={[mn]:n.NEAREST,[b0]:n.NEAREST_MIPMAP_NEAREST,[fl]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Du]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},fe={[T0]:n.NEVER,[P0]:n.ALWAYS,[A0]:n.LESS,[ep]:n.LEQUAL,[E0]:n.EQUAL,[I0]:n.GEQUAL,[C0]:n.GREATER,[R0]:n.NOTEQUAL};function ye(R,T){if(T.type===Mi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===Du||T.magFilter===fl||T.magFilter===In||T.minFilter===an||T.minFilter===Du||T.minFilter===fl||T.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ie[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mn||T.minFilter!==fl&&T.minFilter!==In||T.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function we(R,T){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",E));let ee=T.source,ue=f.get(ee);ue===void 0&&(ue={},f.set(ee,ue));let re=Y(T);if(re!==R.__cacheKey){ue[re]===void 0&&(ue[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ue[re].usedTimes++;let Me=ue[R.__cacheKey];Me!==void 0&&(ue[R.__cacheKey].usedTimes--,Me.usedTimes===0&&w(T)),R.__cacheKey=re,R.__webglTexture=ue[re].texture}return X}function Ce(R,T,X){return Math.floor(Math.floor(R/X)/T)}function Re(R,T,X,ee){let re=R.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,X,ee,T.data);else{re.sort((de,_e)=>de.start-_e.start);let Me=0;for(let de=1;de<re.length;de++){let _e=re[Me],Ye=re[de],Ve=_e.start+_e.count,Le=Ce(Ye.start,T.width,4),tt=Ce(_e.start,T.width,4);Ye.start<=Ve+1&&Le===tt&&Ce(Ye.start+Ye.count-1,T.width,4)===Le?_e.count=Math.max(_e.count,Ye.start+Ye.count-_e.start):(++Me,re[Me]=Ye)}re.length=Me+1;let be=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let de=0,_e=re.length;de<_e;de++){let Ye=re[de],Ve=Math.floor(Ye.start/4),Le=Math.ceil(Ye.count/4),tt=Ve%T.width,L=Math.floor(Ve/T.width),q=Le,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,tt,L,q,le,X,ee,T.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function se(R,T,X){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);let ue=we(R,T),re=T.source;t.bindTexture(ee,R.__webglTexture,n.TEXTURE0+X);let Me=i.get(re);if(re.version!==Me.__version||ue===!0){t.activeTexture(n.TEXTURE0+X);let be=mt.getPrimaries(mt.workingColorSpace),Ae=T.colorSpace===ar?null:mt.getPrimaries(T.colorSpace),Ne=T.colorSpace===ar||be===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let de=x(T.image,!1,r.maxTextureSize);de=he(T,de);let _e=s.convert(T.format,T.colorSpace),Ye=s.convert(T.type),Ve=v(T.internalFormat,_e,Ye,T.colorSpace,T.isVideoTexture);ye(ee,T);let Le,tt=T.mipmaps,L=T.isVideoTexture!==!0,q=Me.__version===void 0||ue===!0,le=re.dataReady,me=A(T,de);if(T.isDepthTexture)Ve=b(T.format===Co,T.type),q&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ve,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,_e,Ye,null));else if(T.isDataTexture)if(tt.length>0){L&&q&&t.texStorage2D(n.TEXTURE_2D,me,Ve,tt[0].width,tt[0].height);for(let te=0,ne=tt.length;te<ne;te++)Le=tt[te],L?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,_e,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,te,Ve,Le.width,Le.height,0,_e,Ye,Le.data);T.generateMipmaps=!1}else L?(q&&t.texStorage2D(n.TEXTURE_2D,me,Ve,de.width,de.height),le&&Re(T,de,_e,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,_e,Ye,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){L&&q&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ve,tt[0].width,tt[0].height,de.depth);for(let te=0,ne=tt.length;te<ne;te++)if(Le=tt[te],T.format!==Pn)if(_e!==null)if(L){if(le)if(T.layerUpdates.size>0){let Se=lp(Le.width,Le.height,T.format,T.type);for(let Ee of T.layerUpdates){let ze=Le.data.subarray(Ee*Se/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Se/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ee,Le.width,Le.height,1,_e,ze)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,de.depth,_e,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ve,Le.width,Le.height,de.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,de.depth,_e,Ye,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ve,Le.width,Le.height,de.depth,0,_e,Ye,Le.data)}else{L&&q&&t.texStorage2D(n.TEXTURE_2D,me,Ve,tt[0].width,tt[0].height);for(let te=0,ne=tt.length;te<ne;te++)Le=tt[te],T.format!==Pn?_e!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,_e,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Le.width,Le.height,_e,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,te,Ve,Le.width,Le.height,0,_e,Ye,Le.data)}else if(T.isDataArrayTexture)if(L){if(q&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ve,de.width,de.height,de.depth),le)if(T.layerUpdates.size>0){let te=lp(de.width,de.height,T.format,T.type);for(let ne of T.layerUpdates){let Se=de.data.subarray(ne*te/de.data.BYTES_PER_ELEMENT,(ne+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,de.width,de.height,1,_e,Ye,Se)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,_e,Ye,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,de.width,de.height,de.depth,0,_e,Ye,de.data);else if(T.isData3DTexture)L?(q&&t.texStorage3D(n.TEXTURE_3D,me,Ve,de.width,de.height,de.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,_e,Ye,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,de.width,de.height,de.depth,0,_e,Ye,de.data);else if(T.isFramebufferTexture){if(q)if(L)t.texStorage2D(n.TEXTURE_2D,me,Ve,de.width,de.height);else{let te=de.width,ne=de.height;for(let Se=0;Se<me;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ve,te,ne,0,_e,Ye,null),te>>=1,ne>>=1}}else if(tt.length>0){if(L&&q){let te=pe(tt[0]);t.texStorage2D(n.TEXTURE_2D,me,Ve,te.width,te.height)}for(let te=0,ne=tt.length;te<ne;te++)Le=tt[te],L?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e,Ye,Le):t.texImage2D(n.TEXTURE_2D,te,Ve,_e,Ye,Le);T.generateMipmaps=!1}else if(L){if(q){let te=pe(de);t.texStorage2D(n.TEXTURE_2D,me,Ve,te.width,te.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ye,de)}else t.texImage2D(n.TEXTURE_2D,0,Ve,_e,Ye,de);g(T)&&m(ee),Me.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function oe(R,T,X){if(T.image.length!==6)return;let ee=we(R,T),ue=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);let re=i.get(ue);if(ue.version!==re.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);let Me=mt.getPrimaries(mt.workingColorSpace),be=T.colorSpace===ar?null:mt.getPrimaries(T.colorSpace),Ae=T.colorSpace===ar||Me===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let ne=0;ne<6;ne++)!Ne&&!de?_e[ne]=x(T.image[ne],!0,r.maxCubemapSize):_e[ne]=de?T.image[ne].image:T.image[ne],_e[ne]=he(T,_e[ne]);let Ye=_e[0],Ve=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),tt=v(T.internalFormat,Ve,Le,T.colorSpace),L=T.isVideoTexture!==!0,q=re.__version===void 0||ee===!0,le=ue.dataReady,me=A(T,Ye);ye(n.TEXTURE_CUBE_MAP,T);let te;if(Ne){L&&q&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,Ye.width,Ye.height);for(let ne=0;ne<6;ne++){te=_e[ne].mipmaps;for(let Se=0;Se<te.length;Se++){let Ee=te[Se];T.format!==Pn?Ve!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,Ee.width,Ee.height,Ve,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,tt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,Ee.width,Ee.height,Ve,Le,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,tt,Ee.width,Ee.height,0,Ve,Le,Ee.data)}}}else{if(te=T.mipmaps,L&&q){te.length>0&&me++;let ne=pe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(de){L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e[ne].width,_e[ne].height,Ve,Le,_e[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,_e[ne].width,_e[ne].height,0,Ve,Le,_e[ne].data);for(let Se=0;Se<te.length;Se++){let ze=te[Se].image[ne].image;L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,ze.width,ze.height,Ve,Le,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,tt,ze.width,ze.height,0,Ve,Le,ze.data)}}else{L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,Le,_e[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Ve,Le,_e[ne]);for(let Se=0;Se<te.length;Se++){let Ee=te[Se];L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,Ve,Le,Ee.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,tt,Ve,Le,Ee.image[ne])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),re.__version=ue.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function xe(R,T,X,ee,ue,re){let Me=s.convert(X.format,X.colorSpace),be=s.convert(X.type),Ae=v(X.internalFormat,Me,be,X.colorSpace),Ne=i.get(T),de=i.get(X);if(de.__renderTarget=T,!Ne.__hasExternalTextures){let _e=Math.max(1,T.width>>re),Ye=Math.max(1,T.height>>re);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,re,Ae,_e,Ye,T.depth,0,Me,be,null):t.texImage2D(ue,re,Ae,_e,Ye,0,Me,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),j(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ue,de.__webglTexture,0,I(T)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ue,de.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){let ee=T.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,re=b(T.stencilBuffer,ue),Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=I(T);j(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,re,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,re,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,re,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{let ee=T.textures;for(let ue=0;ue<ee.length;ue++){let re=ee[ue],Me=s.convert(re.format,re.colorSpace),be=s.convert(re.type),Ae=v(re.internalFormat,Me,be,re.colorSpace),Ne=I(T);X&&j(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ae,T.width,T.height):j(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Ae,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);let ue=ee.__webglTexture,re=I(T);if(T.depthTexture.format===ao)j(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Co)j(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Xe(R){let T=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let ee=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){let ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=ee}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let ee=R.texture.mipmaps;ee&&ee.length>0?ve(T.__webglFramebuffer[0],R):ve(T.__webglFramebuffer,R)}else if(X){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ie(T.__webglDepthbuffer[ee],R,!1);else{let ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,re)}}else{let ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Ie(T.__webglDepthbuffer,R,!1);else{let ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(R,T,X){let ee=i.get(R);T!==void 0&&xe(ee.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Xe(R)}function S(R){let T=R.texture,X=i.get(R),ee=i.get(T);R.addEventListener("dispose",U);let ue=R.textures,re=R.isWebGLCubeRenderTarget===!0,Me=ue.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[be]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)X.__webglFramebuffer[be][Ae]=n.createFramebuffer()}else X.__webglFramebuffer[be]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)X.__webglFramebuffer[be]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Me)for(let be=0,Ae=ue.length;be<Ae;be++){let Ne=i.get(ue[be]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&j(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let be=0;be<ue.length;be++){let Ae=ue[be];X.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[be]);let Ne=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),_e=v(Ae.internalFormat,Ne,de,Ae.colorSpace,R.isXRRenderTarget===!0),Ye=I(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,X.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ye(n.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)xe(X.__webglFramebuffer[be][Ae],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ae);else xe(X.__webglFramebuffer[be],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let be=0,Ae=ue.length;be<Ae;be++){let Ne=ue[be],de=i.get(Ne),_e=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,de.__webglTexture),ye(_e,Ne),xe(X.__webglFramebuffer,R,Ne,n.COLOR_ATTACHMENT0+be,_e,0),g(Ne)&&m(_e)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ee.__webglTexture),ye(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)xe(X.__webglFramebuffer[Ae],R,T,n.COLOR_ATTACHMENT0,be,Ae);else xe(X.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,be,0);g(T)&&m(be),t.unbindTexture()}R.depthBuffer&&Xe(R)}function k(R){let T=R.textures;for(let X=0,ee=T.length;X<ee;X++){let ue=T[X];if(g(ue)){let re=y(R),Me=i.get(ue).__webglTexture;t.bindTexture(re,Me),m(re),t.unbindTexture()}}}let z=[],H=[];function W(R){if(R.samples>0){if(j(R)===!1){let T=R.textures,X=R.width,ee=R.height,ue=n.COLOR_BUFFER_BIT,re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),be=T.length>1;if(be)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Ae=R.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ne]);let de=i.get(T[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,X,ee,0,0,X,ee,ue,n.NEAREST),l===!0&&(z.length=0,H.length=0,z.push(n.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(z.push(re),H.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ne]);let de=i.get(T[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function I(R){return Math.min(r.maxSamples,R.samples)}function j(R){let T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Z(R){let T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function he(R,T){let X=R.colorSpace,ee=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==ls&&X!==ar&&(mt.getTransfer(X)===wt?(ee!==Pn||ue!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Ge,this.setupRenderTarget=S,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=j}function hA(n,e){function t(i,r=ar){let s,o=mt.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yf)return n.BYTE;if(i===Zf)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===$f)return n.RGB;if(i===Pn)return n.RGBA;if(i===ao)return n.DEPTH_COMPONENT;if(i===Co)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===Ou)return n.RED_INTEGER;if(i===Kf)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===xl)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ku||i===Gu||i===Hu||i===Wu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ku)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qu||i===Xu||i===Yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qu||i===Xu)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zu||i===ju||i===Ju||i===Qu||i===$u||i===Ku||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ju)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ju)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$u)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lh)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hh||i===dh||i===fh||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dA=`
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

}`,bp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:dA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends er{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new bp,m={},y=t.getContextAttributes(),v=null,b=null,A=[],E=[],U=new ge,D=null,w=new Kt;w.viewport=new ft;let M=new Kt;M.viewport=new ft;let C=[w,M],B=new Mu,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let oe=A[se];return oe===void 0&&(oe=new po,A[se]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(se){let oe=A[se];return oe===void 0&&(oe=new po,A[se]=oe),oe.getGripSpace()},this.getHand=function(se){let oe=A[se];return oe===void 0&&(oe=new po,A[se]=oe),oe.getHandSpace()};function N(se){let oe=E.indexOf(se.inputSource);if(oe===-1)return;let xe=A[oe];xe!==void 0&&(xe.update(se.inputSource,se.frame,c||o),xe.dispatchEvent({type:se.type,data:se.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",J);for(let se=0;se<A.length;se++){let oe=E[se];oe!==null&&(E[se]=null,A[se].disconnect(oe))}O=null,Y=null,g.reset();for(let se in m)delete m[se];e.setRenderTarget(v),h=null,f=null,d=null,r=null,b=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ie=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Co:ao,Ie=y.stencil?Eo:Dr);let Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new On(f.textureWidth,f.textureHeight,{format:Pn,type:Zn,depthTexture:new Xa(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new On(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(se){for(let oe=0;oe<se.removed.length;oe++){let xe=se.removed[oe],Ie=E.indexOf(xe);Ie>=0&&(E[Ie]=null,A[Ie].disconnect(xe))}for(let oe=0;oe<se.added.length;oe++){let xe=se.added[oe],Ie=E.indexOf(xe);if(Ie===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=E.length){E.push(xe),Ie=Xe;break}else if(E[Xe]===null){E[Xe]=xe,Ie=Xe;break}if(Ie===-1)break}let ve=A[Ie];ve&&ve.connect(xe)}}let F=new _,K=new _;function ie(se,oe,xe){F.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);let Ie=F.distanceTo(K),ve=oe.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,Ge=ve[14]/(ve[10]-1),S=ve[14]/(ve[10]+1),k=(ve[9]+1)/ve[5],z=(ve[9]-1)/ve[5],H=(ve[8]-1)/ve[0],W=(Xe[8]+1)/Xe[0],I=Ge*H,j=Ge*W,Z=Ie/(-H+W),he=Z*-H;if(oe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(he),se.translateZ(Z),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ve[10]===-1)se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let pe=Ge+Z,R=S+Z,T=I-he,X=j+(Ie-he),ee=k*S/R*pe,ue=z*S/R*pe;se.projectionMatrix.makePerspective(T,X,ee,ue,pe,R),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function fe(se,oe){oe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(oe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let oe=se.near,xe=se.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),B.near=M.near=w.near=oe,B.far=M.far=w.far=xe,(O!==B.near||Y!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,Y=B.far),B.layers.mask=se.layers.mask|6,w.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;let Ie=se.parent,ve=B.cameras;fe(B,Ie);for(let Xe=0;Xe<ve.length;Xe++)fe(ve[Xe],Ie);ve.length===2?ie(B,w,M):B.projectionMatrix.copy(w.projectionMatrix),ye(se,B,Ie)};function ye(se,oe,xe){xe===null?se.matrix.copy(oe.matrixWorld):(se.matrix.copy(xe.matrixWorld),se.matrix.invert(),se.matrix.multiply(oe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=lo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(se){return m[se]};let we=null;function Ce(se,oe){if(u=oe.getViewerPose(c||o),p=oe,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ie=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let S=0;S<xe.length;S++){let k=xe[S],z=null;if(h!==null)z=h.getViewport(k);else{let W=d.getViewSubImage(f,k);z=W.viewport,S===0&&(e.setRenderTargetTextures(b,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(b))}let H=C[S];H===void 0&&(H=new Kt,H.layers.enable(S),H.viewport=new ft,C[S]=H),H.matrix.fromArray(k.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(k.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(z.x,z.y,z.width,z.height),S===0&&(B.matrix.copy(H.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(H)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let S=d.getDepthInformation(xe[0]);S&&S.isValid&&S.texture&&g.init(S,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let S=0;S<xe.length;S++){let k=xe[S].camera;if(k){let z=m[k];z||(z=new Ya,m[k]=z);let H=d.getCameraImage(k);z.sourceTexture=H}}}}for(let xe=0;xe<A.length;xe++){let Ie=E[xe],ve=A[xe];Ie!==null&&ve!==void 0&&ve.update(Ie,oe,c||o)}we&&we(se,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),p=null}let Re=new ux;Re.setAnimationLoop(Ce),this.setAnimationLoop=function(se){we=se},this.dispose=function(){}}},vs=new tn,pA=new ct;function mA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,rp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,b=y.envMapRotation;v&&(g.envMap.value=v,vs.copy(b),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(vs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=r[y.id];b===void 0&&(p(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));let A=v.program;i.updateUBOMapping(y,A);let E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){let v=d();y.__bindingPointIndex=v;let b=n.createBuffer(),A=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=r[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,U=b.length;E<U;E++){let D=Array.isArray(b[E])?b[E]:[b[E]];for(let w=0,M=D.length;w<M;w++){let C=D[w];if(h(C,E,w,A)===!0){let B=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],Y=0;for(let N=0;N<O.length;N++){let V=O[N],J=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,v,b,A){let E=y.value,U=v+"_"+b;if(A[U]===void 0)return typeof E=="number"||typeof E=="boolean"?A[U]=E:A[U]=E.clone(),!0;{let D=A[U];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return A[U]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function p(y){let v=y.uniforms,b=0,A=16;for(let U=0,D=v.length;U<D;U++){let w=Array.isArray(v[U])?v[U]:[v[U]];for(let M=0,C=w.length;M<C;M++){let B=w[M],O=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,N=O.length;Y<N;Y++){let V=O[Y],J=x(V),F=b%A,K=F%J.boundary,ie=F+K;b+=K,ie!==0&&A-ie<J.storage&&(b+=A-ie),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=J.storage}}}let E=b%A;return E>0&&(b+=A-E),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var _h=class{constructor(e={}){let{canvas:t=L0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1;this._outputColorSpace=ht;let E=0,U=0,D=null,w=-1,M=null,C=new ft,B=new ft,O=null,Y=new De(0),N=0,V=t.width,J=t.height,F=1,K=null,ie=null,fe=new ft(0,0,V,J),ye=new ft(0,0,V,J),we=!1,Ce=new yo,Re=!1,se=!1,oe=new ct,xe=new _,Ie=new ft,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ge(){return D===null?F:1}let S=i;function k(P,Q){return t.getContext(P,Q)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",te,!1),S===null){let Q="webgl2";if(S=k(Q,P),S===null)throw k(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let z,H,W,I,j,Z,he,pe,R,T,X,ee,ue,re,Me,be,Ae,Ne,de,_e,Ye,Ve,Le,tt;function L(){z=new Uw(S),z.init(),Ve=new hA(S,z),H=new Ew(S,z,e,Ve),W=new cA(S,z),H.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),I=new Bw(S),j=new JT,Z=new uA(S,z,W,j,H,Ve,I),he=new Rw(b),pe=new Dw(b),R=new HM(S),Le=new Tw(S,R),T=new Fw(S,R,I,Le),X=new zw(S,T,R,I),de=new Ow(S,H,Z),be=new Cw(j),ee=new jT(b,he,pe,z,H,Le,be),ue=new mA(b,j),re=new $T,Me=new rA(z),Ne=new ww(b,he,pe,W,X,h,l),Ae=new aA(b,X,H),tt=new gA(S,I,H,W),_e=new Aw(S,z,I),Ye=new Nw(S,z,I),I.programs=ee.programs,b.capabilities=H,b.extensions=z,b.properties=j,b.renderLists=re,b.shadowMap=Ae,b.state=W,b.info=I}L();let q=new Mp(b,S);this.xr=q,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let P=z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(V,J,!1))},this.getSize=function(P){return P.set(V,J)},this.setSize=function(P,Q,ae=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,J=Q,t.width=Math.floor(P*F),t.height=Math.floor(Q*F),ae===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(V*F,J*F).floor()},this.setDrawingBufferSize=function(P,Q,ae){V=P,J=Q,F=ae,t.width=Math.floor(P*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,Q,ae,ce){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,Q,ae,ce),W.viewport(C.copy(fe).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,Q,ae,ce){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,Q,ae,ce),W.scissor(B.copy(ye).multiplyScalar(F).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){W.setScissorTest(we=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){ie=P},this.getClearColor=function(P){return P.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,ae=!0){let ce=0;if(P){let $=!1;if(D!==null){let Te=D.texture.format;$=Te===Vu||Te===zu||Te===Ou}if($){let Te=D.texture.type,Fe=Te===Zn||Te===Dr||Te===Ao||Te===Eo||Te===Fu||Te===Nu,We=Ne.getClearColor(),ke=Ne.getClearAlpha(),$e=We.r,Ke=We.g,Ze=We.b;Fe?(p[0]=$e,p[1]=Ke,p[2]=Ze,p[3]=ke,S.clearBufferuiv(S.COLOR,0,p)):(x[0]=$e,x[1]=Ke,x[2]=Ze,x[3]=ke,S.clearBufferiv(S.COLOR,0,x))}else ce|=S.COLOR_BUFFER_BIT}Q&&(ce|=S.DEPTH_BUFFER_BIT),ae&&(ce|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ne.dispose(),re.dispose(),Me.dispose(),j.dispose(),he.dispose(),pe.dispose(),X.dispose(),Le.dispose(),tt.dispose(),ee.dispose(),q.dispose(),q.removeEventListener("sessionstart",kt),q.removeEventListener("sessionend",at),Ut.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=I.autoReset,Q=Ae.enabled,ae=Ae.autoUpdate,ce=Ae.needsUpdate,$=Ae.type;L(),I.autoReset=P,Ae.enabled=Q,Ae.autoUpdate=ae,Ae.needsUpdate=ce,Ae.type=$}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ne(P){let Q=P.target;Q.removeEventListener("dispose",ne),Se(Q)}function Se(P){Ee(P),j.remove(P)}function Ee(P){let Q=j.get(P).programs;Q!==void 0&&(Q.forEach(function(ae){ee.releaseProgram(ae)}),P.isShaderMaterial&&ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,ae,ce,$,Te){Q===null&&(Q=ve);let Fe=$.isMesh&&$.matrixWorld.determinant()<0,We=ub(P,Q,ae,ce,$);W.setMaterial(ce,Fe);let ke=ae.index,$e=1;if(ce.wireframe===!0){if(ke=T.getWireframeAttribute(ae),ke===void 0)return;$e=2}let Ke=ae.drawRange,Ze=ae.attributes.position,ut=Ke.start*$e,Et=(Ke.start+Ke.count)*$e;Te!==null&&(ut=Math.max(ut,Te.start*$e),Et=Math.min(Et,(Te.start+Te.count)*$e)),ke!==null?(ut=Math.max(ut,0),Et=Math.min(Et,ke.count)):Ze!=null&&(ut=Math.max(ut,0),Et=Math.min(Et,Ze.count));let $t=Et-ut;if($t<0||$t===1/0)return;Le.setup($,ce,We,ae,ke);let Ft,It=_e;if(ke!==null&&(Ft=R.get(ke),It=Ye,It.setIndex(Ft)),$.isMesh)ce.wireframe===!0?(W.setLineWidth(ce.wireframeLinewidth*Ge()),It.setMode(S.LINES)):It.setMode(S.TRIANGLES);else if($.isLine){let Je=ce.linewidth;Je===void 0&&(Je=1),W.setLineWidth(Je*Ge()),$.isLineSegments?It.setMode(S.LINES):$.isLineLoop?It.setMode(S.LINE_LOOP):It.setMode(S.LINE_STRIP)}else $.isPoints?It.setMode(S.POINTS):$.isSprite&&It.setMode(S.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))It.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Je=$._multiDrawStarts,Gt=$._multiDrawCounts,xt=$._multiDrawCount,Gn=ke?R.get(ke).bytesPerElement:1,zs=j.get(ce).currentProgram.getUniforms();for(let Hn=0;Hn<xt;Hn++)zs.setValue(S,"_gl_DrawID",Hn),It.render(Je[Hn]/Gn,Gt[Hn])}else if($.isInstancedMesh)It.renderInstances(ut,$t,$.count);else if(ae.isInstancedBufferGeometry){let Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Gt=Math.min(ae.instanceCount,Je);It.renderInstances(ut,$t,Gt)}else It.render(ut,$t)};function ze(P,Q,ae){P.transparent===!0&&P.side===pn&&P.forceSinglePass===!1?(P.side=Rn,P.needsUpdate=!0,_r(P,Q,ae),P.side=yi,P.needsUpdate=!0,_r(P,Q,ae),P.side=pn):_r(P,Q,ae)}this.compile=function(P,Q,ae=null){ae===null&&(ae=P),m=Me.get(ae),m.init(Q),v.push(m),ae.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),P!==ae&&P.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let ce=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Te=$.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){let We=Te[Fe];ze(We,ae,$),ce.add(We)}else ze(Te,ae,$),ce.add(Te)}),m=v.pop(),ce},this.compileAsync=function(P,Q,ae=null){let ce=this.compile(P,Q,ae);return new Promise($=>{function Te(){if(ce.forEach(function(Fe){j.get(Fe).currentProgram.isReady()&&ce.delete(Fe)}),ce.size===0){$(P);return}setTimeout(Te,10)}z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Be=null;function bt(P){Be&&Be(P)}function kt(){Ut.stop()}function at(){Ut.start()}let Ut=new ux;Ut.setAnimationLoop(bt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(P){Be=P,q.setAnimationLoop(P),P===null?Ut.stop():Ut.start()},q.addEventListener("sessionstart",kt),q.addEventListener("sessionend",at),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(Q),Q=q.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Q,D),m=Me.get(P,v.length),m.init(Q),v.push(m),oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ce.setFromProjectionMatrix(oe,xi,Q.reversedDepth),se=this.localClippingEnabled,Re=be.init(this.clippingPlanes,se),g=re.get(P,y.length),g.init(),y.push(g),q.enabled===!0&&q.isPresenting===!0){let Te=b.xr.getDepthSensingMesh();Te!==null&&sn(Te,Q,-1/0,b.sortObjects)}sn(P,Q,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(K,ie),Xe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Xe&&Ne.addToRenderList(g,P),this.info.render.frame++,Re===!0&&be.beginShadows();let ae=m.state.shadowsArray;Ae.render(ae,P,Q),Re===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=g.opaque,$=g.transmissive;if(m.setupLights(),Q.isArrayCamera){let Te=Q.cameras;if($.length>0)for(let Fe=0,We=Te.length;Fe<We;Fe++){let ke=Te[Fe];$r(ce,$,P,ke)}Xe&&Ne.render(P);for(let Fe=0,We=Te.length;Fe<We;Fe++){let ke=Te[Fe];Xi(g,P,ke,ke.viewport)}}else $.length>0&&$r(ce,$,P,Q),Xe&&Ne.render(P),Xi(g,P,Q);D!==null&&U===0&&(Z.updateMultisampleRenderTarget(D),Z.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(b,P,Q),Le.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],Re===!0&&be.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function sn(P,Q,ae,ce){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){ce&&Ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);let Fe=X.update(P),We=P.material;We.visible&&g.push(P,Fe,We,ae,Ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){let Fe=X.update(P),We=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ie.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ie.copy(Fe.boundingSphere.center)),Ie.applyMatrix4(P.matrixWorld).applyMatrix4(oe)),Array.isArray(We)){let ke=Fe.groups;for(let $e=0,Ke=ke.length;$e<Ke;$e++){let Ze=ke[$e],ut=We[Ze.materialIndex];ut&&ut.visible&&g.push(P,Fe,ut,ae,Ie.z,Ze)}}else We.visible&&g.push(P,Fe,We,ae,Ie.z,null)}}let Te=P.children;for(let Fe=0,We=Te.length;Fe<We;Fe++)sn(Te[Fe],Q,ae,ce)}function Xi(P,Q,ae,ce){let $=P.opaque,Te=P.transmissive,Fe=P.transparent;m.setupLightsView(ae),Re===!0&&be.setGlobalState(b.clippingPlanes,ae),ce&&W.viewport(C.copy(ce)),$.length>0&&Kr($,Q,ae),Te.length>0&&Kr(Te,Q,ae),Fe.length>0&&Kr(Fe,Q,ae),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function $r(P,Q,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ce.id]===void 0&&(m.state.transmissionRenderTarget[ce.id]=new On(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Li:Zn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let Te=m.state.transmissionRenderTarget[ce.id],Fe=ce.viewport||C;Te.setSize(Fe.z*b.transmissionResolutionScale,Fe.w*b.transmissionResolutionScale);let We=b.getRenderTarget(),ke=b.getActiveCubeFace(),$e=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(Y),N=b.getClearAlpha(),N<1&&b.setClearColor(16777215,.5),b.clear(),Xe&&Ne.render(ae);let Ke=b.toneMapping;b.toneMapping=or;let Ze=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),m.setupLightsView(ce),Re===!0&&be.setGlobalState(b.clippingPlanes,ce),Kr(P,ae,ce),Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te),z.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Et=0,$t=Q.length;Et<$t;Et++){let Ft=Q[Et],It=Ft.object,Je=Ft.geometry,Gt=Ft.material,xt=Ft.group;if(Gt.side===pn&&It.layers.test(ce.layers)){let Gn=Gt.side;Gt.side=Rn,Gt.needsUpdate=!0,Yi(It,ae,ce,Je,Gt,xt),Gt.side=Gn,Gt.needsUpdate=!0,ut=!0}}ut===!0&&(Z.updateMultisampleRenderTarget(Te),Z.updateRenderTargetMipmap(Te))}b.setRenderTarget(We,ke,$e),b.setClearColor(Y,N),Ze!==void 0&&(ce.viewport=Ze),b.toneMapping=Ke}function Kr(P,Q,ae){let ce=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Te=P.length;$<Te;$++){let Fe=P[$],We=Fe.object,ke=Fe.geometry,$e=Fe.group,Ke=Fe.material;Ke.allowOverride===!0&&ce!==null&&(Ke=ce),We.layers.test(ae.layers)&&Yi(We,Q,ae,ke,Ke,$e)}}function Yi(P,Q,ae,ce,$,Te){P.onBeforeRender(b,Q,ae,ce,$,Te),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(b,Q,ae,ce,P,Te),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=Rn,$.needsUpdate=!0,b.renderBufferDirect(ae,Q,ce,$,P,Te),$.side=yi,$.needsUpdate=!0,b.renderBufferDirect(ae,Q,ce,$,P,Te),$.side=pn):b.renderBufferDirect(ae,Q,ce,$,P,Te),P.onAfterRender(b,Q,ae,ce,$,Te)}function _r(P,Q,ae){Q.isScene!==!0&&(Q=ve);let ce=j.get(P),$=m.state.lights,Te=m.state.shadowsArray,Fe=$.state.version,We=ee.getParameters(P,$.state,Te,Q,ae),ke=ee.getProgramCacheKey(We),$e=ce.programs;ce.environment=P.isMeshStandardMaterial?Q.environment:null,ce.fog=Q.fog,ce.envMap=(P.isMeshStandardMaterial?pe:he).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,$e===void 0&&(P.addEventListener("dispose",ne),$e=new Map,ce.programs=$e);let Ke=$e.get(ke);if(Ke!==void 0){if(ce.currentProgram===Ke&&ce.lightsStateVersion===Fe)return $m(P,We),Ke}else We.uniforms=ee.getUniforms(P),P.onBeforeCompile(We,b),Ke=ee.acquireProgram(We,ke),$e.set(ke,Ke),ce.uniforms=We.uniforms;let Ze=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=be.uniform),$m(P,We),ce.needsLights=db(P),ce.lightsStateVersion=Fe,ce.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ce.currentProgram=Ke,ce.uniformsList=null,Ke}function Qm(P){if(P.uniformsList===null){let Q=P.currentProgram.getUniforms();P.uniformsList=Po.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function $m(P,Q){let ae=j.get(P);ae.outputColorSpace=Q.outputColorSpace,ae.batching=Q.batching,ae.batchingColor=Q.batchingColor,ae.instancing=Q.instancing,ae.instancingColor=Q.instancingColor,ae.instancingMorph=Q.instancingMorph,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function ub(P,Q,ae,ce,$){Q.isScene!==!0&&(Q=ve),Z.resetTextureUnits();let Te=Q.fog,Fe=ce.isMeshStandardMaterial?Q.environment:null,We=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ls,ke=(ce.isMeshStandardMaterial?pe:he).get(ce.envMap||Fe),$e=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ke=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ze=!!ae.morphAttributes.position,ut=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color,$t=or;ce.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&($t=b.toneMapping);let Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,It=Ft!==void 0?Ft.length:0,Je=j.get(ce),Gt=m.state.lights;if(Re===!0&&(se===!0||P!==M)){let An=P===M&&ce.id===w;be.setState(ce,P,An)}let xt=!1;ce.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==We||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==ke||ce.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==be.numPlanes||Je.numIntersection!==be.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==Ke||Je.morphTargets!==Ze||Je.morphNormals!==ut||Je.morphColors!==Et||Je.toneMapping!==$t||Je.morphTargetsCount!==It)&&(xt=!0):(xt=!0,Je.__version=ce.version);let Gn=Je.currentProgram;xt===!0&&(Gn=_r(ce,Q,$));let zs=!1,Hn=!1,ma=!1,Ht=Gn.getUniforms(),$n=Je.uniforms;if(W.useProgram(Gn.program)&&(zs=!0,Hn=!0,ma=!0),ce.id!==w&&(w=ce.id,Hn=!0),zs||M!==P){W.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(S,"projectionMatrix",P.projectionMatrix),Ht.setValue(S,"viewMatrix",P.matrixWorldInverse);let Fn=Ht.map.cameraPosition;Fn!==void 0&&Fn.setValue(S,xe.setFromMatrixPosition(P.matrixWorld)),H.logarithmicDepthBuffer&&Ht.setValue(S,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ht.setValue(S,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Hn=!0,ma=!0)}if($.isSkinnedMesh){Ht.setOptional(S,$,"bindMatrix"),Ht.setOptional(S,$,"bindMatrixInverse");let An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ht.setValue(S,"boneTexture",An.boneTexture,Z))}$.isBatchedMesh&&(Ht.setOptional(S,$,"batchingTexture"),Ht.setValue(S,"batchingTexture",$._matricesTexture,Z),Ht.setOptional(S,$,"batchingIdTexture"),Ht.setValue(S,"batchingIdTexture",$._indirectTexture,Z),Ht.setOptional(S,$,"batchingColorTexture"),$._colorsTexture!==null&&Ht.setValue(S,"batchingColorTexture",$._colorsTexture,Z));let Kn=ae.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&de.update($,ae,Gn),(Hn||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Ht.setValue(S,"receiveShadow",$.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&($n.envMap.value=ke,$n.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Q.environment!==null&&($n.envMapIntensity.value=Q.environmentIntensity),Hn&&(Ht.setValue(S,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&hb($n,ma),Te&&ce.fog===!0&&ue.refreshFogUniforms($n,Te),ue.refreshMaterialUniforms($n,ce,F,J,m.state.transmissionRenderTarget[P.id]),Po.upload(S,Qm(Je),$n,Z)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Po.upload(S,Qm(Je),$n,Z),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ht.setValue(S,"center",$.center),Ht.setValue(S,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(S,"normalMatrix",$.normalMatrix),Ht.setValue(S,"modelMatrix",$.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let An=ce.uniformsGroups;for(let Fn=0,$d=An.length;Fn<$d;Fn++){let es=An[Fn];tt.update(es,Gn),tt.bind(es,Gn)}}return Gn}function hb(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function db(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,Q,ae){let ce=j.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),j.get(P.texture).__webglTexture=Q,j.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Q){let ae=j.get(P);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0};let fb=S.createFramebuffer();this.setRenderTarget=function(P,Q=0,ae=0){D=P,E=Q,U=ae;let ce=!0,$=null,Te=!1,Fe=!1;if(P){let ke=j.get(P);if(ke.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(S.FRAMEBUFFER,null),ce=!1;else if(ke.__webglFramebuffer===void 0)Z.setupRenderTarget(P);else if(ke.__hasExternalTextures)Z.rebindTextures(P,j.get(P.texture).__webglTexture,j.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ze=P.depthTexture;if(ke.__boundDepthTexture!==Ze){if(Ze!==null&&j.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(P)}}let $e=P.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Fe=!0);let Ke=j.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[Q])?$=Ke[Q][ae]:$=Ke[Q],Te=!0):P.samples>0&&Z.useMultisampledRTT(P)===!1?$=j.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[ae]:$=Ke,C.copy(P.viewport),B.copy(P.scissor),O=P.scissorTest}else C.copy(fe).multiplyScalar(F).floor(),B.copy(ye).multiplyScalar(F).floor(),O=we;if(ae!==0&&($=fb),W.bindFramebuffer(S.FRAMEBUFFER,$)&&ce&&W.drawBuffers(P,$),W.viewport(C),W.scissor(B),W.setScissorTest(O),Te){let ke=j.get(P.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ke.__webglTexture,ae)}else if(Fe){let ke=Q;for(let $e=0;$e<P.textures.length;$e++){let Ke=j.get(P.textures[$e]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,ae,ke)}}else if(P!==null&&ae!==0){let ke=j.get(P.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ke.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(P,Q,ae,ce,$,Te,Fe,We=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){W.bindFramebuffer(S.FRAMEBUFFER,ke);try{let $e=P.textures[We],Ke=$e.format,Ze=$e.type;if(!H.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ce&&ae>=0&&ae<=P.height-$&&(P.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+We),S.readPixels(Q,ae,ce,$,Ve.convert(Ke),Ve.convert(Ze),Te))}finally{let $e=D!==null?j.get(D).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(P,Q,ae,ce,$,Te,Fe,We=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke)if(Q>=0&&Q<=P.width-ce&&ae>=0&&ae<=P.height-$){W.bindFramebuffer(S.FRAMEBUFFER,ke);let $e=P.textures[We],Ke=$e.format,Ze=$e.type;if(!H.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ut),S.bufferData(S.PIXEL_PACK_BUFFER,Te.byteLength,S.STREAM_READ),P.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+We),S.readPixels(Q,ae,ce,$,Ve.convert(Ke),Ve.convert(Ze),0);let Et=D!==null?j.get(D).__webglFramebuffer:null;W.bindFramebuffer(S.FRAMEBUFFER,Et);let $t=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await D0(S,$t,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ut),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Te),S.deleteBuffer(ut),S.deleteSync($t),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Q=null,ae=0){let ce=Math.pow(2,-ae),$=Math.floor(P.image.width*ce),Te=Math.floor(P.image.height*ce),Fe=Q!==null?Q.x:0,We=Q!==null?Q.y:0;Z.setTexture2D(P,0),S.copyTexSubImage2D(S.TEXTURE_2D,ae,0,0,Fe,We,$,Te),W.unbindTexture()};let pb=S.createFramebuffer(),mb=S.createFramebuffer();this.copyTextureToTexture=function(P,Q,ae=null,ce=null,$=0,Te=null){Te===null&&($!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Fe,We,ke,$e,Ke,Ze,ut,Et,$t,Ft=P.isCompressedTexture?P.mipmaps[Te]:P.image;if(ae!==null)Fe=ae.max.x-ae.min.x,We=ae.max.y-ae.min.y,ke=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,Ke=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{let Kn=Math.pow(2,-$);Fe=Math.floor(Ft.width*Kn),We=Math.floor(Ft.height*Kn),P.isDataArrayTexture?ke=Ft.depth:P.isData3DTexture?ke=Math.floor(Ft.depth*Kn):ke=1,$e=0,Ke=0,Ze=0}ce!==null?(ut=ce.x,Et=ce.y,$t=ce.z):(ut=0,Et=0,$t=0);let It=Ve.convert(Q.format),Je=Ve.convert(Q.type),Gt;Q.isData3DTexture?(Z.setTexture3D(Q,0),Gt=S.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Gt=S.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Gt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Q.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,Q.unpackAlignment);let xt=S.getParameter(S.UNPACK_ROW_LENGTH),Gn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),zs=S.getParameter(S.UNPACK_SKIP_PIXELS),Hn=S.getParameter(S.UNPACK_SKIP_ROWS),ma=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ft.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ft.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,$e),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ke),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ze);let Ht=P.isDataArrayTexture||P.isData3DTexture,$n=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){let Kn=j.get(P),An=j.get(Q),Fn=j.get(Kn.__renderTarget),$d=j.get(An.__renderTarget);W.bindFramebuffer(S.READ_FRAMEBUFFER,Fn.__webglFramebuffer),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,$d.__webglFramebuffer);for(let es=0;es<ke;es++)Ht&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(P).__webglTexture,$,Ze+es),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(Q).__webglTexture,Te,$t+es)),S.blitFramebuffer($e,Ke,Fe,We,ut,Et,Fe,We,S.DEPTH_BUFFER_BIT,S.NEAREST);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if($!==0||P.isRenderTargetTexture||j.has(P)){let Kn=j.get(P),An=j.get(Q);W.bindFramebuffer(S.READ_FRAMEBUFFER,pb),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,mb);for(let Fn=0;Fn<ke;Fn++)Ht?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Kn.__webglTexture,$,Ze+Fn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Kn.__webglTexture,$),$n?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,An.__webglTexture,Te,$t+Fn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,An.__webglTexture,Te),$!==0?S.blitFramebuffer($e,Ke,Fe,We,ut,Et,Fe,We,S.COLOR_BUFFER_BIT,S.NEAREST):$n?S.copyTexSubImage3D(Gt,Te,ut,Et,$t+Fn,$e,Ke,Fe,We):S.copyTexSubImage2D(Gt,Te,ut,Et,$e,Ke,Fe,We);W.bindFramebuffer(S.READ_FRAMEBUFFER,null),W.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else $n?P.isDataTexture||P.isData3DTexture?S.texSubImage3D(Gt,Te,ut,Et,$t,Fe,We,ke,It,Je,Ft.data):Q.isCompressedArrayTexture?S.compressedTexSubImage3D(Gt,Te,ut,Et,$t,Fe,We,ke,It,Ft.data):S.texSubImage3D(Gt,Te,ut,Et,$t,Fe,We,ke,It,Je,Ft):P.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Te,ut,Et,Fe,We,It,Je,Ft.data):P.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Te,ut,Et,Ft.width,Ft.height,It,Ft.data):S.texSubImage2D(S.TEXTURE_2D,Te,ut,Et,Fe,We,It,Je,Ft);S.pixelStorei(S.UNPACK_ROW_LENGTH,xt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Gn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,zs),S.pixelStorei(S.UNPACK_SKIP_ROWS,Hn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ma),Te===0&&Q.generateMipmaps&&S.generateMipmap(Gt),W.unbindTexture()},this.initRenderTarget=function(P){j.get(P).__webglFramebuffer===void 0&&Z.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Z.setTextureCube(P,0):P.isData3DTexture?Z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Z.setTexture2DArray(P,0):Z.setTexture2D(P,0),W.unbindTexture()},this.resetState=function(){E=0,U=0,D=null,W.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var vl=class n extends He{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Kt;let i=this,r=t.color!==void 0?new De(t.color):new De(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Nn,d=new _,f=new _,h=new _,p=new ct,x=new _(0,0,-1),g=new ft,m=new _,y=new _,v=new ft,b=new ct,A=this.camera,E=new On(s,o,{samples:c,type:Li}),U=new gn({name:l.name!==void 0?l.name:"unspecified",uniforms:gh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});U.uniforms.tDiffuse.value=E.texture,U.uniforms.color.value=r,U.uniforms.textureMatrix.value=b,this.material=U,this.onBeforeRender=function(D,w,M){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(M.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(f,x),y.reflect(d).negate(),y.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(d),A.lookAt(y),A.far=M.far,A.updateMatrixWorld(),A.projectionMatrix.copy(M.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(A.projectionMatrix),b.multiply(A.matrixWorldInverse),b.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=A.projectionMatrix;v.x=(Math.sign(g.x)+B.elements[8])/B.elements[0],v.y=(Math.sign(g.y)+B.elements[9])/B.elements[5],v.z=-1,v.w=(1+B.elements[10])/B.elements[14],g.multiplyScalar(2/g.dot(v)),B.elements[2]=g.x,B.elements[6]=g.y,B.elements[10]=g.z+1-a,B.elements[14]=g.w,i.visible=!1;let O=D.getRenderTarget(),Y=D.xr.enabled,N=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(E),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(w,A),D.xr.enabled=Y,D.shadowMap.autoUpdate=N,D.setRenderTarget(O);let V=M.viewport;V!==void 0&&D.state.viewport(V),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};vl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Mh=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function gx(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function Sn(n,e,t,i=0,r=0){return gx(n,new Vt(1,i),e,t,r)}function wp(n,e,t,i=0){return gx(n,new _i(1),e,t,i)}function xA(n,e){let t=new et;return t.setAttribute("position",new Oe(e.flat(),3)),{tone:n,geometry:t}}function mx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return xA(n,i)}function yA(){let n=[Sn("fur",[0,.012,.011],[.154,.161,.132],1),Sn("fur",[0,-.065,.008],[.128,.079,.108]),Sn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),Sn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),mx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),Sn("skin",[0,-.061,-.133],[.102,.066,.065],1),Sn("skinShade",[0,-.097,-.14],[.076,.031,.047]),Sn("skin",[0,.015,-.15],[.041,.056,.038]),Sn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(Sn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),Sn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),wp("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),Sn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),Sn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),Sn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),Sn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),Sn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),Sn("ink",[e*.047,.031,-.183],[.011,.012,.006]),wp("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),wp("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(mx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function vA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new et;return r.setAttribute("position",new gt(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var _A=vA(yA());function Sh(n=0){let e=new xn({flatShading:!0}),t=new xn({flatShading:!0}),i=new xn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new De("#212128"),ivory:new De("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=s[f];for(let y=h;y<p;y++)u.setXYZ(y,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Mh.length?u:0;if(d===o)return;o=d;let f=Mh[o];for(let[h,p]of Object.entries(f))(s[h]??=new De).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new gt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new He(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new Ct;return u.add(c(_A)),u}}}var Ms=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],bA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],MA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],xx=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],wh=Ms.length-1,yx=Math.min(...Ms.map(n=>n[1])),vx=Math.max(...Ms.map(n=>n[1])),lr=new _(0,0,(yx+vx)/2),Th=new _(.047,.027,(vx-yx)/2),SA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],wA=[-.57,.57,1,.61,-.61,-1],TA=[1,1,-.04,-.91,-.91,-.04];function Ah(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(w=0,M=0,C=0){let B=s.length/3;return s.push(w*r,M,C),B}function c(w,M,C){i?o.push(w,C,M):o.push(w,M,C)}function u(w,M,C,B){c(w,M,C),c(w,C,B)}function d(w,M){for(let C=0;C<w.length;C++){let B=(C+1)%w.length;u(w[B],w[C],M[C],M[B])}}function f(w,M){for(let C=0;C<w.length;C++)c(M,w[(C+1)%w.length],w[C])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Ms.map(([w,M,C,B],O)=>{let Y=O===0||O===wh,N=w*.67,V=-.024+(M+.024)*.69;return{top:l(w,C,M),middle:l(w*1.08,(C+B)/2,Y?M:-.025+(M+.025)*1.04),bottom:l(w,B,M),innerTop:l(N,bA[O],V),innerBottom:l(N,MA[O],V)}});function g(w){let M=x[w],C=x[(w+1)%x.length];return[M.top,C.top,C.middle,C.bottom,M.bottom,M.middle]}let m=new Set(xx.map(({edge:w})=>w));m.add(wh);for(let w=0;w<x.length;w++){let M=x[w],C=x[(w+1)%x.length];c(h,M.innerTop,C.innerTop),c(p,C.innerBottom,M.innerBottom),u(M.innerTop,M.top,C.top,C.innerTop),u(C.innerBottom,C.bottom,M.bottom,M.innerBottom),m.has(w)||(u(C.top,M.top,M.middle,C.middle),u(C.middle,M.middle,M.bottom,C.bottom))}let y=g(wh);t||f(y,l(0,0,Ms[wh][1]));let v=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:w,length:M,splay:C}of xx){let[B,O,Y,N]=Ms[w],[V,J,F,K]=Ms[w+1],ie=V-B,fe=J-O,ye=-fe+ie*C,we=ie+fe*C,Ce=Math.hypot(ye,we),Re=Math.hypot(ie,fe)/2,se=(Y+F-N-K)/4,oe=[],xe=g(w);for(let[ve,Xe,Ge]of SA){let S=[l(),l(),l(),l(),l(),l()];d(xe,S),oe.push({ring:S,distance:ve*M,width:Xe*Re,height:Ge*se}),xe=S}let Ie=l();f(xe,Ie),a.push({x:(B+V)/2,y:(Y+F+N+K)/4,z:(O+J)/2,forwardX:ye/Ce,forwardZ:we/Ce,rows:oe,tip:Ie,length:M,pressure:-1})}let b=new et,A=new Oe(s,3).setUsage(Ln);b.setAttribute("position",A),b.setIndex(o),b.boundingSphere=new ti(new _(0,-.018,-.052),.12),b.boundingBox=new en(new _(-.1,-.082,-.17),new _(.1,.038,.025));let E=!0;function U(w,M=!0){let C=!1;for(let B=0;B<a.length;B++){let O=a[B],Y=w?.[B],N=Number.isFinite(Y)?Pe.clamp(Y,0,1):0;if(N===O.pressure)continue;O.pressure=N,C=!0;let{forwardX:V,forwardZ:J,length:F,rows:K,tip:ie}=O,fe=O.x,ye=O.z,we=O.y,Ce=0,Re=0;for(let{ring:xe,distance:Ie,width:ve,height:Xe}of K){let Ge=Ie/F,S=Pe.smoothstep(Ge,0,.57),k=Pe.smoothstep(Ge,.38,1),z=(.17+N*.83)*S+(.14+N*.76)*k,H=(z+Ce)/2,W=Ie-Re,I=Math.cos(H)*W;fe+=V*I,we-=Math.sin(H)*W,ye+=J*I;for(let j=0;j<xe.length;j++){let Z=wA[j]*ve,he=TA[j]*Xe,pe=he*Math.sin(z);A.setXYZ(xe[j],r*(fe+J*Z+V*pe),we+he*Math.cos(z),ye-V*Z+J*pe)}Ce=z,Re=Ie}let se=F-Re,oe=se*Math.cos(Ce);A.setXYZ(ie,r*(fe+V*oe),we-se*Math.sin(Ce),ye+J*oe)}C&&(A.needsUpdate=!0,E=!0),M&&E&&(b.computeVertexNormals(),E=!1)}U(),b.getAttribute("normal").setUsage(Ln);let D=new He(b,e);return D.castShadow=!0,{mesh:D,pose:U,wristIndices:v}}var Ur=12,Tp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],AA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],_x=Tp.flatMap(([n,e,t])=>Array.from({length:Ur},(i,r)=>{let s=(r-.5)*Math.PI*2/Ur;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function Eh(n,e){let t=_x.length,i=[],r=(J,F,K,ie,fe)=>J.push(F,K,ie,F,ie,fe);function s(J,F,K=!1){for(let ie=1;ie<F.length-1;ie++)K?J.push(F[0],F[ie+1],F[ie]):J.push(F[0],F[ie],F[ie+1])}let o=(J,F)=>J*Ur+(F+Ur)%Ur;for(let J=0;J<Tp.length-1;J++)for(let F=0;F<Ur;F++)(J===2||J===3)&&(F===0||F===6)||r(i,o(J,F),o(J+1,F),o(J+1,F+1),o(J,F+1));s(i,Array.from({length:Ur},(J,F)=>o(0,F))),s(i,Array.from({length:Ur},(J,F)=>o(Tp.length-1,F)),!0);let a=t,l=e.map(({geometry:J,wristIndices:F},K)=>{let ie=K===0?6:0,fe=[o(4,ie),o(4,ie+1),o(3,ie+1),o(2,ie+1),o(2,ie),o(3,ie)],ye=[fe,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],we=ye.at(-1),Ce=new Array(J.attributes.position.count);F.forEach((oe,xe)=>{Ce[oe]=we[xe]});for(let oe=0;oe<Ce.length;oe++)Ce[oe]??=a++;let Re=[];for(let oe=0;oe<J.index.count;oe++)Re.push(Ce[J.index.getX(oe)]);for(let oe=0;oe<ye.length-1;oe++)for(let xe=0;xe<6;xe++){let Ie=(xe+1)%6;r(i,ye[oe][xe],ye[oe][Ie],ye[oe+1][Ie],ye[oe+1][xe])}let se=[];return s(se,we),{socket:fe,rings:ye,wrist:we,wristIndices:F,remap:Ce,skin:Re,cap:se,sign:K===0?-1:1}}),c=new et,u=new Oe(a*3,3).setUsage(Ln);c.setAttribute("position",u);let d=new He(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(J,F)=>new cs([...i,...l.flatMap((K,ie)=>F&1<<ie?K.skin:K.cap)],1));c.setIndex(f[0]);let h=new _,p=new _,x=new _,g=new _,m=new _,y=new _,v=new _,b=new _,A=new _,E=new qe,U=new qe,D=new qe,w=new _(0,0,-1),M=new qe().setFromEuler(new tn(-1.42,0,0)),C=[.24,.62,.94,.56],B=[.089,.084,.069,.054,.037],O=0,Y=0,N=!0;function V(J,F,K,ie,fe){let ye=!!(J[0]||J[1]);if(!ye&&!N&&O===K&&Y===ie)return;O=K,Y=ie,N=ye;for(let Ce=0;Ce<t;Ce++){let[Re,se,oe]=_x[Ce];u.setXYZ(Ce,Re*K,se*ie,oe*K)}let we=0;for(let Ce=0;Ce<l.length;Ce++){let Re=l[Ce],se=J[Ce],oe=e[Ce].geometry.attributes.position,xe=!!se,Ie=Re.wristIndices;xe&&fe&&(we|=1<<Ce),p.set(0,0,0);for(let ve of Re.socket)p.add(h.fromBufferAttribute(u,ve));p.multiplyScalar(1/6),g.set(0,0,0);for(let ve of Ie)g.add(h.fromBufferAttribute(oe,ve));g.multiplyScalar(1/6).applyQuaternion(se?.quaternion??M),xe?g.add(se.position):g.add(h.set(p.x+Re.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),y.copy(m).normalize(),v.set(Re.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Re.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),xe&&x.addScaledVector(v,Math.sqrt(Math.max(.007,F**2-m.lengthSq()*.25))*.72),E.setFromUnitVectors(w,y.subVectors(x,p).normalize()),U.copy(se?.quaternion??M);for(let ve=0;ve<4;ve++){let Xe=ve===3;A.lerpVectors(Xe?x:p,Xe?g:x,C[ve]),D.copy(E).slerp(U,Xe?.79:ve*.19);for(let Ge=0;Ge<6;Ge++){let S=AA[Ge],k=B[ve];b.set(S[0]*k,S[1]*k*.84,0).applyQuaternion(D).add(A),u.setXYZ(Re.rings[ve+1][Ge],b.x,b.y,b.z)}}for(let ve=0;ve<Re.remap.length;ve++)b.fromBufferAttribute(oe,ve).applyQuaternion(U),xe?b.add(se.position):b.add(h.set(p.x+Re.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Re.remap[ve],b.x,b.y,b.z)}c.index!==f[we]&&c.setIndex(f[we]),u.needsUpdate=!0,c.computeVertexNormals()}return V([null,null],.42,1,1,!1),{mesh:d,pose:V}}function Uo(n,e){let t=new vi;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new ir(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var bx=.1,EA=45,Mx=55,_l=128,Ap=96,CA=[new De("#ffdc4d"),new De("#ff5d35"),new De("#bfc4c8")],RA=new _(0,0,-1);function Ep(){let n=new Ct,e=new vt({color:"#596974",roughness:.38,metalness:.6}),t=new vt({color:"#29323e",roughness:.68}),i=new Rt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new He(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new vt({color:"#7f4231",roughness:.46,metalness:.34});return r(Uo([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(Uo([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new nn(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new it(.054,.014,.073),s,.035,.045,-.099),r(new it(.018,.008,.023),i,.035,.063,-.131),n}function Sx(n,{impact:e,onShot:t}){let i=Ep(),r=new He(new Vt(.045,0),new Rt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new et,o=new Oe(_l*18,3).setUsage(Ln),a=new Oe(_l*18,3);for(let O=0;O<_l;O++)for(let Y=0;Y<6;Y++){let N=CA[Math.floor(Y/2)];a.setXYZ(O*6+Y,N.r,N.g,N.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new hs(s,new Ri({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Oe(Ap*3,3).setUsage(Ln),u=new et;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new qa(u,new vo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:ai}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:_l},()=>({p:new _,d:new _,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Ap},()=>({p:new _,v:new _,life:0})),p=new _,x=new _,g=new _,m=0,y=0,v=0,b=0,A=0,E=!1;function U(O,Y,N,V){for(let J=0;J<N;J++){let F=h[y++%Ap];F.p.copy(O),F.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(V).addScaledVector(Y,.55),F.life=.12+Math.random()*.21}}function D(O,Y,N){let V=f[m++%_l];return V.p.copy(O),V.d.copy(RA).applyQuaternion(Y),V.distance=0,V.active=!0,V.authoritative=N,V}function w(O){let Y=D(O.position,O.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),U(p,Y.d,4,2.2),A=.055,v++,t?.(O.position,O.quaternion)}function M(O,Y,N){let V=D(O,Y,N);U(V.p,V.d,4,2.2),l.visible=!0}function C({dt:O,aim:Y,firing:N}){if(!Y&&!i.visible&&!l.visible&&!d.visible)return;if(O=Math.max(0,Math.min(O,.12)),i.visible=!!Y,Y&&(i.position.copy(Y.modelPosition??Y.position),i.quaternion.copy(Y.quaternion)),Y&&N){if(E)for(b-=O;b<=0;)w(Y),b+=bx;else w(Y),b=bx;E=!0}else b=0,E=!1;A=Math.max(0,A-O),r.visible=!!Y&&A>0,r.material.opacity=A/.055;let V=0;for(let F of f){if(!F.active)continue;let K=Math.min(EA*O,Mx-F.distance),ie=K>0?e?.(F.p,F.d,K,F.authoritative):null,fe=ie==null?K:Math.max(0,Math.min(K,ie));F.p.addScaledVector(F.d,fe),F.distance+=fe,ie!=null&&(g.copy(F.d).negate(),U(F.p,g,8,4.2)),F.active=ie==null&&F.distance<Mx;let ye=Math.min(.82,F.distance);for(let we=0;we<3;we++)for(let Ce=0;Ce<2;Ce++){let Re=(we+Ce)/3;x.copy(F.p).addScaledVector(F.d,-ye*Re),o.setXYZ(V++,x.x,x.y,x.z)}}l.visible=V>0,V>0&&(o.needsUpdate=!0),s.setDrawRange(0,V);let J=0;for(let F of h)F.life<=0||(F.life-=O,F.v.y-=5*O,F.p.addScaledVector(F.v,O),F.life>0&&c.setXYZ(J++,F.p.x,F.p.y,F.p.z));d.visible=J>0,J>0&&(c.needsUpdate=!0),u.setDrawRange(0,J)}function B(){for(let O of f)O.active=!1;for(let O of h)O.life=0;b=A=0,E=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:C,reset:B,replay:M,get shotsFired(){return v}}}var wx=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],IA=new _(0,1,0);function Ch(n){let e=new Ct,t=new vt({color:"#2c4750",roughness:.43,metalness:.47}),i=new vt({color:"#899fa3",roughness:.46,metalness:.57}),r=new Rt({toneMapped:!1});function s(h,p,x,g,m,y=0){let v=new He(h,p);return v.position.set(x,g,m),v.rotation.x=y,e.add(v),v}s(Uo([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(Uo([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new nn(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new nn(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new it(.044,.009,.038),r,.038,.069,-.023);let o=new He(new nn(.002,.003,1,5,1,!0),new Rt({transparent:!0,opacity:.52,depthWrite:!1,blending:ai,toneMapped:!1})),a=new He(new Vt(.012,0),new Rt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new _,c=new _,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(wx[h-1]??wx[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(IA,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var PA="wss://clouddata.turbowarp.org",LA="itssoren.github.io/VR/gorilla-lab/",Ph={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Fo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),Ex="\u2601 GorillaHost",bl=["ARENE1","ARENE2","ARENE3"],DA=new Map([[Ex,"vr"],[Ph.vr,"vr"],[Ph.pc,"pc"],...Fo.map(n=>[n,"player"])]),Rp=53,Rh=4400,Cx=64e3,UA=100,FA=200,NA=450,Rx=6,Xt=(n,e)=>Math.round(n).toString().padStart(e,"0");function Ml(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function Ss(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function BA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Xt(e,7)+a.map(c=>Xt(c*100+2e4,5)).join("")+Xt(Math.round(l*10)%3600,4)+Xt(o,6)}function OA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function Ix({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,g="",m=-1/0,y=null,v=0,b=0,A=1/0,E=0,U="offline",D=!1,w=-1,M=0,C=[],B=1/0,O=350,Y=1/0,N=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function F(S,k){U=S,n(k)}function K(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ie(){return[...c.values()].map(S=>S.pose).filter(Boolean)}function fe(){let S=ie().filter(W=>h==="vr"?W.role!=="vr":W.role==="vr"),k=W=>Number(W.ready)*2+ +(W.role==="pc"),z=S.find(W=>W.id===y?.id)??null,H=S.reduce((W,I)=>!W||k(I)>k(W)?I:W,z);H!==y&&(y=H,e(y))}function ye(S){for(let k of c.values())k.pose&&t(null,k.pose),k.pose=k.candidate=null;S&&c.clear(),fe()}function we(){let S=f;if(f=null,S){S.onopen=S.onmessage=S.onerror=S.onclose=null;try{S.close()}catch{}}}function Ce(){we(),h=null,p="",A=1/0,D=!1,w=-1,C=[],V=[],ye(!0),F("offline","Hors ligne")}function Re(S){let k=Math.min(3e4,1500*2**Math.min(E++,5));A=a()+k,F("retry","TurboWarp d\xE9connect\xE9 ("+S+") \xB7 reconnexion automatique au salon "+p)}function se(S){let k=!1;for(let[z,H]of c)H.pose&&S-H.pose.arrival>Rh&&(t(null,H.pose),H.pose=null,k=!0),H.candidate&&S-H.candidate.arrival>Rh&&(H.candidate=null),S-H.lastArrival>6e4&&c.delete(z);k&&fe()}function oe(S,k,z,H){let W=YA(z.value,null);if(!W||W.id===x)return;let I=c.get(W.id);if(!I){if(c.size>=64)return;I={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:H,pose:null,candidate:null},c.set(W.id,I)}if(W.time<=I.lastTime)return;let j=I.pose??I.candidate;if(j&&W.time-j.time>Rh+H-j.arrival){if(I.pose)return;I.candidate=null}I.lastTime=W.time,I.lastArrival=H;let Z={...W,ready:W.ready??!0,protocol:W.protocol??(W.ready===void 0?3:4),role:S,channel:k,received:o(),arrival:H},he=I.candidate;if(!I.pose&&(!he||he.channel!==k||he.map!==Z.map||H-he.arrival>Rh)&&(W.ready!==void 0||Math.abs(W.time-Z.received)>25e3)){I.candidate=Z;return}if(I.candidate=null,!I.pose&&he?.objects&&he.ready&&he.map===Z.map&&!Z.objects&&(Z.objects=he.objects),I.pose=Z,h==="vr"&&S==="vr"&&Z.ready)if(Y===1/0||he?.arrival<Y||W.id<x)h="player",g=Fo[x%Fo.length],F("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(J.received++,J.bytesReceived+=z.value.length,t(Z),fe(),!(!D||!Z.ready||Z.map!==w)){H-I.shotWindow>=1e3&&(I.shotWindow=H,I.shotCount=0);for(let{seq:pe,position:R,quaternion:T}of Z.shots??[])pe<=I.lastShot||(I.lastShot=pe,!(I.shotCount>=14||(R.x-Z.x)**2+(R.y-Z.y)**2+(R.z-Z.z)**2>7**2)&&(I.shotCount++,r({position:R,quaternion:T},Z)));if(!(h!=="vr"||S!=="player"||W.actionTarget!==x))for(let{seq:pe,action:R}of W.actions)pe<=I.lastAction||(I.lastAction=pe,i(R,Z))}}function xe(){let S;try{S=new s(PA)}catch{return!1}return f=S,b=a(),m=-1/0,Y=1/0,F("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),S.onopen=()=>{f===S&&(v=a(),S.send(JSON.stringify({method:"handshake",project_id:LA+p,user:"player"+x})+`
`),F("open",K()))},S.onmessage=k=>{if(f!==S||typeof k.data!="string"||k.data.length>105e4)return;let z=a();se(z);for(let H of k.data.split(`
`)){if(!H.trim())continue;let W;try{W=JSON.parse(H)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",H.slice(0,200));continue}let I=DA.get(W?.name);W?.method!=="set"||!I||oe(I,W.name,W,z)}},S.onerror=()=>{f===S&&F("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},S.onclose=k=>{if(f!==S)return;let z=k.code;if(we(),ye(!1),C=[],V=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(z)){Re(z);return}h=null,p="";let H={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[z];F("error","TurboWarp d\xE9connect\xE9 ("+z+")"+(H?" \xB7 "+H:k.reason?" \xB7 "+k.reason.slice(0,100):""))},!0}function Ie(S,k){let z=Ml(S);return!/^[A-Z0-9]{5,12}$/.test(z)||!["vr","pc","player"].includes(k)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===k&&p===z?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(ye(!0),x=Math.floor(1e6+l()*8999999),h=k,p=z,g=Ph[h]??Fo[x%Fo.length],O=350,h==="vr"&&bl.includes(p)&&(g=x%2===0?Ph.vr:Ex,O=750+x%150),M=N=0,V=[],J={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},E=0,A=B=1/0,xe()?!0:(h=null,p="",F("error","WebSocket indisponible."),!1))}function ve(S,k){let z=S.hand||S.type==="world"?5:4;if(h!=="player"||U!=="open"||!y?.ready||y.protocol<z||y.map!==k||!Ip(S)||M>=99999999)return!1;let H=a();return C=C.filter(W=>W.expires>=H&&W.target===y.id&&W.map===k),C.length>=8?!1:(C.push({action:{...S},seq:++M,expires:H+1800,target:y.id,map:k}),!0)}function Xe(S,k,z){if(!h||h==="pc"||U!=="open"||N>=99999999)return;let H=Oo(S),W=zo(k);if(!H||!W)return;let I=a();V=V.filter(j=>j.expires>=I&&j.map===z).slice(-(Rx-1)),V.push({record:Xt(++N,8)+H+W,expires:I+NA,map:z})}function Ge(S){let k=a();D=!!S&&S.ready!==!1,w=S?.map??-1,se(k),h&&!f&&k>=A&&(A=1/0,xe()||Re(1006)),f&&f.readyState===0&&k-b>1e4&&(we(),Re(1006)),J.bufferedBytes=f?.bufferedAmount??0;let z=h==="pc"?FA:UA;if(!S||!h||f?.readyState!==1||J.bufferedBytes>4096||k-v<(h==="vr"?O:350)||k-m<z)return!1;if(h==="player"){let he=ie().filter(R=>R.role==="player"),pe=he.find(R=>R.channel===g);if(pe?B=Math.min(k,B):B=1/0,pe&&(pe.id<x||k-B>=800)){let R=Fo.find(T=>!he.some(X=>X.channel===T));if(!R)return U!=="capacity"&&F("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=R,B=1/0}}(E||U==="capacity")&&(E=0,F("open",K()));let H=Math.round(d+k-u),W=BA({...S,time:H,id:x});if(!W)return!1;C=C.filter(he=>he.expires>=k&&he.target===y?.id&&he.map===S.map),V=V.filter(he=>he.expires>=k&&he.map===S.map);let I=J.bufferedBytes===0?S.objectFeed?.(k):null,j=typeof S.avatar=="function"?S.avatar():S.avatar,Z=XA(W,j,I,{version:5,ready:S.ready!==!1,actions:C,actionTarget:C[0]?.target??0,shots:V,score:S.score});return m=k,h==="vr"&&(Y=Math.min(Y,k)),f.send(JSON.stringify({method:"set",name:g,value:Z})+`
`),J.sent++,J.bytesSent+=Z.length,!0}return{join:Ie,leave:Ce,tick:Ge,sendAction:ve,queueShot:Xe,get stats(){return{...J}},get role(){return h},get code(){return p},get state(){return U},get remote(){return y},get peers(){return ie()}}}var zA=15,VA=12,Px=44,Ih=15,Cp=35,Oo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Xt(e*100+2e4,5)).join(""):null;function No(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var zo=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Xt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Bo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function kA(n){let e=Oo(n.mesh.position),t=zo(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>Rp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Xt(i,5)+Xt(r,2)+s+o+Xt(a,8)+e+t}function GA(n){return Xt(n,5)+"99"+"0".repeat(Px-7)}function HA(n){if(!n)return null;let e=zo(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Oo(l.position),u=l&&zo(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(zA+VA)}),r=Xt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Xt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+Xt(n.color??0,2)+a}function Ip(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Rp?"10"+Xt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Xt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Xt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Xt(i,5):null}function WA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),Ip(s)===n?s:null}function qA(n){let e=Oo(n?.position),t=zo(n?.quaternion),i=Oo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function XA(n,e,t,i=null){let r=HA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Xt(p,8)+Ip(x)).join(""),a=i.version===5,l=a&&Oo(e?.gun?.position),c=a&&zo(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Xt(d.length,1)+d.map(p=>p.record).join("")+Xt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+qA(r?e.tool:null)+Xt(i.actionTarget??0,7)+Xt(o.length/Ih,1)+o+f;return h.length+1+s.length>Cx&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function Tx(n,e,t){let i=Bo(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:No(n,o+1),quaternion:Bo(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function YA(n,e){if(typeof n!="string"||n.length>Cx||!/^[0-9]+$/.test(n))return null;let t=OA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:Px,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=Tx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=No(n,a+2),f=Bo(n,a+17),h=No(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*Ih+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=Ih){let u=Number(n.slice(a,a+8)),d=WA(n.slice(a+8,a+Ih));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=No(n,a+1),h=Bo(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>Rx||n.length<a+u*Cp+7)return null;t.shots=[];let d=0;for(let f=a+u*Cp;a<f;a+=Cp){let h=Number(n.slice(a,a+8)),p=No(n,a+8),x=Bo(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=Tx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=No(n,c+10),g=Bo(n,c+25);if(d>Rp||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var ZA=.45,Ax=2.5;function Lx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=ZA&&!d.frozen&&(d.velocity.lengthSq()>=Ax**2||d.angular.lengthSq()*d.radius**2>=Ax**2);if(!l&&!p&&!h?.fast)continue;let x=kA(d);if(!x)continue;c?.add(f);let g=x!==h?.record;g&&e.set(f,{record:x,until:s+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:GA(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Dx=qt.DEFAULT_UP,jA=15,Ux=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function JA(){let n=new Ct,e=new He(new Vt(.155,1),new vt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new He(new bi(.23,.018,5,20),new Rt({color:"#84e6ff",transparent:!0,opacity:.85,blending:ai,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new He(new nr(.11,.28,9,1,!0),new Rt({color:"#55c7ff",transparent:!0,opacity:.45,side:pn,blending:ai,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function QA(){let n=new Ct,e=new Ct,t=Sh(0),i=t.createHead(),r=["left","right"].map(m=>({skin:Ah(m,t.hand,{openWrist:!0}),position:new _,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=Eh(t.fur,r.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=Ch(e),l=null,c=new _,u=[null,null],d=new _,f=new qe,h=new qe,p=new qe,x={mode:0,position:new _,quaternion:new qe,end:new _};function g(m,y,v){let b=m.avatar,A=1-Math.exp(-v*32);if(!b){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(b.head).premultiply(f),i.quaternion.slerp(p,A),d.set(0,0,-1).applyQuaternion(i.quaternion);let E=Pe.smoothstep(-d.y,.28,.94),U=Math.max(.38,b.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*U,.24*E),o.rotation.x=-.5*E,h.copy(o.quaternion).invert(),t.setColor(b.color??0);for(let M=0;M<r.length;M++){let C=r[M],B=b.hands[M];if(u[M]=B?C:null,!B){C.tracked=!1;continue}c.copy(B.position).sub(m).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(B.quaternion).premultiply(f).premultiply(h),C.tracked?(C.position.lerp(c,A),C.quaternion.slerp(p,A)):(C.position.copy(c),C.quaternion.copy(p)),C.tracked=!0;for(let O=0;O<3;O++)C.pressure[O]+=((B.pressure?.[O]??0)-C.pressure[O])*A;C.skin.pose(C.pressure,!1)}if(s.pose(u,b.armSpan*.5,.97,U,!0),b.gun){l||(l=Ep(),l.visible=!1,e.add(l));let M=l.visible?A:1;l.position.lerp(b.gun.position,M),l.quaternion.slerp(p.copy(b.gun.quaternion),M),l.visible=!0}else l&&(l.visible=!1);let D=b.tool;if(!D){a.hide(),x.mode=0;return}let w=x.mode?A:1;x.mode=D.mode,x.position.lerp(D.position,w),x.quaternion.slerp(p.copy(D.quaternion),w),x.end.lerp(D.end,w),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of r)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Fx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Nx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=Lx(),d=0,f=-1,h=-1,p="",x=0;function g(){let S=e();return S!==p&&(p=S,x=Ss(S)),x}function m(S){return!!S?.ready&&S.map===g()}function y(S){let k=c.get(S);k&&(n.remove(k.mesh),k.mesh.material?.dispose(),c.delete(S))}function v(){for(let S of c.keys())y(S);d=0,f=-1,h!==-1&&(h=-1,r?.(null))}function b(S,k){if(S.color===k.color&&S.style===k.style)return;S.color=k.color,S.style=k.style;let z=S.mesh.material;if(z?.color){if(z.color.setHex(k.color),k.style===0){Object.assign(z,S.baseMaterial),S.baseEmissive&&z.emissive.copy(S.baseEmissive),z.needsUpdate=!0;return}z.roughness=[.44,.94,.12,.16,.4][k.style],z.metalness=[.1,0,.87,.12,0][k.style],z.opacity=k.style===3?.4:1,z.transparent=k.style===3,z.depthWrite=!z.transparent,z.emissive?.copy(z.color),z.emissiveIntensity=k.style===4?1.65:0,z.needsUpdate=!0}}function A(S){if(!m(S)){v();return}if((d!==S.id||f!==S.map)&&(v(),d=S.id,f=S.map),S.avatar&&S.avatar.light!==h&&(h=S.avatar.light,r?.(h)),!S.objects)return;let k=S.objects.full?new Set:null;for(let z of S.objects.records){if(z.removed){y(z.id);continue}k?.add(z.id);let H=c.get(z.id);if(H&&H.type!==z.type&&(y(z.id),H=null),!H){let I=i?.(z.type);if(!I)continue;let{roughness:j,metalness:Z,transparent:he,depthWrite:pe,opacity:R,emissiveIntensity:T}=I.material??{},X={roughness:j,metalness:Z,transparent:he,depthWrite:pe,opacity:R,emissiveIntensity:T};I.userData.netId=z.id,I.userData.netType=z.type,H={mesh:I,baseMaterial:X,baseEmissive:I.material?.emissive?.clone(),type:z.type,target:new _().copy(z.position),quaternion:new qe().copy(z.rotation),velocity:new _,time:S.time},I.position.copy(H.target),I.quaternion.copy(H.quaternion),c.set(z.id,H),n.add(I)}let W=(S.time-H.time)/1e3;W>.06&&W<.65&&!(z.flags&6)?H.velocity.copy(z.position).sub(H.target).multiplyScalar(1/W).clampLength(0,23):H.velocity.set(0,0,0),H.target.copy(z.position),H.quaternion.copy(z.rotation),H.time=S.time,H.flags=z.flags,H.frequent=W>.06&&W<.16,H.received=S.arrival,H.mesh.userData.netFlags=z.flags,H.mesh.userData.held=!!(z.flags&1),b(H,z)}if(k)for(let z of c.keys())k.has(z)||y(z)}let E=new _;function U(S,k,z){let H=1-Math.exp(-S*22),W=1-Math.exp(-S*32);for(let I of c.values()){if(I.mesh.visible=k,!k)continue;let j=I.frequent?W:H,Z=I.flags&6?0:Math.min(I.frequent?.1:.12,Math.max(0,(z-I.received)/1e3));E.copy(I.target).addScaledVector(I.velocity,Z),I.mesh.position.distanceToSquared(E)>16||I.flags&6&&I.mesh.position.distanceToSquared(I.target)<1e-4?I.mesh.position.copy(E):I.mesh.position.lerp(E,j),I.mesh.quaternion.slerp(I.quaternion,j),I.flags&6&&I.mesh.quaternion.angleTo(I.quaternion)<.008&&I.mesh.quaternion.copy(I.quaternion),I.mesh.updateMatrixWorld(!0)}}let D=S=>document.querySelector(S),w=D("#cloud-status"),M=D("#cloud-room"),C=D("#cloud-camera"),B=-1/0,O=0,Y="Hors ligne",N=0;function V(S){O=S,C.textContent="Cam\xE9ra : "+Ux[S]}function J(){V((O+1)%Ux.length)}C.onclick=J;let F=Ix({onStatus(S){Y=S,w.textContent=S,a?.()},onPose(S){F.role!=="vr"&&A(S)},onPeer(S,k){if(!S){let W=l.get(k.id);W?.art&&(Fx(W.art.model),Fx(W.art.toolRoot),W.art.dispose?.()),l.delete(k.id);return}let z=l.get(S.id);z||(z={art:null,motion:new _,handMotion:[new _,new _]},l.set(S.id,z));let H=z.pose;z.motion.set(0,0,0);for(let W of z.handMotion)W.set(0,0,0);if(H&&H.map===S.map){let W=(S.time-H.time)/1e3;if(W>=.055&&W<=.65){z.motion.set(S.x-H.x,S.y-H.y,S.z-H.z).multiplyScalar(1/W),z.motion.lengthSq()>=18**2&&z.motion.set(0,0,0);for(let I=0;I<2;I++){let j=H.avatar?.hands[I],Z=S.avatar?.hands[I];j&&Z&&z.handMotion[I].copy(Z.position).sub(j.position).multiplyScalar(1/W).clampLength(0,23)}}}z.pose=S},onAction:s,onShot:o}),K=Ml(new URLSearchParams(location.search).get("room")??"");function ie(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),S=>(S%36).toString(36)).join("").toUpperCase()}M.value=/^[A-Z0-9]{5,12}$/.test(K)?K:ie();function fe(S,k=M.value){let z=Ml(k);if(!(F.role===S&&F.code===z)){if(!/^[A-Z0-9]{5,12}$/.test(z)){w.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}F.role&&F.leave(),F.join(z,S)&&(M.value=z,S!=="vr"&&D("#game").focus(),u.reset(),V(0),t(Ss(z)),p="")}}D("#cloud-vr").onclick=()=>fe("vr"),D("#cloud-new").onclick=()=>fe("vr",ie());for(let[S,k]of bl.entries())D(`#public-join-${S}`).onclick=()=>fe("player",k),D(`#public-host-${S}`).onclick=()=>fe("vr",k);D("#cloud-pc").onclick=()=>fe("pc");let ye=D("#cloud-player");ye&&(ye.onclick=()=>fe("player")),D("#cloud-leave").onclick=()=>{N=0,F.leave()},D("#cloud-copy").onclick=async()=>{let S=new URL(location.href);S.searchParams.set("room",F.code||Ml(M.value));try{await navigator.clipboard.writeText(S.href),w.textContent="Lien copi\xE9."}catch{w.textContent=S.href}N=performance.now()+2500},addEventListener("pagehide",()=>F.leave());let we=new _,Ce=new _,Re=new _,se=new _,oe=0;function xe({dt:S,position:k,yaw:z,pitch:H,camera:W,rig:I,keys:j,flat:Z}){let he=Z?.movement,pe=Number(j.has("KeyD"))-Number(j.has("KeyQ")||j.has("KeyA"))+(he?.x??0),R=Number(j.has("KeyS"))-Number(j.has("KeyZ")||j.has("KeyW"))+(he?.z??0);Z?.consumeJump?.()&&(oe=.26),oe=Math.max(0,oe-S);let T=Number(j.has("Space")||oe>0)-Number(j.has("ShiftLeft")||j.has("ShiftRight")),X=j.has("ControlLeft")||j.has("ControlRight")?11:3.2;se.set(pe,T,R).clampLength(0,1).applyAxisAngle(Dx,z),I.position.addScaledVector(se,S*X).clampScalar(-175,175),I.rotation.set(0,z,0),W.position.set(0,0,0),W.rotation.set(H,0,0,"YXZ"),I.updateMatrixWorld(!0),k.copy(I.position)}function Ie(S,k,z,H){for(let W of l.values()){let I=W.pose;if(!(S&&m(I))){W.art&&(W.art.model.visible=!1,W.art.toolRoot&&(W.art.toolRoot.visible=!1));continue}W.art||(W.art=I.role==="pc"?JA():QA(),n.add(W.art.model),W.art.model.visible=!1,W.art.toolRoot&&n.add(W.art.toolRoot));let{model:Z,toolRoot:he}=W.art,pe=Math.min(.12,Math.max(0,(H-I.arrival)/1e3+.025));we.copy(I).addScaledVector(W.motion,pe),!Z.visible||Z.position.distanceToSquared(we)>64?Z.position.copy(we):Z.position.lerp(we,1-Math.exp(-z*34)),Z.rotation.y=I.yaw,Z.visible=!0,he&&(he.visible=!0),W.art.draw(I,k,z)}}function ve(S,k){if(k<N)return;let z=F.remote,H=Y;if(F.state==="open"){let W="Salon "+F.code+" \xB7 ",I=F.peers.filter(j=>j.ready);if(!S)H=W+"quitte la session VR pour utiliser le mode spectateur";else if(F.role!=="vr"&&z&&z.map!==g())H=W+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(F.role!=="vr"&&z&&!z.ready)H=W+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(F.role==="player"&&z&&z.protocol<5)H=W+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(F.role!=="vr"&&m(z))H=W+"h\xF4te connect\xE9";else if(F.role==="vr"){let j=I.filter(m),Z=j.filter(pe=>pe.role==="player").length,he=j.some(pe=>pe.role==="pc");H=W+"tu h\xE9berges \xB7 "+(Z+1)+" joueur"+(Z?"s":""),he&&(H+=" \xB7 spectateur connect\xE9"),!Z&&I.some(pe=>!m(pe))&&(H+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}w.textContent!==H&&(w.textContent=H,a?.())}function Xe(S){let{inVR:k,time:z,dt:H,position:W,yaw:I,camera:j,rig:Z,keys:he,avatar:pe,bodies:R}=S;if(!F.role){v();return}let T=F.role!=="pc"||!k,X=performance.now(),ee=g(),ue=F.role!=="vr"?F.remote:null,re=T&&m(ue);if(!re&&f!==-1&&v(),U(H,re,X),Ie(T,z,H,X),F.role==="pc"&&!k){(S.actions??he).delete("KeyC")&&J();let Me=O===3&&re?[...c.values()].find(Ae=>Ae.type===jA)?.mesh:null,be=re?l.get(ue.id)?.art?.model:null;Me?(Re.set(0,0,-.23).applyQuaternion(Me.quaternion),Z.position.copy(Me.position).add(Re),Z.rotation.set(0,0,0),j.position.set(0,0,0),j.quaternion.copy(Me.quaternion),Z.updateMatrixWorld(!0),W.copy(Z.position)):be&&(O===1||O===2)?(Re.set(0,.72,O===1?-2.7:2.7).applyAxisAngle(Dx,be.rotation.y),Ce.copy(be.position).add(Re),Z.position.lerp(Ce,1-Math.exp(-H*11)),j.position.set(0,0,0),Z.updateMatrixWorld(!0),j.lookAt(be.position),j.updateWorldMatrix(!0,!1),W.copy(Z.position)):xe(S)}F.tick({x:W.x,y:W.y,z:W.z,yaw:I,map:ee,ready:T,avatar:T&&F.role!=="pc"?pe:null,objectFeed:T&&F.role==="vr"&&R?Me=>u.capture(Me,R):null}),X-B>=150&&(B=X,ve(T,X))}function Ge(S){let k=l.get(S)?.pose;return m(k)?k:null}return{update:Xe,getPeer:Ge,connect:fe,leave:()=>F.leave(),get caption(){return w.textContent},handMotion(S,k){return l.get(S)?.handMotion[k]},sendAction(S){return F.sendAction(S,g())},sendShot(S,k){F.queueShot(S,k,g())},get stats(){return F.stats},get role(){return F.role},get connected(){return m(F.remote)},get remoteSpectator(){return F.peers.find(S=>S.role==="pc"&&m(S))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(S){for(let k of c.values())k.mesh.visible&&S(k.mesh)}}}function Lh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new et,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=Bx(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=Bx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Bx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new gt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Uh=0,$A=1,KA=new _,Ox=new ul,Pp=new Nn,zx=new _,Dh=new Bn,Fh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Nh,this.unassigned=new Nh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new Lp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new _;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,KA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Uh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,Ox.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Ox.closestPointToPoint(p.point,!0,zx);let x=zx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,Pp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Pp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(Pp.distanceToPoint(u.point)<0){d.push(Si.create(a,l,c),Si.create(u,l,a),Si.create(u,c,l),Si.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(Si.create(a,c,l),Si.create(u,a,l),Si.create(u,l,c),Si.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>s&&(s=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Uh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=$A;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===Uh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=Si.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Si=class n{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=Uh,this.edge=null}static create(e,t,i){let r=new n,s=new Sl(e,r),o=new Sl(t,r),a=new Sl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Dh.set(e.point,t.point,i.point),Dh.getNormal(this.normal),Dh.getMidpoint(this.midpoint),this.area=Dh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Sl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},Lp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},Nh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var cr=class extends et{constructor(e=[]){super();let t=[],i=[],s=new Fh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var Vx=48,eE=3,tE=128,kx=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),nE=(n,e,t)=>Math.max(e,Math.min(t,n)),iE=()=>structuredClone(kx.shield),wl=(n,e,t,i)=>Number.isFinite(n)?nE(n,t,i):e;function Oh(n){let e=n?.mode==="lathe"?kx.bottle:iE(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Vx?n.points.map(o=>[wl(o?.[0],0,-1.5,1.5),wl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:wl(n?.depth,e.depth,.025,1.5),bevel:wl(n?.bevel,e.bevel,0,.15),segments:Math.round(wl(n?.segments,32,eE,tE))}}function Gx(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Bh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function rE(n,e,t,i){let r=Bh(n,e,t),s=Bh(n,e,i),o=Bh(t,i,n),a=Bh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function sE(n){let e=Oh(n),t=e.mode==="lathe"?e.points:Gx(e);if(t.length<3||t.length>Vx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&rE(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Hx(n){let e=Oh(n),t=sE(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([f,h])=>new ge(Math.max(0,f),h));r[0].y>r.at(-1).y&&r.reverse(),r[0].x>0&&r.unshift(new ge(0,r[0].y)),r.at(-1).x>0&&r.push(new ge(0,r.at(-1).y)),i=new nl(r,e.segments);let s=[],o=i.attributes.position,a=new _,l=new _,c=new _,u=new _,d=i.index.array;for(let f=0;f<d.length;f+=3)a.fromBufferAttribute(o,d[f]),l.fromBufferAttribute(o,d[f+1]),c.fromBufferAttribute(o,d[f+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&s.push(d[f],d[f+1],d[f+2]);i.setIndex(s)}else{let r=Gx(e),s=new vi;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new ir(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new gt(new Float32Array(r*2),2))}return i}var zn=Math.PI*2,zh=.84,ur=128;function Br(n){let e=new Uint8Array(ur*ur*4);for(let i=0;i<ur;i++)for(let r=0;r<ur;r++){let s=(r+.5)/ur,o=(i+.5)/ur,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/zh,1),Math.min(o/zh,1),r,i),l=(r+i*ur)*4;for(let c=0;c<3;c++)e[l+c]=Pe.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new ii(e,ur,ur);return t.colorSpace=ht,t.generateMipmaps=!0,t.minFilter=In,t.magFilter=an,t.needsUpdate=!0,t}function ws(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function st(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new De(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*zh,s.getY(l)*zh):s.setXY(l,.95,.95);return i.setAttribute("color",new gt(a,3)),i}function Or(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:Lh(r),material:new vt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Wx(n,e,t){let i=n/2,r=e/2,s=new vi;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Fr(n,e,t,i,r){return new ir(Wx(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Nr(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=zn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&s.push(g,g+1,m),n[u+1][0]>0&&s.push(g+1,m+1,m)}}let o=new et;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Tl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new _(0,r,0));continue}for(let s=0;s<e;s++){let o=zn*s/e;t.push(new _(i*Math.sin(o),r,i*Math.cos(o)))}}return new cr(t)}function oE(){let t=new il(Wx(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Pe.clamp(i.getX(l)/.098+.5,0,1),u=Pe.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Br((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*zn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[st(Fr(.106,.207,.013,.011,.0019),8425890),st(Fr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),st(Fr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),st(t,16777215,!0),st(Fr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),st(new it(.0036,.024,.004).translate(.055,.029,0),11714250),st(new it(.0036,.015,.004).translate(-.055,.032,0),11385285),st(new it(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(st(new nn(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(st(new fn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(st(new fn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new cr([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return Or("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function aE(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Nr(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Br((a,l,c,u)=>{let d=zn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(y=>Math.exp(-(((f-y+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=ws(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Tl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Or("bread","Baguette de pain",.27,o,[st(r,16777215,!0)],s,.9)}function lE(){let n=Br((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*ws(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Nr([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Nr([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[st(e,16777215,!0),st(t,11056059),st(new nn(.067,.067,.124,10).rotateX(Math.PI/2),9346214),st(new nn(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=zn*s/5;i.push(st(new it(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=Tl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Or("wheel","Roue",1.8,r,i,n,.64,.23)}function cE(){let n=Br((s,o,a,l)=>{let c=ws(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(zn*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Nr([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new bi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+zn*l/5;return new _(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let r=new cr(i);return Or("cup","Tasse",.39,r,[st(e,16777215,!0),st(t,15785922)],n,.37)}function uE(){let n=Nr([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Br((r,s,o,a)=>{let l=9*ws(o,a),c=11*Math.cos(r*zn*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*zn*48+r*zn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*zn*4);return[u,u*1.13,u*1.24]}),t=[st(n,16777215,!0),st(new So(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),st(new fn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),st(new fn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),st(new nn(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),st(new fn(.008,12).translate(0,.035,.0336),15633202)],i=Tl([[.033,-.143],[.054,.133]],6);return Or("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function hE(){let n=Nr([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Br((s,o,a,l)=>{let c=10*ws(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(zn*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(zn*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[st(n,16777215,!0),st(new fn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),st(new So(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),st(new fn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=Tl([[.069,-.112],[.069,.109]],6);return Or("soda","Canette de soda",.35,r,i,t,.42,.27)}function dE(){let n=Nr([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Br((r,s,o,a)=>{let l=15*ws(o,a),c=8*Math.cos(r*zn*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[st(n,16777215,!0),st(Fr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),st(new fn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Tl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Or("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function fE(){let n=Br((r,s,o,a)=>{let l=8*ws(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Nr([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[st(Fr(.138,.22,.061,.016,.004),14788675),st(Fr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),st(new ln(.106,.174).translate(0,-.004,.0395),16777215,!0),st(e,2502456),st(new nn(.014,.017,.016,10).translate(.04,.117,.001),2503482),st(new it(.008,.047,.027).translate(-.072,.014,-.002),3028798),st(new it(.006,.02,.019).translate(-.072,-.043,-.002),3950414),st(new fn(.004,8).translate(.04,.066,.0397),15817792),st(new fn(.004,8).translate(-.04,.066,.0397),7903100),st(Fr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new _(r,l,o),new _(s,l,o),new _(s,l,a),new _(r,l,a)]);return Or("radio","Talkie-walkie",.43,new cr(i),t,n,.61,.08)}function qx(){return[oE(),aE(),lE(),cE(),uE(),hE(),dE(),fE()]}var Vn=new qe,Yt=new _,Yh=new _,pE=new ct,Xx=new WeakMap;function Qh(n){if(n.heightfield||n.objectBody)return null;let e=Xx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=pE.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Xx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function sy(n,e,t){let i=Qh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Zh(n,e,t,i){if(t.heightfield)return AE(n,e,t,i);if(t.objectBody)return my(n,e,t.objectBody,i);if(!sy(n,e,t))return 0;Vn.copy(t.quaternion).invert(),Yt.copy(n).sub(t.position).applyQuaternion(Vn);let r=t.half;Yh.copy(Yt).clamp(t.min,r),i.subVectors(Yt,Yh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(Yt.x),a=r.y-Math.abs(Yt.y),l=r.z-Math.abs(Yt.z);return o<=a&&o<=l?i.set(Math.sign(Yt.x)||1,0,0):a<=l?i.set(0,Math.sign(Yt.y)||1,0):i.set(0,0,Math.sign(Yt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var ot=new _,hr=new _;function qp(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Zh(n,e,u,ot);if(!d||(n.addScaledVector(ot,d+1e-4),ot.y>=.62&&(l=!0,a&&ot.y>a.normal.y&&(a.normal.copy(ot),a.surface=u)),!i))continue;let f=i.dot(ot);f<0&&i.addScaledVector(ot,-f*(Math.abs(f)<.55?1:1+r)),hr.copy(i).addScaledVector(ot,-i.dot(ot)),i.addScaledVector(hr,-Math.min(.95,s*u.friction*o))}return l}var Dp=new _,Ho=[];function Ll(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Ho.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=Qh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Ho.push(h)}for(let h=1;h<=o;h++){Dp.copy(n).lerp(e,h/o);for(let p of Ho){let x=Zh(Dp,t,p,ot);if(x)return r.copy(Dp).addScaledVector(ot,x+.001),s.copy(ot),p}}return null}var Cl=new _,Pl=new _,Wo=new _,oy=new Bn,Rl=new _;function wi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new _().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");s.has(g)||(s.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=b=>new _().fromBufferAttribute(t,n.index?n.index.getX(b):b),g=x(p),m=x(p+1),y=x(p+2),v=new Bn(g,m,y).getNormal(new _);v.lengthSq()>.1&&r.push({a:g,b:m,c:y,n:v})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new en().setFromPoints(i).getSize(new _),u=Math.max(1e-4,e**2*.4),d=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new _().subVectors(p.b,p.a).normalize(),new _().subVectors(p.c,p.b).normalize(),new _().subVectors(p.a,p.c).normalize()]))}}function $h(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Vn.copy(t.quaternion).invert(),Yt.copy(n).sub(t.position).applyQuaternion(Vn),i.faces.every(s=>s.n.dot(Cl.subVectors(Yt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)oy.set(s,o,a).closestPointToPoint(Yt,Rl),r=Math.min(r,Yt.distanceToSquared(Rl));return Math.sqrt(r)}function mE(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Zh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Vn.copy(e.quaternion).invert(),Yt.copy(r.position).sub(e.position).applyQuaternion(Vn),Yh.copy(Yt).clamp(e.min,e.half),Yt.distanceToSquared(Yh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){Cl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Zh(Cl,.007,e,Wo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Cl),t.copy(Wo)):Math.abs(c-o)<.003&&Wo.dot(t)>.98&&(i.lerp(Cl,1/++a),o=Math.max(o,c)))}return o}var Vh=new _,gE=new _,kh=new _,xE=new _,Yx=new qe,Zx=new qe,jx=new _,Up={min:0,max:0},Fp={min:0,max:0};function Jx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}jx.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(jx);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function li(n){return wi(new it(n.x*2,n.y*2,n.z*2))}function Kh(n,e,t){let i=xE.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Yx.copy(n.mesh.quaternion).invert(),Zx.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);Jx(n.shape,o,Yx,Up),Jx(e.shape,o,Zx,Fp);let l=Fp.max-Up.min-a,c=Up.max-Fp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Vh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Vh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){kh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Vh.copy(a).applyQuaternion(e.mesh.quaternion).cross(kh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(gE.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Vn.copy(a.mesh.quaternion).invert(),Yt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Vn);for(let{a:c,b:u,c:d}of a.shape.faces){oy.set(c,u,d).closestPointToPoint(Yt,Rl);let f=Yt.distanceToSquared(Rl);f<l&&(l=f,kh.copy(Rl))}if(!s(Vh.subVectors(Yt,kh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var yE=new _;function vE(n,e,t){Vn.copy(e.quaternion).invert(),Yt.copy(n.mesh.position).sub(e.position).applyQuaternion(Vn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Yt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=Yt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Gp(n,yE.copy(t).negate())-r,a=s+Gp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Xp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return mE(n,e,t,i??Pl);let r=vE(n,e,t)??Kh(n,e,t);return r>0&&i&&cy(n,e,t,i),r}var kp=wi(new _i(1,0).scale(...Th)),Gh={mesh:{position:new _,quaternion:new qe},shape:kp,radius:kp.radius,precise:!0};function ay(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=kp.radius;Ho.length=0;for(let c of i){let u=Qh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Ho.push(c)}Gh.mesh.quaternion.copy(t);let l=Gh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Ho){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?Kh(Gh,d,ot):Xp(Gh,u,ot);if(f>0)return r.copy(l).addScaledVector(ot,f+5e-4),s.copy(ot),u}}return null}function Dl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!sy(n.mesh.position,n.radius,r))continue;let s=Xp(n,r,ot);s<=1e-6||(n.mesh.position.addScaledVector(ot,s),i=!0)}if(!i)break}}var Np=new _,Al=new _,Hh=new _,Bp=new qe,zr=new qe,Qx=new qe;function $x(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function ly(n,e,t,i,r){let{mesh:s,shape:o}=n;Np.copy(s.position),Bp.copy(s.quaternion),Al.subVectors(e,Np);let a=$x(Bp,t,zr),l=Al.length()+a*o.radius,c=fy(o),u=Math.max(1,Math.min(dy,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Hh.set(zr.x,zr.y,zr.z).normalize(),Qx.setFromAxisAngle(Hh,f),Al.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(Al),s.quaternion.premultiply(Qx).normalize(),Dl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(Al.subVectors(s.position,Np).divideScalar(h).clampLength(0,23),.52);let p=$x(Bp,s.quaternion,zr);Hh.set(zr.x,zr.y,zr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Hh,.52)}function Gp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Vn.copy(n.mesh.quaternion).invert(),Wo.copy(e).applyQuaternion(Vn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Wo));return t}var Go=new _,jh=new _,_E=new _,Op=new _,Vo={},ko={};function Kx(n,e,t,i){let{mesh:r,shape:s}=n,o=Gp(n,_E.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Go),i.minV=i.maxV=r.position.dot(jh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Wo)<o-.0015)continue;Op.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Op.dot(Go),c=Op.dot(jh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function cy(n,e,t,i){Math.abs(t.y)<.8?Go.set(-t.z,0,t.x).normalize():Go.set(t.y,-t.x,0).normalize(),jh.crossVectors(t,Go),Kx(n,t,-1,Vo),Kx(e,t,1,ko);let r=(Math.max(Vo.minU,ko.minU)+Math.min(Vo.maxU,ko.maxU))*.5,s=(Math.max(Vo.minV,ko.minV)+Math.min(Vo.maxV,ko.maxV))*.5;i.copy(t).multiplyScalar((Vo.plane+ko.plane)*.5).addScaledVector(Go,r).addScaledVector(jh,s)}var ey=new _;function Jh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)ey.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(ey)}}function ty(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function uy(n){return!n.owner&&!n.frozen}var Ts=new _,As=new _,El=new _,ny=new _,Hp=new _,Wp=new _,bE=new _;function Wh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function hy(n,e,t,i){let{mesh:r,shape:s}=n.body;return Vn.copy(r.quaternion).invert(),Hp.crossVectors(e,t),i.copy(Hp).applyQuaternion(Vn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function qh(n,e,t){return n?.inverseMass?(hy(n,e,t,Wp),n.inverseMass+Hp.dot(Wp)):0}function Xh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(hy(n,e,t,Wp),i))}function zp(n){return n.friction??n.spec?.friction??.78}function iy(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(zp(s)*zp(o)):Math.min(zp(s),t.friction??.78);Ts.subVectors(Pl,s.mesh.position),o&&As.subVectors(Pl,o.mesh.position),Wh(n,Ts,El).sub(Wh(e,As,ny));let l=El.dot(ot),c=!1;if(l<-1e-5){let d=l<-.8?Pe.clamp(r*(t?.bounce??1)*(s.spec?.physics?.bounce??1)*(o?.spec?.physics?.bounce??1),0,.98):0,f=-l*(1+d)/(qh(n,Ts,ot)+qh(e,As,ot));Xh(n,Ts,ot,f),Xh(e,As,ot,-f),Wh(n,Ts,El).sub(Wh(e,As,ny)),hr.copy(El).addScaledVector(ot,-El.dot(ot));let h=hr.length();if(h>1e-5&&a>0){hr.divideScalar(h);let p=Math.min(f*a,h/(qh(n,Ts,hr)+qh(e,As,hr)));Xh(n,Ts,hr,-p),Xh(e,As,hr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(ot,u*n.inverseMass/d),Jh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(ot,-u*e.inverseMass/d),Jh(e)),c=!0}return n.inverseMass&&ot.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,ot.y)),e?.inverseMass&&ot.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-ot.y)),c}function ME(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var dy=96,SE=5;function fy(n){return Math.max(.008,n.thickness*.35)}var Il={substeps:0,active:0,free:0,sleeping:0};function ry(n,e,t,i){n.velocity.y-=t*e*(n.spec?.physics?.gravity??1)*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(bE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function wE(n,e,t){let i=new en().setFromCenterAndSize(n.mesh.position,new _),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*TE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function TE(n){return n.sweepGravity??1}function py(n,e,t,i,r,s){if(Object.assign(Il,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:Qh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,wE(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=uy(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),g=l.some(({box:v,bounds:b})=>ty(x,v,b)),m=c.some(v=>v!==h&&v.collidable!==!1&&x.intersectsBox(u.get(v)));if(p&&!g&&!m){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let v=Math.min(h.angular.length(),30),b=h.velocity.length()+v*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(b*t/fy(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new en,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Jh(y),o.push(y)}for(let h of a)ry(h,t,i,s);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(dy,d):1,Object.assign(Il,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(ry(x,f,i,s),Jh(p))}for(let p=0;p<SE;p++){let x=!1;for(let g of o)if(g.inverseMass)for(let{box:m,bounds:y}of l){if(!ty(g.bounds,m,y))continue;let v=Xp(g.body,m,ot,Pl);v>0&&(x=iy(g,null,m,v,r)||x)}for(let g of o)g.sweepStart=g.bounds.min.x,g.sweepEnd=g.bounds.max.x;o.sort((g,m)=>g.sweepStart-m.sweepStart);for(let g=0;g<o.length;g++){let m=o[g];for(let y=g+1;y<o.length;y++){let v=o[y];if(v.sweepStart>m.sweepEnd)break;if(!m.inverseMass&&!v.inverseMass||m.body.sleeping&&v.body.sleeping&&m.groundY>.9&&v.groundY>.9||!m.bounds.intersectsBox(v.bounds))continue;let b=Kh(m.body,v.body,ot);b<=0||(cy(m.body,v.body,ot,Pl),x=iy(m,v,null,b,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&ME(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,g=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=g?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):g||(p.sleeping=!1),p.sleeping&&Il.sleeping++}}function AE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Vp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function my(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Vp.mesh.position=n,Vp.shape.sphereRadius=e,Kh(Vp,t,i))}function gy(n,e,t,i,r){let s=my(n,e,t,ot);if(s<=0)return!1;n.addScaledVector(ot,s+.001),r?.copy(ot);let o=i.dot(ot);return o<0&&(i.addScaledVector(ot,-o),Math.abs(ot.y)<.6&&uy(t)&&t.velocity.addScaledVector(ot,-Math.min(2.8,-o*.24))),!0}var Zt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),xy=Zt(-24,24,-51,7),yy=34521,Xo={x:0,y:0,z:3},Vr={x:.05,y:1.16,z:5.9},qo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Zt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Zt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Zt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Zt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Zt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Zt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Zt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Zt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Zt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Zt(9,23,-48,-37),sign:[16,-38.2]}},VI=[Zt(-9,-6,-51,7),Zt(6,9,-51,7),Zt(-24,24,-8,-5),Zt(-24,24,-27,-23),Zt(9,23,-37,-34)],vy=[{name:"Glace",bounds:qo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:qo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Zt(-9,9,-51,7)},{name:"Sol ouest",bounds:Zt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Zt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Zt(-24,-23,-51,7)},{name:"Sol est",bounds:Zt(9,23,-51,-48)},{name:"Sol est",bounds:Zt(9,23,-37,7)},{name:"Bordure est",bounds:Zt(23,24,-51,7)}],Ul={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Yo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],_y=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),ed={x:-19.4,y:.68,z:-3.25},by=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),My={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var EE=[0,1,2,3,4,5,7,8,9,10];function Sy(n){_y.forEach(({x:e,z:t},i)=>n(EE[i],new _(e,.8,t)))}function td(){let n=[["Cube",new it(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Vt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new fs(.29),"#d8ae53",0,1],["Brique",new it(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new it(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Vt(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:wi(t,r),material:new vt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:li(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of qx()){let r=wi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Yp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],Fl=null,CE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Es(n){return typeof n=="string"&&CE.has(n.replace(/^custom-model-game-/,""))}function nd(n){let e=n?.parts;return Es(n?.id)||Es(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Es(t?.assetId))}function wy(){if(Fl)return Fl;let n=td(),e=Yp;return Fl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),Fl.set("chrome-sphere",{geometry:new Vt(.54,2),material:new vt({color:"#c8e6ed",metalness:1,roughness:.16})}),Fl}function id(n){return typeof n=="string"&&wy().has(n)}function Zp(n){return wy().get(n)??null}var $p="gorilla-lab-models-v1",Fi=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),RE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,IE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Ay=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),Jp=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),PE=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Nl=(n,e,t,i)=>Number.isFinite(n)?Pe.clamp(n,e,t):i;function sd(n){return{gravity:Nl(n?.physics?.gravity,0,2.5,1),bounce:Nl(n?.physics?.bounce,0,1.65,1)}}function Ey(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Nl(n?.uv?.repeat,.01,100,1),angle:Nl(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Nl(n?.uv?.offset?.[t],-100,100,0))}}var LE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),DE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,UE=/^#[a-f\d]{6}$/i;function Ty(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function kr(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Pe.clamp(n[r],t,i):e)}var Qp=new Set(["box","sphere","capsule","convex"]);function FE(n){if(n?.mode==="box")return{mode:"box",center:kr(n.center,0,-6,6),size:kr(n.size,.5,.025,12)};let e=Math.round(Pe.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Qp.has(n.shape)?n.shape:"box",center:kr(n.center,0,-6,6),size:kr(n.size,.5,.025,12),rotation:kr(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Qp.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function Cs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Fi.models||JSON.stringify(n).length>Fi.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!nd(i)).map(i=>{if(typeof i?.id!="string"||!DE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Fi.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:Ty(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...id(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(LE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:FE(i?.hitbox),...i.physics?{physics:sd(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Es(r?.assetId)).map((r,s)=>({name:Ty(r?.name,`Pi\xE8ce ${s+1}`),...Number.isInteger(r?.group)&&r.group>0&&r.group<=Fi.parts?{group:r.group}:{},shape:r?.shape==="asset"&&id(r?.assetId)?"asset":Object.hasOwn(IE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&id(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Oh(r?.profile)}:{},position:kr(r?.position,0,-3,3),rotation:kr(r?.rotation,0,-360,360),scale:kr(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&UE.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(PE,r?.zone)?{zone:r.zone}:{},...Object.hasOwn(Jp,r?.finish)?{finish:r.finish}:{},...r?.uv?{uv:Ey(r)}:{},surface:Object.hasOwn(Ay,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Fi.textureBytes&&RE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Kp(n){try{let e=(n??globalThis.localStorage)?.getItem($p);if(e&&e.length<=Fi.fileBytes)return Cs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function NE(n){switch(n){case"tetrahedron":return new fs(Math.sqrt(3)/2);case"sphere":return new si(.5,20,12);case"cylinder":return new nn(.5,.5,1,20);case"cone":return new nr(.5,1,20);case"torus":return new bi(.365,.135,8,24);case"capsule":return new Rr(.28,.44,6,16);case"diamond":return new _i(.5);default:return new it(1,1,1)}}var Cy=Object.keys(Ay),jn=64,Bl=4,Ry=2,Ui;function Iy(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function Py(){if(Ui)return Ui;let n=jn*Bl,e=jn*Ry,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/jn)*Bl+Math.floor(r/jn),o=Iy(Cy[s],r%jn,i%jn),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ui=new ii(t,n,e),Ui.colorSpace=ht,Ui.magFilter=an,Ui.minFilter=In,Ui.generateMipmaps=!0,Ui.needsUpdate=!0,Ui}var jp=new Map;function BE(n){if(jp.has(n))return jp.get(n);let e=new Uint8Array(jn*jn*4);for(let i=0;i<jn;i++)for(let r=0;r<jn;r++){let s=Iy(n,r,i),o=(i*jn+r)*4;e.set([s,s,s,255],o)}let t=new ii(e,jn,jn);return t.colorSpace=ht,t.wrapS=t.wrapT=Cn,t.magFilter=an,t.minFilter=In,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,jp.set(n,t),t}function Ly(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function OE(n,e,t){let{projection:i,repeat:r,angle:s,offset:o}=Ey(e),a=Pe.degToRad(s),l=Math.cos(a),c=Math.sin(a),{position:u,normal:d,uv:f}=n.attributes,h=new _,p=new _;for(let x=0;x<u.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){h.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(d,x);let y=Math.abs(p.x),v=Math.abs(p.y),b=Math.abs(p.z);y>=v&&y>=b?(g=h.z,m=h.y):v>=b?(g=h.x,m=h.z):(g=h.x,m=h.y)}f.setXY(x,(g*l-m*c)*r+o[0],(g*c+m*l)*r+o[1])}}function rd(n,e=new _(...n.scale)){let t=n.shape==="asset"?Zp(n.assetId):null,i=n.shape==="custom"?Hx(n.profile):t?.geometry?.clone()??NE(n.shape),r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.attributes.uv||r.setAttribute("uv",new Oe(new Float32Array(r.attributes.position.count*2),2)),n.uv&&OE(r,n,e);let s=n.rotation.map(Pe.degToRad);r.scale(...n.scale),r.rotateX(s[0]),r.rotateY(s[1]),r.rotateZ(s[2]),r.translate(...n.position);let o=new De(n.color),a=r.attributes.position.count,l=new Float32Array(a*3),c=r.attributes.uv,u=Cy.indexOf(n.surface),d=u%Bl,f=Math.floor(u/Bl),h=r.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&h?(l[p*3]=h.getX(p)*o.r,l[p*3+1]=h.getY(p)*o.g,l[p*3+2]=h.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(d+.05+c.getX(p)*.9)/Bl,(f+.05+c.getY(p)*.9)/Ry);return r.setAttribute("color",new gt(l,3)),r}function zE(n){let e=n?.shape==="asset"?Zp(n.assetId):null,t=Jp[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new oi().load(n.texture);a.colorSpace=ht,a.wrapS=a.wrapT=Cn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Cn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new De(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:r}=t??Jp.original;if(!n?.texture)return new vt({vertexColors:!0,map:n?.uv?BE(n.surface):Py(),roughness:i,metalness:r});let s=new oi().load(n.texture);return s.colorSpace=ht,s.wrapS=s.wrapT=Cn,new vt({vertexColors:!0,map:s,roughness:i,metalness:r})}function Gr(n){return n?.parts?.some(Ly)?n.parts.map(zE):new vt({vertexColors:!0,map:Py(),roughness:.68})}function od(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ui&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Ol(n,e=null){let t=n.map(r=>{if(!e||r.uv?.projection!=="metric")return rd(r);let s=new tn(...r.rotation.map(Pe.degToRad),"ZYX"),o=new _(...r.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(s).multiply(e).length())));return rd(r,o)}),i=Lh(t,n.some(Ly));return t.forEach(r=>r.dispose()),i.center(),i.computeBoundingBox(),i}function Zo(n,e=null){let t=Ol(n.parts),i=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&n.parts.some(r=>r.uv?.projection==="metric")&&(t.dispose(),t=Ol(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function em(n){let e=new en;for(let t of n.parts??[]){let i=rd(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function Dy(n){return em(n).getSize(new _)}function Uy(n){let e=em(n),t=e.getCenter(new _),i=e.getSize(new _),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":Qp.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?Pe.clamp(r.precision,8,96):48,center:s?new _(...r.center):t,size:s?new _(...r.size):i,rotation:s?new _(...r.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:i}}function VE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function kE(n,e=null){let t=Uy(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let r=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),s=r.toArray(),o=Math.max(...s),a=s.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...s.filter((d,f)=>f!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new Rr(l,c,Math.max(2,Math.round(i/8)),i):new si(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/r.x,1/r.y,1/r.z),u}if(t.shape==="convex"&&n.parts?.length){let r=Ol(n.parts),s=VE(r,t.precision);if(r.dispose(),s.length>=4)try{let o=new cr(s),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new it(1,1,1)}function zl(n,e=null){let t=Uy(n),i=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5)),r=e?new _(e.x,e.y,e.z):i.clone(),s=t.size.clone().multiply(r).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(r).divide(i),a=kE(n,s);return a.scale(s.x,s.y,s.z),a.rotateX(Pe.degToRad(t.rotation.x)),a.rotateY(Pe.degToRad(t.rotation.y)),a.rotateZ(Pe.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Fy(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=em(n),i=t.getCenter(new _),r=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),s=e?e.clone().divide(r):new _(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=rd(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new _).sub(i).multiply(s),size:l.getSize(new _).multiply(s).max(new _(.01,.01,.01))};return a.dispose(),[c]})}function Ny(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Ol(e.parts),i=t.boundingBox.getSize(new _);return{id:e.id,name:e.name,properties:e.properties,physics:sd(e),geo:t,material:Gr(e),collisionGeo:zl(e),mass:Pe.clamp(i.x*i.y*i.z*9,.18,12)}})}function By(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Ol(e.parts),i=t.boundingBox.getSize(new _),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new He(t,Gr(e));s.castShadow=!0;let o=new Ct;return o.add(s),o}var GE=256,Vy=1/2.6**2,HE=1e4,jo=1e4,WE=10,qE=10,XE=256,YE=16,ld=24,Oy=new WeakMap,Ni=Pe.clamp,Bi=Pe.lerp,cd=n=>n*n*(3-2*n);function _t(n,e,t,i){return Number.isFinite(n)?Ni(n,e,t):i}function ky(n){if(!n)return null;let e=Cs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var ZE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Gy(n,e=YE){return Math.round(_t(n,1,GE,e))}function jE(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return _t(n[e+"Density"],0,jo,0);let s=_t(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return _t(o/t,0,jo,0)}var JE=["grass","shrub","model"],QE=["keep","fit","stretch"],$E=/^#[a-f\d]{6}$/i,KE=10;function e2(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(_t(n.minHeight,-300,300,-300),_t(n.maxHeight,-300,300,300)),[r,s]=e(_t(n.minX,0,100,0),_t(n.maxX,0,100,100)),[o,a]=e(_t(n.minZ,0,100,0),_t(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:r,maxX:s,minZ:o,maxZ:a,maxSlope:_t(n.maxSlope,0,90,90),yaw:_t(n.yaw,-360,360,0),yawVariation:_t(n.yawVariation,0,360,360)}}function t2(n){return n?{x:_t(n.x,-256,256,0),z:_t(n.z,-256,256,0),radius:_t(n.radius,.1,512,5),blend:_t(n.blend,0,1,.5)}:null}function zy(n={}){let e=ky(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",r=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,WE).map(s=>$E.test(s)?s:i);for(;r.length<2;)r.push(r.at(-1)??i);return{kind:t,model:e,density:_t(n.density,0,jo,1),colors:r,seed:Math.round(_t(n.seed,0,2147483647,1)),size:_t(n.size,.05,jo,1),fit:QE.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:_t(n.variation,0,qE,0),...n.scatter?{scatter:e2(n.scatter)}:{}}}function n2(n,e){return Array.isArray(n.rules)?n.rules.slice(0,HE).filter(t=>t&&typeof t=="object"&&JE.includes(t.kind)).filter(t=>t.kind!=="model"||ky(t.model)).map(zy):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,r,s])=>{let o=jE(n,t,e,i,r),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[zy({kind:t,model:a,density:o,seed:n.seed,size:_t(n[t+"Size"],.1,5,1)*(a?s:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function Jo(n={},e=1){let t=Gy(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(_t(n?.seed,0,2147483647,1)),amplitude:_t(n?.amplitude,0,12,0),frequency:_t(n?.frequency,.015,2,.12),octaves:Math.round(_t(n?.octaves,1,KE,3)),roughness:_t(n?.roughness,.15,.95,.42),ridge:_t(n?.ridge,0,1,0),edgeFade:_t(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:t2(n.reliefArea)}:{},rules:n2(n??{},e),textureDensity:_t(n?.textureDensity,1e-4,XE,Vy),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&ZE.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>_t(r,-ld,ld,0)):null}}function Hy(n,e,t,i){let r=Ni(t,0,e),s=Ni(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Wy(n,e){let t=Gy(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Hy(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function ci(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function ad(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=cd(n-i),o=cd(e-r),a=Bi(ci(i,r,t),ci(i+1,r,t),s),l=Bi(ci(i,r+1,t),ci(i+1,r+1,t),s);return 2*Bi(a,l,o)-1}function Qo(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h}=i,p=Oy.get(n),x=p&&p.w===e&&p.d===t&&p.detail===r&&p.seed===s&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===d&&p.reliefArea===f;if(x&&p.heights===h)return p;let g=r+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let b=0;b<=r;b++)for(let A=0;A<=r;A++){let E=(A/r-.5)*e,U=(b/r-.5)*t,D=1;if(f){let V=Math.hypot(E-f.x,U-f.z);if(V>=f.radius)continue;f.blend&&(D=cd(Math.min(1,(f.radius-V)/(f.radius*f.blend))))}let w=E*a,M=U*a,C=0,B=1,O=0;for(let V=0;V<l;V++){let J=ad(w*2**V,M*2**V,s+V*13);C+=B*Bi(J,1-2*Math.abs(J),u),O+=B,B*=c}let Y=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(A/r-.5))*2,(.5-Math.abs(b/r-.5))*2)),d*2):1,N=l===3&&c===.42&&u===0&&d===0;m[b*g+A]=D*(N?o*(.62*ad(w,M,s)+.26*ad(w*2.03,M*2.03,s+13)+.12*ad(w*4.13,M*4.13,s+37)):o*C/O*Y)}let y=h?m.map((b,A)=>b+h[A]):m,v={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h,procedural:m,surface:y};return Oy.set(n,v),v}function ud(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Hy(o,i,(e/r+.5)*i,(t/s+.5)*i)}function Vl(n=0){return(Math.round(n/90)%4+4)%4*90}function qy(n){let e=Vl(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function tm(n,e,t){let{cos:i,sin:r}=qy(n),s=e-n.x,o=t-n.z;return[i*s-r*o,r*s+i*o]}function i2(n){return Vl(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function r2(n,e,t){return n.y+ud(Qo(n),...tm(n,e,t))}function s2(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function Xy(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=Qo(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,[h,p]=tm(n,e,t),x=Ni(h,-c/2,c/2),g=Ni(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=r**2)return!1;let m=(h/c+.5)*l,y=(p/u+.5)*l,v=c/l,b=u/l,A=Math.max(0,Math.ceil(m-r/v)),E=Math.min(l,Math.floor(m+r/v)),U=Math.max(0,Math.ceil(y-r/b)),D=Math.min(l,Math.floor(y+r/b)),w=Number.isFinite(o)?o-n.y:ud(a,h,p),M=l+1,C=a.heights?.slice()??new Array(M**2).fill(0),B=!1,O=!1;function Y(N,V,J){B=!0;let F=V*M+N,K=C[F],ie;if(i==="raise"||i==="lower")ie=K+(i==="raise"?1:-1)*s*J;else{let fe=i==="flatten"?w:s2(a,N,V);ie=Bi(d[F],fe,Math.min(1,s)*J)-f[F]}ie=Ni(ie,-ld,ld),!(Math.abs(ie-K)<1e-7)&&(C[F]=ie,O=!0)}for(let N=U;N<=D;N++)for(let V=A;V<=E;V++){let J=Math.hypot((V-m)*v,(N-y)*b)/r;J<1&&Y(V,N,cd(1-J))}if(!B){let N=Ni(m,0,l),V=Ni(y,0,l),J=Math.min(l-1,Math.floor(N)),F=Math.min(l-1,Math.floor(V)),K=N-J,ie=V-F,fe=K+ie<=1,ye=fe?1-K-ie:K+ie-1,we=fe?K:1-ie,Ce=fe?ie:1-K;if(ye>=Math.max(we,Ce)){let Re=+!fe;Y(J+Re,F+Re,1)}else we>=Ce?Y(J+1,F,1):Y(J,F+1,1)}return O&&(n.terrain.heights=C),O}function Yy(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??Vy),d=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],d),d+=6)}let f=new et;return f.setAttribute("position",new gt(o,3).setUsage(Ln)),f.setAttribute("uv",new gt(a,2)),f.setIndex(new gt(c,1)),o2(f,n),f}function o2(n,e){let{surface:t}=Qo(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function Zy(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=n,l=Ni((e/s+.5)*r,0,r),c=Ni((t/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],g=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-g*r/o).normalize()}function a2(n,e,t,i){let[r,s]=tm(n,e,t),{cos:o,sin:a}=qy(n);Zy(Qo(n),r,s,i);let l=i.x,c=i.z;return i.set(o*l+a*c,i.y,-a*l+o*c)}function jy(n,e){let{w:t,d:i}=i2(n);return{mesh:e,heightfield:!0,xMin:n.x-t/2,xMax:n.x+t/2,zMin:n.z-i/2,zMax:n.z+i/2,height:(r,s)=>r2(n,r,s),normalAt:(r,s,o)=>a2(n,r,s,o),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function l2(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new et;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function c2(){return new Vt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function u2(n,e,t){if(e==="stretch")return new _().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function h2(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(i.minX/100-.5)*n.w,s=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(s-r)*(a-o),c=[],u=new _;if(!l||!e.density)return{requested:0,positions:c,area:l};let d=Math.cos(Pe.degToRad(i.maxSlope)),f=i.maxSlope<90,h=i.minHeight>-300||i.maxHeight<300,p=(v,b)=>{if(h){let A=n.y+ud(t,v,b);if(A<i.minHeight||A>i.maxHeight)return!1}return!f||Zy(t,v,b,u).y>=d-1e-7},x=1;if(f||h){let v=0,b=32;for(let A=0;A<b;A++)for(let E=0;E<b;E++)p(Bi(r,s,(E+.5)/b),Bi(o,a,(A+.5)/b))&&v++;x=v/b**2}let g=Math.round(l*x*e.density),m=Math.min(g,jo),y=f||h?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let v=0;v<y&&c.length<m;v++){let b=Bi(r,s,ci(v,27,e.seed)),A=Bi(o,a,ci(v,27,e.seed+1));p(b,A)&&c.push([b,A])}return{requested:g,positions:c,area:l*x}}function Jy(n){let e=new Ct,t=Qo(n);e.userData.distribution=[];for(let[i,r]of(n.terrain.rules??[]).entries()){let{requested:s,positions:o,area:a}=h2(n,r,t),l=o?o.length:Math.min(s,jo);if(e.userData.distribution[i]={requested:s,count:l,area:a},!l)continue;let c=r.kind==="grass",u=r.model?u2(Dy(r.model),r.fit,r.size):null,d=r.model?Zo(r.model,u):c?l2():c2();u?d.scale(...u):d.scale(r.size,r.size,r.size),d.computeBoundingBox(),d.translate(0,-d.boundingBox.min.y,0),d.computeBoundingBox();let f=r.model?Gr(r.model):new xn({color:"#ffffff",side:c?pn:yi,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new oi().load(n.terrain.grassTexture);g.colorSpace=ht,f.map=g,f.userData.ownTexture=!0}let h=new Ga(d,f,l);h.name=r.kind,h.userData={ruleIndex:i,seed:r.seed,variation:r.variation,collidable:r.collidable,requestedCount:s,positions:o,scatter:r.scatter},h.instanceMatrix.setUsage(Ln),h.receiveShadow=!0;let p=r.colors.map(g=>new De(g)),x=new De;for(let g=0;g<l;g++){let m=ci(g,41,r.seed)*(p.length-1),y=Math.floor(m);h.setColorAt(g,x.copy(p[y]).lerp(p[y+1],m-y))}e.add(h)}return d2(e,n),e}function d2(n,e){let t=Qo(e),i=new qt;for(let r of n.children){let{seed:s,variation:o,positions:a,scatter:l}=r.userData;for(let c=0;c<r.count;c++){let u=a?.[c][0]??(ci(c,27,s)-.5)*.96*e.w,d=a?.[c][1]??(ci(c,27,s+1)-.5)*.96*e.d;i.position.set(u,ud(t,u,d),d),i.rotation.y=l?Pe.degToRad(l.yaw+ci(c,27,s+2)*l.yawVariation):ci(c,27,s+2)*Math.PI*2,i.scale.setScalar(Bi(Math.max(.05,1-o),1+o,ci(c,27,s+3))),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Qy(n,e){let t=[],i=new ct,r=new _,s=new qe().setFromAxisAngle(new _(0,1,0),Vl(n.yaw)*Math.PI/180),o=new _(n.x,n.y,n.z),a=new _(.005,.005,.005);for(let l of e?.children??[]){if(!l.userData.collidable)continue;let c=l.geometry.boundingBox,u=c.getCenter(new _),d=c.getSize(new _).multiplyScalar(.5);for(let f=0;f<l.count;f++){l.getMatrixAt(f,i);let h=new _,p=new qe;i.decompose(h,p,r),h.add(u.clone().multiply(r).applyQuaternion(p)),h.applyQuaternion(s).add(o),p.premultiply(s),t.push({position:h,quaternion:p,half:d.clone().multiply(r).max(a)})}}return t}function $y(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),od(e.material),e.dispose();n.clear(),n.removeFromParent()}}var f2=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",p2=(n,e,t)=>Math.min(t,Math.max(e,n));var Ky=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function m2(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function ev(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:r=23}={}){let s=n.getContext("2d"),o=512;s.clearRect(0,0,o,o),s.fillStyle=f2(t),s.fillRect(0,0,o,o);let a=m2(r),l=o/Math.max(4,2*Math.round(4*i)),c=u=>{s.fillStyle=u>0?"#f6f4dc":"#18232b",s.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(i),d={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<d;f++){let h=a()*o,p=a()*o,x=a(),g=a(),m=a();Ky(s,y=>{if(e==="rock"){let v=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),y.beginPath();for(let b=0;b<6;b++){let A=b*Math.PI/3+g,E=v*(.63+.3*Math.cos(A*2+g)+.25);y.lineTo(h+Math.cos(A)*E,p+Math.sin(A)*E*.72)}y.closePath(),y.fill(),y.globalAlpha=.3,y.strokeStyle="#232633",y.lineWidth=1.4,y.stroke()}else if(e==="soil"){let v=(1+x*x*12)*u,b=y.createRadialGradient(h,p,0,h,p,v);b.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),b.addColorStop(1,"#39221900"),y.globalAlpha=.6,y.fillStyle=b,y.fillRect(h-v,p-v,v*2,v*2)}else if(e==="grass"||e==="wood"){let v=e==="grass",b=(v?5+x*25:7+x*110)*u;y.strokeStyle=v?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",y.globalAlpha=.08+g*.28,y.lineWidth=(.75+x*1.7)*u,y.beginPath(),y.moveTo(h,p),v?y.quadraticCurveTo(h+b*(g-.5)*.55,p-b*.58,h+b*(g-.6),p-b):y.quadraticCurveTo(h+b*.5,p+10*(g-.5),h+b,p+4*(m-.5)),y.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let v=(e==="sand"?.6+x*1.6:1+x*5)*u;y.fillRect(h,p,v,v*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){s.globalAlpha=.5,s.lineWidth=Math.max(1,3/i);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let d=0;d<u;d++)for(let f=0;f<u;f++)Ky(s,h=>{h.beginPath(),h.arc(f*l+l/2,d*l+l/2,p2(l*.11,2,13),0,Math.PI*2),h.fill()})}else if(e==="stripes"){s.fillStyle="#17242b",s.globalAlpha=.3;for(let d=0;d<o;d+=l/2)s.fillRect(d,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#f4f3e8":"#14212a",s.globalAlpha=.14,s.fillRect(0,d,o,Math.max(1,l/13));for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#14212a":"#f4f3e8",s.globalAlpha=.13,s.fillRect(d,0,Math.max(1,l/13),o)}else{s.strokeStyle="#12212a",s.globalAlpha=.48;for(let d=0;d<=o;d+=l)s.beginPath(),s.moveTo(0,d),s.lineTo(o,d),s.stroke();for(let d=0;d<o;d+=l)for(let f=0;f<=o;f+=l){let h=e==="brick"&&Math.floor(d/l)%2?l/2:0;e!=="brick"&&d>0||(s.beginPath(),s.moveTo(f+h,d),s.lineTo(f+h,d+l),s.stroke())}if(e==="grid"){s.strokeStyle="#f7ebc9",s.globalAlpha=.1;for(let d=l/2;d<o;d+=l)s.beginPath(),s.moveTo(d,0),s.lineTo(d,o),s.stroke()}}}s.globalAlpha=1}var hd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],g2=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"],x2=["rock","soil","grass","sand","wood","tiles"];function tv(n,e){n=Math.max(0,Math.min(hd.length-1,n|0));let t=document.createElement("canvas");return t.width=t.height=512,ev(t,{pattern:x2[n],base:e??g2[n],seed:(n+45)*31337}),t}function nv({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var y2=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function iv(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){y2.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function rv(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var sv=.065,v2=.08,dd=.035,nm=.003,fd=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(lr).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let g=p&&o.includes(p)&&!p.objectBody?.owner,m=g&&p.objectBody;m&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(m.mesh.quaternion).add(m.mesh.position),f.copy(u.localNormal).applyQuaternion(m.mesh.quaternion)),g&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),g||this.to.add(this.flight),this.to.y-=Math.min(nm,r*t*t);let y=this.sweep(u,this.from,this.to);if(g){let w=this.correction.subVectors(x,d.anchor),M=w.dot(f)<=dd&&d.anchor.distanceToSquared(e)<=(c+dd)**2&&w.lengthSq()<=Math.max(.12,c*.5)**2;M&&(!y||y===p&&this.hitNormal.dot(f)>.7)?(y=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!M&&y===p&&w.dot(f)>dd&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let v=y.friction??.8,b=Math.min(1,Math.max(0,v*(.75+s.grip*.09))),A=Math.max(0,1-Math.abs(f.y)/.28),E=Math.min(.97,Math.max(0,1-b+A*.24+(s.slide-3)*.035)),U=this.correction.subVectors(d.anchor,x);if(U.addScaledVector(f,-U.dot(f)),this.slideTarget.copy(U).multiplyScalar(-E),g&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*E*Math.max(A,Math.max(0,1-2*b)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,nm),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-nm*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(E>.5&&U.lengthSq()>dd**2)continue}U.subVectors(d.anchor,x),g&&U.dot(f)<0&&U.addScaledVector(f,-U.dot(f)),l.add(U);let D=y.objectBody;if(D){let w=u.inverseRotation.copy(D.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(D.mesh.position).applyQuaternion(w),u.localNormal.copy(f).applyQuaternion(w)}if(d.surface=y,d.groundContact=f.y>.55,this.contacts++,u.tracked){let w=this.handMotion.subVectors(u.previousTarget,x),M=w.dot(f);w.multiplyScalar(1-E).addScaledVector(f,Math.max(0,M)-M*(1-E)),this.intent.add(w)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=sv;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/sv),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=v2,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function _2(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function im(n,e=.16,t=26){let i=_2(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function ov(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,im(n,i,r)&&(n.hapticCooldown=.08))}function av({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new _(0,1,0),a=new qe,l=0,c=new rr,u=[],d=new Map,f=Sx(n,{onShot:(m,y)=>s.sendShot(m,y),impact(m,y,v,b){c.set(m,y),c.far=v;let A=c.intersectObjects(u,!1)[0];if(!A)return null;let E=d.get(A.object);return b&&E&&!E.owner&&!E.frozen&&E.velocity.addScaledVector(y,Math.min(4,2.6/E.mass)),A.distance}}),h={position:new _,quaternion:new qe,modelPosition:new _},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:y,inVR:v,enabled:b,remoteWorld:A,dt:E,yaw:U,drop:D,rightHand:w,flatFiring:M}){let C=null,B=!1;if(b)if(v){let O=[...m.session.inputSources].find(N=>N.handedness==="right"),Y=O&&m.getPose(O.targetRaySpace,y);if(Y){let{position:N,orientation:V}=Y.transform;C=h,C.position.set(N.x,N.y-D,N.z).applyAxisAngle(o,U).add(e.position),C.modelPosition.copy(w.valid?w.mesh.position:C.position),C.quaternion.set(V.x,V.y,V.z,V.w).premultiply(a.setFromAxisAngle(o,U)),B=!!O.gamepad?.buttons[0]?.pressed}}else C=h,t.getWorldPosition(C.position),t.getWorldQuaternion(C.quaternion),C.modelPosition.set(.16,-.17,-.43).applyQuaternion(C.quaternion).add(C.position),B=M;if(x=C?p:null,u.length=0,d.clear(),C||l){for(let O of i.boxes)O.mesh?.isMesh&&O.mesh.visible&&u.push(O.mesh);if(A)s.forEachReplica(O=>u.push(O));else for(let O of r)O.mesh.visible&&O.collidable&&!O.owner&&(u.push(O.mesh),d.set(O.mesh,O))}f.update({dt:E,aim:C,firing:B}),B?l=1.3:l=Math.max(0,l-E)}return{update:g,receiveShot({position:m,quaternion:y},v){f.replay(m,new qe().copy(y),v),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function lv(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function cv(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Rs=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],pd=["Naturel","Cellulo","Affiche","R\xE9tro"],md={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var uv=new WeakMap;function rm(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,uv.set(n,e),n}function kl(n){if(Array.isArray(n))return n.map(kl);let e=n.clone(),t=uv.get(n);return t?rm(e,t):e}function b2(n){let t=new si(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Vt(.225,0),r=new rl({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return rm(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function M2(n){let e=new it(.37,.37,.37),t=new vt({color:16777215,roughness:.4});return rm(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function hv(){let n={value:0};return{props:[b2(n),M2(n)],animate(e){n.value=e}}}var dv=new _(0,1,0),fv=new _(0,0,1),S2={left:new qe().setFromAxisAngle(fv,Math.PI/2),right:new qe().setFromAxisAngle(fv,-Math.PI/2)},w2=new qe,T2=new _;function pv(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(dv,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(w2.setFromAxisAngle(dv,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(S2[n.side]),n.target.copy(n.gripPosition).sub(T2.copy(lr).applyQuaternion(n.mesh.quaternion))}function mv(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let m=e.getChannelData(0);for(let y=0;y<m.length;y++)m[y]=(Math.random()*2-1)*(1-y/m.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),g=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,g.gain.setValueAtTime(Pe.clamp(f,1,10)*.055,h),g.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(g).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:g,volume:m,enabled:y}){if(h){p.forEach((v,b)=>{a[b]=Math.max(0,a[b]-f);let A=v.valid&&v.groundContact;A&&!o[b]&&!a[b]&&y&&(c(m),a[b]=.11),o[b]=A});return}r=Math.max(0,r-f),t=x?t+g:0,x&&y&&r===0&&(t>=.64||!i&&g>.025)&&(c(m),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function gv(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new et;r.setAttribute("position",new gt(t,3).setUsage(Ln)),r.setAttribute("color",new gt(i,3).setUsage(Ln));let s=new hs(r,new Ri({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Ir(new si(1,12,8)).attributes.position,a=new Ir(new _i(1).scale(...Th)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new _,f=new WeakMap,h=new _(1,1,1),p=new qe,x=new _,g=new _,m=new _,y=new _,v=new _,b=new _,A=new _,E=new _(0,1,0),U={grip:new De("#61f6ff"),palm:new De("#71ff87"),solid:new De("#ffe060"),proxy:new De("#ff76df"),movement:new De("#fff0af"),normal:new De("#ff994e"),velocity:new De("#80aaff"),force:new De("#ff5454"),rig:new De("#cec4ff")},D=0;function w(N,V,J){if(D+2>u){c.truncated=!0;return}N.toArray(t,D*3),J.toArray(i,D++*3),V.toArray(t,D*3),J.toArray(i,D++*3)}function M(N,V,J,F,K){for(let ie=0;ie<N.count;ie+=2){if(D+2>u){c.truncated=!0;break}x.fromBufferAttribute(N,ie).multiply(F).applyQuaternion(J).add(V),g.fromBufferAttribute(N,ie+1).multiply(F).applyQuaternion(J).add(V),w(x,g,K)}}function C(N,V,J,F){if(N.sphereRadius){M(o,V,J,y.setScalar(N.sphereRadius),F);return}let K=l.get(N);if(!K){let ie=new Set,fe=[];for(let ye of N.faces)for(let[we,Ce]of[[ye.a,ye.b],[ye.b,ye.c],[ye.c,ye.a]]){let Re=[we.toArray().join(","),Ce.toArray().join(",")].sort().join("|");ie.has(Re)||(ie.add(Re),fe.push(...we.toArray(),...Ce.toArray()))}K=new Oe(fe,3),l.set(N,K)}M(K,V,J,h,F)}function B(N,V){let F=(N.xMax-N.xMin)/16,K=(N.zMax-N.zMin)/16;for(let ie=0;ie<=16;ie++)for(let fe=0;fe<=16;fe++){if(D+2>u){c.truncated=!0;return}let ye=N.xMin+ie*F,we=N.zMin+fe*K;x.set(ye,N.height(ye,we),we),ie<16&&w(x,g.set(ye+F,N.height(ye+F,we),we),V),fe<16&&w(x,g.set(ye,N.height(ye,we+K),we+K),V)}}function O(N,V,J,F){if(V.lengthSq()<1e-8)return;v.copy(N).addScaledVector(V,J),b.copy(V).normalize(),A.crossVectors(b,E),A.lengthSq()<1e-8?A.set(1,0,0):A.normalize();let K=Math.min(.09,N.distanceTo(v)*.3);y.copy(v).addScaledVector(b,-K),w(N,v,F),w(v,x.copy(y).addScaledVector(A,K*.5),F),w(v,g.copy(y).addScaledVector(A,-K*.5),F)}function Y({settings:N,boxes:V,bodies:J,hands:F,locomotion:K,velocity:ie,head:fe,body:ye,neck:we,proxies:Ce,gravity:Re,appliedMove:se,playerActive:oe,inVR:xe,viewQuaternion:Ie}){D=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(N.debugBudget??5)*2e3);let ve=(N.debugRange??6)*5,Xe=(Ge,S=0)=>!Ge||Ge.distanceToSquared(fe)<=(ve+S)**2;if(s.visible=N.debugPalm||N.debugHitboxes||N.debugInvisible||N.debugForces||N.debugBody||N.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(N.debugHitboxes||N.debugInvisible||N.debugMesh){let Ge=u;if(N.debugScene!==!1&&V.length&&(u=Math.floor(Ge*.65/2)*2),N.debugObjects!==!1)for(let S of J){if(D+2>u){c.truncated=!0;break}if(!(!S.mesh.visible||!Xe(S.mesh.position,S.shape.radius))&&(c.bodies++,N.debugHitboxes&&S.collidable!==!1&&S.blocksPlayer!==!1&&C(S.shape,S.mesh.position,S.mesh.quaternion,S.owner?U.proxy:U.solid),N.debugMesh&&S.mesh.geometry)){let k=S.mesh.geometry,z=k.attributes.position.version,H=f.get(k);H?.version!==z&&(H?.edges.dispose(),H={version:z,edges:new Ir(k)},f.set(k,H)),M(H.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,U.grip)}}if(u=Ge,N.debugScene!==!1)for(let S of V){if(D+2>u){c.truncated=!0;break}let k=S.shape?.radius??S.half?.length()??Math.hypot(S.xMax-S.xMin||0,S.zMax-S.zMin||0);if(!Xe(S.position??S.mesh?.position,k))continue;c.boxes++;let z=S.mesh?.isObject3D&&S.mesh.visible;if(N.debugMesh&&z&&S.mesh.geometry){let H=S.mesh.geometry,W=H.attributes.position.version,I=f.get(H);I?.version!==W&&(I?.edges.dispose(),I={version:W,edges:new Ir(H)},f.set(H,I)),M(I.edges.attributes.position,S.mesh.position,S.mesh.quaternion,S.mesh.scale,U.grip)}(z?!N.debugHitboxes:!N.debugInvisible)||(S.shape?C(S.shape,S.position,S.quaternion,z?U.solid:U.proxy):S.heightfield&&B(S,z?U.solid:U.proxy))}}if(oe){if(N.debugBody){if(N.collisions)for(let{position:Ge,radius:S}of Ce)M(o,Ge,p,y.setScalar(S),U.rig);w(fe,we,U.rig),w(we,ye,U.rig)}if(N.debugForces&&(d.set(0,-.22,-.5),Ie&&d.applyQuaternion(Ie),d.add(fe),O(d,ie,.13,U.velocity),O(d,E,-Re*.038,U.force),O(d,se,5,U.movement),N.debugObjects!==!1)){for(let Ge of J)if(!(!Ge.mesh.visible||!Ge.velocity||!Xe(Ge.mesh.position,Ge.radius))&&(O(Ge.mesh.position,Ge.velocity,.13,U.velocity),D+2>u)){c.truncated=!0;break}}if(xe&&(N.debugPalm||N.debugForces))for(let Ge of K.hands){let{hand:S,normal:k,offset:z}=Ge;if(S.valid){if(N.debugPalm){M(o,S.gripPosition,p,y.setScalar(.014),U.grip);for(let H=0;H<3;H++)b.set(0,0,0).setComponent(H,.075).applyQuaternion(S.controllerRotation),O(S.gripPosition,b,1,U.grip);v.copy(S.mesh.position).add(z),M(a,v,S.mesh.quaternion,h,U.palm),w(S.gripPosition,v,U.grip),S.hasSupport&&(v.copy(lr).applyQuaternion(S.mesh.quaternion).add(S.mesh.position),M(a,v,S.mesh.quaternion,h,U.grip))}N.debugForces&&S.surface&&O(S.anchor,k,.25,U.normal)}}}c.vertices=D,c.segments=D/2,r.setDrawRange(0,D);for(let Ge of["position","color"]){let S=r.attributes[Ge];S.clearUpdateRanges(),D&&S.addUpdateRange(0,D*3),S.needsUpdate=!!D}}return{update:Y,stats:c}}var gd={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},A2=[gd,{...gd,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...gd,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function sm(n){return{...A2[n]??gd}}var E2=12e5,$o=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,Hr=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function xv(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(Hr(n.preset,0,2,0)),t=sm(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=E2&&/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(n.skyImage)?n.skyImage:null,r=Hr(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&i?n.sky:"preset",rotation:Hr(n.rotation,-360,360,0),skyTint:$o(n.skyTint,"#ffffff"),skyColor:$o(n.skyColor,t.skyColor),skyImage:i,fog:n.fog!==!1,fogColor:$o(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,Hr(n.fogFar,1,4096,t.fogFar)),azimuth:Hr(n.azimuth,-360,360,t.azimuth),elevation:Hr(n.elevation,-89,89,t.elevation),sunColor:$o(n.sunColor,t.sunColor),sunPower:Hr(n.sunPower,0,12,t.sunPower),ambientColor:$o(n.ambientColor,t.ambientColor),groundColor:$o(n.groundColor,t.groundColor),ambientPower:Hr(n.ambientPower,0,12,t.ambientPower)}}var om=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],_v=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],am={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},xd=8e6,Gl=512,Oi=1024,yv=512,jt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,vv=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Hl(n){if(typeof n=="string"){if(n.length>xd)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Gl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Gl+" pi\xE8ces.");let e=n.spawn??{},t=xv(n.environment),i=n.pieces.filter(r=>!Es(r?.sceneryId)&&!nd(r?.model));if(!i.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:vv(n.name,56,"Ma map"),worldSize:jt(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:jt(e.x,-Oi,Oi,0),y:jt(e.y,-256,256,.06),z:jt(e.z,-Oi,Oi,3),yaw:jt(e.yaw,-360,360,0)},pieces:i.map((r,s)=>{if(!r||typeof r!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let o=jt(r.w,.05,yv,3),a=jt(r.d,.05,yv,3),l=r.terrain&&typeof r.terrain=="object"?Jo(r.terrain,o*a):null,c=r.model?Cs({version:1,models:[r.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:vv(r.name,36,"Pi\xE8ce "+(s+1)),...typeof r.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(r.sceneryId)?{sceneryId:r.sceneryId}:{},x:jt(r.x,-Oi,Oi,0),y:jt(r.y,-256,256,0),z:jt(r.z,-Oi,Oi,0),w:o,h:jt(r.h,.05,256,.5),d:a,pitch:l?0:jt(r.pitch,-180,180,0),yaw:l?Vl(jt(r.yaw,-360,360,0)):jt(r.yaw,-360,360,0),roll:l?0:jt(r.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(r.primitive)?r.primitive:"box",uvScale:jt(r.uvScale,.05,100,1),uvOffsetX:jt(r.uvOffsetX,-100,100,0),uvOffsetY:jt(r.uvOffsetY,-100,100,0),uvRotation:jt(r.uvRotation,-360,360,0),material:Math.round(jt(r.material,0,16,0)),color:typeof r.color=="string"&&/^#[a-f0-9]{6}$/i.test(r.color)?r.color:"#ffffff",grip:jt(r.grip,0,1.5,.8),gravity:jt(r.gravity,.05,2.5,1),bounce:jt(r.bounce,0,1.65,1),solid:r.solid!==!1,texture:typeof r.texture=="string"&&r.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(r.texture)?r.texture:null}})}}function bv(n){return Hl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...Xo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new tn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Wl(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Mv(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new tn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new _(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Oi||Math.abs(d)>Oi||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var ql="gorilla-lab-custom-map-v1";function Sv(n){let e=new Blob([JSON.stringify(Hl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var C2=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function lm(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&C2.has(e)):!1:!0}function yd(n,e,t){let i=new it(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function wv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function Tv(n){switch(n){case"sphere":return new si(.5,24,16);case"cylinder":return new nn(.5,.5,1,24);case"cone":return new nr(.5,1,24);case"torus":return new bi(.34,.14,12,32);case"capsule":return new Rr(.32,.36,8,16);default:return new it(1,1,1)}}function cm(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new _(...a)),r=[],s=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],u=l[1].clone().sub(c).normalize(),d=l.at(-1).clone().sub(c);d.addScaledVector(u,-d.dot(u)).normalize();for(let f=1;f<l.length-1;f++)for(let h of[c,l[f],l[f+1]]){r.push(...h);let p=h.clone().sub(c);s.push(p.dot(u)/2.6,p.dot(d)/2.6)}}let o=new et;return o.setAttribute("position",new Oe(r,3)),o.setAttribute("uv",new Oe(s,2)),o.computeVertexNormals(),o}function Av({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(I=>I.half&&I.mesh?.isObject3D).map(I=>I.mesh)),c=new Ct;n.add(c);let u=[],d=[],f=[],h=[],p=new Set,x=new oi,g=new Map,m=0,y=null,v="",b=-1,A=-1,E="",U="",D=new it(1,1,1),w=cm(),M=new He(D,new Rt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));M.visible=!1,n.add(M);let C=new rr,B=new _,O=new _,Y=document.querySelector("#map-note");function N(I){E=I,Y.textContent=I}function V(){f.length>=20&&f.shift(),f.push(JSON.stringify(y))}function J(I,j){let Z=g.get(I);if(!Z){Z={materials:new Set,texture:null,failed:!1},g.set(I,Z);let he=R=>{if(!(g.get(I)!==Z||Z.failed)){Z.failed=!0;for(let T of Z.materials)T.map=null,T.needsUpdate=!0;Z.texture?.dispose(),R&&N(R)}},pe=x.load(I,R=>{(R.image.width>2048||R.image.height>2048)&&he("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>he());Z.texture=pe,pe.colorSpace=ht,pe.wrapS=pe.wrapT=Cn}return Z.materials.add(j),j.map=Z.failed?null:Z.texture,Z}function F(){for(let[I,j]of g)j.materials.size||(g.delete(I),j.failed||j.texture.dispose())}function K(I){let j=e.mapMaterial(I.material,s());if(!I.texture&&I.color==="#ffffff")return{material:j,custom:!1};let Z=j.clone();return Z.onBeforeCompile=j.onBeforeCompile,Z.customProgramCacheKey=j.customProgramCacheKey,Z.color.multiply(new De(I.color)),{material:Z,custom:!0,ownTexture:I.texture?J(I.texture,Z):null}}function ie(I){c.remove(I.mesh),I.mesh.geometry.dispose(),I.vegetation&&$y(I.vegetation),I.custom&&(I.ownTexture?.materials.delete(I.mesh.material),I.model?od(I.mesh.material):I.mesh.material.dispose())}function fe(I,j){if(I.model){let re=new _(I.w,I.h,I.d),Me=Zo(I.model,re);Me.scale(I.w,I.h,I.d);let be=Gr(I.model),Ae=new He(Me,be);Ae.position.set(I.x,I.y,I.z),Ae.rotation.set(Pe.degToRad(I.pitch),Pe.degToRad(I.yaw),Pe.degToRad(I.roll??0),"YXZ"),Ae.castShadow=Ae.receiveShadow=!0,Ae.userData.mapIndex=j,I.model.kind==="prop"&&(Ae.visible=!1),c.add(Ae);let Ne=Fy(I.model,re);if(Ne){let tt=[];for(let L of Ne){let q=L.size.clone().multiplyScalar(.5),le=L.center.clone().applyQuaternion(Ae.quaternion).add(Ae.position),me=Ae.quaternion.clone();L.mode==="trigger"?h.push({name:L.name,model:I.name,position:le,inverse:me.invert(),bounds:new en(q.clone().negate(),q)}):tt.push({position:le,quaternion:me,half:q,min:q.clone().negate(),shape:li(q),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material})}return{mesh:Ae,colliders:tt,custom:!0,model:!0}}let de=zl(I.model,re);de.computeBoundingBox();let _e=de.boundingBox,Ye=new _(Math.max(Math.abs(_e.min.x),Math.abs(_e.max.x)),Math.max(Math.abs(_e.min.y),Math.abs(_e.max.y)),Math.max(Math.abs(_e.min.z),Math.abs(_e.max.z))),Ve=wi(de);de.dispose();let Le={mesh:Ae,position:Ae.position,quaternion:Ae.quaternion,half:Ye,min:Ye.clone().negate(),shape:Ve,radius:Ve.radius,friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};return{mesh:Ae,collider:Le,custom:!0,model:!0}}let{material:Z,custom:he,ownTexture:pe}=K(I),R=I.terrain?Yy(I):I.primitive==="ramp"?cm(I.w,I.h,I.d):I.primitive&&I.primitive!=="box"?Tv(I.primitive).scale(I.w,I.h,I.d):yd(I.w,I.h,I.d),T=new He(wv(R,I),Z);T.position.set(I.x,I.y,I.z),T.rotation.set(Pe.degToRad(I.pitch),Pe.degToRad(I.yaw),Pe.degToRad(I.roll??0),"YXZ"),T.castShadow=T.receiveShadow=!0,T.userData.mapIndex=j,I.sceneryId==="lab-mirror"&&(T.userData.mirrorSize={w:I.w,h:I.h,d:I.d}),c.add(T);let X=new _(I.w/2,I.h/2,I.d/2),ee={mesh:T,position:T.position,quaternion:T.quaternion,half:X,min:X.clone().negate(),shape:I.primitive==="ramp"?wi(R):li(X),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};if(!I.terrain)return{mesh:T,collider:ee,custom:he,ownTexture:pe};let ue=Jy(I);return ue&&T.add(ue),{mesh:T,collider:jy(I,T),custom:he,ownTexture:pe,vegetation:ue}}function ye(){for(let I of u){let j=y?.pieces[I.mesh.userData.mapIndex];if(!j||I.ownTexture||I.model)continue;let Z=e.mapMaterial(j.material,s());I.custom?I.mesh.material.map!==Z.map&&(I.mesh.material.map=Z.map,I.mesh.material.needsUpdate=!0):I.mesh.material=Z}}function we(){for(let pe of u)ie(pe);u.length=0,d.length=0,h.length=0,p.clear();let I=y?.pieces??[];v=y?"custom-"+Ss(JSON.stringify(y)):"";let j=new Set(I.map(pe=>pe.model?.assetId).filter(Boolean)),Z=new Set(I.map(pe=>pe.sceneryId).filter(Boolean));o.forEach(pe=>{let R=pe.userData?.editorAssetId;pe.visible=!y||!l.has(pe)&&lm(y,R,j,Z)});let he=[];for(let[pe,R]of I.entries()){let T=fe(R,pe);u.push(T);for(let X of Qy(R,T.vegetation))he.push({...X,min:X.half.clone().negate(),shape:li(X.half),friction:R.grip,gravity:R.gravity,bounce:R.bounce,zone:!1,type:R.material})}for(let pe of u)pe.mesh.userData.mirrorSize&&d.push(pe);if(F(),y){let pe=a.filter(T=>!l.has(T.mesh)&&lm(y,T.editorAssetId,j,Z)),R=u.filter((T,X)=>I[X].solid&&I[X].model?.kind!=="prop"&&I[X].model?.properties?.collidable!==!1).flatMap(T=>T.colliders??[T.collider]);e.boxes.splice(0,e.boxes.length,...pe,...R,...he)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.setEnvironment(y?.environment??null),e.bakeLightmap(),r(),y)try{localStorage.setItem(ql,JSON.stringify(y))}catch{}else try{localStorage.removeItem(ql)}catch{}}function Ce(I){let j=Hl(I);m++,f.length=0,y=j,b=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),we(),i(y.spawn.yaw),N("Map : "+y.name+" \xB7 "+y.pieces.length+" pi\xE8ces")}function Re(){m++,y=null,f.length=0,b=A=-1,t.set(0,0,3),we(),i(0),N("Ar\xE8ne int\xE9gr\xE9e")}function se(){Ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Wl({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function oe(){if(!f.length)return N("Rien \xE0 annuler.");y=Hl(f.pop()),b=A=-1,t.set(y.spawn.x,y.spawn.y,y.spawn.z),we(),N("Derni\xE8re modification annul\xE9e.")}function xe(){y?Sv(y):N("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Ie(I,j,Z,he){y&&(V(),y.spawn={x:I,y:j,z:Z,yaw:Pe.radToDeg(he)},t.set(I,j,Z),we(),N("Point de d\xE9part m\xE9moris\xE9."))}function ve(I,j,Z,{mode:he,piece:pe,head:R,feet:T}){C.set(I,j),C.far=12;let X=u.map(de=>de.mesh);he===1&&y?.arenaBase&&!y.editableArena&&X.push(...a.filter(de=>de.heightfield&&!y.pieces.some(_e=>_e.sceneryId===de.editorAssetId)).map(de=>de.mesh));let ee=C.intersectObjects(X,!1),ue=he>=5?ee.find(de=>y?.pieces[de.object.userData.mapIndex]?.terrain):ee[0];if(M.visible=!1,!y)return;if(he>=5){let de=ue?.object.userData.mapIndex,_e=y.pieces[de];if(!_e?.terrain||!Z)return;if(V(),he===9){let Ye=pe.terrain?.detail??_e.terrain.detail,Ve=Wy(_e.terrain,Ye);_e.terrain=Jo({...Ve,...pe.terrain,heights:Ve.heights})}else{let Ye={mode:["raise","lower","smooth","flatten"][he-5],radius:pe.brushRadius,strength:pe.brushStrength,target:_e.y};Xy(_e,ue.point.x,ue.point.z,Ye)}we(),N("Relief modifi\xE9.");return}if(he===2||he===3||he===4){if(!ue)return;let de=ue.object.userData.mapIndex,_e=y.pieces[de];if(Z&&he===2&&(b=de,A=de,N("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),Z&&he===3){if(y.pieces.length===1)return N("Garde au moins une pi\xE8ce dans la map.");V(),y.pieces.splice(de,1),b=A=-1,we(),N("Pi\xE8ce supprim\xE9e.")}Z&&he===4&&(V(),Object.assign(y.pieces[de],{material:pe.material,grip:pe.grip,gravity:pe.gravity,bounce:pe.bounce,solid:pe.solid,texture:pe.texture}),we(),N("Surface modifi\xE9e.")),ue&&(M.geometry=_e.primitive==="ramp"?w:D,M.position.copy(ue.object.position),M.rotation.copy(ue.object.rotation),M.scale.set(_e.w,_e.h,_e.d).multiplyScalar(1.006),M.visible=!0,M.material.color.set(he===3?"#ff8271":"#ffe2a2"));return}if(!ue)return;let re=A>=0?y.pieces[A]:pe;if(ue.object.userData.mapIndex===A)return;B.copy(ue.face.normal).transformDirection(ue.object.matrixWorld);let Me=re.terrain?{...re,x:Math.round(ue.point.x*2)/2,y:ue.point.y,z:Math.round(ue.point.z*2)/2,pitch:0,yaw:re.yaw??0}:Mv(ue.point,B,re);if(!Me)return;M.geometry=Me.primitive==="ramp"?w:D,M.position.set(Me.x,Me.y,Me.z),M.rotation.set(Pe.degToRad(Me.pitch),Pe.degToRad(Me.yaw),Pe.degToRad(Me.roll??0),"YXZ"),M.scale.set(Me.w,Me.h,Me.d),M.updateMatrixWorld(!0),M.visible=!0;let be=new en().setFromObject(M),Ae=new en(new _(R.x-.26,T+.01,R.z-.26),new _(R.x+.26,R.y+.19,R.z+.26)),Ne=Me.solid&&be.intersectsBox(Ae);if(M.material.color.set(Ne?"#fd7763":"#8be4b9"),Z){if(Ne)return N("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(A<0&&y.pieces.length>=Gl)return N("Limite de "+Gl+" pi\xE8ces atteinte.");V(),A>=0?(y.pieces[A]=Me,A=-1):y.pieces.push(Me),we(),N("Pi\xE8ce pos\xE9e \xB7 "+y.pieces.length+" pi\xE8ces")}}let Xe=document.querySelector("#map-file"),Ge=document.querySelector("#map-url");Xe.onchange=async()=>{let I=Xe.files[0];if(!I)return;let j=++m;Xe.value="";try{if(I.size>xd)throw Error("Map trop lourde.");let Z=await I.text();j===m&&Ce(Z)}catch(Z){j===m&&N(Z.message)}};async function S(I){let j=++m;try{let Z=new URL(I,location.href);if(!["http:","https:"].includes(Z.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let he=await fetch(Z,{credentials:"omit"});if(j!==m)return;if(!he.ok)throw Error("URL de map inaccessible ("+he.status+").");if(Number(he.headers.get("content-length"))>xd)throw Error("Map trop lourde.");let R=await he.text();j===m&&Ce(R)}catch(Z){j===m&&N(Z.message)}}let k=new tr,z=new _,H=new _;function W(I){if(!h.length)return[];let j=[],Z=new Set;for(let he of h){k.origin.copy(I).sub(he.position).applyQuaternion(he.inverse),k.direction.set(0,-1,0).applyQuaternion(he.inverse),z.copy(k.origin).addScaledVector(k.direction,1.45);let pe=k.intersectBox(he.bounds,H);he.bounds.containsPoint(k.origin)||he.bounds.containsPoint(z)||pe&&H.distanceToSquared(k.origin)<=1.45**2?(Z.add(he),p.has(he)||j.push({phase:"enter",part:he.name,model:he.model})):p.has(he)&&j.push({phase:"exit",part:he.name,model:he.model})}return p=Z,j}return document.querySelector("#map-load-url").onclick=()=>S(Ge.value),document.querySelector("#map-export").onclick=xe,document.querySelector("#map-reset").onclick=Re,{checkTriggers:W,placedModels:()=>y?.pieces.filter(I=>I.model?.kind==="prop")??[],modelPieces:()=>y?.pieces.filter(I=>!I.terrain&&I.name!=="Sol")??[],refreshMaterials:ye,load:Ce,loadURL:S,reset:Re,blank:se,undo:oe,save:xe,edit:ve,recenter:Ie,inform:N,mirrors:()=>d,get usesBuiltInMirror(){return!y||y.arenaBase&&!y.editableArena&&!y.pieces.some(I=>I.sceneryId==="lab-mirror")},clearGhost(){M.visible=!1},get active(){return!!y},get builtIn(){return!y||y.arenaBase===!0},get assetLayer(){return y?.assetLayer===!0},hasAsset(I){return!!y?.pieces.some(j=>j.model?.assetId===I)},getAssetPiece(I){return y?.pieces.find(j=>j.model?.assetId===I)??null},get status(){return E},get yaw(){return y?.spawn.yaw??0},get worldSize(){return y?.worldSize??0},get fogDistance(){return y?.environment?.fog?y.environment.fogFar:0},get nodes(){return y?.pieces.length??0},get name(){return y?.name??null},get signature(){return v}}}var um=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Ev(){let n=new He(new ln(2,2),new gn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+um+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Cv(n){let e=new us,t=new Kt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new ge(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new gn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+um+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new He(new ln(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let v=l[y],b=Math.max(32,Math.round(v.viewport.z)),A=Math.max(32,Math.round(v.viewport.w)),E=a[y];E?(E.width!==b||E.height!==A)&&E.setSize(b,A):E=a[y]=new On(b,A,{type:o?Li:Zn,minFilter:mn,magFilter:mn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(v.matrixWorld),t.matrixWorld.copy(v.matrixWorld),t.matrixWorldInverse.copy(v.matrixWorldInverse),t.projectionMatrix.copy(v.projectionMatrix),t.projectionMatrixInverse.copy(v.projectionMatrixInverse),t.layers.mask=v.layers.mask,n.shadowMap.autoUpdate=y===0&&g,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function Rv(n){let e={value:0},t={value:Array.from({length:7},()=>new ft(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Iv(n,e,t){function i(c,u,d=.85){let f=c.getWorldPosition(new _),h=c.getWorldQuaternion(new qe);e.push({half:u,min:u.clone().negate(),position:f,quaternion:h,mesh:{position:f,quaternion:h},shape:li(u),friction:d,gravity:1})}let r=[],s=[],o=new xn({color:"#485d5d",flatShading:!0});function a([c,u],d,f){let h=new He(new it(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new _(.0475,.34,.055));let p=new Ct;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new He(new it(.64,.36,.055),new xn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),y=new ri(g);y.colorSpace=ht;let v=new He(new ln(.61,.095),new Rt({map:y}));v.position.set(0,.116,.03),p.add(v);let b=.592/f.length,A=f.map(([U,D],w)=>{let M=new He(new it(b-.012,.155,.04),new xn({color:"#478086"}));M.position.set(-.296+b*(w+.5),-.045,.046),p.add(M),r.push(M),M.userData.touchWidth=b-.012;let C=document.createElement("canvas");C.width=208,C.height=172;let B=new ri(C);B.colorSpace=ht;let O=new He(new ln(b-.017,.139),new Rt({map:B}));O.position.z=.0205,M.add(O);let Y=-1/0;return M.userData.action=()=>{let N=performance.now();N-Y<250||(Y=N,D(),l(),M.position.z=.036,setTimeout(()=>{M.position.z=.046},115))},{label:U,context:C.getContext("2d"),texture:B}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(d,17,62,478);for(let U of A){let D=U.context;D.fillStyle="#386269",D.fillRect(0,0,208,172),D.fillStyle="#fff2d5",D.textAlign="center",D.font="bold 27px system-ui";let w=(typeof U.label=="function"?U.label():U.label).split("|");w.forEach((M,C)=>D.fillText(M,104,(w.length>1?68:97)+C*37,188)),U.texture.needsUpdate=!0}y.needsUpdate=!0}s.push(E)}function l(){for(let c of s)c()}return a(Ul.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Yo[0])],["Boule",()=>t.spawn(1,Yo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Yo[0])],["Vider",t.clear]]),a(Ul.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Yo[1])],["Sph\xE8re",()=>t.spawn(5,Yo[1])]]),a(Ul.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Ul.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function Xl(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Wr=(n,e,t)=>n+(e-n)*t,Ko=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function vd(n,e){let t=Math.floor(n),i=Math.floor(e),r=Ko(0,1,n-t),s=Ko(0,1,e-i);return Wr(Wr(Xl(t,i),Xl(t+1,i),r),Wr(Xl(t,i+1),Xl(t+1,i+1),r),s)}function Pv(n,e){return vd(n,e)*.54+vd(n*2.07+3.4,e*2.07-6.1)*.26+vd(n*4.2+9,e*4.2)*.13+vd(n*8.6,e*8.6-13)*.07}function Lv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Wr(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,y=0;if(c>.025)if(n){let b=Xl(p+792,l+677);b>.9988&&(y=(b-.9988)*49e3*Ko(.09,.3,c))}else{let[b,A]=r[p],E=2.8*u/(c+.16),U=b*E+3.6,D=A*E-8.1,w=Pv(U,D),M=Pv(U-.12,D-.09);g=Ko(.49,.66,w)*Ko(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(w-M)*5+(w-.54)*.8))}let v=n?1:Wr(.94,1,Ko(.05,.34,c));i[x]=Wr(h[0],(139+115*m)*v,g)+y,i[x+1]=Wr(h[1],(154+100*m)*v,g)+y*.94,i[x+2]=Wr(h[2],(178+77*m)*v,g)+y*.86,i[x+3]=255}}let a=new ii(i,1024,512,Pn);return a.colorSpace=ht,a.wrapS=Cn,a.magFilter=an,a.minFilter=In,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Dv(){let n=Lv(!1),e=Lv(!0),t=n.image.data.slice();for(let r=0;r<t.length;r+=4)t[r]*=.89,t[r+1]*=.61,t[r+2]*=.53;let i=new ii(t,n.image.width,n.image.height,Pn);i.colorSpace=ht;for(let r of[n,i,e])r.mapping=Pi,r.magFilter=an,r.minFilter=an,r.needsUpdate=!0;return{day:n,sunset:i,night:e}}function _d(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new ri(i);return r.colorSpace=ht,r}function Uv(n,e){let{day:t,sunset:i,night:r}=Dv(),s=[t,i,r],o=new De,a=new za("#a6d4ea",55,135),l=_d(128,128,(L,q)=>{let le=L.createRadialGradient(q/2,q/2,0,q/2,q/2,q/2);le.addColorStop(0,"#fff8df"),le.addColorStop(.12,"#fff3bd"),le.addColorStop(.18,"rgba(255,225,144,.40)"),le.addColorStop(1,"rgba(255,220,144,0)"),L.fillStyle=le,L.fillRect(0,0,q,q)}),c=new ka(new go({map:l,blending:ai,depthWrite:!1,fog:!1,toneMapped:!1}));c.scale.setScalar(34),n.add(c);let u=t.clone();u.mapping=Pi,u.needsUpdate=!0;let d=new Lo(e);n.environment=d.fromEquirectangular(u).texture,d.dispose();let f=new ol("#daeaff","#88724c",2.25),h=new cl("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(f,h,h.target);let p=new _,x=0,g=null,m=!0,y=null,v=null,b=!0,A=0,E=0,U=new _,D=null,w=null,M=null;function C(L,q){if(q==="#ffffff")return L;if(L===w&&q===M)return D;let le=L.image,me=document.createElement("canvas");me.width=le.width,me.height=le.height;let te=me.getContext("2d");return L.isDataTexture?te.putImageData(new ImageData(new Uint8ClampedArray(le.data),le.width,le.height),0,0):te.drawImage(le,0,0),te.globalCompositeOperation="multiply",te.fillStyle=q,te.fillRect(0,0,me.width,me.height),D?.dispose(),D=new ri(me),D.mapping=Pi,D.colorSpace=ht,D.flipY=L.flipY,w=L,M=q,D}function B(L){x=[0,1,2].includes(L)?L:0;let q=g??sm(x),le=Pe.degToRad(q.azimuth),me=Pe.degToRad(q.elevation);U.set(Math.cos(le)*Math.cos(me),Math.sin(me),Math.sin(le)*Math.cos(me)),p.copy(U).multiplyScalar(33),f.color.set(q.ambientColor),f.groundColor.set(q.groundColor),f.intensity=q.ambientPower,h.color.set(q.sunColor),h.intensity=q.sunPower,h.position.copy(h.target.position).add(p),c.material.color.set(q.sunColor),c.material.opacity=[1,.93,.22][q.preset]*Math.min(1,q.sunPower),c.visible=b&&q.sunPower>0;let te=q.sky==="image"&&v?v:s[q.preset];n.background=q.sky==="color"||!m?o.set(q.skyColor):C(te,q.skyTint),n.backgroundRotation.y=Pe.degToRad(q.rotation),a.color.set(q.fogColor),a.near=q.fogNear,a.far=q.fogFar,n.fog=q.fog?a:null,n.environmentIntensity=A*[1,.56,.09][q.preset]}function O(L,q=()=>{}){g=L;let le=L?.sky==="image"?L.skyImage:null;if(y!==le){y=le;let me=++E;v?.dispose(),v=null,le&&new oi().load(le,te=>{if(E!==me){te.dispose();return}te.colorSpace=ht,te.mapping=Pi,v=te,B(x),q()},void 0,()=>q())}B(x)}function Y(L){c.position.copy(L).addScaledVector(U,94)}function N(L){if(!h.castShadow)return;let q=h.target.position,le=Math.round(L.x/4)*4,me=Math.round(L.y/4)*4,te=Math.round(L.z/4)*4;q.x===le&&q.y===me&&q.z===te||(q.set(le,me,te),h.position.copy(q).add(p))}B(0);let V=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function J(L,q,le){let[,me,te]=V[q],ne=512;L.save(),L.scale(le/512,le/512),L.fillStyle=me,L.fillRect(0,0,ne,ne);let Se=q+19;function Ee(){return Se=Math.imul(Se,1664525)+1013904223>>>0,Se/4294967296}if(L.fillStyle=te,q===16){for(let ze=0;ze<16;ze++)for(let Be=0;Be<16;Be++)(Be+ze)%2===0&&L.fillRect(Be*32,ze*32,32,32);L.fillStyle="#ff3957",L.fillRect(253,0,6,512),L.fillRect(0,253,512,6)}else if([0,2,8,15].includes(q)){let ze=q===15?32:64;L.globalAlpha=.48;for(let Be=0;Be<ne;Be+=ze){L.fillRect(0,Be,ne,q===8?3:2);for(let bt=-ze;bt<ne;bt+=ze)L.fillRect(bt+Be/ze%2*(q===2?ze/2:0),Be,2,ze)}}else if([4,5,6,7,10,11,12].includes(q)){let ze=q===5?38:q===7?64:18;for(let Be=0;Be<ze;Be++){L.strokeStyle=te,L.globalAlpha=.08+Ee()*.22,L.lineWidth=q===5?1+Ee()*8:1+Ee()*4;let bt=Ee()*ne,kt=q===5?.018:.009;L.beginPath();for(let at=0;at<=ne;at+=8){let Ut=bt+Math.sin(at*kt+Be)*(q===6||q===7?4:12+Be%5*3)+(q===4?at*.28:0);at===0?L.moveTo(at,Ut):L.lineTo(at,Ut)}L.stroke()}}else{L.globalAlpha=.27;for(let ze=0;ze<120;ze++){let Be=Ee()*ne,bt=Ee()*ne,kt=2+Ee()*6;L.beginPath(),L.arc(Be,bt,kt,0,Math.PI*2),L.fill()}}if(q!==16)for(let ze=0;ze<4400;ze++)L.globalAlpha=.05+Ee()*.1,L.fillStyle=Ee()>.5?te:"#222324",L.fillRect(Ee()*ne,Ee()*ne,1+Ee()*4,1+Ee()*3);L.restore()}let F=new Set([0,2,4,5,8,15,16]),K=V.map(([L,q,le,me,te,ne],Se)=>{let Ee=F.has(Se)?512:256,ze=_d(Ee,Ee,bt=>J(bt,Se,Ee));ze.wrapS=ze.wrapT=Cn;let Be=new vt({map:ze,roughness:me,metalness:te,flatShading:!0,opacity:ne,transparent:ne<1,depthWrite:ne===1});return Be.name=L,Be}),ie=K.map(L=>L.map.image),fe=512,ye=K.map(L=>new xn({map:L.map,flatShading:!0,opacity:L.opacity,transparent:L.transparent,depthWrite:L.depthWrite})),we={value:0},Ce={value:.24},Re={value:null},se={value:0};function oe(){Re.value?.dispose(),Re.value=_d(512,512,(L,q)=>{L.fillStyle="#ffffff",L.fillRect(0,0,q,q);let le=q/52,me=q/64;for(let te of xe){if(!te.position||!te.half||te.position.y+te.half.y<.22)continue;let ne=(te.position.x+26)*le,Se=(te.position.z+54)*me,Ee=Math.min(55,te.half.x*le+5),ze=Math.min(72,te.half.z*me+6);L.save(),L.translate(ne+te.half.y*le*.2,Se+te.half.y*me*.24),L.scale(Ee,ze);let Be=L.createRadialGradient(0,0,.15,0,0,1);Be.addColorStop(0,"rgba(22,37,65,.54)"),Be.addColorStop(.58,"rgba(36,54,76,.29)"),Be.addColorStop(1,"rgba(38,48,57,0)"),L.fillStyle=Be,L.fillRect(-1,-1,2,2),L.restore()}})}for(let L of[...K,...ye])L.onBeforeCompile=q=>{q.uniforms.uFocusAmount=we,q.uniforms.uFocusRadius=Ce,q.uniforms.uLabLightmap=Re,q.uniforms.uLabBakedStrength=se,q.vertexShader=`varying vec3 vLabPosition;
`+q.vertexShader,q.vertexShader=q.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),q.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+q.fragmentShader,q.fragmentShader=q.fragmentShader.replace("#include <map_fragment>",`
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
      `)},L.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let xe=[],Ie=[];function ve(L,q,le,me,te,ne,Se,Ee=0,ze=0,Be=1,bt=1,kt=!1){let at=new He(kt?new it(te,ne,Se):yd(te,ne,Se),K[Ee]);at.position.set(q,le,me),at.rotation.x=ze,at.receiveShadow=!0,at.castShadow=!0,n.add(at);let Ut=new _(te/2,ne/2,Se/2),sn={mesh:at,position:at.position,quaternion:at.quaternion,half:Ut,min:Ut.clone().negate(),friction:Be,gravity:bt,name:L,type:Ee,shape:li(Ut)};return xe.push(sn),sn}let Xe=vy.map(({name:L,bounds:q,type:le=0,friction:me=.78,gravity:te=1})=>{let{xMin:ne,xMax:Se,zMin:Ee,zMax:ze}=q;return ve(L,(ne+Se)/2,-.33,(Ee+ze)/2,Se-ne,.66,ze-Ee,le,0,me,te)});for(let L of Object.values(My))for(let q of L)ve(...q);let{xMin:Ge,xMax:S,zMin:k,zMax:z}=xy;ve("But\xE9e arri\xE8re",0,1.35,k+.4,S-Ge,2.7,.6,2),ve("But\xE9e ouest",Ge+.3,1.05,(k+z)/2,.6,2.1,z-k,2),ve("But\xE9e est",S-.3,1.05,(k+z)/2,.6,2.1,z-k,2);let{xMin:H,xMax:W,zMin:I,zMax:j}=qo.hills.bounds,Z=W-H,he=j-I,pe=16,R=64,T=new ln(Z,he,pe,R).rotateX(-Math.PI/2).translate(H+Z/2,0,I+he/2),X=T.attributes.uv;for(let L=0;L<X.count;L++)X.setXY(L,X.getX(L)*Z/2.6,X.getY(L)*he/2.6);let ee=T.attributes.position,ue;function re(L){if(ue===L)return;ue=L;let q=ue*.017;for(let le=0;le<ee.count;le++){let me=ee.getX(le),te=ee.getZ(le),ne=Math.sin(Math.PI*Pe.clamp((me-H)/Z,0,1)),Se=Math.min(1,(te-I)*.48,(j-te)*.48),Ee=.93+.56*Math.sin(te*.36+q)+.32*Math.cos(me*.67+te*.26+q*1.4)+.19*Math.sin(te*.81+q*.67);ee.setY(le,Math.max(0,ne*Se*Ee))}ee.needsUpdate=!0,T.computeVertexNormals(),T.computeBoundingSphere()}re(yy);let Me=new He(T,K[3]);Me.userData.editorAssetId="lab-hill",Me.receiveShadow=Me.castShadow=!0,n.add(Me);let be=(L,q)=>{let le=Pe.clamp((L-H)/Z*pe,0,pe-1e-6),me=Pe.clamp((q-I)/he*R,0,R-1e-6),te=Math.floor(le),ne=Math.floor(me),Se=le-te,Ee=me-ne,ze=pe+1,Be=ne*ze+te,bt=ee.getY(Be),kt=ee.getY(Be+1),at=ee.getY(Be+ze),Ut=ee.getY(Be+ze+1);return Se+Ee<=1?bt+(kt-bt)*Se+(at-bt)*Ee:Ut+(at-Ut)*(1-Se)+(kt-Ut)*(1-Ee)};xe.push({heightfield:!0,mesh:Me,editorAssetId:"lab-hill",height:be,...qo.hills.bounds,friction:.81,gravity:1});function Ae(L,q,le,me,te=1.45){let ne=_d(384,72,(Ee,ze,Be)=>{Ee.fillStyle="#202a32",Ee.fillRect(0,0,ze,Be),Ee.fillStyle=me,Ee.font="bold 31px system-ui",Ee.textAlign="center",Ee.fillText(L,ze/2,48,ze-20)}),Se=new He(new ln(3.2,.6),new Rt({map:ne,side:pn}));Se.position.set(q,te,le),n.add(Se),Ie.push(Se)}for(let L of Object.values(qo)){Ae(L.name.toLocaleUpperCase("fr"),...L.sign,L.color);let{xMin:q,xMax:le,zMin:me,zMax:te}=L.bounds,ne=new Wa(new et().setFromPoints([new _(q,.025,me),new _(le,.025,me),new _(le,.025,te),new _(q,.025,te)]),new Ri({color:L.color,transparent:!0,opacity:.72}));n.add(ne),Ie.push(ne)}Ae("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Ae("MURS HAUTS",3,-31,"#e8d2ff"),Ae("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Ne=new vt({color:"#c8e6ed",metalness:1,roughness:.16}),de=new He(new Vt(.54,2),Ne);de.userData.editorAssetId="chrome-sphere",de.position.set(ed.x,ed.y,ed.z),de.castShadow=!0,n.add(de);let _e=V.map((L,q)=>{let{x:le,z:me}=by(q);return ve("\xC9chantillon "+V[q][0],le,.325,me,.65,.65,.65,q,0,1,1,!0).mesh}),Ye=new fn(1,12).rotateX(-Math.PI/2),Ve=new Rt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Le(L){let q=new He(Ye,Ve);return q.scale.setScalar(L),n.add(q),q}function tt(L,q,le,me,te,ne,Se,Ee){let ze=q>=3;e.shadowMap.enabled=ze,h.castShadow=ze,Ve.opacity=q===2?.17:.11,se.value=Ee?.38+le*.04:0;let Be=q>=9?2048:q>=6?1024:q>=4?512:256;h.shadow.intensity=.45+q*.055,h.shadow.radius=.65+q*.12;let bt=13+q*1.2;Object.assign(h.shadow.camera,{left:-bt,right:bt,top:bt,bottom:-bt}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==Be&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(Be,Be)),b=te,Se!==fe&&(fe=Se,K.forEach((at,Ut)=>{let sn=at.userData.texture??at.map,Xi=F.has(Ut)?Se:Math.min(256,Se);if(sn.image.width===Xi)return;let $r=document.createElement("canvas");$r.width=$r.height=Xi;let Kr=$r.getContext("2d");Xi>512?J(Kr,Ut,Xi):Kr.drawImage(ie[Ut],0,0,Xi,Xi);let Yi=new ri($r);Yi.colorSpace=sn.colorSpace,Yi.wrapS=sn.wrapS,Yi.wrapT=sn.wrapT,Yi.repeat.copy(sn.repeat);for(let _r of[at,ye[Ut]])_r.userData.texture=Yi,_r.map=Yi,_r.needsUpdate=!0;sn.dispose()}));let kt=L>=4;for(let at of xe)at.mesh?.isMesh&&!at.zone&&(at.mesh.material=kt?K[at.type]:ye[at.type]);Me.material=kt?K[3]:ye[3];for(let at=0;at<_e.length;at++)_e[at].material=kt?K[at]:ye[at];K.forEach((at,Ut)=>{for(let sn of[at,ye[Ut]])sn.userData.texture||(sn.userData.texture=sn.map),sn.map=ne?sn.userData.texture:null,sn.color.set(ne?"#ffffff":V[Ut][1]),sn.needsUpdate=!0}),A=me?.21+le*.067:0,Ne.metalness=me?.95:.1,Ne.roughness=me?.13:.46,m=L>=2,B(x)}return{boxes:xe,floors:Xe,probe:de,display:_e,visual:tt,shadow:Le,setTimeOfDay:B,setEnvironment:O,centerSky:Y,sunDirection:()=>U.clone(),centerShadows:N,lighting:[f,h,h.target,c],get hillSeed(){return ue},setHillSeed:re,bakeLightmap:oe,mapMaterial:(L,q)=>q>=4?K[L]:ye[L],builtObjects:[...xe.map(L=>L.mesh).filter(L=>L?.isObject3D),de,...Ie],materials:[...K,...ye],focus(L,q,le){we.value=L?q*.75:0,Ce.value=.07+le*.058}}}var g_="R38.9",Xr=document.getElementById("game");Xr instanceof HTMLCanvasElement||(Xr=document.createElement("canvas"),Xr.id="game",Xr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Xr));var Fs=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),je;try{je=new _h({canvas:Xr,antialias:!Fs,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}je.xr.enabled=!0;je.xr.setReferenceSpaceType("local-floor");je.shadowMap.type=hl;je.shadowMap.autoUpdate=!1;var Fv=-1/0;je.toneMapping=Pu;je.toneMappingExposure=1.15;var Dt=new us,yt=new Ct,Nd=new Ct,Ot=new Kt(70,1,.035,210);yt.add(Nd);Nd.add(Ot);Dt.add(yt);var Mt=Uv(Dt,je),R2=Cv(je),Ed=Ev();Dt.add(Ed);var I2=Rv(Mt.probe),G=cv(Fs),P2={...G};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(G.stepVolume=n)}catch{}var jr=mv();for(let n of["pointerdown","keydown"])addEventListener(n,jr.unlock,{passive:!0});var ia=gv(Dt),Ai=tg(),hm=0,Nv=0,Bv=0;addEventListener("error",n=>Ai.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Ai.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var Is={normal:new _,surface:null},Cd=[.18,.17,.105].map(n=>({radius:n,position:new _})),Cm=new _(Xo.x,Xo.y,Xo.z);yt.position.copy(Cm);var rn=new _,ea=new _,Pt=new _,Ov=new _,ui=new _,wn=new _,zv=new _,la=new _,dr=new _,Vv=new _,qr=new _,kv=new _,Yl=new _,L2=.105,bd=new _,Rd=!1,Vi=!1,Rm=0,Im=null,Ql=[],Pm=100,Jt=new _(0,1,0),yr=new qe,Tt=0,gr=0,Ns=0,di=0,Us=NaN,x_={armed:!0},dm=0,Ps=0,fm=0,Md=0,sa=0,oa=0,aa=0,cn=G.quality,$l=72,zi=0,Qt=!1,y_="left",pt=new URLSearchParams(location.search).has("room")?5:0,Lm=0,Dm=0,Um=0,zt=!0,Gv=0,D2=[],Sd=[],Jr=Mt.boxes,U2=new Vt(1,0),v_=1+Math.floor(Math.random()*(Mh.length-1)),__=Sh(v_),{hand:F2,fur:N2}=__;function B2(n,e,t,i,r,s,o,a){let l=new He(U2,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Bd=Kp(localStorage),O2=Bd.models.length?"|atelier-"+Ss(JSON.stringify(Bd)):"",Gi=By(Bd)??__.createHead();Gi.visible=!1;Dt.add(Gi);var ra=new _,Id=new qe,Hv=new _,z2=new _,Wv=new tn(0,0,0,"YXZ"),bm=new _,pm=new _,pr=new ge,qv=new qe,tc=9.81,b_=null,mm=new qe,Xv=[null,null];function Od(){return .24+G.arms*.036}function V2(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Pe.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Pe.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Pe.lerp(s[2],i,r),n.skin.pose(s,!G.body)}var Lt=["left","right"].map(n=>{let e=Ah(n,F2,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Dt.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new _,quaternion:new qe},target:new _,gripPosition:new _,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new _,supportOffset:new _,hasSupport:!1}}),Zr=new fd(_,Lt,ay),M_=Eh(N2,Lt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Lt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Hi=M_.mesh;Dt.add(Hi);function k2(n,e){if(G.body){mm.copy(Hi.quaternion).invert();for(let t=0;t<Lt.length;t++){let i=Lt[t];Xv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Hi.position).applyQuaternion(mm),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(mm))}M_.pose(Xv,Od(),n,e,G.hands)}}var Un=td(),S_=[0,1,2,3,4,5],w_=[7,8,9,10,11,12,13,14],lc=15,Yv=li(new _(.13,.088,.115)),G2=new it(.26,.176,.23),H2=new vt({color:"#536771",roughness:.36,metalness:.28});Un[lc]={name:"Cam\xE9ra du spectateur",geo:G2,material:H2,shape:Yv,lowShape:Yv,mass:1.2};var{props:W2,animate:q2}=hv(),X2=Ny(Bd).slice(0,36),Fm=[],nc=[];function T_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=wi(t??r.geo,i);e.push(Un.length),Un.push({...r,shape:s,lowShape:s})}}T_(W2,Fm);T_(X2,nc);var A_=[...S_,...w_,...Fm,...nc];Un[8].properties={supportWhileHeld:!0};Un[11].properties={supportWhileHeld:!0};function Y2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new _),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new _().setComponent(t,e.getComponent(t)*.49)}for(let n of Un)n&&(n.supportAxis=Y2(n));function Z2(n){let e=new He(new nn(.058,.074,.1,12).rotateX(Math.PI/2),new vt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new He(new fn(.048,12),new Rt({color:"#7bd7ed",side:pn}));t.position.z=-.203,n.add(t);let i=new He(new it(.045,.013,.012),new Rt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function E_(n,e=!1){let t=Un[n];if(!t)return null;let i=new He(t.geo,e?kl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===lc&&Z2(i),i}var dt=null,At=[],Zv=[],Qr={held:null},ua=new Map,mr=0,j2=1,Zl=new qe,ic=new qe,jl=new _,zd=new _,Ls=new _,C_=new _,R_=new _;function J2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){zd.set(0,0,-1).applyAxisAngle(Jt,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(jl.copy(n).addScaledVector(zd,s),jl.y+=.15,!Ll(n,jl,Math.min(.2,t*.5),Jr,C_,R_)&&!At.some(o=>o.mesh.position.distanceToSquared(jl)<(t+o.radius+.07)**2))return jl}}return null}function ha(n,e,t,i=!1){let r=Un[n];if(!r)return null;if(!e&&(t?Ls.set(t.x,t.y,t.z):je.xr.isPresenting?Ls.copy(Pt):Ot.getWorldPosition(Ls),e=J2(Ls,t?.yaw??gr,r.shape.radius),!e))return i||Qn("Aucun espace libre pour cet objet."),null;let s=E_(n);s.position.copy(e),Dt.add(s);let o=G.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:j2++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:G.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new _,angular:new _,offset:new _,relativeRotation:new qe,shadow:Mt.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===lc,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),At.push(a),Dl(a,Mt.boxes),Ai.record("object-spawn",{model:r.name,typeId:n,count:At.length}),a}function I_(){for(let n of Lt)Ti(n,!1);Ti(Qr,!1);for(let n of ua.values())Ti(n,!1)}function Yd(){I_();for(let n of At)if(Dt.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();At.length=0,ua.clear()}function P_(){if(dt?.assetLayer)return;let n=new Set(dt?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);Sy((e,t)=>{n.has(Yp[e])||ha(e,t)})}P_();function Ti(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+G.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function uc(){I_();for(let n of At)Kd(n),n.frozen=!!n.spec.properties?.frozen}function vr(){Us=NaN,di=0,Zd.reset(),yt.position.copy(Cm),Tt=Pe.degToRad(dt.yaw),Ns=0,yt.rotation.y=Tt,rn.set(0,0,0),x_.armed=!0,Vi=!1,Is.normal.set(0,0,0),Is.surface=null,Rd=!1,Zr.reset(),jr.reset(),pr.set(0,0);for(let n of Lt)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,Ti(n,!1)}uc();function L_(){return G.auto||Fs&&!je.xr.isPresenting}function Vd(){return L_()?Math.min(G.shadowQuality,cn):G.shadowQuality}function rc(){return L_()?Math.min(G.lightQuality,cn):G.lightQuality}function qi(){let n=G.texturePower;Mt.visual(cn,G.shadows?Vd():0,rc(),G.reflections,G.bloom,G.textures,2**(n-1),G.lightmap),dt.refreshMaterials?.(),je.shadowMap.needsUpdate=!0,Mt.setTimeOfDay(Qe.remoteLight??G.timeOfDay-1),Mm=Hd.slice(0,rc()>=8?3:rc()>=4?2:1),Jm.value=G.shaderMode-1;let e=je.xr.isPresenting&&je.xr.getBaseLayer?.()?.fixedFoveation!=null;Mt.focus(G.focus&&!e,G.focusStrength,G.focusSize),je.toneMappingExposure=.58+G.exposure*.114,ab.value=.55+G.contrast*.09,lb.value=G.saturation*.2,cb.value=(G.warmth-5)*.022,je.xr.setFoveation(G.focus?Pe.clamp((G.focusStrength+1)*.105+(5-G.focusSize)*.028+(G.auto?(7-cn)*.045:0),0,1):0),je.xr.isPresenting||hc(),zt=!0,Hm.redraw()}var jv=0,Jv=0,Qv=0;function hc(){if(je.xr.isPresenting)return;let n=Math.max(1,Xr.clientWidth||innerWidth),e=Math.max(1,Xr.clientHeight||innerHeight),t=rv(cn,devicePixelRatio,Fs);t!==Qv&&(je.setPixelRatio(t),Qv=t),(n!==jv||e!==Jv)&&(je.setSize(n,e,!1),jv=n,Jv=e),Ot.aspect=n/e,Ot.fov=G.viewFov,Ot.updateProjectionMatrix()}addEventListener("resize",hc);globalThis.visualViewport?.addEventListener("resize",hc);function Q2(n){Object.assign(G,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},md[n]),cn=G.quality,oa=aa=sa=0,qi()}var Bs=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",vr]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Xm]]],["Rendu",[]]],Nm=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Bm(){return pt===2?Nm[Lm][1]:pt===3?B_[Dm][1]:pt===4?Vm[Um][1]:Bs[pt][1]}function D_(n){pt=n,zi=0,zt=!0}var kd=null,U_=[],Pd=0,Kl=0,Gd=null,F_=!1,Om=0,zm=0,N_={},Hd=Array.from({length:3},()=>{let n=new al("#ffffff",0,22,1.6);return n.visible=!1,Dt.add(n),{light:n,mesh:null,distance:1/0}}),Mm=Hd,cc=new _;function $v(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(cc);if(t>34**2)return;let i=Mm[0];for(let r of Mm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function $2(n){n?Ot.getWorldPosition(cc):cc.copy(Pt);for(let t of Hd)t.mesh=null,t.distance=1/0;if(n)Qe.forEachReplica($v);else if(G.objects)for(let t of At)t.materialStyle===3&&$v(t.mesh);let e=20+rc()*.75;for(let{light:t,mesh:i}of Hd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function dc(){Ai.record("capture",{mode:je.xr.isPresenting?"VR":"PC"});let n=Ai.snapshot(je.xr.isPresenting?"VR":"PC");kd={game:"Gorilla Lab",version:g_.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:je.xr.isPresenting?"VR":"PC",sessionHadVR:F_,settings:{...G},qualityActive:cn,diagnostics:n,debugGeometry:{...ia.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:je.getPixelRatio()},haptics:Lt.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:b_,audio:{volume:G.stepVolume,enabled:G.stepAudio,clipsPlayed:jr.count,state:jr.state},performance:{fps:Ps,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:je.xr.isPresenting?Gd:null,previousVR:Gd,renderer:N_,terrainSeed:Mt.hillSeed,map:dt.active?{name:dt.name,pieces:dt.nodes}:null,objects:{physics:{...Il},total:At.length,held:At.filter(e=>e.owner).length,frozen:At.filter(e=>e.frozen).length},cloud:{role:Qe.role,connected:Qe.connected,replicas:Qe.replicaCount,...Qe.stats},locomotion:{trackedFrames:zm,contactFrames:Om,launchCount:Rm,lastLaunch:Im,standingHeight:Number.isFinite(Us)?Us:null,viewOffset:di}},document.querySelector("#download-report").disabled=!1,zt=!0}function K2(){kd||dc();let n=URL.createObjectURL(new Blob([JSON.stringify(kd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=K2;document.querySelector("#capture-report").onclick=dc;var da=document.createElement("input");da.id="report-note";da.maxLength=500;da.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";da.setAttribute("aria-label","Sc\xE9nario du rapport");da.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(da);var sc=document.createElement("p");sc.setAttribute("aria-live","off");document.querySelector("#settings").after(sc);Bs[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",dc]);var eC=Array.from({length:Math.ceil(nc.length/8)},(n,e)=>["Atelier"+(nc.length>8?" "+(e+1):""),nc.slice(e*8,e*8+8)]),B_=[["Basiques",S_],["D\xE9taill\xE9s",w_],["Anim\xE9s",Fm],...eC].map(([n,e])=>[n,[...e.map(t=>[Un[t].name,()=>Ym(t)]),["Tout retirer",jd]]]);Bs.push(["Spawn",[]]);var Vm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{dt.blank(),G.mapEdit=!0}],["Annuler placement",()=>dt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>dt.recenter(Pt.x,yt.position.y,Pt.z,gr)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{dt.reset(),G.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>o_(!1)],["Utiliser comme t\xEAte",()=>o_(!0)]]]];Bs.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",z_],["Tester vibration droite",V_],["\xC9couter un pas",k_],["Capturer un rapport",dc]]]);function O_(n){let e=Lt.find(i=>i.side===n),t=e?.valid&&im(e,.45,65);Ai.record("haptic-test",{side:n,supported:!!t}),Qn(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function z_(){O_("left")}function V_(){O_("right")}function k_(){jr.unlock().then(()=>jr.play(G.stepVolume))}function G_(){try{localStorage.setItem("gorilla-lab-step-volume",String(G.stepVolume))}catch{}}var tC=document.querySelector("#section"),wd=document.querySelector("#settings"),nC=document.querySelector("#readings"),km=[1,.75,.5,.25];function Tn(n,e){if(Ai.record("setting",{key:n,step:e,previous:G[n]}),n==="mirrorQuality"){G.mirrorQuality=Pe.clamp(G.mirrorQuality+e,1,3),zt=!0;return}if(n==="debugSpeed"){G.debugSpeed=Pe.clamp(G.debugSpeed+e,1,km.length),Zr.reset(),zt=!0;return}if(n==="stepVolume"){G.stepVolume=Pe.clamp(G.stepVolume+e,1,10),G_(),zt=!0;return}if(n==="viewFov"){G.viewFov=Pe.clamp(G.viewFov+5*e,50,105),hc(),zt=!0;return}if(n==="vrFov"){G.vrFov=Pe.clamp(G.vrFov+5*e,55,100),zt=!0;return}if(n==="shaderMode"){G.shaderMode=(G.shaderMode-1+e+pd.length)%pd.length+1,Jm.value=G.shaderMode-1,zt=!0;return}if(n==="timeOfDay"){if(Qe.role==="player"){let i=((Qe.remoteLight??G.timeOfDay-1)+e+3)%3;Qe.sendAction({type:"world",mode:1,typeId:i})}else G.timeOfDay=(G.timeOfDay-1+e+3)%3+1;qi();return}let t={mapMode:9,mapShape:5,mapMaterial:om.length,mapSurface:4,mapTurn:8,mapTexture:hd.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];G[n]=(G[n]-1+e+i)%i+1,zt=!0;return}if(n==="mapEdit"&&!G.mapEdit&&!dt.active&&dt.load(bv(Mt.boxes)),n==="toolMode"){G.toolMode=(G.toolMode-1+e+Rs.length)%Rs.length+1,je.xr.isPresenting||Qn("Outil \xB7 "+Rs[G.toolMode-1]),zt=!0;return}if(n==="preset"){let i=Object.keys(md);G.preset=(G.preset-1+e+i.length)%i.length+1,Q2(i[G.preset-1]);return}if(typeof G[n]=="boolean"?G[n]=!G[n]:G[n]=Pe.clamp(G[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Lt)i.valid=!1,i.surface=null;if(n==="quality"&&(G.auto=!1,cn=G.quality),n==="auto"&&!G.auto&&(cn=G.quality),n==="movement"||n==="collisions")for(let i of Lt)i.surface=null;if(n==="objects"&&!G.objects&&uc(),n==="blasterActive"&&G.blasterActive&&(G.toolActive=!1),n==="toolActive"&&G.toolActive&&(G.blasterActive=!1),!G.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Lt)i.held?.toolHold&&Ti(i,!1);qm(!1)}n==="preciseHitboxes"&&H_(),qi()}function H_(){for(let n of At)n.precise=G.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||Dl(n,Mt.boxes)}function W_(){let n=(pt===2?Nm:pt===4?Vm:null)?.flatMap(e=>e[1])??Bm();for(let[,e]of n)typeof e=="string"&&(G[e]=P2[e]);pt===6&&(G_(),Zr.reset()),pt===0&&vr(),pt===1&&(H_(),uc()),pt===3&&jd(),pt===2&&(cn=G.quality),qi()}function Jl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),fa(),zt=!0},t}function q_(n){return n==="preciseHitboxes"?G[n]?"High":"Low":G[n]?"Actif":"Coup\xE9"}function Gm(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][G[n]-1];if(n==="debugRange")return G[n]*5+" m";if(n==="debugBudget")return G[n]*1e3+" segments";if(n==="debugSpeed")return Qe.role?"\xD71 en ligne":"\xD7"+km[G.debugSpeed-1];if(n==="stepVolume")return G.stepVolume+"/10";if(n==="viewFov")return G.viewFov+"\xB0";if(n==="vrFov")return G.vrFov===100?"Natif":G.vrFov+" %";if(n==="mapTexture")return G[n]===1?"Aucune":hd[G[n]-2];if(n==="terrainResolution")return[8,16,32,48][G[n]-1]+"\xB2";if(n==="shaderMode")return pd[G.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=G[n],t=n==="shadowQuality"?Vd():rc();return t===e?e+"/10":e+"/10 \xB7 "+t+(G.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Qe.remoteLight??G.timeOfDay-1]:n==="mapMode"?Q_[G.mapMode-1]:n==="mapShape"?uC[G.mapShape-1]:n==="mapSurface"?hC[G.mapSurface-1]:n==="mapMaterial"?om[G.mapMaterial-1]:n==="mapTurn"?(G.mapTurn-1)*45+"\xB0":n==="toolMode"?Rs[G.toolMode-1]:n==="preset"?Object.keys(md)[G.preset-1]:n==="texturePower"?[2**(G[n]-1),2**(G[n]-1)].join("\xD7"):G[n]}function Sm(){return pt===2?Nm:pt===3?B_:Vm}function X_(){return pt===2?Lm:pt===3?Dm:Um}function Y_(n){pt===2?Lm=n:pt===3?Dm=n:Um=n}function Z_(n){return n===z_||n===V_?"Tester":n===dc?"Capturer":n===k_?"\xC9couter":n===Yd||n===jd?"Vider":n===vr||n===Xm?"R\xE9initialiser":pt===3?"Cr\xE9er":"Appliquer"}function fa(){if(tC.textContent=Bs[pt][0],j_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===pt))),wd.replaceChildren(),iC.hidden=pt!==5,document.querySelector("#restore").hidden=pt===5,pt!==5){if(pt>=2&&pt<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),Sm().forEach(([e],t)=>{let i=Jl(e,()=>Y_(t));i.setAttribute("aria-pressed",String(X_()===t)),n.append(i)}),wd.append(n)}if(pt===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",wd.append(n)}for(let[n,e]of Bm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Jl(Z_(e),e)):typeof G[e]=="boolean"?i.append(Jl(q_(e),()=>Tn(e,1))):i.append(Jl("\u2212",()=>Tn(e,-1)),document.createTextNode(" "+Gm(e)+" "),Jl("+",()=>Tn(e,1))),t.append(i),wd.append(t)}}}var j_=document.querySelectorAll("[data-page]"),iC=document.querySelector("#cloud-access");j_.forEach((n,e)=>n.onclick=()=>{D_(e),fa()});document.querySelector("#restore").onclick=()=>{W_(),fa()};fa();function J_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new ri(s);a.colorSpace=ht;let l=new He(new ln(t,i),new Rt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var yn=J_(640,652,.84,.86,Dt);yn.mesh.visible=!1;var hi=J_(416,84,.32,.065,Dt);hi.mesh.visible=!1;var ta=new Kt(75,1,.07,20),Dn=new vl(new ln(1.7,1.95),{color:16054015,textureWidth:Fs?128:256,textureHeight:Fs?128:256,clipBias:.004,multisample:0}),Kv=new _,Td=new _,e_=new _,t_=new _,gm=new qe,rC=new _,sC=new qe().setFromAxisAngle(Jt,Math.PI),oC=new _(Vr.x,Vr.y,Vr.z);Dn.position.set(Vr.x,Vr.y,Vr.z);Dn.rotation.y=Math.PI;Dt.add(Dn);var fc=new He(new it(1.8,2.03,.1),new xn({color:"#344650"}));fc.userData.editorAssetId="lab-mirror";fc.position.copy(Dn.position).z+=.064;Dt.add(fc);var aC=Dn.onBeforeRender.bind(Dn);Dn.onBeforeRender=()=>{};Dn.visible=!1;var na=-1/0,n_=null,i_=0,wm=0;function lC(n,e){if(wm=0,Dn.visible=!1,!G.reflections||G.mirrorQuality===1){na=-1/0;return}if(ta.position.copy(Pt),e){let u=e.transform.orientation;ta.quaternion.set(u.x,u.y,u.z,u.w).premultiply(Id.setFromAxisAngle(Jt,Tt))}else Ot.getWorldQuaternion(ta.quaternion);e_.set(0,0,-1).applyQuaternion(ta.quaternion);let t=null,i=3;function r(u,d,f){Td.subVectors(d,Pt);let h=Td.length();Kv.set(0,0,1).applyQuaternion(f),!(h>=i||Td.dot(Kv)>=-.15||Td.dot(e_)<=.66*h)&&(t=u,i=h,Dn.position.copy(d),Dn.quaternion.copy(f))}dt.usesBuiltInMirror&&r(fc,oC,sC);for(let{mesh:u}of dt.mirrors()){let{mirrorSize:d}=u.userData;gm.copy(u.quaternion),t_.copy(u.position).add(rC.set(0,0,d.d/2+.002).applyQuaternion(gm)),r(u,t_,gm)}if(!t){na=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};Dn.scale.set(s/1.7,o/1.95,1),Dn.visible=!0,n_!==t&&(n_=t,na=-1/0);let a=G.mirrorQuality,l=a===3?Fs||je.xr.isPresenting?256:768:128;if(i_!==l&&(Dn.getRenderTarget().setSize(l,l),i_=l,na=-1/0),n-na<(a===3?45:110))return;na=n,ta.updateMatrixWorld(!0),Dn.updateMatrixWorld(!0),Gi.visible=G.body;let c=performance.now();try{aC(je,Dt,ta)}finally{Gi.visible=!1}wm=performance.now()-c}var Wi=new rr,Jn=new _,kn=new _,Ad=new _,r_=new _,ec=null,Ld=null,Dd=null,cC=new Set(Dt.children),Hm=Iv(Dt,Mt.boxes,{spawn:Ym,clear:jd,resetPlayer:vr,resetObjects:Xm,quality:()=>cn+"/10",resolution:()=>G.resolution+"/10 \xB7 relancer VR",textureSize:()=>Gm("texturePower"),qualityNext:()=>{G.quality>=10&&(G.quality=0),Tn("quality",1)},resolutionNext:()=>{G.resolution>=10&&(G.resolution=0),Tn("resolution",1)},textureNext:()=>{G.texturePower>=12&&(G.texturePower=0),Tn("texturePower",1)},hitbox:()=>Tn("preciseHitboxes",1),movement:()=>Tn("movement",1)}),Q_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],uC=["Bloc","Rampe","Mur","Dalle","Terrain"],hC=["Normale","Glace","Caoutchouc","Lune"],s_=new Map;function dC(){for(let n of dt.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d,n.gravity,n.bounce]),t=s_.get(e);if(t===void 0){let r=new _(n.w,n.h,n.d),s=Zo(n.model,r);s.scale(n.w,n.h,n.d);let o=zl(n.model,r),a=wi(o);o.dispose(),t=Un.length,Un.push({id:n.model.id,name:n.model.name,geo:s,material:Gr(n.model),shape:a,lowShape:a,assetId:n.model.assetId??null,physics:sd({physics:{gravity:n.gravity,bounce:n.bounce}}),properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Pe.clamp(n.w*n.h*n.d*9,.18,12)}),s_.set(e,t)}let i=ha(t,new _(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Pe.degToRad(n.pitch),Pe.degToRad(n.yaw),Pe.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}dt=Av({scene:Dt,arena:Mt,boot:Cm,onReset:n=>{Yd(),vr(),Tt=Pe.degToRad(n),dt.builtIn&&P_(),dC()},onVisual:qi,getLevel:()=>cn,defaultObjects:[...Mt.builtObjects,...Dt.children.filter(n=>!cC.has(n)),fc]});var Qe=Nx({scene:Dt,currentMap:()=>(dt.signature||"arena-r25-"+Mt.hillSeed)+O2,seedArena:n=>Mt.setHillSeed(n),makeReplica:n=>{let e=E_(n,!0);return e&&pa(e.material),e},onAction:yC,onStatus:()=>{pt===5&&(zt=!0)},onShot:n=>Zd.receiveShot(n,Qe.role==="vr"),applyLight:n=>{Mt.setTimeOfDay(n??G.timeOfDay-1),zt=!0,je.xr.isPresenting||fa()}});function o_(n){let e=dt.modelPieces();if(!e.length||e.length>Fi.parts){Qn("Compose un mod\xE8le de 1 \xE0 "+Fi.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Kp(localStorage);if(t.models.length>=Fi.models){Qn("La collection de mod\xE8les est pleine.");return}let i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0);for(let c of e)i.min(new _(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new _(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:G.modelGrab,frozen:G.modelFrozen,collidable:G.modelCollidable,supportWhileHeld:G.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?_v[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem($p,JSON.stringify(Cs(t))),Qn("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{Qn("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var xm=new Map;function fC(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][G.mapShape-1],e=Jo({detail:[8,16,32,48][G.terrainResolution-1],amplitude:(G.terrainAmplitude-1)*.34,frequency:.05+G.terrainFrequency*.025,seed:G.terrainSeed,grass:(G.terrainGrass-1)/9,shrub:(G.terrainShrub-1)/9}),t=G.mapTexture-2;return t>=0&&!xm.has(t)&&xm.set(t,tv(t).toDataURL("image/webp",.83)),Wl({...n,material:G.mapMaterial-1,yaw:G.mapShape===5?0:(G.mapTurn-1)*45,...am[Object.keys(am)[G.mapSurface-1]],texture:xm.get(t)??null,terrain:G.mapShape===5||G.mapMode===9?e:null,brushRadius:.5+G.brushRadius*.5,brushStrength:G.brushStrength*.15})}function pC(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Jn.set(s.x,s.y-di,s.z).applyAxisAngle(Jt,Tt).add(yt.position),yr.set(o.x,o.y,o.z,o.w),kn.set(0,0,-1).applyQuaternion(yr).applyAxisAngle(Jt,Tt),dt.edit(Jn,kn,i,{mode:G.mapMode,piece:fC(),head:Pt,feet:yt.position.y}),i&&(zt=!0)}function mC(n){if(!dt.builtIn||!n.valid||n.held||n.remoteHeld||Qt)return;let e=null;for(let t of Hm.targets)if(t.getWorldPosition(r_),!(n.mesh.position.distanceToSquared(r_)>.11**2)&&(t.worldToLocal(Ad.copy(n.mesh.position)),Math.abs(Ad.x)<t.userData.touchWidth*.5+.025&&Math.abs(Ad.y)<.095&&Math.abs(Ad.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Tm(n,e,t){if(!dt.builtIn)return;Wi.set(n,e),Wi.far=5.5;let i=Wi.intersectObjects(Hm.targets,!1);Wi.far=1/0;let r=i[0];r&&(Os.visible=!0,Os.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),fa()))}var a_=new _,$_=new qe,Wm=Ch(Dt),Zd=av({scene:Dt,rig:yt,camera:Ot,arena:Mt,objects:At,spectator:Qe}),UL=Wm.mesh,Ud=new _,xr=new qe,Wd=new _,ca={mode:0,position:Wd,quaternion:xr,end:Ud},l_=new _,gC=new _,c_=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var qd=new _,xC={position:Wd,quaternion:xr,pressure:[.1,.66,.08]},ym=new _,Xd=new qe;function qm(n){Qr.held&&Ti(Qr,n)}function K_(n,e){if(Qe.role==="pc"){Qn("Rejoins le salon en joueur pour modifier les objets.");return}if(Qe.role!=="player"){e();return}Qe.sendAction({type:"world",mode:3,typeId:n})||Qn("Attends la connexion \xE0 l\u2019h\xF4te.")}function jd(){K_(0,Yd)}function Xm(){K_(1,uc)}function Ym(n,e=null){if(G.objects=!0,Qe.role==="pc"){Qn("Commence par rejoindre le salon en joueur.");return}Qe.role==="player"?Qe.sendAction({type:"spawn",typeId:n})||Qn("Attends la connexion \xE0 l\u2019h\xF4te."):ha(n,e)}function yC(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(G.timeOfDay=n.typeId+1,qi()):n.mode===3&&[Yd,uc][n.typeId]?.();return}if(n.type==="spawn"){A_.includes(n.typeId)&&(G.objects=!0,ha(n.typeId,null,e));return}let t=At.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=ua.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},ua.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?Qe.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),Ti(o,!0)}return}if(!G.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ls.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?$h(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Ll(l,t.mesh.position,.01,Jr,C_,R_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Zm(t,s,o,Pe.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,ic.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(ic))}}function vC(n){if(je.xr.isPresenting)for(let t of Lt)t.valid&&t.held&&vm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of ua){let r=Qe.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){Ti(i,!1),ua.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ls.copy(s?.position??r.avatar?.tool?.position??r),zd.set(0,0,-1).applyQuaternion(i.controllerRotation),vm(o,Ls,zd,i.controllerRotation,n)}let e=Qr.held;e&&(Ot.getWorldPosition(qd),Ot.getWorldDirection(a_),Ot.getWorldQuaternion(xr),vm(e,qd,a_,xr,n))}function vm(n,e,t,i,r){n.toolHold?ym.copy(e).addScaledVector(t,n.toolDistance):ym.copy(n.offset).applyQuaternion(i).add(e),Xd.multiplyQuaternions(i,n.relativeRotation),ly(n,ym,Xd,Jr,r)}function eb(n){return n.customMaterial||(n.mesh.material=kl(n.mesh.material),n.customMaterial=!0,pa(n.mesh.material)),n.mesh.material}function _C(n){let e=eb(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function tb(n,e,t){Wi.set(n,e),Wi.far=9;let i=Wi.intersectObjects(t,!1)[0];return Wi.far=1/0,Ud.copy(n).addScaledVector(e,i?.distance??9),Ll(n,Ud,.006,Jr,l_,gC)?(Ud.copy(l_),null):i}function Zm(n,e,t,i){if(e===1){if(t?.held){t===Qr?qm(!0):Ti(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??xr;n.relativeRotation.multiplyQuaternions($_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Dt.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();At.splice(At.indexOf(n),1)}else if(e===4&&!n.protected){qd.copy(n.mesh.position).addScaledVector(Jt,n.radius*2+.08);let r=ha(n.netType,qd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=kl(n.mesh.material),r.customMaterial=!0,pa(r.mesh.material)),Dl(r,Mt.boxes))}else if(e===5){let r=eb(n),s=c_[n.paint++%c_.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,_C(n));zt=!0}}var Yr=[];function nb(n,e,t,i){if(!G.objects)return;let r=Qe.role==="player";if(Yr.length=0,r)Qe.forEachReplica(a=>Yr.push(a));else for(let a of At)!a.owner&&a.mesh.visible&&Yr.push(a.mesh);let s=tb(n,e,Yr);if(ca.mode=G.toolMode,i?(Wd.copy(i.mesh.position),xr.copy(i.controllerRotation)):(Ot.getWorldQuaternion(xr),Wd.set(.16,-.17,-.43).applyQuaternion(xr).add(n)),Wm.update(ca),!t)return;if(r){if(G.toolMode===1&&mr)Qe.sendAction({type:"release",objectId:mr}),mr=0;else if(s){let a=s.object.userData.netId;Qe.sendAction({type:"tool",mode:G.toolMode,objectId:a})&&G.toolMode===1&&(mr=a)}return}let o=s&&At.find(a=>a.mesh===s.object);Zm(o,G.toolMode,i??Qr,s?Pe.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function bC(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;Jn.set(o.x,o.y-di,o.z).applyAxisAngle(Jt,Tt).add(yt.position),yr.set(a.x,a.y,a.z,a.w),kn.set(0,0,-1).applyQuaternion(yr).applyAxisAngle(Jt,Tt),nb(Jn,kn,r,i)}function MC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Jn.set(s.x,s.y-di,s.z).applyAxisAngle(Jt,Tt).add(yt.position),yr.set(o.x,o.y,o.z,o.w),kn.set(0,0,-1).applyQuaternion(yr).applyAxisAngle(Jt,Tt),Tm(Jn,kn,i)}var Os=B2(Dt,new Rt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Os.visible=!1;var Am=[],Ds=null;function u_(){let n=yn.ctx;Am=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+g_,25,42),n.font="20px system-ui",n.fillText(Ps+" FPS   \xB7   Q "+cn+"/10   \xB7   "+(G.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",Am.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/Bs.length);if(Bs.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>D_(l),pt===l?"#586d53":"#334b58")),pt===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Qe.caption,25,145,587),n.fillText("Salons publics",25,190),bl.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>Qe.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>Qe.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Qe.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Qe.leave()),e(325,579,287,44,"Fermer",()=>Qt=!1),yn.texture.needsUpdate=!0;return}let i=pt>=2&&pt<=4;i&&Sm().forEach(([a],l)=>{let c=X_()===l,u=Math.min(144,Math.floor(586/Sm().length)-4);e(25+l*(u+4),114,u,38,a,()=>Y_(l),c?"#546947":"#263d49")});let r=Bm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));zi=Math.max(0,Math.min(zi,o-1)),r.slice(zi*s,(zi+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,Z_(l),l):typeof G[l]=="boolean"?e(406,u,206,36,q_(l),()=>Tn(l,1),G[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>Tn(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Gm(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>Tn(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{zi=(zi+o-1)%o,zt=!0}),e(432,533,180,35,"Suivant",()=>{zi=(zi+1)%o,zt=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(zi+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",W_),e(325,579,287,44,"Fermer",()=>Qt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(jm||(pt===6?"v "+rn.length().toFixed(2)+" m/s | g "+tc.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":pt===4&&dt.status?dt.status.slice(0,64):kd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),yn.texture.needsUpdate=!0}function SC(n){Qt=!Qt,Qt&&(y_=n,Hv.set(0,0,-1).applyAxisAngle(Jt,gr),yn.mesh.position.copy(Pt).addScaledVector(Hv,1.25),yn.mesh.position.y+=.08,yn.mesh.lookAt(Pt),yn.mesh.updateMatrixWorld(!0)),zt=!0}function wC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Jn.set(s.x,s.y-di,s.z).applyAxisAngle(Jt,Tt).add(yt.position),yr.set(o.x,o.y,o.z,o.w),kn.set(0,0,-1).applyQuaternion(yr).applyAxisAngle(Jt,Tt),Wi.set(Jn,kn);let a=Wi.intersectObject(yn.mesh)[0];if(a&&(Os.visible=!0,Os.position.copy(a.point).addScaledVector(kn,-.012),i)){let l=a.uv.x*yn.w,c=(1-a.uv.y)*yn.h;Am.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),zt=!0}}var Jd=iv(),{held:ki,pressed:fr}=Jd,ib=lv(je.domElement,document.querySelector("#touch-fire")),h_=document.querySelector("#game-settings"),rb=document.querySelector("#open-settings"),Em=document.querySelector("#game-hint"),Fd=0;function Qn(n){Em.textContent=n,Em.hidden=!1,Fd=performance.now()+2400,jm=n,zt=!0}var jm="";function Qd(n){let e=n??!h_.hidden;h_.hidden=e,rb.hidden=!e,e&&je.domElement.focus()}rb.onclick=()=>Qd(!1);document.querySelector("#close-settings").onclick=()=>Qd(!0);var oc=nv({canvas:je.domElement,enabled:()=>!je.xr.isPresenting,onLook:(n,e,t)=>{Tt-=n*t,Ns=Pe.clamp(Ns-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&fr.add(e)},onMenu:()=>Qd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!je.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Qd();return}n.code==="Space"&&n.preventDefault(),Jd.down(n.code,n.repeat),n.code==="KeyR"&&vr()}});addEventListener("keyup",n=>Jd.up(n.code));addEventListener("blur",()=>{Jd.clear(),oc.clear(),ib.clear()});function TC(n,e){if(!G.objects)return!1;let t=Qe.role==="player";if(t&&mr)return Qe.sendAction({type:"release",objectId:mr}),mr=0,!0;if(Qr.held)return qm(!0),!0;if(Yr.length=0,t)Qe.forEachReplica(r=>Yr.push(r));else for(let r of At)!r.owner&&r.mesh.visible&&Yr.push(r.mesh);let i=tb(n,e,Yr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;Qe.sendAction({type:"hold",objectId:r})&&(mr=r)}else Ot.getWorldQuaternion(xr),Zm(At.find(r=>r.mesh===i.object),1,Qr,Math.max(.75,i.distance));return!0}var _m=[];function sb(){return _m.length=0,Qe.forEachReplica(n=>{let e=n.userData.netType;if(!Un[e]||Un[e].properties?.collidable===!1||n.userData.held)return;let t=Un[e],i=G.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=G.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},_m.push(r)}),_m}function AC(){Qe.role!=="vr"||!Qe.remoteSpectator||At.some(n=>n.netType===lc)||ha(lc,null,null,!0)}var ac=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{ac.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});ac.onclick=async()=>{let n;jr.unlock();try{ac.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),je.xr.setFramebufferScaleFactor(.45+G.resolution*.055),await je.xr.setSession(n),qi(),$l=n.frameRate||72,Ql=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Ql.includes(120)?120:Ql.find(t=>t>=100)??Ql.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}$l=n.frameRate||$l,Pm=Math.min(100,$l),G.auto&&(cn=Math.min(cn,4),sa=oa=aa=0),U_=[],Ai.reset(),Pd=0,Kl=0,Om=zm=Rm=0,Im=null,F_=!0,Gd=null,Us=NaN,di=0,vr(),qi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),ac.disabled=!1,document.querySelector("#status").textContent=e.message}};je.xr.addEventListener("sessionend",()=>{ac.disabled=!1,Qt=!1,yn.mesh.visible=!1,hi.mesh.visible=!1,document.body.classList.remove("immersive"),vr(),hc()});function ob(n){if(!dt.active){for(let e of Mt.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(dt.active){let e=-1/0,t;for(let i of Mt.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function d_(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Qe.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Qt||!e||n.grip||!G.objects)return;let i=null,r=.15;if(Qe.forEachReplica(s=>{if(s.userData.held)return;let o=Un[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=$h(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;Qe.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function EC(n,e,t){let i=[...n.session.inputSources];for(let r of Lt){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&G.hands&&!G.body,!o){Qe.role==="player"&&d_(r,!1),r.valid=!1,r.surface=null,Ti(r,!1);continue}pv(r,o.transform,di,Tt,yt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Zl.copy(r.controllerRotation),V2(r,s.gamepad?.buttons??[],t),Qe.role==="player")d_(r,a);else if(!Qt&&a&&!r.grip&&G.objects&&!r.held){let h=null,p=.15;for(let x of At){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let g=$h(r.target,x);g<p&&(p=g,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,ic.copy(Zl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(ic),h.relativeRotation.multiplyQuaternions(ic,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&Ti(r,!Qt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Xd.multiplyQuaternions(Zl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Xd),la.copy(l.offset).applyQuaternion(Zl);let h=r.supportOffset.dot(la);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(la),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion($_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Jt,Tt):r.aimDirection.set(0,0,-1).applyQuaternion(Zl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&SC(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!Qt&&Tn("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&G.toolActive&&!Qt&&Tn("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if(Qt){let h=f&&!r.trigger;(h||!Ds||!Ds.click&&r.side!==y_)&&(Ds={source:s,click:h})}else!Qt&&r.side==="right"&&G.mapEdit?Dd={source:s,click:f&&!r.trigger}:!Qt&&r.side==="right"&&G.toolActive?Ld={source:s,hand:r,click:f&&!r.trigger}:!Qt&&!G.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(ec={source:s,click:f&&!r.trigger});r.trigger=f}}function f_(n,e){let t=n?-ra.y:Math.max(0,-Math.sin(Ns)),i=0,r=0,s=0;if(n){qv.setFromAxisAngle(Jt,-gr);for(let u of Lt)u.valid&&(pm.copy(u.gripPosition).sub(Pt).applyQuaternion(qv),i+=pm.x-(u.side==="left"?-.2:.2),r+=pm.z+.24,s++)}let o=s?Pe.clamp(-r/s,-.35,.45):0,a=s?Pe.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?rg(t,o):-.31*Pe.smoothstep(t,.2,.92);pr.x=Pe.lerp(pr.x,c,l),pr.y=Pe.lerp(pr.y,-a*.62,l),Wv.set(pr.x,gr,pr.y,"YXZ"),Hi.quaternion.setFromEuler(Wv)}function CC(n,e,t,i,r=i){let s=!!t,o=.43+G.size*.088;if(s){let f=t.transform.position;Us=ig(Us,f.y),di=Pe.clamp(Us-o,-.65,1.7),Nd.position.y=-di,ui.set(f.x,f.y-di,f.z);let h=[...n.session.inputSources].find(g=>g.handedness==="right"),p=Km(h?.gamepad),x=eg(x_,p,{menu:Qt,allowMenu:G.snapWithMenu});x&&(Ai.record("snap-turn",{direction:x,menu:Qt}),wn.copy(ui).applyAxisAngle(Jt,Tt),Tt-=x*Math.PI/4,Ov.copy(ui).applyAxisAngle(Jt,Tt),yt.position.add(wn.sub(Ov)),Zr.reset(),Rd=!1)}else Nd.position.y=0,ui.set(0,o,0),Ot.position.copy(ui),Ot.rotation.set(Ns,0,0,"YXZ");if(Pt.copy(ui).applyAxisAngle(Jt,Tt).add(yt.position),s){let f=t.transform.orientation;Id.set(f.x,f.y,f.z,f.w),ra.set(0,0,-1).applyQuaternion(Id),ra.x**2+ra.z**2>.018&&(gr=Tt+Math.atan2(-ra.x,-ra.z))}else gr=Tt;let a=ob(Pt),l=9.81*(G.gravity/5)*(a?.gravity??1);tc=l,Vv.copy(yt.position);let c=Qe.role==="player"?sb():At;if(s){EC(n,e,r),f_(!0,r),Lt.some(f=>f.valid)&&zm++,Sd.length=0;for(let f of Jr)Sd.push(f);if(G.collisions&&G.objects)for(let f of c)f.handCollider&&!f.owner&&Sd.push(f.handCollider);Zr.move({head:Pt,dt:i,inputDt:r,gravity:l,settings:G,boxes:Sd,velocity:rn,movement:ea,reach:Od()*2+.16});for(let f of Lt)ov(f,G.stepHaptics,r,.08+G.stepHapticStrength*.04,40)}else{f_(!1,r),rn.y-=l*i;let f=Number(ki.has("KeyD"))-Number(ki.has("KeyA")||ki.has("KeyQ"))+oc.movement.x,h=Number(ki.has("KeyS"))-Number(ki.has("KeyW")||ki.has("KeyZ"))+oc.movement.z,p=ki.has("ShiftLeft")||ki.has("ShiftRight");dr.set(f,0,h).clampLength(0,1).applyAxisAngle(Jt,Tt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Vi?13:4));rn.x=Pe.lerp(rn.x,dr.x,x),rn.z=Pe.lerp(rn.z,dr.z,x);let m=(oc.consumeJump()||fr.delete("Space"))&&Vi,y=Is.normal,v=!m&&Vi&&y.y>=.62&&(Is.surface?.friction??0)>=.45;m?rn.y=3.1+G.jump*.18:v&&(rn.y=-(rn.x*y.x+rn.z*y.z)/y.y),ea.copy(rn).multiplyScalar(i),v&&ea.addScaledVector(y,-l*i*i)}if(G.collisions&&Rd&&(la.copy(Pt).add(ea),Ll(kv,la,L2,Jr,wn,Yl)&&dr.subVectors(la,wn).dot(Yl)<0&&(ea.copy(wn).sub(Pt),sg(rn,Yl))),yt.position.add(ea),Pt.copy(ui).applyAxisAngle(Jt,Tt).add(yt.position),Vi=!1,Is.normal.set(0,0,0),Is.surface=null,G.collisions){bd.set(0,-1,0).applyQuaternion(Hi.quaternion),bd.y=0,bd.addScaledVector(z2.set(0,0,1).applyAxisAngle(Jt,gr),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,ui.y*.57):ui.y,{radius:p}=Cd[f];if(wn.set(Pt.x,yt.position.y+h,Pt.z),f<2&&wn.add(og(s,bd,Math.max(0,ui.y-h),dr)),zv.copy(wn),Vi=qp(wn,p,Mt.boxes,rn,0,3+G.grip,i,f===0?Is:null)||Vi,G.objects)for(let x of c)x.blocksPlayer&&!x.owner&&gy(wn,p,x,rn,Yl)&&Yl.y>.6&&(Vi=!0);qp(wn,p,Mt.boxes,rn,0,3+G.grip,i),dr.subVectors(wn,zv),yt.position.add(dr),Pt.add(dr);for(let x=0;x<f;x++)Cd[x].position.add(dr);Cd[f].position.copy(wn)}}if(qr.subVectors(yt.position,Vv),jr.update({dt:r,inVR:s,hands:Lt,grounded:Vi,travel:Math.hypot(qr.x,qr.z),volume:G.stepVolume,enabled:G.stepAudio}),s){let f=Zr.finish(qr,rn);f.contacts&&Om++,f.launched&&(Rm++,Im={handSpeed:f.launchSpeed,velocity:rn.toArray(),t:performance.now()})}(dt.active?yt.position.y<-24||Math.abs(yt.position.x)>155||Math.abs(yt.position.z)>155:yt.position.y<-9||Math.abs(yt.position.x)>33||yt.position.z<-57||yt.position.z>13)&&(vr(),Pt.copy(ui).applyAxisAngle(Jt,Tt).add(yt.position)),kv.copy(Pt),Rd=!0,yt.rotation.y=Tt,s&&Ot.position.set(0,0,0);for(let f of Lt)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(qr,f.surface?0:1),f.gripPosition.add(qr)),s||(f.mesh.visible=!1);let u=.72+G.size*.05,d=Od()*2*(2/3)/.82;Hi.visible=G.body,Gi.position.copy(Pt),s?Gi.quaternion.copy(Id).premultiply(yr.setFromAxisAngle(Jt,Tt)):Gi.quaternion.setFromEuler(new tn(Ns,Tt,0,"YXZ")),bm.set(0,-.145,.045).applyQuaternion(Gi.quaternion).add(Pt),Hi.position.set(0,.46*d,.04*u).applyQuaternion(Hi.quaternion).negate().add(bm),k2(u,d),yt.updateMatrixWorld(!0),Ot.updateWorldMatrix(!0,!1)}function RC(n,e){if(Md+=n,fm++,sa+=n,Md<1||(Ps=Math.round(fm/Md),fm=0,Md=0,zt=!0,nC.textContent=Ps+" FPS \xB7 qualit\xE9 "+cn+"/10 \xB7 "+(G.auto?"auto":"manuel"),!G.auto||sa<5))return;sa=0;let t=e?Math.min(100,je.xr.getSession()?.frameRate||$l):60;e&&(Pm=t),oa=Ps<t-4?oa+1:0,aa=Ps>=t-1?aa+1:0;let i=Pe.clamp(cn+(oa>=1?-1:aa>=2?1:0),1,10);i!==cn&&(cn=i,sa=oa=aa=0,qi())}Mt.bakeLightmap();var ab={value:1},lb={value:1},cb={value:0},Jm={value:0},p_=new WeakSet;function pa(n){if(Array.isArray(n)){for(let i of n)pa(i);return}if(!n||p_.has(n))return;p_.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:ab,uPhotoSaturation:lb,uPhotoWarmth:cb,uLabShader:Jm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of Mt.materials)pa(n);Dt.traverse(n=>{n.isMesh&&![yn.mesh,hi.mesh,Os].includes(n)&&pa(n.material)});qi();var m_=new URLSearchParams(location.search);if(m_.has("map"))dt.loadURL(m_.get("map"));else try{let n=localStorage.getItem(ql);n&&dt.load(n)}catch(n){dt.inform(n.message)}function IC(){let n=je.xr.isPresenting;return{head:Gi.quaternion,hands:n?Lt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,ca.mode?xC:null],height:ui.y,armSpan:Od()*2,light:G.timeOfDay-1,color:v_,tool:ca.mode?ca:null,gun:Zd.gun}}je.setAnimationLoop((n,e)=>{let t=dm?Math.max(0,(n-dm)/1e3):.014;dm=n;let i=Math.max(1e-4,Math.min(.035,t)),r=Qe.role?1:km[G.debugSpeed-1],s=i*r,o=je.xr.isPresenting,a=je.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(q2(n*.001),Fd&&n>Fd&&(Em.hidden=!0,Fd=0,jm=""),Os.visible=!1,Wm.hide(),ca.mode=0,Jr=G.collisions?Mt.boxes:D2,Ds=null,ec=null,Ld=null,Dd=null,dt.clearGhost(),yn.mesh.visible=!1,!o&&Qe.role==="pc"){Hi.visible=!1;for(let v of Lt)v.mesh.visible=!1}else CC(e,a,l,s,i);let c=!o&&Qe.role==="pc";if(!o&&!c)for(let v of dt.checkTriggers(Pt))Ai.record("map-trigger",v),window.dispatchEvent(new CustomEvent("gorilla-model-trigger",{detail:v})),v.phase==="enter"&&Qn("D\xE9clencheur \xB7 "+v.part);let u=c||Qe.role==="player";if(Qe.role!=="player"){mr=0;for(let v of Lt)v.remoteHeld=0}u||(vC(s),AC()),hm=0;for(let v of At){v.mesh.visible=G.objects&&!u;let{x:b,y:A,z:E}=v.mesh.position;if(ng(v.mesh.position,dt.active)&&(v.owner||Kd(v)),v.shadow.visible=!u&&G.shadows&&Vd()<3&&G.objects&&v.mesh.position.y<2,v.shadow.visible){let{x:D,z:w}=v.mesh.position,M=Mt.boxes.find(B=>B.heightfield&&D>=B.xMin&&D<=B.xMax&&w>=B.zMin&&w<=B.zMax),C=M?M.height(D,w):0;v.shadow.position.set(D,C+.006,w)}}if(!u&&G.objects){let v=performance.now();py(At,Mt.boxes,s,9.81*G.gravity/5,.12+G.bounce*.064,ob),hm=performance.now()-v}if(o&&!Qt&&Qe.role!=="pc")for(let v of Lt)mC(v);if(Mt.probe.rotation.y+=s*.29,RC(Math.min(.3,t),o),yn.mesh.visible=o&&Qt,yn.mesh.visible&&zt&&u_(),yn.mesh.visible&&Ds)wC(e,a,Ds.source,Ds.click);else if(o&&Dd)pC(e,a,Dd);else if(o&&Ld)bC(e,a,Ld);else if(o&&ec)MC(e,a,ec.source,ec.click);else if(!o&&!c){Ot.getWorldPosition(Jn),Ot.getWorldDirection(kn),fr.delete("KeyX")&&Tn("blasterActive",1),fr.delete("KeyG")&&(Tn("toolActive",1),G.toolActive&&Qn("Outil \xB7 "+Rs[G.toolMode-1])),fr.delete("KeyT")&&Tn("toolMode",1);let v=fr.delete("KeyE");G.toolActive?nb(Jn,kn,v,null):v&&!TC(Jn,kn)?Tm(Jn,kn,!0):!v&&!u&&Tm(Jn,kn,!1),fr.delete("KeyF")&&(G.objects=!0,Ym(A_[0]))}let d=hi.mesh.visible;if(hi.mesh.visible=o&&!Qt&&Lt[0].valid,hi.mesh.visible&&(hi.mesh.position.copy(Lt[0].mesh.position).y+=.12,hi.mesh.lookAt(Pt)),(zt||n-Gv>1100||hi.mesh.visible&&!d)&&(zt=!1,Gv=n,Qt&&u_(),hi.mesh.visible)){let v=hi.ctx;v.clearRect(0,0,416,84),v.fillStyle="#182632",v.fillRect(0,0,416,84),v.fillStyle="#fff0cf",v.font="bold 25px system-ui",v.fillText(Ps+" FPS     Q "+cn+"/10",17,32),v.font="20px system-ui",v.fillText(G.mapEdit?"\xC9dition : "+Q_[G.mapMode-1]:G.blasterActive?"Pistolet : maintenir la g\xE2chette":G.toolActive?"Tool Gun : "+Rs[G.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),hi.texture.needsUpdate=!0}Zd.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:Tt,drop:di,rightHand:Lt[1],enabled:G.blasterActive&&!c&&!Qt&&!G.mapEdit,flatFiring:ib.held||ki.has("KeyJ")}),Qe.update({inVR:o,time:n,dt:i,position:Pt,yaw:c?Tt:gr,pitch:Ns,camera:Ot,rig:yt,keys:ki,actions:fr,flat:oc,avatar:IC,bodies:G.objects?At:Zv}),fr.clear();let f=performance.now();ia.update({settings:G,boxes:Jr,bodies:u?G.debugHitboxes?sb():Zv:At,hands:Lt,locomotion:Zr,velocity:rn,head:Pt,neck:bm,body:Hi.position,proxies:Cd,gravity:tc,appliedMove:qr,playerActive:!c,inVR:o,viewQuaternion:Gi.quaternion}),Nv=performance.now()-f,!c&&n-Kl>350&&(b_={simulationScale:r,gravity:tc,velocity:rn.toArray(),grounded:Vi,torsoDegrees:[pr.x,pr.y].map(Pe.radToDeg),hands:o?Zr.hands.map(({hand:v,normal:b,offset:A})=>v.valid?{side:v.side,gripPosition:v.gripPosition.toArray(),idleAlignmentMeters:wn.copy(lr).applyQuaternion(v.mesh.quaternion).add(v.target).add(qr).distanceTo(v.gripPosition),palmCenter:wn.copy(lr).applyQuaternion(v.mesh.quaternion).add(v.mesh.position).toArray(),contactCenter:wn.copy(v.mesh.position).add(A).toArray(),normal:v.surface?b.toArray():null,surface:v.surface?.name??v.surface?.objectBody?.spec?.name??null}:null):[]}),$2(u);let h=je.xr.isPresenting?210:Math.max(210,dt.worldSize*1.5,dt.fogDistance+10);Ot.far!==h&&(Ot.far=h,Ot.updateProjectionMatrix()),Mt.centerSky(cc),Mt.centerShadows(cc);let p=25+(10-Vd())*(o?7:4);je.shadowMap.enabled&&n-Fv>=p&&(je.shadowMap.needsUpdate=!0,Fv=n),lC(n,l);let x=performance.now(),g=o&&G.post,m=o&&G.rayTrace;I2(m,At);let y=G.vrFov/100;if(!g||!R2.render(Dt,Ot,{bloom:G.bloom,visibleField:y})){Ed.material.uniforms.visibleField.value=y,Ed.visible=o&&y<1;try{je.render(Dt,Ot)}finally{Ed.visible=!1}}if(Bv=performance.now()-x,Ai.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:hm,debugCpuMs:Nv,mirrorCpuMs:wm,renderSubmissionCpuMs:Bv,objects:At.length,moving:At.filter(v=>!v.owner&&!v.frozen&&!v.sleeping&&v.velocity.lengthSq()>1e-4).length,debugSegments:ia.stats.segments}),n-Kl>350&&(sc.hidden=!(G.debugForces||ia.stats.truncated),sc.hidden||(sc.textContent="Vitesse joueur : "+rn.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+tc.toFixed(2)+" m/s\xB2 \xB7 Segments : "+ia.stats.segments+(ia.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),U_[Pd]=t*1e3,Pd=(Pd+1)%720,n-Kl>350){Kl=n;let{calls:v,triangles:b,lines:A,points:E}=je.info.render;N_={calls:v,triangles:b,lines:A,points:E,textures:je.info.memory.textures},o&&(Gd={refreshHz:je.xr.getSession()?.frameRate??null,targetFps:Pm,supportedHz:Ql.slice(),foveation:je.xr.getFoveation()??null,visualEffects:{post:g,bloom:g&&G.bloom,rayTrace:m},eyeViewports:je.xr.getCamera().cameras.map(U=>({width:U.viewport?.z??null,height:U.viewport?.w??null}))})}});})();
