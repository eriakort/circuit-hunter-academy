import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { BilingualText, GradeId, SubjectId } from './types';

export type RaceArenaQuestion = {
  id: string;
  prompt: BilingualText;
  choices: BilingualText[];
};

export type RaceArenaMember = {
  user_id: string;
  display_name: string;
  score: number;
  correct_count: number;
  next_question_index: number;
  finished_at: string | null;
  joined_at: string;
};

export type RaceArenaLeaderboard = {
  status: 'lobby' | 'running' | 'finished' | 'cancelled';
  members: RaceArenaMember[];
};

export type RaceArenaStartResult = {
  status: 'running';
  questions: RaceArenaQuestion[];
};

export type RaceArenaAnswerResult = {
  correct: boolean;
  points: number;
  score: number;
  correctCount: number;
  finished: boolean;
  nextQuestion: RaceArenaQuestion | null;
};

export type RaceArenaRoom = {
  roomId: string;
  code: string;
  status: 'lobby' | 'running' | 'finished' | 'cancelled';
  grade?: GradeId;
  subject?: SubjectId;
  missionId?: string;
};

export const createRaceSupabaseClient = (
  url = import.meta.env.VITE_SUPABASE_URL || 'https://yhzefqoplunmseuwcwku.supabase.co',
  anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloemVmcW9wbHVubXNldXdjd2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNDM0NTQsImV4cCI6MjEwODgxOTQ1NH0.5CWs0AtbFtrAYOYiPjgKfvWivAMPeXGXSzOblZMCS3c'
) => createClient(url, anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

export async function ensureRaceSession(client: SupabaseClient) {
  const { data: sessionData, error: sessionError } = await client.auth.getSession();
  if (sessionError) throw new Error(sessionError.message);
  if (sessionData.session?.user) return sessionData.session.user;

  const { data, error } = await client.auth.signInAnonymously();
  if (error || !data.user) {
    throw new Error(error?.message || 'Anonymous sign-in did not return a user');
  }
  return data.user;
}

export async function callRaceApi<T>(
  client: SupabaseClient,
  body: Record<string, unknown>
): Promise<T> {
  const { data, error } = await client.functions.invoke('race-api', { body });
  if (error) {
    let message = error.message || 'Race service request failed';
    try {
      const response = (error as { context?: Response }).context;
      if (response) {
        const payload = await response.clone().json();
        if (typeof payload?.error === 'string') message = payload.error;
      }
    } catch {
      // Keep the SDK error if the response is not JSON.
    }
    throw new Error(message);
  }
  if (data == null || typeof data !== 'object') {
    throw new Error('Race service returned an invalid response');
  }
  return data as T;
}

export function normalizeRaceQuestion(value: unknown): RaceArenaQuestion | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const candidate = value as Record<string, unknown>;
  if (
    typeof candidate.id !== 'string' ||
    !candidate.id ||
    !isBilingualText(candidate.prompt) ||
    !Array.isArray(candidate.choices) ||
    candidate.choices.length < 2 ||
    candidate.choices.length > 6 ||
    !candidate.choices.every(isBilingualText)
  ) return null;
  return {
    id: candidate.id,
    prompt: candidate.prompt,
    choices: candidate.choices
  };
}

function isBilingualText(value: unknown): value is BilingualText {
  return typeof value === 'string' ||
    (Array.isArray(value) && value.length === 2 && value.every(item => typeof item === 'string'));
}

export function normalizeRaceQuestions(value: unknown): RaceArenaQuestion[] {
  if (!Array.isArray(value)) return [];
  const questions = value.map(normalizeRaceQuestion);
  return questions.every((question): question is RaceArenaQuestion => question !== null)
    ? questions
    : [];
}
