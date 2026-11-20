import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3EnergyConversionVisual } from '../src/components/GhanaJhs3EnergyConversionVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3EnergyConversionVisual));
assert.ok(html.includes('The Energy Transformation Alchemist'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Battery', 'Electric lamp', 'Fan', 'Solar panel', 'Hydroelectric station', 'Chemical energy', 'Electrical energy', 'Gravitational potential', 'Kinetic', 'Conversion is not conservation', 'Conservation of energy', 'Efficiency: 80%', '80 J', '100 J', '20 J', 'thermal energy', 'sound']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla|mangime|alimento|nutrizione|animali domestici)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 energy conversion visual renders accessible English-only energy learning.');
