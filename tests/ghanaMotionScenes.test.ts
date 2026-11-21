import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MOTION_SCENES } from '../src/components/scienceMotion/registry';

const cases: [string, string, string][] = [
  ['gh-jhs1-science-materials-states', 'The Materials Explorer', 'Temperature model'],
  ['gh-jhs1-science-earth-cycles', 'The Earth Systems Explorer', 'Evaporation'],
  ['gh-jhs1-science-human-body-system', 'The Digestion Defender', 'Oesophagus'],
  ['gh-jhs1-science-solar-system', 'The Inner Planet Navigator', 'Venus'],
  ['gh-jhs1-science-ecosystem', 'The Ecosystem Balance Keeper', 'Grasshopper'],
  ['gh-jhs1-science-life-cycles', 'The Life Cycle Guardian', 'Housefly'],
  ['gh-jhs1-science-force-motion', 'The Force and Motion Pathfinder', 'Kicking a football'],
  ['gh-jhs1-science-electricity-generation', 'The Electricity Generation Guardian', 'Hydroelectricity'],
  ['gh-jhs1-science-energy-conversion', 'The Energy Transformation Alchemist', 'Electric fan'],
  ['gh-jhs2-science-outer-planets', 'The Outer Planet Navigator', 'Neptune'],
  ['gh-jhs2-science-ecosystem-feeding', 'The Ecosystem Food-Web Strategist', 'Grasshopper'],
  ['gh-jhs2-science-anopheles-life-cycle', 'The Mosquito Life-Cycle Defender', 'Pupa'],
  ['gh-jhs2-science-atomic-structure', 'The Atomic Structure Navigator', 'Chloride ion (Cl⁻)'],
  ['gh-jhs2-science-cell-types', 'The Cell Type Investigator', 'Prokaryotic cell'],
  ['gh-jhs2-science-carbon-cycle', 'The Carbon Cycle Guardian', 'Photosynthesis'],
  ['gh-jhs2-science-mixture-separation', 'The Mixture Separation Engineer', 'Magnetic separation'],
  ['gh-jhs3-science-nitrogen-cycle', 'The Nitrogen Cycle Guardian', 'Nitrification'],
  ['gh-jhs3-science-circulation-respiration', 'The Circulation and Respiration Navigator', 'Red blood cells'],
  ['gh-jhs3-science-asteroids-comets', 'The Asteroid and Comet Pathfinder', 'Comet'],
  ['gh-jhs3-science-grasshopper-life-cycle', 'The Grasshopper Life-Cycle Ranger', 'Nymph'],
  ['gh-jhs3-science-ecosystem-balance', 'The Ecosystem Balance Explorer', 'Fewer lizards'],
  ['gh-jhs3-science-energy-light', 'The Energy Conservation Guardian', 'Refraction'],
  ['gh-jhs3-science-manure-composting', 'The Composting Field Lab', 'Add moisture and air'],
  ['gh-jhs3-science-waste-management', 'The Community Waste Solutions Lab', 'Hazardous or special waste'],
  ['gh-jhs3-science-climate-green-economy', 'The Ghana Climate Action Observatory', 'Greenhouse gases'],
  ['gh-jhs3-science-electricity-electronics', 'The Circuit Systems Engineer', 'Parallel circuit'],
  ['gh-jhs3-science-energy-conversion', 'The Energy Transformation Alchemist', 'Electric fan'],
  ['gh-jhs3-science-force-motion-pressure', 'The Force and Motion Strategist', 'Balanced and unbalanced forces'],
  ['gh-jhs3-science-binary-compounds', 'The Binary Compound Chemist', 'Sodium chloride'],
  ['gh-jhs3-science-acids-bases-salts', 'The pH Scale Guardian', 'Baking soda solution'],
  ['gh-jhs3-science-chemical-bonding', 'The Chemical Bonding Architect', 'Metallic bonding'],
  ['gh-jhs3-science-specialised-plant-cells', 'The Plant Cell Specialist', 'Guard cells'],
  ['gh-jhs3-science-specialised-human-cells', 'The Human Cell Function Ranger', 'Red blood cell'],
  ['gh-jhs3-science-crop-maturity', 'The Crop Maturity Investigator', 'Maize'],
  ['gh-jhs3-science-animal-feed-preparation', 'The Animal Feed Formulator', 'Select'],
  ['gh-jhs3-science-animal-feed-selection', 'The Livestock Nutrition Strategist', 'Make a safe decision'],
  ['gh-jhs3-science-agricultural-tools', 'The Agricultural Tool Designer', 'Hand hoe'],
  ['gh-jhs3-science-manure-materials', 'The Manure Materials Sorting Lab', 'Specialist treatment only'],
  ['gh-jhs3-science-plant-resources', 'The Plant Resources Explorer', 'Roots'],
  ['gh-jhs3-science-industry', 'The Ghana Industry Innovation Studio', 'Soap production'],
  ['gh-jhs3-science-human-health', 'The Community Health Detective Lab', 'Chain of infection'],
  ['gh-jhs2-science-energy-sources-heat', 'The Energy Conversion Pathfinder', 'Hydroelectric station'],
  ['gh-jhs2-science-electricity-electronics', 'The Electricity Network Engineer', 'Discharging'],
  ['gh-jhs2-science-energy-conservation-impact', 'The Energy Steward', 'Solar lamp'],
  ['gh-jhs2-science-magnetism-force-machines', 'The Magnetism and Motion Defender', '10 kg'],
  ['gh-jhs1-science-energy-forms', 'The Energy Form Explorer', 'Gravitational potential'],
  ['gh-jhs1-science-crop-production', 'The Crop Care Strategist', 'Cassava'],
  ['gh-jhs1-science-animal-production', 'The Animal Welfare Keeper', 'Chicken'],
  ['gh-jhs1-science-farming-systems', 'The Farming Systems Strategist', 'Organic farming'],
  ['gh-jhs1-science-agricultural-tools', 'The Farm Tool Engineer', 'Move a harvest load'],
  ['gh-jhs2-science-farming-systems', 'The Farming Systems Strategist', 'Land rotation'],
  ['gh-jhs2-science-seed-beds', 'The Seed-Bed Design Strategist', 'Ridge or mound'],
  ['gh-jhs2-science-animal-feed-water', 'The Animal Production Care Planner', 'Clean water'],
  ['gh-jhs2-science-teeth-dental-health', 'The Dental Health Guardian', 'Enamel'],
  ['gh-jhs2-science-agricultural-tools', 'The Farm Tool Engineer', 'Watering can'],
  ['gh-jhs2-science-waste-management', 'The Waste-Wise Community Guardian', 'Used battery'],
  ['gh-jhs2-science-human-health', 'The Community Health Defender', 'Respiratory particles'],
  ['gh-jhs2-science-science-industry', 'The Science and Innovation Builder', 'Safe water'],
  ['gh-jhs2-science-climate-green-economy', 'The Climate Action Strategist', 'Adaptation'],
  ['gh-jhs2-science-soils-plants', 'The Soil and Plant Investigator', 'Loam soil'],
  ['gh-jhs2-science-rocks-soil-formation', 'The Rock and Soil Origins Explorer', 'Metamorphic']
];
for (const [id, title, control] of cases) {
  const Scene = MOTION_SCENES[id];
  assert.ok(Scene, `${id} has a motion scene`);
  const html = renderToStaticMarkup(React.createElement(Scene));
  assert.ok(html.includes(title), `${id} title`);
  assert.ok(html.includes(control), `${id} control`);
  assert.ok(html.includes('data-testid="ghana-science-visual"'), `${id} uses the shared frame`);
  assert.ok(html.includes('aria-live="polite"') && html.includes('aria-pressed='), `${id} is accessible`);
  assert.ok(html.includes('Pause'), `${id} has a pause control`);
}
console.log('Motion scenes: all registered scenes render in the shared frame.');
