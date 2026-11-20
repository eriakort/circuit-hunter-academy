import assert from 'node:assert/strict';
import { getGhanaScienceVisualAudit, summarizeGhanaScienceVisualAudit } from '../src/data/ghanaScienceVisualAudit';

const rows = getGhanaScienceVisualAudit();
const summary = summarizeGhanaScienceVisualAudit(rows);

assert.equal(summary.totalMissions, 69, 'Basic 7–9 Science visual audit includes all registered missions');
assert.deepEqual(
  summary.byGrade.map(row => [row.grade, row.missions]),
  [['Basic 7', 22], ['Basic 8', 22], ['Basic 9', 25]],
  'Visual audit grade totals match the live curriculum registry'
);
assert.equal(
  summary.instructionalVisualMissions + summary.genericOnlyMissions + summary.missingVisualMissions,
  summary.totalMissions,
  'Every mission receives exactly one visual coverage status'
);
assert.ok(rows.every(row => row.missionId && row.title), 'Every audit row identifies its mission');
assert.ok(rows.every(row => row.instructionalVisualScenes >= 0 && row.genericVisualScenes >= 0));
assert.ok(rows.every(row => row.interactiveScenes >= 0));

// The current baseline deliberately distinguishes the repeated demon/challenge
// illustration from instructional science visuals. Battle scenes are not
// counted as simulations merely because they are interactive.
assert.equal(summary.instructionalVisualMissions, 65, 'The Basic 7 and Basic 8 visual pilots plus the first five Basic 9 Diversity of Matter missions plus the nitrogen-cycle, grasshopper life-cycle, crop-maturity, animal-feed-preparation and animal-feed-selection and energy-light, electricity-electronics and energy-conversion and force-motion, circulation-respiration and asteroids-comets and ecosystem-balance manure-materials manure-composting and waste-management missions have dedicated instructional visuals');
assert.equal(summary.genericOnlyMissions, 4, 'The remaining JHS missions use generic challenge art rather than a dedicated science visual');
assert.equal(summary.missingVisualMissions, 0, 'Every current JHS mission has at least generic challenge art');
assert.deepEqual(summary.byGrade.map(row => [row.grade, row.instructionalVisualMissions, row.genericOnlyMissions]), [['Basic 7', 22, 0], ['Basic 8', 22, 0], ['Basic 9', 21, 4]]);

console.log(
  `Ghana Science visual audit: ${summary.totalMissions} missions; ${summary.instructionalVisualMissions} instructional visuals; ${summary.genericOnlyMissions} generic-only; ${summary.missingVisualMissions} missing.`
);
