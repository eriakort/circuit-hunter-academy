import assert from 'node:assert/strict';
import { ITALIAN_MISSIONS } from '../src/data/italianData';

/**
 * Guard against "answer-giveaway" questions: in a bilingual multiple-choice
 * question the correct option is always a[0], and the question prompt must not
 * contain the correct Italian answer in ANY of its language variants — doing so
 * hands the answer to a learner reading the prompt in that language.
 *
 * The prompt may legitimately keep an English meaning in quotes (the cue of a
 * "how do you say X" item); what it must never contain is the Italian target
 * sentence that is the correct option.
 */

type BT = [string, string] | string | Record<string, string>;
const variants = (x: BT): string[] => {
  if (x == null) return [];
  if (Array.isArray(x)) return x.filter(Boolean);
  if (typeof x === 'object') return Object.values(x).filter(Boolean);
  return [x];
};
const norm = (s: string) => s.toLowerCase().replace(/[.,!?;:«»"'’“”()]/g, '').replace(/\s+/g, ' ').trim();

const giveaways: string[] = [];

const check = (qs: any[], where: string) => {
  for (const item of qs || []) {
    if (!item || !item.q || !item.a || !item.a[0]) continue;
    const answerNorms = variants(item.a[0]).map(norm).filter(a => a.split(' ').length >= 2);
    if (answerNorms.length === 0) continue;
    for (const promptVariant of variants(item.q)) {
      const np = norm(promptVariant);
      for (const ans of answerNorms) {
        if (np.includes(ans)) {
          giveaways.push(`${where}: prompt "${promptVariant}" reveals answer "${ans}"`);
        }
      }
    }
  }
};

for (const m of ITALIAN_MISSIONS) {
  check(m.quiz, `${m.id} quiz`);
  for (const sc of (m.scenes || [])) check((sc as any).questions, `${m.id} scene`);
  const ln: any = (m as any).learning;
  if (ln?.knowledgeCheck) check(ln.knowledgeCheck, `${m.id} knowledgeCheck`);
}

assert.equal(giveaways.length, 0, `Found answer-giveaway question(s):\n${giveaways.join('\n')}`);

console.log('italianAnswerGiveaway.test.ts ok! No question reveals its own answer.');
