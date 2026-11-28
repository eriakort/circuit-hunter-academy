import { MISSIONS, ARCS } from '../src/data/gameData';
import { getVisualHtml } from '../src/data/visuals';
import { supportText, usesDecimalComma } from '../src/data/visualI18n';

const SUBJECTS = new Set(['phys', 'math', 'math5', 'math10', 'math11']);
const text = (h: string) => h.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

const keys = new Map<string, string>();
for (const m of MISSIONS as any[]) {
  if (!SUBJECTS.has(ARCS[m.arc]?.subject)) continue;
  for (const sc of m.scenes ?? []) if (sc.vis && !keys.has(sc.vis)) keys.set(sc.vis, m.id);
}
if (keys.size < 50) throw new Error(`expected the Physics and Maths diagrams, found ${keys.size}`);

for (const [key, mission] of keys) {
  const en = text(getVisualHtml(key, 'en', mission));
  const it = text(getVisualHtml(key, 'it', mission));
  if (!en || !it) continue;
  for (const lang of ['pt', 'es', 'fr', 'de'] as const) {
    const t = text(getVisualHtml(key, lang, mission));
    if (en !== it && (t === en || t === it)) throw new Error(`${key} (${lang}) is not translated`);
    if (/undefined|\$\{/.test(t)) throw new Error(`${key} (${lang}) has broken text`);
  }
}

// supportText: own language for PT/ES/FR/DE, Italian for Italian, English for English; missing falls back to Italian.
if (supportText('Density', 'Densità', 'en') !== 'Density') throw new Error('en');
if (supportText('Density', 'Densità', 'it') !== 'Densità') throw new Error('it');
if (supportText('Density', 'Densità', 'pt') !== 'Densidade') throw new Error('pt');
if (supportText('Density', 'Densità', 'de') !== 'Dichte') throw new Error('de');
if (supportText('A phrase nobody translated', 'Una frase non tradotta', 'fr') !== 'Una frase non tradotta') throw new Error('fallback must be Italian');
if (usesDecimalComma('en') || !usesDecimalComma('it') || !usesDecimalComma('pt') || !usesDecimalComma('de')) throw new Error('decimal comma');

// The angle labels use their own keys so "right" (angle) never overrides "right" (text alignment).
if (supportText('right angle', 'retto', 'pt') !== 'reto') throw new Error('right angle');
console.log(`Physics and Maths diagrams checked: ${keys.size} x 4 languages`);
