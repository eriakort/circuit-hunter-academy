import { expect, test, type Page } from '@playwright/test';

async function startItalianGrammar(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('Picture Practice Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#hItLab').click();
  await page.getByRole('button', { name: /Grammar Training/ }).click();
  await expect(page.getByRole('heading', { name: 'Build strong Italian foundations' })).toBeVisible();
}

test('Stare + gerundio shows a picture with each practice question and activity', async ({ page }) => {
  await startItalianGrammar(page);
  await page.getByRole('button', { name: /Stare \+ gerund/ }).click();

  // Quick practice: the picture loads and the learner picks what the person is doing.
  const picture = page.locator('img[src*="italian/actions/"]').first();
  await expect(picture).toBeVisible();
  await expect.poll(() => picture.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
  await expect(page.getByText('Osserva l’immagine. Che cosa sta facendo questa persona?')).toBeVisible();
  await page.getByRole('button', { name: /Sta scrivendo un’email\./ }).click();
  await expect(page.getByRole('status').filter({ hasText: 'scrivendo' })).toBeVisible();

  // Picture activity: correct the gerund shown under the picture.
  await page.getByRole('button', { name: 'Correct', exact: true }).click();
  await expect(page.locator('img[src*="20-innaffiare-le-piante"]')).toBeVisible();
  await page.locator('textarea').last().fill('La donna sta innaffiando le piante.');
  await page.getByRole('button', { name: 'Check my answer' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'innaffiando' })).toBeVisible();
});
