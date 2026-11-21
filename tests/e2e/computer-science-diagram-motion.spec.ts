import { expect, test, type Page } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

// [mission, scene index, visual key]. These diagrams used to be static pictures.
const DIAGRAMS: [string, number, string][] = [
  ['a3m2', 2, 'cpu'],
  ['c13m2', 1, 'gatesvis'],
  ['c15m1', 0, 'strindex'],
  ['c15m2', 0, 'listvis'],
  ['a4m2', 0, 'tree'],
  ['a5m2', 1, 'url'],
  ['a5m3', 0, 'email'],
];

async function open(page: Page, missionId: string, sceneIndex: number) {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found: ${missionId}`);
  await page.addInitScript(({ missionIndex, sceneIndex }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade: 'grade9', name: 'Motion Hunter', lang: 'en', xp: 0, subject: 'cs', unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: sceneIndex, battleContext: null }));
  }, { missionIndex, sceneIndex });
  await page.goto('/');
  await expect(page.locator('.visual').first()).toBeVisible();
}

const shot = async (page: Page) => (await page.locator('.visual').first().screenshot()).toString('base64');

test.describe.configure({ mode: 'parallel' });

for (const [missionId, sceneIndex, key] of DIAGRAMS) {
  test(`${key} diagram moves`, async ({ page }) => {
    await open(page, missionId, sceneIndex);
    await page.waitForTimeout(600);
    const frames = new Set<string>();
    for (let i = 0; i < 4; i++) { frames.add(await shot(page)); await page.waitForTimeout(900); }
    expect(frames.size, `${key} should change over time`).toBeGreaterThan(1);
  });

  test(`${key} diagram stays still with reduced motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await open(page, missionId, sceneIndex);
    await page.waitForTimeout(800);
    const first = await shot(page);
    await page.waitForTimeout(1500);
    expect(await shot(page)).toBe(first);
  });
}
