function cross(a,b,c){return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);}
function halfHull(points){
  const result=[];
  for(const p of points){
    while(result.length>1&&cross(result.at(-2),result.at(-1),p)<=0)result.pop();
    result.push(p);
  }
  result.pop();return result;
}
function area(points){
  let sum=0;
  for(let i=0;i<points.length;i++){
    const [x,y]=points[i],[a,b]=points[(i+1)%points.length];
    sum+=x*b-y*a;
  }
  return Math.abs(sum)*.5;
}
function clip(points,axis,bound,sign){
  const result=[];
  for(let i=0;i<points.length;i++){
    const a=points[i],b=points[(i+1)%points.length];
    const inside=(a[axis]-bound)*sign>=0,next=(b[axis]-bound)*sign>=0;
    if(inside)result.push(a);
    if(inside!==next){
      const fraction=(bound-a[axis])/(b[axis]-a[axis]);
      result.push([a[0]+(b[0]-a[0])*fraction,a[1]+(b[1]-a[1])*fraction]);
    }
  }
  return result;
}
export function mostlyInRectangle(points,{left,top,right,bottom}){
  if(points.length<3)return false;
  const sorted=points.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const polygon=[...halfHull(sorted),...halfHull(sorted.reverse())];
  const size=area(polygon);
  if(size<=1e-6)return false;
  const intersection=[[0,left,1],[0,right,-1],[1,top,1],[1,bottom,-1]]
    .reduce((shape,args)=>clip(shape,...args),polygon);
  return area(intersection)>size*.5;
}
