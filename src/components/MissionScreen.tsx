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
        <>
          {guideText && (
            <div className="dialog">
              <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SENSEI }} />
              <div className="bubble">
                <div className="who">Sensei Kaito</div>
                <div dangerouslySetInnerHTML={{ __html: L(guideText, lang) }} />
              </div>
            </div>
          )}

          <div
            key={`scene-game-${currentSceneIndex}-${sc.type || sc.init || 'interactive'}`}
            className="visual"
            id="gm"
            ref={gameContainerRef}
          />
        </>
      )}

      <div className="nav">
        <button className="btn ghost" id="back" onClick={prevScene}>
          {currentSceneIndex ? L(U.back, lang) : L(U.missions, lang)}
        </button>

        <button
          className="btn"
          id="next"
          disabled={!canProceed}
          onClick={nextScene}
        >
          {nxt && nxt.type === 'battle' ? L(U.fight, lang) : L(U.cont, lang)}
        </button>
      </div>
    </>
  );
};
