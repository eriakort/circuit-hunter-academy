import { TaggedQuestion, SubjectId, BilingualText } from '../types';
import { MISSIONS, ARCS, UNITS, SUBJECTS } from './gameData';
import { EXTRA_PHYSICS_QUESTIONS } from './physicsQuestions';
import { EXTRA_MATH_QUESTIONS } from './mathQuestions';
import { ITALIAN_GRAMMAR_TOPICS } from './italianGrammar';
import { shuffle } from '../helpers';
import { HISTORY5_BOOK_QUESTIONS } from './historyG5BookQuestions';

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

  // Include supplemental physics and Bergamini-Barozzi math questions.
  bank.push(...EXTRA_PHYSICS_QUESTIONS);
  bank.push(...EXTRA_MATH_QUESTIONS);

  // Supplemental Grade 5 History questions organised by the approved textbook's topics.
  HISTORY5_BOOK_QUESTIONS.forEach((item, index) => {
    const mission = MISSIONS.find(m => m.id === item.missionId);
    if (!mission) return;
    const arc = ARCS[mission.arc];
    bank.push({
      q: item.q,
      a: item.a,
      why: item.why,
      id: `${item.missionId}-book${index}`,
      subject: (arc?.subject || 'hist5') as SubjectId,
      unitIndex: arc?.unit ?? 0,
      arcIndex: mission.arc,
      missionId: mission.id,
      chapterTitle: arc?.title || mission.title,
      missionTitle: mission.title,
      bookRef: item.bookRef
    });
  });

  // Reuse the exact grammar MCQs shown in Grammar Training; keep one source of truth.
  ITALIAN_GRAMMAR_TOPICS.forEach(topic => {
    (['A1', 'A2', 'B1'] as const).forEach(level => {
      topic.levels[level].exercises.forEach(exercise => {
        const correctOption = exercise.options[exercise.answer];
        const answers = [correctOption, ...exercise.options.filter((_, index) => index !== exercise.answer)];
        bank.push({
          id: 'italian-grammar-' + exercise.id,
          q: exercise.prompt,
          a: answers.map(answer => [answer, answer] as BilingualText),
          why: exercise.explanation,
          subject: 'italian',
          unitIndex: -1,
          arcIndex: -1,
          missionId: 'italian-grammar-' + topic.id,
          chapterTitle: topic.title,
          missionTitle: topic.title,
          grammarLevel: level
        });
      });
    });
  });

  cachedBank = bank;
  return bank;
}

export interface CategoryOption {
  type: 'all' | 'unit' | 'arc' | 'mission' | 'grammar';
  id: string;
  unitIndex?: number;
  arcIndex?: number;
  missionId?: string;
  grammarTopicId?: string;
  grammarLevel?: 'A1' | 'A2' | 'B1';
  label: BilingualText;
  chapterNumber?: number;
  count: number;
}

export function getCategories(subject: SubjectId): CategoryOption[] {
  const bank = getCompleteQuestionBank().filter(q => q.subject === subject);
  const categories: CategoryOption[] = [];

  // 1. All Questions Option (Subject-wide comprehensive)
  // Ghana subjects have English-only names stored as plain strings, not [en, it] pairs.
  const rawName = SUBJECTS.find(item => item.id === subject)?.name || ['Subject', 'Materia'];
  const subjectName = Array.isArray(rawName) ? rawName : [rawName, rawName];
  categories.push({
    type: 'all',
    id: `all-${subject}`,
    label: [
      `All ${subjectName[0]} Topics`,
      `Tutti gli argomenti di ${subjectName[1]}`
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

  // 3. Grammar topics are selectable test categories and reuse Grammar Training questions.
  if (subject === 'italian') {
    ITALIAN_GRAMMAR_TOPICS.forEach(topic => {
      const missionId = 'italian-grammar-' + topic.id;
      const count = bank.filter(question => question.missionId === missionId).length;
      if (count > 0) {
        // Keep the complete topic pool and add focused CEFR-level test options.
        categories.push({ type: 'grammar', id: 'grammar-' + topic.id, grammarTopicId: topic.id, missionId, label: topic.title, count });
        (['A1', 'A2', 'B1'] as const).forEach(level => {
          const levelCount = bank.filter(question => question.missionId === missionId && question.grammarLevel === level).length;
          if (levelCount > 0) {
            const enTitle = Array.isArray(topic.title) ? topic.title[0] : topic.title;
            const itTitle = Array.isArray(topic.title) ? topic.title[1] : topic.title;
            categories.push({
              type: 'grammar',
              id: 'grammar-' + topic.id + '-' + level.toLowerCase(),
              grammarTopicId: topic.id,
              grammarLevel: level,
              missionId,
              label: [enTitle + ' · ' + level, itTitle + ' · ' + level],
              count: levelCount
            });
          }
        });
      }
    });
  }

  // 4. Arcs / Chapters
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
  if ((selectedCategory.type === 'mission' || selectedCategory.type === 'grammar') && selectedCategory.missionId) {
    return bank.filter(q => q.missionId === selectedCategory.missionId && (!selectedCategory.grammarLevel || q.grammarLevel === selectedCategory.grammarLevel));
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
