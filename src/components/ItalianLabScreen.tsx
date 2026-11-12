import React from 'react';
import { useGame } from '../context/GameContext';
import { ItalianLab } from './ItalianLab';
import { L } from '../helpers';

export const ItalianLabScreen: React.FC = () => {
  const { state, goToView } = useGame();
  const { lang } = state;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header Card */}
      <section className="card" style={{
        background: 'linear-gradient(135deg, rgba(17, 25, 54, 0.95), rgba(0, 146, 70, 0.12) 50%, rgba(206, 43, 55, 0.12))',
        border: '1px solid rgba(0, 146, 70, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <div className="eyebrow" style={{ color: '#00c853' }}>
              🇮🇹 {L(['CEFR A1 · A2 · B1 SPEAKING & CONVERSATION STUDIO', 'STUDIO VOCALE E CONVERSAZIONE QCER A1 · A2 · B1'], lang)}
            </div>
            <h1 style={{ margin: '4px 0', fontSize: '26px' }}>
              {L(['Italian Speaking Lab', 'Laboratorio Parlato di Italiano'], lang)}
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn sm"
              onClick={() => goToView('it-checkpoint')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              🎤 {L(['Take Oral Trial', 'Affronta l’Esame Orale'], lang)}
            </button>
            <button
              type="button"
              className="btn ghost sm"
              onClick={() => goToView('map')}
            >
              ← {L(['Back to Missions', 'Torna alle Missioni'], lang)}
            </button>
          </div>
        </div>

        <p className="muted" style={{ margin: 0, fontSize: '14.5px', maxWidth: '80ch', lineHeight: '1.6' }}>
          {L(
            [
              'Develop natural speaking confidence in Italian. Practice pronunciation with real-time phonetic scoring, rehearse interactive café and city dialogues, or drill verb conjugations across present, past, and subjunctive tenses.',
              'Sviluppa una reale sicurezza nel parlare italiano. Allena la pronuncia con valutazione fonetica in tempo reale, simula dialoghi al bar e in città, oppure esercitati sui verbi tra presente, passato prossimo e congiuntivo.'
            ],
            lang
          )}
        </p>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '4px' }}>
          <span className="badge" style={{ background: 'rgba(0, 146, 70, 0.15)', color: '#4ade80', borderColor: 'rgba(0, 146, 70, 0.3)' }}>
            🎙️ {L(['Speech Recognition Active', 'Riconoscimento Vocale Attivo'], lang)}
          </span>
          <span className="badge" style={{ background: 'rgba(255, 209, 102, 0.12)', color: '#ffd166', borderColor: 'rgba(255, 209, 102, 0.3)' }}>
            🔊 {L(['Native Audio Model (Normal & Slow)', 'Modello Audio Madrelingua (Normale e Lento)'], lang)}
          </span>
          <span className="badge" style={{ background: 'rgba(206, 43, 55, 0.15)', color: '#f87171', borderColor: 'rgba(206, 43, 55, 0.3)' }}>
            📊 {L(['Levenshtein Phonetic Scoring', 'Punteggio Fonetico Levenshtein'], lang)}
          </span>
        </div>
      </section>

      {/* Main Lab Component */}
      <ItalianLab />
    </div>
  );
};

export default ItalianLabScreen;
