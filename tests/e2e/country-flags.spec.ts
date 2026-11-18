import { expect, test } from '@playwright/test';

// Flag emoji show as the letters "IT" / "GH" on Windows, so the app draws its flags as SVG.
const FLAG_EMOJI = /[\u{1F1E6}-\u{1F1FF}]{2}/u;

test('country buttons show drawn flags instead of flag emoji', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  const picker = page.locator('.curriculum-country-picker');
  const italy = picker.getByRole('button', { name: /Italy/ });
  const ghana = picker.getByRole('button', { name: /Ghana/ });
  await expect(italy.locator('svg[data-flag="IT"]')).toHaveCount(1);
  await expect(ghana.locator('svg[data-flag="GH"]')).toHaveCount(1);
  await expect(ghana.locator('svg[data-flag="GH"] polygon')).toHaveCount(1); // the black star
  expect(await picker.innerText()).not.toMatch(FLAG_EMOJI);

  await ghana.click();
  await page.locator('.grade-card[data-grade="ghshs1"]').click();
  await page.locator('.subjcard[data-s="ghcoremath"]').click();
  await page.locator('#nm').fill('Kofi');
  await page.locator('#regf button').first().click();
  await expect(page.locator('.sankofa-kicker svg[data-flag="GH"]')).toBeVisible();
  expect(await page.locator('.sankofa-kicker').first().innerText()).not.toMatch(FLAG_EMOJI);
});
