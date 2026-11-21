/**
 * Sample switch for the redesigned science animations.
 * Open the app with ?motion=new to try them, ?motion=old to go back
 * (the choice is remembered in this browser). Delete this file and the three
 * scenes to drop the experiment.
 */
const KEY = 'ch-motion';

export const useNewMotion = (): boolean => {
  try {
    const param = new URLSearchParams(window.location.search).get('motion');
    if (param === 'new' || param === 'old') window.localStorage.setItem(KEY, param);
    return (param ?? window.localStorage.getItem(KEY)) === 'new';
  } catch {
    return new URLSearchParams(window.location.search).get('motion') === 'new';
  }
};
