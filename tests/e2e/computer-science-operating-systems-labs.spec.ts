import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openOperatingSystemsMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);

  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Operating Systems Hunter',
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

test('Operating system lab explains the app-to-hardware process flow', async ({ page }) => {
  await openOperatingSystemsMission(page, 'a4m1');
  await expect(page.getByRole('heading', { name: 'Operating system process desk' })).toBeVisible();
  await expect(page.locator('.csl-steps>div.current')).toContainText('You select an application icon.');
  await page.getByRole('button', { name: 'Next system step' }).click();
  await expect(page.locator('.csl-steps>div.current')).toContainText('The operating system finds the program on storage.');
  await page.getByRole('button', { name: 'Next system step' }).click();
  await expect(page.locator('.csl-steps>div.current')).toContainText('The program is loaded into RAM and becomes a process.');
});

test('File system lab demonstrates copy, move, rename and delete in Italian', async ({ page }) => {
  await openOperatingSystemsMission(page, 'a4m2', 'it');
  await expect(page.getByRole('heading', { name: 'Officina di file e cartelle' })).toBeVisible();
  await page.getByLabel('Scegli un’operazione').selectOption('move');
  await page.getByRole('button', { name: 'Esegui esempio' }).click();
  await expect(page.getByRole('status')).toContainText('Il file viene spostato');
  await page.getByLabel('Scegli un’operazione').selectOption('copy');
  await page.getByRole('button', { name: 'Esegui esempio' }).click();
  await expect(page.getByRole('status')).toContainText('Viene creata una seconda copia');
});

test('Application lab matches tasks to apps and explains mobile sensors and licences', async ({ page }) => {
  await openOperatingSystemsMission(page, 'a4m3');
  await expect(page.getByRole('heading', { name: 'Application and mobile technology studio' })).toBeVisible();
  await page.getByLabel('What do you need to do?').selectOption('calculate');
  await expect(page.getByText('Spreadsheet', { exact: true })).toBeVisible();
  await page.getByLabel('Software licence type').selectOption('proprietary');
  await expect(page.getByRole('status')).toContainText('controlled by its owner');
});
