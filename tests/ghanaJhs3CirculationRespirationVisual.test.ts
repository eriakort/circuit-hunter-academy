import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3CirculationRespirationVisual } from '../src/components/GhanaJhs3CirculationRespirationVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3CirculationRespirationVisual));
assert.ok(html.includes('The Circulation and Respiration Navigator'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Body tissues', 'Lungs and alveoli', 'Heart chambers',
  'oxygen-rich', 'oxygen-poor', 'Arteries carry blood away',
  'Plasma', 'Red blood cells', 'White blood cells', 'Platelets',
  'haemoglobin', 'pathogens', 'clot', 'capillaries',
  'Breathing (ventilation)', 'Gas exchange', 'Cellular respiration',
  'glucose', 'carbon dioxide', 'Valves', 'four parts of blood'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 circulation and respiration visual renders accessible English-only blood and oxygen pathway learning.');
