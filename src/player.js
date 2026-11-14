import * as THREE from 'three';
import { CameraFeel } from './camera-feel.js';

const MAX_STEP = 1 / 90;
const WORLD_EDGE = 1450;
const EPSILON = 0.002;
const MAX_SLOPE = Math.tan((44 * Math.PI) / 180);

/** First-person capsule approximation. Coordinates are metres; position is at the feet. */
export class Player {
  constructor(camera, world, colliderProvider = () => []) {
    this.camera = camera;
    this.world = world;
    this.colliderProvider = colliderProvider;
    this.radius = 0.27;
    this.eyeHeight = 1.58;
    this.bodyHeight = 1.7;
    this.feel = new CameraFeel();
    this.motionScale = 0.65;
    this.stepHeight = 0.45;
    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = -0.05;
    this.grounded = true;
    this.baseFov = camera.fov || 72;
    this._jumpHeld = false;
    this._colliders = [];
    this._sprinting = false;
    const spawn = world.spawn || { x: 0, z: 0 };
    this.teleport(spawn.x || 0, spawn.z || 0);
  }

  _height(x, z) {
    const value = this.world.height(x, z);
    return Number.isFinite(value) ? value : 0;
  }

  teleport(x, z) {
    this.position.set(
      THREE.MathUtils.clamp(x, -WORLD_EDGE + this.radius, WORLD_EDGE - this.radius),
      0,
      THREE.MathUtils.clamp(z, -WORLD_EDGE + this.radius, WORLD_EDGE - this.radius)
    );
    this.position.y = this._height(this.position.x, this.position.z);
    this.velocity.set(0, 0, 0);
    this.grounded = true;
    this._jumpHeld = false;
    this.feel.reset();
    this.syncCamera();
  }

  /** Positive screen deltas turn the view right/down; no pointer-lock dependency. */
  look(dx, dy, sensitivity = 1) {
    this.yaw -= dx * 0.0022 * sensitivity;
    this.pitch = THREE.MathUtils.clamp(this.pitch - dy * 0.0022 * sensitivity, -1.47, 1.47);
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }

  resetInput() {
    this._jumpHeld = false;
    this._sprinting = false;
    this.velocity.x = 0;
    this.velocity.z = 0;
  }

  /** Short external movement, swept through the same collision rules as walking. */
  push(dx, dz) {
    const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.07));
    for (let i = 0; i < steps; i++) {
      const x = this.position.x,
        z = this.position.z,
        nx = THREE.MathUtils.clamp(
          x + dx / steps,
          -WORLD_EDGE + this.radius,
          WORLD_EDGE - this.radius
        ),
        nz = THREE.MathUtils.clamp(
          z + dz / steps,
          -WORLD_EDGE + this.radius,
          WORLD_EDGE - this.radius
        );
      this._colliders = this.colliderProvider(x, z, this.radius + 0.2) || [];
      this._moveHorizontal(nx - x, nz - z);
      const support = this._support(
        this.position.x,
        this.position.z,
        this.position.y + (this.grounded ? this.stepHeight : 0)
      );
      if (
        this.grounded &&
        support <= this.position.y + this.stepHeight &&
        support >= this.position.y - 0.35
      )
        this.position.y = support;
    }
    this.syncCamera();
  }

  syncCamera(dt = 0) {
    const feel = this.feel.sample(
      dt,
      Math.hypot(this.velocity.x, this.velocity.z),
      this.grounded,
      this._sprinting,
      this.motionScale
    );
    this.camera.position.copy(this.position);
    this.camera.position.y += this.eyeHeight + feel.y;
    this.camera.rotation.set(this.pitch + feel.pitch, this.yaw, feel.roll, 'YXZ');
    const targetFov = this.baseFov + feel.fov;
    const nextFov = dt > 0 ? THREE.MathUtils.damp(this.camera.fov, targetFov, 6, dt) : targetFov;
    if (Math.abs(this.camera.fov - nextFov) > 0.0001) {
      this.camera.fov = nextFov;
      this.camera.updateProjectionMatrix();
    }
  }

  impact(strength = 0.5) {
    this.feel.impact(strength);
  }

  update(dt, keys = new Set(), { sprint = false, speedFactor = 1, repeatJump = false } = {}) {
    const jumpHeld = keys.has('Space');
    const jumpPressed = jumpHeld && (!this._jumpHeld || (repeatJump && this.grounded));
    this._jumpHeld = jumpHeld;
    if (!Number.isFinite(dt) || dt <= 0) return;
    // A suspended tab never produces one enormous collision step on resume.
    dt = Math.min(dt, 0.12);
    const forward = Number(keys.has('KeyW') || keys.has('KeyZ')) - Number(keys.has('KeyS'));
    const right = Number(keys.has('KeyD')) - Number(keys.has('KeyA') || keys.has('KeyQ'));
    const length = Math.hypot(forward, right) || 1;
    this._sprinting =
      !!(forward || right) && (sprint || keys.has('ShiftLeft') || keys.has('ShiftRight'));
    const water = this.world.waterLevel?.(this.position.x, this.position.z);
    const swimming =
      Number.isFinite(water) &&
      this._height(this.position.x, this.position.z) < water - this.eyeHeight;
    const speed =
      (swimming ? (this._sprinting ? 3.8 : 2.6) : this._sprinting ? 10.5 : 4.5) *
      Math.max(0.3, Math.min(1, speedFactor));
    const sine = Math.sin(this.yaw),
      cosine = Math.cos(this.yaw);
    const targetX = ((right * cosine - forward * sine) / length) * speed;
    const targetZ = ((-forward * cosine - right * sine) / length) * speed;
    if (jumpPressed && this.grounded) {
      this.impact(0.25);
      this.velocity.y = 7.2;
      this.grounded = false;
    }
    const count = Math.ceil(dt / MAX_STEP);
    const step = dt / count;
    const fallingSpeed = Math.max(0, -this.velocity.y),
      wasGrounded = this.grounded;
    for (let i = 0; i < count; i++) this._step(step, targetX, targetZ);
    if (!wasGrounded && this.grounded && fallingSpeed > 2)
      this.impact(Math.min(0.8, fallingSpeed / 16));
    this.syncCamera(dt);
  }

  _overlaps(x, z, obstacle) {
    if (obstacle.type === 'block') {
      const halfWidth = (obstacle.width || 1) / 2;
      const halfDepth = (obstacle.depth || 1) / 2;
      const closestX = THREE.MathUtils.clamp(x, obstacle.x - halfWidth, obstacle.x + halfWidth);
      const closestZ = THREE.MathUtils.clamp(z, obstacle.z - halfDepth, obstacle.z + halfDepth);
      return (x - closestX) ** 2 + (z - closestZ) ** 2 < this.radius ** 2;
    }
    const radius = this.radius + (obstacle.radius || 0);
    return (x - obstacle.x) ** 2 + (z - obstacle.z) ** 2 < radius ** 2;
  }

  _base(obstacle) {
    return obstacle.type === 'block' ? obstacle.y || 0 : obstacle.baseY || 0;
  }

  _top(obstacle) {
    return this._base(obstacle) + (obstacle.height || 1);
  }

  _support(x, z, highestAllowed) {
    let height = this._height(x, z);
    const water = this.world.waterLevel?.(x, z);
    if (Number.isFinite(water)) height = Math.max(height, water - this.eyeHeight + 0.22);
    for (const obstacle of this._colliders) {
      if (obstacle.type === 'entity' || !this._overlaps(x, z, obstacle)) continue;
      const top = this._top(obstacle);
      if (top <= highestAllowed + EPSILON) height = Math.max(height, top);
    }
    return height;
  }

  _canMove(x, z, oldX, oldZ) {
    const terrain = this._height(x, z);
    const oldTerrain = this._height(oldX, oldZ);
    const distance = Math.hypot(x - oldX, z - oldZ);
    // Slopes are measured over the actual movement, without a per-frame step loophole.
    if (terrain > oldTerrain + distance * MAX_SLOPE + 0.0001 && terrain > this.position.y + EPSILON)
      return false;
    const allowedStep = this.grounded ? this.stepHeight : 0;
    for (const obstacle of this._colliders) {
      if (!this._overlaps(x, z, obstacle)) continue;
      const top = this._top(obstacle),
        base = this._base(obstacle);
      if (this.position.y >= top - EPSILON || this.position.y + this.bodyHeight <= base + EPSILON)
        continue;
      if (obstacle.type !== 'entity' && top <= this.position.y + allowedStep + EPSILON) {
        // Check headroom before accepting a short stair.
        const obstructed = this._colliders.some(
          (other) =>
            other !== obstacle &&
            this._overlaps(x, z, other) &&
            this._base(other) < top + this.bodyHeight - EPSILON &&
            this._top(other) > top + EPSILON
        );
        if (!obstructed) continue;
      }
      return false;
    }
    return true;
  }

  /** Keep the tangential part of movement instead of stopping both world axes. */
  _moveHorizontal(dx, dz) {
    const { x, z } = this.position;
    if (this._canMove(x + dx, z + dz, x, z)) {
      this.position.x += dx;
      this.position.z += dz;
      return;
    }
    let slideX = dx,
      slideZ = dz;
    for (const obstacle of this._colliders) {
      if (obstacle.type === 'block' || !this._overlaps(x + dx, z + dz, obstacle)) continue;
      if (
        this.position.y >= this._top(obstacle) - EPSILON ||
        this.position.y + this.bodyHeight <= this._base(obstacle) + EPSILON
      )
        continue;
      const length = Math.hypot(x - obstacle.x, z - obstacle.z);
      if (length < EPSILON) continue;
      const nx = (x - obstacle.x) / length,
        nz = (z - obstacle.z) / length;
      const inward = slideX * nx + slideZ * nz;
      if (inward < 0) {
        slideX -= inward * nx;
        slideZ -= inward * nz;
      }
    }
    if (this._canMove(x + slideX, z + slideZ, x, z)) {
      this.position.x += slideX;
      this.position.z += slideZ;
      return;
    }
    // Flat walls and tight corners retain an axis fallback, still fully collision checked.
    if (this._canMove(x + dx, z, x, z)) this.position.x += dx;
    if (this._canMove(this.position.x, z + dz, this.position.x, z)) this.position.z += dz;
  }

  _step(dt, targetX, targetZ) {
    const responsiveness = this.grounded ? 13 : 4.2;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, targetX, responsiveness, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, targetZ, responsiveness, dt);
    const { x, z } = this.position;
    const reach = this.radius + Math.hypot(this.velocity.x, this.velocity.z) * dt + 0.5;
    this._colliders = this.colliderProvider(x, z, reach) || [];
    const desiredX = THREE.MathUtils.clamp(
      x + this.velocity.x * dt,
      -WORLD_EDGE + this.radius,
      WORLD_EDGE - this.radius
    );
    const desiredZ = THREE.MathUtils.clamp(
      z + this.velocity.z * dt,
      -WORLD_EDGE + this.radius,
      WORLD_EDGE - this.radius
    );
    this._moveHorizontal(desiredX - x, desiredZ - z);
    this.velocity.x = (this.position.x - x) / dt;
    this.velocity.z = (this.position.z - z) / dt;
    const oldY = this.position.y;
    const support = this._support(
      this.position.x,
      this.position.z,
      oldY + (this.grounded ? this.stepHeight : 0)
    );
    if (this.grounded && support <= oldY + this.stepHeight + EPSILON && support >= oldY - 0.35) {
      this.position.y = support;
      this.velocity.y = 0;
      return;
    }
    this.grounded = false;
    this.velocity.y = Math.max(-38, this.velocity.y - 21 * dt);
    let nextY = oldY + this.velocity.y * dt;
    if (this.velocity.y > 0) {
      for (const obstacle of this._colliders) {
        if (!this._overlaps(this.position.x, this.position.z, obstacle)) continue;
        const bottom = this._base(obstacle);
        if (oldY + this.bodyHeight <= bottom + EPSILON && nextY + this.bodyHeight >= bottom) {
          nextY = bottom - this.bodyHeight;
          this.velocity.y = 0;
        }
      }
    }
    if (this.velocity.y <= 0 && nextY <= support + EPSILON) {
      this.position.y = support;
      this.velocity.y = 0;
      this.grounded = true;
    } else {
      this.position.y = nextY;
    }
  }
}
