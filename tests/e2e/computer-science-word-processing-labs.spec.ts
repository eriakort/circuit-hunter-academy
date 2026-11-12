import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openWordProcessingMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);

  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      grade: 'grade9',
      name: 'Word Processing Hunter',
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

test('Word processing lab previews formatting and explains document formats', async ({ page }) => {
  await openWordProcessingMission(page, 'c8m1');
  await expect(page.getByRole('heading', { name: "The Scribe's Formatting Studio" })).toBeVisible();
  await page.getByLabel('Document title').fill('Mission Report');
  await expect(page.locator('.csl-document-preview strong')).toHaveText('Mission Report');
  await page.getByRole('button', { name: 'Italic' }).click();
  await expect(page.locator('.csl-document-preview strong')).toHaveCSS('font-style', 'italic');
  await page.getByLabel('Save or export as').selectOption('pdf');
  await expect(page.getByRole('status').first()).toContainText('stable layout');
  await page.getByLabel('Find').fill('planet');
  await page.getByLabel('Replace with').fill('world');
  await page.getByRole('button', { name: 'Preview replacement' }).click();
  await expect(page.getByRole('status').last()).toContainText('planet → world');
});

test('Word processing formatting and file guidance are translated into Italian', async ({ page }) => {
  await openWordProcessingMission(page, 'c8m1', 'it');
  await expect(page.getByRole('heading', { name: 'Lo studio di formattazione dello scriba' })).toBeVisible();
  await page.getByLabel('Salva o esporta come').selectOption('odt');
  await expect(page.getByRole('status').first()).toContainText('standard aperto');
  await page.getByRole('button', { name: 'Corsivo' }).click();
  await expect(page.locator('.csl-document-preview strong')).toHaveCSS('font-style', 'italic');
});

test('Document layout lab updates page elements and ergonomic guidance', async ({ page }) => {
  await openWordProcessingMission(page, 'c8m2');
  await expect(page.getByRole('heading', { name: 'Document Layout & Wellbeing Studio' })).toBeVisible();
  await page.getByLabel('Image and text layout').selectOption('behind');
  await expect(page.locator('.csl-layout-preview p')).toHaveClass(/behind/);
  await page.getByLabel('Include a small data table').uncheck();
  await expect(page.locator('.csl-mini-table')).toHaveCount(0);
  await page.getByLabel('Screen distance (cm)').focus();
  await page.getByLabel('Screen distance (cm)').press('End');
  await page.getByLabel('Top of screen').selectOption('eye');
  await page.getByLabel('I took a short screen break').check();
  await expect(page.getByRole('status').last()).toContainText('Aim for roughly 50–70 cm');
});

test('Document layout and ergonomic guidance are translated into Italian', async ({ page }) => {
  await openWordProcessingMission(page, 'c8m2', 'it');
  await expect(page.getByRole('heading', { name: 'Studio di impaginazione e benessere' })).toBeVisible();
  await page.getByLabel('Disposizione di immagine e testo').selectOption('inline');
  await page.getByLabel('Bordo superiore dello schermo').selectOption('low');
  await expect(page.getByRole('status').last()).toContainText('50–70 cm');
  await page.getByLabel('Ho fatto una breve pausa dallo schermo').check();
});
