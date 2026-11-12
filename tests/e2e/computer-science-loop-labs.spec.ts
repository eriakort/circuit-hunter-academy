import { expect, test } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openMission(page, missionId: string, lang = 'en') {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`Mission not found in curriculum: ${missionId}`);
  await page.addInitScript(({ missionIndex, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade: 'grade9', name: 'Loop Hunter', lang, xp: 0, subject: 'cs', unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: 1, battleContext: null }));
  }, { missionIndex, lang });
  await page.goto('/');
  await expect(page.locator('.cs-visual-lab')).toBeVisible();
}

test('for loop visualiser traces a custom range start, stop and step', async ({ page }) => {
  await openMission(page, 'c14m1');
  await expect(page.getByRole('heading', { name: 'Advance a for loop one turn at a time' })).toBeVisible();
  const ranges = page.locator('.csl-stage input[type="range"]');
  await ranges.nth(0).press('Home');
  await ranges.nth(0).press('ArrowRight');
  await ranges.nth(0).press('ArrowRight');
  await ranges.nth(1).press('End');
  await ranges.nth(2).press('End');

  await expect(page.locator('.csl-code')).toContainText('range(2, 12, 4)');
  const next = page.getByRole('button', { name: 'Next iteration' });
  await next.click();
  await next.click();
  await next.click();
  await expect(page.locator('.csl-packets span')).toHaveText(['2', '6', '10']);
  await expect(page.locator('.csl-readout').filter({ hasText: 'Next value' }).locator('strong')).toHaveText('Loop finished');
  await expect(next).toBeDisabled();
});

test('while loop simulator advances safely and stops when its condition becomes false', async ({ page }) => {
  await openMission(page, 'c14m2');
  await expect(page.getByRole('heading', { name: 'Control a while loop safely' })).toBeVisible();
  const ranges = page.locator('.csl-stage input[type="range"]');
  await ranges.nth(0).press('Home');
  await ranges.nth(0).press('ArrowRight');
  await ranges.nth(0).press('ArrowRight');
  await ranges.nth(1).press('End');
  for (let i = 0; i < 4; i++) await ranges.nth(1).press('ArrowLeft');
  await ranges.nth(2).press('ArrowRight');

  await expect(page.locator('.csl-code')).toContainText('while count < 8');
  const next = page.getByRole('button', { name: 'Next iteration' });
  await next.click();
  await next.click();
  await next.click();
  await expect(page.locator('.csl-packets span')).toHaveText(['2', '4', '6']);
  await expect(page.locator('.csl-readout').filter({ hasText: 'Iterations completed' }).locator('strong')).toHaveText('3/3');
  await expect(page.locator('.csl-readout').filter({ hasText: 'Loop condition' }).locator('strong')).toHaveText('False — loop finished');
  await expect(next).toBeDisabled();
});

test('Chapter 14 loop visualisers are localised in Italian', async ({ page }) => {
  await openMission(page, 'c14m1', 'it');
  await expect(page.getByRole('heading', { name: 'Laboratorio di tracciamento dei cicli' })).toBeVisible();
  await expect(page.locator('[aria-label="Valori stampati dal ciclo"]')).toBeVisible();

  await openMission(page, 'c14m2', 'it');
  await expect(page.getByRole('heading', { name: 'Centro di controllo del ciclo while' })).toBeVisible();
  await expect(page.locator('[aria-label="Valori stampati dal ciclo while"]')).toBeVisible();
  await expect(page.getByText('Questo simulatore è limitato a un massimo di 12 passi')).toBeVisible();
});
