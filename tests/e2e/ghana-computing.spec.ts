import { expect, test, type Page } from '@playwright/test';

const enterComputing = async (page: Page) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs1"]').click();
  await page.locator('.subjcard[data-s="ghcomputing"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
};

test('Ghana SHS 1 offers Computing next to Core Mathematics, in English only', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs1"]').click();
  await expect(page.locator('.subjcard[data-s="ghcoremath"]')).toHaveCount(1);
  await expect(page.locator('.subjcard[data-s="ghcomputing"]')).toContainText('Computing');
  await expect(page.locator('main')).not.toContainText(/INFORMATIC|Italian/i);
});

test('Ghana SHS 1 Computing shows its strands and opens a mission with its own diagram', async ({ page }) => {
  await enterComputing(page);
  await expect(page.locator('.subject-indicator')).toContainText('Computing');
  await expect(page.locator('.subject-indicator')).not.toContainText('Computer Science');
  await expect(page.locator('.units button').filter({ hasText: 'Computer Architecture and Organisation' })).toHaveCount(1);
  await expect(page.locator('.units button').filter({ hasText: 'Computational Thinking' })).toHaveCount(1);
  await expect(page.locator('.mcard').first()).toContainText('The Bit Weaver');
  await page.locator('.mcard').first().click();
  await expect(page.locator('svg.sv').first()).toBeVisible();
  await expect(page.locator('main')).not.toContainText(/INFORMATIC/i);
});
