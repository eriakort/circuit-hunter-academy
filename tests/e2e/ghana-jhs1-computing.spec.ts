import { expect, test, type Page } from '@playwright/test';
import { MISSIONS } from '../../src/data/gameData';

async function openComputingVisual(page: Page, missionId: string) {
  const missionIndex = MISSIONS.findIndex(mission => mission.id === missionId);
  if (missionIndex < 0) throw new Error(`JHS 1 Computing mission not found: ${missionId}`);

  await page.addInitScript(({ missionIndex }) => {
    localStorage.setItem('circuit-hunter-academy-curriculum-profile-v1', JSON.stringify({
      activeCurriculumId: 'ghana-nacca',
      enabledCurriculumIds: ['ghana-nacca']
    }));
    localStorage.setItem('circuit-hunter-academy-v2:ghana-nacca', JSON.stringify({
      grade: 'ghjhs1',
      name: 'Ama',
      lang: 'en',
      xp: 0,
      subject: 'ghjhs1computing',
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
      v: 5
    }));
    localStorage.setItem('circuit-hunter-academy-navigation-v2:ghana-nacca', JSON.stringify({
      view: 'scene',
      currentMissionIndex: missionIndex,
      currentSceneIndex: 1,
      battleContext: null
    }));
  }, { missionIndex });

  await page.goto('/');
  await expect(page.locator('.ghana-computing-lab')).toBeVisible();
}

test('JHS 1 Computing computer-system diagram advances through the information flow', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-computer-systems');
  await page.getByRole('button', { name: 'Next step' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('processor follows instructions');
});

test('JHS 1 Computing binary visual recalculates when a bit changes', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-binary-data');
  await expect(page.locator('.ghana-computing-lab__readout')).toContainText('13');
  await page.getByRole('button', { name: 'Place value 8, on' }).click();
  await expect(page.locator('.ghana-computing-lab__readout')).toContainText('5');
});

test('JHS 1 Computing network visual animates a message packet to its destination', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-networks');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.locator('.ghana-computing-lab__network')).toHaveClass(/is-sent/);
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Message delivered');
});

test('JHS 1 Computing device-care visual explains screen-height choices', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-device-care');
  await page.getByLabel('Screen height').press('End');
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Too high');
});

test('JHS 1 Computing programming visual traces each repeat instruction', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-programming');
  await page.getByRole('button', { name: 'Run next instruction' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Repeat step 1 of 3');
  await page.getByRole('button', { name: 'Run next instruction' }).click();
  await page.getByRole('button', { name: 'Run next instruction' }).click();
  await page.getByRole('button', { name: 'Run next instruction' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Program complete: 3 plants');
});

test('JHS 1 Computing data visual updates its bar chart from a new response', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-data');
  await page.getByRole('button', { name: 'Add one mangoes vote' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Total responses: 17');
  await expect(page.locator('.ghana-computing-lab__chart')).toContainText('5');
});

test('JHS 1 Computing research visual identifies an unchecked source', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-search');
  await page.getByRole('button', { name: 'Community post' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('missing author, date and evidence');
});

test('JHS 1 Computing collaboration visual explains public-link risk', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-collaboration');
  await page.getByRole('button', { name: 'Public link' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('outside your group');
});

test('JHS 1 Computing document visual compares plain text with a clear heading', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-documents');
  await page.getByRole('button', { name: 'Keep plain text' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('less help finding the report topic');
  await page.getByRole('button', { name: 'Add a heading' }).click();
  await expect(page.locator('.ghana-computing-lab__document')).toContainText('Our School Garden');
});

test('JHS 1 Computing spreadsheet visual recalculates its formula', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-spreadsheets');
  await expect(page.locator('.ghana-computing-lab__sheet')).toContainText('GH₵18');
  await page.getByRole('button', { name: 'Add one exercise book' }).click();
  await expect(page.locator('.ghana-computing-lab__sheet')).toContainText('GH₵20');
});

test('JHS 1 Computing accessibility visual explains useful alternative text', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-accessibility');
  await page.getByRole('button', { name: 'Picture', exact: true }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('does not tell a reader what the image shows');
});

test('JHS 1 Computing troubleshooting visual keeps checks safe', async ({ page }) => {
  await openComputingVisual(page, 'gh-jhs1-computing-troubleshooting');
  await page.getByLabel('What is happening?').selectOption('internet');
  await page.getByRole('button', { name: 'Try this safe check' }).click();
  await expect(page.locator('.ghana-computing-lab__result')).toContainText('Do not open the device or touch wires');
});
