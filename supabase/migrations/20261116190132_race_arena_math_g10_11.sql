-- Expand Race Arena curriculum constraints to include Grade 10 & Grade 11 Mathematics ('math10' and 'math11').
-- Keep server-owned table constraints aligned with src/data/gradeData.ts (GRADE_SUBJECT_IDS).

alter table public.race_rooms
  drop constraint if exists race_rooms_grade_subject_check;

alter table public.race_rooms
  add constraint race_rooms_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian', 'hist5', 'geo5')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem', 'hist9', 'geo9')) or
    (grade = 'grade10' and subject in ('math10', 'chem10', 'italian', 'hist10', 'geo10')) or
    (grade = 'grade11' and subject in ('math11', 'chem11', 'italian', 'hist11', 'geo11'))
  );

alter table public.race_question_bank
  drop constraint if exists race_question_bank_grade_subject_check;

alter table public.race_question_bank
  add constraint race_question_bank_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian', 'hist5', 'geo5')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem', 'hist9', 'geo9')) or
    (grade = 'grade10' and subject in ('math10', 'chem10', 'italian', 'hist10', 'geo10')) or
    (grade = 'grade11' and subject in ('math11', 'chem11', 'italian', 'hist11', 'geo11'))
  );
