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
assert.equal(getSankofaRank(100).id, 'trail-explorer');
assert.equal(getSankofaRank(300).id, 'pattern-finder');
assert.equal(getSankofaRank(600).id, 'problem-solver');
assert.equal(getSankofaRank(1000).id, 'knowledge-keeper');
assert.equal(getSankofaRank(1600).id, 'community-innovator');
assert.equal(getNextSankofaRank(0)?.id, 'trail-explorer');
assert.equal(getNextSankofaRank(1600), null);
assert.equal(getSankofaRankProgress(50), 50);
assert.equal(getSankofaRankProgress(200), 50);
assert.equal(getSankofaRankProgress(1600), 100);
assert.equal(getSankofaRank(-20).id, 'curious-seeker');
assert.equal(getSankofaRank(Number.NaN).id, 'curious-seeker');
assert.equal(getSankofaRankProgress(Number.NaN), 0);
assert.equal(new Set(SANKOFA_REGIONS.map(region => region.id)).size, 5);
console.log('sankofaTheme.test.ts ok');
