import { UI_T1 } from '../src/data/uiTranslationsT1';
import { Lv } from '../src/helpers';

const ph = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join(',');
for (const [en, row] of Object.entries(UI_T1)) {
  if (row.length !== 4 || row.some(t => !t.trim())) throw new Error(`bad row: ${en}`);
  for (const t of row) if (ph(t) !== ph(en)) throw new Error(`placeholder mismatch in "${t}"`);
}

const tpl: [string, string] = [
  'You scored {score}/{total} ({pct}%). The pass threshold is {pass}/{total}. Review the missions in your learning map and practice with the Italian Lab!',
  'Hai ottenuto {score}/{total} ({pct}%). La soglia di superamento è {pass}/{total}. Rivedi le missioni sulla mappa e allenati con il Laboratorio di Parlato!'
];
const vars = { score: 12, total: 20, pct: 60, pass: 16 };
for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) {
  const out = Lv(tpl, lang, vars);
  if (/\{\w+\}/.test(out)) throw new Error(`unfilled placeholder (${lang}): ${out}`);
  if (!out.includes('12') || !out.includes('16')) throw new Error(`values missing (${lang})`);
}
if (!Lv(tpl, 'pt', vars).startsWith('Você fez 12/20')) throw new Error('pt');
if (!Lv(tpl, 'it', vars).startsWith('Hai ottenuto 12/20')) throw new Error('it');
if (!Lv(tpl, 'en', vars).startsWith('You scored 12/20')) throw new Error('en');
console.log('Dynamic string templates ok');
