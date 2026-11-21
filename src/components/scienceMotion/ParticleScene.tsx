import React, { useEffect, useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';

type Phase = 'solid' | 'liquid' | 'gas';

const STEPS: MotionStep[] = [
  { id: 'solid', label: 'Solid', caption: 'Solid (ice): the particles are packed tightly in a fixed pattern. They vibrate in place but cannot move around, so a solid keeps its own shape.' },
  { id: 'liquid', label: 'Liquid', caption: 'Liquid (water): the particles are still close together, but they can slide past one another. A liquid flows and takes the shape of the bottom of its container.' },
  { id: 'gas', label: 'Gas', caption: 'Gas (water vapour): the particles are far apart and move quickly in all directions, so a gas spreads out to fill the whole container.' }
];

const TEMPERATURE_FOR: Record<Phase, number> = { solid: -10, liquid: 20, gas: 110 };
const phaseFor = (temperature: number): Phase => (temperature <= 0 ? 'solid' : temperature < 100 ? 'liquid' : 'gas');

// Container in SVG units.
const BOX = { left: 150, right: 490, top: 30, bottom: 270 };
const R = 11;
const COUNT = 30;
const COLS = 6;

type Particle = { x: number; y: number; vx: number; vy: number; tx: number; ty: number };

const latticeTarget = (i: number) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const spacing = 2 * R + 1;
  const width = (COLS - 1) * spacing;
  return { tx: (BOX.left + BOX.right) / 2 - width / 2 + col * spacing, ty: BOX.bottom - R - 1 - row * spacing };
};

const createParticles = (): Particle[] =>
  Array.from({ length: COUNT }, (_, i) => {
    const { tx, ty } = latticeTarget(i);
    return { x: tx, y: ty, vx: 0, vy: 0, tx, ty };
  });

/** One physics step. Same particles in every state: only their motion changes. */
const step = (particles: Particle[], phase: Phase) => {
  for (const p of particles) {
    if (phase === 'solid') {
      // Pulled back to a fixed place in the pattern; small random kicks make it vibrate.
      p.vx += (p.tx - p.x) * 0.18 + (Math.random() - 0.5) * 1.1;
      p.vy += (p.ty - p.y) * 0.18 + (Math.random() - 0.5) * 1.1;
      p.vx *= 0.62;
      p.vy *= 0.62;
    } else if (phase === 'liquid') {
      p.vy += 0.22; // settles to the bottom
      p.vx += (Math.random() - 0.5) * 0.7;
      p.vy += (Math.random() - 0.5) * 0.5;
      p.vx *= 0.93;
      p.vy *= 0.93;
    } else {
      // Gas: keep particles moving fast in all directions.
      const speed = Math.hypot(p.vx, p.vy) || 0.01;
      const target = 4.2;
      p.vx *= 1 + (target / speed - 1) * 0.08;
      p.vy *= 1 + (target / speed - 1) * 0.08;
      if (speed < 0.5) { p.vx = (Math.random() - 0.5) * 6; p.vy = (Math.random() - 0.5) * 6; }
    }
  }
  // Particles cannot overlap; liquids also hold together loosely.
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 0.01;
      const nx = dx / d;
      const ny = dy / d;
      if (d < 2 * R) {
        const push = (2 * R - d) / 2;
        a.x -= nx * push; a.y -= ny * push; b.x += nx * push; b.y += ny * push;
        if (phase === 'gas') {
          // Elastic bounce
          const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (rel < 0) { a.vx += rel * nx; a.vy += rel * ny; b.vx -= rel * nx; b.vy -= rel * ny; }
        }
      } else if (phase === 'liquid' && d < 2 * R + 7) {
        const pull = 0.04;
        a.vx += nx * pull; a.vy += ny * pull; b.vx -= nx * pull; b.vy -= ny * pull;
      }
    }
  }
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < BOX.left + R) { p.x = BOX.left + R; p.vx = Math.abs(p.vx); }
    if (p.x > BOX.right - R) { p.x = BOX.right - R; p.vx = -Math.abs(p.vx); }
    if (p.y < BOX.top + R) { p.y = BOX.top + R; p.vy = Math.abs(p.vy); }
    if (p.y > BOX.bottom - R) { p.y = BOX.bottom - R; p.vy = phase === 'gas' ? -Math.abs(p.vy) : -Math.abs(p.vy) * 0.2; }
  }
};

const ParticleBox: React.FC<{ phase: Phase; temperature: number; playing: boolean; reducedMotion: boolean }> = ({ phase, temperature, playing, reducedMotion }) => {
  const particles = useRef<Particle[]>(createParticles());
  const circles = useRef<(SVGCircleElement | null)[]>([]);

  const draw = () => {
    particles.current.forEach((p, i) => {
      const el = circles.current[i];
      if (el) { el.setAttribute('cx', p.x.toFixed(1)); el.setAttribute('cy', p.y.toFixed(1)); }
    });
  };

  useEffect(() => {
    if (reducedMotion || !playing) {
      // Still picture: settle the model so it shows the right arrangement without moving.
      if (reducedMotion) { for (let k = 0; k < 400; k += 1) step(particles.current, phase); draw(); }
      return;
    }
    let frame = 0;
    const tick = () => { step(particles.current, phase); draw(); frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, playing, reducedMotion]);

  // Thermometer: -20 °C to 120 °C
  const level = Math.max(0, Math.min(1, (temperature + 20) / 140));
  const flame = phase === 'solid' ? 0 : phase === 'liquid' ? 0.6 : 1;

  return (
    <svg className="pm" viewBox="0 0 640 330" role="img" aria-label={`Particle model of a ${phase}: the same water particles at ${temperature} °C`}>
      {/* Container */}
      <path d={`M${BOX.left} ${BOX.top - 10} V${BOX.bottom} H${BOX.right} V${BOX.top - 10}`} fill="#fbf7ee" stroke="#5c5a50" strokeWidth="4" strokeLinejoin="round" />
      {particles.current.map((p, i) => (
        <circle key={i} ref={el => { circles.current[i] = el; }} cx={p.x} cy={p.y} r={R} fill="#2f86b6" stroke="#1d5f86" strokeWidth="1.5" />
      ))}
      {/* Burner */}
      <rect x={BOX.left + 40} y={BOX.bottom + 26} width={BOX.right - BOX.left - 80} height="10" rx="5" fill="#5c5a50" />
      <g className="pm-flame" style={{ opacity: flame, transform: `scaleY(${0.5 + flame / 2})` }}>
        {[0, 1, 2, 3, 4].map(i => {
          const x = BOX.left + 90 + i * 40;
          return <path key={i} d={`M${x} ${BOX.bottom + 24} q-10 -14 0 -24 q10 10 0 24`} fill="#f08a3a" />;
        })}
      </g>
      {phase === 'solid' && <text x={(BOX.left + BOX.right) / 2} y={BOX.bottom + 40} textAnchor="middle" className="pm-label">No heating</text>}
      {/* Thermometer */}
      <g transform="translate(560 40)">
        <rect x="-9" y="0" width="18" height="200" rx="9" fill="#fff" stroke="#5c5a50" strokeWidth="2" />
        <rect x="-5" y={4 + (1 - level) * 192} width="10" height={level * 192} rx="5" fill="#d9534f" style={{ transition: 'all .6s ease' }} />
        <circle cx="0" cy="214" r="16" fill="#d9534f" stroke="#5c5a50" strokeWidth="2" />
        {[0, 100].map(t => {
          const y = 4 + (1 - (t + 20) / 140) * 192;
          return <g key={t}><line x1="9" x2="20" y1={y} y2={y} stroke="#5c5a50" strokeWidth="2" /><text x="24" y={y + 5} className="pm-label">{t} °C</text></g>;
        })}
        <text x="0" y="262" textAnchor="middle" className="pm-temp">{temperature} °C</text>
      </g>
      <text x="70" y="60" textAnchor="middle" className="pm-state">{phase === 'solid' ? 'SOLID' : phase === 'liquid' ? 'LIQUID' : 'GAS'}</text>
      <text x="70" y="82" textAnchor="middle" className="pm-label">{phase === 'solid' ? 'ice' : phase === 'liquid' ? 'water' : 'water vapour'}</text>
    </svg>
  );
};

export const ParticleScene: React.FC = () => {
  const [temperature, setTemperature] = useState(TEMPERATURE_FOR.solid);
  const phase = phaseFor(temperature);

  return (
    <MotionScene
      title="The Materials Explorer"
      description="Heat or cool water and watch the same particles change how they are arranged and how they move. This is a model, not a scale drawing."
      steps={STEPS}
      stepId={phase}
      onStepChange={id => setTemperature(TEMPERATURE_FOR[id as Phase])}
      stepMs={6000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <label htmlFor="pm-temperature">Temperature model: <strong>{temperature} °C</strong></label>
          <input id="pm-temperature" type="range" min="-20" max="120" step="10" value={temperature} onChange={event => setTemperature(Number(event.target.value))} />
        </div>
      }
      footer="Pure water melts at 0 °C and boils at 100 °C at sea level. The particles themselves do not change: only their arrangement and movement do."
    >
      {({ playing, reducedMotion }) => <ParticleBox phase={phase} temperature={temperature} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};
