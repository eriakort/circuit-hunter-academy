import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3ClimateActionVisual } from '../src/components/GhanaJhs3ClimateActionVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3ClimateActionVisual));
assert.ok(html.includes('The Ghana Climate Action Observatory'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Trace the greenhouse effect', 'Incoming sunlight', 'Outgoing heat',
  'Greenhouse gases', 'carbon dioxide and methane', 'infrared radiation',
  'Separate climate drivers', 'Natural influences', 'Human influences',
  'Weather and climate', 'Investigate a climate action', 'Protect and restore forests',
  'Use cleaner energy efficiently', 'climate-resilient communities',
  'Mitigation', 'Adaptation', 'Evaluate a green-economy initiative',
  'well-being and livelihoods', 'renewable energy', 'Ghana', 'trustworthy measurements'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!html.includes('Rifiuti'), 'contains no Italian interface text');
console.log('Basic 9 climate visual renders an accessible English-only climate observatory.');
