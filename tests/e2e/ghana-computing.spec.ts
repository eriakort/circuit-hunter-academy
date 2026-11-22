import { expect, test, type Page } from '@playwright/test';

const enterComputing = async (page: Page) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs1"]').click();
  await page.locator('.subjcard[data-s="ghcomputing"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
};

test('Ghana SHS 1 offers Computing next to Core Mathematics, in English only', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs1"]').click();
  await expect(page.locator('.subjcard[data-s="ghcoremath"]')).toHaveCount(1);
  await expect(page.locator('.subjcard[data-s="ghcomputing"]')).toContainText('Computing');
  await expect(page.locator('main')).not.toContainText(/INFORMATIC|Italian/i);
});

test('Ghana SHS 1 Computing shows its strands and opens a mission with its own diagram', async ({ page }) => {
  await enterComputing(page);
  await expect(page.locator('.subject-indicator')).toContainText('Computing');
  await expect(page.locator('.subject-indicator')).not.toContainText('Computer Science');
  await expect(page.locator('.units button').filter({ hasText: 'Computer Architecture and Organisation' })).toHaveCount(1);
  await expect(page.locator('.units button').filter({ hasText: 'Computational Thinking' })).toHaveCount(1);
  await expect(page.locator('.mcard').first()).toContainText('The Bit Weaver');
  await page.locator('.mcard').first().click();
  await expect(page.locator('svg.sv').first()).toBeVisible();
  await expect(page.locator('main')).not.toContainText(/INFORMATIC/i);
});

const enterGhanaComputing = async (page: Page, grade: 'ghshs1' | 'ghshs2', subject: string) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator(`.grade-card[data-grade="${grade}"]`).click();
  await page.locator(`.subjcard[data-s="${subject}"]`).click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
  // Wait until the app has written the save, so a reload keeps the Ghana selection.
  await expect(page.locator('.mcard').first()).toBeVisible();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('circuit-hunter-academy-v2:ghana-nacca') || '')).toContain(`"grade":"${grade}"`);
};

test('Ghana SHS 2 offers Computing next to Core Mathematics and opens its first mission', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs2"]').click();
  await expect(page.locator('.subjcard[data-s="ghcoremath2"]')).toHaveCount(1);
  await expect(page.locator('.subjcard[data-s="ghcomputing2"]')).toContainText('Computing');
  await page.locator('.subjcard[data-s="ghcomputing2"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
  await expect(page.locator('.mcard').first()).toContainText('The Logic Gatekeeper');
  await expect(page.locator('main')).not.toContainText(/INFORMATIC|Italian/i);
});

test('Ghana SHS 3 offers Computing next to Core Mathematics and opens its first mission', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.curriculum-country-picker').getByRole('button', { name: /Ghana/ }).click();
  await page.locator('.grade-card[data-grade="ghshs3"]').click();
  await expect(page.locator('.subjcard[data-s="ghcoremath3"]')).toHaveCount(1);
  await expect(page.locator('.subjcard[data-s="ghcomputing3"]')).toContainText('Computing');
  await page.locator('.subjcard[data-s="ghcomputing3"]').click();
  if (await page.locator('#nm').count()) {
    await page.locator('#nm').fill('Ama');
    await page.locator('#regf button').first().click();
  }
  await expect(page.locator('.mcard').first()).toContainText('The Logic Detective');
  await expect(page.locator('main')).not.toContainText(/INFORMATIC|Italian/i);
});

test('every interactive Computing scene (SHS 1, SHS 2 and SHS 3) loads its game without errors', async ({ page }) => {
  test.setTimeout(240000);
  const { MISSIONS, ARCS } = await import('../../src/data/gameData');
  const errors: string[] = [];
  // The app writes its navigation when the page unloads, so the target is re-applied on every load.
  await page.addInitScript(() => {
    const raw = localStorage.getItem('zz-target');
    if (!raw) return;
    const { m, s } = JSON.parse(raw);
    localStorage.setItem('circuit-hunter-academy-navigation-v2:ghana-nacca', JSON.stringify({ view: 'scene', currentMissionIndex: m, currentSceneIndex: s, battleContext: null }));
  });
  page.on('pageerror', e => errors.push(e.message));
  const targets: Array<{ grade: 'ghshs1' | 'ghshs2' | 'ghshs3'; subject: string; m: number; s: number; id: string; type: string }> = [];
  MISSIONS.forEach((mission: any, m: number) => {
    const subject = ARCS[mission.arc]?.subject;
    if (subject !== 'ghcomputing' && subject !== 'ghcomputing2' && subject !== 'ghcomputing3') return;
    (mission.scenes || []).forEach((scene: any, s: number) => {
      if (scene.type && scene.type !== 'battle') targets.push({ grade: subject === 'ghcomputing' ? 'ghshs1' : subject === 'ghcomputing2' ? 'ghshs2' : 'ghshs3', subject, m, s, id: mission.id, type: scene.type });
    });
  });
  expect(targets.length).toBeGreaterThan(50);
  for (const grade of ['ghshs1', 'ghshs2', 'ghshs3'] as const) {
    await enterGhanaComputing(page, grade, grade === 'ghshs1' ? 'ghcomputing' : grade === 'ghshs2' ? 'ghcomputing2' : 'ghcomputing3');
    for (const t of targets.filter(x => x.grade === grade)) {
      await page.evaluate(({ m, s }) => localStorage.setItem('zz-target', JSON.stringify({ m, s })), t);
      await page.reload();
      await expect(page.locator('#gm > *').first(), `${t.id} scene ${t.s} (${t.type})`).toBeVisible({ timeout: 8000 });
    }
  }
  expect(errors).toEqual([]);
});
