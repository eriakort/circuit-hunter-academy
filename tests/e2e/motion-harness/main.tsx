import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../../src/index.css';
import { MOTION_SCENES } from '../../../src/components/scienceMotion/registry';

const params = new URLSearchParams(window.location.search);
const Scene = MOTION_SCENES[params.get('v') ?? ''];
const spacer = Number(params.get('spacer') ?? 0);
if (spacer > 0) document.getElementById('spacer')!.style.height = `${spacer}px`;
createRoot(document.getElementById('scene')!).render(Scene ? <Scene /> : <p>Unknown scene</p>);
