import { expect, test } from '@playwright/test';

test('Older topics show Portuguese instructions under the Italian prompt', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('Legacy Prompt Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#lPT').click();
  await page.locator('#hItLab').click();
  await page.getByRole('button', { name: /Treino de gramática|Grammar Training/ }).first().click();
  await page.getByRole('button', { name: /Artigos · Articoli/ }).first().click();
  await expect(page.getByText('Escolha o artigo correto', { exact: false }).first()).toBeVisible();
  expect(errors).toEqual([]);
});
