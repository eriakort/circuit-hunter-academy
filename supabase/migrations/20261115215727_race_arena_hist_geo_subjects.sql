-- Expand Race Arena curriculum constraints to include History and Geography across Grades 5, 9, 10, and 11.
-- Keep server-owned table constraints aligned with src/data/gradeData.ts (GRADE_SUBJECT_IDS).

alter table public.race_rooms
  drop constraint if exists race_rooms_grade_subject_check;

alter table public.race_rooms
  add constraint race_rooms_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian', 'hist5', 'geo5')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem', 'hist9', 'geo9')) or
    (grade = 'grade10' and subject in ('chem10', 'italian', 'hist10', 'geo10')) or
    (grade = 'grade11' and subject in ('chem11', 'italian', 'hist11', 'geo11'))
  );

alter table public.race_question_bank
  drop constraint if exists race_question_bank_grade_subject_check;

alter table public.race_question_bank
  add constraint race_question_bank_grade_subject_check check (
    (grade = 'grade5' and subject in ('science', 'math5', 'italian', 'hist5', 'geo5')) or
    (grade = 'grade9' and subject in ('cs', 'phys', 'math', 'italian', 'chem', 'hist9', 'geo9')) or
    (grade = 'grade10' and subject in ('chem10', 'italian', 'hist10', 'geo10')) or
    (grade = 'grade11' and subject in ('chem11', 'italian', 'hist11', 'geo11'))
  );
