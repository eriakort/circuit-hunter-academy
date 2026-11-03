import { expect, test, type Page } from '@playwright/test';

async function startCourse(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(page.locator('#nm')).toBeVisible();
  await page.locator('#nm').fill('Revision Hunter');
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

test('dashboard launches a targeted revision and persists its result', async ({ page }) => {
  await startCourse(page);
  await seedWeakConcept(page);

  await expect(page.getByText('The von Neumann architecture')).toBeVisible();
  await page.getByRole('button', { name: 'Review concept: The von Neumann architecture' }).click();

  await expect(page.getByRole('heading', { name: 'Targeted concept revision' })).toBeVisible();
  await expect(page.getByText('RETRIEVAL PRACTICE')).toBeVisible();

  const options = page.locator('.concept-revision-quiz .guided-option');
  await expect(options).toHaveCount(4);
  for (let question = 0; question < 3; question += 1) {
    await options.first().click();
    await page.getByRole('button', {
      name: question === 2 ? 'Finish revision' : 'Next question'
    }).click();
  }

  await expect(page.getByText('Revision complete · 100%')).toBeVisible();
  await page.reload();
  await expect(page.getByText('Reviewed 1 session')).toBeVisible();
});

test('targeted revision content follows the selected language', async ({ page }) => {
  await startCourse(page);
  await seedWeakConcept(page);
  await page.locator('#lIT').click();

  await page.getByRole('button', { name: 'Review concept: L\'architettura di von Neumann' }).click();
  await expect(page.getByRole('heading', { name: 'Ripasso mirato' })).toBeVisible();
  await expect(page.getByText('VERIFICA DI RICHIAMO')).toBeVisible();
});
