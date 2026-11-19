import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs2DiversityVisual } from '../src/components/GhanaJhs2DiversityVisual';

const missions=[
 {id:'gh-jhs2-science-mixture-separation',title:'The Mixture Separation Engineer',italian:'L’ingegnere della separazione dei miscugli',terms:['Salt water','Filtration','Colloid']},
 {id:'gh-jhs2-science-atomic-structure',title:'The Atomic Structure Navigator',italian:'Il navigatore della struttura atomica',terms:['Atomic number','Neutrons','Sodium']},
 {id:'gh-jhs2-science-cell-types',title:'The Cell Type Investigator',italian:'L’investigatore dei tipi cellulari',terms:['Prokaryotic cell','Plant eukaryotic cell','membrane-bound nucleus']}
];
for(const mission of missions){
 const en=renderToStaticMarkup(React.createElement(GhanaJhs2DiversityVisual,{missionId:mission.id,lang:'en'}));
 assert.ok(en.includes(mission.title),mission.id+' renders English title');
 assert.ok(en.includes('ghana-science-visual'),mission.id+' uses shared visual frame');
 assert.ok(en.includes('aria-live="polite"'),mission.id+' announces readout updates');
 for(const term of mission.terms) assert.ok(en.includes(term),mission.id+' includes '+term);
 const it=renderToStaticMarkup(React.createElement(GhanaJhs2DiversityVisual,{missionId:mission.id,lang:'it'}));
 assert.ok(it.includes(mission.italian),mission.id+' renders Italian title');
}
console.log('Basic 8 Diversity of Matter visuals render bilingual, accessible instructional content.');
