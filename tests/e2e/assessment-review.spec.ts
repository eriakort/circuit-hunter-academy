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

async function seedAssessmentReview(page: Page) {
  await page.evaluate(() => {
    const key = 'circuit-hunter-academy-v2';
    const state = JSON.parse(window.localStorage.getItem(key) || '{}');
    state.learningProgress = {
      ...(state.learningProgress || {}),
      a3m1: {
        guidedPracticeComplete: true,
        independentPracticeComplete: true,
        mastered: false,
        techniqueUnlocked: false,
        masteryScore: 75,
        masteryAttempts: 1,
        masteryAttemptHistory: [{ score: 75, attemptedAt: Date.now(), attempt: 1 }],
        masteryAttemptReviews: [{
          score: 75,
          attemptedAt: Date.now(),
          attempt: 1,
          answers: [1, 0, 0, 1, 0]
        }]
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();
}

test('dashboard shows question-level review, mistake analysis and targeted revision link', async ({ page }) => {
  await startCourse(page);
  await seedAssessmentReview(page);

  const review = page.locator('.assessment-review');
  await expect(review.getByRole('heading', { name: 'Assessment review' })).toBeVisible();
  await expect(review.locator('.assessment-review-attempt')).toHaveCount(1);
  await review.locator('.assessment-review-attempt summary').click();
  await expect(review.getByRole('heading', { name: 'Mistake analysis' })).toBeVisible();
  await expect(review.getByRole('heading', { name: 'Question-by-question review' })).toBeVisible();
  await expect(review.locator('.assessment-review-question.is-wrong')).toHaveCount(2);
  await expect(review).toContainText('Your answer:');
  await expect(review).toContainText('Correct answer:');
  await expect(review.getByRole('button', { name: 'Review concept' }).first()).toBeVisible();
  await review.getByRole('button', { name: 'Review concept' }).first().click();
  await expect(page.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
});

test('assessment review is bilingual and older progress has a clear empty state', async ({ page }) => {
  await startCourse(page);
  const review = page.locator('.assessment-review');
  await expect(review).toContainText('Detailed assessment reviews will appear here after your next mastery attempt.');

  await seedAssessmentReview(page);
  await page.locator('#lIT').click();
  await expect(review.getByRole('heading', { name: 'Revisione delle prove' })).toBeVisible();
  await review.locator('.assessment-review-attempt summary').click();
  await expect(review.getByRole('heading', { name: 'Analisi degli errori' })).toBeVisible();
  await expect(review.getByRole('heading', { name: 'Revisione domanda per domanda' })).toBeVisible();
  await expect(review).toContainText('La tua risposta:');
  await expect(review).toContainText('Risposta corretta:');
});
