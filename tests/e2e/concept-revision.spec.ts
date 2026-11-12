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

  await expect(page.locator('.learning-dashboard-concept-title strong').filter({ hasText: 'The von Neumann architecture' })).toBeVisible();
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

  await page.getByRole("button", { name: "Review concept: L'architettura di von Neumann" }).click();
  await expect(page.getByRole('heading', { name: 'Ripasso mirato' })).toBeVisible();
  await expect(page.getByText('VERIFICA DI RICHIAMO')).toBeVisible();
});

test('targeted revision study material updates during a live language switch', async ({ page }) => {
  await startCourse(page);
  await seedWeakConcept(page);

  await page.getByRole('button', { name: 'Review concept: The von Neumann architecture' }).click();
  const revision = page.locator('.concept-revision');
  const explanation = revision.locator('.concept-revision-study article > p').first();
  const workedScenario = revision.locator('.learning-scenario');
  const misconception = revision.locator('.learning-misconception p');

  await expect(explanation).toContainText('instructions and data share main memory');
  await expect(workedScenario).toContainText('A computer opens a calculator app');
  await expect(misconception).toContainText('The CPU permanently stores every program and file');
  const englishExplanation = await explanation.textContent();
  const englishScenario = await workedScenario.textContent();
  const englishMisconception = await misconception.textContent();

  await page.locator('#lIT').click();
  await expect(revision.getByRole('heading', { name: 'Ripasso mirato' })).toBeVisible();
  await expect(explanation).toContainText('istruzioni e dati condividono la memoria centrale');
  await expect(workedScenario).toContainText('Un computer apre una calcolatrice');
  await expect(misconception).toContainText('La CPU memorizza permanentemente ogni programma e file');
  expect(await explanation.textContent()).not.toBe(englishExplanation);
  expect(await workedScenario.textContent()).not.toBe(englishScenario);
  expect(await misconception.textContent()).not.toBe(englishMisconception);

  await page.locator('#lEN').click();
  await expect(explanation).toHaveText(englishExplanation!);
  await expect(workedScenario).toHaveText(englishScenario!);
  await expect(misconception).toHaveText(englishMisconception!);
});
