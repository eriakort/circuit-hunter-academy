import { test, expect, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';

/**
 * Behaviour checks for every registered "Science in motion" scene.
 * They load each scene on its own in tests/e2e/motion-harness and compare screenshots of the picture.
 */
test.describe.configure({ mode: 'parallel' });

const registry = readFileSync('src/components/scienceMotion/registry.ts', 'utf8');
const SCENE_IDS = [...registry.matchAll(/'(gh-jhs[123]-science-[a-z0-9-]+)'\s*:/g)].map(match => match[1]);

const HARNESS = '/tests/e2e/motion-harness/index.html';
const art = (page: Page) => page.locator('#scene .motion-scene__art');
const snapshot = async (page: Page) => (await art(page).screenshot()).toString('base64');

test('every Ghana Science mission has a registered motion scene', () => {
  expect(SCENE_IDS.length).toBeGreaterThanOrEqual(69);
  expect(new Set(SCENE_IDS).size).toBe(SCENE_IDS.length);
});

for (const id of SCENE_IDS) {
  test(`${id} moves, pauses and resumes`, async ({ page }) => {
    await page.goto(`${HARNESS}?v=${id}`);
    await expect(page.getByTestId('ghana-science-visual')).toBeVisible();
    await page.waitForTimeout(1000);

    // Poll instead of comparing two fixed samples: on a slow, loaded CI machine two frames can coincide.
    const playingA = await snapshot(page);
    await expect.poll(() => snapshot(page), {
      message: 'picture changes while playing',
      timeout: 5000,
      intervals: [250, 500, 750]
    }).not.toBe(playingA);

    await page.getByRole('button', { name: 'Pause', exact: true }).click();
    await page.waitForTimeout(250);
    const frozenA = await snapshot(page);
    await page.waitForTimeout(700);
    expect(await snapshot(page), 'picture is frozen while paused').toBe(frozenA);

    await page.getByRole('button', { name: 'Play', exact: true }).click();
    const movingA = await snapshot(page);
    await expect.poll(() => snapshot(page), {
      message: 'picture moves again after Play',
      timeout: 5000,
      intervals: [250, 500, 750]
    }).not.toBe(movingA);
  });
}

test.describe('reduced motion', () => {
  for (const id of SCENE_IDS.filter((_, index) => index % 14 === 0)) {
    test(`${id} stays still when the system asks for reduced motion`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`${HARNESS}?v=${id}`);
      await expect(page.getByTestId('ghana-science-visual')).toHaveAttribute('data-playing', 'false');
      await page.waitForTimeout(800);
      const first = await snapshot(page);
      await page.waitForTimeout(800);
      expect(await snapshot(page)).toBe(first);
    });
  }

  test('switching reduce-motion on while a scene is open stops it', async ({ page }) => {
    await page.goto(`${HARNESS}?v=${SCENE_IDS[0]}`);
    await expect(page.getByTestId('ghana-science-visual')).toHaveAttribute('data-playing', 'true');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.getByTestId('ghana-science-visual')).toHaveAttribute('data-playing', 'false');
  });
});

test('a scene that is scrolled out of view does not run, and starts when it comes back', async ({ page }) => {
  await page.goto(`${HARNESS}?v=${SCENE_IDS[0]}&spacer=3000`);
  const scene = page.getByTestId('ghana-science-visual');
  await expect(scene).toHaveAttribute('data-playing', 'false');
  await scene.scrollIntoViewIfNeeded();
  await expect(scene).toHaveAttribute('data-playing', 'true');
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(scene).toHaveAttribute('data-playing', 'false');
});
