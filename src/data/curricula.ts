import type { GradeId, SubjectId } from '../types';

/**
 * Curriculum metadata is deliberately independent from the active game state.
 * This lets the academy introduce country-specific pathways without changing
 * legacy grade IDs, subject IDs, or existing Italian progress records.
 */
export type CountryCode = 'IT' | 'GH';
export type CurriculumId = 'italy-national' | 'ghana-nacca';
export type CurriculumPathwayId =
  | 'italy-standard'
  | 'ghana-core-mathematics'
  | 'ghana-additional-mathematics'
  | 'ghana-jhs-mathematics'
  | 'ghana-jhs-science'
  | 'ghana-shs-general-science';

export interface CurriculumGradeLevel {
  /** Stable internal grade ID used by existing content and saves. */
  gradeId: GradeId;
  /** Country-specific label shown to learners. */
  label: string;
  /** Optional second-language label for the existing bilingual UI. */
  alternateLabel?: string;
  order: number;
  /** Compact label for headers and buttons, e.g. “SHS 2”. */
  shortLabel?: string;
  /** Text for the large badge on the level card, e.g. “2”. */
  badge?: string;
  /** School stage line shown above the level name. */
  kicker?: string;
  /** Typical learner ages for this level. */
  ageRange?: string;
}

export interface CurriculumPathway {
  id: CurriculumPathwayId;
  name: string;
  description: string;
  status: 'available' | 'planned';
  /** Present when this pathway currently maps to the legacy subject catalogue. */
  subjectIdsByGrade?: Partial<Record<GradeId, readonly SubjectId[]>>;
}

export interface CountryCurriculum {
  id: CurriculumId;
  countryCode: CountryCode;
  name: string;
  authority: string;
  primaryLanguage: 'en' | 'it';
  supportedLanguages: readonly ('en' | 'it')[];
  gradeLevels: readonly CurriculumGradeLevel[];
  pathways: readonly CurriculumPathway[];
}

export interface CountryDefinition {
  code: CountryCode;
  name: string;
  flag: string;
  defaultCurriculumId: CurriculumId;
  curricula: readonly CountryCurriculum[];
}

const italianSubjects: Partial<Record<GradeId, readonly SubjectId[]>> = {
  grade5: ['science', 'math5', 'italian', 'hist5', 'geo5'],
  grade9: ['cs', 'phys', 'math', 'italian', 'chem', 'hist9', 'geo9'],
  grade10: ['chem10', 'italian', 'hist10', 'geo10', 'math10'],
  grade11: ['chem11', 'italian', 'hist11', 'geo11', 'math11']
};

/**
 * The country registry is the source of truth for country/curriculum labels.
 * Ghana uses dedicated grade IDs to keep JHS/SHS progress separate from Italian grades.
 * Core Mathematics is available as an initial SS1 pilot; wider coverage and Additional Mathematics remain in preparation.
 */
export const COUNTRIES: readonly CountryDefinition[] = [
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    defaultCurriculumId: 'italy-national',
    curricula: [
      {
        id: 'italy-national',
        countryCode: 'IT',
        name: 'Italian National Curriculum',
        authority: 'Italian Ministry of Education and Merit',
        primaryLanguage: 'it',
        supportedLanguages: ['it', 'en'],
        gradeLevels: [
          { gradeId: 'grade5', label: 'Grade 5', alternateLabel: 'Quinta primaria', order: 5 },
          { gradeId: 'grade9', label: 'Grade 9', alternateLabel: 'Terza media / 1° Superiore', order: 9 },
          { gradeId: 'grade10', label: 'Grade 10', alternateLabel: '2° Superiore', order: 10 },
          { gradeId: 'grade11', label: 'Grade 11', alternateLabel: '3° / 4° Superiore', order: 11 }
        ],
        pathways: [
          {
            id: 'italy-standard',
            name: 'Italian School Curriculum',
            description: 'The existing Italian grade and subject pathways.',
            status: 'available',
            subjectIdsByGrade: italianSubjects
          }
        ]
      }
    ]
  },
  {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    defaultCurriculumId: 'ghana-nacca',
    curricula: [
      {
        id: 'ghana-nacca',
        countryCode: 'GH',
        name: 'Ghana NaCCA Curriculum',
        authority: 'National Council for Curriculum and Assessment (NaCCA)',
        primaryLanguage: 'en',
        supportedLanguages: ['en'],
        gradeLevels: [
          // Ghana SHS is a three-year stage that usually starts around age 15, after JHS 3.
          { gradeId: 'ghjhs1', label: 'JHS 1', order: 1, shortLabel: 'JHS 1', badge: '1', kicker: 'Junior High School · Year 1', ageRange: 'Usually ages 12–13' },
          { gradeId: 'ghjhs2', label: 'JHS 2', order: 2, shortLabel: 'JHS 2', badge: '2', kicker: 'Junior High School · Year 2', ageRange: 'Usually ages 13–14' },
          { gradeId: 'ghjhs3', label: 'JHS 3', order: 3, shortLabel: 'JHS 3', badge: '3', kicker: 'Junior High School · Year 3', ageRange: 'Usually ages 14–15' },
          { gradeId: 'ghshs1', label: 'SHS 1', order: 4, shortLabel: 'SHS 1', badge: '1', kicker: 'Senior High School · Year 1', ageRange: 'Usually ages 15–16' },
          { gradeId: 'ghshs2', label: 'SHS 2', order: 5, shortLabel: 'SHS 2', badge: '2', kicker: 'Senior High School · Year 2', ageRange: 'Usually ages 16–17' },
          { gradeId: 'ghshs3', label: 'SHS 3', order: 6, shortLabel: 'SHS 3', badge: '3', kicker: 'Senior High School · Year 3', ageRange: 'Usually ages 17–18' }
        ],
        pathways: [
          {
            id: 'ghana-core-mathematics',
            name: 'Core Mathematics',
            description: 'The common NaCCA Mathematics pathway for Senior High School learners.',
            status: 'available',
            subjectIdsByGrade: { ghshs1: ['ghcoremath'], ghshs2: ['ghcoremath2'], ghshs3: ['ghcoremath3'] }
          },
          { id: 'ghana-jhs-mathematics', name: 'JHS Mathematics', description: 'NaCCA Common Core Programme Mathematics for JHS 1–3: all four strands in each year.', status: 'available', subjectIdsByGrade: { ghjhs1: ['ghjhs1math'], ghjhs2: ['ghjhs2math'], ghjhs3: ['ghjhs3math'] } },
          { id: 'ghana-jhs-science', name: 'JHS Science', description: 'NaCCA Common Core Programme Science for JHS 1–3: all five strands in each year.', status: 'available', subjectIdsByGrade: { ghjhs1: ['ghjhs1science'], ghjhs2: ['ghjhs2science'], ghjhs3: ['ghjhs3science'] } },
          { id: 'ghana-shs-general-science', name: 'SHS General Science', description: 'NaCCA General Science for SHS 1–3.', status: 'planned' },
          {
            id: 'ghana-additional-mathematics',
            name: 'Additional Mathematics',
            description: 'The separate advanced Mathematics pathway for learners taking the additional subject.',
            status: 'planned'
          }
        ]
      }
    ]
  }
];

export const DEFAULT_COUNTRY_CODE: CountryCode = 'IT';
export const DEFAULT_CURRICULUM_ID: CurriculumId = 'italy-national';

export const getCountry = (code: CountryCode): CountryDefinition | undefined =>
  COUNTRIES.find(country => country.code === code);

export const getCurriculum = (id: CurriculumId): CountryCurriculum | undefined =>
  COUNTRIES.flatMap(country => country.curricula).find(curriculum => curriculum.id === id);

export const getCurriculumGrade = (
  curriculumId: CurriculumId,
  gradeId: GradeId
): CurriculumGradeLevel | undefined =>
  getCurriculum(curriculumId)?.gradeLevels.find(grade => grade.gradeId === gradeId);

export const getCurriculumPathway = (
  curriculumId: CurriculumId,
  pathwayId: CurriculumPathwayId
): CurriculumPathway | undefined =>
  getCurriculum(curriculumId)?.pathways.find(pathway => pathway.id === pathwayId);

/** The level metadata a curriculum shows for an internal grade ID, if it defines one. */
export const getCurriculumGradeLevel = (curriculumId: CurriculumId, gradeId: GradeId): CurriculumGradeLevel | undefined =>
  COUNTRIES.flatMap(country => country.curricula)
    .find(curriculum => curriculum.id === curriculumId)
    ?.gradeLevels.find(level => level.gradeId === gradeId);
