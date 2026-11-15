// Movement model based on Another-Axiom's MIT-licensed GorillaLocomotion.
// https://github.com/Another-Axiom/GorillaLocomotion/blob/main/Player.cs
const HISTORY_SECONDS = .065;
const RELEASE_SECONDS = .08;
const STICK_DISTANCE = .035;
const CONTACT_SKIN = .003;

export class GorillaLocomotion {
  constructor(Vector3, hands, palmContact) {
    this.palmContact = palmContact;
    this.hands = hands.map(hand => {
      hand.anchor = new Vector3();
      hand.locomotionTarget = new Vector3();
      return {
        hand,
        previousPalm: new Vector3(), previousTarget: new Vector3(), offset: new Vector3(),
        normal: new Vector3(), localNormal: new Vector3(), localAnchor: new Vector3(),
        inverseRotation: hand.mesh.quaternion.clone(),
        released: null, releaseSurface: null, releaseTime: 0, tracked: false, eligible: false,
      };
    });
    this.history = Array.from({length: 24}, () => ({duration: 0, distance: new Vector3()}));
    this.result = {contacts: 0, launched: false, launchSpeed: 0};
    this.castBoxes = [];
    this.supportBoxes = [null];
    this.flight = new Vector3();
    this.from = new Vector3();
    this.to = new Vector3();
    this.hit = new Vector3();
    this.hitNormal = new Vector3();
    this.correction = new Vector3();
    this.handMotion = new Vector3();
    this.intent = new Vector3();
    this.planned = new Vector3();
    this.average = new Vector3();
    this.reset();
  }

  reset() {
    this.historyIndex = 0;
    this.clearHistory();
    for (const state of this.hands) {
      state.hand.surface = null;
      state.released = state.releaseSurface = null;
      state.releaseTime = 0;
      state.tracked = state.eligible = false;
    }
    this.dt = this.contacts = 0;
  }

  clearHistory() {
    for (const sample of this.history) sample.duration = 0;
  }

  sweep(state, from, to) {
    let boxes = this.boxes;
    if (state.releaseTime > 0 && boxes.includes(state.releaseSurface)) {
      this.castBoxes.length = 0;
      for (const box of boxes) if (box !== state.releaseSurface) this.castBoxes.push(box);
      boxes = this.castBoxes;
    }
    return this.palmContact(from, to, state.hand.mesh.quaternion, boxes, this.hit, this.hitNormal);
  }

  move({head, dt, gravity, settings, boxes, velocity, movement, reach}) {
    this.dt = dt;
    this.settings = settings;
    this.boxes = boxes;
    this.contacts = 0;
    this.released = false;
    this.intent.set(0, 0, 0);
    movement.set(0, 0, 0);
    this.flight.copy(velocity);
    this.flight.y -= gravity * dt;
    this.flight.multiplyScalar(dt);

    for (const state of this.hands) {
      const {hand, normal, offset} = state;
      const previous = hand.surface;
      state.released = null;
      hand.surface = null;
      state.releaseTime = Math.max(0, state.releaseTime - dt);
      state.eligible = hand.valid && (!hand.held||hand.hasSupport) && settings.movement !== false;
      if (!hand.valid) continue;
      const target = hand.locomotionTarget.subVectors(hand.target, head).clampLength(0, reach).add(head);
      if(hand.hasSupport)offset.copy(hand.supportOffset);
      else offset.set(0, 0, -.036).applyQuaternion(hand.mesh.quaternion);
      if (!state.eligible) continue;

      const priorActive = previous && boxes.includes(previous) && !previous.objectBody?.owner;
      const object = priorActive && previous.objectBody;
      if (object) {
        state.previousPalm.copy(state.localAnchor).applyQuaternion(object.mesh.quaternion).add(object.mesh.position);
        normal.copy(state.localNormal).applyQuaternion(object.mesh.quaternion);
      }
      if (priorActive) hand.anchor.copy(state.previousPalm).sub(offset);

      this.from.copy(target).add(offset);
      if (state.tracked) this.from.copy(state.previousPalm);
      this.to.copy(target).add(offset);
      if (!priorActive) this.to.add(this.flight);
      this.to.y -= Math.min(CONTACT_SKIN, gravity * dt * dt);
      let surface = this.sweep(state, this.from, this.to);
      if (priorActive) {
        const difference = this.correction.subVectors(target, hand.anchor);
        const nearAnchor = difference.dot(normal) <= STICK_DISTANCE &&
          hand.anchor.distanceToSquared(head) <= (reach + STICK_DISTANCE) ** 2 &&
          difference.lengthSq() <= Math.max(.12, reach * .5) ** 2;
        if (nearAnchor && (!surface || (surface === previous && this.hitNormal.dot(normal) > .7))) {
          surface = previous;
          this.hit.copy(hand.anchor).add(offset);
          this.hitNormal.copy(normal);
        } else if (!nearAnchor && surface === previous && difference.dot(normal) > STICK_DISTANCE) {
          surface = null;
        }
        if (!surface && state.tracked) {
          state.released = previous;
          this.released = true;
        }
      }
      if (!surface) continue;

      hand.anchor.copy(this.hit).sub(offset);
      normal.copy(this.hitNormal);
      const friction = surface.friction ?? .8;
      const grip = Math.min(1, Math.max(0, friction * (.75 + settings.grip * .09)));
      const slip = Math.min(.97, Math.max(0, 1 - grip + (settings.slide - 3) * .035));
      const correction = this.correction.subVectors(hand.anchor, target);
      const normalDistance = correction.dot(normal);
      correction.addScaledVector(normal, -normalDistance);
      if (correction.lengthSq() * slip ** 2 > CONTACT_SKIN ** 2) {
        // Check the slipped position against the surface so an anchor cannot slide off an edge.
        this.to.copy(hand.anchor).add(offset).addScaledVector(correction, -slip);
        this.from.copy(this.to).addScaledVector(normal, CONTACT_SKIN);
        this.to.addScaledVector(normal, -CONTACT_SKIN * 2);
        this.supportBoxes[0] = surface;
        const support = this.palmContact(this.from, this.to, hand.mesh.quaternion, this.supportBoxes, this.hit, this.hitNormal);
        if (support) hand.anchor.copy(this.hit).sub(offset);
        else if (slip > .5 && correction.lengthSq() > STICK_DISTANCE ** 2) continue;
      }
      correction.subVectors(hand.anchor, target);
      // Existing anchors support the palm when pressed, but lifting off does not pull the body toward the surface.
      if (priorActive && correction.dot(normal) < 0) correction.addScaledVector(normal, -correction.dot(normal));
      movement.add(correction);
      const body = surface.objectBody;
      if (body) {
        const inverse = state.inverseRotation.copy(body.mesh.quaternion).invert();
        state.localAnchor.copy(hand.anchor).add(offset).sub(body.mesh.position).applyQuaternion(inverse);
        state.localNormal.copy(normal).applyQuaternion(inverse);
      }
      hand.surface = surface;
      this.contacts++;
      if (state.tracked) {
        const intent = this.handMotion.subVectors(state.previousTarget, target);
        const push = intent.dot(normal);
        intent.multiplyScalar(1 - slip).addScaledVector(normal, Math.max(0, push) - push * (1 - slip));
        this.intent.add(intent);
      }
    }
    if (this.contacts) {
      movement.multiplyScalar(1 / this.contacts).clampLength(0, dt * 13);
      this.intent.multiplyScalar(1 / this.contacts);
      velocity.set(0, 0, 0);
    } else {
      movement.copy(this.flight);
      velocity.y -= gravity * dt;
    }
    this.planned.copy(movement);
  }

  finish(appliedMove, velocity) {
    const {result, dt, contacts, history} = this;
    result.contacts = contacts;
    result.launched = false;
    result.launchSpeed = 0;
    if (dt <= 0) return result;

    let hasContact = false;
    for (const state of this.hands) {
      const {hand, previousPalm, previousTarget, offset} = state;
      state.tracked = state.eligible;
      if (!hand.valid) continue;
      previousTarget.copy(hand.locomotionTarget).add(appliedMove);
      previousPalm.copy(previousTarget).add(offset);
      if (hand.surface) {
        previousPalm.copy(hand.anchor).add(offset);
        hasContact = true;
      }
    }

    if (!contacts && !this.released) {
      this.clearHistory();
      return result;
    }

    const sample = history[this.historyIndex];
    sample.duration = dt;
    sample.distance.set(0, 0, 0);
    const moving = this.intent.dot(appliedMove) > 0 && this.planned.dot(appliedMove) > 0 && contacts;
    if (moving) {
      const aligned = this.intent.dot(appliedMove) / appliedMove.length();
      sample.distance.copy(appliedMove).clampLength(0, Math.min(aligned, this.planned.length()));
    }

    let remaining = HISTORY_SECONDS;
    this.average.set(0, 0, 0);
    for (let i = 0; i < history.length && remaining > 0; i++) {
      const entry = history[(this.historyIndex - i + history.length) % history.length];
      if (!entry.duration) break;
      const duration = Math.min(remaining, entry.duration);
      this.average.addScaledVector(entry.distance, duration / entry.duration);
      remaining -= duration;
    }
    this.historyIndex = (this.historyIndex + 1) % history.length;
    this.average.multiplyScalar(1 / HISTORY_SECONDS);
    if (this.settings.movement === false || (!moving && (hasContact || !this.released))) return result;

    // A launch cannot point back into the surfaces that produced it.
    for (let pass = 0; pass < 2; pass++) {
      for (const {hand, normal, released} of this.hands) {
        if (hand.surface || released) {
          const inward = this.average.dot(normal);
          if (inward < 0) this.average.addScaledVector(normal, -inward);
        }
      }
    }
    const {jump, weight} = this.settings;
    if (this.average.lengthSq() < (1.05 + .04 * weight) ** 2) return result;
    velocity.copy(this.average).multiplyScalar((.93 + .15 * jump) / (.72 + .056 * weight));
    velocity.clampLength(0, 8.5 + .28 * jump);
    for (const state of this.hands) {
      const surface = state.hand.surface ?? state.released;
      if (!surface) continue;
      state.releaseSurface = surface;
      state.releaseTime = RELEASE_SECONDS;
      state.hand.surface = null;
      state.previousPalm.copy(state.previousTarget).add(state.offset);
    }
    this.clearHistory();
    result.launched = true;
    result.launchSpeed = velocity.length();
    return result;
  }
}
