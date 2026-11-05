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
  const physicsCheckpointUnlocked = subject === 'phys' && ['p1m1', 'p1m2', 'p1m3', 'p1m4', 'p1m5'].every(id => !!cleared[id]);
  const csCheckpointMissions = ['a1m1', 'a1m2', 'a1m3', 'a2m1', 'a2m2', 'a2m3', 'a2m4', 'a3m1', 'a3m2', 'a3m3', 'a3m4', 'a5m1', 'a5m2', 'a5m3', 'a5m4'];
  const csCheckpointUnlocked = subject === 'cs' && grade === 'grade9' && csCheckpointMissions.every(id => !!cleared[id]);

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

      {grade && view !== 'grades' && view !== 'subjects' && grade && subject && (
        <div className="subject-indicator" data-s={subject} aria-label={`${L(['Current subject', 'Materia attiva'], lang)}: ${L(activeSubject.name, lang)}`}>
          <span className="subject-indicator-art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: activeSubject.art }} />
          <span className="subject-indicator-copy">
            <small>{L(grade === 'grade5' ? ['GRADE 5 · CURRENT SUBJECT', 'QUINTA PRIMARIA · MATERIA'] : ['GRADE 9 · CURRENT SUBJECT', 'CLASSE 3ª MEDIA · MATERIA'], lang)}</small>
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

        {grade && subject && (
          <button
            className={navClass(view === 'subjects')}
            id="hSubj"
            aria-current={currentPage(view === 'subjects')}
            onClick={() => goToView('subjects')}
          >
            {L(['Subjects', 'Materie'], lang)}
          </button>
        )}

        {grade && subject && <>
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
          className={navClass(view === 'formula')}
          id="hFormula"
          aria-current={currentPage(view === 'formula')}
          onClick={() => goToView('formula')}
        >
          {L(['Formulas', 'Formulario'], lang)}
        </button>

        {subject === 'phys' && (
          <button
            className={navClass(view === 'checkpoint')}
            id="hCheckpoint"
            aria-current={currentPage(view === 'checkpoint')}
            disabled={!physicsCheckpointUnlocked}
            title={!physicsCheckpointUnlocked ? L(['Complete the five Physics Foundations missions to unlock this checkpoint.', 'Completa le cinque missioni di Fondamenti di fisica per sbloccare questo checkpoint.'], lang) : undefined}
            onClick={() => goToView('checkpoint')}
          >
            {L(['Checkpoint', 'Checkpoint'], lang)}
          </button>
        )}

        {subject === 'cs' && grade === 'grade9' && (
          <button
            className={navClass(view === 'cs-checkpoint')}
            id="hCSCheckpoint"
            aria-current={currentPage(view === 'cs-checkpoint')}
            disabled={!csCheckpointUnlocked}
            title={!csCheckpointUnlocked ? L(['Complete the 15 Algorithm, Data, Hardware and Network foundation missions to unlock this checkpoint.', 'Completa le 15 missioni di fondamenti su algoritmi, dati, hardware e reti per sbloccare questo checkpoint.'], lang) : undefined}
            onClick={() => goToView('cs-checkpoint')}
          >
            {L(['CS Checkpoint', 'Checkpoint Informatica'], lang)}
          </button>
        )}

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
