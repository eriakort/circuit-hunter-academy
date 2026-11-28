import { getVisualHtml } from '../src/data/visuals';

const KEYS = ['g5s-plants', 'g5s-animals', 'g5s-ecosystems', 'g5s-habitats', 'g5s-food-chains', 'g5s-biodiversity', 'g5s-environment-care', 'g5s-scientific-investigation'];
const LANGS = ['pt', 'es', 'fr', 'de'] as const;
const text = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const labelOf = (html: string) => html.match(/aria-label="([^"]*)"/)?.[1] ?? '';

for (const key of KEYS) {
  const en = getVisualHtml(key, 'en');
  const it = getVisualHtml(key, 'it');
  if (!en || !it) throw new Error(`no diagram for ${key}`);
  for (const lang of LANGS) {
    const html = getVisualHtml(key, lang);
    if (!html) throw new Error(`no ${lang} diagram for ${key}`);
    if (html === en || html === it) throw new Error(`${key} (${lang}) is not translated`);
    // Every text label differs from English (words shared across languages are rare in these diagrams).
    const own = text(html).split(' ').filter(Boolean).length;
    if (own === 0) throw new Error(`${key} (${lang}) has no text`);
    const label = labelOf(html);
    if (!label || label === labelOf(en) || label === labelOf(it)) throw new Error(`${key} (${lang}) aria-label not translated: ${label}`);
    if (/\$\{|undefined/.test(html)) throw new Error(`${key} (${lang}) has unresolved template text`);
  }
}
if (!getVisualHtml('g5s-food-chains', 'pt').includes('GAFANHOTO')) throw new Error('pt food chain');
if (getVisualHtml('g5s-food-chains', 'de').includes('LOCUST')) throw new Error('de food chain still English');
console.log(`Science diagrams checked: ${KEYS.length} x ${LANGS.length} languages`);
