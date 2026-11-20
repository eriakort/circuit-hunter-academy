import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3AnimalFeedPreparationVisual } from '../src/components/GhanaJhs3AnimalFeedPreparationVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3AnimalFeedPreparationVisual));
assert.ok(html.includes('The Animal Feed Formulator'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Poultry', 'Cattle, sheep and goats', 'Pigs', 'Farmed fish', 'Maize', 'Soybean meal', 'protein', 'energy', 'vitamins', 'Select', 'Inspect', 'Measure', 'Prepare and mix', 'Store safely', 'mouldy', 'chicks', 'clean equipment', 'dry']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla|mangime|alimento|nutrizione|animali domestici)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 animal feed preparation visual renders an accessible English-only animal feed and preparation explorer.');
