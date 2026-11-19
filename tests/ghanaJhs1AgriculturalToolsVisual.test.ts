import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1ForcesEnergyVisual } from '../src/components/GhanaJhs1ForcesEnergyVisual';

const english = renderToStaticMarkup(React.createElement(GhanaJhs1ForcesEnergyVisual, {
  missionId: 'gh-jhs1-science-agricultural-tools',
  lang: 'en'
}));
for (const text of [
  'The Farm Tool Engineer',
  'Loosen soil',
  'Wheelbarrow',
  'second-class lever',
  'Farm safety check',
  'ghana-science-visual',
  'aria-live="polite"'
]) assert.ok(english.includes(text), `Agricultural Tools visual includes ${text}`);
assert.ok(english.includes('type="checkbox"'), 'Safety checklist renders accessible checkboxes');

const italian = renderToStaticMarkup(React.createElement(GhanaJhs1ForcesEnergyVisual, {
  missionId: 'gh-jhs1-science-agricultural-tools',
  lang: 'it'
}));
for (const text of ['L’ingegnere degli attrezzi agricoli', 'Zappa', 'Carriola', 'Uso sicuro']) {
  assert.ok(italian.includes(text), `Italian Agricultural Tools visual includes ${text}`);
}
console.log('ghanaJhs1AgriculturalToolsVisual.test.ts ok! Agricultural Tools visual renders bilingual task, tool, simple-machine and safety content.');
