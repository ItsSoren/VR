const vertexShader = `
  varying vec2 vUv;
  varying vec3 vWorld;
  void main(){
    vUv=uv;
    vWorld=(modelMatrix*vec4(position,1.0)).xyz;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  }
`;

const surfaceShader = `
  uniform float age;
  uniform float wet;
  uniform vec3 wake;
  varying vec2 vUv;
  varying vec3 vWorld;

  float fixture(vec2 where, float z){
    vec2 gap=abs(where-vec2(0.0,z));
    return (1.0-smoothstep(.32,.76,gap.x))*(1.0-smoothstep(.09,.40,gap.y));
  }

  void main(){
    vec2 p=vWorld.xz;
    vec2 fromWake=p-wake.xy;
    float dist=length(fromWake);
    float elapsed=age-wake.z;
    float ring=dist-elapsed*1.42;
    float ripple=sin(ring*30.0)*exp(-13.0*ring*ring-1.78*elapsed)
                 *smoothstep(0.0,.22,dist)*(1.0-smoothstep(.8,1.65,elapsed));
    float a=cos(dot(p,vec2(4.1,2.6))-age*1.32);
    float b=cos(dot(p,vec2(-2.1,6.3))+age*1.91);
    vec2 slopes=vec2(.036*a-.016*b,.020*a+.046*b);
    slopes+=.13*ripple*fromWake/max(dist,.10);
    vec3 normal=normalize(vec3(slopes.x,1.0,slopes.y));
    vec3 viewDir=normalize(cameraPosition-vWorld);
    float fresnel=pow(clamp(1.0-abs(dot(viewDir,normal)),0.0,1.0),4.0);
    vec3 reflected=reflect(-viewDir,normal);
    vec2 ceiling=p+reflected.xz*(2.84-vWorld.y)/max(reflected.y,.1);
    float glare=(fixture(ceiling,-35.0)+fixture(ceiling,-40.5)+fixture(ceiling,-46.1))
                *smoothstep(.05,.70,reflected.y)*(1.0-wet);
    float border=min(min(vUv.x,1.0-vUv.x),min(vUv.y,1.0-vUv.y));
    float rim=(1.0-smoothstep(.002,.012,border))*(.66+.15*a+.1*b);
    vec3 color=mix(vec3(.035,.103,.088),vec3(.19,.26,.24),fresnel);
    color=mix(color,vec3(.67,.73,.62),clamp(glare*.78+rim*.34+abs(ripple)*.08,0.0,1.0));
    gl_FragColor=vec4(color,clamp(mix(.35,.68,fresnel)*(1.0-wet*.36)+glare*.16+rim*.12,0.0,.88));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const causticShader = `
  uniform float age;
  varying vec2 vUv;
  varying vec3 vWorld;
  void main(){
    vec2 p=vWorld.xz;
    float a=sin(dot(p,vec2(11.0,7.5))+.88*age+.9*sin(p.y*7.0-age*.54));
    float b=sin(dot(p,vec2(-7.0,13.0))-.67*age+.65*sin(p.x*9.0+age*.35));
    float net=pow(1.0-abs(a*b),8.0);
    float edge=min(min(vUv.x,1.0-vUv.x),min(vUv.y,1.0-vUv.y));
    gl_FragColor=vec4(.30,.46,.35,net*smoothstep(.0,.08,edge)*.22);
    #include <colorspace_fragment>
  }
`;

export function createWaterEffects(T,scene,{left,right,near,far,surface,bed}) {
  const age={value:0}, wet={value:0};
  const wake=new T.Vector3(0,0,-3);
  const material=new T.ShaderMaterial({
    side:T.DoubleSide,transparent:true,depthWrite:false,
    uniforms:{age,wet,wake:{value:wake}},
    vertexShader,fragmentShader:surfaceShader,
  });
  const sheet=new T.PlaneGeometry(right-left,near-far);
  const water=new T.Mesh(sheet,material);
  water.rotation.x=-Math.PI/2;
  water.position.set((left+right)/2,surface,(near+far)/2);
  water.renderOrder=3;
  scene.add(water);

  const reflections=new T.Mesh(sheet,new T.ShaderMaterial({
    transparent:true,depthWrite:false,blending:T.AdditiveBlending,
    uniforms:{age},vertexShader,fragmentShader:causticShader,
  }));
  reflections.rotation.copy(water.rotation);
  reflections.position.copy(water.position).y=bed+.009;
  reflections.renderOrder=2;
  scene.add(reflections);
  let wading=false;

  return {
    reset() {wake.z=age.value-3;wading=false;wet.value=0;},
    update({head,time,submerged,changed}) {
      age.value=time;
      wet.value=Number(submerged);
      const inside=head.x>left&&head.x<right&&head.z<near&&head.z>far;
      const nearSurface=head.y>bed&&head.y<surface+.48;
      const inWater=inside&&nearSurface;
      const crossed=(changed||inWater&&!wading)&&inside;
      const moved=inWater&&time-wake.z>.24&&Math.hypot(head.x-wake.x,head.z-wake.y)>.27;
      if(crossed||moved)wake.set(head.x,head.z,time);
      wading=inWater;
    },
  };
}
