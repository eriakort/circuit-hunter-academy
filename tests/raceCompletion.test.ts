import assert from 'node:assert/strict';
import {
  calculateRaceCompletionXP,
  haveRaceOpponentsFinished,
  shouldFinalizeRace
} from '../src/raceCompletion';

assert.equal(haveRaceOpponentsFinished(['me', 'a'], 'me', { a: { done: true } }), true);
assert.equal(haveRaceOpponentsFinished(['me', 'a'], 'me', { a: { done: false } }), false);
assert.equal(haveRaceOpponentsFinished(['me', 'a'], 'me', {}), false);
assert.equal(haveRaceOpponentsFinished(['me'], 'me', {}), true, 'solo races have no opponents to wait for');

assert.equal(shouldFinalizeRace(true, false), true);
assert.equal(shouldFinalizeRace(false, true), true, 'the completion deadline releases an abandoned race');
assert.equal(shouldFinalizeRace(false, false), false);

assert.equal(calculateRaceCompletionXP(8, true, 2, true), 49, 'a completed winner receives the bonus');
assert.equal(calculateRaceCompletionXP(8, true, 2, false), 24, 'an unfinished opponent cannot trigger the winner bonus');
assert.equal(calculateRaceCompletionXP(8, false, 2, true), 24);
assert.equal(calculateRaceCompletionXP(8, true, 1, true), 24, 'solo play has no winner bonus');
assert.equal(calculateRaceCompletionXP(-5, true, 2, true), 25, 'invalid answer counts are clamped');
assert.equal(calculateRaceCompletionXP(99, true, 2, true), 55, 'answer counts are bounded to the race question limit');

console.log('raceCompletion.test.ts ok');
