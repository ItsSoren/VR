const BASELINE_MS = 1600;
const DROP_INTERVAL_MS = 850;
const DROP_COUNT = 6;

function emptyPhase() {
  return {frames:0,elapsedMs:0,maxFrameMs:0,physicsMs:0,maxPhysicsMs:0,maxSubsteps:0,minQuality:Infinity,maxQuality:-Infinity};
}

function summarize(stats) {
  if (!stats.frames) return null;
  const round = value => Math.round(value * 100) / 100;
  return {
    samples:stats.frames, durationMs:round(stats.elapsedMs), fps:round(1000 * stats.frames / stats.elapsedMs),
    worstFrameMs:round(stats.maxFrameMs), meanPhysicsMs:round(stats.physicsMs / stats.frames),
    worstPhysicsMs:round(stats.maxPhysicsMs), maxSubsteps:stats.maxSubsteps,
    qualityRange:Number.isFinite(stats.minQuality)?[stats.minQuality,stats.maxQuality]:null,
  };
}

export function createSphereBenchmark() {
  let run = null;
  function start(mode, settings) {
    run = {mode,settings,status:'running',phase:'baseline',drops:0,baseline:emptyPhase(),collision:emptyPhase()};
  }
  function sample({mode,frameMs,physicsCpuMs,physicsSubsteps,qualityActive}) {
    if (run?.status !== 'running' || run.mode !== mode || !Number.isFinite(frameMs) || frameMs <= 0) return null;
    const stats = run[run.phase];
    stats.frames++;
    stats.elapsedMs += frameMs;
    stats.maxFrameMs = Math.max(stats.maxFrameMs,frameMs);
    stats.physicsMs += physicsCpuMs;
    stats.maxPhysicsMs = Math.max(stats.maxPhysicsMs,physicsCpuMs);
    stats.maxSubsteps = Math.max(stats.maxSubsteps,physicsSubsteps);
    if (Number.isFinite(qualityActive)) {
      stats.minQuality = Math.min(stats.minQuality,qualityActive);
      stats.maxQuality = Math.max(stats.maxQuality,qualityActive);
    }
    if (run.phase === 'baseline') {
      if (stats.elapsedMs < BASELINE_MS) return null;
      run.phase = 'collision';
    } else {
      if (stats.elapsedMs < run.drops * DROP_INTERVAL_MS) return null;
      if (run.drops >= DROP_COUNT) {
        run.status = 'completed';
        return 'complete';
      }
    }
    run.drops++;
    return 'drop';
  }
  function cancel(reason) {
    if (run?.status !== 'running') return false;
    run.status = 'cancelled';
    run.reason = reason;
    return true;
  }
  function snapshot(mode) {
    if (!run || (mode && run.mode !== mode)) return null;
    const {baseline,collision,...info} = run;
    return {...info,baseline:summarize(baseline),collision:summarize(collision)};
  }
  return {start,sample,cancel,snapshot,get active(){return run?.status === 'running';},get mode(){return run?.mode;}};
}
