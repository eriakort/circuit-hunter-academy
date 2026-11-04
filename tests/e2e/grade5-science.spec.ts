import { expect, test } from '@playwright/test';

test('Grade 5 learners can enter the dedicated bilingual Science curriculum', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await expect(page.getByRole('heading', { name: 'Circuit Hunter Academy' })).toBeVisible();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="science"]')).toContainText('Science & Technology');

  await page.locator('.subjcard[data-s="science"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Science & Technology');
  await expect(page.locator('.units button')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Science Foundations' })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'The Secret Life of Plants' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Animals: With or Without a Backbone?' })).toBeVisible();

  await page.locator('.mcard').first().click();
  await expect(page.getByText(/Plants are living things/)).toBeVisible();
  await expect(page.getByText(/photosynthesis/)).toBeVisible();
});
