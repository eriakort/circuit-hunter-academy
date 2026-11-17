import assert from 'node:assert/strict';
import { MISSIONS } from '../src/data/gameData';
import { getVisualHtml } from '../src/data/visuals';

// The word-origin visual must render a complete, language-consistent version.
const englishVisual = getVisualHtml('infowords', 'en');
assert.match(englishVisual, /INFORmation/);
assert.match(englishVisual, /INFORMATICS/);
assert.doesNotMatch(englishVisual, /informazione|automatica|informatica/i);

const italianVisual = getVisualHtml('infowords', 'it');
assert.match(italianVisual, /INFORmazione/);
assert.match(italianVisual, /INFORMATICA/);
assert.match(italianVisual, /informazione/i);

// The English lesson and its assessment must not explain an English term
// using Italian spelling or Italian-language word fragments.
const mission = MISSIONS.find(item => item.id === 'a1m1');
assert.ok(mission, 'The First Algorithm mission must exist');

const wordOriginScene = mission.scenes.find(scene => scene.vis === 'infowords');
assert.ok(wordOriginScene, 'The word-origin scene must exist');
const visibleEnglishScene = wordOriginScene.text[0].replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$1');
assert.doesNotMatch(visibleEnglishScene, /Italian word|informazione|informatica/i);

const wordOriginQuestion = mission.quiz.find(question =>
  question.q[0].toLowerCase().includes('informatics')
);
assert.ok(wordOriginQuestion, 'The English word-origin question must use “informatics”');
assert.doesNotMatch(wordOriginQuestion.q[0], /informatica|informazione/i);
assert.doesNotMatch(wordOriginQuestion.why[0], /informatica|informazione/i);

console.log('visualLanguagePolicy.test.ts ok! English and Italian visuals and lesson text remain separated.');
