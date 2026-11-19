import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1HumansEnvironmentVisual } from '../src/components/GhanaJhs1HumansEnvironmentVisual';

const missions = [
  { id: 'gh-jhs1-science-waste-management', title: 'The Waste-Wise Community Guardian', italian: 'Il custode della comunità senza rifiuti', terms: ['Compost', 'Used battery', 'Reduce'] },
  { id: 'gh-jhs1-science-human-health', title: 'The Healthy Body Protector', italian: 'Il protettore del corpo sano', terms: ['Vitamin A', 'Night blindness', 'Respiratory particles'] },
  { id: 'gh-jhs1-science-science-industry', title: 'The Science Career Pathfinder', italian: 'Il percorso delle professioni scientifiche', terms: ['Agricultural scientist', 'Medical laboratory scientist', 'Community impact'] },
  { id: 'gh-jhs1-science-climate-green-economy', title: 'The Green Future Strategist', italian: 'Lo stratega del futuro verde', terms: ['Natural greenhouse effect', 'Solar power', 'Energy efficiency'] },
  { id: 'gh-jhs1-science-understanding-environment', title: 'The Habitat and Adaptation Ranger', italian: 'Il ranger degli habitat e degli adattamenti', terms: ['Moist forest', 'Mutualism', 'Parasitism'] }
];

for (const mission of missions) {
  const english = renderToStaticMarkup(React.createElement(GhanaJhs1HumansEnvironmentVisual, {
    missionId: mission.id, lang: 'en'
  }));
  assert.ok(english.includes(mission.title), `${mission.id} renders its English title`);
  assert.ok(english.includes('ghana-science-visual'), `${mission.id} uses the shared visual frame`);
  assert.ok(english.includes('aria-live="polite"'), `${mission.id} has an announced interactive readout`);
  for (const term of mission.terms) assert.ok(english.includes(term), `${mission.id} includes ${term}`);

  const italian = renderToStaticMarkup(React.createElement(GhanaJhs1HumansEnvironmentVisual, {
    missionId: mission.id, lang: 'it'
  }));
  assert.ok(italian.includes(mission.italian), `${mission.id} renders its Italian title`);
}
console.log('ghanaJhs1HumansEnvironmentVisual.test.ts ok! Four Basic 7 Humans and Environment visuals render bilingual, accessible instructional content.');
