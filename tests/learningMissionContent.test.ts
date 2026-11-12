import assert from 'node:assert/strict';
import { MISSIONS } from '../src/data/gameData';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

function requireBilingual(value: unknown, path: string): asserts value is [string, string] {
  assert.ok(isBilingualPair(value), `${path} must contain non-empty English and Italian text`);
}

function requireUniqueIds(items: Array<{ id: string }>, path: string) {
  const ids = items.map(item => item.id);
  assert.ok(ids.every(id => typeof id === 'string' && id.trim().length > 0), `${path} contains an empty ID`);
  assert.equal(new Set(ids).size, ids.length, `${path} contains duplicate IDs`);
}

function validateQuestion(question: any, path: string) {
  requireBilingual(question?.q, `${path}.q`);
  requireBilingual(question?.why, `${path}.why`);
  assert.ok(Array.isArray(question?.a) && question.a.length >= 2, `${path}.a must contain at least two answers`);
  question.a.forEach((answer: unknown, index: number) =>
    requireBilingual(answer, `${path}.a[${index}]`)
  );
}

for (const mission of MISSIONS) {
  const learning = mission.learning;
  if (!learning) continue;

  const root = `Mission ${mission.id}.learning`;
  assert.equal(learning.version, 1, `${root}.version must be 1`);
  assert.ok(Array.isArray(learning.objectives) && learning.objectives.length > 0, `${root} needs learning objectives`);
  assert.ok(Array.isArray(learning.concepts) && learning.concepts.length > 0, `${root} needs learning concepts`);

  requireUniqueIds(learning.objectives, `${root}.objectives`);
  requireUniqueIds(learning.concepts, `${root}.concepts`);

  learning.objectives.forEach((objective, index) => {
    const path = `${root}.objectives[${index}]`;
    requireBilingual(objective.description, `${path}.description`);
    objective.successCriteria?.forEach((criterion, criterionIndex) =>
      requireBilingual(criterion, `${path}.successCriteria[${criterionIndex}]`)
    );
  });

  learning.prerequisites?.forEach((item, index) =>
    requireBilingual(item, `${root}.prerequisites[${index}]`)
  );

  const conceptIds = new Set(learning.concepts.map(concept => concept.id));
  learning.concepts.forEach((concept, index) => {
    const path = `${root}.concepts[${index}]`;
    requireBilingual(concept.title, `${path}.title`);
    requireBilingual(concept.explanation, `${path}.explanation`);
    if (concept.example !== undefined) requireBilingual(concept.example, `${path}.example`);

    if (concept.workedExample) {
      requireBilingual(concept.workedExample.scenario, `${path}.workedExample.scenario`);
      assert.ok(Array.isArray(concept.workedExample.steps) && concept.workedExample.steps.length > 0,
        `${path}.workedExample.steps must not be empty`);
      concept.workedExample.steps.forEach((step, stepIndex) =>
        requireBilingual(step, `${path}.workedExample.steps[${stepIndex}]`)
      );
      requireBilingual(concept.workedExample.answer, `${path}.workedExample.answer`);
    }

    concept.misconceptions?.forEach((item, itemIndex) => {
      requireBilingual(item.belief, `${path}.misconceptions[${itemIndex}].belief`);
      requireBilingual(item.correction, `${path}.misconceptions[${itemIndex}].correction`);
    });

    concept.knowledgePrompts?.forEach((prompt, promptIndex) =>
      requireBilingual(prompt, `${path}.knowledgePrompts[${promptIndex}]`)
    );

    concept.sceneIndexes?.forEach((sceneIndex, sceneIndexPosition) => {
      assert.ok(
        Number.isInteger(sceneIndex) && sceneIndex >= 0 && sceneIndex < mission.scenes.length,
        `${path}.sceneIndexes[${sceneIndexPosition}] references a missing scene`
      );
    });
  });

  const validateActivities = (activities: NonNullable<typeof learning.guidedPractice>, name: string) => {
    requireUniqueIds(activities, `${root}.${name}`);
    activities.forEach((activity, index) => {
      const path = `${root}.${name}[${index}]`;
      requireBilingual(activity.title, `${path}.title`);
      requireBilingual(activity.instructions, `${path}.instructions`);
      if (activity.sceneIndex !== undefined) {
        assert.ok(
          Number.isInteger(activity.sceneIndex) && activity.sceneIndex >= 0 && activity.sceneIndex < mission.scenes.length,
          `${path}.sceneIndex references a missing scene`
        );
      }
      activity.questions?.forEach((question, questionIndex) =>
        validateQuestion(question, `${path}.questions[${questionIndex}]`)
      );
      activity.hints?.forEach((hint, hintIndex) =>
        requireBilingual(hint, `${path}.hints[${hintIndex}]`)
      );
      if (activity.hints && activity.questions) {
        assert.equal(activity.hints.length, activity.questions.length,
          `${path}.hints must align with its questions`);
      }
    });
  };

  if (learning.guidedPractice) validateActivities(learning.guidedPractice, 'guidedPractice');
  if (learning.independentPractice) validateActivities(learning.independentPractice, 'independentPractice');

  learning.knowledgeCheck?.forEach((question, index) =>
    validateQuestion(question, `${root}.knowledgeCheck[${index}]`)
  );
  learning.summary?.forEach((item, index) =>
    requireBilingual(item, `${root}.summary[${index}]`)
  );

  if (learning.masteryAssessment) {
    const assessment = learning.masteryAssessment;
    const path = `${root}.masteryAssessment`;
    requireBilingual(assessment.title, `${path}.title`);
    requireBilingual(assessment.instructions, `${path}.instructions`);
    assert.ok(Array.isArray(assessment.questions) && assessment.questions.length > 0,
      `${path}.questions must not be empty`);
    assessment.questions.forEach((question, index) =>
      validateQuestion(question, `${path}.questions[${index}]`)
    );
    assert.ok(Number.isFinite(assessment.passingScore) && assessment.passingScore >= 0 && assessment.passingScore <= 100,
      `${path}.passingScore must be between 0 and 100`);

    if (assessment.questionConceptIds) {
      assert.equal(assessment.questionConceptIds.length, assessment.questions.length,
        `${path}.questionConceptIds must align with its questions`);
      assessment.questionConceptIds.forEach((id, index) =>
        assert.ok(conceptIds.has(id), `${path}.questionConceptIds[${index}] references unknown concept "${id}"`)
      );
    }
  }

  if (learning.techniqueUnlock) {
    requireBilingual(learning.techniqueUnlock.name, `${root}.techniqueUnlock.name`);
    requireBilingual(learning.techniqueUnlock.description, `${root}.techniqueUnlock.description`);
    if (learning.techniqueUnlock.xpReward !== undefined) {
      assert.ok(Number.isSafeInteger(learning.techniqueUnlock.xpReward) && learning.techniqueUnlock.xpReward >= 0,
        `${root}.techniqueUnlock.xpReward must be a non-negative safe integer`);
    }
  }
}

const learningMissionCount = MISSIONS.filter(mission => mission.learning).length;
console.log('learningMissionContent.test.ts ok! Validated', learningMissionCount, 'learning missions.');
