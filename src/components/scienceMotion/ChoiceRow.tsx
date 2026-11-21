import React from 'react';

/** A row of toggle buttons (for example Savanna / Pond) inside a motion scene. */
export const ChoiceRow: React.FC<{ label: string; options: { id: string; label: string }[]; value: string; onChange: (id: string) => void }> = ({ label, options, value, onChange }) => (
  <div className="gh-jhs1-science-interaction">
    <div className="gh-jhs1-science-choices" role="group" aria-label={label}>
      {options.map(option => (
        <button key={option.id} type="button" className={`gh-jhs1-science-choice${value === option.id ? ' is-active' : ''}`} aria-pressed={value === option.id} onClick={() => onChange(option.id)}>{option.label}</button>
      ))}
    </div>
  </div>
);
