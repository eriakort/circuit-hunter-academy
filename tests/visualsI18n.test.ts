import { readFileSync } from 'node:fs';
import { translateUi } from '../src/data/uiTranslations';

// Every [English, Italian] label drawn by visuals.ts has pt/es/fr/de text.
const src = readFileSync('src/data/visuals.ts', 'utf8');
const re = /L\(\s*\[\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)\s*,/g;
const missing = new Set<string>();
let checked = 0;
for (const m of src.matchAll(re)) {
  const en = (m[1] ?? m[2] ?? m[3]).replace(/\\'/g, "'").replace(/\\\\/g, '\\');
  if (!/\p{L}{2}/u.test(en) || en.includes('${')) continue;
  checked++;
  for (const lang of ['pt', 'es', 'fr', 'de'] as const) if (!translateUi(en, lang)) missing.add(`${lang}: ${en.slice(0, 70)}`);
}
if (missing.size) throw new Error(`visuals.ts labels without translation (${missing.size}):\n${[...missing].slice(0, 25).join('\n')}`);
console.log(`visuals.ts labels checked: ${checked}`);
