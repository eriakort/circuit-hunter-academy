import type { GrammarActivityProgress, BilingualText } from '../types';
import type { GrammarExercise, GrammarLevel, GrammarTopic } from './italianGrammar';

export interface GrammarReviewQuestion extends GrammarExercise {
  topicId: string;
  topicTitle: BilingualText;
}

export interface GrammarTopicProgress {
  mastered: number;
  total: number;
}

type GrammarProgressMap = Record<string, Pick<GrammarActivityProgress, 'attempts' | 'correct'>>;

export const getGrammarTopicProgress = (
  topic: GrammarTopic,
  level: GrammarLevel,
  progress: GrammarProgressMap = {}
): GrammarTopicProgress => {
  const exercises = topic.levels[level].exercises;
  return {
    mastered: exercises.filter(exercise => progress[exercise.id]?.correct === true).length,
    total: exercises.length
  };
};

export const buildAdaptiveGrammarReview = (
  topics: GrammarTopic[],
  level: GrammarLevel,
  progress: GrammarProgressMap = {}
): GrammarReviewQuestion[] => {
  const questions = topics.flatMap(topic => topic.levels[level].exercises.map(exercise => ({
    ...exercise,
    topicId: topic.id,
    topicTitle: topic.title
  })));

  return questions
    .map((question, originalIndex) => ({ question, originalIndex, progress: progress[question.id] }))
    .sort((left, right) => {
      const leftAttempts = left.progress?.attempts || 0;
      const rightAttempts = right.progress?.attempts || 0;
      const leftCorrect = left.progress?.correct === true;
      const rightCorrect = right.progress?.correct === true;
      const priority = (correct: boolean, attempts: number) => correct ? 2 : attempts > 0 ? 0 : 1;
      const priorityDifference = priority(leftCorrect, leftAttempts) - priority(rightCorrect, rightAttempts);
      if (priorityDifference !== 0) return priorityDifference;
      if (!leftCorrect && leftAttempts !== rightAttempts) return rightAttempts - leftAttempts;
      return left.originalIndex - right.originalIndex;
    })
    .map(item => item.question);
};
