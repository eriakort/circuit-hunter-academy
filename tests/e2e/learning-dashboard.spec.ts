import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => {
    window.localStorage.clear();
  });
  await page.reload();

  // Computer Science is the default subject; a new player first registers a hunter name.
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Test Hunter');
  await page.locator('#regf button[type="submit"]').click();

  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('course dashboard renders its empty state and survives a refresh', async ({ page }) => {
  await startCourse(page);

  await expect(page.getByRole('heading', { name: 'Learning progress' })).toBeVisible();
  await expect(page.locator('.learning-stat')).toHaveCount(4);
  await expect(
    page.getByText('Complete a mastery assessment to discover which concepts need revision.')
  ).toBeVisible();
  await expect(page.locator('#goNext')).toBeVisible();

  await page.reload();

  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Learning progress' })).toBeVisible();
  await expect(page.locator('#goNext')).toBeVisible();
});

test('language selection persists and mission navigation returns to the dashboard', async ({ page }) => {
  await startCourse(page);

  await page.locator('#lIT').click();
  await expect(page.getByRole('heading', { name: 'Cruscotto dei progressi' })).toBeVisible();

  await page.reload();
  await expect(page.getByRole('heading', { name: 'Cruscotto dei progressi' })).toBeVisible();

  await page.locator('#goNext').click();
  await expect(page.locator('.mhead h2')).toBeVisible();

  await page.locator('#hMap').click();
  await expect(page.getByRole('heading', { name: 'Cruscotto dei progressi' })).toBeVisible();
});

test('dashboard remains usable at a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await startCourse(page);

  await expect(page.getByRole('heading', { name: 'Learning progress' })).toBeVisible();
  await expect(page.locator('#goNext')).toBeVisible();
});
