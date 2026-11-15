import { expect, test, type Page } from '@playwright/test';

const testQuestion = {
  id: 'server-question-1',
  prompt: ['What does CPU stand for?', 'Che cosa significa CPU?'],
  choices: [
    ['Central Processing Unit', 'Central Processing Unit'],
    ['Computer Personal Utility', 'Computer Personal Utility'],
    ['Control Program Unit', 'Control Program Unit']
  ]
};

async function installRaceApiMock(page: Page) {
  let status: 'lobby' | 'running' | 'finished' = 'lobby';
  let score = 0;
  let correctCount = 0;
  let progress = 0;
  let startedAt = new Date().toISOString();
  let finishedAt: string | null = null;
  const userId = 'e2e-anonymous-player';

  await page.route('**/auth/v1/signup', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        access_token: 'e2e-access-token',
        token_type: 'bearer',
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        refresh_token: 'e2e-refresh-token',
        user: {
          id: userId,
          aud: 'authenticated',
          role: 'authenticated',
          email: 'e2e-anonymous@localhost',
          app_metadata: { provider: 'anonymous', providers: [] },
          user_metadata: {},
          created_at: new Date().toISOString()
        }
      })
    });
  });

  await page.route('**/functions/v1/race-api', async route => {
    const body = route.request().postDataJSON() as Record<string, unknown>;
    const action = body.action;
    let response: Record<string, unknown>;

    if (action === 'create') {
      response = { roomId: 'e2e-room-id', code: 'E2E1', status: 'lobby' };
    } else if (action === 'state') {
      response = {
        status,
        grade: 'grade9',
        subject: 'cs',
        missionId: 'mix',
        isHost: true,
        questions: status === 'lobby' ? [] : [testQuestion],
        member: {
          user_id: userId,
          display_name: 'Race Tester',
          score,
          correct_count: correctCount,
          next_question_index: progress,
          question_started_at: status === 'running' ? startedAt : null,
          finished_at: finishedAt,
          joined_at: new Date().toISOString()
        },
        members: [{
          user_id: userId,
          display_name: 'Race Tester',
          score,
          correct_count: correctCount,
          next_question_index: progress,
          question_started_at: status === 'running' ? startedAt : null,
          finished_at: finishedAt,
          joined_at: new Date().toISOString()
        }]
      };
    } else if (action === 'start') {
      status = 'running';
      startedAt = new Date().toISOString();
      response = { status, questions: [testQuestion] };
    } else if (action === 'answer') {
      score = 100;
      correctCount = 1;
      progress = 1;
      finishedAt = new Date().toISOString();
      status = 'finished';
      response = { correct: true, points: 100, score, correctCount, finished: true, nextQuestion: null };
    } else if (action === 'leave') {
      status = 'finished';
      response = { status };
    } else {
      response = { error: `Unexpected action: ${String(action)}` };
      await route.fulfill({ status: 400, contentType: 'application/json', body: JSON.stringify(response) });
      return;
    }

    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(response) });
  });
}

async function enterAppAndOpenRace(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await page.locator('.grade-card').nth(1).click();
  await page.locator('.subjcard[data-s="cs"]').click();
  await page.locator('#nm').fill('Race Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();
  await page.locator('#hRace').click();
}

test.describe('Race Arena authenticated API flow', () => {
  test('relocalizes room validation errors immediately when the language changes', async ({ page }) => {
    await enterAppAndOpenRace(page);
    await page.locator('input.race-sel').fill('ABC');
    await page.getByRole('button', { name: /Join/i }).click();

    const error = page.locator('.fb.no').first();
    await expect(error).toContainText('Room codes have 4 characters.');
    await page.locator('#lIT').click();
    await expect(error).toContainText('I codici stanza hanno 4 caratteri.');
    await page.locator('#lEN').click();
    await expect(error).toContainText('Room codes have 4 characters.');
  });

  test('creates a room using anonymous auth and reads membership from the server API', async ({ page }) => {
    await installRaceApiMock(page);
    await enterAppAndOpenRace(page);
    await page.getByRole('button', { name: /Create room/i }).click();

    await expect(page.locator('.race-code')).toHaveText('E2E1');
    await expect(page.locator('.plist')).toContainText('Race Tester');
    await expect(page.getByRole('button', { name: /Start Race/i })).toBeVisible();
  });

  test('starts a server-issued question and submits the answer to the server', async ({ page }) => {
    await installRaceApiMock(page);
    await enterAppAndOpenRace(page);
    await page.getByRole('button', { name: /Create room/i }).click();
    await expect(page.locator('.race-code')).toHaveText('E2E1');

    await page.getByRole('button', { name: /Start Race/i }).click();
    await expect(page.locator('.qbox')).toBeVisible();
    await expect(page.locator('.qtxt')).toContainText('What does CPU stand for?');

    await page.locator('.qbox .opts button').first().click();
    await expect(page.locator('.qbox .fb')).toContainText(/Speed bonus!/);
    await expect(page.locator('.result')).toBeVisible();
    await expect(page.locator('.result')).toContainText('100 pts');
  });
});
