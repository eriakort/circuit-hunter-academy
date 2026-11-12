import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await expect(page.locator('.grade-card-current')).toBeVisible();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="cs"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Navigation Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('active navigation follows the selected section and survives refresh', async ({ page }) => {
  await startCourse(page);

  await expect(page.locator('#hMap')).toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hCodex')).not.toHaveAttribute('aria-current', 'page');

  await page.locator('#hCodex').click();
  await expect(page.locator('#hCodex')).toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hMap')).not.toHaveAttribute('aria-current', 'page');

  await page.reload();
  await expect(page.locator('#hCodex')).toHaveAttribute('aria-current', 'page');

  await page.locator('#hTest').click();
  await expect(page.locator('#hTest')).toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hCodex')).not.toHaveAttribute('aria-current', 'page');

  await page.locator('#hMap').click();
  await expect(page.locator('#hMap')).toHaveAttribute('aria-current', 'page');
});

test('active navigation state is independent of the selected language', async ({ page }) => {
  await startCourse(page);

  await page.locator('#hCodex').click();
  await page.locator('#lIT').click();

  await expect(page.locator('#hCodex')).toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hCodex')).toContainText('Glossario');
  await expect(page.locator('#hMap')).not.toHaveAttribute('aria-current', 'page');
});


test('subject switcher is keyboard operable', async ({ page }) => {
  await startCourse(page);

  const subjectSwitcher = page.locator('#subject-switcher');
  await subjectSwitcher.focus();
  await expect(subjectSwitcher).toBeFocused();
  await page.keyboard.press('Enter');

  await expect(page.locator('.subjects')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="phys"]')).toBeVisible();
});


test('skip link moves keyboard focus to the main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');

  const skipLink = page.locator('.skip-link');
  await expect(skipLink).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#app')).toBeFocused();
});


test('test answers expose a labelled answer group and live feedback', async ({ page }) => {
  await startCourse(page);
  await page.locator('#hTest').click();
  await page.getByRole('button', { name: /Start Knowledge Test|Inizia il Test/ }).click();

  const answers = page.getByRole('group', { name: /Question|Domanda/ });
  await expect(answers).toBeVisible();
  await answers.getByRole('button').first().click();
  await expect(page.locator('#qfb')).toHaveAttribute('role', 'status');
  await expect(page.locator('#qfb')).toHaveAttribute('aria-live', 'polite');
});
