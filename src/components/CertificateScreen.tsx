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
        {state.subject === 'italian' && (
          <div style={{
            marginTop: '16px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(0, 146, 70, 0.1)',
            border: '1px solid rgba(0, 146, 70, 0.35)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '13px', color: '#4ade80', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🇮🇹 {L(['CEFR Italian Speaking Certification', 'Certificazione Orale QCER di Lingua Italiana'], lang)}
            </div>
            {state.checkpointProgress?.['it_checkpoint_a1_b1']?.completed ? (
              <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text)' }}>
                ★ {L(
                  [`Distinction: CEFR A1, A2, and B1 Speaking Examination passed with ${state.checkpointProgress['it_checkpoint_a1_b1'].bestScore}% score!`,
                   `Distinzione: Esame orale QCER A1, A2 e B1 superato con il ${state.checkpointProgress['it_checkpoint_a1_b1'].bestScore}%!`],
                  lang
                )}
              </p>
            ) : (
              <div style={{ marginTop: '6px' }}>
                <p style={{ margin: '0 0 8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                  {L(
                    ['Ready for official speaking certification? Complete the oral examination to earn your CEFR diploma.',
                     'Pronta per la certificazione orale ufficiale? Completa l’esame orale per ottenere il tuo diploma QCER.'],
                    lang
                  )}
                </p>
                <button
                  type="button"
                  className="btn sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onClick={() => goToView('it-checkpoint')}
                >
                  🎤 {L(['Take CEFR Oral Exam', 'Affronta l’Esame Orale QCER'], lang)}
                </button>
              </div>
            )}
          </div>
        )}
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
          {state.subject === 'italian' && (
            <button className="btn" onClick={() => goToView('it-lab')}>
              🎙️ {L(['Speaking Lab', 'Laboratorio Parlato'], lang)}
            </button>
          )}
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
