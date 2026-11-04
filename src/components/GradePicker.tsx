import React from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';

export const GradePicker: React.FC = () => {
  const { state, setGrade } = useGame();
  const { lang } = state;

  return (
    <section className="hero card grade-picker">
      <div>
        <div className="eyebrow">{L(['WELCOME TO YOUR ACADEMY', 'BENVENUTO NELLA TUA ACCADEMIA'], lang)}</div>
        <h1>Circuit Hunter <span>Academy</span></h1>
        <p className="lede">
          {L(
            ['First, choose your school grade. You will then see only the subjects and learning paths designed for that level.', 'Per prima cosa, scegli la tua classe. Vedrai poi soltanto le materie e i percorsi didattici pensati per quel livello.'],
            lang
          )}
        </p>
      </div>

      <div className="grade-options" aria-label={L(['Choose your grade', 'Scegli la tua classe'], lang)}>
        <button className="grade-card" onClick={() => setGrade('grade5')}>
          <span className="grade-card-art" aria-hidden="true">５</span>
          <span className="grade-card-kicker">{L(['PRIMARY SCHOOL', 'SCUOLA PRIMARIA'], lang)}</span>
          <strong>{L(['Grade 5', 'Quinta primaria'], lang)}</strong>
          <span className="grade-card-detail">{L(['Usually ages 10–11', 'Generalmente 10–11 anni'], lang)}</span>
          <span className="grade-card-status">{L(['Curriculum setup next', 'Programma in preparazione'], lang)}</span>
        </button>

        <button className="grade-card grade-card-current" onClick={() => setGrade('grade9')}>
          <span className="grade-card-art" aria-hidden="true">９</span>
          <span className="grade-card-kicker">{L(['LOWER SECONDARY SCHOOL', 'SCUOLA SECONDARIA DI PRIMO GRADO'], lang)}</span>
          <strong>{L(['Grade 9', 'Terza media'], lang)}</strong>
          <span className="grade-card-detail">{L(['Usually ages 13–14', 'Generalmente 13–14 anni'], lang)}</span>
          <span className="grade-card-status">{L(['Existing academy · Ready', 'Accademia esistente · Pronta'], lang)}</span>
        </button>
      </div>
    </section>
  );
};
