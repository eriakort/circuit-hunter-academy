import React, { useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';

const STEPS: MotionStep[] = [
  { id: 'evaporation', label: 'Evaporation', caption: 'The Sun warms water in the sea, Lake Volta, rivers and ponds. Liquid water changes into invisible water vapour and rises into the air.' },
  { id: 'condensation', label: 'Condensation', caption: 'High in the sky the air is cooler. Water vapour cools and turns into tiny liquid droplets, which gather to form clouds.' },
  { id: 'precipitation', label: 'Precipitation', caption: 'When the droplets join and become too heavy to stay in the cloud, water falls back to the ground as rain.' },
  { id: 'collection', label: 'Collection and infiltration', caption: 'Rainwater runs downhill into streams, rivers and Lake Volta, or soaks into the soil to become groundwater. Then the cycle starts again.' }
];

const LAND = [
  { id: 'weathering', label: 'Weathering', detail: 'Weathering breaks rock into smaller pieces in the same place. Water, temperature changes and plant roots can help break rocks.' },
  { id: 'erosion', label: 'Erosion', detail: 'Erosion is the movement of soil or rock fragments by flowing water, wind or ice. Plant cover helps protect soil.' }
];

const HILL = 'M230 340 C300 300 380 200 470 175 C520 162 560 170 640 200 L640 340 Z';

/** Water cycle where each step animates the water actually doing that step. */
export const WaterCycleScene: React.FC = () => {
  const [land, setLand] = useState('weathering');
  const landItem = LAND.find(item => item.id === land) ?? LAND[0];

  return (
    <MotionScene
      title="The Earth Systems Explorer"
      description="Watch water move through the cycle. Each step shows the water doing what the step describes."
      steps={STEPS}
      footer={
        <div className="gh-jhs1-science-interaction">
          <strong>How does land change?</strong>
          <div className="gh-jhs1-science-choices">
            {LAND.map(item => (
              <button key={item.id} type="button" className={`gh-jhs1-science-choice${land === item.id ? ' is-active' : ''}`} aria-pressed={land === item.id} onClick={() => setLand(item.id)}>{item.label}</button>
            ))}
          </div>
          <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{landItem.label}</strong><p>{landItem.detail}</p></div>
        </div>
      }
    >
      {({ step }) => (
        <svg className="wc" viewBox="0 0 640 340" role="img" aria-label={`Water cycle: ${step.label}. ${step.caption}`}>
          <defs>
            <linearGradient id="wc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe8f3" /><stop offset="1" stopColor="#f3efe2" /></linearGradient>
            <clipPath id="wc-hill"><path d={HILL} /></clipPath>
          </defs>
          <rect width="640" height="340" fill="url(#wc-sky)" />

          {/* Sun */}
          <g className="wc-sun">
            <g stroke="#e9a93a" strokeWidth="5" strokeLinecap="round">
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i * Math.PI) / 4;
                return <line key={i} x1={78 + Math.cos(a) * 40} y1={70 + Math.sin(a) * 40} x2={78 + Math.cos(a) * 52} y2={70 + Math.sin(a) * 52} />;
              })}
            </g>
            <circle cx="78" cy="70" r="30" fill="#f2b93b" />
          </g>
          <text x="78" y="140" textAnchor="middle" className="wc-label">Sun</text>

          {/* Lake */}
          <rect x="0" y="258" width="320" height="82" fill="#3f9fc3" />
          <g stroke="#bfe3f2" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8">
            <path d="M30 278 q12 -6 24 0 t24 0" /><path d="M150 296 q12 -6 24 0 t24 0" /><path d="M60 318 q12 -6 24 0 t24 0" />
          </g>
          <text x="96" y="332" textAnchor="middle" className="wc-label wc-label--light">Lake Volta</text>

          {/* Hill with soil and groundwater cut-away */}
          <path d={HILL} fill="#8abf78" />
          <g clipPath="url(#wc-hill)">
            <rect x="230" y="262" width="410" height="78" fill="#b98a5a" />
            <rect x="230" y="318" width="410" height="22" fill="#5aa9cf" />
            <path d="M230 262 H640" stroke="#7a5534" strokeWidth="2" strokeDasharray="6 5" />
            {/* Infiltration drops */}
            <g className="wc-collect">
              {[470, 515, 560, 600].map((x, i) => (
                <circle key={x} className="wc-soak" cx={x} cy="235" r="5" fill="#2f86b6" style={{ animationDelay: `${i * 0.45}s` }} />
              ))}
            </g>
          </g>
          <text x="560" y="290" textAnchor="middle" className="wc-label wc-label--light">Soil</text>
          <text x="560" y="334" textAnchor="middle" className="wc-label wc-label--light">Groundwater</text>

          {/* Tree */}
          <path d="M575 175 v-34" stroke="#6b4a2b" strokeWidth="6" />
          <circle cx="575" cy="130" r="22" fill="#3f8a4a" />

          {/* 1 Evaporation: vapour rising from the lake */}
          <g className="wc-evap">
            <path className="wc-arrow" d="M150 232 C170 160 250 110 330 100" />
            {[60, 110, 160, 210, 250].map((x, i) => (
              <path key={x} className="wc-vapour" d={`M${x} 252 q7 -9 0 -18 q-7 -9 0 -18`} style={{ animationDelay: `${i * 0.5}s` }} />
            ))}
          </g>

          {/* 2 Condensation: vapour gathers and the cloud forms */}
          <g className="wc-cond">
            {[[-70, 40], [-40, 60], [80, 50], [60, 70], [-90, 10], [100, 20]].map(([dx, dy], i) => (
              <circle key={i} className="wc-gather" cx="420" cy="88" r="5" fill="#7fb6d2" style={{ '--dx': `${dx}px`, '--dy': `${dy}px`, animationDelay: `${i * 0.3}s` } as React.CSSProperties} />
            ))}
          </g>
          <g className="wc-cloud">
            <path d="M362 112 c-26 0 -30 -36 -4 -40 c2 -26 40 -34 54 -12 c14 -22 56 -16 58 12 c26 0 30 40 0 40 z" />
          </g>
          <text x="420" y="40" textAnchor="middle" className="wc-label">Cloud</text>

          {/* 3 Precipitation: rain falling on the hill */}
          <g className="wc-rain">
            {[385, 405, 425, 445, 465, 395, 435, 455].map((x, i) => (
              <line key={i} className="wc-drop" x1={x} y1="118" x2={x - 10} y2="150" style={{ animationDelay: `${(i % 4) * 0.25 + (i > 4 ? 0.12 : 0)}s` }} />
            ))}
          </g>

          {/* 4 Collection: run-off flowing downhill into the lake */}
          <g className="wc-collect">
            <path className="wc-runoff" d="M540 166 Q505 166 470 176 Q430 188 404 201 Q370 222 342 248 Q312 278 282 294" />
          </g>

          {/* Step badges */}
          {[[210, 160, 0], [500, 66, 1], [486, 150, 2], [330, 222, 3]].map(([x, y, i]) => (
            <g key={i} className={`wc-badge${STEPS[i].id === step.id ? ' is-active' : ''}`}>
              <circle cx={x} cy={y} r="13" />
              <text x={x} y={y + 5} textAnchor="middle">{i + 1}</text>
            </g>
          ))}
        </svg>
      )}
    </MotionScene>
  );
};
