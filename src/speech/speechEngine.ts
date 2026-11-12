/**
 * Web Speech Engine for Italian Studies (A1, A2, B1)
 *
 * Utilizes native client-side browser Web Speech APIs:
 * - SpeechSynthesis for native Italian text-to-speech audio playback.
 * - SpeechRecognition (or webkitSpeechRecognition) for live Italian voice transcription.
 * - Levenshtein distance & token similarity for pronunciation accuracy scoring.
 *
 * Zero paid external API dependencies, fully client-side.
 */

export interface WordScore {
  word: string;
  matched: boolean;
  score: number;
  userWord?: string;
}

export interface PronunciationScoreResult {
  score: number; // 0 to 100
  passed: boolean; // >= 70%
  feedback: [string, string]; // [EN, IT]
  words: WordScore[];
  spokenNormalized: string;
  expectedNormalized: string;
}

export type PronunciationScore = PronunciationScoreResult;

/** Check if Text-to-Speech is available in current browser environment */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

/** Check if Speech Recognition (Microphone STT) is supported */
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  if ('isSecureContext' in window && !window.isSecureContext) return false;
  return Boolean(
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition
  );
}

/** Stop any ongoing speech synthesis */
export function stopSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }
}

/** Pause the current utterance in place (resume continues from the same word). */
export function pauseSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    try { window.speechSynthesis.pause(); } catch { /* ignore */ }
  }
}

/** Resume a paused utterance from where it stopped. */
export function resumeSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    try { window.speechSynthesis.resume(); } catch { /* ignore */ }
  }
}

/** True while an utterance is active (speaking or paused). */
export function isCurrentlySpeaking(): boolean {
  return isSpeechSynthesisSupported() && window.speechSynthesis.speaking;
}

/** True while the active utterance is paused. */
export function isSpeakingPaused(): boolean {
  return isSpeechSynthesisSupported() && window.speechSynthesis.paused;
}

export type SpeakItalianOptions = {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
} | 'normal' | 'slow';

/**
 * Speak Italian text using browser Web Speech Synthesis.
 * @param text The Italian phrase to read aloud
 * @param options Rate ('normal', 'slow' or { rate, pitch, callbacks })
 */
export function speakItalian(
  text: string,
  options: SpeakItalianOptions = 'normal'
): void {
  if (!text.trim()) return;
  if (!isSpeechSynthesisSupported()) {
    if (typeof options === 'object') options.onError?.('SpeechSynthesis not supported');
    return;
  }

  const parsedOptions = typeof options === 'string'
    ? { rate: options === 'slow' ? 0.72 : 0.9, pitch: 1.0 }
    : options;

  try {
    stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.rate = parsedOptions.rate ?? 0.9; // Slightly deliberate for clear learning
    utterance.pitch = parsedOptions.pitch ?? 1.0;

    // Pick best Italian voice if available
    const voices = window.speechSynthesis.getVoices();
    const itVoice = voices.find(v => v.lang.toLowerCase().startsWith('it'));
    if (itVoice) {
      utterance.voice = itVoice;
    }

    if (parsedOptions.onStart) utterance.onstart = () => parsedOptions.onStart?.();
    if (parsedOptions.onEnd) utterance.onend = () => parsedOptions.onEnd?.();
    if (parsedOptions.onError) utterance.onerror = (e) => parsedOptions.onError?.(e);

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    if (typeof options === 'object') options.onError?.(err);
  }
}

export interface SpeechRecognitionController {
  stop: () => void;
  abort: () => void;
}

/**
 * Start listening to user's microphone for Italian speech.
 */
export function listenItalian(options: {
  onResult: (transcript: string, isFinal: boolean) => void;
  onError: (error: string) => void;
  onEnd: () => void;
  silenceMs?: number;
  maxMs?: number;
  continuous?: boolean;
  lang?: string;
}): SpeechRecognitionController {
  if (typeof window === 'undefined' || !isSpeechRecognitionSupported()) {
    options.onError(typeof window === 'undefined'
      ? 'Speech recognition requires a browser environment'
      : 'Speech recognition API not available in this browser');
    options.onEnd();
    return { stop: () => {}, abort: () => {} };
  }

  const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const silenceMs = Math.max(250, options.silenceMs ?? 2000);
  const maxMs = Math.max(silenceMs, options.maxMs ?? 20000);

  let recognition: any = null;
  let finalTranscript = '';
  let finished = false;
  let stopRequested = false;
  let silenceTimer: ReturnType<typeof setTimeout> | null = null;
  let sessionTimer: ReturnType<typeof setTimeout> | null = null;
  let endNotified = false;

  const clearTimers = () => {
    if (silenceTimer) clearTimeout(silenceTimer);
    if (sessionTimer) clearTimeout(sessionTimer);
    silenceTimer = null;
    sessionTimer = null;
  };

  const notifyEnd = () => {
    if (endNotified) return;
    endNotified = true;
    options.onEnd();
  };

  const finalize = () => {
    if (finished) return;
    finished = true;
    clearTimers();
    const result = finalTranscript.trim();
    if (result) options.onResult(result, true);
    try { recognition?.stop(); } catch { notifyEnd(); }
  };

  const armSilence = () => {
    if (silenceTimer) clearTimeout(silenceTimer);
    silenceTimer = setTimeout(() => {
      stopRequested = true;
      finalize();
    }, silenceMs);
  };

  try {
    recognition = new SpeechRec();
    recognition.lang = options.lang || 'it-IT';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      if (finished) return;
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interim += transcript;
      }
      const live = (finalTranscript + interim).trim();
      if (live) {
        options.onResult(live, false);
        armSilence();
      }
    };

    recognition.onerror = (event: any) => {
      const error = event.error || 'speech-recognition-error';
      if (error === 'no-speech' || error === 'aborted') return;
      finished = true;
      clearTimers();
      options.onError(error);
      notifyEnd();
    };

    recognition.onend = () => {
      if (finished) {
        notifyEnd();
        return;
      }
      if (stopRequested) {
        if (finalTranscript.trim()) finalize();
        else {
          finished = true;
          clearTimers();
          notifyEnd();
        }
        return;
      }
      try { recognition.start(); }
      catch { finalize(); }
    };

    recognition.start();

    // A real hard cap: some browsers do not emit onend while the microphone is open.
    sessionTimer = setTimeout(() => {
      if (finished) return;
      stopRequested = true;
      if (finalTranscript.trim()) {
        finalize();
      } else {
        finished = true;
        clearTimers();
        options.onError('Listening session timed out. Please try again.');
        try { recognition?.abort(); } catch { /* ignore */ }
        notifyEnd();
      }
    }, maxMs);
  } catch (error: any) {
    finished = true;
    clearTimers();
    options.onError(error?.message || 'Failed to initialize microphone');
    notifyEnd();
  }

  return {
    stop: () => {
      if (finished) return;
      stopRequested = true;
      finalize();
    },
    abort: () => {
      if (finished) return;
      finished = true;
      clearTimers();
      try { recognition?.abort(); } catch { /* ignore */ }
    }
  };
}

export const startListening = listenItalian;
export const isSpeechRecognitionAvailable = isSpeechRecognitionSupported;

/**
 * Normalize Italian text for fair pronunciation evaluation:
 * - lowercase
 * - strip punctuation and extra spaces
 * - normalize standard accents
 */
export function normalizeItalian(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics for phonetic comparison
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»’]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Standard Levenshtein distance between two strings
 */
export function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const d: number[][] = [];
  for (let i = 0; i <= m; i++) {
    d[i] = [i];
  }
  for (let j = 0; j <= n; j++) {
    d[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // deletion
        d[i][j - 1] + 1, // insertion
        d[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return d[m][n];
}

/**
 * Compute similarity ratio between 0 and 1
 */
export function stringSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const dist = levenshteinDistance(a, b);
  return Math.max(0, 1 - dist / maxLen);
}

/**
 * Score spoken Italian against target phrase
 */
export function scorePronunciation(spoken: string, expected: string): PronunciationScoreResult {
  const normSpoken = normalizeItalian(spoken);
  const normExpected = normalizeItalian(expected);

  if (!normSpoken) {
    return {
      score: 0,
      passed: false,
      feedback: [
        'No audio detected. Please speak clearly into your microphone.',
        'Nessun audio rilevato. Parla chiaramente nel microfono.'
      ],
      words: expected.split(/\s+/).filter(Boolean).map(w => ({
        word: w,
        matched: false,
        score: 0
      })),
      spokenNormalized: normSpoken,
      expectedNormalized: normExpected
    };
  }

  const expectedRawWords = expected.split(/\s+/).filter(Boolean);
  const expectedTokens = normExpected.split(/\s+/).filter(Boolean);
  const spokenTokens = normSpoken.split(/\s+/).filter(Boolean);

  let totalScoreSum = 0;
  const words: WordScore[] = [];

  // Align expected words against spoken words
  expectedTokens.forEach((expWord, idx) => {
    const rawWord = expectedRawWords[idx] || expWord;
    let bestScore = 0;
    let matchedToken = '';

    spokenTokens.forEach(spkWord => {
      const sim = stringSimilarity(expWord, spkWord);
      if (sim > bestScore) {
        bestScore = sim;
        matchedToken = spkWord;
      }
    });

    const isMatch = bestScore >= 0.75;
    totalScoreSum += bestScore;
    words.push({
      word: rawWord,
      matched: isMatch,
      score: Math.round(bestScore * 100),
      userWord: matchedToken || undefined
    });
  });

  const fullPhraseSim = stringSimilarity(normSpoken, normExpected);
  const wordAvgSim = expectedTokens.length > 0 ? totalScoreSum / expectedTokens.length : 0;
  // Blend whole-phrase and word-level score
  const finalScore = Math.round((wordAvgSim * 0.7 + fullPhraseSim * 0.3) * 100);
  const passed = finalScore >= 70;

  let feedback: [string, string];
  if (finalScore >= 90) {
    feedback = [
      'Eccellente! Native-like accent and cadence. Bravissimo!',
      'Eccellente! Accento e cadenza degni di un madrelingua. Bravissimo!'
    ];
  } else if (finalScore >= 75) {
    feedback = [
      'Molto bene! Very good pronunciation and rhythm.',
      'Molto bene! Ottima pronuncia e ritmo fluido.'
    ];
  } else if (finalScore >= 60) {
    feedback = [
      'Quasi perfetto! Review the highlighted words and try once more.',
      'Quasi perfetto! Riascolta le parole evidenziate e riprova.'
    ];
  } else {
    feedback = [
      'Keep practicing! Click the speaker icon to listen carefully, then repeat.',
      'Continua a fare pratica! Clicca sull’altoparlante per ascoltare e ripetere.'
    ];
  }

  return {
    score: finalScore,
    passed,
    feedback,
    words,
    spokenNormalized: normSpoken,
    expectedNormalized: normExpected
  };
}
