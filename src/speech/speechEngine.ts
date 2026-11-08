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
  /** Accuracy percentage, 0 to 100. */
  percentage: number;
  /** Alias of `percentage` (0 to 100) kept for existing callers. */
  score: number;
  passed: boolean; // >= 70%
  feedback: [string, string]; // [EN, IT]
  words: WordScore[];
  spokenNormalized: string;
  expectedNormalized: string;
}

/** Alias kept for callers that import the shorter name. */
export type PronunciationScore = PronunciationScoreResult;

/** Check if Text-to-Speech is available in current browser environment */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

/** Check if Speech Recognition (Microphone STT) is supported */
export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
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

/**
 * Speak Italian text using browser Web Speech Synthesis.
 * @param text The Italian phrase to read aloud
 * @param options Rate (1.0 = normal, 0.75 = slow for learning), pitch, callbacks
 */
export type SpeakRate = 'slow' | 'normal';

export function speakItalian(
  text: string,
  optionsArg: SpeakRate | {
    rate?: number;
    pitch?: number;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: any) => void;
  } = {}
): void {
  // A bare speed mode ('slow' | 'normal') is accepted as shorthand for a rate.
  const options = typeof optionsArg === 'string'
    ? { rate: optionsArg === 'slow' ? 0.7 : 0.95 }
    : optionsArg;
  if (!isSpeechSynthesisSupported()) {
    options.onError?.('SpeechSynthesis not supported');
    return;
  }

  try {
    stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.rate = options.rate ?? 0.9; // Slightly deliberate for clear learning
    utterance.pitch = options.pitch ?? 1.0;

    // Pick best Italian voice if available
    const voices = window.speechSynthesis.getVoices();
    const itVoice = voices.find(v => v.lang.toLowerCase().startsWith('it'));
    if (itVoice) {
      utterance.voice = itVoice;
    }

    if (options.onStart) utterance.onstart = () => options.onStart?.();
    if (options.onEnd) utterance.onend = () => options.onEnd?.();
    if (options.onError) utterance.onerror = (e) => options.onError?.(e);

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    options.onError?.(err);
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
  continuous?: boolean;
}): SpeechRecognitionController {
  const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRec) {
    options.onError('SpeechRecognition API not available in this browser');
    options.onEnd();
    return { stop: () => {}, abort: () => {} };
  }

  let recognition: any = null;
  try {
    recognition = new SpeechRec();
    recognition.lang = 'it-IT';
    recognition.continuous = options.continuous ?? false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }

      if (final.trim()) {
        options.onResult(final.trim(), true);
      } else if (interim.trim()) {
        options.onResult(interim.trim(), false);
      }
    };

    recognition.onerror = (event: any) => {
      const err = event.error || 'Speech recognition error';
      options.onError(err);
    };

    recognition.onend = () => {
      options.onEnd();
    };

    recognition.start();
  } catch (err: any) {
    options.onError(err?.message || 'Failed to initialize microphone');
    options.onEnd();
  }

  return {
    stop: () => {
      try {
        recognition?.stop();
      } catch {
        // ignore
      }
    },
    abort: () => {
      try {
        recognition?.abort();
      } catch {
        // ignore
      }
    }
  };
}

/**
 * Normalize Italian text for fair pronunciation evaluation:
 * - lowercase
 * - strip punctuation and extra spaces
 * - normalize standard accents
 */
/** Alias of {@link isSpeechRecognitionSupported} for callers that prefer this name. */
export const isSpeechRecognitionAvailable = isSpeechRecognitionSupported;

/**
 * Convenience wrapper around {@link listenItalian} that returns a single stop
 * function instead of a controller. `lang` is accepted for call-site symmetry
 * but ignored (recognition always runs as it-IT).
 */
export function startListening(options: {
  lang?: string;
  onResult: (transcript: string, isFinal: boolean) => void;
  onError: (error: string) => void;
  onEnd: () => void;
  continuous?: boolean;
}): () => void {
  const controller = listenItalian({
    onResult: options.onResult,
    onError: options.onError,
    onEnd: options.onEnd,
    continuous: options.continuous,
  });
  return () => controller.stop();
}

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
      percentage: 0,
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
    percentage: finalScore,
    score: finalScore,
    passed,
    feedback,
    words,
    spokenNormalized: normSpoken,
    expectedNormalized: normExpected
  };
}
