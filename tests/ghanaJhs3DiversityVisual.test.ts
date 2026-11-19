import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3DiversityVisual } from '../src/components/GhanaJhs3DiversityVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3DiversityVisual, {
  missionId: 'gh-jhs3-science-binary-compounds'
}));

assert.ok(html.includes('The Binary Compound Chemist'), 'renders the mission visual title');
assert.ok(html.includes('ghana-science-visual'), 'uses the shared Ghana science visual frame');
assert.ok(html.includes('aria-live="polite"'), 'announces selected compound details');
assert.ok(html.includes('aria-pressed='), 'exposes selected compound controls accessibly');
for (const term of ['Water', 'Carbon dioxide', 'Sodium chloride', 'Magnesium oxide', 'H₂O', 'CO₂', 'NaCl', 'MgO', 'Hydrogen', 'Oxygen', 'ionic lattice']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno)\b/i.test(html), 'contains no Italian interface text');
assert.equal(GhanaJhs3DiversityVisual({ missionId: 'unknown-mission' }), null, 'unknown missions do not render a visual');

console.log('Basic 9 binary compound visual renders English-only, accessible chemistry content.');
