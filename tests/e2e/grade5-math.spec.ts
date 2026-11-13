import { expect, test, type Page } from '@playwright/test';

const enterGrade5Maths = async (page: Page) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card').first().click();
  await expect(page.locator('.subjcard[data-s="math5"]')).toBeVisible();
  await page.locator('.subjcard[data-s="math5"]').click();
  await page.locator('#regf').waitFor();
  await page.locator('#nm').fill('Maths Hunter');
  await page.locator('#regf').getByRole('button', { name: 'Join the academy' }).click();
};

test('Grade 5 offers its own Mathematics, separate from Grade 9 Mathematics', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await expect(page.locator('.subjcard[data-s="math5"]')).toContainText('Mathematics');
  await expect(page.locator('.subjcard[data-s="math"]')).toHaveCount(0);
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
});

test('Grade 5 Mathematics follows the textbook units and is bilingual', async ({ page }) => {
  await enterGrade5Maths(page);

  await expect(page.locator('.units button')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: 'Warm-Up', exact: true })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(2);

  await page.locator('.units button').nth(4).click();
  await expect(page.getByRole('heading', { name: 'Measure', exact: true })).toBeVisible();
  await expect(page.locator('.mcard')).toHaveCount(11);

  // Missions unlock in order, so open the first lesson: it shows the place-value table.
  await page.locator('.units button').first().click();
  await page.locator('.mcard').first().click();
  await expect(page.locator('table.g5m-table')).toBeVisible();
  await expect(page.locator('table.g5m-table')).toContainText('Thousands class');
  await expect(page.getByText(/each digit has a/)).toBeVisible();

  await page.locator('#lIT').click();
  await expect(page.locator('table.g5m-table')).toContainText('Classe delle migliaia');
  await expect(page.getByText(/ogni cifra ha un/)).toBeVisible();
});

test('a Grade 5 Mathematics mission reaches its battle with translated answers', async ({ page }) => {
  await enterGrade5Maths(page);
  await page.locator('.mcard').first().click();
  for (let scene = 0; scene < 4; scene += 1) {
    await page.locator('#next').click();
  }

  await expect(page.locator('#arena')).toBeVisible();
  const englishOptions = await page.locator('.opts button').allTextContents();
  expect(englishOptions).toHaveLength(4);

  await page.locator('#lIT').click();
  await expect.poll(() => page.locator('.opts button').allTextContents()).not.toEqual(englishOptions);
});
