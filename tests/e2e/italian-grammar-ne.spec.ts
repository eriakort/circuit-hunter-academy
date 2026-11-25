import { expect, test } from '@playwright/test';

test('Ne topic works in Grammar Training with Portuguese support text', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('Ne Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#lPT').click();
  await page.locator('#hItLab').click();
  await page.getByRole('button', { name: /Treino de gramática|Grammar Training/ }).first().click();
  await page.getByRole('button', { name: /A partícula ne/ }).first().click();

  // Italian prompt first, Portuguese support line, Portuguese feedback.
  await expect(page.getByText('Rispondi: Quanti fratelli hai', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Responda: Quanti fratelli hai', { exact: false }).first()).toBeVisible();
  await page.getByRole('button', { name: /(^|\s)Ne ho due\.$/ }).click();
  await expect(page.getByText('Ne substitui', { exact: false }).first()).toBeVisible();
  await page.screenshot({ path: '/tmp/ne_pt.png' });
  expect(errors).toEqual([]);
});
