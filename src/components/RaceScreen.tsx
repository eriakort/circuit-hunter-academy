import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { RacePlayer, RaceProgress, QuizQuestion } from '../types';
import { MISSIONS } from '../data/gameData';
import { L, rng, sshuffle, hueOf, raceAvatar, raceXP, safeId, U } from '../helpers';
import { createClient } from '@supabase/supabase-js';

const RACE_QTIME = 20000;
const RACE_MAX = 8;

const defaultSupabaseUrl = 'https://yhzefqoplunmseuwcwku.supabase.co';
const defaultSupabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloemVmcW9wbHVubXNldXdjd2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNDM0NTQsImV4cCI6MjEwODgxOTQ1NH0.5CWs0AtbFtrAYOYiPjgKfvWivAMPeXGXSzOblZMCS3c';

export const RaceScreen: React.FC = () => {
  const { state, addXP, goToView } = useGame();
  const { lang, name } = state;

  // Race UI State
  const [raceState, setRaceState] = useState<'home' | 'lobby' | 'countdown' | 'running' | 'done'>('home');
  const [code, setCode] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedMission, setSelectedMission] = useState('mix');
  const [countdownNum, setCountdownNum] = useState(3);

  // Multiplayer Room State
  const [me, setMe] = useState<RacePlayer | null>(null);
  const [players, setPlayers] = useState<Record<string, RacePlayer>>({});
  const [progress, setProgress] = useState<Record<string, RaceProgress>>({});

  // Active Quiz State
  const [questions, setQuestions] = useState<Array<{ q: QuizQuestion; order: number[] }>>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(RACE_QTIME);
  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ text: string; ok: boolean } | null>(null);

  // Network channel ref
  const channelRef = useRef<any>(null);
  const timerIntervalRef = useRef<any>(null);
  const raceIdRef = useRef<string>('');
  const awardedRef = useRef(false);
  const [lastXP, setLastXP] = useState(0);

  // Sorted players by join order
  const playerList = Object.values(players).sort((a, b) => a.joinedAt - b.joinedAt);
  const hostPlayer = playerList[0];
  const isHost = me && hostPlayer && me.id === hostPlayer.id;

  // Build question set from seed
  const buildRaceQuestions = (missionId: string, seed: number) => {
    const r = rng(seed);
    const pool =
      missionId === 'mix'
        ? sshuffle(MISSIONS.flatMap(m => m.quiz), r).slice(0, 10)
        : sshuffle(MISSIONS.find(m => m.id === missionId)?.quiz.slice() || [], r);

    return pool.map(q => ({ q, order: sshuffle([0, 1, 2, 3], r) }));
  };

  const handleJoinOrCreate = async (roomCode: string, create: boolean) => {
    const cleanCode = roomCode.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
    if (cleanCode.length < 4) {
      setErrorMsg(L(['Room codes have 4 characters.', 'I codici stanza hanno 4 caratteri.'], lang));
      return;
    }

    setIsPending(true);
    setErrorMsg('');

    const myPlayer: RacePlayer = {
      id: safeId(),
      name: name || 'Hunter',
      joinedAt: Date.now() + (create ? 0 : 1),
      hue: hueOf((name || 'Hunter') + Math.random())
    };

    setMe(myPlayer);
    setCode(cleanCode);

    try {
      const client = createClient(defaultSupabaseUrl, defaultSupabaseKey);
      const ch = client.channel(`cha-race-${cleanCode}`, {
        config: { presence: { key: myPlayer.id }, broadcast: { self: false } }
      });

      ch.on('presence', { event: 'sync' }, () => {
        const presenceState = ch.presenceState();
        const pMap: Record<string, RacePlayer> = { [myPlayer.id]: myPlayer };
        Object.values(presenceState).forEach((arr: any) => {
          if (arr && arr[0]) pMap[arr[0].id] = arr[0];
        });
        setPlayers(pMap);
      });

      ch.on('broadcast', { event: 'start' }, ({ payload }) => {
        onStartBroadcast(payload);
      });

      ch.on('broadcast', { event: 'progress' }, ({ payload }) => {
        onProgressBroadcast(payload);
      });

      ch.on('broadcast', { event: 'lobby' }, () => {
        setRaceState('lobby');
      });

      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          // Fallback to local simulation mode if websocket connection times out
          console.warn('Supabase realtime timeout; using local race simulation');
          resolve();
        }, 3000);

        ch.subscribe(async status => {
          if (status === 'SUBSCRIBED') {
            clearTimeout(timeout);
            try {
              await ch.track(myPlayer);
            } catch (e) {}
            resolve();
          } else if (status === 'CHANNEL_ERROR' || status === 'CLOSED') {
            clearTimeout(timeout);
            resolve(); // fallback
          }
        });
      });

      channelRef.current = ch;
      setPlayers({ [myPlayer.id]: myPlayer });
      setRaceState('lobby');
      setIsPending(false);
    } catch (e) {
      console.warn('Realtime error, using offline room fallback:', e);
      setPlayers({ [myPlayer.id]: myPlayer });
      setRaceState('lobby');
      setIsPending(false);
    }
  };

  const onStartBroadcast = (payload: { missionId: string; seed: number; raceId: string }) => {
    raceIdRef.current = payload.raceId;
    const qs = buildRaceQuestions(payload.missionId, payload.seed);
    setQuestions(qs);
    setCurrentQIndex(0);
    setScore(0);
    setCorrectCount(0);
    setProgress({});
    awardedRef.current = false;
    setLastXP(0);

    // Start countdown
    setRaceState('countdown');
    setCountdownNum(3);

    let cd = 3;
    const cdInt = setInterval(() => {
      cd--;
      if (cd > 0) {
        setCountdownNum(cd);
      } else {
        clearInterval(cdInt);
        setRaceState('running');
        startQuestionTimer();
      }
    }, 900);
  };

  const onProgressBroadcast = (p: RaceProgress) => {
    if (p.raceId !== raceIdRef.current) return;
    setProgress(prev => ({ ...prev, [p.id]: p }));
  };

  const handleHostStart = () => {
    const seed = Math.floor(Math.random() * 1000000);
    const rId = safeId();
    const payload = { missionId: selectedMission, seed, raceId: rId };

    if (channelRef.current) {
      try {
        channelRef.current.send({ type: 'broadcast', event: 'start', payload });
      } catch (e) {}
    }
    onStartBroadcast(payload);
  };

  const startQuestionTimer = () => {
    setTimeRemaining(RACE_QTIME);
    setAnswered(false);
    setSelectedOpt(null);
    setFeedback(null);

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    const startTime = Date.now();
    timerIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const left = Math.max(0, RACE_QTIME - elapsed);
      setTimeRemaining(left);

      if (left <= 0) {
        clearInterval(timerIntervalRef.current);
        timeoutRef.current();
      }
    }, 100);
  };

  const sendProgress = (step: number, curScore: number) => {
    if (!channelRef.current || !me) return;
    const myProg: RaceProgress = {
      id: me.id,
      step,
      score: curScore,
      time: Date.now(),
      raceId: raceIdRef.current,
      done: step >= questions.length
    };
    try {
      channelRef.current.send({ type: 'broadcast', event: 'progress', payload: myProg });
    } catch (e) {}
  };

  const handleAnswerTimeout = () => {
    if (answered) return;
    setAnswered(true);
    setFeedback({
      text: L(['Time up!', 'Tempo scaduto!'], lang),
      ok: false
    });

    sendProgress(currentQIndex + 1, score);

    setTimeout(() => {
      advanceRef.current(score, correctCount);
    }, 1200);
  };

  const handleAnswerSelect = (optionIdx: number) => {
    if (answered || !questions[currentQIndex]) return;
    setAnswered(true);
    setSelectedOpt(optionIdx);

    const qItem = questions[currentQIndex];
    const isCorrect = qItem.order[optionIdx] === 0;

    let newScore = score;
    let newCorrect = correctCount;

    if (isCorrect) {
      const timeBonus = Math.round((timeRemaining / RACE_QTIME) * 50);
      const points = 50 + timeBonus;
      newScore += points;
      newCorrect += 1;
      setScore(newScore);
      setCorrectCount(newCorrect);
      setFeedback({
        text: `+${points} ${L(['Speed bonus!', 'Bonus velocità!'], lang)}`,
        ok: true
      });
    } else {
      setFeedback({
        text: L(['Missed!', 'Sbagliato!'], lang),
        ok: false
      });
    }

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    sendProgress(currentQIndex + 1, newScore);

    setTimeout(() => {
      advanceRef.current(newScore, newCorrect);
    }, 1200);
  };

  const advanceQuestion = (curScore: number, curCorrect: number) => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(i => i + 1);
      startQuestionTimer();
    } else {
      finishRace(curScore, curCorrect);
    }
  };

  const finishRace = (_finalScore: number, _finalCorrect: number) => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setRaceState('done');
  };

  // Timer and setTimeout callbacks outlive the render that created them; route them to the latest handlers.
  const timeoutRef = useRef(handleAnswerTimeout);
  timeoutRef.current = handleAnswerTimeout;
  const advanceRef = useRef(advanceQuestion);
  advanceRef.current = advanceQuestion;

  const handleLeave = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (channelRef.current) {
      try {
        channelRef.current.unsubscribe();
      } catch (e) {}
    }
    setRaceState('home');
    setMe(null);
    setPlayers({});
  };

  const handleBackToLobby = () => {
    if (channelRef.current && isHost) {
      try {
        channelRef.current.send({ type: 'broadcast', event: 'lobby', payload: {} });
      } catch (e) {}
    }
    setRaceState('lobby');
  };

  // Award XP once every racer has finished, so the winner bonus goes only to the actual winner.
  useEffect(() => {
    if (raceState !== 'done' || awardedRef.current || !me) return;
    const others = playerList.filter(p => p.id !== me.id);
    if (!others.every(p => progress[p.id]?.done)) return;
    awardedRef.current = true;
    const top = [...playerList].sort(
      (a, b) =>
        (b.id === me.id ? score : progress[b.id]?.score || 0) -
        (a.id === me.id ? score : progress[a.id]?.score || 0)
    )[0];
    const xp = raceXP(correctCount, top?.id === me.id, playerList.length);
    setLastXP(xp);
    addXP(xp);
  }, [raceState, progress, players, me, score, correctCount]);

  // 1. Home View: Join / Create Room
  if (raceState === 'home') {
    return (
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">{L(['Multiplayer Arena', 'Arena Multigiocatore'], lang)}</div>
            <h2>{L(['Race Arena', 'Arena della Gara'], lang)}</h2>
          </div>
        </div>

        <p className="muted" style={{ maxWidth: '62ch', margin: '10px 0 16px' }}>
          {L(
            [
              'Race your friends through missions in real time! Up to 8 players. Faster answers earn more points.',
              'Gareggia con le tue amiche in tempo reale! Fino a 8 giocatrici. Chi risponde più velocemente fa più punti.'
            ],
            lang
          )}
        </p>

        {errorMsg && (
          <div className="fb no" style={{ marginBottom: '14px' }}>
            {errorMsg}
          </div>
        )}

        <div className="row" style={{ gap: '14px', alignItems: 'stretch' }}>
          <div className="panel" style={{ flex: 1, minWidth: '240px' }}>
            <h3>{L(['Create a Room', 'Crea una Stanza'], lang)}</h3>
            <p className="muted" style={{ marginBottom: '14px', fontSize: '14px' }}>
              {L(
                ['Get a 4-letter room code to share with friends.', 'Ottieni un codice stanza da condividere.'],
                lang
              )}
            </p>
            <button
              className="btn"
              disabled={isPending}
              onClick={() => {
                const randomCode = Math.random().toString(36).slice(2, 6).toUpperCase();
                handleJoinOrCreate(randomCode, true);
              }}
            >
              {isPending ? L(['Connecting…', 'Connessione…'], lang) : L(['Create room', 'Crea stanza'], lang)}
            </button>
          </div>

          <div className="panel" style={{ flex: 1, minWidth: '240px' }}>
            <h3>{L(['Join a Room', 'Entra in una Stanza'], lang)}</h3>
            <p className="muted" style={{ marginBottom: '14px', fontSize: '14px' }}>
              {L(['Enter the 4-letter code from your friend.', 'Scrivi il codice di 4 caratteri della tua amica.'], lang)}
            </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleJoinOrCreate(codeInput, false);
              }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                className="race-sel"
                style={{ width: '120px', textTransform: 'uppercase', textAlign: 'center', fontSize: '18px' }}
                maxLength={4}
                placeholder="ABCD"
                value={codeInput}
                onChange={e => setCodeInput(e.target.value.toUpperCase())}
              />
              <button className="btn cyan" type="submit" disabled={isPending}>
                {L(['Join', 'Entra'], lang)}
              </button>
            </form>
          </div>
        </div>

        <div className="row" style={{ marginTop: '20px' }}>
          <button className="btn ghost" onClick={() => goToView('map')}>
            {L(U.missions, lang)}
          </button>
        </div>
      </div>
    );
  }

  // 2. Lobby View
  if (raceState === 'lobby') {
    return (
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">{L(['Room Code', 'Codice Stanza'], lang)}</div>
            <div className="race-code">{code}</div>
          </div>
          <div>
            <button className="btn ghost sm" onClick={handleLeave}>
              {L(['Leave Room', 'Esci'], lang)}
            </button>
          </div>
        </div>

        <p className="muted" style={{ margin: '8px 0 16px' }}>
          {L(
            ['Share this code with up to 7 other players.', 'Condividi questo codice con fino a 7 altre giocatrici.'],
            lang
          )}
        </p>

        <div className="eyebrow" style={{ marginBottom: '8px' }}>
          {L(['Players in room', 'Giocatrici nella stanza'], lang)} ({playerList.length}/{RACE_MAX})
        </div>

        <div className="plist" style={{ marginBottom: '20px' }}>
          {playerList.map(p => (
            <div className="pl" key={p.id}>
              <div
                className="avatar"
                dangerouslySetInnerHTML={{ __html: raceAvatar(p.name, p.hue) }}
              />
              <b>{p.name}</b>
              {p.id === hostPlayer?.id && (
                <span className="badge go">{L(['Host', 'Host'], lang)}</span>
              )}
              {p.id === me?.id && (
                <span className="badge ok">{L(['You', 'Tu'], lang)}</span>
              )}
            </div>
          ))}
        </div>

        {isHost ? (
          <div className="panel">
            <div className="eyebrow" style={{ marginBottom: '8px' }}>
              {L(['Select race topic', 'Scegli argomento gara'], lang)}
            </div>
            <select
              className="race-sel"
              value={selectedMission}
              onChange={e => setSelectedMission(e.target.value)}
              style={{ marginBottom: '14px' }}
            >
              <option value="mix">{L(['Mixed review (10 questions)', 'Ripasso misto (10 domande)'], lang)}</option>
              {MISSIONS.map(m => (
                <option key={m.id} value={m.id}>
                  § {m.sec} · {L(m.title, lang)}
                </option>
              ))}
            </select>
            <div>
              <button className="btn" onClick={handleHostStart}>
                {L(['Start Race!', 'Avvia Gara!'], lang)}
              </button>
            </div>
          </div>
        ) : (
          <div className="panel" style={{ textAlign: 'center', padding: '24px' }}>
            <p className="muted">
              {L(['Waiting for host to start the race…', 'In attesa che l\'host avvii la gara…'], lang)}
            </p>
          </div>
        )}
      </div>
    );
  }

  // 3. Countdown View
  if (raceState === 'countdown') {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div className="countdown">{countdownNum}</div>
        <p className="muted" style={{ marginTop: '16px', fontSize: '18px' }}>
          {L(['Get ready!', 'Pronti!'], lang)}
        </p>
      </div>
    );
  }

  // 4. Running Race View
  if (raceState === 'running') {
    const activeQ = questions[currentQIndex];
    const timerPct = (timeRemaining / RACE_QTIME) * 100;
    const totalSteps = questions.length;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Race Tracks */}
        <div className="card">
          <div className="lanes">
            {playerList.map(p => {
              const isMe = p.id === me?.id;
              const pProg = isMe
                ? { step: currentQIndex, score }
                : progress[p.id] || { step: 0, score: 0 };
              const runPct = Math.min(92, (pProg.step / totalSteps) * 90);

              return (
                <div key={p.id} className={`lane ${isMe ? 'me' : ''}`}>
                  <div
                    className="runner"
                    style={{ left: `${runPct}%` }}
                    dangerouslySetInnerHTML={{ __html: raceAvatar(p.name, p.hue) }}
                  />
                  <span className="nm">{p.name}</span>
                  <span className="sc">{pProg.score} pts</span>
                  <div className="flag" />
                </div>
              );
            })}
          </div>

          <div className="timer" style={{ marginTop: '12px' }}>
            <i style={{ width: `${timerPct}%` }} />
          </div>
        </div>

        {/* Question Arena */}
        {activeQ && (
          <div className="card qbox" style={{ textAlign: 'center' }}>
            <div className="count" style={{ marginBottom: '8px' }}>
              {L(['Question', 'Domanda'], lang)} {currentQIndex + 1} / {totalSteps}
            </div>

            <div className="qtxt" style={{ fontSize: '20px', marginBottom: '16px' }}>
              {L(activeQ.q.q, lang)}
            </div>

            <div className="opts">
              {activeQ.order.map((origIdx, btnIdx) => {
                const optText = L(activeQ.q.a[origIdx], lang);
                let btnCls = 'btn ghost opt';
                if (answered) {
                  if (origIdx === 0) btnCls = 'btn right opt';
                  else if (btnIdx === selectedOpt) btnCls = 'btn wrong opt';
                }

                return (
                  <button
                    key={btnIdx}
                    className={btnCls}
                    disabled={answered}
                    onClick={() => handleAnswerSelect(btnIdx)}
                  >
                    {optText}
                  </button>
                );
              })}
            </div>

            {feedback && (
              <div
                className={`fb ${feedback.ok ? 'ok' : 'no'}`}
                style={{ marginTop: '14px', fontWeight: 'bold' }}
              >
                {feedback.text}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // 5. Done Podium View
  const leaderboard = playerList
    .map(p => ({
      ...p,
      finalScore: p.id === me?.id ? score : (progress[p.id]?.score || 0)
    }))
    .sort((a, b) => b.finalScore - a.finalScore);

  const top3 = [leaderboard[1], leaderboard[0], leaderboard[2]].filter(Boolean);

  return (
    <div className="card result">
      <div className="eyebrow">{L(['Race Complete!', 'Gara Conclusa!'], lang)}</div>
      <h2>{L(['Podium', 'Podio'], lang)}</h2>

      <div className="podium" style={{ margin: '24px 0' }}>
        {top3.map((p, idx) => {
          if (!p) return null;
          const place = p.id === leaderboard[0]?.id ? '1' : p.id === leaderboard[1]?.id ? '2' : '3';
          const height = place === '1' ? '90px' : place === '2' ? '65px' : '45px';
          const bg = place === '1' ? 'var(--gold)' : place === '2' ? '#d9d8ea' : '#d28b5e';

          return (
            <div key={p.id}>
              <div
                className="avatar"
                dangerouslySetInnerHTML={{ __html: raceAvatar(p.name, p.hue) }}
              />
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{p.name}</span>
              <span className="muted" style={{ fontSize: '12px' }}>
                {p.finalScore} pts
              </span>
              <div className="blk" style={{ height, background: bg }}>
                {place}
              </div>
            </div>
          );
        })}
      </div>

      <p className="muted">
        {L(['Your score', 'Il tuo punteggio'], lang)}: <b>{score} pts</b>. {awardedRef.current ? `+${lastXP} XP!` : L(['Waiting for other racers…', 'In attesa delle altre giocatrici…'], lang)}
      </p>

      <div className="row" style={{ justifyContent: 'center', marginTop: '18px' }}>
        <button className="btn" onClick={handleBackToLobby}>
          {L(['Back to lobby', 'Torna alla stanza'], lang)}
        </button>
        <button className="btn ghost" onClick={handleLeave}>
          {L(U.missions, lang)}
        </button>
      </div>
    </div>
  );
};
