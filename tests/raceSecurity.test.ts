import assert from 'node:assert/strict';
import { sanitizeRacePlayer, getRaceHostId, isRaceHostControlMessage, validateRaceStartPayload } from '../src/raceSecurity';
import { validateRaceProgress } from '../src/raceProtocol';
import { raceAvatar } from '../src/helpers';

const clean = sanitizeRacePlayer('presence-key-1', {
  id: 'spoofed-id',
  name: '  <img src=x onerror=alert(1)>extra-name-that-is-too-long  ',
  joinedAt: 123,
  hue: 999
});
assert.deepEqual(clean, {
  id: 'presence-key-1',
  name: '<img src=x onerror=',
  joinedAt: 123,
  hue: 359
});
assert.equal(sanitizeRacePlayer('guest', { name: '   ', joinedAt: 1, hue: 1 }), null);
assert.equal(sanitizeRacePlayer('guest', null), null);
assert.equal(sanitizeRacePlayer('guest', []), null);
assert.equal(sanitizeRacePlayer('', { name: 'Guest' }), null);
assert.equal(sanitizeRacePlayer('guest', { name: 'Guest', joinedAt: 'not-a-time', hue: 'evil' })?.joinedAt, 0);
assert.equal(sanitizeRacePlayer('guest', { name: 'Guest', joinedAt: 1, hue: -20 })?.hue, 0);

const maliciousAvatar = raceAvatar('<svg onload=alert(1)>', 360, 'avatar\" onload=\"alert(1)');
assert.ok(!maliciousAvatar.includes('<svg onload'));
assert.ok(maliciousAvatar.includes('&lt;svg onload=alert(1)&gt;'));
assert.ok(maliciousAvatar.includes('class="avatar&quot; onload=&quot;alert(1)"'));
assert.ok(maliciousAvatar.includes('hsl(360 55% 22%)'));

const players = {
  later: { id: 'later', name: 'Later', joinedAt: 200, hue: 20 },
  host: { id: 'host', name: 'Host', joinedAt: 100, hue: 10 }
};
assert.equal(getRaceHostId(players), 'host');
assert.equal(isRaceHostControlMessage({ from: 'host' }, 'host'), true);
assert.equal(isRaceHostControlMessage({ from: 'later' }, 'host'), false);
assert.equal(isRaceHostControlMessage({ from: 'host' }, undefined), false);
assert.equal(isRaceHostControlMessage(null, 'host'), false);

const validStart = { from: 'host', missionId: 'mission-1', seed: 42, raceId: 'race-1', subject: 'cs' };
const isMission = (id: unknown) => id === 'mission-1' || id === 'mix';
assert.deepEqual(validateRaceStartPayload(validStart, 'host', isMission), validStart);
assert.equal(validateRaceStartPayload({ ...validStart, from: 'guest' }, 'host', isMission), null);
assert.equal(validateRaceStartPayload({ ...validStart, missionId: 'unknown' }, 'host', isMission), null);
assert.equal(validateRaceStartPayload({ ...validStart, seed: -1 }, 'host', isMission), null);
assert.equal(validateRaceStartPayload({ ...validStart, seed: 1.5 }, 'host', isMission), null);
assert.equal(validateRaceStartPayload({ ...validStart, raceId: 'x'.repeat(65) }, 'host', isMission), null);
assert.equal(validateRaceStartPayload({ ...validStart, subject: 5 }, 'host', isMission), null);

const knownPlayers = new Set(['guest']);
const validProgress = { id: 'guest', step: 2, score: 150, time: 1700000001000, raceId: 'race-1', done: false };
assert.deepEqual(validateRaceProgress(validProgress, 'race-1', knownPlayers, undefined, 5), validProgress);
assert.equal(validateRaceProgress({ ...validProgress, score: 999999 }, 'race-1', knownPlayers, undefined, 5), null);
assert.equal(validateRaceProgress({ ...validProgress, id: 'intruder' }, 'race-1', knownPlayers, undefined, 5), null);

console.log('raceSecurity.test.ts ok');
