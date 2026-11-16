import { expect, test } from '@playwright/test';

test('learner can switch countries while curriculum progress stays isolated', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2:italy-national', JSON.stringify({
      grade: null,
      name: 'Italian learner',
      lang: 'en',
      xp: 135,
      subject: 'cs',
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      grammarProgress: {},
      v: 5
    }));
  });
  await page.reload();

  await expect(page.getByRole('button', { name: /Italy/ })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: /Ghana/ }).click();
  await expect(page.getByRole('heading', { name: 'Ghana SHS curriculum selected' })).toBeVisible();
  await expect(page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.grade-card[data-grade="grade9"]')).toContainText('SHS 1 (SS1)');
  await expect(page.locator('.grade-card[data-grade="grade10"]')).toContainText('SHS 2 (SS2)');
  await expect(page.locator('.grade-card[data-grade="grade11"]')).toContainText('SHS 3 (SS3)');
  await expect(page.locator('.grade-card')).toHaveCount(3);
  await expect(page.locator('.grade-card').first()).toBeDisabled();

  const ghanaProfile = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-curriculum-profile-v1') || '{}'));
  expect(ghanaProfile.activeCurriculumId).toBe('ghana-nacca');
  expect(ghanaProfile.enabledCurriculumIds).toContain('italy-national');
  expect(ghanaProfile.enabledCurriculumIds).toContain('ghana-nacca');

  await page.getByRole('button', { name: /Italy/ }).click();
  await expect(page.getByRole('button', { name: /Italy/ })).toHaveAttribute('aria-pressed', 'true');
  const italianSave = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:italy-national') || '{}'));
  expect(italianSave.xp).toBe(135);
  expect(italianSave.name).toBe('Italian learner');
  const ghanaSave = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '{}'));
  expect(ghanaSave.xp).toBe(0);
});

test('legacy Italian save is migrated and remains compatible with the original save key', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: null,
      name: 'Legacy learner',
      lang: 'en',
      xp: 240,
      subject: 'math',
      unit: 5,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      grammarProgress: {},
      v: 5
    }));
  });
  await page.reload();

  await expect.poll(() => page.evaluate(() => localStorage.getItem('circuit-hunter-academy-v2:italy-national'))).not.toBeNull();
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2') || '{}').xp)).toBe(240);
  const migrated = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2:italy-national') || '{}'));
  expect(migrated.name).toBe('Legacy learner');
  expect(migrated.xp).toBe(240);
});
