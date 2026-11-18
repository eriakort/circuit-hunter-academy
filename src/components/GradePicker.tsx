import React from 'react';
import { Flag } from './Flag';
import { useGame } from '../context/GameContext';
import { GRADES } from '../data/gradeData';
import { L } from '../helpers';
import { COUNTRIES, getCurriculum, getCurriculumGradeLevel } from '../data/curricula';

export const GradePicker: React.FC = () => {
  const { state, setGrade, curriculumProfile, setCurriculum } = useGame();
  const { lang } = state;
  const activeCurriculum = getCurriculum(curriculumProfile.activeCurriculumId);
  const isGhana = activeCurriculum?.countryCode === 'GH';

  return (
    <section className="hero card grade-picker">
      <div>
        <div className="eyebrow">{isGhana ? 'WELCOME TO SANKOFA · THE KNOWLEDGE QUEST' : L(['WELCOME TO YOUR ACADEMY', 'BENVENUTO NELLA TUA ACCADEMIA'], lang)}</div>
        <div className="curriculum-country-picker" role="group" aria-label="Choose country curriculum" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '14px 0' }}>
          {COUNTRIES.map(country => {
            const curriculum = country.curricula[0];
            const selected = curriculum.id === curriculumProfile.activeCurriculumId;
            return (
              <button
                key={country.code}
                type="button"
                className={`btn sm ${selected ? '' : 'ghost'}`}
                aria-pressed={selected}
                onClick={() => setCurriculum(curriculum.id)}
              >
                <Flag country={country.code} /> {country.name}
              </button>
            );
          })}
        </div>
        <p className="muted" style={{ marginTop: 0 }}>
          {activeCurriculum?.name}
        </p>
        <h1>{isGhana ? <>Sankofa <span>Knowledge Quest</span></> : <>Circuit Hunter <span>Academy</span></>}</h1>
        <p className="lede">
          {L(
            isGhana ? ['Learn from the past. Understand the present. Build the future. Choose your Ghana JHS or SHS level to begin exploring.', 'Learn from the past. Understand the present. Build the future. Choose your Ghana JHS or SHS level to begin exploring.'] : ['First, choose your school grade. You will then see only the subjects and learning paths designed for that level.', 'Per prima cosa, scegli la tua classe. Vedrai poi soltanto le materie e i percorsi didattici pensati per quel livello.'],
            lang
          )}
        </p>
      </div>

      {isGhana && (
        <div className="grade-coming-soon card" role="status">
          <h2>Your Sankofa journey begins here</h2>
          <p>Choose JHS 1–3 or SHS 1–3. JHS 1 Mathematics has all four strands, and JHS 2 Mathematics has all four strands. JHS 3 Mathematics now includes all four strands: Number, Algebra, Geometry and Measurement, and Handling Data. JHS 1 Science now includes all five strands: Diversity of Matter, Cycles, Systems, Forces and Energy, and Humans and the Environment; JHS 2 Science now includes Diversity of Matter, Cycles, Systems and Forces and Energy; Humans and the Environment and JHS 3 Science will arrive in later increments. Existing SHS Core Mathematics pathways remain available. Your Italian progress remains saved independently.</p>
        </div>
      )}

      <div className="grade-options" role="group" aria-label={L(['Choose your grade', 'Scegli la tua classe'], lang)}>
        {GRADES.filter(grade => !isGhana || ['ghjhs1', 'ghjhs2', 'ghjhs3', 'ghshs1', 'ghshs2', 'ghshs3'].includes(grade.id)).map(grade => {
          const selected = state.grade === grade.id;
          const ghanaLevel = isGhana ? getCurriculumGradeLevel('ghana-nacca', grade.id) : undefined;
          const ready = isGhana ? ['ghjhs1', 'ghjhs2', 'ghjhs3', 'ghshs1', 'ghshs2', 'ghshs3'].includes(grade.id) : grade.status === 'ready';
          const statusCopy: [string, string] =
            grade.id === 'grade5'
              ? ['Science, Maths, Italian, History & Geography · Ready', 'Scienze, Matematica, Italiano, Storia e Geografia · Pronte']
              : ready
                ? grade.id === 'grade9'
                  ? ['CS, Physics, Math, Italian, Chem L1, History & Geo · Ready', 'Informatica, Fisica, Matematica, Italiano, Chimica L1, Storia e Geo · Pronte']
                  : grade.id === 'grade10'
                    ? ['Maths L2, Chemistry L2, Italian, History & World Geo · Ready', 'Matematica L2, Chimica L2, Italiano, Storia e Geografia · Pronte']
                    : ['Maths L3, Chemistry L3, Italian, Modern History & Geopolitics · Ready', 'Matematica L3, Chimica L3, Italiano, Storia Moderna e Geopolitica · Pronte']
                : ['Curriculum setup next', 'Programma in preparazione'];

          return (
            <button
              key={grade.id}
              data-grade={grade.id}
              className={`grade-card${ready ? ' grade-card-ready' : ''}${selected ? ' grade-card-selected' : ''}`}
              aria-pressed={selected}
              onClick={() => setGrade(grade.id)}
              disabled={false}
            >
              <span className="grade-card-art" aria-hidden="true">{ghanaLevel?.badge ?? grade.id.replace('grade', '')}</span>
              <span className="grade-card-kicker">{ghanaLevel?.kicker ?? L(grade.schoolLevel, lang)}</span>
              <strong>{ghanaLevel?.label ?? L(grade.name, lang)}</strong>
              <span className="grade-card-detail">{ghanaLevel?.ageRange ?? L(grade.ageRange, lang)}</span>
              <span className="grade-card-status">
                {isGhana ? (grade.id === 'ghjhs1' ? 'Mathematics · all four strands + Science pilot · JHS 1' : grade.id === 'ghjhs2' ? 'Mathematics · all four strands + Science Diversity, Cycles, Systems & Forces and Energy · JHS 2' : grade.id === 'ghjhs3' ? 'Mathematics · JHS 3 all four strands available' : grade.id.startsWith('ghjhs') ? 'JHS Mathematics & Science · coming in upcoming increments' : grade.id === 'ghshs1' ? 'Core Mathematics · SHS 1 pilot available' : grade.id === 'ghshs2' ? 'Core Mathematics · SHS 2 pathway available' : 'Core Mathematics · SHS 3 pathway available') : L(statusCopy, lang)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
