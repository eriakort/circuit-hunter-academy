import React from 'react';
import { Flag } from './Flag';
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
              <Flag country="IT" /> {L({ en: 'CEFR A1 · A2 · B1 SPEAKING & CONVERSATION STUDIO', it: 'STUDIO VOCALE E CONVERSAZIONE QCER A1 · A2 · B1', pt: 'ESTÚDIO DE FALA E CONVERSAÇÃO QECR A1 · A2 · B1', es: 'ESTUDIO DE HABLA Y CONVERSACIÓN MCER A1 · A2 · B1', fr: 'STUDIO D’EXPRESSION ORALE ET DE CONVERSATION CECRL A1 · A2 · B1', de: 'SPRECH- UND KONVERSATIONSSTUDIO GER A1 · A2 · B1' }, lang)}
            </div>
            <h1 style={{ margin: '4px 0', fontSize: '26px' }}>
              {L({ en: 'Italian Speaking Lab', it: 'Laboratorio Parlato di Italiano', pt: 'Laboratório de fala em italiano', es: 'Laboratorio de habla en italiano', fr: 'Labo d’expression orale en italien', de: 'Italienisches Sprechlabor' }, lang)}
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn sm"
              onClick={() => goToView('it-grammar')}
            >
              📚 {L({ en: 'Grammar Training', it: 'Allenamento Grammaticale', pt: 'Treino de gramática', es: 'Entrenamiento gramatical', fr: 'Entraînement grammatical', de: 'Grammatiktraining' }, lang)}
            </button>
            <button
              type="button"
              className="btn sm"
              onClick={() => goToView('it-listening')}
            >
              🎧 {L({ en: 'Listening Lab', it: 'Laboratorio di Ascolto', pt: 'Laboratório de escuta', es: 'Laboratorio de escucha', fr: 'Labo d’écoute', de: 'Hörlabor' }, lang)}
            </button>
            <button
              type="button"
              className="btn sm"
              onClick={() => goToView('it-checkpoint')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              🎤 {L({ en: 'Take Oral Trial', it: 'Affronta l’Esame Orale', pt: 'Fazer a prova oral', es: 'Hacer la prueba oral', fr: 'Passer l’épreuve orale', de: 'Mündliche Prüfung ablegen' }, lang)}
            </button>
            <button
              type="button"
              className="btn ghost sm"
              onClick={() => goToView('map')}
            >
              ← {L({ en: 'Back to Missions', it: 'Torna alle Missioni', pt: 'Voltar às missões', es: 'Volver a las misiones', fr: 'Retour aux missions', de: 'Zurück zu den Missionen' }, lang)}
            </button>
          </div>
        </div>

        <p className="muted" style={{ margin: 0, fontSize: '14.5px', maxWidth: '80ch', lineHeight: '1.6' }}>
          {L(
            { en: 'Develop natural speaking confidence in Italian. Practice pronunciation with real-time phonetic scoring, rehearse interactive café and city dialogues, or drill verb conjugations across present, past, and subjunctive tenses.', it: 'Sviluppa una reale sicurezza nel parlare italiano. Allena la pronuncia con valutazione fonetica in tempo reale, simula dialoghi al bar e in città, oppure esercitati sui verbi tra presente, passato prossimo e congiuntivo.', pt: 'Ganhe confiança para falar italiano com naturalidade. Pratique a pronúncia com avaliação fonética em tempo real, ensaie diálogos interativos no café e na cidade ou treine conjugações no presente, no passado e no subjuntivo.', es: 'Gana confianza para hablar italiano con naturalidad. Practica la pronunciación con evaluación fonética en tiempo real, ensaya diálogos interactivos en el café y en la ciudad o practica conjugaciones en presente, pasado y subjuntivo.', fr: 'Gagne en aisance à l’oral en italien. Travaille ta prononciation avec une évaluation phonétique en temps réel, répète des dialogues interactifs au café et en ville, ou entraîne-toi aux conjugaisons au présent, au passé et au subjonctif.', de: 'Gewinne Sicherheit beim Italienischsprechen. Übe die Aussprache mit phonetischer Bewertung in Echtzeit, spiele interaktive Dialoge im Café und in der Stadt durch oder trainiere Konjugationen in Präsens, Vergangenheit und Konjunktiv.' },
            lang
          )}
        </p>

        {/* Feature Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '4px' }}>
          <span className="badge" style={{ background: 'rgba(0, 146, 70, 0.15)', color: '#4ade80', borderColor: 'rgba(0, 146, 70, 0.3)' }}>
            🎙️ {L({ en: 'Speech Recognition Active', it: 'Riconoscimento Vocale Attivo', pt: 'Reconhecimento de voz ativo', es: 'Reconocimiento de voz activo', fr: 'Reconnaissance vocale active', de: 'Spracherkennung aktiv' }, lang)}
          </span>
          <span className="badge" style={{ background: 'rgba(255, 209, 102, 0.12)', color: '#ffd166', borderColor: 'rgba(255, 209, 102, 0.3)' }}>
            🔊 {L({ en: 'Native Audio Model (Normal & Slow)', it: 'Modello Audio Madrelingua (Normale e Lento)', pt: 'Áudio nativo (normal e lento)', es: 'Audio nativo (normal y lento)', fr: 'Audio natif (normal et lent)', de: 'Muttersprachliches Audio (normal und langsam)' }, lang)}
          </span>
          <span className="badge" style={{ background: 'rgba(206, 43, 55, 0.15)', color: '#f87171', borderColor: 'rgba(206, 43, 55, 0.3)' }}>
            📊 {L({ en: 'Levenshtein Phonetic Scoring', it: 'Punteggio Fonetico Levenshtein', pt: 'Avaliação fonética Levenshtein', es: 'Puntuación fonética Levenshtein', fr: 'Score phonétique Levenshtein', de: 'Phonetische Levenshtein-Bewertung' }, lang)}
          </span>
        </div>
      </section>

      {/* Main Lab Component */}
      <ItalianLab />
    </div>
  );
};

export default ItalianLabScreen;
