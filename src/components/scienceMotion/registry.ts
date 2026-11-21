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
import { OuterPlanetsScene } from './SolarSystemScene';
import { FoodWebScene } from './EcosystemScene';
import { MosquitoLifeCycleScene } from './LifeCycleScene';
import { AtomScene } from './AtomScene';
import { CellScene } from './CellScene';
import { CarbonCycleScene } from './CarbonCycleScene';
import { MixtureScene } from './MixtureScene';
import { CirculationScene } from './CirculationScene';
import { CometScene } from './CometScene';
import { GrasshopperLifeCycleScene } from './LifeCycleScene';
import { DisturbanceScene } from './DisturbanceScene';
import { LightScene } from './LightScene';
import { CompostScene } from './CompostScene';
import { WasteScene } from './WasteScene';
import { ClimateScene } from './ClimateScene';
import { CircuitScene } from './CircuitScene';
import { EnergyChainScene } from './EnergyChainScene';
import { PressureForceScene } from './PressureForceScene';
import { CompoundScene, PhScene, BondingScene } from './ChemistryScenes';
import { PlantCellScene, HumanCellScene } from './SpecialisedCellScenes';
import { EnergySourcesScene, ConservationScene, ElectricityNetworkScene, MagnetismMotionScene, EnergyFormsScene } from './EnergyPathScenes';
import { CropProductionScene, AnimalProductionScene, FarmingSystemsJ1Scene, FarmingSystemsJ2Scene, SeedBedsScene, AnimalCareScene, DentalScene, FarmToolsJ1Scene, FarmToolsJ2Scene } from './FieldScenes';
import { WasteWiseScene, HealthDefenderScene, InnovationScene, ClimateStrategistScene, SoilInvestigatorScene, RockExplorerScene } from './EnvironmentScenesJ2';
import { WasteJ1Scene, HealthJ1Scene, CareersJ1Scene, ClimateJ1Scene, HabitatJ1Scene } from './EnvironmentScenesJ1';
import { LiquidsScene, MaterialsScene, LivingCellScene } from './MatterCellScenes';
import { PlantResourcesScene, IndustryScene, HealthScene } from './ResourceIndustryHealthScenes';
import { CropMaturityScene, FeedPreparationScene, FeedSelectionScene, AgriToolsScene, ManureMaterialsScene } from './FarmScenes';

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
  'gh-jhs2-science-outer-planets': OuterPlanetsScene,
  'gh-jhs2-science-ecosystem-feeding': FoodWebScene,
  'gh-jhs2-science-anopheles-life-cycle': MosquitoLifeCycleScene,
  'gh-jhs2-science-atomic-structure': AtomScene,
  'gh-jhs2-science-cell-types': CellScene,
  'gh-jhs2-science-carbon-cycle': CarbonCycleScene,
  'gh-jhs2-science-mixture-separation': MixtureScene,
  'gh-jhs3-science-circulation-respiration': CirculationScene,
  'gh-jhs3-science-asteroids-comets': CometScene,
  'gh-jhs3-science-grasshopper-life-cycle': GrasshopperLifeCycleScene,
  'gh-jhs3-science-ecosystem-balance': DisturbanceScene,
  'gh-jhs3-science-energy-light': LightScene,
  'gh-jhs3-science-nitrogen-cycle': NitrogenCycleScene,
  'gh-jhs3-science-manure-composting': CompostScene,
  'gh-jhs3-science-waste-management': WasteScene,
  'gh-jhs3-science-climate-green-economy': ClimateScene,
  'gh-jhs3-science-electricity-electronics': CircuitScene,
  'gh-jhs3-science-energy-conversion': EnergyChainScene,
  'gh-jhs3-science-force-motion-pressure': PressureForceScene,
  'gh-jhs3-science-binary-compounds': CompoundScene,
  'gh-jhs3-science-acids-bases-salts': PhScene,
  'gh-jhs3-science-chemical-bonding': BondingScene,
  'gh-jhs3-science-specialised-plant-cells': PlantCellScene,
  'gh-jhs3-science-specialised-human-cells': HumanCellScene,
  'gh-jhs3-science-crop-maturity': CropMaturityScene,
  'gh-jhs3-science-animal-feed-preparation': FeedPreparationScene,
  'gh-jhs3-science-animal-feed-selection': FeedSelectionScene,
  'gh-jhs3-science-agricultural-tools': AgriToolsScene,
  'gh-jhs3-science-manure-materials': ManureMaterialsScene,
  'gh-jhs3-science-plant-resources': PlantResourcesScene,
  'gh-jhs3-science-industry': IndustryScene,
  'gh-jhs3-science-human-health': HealthScene,
  'gh-jhs2-science-energy-sources-heat': EnergySourcesScene,
  'gh-jhs2-science-electricity-electronics': ElectricityNetworkScene,
  'gh-jhs2-science-energy-conservation-impact': ConservationScene,
  'gh-jhs2-science-magnetism-force-machines': MagnetismMotionScene,
  'gh-jhs1-science-energy-forms': EnergyFormsScene,
  'gh-jhs1-science-crop-production': CropProductionScene,
  'gh-jhs1-science-animal-production': AnimalProductionScene,
  'gh-jhs1-science-farming-systems': FarmingSystemsJ1Scene,
  'gh-jhs1-science-agricultural-tools': FarmToolsJ1Scene,
  'gh-jhs2-science-farming-systems': FarmingSystemsJ2Scene,
  'gh-jhs2-science-seed-beds': SeedBedsScene,
  'gh-jhs2-science-animal-feed-water': AnimalCareScene,
  'gh-jhs2-science-teeth-dental-health': DentalScene,
  'gh-jhs2-science-agricultural-tools': FarmToolsJ2Scene,
  'gh-jhs2-science-waste-management': WasteWiseScene,
  'gh-jhs2-science-human-health': HealthDefenderScene,
  'gh-jhs2-science-science-industry': InnovationScene,
  'gh-jhs2-science-climate-green-economy': ClimateStrategistScene,
  'gh-jhs2-science-soils-plants': SoilInvestigatorScene,
  'gh-jhs2-science-rocks-soil-formation': RockExplorerScene,
  'gh-jhs1-science-waste-management': WasteJ1Scene,
  'gh-jhs1-science-human-health': HealthJ1Scene,
  'gh-jhs1-science-science-industry': CareersJ1Scene,
  'gh-jhs1-science-climate-green-economy': ClimateJ1Scene,
  'gh-jhs1-science-understanding-environment': HabitatJ1Scene,
  'gh-jhs1-science-importance-liquids': LiquidsScene,
  'gh-jhs1-science-materials-uses': MaterialsScene,
  'gh-jhs1-science-living-cells': LivingCellScene
};
