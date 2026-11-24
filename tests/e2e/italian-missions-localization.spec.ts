import { expect, test, type Page } from '@playwright/test';

async function startItalian(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('Mission Language Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('Italian mission story follows the chosen support language and keeps Italian intact', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await startItalian(page);

  await page.locator('#lPT').click();
  await page.locator('.mcard').filter({ hasText: 'Ciao! Come ti chiami?' }).first().click();
  // Portuguese support text, with the Italian examples left untouched.
  await expect(page.getByText('Hoje você começa a sua jornada', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Ciao', { exact: false }).first()).toBeVisible();
  // The mission screen's own labels follow the language too.
  await expect(page.getByText('Ideia-chave').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continuar' }).first()).toBeVisible();

  await page.locator('#lDE').click();
  await expect(page.getByText('Heute beginnt deine Reise', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Das Wichtigste').first()).toBeVisible();
  expect(errors).toEqual([]);
});
