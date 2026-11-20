import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Body = 'asteroid' | 'comet';
const BODY_DETAILS: Record<Body, { title: string; material: string; orbit: string; nearSun: string; tail: string }> = {
  asteroid: {
    title: 'Asteroid',
    material: 'Rock and metal',
    orbit: 'Many follow paths in the main asteroid belt between Mars and Jupiter; others orbit elsewhere.',
    nearSun: 'It remains a rocky body. Sunlight reflects from its surface.',
    tail: 'An ordinary asteroid does not develop a comet-like tail.'
  },
  comet: {
    title: 'Comet',
    material: 'Ice, dust and rocky material',
    orbit: 'Many comets follow highly elongated orbits, travelling far from the Sun and then returning close to it.',
    nearSun: 'Solar heating releases gas and dust, forming a glowing coma around the nucleus.',
    tail: 'Dust and ion tails are pushed generally away from the Sun by sunlight and the solar wind.'
  }
};

export const GhanaJhs3AsteroidsCometsVisual: React.FC = () => {
  const [body, setBody] = useState<Body>('asteroid');
  const details = BODY_DETAILS[body];

  return (
    <GhanaScienceVisual
      title="The Asteroid and Comet Pathfinder"
      description="Compare rocky asteroids with icy comets and explore how gravity shapes their journeys around the Sun."
      lang="en"
      caption="The paths are simplified and not drawn to scale. Never look directly at the Sun through a telescope or binoculars; solar observing needs specialist safe equipment."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Choose a Solar System visitor</h4>
        <div className="gh-jhs1-science-choices">
          <button type="button" className={body === 'asteroid' ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={body === 'asteroid'} onClick={() => setBody('asteroid')}>Asteroid</button>
          <button type="button" className={body === 'comet' ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={body === 'comet'} onClick={() => setBody('comet')}>Comet</button>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{details.title}: {details.material}</strong>
          <p><b>Orbit:</b> {details.orbit}</p>
          <p><b>When close to the Sun:</b> {details.nearSun}</p>
          <p><b>What about a tail?</b> {details.tail}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Compare the paths around the Sun</h4>
        <svg viewBox="0 0 340 220" role="img" aria-label="Diagram comparing a nearly circular asteroid path and an elongated comet path around the Sun">
          <ellipse cx="155" cy="108" rx="83" ry="67" fill="none" stroke="#6aa6d8" strokeWidth="3" strokeDasharray="5 5"/>
          <ellipse cx="155" cy="108" rx="137" ry="82" fill="none" stroke="#d5a43b" strokeWidth="3" transform="rotate(-19 155 108)"/>
          <circle cx="155" cy="108" r="17" fill="#f2b84b" stroke="#9b6a16" strokeWidth="2"/>
          <g fill="#172033" fontSize="10" fontWeight="bold"><text x="155" y="112" textAnchor="middle">Sun</text></g>
          <circle cx="237" cy="108" r="7" fill="#6aa6d8" stroke="#173d61" strokeWidth="2"/>
          <path d="M232 103l10 10m0-10l-10 10" stroke="#173d61" strokeWidth="1.5"/>
          <circle cx="27" cy="63" r="6" fill="#d5a43b" stroke="#805714" strokeWidth="2"/>
          <path d="M33 61l20-7 12-2" fill="none" stroke="#d5a43b" strokeWidth="3"/>
          <g fill="currentColor" fontSize="11"><text x="250" y="100">Asteroid path</text><text x="10" y="42">Comet path</text><text x="170" y="145">Sun</text></g>
        </svg>
        <div className="gh-jhs1-science-readout">
          <p><b>Asteroids and comets both orbit the Sun because of gravity.</b> Their paths are not identical: many comets have much more elongated orbits.</p>
          <p>The main asteroid belt lies between Mars and Jupiter, but not every asteroid is found there.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Why does a comet grow a tail?</h4>
        <ol>
          <li>A comet travels towards the Sun on its orbit.</li>
          <li>Sunlight warms its icy surface, releasing gas and dust.</li>
          <li>Gas forms a coma around the nucleus; dust and ion tails can become visible.</li>
          <li>Sunlight and the solar wind push the tails generally away from the Sun, not simply behind the comet.</li>
        </ol>
        <div className="gh-jhs1-science-readout">
          <strong>Remember</strong>
          <p>Asteroid = mainly rock and metal. Comet = ice, dust and rock. Both are smaller Solar System bodies that orbit the Sun.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};
