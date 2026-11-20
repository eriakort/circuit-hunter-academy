import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3IndustryVisual } from '../src/components/GhanaJhs3IndustryVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3IndustryVisual));
assert.ok(html.includes('The Ghana Industry Innovation Studio'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Explore a production process', 'Food processing', 'Textiles and weaving',
  'Pottery and ceramics', 'Soap production', 'scientific principles',
  'Saponification', 'fermentation', 'Compare indigenous and modern methods',
  'traditional weaving', 'shea butter processing', 'powered machinery',
  'Follow the production chain', 'raw materials', 'Transform',
  'Check quality', 'Evaluate an industry responsibly', 'worker skills',
  'energy and water use', 'environmental effects', 'Ghana'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!html.includes('Rifiuti'), 'contains no Italian interface text');
console.log('Basic 9 industry visual renders an accessible English-only production and innovation studio.');
