import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openAlgorithmMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);

  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Algorithm Hunter',
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

test('Flowchart lab traces symbols and evaluates an even/odd input', async ({ page }) => {
  await openAlgorithmMission(page, 'c11m1');
  await expect(page.getByRole('heading', { name: 'Flowchart builder' })).toBeVisible();
  await expect(page.getByText('START', { exact: true })).toBeVisible();
  await page.getByLabel('Try an input number').fill('9');
  await expect(page.getByText('Odd number', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next step' }).click();
  await expect(page.getByText('2 / 5')).toBeVisible();
  await expect(page.getByText(/Read a value/)).toBeVisible();
});

test('Flowchart lab is translated into Italian', async ({ page }) => {
  await openAlgorithmMission(page, 'c11m1', 'it');
  await expect(page.getByRole('heading', { name: 'Costruttore di diagrammi di flusso' })).toBeVisible();
  await expect(page.getByText('INIZIO', { exact: true })).toBeVisible();
  await page.getByLabel('Prova un numero in input').fill('12');
  await expect(page.getByText('Numero pari', { exact: true })).toBeVisible();
  await expect(page.getByText(/Leggi un valore/)).toBeVisible();
});

test('Branch and loop lab evaluates decisions and runs a bounded loop', async ({ page }) => {
  await openAlgorithmMission(page, 'c11m2');
  await expect(page.getByRole('heading', { name: 'Branch & Loop' })).toBeVisible();
  await page.getByLabel('Input number').fill('12');
  await expect(page.getByText('Even number', { exact: true })).toBeVisible();
  await page.getByLabel('Decision rule').selectOption('greater');
  await expect(page.getByText('Greater than 10', { exact: true })).toBeVisible();
  await page.getByLabel('Repeat count (1–8)').fill('3');
  await page.getByRole('button', { name: 'Run loop' }).click();
  await expect(page.getByText('3 / 3')).toBeVisible();
  await expect(page.locator('.csl-packets span')).toHaveText(['1', '2', '3']);
});

test('Branch and loop lab is translated into Italian', async ({ page }) => {
  await openAlgorithmMission(page, 'c11m2', 'it');
  await expect(page.getByRole('heading', { name: 'Bivio e ciclo' })).toBeVisible();
  await page.getByLabel('Numero in input').fill('7');
  await expect(page.getByText('Dispari', { exact: true })).toBeVisible();
  await page.getByLabel('Regola della decisione').selectOption('greater');
  await expect(page.getByText('10 o meno', { exact: true })).toBeVisible();
  await page.getByLabel('Numero di ripetizioni (1–8)').fill('2');
  await page.getByRole('button', { name: 'Esegui ciclo' }).click();
  await expect(page.getByText('2 / 2')).toBeVisible();
});
