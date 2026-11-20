import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3CompostingVisual } from '../src/components/GhanaJhs3CompostingVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3CompostingVisual));
assert.ok(html.includes('The Composting Field Lab'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Choose and sort', 'Build balanced layers', 'Add moisture and air', 'Allow it to cure',
  'clean plant residues', 'livestock manure', 'dry brown materials', 'wrung-out sponge',
  'decomposer organisms', 'oxygen', 'dark, crumbly and earthy-smelling',
  'dry and dusty', 'soggy and smells bad', 'Add water gradually',
  'Add dry material and turn', 'gloves', 'drinking-water sources',
  'human excreta', 'animal carcasses', 'regulated treatment', 'food crops'
]) assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene|ecosistema|catena alimentare|erba|cavalletta|lucertola|falco|letame|compostaggio|rifiuti|umidità|terreno|decompositori)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 composting visual renders an accessible English-only composting field lab.');
