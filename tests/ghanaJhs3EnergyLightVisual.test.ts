import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3EnergyLightVisual } from '../src/components/GhanaJhs3EnergyLightVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3EnergyLightVisual));
assert.ok(html.includes('The Energy Conservation Guardian'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Switch off lights', '500 W appliance', '1,000 W appliance', '2,000 W appliance', 'Energy used: 3.00 kWh', 'pinhole camera', 'inverted', 'umbra', 'penumbra', 'Refraction', 'opaque object', 'torch', 'Sun', 'laser']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla|mangime|alimento|nutrizione|animali domestici)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 energy and light visual renders accessible English-only energy and optics learning.');
