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


const phHtml = renderToStaticMarkup(React.createElement(GhanaJhs3DiversityVisual, {
  missionId: 'gh-jhs3-science-acids-bases-salts'
}));
assert.ok(phHtml.includes('The pH Scale Guardian'), 'renders the acids, bases and salts visual');
assert.ok(phHtml.includes('aria-live="polite"'), 'announces the selected solution details');
assert.ok(phHtml.includes('aria-pressed='), 'exposes solution choices accessibly');
for (const term of ['Lemon juice', 'Vinegar', 'Pure water', 'Baking soda solution', 'Soapy water', 'Acidic', 'Neutral', 'Alkaline', 'Blue litmus turns red', 'Red litmus turns blue', '0–6', 'Neutralisation', 'HCl + NaOH → NaCl + H₂O']) {
  assert.ok(phHtml.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali)\b/i.test(phHtml), 'contains no Italian interface text');
assert.equal(GhanaJhs3DiversityVisual({ missionId: 'unknown-mission' }), null, 'unknown missions do not render a visual');


const bondingHtml = renderToStaticMarkup(React.createElement(GhanaJhs3DiversityVisual, {
  missionId: 'gh-jhs3-science-chemical-bonding'
}));
assert.ok(bondingHtml.includes('The Chemical Bonding Architect'), 'renders the chemical bonding visual');
assert.ok(bondingHtml.includes('aria-live="polite"'), 'announces the selected bonding model');
assert.ok(bondingHtml.includes('aria-pressed='), 'exposes bonding choices accessibly');
for (const term of ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Sodium chloride', 'Water (H₂O)', 'Copper (Cu)', 'Transferred', 'Shared in pairs', 'Delocalised and mobile', 'electrostatic attraction']) {
  assert.ok(bondingHtml.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami)\b/i.test(bondingHtml), 'contains no Italian interface text');


const plantHtml = renderToStaticMarkup(React.createElement(GhanaJhs3DiversityVisual, {
  missionId: 'gh-jhs3-science-specialised-plant-cells'
}));
assert.ok(plantHtml.includes('The Plant Cell Specialist'), 'renders the specialised plant cells visual');
assert.ok(plantHtml.includes('aria-live="polite"'), 'announces selected plant cell details');
assert.ok(plantHtml.includes('aria-pressed='), 'exposes plant cell choices accessibly');
for (const term of ['Epidermal cells', 'Guard cells', 'Xylem vessels', 'Cambium cells', 'stomata', 'water and dissolved mineral ions', 'Differentiation', 'growth in thickness']) {
  assert.ok(plantHtml.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice)\\b/i.test(plantHtml), 'contains no Italian interface text');


const humanHtml = renderToStaticMarkup(React.createElement(GhanaJhs3DiversityVisual, {
  missionId: 'gh-jhs3-science-specialised-human-cells'
}));
assert.ok(humanHtml.includes('The Human Cell Function Ranger'), 'renders the specialised human cells visual');
assert.ok(humanHtml.includes('aria-live="polite"'), 'announces selected human cell details');
assert.ok(humanHtml.includes('aria-pressed='), 'exposes human cell choices accessibly');
for (const term of ['Nerve cell (neurone)', 'Red blood cell', 'Muscle cell', 'Sperm cell', 'haemoglobin', 'axon', 'mitochondria', 'tail (flagellum)', 'Differentiation', 'Cells → tissues → organs']) {
  assert.ok(humanHtml.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo)\\b/i.test(humanHtml), 'contains no Italian interface text');

console.log('Basic 9 science visuals render English-only, accessible chemistry and specialised cell models.');


