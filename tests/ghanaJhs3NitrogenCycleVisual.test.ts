import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3NitrogenCycleVisual } from '../src/components/GhanaJhs3NitrogenCycleVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3NitrogenCycleVisual));
assert.ok(html.includes('The Nitrogen Cycle Guardian'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Nitrogen fixation', 'Nitrification', 'Assimilation', 'Ammonification', 'Denitrification', 'nitrogen gas (N₂)', 'root nodules', 'beans and groundnuts', 'nitrate leaching', 'decomposers']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 nitrogen cycle visual renders an accessible English-only cycle explorer.');
