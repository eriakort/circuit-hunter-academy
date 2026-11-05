import React from 'react';
import { useGame } from '../context/GameContext';
import { RANKS } from '../data/gameData';
import { L, demonSVG, esc, rankOf, U } from '../helpers';

export const CertificateScreen: React.FC = () => {
  const { state, myMissions, goToView, startBattle } = useGame();
  const { lang, name, xp } = state;

  const currentRank = rankOf(xp, RANKS);
  const dateStr = new Date().toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const missions = myMissions();

  return (
    <>
      <div className="cert">
        <div className="eyebrow">
          Circuit Hunter Academy · {L(['Certificate of mastery', 'Diploma di maestria'], lang)}
        </div>

        <div style={{ width: 'min(200px, 50%)', margin: '0 auto' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: demonSVG(275, 5, 3, 'dia')
            }}
          />
        </div>

        <p>
          {L(
            [
              `All ${missions.length} missions cleared and every Glitch Demon sealed by`,
              `Tutte le ${missions.length} missioni superate e tutti i Demoni Glitch sigillati da`
            ],
            lang
          )}
        </p>

        <div className="nm">{esc(name)}</div>

        <p className="rank" style={{ fontSize: '15px' }}>
          {L(currentRank[1], lang)} · {xp} XP
        </p>
        <p className="muted">{dateStr}</p>

        <div className="techlist" style={{ marginTop: '6px' }}>
          {missions.map(m => (
            <div key={m.id}>{L(m.tech, lang)}</div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '18px' }}>
        <p>
          {L(
            [
              'You have cleared every mission in this subject. Keep it fresh with a few rounds in the Dojo each week, look through the Codex before tests — and try the other subject from Subjects at the top.',
              "Hai superato ogni missione di questa materia. Tieniti in allenamento con qualche round nel Dojo ogni settimana, sfoglia il Glossario prima delle verifiche — e prova l'altra materia da Materie in alto."
            ],
            lang
          )}
        </p>

        <div className="row" style={{ marginTop: '12px' }}>
          <button className="btn" id="dj" onClick={() => startBattle(true)}>
            Dojo
          </button>
          <button className="btn ghost" id="cx" onClick={() => goToView('codex')}>
            {L(U.codex, lang)}
          </button>
          <button className="btn ghost" id="mp" onClick={() => goToView('map')}>
            {L(U.missions, lang)}
          </button>
        </div>
      </div>
    </>
  );
};
