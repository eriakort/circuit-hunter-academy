import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);
  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade: 'grade9', name: 'Selection Hunter', lang, xp: 0, subject: 'cs', unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: 1, battleContext: null }));
  }, { missionIndex, lang });
  await page.goto('/');
  await expect(page.locator('.cs-visual-lab')).toBeVisible();
}

test('selection lab follows the first matching if / elif / else branch', async ({ page }) => {
  await openMission(page, 'c13m1');
  await expect(page.getByRole('heading', { name: 'Selection decision simulator' })).toBeVisible();
  const grade = page.locator('.csl-stage input[type="range"]');
  await grade.press('Home');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Selected branch' }).locator('strong')).toHaveText('else: Try again');
  for (let i = 0; i < 7; i++) await grade.press('ArrowRight');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Selected branch' }).locator('strong')).toHaveText('elif: Passed');
  await grade.press('End');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Selected branch' }).locator('strong')).toHaveText('if: Excellent');
});

test('logic gates and match-case produce the expected outputs', async ({ page }) => {
  await openMission(page, 'c13m2');
  await expect(page.getByRole('heading', { name: 'Logic gate & match-case lab' })).toBeVisible();
  await expect(page.locator('.csl-readout').filter({ hasText: 'Gate output' }).locator('strong')).toHaveText('0 (False)');
  await page.getByLabel('Input B').check();
  await expect(page.locator('.csl-readout').filter({ hasText: 'Gate output' }).locator('strong')).toHaveText('1 (True)');
  await page.getByLabel('Logic operation').selectOption('xor');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Gate output' }).locator('strong')).toHaveText('0 (False)');
  await page.getByLabel('Choose a day').selectOption('Sun');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Selected case' }).locator('strong')).toHaveText('Weekend');
  await page.getByLabel('Choose a day').selectOption('Fri');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Selected case' }).locator('strong')).toHaveText('Default case: school day');
});

test('selection and logic labs are localised in Italian', async ({ page }) => {
  await openMission(page, 'c13m1', 'it');
  await expect(page.getByRole('heading', { name: 'Simulatore delle decisioni condizionali' })).toBeVisible();
  await expect(page.getByText('Ramo selezionato')).toBeVisible();
  await openMission(page, 'c13m2', 'it');
  await expect(page.getByRole('heading', { name: 'Laboratorio delle porte logiche e match-case' })).toBeVisible();
  await expect(page.getByLabel('Operazione logica')).toBeVisible();
  await expect(page.getByLabel('Scegli un giorno')).toBeVisible();
});
