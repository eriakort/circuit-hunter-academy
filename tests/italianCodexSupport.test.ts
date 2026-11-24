import assert from 'node:assert/strict';
import { ITALIAN_CODEX, ITALIAN_CODEX_SUPPORT } from '../src/data/italianCodex';

// Every Italian Codex entry has a title and definition in each support language.
for (const entry of ITALIAN_CODEX) {
  const support = ITALIAN_CODEX_SUPPORT[entry[1]];
  assert.ok(support, `Codex entry "${entry[1]}" needs support-language text`);
  for (const lang of ['pt', 'es', 'fr', 'de'] as const) {
    const [title, definition] = support[lang] ?? [];
    assert.ok(title?.trim() && definition?.trim(), `Codex entry "${entry[1]}" needs a ${lang} title and definition`);
  }
}
assert.equal(Object.keys(ITALIAN_CODEX_SUPPORT).length, ITALIAN_CODEX.length, 'No orphaned Codex translations');
console.log('italianCodexSupport.test.ts ok!', ITALIAN_CODEX.length, 'entries');
