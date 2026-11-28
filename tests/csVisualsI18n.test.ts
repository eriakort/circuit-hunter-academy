import { getVisualHtml } from '../src/data/visuals';
import { H, rich } from '../src/helpers';

const KEYS = ['props', 'badalgo', 'ct', 'sciences', 'divide', 'both', 'earth', 'stack', 'osjobs', 'gui', 'fileops', 'apps', 'licences', 'networks', 'search', 'phishing', 'netiquette', 'iot', 'cia', 'pwdtips', 'malware', 'netsec', 'safeweb', 'cloudmodels', 'videocall', 'wpformats', 'wpextra', 'sheetfn', 'slidetips', 'slidefx', 'pioneers', 'climate'];
const text = (h: string) => h.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

for (const key of KEYS) {
  const en = text(getVisualHtml(key, 'en'));
  const it = text(getVisualHtml(key, 'it'));
  if (!en || !it) throw new Error(`no diagram for ${key}`);
  for (const lang of ['pt', 'es', 'fr', 'de'] as const) {
    const t = text(getVisualHtml(key, lang));
    if (t === en || t === it) throw new Error(`${key} (${lang}) is not translated`);
    // The Italian label stays as the learning pill, but the diagram must not be English.
    if (/undefined|\$\{/.test(t)) throw new Error(`${key} (${lang}) has broken text`);
  }
}

// H() and rich() honour the support language and fall back to Italian, never English.
const hPt = H('Security', 'Sicurezza', 'pt');
if (!hPt.startsWith('Segurança') || !hPt.includes('Sicurezza')) throw new Error(`H pt: ${hPt}`);
if (!H('Security', 'Sicurezza', 'en').startsWith('Security')) throw new Error('H en');
if (!H('Security', 'Sicurezza', 'it').startsWith('Sicurezza')) throw new Error('H it');
if (!H('A string nobody translated', 'Una stringa non tradotta', 'fr').startsWith('Una stringa non tradotta')) throw new Error('H fallback must be Italian');
if (!rich('[[Security|Sicurezza]]', 'de').includes('>Sicherheit<')) throw new Error('rich de');
console.log(`Computer Science diagrams checked: ${KEYS.length} x 4 languages`);
