import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { QuizQuestion, Mission } from '../types';
import { L, demonSVG, HEART, shuffle, U } from '../helpers';
import { speakItalian } from '../speech/speechEngine';

export const BattleScreen: React.FC = () => {
  const {
    state,
    currentMission,
    battleContext,
    clearMission,
    goToView,
    openMission,
    currentMissionIndex,
    allCleared
  } = useGame();

  const { lang, cleared } = state;
  const isDojo = battleContext?.isDojo || false;

  const activeMission: Mission = isDojo
    ? ({
        id: 'dojo',
        arc: 0,
        sec: '',
        pages: '',
        hue: 220,
        horns: 1,
        eyes: 1,
        title: ['Training Hall', "Sala d'allenamento"],
        topic: ['Mixed review', 'Ripasso misto'],
        demon: ['Training Dummy', "Manichino d'allenamento"],
        tech: ['Training', 'Allenamento'],
        scenes: [],
        quiz: battleContext?.customQuestions || []
      } as unknown as Mission)
    : currentMission;

  // Battle state
  const [queue, setQueue] = useState<QuizQuestion[]>([]);
  const [hp, setHp] = useState(0);
  const [maxHp, setMaxHp] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [currentQ, setCurrentQ] = useState<QuizQuestion | null>(null);
  const [options, setOptions] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [shout, setShout] = useState<{ text: string; form?: string; tech?: string; comboText?: string; lvl: number } | null>(null);
  const [demonHit, setDemonHit] = useState(false);
  const [arenaOuch, setArenaOuch] = useState(false);
  const [battleFinished, setBattleFinished] = useState<'win' | 'lose' | null>(null);

  // Initialize battle queue
  useEffect(() => {
    const rawQuestions = isDojo
      ? battleContext?.customQuestions || []
      : activeMission.quiz || [];
    const shuffled = shuffle(rawQuestions.slice());
    const initialQueue = isDojo ? shuffled.slice(0, 8) : shuffled;

    setQueue(initialQueue);
    setHp(initialQueue.length);
    setMaxHp(initialQueue.length);
    setHearts(3);
    setCombo(0);
    setBestCombo(0);
    setBattleFinished(null);

    if (initialQueue.length > 0) {
      loadQuestion(initialQueue[0]);
    }
  }, [activeMission, isDojo, battleContext]);

  const loadQuestion = (q: QuizQuestion) => {
    setCurrentQ(q);
    setAnswered(false);
    setSelectedIndex(null);
    setCorrectIndex(null);
    setFeedback('');
    setShout(null);
    setDemonHit(false);
    setArenaOuch(false);

    // Shuffle options: the correct answer is always index 0 in q.a
    // Keep shuffled answer indexes, not translated strings, so a language switch
    // immediately re-renders every choice in the newly selected language.
    const shuffledIndexes = shuffle(q.a.map((_, index) => index));
    setOptions(shuffledIndexes);
    setCorrectIndex(shuffledIndexes.indexOf(0));
  };

  const handleSelectOption = (idx: number) => {
    if (answered || !currentQ) return;
    setAnswered(true);
    setSelectedIndex(idx);

    const isCorrect = idx === correctIndex;
    const rightText = currentQ.a[options[correctIndex!]] ? L(currentQ.a[options[correctIndex!]], lang) : '';

    // Split tech name if formatted as "Form · Technique"
    const fullTech = L(activeMission.tech, lang);
    const techParts = fullTech.split('·').map(s => s.trim());
    const formName = techParts.length > 1 ? techParts[0] : '';
    const techName = techParts.length > 1 ? techParts.slice(1).join(' · ') : fullTech;

    if (isCorrect) {
      const newCombo = combo + 1;
      const newBest = Math.max(bestCombo, newCombo);
      setCombo(newCombo);
      setBestCombo(newBest);
      setHp(h => Math.max(0, h - 1));

      setDemonHit(true);
      const lvl = newCombo >= 5 ? 3 : newCombo >= 3 ? 2 : 1;
      const chainTxt = newCombo >= 2 ? `×${newCombo} ${L(['CHAIN', 'CATENA'], lang)}` : '';
      const lead =
        newCombo >= 5
          ? L(['Technique unleashed!', 'Tecnica scatenata!'], lang)
          : newCombo >= 3
          ? L(['Breathing in rhythm!', 'Respiro in ritmo!'], lang)
          : L(['Direct hit!', 'Colpo a segno!'], lang);

      setShout({
        text: lead,
        form: formName,
        tech: techName,
        comboText: chainTxt,
        lvl
      });

      setFeedback(
        `<div class="why"><b>⟐ ${techName} — ${lead}</b> ${L(currentQ.why, lang)}</div>`
      );
    } else {
      setCombo(0);
      setHearts(h => Math.max(0, h - 1));
      setArenaOuch(true);

      // Move missed question to back of queue
      setQueue(prev => {
        const nextQ = [...prev];
        const missed = nextQ.shift();
        if (missed) nextQ.push(missed);
        return nextQ;
      });

      setFeedback(
        `<div class="why"><b>${L(
          ['The demon strikes back!', 'Il demone contrattacca!'],
          lang
        )}</b> ${L(
          ['Your focus breaks and the chain resets.', 'La concentrazione si spezza e la catena si azzera.'],
          lang
        )} ${L(['The answer is', 'La risposta è'], lang)} "${rightText}". ${L(
          currentQ.why,
          lang
        )}<br><span class="muted">${L(
          ['This question will come back later in the fight.', 'Questa domanda tornerà più avanti nello scontro.'],
          lang
        )}</span></div>`
      );
    }
  };

  const handleNextStep = () => {
    if (!currentQ) return;

    if (selectedIndex === correctIndex) {
      const nextHp = hp; // Already decremented
      if (nextHp === 0) {
        handleWin();
        return;
      }

      // Remove current question from queue and load next
      const nextQueue = queue.slice(1);
      setQueue(nextQueue);
      if (nextQueue.length > 0) {
        loadQuestion(nextQueue[0]);
      }
    } else {
      if (hearts === 0) {
        handleLose();
        return;
      }
      // Load top question in updated queue
      if (queue.length > 0) {
        loadQuestion(queue[0]);
      }
    }
  };

  const handleWin = () => {
    setBattleFinished('win');
    if (isDojo) return;

    const first = !cleared[activeMission.id];
    const flawless = hearts === 3;
    const gained = 50 + (flawless ? 25 : 0);
    clearMission(activeMission.id, flawless, gained);
  };

  const handleLose = () => {
    setBattleFinished('lose');
  };

  // Render Defeat View
  if (battleFinished === 'lose') {
    return (
      <div className="card result">
        <div style={{ width: 'min(180px, 50%)', margin: '0 auto' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: demonSVG(activeMission.hue, activeMission.horns, activeMission.eyes, 'dia')
            }}
          />
        </div>
        <h2>{L(['The demon escaped', 'Il demone è fuggito'], lang)}</h2>
        <p className="muted" style={{ maxWidth: '52ch', margin: '0 auto' }}>
          {L(
            [
              "Your spirit ran out. Every hunter retreats sometimes, and every question you missed was explained, so you're stronger now. Try again, or review the lesson first.",
              'Il tuo spirito si è esaurito. Ogni cacciatrice a volte si ritira, e ogni domanda sbagliata è stata spiegata: ora sei più forte. Riprova, oppure ripassa prima la lezione.'
            ],
            lang
          )}
        </p>
        <div className="row" style={{ justifyContent: 'center', marginTop: '16px' }}>
          <button
            className="btn"
            id="again"
            onClick={() => {
              if (isDojo) {
                // Restart dojo
                const shuffled = shuffle(activeMission.quiz.slice()).slice(0, 8);
                setQueue(shuffled);
                setHp(shuffled.length);
                setMaxHp(shuffled.length);
                setHearts(3);
                setCombo(0);
                setBattleFinished(null);
                loadQuestion(shuffled[0]);
              } else {
                // Restart mission battle
                const raw = activeMission.quiz.slice();
                setQueue(raw);
                setHp(raw.length);
                setMaxHp(raw.length);
                setHearts(3);
                setCombo(0);
                setBattleFinished(null);
                loadQuestion(raw[0]);
              }
            }}
          >
            {L(['Fight again', 'Combatti ancora'], lang)}
          </button>
          {!isDojo && (
            <button className="btn ghost" id="rev" onClick={() => goToView('scene')}>
              {L(['Review the lesson', 'Ripassa la lezione'], lang)}
            </button>
          )}
          <button className="btn ghost" id="map" onClick={() => goToView('map')}>
            {L(U.missions, lang)}
          </button>
        </div>
      </div>
    );
  }

  // Render Victory View
  if (battleFinished === 'win') {
    if (isDojo) {
      return (
        <div className="card result">
          <h2>{L(['Training complete', 'Allenamento completato'], lang)}</h2>
          <p>
            {L(
              [
                'Short, regular practice is how techniques stick.',
                'Allenarsi poco ma spesso è il modo per fissare le tecniche.'
              ],
              lang
            )}
          </p>
          <div className="row" style={{ justifyContent: 'center', marginTop: '16px' }}>
            <button
              className="btn"
              id="again"
              onClick={() => {
                const shuffled = shuffle(activeMission.quiz.slice()).slice(0, 8);
                setQueue(shuffled);
                setHp(shuffled.length);
                setMaxHp(shuffled.length);
                setHearts(3);
                setCombo(0);
                setBattleFinished(null);
                loadQuestion(shuffled[0]);
              }}
            >
              {L(['Train again', 'Allenati ancora'], lang)}
            </button>
            <button className="btn ghost" id="map" onClick={() => goToView('map')}>
              {L(U.missions, lang)}
            </button>
          </div>
        </div>
      );
    }

    const first = !cleared[activeMission.id];
    const flawless = hearts === 3;
    const gained = 50 + (flawless ? 25 : 0);
    const ni = currentMissionIndex + 1;

    return (
      <div className="card result">
        <div className="eyebrow">{L(['Demon defeated', 'Demone sconfitto'], lang)}</div>
        <h2>
          {L(activeMission.demon, lang)} {L(['is sealed!', 'è sigillato!'], lang)}
        </h2>

        {flawless && (
          <div className="awaken">
            ⟐ {L(['AWAKENING', 'RISVEGLIO'], lang)} ·{' '}
            {L(['flawless chain of', 'catena perfetta di'], lang)} {bestCombo}
          </div>
        )}

        <p>{L(['Technique learned', 'Tecnica appresa'], lang)}</p>
        <div className="tech">{L(activeMission.tech, lang)}</div>

        <p className="muted">
          {first
            ? `+${gained} XP${
                flawless
                  ? L([' (including +25 flawless bonus)', ' (compreso il bonus perfezione +25)'], lang)
                  : ''
              }`
            : L(
                [
                  'Replay complete. XP is only awarded the first time.',
                  'Replay completato. I punti XP si ottengono solo la prima volta.'
                ],
                lang
              )}
        </p>

        <div className="row" style={{ justifyContent: 'center', marginTop: '16px' }}>
          {allCleared() && first ? (
            <button className="btn" onClick={() => goToView('ending')}>
              {L(['See certificate', 'Vedi il diploma'], lang)}
            </button>
          ) : (
            <>
              <button className="btn" id="nx" onClick={() => openMission(ni)}>
                {L(['Next', 'Avanti'], lang)}: {L(activeMission.title, lang)}
              </button>
              <button className="btn ghost" id="map" onClick={() => goToView('map')}>
                {L(U.missions, lang)}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Active Battle Arena
  return (
    <div id="arena" className={`arena ${arenaOuch ? 'ouch' : ''}`}>
      <div className="foe-band">
        <div className="who-foe">
          <b>{L(activeMission.demon, lang)}</b>
          <small className="muted">
            {L(['Glitch Demon', 'Demone Glitch'], lang)} · {hp}/{maxHp}
          </small>
        </div>

        <div
          id="foe"
          className={`foe ${demonHit ? 'hit' : ''}`}
          dangerouslySetInnerHTML={{
            __html: demonSVG(activeMission.hue, activeMission.horns, activeMission.eyes, 'dia')
          }}
        />

        <div className="hpbar" aria-label="Demon health">
          {Array.from({ length: maxHp }).map((_, i) => (
            <i key={i} className={i < hp ? 'live' : ''} />
          ))}
        </div>
      </div>

      <div className="player-band">
        <div className="hearts" aria-label="Player spirit">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="heart"
              dangerouslySetInnerHTML={{ __html: HEART(i < hearts) }}
            />
          ))}
        </div>

        {combo >= 2 && (
          <div className="combo">
            ×{combo} {L(['CHAIN', 'CATENA'], lang)}
          </div>
        )}
      </div>

      {shout && (
        <div className={`shout show lvl${shout.lvl}`}>
          {shout.form && <span className="sform">{shout.form}</span>}
          <span className="stech">{shout.tech}!</span>
          {shout.comboText && (
            <span className="scombo" dangerouslySetInnerHTML={{ __html: shout.comboText }} />
          )}
        </div>
      )}

      {currentQ && (
        <div className="qbox">
          <div className="qtxt" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <span>{L(currentQ.q, lang)}</span>
            {currentMission.id.startsWith('it_') && (
              <button
                type="button"
                className="btn sm"
                onClick={() => {
                  const itText = Array.isArray(currentQ.q) ? currentQ.q[1] || currentQ.q[0] : currentQ.q;
                  speakItalian(itText, { rate: 0.88 });
                }}
                style={{ flexShrink: 0, padding: '4px 10px', fontSize: '13px' }}
                title={lang === 'it' ? 'Ascolta domanda' : 'Listen to question'}
              >
                🔊
              </button>
            )}
          </div>

          <div className="opts">
            {options.map((optionIndex, idx) => {
              let optClass = 'btn ghost opt';
              if (answered) {
                if (idx === correctIndex) optClass = 'btn right opt';
                else if (idx === selectedIndex) optClass = 'btn wrong opt';
              }
              return (
                <button
                  key={idx}
                  className={optClass}
                  disabled={answered}
                  onClick={() => handleSelectOption(idx)}
                >
                  {L(currentQ.a[optionIndex], lang)}
                </button>
              );
            })}
          </div>

          {answered && (
            <div id="qfb" className="qfb">
              <div dangerouslySetInnerHTML={{ __html: feedback }} />
              <button
                className="btn"
                style={{ marginTop: '12px' }}
                onClick={handleNextStep}
                autoFocus
              >
                {hp === 0
                  ? L(['Final strike!', 'Colpo finale!'], lang)
                  : hearts === 0
                  ? '…'
                  : L(['Next strike', 'Prossimo colpo'], lang)}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
