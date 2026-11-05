import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openCloudMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);

  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Cloud Collaboration Hunter',
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

test('Cloud lab compares service models and demonstrates least-privilege sharing', async ({ page }) => {
  await openCloudMission(page, 'c7m1');
  await expect(page.getByRole('heading', { name: 'Cloud services and sharing studio' })).toBeVisible();

  await page.getByLabel('Cloud service model').selectOption('iaas');
  await expect(page.getByRole('status').first()).toContainText('virtual machines, storage and networks');

  await page.getByLabel('Permission for your collaborator').selectOption('commenter');
  await expect(page.getByText('Can leave comments and suggestions')).toBeVisible();

  await page.getByLabel('Who can open the link?').selectOption('link');
  await expect(page.getByRole('status').last()).toContainText('the link can be forwarded');
});

test('Cloud sharing guidance is fully available in Italian', async ({ page }) => {
  await openCloudMission(page, 'c7m1', 'it');
  await expect(page.getByRole('heading', { name: 'Studio dei servizi cloud e della condivisione' })).toBeVisible();

  await page.getByLabel('Modello di servizio cloud').selectOption('paas');
  await expect(page.getByRole('status').first()).toContainText('piattaforma gestita');
  await page.getByLabel('Chi può aprire il link?').selectOption('link');
  await expect(page.getByRole('status').last()).toContainText('il link può essere inoltrato');
});

test('Team collaboration lab guides meeting preparation and pre-call checks', async ({ page }) => {
  await openCloudMission(page, 'c7m2');
  await expect(page.getByRole('heading', { name: 'Team collaboration mission control' })).toBeVisible();

  await expect(page.locator('.csl-steps>div.current')).toContainText('Create an event in the shared calendar.');
  await page.getByRole('button', { name: 'Next meeting step' }).click();
  await expect(page.locator('.csl-steps>div.current')).toContainText('Invite the group and add the video-call link.');

  await page.getByLabel('Camera tested').check();
  await page.getByLabel('Microphone tested').check();
  await expect(page.getByRole('status')).toContainText('Pre-call check complete');
  await page.locator('input[type="range"]').fill('50');
  await expect(page.getByText('200 km', { exact: true })).toBeVisible();
});

test('Team collaboration checks and environmental explanation are translated into Italian', async ({ page }) => {
  await openCloudMission(page, 'c7m2', 'it');
  await expect(page.getByRole('heading', { name: 'Centro di controllo della collaborazione' })).toBeVisible();

  await page.getByLabel('Webcam verificata').check();
  await page.getByLabel('Microfono verificato').check();
  await expect(page.getByRole('status')).toContainText('Controllo pre-chiamata completato');
  await expect(page.getByText(/non un calcolo dell’impronta di carbonio/)).toBeVisible();
});
