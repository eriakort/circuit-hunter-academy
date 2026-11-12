import { expect, test, type Page } from '@playwright/test';

type RaceTestWindow = Window & {
  __CHA_RACE_TEST_CHANNEL__?: {
    __addOpponent: () => void;
    __removeOpponent: () => void;
  };
};

async function installRaceTransport(page: Page) {
  await page.addInitScript(() => {
    const handlers: Array<{ type: string; event: string; callback: (message: any) => void }> = [];
    const presence: Record<string, any[]> = {};
    const channel: any = {
      on(type: string, filter: { event: string }, callback: (message: any) => void) {
        handlers.push({ type, event: filter.event, callback });
        return channel;
      },
      subscribe(callback: (status: string) => void) {
        callback('SUBSCRIBED');
        return channel;
      },
      async track(player: any) {
        presence[player.id] = [{ ...player }];
        channel.__emit('presence', 'sync', {});
      },
      presenceState() {
        return presence;
      },
      send() {
        return Promise.resolve('ok');
      },
      unsubscribe() {
        Object.keys(presence).forEach(key => delete presence[key]);
        channel.__emit('presence', 'sync', {});
        return Promise.resolve('ok');
      },
      __emit(type: string, event: string, payload: any) {
        handlers.filter(item => item.type === type && item.event === event)
          .forEach(item => item.callback(payload));
      },
      __addOpponent() {
        const id = 'test-opponent';
        presence[id] = [{
          id,
          name: 'Opponent',
          joinedAt: Date.now() + 1000,
          hue: 180
        }];
        channel.__emit('presence', 'sync', {});
      },
      __removeOpponent() {
        delete presence['test-opponent'];
        channel.__emit('presence', 'sync', {});
      }
    };
    (window as RaceTestWindow).__CHA_RACE_TEST_CHANNEL__ = channel;
  });
}

async function enterRace(page: Page) {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').nth(1).click();
  await page.locator('.subjcard[data-s="cs"]').click();
  await page.locator('#nm').fill('Race Tester');
  await page.locator('#regf button[type="submit"]').click();
  await expect(page.locator('.learning-dashboard')).toBeVisible();

  await page.locator('#hRace').click();
  await page.getByRole('button', { name: /Create room/i }).click();
  await expect(page.locator('.race-code')).toBeVisible();
  await page.evaluate(() => {
    (window as RaceTestWindow).__CHA_RACE_TEST_CHANNEL__?.__addOpponent();
  });
  await expect(page.locator('.eyebrow').filter({ hasText: /Players in room/i })).toContainText('2/8');
  await page.getByRole('button', { name: /Start Race/i }).click();
  await page.clock.fastForward(3000);
  await expect(page.locator('.qbox')).toBeVisible();
}

async function finishRaceAndCountCorrectAnswers(page: Page): Promise<number> {
  const totalText = await page.locator('.count').innerText();
  const totalQuestions = Number(totalText.split('/').pop()?.trim());
  expect(totalQuestions).toBeGreaterThan(0);

  let correctAnswers = 0;
  for (let question = 0; question < totalQuestions; question += 1) {
    await expect(page.locator('.qbox .opts button').first()).toBeVisible();
    await page.locator('.qbox .opts button').first().click();
    const feedback = page.locator('.qbox .fb');
    await expect(feedback).toBeVisible();
    if (await feedback.evaluate(element => element.classList.contains('ok'))) {
      correctAnswers += 1;
    }
    await page.clock.fastForward(1200);
  }
  await expect(page.locator('.result')).toBeVisible();
  return correctAnswers;
}

async function readXP(page: Page): Promise<number> {
  const text = await page.locator('.who-hud .nm').innerText();
  return Number(text.match(/(\d+) XP/)?.[1] ?? NaN);
}

test.describe('Race Arena multiplayer completion', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.install();
    await installRaceTransport(page);
  });

  test('finalizes when an opponent disconnects and awards XP only once', async ({ page }) => {
    await enterRace(page);
    const correctAnswers = await finishRaceAndCountCorrectAnswers(page);

    await expect(page.locator('.result')).toContainText(/Waiting for other racers/i);
    await page.evaluate(() => {
      (window as RaceTestWindow).__CHA_RACE_TEST_CHANNEL__?.__removeOpponent();
    });

    const expectedXP = correctAnswers * 3;
    await expect.poll(() => readXP(page)).toBe(expectedXP);

    await page.locator('#lIT').click();
    await page.locator('#lEN').click();
    await expect.poll(() => readXP(page)).toBe(expectedXP);
    await expect(page.locator('.result')).toContainText(/Race Complete/i);
  });

  test('times out a connected opponent without granting the winner bonus', async ({ page }) => {
    await enterRace(page);
    const correctAnswers = await finishRaceAndCountCorrectAnswers(page);

    await expect(page.locator('.result')).toContainText(/Waiting for other racers/i);
    await page.clock.fastForward(15_000);

    await expect(page.locator('.result')).toContainText(/Some players did not finish in time/i);
    await expect.poll(() => readXP(page)).toBe(correctAnswers * 3);
    await expect(page.locator('.result')).toContainText(/winner bonus was not awarded/i);
  });
});
