import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3ManureMaterialsVisual } from '../src/components/GhanaJhs3ManureMaterialsVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3ManureMaterialsVisual));
assert.ok(html.includes('The Manure Materials Sorting Lab'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Suitable plant materials', 'Animal manure materials', 'Remove from compost',
  'Specialist treatment only', 'Dry leaves', 'Crop residues', 'Grass cuttings',
  'Vegetable peels', 'Well-managed cattle dung', 'Goat and sheep droppings',
  'Poultry litter', 'Plastic packaging', 'Broken glass', 'Metal cans',
  'Human excreta', 'Animal carcasses', 'soil structure', 'nutrient cycling',
  'moisture and air', 'protective equipment', 'drinking water'
]) assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene|ecosistema|catena alimentare|erba|cavalletta|lucertola|falco|letame|compostaggio|rifiuti)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 manure materials visual renders an accessible English-only material sorting lab.');
