import { MISSIONS, ARCS } from '../src/data/gameData';
import { getVisualHtml } from '../src/data/visuals';
import { supportText } from '../src/data/visualI18n';

const SUBJECTS = new Set(['chem', 'chem10', 'chem11']);
const text = (h: string) => h.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

const keys = new Map<string, string>();
for (const m of MISSIONS as any[]) {
  if (!SUBJECTS.has(ARCS[m.arc]?.subject)) continue;
  for (const sc of m.scenes ?? []) if (sc.vis && !keys.has(sc.vis)) keys.set(sc.vis, m.id);
}
if (keys.size < 30) throw new Error(`expected the Chemistry diagrams, found ${keys.size}`);

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

// The yes/no decision labels keep the plain English NO, so the spreadsheet answer NO elsewhere is not translated.
if (supportText('NO (decision)', 'NO', 'pt') !== 'NÃO') throw new Error('decision label');
console.log(`Chemistry diagrams checked: ${keys.size} x 4 languages`);
