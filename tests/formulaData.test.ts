import { FORMULA_CARDS } from '../src/data/formulaData';

console.log('Testing FORMULA_CARDS integrity...');

if (!FORMULA_CARDS || FORMULA_CARDS.length === 0) {
  throw new Error('FORMULA_CARDS is empty or undefined');
}

const categories = new Set(FORMULA_CARDS.map(c => c.category));
const requiredCategories = ['powers', 'fractions', 'algebra', 'equations', 'physics'];

for (const req of requiredCategories) {
  if (!categories.has(req as any)) {
    throw new Error(`Missing required formula category: ${req}`);
  }
}

for (const card of FORMULA_CARDS) {
  if (!card.id || !card.title || !card.formula || !card.example) {
    throw new Error(`Card missing required properties: ${JSON.stringify(card)}`);
  }
  if (!Array.isArray(card.title) || card.title.length < 2) {
    throw new Error(`Card title must be bilingual [EN, IT]: ${card.id}`);
  }
  if (!Array.isArray(card.example) || card.example.length < 2) {
    throw new Error(`Card example must be bilingual [EN, IT]: ${card.id}`);
  }
  if (card.trap && (!Array.isArray(card.trap) || card.trap.length < 2)) {
    throw new Error(`Card trap must be bilingual [EN, IT]: ${card.id}`);
  }
  if (card.rules) {
    for (const rule of card.rules) {
      if (!Array.isArray(rule.name) || rule.name.length < 2) {
        throw new Error(`Rule name must be bilingual [EN, IT] in card ${card.id}`);
      }
      if (!Array.isArray(rule.desc) || rule.desc.length < 2) {
        throw new Error(`Rule desc must be bilingual [EN, IT] in card ${card.id}`);
      }
    }
  }
}

console.log(`✓ formulaData.test.ts passed! ${FORMULA_CARDS.length} formula cards verified across categories: ${Array.from(categories).join(', ')}`);
