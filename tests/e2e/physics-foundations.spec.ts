import { expect, test } from '@playwright/test';

async function startPhysics(page: import('@playwright/test').Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await expect(page.locator('.grade-card')).toHaveCount(2);
  await page.locator('.grade-card').nth(1).click();
  await expect(page.locator('.subjcard[data-s="phys"]')).toBeVisible();
  await page.locator('.subjcard[data-s="phys"]').click();

  await expect(page.locator('#regf')).toBeVisible();
  await page.locator('#nm').fill('Physics Foundations Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();

  // The new missions extend chapter 1 and intentionally follow the existing
  // p1m3 mastery gate. Seed that prerequisite so these tests focus on the
  // new content rather than replaying the earlier chapter.
  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const saved = JSON.parse(window.localStorage.getItem(key) || '{}');
    saved.cleared = { ...(saved.cleared || {}), p1m3: true };
    window.localStorage.setItem(key, JSON.stringify(saved));
  });
  await page.reload();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('Physics Foundations missions extend the opening measurement chapter', async ({ page }) => {
  await startPhysics(page);

  await expect(page.getByRole('heading', { name: 'Mass, Time & the SI Toolkit' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cartesian Graphs & Functions' })).toBeVisible();

  await page.locator('.mcard').filter({ hasText: 'Mass, Time & the SI Toolkit' }).click();
  await expect(page.getByText(/seven base quantities/)).toBeVisible();
});

test('Physics Foundations content and mission titles are bilingual', async ({ page }) => {
  await startPhysics(page);
  await page.locator('#lIT').click();

  await expect(page.getByRole('heading', { name: 'Massa, tempo e strumenti del SI' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Grafici cartesiani e funzioni' })).toBeVisible();

  await page.locator('.mcard').filter({ hasText: 'Massa, tempo e strumenti del SI' }).click();
  await expect(page.getByText(/sette grandezze fondamentali/)).toBeVisible();
});
