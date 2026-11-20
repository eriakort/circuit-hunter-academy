import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3GrasshopperLifeCycleVisual } from '../src/components/GhanaJhs3GrasshopperLifeCycleVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3GrasshopperLifeCycleVisual));
assert.ok(html.includes('The Grasshopper Life-Cycle Ranger'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Egg', 'Nymph', 'moulting', 'Adult', 'egg pod', 'wing buds', 'exoskeleton', 'incomplete metamorphosis', 'no pupal stage', 'Butterfly']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|farfalla)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 grasshopper life-cycle visual renders an accessible English-only stage explorer.');
