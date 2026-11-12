import assert from 'node:assert/strict';
import { validateRaceProgress } from '../src/raceProtocol';
import type { RaceProgress } from '../src/types';

const players = new Set(['opponent']);
const valid = { id: 'opponent', step: 2, score: 150, time: 1700000001000, raceId: 'race-1', done: false };
const parsed = validateRaceProgress(valid, 'race-1', players, undefined, 5);
assert.deepEqual(parsed, valid);
assert.equal(validateRaceProgress(null, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress([], 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, id: 'stranger' }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, raceId: 'old-race' }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, step: 0 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, step: 6 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, step: 1.5 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, score: -1 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, score: 201 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, score: 10.5 }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, time: Number.POSITIVE_INFINITY }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, done: true }, 'race-1', players, undefined, 5), null);
assert.equal(validateRaceProgress({ ...valid, step: 5, done: false }, 'race-1', players, undefined, 5), null);

const previous: RaceProgress = { ...valid, step: 2, score: 100, time: 1700000001000 };
assert.equal(validateRaceProgress({ ...valid, step: 1 }, 'race-1', players, previous, 5), null, 'backwards steps are rejected');
assert.equal(validateRaceProgress({ ...valid, score: 50 }, 'race-1', players, previous, 5), null, 'decreasing scores are rejected');
assert.equal(validateRaceProgress({ ...valid, time: previous.time - 1 }, 'race-1', players, previous, 5), null, 'older progress replays are rejected');
assert.deepEqual(validateRaceProgress({ ...valid, score: 120, time: previous.time + 1 }, 'race-1', players, previous, 5), { ...valid, score: 120, time: previous.time + 1 });

const final = { ...valid, step: 5, score: 350, done: true };
assert.deepEqual(validateRaceProgress(final, 'race-1', players, undefined, 5), final);
console.log('raceProtocol.test.ts ok');
