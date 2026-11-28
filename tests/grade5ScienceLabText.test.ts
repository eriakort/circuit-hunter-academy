import { readFileSync } from 'node:fs';
import { LAB_TEXT, labText } from '../src/data/grade5ScienceLabText';
import { pick } from '../src/components/chemLabs/chemLabShared';

const LANGS = ['pt', 'es', 'fr', 'de'] as const;
const FILES = ['ScienceLab', 'Grade5HumanBodyLab', 'Grade5ScienceReviewLab', 'Grade5EcologyLab'];
const Q = "'((?:[^'\\\\]|\\\\.)*)'";
const unescape = (s: string) => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');

// Every row has four non-empty translations.
for (const [en, row] of Object.entries(LAB_TEXT)) {
  if (row.length !== 4 || row.some(t => !t.trim())) throw new Error(`bad lab translation row: ${en}`);
}

// Every English/Italian string pair written in the lab sources has a translation.
const patterns = [
  new RegExp(`(?:pick\\(\\s*lang\\s*,\\s*|\\btext\\(\\s*|\\banalogy\\(\\s*)${Q}\\s*,\\s*${Q}`, 'g'),
  new RegExp(`\\[${Q},\\s*${Q}(?:,\\s*${Q})?\\]`, 'g'),
  new RegExp(`\\ben=${Q}\\s+it=${Q}`, 'g')
];
const missing = new Set<string>();
let checked = 0;
for (const file of FILES) {
  const src = readFileSync(`src/components/${file}.tsx`, 'utf8');
  for (const re of patterns) {
    for (const m of src.matchAll(re)) {
      const en = unescape(m[1]);
      if (!/\p{L}{2}/u.test(en)) continue; // numbers and symbols need no translation
      checked++;
      if (!LANGS.every(l => labText(en, l))) missing.add(`${file}: ${en.slice(0, 70)}`);
    }
  }
}
if (missing.size) throw new Error(`Lab strings without pt/es/fr/de text (${missing.size}):\n${[...missing].slice(0, 25).join('\n')}`);

// pick(): English for English, Italian for Italian, own language for PT/ES/FR/DE, never English.
if (pick('en', 'Photosynthesis Lab', 'Laboratorio di Fotosintesi') !== 'Photosynthesis Lab') throw new Error('en');
if (pick('it', 'Photosynthesis Lab', 'Laboratorio di Fotosintesi') !== 'Laboratorio di Fotosintesi') throw new Error('it');
if (pick('pt', 'Photosynthesis Lab', 'x') !== 'Laboratório de Fotossíntese') throw new Error('pt');
if (pick('de', 'Photosynthesis Lab', 'x') !== 'Fotosynthese-Labor') throw new Error('de');
if (pick('fr', 'A string with no translation', 'Testo italiano') !== 'Testo italiano') throw new Error('fallback must be Italian');
console.log(`Lab text checked: ${checked} string uses, ${Object.keys(LAB_TEXT).length} translations`);
