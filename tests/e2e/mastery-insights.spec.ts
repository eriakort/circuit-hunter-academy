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
  await page.locator('#nm').fill('Insights Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

async function seedInsights(page: Page) {
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
        masteryScore: 80,
        masteryAttempts: 2,
        lastAttemptAt: now,
        masteryConceptPerformance: {
          'input-processing-output-storage': { correct: 5, attempted: 5 },
          'hardware-and-software': { correct: 2, attempted: 5 },
          'von-neumann-architecture': { correct: 3, attempted: 5 }
        },
        masteryLastAttemptWeakConcepts: ['hardware-and-software'],
        masteryAttemptHistory: [
          { score: 60, attemptedAt: now - 86400000, attempt: 1 },
          { score: 80, attemptedAt: now, attempt: 2 }
        ],
        conceptRevisionPerformance: {
          'hardware-and-software': {
            correct: 4,
            attempted: 4,
            sessions: 1,
            lastReviewedAt: now - 3600000,
            baselineMasteryPercent: 40,
            postRevisionMasteryPercent: 80,
            postRevisionAt: now
          }
        }
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();
}

test('mastery insights show assessment trend, concept strengths and revision impact', async ({ page }) => {
  await startCourse(page);
  await seedInsights(page);

  const insights = page.locator('.mastery-insights');
  await expect(insights).toBeVisible();
  await expect(insights.getByRole('heading', { name: 'Mastery insights' })).toBeVisible();
  await expect(insights.getByRole('heading', { name: 'Assessment trend' })).toBeVisible();
  await expect(insights.locator('.mastery-trend-chart')).toBeVisible();
  await expect(insights.locator('.mastery-insights-panel-heading').first()).toContainText('+20 pp');
  await expect(insights.getByRole('heading', { name: 'Revision impact' })).toBeVisible();
  await expect(insights.locator('.mastery-revision-summary')).toContainText('+40 percentage points');
  await expect(insights.getByRole('heading', { name: 'Your strengths' })).toBeVisible();
  await expect(insights.getByRole('heading', { name: 'Concepts to watch' })).toBeVisible();
  await expect(insights).toContainText('The computer cycle');
  await expect(insights).toContainText('Hardware and software');
});

test('mastery insights provide useful empty states and Italian localisation', async ({ page }) => {
  await startCourse(page);
  const insights = page.locator('.mastery-insights');

  await expect(insights.getByRole('heading', { name: 'Mastery insights' })).toBeVisible();
  await expect(insights).toContainText('Complete at least two mastery assessments to see your score trend.');
  await expect(insights).toContainText('Complete targeted revision followed by a new mastery assessment');

  await page.locator('#lIT').click();
  await expect(insights.getByRole('heading', { name: 'Approfondimenti sulla maestria' })).toBeVisible();
  await expect(insights.getByRole('heading', { name: 'Andamento delle prove' })).toBeVisible();
  await expect(insights).toContainText('Completa almeno due prove di maestria');
});
