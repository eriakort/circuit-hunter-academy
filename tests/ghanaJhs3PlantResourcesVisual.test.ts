import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3PlantResourcesVisual } from '../src/components/GhanaJhs3PlantResourcesVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3PlantResourcesVisual));
assert.ok(html.includes('The Plant Resources Explorer'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'parts of a plant', 'Plant diagram', 'Flower', 'Leaf', 'Fruit', 'Stem', 'Roots',
  'anchorage and absorption', 'support and transport', 'photosynthesis', 'reproduction',
  'seed protection and dispersal', 'Match each plant part to its uses',
  'Agricultural uses', 'Other uses', 'Responsible use', 'cassava', 'yam',
  'sugarcane', 'bamboo', 'fodder', 'timber', 'compost',
  'Protect plant resources', 'biodiversity', 'deforestation', 'natural plant product'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene|ecosistema|catena alimentare|erba|cavalletta|lucertola|falco)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 plant resources visual renders an accessible English-only plant diagram and use explorer.');
