import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openPresentationMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);

  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Presentation Hunter',
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

test('Slide designer previews title, message, theme and visual choices', async ({ page }) => {
  await openPresentationMission(page, 'c10m1');
  await expect(page.getByRole('heading', { name: 'Presentation Stage Designer' })).toBeVisible();
  await page.getByLabel('Presentation title').fill('Our Solar System');
  await page.getByLabel('Main message (one idea)').fill('Eight planets orbit the Sun');
  await page.getByLabel('Theme').selectOption('forest');
  await page.getByLabel('Visual support').selectOption('chart');
  await expect(page.locator('.csl-slide-preview')).toHaveClass(/theme-forest/);
  await expect(page.locator('.csl-slide-preview h3')).toHaveText('Our Solar System');
  await expect(page.locator('.csl-slide-preview p')).toHaveText('Eight planets orbit the Sun');
  await expect(page.locator('.csl-demo-bars')).toBeVisible();
});

test('Slide designer labels and guidance are translated into Italian', async ({ page }) => {
  await openPresentationMission(page, 'c10m1', 'it');
  await expect(page.getByRole('heading', { name: 'Progettista del palcoscenico delle presentazioni' })).toBeVisible();
  await page.getByLabel('Tema').selectOption('paper');
  await page.getByLabel('Supporto visivo').selectOption('image');
  await expect(page.locator('.csl-slide-preview')).toHaveClass(/theme-paper/);
  await expect(page.locator('.csl-slide-image')).toBeVisible();
  await expect(page.getByText(/licenza e aggiungi un’attribuzione/i)).toBeVisible();
});

test('Live presentation studio distinguishes effects and checks remote readiness', async ({ page }) => {
  await openPresentationMission(page, 'c10m2');
  await expect(page.getByRole('heading', { name: 'Grand Premiere Rehearsal Studio' })).toBeVisible();
  await page.getByLabel('Slide transition (between slides)').selectOption('push');
  await page.getByLabel('Object animation (inside a slide)').selectOption('emphasis');
  await expect(page.getByText(/Push transition · Emphasis animation/)).toBeVisible();
  await page.getByLabel('Microphone tested').check();
  await page.getByLabel('Correct window selected for screen sharing').check();
  await page.getByLabel('Private speaker notes are hidden from the audience').check();
  await expect(page.getByRole('status').last()).toContainText('ready to present remotely');
  await page.getByRole('button', { name: 'Next rehearsal step' }).click();
  await expect(page.getByText('2 / 4')).toBeVisible();
});

test('Live presentation studio and remote checklist are translated into Italian', async ({ page }) => {
  await openPresentationMission(page, 'c10m2', 'it');
  await expect(page.getByRole('heading', { name: 'Studio prove per la grande prima' })).toBeVisible();
  await page.getByLabel('Transizione (tra le slide)').selectOption('none');
  await page.getByLabel('Animazione oggetto (dentro una slide)').selectOption('none');
  await page.getByLabel('Microfono verificato').check();
  await page.getByLabel('Finestra corretta selezionata per la condivisione').check();
  await page.getByLabel('Le note private del relatore sono nascoste al pubblico').check();
  await expect(page.getByRole('status').last()).toContainText('pronto per presentare a distanza');
  await page.getByRole('button', { name: 'Passo successivo' }).click();
  await expect(page.getByText('2 / 4')).toBeVisible();
});
