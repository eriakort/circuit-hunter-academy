import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card-current')).toBeVisible();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="cs"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Dojo Localization Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('dojo battle feedback and technique callout update during a live language switch', async ({ page }) => {
  await startCourse(page);

  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const state = JSON.parse(window.localStorage.getItem(key) || '{}');
    state.cleared = { ...(state.cleared || {}), a1m1: true };
    window.localStorage.setItem(key, JSON.stringify(state));
    // Make answer shuffling deterministic: the correct answer (source index 0)
    // is placed last, allowing the test to select it without test-only UI hooks.
  });
  await page.addInitScript(() => {
    Math.random = () => 0;
  });
  await page.reload();
  await page.locator('#hDojo').click();
  await expect(page.locator('#arena')).toBeVisible();
  await expect(page.locator('.qbox')).toBeVisible();

  await page.locator('.opts button.opt').last().click();
  await expect(page.locator('#qfb')).toBeVisible();
  await expect(page.locator('.shout')).toBeVisible();

  const englishFeedback = await page.locator('#qfb .why').innerText();
  const englishTechnique = await page.locator('.shout').innerText();
  expect(englishFeedback).toContain('Direct hit!');
  expect(englishTechnique).toContain('Direct hit!');

  await page.locator('#lIT').click();
  const italianFeedback = await page.locator('#qfb .why').innerText();
  const italianTechnique = await page.locator('.shout').innerText();
  expect(italianFeedback).not.toBe(englishFeedback);
  expect(italianFeedback).toContain('Colpo a segno!');
  expect(italianTechnique).not.toBe(englishTechnique);
  expect(italianTechnique).toContain('Colpo a segno!');

  await page.locator('#lEN').click();
  await expect(page.locator('#qfb .why')).toHaveText(englishFeedback);
  await expect(page.locator('.shout')).toHaveText(englishTechnique);
});
