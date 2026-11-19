import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaScienceVisual } from '../src/components/GhanaScienceVisual';

const html = renderToStaticMarkup(React.createElement(GhanaScienceVisual, {
  title: 'Explore the water cycle',
  description: 'Follow water as it changes state.',
  lang: 'en',
  caption: 'Water moves through a continuous cycle.',
  children: React.createElement('svg', {
    viewBox: '0 0 100 60',
    role: 'img',
    'aria-label': 'Water cycle diagram'
  }, React.createElement('circle', { cx: 50, cy: 30, r: 10, className: 'gh-science-motion' }))
}));

assert.match(html, /data-testid="ghana-science-visual"/);
assert.match(html, /aria-label="Animation controls"/);
assert.match(html, />Play<\/button>/);
assert.match(html, />Replay<\/button>/);
assert.match(html, /aria-label="Water cycle diagram"/);
assert.match(html, /Water moves through a continuous cycle/);

const styles = readFileSync('src/index.css', 'utf8');
assert.match(styles, /\.ghana-science-visual__art\[data-playing="true"\]/);
assert.match(styles, /\.ghana-science-visual__art\[data-playing="false"\]/);
assert.match(styles, /@media\(prefers-reduced-motion:reduce\)/);
assert.match(styles, /@media\(max-width:600px\)/);

console.log('ghanaScienceVisual.test.ts ok! Accessible visual frame, controls, responsive styles and reduced-motion rules verified.');
