import React from 'react';
import type { Language } from '../types';
import { getGrade5MathLabSpec, g5Txt } from './grade5MathLabs/grade5MathLabConfig';
import { Grade5NumbersLab } from './grade5MathLabs/Grade5NumbersLab';
import { Grade5FractionsMeasureLab } from './grade5MathLabs/Grade5FractionsMeasureLab';
import { Grade5DataLogicLab } from './grade5MathLabs/Grade5DataLogicLab';
import { Grade5GeometryLab } from './grade5MathLabs/Grade5GeometryLab';

type Props = { missionId: string; lang: Language };

export const Grade5MathLab: React.FC<Props> = ({ missionId, lang }) => {
  const spec = getGrade5MathLabSpec(missionId);
  if (!spec) return null;

  const isNumbers = ['place-powers', 'roman-numerals', 'number-rounding', 'operations-order', 'factors-primes'].includes(spec.mode);
  const isFracMeas = ['fractions-decimals', 'percentages-money', 'metric-time', 'speed-trade'].includes(spec.mode);
  const isDataLogic = ['problems-proportion', 'logic-venn', 'data-averages', 'probability-spinner'].includes(spec.mode);

  return (
    <section
      className="math-lab"
      data-testid="grade5-math-lab"
      aria-label={g5Txt(lang, 'Interactive Grade 5 mathematics explorer', 'Laboratorio interattivo di matematica quinta elementare')}
    >
      <header className="ml-heading">
        <span className="ml-kicker">{g5Txt(lang, 'GRADE 5 MATH LAB · INTERACTIVE EXPLORER', 'LABORATORIO DI MATEMATICA · QUINTA')}</span>
        <h3>{g5Txt(lang, spec.title[0], spec.title[1])}</h3>
        <p>{g5Txt(lang, spec.prompt[0], spec.prompt[1])}</p>
      </header>

      {isNumbers && <Grade5NumbersLab mode={spec.mode} missionId={missionId} lang={lang} />}
      {isFracMeas && <Grade5FractionsMeasureLab mode={spec.mode} missionId={missionId} lang={lang} />}
      {isDataLogic && <Grade5DataLogicLab mode={spec.mode} lang={lang} />}
      {!isNumbers && !isFracMeas && !isDataLogic && (
        <Grade5GeometryLab mode={spec.mode} missionId={missionId} lang={lang} />
      )}

      <p className="ml-footnote">{g5Txt(lang, spec.footnote[0], spec.footnote[1])}</p>
    </section>
  );
};
