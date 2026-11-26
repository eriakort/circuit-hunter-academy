import React from 'react';
import { getGhanaMathLabSpec } from './ghanaMathLabs/ghanaMathLabConfig';
import { GhanaNumberFinanceLab } from './ghanaMathLabs/GhanaNumberFinanceLab';
import { GhanaAlgebraGraphsLab } from './ghanaMathLabs/GhanaAlgebraGraphsLab';
import { GhanaGeometryTrigLab } from './ghanaMathLabs/GhanaGeometryTrigLab';
import { GhanaDataProbabilityLab } from './ghanaMathLabs/GhanaDataProbabilityLab';

export const GhanaMathLab: React.FC<{ missionId: string }> = ({ missionId }) => {
  const spec = getGhanaMathLabSpec(missionId);
  if (!spec) return null;

  return (
    <section className="math-lab" data-testid="ghana-math-lab" aria-label={spec.title}>
      <header className="ml-heading">
        <span className="ml-kicker">GHANA MATHEMATICS LAB · INTERACTIVE EXPLORER</span>
        <h3>{spec.title}</h3>
        <p>{spec.subtitle}</p>
      </header>

      {spec.family === 'number' && <GhanaNumberFinanceLab mode={spec.mode} />}
      {spec.family === 'algebra' && <GhanaAlgebraGraphsLab mode={spec.mode} />}
      {spec.family === 'geometry' && <GhanaGeometryTrigLab mode={spec.mode} />}
      {spec.family === 'data' && <GhanaDataProbabilityLab mode={spec.mode} />}

      <p className="ml-footnote">{spec.note}</p>
    </section>
  );
};
