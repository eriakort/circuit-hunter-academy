import assert from 'node:assert/strict';
import {
  SANKOFA_RANKS,
  SANKOFA_REGIONS,
  SANKOFA_THEME,
  getNextSankofaRank,
  getSankofaRank,
  getSankofaRankProgress,
  isSankofaCurriculum
} from '../src/data/sankofaTheme';

assert.equal(SANKOFA_THEME.id, 'sankofa');
assert.equal(SANKOFA_THEME.tagline, 'Learn from the past. Understand the present. Build the future.');
assert.equal(SANKOFA_RANKS.length, 6);
assert.equal(SANKOFA_REGIONS.length, 5);
assert.equal(isSankofaCurriculum('ghana-nacca'), true);
assert.equal(isSankofaCurriculum('italy-national'), false);
assert.equal(getSankofaRank(0).id, 'curious-seeker');
assert.equal(getSankofaRank(250).id, 'trail-explorer');
assert.equal(getSankofaRank(800).id, 'pattern-finder');
assert.equal(getSankofaRank(1600).id, 'problem-solver');
assert.equal(getSankofaRank(2700).id, 'knowledge-keeper');
assert.equal(getSankofaRank(5500).id, 'community-innovator');
assert.equal(getNextSankofaRank(0)?.id, 'trail-explorer');
assert.equal(getNextSankofaRank(5500), null);
assert.equal(getSankofaRankProgress(125), 50);
assert.equal(getSankofaRankProgress(525), 50);
assert.equal(getSankofaRankProgress(5500), 100);
assert.equal(getSankofaRank(-20).id, 'curious-seeker');
assert.equal(getSankofaRank(Number.NaN).id, 'curious-seeker');
assert.equal(getSankofaRankProgress(Number.NaN), 0);
assert.equal(new Set(SANKOFA_REGIONS.map(region => region.id)).size, 5);
console.log('sankofaTheme.test.ts ok');
