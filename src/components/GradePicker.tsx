import React from 'react';
import { useGame } from '../context/GameContext';
import { GRADES } from '../data/gradeData';
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

      <div className="grade-options" role="group" aria-label={L(['Choose your grade', 'Scegli la tua classe'], lang)}>
        {GRADES.map(grade => {
          const selected = state.grade === grade.id;
          const ready = grade.status === 'ready';
          const statusCopy: [string, string] =
            grade.id === 'grade5'
              ? ['Science, Maths & Italian available', 'Scienze, Matematica e Italiano disponibili']
              : ready
                ? grade.id === 'grade9'
                  ? ['CS, Physics, Math, Italian & Chemistry L1 · Ready', 'Informatica, Fisica, Matematica, Italiano e Chimica L1 · Pronte']
                  : grade.id === 'grade10'
                    ? ['Chemistry Level 2 & Italian · Ready', 'Chimica Livello 2 e Italiano · Pronte']
                    : ['Chemistry Level 3 & Italian · Ready', 'Chimica Livello 3 e Italiano · Pronte']
                : ['Curriculum setup next', 'Programma in preparazione'];

          return (
            <button
              key={grade.id}
              data-grade={grade.id}
              className={`grade-card${ready ? ' grade-card-current' : ''}${selected ? ' grade-card-selected' : ''}`}
              aria-pressed={selected}
              onClick={() => setGrade(grade.id)}
            >
              <span className="grade-card-art" aria-hidden="true">{grade.id.replace('grade', '')}</span>
              <span className="grade-card-kicker">{L(grade.schoolLevel, lang)}</span>
              <strong>{L(grade.name, lang)}</strong>
              <span className="grade-card-detail">{L(grade.ageRange, lang)}</span>
              <span className="grade-card-status">
                {L(statusCopy, lang)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
