import React, { useState } from 'react';
import { Flag } from './Flag';
import { useGame } from '../context/GameContext';
import { SUBJECTS, UNITS, ARCS, MISSIONS } from '../data/gameData';
import { getVisualHtml } from '../data/visuals';
import { L, demonSVG, esc, U } from '../helpers';
import type { LearningConcept, Mission } from '../types';
import { ConceptRevision } from './ConceptRevision';
import { recommendNextLearningAction } from '../adaptiveLearning';
import { MasteryInsights } from './MasteryInsights';
import { AssessmentReview } from './AssessmentReview';
import { SpacedReview } from './SpacedReview';
import { scheduleNextConceptReview } from '../spacedRepetition';
import { calculateLearningStreak } from '../learningStreak';
import { LearningStreak } from './LearningStreak';
import { GhanaSS1ReadinessDashboard } from './GhanaSS1ReadinessDashboard';
import { ui, uiLocale, uiText } from '../data/missionUi';

export const MapScreen: React.FC = () => {
  const {
    state,
    curriculumProfile,
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
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
  const [nameInput, setNameInput] = useState('');
  const [resetArmed, setResetArmed] = useState(false);
  const [revisionTarget, setRevisionTarget] = useState<{ mission: Mission; concept: LearningConcept } | null>(null);
  const [reviewQueue, setReviewQueue] = useState<Array<{ mission: Mission; concept: LearningConcept }>>([]);
  const [reviewQueueIndex, setReviewQueueIndex] = useState(0);
  const [reviewQueueResults, setReviewQueueResults] = useState<Array<{ title: any; score: number }>>([]);
  const [reviewQueueActive, setReviewQueueActive] = useState(false);
  const [reviewQueueSummary, setReviewQueueSummary] = useState(false);

  const curSub = subject || 'cs';
  const currentSubjectData = SUBJECTS.find(s => s.id === curSub) || SUBJECTS[0];
  const titleSvgHtml = curSub === 'math' || curSub === 'math5' || curSub === 'math10' || curSub === 'math11' || curSub === 'science' || curSub === 'italian' || curSub === 'chem' || curSub === 'chem10' || curSub === 'chem11' || curSub.startsWith('hist') || curSub.startsWith('geo') || curSub.startsWith('ghcoremath') || curSub === 'ghjhs1computing' || curSub === 'ghcomputing' || curSub === 'ghcomputing2' || curSub === 'ghcomputing3' ? currentSubjectData.art : curSub === 'phys' ? getVisualHtml('titlePhys', lang) : getVisualHtml('title', lang);

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
            {isGhana ? <>Sankofa <span>Knowledge Quest</span></> : <>Circuit Hunter <span>Academy</span></>}
          </h1>
          <p className="lede">
            {L(
              isGhana
                ? [
                    'A new challenge awaits. Explore your subject, build understanding and use what you learn to help your community.',
                    'A new challenge awaits. Explore your subject, build understanding and use what you learn to help your community.'
                  ]
                : [
                    'Glitch Demons have invaded the academy. Learn your subject chapter by chapter, turn that knowledge into techniques, and drive them out.',
                    "I Demoni Glitch hanno invaso l'accademia. Impara la tua materia capitolo per capitolo, trasforma ciò che impari in tecniche e scacciali."
                  ],
              lang
            )}
          </p>

          <form className="reg" id="regf" style={{ marginTop: '16px' }} onSubmit={handleRegister}>
            <label htmlFor="nm" className="eyebrow">
              {L(isGhana ? ['Choose your explorer name', 'Choose your explorer name'] : uiText('Enter your hunter name', 'Scrivi il tuo nome da cacciatrice'), lang)}
            </label>
            <input
              id="nm"
              maxLength={20}
              autoComplete="off"
              placeholder={isGhana ? "Ama" : "Hana"}
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              autoFocus
            />
            <button className="btn" type="submit">
              {L(isGhana ? ['Begin your journey', 'Begin your journey'] : ["Join the academy", "Entra nell'accademia"], lang)}
            </button>
            <span className="muted" style={{ fontSize: '14px' }}>
              {L(
                isGhana
                  ? [
                      'Your learning journey is saved in this browser. You can return to your discoveries at any time.',
                      'Your learning journey is saved in this browser. You can return to your discoveries at any time.'
                    ]
                  : {
                      en: 'You can change the language at any time with the EN · IT · PT · ES · FR · DE buttons at the top.',
                      it: "Puoi cambiare lingua in qualsiasi momento con i pulsanti EN · IT · PT · ES · FR · DE in alto.",
                      pt: 'Você pode mudar o idioma a qualquer momento com os botões EN · IT · PT · ES · FR · DE no topo.',
                      es: 'Puedes cambiar el idioma en cualquier momento con los botones EN · IT · PT · ES · FR · DE de arriba.',
                      fr: 'Tu peux changer de langue à tout moment avec les boutons EN · IT · PT · ES · FR · DE en haut.',
                      de: 'Du kannst die Sprache jederzeit mit den Schaltflächen EN · IT · PT · ES · FR · DE oben ändern.'
                    },
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
  const indicatorDiagnosticMission = curSub === 'ghcoremath'
    ? MY.find(mission => mission.id === 'gh-core-ss1-45-indicator-diagnostic')
    : undefined;
  const indicatorDiagnosticMissionIndex = indicatorDiagnosticMission
    ? MISSIONS.indexOf(indicatorDiagnosticMission)
    : -1;

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
  const learningActivityTimestamps = learningRecords.flatMap(item => [
    ...(item.progress?.masteryAttemptHistory || []).map(attempt => attempt.attemptedAt),
    ...Object.values(item.progress?.conceptRevisionPerformance || {}).map(revision => revision.lastReviewedAt)
  ]).filter(timestamp => Number.isFinite(timestamp) && timestamp > 0);
  const learningStreak = calculateLearningStreak(learningActivityTimestamps);


  // Find next playable mission
  const nextMissionIndex = MISSIONS.findIndex(
    (m, i) => (ARCS[m.arc]?.subject || 'cs') === curSub && !cleared[m.id] && isOpen(i)
  );
  const nextMission = nextMissionIndex >= 0 ? MISSIONS[nextMissionIndex] : undefined;
  const adaptiveRecommendation = recommendNextLearningAction(MY, state.learningProgress || {}, nextMission);

  const startReviewQueue = (items: Array<{ mission: Mission; concept: LearningConcept }>) => {
    if (!items.length) return;
    setReviewQueue(items);
    setReviewQueueIndex(0);
    setReviewQueueResults([]);
    setReviewQueueActive(true);
    setReviewQueueSummary(false);
    setRevisionTarget(items[0]);
  };

  const startSingleRevision = (item: { mission: Mission; concept: LearningConcept }) => {
    setReviewQueue([item]);
    setReviewQueueIndex(0);
    setReviewQueueResults([]);
    setReviewQueueActive(false);
    setReviewQueueSummary(false);
    setRevisionTarget(item);
  };

  const handleReviewQueueContinue = () => {
    const nextIndex = reviewQueueIndex + 1;
    if (nextIndex < reviewQueue.length) {
      setReviewQueueIndex(nextIndex);
      setRevisionTarget(reviewQueue[nextIndex]);
      return;
    }
    setRevisionTarget(null);
    setReviewQueueSummary(true);
  };

  const closeReviewQueue = () => {
    setRevisionTarget(null);
    setReviewQueue([]);
    setReviewQueueIndex(0);
    setReviewQueueActive(false);
    setReviewQueueSummary(false);
  };

  const handleAdaptiveAction = () => {
    if (adaptiveRecommendation.kind === 'review') {
      startSingleRevision({ mission: adaptiveRecommendation.mission, concept: adaptiveRecommendation.concept });
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
    const reviewedAt = Date.now();
    const reviewSchedule = { ...(state.learningProgress?.[missionId]?.conceptReviewSchedule || {}) };
    const revisionScore = result.attempted ? Math.round((result.correct / result.attempted) * 100) : 0;
    setReviewQueueResults(previousResults => [
      ...previousResults,
      { title: revisionTarget.concept.title, score: revisionScore }
    ]);
    reviewSchedule[conceptId] = scheduleNextConceptReview(reviewSchedule[conceptId], revisionScore, reviewedAt);
    saveLearningProgress(missionId, {
      conceptRevisionPerformance: {
        ...existing,
        [conceptId]: {
          correct: previous.correct + result.correct,
          attempted: previous.attempted + result.attempted,
          sessions: previous.sessions + 1,
          lastReviewedAt: reviewedAt,
          baselineMasteryPercent: masteryPerformance?.attempted
            ? Math.round((masteryPerformance.correct / masteryPerformance.attempted) * 100)
            : undefined,
          postRevisionMasteryPercent: undefined,
          postRevisionAt: undefined
        }
      },
      conceptReviewSchedule: reviewSchedule
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
            {isGhana ? 'Welcome back to your journey' : L(uiText('Welcome back', 'Bentornata'), lang)}, {esc(name)}
          </div>
          <h1>
            {isGhana ? <>Sankofa <span>Knowledge Quest</span></> : <>Circuit Hunter <span>Academy</span></>}
          </h1>
          <p className="lede">
            {isMastered
              ? L(
                  isGhana
                    ? [
                        'You have completed this learning path. Keep your knowledge sharp by revisiting concepts and challenges.',
                        'You have completed this learning path. Keep your knowledge sharp by revisiting concepts and challenges.'
                      ]
                    : [
                        'Every Glitch Demon is defeated. Keep your techniques sharp in the Dojo.',
                        'Tutti i Demoni Glitch sono sconfitti. Tieni allenate le tue tecniche nel Dojo.'
                      ],
                  lang
                )
              : L(
                  isGhana
                    ? [
                        `${doneCount} of ${MY.length} missions completed. Explore each topic, practise new ideas and apply your knowledge to the next challenge.`,
                        `${doneCount} of ${MY.length} missions completed. Explore each topic, practise new ideas and apply your knowledge to the next challenge.`
                      ]
                    : [
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
                  {L(uiText('Train in the Dojo', 'Allenati nel Dojo'), lang)}
                </button>
                <button className="btn ghost" id="goCert" onClick={() => goToView('ending')}>
                  {L(uiText('See certificate', 'Vedi il diploma'), lang)}
                </button>
              </>
            ) : nextMissionIndex >= 0 ? (
              <button className="btn" id="goNext" onClick={() => openMission(nextMissionIndex)}>
                {L(U.mission, lang)} {MISSIONS[nextMissionIndex].sec}:{' '}
                {L(MISSIONS[nextMissionIndex].title, lang)}
              </button>
            ) : null}

            <button className="btn ghost" id="goRace" onClick={() => goToView('race')}>
              {L(uiText('Race your friends', 'Sfida le amiche'), lang)}
            </button>
            <button className="btn ghost" id="goTest" onClick={() => goToView('test')}>
              {L(uiText('Test Knowledge', 'Test del Sapere'), lang)}
            </button>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: titleSvgHtml }} />
      </section>

      {indicatorDiagnosticMission && (
        <GhanaSS1ReadinessDashboard
          lang={lang}
          progressByMission={state.learningProgress || {}}
          onStartDiagnostic={() => {
            if (indicatorDiagnosticMissionIndex >= 0) openMission(indicatorDiagnosticMissionIndex);
          }}
          onReviewConcept={conceptId => {
            const concept = indicatorDiagnosticMission.learning?.concepts.find(item => item.id === conceptId);
            if (concept) startSingleRevision({ mission: indicatorDiagnosticMission, concept });
          }}
        />
      )}

      <section className="learning-dashboard card" aria-label={ui(lang, 'Learning progress dashboard', 'Cruscotto dei progressi')}>
        <div className="learning-dashboard-heading">
          <div>
            <div className="eyebrow">{ui(lang, 'YOUR LEARNING JOURNEY', 'IL TUO PERCORSO')}</div>
            <h2>{ui(lang, 'Learning progress', 'Cruscotto dei progressi')}</h2>
            <p className="muted">{ui(lang, 'A course-wide view of your results and what to focus on next.', 'Una panoramica dei risultati e dei prossimi passi.')}</p>
          </div>
        </div>
        <div className="learning-dashboard-stats">
          <div className="learning-stat">
            <strong>{doneCount}/{MY.length}</strong>
            <span>{ui(lang, 'Missions cleared', 'Missioni completate')}</span>
          </div>
          <div className="learning-stat">
            <strong>{masteredCount}/{MY.length}</strong>
            <span>{ui(lang, 'Mastery passed', 'Prove superate')}</span>
          </div>
          <div className="learning-stat">
            <strong>{averageMastery === null ? '—' : averageMastery + '%'}</strong>
            <span>{ui(lang, 'Average latest score', 'Media ultimo risultato')}</span>
          </div>
          <div className="learning-stat">
            <strong>{assessedCount}</strong>
            <span>{ui(lang, 'Missions assessed', 'Missioni valutate')}</span>
          </div>
        </div>
        <LearningStreak streak={learningStreak} lang={lang} />
        <div className="learning-dashboard-grid">
          <div className="learning-dashboard-panel">
            <h3>{ui(lang, 'Concepts to strengthen', 'Concetti da rinforzare')}</h3>
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
                    <small>{concept.correct}/{concept.attempted} {ui(lang, 'correct responses', 'risposte corrette')}</small>
                    {concept.revision?.baselineMasteryPercent !== undefined && concept.revision.postRevisionMasteryPercent !== undefined && (
                      <small className="concept-revision-impact">
                        {ui(lang, 'Mastery after revision: ', 'Maestria dopo il ripasso: ')}
                        {concept.revision.postRevisionMasteryPercent}%
                        {' ('}{concept.revision.postRevisionMasteryPercent - concept.revision.baselineMasteryPercent > 0 ? '+' : ''}
                        {concept.revision.postRevisionMasteryPercent - concept.revision.baselineMasteryPercent} {ui(lang, 'pp', 'punti')}{')'}
                      </small>
                    )}
                    {concept.revision?.sessions ? (
                      <small className="concept-revision-history">
                        {concept.revision.sessions === 1
                          ? ui(lang, 'Reviewed {n} session', 'Ripassato {n} volta', concept.revision.sessions)
                          : ui(lang, 'Reviewed {n} sessions', 'Ripassato {n} volte', concept.revision.sessions)}
                        {' · '}{new Date(concept.revision.lastReviewedAt).toLocaleDateString(uiLocale(lang))}
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
                        if (mission && selectedConcept) startSingleRevision({ mission, concept: selectedConcept });
                      }}
                    >
                      {ui(lang, 'Review concept', 'Ripassa concetto')}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">{ui(lang, 'Complete a mastery assessment to discover which concepts need revision.', 'Completa una prova di maestria per vedere quali concetti ripassare.')}</p>
            )}
          </div>
          <div className="learning-dashboard-panel">
            <h3>{ui(lang, 'Recent attempts', 'Ultimi tentativi')}</h3>
            {recentAttempts.length ? (
              <ol className="learning-dashboard-history">
                {recentAttempts.map((attempt, index) => (
                  <li key={`${attempt.attemptedAt}-${index}`}>
                    <span>{L(attempt.missionTitle, lang)}</span>
                    <strong>{attempt.score}%</strong>
                    <small>{new Date(attempt.attemptedAt).toLocaleDateString(uiLocale(lang))}</small>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="muted">{ui(lang, 'Your mastery scores will appear here as you complete assessments.', 'I risultati delle prove appariranno qui.')}</p>
            )}
          </div>
        </div>
        <MasteryInsights missions={MY} progressByMission={state.learningProgress || {}} lang={lang} />
        <SpacedReview
          missions={MY}
          progressByMission={state.learningProgress || {}}
          lang={lang}
          onReviewConcept={(missionId, conceptId) => {
            const mission = MY.find(item => item.id === missionId);
            const concept = mission?.learning?.concepts.find(item => item.id === conceptId);
            if (mission && concept) startSingleRevision({ mission, concept });
          }}
          onStartReviewQueue={items => startReviewQueue(items)}
        />
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
            <span className="learning-kicker">{ui(lang, 'ADAPTIVE LEARNING', 'PERCORSO ADATTIVO')}</span>
            <strong>{ui(lang, 'Your recommended next step', 'Il tuo prossimo passo')}</strong>
            <p>
              {adaptiveRecommendation.kind === 'review' && (
                <>
                  {ui(lang, 'Strengthen ', 'Rinforza ')}
                  <b>{L(adaptiveRecommendation.concept.title, lang)}</b>
                  {adaptiveRecommendation.reason === 'revision-needs-practice'
                    ? ui(lang, ': your previous review scored {n}%. Practise it again before returning to mastery.', ': il ripasso precedente ha ottenuto il {n}%. Prova ancora prima di tornare alla prova.', adaptiveRecommendation.revisionAccuracy)
                    : (ui(lang, ': it was one of the weakest concepts in your latest mastery assessment.', ': è uno dei concetti più deboli nella tua ultima prova di maestria.'))}
                </>
              )}
              {adaptiveRecommendation.kind === 'retry' && (
                <>
                  {ui(lang, 'You scored ', 'Hai ottenuto ')}
                  <b>{adaptiveRecommendation.revisionAccuracy}%</b>
                  {ui(lang, ' in targeted revision for ', ' nel ripasso mirato di ')}
                  <b>{L(adaptiveRecommendation.concept.title, lang)}</b>
                  {ui(lang, '. Now return to the mastery assessment to check your progress.', '. Ora torna alla prova di maestria per verificare i progressi.')}
                </>
              )}
              {adaptiveRecommendation.kind === 'mission' && (
                <>{ui(lang, 'Continue with ', 'Continua con ')}<b>{L(adaptiveRecommendation.mission.title, lang)}</b>{ui(lang, ' and complete its learning pathway.', ' e completa il percorso.')}</>
              )}
              {adaptiveRecommendation.kind === 'dojo' && (
                <>{ui(lang, 'You have cleared all available missions. Keep practising in the Dojo.', 'Hai completato tutte le missioni disponibili. Continua ad allenarti nel Dojo.')}</>
              )}
            </p>
            {adaptiveRecommendation.kind === 'retry' && (
              <small className="adaptive-recommendation-reason">
                {ui(lang, 'Suggested because your revision result is strong and this mission still needs mastery.', 'Consiglio basato sul risultato del ripasso e sulla prova di maestria ancora da superare.')}
              </small>
            )}
          </div>
          <button className="btn sm" id="adaptiveNextAction" onClick={handleAdaptiveAction}>
            {adaptiveRecommendation.kind === 'review'
              ? (ui(lang, 'Review concept', 'Ripassa concetto'))
              : adaptiveRecommendation.kind === 'retry'
                ? (ui(lang, 'Retry mastery', 'Riprova maestria'))
                : adaptiveRecommendation.kind === 'mission'
                  ? (ui(lang, 'Continue mission', 'Continua missione'))
                  : (ui(lang, 'Open Dojo', 'Vai al Dojo'))}
          </button>
        </div>
      </section>

      {reviewQueueSummary && (
        <section className="review-session-summary card" aria-live="polite">
          <div className="learning-kicker">{ui(lang, 'SESSION COMPLETE', 'SESSIONE COMPLETATA')}</div>
          <h2>{ui(lang, 'Review session summary', 'Riepilogo del ripasso')}</h2>
          <p>{reviewQueueResults.length === 1
            ? ui(lang, 'You completed {n} concept.', 'Hai completato {n} concetto.', reviewQueueResults.length)
            : ui(lang, 'You completed {n} concepts.', 'Hai completato {n} concetti.', reviewQueueResults.length)}</p>
          <div className="review-session-results">
            {reviewQueueResults.map((item, index) => (
              <div className="review-session-result" key={index}>
                <span>{L(item.title, lang)}</span>
                <strong>{item.score}%</strong>
              </div>
            ))}
          </div>
          <div className="review-session-total">
            <span>{ui(lang, 'Session average', 'Punteggio medio della sessione')}</span>
            <strong>{reviewQueueResults.length
              ? Math.round(reviewQueueResults.reduce((sum, item) => sum + item.score, 0) / reviewQueueResults.length)
              : 0}%</strong>
          </div>
          <button type="button" className="btn" onClick={closeReviewQueue}>
            {ui(lang, 'Return to learning path', 'Torna al percorso')}
          </button>
        </section>
      )}

      {revisionTarget && (
        <ConceptRevision
          mission={revisionTarget.mission}
          concept={revisionTarget.concept}
          lang={lang}
          revisionPerformance={state.learningProgress?.[revisionTarget.mission.id]?.conceptRevisionPerformance?.[revisionTarget.concept.id]}
          onClose={closeReviewQueue}
          onComplete={handleRevisionComplete}
          onContinue={reviewQueueActive ? handleReviewQueueContinue : undefined}
          sessionPosition={reviewQueueActive ? reviewQueueIndex + 1 : undefined}
          sessionLength={reviewQueueActive ? reviewQueue.length : undefined}
        />
      )}

      {/* Italian CEFR Speaking & Checkpoint Banner */}
      {curSub === 'italian' && (
        <section className="card" style={{
          background: 'linear-gradient(135deg, rgba(0, 146, 70, 0.12) 0%, rgba(206, 43, 55, 0.12) 100%)',
          border: '1px solid rgba(255, 209, 102, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          padding: '18px 22px',
          marginBottom: 16
        }}>
          <div>
            <div className="eyebrow" style={{ color: '#ffd166', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Flag country="IT" />
              <span>{L(uiText('CEFR LANGUAGE ACADEMY · A1 · A2 · B1', 'ACCADEMIA DI LINGUA QCER · A1 · A2 · B1'), lang)}</span>
            </div>
            <h3 style={{ margin: '4px 0 2px', fontSize: 20 }}>
              {L(uiText('Active Italian Speaking & Pronunciation Lab', 'Laboratorio di Parlato e Pronuncia Attiva'), lang)}
            </h3>
            <p className="muted" style={{ margin: 0, fontSize: 13.5 }}>
              {L(
                ['Every mission integrates dialogue simulation, Web Speech pronunciation scoring, and oral challenges.',
                 'Ogni missione integra dialoghi al bar, valutazione fonetica con Web Speech e sfide orali.'],
                lang
              )}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              className="btn sm"
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0, 146, 70, 0.85)', borderColor: '#00c853' }}
              onClick={() => goToView('it-lab')}
            >
              🎙️ {L(uiText('Speaking Lab', 'Laboratorio Parlato'), lang)}
            </button>
            <button
              className="btn sm"
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              onClick={() => goToView('it-checkpoint')}
            >
              🎤 {L(uiText('Take Oral Trial', 'Affronta l’Esame Orale'), lang)}
            </button>
            <button
              className="btn ghost sm"
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              onClick={() => goToView('formula')}
            >
              📖 {L(uiText('Grammar Rules', 'Grammatica'), lang)}
            </button>
          </div>
        </section>
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
                {L(uiText('Unit', 'Unità'), lang)} {k + 1} · {L(u.title, lang)}
                <small>
                  {L(uiText('ch.', 'cap.'), lang)} {u.ch} · {dn}/{ms.length}
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
                {L(uiText('Chapter', 'Capitolo'), lang)} {a.n} · pp. {a.pages}
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
                    data-mission-id={m.id}
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
                      § {m.sec} · {isGhana ? m.pages : `pp. ${m.pages}`}
                    </span>
                    <h3>{L(m.title, lang)}</h3>
                    <span className="topic">{L(m.topic, lang)}</span>
                    {learning?.knowledgeCheckScore !== undefined && (
                      <small className="learning-map-progress">
                        {L(uiText('Knowledge check', 'Verifica conoscenze'), lang)} · {learning.knowledgeCheckScore}%
                      </small>
                    )}
                    {learning?.masteryScore !== undefined && (
                      <small className={`learning-map-progress ${learning.mastered ? 'mastery-map-passed' : 'mastery-map-pending'}`}>
                        {L(uiText('Mastery', 'Maestria'), lang)} · {learning.mastered
                          ? L(uiText('Passed', 'Superata'), lang)
                          : L(uiText('Not yet passed', 'Non superata'), lang)} · {learning.masteryScore}%
                      </small>
                    )}
                    {!!learning?.masteryLastAttemptWeakConcepts?.length && (
                      <small className="learning-map-progress mastery-map-pending">
                        {L(uiText('Review', 'Ripasso'), lang)} · {m.learning?.concepts
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
          {L(isGhana ? ['Knowledge discovered', 'Knowledge discovered'] : uiText('Techniques learned', 'Tecniche apprese'), lang)}
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
                  isGhana ? 'Your discoveries will appear here as you complete missions.' : 'None yet. Clear a mission to learn your first technique.',
                  isGhana ? 'Your discoveries will appear here as you complete missions.' : 'Ancora nessuna. Supera una missione per imparare la prima tecnica.'
                ],
                lang
              )}
            </span>
          )}
        </div>

        <div className="row" style={{ marginTop: '16px', justifyContent: 'space-between' }}>
          <span className="muted" style={{ fontSize: '13px' }}>
            {L(uiText('Progress is saved in this browser.', 'I progressi sono salvati in questo browser.'), lang)}
          </span>
          <button
            className="btn ghost sm"
            id="reset"
            style={resetArmed ? { borderColor: 'var(--bad)' } : {}}
            onClick={handleResetClick}
          >
            {resetArmed
              ? L(uiText('Tap again to erase everything', 'Tocca di nuovo per cancellare tutto'), lang)
              : L(uiText('Reset progress', 'Azzera i progressi'), lang)}
          </button>
        </div>
      </section>
    </>
  );
};
