import { expect, test } from '@playwright/test';

test('IrregularPlurals topic works in Grammar Training with Portuguese support text', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('IrregularPlurals Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#lPT').click();
  await page.locator('#hItLab').click();
  await page.getByRole('button', { name: /Treino de gramática|Grammar Training/ }).first().click();
  await page.getByRole('button', { name: /Plurais irregulares/ }).first().click();

  // Italian prompt first, Portuguese support line, Portuguese feedback.
  await expect(page.getByText('Completa: Compro sei', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Complete: Compro sei', { exact: false }).first()).toBeVisible();
  await page.getByRole('button', { name: /(^|\s)uova$/ }).click();
  await expect(page.getByText('Um grupo de nomes masculinos', { exact: false }).first()).toBeVisible();
  await page.screenshot({ path: '/tmp/irregular-plurals_pt.png' });
  expect(errors).toEqual([]);
});
