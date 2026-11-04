import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('.grade-card-current')).toBeVisible();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="cs"]').click();
  await expect(page.locator('.grade-card-current')).toBeVisible();
  await page.locator('.grade-card-current').click();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="cs"]').click();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Retention Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

async function seedReviewSchedule(page: Page) {
  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const state = JSON.parse(window.localStorage.getItem(key) || '{}');
    const now = Date.now();
    state.learningProgress = {
      ...(state.learningProgress || {}),
      a3m1: {
        guidedPracticeComplete: true,
        independentPracticeComplete: true,
        mastered: false,
        techniqueUnlocked: false,
        conceptReviewSchedule: {
          'hardware-and-software': {
            dueAt: now - 60 * 60 * 1000,
            lastReviewedAt: now - 24 * 60 * 60 * 1000,
            intervalDays: 1,
            repetitions: 0,
            lastScore: 40
          },
          'von-neumann-architecture': {
            dueAt: now + 24 * 60 * 60 * 1000,
            lastReviewedAt: now - 24 * 60 * 60 * 1000,
            intervalDays: 3,
            repetitions: 1,
            lastScore: 100
          }
        }
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();
}

test('dashboard separates due and upcoming reviews and launches targeted retrieval practice', async ({ page }) => {
  await startCourse(page);
  await seedReviewSchedule(page);

  const review = page.locator('.spaced-review');
  await expect(review.getByRole('heading', { name: 'Spaced review' })).toBeVisible();
  await expect(review.locator('.spaced-review-stat').first()).toContainText('1');
  await expect(review).toContainText('Overdue since');
  await expect(review).toContainText('Coming up');
  await expect(review).toContainText('The von Neumann architecture');
  await review.getByRole('button', { name: 'Start review', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
});

test('spaced review is localised in Italian and shows an empty state before the first assessment', async ({ page }) => {
  await startCourse(page);
  const review = page.locator('.spaced-review');
  await expect(review).toContainText('Your review schedule will appear here after your next mastery assessment.');

  await seedReviewSchedule(page);
  await page.locator('#lIT').click();
  await expect(review.getByRole('heading', { name: 'Ripasso dilazionato' })).toBeVisible();
  await expect(review).toContainText('Da ripassare ora');
  await expect(review.getByRole('button', { name: 'Inizia ripasso' })).toBeVisible();
});
