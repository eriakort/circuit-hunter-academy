import { ITALIAN_QUINTA_UNITS, ITALIAN_QUINTA_CODEX } from '../src/data/italianQuintaData';
import { translateUi } from '../src/data/uiTranslations';

const LANGS = ['pt', 'es', 'fr', 'de'];
// Structural tags must match; <b>/<i> emphasis may be split differently (German separable verbs) but must stay balanced.
const tags = (s: string) => (s.match(/<\/?[a-z]+>/gi) || []).map(t => t.toLowerCase()).filter(t => !/^<\/?[bi]>$/.test(t)).sort().join('');
const balanced = (s: string) => ['b', 'i'].every(t => (s.match(new RegExp(`<${t}>`, 'g')) || []).length === (s.match(new RegExp(`</${t}>`, 'g')) || []).length);
const seen = new Set<string>();
const problems: string[] = [];

const check = (en: string) => {
  if (seen.has(en)) return;
  seen.add(en);
  for (const l of LANGS) {
    const t = translateUi(en, l);
    if (!t) { problems.push(`missing ${l}: ${en.slice(0, 70)}`); continue; }
    if (tags(t) !== tags(en) || !balanced(t)) problems.push(`tag mismatch ${l}: ${en.slice(0, 70)}`);
  }
};

const walk = (x: unknown) => {
  if (Array.isArray(x)) {
    if (x.length === 2 && typeof x[0] === 'string' && typeof x[1] === 'string') {
      if (x[0] !== x[1]) check(x[0]);
      return;
    }
    x.forEach(walk);
  } else if (x && typeof x === 'object') Object.values(x as object).forEach(walk);
};

walk(ITALIAN_QUINTA_UNITS);
for (const c of ITALIAN_QUINTA_CODEX as any[]) { check(c[1]); check(c[3]); }

if (problems.length) throw new Error(`Grade 5 translation gaps (${problems.length}):\n` + problems.slice(0, 30).join('\n'));
console.log(`Grade 5 strings checked: ${seen.size}`);

// Grade 5 tables and diagrams must not show English in the support-language views.
import { getItalianQuintaVisual, ITALIAN_QUINTA_VISUAL_KEYS } from '../src/data/italianQuintaVisuals';
for (const key of ITALIAN_QUINTA_VISUAL_KEYS) {
  for (const l of LANGS) {
    const html = getItalianQuintaVisual(key, l as any) ?? '';
    const text = html.replace(/<[^>]+>/g, ' ');
    for (const word of ['SIMPLE TENSES', 'COMPOUND', '(indicative)', '(present)', '(present (io))', 'stressed object', 'Articles', 'Personal pronouns', 'past participle']) {
      if (text.includes(word)) throw new Error(`${key} [${l}] still shows English: ${word}`);
    }
  }
}
