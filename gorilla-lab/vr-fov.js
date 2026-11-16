import * as T from 'three';

// Le masque utilise le viewport de chaque œil. Les projections stéréo restent celles du casque.
export const vrFovShader=`
  uniform float visibleField;
  float vrFovShade(vec2 uv){
    if(visibleField>=1.0)return 0.0;
    vec2 edge=abs(2.0*uv-1.0);
    float roundedEdge=max(edge.x,edge.y)+0.18*min(edge.x,edge.y);
    return smoothstep(visibleField-0.12,visibleField,roundedEdge);
  }
`;

export function createVrFovMask(){
  const mask=new T.Mesh(new T.PlaneGeometry(2,2),new T.ShaderMaterial({
    uniforms:{visibleField:{value:1}},
    transparent:true,depthTest:false,depthWrite:false,toneMapped:false,
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader:'varying vec2 vUv;'+vrFovShader+'void main(){gl_FragColor=vec4(0.,0.,0.,vrFovShade(vUv));}',
  }));
  mask.frustumCulled=false;
  mask.renderOrder=Infinity;
  mask.visible=false;
  return mask;
}
