import { expect, test } from '@playwright/test';

async function openOperatingSystemsMission(page, missionIndex, lang = 'en') {
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
  await expect(page.getByRole('heading', { name: /Interactive computer science lab|Laboratorio interattivo di informatica/ })).toBeVisible();
}

test('Operating system lab explains the app-to-hardware process flow', async ({ page }) => {
  await openOperatingSystemsMission(page, 54);
  await expect(page.getByRole('heading', { name: 'Operating system process desk' })).toBeVisible();
  await expect(page.getByText('You select an application icon.')).toBeVisible();
  await page.getByRole('button', { name: 'Next system step' }).click();
  await expect(page.getByText('The operating system finds the program on storage.')).toBeVisible();
  await page.getByRole('button', { name: 'Next system step' }).click();
  await expect(page.getByText('The program is loaded into RAM and becomes a process.')).toBeVisible();
});

test('File system lab demonstrates copy, move, rename and delete in Italian', async ({ page }) => {
  await openOperatingSystemsMission(page, 55, 'it');
  await expect(page.getByRole('heading', { name: 'Officina di file e cartelle' })).toBeVisible();
  await page.getByLabel('Scegli un’operazione').selectOption('move');
  await page.getByRole('button', { name: 'Esegui esempio' }).click();
  await expect(page.getByRole('status')).toContainText('Il file viene spostato');
  await page.getByLabel('Scegli un’operazione').selectOption('copy');
  await page.getByRole('button', { name: 'Esegui esempio' }).click();
  await expect(page.getByRole('status')).toContainText('Viene creata una seconda copia');
});

test('Application lab matches tasks to apps and explains mobile sensors and licences', async ({ page }) => {
  await openOperatingSystemsMission(page, 56);
  await expect(page.getByRole('heading', { name: 'Application and mobile technology studio' })).toBeVisible();
  await page.getByLabel('What do you need to do?').selectOption('calculate');
  await expect(page.getByText('Spreadsheet', { exact: true })).toBeVisible();
  await page.getByLabel('Software licence type').selectOption('proprietary');
  await expect(page.getByRole('status')).toContainText('controlled by its owner');
});
