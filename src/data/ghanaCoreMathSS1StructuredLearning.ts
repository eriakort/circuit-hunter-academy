import type { BilingualText, LearningMissionDefinition } from '../types';
import { GHANA_SS1_INDICATOR_MASTERY_MISSIONS } from './ghanaCoreMathSS1IndicatorMasteryData';

const diagnosticLearning = GHANA_SS1_INDICATOR_MASTERY_MISSIONS[0].learning;
const diagnosticAssessment = diagnosticLearning?.masteryAssessment;

const conceptsById = new Map(
  (diagnosticLearning?.concepts || []).map(concept => [concept.id, concept])
);
const questionIndexByConcept = new Map(
  (diagnosticAssessment?.questionConceptIds || []).map((conceptId, index) => [conceptId, index])
);

/** Scene indexes in the Community Data Lab that explicitly teach each indicator. */
export const GHANA_SS1_STATISTICS_CONCEPT_SCENES: Record<string, number[]> = {
  'ss1-stats-cs1-li1': [2],
  'ss1-stats-cs1-li2': [3],
  'ss1-stats-cs1-li3': [3],
  'ss1-stats-cs2-li2': [4, 5],
  'ss1-stats-cs2-descriptive': [6, 7],
  'ss1-stats-cs2-li3': [8],
  'ss1-stats-cs3-li1': [1, 3],
  'ss1-stats-cs3-li2': [9]
};

export const GHANA_SS1_STATISTICAL_INDICATOR_IDS = [
  'ss1-stats-cs1-li1',
  'ss1-stats-cs1-li2',
  'ss1-stats-cs1-li3',
  'ss1-stats-cs2-li2',
  'ss1-stats-cs2-descriptive',
  'ss1-stats-cs2-li3',
  'ss1-stats-cs3-li1',
  'ss1-stats-cs3-li2'
] as const;

interface GhanaSS1StructuredLearningOptions {
  conceptIds: readonly string[];
  assessmentTitle: BilingualText;
  assessmentInstructions: BilingualText;
  prerequisites?: BilingualText[];
  summary: BilingualText[];
  techniqueUnlock: {
    id: string;
    name: BilingualText;
    description: BilingualText;
    xpReward?: number;
  };
}

/**
 * Reuse the audited indicator concepts and two-form question bank for a
 * curriculum-aligned mission. Each question remains mapped to its official
 * indicator, so its results can contribute to the shared 45-indicator view.
 */
export const createGhanaSS1IndicatorLearning = ({
  conceptIds,
  assessmentTitle,
  assessmentInstructions,
  prerequisites,
  summary,
  techniqueUnlock
}: GhanaSS1StructuredLearningOptions): LearningMissionDefinition => {
  if (!diagnosticAssessment) {
    throw new Error('The Ghana SHS 1 indicator diagnostic must be registered before structured learning can be created.');
  }

  const concepts = conceptIds.map(id => {
    const concept = conceptsById.get(id);
    if (!concept) throw new Error('Unknown Ghana SHS 1 indicator concept: ' + id);
    return {
      ...concept,
      sceneIndexes: GHANA_SS1_STATISTICS_CONCEPT_SCENES[id] || []
    };
  });

  const questionIndexes = conceptIds.map(id => {
    const index = questionIndexByConcept.get(id);
    if (index === undefined) throw new Error('No diagnostic question is mapped to Ghana SHS 1 concept: ' + id);
    return index;
  });

  return {
    version: 1,
    objectives: concepts.map(concept => ({
      id: 'objective-' + concept.id,
      description: concept.explanation,
      successCriteria: concept.knowledgePrompts || []
    })),
    ...(prerequisites?.length ? { prerequisites } : {}),
    concepts,
    summary,
    masteryAssessment: {
      title: assessmentTitle,
      instructions: assessmentInstructions,
      questions: questionIndexes.map(index => diagnosticAssessment.questions[index]),
      questionConceptIds: [...conceptIds],
      questionVariants: questionIndexes.map(index => diagnosticAssessment.questionVariants?.[index] || []),
      passingScore: 80
    },
    techniqueUnlock
  };
};
