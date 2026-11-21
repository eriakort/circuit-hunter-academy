import { expect, test, type Page } from '@playwright/test';
import { MISSIONS, ARCS } from '../../src/data/gameData';
import { BALANCE_EQS, TIMELINE_EVENTS, coordName } from '../../src/data/subjectGames';

function locate(missionId: string, type: string) {
  const mi = (MISSIONS as any[]).findIndex(m => m.id === missionId);
  const si = (MISSIONS[mi] as any).scenes.findIndex((s: any) => s.type === type);
  expect(si).toBeGreaterThan(0);
  return { mi, si, subject: ARCS[(MISSIONS[mi] as any).arc].subject as string };
}

async function open(page: Page, missionId: string, type: string, lang: 'en' | 'it') {
  const { mi, si, subject } = locate(missionId, type);
  const grade = 'grade' + subject.replace(/\D/g, '');
  await page.addInitScript(({ mi, si, subject, grade, lang }) => {
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({ grade, name: 'Game Hunter', lang, xp: 0, subject, unit: 0, cleared: {}, seen: {}, flawless: {}, learningProgress: {}, checkpointProgress: {}, v: 3 }));
    window.localStorage.setItem('circuit-hunter-academy-navigation-v2', JSON.stringify({ view: 'scene', currentMissionIndex: mi, currentSceneIndex: si, battleContext: null }));
  }, { mi, si, subject, grade, lang });
  await page.goto('/');
  await expect(page.locator('.game')).toBeVisible();
}

for (const lang of ['en', 'it'] as const) {
  test(`coordinate hunt can be played to the end (${lang})`, async ({ page }) => {
    await open(page, 'geo_g5_m1', 'coordhunt', lang);
    await expect(page.locator('#next')).toBeDisabled();
    for (let round = 0; round < 5; round++) {
      const target = (await page.locator('.game p b.big').innerText()).trim();
      const pts = page.locator('.ch-pt');
      const n = await pts.count();
      expect(n).toBe(35);
      // A wrong point first: feedback names the tapped coordinate and the round does not advance.
      const labels = await pts.evaluateAll(els => els.map(e => e.getAttribute('aria-label')));
      const wrong = labels.findIndex(l => l !== target);
      await pts.nth(wrong).click();
      await expect(page.locator('.fb.no')).toContainText(labels[wrong]!);
      await pts.nth(labels.indexOf(target)).click();
      await expect(page.locator('.fb.ok')).toBeVisible();
      if (round < 4) await page.locator('#chN').click();
      else await page.locator('#chN').click();
    }
    await expect(page.locator('.gtitle')).toContainText(lang === 'en' ? 'Treasure found' : 'Tesoro trovato');
    await expect(page.locator('#next')).toBeEnabled();
  });

  test(`history timeline scores exact placements (${lang})`, async ({ page }) => {
    await open(page, 'hist_g5_m11', 'timeline', lang);
    await expect(page.locator('#next')).toBeDisabled();
    for (let round = 0; round < 5; round++) {
      const text = (await page.locator('.game p b').first().innerText()).trim();
      const ev = TIMELINE_EVENTS.find(e => e.en === text || e.it === text)!;
      expect(ev).toBeTruthy();
      await page.locator('#tlR').fill(String(ev.y));
      await page.locator('#tlOk').click();
      await expect(page.locator('.fb.ok')).toContainText(lang === 'en' ? 'Spot on' : 'Preciso');
      await expect(page.locator('#tlT')).toBeVisible();
      await page.locator('#tlN').click();
    }
    await expect(page.locator('.game')).toContainText('10 / 10');
    await expect(page.locator('#next')).toBeEnabled();
  });

  test(`equation balancer accepts balanced answers and rejects unsimplified ones (${lang})`, async ({ page }) => {
    await open(page, 'chem_l2_m6', 'balancer', lang);
    await expect(page.locator('#next')).toBeDisabled();
    for (let round = 0; round < 4; round++) {
      const formulas = await page.locator('.bal-f').allInnerTexts();
      const eq = BALANCE_EQS.find(e => [...e.left, ...e.right].map(s => s.f).join('|') === formulas.join('|'))!;
      expect(eq).toBeTruthy();
      const clickN = async (i: number, d: 1 | -1, times: number) => { for (let k = 0; k < times; k++) await page.locator(`button[data-i="${i}"][data-d="${d}"]`).click(); };
      if (round === 0 && eq.answer.every(c => c * 2 <= 9)) {
        // Doubling the answer balances but is not in lowest terms (set species one at a time so no earlier state balances).
        for (let i = 0; i < eq.answer.length; i++) await clickN(i, 1, eq.answer[i] * 2 - 1);
        await expect(page.locator('.fb.no')).toBeVisible();
        for (let i = 0; i < eq.answer.length; i++) await clickN(i, -1, eq.answer[i]);
      } else {
        for (let i = 0; i < eq.answer.length; i++) await clickN(i, 1, eq.answer[i] - 1);
      }
      await expect(page.locator('.fb.ok')).toBeVisible();
      await page.locator('#balN').click();
    }
    await expect(page.locator('#next')).toBeEnabled();
  });
}
