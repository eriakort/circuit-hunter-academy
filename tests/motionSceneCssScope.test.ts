import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

// The app already uses the global class "sm" (".btn.sm" small buttons and
// <text class="sm"> in the Grade 5 maths diagrams). The motion scenes must
// never define a bare ".sm" rule or they restyle the whole interface.
const css = readFileSync('src/index.css', 'utf8');
assert.ok(!/(^|[\s,}])\.sm(?![\w-])\s*[{,]/m.test(css.replace(/\.btn\.sm\{[^}]*\}|\.dia \.sm\{[^}]*\}/g, '')), 'no bare .sm rule beyond the two existing ones');
for (const file of readdirSync('src/components/scienceMotion').filter(name => name.endsWith('.tsx'))) {
  const source = readFileSync(`src/components/scienceMotion/${file}`, 'utf8');
  assert.ok(!/className="sm[ "]/.test(source), `${file} does not use the global "sm" class`);
}
console.log('Motion scenes use their own CSS class names and do not restyle shared classes.');
