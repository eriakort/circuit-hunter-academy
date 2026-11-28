import { MISSIONS, ARCS } from '../src/data/gameData';
import { translateUi } from '../src/data/uiTranslations';
import { L } from '../src/helpers';

const LANGS = ['pt', 'es', 'fr', 'de'] as const;

// Collect every [English, Italian] pair used by Science missions.
const pairs = new Map<string, string>();
const walk = (x: unknown): void => {
  if (Array.isArray(x)) {
    if (x.length === 2 && typeof x[0] === 'string' && typeof x[1] === 'string') {
      if (x[0] !== x[1]) pairs.set(x[0], x[1]);
      return;
    }
    x.forEach(walk);
  } else if (x && typeof x === 'object') Object.values(x as object).forEach(walk);
};
(MISSIONS as any[]).filter(m => ARCS[m.arc]?.subject === 'science').forEach(walk);
if (pairs.size < 1500) throw new Error(`expected the Grade 5 science text, found only ${pairs.size} strings`);

// Structure of a snippet: block tags in order, and balanced inline tags.
const blockSeq = (s: string) => (s.match(/<\/?p>|<br\s*\/?>|<\/?ul>|<\/?li>/g) ?? []).join('');
const balanced = (s: string) => {
  for (const t of ['b', 'i']) {
    const open = (s.match(new RegExp(`<${t}>`, 'g')) ?? []).length;
    const close = (s.match(new RegExp(`</${t}>`, 'g')) ?? []).length;
    if (open !== close) return false;
  }
  return true;
};

const problems: string[] = [];
for (const [en] of pairs) {
  for (const lang of LANGS) {
    const tr = translateUi(en, lang);
    if (!tr || !tr.trim()) { problems.push(`missing ${lang}: ${en.slice(0, 60)}`); continue; }
    if (blockSeq(tr) !== blockSeq(en)) problems.push(`block tags differ (${lang}): ${en.slice(0, 60)}`);
    if (!balanced(tr)) problems.push(`unbalanced b/i (${lang}): ${en.slice(0, 60)}`);
    // Longer sentences must not come back untranslated.
    if (tr === en && /\p{L}/u.test(en) && en.length > 14) problems.push(`untranslated (${lang}): ${en.slice(0, 60)}`);
  }
}
if (problems.length) throw new Error(`Science lesson text problems (${problems.length}):\n${problems.slice(0, 25).join('\n')}`);

// L(): own language for PT/ES/FR/DE, Italian for Italian, English for English.
const sample: [string, string] = ['Gravity, mass, weight and orbital motion', pairs.get('Gravity, mass, weight and orbital motion') ?? ''];
if (L(sample, 'en') !== sample[0]) throw new Error('en');
if (L(sample, 'it') !== sample[1]) throw new Error('it');
if (L(sample, 'pt') !== 'Gravidade, massa, peso e movimento orbital') throw new Error('pt');
if (L(sample, 'de') !== 'Schwerkraft, Masse, Gewicht und Bahnbewegung') throw new Error('de');
console.log(`Science lesson text checked: ${pairs.size} strings x ${LANGS.length} languages`);
