import React from 'react';
import { useGame } from '../context/GameContext';
import { SUBJECTS } from '../data/gameData';
import { getSubjectsForGrade } from '../data/gradeData';
import { L } from '../helpers';

export const SubjectPicker: React.FC = () => {
  const { state, setSubject, goToView } = useGame();
  const { lang, grade } = state;
  const gradeSubjects = grade ? getSubjectsForGrade(grade, SUBJECTS) : [];

  return (
    <section className="hero card">
      <div>
        <div className="eyebrow">{grade === 'grade5' ? L(['GRADE 5 · SUBJECTS', 'QUINTA PRIMARIA · MATERIE'], lang) : L(['GRADE 9 · CHOOSE YOUR SUBJECT', 'CLASSE 3ª MEDIA · SCEGLI LA MATERIA'], lang)}</div>
        <h1>
          Circuit Hunter <span>Academy</span>
        </h1>
        <p className="lede">
          {L(
            [
              grade === 'grade5' ? 'The Grade 5 curriculum is being organised separately. Choose Grade 9 to explore the existing academy.' : 'Choose a subject for Grade 9. Your existing missions and saved progress remain right where you left them.',
              grade === 'grade5' ? 'Il programma della quinta primaria viene organizzato separatamente. Scegli la terza media per esplorare l’accademia esistente.' : 'Scegli una materia per la classe terza della scuola secondaria di primo grado. Le missioni e i progressi già salvati restano al loro posto.'
            ],
            lang
          )}
        </p>
      </div>

      <div className="subjects">
        {gradeSubjects.length === 0 ? (
          <div className="grade-coming-soon card" role="status">
            <div className="grade-coming-icon" aria-hidden="true">✦</div>
            <h2>{L(['Grade 5 subjects are being prepared', 'Le materie della quinta primaria sono in preparazione'], lang)}</h2>
            <p>{L(['We will add the Grade 5 curriculum separately, including General Science where appropriate. Grade 5 will not reuse the Grade 9 Physics course.', 'Aggiungeremo un programma dedicato alla quinta primaria, compresa Scienze dove previsto. La quinta primaria non riutilizzerà il corso di Fisica della terza media.'], lang)}</p>
            <button className="btn" onClick={() => goToView('grades')}>{L(['Choose another grade', 'Scegli un’altra classe'], lang)}</button>
          </div>
        ) : gradeSubjects.map(s => (
          <button
            key={s.id}
            className="subjcard"
            data-s={s.id}
            onClick={() => setSubject(s.id)}
          >
            <div className="subjart" dangerouslySetInnerHTML={{ __html: s.art }} />
            <h2>{L(s.name, lang)}</h2>
            <p>{L(s.blurb, lang)}</p>
            <span className="pg">{L(s.meta, lang)}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
