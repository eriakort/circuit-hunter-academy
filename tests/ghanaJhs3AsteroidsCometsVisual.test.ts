import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3AsteroidsCometsVisual } from '../src/components/GhanaJhs3AsteroidsCometsVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3AsteroidsCometsVisual));
assert.ok(html.includes('The Asteroid and Comet Pathfinder'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Asteroid', 'Comet', 'Rock and metal', 'Ice, dust and rocky material',
  'main asteroid belt', 'Mars and Jupiter', 'highly elongated orbits',
  'Solar heating', 'coma', 'dust and ion tails', 'gravity',
  'away from the Sun', 'not drawn to scale'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|calore|forza|pressione|acqua|ossigeno|idrogeno|acido|acidi|sale|sali|legame|cellule|foglia|radice|sangue|muscolo|nervo|larva|farfalla|mangime|alimento|nutrizione|attrezzo|zappa|rastrello|sicurezza|cuore|polmoni|arterie|vene|asteroide|cometa|sole|orbita|coda|ghiaccio|polvere)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 asteroid and comet visual renders accessible English-only Solar System learning.');
