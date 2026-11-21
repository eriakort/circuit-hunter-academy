import React, { useEffect, useRef, useState } from 'react';

/**
 * Shared frame for animated Ghana Science scenes (sample redesign).
 *
 * Principles:
 * - The animation shows the process being taught, one step at a time.
 * - Steps and animation are linked: choosing a step highlights and animates
 *   that part of the picture, and the caption explains what is moving.
 * - It plays a guided tour on its own (unless the learner prefers reduced
 *   motion); Pause really stops every moving part.
 */
export type MotionStep = { id: string; label: string; caption: string };

export type MotionContext = { playing: boolean; step: MotionStep; stepIndex: number; reducedMotion: boolean };

type Props = {
  title: string;
  description: string;
  steps: MotionStep[];
  /** How long each step is shown during the guided tour. */
  stepMs?: number;
  /** Optional controlled step (e.g. driven by a slider). */
  stepId?: string;
  onStepChange?: (id: string) => void;
  /** Called when the learner takes control, so a parent can stop its own tour logic. */
  extraControls?: React.ReactNode;
  footer?: React.ReactNode;
  children: (context: MotionContext) => React.ReactNode;
};

const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(REDUCED_QUERY).matches;

/** Follows the system "reduce motion" setting, including changes made while the page is open. */
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(prefersReducedMotion);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia(REDUCED_QUERY);
    const update = () => setReduced(query.matches);
    update();
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', update);
      return () => query.removeEventListener('change', update);
    }
    return undefined;
  }, []);
  return reduced;
};

/** True while the element is on screen and the browser tab is visible; animations pause otherwise. */
const useOnScreen = (ref: React.RefObject<Element | null>) => {
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(() => typeof document === 'undefined' || document.visibilityState !== 'hidden');
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      const latest = entries[entries.length - 1];
      if (latest) setInView(latest.isIntersecting);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
  useEffect(() => {
    const update = () => setTabVisible(document.visibilityState !== 'hidden');
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  return inView && tabVisible;
};

export const MotionScene: React.FC<Props> = ({ title, description, steps, stepMs = 5000, stepId, onStepChange, extraControls, footer, children }) => {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const onScreen = useOnScreen(sectionRef);
  const [internalIndex, setInternalIndex] = useState(0);
  const [playing, setPlaying] = useState(!reducedMotion);
  const [touring, setTouring] = useState(!reducedMotion);
  const [tourStart, setTourStart] = useState(() => Date.now());
  // What actually moves: the learner pressed Play, and the scene can be seen.
  const running = playing && onScreen && !reducedMotion;

  // If the learner switches on "reduce motion" while a scene is open, stop it.
  useEffect(() => {
    if (reducedMotion) {
      setPlaying(false);
      setTouring(false);
    }
  }, [reducedMotion]);

  // Keep the step timer bar and the tour timer in step after any pause or resume.
  const wasRunning = useRef(running);
  useEffect(() => {
    if (running && !wasRunning.current) setTourStart(Date.now());
    wasRunning.current = running;
  }, [running]);

  const controlledIndex = stepId ? steps.findIndex(step => step.id === stepId) : -1;
  const stepIndex = controlledIndex >= 0 ? controlledIndex : internalIndex;
  const step = steps[stepIndex];

  const goTo = (index: number) => {
    setInternalIndex(index);
    onStepChange?.(steps[index].id);
  };

  // Guided tour: advance one step at a time, looping.
  useEffect(() => {
    if (!touring || !running) return;
    const timer = window.setTimeout(() => {
      goTo((stepIndex + 1) % steps.length);
      setTourStart(Date.now());
    }, stepMs);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touring, running, stepIndex, tourStart, stepMs, steps.length]);

  const chooseStep = (index: number) => {
    setTouring(false);
    if (!reducedMotion) setPlaying(true);
    goTo(index);
  };

  const restartTour = () => {
    goTo(0);
    setTouring(true);
    setPlaying(true);
    setTourStart(Date.now());
  };

  return (
    <section ref={sectionRef} className="ghana-science-visual motion-scene" aria-label={title} data-testid="ghana-science-visual" data-playing={running ? 'true' : 'false'}>
      <header className="ghana-science-visual__heading">
        <div>
          <span className="ghana-science-visual__kicker">SCIENCE IN MOTION</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="ghana-science-visual__controls" aria-label="Animation controls">
          <button type="button" className="ghana-science-visual__control" aria-pressed={playing} onClick={() => setPlaying(value => !value)}>
            {playing ? 'Pause' : 'Play'}
          </button>
          <button type="button" className="ghana-science-visual__control ghana-science-visual__control--secondary" onClick={restartTour}>
            Watch all steps
          </button>
        </div>
      </header>

      <div className="ghana-science-visual__art motion-scene__art" data-step={step.id}>
        {children({ playing: running, step, stepIndex, reducedMotion })}
      </div>

      <ol className="motion-scene__steps" aria-label="Steps">
        {steps.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              className={`motion-scene__step${index === stepIndex ? ' is-active' : ''}`}
              aria-pressed={index === stepIndex}
              onClick={() => chooseStep(index)}
            >
              <span className="motion-scene__num" aria-hidden="true">{index + 1}</span>
              {item.label}
              {index === stepIndex && touring && running && (
                <span key={`${stepIndex}-${tourStart}`} className="motion-scene__timer" style={{ animationDuration: `${stepMs}ms` }} aria-hidden="true" />
              )}
            </button>
          </li>
        ))}
      </ol>
      {extraControls}

      <div className="gh-jhs1-science-readout motion-scene__caption" aria-live="polite">
        <strong>{step.label}</strong>
        <p>{step.caption}</p>
      </div>
      {footer && <div className="ghana-science-visual__caption">{footer}</div>}
    </section>
  );
};
