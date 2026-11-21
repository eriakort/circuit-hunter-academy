import React, { useEffect, useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';

export const COMET_STEPS: MotionStep[] = [
  { id: 'asteroid', label: 'Asteroid', caption: 'Asteroid: rock and metal. Many follow paths in the main asteroid belt between Mars and Jupiter; others orbit elsewhere. Close to the Sun it remains a rocky body (sunlight reflects from its surface) and an ordinary asteroid does not develop a comet-like tail.' },
  { id: 'comet', label: 'Comet', caption: 'Comet: ice, dust and rocky material. Many comets follow highly elongated orbits, travelling far from the Sun and then returning close to it. Solar heating releases gas and dust, forming a glowing coma around the nucleus.' },
  { id: 'tail', label: 'Why a tail?', caption: 'Sunlight and the solar wind push the dust and ion tails generally away from the Sun, not simply behind the comet. Watch the tail swing round as the comet passes the Sun.' }
];

const SUN = { x: 210, y: 182 };
const A = 175;
const ECC = 0.76;
const B = A * Math.sqrt(1 - ECC * ECC);
const PERIOD = 16; // seconds for the animation loop (not to scale)
const BELT = Array.from({ length: 46 }, (_, i) => ({ angle: (i * 137.5) % 360, r: 92 + ((i * 29) % 26), size: 1.4 + (i % 3) * 0.6 }));

const solveKepler = (meanAnomaly: number) => {
  let E = meanAnomaly;
  for (let i = 0; i < 6; i += 1) E -= (E - ECC * Math.sin(E) - meanAnomaly) / (1 - ECC * Math.cos(E));
  return E;
};
const cometAt = (t: number) => {
  const M = ((t / PERIOD) * 2 * Math.PI) % (2 * Math.PI);
  const E = solveKepler(M);
  // Perihelion on the left of the Sun, aphelion far to the right.
  const x = SUN.x - A * (Math.cos(E) - ECC);
  const y = SUN.y + B * Math.sin(E);
  return { x, y, r: Math.hypot(x - SUN.x, y - SUN.y) };
};
const ELLIPSE_CX = SUN.x + A * ECC;

const CometArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const belt = useRef<SVGGElement>(null);
  const comet = useRef<SVGGElement>(null);
  const ion = useRef<SVGPathElement>(null);
  const dust = useRef<SVGPathElement>(null);
  const coma = useRef<SVGCircleElement>(null);
  const clock = useRef(0);

  const draw = () => {
    const t = clock.current;
    belt.current?.setAttribute('transform', `rotate(${(t * 9) % 360} ${SUN.x} ${SUN.y})`);
    const c = cometAt(t);
    comet.current?.setAttribute('transform', `translate(${c.x.toFixed(1)} ${c.y.toFixed(1)})`);
    const dx = (c.x - SUN.x) / c.r;
    const dy = (c.y - SUN.y) / c.r;
    const length = Math.max(0, 215 - c.r) * 0.95; // tails grow as the comet nears the Sun
    // Ion tail: straight, away from the Sun. Dust tail: curved a little.
    ion.current?.setAttribute('d', `M0 0 L${(dx * length).toFixed(1)} ${(dy * length).toFixed(1)}`);
    dust.current?.setAttribute('d', `M0 0 Q${(dx * length * 0.6 - dy * 12).toFixed(1)} ${(dy * length * 0.6 + dx * 12).toFixed(1)} ${(dx * length * 0.8 - dy * 26).toFixed(1)} ${(dy * length * 0.8 + dx * 26).toFixed(1)}`);
    coma.current?.setAttribute('r', (6 + Math.max(0, 200 - c.r) * 0.06).toFixed(1));
  };

  useEffect(() => {
    if (reducedMotion) { clock.current = PERIOD * 0.06; draw(); return; }
    if (!playing) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      clock.current += (now - last) / 1000;
      last = now;
      draw();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, reducedMotion]);

  useEffect(draw, [stepId]);

  const asteroidOn = stepId === 'asteroid';
  const cometOn = stepId !== 'asteroid';
  return (
    <svg className="sm-art" viewBox="0 0 640 364" role="img" aria-label={`Orbits around the Sun. ${stepId === 'asteroid' ? 'Asteroids in a belt between Mars and Jupiter' : 'A comet on a long elongated orbit with a tail pointing away from the Sun'}.`}>
      <rect width="640" height="364" fill="#10213a" />
      {Array.from({ length: 24 }, (_, i) => <circle key={i} cx={(i * 101) % 640} cy={(i * 61 + 17) % 364} r={i % 3 === 0 ? 1.6 : 1} fill="#fff" opacity=".55" />)}

      {/* Planet orbits for scale of the picture */}
      <circle cx={SUN.x} cy={SUN.y} r="70" fill="none" stroke="#fff" strokeOpacity=".16" strokeDasharray="3 5" />
      <circle cx={SUN.x} cy={SUN.y} r="150" fill="none" stroke="#fff" strokeOpacity=".16" strokeDasharray="3 5" />
      <text x={SUN.x} y={SUN.y - 73} textAnchor="middle" className="sm-planet-label">Mars’s orbit</text>
      <text x={SUN.x} y={SUN.y - 153} textAnchor="middle" className="sm-planet-label">Jupiter’s orbit</text>

      {/* Asteroid belt */}
      <g opacity={asteroidOn ? 1 : 0.28}>
        <g ref={belt}>{BELT.map((rock, i) => <circle key={i} cx={SUN.x + rock.r * Math.cos((rock.angle * Math.PI) / 180)} cy={SUN.y + rock.r * Math.sin((rock.angle * Math.PI) / 180)} r={rock.size} fill="#b9ab98" />)}</g>
        <text x={SUN.x - 112} y={SUN.y + 118} className="sm-planet-label is-active">Asteroid belt</text>
      </g>

      {/* Comet orbit and comet */}
      <ellipse cx={ELLIPSE_CX} cy={SUN.y} rx={A} ry={B} fill="none" stroke={cometOn ? '#7fd1ff' : '#fff'} strokeOpacity={cometOn ? 0.9 : 0.15} strokeWidth={cometOn ? 2 : 1} strokeDasharray={cometOn ? undefined : '3 5'} />
      <g opacity={cometOn ? 1 : 0.25}>
        <g ref={comet}>
          <path ref={dust} fill="none" stroke="#f1d79a" strokeWidth="6" strokeLinecap="round" opacity=".55" />
          <path ref={ion} fill="none" stroke="#7fd1ff" strokeWidth="3" strokeLinecap="round" opacity=".85" />
          <circle ref={coma} r="8" fill="#e8f6ff" opacity=".45" />
          <circle r="4" fill="#fff" />
        </g>
      </g>

      {/* Sun */}
      <circle cx={SUN.x} cy={SUN.y} r="16" fill="#f2b544" />
      <circle cx={SUN.x} cy={SUN.y} r="22" fill="none" stroke="#f2b544" strokeWidth="4" opacity=".35" />
      <text x={SUN.x} y={SUN.y + 4} textAnchor="middle" className="sm-sun">Sun</text>

      {stepId === 'tail' && (
        <g>
          <path d="M30 332 H110" stroke="#f2b544" strokeWidth="4" markerEnd="url(#cm-arrow)" />
          <text x="30" y="354" className="sm-planet-label is-active">Sunlight and solar wind push outwards</text>
          <defs><marker id="cm-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#f2b544" /></marker></defs>
        </g>
      )}
    </svg>
  );
};

export const CometScene: React.FC = () => (
  <MotionScene
    title="The Asteroid and Comet Pathfinder"
    description="Compare rocky asteroids with icy comets and explore how gravity shapes their journeys around the Sun."
    steps={COMET_STEPS}
    stepMs={9000}
    footer={
      <>
        <p>The paths are simplified and not drawn to scale. Never look directly at the Sun through a telescope or binoculars; solar observing needs specialist safe equipment.</p>
        <MoreDetails summary="Asteroids and comets: compare and remember">
          <p><b>Asteroids and comets both orbit the Sun because of gravity.</b> Their paths are not identical: many comets have much more elongated orbits.</p>
          <p>The main asteroid belt lies between Mars and Jupiter, but not every asteroid is found there.</p>
          <ol>
            <li>A comet travels towards the Sun on its orbit.</li>
            <li>Sunlight warms its icy surface, releasing gas and dust.</li>
            <li>Gas forms a coma around the nucleus; dust and ion tails can become visible.</li>
            <li>Sunlight and the solar wind push the tails generally away from the Sun, not simply behind the comet.</li>
          </ol>
          <p><b>Remember:</b> Asteroid = mainly rock and metal. Comet = ice, dust and rock. Both are smaller Solar System bodies that orbit the Sun.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <CometArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);
