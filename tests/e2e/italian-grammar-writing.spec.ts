import { expect, test, type Page } from '@playwright/test';

async function startItalianGrammar(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card[data-grade="grade9"]')).toBeVisible();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await page.locator('.subjcard[data-s="italian"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Writing Practice Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#hItLab').click();
  await expect(page.getByRole('heading', { name: 'Italian Speaking Lab' })).toBeVisible();
  await page.getByRole('button', { name: /Grammar Training/ }).click();
  await expect(page.getByRole('heading', { name: 'Build strong Italian foundations' })).toBeVisible();
}

test('Italian free-writing practice can be self-reviewed and counted as practised', async ({ page }) => {
  await startItalianGrammar(page);
  await page.getByRole('button', { name: 'Write', exact: true }).click();
  const answer = page.locator('textarea').last();
  await answer.fill('Ho un libro e una penna.');
  await page.getByRole('button', { name: 'Check my answer' }).click();
  const feedback = page.getByRole('status').filter({ hasText: 'Self-review: compare your sentence with the model.' });
  await expect(feedback).toBeVisible();
  await expect(feedback).toContainText('Ho un libro e una penna.');
  await feedback.getByRole('button', { name: 'I checked my sentence — mark as practised' }).click();
  await expect(feedback).toContainText('Writing practice completed and added to your progress.');
  await expect(feedback.getByRole('button', { name: /I checked my sentence/ })).toHaveCount(0);
  await page.getByRole('button', { name: 'Next practice' }).click();
  await expect(page.getByText('PRACTICE 2/2')).toBeVisible();
  await expect(page.getByText('Write two short sentences naming objects in a classroom. Use at least one masculine and one feminine noun with the correct article.')).toBeVisible();
});
