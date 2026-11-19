import React, { useState } from 'react';
import type { Language } from '../types';

type Props = {
  title: string;
  description: string;
  lang: Language;
  caption?: string;
  children: React.ReactNode;
};

/**
 * Lightweight shell for Ghana JHS Science diagrams and simulations.
 *
 * Artwork remains ordinary local React/SVG content. Animations are opt-in:
 * child SVG elements can use the gh-science-motion class and respond to the
 * frame's data-playing attribute. The visual starts paused for predictable,
 * low-bandwidth classroom use and respects the learner's reduced-motion
 * preference through the shared stylesheet.
 */
export const GhanaScienceVisual: React.FC<Props> = ({
  title,
  description,
  lang,
  caption,
  children
}) => {
  const [playing, setPlaying] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const isItalian = lang === 'it';

  const replay = () => {
    setPlaying(false);
    setReplayKey(key => key + 1);
    // Start again after remounting the illustration subtree.
    setPlaying(true);
  };

  return (
    <section className="ghana-science-visual" aria-label={title} data-testid="ghana-science-visual">
      <header className="ghana-science-visual__heading">
        <div>
          <span className="ghana-science-visual__kicker">
            {isItalian ? 'ESPLORAZIONE SCIENTIFICA' : 'SCIENCE EXPLORER'}
          </span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="ghana-science-visual__controls" aria-label={isItalian ? 'Controlli animazione' : 'Animation controls'}>
          <button
            type="button"
            className="ghana-science-visual__control"
            aria-pressed={playing}
            onClick={() => setPlaying(value => !value)}
          >
            {playing
              ? (isItalian ? 'Pausa' : 'Pause')
              : (isItalian ? 'Riproduci' : 'Play')}
          </button>
          <button type="button" className="ghana-science-visual__control ghana-science-visual__control--secondary" onClick={replay}>
            {isItalian ? 'Ricomincia' : 'Replay'}
          </button>
        </div>
      </header>
      <div
        key={replayKey}
        className="ghana-science-visual__art"
        data-playing={playing ? 'true' : 'false'}
        aria-live="off"
      >
        {children}
      </div>
      {caption && <p className="ghana-science-visual__caption">{caption}</p>}
      <p className="ghana-science-visual__hint">
        {isItalian
          ? 'Puoi mettere in pausa o ripetere la dimostrazione in qualsiasi momento.'
          : 'Pause or replay the demonstration whenever you need.'}
      </p>
    </section>
  );
};
