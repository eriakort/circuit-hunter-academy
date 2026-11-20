import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3EcosystemBalanceVisual } from '../src/components/GhanaJhs3EcosystemBalanceVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3EcosystemBalanceVisual));
assert.ok(html.includes('The Ecosystem Balance Explorer'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'food-chain pathway', 'SUN', 'Grass', 'Insect', 'Lizard', 'Hawk',
  'Producer', 'primary consumer', 'secondary consumer', 'Decomposers',
  'Fewer grass plants', 'Fewer grasshoppers', 'Fewer lizards',
  'grasshopper', 'drought', 'Biotic (living)', 'Abiotic (non-living)',
  'Habitat', 'Ecosystem', 'fungi and bacteria', 'food webs',
  'sustainable farming', 'pesticide'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene|ecosistema|catena alimentare|erba|cavalletta|lucertola|falco)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 ecosystem balance visual renders an accessible English-only food web and disturbance explorer.');
