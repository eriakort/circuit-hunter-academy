import { expect, test, type Page } from '@playwright/test';
import { ARCS, MISSIONS } from '../../src/data/gameData';
import { buildBreakGame, shouldOfferBreak, type BreakGame } from '../../src/data/breakGames';

const missions = MISSIONS as any[];

/** First mission (in plain subjects, grade 9 / CS universe) whose break at scene 2 is of this kind. */
function findKind(kind: BreakGame['kind']) {
  for (let m = 0; m < missions.length; m++) {
    const arcSubject = ARCS[missions[m].arc]?.subject;
    const subject = arcSubject ?? 'cs';
    const grade = subject === 'cs' ? 'grade9' : subject === 'science' || subject === 'math5' ? 'grade5' : null;
    if (!grade) continue;
    if (missions[m].learning || !shouldOfferBreak(missions[m], 2)) continue; // learning missions gate Continue behind practice
    const game = buildBreakGame(missions[m], 2, 'en');
    if (game && game.kind === kind) return { missionIndex: m, game, subject, grade };
  }
  return null;
}

async function openScene(page: Page, missionIndex: number, sceneIndex: number, subject = 'cs', grade = 'grade9') {
  await page.addInitScript(({ missionIndex, sceneIndex, subject, grade }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade, name: 'Break Hunter', lang: 'en', xp: 0, subject, unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: missionIndex, currentSceneIndex: sceneIndex, battleContext: null }));
  }, { missionIndex, sceneIndex, subject, grade });
  await page.goto('/');
  await expect(page.locator('#next')).toBeVisible();
}

async function pressNextForBreak(page: Page) {
  // Some scenes gate Continue until the learner acts; scene 2 of these missions is plain text.
  await expect(page.locator('#next')).toBeEnabled();
  await page.locator('#next').click();
  await expect(page.locator('.break-game')).toBeVisible();
}

test('a break can be skipped and the lesson carries on', async ({ page }) => {
  const found = findKind('truefalse') || findKind('match') || findKind('memory') || findKind('gap');
  expect(found).not.toBeNull();
  await openScene(page, found!.missionIndex, 2, found!.subject, found!.grade);
  await pressNextForBreak(page);
  await expect(page.locator('.break-badge')).toHaveText(/STUDY BREAK/);
  await page.locator('#break-skip').click();
  await expect(page.locator('.break-game')).toHaveCount(0);
  await expect(page.locator('.dots')).toHaveAttribute('aria-label', /^4 \//);
});

test('true/false break can be played to the end', async ({ page }) => {
  const found = findKind('truefalse');
  test.skip(!found, 'no mission starts with a true/false break');
  const game = found!.game as Extract<BreakGame, { kind: 'truefalse' }>;
  await openScene(page, found!.missionIndex, 2, found!.subject, found!.grade);
  await pressNextForBreak(page);
  for (const round of game.rounds) {
    await page.getByRole('button', { name: round.isTrue ? 'True' : 'False', exact: true }).click();
    await expect(page.locator('.fb.ok')).toBeVisible();
    await page.locator('.fb .btn').click();
  }
  await expect(page.locator('.break-result')).toBeVisible();
  await page.locator('#break-continue').click();
  await expect(page.locator('.dots')).toHaveAttribute('aria-label', /^4 \//);
});

test('match break can be played to the end', async ({ page }) => {
  const found = findKind('match');
  test.skip(!found, 'no mission starts with a match break');
  const game = found!.game as Extract<BreakGame, { kind: 'match' }>;
  await openScene(page, found!.missionIndex, 2, found!.subject, found!.grade);
  await pressNextForBreak(page);
  for (const pair of game.pairs) {
    await page.locator('.break-col').first().getByRole('button', { name: pair.question, exact: true }).click();
    await page.locator('.break-col').nth(1).getByRole('button', { name: pair.answer, exact: true }).click();
  }
  await expect(page.locator('.break-result')).toBeVisible();
});

test('fill-the-gap break can be played to the end', async ({ page }) => {
  const found = findKind('gap');
  test.skip(!found, 'no mission starts with a gap break');
  const game = found!.game as Extract<BreakGame, { kind: 'gap' }>;
  await openScene(page, found!.missionIndex, 2, found!.subject, found!.grade);
  await pressNextForBreak(page);
  for (const round of game.rounds) {
    await page.locator('.break-gap .cat').getByText(round.answer, { exact: true }).click();
    await page.locator('.fb .btn').click();
  }
  await expect(page.locator('.break-result')).toBeVisible();
});

test('memory break flips cards and finishes when every pair is found', async ({ page }) => {
  const found = findKind('memory');
  test.skip(!found, 'no mission starts with a memory break');
  const game = found!.game as Extract<BreakGame, { kind: 'memory' }>;
  await openScene(page, found!.missionIndex, 2, found!.subject, found!.grade);
  await pressNextForBreak(page);
  const card = (text: string) => page.locator('.mem-card').filter({ has: page.locator('.mem-front', { hasText: text }) }).first();
  for (const pair of game.pairs) {
    await card(pair.question).click();
    await card(pair.answer).click();
  }
  await expect(page.locator('.break-result')).toBeVisible();
});

test('Ghana JHS science gets study breaks too, in English', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghjhs1"]').click();
  await page.locator('.subjcard[data-s="ghjhs1science"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Kofi');
    await page.locator('#regf button').first().click();
  }
  await page.locator('.mcard').first().click();
  for (let i = 0; i < 2; i++) await page.locator('#next').click();
  await page.locator('#next').click();
  await expect(page.locator('.break-game')).toBeVisible();
  await expect(page.locator('.break-game')).not.toContainText(/Domanda|Vero|Falso|Abbina|Salta/);
  await page.locator('#break-skip').click();
  await expect(page.locator('.break-game')).toHaveCount(0);
  await expect(page.locator('#next')).toBeVisible();
});
