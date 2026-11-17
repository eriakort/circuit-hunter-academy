import { expect, test, type Page } from '@playwright/test';

async function startGhanaCoreMath(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('.subjcard[data-s="ghcoremath"]')).toBeVisible();
  await page.locator('.subjcard[data-s="ghcoremath"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Test Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.getByTestId('ghana-readiness-dashboard')).toBeVisible();
}

test('Ghana SHS 1 dashboard shows all 45 indicators and their initial states', async ({ page }) => {
  await startGhanaCoreMath(page);

  await expect(page.getByRole('heading', { name: 'SHS 1 Mathematics readiness' })).toBeVisible();
  await expect(page.locator('[data-indicator-id]')).toHaveCount(45);
  await expect(page.locator('[data-sub-strand]')).toHaveCount(8);
  await expect(page.getByTestId('ghana-readiness-mastered')).toHaveText('0/45');
  await expect(page.getByTestId('ghana-readiness-needs-revision')).toHaveText('0');
  await expect(page.getByTestId('ghana-readiness-not-assessed')).toHaveText('45');

  const firstGroup = page.locator('[data-sub-strand="Real Number System"]');
  await expect(firstGroup.locator('[data-indicator-id]')).toHaveCount(6);
  await firstGroup.locator('.ghana-readiness-review').first().click();
  await expect(page.locator('.concept-revision')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
  await expect(page.locator('.learning-example')).toBeVisible();
  await expect(page.locator('.learning-misconception')).toBeVisible();
  await expect(page.locator('.concept-revision-prompts')).toBeVisible();
  await page.getByRole('button', { name: 'Close revision' }).click();

  await page.getByRole('button', { name: 'Take 45-indicator diagnostic' }).click();
  await expect(page.locator('.mhead h2')).toContainText('The 45-Indicator Mastery Expedition');
});

test('Ghana SHS 1 readiness dashboard localizes its labels into Italian', async ({ page }) => {
  await startGhanaCoreMath(page);
  await page.locator('#lIT').click();

  await expect(page.getByRole('heading', { name: 'Prontezza di matematica SHS 1' })).toBeVisible();
  await expect(page.getByTestId('ghana-readiness-not-assessed')).toHaveText('45');
  await expect(page.getByRole('button', { name: 'Avvia la verifica dei 45 indicatori' })).toBeVisible();
});
