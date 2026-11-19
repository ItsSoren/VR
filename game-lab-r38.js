(()=>{function cg(n){let e=n?.axes,t=e?.length>=4?e[2]:e?.[0];return Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0}function ug(n,e,{menu:t=!1,allowMenu:i=!0}={}){return t&&!i?(n.armed=!1,0):Math.abs(e)<.25?(n.armed=!0,0):Math.abs(e)<.6||n.armed===!1?0:(n.armed=!1,Math.sign(e))}function hg(n=240){let e=[],t=[];return{sample(i){e.push({...i}),e.length>n&&e.shift()},record(i,r={}){t.push({time:new Date().toISOString(),type:i,...r}),t.length>40&&t.shift()},reset(){e.length=0},snapshot(i){let r=i?e.filter(a=>a.mode===i):e,s=a=>r.map(l=>l[a]).filter(Number.isFinite).sort((l,c)=>l-c),o=a=>{let l=s(a);return{samples:l.length,median:l.length?l[Math.floor((l.length-1)*.5)]:null,p95:l.length?l[Math.floor((l.length-1)*.95)]:null,max:l.at(-1)??null}};return{frames:r.map(a=>({...a})),events:t.map(a=>({...a})),metrics:{frameMs:o("frameMs"),physicsCpuMs:o("physicsCpuMs"),debugCpuMs:o("debugCpuMs"),mirrorCpuMs:o("mirrorCpuMs"),renderSubmissionCpuMs:o("renderSubmissionCpuMs")},gpuMs:null,gpuNote:"GPU time is not measured; renderSubmissionCpuMs measures CPU submission only."}}}}function of(n){n.mesh.position.copy(n.start),n.startRotation?n.mesh.quaternion.copy(n.startRotation):n.mesh.quaternion.identity(),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.sleeping=!1,n.quietTime=0,n.beforePhysics?.copy(n.mesh.position)}function dg(n,e){let{x:t,y:i,z:r}=n;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(r)||(e?i<-24||Math.abs(t)>155||Math.abs(r)>155:i<-8||Math.abs(t)>28||r<-57||r>13)}function fg(n,e){return!Number.isFinite(e)||e<.1?n:Number.isFinite(n)?Math.max(n,e):e}function pg(n,e){let t=Math.max(0,Math.min(1,(n-.2)/.72));return-1.12*t*t*(3-2*t)-e*.45}function mg(n,e){let t=n.dot(e);t<0&&n.addScaledVector(e,-t)}function gg(n,e,t,i){return i.copy(e).multiplyScalar(n?t:0)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var n0=0,jf=1,i0=2;var xl=1,r0=2,Di=3,_i=0,In=1,mn=2,ar=0,cs=1,ci=2,Jf=3,Qf=4,s0=5,Pr=100,o0=101,a0=102,l0=103,c0=104,u0=200,h0=201,d0=202,f0=203,eu=204,tu=205,p0=206,m0=207,g0=208,x0=209,y0=210,v0=211,_0=212,b0=213,M0=214,Pu=0,Du=1,Lu=2,us=3,Uu=4,Fu=5,Nu=6,Bu=7,Ou=0,S0=1,w0=2,lr=0,T0=1,A0=2,E0=3,zu=4,C0=5,R0=6,I0=7;var Kf=300,ys=301,vs=302,Li=303,Vu=304,yl=306,Rn=1e3,Ir=1001,nu=1002,gn=1003,P0=1004;var vl=1005;var ln=1006,ku=1007;var Pn=1008;var Jn=1009,$f=1010,ep=1011,Co=1012,Gu=1013,Nr=1014,wi=1015,Ui=1016,Hu=1017,Wu=1018,Ro=1020,tp=35902,np=35899,ip=1021,rp=1022,Dn=1023,co=1026,Io=1027,qu=1028,Xu=1029,sp=1030,Yu=1031;var Zu=1033,_l=33776,bl=33777,Ml=33778,Sl=33779,ju=35840,Ju=35841,Qu=35842,Ku=35843,$u=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,ch=37815,uh=37816,hh=37817,dh=37818,fh=37819,ph=37820,mh=37821,gh=36492,xh=36494,yh=36495,vh=36283,_h=36284,bh=36285,Mh=36286;var Oa=2300,iu=2301,Kc=2302,Nf=2400,Bf=2401,Of=2402;var D0=3200,L0=3201;var Sh=0,U0=1,cr="",ht="srgb",hs="srgb-linear",za="linear",Tt="srgb";var ls=7680;var zf=519,F0=512,N0=513,B0=514,op=515,O0=516,z0=517,V0=518,k0=519,ru=35044,Ln=35048;var ap="300 es",vi=2e3,Va=2001;var nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xg=1234567,Ua=Math.PI/180,uo=180/Math.PI;function Ii(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function lp(n,e){return(n%e+e)%e}function Lb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ub(n,e,t){return n!==e?(t-n)/(e-n):0}function Fa(n,e,t){return(1-t)*n+t*e}function Fb(n,e,t,i){return Fa(n,e,1-Math.exp(-t*i))}function Nb(n,e=1){return e-Math.abs(lp(n,e*2)-e)}function Bb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ob(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vb(n,e){return n+Math.random()*(e-n)}function kb(n){return n*(.5-Math.random())}function Gb(n){n!==void 0&&(xg=n);let e=xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hb(n){return n*Ua}function Wb(n){return n*uo}function qb(n){return(n&n-1)===0&&n!==0}function Xb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zb(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ce={DEG2RAD:Ua,RAD2DEG:uo,generateUUID:Ii,clamp:nt,euclideanModulo:lp,mapLinear:Lb,inverseLerp:Ub,lerp:Fa,damp:Fb,pingpong:Nb,smoothstep:Bb,smootherstep:Ob,randInt:zb,randFloat:Vb,randFloatSpread:kb,seededRandom:Gb,degToRad:Hb,radToDeg:Wb,isPowerOfTwo:qb,ceilPowerOfTwo:Xb,floorPowerOfTwo:Yb,setQuaternionFromProperEuler:Zb,normalize:wt,denormalize:yi},xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==p){let g=1-a,m=l*f+c*h+u*p+d*x,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,m*v);g=Math.sin(g*E)/A,a=Math.sin(a*E)/A}let y=a*v;if(l=l*g+f*y,c=c*g+h*y,u=u*g+p*y,d=d*g+x*y,g===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*h-c*f,e[t+1]=l*p+u*f+c*d-a*h,e[t+2]=c*p+u*h+a*f-l*d,e[t+3]=u*p-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},af=new _,yg=new qe,rt=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],x=r[0],g=r[3],m=r[6],v=r[1],M=r[4],y=r[7],A=r[2],E=r[5],L=r[8];return s[0]=o*x+a*v+l*A,s[3]=o*g+a*M+l*E,s[6]=o*m+a*y+l*L,s[1]=c*x+u*v+d*A,s[4]=c*g+u*M+d*E,s[7]=c*m+u*y+d*L,s[2]=f*x+h*v+p*A,s[5]=f*g+h*M+p*E,s[8]=f*m+h*y+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lf.makeScale(e,t)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lf=new rt;function cp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G0(){let n=ho("canvas");return n.style.display="block",n}var vg={};function fo(n){n in vg||(vg[n]=!0,console.warn(n))}function H0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var _g=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jb(){let n={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=lo(r.r),r.g=lo(r.g),r.b=lo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?za:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hs]:{primaries:e,whitePoint:i,transfer:za,toXYZ:_g,fromXYZ:bg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:_g,fromXYZ:bg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),n}var mt=jb();function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gs,su=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=ho("canvas")),Gs.width=e.width,Gs.height=e.height;let r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jb=0,po=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cf(r[o].image)):s.push(cf(r[o]))}else s=cf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function cf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qb=0,uf=new _,Mn=class n extends nr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ir,r=Ir,s=ln,o=Pn,a=Dn,l=Jn,c=n.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=Ii(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Kf;Mn.DEFAULT_ANISOTROPY=1;var ft=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(h+1)/2,A=(m+1)/2,E=(u+f)/4,L=(d+x)/4,U=(p+g)/4;return M>y&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=E/i,s=L/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=L/s,r=U/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Mn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new po(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends ou{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ka=class extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var au=class extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mc.copy(i.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Sc.subVectors(this.max,Ma),Hs.subVectors(e.a,Ma),Ws.subVectors(e.b,Ma),qs.subVectors(e.c,Ma),wr.subVectors(Ws,Hs),Tr.subVectors(qs,Ws),rs.subVectors(Hs,qs);let t=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-rs.z,rs.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,rs.z,0,-rs.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-rs.y,rs.x,0];return!hf(t,Hs,Ws,qs,Sc)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Hs,Ws,qs,Sc))?!1:(wc.crossVectors(wr,Tr),t=[wc.x,wc.y,wc.z],hf(t,Hs,Ws,qs,Sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ji=[new _,new _,new _,new _,new _,new _,new _,new _],mi=new _,Mc=new nn,Hs=new _,Ws=new _,qs=new _,wr=new _,Tr=new _,rs=new _,Ma=new _,Sc=new _,wc=new _,ss=new _;function hf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ss.fromArray(n,s);let a=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Kb=new nn,Sa=new _,df=new _,ii=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(df)),this.expandByPoint(Sa.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qi=new _,ff=new _,Tc=new _,Ar=new _,pf=new _,Ac=new _,mf=new _,ir=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ff.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(ff);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),a=Ar.dot(this.direction),l=-Ar.dot(Tc),c=Ar.lengthSq(),u=Math.abs(1-o*o),d,f,h,p;if(u>0)if(d=o*l-a,f=o*a-l,p=s*u,d>=0)if(f>=-p)if(f<=p){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ff).addScaledVector(Tc,f),h}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);let i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,r,s){pf.subVectors(t,e),Ac.subVectors(i,e),mf.crossVectors(pf,Ac);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);let l=a*this.direction.dot(Ac.crossVectors(Ar,Ac));if(l<0)return null;let c=a*this.direction.dot(pf.cross(Ar));if(c<0||l+c>o)return null;let u=-a*Ar.dot(mf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f+x*a,t[4]=p*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,p=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+p,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*l,h=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($b,e,eM)}lookAt(e,t,i){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Er.crossVectors(i,Xn),Er.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Er.crossVectors(i,Xn)),Er.normalize(),Ec.crossVectors(Xn,Er),r[0]=Er.x,r[4]=Ec.x,r[8]=Xn.x,r[1]=Er.y,r[5]=Ec.y,r[9]=Xn.y,r[2]=Er.z,r[6]=Ec.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],M=i[7],y=i[11],A=i[15],E=r[0],L=r[4],U=r[8],S=r[12],b=r[1],R=r[5],z=r[9],O=r[13],Y=r[2],N=r[6],k=r[10],Q=r[14],V=r[3],J=r[7],re=r[11],pe=r[15];return s[0]=o*E+a*b+l*Y+c*V,s[4]=o*L+a*R+l*N+c*J,s[8]=o*U+a*z+l*k+c*re,s[12]=o*S+a*O+l*Q+c*pe,s[1]=u*E+d*b+f*Y+h*V,s[5]=u*L+d*R+f*N+h*J,s[9]=u*U+d*z+f*k+h*re,s[13]=u*S+d*O+f*Q+h*pe,s[2]=p*E+x*b+g*Y+m*V,s[6]=p*L+x*R+g*N+m*J,s[10]=p*U+x*z+g*k+m*re,s[14]=p*S+x*O+g*Q+m*pe,s[3]=v*E+M*b+y*Y+A*V,s[7]=v*L+M*R+y*N+A*J,s[11]=v*U+M*z+y*k+A*re,s[15]=v*S+M*O+y*Q+A*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+x*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+g*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+m*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=d*g*c-x*f*c+x*l*h-a*g*h-d*l*m+a*f*m,M=p*f*c-u*g*c-p*l*h+o*g*h+u*l*m-o*f*m,y=u*x*c-p*d*c+p*a*h-o*x*h-u*a*m+o*d*m,A=p*d*l-u*x*l-p*a*f+o*x*f+u*a*g-o*d*g,E=t*v+i*M+r*y+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/E;return e[0]=v*L,e[1]=(x*f*s-d*g*s-x*r*h+i*g*h+d*r*m-i*f*m)*L,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*L,e[4]=M*L,e[5]=(u*g*s-p*f*s+p*r*h-t*g*h-u*r*m+t*f*m)*L,e[6]=(p*l*s-o*g*s-p*r*c+t*g*c+o*r*m-t*l*m)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*L,e[8]=y*L,e[9]=(p*d*s-u*x*s-p*i*h+t*x*h+u*i*m-t*d*m)*L,e[10]=(o*x*s-p*a*s+p*i*c-t*x*c-o*i*m+t*a*m)*L,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*L,e[12]=A*L,e[13]=(u*x*r-p*d*r+p*i*f-t*x*f-u*i*g+t*d*g)*L,e[14]=(p*a*r-o*x*r-p*i*l+t*x*l+o*i*g-t*a*g)*L,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,p=s*d,x=o*u,g=o*d,m=a*d,v=l*c,M=l*u,y=l*d,A=i.x,E=i.y,L=i.z;return r[0]=(1-(x+m))*A,r[1]=(h+y)*A,r[2]=(p-M)*A,r[3]=0,r[4]=(h-y)*E,r[5]=(1-(f+m))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(p+M)*L,r[9]=(g-v)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Xs.set(r[0],r[1],r[2]).length(),o=Xs.set(r[4],r[5],r[6]).length(),a=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);let c=1/s,u=1/o,d=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,t.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===vi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Va)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===vi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Va)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new _,gi=new ct,$b=new _(0,0,0),eM=new _(1,1,1),Er=new _,Ec=new _,Xn=new _,Mg=new ct,Sg=new qe,rn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tM=0,wg=new _,Ys=new qe,Ki=new ct,Cc=new _,wa=new _,nM=new _,iM=new qe,Tg=new _(1,0,0),Ag=new _(0,1,0),Eg=new _(0,0,1),Cg={type:"added"},rM={type:"removed"},Zs={type:"childadded",child:null},gf={type:"childremoved",child:null},Zt=class n extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new _,t=new rn,i=new qe,r=new _(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new rt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cc.copy(e):Cc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(wa,Cc,this.up):Ki.lookAt(Cc,wa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rM),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Zt.DEFAULT_UP=new _(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new _,$i=new _,xf=new _,er=new _,js=new _,Js=new _,Rg=new _,yf=new _,vf=new _,_f=new _,bf=new ft,Mf=new ft,Sf=new ft,On=class n{constructor(e=new _,t=new _,i=new _){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xi.subVectors(e,t),r.cross(xi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xi.subVectors(r,t),$i.subVectors(i,t),xf.subVectors(e,t);let o=xi.dot(xi),a=xi.dot($i),l=xi.dot(xf),c=$i.dot($i),u=$i.dot(xf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return bf.setScalar(0),Mf.setScalar(0),Sf.setScalar(0),bf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,i),Sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bf,s.x),o.addScaledVector(Mf,s.y),o.addScaledVector(Sf,s.z),o}static isFrontFacing(e,t,i,r){return xi.subVectors(i,t),$i.subVectors(e,t),xi.cross($i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;js.subVectors(r,i),Js.subVectors(s,i),yf.subVectors(e,i);let l=js.dot(yf),c=Js.dot(yf);if(l<=0&&c<=0)return t.copy(i);vf.subVectors(e,r);let u=js.dot(vf),d=Js.dot(vf);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);_f.subVectors(e,s);let h=js.dot(_f),p=Js.dot(_f);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Js,a);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return Rg.subVectors(s,r),a=(d-u)/(d-u+(h-p)),t.copy(r).addScaledVector(Rg,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(js,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function wf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=lp(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wf(o,s,e+1/3),this.g=wf(o,s,e),this.b=wf(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return mt.workingToColorSpace(bn.copy(this),e),Math.round(nt(bn.r*255,0,255))*65536+Math.round(nt(bn.g*255,0,255))*256+Math.round(nt(bn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(bn.copy(this),t);let i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ht){mt.workingToColorSpace(bn.copy(this),e);let t=bn.r,i=bn.g,r=bn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Rc);let i=Fa(Cr.h,Rc.h,t),r=Fa(Cr.s,Rc.s,t),s=Fa(Cr.l,Rc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Le;Le.NAMES=W0;var sM=0,ri=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=cs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eu&&(i.blendSrc=this.blendSrc),this.blendDst!==tu&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new _,Ic=new xe,oM=0,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}};var ds=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ga=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}},aM=0,ni=new ct,Tf=new Zt,Qs=new _,Yn=new nn,Ta=new nn,fn=new _,et=class n extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cp(e)?Ga:ds)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Yn.min,Ta.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Ta.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Ta.min),Yn.expandByPoint(Ta.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),fn.add(Qs)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new _,l[U]=new _;let c=new _,u=new _,d=new _,f=new xe,h=new xe,p=new xe,x=new _,g=new _;function m(U,S,b){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,U),h.fromBufferAttribute(s,S),p.fromBufferAttribute(s,b),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let R=1/(h.x*p.y-p.x*h.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(R),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(R),a[U].add(x),a[S].add(x),a[b].add(x),l[U].add(g),l[S].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,S=v.length;U<S;++U){let b=v[U],R=b.start,z=b.count;for(let O=R,Y=R+z;O<Y;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new _,y=new _,A=new _,E=new _;function L(U){A.fromBufferAttribute(r,U),E.copy(A);let S=a[U];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(E,S);let R=y.dot(l[U])<0?-1:1;o.setXYZW(U,M.x,M.y,M.z,R)}for(let U=0,S=v.length;U<S;++U){let b=v[U],R=b.start,z=b.count;for(let O=R,Y=R+z;O<Y;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new _,s=new _,o=new _,a=new _,l=new _,c=new _,u=new _,d=new _;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new gt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ig=new ct,os=new ir,Pc=new ii,Pg=new _,Dc=new _,Lc=new _,Uc=new _,Af=new _,Fc=new _,Dg=new _,Nc=new _,He=class extends Zt{constructor(e=new et,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Af.fromBufferAttribute(d,e),o?Fc.addScaledVector(Af,u):Fc.addScaledVector(Af.sub(t),u))}t.add(Fc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(Pc.containsPoint(os.origin)===!1&&(os.intersectSphere(Pc,Pg)===null||os.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Ig.copy(s).invert(),os.copy(e.ray).applyMatrix4(Ig),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),M=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,A=M;y<A;y+=3){let E=a.getX(y),L=a.getX(y+1),U=a.getX(y+2);r=Bc(this,m,e,i,c,u,d,E,L,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);r=Bc(this,o,e,i,c,u,d,v,M,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,A=M;y<A;y+=3){let E=y,L=y+1,U=y+2;r=Bc(this,m,e,i,c,u,d,E,L,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let v=g,M=g+1,y=g+2;r=Bc(this,o,e,i,c,u,d,v,M,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function lM(n,e,t,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Nc.copy(a),Nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nc);return c<t.near||c>t.far?null:{distance:c,point:Nc.clone(),object:n}}function Bc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Dc),n.getVertexPosition(l,Lc),n.getVertexPosition(c,Uc);let u=lM(n,e,t,i,Dc,Lc,Uc,Dg);if(u){let d=new _;On.getBarycoord(Dg,Dc,Lc,Uc,d),r&&(u.uv=On.getInterpolatedAttribute(r,a,l,c,d,new xe)),s&&(u.uv1=On.getInterpolatedAttribute(s,a,l,c,d,new xe)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,d,new _),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};On.getNormal(Dc,Lc,Uc,f.normal),u.face=f,u.barycoord=d}return u}var it=class n extends et{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function p(x,g,m,v,M,y,A,E,L,U,S){let b=y/L,R=A/U,z=y/2,O=A/2,Y=E/2,N=L+1,k=U+1,Q=0,V=0,J=new _;for(let re=0;re<k;re++){let pe=re*R-O;for(let ye=0;ye<N;ye++){let Te=ye*b-z;J[x]=Te*v,J[g]=pe*M,J[m]=Y,c.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[m]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(ye/L),d.push(1-re/U),Q+=1}}for(let re=0;re<U;re++)for(let pe=0;pe<L;pe++){let ye=f+pe+N*re,Te=f+pe+N*(re+1),Re=f+(pe+1)+N*(re+1),Pe=f+(pe+1)+N*re;l.push(ye,Te,Pe),l.push(Te,Re,Pe),V+=6}a.addGroup(h,V,S),h+=V,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _s(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=_s(n[t]);for(let r in i)e[r]=i[r]}return e}function cM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var wh={clone:_s,merge:Sn},uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ha=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rr=new _,Lg=new xe,Ug=new xe,tn=class extends Ha{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Lg,Ug),t.subVectors(Ug,Lg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ks=-90,$s=1,lu=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Ks,$s,e,t);r.layers=this.layers,this.add(r);let s=new tn(Ks,$s,e,t);s.layers=this.layers,this.add(s);let o=new tn(Ks,$s,e,t);o.layers=this.layers,this.add(o);let a=new tn(Ks,$s,e,t);a.layers=this.layers,this.add(a);let l=new tn(Ks,$s,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ks,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Wa=class extends Mn{constructor(e=[],t=ys,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cu=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:ar});s.uniforms.tEquirect.value=t;let o=new He(r,s),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=ln),new lu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},vt=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dM={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var qa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new _,xo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yo=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eo,Aa=new _,to=new _,no=new _,io=new xe,Ea=new xe,q0=new ct,Oc=new _,Ca=new _,zc=new _,Fg=new xe,Ef=new xe,Ng=new xe,Ya=class extends Zt{constructor(e=new yo){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xa(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new xo(i,3,0,!1)),eo.setAttribute("uv",new xo(i,2,3,!1))}this.geometry=eo,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Vc(Oc.set(-.5,-.5,0),no,o,to,r,s),Vc(Ca.set(.5,-.5,0),no,o,to,r,s),Vc(zc.set(.5,.5,0),no,o,to,r,s),Fg.set(0,0),Ef.set(1,0),Ng.set(1,1);let a=e.ray.intersectTriangle(Oc,Ca,zc,!1,Aa);if(a===null&&(Vc(Ca.set(-.5,.5,0),no,o,to,r,s),Ef.set(0,1),a=e.ray.intersectTriangle(Oc,zc,Ca,!1,Aa),a===null))return;let l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:On.getInterpolation(Aa,Oc,Ca,zc,Fg,Ef,Ng,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vc(n,e,t,i,r,s){io.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ea.x=s*io.x-r*io.y,Ea.y=r*io.x+s*io.y):Ea.copy(io),n.copy(e),n.x+=Ea.x,n.y+=Ea.y,n.applyMatrix4(q0)}var si=class extends Mn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=gn,u=gn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vo=class extends gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ro=new ct,Bg=new ct,kc=[],Og=new nn,fM=new ct,Ra=new He,Ia=new ii,Za=class extends He{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,fM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),Og.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(Og)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),Ia.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),e.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ro),Bg.multiplyMatrices(i,ro),Ra.matrixWorld=Bg,Ra.raycast(e,kc);for(let o=0,a=kc.length;o<a;o++){let l=kc[o];l.instanceId=s,l.object=this,t.push(l)}kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(r*this.count),r,this.count,qu,wi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cf=new _,pM=new _,mM=new rt,Bn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Cf.subVectors(i,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mM.getNormalMatrix(e),r=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ii,gM=new xe(.5,.5),Gc=new _,_o=class{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,o=new Bn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],p=s[8],x=s[9],g=s[10],m=s[11],v=s[12],M=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,m-p,A-v).normalize(),r[1].setComponents(c+o,h+u,m+p,A+v).normalize(),r[2].setComponents(c+a,h+d,m+x,A+M).normalize(),r[3].setComponents(c-a,h-d,m-x,A-M).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(c-l,h-f,m-g,A-y).normalize();else if(r[4].setComponents(c-l,h-f,m-g,A-y).normalize(),t===vi)r[5].setComponents(c+l,h+f,m+g,A+y).normalize();else if(t===Va)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=gM.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Gc.x=r.normal.x>0?e.max.x:e.min.x,Gc.y=r.normal.y>0?e.max.y:e.min.y,Gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pi=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uu=new _,hu=new _,zg=new ct,Pa=new ir,Hc=new ii,Rf=new _,Vg=new _,ja=class extends Zt{constructor(e=new et,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)uu.fromBufferAttribute(t,r-1),hu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=uu.distanceTo(hu);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(r),Hc.radius+=s,e.ray.intersectsSphere(Hc)===!1)return;zg.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(zg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=u.getX(x),v=u.getX(x+1),M=Wc(this,e,Pa,l,m,v,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(h),m=Wc(this,e,Pa,l,x,g,p-1);m&&t.push(m)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=h,g=p-1;x<g;x+=c){let m=Wc(this,e,Pa,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Wc(this,e,Pa,l,p-1,h,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wc(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(uu.fromBufferAttribute(a,r),hu.fromBufferAttribute(a,s),t.distanceSqToSegment(uu,hu,Rf,Vg)>i)return;Rf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Rf);if(!(c<e.near||c>e.far))return{distance:c,point:Vg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var kg=new _,Gg=new _,ps=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kg.fromBufferAttribute(t,r),Gg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kg.distanceTo(Gg);e.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ja=class extends ja{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bo=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hg=new ct,Vf=new ir,qc=new ii,Xc=new _,Qa=class extends Zt{constructor(e=new et,t=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;Hg.copy(r).invert(),Vf.copy(e.ray).applyMatrix4(Hg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let p=f,x=h;p<x;p++){let g=c.getX(p);Xc.fromBufferAttribute(d,g),Wg(Xc,g,l,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,x=h;p<x;p++)Xc.fromBufferAttribute(d,p),Wg(Xc,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wg(n,e,t,i,r,s,o){let a=Vf.distanceSqToPoint(n);if(a<t){let l=new _;Vf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var oi=class extends Mn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ka=class extends Mn{constructor(e,t,i=Nr,r,s,o,a=gn,l=gn,c,u=co,d=1){if(u!==co&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$a=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dr=class n extends et{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,p=i*2+s,x=r+1,g=new _,m=new _;for(let v=0;v<=p;v++){let M=0,y=0,A=0,E=0;if(v<=i){let S=v/i,b=S*Math.PI/2;y=-u-e*Math.cos(b),A=e*Math.sin(b),E=-e*Math.cos(b),M=S*d}else if(v<=i+s){let S=(v-i)/s;y=-u+S*t,A=e,E=0,M=d+S*f}else{let S=(v-i-s)/i,b=S*Math.PI/2;y=u+e*Math.sin(b),A=e*Math.cos(b),E=e*Math.sin(b),M=d+f+S*d}let L=Math.max(0,Math.min(1,M/h)),U=0;v===0?U=.5/r:v===p&&(U=-.5/r);for(let S=0;S<=r;S++){let b=S/r,R=b*Math.PI*2,z=Math.sin(R),O=Math.cos(R);m.x=-A*O,m.y=y,m.z=A*z,a.push(m.x,m.y,m.z),g.set(-A*O,E,A*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+U,L)}if(v>0){let S=(v-1)*x;for(let b=0;b<r;b++){let R=S+b,z=S+b+1,O=v*x+b,Y=v*x+b+1;o.push(R,z,O),o.push(z,Y,O)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pn=class n extends et{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},sn=class n extends et{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],p=0,x=[],g=i/2,m=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(h,2));function v(){let y=new _,A=new _,E=0,L=(t-e)/i;for(let U=0;U<=s;U++){let S=[],b=U/s,R=b*(t-e)+e;for(let z=0;z<=r;z++){let O=z/r,Y=O*l+a,N=Math.sin(Y),k=Math.cos(Y);A.x=R*N,A.y=-b*i+g,A.z=R*k,d.push(A.x,A.y,A.z),y.set(N,L,k).normalize(),f.push(y.x,y.y,y.z),h.push(O,1-b),S.push(p++)}x.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){let b=x[S][U],R=x[S+1][U],z=x[S+1][U+1],O=x[S][U+1];(e>0||S!==0)&&(u.push(b,R,O),E+=3),(t>0||S!==s-1)&&(u.push(R,z,O),E+=3)}c.addGroup(m,E,0),m+=E}function M(y){let A=p,E=new xe,L=new _,U=0,S=y===!0?e:t,b=y===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,g*b,0),f.push(0,b,0),h.push(.5,.5),p++;let R=p;for(let z=0;z<=r;z++){let Y=z/r*l+a,N=Math.cos(Y),k=Math.sin(Y);L.x=S*k,L.y=g*b,L.z=S*N,d.push(L.x,L.y,L.z),f.push(0,b,0),E.x=N*.5+.5,E.y=k*.5*b+.5,h.push(E.x,E.y),p++}for(let z=0;z<r;z++){let O=A+z,Y=R+z;y===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),U+=3}c.addGroup(m,U,y===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rr=class n extends sn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class n extends et{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new _,y=new _,A=new _;for(let E=0;E<t.length;E+=3)h(t[E+0],M),h(t[E+1],y),h(t[E+2],A),l(M,y,A,v)}function l(v,M,y,A){let E=A+1,L=[];for(let U=0;U<=E;U++){L[U]=[];let S=v.clone().lerp(y,U/E),b=M.clone().lerp(y,U/E),R=E-U;for(let z=0;z<=R;z++)z===0&&U===E?L[U][z]=S:L[U][z]=S.clone().lerp(b,z/R)}for(let U=0;U<E;U++)for(let S=0;S<2*(E-U)-1;S++){let b=Math.floor(S/2);S%2===0?(f(L[U][b+1]),f(L[U+1][b]),f(L[U][b])):(f(L[U][b+1]),f(L[U+1][b+1]),f(L[U+1][b]))}}function c(v){let M=new _;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){let v=new _;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let y=g(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;o.push(y,1-A)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],A=o[v+4],E=Math.max(M,y,A),L=Math.min(M,y,A);E>.9&&L<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let v=new _,M=new _,y=new _,A=new _,E=new xe,L=new xe,U=new xe;for(let S=0,b=0;S<s.length;S+=9,b+=6){v.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),A.copy(v).add(M).add(y).divideScalar(3);let R=g(A);x(E,b+0,v,R),x(L,b+2,M,R),x(U,b+4,y,R)}}function x(v,M,y,A){A<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new _,r=[],s=[],o=[],a=new _,l=new ct;for(let h=0;h<=e;h++){let p=h/e;r[h]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,p))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(nt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},So=class extends Zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},du=class extends So{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Yc=new _,If=new hp,Pf=new hp,Df=new hp,fu=class extends Zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new _){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Yc.subVectors(r[0],r[1]).add(r[0]),c=Yc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Yc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),If.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,x,g),Pf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,x,g),Df.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(If.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Pf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Df.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(If.calc(l),Pf.calc(l),Df.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new _().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qg(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function xM(n,e){let t=1-n;return t*t*e}function yM(n,e){return 2*(1-n)*n*e}function vM(n,e){return n*n*e}function Na(n,e,t,i){return xM(n,e)+yM(n,t)+vM(n,i)}function _M(n,e){let t=1-n;return t*t*t*e}function bM(n,e){let t=1-n;return 3*t*t*n*e}function MM(n,e){return 3*(1-n)*n*n*e}function SM(n,e){return n*n*n*e}function Ba(n,e,t,i,r){return _M(n,e)+bM(n,t)+MM(n,i)+SM(n,r)}var el=class extends Zn{constructor(e=new xe,t=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new xe){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ba(e,r.x,s.x,o.x,a.x),Ba(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pu=class extends Zn{constructor(e=new _,t=new _,i=new _,r=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ba(e,r.x,s.x,o.x,a.x),Ba(e,r.y,s.y,o.y,a.y),Ba(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends Zn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends Zn{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Zn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Na(e,r.x,s.x,o.x),Na(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends Zn{constructor(e=new _,t=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Na(e,r.x,s.x,o.x),Na(e,r.y,s.y,o.y),Na(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(qg(a,l.x,c.x,u.x,d.x),qg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new xe().fromArray(r))}return this}},kf=Object.freeze({__proto__:null,ArcCurve:du,CatmullRomCurve3:fu,CubicBezierCurve:el,CubicBezierCurve3:pu,EllipseCurve:So,LineCurve:tl,LineCurve3:mu,QuadraticBezierCurve:nl,QuadraticBezierCurve3:gu,SplineCurve:il}),xu=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new kf[r.type]().fromJSON(r))}return this}},rl=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new tl(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new nl(this.currentPoint.clone(),new xe(e,t),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new el(this.currentPoint.clone(),new xe(e,t),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new il(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new So(e,t,i,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bi=class extends rl{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new rl().fromJSON(r))}return this}};function wM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=X0(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=RM(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){let h=n[f],p=n[f+1];h<a&&(a=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return sl(s,o,t,a,l,c,0),o}function X0(n,e,t,i,r){let s;if(r===VM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Xg(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Xg(o/i|0,n[o],n[o+1],s);return s&&wo(s,s.next)&&(al(s),s=s.next),s}function ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(wo(t,t.next)||Yt(t.prev,t,t.next)===0)){if(al(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&UM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?AM(n,i,r,s):TM(n)){e.push(l.i,n.i,c.i),al(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=EM(ms(n),e),sl(n,e,t,i,r,s,2)):o===2&&CM(n,e,t,i,r,s):sl(ms(n),e,t,i,r,s,1);break}}}function TM(n){let e=n.prev,t=n,i=n.next;if(Yt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),d=Math.min(a,l,c),f=Math.max(r,s,o),h=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&La(r,a,s,l,o,c,p.x,p.y)&&Yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function AM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Yt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,h=Math.min(a,l,c),p=Math.min(u,d,f),x=Math.max(a,l,c),g=Math.max(u,d,f),m=Gf(h,p,e,t,i),v=Gf(x,g,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=m&&y&&y.z<=v;){if(M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&La(a,u,l,d,c,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=h&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&La(a,u,l,d,c,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&La(a,u,l,d,c,f,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=h&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&La(a,u,l,d,c,f,y.x,y.y)&&Yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function EM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!wo(i,r)&&Z0(i,t,t.next,r)&&ol(i,r)&&ol(r,i)&&(e.push(i.i,t.i,r.i),al(t),al(t.next),t=n=r),t=t.next}while(t!==n);return ms(t)}function CM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&BM(o,a)){let l=j0(o,a);o=ms(o,o.next),l=ms(l,l.next),sl(o,e,t,i,r,s,0),sl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function RM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=X0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(NM(c))}r.sort(IM);for(let s=0;s<r.length;s++)t=PM(r[s],t);return t}function IM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function PM(n,e){let t=DM(n,e);if(!t)return e;let i=j0(t,n);return ms(i,i.next),ms(t,t.next)}function DM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(wo(n,t))return t;do{if(wo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Y0(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let d=Math.abs(r-t.y)/(i-t.x);ol(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&LM(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function LM(n,e){return Yt(n.prev,n,e.prev)<0&&Yt(e.next,n,n.next)<0}function UM(n,e,t,i){let r=n;do r.z===0&&(r.z=Gf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,FM(r)}function FM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Gf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function NM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Y0(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function La(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Y0(n,e,t,i,r,s,o,a)}function BM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!OM(n,e)&&(ol(n,e)&&ol(e,n)&&zM(n,e)&&(Yt(n.prev,n,e.prev)||Yt(n,e.prev,e))||wo(n,e)&&Yt(n.prev,n,n.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function wo(n,e){return n.x===e.x&&n.y===e.y}function Z0(n,e,t,i){let r=jc(Yt(n,e,t)),s=jc(Yt(n,e,i)),o=jc(Yt(t,i,n)),a=jc(Yt(t,i,e));return!!(r!==s&&o!==a||r===0&&Zc(n,t,e)||s===0&&Zc(n,i,e)||o===0&&Zc(t,n,i)||a===0&&Zc(t,e,i))}function Zc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function jc(n){return n>0?1:n<0?-1:0}function OM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Z0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ol(n,e){return Yt(n.prev,n,n.next)<0?Yt(n,e,n.next)>=0&&Yt(n,n.prev,e)>=0:Yt(n,e,n.prev)<0||Yt(n,n.next,e)<0}function zM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function j0(n,e){let t=Hf(n.i,n.x,n.y),i=Hf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Xg(n,e,t,i){let r=Hf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function al(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Hf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function VM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Wf=class{static triangulate(e,t,i=2){return wM(e,t,i)}},Ri=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Yg(e),Zg(i,e);let o=e.length;t.forEach(Yg);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Zg(i,t[l]);let a=Wf.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Yg(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var sr=class n extends et{constructor(e=new bi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:kM,M,y=!1,A,E,L,U;m&&(M=m.getSpacedPoints(u),y=!0,f=!1,A=m.computeFrenetFrames(u,!1),E=new _,L=new _,U=new _),f||(g=0,h=0,p=0,x=0);let S=a.extractPoints(c),b=S.shape,R=S.holes;if(!Ri.isClockWise(b)){b=b.reverse();for(let F=0,X=R.length;F<X;F++){let B=R[F];Ri.isClockWise(B)&&(R[F]=B.reverse())}}function O(F){let B=10000000000000001e-36,H=F[0];for(let I=1;I<=F.length;I++){let q=I%F.length,j=F[q],se=j.x-H.x,fe=j.y-H.y,C=se*se+fe*fe,w=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(H.x),Math.abs(H.y)),Z=B*w*w;if(C<=Z){F.splice(q,1),I--;continue}H=j}}O(b),R.forEach(O);let Y=R.length,N=b;for(let F=0;F<Y;F++){let X=R[F];b=b.concat(X)}function k(F,X,B){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(X,B)}let Q=b.length;function V(F,X,B){let H,I,q,j=F.x-X.x,se=F.y-X.y,fe=B.x-F.x,C=B.y-F.y,w=j*j+se*se,Z=j*C-se*fe;if(Math.abs(Z)>Number.EPSILON){let ee=Math.sqrt(w),he=Math.sqrt(fe*fe+C*C),oe=X.x-se/ee,we=X.y+j/ee,ve=B.x-C/he,Ae=B.y+fe/he,Fe=((ve-oe)*C-(Ae-we)*fe)/(j*C-se*fe);H=oe+j*Fe-F.x,I=we+se*Fe-F.y;let de=H*H+I*I;if(de<=2)return new xe(H,I);q=Math.sqrt(de/2)}else{let ee=!1;j>Number.EPSILON?fe>Number.EPSILON&&(ee=!0):j<-Number.EPSILON?fe<-Number.EPSILON&&(ee=!0):Math.sign(se)===Math.sign(C)&&(ee=!0),ee?(H=-se,I=j,q=Math.sqrt(w)):(H=j,I=se,q=Math.sqrt(w/2))}return new xe(H/q,I/q)}let J=[];for(let F=0,X=N.length,B=X-1,H=F+1;F<X;F++,B++,H++)B===X&&(B=0),H===X&&(H=0),J[F]=V(N[F],N[B],N[H]);let re=[],pe,ye=J.concat();for(let F=0,X=Y;F<X;F++){let B=R[F];pe=[];for(let H=0,I=B.length,q=I-1,j=H+1;H<I;H++,q++,j++)q===I&&(q=0),j===I&&(j=0),pe[H]=V(B[H],B[q],B[j]);re.push(pe),ye=ye.concat(pe)}let Te;if(g===0)Te=Ri.triangulateShape(N,R);else{let F=[],X=[];for(let B=0;B<g;B++){let H=B/g,I=h*Math.cos(H*Math.PI/2),q=p*Math.sin(H*Math.PI/2)+x;for(let j=0,se=N.length;j<se;j++){let fe=k(N[j],J[j],q);Ie(fe.x,fe.y,-I),H===0&&F.push(fe)}for(let j=0,se=Y;j<se;j++){let fe=R[j];pe=re[j];let C=[];for(let w=0,Z=fe.length;w<Z;w++){let ee=k(fe[w],pe[w],q);Ie(ee.x,ee.y,-I),H===0&&C.push(ee)}H===0&&X.push(C)}}Te=Ri.triangulateShape(F,X)}let Re=Te.length,Pe=p+x;for(let F=0;F<Q;F++){let X=f?k(b[F],ye[F],Pe):b[F];y?(L.copy(A.normals[0]).multiplyScalar(X.x),E.copy(A.binormals[0]).multiplyScalar(X.y),U.copy(M[0]).add(L).add(E),Ie(U.x,U.y,U.z)):Ie(X.x,X.y,0)}for(let F=1;F<=u;F++)for(let X=0;X<Q;X++){let B=f?k(b[X],ye[X],Pe):b[X];y?(L.copy(A.normals[F]).multiplyScalar(B.x),E.copy(A.binormals[F]).multiplyScalar(B.y),U.copy(M[F]).add(L).add(E),Ie(U.x,U.y,U.z)):Ie(B.x,B.y,d/u*F)}for(let F=g-1;F>=0;F--){let X=F/g,B=h*Math.cos(X*Math.PI/2),H=p*Math.sin(X*Math.PI/2)+x;for(let I=0,q=N.length;I<q;I++){let j=k(N[I],J[I],H);Ie(j.x,j.y,d+B)}for(let I=0,q=R.length;I<q;I++){let j=R[I];pe=re[I];for(let se=0,fe=j.length;se<fe;se++){let C=k(j[se],pe[se],H);y?Ie(C.x,C.y+M[u-1].y,M[u-1].x+B):Ie(C.x,C.y,d+B)}}}ie(),ce();function ie(){let F=r.length/3;if(f){let X=0,B=Q*X;for(let H=0;H<Re;H++){let I=Te[H];_e(I[2]+B,I[1]+B,I[0]+B)}X=u+g*2,B=Q*X;for(let H=0;H<Re;H++){let I=Te[H];_e(I[0]+B,I[1]+B,I[2]+B)}}else{for(let X=0;X<Re;X++){let B=Te[X];_e(B[2],B[1],B[0])}for(let X=0;X<Re;X++){let B=Te[X];_e(B[0]+Q*u,B[1]+Q*u,B[2]+Q*u)}}i.addGroup(F,r.length/3-F,0)}function ce(){let F=r.length/3,X=0;ge(N,X),X+=N.length;for(let B=0,H=R.length;B<H;B++){let I=R[B];ge(I,X),X+=I.length}i.addGroup(F,r.length/3-F,1)}function ge(F,X){let B=F.length;for(;--B>=0;){let H=B,I=B-1;I<0&&(I=F.length-1);for(let q=0,j=u+g*2;q<j;q++){let se=Q*q,fe=Q*(q+1),C=X+H+se,w=X+I+se,Z=X+I+fe,ee=X+H+fe;Xe(C,w,Z,ee)}}}function Ie(F,X,B){l.push(F),l.push(X),l.push(B)}function _e(F,X,B){Ge(F),Ge(X),Ge(B);let H=r.length/3,I=v.generateTopUV(i,r,H-3,H-2,H-1);T(I[0]),T(I[1]),T(I[2])}function Xe(F,X,B,H){Ge(F),Ge(X),Ge(H),Ge(X),Ge(B),Ge(H);let I=r.length/3,q=v.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);T(q[0]),T(q[1]),T(q[3]),T(q[1]),T(q[2]),T(q[3])}function Ge(F){r.push(l[F*3+0]),r.push(l[F*3+1]),r.push(l[F*3+2])}function T(F){s.push(F.x),s.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return GM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new kf[r.type]().fromJSON(r)),new n(i,e.options)}},kM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new xe(s,o),new xe(a,l),new xe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],p=e[r*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-d),new xe(f,1-p),new xe(x,1-m)]:[new xe(a,1-l),new xe(u,1-d),new xe(h,1-p),new xe(g,1-m)]}};function GM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kt=class n extends Mo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ll=class n extends et{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=nt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new _,f=new xe,h=new _,p=new _,x=new _,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,h.x=m*1,h.y=-g,h.z=m*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(p)}for(let v=0;v<=t;v++){let M=i+v*u*r,y=Math.sin(M),A=Math.cos(M);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*A,o.push(d.x,d.y,d.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);let L=l[3*E+0]*y,U=l[3*E+1],S=l[3*E+0]*A;c.push(L,U,S)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,A=y,E=y+e.length,L=y+e.length+1,U=y+1;s.push(A,E,U),s.push(L,U,E)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Mi=class n extends Mo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cn=class n extends et{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let v=m*f-o;for(let M=0;M<c;M++){let y=M*d-s;p.push(y,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let M=v+c*m,y=v+c*(m+1),A=v+1+c*(m+1),E=v+1+c*m;h.push(M,y,E),h.push(y,A,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},To=class n extends et{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],u=[],d=e,f=(t-e)/r,h=new _,p=new xe;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,u.push(p.x,p.y)}d+=f}for(let x=0;x<r;x++){let g=x*(i+1);for(let m=0;m<i;m++){let v=m+g,M=v,y=v+i+1,A=v+i+2,E=v+1;a.push(M,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},cl=class n extends et{constructor(e=new bi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function c(u){let d=r.length/3,f=u.extractPoints(t),h=f.shape,p=f.holes;Ri.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];Ri.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=Ri.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];h=h.concat(v)}for(let g=0,m=h.length;g<m;g++){let v=h[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],M=v[0]+d,y=v[1]+d,A=v[2]+d;i.push(M,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return HM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function HM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var ai=class n extends et{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new _,f=new _,h=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],M=m/i,y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let E=A/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(E+y,1-M),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let M=u[m][v+1],y=u[m][v],A=u[m+1][v],E=u[m+1][v+1];(m!==0||o>0)&&h.push(M,y,E),(m!==i-1||l<Math.PI)&&h.push(y,A,E)}this.setIndex(h),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(x,3)),this.setAttribute("uv",new Oe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},gs=class n extends Mo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Si=class n extends et{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new _,d=new _,f=new _;for(let h=0;h<=i;h++)for(let p=0;p<=r;p++){let x=p/r*s,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let p=1;p<=r;p++){let x=(r+1)*h+p-1,g=(r+1)*(h-1)+p-1,m=(r+1)*(h-1)+p,v=(r+1)*h+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Lr=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new _,s=new _;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],f=d.start,h=d.count;for(let p=f,x=f+h;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),v=a.getX(p+(g+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,v),jg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),jg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function jg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var _t=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ul=class extends _t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var yn=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yu=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vu=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function WM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var xs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_u=class extends xs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nf,endingEnd:Nf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bf:s=e,a=2*t-i;break;case Of:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bf:o=e,l=2*i-t;break;case Of:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-h)*g+(1.5+h)*x+.5*p,y=h*g-h*x;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+v*o[c+A]+M*o[l+A]+y*o[d+A];return s}},bu=class extends xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Mu=class extends xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jc(t,this.TimeBufferType),this.values=Jc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jc(e.times,Array),values:Jc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _u(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case iu:t=this.InterpolantFactoryMethodLinear;break;case Kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return iu;case this.InterpolantFactoryMethodSmooth:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&WM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[f+p]||x!==t[h+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=iu;var Ur=class extends jn{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Oa;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Su=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};Su.prototype.ValueTypeName="color";var wu=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};wu.prototype.ValueTypeName="number";var Tu=class extends xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)qe.slerpFlat(s,0,o,c-a,o,c,l);return s}},hl=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};hl.prototype.ValueTypeName="quaternion";hl.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends jn{constructor(e,t,i){super(e,t,i)}};Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Oa;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Au=class extends jn{constructor(e,t,i,r){super(e,t,i,r)}};Au.prototype.ValueTypeName="vector";var $c={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Eu=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},J0=new Eu,Ao=class{constructor(e){this.manager=e!==void 0?e:J0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=new WeakMap,Cu=class extends Ao{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=$c.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=so.get(o);d===void 0&&(d=[],so.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=ho("img");function l(){u(),t&&t(this);let d=so.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}so.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),$c.remove(`image:${e}`);let f=so.get(this)||[];for(let h=0;h<f.length;h++){let p=f[h];p.onError&&p.onError(d)}so.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$c.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var li=class extends Ao{constructor(e){super(e)}load(e,t,i,r){let s=new Mn,o=new Cu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Eo=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},dl=class extends Eo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lf=new ct,Jg=new _,Qg=new _,Ru=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jg),Qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qg),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Kg=new ct,Da=new _,Uf=new _,qf=class extends Ru{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),Uf.copy(i.position),Uf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uf),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),Kg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kg,i.coordinateSystem,i.reversedDepth)}},fl=class extends Eo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pl=class extends Ha{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xf=class extends Ru{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ml=class extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Iu=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dp="\\[\\]\\.:\\/",qM=new RegExp("["+dp+"]","g"),fp="[^"+dp+"]",XM="[^"+dp.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",fp),ZM=/(WCOD+)?/.source.replace("WCOD",XM),jM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fp),JM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fp),QM=new RegExp("^"+YM+ZM+jM+JM+"$"),KM=["material","materials","bones","map"],Yf=class{constructor(e,t,i){let r=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qM,"")}static parseTrackName(e){let t=QM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);KM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Yf;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $C=new Float32Array(1);var $g=new ct,or=class{constructor(e,t,i=0,r=1/0){this.ray=new ir(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $g.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($g),this}intersectObject(e,t=!0,i=[]){return Zf(e,this,i,t),i.sort(e0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zf(e[r],this,i,t);return i.sort(e0),i}};function e0(n,e){return n.distance-e.distance}function Zf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Zf(s[o],e,t,!0)}}var t0=new _,Qc=new _,oo=new _,ao=new _,Ff=new _,$M=new _,e1=new _,gl=class{constructor(e=new _,t=new _){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){t0.subVectors(e,this.start),Qc.subVectors(this.end,this.start);let i=Qc.dot(Qc),s=Qc.dot(t0)/i;return t&&(s=nt(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=$M,i=e1){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;oo.subVectors(c,a),ao.subVectors(u,l),Ff.subVectors(a,l);let d=oo.dot(oo),f=ao.dot(ao),h=ao.dot(Ff);if(d<=r&&f<=r)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(d<=r)s=0,o=h/f,o=nt(o,0,1);else{let p=oo.dot(Ff);if(f<=r)o=0,s=nt(-p/d,0,1);else{let x=oo.dot(ao),g=d*f-x*x;g!==0?s=nt((x*h-p*f)/g,0,1):s=0,o=(x*s+h)/f,o<0?(o=0,s=nt(-p/d,0,1)):o>1&&(o=1,s=nt((x-p)/d,0,1))}}return t.copy(a).add(oo.multiplyScalar(s)),i.copy(l).add(ao.multiplyScalar(o)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function pp(n,e,t,i){let r=t1(i);switch(t){case ip:return n*e;case qu:return n*e/r.components*r.byteLength;case Xu:return n*e/r.components*r.byteLength;case sp:return n*e*2/r.components*r.byteLength;case Yu:return n*e*2/r.components*r.byteLength;case rp:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case Zu:return n*e*4/r.components*r.byteLength;case _l:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ju:case Ku:return Math.max(n,16)*Math.max(e,8)/4;case ju:case Qu:return Math.max(n,8)*Math.max(e,8)/2;case $u:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gh:case xh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vh:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bh:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(n){switch(n){case Jn:case $f:return{byteLength:1,components:1};case Co:case ep:case Ui:return{byteLength:2,components:1};case Hu:case Wu:return{byteLength:2,components:4};case Nr:case Gu:case wi:return{byteLength:4,components:1};case tp:case np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _x(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function o1(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],x=d[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D1=`vec3 transformedNormal = objectNormal;
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
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
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
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K1=`uniform bool receiveShadow;
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
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
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
#endif`,sS=`struct PhysicalMaterial {
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
}`,oS=`
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gS=`#if defined( USE_POINTS_UV )
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
#endif`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
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
#endif`,IS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,US=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
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
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#ifdef USE_TRANSMISSION
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
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
}`,fw=`#if DEPTH_PACKING == 3200
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
}`,pw=`#define DISTANCE
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
}`,mw=`#define DISTANCE
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`uniform float scale;
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
}`,vw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,bw=`uniform vec3 diffuse;
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
}`,Mw=`#define LAMBERT
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
}`,Sw=`#define LAMBERT
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
}`,ww=`#define MATCAP
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
}`,Tw=`#define MATCAP
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
}`,Aw=`#define NORMAL
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
}`,Ew=`#define NORMAL
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
}`,Cw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Iw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Dw=`#define TOON
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
}`,Lw=`#define TOON
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
}`,Uw=`uniform float size;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Nw=`#include <common>
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
}`,Bw=`uniform vec3 color;
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
}`,Ow=`uniform float rotation;
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
}`,zw=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:a1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:h1,alphatest_pars_fragment:d1,aomap_fragment:f1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:x1,beginnormal_vertex:y1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:b1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:E1,color_pars_vertex:C1,color_vertex:R1,common:I1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:D1,displacementmap_pars_vertex:L1,displacementmap_vertex:U1,emissivemap_fragment:F1,emissivemap_pars_fragment:N1,colorspace_fragment:B1,colorspace_pars_fragment:O1,envmap_fragment:z1,envmap_common_pars_fragment:V1,envmap_pars_fragment:k1,envmap_pars_vertex:G1,envmap_physical_pars_fragment:$1,envmap_vertex:H1,fog_vertex:W1,fog_pars_vertex:q1,fog_fragment:X1,fog_pars_fragment:Y1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:j1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:Q1,lights_pars_begin:K1,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:rS,lights_physical_pars_fragment:sS,lights_fragment_begin:oS,lights_fragment_maps:aS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:dS,map_fragment:fS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:xS,metalnessmap_pars_fragment:yS,morphinstance_vertex:vS,morphcolor_vertex:_S,morphnormal_vertex:bS,morphtarget_pars_vertex:MS,morphtarget_vertex:SS,normal_fragment_begin:wS,normal_fragment_maps:TS,normal_pars_fragment:AS,normal_pars_vertex:ES,normal_vertex:CS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:IS,clearcoat_normal_fragment_maps:PS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:LS,opaque_fragment:US,packing:FS,premultiplied_alpha_fragment:NS,project_vertex:BS,dithering_fragment:OS,dithering_pars_fragment:zS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:HS,shadowmap_vertex:WS,shadowmask_pars_fragment:qS,skinbase_vertex:XS,skinning_pars_vertex:YS,skinning_vertex:ZS,skinnormal_vertex:jS,specularmap_fragment:JS,specularmap_pars_fragment:QS,tonemapping_fragment:KS,tonemapping_pars_fragment:$S,transmission_fragment:ew,transmission_pars_fragment:tw,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:rw,worldpos_vertex:sw,background_vert:ow,background_frag:aw,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:hw,depth_vert:dw,depth_frag:fw,distanceRGBA_vert:pw,distanceRGBA_frag:mw,equirect_vert:gw,equirect_frag:xw,linedashed_vert:yw,linedashed_frag:vw,meshbasic_vert:_w,meshbasic_frag:bw,meshlambert_vert:Mw,meshlambert_frag:Sw,meshmatcap_vert:ww,meshmatcap_frag:Tw,meshnormal_vert:Aw,meshnormal_frag:Ew,meshphong_vert:Cw,meshphong_frag:Rw,meshphysical_vert:Iw,meshphysical_frag:Pw,meshtoon_vert:Dw,meshtoon_frag:Lw,points_vert:Uw,points_frag:Fw,shadow_vert:Nw,shadow_frag:Bw,sprite_vert:Ow,sprite_frag:zw},Ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Fi={basic:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Sn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Sn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Sn([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Sn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Sn([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Sn([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Sn([Ue.common,Ue.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Sn([Ue.lights,Ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Fi.physical={uniforms:Sn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Th={r:0,b:0,g:0},bs=new rn,Vw=new ct;function kw(n,e,t,i,r,s,o){let a=new Le(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function p(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1,A=p(M);A===null?m(a,l):A&&A.isColor&&(m(A,1),y=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){let A=p(y);A&&(A.isCubeTexture||A.mapping===yl)?(u===void 0&&(u=new He(new it(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:_s(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bs.copy(y.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(bs)),u.material.toneMapped=mt.getTransfer(A.colorSpace)!==Tt,(d!==A||f!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new cn(2,2),new xn({name:"BackgroundMaterial",uniforms:_s(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=mt.getTransfer(A.colorSpace)!==Tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,y){M.getRGB(Th,up(n)),i.buffers.color.setClear(Th.r,Th.g,Th.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:g,dispose:v}}function Gw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(b,R,z,O,Y){let N=!1,k=d(O,z,R);s!==k&&(s=k,c(s.object)),N=h(b,O,z,Y),N&&p(b,O,z,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(b,R,z,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,R,z){let O=z.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let N=Y[R.id];N===void 0&&(N={},Y[R.id]=N);let k=N[O];return k===void 0&&(k=f(l()),N[O]=k),k}function f(b){let R=[],z=[],O=[];for(let Y=0;Y<t;Y++)R[Y]=0,z[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:O,object:b,attributes:{},index:null}}function h(b,R,z,O){let Y=s.attributes,N=R.attributes,k=0,Q=z.getAttributes();for(let V in Q)if(Q[V].location>=0){let re=Y[V],pe=N[V];if(pe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),re===void 0||re.attribute!==pe||pe&&re.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function p(b,R,z,O){let Y={},N=R.attributes,k=0,Q=z.getAttributes();for(let V in Q)if(Q[V].location>=0){let re=N[V];re===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let pe={};pe.attribute=re,re&&re.data&&(pe.data=re.data),Y[V]=pe,k++}s.attributes=Y,s.attributesNum=k,s.index=O}function x(){let b=s.newAttributes;for(let R=0,z=b.length;R<z;R++)b[R]=0}function g(b){m(b,0)}function m(b,R){let z=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;z[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),Y[b]!==R&&(n.vertexAttribDivisor(b,R),Y[b]=R)}function v(){let b=s.newAttributes,R=s.enabledAttributes;for(let z=0,O=R.length;z<O;z++)R[z]!==b[z]&&(n.disableVertexAttribArray(z),R[z]=0)}function M(b,R,z,O,Y,N,k){k===!0?n.vertexAttribIPointer(b,R,z,Y,N):n.vertexAttribPointer(b,R,z,O,Y,N)}function y(b,R,z,O){x();let Y=O.attributes,N=z.getAttributes(),k=R.defaultAttributeValues;for(let Q in N){let V=N[Q];if(V.location>=0){let J=Y[Q];if(J===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),J!==void 0){let re=J.normalized,pe=J.itemSize,ye=e.get(J);if(ye===void 0)continue;let Te=ye.buffer,Re=ye.type,Pe=ye.bytesPerElement,ie=Re===n.INT||Re===n.UNSIGNED_INT||J.gpuType===Gu;if(J.isInterleavedBufferAttribute){let ce=J.data,ge=ce.stride,Ie=J.offset;if(ce.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)m(V.location+_e,ce.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<V.locationSize;_e++)g(V.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let _e=0;_e<V.locationSize;_e++)M(V.location+_e,pe/V.locationSize,Re,re,ge*Pe,(Ie+pe/V.locationSize*_e)*Pe,ie)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce,J.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<V.locationSize;ce++)g(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ce=0;ce<V.locationSize;ce++)M(V.location+ce,pe/V.locationSize,Re,re,pe*Pe,pe/V.locationSize*ce*Pe,ie)}}else if(k!==void 0){let re=k[Q];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(V.location,re);break;case 3:n.vertexAttrib3fv(V.location,re);break;case 4:n.vertexAttrib4fv(V.location,re);break;default:n.vertexAttrib1fv(V.location,re)}}}}v()}function A(){U();for(let b in i){let R=i[b];for(let z in R){let O=R[z];for(let Y in O)u(O[Y].object),delete O[Y];delete R[z]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let z in R){let O=R[z];for(let Y in O)u(O[Y].object),delete O[Y];delete R[z]}delete i[b.id]}function L(b){for(let R in i){let z=i[R];if(z[b.id]===void 0)continue;let O=z[b.id];for(let Y in O)u(O[Y].object),delete O[Y];delete z[b.id]}}function U(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Hw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)o(c[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*f[x];t.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Jn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==wi&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function qw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Bn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{let v=s?0:i,M=v*4,y=m.clippingState||null;l.value=y,y=u(p,f,M,h);for(let A=0;A!==M;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=h;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Xw(n){let e=new WeakMap;function t(o,a){return a===Li?o.mapping=ys:a===Vu&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Li||a===Vu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Do=4,Q0=[.125,.215,.35,.446,.526,.582],ws=20,mp=new pl,K0=new Le,gp=null,xp=0,yp=0,vp=!1,Ss=(1+Math.sqrt(5))/2,Po=1/Ss,$0=[new _(-Ss,Po,0),new _(Ss,Po,0),new _(-Po,0,Ss),new _(Po,0,Ss),new _(0,Ss,-Po),new _(0,Ss,Po),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],Yw=new _,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Yw}=s;gp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gp,xp,yp),this._renderer.xr.enabled=vp,e.scissorTest=!1,Ah(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ui,format:Dn,colorSpace:hs,depthBuffer:!1},r=ex(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ex(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(s)),this._blurMaterial=jw(s,e,t)}return r}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,mp)}_sceneToCubeUV(e,t,i,r,s){let l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(K0),d.toneMapping=lr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new Rt({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),g=new He(new it,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(K0),m=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let A=this._cubeSize;Ah(r,y*A,M>2?A:0,A,A),d.setRenderTarget(r),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ys||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ah(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,mp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$0[(r-s-1)%$0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new He(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ws-1),x=s/p,g=isFinite(s)?1+Math.floor(u*x):ws;g>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);let m=[],v=0;for(let L=0;L<ws;++L){let U=L/x,S=Math.exp(-U*U/2);m.push(S),L===0?v+=S:L<g&&(v+=2*S)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-i;let y=this._sizeLods[r],A=3*y*(r>M-Do?r-M+Do:0),E=4*(this._cubeSize-y);Ah(t,A,E,3*y,2*y),l.setRenderTarget(t),l.render(d,mp)}};function Zw(n){let e=[],t=[],i=[],r=n,s=n-Do+1+Q0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Do?l=Q0[o-n+Do-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*h),M=new Float32Array(g*p*h),y=new Float32Array(m*p*h);for(let E=0;E<h;E++){let L=E%3*2/3-1,U=E>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];v.set(S,x*p*E),M.set(f,g*p*E);let b=[E,E,E,E,E,E];y.set(b,m*p*E)}let A=new et;A.setAttribute("position",new gt(v,x)),A.setAttribute("uv",new gt(M,g)),A.setAttribute("faceIndex",new gt(y,m)),e.push(A),r>Do&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ex(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ah(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jw(n,e,t){let i=new Float32Array(ws),r=new _(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function tx(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function nx(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Rp(){return`

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
	`}function Jw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Li||l===Vu,u=l===ys||l===vs;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Uo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Uo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Kw(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,x=0;if(h!==null){let v=h.array;x=h.version;for(let M=0,y=v.length;M<y;M+=3){let A=v[M+0],E=v[M+1],L=v[M+2];f.push(A,E,E,L,L,A)}}else if(p!==void 0){let v=p.array;x=p.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let A=M+0,E=M+1,L=M+2;f.push(A,E,E,L,L,A)}}else return;let g=new(cp(f)?Ga:ds)(f,1);g.version=x;let m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $w(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function d(f,h,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v]*x[v];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eT(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tT(n,e,t){let i=new WeakMap,r=new ft;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;h===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*d),L=new ka(E,y,A,d);L.type=wi,L.needsUpdate=!0;let U=M*4;for(let b=0;b<d;b++){let R=g[b],z=m[b],O=v[b],Y=y*A*4*b;for(let N=0;N<R.count;N++){let k=N*U;h===!0&&(r.fromBufferAttribute(R,N),E[Y+k+0]=r.x,E[Y+k+1]=r.y,E[Y+k+2]=r.z,E[Y+k+3]=0),p===!0&&(r.fromBufferAttribute(z,N),E[Y+k+4]=r.x,E[Y+k+5]=r.y,E[Y+k+6]=r.z,E[Y+k+7]=0),x===!0&&(r.fromBufferAttribute(O,N),E[Y+k+8]=r.x,E[Y+k+9]=r.y,E[Y+k+10]=r.z,E[Y+k+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new xe(y,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function nT(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var bx=new Mn,ix=new Ka(1,1),Mx=new ka,Sx=new au,wx=new Wa,rx=[],sx=[],ox=new Float32Array(16),ax=new Float32Array(9),lx=new Float32Array(4);function Fo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=rx[r];if(s===void 0&&(s=new Float32Array(r),rx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rh(n,e){let t=sx[e];t===void 0&&(t=new Int32Array(e),sx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function sT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function oT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function aT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;lx.set(i),n.uniformMatrix2fv(this.addr,!1,lx),dn(t,i)}}function lT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;ax.set(i),n.uniformMatrix3fv(this.addr,!1,ax),dn(t,i)}}function cT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;ox.set(i),n.uniformMatrix4fv(this.addr,!1,ox),dn(t,i)}}function uT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function dT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function fT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function pT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function gT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function xT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function yT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ix.compareFunction=op,s=ix):s=bx,t.setTexture2D(e||s,r)}function vT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sx,r)}function _T(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wx,r)}function bT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mx,r)}function MT(n){switch(n){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return fT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return bT}}function ST(n,e){n.uniform1fv(this.addr,e)}function wT(n,e){let t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function TT(n,e){let t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function AT(n,e){let t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function ET(n,e){let t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CT(n,e){let t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RT(n,e){let t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IT(n,e){n.uniform1iv(this.addr,e)}function PT(n,e){n.uniform2iv(this.addr,e)}function DT(n,e){n.uniform3iv(this.addr,e)}function LT(n,e){n.uniform4iv(this.addr,e)}function UT(n,e){n.uniform1uiv(this.addr,e)}function FT(n,e){n.uniform2uiv(this.addr,e)}function NT(n,e){n.uniform3uiv(this.addr,e)}function BT(n,e){n.uniform4uiv(this.addr,e)}function OT(n,e,t){let i=this.cache,r=e.length,s=Rh(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bx,s[o])}function zT(n,e,t){let i=this.cache,r=e.length,s=Rh(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sx,s[o])}function VT(n,e,t){let i=this.cache,r=e.length,s=Rh(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wx,s[o])}function kT(n,e,t){let i=this.cache,r=e.length,s=Rh(t,r);hn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mx,s[o])}function GT(n){switch(n){case 5126:return ST;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return ET;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return IT;case 35667:case 35671:return PT;case 35668:case 35672:return DT;case 35669:case 35673:return LT;case 5125:return UT;case 36294:return FT;case 36295:return NT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}var bp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}},Mp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}},Sp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},_p=/(\w+)(\])?(\[|\.)?/g;function cx(n,e){n.seq.push(e),n.map[e.id]=e}function HT(n,e,t){let i=n.name,r=i.length;for(_p.lastIndex=0;;){let s=_p.exec(i),o=_p.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cx(t,c===void 0?new bp(a,n,e):new Mp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Sp(a),cx(t,d)),t=d}}}var Lo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ux(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WT=37297,qT=0;function XT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var hx=new rt;function YT(n){mt._getMatrix(hx,mt.workingColorSpace,n);let e=`mat3( ${hx.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+XT(n.getShaderSource(e),a)}else return s}function ZT(n,e){let t=YT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jT(n,e){let t;switch(e){case T0:t="Linear";break;case A0:t="Reinhard";break;case E0:t="Cineon";break;case zu:t="ACESFilmic";break;case R0:t="AgX";break;case I0:t="Neutral";break;case C0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eh=new _;function JT(){mt.getLuminanceCoefficients(Eh);let n=Eh.x.toFixed(4),e=Eh.y.toFixed(4),t=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function KT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $T(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wl(n){return n!==""}function fx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function px(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(n){return n.replace(eA,nA)}var tA=new Map;function nA(n,e){let t=lt[e];if(t===void 0){let i=tA.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wp(t)}var iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(n){return n.replace(iA,rA)}function rA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function sA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function oA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case vs:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case w0:e="ENVMAP_BLENDING_ADD";break}return e}function cA(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uA(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sA(t),c=oA(t),u=aA(t),d=lA(t),f=cA(t),h=QT(t),p=KT(s),x=r.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wl).join(`
`),m.length>0&&(m+=`
`)):(g=[gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),m=[gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?lt.tonemapping_pars_fragment:"",t.toneMapping!==lr?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,ZT("linearToOutputTexel",t.outputColorSpace),JT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wl).join(`
`)),o=wp(o),o=fx(o,t),o=px(o,t),a=wp(a),a=fx(a,t),a=px(a,t),o=mx(o),a=mx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=v+g+o,y=v+m+a,A=ux(r,r.VERTEX_SHADER,M),E=ux(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(R){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(E)||"",N=z.trim(),k=O.trim(),Q=Y.trim(),V=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,E);else{let re=dx(r,A,"vertex"),pe=dx(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+re+`
`+pe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||Q==="")&&(J=!1);J&&(R.diagnostics={runnable:V,programLog:N,vertexShader:{log:k,prefix:g},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(A),r.deleteShader(E),U=new Lo(r,x),S=$T(r,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,WT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var hA=0,Tp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ap(e),t.set(e,i)),i}},Ap=class{constructor(e){this.id=hA++,this.code=e,this.usedTimes=0}};function dA(n,e,t,i,r,s,o){let a=new mo,l=new Tp,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,R,z,O){let Y=z.fog,N=O.geometry,k=S.isMeshStandardMaterial?z.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=Q&&Q.mapping===yl?Q.image.height:null,J=p[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=re!==void 0?re.length:0,ye=0;N.morphAttributes.position!==void 0&&(ye=1),N.morphAttributes.normal!==void 0&&(ye=2),N.morphAttributes.color!==void 0&&(ye=3);let Te,Re,Pe,ie;if(J){let Be=Fi[J];Te=Be.vertexShader,Re=Be.fragmentShader}else Te=S.vertexShader,Re=S.fragmentShader,l.update(S),Pe=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);let ce=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Xe=!!S.map,Ge=!!S.matcap,T=!!Q,F=!!S.aoMap,X=!!S.lightMap,B=!!S.bumpMap,H=!!S.normalMap,I=!!S.displacementMap,q=!!S.emissiveMap,j=!!S.metalnessMap,se=!!S.roughnessMap,fe=S.anisotropy>0,C=S.clearcoat>0,w=S.dispersion>0,Z=S.iridescence>0,ee=S.sheen>0,he=S.transmission>0,oe=fe&&!!S.anisotropyMap,we=C&&!!S.clearcoatMap,ve=C&&!!S.clearcoatNormalMap,Ae=C&&!!S.clearcoatRoughnessMap,Fe=Z&&!!S.iridescenceMap,de=Z&&!!S.iridescenceThicknessMap,be=ee&&!!S.sheenColorMap,Ye=ee&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,De=!!S.specularColorMap,tt=!!S.specularIntensityMap,D=he&&!!S.transmissionMap,W=he&&!!S.thicknessMap,le=!!S.gradientMap,me=!!S.alphaMap,te=S.alphaTest>0,ne=!!S.alphaHash,Me=!!S.extensions,Ee=lr;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ee=n.toneMapping);let ze={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Te,fragmentShader:Re,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:hs,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Ge,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:X,bumpMap:B,normalMap:H,displacementMap:f&&I,emissiveMap:q,normalMapObjectSpace:H&&S.normalMapType===U0,normalMapTangentSpace:H&&S.normalMapType===Sh,metalnessMap:j,roughnessMap:se,anisotropy:fe,anisotropyMap:oe,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ae,dispersion:w,iridescence:Z,iridescenceMap:Fe,iridescenceThicknessMap:de,sheen:ee,sheenColorMap:be,sheenRoughnessMap:Ye,specularMap:Ve,specularColorMap:De,specularIntensityMap:tt,transmission:he,transmissionMap:D,thicknessMap:W,gradientMap:le,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:ne,combine:S.combine,mapUv:Xe&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:X&&x(S.lightMap.channel),bumpMapUv:B&&x(S.bumpMap.channel),normalMapUv:H&&x(S.normalMap.channel),displacementMapUv:I&&x(S.displacementMap.channel),emissiveMapUv:q&&x(S.emissiveMap.channel),metalnessMapUv:j&&x(S.metalnessMap.channel),roughnessMapUv:se&&x(S.roughnessMap.channel),anisotropyMapUv:oe&&x(S.anisotropyMap.channel),clearcoatMapUv:we&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(S.sheenRoughnessMap.channel),specularMapUv:Ve&&x(S.specularMap.channel),specularColorMapUv:De&&x(S.specularColorMap.channel),specularIntensityMapUv:tt&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:W&&x(S.thicknessMap.channel),alphaMapUv:me&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(H||fe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Xe||me),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:q&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===In,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(b,S),M(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=p[S.type],R;if(b){let z=Fi[b];R=wh.clone(z.uniforms)}else R=S.uniforms;return R}function A(S,b){let R;for(let z=0,O=u.length;z<O;z++){let Y=u[z];if(Y.cacheKey===b){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new uA(n,b,S,s),u.push(R)),R}function E(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:U}}function fA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function pA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,p,x,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:x,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function a(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(d,f,h,p,x,g){let m=o(d,f,h,p,x,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||pA),i.length>1&&i.sort(f||xx),r.length>1&&r.sort(f||xx)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mA(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new yx,n.set(i,[o])):r>=s.length?(o=new yx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Le};break;case"SpotLight":t={position:new _,direction:new _,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new _,halfWidth:new _,halfHeight:new _};break}return n[e.id]=t,t}}}function xA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yA=0;function vA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _A(n){let e=new gA,t=xA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let r=new _,s=new ct,o=new ct;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,v=0,M=0,y=0,A=0,E=0,L=0;c.sort(vA);for(let S=0,b=c.length;S<b;S++){let R=c[S],z=R.color,O=R.intensity,Y=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*O,d+=z.g*O,f+=z.b*O;else if(R.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],O);L++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=R.shadow.matrix,v++}i.directional[h]=k,h++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(z).multiplyScalar(O),k.distance=Y,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[x]=k;let Q=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,Q.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=N,y++}x++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(z).multiplyScalar(O),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=k,g++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=k,p++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(O),k.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==h||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==v||U.numPointShadows!==M||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=L,U.directionalLength=h,U.pointLength=p,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=v,U.numPointShadows=M,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=L,i.version=yA++)}function l(c,u){let d=0,f=0,h=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let M=c[m];if(M.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(M.isSpotLight){let y=i.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(M.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function vx(n){let e=new _A(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bA(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new vx(n),e.set(r,[a])):s>=o.length?(a=new vx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`;function wA(n,e,t){let i=new _o,r=new xe,s=new xe,o=new ft,a=new yu({depthPacking:L0}),l=new vu,c={},u=t.maxTextureSize,d={[_i]:In,[In]:_i,[mn]:mn},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:MA,fragmentShader:SA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let m=this.type;this.render=function(E,L,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ar),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=m!==Di&&this.type===Di,Y=m===Di&&this.type!==Di;for(let N=0,k=E.length;N<k;N++){let Q=E[N],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let J=V.getFrameExtents();if(r.multiply(J),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,V.mapSize.y=s.y)),V.map===null||O===!0||Y===!0){let pe=this.type!==Di?{minFilter:gn,magFilter:gn}:{};V.map!==null&&V.map.dispose(),V.map=new zn(r.x,r.y,pe),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let re=V.getViewportCount();for(let pe=0;pe<re;pe++){let ye=V.getViewport(pe);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),z.viewport(o),V.updateMatrices(Q,pe),i=V.getFrustum(),y(L,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Di&&v(V,U),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(S,b,R)};function v(E,L){let U=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(L,null,U,h,x,null)}function M(E,L,U,S){let b=null,R=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)b=R;else if(b=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=b.uuid,O=L.uuid,Y=c[z];Y===void 0&&(Y={},c[z]=Y);let N=Y[O];N===void 0&&(N=b.clone(),Y[O]=N,L.addEventListener("dispose",A)),b=N}if(b.visible=L.visible,b.wireframe=L.wireframe,S===Di?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=n.properties.get(b);z.light=U}return b}function y(E,L,U,S,b){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Di)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let N=O.groups;for(let k=0,Q=N.length;k<Q;k++){let V=N[k],J=Y[V.materialIndex];if(J&&J.visible){let re=M(E,J,S,b);E.onBeforeShadow(n,E,L,U,O,re,V),n.renderBufferDirect(U,null,O,re,E,V),E.onAfterShadow(n,E,L,U,O,re,V)}}}else if(Y.visible){let N=M(E,Y,S,b);E.onBeforeShadow(n,E,L,U,O,N,null),n.renderBufferDirect(U,null,O,N,E,null),E.onAfterShadow(n,E,L,U,O,N,null)}}let z=E.children;for(let O=0,Y=z.length;O<Y;O++)y(z[O],L,U,S,b)}function A(E){E.target.removeEventListener("dispose",A);for(let U in c){let S=c[U],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var TA={[Pu]:Du,[Lu]:Nu,[Uu]:Bu,[us]:Fu,[Du]:Pu,[Nu]:Lu,[Bu]:Uu,[Fu]:us};function AA(n,e){function t(){let D=!1,W=new ft,le=null,me=new ft(0,0,0,0);return{setMask:function(te){le!==te&&!D&&(n.colorMask(te,te,te,te),le=te)},setLocked:function(te){D=te},setClear:function(te,ne,Me,Ee,ze){ze===!0&&(te*=Ee,ne*=Ee,Me*=Ee),W.set(te,ne,Me,Ee),me.equals(W)===!1&&(n.clearColor(te,ne,Me,Ee),me.copy(W))},reset:function(){D=!1,le=null,me.set(-1,0,0,0)}}}function i(){let D=!1,W=!1,le=null,me=null,te=null;return{setReversed:function(ne){if(W!==ne){let Me=e.get("EXT_clip_control");ne?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),W=ne;let Ee=te;te=null,this.setClear(Ee)}},getReversed:function(){return W},setTest:function(ne){ne?ce(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ne){le!==ne&&!D&&(n.depthMask(ne),le=ne)},setFunc:function(ne){if(W&&(ne=TA[ne]),me!==ne){switch(ne){case Pu:n.depthFunc(n.NEVER);break;case Du:n.depthFunc(n.ALWAYS);break;case Lu:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case Uu:n.depthFunc(n.EQUAL);break;case Fu:n.depthFunc(n.GEQUAL);break;case Nu:n.depthFunc(n.GREATER);break;case Bu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ne}},setLocked:function(ne){D=ne},setClear:function(ne){te!==ne&&(W&&(ne=1-ne),n.clearDepth(ne),te=ne)},reset:function(){D=!1,le=null,me=null,te=null,W=!1}}}function r(){let D=!1,W=null,le=null,me=null,te=null,ne=null,Me=null,Ee=null,ze=null;return{setTest:function(Be){D||(Be?ce(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(Be){W!==Be&&!D&&(n.stencilMask(Be),W=Be)},setFunc:function(Be,Mt,Wt){(le!==Be||me!==Mt||te!==Wt)&&(n.stencilFunc(Be,Mt,Wt),le=Be,me=Mt,te=Wt)},setOp:function(Be,Mt,Wt){(ne!==Be||Me!==Mt||Ee!==Wt)&&(n.stencilOp(Be,Mt,Wt),ne=Be,Me=Mt,Ee=Wt)},setLocked:function(Be){D=Be},setClear:function(Be){ze!==Be&&(n.clearStencil(Be),ze=Be)},reset:function(){D=!1,W=null,le=null,me=null,te=null,ne=null,Me=null,Ee=null,ze=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,v=null,M=null,y=null,A=null,E=null,L=new Le(0,0,0),U=0,S=!1,b=null,R=null,z=null,O=null,Y=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Q>=2);let J=null,re={},pe=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Te=new ft().fromArray(pe),Re=new ft().fromArray(ye);function Pe(D,W,le,me){let te=new Uint8Array(4),ne=n.createTexture();n.bindTexture(D,ne),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<le;Me++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(W+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return ne}let ie={};ie[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(us),B(!1),H(jf),ce(n.CULL_FACE),F(ar);function ce(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ge(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ie(D,W){return d[D]!==W?(n.bindFramebuffer(D,W),d[D]=W,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=W),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=W),!0):!1}function _e(D,W){let le=h,me=!1;if(D){le=f.get(W),le===void 0&&(le=[],f.set(W,le));let te=D.textures;if(le.length!==te.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Me=te.length;ne<Me;ne++)le[ne]=n.COLOR_ATTACHMENT0+ne;le.length=te.length,me=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,me=!0);me&&n.drawBuffers(le)}function Xe(D){return p!==D?(n.useProgram(D),p=D,!0):!1}let Ge={[Pr]:n.FUNC_ADD,[o0]:n.FUNC_SUBTRACT,[a0]:n.FUNC_REVERSE_SUBTRACT};Ge[l0]=n.MIN,Ge[c0]=n.MAX;let T={[u0]:n.ZERO,[h0]:n.ONE,[d0]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[y0]:n.SRC_ALPHA_SATURATE,[g0]:n.DST_COLOR,[p0]:n.DST_ALPHA,[f0]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[x0]:n.ONE_MINUS_DST_COLOR,[m0]:n.ONE_MINUS_DST_ALPHA,[v0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[b0]:n.CONSTANT_ALPHA,[M0]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,W,le,me,te,ne,Me,Ee,ze,Be){if(D===ar){x===!0&&(ge(n.BLEND),x=!1);return}if(x===!1&&(ce(n.BLEND),x=!0),D!==s0){if(D!==g||Be!==S){if((m!==Pr||y!==Pr)&&(n.blendEquation(n.FUNC_ADD),m=Pr,y=Pr),Be)switch(D){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,A=null,E=null,L.set(0,0,0),U=0,g=D,S=Be}return}te=te||W,ne=ne||le,Me=Me||me,(W!==m||te!==y)&&(n.blendEquationSeparate(Ge[W],Ge[te]),m=W,y=te),(le!==v||me!==M||ne!==A||Me!==E)&&(n.blendFuncSeparate(T[le],T[me],T[ne],T[Me]),v=le,M=me,A=ne,E=Me),(Ee.equals(L)===!1||ze!==U)&&(n.blendColor(Ee.r,Ee.g,Ee.b,ze),L.copy(Ee),U=ze),g=D,S=!1}function X(D,W){D.side===mn?ge(n.CULL_FACE):ce(n.CULL_FACE);let le=D.side===In;W&&(le=!le),B(le),D.blending===cs&&D.transparent===!1?F(ar):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),q(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function H(D){D!==n0?(ce(n.CULL_FACE),D!==R&&(D===jf?n.cullFace(n.BACK):D===i0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),R=D}function I(D){D!==z&&(k&&n.lineWidth(D),z=D)}function q(D,W,le){D?(ce(n.POLYGON_OFFSET_FILL),(O!==W||Y!==le)&&(n.polygonOffset(W,le),O=W,Y=le)):ge(n.POLYGON_OFFSET_FILL)}function j(D){D?ce(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function se(D){D===void 0&&(D=n.TEXTURE0+N-1),J!==D&&(n.activeTexture(D),J=D)}function fe(D,W,le){le===void 0&&(J===null?le=n.TEXTURE0+N-1:le=J);let me=re[le];me===void 0&&(me={type:void 0,texture:void 0},re[le]=me),(me.type!==D||me.texture!==W)&&(J!==le&&(n.activeTexture(le),J=le),n.bindTexture(D,W||ie[D]),me.type=D,me.texture=W)}function C(){let D=re[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function Ye(D){Re.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Ve(D,W){let le=c.get(W);le===void 0&&(le=new WeakMap,c.set(W,le));let me=le.get(D);me===void 0&&(me=n.getUniformBlockIndex(W,D.name),le.set(D,me))}function De(D,W){let me=c.get(W).get(D);l.get(W)!==me&&(n.uniformBlockBinding(W,me,D.__bindingPointIndex),l.set(W,me))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,re={},d={},f=new WeakMap,h=[],p=null,x=!1,g=null,m=null,v=null,M=null,y=null,A=null,E=null,L=new Le(0,0,0),U=0,S=!1,b=null,R=null,z=null,O=null,Y=null,Te.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:ge,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Xe,setBlending:F,setMaterial:X,setFlipSided:B,setCullFace:H,setLineWidth:I,setPolygonOffset:q,setScissorTest:j,activeTexture:se,bindTexture:fe,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:Fe,texImage3D:de,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:ve,texStorage3D:Ae,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:we,scissor:be,viewport:Ye,reset:tt}}function EA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return h?new OffscreenCanvas(C,w):ho("canvas")}function x(C,w,Z){let ee=1,he=fe(C);if((he.width>Z||he.height>Z)&&(ee=Z/Math.max(he.width,he.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let oe=Math.floor(ee*he.width),we=Math.floor(ee*he.height);d===void 0&&(d=p(oe,we));let ve=w?p(oe,we):d;return ve.width=oe,ve.height=we,ve.getContext("2d").drawImage(C,0,0,oe,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+we+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,w,Z,ee,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=w;if(w===n.RED&&(Z===n.FLOAT&&(oe=n.R32F),Z===n.HALF_FLOAT&&(oe=n.R16F),Z===n.UNSIGNED_BYTE&&(oe=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.R8UI),Z===n.UNSIGNED_SHORT&&(oe=n.R16UI),Z===n.UNSIGNED_INT&&(oe=n.R32UI),Z===n.BYTE&&(oe=n.R8I),Z===n.SHORT&&(oe=n.R16I),Z===n.INT&&(oe=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(oe=n.RG32F),Z===n.HALF_FLOAT&&(oe=n.RG16F),Z===n.UNSIGNED_BYTE&&(oe=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RG16UI),Z===n.UNSIGNED_INT&&(oe=n.RG32UI),Z===n.BYTE&&(oe=n.RG8I),Z===n.SHORT&&(oe=n.RG16I),Z===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),Z===n.UNSIGNED_INT&&(oe=n.RGB32UI),Z===n.BYTE&&(oe=n.RGB8I),Z===n.SHORT&&(oe=n.RGB16I),Z===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(oe=n.RGBA32UI),Z===n.BYTE&&(oe=n.RGBA8I),Z===n.SHORT&&(oe=n.RGBA16I),Z===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&(Z===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),w===n.RGBA){let we=he?za:mt.getTransfer(ee);Z===n.FLOAT&&(oe=n.RGBA32F),Z===n.HALF_FLOAT&&(oe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(oe=we===Tt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(C,w){let Z;return C?w===null||w===Nr||w===Ro?Z=n.DEPTH24_STENCIL8:w===wi?Z=n.DEPTH32F_STENCIL8:w===Co&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nr||w===Ro?Z=n.DEPTH_COMPONENT24:w===wi?Z=n.DEPTH_COMPONENT32F:w===Co&&(Z=n.DEPTH_COMPONENT16),Z}function A(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){let w=C.target;w.removeEventListener("dispose",E),U(w),w.isVideoTexture&&u.delete(w)}function L(C){let w=C.target;w.removeEventListener("dispose",L),b(w)}function U(C){let w=i.get(C);if(w.__webglInit===void 0)return;let Z=C.source,ee=f.get(Z);if(ee){let he=ee[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(C),Object.keys(ee).length===0&&f.delete(Z)}i.remove(C)}function S(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let Z=C.source,ee=f.get(Z);delete ee[w.__cacheKey],o.memory.textures--}function b(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let he=0;he<w.__webglFramebuffer[ee].length;he++)n.deleteFramebuffer(w.__webglFramebuffer[ee][he]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=C.textures;for(let ee=0,he=Z.length;ee<he;ee++){let oe=i.get(Z[ee]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(Z[ee])}i.remove(C)}let R=0;function z(){R=0}function O(){let C=R;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function Y(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function N(C,w){let Z=i.get(C);if(C.isVideoTexture&&j(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){let ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Z,C,w);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function k(C,w){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ie(Z,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function Q(C,w){let Z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ie(Z,C,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function V(C,w){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){ce(Z,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}let J={[Rn]:n.REPEAT,[Ir]:n.CLAMP_TO_EDGE,[nu]:n.MIRRORED_REPEAT},re={[gn]:n.NEAREST,[P0]:n.NEAREST_MIPMAP_NEAREST,[vl]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ku]:n.LINEAR_MIPMAP_NEAREST,[Pn]:n.LINEAR_MIPMAP_LINEAR},pe={[F0]:n.NEVER,[k0]:n.ALWAYS,[N0]:n.LESS,[op]:n.LEQUAL,[B0]:n.EQUAL,[V0]:n.GEQUAL,[O0]:n.GREATER,[z0]:n.NOTEQUAL};function ye(C,w){if(w.type===wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===ku||w.magFilter===vl||w.magFilter===Pn||w.minFilter===ln||w.minFilter===ku||w.minFilter===vl||w.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,J[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==vl&&w.minFilter!==Pn||w.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(C,w){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));let ee=w.source,he=f.get(ee);he===void 0&&(he={},f.set(ee,he));let oe=Y(w);if(oe!==C.__cacheKey){he[oe]===void 0&&(he[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[oe].usedTimes++;let we=he[C.__cacheKey];we!==void 0&&(he[C.__cacheKey].usedTimes--,we.usedTimes===0&&S(w)),C.__cacheKey=oe,C.__webglTexture=he[oe].texture}return Z}function Re(C,w,Z){return Math.floor(Math.floor(C/Z)/w)}function Pe(C,w,Z,ee){let oe=C.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,ee,w.data);else{oe.sort((de,be)=>de.start-be.start);let we=0;for(let de=1;de<oe.length;de++){let be=oe[we],Ye=oe[de],Ve=be.start+be.count,De=Re(Ye.start,w.width,4),tt=Re(be.start,w.width,4);Ye.start<=Ve+1&&De===tt&&Re(Ye.start+Ye.count-1,w.width,4)===De?be.count=Math.max(be.count,Ye.start+Ye.count-be.start):(++we,oe[we]=Ye)}oe.length=we+1;let ve=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let de=0,be=oe.length;de<be;de++){let Ye=oe[de],Ve=Math.floor(Ye.start/4),De=Math.ceil(Ye.count/4),tt=Ve%w.width,D=Math.floor(Ve/w.width),W=De,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,tt,D,W,le,Z,ee,w.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function ie(C,w,Z){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);let he=Te(C,w),oe=w.source;t.bindTexture(ee,C.__webglTexture,n.TEXTURE0+Z);let we=i.get(oe);if(oe.version!==we.__version||he===!0){t.activeTexture(n.TEXTURE0+Z);let ve=mt.getPrimaries(mt.workingColorSpace),Ae=w.colorSpace===cr?null:mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===cr||ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let de=x(w.image,!1,r.maxTextureSize);de=se(w,de);let be=s.convert(w.format,w.colorSpace),Ye=s.convert(w.type),Ve=M(w.internalFormat,be,Ye,w.colorSpace,w.isVideoTexture);ye(ee,w);let De,tt=w.mipmaps,D=w.isVideoTexture!==!0,W=we.__version===void 0||he===!0,le=oe.dataReady,me=A(w,de);if(w.isDepthTexture)Ve=y(w.format===Io,w.type),W&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ve,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,be,Ye,null));else if(w.isDataTexture)if(tt.length>0){D&&W&&t.texStorage2D(n.TEXTURE_2D,me,Ve,tt[0].width,tt[0].height);for(let te=0,ne=tt.length;te<ne;te++)De=tt[te],D?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,be,Ye,De.data):t.texImage2D(n.TEXTURE_2D,te,Ve,De.width,De.height,0,be,Ye,De.data);w.generateMipmaps=!1}else D?(W&&t.texStorage2D(n.TEXTURE_2D,me,Ve,de.width,de.height),le&&Pe(w,de,be,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,be,Ye,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){D&&W&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ve,tt[0].width,tt[0].height,de.depth);for(let te=0,ne=tt.length;te<ne;te++)if(De=tt[te],w.format!==Dn)if(be!==null)if(D){if(le)if(w.layerUpdates.size>0){let Me=pp(De.width,De.height,w.format,w.type);for(let Ee of w.layerUpdates){let ze=De.data.subarray(Ee*Me/De.data.BYTES_PER_ELEMENT,(Ee+1)*Me/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ee,De.width,De.height,1,be,ze)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,de.depth,be,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ve,De.width,De.height,de.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,de.depth,be,Ye,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ve,De.width,De.height,de.depth,0,be,Ye,De.data)}else{D&&W&&t.texStorage2D(n.TEXTURE_2D,me,Ve,tt[0].width,tt[0].height);for(let te=0,ne=tt.length;te<ne;te++)De=tt[te],w.format!==Dn?be!==null?D?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ve,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,be,Ye,De.data):t.texImage2D(n.TEXTURE_2D,te,Ve,De.width,De.height,0,be,Ye,De.data)}else if(w.isDataArrayTexture)if(D){if(W&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ve,de.width,de.height,de.depth),le)if(w.layerUpdates.size>0){let te=pp(de.width,de.height,w.format,w.type);for(let ne of w.layerUpdates){let Me=de.data.subarray(ne*te/de.data.BYTES_PER_ELEMENT,(ne+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,de.width,de.height,1,be,Ye,Me)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,Ye,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,de.width,de.height,de.depth,0,be,Ye,de.data);else if(w.isData3DTexture)D?(W&&t.texStorage3D(n.TEXTURE_3D,me,Ve,de.width,de.height,de.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,Ye,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,de.width,de.height,de.depth,0,be,Ye,de.data);else if(w.isFramebufferTexture){if(W)if(D)t.texStorage2D(n.TEXTURE_2D,me,Ve,de.width,de.height);else{let te=de.width,ne=de.height;for(let Me=0;Me<me;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ve,te,ne,0,be,Ye,null),te>>=1,ne>>=1}}else if(tt.length>0){if(D&&W){let te=fe(tt[0]);t.texStorage2D(n.TEXTURE_2D,me,Ve,te.width,te.height)}for(let te=0,ne=tt.length;te<ne;te++)De=tt[te],D?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,be,Ye,De):t.texImage2D(n.TEXTURE_2D,te,Ve,be,Ye,De);w.generateMipmaps=!1}else if(D){if(W){let te=fe(de);t.texStorage2D(n.TEXTURE_2D,me,Ve,te.width,te.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ye,de)}else t.texImage2D(n.TEXTURE_2D,0,Ve,be,Ye,de);g(w)&&m(ee),we.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ce(C,w,Z){if(w.image.length!==6)return;let ee=Te(C,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Z);let oe=i.get(he);if(he.version!==oe.__version||ee===!0){t.activeTexture(n.TEXTURE0+Z);let we=mt.getPrimaries(mt.workingColorSpace),ve=w.colorSpace===cr?null:mt.getPrimaries(w.colorSpace),Ae=w.colorSpace===cr||we===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,be=[];for(let ne=0;ne<6;ne++)!Fe&&!de?be[ne]=x(w.image[ne],!0,r.maxCubemapSize):be[ne]=de?w.image[ne].image:w.image[ne],be[ne]=se(w,be[ne]);let Ye=be[0],Ve=s.convert(w.format,w.colorSpace),De=s.convert(w.type),tt=M(w.internalFormat,Ve,De,w.colorSpace),D=w.isVideoTexture!==!0,W=oe.__version===void 0||ee===!0,le=he.dataReady,me=A(w,Ye);ye(n.TEXTURE_CUBE_MAP,w);let te;if(Fe){D&&W&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,Ye.width,Ye.height);for(let ne=0;ne<6;ne++){te=be[ne].mipmaps;for(let Me=0;Me<te.length;Me++){let Ee=te[Me];w.format!==Dn?Ve!==null?D?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ee.width,Ee.height,Ve,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,tt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ee.width,Ee.height,Ve,De,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,tt,Ee.width,Ee.height,0,Ve,De,Ee.data)}}}else{if(te=w.mipmaps,D&&W){te.length>0&&me++;let ne=fe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(de){D?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be[ne].width,be[ne].height,Ve,De,be[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,be[ne].width,be[ne].height,0,Ve,De,be[ne].data);for(let Me=0;Me<te.length;Me++){let ze=te[Me].image[ne].image;D?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,ze.width,ze.height,Ve,De,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,tt,ze.width,ze.height,0,Ve,De,ze.data)}}else{D?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,De,be[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Ve,De,be[ne]);for(let Me=0;Me<te.length;Me++){let Ee=te[Me];D?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ve,De,Ee.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,tt,Ve,De,Ee.image[ne])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),oe.__version=he.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,Z,ee,he,oe){let we=s.convert(Z.format,Z.colorSpace),ve=s.convert(Z.type),Ae=M(Z.internalFormat,we,ve,Z.colorSpace),Fe=i.get(w),de=i.get(Z);if(de.__renderTarget=w,!Fe.__hasExternalTextures){let be=Math.max(1,w.width>>oe),Ye=Math.max(1,w.height>>oe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,Ae,be,Ye,w.depth,0,we,ve,null):t.texImage2D(he,oe,Ae,be,Ye,0,we,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),q(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,he,de.__webglTexture,0,I(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,he,de.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(C,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let ee=w.depthTexture,he=ee&&ee.isDepthTexture?ee.type:null,oe=y(w.stencilBuffer,he),we=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=I(w);q(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,oe,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,C)}else{let ee=w.textures;for(let he=0;he<ee.length;he++){let oe=ee[he],we=s.convert(oe.format,oe.colorSpace),ve=s.convert(oe.type),Ae=M(oe.internalFormat,we,ve,oe.colorSpace),Fe=I(w);Z&&q(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ae,w.width,w.height):q(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ae,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let he=ee.__webglTexture,oe=I(w);if(w.depthTexture.format===co)q(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(w.depthTexture.format===Io)q(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Xe(C){let w=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ee=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",he)};ee.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ee}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let ee=C.texture.mipmaps;ee&&ee.length>0?_e(w.__webglFramebuffer[0],C):_e(w.__webglFramebuffer,C)}else if(Z){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ie(w.__webglDepthbuffer[ee],C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,oe)}}else{let ee=C.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ie(w.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(C,w,Z){let ee=i.get(C);w!==void 0&&ge(ee.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Xe(C)}function T(C){let w=C.texture,Z=i.get(C),ee=i.get(w);C.addEventListener("dispose",L);let he=C.textures,oe=C.isWebGLCubeRenderTarget===!0,we=he.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++),oe){Z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Z.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else Z.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)Z.__webglFramebuffer[ve]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(we)for(let ve=0,Ae=he.length;ve<Ae;ve++){let Fe=i.get(he[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&q(C)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){let Ae=he[ve];Z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ve]);let Fe=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),be=M(Ae.internalFormat,Fe,de,Ae.colorSpace,C.isXRRenderTarget===!0),Ye=I(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ye(n.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ge(Z.__webglFramebuffer[ve][Ae],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else ge(Z.__webglFramebuffer[ve],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ve=0,Ae=he.length;ve<Ae;ve++){let Fe=he[ve],de=i.get(Fe),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),ye(be,Fe),ge(Z.__webglFramebuffer,C,Fe,n.COLOR_ATTACHMENT0+ve,be,0),g(Fe)&&m(be)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ee.__webglTexture),ye(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)ge(Z.__webglFramebuffer[Ae],C,w,n.COLOR_ATTACHMENT0,ve,Ae);else ge(Z.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,ve,0);g(w)&&m(ve),t.unbindTexture()}C.depthBuffer&&Xe(C)}function F(C){let w=C.textures;for(let Z=0,ee=w.length;Z<ee;Z++){let he=w[Z];if(g(he)){let oe=v(C),we=i.get(he).__webglTexture;t.bindTexture(oe,we),m(oe),t.unbindTexture()}}}let X=[],B=[];function H(C){if(C.samples>0){if(q(C)===!1){let w=C.textures,Z=C.width,ee=C.height,he=n.COLOR_BUFFER_BIT,oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(C),ve=w.length>1;if(ve)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);let de=i.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,he,n.NEAREST),l===!0&&(X.length=0,B.length=0,X.push(n.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(X.push(oe),B.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);let de=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function I(C){return Math.min(r.maxSamples,C.samples)}function q(C){let w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function j(C){let w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function se(C,w){let Z=C.colorSpace,ee=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==hs&&Z!==cr&&(mt.getTransfer(Z)===Tt?(ee!==Dn||he!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=T,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=q}function CA(n,e){function t(i,r=cr){let s,o=mt.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$f)return n.BYTE;if(i===ep)return n.SHORT;if(i===Co)return n.UNSIGNED_SHORT;if(i===Gu)return n.INT;if(i===Nr)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===ip)return n.ALPHA;if(i===rp)return n.RGB;if(i===Dn)return n.RGBA;if(i===co)return n.DEPTH_COMPONENT;if(i===Io)return n.DEPTH_STENCIL;if(i===qu)return n.RED;if(i===Xu)return n.RED_INTEGER;if(i===sp)return n.RG;if(i===Yu)return n.RG_INTEGER;if(i===Zu)return n.RGBA_INTEGER;if(i===_l||i===bl||i===Ml||i===Sl)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ju||i===Ju||i===Qu||i===Ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ju)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$u||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$u||i===eh)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===th)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===hh||i===dh||i===fh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gh||i===xh||i===yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gh)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===_h||i===bh||i===Mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
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

}`,Ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xn({vertexShader:RA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cp=class extends nr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new Ep,m={},v=t.getContextAttributes(),M=null,y=null,A=[],E=[],L=new xe,U=null,S=new tn;S.viewport=new ft;let b=new tn;b.viewport=new ft;let R=[S,b],z=new Iu,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=A[ie];return ce===void 0&&(ce=new go,A[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=A[ie];return ce===void 0&&(ce=new go,A[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=A[ie];return ce===void 0&&(ce=new go,A[ie]=ce),ce.getHandSpace()};function N(ie){let ce=E.indexOf(ie.inputSource);if(ce===-1)return;let ge=A[ce];ge!==void 0&&(ge.update(ie.inputSource,ie.frame,c||o),ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<A.length;ie++){let ce=E[ie];ce!==null&&(E[ie]=null,A[ie].disconnect(ce))}O=null,Y=null,g.reset();for(let ie in m)delete m[ie];e.setRenderTarget(M),h=null,f=null,d=null,r=null,y=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ie=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=v.stencil?Io:co,Ie=v.stencil?Ro:Nr);let Xe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new zn(f.textureWidth,f.textureHeight,{format:Dn,type:Jn,depthTexture:new Ka(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new zn(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(ie){for(let ce=0;ce<ie.removed.length;ce++){let ge=ie.removed[ce],Ie=E.indexOf(ge);Ie>=0&&(E[Ie]=null,A[Ie].disconnect(ge))}for(let ce=0;ce<ie.added.length;ce++){let ge=ie.added[ce],Ie=E.indexOf(ge);if(Ie===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=E.length){E.push(ge),Ie=Xe;break}else if(E[Xe]===null){E[Xe]=ge,Ie=Xe;break}if(Ie===-1)break}let _e=A[Ie];_e&&_e.connect(ge)}}let V=new _,J=new _;function re(ie,ce,ge){V.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);let Ie=V.distanceTo(J),_e=ce.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,Ge=_e[14]/(_e[10]-1),T=_e[14]/(_e[10]+1),F=(_e[9]+1)/_e[5],X=(_e[9]-1)/_e[5],B=(_e[8]-1)/_e[0],H=(Xe[8]+1)/Xe[0],I=Ge*B,q=Ge*H,j=Ie/(-B+H),se=j*-B;if(ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(se),ie.translateZ(j),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),_e[10]===-1)ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let fe=Ge+j,C=T+j,w=I-se,Z=q+(Ie-se),ee=F*T/C*fe,he=X*T/C*fe;ie.projectionMatrix.makePerspective(w,Z,ee,he,fe,C),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ce=ie.near,ge=ie.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),z.near=b.near=S.near=ce,z.far=b.far=S.far=ge,(O!==z.near||Y!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,Y=z.far),z.layers.mask=ie.layers.mask|6,S.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let Ie=ie.parent,_e=z.cameras;pe(z,Ie);for(let Xe=0;Xe<_e.length;Xe++)pe(_e[Xe],Ie);_e.length===2?re(z,S,b):z.projectionMatrix.copy(S.projectionMatrix),ye(ie,z,Ie)};function ye(ie,ce,ge){ge===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(ge.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=uo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(ie){return m[ie]};let Te=null;function Re(ie,ce){if(u=ce.getViewerPose(c||o),p=ce,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ie=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let T=0;T<ge.length;T++){let F=ge[T],X=null;if(h!==null)X=h.getViewport(F);else{let H=d.getViewSubImage(f,F);X=H.viewport,T===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let B=R[T];B===void 0&&(B=new tn,B.layers.enable(T),B.viewport=new ft,R[T]=B),B.matrix.fromArray(F.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(F.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(X.x,X.y,X.width,X.height),T===0&&(z.matrix.copy(B.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(B)}let _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let T=d.getDepthInformation(ge[0]);T&&T.isValid&&T.texture&&g.init(T,r.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<ge.length;T++){let F=ge[T].camera;if(F){let X=m[F];X||(X=new $a,m[F]=X);let B=d.getCameraImage(F);X.sourceTexture=B}}}}for(let ge=0;ge<A.length;ge++){let Ie=E[ge],_e=A[ge];Ie!==null&&_e!==void 0&&_e.update(Ie,ce,c||o)}Te&&Te(ie,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let Pe=new _x;Pe.setAnimationLoop(Re),this.setAnimationLoop=function(ie){Te=ie},this.dispose=function(){}}},Ms=new rn,PA=new ct;function DA(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,up(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===In&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===In&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(Ms)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;i.uniformBlockBinding(v,y)}function c(v,M){let y=r[v.id];y===void 0&&(p(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));let A=M.program;i.updateUBOMapping(v,A);let E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function u(v){let M=d();v.__bindingPointIndex=M;let y=n.createBuffer(),A=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,L=y.length;E<L;E++){let U=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,b=U.length;S<b;S++){let R=U[S];if(h(R,E,S,A)===!0){let z=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],Y=0;for(let N=0;N<O.length;N++){let k=O[N],Q=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,z+Y,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,M,y,A){let E=v.value,L=M+"_"+y;if(A[L]===void 0)return typeof E=="number"||typeof E=="boolean"?A[L]=E:A[L]=E.clone(),!0;{let U=A[L];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return A[L]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function p(v){let M=v.uniforms,y=0,A=16;for(let L=0,U=M.length;L<U;L++){let S=Array.isArray(M[L])?M[L]:[M[L]];for(let b=0,R=S.length;b<R;b++){let z=S[b],O=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,N=O.length;Y<N;Y++){let k=O[Y],Q=x(k),V=y%A,J=V%Q.boundary,re=V+J;y+=J,re!==0&&A-re<Q.storage&&(y+=A-re),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Q.storage}}}let E=y%A;return E>0&&(y+=A-E),v.__size=y,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(let v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Ch=class{constructor(e={}){let{canvas:t=G0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=ht;let E=0,L=0,U=null,S=-1,b=null,R=new ft,z=new ft,O=null,Y=new Le(0),N=0,k=t.width,Q=t.height,V=1,J=null,re=null,pe=new ft(0,0,k,Q),ye=new ft(0,0,k,Q),Te=!1,Re=new _o,Pe=!1,ie=!1,ce=new ct,ge=new _,Ie=new ft,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ge(){return U===null?V:1}let T=i;function F(P,K){return t.getContext(P,K)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",te,!1),T===null){let K="webgl2";if(T=F(K,P),T===null)throw F(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let X,B,H,I,q,j,se,fe,C,w,Z,ee,he,oe,we,ve,Ae,Fe,de,be,Ye,Ve,De,tt;function D(){X=new Qw(T),X.init(),Ve=new CA(T,X),B=new Ww(T,X,e,Ve),H=new AA(T,X),B.reversedDepthBuffer&&f&&H.buffers.depth.setReversed(!0),I=new eT(T),q=new fA,j=new EA(T,X,H,q,B,Ve,I),se=new Xw(y),fe=new Jw(y),C=new o1(T),De=new Gw(T,C),w=new Kw(T,C,I,De),Z=new nT(T,w,C,I),de=new tT(T,B,j),ve=new qw(q),ee=new dA(y,se,fe,X,B,De,ve),he=new DA(y,q),oe=new mA,we=new bA(X),Fe=new kw(y,se,fe,H,Z,h,l),Ae=new wA(y,Z,B),tt=new LA(T,I,B,H),be=new Hw(T,X,I),Ye=new $w(T,X,I),I.programs=ee.programs,y.capabilities=B,y.extensions=X,y.properties=q,y.renderLists=oe,y.shadowMap=Ae,y.state=H,y.info=I}D();let W=new Cp(y,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let P=X.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=X.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(k,Q,!1))},this.getSize=function(P){return P.set(k,Q)},this.setSize=function(P,K,ae=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,Q=K,t.width=Math.floor(P*V),t.height=Math.floor(K*V),ae===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(k*V,Q*V).floor()},this.setDrawingBufferSize=function(P,K,ae){k=P,Q=K,V=ae,t.width=Math.floor(P*ae),t.height=Math.floor(K*ae),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,K,ae,ue){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,K,ae,ue),H.viewport(R.copy(pe).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,K,ae,ue){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,K,ae,ue),H.scissor(z.copy(ye).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(P){H.setScissorTest(Te=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ae=!0){let ue=0;if(P){let $=!1;if(U!==null){let Se=U.texture.format;$=Se===Zu||Se===Yu||Se===Xu}if($){let Se=U.texture.type,Ne=Se===Jn||Se===Nr||Se===Co||Se===Ro||Se===Hu||Se===Wu,We=Fe.getClearColor(),ke=Fe.getClearAlpha(),Ke=We.r,$e=We.g,Ze=We.b;Ne?(p[0]=Ke,p[1]=$e,p[2]=Ze,p[3]=ke,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Ke,x[1]=$e,x[2]=Ze,x[3]=ke,T.clearBufferiv(T.COLOR,0,x))}else ue|=T.COLOR_BUFFER_BIT}K&&(ue|=T.DEPTH_BUFFER_BIT),ae&&(ue|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Fe.dispose(),oe.dispose(),we.dispose(),q.dispose(),se.dispose(),fe.dispose(),Z.dispose(),De.dispose(),tt.dispose(),ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Wt),W.removeEventListener("sessionend",at),Ut.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=I.autoReset,K=Ae.enabled,ae=Ae.autoUpdate,ue=Ae.needsUpdate,$=Ae.type;D(),I.autoReset=P,Ae.enabled=K,Ae.autoUpdate=ae,Ae.needsUpdate=ue,Ae.type=$}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ne(P){let K=P.target;K.removeEventListener("dispose",ne),Me(K)}function Me(P){Ee(P),q.remove(P)}function Ee(P){let K=q.get(P).programs;K!==void 0&&(K.forEach(function(ae){ee.releaseProgram(ae)}),P.isShaderMaterial&&ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ae,ue,$,Se){K===null&&(K=_e);let Ne=$.isMesh&&$.matrixWorld.determinant()<0,We=Eb(P,K,ae,ue,$);H.setMaterial(ue,Ne);let ke=ae.index,Ke=1;if(ue.wireframe===!0){if(ke=w.getWireframeAttribute(ae),ke===void 0)return;Ke=2}let $e=ae.drawRange,Ze=ae.attributes.position,ut=$e.start*Ke,Ct=($e.start+$e.count)*Ke;Se!==null&&(ut=Math.max(ut,Se.start*Ke),Ct=Math.min(Ct,(Se.start+Se.count)*Ke)),ke!==null?(ut=Math.max(ut,0),Ct=Math.min(Ct,ke.count)):Ze!=null&&(ut=Math.max(ut,0),Ct=Math.min(Ct,Ze.count));let en=Ct-ut;if(en<0||en===1/0)return;De.setup($,ue,We,ae,ke);let Bt,Dt=be;if(ke!==null&&(Bt=C.get(ke),Dt=Ye,Dt.setIndex(Bt)),$.isMesh)ue.wireframe===!0?(H.setLineWidth(ue.wireframeLinewidth*Ge()),Dt.setMode(T.LINES)):Dt.setMode(T.TRIANGLES);else if($.isLine){let Je=ue.linewidth;Je===void 0&&(Je=1),H.setLineWidth(Je*Ge()),$.isLineSegments?Dt.setMode(T.LINES):$.isLineLoop?Dt.setMode(T.LINE_LOOP):Dt.setMode(T.LINE_STRIP)}else $.isPoints?Dt.setMode(T.POINTS):$.isSprite&&Dt.setMode(T.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Je=$._multiDrawStarts,qt=$._multiDrawCounts,xt=$._multiDrawCount,Wn=ke?C.get(ke).bytesPerElement:1,ks=q.get(ue).currentProgram.getUniforms();for(let qn=0;qn<xt;qn++)ks.setValue(T,"_gl_DrawID",qn),Dt.render(Je[qn]/Wn,qt[qn])}else if($.isInstancedMesh)Dt.renderInstances(ut,en,$.count);else if(ae.isInstancedBufferGeometry){let Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qt=Math.min(ae.instanceCount,Je);Dt.renderInstances(ut,en,qt)}else Dt.render(ut,en)};function ze(P,K,ae){P.transparent===!0&&P.side===mn&&P.forceSinglePass===!1?(P.side=In,P.needsUpdate=!0,Sr(P,K,ae),P.side=_i,P.needsUpdate=!0,Sr(P,K,ae),P.side=mn):Sr(P,K,ae)}this.compile=function(P,K,ae=null){ae===null&&(ae=P),m=we.get(ae),m.init(K),M.push(m),ae.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),P!==ae&&P.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let ue=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Se=$.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){let We=Se[Ne];ze(We,ae,$),ue.add(We)}else ze(Se,ae,$),ue.add(Se)}),m=M.pop(),ue},this.compileAsync=function(P,K,ae=null){let ue=this.compile(P,K,ae);return new Promise($=>{function Se(){if(ue.forEach(function(Ne){q.get(Ne).currentProgram.isReady()&&ue.delete(Ne)}),ue.size===0){$(P);return}setTimeout(Se,10)}X.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Be=null;function Mt(P){Be&&Be(P)}function Wt(){Ut.stop()}function at(){Ut.start()}let Ut=new _x;Ut.setAnimationLoop(Mt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(P){Be=P,W.setAnimationLoop(P),P===null?Ut.stop():Ut.start()},W.addEventListener("sessionstart",Wt),W.addEventListener("sessionend",at),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(K),K=W.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,K,U),m=we.get(P,M.length),m.init(K),M.push(m),ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Re.setFromProjectionMatrix(ce,vi,K.reversedDepth),ie=this.localClippingEnabled,Pe=ve.init(this.clippingPlanes,ie),g=oe.get(P,v.length),g.init(),v.push(g),W.enabled===!0&&W.isPresenting===!0){let Se=y.xr.getDepthSensingMesh();Se!==null&&on(Se,K,-1/0,y.sortObjects)}on(P,K,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,re),Xe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(g,P),this.info.render.frame++,Pe===!0&&ve.beginShadows();let ae=m.state.shadowsArray;Ae.render(ae,P,K),Pe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=g.opaque,$=g.transmissive;if(m.setupLights(),K.isArrayCamera){let Se=K.cameras;if($.length>0)for(let Ne=0,We=Se.length;Ne<We;Ne++){let ke=Se[Ne];ts(ue,$,P,ke)}Xe&&Fe.render(P);for(let Ne=0,We=Se.length;Ne<We;Ne++){let ke=Se[Ne];Zi(g,P,ke,ke.viewport)}}else $.length>0&&ts(ue,$,P,K),Xe&&Fe.render(P),Zi(g,P,K);U!==null&&L===0&&(j.updateMultisampleRenderTarget(U),j.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(y,P,K),De.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],Pe===!0&&ve.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function on(P,K,ae,ue){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Re.intersectsSprite(P)){ue&&Ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ce);let Ne=Z.update(P),We=P.material;We.visible&&g.push(P,Ne,We,ae,Ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Re.intersectsObject(P))){let Ne=Z.update(P),We=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ie.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ie.copy(Ne.boundingSphere.center)),Ie.applyMatrix4(P.matrixWorld).applyMatrix4(ce)),Array.isArray(We)){let ke=Ne.groups;for(let Ke=0,$e=ke.length;Ke<$e;Ke++){let Ze=ke[Ke],ut=We[Ze.materialIndex];ut&&ut.visible&&g.push(P,Ne,ut,ae,Ie.z,Ze)}}else We.visible&&g.push(P,Ne,We,ae,Ie.z,null)}}let Se=P.children;for(let Ne=0,We=Se.length;Ne<We;Ne++)on(Se[Ne],K,ae,ue)}function Zi(P,K,ae,ue){let $=P.opaque,Se=P.transmissive,Ne=P.transparent;m.setupLightsView(ae),Pe===!0&&ve.setGlobalState(y.clippingPlanes,ae),ue&&H.viewport(R.copy(ue)),$.length>0&&ns($,K,ae),Se.length>0&&ns(Se,K,ae),Ne.length>0&&ns(Ne,K,ae),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ts(P,K,ae,ue){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ue.id]===void 0&&(m.state.transmissionRenderTarget[ue.id]=new zn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Ui:Jn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let Se=m.state.transmissionRenderTarget[ue.id],Ne=ue.viewport||R;Se.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);let We=y.getRenderTarget(),ke=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(Y),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Fe.render(ae);let $e=y.toneMapping;y.toneMapping=lr;let Ze=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),m.setupLightsView(ue),Pe===!0&&ve.setGlobalState(y.clippingPlanes,ue),ns(P,ae,ue),j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se),X.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Ct=0,en=K.length;Ct<en;Ct++){let Bt=K[Ct],Dt=Bt.object,Je=Bt.geometry,qt=Bt.material,xt=Bt.group;if(qt.side===mn&&Dt.layers.test(ue.layers)){let Wn=qt.side;qt.side=In,qt.needsUpdate=!0,ji(Dt,ae,ue,Je,qt,xt),qt.side=Wn,qt.needsUpdate=!0,ut=!0}}ut===!0&&(j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se))}y.setRenderTarget(We,ke,Ke),y.setClearColor(Y,N),Ze!==void 0&&(ue.viewport=Ze),y.toneMapping=$e}function ns(P,K,ae){let ue=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Se=P.length;$<Se;$++){let Ne=P[$],We=Ne.object,ke=Ne.geometry,Ke=Ne.group,$e=Ne.material;$e.allowOverride===!0&&ue!==null&&($e=ue),We.layers.test(ae.layers)&&ji(We,K,ae,ke,$e,Ke)}}function ji(P,K,ae,ue,$,Se){P.onBeforeRender(y,K,ae,ue,$,Se),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(y,K,ae,ue,P,Se),$.transparent===!0&&$.side===mn&&$.forceSinglePass===!1?($.side=In,$.needsUpdate=!0,y.renderBufferDirect(ae,K,ue,$,P,Se),$.side=_i,$.needsUpdate=!0,y.renderBufferDirect(ae,K,ue,$,P,Se),$.side=mn):y.renderBufferDirect(ae,K,ue,$,P,Se),P.onAfterRender(y,K,ae,ue,$,Se)}function Sr(P,K,ae){K.isScene!==!0&&(K=_e);let ue=q.get(P),$=m.state.lights,Se=m.state.shadowsArray,Ne=$.state.version,We=ee.getParameters(P,$.state,Se,K,ae),ke=ee.getProgramCacheKey(We),Ke=ue.programs;ue.environment=P.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(P.isMeshStandardMaterial?fe:se).get(P.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",ne),Ke=new Map,ue.programs=Ke);let $e=Ke.get(ke);if($e!==void 0){if(ue.currentProgram===$e&&ue.lightsStateVersion===Ne)return lg(P,We),$e}else We.uniforms=ee.getUniforms(P),P.onBeforeCompile(We,y),$e=ee.acquireProgram(We,ke),Ke.set(ke,$e),ue.uniforms=We.uniforms;let Ze=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=ve.uniform),lg(P,We),ue.needsLights=Rb(P),ue.lightsStateVersion=Ne,ue.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ue.currentProgram=$e,ue.uniformsList=null,$e}function ag(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=Lo.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function lg(P,K){let ae=q.get(P);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Eb(P,K,ae,ue,$){K.isScene!==!0&&(K=_e),j.resetTextureUnits();let Se=K.fog,Ne=ue.isMeshStandardMaterial?K.environment:null,We=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:hs,ke=(ue.isMeshStandardMaterial?fe:se).get(ue.envMap||Ne),Ke=ue.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,$e=!!ae.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!ae.morphAttributes.position,ut=!!ae.morphAttributes.normal,Ct=!!ae.morphAttributes.color,en=lr;ue.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(en=y.toneMapping);let Bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Dt=Bt!==void 0?Bt.length:0,Je=q.get(ue),qt=m.state.lights;if(Pe===!0&&(ie===!0||P!==b)){let En=P===b&&ue.id===S;ve.setState(ue,P,En)}let xt=!1;ue.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==We||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isBatchedMesh&&Je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Je.instancingMorph===!1&&$.morphTexture!==null||Je.envMap!==ke||ue.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==$e||Je.morphTargets!==Ze||Je.morphNormals!==ut||Je.morphColors!==Ct||Je.toneMapping!==en||Je.morphTargetsCount!==Dt)&&(xt=!0):(xt=!0,Je.__version=ue.version);let Wn=Je.currentProgram;xt===!0&&(Wn=Sr(ue,K,$));let ks=!1,qn=!1,ba=!1,Xt=Wn.getUniforms(),ei=Je.uniforms;if(H.useProgram(Wn.program)&&(ks=!0,qn=!0,ba=!0),ue.id!==S&&(S=ue.id,qn=!0),ks||b!==P){H.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Xt.setValue(T,"projectionMatrix",P.projectionMatrix),Xt.setValue(T,"viewMatrix",P.matrixWorldInverse);let Nn=Xt.map.cameraPosition;Nn!==void 0&&Nn.setValue(T,ge.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&Xt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Xt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,qn=!0,ba=!0)}if($.isSkinnedMesh){Xt.setOptional(T,$,"bindMatrix"),Xt.setOptional(T,$,"bindMatrixInverse");let En=$.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Xt.setValue(T,"boneTexture",En.boneTexture,j))}$.isBatchedMesh&&(Xt.setOptional(T,$,"batchingTexture"),Xt.setValue(T,"batchingTexture",$._matricesTexture,j),Xt.setOptional(T,$,"batchingIdTexture"),Xt.setValue(T,"batchingIdTexture",$._indirectTexture,j),Xt.setOptional(T,$,"batchingColorTexture"),$._colorsTexture!==null&&Xt.setValue(T,"batchingColorTexture",$._colorsTexture,j));let ti=ae.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&de.update($,ae,Wn),(qn||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Xt.setValue(T,"receiveShadow",$.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(ei.envMap.value=ke,ei.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(ei.envMapIntensity.value=K.environmentIntensity),qn&&(Xt.setValue(T,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Cb(ei,ba),Se&&ue.fog===!0&&he.refreshFogUniforms(ei,Se),he.refreshMaterialUniforms(ei,ue,V,Q,m.state.transmissionRenderTarget[P.id]),Lo.upload(T,ag(Je),ei,j)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Lo.upload(T,ag(Je),ei,j),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Xt.setValue(T,"center",$.center),Xt.setValue(T,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(T,"normalMatrix",$.normalMatrix),Xt.setValue(T,"modelMatrix",$.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let En=ue.uniformsGroups;for(let Nn=0,sf=En.length;Nn<sf;Nn++){let is=En[Nn];tt.update(is,Wn),tt.bind(is,Wn)}}return Wn}function Cb(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Rb(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,ae){let ue=q.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),q.get(P.texture).__webglTexture=K,q.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ae,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let ae=q.get(P);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0};let Ib=T.createFramebuffer();this.setRenderTarget=function(P,K=0,ae=0){U=P,E=K,L=ae;let ue=!0,$=null,Se=!1,Ne=!1;if(P){let ke=q.get(P);if(ke.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(T.FRAMEBUFFER,null),ue=!1;else if(ke.__webglFramebuffer===void 0)j.setupRenderTarget(P);else if(ke.__hasExternalTextures)j.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ze=P.depthTexture;if(ke.__boundDepthTexture!==Ze){if(Ze!==null&&q.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ne=!0);let $e=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[K])?$=$e[K][ae]:$=$e[K],Se=!0):P.samples>0&&j.useMultisampledRTT(P)===!1?$=q.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[ae]:$=$e,R.copy(P.viewport),z.copy(P.scissor),O=P.scissorTest}else R.copy(pe).multiplyScalar(V).floor(),z.copy(ye).multiplyScalar(V).floor(),O=Te;if(ae!==0&&($=Ib),H.bindFramebuffer(T.FRAMEBUFFER,$)&&ue&&H.drawBuffers(P,$),H.viewport(R),H.scissor(z),H.setScissorTest(O),Se){let ke=q.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,ae)}else if(Ne){let ke=K;for(let Ke=0;Ke<P.textures.length;Ke++){let $e=q.get(P.textures[Ke]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ke,$e.__webglTexture,ae,ke)}}else if(P!==null&&ae!==0){let ke=q.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,ae)}S=-1},this.readRenderTargetPixels=function(P,K,ae,ue,$,Se,Ne,We=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){H.bindFramebuffer(T.FRAMEBUFFER,ke);try{let Ke=P.textures[We],$e=Ke.format,Ze=Ke.type;if(!B.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ue&&ae>=0&&ae<=P.height-$&&(P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+We),T.readPixels(K,ae,ue,$,Ve.convert($e),Ve.convert(Ze),Se))}finally{let Ke=U!==null?q.get(U).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(P,K,ae,ue,$,Se,Ne,We=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke)if(K>=0&&K<=P.width-ue&&ae>=0&&ae<=P.height-$){H.bindFramebuffer(T.FRAMEBUFFER,ke);let Ke=P.textures[We],$e=Ke.format,Ze=Ke.type;if(!B.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ut),T.bufferData(T.PIXEL_PACK_BUFFER,Se.byteLength,T.STREAM_READ),P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+We),T.readPixels(K,ae,ue,$,Ve.convert($e),Ve.convert(Ze),0);let Ct=U!==null?q.get(U).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Ct);let en=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await H0(T,en,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Se),T.deleteBuffer(ut),T.deleteSync(en),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,ae=0){let ue=Math.pow(2,-ae),$=Math.floor(P.image.width*ue),Se=Math.floor(P.image.height*ue),Ne=K!==null?K.x:0,We=K!==null?K.y:0;j.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,ae,0,0,Ne,We,$,Se),H.unbindTexture()};let Pb=T.createFramebuffer(),Db=T.createFramebuffer();this.copyTextureToTexture=function(P,K,ae=null,ue=null,$=0,Se=null){Se===null&&($!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Ne,We,ke,Ke,$e,Ze,ut,Ct,en,Bt=P.isCompressedTexture?P.mipmaps[Se]:P.image;if(ae!==null)Ne=ae.max.x-ae.min.x,We=ae.max.y-ae.min.y,ke=ae.isBox3?ae.max.z-ae.min.z:1,Ke=ae.min.x,$e=ae.min.y,Ze=ae.isBox3?ae.min.z:0;else{let ti=Math.pow(2,-$);Ne=Math.floor(Bt.width*ti),We=Math.floor(Bt.height*ti),P.isDataArrayTexture?ke=Bt.depth:P.isData3DTexture?ke=Math.floor(Bt.depth*ti):ke=1,Ke=0,$e=0,Ze=0}ue!==null?(ut=ue.x,Ct=ue.y,en=ue.z):(ut=0,Ct=0,en=0);let Dt=Ve.convert(K.format),Je=Ve.convert(K.type),qt;K.isData3DTexture?(j.setTexture3D(K,0),qt=T.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),qt=T.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,K.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,K.unpackAlignment);let xt=T.getParameter(T.UNPACK_ROW_LENGTH),Wn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ks=T.getParameter(T.UNPACK_SKIP_PIXELS),qn=T.getParameter(T.UNPACK_SKIP_ROWS),ba=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Bt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Bt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ze);let Xt=P.isDataArrayTexture||P.isData3DTexture,ei=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let ti=q.get(P),En=q.get(K),Nn=q.get(ti.__renderTarget),sf=q.get(En.__renderTarget);H.bindFramebuffer(T.READ_FRAMEBUFFER,Nn.__webglFramebuffer),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,sf.__webglFramebuffer);for(let is=0;is<ke;is++)Xt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,q.get(P).__webglTexture,$,Ze+is),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,q.get(K).__webglTexture,Se,en+is)),T.blitFramebuffer(Ke,$e,Ne,We,ut,Ct,Ne,We,T.DEPTH_BUFFER_BIT,T.NEAREST);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if($!==0||P.isRenderTargetTexture||q.has(P)){let ti=q.get(P),En=q.get(K);H.bindFramebuffer(T.READ_FRAMEBUFFER,Pb),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,Db);for(let Nn=0;Nn<ke;Nn++)Xt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ti.__webglTexture,$,Ze+Nn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ti.__webglTexture,$),ei?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,En.__webglTexture,Se,en+Nn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,En.__webglTexture,Se),$!==0?T.blitFramebuffer(Ke,$e,Ne,We,ut,Ct,Ne,We,T.COLOR_BUFFER_BIT,T.NEAREST):ei?T.copyTexSubImage3D(qt,Se,ut,Ct,en+Nn,Ke,$e,Ne,We):T.copyTexSubImage2D(qt,Se,ut,Ct,Ke,$e,Ne,We);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ei?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(qt,Se,ut,Ct,en,Ne,We,ke,Dt,Je,Bt.data):K.isCompressedArrayTexture?T.compressedTexSubImage3D(qt,Se,ut,Ct,en,Ne,We,ke,Dt,Bt.data):T.texSubImage3D(qt,Se,ut,Ct,en,Ne,We,ke,Dt,Je,Bt):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Se,ut,Ct,Ne,We,Dt,Je,Bt.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Se,ut,Ct,Bt.width,Bt.height,Dt,Bt.data):T.texSubImage2D(T.TEXTURE_2D,Se,ut,Ct,Ne,We,Dt,Je,Bt);T.pixelStorei(T.UNPACK_ROW_LENGTH,xt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Wn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ks),T.pixelStorei(T.UNPACK_SKIP_ROWS,qn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ba),Se===0&&K.generateMipmaps&&T.generateMipmap(qt),H.unbindTexture()},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&j.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?j.setTextureCube(P,0):P.isData3DTexture?j.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?j.setTexture2DArray(P,0):j.setTexture2D(P,0),H.unbindTexture()},this.resetState=function(){E=0,L=0,U=null,H.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Tl=class n extends He{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new tn;let i=this,r=t.color!==void 0?new Le(t.color):new Le(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Bn,d=new _,f=new _,h=new _,p=new ct,x=new _(0,0,-1),g=new ft,m=new _,v=new _,M=new ft,y=new ct,A=this.camera,E=new zn(s,o,{samples:c,type:Ui}),L=new xn({name:l.name!==void 0?l.name:"unspecified",uniforms:wh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=E.texture,L.uniforms.color.value=r,L.uniforms.textureMatrix.value=y,this.material=L,this.onBeforeRender=function(U,S,b){if(f.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(b.matrixWorld),p.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(p),m.subVectors(f,h),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(f),p.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(h),v.subVectors(f,x),v.reflect(d).negate(),v.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(d),A.lookAt(v),A.far=b.far,A.updateMatrixWorld(),A.projectionMatrix.copy(b.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let z=A.projectionMatrix;M.x=(Math.sign(g.x)+z.elements[8])/z.elements[0],M.y=(Math.sign(g.y)+z.elements[9])/z.elements[5],M.z=-1,M.w=(1+z.elements[10])/z.elements[14],g.multiplyScalar(2/g.dot(M)),z.elements[2]=g.x,z.elements[6]=g.y,z.elements[10]=g.z+1-a,z.elements[14]=g.w,i.visible=!1;let O=U.getRenderTarget(),Y=U.xr.enabled,N=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(E),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(S,A),U.xr.enabled=Y,U.shadowMap.autoUpdate=N,U.setRenderTarget(O);let k=b.viewport;k!==void 0&&U.state.viewport(k),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()}}};Tl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Ih=Object.freeze([{fur:"#648392",hand:"#7d98a2",shade:"#405b65",skin:"#a8b3a9",skinShade:"#707f7b"},{fur:"#c16141",hand:"#d78254",shade:"#793e36",skin:"#ebac81",skinShade:"#ac705b"},{fur:"#468c63",hand:"#65a776",shade:"#2a5e4d",skin:"#bbca93",skinShade:"#778d68"},{fur:"#7765b7",hand:"#9a85cd",shade:"#503c8c",skin:"#c8b2d8",skinShade:"#897ca2"},{fur:"#428fae",hand:"#66b0c3",shade:"#315b83",skin:"#a8ced6",skinShade:"#648eaa"},{fur:"#ad5274",hand:"#cd728b",shade:"#763550",skin:"#e2a4a4",skinShade:"#a96c82"},{fur:"#ae8a45",hand:"#caa162",shade:"#735a38",skin:"#e5c794",skinShade:"#a78b63"},{fur:"#525993",hand:"#727bb8",shade:"#363c69",skin:"#a5acc3",skinShade:"#676f9a"}].map(n=>Object.freeze(n)));function Ax(n,e,t,i,r){return e.scale(...i),e.rotateZ(r),e.translate(...t),{tone:n,geometry:e}}function wn(n,e,t,i=0,r=0){return Ax(n,new kt(1,i),e,t,r)}function Ip(n,e,t,i=0){return Ax(n,new Mi(1),e,t,i)}function UA(n,e){let t=new et;return t.setAttribute("position",new Oe(e.flat(),3)),{tone:n,geometry:t}}function Tx(n,e,t){let i=[];for(let[r,s]of t.entries())i.push(e,s,t[(r+1)%t.length]);return UA(n,i)}function FA(){let n=[wn("fur",[0,.012,.011],[.154,.161,.132],1),wn("fur",[0,-.065,.008],[.128,.079,.108]),wn("fur",[-.044,.133,.008],[.053,.039,.079],0,-.18),wn("hand",[.023,.139,.009],[.066,.043,.082],0,.24),Tx("skinShade",[0,.021,-.149],[[0,.111,-.084],[.072,.098,-.081],[.118,.055,-.068],[.129,-.018,-.053],[.101,-.09,-.067],[0,-.128,-.085],[-.101,-.09,-.067],[-.129,-.018,-.053],[-.118,.055,-.068],[-.072,.098,-.081]]),wn("skin",[0,-.061,-.133],[.102,.066,.065],1),wn("skinShade",[0,-.097,-.14],[.076,.031,.047]),wn("skin",[0,.015,-.15],[.041,.056,.038]),wn("skinShade",[0,-.018,-.174],[.053,.029,.036])];for(let e of[-1,1])n.push(wn("shade",[e*.144,-.006,.014],[.043,.058,.035],0,e*.2),wn("skin",[e*.158,-.004,-.009],[.027,.039,.017],0,e*.2),Ip("skinShade",[e*.159,-.007,-.021],[.014,.023,.008]),wn("fur",[e*.117,-.049,-.015],[.031,.068,.071],0,-e*.2),wn("skin",[e*.075,-.017,-.125],[.045,.04,.037],0,-e*.25),wn("shade",[e*.052,.069,-.126],[.068,.028,.049],0,e*.14),wn("ink",[e*.048,.033,-.155],[.033,.026,.025],0,e*.1),wn("ivory",[e*.048,.032,-.172],[.023,.016,.012],0,e*.1),wn("ink",[e*.047,.031,-.183],[.011,.012,.006]),Ip("ivory",[e*.047-.004,.036,-.188],[.0035,.0035,.002]),Ip("ink",[e*.029,-.026,-.199],[.015,.007,.007],e*.2));return n.push(Tx("ink",[0,-.08,-.197],[[0,-.078,-.197],[.033,-.077,-.194],[.063,-.07,-.182],[.035,-.084,-.193],[0,-.085,-.196],[-.035,-.084,-.193],[-.063,-.07,-.182],[-.033,-.077,-.194]])),n}function NA(n){let e=[],t=0;for(let{tone:s,geometry:o}of n){let a=t+o.getAttribute("position").count;e.push({tone:s,start:t,end:a}),t=a}let i=new Float32Array(t*3);n.forEach(({geometry:s},o)=>i.set(s.getAttribute("position").array,e[o].start*3));let r=new et;return r.setAttribute("position",new gt(i,3)),r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere(),{geometry:r,ranges:e}}var BA=NA(FA());function Ph(n=0){let e=new yn({flatShading:!0}),t=new yn({flatShading:!0}),i=new yn({vertexColors:!0,flatShading:!0}),r=[],s={ink:new Le("#212128"),ivory:new Le("#fff1ce")},o=-1;function a({colors:u,ranges:d}){for(let{tone:f,start:h,end:p}of d){let{r:x,g,b:m}=s[f];for(let v=h;v<p;v++)u.setXYZ(v,x,g,m)}u.needsUpdate=!0}function l(u){let d=Number.isInteger(u)&&u>=0&&u<Ih.length?u:0;if(d===o)return;o=d;let f=Ih[o];for(let[h,p]of Object.entries(f))(s[h]??=new Le).set(p);e.color.copy(s.fur),t.color.copy(s.hand),r.forEach(a)}function c(u){let d=u.geometry.clone(),f=new gt(new Float32Array(d.getAttribute("position").count*3),3);d.setAttribute("color",f);let h={colors:f,ranges:u.ranges};return r.push(h),a(h),new He(d,i)}return l(n),{fur:e,hand:t,setColor:l,createHead(){let u=new vt;return u.add(c(BA)),u}}}var Ts=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]],OA=[.02,.023,.026,.031,.022,.025,.032,.025,.021,.022,.019],zA=[-.02,-.023,-.026,-.022,-.015,-.018,-.022,-.029,-.031,-.027,-.02],Ex=[{edge:5,length:.082,splay:.05},{edge:3,length:.068,splay:-.14},{edge:7,length:.051,splay:-.66}],Dh=Ts.length-1,Cx=Math.min(...Ts.map(n=>n[1])),Rx=Math.max(...Ts.map(n=>n[1])),ur=new _(0,0,(Cx+Rx)/2),Lh=new _(.047,.027,(Rx-Cx)/2),VA=[[.19,.96,1.02],[.43,.89,.9],[.69,.78,.81],[.9,.6,.63]],kA=[-.57,.57,1,.61,-.61,-1],GA=[1,1,-.04,-.91,-.91,-.04];function Uh(n,e,{openWrist:t=!1}={}){let i=n==="left"||n===-1,r=i?-1:1,s=[],o=[],a=[];function l(S=0,b=0,R=0){let z=s.length/3;return s.push(S*r,b,R),z}function c(S,b,R){i?o.push(S,R,b):o.push(S,b,R)}function u(S,b,R,z){c(S,b,R),c(S,R,z)}function d(S,b){for(let R=0;R<S.length;R++){let z=(R+1)%S.length;u(S[z],S[R],b[R],b[z])}}function f(S,b){for(let R=0;R<S.length;R++)c(b,S[(R+1)%S.length],S[R])}let h=l(-.003,.027,-.021),p=l(-.005,-.019,-.026),x=Ts.map(([S,b,R,z],O)=>{let Y=O===0||O===Dh,N=S*.67,k=-.024+(b+.024)*.69;return{top:l(S,R,b),middle:l(S*1.08,(R+z)/2,Y?b:-.025+(b+.025)*1.04),bottom:l(S,z,b),innerTop:l(N,OA[O],k),innerBottom:l(N,zA[O],k)}});function g(S){let b=x[S],R=x[(S+1)%x.length];return[b.top,R.top,R.middle,R.bottom,b.bottom,b.middle]}let m=new Set(Ex.map(({edge:S})=>S));m.add(Dh);for(let S=0;S<x.length;S++){let b=x[S],R=x[(S+1)%x.length];c(h,b.innerTop,R.innerTop),c(p,R.innerBottom,b.innerBottom),u(b.innerTop,b.top,R.top,R.innerTop),u(R.innerBottom,R.bottom,b.bottom,b.innerBottom),m.has(S)||(u(R.top,b.top,b.middle,R.middle),u(R.middle,b.middle,b.bottom,R.bottom))}let v=g(Dh);t||f(v,l(0,0,Ts[Dh][1]));let M=i?[v[1],v[0],v[5],v[4],v[3],v[2]]:v;for(let{edge:S,length:b,splay:R}of Ex){let[z,O,Y,N]=Ts[S],[k,Q,V,J]=Ts[S+1],re=k-z,pe=Q-O,ye=-pe+re*R,Te=re+pe*R,Re=Math.hypot(ye,Te),Pe=Math.hypot(re,pe)/2,ie=(Y+V-N-J)/4,ce=[],ge=g(S);for(let[_e,Xe,Ge]of VA){let T=[l(),l(),l(),l(),l(),l()];d(ge,T),ce.push({ring:T,distance:_e*b,width:Xe*Pe,height:Ge*ie}),ge=T}let Ie=l();f(ge,Ie),a.push({x:(z+k)/2,y:(Y+V+N+J)/4,z:(O+Q)/2,forwardX:ye/Re,forwardZ:Te/Re,rows:ce,tip:Ie,length:b,pressure:-1})}let y=new et,A=new Oe(s,3).setUsage(Ln);y.setAttribute("position",A),y.setIndex(o),y.boundingSphere=new ii(new _(0,-.018,-.052),.12),y.boundingBox=new nn(new _(-.1,-.082,-.17),new _(.1,.038,.025));let E=!0;function L(S,b=!0){let R=!1;for(let z=0;z<a.length;z++){let O=a[z],Y=S?.[z],N=Number.isFinite(Y)?Ce.clamp(Y,0,1):0;if(N===O.pressure)continue;O.pressure=N,R=!0;let{forwardX:k,forwardZ:Q,length:V,rows:J,tip:re}=O,pe=O.x,ye=O.z,Te=O.y,Re=0,Pe=0;for(let{ring:ge,distance:Ie,width:_e,height:Xe}of J){let Ge=Ie/V,T=Ce.smoothstep(Ge,0,.57),F=Ce.smoothstep(Ge,.38,1),X=(.17+N*.83)*T+(.14+N*.76)*F,B=(X+Re)/2,H=Ie-Pe,I=Math.cos(B)*H;pe+=k*I,Te-=Math.sin(B)*H,ye+=Q*I;for(let q=0;q<ge.length;q++){let j=kA[q]*_e,se=GA[q]*Xe,fe=se*Math.sin(X);A.setXYZ(ge[q],r*(pe+Q*j+k*fe),Te+se*Math.cos(X),ye-k*j+Q*fe)}Re=X,Pe=Ie}let ie=V-Pe,ce=ie*Math.cos(Re);A.setXYZ(re,r*(pe+k*ce),Te-ie*Math.sin(Re),ye+Q*ce)}R&&(A.needsUpdate=!0,E=!0),b&&E&&(y.computeVertexNormals(),E=!1)}L(),y.getAttribute("normal").setUsage(Ln);let U=new He(y,e);return U.castShadow=!0,{mesh:U,pose:L,wristIndices:M}}var Br=12,Pp=[[-.41,.13,.115],[-.32,.215,.16],[.09,.316,.215],[.22,.327,.221],[.34,.264,.193],[.405,.146,.14],[.46,.097,.108]],HA=[[-.66,.75],[.66,.75],[1,0],[.66,-.75],[-.66,-.75],[-1,0]],Ix=Pp.flatMap(([n,e,t])=>Array.from({length:Br},(i,r)=>{let s=(r-.5)*Math.PI*2/Br;return[Math.cos(s)*e,n,Math.sin(s)*t+.04]}));function Fh(n,e){let t=Ix.length,i=[],r=(Q,V,J,re,pe)=>Q.push(V,J,re,V,re,pe);function s(Q,V,J=!1){for(let re=1;re<V.length-1;re++)J?Q.push(V[0],V[re+1],V[re]):Q.push(V[0],V[re],V[re+1])}let o=(Q,V)=>Q*Br+(V+Br)%Br;for(let Q=0;Q<Pp.length-1;Q++)for(let V=0;V<Br;V++)(Q===2||Q===3)&&(V===0||V===6)||r(i,o(Q,V),o(Q+1,V),o(Q+1,V+1),o(Q,V+1));s(i,Array.from({length:Br},(Q,V)=>o(0,V))),s(i,Array.from({length:Br},(Q,V)=>o(Pp.length-1,V)),!0);let a=t,l=e.map(({geometry:Q,wristIndices:V},J)=>{let re=J===0?6:0,pe=[o(4,re),o(4,re+1),o(3,re+1),o(2,re+1),o(2,re),o(3,re)],ye=[pe,...Array.from({length:5},()=>Array.from({length:6},()=>a++))],Te=ye.at(-1),Re=new Array(Q.attributes.position.count);V.forEach((ce,ge)=>{Re[ce]=Te[ge]});for(let ce=0;ce<Re.length;ce++)Re[ce]??=a++;let Pe=[];for(let ce=0;ce<Q.index.count;ce++)Pe.push(Re[Q.index.getX(ce)]);for(let ce=0;ce<ye.length-1;ce++)for(let ge=0;ge<6;ge++){let Ie=(ge+1)%6;r(i,ye[ce][ge],ye[ce][Ie],ye[ce+1][Ie],ye[ce+1][ge])}let ie=[];return s(ie,Te),{socket:pe,rings:ye,wrist:Te,wristIndices:V,remap:Re,skin:Pe,cap:ie,sign:J===0?-1:1}}),c=new et,u=new Oe(a*3,3).setUsage(Ln);c.setAttribute("position",u);let d=new He(c,n);d.castShadow=!0,d.receiveShadow=!0,d.frustumCulled=!1;let f=Array.from({length:4},(Q,V)=>new ds([...i,...l.flatMap((J,re)=>V&1<<re?J.skin:J.cap)],1));c.setIndex(f[0]);let h=new _,p=new _,x=new _,g=new _,m=new _,v=new _,M=new _,y=new _,A=new _,E=new qe,L=new qe,U=new qe,S=new _(0,0,-1),b=new qe().setFromEuler(new rn(-1.42,0,0)),R=[.24,.62,.94,.56],z=[.089,.084,.069,.054,.037],O=0,Y=0,N=!0;function k(Q,V,J,re,pe){let ye=!!(Q[0]||Q[1]);if(!ye&&!N&&O===J&&Y===re)return;O=J,Y=re,N=ye;for(let Re=0;Re<t;Re++){let[Pe,ie,ce]=Ix[Re];u.setXYZ(Re,Pe*J,ie*re,ce*J)}let Te=0;for(let Re=0;Re<l.length;Re++){let Pe=l[Re],ie=Q[Re],ce=e[Re].geometry.attributes.position,ge=!!ie,Ie=Pe.wristIndices;ge&&pe&&(Te|=1<<Re),p.set(0,0,0);for(let _e of Pe.socket)p.add(h.fromBufferAttribute(u,_e));p.multiplyScalar(1/6),g.set(0,0,0);for(let _e of Ie)g.add(h.fromBufferAttribute(ce,_e));g.multiplyScalar(1/6).applyQuaternion(ie?.quaternion??b),ge?g.add(ie.position):g.add(h.set(p.x+Pe.sign*.026,p.y-.43,p.z-.015)),m.subVectors(g,p),v.copy(m).normalize(),M.set(Pe.sign*.38,-1,.27).addScaledVector(v,-v.dot(h.set(Pe.sign*.38,-1,.27))).normalize(),x.copy(p).addScaledVector(m,.49),ge&&x.addScaledVector(M,Math.sqrt(Math.max(.007,V**2-m.lengthSq()*.25))*.72),E.setFromUnitVectors(S,v.subVectors(x,p).normalize()),L.copy(ie?.quaternion??b);for(let _e=0;_e<4;_e++){let Xe=_e===3;A.lerpVectors(Xe?x:p,Xe?g:x,R[_e]),U.copy(E).slerp(L,Xe?.79:_e*.19);for(let Ge=0;Ge<6;Ge++){let T=HA[Ge],F=z[_e];y.set(T[0]*F,T[1]*F*.84,0).applyQuaternion(U).add(A),u.setXYZ(Pe.rings[_e+1][Ge],y.x,y.y,y.z)}}for(let _e=0;_e<Pe.remap.length;_e++)y.fromBufferAttribute(ce,_e).applyQuaternion(L),ge?y.add(ie.position):y.add(h.set(p.x+Pe.sign*.026,p.y-.43,p.z-.015)),u.setXYZ(Pe.remap[_e],y.x,y.y,y.z)}c.index!==f[Te]&&c.setIndex(f[Te]),u.needsUpdate=!0,c.computeVertexNormals()}return k([null,null],.42,1,1,!1),{mesh:d,pose:k}}function No(n,e){let t=new bi;return n.forEach(([i,r],s)=>s===0?t.moveTo(-i,r):t.lineTo(-i,r)),t.closePath(),new sr(t,{depth:e,bevelEnabled:!1}).translate(0,0,-e/2).rotateY(Math.PI/2)}var Px=.1,WA=45,Dx=55,Al=128,Dp=96,qA=[new Le("#ffdc4d"),new Le("#ff5d35"),new Le("#bfc4c8")],XA=new _(0,0,-1);function Lp(){let n=new vt,e=new _t({color:"#596974",roughness:.38,metalness:.6}),t=new _t({color:"#29323e",roughness:.68}),i=new Rt({color:"#ffd563",toneMapped:!1});function r(o,a,l,c,u,d=0){let f=new He(o,a);f.position.set(l,c,u),f.rotation.x=d,n.add(f)}let s=new _t({color:"#7f4231",roughness:.46,metalness:.34});return r(No([[.024,.025],[.012,.052],[-.121,.059],[-.157,.046],[-.169,.026],[-.146,.003],[-.047,-.005],[.015,.006]],.067),t,.035,0,0),r(No([[.012,.013],[-.035,.012],[-.045,-.017],[-.016,-.086],[.034,-.078],[.028,-.06]],.042),s,.035,0,0),r(new sn(.015,.021,.067,6).rotateX(-Math.PI/2),e,.035,.028,-.17),r(new it(.054,.014,.073),s,.035,.045,-.099),r(new it(.018,.008,.023),i,.035,.063,-.131),n}function Lx(n,{impact:e,onShot:t}){let i=Lp(),r=new He(new kt(.045,0),new Rt({color:"#ffb339",transparent:!0,depthWrite:!1,toneMapped:!1}));r.position.set(.035,.028,-.208),i.add(r),n.add(i),i.visible=!1;let s=new et,o=new Oe(Al*18,3).setUsage(Ln),a=new Oe(Al*18,3);for(let O=0;O<Al;O++)for(let Y=0;Y<6;Y++){let N=qA[Math.floor(Y/2)];a.setXYZ(O*6+Y,N.r,N.g,N.b)}s.setAttribute("position",o),s.setAttribute("color",a),s.setDrawRange(0,0);let l=new ps(s,new Pi({vertexColors:!0,toneMapped:!1,transparent:!0,opacity:.94,depthWrite:!1}));l.frustumCulled=!1,l.visible=!1,n.add(l);let c=new Oe(Dp*3,3).setUsage(Ln),u=new et;u.setAttribute("position",c),u.setDrawRange(0,0);let d=new Qa(u,new bo({color:"#ffd268",size:.034,toneMapped:!1,transparent:!0,opacity:.77,depthWrite:!1,blending:ci}));d.frustumCulled=!1,d.visible=!1,n.add(d);let f=Array.from({length:Al},()=>({p:new _,d:new _,distance:0,active:!1,authoritative:!1})),h=Array.from({length:Dp},()=>({p:new _,v:new _,life:0})),p=new _,x=new _,g=new _,m=0,v=0,M=0,y=0,A=0,E=!1;function L(O,Y,N,k){for(let Q=0;Q<N;Q++){let V=h[v++%Dp];V.p.copy(O),V.v.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).multiplyScalar(k).addScaledVector(Y,.55),V.life=.12+Math.random()*.21}}function U(O,Y,N){let k=f[m++%Al];return k.p.copy(O),k.d.copy(XA).applyQuaternion(Y),k.distance=0,k.active=!0,k.authoritative=N,k}function S(O){let Y=U(O.position,O.quaternion,!0);p.set(.035,.028,-.208).applyQuaternion(i.quaternion).add(i.position),L(p,Y.d,4,2.2),A=.055,M++,t?.(O.position,O.quaternion)}function b(O,Y,N){let k=U(O,Y,N);L(k.p,k.d,4,2.2),l.visible=!0}function R({dt:O,aim:Y,firing:N}){if(!Y&&!i.visible&&!l.visible&&!d.visible)return;if(O=Math.max(0,Math.min(O,.12)),i.visible=!!Y,Y&&(i.position.copy(Y.modelPosition??Y.position),i.quaternion.copy(Y.quaternion)),Y&&N){if(E)for(y-=O;y<=0;)S(Y),y+=Px;else S(Y),y=Px;E=!0}else y=0,E=!1;A=Math.max(0,A-O),r.visible=!!Y&&A>0,r.material.opacity=A/.055;let k=0;for(let V of f){if(!V.active)continue;let J=Math.min(WA*O,Dx-V.distance),re=J>0?e?.(V.p,V.d,J,V.authoritative):null,pe=re==null?J:Math.max(0,Math.min(J,re));V.p.addScaledVector(V.d,pe),V.distance+=pe,re!=null&&(g.copy(V.d).negate(),L(V.p,g,8,4.2)),V.active=re==null&&V.distance<Dx;let ye=Math.min(.82,V.distance);for(let Te=0;Te<3;Te++)for(let Re=0;Re<2;Re++){let Pe=(Te+Re)/3;x.copy(V.p).addScaledVector(V.d,-ye*Pe),o.setXYZ(k++,x.x,x.y,x.z)}}l.visible=k>0,k>0&&(o.needsUpdate=!0),s.setDrawRange(0,k);let Q=0;for(let V of h)V.life<=0||(V.life-=O,V.v.y-=5*O,V.p.addScaledVector(V.v,O),V.life>0&&c.setXYZ(Q++,V.p.x,V.p.y,V.p.z));d.visible=Q>0,Q>0&&(c.needsUpdate=!0),u.setDrawRange(0,Q)}function z(){for(let O of f)O.active=!1;for(let O of h)O.life=0;y=A=0,E=!1,i.visible=r.visible=l.visible=d.visible=!1,s.setDrawRange(0,0),u.setDrawRange(0,0)}return{update:R,reset:z,replay:b,get shotsFired(){return M}}}var Ux=["#66f9df","#64bfff","#ff5873","#b997ff","#ffae58","#e2ff7b","#7dcdf9"],YA=new _(0,1,0);function Nh(n){let e=new vt,t=new _t({color:"#2c4750",roughness:.43,metalness:.47}),i=new _t({color:"#899fa3",roughness:.46,metalness:.57}),r=new Rt({toneMapped:!1});function s(h,p,x,g,m,v=0){let M=new He(h,p);return M.position.set(x,g,m),M.rotation.x=v,e.add(M),M}s(No([[.025,.024],[.008,.064],[-.053,.068],[-.123,.042],[-.143,.028],[-.113,-.003],[-.05,-.008],[.016,.006]],.074),t,.038,0,0),s(No([[.013,.019],[-.039,.012],[-.047,-.016],[-.034,-.064],[.008,-.078],[.033,-.054]],.045),i,.038,0,0),s(new sn(.016,.031,.071,8),i,.038,.025,-.131,-Math.PI/2),s(new sn(.016,.02,.011,6,1,!0),r,.038,.025,-.169,-Math.PI/2),s(new it(.044,.009,.038),r,.038,.069,-.023);let o=new He(new sn(.002,.003,1,5,1,!0),new Rt({transparent:!0,opacity:.52,depthWrite:!1,blending:ci,toneMapped:!1})),a=new He(new kt(.012,0),new Rt({transparent:!0,opacity:.78,depthWrite:!1,toneMapped:!1}));n.add(e,o,a);let l=new _,c=new _,u=0;function d(){e.visible=o.visible=a.visible=!1}function f({mode:h,position:p,quaternion:x,end:g}){if(!h||!p||!x||!g){d();return}e.visible=o.visible=a.visible=!0,e.position.copy(p),e.quaternion.copy(x),h!==u&&(u=h,r.color.set(Ux[h-1]??Ux[0]),o.material.color.copy(r.color),a.material.color.copy(r.color)),l.set(.038,.025,-.173).applyQuaternion(e.quaternion).add(e.position),c.subVectors(g,l),o.scale.y=Math.max(.001,c.length()),o.position.copy(l).addScaledVector(c,.5),o.quaternion.setFromUnitVectors(YA,c.normalize()),a.position.copy(g)}return d(),{mesh:e,hide:d,update:f}}var ZA="wss://clouddata.turbowarp.org",jA="itssoren.github.io/VR/gorilla-lab/",zh={vr:"\u2601 GorillaVR",pc:"\u2601 GorillaPC"},Bo=Array.from({length:8},(n,e)=>"\u2601 GorillaPlayer"+e),Bx="\u2601 GorillaHost",El=["ARENE1","ARENE2","ARENE3"],JA=new Map([[Bx,"vr"],[zh.vr,"vr"],[zh.pc,"pc"],...Bo.map(n=>[n,"player"])]),Fp=53,Bh=4400,Ox=64e3,QA=100,KA=200,$A=450,zx=6,jt=(n,e)=>Math.round(n).toString().padStart(e,"0");function Cl(n){return String(n).trim().toUpperCase().replace(/[\s-]/g,"")}function As(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return(e>>>0)%1e6}function eE({time:n,id:e,x:t,y:i,z:r,yaw:s,map:o}){let a=[t,i,r];if(!Number.isSafeInteger(n)||n<1e12||n>=1e13||!Number.isInteger(e)||e<1e6||e>=1e7||!a.every(c=>Number.isFinite(c)&&Math.abs(c)<=180)||!Number.isFinite(s)||!Number.isInteger(o)||o<0||o>=1e6)return null;let l=(s*180/Math.PI%360+360)%360;return"1"+n+jt(e,7)+a.map(c=>jt(c*100+2e4,5)).join("")+jt(Math.round(l*10)%3600,4)+jt(o,6)}function tE(n,e=Date.now()){if(typeof n!="string"||!/^1[0-9]{45}$/.test(n))return null;let t=Number(n.slice(1,14)),i=Number(n.slice(14,21)),[r,s,o]=[21,26,31].map(c=>(Number(n.slice(c,c+5))-2e4)/100),a=Number(n.slice(36,40)),l=Number(n.slice(40,46));return t<1e12||e!==null&&Math.abs(t-e)>25e3||i<1e6||a>=3600||[r,s,o].some(c=>Math.abs(c)>180)?null:{time:t,id:i,x:r,y:s,z:o,yaw:a*Math.PI/1800,map:l}}function Vx({onStatus:n=()=>{},onPose:e=()=>{},onPeer:t=()=>{},onAction:i=()=>{},onShot:r=()=>{},Socket:s=globalThis.WebSocket,now:o=Date.now,monotonicNow:a=o===Date.now?()=>performance.now():o,random:l=Math.random}={}){let c=new Map,u=a(),d=o(),f=null,h=null,p="",x=0,g="",m=-1/0,v=null,M=0,y=0,A=1/0,E=0,L="offline",U=!1,S=-1,b=0,R=[],z=1/0,O=350,Y=1/0,N=0,k=[],Q={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0};function V(T,F){L=T,n(F)}function J(){return"Salon "+p+" \xB7 "+(h==="vr"?"en attente de joueurs ou du spectateur":"en attente de l\u2019h\xF4te")}function re(){return[...c.values()].map(T=>T.pose).filter(Boolean)}function pe(){let T=re().filter(H=>h==="vr"?H.role!=="vr":H.role==="vr"),F=H=>Number(H.ready)*2+ +(H.role==="pc"),X=T.find(H=>H.id===v?.id)??null,B=T.reduce((H,I)=>!H||F(I)>F(H)?I:H,X);B!==v&&(v=B,e(v))}function ye(T){for(let F of c.values())F.pose&&t(null,F.pose),F.pose=F.candidate=null;T&&c.clear(),pe()}function Te(){let T=f;if(f=null,T){T.onopen=T.onmessage=T.onerror=T.onclose=null;try{T.close()}catch{}}}function Re(){Te(),h=null,p="",A=1/0,U=!1,S=-1,R=[],k=[],ye(!0),V("offline","Hors ligne")}function Pe(T){let F=Math.min(3e4,1500*2**Math.min(E++,5));A=a()+F,V("retry","TurboWarp d\xE9connect\xE9 ("+T+") \xB7 reconnexion automatique au salon "+p)}function ie(T){let F=!1;for(let[X,B]of c)B.pose&&T-B.pose.arrival>Bh&&(t(null,B.pose),B.pose=null,F=!0),B.candidate&&T-B.candidate.arrival>Bh&&(B.candidate=null),T-B.lastArrival>6e4&&c.delete(X);F&&pe()}function ce(T,F,X,B){let H=uE(X.value,null);if(!H||H.id===x)return;let I=c.get(H.id);if(!I){if(c.size>=64)return;I={lastTime:-1/0,lastAction:0,lastShot:0,shotWindow:-1/0,shotCount:0,lastArrival:B,pose:null,candidate:null},c.set(H.id,I)}if(H.time<=I.lastTime)return;let q=I.pose??I.candidate;if(q&&H.time-q.time>Bh+B-q.arrival){if(I.pose)return;I.candidate=null}I.lastTime=H.time,I.lastArrival=B;let j={...H,ready:H.ready??!0,protocol:H.protocol??(H.ready===void 0?3:4),role:T,channel:F,received:o(),arrival:B},se=I.candidate;if(!I.pose&&(!se||se.channel!==F||se.map!==j.map||B-se.arrival>Bh)&&(H.ready!==void 0||Math.abs(H.time-j.received)>25e3)){I.candidate=j;return}if(I.candidate=null,!I.pose&&se?.objects&&se.ready&&se.map===j.map&&!j.objects&&(j.objects=se.objects),I.pose=j,h==="vr"&&T==="vr"&&j.ready)if(Y===1/0||se?.arrival<Y||H.id<x)h="player",g=Bo[x%Bo.length],V("open","Salon "+p+" \xB7 h\xF4te d\xE9tect\xE9, entr\xE9e en joueur");else return;if(Q.received++,Q.bytesReceived+=X.value.length,t(j),pe(),!(!U||!j.ready||j.map!==S)){B-I.shotWindow>=1e3&&(I.shotWindow=B,I.shotCount=0);for(let{seq:fe,position:C,quaternion:w}of j.shots??[])fe<=I.lastShot||(I.lastShot=fe,!(I.shotCount>=14||(C.x-j.x)**2+(C.y-j.y)**2+(C.z-j.z)**2>7**2)&&(I.shotCount++,r({position:C,quaternion:w},j)));if(!(h!=="vr"||T!=="player"||H.actionTarget!==x))for(let{seq:fe,action:C}of H.actions)fe<=I.lastAction||(I.lastAction=fe,i(C,j))}}function ge(){let T;try{T=new s(ZA)}catch{return!1}return f=T,y=a(),m=-1/0,Y=1/0,V("connecting","Connexion \xE0 TurboWarp \xB7 salon "+p),T.onopen=()=>{f===T&&(M=a(),T.send(JSON.stringify({method:"handshake",project_id:jA+p,user:"player"+x})+`
`),V("open",J()))},T.onmessage=F=>{if(f!==T||typeof F.data!="string"||F.data.length>105e4)return;let X=a();ie(X);for(let B of F.data.split(`
`)){if(!B.trim())continue;let H;try{H=JSON.parse(B)}catch{console.warn("R\xE9ponse TurboWarp non reconnue :",B.slice(0,200));continue}let I=JA.get(H?.name);H?.method!=="set"||!I||ce(I,H.name,H,X)}},T.onerror=()=>{f===T&&V("connecting","Impossible de joindre TurboWarp \xB7 salon "+p)},T.onclose=F=>{if(f!==T)return;let X=F.code;if(Te(),ye(!1),R=[],k=[],[1001,1005,1006,1011,1012,1013,1014,4003].includes(X)){Pe(X);return}h=null,p="";let B={4e3:"requ\xEAte invalide",4002:"identifiant refus\xE9",4004:"salon indisponible",4005:"connexion refus\xE9e",4006:"client non identifi\xE9"}[X];V("error","TurboWarp d\xE9connect\xE9 ("+X+")"+(B?" \xB7 "+B:F.reason?" \xB7 "+F.reason.slice(0,100):""))},!0}function Ie(T,F){let X=Cl(T);return!/^[A-Z0-9]{5,12}$/.test(X)||!["vr","pc","player"].includes(F)?(n("Code invalide : 5 \xE0 12 lettres ou chiffres."),!1):h===F&&p===X?!0:h?(n("D\xE9connecte-toi avant de changer de r\xF4le ou de salon."),!1):(ye(!0),x=Math.floor(1e6+l()*8999999),h=F,p=X,g=zh[h]??Bo[x%Bo.length],O=350,h==="vr"&&El.includes(p)&&(g=x%2===0?zh.vr:Bx,O=750+x%150),b=N=0,k=[],Q={sent:0,received:0,bytesSent:0,bytesReceived:0,bufferedBytes:0},E=0,A=z=1/0,ge()?!0:(h=null,p="",V("error","WebSocket indisponible."),!1))}function _e(T,F){let X=T.hand||T.type==="world"?5:4;if(h!=="player"||L!=="open"||!v?.ready||v.protocol<X||v.map!==F||!Np(T)||b>=99999999)return!1;let B=a();return R=R.filter(H=>H.expires>=B&&H.target===v.id&&H.map===F),R.length>=8?!1:(R.push({action:{...T},seq:++b,expires:B+1800,target:v.id,map:F}),!0)}function Xe(T,F,X){if(!h||h==="pc"||L!=="open"||N>=99999999)return;let B=Vo(T),H=ko(F);if(!B||!H)return;let I=a();k=k.filter(q=>q.expires>=I&&q.map===X).slice(-(zx-1)),k.push({record:jt(++N,8)+B+H,expires:I+$A,map:X})}function Ge(T){let F=a();U=!!T&&T.ready!==!1,S=T?.map??-1,ie(F),h&&!f&&F>=A&&(A=1/0,ge()||Pe(1006)),f&&f.readyState===0&&F-y>1e4&&(Te(),Pe(1006)),Q.bufferedBytes=f?.bufferedAmount??0;let X=h==="pc"?KA:QA;if(!T||!h||f?.readyState!==1||Q.bufferedBytes>4096||F-M<(h==="vr"?O:350)||F-m<X)return!1;if(h==="player"){let se=re().filter(C=>C.role==="player"),fe=se.find(C=>C.channel===g);if(fe?z=Math.min(F,z):z=1/0,fe&&(fe.id<x||F-z>=800)){let C=Bo.find(w=>!se.some(Z=>Z.channel===w));if(!C)return L!=="capacity"&&V("capacity","Salon "+p+" \xB7 toutes les places joueur PC / mobile sont occup\xE9es."),!1;g=C,z=1/0}}(E||L==="capacity")&&(E=0,V("open",J()));let B=Math.round(d+F-u),H=eE({...T,time:B,id:x});if(!H)return!1;R=R.filter(se=>se.expires>=F&&se.target===v?.id&&se.map===T.map),k=k.filter(se=>se.expires>=F&&se.map===T.map);let I=Q.bufferedBytes===0?T.objectFeed?.(F):null,q=typeof T.avatar=="function"?T.avatar():T.avatar,j=cE(H,q,I,{version:5,ready:T.ready!==!1,actions:R,actionTarget:R[0]?.target??0,shots:k,score:T.score});return m=F,h==="vr"&&(Y=Math.min(Y,F)),f.send(JSON.stringify({method:"set",name:g,value:j})+`
`),Q.sent++,Q.bytesSent+=j.length,!0}return{join:Ie,leave:Re,tick:Ge,sendAction:_e,queueShot:Xe,get stats(){return{...Q}},get role(){return h},get code(){return p},get state(){return L},get remote(){return v},get peers(){return re()}}}var nE=15,iE=12,kx=44,Oh=15,Up=35,Vo=n=>n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=180)?[n.x,n.y,n.z].map(e=>jt(e*100+2e4,5)).join(""):null;function Oo(n,e){let[t,i,r]=[e,e+5,e+10].map(s=>(Number(n.slice(s,s+5))-2e4)/100);return[t,i,r].some(s=>Math.abs(s)>180)?null:{x:t,y:i,z:r}}var ko=n=>n&&[n.x,n.y,n.z,n.w].every(Number.isFinite)?[n.x,n.y,n.z,n.w].map(e=>jt(Math.max(0,Math.min(998,e*499+499)),3)).join(""):null;function zo(n,e){let t=[e,e+3,e+6,e+9].map(l=>(Number(n.slice(l,l+3))-499)/499),i=Math.hypot(...t);if(i<.82||i>1.18)return null;let[r,s,o,a]=t.map(l=>l/i);return{x:r,y:s,z:o,w:a}}function rE(n){let e=Vo(n.mesh.position),t=ko(n.mesh.quaternion),i=n.netId,r=n.netType;if(!e||!t||!Number.isInteger(i)||i<1||i>=1e5||!Number.isInteger(r)||r<0||r>Fp)return null;let s=(n.owner?1:0)+(n.frozen?2:0)+(n.velocity.lengthSq()<.002&&n.angular.lengthSq()<.004&&!n.owner?4:0),o=Math.min(4,Math.max(0,(n.materialStyle??-1)+1)),a=n.mesh.material?.color?.getHex()??16777215;return jt(i,5)+jt(r,2)+s+o+jt(a,8)+e+t}function sE(n){return jt(n,5)+"99"+"0".repeat(kx-7)}function oE(n){if(!n)return null;let e=ko(n.head);if(!e)return null;let t=[n.hands?.[0],n.hands?.[1]],i=t.map(l=>{let c=l&&Vo(l.position),u=l&&ko(l.quaternion);return c&&u?"1"+c+u:"0"+"0".repeat(nE+iE)}),r=jt(Math.max(0,Math.min(999,(n.height??1)*100)),3),s=jt(Math.max(0,Math.min(999,(n.armSpan??1)*100)),3),o=String(Math.min(2,Math.max(0,n.light??0))),a=t.map(l=>[0,1,2].map(c=>{let u=l?.pressure?.[c]??0;return Math.round(Math.max(0,Math.min(1,u))*9)}).join("")).join("");return e+i.join("")+r+s+o+"00"+jt(n.color??0,2)+a}function Np(n){if(!n)return null;let{type:e,typeId:t,objectId:i,mode:r}=n;if(e==="spawn")return Number.isInteger(t)&&t>=0&&t<=Fp?"10"+jt(t,5):null;if(e==="world"){let o=r===1?2:r===2?4:r===3?2:-1;return Number.isInteger(t)&&t>=0&&t<=o?"5"+r+jt(t,5):null}if(!Number.isInteger(i)||i<1||i>=1e5)return null;if(e==="tool")return Number.isInteger(r)&&r>=1&&r<=7?"2"+r+jt(i,5):null;let s=n.hand??0;return(e==="hold"||e==="release")&&[0,1,2].includes(s)?(e==="hold"?"3":"4")+s+jt(i,5):null}function aE(n){let e=n[0],t=Number(n[1]),i=Number(n.slice(2)),r=["","spawn","tool","hold","release","world"][e];if(!r)return null;let s={type:r,objectId:i};return r==="spawn"?s={type:r,typeId:i}:r==="world"?s={type:r,mode:t,typeId:i}:r==="tool"?s.mode=t:t&&(s.hand=t),Np(s)===n?s:null}function lE(n){let e=Vo(n?.position),t=ko(n?.quaternion),i=Vo(n?.end);return e&&t&&i&&Number.isInteger(n.mode)&&n.mode>=1&&n.mode<=7?"1"+n.mode+e+t+i:"0"}function cE(n,e,t,i=null){let r=oE(e),s=t?.records.join("")??"";if(!i)return r?n+"3"+r+(t?(t.full?"2":"1")+s:"0"):n;let o=(i.actions??[]).map(({seq:p,action:x})=>jt(p,8)+Np(x)).join(""),a=i.version===5,l=a&&Vo(e?.gun?.position),c=a&&ko(e?.gun?.quaternion),u=r&&l&&c?"1"+l+c:"0",d=i.shots??[],f=a?u+jt(d.length,1)+d.map(p=>p.record).join("")+jt(Math.max(0,Math.min(999999,i.score??0)),6):"",h=n+(a?"5":"4")+Number(i.ready)+ +!!r+(r??"")+lE(r?e.tool:null)+jt(i.actionTarget??0,7)+jt(o.length/Oh,1)+o+f;return h.length+1+s.length>Ox&&(t=null,s=""),h+(t?t.full?"2":"1":"0")+s}function Fx(n,e,t){let i=zo(n,e);if(!i)return null;let r=[e+12,e+40].map((o,a)=>n[o]==="1"?{position:Oo(n,o+1),quaternion:zo(n,o+16),pressure:t?null:[0,1,2].map(l=>Number(n[e+79+3*a+l])/9)}:null);if(r.some(o=>o&&(!o.position||!o.quaternion)))return null;let s=Number(n[e+74]);return s>2||Number(n.slice(e+75,e+77))>31?null:{head:i,hands:r,height:Number(n.slice(e+68,e+71))/100,armSpan:Number(n.slice(e+71,e+74))/100,light:s,color:t?0:Number(n.slice(e+77,e+79))}}function uE(n,e){if(typeof n!="string"||n.length>Ox||!/^[0-9]+$/.test(n))return null;let t=tE(n.slice(0,46),e);if(!t||n.length===46)return t;let i=n[46]==="2",r=i?43:kx,s=i?125:133;if(n[46]==="4"||n[46]==="5"){if(t.protocol=Number(n[46]),n.length<59||!/[01]/.test(n[47])||!/[01]/.test(n[48]))return null;t.ready=n[47]==="1";let a=49;if(n[48]==="1"){if(n.length<a+85||!(t.avatar=Fx(n,a,!1)))return null;a+=85}if(n[a]==="1"){if(!t.avatar||n.length<a+44)return null;let u=Number(n[a+1]),d=Oo(n,a+2),f=zo(n,a+17),h=Oo(n,a+29);if(u<1||u>7||!d||!f||!h)return null;t.avatar.tool={mode:u,position:d,quaternion:f,end:h},a+=44}else if(n[a]==="0")a++;else return null;if(n.length<a+9)return null;t.actionTarget=Number(n.slice(a,a+7));let l=Number(n[a+7]);if(l>8||(l===0?t.actionTarget!==0:t.actionTarget<1e6)||(a+=8,s=a+l*Oh+1,n.length<s))return null;t.actions=[];let c=0;for(;a<s-1;a+=Oh){let u=Number(n.slice(a,a+8)),d=aE(n.slice(a+8,a+Oh));if(!d||u<=c)return null;t.actions.push({seq:u,action:d}),c=u}if(t.protocol===5){if(n[a]==="1"){if(!t.avatar||n.length<a+28)return null;let f=Oo(n,a+1),h=zo(n,a+16);if(!f||!h)return null;t.avatar.gun={position:f,quaternion:h},a+=28}else if(n[a]==="0")a++;else return null;let u=Number(n[a++]);if(!Number.isInteger(u)||u>zx||n.length<a+u*Up+7)return null;t.shots=[];let d=0;for(let f=a+u*Up;a<f;a+=Up){let h=Number(n.slice(a,a+8)),p=Oo(n,a+8),x=zo(n,a+23);if(h<=d||!p||!x)return null;t.shots.push({seq:h,position:p,quaternion:x}),d=h}t.score=Number(n.slice(a,a+6)),s=a+7}}else if(!i&&n[46]!=="3"||n.length<s||!(t.avatar=Fx(n,47,i)))return null;let o=n[s-1];if(!["0","1","2"].includes(o)||(n.length-s)%r!==0||o==="0"&&n.length!==s)return null;if(o!=="0"){let a=[];for(let l=s;l<n.length;l+=r){let c=l+(i?6:7),u=Number(n.slice(l,l+5)),d=Number(n.slice(l+5,c));if(!u)return null;if(d===(i?9:99)){a.push({id:u,removed:!0});continue}let f=Number(n[c]),h=Number(n[c+1]),p=Number(n.slice(c+2,c+10)),x=Oo(n,c+10),g=zo(n,c+25);if(d>Fp||f>7||h>4||p>16777215||!x||!g)return null;a.push({id:u,type:d,flags:f,style:h,color:p,position:x,rotation:g})}t.objects={full:o==="2",records:a}}return t}var hE=.45,Nx=2.5;function Gx(){let n=new Map,e=new Map,t=-1/0,i=-1/0;function r(s,o){let a=s-i>=1600,l=a||s-t>=200;a&&(i=s),l&&(t=s);let c=l?new Set:null,u=[];for(let d of o){if(!d.mesh.visible)continue;let f=d.netId,h=n.get(f),p=d.radius<=hE&&!d.frozen&&(d.velocity.lengthSq()>=Nx**2||d.angular.lengthSq()*d.radius**2>=Nx**2);if(!l&&!p&&!h?.fast)continue;let x=rE(d);if(!x)continue;c?.add(f);let g=x!==h?.record;g&&e.set(f,{record:x,until:s+420}),(a||!l&&g)&&u.push(x),h?(h.record=x,h.fast=p):n.set(f,{record:x,fast:p})}if(l){for(let d of n.keys())c.has(d)||(e.set(d,{record:sE(d),until:s+420}),n.delete(d));for(let[d,f]of e)f.until<s?e.delete(d):a||u.push(f.record)}return a||u.length?{full:a,records:u}:null}return{capture:r,reset(){n.clear(),e.clear(),t=i=-1/0}}}var Hx=Zt.DEFAULT_UP,dE=15,Wx=["Libre","Face au joueur","Troisi\xE8me personne","Cam\xE9ra physique"];function fE(){let n=new vt,e=new He(new kt(.155,1),new _t({color:"#a8eeeb",roughness:.38,emissive:"#2cb7c4",emissiveIntensity:.68,flatShading:!0})),t=new He(new Si(.23,.018,5,20),new Rt({color:"#84e6ff",transparent:!0,opacity:.85,blending:ci,depthWrite:!1}));t.rotation.x=Math.PI/2,t.position.y=-.12;let i=new He(new rr(.11,.28,9,1,!0),new Rt({color:"#55c7ff",transparent:!0,opacity:.45,side:mn,blending:ci,depthWrite:!1}));return i.rotation.x=Math.PI,i.position.y=-.2,n.add(e,t,i),{model:n,draw(r,s){e.rotation.y=s*.0014,t.position.y=-.13+Math.sin(s*.008)*.035,i.scale.y=.75+Math.sin(s*.013)*.24}}}function pE(){let n=new vt,e=new vt,t=Ph(0),i=t.createHead(),r=["left","right"].map(m=>({skin:Uh(m,t.hand,{openWrist:!0}),position:new _,quaternion:new qe,pressure:[0,0,0],tracked:!1})),s=Fh(t.fur,r.map(m=>({geometry:m.skin.mesh.geometry,wristIndices:m.skin.wristIndices}))),o=s.mesh;n.add(i,o);let a=Nh(e),l=null,c=new _,u=[null,null],d=new _,f=new qe,h=new qe,p=new qe,x={mode:0,position:new _,quaternion:new qe,end:new _};function g(m,v,M){let y=m.avatar,A=1-Math.exp(-M*32);if(!y){o.position.set(0,-.46,0),o.rotation.x=0,u.fill(null),s.pose(u,.42,.97,.68,!0),a.hide(),x.mode=0,l&&(l.visible=!1);return}f.copy(n.quaternion).invert(),p.copy(y.head).premultiply(f),i.quaternion.slerp(p,A),d.set(0,0,-1).applyQuaternion(i.quaternion);let E=Ce.smoothstep(-d.y,.28,.94),L=Math.max(.38,y.armSpan*(2/3)/.82);o.position.set(0,-.25-.24*L,.24*E),o.rotation.x=-.5*E,h.copy(o.quaternion).invert(),t.setColor(y.color??0);for(let b=0;b<r.length;b++){let R=r[b],z=y.hands[b];if(u[b]=z?R:null,!z){R.tracked=!1;continue}c.copy(z.position).sub(m).applyQuaternion(f).sub(o.position).applyQuaternion(h),p.copy(z.quaternion).premultiply(f).premultiply(h),R.tracked?(R.position.lerp(c,A),R.quaternion.slerp(p,A)):(R.position.copy(c),R.quaternion.copy(p)),R.tracked=!0;for(let O=0;O<3;O++)R.pressure[O]+=((z.pressure?.[O]??0)-R.pressure[O])*A;R.skin.pose(R.pressure,!1)}if(s.pose(u,y.armSpan*.5,.97,L,!0),y.gun){l||(l=Lp(),l.visible=!1,e.add(l));let b=l.visible?A:1;l.position.lerp(y.gun.position,b),l.quaternion.slerp(p.copy(y.gun.quaternion),b),l.visible=!0}else l&&(l.visible=!1);let U=y.tool;if(!U){a.hide(),x.mode=0;return}let S=x.mode?A:1;x.mode=U.mode,x.position.lerp(U.position,S),x.quaternion.slerp(p.copy(U.quaternion),S),x.end.lerp(U.end,S),a.update(x)}return{model:n,toolRoot:e,draw:g,dispose(){for(let m of r)m.skin.mesh.geometry.dispose();t.hand.dispose()}}}function qx(n){if(!n)return;n.removeFromParent();let e=new Set;n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),e.add(t.material))});for(let t of e)t.dispose()}function Xx({scene:n,currentMap:e,seedArena:t,makeReplica:i,applyLight:r,onAction:s,onShot:o,onStatus:a}){let l=new Map,c=new Map,u=Gx(),d=0,f=-1,h=-1,p="",x=0;function g(){let F=e();return F!==p&&(p=F,x=As(F)),x}function m(F){return!!F?.ready&&F.map===g()}function v(){return J.role==="player"&&J.state==="open"&&m(J.remote)&&J.remote.protocol>=5}function M(F){let X=c.get(F);X&&(n.remove(X.mesh),X.mesh.material?.dispose(),c.delete(F))}function y(){for(let F of c.keys())M(F);d=0,f=-1,h!==-1&&(h=-1,r?.(null))}function A(F,X){if(F.color===X.color&&F.style===X.style)return;F.color=X.color,F.style=X.style;let B=F.mesh.material;if(B?.color){if(B.color.setHex(X.color),X.style===0){Object.assign(B,F.baseMaterial),F.baseEmissive&&B.emissive.copy(F.baseEmissive),B.needsUpdate=!0;return}B.roughness=[.44,.94,.12,.16,.4][X.style],B.metalness=[.1,0,.87,.12,0][X.style],B.opacity=X.style===3?.4:1,B.transparent=X.style===3,B.depthWrite=!B.transparent,B.emissive?.copy(B.color),B.emissiveIntensity=X.style===4?1.65:0,B.needsUpdate=!0}}function E(F){if(!m(F)){y();return}if((d!==F.id||f!==F.map)&&(y(),d=F.id,f=F.map),F.avatar&&F.avatar.light!==h&&(h=F.avatar.light,r?.(h)),!F.objects)return;let X=F.objects.full?new Set:null;for(let B of F.objects.records){if(B.removed){M(B.id);continue}X?.add(B.id);let H=c.get(B.id);if(H&&H.type!==B.type&&(M(B.id),H=null),!H){let q=i?.(B.type);if(!q)continue;let{roughness:j,metalness:se,transparent:fe,depthWrite:C,opacity:w,emissiveIntensity:Z}=q.material??{},ee={roughness:j,metalness:se,transparent:fe,depthWrite:C,opacity:w,emissiveIntensity:Z};q.userData.netId=B.id,q.userData.netType=B.type,H={mesh:q,baseMaterial:ee,baseEmissive:q.material?.emissive?.clone(),type:B.type,target:new _().copy(B.position),quaternion:new qe().copy(B.rotation),velocity:new _,time:F.time},q.position.copy(H.target),q.quaternion.copy(H.quaternion),c.set(B.id,H),n.add(q)}let I=(F.time-H.time)/1e3;I>.06&&I<.65&&!(B.flags&6)?H.velocity.copy(B.position).sub(H.target).multiplyScalar(1/I).clampLength(0,23):H.velocity.set(0,0,0),H.target.copy(B.position),H.quaternion.copy(B.rotation),H.time=F.time,H.flags=B.flags,H.frequent=I>.06&&I<.16,H.received=F.arrival,H.mesh.userData.netFlags=B.flags,H.mesh.userData.held=!!(B.flags&1),A(H,B)}if(X)for(let B of c.keys())X.has(B)||M(B)}let L=new _;function U(F,X,B){let H=1-Math.exp(-F*22),I=1-Math.exp(-F*32);for(let q of c.values()){if(q.mesh.visible=X,!X)continue;let j=q.frequent?I:H,se=q.flags&6?0:Math.min(q.frequent?.1:.12,Math.max(0,(B-q.received)/1e3));L.copy(q.target).addScaledVector(q.velocity,se),q.mesh.position.distanceToSquared(L)>16||q.flags&6&&q.mesh.position.distanceToSquared(q.target)<1e-4?q.mesh.position.copy(L):q.mesh.position.lerp(L,j),q.mesh.quaternion.slerp(q.quaternion,j),q.flags&6&&q.mesh.quaternion.angleTo(q.quaternion)<.008&&q.mesh.quaternion.copy(q.quaternion),q.mesh.updateMatrixWorld(!0)}}let S=F=>document.querySelector(F),b=S("#cloud-status"),R=S("#cloud-room"),z=S("#cloud-camera"),O=-1/0,Y=0,N="Hors ligne",k=0;function Q(F){Y=F,z.textContent="Cam\xE9ra : "+Wx[F]}function V(){Q((Y+1)%Wx.length)}z.onclick=V;let J=Vx({onStatus(F){N=F,b.textContent=F,a?.()},onPose(F){J.role!=="vr"&&E(F)},onPeer(F,X){if(!F){let I=l.get(X.id);I?.art&&(qx(I.art.model),qx(I.art.toolRoot),I.art.dispose?.()),l.delete(X.id);return}let B=l.get(F.id);B||(B={art:null,motion:new _,handMotion:[new _,new _]},l.set(F.id,B));let H=B.pose;B.motion.set(0,0,0);for(let I of B.handMotion)I.set(0,0,0);if(H&&H.map===F.map){let I=(F.time-H.time)/1e3;if(I>=.055&&I<=.65){B.motion.set(F.x-H.x,F.y-H.y,F.z-H.z).multiplyScalar(1/I),B.motion.lengthSq()>=18**2&&B.motion.set(0,0,0);for(let q=0;q<2;q++){let j=H.avatar?.hands[q],se=F.avatar?.hands[q];j&&se&&B.handMotion[q].copy(se.position).sub(j.position).multiplyScalar(1/I).clampLength(0,23)}}}B.pose=F},onAction:s,onShot:o}),re=Cl(new URLSearchParams(location.search).get("room")??"");function pe(){return Array.from(crypto.getRandomValues(new Uint8Array(8)),F=>(F%36).toString(36)).join("").toUpperCase()}R.value=/^[A-Z0-9]{5,12}$/.test(re)?re:pe();function ye(F,X=R.value){let B=Cl(X);if(!(J.role===F&&J.code===B)){if(!/^[A-Z0-9]{5,12}$/.test(B)){b.textContent="Entre un code de 5 \xE0 12 lettres ou chiffres.";return}J.role&&J.leave(),J.join(B,F)&&(R.value=B,F!=="vr"&&S("#game").focus(),u.reset(),Q(0),t(As(B)),p="")}}S("#cloud-vr").onclick=()=>ye("vr"),S("#cloud-new").onclick=()=>ye("vr",pe());for(let[F,X]of El.entries())S(`#public-join-${F}`).onclick=()=>ye("player",X),S(`#public-host-${F}`).onclick=()=>ye("vr",X);S("#cloud-pc").onclick=()=>ye("pc");let Te=S("#cloud-player");Te&&(Te.onclick=()=>ye("player")),S("#cloud-leave").onclick=()=>{k=0,J.leave()},S("#cloud-copy").onclick=async()=>{let F=new URL(location.href);F.searchParams.set("room",J.code||Cl(R.value));try{await navigator.clipboard.writeText(F.href),b.textContent="Lien copi\xE9."}catch{b.textContent=F.href}k=performance.now()+2500},addEventListener("pagehide",()=>J.leave());let Re=new _,Pe=new _,ie=new _,ce=new _,ge=0;function Ie({dt:F,position:X,yaw:B,pitch:H,camera:I,rig:q,keys:j,flat:se}){let fe=se?.movement,C=Number(j.has("KeyD"))-Number(j.has("KeyQ")||j.has("KeyA"))+(fe?.x??0),w=Number(j.has("KeyS"))-Number(j.has("KeyZ")||j.has("KeyW"))+(fe?.z??0);se?.consumeJump?.()&&(ge=.26),ge=Math.max(0,ge-F);let Z=Number(j.has("Space")||ge>0)-Number(j.has("ShiftLeft")||j.has("ShiftRight")),ee=j.has("ControlLeft")||j.has("ControlRight")?11:3.2;ce.set(C,Z,w).clampLength(0,1).applyAxisAngle(Hx,B),q.position.addScaledVector(ce,F*ee).clampScalar(-175,175),q.rotation.set(0,B,0),I.position.set(0,0,0),I.rotation.set(H,0,0,"YXZ"),q.updateMatrixWorld(!0),X.copy(q.position)}function _e(F,X,B,H){for(let I of l.values()){let q=I.pose;if(!(F&&m(q))){I.art&&(I.art.model.visible=!1,I.art.toolRoot&&(I.art.toolRoot.visible=!1));continue}I.art||(I.art=q.role==="pc"?fE():pE(),n.add(I.art.model),I.art.model.visible=!1,I.art.toolRoot&&n.add(I.art.toolRoot));let{model:se,toolRoot:fe}=I.art,C=Math.min(.12,Math.max(0,(H-q.arrival)/1e3+.025));Re.copy(q).addScaledVector(I.motion,C),!se.visible||se.position.distanceToSquared(Re)>64?se.position.copy(Re):se.position.lerp(Re,1-Math.exp(-B*34)),se.rotation.y=q.yaw,se.visible=!0,fe&&(fe.visible=!0),I.art.draw(q,X,B)}}function Xe(F,X){if(X<k)return;let B=J.remote,H=N;if(J.state==="open"){let I="Salon "+J.code+" \xB7 ",q=J.peers.filter(j=>j.ready);if(!F)H=I+"quitte la session VR pour utiliser le mode spectateur";else if(J.role!=="vr"&&B&&B.map!==g())H=I+"le joueur qui h\xE9berge utilise une autre carte. Chargez la m\xEAme carte.";else if(J.role!=="vr"&&B&&!B.ready)H=I+"h\xF4te connect\xE9 \xB7 partie en pr\xE9paration";else if(J.role==="player"&&B&&B.protocol<5)H=I+"mets \xE0 jour le jeu chez l\u2019h\xF4te pour synchroniser la partie";else if(J.role!=="vr"&&m(B))H=I+"h\xF4te connect\xE9";else if(J.role==="player"&&!B)H=I+"aucun h\xF4te pour l\u2019instant \xB7 tu joues en solo en attendant";else if(J.role==="vr"){let j=q.filter(m),se=j.filter(C=>C.role==="player").length,fe=j.some(C=>C.role==="pc");H=I+"tu h\xE9berges \xB7 "+(se+1)+" joueur"+(se?"s":""),fe&&(H+=" \xB7 spectateur connect\xE9"),!se&&q.some(C=>!m(C))&&(H+=" \xB7 carte diff\xE9rente chez un invit\xE9")}}b.textContent!==H&&(b.textContent=H,a?.())}function Ge(F){let{inVR:X,time:B,dt:H,position:I,yaw:q,camera:j,rig:se,keys:fe,avatar:C,bodies:w}=F;if(!J.role){y();return}let Z=J.role!=="pc"||!X,ee=performance.now(),he=g(),oe=J.role!=="vr"?J.remote:null,we=Z&&(J.role==="player"?v():m(oe));if(!we&&f!==-1&&y(),U(H,we,ee),_e(Z,B,H,ee),J.role==="pc"&&!X){(F.actions??fe).delete("KeyC")&&V();let ve=Y===3&&we?[...c.values()].find(Fe=>Fe.type===dE)?.mesh:null,Ae=we?l.get(oe.id)?.art?.model:null;ve?(ie.set(0,0,-.23).applyQuaternion(ve.quaternion),se.position.copy(ve.position).add(ie),se.rotation.set(0,0,0),j.position.set(0,0,0),j.quaternion.copy(ve.quaternion),se.updateMatrixWorld(!0),I.copy(se.position)):Ae&&(Y===1||Y===2)?(ie.set(0,.72,Y===1?-2.7:2.7).applyAxisAngle(Hx,Ae.rotation.y),Pe.copy(Ae.position).add(ie),se.position.lerp(Pe,1-Math.exp(-H*11)),j.position.set(0,0,0),se.updateMatrixWorld(!0),j.lookAt(Ae.position),j.updateWorldMatrix(!0,!1),I.copy(se.position)):Ie(F)}J.tick({x:I.x,y:I.y,z:I.z,yaw:q,map:he,ready:Z,avatar:Z&&J.role!=="pc"?C:null,objectFeed:Z&&J.role==="vr"&&w?ve=>u.capture(ve,w):null}),ee-O>=150&&(O=ee,Xe(Z,ee))}function T(F){let X=l.get(F)?.pose;return m(X)?X:null}return{update:Ge,getPeer:T,connect:ye,leave:()=>J.leave(),get caption(){return b.textContent},handMotion(F,X){return l.get(F)?.handMotion[X]},sendAction(F){return J.sendAction(F,g())},sendShot(F,X){J.queueShot(F,X,g())},get stats(){return J.stats},get role(){return J.role},get connected(){return m(J.remote)},get guestActive(){return v()},get remoteSpectator(){return J.peers.find(F=>F.role==="pc"&&m(F))??null},get remoteLight(){return h===-1?null:h},get replicaCount(){return c.size},forEachReplica(F){for(let X of c.values())X.mesh.visible&&F(X.mesh)}}}var Go=[["torso","Torse",null,[0,-.43,.04],0],["head","T\xEAte","torso",[0,0,0],45]];for(let[n,e,t]of[["left",-1,"gauche"],["right",1,"droit"]]){let i=n+"Arm",r=n+"Forearm",s=n+"Hand";Go.push([i,"Bras "+t,"torso",[.27*e,-.23,.04],100],[r,"Avant-bras "+t,i,[.35*e,-.52,.02],120],[s,n==="left"?"Main gauche":"Main droite",r,[.41*e,-.75,0],55]);for(let o=1;o<=3;o++)Go.push([n+"Finger"+o,"Doigt "+o+" \xB7 "+(n==="left"?"main gauche":"main droite"),s,[(.375+(o-1)*.035)*e,-.83,-.025],140])}var Op=Object.freeze(Object.fromEntries(Go.map(([n,e,t,i,r])=>[n,{label:e,parent:t,pivot:i,limit:r}]))),Bp=(n,e,t,i)=>Number.isFinite(n)?Ce.clamp(n,e,t):i;function Yx(n,e){let t=Op[n];return{pivot:t.pivot.map((i,r)=>Bp(e?.pivot?.[r],-3,3,i)),axis:["x","y","z"].includes(e?.axis)?e.axis:"x",limit:Bp(e?.limit,0,150,t.limit)}}function zp(n){return Object.fromEntries(Go.map(([e])=>[e,Yx(e,n?.[e])]))}function Vh(n){return n?.parts.length?n.kind!=="avatar"?!0:n.parts.some(e=>e.avatarJoint==="head")&&n.parts.some(e=>e.avatarJoint==="torso"):!1}function Zx(n,e,t){let i=zp(n.avatarRig),r=new vt,s={},o=[],a=0;for(let[u,,d]of Go){let f=new vt;f.position.fromArray(i[u].pivot),d&&f.position.sub(new _(...i[d].pivot)),(d?s[d]:r).add(f),s[u]=f}for(let[u,d]of n.parts.entries()){let f=Object.hasOwn(s,d.avatarJoint)?d.avatarJoint:"torso",h=e(d,u),p=h.geometry.index?.count??h.geometry.attributes.position.count;a+=p/3,h.position.sub(new _(...i[f].pivot)),s[f].add(h),o.push(h)}function l(u,d){let f=s[u],h=i[u];f&&(f.rotation.set(0,0,0),f.rotation[h.axis]=Ce.degToRad(h.limit)*Bp(d,-1,1,0))}function c(u,d){let f=i[u].pivot;i[u]=Yx(u,{...i[u],pivot:d});let h=new _(...f).sub(new _(...i[u].pivot));for(let p of s[u].children)p.isMesh&&p.position.add(h);for(let[p,,x]of Go){if(p!==u&&x!==u)continue;let g=s[p].position.fromArray(i[p].pivot);x&&g.sub(new _(...i[x].pivot))}return i[u].pivot}return{root:r,bones:s,meshes:o,triangles:a,setBend:l,setPivot:c,headPivot:new _(...i.head.pivot),dispose(){r.removeFromParent();for(let u of o)t(u)}}}function kh(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new et,c=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,d=[];for(let f=0;f<n.length;++f){let h=n[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in s){let d=jx(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let p=jx(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function jx(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new gt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<t;p++){let x=u.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}var Hh=0,mE=1,gE=new _,Jx=new gl,Vp=new Bn,Qx=new _,Gh=new On,Wh=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new qh,this.unassigned=new qh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.vertices.push(new kp(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(i){let r=i.geometry;if(r!==void 0){let s=r.attributes.position;if(s!==void 0)for(let o=0,a=s.count;o<a;o++){let l=new _;l.fromBufferAttribute(s,o).applyMatrix4(i.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let i=0,r=t.length;i<r;i++)if(t[i].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let i=this.faces,r=-1/0,s=1/0;for(let o=0,a=i.length;o<a;o++){let l=i[o],c=l.distanceToPoint(e.origin),u=l.normal.dot(e.direction);if(c>0&&u>=0)return null;let d=u!==0?-c/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):r=Math.max(d,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,gE)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,i=e.outside;for(;i.next!==null&&i.next.face===e;)i=i.next;return this.assigned.removeSubList(t,i),t.prev=i.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let i=this._removeAllVerticesFromFace(e);if(i!==void 0)if(t===void 0)this.unassigned.appendChain(i);else{let r=i;do{let s=r.next;t.distanceToPoint(r.point)>this.tolerance?this._addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let i=t.next,r=this.tolerance,s=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.mark===Hh){let l=a.distanceToPoint(t.point);if(l>r&&(r=l,s=a),r>1e3*this.tolerance)break}}s!==null&&this._addVertexToFace(t,s),t=i}while(t!==null)}return this}_computeExtremes(){let e=new _,t=new _,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,o=this.vertices.length;s<o;s++){let a=this.vertices[s],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),i[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),r[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),i=t.min,r=t.max,s=0,o=0;for(let f=0;f<3;f++){let h=r[f].point.getComponent(f)-i[f].point.getComponent(f);h>s&&(s=h,o=f)}let a=i[o],l=r[o],c,u;s=0,Jx.set(a.point,l.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l){Jx.closestPointToPoint(p.point,!0,Qx);let x=Qx.distanceToSquared(p.point);x>s&&(s=x,c=p)}}s=-1,Vp.setFromCoplanarPoints(a.point,l.point,c.point);for(let f=0,h=this.vertices.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c){let x=Math.abs(Vp.distanceToPoint(p.point));x>s&&(s=x,u=p)}}let d=[];if(Vp.distanceToPoint(u.point)<0){d.push(Ti.create(a,l,c),Ti.create(u,l,a),Ti.create(u,c,l),Ti.create(u,a,c));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge(h)),d[f+1].getEdge(1).setTwin(d[h+1].getEdge(0))}}else{d.push(Ti.create(a,c,l),Ti.create(u,a,l),Ti.create(u,l,c),Ti.create(u,c,a));for(let f=0;f<3;f++){let h=(f+1)%3;d[f+1].getEdge(2).setTwin(d[0].getEdge((3-f)%3)),d[f+1].getEdge(0).setTwin(d[h+1].getEdge(1))}}for(let f=0;f<4;f++)this.faces.push(d[f]);for(let f=0,h=e.length;f<h;f++){let p=e[f];if(p!==a&&p!==l&&p!==c&&p!==u){s=this.tolerance;let x=null;for(let g=0;g<4;g++){let m=this.faces[g].distanceToPoint(p.point);m>s&&(s=m,x=this.faces[g])}x!==null&&this._addVertexToFace(p,x)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let i=this.faces[t];i.mark===Hh&&e.push(i)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,i=this.assigned.first().face,r=i.outside;do{let s=i.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===i);return e}}_computeHorizon(e,t,i,r){this._deleteFaceVertices(i),i.mark=mE;let s;t===null?s=t=i.getEdge(0):s=t.next;do{let o=s.twin,a=o.face;a.mark===Hh&&(a.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t);return this}_addAdjoiningFace(e,t){let i=Ti.create(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setTwin(t.twin),i.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let i=null,r=null;for(let s=0;s<t.length;s++){let o=t[s],a=this._addAdjoiningFace(e,o);i===null?i=a:a.next.setTwin(r),this.newFaces.push(a.face),r=a}return i.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},Ti=class n{constructor(){this.normal=new _,this.midpoint=new _,this.area=0,this.constant=0,this.outside=null,this.mark=Hh,this.edge=null}static create(e,t,i){let r=new n,s=new Rl(e,r),o=new Rl(t,r),a=new Rl(i,r);return s.next=a.prev=o,o.next=s.prev=a,a.next=o.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),i=this.edge.next.head();return Gh.set(e.point,t.point,i.point),Gh.getNormal(this.normal),Gh.getMidpoint(this.midpoint),this.area=Gh.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},Rl=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){let e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}},kp=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},qh=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}};var hr=class extends et{constructor(e=[]){super();let t=[],i=[],s=new Wh().setFromPoints(e).faces;for(let o=0;o<s.length;o++){let a=s[o],l=a.edge;do{let c=l.head().point;t.push(c.x,c.y,c.z),i.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new Oe(t,3)),this.setAttribute("normal",new Oe(i,3))}};var Kx=48,xE=3,yE=128,$x=Object.freeze({shield:{mode:"extrude",symmetric:!0,points:[[0,-.52],[-.35,-.35],[-.49,.13],[-.37,.45],[0,.55]],depth:.3,bevel:.025,segments:32},panel:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],depth:.22,bevel:.012,segments:32},angle:{mode:"extrude",symmetric:!1,points:[[-.5,-.5],[.5,-.5],[.5,-.2],[-.18,-.2],[-.18,.5],[-.5,.5]],depth:.35,bevel:.008,segments:32},arch:{mode:"extrude",symmetric:!1,points:[[-.55,-.5],[.55,-.5],[.55,.2],[.38,.42],[.1,.55],[-.1,.55],[-.38,.42],[-.55,.2]],depth:.25,bevel:.025,segments:32},bottle:{mode:"lathe",symmetric:!1,points:[[0,-.5],[.23,-.5],[.31,-.42],[.32,.12],[.22,.27],[.12,.34],[.12,.5],[0,.5]],depth:.28,bevel:0,segments:32},bowl:{mode:"lathe",symmetric:!1,points:[[0,-.46],[.24,-.46],[.32,-.37],[.47,.05],[.5,.34],[.47,.38],[0,.38]],depth:.3,bevel:0,segments:32}}),vE=(n,e,t)=>Math.max(e,Math.min(t,n)),_E=()=>structuredClone($x.shield),Il=(n,e,t,i)=>Number.isFinite(n)?vE(n,t,i):e;function Yh(n){let e=n?.mode==="lathe"?$x.bottle:_E(),t=n?.mode==="lathe"?"lathe":"extrude",i=t==="extrude"&&n?.symmetric===!0,r=Array.isArray(n?.points)&&n.points.length>=3&&n.points.length<=Kx?n.points.map(o=>[Il(o?.[0],0,-1.5,1.5),Il(o?.[1],0,-1.5,1.5)]):structuredClone(e.points);return t==="lathe"&&(r=r.map(([o,a])=>[Math.abs(o),a])),i&&(r=r.map(([o,a])=>[-Math.abs(o),a])),{mode:t,symmetric:i,points:r,depth:Il(n?.depth,e.depth,.025,1.5),bevel:Il(n?.bevel,e.bevel,0,.15),segments:Math.round(Il(n?.segments,32,xE,yE))}}function ey(n){if(!n.symmetric||n.mode!=="extrude")return n.points.map(i=>[...i]);let e=n.points.map(([i,r])=>[-Math.abs(i),r]),t=e.slice().reverse().filter(([i])=>i<-1e-4).map(([i,r])=>[-i,r]);return[...e,...t]}function Xh(n,e,t){return(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0])}function bE(n,e,t,i){let r=Xh(n,e,t),s=Xh(n,e,i),o=Xh(t,i,n),a=Xh(t,i,e);return r*s<-1e-8&&o*a<-1e-8}function ME(n){let e=Yh(n),t=e.mode==="lathe"?e.points:ey(e);if(t.length<3||t.length>Kx*2)return"Il faut au moins trois points.";for(let i=1;i<t.length;i++)if(Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1])<.008)return"Certains points sont trop proches.";if(e.mode==="lathe"){if(e.points.some(i=>i[0]<0))return"Le profil tourn\xE9 doit rester \xE0 droite de l\u2019axe.";if(Math.max(...t.map(i=>i[0]))<.025)return"\xC9largis le profil tourn\xE9."}else{let i=0;for(let r=0;r<t.length;r++){let s=t[r],o=t[(r+1)%t.length];i+=s[0]*o[1]-o[0]*s[1];for(let a=r+2;a<t.length;a++)if(!(r===0&&a===t.length-1)&&bE(s,o,t[a],t[(a+1)%t.length]))return"Le contour se croise : d\xE9place les points pour l\u2019ouvrir."}if(Math.abs(i)<.001)return"La forme est trop plate pour cr\xE9er un volume."}return null}function ty(n){let e=Yh(n),t=ME(e);if(t)throw new Error(t);let i;if(e.mode==="lathe"){let r=e.points.map(([f,h])=>new xe(Math.max(0,f),h));r[0].y>r.at(-1).y&&r.reverse(),r[0].x>0&&r.unshift(new xe(0,r[0].y)),r.at(-1).x>0&&r.push(new xe(0,r.at(-1).y)),i=new ll(r,e.segments);let s=[],o=i.attributes.position,a=new _,l=new _,c=new _,u=new _,d=i.index.array;for(let f=0;f<d.length;f+=3)a.fromBufferAttribute(o,d[f]),l.fromBufferAttribute(o,d[f+1]),c.fromBufferAttribute(o,d[f+2]),u.crossVectors(l.sub(a),c.sub(a)).lengthSq()>1e-16&&s.push(d[f],d[f+1],d[f+2]);i.setIndex(s)}else{let r=ey(e),s=new bi;s.moveTo(...r[0]);for(let a of r.slice(1))s.lineTo(...a);s.closePath();let o=Math.min(e.bevel,e.depth*.42);i=new sr(s,{depth:e.depth,steps:1,bevelEnabled:o>1e-4,bevelThickness:o,bevelSize:o*.65,bevelSegments:2,curveSegments:8})}if(i.center(),i.computeVertexNormals(),!i.attributes.uv){let r=i.attributes.position.count;i.setAttribute("uv",new gt(new Float32Array(r*2),2))}return i}var Vn=Math.PI*2,Zh=.84,dr=128;function Vr(n){let e=new Uint8Array(dr*dr*4);for(let i=0;i<dr;i++)for(let r=0;r<dr;r++){let s=(r+.5)/dr,o=(i+.5)/dr,a=s>.88&&o>.88?[255,255,255]:n(Math.min(s/Zh,1),Math.min(o/Zh,1),r,i),l=(r+i*dr)*4;for(let c=0;c<3;c++)e[l+c]=Ce.clamp(Math.round(a[c]),0,255);e[l+3]=255}let t=new si(e,dr,dr);return t.colorSpace=ht,t.generateMipmaps=!0,t.minFilter=Pn,t.magFilter=ln,t.needsUpdate=!0,t}function Es(n,e){let t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function st(n,e,t=!1){let i=n.index?n.toNonIndexed():n,r=new Le(e),s=i.attributes.uv,o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)r.toArray(a,l*3),t?s.setXY(l,s.getX(l)*Zh,s.getY(l)*Zh):s.setXY(l,.95,.95);return i.setAttribute("color",new gt(a,3)),i}function kr(n,e,t,i,r,s,o,a=0){return{id:n,name:e,collisionGeo:i,mass:t,geo:kh(r),material:new _t({vertexColors:!0,map:s,roughness:o,metalness:a})}}function ny(n,e,t){let i=n/2,r=e/2,s=new bi;return s.moveTo(-i+t,-r),s.lineTo(i-t,-r),s.quadraticCurveTo(i,-r,i,-r+t),s.lineTo(i,r-t),s.quadraticCurveTo(i,r,i-t,r),s.lineTo(-i+t,r),s.quadraticCurveTo(-i,r,-i,r-t),s.lineTo(-i,-r+t),s.quadraticCurveTo(-i,-r,-i+t,-r),s}function Or(n,e,t,i,r){return new sr(ny(n,e,i),{depth:t,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:2}).translate(0,0,-t/2)}function zr(n,e,t=i=>i){let i=[],r=[],s=[];for(let u=0;u<n.length;u++){let[d,f]=n[u];for(let h=0;h<=e;h++){let p=Vn*h/e,x=t(d,f,p,u);if(i.push(x*Math.sin(p),f,x*Math.cos(p)),r.push(h/e,u/(n.length-1)),u===n.length-1||h===e)continue;let g=u*(e+1)+h,m=g+e+1;d>0&&s.push(g,g+1,m),n[u+1][0]>0&&s.push(g+1,m+1,m)}}let o=new et;o.setAttribute("position",new Oe(i,3)),o.setAttribute("uv",new Oe(r,2)),o.setIndex(s),o.computeVertexNormals();let{normal:a}=o.attributes,l=new _,c=new _;for(let u=0;u<n.length;u++){let d=u*(e+1),f=d+e;l.fromBufferAttribute(a,d).add(c.fromBufferAttribute(a,f)).normalize(),a.setXYZ(d,l.x,l.y,l.z),a.setXYZ(f,l.x,l.y,l.z)}return o}function Pl(n,e){let t=[];for(let[i,r]of n){if(i===0){t.push(new _(0,r,0));continue}for(let s=0;s<e;s++){let o=Vn*s/e;t.push(new _(i*Math.sin(o),r,i*Math.cos(o)))}}return new hr(t)}function SE(){let t=new cl(ny(.098,.185,.008),3).translate(0,-.001,.0116),i=t.attributes.position;for(let l=0;l<i.count;l++){let c=Ce.clamp(i.getX(l)/.098+.5,0,1),u=Ce.clamp((i.getY(l)+.001)/.185+.5,0,1);t.attributes.uv.setXY(l,c,u)}let r=Vr((l,c)=>{let u=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),d=.5+.5*Math.sin((c*1.5+l*.6)*Vn),f=c>.033&&c<.05&&l>.3&&l<.7,h=c>.955&&c<.982&&l>.39&&l<.61,p=c>.926&&c<.938&&l>.78&&l<.9;return h?[18,27,42]:f||p?[222,239,247]:[15+58*u+27*d,27+98*u+54*d,59+108*u+47*d]}),s=[st(Or(.106,.207,.013,.011,.0019),8425890),st(Or(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),st(Or(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),st(t,16777215,!0),st(Or(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),st(new it(.0036,.024,.004).translate(.055,.029,0),11714250),st(new it(.0036,.015,.004).translate(-.055,.032,0),11385285),st(new it(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])s.push(st(new sn(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),s.push(st(new pn(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));s.push(st(new pn(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new hr([-.0152,.0117].flatMap(l=>o.map(([c,u])=>new _(c,u,l))));return kr("phone","T\xE9l\xE9phone",.23,a,s,r,.35,.21)}function wE(){let e=[-.165,-.055,.055,.165],t=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),r=zr(t,18,(a,l,c)=>{let u=Math.max(0,-Math.sin(c)),d=.035*Math.cos(c),f=Math.max(...e.map(h=>Math.exp(-(((l-h+d)/.014)**2))));return a*(1-.14*u**6*f+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),s=Vr((a,l,c,u)=>{let d=Vn*a,f=(l*2-1)*.275,h=Math.max(0,-Math.sin(d)),p=Math.max(...e.map(v=>Math.exp(-(((f-v+.035*Math.cos(d))/.009)**2)))),x=h**3*p,g=Es(c,u)-.5,m=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*h+58*x+m,76+24*h+70*x+m,24+11*h+52*x+m*.8]}),o=Pl([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return kr("bread","Baguette de pain",.27,o,[st(r,16777215,!0)],s,.9)}function TE(){let n=Vr((s,o,a,l)=>{let c=o>.34&&o<.67,u=Math.abs(o-.5)*7,d=(s*28+u)%1<.17,f=Math.abs(o-.5)<.013,p=46+12*Es(a,l)-(c&&(d||f)?35:0);return[p*.94,p,p*1.04]}),e=zr([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),t=zr([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),i=[st(e,16777215,!0),st(t,11056059),st(new sn(.067,.067,.124,10).rotateX(Math.PI/2),9346214),st(new sn(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let s=0;s<5;s++){let o=Vn*s/5;i.push(st(new it(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let r=Pl([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return kr("wheel","Roue",1.8,r,i,n,.64,.23)}function AE(){let n=Vr((s,o,a,l)=>{let c=Es(a,l),u=o>.26&&o<.34||o>.455&&o<.475,d=c>.98?-44:19*(c-.5)+5*Math.cos(Vn*s*4);return u?[46+d,94+d,117+d]:[240+d,223+d,194+d]}),e=zr([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),t=new Si(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),i=[[.08,-.091],[.103,.094]].flatMap(([s,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+Vn*l/5;return new _(s*Math.cos(c),o,s*Math.sin(c))}));i.push(new _(.166,-.027,.01),new _(.166,.053,-.01));let r=new hr(i);return kr("cup","Tasse",.39,r,[st(e,16777215,!0),st(t,15785922)],n,.37)}function EE(){let n=zr([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),e=Vr((r,s,o,a)=>{let l=9*Es(o,a),c=11*Math.cos(r*Vn*24);if(s>.23&&s<.28||s>.72&&s<.78)return[225+l,128+l,43+l];if(s>.33&&s<.51){let d=40+.6*c+8*Math.cos(s*Vn*48+r*Vn*13)+l;return[d,d*1.08,d*1.13]}let u=63+c+l+14*Math.cos(r*Vn*4);return[u,u*1.13,u*1.24]}),t=[st(n,16777215,!0),st(new To(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),st(new pn(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),st(new pn(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),st(new sn(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),st(new pn(.008,12).translate(0,.035,.0336),15633202)],i=Pl([[.033,-.143],[.054,.133]],6);return kr("flashlight","Lampe torche",.31,i,t,e,.46,.28)}function CE(){let n=zr([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),e=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],t=Vr((s,o,a,l)=>{let c=10*Es(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let u=(s+.2)%.5,d=Math.floor((u-.098)*64),f=Math.floor((.61-o)*43),h=o-(.375+.055*Math.cos(Vn*s*2));if(e[f]?.[d]==="1"||Math.abs(h)<.018||Math.abs(h+.04)<.007)return[244+c,224+c,169+c];let p=20*Math.cos(Vn*s*2)+c;return[173+p,27+p*.28,55+p*.5]}),i=[st(n,16777215,!0),st(new pn(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),st(new To(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),st(new pn(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],r=Pl([[.069,-.112],[.069,.109]],6);return kr("soda","Canette de soda",.35,r,i,t,.42,.27)}function RE(){let n=zr([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),e=Vr((r,s,o,a)=>{let l=15*Es(o,a),c=8*Math.cos(r*Vn*4);if(s>.321&&s<.435||s>.536&&s<.635){let d=o%4===0||(o+2*a)%7===0?14:0;return[240+l-d,236+l-d,216+l-d]}return[206+l+c,67+l+c,16+l*.7]}),t=[st(n,16777215,!0),st(Or(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),st(new pn(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],i=Pl([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return kr("cone","C\xF4ne de chantier",.58,i,t,e,.78)}function IE(){let n=Vr((r,s,o,a)=>{let l=8*Es(o,a);if(s>.19&&s<.49&&r>.15&&r<.85)return Math.hypot(r*12%1-.5,s*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(s>.6&&s<.86&&r>.12&&r<.88){if(!(s>.628&&s<.832&&r>.16&&r<.84))return[13,22,24];let f=r>.26&&r<.7&&s>.68&&s<.7+.08*r&&r*21%1>.3,h=s>.793&&s<.813&&r>.22&&r<.41;return f||h?[43,66,54]:[157+l,191+l,139+l]}return r>.21&&r<.79&&s>.112&&s<.134?[223,178,93]:[39+l,49+l,54+l]}),e=zr([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),t=[st(Or(.138,.22,.061,.016,.004),14788675),st(Or(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),st(new cn(.106,.174).translate(0,-.004,.0395),16777215,!0),st(e,2502456),st(new sn(.014,.017,.016,10).translate(.04,.117,.001),2503482),st(new it(.008,.047,.027).translate(-.072,.014,-.002),3028798),st(new it(.006,.02,.019).translate(-.072,-.043,-.002),3950414),st(new pn(.004,8).translate(.04,.066,.0397),15817792),st(new pn(.004,8).translate(-.04,.066,.0397),7903100),st(Or(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],i=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([r,s,o,a,l])=>[new _(r,l,o),new _(s,l,o),new _(s,l,a),new _(r,l,a)]);return kr("radio","Talkie-walkie",.43,new hr(i),t,n,.61,.08)}function iy(){return[SE(),wE(),TE(),AE(),EE(),CE(),RE(),IE()]}var kn=new qe,Jt=new _,nd=new _,PE=new ct,ry=new WeakMap;function od(n){if(n.heightfield||n.objectBody)return null;let e=ry.get(n);if(e?.position.equals(n.position)&&e.quaternion.equals(n.quaternion)&&e.half.equals(n.half))return e.bounds;let t=PE.makeRotationFromQuaternion(n.quaternion).elements,i=n.half,r=n.position,s=Math.abs(t[0])*i.x+Math.abs(t[4])*i.y+Math.abs(t[8])*i.z,o=Math.abs(t[1])*i.x+Math.abs(t[5])*i.y+Math.abs(t[9])*i.z,a=Math.abs(t[2])*i.x+Math.abs(t[6])*i.y+Math.abs(t[10])*i.z,l={minX:r.x-s,maxX:r.x+s,minY:r.y-o,maxY:r.y+o,minZ:r.z-a,maxZ:r.z+a};return ry.set(n,{bounds:l,position:r.clone(),quaternion:n.quaternion.clone(),half:i.clone()}),l}function xy(n,e,t){let i=od(t);return!i||n.x+e>=i.minX&&n.x-e<=i.maxX&&n.y+e>=i.minY&&n.y-e<=i.maxY&&n.z+e>=i.minZ&&n.z-e<=i.maxZ}function id(n,e,t,i){if(t.heightfield)return HE(n,e,t,i);if(t.objectBody)return Ey(n,e,t.objectBody,i);if(!xy(n,e,t))return 0;kn.copy(t.quaternion).invert(),Jt.copy(n).sub(t.position).applyQuaternion(kn);let r=t.half;nd.copy(Jt).clamp(t.min,r),i.subVectors(Jt,nd);let s=i.length();if(s>=e)return 0;if(s>1e-6)return i.multiplyScalar(1/s).applyQuaternion(t.quaternion),e-s;let o=r.x-Math.abs(Jt.x),a=r.y-Math.abs(Jt.y),l=r.z-Math.abs(Jt.z);return o<=a&&o<=l?i.set(Math.sign(Jt.x)||1,0,0):a<=l?i.set(0,Math.sign(Jt.y)||1,0):i.set(0,0,Math.sign(Jt.z)||1),i.applyQuaternion(t.quaternion),e+Math.min(o,a,l)}var ot=new _,fr=new _;function em(n,e,t,i,r=0,s=0,o=0,a=null){let l=!1;for(let c=0;c<3;c++)for(let u of t){let d=id(n,e,u,ot);if(!d||(n.addScaledVector(ot,d+1e-4),ot.y>=.62&&(l=!0,a&&ot.y>a.normal.y&&(a.normal.copy(ot),a.surface=u)),!i))continue;let f=i.dot(ot);f<0&&i.addScaledVector(ot,-f*(Math.abs(f)<.55?1:1+r)),fr.copy(i).addScaledVector(ot,-i.dot(ot)),i.addScaledVector(fr,-Math.min(.95,s*u.friction*o))}return l}var Gp=new _,Xo=[];function Ol(n,e,t,i,r,s){let o=Math.min(24,Math.max(1,Math.ceil(n.distanceTo(e)/(.65*t))));Xo.length=0;let a=Math.min(n.x,e.x)-t,l=Math.max(n.x,e.x)+t,c=Math.min(n.y,e.y)-t,u=Math.max(n.y,e.y)+t,d=Math.min(n.z,e.z)-t,f=Math.max(n.z,e.z)+t;for(let h of i){let p=od(h);(!p||l>=p.minX&&a<=p.maxX&&u>=p.minY&&c<=p.maxY&&f>=p.minZ&&d<=p.maxZ)&&Xo.push(h)}for(let h=1;h<=o;h++){Gp.copy(n).lerp(e,h/o);for(let p of Xo){let x=id(Gp,t,p,ot);if(x)return r.copy(Gp).addScaledVector(ot,x+.001),s.copy(ot),p}}return null}var Ul=new _,Bl=new _,Yo=new _,yy=new On,Fl=new _;function Ai(n,e=0){let t=n.attributes.position,i=[],r=[],s=new Set;for(let p=0;p<t.count;p++){let x=new _().fromBufferAttribute(t,p),g=x.toArray().map(m=>m.toFixed(5)).join(",");s.has(g)||(s.add(g),i.push(x))}for(let p=0;p<(n.index?.count??t.count);p+=3){let x=y=>new _().fromBufferAttribute(t,n.index?n.index.getX(y):y),g=x(p),m=x(p+1),v=x(p+2),M=new On(g,m,v).getNormal(new _);M.lengthSq()>.1&&r.push({a:g,b:m,c:v,n:M})}let o=e||Math.max(...i.map(p=>p.length())),{x:a,y:l,z:c}=new nn().setFromPoints(i).getSize(new _),u=Math.max(1e-4,e**2*.4),d=e?new _().setScalar(1/u):new _(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),f=e?2*e:Math.min(a,l,c),h=p=>{let x=[];for(let g of p)g.lengthSq()>.5&&!x.some(m=>Math.abs(m.dot(g))>.9999)&&x.push(g);return x};return{vertices:i,faces:r,sphereRadius:e,radius:o,inverseInertia:d,thickness:f,normals:e?[]:h(r.map(p=>p.n)),edges:e?[]:h(r.flatMap(p=>[new _().subVectors(p.b,p.a).normalize(),new _().subVectors(p.c,p.b).normalize(),new _().subVectors(p.a,p.c).normalize()]))}}function ad(n,e){let{mesh:t,shape:i}=e;if(i.sphereRadius)return Math.max(0,n.distanceTo(t.position)-i.sphereRadius);if(kn.copy(t.quaternion).invert(),Jt.copy(n).sub(t.position).applyQuaternion(kn),i.faces.every(s=>s.n.dot(Ul.subVectors(Jt,s.a))<=1e-4))return 0;let r=1/0;for(let{a:s,b:o,c:a}of i.faces)yy.set(s,o,a).closestPointToPoint(Jt,Fl),r=Math.min(r,Jt.distanceToSquared(Fl));return Math.sqrt(r)}function DE(n,e,t,i){let{mesh:r,shape:s}=n;if(s.sphereRadius){let l=id(r.position,s.sphereRadius,e,t);return i.copy(r.position).addScaledVector(t,-s.sphereRadius),l}if(!e.heightfield&&(kn.copy(e.quaternion).invert(),Jt.copy(r.position).sub(e.position).applyQuaternion(kn),nd.copy(Jt).clamp(e.min,e.half),Jt.distanceToSquared(nd)>s.radius*s.radius))return 0;let o=0,a=0;for(let l of s.vertices){Ul.copy(l).applyQuaternion(r.quaternion).add(r.position);let c=id(Ul,.007,e,Yo);c<=0||(c>o+.003||!a?(o=c,a=1,i.copy(Ul),t.copy(Yo)):Math.abs(c-o)<.003&&Yo.dot(t)>.98&&(i.lerp(Ul,1/++a),o=Math.max(o,c)))}return o}var jh=new _,LE=new _,Jh=new _,UE=new _,sy=new qe,oy=new qe,ay=new _,Hp={min:0,max:0},Wp={min:0,max:0};function ly(n,e,t,i){if(n.sphereRadius){i.min=-n.sphereRadius,i.max=n.sphereRadius;return}ay.copy(e).applyQuaternion(t);let r=1/0,s=-1/0;for(let o of n.vertices){let a=o.dot(ay);r=Math.min(r,a),s=Math.max(s,a)}i.min=r,i.max=s}function ui(n){return Ai(new it(n.x*2,n.y*2,n.z*2))}function ld(n,e,t){let i=UE.subVectors(n.mesh.position,e.mesh.position);if(n.shape.sphereRadius&&e.shape.sphereRadius){let o=i.length();return o>1e-8?t.copy(i).divideScalar(o):t.set(1,0,0),Math.max(0,n.shape.sphereRadius+e.shape.sphereRadius-o)}let r=1/0;sy.copy(n.mesh.quaternion).invert(),oy.copy(e.mesh.quaternion).invert();function s(o){if(o.lengthSq()<1e-5)return!0;o.normalize();let a=i.dot(o);ly(n.shape,o,sy,Hp),ly(e.shape,o,oy,Wp);let l=Wp.max-Hp.min-a,c=Hp.max-Wp.min+a;return l<=0||c<=0?!1:(Math.min(l,c)<r&&(r=Math.min(l,c),t.copy(o).multiplyScalar(l<c?1:-1)),!0)}for(let o of n.shape.normals)if(!s(jh.copy(o).applyQuaternion(n.mesh.quaternion)))return 0;for(let o of e.shape.normals)if(!s(jh.copy(o).applyQuaternion(e.mesh.quaternion)))return 0;for(let o of n.shape.edges){Jh.copy(o).applyQuaternion(n.mesh.quaternion);for(let a of e.shape.edges)if(!s(jh.copy(a).applyQuaternion(e.mesh.quaternion).cross(Jh)))return 0}if(n.shape.sphereRadius||e.shape.sphereRadius){if(!s(LE.copy(i)))return 0;let o=n.shape.sphereRadius?n:e,a=o===n?e:n;if(!a.shape.sphereRadius){let l=1/0;kn.copy(a.mesh.quaternion).invert(),Jt.copy(o.mesh.position).sub(a.mesh.position).applyQuaternion(kn);for(let{a:c,b:u,c:d}of a.shape.faces){yy.set(c,u,d).closestPointToPoint(Jt,Fl);let f=Jt.distanceToSquared(Fl);f<l&&(l=f,Jh.copy(Fl))}if(!s(jh.subVectors(Jt,Jh).applyQuaternion(a.mesh.quaternion)))return 0}}return Number.isFinite(r)?r:0}var FE=new _;function NE(n,e,t){kn.copy(e.quaternion).invert(),Jt.copy(n.mesh.position).sub(e.position).applyQuaternion(kn);let i=-1;for(let l=0;l<3;l++)if(!(e.half.getComponent(l)-Math.abs(Jt.getComponent(l))>=n.radius)){if(i>=0)return null;i=l}if(i<0)return null;let r=Jt.getComponent(i),s=e.half.getComponent(i);t.set(0,0,0).setComponent(i,1).applyQuaternion(e.quaternion);let o=s+Qp(n,FE.copy(t).negate())-r,a=s+Qp(n,t)+r;return a<o&&t.negate(),Math.max(0,Math.min(o,a))}function tm(n,e,t,i){if(n.shape.sphereRadius||e.heightfield||!e.shape)return DE(n,e,t,i??Bl);let r=NE(n,e,t)??ld(n,e,t);return r>0&&i&&by(n,e,t,i),r}var Jp=Ai(new Mi(1,0).scale(...Lh)),Qh={mesh:{position:new _,quaternion:new qe},shape:Jp,radius:Jp.radius,precise:!0};function vy(n,e,t,i,r,s){let o=Math.min(48,Math.max(1,Math.ceil(n.distanceTo(e)/.021))),a=Jp.radius;Xo.length=0;for(let c of i){let u=od(c);u&&(Math.max(n.x,e.x)+a<u.minX||Math.min(n.x,e.x)-a>u.maxX||Math.max(n.y,e.y)+a<u.minY||Math.min(n.y,e.y)-a>u.maxY||Math.max(n.z,e.z)+a<u.minZ||Math.min(n.z,e.z)-a>u.maxZ)||Xo.push(c)}Qh.mesh.quaternion.copy(t);let l=Qh.mesh.position;for(let c=1;c<=o;c++){l.lerpVectors(n,e,c/o);for(let u of Xo){let d=u.objectBody;if(d&&(d.owner||l.distanceToSquared(d.mesh.position)>(a+d.radius)**2))continue;let f=d?ld(Qh,d,ot):tm(Qh,u,ot);if(f>0)return r.copy(l).addScaledVector(ot,f+5e-4),s.copy(ot),u}}return null}function zl(n,e){for(let t=0;t<4;t++){let i=!1;for(let r of e){if(!xy(n.mesh.position,n.radius,r))continue;let s=tm(n,r,ot);s<=1e-6||(n.mesh.position.addScaledVector(ot,s),i=!0)}if(!i)break}}var qp=new _,Dl=new _,Kh=new _,Xp=new qe,Gr=new qe,cy=new qe;function uy(n,e,t){return t.copy(n).invert().premultiply(e).normalize(),t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w),2*Math.atan2(Math.hypot(t.x,t.y,t.z),t.w)}function _y(n,e,t,i,r){let{mesh:s,shape:o}=n;qp.copy(s.position),Xp.copy(s.quaternion),Dl.subVectors(e,qp);let a=uy(Xp,t,Gr),l=Dl.length()+a*o.radius,c=Ty(o),u=Math.max(1,Math.min(wy,Math.ceil(l/c))),d=l>0?Math.min(1,u*c/l):1,f=a*d/u;Kh.set(Gr.x,Gr.y,Gr.z).normalize(),cy.setFromAxisAngle(Kh,f),Dl.multiplyScalar(d/u);for(let x=0;x<u;x++)s.position.add(Dl),s.quaternion.premultiply(cy).normalize(),zl(n,i);let h=Math.max(.006,r||0);n.velocity.lerp(Dl.subVectors(s.position,qp).divideScalar(h).clampLength(0,23),.52);let p=uy(Xp,s.quaternion,Gr);Kh.set(Gr.x,Gr.y,Gr.z).normalize().multiplyScalar(Math.min(24,p/h)),n.angular.lerp(Kh,.52)}function Qp(n,e){if(n.shape.sphereRadius)return n.shape.sphereRadius;kn.copy(n.mesh.quaternion).invert(),Yo.copy(e).applyQuaternion(kn);let t=-1/0;for(let i of n.shape.vertices)t=Math.max(t,i.dot(Yo));return t}var qo=new _,rd=new _,BE=new _,Yp=new _,Ho={},Wo={};function hy(n,e,t,i){let{mesh:r,shape:s}=n,o=Qp(n,BE.copy(e).multiplyScalar(t));if(i.plane=r.position.dot(e)+t*o,s.sphereRadius){i.minU=i.maxU=r.position.dot(qo),i.minV=i.maxV=r.position.dot(rd);return}i.minU=i.minV=1/0,i.maxU=i.maxV=-1/0;for(let a of s.vertices){if(a.dot(Yo)<o-.0015)continue;Yp.copy(a).applyQuaternion(r.quaternion).add(r.position);let l=Yp.dot(qo),c=Yp.dot(rd);i.minU=Math.min(i.minU,l),i.maxU=Math.max(i.maxU,l),i.minV=Math.min(i.minV,c),i.maxV=Math.max(i.maxV,c)}}function by(n,e,t,i){Math.abs(t.y)<.8?qo.set(-t.z,0,t.x).normalize():qo.set(t.y,-t.x,0).normalize(),rd.crossVectors(t,qo),hy(n,t,-1,Ho),hy(e,t,1,Wo);let r=(Math.max(Ho.minU,Wo.minU)+Math.min(Ho.maxU,Wo.maxU))*.5,s=(Math.max(Ho.minV,Wo.minV)+Math.min(Ho.maxV,Wo.maxV))*.5;i.copy(t).multiplyScalar((Ho.plane+Wo.plane)*.5).addScaledVector(qo,r).addScaledVector(rd,s)}var dy=new _;function sd(n){let{mesh:e,shape:t}=n.body,{bounds:i}=n;if(t.sphereRadius)i.min.copy(e.position).addScalar(-t.sphereRadius),i.max.copy(e.position).addScalar(t.sphereRadius);else{i.makeEmpty();for(let r of t.vertices)dy.copy(r).applyQuaternion(e.quaternion).add(e.position),i.expandByPoint(dy)}}function fy(n,e,t){let{min:i,max:r}=n;return e.heightfield?i.x<=e.xMax&&r.x>=e.xMin&&i.z<=e.zMax&&r.z>=e.zMin:!t||r.x>=t.minX&&i.x<=t.maxX&&r.y>=t.minY&&i.y<=t.maxY&&r.z>=t.minZ&&i.z<=t.maxZ}function My(n){return!n.owner&&!n.frozen}var Cs=new _,Rs=new _,Ll=new _,py=new _,Kp=new _,$p=new _,OE=new _;function $h(n,e,t){return n&&(n.inverseMass>0||n.held)?t.crossVectors(n.body.angular,e).add(n.body.velocity):t.set(0,0,0)}function Sy(n,e,t,i){let{mesh:r,shape:s}=n.body;return kn.copy(r.quaternion).invert(),Kp.crossVectors(e,t),i.copy(Kp).applyQuaternion(kn).multiply(s.inverseInertia).applyQuaternion(r.quaternion).multiplyScalar(n.inverseMass)}function ed(n,e,t){return n?.inverseMass?(Sy(n,e,t,$p),n.inverseMass+Kp.dot($p)):0}function td(n,e,t,i){n?.inverseMass&&(n.body.sleeping&&Math.abs(i)>.005&&(n.body.sleeping=!1,n.body.quietTime=0),n.body.velocity.addScaledVector(t,i*n.inverseMass),n.body.angular.addScaledVector(Sy(n,e,t,$p),i))}function Zp(n){return n.friction??n.spec?.friction??.78}function my(n,e,t,i,r){let{body:s}=n,o=e?.body,a=o?Math.sqrt(Zp(s)*Zp(o)):Math.min(Zp(s),t.friction??.78);Cs.subVectors(Bl,s.mesh.position),o&&Rs.subVectors(Bl,o.mesh.position),$h(n,Cs,Ll).sub($h(e,Rs,py));let l=Ll.dot(ot),c=!1;if(l<-1e-5){let d=l<-.8?Ce.clamp(r*(t?.bounce??1)*(s.spec?.physics?.bounce??1)*(o?.spec?.physics?.bounce??1),0,.98):0,f=-l*(1+d)/(ed(n,Cs,ot)+ed(e,Rs,ot));td(n,Cs,ot,f),td(e,Rs,ot,-f),$h(n,Cs,Ll).sub($h(e,Rs,py)),fr.copy(Ll).addScaledVector(ot,-Ll.dot(ot));let h=fr.length();if(h>1e-5&&a>0){fr.divideScalar(h);let p=Math.min(f*a,h/(ed(n,Cs,fr)+ed(e,Rs,fr)));td(n,Cs,fr,-p),td(e,Rs,fr,p)}c=!0}let u=i-15e-5;if(u>1e-6){let d=n.inverseMass+(e?.inverseMass??0);n.inverseMass&&(s.mesh.position.addScaledVector(ot,u*n.inverseMass/d),sd(n)),e?.inverseMass&&(o.mesh.position.addScaledVector(ot,-u*e.inverseMass/d),sd(e)),c=!0}return n.inverseMass&&ot.y>.57&&l<.2&&(n.groundFriction=Math.max(n.groundFriction,a),n.groundY=Math.max(n.groundY,ot.y)),e?.inverseMass&&ot.y<-.57&&l<.2&&(e.groundFriction=Math.max(e.groundFriction,a),e.groundY=Math.max(e.groundY,-ot.y)),c}function zE(n,e){let{body:t,groundFriction:i}=n;if(!i)return;let{velocity:r,angular:s,shape:o}=t;if(o.sphereRadius){let a=Math.exp(-e*i*.6);r.x*=a,r.z*=a,s.multiplyScalar(a),n.groundY>.999&&r.lengthSq()<144e-6&&s.lengthSq()<.01&&(r.set(0,0,0),s.set(0,0,0))}else s.multiplyScalar(Math.exp(-e*i*2.5)),r.lengthSq()<.0016&&s.lengthSq()<.012&&(r.set(0,0,0),s.set(0,0,0))}var wy=96,VE=5;function Ty(n){return Math.max(.008,n.thickness*.35)}var Nl={substeps:0,active:0,free:0,sleeping:0};function gy(n,e,t,i){n.velocity.y-=t*e*(n.spec?.physics?.gravity??1)*(i?.(n.mesh.position)?.gravity??1),n.mesh.position.addScaledVector(n.velocity,e);let r=n.angular.length();r>1e-5&&n.mesh.rotateOnWorldAxis(OE.copy(n.angular).divideScalar(r),Math.min(r,30)*e)}function kE(n,e,t){let i=new nn().setFromCenterAndSize(n.mesh.position,new _),r=n.mesh.position.clone().addScaledVector(n.velocity,e),s=t*GE(n);r.y-=s*e*e;let o=n.velocity.y/(2*s);if(o>0&&o<e){let a=n.mesh.position.clone().addScaledVector(n.velocity,o);a.y-=s*o*o,i.expandByPoint(a)}return i.expandByPoint(r).expandByScalar(n.shape.radius+.002),i}function GE(n){return n.sweepGravity??1}function Ay(n,e,t,i,r,s){if(Object.assign(Nl,{substeps:0,active:0,free:0,sleeping:0}),!Number.isFinite(t)||t<=0)return;let o=[],a=[],l=e.map(h=>({box:h,bounds:od(h)})),c=n.filter(h=>h.mesh.visible!==!1),u=new Map;for(let h of c)h.sweepGravity=s?.(h.mesh.position)?.gravity??1,u.set(h,kE(h,t,i));let d=Math.max(1,Math.ceil(t/.006));for(let h of c){let p=My(h);if(h.sleeping&&(h.velocity.lengthSq()>1e-8||h.angular.lengthSq()>1e-8||!p)&&(h.sleeping=!1,h.quietTime=0),h.collidable===!1){p&&a.push(h);continue}let x=u.get(h),g=l.some(({box:M,bounds:y})=>fy(x,M,y)),m=c.some(M=>M!==h&&M.collidable!==!1&&x.intersectsBox(u.get(M)));if(p&&!g&&!m){h.sleeping=!1,h.quietTime=0,a.push(h);continue}if(p&&!h.sleeping){let M=Math.min(h.angular.length(),30),y=h.velocity.length()+M*h.shape.radius+Math.abs(i*h.sweepGravity)*t;d=Math.max(d,Math.ceil(y*t/Ty(h.shape)))}let v={body:h,inverseMass:p?1/h.mass:0,held:h.owner&&!h.frozen,bounds:new nn,groundFriction:0,groundY:0,sweepStart:0,sweepEnd:0};sd(v),o.push(v)}for(let h of a)gy(h,t,i,s);d=o.some(h=>h.inverseMass&&!h.body.sleeping)?Math.min(wy,d):1,Object.assign(Nl,{substeps:d,active:o.length,free:a.length});let f=t/d;for(let h=0;h<d;h++){for(let p of o){if(!p.inverseMass)continue;let{body:x}=p;p.groundFriction=0,p.groundY=0,x.sleeping||(gy(x,f,i,s),sd(p))}for(let p=0;p<VE;p++){let x=!1;for(let g of o)if(g.inverseMass)for(let{box:m,bounds:v}of l){if(!fy(g.bounds,m,v))continue;let M=tm(g.body,m,ot,Bl);M>0&&(x=my(g,null,m,M,r)||x)}for(let g of o)g.sweepStart=g.bounds.min.x,g.sweepEnd=g.bounds.max.x;o.sort((g,m)=>g.sweepStart-m.sweepStart);for(let g=0;g<o.length;g++){let m=o[g];for(let v=g+1;v<o.length;v++){let M=o[v];if(M.sweepStart>m.sweepEnd)break;if(!m.inverseMass&&!M.inverseMass||m.body.sleeping&&M.body.sleeping&&m.groundY>.9&&M.groundY>.9||!m.bounds.intersectsBox(M.bounds))continue;let y=ld(m.body,M.body,ot);y<=0||(by(m.body,M.body,ot,Bl),x=my(m,M,null,y,r)||x)}}if(!x)break}for(let p of o)p.inverseMass&&zE(p,f)}for(let h of o){if(!h.inverseMass)continue;let p=h.body,x=!!p.shape.sphereRadius,g=h.groundY>.9&&p.velocity.lengthSq()<(x?144e-6:.0064)&&p.angular.lengthSq()*(x?1:p.shape.radius**2)<(x?.01:.0144);p.quietTime=g?(p.quietTime??0)+t:0,p.quietTime>.25?(p.sleeping=!0,p.velocity.set(0,0,0),p.angular.set(0,0,0)):g||(p.sleeping=!1),p.sleeping&&Nl.sleeping++}}function HE(n,e,t,i){if(n.x<t.xMin||n.x>t.xMax||n.z<t.zMin||n.z>t.zMax)return 0;let r=t.height(n.x,n.z);if(t.normalAt)t.normalAt(n.x,n.z,i);else{let o=(t.height(n.x+.045,n.z)-t.height(n.x-.045,n.z))/.09,a=(t.height(n.x,n.z+.045)-t.height(n.x,n.z-.045))/(2*.045);i.set(-o,1,-a).normalize()}return Math.max(0,e-(n.y-r)*i.y)}var jp={mesh:{position:null,quaternion:new qe},shape:{sphereRadius:0,normals:[],edges:[]}};function Ey(n,e,t,i){return!t.blocksPlayer||t.owner||!t.mesh.visible||n.distanceToSquared(t.mesh.position)>(e+t.radius)**2?0:(jp.mesh.position=n,jp.shape.sphereRadius=e,ld(jp,t,i))}function Cy(n,e,t,i,r){let s=Ey(n,e,t,ot);if(s<=0)return!1;n.addScaledVector(ot,s+.001),r?.copy(ot);let o=i.dot(ot);return o<0&&(i.addScaledVector(ot,-o),Math.abs(ot.y)<.6&&My(t)&&t.velocity.addScaledVector(ot,-Math.min(2.8,-o*.24))),!0}var Qt=(n,e,t,i)=>({xMin:n,xMax:e,zMin:t,zMax:i}),Ry=Qt(-24,24,-51,7),Iy=34521,jo={x:0,y:0,z:3},Hr={x:.05,y:1.16,z:5.9},Zo={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:Qt(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:Qt(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:Qt(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:Qt(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:Qt(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers",color:"#dfc78a",bounds:Qt(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:Qt(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:Qt(-6,6,-49,-27),sign:[0,-28.4]},openArea:{name:"Zone libre",color:"#a4c99c",bounds:Qt(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:Qt(9,23,-48,-37),sign:[16,-38.2]}},sP=[Qt(-9,-6,-51,7),Qt(6,9,-51,7),Qt(-24,24,-8,-5),Qt(-24,24,-27,-23),Qt(9,23,-37,-34)],Py=[{name:"Glace",bounds:Zo.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:Zo.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:Qt(-9,9,-51,7)},{name:"Sol ouest",bounds:Qt(-23,-9,-51,-23)},{name:"Sol ouest",bounds:Qt(-23,-9,-8,7)},{name:"Bordure ouest",bounds:Qt(-24,-23,-51,7)},{name:"Sol est",bounds:Qt(9,23,-51,-48)},{name:"Sol est",bounds:Qt(9,23,-37,7)},{name:"Bordure est",bounds:Qt(23,24,-51,7)}],Vl={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29]},Jo=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Dy=[1.75,4.75].flatMap(n=>[11.5,14,16.5,19,21.5].map(e=>({x:e,z:n}))),cd={x:-19.4,y:.68,z:-3.25},Ly=n=>({x:-20+n%6*1.52,z:.5-Math.floor(n/6)*1.25}),Uy={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",16,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(n,e)=>{let t=.3+e*.265;return["Palier "+(e+1),-3.75,t*.5,-29.65-e*1.7,2.1,t,1.35,e%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(n,e)=>[["Paroi ouest "+(e+1),1.35,2.15+e*.32,-33.4-e*3.55,.45,4.3+e*.64,2.7,2],["Paroi est "+(e+1),4.78,2.36+e*.3,-34.2-e*3.55,.45,4.72+e*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};var WE=[0,1,2,3,4,5,7,8,9,10];function Fy(n){Dy.forEach(({x:e,z:t},i)=>n(WE[i],new _(e,.8,t)))}function ud(){let n=[["Cube",new it(.33,.33,.33),"#b76b50",0,1.35],["Boule",new kt(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new gs(.29),"#d8ae53",0,1],["Brique",new it(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new it(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new kt(.6,4),"#dbab58",.6,3.7]].map(([e,t,i,r,s])=>({name:e,geo:t,mass:s,shape:Ai(t,r),material:new _t({color:i,roughness:.44,metalness:.1,flatShading:!0}),lowShape:r?null:ui(t.computeBoundingBox()??t.boundingBox.getSize(new _).multiplyScalar(.5))}));n.length=7;for(let{collisionGeo:e,sphere:t=0,...i}of iy()){let r=Ai(e??i.geo,t);n.push({...i,shape:r,lowShape:r})}return n}var nm=["spawn-cube","spawn-ball","spawn-tetrahedron","spawn-brick","spawn-large-rectangle","spawn-large-sphere",null,"spawn-phone","spawn-bread","spawn-wheel","spawn-cup","spawn-flashlight","spawn-soda","spawn-cone","spawn-radio"],kl=null,qE=new Set(["spawn-coconut","palm-tree","palm-trunk","palm-fronds","range-target","target-ring-outer","target-ring-middle","target-ring-inner","target-post","target-score"]);function Is(n){return typeof n=="string"&&qE.has(n.replace(/^custom-model-game-/,""))}function hd(n){let e=n?.parts;return Is(n?.id)||Is(n?.assetId)||Array.isArray(e)&&e.length>0&&e.every(t=>Is(t?.assetId))}function Ny(){if(kl)return kl;let n=ud(),e=nm;return kl=new Map(n.flatMap((t,i)=>[[e[i],{geometry:t.geo,material:t.material,mass:t.mass,properties:t.properties??{}}]])),kl.set("chrome-sphere",{geometry:new kt(.54,2),material:new _t({color:"#c8e6ed",metalness:1,roughness:.16})}),kl}function dd(n){return typeof n=="string"&&Ny().has(n)}function im(n){return Ny().get(n)??null}var am="gorilla-lab-models-v1",Bi=Object.freeze({models:24,parts:64,fileBytes:25e5,textureBytes:16e4}),XE=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i,YE=Object.freeze({box:"Cube",sphere:"Sph\xE8re",cylinder:"Cylindre",cone:"C\xF4ne",torus:"Anneau",capsule:"Capsule",tetrahedron:"T\xE9tra\xE8dre r\xE9gulier",diamond:"Diamant",custom:"Forme libre",asset:"Asset du jeu"}),Oy=Object.freeze({plain:"Uni",grid:"Grille",stripes:"Rayures",wood:"Bois",speckle:"Min\xE9ral"}),sm=Object.freeze({original:{label:"Standard",roughness:.68,metalness:0},matte:{label:"Mat",roughness:.95,metalness:0},satin:{label:"Satin\xE9",roughness:.46,metalness:0},gloss:{label:"Brillant",roughness:.15,metalness:.05},metal:{label:"M\xE9tal",roughness:.28,metalness:.85}}),ZE=Object.freeze({solid:"Solide",pass:"Traversable",trigger:"D\xE9clencheur"}),Gl=(n,e,t,i)=>Number.isFinite(n)?Ce.clamp(n,e,t):i;function fd(n){return{gravity:Gl(n?.physics?.gravity,0,2.5,1),bounce:Gl(n?.physics?.bounce,0,1.65,1)}}function zy(n){return{projection:n?.uv?.projection==="metric"?"metric":"native",repeat:Gl(n?.uv?.repeat,.01,100,1),angle:Gl(n?.uv?.angle,-360,360,0),offset:Array.from({length:2},(e,t)=>Gl(n?.uv?.offset?.[t],-100,100,0))}}var jE=Object.freeze({grabbable:!0,frozen:!1,collidable:!0,supportWhileHeld:!1}),JE=/^custom-model-[a-z0-9][a-z0-9-]{0,47}$/,QE=/^#[a-f\d]{6}$/i;function By(n,e){return typeof n=="string"&&n.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,48)||e}function Wr(n,e,t,i){return[0,1,2].map(r=>Number.isFinite(n?.[r])?Ce.clamp(n[r],t,i):e)}var om=new Set(["box","sphere","capsule","convex"]);function KE(n){if(n?.mode==="box")return{mode:"box",center:Wr(n.center,0,-6,6),size:Wr(n.size,.5,.025,12)};let e=Math.round(Ce.clamp(Number.isFinite(n?.precision)?n.precision:48,8,96));return n?.mode==="custom"?{mode:"custom",shape:om.has(n.shape)?n.shape:"box",center:Wr(n.center,0,-6,6),size:Wr(n.size,.5,.025,12),rotation:Wr(n.rotation,0,-360,360),precision:e}:n?.mode==="auto"&&om.has(n.shape)?{mode:"auto",shape:n.shape,precision:e}:{mode:"auto"}}function Ps(n){if(n?.version!==1||!Array.isArray(n.models)||n.models.length>Bi.models||JSON.stringify(n).length>Bi.fileBytes)throw new Error("Ce fichier ne contient pas un atelier de mod\xE8les Gorilla Lab valide.");let e=new Set,t=n.models.filter(i=>!hd(i)).map(i=>{if(typeof i?.id!="string"||!JE.test(i.id)||e.has(i.id)||!Array.isArray(i.parts)||i.parts.length>Bi.parts)throw new Error("Un mod\xE8le comporte un identifiant ou une liste de pi\xE8ces invalide.");return e.add(i.id),{id:i.id,name:By(i.name,"Mod\xE8le sans nom"),kind:i.kind==="avatar"?"avatar":i.kind==="structure"?"structure":"prop",...i.kind==="avatar"?{avatarRig:zp(i.avatarRig)}:{},...dd(i.assetId)?{assetId:i.assetId}:{},inGame:i.kind!=="avatar"&&i.inGame===!0,properties:Object.fromEntries(Object.entries(jE).map(([r,s])=>[r,typeof i.properties?.[r]=="boolean"?i.properties[r]:s])),hitbox:KE(i?.hitbox),...i.physics?{physics:fd(i)}:{},...i.partCollisions===!0?{partCollisions:!0}:{},parts:i.parts.filter(r=>!Is(r?.assetId)).map((r,s)=>({name:By(r?.name,`Pi\xE8ce ${s+1}`),...Object.hasOwn(Op,r?.avatarJoint)?{avatarJoint:r.avatarJoint}:{},...Number.isInteger(r?.group)&&r.group>0&&r.group<=Bi.parts?{group:r.group}:{},shape:r?.shape==="asset"&&dd(r?.assetId)?"asset":Object.hasOwn(YE,r?.shape)&&r.shape!=="asset"?r.shape:"box",...r?.shape==="asset"&&dd(r?.assetId)?{assetId:r.assetId}:{},...r?.shape==="custom"?{profile:Yh(r?.profile)}:{},position:Wr(r?.position,0,-3,3),rotation:Wr(r?.rotation,0,-360,360),scale:Wr(r?.scale,.35,.02,4),color:typeof r?.color=="string"&&QE.test(r.color)?r.color:"#51bdd2",...Object.hasOwn(ZE,r?.zone)?{zone:r.zone}:{},...Object.hasOwn(sm,r?.finish)?{finish:r.finish}:{},...r?.uv?{uv:zy(r)}:{},surface:Object.hasOwn(Oy,r?.surface)?r.surface:"plain",texture:typeof r?.texture=="string"&&r.texture.length<=Bi.textureBytes&&XE.test(r.texture)?r.texture:null}))}});return{version:1,models:t,avatarId:typeof n.avatarId=="string"&&Vh(t.find(i=>i.id===n.avatarId))?n.avatarId:null}}function lm(n){try{let e=(n??globalThis.localStorage)?.getItem(am);if(e&&e.length<=Bi.fileBytes)return Ps(JSON.parse(e))}catch{}return{version:1,models:[],avatarId:null}}function $E(n){switch(n){case"tetrahedron":return new gs(Math.sqrt(3)/2);case"sphere":return new ai(.5,20,12);case"cylinder":return new sn(.5,.5,1,20);case"cone":return new rr(.5,1,20);case"torus":return new Si(.365,.135,8,24);case"capsule":return new Dr(.28,.44,6,16);case"diamond":return new Mi(.5);default:return new it(1,1,1)}}var Vy=Object.keys(Oy),Qn=64,Hl=4,ky=2,Ni;function Gy(n,e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453,r=i-Math.floor(i);switch(n){case"grid":return e%16<2||t%16<2?135:255;case"stripes":return(e+t)%16<6?155:255;case"wood":return 204+24*Math.sin(t*.75+Math.sin(e*.13))+27*r;case"speckle":return r>.88?130:207+48*r;default:return 255}}function Hy(){if(Ni)return Ni;let n=Qn*Hl,e=Qn*ky,t=new Uint8Array(n*e*4);for(let i=0;i<e;i++)for(let r=0;r<n;r++){let s=Math.floor(i/Qn)*Hl+Math.floor(r/Qn),o=Gy(Vy[s],r%Qn,i%Qn),a=(i*n+r)*4;t[a]=t[a+1]=t[a+2]=o,t[a+3]=255}return Ni=new si(t,n,e),Ni.colorSpace=ht,Ni.magFilter=ln,Ni.minFilter=Pn,Ni.generateMipmaps=!0,Ni.needsUpdate=!0,Ni}var rm=new Map;function e2(n){if(rm.has(n))return rm.get(n);let e=new Uint8Array(Qn*Qn*4);for(let i=0;i<Qn;i++)for(let r=0;r<Qn;r++){let s=Gy(n,r,i),o=(i*Qn+r)*4;e.set([s,s,s,255],o)}let t=new si(e,Qn,Qn);return t.colorSpace=ht,t.wrapS=t.wrapT=Rn,t.magFilter=ln,t.minFilter=Pn,t.generateMipmaps=!0,t.needsUpdate=!0,t.userData.sharedModelSurface=!0,rm.set(n,t),t}function Wy(n){return!!(n?.texture||n?.uv||n?.shape==="asset"||n?.finish&&n.finish!=="original")}function t2(n,e,t){let{projection:i,repeat:r,angle:s,offset:o}=zy(e),a=Ce.degToRad(s),l=Math.cos(a),c=Math.sin(a),{position:u,normal:d,uv:f}=n.attributes,h=new _,p=new _;for(let x=0;x<u.count;x++){let g=f.getX(x),m=f.getY(x);if(i==="metric"){h.fromBufferAttribute(u,x).multiply(t),p.fromBufferAttribute(d,x);let v=Math.abs(p.x),M=Math.abs(p.y),y=Math.abs(p.z);v>=M&&v>=y?(g=h.z,m=h.y):M>=y?(g=h.x,m=h.z):(g=h.x,m=h.y)}f.setXY(x,(g*l-m*c)*r+o[0],(g*c+m*l)*r+o[1])}}function Qo(n,e=new _(...n.scale)){let t=n.shape==="asset"?im(n.assetId):null,i=n.shape==="custom"?ty(n.profile):t?.geometry?.clone()??$E(n.shape),r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.attributes.uv||r.setAttribute("uv",new Oe(new Float32Array(r.attributes.position.count*2),2)),n.uv&&t2(r,n,e);let s=n.rotation.map(Ce.degToRad);r.scale(...n.scale),r.rotateX(s[0]),r.rotateY(s[1]),r.rotateZ(s[2]),r.translate(...n.position);let o=new Le(n.color),a=r.attributes.position.count,l=new Float32Array(a*3),c=r.attributes.uv,u=Vy.indexOf(n.surface),d=u%Hl,f=Math.floor(u/Hl),h=r.attributes.color;for(let p=0;p<a;p++)n.shape==="asset"&&h?(l[p*3]=h.getX(p)*o.r,l[p*3+1]=h.getY(p)*o.g,l[p*3+2]=h.getZ(p)*o.b):o.toArray(l,p*3),n.shape!=="asset"&&!n.texture&&!n.uv&&c.setXY(p,(d+.05+c.getX(p)*.9)/Hl,(f+.05+c.getY(p)*.9)/ky);return r.setAttribute("color",new gt(l,3)),r}function cm(n){let e=n?.shape==="asset"?im(n.assetId):null,t=sm[n?.finish];if(e?.material){let o=e.material.clone();if(t&&n.finish!=="original"&&(o.roughness=t.roughness,o.metalness=t.metalness),o.map&&(o.map=o.map.clone(),o.map.needsUpdate=!0),n.texture){o.map?.dispose();let a=new li().load(n.texture);a.colorSpace=ht,a.wrapS=a.wrapT=Rn,o.map=a}return n.uv&&o.map&&(o.map.wrapS=o.map.wrapT=Rn),n.color&&n.color!=="#ffffff"&&o.color?.multiply(new Le(n.color)),o.needsUpdate=!0,o}let{roughness:i,metalness:r}=t??sm.original;if(!n?.texture)return new _t({vertexColors:!0,map:n?.uv?e2(n.surface):Hy(),roughness:i,metalness:r});let s=new li().load(n.texture);return s.colorSpace=ht,s.wrapS=s.wrapT=Rn,new _t({vertexColors:!0,map:s,roughness:i,metalness:r})}function qr(n){return n?.parts?.some(Wy)?n.parts.map(cm):new _t({vertexColors:!0,map:Hy(),roughness:.68})}function Ko(n){for(let e of Array.isArray(n)?n:[n]){if(!e)return;e.map&&e.map!==Ni&&!e.map.userData.sharedModelSurface&&e.map.dispose(),e.dispose()}}function Wl(n,e=null){let t=n.map(r=>{if(!e||r.uv?.projection!=="metric")return Qo(r);let s=new rn(...r.rotation.map(Ce.degToRad),"ZYX"),o=new _(...r.scale).multiply(new _(...[0,1,2].map(a=>new _().setComponent(a,1).applyEuler(s).multiply(e).length())));return Qo(r,o)}),i=kh(t,n.some(Wy));return t.forEach(r=>r.dispose()),i.center(),i.computeBoundingBox(),i}function $o(n,e=null){let t=Wl(n.parts),i=t.boundingBox.getSize(new _).max(new _(1e-5,1e-5,1e-5));return e&&n.parts.some(r=>r.uv?.projection==="metric")&&(t.dispose(),t=Wl(n.parts,e.clone().divide(i))),t.scale(1/i.x,1/i.y,1/i.z),t.computeBoundingBox(),t}function um(n){let e=new nn;for(let t of n.parts??[]){let i=Qo(t);i.computeBoundingBox(),e.union(i.boundingBox),i.dispose()}return e.isEmpty()&&e.setFromCenterAndSize(new _,new _(1,1,1)),e}function qy(n){return um(n).getSize(new _)}function Xy(n){let e=um(n),t=e.getCenter(new _),i=e.getSize(new _),r=n.hitbox??{},s=r.mode==="box"||r.mode==="custom";return{mode:s?"custom":"auto",shape:r.mode==="box"?"box":om.has(r.shape)?r.shape:"box",precision:Number.isFinite(r.precision)?Ce.clamp(r.precision,8,96):48,center:s?new _(...r.center):t,size:s?new _(...r.size):i,rotation:s?new _(...r.rotation??[0,0,0]):new _,boundsCenter:t,boundsSize:i}}function n2(n,e){let t=n.attributes.position,i=[],r=new Set;for(let l=0;l<t.count;l++){let c=new _().fromBufferAttribute(t,l),u=c.toArray().map(d=>d.toFixed(4)).join(",");r.has(u)||(r.add(u),i.push(c))}if(i.length<=e)return i;let s=[i[0]],o=new Set([0]),a=i.map(l=>l.distanceToSquared(s[0]));for(;s.length<e;){let l=-1,c=-1;for(let u=0;u<i.length;u++)!o.has(u)&&a[u]>c&&(l=u,c=a[u]);if(l<0)break;o.add(l),s.push(i[l]);for(let u=0;u<i.length;u++)a[u]=Math.min(a[u],i[u].distanceToSquared(i[l]))}return s}function i2(n,e=null){let t=Xy(n),i=Math.max(8,Math.min(24,Math.round(Math.sqrt(t.precision)*2)));if(t.shape==="sphere"||t.shape==="capsule"){let r=(e??t.size).clone().max(new _(1e-5,1e-5,1e-5)),s=r.toArray(),o=Math.max(...s),a=s.indexOf(o),l=(t.shape==="sphere"?o:Math.max(...s.filter((d,f)=>f!==a)))/2,c=Math.max(0,o-2*l),u=t.shape==="capsule"&&c>1e-5?new Dr(l,c,Math.max(2,Math.round(i/8)),i):new ai(l,i,Math.max(6,Math.floor(i/2)));return t.shape==="capsule"&&c>1e-5&&(a===0&&u.rotateZ(-Math.PI/2),a===2&&u.rotateX(Math.PI/2)),u.scale(1/r.x,1/r.y,1/r.z),u}if(t.shape==="convex"&&n.parts?.length){let r=Wl(n.parts),s=n2(r,t.precision);if(r.dispose(),s.length>=4)try{let o=new hr(s),a=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5));return o.scale(1/a.x,1/a.y,1/a.z),o.computeVertexNormals(),o}catch{}}return new it(1,1,1)}function ql(n,e=null){let t=Xy(n),i=t.boundsSize.clone().max(new _(1e-5,1e-5,1e-5)),r=e?new _(e.x,e.y,e.z):i.clone(),s=t.size.clone().multiply(r).divide(i),o=t.center.clone().sub(t.boundsCenter).multiply(r).divide(i),a=i2(n,s);return a.scale(s.x,s.y,s.z),a.rotateX(Ce.degToRad(t.rotation.x)),a.rotateY(Ce.degToRad(t.rotation.y)),a.rotateZ(Ce.degToRad(t.rotation.z)),a.translate(o.x,o.y,o.z),a.computeBoundingBox(),a}function Yy(n,e=null){if(!n.partCollisions||n.kind!=="structure")return null;if(n.properties?.collidable===!1)return[];let t=um(n),i=t.getCenter(new _),r=t.getSize(new _).max(new _(1e-5,1e-5,1e-5)),s=e?e.clone().divide(r):new _(1,1,1);return n.parts.flatMap(o=>{if(o.zone==="pass")return[];let a=Qo(o);a.computeBoundingBox();let l=a.boundingBox,c={mode:o.zone==="trigger"?"trigger":"solid",name:o.name,center:l.getCenter(new _).sub(i).multiply(s),size:l.getSize(new _).multiply(s).max(new _(.01,.01,.01))};return a.dispose(),[c]})}function Zy(n){return n.models.filter(e=>e.kind!=="avatar"&&e.inGame&&e.parts.length).map(e=>{let t=Wl(e.parts),i=t.boundingBox.getSize(new _);return{id:e.id,name:e.name,properties:e.properties,physics:fd(e),geo:t,material:qr(e),collisionGeo:ql(e),mass:Ce.clamp(i.x*i.y*i.z*9,.18,12)}})}function jy(n){let e=n.models.find(a=>a.id===n.avatarId);if(!e?.parts.length||e.kind==="avatar")return null;let t=Wl(e.parts),i=t.boundingBox.getSize(new _),r=.36/Math.max(i.x,i.y,i.z);t.scale(r,r,r);let s=new He(t,qr(e));s.castShadow=!0;let o=new vt;return o.add(s),o}var r2=256,Ky=1/2.6**2,s2=1e4,ea=1e4,o2=10,a2=10,l2=256,c2=16,md=24,Jy=new WeakMap,Oi=Ce.clamp,zi=Ce.lerp,gd=n=>n*n*(3-2*n);function bt(n,e,t,i){return Number.isFinite(n)?Oi(n,e,t):i}function $y(n){if(!n)return null;let e=Ps({version:1,models:[n]});return e.models[0]?.parts.length?e.models[0]:null}var u2=/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i;function ev(n,e=c2){return Math.round(bt(n,1,r2,e))}function h2(n,e,t,i,r){if(Number.isFinite(n[e+"Density"]))return bt(n[e+"Density"],0,ea,0);let s=bt(n[e],0,1,0);if(!s)return 0;let o=Math.max(1,Math.round(Math.min(r,t*i)*s));return bt(o/t,0,ea,0)}var d2=["grass","shrub","model"],f2=["keep","fit","stretch"],p2=/^#[a-f\d]{6}$/i,m2=10;function g2(n={}){let e=(l,c)=>l<=c?[l,c]:[c,l],[t,i]=e(bt(n.minHeight,-300,300,-300),bt(n.maxHeight,-300,300,300)),[r,s]=e(bt(n.minX,0,100,0),bt(n.maxX,0,100,100)),[o,a]=e(bt(n.minZ,0,100,0),bt(n.maxZ,0,100,100));return{minHeight:t,maxHeight:i,minX:r,maxX:s,minZ:o,maxZ:a,maxSlope:bt(n.maxSlope,0,90,90),yaw:bt(n.yaw,-360,360,0),yawVariation:bt(n.yawVariation,0,360,360)}}function x2(n){return n?{x:bt(n.x,-256,256,0),z:bt(n.z,-256,256,0),radius:bt(n.radius,.1,512,5),blend:bt(n.blend,0,1,.5)}:null}function Qy(n={}){let e=$y(n.model),t=e?"model":n.kind==="shrub"?"shrub":"grass",i=t==="grass"?"#527a34":t==="shrub"?"#36583c":"#ffffff",r=(Array.isArray(n.colors)?n.colors:[n.colorA,n.colorB]).slice(0,o2).map(s=>p2.test(s)?s:i);for(;r.length<2;)r.push(r.at(-1)??i);return{kind:t,model:e,density:bt(n.density,0,ea,1),colors:r,seed:Math.round(bt(n.seed,0,2147483647,1)),size:bt(n.size,.05,ea,1),fit:f2.includes(n.fit)?n.fit:"keep",collidable:n.collidable===!0,variation:bt(n.variation,0,a2,0),...n.scatter?{scatter:g2(n.scatter)}:{}}}function y2(n,e){return Array.isArray(n.rules)?n.rules.slice(0,s2).filter(t=>t&&typeof t=="object"&&d2.includes(t.kind)).filter(t=>t.kind!=="model"||$y(t.model)).map(Qy):[["grass",5,3200,.42],["shrub",.17,48,.85]].flatMap(([t,i,r,s])=>{let o=h2(n,t,e,i,r),a=n[t+"Model"];return!o&&!a&&!(t==="grass"&&n.grassTexture)?[]:[Qy({kind:t,model:a,density:o,seed:n.seed,size:bt(n[t+"Size"],.1,5,1)*(a?s:1),fit:a?"stretch":"keep",variation:.38,...t==="grass"&&n.grassTexture&&!a?{colorA:"#ffffff",colorB:"#ffffff"}:{}})]})}function ta(n={},e=1){let t=ev(n?.detail),i=n?.heights;return{detail:t,seed:Math.round(bt(n?.seed,0,2147483647,1)),amplitude:bt(n?.amplitude,0,12,0),frequency:bt(n?.frequency,.015,2,.12),octaves:Math.round(bt(n?.octaves,1,m2,3)),roughness:bt(n?.roughness,.15,.95,.42),ridge:bt(n?.ridge,0,1,0),edgeFade:bt(n?.edgeFade,0,1,0),...n?.reliefArea?{reliefArea:x2(n.reliefArea)}:{},rules:y2(n??{},e),textureDensity:bt(n?.textureDensity,1e-4,l2,Ky),grassTexture:typeof n?.grassTexture=="string"&&n.grassTexture.length<5e5&&u2.test(n.grassTexture)?n.grassTexture:null,heights:Array.isArray(i)&&i.length===(t+1)**2?Array.from(i,r=>bt(r,-md,md,0)):null}}function tv(n,e,t,i){let r=Oi(t,0,e),s=Oi(i,0,e),o=Math.min(e-1,Math.floor(r)),a=Math.min(e-1,Math.floor(s)),l=r-o,c=s-a,u=e+1,d=a*u+o,f=n[d],h=n[d+1],p=n[d+u],x=n[d+u+1];return l+c<=1?f+(h-f)*l+(p-f)*c:x+(p-x)*(1-l)+(h-x)*(1-c)}function nv(n,e){let t=ev(e,n.detail);if(t===n.detail)return n;if(!n.heights)return{...n,detail:t,heights:null};let i=t+1,r=n.detail/t,s=Array.from({length:i**2},(o,a)=>tv(n.heights,n.detail,a%i*r,Math.floor(a/i)*r));return{...n,detail:t,heights:s}}function hi(n,e,t){let i=Math.imul(n,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1274126177);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function pd(n,e,t){let i=Math.floor(n),r=Math.floor(e),s=gd(n-i),o=gd(e-r),a=zi(hi(i,r,t),hi(i+1,r,t),s),l=zi(hi(i,r+1,t),hi(i+1,r+1,t),s);return 2*zi(a,l,o)-1}function na(n){let{w:e,d:t,terrain:i}=n,{detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h}=i,p=Jy.get(n),x=p&&p.w===e&&p.d===t&&p.detail===r&&p.seed===s&&p.amplitude===o&&p.frequency===a&&p.octaves===l&&p.roughness===c&&p.ridge===u&&p.edgeFade===d&&p.reliefArea===f;if(x&&p.heights===h)return p;let g=r+1,m=x?p.procedural:new Float64Array(g**2);if(!x&&o)for(let y=0;y<=r;y++)for(let A=0;A<=r;A++){let E=(A/r-.5)*e,L=(y/r-.5)*t,U=1;if(f){let k=Math.hypot(E-f.x,L-f.z);if(k>=f.radius)continue;f.blend&&(U=gd(Math.min(1,(f.radius-k)/(f.radius*f.blend))))}let S=E*a,b=L*a,R=0,z=1,O=0;for(let k=0;k<l;k++){let Q=pd(S*2**k,b*2**k,s+k*13);R+=z*zi(Q,1-2*Math.abs(Q),u),O+=z,z*=c}let Y=d?Math.pow(Math.max(0,Math.min(1,(.5-Math.abs(A/r-.5))*2,(.5-Math.abs(y/r-.5))*2)),d*2):1,N=l===3&&c===.42&&u===0&&d===0;m[y*g+A]=U*(N?o*(.62*pd(S,b,s)+.26*pd(S*2.03,b*2.03,s+13)+.12*pd(S*4.13,b*4.13,s+37)):o*R/O*Y)}let v=h?m.map((y,A)=>y+h[A]):m,M={w:e,d:t,detail:r,seed:s,amplitude:o,frequency:a,octaves:l,roughness:c,ridge:u,edgeFade:d,reliefArea:f,heights:h,procedural:m,surface:v};return Jy.set(n,M),M}function xd(n,e,t){let{detail:i,w:r,d:s,surface:o}=n;return tv(o,i,(e/r+.5)*i,(t/s+.5)*i)}function Xl(n=0){return(Math.round(n/90)%4+4)%4*90}function iv(n){let e=Xl(n.yaw);return{cos:[1,0,-1,0][e/90],sin:[0,1,0,-1][e/90]}}function hm(n,e,t){let{cos:i,sin:r}=iv(n),s=e-n.x,o=t-n.z;return[i*s-r*o,r*s+i*o]}function v2(n){return Xl(n.yaw)%180?{w:n.d,d:n.w}:{w:n.w,d:n.d}}function _2(n,e,t){return n.y+xd(na(n),...hm(n,e,t))}function b2(n,e,t){let{detail:i,surface:r}=n,s=i+1,o=Math.max(0,e-1),a=Math.min(i,e+1),l=Math.max(0,t-1),c=Math.min(i,t+1),u=0,d=0;for(let f=l;f<=c;f++)for(let h=o;h<=a;h++)h===e&&f===t||(u+=r[f*s+h],d++);return u/d}function rv(n,e,t,{mode:i,radius:r,strength:s,target:o}={}){if(!n?.terrain||!["raise","lower","smooth","flatten"].includes(i)||![e,t,r,s].every(Number.isFinite)||r<=0||s<=0)return!1;let a=na(n),{detail:l,w:c,d:u,surface:d,procedural:f}=a,[h,p]=hm(n,e,t),x=Oi(h,-c/2,c/2),g=Oi(p,-u/2,u/2);if((h-x)**2+(p-g)**2>=r**2)return!1;let m=(h/c+.5)*l,v=(p/u+.5)*l,M=c/l,y=u/l,A=Math.max(0,Math.ceil(m-r/M)),E=Math.min(l,Math.floor(m+r/M)),L=Math.max(0,Math.ceil(v-r/y)),U=Math.min(l,Math.floor(v+r/y)),S=Number.isFinite(o)?o-n.y:xd(a,h,p),b=l+1,R=a.heights?.slice()??new Array(b**2).fill(0),z=!1,O=!1;function Y(N,k,Q){z=!0;let V=k*b+N,J=R[V],re;if(i==="raise"||i==="lower")re=J+(i==="raise"?1:-1)*s*Q;else{let pe=i==="flatten"?S:b2(a,N,k);re=zi(d[V],pe,Math.min(1,s)*Q)-f[V]}re=Oi(re,-md,md),!(Math.abs(re-J)<1e-7)&&(R[V]=re,O=!0)}for(let N=L;N<=U;N++)for(let k=A;k<=E;k++){let Q=Math.hypot((k-m)*M,(N-v)*y)/r;Q<1&&Y(k,N,gd(1-Q))}if(!z){let N=Oi(m,0,l),k=Oi(v,0,l),Q=Math.min(l-1,Math.floor(N)),V=Math.min(l-1,Math.floor(k)),J=N-Q,re=k-V,pe=J+re<=1,ye=pe?1-J-re:J+re-1,Te=pe?J:1-re,Re=pe?re:1-J;if(ye>=Math.max(Te,Re)){let Pe=+!pe;Y(Q+Pe,V+Pe,1)}else Te>=Re?Y(Q+1,V,1):Y(Q,V+1,1)}return O&&(n.terrain.heights=R),O}function sv(n){let{w:e,d:t,terrain:i}=n,{detail:r}=i,s=r+1,o=new Float32Array(s**2*3),a=new Float32Array(s**2*2),l=s**2>65536?Uint32Array:Uint16Array,c=new l(r**2*6),u=Math.sqrt(i.textureDensity??Ky),d=0;for(let h=0;h<=r;h++)for(let p=0;p<=r;p++){let x=h*s+p;o[3*x]=(p/r-.5)*e,o[3*x+2]=(h/r-.5)*t,a[2*x]=p/r*e*u,a[2*x+1]=(1-h/r)*t*u,h<r&&p<r&&(c.set([x,x+s,x+1,x+s+1,x+1,x+s],d),d+=6)}let f=new et;return f.setAttribute("position",new gt(o,3).setUsage(Ln)),f.setAttribute("uv",new gt(a,2)),f.setIndex(new gt(c,1)),M2(f,n),f}function M2(n,e){let{surface:t}=na(e),{position:i}=n.attributes;for(let r=0;r<t.length;r++)i.setY(r,t[r]);i.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n.boundingBox&&n.computeBoundingBox()}function ov(n,e,t,i){let{detail:r,w:s,d:o,surface:a}=n,l=Oi((e/s+.5)*r,0,r),c=Oi((t/o+.5)*r,0,r),u=Math.min(r-1,Math.floor(l)),d=Math.min(r-1,Math.floor(c)),f=r+1,h=d*f+u,p=l-u+c-d<=1,x=p?a[h+1]-a[h]:a[h+f+1]-a[h+f],g=p?a[h+f]-a[h]:a[h+f+1]-a[h+1];return i.set(-x*r/s,1,-g*r/o).normalize()}function S2(n,e,t,i){let[r,s]=hm(n,e,t),{cos:o,sin:a}=iv(n);ov(na(n),r,s,i);let l=i.x,c=i.z;return i.set(o*l+a*c,i.y,-a*l+o*c)}function av(n,e){let{w:t,d:i}=v2(n);return{mesh:e,heightfield:!0,xMin:n.x-t/2,xMax:n.x+t/2,zMin:n.z-i/2,zMax:n.z+i/2,height:(r,s)=>_2(n,r,s),normalAt:(r,s,o)=>S2(n,r,s,o),friction:n.grip,gravity:n.gravity,bounce:n.bounce,zone:!0,type:n.material}}function w2(){let n=[];for(let t=0;t<5;t++){let i=t*2.4,r=Math.cos(i),s=Math.sin(i),o=r*.105,a=s*.105;n.push(o+s*.028,0,a-r*.028,o-s*.028,0,a+r*.028,o+r*.16,.27+t%3*.07,a+s*.16)}let e=new et;return e.setAttribute("position",new Oe(n,3)),e.setAttribute("uv",new Oe(Array.from({length:5},()=>[0,0,1,0,.5,1]).flat(),2)),e.computeVertexNormals(),e}function T2(){return new kt(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}function A2(n,e,t){if(e==="stretch")return new _().setScalar(t);let i=e==="fit"?Math.min(1,t/Math.max(n.x,n.y,n.z,1e-5)):t;return n.clone().multiplyScalar(i)}function E2(n,e,t){let i=e.scatter;if(!i)return{requested:Math.round(n.w*n.d*e.density),positions:null,area:n.w*n.d};let r=(i.minX/100-.5)*n.w,s=(i.maxX/100-.5)*n.w,o=(i.minZ/100-.5)*n.d,a=(i.maxZ/100-.5)*n.d,l=(s-r)*(a-o),c=[],u=new _;if(!l||!e.density)return{requested:0,positions:c,area:l};let d=Math.cos(Ce.degToRad(i.maxSlope)),f=i.maxSlope<90,h=i.minHeight>-300||i.maxHeight<300,p=(M,y)=>{if(h){let A=n.y+xd(t,M,y);if(A<i.minHeight||A>i.maxHeight)return!1}return!f||ov(t,M,y,u).y>=d-1e-7},x=1;if(f||h){let M=0,y=32;for(let A=0;A<y;A++)for(let E=0;E<y;E++)p(zi(r,s,(E+.5)/y),zi(o,a,(A+.5)/y))&&M++;x=M/y**2}let g=Math.round(l*x*e.density),m=Math.min(g,ea),v=f||h?Math.min(12e4,Math.ceil(m/Math.max(x,.001))*3):m;for(let M=0;M<v&&c.length<m;M++){let y=zi(r,s,hi(M,27,e.seed)),A=zi(o,a,hi(M,27,e.seed+1));p(y,A)&&c.push([y,A])}return{requested:g,positions:c,area:l*x}}function lv(n){let e=new vt,t=na(n);e.userData.distribution=[];for(let[i,r]of(n.terrain.rules??[]).entries()){let{requested:s,positions:o,area:a}=E2(n,r,t),l=o?o.length:Math.min(s,ea);if(e.userData.distribution[i]={requested:s,count:l,area:a},!l)continue;let c=r.kind==="grass",u=r.model?A2(qy(r.model),r.fit,r.size):null,d=r.model?$o(r.model,u):c?w2():T2();u?d.scale(...u):d.scale(r.size,r.size,r.size),d.computeBoundingBox(),d.translate(0,-d.boundingBox.min.y,0),d.computeBoundingBox();let f=r.model?qr(r.model):new yn({color:"#ffffff",side:c?mn:_i,flatShading:!0});if(c&&n.terrain.grassTexture){let g=new li().load(n.terrain.grassTexture);g.colorSpace=ht,f.map=g,f.userData.ownTexture=!0}let h=new Za(d,f,l);h.name=r.kind,h.userData={ruleIndex:i,seed:r.seed,variation:r.variation,collidable:r.collidable,requestedCount:s,positions:o,scatter:r.scatter},h.instanceMatrix.setUsage(Ln),h.receiveShadow=!0;let p=r.colors.map(g=>new Le(g)),x=new Le;for(let g=0;g<l;g++){let m=hi(g,41,r.seed)*(p.length-1),v=Math.floor(m);h.setColorAt(g,x.copy(p[v]).lerp(p[v+1],m-v))}e.add(h)}return C2(e,n),e}function C2(n,e){let t=na(e),i=new Zt;for(let r of n.children){let{seed:s,variation:o,positions:a,scatter:l}=r.userData;for(let c=0;c<r.count;c++){let u=a?.[c][0]??(hi(c,27,s)-.5)*.96*e.w,d=a?.[c][1]??(hi(c,27,s+1)-.5)*.96*e.d;i.position.set(u,xd(t,u,d),d),i.rotation.y=l?Ce.degToRad(l.yaw+hi(c,27,s+2)*l.yawVariation):hi(c,27,s+2)*Math.PI*2,i.scale.setScalar(zi(Math.max(.05,1-o),1+o,hi(c,27,s+3))),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere()}}function cv(n,e){let t=[],i=new ct,r=new _,s=new qe().setFromAxisAngle(new _(0,1,0),Xl(n.yaw)*Math.PI/180),o=new _(n.x,n.y,n.z),a=new _(.005,.005,.005);for(let l of e?.children??[]){if(!l.userData.collidable)continue;let c=l.geometry.boundingBox,u=c.getCenter(new _),d=c.getSize(new _).multiplyScalar(.5);for(let f=0;f<l.count;f++){l.getMatrixAt(f,i);let h=new _,p=new qe;i.decompose(h,p,r),h.add(u.clone().multiply(r).applyQuaternion(p)),h.applyQuaternion(s).add(o),p.premultiply(s),t.push({position:h,quaternion:p,half:d.clone().multiply(r).max(a)})}}return t}function uv(n){if(n){for(let e of n.children)e.geometry.dispose(),e.material?.userData?.ownTexture&&e.material.map?.dispose(),Ko(e.material),e.dispose();n.clear(),n.removeFromParent()}}var R2=n=>/^#[a-f0-9]{6}$/i.test(n)?n:"#8a9ca0",I2=(n,e,t)=>Math.min(t,Math.max(e,n));var hv=(n,e)=>{for(let t of[-512,0,512])for(let i of[-512,0,512])n.save(),n.translate(t,i),e(n),n.restore()};function P2(n){let e=n>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/2**32}function dv(n,{pattern:e="grain",base:t="#667985",scale:i=1,seed:r=23}={}){let s=n.getContext("2d"),o=512;s.clearRect(0,0,o,o),s.fillStyle=R2(t),s.fillRect(0,0,o,o);let a=P2(r),l=o/Math.max(4,2*Math.round(4*i)),c=u=>{s.fillStyle=u>0?"#f6f4dc":"#18232b",s.globalAlpha=Math.abs(u)};if(["grain","soil","rock","sand","grass","wood"].includes(e)){let u=1/Math.sqrt(i),d={grain:4200,soil:1e3,rock:200,sand:9800,grass:2900,wood:2450}[e];for(let f=0;f<d;f++){let h=a()*o,p=a()*o,x=a(),g=a(),m=a();hv(s,v=>{if(e==="rock"){let M=(4+x*22)*u;c(m>.45?.09+x*.4:-.08-x*.27),v.beginPath();for(let y=0;y<6;y++){let A=y*Math.PI/3+g,E=M*(.63+.3*Math.cos(A*2+g)+.25);v.lineTo(h+Math.cos(A)*E,p+Math.sin(A)*E*.72)}v.closePath(),v.fill(),v.globalAlpha=.3,v.strokeStyle="#232633",v.lineWidth=1.4,v.stroke()}else if(e==="soil"){let M=(1+x*x*12)*u,y=v.createRadialGradient(h,p,0,h,p,M);y.addColorStop(0,m>.58?"#b9906d9c":"#392219af"),y.addColorStop(1,"#39221900"),v.globalAlpha=.6,v.fillStyle=y,v.fillRect(h-M,p-M,M*2,M*2)}else if(e==="grass"||e==="wood"){let M=e==="grass",y=(M?5+x*25:7+x*110)*u;v.strokeStyle=M?m>.51?"#c4d981":"#233514":m>.5?"#e9b583":"#34180c",v.globalAlpha=.08+g*.28,v.lineWidth=(.75+x*1.7)*u,v.beginPath(),v.moveTo(h,p),M?v.quadraticCurveTo(h+y*(g-.5)*.55,p-y*.58,h+y*(g-.6),p-y):v.quadraticCurveTo(h+y*.5,p+10*(g-.5),h+y,p+4*(m-.5)),v.stroke()}else{c((m>.44?1:-1)*(.07+x*.29));let M=(e==="sand"?.6+x*1.6:1+x*5)*u;v.fillRect(h,p,M,M*(.7+g*.6))}})}}if(["tiles","brick","grid","woven","stripes","dots"].includes(e)){s.globalAlpha=.5,s.lineWidth=Math.max(1,3/i);let u=Math.ceil(o/l);if(e==="dots"){c(.36);for(let d=0;d<u;d++)for(let f=0;f<u;f++)hv(s,h=>{h.beginPath(),h.arc(f*l+l/2,d*l+l/2,I2(l*.11,2,13),0,Math.PI*2),h.fill()})}else if(e==="stripes"){s.fillStyle="#17242b",s.globalAlpha=.3;for(let d=0;d<o;d+=l/2)s.fillRect(d,0,Math.max(2,l/10),o)}else if(e==="woven"){for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#f4f3e8":"#14212a",s.globalAlpha=.14,s.fillRect(0,d,o,Math.max(1,l/13));for(let d=0;d<o;d+=l/5)s.fillStyle=d%(l*2)<l?"#14212a":"#f4f3e8",s.globalAlpha=.13,s.fillRect(d,0,Math.max(1,l/13),o)}else{s.strokeStyle="#12212a",s.globalAlpha=.48;for(let d=0;d<=o;d+=l)s.beginPath(),s.moveTo(0,d),s.lineTo(o,d),s.stroke();for(let d=0;d<o;d+=l)for(let f=0;f<=o;f+=l){let h=e==="brick"&&Math.floor(d/l)%2?l/2:0;e!=="brick"&&d>0||(s.beginPath(),s.moveTo(f+h,d),s.lineTo(f+h,d+l),s.stroke())}if(e==="grid"){s.strokeStyle="#f7ebc9",s.globalAlpha=.1;for(let d=l/2;d<o;d+=l)s.beginPath(),s.moveTo(d,0),s.lineTo(d,o),s.stroke()}}}s.globalAlpha=1}var yd=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],D2=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"],L2=["rock","soil","grass","sand","wood","tiles"];function fv(n,e){n=Math.max(0,Math.min(yd.length-1,n|0));let t=document.createElement("canvas");return t.width=t.height=512,dv(t,{pattern:L2[n],base:e??D2[n],seed:(n+45)*31337}),t}function pv({canvas:n,enabled:e,onLook:t,onAction:i,onMenu:r}){let s={x:0,z:0},o=null,a=null,l=!1,c=!1,u=h=>Math.min(1,Math.max(-1,h));function d(){o=a=null,l=c=!1,s.x=s.z=0}n.onpointerdown=h=>{if(e()){if(h.pointerType==="touch"){let p=n.getBoundingClientRect();if(h.clientX-p.left<p.width*.46){if(o)return;o={id:h.pointerId,x:h.clientX,y:h.clientY}}else{if(a)return;a={id:h.pointerId,x:h.clientX,y:h.clientY,total:0}}h.preventDefault()}else{if(h.button!==0&&h.button!==2)return;l=!0}n.setPointerCapture(h.pointerId)}},n.onpointermove=h=>{if(e())if(h.pointerId===o?.id)s.x=u((h.clientX-o.x)/48),s.z=u((h.clientY-o.y)/48);else if(h.pointerId===a?.id){let p=h.clientX-a.x,x=h.clientY-a.y;a.x=h.clientX,a.y=h.clientY,a.total+=Math.abs(p)+Math.abs(x),t(p,x,.007)}else l&&h.pointerType!=="touch"&&t(h.movementX,h.movementY,.004)};function f(h,p){h.pointerId===o?.id&&(s.x=s.z=0,o=null),h.pointerId===a?.id&&(p&&a.total<12&&e()&&i("interact"),a=null),h.pointerType!=="touch"&&(l=!1)}return n.onpointerup=h=>f(h,!0),n.onpointercancel=n.onlostpointercapture=h=>f(h,!1),n.oncontextmenu=h=>h.preventDefault(),document.querySelectorAll("[data-flat-action]").forEach(h=>{h.onclick=()=>{if(!e())return;let p=h.dataset?.flatAction;p==="jump"?c=!0:p==="menu"?r():p&&i(p)}}),{movement:s,clear:d,consumeJump(){let h=c;return c=!1,h}}}var U2=new Set(["KeyC","KeyE","KeyF","KeyG","KeyT","KeyX","Space"]);function mv(){let n=new Set,e=new Set;return{held:n,pressed:e,down(t,i=!1){U2.has(t)?i||e.add(t):n.add(t)},up(t){n.delete(t)},clear(){n.clear(),e.clear()}}}function gv(n,e,t){return t?Math.min(e,1)*(.46+n*.054):Math.min(e,1.75)*(.53+n*.047)}var xv=.065,F2=.08,vd=.035,dm=.003,_d=class{constructor(e,t,i){this.palmContact=i,this.hands=t.map(r=>(r.anchor=new e,r.locomotionTarget=new e,{hand:r,previousPalm:new e,previousTarget:new e,offset:new e,normal:new e,localNormal:new e,localAnchor:new e,inverseRotation:r.mesh.quaternion.clone(),released:null,releaseSurface:null,releaseTime:0,tracked:!1,eligible:!1})),this.history=Array.from({length:24},()=>({duration:0,distance:new e})),this.result={contacts:0,launched:!1,launchSpeed:0},this.castBoxes=[],this.supportBoxes=[null],this.flight=new e,this.from=new e,this.to=new e,this.hit=new e,this.hitNormal=new e,this.correction=new e,this.slideTarget=new e,this.downhill=new e,this.handMotion=new e,this.intent=new e,this.planned=new e,this.average=new e,this.reset()}reset(){this.historyIndex=0,this.clearHistory();for(let e of this.hands)e.hand.surface=null,e.released=e.releaseSurface=null,e.releaseTime=0,e.tracked=e.eligible=!1;this.dt=this.contacts=0}clearHistory(){for(let e of this.history)e.duration=0}sweep(e,t,i){let r=this.boxes;if(e.releaseTime>0&&r.includes(e.releaseSurface)){this.castBoxes.length=0;for(let s of r)s!==e.releaseSurface&&this.castBoxes.push(s);r=this.castBoxes}return this.palmContact(t,i,e.hand.mesh.quaternion,r,this.hit,this.hitNormal)}move({head:e,dt:t,inputDt:i=t,gravity:r,settings:s,boxes:o,velocity:a,movement:l,reach:c}){this.dt=t,this.inputDt=i,this.settings=s,this.boxes=o,this.contacts=0,this.released=!1,this.intent.set(0,0,0),l.set(0,0,0),this.flight.copy(a),this.flight.y-=r*t,this.flight.multiplyScalar(t);for(let u of this.hands){let{hand:d,normal:f,offset:h}=u,p=d.surface;if(u.released=null,d.surface=null,d.groundContact=!1,u.releaseTime=Math.max(0,u.releaseTime-t),u.eligible=d.valid&&(!d.held||d.hasSupport)&&s.movement!==!1,!d.valid)continue;let x=d.locomotionTarget.subVectors(d.target,e).clampLength(0,c).add(e);if(d.hasSupport?h.copy(d.supportOffset):h.copy(ur).applyQuaternion(d.mesh.quaternion),!u.eligible)continue;let g=p&&o.includes(p)&&!p.objectBody?.owner,m=g&&p.objectBody;m&&(u.previousPalm.copy(u.localAnchor).applyQuaternion(m.mesh.quaternion).add(m.mesh.position),f.copy(u.localNormal).applyQuaternion(m.mesh.quaternion)),g&&d.anchor.copy(u.previousPalm).sub(h),this.from.copy(x).add(h),u.tracked&&this.from.copy(u.previousPalm),this.to.copy(x).add(h),g||this.to.add(this.flight),this.to.y-=Math.min(dm,r*t*t);let v=this.sweep(u,this.from,this.to);if(g){let S=this.correction.subVectors(x,d.anchor),b=S.dot(f)<=vd&&d.anchor.distanceToSquared(e)<=(c+vd)**2&&S.lengthSq()<=Math.max(.12,c*.5)**2;b&&(!v||v===p&&this.hitNormal.dot(f)>.7)?(v=p,this.hit.copy(d.anchor).add(h),this.hitNormal.copy(f)):!b&&v===p&&S.dot(f)>vd&&(v=null),!v&&u.tracked&&(u.released=p,this.released=!0)}if(!v)continue;d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);let M=v.friction??.8,y=Math.min(1,Math.max(0,M*(.75+s.grip*.09))),A=Math.max(0,1-Math.abs(f.y)/.28),E=Math.min(.97,Math.max(0,1-y+A*.24+(s.slide-3)*.035)),L=this.correction.subVectors(d.anchor,x);if(L.addScaledVector(f,-L.dot(f)),this.slideTarget.copy(L).multiplyScalar(-E),g&&(this.downhill.set(0,-1,0).addScaledVector(f,f.y),this.slideTarget.addScaledVector(this.downhill,r*t*.11*E*Math.max(A,Math.max(0,1-2*y)))),this.slideTarget.lengthSq()>1e-8){if(this.from.copy(d.anchor).add(h).addScaledVector(f,dm),this.to.copy(this.from).add(this.slideTarget),this.sweep(u,this.from,this.to)&&this.to.copy(this.hit),this.from.copy(this.to),this.to.addScaledVector(f,-dm*2.5),this.supportBoxes[0]=v,this.palmContact(this.from,this.to,d.mesh.quaternion,this.supportBoxes,this.hit,this.hitNormal))d.anchor.copy(this.hit).sub(h),f.copy(this.hitNormal);else if(E>.5&&L.lengthSq()>vd**2)continue}L.subVectors(d.anchor,x),g&&L.dot(f)<0&&L.addScaledVector(f,-L.dot(f)),l.add(L);let U=v.objectBody;if(U){let S=u.inverseRotation.copy(U.mesh.quaternion).invert();u.localAnchor.copy(d.anchor).add(h).sub(U.mesh.position).applyQuaternion(S),u.localNormal.copy(f).applyQuaternion(S)}if(d.surface=v,d.groundContact=f.y>.55,this.contacts++,u.tracked){let S=this.handMotion.subVectors(u.previousTarget,x),b=S.dot(f);S.multiplyScalar(1-E).addScaledVector(f,Math.max(0,b)-b*(1-E)),this.intent.add(S)}}this.contacts?(l.multiplyScalar(1/this.contacts).clampLength(0,t*13),this.intent.multiplyScalar(1/this.contacts),a.set(0,0,0)):(l.copy(this.flight),a.y-=r*t),this.planned.copy(l)}finish(e,t){let{result:i,dt:r,contacts:s,history:o}=this;if(i.contacts=s,i.launched=!1,i.launchSpeed=0,r<=0)return i;let a=!1;for(let h of this.hands){let{hand:p,previousPalm:x,previousTarget:g,offset:m}=h;h.tracked=h.eligible,p.valid&&(g.copy(p.locomotionTarget).add(e),x.copy(g).add(m),p.surface&&(x.copy(p.anchor).add(m),a=!0))}if(!s&&!this.released)return this.clearHistory(),i;let l=o[this.historyIndex];l.duration=this.inputDt,l.distance.set(0,0,0);let c=this.intent.dot(e)>0&&this.planned.dot(e)>0&&s;if(c){let h=this.intent.dot(e)/e.length();l.distance.copy(e).clampLength(0,Math.min(h,this.planned.length()))}let u=xv;this.average.set(0,0,0);for(let h=0;h<o.length&&u>0;h++){let p=o[(this.historyIndex-h+o.length)%o.length];if(!p.duration)break;let x=Math.min(u,p.duration);this.average.addScaledVector(p.distance,x/p.duration),u-=x}if(this.historyIndex=(this.historyIndex+1)%o.length,this.average.multiplyScalar(1/xv),this.settings.movement===!1||!c&&(a||!this.released))return i;for(let h=0;h<2;h++)for(let{hand:p,normal:x,released:g}of this.hands)if(p.surface||g){let m=this.average.dot(x);m<0&&this.average.addScaledVector(x,-m)}let{jump:d,weight:f}=this.settings;if(this.average.lengthSq()<(1.05+.04*f)**2)return i;t.copy(this.average).multiplyScalar((.93+.15*d)/(.72+.056*f)),t.clampLength(0,8.5+.28*d);for(let h of this.hands){let p=h.hand.surface??h.released;p&&(h.releaseSurface=p,h.releaseTime=F2,h.hand.surface=null,h.previousPalm.copy(h.previousTarget).add(h.offset))}return this.clearHistory(),i.launched=!0,i.launchSpeed=t.length(),i}};function N2(n){return n.hapticStats??={attempts:0,accepted:0,failed:0,unsupported:0,last:"idle"}}function fm(n,e=.16,t=26){let i=N2(n),r=n.gamepad,s=Array.from(r?.hapticActuators??[]).find(l=>typeof l?.pulse=="function");if(!s&&typeof r?.vibrationActuator?.playEffect!="function")return i.unsupported++,i.last="unsupported",!1;i.attempts++,i.last="pending";let o=l=>{l===!1?(i.failed++,i.last="refused"):(i.accepted++,i.last="accepted")},a=()=>{i.failed++,i.last="error"};try{let l=s?s.pulse(e,t):r.vibrationActuator.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e});return Promise.resolve(l).then(o,a),!0}catch{return a(),!1}}function yv(n,e,t,i=.16,r=26){n.hapticCooldown=Math.max(0,(n.hapticCooldown??0)-Math.max(0,t));let s=!!(n.valid&&n.groundContact);if(!e){n.hapticGrounded=!1,n.hapticPending=!1;return}if(!s){n.hapticGrounded=!1,n.hapticPending=!1;return}n.hapticGrounded||(n.hapticPending=!0),n.hapticGrounded=!0,!(!n.hapticPending||n.hapticCooldown>0)&&(n.hapticPending=!1,fm(n,i,r)&&(n.hapticCooldown=.08))}function vv({scene:n,rig:e,camera:t,arena:i,objects:r,spectator:s}){let o=new _(0,1,0),a=new qe,l=0,c=new or,u=[],d=new Map,f=Lx(n,{onShot:(m,v)=>s.sendShot(m,v),impact(m,v,M,y){c.set(m,v),c.far=M;let A=c.intersectObjects(u,!1)[0];if(!A)return null;let E=d.get(A.object);return y&&E&&!E.owner&&!E.frozen&&E.velocity.addScaledVector(v,Math.min(4,2.6/E.mass)),A.distance}}),h={position:new _,quaternion:new qe,modelPosition:new _},p={position:h.modelPosition,quaternion:h.quaternion},x=null;function g({frame:m,space:v,inVR:M,enabled:y,remoteWorld:A,dt:E,yaw:L,drop:U,rightHand:S,flatFiring:b}){let R=null,z=!1;if(y)if(M){let O=[...m.session.inputSources].find(N=>N.handedness==="right"),Y=O&&m.getPose(O.targetRaySpace,v);if(Y){let{position:N,orientation:k}=Y.transform;R=h,R.position.set(N.x,N.y-U,N.z).applyAxisAngle(o,L).add(e.position),R.modelPosition.copy(S.valid?S.mesh.position:R.position),R.quaternion.set(k.x,k.y,k.z,k.w).premultiply(a.setFromAxisAngle(o,L)),z=!!O.gamepad?.buttons[0]?.pressed}}else R=h,t.getWorldPosition(R.position),t.getWorldQuaternion(R.quaternion),R.modelPosition.set(.16,-.17,-.43).applyQuaternion(R.quaternion).add(R.position),z=b;if(x=R?p:null,u.length=0,d.clear(),R||l){for(let O of i.boxes)O.mesh?.isMesh&&O.mesh.visible&&u.push(O.mesh);if(A)s.forEachReplica(O=>u.push(O));else for(let O of r)O.mesh.visible&&O.collidable&&!O.owner&&(u.push(O.mesh),d.set(O.mesh,O))}f.update({dt:E,aim:R,firing:z}),z?l=1.3:l=Math.max(0,l-E)}return{update:g,receiveShot({position:m,quaternion:v},M){f.replay(m,new qe().copy(v),M),l=1.3},reset(){f.reset(),l=0,x=null},get gun(){return x},get shotsFired(){return f.shotsFired}}}function _v(n,e){let t=!1,i=!1;return n.addEventListener("pointerdown",r=>{r.pointerType!=="touch"&&r.button===0&&(t=!0)}),n.addEventListener("lostpointercapture",()=>{t=!1}),addEventListener("pointerup",()=>{t=!1}),addEventListener("pointercancel",()=>{t=i=!1}),e.onpointerdown=r=>{r.preventDefault(),i=!0,e.setPointerCapture(r.pointerId)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>{i=!1},{get held(){return t||i},clear(){t=i=!1}}}function bv(n){return{stepHaptics:!0,stepHapticStrength:5,snapWithMenu:!0,grip:6,slide:3,gravity:5,jump:5,weight:5,size:5,arms:5,bounce:4,throw:5,preciseHitboxes:!0,movement:!0,collisions:!0,objects:!0,body:!0,hands:!0,stepAudio:!0,stepVolume:5,debugScene:!0,debugObjects:!0,debugMesh:!1,debugRange:6,debugBudget:5,debugPalm:!1,debugHitboxes:!1,debugInvisible:!1,debugForces:!1,debugBody:!1,debugSpeed:1,timeOfDay:1,viewFov:70,vrFov:100,shaderMode:1,shadowQuality:10,lightQuality:10,contrast:5,saturation:5,exposure:5,warmth:5,quality:n?2:7,auto:!0,resolution:7,texturePower:7,preset:2,lightmap:!0,post:!0,rayTrace:!1,focus:!0,focusStrength:5,focusSize:5,textures:!0,reflections:!0,mirrorQuality:2,shadows:!0,bloom:!0,blasterActive:!1,toolMode:1,toolActive:!1,mapEdit:!1,mapMode:1,mapShape:1,mapMaterial:1,mapSurface:1,mapTurn:1,mapTexture:1,modelGrab:!0,modelFrozen:!1,modelCollidable:!0,modelSupport:!1,terrainResolution:2,terrainAmplitude:2,terrainFrequency:3,terrainGrass:4,terrainShrub:1,terrainSeed:1,brushRadius:4,brushStrength:4}}var Ds=["Saisir","Figer","Supprimer","Dupliquer","Couleur","Mati\xE8re +","Mati\xE8re \u2212"],Yl=["Naturel","Cellulo","Affiche","R\xE9tro"],Zl={Fluide:{shadowQuality:2,lightQuality:2,post:!1,rayTrace:!1,quality:3,auto:!1,texturePower:6,resolution:5,shadows:!1,reflections:!1,bloom:!1,focus:!0,focusStrength:6,focusSize:4},\u00C9quilibr\u00E9:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!1,quality:7,auto:!0,texturePower:8,resolution:7,shadows:!0,reflections:!0,bloom:!0,focus:!0,focusStrength:5,focusSize:5},Vitrine:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:12,resolution:10,shadows:!0,reflections:!0,bloom:!0,focus:!1},Benchmark:{shadowQuality:10,lightQuality:10,post:!0,rayTrace:!0,quality:10,auto:!1,texturePower:10,resolution:7,shadows:!0,reflections:!0,bloom:!1,focus:!1}},B2={shaderMode:[1,Yl.length],viewFov:[50,105],exposure:[1,10],contrast:[1,10],saturation:[1,10],warmth:[1,10],shadowQuality:[1,10],lightQuality:[1,10],mirrorQuality:[1,3],quality:[1,10],texturePower:[1,12],preset:[1,Object.keys(Zl).length],auto:null,lightmap:null,textures:null,reflections:null,shadows:null,bloom:null},Mv=n=>"gorilla-lab-screen-render-v1-"+(n?"mobile":"pc");function Sv(n){let e={};for(let[t,i]of Object.entries(B2)){let r=n?.[t];(i?Number.isInteger(r)&&r>=i[0]&&r<=i[1]:typeof r=="boolean")&&(e[t]=r)}return e}function wv(n,e){try{return Sv(JSON.parse(n.getItem(Mv(e))))}catch{return{}}}function Tv(n,e,t){try{n.setItem(Mv(e),JSON.stringify(Sv(t)))}catch{}}var Av=new WeakMap;function pm(n,e){return n.onBeforeCompile=e,n.customProgramCacheKey=()=>e.name,Av.set(n,e),n}function jl(n){if(Array.isArray(n))return n.map(jl);let e=n.clone(),t=Av.get(n);return t?pm(e,t):e}function O2(n){let t=new ai(.225,28,18);t.computeBoundingSphere(),t.boundingSphere.radius=.225*1.16;let i=new kt(.225,0),r=new ul({color:"#d52538",roughness:.26,clearcoat:.85,clearcoatRoughness:.18});return pm(r,function(o){o.uniforms.uPropTime=n,o.vertexShader=`
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
    `)}),{id:"red-slime",name:"Gel\xE9e rouge",geo:t,collisionGeo:i,material:r,sphere:.225,mass:.82}}function z2(n){let e=new it(.37,.37,.37),t=new _t({color:16777215,roughness:.4});return pm(t,function(r){r.uniforms.uPropTime=n,r.vertexShader=`
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
    `)}),{id:"abyss-cube",name:"Cube du N\xE9ant",geo:e,material:t,mass:1.42}}function Ev(){let n={value:0};return{props:[O2(n),z2(n)],animate(e){n.value=e}}}var Cv=new _(0,1,0),Rv=new _(0,0,1),V2={left:new qe().setFromAxisAngle(Rv,Math.PI/2),right:new qe().setFromAxisAngle(Rv,-Math.PI/2)},k2=new qe,G2=new _;function Iv(n,e,t,i,r){let s=e.position,o=e.orientation;n.gripPosition.set(s.x,s.y-t,s.z).applyAxisAngle(Cv,i).add(r),n.controllerRotation.set(o.x,o.y,o.z,o.w).premultiply(k2.setFromAxisAngle(Cv,i)),n.mesh.quaternion.copy(n.controllerRotation).multiply(V2[n.side]),n.target.copy(n.gripPosition).sub(G2.copy(ur).applyQuaternion(n.mesh.quaternion))}function Pv(){let n,e,t=0,i=!1,r=0,s=0,o=[!1,!1],a=[0,0];async function l(){let f=globalThis.AudioContext??globalThis.webkitAudioContext;if(f)try{n??=new f,n.state==="suspended"&&await n.resume()}catch{}}function c(f){if(n?.state!=="running")return;if(!e){e=n.createBuffer(1,Math.ceil(n.sampleRate*.09),n.sampleRate);let m=e.getChannelData(0);for(let v=0;v<m.length;v++)m[v]=(Math.random()*2-1)*(1-v/m.length)}let h=n.currentTime,p=n.createBufferSource(),x=n.createBiquadFilter(),g=n.createGain();p.buffer=e,x.type="lowpass",x.frequency.value=570+Math.random()*340,g.gain.setValueAtTime(Ce.clamp(f,1,10)*.055,h),g.gain.exponentialRampToValueAtTime(.001,h+.085),p.connect(x).connect(g).connect(n.destination),p.start(h),s++}function u({dt:f,inVR:h,hands:p,grounded:x,travel:g,volume:m,enabled:v}){if(h){p.forEach((M,y)=>{a[y]=Math.max(0,a[y]-f);let A=M.valid&&M.groundContact;A&&!o[y]&&!a[y]&&v&&(c(m),a[y]=.11),o[y]=A});return}r=Math.max(0,r-f),t=x?t+g:0,x&&v&&r===0&&(t>=.64||!i&&g>.025)&&(c(m),t=0,r=.12),i=x}function d(){t=0,i=!1,r=0,o.fill(!1),a.fill(0)}return{unlock:l,play:c,update:u,reset:d,get count(){return s},get state(){return n?.state??"locked"}}}function Dv(n){let t=new Float32Array(3e5),i=new Float32Array(1e5*3),r=new et;r.setAttribute("position",new gt(t,3).setUsage(Ln)),r.setAttribute("color",new gt(i,3).setUsage(Ln));let s=new ps(r,new Pi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,n.add(s);let o=new Lr(new ai(1,12,8)).attributes.position,a=new Lr(new Mi(1).scale(...Lh)).attributes.position,l=new WeakMap,c={vertices:0,segments:0,truncated:!1,boxes:0,bodies:0},u=1e4,d=new _,f=new WeakMap,h=new _(1,1,1),p=new qe,x=new _,g=new _,m=new _,v=new _,M=new _,y=new _,A=new _,E=new _(0,1,0),L={grip:new Le("#61f6ff"),palm:new Le("#71ff87"),solid:new Le("#ffe060"),proxy:new Le("#ff76df"),movement:new Le("#fff0af"),normal:new Le("#ff994e"),velocity:new Le("#80aaff"),force:new Le("#ff5454"),rig:new Le("#cec4ff")},U=0;function S(N,k,Q){if(U+2>u){c.truncated=!0;return}N.toArray(t,U*3),Q.toArray(i,U++*3),k.toArray(t,U*3),Q.toArray(i,U++*3)}function b(N,k,Q,V,J){for(let re=0;re<N.count;re+=2){if(U+2>u){c.truncated=!0;break}x.fromBufferAttribute(N,re).multiply(V).applyQuaternion(Q).add(k),g.fromBufferAttribute(N,re+1).multiply(V).applyQuaternion(Q).add(k),S(x,g,J)}}function R(N,k,Q,V){if(N.sphereRadius){b(o,k,Q,v.setScalar(N.sphereRadius),V);return}let J=l.get(N);if(!J){let re=new Set,pe=[];for(let ye of N.faces)for(let[Te,Re]of[[ye.a,ye.b],[ye.b,ye.c],[ye.c,ye.a]]){let Pe=[Te.toArray().join(","),Re.toArray().join(",")].sort().join("|");re.has(Pe)||(re.add(Pe),pe.push(...Te.toArray(),...Re.toArray()))}J=new Oe(pe,3),l.set(N,J)}b(J,k,Q,h,V)}function z(N,k){let V=(N.xMax-N.xMin)/16,J=(N.zMax-N.zMin)/16;for(let re=0;re<=16;re++)for(let pe=0;pe<=16;pe++){if(U+2>u){c.truncated=!0;return}let ye=N.xMin+re*V,Te=N.zMin+pe*J;x.set(ye,N.height(ye,Te),Te),re<16&&S(x,g.set(ye+V,N.height(ye+V,Te),Te),k),pe<16&&S(x,g.set(ye,N.height(ye,Te+J),Te+J),k)}}function O(N,k,Q,V){if(k.lengthSq()<1e-8)return;M.copy(N).addScaledVector(k,Q),y.copy(k).normalize(),A.crossVectors(y,E),A.lengthSq()<1e-8?A.set(1,0,0):A.normalize();let J=Math.min(.09,N.distanceTo(M)*.3);v.copy(M).addScaledVector(y,-J),S(N,M,V),S(M,x.copy(v).addScaledVector(A,J*.5),V),S(M,g.copy(v).addScaledVector(A,-J*.5),V)}function Y({settings:N,boxes:k,bodies:Q,hands:V,locomotion:J,velocity:re,head:pe,body:ye,neck:Te,proxies:Re,gravity:Pe,appliedMove:ie,playerActive:ce,inVR:ge,viewQuaternion:Ie}){U=0,Object.assign(c,{vertices:0,segments:0,truncated:!1,boxes:0,bodies:0}),u=Math.min(1e5,(N.debugBudget??5)*2e3);let _e=(N.debugRange??6)*5,Xe=(Ge,T=0)=>!Ge||Ge.distanceToSquared(pe)<=(_e+T)**2;if(s.visible=N.debugPalm||N.debugHitboxes||N.debugInvisible||N.debugForces||N.debugBody||N.debugMesh,!s.visible){r.setDrawRange(0,0);return}if(N.debugHitboxes||N.debugInvisible||N.debugMesh){let Ge=u;if(N.debugScene!==!1&&k.length&&(u=Math.floor(Ge*.65/2)*2),N.debugObjects!==!1)for(let T of Q){if(U+2>u){c.truncated=!0;break}if(!(!T.mesh.visible||!Xe(T.mesh.position,T.shape.radius))&&(c.bodies++,N.debugHitboxes&&T.collidable!==!1&&T.blocksPlayer!==!1&&R(T.shape,T.mesh.position,T.mesh.quaternion,T.owner?L.proxy:L.solid),N.debugMesh&&T.mesh.geometry)){let F=T.mesh.geometry,X=F.attributes.position.version,B=f.get(F);B?.version!==X&&(B?.edges.dispose(),B={version:X,edges:new Lr(F)},f.set(F,B)),b(B.edges.attributes.position,T.mesh.position,T.mesh.quaternion,T.mesh.scale,L.grip)}}if(u=Ge,N.debugScene!==!1)for(let T of k){if(U+2>u){c.truncated=!0;break}let F=T.shape?.radius??T.half?.length()??Math.hypot(T.xMax-T.xMin||0,T.zMax-T.zMin||0);if(!Xe(T.position??T.mesh?.position,F))continue;c.boxes++;let X=T.mesh?.isObject3D&&T.mesh.visible;if(N.debugMesh&&X&&T.mesh.geometry){let B=T.mesh.geometry,H=B.attributes.position.version,I=f.get(B);I?.version!==H&&(I?.edges.dispose(),I={version:H,edges:new Lr(B)},f.set(B,I)),b(I.edges.attributes.position,T.mesh.position,T.mesh.quaternion,T.mesh.scale,L.grip)}(X?!N.debugHitboxes:!N.debugInvisible)||(T.shape?R(T.shape,T.position,T.quaternion,X?L.solid:L.proxy):T.heightfield&&z(T,X?L.solid:L.proxy))}}if(ce){if(N.debugBody){if(N.collisions)for(let{position:Ge,radius:T}of Re)b(o,Ge,p,v.setScalar(T),L.rig);S(pe,Te,L.rig),S(Te,ye,L.rig)}if(N.debugForces&&(d.set(0,-.22,-.5),Ie&&d.applyQuaternion(Ie),d.add(pe),O(d,re,.13,L.velocity),O(d,E,-Pe*.038,L.force),O(d,ie,5,L.movement),N.debugObjects!==!1)){for(let Ge of Q)if(!(!Ge.mesh.visible||!Ge.velocity||!Xe(Ge.mesh.position,Ge.radius))&&(O(Ge.mesh.position,Ge.velocity,.13,L.velocity),U+2>u)){c.truncated=!0;break}}if(ge&&(N.debugPalm||N.debugForces))for(let Ge of J.hands){let{hand:T,normal:F,offset:X}=Ge;if(T.valid){if(N.debugPalm){b(o,T.gripPosition,p,v.setScalar(.014),L.grip);for(let B=0;B<3;B++)y.set(0,0,0).setComponent(B,.075).applyQuaternion(T.controllerRotation),O(T.gripPosition,y,1,L.grip);M.copy(T.mesh.position).add(X),b(a,M,T.mesh.quaternion,h,L.palm),S(T.gripPosition,M,L.grip),T.hasSupport&&(M.copy(ur).applyQuaternion(T.mesh.quaternion).add(T.mesh.position),b(a,M,T.mesh.quaternion,h,L.grip))}N.debugForces&&T.surface&&O(T.anchor,F,.25,L.normal)}}}c.vertices=U,c.segments=U/2,r.setDrawRange(0,U);for(let Ge of["position","color"]){let T=r.attributes[Ge];T.clearUpdateRanges(),U&&T.addUpdateRange(0,U*3),T.needsUpdate=!!U}}return{update:Y,stats:c}}var bd={preset:0,sky:"preset",rotation:0,skyTint:"#ffffff",skyColor:"#a6d4ea",skyImage:null,fog:!0,fogColor:"#a6d4ea",fogNear:55,fogFar:135,azimuth:-131,elevation:50,sunColor:"#fff0d0",sunPower:3,ambientColor:"#daeaff",groundColor:"#88724c",ambientPower:2.25},H2=[bd,{...bd,preset:1,skyColor:"#ec986e",fogColor:"#ec986e",azimuth:-144,elevation:13,sunColor:"#ff9c51",sunPower:3.25,ambientColor:"#d8b6dc",groundColor:"#b37762",ambientPower:1.15},{...bd,preset:2,skyColor:"#0b1020",fogColor:"#0b1020",azimuth:-39,elevation:35,sunColor:"#879eff",sunPower:.35,ambientColor:"#708edc",groundColor:"#292e44",ambientPower:.35}];function mm(n){return{...H2[n]??bd}}var W2=12e5,ia=(n,e)=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n)?n:e,Xr=(n,e,t,i)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):i;function Lv(n){if(!n||typeof n!="object"||Array.isArray(n))return null;let e=Math.round(Xr(n.preset,0,2,0)),t=mm(e),i=typeof n.skyImage=="string"&&n.skyImage.length<=W2&&/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(n.skyImage)?n.skyImage:null,r=Xr(n.fogNear,0,4095,t.fogNear);return{preset:e,sky:n.sky==="color"||n.sky==="image"&&i?n.sky:"preset",rotation:Xr(n.rotation,-360,360,0),skyTint:ia(n.skyTint,"#ffffff"),skyColor:ia(n.skyColor,t.skyColor),skyImage:i,fog:n.fog!==!1,fogColor:ia(n.fogColor,t.fogColor),fogNear:r,fogFar:Math.max(r+1,Xr(n.fogFar,1,4096,t.fogFar)),azimuth:Xr(n.azimuth,-360,360,t.azimuth),elevation:Xr(n.elevation,-89,89,t.elevation),sunColor:ia(n.sunColor,t.sunColor),sunPower:Xr(n.sunPower,0,12,t.sunPower),ambientColor:ia(n.ambientColor,t.ambientColor),groundColor:ia(n.groundColor,t.groundColor),ambientPower:Xr(n.ambientPower,0,12,t.ambientPower)}}var gm=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],Nv=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],xm={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Md=8e6,Jl=512,Vi=1024,Uv=512,Kt=(n,e,t,i)=>typeof n=="number"&&Number.isFinite(n)?Math.max(e,Math.min(t,n)):i,Fv=(n,e,t)=>typeof n=="string"&&n.trim()?n.trim().slice(0,e):t;function Ql(n){if(typeof n=="string"){if(n.length>Md)throw Error("Cette map d\xE9passe 3 Mo.");n=JSON.parse(n)}if(n?.format!=="gorilla-lab-map"||n.version!==1||!Array.isArray(n.pieces)||n.pieces.length<1||n.pieces.length>Jl)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Jl+" pi\xE8ces.");let e=n.spawn??{},t=Lv(n.environment),i=n.pieces.filter(r=>!Is(r?.sceneryId)&&!hd(r?.model));if(!i.length)throw Error("Cette carte ne contient plus de pi\xE8ces apr\xE8s retrait des anciens \xE9l\xE9ments de l\u2019ar\xE8ne.");return{format:"gorilla-lab-map",version:1,...n.arenaBase===!0?{arenaBase:!0}:{},...n.assetLayer===!0?{assetLayer:!0}:{},...n.editableArena===!0?{editableArena:!0}:{},name:Fv(n.name,56,"Ma map"),worldSize:Kt(n.worldSize,24,2048,240),...t?{environment:t}:{},spawn:{x:Kt(e.x,-Vi,Vi,0),y:Kt(e.y,-256,256,.06),z:Kt(e.z,-Vi,Vi,3),yaw:Kt(e.yaw,-360,360,0)},pieces:i.map((r,s)=>{if(!r||typeof r!="object")throw Error("Pi\xE8ce invalide : "+(s+1));let o=Kt(r.w,.05,Uv,3),a=Kt(r.d,.05,Uv,3),l=r.terrain&&typeof r.terrain=="object"?ta(r.terrain,o*a):null,c=r.model?Ps({version:1,models:[r.model]}).models[0]:null;if(c&&!c.parts.length)throw Error("Le mod\xE8le doit contenir au moins une forme.");return{name:Fv(r.name,36,"Pi\xE8ce "+(s+1)),...typeof r.sceneryId=="string"&&/^[a-z0-9-]{1,48}$/i.test(r.sceneryId)?{sceneryId:r.sceneryId}:{},x:Kt(r.x,-Vi,Vi,0),y:Kt(r.y,-256,256,0),z:Kt(r.z,-Vi,Vi,0),w:o,h:Kt(r.h,.05,256,.5),d:a,pitch:l?0:Kt(r.pitch,-180,180,0),yaw:l?Xl(Kt(r.yaw,-360,360,0)):Kt(r.yaw,-360,360,0),roll:l?0:Kt(r.roll,-180,180,0),...l?{terrain:l}:{},...c?{model:c}:{},primitive:["sphere","cylinder","cone","torus","capsule","ramp"].includes(r.primitive)?r.primitive:"box",uvScale:Kt(r.uvScale,.05,100,1),uvOffsetX:Kt(r.uvOffsetX,-100,100,0),uvOffsetY:Kt(r.uvOffsetY,-100,100,0),uvRotation:Kt(r.uvRotation,-360,360,0),material:Math.round(Kt(r.material,0,16,0)),color:typeof r.color=="string"&&/^#[a-f0-9]{6}$/i.test(r.color)?r.color:"#ffffff",grip:Kt(r.grip,0,1.5,.8),gravity:Kt(r.gravity,.05,2.5,1),bounce:Kt(r.bounce,0,1.65,1),solid:r.solid!==!1,texture:typeof r.texture=="string"&&r.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(r.texture)?r.texture:null}})}}function Bv(n){return Ql({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...jo,yaw:0},pieces:n.filter(e=>e.half&&e.mesh?.isObject3D).map(e=>{let t=new rn().setFromQuaternion(e.quaternion??e.mesh.quaternion,"YXZ");return{name:e.name,x:e.position.x,y:e.position.y,z:e.position.z,w:e.half.x*2,h:e.half.y*2,d:e.half.z*2,pitch:t.x*180/Math.PI,yaw:t.y*180/Math.PI,roll:t.z*180/Math.PI,material:e.type,grip:e.friction,gravity:e.gravity,bounce:e.bounce}})})}function Kl(n={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,roll:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...n}}function Ov(n,e,t,i=.25){if(!n||!e||!Number.isFinite(i)||i<=0)return null;let r=e,s=new rn(-t.pitch*Math.PI/180,-t.yaw*Math.PI/180,-(t.roll??0)*Math.PI/180,"ZXY"),o=new _(r.x,r.y,r.z).applyEuler(s),a=(Math.abs(o.x)*t.w+Math.abs(o.y)*t.h+Math.abs(o.z)*t.d)*.5,l=h=>Math.round(h/i)*i,c=l(n.x+r.x*a),u=l(n.y+r.y*a),d=l(n.z+r.z*a),f=a-(c-n.x)*r.x-(u-n.y)*r.y-(d-n.z)*r.z;return c+=r.x*f,u+=r.y*f,d+=r.z*f,![c,u,d].every(Number.isFinite)||Math.abs(c)>Vi||Math.abs(d)>Vi||u<-256||u>256?null:{...t,x:c,y:u,z:d}}var $l="gorilla-lab-custom-map-v1";function zv(n){let e=new Blob([JSON.stringify(Ql(n),null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=n.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",i.click(),setTimeout(()=>URL.revokeObjectURL(t),1200)}var q2=new Set(["lab-hill","chrome-sphere","lab-mirror"]);function ym(n,e,t,i){return n?n.arenaBase?!e||!t.has(e)&&!i.has(e)&&!(n.editableArena&&q2.has(e)):!1:!0}function Sd(n,e,t){let i=new it(n,e,t),{uv:r,normal:s}=i.attributes;for(let o=0;o<r.count;o++){let a=Math.abs(s.getX(o))>.5,l=Math.abs(s.getY(o))>.5,c=a?t:n,u=l?t:e;r.setXY(o,r.getX(o)*c/2.6,r.getY(o)*u/2.6)}return i}function Vv(n,e){let t=n.attributes.uv;if(!t)return n;let i=1/(e.uvScale??1),r=(e.uvRotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=e.uvOffsetX??0,l=e.uvOffsetY??0;for(let c=0;c<t.count;c++){let u=t.getX(c)*i,d=t.getY(c)*i;t.setXY(c,u*s-d*o+a,u*o+d*s+l)}return t.needsUpdate=!0,n}function kv(n){switch(n){case"sphere":return new ai(.5,24,16);case"cylinder":return new sn(.5,.5,1,24);case"cone":return new rr(.5,1,24);case"torus":return new Si(.34,.14,12,32);case"capsule":return new Dr(.32,.36,8,16);default:return new it(1,1,1)}}function vm(n=1,e=1,t=1){let i=[[-n/2,-e/2,-t/2],[n/2,-e/2,-t/2],[-n/2,-e/2,t/2],[n/2,-e/2,t/2],[-n/2,e/2,-t/2],[n/2,e/2,-t/2]].map(a=>new _(...a)),r=[],s=[];for(let a of[[0,1,3,2],[0,4,5,1],[2,3,5,4],[0,2,4],[1,5,3]]){let l=a.map(f=>i[f]),c=l[0],u=l[1].clone().sub(c).normalize(),d=l.at(-1).clone().sub(c);d.addScaledVector(u,-d.dot(u)).normalize();for(let f=1;f<l.length-1;f++)for(let h of[c,l[f],l[f+1]]){r.push(...h);let p=h.clone().sub(c);s.push(p.dot(u)/2.6,p.dot(d)/2.6)}}let o=new et;return o.setAttribute("position",new Oe(r,3)),o.setAttribute("uv",new Oe(s,2)),o.computeVertexNormals(),o}function Gv({scene:n,arena:e,boot:t,onReset:i,onVisual:r,getLevel:s,defaultObjects:o}){let a=e.boxes.slice(),l=new Set(a.filter(I=>I.half&&I.mesh?.isObject3D).map(I=>I.mesh)),c=new vt;n.add(c);let u=[],d=[],f=[],h=[],p=new Set,x=new li,g=new Map,m=0,v=null,M="",y=-1,A=-1,E="",L="",U=new it(1,1,1),S=vm(),b=new He(U,new Rt({color:"#8be4b9",wireframe:!0,transparent:!0,opacity:.8,depthWrite:!1}));b.visible=!1,n.add(b);let R=new or,z=new _,O=new _,Y=document.querySelector("#map-note");function N(I){E=I,Y.textContent=I}function k(){f.length>=20&&f.shift(),f.push(JSON.stringify(v))}function Q(I,q){let j=g.get(I);if(!j){j={materials:new Set,texture:null,failed:!1},g.set(I,j);let se=C=>{if(!(g.get(I)!==j||j.failed)){j.failed=!0;for(let w of j.materials)w.map=null,w.needsUpdate=!0;j.texture?.dispose(),C&&N(C)}},fe=x.load(I,C=>{(C.image.width>2048||C.image.height>2048)&&se("Une texture a \xE9t\xE9 ignor\xE9e : maximum 2048 px.")},void 0,()=>se());j.texture=fe,fe.colorSpace=ht,fe.wrapS=fe.wrapT=Rn}return j.materials.add(q),q.map=j.failed?null:j.texture,j}function V(){for(let[I,q]of g)q.materials.size||(g.delete(I),q.failed||q.texture.dispose())}function J(I){let q=e.mapMaterial(I.material,s());if(!I.texture&&I.color==="#ffffff")return{material:q,custom:!1};let j=q.clone();return j.onBeforeCompile=q.onBeforeCompile,j.customProgramCacheKey=q.customProgramCacheKey,j.color.multiply(new Le(I.color)),{material:j,custom:!0,ownTexture:I.texture?Q(I.texture,j):null}}function re(I){c.remove(I.mesh),I.mesh.geometry.dispose(),I.vegetation&&uv(I.vegetation),I.custom&&(I.ownTexture?.materials.delete(I.mesh.material),I.model?Ko(I.mesh.material):I.mesh.material.dispose())}function pe(I,q){if(I.model){let oe=new _(I.w,I.h,I.d),we=$o(I.model,oe);we.scale(I.w,I.h,I.d);let ve=qr(I.model),Ae=new He(we,ve);Ae.position.set(I.x,I.y,I.z),Ae.rotation.set(Ce.degToRad(I.pitch),Ce.degToRad(I.yaw),Ce.degToRad(I.roll??0),"YXZ"),Ae.castShadow=Ae.receiveShadow=!0,Ae.userData.mapIndex=q,I.model.kind==="prop"&&(Ae.visible=!1),c.add(Ae);let Fe=Yy(I.model,oe);if(Fe){let tt=[];for(let D of Fe){let W=D.size.clone().multiplyScalar(.5),le=D.center.clone().applyQuaternion(Ae.quaternion).add(Ae.position),me=Ae.quaternion.clone();D.mode==="trigger"?h.push({name:D.name,model:I.name,position:le,inverse:me.invert(),bounds:new nn(W.clone().negate(),W)}):tt.push({position:le,quaternion:me,half:W,min:W.clone().negate(),shape:ui(W),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material})}return{mesh:Ae,colliders:tt,custom:!0,model:!0}}let de=ql(I.model,oe);de.computeBoundingBox();let be=de.boundingBox,Ye=new _(Math.max(Math.abs(be.min.x),Math.abs(be.max.x)),Math.max(Math.abs(be.min.y),Math.abs(be.max.y)),Math.max(Math.abs(be.min.z),Math.abs(be.max.z))),Ve=Ai(de);de.dispose();let De={mesh:Ae,position:Ae.position,quaternion:Ae.quaternion,half:Ye,min:Ye.clone().negate(),shape:Ve,radius:Ve.radius,friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};return{mesh:Ae,collider:De,custom:!0,model:!0}}let{material:j,custom:se,ownTexture:fe}=J(I),C=I.terrain?sv(I):I.primitive==="ramp"?vm(I.w,I.h,I.d):I.primitive&&I.primitive!=="box"?kv(I.primitive).scale(I.w,I.h,I.d):Sd(I.w,I.h,I.d),w=new He(Vv(C,I),j);w.position.set(I.x,I.y,I.z),w.rotation.set(Ce.degToRad(I.pitch),Ce.degToRad(I.yaw),Ce.degToRad(I.roll??0),"YXZ"),w.castShadow=w.receiveShadow=!0,w.userData.mapIndex=q,I.sceneryId==="lab-mirror"&&(w.userData.mirrorSize={w:I.w,h:I.h,d:I.d}),c.add(w);let Z=new _(I.w/2,I.h/2,I.d/2),ee={mesh:w,position:w.position,quaternion:w.quaternion,half:Z,min:Z.clone().negate(),shape:I.primitive==="ramp"?Ai(C):ui(Z),friction:I.grip,gravity:I.gravity,bounce:I.bounce,zone:!0,type:I.material};if(!I.terrain)return{mesh:w,collider:ee,custom:se,ownTexture:fe};let he=lv(I);return he&&w.add(he),{mesh:w,collider:av(I,w),custom:se,ownTexture:fe,vegetation:he}}function ye(){for(let I of u){let q=v?.pieces[I.mesh.userData.mapIndex];if(!q||I.ownTexture||I.model)continue;let j=e.mapMaterial(q.material,s());I.custom?I.mesh.material.map!==j.map&&(I.mesh.material.map=j.map,I.mesh.material.needsUpdate=!0):I.mesh.material=j}}function Te(){for(let fe of u)re(fe);u.length=0,d.length=0,h.length=0,p.clear();let I=v?.pieces??[];M=v?"custom-"+As(JSON.stringify(v)):"";let q=new Set(I.map(fe=>fe.model?.assetId).filter(Boolean)),j=new Set(I.map(fe=>fe.sceneryId).filter(Boolean));o.forEach(fe=>{let C=fe.userData?.editorAssetId;fe.visible=!v||!l.has(fe)&&ym(v,C,q,j)});let se=[];for(let[fe,C]of I.entries()){let w=pe(C,fe);u.push(w);for(let Z of cv(C,w.vegetation))se.push({...Z,min:Z.half.clone().negate(),shape:ui(Z.half),friction:C.grip,gravity:C.gravity,bounce:C.bounce,zone:!1,type:C.material})}for(let fe of u)fe.mesh.userData.mirrorSize&&d.push(fe);if(V(),v){let fe=a.filter(w=>!l.has(w.mesh)&&ym(v,w.editorAssetId,q,j)),C=u.filter((w,Z)=>I[Z].solid&&I[Z].model?.kind!=="prop"&&I[Z].model?.properties?.collidable!==!1).flatMap(w=>w.colliders??[w.collider]);e.boxes.splice(0,e.boxes.length,...fe,...C,...se)}else e.boxes.splice(0,e.boxes.length,...a);if(c.updateMatrixWorld(!0),e.setEnvironment(v?.environment??null),e.bakeLightmap(),r(),v)try{localStorage.setItem($l,JSON.stringify(v))}catch{}else try{localStorage.removeItem($l)}catch{}}function Re(I){let q=Ql(I);m++,f.length=0,v=q,y=A=-1,t.set(v.spawn.x,v.spawn.y,v.spawn.z),Te(),i(v.spawn.yaw),N("Map : "+v.name+" \xB7 "+v.pieces.length+" pi\xE8ces")}function Pe(){m++,v=null,f.length=0,y=A=-1,t.set(0,0,3),Te(),i(0),N("Ar\xE8ne int\xE9gr\xE9e")}function ie(){Re({format:"gorilla-lab-map",version:1,name:"Atelier VR",spawn:{x:0,y:.04,z:3},pieces:[Kl({name:"Sol",x:0,y:-.25,z:-3,w:24,h:.5,d:24,material:0})]})}function ce(){if(!f.length)return N("Rien \xE0 annuler.");v=Ql(f.pop()),y=A=-1,t.set(v.spawn.x,v.spawn.y,v.spawn.z),Te(),N("Derni\xE8re modification annul\xE9e.")}function ge(){v?zv(v):N("Cr\xE9e ou importe une map avant de l\u2019exporter.")}function Ie(I,q,j,se){v&&(k(),v.spawn={x:I,y:q,z:j,yaw:Ce.radToDeg(se)},t.set(I,q,j),Te(),N("Point de d\xE9part m\xE9moris\xE9."))}function _e(I,q,j,{mode:se,piece:fe,head:C,feet:w}){R.set(I,q),R.far=12;let Z=u.map(de=>de.mesh);se===1&&v?.arenaBase&&!v.editableArena&&Z.push(...a.filter(de=>de.heightfield&&!v.pieces.some(be=>be.sceneryId===de.editorAssetId)).map(de=>de.mesh));let ee=R.intersectObjects(Z,!1),he=se>=5?ee.find(de=>v?.pieces[de.object.userData.mapIndex]?.terrain):ee[0];if(b.visible=!1,!v)return;if(se>=5){let de=he?.object.userData.mapIndex,be=v.pieces[de];if(!be?.terrain||!j)return;if(k(),se===9){let Ye=fe.terrain?.detail??be.terrain.detail,Ve=nv(be.terrain,Ye);be.terrain=ta({...Ve,...fe.terrain,heights:Ve.heights})}else{let Ye={mode:["raise","lower","smooth","flatten"][se-5],radius:fe.brushRadius,strength:fe.brushStrength,target:be.y};rv(be,he.point.x,he.point.z,Ye)}Te(),N("Relief modifi\xE9.");return}if(se===2||se===3||se===4){if(!he)return;let de=he.object.userData.mapIndex,be=v.pieces[de];if(j&&se===2&&(y=de,A=de,N("Pi\xE8ce saisie. Mode Poser pour la d\xE9placer.")),j&&se===3){if(v.pieces.length===1)return N("Garde au moins une pi\xE8ce dans la map.");k(),v.pieces.splice(de,1),y=A=-1,Te(),N("Pi\xE8ce supprim\xE9e.")}j&&se===4&&(k(),Object.assign(v.pieces[de],{material:fe.material,grip:fe.grip,gravity:fe.gravity,bounce:fe.bounce,solid:fe.solid,texture:fe.texture}),Te(),N("Surface modifi\xE9e.")),he&&(b.geometry=be.primitive==="ramp"?S:U,b.position.copy(he.object.position),b.rotation.copy(he.object.rotation),b.scale.set(be.w,be.h,be.d).multiplyScalar(1.006),b.visible=!0,b.material.color.set(se===3?"#ff8271":"#ffe2a2"));return}if(!he)return;let oe=A>=0?v.pieces[A]:fe;if(he.object.userData.mapIndex===A)return;z.copy(he.face.normal).transformDirection(he.object.matrixWorld);let we=oe.terrain?{...oe,x:Math.round(he.point.x*2)/2,y:he.point.y,z:Math.round(he.point.z*2)/2,pitch:0,yaw:oe.yaw??0}:Ov(he.point,z,oe);if(!we)return;b.geometry=we.primitive==="ramp"?S:U,b.position.set(we.x,we.y,we.z),b.rotation.set(Ce.degToRad(we.pitch),Ce.degToRad(we.yaw),Ce.degToRad(we.roll??0),"YXZ"),b.scale.set(we.w,we.h,we.d),b.updateMatrixWorld(!0),b.visible=!0;let ve=new nn().setFromObject(b),Ae=new nn(new _(C.x-.26,w+.01,C.z-.26),new _(C.x+.26,C.y+.19,C.z+.26)),Fe=we.solid&&ve.intersectsBox(Ae);if(b.material.color.set(Fe?"#fd7763":"#8be4b9"),j){if(Fe)return N("D\xE9place-toi : la pi\xE8ce toucherait ton corps.");if(A<0&&v.pieces.length>=Jl)return N("Limite de "+Jl+" pi\xE8ces atteinte.");k(),A>=0?(v.pieces[A]=we,A=-1):v.pieces.push(we),Te(),N("Pi\xE8ce pos\xE9e \xB7 "+v.pieces.length+" pi\xE8ces")}}let Xe=document.querySelector("#map-file"),Ge=document.querySelector("#map-url");Xe.onchange=async()=>{let I=Xe.files[0];if(!I)return;let q=++m;Xe.value="";try{if(I.size>Md)throw Error("Map trop lourde.");let j=await I.text();q===m&&Re(j)}catch(j){q===m&&N(j.message)}};async function T(I){let q=++m;try{let j=new URL(I,location.href);if(!["http:","https:"].includes(j.protocol))throw Error("Il faut une URL HTTP ou HTTPS.");let se=await fetch(j,{credentials:"omit"});if(q!==m)return;if(!se.ok)throw Error("URL de map inaccessible ("+se.status+").");if(Number(se.headers.get("content-length"))>Md)throw Error("Map trop lourde.");let C=await se.text();q===m&&Re(C)}catch(j){q===m&&N(j.message)}}let F=new ir,X=new _,B=new _;function H(I){if(!h.length)return[];let q=[],j=new Set;for(let se of h){F.origin.copy(I).sub(se.position).applyQuaternion(se.inverse),F.direction.set(0,-1,0).applyQuaternion(se.inverse),X.copy(F.origin).addScaledVector(F.direction,1.45);let fe=F.intersectBox(se.bounds,B);se.bounds.containsPoint(F.origin)||se.bounds.containsPoint(X)||fe&&B.distanceToSquared(F.origin)<=1.45**2?(j.add(se),p.has(se)||q.push({phase:"enter",part:se.name,model:se.model})):p.has(se)&&q.push({phase:"exit",part:se.name,model:se.model})}return p=j,q}return document.querySelector("#map-load-url").onclick=()=>T(Ge.value),document.querySelector("#map-export").onclick=ge,document.querySelector("#map-reset").onclick=Pe,{checkTriggers:H,placedModels:()=>v?.pieces.filter(I=>I.model?.kind==="prop")??[],modelPieces:()=>v?.pieces.filter(I=>!I.terrain&&I.name!=="Sol")??[],refreshMaterials:ye,load:Re,loadURL:T,reset:Pe,blank:ie,undo:ce,save:ge,edit:_e,recenter:Ie,inform:N,mirrors:()=>d,get usesBuiltInMirror(){return!v||v.arenaBase&&!v.editableArena&&!v.pieces.some(I=>I.sceneryId==="lab-mirror")},clearGhost(){b.visible=!1},get active(){return!!v},get builtIn(){return!v||v.arenaBase===!0},get assetLayer(){return v?.assetLayer===!0},hasAsset(I){return!!v?.pieces.some(q=>q.model?.assetId===I)},getAssetPiece(I){return v?.pieces.find(q=>q.model?.assetId===I)??null},get status(){return E},get yaw(){return v?.spawn.yaw??0},get worldSize(){return v?.worldSize??0},get fogDistance(){return v?.environment?.fog?v.environment.fogFar:0},get nodes(){return v?.pieces.length??0},get name(){return v?.name??null},get signature(){return M}}}var _m=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;function Hv(){let n=new He(new cn(2,2),new xn({uniforms:{visibleField:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv;"+_m+"void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}"}));return n.frustumCulled=!1,n.renderOrder=1/0,n.visible=!1,n}function Wv(n){let e=new fs,t=new tn;t.matrixAutoUpdate=!1;let i={source:{value:null},pixel:{value:new xe(1,1)},bloom:{value:0},exposure:{value:1},visibleField:{value:1}},r=new xn({uniforms:i,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 vUv; uniform sampler2D source; uniform vec2 pixel; uniform float bloom,exposure;"+_m+"vec3 hot(vec2 p){vec3 c=texture2D(source,clamp(p,0.,1.)).rgb; return c*smoothstep(.85,1.42,max(max(c.r,c.g),c.b));}vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }void main(){vec3 c=texture2D(source,vUv).rgb;if(bloom>.001){vec2 d=pixel*3.;vec3 g=hot(vUv+vec2(d.x,0.))+hot(vUv-vec2(d.x,0.))+hot(vUv+vec2(0.,d.y))+hot(vUv-vec2(0.,d.y));g+=.65*(hot(vUv+d*1.7)+hot(vUv-d*1.7)+hot(vUv+vec2(d.x,-d.y)*1.7)+hot(vUv+vec2(-d.x,d.y)*1.7)); c+=g*bloom/6.6;}c=aces(c*exposure);gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2))*(1.-vrFovShade(vUv)),1.);}"}),s=new He(new cn(2,2),r);s.frustumCulled=!1,e.add(s);let o=n.extensions.has("EXT_color_buffer_float"),a=[],l=[];s.onBeforeRender=(u,d,f)=>{let h=Math.max(0,l.indexOf(f)),p=a[h]??a[0];i.source.value=p.texture,i.pixel.value.set(1/p.width,1/p.height),r.uniformsNeedUpdate=!0};function c(u,d,{bloom:f,visibleField:h}){if(n.xr.updateCamera(d),l=n.xr.getCamera().cameras,l.length===0||l.some(v=>!v.viewport?.z||!v.viewport?.w))return!1;i.bloom.value=f?.18:0,i.visibleField.value=h,i.exposure.value=n.toneMappingExposure;let p=n.getRenderTarget(),x=n.xr.enabled,g=n.shadowMap.autoUpdate,m=n.info.autoReset;n.info.reset(),n.info.autoReset=!1;try{n.xr.enabled=!1;for(let v=0;v<l.length;v++){let M=l[v],y=Math.max(32,Math.round(M.viewport.z)),A=Math.max(32,Math.round(M.viewport.w)),E=a[v];E?(E.width!==y||E.height!==A)&&E.setSize(y,A):E=a[v]=new zn(y,A,{type:o?Ui:Jn,minFilter:gn,magFilter:gn,depthBuffer:!0,stencilBuffer:!1}),t.matrix.copy(M.matrixWorld),t.matrixWorld.copy(M.matrixWorld),t.matrixWorldInverse.copy(M.matrixWorldInverse),t.projectionMatrix.copy(M.projectionMatrix),t.projectionMatrixInverse.copy(M.projectionMatrixInverse),t.layers.mask=M.layers.mask,n.shadowMap.autoUpdate=v===0&&g,n.setRenderTarget(E),n.render(u,t)}}finally{n.shadowMap.autoUpdate=g,n.xr.enabled=x,n.setRenderTarget(p),n.info.autoReset=m}n.info.autoReset=!1;try{n.render(e,d)}finally{n.info.autoReset=m}return!0}return n.xr.addEventListener("sessionend",()=>{for(let u of a)u.dispose();a.length=0,l=[]}),{render:c}}function qv(n){let e={value:0},t={value:Array.from({length:7},()=>new ft(0,0,0,0))},i=n.material;return i.onBeforeCompile=r=>{r.uniforms.uLabTrace=e,r.uniforms.uLabProbeCenter={value:n.position},r.uniforms.uLabPrimitives=t,r.vertexShader=`varying vec3 vRayWorld;
`+r.vertexShader,r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRayWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),r.fragmentShader=`uniform float uLabTrace; uniform vec3 uLabProbeCenter; uniform vec4 uLabPrimitives[7]; varying vec3 vRayWorld;
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <opaque_fragment>",["if(uLabTrace>.5){","  vec3 origin=vRayWorld;","  vec3 n=normalize(origin-uLabProbeCenter);","  vec3 r=reflect(normalize(origin-cameraPosition),n);","  origin+=n*.01;","  vec3 traced=mix(vec3(.84,.89,.89),vec3(.19,.49,.83),clamp(r.y*1.3+.18,0.,1.));","  float nearest=80.;","  if(r.y<-.008){ float t=-origin.y/r.y; if(t>0.){","    nearest=t; vec2 p=(origin+t*r).xz; float checker=mod(floor(p.x)+floor(p.y),2.);","    traced=mix(vec3(.16,.20,.25),vec3(.53,.59,.60),checker);","  }}","  for(int i=0;i<7;i++){ vec4 item=uLabPrimitives[i]; if(item.w>.001){","    vec3 d=origin-item.xyz; float b=dot(d,r); float h=b*b-dot(d,d)+item.w*item.w;","    if(h>0.){ float t=-b-sqrt(h); if(t>.001&&t<nearest){","      nearest=t; vec3 hitNormal=normalize(origin+r*t-item.xyz); float lit=.25+.75*max(0.,dot(hitNormal,normalize(vec3(-.6,.85,.44))));","      traced=lit*(.56+.40*cos(vec3(0.,2.1,4.2)+float(i)*1.7));","    }}","  }}","  outgoingLight=mix(outgoingLight,traced,.82);","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"gorilla-lab-ray-probe-v2",function(s,o){if(e.value=s?1:0,!!s)for(let a=0;a<t.value.length;a++){let l=o[a],c=t.value[a];l?.mesh.visible?c.set(l.mesh.position.x,l.mesh.position.y,l.mesh.position.z,l.shape.sphereRadius||l.radius*.83):c.set(0,0,0,0)}}}function Xv(n,e,t){function i(c,u,d=.85){let f=c.getWorldPosition(new _),h=c.getWorldQuaternion(new qe);e.push({half:u,min:u.clone().negate(),position:f,quaternion:h,mesh:{position:f,quaternion:h},shape:ui(u),friction:d,gravity:1})}let r=[],s=[],o=new yn({color:"#485d5d",flatShading:!0});function a([c,u],d,f){let h=new He(new it(.095,.68,.11),o);h.position.set(c,.34,u+.46),h.castShadow=h.receiveShadow=!0,n.add(h),i(h,new _(.0475,.34,.055));let p=new vt;p.position.set(c,.85,u+.4),p.rotation.x=-.35,n.add(p);let x=new He(new it(.64,.36,.055),new yn({color:"#182831"}));p.add(x);let g=document.createElement("canvas");g.width=512,g.height=96;let m=g.getContext("2d"),v=new oi(g);v.colorSpace=ht;let M=new He(new cn(.61,.095),new Rt({map:v}));M.position.set(0,.116,.03),p.add(M);let y=.592/f.length,A=f.map(([L,U],S)=>{let b=new He(new it(y-.012,.155,.04),new yn({color:"#478086"}));b.position.set(-.296+y*(S+.5),-.045,.046),p.add(b),r.push(b),b.userData.touchWidth=y-.012;let R=document.createElement("canvas");R.width=208,R.height=172;let z=new oi(R);z.colorSpace=ht;let O=new He(new cn(y-.017,.139),new Rt({map:z}));O.position.z=.0205,b.add(O);let Y=-1/0;return b.userData.action=()=>{let N=performance.now();N-Y<250||(Y=N,U(),l(),b.position.z=.036,setTimeout(()=>{b.position.z=.046},115))},{label:L,context:R.getContext("2d"),texture:z}});function E(){m.fillStyle="#182831",m.fillRect(0,0,512,96),m.fillStyle="#ffe1a0",m.font="bold 38px system-ui",m.fillText(d,17,62,478);for(let L of A){let U=L.context;U.fillStyle="#386269",U.fillRect(0,0,208,172),U.fillStyle="#fff2d5",U.textAlign="center",U.font="bold 27px system-ui";let S=(typeof L.label=="function"?L.label():L.label).split("|");S.forEach((b,R)=>U.fillText(b,104,(S.length>1?68:97)+R*37,188)),L.texture.needsUpdate=!0}v.needsUpdate=!0}s.push(E)}function l(){for(let c of s)c()}return a(Vl.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>t.spawn(0,Jo[0])],["Boule",()=>t.spawn(1,Jo[0])],["T\xE9tra\xE8dre",()=>t.spawn(2,Jo[0])],["Vider",t.clear]]),a(Vl.largeObjects,"GROS OBJETS",[["Rectangle",()=>t.spawn(4,Jo[1])],["Sph\xE8re",()=>t.spawn(5,Jo[1])]]),a(Vl.rendering,"RENDU",[[()=>"Qualit\xE9|"+t.quality(),t.qualityNext],[()=>"R\xE9solution XR|"+t.resolution(),t.resolutionNext],[()=>"Textures|"+t.textureSize(),t.textureNext]]),a(Vl.course,"PARCOURS",[["Retour|d\xE9part",t.resetPlayer],["Remettre|objets",t.resetObjects],["Hitboxes|Low / High",t.hitbox],["Appuis|On / Off",t.movement]]),l(),{targets:r,redraw:l}}function ec(n,e){let t=Math.imul(n,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}var Yr=(n,e,t)=>n+(e-n)*t,ra=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function wd(n,e){let t=Math.floor(n),i=Math.floor(e),r=ra(0,1,n-t),s=ra(0,1,e-i);return Yr(Yr(ec(t,i),ec(t+1,i),r),Yr(ec(t,i+1),ec(t+1,i+1),r),s)}function Yv(n,e){return wd(n,e)*.54+wd(n*2.07+3.4,e*2.07-6.1)*.26+wd(n*4.2+9,e*4.2)*.13+wd(n*8.6,e*8.6-13)*.07}function Zv(n){let i=new Uint8Array(2097152),r=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),s=n?[12,19,38]:[188,213,225],o=n?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),u=Math.sqrt(Math.max(0,1-c*c)),d=Math.max(0,c),f=d**.54,h=s.map((p,x)=>Yr(p,o[x],f));for(let p=0;p<1024;p++){let x=4*(p+l*1024),g=0,m=0,v=0;if(c>.025)if(n){let y=ec(p+792,l+677);y>.9988&&(v=(y-.9988)*49e3*ra(.09,.3,c))}else{let[y,A]=r[p],E=2.8*u/(c+.16),L=y*E+3.6,U=A*E-8.1,S=Yv(L,U),b=Yv(L-.12,U-.09);g=ra(.49,.66,S)*ra(.025,.13,c),m=Math.max(.38,Math.min(1,.72+(S-b)*5+(S-.54)*.8))}let M=n?1:Yr(.94,1,ra(.05,.34,c));i[x]=Yr(h[0],(139+115*m)*M,g)+v,i[x+1]=Yr(h[1],(154+100*m)*M,g)+v*.94,i[x+2]=Yr(h[2],(178+77*m)*M,g)+v*.86,i[x+3]=255}}let a=new si(i,1024,512,Dn);return a.colorSpace=ht,a.wrapS=Rn,a.magFilter=ln,a.minFilter=Pn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function jv(){let n=Zv(!1),e=Zv(!0),t=n.image.data.slice();for(let r=0;r<t.length;r+=4)t[r]*=.89,t[r+1]*=.61,t[r+2]*=.53;let i=new si(t,n.image.width,n.image.height,Dn);i.colorSpace=ht;for(let r of[n,i,e])r.mapping=Li,r.magFilter=ln,r.minFilter=ln,r.needsUpdate=!0;return{day:n,sunset:i,night:e}}function Td(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let r=new oi(i);return r.colorSpace=ht,r}function Jv(n,e){let{day:t,sunset:i,night:r}=jv(),s=[t,i,r],o=new Le,a=new qa("#a6d4ea",55,135),l=Td(128,128,(D,W)=>{let le=D.createRadialGradient(W/2,W/2,0,W/2,W/2,W/2);le.addColorStop(0,"#fff8df"),le.addColorStop(.12,"#fff3bd"),le.addColorStop(.18,"rgba(255,225,144,.40)"),le.addColorStop(1,"rgba(255,220,144,0)"),D.fillStyle=le,D.fillRect(0,0,W,W)}),c=new Ya(new yo({map:l,blending:ci,depthWrite:!1,fog:!1,toneMapped:!1}));c.scale.setScalar(34),n.add(c);let u=t.clone();u.mapping=Li,u.needsUpdate=!0;let d=new Uo(e);n.environment=d.fromEquirectangular(u).texture,d.dispose();let f=new dl("#daeaff","#88724c",2.25),h=new ml("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,n.add(f,h,h.target);let p=new _,x=0,g=null,m=!0,v=null,M=null,y=!0,A=0,E=0,L=new _,U=null,S=null,b=null;function R(D,W){if(W==="#ffffff")return D;if(D===S&&W===b)return U;let le=D.image,me=document.createElement("canvas");me.width=le.width,me.height=le.height;let te=me.getContext("2d");return D.isDataTexture?te.putImageData(new ImageData(new Uint8ClampedArray(le.data),le.width,le.height),0,0):te.drawImage(le,0,0),te.globalCompositeOperation="multiply",te.fillStyle=W,te.fillRect(0,0,me.width,me.height),U?.dispose(),U=new oi(me),U.mapping=Li,U.colorSpace=ht,U.flipY=D.flipY,S=D,b=W,U}function z(D){x=[0,1,2].includes(D)?D:0;let W=g??mm(x),le=Ce.degToRad(W.azimuth),me=Ce.degToRad(W.elevation);L.set(Math.cos(le)*Math.cos(me),Math.sin(me),Math.sin(le)*Math.cos(me)),p.copy(L).multiplyScalar(33),f.color.set(W.ambientColor),f.groundColor.set(W.groundColor),f.intensity=W.ambientPower,h.color.set(W.sunColor),h.intensity=W.sunPower,h.position.copy(h.target.position).add(p),c.material.color.set(W.sunColor),c.material.opacity=[1,.93,.22][W.preset]*Math.min(1,W.sunPower),c.visible=y&&W.sunPower>0;let te=W.sky==="image"&&M?M:s[W.preset];n.background=W.sky==="color"||!m?o.set(W.skyColor):R(te,W.skyTint),n.backgroundRotation.y=Ce.degToRad(W.rotation),a.color.set(W.fogColor),a.near=W.fogNear,a.far=W.fogFar,n.fog=W.fog?a:null,n.environmentIntensity=A*[1,.56,.09][W.preset]}function O(D,W=()=>{}){g=D;let le=D?.sky==="image"?D.skyImage:null;if(v!==le){v=le;let me=++E;M?.dispose(),M=null,le&&new li().load(le,te=>{if(E!==me){te.dispose();return}te.colorSpace=ht,te.mapping=Li,M=te,z(x),W()},void 0,()=>W())}z(x)}function Y(D){c.position.copy(D).addScaledVector(L,94)}function N(D){if(!h.castShadow)return;let W=h.target.position,le=Math.round(D.x/4)*4,me=Math.round(D.y/4)*4,te=Math.round(D.z/4)*4;W.x===le&&W.y===me&&W.z===te||(W.set(le,me,te),h.position.copy(W).add(p))}z(0);let k=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function Q(D,W,le){let[,me,te]=k[W],ne=512;D.save(),D.scale(le/512,le/512),D.fillStyle=me,D.fillRect(0,0,ne,ne);let Me=W+19;function Ee(){return Me=Math.imul(Me,1664525)+1013904223>>>0,Me/4294967296}if(D.fillStyle=te,W===16){for(let ze=0;ze<16;ze++)for(let Be=0;Be<16;Be++)(Be+ze)%2===0&&D.fillRect(Be*32,ze*32,32,32);D.fillStyle="#ff3957",D.fillRect(253,0,6,512),D.fillRect(0,253,512,6)}else if([0,2,8,15].includes(W)){let ze=W===15?32:64;D.globalAlpha=.48;for(let Be=0;Be<ne;Be+=ze){D.fillRect(0,Be,ne,W===8?3:2);for(let Mt=-ze;Mt<ne;Mt+=ze)D.fillRect(Mt+Be/ze%2*(W===2?ze/2:0),Be,2,ze)}}else if([4,5,6,7,10,11,12].includes(W)){let ze=W===5?38:W===7?64:18;for(let Be=0;Be<ze;Be++){D.strokeStyle=te,D.globalAlpha=.08+Ee()*.22,D.lineWidth=W===5?1+Ee()*8:1+Ee()*4;let Mt=Ee()*ne,Wt=W===5?.018:.009;D.beginPath();for(let at=0;at<=ne;at+=8){let Ut=Mt+Math.sin(at*Wt+Be)*(W===6||W===7?4:12+Be%5*3)+(W===4?at*.28:0);at===0?D.moveTo(at,Ut):D.lineTo(at,Ut)}D.stroke()}}else{D.globalAlpha=.27;for(let ze=0;ze<120;ze++){let Be=Ee()*ne,Mt=Ee()*ne,Wt=2+Ee()*6;D.beginPath(),D.arc(Be,Mt,Wt,0,Math.PI*2),D.fill()}}if(W!==16)for(let ze=0;ze<4400;ze++)D.globalAlpha=.05+Ee()*.1,D.fillStyle=Ee()>.5?te:"#222324",D.fillRect(Ee()*ne,Ee()*ne,1+Ee()*4,1+Ee()*3);D.restore()}let V=new Set([0,2,4,5,8,15,16]),J=k.map(([D,W,le,me,te,ne],Me)=>{let Ee=V.has(Me)?512:256,ze=Td(Ee,Ee,Mt=>Q(Mt,Me,Ee));ze.wrapS=ze.wrapT=Rn;let Be=new _t({map:ze,roughness:me,metalness:te,flatShading:!0,opacity:ne,transparent:ne<1,depthWrite:ne===1});return Be.name=D,Be}),re=J.map(D=>D.map.image),pe=512,ye=J.map(D=>new yn({map:D.map,flatShading:!0,opacity:D.opacity,transparent:D.transparent,depthWrite:D.depthWrite})),Te={value:0},Re={value:.24},Pe={value:null},ie={value:0};function ce(){Pe.value?.dispose(),Pe.value=Td(512,512,(D,W)=>{D.fillStyle="#ffffff",D.fillRect(0,0,W,W);let le=W/52,me=W/64;for(let te of ge){if(!te.position||!te.half||te.position.y+te.half.y<.22)continue;let ne=(te.position.x+26)*le,Me=(te.position.z+54)*me,Ee=Math.min(55,te.half.x*le+5),ze=Math.min(72,te.half.z*me+6);D.save(),D.translate(ne+te.half.y*le*.2,Me+te.half.y*me*.24),D.scale(Ee,ze);let Be=D.createRadialGradient(0,0,.15,0,0,1);Be.addColorStop(0,"rgba(22,37,65,.54)"),Be.addColorStop(.58,"rgba(36,54,76,.29)"),Be.addColorStop(1,"rgba(38,48,57,0)"),D.fillStyle=Be,D.fillRect(-1,-1,2,2),D.restore()}})}for(let D of[...J,...ye])D.onBeforeCompile=W=>{W.uniforms.uFocusAmount=Te,W.uniforms.uFocusRadius=Re,W.uniforms.uLabLightmap=Pe,W.uniforms.uLabBakedStrength=ie,W.vertexShader=`varying vec3 vLabPosition;
`+W.vertexShader,W.vertexShader=W.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),W.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+W.fragmentShader,W.fragmentShader=W.fragmentShader.replace("#include <map_fragment>",`
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
      `)},D.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let ge=[],Ie=[];function _e(D,W,le,me,te,ne,Me,Ee=0,ze=0,Be=1,Mt=1,Wt=!1){let at=new He(Wt?new it(te,ne,Me):Sd(te,ne,Me),J[Ee]);at.position.set(W,le,me),at.rotation.x=ze,at.receiveShadow=!0,at.castShadow=!0,n.add(at);let Ut=new _(te/2,ne/2,Me/2),on={mesh:at,position:at.position,quaternion:at.quaternion,half:Ut,min:Ut.clone().negate(),friction:Be,gravity:Mt,name:D,type:Ee,shape:ui(Ut)};return ge.push(on),on}let Xe=Py.map(({name:D,bounds:W,type:le=0,friction:me=.78,gravity:te=1})=>{let{xMin:ne,xMax:Me,zMin:Ee,zMax:ze}=W;return _e(D,(ne+Me)/2,-.33,(Ee+ze)/2,Me-ne,.66,ze-Ee,le,0,me,te)});for(let D of Object.values(Uy))for(let W of D)_e(...W);let{xMin:Ge,xMax:T,zMin:F,zMax:X}=Ry;_e("But\xE9e arri\xE8re",0,1.35,F+.4,T-Ge,2.7,.6,2),_e("But\xE9e ouest",Ge+.3,1.05,(F+X)/2,.6,2.1,X-F,2),_e("But\xE9e est",T-.3,1.05,(F+X)/2,.6,2.1,X-F,2);let{xMin:B,xMax:H,zMin:I,zMax:q}=Zo.hills.bounds,j=H-B,se=q-I,fe=16,C=64,w=new cn(j,se,fe,C).rotateX(-Math.PI/2).translate(B+j/2,0,I+se/2),Z=w.attributes.uv;for(let D=0;D<Z.count;D++)Z.setXY(D,Z.getX(D)*j/2.6,Z.getY(D)*se/2.6);let ee=w.attributes.position,he;function oe(D){if(he===D)return;he=D;let W=he*.017;for(let le=0;le<ee.count;le++){let me=ee.getX(le),te=ee.getZ(le),ne=Math.sin(Math.PI*Ce.clamp((me-B)/j,0,1)),Me=Math.min(1,(te-I)*.48,(q-te)*.48),Ee=.93+.56*Math.sin(te*.36+W)+.32*Math.cos(me*.67+te*.26+W*1.4)+.19*Math.sin(te*.81+W*.67);ee.setY(le,Math.max(0,ne*Me*Ee))}ee.needsUpdate=!0,w.computeVertexNormals(),w.computeBoundingSphere()}oe(Iy);let we=new He(w,J[3]);we.userData.editorAssetId="lab-hill",we.receiveShadow=we.castShadow=!0,n.add(we);let ve=(D,W)=>{let le=Ce.clamp((D-B)/j*fe,0,fe-1e-6),me=Ce.clamp((W-I)/se*C,0,C-1e-6),te=Math.floor(le),ne=Math.floor(me),Me=le-te,Ee=me-ne,ze=fe+1,Be=ne*ze+te,Mt=ee.getY(Be),Wt=ee.getY(Be+1),at=ee.getY(Be+ze),Ut=ee.getY(Be+ze+1);return Me+Ee<=1?Mt+(Wt-Mt)*Me+(at-Mt)*Ee:Ut+(at-Ut)*(1-Me)+(Wt-Ut)*(1-Ee)};ge.push({heightfield:!0,mesh:we,editorAssetId:"lab-hill",height:ve,...Zo.hills.bounds,friction:.81,gravity:1});function Ae(D,W,le,me,te=1.45){let ne=Td(384,72,(Ee,ze,Be)=>{Ee.fillStyle="#202a32",Ee.fillRect(0,0,ze,Be),Ee.fillStyle=me,Ee.font="bold 31px system-ui",Ee.textAlign="center",Ee.fillText(D,ze/2,48,ze-20)}),Me=new He(new cn(3.2,.6),new Rt({map:ne,side:mn}));Me.position.set(W,te,le),n.add(Me),Ie.push(Me)}for(let D of Object.values(Zo)){Ae(D.name.toLocaleUpperCase("fr"),...D.sign,D.color);let{xMin:W,xMax:le,zMin:me,zMax:te}=D.bounds,ne=new Ja(new et().setFromPoints([new _(W,.025,me),new _(le,.025,me),new _(le,.025,te),new _(W,.025,te)]),new Pi({color:D.color,transparent:!0,opacity:.72}));n.add(ne),Ie.push(ne)}Ae("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),Ae("MURS HAUTS",3,-31,"#e8d2ff"),Ae("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let Fe=new _t({color:"#c8e6ed",metalness:1,roughness:.16}),de=new He(new kt(.54,2),Fe);de.userData.editorAssetId="chrome-sphere",de.position.set(cd.x,cd.y,cd.z),de.castShadow=!0,n.add(de);let be=k.map((D,W)=>{let{x:le,z:me}=Ly(W);return _e("\xC9chantillon "+k[W][0],le,.325,me,.65,.65,.65,W,0,1,1,!0).mesh}),Ye=new pn(1,12).rotateX(-Math.PI/2),Ve=new Rt({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function De(D){let W=new He(Ye,Ve);return W.scale.setScalar(D),n.add(W),W}function tt(D,W,le,me,te,ne,Me,Ee){let ze=W>=3;e.shadowMap.enabled=ze,h.castShadow=ze,Ve.opacity=W===2?.17:.11,ie.value=Ee?.38+le*.04:0;let Be=W>=9?2048:W>=6?1024:W>=4?512:256;h.shadow.intensity=.45+W*.055,h.shadow.radius=.65+W*.12;let Mt=13+W*1.2;Object.assign(h.shadow.camera,{left:-Mt,right:Mt,top:Mt,bottom:-Mt}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==Be&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(Be,Be)),y=te,Me!==pe&&(pe=Me,J.forEach((at,Ut)=>{let on=at.userData.texture??at.map,Zi=V.has(Ut)?Me:Math.min(256,Me);if(on.image.width===Zi)return;let ts=document.createElement("canvas");ts.width=ts.height=Zi;let ns=ts.getContext("2d");Zi>512?Q(ns,Ut,Zi):ns.drawImage(re[Ut],0,0,Zi,Zi);let ji=new oi(ts);ji.colorSpace=on.colorSpace,ji.wrapS=on.wrapS,ji.wrapT=on.wrapT,ji.repeat.copy(on.repeat);for(let Sr of[at,ye[Ut]])Sr.userData.texture=ji,Sr.map=ji,Sr.needsUpdate=!0;on.dispose()}));let Wt=D>=4;for(let at of ge)at.mesh?.isMesh&&!at.zone&&(at.mesh.material=Wt?J[at.type]:ye[at.type]);we.material=Wt?J[3]:ye[3];for(let at=0;at<be.length;at++)be[at].material=Wt?J[at]:ye[at];J.forEach((at,Ut)=>{for(let on of[at,ye[Ut]])on.userData.texture||(on.userData.texture=on.map),on.map=ne?on.userData.texture:null,on.color.set(ne?"#ffffff":k[Ut][1]),on.needsUpdate=!0}),A=me?.21+le*.067:0,Fe.metalness=me?.95:.1,Fe.roughness=me?.13:.46,m=D>=2,z(x)}return{boxes:ge,floors:Xe,probe:de,display:be,visual:tt,shadow:De,setTimeOfDay:z,setEnvironment:O,centerSky:Y,sunDirection:()=>L.clone(),centerShadows:N,lighting:[f,h,h.target,c],get hillSeed(){return he},setHillSeed:oe,bakeLightmap:ce,mapMaterial:(D,W)=>W>=4?J[D]:ye[D],builtObjects:[...ge.map(D=>D.mesh).filter(D=>D?.isObject3D),de,...Ie],materials:[...J,...ye],focus(D,W,le){Te.value=D?W*.75:0,Re.value=.07+le*.058}}}var L_="R38.10",jr=document.getElementById("game");jr instanceof HTMLCanvasElement||(jr=document.createElement("canvas"),jr.id="game",jr.setAttribute("aria-label","Ar\xE8ne Gorilla Lab"),document.body.prepend(jr));var _r=(navigator.userAgentData?.mobile===!0||globalThis.matchMedia?.("(pointer: coarse)").matches===!0)&&!/OculusBrowser|Meta Quest/i.test(navigator.userAgent??""),je;try{je=new Ch({canvas:jr,antialias:!_r,powerPreference:"high-performance"})}catch(n){throw document.getElementById("status").textContent="WebGL 2 indisponible : "+n.message,n}je.xr.enabled=!0;je.xr.setReferenceSpaceType("local-floor");je.shadowMap.type=xl;je.shadowMap.autoUpdate=!1;var Qv=-1/0;je.toneMapping=zu;je.toneMappingExposure=1.15;var Pt=new fs,yt=new vt,Gd=new vt,zt=new tn(70,1,.035,210);yt.add(Gd);Gd.add(zt);Pt.add(yt);var St=Jv(Pt,je),X2=Wv(je),Dd=Hv();Pt.add(Dd);var Y2=qv(St.probe),G=bv(_r),Z2={...G};try{Object.assign(G,wv(localStorage,_r))}catch{}try{let n=Number(localStorage.getItem("gorilla-lab-step-volume"));Number.isInteger(n)&&n>=1&&n<=10&&(G.stepVolume=n)}catch{}var Kr=Pv();for(let n of["pointerdown","keydown"])addEventListener(n,Kr.unlock,{passive:!0});var la=Dv(Pt),Ci=hg(),bm=0,Kv=0,$v=0;addEventListener("error",n=>Ci.record("error",{message:String(n.message).slice(0,500)}));addEventListener("unhandledrejection",n=>Ci.record("rejection",{message:String(n.reason?.message??n.reason).slice(0,500)}));var Ls={normal:new _,surface:null},Ld=[.18,.17,.105].map(n=>({radius:n,position:new _})),Om=new _(jo.x,jo.y,jo.z);yt.position.copy(Om);var Gt=new _,sa=new _,It=new _,e_=new _,di=new _,Tn=new _,t_=new _,pa=new _,pr=new _,n_=new _,Zr=new _,i_=new _,tc=new _,j2=.105,Ad=new _,Ud=!1,Gi=!1,zm=0,Vm=null,sc=[],km=100,Ht=new _(0,1,0),br=new qe,At=0,Xi=0,yr=0,pi=0,Bs=NaN,U_={armed:!0},Mm=0,Us=0,Sm=0,Ed=0,ha=0,da=0,fa=0,un=G.quality,oc=72,ki=0,$t=!1,F_="left",pt=new URLSearchParams(location.search).has("room")?5:0,Gm=0,Hm=0,Wm=0,Vt=!0,r_=0,J2=[],Cd=[],$r=St.boxes,Q2=new kt(1,0),N_=1+Math.floor(Math.random()*(Ih.length-1)),B_=Ph(N_),{hand:K2,fur:$2}=B_;function eC(n,e,t,i,r,s,o,a){let l=new He(Q2,e);return l.position.set(t,i,r),l.scale.set(s,o,a),n.add(l),l.castShadow=!0,l}var Os=lm(localStorage),O_=Os.models.filter(n=>n.kind!=="avatar"),Im=Os.models.find(n=>n.id===Os.avatarId&&n.kind==="avatar"&&Vh(n)),tC={...Os,models:O_,avatarId:Im?null:Os.avatarId},nC=O_.length?"|atelier-"+As(JSON.stringify(tC)):"",Nt=Im?Zx(Im,n=>{let e=new He(Qo(n),cm(n));return e.castShadow=!0,e.receiveShadow=!0,e},n=>{n.geometry.dispose(),Ko(n.material)}):null;Nt&&(Nt.root.visible=!1,Pt.add(Nt.root));var Wi=jy(Os)??B_.createHead();Wi.visible=!1;Pt.add(Wi);var ca=new _,Fd=new qe,s_=new _,iC=new _,o_=new rn(0,0,0,"YXZ"),Pm=new _,Nd=new _,gr=new xe,a_=new qe,cc=9.81,z_=null,wm=new qe,l_=[null,null];function Hd(){return .24+G.arms*.036}function rC(n,e,t){let i=Math.max(...[3,4,5].map(o=>e[o]?.pressed?1:e[o]?.touched?.48:0)),r=1-Math.exp(-t*22),s=n.pressure;s[0]=Ce.lerp(s[0],e[0]?.value??+!!e[0]?.pressed,r),s[1]=Ce.lerp(s[1],e[1]?.value??+!!e[1]?.pressed,r),s[2]=Ce.lerp(s[2],i,r),n.skin.pose(s,!G.body)}var Lt=["left","right"].map(n=>{let e=Uh(n,K2,{openWrist:!0}),{mesh:t}=e;return t.castShadow=!0,t.visible=!1,Pt.add(t),{side:n,mesh:t,skin:e,pressure:[0,0,0],bodyPose:{position:new _,quaternion:new qe},target:new _,gripPosition:new _,valid:!1,surface:null,held:null,grip:!1,trigger:!1,menu:!1,controllerRotation:new qe,aimDirection:new _,supportOffset:new _,hasSupport:!1}}),Qr=new _d(_,Lt,vy),V_=Fh($2,Lt.map(n=>({geometry:n.mesh.geometry,wristIndices:n.skin.wristIndices})));for(let n of Lt){let e=n.mesh.geometry,t=[...e.index.array],i=n.skin.wristIndices;for(let r=1;r<i.length-1;r++)t.push(i[0],i[r+1],i[r]);e.setIndex(t),e.computeVertexNormals()}var Gn=V_.mesh;Pt.add(Gn);function sC(n,e){if(G.body){wm.copy(Gn.quaternion).invert();for(let t=0;t<Lt.length;t++){let i=Lt[t];l_[t]=i.valid?i.bodyPose:null,i.valid&&(i.bodyPose.position.copy(i.mesh.position).sub(Gn.position).applyQuaternion(wm),i.bodyPose.quaternion.copy(i.mesh.quaternion).premultiply(wm))}V_.pose(l_,Hd(),n,e,G.hands)}}var Fn=ud(),k_=[0,1,2,3,4,5],G_=[7,8,9,10,11,12,13,14],gc=15,c_=ui(new _(.13,.088,.115)),oC=new it(.26,.176,.23),aC=new _t({color:"#536771",roughness:.36,metalness:.28});Fn[gc]={name:"Cam\xE9ra du spectateur",geo:oC,material:aC,shape:c_,lowShape:c_,mass:1.2};var{props:lC,animate:cC}=Ev(),uC=Zy(Os).slice(0,36),qm=[],uc=[];function H_(n,e){for(let{collisionGeo:t,sphere:i=0,...r}of n){let s=Ai(t??r.geo,i);e.push(Fn.length),Fn.push({...r,shape:s,lowShape:s})}}H_(lC,qm);H_(uC,uc);var W_=[...k_,...G_,...qm,...uc];Fn[8].properties={supportWhileHeld:!0};Fn[11].properties={supportWhileHeld:!0};function hC(n){if(!n.properties?.supportWhileHeld)return null;n.geo.computeBoundingBox();let e=n.geo.boundingBox.getSize(new _),t=e.x>=e.y&&e.x>=e.z?0:e.y>=e.z?1:2;return new _().setComponent(t,e.getComponent(t)*.49)}for(let n of Fn)n&&(n.supportAxis=hC(n));function dC(n){let e=new He(new sn(.058,.074,.1,12).rotateX(Math.PI/2),new _t({color:"#28313a",roughness:.3,metalness:.5}));e.position.z=-.15,n.add(e);let t=new He(new pn(.048,12),new Rt({color:"#7bd7ed",side:mn}));t.position.z=-.203,n.add(t);let i=new He(new it(.045,.013,.012),new Rt({color:"#f46669"}));i.position.set(.083,.075,-.122),n.add(i)}function q_(n,e=!1){let t=Fn[n];if(!t)return null;let i=new He(t.geo,e?jl(t.material):t.material);return i.castShadow=i.receiveShadow=!0,n===gc&&dC(i),i}var dt=null,Et=[],u_=[],es={held:null},ga=new Map,xr=0,fC=1,nc=new qe,hc=new qe,ic=new _,Wd=new _,Fs=new _,X_=new _,Y_=new _;function pC(n,e,t){for(let i of[0,.63,-.63,1.24,-1.24,2.45,-2.45,Math.PI]){Wd.set(0,0,-1).applyAxisAngle(Ht,e+i);for(let r of[0,.52,1.04]){let s=Math.max(1.48,t+.68)+r;if(ic.copy(n).addScaledVector(Wd,s),ic.y+=.15,!Ol(n,ic,Math.min(.2,t*.5),$r,X_,Y_)&&!Et.some(o=>o.mesh.position.distanceToSquared(ic)<(t+o.radius+.07)**2))return ic}}return null}function xa(n,e,t,i=!1){let r=Fn[n];if(!r)return null;if(!e&&(t?Fs.set(t.x,t.y,t.z):je.xr.isPresenting?Fs.copy(It):zt.getWorldPosition(Fs),e=pC(Fs,t?.yaw??Xi,r.shape.radius),!e))return i||$n("Aucun espace libre pour cet objet."),null;let s=q_(n);s.position.copy(e),Pt.add(s);let o=G.preciseHitboxes?r.shape:r.lowShape??r.shape,a={mesh:s,spec:r,netId:fC++,netType:n,blocksPlayer:r.properties?.collidable!==!1,precise:G.preciseHitboxes,type:r.name,shape:o,radius:o.radius,mass:r.mass,start:s.position.clone(),startRotation:s.quaternion.clone(),owner:null,velocity:new _,angular:new _,offset:new _,relativeRotation:new qe,shadow:St.shadow(r.shape.radius)};return a.frozen=!!r.properties?.frozen,a.collidable=r.properties?.collidable!==!1,a.grabbable=r.properties?.grabbable!==!1,a.toolHold=!1,a.protected=n===gc,a.paint=0,a.materialStyle=-1,a.blocksPlayer&&(a.handCollider={objectBody:a,friction:.96,gravity:1}),Et.push(a),zl(a,St.boxes),Ci.record("object-spawn",{model:r.name,typeId:n,count:Et.length}),a}function Xm(){for(let n of Lt)Ei(n,!1);Ei(es,!1);for(let n of ga.values())Ei(n,!1)}function Kd(){Xm();for(let n of Et)if(Pt.remove(n.mesh,n.shadow),n.customMaterial)for(let e of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])e.dispose();Et.length=0,ga.clear()}function Z_(){if(dt?.assetLayer)return;let n=new Set(dt?.placedModels?.().map(e=>e.model.assetId).filter(Boolean)??[]);Fy((e,t)=>{n.has(nm[e])||xa(e,t)})}Z_();function Ei(n,e=!0){let t=n.held;t&&(t.owner=null,n.held=null,t.toolHold=!1,t.velocity.multiplyScalar(e?.55+G.throw*.12:0).clampLength(0,23),e?t.angular.clampLength(0,24):t.angular.set(0,0,0))}function yc(){Xm();for(let n of Et)of(n),n.frozen=!!n.spec.properties?.frozen}function Mr(){Bs=NaN,pi=0,ef.reset(),yt.position.copy(Om),At=Ce.degToRad(dt.yaw),yr=0,yt.rotation.y=At,Gt.set(0,0,0),U_.armed=!0,Gi=!1,Ls.normal.set(0,0,0),Ls.surface=null,Ud=!1,Qr.reset(),Kr.reset(),gr.set(0,0);for(let n of Lt)n.valid=!1,n.hapticGrounded=!1,n.hapticPending=!1,n.hapticCooldown=0,n.gamepad=null,Ei(n,!1)}yc();function j_(){return G.auto||_r&&!je.xr.isPresenting}function qd(){return j_()?Math.min(G.shadowQuality,un):G.shadowQuality}function dc(){return j_()?Math.min(G.lightQuality,un):G.lightQuality}function Yi(){let n=G.texturePower;St.visual(un,G.shadows?qd():0,dc(),G.reflections,G.bloom,G.textures,2**(n-1),G.lightmap),dt.refreshMaterials?.(),je.shadowMap.needsUpdate=!0,St.setTimeOfDay(Qe.remoteLight??G.timeOfDay-1),Dm=Zd.slice(0,dc()>=8?3:dc()>=4?2:1),og.value=G.shaderMode-1;let e=je.xr.isPresenting&&je.xr.getBaseLayer?.()?.fixedFoveation!=null;St.focus(G.focus&&!e,G.focusStrength,G.focusSize),je.toneMappingExposure=.58+G.exposure*.114,wb.value=.55+G.contrast*.09,Tb.value=G.saturation*.2,Ab.value=(G.warmth-5)*.022,je.xr.setFoveation(G.focus?Ce.clamp((G.focusStrength+1)*.105+(5-G.focusSize)*.028+(G.auto?(7-un)*.045:0),0,1):0),je.xr.isPresenting||vc(),Vt=!0,$m.redraw()}var h_=0,d_=0,f_=0;function vc(){if(je.xr.isPresenting)return;let n=Math.max(1,jr.clientWidth||innerWidth),e=Math.max(1,jr.clientHeight||innerHeight),t=gv(un,devicePixelRatio,_r);t!==f_&&(je.setPixelRatio(t),f_=t),(n!==h_||e!==d_)&&(je.setSize(n,e,!1),h_=n,d_=e),zt.aspect=n/e,zt.fov=G.viewFov,zt.updateProjectionMatrix()}addEventListener("resize",vc);globalThis.visualViewport?.addEventListener("resize",vc);function mC(n){Object.assign(G,{textures:!0,contrast:5,saturation:5,exposure:5,warmth:5},Zl[n]),un=G.quality,da=fa=ha=0,Yi()}var zs=[["Locomotion",[["Appuis Gorilla","movement"],["Collisions","collisions"],["Grip","grip"],["Glissement","slide"],["Gravit\xE9","gravity"],["Impulsion","jump"],["Poids","weight"],["Taille","size"],["Longueur des bras","arms"],["Vibration des appuis","stepHaptics"],["Intensit\xE9 vibrations","stepHapticStrength"],["Rotation avec menu","snapWithMenu"],["Retour au d\xE9part",Mr]]],["Objets",[["Objets actifs","objects"],["Hitboxes objets","preciseHitboxes"],["Rebond","bounce"],["Force du lancer","throw"],["R\xE9initialiser les objets",ng]]],["Rendu",[]]],$d=[["Image",[["Shader","shaderMode"],["Ambiance","timeOfDay"],["FOV PC / mobile","viewFov"],["FOV VR","vrFov"],["Exposition","exposure"],["Contraste","contrast"],["Saturation","saturation"],["Chaleur","warmth"],["Corps du singe","body"],["Mains","hands"]]],["Lumi\xE8re",[["Ombres","shadows"],["Qualit\xE9 des ombres","shadowQuality"],["Qualit\xE9 des lumi\xE8res","lightQuality"],["Carte de lumi\xE8re","lightmap"],["Reflets","reflections"],["Qualit\xE9 miroir","mirrorQuality"],["Bloom du soleil","bloom"]]],["Performance",[["Pr\xE9r\xE9glage","preset"],["Qualit\xE9 automatique","auto"],["Qualit\xE9 manuelle","quality"],["R\xE9solution XR","resolution"],["Textures","textures"],["Max. textures","texturePower"]]],["Effets",[["Post FX VR","post"],["Ray tracing VR","rayTrace"],["Activer le focus","focus"],["Intensit\xE9 du focus","focusStrength"],["Zone nette du focus","focusSize"]]]];function Ym(){return pt===2?$d[Gm][1]:pt===3?eb[Hm][1]:pt===4?Jm[Wm][1]:zs[pt][1]}function J_(n){pt=n,ki=0,Vt=!0}var Xd=null,Q_=[],Bd=0,ac=0,Yd=null,K_=!1,Zm=0,jm=0,$_={},Zd=Array.from({length:3},()=>{let n=new fl("#ffffff",0,22,1.6);return n.visible=!1,Pt.add(n),{light:n,mesh:null,distance:1/0}}),Dm=Zd,xc=new _;function p_(n){let e=Array.isArray(n.material)?n.material[0]:n.material;if(!n.visible||!e||e.emissiveIntensity<1||e.emissive.getHex()===0)return;let t=n.position.distanceToSquared(xc);if(t>34**2)return;let i=Dm[0];for(let r of Dm)r.distance>i.distance&&(i=r);t<i.distance&&(i.mesh=n,i.distance=t)}function gC(n){n?zt.getWorldPosition(xc):xc.copy(It);for(let t of Zd)t.mesh=null,t.distance=1/0;if(n)Qe.forEachReplica(p_);else if(G.objects)for(let t of Et)t.materialStyle===3&&p_(t.mesh);let e=20+dc()*.75;for(let{light:t,mesh:i}of Zd)t.distance=e,t.visible=!!i,t.intensity=i?132:0,i&&(t.position.copy(i.position),t.color.copy((Array.isArray(i.material)?i.material[0]:i.material).emissive))}function _c(){Ci.record("capture",{mode:je.xr.isPresenting?"VR":"PC"});let n=Ci.snapshot(je.xr.isPresenting?"VR":"PC");Xd={game:"Gorilla Lab",version:L_.toLowerCase(),reportSchema:2,revision:"lot3-input-debug",time:new Date().toISOString(),mode:je.xr.isPresenting?"VR":"PC",sessionHadVR:K_,settings:{...G},qualityActive:un,diagnostics:n,debugGeometry:{...la.stats},scenario:document.querySelector("#report-note")?.value?.slice(0,500)??"",device:{userAgent:navigator.userAgent,cores:navigator.hardwareConcurrency??null,memoryGiB:navigator.deviceMemory??null,viewport:[innerWidth,innerHeight],pixelRatio:je.getPixelRatio()},haptics:Lt.map(e=>({side:e.side,tracked:!!e.valid,...e.hapticStats})),debug:z_,audio:{volume:G.stepVolume,enabled:G.stepAudio,clipsPlayed:Kr.count,state:Kr.state},performance:{fps:Us,frames:n.frames.length,frameMs:n.metrics.frameMs},xr:je.xr.isPresenting?Yd:null,previousVR:Yd,renderer:$_,terrainSeed:St.hillSeed,map:dt.active?{name:dt.name,pieces:dt.nodes}:null,objects:{physics:{...Nl},total:Et.length,held:Et.filter(e=>e.owner).length,frozen:Et.filter(e=>e.frozen).length},cloud:{role:Qe.role,connected:Qe.connected,replicas:Qe.replicaCount,...Qe.stats},locomotion:{trackedFrames:jm,contactFrames:Zm,launchCount:zm,lastLaunch:Vm,standingHeight:Number.isFinite(Bs)?Bs:null,viewOffset:pi}},document.querySelector("#download-report").disabled=!1,Vt=!0}function xC(){Xd||_c();let n=URL.createObjectURL(new Blob([JSON.stringify(Xd,null,2)],{type:"application/json"})),e=document.createElement("a");e.href=n,e.download="gorilla-lab-rapport-"+new Date().toISOString().replace(/[:.]/g,"-")+".json",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}document.querySelector("#download-report").onclick=xC;document.querySelector("#capture-report").onclick=_c;var ya=document.createElement("input");ya.id="report-note";ya.maxLength=500;ya.placeholder="Sc\xE9nario : ex. 30 objets lanc\xE9s, debug coup\xE9";ya.setAttribute("aria-label","Sc\xE9nario du rapport");ya.style.cssText="width:100%;padding:.5rem;margin:.5rem 0";document.querySelector("#capture-report").parentElement.after(ya);var fc=document.createElement("p");fc.setAttribute("aria-live","off");document.querySelector("#settings").after(fc);zs[1][1].push(["Tool Gun","toolActive"],["Action Tool Gun","toolMode"],["Pistolet de tir","blasterActive"],["Capturer un rapport",_c]);var yC=Array.from({length:Math.ceil(uc.length/8)},(n,e)=>["Atelier"+(uc.length>8?" "+(e+1):""),uc.slice(e*8,e*8+8)]),eb=[["Basiques",k_],["D\xE9taill\xE9s",G_],["Anim\xE9s",qm],...yC].map(([n,e])=>[n,[...e.map(t=>[Fn[t].name,()=>ig(t)]),["Tout retirer",tf]]]);zs.push(["Spawn",[]]);var Jm=[["Construction",[["\xC9diteur VR","mapEdit"],["Action","mapMode"],["Pi\xE8ce","mapShape"],["Mat\xE9riau","mapMaterial"],["Surface","mapSurface"],["Rotation","mapTurn"],["Texture raccordable","mapTexture"],["Cr\xE9er atelier vide",()=>{dt.blank(),G.mapEdit=!0}],["Annuler placement",()=>dt.undo()]]],["Terrain",[["D\xE9tail du maillage","terrainResolution"],["Amplitude du bruit","terrainAmplitude"],["Fr\xE9quence du bruit","terrainFrequency"],["Graine","terrainSeed"],["Herbe","terrainGrass"],["Buissons","terrainShrub"],["Rayon de la brosse","brushRadius"],["Force de la brosse","brushStrength"],["Enregistrer d\xE9part",()=>dt.recenter(It.x,yt.position.y,It.z,Xi)],["Revenir \xE0 l\u2019ar\xE8ne",()=>{dt.reset(),G.mapEdit=!1}]]],["Mod\xE8le",[["Saisissable","modelGrab"],["Fig\xE9 au d\xE9part","modelFrozen"],["Collisions du mod\xE8le","modelCollidable"],["Appui pendant la prise","modelSupport"],["Sauver comme objet",()=>M_(!1)],["Utiliser comme t\xEAte",()=>M_(!0)]]]];zs.push(["Carte",[]],["En ligne",[]],["Debug",[["Prises et paumes","debugPalm"],["Hitboxes visibles","debugHitboxes"],["Collisions sans maillage","debugInvisible"],["Forces et vitesse","debugForces"],["Corps et t\xEAte","debugBody"],["D\xE9cor en debug","debugScene"],["Objets en debug","debugObjects"],["Maillage visuel","debugMesh"],["Port\xE9e debug","debugRange"],["Budget debug","debugBudget"],["Vitesse simulation","debugSpeed"],["Son des appuis","stepAudio"],["Volume des appuis","stepVolume"],["Tester vibration gauche",nb],["Tester vibration droite",ib],["\xC9couter un pas",rb],["Capturer un rapport",_c]]]);function tb(n){let e=Lt.find(i=>i.side===n),t=e?.valid&&fm(e,.45,65);Ci.record("haptic-test",{side:n,supported:!!t}),$n(t?"Test envoy\xE9 : "+n+" (r\xE9sultat dans le rapport).":"Manette absente ou vibration indisponible : "+n)}function nb(){tb("left")}function ib(){tb("right")}function rb(){Kr.unlock().then(()=>Kr.play(G.stepVolume))}function sb(){try{localStorage.setItem("gorilla-lab-step-volume",String(G.stepVolume))}catch{}}var vC=document.querySelector("#section"),Rd=document.querySelector("#settings"),_C=document.querySelector("#readings"),Qm=[1,.75,.5,.25];function ua(){if(!je.xr.isPresenting)try{Tv(localStorage,_r,G)}catch{}}function An(n,e){if(Ci.record("setting",{key:n,step:e,previous:G[n]}),n==="mirrorQuality"){G.mirrorQuality=Ce.clamp(G.mirrorQuality+e,1,3),ua(),Vt=!0;return}if(n==="debugSpeed"){G.debugSpeed=Ce.clamp(G.debugSpeed+e,1,Qm.length),Qr.reset(),Vt=!0;return}if(n==="stepVolume"){G.stepVolume=Ce.clamp(G.stepVolume+e,1,10),sb(),Vt=!0;return}if(n==="viewFov"){G.viewFov=Ce.clamp(G.viewFov+5*e,50,105),vc(),ua(),Vt=!0;return}if(n==="vrFov"){G.vrFov=Ce.clamp(G.vrFov+5*e,55,100),Vt=!0;return}if(n==="shaderMode"){G.shaderMode=(G.shaderMode-1+e+Yl.length)%Yl.length+1,og.value=G.shaderMode-1,ua(),Vt=!0;return}if(n==="timeOfDay"){if(Qe.guestActive){let i=((Qe.remoteLight??G.timeOfDay-1)+e+3)%3;Qe.sendAction({type:"world",mode:1,typeId:i})}else G.timeOfDay=(G.timeOfDay-1+e+3)%3+1;Yi();return}let t={mapMode:9,mapShape:5,mapMaterial:gm.length,mapSurface:4,mapTurn:8,mapTexture:yd.length+1,terrainResolution:4};if(Object.hasOwn(t,n)){let i=t[n];G[n]=(G[n]-1+e+i)%i+1,Vt=!0;return}if(n==="mapEdit"&&!G.mapEdit&&!dt.active&&dt.load(Bv(St.boxes)),n==="toolMode"){G.toolMode=(G.toolMode-1+e+Ds.length)%Ds.length+1,je.xr.isPresenting||$n("Outil \xB7 "+Ds[G.toolMode-1]),Vt=!0;return}if(n==="preset"){let i=Object.keys(Zl);G.preset=(G.preset-1+e+i.length)%i.length+1,mC(i[G.preset-1]),ua();return}if(typeof G[n]=="boolean"?G[n]=!G[n]:G[n]=Ce.clamp(G[n]+e,1,n==="texturePower"?12:n==="toolMode"?7:10),n==="size"||n==="arms")for(let i of Lt)i.valid=!1,i.surface=null;if(n==="quality"&&(G.auto=!1,un=G.quality),n==="auto"&&!G.auto&&(un=G.quality),n==="movement"||n==="collisions")for(let i of Lt)i.surface=null;if(n==="objects"&&!G.objects&&yc(),n==="blasterActive"&&G.blasterActive&&(G.toolActive=!1),n==="toolActive"&&G.toolActive&&(G.blasterActive=!1),!G.toolActive&&(n==="toolActive"||n==="blasterActive")){for(let i of Lt)i.held?.toolHold&&Ei(i,!1);tg(!1)}n==="preciseHitboxes"&&ob(),$d.slice(0,3).some(([,i])=>i.some(([,r])=>r===n))&&ua(),Yi()}function ob(){for(let n of Et)n.precise=G.preciseHitboxes,n.shape=n.precise?n.spec.shape:n.spec.lowShape??n.spec.shape,n.radius=n.shape.radius,n.owner||zl(n,St.boxes)}function ab(){let n=(pt===2?$d:pt===4?Jm:null)?.flatMap(e=>e[1])??Ym();for(let[,e]of n)typeof e=="string"&&(G[e]=Z2[e]);pt===6&&(sb(),Qr.reset()),pt===0&&Mr(),pt===1&&(ob(),yc()),pt===3&&tf(),pt===2&&(un=G.quality,ua()),Yi()}function rc(n,e){let t=document.createElement("button");return t.textContent=n,t.onclick=()=>{e(),va(),Vt=!0},t}function lb(n){return n==="preciseHitboxes"?G[n]?"High":"Low":G[n]?"Actif":"Coup\xE9"}function Km(n){if(n==="mirrorQuality")return["Coup\xE9","\xC9co","Fin"][G[n]-1];if(n==="debugRange")return G[n]*5+" m";if(n==="debugBudget")return G[n]*1e3+" segments";if(n==="debugSpeed")return Qe.role?"\xD71 en ligne":"\xD7"+Qm[G.debugSpeed-1];if(n==="stepVolume")return G.stepVolume+"/10";if(n==="viewFov")return G.viewFov+"\xB0";if(n==="vrFov")return G.vrFov===100?"Natif":G.vrFov+" %";if(n==="mapTexture")return G[n]===1?"Aucune":yd[G[n]-2];if(n==="terrainResolution")return[8,16,32,48][G[n]-1]+"\xB2";if(n==="shaderMode")return Yl[G.shaderMode-1];if(n==="shadowQuality"||n==="lightQuality"){let e=G[n],t=n==="shadowQuality"?qd():dc();return t===e?e+"/10":e+"/10 \xB7 "+t+(G.auto?" auto":" mobile")}return n==="timeOfDay"?["Jour","Coucher de soleil","Nuit"][Qe.remoteLight??G.timeOfDay-1]:n==="mapMode"?pb[G.mapMode-1]:n==="mapShape"?CC[G.mapShape-1]:n==="mapSurface"?RC[G.mapSurface-1]:n==="mapMaterial"?gm[G.mapMaterial-1]:n==="mapTurn"?(G.mapTurn-1)*45+"\xB0":n==="toolMode"?Ds[G.toolMode-1]:n==="preset"?Object.keys(Zl)[G.preset-1]:n==="texturePower"?[2**(G[n]-1),2**(G[n]-1)].join("\xD7"):G[n]}function Lm(){return pt===2?$d:pt===3?eb:Jm}function cb(){return pt===2?Gm:pt===3?Hm:Wm}function ub(n){pt===2?Gm=n:pt===3?Hm=n:Wm=n}function hb(n){return n===nb||n===ib?"Tester":n===_c?"Capturer":n===rb?"\xC9couter":n===Kd||n===tf?"Vider":n===Mr||n===ng?"R\xE9initialiser":pt===3?"Cr\xE9er":"Appliquer"}function va(){if(vC.textContent=zs[pt][0],db.forEach((n,e)=>n.setAttribute("aria-pressed",String(e===pt))),Rd.replaceChildren(),bC.hidden=pt!==5,document.querySelector("#restore").hidden=pt===5,pt!==5){if(pt>=2&&pt<=4){let n=document.createElement("nav");n.setAttribute("aria-label","Cat\xE9gories"),Lm().forEach(([e],t)=>{let i=rc(e,()=>ub(t));i.setAttribute("aria-pressed",String(cb()===t)),n.append(i)}),Rd.append(n)}if(pt===6){let n=document.createElement("small");n.textContent="Cyan : prise \xB7 Vert : paume \xB7 Jaune : hitboxes \xB7 Rose : collisions invisibles \xB7 Orange : normales \xB7 Bleu : vitesse \xB7 Rouge : gravit\xE9 \xB7 Cr\xE8me : d\xE9placement",Rd.append(n)}for(let[n,e]of Ym()){let t=document.createElement("div");t.className="setting",t.append(n);let i=document.createElement("span");typeof e=="function"?i.append(rc(hb(e),e)):typeof G[e]=="boolean"?i.append(rc(lb(e),()=>An(e,1))):i.append(rc("\u2212",()=>An(e,-1)),document.createTextNode(" "+Km(e)+" "),rc("+",()=>An(e,1))),t.append(i),Rd.append(t)}}}var db=document.querySelectorAll("[data-page]"),bC=document.querySelector("#cloud-access");db.forEach((n,e)=>n.onclick=()=>{J_(e),va()});document.querySelector("#restore").onclick=()=>{ab(),va()};va();function fb(n,e,t,i,r){let s=document.createElement("canvas");s.width=n,s.height=e;let o=s.getContext("2d"),a=new oi(s);a.colorSpace=ht;let l=new He(new cn(t,i),new Rt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.add(l),l.renderOrder=5,{ctx:o,texture:a,mesh:l,w:n,h:e}}var vn=fb(640,652,.84,.86,Pt);vn.mesh.visible=!1;var fi=fb(416,84,.32,.065,Pt);fi.mesh.visible=!1;var oa=new tn(75,1,.07,20),Un=new Tl(new cn(1.7,1.95),{color:16054015,textureWidth:_r?128:256,textureHeight:_r?128:256,clipBias:.004,multisample:0}),m_=new _,Id=new _,g_=new _,x_=new _,Tm=new qe,MC=new _,SC=new qe().setFromAxisAngle(Ht,Math.PI),wC=new _(Hr.x,Hr.y,Hr.z);Un.position.set(Hr.x,Hr.y,Hr.z);Un.rotation.y=Math.PI;Pt.add(Un);var bc=new He(new it(1.8,2.03,.1),new yn({color:"#344650"}));bc.userData.editorAssetId="lab-mirror";bc.position.copy(Un.position).z+=.064;Pt.add(bc);var TC=Un.onBeforeRender.bind(Un);Un.onBeforeRender=()=>{};Un.visible=!1;var aa=-1/0,y_=null,v_=0,Um=0;function AC(n,e){if(Um=0,Un.visible=!1,!G.reflections||G.mirrorQuality===1){aa=-1/0;return}if(oa.position.copy(It),e){let u=e.transform.orientation;oa.quaternion.set(u.x,u.y,u.z,u.w).premultiply(Fd.setFromAxisAngle(Ht,At))}else zt.getWorldQuaternion(oa.quaternion);g_.set(0,0,-1).applyQuaternion(oa.quaternion);let t=null,i=3;function r(u,d,f){Id.subVectors(d,It);let h=Id.length();m_.set(0,0,1).applyQuaternion(f),!(h>=i||Id.dot(m_)>=-.15||Id.dot(g_)<=.66*h)&&(t=u,i=h,Un.position.copy(d),Un.quaternion.copy(f))}dt.usesBuiltInMirror&&r(bc,wC,SC);for(let{mesh:u}of dt.mirrors()){let{mirrorSize:d}=u.userData;Tm.copy(u.quaternion),x_.copy(u.position).add(MC.set(0,0,d.d/2+.002).applyQuaternion(Tm)),r(u,x_,Tm)}if(!t){aa=-1/0;return}let{w:s,h:o}=t.userData.mirrorSize??{w:1.7,h:1.95};Un.scale.set(s/1.7,o/1.95,1),Un.visible=!0,y_!==t&&(y_=t,aa=-1/0);let a=G.mirrorQuality,l=a===3?_r||je.xr.isPresenting?256:768:128;if(v_!==l&&(Un.getRenderTarget().setSize(l,l),v_=l,aa=-1/0),n-aa<(a===3?45:110))return;aa=n,oa.updateMatrixWorld(!0),Un.updateMatrixWorld(!0),Wi.visible=G.body&&!Nt?.root.visible;let c=performance.now();try{TC(je,Pt,oa)}finally{Wi.visible=!1}Um=performance.now()-c}var qi=new or,Kn=new _,Hn=new _,Pd=new _,__=new _,lc=null,Od=null,zd=null,EC=new Set(Pt.children),$m=Xv(Pt,St.boxes,{spawn:ig,clear:tf,resetPlayer:Mr,resetObjects:ng,quality:()=>un+"/10",resolution:()=>G.resolution+"/10 \xB7 relancer VR",textureSize:()=>Km("texturePower"),qualityNext:()=>{G.quality>=10&&(G.quality=0),An("quality",1)},resolutionNext:()=>{G.resolution>=10&&(G.resolution=0),An("resolution",1)},textureNext:()=>{G.texturePower>=12&&(G.texturePower=0),An("texturePower",1)},hitbox:()=>An("preciseHitboxes",1),movement:()=>An("movement",1)}),pb=["Poser","D\xE9placer","Supprimer","Peindre","Monter","Creuser","Lisser","Aplanir","Appliquer le bruit"],CC=["Bloc","Rampe","Mur","Dalle","Terrain"],RC=["Normale","Glace","Caoutchouc","Lune"],b_=new Map;function IC(){for(let n of dt.placedModels()){let e=JSON.stringify([n.model,n.w,n.h,n.d,n.gravity,n.bounce]),t=b_.get(e);if(t===void 0){let r=new _(n.w,n.h,n.d),s=$o(n.model,r);s.scale(n.w,n.h,n.d);let o=ql(n.model,r),a=Ai(o);o.dispose(),t=Fn.length,Fn.push({id:n.model.id,name:n.model.name,geo:s,material:qr(n.model),shape:a,lowShape:a,assetId:n.model.assetId??null,physics:fd({physics:{gravity:n.gravity,bounce:n.bounce}}),properties:{...n.model.properties,grabbable:n.model.properties.grabbable!==!1},mass:Ce.clamp(n.w*n.h*n.d*9,.18,12)}),b_.set(e,t)}let i=xa(t,new _(n.x,n.y,n.z),null,!0);i&&(i.mesh.rotation.set(Ce.degToRad(n.pitch),Ce.degToRad(n.yaw),Ce.degToRad(n.roll??0),"YXZ"),i.mesh.updateMatrixWorld(!0),i.start.copy(i.mesh.position),i.startRotation.copy(i.mesh.quaternion))}}dt=Gv({scene:Pt,arena:St,boot:Om,onReset:n=>{Kd(),Mr(),At=Ce.degToRad(n),dt.builtIn&&Z_(),IC()},onVisual:Yi,getLevel:()=>un,defaultObjects:[...St.builtObjects,...Pt.children.filter(n=>!EC.has(n)),bc]});var Qe=Xx({scene:Pt,currentMap:()=>(dt.signature||"arena-r25-"+St.hillSeed)+nC,seedArena:n=>St.setHillSeed(n),makeReplica:n=>{let e=q_(n,!0);return e&&_a(e.material),e},onAction:NC,onStatus:()=>{pt===5&&(Vt=!0)},onShot:n=>ef.receiveShot(n,Qe.role==="vr"),applyLight:n=>{St.setTimeOfDay(n??G.timeOfDay-1),Vt=!0,je.xr.isPresenting||va()}});function M_(n){let e=dt.modelPieces();if(!e.length||e.length>Bi.parts){$n("Compose un mod\xE8le de 1 \xE0 "+Bi.parts+" pi\xE8ces dans l\u2019atelier.");return}let t=lm(localStorage);if(t.models.length>=Bi.models){$n("La collection de mod\xE8les est pleine.");return}let i=new _(1/0,1/0,1/0),r=new _(-1/0,-1/0,-1/0);for(let c of e)i.min(new _(c.x-c.w/2,c.y-c.h/2,c.z-c.d/2)),r.max(new _(c.x+c.w/2,c.y+c.h/2,c.z+c.d/2));let s=i.clone().lerp(r,.5),o=Math.min(1,3/Math.max(r.x-i.x,r.y-i.y,r.z-i.z)),a="custom-model-vr-"+Date.now().toString(36),l={id:a,name:"Mod\xE8le VR "+(t.models.length+1),inGame:!n,properties:{grabbable:G.modelGrab,frozen:G.modelFrozen,collidable:G.modelCollidable,supportWhileHeld:G.modelSupport},hitbox:{mode:"auto",shape:"convex",precision:48},parts:e.map(c=>({shape:"box",name:c.name,position:[(c.x-s.x)*o,(c.y-s.y)*o,(c.z-s.z)*o],rotation:[c.pitch,c.yaw,0],scale:[c.w*o,c.h*o,c.d*o],color:c.color==="#ffffff"?Nv[c.material]:c.color,surface:"plain"}))};t.models.push(l),n&&(t.avatarId=a);try{localStorage.setItem(am,JSON.stringify(Ps(t))),$n("Mod\xE8le sauvegard\xE9. Recharge le jeu pour l\u2019utiliser.")}catch{$n("Le navigateur ne peut pas enregistrer ce mod\xE8le.")}}var Am=new Map;function PC(){let n=[{name:"Bloc",w:1.25,h:.55,d:1.25},{name:"Rampe",w:1.75,h:.32,d:2.3,pitch:18},{name:"Mur",w:1.75,h:2.2,d:.38},{name:"Dalle",w:2.1,h:.25,d:2.1},{name:"Terrain",w:12,h:.12,d:12}][G.mapShape-1],e=ta({detail:[8,16,32,48][G.terrainResolution-1],amplitude:(G.terrainAmplitude-1)*.34,frequency:.05+G.terrainFrequency*.025,seed:G.terrainSeed,grass:(G.terrainGrass-1)/9,shrub:(G.terrainShrub-1)/9}),t=G.mapTexture-2;return t>=0&&!Am.has(t)&&Am.set(t,fv(t).toDataURL("image/webp",.83)),Kl({...n,material:G.mapMaterial-1,yaw:G.mapShape===5?0:(G.mapTurn-1)*45,...xm[Object.keys(xm)[G.mapSurface-1]],texture:Am.get(t)??null,terrain:G.mapShape===5||G.mapMode===9?e:null,brushRadius:.5+G.brushRadius*.5,brushStrength:G.brushStrength*.15})}function DC(n,e,{source:t,click:i}){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Kn.set(s.x,s.y-pi,s.z).applyAxisAngle(Ht,At).add(yt.position),br.set(o.x,o.y,o.z,o.w),Hn.set(0,0,-1).applyQuaternion(br).applyAxisAngle(Ht,At),dt.edit(Kn,Hn,i,{mode:G.mapMode,piece:PC(),head:It,feet:yt.position.y}),i&&(Vt=!0)}function LC(n){if(!dt.builtIn||!n.valid||n.held||n.remoteHeld||$t)return;let e=null;for(let t of $m.targets)if(t.getWorldPosition(__),!(n.mesh.position.distanceToSquared(__)>.11**2)&&(t.worldToLocal(Pd.copy(n.mesh.position)),Math.abs(Pd.x)<t.userData.touchWidth*.5+.025&&Math.abs(Pd.y)<.095&&Math.abs(Pd.z)<.046)){e=t;break}e&&n.lastFixture!==e&&e.userData.action(),n.lastFixture=e}function Fm(n,e,t){if(!dt.builtIn)return;qi.set(n,e),qi.far=5.5;let i=qi.intersectObjects($m.targets,!1);qi.far=1/0;let r=i[0];r&&(Vs.visible=!0,Vs.position.copy(r.point).addScaledVector(e,-.012),t&&(r.object.userData.action&&r.object.userData.action(r.uv),va()))}var S_=new _,mb=new qe,eg=Nh(Pt),ef=vv({scene:Pt,rig:yt,camera:zt,arena:St,objects:Et,spectator:Qe}),tL=eg.mesh,Vd=new _,vr=new qe,jd=new _,ma={mode:0,position:jd,quaternion:vr,end:Vd},w_=new _,UC=new _,T_=["#f47655","#73c8ff","#89ebad","#ffcd69","#c895ff","#fff6df","#242b36"];var Jd=new _,FC={position:jd,quaternion:vr,pressure:[.1,.66,.08]},Em=new _,Qd=new qe;function tg(n){es.held&&Ei(es,n)}function gb(n,e){if(Qe.role==="pc"){$n("Rejoins le salon en joueur pour modifier les objets.");return}if(!Qe.guestActive){e();return}Qe.sendAction({type:"world",mode:3,typeId:n})||$n("Attends la connexion \xE0 l\u2019h\xF4te.")}function tf(){gb(0,Kd)}function ng(){gb(1,yc)}function ig(n,e=null){if(G.objects=!0,Qe.role==="pc"){$n("Commence par rejoindre le salon en joueur.");return}Qe.guestActive?Qe.sendAction({type:"spawn",typeId:n})||$n("Attends la connexion \xE0 l\u2019h\xF4te."):xa(n,e)}function NC(n,e){if(!e)return;if(n.type==="world"){n.mode===1?(G.timeOfDay=n.typeId+1,Yi()):n.mode===3&&[Kd,yc][n.typeId]?.();return}if(n.type==="spawn"){W_.includes(n.typeId)&&(G.objects=!0,xa(n.typeId,null,e));return}let t=Et.find(u=>u.netId===n.objectId);if(!t)return;let i=n.hand??0,r=e.id*3+i,s=n.type==="hold"?1:n.mode,o=ga.get(r);if(!o&&s===1&&(o={peerId:e.id,hand:i,held:null,controllerRotation:new qe},ga.set(r,o)),n.type==="release"){if(o?.held===t){let u=i?Qe.handMotion(e.id,i-1):null;u&&t.velocity.copy(u),Ei(o,!0)}return}if(!G.objects||s===1&&o.held)return;let a=i?e.avatar?.hands[i-1]:null;if(i&&!a)return;let l=Fs.copy(a?.position??(n.type==="tool"?e.avatar?.tool?.position:null)??e),c=i?ad(l,t):l.distanceTo(t.mesh.position);if(!(c>(i?.34:10)||Ol(l,t.mesh.position,.01,$r,X_,Y_))){if(o){let u=a?.quaternion??e.avatar?.tool?.quaternion??e.avatar?.head;u&&o.controllerRotation.copy(u)}rg(t,s,o,Ce.clamp(c,1.1,5)),i&&o?.held===t&&(t.toolHold=!1,hc.copy(o.controllerRotation).invert(),t.offset.copy(t.mesh.position).sub(l).applyQuaternion(hc))}}function BC(n){if(je.xr.isPresenting)for(let t of Lt)t.valid&&t.held&&Cm(t.held,t.mesh.position,t.aimDirection,t.controllerRotation,n);for(let[t,i]of ga){let r=Qe.getPeer(i.peerId),s=i.hand?r?.avatar?.hands[i.hand-1]:null;if(!r||i.hand&&!s){Ei(i,!1),ga.delete(t);continue}let o=i.held;if(!o)continue;let a=s?.quaternion??r.avatar?.tool?.quaternion??r.avatar?.head;a&&i.controllerRotation.copy(a),Fs.copy(s?.position??r.avatar?.tool?.position??r),Wd.set(0,0,-1).applyQuaternion(i.controllerRotation),Cm(o,Fs,Wd,i.controllerRotation,n)}let e=es.held;e&&(zt.getWorldPosition(Jd),zt.getWorldDirection(S_),zt.getWorldQuaternion(vr),Cm(e,Jd,S_,vr,n))}function Cm(n,e,t,i,r){n.toolHold?Em.copy(e).addScaledVector(t,n.toolDistance):Em.copy(n.offset).applyQuaternion(i).add(e),Qd.multiplyQuaternions(i,n.relativeRotation),_y(n,Em,Qd,$r,r)}function xb(n){return n.customMaterial||(n.mesh.material=jl(n.mesh.material),n.customMaterial=!0,_a(n.mesh.material)),n.mesh.material}function OC(n){let e=xb(n),t=n.materialStyle;for(let i of Array.isArray(e)?e:[e])i.roughness=[.94,.12,.16,.4][t],i.metalness=[0,.87,.12,0][t],i.transparent=t===2,i.depthWrite=t!==2,i.opacity=t===2?.4:1,i.emissive.copy(i.color),i.emissiveIntensity=t===3?1.65:0,i.needsUpdate=!0}function yb(n,e,t){qi.set(n,e),qi.far=9;let i=qi.intersectObjects(t,!1)[0];return qi.far=1/0,Vd.copy(n).addScaledVector(e,i?.distance??9),Ol(n,Vd,.006,$r,w_,UC)?(Vd.copy(w_),null):i}function rg(n,e,t,i){if(e===1){if(t?.held){t===es?tg(!0):Ei(t,!0);return}if(!n||n.owner||!n.grabbable)return;n.frozen=!1,n.toolHold=!0,n.toolDistance=i;let r=t.controllerRotation??vr;n.relativeRotation.multiplyQuaternions(mb.copy(r).invert(),n.mesh.quaternion),n.velocity.set(0,0,0),n.angular.set(0,0,0),n.owner=t,t.held=n;return}if(!(!n||n.owner)){if(e===2)n.frozen=!n.frozen,n.velocity.set(0,0,0),n.angular.set(0,0,0);else if(e===3&&!n.protected){if(Pt.remove(n.mesh,n.shadow),n.customMaterial)for(let r of Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material])r.dispose();Et.splice(Et.indexOf(n),1)}else if(e===4&&!n.protected){Jd.copy(n.mesh.position).addScaledVector(Ht,n.radius*2+.08);let r=xa(n.netType,Jd);r&&(r.mesh.quaternion.copy(n.mesh.quaternion),r.startRotation.copy(n.mesh.quaternion),r.paint=n.paint,r.materialStyle=n.materialStyle,n.customMaterial&&(r.mesh.material=jl(n.mesh.material),r.customMaterial=!0,_a(r.mesh.material)),zl(r,St.boxes))}else if(e===5){let r=xb(n),s=T_[n.paint++%T_.length];for(let o of Array.isArray(r)?r:[r])o.color.set(s),n.materialStyle===3&&o.emissive.copy(o.color)}else(e===6||e===7)&&(n.materialStyle=n.materialStyle<0?e===6?0:3:(n.materialStyle+(e===6?1:3))%4,OC(n));Vt=!0}}var Jr=[];function vb(n,e,t,i){if(!G.objects)return;let r=Qe.guestActive;if(Jr.length=0,r)Qe.forEachReplica(a=>Jr.push(a));else for(let a of Et)!a.owner&&a.mesh.visible&&Jr.push(a.mesh);let s=yb(n,e,Jr);if(ma.mode=G.toolMode,i?(jd.copy(i.mesh.position),vr.copy(i.controllerRotation)):(zt.getWorldQuaternion(vr),jd.set(.16,-.17,-.43).applyQuaternion(vr).add(n)),eg.update(ma),!t)return;if(r){if(G.toolMode===1&&xr)Qe.sendAction({type:"release",objectId:xr}),xr=0;else if(s){let a=s.object.userData.netId;Qe.sendAction({type:"tool",mode:G.toolMode,objectId:a})&&G.toolMode===1&&(xr=a)}return}let o=s&&Et.find(a=>a.mesh===s.object);rg(o,G.toolMode,i??es,s?Ce.clamp(s.distance+(o?.radius??0)*.35,1.1,5):1.1)}function zC(n,e,{source:t,hand:i,click:r}){let s=n.getPose(t.targetRaySpace,e);if(!s)return;let o=s.transform.position,a=s.transform.orientation;Kn.set(o.x,o.y-pi,o.z).applyAxisAngle(Ht,At).add(yt.position),br.set(a.x,a.y,a.z,a.w),Hn.set(0,0,-1).applyQuaternion(br).applyAxisAngle(Ht,At),vb(Kn,Hn,r,i)}function VC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Kn.set(s.x,s.y-pi,s.z).applyAxisAngle(Ht,At).add(yt.position),br.set(o.x,o.y,o.z,o.w),Hn.set(0,0,-1).applyQuaternion(br).applyAxisAngle(Ht,At),Fm(Kn,Hn,i)}var Vs=eC(Pt,new Rt({color:"#f5dfa0"}),0,0,0,.009,.009,.009);Vs.visible=!1;var Nm=[],Ns=null;function A_(){let n=vn.ctx;Nm=[],n.clearRect(0,0,640,652),n.fillStyle="#182632",n.fillRect(0,0,640,652),n.font="bold 30px system-ui",n.fillStyle="#fff0cf",n.fillText("GORILLA LAB "+L_,25,42),n.font="20px system-ui",n.fillText(Us+" FPS   \xB7   Q "+un+"/10   \xB7   "+(G.auto?"AUTO":"MANUEL"),390,40);function e(a,l,c,u,d,f,h="#344b59"){n.fillStyle=h,n.fillRect(a,l,c,u),n.fillStyle="#fff4dc",n.font="21px system-ui",n.textAlign="center",n.fillText(d,a+c/2,l+u/2+7,c-8),n.textAlign="left",Nm.push({x:a,y:l,w:c,h:u,action:f,label:d})}let t=Math.floor(587/zs.length);if(zs.forEach(([a],l)=>e(25+l*t,61,t-4,44,a,()=>J_(l),pt===l?"#586d53":"#334b58")),pt===5){n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(Qe.caption,25,145,587),n.fillText("Salons publics",25,190),El.forEach((a,l)=>{let c=204+l*48;n.fillText("Ar\xE8ne "+(l+1),25,c+29),e(200,c,190,40,"Rejoindre",()=>Qe.connect("player",a)),e(406,c,206,40,"H\xE9berger",()=>Qe.connect("vr",a))}),n.fillText("Salon priv\xE9",25,390),e(25,405,286,44,"Rejoindre le code saisi",()=>Qe.connect("player")),e(325,405,287,44,"Cr\xE9er un salon priv\xE9",()=>document.querySelector("#cloud-new").click()),n.font="17px system-ui",n.fillText("Pour saisir un autre code, utilise le panneau du navigateur.",25,489,587),e(25,579,286,44,"D\xE9connecter",()=>Qe.leave()),e(325,579,287,44,"Fermer",()=>$t=!1),vn.texture.needsUpdate=!0;return}let i=pt>=2&&pt<=4;i&&Lm().forEach(([a],l)=>{let c=cb()===l,u=Math.min(144,Math.floor(586/Lm().length)-4);e(25+l*(u+4),114,u,38,a,()=>ub(l),c?"#546947":"#263d49")});let r=Ym(),s=i?9:10,o=Math.max(1,Math.ceil(r.length/s));ki=Math.max(0,Math.min(ki,o-1)),r.slice(ki*s,(ki+1)*s).forEach(([a,l],c)=>{let u=(i?166:113)+c*40;c%2===0&&(n.fillStyle="#20323e",n.fillRect(25,u,587,36)),n.fillStyle="#e9e5ce",n.font="22px system-ui",n.fillText(a,37,u+26),typeof l=="function"?e(406,u,206,36,hb(l),l):typeof G[l]=="boolean"?e(406,u,206,36,lb(l),()=>An(l,1),G[l]?"#415c4c":"#344b59"):(e(359,u,44,36,"\u2212",()=>An(l,-1)),n.font="20px system-ui",n.textAlign="center",n.fillText(String(Km(l)),508,u+25,156),n.textAlign="left",e(568,u,44,36,"+",()=>An(l,1)))}),o>1&&(e(25,533,180,35,"Pr\xE9c\xE9dent",()=>{ki=(ki+o-1)%o,Vt=!0}),e(432,533,180,35,"Suivant",()=>{ki=(ki+1)%o,Vt=!0}),n.fillStyle="#e9e5ce",n.font="19px system-ui",n.fillText(ki+1+" / "+o,285,558)),e(25,579,286,44,"R\xE9glages par d\xE9faut",ab),e(325,579,287,44,"Fermer",()=>$t=!1),n.fillStyle="#c4d5d8",n.font="17px system-ui",n.fillText(sg||(pt===6?"v "+Gt.length().toFixed(2)+" m/s | g "+cc.toFixed(2)+" m/s\xB2 | Jaune collider, cyan maillage":pt===4&&dt.status?dt.status.slice(0,64):Xd?"Rapport captur\xE9. Quitte la VR pour le t\xE9l\xE9charger.":"G\xE2chette : choisir  \xB7  B/Y : panneau  \xB7  \xB9 Prochaine session VR"),25,645,587),vn.texture.needsUpdate=!0}function kC(n){$t=!$t,$t&&(F_=n,s_.set(0,0,-1).applyAxisAngle(Ht,Xi),vn.mesh.position.copy(It).addScaledVector(s_,1.25),vn.mesh.position.y+=.08,vn.mesh.lookAt(It),vn.mesh.updateMatrixWorld(!0)),Vt=!0}function GC(n,e,t,i){let r=n.getPose(t.targetRaySpace,e);if(!r)return;let s=r.transform.position,o=r.transform.orientation;Kn.set(s.x,s.y-pi,s.z).applyAxisAngle(Ht,At).add(yt.position),br.set(o.x,o.y,o.z,o.w),Hn.set(0,0,-1).applyQuaternion(br).applyAxisAngle(Ht,At),qi.set(Kn,Hn);let a=qi.intersectObject(vn.mesh)[0];if(a&&(Vs.visible=!0,Vs.position.copy(a.point).addScaledVector(Hn,-.012),i)){let l=a.uv.x*vn.w,c=(1-a.uv.y)*vn.h;Nm.find(u=>l>=u.x&&l<=u.x+u.w&&c>=u.y&&c<=u.y+u.h)?.action(),Vt=!0}}var nf=mv(),{held:Hi,pressed:mr}=nf,_b=_v(je.domElement,document.querySelector("#touch-fire")),E_=document.querySelector("#game-settings"),bb=document.querySelector("#open-settings"),Bm=document.querySelector("#game-hint"),kd=0;function $n(n){Bm.textContent=n,Bm.hidden=!1,kd=performance.now()+2400,sg=n,Vt=!0}var sg="";function rf(n){let e=n??!E_.hidden;E_.hidden=e,bb.hidden=!e,e&&je.domElement.focus()}bb.onclick=()=>rf(!1);document.querySelector("#close-settings").onclick=()=>rf(!0);var pc=pv({canvas:je.domElement,enabled:()=>!je.xr.isPresenting,onLook:(n,e,t)=>{At-=n*t,yr=Ce.clamp(yr-e*t,-1.42,1.42)},onAction:n=>{let e={interact:"KeyE",tool:"KeyG",mode:"KeyT",spawn:"KeyF",camera:"KeyC"}[n];e&&mr.add(e)},onMenu:()=>rf()});addEventListener("keydown",n=>{if(!n.target.closest?.("button,select,input,textarea")){if(!je.xr.isPresenting&&(n.code==="Tab"||n.code==="Escape")){n.preventDefault(),n.repeat||rf();return}n.code==="Space"&&n.preventDefault(),nf.down(n.code,n.repeat),n.code==="KeyR"&&Mr()}});addEventListener("keyup",n=>nf.up(n.code));addEventListener("blur",()=>{nf.clear(),pc.clear(),_b.clear()});function HC(n,e){if(!G.objects)return!1;let t=Qe.guestActive;if(t&&xr)return Qe.sendAction({type:"release",objectId:xr}),xr=0,!0;if(es.held)return tg(!0),!0;if(Jr.length=0,t)Qe.forEachReplica(r=>Jr.push(r));else for(let r of Et)!r.owner&&r.mesh.visible&&Jr.push(r.mesh);let i=yb(n,e,Jr);if(!i||i.distance>2.8)return!1;if(t){let r=i.object.userData.netId;Qe.sendAction({type:"hold",objectId:r})&&(xr=r)}else zt.getWorldQuaternion(vr),rg(Et.find(r=>r.mesh===i.object),1,es,Math.max(.75,i.distance));return!0}var Rm=[];function Mb(){return Rm.length=0,Qe.forEachReplica(n=>{let e=n.userData.netType;if(!Fn[e]||Fn[e].properties?.collidable===!1||n.userData.held)return;let t=Fn[e],i=G.preciseHitboxes?t.shape:t.lowShape??t.shape,r=n.userData.playerCollider??={mesh:n,blocksPlayer:!0,frozen:!0};r.shape=i,r.radius=i.radius,r.precise=G.preciseHitboxes,r.handCollider??={objectBody:r,friction:.96,gravity:1},Rm.push(r)}),Rm}function WC(){Qe.role!=="vr"||!Qe.remoteSpectator||Et.some(n=>n.netType===gc)||xa(gc,null,null,!0)}var mc=document.querySelector("#vr");navigator.xr?.isSessionSupported("immersive-vr").then(n=>{mc.disabled=!n,n&&(document.querySelector("#status").textContent="WebXR pr\xEAt")}).catch(()=>{});mc.onclick=async()=>{let n;Kr.unlock();try{mc.disabled=!0,n=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),je.xr.setFramebufferScaleFactor(.45+G.resolution*.055),await je.xr.setSession(n),Yi(),oc=n.frameRate||72,sc=Array.from(n.supportedFrameRates??[]).sort((t,i)=>t-i);let e=sc.includes(120)?120:sc.find(t=>t>=100)??sc.at(-1);if(e&&n.updateTargetFrameRate)try{await n.updateTargetFrameRate(e)}catch{}oc=n.frameRate||oc,km=Math.min(100,oc),G.auto&&(un=Math.min(un,4),ha=da=fa=0),Q_=[],Ci.reset(),Bd=0,ac=0,Zm=jm=zm=0,Vm=null,K_=!0,Yd=null,Bs=NaN,pi=0,Mr(),Yi(),document.body.classList.add("immersive")}catch(e){n&&await n.end().catch(()=>{}),mc.disabled=!1,document.querySelector("#status").textContent=e.message}};je.xr.addEventListener("sessionend",()=>{mc.disabled=!1,$t=!1,vn.mesh.visible=!1,fi.mesh.visible=!1,document.body.classList.remove("immersive"),Mr(),vc()});function Sb(n){if(!dt.active){for(let e of St.floors)if(Math.abs(n.x-e.position.x)<=e.half.x&&Math.abs(n.z-e.position.z)<=e.half.z)return e}if(dt.active){let e=-1/0,t;for(let i of St.boxes){if(i.heightfield){if(n.x<i.xMin||n.x>i.xMax||n.z<i.zMin||n.z>i.zMax)continue;let s=i.height(n.x,n.z);s>=e&&s<=n.y+.5&&(e=s,t=i);continue}let r=i.position.y+i.half.y;r<e||r>n.y+.5||Math.abs(n.x-i.position.x)>i.half.x||Math.abs(n.z-i.position.z)>i.half.z||(e=r,t=i)}return t}}function C_(n,e){let t=n.side==="left"?1:2;if(!e&&n.remoteHeld&&(Qe.sendAction({type:"release",objectId:n.remoteHeld,hand:t}),n.remoteHeld=0),$t||!e||n.grip||!G.objects)return;let i=null,r=.15;if(Qe.forEachReplica(s=>{if(s.userData.held)return;let o=Fn[s.userData.netType];if(!o||o.properties?.grabbable===!1||s.position.distanceToSquared(n.target)>(o.shape.radius+.18)**2)return;let a=ad(n.target,{mesh:s,shape:o.shape,radius:o.shape.radius});a<r&&(i=s,r=a)}),i){let s=i.userData.netId;Qe.sendAction({type:"hold",objectId:s,hand:t})&&(n.remoteHeld=s)}}function qC(n,e,t){let i=[...n.session.inputSources];for(let r of Lt){let s=i.find(h=>h.handedness===r.side&&h.gripSpace),o=s&&n.getPose(s.gripSpace,e);if(r.gamepad=o?s.gamepad:null,r.mesh.visible=!!o&&G.hands&&!G.body,!o){Qe.guestActive&&C_(r,!1),r.valid=!1,r.surface=null,Ei(r,!1);continue}Iv(r,o.transform,pi,At,yt.position),r.valid=!0;let a=!!s.gamepad?.buttons[1]?.pressed;if(nc.copy(r.controllerRotation),rC(r,s.gamepad?.buttons??[],t),Qe.guestActive)C_(r,a);else if(!$t&&a&&!r.grip&&G.objects&&!r.held){let h=null,p=.15;for(let x of Et){if(x.owner||!x.grabbable||x.mesh.position.distanceToSquared(r.target)>(x.radius+.18)**2)continue;let g=ad(r.target,x);g<p&&(p=g,h=x)}h&&!r.held&&(r.held=h,h.owner=r,h.frozen=!1,hc.copy(nc).invert(),h.offset.copy(h.mesh.position).sub(r.target).applyQuaternion(hc),h.relativeRotation.multiplyQuaternions(hc,h.mesh.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0))}!a&&r.grip&&!r.held?.toolHold&&Ei(r,!$t),r.grip=a,r.hasSupport=!1;let l=r.held;if(l&&!l.toolHold&&l.collidable&&l.spec.supportAxis){Qd.multiplyQuaternions(nc,l.relativeRotation),r.supportOffset.copy(l.spec.supportAxis).applyQuaternion(Qd),pa.copy(l.offset).applyQuaternion(nc);let h=r.supportOffset.dot(pa);(Math.abs(h)>.008?h<0:r.supportOffset.y>0)&&r.supportOffset.negate(),r.supportOffset.add(pa),r.hasSupport=!0}if(r.held?.toolHold){let p=n.getPose(s.targetRaySpace,e)?.transform.orientation;p?r.aimDirection.set(0,0,-1).applyQuaternion(mb.set(p.x,p.y,p.z,p.w)).applyAxisAngle(Ht,At):r.aimDirection.set(0,0,-1).applyQuaternion(nc)}let c=!!(s.gamepad?.buttons[5]?.pressed||s.gamepad?.buttons[3]?.pressed&&r.side==="left");c&&!r.menu&&kC(r.side),r.menu=c;let u=!!s.gamepad?.buttons[4]?.pressed;r.side==="right"&&u&&!r.toolButton&&!$t&&An("toolActive",1),r.toolButton=u;let d=!!s.gamepad?.buttons[3]?.pressed;r.side==="right"&&d&&!r.toolCycle&&G.toolActive&&!$t&&An("toolMode",1),r.toolCycle=d;let f=!!s.gamepad?.buttons[0]?.pressed;if($t){let h=f&&!r.trigger;(h||!Ns||!Ns.click&&r.side!==F_)&&(Ns={source:s,click:h})}else!$t&&r.side==="right"&&G.mapEdit?zd={source:s,click:f&&!r.trigger}:!$t&&r.side==="right"&&G.toolActive?Od={source:s,hand:r,click:f&&!r.trigger}:!$t&&!G.blasterActive&&(r.side==="right"||f&&!r.trigger)&&(lc={source:s,click:f&&!r.trigger});r.trigger=f}}function R_(n,e){let t=n?-ca.y:Math.max(0,-Math.sin(yr)),i=0,r=0,s=0;if(n){a_.setFromAxisAngle(Ht,-Xi);for(let u of Lt)u.valid&&(Nd.copy(u.gripPosition).sub(It).applyQuaternion(a_),i+=Nd.x-(u.side==="left"?-.2:.2),r+=Nd.z+.24,s++)}let o=s?Ce.clamp(-r/s,-.35,.45):0,a=s?Ce.clamp(i/s,-.35,.35):0,l=1-Math.exp(-e*13),c=n?pg(t,o):-.31*Ce.smoothstep(t,.2,.92);gr.x=Ce.lerp(gr.x,c,l),gr.y=Ce.lerp(gr.y,-a*.62,l),o_.set(gr.x,Xi,gr.y,"YXZ"),Gn.quaternion.setFromEuler(o_)}function XC(n,e,t,i,r=i){let s=!!t,o=.43+G.size*.088;if(s){let f=t.transform.position;Bs=fg(Bs,f.y),pi=Ce.clamp(Bs-o,-.65,1.7),Gd.position.y=-pi,di.set(f.x,f.y-pi,f.z);let h=[...n.session.inputSources].find(g=>g.handedness==="right"),p=cg(h?.gamepad),x=ug(U_,p,{menu:$t,allowMenu:G.snapWithMenu});x&&(Ci.record("snap-turn",{direction:x,menu:$t}),Tn.copy(di).applyAxisAngle(Ht,At),At-=x*Math.PI/4,e_.copy(di).applyAxisAngle(Ht,At),yt.position.add(Tn.sub(e_)),Qr.reset(),Ud=!1)}else Gd.position.y=0,di.set(0,o,0),zt.position.copy(di),zt.rotation.set(yr,0,0,"YXZ");if(It.copy(di).applyAxisAngle(Ht,At).add(yt.position),s){let f=t.transform.orientation;Fd.set(f.x,f.y,f.z,f.w),ca.set(0,0,-1).applyQuaternion(Fd),ca.x**2+ca.z**2>.018&&(Xi=At+Math.atan2(-ca.x,-ca.z))}else Xi=At;let a=Sb(It),l=9.81*(G.gravity/5)*(a?.gravity??1);cc=l,n_.copy(yt.position);let c=Qe.guestActive?Mb():Et;if(s){qC(n,e,r),R_(!0,r),Lt.some(f=>f.valid)&&jm++,Cd.length=0;for(let f of $r)Cd.push(f);if(G.collisions&&G.objects)for(let f of c)f.handCollider&&!f.owner&&Cd.push(f.handCollider);Qr.move({head:It,dt:i,inputDt:r,gravity:l,settings:G,boxes:Cd,velocity:Gt,movement:sa,reach:Hd()*2+.16});for(let f of Lt)yv(f,G.stepHaptics,r,.08+G.stepHapticStrength*.04,40)}else{R_(!1,r),Gt.y-=l*i;let f=Number(Hi.has("KeyD"))-Number(Hi.has("KeyA")||Hi.has("KeyQ"))+pc.movement.x,h=Number(Hi.has("KeyS"))-Number(Hi.has("KeyW")||Hi.has("KeyZ"))+pc.movement.z,p=Hi.has("ShiftLeft")||Hi.has("ShiftRight");pr.set(f,0,h).clampLength(0,1).applyAxisAngle(Ht,At).multiplyScalar(p?5.4:3.4);let x=1-Math.exp(-i*(a?.friction<.1?2:Gi?13:4));Gt.x=Ce.lerp(Gt.x,pr.x,x),Gt.z=Ce.lerp(Gt.z,pr.z,x);let m=(pc.consumeJump()||mr.delete("Space"))&&Gi,v=Ls.normal,M=!m&&Gi&&v.y>=.62&&(Ls.surface?.friction??0)>=.45;m?Gt.y=3.1+G.jump*.18:M&&(Gt.y=-(Gt.x*v.x+Gt.z*v.z)/v.y),sa.copy(Gt).multiplyScalar(i),M&&sa.addScaledVector(v,-l*i*i)}if(G.collisions&&Ud&&(pa.copy(It).add(sa),Ol(i_,pa,j2,$r,Tn,tc)&&pr.subVectors(pa,Tn).dot(tc)<0&&(sa.copy(Tn).sub(It),mg(Gt,tc))),yt.position.add(sa),It.copy(di).applyAxisAngle(Ht,At).add(yt.position),Gi=!1,Ls.normal.set(0,0,0),Ls.surface=null,G.collisions){Ad.set(0,-1,0).applyQuaternion(Gn.quaternion),Ad.y=0,Ad.addScaledVector(iC.set(0,0,1).applyAxisAngle(Ht,Xi),.12);for(let f=0;f<3;f++){let h=f===0?.18:f===1?Math.max(.26,di.y*.57):di.y,{radius:p}=Ld[f];if(Tn.set(It.x,yt.position.y+h,It.z),f<2&&Tn.add(gg(s,Ad,Math.max(0,di.y-h),pr)),t_.copy(Tn),Gi=em(Tn,p,St.boxes,Gt,0,3+G.grip,i,f===0?Ls:null)||Gi,G.objects)for(let x of c)x.blocksPlayer&&!x.owner&&Cy(Tn,p,x,Gt,tc)&&tc.y>.6&&(Gi=!0);em(Tn,p,St.boxes,Gt,0,3+G.grip,i),pr.subVectors(Tn,t_),yt.position.add(pr),It.add(pr);for(let x=0;x<f;x++)Ld[x].position.add(pr);Ld[f].position.copy(Tn)}}if(Zr.subVectors(yt.position,n_),Kr.update({dt:r,inVR:s,hands:Lt,grounded:Gi,travel:Math.hypot(Zr.x,Zr.z),volume:G.stepVolume,enabled:G.stepAudio}),s){let f=Qr.finish(Zr,Gt);f.contacts&&Zm++,f.launched&&(zm++,Vm={handSpeed:f.launchSpeed,velocity:Gt.toArray(),t:performance.now()})}(dt.active?yt.position.y<-24||Math.abs(yt.position.x)>155||Math.abs(yt.position.z)>155:yt.position.y<-9||Math.abs(yt.position.x)>33||yt.position.z<-57||yt.position.z>13)&&(Mr(),It.copy(di).applyAxisAngle(Ht,At).add(yt.position)),i_.copy(It),Ud=!0,yt.rotation.y=At,s&&zt.position.set(0,0,0);for(let f of Lt)s&&f.valid&&(f.mesh.position.copy(f.surface?f.anchor:f.held?f.target:f.locomotionTarget).addScaledVector(Zr,f.surface?0:1),f.gripPosition.add(Zr)),s||(f.mesh.visible=!1);let u=.72+G.size*.05,d=Hd()*2*(2/3)/.82;Gn.visible=G.body&&(s||!Nt),Wi.position.copy(It),s?Wi.quaternion.copy(Fd).premultiply(br.setFromAxisAngle(Ht,At)):Wi.quaternion.setFromEuler(new rn(yr,At,0,"YXZ")),Pm.set(0,-.145,.045).applyQuaternion(Wi.quaternion).add(It),Gn.position.set(0,.46*d,.04*u).applyQuaternion(Gn.quaternion).negate().add(Pm),Gn.visible&&sC(u,d),yt.updateMatrixWorld(!0),zt.updateWorldMatrix(!0,!1)}function YC(n,e){if(Ed+=n,Sm++,ha+=n,Ed<1||(Us=Math.round(Sm/Ed),Sm=0,Ed=0,Vt=!0,_C.textContent=Us+" FPS \xB7 qualit\xE9 "+un+"/10 \xB7 "+(G.auto?"auto":"manuel"),!G.auto||ha<5))return;ha=0;let t=e?Math.min(100,je.xr.getSession()?.frameRate||oc):60;e&&(km=t),da=Us<t-4?da+1:0,fa=Us>=t-1?fa+1:0;let i=Ce.clamp(un+(da>=1?-1:fa>=2?1:0),1,10);i!==un&&(un=i,ha=da=fa=0,Yi())}St.bakeLightmap();var wb={value:1},Tb={value:1},Ab={value:0},og={value:0},I_=new WeakSet;function _a(n){if(Array.isArray(n)){for(let i of n)_a(i);return}if(!n||I_.has(n))return;I_.add(n);let e=n.onBeforeCompile,t=n.customProgramCacheKey.call(n);n.onBeforeCompile=function(i,r){e.call(this,i,r),Object.assign(i.uniforms,{uPhotoContrast:wb,uPhotoSaturation:Tb,uPhotoWarmth:Ab,uLabShader:og}),i.fragmentShader=`uniform float uPhotoContrast; uniform float uPhotoSaturation; uniform float uPhotoWarmth; uniform int uLabShader;
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
    `)},n.customProgramCacheKey=()=>t+"-lab-style-v2",n.needsUpdate=!0}for(let n of St.materials)_a(n);Pt.traverse(n=>{n.isMesh&&![vn.mesh,fi.mesh,Vs].includes(n)&&_a(n.material)});Yi();var P_=new URLSearchParams(location.search);if(P_.has("map"))dt.loadURL(P_.get("map"));else try{let n=localStorage.getItem($l);n&&dt.load(n)}catch(n){dt.inform(n.message)}function ZC(){let n=je.xr.isPresenting;return{head:Wi.quaternion,hands:n?Lt.map(e=>e.valid?{position:e.mesh.position,quaternion:e.mesh.quaternion,pressure:e.pressure}:null):[null,ma.mode?FC:null],height:di.y,armSpan:Hd()*2,light:G.timeOfDay-1,color:N_,tool:ma.mode?ma:null,gun:ef.gun}}var D_=!1;je.setAnimationLoop((n,e)=>{let t=Mm?Math.max(0,(n-Mm)/1e3):.014;Mm=n;let i=Math.max(1e-4,Math.min(.035,t)),r=Qe.role?1:Qm[G.debugSpeed-1],s=i*r,o=je.xr.isPresenting,a=je.xr.getReferenceSpace(),l=e&&a&&e.getViewerPose(a);if(o&&!l)return;let c=Qe.guestActive;if(c&&!D_&&Xm(),D_=c,cC(n*.001),kd&&n>kd&&(Bm.hidden=!0,kd=0,sg=""),Vs.visible=!1,eg.hide(),ma.mode=0,$r=G.collisions?St.boxes:J2,Ns=null,lc=null,Od=null,zd=null,dt.clearGhost(),vn.mesh.visible=!1,!o&&Qe.role==="pc"){Gn.visible=!1;for(let y of Lt)y.mesh.visible=!1}else XC(e,a,l,s,i);let u=!o&&Qe.role==="pc";if(!o&&!u)for(let y of dt.checkTriggers(It))Ci.record("map-trigger",y),window.dispatchEvent(new CustomEvent("gorilla-model-trigger",{detail:y})),y.phase==="enter"&&$n("D\xE9clencheur \xB7 "+y.part);let d=u||Qe.guestActive;if(!Qe.guestActive){xr=0;for(let y of Lt)y.remoteHeld=0}d||(BC(s),WC()),bm=0;for(let y of Et){y.mesh.visible=G.objects&&!d;let{x:A,y:E,z:L}=y.mesh.position;if(dg(y.mesh.position,dt.active)&&(y.owner||of(y)),y.shadow.visible=!d&&G.shadows&&qd()<3&&G.objects&&y.mesh.position.y<2,y.shadow.visible){let{x:S,z:b}=y.mesh.position,R=St.boxes.find(O=>O.heightfield&&S>=O.xMin&&S<=O.xMax&&b>=O.zMin&&b<=O.zMax),z=R?R.height(S,b):0;y.shadow.position.set(S,z+.006,b)}}if(!d&&G.objects){let y=performance.now();Ay(Et,St.boxes,s,9.81*G.gravity/5,.12+G.bounce*.064,Sb),bm=performance.now()-y}if(o&&!$t&&Qe.role!=="pc")for(let y of Lt)LC(y);if(St.probe.rotation.y+=s*.29,YC(Math.min(.3,t),o),vn.mesh.visible=o&&$t,vn.mesh.visible&&Vt&&A_(),vn.mesh.visible&&Ns)GC(e,a,Ns.source,Ns.click);else if(o&&zd)DC(e,a,zd);else if(o&&Od)zC(e,a,Od);else if(o&&lc)VC(e,a,lc.source,lc.click);else if(!o&&!u){zt.getWorldPosition(Kn),zt.getWorldDirection(Hn),mr.delete("KeyX")&&An("blasterActive",1),mr.delete("KeyG")&&(An("toolActive",1),G.toolActive&&$n("Outil \xB7 "+Ds[G.toolMode-1])),mr.delete("KeyT")&&An("toolMode",1);let y=mr.delete("KeyE");G.toolActive?vb(Kn,Hn,y,null):y&&!HC(Kn,Hn)?Fm(Kn,Hn,!0):!y&&!d&&Fm(Kn,Hn,!1),mr.delete("KeyF")&&(G.objects=!0,ig(W_[0]))}let f=fi.mesh.visible;if(fi.mesh.visible=o&&!$t&&Lt[0].valid,fi.mesh.visible&&(fi.mesh.position.copy(Lt[0].mesh.position).y+=.12,fi.mesh.lookAt(It)),(Vt||n-r_>1100||fi.mesh.visible&&!f)&&(Vt=!1,r_=n,$t&&A_(),fi.mesh.visible)){let y=fi.ctx;y.clearRect(0,0,416,84),y.fillStyle="#182632",y.fillRect(0,0,416,84),y.fillStyle="#fff0cf",y.font="bold 25px system-ui",y.fillText(Us+" FPS     Q "+un+"/10",17,32),y.font="20px system-ui",y.fillText(G.mapEdit?"\xC9dition : "+pb[G.mapMode-1]:G.blasterActive?"Pistolet : maintenir la g\xE2chette":G.toolActive?"Tool Gun : "+Ds[G.toolMode-1]:"B/Y : r\xE9glages   \xB7   A : Tool Gun",17,66),fi.texture.needsUpdate=!0}ef.update({frame:e,space:a,inVR:o,remoteWorld:d,dt:s,yaw:At,drop:pi,rightHand:Lt[1],enabled:G.blasterActive&&!u&&!$t&&!G.mapEdit,flatFiring:_b.held||Hi.has("KeyJ")}),Qe.update({inVR:o,time:n,dt:i,position:It,yaw:u?At:Xi,pitch:yr,camera:zt,rig:yt,keys:Hi,actions:mr,flat:pc,avatar:ZC,bodies:G.objects?Et:u_}),mr.clear();let h=performance.now();la.update({settings:G,boxes:$r,bodies:d?G.debugHitboxes?Mb():u_:Et,hands:Lt,locomotion:Qr,velocity:Gt,head:It,neck:Pm,body:Gn.position,proxies:Ld,gravity:cc,appliedMove:Zr,playerActive:!u,inVR:o,viewQuaternion:Wi.quaternion}),Kv=performance.now()-h,!u&&n-ac>350&&(z_={simulationScale:r,gravity:cc,velocity:Gt.toArray(),grounded:Gi,torsoDegrees:[gr.x,gr.y].map(Ce.radToDeg),hands:o?Qr.hands.map(({hand:y,normal:A,offset:E})=>y.valid?{side:y.side,gripPosition:y.gripPosition.toArray(),idleAlignmentMeters:Tn.copy(ur).applyQuaternion(y.mesh.quaternion).add(y.target).add(Zr).distanceTo(y.gripPosition),palmCenter:Tn.copy(ur).applyQuaternion(y.mesh.quaternion).add(y.mesh.position).toArray(),contactCenter:Tn.copy(y.mesh.position).add(E).toArray(),normal:y.surface?A.toArray():null,surface:y.surface?.name??y.surface?.objectBody?.spec?.name??null}:null):[]}),gC(d);let p=je.xr.isPresenting?210:Math.max(210,dt.worldSize*1.5,dt.fogDistance+10);zt.far!==p&&(zt.far=p,zt.updateProjectionMatrix()),St.centerSky(xc),St.centerShadows(xc);let x=25+(10-qd())*(o?7:4);if(je.shadowMap.enabled&&n-Qv>=x&&(je.shadowMap.needsUpdate=!0,Qv=n),Nt&&(Nt.root.visible=G.body&&!o&&!u,Nt.root.visible)){Nt.root.quaternion.setFromAxisAngle(Ht,Xi),Nt.root.scale.setScalar(.72+G.size*.05),Nt.root.position.copy(It).sub(Nd.copy(Nt.headPivot).multiplyScalar(Nt.root.scale.x).applyQuaternion(Nt.root.quaternion)),Nt.setBend("head",yr/(Math.PI/2));let y=Math.sin(n*.012)*Math.min(.32,Math.hypot(Gt.x,Gt.z)*.07);for(let[A,E]of[["left",1],["right",-1]])Nt.setBend(A+"Arm",y*E),Nt.setBend(A+"Forearm",-.12-Math.max(0,y*E)),Nt.bones[A+"Hand"].visible=G.hands}AC(n,l);let g=performance.now(),m=o&&G.post,v=o&&G.rayTrace;Y2(v,Et);let M=G.vrFov/100;if(!m||!X2.render(Pt,zt,{bloom:G.bloom,visibleField:M})){Dd.material.uniforms.visibleField.value=M,Dd.visible=o&&M<1;let y=Gn.visible,A=Nt?.root.visible;o||(yr<-.52&&(Gn.visible=!1,Nt&&(Nt.root.visible=!1)),Nt&&(Nt.bones.head.visible=!1));try{je.render(Pt,zt)}finally{Dd.visible=!1,Gn.visible=y,Nt&&(Nt.root.visible=A,Nt.bones.head.visible=!0)}}if($v=performance.now()-g,Ci.sample({mode:o?"VR":"PC",frameMs:t*1e3,physicsCpuMs:bm,debugCpuMs:Kv,mirrorCpuMs:Um,renderSubmissionCpuMs:$v,objects:Et.length,moving:Et.filter(y=>!y.owner&&!y.frozen&&!y.sleeping&&y.velocity.lengthSq()>1e-4).length,debugSegments:la.stats.segments}),n-ac>350&&(fc.hidden=!(G.debugForces||la.stats.truncated),fc.hidden||(fc.textContent="Vitesse joueur : "+Gt.length().toFixed(2)+" m/s \xB7 Gravit\xE9 : "+cc.toFixed(2)+" m/s\xB2 \xB7 Segments : "+la.stats.segments+(la.stats.truncated?" (budget atteint : augmenter Budget debug ou r\xE9duire la port\xE9e)":""))),Q_[Bd]=t*1e3,Bd=(Bd+1)%720,n-ac>350){ac=n;let{calls:y,triangles:A,lines:E,points:L}=je.info.render;$_={calls:y,triangles:A,lines:E,points:L,textures:je.info.memory.textures},o&&(Yd={refreshHz:je.xr.getSession()?.frameRate??null,targetFps:km,supportedHz:sc.slice(),foveation:je.xr.getFoveation()??null,visualEffects:{post:m,bloom:m&&G.bloom,rayTrace:v},eyeViewports:je.xr.getCamera().cameras.map(U=>({width:U.viewport?.z??null,height:U.viewport?.w??null}))})}});})();
