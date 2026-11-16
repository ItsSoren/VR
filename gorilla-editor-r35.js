(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,jc=1,Ku=2;var Qc=1,ju=2,Kn=3,Nn=0,He=1,Be=2,ci=0,qi=1,bo=2,th=3,eh=4,Qu=5,Si=100,td=101,ed=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Sa=204,ba=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,ja=0,Qa=1,tl=2,Yi=3,el=4,nl=5,il=6,sl=7,rl=0,_d=1,xd=2,hi=0,yd=1,vd=2,Md=3,Sd=4,bd=5,Td=6,wd=7;var nh=300,ts=301,es=302,Ks=303,ol=304,To=306,qn=1e3,Mi=1001,Ta=1002,ln=1003,Ed=1004;var wo=1005;var sn=1006,al=1007;var Rn=1008;var zn=1009,ih=1010,sh=1011,js=1012,ll=1013,Ri=1014,Vn=1015,Qs=1016,cl=1017,hl=1018,tr=1020,rh=35902,oh=35899,ah=1021,lh=1022,un=1023,Ls=1026,er=1027,ul=1028,dl=1029,ch=1030,fl=1031;var pl=1033,Eo=33776,Ao=33777,Co=33778,Ro=33779,ml=35840,gl=35841,_l=35842,xl=35843,yl=36196,vl=37492,Ml=37496,Sl=37808,bl=37809,Tl=37810,wl=37811,El=37812,Al=37813,Cl=37814,Rl=37815,Pl=37816,Il=37817,Dl=37818,Ll=37819,Ul=37820,Nl=37821,Fl=36492,Ol=36494,Bl=36495,zl=36283,Vl=36284,kl=36285,Gl=36286;var Nr=2300,wa=2301,va=2302,Vc=2400,kc=2401,Gc=2402;var Ad=3200,Cd=3201;var Hl=0,Rd=1,ui="",ye="srgb",Zi="srgb-linear",Fr="linear",he="srgb";var Xi=7680;var Hc=519,Pd=512,Id=513,Dd=514,hh=515,Ld=516,Ud=517,Nd=518,Fd=519,Ea=35044,Po=35048;var uh="300 es",Un=2e3,Or=2001;var Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=1234567,Ir=Math.PI/180,Us=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function dh(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xp(i,t,e){return i!==t?(e-i)/(t-i):0}function Dr(i,t,e){return(1-e)*i+e*t}function qp(i,t,e,n){return Dr(i,t,1-Math.exp(-e*n))}function Yp(i,t=1){return t-Math.abs(dh(i,t*2)-t)}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $p(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(mu=i);let t=mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*Ir}function em(i){return i*Us}function nm(i){return(i&i-1)===0&&i!==0}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var de={DEG2RAD:Ir,RAD2DEG:Us,generateUUID:Xn,clamp:Yt,euclideanModulo:dh,mapLinear:Wp,inverseLerp:Xp,lerp:Dr,damp:qp,pingpong:Yp,smoothstep:Zp,smootherstep:Jp,randInt:$p,randFloat:Kp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:ce,denormalize:Ln},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ce=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let R=Math.sqrt(S),C=Math.atan2(R,p*w);g=Math.sin(g*C)/R,a=Math.sin(a*C)/R}let y=a*w;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new T,gu=new Ce,Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],w=s[1],S=s[4],y=s[7],R=s[2],C=s[5],I=s[8];return r[0]=o*x+a*w+l*R,r[3]=o*g+a*S+l*C,r[6]=o*p+a*y+l*I,r[1]=c*x+h*w+u*R,r[4]=c*g+h*S+u*C,r[7]=c*p+h*y+u*I,r[2]=d*x+f*w+m*R,r[5]=d*g+f*S+m*C,r[8]=d*p+f*y+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fc=new Zt;function fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=Ns("canvas");return i.style.display="block",i}var _u={};function Fs(i){i in _u||(_u[i]=!0,console.warn(i))}function Bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function om(){let i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:he,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}var ie=om();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,Aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Ns("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},am=0,Os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pc(s[o].image)):r.push(pc(s[o]))}else r=pc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lm=0,mc=new T,$e=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=sn,o=Rn,a=un,l=zn,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Xn(),this.name="",this.source=new Os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qn:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qn:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=nh;$e.DEFAULT_ANISOTROPY=1;var Te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,R=(p+1)/2,C=(h+d)/4,I=(u+x)/4,L=(m+g)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=L/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new $e(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Os(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),qo.subVectors(this.max,vr),fs.subVectors(t.a,vr),ps.subVectors(t.b,vr),ms.subVectors(t.c,vr),mi.subVectors(ps,fs),gi.subVectors(ms,ps),ki.subVectors(fs,ms);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-ki.z,ki.y,mi.z,0,-mi.x,gi.z,0,-gi.x,ki.z,0,-ki.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-ki.y,ki.x,0];return!gc(e,fs,ps,ms,qo)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,fs,ps,ms,qo))?!1:(Yo.crossVectors(mi,gi),e=[Yo.x,Yo.y,Yo.z],gc(e,fs,ps,ms,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new T,new T,new T,new T,new T,new T,new T,new T],Pn=new T,Xo=new Ke,fs=new T,ps=new T,ms=new T,mi=new T,gi=new T,ki=new T,vr=new T,qo=new T,Yo=new T,Gi=new T;function gc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cm=new Ke,Mr=new T,_c=new T,Jn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(_c)),this.expandByPoint(Mr.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},si=new T,xc=new T,Zo=new T,_i=new T,yc=new T,Jo=new T,vc=new T,bi=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xc.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(xc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zo),a=_i.dot(this.direction),l=-_i.dot(Zo),c=_i.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xc).addScaledVector(Zo,d),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){yc.subVectors(e,t),Jo.subVectors(n,t),vc.crossVectors(yc,Jo);let o=this.direction.dot(vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);let l=a*this.direction.dot(Jo.crossVectors(_i,Jo));if(l<0)return null;let c=a*this.direction.dot(yc.cross(_i));if(c<0||l+c>o)return null;let h=-a*_i.dot(vc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hm,t,um)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(n,xn),xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(n,xn)),xi.normalize(),$o.crossVectors(xn,xi),s[0]=xi.x,s[4]=$o.x,s[8]=xn.x,s[1]=xi.y,s[5]=$o.y,s[9]=xn.y,s[2]=xi.z,s[6]=$o.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],w=n[3],S=n[7],y=n[11],R=n[15],C=s[0],I=s[4],L=s[8],b=s[12],v=s[1],D=s[5],z=s[9],V=s[13],W=s[2],G=s[6],k=s[10],nt=s[14],H=s[3],ct=s[7],_t=s[11],j=s[15];return r[0]=o*C+a*v+l*W+c*H,r[4]=o*I+a*D+l*G+c*ct,r[8]=o*L+a*z+l*k+c*_t,r[12]=o*b+a*V+l*nt+c*j,r[1]=h*C+u*v+d*W+f*H,r[5]=h*I+u*D+d*G+f*ct,r[9]=h*L+u*z+d*k+f*_t,r[13]=h*b+u*V+d*nt+f*j,r[2]=m*C+x*v+g*W+p*H,r[6]=m*I+x*D+g*G+p*ct,r[10]=m*L+x*z+g*k+p*_t,r[14]=m*b+x*V+g*nt+p*j,r[3]=w*C+S*v+y*W+R*H,r[7]=w*I+S*D+y*G+R*ct,r[11]=w*L+S*z+y*k+R*_t,r[15]=w*b+S*V+y*nt+R*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],w=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,S=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,R=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,C=e*w+n*S+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=w*I,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*I,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*I,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*I,t[4]=S*I,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*I,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*I,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*I,t[8]=y*I,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*I,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*I,t[12]=R*I,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*I,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,w=l*c,S=l*h,y=l*u,R=n.x,C=n.y,I=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+y)*R,s[2]=(m-S)*R,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+p))*C,s[6]=(g+w)*C,s[7]=0,s[8]=(m+S)*I,s[9]=(g-w)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let c=1/r,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Un)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Or)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Un)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Or)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new T,In=new le,hm=new T(0,0,0),um=new T(1,1,1),xi=new T,$o=new T,xn=new T,vu=new le,Mu=new Ce,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dm=0,Su=new T,_s=new Ce,ri=new le,Ko=new T,Sr=new T,fm=new T,pm=new Ce,bu=new T(1,0,0),Tu=new T(0,1,0),wu=new T(0,0,1),Eu={type:"added"},mm={type:"removed"},xs={type:"childadded",child:null},Mc={type:"childremoved",child:null},Ae=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new An,n=new Ce,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(Tu,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(Tu,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ko.copy(t):Ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Sr,Ko,this.up):ri.lookAt(Ko,Sr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mm),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,fm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ae.DEFAULT_UP=new T(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new T,oi=new T,Sc=new T,ai=new T,ys=new T,vs=new T,Au=new T,bc=new T,Tc=new T,wc=new T,Ec=new Te,Ac=new Te,Cc=new Te,an=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),oi.subVectors(n,e),Sc.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(Sc),c=oi.dot(oi),h=oi.dot(Sc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ec.setScalar(0),Ac.setScalar(0),Cc.setScalar(0),Ec.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,n),Cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ec,r.x),o.addScaledVector(Ac,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),oi.subVectors(t,e),Dn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),vs.subVectors(r,n),bc.subVectors(t,n);let l=ys.dot(bc),c=vs.dot(bc);if(l<=0&&c<=0)return e.copy(n);Tc.subVectors(t,s);let h=ys.dot(Tc),u=vs.dot(Tc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ys,o);wc.subVectors(t,r);let f=ys.dot(wc),m=vs.dot(wc);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(vs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Au.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Au,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=dh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rc(o,r,t+1/3),this.g=Rc(o,r,t),this.b=Rc(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ie.workingToColorSpace(qe.copy(this),t),Math.round(Yt(qe.r*255,0,255))*65536+Math.round(Yt(qe.g*255,0,255))*256+Math.round(Yt(qe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ye){ie.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(jo);let n=Dr(yi.h,jo.h,e),s=Dr(yi.s,jo.s,e),r=Dr(yi.l,jo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ot;Ot.NAMES=zd;var gm=0,Fn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=qi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=ba,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ge=class extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new T,Qo=new at,_m=0,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}};var zr=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},xm=0,En=new le,Pc=new Ae,Ms=new T,yn=new Ke,br=new Ke,Fe=new T,ne=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fh(t)?Vr:zr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(yn.min,br.min),yn.expandByPoint(Fe),Fe.addVectors(yn.max,br.max),yn.expandByPoint(Fe)):(yn.expandByPoint(br.min),yn.expandByPoint(br.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Fe.add(Ms)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new T,l[L]=new T;let c=new T,h=new T,u=new T,d=new at,f=new at,m=new at,x=new T,g=new T;function p(L,b,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[L].add(x),a[b].add(x),a[v].add(x),l[L].add(g),l[b].add(g),l[v].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,b=w.length;L<b;++L){let v=w[L],D=v.start,z=v.count;for(let V=D,W=D+z;V<W;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new T,y=new T,R=new T,C=new T;function I(L){R.fromBufferAttribute(s,L),C.copy(R);let b=a[L];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(C,b);let D=y.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,b=w.length;L<b;++L){let v=w[L],D=v.start,z=v.count;for(let V=D,W=D+z;V<W;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new le,Hi=new bi,ta=new Jn,Ru=new T,ea=new T,na=new T,ia=new T,Ic=new T,sa=new T,Pu=new T,ra=new T,Kt=class extends Ae{constructor(t=new ne,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ic.fromBufferAttribute(u,t),o?sa.addScaledVector(Ic,h):sa.addScaledVector(Ic.sub(e),h))}e.add(sa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(ta.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ta,Ru)===null||Hi.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,R=S;y<R;y+=3){let C=a.getX(y),I=a.getX(y+1),L=a.getX(y+2);s=oa(this,p,t,n,c,h,u,C,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);s=oa(this,o,t,n,c,h,u,w,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,R=S;y<R;y+=3){let C=y,I=y+1,L=y+2;s=oa(this,p,t,n,c,h,u,C,I,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let w=g,S=g+1,y=g+2;s=oa(this,o,t,n,c,h,u,w,S,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ym(i,t,e,n,s,r,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Nn,a),l===null)return null;ra.copy(a),ra.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:i}}function oa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ea),i.getVertexPosition(l,na),i.getVertexPosition(c,ia);let h=ym(i,t,e,n,ea,na,ia,Pu);if(h){let u=new T;an.getBarycoord(Pu,ea,na,ia,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new T,materialIndex:0};an.getNormal(ea,na,ia,d.normal),h.face=d,h.barycoord=u}return h}var re=class i extends ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function m(x,g,p,w,S,y,R,C,I,L,b){let v=y/I,D=R/L,z=y/2,V=R/2,W=C/2,G=I+1,k=L+1,nt=0,H=0,ct=new T;for(let _t=0;_t<k;_t++){let j=_t*D-V;for(let Mt=0;Mt<G;Mt++){let Et=Mt*v-z;ct[x]=Et*w,ct[g]=j*S,ct[p]=W,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[g]=0,ct[p]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Mt/I),u.push(1-_t/L),nt+=1}}for(let _t=0;_t<L;_t++)for(let j=0;j<I;j++){let Mt=d+j+G*_t,Et=d+j+G*(_t+1),Ft=d+(j+1)+G*(_t+1),Rt=d+(j+1)+G*_t;l.push(Mt,Et,Rt),l.push(Et,Ft,Rt),H+=6}a.addGroup(f,H,b),f+=H,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function vm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Vd={clone:ns,merge:Qe},Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new T,Iu=new at,Du=new at,Ye=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Du),e.subVectors(Du,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,bs=1,Pa=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Ss,bs,t,e);r.layers=this.layers,this.add(r);let o=new Ye(Ss,bs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(Ss,bs,t,e);a.layers=this.layers,this.add(a);let l=new Ye(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Gr=class extends $e{constructor(t=[],e=ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ia=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new re(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ci});r.uniforms.tEquirect.value=e;let o=new Kt(s,r),a=e.minFilter;return e.minFilter===Rn&&(e.minFilter=sn),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Je=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new T,ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gs=class extends Fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,Tr=new T,ws=new T,Es=new T,As=new at,wr=new at,kd=new le,aa=new T,Er=new T,la=new T,Lu=new at,Dc=new at,Uu=new at,Xr=class extends Ae{constructor(t=new Gs){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wr(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new ks(n,3,0,!1)),Ts.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ca(aa.set(-.5,-.5,0),Es,o,ws,s,r),ca(Er.set(.5,-.5,0),Es,o,ws,s,r),ca(la.set(.5,.5,0),Es,o,ws,s,r),Lu.set(0,0),Dc.set(1,0),Uu.set(1,1);let a=t.ray.intersectTriangle(aa,Er,la,!1,Tr);if(a===null&&(ca(Er.set(-.5,.5,0),Es,o,ws,s,r),Dc.set(0,1),a=t.ray.intersectTriangle(aa,la,Er,!1,Tr),a===null))return;let l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:an.getInterpolation(Tr,aa,Er,la,Lu,Dc,Uu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ca(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=r*As.x-s*As.y,wr.y=s*As.x+r*As.y):wr.copy(As),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(kd)}var Ti=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ln,h=ln,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new le,Nu=new le,ha=[],Fu=new Ke,Tm=new le,Ar=new Kt,Cr=new Jn,qr=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Fu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Cr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Nu.multiplyMatrices(n,Cs),Ar.matrixWorld=Nu,Ar.raycast(t,ha);for(let o=0,a=ha.length;o<a;o++){let l=ha[o];l.instanceId=r,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,ul,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lc=new T,wm=new T,Em=new Zt,Ze=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lc.subVectors(n,e).cross(wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Em.getNormalMatrix(t),s=this.coplanarPoint(Lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Jn,Am=new at(.5,.5),ua=new T,Ws=class{constructor(t=new Ze,e=new Ze,n=new Ze,s=new Ze,r=new Ze,o=new Ze){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],w=r[12],S=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-m,R-w).normalize(),s[1].setComponents(c+o,f+h,p+m,R+w).normalize(),s[2].setComponents(c+a,f+u,p+x,R+S).normalize(),s[3].setComponents(c-a,f-u,p-x,R-S).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,R-y).normalize(),e===Un)s[5].setComponents(c+l,f+d,p+g,R+y).normalize();else if(e===Or)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=Am.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wi=class extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Da=new T,La=new T,Ou=new le,Rr=new bi,da=new Jn,Uc=new T,Bu=new T,Yr=class extends Ae{constructor(t=new ne,e=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Da.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Da.distanceTo(La);t.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Ou.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),w=h.getX(x+1),S=fa(this,t,Rr,l,p,w,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=fa(this,t,Rr,l,x,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=fa(this,t,Rr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=fa(this,t,Rr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Da.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Da,La,Uc,Bu)>n)return;Uc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uc);if(!(c<t.near||c>t.far))return{distance:c,point:Bu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var zu=new T,Vu=new T,Zr=class extends Yr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zu.fromBufferAttribute(e,s),Vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(Vu);t.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jr=class extends Yr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var $n=class extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$r=class extends $e{constructor(t,e,n=Ri,s,r,o,a=ln,l=ln,c,h=Ls,u=1){if(h!==Ls&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kr=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Oe=class i extends ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new T,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cn=class i extends ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function w(){let y=new T,R=new T,C=0,I=(e-t)/n;for(let L=0;L<=r;L++){let b=[],v=L/r,D=v*(e-t)+t;for(let z=0;z<=s;z++){let V=z/s,W=V*l+a,G=Math.sin(W),k=Math.cos(W);R.x=D*G,R.y=-v*n+g,R.z=D*k,u.push(R.x,R.y,R.z),y.set(G,I,k).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-v),b.push(m++)}x.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){let v=x[b][L],D=x[b+1][L],z=x[b+1][L+1],V=x[b][L+1];(t>0||b!==0)&&(h.push(v,D,V),C+=3),(e>0||b!==r-1)&&(h.push(D,z,V),C+=3)}c.addGroup(p,C,0),p+=C}function S(y){let R=m,C=new at,I=new T,L=0,b=y===!0?t:e,v=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let D=m;for(let z=0;z<=s;z++){let W=z/s*l+a,G=Math.cos(W),k=Math.sin(W);I.x=b*k,I.y=g*v,I.z=b*G,u.push(I.x,I.y,I.z),d.push(0,v,0),C.x=G*.5+.5,C.y=k*.5*v+.5,f.push(C.x,C.y),m++}for(let z=0;z<s;z++){let V=R+z,W=D+z;y===!0?h.push(W,W+1,V):h.push(W+1,W,V),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jr=class i extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xs=class i extends ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let S=new T,y=new T,R=new T;for(let C=0;C<e.length;C+=3)f(e[C+0],S),f(e[C+1],y),f(e[C+2],R),l(S,y,R,w)}function l(w,S,y,R){let C=R+1,I=[];for(let L=0;L<=C;L++){I[L]=[];let b=w.clone().lerp(y,L/C),v=S.clone().lerp(y,L/C),D=C-L;for(let z=0;z<=D;z++)z===0&&L===C?I[L][z]=b:I[L][z]=b.clone().lerp(v,z/D)}for(let L=0;L<C;L++)for(let b=0;b<2*(C-L)-1;b++){let v=Math.floor(b/2);b%2===0?(d(I[L][v+1]),d(I[L+1][v]),d(I[L][v])):(d(I[L][v+1]),d(I[L+1][v+1]),d(I[L+1][v]))}}function c(w){let S=new T;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(w),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let w=new T;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];let y=g(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;o.push(y,1-R)}m(),u()}function u(){for(let w=0;w<o.length;w+=6){let S=o[w+0],y=o[w+2],R=o[w+4],C=Math.max(S,y,R),I=Math.min(S,y,R);C>.9&&I<.1&&(S<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,S){let y=w*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function m(){let w=new T,S=new T,y=new T,R=new T,C=new at,I=new at,L=new at;for(let b=0,v=0;b<r.length;b+=9,v+=6){w.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),C.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),R.copy(w).add(S).add(y).divideScalar(3);let D=g(R);x(C,v+0,w,D),x(I,v+2,S,D),x(L,v+4,y,D)}}function x(w,S,y,R){R<0&&w.x===1&&(o[S]=w.x-1),y.x===0&&y.z===0&&(o[S]=R/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new T,s=[],r=[],o=[],a=new T,l=new le;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qs=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ua=class extends qs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var pa=new T,Nc=new mh,Fc=new mh,Oc=new mh,Na=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),c=pa);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Nc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Fc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Oc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Nc.calc(l),Fc.calc(l),Oc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ku(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Cm(i,t){let e=1-i;return e*e*t}function Rm(i,t){return 2*(1-i)*i*t}function Pm(i,t){return i*i*t}function Lr(i,t,e,n){return Cm(i,t)+Rm(i,e)+Pm(i,n)}function Im(i,t){let e=1-i;return e*e*e*t}function Dm(i,t){let e=1-i;return 3*e*e*i*t}function Lm(i,t){return 3*(1-i)*i*i*t}function Um(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return Im(i,t)+Dm(i,e)+Lm(i,n)+Um(i,s)}var Qr=class extends vn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends vn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y),Ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends vn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends vn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends vn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends vn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ku(a,l.x,c.x,h.x,u.x),ku(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Na,CubicBezierCurve:Qr,CubicBezierCurve3:Fa,EllipseCurve:qs,LineCurve:to,LineCurve3:Oa,QuadraticBezierCurve:eo,QuadraticBezierCurve3:Ba,SplineCurve:no}),za=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},io=class extends za{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new eo(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Qr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new no(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new qs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ji=class extends io{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new io().fromJSON(s))}return this}};function Nm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Vm(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return so(r,o,e,a,l,c,0),o}function Gd(i,t,e,n,s){let r;if(s===Km(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gu(o/n|0,i[o],i[o+1],r);return r&&Ys(r,r.next)&&(oo(r),r=r.next),r}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||be(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Om(i,n,s,r):Fm(i)){t.push(l.i,i.i,c.i),oo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Bm($i(i),t),so(i,t,e,n,s,r,2)):o===2&&zm(i,t,e,n,s,r):so($i(i),t,e,n,s,r,1);break}}}function Fm(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Pr(s,a,r,l,o,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Om(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),p=Xc(f,m,t,e,n),w=Xc(x,g,t,e,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=w;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Pr(a,h,l,u,c,d,S.x,S.y)&&be(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Pr(a,h,l,u,c,d,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Pr(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Bm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ys(n,s)&&Wd(n,e,e.next,s)&&ro(n,s)&&ro(s,n)&&(t.push(n.i,e.i,s.i),oo(e),oo(e.next),e=i=s),e=e.next}while(e!==i);return $i(e)}function zm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let l=Xd(o,a);o=$i(o,o.next),l=$i(l,l.next),so(o,t,e,n,s,r,0),so(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Vm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Gd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ym(c))}s.sort(km);for(let r=0;r<s.length;r++)e=Gm(s[r],e);return e}function km(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Gm(i,t){let e=Hm(i,t);if(!e)return t;let n=Xd(e,i);return $i(n,n.next),$i(e,e.next)}function Hm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ys(i,e))return e;do{if(Ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ro(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Wm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Wm(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Xm(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qm(s)}function qm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Pr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Hd(i,t,e,n,s,r,o,a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jm(i,t)&&(ro(i,t)&&ro(t,i)&&$m(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Ys(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ys(i,t){return i.x===t.x&&i.y===t.y}function Wd(i,t,e,n){let s=ga(be(i,t,e)),r=ga(be(i,t,n)),o=ga(be(e,n,i)),a=ga(be(e,n,t));return!!(s!==r&&o!==a||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ro(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function $m(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xd(i,t){let e=qc(i.i,i.x,i.y),n=qc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yc=class{static triangulate(t,e,n=2){return Nm(t,e,n)}},Wn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hu(t),Wu(n,t);let o=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Wu(n,e[l]);let a=Yc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ao=class i extends ne{constructor(t=new Ji([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new kt(s,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:jm,S,y=!1,R,C,I,L;p&&(S=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),C=new T,I=new T,L=new T),d||(g=0,f=0,m=0,x=0);let b=a.extractPoints(c),v=b.shape,D=b.holes;if(!Wn.isClockWise(v)){v=v.reverse();for(let it=0,Q=D.length;it<Q;it++){let $=D[it];Wn.isClockWise($)&&(D[it]=$.reverse())}}function V(it){let $=10000000000000001e-36,K=it[0];for(let ht=1;ht<=it.length;ht++){let rt=ht%it.length,yt=it[rt],Ht=yt.x-K.x,Gt=yt.y-K.y,E=Ht*Ht+Gt*Gt,_=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(K.x),Math.abs(K.y)),A=$*_*_;if(E<=A){it.splice(rt,1),ht--;continue}K=yt}}V(v),D.forEach(V);let W=D.length,G=v;for(let it=0;it<W;it++){let Q=D[it];v=v.concat(Q)}function k(it,Q,$){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,$)}let nt=v.length;function H(it,Q,$){let K,ht,rt,yt=it.x-Q.x,Ht=it.y-Q.y,Gt=$.x-it.x,E=$.y-it.y,_=yt*yt+Ht*Ht,A=yt*E-Ht*Gt;if(Math.abs(A)>Number.EPSILON){let N=Math.sqrt(_),Z=Math.sqrt(Gt*Gt+E*E),B=Q.x-Ht/N,ut=Q.y+yt/N,tt=$.x-E/Z,lt=$.y+Gt/Z,ot=((tt-B)*E-(lt-ut)*Gt)/(yt*E-Ht*Gt);K=B+yt*ot-it.x,ht=ut+Ht*ot-it.y;let J=K*K+ht*ht;if(J<=2)return new at(K,ht);rt=Math.sqrt(J/2)}else{let N=!1;yt>Number.EPSILON?Gt>Number.EPSILON&&(N=!0):yt<-Number.EPSILON?Gt<-Number.EPSILON&&(N=!0):Math.sign(Ht)===Math.sign(E)&&(N=!0),N?(K=-Ht,ht=yt,rt=Math.sqrt(_)):(K=yt,ht=Ht,rt=Math.sqrt(_/2))}return new at(K/rt,ht/rt)}let ct=[];for(let it=0,Q=G.length,$=Q-1,K=it+1;it<Q;it++,$++,K++)$===Q&&($=0),K===Q&&(K=0),ct[it]=H(G[it],G[$],G[K]);let _t=[],j,Mt=ct.concat();for(let it=0,Q=W;it<Q;it++){let $=D[it];j=[];for(let K=0,ht=$.length,rt=ht-1,yt=K+1;K<ht;K++,rt++,yt++)rt===ht&&(rt=0),yt===ht&&(yt=0),j[K]=H($[K],$[rt],$[yt]);_t.push(j),Mt=Mt.concat(j)}let Et;if(g===0)Et=Wn.triangulateShape(G,D);else{let it=[],Q=[];for(let $=0;$<g;$++){let K=$/g,ht=f*Math.cos(K*Math.PI/2),rt=m*Math.sin(K*Math.PI/2)+x;for(let yt=0,Ht=G.length;yt<Ht;yt++){let Gt=k(G[yt],ct[yt],rt);Ct(Gt.x,Gt.y,-ht),K===0&&it.push(Gt)}for(let yt=0,Ht=W;yt<Ht;yt++){let Gt=D[yt];j=_t[yt];let E=[];for(let _=0,A=Gt.length;_<A;_++){let N=k(Gt[_],j[_],rt);Ct(N.x,N.y,-ht),K===0&&E.push(N)}K===0&&Q.push(E)}}Et=Wn.triangulateShape(it,Q)}let Ft=Et.length,Rt=m+x;for(let it=0;it<nt;it++){let Q=d?k(v[it],Mt[it],Rt):v[it];y?(I.copy(R.normals[0]).multiplyScalar(Q.x),C.copy(R.binormals[0]).multiplyScalar(Q.y),L.copy(S[0]).add(I).add(C),Ct(L.x,L.y,L.z)):Ct(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<nt;Q++){let $=d?k(v[Q],Mt[Q],Rt):v[Q];y?(I.copy(R.normals[it]).multiplyScalar($.x),C.copy(R.binormals[it]).multiplyScalar($.y),L.copy(S[it]).add(I).add(C),Ct(L.x,L.y,L.z)):Ct($.x,$.y,u/h*it)}for(let it=g-1;it>=0;it--){let Q=it/g,$=f*Math.cos(Q*Math.PI/2),K=m*Math.sin(Q*Math.PI/2)+x;for(let ht=0,rt=G.length;ht<rt;ht++){let yt=k(G[ht],ct[ht],K);Ct(yt.x,yt.y,u+$)}for(let ht=0,rt=D.length;ht<rt;ht++){let yt=D[ht];j=_t[ht];for(let Ht=0,Gt=yt.length;Ht<Gt;Ht++){let E=k(yt[Ht],j[Ht],K);y?Ct(E.x,E.y+S[h-1].y,S[h-1].x+$):Ct(E.x,E.y,u+$)}}}Y(),et();function Y(){let it=s.length/3;if(d){let Q=0,$=nt*Q;for(let K=0;K<Ft;K++){let ht=Et[K];Tt(ht[2]+$,ht[1]+$,ht[0]+$)}Q=h+g*2,$=nt*Q;for(let K=0;K<Ft;K++){let ht=Et[K];Tt(ht[0]+$,ht[1]+$,ht[2]+$)}}else{for(let Q=0;Q<Ft;Q++){let $=Et[Q];Tt($[2],$[1],$[0])}for(let Q=0;Q<Ft;Q++){let $=Et[Q];Tt($[0]+nt*h,$[1]+nt*h,$[2]+nt*h)}}n.addGroup(it,s.length/3-it,0)}function et(){let it=s.length/3,Q=0;St(G,Q),Q+=G.length;for(let $=0,K=D.length;$<K;$++){let ht=D[$];St(ht,Q),Q+=ht.length}n.addGroup(it,s.length/3-it,1)}function St(it,Q){let $=it.length;for(;--$>=0;){let K=$,ht=$-1;ht<0&&(ht=it.length-1);for(let rt=0,yt=h+g*2;rt<yt;rt++){let Ht=nt*rt,Gt=nt*(rt+1),E=Q+K+Ht,_=Q+ht+Ht,A=Q+ht+Gt,N=Q+K+Gt;zt(E,_,A,N)}}}function Ct(it,Q,$){l.push(it),l.push(Q),l.push($)}function Tt(it,Q,$){jt(it),jt(Q),jt($);let K=s.length/3,ht=w.generateTopUV(n,s,K-3,K-2,K-1);P(ht[0]),P(ht[1]),P(ht[2])}function zt(it,Q,$,K){jt(it),jt(Q),jt(K),jt(Q),jt($),jt(K);let ht=s.length/3,rt=w.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);P(rt[0]),P(rt[1]),P(rt[3]),P(rt[1]),P(rt[2]),P(rt[3])}function jt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function P(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,t.options)}},jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-m),new at(x,1-p)]:[new at(a,1-l),new at(h,1-u),new at(f,1-m),new at(g,1-p)]}};function Qm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends Xs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var lo=class i extends Xs{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},cn=class i extends ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*d-o;for(let S=0;S<c;S++){let y=S*u-r;m.push(y,-w,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let S=w+c*p,y=w+c*(p+1),R=w+1+c*(p+1),C=w+1+c*p;f.push(S,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zs=class i extends ne{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new T,m=new at;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let w=p+g,S=w,y=w+n+1,R=w+n+2,C=w+1;a.push(S,y,C),a.push(y,R,C)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},co=class i extends ne{constructor(t=new Ji([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(r,3)),this.setAttribute("uv",new kt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let w=m[g];Wn.isClockWise(w)===!0&&(m[g]=w.reverse())}let x=Wn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let w=m[g];f=f.concat(w)}for(let g=0,p=f.length;g<p;g++){let w=f[g];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let g=0,p=x.length;g<p;g++){let w=x[g],S=w[0]+u,y=w[1]+u,R=w[2]+u;n.push(S,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ho=class i extends ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new T,d=new T,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let w=[],S=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let C=R/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(C+y,1-S),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let S=h[p][w+1],y=h[p][w],R=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&f.push(S,y,C),(p!==n-1||l<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},uo=class i extends Xs{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},fo=class i extends ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,w=(s+1)*f+m;o.push(x,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var hn=class extends Fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var je=class extends Fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Va=class extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ka=class extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ga=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kc:r=t,a=2*e-n;break;case Gc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:o=t,l=2*n-e;break;case Gc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,w=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+w*o[c+R]+S*o[l+R]+y*o[u+R];return r}},Ha=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Wa=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&eg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=wa;var Ei=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Nr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ce.slerpFlat(r,0,o,c-a,o,c,l);return r}},po=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Nr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="vector";var Ma={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ja=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qd=new Ja,Js=class{constructor(t){this.manager=t!==void 0?t:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Js.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=new WeakMap,$a=class extends Js{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ma.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Rs.get(o);u===void 0&&(u=[],Rs.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=Ns("img");function l(){h(),e&&e(this);let u=Rs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Rs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ma.remove(`image:${t}`);let d=Rs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Rs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ma.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var mo=class extends Js{constructor(t){super(t)}load(t,e,n,s){let r=new $e,o=new $a(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},go=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ji=class extends go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bc=new le,Xu=new T,qu=new T,Zc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _o=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends Zc{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ka=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gh="\\[\\]\\.:\\/",ng=new RegExp("["+gh+"]","g"),_h="[^"+gh+"]",ig="[^"+gh.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",_h),rg=/(WCOD+)?/.source.replace("WCOD",ig),og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),lg=new RegExp("^"+sg+rg+og+ag+"$"),cg=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(t){let e=lg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=$c;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var Yu=new le,xo=class{constructor(t,e,n=0,s=1/0){this.ray=new bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(Zu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kc(t[s],this,n,e);return n.sort(Zu),n}};function Zu(i,t){return i.distance-t.distance}function Kc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}var $s=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ju=new T,xa=new T,Ps=new T,Is=new T,zc=new T,hg=new T,ug=new T,yo=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ju.subVectors(t,this.start),xa.subVectors(this.end,this.start);let n=xa.dot(xa),r=xa.dot(Ju)/n;return e&&(r=Yt(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=hg,n=ug){let s=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;Ps.subVectors(c,a),Is.subVectors(h,l),zc.subVectors(a,l);let u=Ps.dot(Ps),d=Is.dot(Is),f=Is.dot(zc);if(u<=s&&d<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(u<=s)r=0,o=f/d,o=Yt(o,0,1);else{let m=Ps.dot(zc);if(d<=s)o=0,r=Yt(-m/u,0,1);else{let x=Ps.dot(Is),g=u*d-x*x;g!==0?r=Yt((x*f-m*d)/g,0,1):r=0,o=(x*r+f)/d,o<0?(o=0,r=Yt(-m/u,0,1)):o>1&&(o=1,r=Yt((x-m)/u,0,1))}}return e.copy(a).add(Ps.multiplyScalar(r)),n.copy(l).add(Is.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var vo=class extends Zr{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ot(n),s=new Ot(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new ne;h.setAttribute("position",new kt(l,3)),h.setAttribute("color",new kt(c,3));let u=new wi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ya=new Ke,Mo=class extends Zr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ne;r.setIndex(new ve(n,1)),r.setAttribute("position",new ve(s,3)),super(r,new wi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ya.setFromObject(this.object),ya.isEmpty())return;let t=ya.min,e=ya.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var So=class extends Yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function xh(i,t,e,n){let s=dg(n);switch(e){case ah:return i*t;case ul:return i*t/s.components*s.byteLength;case dl:return i*t/s.components*s.byteLength;case ch:return i*t*2/s.components*s.byteLength;case fl:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case pl:return i*t*4/s.components*s.byteLength;case Eo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case xl:return Math.max(i,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(i,8)*Math.max(t,8)/2;case yl:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case zn:case ih:return{byteLength:1,components:1};case js:case sh:case Qs:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case Ri:case ll:case Vn:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _f(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,E_=`#define DISTANCE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,D_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,O_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,V_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,H_=`#define TOON
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
}`,W_=`#define TOON
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
}`,X_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,J_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:vg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:bg,aomap_fragment:Tg,aomap_pars_fragment:wg,batching_pars_vertex:Eg,batching_vertex:Ag,begin_vertex:Cg,beginnormal_vertex:Rg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Vg,common:kg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:$g,envmap_common_pars_fragment:Kg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:x0,lights_fragment_end:y0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:b0,map_fragment:T0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:A0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:R0,morphinstance_vertex:P0,morphcolor_vertex:I0,morphnormal_vertex:D0,morphtarget_pars_vertex:L0,morphtarget_vertex:U0,normal_fragment_begin:N0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:$0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:t_,shadowmap_vertex:e_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:h_,transmission_fragment:u_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:x_,backgroundCube_vert:y_,backgroundCube_frag:v_,cube_vert:M_,cube_frag:S_,depth_vert:b_,depth_frag:T_,distanceRGBA_vert:w_,distanceRGBA_frag:E_,equirect_vert:A_,equirect_frag:C_,linedashed_vert:R_,linedashed_frag:P_,meshbasic_vert:I_,meshbasic_frag:D_,meshlambert_vert:L_,meshlambert_frag:U_,meshmatcap_vert:N_,meshmatcap_frag:F_,meshnormal_vert:O_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:V_,meshphysical_vert:k_,meshphysical_frag:G_,meshtoon_vert:H_,meshtoon_frag:W_,points_vert:X_,points_frag:q_,shadow_vert:Y_,shadow_frag:Z_,sprite_vert:J_,sprite_frag:$_},bt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Qe([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Qe([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Qe([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Qe([bt.common,bt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Qe([bt.lights,bt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Wl={r:0,b:0,g:0},is=new An,K_=new le;function j_(i,t,e,n,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1,R=m(S);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){let R=m(y);R&&(R.isCubeTexture||R.mapping===To)?(h===void 0&&(h=new Kt(new re(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ns(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(y.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(is)),h.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Kt(new cn(2,2),new On({name:"BackgroundMaterial",uniforms:ns(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Wl,ph(i)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,y,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:g,dispose:w}}function Q_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,D,z,V,W){let G=!1,k=u(V,z,D);r!==k&&(r=k,c(r.object)),G=f(v,V,z,W),G&&m(v,V,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(v,D,z,V),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,D,z){let V=z.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let G=W[D.id];G===void 0&&(G={},W[D.id]=G);let k=G[V];return k===void 0&&(k=d(l()),G[V]=k),k}function d(v){let D=[],z=[],V=[];for(let W=0;W<e;W++)D[W]=0,z[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,D,z,V){let W=r.attributes,G=D.attributes,k=0,nt=z.getAttributes();for(let H in nt)if(nt[H].location>=0){let _t=W[H],j=G[H];if(j===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),_t===void 0||_t.attribute!==j||j&&_t.data!==j.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function m(v,D,z,V){let W={},G=D.attributes,k=0,nt=z.getAttributes();for(let H in nt)if(nt[H].location>=0){let _t=G[H];_t===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));let j={};j.attribute=_t,_t&&_t.data&&(j.data=_t.data),W[H]=j,k++}r.attributes=W,r.attributesNum=k,r.index=V}function x(){let v=r.newAttributes;for(let D=0,z=v.length;D<z;D++)v[D]=0}function g(v){p(v,0)}function p(v,D){let z=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;z[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),W[v]!==D&&(i.vertexAttribDivisor(v,D),W[v]=D)}function w(){let v=r.newAttributes,D=r.enabledAttributes;for(let z=0,V=D.length;z<V;z++)D[z]!==v[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function S(v,D,z,V,W,G,k){k===!0?i.vertexAttribIPointer(v,D,z,W,G):i.vertexAttribPointer(v,D,z,V,W,G)}function y(v,D,z,V){x();let W=V.attributes,G=z.getAttributes(),k=D.defaultAttributeValues;for(let nt in G){let H=G[nt];if(H.location>=0){let ct=W[nt];if(ct===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){let _t=ct.normalized,j=ct.itemSize,Mt=t.get(ct);if(Mt===void 0)continue;let Et=Mt.buffer,Ft=Mt.type,Rt=Mt.bytesPerElement,Y=Ft===i.INT||Ft===i.UNSIGNED_INT||ct.gpuType===ll;if(ct.isInterleavedBufferAttribute){let et=ct.data,St=et.stride,Ct=ct.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)p(H.location+Tt,et.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)g(H.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Tt=0;Tt<H.locationSize;Tt++)S(H.location+Tt,j/H.locationSize,Ft,_t,St*Rt,(Ct+j/H.locationSize*Tt)*Rt,Y)}else{if(ct.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)p(H.location+et,ct.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let et=0;et<H.locationSize;et++)g(H.location+et);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let et=0;et<H.locationSize;et++)S(H.location+et,j/H.locationSize,Ft,_t,j*Rt,j/H.locationSize*et*Rt,Y)}}else if(k!==void 0){let _t=k[nt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(H.location,_t);break;case 3:i.vertexAttrib3fv(H.location,_t);break;case 4:i.vertexAttrib4fv(H.location,_t);break;default:i.vertexAttrib1fv(H.location,_t)}}}}w()}function R(){L();for(let v in n){let D=n[v];for(let z in D){let V=D[z];for(let W in V)h(V[W].object),delete V[W];delete D[z]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;let D=n[v.id];for(let z in D){let V=D[z];for(let W in V)h(V[W].object),delete V[W];delete D[z]}delete n[v.id]}function I(v){for(let D in n){let z=n[D];if(z[v.id]===void 0)continue;let V=z[v.id];for(let W in V)h(V[W].object),delete V[W];delete z[v.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function tx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let L=I===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==zn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vn&&!L)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function nx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ze,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let w=r?0:n,S=w*4,y=p.clippingState||null;l.value=y,y=h(m,d,S,f);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==x;++S,y+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function ix(i){let t=new WeakMap;function e(o,a){return a===Ks?o.mapping=ts:a===ol&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ks||a===ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ia(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=4,Yd=[.125,.215,.35,.446,.526,.582],os=20,yh=new _o,Zd=new Ot,vh=null,Mh=0,Sh=0,bh=!1,rs=(1+Math.sqrt(5))/2,nr=1/rs,Jd=[new T(-rs,nr,0),new T(rs,nr,0),new T(-nr,0,rs),new T(nr,0,rs),new T(0,rs,-nr),new T(0,rs,nr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],sx=new T,rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=sx}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,Mh,Sh),this._renderer.xr.enabled=bh,t.scissorTest=!1,Xl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Qs,format:un,colorSpace:Zi,depthBuffer:!1},s=$d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rx(r)),this._blurMaterial=ox(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,yh)}_sceneToCubeUV(t,e,n,s,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zd),u.toneMapping=hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Ge({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Kt(new re,x),p=!1,w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,p=!0):(x.color.copy(Zd),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let R=this._cubeSize;Xl(s,y*R,S>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Xl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,yh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jd[(s-r-1)%Jd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):os;g>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);let p=[],w=0;for(let I=0;I<os;++I){let L=I/x,b=Math.exp(-L*L/2);p.push(b),I===0?w+=b:I<g&&(w+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-ir?s-S+ir:0),C=4*(this._cubeSize-y);Xl(e,R,C,3*y,2*y),l.setRenderTarget(e),l.render(u,yh)}};function rx(i){let t=[],e=[],n=[],s=i,r=i-ir+1+Yd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ir?l=Yd[o-i+ir-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,w=new Float32Array(x*m*f),S=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let C=0;C<f;C++){let I=C%3*2/3-1,L=C>2?0:-1,b=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];w.set(b,x*m*C),S.set(d,g*m*C);let v=[C,C,C,C,C,C];y.set(v,p*m*C)}let R=new ne;R.setAttribute("position",new ve(w,x)),R.setAttribute("uv",new ve(S,g)),R.setAttribute("faceIndex",new ve(y,p)),t.push(R),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $d(i,t,e){let n=new Zn(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ox(i,t,e){let n=new Float32Array(os),s=new T(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Kd(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function jd(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function ax(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ks||l===ol,h=l===ts||l===es;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new rr(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let S=0,y=w.length;S<y;S+=3){let R=w[S+0],C=w[S+1],I=w[S+2];d.push(R,C,C,I,I,R)}}else if(m!==void 0){let w=m.array;x=m.version;for(let S=0,y=w.length/3-1;S<y;S+=3){let R=S+0,C=S+1,I=S+2;d.push(R,C,C,I,I,R)}}else return;let g=new(fh(d)?Vr:zr)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ux(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dx(i,t,e){let n=new WeakMap,s=new Te;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*R*4*u),I=new Br(C,y,R,u);I.type=Vn,I.needsUpdate=!0;let L=S*4;for(let v=0;v<u;v++){let D=g[v],z=p[v],V=w[v],W=y*R*4*v;for(let G=0;G<D.count;G++){let k=G*L;f===!0&&(s.fromBufferAttribute(D,G),C[W+k+0]=s.x,C[W+k+1]=s.y,C[W+k+2]=s.z,C[W+k+3]=0),m===!0&&(s.fromBufferAttribute(z,G),C[W+k+4]=s.x,C[W+k+5]=s.y,C[W+k+6]=s.z,C[W+k+7]=0),x===!0&&(s.fromBufferAttribute(V,G),C[W+k+8]=s.x,C[W+k+9]=s.y,C[W+k+10]=s.z,C[W+k+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new at(y,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var xf=new $e,Qd=new $r(1,1),yf=new Br,vf=new Ra,Mf=new Gr,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),De(e,n)}}function yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),De(e,n)}}function vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),De(e,n)}}function Mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qd.compareFunction=hh,r=Qd):r=xf,e.setTexture2D(t||r,s)}function Px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vf,s)}function Ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mf,s)}function Dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yf,s)}function Lx(i){switch(i){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return yx;case 35676:return vx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return bx;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ex;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ux(i,t){i.uniform1fv(this.addr,t)}function Nx(i,t){let e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function Fx(i,t){let e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Ox(i,t){let e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function Bx(i,t){let e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zx(i,t){let e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vx(i,t){let e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Gx(i,t){i.uniform2iv(this.addr,t)}function Hx(i,t){i.uniform3iv(this.addr,t)}function Wx(i,t){i.uniform4iv(this.addr,t)}function Xx(i,t){i.uniform1uiv(this.addr,t)}function qx(i,t){i.uniform2uiv(this.addr,t)}function Yx(i,t){i.uniform3uiv(this.addr,t)}function Zx(i,t){i.uniform4uiv(this.addr,t)}function Jx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xf,r[o])}function $x(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vf,r[o])}function Kx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mf,r[o])}function jx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yf,r[o])}function Qx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return kx;case 35667:case 35671:return Gx;case 35668:case 35672:return Hx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lx(e.type)}},Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qx(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Th=/(\w+)(\])?(\[|\.)?/g;function of(i,t){i.seq.push(t),i.map[t.id]=t}function ty(i,t,e){let n=i.name,s=n.length;for(Th.lastIndex=0;;){let r=Th.exec(n),o=Th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){of(e,c===void 0?new wh(a,i,t):new Eh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ah(a),of(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ty(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function af(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ey=37297,ny=0;function iy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var lf=new Zt;function sy(i){ie._getMatrix(lf,ie.workingColorSpace,i);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+iy(i.getShaderSource(t),a)}else return r}function ry(i,t){let e=sy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oy(i,t){let e;switch(t){case yd:e="Linear";break;case vd:e="Reinhard";break;case Md:e="Cineon";break;case Sd:e="ACESFilmic";break;case Td:e="AgX";break;case wd:e="Neutral";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ql=new T;function ay(){ie.getLuminanceCoefficients(ql);let i=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function cy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(uy,fy)}var dy=new Map;function fy(i,t){let e=Qt[t];if(e===void 0){let n=dy.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ch(e)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(py,my)}function my(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function _y(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function yy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rl:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function vy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function My(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gy(e),c=_y(e),h=xy(e),u=yy(e),d=vy(e),f=ly(e),m=cy(r),x=s.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(g=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==hi?oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ry("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Ch(o),o=hf(o,e),o=uf(o,e),a=Ch(a),a=hf(a,e),a=uf(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+g+o,y=w+p+a,R=af(s,s.VERTEX_SHADER,S),C=af(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(C)||"",G=z.trim(),k=V.trim(),nt=W.trim(),H=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,C);else{let _t=cf(s,R,"vertex"),j=cf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+_t+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||nt==="")&&(ct=!1);ct&&(D.diagnostics={runnable:H,programLog:G,vertexShader:{log:k,prefix:g},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(R),s.deleteShader(C),L=new sr(s,x),b=hy(s,x)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,ey)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ny++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}var Sy=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ph(t),e.set(t,n)),n}},Ph=class{constructor(t){this.id=Sy++,this.code=t,this.usedTimes=0}};function by(i,t,e,n,s,r,o){let a=new Bs,l=new Rh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,v,D,z,V){let W=z.fog,G=V.geometry,k=b.isMeshStandardMaterial?z.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),H=nt&&nt.mapping===To?nt.image.height:null,ct=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=_t!==void 0?_t.length:0,Mt=0;G.morphAttributes.position!==void 0&&(Mt=1),G.morphAttributes.normal!==void 0&&(Mt=2),G.morphAttributes.color!==void 0&&(Mt=3);let Et,Ft,Rt,Y;if(ct){let ae=jn[ct];Et=ae.vertexShader,Ft=ae.fragmentShader}else Et=b.vertexShader,Ft=b.fragmentShader,l.update(b),Rt=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);let et=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ct=V.isInstancedMesh===!0,Tt=V.isBatchedMesh===!0,zt=!!b.map,jt=!!b.matcap,P=!!nt,it=!!b.aoMap,Q=!!b.lightMap,$=!!b.bumpMap,K=!!b.normalMap,ht=!!b.displacementMap,rt=!!b.emissiveMap,yt=!!b.metalnessMap,Ht=!!b.roughnessMap,Gt=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,A=b.iridescence>0,N=b.sheen>0,Z=b.transmission>0,B=Gt&&!!b.anisotropyMap,ut=E&&!!b.clearcoatMap,tt=E&&!!b.clearcoatNormalMap,lt=E&&!!b.clearcoatRoughnessMap,ot=A&&!!b.iridescenceMap,J=A&&!!b.iridescenceThicknessMap,mt=N&&!!b.sheenColorMap,It=N&&!!b.sheenRoughnessMap,dt=!!b.specularMap,gt=!!b.specularColorMap,Ut=!!b.specularIntensityMap,U=Z&&!!b.transmissionMap,pt=Z&&!!b.thicknessMap,vt=!!b.gradientMap,At=!!b.alphaMap,ft=b.alphaTest>0,st=!!b.alphaHash,Lt=!!b.extensions,Jt=hi;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let me={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:Ft,defines:b.defines,customVertexShaderID:Rt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&V._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&V.instanceColor!==null,instancingMorph:Ct&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:zt,matcap:jt,envMap:P,envMapMode:P&&nt.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:Q,bumpMap:$,normalMap:K,displacementMap:d&&ht,emissiveMap:rt,normalMapObjectSpace:K&&b.normalMapType===Rd,normalMapTangentSpace:K&&b.normalMapType===Hl,metalnessMap:yt,roughnessMap:Ht,anisotropy:Gt,anisotropyMap:B,clearcoat:E,clearcoatMap:ut,clearcoatNormalMap:tt,clearcoatRoughnessMap:lt,dispersion:_,iridescence:A,iridescenceMap:ot,iridescenceThicknessMap:J,sheen:N,sheenColorMap:mt,sheenRoughnessMap:It,specularMap:dt,specularColorMap:gt,specularIntensityMap:Ut,transmission:Z,transmissionMap:U,thicknessMap:pt,gradientMap:vt,opaque:b.transparent===!1&&b.blending===qi&&b.alphaToCoverage===!1,alphaMap:At,alphaTest:ft,alphaHash:st,combine:b.combine,mapUv:zt&&x(b.map.channel),aoMapUv:it&&x(b.aoMap.channel),lightMapUv:Q&&x(b.lightMap.channel),bumpMapUv:$&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:ht&&x(b.displacementMap.channel),emissiveMapUv:rt&&x(b.emissiveMap.channel),metalnessMapUv:yt&&x(b.metalnessMap.channel),roughnessMapUv:Ht&&x(b.roughnessMap.channel),anisotropyMapUv:B&&x(b.anisotropyMap.channel),clearcoatMapUv:ut&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(b.sheenRoughnessMap.channel),specularMapUv:dt&&x(b.specularMap.channel),specularColorMapUv:gt&&x(b.specularColorMap.channel),specularIntensityMapUv:Ut&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:pt&&x(b.thicknessMap.channel),alphaMapUv:At&&x(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(K||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(zt||At),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:zt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Be,flipSided:b.side===He,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)v.push(D),v.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(v,b),S(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function w(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function S(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let v=m[b.type],D;if(v){let z=jn[v];D=Vd.clone(z.uniforms)}else D=b.uniforms;return D}function R(b,v){let D;for(let z=0,V=h.length;z<V;z++){let W=h[z];if(W.cacheKey===v){D=W,++D.usedTimes;break}}return D===void 0&&(D=new My(i,v,b,r),h.push(D)),D}function C(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function I(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:L}}function Ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||wy),n.length>1&&n.sort(d||pf),s.length>1&&s.sort(d||pf)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ey(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mf,i.set(n,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ay(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ot};break;case"SpotLight":e={position:new T,direction:new T,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ry=0;function Py(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Iy(i){let t=new Ay,e=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new le,o=new le;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,w=0,S=0,y=0,R=0,C=0,I=0;c.sort(Py);for(let b=0,v=c.length;b<v;b++){let D=c[b],z=D.color,V=D.intensity,W=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*V,u+=z.g*V,d+=z.b*V;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],V);I++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,H=e.get(D);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=k,f++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(z).multiplyScalar(V),k.distance=W,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[x]=k;let nt=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,nt.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[x]=nt.matrix,D.castShadow){let H=e.get(D);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=G,y++}x++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(z).multiplyScalar(V),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=k,g++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let nt=D.shadow,H=e.get(D);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=D.shadow.matrix,S++}n.point[m]=k,m++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(V),k.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[p]=k,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=I,n.version=Ry++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function gf(i){let t=new Iy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gf(i),t.set(s,[a])):r>=o.length?(a=new gf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;function Ny(i,t,e){let n=new Ws,s=new at,r=new at,o=new Te,a=new Va({depthPacking:Cd}),l=new ka,c={},h=e.maxTextureSize,u={[Nn]:He,[He]:Nn,[Be]:Be},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Ly,fragmentShader:Uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ne;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let p=this.type;this.render=function(C,I,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ci),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==Kn&&this.type===Kn,W=p===Kn&&this.type!==Kn;for(let G=0,k=C.length;G<k;G++){let nt=C[G],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ct=H.getFrameExtents();if(s.multiply(ct),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,H.mapSize.y=r.y)),H.map===null||V===!0||W===!0){let j=this.type!==Kn?{minFilter:ln,magFilter:ln}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(s.x,s.y,j),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let _t=H.getViewportCount();for(let j=0;j<_t;j++){let Mt=H.getViewport(j);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),z.viewport(o),H.updateMatrices(nt,j),n=H.getFrustum(),y(I,L,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===Kn&&w(H,L),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,v,D)};function w(C,I){let L=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,L,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,L,f,x,null)}function S(C,I,L,b){let v=null,D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)v=D;else if(v=L.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=v.uuid,V=I.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let G=W[V];G===void 0&&(G=v.clone(),W[V]=G,I.addEventListener("dispose",R)),v=G}if(v.visible=I.visible,v.wireframe=I.wireframe,b===Kn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=i.properties.get(v);z.light=L}return v}function y(C,I,L,b,v){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let V=t.update(C),W=C.material;if(Array.isArray(W)){let G=V.groups;for(let k=0,nt=G.length;k<nt;k++){let H=G[k],ct=W[H.materialIndex];if(ct&&ct.visible){let _t=S(C,ct,b,v);C.onBeforeShadow(i,C,I,L,V,_t,H),i.renderBufferDirect(L,null,V,_t,C,H),C.onAfterShadow(i,C,I,L,V,_t,H)}}}else if(W.visible){let G=S(C,W,b,v);C.onBeforeShadow(i,C,I,L,V,G,null),i.renderBufferDirect(L,null,V,G,C,null),C.onAfterShadow(i,C,I,L,V,G,null)}}let z=C.children;for(let V=0,W=z.length;V<W;V++)y(z[V],I,L,b,v)}function R(C){C.target.removeEventListener("dispose",R);for(let L in c){let b=c[L],v=C.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var Fy={[ja]:Qa,[tl]:il,[el]:sl,[Yi]:nl,[Qa]:ja,[il]:tl,[sl]:el,[nl]:Yi};function Oy(i,t){function e(){let U=!1,pt=new Te,vt=null,At=new Te(0,0,0,0);return{setMask:function(ft){vt!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),vt=ft)},setLocked:function(ft){U=ft},setClear:function(ft,st,Lt,Jt,me){me===!0&&(ft*=Jt,st*=Jt,Lt*=Jt),pt.set(ft,st,Lt,Jt),At.equals(pt)===!1&&(i.clearColor(ft,st,Lt,Jt),At.copy(pt))},reset:function(){U=!1,vt=null,At.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,vt=null,At=null,ft=null;return{setReversed:function(st){if(pt!==st){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Jt=ft;ft=null,this.setClear(Jt)}},getReversed:function(){return pt},setTest:function(st){st?et(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(st){vt!==st&&!U&&(i.depthMask(st),vt=st)},setFunc:function(st){if(pt&&(st=Fy[st]),At!==st){switch(st){case ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=st}},setLocked:function(st){U=st},setClear:function(st){ft!==st&&(pt&&(st=1-st),i.clearDepth(st),ft=st)},reset:function(){U=!1,vt=null,At=null,ft=null,pt=!1}}}function s(){let U=!1,pt=null,vt=null,At=null,ft=null,st=null,Lt=null,Jt=null,me=null;return{setTest:function(ae){U||(ae?et(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ae){pt!==ae&&!U&&(i.stencilMask(ae),pt=ae)},setFunc:function(ae,ni,Hn){(vt!==ae||At!==ni||ft!==Hn)&&(i.stencilFunc(ae,ni,Hn),vt=ae,At=ni,ft=Hn)},setOp:function(ae,ni,Hn){(st!==ae||Lt!==ni||Jt!==Hn)&&(i.stencilOp(ae,ni,Hn),st=ae,Lt=ni,Jt=Hn)},setLocked:function(ae){U=ae},setClear:function(ae){me!==ae&&(i.clearStencil(ae),me=ae)},reset:function(){U=!1,pt=null,vt=null,At=null,ft=null,st=null,Lt=null,Jt=null,me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,w=null,S=null,y=null,R=null,C=null,I=new Ot(0,0,0),L=0,b=!1,v=null,D=null,z=null,V=null,W=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,nt=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=nt>=1):H.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=nt>=2);let ct=null,_t={},j=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Et=new Te().fromArray(j),Ft=new Te().fromArray(Mt);function Rt(U,pt,vt,At){let ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(U,st),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<vt;Lt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(pt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}let Y={};Y[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Yi),$(!1),K(jc),et(i.CULL_FACE),it(ci);function et(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ct(U,pt){return u[U]!==pt?(i.bindFramebuffer(U,pt),u[U]=pt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Tt(U,pt){let vt=f,At=!1;if(U){vt=d.get(pt),vt===void 0&&(vt=[],d.set(pt,vt));let ft=U.textures;if(vt.length!==ft.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Lt=ft.length;st<Lt;st++)vt[st]=i.COLOR_ATTACHMENT0+st;vt.length=ft.length,At=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,At=!0);At&&i.drawBuffers(vt)}function zt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let jt={[Si]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};jt[nd]=i.MIN,jt[id]=i.MAX;let P={[sd]:i.ZERO,[rd]:i.ONE,[od]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ld]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function it(U,pt,vt,At,ft,st,Lt,Jt,me,ae){if(U===ci){x===!0&&(St(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),U!==Qu){if(U!==g||ae!==b){if((p!==Si||y!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,y=Si),ae)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,S=null,R=null,C=null,I.set(0,0,0),L=0,g=U,b=ae}return}ft=ft||pt,st=st||vt,Lt=Lt||At,(pt!==p||ft!==y)&&(i.blendEquationSeparate(jt[pt],jt[ft]),p=pt,y=ft),(vt!==w||At!==S||st!==R||Lt!==C)&&(i.blendFuncSeparate(P[vt],P[At],P[st],P[Lt]),w=vt,S=At,R=st,C=Lt),(Jt.equals(I)===!1||me!==L)&&(i.blendColor(Jt.r,Jt.g,Jt.b,me),I.copy(Jt),L=me),g=U,b=!1}function Q(U,pt){U.side===Be?St(i.CULL_FACE):et(i.CULL_FACE);let vt=U.side===He;pt&&(vt=!vt),$(vt),U.blending===qi&&U.transparent===!1?it(ci):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let At=U.stencilWrite;a.setTest(At),At&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function K(U){U!==$u?(et(i.CULL_FACE),U!==D&&(U===jc?i.cullFace(i.BACK):U===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),D=U}function ht(U){U!==z&&(k&&i.lineWidth(U),z=U)}function rt(U,pt,vt){U?(et(i.POLYGON_OFFSET_FILL),(V!==pt||W!==vt)&&(i.polygonOffset(pt,vt),V=pt,W=vt)):St(i.POLYGON_OFFSET_FILL)}function yt(U){U?et(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=i.TEXTURE0+G-1),ct!==U&&(i.activeTexture(U),ct=U)}function Gt(U,pt,vt){vt===void 0&&(ct===null?vt=i.TEXTURE0+G-1:vt=ct);let At=_t[vt];At===void 0&&(At={type:void 0,texture:void 0},_t[vt]=At),(At.type!==U||At.texture!==pt)&&(ct!==vt&&(i.activeTexture(vt),ct=vt),i.bindTexture(U,pt||Y[U]),At.type=U,At.texture=pt)}function E(){let U=_t[ct];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(U){Et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function It(U){Ft.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ft.copy(U))}function dt(U,pt){let vt=c.get(pt);vt===void 0&&(vt=new WeakMap,c.set(pt,vt));let At=vt.get(U);At===void 0&&(At=i.getUniformBlockIndex(pt,U.name),vt.set(U,At))}function gt(U,pt){let At=c.get(pt).get(U);l.get(pt)!==At&&(i.uniformBlockBinding(pt,At,U.__bindingPointIndex),l.set(pt,At))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,_t={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,w=null,S=null,y=null,R=null,C=null,I=new Ot(0,0,0),L=0,b=!1,v=null,D=null,z=null,V=null,W=null,Et.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:St,bindFramebuffer:Ct,drawBuffers:Tt,useProgram:zt,setBlending:it,setMaterial:Q,setFlipSided:$,setCullFace:K,setLineWidth:ht,setPolygonOffset:rt,setScissorTest:yt,activeTexture:Ht,bindTexture:Gt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:A,texImage2D:ot,texImage3D:J,updateUBOMapping:dt,uniformBlockBinding:gt,texStorage2D:tt,texStorage3D:lt,texSubImage2D:N,texSubImage3D:Z,compressedTexSubImage2D:B,compressedTexSubImage3D:ut,scissor:mt,viewport:It,reset:Ut}}function By(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return f?new OffscreenCanvas(E,_):Ns("canvas")}function x(E,_,A){let N=1,Z=Gt(E);if((Z.width>A||Z.height>A)&&(N=A/Math.max(Z.width,Z.height)),N<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let B=Math.floor(N*Z.width),ut=Math.floor(N*Z.height);u===void 0&&(u=m(B,ut));let tt=_?m(B,ut):u;return tt.width=B,tt.height=ut,tt.getContext("2d").drawImage(E,0,0,B,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+B+"x"+ut+")."),tt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,A,N,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let B=_;if(_===i.RED&&(A===i.FLOAT&&(B=i.R32F),A===i.HALF_FLOAT&&(B=i.R16F),A===i.UNSIGNED_BYTE&&(B=i.R8)),_===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.R8UI),A===i.UNSIGNED_SHORT&&(B=i.R16UI),A===i.UNSIGNED_INT&&(B=i.R32UI),A===i.BYTE&&(B=i.R8I),A===i.SHORT&&(B=i.R16I),A===i.INT&&(B=i.R32I)),_===i.RG&&(A===i.FLOAT&&(B=i.RG32F),A===i.HALF_FLOAT&&(B=i.RG16F),A===i.UNSIGNED_BYTE&&(B=i.RG8)),_===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RG8UI),A===i.UNSIGNED_SHORT&&(B=i.RG16UI),A===i.UNSIGNED_INT&&(B=i.RG32UI),A===i.BYTE&&(B=i.RG8I),A===i.SHORT&&(B=i.RG16I),A===i.INT&&(B=i.RG32I)),_===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RGB8UI),A===i.UNSIGNED_SHORT&&(B=i.RGB16UI),A===i.UNSIGNED_INT&&(B=i.RGB32UI),A===i.BYTE&&(B=i.RGB8I),A===i.SHORT&&(B=i.RGB16I),A===i.INT&&(B=i.RGB32I)),_===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),A===i.UNSIGNED_INT&&(B=i.RGBA32UI),A===i.BYTE&&(B=i.RGBA8I),A===i.SHORT&&(B=i.RGBA16I),A===i.INT&&(B=i.RGBA32I)),_===i.RGB&&(A===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),A===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),_===i.RGBA){let ut=Z?Fr:ie.getTransfer(N);A===i.FLOAT&&(B=i.RGBA32F),A===i.HALF_FLOAT&&(B=i.RGBA16F),A===i.UNSIGNED_BYTE&&(B=ut===he?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function y(E,_){let A;return E?_===null||_===Ri||_===tr?A=i.DEPTH24_STENCIL8:_===Vn?A=i.DEPTH32F_STENCIL8:_===js&&(A=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ri||_===tr?A=i.DEPTH_COMPONENT24:_===Vn?A=i.DEPTH_COMPONENT32F:_===js&&(A=i.DEPTH_COMPONENT16),A}function R(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==ln&&E.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){let _=E.target;_.removeEventListener("dispose",C),L(_),_.isVideoTexture&&h.delete(_)}function I(E){let _=E.target;_.removeEventListener("dispose",I),v(_)}function L(E){let _=n.get(E);if(_.__webglInit===void 0)return;let A=E.source,N=d.get(A);if(N){let Z=N[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(N).length===0&&d.delete(A)}n.remove(E)}function b(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let A=E.source,N=d.get(A);delete N[_.__cacheKey],o.memory.textures--}function v(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let Z=0;Z<_.__webglFramebuffer[N].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[N][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)i.deleteFramebuffer(_.__webglFramebuffer[N]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let A=E.textures;for(let N=0,Z=A.length;N<Z;N++){let B=n.get(A[N]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(A[N])}n.remove(E)}let D=0;function z(){D=0}function V(){let E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function W(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function G(E,_){let A=n.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&A.__version!==E.version){let N=E.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(A,E,_);return}}else E.isExternalTexture&&(A.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+_)}function k(E,_){let A=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&A.__version!==E.version){Y(A,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+_)}function nt(E,_){let A=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&A.__version!==E.version){Y(A,E,_);return}e.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+_)}function H(E,_){let A=n.get(E);if(E.version>0&&A.__version!==E.version){et(A,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+_)}let ct={[qn]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},_t={[ln]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[al]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},j={[Pd]:i.NEVER,[Fd]:i.ALWAYS,[Id]:i.LESS,[hh]:i.LEQUAL,[Dd]:i.EQUAL,[Nd]:i.GEQUAL,[Ld]:i.GREATER,[Ud]:i.NOTEQUAL};function Mt(E,_){if(_.type===Vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===al||_.magFilter===wo||_.magFilter===Rn||_.minFilter===sn||_.minFilter===al||_.minFilter===wo||_.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ct[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,j[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==wo&&_.minFilter!==Rn||_.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let A=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Et(E,_){let A=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let N=_.source,Z=d.get(N);Z===void 0&&(Z={},d.set(N,Z));let B=W(_);if(B!==E.__cacheKey){Z[B]===void 0&&(Z[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,A=!0),Z[B].usedTimes++;let ut=Z[E.__cacheKey];ut!==void 0&&(Z[E.__cacheKey].usedTimes--,ut.usedTimes===0&&b(_)),E.__cacheKey=B,E.__webglTexture=Z[B].texture}return A}function Ft(E,_,A){return Math.floor(Math.floor(E/A)/_)}function Rt(E,_,A,N){let B=E.updateRanges;if(B.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,A,N,_.data);else{B.sort((J,mt)=>J.start-mt.start);let ut=0;for(let J=1;J<B.length;J++){let mt=B[ut],It=B[J],dt=mt.start+mt.count,gt=Ft(It.start,_.width,4),Ut=Ft(mt.start,_.width,4);It.start<=dt+1&&gt===Ut&&Ft(It.start+It.count-1,_.width,4)===gt?mt.count=Math.max(mt.count,It.start+It.count-mt.start):(++ut,B[ut]=It)}B.length=ut+1;let tt=i.getParameter(i.UNPACK_ROW_LENGTH),lt=i.getParameter(i.UNPACK_SKIP_PIXELS),ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let J=0,mt=B.length;J<mt;J++){let It=B[J],dt=Math.floor(It.start/4),gt=Math.ceil(It.count/4),Ut=dt%_.width,U=Math.floor(dt/_.width),pt=gt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ut,U,pt,vt,A,N,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,tt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function Y(E,_,A){let N=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=i.TEXTURE_3D);let Z=Et(E,_),B=_.source;e.bindTexture(N,E.__webglTexture,i.TEXTURE0+A);let ut=n.get(B);if(B.version!==ut.__version||Z===!0){e.activeTexture(i.TEXTURE0+A);let tt=ie.getPrimaries(ie.workingColorSpace),lt=_.colorSpace===ui?null:ie.getPrimaries(_.colorSpace),ot=_.colorSpace===ui||tt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let J=x(_.image,!1,s.maxTextureSize);J=Ht(_,J);let mt=r.convert(_.format,_.colorSpace),It=r.convert(_.type),dt=S(_.internalFormat,mt,It,_.colorSpace,_.isVideoTexture);Mt(N,_);let gt,Ut=_.mipmaps,U=_.isVideoTexture!==!0,pt=ut.__version===void 0||Z===!0,vt=B.dataReady,At=R(_,J);if(_.isDepthTexture)dt=y(_.format===er,_.type),pt&&(U?e.texStorage2D(i.TEXTURE_2D,1,dt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,dt,J.width,J.height,0,mt,It,null));else if(_.isDataTexture)if(Ut.length>0){U&&pt&&e.texStorage2D(i.TEXTURE_2D,At,dt,Ut[0].width,Ut[0].height);for(let ft=0,st=Ut.length;ft<st;ft++)gt=Ut[ft],U?vt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,ft,dt,gt.width,gt.height,0,mt,It,gt.data);_.generateMipmaps=!1}else U?(pt&&e.texStorage2D(i.TEXTURE_2D,At,dt,J.width,J.height),vt&&Rt(_,J,mt,It)):e.texImage2D(i.TEXTURE_2D,0,dt,J.width,J.height,0,mt,It,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,dt,Ut[0].width,Ut[0].height,J.depth);for(let ft=0,st=Ut.length;ft<st;ft++)if(gt=Ut[ft],_.format!==un)if(mt!==null)if(U){if(vt)if(_.layerUpdates.size>0){let Lt=xh(gt.width,gt.height,_.format,_.type);for(let Jt of _.layerUpdates){let me=gt.data.subarray(Jt*Lt/gt.data.BYTES_PER_ELEMENT,(Jt+1)*Lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Jt,gt.width,gt.height,1,mt,me)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,gt.width,gt.height,J.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,dt,gt.width,gt.height,J.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,gt.width,gt.height,J.depth,mt,It,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,dt,gt.width,gt.height,J.depth,0,mt,It,gt.data)}else{U&&pt&&e.texStorage2D(i.TEXTURE_2D,At,dt,Ut[0].width,Ut[0].height);for(let ft=0,st=Ut.length;ft<st;ft++)gt=Ut[ft],_.format!==un?mt!==null?U?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?vt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,ft,dt,gt.width,gt.height,0,mt,It,gt.data)}else if(_.isDataArrayTexture)if(U){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,dt,J.width,J.height,J.depth),vt)if(_.layerUpdates.size>0){let ft=xh(J.width,J.height,_.format,_.type);for(let st of _.layerUpdates){let Lt=J.data.subarray(st*ft/J.data.BYTES_PER_ELEMENT,(st+1)*ft/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,J.width,J.height,1,mt,It,Lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,mt,It,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,J.width,J.height,J.depth,0,mt,It,J.data);else if(_.isData3DTexture)U?(pt&&e.texStorage3D(i.TEXTURE_3D,At,dt,J.width,J.height,J.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,mt,It,J.data)):e.texImage3D(i.TEXTURE_3D,0,dt,J.width,J.height,J.depth,0,mt,It,J.data);else if(_.isFramebufferTexture){if(pt)if(U)e.texStorage2D(i.TEXTURE_2D,At,dt,J.width,J.height);else{let ft=J.width,st=J.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,dt,ft,st,0,mt,It,null),ft>>=1,st>>=1}}else if(Ut.length>0){if(U&&pt){let ft=Gt(Ut[0]);e.texStorage2D(i.TEXTURE_2D,At,dt,ft.width,ft.height)}for(let ft=0,st=Ut.length;ft<st;ft++)gt=Ut[ft],U?vt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,mt,It,gt):e.texImage2D(i.TEXTURE_2D,ft,dt,mt,It,gt);_.generateMipmaps=!1}else if(U){if(pt){let ft=Gt(J);e.texStorage2D(i.TEXTURE_2D,At,dt,ft.width,ft.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,It,J)}else e.texImage2D(i.TEXTURE_2D,0,dt,mt,It,J);g(_)&&p(N),ut.__version=B.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function et(E,_,A){if(_.image.length!==6)return;let N=Et(E,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+A);let B=n.get(Z);if(Z.version!==B.__version||N===!0){e.activeTexture(i.TEXTURE0+A);let ut=ie.getPrimaries(ie.workingColorSpace),tt=_.colorSpace===ui?null:ie.getPrimaries(_.colorSpace),lt=_.colorSpace===ui||ut===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ot=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let st=0;st<6;st++)!ot&&!J?mt[st]=x(_.image[st],!0,s.maxCubemapSize):mt[st]=J?_.image[st].image:_.image[st],mt[st]=Ht(_,mt[st]);let It=mt[0],dt=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),Ut=S(_.internalFormat,dt,gt,_.colorSpace),U=_.isVideoTexture!==!0,pt=B.__version===void 0||N===!0,vt=Z.dataReady,At=R(_,It);Mt(i.TEXTURE_CUBE_MAP,_);let ft;if(ot){U&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Ut,It.width,It.height);for(let st=0;st<6;st++){ft=mt[st].mipmaps;for(let Lt=0;Lt<ft.length;Lt++){let Jt=ft[Lt];_.format!==un?dt!==null?U?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Jt.width,Jt.height,dt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ut,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,Jt.width,Jt.height,dt,gt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Ut,Jt.width,Jt.height,0,dt,gt,Jt.data)}}}else{if(ft=_.mipmaps,U&&pt){ft.length>0&&At++;let st=Gt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Ut,st.width,st.height)}for(let st=0;st<6;st++)if(J){U?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,mt[st].width,mt[st].height,dt,gt,mt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ut,mt[st].width,mt[st].height,0,dt,gt,mt[st].data);for(let Lt=0;Lt<ft.length;Lt++){let me=ft[Lt].image[st].image;U?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,me.width,me.height,dt,gt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ut,me.width,me.height,0,dt,gt,me.data)}}else{U?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,dt,gt,mt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ut,dt,gt,mt[st]);for(let Lt=0;Lt<ft.length;Lt++){let Jt=ft[Lt];U?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,dt,gt,Jt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Ut,dt,gt,Jt.image[st])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),B.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function St(E,_,A,N,Z,B){let ut=r.convert(A.format,A.colorSpace),tt=r.convert(A.type),lt=S(A.internalFormat,ut,tt,A.colorSpace),ot=n.get(_),J=n.get(A);if(J.__renderTarget=_,!ot.__hasExternalTextures){let mt=Math.max(1,_.width>>B),It=Math.max(1,_.height>>B);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,B,lt,mt,It,_.depth,0,ut,tt,null):e.texImage2D(Z,B,lt,mt,It,0,ut,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,Z,J.__webglTexture,0,ht(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,Z,J.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(E,_,A){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let N=_.depthTexture,Z=N&&N.isDepthTexture?N.type:null,B=y(_.stencilBuffer,Z),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=ht(_);rt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,B,_.width,_.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,B,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,B,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,E)}else{let N=_.textures;for(let Z=0;Z<N.length;Z++){let B=N[Z],ut=r.convert(B.format,B.colorSpace),tt=r.convert(B.type),lt=S(B.internalFormat,ut,tt,B.colorSpace),ot=ht(_);A&&rt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,lt,_.width,_.height):rt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,lt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,lt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=n.get(_.depthTexture);N.__renderTarget=_,(!N.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);let Z=N.__webglTexture,B=ht(_);if(_.depthTexture.format===Ls)rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===er)rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function zt(E){let _=n.get(E),A=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let N=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),N){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,N.removeEventListener("dispose",Z)};N.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=N}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");let N=E.texture.mipmaps;N&&N.length>0?Tt(_.__webglFramebuffer[0],E):Tt(_.__webglFramebuffer,E)}else if(A){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]===void 0)_.__webglDepthbuffer[N]=i.createRenderbuffer(),Ct(_.__webglDepthbuffer[N],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,B)}}else{let N=E.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ct(_.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,B)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(E,_,A){let N=n.get(E);_!==void 0&&St(N.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&zt(E)}function P(E){let _=E.texture,A=n.get(E),N=n.get(_);E.addEventListener("dispose",I);let Z=E.textures,B=E.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=_.version,o.memory.textures++),B){A.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer[tt]=[];for(let lt=0;lt<_.mipmaps.length;lt++)A.__webglFramebuffer[tt][lt]=i.createFramebuffer()}else A.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){A.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)A.__webglFramebuffer[tt]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(ut)for(let tt=0,lt=Z.length;tt<lt;tt++){let ot=n.get(Z[tt]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&rt(E)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let tt=0;tt<Z.length;tt++){let lt=Z[tt];A.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[tt]);let ot=r.convert(lt.format,lt.colorSpace),J=r.convert(lt.type),mt=S(lt.internalFormat,ot,J,lt.colorSpace,E.isXRRenderTarget===!0),It=ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,A.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(A.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)St(A.__webglFramebuffer[tt][lt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt);else St(A.__webglFramebuffer[tt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let tt=0,lt=Z.length;tt<lt;tt++){let ot=Z[tt],J=n.get(ot),mt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),Mt(mt,ot),St(A.__webglFramebuffer,E,ot,i.COLOR_ATTACHMENT0+tt,mt,0),g(ot)&&p(mt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(tt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,N.__webglTexture),Mt(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let lt=0;lt<_.mipmaps.length;lt++)St(A.__webglFramebuffer[lt],E,_,i.COLOR_ATTACHMENT0,tt,lt);else St(A.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,tt,0);g(_)&&p(tt),e.unbindTexture()}E.depthBuffer&&zt(E)}function it(E){let _=E.textures;for(let A=0,N=_.length;A<N;A++){let Z=_[A];if(g(Z)){let B=w(E),ut=n.get(Z).__webglTexture;e.bindTexture(B,ut),p(B),e.unbindTexture()}}}let Q=[],$=[];function K(E){if(E.samples>0){if(rt(E)===!1){let _=E.textures,A=E.width,N=E.height,Z=i.COLOR_BUFFER_BIT,B=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(E),tt=_.length>1;if(tt)for(let ot=0;ot<_.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let lt=E.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let J=n.get(_[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,A,N,0,0,A,N,Z,i.NEAREST),l===!0&&(Q.length=0,$.length=0,Q.push(i.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(B),$.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let ot=0;ot<_.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let J=n.get(_[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,J,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ht(E){return Math.min(s.maxSamples,E.samples)}function rt(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ht(E,_){let A=E.colorSpace,N=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||A!==Zi&&A!==ui&&(ie.getTransfer(A)===he?(N!==un||Z!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),_}function Gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=nt,this.setTextureCube=H,this.rebindTextures=jt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=rt}function zy(i,t){function e(n,s=ui){let r,o=ie.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===un)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Eo||n===Ao||n===Co||n===Ro)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===vl)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===bl||n===Tl||n===wl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fl)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Vl||n===kl||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Vy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Ih,p={},w=e.getContextAttributes(),S=null,y=null,R=[],C=[],I=new at,L=null,b=new Ye;b.viewport=new Te;let v=new Ye;v.viewport=new Te;let D=[b,v],z=new Ka,V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=R[Y];return et===void 0&&(et=new zs,R[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=R[Y];return et===void 0&&(et=new zs,R[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=R[Y];return et===void 0&&(et=new zs,R[Y]=et),et.getHandSpace()};function G(Y){let et=C.indexOf(Y.inputSource);if(et===-1)return;let St=R[et];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<R.length;Y++){let et=C[Y];et!==null&&(C[Y]=null,R[Y].disconnect(et))}V=null,W=null,g.reset();for(let Y in p)delete p[Y];t.setRenderTarget(S),f=null,d=null,u=null,s=null,y=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",k),s.addEventListener("inputsourceschange",nt),w.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ct=null,Tt=null;w.depth&&(Tt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=w.stencil?er:Ls,Ct=w.stencil?tr:Ri);let zt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Zn(d.textureWidth,d.textureHeight,{format:un,type:zn,depthTexture:new $r(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let St={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:un,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Y){for(let et=0;et<Y.removed.length;et++){let St=Y.removed[et],Ct=C.indexOf(St);Ct>=0&&(C[Ct]=null,R[Ct].disconnect(St))}for(let et=0;et<Y.added.length;et++){let St=Y.added[et],Ct=C.indexOf(St);if(Ct===-1){for(let zt=0;zt<R.length;zt++)if(zt>=C.length){C.push(St),Ct=zt;break}else if(C[zt]===null){C[zt]=St,Ct=zt;break}if(Ct===-1)break}let Tt=R[Ct];Tt&&Tt.connect(St)}}let H=new T,ct=new T;function _t(Y,et,St){H.setFromMatrixPosition(et.matrixWorld),ct.setFromMatrixPosition(St.matrixWorld);let Ct=H.distanceTo(ct),Tt=et.projectionMatrix.elements,zt=St.projectionMatrix.elements,jt=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),it=(Tt[9]+1)/Tt[5],Q=(Tt[9]-1)/Tt[5],$=(Tt[8]-1)/Tt[0],K=(zt[8]+1)/zt[0],ht=jt*$,rt=jt*K,yt=Ct/(-$+K),Ht=yt*-$;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ht),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Gt=jt+yt,E=P+yt,_=ht-Ht,A=rt+(Ct-Ht),N=it*P/E*Gt,Z=Q*P/E*Gt;Y.projectionMatrix.makePerspective(_,A,N,Z,Gt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,St=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(St=g.depthFar)),z.near=v.near=b.near=et,z.far=v.far=b.far=St,(V!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,W=z.far),z.layers.mask=Y.layers.mask|6,b.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let Ct=Y.parent,Tt=z.cameras;j(z,Ct);for(let zt=0;zt<Tt.length;zt++)j(Tt[zt],Ct);Tt.length===2?_t(z,b,v):z.projectionMatrix.copy(b.projectionMatrix),Mt(Y,z,Ct)};function Mt(Y,et,St){St===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let Et=null;function Ft(Y,et){if(h=et.getViewerPose(c||o),m=et,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ct=!1;St.length!==z.cameras.length&&(z.cameras.length=0,Ct=!0);for(let P=0;P<St.length;P++){let it=St[P],Q=null;if(f!==null)Q=f.getViewport(it);else{let K=u.getViewSubImage(d,it);Q=K.viewport,P===0&&(t.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(y))}let $=D[P];$===void 0&&($=new Ye,$.layers.enable(P),$.viewport=new Te,D[P]=$),$.matrix.fromArray(it.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(it.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(z.matrix.copy($.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ct===!0&&z.cameras.push($)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let P=u.getDepthInformation(St[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<St.length;P++){let it=St[P].camera;if(it){let Q=p[it];Q||(Q=new Kr,p[it]=Q);let $=u.getCameraImage(it);Q.sourceTexture=$}}}}for(let St=0;St<R.length;St++){let Ct=C[St],Tt=R[St];Ct!==null&&Tt!==void 0&&Tt.update(Ct,et,c||o)}Et&&Et(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Rt=new _f;Rt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){Et=Y},this.dispose=function(){}}},ss=new An,Gy=new le;function Hy(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),S=w.envMap,y=w.envMapRotation;S&&(g.envMap.value=S,ss.copy(y),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),g.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(ss)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let y=S.program;n.uniformBlockBinding(w,y)}function c(w,S){let y=s[w.id];y===void 0&&(m(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",g));let R=S.program;n.updateUBOMapping(w,R);let C=t.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function h(w){let S=u();w.__bindingPointIndex=S;let y=i.createBuffer(),R=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,I=y.length;C<I;C++){let L=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,v=L.length;b<v;b++){let D=L[b];if(f(D,C,b,R)===!0){let z=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],W=0;for(let G=0;G<V.length;G++){let k=V[G],nt=x(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+W,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,W),W+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,y,R){let C=w.value,I=S+"_"+y;if(R[I]===void 0)return typeof C=="number"||typeof C=="boolean"?R[I]=C:R[I]=C.clone(),!0;{let L=R[I];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[I]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function m(w){let S=w.uniforms,y=0,R=16;for(let I=0,L=S.length;I<L;I++){let b=Array.isArray(S[I])?S[I]:[S[I]];for(let v=0,D=b.length;v<D;v++){let z=b[v],V=Array.isArray(z.value)?z.value:[z.value];for(let W=0,G=V.length;W<G;W++){let k=V[W],nt=x(k),H=y%R,ct=H%nt.boundary,_t=H+ct;y+=ct,_t!==0&&R-_t<nt.storage&&(y+=R-_t),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=nt.storage}}}let C=y%R;return C>0&&(y+=R-C),w.__size=y,w.__cache={},this}function x(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Yl=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=ye;let C=0,I=0,L=null,b=-1,v=null,D=new Te,z=new Te,V=null,W=new Ot(0),G=0,k=e.width,nt=e.height,H=1,ct=null,_t=null,j=new Te(0,0,k,nt),Mt=new Te(0,0,k,nt),Et=!1,Ft=new Ws,Rt=!1,Y=!1,et=new le,St=new T,Ct=new Te,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function jt(){return L===null?H:1}let P=n;function it(M,F){return e.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",ft,!1),P===null){let F="webgl2";if(P=it(F,M),P===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,$,K,ht,rt,yt,Ht,Gt,E,_,A,N,Z,B,ut,tt,lt,ot,J,mt,It,dt,gt,Ut;function U(){Q=new lx(P),Q.init(),dt=new zy(P,Q),$=new ex(P,Q,t,dt),K=new Oy(P,Q),$.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),ht=new ux(P),rt=new Ty,yt=new By(P,Q,K,rt,$,dt,ht),Ht=new ix(y),Gt=new ax(y),E=new _g(P),gt=new Q_(P,E),_=new cx(P,E,ht,gt),A=new fx(P,_,E,ht),J=new dx(P,$,yt),tt=new nx(rt),N=new by(y,Ht,Gt,Q,$,gt,tt),Z=new Hy(y,rt),B=new Ey,ut=new Dy(Q),ot=new j_(y,Ht,Gt,K,A,f,l),lt=new Ny(y,A,$),Ut=new Wy(P,ht,$,K),mt=new tx(P,Q,ht),It=new hx(P,Q,ht),ht.programs=N.programs,y.capabilities=$,y.extensions=Q,y.properties=rt,y.renderLists=B,y.shadowMap=lt,y.state=K,y.info=ht}U();let pt=new Dh(y,P);this.xr=pt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(k,nt,!1))},this.getSize=function(M){return M.set(k,nt)},this.setSize=function(M,F,X=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,nt=F,e.width=Math.floor(M*H),e.height=Math.floor(F*H),X===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(k*H,nt*H).floor()},this.setDrawingBufferSize=function(M,F,X){k=M,nt=F,H=X,e.width=Math.floor(M*X),e.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,F,X,q){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,F,X,q),K.viewport(D.copy(j).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Mt)},this.setScissor=function(M,F,X,q){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,F,X,q),K.scissor(z.copy(Mt).multiplyScalar(H).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(M){K.setScissorTest(Et=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let q=0;if(M){let O=!1;if(L!==null){let xt=L.texture.format;O=xt===pl||xt===fl||xt===dl}if(O){let xt=L.texture.type,wt=xt===zn||xt===Ri||xt===js||xt===tr||xt===cl||xt===hl,Dt=ot.getClearColor(),Pt=ot.getClearAlpha(),Wt=Dt.r,qt=Dt.g,Bt=Dt.b;wt?(m[0]=Wt,m[1]=qt,m[2]=Bt,m[3]=Pt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Wt,x[1]=qt,x[2]=Bt,x[3]=Pt,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),ot.dispose(),B.dispose(),ut.dispose(),rt.dispose(),Ht.dispose(),Gt.dispose(),A.dispose(),gt.dispose(),Ut.dispose(),N.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Hn),pt.removeEventListener("sessionend",cu),zi.stop()};function vt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=ht.autoReset,F=lt.enabled,X=lt.autoUpdate,q=lt.needsUpdate,O=lt.type;U(),ht.autoReset=M,lt.enabled=F,lt.autoUpdate=X,lt.needsUpdate=q,lt.type=O}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){let F=M.target;F.removeEventListener("dispose",st),Lt(F)}function Lt(M){Jt(M),rt.remove(M)}function Jt(M){let F=rt.get(M).programs;F!==void 0&&(F.forEach(function(X){N.releaseProgram(X)}),M.isShaderMaterial&&N.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,q,O,xt){F===null&&(F=Tt);let wt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=Bp(M,F,X,q,O);K.setMaterial(q,wt);let Pt=X.index,Wt=1;if(q.wireframe===!0){if(Pt=_.getWireframeAttribute(X),Pt===void 0)return;Wt=2}let qt=X.drawRange,Bt=X.attributes.position,ee=qt.start*Wt,ue=(qt.start+qt.count)*Wt;xt!==null&&(ee=Math.max(ee,xt.start*Wt),ue=Math.min(ue,(xt.start+xt.count)*Wt)),Pt!==null?(ee=Math.max(ee,0),ue=Math.min(ue,Pt.count)):Bt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,Bt.count));let Ee=ue-ee;if(Ee<0||Ee===1/0)return;gt.setup(O,q,Dt,X,Pt);let _e,pe=mt;if(Pt!==null&&(_e=E.get(Pt),pe=It,pe.setIndex(_e)),O.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*jt()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(O.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),K.setLineWidth(Vt*jt()),O.isLineSegments?pe.setMode(P.LINES):O.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else O.isPoints?pe.setMode(P.POINTS):O.isSprite&&pe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))pe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Vt=O._multiDrawStarts,Me=O._multiDrawCounts,se=O._multiDrawCount,gn=Pt?E.get(Pt).bytesPerElement:1,us=rt.get(q).currentProgram.getUniforms();for(let _n=0;_n<se;_n++)us.setValue(P,"_gl_DrawID",_n),pe.render(Vt[_n]/gn,Me[_n])}else if(O.isInstancedMesh)pe.renderInstances(ee,Ee,O.count);else if(X.isInstancedBufferGeometry){let Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,Vt);pe.renderInstances(ee,Ee,Me)}else pe.render(ee,Ee)};function me(M,F,X){M.transparent===!0&&M.side===Be&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,Wo(M,F,X),M.side=Nn,M.needsUpdate=!0,Wo(M,F,X),M.side=Be):Wo(M,F,X)}this.compile=function(M,F,X=null){X===null&&(X=M),p=ut.get(X),p.init(F),S.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==X&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let xt=O.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let Dt=xt[wt];me(Dt,X,O),q.add(Dt)}else me(xt,X,O),q.add(xt)}),p=S.pop(),q},this.compileAsync=function(M,F,X=null){let q=this.compile(M,F,X);return new Promise(O=>{function xt(){if(q.forEach(function(wt){rt.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){O(M);return}setTimeout(xt,10)}Q.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ae=null;function ni(M){ae&&ae(M)}function Hn(){zi.stop()}function cu(){zi.start()}let zi=new _f;zi.setAnimationLoop(ni),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(M){ae=M,pt.setAnimationLoop(M),M===null?zi.stop():zi.start()},pt.addEventListener("sessionstart",Hn),pt.addEventListener("sessionend",cu),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,L),p=ut.get(M,S.length),p.init(F),S.push(p),et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ft.setFromProjectionMatrix(et,Un,F.reversedDepth),Y=this.localClippingEnabled,Rt=tt.init(this.clippingPlanes,Y),g=B.get(M,w.length),g.init(),w.push(g),pt.enabled===!0&&pt.isPresenting===!0){let xt=y.xr.getDepthSensingMesh();xt!==null&&hc(xt,F,-1/0,y.sortObjects)}hc(M,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ct,_t),zt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,zt&&ot.addToRenderList(g,M),this.info.render.frame++,Rt===!0&&tt.beginShadows();let X=p.state.shadowsArray;lt.render(X,M,F),Rt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){let xt=F.cameras;if(O.length>0)for(let wt=0,Dt=xt.length;wt<Dt;wt++){let Pt=xt[wt];uu(q,O,M,Pt)}zt&&ot.render(M);for(let wt=0,Dt=xt.length;wt<Dt;wt++){let Pt=xt[wt];hu(g,M,Pt,Pt.viewport)}}else O.length>0&&uu(q,O,M,F),zt&&ot.render(M),hu(g,M,F);L!==null&&I===0&&(yt.updateMultisampleRenderTarget(L),yt.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(y,M,F),gt.resetDefaultState(),b=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],Rt===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function hc(M,F,X,q){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ft.intersectsSprite(M)){q&&Ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let wt=A.update(M),Dt=M.material;Dt.visible&&g.push(M,wt,Dt,X,Ct.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ft.intersectsObject(M))){let wt=A.update(M),Dt=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ct.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ct.copy(wt.boundingSphere.center)),Ct.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Dt)){let Pt=wt.groups;for(let Wt=0,qt=Pt.length;Wt<qt;Wt++){let Bt=Pt[Wt],ee=Dt[Bt.materialIndex];ee&&ee.visible&&g.push(M,wt,ee,X,Ct.z,Bt)}}else Dt.visible&&g.push(M,wt,Dt,X,Ct.z,null)}}let xt=M.children;for(let wt=0,Dt=xt.length;wt<Dt;wt++)hc(xt[wt],F,X,q)}function hu(M,F,X,q){let O=M.opaque,xt=M.transmissive,wt=M.transparent;p.setupLightsView(X),Rt===!0&&tt.setGlobalState(y.clippingPlanes,X),q&&K.viewport(D.copy(q)),O.length>0&&Ho(O,F,X),xt.length>0&&Ho(xt,F,X),wt.length>0&&Ho(wt,F,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function uu(M,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Zn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Qs:zn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let xt=p.state.transmissionRenderTarget[q.id],wt=q.viewport||D;xt.setSize(wt.z*y.transmissionResolutionScale,wt.w*y.transmissionResolutionScale);let Dt=y.getRenderTarget(),Pt=y.getActiveCubeFace(),Wt=y.getActiveMipmapLevel();y.setRenderTarget(xt),y.getClearColor(W),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),zt&&ot.render(X);let qt=y.toneMapping;y.toneMapping=hi;let Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Rt===!0&&tt.setGlobalState(y.clippingPlanes,q),Ho(M,X,q),yt.updateMultisampleRenderTarget(xt),yt.updateRenderTargetMipmap(xt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ue=0,Ee=F.length;ue<Ee;ue++){let _e=F[ue],pe=_e.object,Vt=_e.geometry,Me=_e.material,se=_e.group;if(Me.side===Be&&pe.layers.test(q.layers)){let gn=Me.side;Me.side=He,Me.needsUpdate=!0,du(pe,X,q,Vt,Me,se),Me.side=gn,Me.needsUpdate=!0,ee=!0}}ee===!0&&(yt.updateMultisampleRenderTarget(xt),yt.updateRenderTargetMipmap(xt))}y.setRenderTarget(Dt,Pt,Wt),y.setClearColor(W,G),Bt!==void 0&&(q.viewport=Bt),y.toneMapping=qt}function Ho(M,F,X){let q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,xt=M.length;O<xt;O++){let wt=M[O],Dt=wt.object,Pt=wt.geometry,Wt=wt.group,qt=wt.material;qt.allowOverride===!0&&q!==null&&(qt=q),Dt.layers.test(X.layers)&&du(Dt,F,X,Pt,qt,Wt)}}function du(M,F,X,q,O,xt){M.onBeforeRender(y,F,X,q,O,xt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,F,X,q,M,xt),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=He,O.needsUpdate=!0,y.renderBufferDirect(X,F,q,O,M,xt),O.side=Nn,O.needsUpdate=!0,y.renderBufferDirect(X,F,q,O,M,xt),O.side=Be):y.renderBufferDirect(X,F,q,O,M,xt),M.onAfterRender(y,F,X,q,O,xt)}function Wo(M,F,X){F.isScene!==!0&&(F=Tt);let q=rt.get(M),O=p.state.lights,xt=p.state.shadowsArray,wt=O.state.version,Dt=N.getParameters(M,O.state,xt,F,X),Pt=N.getProgramCacheKey(Dt),Wt=q.programs;q.environment=M.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(M.isMeshStandardMaterial?Gt:Ht).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Wt===void 0&&(M.addEventListener("dispose",st),Wt=new Map,q.programs=Wt);let qt=Wt.get(Pt);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===wt)return pu(M,Dt),qt}else Dt.uniforms=N.getUniforms(M),M.onBeforeCompile(Dt,y),qt=N.acquireProgram(Dt,Pt),Wt.set(Pt,qt),q.uniforms=Dt.uniforms;let Bt=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=tt.uniform),pu(M,Dt),q.needsLights=Vp(M),q.lightsStateVersion=wt,q.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function fu(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=sr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function pu(M,F){let X=rt.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Bp(M,F,X,q,O){F.isScene!==!0&&(F=Tt),yt.resetTextureUnits();let xt=F.fog,wt=q.isMeshStandardMaterial?F.environment:null,Dt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zi,Pt=(q.isMeshStandardMaterial?Gt:Ht).get(q.envMap||wt),Wt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color,Ee=hi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=y.toneMapping);let _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=_e!==void 0?_e.length:0,Vt=rt.get(q),Me=p.state.lights;if(Rt===!0&&(Y===!0||M!==v)){let en=M===v&&q.id===b;tt.setState(q,M,en)}let se=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Me.state.version||Vt.outputColorSpace!==Dt||O.isBatchedMesh&&Vt.batching===!1||!O.isBatchedMesh&&Vt.batching===!0||O.isBatchedMesh&&Vt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Vt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Vt.instancing===!1||!O.isInstancedMesh&&Vt.instancing===!0||O.isSkinnedMesh&&Vt.skinning===!1||!O.isSkinnedMesh&&Vt.skinning===!0||O.isInstancedMesh&&Vt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Vt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Vt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Vt.instancingMorph===!1&&O.morphTexture!==null||Vt.envMap!==Pt||q.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==tt.numPlanes||Vt.numIntersection!==tt.numIntersection)||Vt.vertexAlphas!==Wt||Vt.vertexTangents!==qt||Vt.morphTargets!==Bt||Vt.morphNormals!==ee||Vt.morphColors!==ue||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==pe)&&(se=!0):(se=!0,Vt.__version=q.version);let gn=Vt.currentProgram;se===!0&&(gn=Wo(q,F,O));let us=!1,_n=!1,yr=!1,Se=gn.getUniforms(),Tn=Vt.uniforms;if(K.useProgram(gn.program)&&(us=!0,_n=!0,yr=!0),q.id!==b&&(b=q.id,_n=!0),us||v!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Se.setValue(P,"projectionMatrix",M.projectionMatrix),Se.setValue(P,"viewMatrix",M.matrixWorldInverse);let on=Se.map.cameraPosition;on!==void 0&&on.setValue(P,St.setFromMatrixPosition(M.matrixWorld)),$.logarithmicDepthBuffer&&Se.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,_n=!0,yr=!0)}if(O.isSkinnedMesh){Se.setOptional(P,O,"bindMatrix"),Se.setOptional(P,O,"bindMatrixInverse");let en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Se.setValue(P,"boneTexture",en.boneTexture,yt))}O.isBatchedMesh&&(Se.setOptional(P,O,"batchingTexture"),Se.setValue(P,"batchingTexture",O._matricesTexture,yt),Se.setOptional(P,O,"batchingIdTexture"),Se.setValue(P,"batchingIdTexture",O._indirectTexture,yt),Se.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(P,"batchingColorTexture",O._colorsTexture,yt));let wn=X.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&J.update(O,X,gn),(_n||Vt.receiveShadow!==O.receiveShadow)&&(Vt.receiveShadow=O.receiveShadow,Se.setValue(P,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Tn.envMap.value=Pt,Tn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Tn.envMapIntensity.value=F.environmentIntensity),_n&&(Se.setValue(P,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&zp(Tn,yr),xt&&q.fog===!0&&Z.refreshFogUniforms(Tn,xt),Z.refreshMaterialUniforms(Tn,q,H,nt,p.state.transmissionRenderTarget[M.id]),sr.upload(P,fu(Vt),Tn,yt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sr.upload(P,fu(Vt),Tn,yt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(P,"center",O.center),Se.setValue(P,"modelViewMatrix",O.modelViewMatrix),Se.setValue(P,"normalMatrix",O.normalMatrix),Se.setValue(P,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let en=q.uniformsGroups;for(let on=0,uc=en.length;on<uc;on++){let Vi=en[on];Ut.update(Vi,gn),Ut.bind(Vi,gn)}}return gn}function zp(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Vp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,X){let q=rt.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),rt.get(M.texture).__webglTexture=F,rt.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let X=rt.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};let kp=P.createFramebuffer();this.setRenderTarget=function(M,F=0,X=0){L=M,C=F,I=X;let q=!0,O=null,xt=!1,wt=!1;if(M){let Pt=rt.get(M);if(Pt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Pt.__webglFramebuffer===void 0)yt.setupRenderTarget(M);else if(Pt.__hasExternalTextures)yt.rebindTextures(M,rt.get(M.texture).__webglTexture,rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(Pt.__boundDepthTexture!==Bt){if(Bt!==null&&rt.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(M)}}let Wt=M.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);let qt=rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?O=qt[F][X]:O=qt[F],xt=!0):M.samples>0&&yt.useMultisampledRTT(M)===!1?O=rt.get(M).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[X]:O=qt,D.copy(M.viewport),z.copy(M.scissor),V=M.scissorTest}else D.copy(j).multiplyScalar(H).floor(),z.copy(Mt).multiplyScalar(H).floor(),V=Et;if(X!==0&&(O=kp),K.bindFramebuffer(P.FRAMEBUFFER,O)&&q&&K.drawBuffers(M,O),K.viewport(D),K.scissor(z),K.setScissorTest(V),xt){let Pt=rt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,X)}else if(wt){let Pt=F;for(let Wt=0;Wt<M.textures.length;Wt++){let qt=rt.get(M.textures[Wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,X,Pt)}}else if(M!==null&&X!==0){let Pt=rt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(M,F,X,q,O,xt,wt,Dt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){K.bindFramebuffer(P.FRAMEBUFFER,Pt);try{let Wt=M.textures[Dt],qt=Wt.format,Bt=Wt.type;if(!$.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-q&&X>=0&&X<=M.height-O&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Dt),P.readPixels(F,X,q,O,dt.convert(qt),dt.convert(Bt),xt))}finally{let Wt=L!==null?rt.get(L).__webglFramebuffer:null;K.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,q,O,xt,wt,Dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt)if(F>=0&&F<=M.width-q&&X>=0&&X<=M.height-O){K.bindFramebuffer(P.FRAMEBUFFER,Pt);let Wt=M.textures[Dt],qt=Wt.format,Bt=Wt.type;if(!$.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.bufferData(P.PIXEL_PACK_BUFFER,xt.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Dt),P.readPixels(F,X,q,O,dt.convert(qt),dt.convert(Bt),0);let ue=L!==null?rt.get(L).__webglFramebuffer:null;K.bindFramebuffer(P.FRAMEBUFFER,ue);let Ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bd(P,Ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xt),P.deleteBuffer(ee),P.deleteSync(Ee),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){let q=Math.pow(2,-X),O=Math.floor(M.image.width*q),xt=Math.floor(M.image.height*q),wt=F!==null?F.x:0,Dt=F!==null?F.y:0;yt.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,wt,Dt,O,xt),K.unbindTexture()};let Gp=P.createFramebuffer(),Hp=P.createFramebuffer();this.copyTextureToTexture=function(M,F,X=null,q=null,O=0,xt=null){xt===null&&(O!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=O,O=0):xt=0);let wt,Dt,Pt,Wt,qt,Bt,ee,ue,Ee,_e=M.isCompressedTexture?M.mipmaps[xt]:M.image;if(X!==null)wt=X.max.x-X.min.x,Dt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,Wt=X.min.x,qt=X.min.y,Bt=X.isBox3?X.min.z:0;else{let wn=Math.pow(2,-O);wt=Math.floor(_e.width*wn),Dt=Math.floor(_e.height*wn),M.isDataArrayTexture?Pt=_e.depth:M.isData3DTexture?Pt=Math.floor(_e.depth*wn):Pt=1,Wt=0,qt=0,Bt=0}q!==null?(ee=q.x,ue=q.y,Ee=q.z):(ee=0,ue=0,Ee=0);let pe=dt.convert(F.format),Vt=dt.convert(F.type),Me;F.isData3DTexture?(yt.setTexture3D(F,0),Me=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(yt.setTexture2DArray(F,0),Me=P.TEXTURE_2D_ARRAY):(yt.setTexture2D(F,0),Me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let se=P.getParameter(P.UNPACK_ROW_LENGTH),gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),us=P.getParameter(P.UNPACK_SKIP_PIXELS),_n=P.getParameter(P.UNPACK_SKIP_ROWS),yr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bt);let Se=M.isDataArrayTexture||M.isData3DTexture,Tn=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let wn=rt.get(M),en=rt.get(F),on=rt.get(wn.__renderTarget),uc=rt.get(en.__renderTarget);K.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,uc.__webglFramebuffer);for(let Vi=0;Vi<Pt;Vi++)Se&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rt.get(M).__webglTexture,O,Bt+Vi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rt.get(F).__webglTexture,xt,Ee+Vi)),P.blitFramebuffer(Wt,qt,wt,Dt,ee,ue,wt,Dt,P.DEPTH_BUFFER_BIT,P.NEAREST);K.bindFramebuffer(P.READ_FRAMEBUFFER,null),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||rt.has(M)){let wn=rt.get(M),en=rt.get(F);K.bindFramebuffer(P.READ_FRAMEBUFFER,Gp),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hp);for(let on=0;on<Pt;on++)Se?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wn.__webglTexture,O,Bt+on):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wn.__webglTexture,O),Tn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,xt,Ee+on):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,xt),O!==0?P.blitFramebuffer(Wt,qt,wt,Dt,ee,ue,wt,Dt,P.COLOR_BUFFER_BIT,P.NEAREST):Tn?P.copyTexSubImage3D(Me,xt,ee,ue,Ee+on,Wt,qt,wt,Dt):P.copyTexSubImage2D(Me,xt,ee,ue,Wt,qt,wt,Dt);K.bindFramebuffer(P.READ_FRAMEBUFFER,null),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Tn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Me,xt,ee,ue,Ee,wt,Dt,Pt,pe,Vt,_e.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,xt,ee,ue,Ee,wt,Dt,Pt,pe,_e.data):P.texSubImage3D(Me,xt,ee,ue,Ee,wt,Dt,Pt,pe,Vt,_e):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xt,ee,ue,wt,Dt,pe,Vt,_e.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xt,ee,ue,_e.width,_e.height,pe,_e.data):P.texSubImage2D(P.TEXTURE_2D,xt,ee,ue,wt,Dt,pe,Vt,_e);P.pixelStorei(P.UNPACK_ROW_LENGTH,se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,us),P.pixelStorei(P.UNPACK_SKIP_ROWS,_n),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yr),xt===0&&F.generateMipmaps&&P.generateMipmap(Me),K.unbindTexture()},this.initRenderTarget=function(M){rt.get(M).__webglFramebuffer===void 0&&yt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?yt.setTextureCube(M,0):M.isData3DTexture?yt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?yt.setTexture2DArray(M,0):yt.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){C=0,I=0,L=null,K.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Uh=[[.026,.021,.015,-.015],[.041,.003,.013,-.018],[.048,-.023,.017,-.018],[.046,-.058,.016,-.014],[.014,-.059,.013,-.013],[.001,-.068,.014,-.013],[-.034,-.069,.017,-.014],[-.045,-.046,.012,-.017],[-.051,-.017,.011,-.021],[-.035,.001,.012,-.018],[-.026,.021,.015,-.015]];var ab=Uh.length-1,Sf=Math.min(...Uh.map(i=>i[1])),bf=Math.max(...Uh.map(i=>i[1])),lb=new T(0,0,(Sf+bf)/2),Tf=new T(.047,.027,(bf-Sf)/2);var ub=new Ce,db=new T,fb=new T,pb=new le;var mb=new T,gb=new T;var _b=new T;var xb=new T,yb=new T,vb=new T,Mb=new an,Sb=new T;function Do(i,t=0){let e=i.attributes.position,n=[],s=[],r=new Set;for(let m=0;m<e.count;m++){let x=new T().fromBufferAttribute(e,m),g=x.toArray().map(p=>p.toFixed(5)).join(",");r.has(g)||(r.add(g),n.push(x))}for(let m=0;m<(i.index?.count??e.count);m+=3){let x=y=>new T().fromBufferAttribute(e,i.index?i.index.getX(y):y),g=x(m),p=x(m+1),w=x(m+2),S=new an(g,p,w).getNormal(new T);S.lengthSq()>.1&&s.push({a:g,b:p,c:w,n:S})}let o=t||Math.max(...n.map(m=>m.length())),{x:a,y:l,z:c}=new Ke().setFromPoints(n).getSize(new T),h=Math.max(1e-4,t**2*.4),u=t?new T().setScalar(1/h):new T(12/Math.max(.001,l*l+c*c),12/Math.max(.001,a*a+c*c),12/Math.max(.001,a*a+l*l)),d=t?2*t:Math.min(a,l,c),f=m=>{let x=[];for(let g of m)g.lengthSq()>.5&&!x.some(p=>Math.abs(p.dot(g))>.9999)&&x.push(g);return x};return{vertices:n,faces:s,sphereRadius:t,radius:o,inverseInertia:u,thickness:d,normals:t?[]:f(s.map(m=>m.n)),edges:t?[]:f(s.flatMap(m=>[new T().subVectors(m.b,m.a).normalize(),new T().subVectors(m.c,m.b).normalize(),new T().subVectors(m.a,m.c).normalize()]))}}var bb=new T,Tb=new T,wb=new T,Eb=new T,Ab=new T;function ar(i){return Do(new re(i.x*2,i.y*2,i.z*2))}var Cb=new T;var wf=Do(new lo(1,0).scale(...Tf)),Rb={mesh:{position:new T,quaternion:new Ce},shape:wf,radius:wf.radius,precise:!0};var Pb=new T,Ib=new T,Db=new T,Lb=new Ce,Ub=new Ce,Nb=new Ce;var Fb=new T,Ob=new T,Bb=new T,zb=new T;var Vb=new T;var kb=new T,Gb=new T,Hb=new T,Wb=new T,Xb=new T,qb=new T,Yb=new T;var Zb={mesh:{position:null,quaternion:new Ce},shape:{sphereRadius:0,normals:[],edges:[]}};function Jl(i,t,e){let n=new re(i,t,e),{uv:s,normal:r}=n.attributes;for(let o=0;o<s.count;o++){let a=Math.abs(r.getX(o))>.5,l=Math.abs(r.getY(o))>.5,c=a?e:i,h=l?e:t;s.setXY(o,s.getX(o)*c/2.6,s.getY(o)*h/2.6)}return n}function Lo(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}var Pi=(i,t,e)=>i+(t-i)*e,lr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function $l(i,t){let e=Math.floor(i),n=Math.floor(t),s=lr(0,1,i-e),r=lr(0,1,t-n);return Pi(Pi(Lo(e,n),Lo(e+1,n),s),Pi(Lo(e,n+1),Lo(e+1,n+1),s),r)}function Ef(i,t){return $l(i,t)*.54+$l(i*2.07+3.4,t*2.07-6.1)*.26+$l(i*4.2+9,t*4.2)*.13+$l(i*8.6,t*8.6-13)*.07}function Af(i){let n=new Uint8Array(2097152),s=Array.from({length:1024},(l,c)=>[Math.cos(c/1024*2*Math.PI),Math.sin(c/1024*2*Math.PI)]),r=i?[12,19,38]:[188,213,225],o=i?[2,5,16]:[40,109,182];for(let l=0;l<512;l++){let c=Math.sin((l/511-.5)*Math.PI),h=Math.sqrt(Math.max(0,1-c*c)),u=Math.max(0,c),d=u**.54,f=r.map((m,x)=>Pi(m,o[x],d));for(let m=0;m<1024;m++){let x=4*(m+l*1024),g=0,p=0,w=0;if(c>.025)if(i){let y=Lo(m+792,l+677);y>.9988&&(w=(y-.9988)*49e3*lr(.09,.3,c))}else{let[y,R]=s[m],C=2.8*h/(c+.16),I=y*C+3.6,L=R*C-8.1,b=Ef(I,L),v=Ef(I-.12,L-.09);g=lr(.49,.66,b)*lr(.025,.13,c),p=Math.max(.38,Math.min(1,.72+(b-v)*5+(b-.54)*.8))}let S=i?1:Pi(.94,1,lr(.05,.34,c));n[x]=Pi(f[0],(139+115*p)*S,g)+w,n[x+1]=Pi(f[1],(154+100*p)*S,g)+w*.94,n[x+2]=Pi(f[2],(178+77*p)*S,g)+w*.86,n[x+3]=255}}let a=new Ti(n,1024,512,un);return a.colorSpace=ye,a.wrapS=qn,a.magFilter=sn,a.minFilter=Rn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Cf(){return{day:Af(!1),night:Af(!0)}}var we=(i,t,e,n)=>({xMin:i,xMax:t,zMin:e,zMax:n}),Rf=we(-24,24,-51,7),Pf=34521,If={x:0,y:0,z:3},Kl={x:.05,y:1.16,z:5.9},cr={materials:{name:"Mat\xE9riaux et rendu",color:"#d9bb90",bounds:we(-23,-9,-5,6),sign:[-16,-4.7]},start:{name:"D\xE9part et miroir",color:"#b1c5c6",bounds:we(-6,6,-5,7),sign:[-3.9,4.9]},objects:{name:"Bac \xE0 objets",color:"#d6a990",bounds:we(9,23,-5,6),sign:[16,-3.9]},ice:{name:"Glace",color:"#a0d4e0",bounds:we(-23,-9,-23,-8),sign:[-16,-9.2]},jumping:{name:"Sauts muraux",color:"#d7ac84",bounds:we(-6,6,-23,-8),sign:[-4.55,-9.5]},throwing:{name:"Lancers et cible",color:"#dfc78a",bounds:we(9,23,-23,-8),sign:[12,-9.25]},hills:{name:"Terrain vallonn\xE9",color:"#b5cb99",bounds:we(-23,-9,-49,-27),sign:[-16,-28.5]},course:{name:"Parcours en hauteur",color:"#c5b4da",bounds:we(-6,6,-49,-27),sign:[0,-28.4]},coconuts:{name:"Cocotier",color:"#a4c99c",bounds:we(9,23,-34,-27),sign:[12,-28.25]},gravity:{name:"Gravit\xE9 faible",color:"#dfd3a1",bounds:we(9,23,-48,-37),sign:[16,-38.2]}},jb=[we(-9,-6,-51,7),we(6,9,-51,7),we(-24,24,-8,-5),we(-24,24,-27,-23),we(9,23,-37,-34)],Df=[{name:"Glace",bounds:cr.ice.bounds,type:12,friction:.035},{name:"Gravit\xE9 faible",bounds:cr.gravity.bounds,type:3,friction:.75,gravity:.28},{name:"Sol central",bounds:we(-9,9,-51,7)},{name:"Sol ouest",bounds:we(-23,-9,-51,-23)},{name:"Sol ouest",bounds:we(-23,-9,-8,7)},{name:"Bordure ouest",bounds:we(-24,-23,-51,7)},{name:"Sol est",bounds:we(9,23,-51,-48)},{name:"Sol est",bounds:we(9,23,-37,7)},{name:"Bordure est",bounds:we(23,24,-51,7)}],hr={objects:[13,-2.5],largeObjects:[18.8,-2.5],rendering:[-15.5,-3.5],course:[4.7,-29],coconuts:[19.4,-32.5]},ur=[{x:13,y:1,z:-.3},{x:18.8,y:1,z:-.3}],Lf=[1.75,4.75].flatMap(i=>[11.5,14,16.5,19,21.5].map(t=>({x:t,z:i}))),Nh={x:16,z:-31},Fh={x:16,y:1.52,z:-21},jl={x:-19.4,y:.68,z:-3.25},Uf=i=>({x:-20+i%6*1.52,z:.5-Math.floor(i/6)*1.25}),Nf={start:[["Tapis de d\xE9part",0,-.06,3.45,6.7,.13,4.2,13]],jumping:[["Pente",0,.47,-11.35,3.75,.43,4.7,2,.28,.88],["Mur gauche",-2.55,2.2,-16.55,.38,4.4,6.2,2],["Mur droit",2.55,2.2,-16.55,.38,4.4,6.2,2],["Palier",0,1.55,-19.2,2.7,.38,1.4,3],["Portique haut",0,3.15,-20.8,5.5,.45,.58,2],["Marche",4.65,.21,-11,1.1,.42,1.6,3],["Appui haut",4.65,.48,-13.3,1.1,.96,1.8,0]],throwing:[["Pas de tir",Fh.x,-.096,-14,4.2,.2,4.7,16]],course:[...Array.from({length:5},(i,t)=>{let e=.3+t*.265;return["Palier "+(t+1),-3.75,e*.5,-29.65-t*1.7,2.1,e,1.35,t%2?2:3]}),["Rampe longue",-3.75,1.9,-40.52,2.65,.4,7.8,2,.18],["Balcon",-3.75,2.52,-45.93,3.8,.44,3.3,3],["Passerelle",-1.12,2.54,-45.93,1.5,.4,1.4,0],["Arriv\xE9e",1.02,2.52,-46.42,2.8,.44,2.8,1],...Array.from({length:3},(i,t)=>[["Paroi ouest "+(t+1),1.35,2.15+t*.32,-33.4-t*3.55,.45,4.3+t*.64,2.7,2],["Paroi est "+(t+1),4.78,2.36+t*.3,-34.2-t*3.55,.45,4.72+t*.6,2.7,3]]).flat(),["Plateforme haute",3.06,3.4,-43.15,3.8,.45,2.1,0]]};function Ql(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new $n(n);return s.colorSpace=ye,s}function Ff(i,t){let{day:e,night:n}=Cf(),s=new Kt(new ho(180,40,20),new Ge({map:e,side:He,fog:!1,toneMapped:!1}));i.add(s);let r=Ql(128,128,(_,A)=>{let N=_.createRadialGradient(A/2,A/2,0,A/2,A/2,A/2);N.addColorStop(0,"#fff8df"),N.addColorStop(.12,"#fff3bd"),N.addColorStop(.18,"rgba(255,225,144,.40)"),N.addColorStop(1,"rgba(255,220,144,0)"),_.fillStyle=N,_.fillRect(0,0,A,A)}),o=new Xr(new Gs({map:r,blending:bo,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(-50,38,-64),o.scale.setScalar(34),i.add(o);let a=e.clone();a.mapping=Ks,a.needsUpdate=!0;let l=new rr(t);i.environment=l.fromEquirectangular(a).texture,l.dispose();let c=new ji("#daeaff","#88724c",2.25),h=new Qi("#fff0d0",3);h.position.set(-14,25,-16),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:72}),h.shadow.bias=-25e-5,h.shadow.normalBias=.025,i.add(c,h,h.target);let u=new T,d=[{sky:"#ffffff",fog:"#a6d4ea",fill:"#daeaff",ground:"#88724c",hemi:2.25,sun:"#fff0d0",power:3,xyz:[-14,25,-16],glow:1},{sky:"#e39b85",fog:"#ec986e",fill:"#d8b6dc",ground:"#b37762",hemi:1.15,sun:"#ff9c51",power:3.25,xyz:[-25,7,-18],glow:.93},{sky:"#ffffff",fog:"#0b1020",fill:"#708edc",ground:"#292e44",hemi:.21,sun:"#879eff",power:.27,xyz:[22,20,-18],glow:.19}],f=0;function m(_){f=d[_]?_:0;let A=d[f];c.color.set(A.fill),c.groundColor.set(A.ground),c.intensity=A.hemi,h.color.set(A.sun),h.intensity=A.power,u.set(...A.xyz),h.position.copy(h.target.position).add(u),o.position.copy(u).normalize().multiplyScalar(94),o.material.color.set(A.sun),o.material.opacity=A.glow,s.material.map=f===2?n:e,s.material.color.set(A.sky),i.fog.color.set(A.fog),i.background.set(A.fog),i.environmentIntensity=g*[1,.56,.09][f]}function x(_){if(!h.castShadow)return;let A=h.target.position,N=Math.round(_.x/4)*4,Z=Math.round(_.y/4)*4,B=Math.round(_.z/4)*4;A.x===N&&A.y===Z&&A.z===B||(A.set(N,Z,B),h.position.copy(A).add(u))}let g=0;i.background=new Ot(d[0].fog);let p=[["Ardoise","#555e6a","#b8c8d2",.77,0,1],["Nacre","#537586","#f5e9de",.22,.34,1],["Brique","#855443","#e8a879",.92,0,1],["Sable","#a28e61","#e3c58e",.96,0,1],["Marbre","#bbb8b0","#676d95",.24,.03,1],["Bois","#664527","#d9a864",.63,0,1],["Cuivre","#794a36","#f4a461",.25,.83,1],["Chrome","#758291","#eaf2fa",.1,.97,1],["Carreaux","#293e4b","#a5d9cb",.19,.15,1],["B\xE9ton","#626664","#acafa0",.96,0,1],["Verre bleu","#94cfdd","#e3fcff",.12,.24,.39],["Verre ambre","#d1a053","#f9e3a4",.18,.26,.46],["Glace","#7cb0cf","#e4fcff",.16,.2,.64],["Caoutchouc","#45404b","#a1a1b6",.98,0,1],["\xC9mail","#40468c","#f5e1a8",.3,.14,1],["Mosaique","#455d62","#f4d2a4",.52,.16,1],["Benchmark","#141414","#efefef",.86,0,1]];function w(_,A,N){let[,Z,B]=p[A],ut=512;_.save(),_.scale(N/512,N/512),_.fillStyle=Z,_.fillRect(0,0,ut,ut);let tt=A+19;function lt(){return tt=Math.imul(tt,1664525)+1013904223>>>0,tt/4294967296}if(_.fillStyle=B,A===16){for(let ot=0;ot<16;ot++)for(let J=0;J<16;J++)(J+ot)%2===0&&_.fillRect(J*32,ot*32,32,32);_.fillStyle="#ff3957",_.fillRect(253,0,6,512),_.fillRect(0,253,512,6)}else if([0,2,8,15].includes(A)){let ot=A===15?32:64;_.globalAlpha=.48;for(let J=0;J<ut;J+=ot){_.fillRect(0,J,ut,A===8?3:2);for(let mt=-ot;mt<ut;mt+=ot)_.fillRect(mt+J/ot%2*(A===2?ot/2:0),J,2,ot)}}else if([4,5,6,7,10,11,12].includes(A)){let ot=A===5?38:A===7?64:18;for(let J=0;J<ot;J++){_.strokeStyle=B,_.globalAlpha=.08+lt()*.22,_.lineWidth=A===5?1+lt()*8:1+lt()*4;let mt=lt()*ut,It=A===5?.018:.009;_.beginPath();for(let dt=0;dt<=ut;dt+=8){let gt=mt+Math.sin(dt*It+J)*(A===6||A===7?4:12+J%5*3)+(A===4?dt*.28:0);dt===0?_.moveTo(dt,gt):_.lineTo(dt,gt)}_.stroke()}}else{_.globalAlpha=.27;for(let ot=0;ot<120;ot++){let J=lt()*ut,mt=lt()*ut,It=2+lt()*6;_.beginPath(),_.arc(J,mt,It,0,Math.PI*2),_.fill()}}if(A!==16)for(let ot=0;ot<4400;ot++)_.globalAlpha=.05+lt()*.1,_.fillStyle=lt()>.5?B:"#222324",_.fillRect(lt()*ut,lt()*ut,1+lt()*4,1+lt()*3);_.restore()}let S=new Set([0,2,4,5,8,15,16]),y=p.map(([_,A,N,Z,B,ut],tt)=>{let lt=S.has(tt)?512:256,ot=Ql(lt,lt,mt=>w(mt,tt,lt));ot.wrapS=ot.wrapT=qn;let J=new hn({map:ot,roughness:Z,metalness:B,flatShading:!0,opacity:ut,transparent:ut<1,depthWrite:ut===1});return J.name=_,J}),R=y.map(_=>_.map.image),C=512,I=y.map(_=>new je({map:_.map,flatShading:!0,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite})),L={value:0},b={value:.24},v={value:null},D={value:0};function z(){v.value?.dispose(),v.value=Ql(512,512,(_,A)=>{_.fillStyle="#ffffff",_.fillRect(0,0,A,A);let N=A/52,Z=A/64;for(let B of V){if(!B.position||!B.half||B.position.y+B.half.y<.22)continue;let ut=(B.position.x+26)*N,tt=(B.position.z+54)*Z,lt=Math.min(55,B.half.x*N+5),ot=Math.min(72,B.half.z*Z+6);_.save(),_.translate(ut+B.half.y*N*.2,tt+B.half.y*Z*.24),_.scale(lt,ot);let J=_.createRadialGradient(0,0,.15,0,0,1);J.addColorStop(0,"rgba(22,37,65,.54)"),J.addColorStop(.58,"rgba(36,54,76,.29)"),J.addColorStop(1,"rgba(38,48,57,0)"),_.fillStyle=J,_.fillRect(-1,-1,2,2),_.restore()}})}for(let _ of[...y,...I])_.onBeforeCompile=A=>{A.uniforms.uFocusAmount=L,A.uniforms.uFocusRadius=b,A.uniforms.uLabLightmap=v,A.uniforms.uLabBakedStrength=D,A.vertexShader=`varying vec3 vLabPosition;
`+A.vertexShader,A.vertexShader=A.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vLabPosition=(modelMatrix*vec4(transformed,1.)).xyz;`),A.fragmentShader=`uniform float uFocusAmount; uniform float uFocusRadius; uniform sampler2D uLabLightmap; uniform float uLabBakedStrength; varying vec3 vLabPosition;
`+A.fragmentShader,A.fragmentShader=A.fragmentShader.replace("#include <map_fragment>",`
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
      `)},_.customProgramCacheKey=()=>"gorilla-lab-focus-lightmap-v2";let V=[],W=[];function G(_,A,N,Z,B,ut,tt,lt=0,ot=0,J=1,mt=1,It=!1){let dt=new Kt(It?new re(B,ut,tt):Jl(B,ut,tt),y[lt]);dt.position.set(A,N,Z),dt.rotation.x=ot,dt.receiveShadow=!0,dt.castShadow=!0,i.add(dt);let gt=new T(B/2,ut/2,tt/2),Ut={mesh:dt,position:dt.position,quaternion:dt.quaternion,half:gt,min:gt.clone().negate(),friction:J,gravity:mt,name:_,type:lt,shape:ar(gt)};return V.push(Ut),Ut}let k=Df.map(({name:_,bounds:A,type:N=0,friction:Z=.78,gravity:B=1})=>{let{xMin:ut,xMax:tt,zMin:lt,zMax:ot}=A;return G(_,(ut+tt)/2,-.33,(lt+ot)/2,tt-ut,.66,ot-lt,N,0,Z,B)});for(let _ of Object.values(Nf))for(let A of _)G(...A);let{xMin:nt,xMax:H,zMin:ct,zMax:_t}=Rf;G("But\xE9e arri\xE8re",0,1.35,ct+.4,H-nt,2.7,.6,2),G("But\xE9e ouest",nt+.3,1.05,(ct+_t)/2,.6,2.1,_t-ct,2),G("But\xE9e est",H-.3,1.05,(ct+_t)/2,.6,2.1,_t-ct,2);let{xMin:j,xMax:Mt,zMin:Et,zMax:Ft}=cr.hills.bounds,Rt=Mt-j,Y=Ft-Et,et=16,St=64,Ct=new cn(Rt,Y,et,St).rotateX(-Math.PI/2).translate(j+Rt/2,0,Et+Y/2),Tt=Ct.attributes.uv;for(let _=0;_<Tt.count;_++)Tt.setXY(_,Tt.getX(_)*Rt/2.6,Tt.getY(_)*Y/2.6);let zt=Ct.attributes.position,jt;function P(_){if(jt===_)return;jt=_;let A=jt*.017;for(let N=0;N<zt.count;N++){let Z=zt.getX(N),B=zt.getZ(N),ut=Math.sin(Math.PI*de.clamp((Z-j)/Rt,0,1)),tt=Math.min(1,(B-Et)*.48,(Ft-B)*.48),lt=.93+.56*Math.sin(B*.36+A)+.32*Math.cos(Z*.67+B*.26+A*1.4)+.19*Math.sin(B*.81+A*.67);zt.setY(N,Math.max(0,ut*tt*lt))}zt.needsUpdate=!0,Ct.computeVertexNormals(),Ct.computeBoundingSphere()}P(Pf);let it=new Kt(Ct,y[3]);it.receiveShadow=it.castShadow=!0,i.add(it);let Q=(_,A)=>{let N=de.clamp((_-j)/Rt*et,0,et-1e-6),Z=de.clamp((A-Et)/Y*St,0,St-1e-6),B=Math.floor(N),ut=Math.floor(Z),tt=N-B,lt=Z-ut,ot=et+1,J=ut*ot+B,mt=zt.getY(J),It=zt.getY(J+1),dt=zt.getY(J+ot),gt=zt.getY(J+ot+1);return tt+lt<=1?mt+(It-mt)*tt+(dt-mt)*lt:gt+(dt-gt)*(1-tt)+(It-gt)*(1-lt)};V.push({heightfield:!0,mesh:it,height:Q,...cr.hills.bounds,friction:.81,gravity:1});function $(_,A,N,Z,B=1.45){let ut=Ql(384,72,(lt,ot,J)=>{lt.fillStyle="#202a32",lt.fillRect(0,0,ot,J),lt.fillStyle=Z,lt.font="bold 31px system-ui",lt.textAlign="center",lt.fillText(_,ot/2,48,ot-20)}),tt=new Kt(new cn(3.2,.6),new Ge({map:ut,side:Be}));tt.position.set(A,B,N),i.add(tt),W.push(tt)}for(let _ of Object.values(cr)){$(_.name.toLocaleUpperCase("fr"),..._.sign,_.color);let{xMin:A,xMax:N,zMin:Z,zMax:B}=_.bounds,ut=new Jr(new ne().setFromPoints([new T(A,.025,Z),new T(N,.025,Z),new T(N,.025,B),new T(A,.025,B)]),new wi({color:_.color,transparent:!0,opacity:.72}));i.add(ut),W.push(ut)}$("PALIERS ET RAMPE",-3.75,-28.4,"#e8d2ff"),$("MURS HAUTS",3,-31,"#e8d2ff"),$("ARRIV\xC9E",1.02,-48.15,"#e8d2ff",3.4);let K=new hn({color:"#c8e6ed",metalness:1,roughness:.16}),ht=new Kt(new Mn(.54,2),K);ht.position.set(jl.x,jl.y,jl.z),ht.castShadow=!0,i.add(ht);let rt=p.map((_,A)=>{let{x:N,z:Z}=Uf(A);return G("\xC9chantillon "+p[A][0],N,.325,Z,.65,.65,.65,A,0,1,1,!0).mesh}),yt=new Oe(1,12).rotateX(-Math.PI/2),Ht=new Ge({color:5655352,transparent:!0,opacity:.13,depthWrite:!1});function Gt(_){let A=new Kt(yt,Ht);return A.scale.setScalar(_),i.add(A),A}function E(_,A,N,Z,B,ut,tt,lt){let ot=A>=3;t.shadowMap.enabled=ot,h.castShadow=ot,Ht.opacity=A===2?.17:.11,D.value=lt?.38+N*.04:0;let J=A>=9?2048:A>=6?1024:A>=4?512:256;h.shadow.intensity=.45+A*.055,h.shadow.radius=.65+A*.12;let mt=13+A*1.2;Object.assign(h.shadow.camera,{left:-mt,right:mt,top:mt,bottom:-mt}),h.shadow.camera.updateProjectionMatrix(),h.shadow.mapSize.x!==J&&(h.shadow.map?.dispose(),h.shadow.map=null,h.shadow.mapSize.set(J,J)),o.visible=B,tt!==C&&(C=tt,y.forEach((dt,gt)=>{let Ut=dt.userData.texture??dt.map,U=S.has(gt)?tt:Math.min(256,tt);if(Ut.image.width===U)return;let pt=document.createElement("canvas");pt.width=pt.height=U;let vt=pt.getContext("2d");U>512?w(vt,gt,U):vt.drawImage(R[gt],0,0,U,U);let At=new $n(pt);At.colorSpace=Ut.colorSpace,At.wrapS=Ut.wrapS,At.wrapT=Ut.wrapT,At.repeat.copy(Ut.repeat);for(let ft of[dt,I[gt]])ft.userData.texture=At,ft.map=At,ft.needsUpdate=!0;Ut.dispose()}));let It=_>=4;for(let dt of V)dt.mesh?.isMesh&&!dt.zone&&(dt.mesh.material=It?y[dt.type]:I[dt.type]);it.material=It?y[3]:I[3];for(let dt=0;dt<rt.length;dt++)rt[dt].material=It?y[dt]:I[dt];y.forEach((dt,gt)=>{for(let Ut of[dt,I[gt]])Ut.userData.texture||(Ut.userData.texture=Ut.map),Ut.map=ut?Ut.userData.texture:null,Ut.color.set(ut?"#ffffff":p[gt][1]),Ut.needsUpdate=!0}),g=Z?.21+N*.067:0,K.metalness=Z?.95:.1,K.roughness=Z?.13:.46,s.visible=_>=2,m(f)}return{boxes:V,floors:k,probe:ht,display:rt,visual:E,shadow:Gt,setTimeOfDay:m,centerShadows:x,get hillSeed(){return jt},setHillSeed:P,bakeLightmap:z,mapMaterial:(_,A)=>A>=4?y[_]:I[_],builtObjects:[...V.map(_=>_.mesh).filter(_=>_?.isObject3D),ht,...W],materials:[...y,...I],focus(_,A,N){L.value=_?A*.75:0,b.value=.07+N*.058}}}function Of(i,t,e){let n=new je({color:16777215,vertexColors:!0,flatShading:!0}),s=new Cn(.16,.25,3.15,9,12),r=s.attributes.position,o=new Ot,a=[];for(let j=0;j<r.count;j++){let Mt=Math.round((r.getY(j)+1.575)/3.15*12),Et=Math.floor((Math.atan2(r.getX(j),r.getZ(j))+Math.PI)*1.43);o.setHSL(.084+Mt*.002,.35,.35+Mt%3*.032+Et%3*.018),a.push(o.r,o.g,o.b)}s.setAttribute("color",new kt(a,3));let l=new Je;l.position.set(Nh.x,0,Nh.z),l.rotation.z=-.14,i.add(l);let c=new Kt(s,n);c.position.y=1.575,c.castShadow=c.receiveShadow=!0,l.add(c),l.updateMatrixWorld(!0);function h(j,Mt,Et=.85){let Ft=j.getWorldPosition(new T),Rt=j.getWorldQuaternion(new Ce);t.push({half:Mt,min:Mt.clone().negate(),position:Ft,quaternion:Rt,mesh:{position:Ft,quaternion:Rt},shape:ar(Mt),friction:Et,gravity:1})}for(let j=0;j<4;j++){let Mt=new Ae;Mt.position.y=(j+.5)*3.15/4,l.add(Mt);let Et=.237-j*.022;h(Mt,new T(Et,.398,Et))}let u=[],d=[],f=3.14;function m(j,Mt,Et,Ft){u.push(...j,...Mt,...Et),o.setHSL(.25+Ft*.043,.54,.28+Ft*.17);for(let Rt=0;Rt<3;Rt++)d.push(o.r,o.g,o.b)}for(let j=0;j<10;j++){let Ft=function(Rt,Y){let et=Rt*Et;return[Math.cos(Mt)*et-Math.sin(Mt)*Y,f+Math.sin(Rt*Math.PI)*.38-Rt*Rt*.54+j%3*.055,Math.sin(Mt)*et+Math.cos(Mt)*Y]},Mt=j*2.39996,Et=1.35+j%4*.2;for(let Rt=0;Rt<7;Rt++){let Y=Rt/7,et=(Rt+1)/7,St=.285*Math.sin(Math.PI*Y)**.7,Ct=.285*Math.sin(Math.PI*et)**.7;for(let Tt of[-1,1]){let zt=Ft(Y,St*Tt),jt=Ft(et,Ct*Tt);zt[1]-=.065,jt[1]-=.065,m(Ft(Y,0),zt,jt,.31+Rt%4*.14),m(Ft(Y,0),jt,Ft(et,0),.47+j%3*.16)}}}let x=new ne;x.setAttribute("position",new kt(u,3)),x.setAttribute("color",new kt(d,3)),x.computeVertexNormals();let g=new Kt(x,new je({vertexColors:!0,side:Be,flatShading:!0}));g.castShadow=!0,l.add(g);let p=new hn({color:"#956238",roughness:.92,flatShading:!0}),w=[];for(let j=0;j<5;j++){let Mt=j*Math.PI*2/5,Et=new Kt(new Mn(.124,1),p);Et.position.set(Math.cos(Mt)*(.25+j%2*.1),2.88+j%3*.06,Math.sin(Mt)*(.25+j%2*.1)),Et.scale.set(.91,1.16,.91),Et.castShadow=!0,l.add(Et),w.push(Et)}l.updateMatrixWorld(!0);let S=[],y=[],R=new je({color:"#485d5d",flatShading:!0});function C([j,Mt],Et,Ft){let Rt=new Kt(new re(.095,.68,.11),R);Rt.position.set(j,.34,Mt+.46),Rt.castShadow=Rt.receiveShadow=!0,i.add(Rt),h(Rt,new T(.0475,.34,.055));let Y=new Je;Y.position.set(j,.85,Mt+.4),Y.rotation.x=-.35,i.add(Y);let et=new Kt(new re(.64,.36,.055),new je({color:"#182831"}));Y.add(et);let St=document.createElement("canvas");St.width=512,St.height=96;let Ct=St.getContext("2d"),Tt=new $n(St);Tt.colorSpace=ye;let zt=new Kt(new cn(.61,.095),new Ge({map:Tt}));zt.position.set(0,.116,.03),Y.add(zt);let jt=.592/Ft.length,P=Ft.map(([Q,$],K)=>{let ht=new Kt(new re(jt-.012,.155,.04),new je({color:"#478086"}));ht.position.set(-.296+jt*(K+.5),-.045,.046),Y.add(ht),S.push(ht),ht.userData.touchWidth=jt-.012;let rt=document.createElement("canvas");rt.width=208,rt.height=172;let yt=new $n(rt);yt.colorSpace=ye;let Ht=new Kt(new cn(jt-.017,.139),new Ge({map:yt}));Ht.position.z=.0205,ht.add(Ht);let Gt=-1/0;return ht.userData.action=()=>{let E=performance.now();E-Gt<250||(Gt=E,$(),I(),ht.position.z=.036,setTimeout(()=>{ht.position.z=.046},115))},{label:Q,context:rt.getContext("2d"),texture:yt}});function it(){Ct.fillStyle="#182831",Ct.fillRect(0,0,512,96),Ct.fillStyle="#ffe1a0",Ct.font="bold 38px system-ui",Ct.fillText(Et,17,62,478);for(let Q of P){let $=Q.context;$.fillStyle="#386269",$.fillRect(0,0,208,172),$.fillStyle="#fff2d5",$.textAlign="center",$.font="bold 27px system-ui";let K=(typeof Q.label=="function"?Q.label():Q.label).split("|");K.forEach((ht,rt)=>$.fillText(ht,104,(K.length>1?68:97)+rt*37,188)),Q.texture.needsUpdate=!0}Tt.needsUpdate=!0}y.push(it)}function I(){for(let j of y)j()}C(hr.objects,"BANQUE D\u2019OBJETS",[["Cube",()=>e.spawn(0,ur[0])],["Boule",()=>e.spawn(1,ur[0])],["T\xE9tra\xE8dre",()=>e.spawn(2,ur[0])],["Vider",e.clear]]),C(hr.largeObjects,"GROS OBJETS",[["Rectangle",()=>e.spawn(4,ur[1])],["Sph\xE8re",()=>e.spawn(5,ur[1])]]),C(hr.rendering,"RENDU",[[()=>"Qualit\xE9|"+e.quality(),e.qualityNext],[()=>"R\xE9solution XR|"+e.resolution(),e.resolutionNext],[()=>"Textures|"+e.textureSize(),e.textureNext]]),C(hr.course,"PARCOURS",[["Retour|d\xE9part",e.resetPlayer],["Remettre|objets",e.resetObjects],["Hitboxes|Low / High",e.hitbox],["Appuis|On / Off",e.movement]]),C(hr.coconuts,"COCOTIER",[["Remettre|les cocos",e.resetTree],["Vider|les objets",e.clear]]),I();let L=new Je,{x:b,y:v,z:D}=Fh;L.position.set(b,v,D),i.add(L);let z=["#e2ad5c","#ca664b","#f5e5bd"];for(let j=0;j<3;j++){let Mt=[.9,.58,.27][j],Et=new Kt(new Oe(Mt,20),new je({color:z[j],side:Be}));Et.position.z=j*.012,L.add(Et)}let V=new Kt(new re(.14,1.5,.14),R);V.position.set(0,.75-v,-.11),L.add(V);let W=0,G=document.createElement("canvas");G.width=256,G.height=64;let k=G.getContext("2d"),nt=new $n(G);nt.colorSpace=ye;let H=new Kt(new cn(1.4,.35),new Ge({map:nt,side:Be}));H.position.set(0,2.64-v,.02),L.add(H);function ct(){k.fillStyle="#182831",k.fillRect(0,0,256,64),k.textAlign="center",k.font="bold 28px system-ui",k.fillStyle="#fff0ce",k.fillText("CIBLE  \xB7  "+W,128,42),nt.needsUpdate=!0}function _t(j){for(let Mt of j){if(!Mt.beforePhysics||Mt.owner||Mt.frozen||!Mt.mesh.visible)continue;let Et=Mt.beforePhysics,Ft=Mt.mesh.position;if(Et.z<=D||Ft.z>D||Mt.velocity.z>=-1)continue;let Rt=(Et.z-D)/(Et.z-Ft.z),Y=Math.hypot(de.lerp(Et.x,Ft.x,Rt)-b,de.lerp(Et.y,Ft.y,Rt)-v);Y<=.9+Mt.radius*.45&&(W+=Y<.27?3:Y<.58?2:1,ct())}}return ct(),{targets:S,coconuts:w,redraw:I,updateTarget:_t,score:()=>W,setScore(j){W=j,ct()}}}function zf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ne,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Bf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Bf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Bf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ec=0,Xy=1,qy=new T,Vf=new yo,Oh=new Ze,kf=new T,tc=new an,nc=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new ic,this.unassigned=new ic,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new Bh(t[e]));this._compute()}return this}setFromObject(t){let e=[];return t.updateMatrixWorld(!0),t.traverse(function(n){let s=n.geometry;if(s!==void 0){let r=s.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){let l=new T;l.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){let e=this.faces;for(let n=0,s=e.length;n<s;n++)if(e[n].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){let n=this.faces,s=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){let l=n[o],c=l.distanceToPoint(t.origin),h=l.normal.dot(t.direction);if(c>0&&h>=0)return null;let u=h!==0?-c/h:0;if(!(u<=0)&&(h>0?r=Math.min(u,r):s=Math.max(u,s),s>r))return null}return s!==-1/0?t.at(s,e):t.at(r,e),e}intersectsRay(t){return this.intersectRay(t,qy)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}_removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}_removeAllVerticesFromFace(t){if(t.outside!==null){let e=t.outside,n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}}_deleteFaceVertices(t,e){let n=this._removeAllVerticesFromFace(t);if(n!==void 0)if(e===void 0)this.unassigned.appendChain(n);else{let s=n;do{let r=s.next;e.distanceToPoint(s.point)>this.tolerance?this._addVertexToFace(s,e):this.unassigned.append(s),s=r}while(s!==null)}return this}_resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{let n=e.next,s=this.tolerance,r=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.mark===ec){let l=a.distanceToPoint(e.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r!==null&&this._addVertexToFace(e,r),e=n}while(e!==null)}return this}_computeExtremes(){let t=new T,e=new T,n=[],s=[];for(let r=0;r<3;r++)n[r]=s[r]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){let a=this.vertices[r],l=a.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=a);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:s}}_computeInitialHull(){let t=this.vertices,e=this._computeExtremes(),n=e.min,s=e.max,r=0,o=0;for(let d=0;d<3;d++){let f=s[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}let a=n[o],l=s[o],c,h;r=0,Vf.set(a.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l){Vf.closestPointToPoint(m.point,!0,kf);let x=kf.distanceToSquared(m.point);x>r&&(r=x,c=m)}}r=-1,Oh.setFromCoplanarPoints(a.point,l.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c){let x=Math.abs(Oh.distanceToPoint(m.point));x>r&&(r=x,h=m)}}let u=[];if(Oh.distanceToPoint(h.point)<0){u.push(kn.create(a,l,c),kn.create(h,l,a),kn.create(h,c,l),kn.create(h,a,c));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge(f)),u[d+1].getEdge(1).setTwin(u[f+1].getEdge(0))}}else{u.push(kn.create(a,c,l),kn.create(h,a,l),kn.create(h,l,c),kn.create(h,c,a));for(let d=0;d<3;d++){let f=(d+1)%3;u[d+1].getEdge(2).setTwin(u[0].getEdge((3-d)%3)),u[d+1].getEdge(0).setTwin(u[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(u[d]);for(let d=0,f=t.length;d<f;d++){let m=t[d];if(m!==a&&m!==l&&m!==c&&m!==h){r=this.tolerance;let x=null;for(let g=0;g<4;g++){let p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,x=this.faces[g])}x!==null&&this._addVertexToFace(m,x)}}return this}_reindexFaces(){let t=[];for(let e=0;e<this.faces.length;e++){let n=this.faces[e];n.mark===ec&&t.push(n)}return this.faces=t,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0,n=this.assigned.first().face,s=n.outside;do{let r=n.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(s!==null&&s.face===n);return t}}_computeHorizon(t,e,n,s){this._deleteFaceVertices(n),n.mark=Xy;let r;e===null?r=e=n.getEdge(0):r=e.next;do{let o=r.twin,a=o.face;a.mark===ec&&(a.distanceToPoint(t)>this.tolerance?this._computeHorizon(t,o,a,s):s.push(r)),r=r.next}while(r!==e);return this}_addAdjoiningFace(t,e){let n=kn.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)}_addNewFaces(t,e){this.newFaces=[];let n=null,s=null;for(let r=0;r<e.length;r++){let o=e[r],a=this._addAdjoiningFace(t,o);n===null?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this}_addVertexToHull(t){let e=[];return this.unassigned.clear(),this._removeVertexFromFace(t,t.face),this._computeHorizon(t.point,null,t.face,e),this._addNewFaces(t,e),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let t;for(this._computeInitialHull();(t=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(t);return this._reindexFaces(),this._cleanup(),this}},kn=class i{constructor(){this.normal=new T,this.midpoint=new T,this.area=0,this.constant=0,this.outside=null,this.mark=ec,this.edge=null}static create(t,e,n){let s=new i,r=new Uo(t,s),o=new Uo(e,s),a=new Uo(n,s);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,s.edge=r,s.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){let t=this.edge.tail(),e=this.edge.head(),n=this.edge.next.head();return tc.set(t.point,e.point,n.point),tc.getNormal(this.normal),tc.getMidpoint(this.midpoint),this.area=tc.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}},Uo=class{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){let t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}},Bh=class{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}},ic=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}};var as=class extends ne{constructor(t=[]){super();let e=[],n=[],r=new nc().setFromPoints(t).faces;for(let o=0;o<r.length;o++){let a=r[o],l=a.edge;do{let c=l.head().point;e.push(c.x,c.y,c.z),n.push(a.normal.x,a.normal.y,a.normal.z),l=l.next}while(l!==a.edge)}this.setAttribute("position",new kt(e,3)),this.setAttribute("normal",new kt(n,3))}};var dn=Math.PI*2,sc=.84,di=128;function Li(i){let t=new Uint8Array(di*di*4);for(let n=0;n<di;n++)for(let s=0;s<di;s++){let r=(s+.5)/di,o=(n+.5)/di,a=r>.88&&o>.88?[255,255,255]:i(Math.min(r/sc,1),Math.min(o/sc,1),s,n),l=(s+n*di)*4;for(let c=0;c<3;c++)t[l+c]=de.clamp(Math.round(a[c]),0,255);t[l+3]=255}let e=new Ti(t,di,di);return e.colorSpace=ye,e.generateMipmaps=!0,e.minFilter=Rn,e.magFilter=sn,e.needsUpdate=!0,e}function ls(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function $t(i,t,e=!1){let n=i.index?i.toNonIndexed():i,s=new Ot(t),r=n.attributes.uv,o=n.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)s.toArray(a,l*3),e?r.setXY(l,r.getX(l)*sc,r.getY(l)*sc):r.setXY(l,.95,.95);return n.setAttribute("color",new ve(a,3)),n}function Ui(i,t,e,n,s,r,o,a=0){return{id:i,name:t,collisionGeo:n,mass:e,geo:zf(s),material:new hn({vertexColors:!0,map:r,roughness:o,metalness:a})}}function Gf(i,t,e){let n=i/2,s=t/2,r=new Ji;return r.moveTo(-n+e,-s),r.lineTo(n-e,-s),r.quadraticCurveTo(n,-s,n,-s+e),r.lineTo(n,s-e),r.quadraticCurveTo(n,s,n-e,s),r.lineTo(-n+e,s),r.quadraticCurveTo(-n,s,-n,s-e),r.lineTo(-n,-s+e),r.quadraticCurveTo(-n,-s,-n+e,-s),r}function Ii(i,t,e,n,s){return new ao(Gf(i,t,n),{depth:e,bevelThickness:s,bevelSize:s,bevelSegments:1,curveSegments:2}).translate(0,0,-e/2)}function Di(i,t,e=n=>n){let n=[],s=[],r=[];for(let h=0;h<i.length;h++){let[u,d]=i[h];for(let f=0;f<=t;f++){let m=dn*f/t,x=e(u,d,m,h);if(n.push(x*Math.sin(m),d,x*Math.cos(m)),s.push(f/t,h/(i.length-1)),h===i.length-1||f===t)continue;let g=h*(t+1)+f,p=g+t+1;u>0&&r.push(g,g+1,p),i[h+1][0]>0&&r.push(g+1,p+1,p)}}let o=new ne;o.setAttribute("position",new kt(n,3)),o.setAttribute("uv",new kt(s,2)),o.setIndex(r),o.computeVertexNormals();let{normal:a}=o.attributes,l=new T,c=new T;for(let h=0;h<i.length;h++){let u=h*(t+1),d=u+t;l.fromBufferAttribute(a,u).add(c.fromBufferAttribute(a,d)).normalize(),a.setXYZ(u,l.x,l.y,l.z),a.setXYZ(d,l.x,l.y,l.z)}return o}function No(i,t){let e=[];for(let[n,s]of i){if(n===0){e.push(new T(0,s,0));continue}for(let r=0;r<t;r++){let o=dn*r/t;e.push(new T(n*Math.sin(o),s,n*Math.cos(o)))}}return new as(e)}function Yy(){let e=new co(Gf(.098,.185,.008),3).translate(0,-.001,.0116),n=e.attributes.position;for(let l=0;l<n.count;l++){let c=de.clamp(n.getX(l)/.098+.5,0,1),h=de.clamp((n.getY(l)+.001)/.185+.5,0,1);e.attributes.uv.setXY(l,c,h)}let s=Li((l,c)=>{let h=Math.exp(-((l-.68)**2*7+(c-.24)**2*5)),u=.5+.5*Math.sin((c*1.5+l*.6)*dn),d=c>.033&&c<.05&&l>.3&&l<.7,f=c>.955&&c<.982&&l>.39&&l<.61,m=c>.926&&c<.938&&l>.78&&l<.9;return f?[18,27,42]:d||m?[222,239,247]:[15+58*h+27*u,27+98*h+54*u,59+108*h+47*u]}),r=[$t(Ii(.106,.207,.013,.011,.0019),8425890),$t(Ii(.104,.205,.001,.011,.0014).translate(0,0,.0093),1120289),$t(Ii(.102,.203,.001,.011,.0011).translate(0,0,-.0085),3491155),$t(e,16777215,!0),$t(Ii(.042,.054,.002,.009,.0012).translate(-.025,.067,-.0109),6387077),$t(new re(.0036,.024,.004).translate(.055,.029,0),11714250),$t(new re(.0036,.015,.004).translate(-.055,.032,0),11385285),$t(new re(.0036,.012,.004).translate(-.055,.011,0),11385285)];for(let[l,c]of[[-.034,.08],[-.022,.059]])r.push($t(new Cn(.009,.009,.0026,10).rotateX(Math.PI/2).translate(l,c,-.0138),1580841)),r.push($t(new Oe(.0055,10).rotateY(Math.PI).translate(l,c,-.01515),4350847));r.push($t(new Oe(.0037,8).rotateY(Math.PI).translate(-.014,.078,-.01312),16771258));let o=[[-.057,-.106],[.047,-.106],[.057,-.096],[.057,.106],[-.047,.106],[-.057,.096]],a=new as([-.0152,.0117].flatMap(l=>o.map(([c,h])=>new T(c,h,l))));return Ui("phone","T\xE9l\xE9phone",.23,a,r,s,.35,.21)}function Zy(){let t=[-.165,-.055,.055,.165],e=Array.from({length:21},(a,l)=>{let c=l/20;return[l===0||l===20?0:.062*Math.sin(Math.PI*c)**.31,(c*2-1)*.275]}),s=Di(e,18,(a,l,c)=>{let h=Math.max(0,-Math.sin(c)),u=.035*Math.cos(c),d=Math.max(...t.map(f=>Math.exp(-(((l-f+u)/.014)**2))));return a*(1-.14*h**6*d+.025*Math.cos(c*3+7*l))}).rotateZ(-Math.PI/2).scale(1,.85,1),r=Li((a,l,c,h)=>{let u=dn*a,d=(l*2-1)*.275,f=Math.max(0,-Math.sin(u)),m=Math.max(...t.map(w=>Math.exp(-(((d-w+.035*Math.cos(u))/.009)**2)))),x=f**3*m,g=ls(c,h)-.5,p=9*Math.sin(a*180+l*43)*Math.cos(l*29)+20*g;return[150+29*f+58*x+p,76+24*f+70*x+p,24+11*f+52*x+p*.8]}),o=No([[0,-.275],[.059,-.207],[.059,.207],[0,.275]],5).rotateZ(-Math.PI/2).scale(1,.88,1);return Ui("bread","Baguette de pain",.27,o,[$t(s,16777215,!0)],r,.9)}function Jy(){let i=Li((r,o,a,l)=>{let c=o>.34&&o<.67,h=Math.abs(o-.5)*7,u=(r*28+h)%1<.17,d=Math.abs(o-.5)<.013,m=46+12*ls(a,l)-(c&&(u||d)?35:0);return[m*.94,m,m*1.04]}),t=Di([[.145,-.061],[.188,-.077],[.224,-.074],[.25,-.052],[.257,-.03],[.257,.03],[.25,.052],[.224,.074],[.188,.077],[.145,.061]],22).rotateX(Math.PI/2),e=Di([[.126,-.055],[.167,-.063],[.177,-.054],[.166,-.046],[.166,.046],[.177,.054],[.167,.063],[.126,.055]],16).rotateX(Math.PI/2),n=[$t(t,16777215,!0),$t(e,11056059),$t(new Cn(.067,.067,.124,10).rotateX(Math.PI/2),9346214),$t(new Cn(.039,.039,.133,8).rotateX(Math.PI/2),4608863)];for(let r=0;r<5;r++){let o=dn*r/5;n.push($t(new re(.108,.029,.088).translate(.101,0,0).rotateZ(o),9280424))}let s=No([[.257,-.071],[.257,.071]],6).rotateX(Math.PI/2);return Ui("wheel","Roue",1.8,s,n,i,.64,.23)}function $y(){let i=Li((r,o,a,l)=>{let c=ls(a,l),h=o>.26&&o<.34||o>.455&&o<.475,u=c>.98?-44:19*(c-.5)+5*Math.cos(dn*r*4);return h?[46+u,94+u,117+u]:[240+u,223+u,194+u]}),t=Di([[0,-.091],[.063,-.091],[.071,-.087],[.076,-.075],[.084,-.032],[.091,.052],[.095,.089],[.091,.094],[.083,.091],[.081,.055],[.074,-.032],[.068,-.064],[.056,-.074],[0,-.075]],20),e=new fo(.056,.013,6,14).scale(.91,1.07,1).translate(.109,.013,0),n=[[.08,-.091],[.103,.094]].flatMap(([r,o])=>Array.from({length:5},(a,l)=>{let c=Math.PI+dn*l/5;return new T(r*Math.cos(c),o,r*Math.sin(c))}));n.push(new T(.166,-.027,.01),new T(.166,.053,-.01));let s=new as(n);return Ui("cup","Tasse",.39,s,[$t(t,16777215,!0),$t(e,15785922)],i,.37)}function Ky(){let i=Di([[0,-.143],[.027,-.143],[.032,-.138],[.032,-.124],[.028,-.122],[.028,-.103],[.029,-.045],[.029,.019],[.033,.042],[.043,.061],[.052,.079],[.053,.116],[.051,.133],[.044,.133],[.04,.123]],16),t=Li((s,r,o,a)=>{let l=9*ls(o,a),c=11*Math.cos(s*dn*24);if(r>.23&&r<.28||r>.72&&r<.78)return[225+l,128+l,43+l];if(r>.33&&r<.51){let u=40+.6*c+8*Math.cos(r*dn*48+s*dn*13)+l;return[u,u*1.08,u*1.13]}let h=63+c+l+14*Math.cos(s*dn*4);return[h,h*1.13,h*1.24]}),e=[$t(i,16777215,!0),$t(new Zs(.021,.043,16).rotateX(-Math.PI/2).translate(0,.123,0),9478317),$t(new Oe(.021,16).rotateX(-Math.PI/2).translate(0,.122,0),3491417),$t(new Oe(.012,12).rotateX(-Math.PI/2).translate(0,.1225,0),13627124),$t(new Cn(.012,.013,.007,12).rotateX(Math.PI/2).translate(0,.035,.03),1976111),$t(new Oe(.008,12).translate(0,.035,.0336),15633202)],n=No([[.033,-.143],[.054,.133]],6);return Ui("flashlight","Lampe torche",.31,n,e,t,.46,.28)}function jy(){let i=Di([[0,-.106],[.039,-.107],[.057,-.112],[.063,-.108],[.068,-.095],[.069,-.059],[.069,-.02],[.069,.02],[.069,.059],[.068,.086],[.06,.099],[.059,.109],[.054,.109],[.052,.101],[0,.101]],20),t=["1110101110111","1000100010001","1100100100010","1000101000100","1000101110111"],e=Li((r,o,a,l)=>{let c=10*ls(a,l);if(o<.21||o>.74)return[162+c,174+c,181+c];let h=(r+.2)%.5,u=Math.floor((h-.098)*64),d=Math.floor((.61-o)*43),f=o-(.375+.055*Math.cos(dn*r*2));if(t[d]?.[u]==="1"||Math.abs(f)<.018||Math.abs(f+.04)<.007)return[244+c,224+c,169+c];let m=20*Math.cos(dn*r*2)+c;return[173+m,27+m*.28,55+m*.5]}),n=[$t(i,16777215,!0),$t(new Oe(.012,10).scale(1,1.42,1).rotateX(-Math.PI/2).translate(0,.1014,.024),5253684),$t(new Zs(.0068,.012,10).scale(1,1.49,1).rotateX(-Math.PI/2).translate(0,.106,-.009),14476264),$t(new Oe(.0042,8).rotateX(-Math.PI/2).translate(0,.1063,.001),7899282)],s=No([[.069,-.112],[.069,.109]],6);return Ui("soda","Canette de soda",.35,s,n,e,.42,.27)}function Qy(){let i=Di([[.134,-.177],[.131,-.15],[.119,-.112],[.107,-.061],[.096,-.017],[.085,.032],[.074,.081],[.064,.127],[.054,.17],[.049,.198],[.045,.206],[.034,.204],[.03,.192],[.033,.148]],16),t=Li((s,r,o,a)=>{let l=15*ls(o,a),c=8*Math.cos(s*dn*4);if(r>.321&&r<.435||r>.536&&r<.635){let u=o%4===0||(o+2*a)%7===0?14:0;return[240+l-u,236+l-u,216+l-u]}return[206+l+c,67+l+c,16+l*.7]}),e=[$t(i,16777215,!0),$t(Ii(.32,.32,.031,.023,.005).rotateX(Math.PI/2).translate(0,-.188,0),3222826),$t(new Oe(.035,12).rotateX(-Math.PI/2).translate(0,.148,0),7348750)],n=No([[.232,-.2085],[.224,-.174],[.067,.206]],4).rotateY(Math.PI/4);return Ui("cone","C\xF4ne de chantier",.58,n,e,t,.78)}function tv(){let i=Li((s,r,o,a)=>{let l=8*ls(o,a);if(r>.19&&r<.49&&s>.15&&s<.85)return Math.hypot(s*12%1-.5,r*21%1-.5)<.32?[11,17,20]:[49+l,57+l,61+l];if(r>.6&&r<.86&&s>.12&&s<.88){if(!(r>.628&&r<.832&&s>.16&&s<.84))return[13,22,24];let d=s>.26&&s<.7&&r>.68&&r<.7+.08*s&&s*21%1>.3,f=r>.793&&r<.813&&s>.22&&s<.41;return d||f?[43,66,54]:[157+l,191+l,139+l]}return s>.21&&s<.79&&r>.112&&r<.134?[223,178,93]:[39+l,49+l,54+l]}),t=Di([[0,.095],[.019,.095],[.019,.11],[.013,.116],[.01,.153],[.008,.159],[0,.159]],10).translate(-.045,0,0),e=[$t(Ii(.138,.22,.061,.016,.004),14788675),$t(Ii(.121,.206,.004,.016,.002).translate(0,-.006,.034),2107952),$t(new cn(.106,.174).translate(0,-.004,.0395),16777215,!0),$t(t,2502456),$t(new Cn(.014,.017,.016,10).translate(.04,.117,.001),2503482),$t(new re(.008,.047,.027).translate(-.072,.014,-.002),3028798),$t(new re(.006,.02,.019).translate(-.072,-.043,-.002),3950414),$t(new Oe(.004,8).translate(.04,.066,.0397),15817792),$t(new Oe(.004,8).translate(-.04,.066,.0397),7903100),$t(Ii(.045,.074,.011,.008,.001).translate(0,-.021,-.038),2305331)],n=[[-.076,.075,-.049,.039,-.114],[-.076,.075,-.039,.039,.108],[-.056,-.034,-.01,.01,.159]].flatMap(([s,r,o,a,l])=>[new T(s,l,o),new T(r,l,o),new T(r,l,a),new T(s,l,a)]);return Ui("radio","Talkie-walkie",.43,new as(n),e,i,.61,.08)}function Hf(){return[Yy(),Zy(),Jy(),$y(),Ky(),jy(),Qy(),tv()]}var ev=[0,1,2,3,4,5,7,8,9,10];function Wf(i){Lf.forEach(({x:t,z:e},n)=>i(ev[n],new T(t,.8,e)))}function Xf(){let i=[["Cube",new re(.33,.33,.33),"#b76b50",0,1.35],["Boule",new Mn(.225,2),"#73afcb",.225,.85],["T\xE9tra\xE8dre",new uo(.29),"#d8ae53",0,1],["Brique",new re(.56,.19,.28),"#b35a71",0,1.5],["Grand rectangle",new re(1.42,.75,.88),"#738aa5",0,4.2],["Grande sph\xE8re",new Mn(.6,4),"#dbab58",.6,3.7],["Coco",new Mn(.124,1),"#956238",.124,.44]].map(([t,e,n,s,r])=>({name:t,geo:e,mass:r,shape:Do(e,s),material:new hn({color:n,roughness:.44,metalness:.1,flatShading:!0}),lowShape:s?null:ar(e.computeBoundingBox()??e.boundingBox.getSize(new T).multiplyScalar(.5))}));for(let{collisionGeo:t,sphere:e=0,...n}of Hf()){let s=Do(t??n.geo,e);i.push({...n,shape:s,lowShape:s})}return i}var Yf=Object.freeze([8,16,32,48]),Zf=16,rc=24,qf=new WeakMap,Ni=de.clamp,fr=de.lerp,Vh=i=>i*i*(3-2*i);function dr(i,t,e,n){return Number.isFinite(i)?Ni(i,t,e):n}function pr(i={}){let t=Yf.includes(i?.detail)?i.detail:Zf,e=i?.heights;return{detail:t,seed:Math.round(dr(i?.seed,0,2147483647,1)),amplitude:dr(i?.amplitude,0,12,0),frequency:dr(i?.frequency,.015,2,.12),grass:dr(i?.grass,0,1,0),shrub:dr(i?.shrub,0,1,0),heights:Array.isArray(e)&&e.length===(t+1)**2?Array.from(e,n=>dr(n,-rc,rc,0)):null}}function Jf(i,t,e,n){let s=Ni(e,0,t),r=Ni(n,0,t),o=Math.min(t-1,Math.floor(s)),a=Math.min(t-1,Math.floor(r)),l=s-o,c=r-a,h=t+1,u=a*h+o,d=i[u],f=i[u+1],m=i[u+h],x=i[u+h+1];return l+c<=1?d+(f-d)*l+(m-d)*c:x+(m-x)*(1-l)+(f-x)*(1-c)}function $f(i,t){let e=Yf.includes(t)?t:Zf;if(e===i.detail)return i;if(!i.heights)return{...i,detail:e,heights:null};let n=e+1,s=i.detail/e,r=Array.from({length:n**2},(o,a)=>Jf(i.heights,i.detail,a%n*s,Math.floor(a/n)*s));return{...i,detail:e,heights:r}}function fi(i,t,e){let n=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e+1,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function zh(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=Vh(i-n),o=Vh(t-s),a=fr(fi(n,s,e),fi(n+1,s,e),r),l=fr(fi(n,s+1,e),fi(n+1,s+1,e),r);return 2*fr(a,l,o)-1}function kh(i){let{w:t,d:e,terrain:n}=i,{detail:s,seed:r,amplitude:o,frequency:a,heights:l}=n,c=qf.get(i),h=c&&c.w===t&&c.d===e&&c.detail===s&&c.seed===r&&c.amplitude===o&&c.frequency===a;if(h&&c.heights===l)return c;let u=s+1,d=h?c.procedural:new Float64Array(u**2);if(!h&&o)for(let x=0;x<=s;x++)for(let g=0;g<=s;g++){let p=(g/s-.5)*t*a,w=(x/s-.5)*e*a;d[x*u+g]=o*(.62*zh(p,w,r)+.26*zh(p*2.03,w*2.03,r+13)+.12*zh(p*4.13,w*4.13,r+37))}let f=l?d.map((x,g)=>x+l[g]):d,m={w:t,d:e,detail:s,seed:r,amplitude:o,frequency:a,heights:l,procedural:d,surface:f};return qf.set(i,m),m}function Kf(i,t,e){let{detail:n,w:s,d:r,surface:o}=i;return Jf(o,n,(t/s+.5)*n,(e/r+.5)*n)}function nv(i,t,e){let{detail:n,surface:s}=i,r=n+1,o=Math.max(0,t-1),a=Math.min(n,t+1),l=Math.max(0,e-1),c=Math.min(n,e+1),h=0,u=0;for(let d=l;d<=c;d++)for(let f=o;f<=a;f++)f===t&&d===e||(h+=s[d*r+f],u++);return h/u}function jf(i,t,e,{mode:n,radius:s,strength:r,target:o}={}){if(!i?.terrain||!["raise","lower","smooth","flatten"].includes(n)||![t,e,s,r].every(Number.isFinite)||s<=0||r<=0)return!1;let a=kh(i),{detail:l,w:c,d:h,surface:u,procedural:d}=a,f=t-i.x,m=e-i.z,x=Ni(f,-c/2,c/2),g=Ni(m,-h/2,h/2);if((f-x)**2+(m-g)**2>=s**2)return!1;let p=(f/c+.5)*l,w=(m/h+.5)*l,S=c/l,y=h/l,R=Math.max(0,Math.ceil(p-s/S)),C=Math.min(l,Math.floor(p+s/S)),I=Math.max(0,Math.ceil(w-s/y)),L=Math.min(l,Math.floor(w+s/y)),b=Number.isFinite(o)?o-i.y:Kf(a,f,m),v=l+1,D=a.heights?.slice()??new Array(v**2).fill(0),z=!1,V=!1;function W(G,k,nt){z=!0;let H=k*v+G,ct=D[H],_t;if(n==="raise"||n==="lower")_t=ct+(n==="raise"?1:-1)*r*nt;else{let j=n==="flatten"?b:nv(a,G,k);_t=fr(u[H],j,Math.min(1,r)*nt)-d[H]}_t=Ni(_t,-rc,rc),!(Math.abs(_t-ct)<1e-7)&&(D[H]=_t,V=!0)}for(let G=I;G<=L;G++)for(let k=R;k<=C;k++){let nt=Math.hypot((k-p)*S,(G-w)*y)/s;nt<1&&W(k,G,Vh(1-nt))}if(!z){let G=Ni(p,0,l),k=Ni(w,0,l),nt=Math.min(l-1,Math.floor(G)),H=Math.min(l-1,Math.floor(k)),ct=G-nt,_t=k-H,j=ct+_t<=1,Mt=j?1-ct-_t:ct+_t-1,Et=j?ct:1-_t,Ft=j?_t:1-ct;if(Mt>=Math.max(Et,Ft)){let Rt=+!j;W(nt+Rt,H+Rt,1)}else Et>=Ft?W(nt+1,H,1):W(nt,H+1,1)}return V&&(i.terrain.heights=D),V}function Gh(i){let{w:t,d:e,terrain:n}=i,{detail:s}=n,r=s+1,o=new Float32Array(r**2*3),a=new Float32Array(r**2*2),l=new Uint16Array(s**2*6),c=0;for(let u=0;u<=s;u++)for(let d=0;d<=s;d++){let f=u*r+d;o[3*f]=(d/s-.5)*t,o[3*f+2]=(u/s-.5)*e,a[2*f]=d/s*t/2.6,a[2*f+1]=(1-u/s)*e/2.6,u<s&&d<s&&(l.set([f,f+r,f+1,f+r+1,f+1,f+r],c),c+=6)}let h=new ne;return h.setAttribute("position",new ve(o,3).setUsage(Po)),h.setAttribute("uv",new ve(a,2)),h.setIndex(new ve(l,1)),iv(h,i),h}function iv(i,t){let{surface:e}=kh(t),{position:n}=i.attributes;for(let s=0;s<e.length;s++)n.setY(s,e[s]);n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere(),i.boundingBox&&i.computeBoundingBox()}function sv(){let i=[];for(let e=0;e<5;e++){let n=e*2.4,s=Math.cos(n),r=Math.sin(n),o=s*.105,a=r*.105;i.push(o+r*.028,0,a-s*.028,o-r*.028,0,a+s*.028,o+s*.16,.27+e%3*.07,a+r*.16)}let t=new ne;return t.setAttribute("position",new kt(i,3)),t.computeVertexNormals(),t}function rv(){return new Mn(.34,0).scale(1.25,1,1.15).translate(0,.28,0)}var ov=[{name:"grass",geometry:sv,perMetre:1.8,max:160,salt:21,color:"#527a34"},{name:"shrub",geometry:rv,perMetre:.17,max:48,salt:47,color:"#36583c"}];function Qf(i){let t=new Je;for(let{name:e,geometry:n,perMetre:s,max:r,salt:o,color:a}of ov){let l=i.terrain[e];if(!l)continue;let c=Math.min(r,Math.max(1,Math.round(i.w*i.d*s*l))),h=new je({color:a,side:e==="grass"?Be:Nn});h.flatShading=!0;let u=new qr(n(),h,c);u.name=e,u.instanceMatrix.setUsage(Po),u.userData.salt=o,u.receiveShadow=!0;let d=new Ot;for(let f=0;f<c;f++){let m=fr(.68,1.2,fi(f,o,i.terrain.seed+4));u.setColorAt(f,d.setRGB(m,m,m))}t.add(u)}return av(t,i),t}function av(i,t){let e=kh(t),n=new Ae;for(let s of i.children){let{salt:r}=s.userData,{seed:o}=t.terrain;for(let a=0;a<s.count;a++){let l=(fi(a,r,o)-.5)*.96*t.w,c=(fi(a,r,o+1)-.5)*.96*t.d;n.position.set(l,Kf(e,l,c),c),n.rotation.y=fi(a,r,o+2)*2*Math.PI,n.scale.setScalar(fr(.58,1.34,fi(a,r,o+3))),n.updateMatrix(),s.setMatrixAt(a,n.matrix)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}function tp(i){if(i){for(let t of i.children)t.geometry.dispose(),t.material.dispose(),t.dispose();i.clear(),i.removeFromParent()}}var Hh=["Pierre","Terre","Herbe","Sable","Bois","Carreaux"],ep=["#727986","#795a45","#66834b","#c8ad71","#a17449","#657b82"];function np(i,t=ep[i]){i=Math.max(0,Math.min(Hh.length-1,i|0));let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.fillStyle=/^#[a-f0-9]{6}$/i.test(t)?t:ep[i],n.fillRect(0,0,512,512);let s=(i+45)*31337,r=()=>(s=Math.imul(s,1664525)+1013904223>>>0)/2**32,o=(a,l,c,h)=>{for(let u of[0,-512])for(let d of[0,-512])n.fillRect(a+u,l+d,c,h)};for(let a=0;a<4800;a++){let l=r()*512,c=r()*512;n.fillStyle=r()>.46?"#fcf5dc":"#212131",n.globalAlpha=.025+r()*.19,o(l,c,i===4?3+r()*62:1+r()*9,1+r()*(i===4?3:8))}if(i===5){n.fillStyle="#151d22",n.globalAlpha=.47;for(let a=0;a<512;a+=128)n.fillRect(0,a,512,3),n.fillRect(a,0,3,512)}return e}var ip={type:"change"},Xh={type:"start"},rp={type:"end"},oc=new bi,sp=new Ze,lv=Math.cos(70*de.DEG2RAD),Le=new T,fn=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6,ac=class extends So{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Ce,this._lastTargetPosition=new T,this._quat=new Ce().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $s,this._sphericalDelta=new $s,this._scale=1,this._panOffset=new T,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new T,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hv.bind(this),this._onPointerDown=cv.bind(this),this._onPointerUp=uv.bind(this),this._onContextMenu=xv.bind(this),this._onMouseWheel=pv.bind(this),this._onKeyDown=mv.bind(this),this._onTouchStart=gv.bind(this),this._onTouchMove=_v.bind(this),this._onMouseDown=dv.bind(this),this._onMouseMove=fv.bind(this),this._interceptControlDown=yv.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ip),this.update(),this.state=fe.NONE}update(t=null){let e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Le.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<lv?this.object.lookAt(this.target):(sp.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(sp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(ip),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function cv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function hv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function uv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rp),this.state=fe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case Bn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case Bn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Xh)}function fv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function pv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(Xh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rp))}function mv(i){this.enabled!==!1&&this._handleKeyDown(i)}function gv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Xh)}function _v(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function xv(i){this.enabled!==!1&&i.preventDefault()}function yv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ap=["Ardoise","Nacre","Brique","Sable","Marbre","Bois","Cuivre","Chrome","Carreaux","B\xE9ton","Verre bleu","Verre ambre","Glace","Caoutchouc","\xC9mail","Mosa\xEFque","Benchmark"],qh=["#555e6a","#537586","#855443","#a28e61","#bbb8b0","#664527","#794a36","#758291","#293e4b","#626664","#94cfdd","#d1a053","#7cb0cf","#45404b","#40468c","#455d62","#141414"],Fo={normal:{grip:.8,gravity:1,bounce:1},ice:{grip:.035,gravity:1,bounce:1},rubber:{grip:1.15,gravity:1,bounce:1.52},moon:{grip:.8,gravity:.28,bounce:1}},Mv=3e6,Oo=240,tn=(i,t,e,n)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,op=(i,t,e)=>typeof i=="string"&&i.trim()?i.trim().slice(0,t):e;function ti(i){if(typeof i=="string"){if(i.length>Mv)throw Error("Cette map d\xE9passe 3 Mo.");i=JSON.parse(i)}if(i?.format!=="gorilla-lab-map"||i.version!==1||!Array.isArray(i.pieces)||i.pieces.length<1||i.pieces.length>Oo)throw Error("Choisis une map Gorilla Lab v1 avec 1 \xE0 "+Oo+" pi\xE8ces.");let t=i.spawn??{};return{format:"gorilla-lab-map",version:1,...i.arenaBase===!0?{arenaBase:!0}:{},name:op(i.name,56,"Ma map"),spawn:{x:tn(t.x,-120,120,0),y:tn(t.y,-10,30,.06),z:tn(t.z,-120,120,3),yaw:tn(t.yaw,-360,360,0)},pieces:i.pieces.map((e,n)=>{if(!e||typeof e!="object")throw Error("Pi\xE8ce invalide : "+(n+1));let s=e.terrain&&typeof e.terrain=="object"?pr(e.terrain):null;return{name:op(e.name,36,"Pi\xE8ce "+(n+1)),x:tn(e.x,-120,120,0),y:tn(e.y,-12,33,0),z:tn(e.z,-120,120,0),w:tn(e.w,.2,64,3),h:tn(e.h,.12,36,.5),d:tn(e.d,.2,64,3),pitch:s?0:tn(e.pitch,-70,70,0),yaw:s?0:tn(e.yaw,-360,360,0),...s?{terrain:s}:{},material:Math.round(tn(e.material,0,16,0)),color:typeof e.color=="string"&&/^#[a-f0-9]{6}$/i.test(e.color)?e.color:"#ffffff",grip:tn(e.grip,0,1.5,.8),gravity:tn(e.gravity,.05,2.5,1),bounce:tn(e.bounce,0,1.65,1),solid:e.solid!==!1,texture:typeof e.texture=="string"&&e.texture.length<=1e6&&/^data:image\/(?:png|jpeg|webp);base64,[a-z0-9+/=\r\n]+$/i.test(e.texture)?e.texture:null}})}}function lp(i){return ti({format:"gorilla-lab-map",version:1,name:"Gorilla Lab \u2014 ar\xE8ne de d\xE9part",arenaBase:!0,spawn:{...If,yaw:0},pieces:i.filter(t=>t.half&&t.mesh?.isObject3D).map(t=>({name:t.name,x:t.position.x,y:t.position.y,z:t.position.z,w:t.half.x*2,h:t.half.y*2,d:t.half.z*2,pitch:t.mesh.rotation.x*180/Math.PI,material:t.type,grip:t.friction,gravity:t.gravity}))})}function cp(){let i=(t,e,n,s,r,o,a,l,c={})=>({name:t,x:e,y:n,z:s,w:r,h:o,d:a,material:l,...c});return ti({format:"gorilla-lab-map",version:1,name:"Parcours exemple",spawn:{x:0,y:.025,z:4,yaw:0},pieces:[i("Placette",0,-.24,1,13,.48,12,0),i("Piste de glace",-5,-.24,-10,5,.48,11,12,Fo.ice),i("Piste gravit\xE9 basse",5,-.24,-10,5,.48,11,3,Fo.moon),i("Couloir central",0,-.24,-12,5,.48,14,9),i("Rampe",0,.6,-8,3,.32,5,5,{pitch:16}),i("Mur gauche",-1.8,1.65,-15,.42,3.3,4.4,2),i("Mur droit",1.8,1.65,-16.1,.42,3.3,4.4,2),i("Palier caoutchouc",0,1.16,-18,3.6,.35,2,13,Fo.rubber)]})}function mr(i={}){return{name:"Bloc",x:0,y:.25,z:0,w:2,h:.5,d:2,pitch:0,yaw:0,material:0,color:"#ffffff",grip:.8,gravity:1,bounce:1,solid:!0,texture:null,...i}}function hp(i,t,e,n=.25){if(!i||!t||!Number.isFinite(n)||n<=0)return null;let s=e.pitch*Math.PI/180,r=e.yaw*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),h=t,u=Math.abs(h.x*l-h.z*c)*e.w*.5+Math.abs(h.x*c*a+h.y*o+h.z*l*a)*e.h*.5+Math.abs(h.x*c*o-h.y*a+h.z*l*o)*e.d*.5,d=p=>Math.round(p/n)*n,f=d(i.x+h.x*u),m=d(i.y+h.y*u),x=d(i.z+h.z*u),g=u-(f-i.x)*h.x-(m-i.y)*h.y-(x-i.z)*h.z;return f+=h.x*g,m+=h.y*g,x+=h.z*g,![f,m,x].every(Number.isFinite)||Math.abs(f)>120||Math.abs(x)>120||m<-12||m>33?null:{...e,x:f,y:m,z:x}}var up="gorilla-lab-custom-map-v1";function dp(i){let t=new Blob([JSON.stringify(ti(i),null,2)],{type:"application/json"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=i.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".gorilla.json",n.click(),setTimeout(()=>URL.revokeObjectURL(e),1200)}var Nt=i=>document.getElementById(i),_p=["name","x","y","z","w","h","d","pitch","yaw","material","color","grip","gravity","bounce","solid"],xp=[...document.querySelectorAll(".tool")],yp="gorilla-lab-editor-draft",Yh={block:mr(),ramp:mr({name:"Rampe",w:3,h:.3,d:4,pitch:16,material:5}),terrain:mr({name:"Terrain",w:18,h:.12,d:18,y:0,material:3,terrain:pr({amplitude:.7,grass:.34})}),wall:mr({name:"Mur",w:.45,h:2.5,d:3.5,material:2})},Sv={move:"Clique une pi\xE8ce pour la s\xE9lectionner. Glisse-la pour la d\xE9placer au sol.",block:"Clique dans la vue 3D ou sur le plan pour poser un bloc. \xC9chap revient \xE0 la s\xE9lection.",ramp:"Clique dans la vue 3D ou sur le plan pour poser une rampe. \xC9chap revient \xE0 la s\xE9lection.",wall:"Clique dans la vue 3D ou sur le plan pour poser un mur. \xC9chap revient \xE0 la s\xE9lection.",terrain:"Clique pour poser un terrain. S\xE9lectionne-le pour r\xE9gler le bruit ou la v\xE9g\xE9tation.",sculpt:"Clique ou glisse sur un terrain. Le pinceau est r\xE9glable dans Relief et v\xE9g\xE9tation.",spawn:"Clique sur une surface pour placer le d\xE9part du joueur."},Xt,Ve=-1,Pe="move",oe=null,Gn=null,Bo=[],Oi=Nt("preview"),ge=Nt("plan"),te=ge.getContext("2d"),rn={scale:10,cx:0,cz:-6,width:30,height:40},lc=new Yl({canvas:Oi,antialias:!0});lc.setPixelRatio(Math.min(devicePixelRatio,1.5));var pn=new Ye(52,1,.1,640);pn.position.set(16,15,19);var mn=new ac(pn,Oi);mn.target.set(0,0,-5);mn.mouseButtons.LEFT=null;mn.mouseButtons.RIGHT=Bn.ROTATE;mn.mouseButtons.MIDDLE=Bn.PAN;mn.maxDistance=580;mn.maxPolarAngle=Math.PI/2-.035;var bn=new Vs;bn.background=new Ot("#8fb6c6");var vp=new ji("#f0f5ff","#8e775c",2.6);bn.add(vp);var Qh=new Qi("#fff1d2",1.8);Qh.position.set(-9,18,6);bn.add(Qh);var Bi=new Vs;Bi.fog=new Hr("#a6d4ea",55,135);var xr=Ff(Bi,lc),Mp=()=>lp(xr.boxes);Xt=Mp();Of(Bi,xr.boxes,{quality:()=>"7/10",resolution:()=>"7/10",textureSize:()=>"512 px"});var bv=Xf();Wf((i,t)=>{let{geo:e,material:n}=bv[i],s=new Kt(e,n);e.computeBoundingBox(),s.position.set(t.x,-e.boundingBox.min.y,t.z),Bi.add(s)});var Sp=new Kt(new re(1.8,2.03,.1),new hn({color:"#8daebc",metalness:.9,roughness:.12}));Sp.position.set(Kl.x,Kl.y,Kl.z);Bi.add(Sp);var Tv=xr.boxes.filter(i=>i.half&&i.mesh?.isObject3D);Tv.forEach(i=>i.mesh.removeFromParent());var tu=new Je;tu.add(...Bi.children);bn.add(tu);var $h=xr.boxes.find(i=>i.heightfield).mesh;xr.visual(7,0,7,!0,!0,!0,512,!1);var Vo=new vo(60,60,"#d7e2e5","#5e7b8a");Vo.material.transparent=!0;Vo.material.opacity=.35;bn.add(Vo);var ze=new Je;bn.add(ze);var Kh=new re(1,1,1),wv=new mo,cc=new Kt(new jr(.32,.75,5),new Ge({color:"#ffcd63"}));bn.add(cc);var _r=new Kt(Kh,new Ge({color:"#8ee7fc",opacity:.44,transparent:!0,depthWrite:!1})),zo=new Kt(cc.geometry,new Ge({color:"#ffe084",opacity:.65,transparent:!0,depthWrite:!1}));_r.visible=zo.visible=!1;bn.add(_r,zo);var Fi=new xo,eu=new T(0,1,0),fp=new Ze(eu,0),Ev=new Zt,pi=null,Zh=!1;function ei(){Zh||(Zh=!0,requestAnimationFrame(()=>{Zh=!1,lc.render(bn,pn)}))}function bp(){let i=Oi.clientWidth||1,t=Oi.clientHeight||1;lc.setSize(i,t,!1),pn.aspect=i/t,pn.updateProjectionMatrix(),ei()}function Tp(){let i=Math.max(1,ge.clientWidth),t=Math.max(1,ge.clientHeight);i===ge.width&&t===ge.height||(ge.width=i,ge.height=t,wp(),cs())}new ResizeObserver(bp).observe(Oi);new ResizeObserver(Tp).observe(ge);mn.addEventListener("change",ei);mn.addEventListener("start",()=>hs(null));function wp(){rn.scale=Math.min(ge.width/rn.width,ge.height/rn.height)}function nu(i,t){return[ge.width/2+(i-rn.cx)*rn.scale,ge.height/2+(t-rn.cz)*rn.scale]}function Av(i){let t=ge.getBoundingClientRect();return{x:((i.clientX-t.left)*ge.width/t.width-ge.width/2)/rn.scale+rn.cx,z:((i.clientY-t.top)*ge.height/t.height-ge.height/2)/rn.scale+rn.cz}}function pp(i,t,e,n,s){let[r,o]=nu(i.x,i.z),a=i.w*rn.scale,l=de.degToRad(i.pitch),c=(Math.abs(Math.cos(l))*i.d+Math.abs(Math.sin(l))*i.h)*rn.scale;te.save(),te.translate(r,o),te.rotate(-de.degToRad(i.yaw)),te.globalAlpha=s,te.fillStyle=t,te.fillRect(-a/2,-c/2,a,c),te.globalAlpha=1,te.strokeStyle=e,te.lineWidth=n,te.strokeRect(-a/2,-c/2,a,c),te.restore()}function mp(i,t){let[e,n]=nu(i.x,i.z);te.save(),te.translate(e,n),te.rotate(de.degToRad(-i.yaw)),te.fillStyle=t?"#fff0bb":"#ffd16e",te.strokeStyle="#263740",te.lineWidth=1.5,te.beginPath(),te.moveTo(0,-8),te.lineTo(6,5),te.lineTo(0,3),te.lineTo(-6,5),te.closePath(),te.fill(),te.stroke(),te.restore()}function cs(){te.fillStyle="#192e3a",te.fillRect(0,0,ge.width,ge.height),te.strokeStyle="#37505f",te.lineWidth=1;let i=rn.scale<4?5:1;for(let e=-120;e<=120;e+=i){let[n,s]=nu(e,e);n>=0&&n<=ge.width&&(te.beginPath(),te.moveTo(n,0),te.lineTo(n,ge.height),te.stroke()),s>=0&&s<=ge.height&&(te.beginPath(),te.moveTo(0,s),te.lineTo(ge.width,s),te.stroke())}let t=Xt.pieces.map((e,n)=>({piece:e,index:n})).sort((e,n)=>e.piece.y-n.piece.y);for(let{piece:e,index:n}of t){let s=e.color==="#ffffff"?qh[e.material]:e.color;pp(e,s,n===Ve?"#ffe095":"#a4bac7",n===Ve?2:1,e.solid?.86:.38)}mp(Xt.spawn,!1),Gn&&(Pe==="spawn"?mp(Gn,!0):pp(Gn,"#8ee7fc","#afefff",2,.45))}function iu(i,t){i.position.set(t.x,t.y,t.z),t.terrain&&i!==_r?i.scale.setScalar(1):i.scale.set(t.w,t.h,t.d),i.rotation.set(de.degToRad(t.pitch),de.degToRad(t.yaw),0,"YXZ"),i.updateMatrixWorld()}function Ep(){pi&&(bn.remove(pi),pi.geometry.dispose(),pi.material.dispose());let i=ze.children[Ve];pi=i?new Mo(i,"#ffdf88"):null,pi&&bn.add(pi)}function Cv(){for(let i of[...ze.children])ze.remove(i),i.geometry!==Kh&&i.geometry.dispose(),i.userData.vegetation&&tp(i.userData.vegetation),i.userData.ownsTexture&&i.material.map?.dispose(),i.material.dispose();tu.visible=!!Xt.arenaBase,Qh.visible=vp.visible=!Xt.arenaBase,bn.fog=Xt.arenaBase?Bi.fog:null,bn.environment=Xt.arenaBase?Bi.environment:null;for(let i of Xt.pieces){let t=[10,11,12].includes(i.material),e=new je({color:new Ot(qh[i.material]).multiply(new Ot(i.color)),transparent:!i.solid||t,opacity:i.solid?t?.55:1:.4});if(Xt.arenaBase&&!i.texture){let r=xr.mapMaterial(i.material,7);e.color.set(i.color),e.map=r.map,e.opacity=i.solid?r.opacity:.4,e.transparent=!i.solid||r.transparent}i.texture&&(e.map=wv.load(i.texture,ei),e.map.colorSpace=ye,e.map.wrapS=e.map.wrapT=qn,e.color.set(i.color));let n=i.terrain?Gh(i):i.texture||Xt.arenaBase?Jl(i.w,i.h,i.d).scale(1/i.w,1/i.h,1/i.d):Kh,s=new Kt(n,e);if(s.userData.ownsTexture=!!i.texture,i.terrain){let r=Qf(i);r&&(s.add(r),s.userData.vegetation=r)}ze.add(s),iu(s,i)}cc.position.set(Xt.spawn.x,Xt.spawn.y+.38,Xt.spawn.z),Ep()}function Ne(){return Xt.pieces[Ve]}function Ue(i){Nt("editor-note").textContent=i}function We(){Bo.length>=35&&Bo.shift(),Bo.push({map:structuredClone(Xt),selected:Ve}),Nt("undo").disabled=!1}function Ap(){try{localStorage.setItem(yp,JSON.stringify(Xt))}catch{}}function Cp(){Nt("pieces").replaceChildren(...Xt.pieces.map((e,n)=>new Option(e.name,n,!1,n===Ve))),Nt("pieces").selectedIndex=Ve,Nt("count").textContent=Xt.pieces.length+" / "+Oo;let i=Ne();Nt("selection-title").textContent=i?i.name:"Aucune pi\xE8ce s\xE9lectionn\xE9e";for(let e of _p){let n=Nt("p-"+e);n.disabled=!i,e==="solid"?n.checked=i?.solid??!1:n.value=i?.[e]??(e==="color"?"#ffffff":"")}for(let e of["rotate","duplicate","texture-file","surface","spawn-here"])Nt(e).disabled=!i;Nt("delete").disabled=!i||Xt.pieces.length===1,Nt("texture-clear").disabled=!i?.texture;let t=i?.terrain;if(Nt("terrain-controls").hidden=!t,t){for(let e of Fp)Nt("terrain-"+e).value=t[e];Nt("p-pitch").disabled=Nt("p-yaw").disabled=!0}Nt("texture-create").disabled=!i,Nt("surface").value="",Nt("undo").disabled=Bo.length===0}function ke(){Nt("map-name").value=Xt.name,Cp();for(let i of["x","y","z","yaw"])Nt("spawn-"+i).value=Xt.spawn[i];Cv(),cs(),ei(),Ap()}function su(i){Ve!==i&&(Ve=i,Cp(),Ep(),cs(),ei())}function Rp(i){if(Xt.pieces.length>=Oo)return Ue("Limite de pi\xE8ces atteinte.");We(),Xt.pieces.push(i),Ve=Xt.pieces.length-1,ke(),Ue(i.name+" ajout\xE9 \xE0 la map.")}function Pp(){if(!Ne()||Xt.pieces.length===1)return;let i=Ne().name;We(),Xt.pieces.splice(Ve,1),Ve=Math.min(Ve,Xt.pieces.length-1),ke(),Ue(i+" retir\xE9 de la map.")}function Ip(){let i=Ne();if(!i)return;let t=de.clamp(i.x+i.w+ou(),-120,120);Rp({...i,name:(i.name+" bis").slice(0,36),x:t})}function Dp(){let i=Ne();i&&(We(),i.yaw=(i.yaw+45)%360,ke())}function Lp(){let i=Bo.pop();i&&(Xt=i.map,Ve=i.selected,hs(null),ke(),Ue("Derni\xE8re modification annul\xE9e."))}function ko(i){Pe=i;for(let t of xp)t.setAttribute("aria-pressed",String(t.dataset.tool===Pe));for(let t of[Oi,ge])t.dataset.tool=Pe,t.removeAttribute("data-hit");Nt("tool-help").textContent=Sv[Pe],hs(null)}function Go(){let i=new Ke().setFromObject(ze);i.expandByPoint(cc.position);let t=i.getCenter(new T),e=i.getSize(new T);rn={cx:t.x,cz:t.z,width:e.x+5,height:e.z+5},wp();let n=Math.max(1,Math.ceil(Math.max(e.x,e.z)/40));Vo.scale.setScalar(n),Vo.position.set(Math.round(t.x/n)*n,-.035,Math.round(t.z/n)*n);let s=pn.position.clone().sub(mn.target).normalize(),r=new T().crossVectors(eu,s).normalize(),o=new T().crossVectors(s,r),a=Math.tan(de.degToRad(pn.fov/2))*.87,l=a*pn.aspect,c=6;for(let h of[i.min.x,i.max.x])for(let u of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let f=new T(h,u,d).sub(t),m=Math.max(Math.abs(f.dot(r))/l,Math.abs(f.dot(o))/a);c=Math.max(c,m+f.dot(s))}c=Math.min(c,mn.maxDistance),mn.target.copy(t),pn.position.copy(t).addScaledVector(s,c),mn.update(),pn.updateMatrixWorld(),cs(),ei()}function ru(i,t){We(),Xt=i,Ve=-1,ko("move"),ke(),Go(),Ue(t)}function ou(){return Number(Nt("snap").value)}function gr(i){let t=ou();return de.clamp(Math.round(i/t)*t,-120,120)}function au(i,t){if(i===ge){let e=Av(t);Fi.set(new T(e.x,80,e.z),new T(0,-1,0))}else{let e=Oi.getBoundingClientRect();pn.updateMatrixWorld(),Fi.setFromCamera({x:(t.clientX-e.left)/e.width*2-1,y:1-(t.clientY-e.top)/e.height*2},pn)}}function jh(i){return fp.constant=-i,Fi.ray.intersectPlane(fp,new T)}function lu(i,t){return au(i,t),Fi.intersectObjects(Xt.arenaBase?[...ze.children,$h]:ze.children,!1)[0]}function Up(i,t,e,n=null){Fi.set(new T(i,80,t),new T(0,-1,0));let s=n?Fi.intersectObject(n,!1)[0]:Fi.intersectObjects(Xt.arenaBase?[...ze.children,$h]:ze.children,!1).find(r=>r.object===$h||Xt.pieces[ze.children.indexOf(r.object)]?.solid);return!s||s.point.y>29.9?null:{x:i,y:Math.max(-10,s.point.y+.08),z:t,yaw:e}}function Np(i,t){let e=lu(i,t);if(Pe==="spawn"){if(!e)return null;let r=gr(e.point.x),o=gr(e.point.z);return Up(r,o,Xt.spawn.yaw)}if(Pe==="terrain"){let r=e?.point??jh(0);return r?{...Yh.terrain,terrain:pr(Yh.terrain.terrain),x:gr(r.x),y:r.y,z:gr(r.z)}:null}if(Pe==="sculpt")return null;let n=e?.point??jh(0);if(!n)return null;let s=e?e.face.normal.clone().applyNormalMatrix(Ev.getNormalMatrix(e.object.matrixWorld)):eu;return hp(n,s,Yh[Pe],ou())}function hs(i){!i&&!Gn||(Gn=i,zo.visible=!!(Gn&&Pe==="spawn"),_r.visible=!!(Gn&&Pe!=="spawn"),zo.visible&&zo.position.set(Gn.x,Gn.y+.38,Gn.z),_r.visible&&iu(_r,Gn),cs(),ei())}function Rv(i,t){let e=Np(i,t);if(!e){Ue(Pe==="spawn"?"Choisis une surface solide pour placer le d\xE9part.":"Choisis un point dans la zone de construction.");return}Pe==="spawn"?(We(),Xt.spawn=e,ko("move"),ke(),Ue("Point de d\xE9part d\xE9plac\xE9.")):(hs(null),Rp(e))}function Pv(i,t){if(t.button!==0||!t.isPrimary||oe)return;t.stopImmediatePropagation(),i.focus({preventScroll:!0}),i.setPointerCapture(t.pointerId);let e={canvas:i,id:t.pointerId,clientX:t.clientX,clientY:t.clientY,tool:Pe};if(oe=e,Pe==="sculpt"){Op(i,t);return}if(Pe!=="move")return;let n=lu(i,t);su(n?ze.children.indexOf(n.object):-1);let s=Ne();!n||!s||(e.height=n.point.y,e.dx=n.point.x-s.x,e.dz=n.point.z-s.z)}function Iv(i,t){if(!oe){Pe==="move"?i.toggleAttribute("data-hit",!!lu(i,t)):hs(Np(i,t));return}if(Pe==="sculpt"&&oe.id===t.pointerId&&oe.canvas===i){Math.hypot(t.clientX-oe.clientX,t.clientY-oe.clientY)>=7&&(Op(i,t),oe.clientX=t.clientX,oe.clientY=t.clientY);return}if(oe.id!==t.pointerId||oe.canvas!==i||oe.height===void 0||!Ne()||Math.hypot(t.clientX-oe.clientX,t.clientY-oe.clientY)<4&&!oe.recorded)return;au(i,t);let n=jh(oe.height);if(!n)return;let s=Ne(),r=gr(n.x-oe.dx),o=gr(n.z-oe.dz);r===s.x&&o===s.z||(oe.recorded||(We(),oe.recorded=!0,i.toggleAttribute("data-dragging",!0)),s.x=r,s.z=o,iu(ze.children[Ve],s),pi?.update(),Nt("p-x").value=r,Nt("p-z").value=o,cs(),ei())}function Jh(i,t,e){if(!oe||oe.canvas!==i||oe.id!==t.pointerId)return;let n=oe;if(oe=null,i.hasPointerCapture(t.pointerId)&&i.releasePointerCapture(t.pointerId),i.removeAttribute("data-dragging"),n.tool==="sculpt"){n.recorded&&(ke(),Ue("Relief modifi\xE9."));return}n.recorded&&(Ap(),Ue(Ne().name+" d\xE9plac\xE9.")),e&&Pe===n.tool&&Pe!=="move"&&Math.hypot(t.clientX-n.clientX,t.clientY-n.clientY)<6&&Rv(i,t)}for(let i of[Oi,ge])i.addEventListener("pointerdown",t=>Pv(i,t),{capture:!0}),i.addEventListener("pointermove",t=>Iv(i,t)),i.addEventListener("pointerup",t=>Jh(i,t,!0)),i.addEventListener("pointercancel",t=>Jh(i,t,!1)),i.addEventListener("lostpointercapture",t=>{i.hasPointerCapture(t.pointerId)||Jh(i,t,!1)}),i.addEventListener("pointerleave",()=>{oe||hs(null)});Nt("p-material").append(...ap.map((i,t)=>new Option(i,t)));for(let i of _p)Nt("p-"+i).addEventListener("change",t=>{let e=Ne();if(!e)return;We();let n=t.target;i==="solid"?e[i]=n.checked:e[i]=["name","color"].includes(i)?n.value:Number(n.value),Xt=ti(Xt),ke()});Nt("map-name").onchange=i=>{We(),Xt.name=i.target.value,Xt=ti(Xt),ke()};Nt("pieces").onchange=i=>su(Number(i.target.value));for(let i of["x","y","z","yaw"])Nt("spawn-"+i).onchange=t=>{We(),Xt.spawn[i]=Number(t.target.value),Xt=ti(Xt),ke()};Nt("spawn-here").onclick=()=>{let i=Ne();if(!i)return;let t=i.solid&&Up(i.x,i.z,i.yaw,ze.children[Ve]);if(!t)return Ue("Choisis une pi\xE8ce solide pour placer le d\xE9part.");We(),Xt.spawn=t,ke(),Ue("D\xE9part plac\xE9 au-dessus de la pi\xE8ce.")};for(let i of xp)i.onclick=()=>ko(i.dataset.tool);Nt("duplicate").onclick=Ip;Nt("delete").onclick=Pp;Nt("rotate").onclick=Dp;Nt("undo").onclick=Lp;Nt("zoom-fit").onclick=Go;Nt("snap").onchange=()=>hs(null);Nt("new-example").onclick=()=>ru(Mp(),"Ar\xE8ne de d\xE9part ouverte.");Nt("blank-map").onclick=()=>ru({format:"gorilla-lab-map",version:1,name:"Ma nouvelle map",spawn:{x:0,y:.025,z:3,yaw:0},pieces:[mr({name:"Sol",y:-.25,w:24,d:24})]},"Nouvelle map cr\xE9\xE9e. S\xE9lectionne Bloc, Rampe ou Mur, puis clique o\xF9 le poser.");Nt("surface").onchange=i=>{let t=Fo[i.target.value],e=Ne();!t||!e||(We(),Object.assign(e,t),ke())};Nt("texture-file").onchange=async i=>{let t=i.target.files[0],e=Ne();if(!(!t||!e))try{if(!["image/png","image/jpeg","image/webp"].includes(t.type))throw Error("Choisis un PNG, JPG ou WebP.");let n=await createImageBitmap(t),s=document.createElement("canvas"),r=Math.min(1,768/Math.max(n.width,n.height));s.width=Math.max(1,Math.round(n.width*r)),s.height=Math.max(1,Math.round(n.height*r)),s.getContext("2d").drawImage(n,0,0,s.width,s.height),n.close();let o=s.toDataURL("image/webp",.82);if(o.length>1e6)throw Error("Texture trop lourde pour une map.");if(!Xt.pieces.includes(e))return Ue("S\xE9lectionne \xE0 nouveau la pi\xE8ce et son image.");We(),e.texture=o,ke(),Ue("Texture int\xE9gr\xE9e \xE0 "+s.width+" \xD7 "+s.height+".")}catch(n){Ue(n.message)}finally{i.target.value=""}};Nt("texture-clear").onclick=()=>{Ne()?.texture&&(We(),Ne().texture=null,ke())};Nt("import-map").onchange=async i=>{let t=i.target.files[0];if(t)try{ru(ti(await t.text()),"Map charg\xE9e.")}catch(e){Ue(e.message)}finally{i.target.value=""}};Nt("export-map").onclick=()=>{try{dp(Xt),Ue("Map JSON export\xE9e.")}catch(i){Ue(i.message)}};Nt("test-map").onclick=()=>{try{localStorage.setItem(up,JSON.stringify(ti(Xt))),location.href="./?custom=1"}catch{Ue("Le stockage du navigateur est plein. Exporte le JSON et importe-le dans le jeu.")}};var Fp=["detail","seed","amplitude","frequency","grass","shrub"];for(let i of Fp)Nt("terrain-"+i).onchange=t=>{let e=Ne();e?.terrain&&(We(),e.terrain=i==="detail"?$f(e.terrain,Number(t.target.value)):pr({...e.terrain,[i]:Number(t.target.value)}),ke())};Nt("terrain-reset").onclick=()=>{Ne()?.terrain&&(We(),Ne().terrain.heights=null,ke())};function Op(i,t){au(i,t);let e=Fi.intersectObjects(ze.children,!1).find(a=>Xt.pieces[ze.children.indexOf(a.object)]?.terrain),n=e?ze.children.indexOf(e.object):-1,s=Xt.pieces[n];if(!s?.terrain||(oe.recorded||(We(),oe.recorded=!0,oe.flattenY=e.point.y,su(n),Nt("terrain-controls").open=!0),n!==Ve))return;let r={mode:Nt("terrain-brush").value,radius:Number(Nt("brush-radius").value),strength:Number(Nt("brush-strength").value),target:oe.flattenY};if(!jf(s,e.point.x,e.point.z,r))return;let o=ze.children[n];o.geometry.dispose(),o.geometry=Gh(s),pi?.update(),cs(),ei()}Nt("texture-style").replaceChildren(...Hh.map((i,t)=>new Option(i,t)));Nt("texture-create").onclick=()=>{let i=Ne();if(!i)return;let t=np(Number(Nt("texture-style").value),Nt("texture-tint").value);We(),i.texture=t.toDataURL("image/webp",.85),ke(),Ue("Texture r\xE9p\xE9table 512 \xD7 512 int\xE9gr\xE9e.")};Nt("view-top").onclick=()=>{let i=mn.target,t=Math.max(10,pn.position.distanceTo(i));pn.position.copy(i).add(new T(0,t,.001)),mn.update(),ei()};Nt("view-perspective").onclick=Go;var gp={v:"move",1:"block",2:"ramp",3:"wall",4:"spawn",escape:"move"};document.addEventListener("keydown",i=>{if(i.target.closest?.("input, select, textarea, [contenteditable]")||oe)return;let t=i.key.toLowerCase();if(i.ctrlKey||i.metaKey)if(t==="z")Lp();else if(t==="d")Ip();else return;else{if(i.altKey)return;if(gp[t])ko(gp[t]);else if(t==="r")Dp();else if(t==="f")Go();else if(t==="delete")Pp();else return}i.preventDefault()});try{let i=localStorage.getItem(yp);if(i){let t=ti(i);JSON.stringify(t)!==JSON.stringify(cp())&&(Xt=t)}}catch{}ko("move");ke();bp();Tp();Go();})();
