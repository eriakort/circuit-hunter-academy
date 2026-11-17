import assert from 'node:assert/strict';
import { GHANA_SS1_INDICATOR_MASTERY_MISSIONS } from '../src/data/ghanaCoreMathSS1IndicatorMasteryData';
import { GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS } from '../src/data/ghanaCoreMathSS1IndicatorQuestionVariants';
import { GHANA_SS1_STATISTICS_MISSIONS } from '../src/data/ghanaCoreMathSS1StatisticsData';

/**
 * These Ghana SHS 1 modules use the shared BilingualText shape for historical
 * compatibility. Every pair must therefore contain English in both slots;
 * Ghana must not retain Italian alternatives in its source content.
 */
function assertEnglishOnlyPairs(value: unknown, path: string): void {
  if (Array.isArray(value)) {
    if (value.length === 2 && value.every(item => typeof item === 'string')) {
      assert.equal(value[1], value[0], \`\${path} must not contain a non-English alternate\`);
      return;
    }
    value.forEach((item, index) => assertEnglishOnlyPairs(item, \`\${path}[\${index}]\`));
    return;
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) =>
      assertEnglishOnlyPairs(item, \`\${path}.\${key}\`)
    );
  }
}

assertEnglishOnlyPairs(
  GHANA_SS1_INDICATOR_MASTERY_MISSIONS,
  'Ghana SHS 1 indicator mastery missions'
);
assertEnglishOnlyPairs(
  GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS,
  'Ghana SHS 1 alternate indicator questions'
);
assertEnglishOnlyPairs(
  GHANA_SS1_STATISTICS_MISSIONS,
  'Ghana SHS 1 statistics missions'
);

console.log('ghanaEnglishOnly.test.ts ok! Audited Ghana SHS 1 mastery, alternate questions and statistics content.');
