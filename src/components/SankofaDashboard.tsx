import React from 'react';
import { useGame } from '../context/GameContext';
import { getCurriculum } from '../data/curricula';
import { getSankofaRank, getNextSankofaRank, getSankofaRankProgress, SANKOFA_REGIONS, SANKOFA_THEME } from '../data/sankofaTheme';
import { MapScreen } from './MapScreen';

export const SankofaDashboard: React.FC = () => {
  const { state, curriculumProfile } = useGame();
  const curriculum = getCurriculum(curriculumProfile.activeCurriculumId);
  const isGhana = curriculum?.countryCode === 'GH';
  if (!isGhana) return <MapScreen />;

  const rank = getSankofaRank(state.xp);
  const nextRank = getNextSankofaRank(state.xp);
  const progress = getSankofaRankProgress(state.xp);
  const clearedCount = Object.values(state.cleared).filter(Boolean).length;

  return (
    <div className="sankofa-experience" data-testid="sankofa-experience">
      <section className="sankofa-world-banner" aria-labelledby="sankofa-title">
        <div className="sankofa-banner-copy">
          <div className="sankofa-kicker">🇬🇭 GHANA · NaCCA LEARNING JOURNEY</div>
          <h1 id="sankofa-title">{SANKOFA_THEME.name}</h1>
          <p>{SANKOFA_THEME.tagline}</p>
          <div className="sankofa-identity">
            <span className="sankofa-bird" aria-hidden="true">↶</span>
            <span>Knowledge Seeker</span>
            <span aria-hidden="true">·</span>
            <span>{rank.title}</span>
          </div>
        </div>
        <div className="sankofa-emblem" aria-hidden="true">
          <span>↶</span>
          <small>SANKOFA</small>
        </div>
      </section>

      <section className="sankofa-progress-panel" aria-label="Sankofa learner progression">
        <div className="sankofa-progress-heading">
          <div>
            <span className="sankofa-kicker">YOUR JOURNEY</span>
            <h2>{rank.title}</h2>
            <p>{rank.description}</p>
          </div>
          <div className="sankofa-xp"><strong>{state.xp}</strong><span>Wisdom points</span></div>
        </div>
        <div className="sankofa-progress-track" role="progressbar" aria-label="Progress to next learner rank" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
          <span style={{ width: progress + '%' }} />
        </div>
        <div className="sankofa-progress-foot">
          <span>{clearedCount} missions completed</span>
          <span>{nextRank ? nextRank.threshold - state.xp + ' points to ' + nextRank.title : 'Highest rank reached'}</span>
        </div>
      </section>

      <section className="sankofa-regions" aria-labelledby="sankofa-regions-title">
        <div className="sankofa-section-heading">
          <div>
            <span className="sankofa-kicker">EXPLORE THE LANDS</span>
            <h2 id="sankofa-regions-title">Your world of discovery</h2>
          </div>
          <span className="sankofa-map-mark" aria-hidden="true">✧</span>
        </div>
        <div className="sankofa-region-grid">
          {SANKOFA_REGIONS.map((region, index) => (
            <article className={'sankofa-region sankofa-region-' + (index + 1)} key={region.id} data-region={region.id}>
              <div className="sankofa-region-symbol" aria-hidden="true">{region.symbol}</div>
              <div className="sankofa-region-copy">
                <h3>{region.title}</h3>
                <span>{region.subtitle}</span>
                <p>{region.description}</p>
                <small>{region.subjects.join(' · ')}</small>
              </div>
            </article>
          ))}
        </div>
        <p className="sankofa-cultural-note">A world inspired by Ghana’s diverse landscapes and communities. Each cultural reference will be presented with its own context and origins.</p>
      </section>

      <div className="sankofa-missions-heading">
        <span className="sankofa-kicker">THE NEXT STEP</span>
        <h2>Continue your learning journey</h2>
      </div>
      <MapScreen />
    </div>
  );
};

export default SankofaDashboard;
