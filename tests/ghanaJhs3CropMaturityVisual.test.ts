import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3CropMaturityVisual } from '../src/components/GhanaJhs3CropMaturityVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3CropMaturityVisual));
assert.ok(html.includes('The Crop Maturity Investigator'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Maize', 'Beans', 'Leafy vegetables', 'Young / green', 'Mature grain', 'Dry seed', 'green maize', 'fresh green pods', 'Bed A', 'Bed B', 'plant height', 'flowering', 'seed filling', 'soil', 'sunlight', 'repeated observations']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|composto|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|legami|cellule|foglia|radice|sangue|muscolo|nervo|uovo|larva|farfalla)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 crop maturity visual renders an accessible English-only crop and harvest-stage explorer.');
