import React from 'react';

/** Collapsed extra notes under a scene, so long lesson text no longer pushes the animation off screen. */
export const MoreDetails: React.FC<{ summary: string; children: React.ReactNode }> = ({ summary, children }) => (
  <details className="motion-scene__more">
    <summary>{summary}</summary>
    <div className="motion-scene__more-body">{children}</div>
  </details>
);
