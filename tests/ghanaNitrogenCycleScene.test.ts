import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { NitrogenCycleScene, NITROGEN_STEPS } from '../src/components/scienceMotion/NitrogenCycleScene';

const html = renderToStaticMarkup(React.createElement(NitrogenCycleScene));
assert.ok(html.includes('The Nitrogen Cycle Guardian'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
const all = html + NITROGEN_STEPS.map(step => `${step.label} ${step.caption}`).join(' ');
for (const term of ['Nitrogen fixation', 'Nitrification', 'Assimilation', 'Ammonification', 'Denitrification', 'nitrogen gas (N₂)', 'root nodules', 'beans and groundnuts', 'nitrate leaching', 'decomposers']) {
  assert.ok(all.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.equal(NITROGEN_STEPS.length, 5);
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|composto|acqua|ossigeno|idrogeno|acido|sale|legame|cellule|foglia|radice|sangue|muscolo|nervo)\b/i.test(all), 'contains no Italian interface text');
console.log('Nitrogen cycle scene renders an accessible English-only step explorer.');
