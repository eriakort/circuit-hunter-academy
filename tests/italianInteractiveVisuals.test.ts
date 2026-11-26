import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { ITALIAN_LISTENING_PASSAGES, type ListeningTheme } from '../src/data/italianListening';
import { getItalianMissionVisual, getItalianListeningSceneSvg } from '../src/data/italianVisuals';
import { ItalianGrammarLab } from '../src/components/ItalianGrammarLab';
import type { Language } from '../src/types';

const LANGS: Language[] = ['en', 'it', 'pt', 'es', 'fr', 'de'];
const THEMES: ListeningTheme[] = ['everyday', 'travel', 'work'];

const italianMissions = MISSIONS.filter(m => ARCS[m.arc]?.subject === 'italian');
const cefrMissions = italianMissions.filter(m => m.id.startsWith('it_'));
const quintaMissions = italianMissions.filter(m => m.id.startsWith('itg5-'));

assert.equal(cefrMissions.length, 7, 'All 7 CEFR Italian missions are present');
assert.equal(quintaMissions.length, 43, 'All 43 Grade 5 Italian Grammar missions are present');
assert.equal(ITALIAN_LISTENING_PASSAGES.length, 9, 'All 9 Italian listening passages are present');

for (const mission of italianMissions) {
  for (const lang of ['en', 'it'] as const) {
    const html = getItalianMissionVisual(mission.id, lang);
    assert.ok(html, `${mission.id} (${lang}) returns an animated visual`);
    assert.ok(html.includes('<svg'), `${mission.id} (${lang}) includes an <svg>`);
    assert.ok(!html.includes('undefined') && !html.includes('NaN'), `${mission.id} (${lang}) avoids undefined/NaN`);
  }
}

for (const mission of quintaMissions) {
  const markup = renderToStaticMarkup(React.createElement(ItalianGrammarLab, { missionId: mission.id, lang: 'it' }));
  assert.ok(markup.includes('data-testid="italian-grammar-lab"'), `${mission.id} renders ItalianGrammarLab`);
  assert.ok(markup.includes('aria-live="polite"'), `${mission.id} includes aria-live="polite"`);
  assert.ok(!markup.includes('undefined') && !markup.includes('NaN'), `${mission.id} lab avoids undefined/NaN`);
}

for (const lang of LANGS) {
  for (const theme of THEMES) {
    const idleSvg = getItalianListeningSceneSvg(theme, false, lang);
    const activeSvg = getItalianListeningSceneSvg(theme, true, lang);
    assert.ok(idleSvg.includes('<svg') && !idleSvg.includes('undefined'), `${theme} idle (${lang}) renders valid SVG`);
    assert.ok(activeSvg.includes('<svg') && activeSvg.includes('<animate'), `${theme} playing (${lang}) renders animated SVG`);
  }
}

console.log(
  `italianInteractiveVisuals.test.ts ok! Verified visuals & labs for ${cefrMissions.length} CEFR + ${quintaMissions.length} Grade 5 Italian missions and ${ITALIAN_LISTENING_PASSAGES.length} listening passages across ${LANGS.length} languages.`
);
