import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import {
  listenItalian,
  pauseSpeaking,
  resumeSpeaking,
  isCurrentlySpeaking,
  isSpeakingPaused
} from '../src/speech/speechEngine';

// ---- Minimal, driveable Web Speech API mocks ----
let lastRecognition: MockRecognition | null = null;

class MockRecognition {
  lang = '';
  continuous = false;
  interimResults = false;
  maxAlternatives = 1;
  onresult: ((e: any) => void) | null = null;
  onerror: ((e: any) => void) | null = null;
  onend: (() => void) | null = null;
  starts = 0;
  stops = 0;
  constructor() { lastRecognition = this; }
  start() { this.starts++; }
  stop() { this.stops++; this.onend?.(); }
  abort() { this.onend?.(); }
  // Test helper: deliver one or more transcript segments.
  emit(segments: Array<{ text: string; final: boolean }>) {
    const results: any = segments.map(s => {
      const alt: any = [{ transcript: s.text }];
      alt.isFinal = s.final;
      return alt;
    });
    results.length = segments.length;
    this.onresult?.({ resultIndex: 0, results });
  }
}

const synth = {
  speaking: false,
  paused: false,
  cancel() { this.speaking = false; this.paused = false; },
  pause() { this.paused = true; },
  resume() { this.paused = false; },
  speak() { this.speaking = true; },
  getVoices() { return []; }
};

beforeEach(() => {
  lastRecognition = null;
  synth.speaking = false;
  synth.paused = false;
  (globalThis as any).window = {
    SpeechRecognition: MockRecognition,
    speechSynthesis: synth,
    SpeechSynthesisUtterance: class { constructor(public text: string) {} }
  };
});

afterEach(() => { delete (globalThis as any).window; });

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

describe('listenItalian — patient recognition', () => {
  it('reports interim speech without ever finalizing on its own', async () => {
    const results: Array<[string, boolean]> = [];
    listenItalian({
      onResult: (t, f) => results.push([t, f]),
      onError: () => {},
      onEnd: () => {},
      silenceMs: 10_000 // long, so it cannot auto-finalize during this test
    });
    lastRecognition!.emit([{ text: 'buongiorno', final: false }]);
    lastRecognition!.emit([{ text: 'buongiorno come', final: false }]);
    // All updates so far must be interim (isFinal === false).
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(([, f]) => f === false)).toBe(true);
  });

  it('does not finalize at a mid-sentence pause (a final segment stays open)', () => {
    const finals: string[] = [];
    listenItalian({
      onResult: (t, f) => { if (f) finals.push(t); },
      onError: () => {},
      onEnd: () => {},
      silenceMs: 10_000
    });
    // The engine delivers a "final" chunk mid-sentence (natural pause) — must NOT end.
    lastRecognition!.emit([{ text: 'buongiorno', final: true }]);
    expect(finals).toEqual([]); // nothing finalized yet
  });

  it('accumulates segments and finalizes once when the user stops', () => {
    const finals: string[] = [];
    const controller = listenItalian({
      onResult: (t, f) => { if (f) finals.push(t); },
      onError: () => {},
      onEnd: () => {},
      silenceMs: 10_000
    });
    lastRecognition!.emit([{ text: 'buongiorno', final: true }]);
    lastRecognition!.emit([{ text: 'come sta', final: true }]);
    controller.stop();
    expect(finals).toEqual(['buongiorno come sta']);
  });

  it('auto-finalizes after a real silence gap', async () => {
    const finals: string[] = [];
    listenItalian({
      onResult: (t, f) => { if (f) finals.push(t); },
      onError: () => {},
      onEnd: () => {},
      silenceMs: 40
    });
    lastRecognition!.emit([{ text: 'ieri sono andata a firenze', final: true }]);
    expect(finals).toEqual([]);        // not yet — still within the quiet window
    await sleep(80);                   // let the silence timer fire
    expect(finals).toEqual(['ieri sono andata a firenze']);
  });

  it('keeps the mic open when the engine ends on silence (auto-restart)', () => {
    listenItalian({ onResult: () => {}, onError: () => {}, onEnd: () => {}, silenceMs: 10_000 });
    const rec = lastRecognition!;
    expect(rec.starts).toBe(1);
    rec.onend?.();               // browser auto-stopped on brief silence
    expect(rec.starts).toBe(2);  // engine restarted it to stay patient
  });
});

describe('speech synthesis pause / resume', () => {
  it('pauses and resumes in place rather than restarting', () => {
    synth.speaking = true;
    expect(isCurrentlySpeaking()).toBe(true);
    expect(isSpeakingPaused()).toBe(false);
    pauseSpeaking();
    expect(isSpeakingPaused()).toBe(true);
    resumeSpeaking();
    expect(isSpeakingPaused()).toBe(false);
  });
});
