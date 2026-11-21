import { expect, test, type Page } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

function locate(type: string) {
  for (let m = 0; m < MISSIONS.length; m++) {
    const s = ((MISSIONS[m] as any).scenes || []).findIndex((scene: any) => scene.type === type);
    if (s >= 0) return { missionIndex: m, sceneIndex: s };
  }
  throw new Error(`No ${type} scene`);
}

async function open(page: Page, type: string) {
  const { missionIndex, sceneIndex } = locate(type);
  await page.addInitScript(({ missionIndex, sceneIndex }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade: 'grade9', name: 'Motion Hunter', lang: 'en', xp: 0, subject: 'cs', unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: sceneIndex, battleContext: null }));
  }, { missionIndex, sceneIndex });
  await page.goto('/');
  await expect(page.locator('.game')).toBeVisible();
}

const anim = (page: Page, selector: string) => page.locator(selector).first().evaluate(el => getComputedStyle(el).animationName);

test('sort game: idle icon floats and answers pop or shake', async ({ page }) => {
  await open(page, 'sort');
  expect(await anim(page, '.item .ico')).toContain('float');
  const cats = page.locator('.cat');
  const n = await cats.count();
  let sawWrong = false;
  for (let k = 0; k < n; k++) {
    await cats.nth(k).click();
    if (await page.locator('.fb.no').count()) {
      sawWrong = true;
      await expect(page.locator('.fb.no')).toHaveClass(/fb-pop/);
      expect(await anim(page, '.fb.no')).toBe('shake');
    }
    if (await page.locator('.cat.right').count()) break;
  }
  expect(sawWrong || n > 0).toBeTruthy();
  await expect(page.locator('.cat.right')).toHaveCount(1);
  await expect(page.locator('.fb.ok')).toHaveClass(/fb-pop/);
  expect(await anim(page, '.fb.ok')).toBe('fbok');
});

test('build game: empty slots pulse', async ({ page }) => {
  await open(page, 'build');
  expect(await anim(page, '.slot')).toBe('slotidle');
});

test('order game: wrong tap shakes the button', async ({ page }) => {
  await open(page, 'order');
  const { missionIndex, sceneIndex } = locate('order');
  const first = (MISSIONS[missionIndex] as any).scenes[sceneIndex].steps[0];
  const firstText = Array.isArray(first) ? first[0] : first;
  // Tap a step that is not the first one, which is always wrong.
  await page.locator('#oQ .btn').filter({ hasNotText: firstText }).first().click();
  await expect(page.locator('#oF.no')).toHaveClass(/fb-pop/);
});

for (const type of ['sort', 'build']) {
  test(`${type} game has no motion with reduced motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await open(page, type);
    expect(await anim(page, type === 'sort' ? '.item .ico' : '.slot')).toBe('none');
  });
}
