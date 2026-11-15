import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { BilingualText, RacePlayer } from '../types';
import { MISSIONS, ARCS } from '../data/gameData';
import { L, hueOf, raceAvatar, U } from '../helpers';
import {
  callRaceApi,
  createRaceSupabaseClient,
  ensureRaceSession,
  normalizeRaceQuestions,
  type RaceArenaLeaderboard,
  type RaceArenaQuestion
} from '../raceArenaClient';
import { calculateRaceCompletionXP } from '../raceCompletion';

type RaceStatus = 'home' | 'lobby' | 'running' | 'done';
type ServerMember = {
  user_id: string;
  display_name: string;
  score: number;
  correct_count: number;
  next_question_index: number;
  question_started_at: string | null;
  finished_at: string | null;
  joined_at: string;
};
type RaceSnapshot = {
  status: 'lobby' | 'running' | 'finished' | 'cancelled';
  grade: string;
  subject: string;
  missionId: string;
  isHost: boolean;
  questions: unknown;
  member: ServerMember | null;
  members: ServerMember[];
};
type Feedback = { kind: 'timeout' | 'missed' } | { kind: 'speed'; points: number };

const RACE_QTIME = 20_000;
const MAX_PLAYERS = 8;

export const RaceScreen: React.FC = () => {
  const { state, addXP, goToView } = useGame();
  const { lang, name, subject } = state;
  const grade = state.grade || 'grade9';
  const curSub = subject || 'cs';
  const subjectMissions = useMemo(
    () => MISSIONS.filter(m => (ARCS[m.arc]?.subject || 'cs') === curSub && m.quiz?.length),
    [curSub]
  );

  const clientRef = useRef<ReturnType<typeof createRaceSupabaseClient> | null>(null);
  const userIdRef = useRef('');
  if (!clientRef.current) clientRef.current = createRaceSupabaseClient();
  const client = clientRef.current;

  const [raceState, setRaceState] = useState<RaceStatus>('home');
  const [roomId, setRoomId] = useState('');
  const [code, setCode] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [selectedMission, setSelectedMission] = useState('mix');
  const [isHost, setIsHost] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [players, setPlayers] = useState<RacePlayer[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [questions, setQuestions] = useState<RaceArenaQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(RACE_QTIME);
  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [lastXP, setLastXP] = useState(0);
  const [serverStatus, setServerStatus] = useState<RaceSnapshot['status']>('lobby');
  const [questionStartedAt, setQuestionStartedAt] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<RaceArenaLeaderboard | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answerInFlightRef = useRef(false);
  const timeoutSubmittedRef = useRef('');
  const awardedRef = useRef(false);

  const playerList = players;
  const myId = userIdRef.current;
  const myPlayer = playerList.find(p => p.id === myId);
  const hostPlayer = playerList[0];
  const activeQuestion = questions[currentQIndex];
  const playerCount = Math.max(1, playerList.length);

  const getSnapshot = async (id: string) => {
    const snapshot = await callRaceApi<RaceSnapshot>(client, { action: 'state', roomId: id });
    const normalized = normalizeRaceQuestions(snapshot.questions);
    setServerStatus(snapshot.status);
    setIsHost(snapshot.isHost);
    setSelectedMission(snapshot.missionId || 'mix');
    setQuestions(normalized);
    const mappedPlayers = snapshot.members.map(member => ({
      id: member.user_id,
      name: member.display_name,
      joinedAt: new Date(member.joined_at).getTime() || Date.now(),
      hue: hueOf(member.display_name)
    }));
    setPlayers(mappedPlayers);
    setScores(Object.fromEntries(snapshot.members.map(member => [member.user_id, member.score])));
    setProgress(Object.fromEntries(snapshot.members.map(member => [member.user_id, member.next_question_index])));
    if (snapshot.member) {
      setScore(snapshot.member.score);
      setCorrectCount(snapshot.member.correct_count);
      setCurrentQIndex(snapshot.member.next_question_index);
      setQuestionStartedAt(snapshot.member.question_started_at);
      if (snapshot.member.finished_at) setRaceState('done');
      else if (snapshot.status === 'running') setRaceState('running');
      else if (snapshot.status === 'lobby') setRaceState('lobby');
    }
    if (snapshot.status === 'finished') setRaceState('done');
    if (snapshot.status === 'cancelled') setErrorMsg('This room has been closed.');
  };

  const startPolling = (id: string) => {
    if (pollRef.current) clearInterval(pollRef.current);
    void getSnapshot(id).catch(error => setErrorMsg(error.message || 'Could not load room state.'));
    pollRef.current = setInterval(() => {
      void getSnapshot(id).catch(error => setErrorMsg(error.message || 'Could not refresh room state.'));
    }, 1500);
  };

  const handleJoinOrCreate = async (roomCode: string, create: boolean) => {
    const cleanCode = roomCode.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    if (!create && cleanCode.length !== 4) {
      setErrorMsg('Enter a valid four-character room code.');
      return;
    }
    setIsPending(true);
    setErrorMsg('');
    try {
      const user = await ensureRaceSession(client);
      userIdRef.current = user.id;
      const displayName = (name || 'Hunter').trim().slice(0, 20) || 'Hunter';
      const result = create
        ? await callRaceApi<{ roomId: string; code: string; status: 'lobby' }>(client, {
            action: 'create', displayName, grade, subject: curSub, missionId: selectedMission
          })
        : await callRaceApi<{ roomId: string; grade: string; subject: string; missionId: string; status: 'lobby' }>(client, {
            action: 'join', displayName, code: cleanCode
          });
      setRoomId(result.roomId);
      setCode(create ? result.code : cleanCode);
      setRaceState('lobby');
      setScore(0);
      setCorrectCount(0);
      setLastXP(0);
      awardedRef.current = false;
      startPolling(result.roomId);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Could not connect to Race Arena.');
    } finally {
      setIsPending(false);
    }
  };

  const handleMissionChange = async (missionId: string) => {
    setSelectedMission(missionId);
    if (!roomId || !isHost) return;
    try {
      await callRaceApi(client, { action: 'configure', roomId, missionId });
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Could not update the race topic.');
    }
  };

  const handleHostStart = async () => {
    if (!roomId || !isHost || isPending) return;
    setIsPending(true);
    setErrorMsg('');
    try {
      await callRaceApi(client, { action: 'start', roomId });
      await getSnapshot(roomId);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Could not start the race.');
    } finally {
      setIsPending(false);
    }
  };

  const submitAnswer = async (selectedIndex: number) => {
    if (!roomId || answered || answerInFlightRef.current || !activeQuestion) return;
    answerInFlightRef.current = true;
    setAnswered(true);
    setSelectedOpt(selectedIndex >= 0 ? selectedIndex : null);
    if (timerRef.current) clearInterval(timerRef.current);
    try {
      const result = await callRaceApi<{
        correct: boolean; points: number; score: number; correctCount: number;
        finished: boolean; nextQuestion: unknown;
      }>(client, { action: 'answer', roomId, selectedIndex });
      setScore(result.score);
      setCorrectCount(result.correctCount);
      setFeedback(selectedIndex < 0
        ? { kind: 'timeout' }
        : result.correct
          ? { kind: 'speed', points: result.points }
          : { kind: 'missed' });
      window.setTimeout(() => {
        void getSnapshot(roomId).catch(error => setErrorMsg(error.message || 'Could not refresh race.'));
      }, 850);
    } catch (error) {
      setAnswered(false);
      setSelectedOpt(null);
      setErrorMsg(error instanceof Error ? error.message : 'Answer could not be submitted.');
    } finally {
      answerInFlightRef.current = false;
    }
  };

  useEffect(() => {
    if (raceState !== 'running' || !questionStartedAt || answered) return;
    const questionKey = roomId + ':' + currentQIndex;
    const started = new Date(questionStartedAt).getTime();
    const updateTimer = () => {
      const remaining = Math.max(0, RACE_QTIME - (Date.now() - started));
      setTimeRemaining(remaining);
      if (remaining <= 0 && timeoutSubmittedRef.current !== questionKey) {
        timeoutSubmittedRef.current = questionKey;
        void submitAnswer(-1);
      }
    };
    updateTimer();
    timerRef.current = setInterval(updateTimer, 100);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [raceState, questionStartedAt, currentQIndex, answered, roomId]);

  useEffect(() => {
    setAnswered(false);
    setSelectedOpt(null);
    setFeedback(null);
    timeoutSubmittedRef.current = '';
  }, [currentQIndex]);

  useEffect(() => {
    if (raceState !== 'done' || awardedRef.current || !myId) return;
    awardedRef.current = true;
    const ranked = [...playerList].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
    const winner = ranked[0]?.id === myId;
    const xp = calculateRaceCompletionXP(correctCount, winner, playerCount, true);
    setLastXP(xp);
    addXP(xp);
  }, [raceState, myId, playerList, scores, correctCount, playerCount, addXP]);

  useEffect(() => () => {
    if (pollRef.current) clearInterval(pollRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleLeave = () => {
    if (pollRef.current) clearInterval(pollRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    pollRef.current = null;
    timerRef.current = null;
    setRoomId('');
    setCode('');
    setPlayers([]);
    setScores({});
    setProgress({});
    setQuestions([]);
    setLeaderboard(null);
    setRaceState('home');
    setErrorMsg('');
    setServerStatus('lobby');
  };

  const handleBackToLobby = async () => {
    if (!roomId) return;
    try {
      await getSnapshot(roomId);
      setRaceState('lobby');
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Could not return to the lobby.');
    }
  };

  const timePct = Math.max(0, Math.min(100, (timeRemaining / RACE_QTIME) * 100));
  const rankedPlayers = [...playerList].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));

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
          {L(['Race your friends through missions in real time! Up to 8 players. Scores and answers are verified by the race server.', 'Gareggia con le tue amiche in tempo reale! Fino a 8 giocatrici. Punteggi e risposte sono verificati dal server.'], lang)}
        </p>
        {errorMsg && <div className="fb no" role="alert" style={{ marginBottom: 14 }}>{errorMsg}</div>}
        <div className="row" style={{ gap: 14, alignItems: 'stretch' }}>
          <div className="panel" style={{ flex: 1, minWidth: 240 }}>
            <h3>{L(['Create a Room', 'Crea una Stanza'], lang)}</h3>
            <p className="muted">{L(['Create a room for your grade and selected subject.', 'Crea una stanza per la tua classe e materia selezionata.'], lang)}</p>
            <button className="btn" disabled={isPending} onClick={() => handleJoinOrCreate('', true)}>
              {isPending ? L(['Connecting…', 'Connessione…'], lang) : L(['Create room', 'Crea stanza'], lang)}
            </button>
          </div>
          <div className="panel" style={{ flex: 1, minWidth: 240 }}>
            <h3>{L(['Join a Room', 'Entra in una Stanza'], lang)}</h3>
            <p className="muted">{L(['Enter the four-character code from the host.', 'Inserisci il codice di quattro caratteri dell’host.'], lang)}</p>
            <form onSubmit={event => { event.preventDefault(); void handleJoinOrCreate(codeInput, false); }} style={{ display: 'flex', gap: 8 }}>
              <input className="race-sel" style={{ width: 120, textTransform: 'uppercase', textAlign: 'center', fontSize: 18 }} maxLength={4} placeholder="ABCD" value={codeInput} onChange={event => setCodeInput(event.target.value.toUpperCase())} />
              <button className="btn cyan" type="submit" disabled={isPending}>{L(['Join', 'Entra'], lang)}</button>
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <button className="btn ghost" onClick={() => goToView('map')}>{L(U.missions, lang)}</button>
        </div>
      </div>
    );
  }

  if (raceState === 'lobby') {
    return (
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">{L(['Room Code', 'Codice Stanza'], lang)}</div>
            <div className="race-code">{code}</div>
          </div>
          <button className="btn ghost sm" onClick={handleLeave}>{L(['Leave Room', 'Esci'], lang)}</button>
        </div>
        <p className="muted" style={{ margin: '8px 0 16px' }}>{L(['Share this code with up to 7 other players.', 'Condividi questo codice con fino a 7 altre giocatrici.'], lang)}</p>
        {errorMsg && <div className="fb no" role="alert">{errorMsg}</div>}
        <div className="eyebrow" style={{ marginBottom: 8 }}>{L(['Players in room', 'Giocatrici nella stanza'], lang)} ({playerList.length}/{MAX_PLAYERS})</div>
        <div className="plist" style={{ marginBottom: 20 }}>
          {playerList.map(player => (
            <div className="pl" key={player.id}>
              <div className="avatar" dangerouslySetInnerHTML={{ __html: raceAvatar(player.name, player.hue) }} />
              <b>{player.name}</b>
              {player.id === hostPlayer?.id && <span className="badge go">{L(['Host', 'Host'], lang)}</span>}
              {player.id === myId && <span className="badge ok">{L(['You', 'Tu'], lang)}</span>}
            </div>
          ))}
        </div>
        {isHost ? (
          <div className="panel">
            <div className="eyebrow" style={{ marginBottom: 8 }}>{L(['Select race topic', 'Scegli argomento gara'], lang)}</div>
            <select className="race-sel" value={selectedMission} onChange={event => void handleMissionChange(event.target.value)} style={{ marginBottom: 14 }}>
              <option value="mix">{L(['Mixed review', 'Ripasso misto'], lang)}</option>
              {subjectMissions.map(mission => <option key={mission.id} value={mission.id}>§ {mission.sec} · {L(mission.title, lang)}</option>)}
            </select>
            <button className="btn" disabled={isPending || playerList.length < 1} onClick={() => void handleHostStart()}>
              {isPending ? L(['Starting…', 'Avvio…'], lang) : L(['Start Race!', 'Avvia Gara!'], lang)}
            </button>
          </div>
        ) : (
          <div className="panel" style={{ textAlign: 'center', padding: 24 }}>
            <p className="muted">{L(['Waiting for host to start the race…', 'In attesa che l’host avvii la gara…'], lang)}</p>
          </div>
        )}
      </div>
    );
  }

  if (raceState === 'running') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="card">
          <div className="lanes">
            {playerList.map(player => {
              const isMe = player.id === myId;
              const step = progress[player.id] || 0;
              const runPct = Math.min(92, (step / Math.max(1, questions.length)) * 90);
              return (
                <div key={player.id} className={`lane ${isMe ? 'me' : ''}`}>
                  <div className="runner" style={{ left: `${runPct}%` }} dangerouslySetInnerHTML={{ __html: raceAvatar(player.name, player.hue) }} />
                  <span className="nm">{player.name}</span>
                  <span className="sc">{scores[player.id] || 0} pts</span>
                  <div className="flag" />
                </div>
              );
            })}
          </div>
          <div className="timer" style={{ marginTop: 12 }}><i style={{ width: `${timePct}%` }} /></div>
        </div>
        {activeQuestion && (
          <div className="card qbox" style={{ textAlign: 'center' }}>
            <div className="count" style={{ marginBottom: 8 }}>{L(['Question', 'Domanda'], lang)} {currentQIndex + 1} / {questions.length}</div>
            <div className="qtxt" style={{ fontSize: 20, marginBottom: 16 }}>{L(activeQuestion.prompt, lang)}</div>
            <div className="opts">
              {activeQuestion.choices.map((choice, index) => {
                let cls = 'btn ghost opt';
                if (answered && selectedOpt === index) cls = feedback?.kind === 'speed' ? 'btn right opt' : 'btn wrong opt';
                return <button key={index} className={cls} disabled={answered} onClick={() => void submitAnswer(index)}>{L(choice, lang)}</button>;
              })}
            </div>
            {feedback && (
              <div className={`fb ${feedback.kind === 'speed' ? 'ok' : 'no'}`} style={{ marginTop: 14, fontWeight: 'bold' }}>
                {feedback.kind === 'speed' ? `+${feedback.points} ${L(['Speed bonus!', 'Bonus velocità!'], lang)}` : feedback.kind === 'timeout' ? L(['Time up!', 'Tempo scaduto!'], lang) : L(['Missed!', 'Sbagliato!'], lang)}
              </div>
            )}
          </div>
        )}
        {errorMsg && <div className="fb no" role="alert">{errorMsg}</div>}
      </div>
    );
  }

  const podium = [rankedPlayers[1], rankedPlayers[0], rankedPlayers[2]].filter(Boolean);
  return (
    <div className="card result">
      <div className="eyebrow">{L(['Race Complete!', 'Gara Conclusa!'], lang)}</div>
      <h2>{L(['Podium', 'Podio'], lang)}</h2>
      <div className="podium" style={{ margin: '24px 0' }}>
        {podium.map(player => {
          const place = rankedPlayers.findIndex(p => p.id === player.id) + 1;
          const height = place === 1 ? '90px' : place === 2 ? '65px' : '45px';
          const bg = place === 1 ? 'var(--gold)' : place === 2 ? '#d9d8ea' : '#d28b5e';
          return (
            <div key={player.id}>
              <div className="avatar" dangerouslySetInnerHTML={{ __html: raceAvatar(player.name, player.hue) }} />
              <span style={{ fontSize: 13, fontWeight: 'bold' }}>{player.name}</span>
              <span className="muted" style={{ fontSize: 12 }}>{scores[player.id] || 0} pts</span>
              <div className="blk" style={{ height, background: bg }}>{place}</div>
            </div>
          );
        })}
      </div>
      <p className="muted">{L(['Your verified score', 'Il tuo punteggio verificato'], lang)}: <b>{score} pts</b>. {lastXP > 0 ? `+${lastXP} XP!` : ''}</p>
      <div className="row" style={{ justifyContent: 'center', marginTop: 18 }}>
        <button className="btn" onClick={() => void handleBackToLobby()}>{L(['Refresh room', 'Aggiorna stanza'], lang)}</button>
        <button className="btn ghost" onClick={handleLeave}>{L(U.missions, lang)}</button>
      </div>
    </div>
  );
};
