import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// The shared motion-scene frame (MotionScene) renders with the `ghana-science-visual` classes.
// Frame markup and controls are covered in ghanaMotionScenes.test.ts; this checks the stylesheet rules.
const styles = readFileSync('src/index.css', 'utf8');
assert.match(styles, /\.ghana-science-visual__art\[data-playing="true"\]/);
assert.match(styles, /\.ghana-science-visual__art\[data-playing="false"\]/);
assert.match(styles, /@media\(prefers-reduced-motion:reduce\)/);
assert.match(styles, /@media\(max-width:600px\)/);

console.log('ghanaScienceVisual.test.ts ok! Motion frame styles, responsive and reduced-motion rules verified.');
