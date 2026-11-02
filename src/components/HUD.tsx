import React from 'react';
import { useGame } from '../context/GameContext';
import { RANKS } from '../data/gameData';
import { L, rankOf, nextRank, esc } from '../helpers';

export const HUD: React.FC = () => {
  const { state, setLanguage, goToView, startBattle } = useGame();
  const { lang, name, xp, subject, cleared } = state;

  const currentRank = rankOf(xp, RANKS);
  const next = nextRank(xp, RANKS);
  const pct = next ? Math.min(100, Math.max(0, ((xp - currentRank[0]) / (next[0] - currentRank[0])) * 100)) : 100;
  const anyClear = Object.keys(cleared).length > 0;

  return (
    <header className="hud" id="hud">
      <button className="brand" id="hHome" onClick={() => goToView('map')}>
        CIRCUIT <b>HUNTER</b> ACADEMY
      </button>

      <div className="hud-r">
        {name && (
          <div className="who-hud">
            <span className="nm">
              {esc(name)} · {xp} XP
            </span>
            <span className="rank">{L(currentRank[1], lang)}</span>
            <div className="xpbar">
              <i style={{ width: `${pct}%` }}></i>
            </div>
          </div>
        )}

        <div className="lang" role="group" aria-label="Language / Lingua">
          <button
            id="lEN"
            className={lang === 'en' ? 'on' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            id="lIT"
            className={lang === 'it' ? 'on' : ''}
            aria-pressed={lang === 'it'}
            onClick={() => setLanguage('it')}
          >
            IT
          </button>
        </div>

        {subject && (
          <button className="btn ghost sm" id="hSubj" onClick={() => goToView('subjects')}>
            {L(['Subjects', 'Materie'], lang)}
          </button>
        )}

        <button className="btn ghost sm" id="hMap" onClick={() => goToView('map')}>
          {L(['Missions', 'Missioni'], lang)}
        </button>

        <button className="btn ghost sm" id="hCodex" onClick={() => goToView('codex')}>
          {L(['Codex', 'Glossario'], lang)}
        </button>

        <button
          className="btn ghost sm"
          id="hDojo"
          disabled={!anyClear}
          onClick={() => startBattle(true)}
        >
          {L(['Dojo', 'Dojo'], lang)}
        </button>

        {name && (
          <button className="btn ghost sm" id="hRace" onClick={() => goToView('race')}>
            {L(['Race', 'Gara'], lang)}
          </button>
        )}
      </div>
    </header>
  );
};
