import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { getVisualHtml } from '../data/visuals';
import { runMiniGame } from '../data/miniGames';
import { L, CODE, fill, demonSVG, SENSEI, YOU, esc, U, GUIDE } from '../helpers';

export const MissionScreen: React.FC = () => {
  const {
    state,
    currentMission,
    currentSceneIndex,
    nextScene,
    prevScene,
    inMissionFirstTime,
    award,
    saveLearningProgress
  } = useGame();

  const { lang, name } = state;
  const sc = currentMission.scenes[currentSceneIndex];
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
  const gameContainerRef = useRef<HTMLDivElement>(null);

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
    'fluids'
  ].includes(sc?.type || '') || sc?.init === 'board' || sc?.init === 'powercut' || !!sc?.needDone;

  const isGated = isGatedType && inMissionFirstTime();

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
  }, [currentMission.id, currentSceneIndex]);

  // Mount mini-game or interactive scene
  useEffect(() => {
    if (!sc) return;
    const isInteractive = isGatedType || sc.init === 'powercut' || sc.init === 'board';

    if (isInteractive && gameContainerRef.current) {
      const type = sc.type || sc.init || '';
      runMiniGame(
        type,
        sc,
        gameContainerRef.current,
        () => setCanProceed(true),
        lang,
        currentMission,
        inMissionFirstTime(),
        (xp: number) => award(xp)
      );
    }
  }, [currentSceneIndex, lang, currentMission, isGatedType, sc]);

  if (!sc) return null;

  // Speaker avatar and styling
  const speaker = () => {
    if (sc.who === 'y') {
      return { cls: 'you', name: esc(name || 'Hunter'), avatar: YOU(name) };
    }
    if (sc.who === 'd') {
      return {
        cls: 'demon',
        name: L(currentMission.demon, lang),
        avatar: demonSVG(currentMission.hue, currentMission.horns, currentMission.eyes, 'avatar')
      };
    }
    return { cls: '', name: 'Sensei Kaito', avatar: SENSEI };
  };

  const sp = speaker();
  const nxt = currentMission.scenes[currentSceneIndex + 1];

  let visualContent = '';
  if (!sc.type) {
    if (sc.vis === 'demon') {
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
  const independentQuestion = independentQuestions[independentIndex];
  const workedExamples = currentMission.learning?.concepts.filter(
    concept => concept.sceneIndexes?.includes(currentSceneIndex) && concept.workedExample
  ) || [];

  return (
    <>
      <div className="mhead">
        <div>
          <div className="eyebrow">
            {L(U.arc, lang)} {currentMission.arc + 1} · § {currentMission.sec} · pp.{' '}
            {currentMission.pages}
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

          <div className="dialog">
            <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: sp.avatar }} />
            <div className={`bubble ${sp.cls}`}>
              <div className="who">{sp.name}</div>
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
            <section className="mission-guide" aria-label="Sensei Kaito lesson guidance">
              <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SENSEI }} />
              <div className="bubble">
                <div className="who">Sensei Kaito</div>
                <div dangerouslySetInnerHTML={{ __html: L(guideText, lang) }} />
              </div>
            </section>
          )}
        </div>
      )}

      {guidedPractice && guidedQuestion && !guidedComplete && (
        <section className="learning-guided-practice" aria-label={lang === 'it' ? 'Esercitazione guidata' : 'Guided practice'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'ALLENAMENTO GUIDATO' : 'GUIDED TRAINING'}</span>
            <h3>{L(guidedPractice.title, lang)}</h3>
            <p>{L(guidedPractice.instructions, lang)}</p>
            <div className="guided-progress">{lang === 'it' ? 'Domanda' : 'Question'} {guidedIndex + 1} / {guidedQuestions.length}</div>
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
                  {guidedHintVisible ? (lang === 'it' ? 'Nascondi suggerimento' : 'Hide hint') : (lang === 'it' ? 'Mostra suggerimento' : 'Show hint')}
                </button>
                {guidedHintVisible && <p className="guided-hint">{L(guidedPractice.hints[guidedIndex], lang)}</p>}
              </div>
            )}
            {guidedFeedback && (
              <div className={guidedFeedback.correct ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{guidedFeedback.correct ? (lang === 'it' ? 'Esatto!' : 'Correct!') : (lang === 'it' ? 'Riprova' : 'Try again')}</strong>
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
                    {guidedIndex + 1 < guidedQuestions.length ? (lang === 'it' ? 'Prossima domanda' : 'Next question') : (lang === 'it' ? 'Completa esercitazione' : 'Complete practice')}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setGuidedFeedback(null)}>
                    {lang === 'it' ? 'Riprova' : 'Try again'}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {guidedComplete && guidedPractice && (
        <div className="guided-complete" role="status">
          <strong>{lang === 'it' ? 'Esercitazione guidata completata' : 'Guided practice completed'}</strong>
          <p>{lang === 'it' ? 'Ottimo lavoro. Ora puoi continuare la missione.' : 'Well done. You can now continue the mission.'}</p>
        </div>
      )}

      {independentPractice && independentQuestion && !independentComplete && (
        <section className="learning-independent-practice" aria-label={lang === 'it' ? 'Esercitazione autonoma' : 'Independent practice'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'SFIDA AUTONOMA' : 'INDEPENDENT CHALLENGE'}</span>
            <h3>{L(independentPractice.title, lang)}</h3>
            <p>{L(independentPractice.instructions, lang)}</p>
            <div className="independent-progress">{lang === 'it' ? 'Problema' : 'Challenge'} {independentIndex + 1} / {independentQuestions.length}</div>
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
                <strong>{independentFeedback.correct ? (lang === 'it' ? 'Risposta corretta' : 'Correct answer') : (lang === 'it' ? 'Non ancora: riprova' : 'Not quite — try again')}</strong>
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
                    {independentIndex + 1 < independentQuestions.length ? (lang === 'it' ? 'Prossimo problema' : 'Next challenge') : (lang === 'it' ? 'Completa la sfida' : 'Complete challenge')}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setIndependentFeedback(null)}>
                    {lang === 'it' ? 'Riprova' : 'Try again'}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {independentComplete && independentPractice && (
        <div className="independent-complete" role="status">
          <strong>{lang === 'it' ? 'Sfida autonoma completata' : 'Independent challenge completed'}</strong>
          <p>{lang === 'it' ? 'Hai applicato le tue conoscenze senza suggerimenti. Puoi continuare.' : 'You applied your knowledge without hints. You can continue.'}</p>
        </div>
      )}

      {independentComplete && knowledgeQuestions.length > 0 && !knowledgeComplete && knowledgeQuestion && (
        <section className="learning-knowledge-check" aria-label={lang === 'it' ? 'Verifica delle conoscenze' : 'Knowledge check'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'VERIFICA DELLE CONOSCENZE' : 'KNOWLEDGE CHECK'}</span>
            <h3>{lang === 'it' ? 'Metti alla prova ciò che hai imparato' : 'Check what you have learned'}</h3>
            <p>{lang === 'it' ? 'Rispondi senza suggerimenti. Se sbagli, leggi la spiegazione e riprova.' : 'Answer without hints. If you miss one, read the explanation and try again.'}</p>
            <div className="guided-progress">{lang === 'it' ? 'Domanda' : 'Question'} {knowledgeIndex + 1} / {knowledgeQuestions.length}</div>
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
                <strong>{knowledgeFeedback ? (lang === 'it' ? 'Risposta corretta' : 'Correct answer') : (lang === 'it' ? 'Riprova' : 'Try again')}</strong>
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
                  {!knowledgeFeedback ? (lang === 'it' ? 'Riprova' : 'Try again') : knowledgeIndex + 1 < knowledgeQuestions.length ? (lang === 'it' ? 'Prossima domanda' : 'Next question') : (lang === 'it' ? 'Completa verifica' : 'Finish check')}
                </button>
              </div>
            )}
          </div>
        </section>
      )}
      {knowledgeComplete && knowledgeQuestions.length > 0 && (
        <div className="independent-complete" role="status">
          <strong>{lang === 'it' ? 'Verifica completata' : 'Knowledge check complete'} · {savedLearning?.knowledgeCheckScore ?? 0}%</strong>
          <p>{lang === 'it' ? 'Il risultato è salvato in questo browser. Puoi continuare la missione.' : 'Your result is saved in this browser. You can continue the mission.'}</p>
          <button type="button" className="btn ghost" onClick={() => {
            setKnowledgeIndex(0); setKnowledgeFeedback(null); setKnowledgeMissed({});
            saveLearningProgress(currentMission.id, { knowledgeCheckScore: undefined });
          }}>{lang === 'it' ? 'Ripeti verifica' : 'Retake check'}</button>
        </div>
      )}

      {workedExamples.length > 0 && (
        <section className="learning-worked-examples" aria-label={lang === 'it' ? 'Esempi svolti' : 'Worked examples'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'IMPARA FACENDO' : 'LEARN BY EXAMPLE'}</span>
            <h3>{lang === 'it' ? 'Esempio svolto' : 'Worked example'}</h3>
            <p>{lang === 'it' ? 'Segui il ragionamento passo dopo passo, poi prova a spiegare il concetto con parole tue.' : 'Follow the reasoning step by step, then try explaining the concept in your own words.'}</p>
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
                  <strong>{lang === 'it' ? 'Risposta ragionata' : 'Reasoned answer'}</strong>
                  <p>{L(concept.workedExample!.answer, lang)}</p>
                </div>
                {concept.misconceptions?.[0] && (
                  <div className="learning-misconception">
                    <strong>{lang === 'it' ? 'Attenzione a questo errore comune' : 'Watch out for this common mistake'}</strong>
                    <p><span>{lang === 'it' ? 'Idea errata: ' : 'Common mistake: '}</span>{L(concept.misconceptions[0].belief, lang)}</p>
                    <p><span>{lang === 'it' ? 'Correzione: ' : 'Correction: '}</span>{L(concept.misconceptions[0].correction, lang)}</p>
                  </div>
                )}
              </div>
            </details>
          ))}
        </section>
      )}

      <div className="nav">
        <button className="btn ghost" id="back" onClick={prevScene}>
          {currentSceneIndex ? L(U.back, lang) : L(U.missions, lang)}
        </button>

        <button
          className="btn"
          id="next"
          disabled={!canProceed || !guidedComplete || !independentComplete || !knowledgeComplete}
          onClick={nextScene}
        >
          {nxt && nxt.type === 'battle' ? L(U.fight, lang) : L(U.cont, lang)}
        </button>
      </div>
    </>
  );
};
