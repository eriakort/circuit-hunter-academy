import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { getVisualHtml } from '../data/visuals';
import { ARCS } from '../data/gameData';
import { runMiniGame } from '../data/miniGames';
import { L, CODE, fill, demonSVG, SENSEI, YOU, esc, U, GUIDE } from '../helpers';
import { LearningPathway } from './LearningPathway';
import { PhysicsLab } from './PhysicsLab';
import { MathLab } from './MathLab';
import { MathGeometryLab } from './MathGeometryLab';
import { MathAdvancedLab } from './MathAdvancedLab';
import { ComputerScienceLab } from './ComputerScienceLab';
import { GhanaComputingLab } from './GhanaComputingLab';
import { ChemistryLab } from './ChemistryLab';
import { ScienceLab } from './ScienceLab';
import { MOTION_SCENES } from './scienceMotion/registry';
import { ItalianLab } from './ItalianLab';
import { HistoryLab } from './HistoryLab';
import { GeographyLab } from './GeographyLab';
import { speakItalian } from '../speech/speechEngine';
import { scheduleNextConceptReview } from '../spacedRepetition';
import { createAssessmentQuestionVariantIndexes, resolveAssessmentQuestions } from '../learningAssessment';
import { HARDWARE_LEARNING_PILOT } from '../data/learningPilot';
import { BreakGame } from './BreakGame';
import { BREAK_XP, buildBreakGame, shouldOfferBreak } from '../data/breakGames';
import { ui } from '../data/missionUi';

const SANKOFA_GUIDE_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="The Elder Guide"><circle cx="40" cy="40" r="37" fill="#174b36" stroke="#d5a43b" stroke-width="3"/><path d="M19 67c2-14 10-21 21-21s19 7 21 21" fill="#d5a43b"/><circle cx="40" cy="31" r="13" fill="#f2e8d5"/><path d="M26 29c2-15 26-19 29 1-8-5-19-6-29-1" fill="#282a27"/></svg>';
const SANKOFA_EXPLORER_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="Knowledge Seeker"><circle cx="40" cy="40" r="37" fill="#293b60" stroke="#d5a43b" stroke-width="3"/><path d="M17 68c3-16 12-23 23-23s20 7 23 23" fill="#b9573f"/><circle cx="40" cy="31" r="13" fill="#d5a43b"/></svg>';
const SANKOFA_CHALLENGE_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="Learning challenge"><circle cx="40" cy="40" r="36" fill="#b9573f" stroke="#d5a43b" stroke-width="3"/><path d="M27 24h26v9H42v7h11v9H42v7H31V39h11v-6H27z" fill="#f2e8d5"/></svg>';

export const MissionScreen: React.FC = () => {
  const {
    state,
    curriculumProfile,
    currentMission,
    currentSceneIndex,
    nextScene,
    prevScene,
    inMissionFirstTime,
    award,
    addXP,
    saveLearningProgress
  } = useGame();

  const { lang, name } = state;
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
  const ActiveMotionScene = MOTION_SCENES[currentMission.id];
  const sc = currentMission.scenes[currentSceneIndex];
  const masteryAssessment = currentMission.learning?.masteryAssessment;
  const [canProceed, setCanProceed] = useState(false);
  const [guidedIndex, setGuidedIndex] = useState(0);
  const [guidedHintVisible, setGuidedHintVisible] = useState(false);
  const [guidedFeedback, setGuidedFeedback] = useState<{ correct: boolean; why: any } | null>(null);
  const [guidedCompletions, setGuidedCompletions] = useState<Record<string, boolean>>({});
  const [independentIndex, setIndependentIndex] = useState(0);
  const [independentFeedback, setIndependentFeedback] = useState<{ correct: boolean; why: any } | null>(null);
  const [independentCompletions, setIndependentCompletions] = useState<Record<string, boolean>>({});
  const [knowledgeIndex, setKnowledgeIndex] = useState(0);
  const [knowledgeFeedback, setKnowledgeFeedback] = useState<boolean | null>(null);
  const [knowledgeMissed, setKnowledgeMissed] = useState<Record<number, boolean>>({});
  const [masteryIndex, setMasteryIndex] = useState(0);
  const [masteryAnswers, setMasteryAnswers] = useState<number[]>([]);
  const [masteryFeedback, setMasteryFeedback] = useState<{ score: number; passed: boolean; attempt: number } | null>(null);
  const [masteryStarted, setMasteryStarted] = useState(false);
  const [masteryVariantIndexes, setMasteryVariantIndexes] = useState<number[]>(() => createAssessmentQuestionVariantIndexes(masteryAssessment));
  const gameContainerRef = useRef<HTMLDivElement>(null);
  // Study break: offered after every few study scenes, once per scene per visit.
  const [breakState, setBreakState] = useState<{ at: number; game: ReturnType<typeof buildBreakGame> } | null>(null);
  const breaksSeen = useRef<Set<string>>(new Set());

  // Scene gating check
  const isGatedType = [
    'order',
    'sort',
    'build',
    'fde',
    'journey',
    'robot',
    'bits',
    'ascii',
    'rgb',
    'pwd',
    'format',
    'sheet',
    'trace',
    'predict',
    'gates',
    'stackq',
    'vectors',
    'torque',
    'fluids',
    'dataviz',
    'coordhunt',
    'timeline',
    'balancer'
  ].includes(sc?.type || '') || sc?.init === 'board' || sc?.init === 'powercut' || !!sc?.needDone;

  const isGated = isGatedType && inMissionFirstTime();

  useEffect(() => {
    // CSS animations are switched off by the stylesheet's reduced-motion rule; SMIL (animateMotion) needs pausing here.
    if (typeof window === 'undefined' || !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll<SVGSVGElement>('.visual svg').forEach((svg) => svg.pauseAnimations?.());
  }, [currentMission.id, currentSceneIndex]);

  useEffect(() => {
    // If not gated, user can proceed immediately
    if (!isGated) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentSceneIndex, isGated]);

  useEffect(() => {
    setGuidedIndex(0);
    setGuidedHintVisible(false);
    setGuidedFeedback(null);
    setIndependentIndex(0);
    setIndependentFeedback(null);
    setKnowledgeIndex(0);
    setKnowledgeFeedback(null);
    setKnowledgeMissed({});
    setMasteryIndex(0);
    setMasteryAnswers([]);
    setMasteryFeedback(null);
    setMasteryStarted(false);
    setMasteryVariantIndexes(createAssessmentQuestionVariantIndexes(masteryAssessment));
  }, [currentMission.id, currentSceneIndex]);

  // Mount mini-game or interactive scene
  useEffect(() => {
    if (!sc) return;
    const isInteractive = isGatedType || sc.init === 'powercut' || sc.init === 'board';

    // powercut/board scenes have no game container; they wire up the visual rendered above.
    const host = gameContainerRef.current || (!sc.type ? document.body : null);
    if (isInteractive && host) {
      const type = sc.type || sc.init || '';
      runMiniGame(
        type,
        sc,
        host,
        () => setCanProceed(true),
        lang,
        currentMission,
        inMissionFirstTime(),
        (xp: number) => award(xp),
        state.name
      );
    }
  }, [currentSceneIndex, lang, currentMission, isGatedType, sc]);

  if (!sc) return null;

  const handleNext = () => {
    const key = `${currentMission.id}:${currentSceneIndex}`;
    if (inMissionFirstTime() && !breaksSeen.current.has(key) && shouldOfferBreak(currentMission, currentSceneIndex)) {
      const game = buildBreakGame(currentMission, currentSceneIndex, lang);
      if (game) {
        breaksSeen.current.add(key);
        setBreakState({ at: currentSceneIndex, game });
        return;
      }
    }
    nextScene();
  };

  const breakGame = breakState && breakState.at === currentSceneIndex ? breakState.game : null;
  if (breakGame) {
    return (
      <BreakGame
        game={breakGame}
        lang={lang}
        earnsXp={inMissionFirstTime()}
        onFinish={completed => {
          if (completed) award(BREAK_XP);
          setBreakState(null);
          nextScene();
        }}
      />
    );
  }

  // Speaker avatar and styling
  const speaker = () => {
    if (sc.who === 'y') {
      return { cls: 'you', name: esc(name || (isGhana ? 'Explorer' : 'Hunter')), avatar: isGhana ? SANKOFA_EXPLORER_AVATAR : YOU(name) };
    }
    if (sc.who === 'd') {
      return isGhana
        ? { cls: 'challenge', name: 'The Challenge', avatar: SANKOFA_CHALLENGE_AVATAR }
        : {
            cls: 'demon',
            name: L(currentMission.demon, lang),
            avatar: demonSVG(currentMission.hue, currentMission.horns, currentMission.eyes, 'avatar')
          };
    }
    return { cls: '', name: isGhana ? 'The Elder Guide' : 'Sensei Kaito', avatar: isGhana ? SANKOFA_GUIDE_AVATAR : SENSEI };
  };

  const sp = speaker();
  const nxt = currentMission.scenes[currentSceneIndex + 1];

  let visualContent = '';
  if (!sc.type) {
    if (sc.vis === 'demon' && isGhana) {
      visualContent = '<div class="sankofa-scene-prompt">A challenge to explore</div>';
    } else if (sc.vis === 'demon') {
      visualContent = `<div style="display:flex;justify-content:center"><div style="width:min(220px,60%)">${demonSVG(
        currentMission.hue,
        currentMission.horns,
        currentMission.eyes,
        'dia'
      )}</div></div>`;
    } else if (sc.vis) {
      visualContent = getVisualHtml(sc.vis, lang);
    }
    if (sc.code) {
      visualContent += (visualContent ? '<div style="height:12px"></div>' : '') + CODE(sc.code, lang);
    }
  }

  const guideText = sc.type && GUIDE[sc.type as keyof typeof GUIDE];
  const guidedPractice = currentMission.learning?.guidedPractice?.find(
    activity => activity.sceneIndex === currentSceneIndex && activity.questions?.length
  );
  const guidedKey = `${currentMission.id}:${guidedPractice?.id || ''}`;
  const guidedQuestions = guidedPractice?.questions || [];
  const savedLearning = state.learningProgress?.[currentMission.id];
  const guidedComplete = !guidedPractice || !!guidedCompletions[guidedKey] || !!savedLearning?.guidedPracticeComplete;
  const guidedQuestion = guidedQuestions[guidedIndex];
  const independentPractice = currentMission.learning?.independentPractice?.find(
    activity => activity.sceneIndex === currentSceneIndex && activity.questions?.length
  );
  const independentKey = `${currentMission.id}:${independentPractice?.id || ''}`;
  const independentQuestions = independentPractice?.questions || [];
  const independentComplete = !independentPractice || !!independentCompletions[independentKey] || !!savedLearning?.independentPracticeComplete;
  const knowledgeQuestions = currentMission.learning?.knowledgeCheck || [];
  const knowledgeComplete = knowledgeQuestions.length === 0 || typeof savedLearning?.knowledgeCheckScore === 'number';
  const knowledgeQuestion = knowledgeQuestions[knowledgeIndex];
  const techniqueUnlock = HARDWARE_LEARNING_PILOT[currentMission.id]?.techniqueUnlock ?? currentMission.learning?.techniqueUnlock;
  const masteryQuestions = resolveAssessmentQuestions(masteryAssessment, masteryVariantIndexes);
  const masteryReviewConceptIds = masteryFeedback && !masteryFeedback.passed
    ? masteryQuestions.reduce<string[]>((ids, question, index) => {
        const conceptId = masteryAssessment?.questionConceptIds?.[index];
        if (masteryAnswers[index] !== 0 && conceptId && !ids.includes(conceptId)) ids.push(conceptId);
        return ids;
      }, [])
    : (savedLearning?.masteryLastAttemptWeakConcepts || []);
  const masteryReviewConcepts = currentMission.learning?.concepts.filter(
    concept => masteryReviewConceptIds.includes(concept.id)
  ) || [];
  const masteryIsActive = !!masteryAssessment && nxt?.type === 'battle';
  const masteryQuestion = masteryQuestions[masteryIndex];
  const masteryPassed = !masteryIsActive || !!savedLearning?.mastered || !!masteryFeedback?.passed;
  const masteryNeedsRetry = masteryIsActive && typeof savedLearning?.masteryScore === 'number' && !savedLearning?.mastered && !masteryStarted && !masteryFeedback;
  const independentQuestion = independentQuestions[independentIndex];
  const workedExamples = currentMission.learning?.concepts.filter(
    concept => concept.sceneIndexes?.includes(currentSceneIndex) && concept.workedExample
  ) || [];

  return (
    <>
      <div className="mhead">
        <div>
          <div className="eyebrow">
            {isGhana
              ? `Topic ${ARCS[currentMission.arc]?.n ?? currentMission.arc + 1} · § ${currentMission.sec} · ${currentMission.pages}`
              : <>{L(U.arc, lang)} {currentMission.arc + 1} · § {currentMission.sec} · pp.{' '}
            {currentMission.pages}</>}
          </div>
          <h2>{L(currentMission.title, lang)}</h2>
        </div>
        <div className="dots" aria-label={`${currentSceneIndex + 1} / ${currentMission.scenes.length}`}>
          {currentMission.scenes.map((_, i) => (
            <i
              key={i}
              className={i < currentSceneIndex ? 'done' : i === currentSceneIndex ? 'now' : ''}
            />
          ))}
        </div>
      </div>

      <LearningPathway
        mission={currentMission}
        lang={lang}
        progress={savedLearning}
        missionCleared={!!state.cleared[currentMission.id]}
      />

      {!sc.type ? (
        <>
          {visualContent && (
            <div
              key={`scene-visual-${currentSceneIndex}-${sc.vis || sc.init || 'content'}`}
              className="visual"
              ref={sc.init ? gameContainerRef : undefined}
              dangerouslySetInnerHTML={{ __html: visualContent }}
            />
          )}
          {isGhana && ActiveMotionScene && currentSceneIndex === 1 && <ActiveMotionScene />}

          <div className="dialog">
            <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: sp.avatar }} />
            <div className={`bubble ${sp.cls}`}>
              <div className="who" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{sp.name}</span>
                {currentMission.id.startsWith('it_') && sc.text && (
                  <button
                    type="button"
                    onClick={() => {
                      const textToSpeak = (Array.isArray(sc.text) ? sc.text[1] || sc.text[0] : typeof sc.text === 'object' ? sc.text.it || sc.text.en : sc.text || '')
                        .replace(/<[^>]*>/g, '')
                        .replace(/\[\[(.*?)\|(.*?)\]\]/g, '$2');
                      speakItalian(textToSpeak, { rate: 0.88 });
                    }}
                    title={ui(lang, 'Listen to this dialogue in Italian', 'Ascolta questo dialogo in italiano')}
                    style={{
                      background: 'rgba(106, 209, 255, 0.12)',
                      border: '1px solid rgba(106, 209, 255, 0.3)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      color: 'var(--data)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    🔊 {ui(lang, 'Listen', 'Ascolta')}
                  </button>
                )}
              </div>
              <div dangerouslySetInnerHTML={{ __html: fill(sc.text, lang, name) }} />
            </div>
          </div>
        </>
      ) : (
        <div className="mission-interactive-flow">
          <div
            key={`scene-game-${currentSceneIndex}-${sc.type || sc.init || 'interactive'}`}
            className="visual"
            id="gm"
            ref={gameContainerRef}
          />

          {guideText && (
            <section className="mission-guide" aria-label={isGhana ? "The Elder Guide lesson guidance" : "Sensei Kaito lesson guidance"}>
              <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: isGhana ? SANKOFA_GUIDE_AVATAR : SENSEI }} />
              <div className="bubble">
                <div className="who">{isGhana ? "The Elder Guide" : "Sensei Kaito"}</div>
                <div dangerouslySetInnerHTML={{ __html: L(guideText, lang) }} />
              </div>
            </section>
          )}
        </div>
      )}

      {currentMission.id.startsWith('p') && currentSceneIndex === 1 && (
        <PhysicsLab missionId={currentMission.id} lang={lang} />
      )}
      {/^m\d/.test(currentMission.id) && currentSceneIndex === 1 && (
        <MathLab missionId={currentMission.id} lang={lang} />
      )}
      {/^m7m/.test(currentMission.id) && currentSceneIndex === 1 && (
        <MathGeometryLab missionId={currentMission.id} lang={lang} />
      )}
      {(currentMission.id.startsWith('math_l2_') || currentMission.id.startsWith('math_l3_')) && currentSceneIndex === 1 && (
        <MathAdvancedLab missionId={currentMission.id} lang={lang} />
      )}
      {(currentMission.id.startsWith('a') || /^c\d/.test(currentMission.id)) && currentSceneIndex === 1 && (
        <ComputerScienceLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('gh-jhs1-computing-') && currentSceneIndex === 1 && (
        <GhanaComputingLab key={currentMission.id} missionId={currentMission.id} />
      )}
      {currentMission.id.startsWith('chem_') && currentSceneIndex === 1 && (
        <ChemistryLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('g5s-') && currentSceneIndex === 1 && (
        <ScienceLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('it_') && currentSceneIndex === 1 && (
        <ItalianLab />
      )}
      {currentMission.id.startsWith('hist_') && currentSceneIndex === 1 && (
        <HistoryLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('geo_') && currentSceneIndex === 1 && (
        <GeographyLab missionId={currentMission.id} lang={lang} />
      )}

      {guidedPractice && guidedQuestion && !guidedComplete && (
        <section className="learning-guided-practice" aria-label={ui(lang, 'Guided practice', 'Esercitazione guidata')}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{ui(lang, 'GUIDED TRAINING', 'ALLENAMENTO GUIDATO')}</span>
            <h3>{L(guidedPractice.title, lang)}</h3>
            <p>{L(guidedPractice.instructions, lang)}</p>
            <div className="guided-progress">{ui(lang, 'Question', 'Domanda')} {guidedIndex + 1} / {guidedQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(guidedQuestion.q, lang)}</strong>
            <div className="guided-options">
              {guidedQuestion.a.map((option, index) => (
                <button
                  type="button"
                  className="guided-option"
                  key={index}
                  disabled={!!guidedFeedback?.correct}
                  onClick={() => setGuidedFeedback({ correct: index === 0, why: guidedQuestion.why })}
                >
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {guidedPractice.hints?.[guidedIndex] && (
              <div className="guided-hint-wrap">
                <button type="button" className="guided-hint-toggle" onClick={() => setGuidedHintVisible(value => !value)}>
                  {guidedHintVisible ? (ui(lang, 'Hide hint', 'Nascondi suggerimento')) : (ui(lang, 'Show hint', 'Mostra suggerimento'))}
                </button>
                {guidedHintVisible && <p className="guided-hint">{L(guidedPractice.hints[guidedIndex], lang)}</p>}
              </div>
            )}
            {guidedFeedback && (
              <div className={guidedFeedback.correct ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{guidedFeedback.correct ? (ui(lang, 'Correct!', 'Esatto!')) : (ui(lang, 'Try again', 'Riprova'))}</strong>
                <p>{L(guidedFeedback.why, lang)}</p>
                {guidedFeedback.correct ? (
                  <button type="button" className="btn" onClick={() => {
                    if (guidedIndex + 1 < guidedQuestions.length) {
                      setGuidedIndex(index => index + 1);
                      setGuidedFeedback(null);
                      setGuidedHintVisible(false);
                    } else {
                      setGuidedCompletions(previous => ({ ...previous, [guidedKey]: true }));
                      saveLearningProgress(currentMission.id, { guidedPracticeComplete: true });
                    }
                  }}>
                    {guidedIndex + 1 < guidedQuestions.length ? (ui(lang, 'Next question', 'Prossima domanda')) : (ui(lang, 'Complete practice', 'Completa esercitazione'))}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setGuidedFeedback(null)}>
                    {ui(lang, 'Try again', 'Riprova')}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {guidedComplete && guidedPractice && (
        <div className="guided-complete" role="status">
          <strong>{ui(lang, 'Guided practice completed', 'Esercitazione guidata completata')}</strong>
          <p>{ui(lang, 'Well done. You can now continue the mission.', 'Ottimo lavoro. Ora puoi continuare la missione.')}</p>
        </div>
      )}

      {independentPractice && independentQuestion && !independentComplete && (
        <section className="learning-independent-practice" aria-label={ui(lang, 'Independent practice', 'Esercitazione autonoma')}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{ui(lang, 'INDEPENDENT CHALLENGE', 'SFIDA AUTONOMA')}</span>
            <h3>{L(independentPractice.title, lang)}</h3>
            <p>{L(independentPractice.instructions, lang)}</p>
            <div className="independent-progress">{ui(lang, 'Challenge', 'Problema')} {independentIndex + 1} / {independentQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(independentQuestion.q, lang)}</strong>
            <div className="guided-options">
              {independentQuestion.a.map((option, index) => (
                <button
                  type="button"
                  className="guided-option"
                  key={index}
                  disabled={!!independentFeedback?.correct}
                  onClick={() => setIndependentFeedback({ correct: index === 0, why: independentQuestion.why })}
                >
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {independentFeedback && (
              <div className={independentFeedback.correct ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{independentFeedback.correct ? (ui(lang, 'Correct answer', 'Risposta corretta')) : (ui(lang, 'Not quite — try again', 'Non ancora: riprova'))}</strong>
                <p>{L(independentFeedback.why, lang)}</p>
                {independentFeedback.correct ? (
                  <button type="button" className="btn" onClick={() => {
                    if (independentIndex + 1 < independentQuestions.length) {
                      setIndependentIndex(index => index + 1);
                      setIndependentFeedback(null);
                    } else {
                      setIndependentCompletions(previous => ({ ...previous, [independentKey]: true }));
                      saveLearningProgress(currentMission.id, { independentPracticeComplete: true });
                    }
                  }}>
                    {independentIndex + 1 < independentQuestions.length ? (ui(lang, 'Next challenge', 'Prossimo problema')) : (ui(lang, 'Complete challenge', 'Completa la sfida'))}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setIndependentFeedback(null)}>
                    {ui(lang, 'Try again', 'Riprova')}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {independentComplete && independentPractice && (
        <div className="independent-complete" role="status">
          <strong>{ui(lang, 'Independent challenge completed', 'Sfida autonoma completata')}</strong>
          <p>{ui(lang, 'You applied your knowledge without hints. You can continue.', 'Hai applicato le tue conoscenze senza suggerimenti. Puoi continuare.')}</p>
        </div>
      )}

      {independentComplete && knowledgeQuestions.length > 0 && !knowledgeComplete && knowledgeQuestion && (
        <section className="learning-knowledge-check" aria-label={ui(lang, 'Knowledge check', 'Verifica delle conoscenze')}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{ui(lang, 'KNOWLEDGE CHECK', 'VERIFICA DELLE CONOSCENZE')}</span>
            <h3>{ui(lang, 'Check what you have learned', 'Metti alla prova ciò che hai imparato')}</h3>
            <p>{ui(lang, 'Answer without hints. If you miss one, read the explanation and try again.', 'Rispondi senza suggerimenti. Se sbagli, leggi la spiegazione e riprova.')}</p>
            <div className="guided-progress">{ui(lang, 'Question', 'Domanda')} {knowledgeIndex + 1} / {knowledgeQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(knowledgeQuestion.q, lang)}</strong>
            <div className="guided-options">
              {knowledgeQuestion.a.map((option, index) => (
                <button type="button" className="guided-option" key={index}
                  disabled={knowledgeFeedback === true}
                  onClick={() => {
                    const correct = index === 0;
                    setKnowledgeFeedback(correct);
                    if (!correct) setKnowledgeMissed(previous => ({ ...previous, [knowledgeIndex]: true }));
                  }}>
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {knowledgeFeedback !== null && (
              <div className={knowledgeFeedback ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{knowledgeFeedback ? (ui(lang, 'Correct answer', 'Risposta corretta')) : (ui(lang, 'Try again', 'Riprova'))}</strong>
                <p>{L(knowledgeQuestion.why, lang)}</p>
                <button type="button" className="btn" onClick={() => {
                  if (!knowledgeFeedback) { setKnowledgeFeedback(null); return; }
                  if (knowledgeIndex + 1 < knowledgeQuestions.length) {
                    setKnowledgeIndex(index => index + 1);
                    setKnowledgeFeedback(null);
                  } else {
                    const score = Math.round(((knowledgeQuestions.length - Object.keys(knowledgeMissed).length) / knowledgeQuestions.length) * 100);
                    saveLearningProgress(currentMission.id, { knowledgeCheckScore: score, lastAttemptAt: Date.now() });
                  }
                }}>
                  {!knowledgeFeedback ? (ui(lang, 'Try again', 'Riprova')) : knowledgeIndex + 1 < knowledgeQuestions.length ? (ui(lang, 'Next question', 'Prossima domanda')) : (ui(lang, 'Finish check', 'Completa verifica'))}
                </button>
              </div>
            )}
          </div>
        </section>
      )}
      {knowledgeComplete && knowledgeQuestions.length > 0 && (
        <div className="independent-complete" role="status">
          <strong>{ui(lang, 'Knowledge check complete', 'Verifica completata')} · {savedLearning?.knowledgeCheckScore ?? 0}%</strong>
          <p>{ui(lang, 'Your result is saved in this browser. You can continue the mission.', 'Il risultato è salvato in questo browser. Puoi continuare la missione.')}</p>
          <button type="button" className="btn ghost" onClick={() => {
            setKnowledgeIndex(0); setKnowledgeFeedback(null); setKnowledgeMissed({});
            saveLearningProgress(currentMission.id, { knowledgeCheckScore: undefined });
          }}>{ui(lang, 'Retake check', 'Ripeti verifica')}</button>
        </div>
      )}

      {workedExamples.length > 0 && (
        <section className="learning-worked-examples" aria-label={ui(lang, 'Worked examples', 'Esempi svolti')}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{ui(lang, 'LEARN BY EXAMPLE', 'IMPARA FACENDO')}</span>
            <h3>{ui(lang, 'Worked example', 'Esempio svolto')}</h3>
            <p>{ui(lang, 'Follow the reasoning step by step, then try explaining the concept in your own words.', 'Segui il ragionamento passo dopo passo, poi prova a spiegare il concetto con parole tue.')}</p>
          </div>
          {workedExamples.map(concept => (
            <details className="learning-example" key={concept.id}>
              <summary>{L(concept.title, lang)}</summary>
              <div className="learning-example-body">
                <p className="learning-scenario">{L(concept.workedExample!.scenario, lang)}</p>
                <ol>
                  {concept.workedExample!.steps.map((step, index) => (
                    <li key={index}>{L(step, lang)}</li>
                  ))}
                </ol>
                <div className="learning-answer">
                  <strong>{ui(lang, 'Reasoned answer', 'Risposta ragionata')}</strong>
                  <p>{L(concept.workedExample!.answer, lang)}</p>
                </div>
                {concept.misconceptions?.[0] && (
                  <div className="learning-misconception">
                    <strong>{ui(lang, 'Watch out for this common mistake', 'Attenzione a questo errore comune')}</strong>
                    <p><span>{ui(lang, 'Common mistake: ', 'Idea errata: ')}</span>{L(concept.misconceptions[0].belief, lang)}</p>
                    <p><span>{ui(lang, 'Correction: ', 'Correzione: ')}</span>{L(concept.misconceptions[0].correction, lang)}</p>
                  </div>
                )}
              </div>
            </details>
          ))}
        </section>
      )}

      {masteryIsActive && independentComplete && knowledgeComplete && (
        <section className="learning-mastery-assessment" aria-label={ui(lang, 'Mastery assessment', 'Valutazione di padronanza')}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{ui(lang, 'MASTERY TRIAL', 'PROVA DI MAESTRIA')}</span>
            <h3>{L(masteryAssessment!.title, lang)}</h3>
            <p>{L(masteryAssessment!.instructions, lang)}</p>
            <div className="mastery-progress">
              {ui(lang, 'Question', 'Domanda')} {Math.min(masteryIndex + 1, masteryQuestions.length)} / {masteryQuestions.length}
              {' · '}{ui(lang, 'Pass mark', 'Soglia')} {masteryAssessment!.passingScore}%
            </div>
          </div>

          {savedLearning?.mastered && !masteryFeedback && (
            <div className="mastery-result passed" role="status">
              <strong>{ui(lang, 'Mastery achieved', 'Maestria raggiunta')} · {savedLearning.masteryScore ?? 0}%</strong>
              <p>{ui(lang, 'You passed the assessment. The boss battle is unlocked.', 'Hai superato la prova. La battaglia è sbloccata.')}</p>
              <small>{ui(lang, 'Attempts', 'Tentativi')}: {savedLearning.masteryAttempts ?? 1}</small>
            </div>
          )}

          {masteryNeedsRetry && (
            <div className="mastery-result retry" role="status">
              <strong>{ui(lang, 'Previous result', 'Ultimo risultato')} · {savedLearning?.masteryScore}%</strong>
              <p>{ui(lang, 'One more attempt is needed to reach the required pass mark.', 'Serve un altro tentativo per raggiungere la soglia richiesta.')}</p>
              <button type="button" className="btn" onClick={() => {
                setMasteryIndex(0);
                setMasteryAnswers([]);
                setMasteryFeedback(null);
                setMasteryVariantIndexes(createAssessmentQuestionVariantIndexes(masteryAssessment, Math.random, masteryVariantIndexes));
                setMasteryStarted(true);
              }}>{ui(lang, 'Retry assessment', 'Riprova la prova')}</button>
            </div>
          )}

          {!savedLearning?.mastered && !masteryNeedsRetry && !masteryFeedback && masteryQuestion && (
            <div className="guided-question">
              <div className="mastery-progress">{ui(lang, 'Response', 'Risposta')} {masteryIndex + 1} / {masteryQuestions.length}</div>
              <strong>{L(masteryQuestion.q, lang)}</strong>
              <div className="guided-options">
                {masteryQuestion.a.map((option, index) => (
                  <button
                    type="button"
                    className="guided-option"
                    key={index}
                    onClick={() => {
                      const answers = [...masteryAnswers, index];
                      setMasteryAnswers(answers);
                      if (masteryIndex + 1 < masteryQuestions.length) {
                        setMasteryIndex(value => value + 1);
                      } else {
                        const score = Math.round((answers.filter(answer => answer === 0).length / masteryQuestions.length) * 100);
                        const passed = score >= masteryAssessment!.passingScore;
                        const attempt = (savedLearning?.masteryAttempts || 0) + 1;
                        const conceptPerformance = { ...(savedLearning?.masteryConceptPerformance || {}) };
                        const revisionPerformance = { ...(savedLearning?.conceptRevisionPerformance || {}) };
                        const attemptedAt = Date.now();
                        const attemptHistory = [...(savedLearning?.masteryAttemptHistory || []), { score, attemptedAt, attempt }].slice(-20);
                        const attemptReviews = [...(savedLearning?.masteryAttemptReviews || []), {
                          score, attemptedAt, attempt, answers: [...answers], questionVariantIndexes: [...masteryVariantIndexes]
                        }].slice(-20);
                        const weakConcepts: string[] = [];
                        const conceptAttemptResults: Record<string, { correct: number; attempted: number }> = {};
                        masteryQuestions.forEach((question, index) => {
                          const conceptId = masteryAssessment!.questionConceptIds?.[index];
                          if (!conceptId) return;
                          const previous = conceptPerformance[conceptId] || { correct: 0, attempted: 0 };
                          conceptPerformance[conceptId] = {
                            correct: previous.correct + (answers[index] === 0 ? 1 : 0),
                            attempted: previous.attempted + 1
                          };
                          const attemptResult = conceptAttemptResults[conceptId] || { correct: 0, attempted: 0 };
                          attemptResult.correct += answers[index] === 0 ? 1 : 0;
                          attemptResult.attempted += 1;
                          conceptAttemptResults[conceptId] = attemptResult;
                          if (answers[index] !== 0 && !weakConcepts.includes(conceptId)) weakConcepts.push(conceptId);
                        });
                        const conceptReviewSchedule = { ...(savedLearning?.conceptReviewSchedule || {}) };
                        Object.entries(conceptAttemptResults).forEach(([conceptId, result]) => {
                          const conceptScore = Math.round((result.correct / result.attempted) * 100);
                          conceptReviewSchedule[conceptId] = scheduleNextConceptReview(
                            conceptReviewSchedule[conceptId],
                            conceptScore,
                            attemptedAt
                          );
                        });
                        Object.entries(revisionPerformance).forEach(([conceptId, revision]) => {
                          if (!revision.lastReviewedAt || revision.lastReviewedAt <= (revision.postRevisionAt || 0)) return;
                          const performance = conceptPerformance[conceptId];
                          if (!performance?.attempted) return;
                          revisionPerformance[conceptId] = {
                            ...revision,
                            postRevisionMasteryPercent: Math.round((performance.correct / performance.attempted) * 100),
                            postRevisionAt: Date.now()
                          };
                        });
                        saveLearningProgress(currentMission.id, {
                          masteryScore: score,
                          masteryAttempts: attempt,
                          masteryConceptPerformance: conceptPerformance,
                          conceptRevisionPerformance: revisionPerformance,
                          conceptReviewSchedule,
                          masteryAttemptHistory: attemptHistory,
                          masteryAttemptReviews: attemptReviews,
                          masteryLastAttemptWeakConcepts: passed ? [] : weakConcepts,
                          mastered: passed,
                          ...(passed && techniqueUnlock && !savedLearning?.techniqueUnlocked ? { techniqueUnlocked: true } : {}),
                          lastAttemptAt: Date.now()
                        });
                        if (passed && techniqueUnlock && !savedLearning?.techniqueUnlocked && techniqueUnlock.xpReward) {
                          addXP(techniqueUnlock.xpReward);
                        }
                        setMasteryFeedback({ score, passed, attempt });
                      }
                    }}
                  >
                    <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{L(option, lang)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {masteryFeedback && (
            <div className={masteryFeedback.passed ? 'mastery-result passed' : 'mastery-result retry'} role="status" aria-live="polite">
              <strong>
                {masteryFeedback.passed
                  ? (ui(lang, 'Mastery achieved', 'Maestria raggiunta'))
                  : (ui(lang, 'Assessment not passed', 'Prova non superata'))}
                {' · '}{masteryFeedback.score}%
              </strong>
              <p>
                {masteryFeedback.passed
                  ? (ui(lang, 'Excellent work. The boss battle is now unlocked.', 'Ottimo lavoro. La battaglia è sbloccata.'))
                  : ui(lang, 'You need {n}% to pass. Review the explanations and try again.', 'Hai bisogno del {n}% per superare la prova. Rivedi le spiegazioni e riprova.', masteryAssessment!.passingScore)}
              </p>
              <ol className="mastery-review">
                {masteryQuestions.map((question, index) => (
                  <li key={index}>
                    <strong>{L(question.q, lang)}</strong>
                    <span>{ui(lang, 'Correct answer: ', 'Risposta corretta: ')}{L(question.a[0], lang)}</span>
                    <p>{L(question.why, lang)}</p>
                  </li>
                ))}
              </ol>
              {masteryFeedback.passed ? (
                <small>{ui(lang, 'Total attempts', 'Tentativi totali')}: {masteryFeedback.attempt}</small>
              ) : (
                <button type="button" className="btn" onClick={() => {
                  setMasteryIndex(0);
                  setMasteryAnswers([]);
                  setMasteryFeedback(null);
                  setMasteryStarted(true);
                }}>{ui(lang, 'Retry assessment', 'Riprova la prova')}</button>
              )}
            </div>
          )}

          {(masteryNeedsRetry || (masteryFeedback && !masteryFeedback.passed)) && masteryReviewConcepts.length > 0 && (
            <section className="mastery-recommendations" aria-label={ui(lang, 'Recommended revision', 'Ripasso consigliato')}>
              <div className="learning-section-heading">
                <span className="learning-kicker">{ui(lang, 'TARGETED REVISION', 'RIPASSO MIRATO')}</span>
                <h4>{ui(lang, 'Focus on these concepts', 'Concentrati su questi concetti')}</h4>
                <p>{ui(lang, 'These topics match the questions missed in your latest attempt.', 'Questi argomenti corrispondono alle risposte errate dell’ultimo tentativo.')}</p>
              </div>
              {masteryReviewConcepts.map(concept => {
                const performance = savedLearning?.masteryConceptPerformance?.[concept.id];
                const percent = performance?.attempted
                  ? Math.round((performance.correct / performance.attempted) * 100)
                  : null;
                return (
                  <article className="mastery-recommendation" key={concept.id}>
                    <div className="mastery-recommendation-heading">
                      <strong>{L(concept.title, lang)}</strong>
                      {percent !== null && (
                        <small>{ui(lang, 'Correct responses', 'Risposte corrette')}: {performance!.correct}/{performance!.attempted} · {percent}%</small>
                      )}
                    </div>
                    <p>{L(concept.explanation, lang)}</p>
                    {concept.workedExample && (
                      <details className="learning-example">
                        <summary>{ui(lang, 'Review a worked example', 'Rivedi un esempio svolto')}</summary>
                        <div className="learning-example-body">
                          <p className="learning-scenario">{L(concept.workedExample.scenario, lang)}</p>
                          <ol>{concept.workedExample.steps.map((step, index) => <li key={index}>{L(step, lang)}</li>)}</ol>
                          <div className="learning-answer">
                            <strong>{ui(lang, 'Reasoned answer', 'Risposta ragionata')}</strong>
                            <p>{L(concept.workedExample.answer, lang)}</p>
                          </div>
                        </div>
                      </details>
                    )}
                    {concept.misconceptions?.[0] && (
                      <div className="learning-misconception">
                        <strong>{ui(lang, 'Misconception to avoid', 'Errore da evitare')}</strong>
                        <p>{L(concept.misconceptions[0].belief, lang)}</p>
                        <p>{L(concept.misconceptions[0].correction, lang)}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          )}
        </section>
      )}

      <div className="nav">
        <button className="btn ghost" id="back" onClick={prevScene}>
          {currentSceneIndex ? L(U.back, lang) : L(U.missions, lang)}
        </button>

        <button
          className="btn"
          id="next"
          disabled={!canProceed || !guidedComplete || !independentComplete || !knowledgeComplete || !masteryPassed}
          onClick={handleNext}
        >
          {nxt && nxt.type === 'battle' ? L(U.fight, lang) : L(U.cont, lang)}
        </button>
      </div>
    </>
  );
};
