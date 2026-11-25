import { expect, test } from '@playwright/test';

test('English is the default and the chosen language persists, with no English left in the nav', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('#lEN')).toHaveAttribute('aria-pressed', 'true');

  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#nm').fill('Lingua');
  await page.locator('#regf button[type="submit"]').click();
  await page.locator('.learning-dashboard').waitFor();
  await expect(page.locator('#lEN')).toHaveAttribute('aria-pressed', 'true');

  for (const [button, nav, missions] of [['#lPT', 'Laboratório de fala', 'Missões'], ['#lES', 'Laboratorio de conversación', 'Misiones'], ['#lFR', 'Labo d’expression orale', 'Missions'], ['#lDE', 'Sprechlabor', 'Missionen']] as const) {
    await page.locator(button).click();
    await expect(page.locator(button)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#hItLab')).toContainText(nav);
    await expect(page.locator('#hMap')).toContainText(missions);
    await expect(page.locator('#hItLab')).not.toContainText('Speaking Lab');
  }

  await page.locator('#lPT').click();
  await page.reload();
  await expect(page.locator('#lPT')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#hItLab')).toContainText('Laboratório de fala');
});
