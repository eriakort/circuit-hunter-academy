import { expect, test } from '@playwright/test';

test('Ghana level cards, header and Additional Mathematics card use SHS labels', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator('#hGrade')).toHaveText('Choose grade');

  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  const shs2 = page.locator('.grade-card[data-grade="grade10"]');
  await expect(shs2.locator('.grade-card-art')).toHaveText('2');
  await expect(shs2).toContainText('Senior High School · Year 2');
  await expect(shs2).toContainText('Usually about ages 16–17');
  await expect(page.locator('.grade-options')).not.toContainText('Secondary transition');
  await expect(page.locator('.grade-options')).not.toContainText('13–15');

  await shs2.click();
  await expect(page.locator('#hGrade')).toHaveText('Change grade · SHS 2');
  const additional = page.locator('[data-pathway="ghana-additional-mathematics"]');
  await expect(additional).toContainText('Its SHS 2 content is still being prepared');
  await expect(additional.locator('.subjart svg')).toHaveCount(1);
});

test('Italy grade cards list every subject and Grade 5 is ready', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card[data-grade="grade10"]')).toContainText('Maths L2');
  await expect(page.locator('.grade-card[data-grade="grade11"]')).toContainText('Maths L3');
  await expect(page.locator('.grade-card[data-grade="grade5"]')).toHaveClass(/grade-card-ready/);
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('#hGrade')).toHaveText('Change grade · 9');
});
