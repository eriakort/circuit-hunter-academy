import { expect, test, type Page } from '@playwright/test';

const enterGhana = async (page: Page, grade: string, subject: string) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator(`.grade-card[data-grade="${grade}"]`).click();
  await page.locator(`.subjcard[data-s="${subject}"]`).click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Eric');
    await page.locator('#regf button').first().click();
  }
};

const cases = [
  ['ghjhs1', 'ghjhs1science', 'Science · JHS 1'],
  ['ghjhs2', 'ghjhs2science', 'Science · JHS 2'],
  ['ghjhs3', 'ghjhs3science', 'Science · JHS 3'],
  ['ghjhs2', 'ghjhs2math', 'JHS 2'],
  ['ghjhs3', 'ghjhs3math', 'JHS 3']
] as const;

for (const [grade, subject, label] of cases) {
  test(`header shows the chosen Ghana subject (${subject}), not Computer Science, also after a reload`, async ({ page }) => {
    await enterGhana(page, grade, subject);
    const indicator = page.locator('.subject-indicator');
    await expect(indicator).toContainText(label);
    await expect(indicator).not.toContainText('Computer Science');
    await expect(page.locator('main')).not.toContainText('Computer Science');

    await page.reload();
    await expect(indicator).toContainText(label);
    await expect(indicator).not.toContainText('Computer Science');
  });
}
