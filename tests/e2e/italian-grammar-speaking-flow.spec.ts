import { expect, test, type Page } from '@playwright/test';

async function startItalianCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card[data-grade="grade9"]')).toBeVisible();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await page.locator('.subjcard[data-s="italian"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Italian Grammar Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('Italian speaking, adaptive grammar revision and oral trial share CEFR mastery progress', async ({ page }) => {
  await startItalianCourse(page);

  await page.locator('#hItLab').click();
  await expect(page.getByRole('heading', { name: 'Italian Speaking Lab' })).toBeVisible();
  await page.locator('#italian-grammar-topic-filter').selectOption('reflexive');
  await page.getByRole('button', { name: 'A1', exact: true }).click();
  await expect(page.getByText('Piacere, mi chiamo Alessandro.', { exact: true })).toBeVisible();
  await expect(page.getByText('The reflexive verb chiamarsi uses mi with io: mi chiamo.', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: /Grammar Training/ }).click();
  await expect(page.getByRole('heading', { name: 'Build strong Italian foundations' })).toBeVisible();
  await page.getByRole('button', { name: /Start adaptive mixed revision/ }).click();

  const mixedQuestion = page.locator('section.card').filter({ hasText: 'STEP 3 · PRACTISE' });
  await expect(mixedQuestion).toContainText('Choose the correct article: ___ amico.');
  await mixedQuestion.getByRole('button').first().click();
  await expect(mixedQuestion.getByRole('status')).toContainText('Correct! Ben fatto!');
  await expect(page.getByRole('status').filter({ hasText: 'Mastered exercises' })).toContainText('1/');

  await page.locator('#hItCheckpoint').click();
  const readiness = page.locator('.it-grammar-readiness');
  await expect(readiness).toContainText('GRAMMAR READINESS');
  await expect(readiness).toContainText(/1\/\d+ questions mastered/);
  await expect(readiness.getByRole('button', { name: /Review grammar/ })).toBeVisible();
  await readiness.getByRole('button', { name: /Review grammar/ }).click();
  await expect(page.getByRole('heading', { name: 'Build strong Italian foundations' })).toBeVisible();
});
