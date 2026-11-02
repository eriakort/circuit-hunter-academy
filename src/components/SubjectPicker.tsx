import React from 'react';
import { useGame } from '../context/GameContext';
import { SUBJECTS } from '../data/gameData';
import { L } from '../helpers';

export const SubjectPicker: React.FC = () => {
  const { state, setSubject } = useGame();
  const { lang } = state;

  return (
    <section className="hero card">
      <div>
        <div className="eyebrow">{L(['Choose your path', 'Scegli il tuo percorso'], lang)}</div>
        <h1>
          Circuit Hunter <span>Academy</span>
        </h1>
        <p className="lede">
          {L(
            [
              'Pick a subject to begin. Each is a full academy — its own missions, techniques, Codex and demons. Your hunter name and XP are shared across both.',
              "Scegli una materia per iniziare. Ognuna è un'accademia completa — missioni, tecniche, Glossario e demoni propri. Il tuo nome e i tuoi XP valgono per entrambe."
            ],
            lang
          )}
        </p>
      </div>

      <div className="subjects">
        {SUBJECTS.map(s => (
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
