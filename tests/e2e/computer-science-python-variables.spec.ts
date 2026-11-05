import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openPythonMission(page, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === 'c12m2');
  if (missionIndex < 0) throw new Error('Mission not found in curriculum: c12m2');
  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade: 'grade9', name: 'Python Hunter', lang, xp: 0, subject: 'cs', unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: 1, battleContext: null }));
  }, { missionIndex, lang });
  await page.goto('/');
  await expect(page.locator('.cs-visual-lab')).toBeVisible();
}

test('Python input is text until converted and assignment is simulated', async ({ page }) => {
  await openPythonMission(page);
  await expect(page.getByRole('heading', { name: 'Python variable & type lab' })).toBeVisible();
  await expect(page.getByText('Always returns str (text)')).toBeVisible();
  await page.getByLabel('Try a Python value').fill('True');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Detected literal type' }).locator('strong')).toHaveText('bool');
  await page.getByLabel('Text entered by the user').fill('23');
  await page.getByLabel('Convert the input').selectOption('none');
  await page.getByRole('button', { name: 'Run the example' }).click();
  await expect(page.getByText('TypeError: text and number cannot be added. Convert the input first.')).toBeVisible();
  await page.getByLabel('Convert the input').selectOption('int');
  await page.getByRole('button', { name: 'Run the example' }).click();
  await expect(page.getByText('Next value: 24')).toBeVisible();
  await expect(page.getByText('score = 23 (int)')).toBeVisible();
});

test('Python lab validates conversions and variable names', async ({ page }) => {
  await openPythonMission(page);
  await page.getByLabel('Text entered by the user').fill('hello');
  await page.getByRole('button', { name: 'Run the example' }).click();
  await expect(page.getByText(/Cannot convert this text/)).toBeVisible();
  await page.getByLabel('Variable name').fill('2bad name');
  await expect(page.getByText(/Use a letter or underscore first/)).toBeVisible();
  await page.getByRole('button', { name: 'Run the example' }).click();
  await expect(page.getByText('Invalid variable name')).toBeVisible();
});

test('Python variable lab is fully translated into Italian', async ({ page }) => {
  await openPythonMission(page, 'it');
  await expect(page.getByRole('heading', { name: 'Laboratorio Python: variabili e tipi' })).toBeVisible();
  await expect(page.getByLabel('Testo inserito dall’utente')).toBeVisible();
  await page.getByLabel('Converti l’input').selectOption('float');
  await page.getByLabel('Testo inserito dall’utente').fill('2.5');
  await page.getByRole('button', { name: 'Esegui l’esempio' }).click();
  await expect(page.getByText('Valore successivo: 3.5')).toBeVisible();
  await expect(page.getByText('score = 2.5 (float)')).toBeVisible();
});
