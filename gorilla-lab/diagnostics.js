export function createDiagnostics(limit=240){
  const frames=[],events=[];
  return {
    sample(frame){frames.push({...frame});if(frames.length>limit)frames.shift();},
    record(type,data={}){events.push({time:new Date().toISOString(),type,...data});if(events.length>40)events.shift();},
    reset(){frames.length=0;},
    snapshot(mode){
      const selected=mode?frames.filter(f=>f.mode===mode):frames;
      const values=key=>selected.map(f=>f[key]).filter(Number.isFinite).sort((a,b)=>a-b);
      const metrics=key=>{const a=values(key);return {samples:a.length,median:a.length?a[Math.floor((a.length-1)*.5)]:null,p95:a.length?a[Math.floor((a.length-1)*.95)]:null,max:a.at(-1)??null};};
      return {frames:selected.map(f=>({...f})),events:events.map(e=>({...e})),metrics:{
        frameMs:metrics('frameMs'),physicsCpuMs:metrics('physicsCpuMs'),debugCpuMs:metrics('debugCpuMs'),mirrorCpuMs:metrics('mirrorCpuMs'),renderSubmissionCpuMs:metrics('renderSubmissionCpuMs'),
      },gpuMs:null,gpuNote:'GPU time is not measured; renderSubmissionCpuMs measures CPU submission only.'};
    }
  };
}

