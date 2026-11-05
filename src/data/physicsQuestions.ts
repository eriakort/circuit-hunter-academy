import { TaggedQuestion } from '../types';
import { CH1_QUESTIONS } from './physicsQuestionsCh1';
import { CH2_QUESTIONS } from './physicsQuestionsCh2';
import { CH3_QUESTIONS } from './physicsQuestionsCh3';
import { CH4_QUESTIONS } from './physicsQuestionsCh4';
import { CH5_QUESTIONS } from './physicsQuestionsCh5';

export const EXTRA_PHYSICS_QUESTIONS: TaggedQuestion[] = [
  ...CH1_QUESTIONS,
  ...CH2_QUESTIONS,
  ...CH3_QUESTIONS,
  ...CH4_QUESTIONS,
  ...CH5_QUESTIONS
];
