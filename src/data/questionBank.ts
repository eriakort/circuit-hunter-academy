import { TaggedQuestion, SubjectId, BilingualText } from '../types';
import { MISSIONS, ARCS, UNITS } from './gameData';
import { EXTRA_PHYSICS_QUESTIONS } from './physicsQuestions';
import { EXTRA_MATH_QUESTIONS } from './mathQuestions';
import { shuffle } from '../helpers';

// Compile all questions from missions into an indexed bank
let cachedBank: TaggedQuestion[] | null = null;

export function getCompleteQuestionBank(): TaggedQuestion[] {
  if (cachedBank) return cachedBank;

  const bank: TaggedQuestion[] = [];

  MISSIONS.forEach((m, mi) => {
    const arc = ARCS[m.arc];
    const sub = (arc?.subject || 'cs') as SubjectId;
    const unitIndex = arc?.unit ?? 0;

    if (m.quiz && Array.isArray(m.quiz)) {
      m.quiz.forEach((q, qi) => {
        bank.push({
          ...q,
          id: `${m.id}-q${qi}`,
          subject: sub,
          unitIndex,
          arcIndex: m.arc,
          missionId: m.id,
          chapterTitle: arc?.title || m.title,
          missionTitle: m.title
        });
      });
    }
  });

  // Include supplemental physics and Bergamini-Barozzi math questions
  bank.push(...EXTRA_PHYSICS_QUESTIONS);
  bank.push(...EXTRA_MATH_QUESTIONS);

  cachedBank = bank;
  return bank;
}

export interface CategoryOption {
  type: 'all' | 'unit' | 'arc' | 'mission';
  id: string;
  unitIndex?: number;
  arcIndex?: number;
  missionId?: string;
  label: BilingualText;
  chapterNumber?: number;
  count: number;
}

export function getCategories(subject: SubjectId): CategoryOption[] {
  const bank = getCompleteQuestionBank().filter(q => q.subject === subject);
  const categories: CategoryOption[] = [];

  // 1. All Questions Option (Subject-wide comprehensive)
  categories.push({
    type: 'all',
    id: `all-${subject}`,
    label: [
      `All ${subject === 'cs' ? 'Computer Science' : subject === 'math' ? 'Mathematics' : 'Physics'} Topics`,
      `Tutti gli argomenti di ${subject === 'cs' ? 'Informatica' : subject === 'math' ? 'Matematica' : 'Fisica'}`
    ],
    count: bank.length
  });

  // 2. Units
  UNITS.forEach((u, ui) => {
    if ((u.subject || 'cs') !== subject) return;
    const count = bank.filter(q => q.unitIndex === ui).length;
    if (count > 0) {
      categories.push({
        type: 'unit',
        id: `unit-${ui}`,
        unitIndex: ui,
        label: [
          `Unit: ${Array.isArray(u.title) ? u.title[0] : u.title}`,
          `Unità: ${Array.isArray(u.title) ? u.title[1] : u.title}`
        ],
        count
      });
    }
  });

  // 3. Arcs / Chapters
  ARCS.forEach((a, ai) => {
    if ((a.subject || 'cs') !== subject) return;
    const count = bank.filter(q => q.arcIndex === ai).length;
    if (count > 0) {
      categories.push({
        type: 'arc',
        id: `arc-${ai}`,
        arcIndex: ai,
        chapterNumber: a.n,
        label: [
          `Ch. ${a.n}: ${Array.isArray(a.title) ? a.title[0] : a.title}`,
          `Cap. ${a.n}: ${Array.isArray(a.title) ? a.title[1] : a.title}`
        ],
        count
      });
    }
  });

  return categories;
}

export function filterQuestionPool(
  subject: SubjectId,
  selectedCategory: CategoryOption
): TaggedQuestion[] {
  const bank = getCompleteQuestionBank().filter(q => q.subject === subject);

  if (selectedCategory.type === 'all') {
    return bank;
  }
  if (selectedCategory.type === 'unit' && selectedCategory.unitIndex !== undefined) {
    return bank.filter(q => q.unitIndex === selectedCategory.unitIndex);
  }
  if (selectedCategory.type === 'arc' && selectedCategory.arcIndex !== undefined) {
    return bank.filter(q => q.arcIndex === selectedCategory.arcIndex);
  }
  if (selectedCategory.type === 'mission' && selectedCategory.missionId) {
    return bank.filter(q => q.missionId === selectedCategory.missionId);
  }

  return bank;
}

// Randomly samples up to `count` unique questions from the pool using Fisher-Yates shuffle
export function pickRandomQuestions(
  pool: TaggedQuestion[],
  count: number
): TaggedQuestion[] {
  if (pool.length === 0) return [];
  const shuffled = shuffle(pool);
  const targetCount = count <= 0 ? pool.length : Math.min(count, pool.length);
  return shuffled.slice(0, targetCount);
}
