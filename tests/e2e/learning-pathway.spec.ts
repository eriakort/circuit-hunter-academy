import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Pathway Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('hardware mission briefing shows prerequisites, objectives and a staged route', async ({ page }) => {
  await startCourse(page);

  for (const missionIndex of [7, 8, 9, 10]) {
    await page.locator(`.mcard[data-i="${missionIndex}"]`).click();
    await expect(page.getByRole('heading', { name: 'Your learning mission' })).toBeVisible();
    await expect(page.getByText('Before you begin')).toBeVisible();
    await expect(page.getByText('By the end, you will be able to')).toBeVisible();
    await expect(page.locator('.learning-pathway-stage')).toHaveCount(5);
    await page.locator('#back').click();
    await expect(page.locator('.learning-dashboard')).toBeVisible();
  }
});

test('hardware mission briefing and earned technique render in Italian', async ({ page }) => {
  await startCourse(page);
  await page.locator('#lIT').click();
  await page.locator('.mcard[data-i="7"]').click();

  await expect(page.getByRole('heading', { name: 'La tua missione di apprendimento' })).toBeVisible();
  await expect(page.getByText('Prima di iniziare')).toBeVisible();

  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const state = JSON.parse(window.localStorage.getItem(key) || '{}');
    state.learningProgress = {
      ...(state.learningProgress || {}),
      a3m1: {
        guidedPracticeComplete: true,
        independentPracticeComplete: true,
        mastered: true,
        techniqueUnlocked: true,
        masteryScore: 100,
        masteryAttempts: 1
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();

  await expect(page.getByText('NUOVA TECNICA SBLOCCATA')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Fendente Input–Output' })).toBeVisible();
  await expect(page.getByText('+25 XP · ricompensa maestria')).toBeVisible();
});
