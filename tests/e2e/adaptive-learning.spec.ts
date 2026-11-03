import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Adaptive Hunter');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
}

async function seedWeakConcept(page: Page) {
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
        masteryScore: 60,
        masteryAttempts: 1,
        lastAttemptAt: Date.now() - 1000,
        masteryConceptPerformance: {
          'von-neumann-architecture': { correct: 1, attempted: 4 }
        },
        masteryLastAttemptWeakConcepts: ['von-neumann-architecture'],
        masteryAttemptHistory: [{ score: 60, attemptedAt: Date.now(), attempt: 1 }]
      }
    };
    window.localStorage.setItem(key, JSON.stringify(state));
  });
  await page.reload();
}

test('adaptive recommendation moves from concept revision to mastery retry', async ({ page }) => {
  await startCourse(page);
  await seedWeakConcept(page);

  const recommendation = page.locator('.adaptive-recommendation');
  await expect(recommendation).toHaveAttribute('data-recommendation', 'review');
  await expect(recommendation).toContainText('The von Neumann architecture');
  await page.getByRole('button', { name: 'Review concept', exact: true }).last().click();

  await expect(page.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
  const options = page.locator('.concept-revision-quiz .guided-option');
  await expect(options).toHaveCount(4);
  for (let question = 0; question < 3; question += 1) {
    await options.first().click();
    await page.getByRole('button', {
      name: question === 2 ? 'Finish revision' : 'Next question'
    }).click();
  }

  await expect(page.getByText('Revision complete · 100%')).toBeVisible();
  await page.getByRole('button', { name: 'Close revision' }).click();
  await expect(recommendation).toHaveAttribute('data-recommendation', 'retry');
  await expect(recommendation).toContainText('100%');
  await page.locator('#adaptiveNextAction').click();
  await expect(page.locator('.mhead h2')).toBeVisible();
});

test('adaptive recommendation follows the selected language', async ({ page }) => {
  await startCourse(page);
  await seedWeakConcept(page);
  await page.locator('#lIT').click();

  await expect(page.locator('.adaptive-recommendation')).toContainText('Rinforza');
  await expect(page.locator('#adaptiveNextAction')).toHaveText('Ripassa concetto');
});
