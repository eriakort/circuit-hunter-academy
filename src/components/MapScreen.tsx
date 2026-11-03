import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { SUBJECTS, UNITS, ARCS, MISSIONS } from '../data/gameData';
import { getVisualHtml } from '../data/visuals';
import { L, demonSVG, esc, U } from '../helpers';
import type { LearningConcept, Mission } from '../types';
import { ConceptRevision } from './ConceptRevision';
import { recommendNextLearningAction } from '../adaptiveLearning';
import { MasteryInsights } from './MasteryInsights';
import { AssessmentReview } from './AssessmentReview';

export const MapScreen: React.FC = () => {
  const {
    state,
    setName,
    setUnit,
    openMission,
    goToView,
    startBattle,
    resetProgress,
    isOpen,
    myMissions,
    allCleared,
    saveLearningProgress
  } = useGame();

  const { lang, name, subject, unit, cleared, flawless } = state;
  const [nameInput, setNameInput] = useState('');
  const [resetArmed, setResetArmed] = useState(false);
  const [revisionTarget, setRevisionTarget] = useState<{ mission: Mission; concept: LearningConcept } | null>(null);

  const curSub = subject || 'cs';
  const currentSubjectData = SUBJECTS.find(s => s.id === curSub) || SUBJECTS[0];
  const titleSvgHtml = curSub === 'phys' ? getVisualHtml('titlePhys', lang) : getVisualHtml('title', lang);

  // If player hasn't entered a name yet
  if (!name) {
    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = nameInput.trim();
      if (!trimmed) return;
      setName(trimmed);
    };

    return (
      <section className="hero card">
        <div>
          <div className="eyebrow">{L(currentSubjectData.name, lang)}</div>
          <h1>
            Circuit Hunter <span>Academy</span>
          </h1>
          <p className="lede">
            {L(
              [
                'Glitch Demons have invaded the academy. Learn your subject chapter by chapter, turn that knowledge into techniques, and drive them out.',
                "I Demoni Glitch hanno invaso l'accademia. Impara la tua materia capitolo per capitolo, trasforma ciò che impari in tecniche e scacciali."
              ],
              lang
            )}
          </p>

          <form className="reg" id="regf" style={{ marginTop: '16px' }} onSubmit={handleRegister}>
            <label htmlFor="nm" className="eyebrow">
              {L(['Enter your hunter name', 'Scrivi il tuo nome da cacciatrice'], lang)}
            </label>
            <input
              id="nm"
              maxLength={20}
              autoComplete="off"
              placeholder="Hana"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              autoFocus
            />
            <button className="btn" type="submit">
              {L(["Join the academy", "Entra nell'accademia"], lang)}
            </button>
            <span className="muted" style={{ fontSize: '14px' }}>
              {L(
                [
                  'You can switch between English and Italian at any time with EN / IT at the top.',
                  "Puoi passare dall'inglese all'italiano in qualsiasi momento con EN / IT in alto."
                ],
                lang
              )}
            </span>
          </form>
        </div>

        <div dangerouslySetInnerHTML={{ __html: titleSvgHtml }} />
      </section>
    );
  }

  const MY = myMissions();
  const doneCount = MY.filter(m => cleared[m.id]).length;
  const isMastered = allCleared();
  const learningRecords = MY.map(m => ({ mission: m, progress: state.learningProgress?.[m.id] }))
    .filter(item => item.progress);
  const masteredCount = learningRecords.filter(item => item.progress?.mastered).length;
  const assessedCount = learningRecords.filter(item => item.progress?.masteryAttempts).length;
  const averageMastery = assessedCount
    ? Math.round(learningRecords.reduce((sum, item) => sum + (item.progress?.masteryScore ?? 0), 0) / assessedCount)
    : null;
  const conceptTotals = new Map<string, {
    id: string;
    missionId: string;
    title: any;
    correct: number;
    attempted: number;
    missionTitle: any;
  }>();
  MY.forEach(m => {
    const progress = state.learningProgress?.[m.id];
    m.learning?.concepts.forEach(concept => {
      const performance = progress?.masteryConceptPerformance?.[concept.id];
      if (!performance?.attempted) return;
      const key = m.id + ':' + concept.id;
      const current = conceptTotals.get(key) || {
        id: concept.id,
        missionId: m.id,
        title: concept.title,
        correct: 0,
        attempted: 0,
        missionTitle: m.title
      };
      current.correct += performance.correct;
      current.attempted += performance.attempted;
      conceptTotals.set(key, current);
    });
  });
  const weakestConcepts = Array.from(conceptTotals.values())
    .map(value => ({
      ...value,
      percent: Math.round((value.correct / value.attempted) * 100),
      revision: state.learningProgress?.[value.missionId]?.conceptRevisionPerformance?.[value.id]
    }))
    .sort((a, b) => a.percent - b.percent || b.attempted - a.attempted)
    .slice(0, 3);
  const recentAttempts = learningRecords.flatMap(item =>
    (item.progress?.masteryAttemptHistory || []).map(attempt => ({
      ...attempt, missionTitle: item.mission.title
    }))
  ).sort((a, b) => b.attemptedAt - a.attemptedAt).slice(0, 5);

  // Find next playable mission
  const nextMissionIndex = MISSIONS.findIndex(
    (m, i) => (ARCS[m.arc]?.subject || 'cs') === curSub && !cleared[m.id] && isOpen(i)
  );
  const nextMission = nextMissionIndex >= 0 ? MISSIONS[nextMissionIndex] : undefined;
  const adaptiveRecommendation = recommendNextLearningAction(MY, state.learningProgress || {}, nextMission);

  const handleAdaptiveAction = () => {
    if (adaptiveRecommendation.kind === 'review') {
      setRevisionTarget({ mission: adaptiveRecommendation.mission, concept: adaptiveRecommendation.concept });
      return;
    }
    if (adaptiveRecommendation.kind === 'retry' || adaptiveRecommendation.kind === 'mission') {
      openMission(MISSIONS.indexOf(adaptiveRecommendation.mission));
      return;
    }
    startBattle(true);
  };

  const handleRevisionComplete = (result: { correct: number; attempted: number }) => {
    if (!revisionTarget) return;
    const missionId = revisionTarget.mission.id;
    const conceptId = revisionTarget.concept.id;
    const existing = state.learningProgress?.[missionId]?.conceptRevisionPerformance || {};
    const previous = existing[conceptId] || { correct: 0, attempted: 0, sessions: 0, lastReviewedAt: 0 };
    const masteryPerformance = state.learningProgress?.[missionId]?.masteryConceptPerformance?.[conceptId];
    saveLearningProgress(missionId, {
      conceptRevisionPerformance: {
        ...existing,
        [conceptId]: {
          correct: previous.correct + result.correct,
          attempted: previous.attempted + result.attempted,
          sessions: previous.sessions + 1,
          lastReviewedAt: Date.now(),
          baselineMasteryPercent: masteryPerformance?.attempted
            ? Math.round((masteryPerformance.correct / masteryPerformance.attempted) * 100)
            : undefined,
          postRevisionMasteryPercent: undefined,
          postRevisionAt: undefined
        }
      }
    });
  };

  const handleResetClick = () => {
    if (!resetArmed) {
      setResetArmed(true);
      return;
    }
    resetProgress();
    setResetArmed(false);
  };

  return (
    <>
      <section className="hero card">
        <div>
          <div className="eyebrow">
            {L(['Welcome back', 'Bentornata'], lang)}, {esc(name)}
          </div>
          <h1>
            Circuit Hunter <span>Academy</span>
          </h1>
          <p className="lede">
            {isMastered
              ? L(
                  [
                    'Every Glitch Demon is defeated. Keep your techniques sharp in the Dojo.',
                    'Tutti i Demoni Glitch sono sconfitti. Tieni allenate le tue tecniche nel Dojo.'
                  ],
                  lang
                )
              : L(
                  [
                    `${doneCount} of ${MY.length} missions cleared. The units are the tabs below; each arc is one chapter, and every arc's first mission is open, so you can start from the chapter you're studying in class.`,
                    `${doneCount} missioni superate su ${MY.length}. Le unità sono le schede qui sotto; ogni arco è un capitolo, e la prima missione di ogni arco è già aperta: puoi partire dal capitolo che state studiando in classe.`
                  ],
                  lang
                )}
          </p>

          <div className="row" style={{ marginTop: '14px' }}>
            {isMastered ? (
              <>
                <button className="btn" id="goDojo" onClick={() => startBattle(true)}>
                  {L(['Train in the Dojo', 'Allenati nel Dojo'], lang)}
                </button>
                <button className="btn ghost" id="goCert" onClick={() => goToView('ending')}>
                  {L(['See certificate', 'Vedi il diploma'], lang)}
                </button>
              </>
            ) : nextMissionIndex >= 0 ? (
              <button className="btn" id="goNext" onClick={() => openMission(nextMissionIndex)}>
                {L(U.mission, lang)} {MISSIONS[nextMissionIndex].sec}:{' '}
                {L(MISSIONS[nextMissionIndex].title, lang)}
              </button>
            ) : null}

            <button className="btn ghost" id="goRace" onClick={() => goToView('race')}>
              {L(['Race your friends', 'Sfida le amiche'], lang)}
            </button>
            <button className="btn ghost" id="goTest" onClick={() => goToView('test')}>
              {L(['Test Knowledge', 'Test del Sapere'], lang)}
            </button>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: titleSvgHtml }} />
      </section>

      <section className="learning-dashboard card" aria-label={lang === 'it' ? 'Cruscotto dei progressi' : 'Learning progress dashboard'}>
        <div className="learning-dashboard-heading">
          <div>
            <div className="eyebrow">{lang === 'it' ? 'IL TUO PERCORSO' : 'YOUR LEARNING JOURNEY'}</div>
            <h2>{lang === 'it' ? 'Cruscotto dei progressi' : 'Learning progress'}</h2>
            <p className="muted">{lang === 'it' ? 'Una panoramica dei risultati e dei prossimi passi.' : 'A course-wide view of your results and what to focus on next.'}</p>
          </div>
        </div>
        <div className="learning-dashboard-stats">
          <div className="learning-stat">
            <strong>{doneCount}/{MY.length}</strong>
            <span>{lang === 'it' ? 'Missioni completate' : 'Missions cleared'}</span>
          </div>
          <div className="learning-stat">
            <strong>{masteredCount}/{MY.length}</strong>
            <span>{lang === 'it' ? 'Prove superate' : 'Mastery passed'}</span>
          </div>
          <div className="learning-stat">
            <strong>{averageMastery === null ? '—' : averageMastery + '%'}</strong>
            <span>{lang === 'it' ? 'Media ultimo risultato' : 'Average latest score'}</span>
          </div>
          <div className="learning-stat">
            <strong>{assessedCount}</strong>
            <span>{lang === 'it' ? 'Missioni valutate' : 'Missions assessed'}</span>
          </div>
        </div>
        <div className="learning-dashboard-grid">
          <div className="learning-dashboard-panel">
            <h3>{lang === 'it' ? 'Concetti da rinforzare' : 'Concepts to strengthen'}</h3>
            {weakestConcepts.length ? (
              <div className="learning-dashboard-concepts">
                {weakestConcepts.map(concept => (
                  <div className="learning-dashboard-concept" key={concept.missionId + ':' + concept.id}>
                    <div className="learning-dashboard-concept-title">
                      <strong>{L(concept.title, lang)}</strong>
                      <span>{concept.percent}%</span>
                    </div>
                    <div className="learning-dashboard-track" role="img" aria-label={`${concept.percent}% correct`}>
                      <i style={{ width: `${concept.percent}%` }} />
                    </div>
                    <small>{concept.correct}/{concept.attempted} {lang === 'it' ? 'risposte corrette' : 'correct responses'}</small>
                    {concept.revision?.baselineMasteryPercent !== undefined && concept.revision.postRevisionMasteryPercent !== undefined && (
                      <small className="concept-revision-impact">
                        {lang === 'it' ? 'Maestria dopo il ripasso: ' : 'Mastery after revision: '}
                        {concept.revision.postRevisionMasteryPercent}%
                        {' ('}{concept.revision.postRevisionMasteryPercent - concept.revision.baselineMasteryPercent > 0 ? '+' : ''}
                        {concept.revision.postRevisionMasteryPercent - concept.revision.baselineMasteryPercent} {lang === 'it' ? 'punti' : 'pp'}{')'}
                      </small>
                    )}
                    {concept.revision?.sessions ? (
                      <small className="concept-revision-history">
                        {lang === 'it'
                          ? `Ripassato ${concept.revision.sessions} ${concept.revision.sessions === 1 ? 'volta' : 'volte'}`
                          : `Reviewed ${concept.revision.sessions} ${concept.revision.sessions === 1 ? 'session' : 'sessions'}`}
                        {' · '}{new Date(concept.revision.lastReviewedAt).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-CA')}
                      </small>
                    ) : null}
                    <small className="concept-revision-mission">{L(concept.missionTitle, lang)}</small>
                    <button
                      type="button"
                      className="btn ghost sm concept-revision-launch"
                      aria-label={`Review concept: ${L(concept.title, lang)}`}
                      onClick={() => {
                        const mission = MY.find(item => item.id === concept.missionId);
                        const selectedConcept = mission?.learning?.concepts.find(item => item.id === concept.id);
                        if (mission && selectedConcept) setRevisionTarget({ mission, concept: selectedConcept });
                      }}
                    >
                      {lang === 'it' ? 'Ripassa concetto' : 'Review concept'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">{lang === 'it' ? 'Completa una prova di maestria per vedere quali concetti ripassare.' : 'Complete a mastery assessment to discover which concepts need revision.'}</p>
            )}
          </div>
          <div className="learning-dashboard-panel">
            <h3>{lang === 'it' ? 'Ultimi tentativi' : 'Recent attempts'}</h3>
            {recentAttempts.length ? (
              <ol className="learning-dashboard-history">
                {recentAttempts.map((attempt, index) => (
                  <li key={`${attempt.attemptedAt}-${index}`}>
                    <span>{L(attempt.missionTitle, lang)}</span>
                    <strong>{attempt.score}%</strong>
                    <small>{new Date(attempt.attemptedAt).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-CA')}</small>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="muted">{lang === 'it' ? 'I risultati delle prove appariranno qui.' : 'Your mastery scores will appear here as you complete assessments.'}</p>
            )}
          </div>
        </div>
        <MasteryInsights missions={MY} progressByMission={state.learningProgress || {}} lang={lang} />
        <AssessmentReview
          missions={MY}
          progressByMission={state.learningProgress || {}}
          lang={lang}
          onReviewConcept={(missionId, conceptId) => {
            const mission = MY.find(item => item.id === missionId);
            const concept = mission?.learning?.concepts.find(item => item.id === conceptId);
            if (mission && concept) setRevisionTarget({ mission, concept });
          }}
        />
        <div className="learning-dashboard-next adaptive-recommendation" data-recommendation={adaptiveRecommendation.kind}>
          <div>
            <span className="learning-kicker">{lang === 'it' ? 'PERCORSO ADATTIVO' : 'ADAPTIVE LEARNING'}</span>
            <strong>{lang === 'it' ? 'Il tuo prossimo passo' : 'Your recommended next step'}</strong>
            <p>
              {adaptiveRecommendation.kind === 'review' && (
                <>
                  {lang === 'it' ? 'Rinforza ' : 'Strengthen '}
                  <b>{L(adaptiveRecommendation.concept.title, lang)}</b>
                  {adaptiveRecommendation.reason === 'revision-needs-practice'
                    ? (lang === 'it' ? `: il ripasso precedente ha ottenuto il ${adaptiveRecommendation.revisionAccuracy}%. Prova ancora prima di tornare alla prova.` : `: your previous review scored ${adaptiveRecommendation.revisionAccuracy}%. Practise it again before returning to mastery.`)
                    : (lang === 'it' ? ': è uno dei concetti più deboli nella tua ultima prova di maestria.' : ': it was one of the weakest concepts in your latest mastery assessment.')}
                </>
              )}
              {adaptiveRecommendation.kind === 'retry' && (
                <>
                  {lang === 'it' ? 'Hai ottenuto ' : 'You scored '}
                  <b>{adaptiveRecommendation.revisionAccuracy}%</b>
                  {lang === 'it' ? ' nel ripasso mirato di ' : ' in targeted revision for '}
                  <b>{L(adaptiveRecommendation.concept.title, lang)}</b>
                  {lang === 'it' ? '. Ora torna alla prova di maestria per verificare i progressi.' : '. Now return to the mastery assessment to check your progress.'}
                </>
              )}
              {adaptiveRecommendation.kind === 'mission' && (
                <>{lang === 'it' ? 'Continua con ' : 'Continue with '}<b>{L(adaptiveRecommendation.mission.title, lang)}</b>{lang === 'it' ? ' e completa il percorso.' : ' and complete its learning pathway.'}</>
              )}
              {adaptiveRecommendation.kind === 'dojo' && (
                <>{lang === 'it' ? 'Hai completato tutte le missioni disponibili. Continua ad allenarti nel Dojo.' : 'You have cleared all available missions. Keep practising in the Dojo.'}</>
              )}
            </p>
            {adaptiveRecommendation.kind === 'retry' && (
              <small className="adaptive-recommendation-reason">
                {lang === 'it' ? 'Consiglio basato sul risultato del ripasso e sulla prova di maestria ancora da superare.' : 'Suggested because your revision result is strong and this mission still needs mastery.'}
              </small>
            )}
          </div>
          <button className="btn sm" id="adaptiveNextAction" onClick={handleAdaptiveAction}>
            {adaptiveRecommendation.kind === 'review'
              ? (lang === 'it' ? 'Ripassa concetto' : 'Review concept')
              : adaptiveRecommendation.kind === 'retry'
                ? (lang === 'it' ? 'Riprova maestria' : 'Retry mastery')
                : adaptiveRecommendation.kind === 'mission'
                  ? (lang === 'it' ? 'Continua missione' : 'Continue mission')
                  : (lang === 'it' ? 'Vai al Dojo' : 'Open Dojo')}
          </button>
        </div>
      </section>

      {revisionTarget && (
        <ConceptRevision
          mission={revisionTarget.mission}
          concept={revisionTarget.concept}
          lang={lang}
          revisionPerformance={state.learningProgress?.[revisionTarget.mission.id]?.conceptRevisionPerformance?.[revisionTarget.concept.id]}
          onClose={() => setRevisionTarget(null)}
          onComplete={handleRevisionComplete}
        />
      )}

      {/* Units tabs navigation */}
      <nav className="units" aria-label="Units">
        {UNITS.map((u, ui) => ({ u, ui }))
          .filter(x => (x.u.subject || 'cs') === curSub)
          .map(({ u, ui }, k) => {
            const ms = MISSIONS.filter(m => (ARCS[m.arc]?.unit || 0) === ui);
            const dn = ms.filter(m => cleared[m.id]).length;
            const isSelected = (unit || 0) === ui;

            return (
              <button
                key={ui}
                data-u={ui}
                className={isSelected ? 'on' : ''}
                aria-pressed={isSelected}
                onClick={() => setUnit(ui)}
              >
                {L(['Unit', 'Unità'], lang)} {k + 1} · {L(u.title, lang)}
                <small>
                  {L(['ch.', 'cap.'], lang)} {u.ch} · {dn}/{ms.length}
                </small>
              </button>
            );
          })}
      </nav>

      {/* Arcs / chapters for current unit */}
      {ARCS.map((a, ai) => {
        if ((a.unit || 0) !== (unit || 0) || (a.subject || 'cs') !== curSub) return null;
        const ms = MISSIONS.map((m, i) => ({ m, i })).filter(({ m }) => m.arc === ai);

        return (
          <section className="arc" key={ai}>
            <div className="arc-h">
              <span className="n">{a.n}</span>
              <h2>{L(a.title, lang)}</h2>
              <span className="pg">
                {L(['Chapter', 'Capitolo'], lang)} {a.n} · pp. {a.pages}
              </span>
            </div>

            <div className="missions">
              {ms.map(({ m, i }) => {
                const open = isOpen(i);
                const isCleared = !!cleared[m.id];
                const isFlawless = !!flawless[m.id];
                const learning = state.learningProgress?.[m.id];

                return (
                  <button
                    key={m.id}
                    className={`mcard ${isCleared ? 'cleared' : ''}`}
                    data-i={i}
                    disabled={!open}
                    onClick={() => openMission(i)}
                  >
                    <div
                      className="dm"
                      dangerouslySetInnerHTML={{
                        __html: demonSVG(m.hue, m.horns, m.eyes, 'dm')
                      }}
                    />
                    <span className="sec">
                      § {m.sec} · pp. {m.pages}
                    </span>
                    <h3>{L(m.title, lang)}</h3>
                    <span className="topic">{L(m.topic, lang)}</span>
                    {learning?.knowledgeCheckScore !== undefined && (
                      <small className="learning-map-progress">
                        {L(['Knowledge check', 'Verifica conoscenze'], lang)} · {learning.knowledgeCheckScore}%
                      </small>
                    )}
                    {learning?.masteryScore !== undefined && (
                      <small className={`learning-map-progress ${learning.mastered ? 'mastery-map-passed' : 'mastery-map-pending'}`}>
                        {L(['Mastery', 'Maestria'], lang)} · {learning.mastered
                          ? L(['Passed', 'Superata'], lang)
                          : L(['Not yet passed', 'Non superata'], lang)} · {learning.masteryScore}%
                      </small>
                    )}
                    {!!learning?.masteryLastAttemptWeakConcepts?.length && (
                      <small className="learning-map-progress mastery-map-pending">
                        {L(['Review', 'Ripasso'], lang)} · {m.learning?.concepts
                          .filter(concept => learning.masteryLastAttemptWeakConcepts?.includes(concept.id))
                          .map(concept => L(concept.title, lang)).join(', ')}
                      </small>
                    )}

                    <span className={`badge ${isCleared ? 'ok' : open ? 'go' : 'lock'}`}>
                      {isCleared
                        ? L(isFlawless ? U.flawless : U.cleared, lang)
                        : open
                        ? L(U.ready, lang)
                        : L(U.locked, lang)}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Techniques learned & Reset */}
      <section className="card">
        <div className="eyebrow" style={{ marginBottom: '8px' }}>
          {L(['Techniques learned', 'Tecniche apprese'], lang)}
        </div>
        <div className="techlist">
          {doneCount ? (
            MY.filter(m => cleared[m.id]).map(m => (
              <div key={m.id}>{L(m.tech, lang)}</div>
            ))
          ) : (
            <span className="muted">
              {L(
                [
                  'None yet. Clear a mission to learn your first technique.',
                  'Ancora nessuna. Supera una missione per imparare la prima tecnica.'
                ],
                lang
              )}
            </span>
          )}
        </div>

        <div className="row" style={{ marginTop: '16px', justifyContent: 'space-between' }}>
          <span className="muted" style={{ fontSize: '13px' }}>
            {L(['Progress is saved in this browser.', 'I progressi sono salvati in questo browser.'], lang)}
          </span>
          <button
            className="btn ghost sm"
            id="reset"
            style={resetArmed ? { borderColor: 'var(--bad)' } : {}}
            onClick={handleResetClick}
          >
            {resetArmed
              ? L(['Tap again to erase everything', 'Tocca di nuovo per cancellare tutto'], lang)
              : L(['Reset progress', 'Azzera i progressi'], lang)}
          </button>
        </div>
      </section>
    </>
  );
};
