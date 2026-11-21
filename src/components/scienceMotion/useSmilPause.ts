import { useEffect, type RefObject } from 'react';

/** Pauses or resumes every SVG (SMIL) animation inside an <svg> when the learner presses Pause. */
export const useSmilPause = (svg: RefObject<SVGSVGElement | null>, playing: boolean, reducedMotion: boolean, ...deps: unknown[]) => {
  useEffect(() => {
    const element = svg.current;
    if (!element || typeof element.pauseAnimations !== 'function') return;
    if (playing && !reducedMotion) element.unpauseAnimations(); else element.pauseAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, reducedMotion, svg, ...deps]);
};
