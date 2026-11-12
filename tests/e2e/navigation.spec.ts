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

  const answers = page.locator('.opts');
  await expect(answers).toHaveAttribute('role', 'group');
  await expect(answers).toHaveAttribute('aria-labelledby', 'test-question');
  await answers.getByRole('button').first().click();
  await expect(page.locator('#qfb')).toHaveAttribute('role', 'status');
  await expect(page.locator('#qfb')).toHaveAttribute('aria-live', 'polite');
});


async function expectNoHorizontalPageOverflow(page: Page, viewportWidth: number) {
  const pageWidth = await page.evaluate(() => Math.max(
    document.documentElement.scrollWidth,
    document.body.scrollWidth
  ));
  expect(
    pageWidth,
    `page should not overflow horizontally at ${viewportWidth}px`
  ).toBeLessThanOrEqual(viewportWidth + 1);
}

test('grade, subject, dashboard, codex and test screens fit common viewport widths', async ({ page }) => {
  for (const width of [320, 375, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();

    await expect(page.locator('.grade-card-current')).toBeVisible();
    await expectNoHorizontalPageOverflow(page, width);

    await page.locator('.grade-card-current').click();
    await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
    await expectNoHorizontalPageOverflow(page, width);

    await page.locator('.subjcard[data-s="cs"]').click();
    await expect(page.locator('#nm')).toBeVisible();
    await page.locator('#nm').fill('Responsive Tester');
    await page.locator('#regf button[type="submit"]').click();
    await expect(page.locator('.learning-dashboard')).toBeVisible();
    await expectNoHorizontalPageOverflow(page, width);

    await page.locator('#hCodex').click();
    await expectNoHorizontalPageOverflow(page, width);

    await page.locator('#hTest').click();
    await expectNoHorizontalPageOverflow(page, width);
  }
});


test('screen transitions move focus to main content and announce the destination', async ({ page }) => {
  await startCourse(page);

  await page.locator('#hCodex').click();
  await expect(page.locator('#app')).toBeFocused();
  await expect(page.getByRole('status')).toHaveText('Section: Codex');
  await expect(page.locator('#app')).not.toHaveAttribute('aria-live', 'polite');

  await page.locator('#lIT').click();
  await expect(page.locator('#app')).toBeFocused();
  await expect(page.getByRole('status')).toHaveText('Sezione: Glossario');

  await page.locator('#hTest').click();
  await expect(page.locator('#app')).toBeFocused();
  await expect(page.getByRole('status')).toHaveText('Sezione: Test di conoscenza');
});
