import { expect, test, type Page } from '@playwright/test';

const enterItalian = async (page: Page, gradeIndex: number) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card').nth(gradeIndex).click();
  await page.locator('.subjcard[data-s="italian"]').click();
  const register = page.locator('#regf');
  if (await register.isVisible().catch(() => false)) {
    await page.locator('#nm').fill('Grammar Hunter');
    await register.getByRole('button', { name: 'Join the academy' }).click();
  }
  await page.locator('#lEN').click();
};

for (const [gradeIndex, label] of [[0, 'Grade 5'], [1, 'Grade 9']] as const) {
  test(`${label} Italian includes the eight grammar units after the CEFR units`, async ({ page }) => {
    await enterItalian(page, gradeIndex);
    await expect(page.locator('.units button')).toHaveCount(11);
    await expect(page.locator('.units button').nth(3)).toContainText('Grammar · Spelling');
    await expect(page.locator('.units button').nth(10)).toContainText('Grammar · Verb Tables');
  });
}

test('a grammar lesson is bilingual and the verb tables render like the textbook', async ({ page }) => {
  await enterItalian(page, 0);

  await page.locator('.units button').nth(3).click();
  await expect(page.locator('.mcard')).toHaveCount(7);
  await page.locator('.mcard').first().click();
  await expect(page.getByText(/silent i/)).toBeVisible();
  await page.locator('#lIT').click();
  await expect(page.getByText(/i muta/).first()).toBeVisible();

  await page.locator('#lEN').click();
  await page.locator('#hMap').click();
  await page.locator('.units button').nth(10).click();
  await page.locator('.mcard').first().click();
  await expect(page.locator('figure.itv')).toContainText('verbo ESSERE');
  await expect(page.locator('figure.itv')).toContainText('fummo');
  await expect(page.locator('figure.itv')).toContainText('(indicative)');
  await page.locator('#lIT').click();
  await expect(page.locator('figure.itv')).not.toContainText('(indicative)');
});
