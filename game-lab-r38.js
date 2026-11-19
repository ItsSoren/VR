(()=>{function zm(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function Vm(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function km(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function zd(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function Gm(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function Hm(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function Wm(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function qm(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function Xm(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Dg=0,Rf=1,Lg=2;var el=1,Ug=2,Mi=3,ai=0,dn=1,an=2,Zi=0,Zr=1,$n=2,Pf=3,If=4,Fg=5,yr=100,Ng=101,Bg=102,Og=103,zg=104,Vg=200,kg=201,Gg=202,Hg=203,Uc=204,Fc=205,Wg=206,qg=207,Xg=208,Yg=209,Zg=210,jg=211,Jg=212,$g=213,Kg=214,hu=0,du=1,fu=2,jr=3,pu=4,mu=5,gu=6,xu=7,yu=0,Qg=1,e0=2,ji=0,t0=1,n0=2,i0=3,vu=4,r0=5,s0=6,o0=7;var Df=300,is=301,rs=302,mo=303,_u=304,tl=306,kn=1e3,xr=1001,Nc=1002,ln=1003,a0=1004;var nl=1005;var cn=1006,Mu=1007;var Dn=1008;var Wn=1009,Lf=1010,Uf=1011,go=1012,bu=1013,Sr=1014,di=1015,bi=1016,Su=1017,wu=1018,xo=1020,Ff=35902,Nf=35899,Bf=1021,Of=1022,Ln=1023,Js=1026,yo=1027,Tu=1028,Au=1029,zf=1030,Eu=1031;var Cu=1033,il=33776,rl=33777,sl=33778,ol=33779,Ru=35840,Pu=35841,Iu=35842,Du=35843,Lu=36196,Uu=37492,Fu=37496,Nu=37808,Bu=37809,Ou=37810,zu=37811,Vu=37812,ku=37813,Gu=37814,Hu=37815,Wu=37816,qu=37817,Xu=37818,Yu=37819,Zu=37820,ju=37821,Ju=36492,$u=36494,Ku=36495,Qu=36283,eh=36284,th=36285,nh=36286;var _a=2300,Bc=2301,Dc=2302,gf=2400,xf=2401,yf=2402;var l0=3200,c0=3201;var ih=0,u0=1,Ji="",pt="srgb",Jr="srgb-linear",Ma="linear",vt="srgb";var Yr=7680;var vf=519,h0=512,d0=513,f0=514,Vf=515,p0=516,m0=517,g0=518,x0=519,Oc=35044,Sn=35048;var kf="300 es",oi=2e3,ba=2001;var Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ym=1234567,ga=Math.PI/180,$s=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Gf(n,e){return(n%e+e)%e}function Z_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function j_(n,e,t){return n!==e?(t-n)/(e-n):0}function xa(n,e,t){return(1-t)*n+t*e}function J_(n,e,t,i){return xa(n,e,1-Math.exp(-t*i))}function $_(n,e=1){return e-Math.abs(Gf(n,e*2)-e)}function K_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Q_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function eM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tM(n,e){return n+Math.random()*(e-n)}function nM(n){return n*(.5-Math.random())}function iM(n){n!==void 0&&(Ym=n);let e=Ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(n){return n*ga}function sM(n){return n*$s}function oM(n){return(n&n-1)===0&&n!==0}function aM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:ga,RAD2DEG:$s,generateUUID:xi,clamp:Ke,euclideanModulo:Gf,mapLinear:Z_,inverseLerp:j_,lerp:xa,damp:J_,pingpong:$_,smoothstep:K_,smootherstep:Q_,randInt:eM,randFloat:tM,randFloatSpread:nM,seededRandom:iM,degToRad:rM,radToDeg:sM,isPowerOfTwo:oM,ceilPowerOfTwo:aM,floorPowerOfTwo:lM,setQuaternionFromProperEuler:cM,normalize:yt,denormalize:si},ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let m=1-a,g=l*f+c*h+u*p+d*x,y=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let C=Math.sqrt(w),E=Math.atan2(C,g*y);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let M=a*y;if(l=l*m+f*M,c=c*m+h*M,u=u*m+p*M,d=d*m+x*M,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vd=new b,Zm=new qe,nt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],m=r[3],g=r[6],y=r[1],w=r[4],M=r[7],C=r[2],E=r[5],R=r[8];return s[0]=o*x+a*y+l*C,s[3]=o*m+a*w+l*E,s[6]=o*g+a*M+l*R,s[1]=c*x+u*y+d*C,s[4]=c*m+u*w+d*E,s[7]=c*g+u*M+d*R,s[2]=f*x+h*y+p*C,s[5]=f*m+h*w+p*E,s[8]=f*g+h*M+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kd=new nt;function Hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y0(){let n=Ks("canvas");return n.style.display="block",n}var jm={};function Qs(n){n in jm||(jm[n]=!0,console.warn(n))}function v0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Jm=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$m=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){let n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?Ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:Jm,fromXYZ:$m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Jm,fromXYZ:$m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),n}var ut=uM();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,zc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=Ks("canvas")),Rs.width=e.width,Rs.height=e.height;let r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hM=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gd(r[o].image)):s.push(Gd(r[o]))}else s=Gd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dM=0,Hd=new b,gn=class n extends Wi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xr,r=xr,s=cn,o=Dn,a=Ln,l=Wn,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=xi(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hd).x}get height(){return this.source.getSize(Hd).y}get depth(){return this.source.getSize(Hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Df;gn.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(h+1)/2,C=(g+1)/2,E=(u+f)/4,R=(d+x)/4,D=(p+m)/4;return w>M&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=E/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=D/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vc=class extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new eo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Vc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sa=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),ic.subVectors(this.max,ra),Ps.subVectors(e.a,ra),Is.subVectors(e.b,ra),Ds.subVectors(e.c,ra),hr.subVectors(Is,Ps),dr.subVectors(Ds,Is),Hr.subVectors(Ps,Ds);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!Wd(t,Ps,Is,Ds,ic)||(t=[1,0,0,0,1,0,0,0,1],!Wd(t,Ps,Is,Ds,ic))?!1:(rc.crossVectors(hr,dr),t=[rc.x,rc.y,rc.z],Wd(t,Ps,Is,Ds,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new b,new b,new b,new b,new b,new b,new b,new b],ni=new b,nc=new $t,Ps=new b,Is=new b,Ds=new b,hr=new b,dr=new b,Hr=new b,ra=new b,ic=new b,rc=new b,Wr=new b;function Wd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wr.fromArray(n,s);let a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=i.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var fM=new $t,sa=new b,qd=new b,jn=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(qd)),this.expandByPoint(sa.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zi=new b,Xd=new b,sc=new b,fr=new b,Yd=new b,oc=new b,Zd=new b,$r=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xd.copy(e).add(t).multiplyScalar(.5),sc.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(Xd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(sc),a=fr.dot(this.direction),l=-fr.dot(sc),c=fr.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xd).addScaledVector(sc,f),h}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,r,s){Yd.subVectors(t,e),oc.subVectors(i,e),Zd.crossVectors(Yd,oc);let o=this.direction.dot(Zd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);let l=a*this.direction.dot(oc.crossVectors(fr,oc));if(l<0)return null;let c=a*this.direction.dot(Yd.cross(fr));if(c<0||l+c>o)return null;let u=-a*fr.dot(Zd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,t,i){let r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),pr.crossVectors(i,zn),pr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),pr.crossVectors(i,zn)),pr.normalize(),ac.crossVectors(zn,pr),r[0]=pr.x,r[4]=ac.x,r[8]=zn.x,r[1]=pr.y,r[5]=ac.y,r[9]=zn.y,r[2]=pr.z,r[6]=ac.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],w=i[7],M=i[11],C=i[15],E=r[0],R=r[4],D=r[8],T=r[12],S=r[1],A=r[5],N=r[9],O=r[13],Y=r[2],k=r[6],H=r[10],j=r[14],U=r[3],ie=r[7],ee=r[11],ce=r[15];return s[0]=o*E+a*S+l*Y+c*U,s[4]=o*R+a*A+l*k+c*ie,s[8]=o*D+a*N+l*H+c*ee,s[12]=o*T+a*O+l*j+c*ce,s[1]=u*E+d*S+f*Y+h*U,s[5]=u*R+d*A+f*k+h*ie,s[9]=u*D+d*N+f*H+h*ee,s[13]=u*T+d*O+f*j+h*ce,s[2]=p*E+x*S+m*Y+g*U,s[6]=p*R+x*A+m*k+g*ie,s[10]=p*D+x*N+m*H+g*ee,s[14]=p*T+x*O+m*j+g*ce,s[3]=y*E+w*S+M*Y+C*U,s[7]=y*R+w*A+M*k+C*ie,s[11]=y*D+w*N+M*H+C*ee,s[15]=y*T+w*O+M*j+C*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=d*m*c-x*f*c+x*l*h-a*m*h-d*l*g+a*f*g,w=p*f*c-u*m*c-p*l*h+o*m*h+u*l*g-o*f*g,M=u*x*c-p*d*c+p*a*h-o*x*h-u*a*g+o*d*g,C=p*d*l-u*x*l-p*a*f+o*x*f+u*a*m-o*d*m,E=t*y+i*w+r*M+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=y*R,e[1]=(x*f*s-d*m*s-x*r*h+i*m*h+d*r*g-i*f*g)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*g+i*l*g)*R,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*R,e[4]=w*R,e[5]=(u*m*s-p*f*s+p*r*h-t*m*h-u*r*g+t*f*g)*R,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*R,e[8]=M*R,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*g-t*d*g)*R,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*g+t*a*g)*R,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*R,e[12]=C*R,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*m+t*d*m)*R,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,m=o*d,g=a*d,y=l*c,w=l*u,M=l*d,C=i.x,E=i.y,R=i.z;return r[0]=(1-(x+g))*C,r[1]=(h+M)*C,r[2]=(p-w)*C,r[3]=0,r[4]=(h-M)*E,r[5]=(1-(f+g))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(p+w)*R,r[9]=(m-y)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ls.set(r[0],r[1],r[2]).length(),o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let c=1/s,u=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===oi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ba)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===oi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===ba)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ls=new b,ii=new at,pM=new b(0,0,0),mM=new b(1,1,1),pr=new b,ac=new b,zn=new b,Km=new at,Qm=new qe,Qt=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gM=0,eg=new b,Us=new qe,Vi=new at,lc=new b,oa=new b,xM=new b,yM=new qe,tg=new b(1,0,0),ng=new b(0,1,0),ig=new b(0,0,1),rg={type:"added"},vM={type:"removed"},Fs={type:"childadded",child:null},jd={type:"childremoved",child:null},zt=class n extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new b,t=new Qt,i=new qe,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new nt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,t){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(oa,lc,this.up):Vi.lookAt(lc,oa,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(Vi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vM),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,xM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,yM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};zt.DEFAULT_UP=new b(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new b,ki=new b,Jd=new b,Gi=new b,Ns=new b,Bs=new b,sg=new b,$d=new b,Kd=new b,Qd=new b,ef=new lt,tf=new lt,nf=new lt,Rn=class n{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),ki.subVectors(i,t),Jd.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(ki),l=ri.dot(Jd),c=ki.dot(ki),u=ki.dot(Jd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,i),nf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ef,s.x),o.addScaledVector(tf,s.y),o.addScaledVector(nf,s.z),o}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),ki.subVectors(e,t),ri.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ri.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ns.subVectors(r,i),Bs.subVectors(s,i),$d.subVectors(e,i);let l=Ns.dot($d),c=Bs.dot($d);if(l<=0&&c<=0)return t.copy(i);Kd.subVectors(e,r);let u=Ns.dot(Kd),d=Bs.dot(Kd);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ns,o);Qd.subVectors(e,s);let h=Ns.dot(Qd),p=Bs.dot(Qd);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Bs,a);let m=u*p-h*d;if(m<=0&&d-u>=0&&h-p>=0)return sg.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(sg,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Ns,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function rf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Gf(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ut.workingToColorSpace(mn.copy(this),e),Math.round(Ke(mn.r*255,0,255))*65536+Math.round(Ke(mn.g*255,0,255))*256+Math.round(Ke(mn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=pt){ut.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(cc);let i=xa(mr.h,cc.h,t),r=xa(mr.s,cc.s,t),s=xa(mr.l,cc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Le;Le.NAMES=_0;var _M=0,Jn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Zr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Fc&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_t=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new b,uc=new ge,MM=0,ht=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var Kr=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wa=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},bM=0,Zn=new at,sf=new zt,Os=new b,Vn=new $t,aa=new $t,sn=new b,Qe=class n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?wa:Kr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Vn.min,aa.min),Vn.expandByPoint(sn),sn.addVectors(Vn.max,aa.max),Vn.expandByPoint(sn)):(Vn.expandByPoint(aa.min),Vn.expandByPoint(aa.max))}Vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),sn.add(Os)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new b,l[D]=new b;let c=new b,u=new b,d=new b,f=new ge,h=new ge,p=new ge,x=new b,m=new b;function g(D,T,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,D),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let A=1/(h.x*p.y-p.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(A),a[D].add(x),a[T].add(x),a[S].add(x),l[D].add(m),l[T].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,T=y.length;D<T;++D){let S=y[D],A=S.start,N=S.count;for(let O=A,Y=A+N;O<Y;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let w=new b,M=new b,C=new b,E=new b;function R(D){C.fromBufferAttribute(r,D),E.copy(C);let T=a[D];w.copy(T),w.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(E,T);let A=M.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,A)}for(let D=0,T=y.length;D<T;++D){let S=y[D],A=S.start,N=S.count;for(let O=A,Y=A+N;O<Y;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new b,s=new b,o=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)f[p++]=c[h++]}return new ht(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},og=new at,qr=new $r,hc=new jn,ag=new b,dc=new b,fc=new b,pc=new b,of=new b,mc=new b,lg=new b,gc=new b,Ve=class extends zt{constructor(e=new Qe,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){mc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(of.fromBufferAttribute(d,e),o?mc.addScaledVector(of,u):mc.addScaledVector(of.sub(t),u))}t.add(mc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(hc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(hc,ag)===null||qr.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(s).invert(),qr.copy(e.ray).applyMatrix4(og),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=y,C=w;M<C;M+=3){let E=a.getX(M),R=a.getX(M+1),D=a.getX(M+2);r=xc(this,g,e,i,c,u,d,E,R,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);r=xc(this,o,e,i,c,u,d,y,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=y,C=w;M<C;M+=3){let E=M,R=M+1,D=M+2;r=xc(this,g,e,i,c,u,d,E,R,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,M=m+2;r=xc(this,o,e,i,c,u,d,y,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function SM(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;gc.copy(a),gc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(gc);return c<t.near||c>t.far?null:{distance:c,point:gc.clone(),object:n}}function xc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,dc),n.getVertexPosition(l,fc),n.getVertexPosition(c,pc);let u=SM(n,e,t,i,dc,fc,pc,lg);if(u){let d=new b;Rn.getBarycoord(lg,dc,fc,pc,d),r&&(u.uv=Rn.getInterpolatedAttribute(r,a,l,c,d,new ge)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,a,l,c,d,new ge)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,d,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new b,materialIndex:0};Rn.getNormal(dc,fc,pc,f.normal),u.face=f,u.barycoord=d}return u}var et=class n extends Qe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function p(x,m,g,y,w,M,C,E,R,D,T){let S=M/R,A=C/D,N=M/2,O=C/2,Y=E/2,k=R+1,H=D+1,j=0,U=0,ie=new b;for(let ee=0;ee<H;ee++){let ce=ee*A-O;for(let be=0;be<k;be++){let Ce=be*S-N;ie[x]=Ce*y,ie[m]=ce*w,ie[g]=Y,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[g]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(be/R),d.push(1-ee/D),j+=1}}for(let ee=0;ee<D;ee++)for(let ce=0;ce<R;ce++){let be=f+ce+k*ee,Ce=f+ce+k*(ee+1),De=f+(ce+1)+k*(ee+1),Re=f+(ce+1)+k*ee;l.push(be,Ce,Re),l.push(Ce,De,Re),U+=6}a.addGroup(h,U,T),h+=U,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ss(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=ss(n[t]);for(let r in i)e[r]=i[r]}return e}function wM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var rh={clone:ss,merge:xn},TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ta=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new b,cg=new ge,ug=new ge,Xt=class extends Ta{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,cg,ug),t.subVectors(ug,cg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Vs=1,Gc=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(zs,Vs,e,t);r.layers=this.layers,this.add(r);let s=new Xt(zs,Vs,e,t);s.layers=this.layers,this.add(s);let o=new Xt(zs,Vs,e,t);o.layers=this.layers,this.add(o);let a=new Xt(zs,Vs,e,t);a.layers=this.layers,this.add(a);let l=new Xt(zs,Vs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(zs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Aa=class extends gn{constructor(e=[],t=is,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Aa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Zi});s.uniforms.tEquirect.value=t;let o=new Ve(r,s),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=cn),new Gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Tt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},EM={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ea=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new b,io=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ro=class extends Jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,la=new b,Gs=new b,Hs=new b,Ws=new ge,ca=new ge,M0=new at,yc=new b,ua=new b,vc=new b,hg=new ge,af=new ge,dg=new ge,Ra=class extends zt{constructor(e=new ro){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ca(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new io(i,3,0,!1)),ks.setAttribute("uv",new io(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),M0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Hs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;_c(yc.set(-.5,-.5,0),Hs,o,Gs,r,s),_c(ua.set(.5,-.5,0),Hs,o,Gs,r,s),_c(vc.set(.5,.5,0),Hs,o,Gs,r,s),hg.set(0,0),af.set(1,0),dg.set(1,1);let a=e.ray.intersectTriangle(yc,ua,vc,!1,la);if(a===null&&(_c(ua.set(-.5,.5,0),Hs,o,Gs,r,s),af.set(0,1),a=e.ray.intersectTriangle(yc,vc,ua,!1,la),a===null))return;let l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:Rn.getInterpolation(la,yc,ua,vc,hg,af,dg,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _c(n,e,t,i,r,s){Ws.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ca.x=s*Ws.x-r*Ws.y,ca.y=r*Ws.x+s*Ws.y):ca.copy(Ws),n.copy(e),n.x+=ca.x,n.y+=ca.y,n.applyMatrix4(M0)}var yi=class extends gn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=ln,u=ln,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var so=class extends ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new at,fg=new at,Mc=[],pg=new $t,CM=new at,ha=new Ve,da=new jn,Pa=class extends Ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new so(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,CM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),pg.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(pg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),da.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qs),fg.multiplyMatrices(i,qs),ha.matrixWorld=fg,ha.raycast(e,Mc);for(let o=0,a=Mc.length;o<a;o++){let l=Mc[o];l.instanceId=s,l.object=this,t.push(l)}Mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new so(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(r*this.count),r,this.count,Tu,di));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lf=new b,RM=new b,PM=new nt,Cn=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=lf.subVectors(i,t).cross(RM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||PM.getNormalMatrix(e),r=this.coplanarPoint(lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xr=new jn,IM=new ge(.5,.5),bc=new b,oo=class{constructor(e=new Cn,t=new Cn,i=new Cn,r=new Cn,s=new Cn,o=new Cn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],m=s[10],g=s[11],y=s[12],w=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,g-p,C-y).normalize(),r[1].setComponents(c+o,h+u,g+p,C+y).normalize(),r[2].setComponents(c+a,h+d,g+x,C+w).normalize(),r[3].setComponents(c-a,h-d,g-x,C-w).normalize(),i)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,h-f,g-m,C-M).normalize();else if(r[4].setComponents(c-l,h-f,g-m,C-M).normalize(),t===oi)r[5].setComponents(c+l,h+f,g+m,C+M).normalize();else if(t===ba)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);let t=IM.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(bc.x=r.normal.x>0?e.max.x:e.min.x,bc.y=r.normal.y>0?e.max.y:e.min.y,bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vi=class extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wc=new b,qc=new b,mg=new at,fa=new $r,Sc=new jn,cf=new b,gg=new b,Ia=class extends zt{constructor(e=new Qe,t=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wc.fromBufferAttribute(t,r-1),qc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wc.distanceTo(qc);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;mg.copy(r).invert(),fa.copy(e.ray).applyMatrix4(mg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),w=wc(this,e,fa,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(h),g=wc(this,e,fa,l,x,m,p-1);g&&t.push(g)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,m=p-1;x<m;x+=c){let g=wc(this,e,fa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=wc(this,e,fa,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Wc.fromBufferAttribute(a,r),qc.fromBufferAttribute(a,s),t.distanceSqToSegment(Wc,qc,cf,gg)>i)return;cf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(cf);if(!(c<e.near||c>e.far))return{distance:c,point:gg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var xg=new b,yg=new b,es=class extends Ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xg.fromBufferAttribute(t,r),yg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xg.distanceTo(yg);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ao=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vg=new at,_f=new $r,Tc=new jn,Ac=new b,La=class extends zt{constructor(e=new Qe,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(r),Tc.radius+=s,e.ray.intersectsSphere(Tc)===!1)return;vg.copy(r).invert(),_f.copy(e.ray).applyMatrix4(vg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let m=c.getX(p);Ac.fromBufferAttribute(d,m),_g(Ac,m,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Ac.fromBufferAttribute(d,p),_g(Ac,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _g(n,e,t,i,r,s,o){let a=_f.distanceSqToPoint(n);if(a<t){let l=new b;_f.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var li=class extends gn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ua=class extends gn{constructor(e,t,i=Sr,r,s,o,a=ln,l=ln,c,u=Js,d=1){if(u!==Js&&u!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fa=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vr=class n extends Qe{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,m=new b,g=new b;for(let y=0;y<=p;y++){let w=0,M=0,C=0,E=0;if(y<=i){let T=y/i,S=T*Math.PI/2;M=-u-e*Math.cos(S),C=e*Math.sin(S),E=-e*Math.cos(S),w=T*d}else if(y<=i+s){let T=(y-i)/s;M=-u+T*t,C=e,E=0,w=d+T*f}else{let T=(y-i-s)/i,S=T*Math.PI/2;M=u+e*Math.sin(S),C=e*Math.cos(S),E=e*Math.sin(S),w=d+f+T*d}let R=Math.max(0,Math.min(1,w/h)),D=0;y===0?D=.5/r:y===p&&(D=-.5/r);for(let T=0;T<=r;T++){let S=T/r,A=S*Math.PI*2,N=Math.sin(A),O=Math.cos(A);g.x=-C*O,g.y=M,g.z=C*N,a.push(g.x,g.y,g.z),m.set(-C*O,E,C*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+D,R)}if(y>0){let T=(y-1)*x;for(let S=0;S<r;S++){let A=T+S,N=T+S+1,O=y*x+S,Y=y*x+S+1;o.push(A,N,O),o.push(N,Y,O)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},on=class n extends Qe{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new b,u=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class n extends Qe{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function y(){let M=new b,C=new b,E=0,R=(t-e)/i;for(let D=0;D<=s;D++){let T=[],S=D/s,A=S*(t-e)+e;for(let N=0;N<=r;N++){let O=N/r,Y=O*l+a,k=Math.sin(Y),H=Math.cos(Y);C.x=A*k,C.y=-S*i+m,C.z=A*H,d.push(C.x,C.y,C.z),M.set(k,R,H).normalize(),f.push(M.x,M.y,M.z),h.push(O,1-S),T.push(p++)}x.push(T)}for(let D=0;D<r;D++)for(let T=0;T<s;T++){let S=x[T][D],A=x[T+1][D],N=x[T+1][D+1],O=x[T][D+1];(e>0||T!==0)&&(u.push(S,A,O),E+=3),(t>0||T!==s-1)&&(u.push(A,N,O),E+=3)}c.addGroup(g,E,0),g+=E}function w(M){let C=p,E=new ge,R=new b,D=0,T=M===!0?e:t,S=M===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*S,0),f.push(0,S,0),h.push(.5,.5),p++;let A=p;for(let N=0;N<=r;N++){let Y=N/r*l+a,k=Math.cos(Y),H=Math.sin(Y);R.x=T*H,R.y=m*S,R.z=T*k,d.push(R.x,R.y,R.z),f.push(0,S,0),E.x=k*.5+.5,E.y=H*.5*S+.5,h.push(E.x,E.y),p++}for(let N=0;N<r;N++){let O=C+N,Y=A+N;M===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),D+=3}c.addGroup(g,D,M===!0?1:2),g+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class n extends Yt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class n extends Qe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new b,M=new b,C=new b;for(let E=0;E<t.length;E+=3)h(t[E+0],w),h(t[E+1],M),h(t[E+2],C),l(w,M,C,y)}function l(y,w,M,C){let E=C+1,R=[];for(let D=0;D<=E;D++){R[D]=[];let T=y.clone().lerp(M,D/E),S=w.clone().lerp(M,D/E),A=E-D;for(let N=0;N<=A;N++)N===0&&D===E?R[D][N]=T:R[D][N]=T.clone().lerp(S,N/A)}for(let D=0;D<E;D++)for(let T=0;T<2*(E-D)-1;T++){let S=Math.floor(T/2);T%2===0?(f(R[D][S+1]),f(R[D+1][S]),f(R[D][S])):(f(R[D][S+1]),f(R[D+1][S+1]),f(R[D+1][S]))}}function c(y){let w=new b;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(y),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function u(){let y=new b;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];let M=m(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;o.push(M,1-C)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],M=o[y+2],C=o[y+4],E=Math.max(w,M,C),R=Math.min(w,M,C);E>.9&&R<.1&&(w<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function h(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function p(){let y=new b,w=new b,M=new b,C=new b,E=new ge,R=new ge,D=new ge;for(let T=0,S=0;T<s.length;T+=9,S+=6){y.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),C.copy(y).add(w).add(M).divideScalar(3);let A=m(C);x(E,S+0,y,A),x(R,S+2,w,A),x(D,S+4,M,A)}}function x(y,w,M,C){C<0&&y.x===1&&(o[w]=y.x-1),M.x===0&&M.z===0&&(o[w]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new b,r=[],s=[],o=[],a=new b,l=new at;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new b)}s[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ke(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Ke(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},co=class extends Gn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xc=class extends co{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Ec=new b,uf=new qf,hf=new qf,df=new qf,Yc=class extends Gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ec.subVectors(r[0],r[1]).add(r[0]),c=Ec);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ec.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),uf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,m),hf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,m),df.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(uf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),hf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),df.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(uf.calc(l),hf.calc(l),df.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function DM(n,e){let t=1-n;return t*t*e}function LM(n,e){return 2*(1-n)*n*e}function UM(n,e){return n*n*e}function ya(n,e,t,i){return DM(n,e)+LM(n,t)+UM(n,i)}function FM(n,e){let t=1-n;return t*t*t*e}function NM(n,e){let t=1-n;return 3*t*t*n*e}function BM(n,e){return 3*(1-n)*n*n*e}function OM(n,e){return n*n*n*e}function va(n,e,t,i,r){return FM(n,e)+NM(n,t)+BM(n,i)+OM(n,r)}var Na=class extends Gn{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(va(e,r.x,s.x,o.x,a.x),va(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zc=class extends Gn{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(va(e,r.x,s.x,o.x,a.x),va(e,r.y,s.y,o.y,a.y),va(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends Gn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jc=class extends Gn{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Gn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends Gn{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ya(e,r.x,s.x,o.x),ya(e,r.y,s.y,o.y),ya(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Mg(a,l.x,c.x,u.x,d.x),Mg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Mf=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Yc,CubicBezierCurve:Na,CubicBezierCurve3:Zc,EllipseCurve:co,LineCurve:Ba,LineCurve3:jc,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:Jc,SplineCurve:za}),$c=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Mf[r.type]().fromJSON(r))}return this}},Va=class extends $c{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ba(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Oa(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Na(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new za(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new co(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ci=class extends Va{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Va().fromJSON(r))}return this}};function zM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=b0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=WM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return ka(s,o,t,a,l,c,0),o}function b0(n,e,t,i,r){let s;if(r===tb(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=bg(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=bg(o/i|0,n[o],n[o+1],s);return s&&uo(s,s.next)&&(Ha(s),s=s.next),s}function ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(uo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ka(n,e,t,i,r,s,o){if(!n)return;!o&&s&&jM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?kM(n,i,r,s):VM(n)){e.push(l.i,n.i,c.i),Ha(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=GM(ts(n),e),ka(n,e,t,i,r,s,2)):o===2&&HM(n,e,t,i,r,s):ka(ts(n),e,t,i,r,s,1);break}}}function VM(n){let e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&ma(r,a,s,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),m=Math.max(u,d,f),g=bf(h,p,e,t,i),y=bf(x,m,e,t,i),w=n.prevZ,M=n.nextZ;for(;w&&w.z>=g&&M&&M.z<=y;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&ma(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=h&&M.x<=x&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&ma(a,u,l,d,c,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=g;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=m&&w!==r&&w!==o&&ma(a,u,l,d,c,f,w.x,w.y)&&Ot(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=h&&M.x<=x&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&ma(a,u,l,d,c,f,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function GM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!uo(i,r)&&w0(i,t,t.next,r)&&Ga(i,r)&&Ga(r,i)&&(e.push(i.i,t.i,r.i),Ha(t),Ha(t.next),t=n=r),t=t.next}while(t!==n);return ts(t)}function HM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&KM(o,a)){let l=T0(o,a);o=ts(o,o.next),l=ts(l,l.next),ka(o,e,t,i,r,s,0),ka(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function WM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=b0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push($M(c))}r.sort(qM);for(let s=0;s<r.length;s++)t=XM(r[s],t);return t}function qM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function XM(n,e){let t=YM(n,e);if(!t)return e;let i=T0(t,n);return ts(i,i.next),ts(t,t.next)}function YM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(uo(n,t))return t;do{if(uo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&S0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);Ga(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&ZM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function ZM(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function jM(n,e,t,i){let r=n;do r.z===0&&(r.z=bf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,JM(r)}function JM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function bf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $M(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function S0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ma(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&S0(n,e,t,i,r,s,o,a)}function KM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!QM(n,e)&&(Ga(n,e)&&Ga(e,n)&&eb(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||uo(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function uo(n,e){return n.x===e.x&&n.y===e.y}function w0(n,e,t,i){let r=Rc(Ot(n,e,t)),s=Rc(Ot(n,e,i)),o=Rc(Ot(t,i,n)),a=Rc(Ot(t,i,e));return!!(r!==s&&o!==a||r===0&&Cc(n,t,e)||s===0&&Cc(n,i,e)||o===0&&Cc(t,n,i)||a===0&&Cc(t,e,i))}function Cc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rc(n){return n>0?1:n<0?-1:0}function QM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&w0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ga(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function eb(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function T0(n,e){let t=Sf(n.i,n.x,n.y),i=Sf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function bg(n,e,t,i){let r=Sf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var wf=class{static triangulate(e,t,i=2){return zM(e,t,i)}},gi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Sg(e),wg(i,e);let o=e.length;t.forEach(Sg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,wg(i,t[l]);let a=wf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Sg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Xi=class n extends Qe{constructor(e=new ci([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:nb,w,M=!1,C,E,R,D;g&&(w=g.getSpacedPoints(u),M=!0,f=!1,C=g.computeFrenetFrames(u,!1),E=new b,R=new b,D=new b),f||(m=0,h=0,p=0,x=0);let T=a.extractPoints(c),S=T.shape,A=T.holes;if(!gi.isClockWise(S)){S=S.reverse();for(let F=0,B=A.length;F<B;F++){let z=A[F];gi.isClockWise(z)&&(A[F]=z.reverse())}}function O(F){let z=10000000000000001e-36,V=F[0];for(let X=1;X<=F.length;X++){let ne=X%F.length,Q=F[ne],Ee=Q.x-V.x,Te=Q.y-V.y,I=Ee*Ee+Te*Te,_=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(V.x),Math.abs(V.y)),L=z*_*_;if(I<=L){F.splice(ne,1),X--;continue}V=Q}}O(S),A.forEach(O);let Y=A.length,k=S;for(let F=0;F<Y;F++){let B=A[F];S=S.concat(B)}function H(F,B,z){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(B,z)}let j=S.length;function U(F,B,z){let V,X,ne,Q=F.x-B.x,Ee=F.y-B.y,Te=z.x-F.x,I=z.y-F.y,_=Q*Q+Ee*Ee,L=Q*I-Ee*Te;if(Math.abs(L)>Number.EPSILON){let W=Math.sqrt(_),te=Math.sqrt(Te*Te+I*I),J=B.x-Ee/W,he=B.y+Q/W,ue=z.x-I/te,pe=z.y+Te/te,me=((ue-J)*I-(pe-he)*Te)/(Q*I-Ee*Te);V=J+Q*me-F.x,X=he+Ee*me-F.y;let le=V*V+X*X;if(le<=2)return new ge(V,X);ne=Math.sqrt(le/2)}else{let W=!1;Q>Number.EPSILON?Te>Number.EPSILON&&(W=!0):Q<-Number.EPSILON?Te<-Number.EPSILON&&(W=!0):Math.sign(Ee)===Math.sign(I)&&(W=!0),W?(V=-Ee,X=Q,ne=Math.sqrt(_)):(V=Q,X=Ee,ne=Math.sqrt(_/2))}return new ge(V/ne,X/ne)}let ie=[];for(let F=0,B=k.length,z=B-1,V=F+1;F<B;F++,z++,V++)z===B&&(z=0),V===B&&(V=0),ie[F]=U(k[F],k[z],k[V]);let ee=[],ce,be=ie.concat();for(let F=0,B=Y;F<B;F++){let z=A[F];ce=[];for(let V=0,X=z.length,ne=X-1,Q=V+1;V<X;V++,ne++,Q++)ne===X&&(ne=0),Q===X&&(Q=0),ce[V]=U(z[V],z[ne],z[Q]);ee.push(ce),be=be.concat(ce)}let Ce;if(m===0)Ce=gi.triangulateShape(k,A);else{let F=[],B=[];for(let z=0;z<m;z++){let V=z/m,X=h*Math.cos(V*Math.PI/2),ne=p*Math.sin(V*Math.PI/2)+x;for(let Q=0,Ee=k.length;Q<Ee;Q++){let Te=H(k[Q],ie[Q],ne);Pe(Te.x,Te.y,-X),V===0&&F.push(Te)}for(let Q=0,Ee=Y;Q<Ee;Q++){let Te=A[Q];ce=ee[Q];let I=[];for(let _=0,L=Te.length;_<L;_++){let W=H(Te[_],ce[_],ne);Pe(W.x,W.y,-X),V===0&&I.push(W)}V===0&&B.push(I)}}Ce=gi.triangulateShape(F,B)}let De=Ce.length,Re=p+x;for(let F=0;F<j;F++){let B=f?H(S[F],be[F],Re):S[F];M?(R.copy(C.normals[0]).multiplyScalar(B.x),E.copy(C.binormals[0]).multiplyScalar(B.y),D.copy(w[0]).add(R).add(E),Pe(D.x,D.y,D.z)):Pe(B.x,B.y,0)}for(let F=1;F<=u;F++)for(let B=0;B<j;B++){let z=f?H(S[B],be[B],Re):S[B];M?(R.copy(C.normals[F]).multiplyScalar(z.x),E.copy(C.binormals[F]).multiplyScalar(z.y),D.copy(w[F]).add(R).add(E),Pe(D.x,D.y,D.z)):Pe(z.x,z.y,d/u*F)}for(let F=m-1;F>=0;F--){let B=F/m,z=h*Math.cos(B*Math.PI/2),V=p*Math.sin(B*Math.PI/2)+x;for(let X=0,ne=k.length;X<ne;X++){let Q=H(k[X],ie[X],V);Pe(Q.x,Q.y,d+z)}for(let X=0,ne=A.length;X<ne;X++){let Q=A[X];ce=ee[X];for(let Ee=0,Te=Q.length;Ee<Te;Ee++){let I=H(Q[Ee],ce[Ee],V);M?Pe(I.x,I.y+w[u-1].y,w[u-1].x+z):Pe(I.x,I.y,d+z)}}}re(),se();function re(){let F=r.length/3;if(f){let B=0,z=j*B;for(let V=0;V<De;V++){let X=Ce[V];ye(X[2]+z,X[1]+z,X[0]+z)}B=u+m*2,z=j*B;for(let V=0;V<De;V++){let X=Ce[V];ye(X[0]+z,X[1]+z,X[2]+z)}}else{for(let B=0;B<De;B++){let z=Ce[B];ye(z[2],z[1],z[0])}for(let B=0;B<De;B++){let z=Ce[B];ye(z[0]+j*u,z[1]+j*u,z[2]+j*u)}}i.addGroup(F,r.length/3-F,0)}function se(){let F=r.length/3,B=0;xe(k,B),B+=k.length;for(let z=0,V=A.length;z<V;z++){let X=A[z];xe(X,B),B+=X.length}i.addGroup(F,r.length/3-F,1)}function xe(F,B){let z=F.length;for(;--z>=0;){let V=z,X=z-1;X<0&&(X=F.length-1);for(let ne=0,Q=u+m*2;ne<Q;ne++){let Ee=j*ne,Te=j*(ne+1),I=B+V+Ee,_=B+X+Ee,L=B+X+Te,W=B+V+Te;Z(I,_,L,W)}}}function Pe(F,B,z){l.push(F),l.push(B),l.push(z)}function ye(F,B,z){fe(F),fe(B),fe(z);let V=r.length/3,X=y.generateTopUV(i,r,V-3,V-2,V-1);v(X[0]),v(X[1]),v(X[2])}function Z(F,B,z,V){fe(F),fe(B),fe(V),fe(B),fe(z),fe(V);let X=r.length/3,ne=y.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);v(ne[0]),v(ne[1]),v(ne[3]),v(ne[1]),v(ne[2]),v(ne[3])}function fe(F){r.push(l[F*3+0]),r.push(l[F*3+1]),r.push(l[F*3+2])}function v(F){s.push(F.x),s.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ib(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Mf[r.type]().fromJSON(r)),new n(i,e.options)}},nb={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(f,1-p),new ge(x,1-g)]:[new ge(a,1-l),new ge(u,1-d),new ge(h,1-p),new ge(m,1-g)]}};function ib(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ft=class n extends lo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wa=class n extends Qe{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ke(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new b,f=new ge,h=new b,p=new b,x=new b,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,h.x=g*1,h.y=-m,h.z=g*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let y=0;y<=t;y++){let w=i+y*u*r,M=Math.sin(w),C=Math.cos(w);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*M,d.y=e[E].y,d.z=e[E].x*C,o.push(d.x,d.y,d.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);let R=l[3*E+0]*M,D=l[3*E+1],T=l[3*E+0]*C;c.push(R,D,T)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let M=w+y*e.length,C=M,E=M+e.length,R=M+e.length+1,D=M+1;s.push(C,E,D),s.push(R,D,E)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ui=class n extends lo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},en=class n extends Qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let w=0;w<c;w++){let M=w*d-s;p.push(M,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,M=y+c*(g+1),C=y+1+c*(g+1),E=y+1+c*g;h.push(w,M,E),h.push(M,C,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ho=class n extends Qe{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new b,p=new ge;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let g=s+m/i*o;h.x=d*Math.cos(g),h.y=d*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,w=y,M=y+i+1,C=y+i+2,E=y+1;a.push(w,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qa=class n extends Qe{constructor(e=new ci([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;gi.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];gi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=gi.triangulateShape(h,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];h=h.concat(y)}for(let m=0,g=h.length;m<g;m++){let y=h[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+d,M=y[1]+d,C=y[2]+d;i.push(w,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rb(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function rb(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var In=class n extends Qe{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new b,f=new b,h=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],w=g/i,M=0;g===0&&o===0?M=.5/t:g===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let E=C/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+w*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(E+M,1-w),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let w=u[g][y+1],M=u[g][y],C=u[g+1][y],E=u[g+1][y+1];(g!==0||o>0)&&h.push(w,M,E),(g!==i-1||l<Math.PI)&&h.push(M,C,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Xa=class n extends lo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},hi=class n extends Qe{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new b,d=new b,f=new b;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,m=(r+1)*(h-1)+p-1,g=(r+1)*(h-1)+p,y=(r+1)*h+p;o.push(x,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _r=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new b,s=new b;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),y=a.getX(p+(m+1)%3);r.fromBufferAttribute(o,g),s.fromBufferAttribute(o,y),Tg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),Tg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Tg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var gt=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ya=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var hn=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kc=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qc=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ns=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eu=class extends ns{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case xf:s=e,a=2*t-i;break;case yf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:o=e,l=2*i-t;break;case yf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*m+(1.5+h)*x+.5*p,M=h*m-h*x;for(let C=0;C!==a;++C)s[C]=g*o[u+C]+y*o[c+C]+w*o[l+C]+M*o[d+C];return s}},tu=class extends ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},nu=class extends ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pc(t,this.TimeBufferType),this.values=Pc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pc(e.times,Array),values:Pc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case Bc:t=this.InterpolantFactoryMethodLinear;break;case Dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&sb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Dc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Bc;var Mr=class extends Hn{constructor(e,t,i){super(e,t,i)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=_a;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};iu.prototype.ValueTypeName="color";var ru=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};ru.prototype.ValueTypeName="number";var su=class extends ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Za=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends Hn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=_a;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends Hn{constructor(e,t,i,r){super(e,t,i,r)}};ou.prototype.ValueTypeName="vector";var Lc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},au=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},A0=new au,fo=class{constructor(e){this.manager=e!==void 0?e:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=new WeakMap,lu=class extends fo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Lc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Xs.get(o);d===void 0&&(d=[],Xs.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=Ks("img");function l(){u(),t&&t(this);let d=Xs.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Xs.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Lc.remove(`image:${e}`);let f=Xs.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}Xs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Lc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var _i=class extends fo{constructor(e){super(e)}load(e,t,i,r){let s=new gn,o=new lu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},po=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ja=class extends po{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ff=new at,Ag=new b,Eg=new b,cu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ag.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ag),Eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eg),t.updateMatrixWorld(),ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Cg=new at,pa=new b,pf=new b,Tf=class extends cu{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),i.position.copy(pa),pf.copy(i.position),pf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pf),i.updateMatrixWorld(),r.makeTranslation(-pa.x,-pa.y,-pa.z),Cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cg,i.coordinateSystem,i.reversedDepth)}},Ja=class extends po{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$a=class extends Ta{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Af=class extends cu{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Af}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var uu=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xf="\\[\\]\\.:\\/",ob=new RegExp("["+Xf+"]","g"),Yf="[^"+Xf+"]",ab="[^"+Xf.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",Yf),cb=/(WCOD+)?/.source.replace("WCOD",ab),ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),db=new RegExp("^"+lb+cb+ub+hb+"$"),fb=["material","materials","bones","map"],Ef=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ob,"")}static parseTrackName(e){let t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);fb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Ef;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W2=new Float32Array(1);var Rg=new at,Yi=class{constructor(e,t,i=0,r=1/0){this.ray=new $r(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rg),this}intersectObject(e,t=!0,i=[]){return Cf(e,this,i,t),i.sort(Pg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cf(e[r],this,i,t);return i.sort(Pg),i}};function Pg(n,e){return n.distance-e.distance}function Cf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Cf(s[o],e,t,!0)}}var Ig=new b,Ic=new b,Ys=new b,Zs=new b,mf=new b,pb=new b,mb=new b,Qa=class{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ig.subVectors(e,this.start),Ic.subVectors(this.end,this.start);let i=Ic.dot(Ic),s=Ic.dot(Ig)/i;return t&&(s=Ke(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=pb,i=mb){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;Ys.subVectors(c,a),Zs.subVectors(u,l),mf.subVectors(a,l);let d=Ys.dot(Ys),f=Zs.dot(Zs),h=Zs.dot(mf);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=Ke(o,0,1);else{let p=Ys.dot(mf);if(f<=r)o=0,s=Ke(-p/d,0,1);else{let x=Ys.dot(Zs),m=d*f-x*x;m!==0?s=Ke((x*h-p*f)/m,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=Ke(-p/d,0,1)):o>1&&(o=1,s=Ke((x-p)/d,0,1))}}return t.copy(a).add(Ys.multiplyScalar(s)),i.copy(l).add(Zs.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Zf(n,e,t,i){let r=gb(i);switch(t){case Bf:return n*e;case Tu:return n*e/r.components*r.byteLength;case Au:return n*e/r.components*r.byteLength;case zf:return n*e*2/r.components*r.byteLength;case Eu:return n*e*2/r.components*r.byteLength;case Of:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case Cu:return n*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Du:return Math.max(n,16)*Math.max(e,8)/4;case Ru:case Iu:return Math.max(n,8)*Math.max(e,8)/2;case Lu:case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ju:case $u:case Ku:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qu:case eh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case th:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gb(n){switch(n){case Wn:case Lf:return{byteLength:1,components:1};case go:case Uf:case bi:return{byteLength:2,components:1};case Su:case wu:return{byteLength:2,components:4};case Sr:case bu:case di:return{byteLength:4,components:1};case Ff:case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
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
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fb=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
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
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
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
#endif`,_1=`struct PhysicalMaterial {
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
}`,M1=`
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
#endif`,b1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
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
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oS=`float getShadowMask() {
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
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bS=`uniform sampler2D t2D;
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`#include <common>
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
}`,CS=`#if DEPTH_PACKING == 3200
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
}`,RS=`#define DISTANCE
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
}`,PS=`#define DISTANCE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`uniform float scale;
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
}`,US=`uniform vec3 diffuse;
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
}`,FS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,BS=`#define LAMBERT
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
}`,OS=`#define LAMBERT
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
}`,zS=`#define MATCAP
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
}`,VS=`#define MATCAP
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
}`,kS=`#define NORMAL
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
}`,GS=`#define NORMAL
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
}`,HS=`#define PHONG
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
}`,WS=`#define PHONG
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
}`,qS=`#define STANDARD
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
}`,XS=`#define STANDARD
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
}`,YS=`#define TOON
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
}`,ZS=`#define TOON
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
}`,jS=`uniform float size;
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
}`,JS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,KS=`uniform vec3 color;
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
}`,QS=`uniform float rotation;
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
}`,ew=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:bb,alphahash_pars_fragment:Sb,alphamap_fragment:wb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Eb,aomap_fragment:Cb,aomap_pars_fragment:Rb,batching_pars_vertex:Pb,batching_vertex:Ib,begin_vertex:Db,beginnormal_vertex:Lb,bsdfs:Ub,iridescence_fragment:Fb,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Vb,color_fragment:kb,color_pars_fragment:Gb,color_pars_vertex:Hb,color_vertex:Wb,common:qb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:Zb,displacementmap_vertex:jb,emissivemap_fragment:Jb,emissivemap_pars_fragment:$b,colorspace_fragment:Kb,colorspace_pars_fragment:Qb,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:o1,fog_fragment:a1,fog_pars_fragment:l1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:u1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:d1,lights_pars_begin:f1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:x1,lights_phong_pars_fragment:y1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:M1,lights_fragment_maps:b1,lights_fragment_end:S1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:E1,map_fragment:C1,map_pars_fragment:R1,map_particle_fragment:P1,map_particle_pars_fragment:I1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:L1,morphinstance_vertex:U1,morphcolor_vertex:F1,morphnormal_vertex:N1,morphtarget_pars_vertex:B1,morphtarget_vertex:O1,normal_fragment_begin:z1,normal_fragment_maps:V1,normal_pars_fragment:k1,normal_pars_vertex:G1,normal_vertex:H1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:Z1,opaque_fragment:j1,packing:J1,premultiplied_alpha_fragment:$1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:rS,shadowmap_vertex:sS,shadowmask_pars_fragment:oS,skinbase_vertex:aS,skinning_pars_vertex:lS,skinning_vertex:cS,skinnormal_vertex:uS,specularmap_fragment:hS,specularmap_pars_fragment:dS,tonemapping_fragment:fS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:gS,uv_pars_fragment:xS,uv_pars_vertex:yS,uv_vertex:vS,worldpos_vertex:_S,background_vert:MS,background_frag:bS,backgroundCube_vert:SS,backgroundCube_frag:wS,cube_vert:TS,cube_frag:AS,depth_vert:ES,depth_frag:CS,distanceRGBA_vert:RS,distanceRGBA_frag:PS,equirect_vert:IS,equirect_frag:DS,linedashed_vert:LS,linedashed_frag:US,meshbasic_vert:FS,meshbasic_frag:NS,meshlambert_vert:BS,meshlambert_frag:OS,meshmatcap_vert:zS,meshmatcap_frag:VS,meshnormal_vert:kS,meshnormal_frag:GS,meshphong_vert:HS,meshphong_frag:WS,meshphysical_vert:qS,meshphysical_frag:XS,meshtoon_vert:YS,meshtoon_frag:ZS,points_vert:jS,points_frag:JS,shadow_vert:$S,shadow_frag:KS,sprite_vert:QS,sprite_frag:ew},Ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Si={basic:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Ue.points,Ue.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Ue.common,Ue.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Ue.sprite,Ue.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Ue.common,Ue.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Ue.lights,Ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:xn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var sh={r:0,b:0,g:0},os=new Qt,tw=new at;function nw(n,e,t,i,r,s,o){let a=new Le(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1,C=p(w);C===null?g(a,l):C&&C.isColor&&(g(C,1),M=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){let C=p(M);C&&(C.isCubeTexture||C.mapping===tl)?(u===void 0&&(u=new Ve(new et(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ss(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),os.copy(M.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(os)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==vt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ve(new en(2,2),new un({name:"BackgroundMaterial",uniforms:ss(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,M){w.getRGB(sh,Wf(n)),i.buffers.color.setClear(sh.r,sh.g,sh.b,M,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,g(a,l)},render:x,addToRenderList:m,dispose:y}}function iw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(S,A,N,O,Y){let k=!1,H=d(O,N,A);s!==H&&(s=H,c(s.object)),k=h(S,O,N,Y),k&&p(S,O,N,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(S,A,N,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,A,N){let O=N.wireframe===!0,Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let k=Y[A.id];k===void 0&&(k={},Y[A.id]=k);let H=k[O];return H===void 0&&(H=f(l()),k[O]=H),H}function f(S){let A=[],N=[],O=[];for(let Y=0;Y<t;Y++)A[Y]=0,N[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function h(S,A,N,O){let Y=s.attributes,k=A.attributes,H=0,j=N.getAttributes();for(let U in j)if(j[U].location>=0){let ee=Y[U],ce=k[U];if(ce===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function p(S,A,N,O){let Y={},k=A.attributes,H=0,j=N.getAttributes();for(let U in j)if(j[U].location>=0){let ee=k[U];ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));let ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),Y[U]=ce,H++}s.attributes=Y,s.attributesNum=H,s.index=O}function x(){let S=s.newAttributes;for(let A=0,N=S.length;A<N;A++)S[A]=0}function m(S){g(S,0)}function g(S,A){let N=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;N[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),Y[S]!==A&&(n.vertexAttribDivisor(S,A),Y[S]=A)}function y(){let S=s.newAttributes,A=s.enabledAttributes;for(let N=0,O=A.length;N<O;N++)A[N]!==S[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function w(S,A,N,O,Y,k,H){H===!0?n.vertexAttribIPointer(S,A,N,Y,k):n.vertexAttribPointer(S,A,N,O,Y,k)}function M(S,A,N,O){x();let Y=O.attributes,k=N.getAttributes(),H=A.defaultAttributeValues;for(let j in k){let U=k[j];if(U.location>=0){let ie=Y[j];if(ie===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){let ee=ie.normalized,ce=ie.itemSize,be=e.get(ie);if(be===void 0)continue;let Ce=be.buffer,De=be.type,Re=be.bytesPerElement,re=De===n.INT||De===n.UNSIGNED_INT||ie.gpuType===bu;if(ie.isInterleavedBufferAttribute){let se=ie.data,xe=se.stride,Pe=ie.offset;if(se.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)g(U.location+ye,se.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<U.locationSize;ye++)m(U.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ye=0;ye<U.locationSize;ye++)w(U.location+ye,ce/U.locationSize,De,ee,xe*Re,(Pe+ce/U.locationSize*ye)*Re,re)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<U.locationSize;se++)g(U.location+se,ie.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<U.locationSize;se++)m(U.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let se=0;se<U.locationSize;se++)w(U.location+se,ce/U.locationSize,De,ee,ce*Re,ce/U.locationSize*se*Re,re)}}else if(H!==void 0){let ee=H[j];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(U.location,ee);break;case 3:n.vertexAttrib3fv(U.location,ee);break;case 4:n.vertexAttrib4fv(U.location,ee);break;default:n.vertexAttrib1fv(U.location,ee)}}}}y()}function C(){D();for(let S in i){let A=i[S];for(let N in A){let O=A[N];for(let Y in O)u(O[Y].object),delete O[Y];delete A[N]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let N in A){let O=A[N];for(let Y in O)u(O[Y].object),delete O[Y];delete A[N]}delete i[S.id]}function R(S){for(let A in i){let N=i[A];if(N[S.id]===void 0)continue;let O=N[S.id];for(let Y in O)u(O[Y].object),delete O[Y];delete N[S.id]}}function D(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function rw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let D=R===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:C,maxSamples:E}}function ow(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Cn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:i,w=y*4,M=g.clippingState||null;l.value=M,M=u(p,f,w,h);for(let C=0;C!==w;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=h;w!==x;++w,M+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aw(n){let e=new WeakMap;function t(o,a){return a===mo?o.mapping=is:a===_u&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===mo||a===_u)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var _o=4,E0=[.125,.215,.35,.446,.526,.582],cs=20,jf=new $a,C0=new Le,Jf=null,$f=0,Kf=0,Qf=!1,ls=(1+Math.sqrt(5))/2,vo=1/ls,R0=[new b(-ls,vo,0),new b(ls,vo,0),new b(-vo,0,ls),new b(vo,0,ls),new b(0,ls,-vo),new b(0,ls,vo),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],lw=new b,bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=lw}=s;Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,$f,Kf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,oh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:bi,format:Ln,colorSpace:Jr,depthBuffer:!1},r=P0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=uw(s,e,t)}return r}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,jf)}_sceneToCubeUV(e,t,i,r,s){let l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(C0),d.toneMapping=ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new _t({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new Ve(new et,x),g=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,g=!0):(x.color.copy(C0),g=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));let C=this._cubeSize;oh(r,M*C,w>2?C:0,C,C),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;oh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=R0[(r-s-1)%R0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ve(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*cs-1),x=s/p,m=isFinite(s)?1+Math.floor(u*x):cs;m>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let g=[],y=0;for(let R=0;R<cs;++R){let D=R/x,T=Math.exp(-D*D/2);g.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<g.length;R++)g[R]=g[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=p,f.mipInt.value=w-i;let M=this._sizeLods[r],C=3*M*(r>w-_o?r-w+_o:0),E=4*(this._cubeSize-M);oh(t,C,E,3*M,2*M),l.setRenderTarget(t),l.render(d,jf)}};function cw(n){let e=[],t=[],i=[],r=n,s=n-_o+1+E0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_o?l=E0[o-n+_o-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*h),w=new Float32Array(m*p*h),M=new Float32Array(g*p*h);for(let E=0;E<h;E++){let R=E%3*2/3-1,D=E>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(T,x*p*E),w.set(f,m*p*E);let S=[E,E,E,E,E,E];M.set(S,g*p*E)}let C=new Qe;C.setAttribute("position",new ht(y,x)),C.setAttribute("uv",new ht(w,m)),C.setAttribute("faceIndex",new ht(M,g)),e.push(C),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function P0(n,e,t){let i=new Pn(n,e,t);return i.texture.mapping=tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oh(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uw(n,e,t){let i=new Float32Array(cs),r=new b(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function I0(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function D0(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function hw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===mo||l===_u,u=l===is||l===rs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new bo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fw(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let y=h.array;x=h.version;for(let w=0,M=y.length;w<M;w+=3){let C=y[w+0],E=y[w+1],R=y[w+2];f.push(C,E,E,R,R,C)}}else if(p!==void 0){let y=p.array;x=p.version;for(let w=0,M=y.length/3-1;w<M;w+=3){let C=w+0,E=w+1,R=w+2;f.push(C,E,E,R,R,C)}}else return;let m=new(Hf(f)?wa:Kr)(f,1);m.version=x;let g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function pw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function d(f,h,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y]*x[y];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gw(n,e,t){let i=new WeakMap,r=new lt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*C*4*d),R=new Sa(E,M,C,d);R.type=di,R.needsUpdate=!0;let D=w*4;for(let S=0;S<d;S++){let A=m[S],N=g[S],O=y[S],Y=M*C*4*S;for(let k=0;k<A.count;k++){let H=k*D;h===!0&&(r.fromBufferAttribute(A,k),E[Y+H+0]=r.x,E[Y+H+1]=r.y,E[Y+H+2]=r.z,E[Y+H+3]=0),p===!0&&(r.fromBufferAttribute(N,k),E[Y+H+4]=r.x,E[Y+H+5]=r.y,E[Y+H+6]=r.z,E[Y+H+7]=0),x===!0&&(r.fromBufferAttribute(O,k),E[Y+H+8]=r.x,E[Y+H+9]=r.y,E[Y+H+10]=r.z,E[Y+H+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new ge(M,C)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function xw(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var $0=new gn,L0=new Ua(1,1),K0=new Sa,Q0=new kc,ex=new Aa,U0=[],F0=[],N0=new Float32Array(16),B0=new Float32Array(9),O0=new Float32Array(4);function So(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=U0[r];if(s===void 0&&(s=new Float32Array(r),U0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ch(n,e){let t=F0[e];t===void 0&&(t=new Int32Array(e),F0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function _w(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function Mw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function bw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;O0.set(i),n.uniformMatrix2fv(this.addr,!1,O0),rn(t,i)}}function Sw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;B0.set(i),n.uniformMatrix3fv(this.addr,!1,B0),rn(t,i)}}function ww(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;N0.set(i),n.uniformMatrix4fv(this.addr,!1,N0),rn(t,i)}}function Tw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Aw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function Ew(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function Cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function Rw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function Iw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function Dw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Lw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(L0.compareFunction=Vf,s=L0):s=$0,t.setTexture2D(e||s,r)}function Uw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Q0,r)}function Fw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ex,r)}function Nw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||K0,r)}function Bw(n){switch(n){case 5126:return yw;case 35664:return vw;case 35665:return _w;case 35666:return Mw;case 35674:return bw;case 35675:return Sw;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Ew;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Iw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Ow(n,e){n.uniform1fv(this.addr,e)}function zw(n,e){let t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function Vw(n,e){let t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function kw(n,e){let t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function Gw(n,e){let t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hw(n,e){let t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ww(n,e){let t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qw(n,e){n.uniform1iv(this.addr,e)}function Xw(n,e){n.uniform2iv(this.addr,e)}function Yw(n,e){n.uniform3iv(this.addr,e)}function Zw(n,e){n.uniform4iv(this.addr,e)}function jw(n,e){n.uniform1uiv(this.addr,e)}function Jw(n,e){n.uniform2uiv(this.addr,e)}function $w(n,e){n.uniform3uiv(this.addr,e)}function Kw(n,e){n.uniform4uiv(this.addr,e)}function Qw(n,e,t){let i=this.cache,r=e.length,s=ch(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$0,s[o])}function eT(n,e,t){let i=this.cache,r=e.length,s=ch(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Q0,s[o])}function tT(n,e,t){let i=this.cache,r=e.length,s=ch(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ex,s[o])}function nT(n,e,t){let i=this.cache,r=e.length,s=ch(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||K0,s[o])}function iT(n){switch(n){case 5126:return Ow;case 35664:return zw;case 35665:return Vw;case 35666:return kw;case 35674:return Gw;case 35675:return Hw;case 35676:return Ww;case 5124:case 35670:return qw;case 35667:case 35671:return Xw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return jw;case 36294:return Jw;case 36295:return $w;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}var tp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bw(t.type)}},np=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iT(t.type)}},ip=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ep=/(\w+)(\])?(\[|\.)?/g;function z0(n,e){n.seq.push(e),n.map[e.id]=e}function rT(n,e,t){let i=n.name,r=i.length;for(ep.lastIndex=0;;){let s=ep.exec(i),o=ep.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){z0(t,c===void 0?new tp(a,n,e):new np(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ip(a),z0(t,d)),t=d}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function V0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sT=37297,oT=0;function aT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var k0=new nt;function lT(n){ut._getMatrix(k0,ut.workingColorSpace,n);let e=`mat3( ${k0.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function G0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+aT(n.getShaderSource(e),a)}else return s}function cT(n,e){let t=lT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uT(n,e){let t;switch(e){case t0:t="Linear";break;case n0:t="Reinhard";break;case i0:t="Cineon";break;case vu:t="ACESFilmic";break;case s0:t="AgX";break;case o0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ah=new b;function hT(){ut.getLuminanceCoefficients(ah);let n=ah.x.toFixed(4),e=ah.y.toFixed(4),t=ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function fT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function al(n){return n!==""}function H0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mT=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(n){return n.replace(mT,xT)}var gT=new Map;function xT(n,e){let t=st[e];if(t===void 0){let i=gT.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rp(t)}var yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(n){return n.replace(yT,vT)}function vT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function X0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function _T(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function MT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yu:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case e0:e="ENVMAP_BLENDING_ADD";break}return e}function wT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function TT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_T(t),c=MT(t),u=bT(t),d=ST(t),f=wT(t),h=dT(t),p=fT(s),x=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(al).join(`
`),g.length>0&&(g+=`
`)):(m=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),g=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?st.tonemapping_pars_fragment:"",t.toneMapping!==ji?uT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,cT("linearToOutputTexel",t.outputColorSpace),hT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),o=rp(o),o=H0(o,t),o=W0(o,t),a=rp(a),a=H0(a,t),a=W0(a,t),o=q0(o),a=q0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,M=y+g+a,C=V0(r,r.VERTEX_SHADER,w),E=V0(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(A){if(n.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(C)||"",Y=r.getShaderInfoLog(E)||"",k=N.trim(),H=O.trim(),j=Y.trim(),U=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,E);else{let ee=G0(r,C,"vertex"),ce=G0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+ee+`
`+ce)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||j==="")&&(ie=!1);ie&&(A.diagnostics={runnable:U,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:g}})}r.deleteShader(C),r.deleteShader(E),D=new Mo(r,x),T=pT(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,sT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var AT=0,sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new op(e),t.set(e,i)),i}},op=class{constructor(e){this.id=AT++,this.code=e,this.usedTimes=0}};function ET(n,e,t,i,r,s,o){let a=new to,l=new sp,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,A,N,O){let Y=N.fog,k=O.geometry,H=T.isMeshStandardMaterial?N.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),U=j&&j.mapping===tl?j.image.height:null,ie=p[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));let ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=ee!==void 0?ee.length:0,be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let Ce,De,Re,re;if(ie){let xt=Si[ie];Ce=xt.vertexShader,De=xt.fragmentShader}else Ce=T.vertexShader,De=T.fragmentShader,l.update(T),Re=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);let se=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Z=!!T.map,fe=!!T.matcap,v=!!j,F=!!T.aoMap,B=!!T.lightMap,z=!!T.bumpMap,V=!!T.normalMap,X=!!T.displacementMap,ne=!!T.emissiveMap,Q=!!T.metalnessMap,Ee=!!T.roughnessMap,Te=T.anisotropy>0,I=T.clearcoat>0,_=T.dispersion>0,L=T.iridescence>0,W=T.sheen>0,te=T.transmission>0,J=Te&&!!T.anisotropyMap,he=I&&!!T.clearcoatMap,ue=I&&!!T.clearcoatNormalMap,pe=I&&!!T.clearcoatRoughnessMap,me=L&&!!T.iridescenceMap,le=L&&!!T.iridescenceThicknessMap,Se=W&&!!T.sheenColorMap,ke=W&&!!T.sheenRoughnessMap,ve=!!T.specularMap,we=!!T.specularColorMap,We=!!T.specularIntensityMap,q=te&&!!T.transmissionMap,Me=te&&!!T.thicknessMap,Ie=!!T.gradientMap,Be=!!T.alphaMap,_e=T.alphaTest>0,de=!!T.alphaHash,He=!!T.extensions,tt=ji;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(tt=n.toneMapping);let Rt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:De,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Jr,alphaToCoverage:!!T.alphaToCoverage,map:Z,matcap:fe,envMap:v,envMapMode:v&&j.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:B,bumpMap:z,normalMap:V,displacementMap:f&&X,emissiveMap:ne,normalMapObjectSpace:V&&T.normalMapType===u0,normalMapTangentSpace:V&&T.normalMapType===ih,metalnessMap:Q,roughnessMap:Ee,anisotropy:Te,anisotropyMap:J,clearcoat:I,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:_,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:le,sheen:W,sheenColorMap:Se,sheenRoughnessMap:ke,specularMap:ve,specularColorMap:we,specularIntensityMap:We,transmission:te,transmissionMap:q,thicknessMap:Me,gradientMap:Ie,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:_e,alphaHash:de,combine:T.combine,mapUv:Z&&x(T.map.channel),aoMapUv:F&&x(T.aoMap.channel),lightMapUv:B&&x(T.lightMap.channel),bumpMapUv:z&&x(T.bumpMap.channel),normalMapUv:V&&x(T.normalMap.channel),displacementMapUv:X&&x(T.displacementMap.channel),emissiveMapUv:ne&&x(T.emissiveMap.channel),metalnessMapUv:Q&&x(T.metalnessMap.channel),roughnessMapUv:Ee&&x(T.roughnessMap.channel),anisotropyMapUv:J&&x(T.anisotropyMap.channel),clearcoatMapUv:he&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(T.sheenRoughnessMap.channel),specularMapUv:ve&&x(T.specularMap.channel),specularColorMapUv:we&&x(T.specularColorMap.channel),specularIntensityMapUv:We&&x(T.specularIntensityMap.channel),transmissionMapUv:q&&x(T.transmissionMap.channel),thicknessMapUv:Me&&x(T.thicknessMap.channel),alphaMapUv:Be&&x(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(V||Te),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Z||Be),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Z&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===vt,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&ut.getTransfer(T.emissiveMap.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===an,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function g(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)S.push(A),S.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(y(S,T),w(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function w(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){let S=p[T.type],A;if(S){let N=Si[S];A=rh.clone(N.uniforms)}else A=T.uniforms;return A}function C(T,S){let A;for(let N=0,O=u.length;N<O;N++){let Y=u[N];if(Y.cacheKey===S){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new TT(n,S,T,s),u.push(A)),A}function E(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:D}}function CT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function RT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=h,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.push(g):h.transparent===!0?r.push(g):t.push(g)}function l(d,f,h,p,x,m){let g=o(d,f,h,p,x,m);h.transmission>0?i.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||RT),i.length>1&&i.sort(f||Y0),r.length>1&&r.sort(f||Y0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function PT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Z0,n.set(i,[o])):r>=s.length?(o=new Z0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Le};break;case"SpotLight":t={position:new b,direction:new b,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function DT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var LT=0;function UT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FT(n){let e=new IT,t=DT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);let r=new b,s=new at,o=new at;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,p=0,x=0,m=0,g=0,y=0,w=0,M=0,C=0,E=0,R=0;c.sort(UT);for(let T=0,S=c.length;T<S;T++){let A=c[T],N=A.color,O=A.intensity,Y=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],O);R++}else if(A.isDirectionalLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let j=A.shadow,U=t.get(A);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=A.shadow.matrix,y++}i.directional[h]=H,h++}else if(A.isSpotLight){let H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(N).multiplyScalar(O),H.distance=Y,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[x]=H;let j=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,j.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[x]=j.matrix,A.castShadow){let U=t.get(A);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=k,M++}x++}else if(A.isRectAreaLight){let H=e.get(A);H.color.copy(N).multiplyScalar(O),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let j=A.shadow,U=t.get(A);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=A.shadow.matrix,w++}i.point[p]=H,p++}else if(A.isHemisphereLight){let H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(O),H.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[g]=H,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==h||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==g||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,D.directionalLength=h,D.pointLength=p,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=g,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=R,i.version=LT++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let w=c[g];if(w.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isSpotLight){let M=i.spot[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function j0(n){let e=new FT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new j0(n),e.set(r,[a])):s>=o.length?(a=new j0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`;function zT(n,e,t){let i=new oo,r=new ge,s=new ge,o=new lt,a=new Kc({depthPacking:c0}),l=new Qc,c={},u=t.maxTextureSize,d={[ai]:dn,[dn]:ai,[an]:an},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:BT,fragmentShader:OT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ve(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let g=this.type;this.render=function(E,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let T=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=g!==Mi&&this.type===Mi,Y=g===Mi&&this.type!==Mi;for(let k=0,H=E.length;k<H;k++){let j=E[k],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let ie=U.getFrameExtents();if(r.multiply(ie),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,U.mapSize.y=s.y)),U.map===null||O===!0||Y===!0){let ce=this.type!==Mi?{minFilter:ln,magFilter:ln}:{};U.map!==null&&U.map.dispose(),U.map=new Pn(r.x,r.y,ce),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let ee=U.getViewportCount();for(let ce=0;ce<ee;ce++){let be=U.getViewport(ce);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),N.viewport(o),U.updateMatrices(j,ce),i=U.getFrustum(),M(R,D,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===Mi&&y(U,D),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,A)};function y(E,R){let D=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,D,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,D,h,x,null)}function w(E,R,D,T){let S=null,A=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)S=A;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=S.uuid,O=R.uuid,Y=c[N];Y===void 0&&(Y={},c[N]=Y);let k=Y[O];k===void 0&&(k=S.clone(),Y[O]=k,R.addEventListener("dispose",C)),S=k}if(S.visible=R.visible,S.wireframe=R.wireframe,T===Mi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=D}return S}function M(E,R,D,T,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let k=O.groups;for(let H=0,j=k.length;H<j;H++){let U=k[H],ie=Y[U.materialIndex];if(ie&&ie.visible){let ee=w(E,ie,T,S);E.onBeforeShadow(n,E,R,D,O,ee,U),n.renderBufferDirect(D,null,O,ee,E,U),E.onAfterShadow(n,E,R,D,O,ee,U)}}}else if(Y.visible){let k=w(E,Y,T,S);E.onBeforeShadow(n,E,R,D,O,k,null),n.renderBufferDirect(D,null,O,k,E,null),E.onAfterShadow(n,E,R,D,O,k,null)}}let N=E.children;for(let O=0,Y=N.length;O<Y;O++)M(N[O],R,D,T,S)}function C(E){E.target.removeEventListener("dispose",C);for(let D in c){let T=c[D],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var VT={[hu]:du,[fu]:gu,[pu]:xu,[jr]:mu,[du]:hu,[gu]:fu,[xu]:pu,[mu]:jr};function kT(n,e){function t(){let q=!1,Me=new lt,Ie=null,Be=new lt(0,0,0,0);return{setMask:function(_e){Ie!==_e&&!q&&(n.colorMask(_e,_e,_e,_e),Ie=_e)},setLocked:function(_e){q=_e},setClear:function(_e,de,He,tt,Rt){Rt===!0&&(_e*=tt,de*=tt,He*=tt),Me.set(_e,de,He,tt),Be.equals(Me)===!1&&(n.clearColor(_e,de,He,tt),Be.copy(Me))},reset:function(){q=!1,Ie=null,Be.set(-1,0,0,0)}}}function i(){let q=!1,Me=!1,Ie=null,Be=null,_e=null;return{setReversed:function(de){if(Me!==de){let He=e.get("EXT_clip_control");de?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Me=de;let tt=_e;_e=null,this.setClear(tt)}},getReversed:function(){return Me},setTest:function(de){de?se(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(de){Ie!==de&&!q&&(n.depthMask(de),Ie=de)},setFunc:function(de){if(Me&&(de=VT[de]),Be!==de){switch(de){case hu:n.depthFunc(n.NEVER);break;case du:n.depthFunc(n.ALWAYS);break;case fu:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case pu:n.depthFunc(n.EQUAL);break;case mu:n.depthFunc(n.GEQUAL);break;case gu:n.depthFunc(n.GREATER);break;case xu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=de}},setLocked:function(de){q=de},setClear:function(de){_e!==de&&(Me&&(de=1-de),n.clearDepth(de),_e=de)},reset:function(){q=!1,Ie=null,Be=null,_e=null,Me=!1}}}function r(){let q=!1,Me=null,Ie=null,Be=null,_e=null,de=null,He=null,tt=null,Rt=null;return{setTest:function(xt){q||(xt?se(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(xt){Me!==xt&&!q&&(n.stencilMask(xt),Me=xt)},setFunc:function(xt,Bi,mi){(Ie!==xt||Be!==Bi||_e!==mi)&&(n.stencilFunc(xt,Bi,mi),Ie=xt,Be=Bi,_e=mi)},setOp:function(xt,Bi,mi){(de!==xt||He!==Bi||tt!==mi)&&(n.stencilOp(xt,Bi,mi),de=xt,He=Bi,tt=mi)},setLocked:function(xt){q=xt},setClear:function(xt){Rt!==xt&&(n.clearStencil(xt),Rt=xt)},reset:function(){q=!1,Me=null,Ie=null,Be=null,_e=null,de=null,He=null,tt=null,Rt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,w=null,M=null,C=null,E=null,R=new Le(0,0,0),D=0,T=!1,S=null,A=null,N=null,O=null,Y=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),H=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),H=j>=2);let ie=null,ee={},ce=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Ce=new lt().fromArray(ce),De=new lt().fromArray(be);function Re(q,Me,Ie,Be){let _e=new Uint8Array(4),de=n.createTexture();n.bindTexture(q,de),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<Ie;He++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(Me+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return de}let re={};re[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(jr),z(!1),V(Rf),se(n.CULL_FACE),F(Zi);function se(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function xe(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Pe(q,Me){return d[q]!==Me?(n.bindFramebuffer(q,Me),d[q]=Me,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(q,Me){let Ie=h,Be=!1;if(q){Ie=f.get(Me),Ie===void 0&&(Ie=[],f.set(Me,Ie));let _e=q.textures;if(Ie.length!==_e.length||Ie[0]!==n.COLOR_ATTACHMENT0){for(let de=0,He=_e.length;de<He;de++)Ie[de]=n.COLOR_ATTACHMENT0+de;Ie.length=_e.length,Be=!0}}else Ie[0]!==n.BACK&&(Ie[0]=n.BACK,Be=!0);Be&&n.drawBuffers(Ie)}function Z(q){return p!==q?(n.useProgram(q),p=q,!0):!1}let fe={[yr]:n.FUNC_ADD,[Ng]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};fe[Og]=n.MIN,fe[zg]=n.MAX;let v={[Vg]:n.ZERO,[kg]:n.ONE,[Gg]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Hg]:n.ONE_MINUS_SRC_COLOR,[Fc]:n.ONE_MINUS_SRC_ALPHA,[Yg]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[jg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[$g]:n.CONSTANT_ALPHA,[Kg]:n.ONE_MINUS_CONSTANT_ALPHA};function F(q,Me,Ie,Be,_e,de,He,tt,Rt,xt){if(q===Zi){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(se(n.BLEND),x=!0),q!==Fg){if(q!==m||xt!==T){if((g!==yr||M!==yr)&&(n.blendEquation(n.FUNC_ADD),g=yr,M=yr),xt)switch(q){case Zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFunc(n.ONE,n.ONE);break;case Pf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case If:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}y=null,w=null,C=null,E=null,R.set(0,0,0),D=0,m=q,T=xt}return}_e=_e||Me,de=de||Ie,He=He||Be,(Me!==g||_e!==M)&&(n.blendEquationSeparate(fe[Me],fe[_e]),g=Me,M=_e),(Ie!==y||Be!==w||de!==C||He!==E)&&(n.blendFuncSeparate(v[Ie],v[Be],v[de],v[He]),y=Ie,w=Be,C=de,E=He),(tt.equals(R)===!1||Rt!==D)&&(n.blendColor(tt.r,tt.g,tt.b,Rt),R.copy(tt),D=Rt),m=q,T=!1}function B(q,Me){q.side===an?xe(n.CULL_FACE):se(n.CULL_FACE);let Ie=q.side===dn;Me&&(Ie=!Ie),z(Ie),q.blending===Zr&&q.transparent===!1?F(Zi):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let Be=q.stencilWrite;a.setTest(Be),Be&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(q){S!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),S=q)}function V(q){q!==Dg?(se(n.CULL_FACE),q!==A&&(q===Rf?n.cullFace(n.BACK):q===Lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),A=q}function X(q){q!==N&&(H&&n.lineWidth(q),N=q)}function ne(q,Me,Ie){q?(se(n.POLYGON_OFFSET_FILL),(O!==Me||Y!==Ie)&&(n.polygonOffset(Me,Ie),O=Me,Y=Ie)):xe(n.POLYGON_OFFSET_FILL)}function Q(q){q?se(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Ee(q){q===void 0&&(q=n.TEXTURE0+k-1),ie!==q&&(n.activeTexture(q),ie=q)}function Te(q,Me,Ie){Ie===void 0&&(ie===null?Ie=n.TEXTURE0+k-1:Ie=ie);let Be=ee[Ie];Be===void 0&&(Be={type:void 0,texture:void 0},ee[Ie]=Be),(Be.type!==q||Be.texture!==Me)&&(ie!==Ie&&(n.activeTexture(Ie),ie=Ie),n.bindTexture(q,Me||re[q]),Be.type=q,Be.texture=Me)}function I(){let q=ee[ie];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function W(){try{n.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{n.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{n.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{n.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{n.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(){try{n.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(q){Ce.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Ce.copy(q))}function ke(q){De.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),De.copy(q))}function ve(q,Me){let Ie=c.get(Me);Ie===void 0&&(Ie=new WeakMap,c.set(Me,Ie));let Be=Ie.get(q);Be===void 0&&(Be=n.getUniformBlockIndex(Me,q.name),Ie.set(q,Be))}function we(q,Me){let Be=c.get(Me).get(q);l.get(Me)!==Be&&(n.uniformBlockBinding(Me,Be,q.__bindingPointIndex),l.set(Me,Be))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,ee={},d={},f=new WeakMap,h=[],p=null,x=!1,m=null,g=null,y=null,w=null,M=null,C=null,E=null,R=new Le(0,0,0),D=0,T=!1,S=null,A=null,N=null,O=null,Y=null,Ce.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:xe,bindFramebuffer:Pe,drawBuffers:ye,useProgram:Z,setBlending:F,setMaterial:B,setFlipSided:z,setCullFace:V,setLineWidth:X,setPolygonOffset:ne,setScissorTest:Q,activeTexture:Ee,bindTexture:Te,unbindTexture:I,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:me,texImage3D:le,updateUBOMapping:ve,uniformBlockBinding:we,texStorage2D:ue,texStorage3D:pe,texSubImage2D:W,texSubImage3D:te,compressedTexSubImage2D:J,compressedTexSubImage3D:he,scissor:Se,viewport:ke,reset:We}}function GT(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,_){return h?new OffscreenCanvas(I,_):Ks("canvas")}function x(I,_,L){let W=1,te=Te(I);if((te.width>L||te.height>L)&&(W=L/Math.max(te.width,te.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let J=Math.floor(W*te.width),he=Math.floor(W*te.height);d===void 0&&(d=p(J,he));let ue=_?p(J,he):d;return ue.width=J,ue.height=he,ue.getContext("2d").drawImage(I,0,0,J,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+he+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){n.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,_,L,W,te=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=_;if(_===n.RED&&(L===n.FLOAT&&(J=n.R32F),L===n.HALF_FLOAT&&(J=n.R16F),L===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.R8UI),L===n.UNSIGNED_SHORT&&(J=n.R16UI),L===n.UNSIGNED_INT&&(J=n.R32UI),L===n.BYTE&&(J=n.R8I),L===n.SHORT&&(J=n.R16I),L===n.INT&&(J=n.R32I)),_===n.RG&&(L===n.FLOAT&&(J=n.RG32F),L===n.HALF_FLOAT&&(J=n.RG16F),L===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RG8UI),L===n.UNSIGNED_SHORT&&(J=n.RG16UI),L===n.UNSIGNED_INT&&(J=n.RG32UI),L===n.BYTE&&(J=n.RG8I),L===n.SHORT&&(J=n.RG16I),L===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGB8UI),L===n.UNSIGNED_SHORT&&(J=n.RGB16UI),L===n.UNSIGNED_INT&&(J=n.RGB32UI),L===n.BYTE&&(J=n.RGB8I),L===n.SHORT&&(J=n.RGB16I),L===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),L===n.UNSIGNED_INT&&(J=n.RGBA32UI),L===n.BYTE&&(J=n.RGBA8I),L===n.SHORT&&(J=n.RGBA16I),L===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){let he=te?Ma:ut.getTransfer(W);L===n.FLOAT&&(J=n.RGBA32F),L===n.HALF_FLOAT&&(J=n.RGBA16F),L===n.UNSIGNED_BYTE&&(J=he===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(I,_){let L;return I?_===null||_===Sr||_===xo?L=n.DEPTH24_STENCIL8:_===di?L=n.DEPTH32F_STENCIL8:_===go&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sr||_===xo?L=n.DEPTH_COMPONENT24:_===di?L=n.DEPTH_COMPONENT32F:_===go&&(L=n.DEPTH_COMPONENT16),L}function C(I,_){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function E(I){let _=I.target;_.removeEventListener("dispose",E),D(_),_.isVideoTexture&&u.delete(_)}function R(I){let _=I.target;_.removeEventListener("dispose",R),S(_)}function D(I){let _=i.get(I);if(_.__webglInit===void 0)return;let L=I.source,W=f.get(L);if(W){let te=W[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(I),Object.keys(W).length===0&&f.delete(L)}i.remove(I)}function T(I){let _=i.get(I);n.deleteTexture(_.__webglTexture);let L=I.source,W=f.get(L);delete W[_.__cacheKey],o.memory.textures--}function S(I){let _=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let te=0;te<_.__webglFramebuffer[W].length;te++)n.deleteFramebuffer(_.__webglFramebuffer[W][te]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=I.textures;for(let W=0,te=L.length;W<te;W++){let J=i.get(L[W]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(L[W])}i.remove(I)}let A=0;function N(){A=0}function O(){let I=A;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function Y(I){let _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function k(I,_){let L=i.get(I);if(I.isVideoTexture&&Q(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&L.__version!==I.version){let W=I.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,I,_);return}}else I.isExternalTexture&&(L.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function H(I,_){let L=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&L.__version!==I.version){re(L,I,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function j(I,_){let L=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&L.__version!==I.version){re(L,I,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function U(I,_){let L=i.get(I);if(I.version>0&&L.__version!==I.version){se(L,I,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}let ie={[kn]:n.REPEAT,[xr]:n.CLAMP_TO_EDGE,[Nc]:n.MIRRORED_REPEAT},ee={[ln]:n.NEAREST,[a0]:n.NEAREST_MIPMAP_NEAREST,[nl]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Mu]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},ce={[h0]:n.NEVER,[x0]:n.ALWAYS,[d0]:n.LESS,[Vf]:n.LEQUAL,[f0]:n.EQUAL,[g0]:n.GEQUAL,[p0]:n.GREATER,[m0]:n.NOTEQUAL};function be(I,_){if(_.type===di&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Mu||_.magFilter===nl||_.magFilter===Dn||_.minFilter===cn||_.minFilter===Mu||_.minFilter===nl||_.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ie[_.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ie[_.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ie[_.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ee[_.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ee[_.minFilter]),_.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==nl&&_.minFilter!==Dn||_.type===di&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(I,_){let L=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",E));let W=_.source,te=f.get(W);te===void 0&&(te={},f.set(W,te));let J=Y(_);if(J!==I.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[J].usedTimes++;let he=te[I.__cacheKey];he!==void 0&&(te[I.__cacheKey].usedTimes--,he.usedTimes===0&&T(_)),I.__cacheKey=J,I.__webglTexture=te[J].texture}return L}function De(I,_,L){return Math.floor(Math.floor(I/L)/_)}function Re(I,_,L,W){let J=I.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,L,W,_.data);else{J.sort((le,Se)=>le.start-Se.start);let he=0;for(let le=1;le<J.length;le++){let Se=J[he],ke=J[le],ve=Se.start+Se.count,we=De(ke.start,_.width,4),We=De(Se.start,_.width,4);ke.start<=ve+1&&we===We&&De(ke.start+ke.count-1,_.width,4)===we?Se.count=Math.max(Se.count,ke.start+ke.count-Se.start):(++he,J[he]=ke)}J.length=he+1;let ue=n.getParameter(n.UNPACK_ROW_LENGTH),pe=n.getParameter(n.UNPACK_SKIP_PIXELS),me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let le=0,Se=J.length;le<Se;le++){let ke=J[le],ve=Math.floor(ke.start/4),we=Math.ceil(ke.count/4),We=ve%_.width,q=Math.floor(ve/_.width),Me=we,Ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,We,q,Me,Ie,L,W,_.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function re(I,_,L){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let te=Ce(I,_),J=_.source;t.bindTexture(W,I.__webglTexture,n.TEXTURE0+L);let he=i.get(J);if(J.version!==he.__version||te===!0){t.activeTexture(n.TEXTURE0+L);let ue=ut.getPrimaries(ut.workingColorSpace),pe=_.colorSpace===Ji?null:ut.getPrimaries(_.colorSpace),me=_.colorSpace===Ji||ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let le=x(_.image,!1,r.maxTextureSize);le=Ee(_,le);let Se=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),ve=w(_.internalFormat,Se,ke,_.colorSpace,_.isVideoTexture);be(W,_);let we,We=_.mipmaps,q=_.isVideoTexture!==!0,Me=he.__version===void 0||te===!0,Ie=J.dataReady,Be=C(_,le);if(_.isDepthTexture)ve=M(_.format===yo,_.type),Me&&(q?t.texStorage2D(n.TEXTURE_2D,1,ve,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ve,le.width,le.height,0,Se,ke,null));else if(_.isDataTexture)if(We.length>0){q&&Me&&t.texStorage2D(n.TEXTURE_2D,Be,ve,We[0].width,We[0].height);for(let _e=0,de=We.length;_e<de;_e++)we=We[_e],q?Ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,ke,we.data):t.texImage2D(n.TEXTURE_2D,_e,ve,we.width,we.height,0,Se,ke,we.data);_.generateMipmaps=!1}else q?(Me&&t.texStorage2D(n.TEXTURE_2D,Be,ve,le.width,le.height),Ie&&Re(_,le,Se,ke)):t.texImage2D(n.TEXTURE_2D,0,ve,le.width,le.height,0,Se,ke,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){q&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,ve,We[0].width,We[0].height,le.depth);for(let _e=0,de=We.length;_e<de;_e++)if(we=We[_e],_.format!==Ln)if(Se!==null)if(q){if(Ie)if(_.layerUpdates.size>0){let He=Zf(we.width,we.height,_.format,_.type);for(let tt of _.layerUpdates){let Rt=we.data.subarray(tt*He/we.data.BYTES_PER_ELEMENT,(tt+1)*He/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,tt,we.width,we.height,1,Se,Rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,le.depth,Se,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,ve,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,le.depth,Se,ke,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,ve,we.width,we.height,le.depth,0,Se,ke,we.data)}else{q&&Me&&t.texStorage2D(n.TEXTURE_2D,Be,ve,We[0].width,We[0].height);for(let _e=0,de=We.length;_e<de;_e++)we=We[_e],_.format!==Ln?Se!==null?q?Ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,ke,we.data):t.texImage2D(n.TEXTURE_2D,_e,ve,we.width,we.height,0,Se,ke,we.data)}else if(_.isDataArrayTexture)if(q){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,ve,le.width,le.height,le.depth),Ie)if(_.layerUpdates.size>0){let _e=Zf(le.width,le.height,_.format,_.type);for(let de of _.layerUpdates){let He=le.data.subarray(de*_e/le.data.BYTES_PER_ELEMENT,(de+1)*_e/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,Se,ke,He)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,le.width,le.height,le.depth,0,Se,ke,le.data);else if(_.isData3DTexture)q?(Me&&t.texStorage3D(n.TEXTURE_3D,Be,ve,le.width,le.height,le.depth),Ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)):t.texImage3D(n.TEXTURE_3D,0,ve,le.width,le.height,le.depth,0,Se,ke,le.data);else if(_.isFramebufferTexture){if(Me)if(q)t.texStorage2D(n.TEXTURE_2D,Be,ve,le.width,le.height);else{let _e=le.width,de=le.height;for(let He=0;He<Be;He++)t.texImage2D(n.TEXTURE_2D,He,ve,_e,de,0,Se,ke,null),_e>>=1,de>>=1}}else if(We.length>0){if(q&&Me){let _e=Te(We[0]);t.texStorage2D(n.TEXTURE_2D,Be,ve,_e.width,_e.height)}for(let _e=0,de=We.length;_e<de;_e++)we=We[_e],q?Ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Se,ke,we):t.texImage2D(n.TEXTURE_2D,_e,ve,Se,ke,we);_.generateMipmaps=!1}else if(q){if(Me){let _e=Te(le);t.texStorage2D(n.TEXTURE_2D,Be,ve,_e.width,_e.height)}Ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ke,le)}else t.texImage2D(n.TEXTURE_2D,0,ve,Se,ke,le);m(_)&&g(W),he.__version=J.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function se(I,_,L){if(_.image.length!==6)return;let W=Ce(I,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+L);let J=i.get(te);if(te.version!==J.__version||W===!0){t.activeTexture(n.TEXTURE0+L);let he=ut.getPrimaries(ut.workingColorSpace),ue=_.colorSpace===Ji?null:ut.getPrimaries(_.colorSpace),pe=_.colorSpace===Ji||he===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let me=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!me&&!le?Se[de]=x(_.image[de],!0,r.maxCubemapSize):Se[de]=le?_.image[de].image:_.image[de],Se[de]=Ee(_,Se[de]);let ke=Se[0],ve=s.convert(_.format,_.colorSpace),we=s.convert(_.type),We=w(_.internalFormat,ve,we,_.colorSpace),q=_.isVideoTexture!==!0,Me=J.__version===void 0||W===!0,Ie=te.dataReady,Be=C(_,ke);be(n.TEXTURE_CUBE_MAP,_);let _e;if(me){q&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,We,ke.width,ke.height);for(let de=0;de<6;de++){_e=Se[de].mipmaps;for(let He=0;He<_e.length;He++){let tt=_e[He];_.format!==Ln?ve!==null?q?Ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,tt.width,tt.height,ve,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,We,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,tt.width,tt.height,ve,we,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,We,tt.width,tt.height,0,ve,we,tt.data)}}}else{if(_e=_.mipmaps,q&&Me){_e.length>0&&Be++;let de=Te(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,We,de.width,de.height)}for(let de=0;de<6;de++)if(le){q?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,ve,we,Se[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Se[de].width,Se[de].height,0,ve,we,Se[de].data);for(let He=0;He<_e.length;He++){let Rt=_e[He].image[de].image;q?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,Rt.width,Rt.height,ve,we,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,We,Rt.width,Rt.height,0,ve,we,Rt.data)}}else{q?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ve,we,Se[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,ve,we,Se[de]);for(let He=0;He<_e.length;He++){let tt=_e[He];q?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,ve,we,tt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,We,ve,we,tt.image[de])}}}m(_)&&g(n.TEXTURE_CUBE_MAP),J.__version=te.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function xe(I,_,L,W,te,J){let he=s.convert(L.format,L.colorSpace),ue=s.convert(L.type),pe=w(L.internalFormat,he,ue,L.colorSpace),me=i.get(_),le=i.get(L);if(le.__renderTarget=_,!me.__hasExternalTextures){let Se=Math.max(1,_.width>>J),ke=Math.max(1,_.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,pe,Se,ke,_.depth,0,he,ue,null):t.texImage2D(te,J,pe,Se,ke,0,he,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,te,le.__webglTexture,0,X(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,te,le.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(I,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,I),_.depthBuffer){let W=_.depthTexture,te=W&&W.isDepthTexture?W.type:null,J=M(_.stencilBuffer,te),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=X(_);ne(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,J,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,I)}else{let W=_.textures;for(let te=0;te<W.length;te++){let J=W[te],he=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),pe=w(J.internalFormat,he,ue,J.colorSpace),me=X(_);L&&ne(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,_.width,_.height):ne(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(I,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);let te=W.__webglTexture,J=X(_);if(_.depthTexture.format===Js)ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(_.depthTexture.format===yo)ne(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Z(I){let _=i.get(I),L=I.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",te)};W.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=W}if(I.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let W=I.texture.mipmaps;W&&W.length>0?ye(_.__webglFramebuffer[0],I):ye(_.__webglFramebuffer,I)}else if(L){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),Pe(_.__webglDepthbuffer[W],I,!1);else{let te=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Pe(_.__webglDepthbuffer,I,!1);else{let te=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(I,_,L){let W=i.get(I);_!==void 0&&xe(W.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Z(I)}function v(I){let _=I.texture,L=i.get(I),W=i.get(_);I.addEventListener("dispose",R);let te=I.textures,J=I.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),J){L.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ue]=[];for(let pe=0;pe<_.mipmaps.length;pe++)L.__webglFramebuffer[ue][pe]=n.createFramebuffer()}else L.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)L.__webglFramebuffer[ue]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(he)for(let ue=0,pe=te.length;ue<pe;ue++){let me=i.get(te[ue]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&ne(I)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){let pe=te[ue];L.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ue]);let me=s.convert(pe.format,pe.colorSpace),le=s.convert(pe.type),Se=w(pe.internalFormat,me,le,pe.colorSpace,I.isXRRenderTarget===!0),ke=X(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Se,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,L.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(L.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),be(n.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(L.__webglFramebuffer[ue][pe],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else xe(L.__webglFramebuffer[ue],I,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ue=0,pe=te.length;ue<pe;ue++){let me=te[ue],le=i.get(me),Se=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),be(Se,me),xe(L.__webglFramebuffer,I,me,n.COLOR_ATTACHMENT0+ue,Se,0),m(me)&&g(Se)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),be(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(L.__webglFramebuffer[pe],I,_,n.COLOR_ATTACHMENT0,ue,pe);else xe(L.__webglFramebuffer,I,_,n.COLOR_ATTACHMENT0,ue,0);m(_)&&g(ue),t.unbindTexture()}I.depthBuffer&&Z(I)}function F(I){let _=I.textures;for(let L=0,W=_.length;L<W;L++){let te=_[L];if(m(te)){let J=y(I),he=i.get(te).__webglTexture;t.bindTexture(J,he),g(J),t.unbindTexture()}}}let B=[],z=[];function V(I){if(I.samples>0){if(ne(I)===!1){let _=I.textures,L=I.width,W=I.height,te=n.COLOR_BUFFER_BIT,J=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(I),ue=_.length>1;if(ue)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let pe=I.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<_.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let le=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,te,n.NEAREST),l===!0&&(B.length=0,z.length=0,B.push(n.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(B.push(J),z.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let le=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let _=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function X(I){return Math.min(r.maxSamples,I.samples)}function ne(I){let _=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Q(I){let _=o.render.frame;u.get(I)!==_&&(u.set(I,_),I.update())}function Ee(I,_){let L=I.colorSpace,W=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||L!==Jr&&L!==Ji&&(ut.getTransfer(L)===vt?(W!==Ln||te!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function Te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=fe,this.setupRenderTarget=v,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ne}function HT(n,e){function t(i,r=Ji){let s,o=ut.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ff)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lf)return n.BYTE;if(i===Uf)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===bu)return n.INT;if(i===Sr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Bf)return n.ALPHA;if(i===Of)return n.RGB;if(i===Ln)return n.RGBA;if(i===Js)return n.DEPTH_COMPONENT;if(i===yo)return n.DEPTH_STENCIL;if(i===Tu)return n.RED;if(i===Au)return n.RED_INTEGER;if(i===zf)return n.RG;if(i===Eu)return n.RG_INTEGER;if(i===Cu)return n.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Pu||i===Iu||i===Du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Uu||i===Fu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lu||i===Uu)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nu||i===Bu||i===Ou||i===zu||i===Vu||i===ku||i===Gu||i===Hu||i===Wu||i===qu||i===Xu||i===Yu||i===Zu||i===ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ku)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ju||i===$u||i===Ku)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ju)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qu||i===eh||i===th||i===nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
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

}`,ap=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new un({vertexShader:WT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lp=class extends Wi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",m=new ap,g={},y=t.getContextAttributes(),w=null,M=null,C=[],E=[],R=new ge,D=null,T=new Xt;T.viewport=new lt;let S=new Xt;S.viewport=new lt;let A=[T,S],N=new uu,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let se=C[re];return se===void 0&&(se=new no,C[re]=se),se.getTargetRaySpace()},this.getControllerGrip=function(re){let se=C[re];return se===void 0&&(se=new no,C[re]=se),se.getGripSpace()},this.getHand=function(re){let se=C[re];return se===void 0&&(se=new no,C[re]=se),se.getHandSpace()};function k(re){let se=E.indexOf(re.inputSource);if(se===-1)return;let xe=C[se];xe!==void 0&&(xe.update(re.inputSource,re.frame,c||o),xe.dispatchEvent({type:re.type,data:re.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let re=0;re<C.length;re++){let se=E[re];se!==null&&(E[re]=null,C[re].disconnect(se))}O=null,Y=null,m.reset();for(let re in g)delete g[re];e.setRenderTarget(w),h=null,f=null,d=null,r=null,M=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?yo:Js,Pe=y.stencil?xo:Sr);let Z={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Pn(f.textureWidth,f.textureHeight,{format:Ln,type:Wn,depthTexture:new Ua(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(re){for(let se=0;se<re.removed.length;se++){let xe=re.removed[se],Pe=E.indexOf(xe);Pe>=0&&(E[Pe]=null,C[Pe].disconnect(xe))}for(let se=0;se<re.added.length;se++){let xe=re.added[se],Pe=E.indexOf(xe);if(Pe===-1){for(let Z=0;Z<C.length;Z++)if(Z>=E.length){E.push(xe),Pe=Z;break}else if(E[Z]===null){E[Z]=xe,Pe=Z;break}if(Pe===-1)break}let ye=C[Pe];ye&&ye.connect(xe)}}let U=new b,ie=new b;function ee(re,se,xe){U.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(xe.matrixWorld);let Pe=U.distanceTo(ie),ye=se.projectionMatrix.elements,Z=xe.projectionMatrix.elements,fe=ye[14]/(ye[10]-1),v=ye[14]/(ye[10]+1),F=(ye[9]+1)/ye[5],B=(ye[9]-1)/ye[5],z=(ye[8]-1)/ye[0],V=(Z[8]+1)/Z[0],X=fe*z,ne=fe*V,Q=Pe/(-z+V),Ee=Q*-z;if(se.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ee),re.translateZ(Q),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ye[10]===-1)re.projectionMatrix.copy(se.projectionMatrix),re.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Te=fe+Q,I=v+Q,_=X-Ee,L=ne+(Pe-Ee),W=F*v/I*Te,te=B*v/I*Te;re.projectionMatrix.makePerspective(_,L,W,te,Te,I),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ce(re,se){se===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(se.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let se=re.near,xe=re.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),N.near=S.near=T.near=se,N.far=S.far=T.far=xe,(O!==N.near||Y!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,Y=N.far),N.layers.mask=re.layers.mask|6,T.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let Pe=re.parent,ye=N.cameras;ce(N,Pe);for(let Z=0;Z<ye.length;Z++)ce(ye[Z],Pe);ye.length===2?ee(N,T,S):N.projectionMatrix.copy(T.projectionMatrix),be(re,N,Pe)};function be(re,se,xe){xe===null?re.matrix.copy(se.matrixWorld):(re.matrix.copy(xe.matrixWorld),re.matrix.invert(),re.matrix.multiply(se.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(se.projectionMatrix),re.projectionMatrixInverse.copy(se.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=$s*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(re){return g[re]};let Ce=null;function De(re,se){if(u=se.getViewerPose(c||o),p=se,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Pe=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,Pe=!0);for(let v=0;v<xe.length;v++){let F=xe[v],B=null;if(h!==null)B=h.getViewport(F);else{let V=d.getViewSubImage(f,F);B=V.viewport,v===0&&(e.setRenderTargetTextures(M,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(M))}let z=A[v];z===void 0&&(z=new Xt,z.layers.enable(v),z.viewport=new lt,A[v]=z),z.matrix.fromArray(F.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(F.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(B.x,B.y,B.width,B.height),v===0&&(N.matrix.copy(z.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pe===!0&&N.cameras.push(z)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let v=d.getDepthInformation(xe[0]);v&&v.isValid&&v.texture&&m.init(v,r.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let v=0;v<xe.length;v++){let F=xe[v].camera;if(F){let B=g[F];B||(B=new Fa,g[F]=B);let z=d.getCameraImage(F);B.sourceTexture=z}}}}for(let xe=0;xe<C.length;xe++){let Pe=E[xe],ye=C[xe];Pe!==null&&ye!==void 0&&ye.update(Pe,se,c||o)}Ce&&Ce(re,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),p=null}let Re=new J0;Re.setAnimationLoop(De),this.setAnimationLoop=function(re){Ce=re},this.dispose=function(){}}},as=new Qt,XT=new at;function YT(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Wf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,w,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&h(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(as)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function h(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZT(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let M=w.program;i.uniformBlockBinding(y,M)}function c(y,w){let M=r[y.id];M===void 0&&(p(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",m));let C=w.program;i.updateUBOMapping(y,C);let E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){let w=d();y.__bindingPointIndex=w;let M=n.createBuffer(),C=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=r[y.id],M=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,R=M.length;E<R;E++){let D=Array.isArray(M[E])?M[E]:[M[E]];for(let T=0,S=D.length;T<S;T++){let A=D[T];if(h(A,E,T,C)===!0){let N=A.__offset,O=Array.isArray(A.value)?A.value:[A.value],Y=0;for(let k=0;k<O.length;k++){let H=O[k],j=x(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+Y,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,w,M,C){let E=y.value,R=w+"_"+M;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{let D=C[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return C[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function p(y){let w=y.uniforms,M=0,C=16;for(let R=0,D=w.length;R<D;R++){let T=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,A=T.length;S<A;S++){let N=T[S],O=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,k=O.length;Y<k;Y++){let H=O[Y],j=x(H),U=M%C,ie=U%j.boundary,ee=U+ie;M+=ie,ee!==0&&C-ee<j.storage&&(M+=C-ee),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=j.storage}}}let E=M%C;return E>0&&(M+=C-E),y.__size=M,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var lh=class{constructor(e={}){let{canvas:t=y0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,C=!1;this._outputColorSpace=pt;let E=0,R=0,D=null,T=-1,S=null,A=new lt,N=new lt,O=null,Y=new Le(0),k=0,H=t.width,j=t.height,U=1,ie=null,ee=null,ce=new lt(0,0,H,j),be=new lt(0,0,H,j),Ce=!1,De=new oo,Re=!1,re=!1,se=new at,xe=new b,Pe=new lt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function fe(){return D===null?U:1}let v=i;function F(P,$){return t.getContext(P,$)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),v===null){let $="webgl2";if(v=F($,P),v===null)throw F($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let B,z,V,X,ne,Q,Ee,Te,I,_,L,W,te,J,he,ue,pe,me,le,Se,ke,ve,we,We;function q(){B=new dw(v),B.init(),ve=new HT(v,B),z=new sw(v,B,e,ve),V=new kT(v,B),z.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),X=new mw(v),ne=new CT,Q=new GT(v,B,V,ne,z,ve,X),Ee=new aw(M),Te=new hw(M),I=new Mb(v),we=new iw(v,I),_=new fw(v,I,X,we),L=new xw(v,_,I,X),le=new gw(v,z,Q),ue=new ow(ne),W=new ET(M,Ee,Te,B,z,we,ue),te=new YT(M,ne),J=new PT,he=new NT(B),me=new nw(M,Ee,Te,V,L,h,l),pe=new zT(M,L,z),We=new ZT(v,X,z,V),Se=new rw(v,B,X),ke=new pw(v,B,X),X.programs=W.programs,M.capabilities=z,M.extensions=B,M.properties=ne,M.renderLists=J,M.shadowMap=pe,M.state=V,M.info=X}q();let Me=new lp(M,v);this.xr=Me,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let P=B.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=B.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(H,j,!1))},this.getSize=function(P){return P.set(H,j)},this.setSize=function(P,$,oe=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,j=$,t.width=Math.floor(P*U),t.height=Math.floor($*U),oe===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(H*U,j*U).floor()},this.setDrawingBufferSize=function(P,$,oe){H=P,j=$,U=oe,t.width=Math.floor(P*oe),t.height=Math.floor($*oe),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ce)},this.setViewport=function(P,$,oe,ae){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,$,oe,ae),V.viewport(A.copy(ce).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(be)},this.setScissor=function(P,$,oe,ae){P.isVector4?be.set(P.x,P.y,P.z,P.w):be.set(P,$,oe,ae),V.scissor(N.copy(be).multiplyScalar(U).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(P){V.setScissorTest(Ce=P)},this.setOpaqueSort=function(P){ie=P},this.setTransparentSort=function(P){ee=P},this.getClearColor=function(P){return P.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,oe=!0){let ae=0;if(P){let K=!1;if(D!==null){let Ae=D.texture.format;K=Ae===Cu||Ae===Eu||Ae===Au}if(K){let Ae=D.texture.type,Fe=Ae===Wn||Ae===Sr||Ae===go||Ae===xo||Ae===Su||Ae===wu,Ge=me.getClearColor(),ze=me.getClearAlpha(),Je=Ge.r,$e=Ge.g,Xe=Ge.b;Fe?(p[0]=Je,p[1]=$e,p[2]=Xe,p[3]=ze,v.clearBufferuiv(v.COLOR,0,p)):(x[0]=Je,x[1]=$e,x[2]=Xe,x[3]=ze,v.clearBufferiv(v.COLOR,0,x))}else ae|=v.COLOR_BUFFER_BIT}$&&(ae|=v.DEPTH_BUFFER_BIT),oe&&(ae|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),me.dispose(),J.dispose(),he.dispose(),ne.dispose(),Ee.dispose(),Te.dispose(),L.dispose(),we.dispose(),We.dispose(),W.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",mi),Me.removeEventListener("sessionend",Lm),kr.stop()};function Ie(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=X.autoReset,$=pe.enabled,oe=pe.autoUpdate,ae=pe.needsUpdate,K=pe.type;q(),X.autoReset=P,pe.enabled=$,pe.autoUpdate=oe,pe.needsUpdate=ae,pe.type=K}function _e(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function de(P){let $=P.target;$.removeEventListener("dispose",de),He($)}function He(P){tt(P),ne.remove(P)}function tt(P){let $=ne.get(P).programs;$!==void 0&&($.forEach(function(oe){W.releaseProgram(oe)}),P.isShaderMaterial&&W.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,oe,ae,K,Ae){$===null&&($=ye);let Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ge=G_(P,$,oe,ae,K);V.setMaterial(ae,Fe);let ze=oe.index,Je=1;if(ae.wireframe===!0){if(ze=_.getWireframeAttribute(oe),ze===void 0)return;Je=2}let $e=oe.drawRange,Xe=oe.attributes.position,ot=$e.start*Je,wt=($e.start+$e.count)*Je;Ae!==null&&(ot=Math.max(ot,Ae.start*Je),wt=Math.min(wt,(Ae.start+Ae.count)*Je)),ze!==null?(ot=Math.max(ot,0),wt=Math.min(wt,ze.count)):Xe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,Xe.count));let qt=wt-ot;if(qt<0||qt===1/0)return;we.setup(K,ae,Ge,oe,ze);let It,Et=Se;if(ze!==null&&(It=I.get(ze),Et=ke,Et.setIndex(It)),K.isMesh)ae.wireframe===!0?(V.setLineWidth(ae.wireframeLinewidth*fe()),Et.setMode(v.LINES)):Et.setMode(v.TRIANGLES);else if(K.isLine){let Ye=ae.linewidth;Ye===void 0&&(Ye=1),V.setLineWidth(Ye*fe()),K.isLineSegments?Et.setMode(v.LINES):K.isLineLoop?Et.setMode(v.LINE_LOOP):Et.setMode(v.LINE_STRIP)}else K.isPoints?Et.setMode(v.POINTS):K.isSprite&&Et.setMode(v.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ye=K._multiDrawStarts,Nt=K._multiDrawCounts,ft=K._multiDrawCount,Bn=ze?I.get(ze).bytesPerElement:1,Cs=ne.get(ae).currentProgram.getUniforms();for(let On=0;On<ft;On++)Cs.setValue(v,"_gl_DrawID",On),Et.render(Ye[On]/Bn,Nt[On])}else if(K.isInstancedMesh)Et.renderInstances(ot,qt,K.count);else if(oe.isInstancedBufferGeometry){let Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Nt=Math.min(oe.instanceCount,Ye);Et.renderInstances(ot,qt,Nt)}else Et.render(ot,qt)};function Rt(P,$,oe){P.transparent===!0&&P.side===an&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,tc(P,$,oe),P.side=ai,P.needsUpdate=!0,tc(P,$,oe),P.side=an):tc(P,$,oe)}this.compile=function(P,$,oe=null){oe===null&&(oe=P),g=he.get(oe),g.init($),w.push(g),oe.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),P!==oe&&P.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();let ae=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){let Ge=Ae[Fe];Rt(Ge,oe,K),ae.add(Ge)}else Rt(Ae,oe,K),ae.add(Ae)}),g=w.pop(),ae},this.compileAsync=function(P,$,oe=null){let ae=this.compile(P,$,oe);return new Promise(K=>{function Ae(){if(ae.forEach(function(Fe){ne.get(Fe).currentProgram.isReady()&&ae.delete(Fe)}),ae.size===0){K(P);return}setTimeout(Ae,10)}B.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let xt=null;function Bi(P){xt&&xt(P)}function mi(){kr.stop()}function Lm(){kr.start()}let kr=new J0;kr.setAnimationLoop(Bi),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(P){xt=P,Me.setAnimationLoop(P),P===null?kr.stop():kr.start()},Me.addEventListener("sessionstart",mi),Me.addEventListener("sessionend",Lm),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera($),$=Me.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,$,D),g=he.get(P,w.length),g.init($),w.push(g),se.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),De.setFromProjectionMatrix(se,oi,$.reversedDepth),re=this.localClippingEnabled,Re=ue.init(this.clippingPlanes,re),m=J.get(P,y.length),m.init(),y.push(m),Me.enabled===!0&&Me.isPresenting===!0){let Ae=M.xr.getDepthSensingMesh();Ae!==null&&Bd(Ae,$,-1/0,M.sortObjects)}Bd(P,$,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ie,ee),Z=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Z&&me.addToRenderList(m,P),this.info.render.frame++,Re===!0&&ue.beginShadows();let oe=g.state.shadowsArray;pe.render(oe,P,$),Re===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,K=m.transmissive;if(g.setupLights(),$.isArrayCamera){let Ae=$.cameras;if(K.length>0)for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++){let ze=Ae[Fe];Fm(ae,K,P,ze)}Z&&me.render(P);for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++){let ze=Ae[Fe];Um(m,P,ze,ze.viewport)}}else K.length>0&&Fm(ae,K,P,$),Z&&me.render(P),Um(m,P,$);D!==null&&R===0&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(M,P,$),we.resetDefaultState(),T=-1,S=null,w.pop(),w.length>0?(g=w[w.length-1],Re===!0&&ue.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Bd(P,$,oe,ae){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||De.intersectsSprite(P)){ae&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);let Fe=L.update(P),Ge=P.material;Ge.visible&&m.push(P,Fe,Ge,oe,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||De.intersectsObject(P))){let Fe=L.update(P),Ge=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(se)),Array.isArray(Ge)){let ze=Fe.groups;for(let Je=0,$e=ze.length;Je<$e;Je++){let Xe=ze[Je],ot=Ge[Xe.materialIndex];ot&&ot.visible&&m.push(P,Fe,ot,oe,Pe.z,Xe)}}else Ge.visible&&m.push(P,Fe,Ge,oe,Pe.z,null)}}let Ae=P.children;for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++)Bd(Ae[Fe],$,oe,ae)}function Um(P,$,oe,ae){let K=P.opaque,Ae=P.transmissive,Fe=P.transparent;g.setupLightsView(oe),Re===!0&&ue.setGlobalState(M.clippingPlanes,oe),ae&&V.viewport(A.copy(ae)),K.length>0&&ec(K,$,oe),Ae.length>0&&ec(Ae,$,oe),Fe.length>0&&ec(Fe,$,oe),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Fm(P,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Pn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?bi:Wn,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Ae=g.state.transmissionRenderTarget[ae.id],Fe=ae.viewport||A;Ae.setSize(Fe.z*M.transmissionResolutionScale,Fe.w*M.transmissionResolutionScale);let Ge=M.getRenderTarget(),ze=M.getActiveCubeFace(),Je=M.getActiveMipmapLevel();M.setRenderTarget(Ae),M.getClearColor(Y),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),Z&&me.render(oe);let $e=M.toneMapping;M.toneMapping=ji;let Xe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),Re===!0&&ue.setGlobalState(M.clippingPlanes,ae),ec(P,oe,ae),Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae),B.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let wt=0,qt=$.length;wt<qt;wt++){let It=$[wt],Et=It.object,Ye=It.geometry,Nt=It.material,ft=It.group;if(Nt.side===an&&Et.layers.test(ae.layers)){let Bn=Nt.side;Nt.side=dn,Nt.needsUpdate=!0,Nm(Et,oe,ae,Ye,Nt,ft),Nt.side=Bn,Nt.needsUpdate=!0,ot=!0}}ot===!0&&(Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae))}M.setRenderTarget(Ge,ze,Je),M.setClearColor(Y,k),Xe!==void 0&&(ae.viewport=Xe),M.toneMapping=$e}function ec(P,$,oe){let ae=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ae=P.length;K<Ae;K++){let Fe=P[K],Ge=Fe.object,ze=Fe.geometry,Je=Fe.group,$e=Fe.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Ge.layers.test(oe.layers)&&Nm(Ge,$,oe,ze,$e,Je)}}function Nm(P,$,oe,ae,K,Ae){P.onBeforeRender(M,$,oe,ae,K,Ae),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(M,$,oe,ae,P,Ae),K.transparent===!0&&K.side===an&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,P,Ae),K.side=ai,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ae,K,P,Ae),K.side=an):M.renderBufferDirect(oe,$,ae,K,P,Ae),P.onAfterRender(M,$,oe,ae,K,Ae)}function tc(P,$,oe){$.isScene!==!0&&($=ye);let ae=ne.get(P),K=g.state.lights,Ae=g.state.shadowsArray,Fe=K.state.version,Ge=W.getParameters(P,K.state,Ae,$,oe),ze=W.getProgramCacheKey(Ge),Je=ae.programs;ae.environment=P.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(P.isMeshStandardMaterial?Te:Ee).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",de),Je=new Map,ae.programs=Je);let $e=Je.get(ze);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===Fe)return Om(P,Ge),$e}else Ge.uniforms=W.getUniforms(P),P.onBeforeCompile(Ge,M),$e=W.acquireProgram(Ge,ze),Je.set(ze,$e),ae.uniforms=Ge.uniforms;let Xe=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=ue.uniform),Om(P,Ge),ae.needsLights=W_(P),ae.lightsStateVersion=Fe,ae.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=$e,ae.uniformsList=null,$e}function Bm(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=Mo.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function Om(P,$){let oe=ne.get(P);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function G_(P,$,oe,ae,K){$.isScene!==!0&&($=ye),Q.resetTextureUnits();let Ae=$.fog,Fe=ae.isMeshStandardMaterial?$.environment:null,Ge=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jr,ze=(ae.isMeshStandardMaterial?Te:Ee).get(ae.envMap||Fe),Je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!oe.morphAttributes.position,ot=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color,qt=ji;ae.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(qt=M.toneMapping);let It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Et=It!==void 0?It.length:0,Ye=ne.get(ae),Nt=g.state.lights;if(Re===!0&&(re===!0||P!==S)){let Mn=P===S&&ae.id===T;ue.setState(ae,P,Mn)}let ft=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==Ge||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isBatchedMesh&&Ye.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ye.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ye.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ye.instancingMorph===!1&&K.morphTexture!==null||Ye.envMap!==ze||ae.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==$e||Ye.morphTargets!==Xe||Ye.morphNormals!==ot||Ye.morphColors!==wt||Ye.toneMapping!==qt||Ye.morphTargetsCount!==Et)&&(ft=!0):(ft=!0,Ye.__version=ae.version);let Bn=Ye.currentProgram;ft===!0&&(Bn=tc(ae,$,K));let Cs=!1,On=!1,ia=!1,Bt=Bn.getUniforms(),Xn=Ye.uniforms;if(V.useProgram(Bn.program)&&(Cs=!0,On=!0,ia=!0),ae.id!==T&&(T=ae.id,On=!0),Cs||S!==P){V.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Bt.setValue(v,"projectionMatrix",P.projectionMatrix),Bt.setValue(v,"viewMatrix",P.matrixWorldInverse);let En=Bt.map.cameraPosition;En!==void 0&&En.setValue(v,xe.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Bt.setValue(v,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(v,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,On=!0,ia=!0)}if(K.isSkinnedMesh){Bt.setOptional(v,K,"bindMatrix"),Bt.setOptional(v,K,"bindMatrixInverse");let Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Bt.setValue(v,"boneTexture",Mn.boneTexture,Q))}K.isBatchedMesh&&(Bt.setOptional(v,K,"batchingTexture"),Bt.setValue(v,"batchingTexture",K._matricesTexture,Q),Bt.setOptional(v,K,"batchingIdTexture"),Bt.setValue(v,"batchingIdTexture",K._indirectTexture,Q),Bt.setOptional(v,K,"batchingColorTexture"),K._colorsTexture!==null&&Bt.setValue(v,"batchingColorTexture",K._colorsTexture,Q));let Yn=oe.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&le.update(K,oe,Bn),(On||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,Bt.setValue(v,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Xn.envMap.value=ze,Xn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Xn.envMapIntensity.value=$.environmentIntensity),On&&(Bt.setValue(v,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&H_(Xn,ia),Ae&&ae.fog===!0&&te.refreshFogUniforms(Xn,Ae),te.refreshMaterialUniforms(Xn,ae,U,j,g.state.transmissionRenderTarget[P.id]),Mo.upload(v,Bm(Ye),Xn,Q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Mo.upload(v,Bm(Ye),Xn,Q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(v,"center",K.center),Bt.setValue(v,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(v,"normalMatrix",K.normalMatrix),Bt.setValue(v,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){let Mn=ae.uniformsGroups;for(let En=0,Od=Mn.length;En<Od;En++){let Gr=Mn[En];We.update(Gr,Bn),We.bind(Gr,Bn)}}return Bn}function H_(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function W_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,$,oe){let ae=ne.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ne.get(P.texture).__webglTexture=$,ne.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){let oe=ne.get(P);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};let q_=v.createFramebuffer();this.setRenderTarget=function(P,$=0,oe=0){D=P,E=$,R=oe;let ae=!0,K=null,Ae=!1,Fe=!1;if(P){let ze=ne.get(P);if(ze.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(v.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)Q.setupRenderTarget(P);else if(ze.__hasExternalTextures)Q.rebindTextures(P,ne.get(P.texture).__webglTexture,ne.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Xe=P.depthTexture;if(ze.__boundDepthTexture!==Xe){if(Xe!==null&&ne.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(P)}}let Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);let $e=ne.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[$])?K=$e[$][oe]:K=$e[$],Ae=!0):P.samples>0&&Q.useMultisampledRTT(P)===!1?K=ne.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[oe]:K=$e,A.copy(P.viewport),N.copy(P.scissor),O=P.scissorTest}else A.copy(ce).multiplyScalar(U).floor(),N.copy(be).multiplyScalar(U).floor(),O=Ce;if(oe!==0&&(K=q_),V.bindFramebuffer(v.FRAMEBUFFER,K)&&ae&&V.drawBuffers(P,K),V.viewport(A),V.scissor(N),V.setScissorTest(O),Ae){let ze=ne.get(P.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,oe)}else if(Fe){let ze=$;for(let Je=0;Je<P.textures.length;Je++){let $e=ne.get(P.textures[Je]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Je,$e.__webglTexture,oe,ze)}}else if(P!==null&&oe!==0){let ze=ne.get(P.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,ze.__webglTexture,oe)}T=-1},this.readRenderTargetPixels=function(P,$,oe,ae,K,Ae,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){V.bindFramebuffer(v.FRAMEBUFFER,ze);try{let Je=P.textures[Ge],$e=Je.format,Xe=Je.type;if(!z.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ae&&oe>=0&&oe<=P.height-K&&(P.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ge),v.readPixels($,oe,ae,K,ve.convert($e),ve.convert(Xe),Ae))}finally{let Je=D!==null?ne.get(D).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,$,oe,ae,K,Ae,Fe,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ne.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if($>=0&&$<=P.width-ae&&oe>=0&&oe<=P.height-K){V.bindFramebuffer(v.FRAMEBUFFER,ze);let Je=P.textures[Ge],$e=Je.format,Xe=Je.type;if(!z.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,ot),v.bufferData(v.PIXEL_PACK_BUFFER,Ae.byteLength,v.STREAM_READ),P.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ge),v.readPixels($,oe,ae,K,ve.convert($e),ve.convert(Xe),0);let wt=D!==null?ne.get(D).__webglFramebuffer:null;V.bindFramebuffer(v.FRAMEBUFFER,wt);let qt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await v0(v,qt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,ot),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Ae),v.deleteBuffer(ot),v.deleteSync(qt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,oe=0){let ae=Math.pow(2,-oe),K=Math.floor(P.image.width*ae),Ae=Math.floor(P.image.height*ae),Fe=$!==null?$.x:0,Ge=$!==null?$.y:0;Q.setTexture2D(P,0),v.copyTexSubImage2D(v.TEXTURE_2D,oe,0,0,Fe,Ge,K,Ae),V.unbindTexture()};let X_=v.createFramebuffer(),Y_=v.createFramebuffer();this.copyTextureToTexture=function(P,$,oe=null,ae=null,K=0,Ae=null){Ae===null&&(K!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Fe,Ge,ze,Je,$e,Xe,ot,wt,qt,It=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(oe!==null)Fe=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,ze=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,$e=oe.min.y,Xe=oe.isBox3?oe.min.z:0;else{let Yn=Math.pow(2,-K);Fe=Math.floor(It.width*Yn),Ge=Math.floor(It.height*Yn),P.isDataArrayTexture?ze=It.depth:P.isData3DTexture?ze=Math.floor(It.depth*Yn):ze=1,Je=0,$e=0,Xe=0}ae!==null?(ot=ae.x,wt=ae.y,qt=ae.z):(ot=0,wt=0,qt=0);let Et=ve.convert($.format),Ye=ve.convert($.type),Nt;$.isData3DTexture?(Q.setTexture3D($,0),Nt=v.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Q.setTexture2DArray($,0),Nt=v.TEXTURE_2D_ARRAY):(Q.setTexture2D($,0),Nt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,$.unpackAlignment);let ft=v.getParameter(v.UNPACK_ROW_LENGTH),Bn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Cs=v.getParameter(v.UNPACK_SKIP_PIXELS),On=v.getParameter(v.UNPACK_SKIP_ROWS),ia=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,It.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,It.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Je),v.pixelStorei(v.UNPACK_SKIP_ROWS,$e),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xe);let Bt=P.isDataArrayTexture||P.isData3DTexture,Xn=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){let Yn=ne.get(P),Mn=ne.get($),En=ne.get(Yn.__renderTarget),Od=ne.get(Mn.__renderTarget);V.bindFramebuffer(v.READ_FRAMEBUFFER,En.__webglFramebuffer),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,Od.__webglFramebuffer);for(let Gr=0;Gr<ze;Gr++)Bt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ne.get(P).__webglTexture,K,Xe+Gr),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ne.get($).__webglTexture,Ae,qt+Gr)),v.blitFramebuffer(Je,$e,Fe,Ge,ot,wt,Fe,Ge,v.DEPTH_BUFFER_BIT,v.NEAREST);V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||ne.has(P)){let Yn=ne.get(P),Mn=ne.get($);V.bindFramebuffer(v.READ_FRAMEBUFFER,X_),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,Y_);for(let En=0;En<ze;En++)Bt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Yn.__webglTexture,K,Xe+En):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Yn.__webglTexture,K),Xn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Mn.__webglTexture,Ae,qt+En):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Mn.__webglTexture,Ae),K!==0?v.blitFramebuffer(Je,$e,Fe,Ge,ot,wt,Fe,Ge,v.COLOR_BUFFER_BIT,v.NEAREST):Xn?v.copyTexSubImage3D(Nt,Ae,ot,wt,qt+En,Je,$e,Fe,Ge):v.copyTexSubImage2D(Nt,Ae,ot,wt,Je,$e,Fe,Ge);V.bindFramebuffer(v.READ_FRAMEBUFFER,null),V.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Xn?P.isDataTexture||P.isData3DTexture?v.texSubImage3D(Nt,Ae,ot,wt,qt,Fe,Ge,ze,Et,Ye,It.data):$.isCompressedArrayTexture?v.compressedTexSubImage3D(Nt,Ae,ot,wt,qt,Fe,Ge,ze,Et,It.data):v.texSubImage3D(Nt,Ae,ot,wt,qt,Fe,Ge,ze,Et,Ye,It):P.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Ae,ot,wt,Fe,Ge,Et,Ye,It.data):P.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Ae,ot,wt,It.width,It.height,Et,It.data):v.texSubImage2D(v.TEXTURE_2D,Ae,ot,wt,Fe,Ge,Et,Ye,It);v.pixelStorei(v.UNPACK_ROW_LENGTH,ft),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Bn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Cs),v.pixelStorei(v.UNPACK_SKIP_ROWS,On),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ia),Ae===0&&$.generateMipmaps&&v.generateMipmap(Nt),V.unbindTexture()},this.initRenderTarget=function(P){ne.get(P).__webglFramebuffer===void 0&&Q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Q.setTextureCube(P,0):P.isData3DTexture?Q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Q.setTexture2DArray(P,0):Q.setTexture2D(P,0),V.unbindTexture()},this.resetState=function(){E=0,R=0,D=null,V.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var ll=class n extends Ve{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Xt;let i=this,r=t.color!==void 0?new Le(t.color):new Le(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Cn,d=new b,f=new b,h=new b,p=new at,x=new b(0,0,-1),m=new lt,g=new b,y=new b,w=new lt,M=new at,C=this.camera,E=new Pn(s,o,{samples:c,type:bi}),R=new un({name:l.name!==void 0?l.name:"unspecified",uniforms:rh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=E.texture,R.uniforms.color.value=r,R.uniforms.textureMatrix.value=M,this.material=R,this.onBeforeRender=function(D,T,S){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(S.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),g.subVectors(f,h),g.dot(d)>0===!0&&this.forceUpdate===!1)return;g.reflect(d).negate(),g.add(f),p.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),y.subVectors(f,x),y.reflect(d).negate(),y.add(f),C.position.copy(g),C.up.set(0,1,0),C.up.applyMatrix4(p),C.up.reflect(d),C.lookAt(y),C.far=S.far,C.updateMatrixWorld(),C.projectionMatrix.copy(S.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(C.projectionMatrix),M.multiply(C.matrixWorldInverse),M.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=C.projectionMatrix;w.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],w.z=-1,w.w=(1+N.elements[10])/N.elements[14],m.multiplyScalar(2/m.dot(w)),N.elements[2]=m.x,N.elements[6]=m.y,N.elements[10]=m.z+1-a,N.elements[14]=m.w,i.visible=!1;let O=D.getRenderTarget(),Y=D.xr.enabled,k=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(E),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(T,C),D.xr.enabled=Y,D.shadowMap.autoUpdate=k,D.setRenderTarget(O);let H=S.viewport;H!==void 0&&D.state.viewport(H),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};ll.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var uh=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function nx(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function yn(n,e,t,i=0,r=0){return nx(n,new Ft(1,i),e,t,r)}function up(n,e,t,i=0){return nx(n,new ui(1),e,t,i)}function jT(n,e){let t=new Qe;return t.setAttribute("position",new Oe(e.flat(),3)),{tone:n,geometry:t}}function tx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return jT(n,i)}function JT(){let n=[yn("fur",[0,.012,.011],[.154,.161,.132],1),yn("fur",[0,-.065,.008],[.128,.079,.108]),yn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),yn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),tx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),yn("skin",[0,-.061,-.133],[.102,.066,.065],1),yn("skinShade",[0,-.097,-.14],[.076,.031,.047]),yn("skin",[0,.015,-.15],[.041,.056,.038]),yn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(yn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),yn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),up("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),yn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),yn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),yn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),yn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),yn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),yn("ink",[e*.047,.031,-.183],[.011,.012,.006]),up("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),up("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(tx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function $T(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new Qe;return r.setAttribute("position",new ht(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var KT=$T(JT());function hh(n=0){let e=new hn({flatShading:!0}),t=new hn({flatShading:!0}),i=new hn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new Le("#212128"),ivory:new Le("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g:m,b:g}=s[f];for(let y=h;y<p;y++)u.setXYZ(y,x,m,g)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<uh.length?u:0;if(d===o)return;o=d;let f=uh[o];for(let[h,p]of Object.entries(f))(s[h]??=new Le).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new ht(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new Ve(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new Tt;return u.add(c(KT)),u}}}var us=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],QT=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],eA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],ix=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],dh=us.length-1,rx=Math.min(...us.map(n=>n[1])),sx=Math.max(...us.map(n=>n[1])),$i=new b(0,0,(rx+sx)/2),fh=new b(.047,.027,(sx-rx)/2),tA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],nA=[-.57,.57,1,.61,-.61,-1],iA=[1,1,-.04,-.91,-.91,-.04];function ph(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(T=0,S=0,A=0){let N=s.length/3;return s.push(T*r,S,A),N}function c(T,S,A){i?o.push(T,A,S):o.push(T,S,A)}function u(T,S,A,N){c(T,S,A),c(T,A,N)}function d(T,S){for(let A=0;A<T.length;A++){let N=(A+1)%T.length;u(T[N],T[A],S[A],S[N])}}function f(T,S){for(let A=0;A<T.length;A++)c(S,T[(A+1)%T.length],T[A])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=us.map(([T,S,A,N],O)=>{let Y=O===0||O===dh,k=T*.67,H=-.024+(S+.024)*.69;return{top:l(T,A,S),middle:l(T*1.08,(A+N)/2,Y?S:-.025+(S+.025)*1.04),bottom:l(T,N,S),innerTop:l(k,QT[O],H),innerBottom:l(k,eA[O],H)}});function m(T){let S=x[T],A=x[(T+1)%x.length];return[S.top,A.top,A.middle,A.bottom,S.bottom,S.middle]}let g=new Set(ix.map(({edge:T})=>T));g.add(dh);for(let T=0;T<x.length;T++){let S=x[T],A=x[(T+1)%x.length];c(h,S.innerTop,A.innerTop),c(p,A.innerBottom,S.innerBottom),u(S.innerTop,S.top,A.top,A.innerTop),u(A.innerBottom,A.bottom,S.bottom,S.innerBottom),g.has(T)||(u(A.top,S.top,S.middle,A.middle),u(A.middle,S.middle,S.bottom,A.bottom))}let y=m(dh);t||f(y,l(0,0,us[dh][1]));let w=i?[y[1],y[0],y[5],y[4],y[3],y[2]]:y;for(let{edge:T,length:S,splay:A}of ix){let[N,O,Y,k]=us[T],[H,j,U,ie]=us[T+1],ee=H-N,ce=j-O,be=-ce+ee*A,Ce=ee+ce*A,De=Math.hypot(be,Ce),Re=Math.hypot(ee,ce)/2,re=(Y+U-k-ie)/4,se=[],xe=m(T);for(let[ye,Z,fe]of tA){let v=[l(),l(),l(),l(),l(),l()];d(xe,v),se.push({ring:v,distance:ye*S,width:Z*Re,height:fe*re}),xe=v}let Pe=l();f(xe,Pe),a.push({x:(N+H)/2,y:(Y+U+k+ie)/4,z:(O+j)/2,forwardX:be/De,forwardZ:Ce/De,rows:se,tip:Pe,length:S,pressure:-1})}let M=new Qe,C=new Oe(s,3).setUsage(Sn);M.setAttribute("position",C),M.setIndex(o),M.boundingSphere=new jn(new b(0,-.018,-.052),.12),M.boundingBox=new $t(new b(-.1,-.082,-.17),new b(.1,.038,.025));let E=!0;function R(T,S=!0){let A=!1;for(let N=0;N<a.length;N++){let O=a[N],Y=T?.[N],k=Number.isFinite(Y)?Ne.clamp(Y,0,1):0;if(k===O.pressure)continue;O.pressure=k,A=!0;let{forwardX:H,forwardZ:j,length:U,rows:ie,tip:ee}=O,ce=O.x,be=O.z,Ce=O.y,De=0,Re=0;for(let{ring:xe,distance:Pe,width:ye,height:Z}of ie){let fe=Pe/U,v=Ne.smoothstep(fe,0,.57),F=Ne.smoothstep(fe,.38,1),B=(.17+k*.83)*v+(.14+k*.76)*F,z=(B+De)/2,V=Pe-Re,X=Math.cos(z)*V;ce+=H*X,Ce-=Math.sin(z)*V,be+=j*X;for(let ne=0;ne<xe.length;ne++){let Q=nA[ne]*ye,Ee=iA[ne]*Z,Te=Ee*Math.sin(B);C.setXYZ(xe[ne],r*(ce+j*Q+H*Te),Ce+Ee*Math.cos(B),be-H*Q+j*Te)}De=B,Re=Pe}let re=U-Re,se=re*Math.cos(De);C.setXYZ(ee,r*(ce+H*se),Ce-re*Math.sin(De),be+j*se)}A&&(C.needsUpdate=!0,E=!0),S&&E&&(M.computeVertexNormals(),E=!1)}R(),M.getAttribute("normal").setUsage(Sn);let D=new Ve(M,e);return D.castShadow=!0,{mesh:D,pose:R,wristIndices:w}}var wr=12,hp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],rA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],ox=hp.flatMap(([n,e,t])=>Array.from({length:wr},(i,r)=>{let s=(r-.5)*Math.PI*2/wr;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function mh(n,e){let t=ox.length,i=[],r=(j,U,ie,ee,ce)=>j.push(U,ie,ee,U,ee,ce);function s(j,U,ie=!1){for(let ee=1;ee<U.length-1;ee++)ie?j.push(U[0],U[ee+1],U[ee]):j.push(U[0],U[ee],U[ee+1])}let o=(j,U)=>j*wr+(U+wr)%wr;for(let j=0;j<hp.length-1;j++)for(let U=0;U<wr;U++)(j===2||j===3)&&(U===0||U===6)||r(i,o(j,U),o(j+1,U),o(j+1,U+1),o(j,U+1));s(i,Array.from({length:wr},(j,U)=>o(0,U))),s(i,Array.from({length:wr},(j,U)=>o(hp.length-1,U)),!0);let a=t,l=e.map(({geometry:j,wristIndices:U},ie)=>{let ee=ie===0?6:0,ce=[o(4,ee),o(4,ee+1),o(3,ee+1),o(2,ee+1),o(2,ee),o(3,ee)],be=[ce,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Ce=be.at(-1),De=new Array(j.attributes.position.count);U.forEach((se,xe)=>{De[se]=Ce[xe]});for(let se=0;se<De.length;se++)De[se]??=a++;let Re=[];for(let se=0;se<j.index.count;se++)Re.push(De[j.index.getX(se)]);for(let se=0;se<be.length-1;se++)for(let xe=0;xe<6;xe++){let Pe=(xe+1)%6;r(i,be[se][xe],be[se][Pe],be[se+1][Pe],be[se+1][xe])}let re=[];return s(re,Ce),{socket:ce,rings:be,wrist:Ce,wristIndices:U,remap:De,skin:Re,cap:re,sign:ie===0?-1:1}}),c=new Qe,u=new Oe(a*3,3).setUsage(Sn);c.setAttribute("position",u);let d=new Ve(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(j,U)=>new Kr([...i,...l.flatMap((ie,ee)=>U&1<<ee?ie.skin:ie.cap)],1));c.setIndex(f[0]);let h=new b,p=new b,x=new b,m=new b,g=new b,y=new b,w=new b,M=new b,C=new b,E=new qe,R=new qe,D=new qe,T=new b(0,0,-1),S=new qe().setFromEuler(new Qt(-1.42,0,0)),A=[.24,.62,.94,.56],N=[.089,.084,.069,.054,.037],O=0,Y=0,k=!0;function H(j,U,ie,ee,ce){let be=!!(j[0]||j[1]);if(!be&&!k&&O===ie&&Y===ee)return;O=ie,Y=ee,k=be;for(let De=0;De<t;De++){let[Re,re,se]=ox[De];u.setXYZ(De,Re*ie,re*ee,se*ie)}let Ce=0;for(let De=0;De<l.length;De++){let Re=l[De],re=j[De],se=e[De].geometry.attributes.position,xe=!!re,Pe=Re.wristIndices;xe&&ce&&(Ce|=1<<De),p.set(0,0,0);for(let ye of Re.socket)p.add(h.fromBufferAttribute(u,ye));p.multiplyScalar(1/6),m.set(0,0,0);for(let ye of Pe)m.add(h.fromBufferAttribute(se,ye));m.multiplyScalar(1/6).applyQuaternion(re?.quaternion??S),xe?m.add(re.position):m.add(h.set(p.x+Re.sign*.026,p.y-.43,p.z-.015)),g.subVectors(m,p),y.copy(g).normalize(),w.set(Re.sign*.38,-1,.27).addScaledVector(y,-y.dot(h.set(Re.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(g,.49),xe&&x.addScaledVector(w,Math.sqrt(Math.max(.007,U**2-g.lengthSq()*.25))*.72),E.setFromUnitVectors(T,y.subVectors(x,p).normalize()),R.copy(re?.quaternion??S);for(let ye=0;ye<4;ye++){let Z=ye===3;C.lerpVectors(Z?x:p,Z?m:x,A[ye]),D.copy(E).slerp(R,Z?.79:ye*.19);for(let fe=0;fe<6;fe++){let v=rA[fe],F=N[ye];M.set(v[0]*F,v[1]*F*.84,0).applyQuaternion(D).add(C),u.setXYZ(Re.rings[ye+1][fe],M.x,M.y,M.z)}}for(let ye=0;ye<Re.remap.length;ye++)M.fromBufferAttribute(se,ye).applyQuaternion(R),xe?M.add(re.position):M.add(h.set(p.x+Re.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Re.remap[ye],M.x,M.y,M.z)}c.index!==f[Ce]&&c.setIndex(f[Ce]),u.needsUpdate=!0,c.computeVertexNormals()}return H([null,null],.42,1,1,!1),{mesh:d,pose:H}}function wo(n,e){let t=new ci;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new Xi(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var ax=.1,sA=45,lx=55,cl=128,dp=96,oA=[new Le("#ffdc4d"),new Le("#ff5d35"),new Le("#bfc4c8")],aA=new b(0,0,-1);function fp(){let n=new Tt,e=new gt({color:"#596974",roughness:.38,metalness:.6}),t=new gt({color:"#29323e",roughness:.68}),i=new _t({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new Ve(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new gt({color:"#7f4231",roughness:.46,metalness:.34});return r(wo([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(wo([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new Yt(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new et(.054,.014,.073),s,.035,.045,-.099),r(new et(.018,.008,.023),i,.035,.063,-.131),n}function cx(n,{impact:e,onShot:t}){let i=fp(),r=new Ve(new Ft(.045,0),new _t({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new Qe,o=new Oe(cl*18,3).setUsage(Sn),a=new Oe(cl*18,3);for(let O=0;O<cl;O++)for(let Y=0;Y<6;Y++){let k=oA[Math.floor(Y/2)];a.setXYZ(O*6+Y,k.r,k.g,k.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new es(s,new vi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Oe(dp*3,3).setUsage(Sn),u=new Qe;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new La(u,new ao({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:$n}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:cl},()=>({p:new b,d:new b,distance:0,active:!1,authoritative:!1})),h=Array.from({length:dp},()=>({p:new b,v:new b,life:0})),p=new b,x=new b,m=new b,g=0,y=0,w=0,M=0,C=0,E=!1;function R(O,Y,k,H){for(let j=0;j<k;j++){let U=h[y++%dp];U.p.copy(O),U.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(H).addScaledVector(Y,.55),U.life=.12+Math.random()*.21}}function D(O,Y,k){let H=f[g++%cl];return H.p.copy(O),H.d.copy(aA).applyQuaternion(Y),H.distance=0,H.active=!0,H.authoritative=k,H}function T(O){let Y=D(O.position,O.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),R(p,Y.d,4,2.2),C=.055,w++,t?.(O.position,O.quaternion)}function S(O,Y,k){let H=D(O,Y,k);R(H.p,H.d,4,2.2),l.visible=!0}function A({dt:O,aim:Y,firing:k}){if(!Y&&!i.visible&&!l.visible&&!d.visible)return;if(O=Math.max(0,Math.min(O,.12)),i.visible=!!Y,Y&&(i.position.copy(Y.modelPosition??Y.position),i.quaternion.copy(Y.quaternion)),Y&&k){if(E)for(M-=O;M<=0;)T(Y),M+=ax;else T(Y),M=ax;E=!0}else M=0,E=!1;C=Math.max(0,C-O),r.visible=!!Y&&C>0,r.material.opacity=C/.055;let H=0;for(let U of f){if(!U.active)continue;let ie=Math.min(sA*O,lx-U.distance),ee=ie>0?e?.(U.p,U.d,ie,U.authoritative):null,ce=ee==null?ie:Math.max(0,Math.min(ie,ee));U.p.addScaledVector(U.d,ce),U.distance+=ce,ee!=null&&(m.copy(U.d).negate(),R(U.p,m,8,4.2)),U.active=ee==null&&U.distance<lx;let be=Math.min(.82,U.distance);for(let Ce=0;Ce<3;Ce++)for(let De=0;De<2;De++){let Re=(Ce+De)/3;x.copy(U.p).addScaledVector(U.d,-be*Re),o.setXYZ(H++,x.x,x.y,x.z)}}l.visible=H>0,H>0&&(o.needsUpdate=!0),s.setDrawRange(0,H);let j=0;for(let U of h)U.life<=0||(U.life-=O,U.v.y-=5*O,U.p.addScaledVector(U.v,O),U.life>0&&c.setXYZ(j++,U.p.x,U.p.y,U.p.z));d.visible=j>0,j>0&&(c.needsUpdate=!0),u.setDrawRange(0,j)}function N(){for(let O of f)O.active=!1;for(let O of h)O.life=0;M=C=0,E=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:A,reset:N,replay:S,get shotsFired(){return w}}}var ux=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],lA=new b(0,1,0);function gh(n){let e=new Tt,t=new gt({color:"#2c4750",roughness:.43,metalness:.47}),i=new gt({color:"#899fa3",roughness:.46,metalness:.57}),r=new _t({toneMapped:!1});function s(h,p,x,m,g,y=0){let w=new Ve(h,p);return w.position.set(x,m,g),w.rotation.x=y,e.add(w),w}s(wo([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(wo([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new Yt(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new Yt(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new et(.044,.009,.038),r,.038,.069,-.023);let o=new Ve(new Yt(.002,.003,1,5,1,!0),new _t({transparent:!0,opacity:.52,depthWrite:!1,blending:$n,toneMapped:!1})),a=new Ve(new Ft(.012,0),new _t({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new b,c=new b,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:m}){if(!h||!p||!x||!m){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(ux[h-1]??ux[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(m,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(lA,c.normalize()),a.position.copy(m)}return d(),{mesh:e,hide:d,update:f}}var cA="wss://clouddata.turbowarp.org",uA="itssoren.github.io/VR/gorilla-lab/",vh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},To=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),fx="\u2601 GorillaHost",ul=["ARENE1","ARENE2","ARENE3"],hA=new Map([[fx,"vr"],[vh.vr,"vr"],[vh.pc,"pc"],...To.map(n=>[n,"player"])]),mp=53,xh=4400,px=64e3,dA=100,fA=200,pA=450,mx=6,Vt=(n,e)=>Math.round(n).toString().padStart(e,"0");function hl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function hs(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function mA({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+Vt(e,7)+a.map(c=>Vt(c*100+2e4,5)).join("")+Vt(Math.round(l*10)%3600,4)+Vt(o,6)}function gA(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function gx({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,m="",g=-1/0,y=null,w=0,M=0,C=1/0,E=0,R="offline",D=!1,T=-1,S=0,A=[],N=1/0,O=350,Y=1/0,k=0,H=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function U(v,F){R=v,n(F)}function ie(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function ee(){return[...c.values()].map(v=>v.pose).filter(Boolean)}function ce(){let v=ee().filter(V=>h==="vr"?V.role!=="vr":V.role==="vr"),F=V=>Number(V.ready)*2+ +(V.role==="pc"),B=v.find(V=>V.id===y?.id)??null,z=v.reduce((V,X)=>!V||F(X)>F(V)?X:V,B);z!==y&&(y=z,e(y))}function be(v){for(let F of c.values())F.pose&&t(null,F.pose),F.pose=F.candidate=null;v&&c.clear(),ce()}function Ce(){let v=f;if(f=null,v){v.onopen=v.onmessage=v.onerror=v.onclose=null;try{v.close()}catch{}}}function De(){Ce(),h=null,p="",C=1/0,D=!1,T=-1,A=[],H=[],be(!0),U("offline","Hors ligne")}function Re(v){let F=Math.min(3e4,1500*2**Math.min(E++,5));C=a()+F,U("retry","TurboWarp d\xE9connect\xE9 ("+v+") \xB7 reconnexion automatique au salon "+p)}function re(v){let F=!1;for(let[B,z]of c)z.pose&&v-z.pose.arrival>xh&&(t(null,z.pose),z.pose=null,F=!0),z.candidate&&v-z.candidate.arrival>xh&&(z.candidate=null),v-z.lastArrival>6e4&&c.delete(B);F&&ce()}function se(v,F,B,z){let V=TA(B.value,null);if(!V||V.id===x)return;let X=c.get(V.id);if(!X){if(c.size>=64)return;X={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:z,pose:null,candidate:null},c.set(V.id,X)}if(V.time<=X.lastTime)return;let ne=X.pose??X.candidate;if(ne&&V.time-ne.time>xh+z-ne.arrival){if(X.pose)return;X.candidate=null}X.lastTime=V.time,X.lastArrival=z;let Q={...V,ready:V.ready??!0,protocol:V.protocol??(V.ready===void 0?3:4),role:v,channel:F,received:o(),arrival:z},Ee=X.candidate;if(!X.pose&&(!Ee||Ee.channel!==F||Ee.map!==Q.map||z-Ee.arrival>xh)&&(V.ready!==void 0||Math.abs(V.time-Q.received)>25e3)){X.candidate=Q;return}if(X.candidate=null,!X.pose&&Ee?.objects&&Ee.ready&&Ee.map===Q.map&&!Q.objects&&(Q.objects=Ee.objects),X.pose=Q,h==="vr"&&v==="vr"&&Q.ready)if(Y===1/0||Ee?.arrival<Y||V.id<x)h="player",m=To[x%To.length],U("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(j.received++,j.bytesReceived+=B.value.length,t(Q),ce(),!(!D||!Q.ready||Q.map!==T)){z-X.shotWindow>=1e3&&(X.shotWindow=z,X.shotCount=0);for(let{seq:Te,position:I,quaternion:_}of Q.shots??[])Te<=X.lastShot||(X.lastShot=Te,!(X.shotCount>=14||(I.x-Q.x)**2+(I.y-Q.y)**2+(I.z-Q.z)**2>7**2)&&(X.shotCount++,r({position:I,quaternion:_},Q)));if(!(h!=="vr"||v!=="player"||V.actionTarget!==x))for(let{seq:Te,action:I}of V.actions)Te<=X.lastAction||(X.lastAction=Te,i(I,Q))}}function xe(){let v;try{v=new s(cA)}catch{return!1}return f=v,M=a(),g=-1/0,Y=1/0,U("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),v.onopen=()=>{f===v&&(w=a(),v.send(JSON.stringify({method:"handshake",project_id:uA+p,user:"player"+x})+`
`),U("open",ie()))},v.onmessage=F=>{if(f!==v||typeof F.data!="string"||F.data.length>105e4)return;let B=a();re(B);for(let z of F.data.split(`
`)){if(!z.trim())continue;let V;try{V=JSON.parse(z)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",z.slice(0,200));continue}let X=hA.get(V?.name);V?.method!=="set"||!X||se(X,V.name,V,B)}},v.onerror=()=>{f===v&&U("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},v.onclose=F=>{if(f!==v)return;let B=F.code;if(Ce(),be(!1),A=[],H=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(B)){Re(B);return}h=null,p="";let z={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[B];U("error","TurboWarp d\xE9connect\xE9 ("+B+")"+(z?" \xB7 "+z:F.reason?" \xB7 "+F.reason.slice(0,100):""))},!0}function Pe(v,F){let B=hl(v);return!/^[A-Z0-9]{5,12}$/.test(B)||!["vr","pc","player"].includes(F)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===F&&p===B?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(be(!0),x=Math.floor(1e6+l()*8999999),h=F,p=B,m=vh[h]??To[x%To.length],O=350,h==="vr"&&ul.includes(p)&&(m=x%2===0?vh.vr:fx,O=750+x%150),S=k=0,H=[],j={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},E=0,C=N=1/0,xe()?!0:(h=null,p="",U("error","WebSocket indisponible."),!1))}function ye(v,F){let B=v.hand||v.type==="world"?5:4;if(h!=="player"||R!=="open"||!y?.ready||y.protocol<B||y.map!==F||!gp(v)||S>=99999999)return!1;let z=a();return A=A.filter(V=>V.expires>=z&&V.target===y.id&&V.map===F),A.length>=8?!1:(A.push({action:{...v},seq:++S,expires:z+1800,target:y.id,map:F}),!0)}function Z(v,F,B){if(!h||h==="pc"||R!=="open"||k>=99999999)return;let z=Co(v),V=Ro(F);if(!z||!V)return;let X=a();H=H.filter(ne=>ne.expires>=X&&ne.map===B).slice(-(mx-1)),H.push({record:Vt(++k,8)+z+V,expires:X+pA,map:B})}function fe(v){let F=a();D=!!v&&v.ready!==!1,T=v?.map??-1,re(F),h&&!f&&F>=C&&(C=1/0,xe()||Re(1006)),f&&f.readyState===0&&F-M>1e4&&(Ce(),Re(1006)),j.bufferedBytes=f?.bufferedAmount??0;let B=h==="pc"?fA:dA;if(!v||!h||f?.readyState!==1||j.bufferedBytes>4096||F-w<(h==="vr"?O:350)||F-g<B)return!1;if(h==="player"){let Ee=ee().filter(I=>I.role==="player"),Te=Ee.find(I=>I.channel===m);if(Te?N=Math.min(F,N):N=1/0,Te&&(Te.id<x||F-N>=800)){let I=To.find(_=>!Ee.some(L=>L.channel===_));if(!I)return R!=="capacity"&&U("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;m=I,N=1/0}}(E||R==="capacity")&&(E=0,U("open",ie()));let z=Math.round(d+F-u),V=mA({...v,time:z,id:x});if(!V)return!1;A=A.filter(Ee=>Ee.expires>=F&&Ee.target===y?.id&&Ee.map===v.map),H=H.filter(Ee=>Ee.expires>=F&&Ee.map===v.map);let X=j.bufferedBytes===0?v.objectFeed?.(F):null,ne=typeof v.avatar=="function"?v.avatar():v.avatar,Q=wA(V,ne,X,{version:5,ready:v.ready!==!1,actions:A,actionTarget:A[0]?.target??0,shots:H,score:v.score});return g=F,h==="vr"&&(Y=Math.min(Y,F)),f.send(JSON.stringify({method:"set",name:m,value:Q})+`
`),j.sent++,j.bytesSent+=Q.length,!0}return{join:Pe,leave:De,tick:fe,sendAction:ye,queueShot:Z,get stats(){return{...j}},get role(){return h},get code(){return p},get state(){return R},get remote(){return y},get peers(){return ee()}}}var xA=15,yA=12,xx=44,yh=15,pp=35,Co=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>Vt(e*100+2e4,5)).join(""):null;function Ao(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var Ro=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>Vt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function Eo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function vA(n){let e=Co(n.mesh.position),t=Ro(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>mp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return Vt(i,5)+Vt(r,2)+s+o+Vt(a,8)+e+t}function _A(n){return Vt(n,5)+"99"+"0".repeat(xx-7)}function MA(n){if(!n)return null;let e=Ro(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Co(l.position),u=l&&Ro(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(xA+yA)}),r=Vt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=Vt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+Vt(n.color??0,2)+a}function gp(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=mp?"10"+Vt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+Vt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+Vt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+Vt(i,5):null}function bA(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),gp(s)===n?s:null}function SA(n){let e=Co(n?.position),t=Ro(n?.quaternion),i=Co(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function wA(n,e,t,i=null){let r=MA(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>Vt(p,8)+gp(x)).join(""),a=i.version===5,l=a&&Co(e?.gun?.position),c=a&&Ro(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+Vt(d.length,1)+d.map(p=>p.record).join("")+Vt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+SA(r?e.tool:null)+Vt(i.actionTarget??0,7)+Vt(o.length/yh,1)+o+f;return h.length+1+s.length>px&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function hx(n,e,t){let i=Eo(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:Ao(n,o+1),quaternion:Eo(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function TA(n,e){if(typeof n!="string"||n.length>px||!/^[0-9]+$/.test(n))return null;let t=gA(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:xx,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=hx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Ao(n,a+2),f=Eo(n,a+17),h=Ao(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*yh+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=yh){let u=Number(n.slice(a,a+8)),d=bA(n.slice(a+8,a+yh));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=Ao(n,a+1),h=Eo(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>mx||n.length<a+u*pp+7)return null;t.shots=[];let d=0;for(let f=a+u*pp;a<f;a+=pp){let h=Number(n.slice(a,a+8)),p=Ao(n,a+8),x=Eo(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=hx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Ao(n,c+10),m=Eo(n,c+25);if(d>mp||f>7||h>4||p>16777215||!x||!m)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:m})}t.objects={full:o==="2",records:a}}return t}var AA=.45,dx=2.5;function yx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=AA&&!d.frozen&&(d.velocity.lengthSq()>=dx**2||d.angular.lengthSq()*d.radius**2>=dx**2);if(!l&&!p&&!h?.fast)continue;let x=vA(d);if(!x)continue;c?.add(f);let m=x!==h?.record;m&&e.set(f,{record:x,until:s+420}),(a||!l&&m)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:_A(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var vx=zt.DEFAULT_UP,EA=15,_x=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function CA(){let n=new Tt,e=new Ve(new Ft(.155,1),new gt({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new Ve(new hi(.23,.018,5,20),new _t({color:"#84e6ff",transparent:!0,opacity:.85,blending:$n,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new Ve(new qi(.11,.28,9,1,!0),new _t({color:"#55c7ff",transparent:!0,opacity:.45,side:an,blending:$n,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function RA(){let n=new Tt,e=new Tt,t=hh(0),i=t.createHead(),r=["left","right"].map(g=>({skin:ph(g,t.hand,{openWrist:!0}),position:new b,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=mh(t.fur,r.map(g=>({geometry:g.skin.mesh.geometry,wristIndices:g.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=gh(e),l=null,c=new b,u=[null,null],d=new b,f=new qe,h=new qe,p=new qe,x={mode:0,position:new b,quaternion:new qe,end:new b};function m(g,y,w){let M=g.avatar,C=1-Math.exp(-w*32);if(!M){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(M.head).premultiply(f),i.quaternion.slerp(p,C),d.set(0,0,-1).applyQuaternion(i.quaternion);let E=Ne.smoothstep(-d.y,.28,.94),R=Math.max(.38,M.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*R,.24*E),o.rotation.x=-.5*E,h.copy(o.quaternion).invert(),t.setColor(M.color??0);for(let S=0;S<r.length;S++){let A=r[S],N=M.hands[S];if(u[S]=N?A:null,!N){A.tracked=!1;continue}c.copy(N.position).sub(g).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(N.quaternion).premultiply(f).premultiply(h),A.tracked?(A.position.lerp(c,C),A.quaternion.slerp(p,C)):(A.position.copy(c),A.quaternion.copy(p)),A.tracked=!0;for(let O=0;O<3;O++)A.pressure[O]+=((N.pressure?.[O]??0)-A.pressure[O])*C;A.skin.pose(A.pressure,!1)}if(s.pose(u,M.armSpan*.5,.97,R,!0),M.gun){l||(l=fp(),l.visible=!1,e.add(l));let S=l.visible?C:1;l.position.lerp(M.gun.position,S),l.quaternion.slerp(p.copy(M.gun.quaternion),S),l.visible=!0}else l&&(l.visible=!1);let D=M.tool;if(!D){a.hide(),x.mode=0;return}let T=x.mode?C:1;x.mode=D.mode,x.position.lerp(D.position,T),x.quaternion.slerp(p.copy(D.quaternion),T),x.end.lerp(D.end,T),a.update(x)}return{model:n,toolRoot:e,draw:m,dispose(){for(let g of r)g.skin.mesh.geometry.dispose();t.hand.dispose()}}}function Mx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function bx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=yx(),d=0,f=-1,h=-1,p="",x=0;function m(){let v=e();return v!==p&&(p=v,x=hs(v)),x}function g(v){return!!v?.ready&&v.map===m()}function y(v){let F=c.get(v);F&&(n.remove(F.mesh),F.mesh.material?.dispose(),c.delete(v))}function w(){for(let v of c.keys())y(v);d=0,f=-1,h!==-1&&(h=-1,r?.(null))}function M(v,F){if(v.color===F.color&&v.style===F.style)return;v.color=F.color,v.style=F.style;let B=v.mesh.material;if(B?.color){if(B.color.setHex(F.color),F.style===0){Object.assign(B,v.baseMaterial),v.baseEmissive&&B.emissive.copy(v.baseEmissive),B.needsUpdate=!0;return}B.roughness=[.44,.94,.12,.16,.4][F.style],B.metalness=[.1,0,.87,.12,0][F.style],B.opacity=F.style===3?.4:1,B.transparent=F.style===3,B.depthWrite=!B.transparent,B.emissive?.copy(B.color),B.emissiveIntensity=F.style===4?1.65:0,B.needsUpdate=!0}}function C(v){if(!g(v)){w();return}if((d!==v.id||f!==v.map)&&(w(),d=v.id,f=v.map),v.avatar&&v.avatar.light!==h&&(h=v.avatar.light,r?.(h)),!v.objects)return;let F=v.objects.full?new Set:null;for(let B of v.objects.records){if(B.removed){y(B.id);continue}F?.add(B.id);let z=c.get(B.id);if(z&&z.type!==B.type&&(y(B.id),z=null),!z){let X=i?.(B.type);if(!X)continue;let{roughness:ne,metalness:Q,transparent:Ee,depthWrite:Te,opacity:I,emissiveIntensity:_}=X.material??{},L={roughness:ne,metalness:Q,transparent:Ee,depthWrite:Te,opacity:I,emissiveIntensity:_};X.userData.netId=B.id,X.userData.netType=B.type,z={mesh:X,baseMaterial:L,baseEmissive:X.material?.emissive?.clone(),type:B.type,target:new b().copy(B.position),quaternion:new qe().copy(B.rotation),velocity:new b,time:v.time},X.position.copy(z.target),X.quaternion.copy(z.quaternion),c.set(B.id,z),n.add(X)}let V=(v.time-z.time)/1e3;V>.06&&V<.65&&!(B.flags&6)?z.velocity.copy(B.position).sub(z.target).multiplyScalar(1/V).clampLength(0,23):z.velocity.set(0,0,0),z.target.copy(B.position),z.quaternion.copy(B.rotation),z.time=v.time,z.flags=B.flags,z.frequent=V>.06&&V<.16,z.received=v.arrival,z.mesh.userData.netFlags=B.flags,z.mesh.userData.held=!!(B.flags&1),M(z,B)}if(F)for(let B of c.keys())F.has(B)||y(B)}let E=new b;function R(v,F,B){let z=1-Math.exp(-v*22),V=1-Math.exp(-v*32);for(let X of c.values()){if(X.mesh.visible=F,!F)continue;let ne=X.frequent?V:z,Q=X.flags&6?0:Math.min(X.frequent?.1:.12,Math.max(0,(B-X.received)/1e3));E.copy(X.target).addScaledVector(X.velocity,Q),X.mesh.position.distanceToSquared(E)>16||X.flags&6&&X.mesh.position.distanceToSquared(X.target)<1e-4?X.mesh.position.copy(E):X.mesh.position.lerp(E,ne),X.mesh.quaternion.slerp(X.quaternion,ne),X.flags&6&&X.mesh.quaternion.angleTo(X.quaternion)<.008&&X.mesh.quaternion.copy(X.quaternion),X.mesh.updateMatrixWorld(!0)}}let D=v=>document.querySelector(v),T=D("#cloud-status"),S=D("#cloud-room"),A=D("#cloud-camera"),N=-1/0,O=0,Y="Hors ligne",k=0;function H(v){O=v,A.textContent="Cam\xE9ra : "+_x[v]}function j(){H((O+1)%_x.length)}A.onclick=j;let U=gx({onStatus(v){Y=v,T.textContent=v,a?.()},onPose(v){U.role!=="vr"&&C(v)},onPeer(v,F){if(!v){let V=l.get(F.id);V?.art&&(Mx(V.art.model),Mx(V.art.toolRoot),V.art.dispose?.()),l.delete(F.id);return}let B=l.get(v.id);B||(B={art:null,motion:new b,handMotion:[new b,new b]},l.set(v.id,B));let z=B.pose;B.motion.set(0,0,0);for(let V of B.handMotion)V.set(0,0,0);if(z&&z.map===v.map){let V=(v.time-z.time)/1e3;if(V>=.055&&V<=.65){B.motion.set(v.x-z.x,v.y-z.y,v.z-z.z).multiplyScalar(1/V),B.motion.lengthSq()>=18**2&&B.motion.set(0,0,0);for(let X=0;X<2;X++){let ne=z.avatar?.hands[X],Q=v.avatar?.hands[X];ne&&Q&&B.handMotion[X].copy(Q.position).sub(ne.position).multiplyScalar(1/V).clampLength(0,23)}}}B.pose=v},onAction:s,onShot:o}),ie=hl(new URLSearchParams(location.search).get("room")??"");function ee(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),v=>(v%36).toString(36)).join("").toUpperCase()}S.value=/^[A-Z0-9]{5,12}$/.test(ie)?ie:ee();function ce(v,F=S.value){let B=hl(F);if(!(U.role===v&&U.code===B)){if(!/^[A-Z0-9]{5,12}$/.test(B)){T.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}U.role&&U.leave(),U.join(B,v)&&(S.value=B,v!=="vr"&&D("#game").focus(),u.reset(),H(0),t(hs(B)),p="")}}D("#cloud-vr").onclick=()=>ce("vr"),D("#cloud-new").onclick=()=>ce("vr",ee());for(let[v,F]of ul.entries())D(`#public-join-${v}`).onclick=()=>ce("player",F),D(`#public-host-${v}`).onclick=()=>ce("vr",F);D("#cloud-pc").onclick=()=>ce("pc");let be=D("#cloud-player");be&&(be.onclick=()=>ce("player")),D("#cloud-leave").onclick=()=>{k=0,U.leave()},D("#cloud-copy").onclick=async()=>{let v=new URL(location.href);v.searchParams.set("room",U.code||hl(S.value));try{await navigator.clipboard.writeText(v.href),T.textContent="Lien copi\xE9."}catch{T.textContent=v.href}k=performance.now()+2500},addEventListener("pagehide",()=>U.leave());let Ce=new b,De=new b,Re=new b,re=new b,se=0;function xe({dt:v,position:F,yaw:B,pitch:z,camera:V,rig:X,keys:ne,flat:Q}){let Ee=Q?.movement,Te=Number(ne.has("KeyD"))-Number(ne.has("KeyQ")||ne.has("KeyA"))+(Ee?.x??0),I=Number(ne.has("KeyS"))-Number(ne.has("KeyZ")||ne.has("KeyW"))+(Ee?.z??0);Q?.consumeJump?.()&&(se=.26),se=Math.max(0,se-v);let _=Number(ne.has("Space")||se>0)-Number(ne.has("ShiftLeft")||ne.has("ShiftRight")),L=ne.has("ControlLeft")||ne.has("ControlRight")?11:3.2;re.set(Te,_,I).clampLength(0,1).applyAxisAngle(vx,B),X.position.addScaledVector(re,v*L).clampScalar(-175,175),X.rotation.set(0,B,0),V.position.set(0,0,0),V.rotation.set(z,0,0,"YXZ"),X.updateMatrixWorld(!0),F.copy(X.position)}function Pe(v,F,B,z){for(let V of l.values()){let X=V.pose;if(!(v&&g(X))){V.art&&(V.art.model.visible=!1,V.art.toolRoot&&(V.art.toolRoot.visible=!1));continue}V.art||(V.art=X.role==="pc"?CA():RA(),n.add(V.art.model),V.art.model.visible=!1,V.art.toolRoot&&n.add(V.art.toolRoot));let{model:Q,toolRoot:Ee}=V.art,Te=Math.min(.12,Math.max(0,(z-X.arrival)/1e3+.025));Ce.copy(X).addScaledVector(V.motion,Te),!Q.visible||Q.position.distanceToSquared(Ce)>64?Q.position.copy(Ce):Q.position.lerp(Ce,1-Math.exp(-B*34)),Q.rotation.y=X.yaw,Q.visible=!0,Ee&&(Ee.visible=!0),V.art.draw(X,F,B)}}function ye(v,F){if(F<k)return;let B=U.remote,z=Y;if(U.state==="open"){let V="Salon "+U.code+" \xB7 ",X=U.peers.filter(ne=>ne.ready);if(!v)z=V+"quitte la session VR pour utiliser le mode spectateur";else if(U.role!=="vr"&&B&&B.map!==m())z=V+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(U.role!=="vr"&&B&&!B.ready)z=V+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(U.role==="player"&&B&&B.protocol<5)z=V+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(U.role!=="vr"&&g(B))z=V+"h\xF4te connect\xE9";else if(U.role==="vr"){let ne=X.filter(g),Q=ne.filter(Te=>Te.role==="player").length,Ee=ne.some(Te=>Te.role==="pc");z=V+"tu h\xE9berges \xB7 "+(Q+1)+" joueur"+(Q?"s":""),Ee&&(z+=" \xB7 spectateur connect\xE9"),!Q&&X.some(Te=>!g(Te))&&(z+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}T.textContent!==z&&(T.textContent=z,a?.())}function Z(v){let{inVR:F,time:B,dt:z,position:V,yaw:X,camera:ne,rig:Q,keys:Ee,avatar:Te,bodies:I}=v;if(!U.role){w();return}let _=U.role!=="pc"||!F,L=performance.now(),W=m(),te=U.role!=="vr"?U.remote:null,J=_&&g(te);if(!J&&f!==-1&&w(),R(z,J,L),Pe(_,B,z,L),U.role==="pc"&&!F){(v.actions??Ee).delete("KeyC")&&j();let he=O===3&&J?[...c.values()].find(pe=>pe.type===EA)?.mesh:null,ue=J?l.get(te.id)?.art?.model:null;he?(Re.set(0,0,-.23).applyQuaternion(he.quaternion),Q.position.copy(he.position).add(Re),Q.rotation.set(0,0,0),ne.position.set(0,0,0),ne.quaternion.copy(he.quaternion),Q.updateMatrixWorld(!0),V.copy(Q.position)):ue&&(O===1||O===2)?(Re.set(0,.72,O===1?-2.7:2.7).applyAxisAngle(vx,ue.rotation.y),De.copy(ue.position).add(Re),Q.position.lerp(De,1-Math.exp(-z*11)),ne.position.set(0,0,0),Q.updateMatrixWorld(!0),ne.lookAt(ue.position),ne.updateWorldMatrix(!0,!1),V.copy(Q.position)):xe(v)}U.tick({x:V.x,y:V.y,z:V.z,yaw:X,map:W,ready:_,avatar:_&&U.role!=="pc"?Te:null,objectFeed:_&&U.role==="vr"&&I?he=>u.capture(he,I):null}),L-N>=150&&(N=L,ye(_,L))}function fe(v){let F=l.get(v)?.pose;return g(F)?F:null}return{update:Z,getPeer:fe,connect:ce,leave:()=>U.leave(),get caption(){return T.textContent},handMotion(v,F){return l.get(v)?.handMotion[F]},sendAction(v){return U.sendAction(v,m())},sendShot(v,F){U.queueShot(v,F,m())},get stats(){return U.stats},get role(){return U.role},get connected(){return g(U.remote)},get remoteSpectator(){return U.peers.find(v=>v.role==="pc"&&g(v))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(v){for(let F of c.values())F.mesh.visible&&v(F.mesh)}}}function _h(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Qe,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=Sx(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=Sx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Sx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new ht(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var bh=0,PA=1,IA=new b,wx=new Qa,xp=new Cn,Tx=new b,Mh=new Rn,Sh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new wh,this.unassigned=new wh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new yp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new b;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,IA)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===bh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new b,t=new b,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,wx.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){wx.closestPointToPoint(p.point,!0,Tx);let x=Tx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,xp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(xp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(xp.distanceToPoint(u.point)<0){d.push(fi.create(a,l,c),fi.create(u,l,a),fi.create(u,c,l),fi.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(fi.create(a,c,l),fi.create(u,a,l),fi.create(u,l,c),fi.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let m=0;m<4;m++){let g=this.faces[m].distanceToPoint(p.point);g>s&&(s=g,x=this.faces[m])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===bh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=PA;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===bh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=fi.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},fi=class n{constructor(){this.normal=new b,this.midpoint=new b,this.area=0,this.constant=0,this.outside=null,this.mark=bh,this.edge=null}static create(e,t,i){let r=new n,s=new dl(e,r),o=new dl(t,r),a=new dl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Mh.set(e.point,t.point,i.point),Mh.getNormal(this.normal),Mh.getMidpoint(this.midpoint),this.area=Mh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},dl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},yp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},wh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var Ki=class extends Qe{constructor(e=[]){super();let t=[],i=[],s=new Sh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var Ax=48,Ex=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),DA=(n,e,t)=>Math.max(e,Math.min(t,n)),LA=()=>structuredClone(Ex.shield),fl=(n,e,t,i)=>Number.isFinite(n)?DA(n,t,i):e;function Ah(n){let e=n?.mode==="lathe"?Ex.bottle:LA(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Ax?n.points.map(o=>[fl(o?.[0],0,-1.5,1.5),fl(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:fl(n?.depth,e.depth,.025,1.5),bevel:fl(n?.bevel,e.bevel,0,.15),segments:Math.round(fl(n?.segments,32,8,64))}}function Cx(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Th(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function UA(n,e,t,i){let r=Th(n,e,t),s=Th(n,e,i),o=Th(t,i,n),a=Th(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function FA(n){let e=Ah(n),t=e.mode==="lathe"?e.points:Cx(e);if(t.length<3||t.length>Ax*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&UA(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function Rx(n){let e=Ah(n),t=FA(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([s,o])=>new ge(Math.max(0,s),o));i=new Wa(r,e.segments)}else{let r=Cx(e),s=new ci;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new Xi(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new ht(new Float32Array(r*2),2))}return i}var Un=Math.PI*2,Eh=.84,Qi=128;function Er(n){let e=new Uint8Array(Qi*Qi*4);for(let i=0;i<Qi;i++)for(let r=0;r<Qi;r++){let s=(r+.5)/Qi,o=(i+.5)/Qi,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Eh,1),Math.min(o/Eh,1),r,i),l=(r+i*Qi)*4;for(let c=0;c<3;c++)e[l+c]=Ne.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new yi(e,Qi,Qi);return t.colorSpace=pt,t.generateMipmaps=!0,t.minFilter=Dn,t.magFilter=cn,t.needsUpdate=!0,t}function ds(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function it(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new Le(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Eh,s.getY(l)*Eh):s.setXY(l,.95,.95);return i.setAttribute("color",new ht(a,3)),i}function Cr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:_h(r),material:new gt({vertexColors:!0,map:s,roughness:o,metalness:a})}}function Px(n,e,t){let i=n/2,r=e/2,s=new ci;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Tr(n,e,t,i,r){return new Xi(Px(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function Ar(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Un*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let m=u*(e+1)+h,g=m+e+1;d>0&&s.push(m,m+1,g),n[u+1][0]>0&&s.push(m+1,g+1,g)}}let o=new Qe;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new b,c=new b;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function pl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new b(0,r,0));continue}for(let s=0;s<e;s++){let o=Un*s/e;t.push(new b(i*Math.sin(o),r,i*Math.cos(o)))}}return new Ki(t)}function NA(){let t=new qa(Px(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ne.clamp(i.getX(l)/.098+.5,0,1),u=Ne.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Er((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Un),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[it(Tr(.106,.207,.013,.011,.0019),8425890),it(Tr(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),it(Tr(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),it(t,16777215,!0),it(Tr(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),it(new et(.0036,.024,.004).translate(.055,.029,0),11714250),it(new et(.0036,.015,.004).translate(-.055,.032,0),11385285),it(new et(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(it(new Yt(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(it(new on(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(it(new on(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new Ki([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new b(c,u,l))));return Cr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function BA(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=Ar(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Er((a,l,c,u)=>{let d=Un*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(y=>Math.exp(-(((f-y+.035*Math.cos(d))/.009)**2)))),x=h**3*p,m=ds(c,u)-.5,g=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*m;return[150+29*h+58*x+g,76+24*h+70*x+g,24+11*h+52*x+g*.8]}),o=pl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Cr("bread","Baguette de pain",.27,o,[it(r,16777215,!0)],s,.9)}function OA(){let n=Er((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*ds(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=Ar([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=Ar([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[it(e,16777215,!0),it(t,11056059),it(new Yt(.067,.067,.124,10).rotateX(Math.PI/2),9346214),it(new Yt(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Un*s/5;i.push(it(new et(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=pl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Cr("wheel","Roue",1.8,r,i,n,.64,.23)}function zA(){let n=Er((s,o,a,l)=>{let c=ds(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Un*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=Ar([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new hi(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Un*l/5;return new b(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new b(.166,-.027,.01),new b(.166,.053,-.01));let r=new Ki(i);return Cr("cup","Tasse",.39,r,[it(e,16777215,!0),it(t,15785922)],n,.37)}function VA(){let n=Ar([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Er((r,s,o,a)=>{let l=9*ds(o,a),c=11*Math.cos(r*Un*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Un*48+r*Un*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Un*4);return[u,u*1.13,u*1.24]}),t=[it(n,16777215,!0),it(new ho(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),it(new on(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),it(new on(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),it(new Yt(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),it(new on(.008,12).translate(0,.035,.0336),15633202)],i=pl([[.033,-.143],[.054,.133]],6);return Cr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function kA(){let n=Ar([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Er((s,o,a,l)=>{let c=10*ds(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Un*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Un*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[it(n,16777215,!0),it(new on(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),it(new ho(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),it(new on(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=pl([[.069,-.112],[.069,.109]],6);return Cr("soda","Canette de soda",.35,r,i,t,.42,.27)}function GA(){let n=Ar([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Er((r,s,o,a)=>{let l=15*ds(o,a),c=8*Math.cos(r*Un*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[it(n,16777215,!0),it(Tr(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),it(new on(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=pl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Cr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function HA(){let n=Er((r,s,o,a)=>{let l=8*ds(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=Ar([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[it(Tr(.138,.22,.061,.016,.004),14788675),it(Tr(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),it(new en(.106,.174).translate(0,-.004,.0395),16777215,!0),it(e,2502456),it(new Yt(.014,.017,.016,10).translate(.04,.117,.001),2503482),it(new et(.008,.047,.027).translate(-.072,.014,-.002),3028798),it(new et(.006,.02,.019).translate(-.072,-.043,-.002),3950414),it(new on(.004,8).translate(.04,.066,.0397),15817792),it(new on(.004,8).translate(-.04,.066,.0397),7903100),it(Tr(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new b(r,l,o),new b(s,l,o),new b(s,l,a),new b(r,l,a)]);return Cr("radio","Talkie-walkie",.43,new Ki(i),t,n,.61,.08)}function Ix(){return[NA(),BA(),OA(),zA(),VA(),kA(),GA(),HA()]}var Fn=new qe,kt=new b,Fh=new b,WA=new at,Dx=new WeakMap;function zh(n){if(n.heightfield||n.objectBody)return null;let e=Dx.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=WA.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return Dx.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function qx(n,e,t){let i=zh(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function Nh(n,e,t,i){if(t.heightfield)return nE(n,e,t,i);if(t.objectBody)return ty(n,e,t.objectBody,i);if(!qx(n,e,t))return 0;Fn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Fn);let r=t.half;Fh.copy(kt).clamp(t.min,r),i.subVectors(kt,Fh);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(kt.x),a=r.y-Math.abs(kt.y),l=r.z-Math.abs(kt.z);return o<=a&&o<=l?i.set(Math.sign(kt.x)||1,0,0):a<=l?i.set(0,Math.sign(kt.y)||1,0):i.set(0,0,Math.sign(kt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var rt=new b,er=new b;function Ip(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=Nh(n,e,u,rt);if(!d||(n.addScaledVector(rt,d+1e-4),rt.y>=.62&&(l=!0,a&&rt.y>a.normal.y&&(a.normal.copy(rt),a.surface=u)),!i))continue;let f=i.dot(rt);f<0&&i.addScaledVector(rt,-f*(Math.abs(f)<.55?1:1+r)),er.copy(i).addScaledVector(rt,-i.dot(rt)),i.addScaledVector(er,-Math.min(.95,s*u.friction*o))}return l}var vp=new b,Lo=[];function Ml(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Lo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=zh(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Lo.push(h)}for(let h=1;h<=o;h++){vp.copy(n).lerp(e,h/o);for(let p of Lo){let x=Nh(vp,t,p,rt);if(x)return r.copy(vp).addScaledVector(rt,x+.001),s.copy(rt),p}}return null}var xl=new b,_l=new b,Uo=new b,Xx=new Rn,yl=new b;function wi(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new b().fromBufferAttribute(t,p),m=x.toArray().map(g=>g.toFixed(5)).join(",");s.has(m)||(s.add(m),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=M=>new b().fromBufferAttribute(t,n.index?n.index.getX(M):M),m=x(p),g=x(p+1),y=x(p+2),w=new Rn(m,g,y).getNormal(new b);w.lengthSq()>.1&&r.push({a:m,b:g,c:y,n:w})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new $t().setFromPoints(i).getSize(new b),u=Math.max(1e-4,e**2*.4),d=e?new b().setScalar(1/u):new b(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let m of p)m.lengthSq()>.5&&!x.some(g=>Math.abs(g.dot(m))>.9999)&&x.push(m);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new b().subVectors(p.b,p.a).normalize(),new b().subVectors(p.c,p.b).normalize(),new b().subVectors(p.a,p.c).normalize()]))}}function Vh(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(Fn.copy(t.quaternion).invert(),kt.copy(n).sub(t.position).applyQuaternion(Fn),i.faces.every(s=>s.n.dot(xl.subVectors(kt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)Xx.set(s,o,a).closestPointToPoint(kt,yl),r=Math.min(r,kt.distanceToSquared(yl));return Math.sqrt(r)}function qA(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=Nh(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(Fn.copy(e.quaternion).invert(),kt.copy(r.position).sub(e.position).applyQuaternion(Fn),Fh.copy(kt).clamp(e.min,e.half),kt.distanceToSquared(Fh)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){xl.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=Nh(xl,.007,e,Uo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(xl),t.copy(Uo)):Math.abs(c-o)<.003&&Uo.dot(t)>.98&&(i.lerp(xl,1/++a),o=Math.max(o,c)))}return o}var Ch=new b,XA=new b,Rh=new b,YA=new b,Lx=new qe,Ux=new qe,Fx=new b,_p={min:0,max:0},Mp={min:0,max:0};function Nx(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}Fx.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(Fx);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function Ti(n){return wi(new et(n.x*2,n.y*2,n.z*2))}function kh(n,e,t){let i=YA.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;Lx.copy(n.mesh.quaternion).invert(),Ux.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);Nx(n.shape,o,Lx,_p),Nx(e.shape,o,Ux,Mp);let l=Mp.max-_p.min-a,c=_p.max-Mp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(Ch.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(Ch.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Rh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(Ch.copy(a).applyQuaternion(e.mesh.quaternion).cross(Rh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(XA.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;Fn.copy(a.mesh.quaternion).invert(),kt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(Fn);for(let{a:c,b:u,c:d}of a.shape.faces){Xx.set(c,u,d).closestPointToPoint(kt,yl);let f=kt.distanceToSquared(yl);f<l&&(l=f,Rh.copy(yl))}if(!s(Ch.subVectors(kt,Rh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var ZA=new b;function jA(n,e,t){Fn.copy(e.quaternion).invert(),kt.copy(n.mesh.position).sub(e.position).applyQuaternion(Fn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(kt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=kt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Cp(n,ZA.copy(t).negate())-r,a=s+Cp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function Dp(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return qA(n,e,t,i??_l);let r=jA(n,e,t)??kh(n,e,t);return r>0&&i&&jx(n,e,t,i),r}var Ep=wi(new ui(1,0).scale(...fh)),Ph={mesh:{position:new b,quaternion:new qe},shape:Ep,radius:Ep.radius,precise:!0};function Yx(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Ep.radius;Lo.length=0;for(let c of i){let u=zh(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Lo.push(c)}Ph.mesh.quaternion.copy(t);let l=Ph.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Lo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?kh(Ph,d,rt):Dp(Ph,u,rt);if(f>0)return r.copy(l).addScaledVector(rt,f+5e-4),s.copy(rt),u}}return null}function bl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!qx(n.mesh.position,n.radius,r))continue;let s=Dp(n,r,rt);s<=1e-6||(n.mesh.position.addScaledVector(rt,s),i=!0)}if(!i)break}}var bp=new b,ml=new b,Ih=new b,Sp=new qe,Rr=new qe,Bx=new qe;function Ox(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function Zx(n,e,t,i,r){let{mesh:s,shape:o}=n;bp.copy(s.position),Sp.copy(s.quaternion),ml.subVectors(e,bp);let a=Ox(Sp,t,Rr),l=ml.length()+a*o.radius,c=Qx(o),u=Math.max(1,Math.min(Kx,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Ih.set(Rr.x,Rr.y,Rr.z).normalize(),Bx.setFromAxisAngle(Ih,f),ml.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(ml),s.quaternion.premultiply(Bx).normalize(),bl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(ml.subVectors(s.position,bp).divideScalar(h).clampLength(0,23),.52);let p=Ox(Sp,s.quaternion,Rr);Ih.set(Rr.x,Rr.y,Rr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Ih,.52)}function Cp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;Fn.copy(n.mesh.quaternion).invert(),Uo.copy(e).applyQuaternion(Fn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Uo));return t}var Do=new b,Bh=new b,JA=new b,wp=new b,Po={},Io={};function zx(n,e,t,i){let{mesh:r,shape:s}=n,o=Cp(n,JA.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(Do),i.minV=i.maxV=r.position.dot(Bh);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Uo)<o-.0015)continue;wp.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=wp.dot(Do),c=wp.dot(Bh);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function jx(n,e,t,i){Math.abs(t.y)<.8?Do.set(-t.z,0,t.x).normalize():Do.set(t.y,-t.x,0).normalize(),Bh.crossVectors(t,Do),zx(n,t,-1,Po),zx(e,t,1,Io);let r=(Math.max(Po.minU,Io.minU)+Math.min(Po.maxU,Io.maxU))*.5,s=(Math.max(Po.minV,Io.minV)+Math.min(Po.maxV,Io.maxV))*.5;i.copy(t).multiplyScalar((Po.plane+Io.plane)*.5).addScaledVector(Do,r).addScaledVector(Bh,s)}var Vx=new b;function Oh(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)Vx.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(Vx)}}function kx(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function Jx(n){return!n.owner&&!n.frozen}var fs=new b,ps=new b,gl=new b,Gx=new b,Rp=new b,Pp=new b,$A=new b;function Dh(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function $x(n,e,t,i){let{mesh:r,shape:s}=n.body;return Fn.copy(r.quaternion).invert(),Rp.crossVectors(e,t),i.copy(Rp).applyQuaternion(Fn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function Lh(n,e,t){return n?.inverseMass?($x(n,e,t,Pp),n.inverseMass+Rp.dot(Pp)):0}function Uh(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector($x(n,e,t,Pp),i))}function Tp(n){return n.friction??n.spec?.friction??.78}function Hx(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Tp(s)*Tp(o)):Math.min(Tp(s),t.friction??.78);fs.subVectors(_l,s.mesh.position),o&&ps.subVectors(_l,o.mesh.position),Dh(n,fs,gl).sub(Dh(e,ps,Gx));let l=gl.dot(rt),c=!1;if(l<-1e-5){let d=l<-.8?Ne.clamp(r*(t?.bounce??1),0,.98):0,f=-l*(1+d)/(Lh(n,fs,rt)+Lh(e,ps,rt));Uh(n,fs,rt,f),Uh(e,ps,rt,-f),Dh(n,fs,gl).sub(Dh(e,ps,Gx)),er.copy(gl).addScaledVector(rt,-gl.dot(rt));let h=er.length();if(h>1e-5&&a>0){er.divideScalar(h);let p=Math.min(f*a,h/(Lh(n,fs,er)+Lh(e,ps,er)));Uh(n,fs,er,-p),Uh(e,ps,er,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(rt,u*n.inverseMass/d),Oh(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(rt,-u*e.inverseMass/d),Oh(e)),c=!0}return n.inverseMass&&rt.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,rt.y)),e?.inverseMass&&rt.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-rt.y)),c}function KA(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var Kx=96,QA=5;function Qx(n){return Math.max(.008,n.thickness*.35)}var vl={substeps:0,active:0,free:0,sleeping:0};function Wx(n,e,t,i){n.velocity.y-=t*e*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis($A.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function eE(n,e,t){let i=new $t().setFromCenterAndSize(n.mesh.position,new b),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*tE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function tE(n){return n.sweepGravity??1}function ey(n,e,t,i,r,s){if(Object.assign(vl,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:zh(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,eE(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=Jx(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),m=l.some(({box:w,bounds:M})=>kx(x,w,M)),g=c.some(w=>w!==h&&w.collidable!==!1&&x.intersectsBox(u.get(w)));if(p&&!m&&!g){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let w=Math.min(h.angular.length(),30),M=h.velocity.length()+w*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(M*t/Qx(h.shape)))}let y={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new $t,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};Oh(y),o.push(y)}for(let h of a)Wx(h,t,i,s);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(Kx,d):1,Object.assign(vl,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(Wx(x,f,i,s),Oh(p))}for(let p=0;p<QA;p++){let x=!1;for(let m of o)if(m.inverseMass)for(let{box:g,bounds:y}of l){if(!kx(m.bounds,g,y))continue;let w=Dp(m.body,g,rt,_l);w>0&&(x=Hx(m,null,g,w,r)||x)}for(let m of o)m.sweepStart=m.bounds.min.x,m.sweepEnd=m.bounds.max.x;o.sort((m,g)=>m.sweepStart-g.sweepStart);for(let m=0;m<o.length;m++){let g=o[m];for(let y=m+1;y<o.length;y++){let w=o[y];if(w.sweepStart>g.sweepEnd)break;if(!g.inverseMass&&!w.inverseMass||g.body.sleeping&&w.body.sleeping&&g.groundY>.9&&w.groundY>.9||!g.bounds.intersectsBox(w.bounds))continue;let M=kh(g.body,w.body,rt);M<=0||(jx(g.body,w.body,rt,_l),x=Hx(g,w,null,M,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&KA(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,m=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=m?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):m||(p.sleeping=!1),p.sleeping&&vl.sleeping++}}function nE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var Ap={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function ty(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(Ap.mesh.position=n,Ap.shape.sphereRadius=e,kh(Ap,t,i))}function ny(n,e,t,i,r){let s=ty(n,e,t,rt);if(s<=0)return!1;n.addScaledVector(rt,s+.001),r?.copy(rt);let o=i.dot(rt);return o<0&&(i.addScaledVector(rt,-o),Math.abs(rt.y)<.6&&Jx(t)&&t.velocity.addScaledVector(rt,-Math.min(2.8,-o*.24))),!0}var Gt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),iy=Gt(-24,24,-51,7),ry=34521,No={x:0,y:0,z:3},Pr={x:.05,y:1.16,z:5.9},Fo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Gt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Gt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Gt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Gt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Gt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Gt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Gt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Gt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Gt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Gt(9,23,-48,-37),sign:[16,-38.2]}},j3=[Gt(-9,-6,-51,7),Gt(6,9,-51,7),Gt(-24,24,-8,-5),Gt(-24,24,-27,-23),Gt(9,23,-37,-34)],sy=[{name:"Glace",bounds:Fo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Fo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Gt(-9,9,-51,7)},{name:"Sol ouest",bounds:Gt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Gt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Gt(-24,-23,-51,7)},{name:"Sol est",bounds:Gt(9,23,-51,-48)},{name:"Sol est",bounds:Gt(9,23,-37,7)},{name:"Bordure est",bounds:Gt(23,24,-51,7)}],Sl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Bo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],oy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),Gh={x:-19.4,y:.68,z:-3.25},ay=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),ly={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var iE=[0,1,2,3,4,5,7,8,9,10];function cy(n){oy.forEach(({x:e,z:t},i)=>n(iE[i],new b(e,.8,t)))}function Hh(){let n=[["Cube",new et(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Ft(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new Xa(.29),"#d8ae53",0,1],["Brique",new et(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new et(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Ft(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:wi(t,r),material:new gt({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:Ti(t.computeBoundingBox()??t.boundingBox.getSize(new b).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of Ix()){let r=wi(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var Lp=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],wl=null,rE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function ms(n){return typeof n=="string"&&rE.has(n.replace(/^custom-model-game-/,""))}function Wh(n){let e=n?.parts;return ms(n?.id)||ms(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>ms(t?.assetId))}function uy(){if(wl)return wl;let n=Hh(),e=Lp;return wl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),wl.set("chrome-sphere",{geometry:new Ft(.54,2),material:new gt({color:"#c8e6ed",metalness:1,roughness:.16})}),wl}function qh(n){return typeof n=="string"&&uy().has(n)}function Up(n){return uy().get(n)??null}var Np="gorilla-lab-models-v1",tr=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),sE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,oE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),dy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),aE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),lE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,cE=/^#[a-f\d]{6}$/i;function hy(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Ir(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Ne.clamp(n[r],t,i):e)}var Fp=new Set(["box","sphere","capsule","convex"]);function uE(n){if(n?.mode==="box")return{mode:"box",center:Ir(n.center,0,-6,6),size:Ir(n.size,.5,.025,12)};let e=Math.round(Ne.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:Fp.has(n.shape)?n.shape:"box",center:Ir(n.center,0,-6,6),size:Ir(n.size,.5,.025,12),rotation:Ir(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&Fp.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function gs(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>tr.models||JSON.stringify(n).length>tr.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set;return{version:1,models:n.models.filter(i=>!Wh(i)).map(i=>{if(typeof i?.id!="string"||!lE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>tr.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:hy(i.name,"Mod\xE8le sans nom"),kind:i.kind==="structure"?"structure":"prop",...qh(i.assetId)?{assetId:i.assetId}:{},inGame:i.inGame===!0,properties:Object.fromEntries(Object.entries(aE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:uE(i?.hitbox),parts:i.parts.filter(r=>!ms(r?.assetId)).map((r,s)=>({name:hy(r?.name,`Pi\xE8ce ${s+1}`),shape:r?.shape==="asset"&&qh(r?.assetId)?"asset":Object.hasOwn(oE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&qh(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Ah(r?.profile)}:{},position:Ir(r?.position,0,-3,3),rotation:Ir(r?.rotation,0,-360,360),scale:Ir(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&cE.test(r.color)?r.color:"#51bdd2",surface:Object.hasOwn(dy,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=tr.textureBytes&&sE.test(r.texture)?r.texture:null}))}}),avatarId:typeof n.avatarId=="string"&&e.has(n.avatarId)?n.avatarId:null}}function Bp(n){try{let e=(n??globalThis.localStorage)?.getItem(Np);if(e&&e.length<=tr.fileBytes)return gs(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function hE(n){switch(n){case"sphere":return new In(.5,20,12);case"cylinder":return new Yt(.5,.5,1,20);case"cone":return new qi(.5,1,20);case"torus":return new hi(.365,.135,8,24);case"capsule":return new vr(.28,.44,6,16);case"diamond":return new ui(.5);default:return new et(1,1,1)}}var fy=Object.keys(dy),Oo=64,Tl=4,py=2,Ai;function dE(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function my(){if(Ai)return Ai;let n=Oo*Tl,e=Oo*py,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/Oo)*Tl+Math.floor(r/Oo),o=dE(fy[s],r%Oo,i%Oo),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ai=new yi(t,n,e),Ai.colorSpace=pt,Ai.magFilter=cn,Ai.minFilter=Dn,Ai.generateMipmaps=!0,Ai.needsUpdate=!0,Ai}function gy(n){let e=n.shape==="asset"?Up(n.assetId):null,t=n.shape==="custom"?Rx(n.profile):e?.geometry?.clone()??hE(n.shape),i=t.index?t.toNonIndexed():t;i!==t&&t.dispose(),i.attributes.uv||i.setAttribute("uv",new Oe(new Float32Array(i.attributes.position.count*2),2));let r=n.rotation.map(Ne.degToRad);i.scale(...n.scale),i.rotateX(r[0]),i.rotateY(r[1]),i.rotateZ(r[2]),i.translate(...n.position);let s=new Le(n.color),o=i.attributes.position.count,a=new Float32Array(o*3),l=i.attributes.uv,c=fy.indexOf(n.surface),u=c%Tl,d=Math.floor(c/Tl),f=i.attributes.color;for(let h=0;h<o;h++)n.shape==="asset"&&f?(a[h*3]=f.getX(h)*s.r,a[h*3+1]=f.getY(h)*s.g,a[h*3+2]=f.getZ(h)*s.b):s.toArray(a,h*3),n.shape!=="asset"&&!n.texture&&l.setXY(h,(u+.05+l.getX(h)*.9)/Tl,(d+.05+l.getY(h)*.9)/py);return i.setAttribute("color",new ht(a,3)),i}function fE(n){let e=n?.shape==="asset"?Up(n.assetId):null;if(e?.material){let i=e.material.clone();if(i.map&&(i.map=i.map.clone(),i.map.needsUpdate=!0),n.texture){i.map?.dispose();let r=new _i().load(n.texture);r.colorSpace=pt,r.wrapS=r.wrapT=kn,i.map=r}return n.color&&n.color!=="#ffffff"&&i.color?.multiply(new Le(n.color)),i.needsUpdate=!0,i}if(!n?.texture)return new gt({vertexColors:!0,map:my(),roughness:.68});let t=new _i().load(n.texture);return t.colorSpace=pt,t.wrapS=t.wrapT=kn,new gt({vertexColors:!0,map:t,roughness:.68})}function Dr(n){return n?.parts?.some(e=>e.texture||e.shape==="asset")?n.parts.map(fE):new gt({vertexColors:!0,map:my(),roughness:.68})}function Xh(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ai&&e.map.dispose(),e.dispose()}}function Yh(n){let e=n.map(gy),t=_h(e,n.some(i=>i.texture||i.shape==="asset"));return e.forEach(i=>i.dispose()),t.center(),t.computeBoundingBox(),t}function zo(n){let e=Yh(n.parts),t=e.boundingBox.getSize(new b);return e.scale(1/Math.max(t.x,1e-5),1/Math.max(t.y,1e-5),1/Math.max(t.z,1e-5)),e.computeBoundingBox(),e}function pE(n){let e=new $t;for(let t of n.parts??[]){let i=gy(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new b,new b(1,1,1)),e}function xy(n){let e=pE(n),t=e.getCenter(new b),i=e.getSize(new b),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":Fp.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?Ne.clamp(r.precision,8,96):48,center:s?new b(...r.center):t,size:s?new b(...r.size):i,rotation:s?new b(...r.rotation??[0,0,0]):new b,boundsCenter:t,boundsSize:i}}function mE(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new b().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function gE(n){let e=xy(n),t=Math.max(8,Math.min(24,Math.round(Math.sqrt(e.precision)*2)));if(e.shape==="sphere")return new In(.5,t,Math.max(6,Math.floor(t/2)));if(e.shape==="capsule")return new vr(.5,0,Math.max(2,Math.round(t/8)),t);if(e.shape==="convex"&&n.parts?.length){let i=Yh(n.parts),r=mE(i,e.precision);if(i.dispose(),r.length>=4)try{let s=new Ki(r),o=e.boundsSize.clone().max(new b(1e-5,1e-5,1e-5));return s.scale(1/o.x,1/o.y,1/o.z),s.computeVertexNormals(),s}catch{}}return new et(1,1,1)}function Al(n,e=null){let t=xy(n),i=gE(n),r=t.boundsSize.clone().max(new b(1e-5,1e-5,1e-5)),s=e?new b(e.x,e.y,e.z):r.clone(),o=t.size.clone().multiply(s).divide(r),a=t.center.clone().sub(t.boundsCenter).multiply(s).divide(r);return i.scale(o.x,o.y,o.z),i.rotateX(Ne.degToRad(t.rotation.x)),i.rotateY(Ne.degToRad(t.rotation.y)),i.rotateZ(Ne.degToRad(t.rotation.z)),i.translate(a.x,a.y,a.z),i.computeBoundingBox(),i}function yy(n){return n.models.filter(e=>e.inGame&&e.parts.length).map(e=>{let t=Yh(e.parts),i=t.boundingBox.getSize(new b);return{id:e.id,name:e.name,properties:e.properties,geo:t,material:Dr(e),collisionGeo:Al(e),mass:Ne.clamp(i.x*i.y*i.z*9,.18,12)}})}function vy(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length)return null;let t=Yh(e.parts),i=t.boundingBox.getSize(new b),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new Ve(t,Dr(e));s.castShadow=!0;let o=new Tt;return o.add(s),o}var xE=256,wy=1/2.6**2,_y=100,yE=256,vE=16,jh=24,My=new WeakMap,Ei=Ne.clamp,xs=Ne.lerp,Op=n=>n*n*(3-2*n);function wn(n,e,t,i){return Number.isFinite(n)?Ei(n,e,t):i}function by(n){if(!n)return null;let e=gs({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var _E=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function Ty(n,e=vE){return Math.round(wn(n,1,xE,e))}function Sy(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return wn(n[e+"Density"],0,_y,0);let s=wn(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return wn(o/t,0,_y,0)}function Vo(n={},e=1){let t=Ty(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(wn(n?.seed,0,2147483647,1)),amplitude:wn(n?.amplitude,0,12,0),frequency:wn(n?.frequency,.015,2,.12),octaves:Math.round(wn(n?.octaves,1,5,3)),roughness:wn(n?.roughness,.15,.95,.42),ridge:wn(n?.ridge,0,1,0),edgeFade:wn(n?.edgeFade,0,1,0),grassDensity:Sy(n??{},"grass",e,5,3200),shrubDensity:Sy(n??{},"shrub",e,.17,48),textureDensity:wn(n?.textureDensity,1e-4,yE,wy),grassSize:wn(n?.grassSize,.1,5,1),shrubSize:wn(n?.shrubSize,.1,5,1),grassModel:by(n?.grassModel),shrubModel:by(n?.shrubModel),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&_E.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>wn(r,-jh,jh,0)):null}}function Ay(n,e,t,i){let r=Ei(t,0,e),s=Ei(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function Ey(n,e){let t=Ty(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>Ay(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function nr(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Zh(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=Op(n-i),o=Op(e-r),a=xs(nr(i,r,t),nr(i+1,r,t),s),l=xs(nr(i,r+1,t),nr(i+1,r+1,t),s);return 2*xs(a,l,o)-1}function El(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f}=i,h=My.get(n),p=h&&h.w===e&&h.d===t&&h.detail===r&&h.seed===s&&h.amplitude===o&&h.frequency===a&&h.octaves===l&&h.roughness===c&&h.ridge===u&&h.edgeFade===d;if(p&&h.heights===f)return h;let x=r+1,m=p?h.procedural:new Float64Array(x**2);if(!p&&o)for(let w=0;w<=r;w++)for(let M=0;M<=r;M++){let C=(M/r-.5)*e*a,E=(w/r-.5)*t*a,R=0,D=1,T=0;for(let N=0;N<l;N++){let O=Zh(C*2**N,E*2**N,s+N*13);R+=D*xs(O,1-2*Math.abs(O),u),T+=D,D*=c}let S=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(M/r-.5))*2,(.5-Math.abs(w/r-.5))*2)),d*2):1,A=l===3&&c===.42&&u===0&&d===0;m[w*x+M]=A?o*(.62*Zh(C,E,s)+.26*Zh(C*2.03,E*2.03,s+13)+.12*Zh(C*4.13,E*4.13,s+37)):o*R/T*S}let g=f?m.map((w,M)=>w+f[M]):m,y={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,heights:f,procedural:m,surface:g};return My.set(n,y),y}function zp(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return Ay(o,i,(e/r+.5)*i,(t/s+.5)*i)}function ME(n,e,t){return n.y+zp(El(n),e-n.x,t-n.z)}function bE(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function Cy(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=El(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,h=e-n.x,p=t-n.z,x=Ei(h,-c/2,c/2),m=Ei(p,-u/2,u/2);if((h-x)**2+(p-m)**2>=r**2)return!1;let g=(h/c+.5)*l,y=(p/u+.5)*l,w=c/l,M=u/l,C=Math.max(0,Math.ceil(g-r/w)),E=Math.min(l,Math.floor(g+r/w)),R=Math.max(0,Math.ceil(y-r/M)),D=Math.min(l,Math.floor(y+r/M)),T=Number.isFinite(o)?o-n.y:zp(a,h,p),S=l+1,A=a.heights?.slice()??new Array(S**2).fill(0),N=!1,O=!1;function Y(k,H,j){N=!0;let U=H*S+k,ie=A[U],ee;if(i==="raise"||i==="lower")ee=ie+(i==="raise"?1:-1)*s*j;else{let ce=i==="flatten"?T:bE(a,k,H);ee=xs(d[U],ce,Math.min(1,s)*j)-f[U]}ee=Ei(ee,-jh,jh),!(Math.abs(ee-ie)<1e-7)&&(A[U]=ee,O=!0)}for(let k=R;k<=D;k++)for(let H=C;H<=E;H++){let j=Math.hypot((H-g)*w,(k-y)*M)/r;j<1&&Y(H,k,Op(1-j))}if(!N){let k=Ei(g,0,l),H=Ei(y,0,l),j=Math.min(l-1,Math.floor(k)),U=Math.min(l-1,Math.floor(H)),ie=k-j,ee=H-U,ce=ie+ee<=1,be=ce?1-ie-ee:ie+ee-1,Ce=ce?ie:1-ee,De=ce?ee:1-ie;if(be>=Math.max(Ce,De)){let Re=+!ce;Y(j+Re,U+Re,1)}else Ce>=De?Y(j+1,U,1):Y(j,U+1,1)}return O&&(n.terrain.heights=A),O}function Ry(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??wy),d=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],d),d+=6)}let f=new Qe;return f.setAttribute("position",new ht(o,3).setUsage(Sn)),f.setAttribute("uv",new ht(a,2)),f.setIndex(new ht(c,1)),SE(f,n),f}function SE(n,e){let{surface:t}=El(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function wE(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=El(n),l=Ei(((e-n.x)/s+.5)*r,0,r),c=Ei(((t-n.z)/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],m=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-m*r/o).normalize()}function Py(n,e){return{mesh:e,heightfield:!0,xMin:n.x-n.w/2,xMax:n.x+n.w/2,zMin:n.z-n.d/2,zMax:n.z+n.d/2,height:(t,i)=>ME(n,t,i),normalAt:(t,i,r)=>wE(n,t,i,r),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function TE(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new Qe;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function AE(){return new Ft(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var EE=[{name:"grass",geometry:TE,max:3200,salt:21,color:"#527a34"},{name:"shrub",geometry:AE,max:1024,salt:47,color:"#36583c"}];function Iy(n){let e=new Tt;for(let{name:t,geometry:i,max:r,salt:s,color:o}of EE){let a=n.terrain[t+"Density"]??0,l=Math.round(n.w*n.d*a);if(!l)continue;let c=n.terrain[t+"Model"],u=n.terrain[t+"Size"]??1,d,f;if(c){let y=t==="grass"?.42:.85;d=zo(c),d.scale(y*u,y*u,y*u),d.translate(0,y*u/2,0),f=Dr(c)}else if(d=i(),d.scale(u,u,u),f=new hn({color:o,side:t==="grass"?an:ai,flatShading:!0}),t==="grass"&&n.terrain.grassTexture){let y=new _i().load(n.terrain.grassTexture);y.colorSpace=pt,f.map=y,f.color.set("#ffffff"),f.userData.ownTexture=!0}let h=(d.index?.count??d.attributes.position.count)/3,p=Math.max(1,Math.floor(12e4/Math.max(1,h))),x=Math.min(l,r,p),m=new Pa(d,f,x);m.userData.requestedCount=l,m.name=t,m.instanceMatrix.setUsage(Sn),m.userData.salt=s,m.receiveShadow=!0;let g=new Le;for(let y=0;y<x;y++){let w=xs(.68,1.2,nr(y,s,n.terrain.seed+4));m.setColorAt(y,g.setRGB(w,w,w))}e.add(m)}return CE(e,n),e}function CE(n,e){let t=El(e),i=new zt;for(let r of n.children){let{salt:s}=r.userData,{seed:o}=e.terrain;for(let a=0;a<r.count;a++){let l=(nr(a,s,o)-.5)*.96*e.w,c=(nr(a,s,o+1)-.5)*.96*e.d;i.position.set(l,zp(t,l,c),c),i.rotation.y=nr(a,s,o+2)*2*Math.PI,i.scale.setScalar(xs(.58,1.34,nr(a,s,o+3))),i.updateMatrix(),r.setMatrixAt(a,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function Dy(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Xh(e.material),e.dispose();n.clear(),n.removeFromParent()}}var Jh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],Ly=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function Uy(n,e=Ly[n]){n=Math.max(0,Math.min(Jh.length-1,n|0));let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=/^#[a-f0-9]{6}$/i.test(e)?e:Ly[n],i.fillRect(0,0,512,512);let r=(n+45)*31337,s=()=>(r=Math.imul(r,1664525)+1013904223>>>0)/2**32,o=(a,l,c,u)=>{for(let d of[0,-512])for(let f of[0,-512])i.fillRect(a+d,l+f,c,u)};for(let a=0;a<4800;a++){let l=s()*512,c=s()*512;i.fillStyle=s()>.46?"#fcf5dc":"#212131",i.globalAlpha=.025+s()*.19,o(l,c,n===4?3+s()*62:1+s()*9,1+s()*(n===4?3:8))}if(n===5){i.fillStyle="#151d22",i.globalAlpha=.47;for(let a=0;a<512;a+=128)i.fillRect(0,a,512,3),i.fillRect(a,0,3,512)}return t}function Fy({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var RE=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function Ny(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){RE.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function By(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var Oy=.065,PE=.08,$h=.035,Vp=.003,Kh=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy($i).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let m=p&&o.includes(p)&&!p.objectBody?.owner,g=m&&p.objectBody;g&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(g.mesh.quaternion).add(g.mesh.position),f.copy(u.localNormal).applyQuaternion(g.mesh.quaternion)),m&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),m||this.to.add(this.flight),this.to.y-=Math.min(Vp,r*t*t);let y=this.sweep(u,this.from,this.to);if(m){let T=this.correction.subVectors(x,d.anchor),S=T.dot(f)<=$h&&d.anchor.distanceToSquared(e)<=(c+$h)**2&&T.lengthSq()<=Math.max(.12,c*.5)**2;S&&(!y||y===p&&this.hitNormal.dot(f)>.7)?(y=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!S&&y===p&&T.dot(f)>$h&&(y=null),!y&&u.tracked&&(u.released=p,this.released=!0)}if(!y)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let w=y.friction??.8,M=Math.min(1,Math.max(0,w*(.75+s.grip*.09))),C=Math.max(0,1-Math.abs(f.y)/.28),E=Math.min(.97,Math.max(0,1-M+C*.24+(s.slide-3)*.035)),R=this.correction.subVectors(d.anchor,x);if(R.addScaledVector(f,-R.dot(f)),this.slideTarget.copy(R).multiplyScalar(-E),m&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*E*Math.max(C,Math.max(0,1-2*M)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,Vp),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-Vp*2.5),this.supportBoxes[0]=y,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(E>.5&&R.lengthSq()>$h**2)continue}R.subVectors(d.anchor,x),m&&R.dot(f)<0&&R.addScaledVector(f,-R.dot(f)),l.add(R);let D=y.objectBody;if(D){let T=u.inverseRotation.copy(D.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(D.mesh.position).applyQuaternion(T),u.localNormal.copy(f).applyQuaternion(T)}if(d.surface=y,d.groundContact=f.y>.55,this.contacts++,u.tracked){let T=this.handMotion.subVectors(u.previousTarget,x),S=T.dot(f);T.multiplyScalar(1-E).addScaledVector(f,Math.max(0,S)-S*(1-E)),this.intent.add(T)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:m,offset:g}=h;h.tracked=h.eligible,p.valid&&(m.copy(p.locomotionTarget).add(e),x.copy(m).add(g),p.surface&&(x.copy(p.anchor).add(g),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=Oy;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/Oy),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:m}of this.hands)if(p.surface||m){let g=this.average.dot(x);g<0&&this.average.addScaledVector(x,-g)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=PE,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function IE(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function kp(n,e=.16,t=26){let i=IE(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function zy(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,kp(n,i,r)&&(n.hapticCooldown=.08))}function Vy({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new b(0,1,0),a=new qe,l=0,c=new Yi,u=[],d=new Map,f=cx(n,{onShot:(g,y)=>s.sendShot(g,y),impact(g,y,w,M){c.set(g,y),c.far=w;let C=c.intersectObjects(u,!1)[0];if(!C)return null;let E=d.get(C.object);return M&&E&&!E.owner&&!E.frozen&&E.velocity.addScaledVector(y,Math.min(4,2.6/E.mass)),C.distance}}),h={position:new b,quaternion:new qe,modelPosition:new b},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function m({frame:g,space:y,inVR:w,enabled:M,remoteWorld:C,dt:E,yaw:R,drop:D,rightHand:T,flatFiring:S}){let A=null,N=!1;if(M)if(w){let O=[...g.session.inputSources].find(k=>k.handedness==="right"),Y=O&&g.getPose(O.targetRaySpace,y);if(Y){let{position:k,orientation:H}=Y.transform;A=h,A.position.set(k.x,k.y-D,k.z).applyAxisAngle(o,R).add(e.position),A.modelPosition.copy(T.valid?T.mesh.position:A.position),A.quaternion.set(H.x,H.y,H.z,H.w).premultiply(a.setFromAxisAngle(o,R)),N=!!O.gamepad?.buttons[0]?.pressed}}else A=h,t.getWorldPosition(A.position),t.getWorldQuaternion(A.quaternion),A.modelPosition.set(.16,-.17,-.43).applyQuaternion(A.quaternion).add(A.position),N=S;if(x=A?p:null,u.length=0,d.clear(),A||l){for(let O of i.boxes)O.mesh?.isMesh&&O.mesh.visible&&u.push(O.mesh);if(C)s.forEachReplica(O=>u.push(O));else for(let O of r)O.mesh.visible&&O.collidable&&!O.owner&&(u.push(O.mesh),d.set(O.mesh,O))}f.update({dt:E,aim:A,firing:N}),N?l=1.3:l=Math.max(0,l-E)}return{update:m,receiveShot({position:g,quaternion:y},w){f.replay(g,new qe().copy(y),w),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function ky(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function Gy(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var ys=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Qh=["Naturel","Cellulo","Affiche","R\xE9tro"],ed={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}};var Hy=new WeakMap;function Gp(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,Hy.set(n,e),n}function Cl(n){if(Array.isArray(n))return n.map(Cl);let e=n.clone(),t=Hy.get(n);return t?Gp(e,t):e}function DE(n){let t=new In(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new Ft(.225,0),r=new Ya({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return Gp(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function LE(n){let e=new et(.37,.37,.37),t=new gt({color:16777215,roughness:.4});return Gp(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function Wy(){let n={value:0};return{props:[DE(n),LE(n)],animate(e){n.value=e}}}var qy=new b(0,1,0),Xy=new b(0,0,1),UE={left:new qe().setFromAxisAngle(Xy,Math.PI/2),right:new qe().setFromAxisAngle(Xy,-Math.PI/2)},FE=new qe,NE=new b;function Yy(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(qy,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(FE.setFromAxisAngle(qy,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(UE[n.side]),n.target.copy(n.gripPosition).sub(NE.copy($i).applyQuaternion(n.mesh.quaternion))}function Zy(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let g=e.getChannelData(0);for(let y=0;y<g.length;y++)g[y]=(Math.random()*2-1)*(1-y/g.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),m=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,m.gain.setValueAtTime(Ne.clamp(f,1,10)*.055,h),m.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(m).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:m,volume:g,enabled:y}){if(h){p.forEach((w,M)=>{a[M]=Math.max(0,a[M]-f);let C=w.valid&&w.groundContact;C&&!o[M]&&!a[M]&&y&&(c(g),a[M]=.11),o[M]=C});return}r=Math.max(0,r-f),t=x?t+m:0,x&&y&&r===0&&(t>=.64||!i&&m>.025)&&(c(g),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function jy(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new Qe;r.setAttribute("position",new ht(t,3).setUsage(Sn)),r.setAttribute("color",new ht(i,3).setUsage(Sn));let s=new es(r,new vi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new _r(new In(1,12,8)).attributes.position,a=new _r(new ui(1).scale(...fh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new b,f=new WeakMap,h=new b(1,1,1),p=new qe,x=new b,m=new b,g=new b,y=new b,w=new b,M=new b,C=new b,E=new b(0,1,0),R={grip:new Le("#61f6ff"),palm:new Le("#71ff87"),solid:new Le("#ffe060"),proxy:new Le("#ff76df"),movement:new Le("#fff0af"),normal:new Le("#ff994e"),velocity:new Le("#80aaff"),force:new Le("#ff5454"),rig:new Le("#cec4ff")},D=0;function T(k,H,j){if(D+2>u){c.truncated=!0;return}k.toArray(t,D*3),j.toArray(i,D++*3),H.toArray(t,D*3),j.toArray(i,D++*3)}function S(k,H,j,U,ie){for(let ee=0;ee<k.count;ee+=2){if(D+2>u){c.truncated=!0;break}x.fromBufferAttribute(k,ee).multiply(U).applyQuaternion(j).add(H),m.fromBufferAttribute(k,ee+1).multiply(U).applyQuaternion(j).add(H),T(x,m,ie)}}function A(k,H,j,U){if(k.sphereRadius){S(o,H,j,y.setScalar(k.sphereRadius),U);return}let ie=l.get(k);if(!ie){let ee=new Set,ce=[];for(let be of k.faces)for(let[Ce,De]of[[be.a,be.b],[be.b,be.c],[be.c,be.a]]){let Re=[Ce.toArray().join(","),De.toArray().join(",")].sort().join("|");ee.has(Re)||(ee.add(Re),ce.push(...Ce.toArray(),...De.toArray()))}ie=new Oe(ce,3),l.set(k,ie)}S(ie,H,j,h,U)}function N(k,H){let U=(k.xMax-k.xMin)/16,ie=(k.zMax-k.zMin)/16;for(let ee=0;ee<=16;ee++)for(let ce=0;ce<=16;ce++){if(D+2>u){c.truncated=!0;return}let be=k.xMin+ee*U,Ce=k.zMin+ce*ie;x.set(be,k.height(be,Ce),Ce),ee<16&&T(x,m.set(be+U,k.height(be+U,Ce),Ce),H),ce<16&&T(x,m.set(be,k.height(be,Ce+ie),Ce+ie),H)}}function O(k,H,j,U){if(H.lengthSq()<1e-8)return;w.copy(k).addScaledVector(H,j),M.copy(H).normalize(),C.crossVectors(M,E),C.lengthSq()<1e-8?C.set(1,0,0):C.normalize();let ie=Math.min(.09,k.distanceTo(w)*.3);y.copy(w).addScaledVector(M,-ie),T(k,w,U),T(w,x.copy(y).addScaledVector(C,ie*.5),U),T(w,m.copy(y).addScaledVector(C,-ie*.5),U)}function Y({settings:k,boxes:H,bodies:j,hands:U,locomotion:ie,velocity:ee,head:ce,body:be,neck:Ce,proxies:De,gravity:Re,appliedMove:re,playerActive:se,inVR:xe,viewQuaternion:Pe}){D=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(k.debugBudget??5)*2e3);let ye=(k.debugRange??6)*5,Z=(fe,v=0)=>!fe||fe.distanceToSquared(ce)<=(ye+v)**2;if(s.visible=k.debugPalm||k.debugHitboxes||k.debugInvisible||k.debugForces||k.debugBody||k.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(k.debugHitboxes||k.debugInvisible||k.debugMesh){let fe=u;if(k.debugScene!==!1&&H.length&&(u=Math.floor(fe*.65/2)*2),k.debugObjects!==!1)for(let v of j){if(D+2>u){c.truncated=!0;break}if(!(!v.mesh.visible||!Z(v.mesh.position,v.shape.radius))&&(c.bodies++,k.debugHitboxes&&v.collidable!==!1&&v.blocksPlayer!==!1&&A(v.shape,v.mesh.position,v.mesh.quaternion,v.owner?R.proxy:R.solid),k.debugMesh&&v.mesh.geometry)){let F=v.mesh.geometry,B=F.attributes.position.version,z=f.get(F);z?.version!==B&&(z?.edges.dispose(),z={version:B,edges:new _r(F)},f.set(F,z)),S(z.edges.attributes.position,v.mesh.position,v.mesh.quaternion,v.mesh.scale,R.grip)}}if(u=fe,k.debugScene!==!1)for(let v of H){if(D+2>u){c.truncated=!0;break}let F=v.shape?.radius??v.half?.length()??Math.hypot(v.xMax-v.xMin||0,v.zMax-v.zMin||0);if(!Z(v.position??v.mesh?.position,F))continue;c.boxes++;let B=v.mesh?.isObject3D&&v.mesh.visible;if(k.debugMesh&&B&&v.mesh.geometry){let z=v.mesh.geometry,V=z.attributes.position.version,X=f.get(z);X?.version!==V&&(X?.edges.dispose(),X={version:V,edges:new _r(z)},f.set(z,X)),S(X.edges.attributes.position,v.mesh.position,v.mesh.quaternion,v.mesh.scale,R.grip)}(B?!k.debugHitboxes:!k.debugInvisible)||(v.shape?A(v.shape,v.position,v.quaternion,B?R.solid:R.proxy):v.heightfield&&N(v,B?R.solid:R.proxy))}}if(se){if(k.debugBody){if(k.collisions)for(let{position:fe,radius:v}of De)S(o,fe,p,y.setScalar(v),R.rig);T(ce,Ce,R.rig),T(Ce,be,R.rig)}if(k.debugForces&&(d.set(0,-.22,-.5),Pe&&d.applyQuaternion(Pe),d.add(ce),O(d,ee,.13,R.velocity),O(d,E,-Re*.038,R.force),O(d,re,5,R.movement),k.debugObjects!==!1)){for(let fe of j)if(!(!fe.mesh.visible||!fe.velocity||!Z(fe.mesh.position,fe.radius))&&(O(fe.mesh.position,fe.velocity,.13,R.velocity),D+2>u)){c.truncated=!0;break}}if(xe&&(k.debugPalm||k.debugForces))for(let fe of ie.hands){let{hand:v,normal:F,offset:B}=fe;if(v.valid){if(k.debugPalm){S(o,v.gripPosition,p,y.setScalar(.014),R.grip);for(let z=0;z<3;z++)M.set(0,0,0).setComponent(z,.075).applyQuaternion(v.controllerRotation),O(v.gripPosition,M,1,R.grip);w.copy(v.mesh.position).add(B),S(a,w,v.mesh.quaternion,h,R.palm),T(v.gripPosition,w,R.grip),v.hasSupport&&(w.copy($i).applyQuaternion(v.mesh.quaternion).add(v.mesh.position),S(a,w,v.mesh.quaternion,h,R.grip))}k.debugForces&&v.surface&&O(v.anchor,F,.25,R.normal)}}}c.vertices=D,c.segments=D/2,r.setDrawRange(0,D);for(let fe of["position","color"]){let v=r.attributes[fe];v.clearUpdateRanges(),D&&v.addUpdateRange(0,D*3),v.needsUpdate=!!D}}return{update:Y,stats:c}}var Hp=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Ky=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Wp={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},td=8e6,Rl=512,Ci=1024,Jy=512,Zt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,$y=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Pl(n){if(typeof n=="string"){if(n.length>td)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Rl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Rl+" pi\xE8ces.");let e=n.spawn??{},t=n.pieces.filter(i=>!ms(i?.sceneryId)&&!Wh(i?.model));if(!t.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:$y(n.name,56,"Ma map"),worldSize:Zt(n.worldSize,24,2048,240),spawn:{x:Zt(e.x,-Ci,Ci,0),y:Zt(e.y,-256,256,.06),z:Zt(e.z,-Ci,Ci,3),yaw:Zt(e.yaw,-360,360,0)},pieces:t.map((i,r)=>{if(!i||typeof i!="object")throw Error("Pi\xE8ce invalide : "+(r+1));let s=Zt(i.w,.05,Jy,3),o=Zt(i.d,.05,Jy,3),a=i.terrain&&typeof i.terrain=="object"?Vo(i.terrain,s*o):null,l=i.model?gs({version:1,models:[i.model]}).models[0]:null;if(l&&!l.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:$y(i.name,36,"Pi\xE8ce "+(r+1)),...typeof i.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(i.sceneryId)?{sceneryId:i.sceneryId}:{},x:Zt(i.x,-Ci,Ci,0),y:Zt(i.y,-256,256,0),z:Zt(i.z,-Ci,Ci,0),w:s,h:Zt(i.h,.05,256,.5),d:o,pitch:a?0:Zt(i.pitch,-180,180,0),yaw:a?0:Zt(i.yaw,-360,360,0),roll:a?0:Zt(i.roll,-180,180,0),...a?{terrain:a}:{},...l?{model:l}:{},primitive:["sphere","cylinder","cone","torus","capsule"].includes(i.primitive)?i.primitive:"box",uvScale:Zt(i.uvScale,.05,100,1),uvOffsetX:Zt(i.uvOffsetX,-100,100,0),uvOffsetY:Zt(i.uvOffsetY,-100,100,0),uvRotation:Zt(i.uvRotation,-360,360,0),material:Math.round(Zt(i.material,0,16,0)),color:typeof i.color=="string"&&/^#[a-f0-9]{6}$/i.test(i.color)?i.color:"#ffffff",grip:Zt(i.grip,0,1.5,.8),gravity:Zt(i.gravity,.05,2.5,1),bounce:Zt(i.bounce,0,1.65,1),solid:i.solid!==!1,texture:typeof i.texture=="string"&&i.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(i.texture)?i.texture:null}})}}function Qy(n){return Pl({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...No,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new Qt().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Il(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function ev(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new Qt(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new b(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Ci||Math.abs(d)>Ci||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var Dl="gorilla-lab-custom-map-v1";function tv(n){let e=new Blob([JSON.stringify(Pl(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var BE=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function qp(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&BE.has(e)):!1:!0}function nd(n,e,t){let i=new et(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function nv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function iv(n){switch(n){case"sphere":return new In(.5,24,16);case"cylinder":return new Yt(.5,.5,1,24);case"cone":return new qi(.5,1,24);case"torus":return new hi(.34,.14,12,32);case"capsule":return new vr(.32,.36,8,16);default:return new et(1,1,1)}}function rv({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(Z=>Z.half&&Z.mesh?.isObject3D).map(Z=>Z.mesh)),c=new Tt;n.add(c);let u=[],d=[],f=[],h=new _i,p=new Map,x=0,m=null,g="",y=-1,w=-1,M="",C="",E=new et(1,1,1),R=new Ve(E,new _t({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));R.visible=!1,n.add(R);let D=new Yi,T=new b,S=new b,A=document.querySelector("#map-note");function N(Z){M=Z,A.textContent=Z}function O(){f.length>=20&&f.shift(),f.push(JSON.stringify(m))}function Y(Z,fe){let v=p.get(Z);if(!v){v={materials:new Set,texture:null,failed:!1},p.set(Z,v);let F=z=>{if(!(p.get(Z)!==v||v.failed)){v.failed=!0;for(let V of v.materials)V.map=null,V.needsUpdate=!0;v.texture?.dispose(),z&&N(z)}},B=h.load(Z,z=>{(z.image.width>2048||z.image.height>2048)&&F("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>F());v.texture=B,B.colorSpace=pt,B.wrapS=B.wrapT=kn}return v.materials.add(fe),fe.map=v.failed?null:v.texture,v}function k(){for(let[Z,fe]of p)fe.materials.size||(p.delete(Z),fe.failed||fe.texture.dispose())}function H(Z){let fe=e.mapMaterial(Z.material,s());if(!Z.texture&&Z.color==="#ffffff")return{material:fe,custom:!1};let v=fe.clone();return v.onBeforeCompile=fe.onBeforeCompile,v.customProgramCacheKey=fe.customProgramCacheKey,v.color.multiply(new Le(Z.color)),{material:v,custom:!0,ownTexture:Z.texture?Y(Z.texture,v):null}}function j(Z){c.remove(Z.mesh),Z.mesh.geometry.dispose(),Z.vegetation&&Dy(Z.vegetation),Z.custom&&(Z.ownTexture?.materials.delete(Z.mesh.material),Z.model?Xh(Z.mesh.material):Z.mesh.material.dispose())}function U(Z,fe){if(Z.model){let Ee=zo(Z.model);Ee.scale(Z.w,Z.h,Z.d);let Te=Dr(Z.model),I=new Ve(Ee,Te);I.position.set(Z.x,Z.y,Z.z),I.rotation.set(Ne.degToRad(Z.pitch),Ne.degToRad(Z.yaw),Ne.degToRad(Z.roll??0),"YXZ"),I.castShadow=I.receiveShadow=!0,I.userData.mapIndex=fe,Z.model.kind==="prop"&&(I.visible=!1),c.add(I);let _=new b(Z.w,Z.h,Z.d),L=Al(Z.model,_);L.computeBoundingBox();let W=L.boundingBox,te=new b(Math.max(Math.abs(W.min.x),Math.abs(W.max.x)),Math.max(Math.abs(W.min.y),Math.abs(W.max.y)),Math.max(Math.abs(W.min.z),Math.abs(W.max.z))),J=wi(L);L.dispose();let he={mesh:I,position:I.position,quaternion:I.quaternion,half:te,min:te.clone().negate(),shape:J,radius:J.radius,friction:Z.grip,gravity:Z.gravity,bounce:Z.bounce,zone:!0,type:Z.material};return{mesh:I,collider:he,custom:!0,model:!0}}let{material:v,custom:F,ownTexture:B}=H(Z),z=Z.terrain?Ry(Z):Z.primitive&&Z.primitive!=="box"?iv(Z.primitive).scale(Z.w,Z.h,Z.d):nd(Z.w,Z.h,Z.d),V=new Ve(nv(z,Z),v);V.position.set(Z.x,Z.y,Z.z),V.rotation.set(Ne.degToRad(Z.pitch),Ne.degToRad(Z.yaw),Ne.degToRad(Z.roll??0),"YXZ"),V.castShadow=V.receiveShadow=!0,V.userData.mapIndex=fe,Z.sceneryId==="lab-mirror"&&(V.userData.mirrorSize={w:Z.w,h:Z.h,d:Z.d}),c.add(V);let X=new b(Z.w/2,Z.h/2,Z.d/2),ne={mesh:V,position:V.position,quaternion:V.quaternion,half:X,min:X.clone().negate(),shape:Ti(X),friction:Z.grip,gravity:Z.gravity,bounce:Z.bounce,zone:!0,type:Z.material};if(!Z.terrain)return{mesh:V,collider:ne,custom:F,ownTexture:B};let Q=Iy(Z);return Q&&V.add(Q),{mesh:V,collider:Py(Z,V),custom:F,ownTexture:B,vegetation:Q}}function ie(){for(let Z of u){let fe=m?.pieces[Z.mesh.userData.mapIndex];if(!fe||Z.ownTexture||Z.model)continue;let v=e.mapMaterial(fe.material,s());Z.custom?Z.mesh.material.map!==v.map&&(Z.mesh.material.map=v.map,Z.mesh.material.needsUpdate=!0):Z.mesh.material=v}}function ee(){for(let F of u)j(F);u.length=0,d.length=0;let Z=m?.pieces??[];g=m?"custom-"+hs(JSON.stringify(m)):"";let fe=new Set(Z.map(F=>F.model?.assetId).filter(Boolean)),v=new Set(Z.map(F=>F.sceneryId).filter(Boolean));o.forEach(F=>{let B=F.userData?.editorAssetId;F.visible=!m||!l.has(F)&&qp(m,B,fe,v)});for(let F=0;F<Z.length;F++)u.push(U(Z[F],F));for(let F of u)F.mesh.userData.mirrorSize&&d.push(F);if(k(),m){let F=a.filter(z=>!l.has(z.mesh)&&qp(m,z.editorAssetId,fe,v)),B=u.filter((z,V)=>Z[V].solid&&Z[V].model?.kind!=="prop"&&Z[V].model?.properties?.collidable!==!1).map(z=>z.collider);e.boxes.splice(0,e.boxes.length,...F,...B)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.bakeLightmap(),r(),m)try{localStorage.setItem(Dl,JSON.stringify(m))}catch{}else try{localStorage.removeItem(Dl)}catch{}}function ce(Z){let fe=Pl(Z);x++,f.length=0,m=fe,y=w=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ee(),i(m.spawn.yaw),N("Map : "+m.name+" \xB7 "+m.pieces.length+" pi\xE8ces")}function be(){x++,m=null,f.length=0,y=w=-1,t.set(0,0,3),ee(),i(0),N("Ar\xE8ne int\xE9gr\xE9e")}function Ce(){ce({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Il({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function De(){if(!f.length)return N("Rien \xE0 annuler.");m=Pl(f.pop()),y=w=-1,t.set(m.spawn.x,m.spawn.y,m.spawn.z),ee(),N("Derni\xE8re modification annul\xE9e.")}function Re(){m?tv(m):N("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function re(Z,fe,v,F){m&&(O(),m.spawn={x:Z,y:fe,z:v,yaw:Ne.radToDeg(F)},t.set(Z,fe,v),ee(),N("Point de d\xE9part m\xE9moris\xE9."))}function se(Z,fe,v,{mode:F,piece:B,head:z,feet:V}){D.set(Z,fe),D.far=12;let X=u.map(W=>W.mesh);F===1&&m?.arenaBase&&!m.editableArena&&X.push(...a.filter(W=>W.heightfield&&!m.pieces.some(te=>te.sceneryId===W.editorAssetId)).map(W=>W.mesh));let ne=D.intersectObjects(X,!1),Q=F>=5?ne.find(W=>m?.pieces[W.object.userData.mapIndex]?.terrain):ne[0];if(R.visible=!1,!m)return;if(F>=5){let W=Q?.object.userData.mapIndex,te=m.pieces[W];if(!te?.terrain||!v)return;if(O(),F===9){let J=B.terrain?.detail??te.terrain.detail,he=Ey(te.terrain,J);te.terrain=Vo({...he,...B.terrain,heights:he.heights})}else{let J={mode:["raise","lower","smooth","flatten"][F-5],radius:B.brushRadius,strength:B.brushStrength,target:te.y};Cy(te,Q.point.x,Q.point.z,J)}ee(),N("Relief modifi\xE9.");return}if(F===2||F===3||F===4){if(!Q)return;let W=Q.object.userData.mapIndex,te=m.pieces[W];if(v&&F===2&&(y=W,w=W,N("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),v&&F===3){if(m.pieces.length===1)return N("Garde au moins une pi\xE8ce dans la map.");O(),m.pieces.splice(W,1),y=w=-1,ee(),N("Pi\xE8ce supprim\xE9e.")}v&&F===4&&(O(),Object.assign(m.pieces[W],{material:B.material,grip:B.grip,gravity:B.gravity,bounce:B.bounce,solid:B.solid,texture:B.texture}),ee(),N("Surface modifi\xE9e.")),Q&&(R.position.copy(Q.object.position),R.rotation.copy(Q.object.rotation),R.scale.set(te.w,te.h,te.d).multiplyScalar(1.006),R.visible=!0,R.material.color.set(F===3?"#ff8271":"#ffe2a2"));return}if(!Q)return;let Ee=w>=0?m.pieces[w]:B;if(Q.object.userData.mapIndex===w)return;T.copy(Q.face.normal).transformDirection(Q.object.matrixWorld);let Te=Ee.terrain?{...Ee,x:Math.round(Q.point.x*2)/2,y:Q.point.y,z:Math.round(Q.point.z*2)/2,pitch:0,yaw:0}:ev(Q.point,T,Ee);if(!Te)return;R.position.set(Te.x,Te.y,Te.z),R.rotation.set(Ne.degToRad(Te.pitch),Ne.degToRad(Te.yaw),Ne.degToRad(Te.roll??0),"YXZ"),R.scale.set(Te.w,Te.h,Te.d),R.updateMatrixWorld(!0),R.visible=!0;let I=new $t().setFromObject(R),_=new $t(new b(z.x-.26,V+.01,z.z-.26),new b(z.x+.26,z.y+.19,z.z+.26)),L=Te.solid&&I.intersectsBox(_);if(R.material.color.set(L?"#fd7763":"#8be4b9"),v){if(L)return N("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(w<0&&m.pieces.length>=Rl)return N("Limite de "+Rl+" pi\xE8ces atteinte.");O(),w>=0?(m.pieces[w]=Te,w=-1):m.pieces.push(Te),ee(),N("Pi\xE8ce pos\xE9e \xB7 "+m.pieces.length+" pi\xE8ces")}}let xe=document.querySelector("#map-file"),Pe=document.querySelector("#map-url");xe.onchange=async()=>{let Z=xe.files[0];if(!Z)return;let fe=++x;xe.value="";try{if(Z.size>td)throw Error("Map trop lourde.");let v=await Z.text();fe===x&&ce(v)}catch(v){fe===x&&N(v.message)}};async function ye(Z){let fe=++x;try{let v=new URL(Z,location.href);if(!["http:","https:"].includes(v.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let F=await fetch(v,{credentials:"omit"});if(fe!==x)return;if(!F.ok)throw Error("URL de map inaccessible ("+F.status+").");if(Number(F.headers.get("content-length"))>td)throw Error("Map trop lourde.");let z=await F.text();fe===x&&ce(z)}catch(v){fe===x&&N(v.message)}}return document.querySelector("#map-load-url").onclick=()=>ye(Pe.value),document.querySelector("#map-export").onclick=Re,document.querySelector("#map-reset").onclick=be,{placedModels:()=>m?.pieces.filter(Z=>Z.model?.kind==="prop")??[],modelPieces:()=>m?.pieces.filter(Z=>!Z.terrain&&Z.name!=="Sol")??[],refreshMaterials:ie,load:ce,loadURL:ye,reset:be,blank:Ce,undo:De,save:Re,edit:se,recenter:re,inform:N,mirrors:()=>d,get usesBuiltInMirror(){return!m||m.arenaBase&&!m.editableArena&&!m.pieces.some(Z=>Z.sceneryId==="lab-mirror")},clearGhost(){R.visible=!1},get active(){return!!m},get builtIn(){return!m||m.arenaBase===!0},get assetLayer(){return m?.assetLayer===!0},hasAsset(Z){return!!m?.pieces.some(fe=>fe.model?.assetId===Z)},getAssetPiece(Z){return m?.pieces.find(fe=>fe.model?.assetId===Z)??null},get status(){return M},get yaw(){return m?.spawn.yaw??0},get nodes(){return m?.pieces.length??0},get name(){return m?.name??null},get signature(){return g}}}var Xp=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function sv(){let n=new Ve(new en(2,2),new un({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+Xp+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function ov(n){let e=new Qr,t=new Xt;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new ge(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new un({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+Xp+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new Ve(new en(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(y=>!y.viewport?.z||!y.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,m=n.shadowMap.autoUpdate,g=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let y=0;y<l.length;y++){let w=l[y],M=Math.max(32,Math.round(w.viewport.z)),C=Math.max(32,Math.round(w.viewport.w)),E=a[y];E?(E.width!==M||E.height!==C)&&E.setSize(M,C):E=a[y]=new Pn(M,C,{type:o?bi:Wn,minFilter:ln,magFilter:ln,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(w.matrixWorld),t.matrixWorld.copy(w.matrixWorld),t.matrixWorldInverse.copy(w.matrixWorldInverse),t.projectionMatrix.copy(w.projectionMatrix),t.projectionMatrixInverse.copy(w.projectionMatrixInverse),t.layers.mask=w.layers.mask,n.shadowMap.autoUpdate=y===0&&m,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=m,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=g}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=g}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function av(n){let e={value:0},t={value:Array.from({length:7},()=>new lt(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function lv(n,e,t){function i(c,u,d=.85){let f=c.getWorldPosition(new b),h=c.getWorldQuaternion(new qe);e.push({half:u,min:u.clone().negate(),position:f,quaternion:h,mesh:{position:f,quaternion:h},shape:Ti(u),friction:d,gravity:1})}let r=[],s=[],o=new hn({color:"#485d5d",flatShading:!0});function a([c,u],d,f){let h=new Ve(new et(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new b(.0475,.34,.055));let p=new Tt;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new Ve(new et(.64,.36,.055),new hn({color:"#182831"}));p.add(x);let m=document.createElement("canvas");m.width=512,m.height=96;let g=m.getContext("2d"),y=new li(m);y.colorSpace=pt;let w=new Ve(new en(.61,.095),new _t({map:y}));w.position.set(0,.116,.03),p.add(w);let M=.592/f.length,C=f.map(([R,D],T)=>{let S=new Ve(new et(M-.012,.155,.04),new hn({color:"#478086"}));S.position.set(-.296+M*(T+.5),-.045,.046),p.add(S),r.push(S),S.userData.touchWidth=M-.012;let A=document.createElement("canvas");A.width=208,A.height=172;let N=new li(A);N.colorSpace=pt;let O=new Ve(new en(M-.017,.139),new _t({map:N}));O.position.z=.0205,S.add(O);let Y=-1/0;return S.userData.action=()=>{let k=performance.now();k-Y<250||(Y=k,D(),l(),S.position.z=.036,setTimeout(()=>{S.position.z=.046},115))},{label:R,context:A.getContext("2d"),texture:N}});function E(){g.fillStyle="#182831",g.fillRect(0,0,512,96),g.fillStyle="#ffe1a0",g.font="bold 38px system-ui",g.fillText(d,17,62,478);for(let R of C){let D=R.context;D.fillStyle="#386269",D.fillRect(0,0,208,172),D.fillStyle="#fff2d5",D.textAlign="center",D.font="bold 27px system-ui";let T=(typeof R.label=="function"?R.label():R.label).split("|");T.forEach((S,A)=>D.fillText(S,104,(T.length>1?68:97)+A*37,188)),R.texture.needsUpdate=!0}y.needsUpdate=!0}s.push(E)}function l(){for(let c of s)c()}return a(Sl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Bo[0])],["Boule",()=>t.spawn(1,Bo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Bo[0])],["Vider",t.clear]]),a(Sl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Bo[1])],["Sph\xE8re",()=>t.spawn(5,Bo[1])]]),a(Sl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Sl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function Ll(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Lr=(n,e,t)=>n+(e-n)*t,ko=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function id(n,e){let t=Math.floor(n),i=Math.floor(e),r=ko(0,1,n-t),s=ko(0,1,e-i);return Lr(Lr(Ll(t,i),Ll(t+1,i),r),Lr(Ll(t,i+1),Ll(t+1,i+1),r),s)}function cv(n,e){return id(n,e)*.54+id(n*2.07+3.4,e*2.07-6.1)*.26+id(n*4.2+9,e*4.2)*.13+id(n*8.6,e*8.6-13)*.07}function uv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Lr(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),m=0,g=0,y=0;if(c>.025)if(n){let M=Ll(p+792,l+677);M>.9988&&(y=(M-.9988)*49e3*ko(.09,.3,c))}else{let[M,C]=r[p],E=2.8*u/(c+.16),R=M*E+3.6,D=C*E-8.1,T=cv(R,D),S=cv(R-.12,D-.09);m=ko(.49,.66,T)*ko(.025,.13,c),g=Math.max(.38,Math.min(1,.72+(T-S)*5+(T-.54)*.8))}let w=n?1:Lr(.94,1,ko(.05,.34,c));i[x]=Lr(h[0],(139+115*g)*w,m)+y,i[x+1]=Lr(h[1],(154+100*g)*w,m)+y*.94,i[x+2]=Lr(h[2],(178+77*g)*w,m)+y*.86,i[x+3]=255}}let a=new yi(i,1024,512,Ln);return a.colorSpace=pt,a.wrapS=kn,a.magFilter=cn,a.minFilter=Dn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function hv(){return{day:uv(!1),night:uv(!0)}}function rd(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new li(i);return r.colorSpace=pt,r}function dv(n,e){let{day:t,night:i}=hv(),r=new Ve(new In(180,40,20),new _t({map:t,side:dn,fog:!1,toneMapped:!1}));n.add(r);let s=rd(128,128,(_,L)=>{let W=_.createRadialGradient(L/2,L/2,0,L/2,L/2,L/2);W.addColorStop(0,"#fff8df"),W.addColorStop(.12,"#fff3bd"),W.addColorStop(.18,"rgba(255,225,144,.40)"),W.addColorStop(1,"rgba(255,220,144,0)"),_.fillStyle=W,_.fillRect(0,0,L,L)}),o=new Ra(new ro({map:s,blending:$n,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),n.add(o);let a=t.clone();a.mapping=mo,a.needsUpdate=!0;let l=new bo(e);n.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ja("#daeaff","#88724c",2.25),u=new Ka("#fff0d0",3);u.position.set(-14,25,-16),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),u.shadow.bias=-25e-5,u.shadow.normalBias=.025,n.add(c,u,u.target);let d=new b,f=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],h=0;function p(_){h=f[_]?_:0;let L=f[h];c.color.set(L.fill),c.groundColor.set(L.ground),c.intensity=L.hemi,u.color.set(L.sun),u.intensity=L.power,d.set(...L.xyz),u.position.copy(u.target.position).add(d),o.position.copy(d).normalize().multiplyScalar(94),o.material.color.set(L.sun),o.material.opacity=L.glow,r.material.map=h===2?i:t,r.material.color.set(L.sky),n.fog.color.set(L.fog),n.background.set(L.fog),n.environmentIntensity=m*[1,.56,.09][h]}function x(_){if(!u.castShadow)return;let L=u.target.position,W=Math.round(_.x/4)*4,te=Math.round(_.y/4)*4,J=Math.round(_.z/4)*4;L.x===W&&L.y===te&&L.z===J||(L.set(W,te,J),u.position.copy(L).add(d))}let m=0;n.background=new Le(f[0].fog);let g=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function y(_,L,W){let[,te,J]=g[L],he=512;_.save(),_.scale(W/512,W/512),_.fillStyle=te,_.fillRect(0,0,he,he);let ue=L+19;function pe(){return ue=Math.imul(ue,1664525)+1013904223>>>0,ue/4294967296}if(_.fillStyle=J,L===16){for(let me=0;me<16;me++)for(let le=0;le<16;le++)(le+me)%2===0&&_.fillRect(le*32,me*32,32,32);_.fillStyle="#ff3957",_.fillRect(253,0,6,512),_.fillRect(0,253,512,6)}else if([0,2,8,15].includes(L)){let me=L===15?32:64;_.globalAlpha=.48;for(let le=0;le<he;le+=me){_.fillRect(0,le,he,L===8?3:2);for(let Se=-me;Se<he;Se+=me)_.fillRect(Se+le/me%2*(L===2?me/2:0),le,2,me)}}else if([4,5,6,7,10,11,12].includes(L)){let me=L===5?38:L===7?64:18;for(let le=0;le<me;le++){_.strokeStyle=J,_.globalAlpha=.08+pe()*.22,_.lineWidth=L===5?1+pe()*8:1+pe()*4;let Se=pe()*he,ke=L===5?.018:.009;_.beginPath();for(let ve=0;ve<=he;ve+=8){let we=Se+Math.sin(ve*ke+le)*(L===6||L===7?4:12+le%5*3)+(L===4?ve*.28:0);ve===0?_.moveTo(ve,we):_.lineTo(ve,we)}_.stroke()}}else{_.globalAlpha=.27;for(let me=0;me<120;me++){let le=pe()*he,Se=pe()*he,ke=2+pe()*6;_.beginPath(),_.arc(le,Se,ke,0,Math.PI*2),_.fill()}}if(L!==16)for(let me=0;me<4400;me++)_.globalAlpha=.05+pe()*.1,_.fillStyle=pe()>.5?J:"#222324",_.fillRect(pe()*he,pe()*he,1+pe()*4,1+pe()*3);_.restore()}let w=new Set([0,2,4,5,8,15,16]),M=g.map(([_,L,W,te,J,he],ue)=>{let pe=w.has(ue)?512:256,me=rd(pe,pe,Se=>y(Se,ue,pe));me.wrapS=me.wrapT=kn;let le=new gt({map:me,roughness:te,metalness:J,flatShading:!0,opacity:he,transparent:he<1,depthWrite:he===1});return le.name=_,le}),C=M.map(_=>_.map.image),E=512,R=M.map(_=>new hn({map:_.map,flatShading:!0,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite})),D={value:0},T={value:.24},S={value:null},A={value:0};function N(){S.value?.dispose(),S.value=rd(512,512,(_,L)=>{_.fillStyle="#ffffff",_.fillRect(0,0,L,L);let W=L/52,te=L/64;for(let J of O){if(!J.position||!J.half||J.position.y+J.half.y<.22)continue;let he=(J.position.x+26)*W,ue=(J.position.z+54)*te,pe=Math.min(55,J.half.x*W+5),me=Math.min(72,J.half.z*te+6);_.save(),_.translate(he+J.half.y*W*.2,ue+J.half.y*te*.24),_.scale(pe,me);let le=_.createRadialGradient(0,0,.15,0,0,1);le.addColorStop(0,"rgba(22,37,65,.54)"),le.addColorStop(.58,"rgba(36,54,76,.29)"),le.addColorStop(1,"rgba(38,48,57,0)"),_.fillStyle=le,_.fillRect(-1,-1,2,2),_.restore()}})}for(let _ of[...M,...R])_.onBeforeCompile=L=>{L.uniforms.uFocusAmount=D,L.uniforms.uFocusRadius=T,L.uniforms.uLabLightmap=S,L.uniforms.uLabBakedStrength=A,L.vertexShader=`varying vec3 vLabPosition;
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
      `)},_.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let O=[],Y=[];function k(_,L,W,te,J,he,ue,pe=0,me=0,le=1,Se=1,ke=!1){let ve=new Ve(ke?new et(J,he,ue):nd(J,he,ue),M[pe]);ve.position.set(L,W,te),ve.rotation.x=me,ve.receiveShadow=!0,ve.castShadow=!0,n.add(ve);let we=new b(J/2,he/2,ue/2),We={mesh:ve,position:ve.position,quaternion:ve.quaternion,half:we,min:we.clone().negate(),friction:le,gravity:Se,name:_,type:pe,shape:Ti(we)};return O.push(We),We}let H=sy.map(({name:_,bounds:L,type:W=0,friction:te=.78,gravity:J=1})=>{let{xMin:he,xMax:ue,zMin:pe,zMax:me}=L;return k(_,(he+ue)/2,-.33,(pe+me)/2,ue-he,.66,me-pe,W,0,te,J)});for(let _ of Object.values(ly))for(let L of _)k(...L);let{xMin:j,xMax:U,zMin:ie,zMax:ee}=iy;k("But\xE9e arri\xE8re",0,1.35,ie+.4,U-j,2.7,.6,2),k("But\xE9e ouest",j+.3,1.05,(ie+ee)/2,.6,2.1,ee-ie,2),k("But\xE9e est",U-.3,1.05,(ie+ee)/2,.6,2.1,ee-ie,2);let{xMin:ce,xMax:be,zMin:Ce,zMax:De}=Fo.hills.bounds,Re=be-ce,re=De-Ce,se=16,xe=64,Pe=new en(Re,re,se,xe).rotateX(-Math.PI/2).translate(ce+Re/2,0,Ce+re/2),ye=Pe.attributes.uv;for(let _=0;_<ye.count;_++)ye.setXY(_,ye.getX(_)*Re/2.6,ye.getY(_)*re/2.6);let Z=Pe.attributes.position,fe;function v(_){if(fe===_)return;fe=_;let L=fe*.017;for(let W=0;W<Z.count;W++){let te=Z.getX(W),J=Z.getZ(W),he=Math.sin(Math.PI*Ne.clamp((te-ce)/Re,0,1)),ue=Math.min(1,(J-Ce)*.48,(De-J)*.48),pe=.93+.56*Math.sin(J*.36+L)+.32*Math.cos(te*.67+J*.26+L*1.4)+.19*Math.sin(J*.81+L*.67);Z.setY(W,Math.max(0,he*ue*pe))}Z.needsUpdate=!0,Pe.computeVertexNormals(),Pe.computeBoundingSphere()}v(ry);let F=new Ve(Pe,M[3]);F.userData.editorAssetId="lab-hill",F.receiveShadow=F.castShadow=!0,n.add(F);let B=(_,L)=>{let W=Ne.clamp((_-ce)/Re*se,0,se-1e-6),te=Ne.clamp((L-Ce)/re*xe,0,xe-1e-6),J=Math.floor(W),he=Math.floor(te),ue=W-J,pe=te-he,me=se+1,le=he*me+J,Se=Z.getY(le),ke=Z.getY(le+1),ve=Z.getY(le+me),we=Z.getY(le+me+1);return ue+pe<=1?Se+(ke-Se)*ue+(ve-Se)*pe:we+(ve-we)*(1-ue)+(ke-we)*(1-pe)};O.push({heightfield:!0,mesh:F,editorAssetId:"lab-hill",height:B,...Fo.hills.bounds,friction:.81,gravity:1});function z(_,L,W,te,J=1.45){let he=rd(384,72,(pe,me,le)=>{pe.fillStyle="#202a32",pe.fillRect(0,0,me,le),pe.fillStyle=te,pe.font="bold 31px system-ui",pe.textAlign="center",pe.fillText(_,me/2,48,me-20)}),ue=new Ve(new en(3.2,.6),new _t({map:he,side:an}));ue.position.set(L,J,W),n.add(ue),Y.push(ue)}for(let _ of Object.values(Fo)){z(_.name.toLocaleUpperCase("fr"),..._.sign,_.color);let{xMin:L,xMax:W,zMin:te,zMax:J}=_.bounds,he=new Da(new Qe().setFromPoints([new b(L,.025,te),new b(W,.025,te),new b(W,.025,J),new b(L,.025,J)]),new vi({color:_.color,transparent:!0,opacity:.72}));n.add(he),Y.push(he)}z("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),z("MURS HAUTS",3,-31,"#e8d2ff"),z("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let V=new gt({color:"#c8e6ed",metalness:1,roughness:.16}),X=new Ve(new Ft(.54,2),V);X.userData.editorAssetId="chrome-sphere",X.position.set(Gh.x,Gh.y,Gh.z),X.castShadow=!0,n.add(X);let ne=g.map((_,L)=>{let{x:W,z:te}=ay(L);return k("\xC9chantillon "+g[L][0],W,.325,te,.65,.65,.65,L,0,1,1,!0).mesh}),Q=new on(1,12).rotateX(-Math.PI/2),Ee=new _t({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Te(_){let L=new Ve(Q,Ee);return L.scale.setScalar(_),n.add(L),L}function I(_,L,W,te,J,he,ue,pe){let me=L>=3;e.shadowMap.enabled=me,u.castShadow=me,Ee.opacity=L===2?.17:.11,A.value=pe?.38+W*.04:0;let le=L>=9?2048:L>=6?1024:L>=4?512:256;u.shadow.intensity=.45+L*.055,u.shadow.radius=.65+L*.12;let Se=13+L*1.2;Object.assign(u.shadow.camera,{left:-Se,right:Se,top:Se,bottom:-Se}),u.shadow.camera.updateProjectionMatrix(),u.shadow.mapSize.x!==le&&(u.shadow.map?.dispose(),u.shadow.map=null,u.shadow.mapSize.set(le,le)),o.visible=J,ue!==E&&(E=ue,M.forEach((ve,we)=>{let We=ve.userData.texture??ve.map,q=w.has(we)?ue:Math.min(256,ue);if(We.image.width===q)return;let Me=document.createElement("canvas");Me.width=Me.height=q;let Ie=Me.getContext("2d");q>512?y(Ie,we,q):Ie.drawImage(C[we],0,0,q,q);let Be=new li(Me);Be.colorSpace=We.colorSpace,Be.wrapS=We.wrapS,Be.wrapT=We.wrapT,Be.repeat.copy(We.repeat);for(let _e of[ve,R[we]])_e.userData.texture=Be,_e.map=Be,_e.needsUpdate=!0;We.dispose()}));let ke=_>=4;for(let ve of O)ve.mesh?.isMesh&&!ve.zone&&(ve.mesh.material=ke?M[ve.type]:R[ve.type]);F.material=ke?M[3]:R[3];for(let ve=0;ve<ne.length;ve++)ne[ve].material=ke?M[ve]:R[ve];M.forEach((ve,we)=>{for(let We of[ve,R[we]])We.userData.texture||(We.userData.texture=We.map),We.map=he?We.userData.texture:null,We.color.set(he?"#ffffff":g[we][1]),We.needsUpdate=!0}),m=te?.21+W*.067:0,V.metalness=te?.95:.1,V.roughness=te?.13:.46,r.visible=_>=2,p(h)}return{boxes:O,floors:H,probe:X,display:ne,visual:I,shadow:Te,setTimeOfDay:p,centerShadows:x,get hillSeed(){return fe},setHillSeed:v,bakeLightmap:N,mapMaterial:(_,L)=>L>=4?M[_]:R[_],builtObjects:[...O.map(_=>_.mesh).filter(_=>_?.isObject3D),X,...Y],materials:[...M,...R],focus(_,L,W){D.value=_?L*.75:0,T.value=.07+W*.058}}}var Zv="R38.2",Fr=document.getElementById("game");Fr instanceof HTMLCanvasElement||(Fr=document.createElement("canvas"),Fr.id="game",Fr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(Fr));var ws=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),Ze;try{Ze=new lh({canvas:Fr,antialias:!ws,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}Ze.xr.enabled=!0;Ze.xr.setReferenceSpaceType("local-floor");Ze.shadowMap.type=el;Ze.shadowMap.autoUpdate=!1;var fv=-1/0;Ze.toneMapping=vu;Ze.toneMappingExposure=1.15;var At=new Qr;At.fog=new Ea("#a6d4ea",55,135);var mt=new Tt,_d=new Tt,Jt=new Xt(70,1,.035,210);mt.add(_d);_d.add(Jt);At.add(mt);var St=dv(At,Ze),OE=ov(Ze),hd=sv();At.add(hd);var zE=av(St.probe),G=Gy(ws),VE={...G};try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(G.stepVolume=n)}catch{}var Or=Zy();for(let n of["pointerdown","keydown"])addEventListener(n,Or.unlock,{passive:!0});var qo=jy(At),Fi=km(),Yp=0,pv=0,mv=0;addEventListener("error",n=>Fi.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Fi.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var vs={normal:new b,surface:null},dd=[.18,.17,.105].map(n=>({radius:n,position:new b})),um=new b(No.x,No.y,No.z);mt.position.copy(um);var jt=new b,Go=new b,Pt=new b,gv=new b,Kn=new b,vn=new b,xv=new b,Jo=new b,ir=new b,yv=new b,Ur=new b,vv=new b,Ul=new b,kE=.105,sd=new b,fd=!1,Pi=!1,hm=0,dm=null,Ol=[],fm=100,Ht=new b(0,1,0),cr=new qe,Mt=0,ar=0,Ts=0,ti=0,Ss=NaN,jv={armed:!0},Zp=0,_s=0,jp=0,od=0,Yo=0,Zo=0,jo=0,tn=G.quality,zl=72,Ri=0,Wt=!1,Jv="left",ct=new URLSearchParams(location.search).has("room")?5:0,pm=0,mm=0,gm=0,Ut=!0,_v=0,GE=[],ad=[],zr=St.boxes,HE=new Ft(1,0),$v=1+Math.floor(Math.random()*(uh.length-1)),Kv=hh($v),{hand:WE,fur:qE}=Kv;function XE(n,e,t,i,r,s,o,a){let l=new Ve(HE,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Md=Bp(localStorage),YE=Md.models.length?"|atelier-"+hs(JSON.stringify(Md)):"",Di=vy(Md)??Kv.createHead();Di.visible=!1;At.add(Di);var Xo=new b,pd=new qe,Mv=new b,ZE=new b,bv=new Qt(0,0,0,"YXZ"),im=new b,Jp=new b,sr=new ge,Sv=new qe,Gl=9.81,Qv=null,$p=new qe,wv=[null,null];function bd(){return .24+G.arms*.036}function jE(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Ne.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Ne.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Ne.lerp(s[2],i,r),n.skin.pose(s,!G.body)}var Ct=["left","right"].map(n=>{let e=ph(n,WE,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,At.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new b,quaternion:new qe},target:new b,gripPosition:new b,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new b,supportOffset:new b,hasSupport:!1}}),Br=new Kh(b,Ct,Yx),e_=mh(qE,Ct.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Ct){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Li=e_.mesh;At.add(Li);function JE(n,e){if(G.body){$p.copy(Li.quaternion).invert();for(let t=0;t<Ct.length;t++){let i=Ct[t];wv[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Li.position).applyQuaternion($p),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply($p))}e_.pose(wv,bd(),n,e,G.hands)}}var An=Hh(),t_=[0,1,2,3,4,5],n_=[7,8,9,10,11,12,13,14],jl=15,Tv=Ti(new b(.13,.088,.115)),$E=new et(.26,.176,.23),KE=new gt({color:"#536771",roughness:.36,metalness:.28});An[jl]={name:"Cam\xE9ra du spectateur",geo:$E,material:KE,shape:Tv,lowShape:Tv,mass:1.2};var{props:QE,animate:e2}=Wy(),t2=yy(Md).slice(0,36),xm=[],Hl=[];function i_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=wi(t??r.geo,i);e.push(An.length),An.push({...r,shape:s,lowShape:s})}}i_(QE,xm);i_(t2,Hl);var r_=[...t_,...n_,...xm,...Hl];An[8].properties={supportWhileHeld:!0};An[11].properties={supportWhileHeld:!0};function n2(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new b),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new b().setComponent(t,e.getComponent(t)*.49)}for(let n of An)n&&(n.supportAxis=n2(n));function i2(n){let e=new Ve(new Yt(.058,.074,.1,12).rotateX(Math.PI/2),new gt({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new Ve(new on(.048,12),new _t({color:"#7bd7ed",side:an}));t.position.z=-.203,n.add(t);let i=new Ve(new et(.045,.013,.012),new _t({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function s_(n,e=!1){let t=An[n];if(!t)return null;let i=new Ve(t.geo,e?Cl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===jl&&i2(i),i}var dt=null,bt=[],Av=[],Vr={held:null},Ko=new Map,or=0,r2=1,Fl=new qe,Wl=new qe,Nl=new b,Sd=new b,Ms=new b,o_=new b,a_=new b;function s2(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Sd.set(0,0,-1).applyAxisAngle(Ht,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(Nl.copy(n).addScaledVector(Sd,s),Nl.y+=.15,!Ml(n,Nl,Math.min(.2,t*.5),zr,o_,a_)&&!bt.some(o=>o.mesh.position.distanceToSquared(Nl)<(t+o.radius+.07)**2))return Nl}}return null}function Qo(n,e,t,i=!1){let r=An[n];if(!r)return null;if(!e&&(t?Ms.set(t.x,t.y,t.z):Ze.xr.isPresenting?Ms.copy(Pt):Jt.getWorldPosition(Ms),e=s2(Ms,t?.yaw??ar,r.shape.radius),!e))return i||ei("Aucun espace libre pour cet objet."),null;let s=s_(n);s.position.copy(e),At.add(s);let o=G.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:r2++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:G.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new b,angular:new b,offset:new b,relativeRotation:new qe,shadow:St.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===jl,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),bt.push(a),bl(a,St.boxes),Fi.record("object-spawn",{model:r.name,typeId:n,count:bt.length}),a}function l_(){for(let n of Ct)pi(n,!1);pi(Vr,!1);for(let n of Ko.values())pi(n,!1)}function Dd(){l_();for(let n of bt)if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();bt.length=0,Ko.clear()}function c_(){if(dt?.assetLayer)return;let n=new Set(dt?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);cy((e,t)=>{n.has(Lp[e])||Qo(e,t)})}c_();function pi(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+G.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function Jl(){l_();for(let n of bt)zd(n),n.frozen=!!n.spec.properties?.frozen}function ur(){Ss=NaN,ti=0,Ld.reset(),mt.position.copy(um),Mt=Ne.degToRad(dt.yaw),Ts=0,mt.rotation.y=Mt,jt.set(0,0,0),jv.armed=!0,Pi=!1,vs.normal.set(0,0,0),vs.surface=null,fd=!1,Br.reset(),Or.reset(),sr.set(0,0);for(let n of Ct)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,pi(n,!1)}Jl();function u_(){return G.auto||ws&&!Ze.xr.isPresenting}function wd(){return u_()?Math.min(G.shadowQuality,tn):G.shadowQuality}function ql(){return u_()?Math.min(G.lightQuality,tn):G.lightQuality}function Ni(){let n=G.texturePower;St.visual(tn,G.shadows?wd():0,ql(),G.reflections,G.bloom,G.textures,2**(n-1),G.lightmap),dt.refreshMaterials?.(),Ze.shadowMap.needsUpdate=!0,St.setTimeOfDay(je.remoteLight??G.timeOfDay-1),rm=Ed.slice(0,ql()>=8?3:ql()>=4?2:1),Dm.value=G.shaderMode-1;let e=Ze.xr.isPresenting&&Ze.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(G.focus&&!e,G.focusStrength,G.focusSize),Ze.toneMappingExposure=.58+G.exposure*.114,z_.value=.55+G.contrast*.09,V_.value=G.saturation*.2,k_.value=(G.warmth-5)*.022,Ze.xr.setFoveation(G.focus?Ne.clamp((G.focusStrength+1)*.105+(5-G.focusSize)*.028+(G.auto?(7-tn)*.045:0),0,1):0),Ze.xr.isPresenting||$l(),Ut=!0,Tm.redraw()}var Ev=0,Cv=0,Rv=0;function $l(){if(Ze.xr.isPresenting)return;let n=Math.max(1,Fr.clientWidth||innerWidth),e=Math.max(1,Fr.clientHeight||innerHeight),t=By(tn,devicePixelRatio,ws);t!==Rv&&(Ze.setPixelRatio(t),Rv=t),(n!==Ev||e!==Cv)&&(Ze.setSize(n,e,!1),Ev=n,Cv=e),Jt.aspect=n/e,Jt.fov=G.viewFov,Jt.updateProjectionMatrix()}addEventListener("resize",$l);globalThis.visualViewport?.addEventListener("resize",$l);function o2(n){Object.assign(G,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},ed[n]),tn=G.quality,Zo=jo=Yo=0,Ni()}var As=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",ur]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",Cm]]],["Rendu",[]]],ym=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function vm(){return ct===2?ym[pm][1]:ct===3?m_[mm][1]:ct===4?bm[gm][1]:As[ct][1]}function h_(n){ct=n,Ri=0,Ut=!0}var Td=null,d_=[],md=0,Vl=0,Ad=null,f_=!1,_m=0,Mm=0,p_={},Ed=Array.from({length:3},()=>{let n=new Ja("#ffffff",0,22,1.6);return n.visible=!1,At.add(n),{light:n,mesh:null,distance:1/0}}),rm=Ed,Cd=new b;function Pv(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(Cd);if(t>34**2)return;let i=rm[0];for(let r of rm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function a2(n){n?Jt.getWorldPosition(Cd):Cd.copy(Pt);for(let t of Ed)t.mesh=null,t.distance=1/0;if(n)je.forEachReplica(Pv);else if(G.objects)for(let t of bt)t.materialStyle===3&&Pv(t.mesh);let e=20+ql()*.75;for(let{light:t,mesh:i}of Ed)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function Kl(){Fi.record("capture",{mode:Ze.xr.isPresenting?"VR":"PC"});let n=Fi.snapshot(Ze.xr.isPresenting?"VR":"PC");Td={game:"Gorilla Lab",version:Zv.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:Ze.xr.isPresenting?"VR":"PC",sessionHadVR:f_,settings:{...G},qualityActive:tn,diagnostics:n,debugGeometry:{...qo.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:Ze.getPixelRatio()},haptics:Ct.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:Qv,audio:{volume:G.stepVolume,enabled:G.stepAudio,clipsPlayed:Or.count,state:Or.state},performance:{fps:_s,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:Ze.xr.isPresenting?Ad:null,previousVR:Ad,renderer:p_,terrainSeed:St.hillSeed,map:dt.active?{name:dt.name,pieces:dt.nodes}:null,objects:{physics:{...vl},total:bt.length,held:bt.filter(e=>e.owner).length,frozen:bt.filter(e=>e.frozen).length},cloud:{role:je.role,connected:je.connected,replicas:je.replicaCount,...je.stats},locomotion:{trackedFrames:Mm,contactFrames:_m,launchCount:hm,lastLaunch:dm,standingHeight:Number.isFinite(Ss)?Ss:null,viewOffset:ti}},document.querySelector("#download-report").disabled=!1,Ut=!0}function l2(){Td||Kl();let n=URL.createObjectURL(new Blob([JSON.stringify(Td,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=l2;document.querySelector("#capture-report").onclick=Kl;var ea=document.createElement("input");ea.id="report-note";ea.maxLength=500;ea.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";ea.setAttribute("aria-label","Sc\xE9nario du rapport");ea.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(ea);var Xl=document.createElement("p");Xl.setAttribute("aria-live","off");document.querySelector("#settings").after(Xl);As[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",Kl]);var c2=Array.from({length:Math.ceil(Hl.length/8)},(n,e)=>["Atelier"+(Hl.length>8?" "+(e+1):""),Hl.slice(e*8,e*8+8)]),m_=[["Basiques",t_],["D\xE9taill\xE9s",n_],["Anim\xE9s",xm],...c2].map(([n,e])=>[n,[...e.map(t=>[An[t].name,()=>Rm(t)]),["Tout retirer",Ud]]]);As.push(["Spawn",[]]);var bm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{dt.blank(),G.mapEdit=!0}],["Annuler placement",()=>dt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>dt.recenter(Pt.x,mt.position.y,Pt.z,ar)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{dt.reset(),G.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>Ov(!1)],["Utiliser comme t\xEAte",()=>Ov(!0)]]]];As.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",x_],["Tester vibration droite",y_],["\xC9couter un pas",v_],["Capturer un rapport",Kl]]]);function g_(n){let e=Ct.find(i=>i.side===n),t=e?.valid&&kp(e,.45,65);Fi.record("haptic-test",{side:n,supported:!!t}),ei(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function x_(){g_("left")}function y_(){g_("right")}function v_(){Or.unlock().then(()=>Or.play(G.stepVolume))}function __(){try{localStorage.setItem("gorilla-lab-step-volume",String(G.stepVolume))}catch{}}var u2=document.querySelector("#section"),ld=document.querySelector("#settings"),h2=document.querySelector("#readings"),Sm=[1,.75,.5,.25];function _n(n,e){if(Fi.record("setting",{key:n,step:e,previous:G[n]}),n==="mirrorQuality"){G.mirrorQuality=Ne.clamp(G.mirrorQuality+e,1,3),Ut=!0;return}if(n==="debugSpeed"){G.debugSpeed=Ne.clamp(G.debugSpeed+e,1,Sm.length),Br.reset(),Ut=!0;return}if(n==="stepVolume"){G.stepVolume=Ne.clamp(G.stepVolume+e,1,10),__(),Ut=!0;return}if(n==="viewFov"){G.viewFov=Ne.clamp(G.viewFov+5*e,50,105),$l(),Ut=!0;return}if(n==="vrFov"){G.vrFov=Ne.clamp(G.vrFov+5*e,55,100),Ut=!0;return}if(n==="shaderMode"){G.shaderMode=(G.shaderMode-1+e+Qh.length)%Qh.length+1,Dm.value=G.shaderMode-1,Ut=!0;return}if(n==="timeOfDay"){if(je.role==="player"){let i=((je.remoteLight??G.timeOfDay-1)+e+3)%3;je.sendAction({type:"world",mode:1,typeId:i})}else G.timeOfDay=(G.timeOfDay-1+e+3)%3+1;Ni();return}let t={mapMode:9,mapShape:5,mapMaterial:Hp.length,mapSurface:4,mapTurn:8,mapTexture:Jh.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];G[n]=(G[n]-1+e+i)%i+1,Ut=!0;return}if(n==="mapEdit"&&!G.mapEdit&&!dt.active&&dt.load(Qy(St.boxes)),n==="toolMode"){G.toolMode=(G.toolMode-1+e+ys.length)%ys.length+1,Ze.xr.isPresenting||ei("Outil \xB7 "+ys[G.toolMode-1]),Ut=!0;return}if(n==="preset"){let i=Object.keys(ed);G.preset=(G.preset-1+e+i.length)%i.length+1,o2(i[G.preset-1]);return}if(typeof G[n]=="boolean"?G[n]=!G[n]:G[n]=Ne.clamp(G[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Ct)i.valid=!1,i.surface=null;if(n==="quality"&&(G.auto=!1,tn=G.quality),n==="auto"&&!G.auto&&(tn=G.quality),n==="movement"||n==="collisions")for(let i of Ct)i.surface=null;if(n==="objects"&&!G.objects&&Jl(),n==="blasterActive"&&G.blasterActive&&(G.toolActive=!1),n==="toolActive"&&G.toolActive&&(G.blasterActive=!1),!G.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Ct)i.held?.toolHold&&pi(i,!1);Em(!1)}n==="preciseHitboxes"&&M_(),Ni()}function M_(){for(let n of bt)n.precise=G.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||bl(n,St.boxes)}function b_(){let n=(ct===2?ym:ct===4?bm:null)?.flatMap(e=>e[1])??vm();for(let[,e]of n)typeof e=="string"&&(G[e]=VE[e]);ct===6&&(__(),Br.reset()),ct===0&&ur(),ct===1&&(M_(),Jl()),ct===3&&Ud(),ct===2&&(tn=G.quality),Ni()}function Bl(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),ta(),Ut=!0},t}function S_(n){return n==="preciseHitboxes"?G[n]?"High":"Low":G[n]?"Actif":"Coup\xE9"}function wm(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][G[n]-1];if(n==="debugRange")return G[n]*5+" m";if(n==="debugBudget")return G[n]*1e3+" segments";if(n==="debugSpeed")return je.role?"\xD71 en ligne":"\xD7"+Sm[G.debugSpeed-1];if(n==="stepVolume")return G.stepVolume+"/10";if(n==="viewFov")return G.viewFov+"\xB0";if(n==="vrFov")return G.vrFov===100?"Natif":G.vrFov+" %";if(n==="mapTexture")return G[n]===1?"Aucune":Jh[G[n]-2];if(n==="terrainResolution")return[8,16,32,48][G[n]-1]+"\xB2";if(n==="shaderMode")return Qh[G.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=G[n],t=n==="shadowQuality"?wd():ql();return t===e?e+"/10":e+"/10 \xB7 "+t+(G.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][je.remoteLight??G.timeOfDay-1]:n==="mapMode"?R_[G.mapMode-1]:n==="mapShape"?v2[G.mapShape-1]:n==="mapSurface"?_2[G.mapSurface-1]:n==="mapMaterial"?Hp[G.mapMaterial-1]:n==="mapTurn"?(G.mapTurn-1)*45+"\xB0":n==="toolMode"?ys[G.toolMode-1]:n==="preset"?Object.keys(ed)[G.preset-1]:n==="texturePower"?[2**(G[n]-1),2**(G[n]-1)].join("\xD7"):G[n]}function sm(){return ct===2?ym:ct===3?m_:bm}function w_(){return ct===2?pm:ct===3?mm:gm}function T_(n){ct===2?pm=n:ct===3?mm=n:gm=n}function A_(n){return n===x_||n===y_?"Tester":n===Kl?"Capturer":n===v_?"\xC9couter":n===Dd||n===Ud?"Vider":n===ur||n===Cm?"R\xE9initialiser":ct===3?"Cr\xE9er":"Appliquer"}function ta(){if(u2.textContent=As[ct][0],E_.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===ct))),ld.replaceChildren(),d2.hidden=ct!==5,document.querySelector("#restore").hidden=ct===5,ct!==5){if(ct>=2&&ct<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),sm().forEach(([e],t)=>{let i=Bl(e,()=>T_(t));i.setAttribute("aria-pressed",String(w_()===t)),n.append(i)}),ld.append(n)}if(ct===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",ld.append(n)}for(let[n,e]of vm()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(Bl(A_(e),e)):typeof G[e]=="boolean"?i.append(Bl(S_(e),()=>_n(e,1))):i.append(Bl("\u2212",()=>_n(e,-1)),document.createTextNode(" "+wm(e)+" "),Bl("+",()=>_n(e,1))),t.append(i),ld.append(t)}}}var E_=document.querySelectorAll("[data-page]"),d2=document.querySelector("#cloud-access");E_.forEach((n,e)=>n.onclick=()=>{h_(e),ta()});document.querySelector("#restore").onclick=()=>{b_(),ta()};ta();function C_(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new li(s);a.colorSpace=pt;let l=new Ve(new en(t,i),new _t({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var fn=C_(640,652,.84,.86,At);fn.mesh.visible=!1;var Qn=C_(416,84,.32,.065,At);Qn.mesh.visible=!1;var Ho=new Xt(75,1,.07,20),Tn=new ll(new en(1.7,1.95),{color:16054015,textureWidth:ws?128:256,textureHeight:ws?128:256,clipBias:.004,multisample:0}),Iv=new b,cd=new b,Dv=new b,Lv=new b,Kp=new qe,f2=new b,p2=new qe().setFromAxisAngle(Ht,Math.PI),m2=new b(Pr.x,Pr.y,Pr.z);Tn.position.set(Pr.x,Pr.y,Pr.z);Tn.rotation.y=Math.PI;At.add(Tn);var Ql=new Ve(new et(1.8,2.03,.1),new hn({color:"#344650"}));Ql.userData.editorAssetId="lab-mirror";Ql.position.copy(Tn.position).z+=.064;At.add(Ql);var g2=Tn.onBeforeRender.bind(Tn);Tn.onBeforeRender=()=>{};Tn.visible=!1;var Wo=-1/0,Uv=null,Fv=0,om=0;function x2(n,e){if(om=0,Tn.visible=!1,!G.reflections||G.mirrorQuality===1){Wo=-1/0;return}if(Ho.position.copy(Pt),e){let u=e.transform.orientation;Ho.quaternion.set(u.x,u.y,u.z,u.w).premultiply(pd.setFromAxisAngle(Ht,Mt))}else Jt.getWorldQuaternion(Ho.quaternion);Dv.set(0,0,-1).applyQuaternion(Ho.quaternion);let t=null,i=3;function r(u,d,f){cd.subVectors(d,Pt);let h=cd.length();Iv.set(0,0,1).applyQuaternion(f),!(h>=i||cd.dot(Iv)>=-.15||cd.dot(Dv)<=.66*h)&&(t=u,i=h,Tn.position.copy(d),Tn.quaternion.copy(f))}dt.usesBuiltInMirror&&r(Ql,m2,p2);for(let{mesh:u}of dt.mirrors()){let{mirrorSize:d}=u.userData;Kp.copy(u.quaternion),Lv.copy(u.position).add(f2.set(0,0,d.d/2+.002).applyQuaternion(Kp)),r(u,Lv,Kp)}if(!t){Wo=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};Tn.scale.set(s/1.7,o/1.95,1),Tn.visible=!0,Uv!==t&&(Uv=t,Wo=-1/0);let a=G.mirrorQuality,l=a===3?ws||Ze.xr.isPresenting?256:768:128;if(Fv!==l&&(Tn.getRenderTarget().setSize(l,l),Fv=l,Wo=-1/0),n-Wo<(a===3?45:110))return;Wo=n,Ho.updateMatrixWorld(!0),Tn.updateMatrixWorld(!0),Di.visible=G.body;let c=performance.now();try{g2(Ze,At,Ho)}finally{Di.visible=!1}om=performance.now()-c}var Ui=new Yi,qn=new b,Nn=new b,ud=new b,Nv=new b,kl=null,gd=null,xd=null,y2=new Set(At.children),Tm=lv(At,St.boxes,{spawn:Rm,clear:Ud,resetPlayer:ur,resetObjects:Cm,quality:()=>tn+"/10",resolution:()=>G.resolution+"/10 \xB7 relancer VR",textureSize:()=>wm("texturePower"),qualityNext:()=>{G.quality>=10&&(G.quality=0),_n("quality",1)},resolutionNext:()=>{G.resolution>=10&&(G.resolution=0),_n("resolution",1)},textureNext:()=>{G.texturePower>=12&&(G.texturePower=0),_n("texturePower",1)},hitbox:()=>_n("preciseHitboxes",1),movement:()=>_n("movement",1)}),R_=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],v2=["Bloc","Rampe","Mur","Dalle","Terrain"],_2=["Normale","Glace","Caoutchouc","Lune"],Bv=new Map;function M2(){for(let n of dt.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d]),t=Bv.get(e);if(t===void 0){let r=zo(n.model);r.scale(n.w,n.h,n.d);let s=Al(n.model,new b(n.w,n.h,n.d)),o=wi(s);s.dispose(),t=An.length,An.push({id:n.model.id,name:n.model.name,geo:r,material:Dr(n.model),shape:o,lowShape:o,assetId:n.model.assetId??null,properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Ne.clamp(n.w*n.h*n.d*9,.18,12)}),Bv.set(e,t)}let i=Qo(t,new b(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Ne.degToRad(n.pitch),Ne.degToRad(n.yaw),Ne.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}dt=rv({scene:At,arena:St,boot:um,onReset:n=>{Dd(),ur(),Mt=Ne.degToRad(n),dt.builtIn&&c_(),M2()},onVisual:Ni,getLevel:()=>tn,defaultObjects:[...St.builtObjects,...At.children.filter(n=>!y2.has(n)),Ql]});var je=bx({scene:At,currentMap:()=>(dt.signature||"arena-r25-"+St.hillSeed)+YE,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=s_(n,!0);return e&&na(e.material),e},onAction:E2,onStatus:()=>{ct===5&&(Ut=!0)},onShot:n=>Ld.receiveShot(n,je.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??G.timeOfDay-1),Ut=!0,Ze.xr.isPresenting||ta()}});function Ov(n){let e=dt.modelPieces();if(!e.length||e.length>tr.parts){ei("Compose un mod\xE8le de 1 \xE0 "+tr.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=Bp(localStorage);if(t.models.length>=tr.models){ei("La collection de mod\xE8les est pleine.");return}let i=new b(1/0,1/0,1/0),r=new b(-1/0,-1/0,-1/0);for(let c of e)i.min(new b(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new b(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:G.modelGrab,frozen:G.modelFrozen,collidable:G.modelCollidable,supportWhileHeld:G.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Ky[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(Np,JSON.stringify(gs(t))),ei("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{ei("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var Qp=new Map;function b2(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][G.mapShape-1],e=Vo({detail:[8,16,32,48][G.terrainResolution-1],amplitude:(G.terrainAmplitude-1)*.34,frequency:.05+G.terrainFrequency*.025,seed:G.terrainSeed,grass:(G.terrainGrass-1)/9,shrub:(G.terrainShrub-1)/9}),t=G.mapTexture-2;return t>=0&&!Qp.has(t)&&Qp.set(t,Uy(t).toDataURL("image/webp",.83)),Il({...n,material:G.mapMaterial-1,yaw:G.mapShape===5?0:(G.mapTurn-1)*45,...Wp[Object.keys(Wp)[G.mapSurface-1]],texture:Qp.get(t)??null,terrain:G.mapShape===5||G.mapMode===9?e:null,brushRadius:.5+G.brushRadius*.5,brushStrength:G.brushStrength*.15})}function S2(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Ht,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Ht,Mt),dt.edit(qn,Nn,i,{mode:G.mapMode,piece:b2(),head:Pt,feet:mt.position.y}),i&&(Ut=!0)}function w2(n){if(!dt.builtIn||!n.valid||n.held||n.remoteHeld||Wt)return;let e=null;for(let t of Tm.targets)if(t.getWorldPosition(Nv),!(n.mesh.position.distanceToSquared(Nv)>.11**2)&&(t.worldToLocal(ud.copy(n.mesh.position)),Math.abs(ud.x)<t.userData.touchWidth*.5+.025&&Math.abs(ud.y)<.095&&Math.abs(ud.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function am(n,e,t){if(!dt.builtIn)return;Ui.set(n,e),Ui.far=5.5;let i=Ui.intersectObjects(Tm.targets,!1);Ui.far=1/0;let r=i[0];r&&(Es.visible=!0,Es.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),ta()))}var zv=new b,P_=new qe,Am=gh(At),Ld=Vy({scene:At,rig:mt,camera:Jt,arena:St,objects:bt,spectator:je}),OI=Am.mesh,yd=new b,lr=new qe,Rd=new b,$o={mode:0,position:Rd,quaternion:lr,end:yd},Vv=new b,T2=new b,kv=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Pd=new b,A2={position:Rd,quaternion:lr,pressure:[.1,.66,.08]},em=new b,Id=new qe;function Em(n){Vr.held&&pi(Vr,n)}function I_(n,e){if(je.role==="pc"){ei("Rejoins le salon en joueur pour modifier les objets.");return}if(je.role!=="player"){e();return}je.sendAction({type:"world",mode:3,typeId:n})||ei("Attends la connexion \xE0 l\u2019h\xF4te.")}function Ud(){I_(0,Dd)}function Cm(){I_(1,Jl)}function Rm(n,e=null){if(G.objects=!0,je.role==="pc"){ei("Commence par rejoindre le salon en joueur.");return}je.role==="player"?je.sendAction({type:"spawn",typeId:n})||ei("Attends la connexion \xE0 l\u2019h\xF4te."):Qo(n,e)}function E2(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(G.timeOfDay=n.typeId+1,Ni()):n.mode===3&&[Dd,Jl][n.typeId]?.();return}if(n.type==="spawn"){r_.includes(n.typeId)&&(G.objects=!0,Qo(n.typeId,null,e));return}let t=bt.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=Ko.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},Ko.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?je.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),pi(o,!0)}return}if(!G.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Ms.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?Vh(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Ml(l,t.mesh.position,.01,zr,o_,a_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}Pm(t,s,o,Ne.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,Wl.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(Wl))}}function C2(n){if(Ze.xr.isPresenting)for(let t of Ct)t.valid&&t.held&&tm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of Ko){let r=je.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){pi(i,!1),Ko.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Ms.copy(s?.position??r.avatar?.tool?.position??r),Sd.set(0,0,-1).applyQuaternion(i.controllerRotation),tm(o,Ms,Sd,i.controllerRotation,n)}let e=Vr.held;e&&(Jt.getWorldPosition(Pd),Jt.getWorldDirection(zv),Jt.getWorldQuaternion(lr),tm(e,Pd,zv,lr,n))}function tm(n,e,t,i,r){n.toolHold?em.copy(e).addScaledVector(t,n.toolDistance):em.copy(n.offset).applyQuaternion(i).add(e),Id.multiplyQuaternions(i,n.relativeRotation),Zx(n,em,Id,zr,r)}function D_(n){return n.customMaterial||(n.mesh.material=Cl(n.mesh.material),n.customMaterial=!0,na(n.mesh.material)),n.mesh.material}function R2(n){let e=D_(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function L_(n,e,t){Ui.set(n,e),Ui.far=9;let i=Ui.intersectObjects(t,!1)[0];return Ui.far=1/0,yd.copy(n).addScaledVector(e,i?.distance??9),Ml(n,yd,.006,zr,Vv,T2)?(yd.copy(Vv),null):i}function Pm(n,e,t,i){if(e===1){if(t?.held){t===Vr?Em(!0):pi(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??lr;n.relativeRotation.multiplyQuaternions(P_.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(At.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();bt.splice(bt.indexOf(n),1)}else if(e===4&&!n.protected){Pd.copy(n.mesh.position).addScaledVector(Ht,n.radius*2+.08);let r=Qo(n.netType,Pd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=Cl(n.mesh.material),r.customMaterial=!0,na(r.mesh.material)),bl(r,St.boxes))}else if(e===5){let r=D_(n),s=kv[n.paint++%kv.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,R2(n));Ut=!0}}var Nr=[];function U_(n,e,t,i){if(!G.objects)return;let r=je.role==="player";if(Nr.length=0,r)je.forEachReplica(a=>Nr.push(a));else for(let a of bt)!a.owner&&a.mesh.visible&&Nr.push(a.mesh);let s=L_(n,e,Nr);if($o.mode=G.toolMode,i?(Rd.copy(i.mesh.position),lr.copy(i.controllerRotation)):(Jt.getWorldQuaternion(lr),Rd.set(.16,-.17,-.43).applyQuaternion(lr).add(n)),Am.update($o),!t)return;if(r){if(G.toolMode===1&&or)je.sendAction({type:"release",objectId:or}),or=0;else if(s){let a=s.object.userData.netId;je.sendAction({type:"tool",mode:G.toolMode,objectId:a})&&G.toolMode===1&&(or=a)}return}let o=s&&bt.find(a=>a.mesh===s.object);Pm(o,G.toolMode,i??Vr,s?Ne.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function P2(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;qn.set(o.x,o.y-ti,o.z).applyAxisAngle(Ht,Mt).add(mt.position),cr.set(a.x,a.y,a.z,a.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Ht,Mt),U_(qn,Nn,r,i)}function I2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Ht,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Ht,Mt),am(qn,Nn,i)}var Es=XE(At,new _t({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Es.visible=!1;var lm=[],bs=null;function Gv(){let n=fn.ctx;lm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+Zv,25,42),n.font="20px system-ui",n.fillText(_s+" FPS   \xB7   Q "+tn+"/10   \xB7   "+(G.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",lm.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/As.length);if(As.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>h_(l),ct===l?"#586d53":"#334b58")),ct===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(je.caption,25,145,587),n.fillText("Salons publics",25,190),ul.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>je.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>je.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>je.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>je.leave()),e(325,579,287,44,"Fermer",()=>Wt=!1),fn.texture.needsUpdate=!0;return}let i=ct>=2&&ct<=4;i&&sm().forEach(([a],l)=>{let c=w_()===l,u=Math.min(144,Math.floor(586/sm().length)-4);e(25+l*(u+4),114,u,38,a,()=>T_(l),c?"#546947":"#263d49")});let r=vm(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));Ri=Math.max(0,Math.min(Ri,o-1)),r.slice(Ri*s,(Ri+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,A_(l),l):typeof G[l]=="boolean"?e(406,u,206,36,S_(l),()=>_n(l,1),G[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>_n(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(wm(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>_n(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{Ri=(Ri+o-1)%o,Ut=!0}),e(432,533,180,35,"Suivant",()=>{Ri=(Ri+1)%o,Ut=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(Ri+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",b_),e(325,579,287,44,"Fermer",()=>Wt=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(Im||(ct===6?"v "+jt.length().toFixed(2)+" m/s | g "+Gl.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":ct===4&&dt.status?dt.status.slice(0,64):Td?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),fn.texture.needsUpdate=!0}function D2(n){Wt=!Wt,Wt&&(Jv=n,Mv.set(0,0,-1).applyAxisAngle(Ht,ar),fn.mesh.position.copy(Pt).addScaledVector(Mv,1.25),fn.mesh.position.y+=.08,fn.mesh.lookAt(Pt),fn.mesh.updateMatrixWorld(!0)),Ut=!0}function L2(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;qn.set(s.x,s.y-ti,s.z).applyAxisAngle(Ht,Mt).add(mt.position),cr.set(o.x,o.y,o.z,o.w),Nn.set(0,0,-1).applyQuaternion(cr).applyAxisAngle(Ht,Mt),Ui.set(qn,Nn);let a=Ui.intersectObject(fn.mesh)[0];if(a&&(Es.visible=!0,Es.position.copy(a.point).addScaledVector(Nn,-.012),i)){let l=a.uv.x*fn.w,c=(1-a.uv.y)*fn.h;lm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Ut=!0}}var Fd=Ny(),{held:Ii,pressed:rr}=Fd,F_=ky(Ze.domElement,document.querySelector("#touch-fire")),Hv=document.querySelector("#game-settings"),N_=document.querySelector("#open-settings"),cm=document.querySelector("#game-hint"),vd=0;function ei(n){cm.textContent=n,cm.hidden=!1,vd=performance.now()+2400,Im=n,Ut=!0}var Im="";function Nd(n){let e=n??!Hv.hidden;Hv.hidden=e,N_.hidden=!e,e&&Ze.domElement.focus()}N_.onclick=()=>Nd(!1);document.querySelector("#close-settings").onclick=()=>Nd(!0);var Yl=Fy({canvas:Ze.domElement,enabled:()=>!Ze.xr.isPresenting,onLook:(n,e,t)=>{Mt-=n*t,Ts=Ne.clamp(Ts-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&rr.add(e)},onMenu:()=>Nd()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!Ze.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||Nd();return}n.code==="Space"&&n.preventDefault(),Fd.down(n.code,n.repeat),n.code==="KeyR"&&ur()}});addEventListener("keyup",n=>Fd.up(n.code));addEventListener("blur",()=>{Fd.clear(),Yl.clear(),F_.clear()});function U2(n,e){if(!G.objects)return!1;let t=je.role==="player";if(t&&or)return je.sendAction({type:"release",objectId:or}),or=0,!0;if(Vr.held)return Em(!0),!0;if(Nr.length=0,t)je.forEachReplica(r=>Nr.push(r));else for(let r of bt)!r.owner&&r.mesh.visible&&Nr.push(r.mesh);let i=L_(n,e,Nr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;je.sendAction({type:"hold",objectId:r})&&(or=r)}else Jt.getWorldQuaternion(lr),Pm(bt.find(r=>r.mesh===i.object),1,Vr,Math.max(.75,i.distance));return!0}var nm=[];function B_(){return nm.length=0,je.forEachReplica(n=>{let e=n.userData.netType;if(!An[e]||An[e].properties?.collidable===!1||n.userData.held)return;let t=An[e],i=G.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=G.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},nm.push(r)}),nm}function F2(){je.role!=="vr"||!je.remoteSpectator||bt.some(n=>n.netType===jl)||Qo(jl,null,null,!0)}var Zl=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{Zl.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});Zl.onclick=async()=>{let n;Or.unlock();try{Zl.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),Ze.xr.setFramebufferScaleFactor(.45+G.resolution*.055),await Ze.xr.setSession(n),Ni(),zl=n.frameRate||72,Ol=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=Ol.includes(120)?120:Ol.find(t=>t>=100)??Ol.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}zl=n.frameRate||zl,fm=Math.min(100,zl),G.auto&&(tn=Math.min(tn,4),Yo=Zo=jo=0),d_=[],Fi.reset(),md=0,Vl=0,_m=Mm=hm=0,dm=null,f_=!0,Ad=null,Ss=NaN,ti=0,ur(),Ni(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),Zl.disabled=!1,document.querySelector("#status").textContent=e.message}};Ze.xr.addEventListener("sessionend",()=>{Zl.disabled=!1,Wt=!1,fn.mesh.visible=!1,Qn.mesh.visible=!1,document.body.classList.remove("immersive"),ur(),$l()});function O_(n){if(!dt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(dt.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function Wv(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(je.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),Wt||!e||n.grip||!G.objects)return;let i=null,r=.15;if(je.forEachReplica(s=>{if(s.userData.held)return;let o=An[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=Vh(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;je.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function N2(n,e,t){let i=[...n.session.inputSources];for(let r of Ct){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&G.hands&&!G.body,!o){je.role==="player"&&Wv(r,!1),r.valid=!1,r.surface=null,pi(r,!1);continue}Yy(r,o.transform,ti,Mt,mt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(Fl.copy(r.controllerRotation),jE(r,s.gamepad?.buttons??[],t),je.role==="player")Wv(r,a);else if(!Wt&&a&&!r.grip&&G.objects&&!r.held){let h=null,p=.15;for(let x of bt){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let m=Vh(r.target,x);m<p&&(p=m,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,Wl.copy(Fl).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(Wl),h.relativeRotation.multiplyQuaternions(Wl,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&pi(r,!Wt),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Id.multiplyQuaternions(Fl,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Id),Jo.copy(l.offset).applyQuaternion(Fl);let h=r.supportOffset.dot(Jo);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(Jo),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(P_.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Ht,Mt):r.aimDirection.set(0,0,-1).applyQuaternion(Fl)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&D2(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!Wt&&_n("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&G.toolActive&&!Wt&&_n("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if(Wt){let h=f&&!r.trigger;(h||!bs||!bs.click&&r.side!==Jv)&&(bs={source:s,click:h})}else!Wt&&r.side==="right"&&G.mapEdit?xd={source:s,click:f&&!r.trigger}:!Wt&&r.side==="right"&&G.toolActive?gd={source:s,hand:r,click:f&&!r.trigger}:!Wt&&!G.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(kl={source:s,click:f&&!r.trigger});r.trigger=f}}function qv(n,e){let t=n?-Xo.y:Math.max(0,-Math.sin(Ts)),i=0,r=0,s=0;if(n){Sv.setFromAxisAngle(Ht,-ar);for(let u of Ct)u.valid&&(Jp.copy(u.gripPosition).sub(Pt).applyQuaternion(Sv),i+=Jp.x-(u.side==="left"?-.2:.2),r+=Jp.z+.24,s++)}let o=s?Ne.clamp(-r/s,-.35,.45):0,a=s?Ne.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?Wm(t,o):-.31*Ne.smoothstep(t,.2,.92);sr.x=Ne.lerp(sr.x,c,l),sr.y=Ne.lerp(sr.y,-a*.62,l),bv.set(sr.x,ar,sr.y,"YXZ"),Li.quaternion.setFromEuler(bv)}function B2(n,e,t,i,r=i){let s=!!t,o=.43+G.size*.088;if(s){let f=t.transform.position;Ss=Hm(Ss,f.y),ti=Ne.clamp(Ss-o,-.65,1.7),_d.position.y=-ti,Kn.set(f.x,f.y-ti,f.z);let h=[...n.session.inputSources].find(m=>m.handedness==="right"),p=zm(h?.gamepad),x=Vm(jv,p,{menu:Wt,allowMenu:G.snapWithMenu});x&&(Fi.record("snap-turn",{direction:x,menu:Wt}),vn.copy(Kn).applyAxisAngle(Ht,Mt),Mt-=x*Math.PI/4,gv.copy(Kn).applyAxisAngle(Ht,Mt),mt.position.add(vn.sub(gv)),Br.reset(),fd=!1)}else _d.position.y=0,Kn.set(0,o,0),Jt.position.copy(Kn),Jt.rotation.set(Ts,0,0,"YXZ");if(Pt.copy(Kn).applyAxisAngle(Ht,Mt).add(mt.position),s){let f=t.transform.orientation;pd.set(f.x,f.y,f.z,f.w),Xo.set(0,0,-1).applyQuaternion(pd),Xo.x**2+Xo.z**2>.018&&(ar=Mt+Math.atan2(-Xo.x,-Xo.z))}else ar=Mt;let a=O_(Pt),l=9.81*(G.gravity/5)*(a?.gravity??1);Gl=l,yv.copy(mt.position);let c=je.role==="player"?B_():bt;if(s){N2(n,e,r),qv(!0,r),Ct.some(f=>f.valid)&&Mm++,ad.length=0;for(let f of zr)ad.push(f);if(G.collisions&&G.objects)for(let f of c)f.handCollider&&!f.owner&&ad.push(f.handCollider);Br.move({head:Pt,dt:i,inputDt:r,gravity:l,settings:G,boxes:ad,velocity:jt,movement:Go,reach:bd()*2+.16});for(let f of Ct)zy(f,G.stepHaptics,r,.08+G.stepHapticStrength*.04,40)}else{qv(!1,r),jt.y-=l*i;let f=Number(Ii.has("KeyD"))-Number(Ii.has("KeyA")||Ii.has("KeyQ"))+Yl.movement.x,h=Number(Ii.has("KeyS"))-Number(Ii.has("KeyW")||Ii.has("KeyZ"))+Yl.movement.z,p=Ii.has("ShiftLeft")||Ii.has("ShiftRight");ir.set(f,0,h).clampLength(0,1).applyAxisAngle(Ht,Mt).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Pi?13:4));jt.x=Ne.lerp(jt.x,ir.x,x),jt.z=Ne.lerp(jt.z,ir.z,x);let g=(Yl.consumeJump()||rr.delete("Space"))&&Pi,y=vs.normal,w=!g&&Pi&&y.y>=.62&&(vs.surface?.friction??0)>=.45;g?jt.y=3.1+G.jump*.18:w&&(jt.y=-(jt.x*y.x+jt.z*y.z)/y.y),Go.copy(jt).multiplyScalar(i),w&&Go.addScaledVector(y,-l*i*i)}if(G.collisions&&fd&&(Jo.copy(Pt).add(Go),Ml(vv,Jo,kE,zr,vn,Ul)&&ir.subVectors(Jo,vn).dot(Ul)<0&&(Go.copy(vn).sub(Pt),qm(jt,Ul))),mt.position.add(Go),Pt.copy(Kn).applyAxisAngle(Ht,Mt).add(mt.position),Pi=!1,vs.normal.set(0,0,0),vs.surface=null,G.collisions){sd.set(0,-1,0).applyQuaternion(Li.quaternion),sd.y=0,sd.addScaledVector(ZE.set(0,0,1).applyAxisAngle(Ht,ar),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,Kn.y*.57):Kn.y,{radius:p}=dd[f];if(vn.set(Pt.x,mt.position.y+h,Pt.z),f<2&&vn.add(Xm(s,sd,Math.max(0,Kn.y-h),ir)),xv.copy(vn),Pi=Ip(vn,p,St.boxes,jt,0,3+G.grip,i,f===0?vs:null)||Pi,G.objects)for(let x of c)x.blocksPlayer&&!x.owner&&ny(vn,p,x,jt,Ul)&&Ul.y>.6&&(Pi=!0);Ip(vn,p,St.boxes,jt,0,3+G.grip,i),ir.subVectors(vn,xv),mt.position.add(ir),Pt.add(ir);for(let x=0;x<f;x++)dd[x].position.add(ir);dd[f].position.copy(vn)}}if(Ur.subVectors(mt.position,yv),Or.update({dt:r,inVR:s,hands:Ct,grounded:Pi,travel:Math.hypot(Ur.x,Ur.z),volume:G.stepVolume,enabled:G.stepAudio}),s){let f=Br.finish(Ur,jt);f.contacts&&_m++,f.launched&&(hm++,dm={handSpeed:f.launchSpeed,velocity:jt.toArray(),t:performance.now()})}(dt.active?mt.position.y<-24||Math.abs(mt.position.x)>155||Math.abs(mt.position.z)>155:mt.position.y<-9||Math.abs(mt.position.x)>33||mt.position.z<-57||mt.position.z>13)&&(ur(),Pt.copy(Kn).applyAxisAngle(Ht,Mt).add(mt.position)),vv.copy(Pt),fd=!0,mt.rotation.y=Mt,s&&Jt.position.set(0,0,0);for(let f of Ct)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Ur,f.surface?0:1),f.gripPosition.add(Ur)),s||(f.mesh.visible=!1);let u=.72+G.size*.05,d=bd()*2*(2/3)/.82;Li.visible=G.body,Di.position.copy(Pt),s?Di.quaternion.copy(pd).premultiply(cr.setFromAxisAngle(Ht,Mt)):Di.quaternion.setFromEuler(new Qt(Ts,Mt,0,"YXZ")),im.set(0,-.145,.045).applyQuaternion(Di.quaternion).add(Pt),Li.position.set(0,.46*d,.04*u).applyQuaternion(Li.quaternion).negate().add(im),JE(u,d),mt.updateMatrixWorld(!0),Jt.updateWorldMatrix(!0,!1)}function O2(n,e){if(od+=n,jp++,Yo+=n,od<1||(_s=Math.round(jp/od),jp=0,od=0,Ut=!0,h2.textContent=_s+" FPS \xB7 qualit\xE9 "+tn+"/10 \xB7 "+(G.auto?"auto":"manuel"),!G.auto||Yo<5))return;Yo=0;let t=e?Math.min(100,Ze.xr.getSession()?.frameRate||zl):60;e&&(fm=t),Zo=_s<t-4?Zo+1:0,jo=_s>=t-1?jo+1:0;let i=Ne.clamp(tn+(Zo>=1?-1:jo>=2?1:0),1,10);i!==tn&&(tn=i,Yo=Zo=jo=0,Ni())}St.bakeLightmap();var z_={value:1},V_={value:1},k_={value:0},Dm={value:0},Xv=new WeakSet;function na(n){if(Array.isArray(n)){for(let i of n)na(i);return}if(!n||Xv.has(n))return;Xv.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:z_,uPhotoSaturation:V_,uPhotoWarmth:k_,uLabShader:Dm}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)na(n);At.traverse(n=>{n.isMesh&&![fn.mesh,Qn.mesh,Es].includes(n)&&na(n.material)});Ni();var Yv=new URLSearchParams(location.search);if(Yv.has("map"))dt.loadURL(Yv.get("map"));else try{let n=localStorage.getItem(Dl);n&&dt.load(n)}catch(n){dt.inform(n.message)}function z2(){let n=Ze.xr.isPresenting;return{head:Di.quaternion,hands:n?Ct.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,$o.mode?A2:null],height:Kn.y,armSpan:bd()*2,light:G.timeOfDay-1,color:$v,tool:$o.mode?$o:null,gun:Ld.gun}}Ze.setAnimationLoop((n,e)=>{let t=Zp?Math.max(0,(n-Zp)/1e3):.014;Zp=n;let i=Math.max(1e-4,Math.min(.035,t)),r=je.role?1:Sm[G.debugSpeed-1],s=i*r,o=Ze.xr.isPresenting,a=Ze.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;if(e2(n*.001),vd&&n>vd&&(cm.hidden=!0,vd=0,Im=""),Es.visible=!1,Am.hide(),$o.mode=0,zr=G.collisions?St.boxes:GE,bs=null,kl=null,gd=null,xd=null,dt.clearGhost(),fn.mesh.visible=!1,!o&&je.role==="pc"){Li.visible=!1;for(let y of Ct)y.mesh.visible=!1}else B2(e,a,l,s,i);let c=!o&&je.role==="pc",u=c||je.role==="player";if(je.role!=="player"){or=0;for(let y of Ct)y.remoteHeld=0}u||(C2(s),F2()),Yp=0;for(let y of bt){y.mesh.visible=G.objects&&!u;let{x:w,y:M,z:C}=y.mesh.position;if(Gm(y.mesh.position,dt.active)&&(y.owner||zd(y)),y.shadow.visible=!u&&G.shadows&&wd()<3&&G.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:R,z:D}=y.mesh.position,T=St.boxes.find(A=>A.heightfield&&R>=A.xMin&&R<=A.xMax&&D>=A.zMin&&D<=A.zMax),S=T?T.height(R,D):0;y.shadow.position.set(R,S+.006,D)}}if(!u&&G.objects){let y=performance.now();ey(bt,St.boxes,s,9.81*G.gravity/5,.12+G.bounce*.064,O_),Yp=performance.now()-y}if(o&&!Wt&&je.role!=="pc")for(let y of Ct)w2(y);if(St.probe.rotation.y+=s*.29,O2(Math.min(.3,t),o),fn.mesh.visible=o&&Wt,fn.mesh.visible&&Ut&&Gv(),fn.mesh.visible&&bs)L2(e,a,bs.source,bs.click);else if(o&&xd)S2(e,a,xd);else if(o&&gd)P2(e,a,gd);else if(o&&kl)I2(e,a,kl.source,kl.click);else if(!o&&!c){Jt.getWorldPosition(qn),Jt.getWorldDirection(Nn),rr.delete("KeyX")&&_n("blasterActive",1),rr.delete("KeyG")&&(_n("toolActive",1),G.toolActive&&ei("Outil \xB7 "+ys[G.toolMode-1])),rr.delete("KeyT")&&_n("toolMode",1);let y=rr.delete("KeyE");G.toolActive?U_(qn,Nn,y,null):y&&!U2(qn,Nn)?am(qn,Nn,!0):!y&&!u&&am(qn,Nn,!1),rr.delete("KeyF")&&(G.objects=!0,Rm(r_[0]))}let d=Qn.mesh.visible;if(Qn.mesh.visible=o&&!Wt&&Ct[0].valid,Qn.mesh.visible&&(Qn.mesh.position.copy(Ct[0].mesh.position).y+=.12,Qn.mesh.lookAt(Pt)),(Ut||n-_v>1100||Qn.mesh.visible&&!d)&&(Ut=!1,_v=n,Wt&&Gv(),Qn.mesh.visible)){let y=Qn.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(_s+" FPS     Q "+tn+"/10",17,32),y.font="20px system-ui",y.fillText(G.mapEdit?"\xC9dition : "+R_[G.mapMode-1]:G.blasterActive?"Pistolet : maintenir la g\xE2chette":G.toolActive?"Tool Gun : "+ys[G.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),Qn.texture.needsUpdate=!0}Ld.update({frame:e,space:a,inVR:o,remoteWorld:u,dt:s,yaw:Mt,drop:ti,rightHand:Ct[1],enabled:G.blasterActive&&!c&&!Wt&&!G.mapEdit,flatFiring:F_.held||Ii.has("KeyJ")}),je.update({inVR:o,time:n,dt:i,position:Pt,yaw:c?Mt:ar,pitch:Ts,camera:Jt,rig:mt,keys:Ii,actions:rr,flat:Yl,avatar:z2,bodies:G.objects?bt:Av}),rr.clear();let f=performance.now();qo.update({settings:G,boxes:zr,bodies:u?G.debugHitboxes?B_():Av:bt,hands:Ct,locomotion:Br,velocity:jt,head:Pt,neck:im,body:Li.position,proxies:dd,gravity:Gl,appliedMove:Ur,playerActive:!c,inVR:o,viewQuaternion:Di.quaternion}),pv=performance.now()-f,!c&&n-Vl>350&&(Qv={simulationScale:r,gravity:Gl,velocity:jt.toArray(),grounded:Pi,torsoDegrees:[sr.x,sr.y].map(Ne.radToDeg),hands:o?Br.hands.map(({hand:y,normal:w,offset:M})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:vn.copy($i).applyQuaternion(y.mesh.quaternion).add(y.target).add(Ur).distanceTo(y.gripPosition),palmCenter:vn.copy($i).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:vn.copy(y.mesh.position).add(M).toArray(),normal:y.surface?w.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),a2(u),St.centerShadows(Cd);let h=25+(10-wd())*(o?7:4);Ze.shadowMap.enabled&&n-fv>=h&&(Ze.shadowMap.needsUpdate=!0,fv=n),x2(n,l);let p=performance.now(),x=o&&G.post,m=o&&G.rayTrace;zE(m,bt);let g=G.vrFov/100;if(!x||!OE.render(At,Jt,{bloom:G.bloom,visibleField:g})){hd.material.uniforms.visibleField.value=g,hd.visible=o&&g<1;try{Ze.render(At,Jt)}finally{hd.visible=!1}}if(mv=performance.now()-p,Fi.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:Yp,debugCpuMs:pv,mirrorCpuMs:om,renderSubmissionCpuMs:mv,objects:bt.length,moving:bt.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:qo.stats.segments}),n-Vl>350&&(Xl.hidden=!(G.debugForces||qo.stats.truncated),Xl.hidden||(Xl.textContent="Vitesse joueur : "+jt.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+Gl.toFixed(2)+" m/s\xB2 \xB7 Segments : "+qo.stats.segments+(qo.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),d_[md]=t*1e3,md=(md+1)%720,n-Vl>350){Vl=n;let{calls:y,triangles:w,lines:M,points:C}=Ze.info.render;p_={calls:y,triangles:w,lines:M,points:C,textures:Ze.info.memory.textures},o&&(Ad={refreshHz:Ze.xr.getSession()?.frameRate??null,targetFps:fm,supportedHz:Ol.slice(),foveation:Ze.xr.getFoveation()??null,visualEffects:{post:x,bloom:x&&G.bloom,rayTrace:m},eyeViewports:Ze.xr.getCamera().cameras.map(E=>({width:E.viewport?.z??null,height:E.viewport?.w??null}))})}});})();
