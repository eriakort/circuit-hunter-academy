import React from 'react';
import { useGame } from '../context/GameContext';
import { RANKS, SUBJECTS } from '../data/gameData';
import { L, rankOf, nextRank, esc } from '../helpers';

export const HUD: React.FC = () => {
  const { state, view, battleContext, setLanguage, goToView, startBattle } = useGame();
  const { lang, name, xp, subject, grade, cleared } = state;
  const activeSubject = SUBJECTS.find(item => item.id === subject) || SUBJECTS[0];

  const currentRank = rankOf(xp, RANKS);
  const next = nextRank(xp, RANKS);
  const pct = next ? Math.min(100, Math.max(0, ((xp - currentRank[0]) / (next[0] - currentRank[0])) * 100)) : 100;
  const anyClear = Object.keys(cleared).length > 0;

  // Mission battles belong to Missions; dojo battles belong to Dojo.
  const isMissionsActive =
    ['map', 'scene', 'ending'].includes(view) ||
    ((view === 'battle' || view === 'result') && !battleContext?.isDojo);
  const isDojoActive =
    view === 'dojo' ||
    ((view === 'battle' || view === 'result') && !!battleContext?.isDojo);

  const navClass = (active: boolean) => `btn ghost sm${active ? ' nav-active' : ''}`;
  const currentPage = (active: boolean) => active ? 'page' as const : undefined;

  return (
    <header className="hud" id="hud">
      <button className="brand" id="hHome" onClick={() => goToView(grade === 'grade5' ? 'subjects' : 'map')}>
        CIRCUIT <b>HUNTER</b> ACADEMY
      </button>

      {grade && view !== 'grades' && view !== 'subjects' && grade === 'grade9' && subject && (
        <div className="subject-indicator" data-s={subject} aria-label={`${L(['Current subject', 'Materia attiva'], lang)}: ${L(activeSubject.name, lang)}`}>
          <span className="subject-indicator-art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: activeSubject.art }} />
          <span className="subject-indicator-copy">
            <small>{L(['GRADE 9 · CURRENT SUBJECT', 'CLASSE 3ª MEDIA · MATERIA'], lang)}</small>
            <strong>{L(activeSubject.name, lang)}</strong>
          </span>
        </div>
      )}

      <div className="hud-r">
        <button
          className={navClass(view === 'grades')}
          id="hGrade"
          aria-current={currentPage(view === 'grades')}
          onClick={() => goToView('grades')}
        >
          {L(['Change grade', 'Cambia classe'], lang)}{grade === 'grade5' ? ' · 5' : grade === 'grade9' ? ' · 9' : ''}
        </button>
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

        {grade === 'grade9' && subject && (
          <button
            className={navClass(view === 'subjects')}
            id="hSubj"
            aria-current={currentPage(view === 'subjects')}
            onClick={() => goToView('subjects')}
          >
            {L(['Subjects', 'Materie'], lang)}
          </button>
        )}

        {grade === 'grade9' && <>
        <button
          className={navClass(isMissionsActive)}
          id="hMap"
          aria-current={currentPage(isMissionsActive)}
          onClick={() => goToView('map')}
        >
          {L(['Missions', 'Missioni'], lang)}
        </button>

        <button
          className={navClass(view === 'codex')}
          id="hCodex"
          aria-current={currentPage(view === 'codex')}
          onClick={() => goToView('codex')}
        >
          {L(['Codex', 'Glossario'], lang)}
        </button>

        <button
          className={navClass(isDojoActive)}
          id="hDojo"
          aria-current={currentPage(isDojoActive)}
          disabled={!anyClear}
          onClick={() => startBattle(true)}
        >
          {L(['Dojo', 'Dojo'], lang)}
        </button>

        <button
          className={navClass(view === 'test')}
          id="hTest"
          aria-current={currentPage(view === 'test')}
          onClick={() => goToView('test')}
        >
          {L(['Test', 'Test'], lang)}
        </button>

        {name && (
          <button
            className={navClass(view === 'race')}
            id="hRace"
            aria-current={currentPage(view === 'race')}
            onClick={() => goToView('race')}
          >
            {L(['Race', 'Gara'], lang)}
          </button>
        )}
        </>}
      </div>
    </header>
  );
};
