import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs3HumanHealthVisual } from '../src/components/GhanaJhs3HumanHealthVisual';

const html = renderToStaticMarkup(React.createElement(GhanaJhs3HumanHealthVisual));
assert.ok(html.includes('The Community Health Detective Lab'));
assert.ok(html.includes('aria-live="polite"'));
assert.ok(html.includes('aria-pressed='));
for (const term of [
  'Classify the condition', 'Communicable conditions',
  'Non-communicable diseases (NCDs)', 'malaria', 'ringworm',
  'do not spread directly', 'Chain of infection', 'Germ',
  'Source', 'Route', 'Entry', 'Prevention and response',
  'health risk factors', 'clean air and water', 'social factors',
  'qualified healthcare professional', 'Do not diagnose',
  'Avoid blaming or labelling people who are ill'
]) {
  assert.ok(html.toLowerCase().includes(term.toLowerCase()), 'includes ' + term);
}
assert.ok(!html.includes('Rifiuti'), 'contains no Italian interface text');
console.log('Basic 9 human health visual renders an accessible English-only disease classification and prevention lab.');
