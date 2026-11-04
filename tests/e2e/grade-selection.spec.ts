import { expect, test } from '@playwright/test';

test('new learner chooses a grade before seeing its subjects and the choice survives refresh', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await expect(page.getByRole('heading', { name: 'Circuit Hunter Academy' })).toBeVisible();
  await expect(page.locator('.grade-card')).toHaveCount(2);

  await page.locator('.grade-card').first().click();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard')).toHaveCount(1);
  await expect(page.locator('#hMap')).not.toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hCodex')).not.toHaveAttribute('aria-current', 'page');

  await page.reload();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard')).toHaveCount(1);

  await page.getByRole('button', { name: /Change grade/ }).click();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard')).toHaveCount(3);
  await expect(page.locator('.subjcard[data-s="math"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="phys"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();

  await page.locator('.subjcard[data-s="math"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Mathematics');
  await expect(page.locator('#hMap')).toHaveAttribute('aria-current', 'page');
});

test('legacy saves without a grade are migrated to Grade 9 without losing progress', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    window.localStorage.clear();
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      name: 'Legacy Hunter',
      lang: 'en',
      xp: 240,
      subject: 'math',
      unit: 5,
      cleared: { m1m1: true },
      seen: {},
      flawless: {},
      learningProgress: {},
      v: 2
    }));
  });
  await page.reload();

  await expect(page.locator('.subject-indicator')).toContainText('Mathematics');
  await expect(page.locator('#hGrade')).toContainText('9');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2') || '{}'));
  expect(saved.grade).toBe('grade9');
  expect(saved.xp).toBe(240);
  expect(saved.cleared.m1m1).toBe(true);
});
