import assert from "node:assert/strict";
import test from "node:test";
import { createExpressionController } from "../app/cat-expressions.ts";

test("expressions remain legible, then rest before changing", () => {
  const face = createExpressionController(0, () => 0);
  assert.equal(face(0, "idle", null), "neutral");
  assert.equal(face(1100, "idle", null), "curious");
  assert.equal(face(2000, "run", null), "curious");
  assert.equal(face(3499, "run", null), "curious");
  assert.equal(face(3500, "idle", null), "neutral");
  assert.equal(face(6099, "idle", null), "neutral");
  assert.equal(face(6100, "idle", null), "wink");
});

test("a complete stroll shows every playful expression with neutral pauses", () => {
  const face = createExpressionController(0, () => 0.5);
  const seen = new Set();
  for (let now = 0; now < 60000; now += 100) seen.add(face(now, "run", null));
  assert.deepEqual(seen, new Set(["neutral", "curious", "wink", "pout", "cheeky", "surprised", "happy"]));
});

test("sleep wins over attention, and tricks have matching expressions", () => {
  const face = createExpressionController(0);
  const reaction = { expression: "pout", until: 5000 };
  assert.equal(face(2000, "sleep", reaction), "sleepy");
  assert.equal(face(2000, "roll", reaction), "happy");
  assert.equal(face(2000, "stretch", reaction), "happy");
  assert.equal(face(2000, "pounce", reaction), "surprised");
  assert.equal(face(2000, "love", reaction), "pout");
});

test("attention reactions expire and normal expressions resume", () => {
  const face = createExpressionController(0, () => 0);
  const reaction = { expression: "cheeky", until: 3000 };
  assert.equal(face(1500, "idle", reaction), "cheeky");
  assert.equal(face(2999, "love", reaction), "cheeky");
  assert.equal(face(3000, "love", reaction), "happy");
  assert.equal(face(3100, "idle", reaction), "curious");
});

test("extra frames and layout updates do not restart expression timing", () => {
  const sparse = createExpressionController(0, () => 0);
  const frequent = createExpressionController(0, () => 0);
  for (let now = 0; now <= 10000; now += 100) {
    const expected = sparse(now, "idle", null);
    assert.equal(frequent(now, "idle", null), expected);
    for (let repeat = 0; repeat < 10; repeat++) assert.equal(frequent(now, "run", null), expected);
  }
});
