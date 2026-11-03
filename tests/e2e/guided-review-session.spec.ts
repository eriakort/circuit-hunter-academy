import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Review Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

async function seedDueConcept(page: Page) {
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
          }
        }
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();
}

test('starts a guided review session and shows a per-concept and overall summary', async ({ page }) => {
  await startCourse(page);
  await seedDueConcept(page);

  const review = page.locator('.spaced-review');
  await review.getByRole('button', { name: 'Start review session (1)' }).click();

  const revision = page.locator('.concept-revision');
  await expect(revision.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
  await expect(revision).toContainText('Concept 1 / 1');
  await revision.locator('.guided-option').first().click();
  await revision.getByRole('button', { name: 'Finish revision' }).click();
  await revision.getByRole('button', { name: 'View session summary' }).click();

  const summary = page.locator('.review-session-summary');
  await expect(summary.getByRole('heading', { name: 'Review session summary' })).toBeVisible();
  await expect(summary).toContainText('You completed 1 concepts.');
  await expect(summary.locator('.review-session-result')).toContainText('100%');
  await expect(summary.getByRole('button', { name: 'Return to learning path' })).toBeVisible();
});

test('guided review session labels its progress and actions in Italian', async ({ page }) => {
  await startCourse(page);
  await seedDueConcept(page);
  await page.locator('#lIT').click();

  const review = page.locator('.spaced-review');
  await review.getByRole('button', { name: 'Inizia sessione (1)' }).click();
  const revision = page.locator('.concept-revision');
  await expect(revision).toContainText('Concetto 1 / 1');
  await revision.locator('.guided-option').first().click();
  await revision.getByRole('button', { name: 'Completa ripasso' }).click();
  await revision.getByRole('button', { name: 'Vedi riepilogo' }).click();
  await expect(page.locator('.review-session-summary')).toContainText('Riepilogo del ripasso');
  await expect(page.locator('.review-session-summary')).toContainText('Punteggio medio della sessione');
});
