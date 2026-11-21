import { expect, test, type Page } from '@playwright/test';
import { ARCS, MISSIONS } from '../../src/data/gameData';

// Two diagrams from each History and Geography subject (every one of the 144 is covered by tests/histGeoMotion.test.ts).
const KEYS = [
  'hg5_roman_roads', 'hg5_seven_hills', 'gg5_italian_volcanoes', 'gg5_lat_long_grid',
  'hg9_phoenician_routes', 'hg9_cursus_honorum', 'gg9_earthquake_epicenter', 'gg9_ocean_currents',
  'hg10_feudal_pyramid', 'hg10_islam_timeline', 'gg10_asia_monsoons', 'gg10_circular_economy',
  'hg11_renaissance_perspective', 'hg11_watt_steam_engine', 'gg11_tent_corridors', 'gg11_intermodal_hubs'
];

function locate(key: string) {
  for (let m = 0; m < MISSIONS.length; m++) {
    const scenes = (MISSIONS[m] as any).scenes || [];
    const s = scenes.findIndex((scene: any) => scene.vis === key && !scene.type);
    if (s >= 0) return { missionIndex: m, sceneIndex: s, subject: ARCS[(MISSIONS[m] as any).arc].subject as string };
  }
  throw new Error(`No scene uses ${key}`);
}

async function open(page: Page, key: string) {
  const { missionIndex, sceneIndex, subject } = locate(key);
  const grade = 'grade' + subject.replace(/\D/g, '');
  await page.addInitScript(({ missionIndex, sceneIndex, subject, grade }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade, name: 'Motion Hunter', lang: 'en', xp: 0, subject, unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: sceneIndex, battleContext: null }));
  }, { missionIndex, sceneIndex, subject, grade });
  await page.goto('/');
  await expect(page.locator('.visual svg').first()).toBeVisible();
}

const shot = async (page: Page) => (await page.locator('.visual').first().screenshot()).toString('base64');

test.describe.configure({ mode: 'parallel' });

for (const key of KEYS) {
  test(`${key} diagram moves`, async ({ page }) => {
    await open(page, key);
    await page.waitForTimeout(600);
    const frames = new Set<string>();
    for (let i = 0; i < 4; i++) { frames.add(await shot(page)); await page.waitForTimeout(900); }
    expect(frames.size, `${key} should change over time`).toBeGreaterThan(1);
  });

  test(`${key} diagram stays still with reduced motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await open(page, key);
    await page.waitForTimeout(800);
    const first = await shot(page);
    await page.waitForTimeout(1500);
    expect(await shot(page)).toBe(first);
  });
}
