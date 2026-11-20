import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3AgriculturalToolsVisual } from '../src/components/GhanaJhs3AgriculturalToolsVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3AgriculturalToolsVisual));
assert.ok(html.includes('The Agricultural Tool Designer'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Hand hoe', 'Hand trowel', 'Hand rake', 'Loosen soil and remove weeds', 'Strong, suitable metal blade', 'Smooth, durable wooden handle', 'Secure, tight handle joint', 'Identify the farm task', 'Sketch and choose materials', 'Measure and prepare parts', 'Join and inspect', 'Test and improve', 'strength', 'durability', 'availability', 'cost', 'repairability', 'bolts', 'rivets', 'screws', 'adult supervision', 'protective equipment', 'sharp burrs', 'splinters', 'Safety review']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza)\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 agricultural tools visual renders accessible English-only design and safety learning.');
