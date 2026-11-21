import type React from 'react';
import { ParticleScene } from './ParticleScene';
import { WaterCycleScene } from './WaterCycleScene';
import { NitrogenCycleScene } from './NitrogenCycleScene';
import { DigestionScene } from './DigestionScene';
import { SolarSystemScene } from './SolarSystemScene';
import { EcosystemScene } from './EcosystemScene';
import { LifeCycleScene } from './LifeCycleScene';
import { ForceMotionScene } from './ForceMotionScene';
import { ElectricityScene } from './ElectricityScene';
import { ConversionScene } from './ConversionScene';

/**
 * Ghana Science missions whose scene-1 visual is a "Science in motion" scene.
 * Any mission listed here replaces its older tap-to-read visual.
 */
export const MOTION_SCENES: Record<string, React.FC> = {
  'gh-jhs1-science-materials-states': ParticleScene,
  'gh-jhs1-science-earth-cycles': WaterCycleScene,
  'gh-jhs1-science-human-body-system': DigestionScene,
  'gh-jhs1-science-solar-system': SolarSystemScene,
  'gh-jhs1-science-ecosystem': EcosystemScene,
  'gh-jhs1-science-life-cycles': LifeCycleScene,
  'gh-jhs1-science-force-motion': ForceMotionScene,
  'gh-jhs1-science-electricity-generation': ElectricityScene,
  'gh-jhs1-science-energy-conversion': ConversionScene,
  'gh-jhs3-science-nitrogen-cycle': NitrogenCycleScene
};
