import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';

console.log('Testing FORMULA_CARDS & SUBJECT_TOPICS integrity...');

if (!FORMULA_CARDS || FORMULA_CARDS.length === 0) {
  throw new Error('FORMULA_CARDS is empty or undefined');
}

const subjectsInCards = new Set(FORMULA_CARDS.map(c => c.subject));
const requiredSubjects = ['math', 'phys', 'cs', 'science', 'math5'];

for (const req of requiredSubjects) {
  if (!subjectsInCards.has(req as any)) {
    throw new Error(`Missing required formula subject: ${req}`);
  }
}

// Verify SUBJECT_TOPICS
for (const sub of requiredSubjects) {
  const topics = SUBJECT_TOPICS[sub as keyof typeof SUBJECT_TOPICS];
  if (!topics || topics.length === 0) {
    throw new Error(`Missing subject topics for: ${sub}`);
  }
  for (const t of topics) {
    if (!t.id || !t.name || t.name.length < 2) {
      throw new Error(`Invalid topic definition in subject ${sub}: ${JSON.stringify(t)}`);
    }
  }
}

for (const card of FORMULA_CARDS) {
  if (!card.id || !card.title || !card.formula || !card.example || !card.subject || !card.topicId) {
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

  // Ensure topicId belongs to the subject's defined topics
  const subTopics = SUBJECT_TOPICS[card.subject];
  if (!subTopics.some(t => t.id === card.topicId)) {
    throw new Error(`Card ${card.id} has topicId ${card.topicId} which is not registered in SUBJECT_TOPICS for subject ${card.subject}`);
  }
}

console.log(`✓ formulaData.test.ts passed! ${FORMULA_CARDS.length} formula cards verified across subjects: ${Array.from(subjectsInCards).join(', ')}`);
