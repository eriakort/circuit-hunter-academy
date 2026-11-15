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
              ? ['Science, Maths, Italian, History & Geography available', 'Scienze, Matematica, Italiano, Storia e Geografia disponibili']
              : ready
                ? grade.id === 'grade9'
                  ? ['CS, Physics, Math, Italian, Chem L1, History & Geo · Ready', 'Informatica, Fisica, Matematica, Italiano, Chimica L1, Storia e Geo · Pronte']
                  : grade.id === 'grade10'
                    ? ['Chemistry L2, Italian, History & World Geo · Ready', 'Chimica L2, Italiano, Storia e Geografia · Pronte']
                    : ['Chemistry L3, Italian, Modern History & Geopolitics · Ready', 'Chimica L3, Italiano, Storia Moderna e Geopolitica · Pronte']
                : ['Curriculum setup next', 'Programma in preparazione'];

          return (
            <button
              key={grade.id}
              data-grade={grade.id}
              className={`grade-card${ready ? ' grade-card-ready' : ''}${selected ? ' grade-card-selected' : ''}`}
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
