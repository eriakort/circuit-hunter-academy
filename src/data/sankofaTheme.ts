import type { CurriculumId } from './curricula';

export type SankofaRankId =
  | 'curious-seeker'
  | 'trail-explorer'
  | 'pattern-finder'
  | 'problem-solver'
  | 'knowledge-keeper'
  | 'community-innovator';

export interface SankofaRank {
  id: SankofaRankId;
  title: string;
  threshold: number;
  description: string;
}

export interface SankofaRegion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  symbol: string;
  subjects: string[];
}

export const SANKOFA_THEME = {
  id: 'sankofa',
  name: 'Sankofa – The Knowledge Quest',
  tagline: 'Learn from the past. Understand the present. Build the future.',
  colours: {
    forest: '#174B36',
    gold: '#D5A43B',
    terracotta: '#B9573F',
    parchment: '#F2E8D5',
    indigo: '#293B60',
    charcoal: '#282A27'
  }
} as const;

export const SANKOFA_RANKS: readonly SankofaRank[] = [
  { id: 'curious-seeker', title: 'Curious Seeker', threshold: 0, description: 'Begin exploring and asking questions.' },
  { id: 'trail-explorer', title: 'Trail Explorer', threshold: 250, description: 'Build confidence through introductory missions.' },
  { id: 'pattern-finder', title: 'Pattern Finder', threshold: 800, description: 'Recognise relationships and connect ideas.' },
  { id: 'problem-solver', title: 'Problem Solver', threshold: 1600, description: 'Apply knowledge to unfamiliar challenges.' },
  { id: 'knowledge-keeper', title: 'Knowledge Keeper', threshold: 2700, description: 'Demonstrate consistent understanding.' },
  { id: 'community-innovator', title: 'Community Innovator', threshold: 5500, description: 'Use knowledge creatively to help others.' }
] as const;

export const SANKOFA_REGIONS: readonly SankofaRegion[] = [
  {
    id: 'coastal-lands',
    title: 'The Coastal Lands',
    subtitle: 'Oceans, trade & communities',
    description: 'Explore marine ecosystems, measurement, trade and the communities along Ghana’s coast.',
    symbol: '≈',
    subjects: ['Science', 'Mathematics', 'Geography']
  },
  {
    id: 'forest-kingdoms',
    title: 'The Forest Kingdoms',
    subtitle: 'Life, materials & patterns',
    description: 'Investigate biodiversity, plants, materials, natural resources and conservation.',
    symbol: '✳',
    subjects: ['Science', 'Chemistry', 'Mathematics']
  },
  {
    id: 'savannah-territories',
    title: 'The Savannah Territories',
    subtitle: 'Land, climate & agriculture',
    description: 'Connect climate, farming, geometry, energy and environmental systems.',
    symbol: '⌁',
    subjects: ['Science', 'Mathematics', 'Geography']
  },
  {
    id: 'innovation-city',
    title: 'The Innovation City',
    subtitle: 'Ideas become solutions',
    description: 'Apply computing, engineering, financial mathematics and technology to practical problems.',
    symbol: '⌘',
    subjects: ['Computing', 'Physics', 'Mathematics']
  },
  {
    id: 'heritage-trails',
    title: 'The Heritage Trails',
    subtitle: 'Stories, craft & knowledge',
    description: 'Discover Ghana’s diverse histories, languages, arts, crafts and storytelling traditions.',
    symbol: '✧',
    subjects: ['History', 'Languages', 'Creative Arts']
  }
] as const;

export const isSankofaCurriculum = (curriculumId: CurriculumId): boolean =>
  curriculumId === 'ghana-nacca';

export const getSankofaRank = (xp: number): SankofaRank => {
  const safeXp = Number.isFinite(xp) ? Math.max(0, xp) : 0;
  return [...SANKOFA_RANKS].reverse().find(rank => safeXp >= rank.threshold) || SANKOFA_RANKS[0];
};

export const getNextSankofaRank = (xp: number): SankofaRank | null => {
  const safeXp = Number.isFinite(xp) ? Math.max(0, xp) : 0;
  return SANKOFA_RANKS.find(rank => rank.threshold > safeXp) || null;
};

export const getSankofaRankProgress = (xp: number): number => {
  const current = getSankofaRank(xp);
  const next = getNextSankofaRank(xp);
  if (!next) return 100;
  const safeXp = Number.isFinite(xp) ? Math.max(0, xp) : 0;
  return Math.min(100, Math.max(0, ((safeXp - current.threshold) / (next.threshold - current.threshold)) * 100));
};
