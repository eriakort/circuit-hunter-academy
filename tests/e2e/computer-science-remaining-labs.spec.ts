import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);
  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Code Explorer',
      lang,
      xp: 0,
      subject: 'cs',
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      checkpointProgress: {},
      v: 3
    }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({
      view: 'scene',
      currentMissionIndex: missionIndex,
      currentSceneIndex: 1,
      battleContext: null
    }));
  }, { missionIndex, lang });
  await page.goto('/');
  await expect(page.locator('.cs-visual-lab')).toBeVisible();
}

test('algorithm debugger reveals and fixes an off-by-one error', async ({ page }) => {
  await openMission(page, 'a1m2');
  await expect(page.getByRole('heading', { name: 'Algorithm Debugger' })).toBeVisible();
  const nextStep = page.getByRole('button', { name: 'Run next loop step' });
  const currentTotal = page.locator('.csl-readout').filter({ hasText: 'Current total' }).locator('strong');
  await nextStep.click();
  await expect(currentTotal).toHaveText('2');
  await expect(nextStep).toBeEnabled();
  await nextStep.click();
  await expect(page.getByRole('status')).toContainText('one value is missing');

  await page.getByRole('button', { name: 'Fix the loop boundary' }).click();
  for (let step = 0; step < 3; step += 1) {
    await page.getByRole('button', { name: 'Run next loop step' }).click();
  }
  await expect(page.getByRole('status')).toContainText('total is 9');
});

test('feed ranking responds to interest and recency settings', async ({ page }) => {
  await openMission(page, 'a1m3');
  await page.getByLabel('Choose an interest').selectOption('art');
  await expect(page.locator('.csl-ranked-list li').first()).toContainText('student mural');
  await page.getByLabel('Ranking signal').selectOption('recent');
  await expect(page.locator('.csl-ranked-list li').first()).toContainText('space telescope');
});

test('URL explorer distinguishes encrypted connections from trustworthy sources', async ({ page }) => {
  await openMission(page, 'a5m2');
  await expect(page.getByText(/Encrypted \(not proof that claims are true\)/)).toBeVisible();
  await page.getByLabel('Example page').selectOption('news');
  await expect(page.getByText('Not encrypted in this example')).toBeVisible();
  await page.getByLabel('I checked the author and date').check();
  await page.getByLabel('I confirmed the claim with another reliable source').check();
  await expect(page.getByRole('status')).toContainText('compare evidence');
});

test('netiquette lab guides a safe response to a suspicious message', async ({ page }) => {
  await openMission(page, 'a5m3', 'it');
  await expect(page.getByRole('heading', { name: 'Messaggi, privacy e netiquette' })).toBeVisible();
  await page.getByRole('button', { name: 'Non cliccare; mostra il messaggio a un adulto di fiducia' }).click();
  await expect(page.getByRole('status')).toContainText('Buona scelta');
});

test('IoT model updates its irrigation response from sensor readings', async ({ page }) => {
  await openMission(page, 'a5m4');
  await expect(page.getByText('Suggest watering')).toBeVisible();
  await page.getByLabel('Soil moisture reading').selectOption('moist');
  await expect(page.getByText('Keep the pump off')).toBeVisible();
  await page.getByLabel('Network connection').selectOption('wifi');
  await expect(page.locator('.csl-computer-flow')).toContainText('WIFI');
});

test('trace table advances one loop round at a time', async ({ page }) => {
  await openMission(page, 'c11m3');
  await page.getByRole('button', { name: 'Next loop round' }).click();
  await page.getByRole('button', { name: 'Next loop round' }).click();
  await expect(page.locator('.csl-readout').filter({ hasText: 'Current total' }).locator('strong')).toHaveText('5');
  await page.getByRole('button', { name: 'Next loop round' }).click();
  await expect(page.getByRole('status')).toContainText('2 + 3 + 4 = 9');
});

test('compiler and interpreter modes advance through their translation stages', async ({ page }) => {
  await openMission(page, 'c12m1');
  await page.getByLabel('Translation approach').selectOption('interpreter');
  await expect(page.getByText('Read the next source line')).toBeVisible();
  await page.getByRole('button', { name: 'Next translation step' }).click();
  await expect(page.locator('.csl-readout').filter({ hasText: 'Current stage' }).locator('strong')).toHaveText('2 / 4');
});

test('Python precedence changes when the expression is parenthesised', async ({ page }) => {
  await openMission(page, 'c12m3');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Calculated result' }).locator('strong')).toHaveText('14');
  await page.getByLabel('Add parentheses around the addition').check();
  await expect(page.locator('.csl-readout').filter({ hasText: 'Calculated result' }).locator('strong')).toHaveText('20');
});

test('list lab appends values and simulates writing and reading a file', async ({ page }) => {
  await openMission(page, 'c15m2');
  await page.getByLabel('Number to append').fill('13');
  await page.getByRole('button', { name: 'Append to list' }).click();
  await expect(page.locator('.csl-readout').filter({ hasText: 'List' }).locator('strong')).toHaveText('[3, 8, 1, 13]');
  await page.getByRole('button', { name: 'Write snapshot to scores.txt' }).click();
  await page.getByRole('button', { name: 'Read snapshot' }).click();
  await expect(page.locator('.csl-readout').filter({ hasText: 'List' }).locator('strong')).toHaveText('[3, 8, 1, 13]');
});

test('stack and queue lab demonstrates LIFO and FIFO operations', async ({ page }) => {
  await openMission(page, 'c16m2');
  const stackPanel = page.locator('.csl-structure-grid section').first();
  const queuePanel = page.locator('.csl-structure-grid section').nth(1);
  await stackPanel.getByRole('button', { name: 'Push task' }).click();
  await expect(stackPanel.locator('.csl-readout strong')).toHaveText('Plan');
  await stackPanel.getByRole('button', { name: 'Pop top task' }).click();
  await expect(stackPanel.locator('.csl-readout strong')).toHaveText('Build');
  await expect(queuePanel.locator('.csl-readout strong')).toHaveText('Review');
  await queuePanel.getByRole('button', { name: 'Dequeue next task' }).click();
  await expect(queuePanel.locator('.csl-readout strong')).toHaveText('Test');
});
