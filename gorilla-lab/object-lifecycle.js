// Reset a released object to its authored pose, including its orientation.
export function restoreObject(body){
  body.mesh.position.copy(body.start);
  if(body.startRotation)body.mesh.quaternion.copy(body.startRotation);
  else body.mesh.quaternion.identity();
  body.velocity.set(0,0,0);body.angular.set(0,0,0);
  body.sleeping=false;body.quietTime=0;
  body.beforePhysics?.copy(body.mesh.position);
}
export function outsideObjectWorld(position,custom){
  const {x,y,z}=position;
  return !Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(z)||
    (custom?y<-24||Math.abs(x)>155||Math.abs(z)>155:y<-8||Math.abs(x)>28||z<-57||z>13);
}
