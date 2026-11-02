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
    award
  } = useGame();

  const { lang, name } = state;
  const sc = currentMission.scenes[currentSceneIndex];
  const [canProceed, setCanProceed] = useState(false);
  const [guidedIndex, setGuidedIndex] = useState(0);
  const [guidedHintVisible, setGuidedHintVisible] = useState(false);
  const [guidedFeedback, setGuidedFeedback] = useState<{ correct: boolean; why: any } | null>(null);
  const [guidedCompletions, setGuidedCompletions] = useState<Record<string, boolean>>({});
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
  const guidedComplete = !guidedPractice || !!guidedCompletions[guidedKey];
  const guidedQuestion = guidedQuestions[guidedIndex];
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
          disabled={!canProceed || !guidedComplete}
          onClick={nextScene}
        >
          {nxt && nxt.type === 'battle' ? L(U.fight, lang) : L(U.cont, lang)}
        </button>
      </div>
    </>
  );
};
