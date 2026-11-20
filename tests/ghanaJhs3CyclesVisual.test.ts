import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3CyclesVisual } from '../src/components/GhanaJhs3CyclesVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3CyclesVisual, {
  missionId: 'gh-jhs3-science-nitrogen-cycle'
}));
assert.ok(html.includes('The Nitrogen Cycle Guardian'), 'renders the Basic 9 nitrogen cycle visual');
assert.ok(html.includes('aria-live="polite"'), 'announces selected nitrogen process details');
assert.ok(html.includes('aria-pressed='), 'exposes nitrogen process choices accessibly');
for (const term of ['Nitrogen fixation', 'Nitrification', 'Assimilation', 'Ammonification', 'Denitrification', 'N₂', 'nitrates', 'ammonium', 'beans and groundnuts', 'soil bacteria', 'soil fertility']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(azoto|fissazione|nitrificazione|assimilazione|ammonificazione|denitrificazione|terreno|piante|batteri)\\b/i.test(html), 'contains no Italian interface text');
assert.equal(GhanaJhs3CyclesVisual({ missionId: 'unknown-mission' }), null, 'unknown missions do not render a visual');
console.log('Basic 9 nitrogen cycle visual renders English-only, accessible process models.');
