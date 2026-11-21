import { useEffect, type RefObject } from 'react';

/**
 * Pauses or resumes every SVG (SMIL) animation inside an <svg> when the learner presses Pause.
 *
 * Chrome can leave animations that start at time 0 sitting on their first frame
 * until the timeline is nudged, so a resume pauses for one frame first.
 */
export const useSmilPause = (svg: RefObject<SVGSVGElement | null>, playing: boolean, reducedMotion: boolean, ...deps: unknown[]) => {
  useEffect(() => {
    const element = svg.current;
    if (!element || typeof element.pauseAnimations !== 'function') return;
    if (playing && !reducedMotion) {
      // A pause followed by a resume re-starts animations that Chrome leaves on their first frame after mounting.
      element.pauseAnimations();
      const frame = requestAnimationFrame(() => element.unpauseAnimations());
      return () => cancelAnimationFrame(frame);
    } else {
      element.pauseAnimations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, reducedMotion, svg, ...deps]);
};
