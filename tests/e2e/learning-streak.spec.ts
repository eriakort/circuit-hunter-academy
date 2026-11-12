import { expect, test, type Page } from '@playwright/test';

async function openDashboard(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card-current')).toBeVisible();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="cs"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Consistency Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

test('shows current and best study streaks from mastery and revision activity', async ({ page }) => {
  await openDashboard(page);
  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const state = JSON.parse(window.localStorage.getItem(key) || '{}');
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    state.learningProgress = {
      ...(state.learningProgress || {}),
      a3m1: {
        guidedPracticeComplete: true,
        independentPracticeComplete: true,
        mastered: false,
        techniqueUnlocked: false,
        masteryAttemptHistory: [
          { score: 70, attemptedAt: now, attempt: 1 },
          { score: 80, attemptedAt: now - day, attempt: 2 },
          { score: 60, attemptedAt: now - 2 * day, attempt: 3 },
          { score: 90, attemptedAt: now - 4 * day, attempt: 4 }
        ],
        conceptRevisionPerformance: {
          'input-processing-output-storage': {
            correct: 3, attempted: 4, sessions: 1, lastReviewedAt: now - 6 * day
          }
        }
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();

  const streak = page.locator('.learning-streak');
  await expect(streak.getByRole('heading', { name: 'Your study consistency' })).toBeVisible();
  await expect(streak).toContainText('Day streak');
  await expect(streak.locator('.learning-streak-metric').nth(0)).toContainText('3');
  await expect(streak.locator('.learning-streak-metric').nth(1)).toContainText('3');
  await expect(streak.locator('.learning-streak-metric').nth(2)).toContainText('5/7');
  await expect(streak.locator('.learning-streak-day.is-active')).toHaveCount(5);

  await page.locator('#lIT').click();
  await expect(streak.getByRole('heading', { name: 'La tua costanza nello studio' })).toBeVisible();
  await expect(streak).toContainText('Giorni consecutivi');
});
