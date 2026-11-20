import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3EnergyConversionVisual } from '../src/components/GhanaJhs3EnergyConversionVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3EnergyConversionVisual));
assert.ok(html.includes('The Energy Transformation Alchemist'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Battery and torch', 'Electric lamp', 'Electric fan', 'Solar panel', 'Hydroelectric station', 'Chemical', 'Gravitational potential', 'Kinetic energy', 'Thermal energy', 'Conversion is not destruction', '80 J useful output', '100 J input', 'Efficiency: 80.0%', 'lubricate', 'surroundings']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla|mangime|alimento|nutrizione|animali domestici)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 energy conversion visual renders accessible English-only energy learning.');
