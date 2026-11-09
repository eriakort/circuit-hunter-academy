import React from 'react';
import { useGame } from '../context/GameContext';
import { getCurriculumSubjects, ITALIAN_SUBJECT } from '../data/curriculumSubjects';
import { SubjectId } from '../types';
import { L } from '../helpers';

export const SubjectPickerScreen: React.FC = () => {
  const { state, setSubject, goToView } = useGame();
  const { lang, grade } = state;
  const activeGrade = (grade === 'grade5' || grade === 'grade9') ? grade : 'grade9';

  // Obtain authoritative list from curriculumSubjects registry
  const baseSubjects = getCurriculumSubjects(activeGrade);
  // Fail-safe guarantee: Italian is never omitted
  const gradeSubjects = baseSubjects.some(s => s.id === 'italian')
    ? baseSubjects
    : [...baseSubjects, ITALIAN_SUBJECT];

  const handleSelect = (id: SubjectId) => {
    setSubject(id);
  };

  return (
    <section className="hero card">
      <div>
        <div className="eyebrow">
          {grade === 'grade5'
            ? L(['GRADE 5 · SUBJECTS', 'QUINTA PRIMARIA · MATERIE'], lang)
            : L(['GRADE 9 · CHOOSE YOUR SUBJECT', 'CLASSE 3ª MEDIA · SCEGLI LA MATERIA'], lang)}
        </div>
        <h1>
          Circuit Hunter <span>Academy</span>
        </h1>
        <p className="lede">
          {L(
            [
              grade === 'grade5'
                ? 'Explore Science & Technology or Italian Studies. More subjects will be added as curricula prepare.'
                : 'Choose a subject for Grade 9: Computer Science, Physics, Mathematics, or Italian Studies (CEFR A1–B1 with Speech).',
              grade === 'grade5'
                ? 'Esplora Scienze e Tecnologia o Lingua Italiana. Altre materie saranno aggiunte via via.'
                : 'Scegli una materia per la classe 3ª: Informatica, Fisica, Matematica o Lingua Italiana (QCER A1–B1 con parlato).'
            ],
            lang
          )}
        </p>

        {/* Quick Launch Pills for instant 1-tap switching */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }} role="navigation" aria-label={L(['Quick subject launch', 'Avvio rapido materie'], lang)}>
          <span style={{ fontSize: '12px', color: 'var(--muted)', alignSelf: 'center', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {L(['Direct Launch:', 'Avvio Rapido:'], lang)}
          </span>
          <button
            type="button"
            className="btn ghost sm"
            style={{ padding: '4px 10px', fontSize: '13px', borderColor: 'var(--ember)' }}
            onClick={() => handleSelect('italian')}
          >
            🇮🇹 {L(['Italian (A1–B1)', 'Italiano (A1–B1)'], lang)}
          </button>
          <button
            type="button"
            className="btn ghost sm"
            style={{ padding: '4px 10px', fontSize: '13px' }}
            onClick={() => handleSelect('cs')}
          >
            💻 CS
          </button>
          <button
            type="button"
            className="btn ghost sm"
            style={{ padding: '4px 10px', fontSize: '13px' }}
            onClick={() => handleSelect('phys')}
          >
            ⚛️ Physics
          </button>
          <button
            type="button"
            className="btn ghost sm"
            style={{ padding: '4px 10px', fontSize: '13px' }}
            onClick={() => handleSelect('math')}
          >
            ∑ Math
          </button>
        </div>
      </div>

      <div className="subjects">
        {gradeSubjects.length === 0 ? (
          <div className="grade-coming-soon card" role="status">
            <div className="grade-coming-icon" aria-hidden="true">✦</div>
            <h2>{L(['Grade 5 subjects are being prepared', 'Le materie della quinta primaria sono in preparazione'], lang)}</h2>
            <p>{L(['We will add the Grade 5 curriculum separately.', 'Aggiungeremo un programma dedicato.'], lang)}</p>
            <button className="btn" onClick={() => goToView('grades')}>{L(['Choose another grade', 'Scegli un’altra classe'], lang)}</button>
          </div>
        ) : gradeSubjects.map(s => (
          <button
            key={s.id}
            className={`subjcard${s.id === 'italian' ? ' subjcard-italian' : ''}`}
            data-s={s.id}
            onClick={() => handleSelect(s.id)}
            style={s.id === 'italian' ? { borderColor: 'rgba(0, 146, 70, 0.5)', background: 'linear-gradient(145deg, rgba(17, 25, 54, 0.95), rgba(206, 43, 55, 0.08))' } : undefined}
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

export default SubjectPickerScreen;
