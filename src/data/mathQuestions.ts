import { TaggedQuestion } from '../types';
import { CH1_QUESTIONS } from './mathQuestionsCh1';
import { CH2_QUESTIONS } from './mathQuestionsCh2';
import { CH3_QUESTIONS } from './mathQuestionsCh3';
import { CH4_QUESTIONS } from './mathQuestionsCh4';
import { CH5_QUESTIONS } from './mathQuestionsCh5';
import { CH6_QUESTIONS } from './mathQuestionsCh6';

export const EXTRA_MATH_QUESTIONS: TaggedQuestion[] = [
  ...CH1_QUESTIONS,
  ...CH2_QUESTIONS,
  ...CH3_QUESTIONS,
  ...CH4_QUESTIONS,
  ...CH5_QUESTIONS,
  ...CH6_QUESTIONS
];
