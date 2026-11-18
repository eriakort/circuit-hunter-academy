import { expect, test } from '@playwright/test';

test('new learner chooses a grade before seeing its subjects and the choice survives refresh', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await expect(page.getByRole('heading', { name: 'Circuit Hunter Academy' })).toBeVisible();
  await expect(page.locator('.grade-card[data-grade^="grade"]')).toHaveCount(4);

  await page.locator('.grade-card[data-grade="grade5"]').click();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="math5"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="hist5"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="geo5"]')).toBeVisible();
  await expect(page.locator('.subjcard')).toHaveCount(5);
  const quickLaunch = page.getByRole('navigation', { name: 'Quick subject launch' });
  await expect(quickLaunch.getByRole('button', { name: /Italian/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /History/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Geography/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button')).toHaveCount(5);
  await expect(quickLaunch.getByRole('button', { name: /CS|Physics/ })).toHaveCount(0);
  await expect(page.locator('#hMap')).not.toHaveAttribute('aria-current', 'page');
  await expect(page.locator('#hCodex')).not.toHaveAttribute('aria-current', 'page');

  await page.reload();
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard')).toHaveCount(5);

  await page.getByRole('button', { name: /Change grade/ }).click();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('.subjcard')).toHaveCount(7);
  await expect(page.locator('.subjcard[data-s="math"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="phys"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="chem"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="hist9"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="geo9"]')).toBeVisible();
  await expect(quickLaunch.getByRole('button')).toHaveCount(7);
  await expect(quickLaunch.getByRole('button', { name: /Computer Science/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Physics/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Math/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Chemistry \(L1\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /History \(L1\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Geography \(L1\)/ })).toBeVisible();

  await page.getByRole('button', { name: /Change grade/ }).click();
  await page.locator('.grade-card[data-grade="grade10"]').click();
  await expect(page.locator('.subjcard')).toHaveCount(5);
  await expect(page.locator('.subjcard[data-s="math10"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="chem10"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="hist10"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="geo10"]')).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Math \(L2\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Chemistry \(L2\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /History \(L2\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Geography \(L2\)/ })).toBeVisible();

  await page.getByRole('button', { name: /Change grade/ }).click();
  await page.locator('.grade-card[data-grade="grade11"]').click();
  await expect(page.locator('.subjcard')).toHaveCount(5);
  await expect(page.locator('.subjcard[data-s="math11"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="chem11"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="hist11"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="geo11"]')).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Math \(L3\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Chemistry \(L3\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /History \(L3\)/ })).toBeVisible();
  await expect(quickLaunch.getByRole('button', { name: /Geography \(L3\)/ })).toBeVisible();

  await page.locator('.subjcard[data-s="chem11"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Chemistry (Level 3)');
  await expect(page.locator('#hGrade')).toContainText('11');
  await expect(page.locator('#hMap')).toHaveAttribute('aria-current', 'page');

  await page.getByRole('button', { name: /Change grade/ }).click();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await page.locator('.subjcard[data-s="math"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Mathematics');
  await expect(page.locator('#hMap')).toHaveAttribute('aria-current', 'page');
});

test('legacy saves without a grade are migrated to Grade 9 without losing progress', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    window.localStorage.clear();
    window.localStorage.setItem('circuit-hunter-academy-v2', JSON.stringify({
      name: 'Legacy Hunter',
      lang: 'en',
      xp: 240,
      subject: 'math',
      unit: 5,
      cleared: { m1m1: true },
      seen: {},
      flawless: {},
      learningProgress: {},
      v: 2
    }));
  });
  await page.reload();

  await expect(page.locator('.subject-indicator')).toContainText('Mathematics');
  await expect(page.locator('#hGrade')).toContainText('9');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('circuit-hunter-academy-v2') || '{}'));
  expect(saved.grade).toBe('grade9');
  expect(saved.xp).toBe(240);
  expect(saved.cleared.m1m1).toBe(true);
});

test('changing grades keeps the selected subject within that grade curriculum', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  // Grade 5 offers Science, Maths, Italian, History and Geography.
  await page.locator('.grade-card').first().click();
  await page.locator('.subjcard[data-s="science"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Science & Technology');

  // Switching to Grade 9 must not leave the Grade 5 Science subject selected.
  await page.locator('#hGrade').click();
  await page.locator('.grade-card[data-grade="grade9"]').click();
  await expect(page.locator('.subjcard[data-s="science"]')).toHaveCount(0);
  await expect(page.locator('.subjcard[data-s="cs"]')).toBeVisible();
  await page.locator('.subjcard[data-s="math"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Mathematics');
  await page.locator('#hTest').click();
  await expect(page.locator('.mhead .eyebrow')).toContainText('Mathematics');
  await expect(page.locator('#catSelect option').first()).toContainText('All Mathematics Topics');

  // Switching back selects Science automatically and does not expose Grade 9 subjects.
  await page.locator('#hGrade').click();
  await page.locator('.grade-card').first().click();
  await expect(page.locator('.subjcard')).toHaveCount(5);
  await expect(page.locator('.subjcard[data-s="science"]')).toBeVisible();
  await expect(page.locator('.subjcard[data-s="italian"]')).toBeVisible();
  await page.locator('.subjcard[data-s="science"]').click();
  await expect(page.locator('.subject-indicator')).toContainText('Science & Technology');
});

test('Grade 9 knowledge tests identify Computer Science, Physics and Mathematics correctly', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').nth(1).click();

  await page.locator('.subjcard[data-s="cs"]').click();
  await page.locator('#hTest').click();
  await expect(page.locator('.mhead .eyebrow')).toContainText('Computer Science');
  await expect(page.locator('#catSelect option').first()).toContainText('All Computer Science Topics');

  await page.locator('#hSubj').click();
  await page.locator('.subjcard[data-s="phys"]').click();
  await page.locator('#hTest').click();
  await expect(page.locator('.mhead .eyebrow')).toContainText('Physics');
  await expect(page.locator('#catSelect option').first()).toContainText('All Physics Topics');

  await page.locator('#hSubj').click();
  await page.locator('.subjcard[data-s="math"]').click();
  await page.locator('#hTest').click();
  await expect(page.locator('.mhead .eyebrow')).toContainText('Mathematics');
  await expect(page.locator('#catSelect option').first()).toContainText('All Mathematics Topics');
});

test('Italian Speaking Lab audio errors relocalize when the language changes', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'SpeechRecognition', { configurable: true, value: undefined });
    Object.defineProperty(window, 'webkitSpeechRecognition', { configurable: true, value: undefined });
  });
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').first().click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#hItLab').click();
  await page.locator('#lEN').click();

  await page.getByRole('button', { name: /Speak Now \(Italian\)/ }).click();
  const error = page.locator('.italian-lab-audio-error');
  await expect(error).toContainText('Speech recognition is not supported in this browser');

  await page.locator('#lIT').click();
  await expect(error).toContainText('Il riconoscimento vocale non è supportato in questo browser');

  await page.locator('#lEN').click();
  await expect(error).toContainText('Speech recognition is not supported in this browser');
});


test('Italian oral checkpoint speech errors relocalize when the language changes', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'SpeechRecognition', { configurable: true, value: undefined });
    Object.defineProperty(window, 'webkitSpeechRecognition', { configurable: true, value: undefined });
  });
  await page.goto('/');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();

  await page.locator('.grade-card').nth(1).click();
  await page.locator('.subjcard[data-s="italian"]').click();
  await page.locator('#hItLab').click();
  await expect(page.getByRole('heading', { name: 'Italian Speaking Lab' })).toBeVisible();
  await page.getByRole('button', { name: /Take Oral Trial/ }).click();
  await page.locator('#lEN').click();

  await page.getByRole('button', { name: /Speak in Italian/ }).click();
  const error = page.locator('.it-checkpoint-screen [role="status"]');
  await expect(error).toContainText('Voice input is unavailable in this browser or page context');

  await page.locator('#lIT').click();
  await expect(error).toContainText('L’inserimento vocale non è disponibile in questo browser o contesto');

  await page.locator('#lEN').click();
  await expect(error).toContainText('Voice input is unavailable in this browser or page context');
});
