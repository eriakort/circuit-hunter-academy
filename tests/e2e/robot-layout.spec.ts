import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openRobotMission(page, width: number) {
  await page.setViewportSize({ width, height: 900 });
  const missionIndex = MISSIONS.findIndex(mission => mission.id === 'a1m2');
  if (missionIndex < 0) throw new Error('Robot programming mission a1m2 is missing from the curriculum.');

  await page.addInitScript(({ missionIndex }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Robot Hunter',
      lang: 'en',
      xp: 0,
      subject: 'cs',
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      checkpointProgress: {},
      v: 3
    }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({
      view: 'scene',
      currentMissionIndex: missionIndex,
      currentSceneIndex: 3,
      battleContext: null
    }));
  }, { missionIndex });

  await page.goto('/');
  await expect(page.locator('.robo')).toBeVisible();
  await expect(page.locator('.rside')).toBeVisible();
}

test('Robot command panel keeps a usable second column on desktop', async ({ page }) => {
  await openRobotMission(page, 1440);

  const board = await page.locator('.rgrid').boundingBox();
  const commands = await page.locator('.rside').boundingBox();
  expect(board).not.toBeNull();
  expect(commands).not.toBeNull();
  expect(commands!.width).toBeGreaterThan(250);
  expect(commands!.x).toBeGreaterThan(board!.x + board!.width - 1);
});

test('Robot command panel remains usable in the narrow stacked layout', async ({ page }) => {
  await openRobotMission(page, 600);

  const board = await page.locator('.rgrid').boundingBox();
  const commands = await page.locator('.rside').boundingBox();
  expect(board).not.toBeNull();
  expect(commands).not.toBeNull();
  expect(commands!.width).toBeGreaterThan(250);
  expect(commands!.y).toBeGreaterThan(board!.y + board!.height - 1);
});
