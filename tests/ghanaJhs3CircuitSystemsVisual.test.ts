import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3CircuitSystemsVisual } from '../src/components/GhanaJhs3CircuitSystemsVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3CircuitSystemsVisual));
assert.ok(html.includes('The Circuit Systems Engineer'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of ['Series circuit', 'Parallel circuit', 'One complete path', 'Separate branches', 'Ohm’s law', 'Current: 3.00 A', 'Resistor', 'Diode', 'Light-emitting diode (LED)', 'Capacitor', 'Forward direction', 'Reverse direction', 'mains electricity', '12 V']) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!/\\b(energia|elettrica|corrente|resistenza|tensione|circuito|condensatore|diodo|resistore|lampadina|parallelo|serie|luce|acqua|forza|pressione)\\b/i.test(html), 'contains no Italian interface text');
console.log('Basic 9 circuit systems visual renders accessible English-only circuit learning.');
