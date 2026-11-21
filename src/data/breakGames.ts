import type { Language, Mission } from '../types';
import { L } from '../helpers';

/**
 * Study-break games. They are built only from a mission's own quiz and lesson text, so they add
 * no new curriculum wording: they replay what the learner has just read in a different way.
 */

/** A break is offered after this many study scenes. */
export const BREAK_EVERY = 3;
/** XP for completing a break game (first visit to a mission only, enforced by `award`). */
export const BREAK_XP = 5;

export type BreakGameKind = 'truefalse' | 'match' | 'memory' | 'gap';

export interface TrueFalseRound { question: string; proposed: string; isTrue: boolean; why: string }
export interface MatchPair { question: string; answer: string }
export interface GapRound { sentence: string; answer: string; choices: string[] }

export type BreakGame =
  | { kind: 'truefalse'; rounds: TrueFalseRound[] }
  | { kind: 'match'; pairs: MatchPair[] }
  | { kind: 'memory'; pairs: MatchPair[] }
  | { kind: 'gap'; rounds: GapRound[] };

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻', n: 'ⁿ' };
const SUB: Record<string, string> = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
const script = (inner: string, map: Record<string, string>, fallback: string) =>
  [...inner].every(ch => map[ch]) ? [...inner].map(ch => map[ch]).join('') : `${fallback}${inner}`;

const strip = (html: string) =>
  html
    .replace(/<sup>([^<]*)<\/sup>/gi, (_m, inner) => script(inner, SUP, '^'))
    .replace(/<sub>([^<]*)<\/sub>/gi, (_m, inner) => script(inner, SUB, '_'))
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?[a-zA-Z][^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

const text = (x: any, lang: Language) => {
  const v = L(x, lang);
  return typeof v === 'string' ? strip(v) : '';
};

/** Deterministic pseudo-random so a given break looks the same on every render. */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 100000) / 100000;
  };
}
function shuffled<T>(items: T[], rnd: () => number): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const MAX_TEXT = 90;

function quizPairs(mission: Mission, lang: Language): MatchPair[] {
  const seen = new Set<string>();
  const out: MatchPair[] = [];
  for (const q of (mission as any).quiz || []) {
    const question = text(q.q, lang);
    const answer = text(q.a?.[0], lang);
    if (!question || !answer || question.length > MAX_TEXT * 1.6 || answer.length > MAX_TEXT || seen.has(answer)) continue;
    seen.add(answer);
    out.push({ question, answer });
  }
  return out;
}

function trueFalseRounds(mission: Mission, lang: Language, rnd: () => number): TrueFalseRound[] {
  const rounds: TrueFalseRound[] = [];
  const start = Math.floor(rnd() * 2);
  (mission as any).quiz?.forEach((q: any) => {
    const question = text(q.q, lang);
    const right = text(q.a?.[0], lang);
    const wrong = (q.a || []).slice(1).map((a: any) => text(a, lang)).filter((a: string) => a && a !== right);
    if (!question || !right || !wrong.length) return;
    // Alternate so the answers are not predictable, using the seed for the starting point.
    const useTrue = (rounds.length + start) % 2 === 0;
    const proposed = useTrue ? right : wrong[Math.floor(rnd() * wrong.length)];
    rounds.push({ question, proposed, isTrue: useTrue, why: text(q.why, lang) });
  });
  return rounds.slice(0, 5);
}

/** Sentences from the lesson that contain exactly one bold key term. */
function gapRounds(mission: Mission, lang: Language, rnd: () => number): GapRound[] {
  const candidates: Array<{ sentence: string; term: string }> = [];
  const terms = new Set<string>();
  for (const scene of mission.scenes || []) {
    if ((scene as any).type) continue;
    const raw = L((scene as any).text, lang);
    if (typeof raw !== 'string') continue;
    // Split into sentences without breaking tags.
    const pieces = raw.replace(/<\/p>|<\/li>/gi, '$&|').split(/(?<=[.!?])\s+|\|/);
    for (const piece of pieces) {
      const bolds = [...piece.matchAll(/<b>([^<]{3,32})<\/b>/g)].map(m => strip(m[1])).filter(b => !/[:?!]$/.test(b));
      bolds.forEach(b => terms.add(b));
      if (bolds.length !== 1) continue;
      const term = bolds[0];
      const plain = strip(piece);
      if (plain.length < 35 || plain.length > 200 || !plain.includes(term)) continue;
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      candidates.push({ term, sentence: strip(piece.replace(new RegExp(`<b>\\s*${escaped}\\s*</b>`), '_____')) });
    }
  }
  const unique = [...terms];
  if (unique.length < 3) return [];
  const used = new Set<string>();
  const rounds: GapRound[] = [];
  for (const c of shuffled(candidates, rnd)) {
    if (used.has(c.term) || !c.sentence.includes('_____')) continue;
    used.add(c.term);
    const others = shuffled(unique.filter(t => t.toLowerCase() !== c.term.toLowerCase()), rnd).slice(0, 2);
    if (others.length < 2) continue;
    rounds.push({ sentence: c.sentence, answer: c.term, choices: shuffled([c.term, ...others], rnd) });
    if (rounds.length === 4) break;
  }
  return rounds.length >= 2 ? rounds : [];
}

/** Which break kinds this mission can support. */
export function availableBreakKinds(mission: Mission, lang: Language): BreakGameKind[] {
  const rnd = seeded(mission.id);
  const kinds: BreakGameKind[] = [];
  if (trueFalseRounds(mission, lang, rnd).length >= 3) kinds.push('truefalse');
  const pairs = quizPairs(mission, lang);
  if (pairs.length >= 3) kinds.push('match', 'memory');
  if (gapRounds(mission, lang, rnd).length) kinds.push('gap');
  return kinds;
}

/** Build the break for a mission at a given scene. `null` when the mission lacks enough content. */
export function buildBreakGame(mission: Mission, sceneIndex: number, lang: Language): BreakGame | null {
  const kinds = availableBreakKinds(mission, lang);
  if (!kinds.length) return null;
  const rnd = seeded(`${mission.id}:${sceneIndex}`);
  // Rotate by the number of earlier breaks so a long mission does not repeat the same game.
  const slot = Math.floor(sceneIndex / BREAK_EVERY);
  const kind = kinds[(slot + Math.floor(seeded(mission.id)() * kinds.length)) % kinds.length];
  switch (kind) {
    case 'truefalse': return { kind, rounds: trueFalseRounds(mission, lang, rnd) };
    case 'match': return { kind, pairs: shuffled(quizPairs(mission, lang), rnd).slice(0, 4) };
    case 'memory': return { kind, pairs: shuffled(quizPairs(mission, lang), rnd).slice(0, 4) };
    case 'gap': return { kind, rounds: gapRounds(mission, lang, rnd) };
  }
}

/**
 * Should a break be offered when the learner presses Continue on this scene?
 * Never inside or right before an interactive scene or the battle, never on replays.
 */
export function shouldOfferBreak(mission: Mission, sceneIndex: number): boolean {
  const scenes = mission.scenes || [];
  const here: any = scenes[sceneIndex];
  const next: any = scenes[sceneIndex + 1];
  if (!here || !next) return false;
  if ((sceneIndex + 1) % BREAK_EVERY !== 0) return false;
  if (here.type || next.type || here.needDone || next.needDone || here.init || next.init) return false;
  // A break just before the final study scene would not feel like a break.
  const after: any = scenes[sceneIndex + 2];
  if (!after) return false;
  return true;
}
