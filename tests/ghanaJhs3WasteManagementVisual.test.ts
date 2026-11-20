import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3WasteManagementVisual } from '../src/components/GhanaJhs3WasteManagementVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3WasteManagementVisual));
assert.ok(html.includes('The Community Waste Solutions Lab'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Sort the waste stream', 'Organic waste', 'Recyclable materials',
  'Hazardous or special waste', 'Residual waste', 'Fruit peels',
  'Batteries', 'electronic waste', 'approved specialist collection',
  'composting process', 'waste hierarchy', 'Prevent and reduce',
  'Reuse and repair', 'Recycle and compost', 'Treat and dispose',
  'school waste audit', 'Observe', 'Measure', 'Analyse', 'Improve',
  'community participation', 'collection reliability', 'blocked drains'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!html.includes('Rifiuti'), 'contains no Italian interface text');
console.log('Basic 9 waste management visual renders an accessible English-only sorting and school waste audit lab.');
