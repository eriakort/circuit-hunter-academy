import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3ForceMotionVisual } from '../src/components/GhanaJhs3ForceMotionVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3ForceMotionVisual));
assert.ok(html.includes('The Force and Motion Strategist'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Pressure = force ÷ area', 'Sharp knife', 'Flat shoe', 'Wide tyre', '200,000 Pa', '20,000 Pa', '10,000 Pa', 'Balanced forces', 'Unbalanced forces', 'Resultant force = 0 N', 'F = ma', 'Resultant force: 10 N', "Newton", "First Law", "Second Law", "Third Law", 'Inertia', 'different objects', 'Balloon rocket', 'escaping air', 'forwards', 'backwards', 'friction', 'air resistance', 'pascals']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 force and motion visual renders accessible English-only pressure and Newton law learning.');
