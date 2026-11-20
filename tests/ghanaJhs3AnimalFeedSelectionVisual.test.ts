import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3AnimalFeedSelectionVisual } from '../src/components/GhanaJhs3AnimalFeedSelectionVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3AnimalFeedSelectionVisual));
assert.ok(html.includes('The Livestock Nutrition Strategist'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Cattle', 'Sheep and goats', 'Poultry', 'Pigs', 'Farmed fish', 'Ruminant', 'roughage', 'Concentrates', 'Young animal', 'Growing animal', 'Adult maintenance', 'Production or breeding', 'grass', 'hay', 'silage', 'protein', 'fresh, clean water', 'mould', 'feeding decision']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla|mangime|alimento|nutrizione|animali domestici)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 animal feed selection visual renders accessible English-only feed matching guidance.');
